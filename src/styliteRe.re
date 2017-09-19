module Rules = Stylite_rules;

module Stylesheet = Stylite_stylesheet;

module Class = Stylite_class;

module type Interface = {
  let stylesheet: Stylite_stylesheet.t;
  let register_rules:
    cls::string =>
    decl::list Stylite_rules.declaration? =>
    rules::list Stylite_rules.rule? =>
    unit =>
    string;
  let get_all_rules: unit => list Stylite_rules.rule;
  let add_listener: (Stylite_stylesheet.event => unit) => unit => unit;
  let inject_in_tag: string => unit;
};

module Make () :Interface => {
  let stylesheet = Stylesheet.create ();
  let register_rules = Stylesheet.register_rules stylesheet;
  let get_all_rules () => Stylesheet.get_all_rules stylesheet;
  let add_listener = Stylesheet.add_listener stylesheet;
  let inject_in_tag = Stylesheet.inject_in_tag stylesheet;
};