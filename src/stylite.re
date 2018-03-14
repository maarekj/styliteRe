module type Interface = {
  let stylesheet: Stylesheet.t;
  let register_rules:
    (
      ~cls: string,
      ~decl: list(Rules.declaration)=?,
      ~rules: list(Rules.rule)=?,
      ~mediaQueries: list(Rules.mediaQuery)=?,
      unit
    ) =>
    string;
  let get_all: unit => list(Rules.mediaQuery);
  let print_all: unit => string;
  let add_listener: (Stylesheet.event => unit, unit) => unit;
  let inject_in_tag: string => unit;
  let inject_in_tag_and_follow_changes: (string, unit) => unit;
};

module Make = (()) : Interface => {
  let stylesheet = Stylesheet.create();
  let register_rules = Stylesheet.register_rules(stylesheet);
  let get_all = () => Stylesheet.get_all_media_queries(stylesheet);
  let print_all = () => Rules.print_media_queries(get_all());
  let add_listener = Stylesheet.add_listener(stylesheet);
  let inject_in_tag = Stylesheet.inject_in_tag(stylesheet);
  let inject_in_tag_and_follow_changes = id => {
    inject_in_tag(id);
    add_listener(_event => inject_in_tag(id));
  };
};