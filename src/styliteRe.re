module Rules = Stylite_rules;

module Stylesheet = Stylite_stylesheet;

module Make () => {
  let stylesheet = Stylesheet.create ();
  let register_rules = Stylesheet.register_rules stylesheet;
  let get_all_rules () => Stylesheet.get_all_rules stylesheet;
  let add_listener = Stylesheet.add_listener stylesheet;
  let inject_in_tag = Stylesheet.inject_in_tag stylesheet;
};