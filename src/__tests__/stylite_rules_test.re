open Jest;

open ExpectJs;

open Stylite_rules;

describe(
  "print_rule",
  () =>
    test(
      "simple rule",
      () => {
        let my_rule = (
          ["#button-1", ".big-rectangle"],
          [BackgroundColor("red"), PaddingTop("10px"), CustomProperty("my-prop", "10px"), CustomRule("my-rule: 10px;")]
        );
        let css = print_rule(my_rule);
        let expected_css = "#button-1, .big-rectangle {\n  background-color: red;\n  padding-top: 10px;\n  my-prop: 10px;\n  my-rule: 10px;\n}";
        expect(css) |> toEqual(expected_css)
      }
    )
);

describe(
  "print_rules",
  () =>
    test(
      "print_rules",
      () => {
        let rules =
          print_rules([
            (
              ["#my-id .my-class", "#my-id .my-class:hover"],
              [Margin("1px 1px 2px 2px"), PaddingBottom("2px"), Color("red")]
            ),
            (["#my-id .my-class-2"], [BackgroundColor("red")])
          ]);
        expect(rules)
        |> toEqual(
             "#my-id .my-class, #my-id .my-class:hover {\n  margin: 1px 1px 2px 2px;\n  padding-bottom: 2px;\n  color: red;\n}\n#my-id .my-class-2 {\n  background-color: red;\n}"
           )
      }
    )
);
