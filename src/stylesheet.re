module StringMap = Map.Make(String);

type event =
  | RegisterRulesEvent(string, list(Rules.rule));

type listener = {
  id: int,
  callable: event => unit
};

type t = {
  mutable map: StringMap.t(list(Rules.mediaQuery)),
  mutable listeners: list(listener),
  mutable listener_id: int
};

let create = () => {map: StringMap.empty, listeners: [], listener_id: 0};

let replace_amp_by_classname = (classname: string, mediaQueries: list(Rules.mediaQuery)) : list(Rules.mediaQuery) => {
  let replaceInRules = rules => {
    let amp_reg = Js.Re.fromStringWithFlags("&", ~flags="g");
    let replace_aux = ((selectors, declarations)) => {
      let selectors = List.map(Js.String.replaceByRe(amp_reg, classname), selectors);
      (selectors, declarations);
    };
    List.map(replace_aux, rules);
  };
  mediaQueries |> List.map(((mediaQuery, rules)) => (mediaQuery, replaceInRules(rules)));
};

let register_rules = (stylesheet, ~cls, ~decl=[], ~rules=[], ~mediaQueries=[], ()) => {
  let rules =
    switch (decl, rules) {
    | ([], rules) => rules
    | (decl, rules) => [(["&"], decl), ...rules]
    };
  let mediaQueries =
    switch (mediaQueries, rules) {
    | ([], rules) => [(None, rules)]
    | (mediaQueries, rules) => [(None, rules), ...mediaQueries]
    };
  stylesheet.map = StringMap.add(cls, mediaQueries, stylesheet.map);
  stylesheet.listeners |> List.iter(listener => listener.callable(RegisterRulesEvent(cls, rules)));
  cls;
};

let get_all_media_queries = stylesheet => {
  let mediaQueries =
    StringMap.mapi((classname, mediaQuery) => replace_amp_by_classname("." ++ classname, mediaQuery), stylesheet.map);
  let mediaQueries = List.map(((_, value)) => value, StringMap.bindings(mediaQueries));
  List.flatten(mediaQueries);
};

let remove_listener = (stylesheet, id) =>
  stylesheet.listeners = stylesheet.listeners |> List.filter(item => item.id != id);

let add_listener = (stylesheet, listener) => {
  let id = stylesheet.listener_id + 1;
  stylesheet.listener_id = id;
  let listener = {id, callable: listener};
  stylesheet.listeners = [listener, ...stylesheet.listeners];
  () => remove_listener(stylesheet, id);
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
      styleTag;
    };
  ElementRe.setTextContent(styleTag, Rules.print_media_queries(get_all_media_queries(stylesheet)));
};