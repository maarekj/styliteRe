module Rules = Stylite_rules;

module Stylesheet = Stylite_stylesheet;

module Class = Stylite_class;

module type Interface = {
  let stylesheet: Stylite_stylesheet.t;
  let register_rules:
    (
      ~cls: string,
      ~decl: list(Stylite_rules.declaration)=?,
      ~rules: list(Stylite_rules.rule)=?,
      unit
    ) =>
    string;
  let get_all_rules: unit => list(Stylite_rules.rule);
  let print_all_rules: unit => string;
  let add_listener: (Stylite_stylesheet.event => unit, unit) => unit;
  let inject_in_tag: string => unit;
  let inject_in_tag_and_follow_changes: (string, unit) => unit;
};

module Make = (()) : Interface => {
  let stylesheet = Stylesheet.create();
  let register_rules = Stylesheet.register_rules(stylesheet);
  let get_all_rules = () => Stylesheet.get_all_rules(stylesheet);
  let print_all_rules = () => Rules.print_rules(get_all_rules());
  let add_listener = Stylesheet.add_listener(stylesheet);
  let inject_in_tag = Stylesheet.inject_in_tag(stylesheet);
  let inject_in_tag_and_follow_changes = (id) => {
    inject_in_tag(id);
    add_listener((_event) => inject_in_tag(id))
  };
};
