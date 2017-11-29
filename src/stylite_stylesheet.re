module StringMap = Map.Make(String);

type event =
  | RegisterRulesEvent(string, list(Stylite_rules.rule));

type listener = {
  id: int,
  callable: event => unit
};

type t = {
  mutable map: StringMap.t(list(Stylite_rules.rule)),
  mutable listeners: list(listener),
  mutable listener_id: int
};

let create = () => {map: StringMap.empty, listeners: [], listener_id: 0};

let replace_amp_by_classname =
    (classname: string, rules: list(Stylite_rules.rule))
    : list(Stylite_rules.rule) => {
  let amp_reg = Js.Re.fromStringWithFlags("&", ~flags="g");
  let replace_aux = ((selectors, declarations)) => {
    let selectors = List.map(Js.String.replaceByRe(amp_reg, classname), selectors);
    (selectors, declarations)
  };
  List.map(replace_aux, rules)
};

let register_rules = (stylesheet, ~cls, ~decl=[], ~rules=[], ()) => {
  let rules =
    switch (decl, rules) {
    | ([], rules) => rules
    | (decl, rules) => [(["&"], decl), ...rules]
    };
  stylesheet.map = StringMap.add(cls, rules, stylesheet.map);
  stylesheet.listeners
  |> List.iter((listener) => listener.callable(RegisterRulesEvent(cls, rules)));
  cls
};

let get_all_rules = (stylesheet) => {
  let rules =
    StringMap.mapi(
      (classname, rules) => replace_amp_by_classname("." ++ classname, rules),
      stylesheet.map
    );
  let rules = List.map(((_, value)) => value, StringMap.bindings(rules));
  List.flatten(rules)
};

let remove_listener = (stylesheet, id) =>
  stylesheet.listeners = stylesheet.listeners |> List.filter((item) => item.id != id);

let add_listener = (stylesheet, listener) => {
  let id = stylesheet.listener_id + 1;
  stylesheet.listener_id = id;
  let listener = {id, callable: listener};
  stylesheet.listeners = [listener, ...stylesheet.listeners];
  () => remove_listener(stylesheet, id)
};

let inject_in_tag = (stylesheet, id) => {
  let document = DomRe.document;
  let styleTag =
    switch (DocumentRe.getElementById(id, document)) {
    | Some(styleTag) => styleTag
    | None =>
      let styleTag = DocumentRe.createElement("style", document);
      ElementRe.setAttribute("type", "text/css", styleTag);
      ElementRe.setId(styleTag, id);
      let heads = DocumentRe.getElementsByTagName("head", document);
      let head = HtmlCollectionRe.item(0, heads);
      switch head {
      | None => ()
      | Some(head) => ElementRe.appendChild(styleTag, head)
      };
      styleTag
    };
  ElementRe.setTextContent(styleTag, Stylite_rules.print_rules(get_all_rules(stylesheet)))
};
