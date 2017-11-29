open Jest;

open ExpectJs;

open Stylite_rules;

describe(
  "styliteRe",
  () => {
    test(
      "instance with no rules",
      () => {
        module MyStylite =
          StyliteRe.Make(
            {}
          );
        let rules = MyStylite.get_all_rules();
        expect(List.length(rules)) |> toEqual(0)
      }
    );
    test(
      "instance with one rule",
      () => {
        module MyStylite =
          StyliteRe.Make(
            {}
          );
        let _cls = (MyStylite.register_rules(~cls="my-class", ~decl=[PaddingTop("10px")]))();
        let rules = MyStylite.get_all_rules();
        expect(List.length(rules)) |> toEqual(1)
      }
    );
    test(
      "returns the class that is passed",
      () => {
        module MyStylite =
          StyliteRe.Make(
            {}
          );
        let class_name = "my-class";
        let cls = (MyStylite.register_rules(~cls=class_name, ~decl=[PaddingTop("10px")]))();
        expect(cls) |> toEqual(class_name)
      }
    );
    test(
      "stores the class of the rule",
      () => {
        module MyStylite =
          StyliteRe.Make(
            {}
          );
        let class_name = "my-class";
        let _cls = (MyStylite.register_rules(~cls=class_name, ~decl=[PaddingTop("10px")]))();
        let rules = MyStylite.get_all_rules();
        let (cls, _decl) = List.nth(rules, 0);
        expect(cls) |> toEqual(["." ++ class_name])
      }
    );
    test(
      "stores the declaration of the rule",
      () => {
        module MyStylite =
          StyliteRe.Make(
            {}
          );
        let class_name = "my-class";
        let _cls = (MyStylite.register_rules(~cls=class_name, ~decl=[PaddingTop("10px")]))();
        let rules = MyStylite.get_all_rules();
        let (_cls, decl) = List.nth(rules, 0);
        expect(decl) |> toEqual([PaddingTop("10px")])
      }
    );
    test(
      "prints all the rules",
      () => {
        module MyStylite =
          StyliteRe.Make(
            {}
          );
        let class_name = "my-class";
        let _cls = (MyStylite.register_rules(~cls=class_name, ~decl=[PaddingTop("10px")]))();
        let css_rules = MyStylite.print_all_rules();
        let expected_rules = ".my-class {\n  padding-top: 10px;\n}";
        expect(css_rules) |> toEqual(expected_rules)
      }
    )
  }
);
