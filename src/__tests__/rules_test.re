open Jest;

open Expect;

open Rules;

describe("print_rule", () =>
  test("simple rule", () => {
    let my_rule = (
      ["#button-1", ".big-rectangle"],
      [
        BackgroundColor("red"),
        PaddingTop("10px"),
        CustomProperty("my-prop", "10px"),
        CustomRule("my-rule: 10px;"),
        Content({js|—|js}),
      ],
    );
    let css = print_rule(my_rule);
    let expected_css = {js|#button-1, .big-rectangle {\n  background-color: red;\n  padding-top: 10px;\n  my-prop: 10px;\n  my-rule: 10px;\n  content: "—";\n}|js};
    expect(css) |> toEqual(expected_css);
  })
);

describe("print_rules", () =>
  test("print_rules", () => {
    let rules =
      print_rules([
        (
          ["#my-id .my-class", "#my-id .my-class:hover"],
          [Margin("1px 1px 2px 2px"), PaddingBottom("2px"), Color("red")],
        ),
        (["#my-id .my-class-2"], [BackgroundColor("red")]),
      ]);
    expect(rules)
    |> toEqual(
         "#my-id .my-class, #my-id .my-class:hover {\n  margin: 1px 1px 2px 2px;\n  padding-bottom: 2px;\n  color: red;\n}\n#my-id .my-class-2 {\n  background-color: red;\n}",
       );
  })
);

describe("print_media_query", () => {
  test("print_media_query with none", () => {
    let mediaQuery =
      print_media_query((
        None,
        [
          (
            ["#my-id .my-class", "#my-id .my-class:hover"],
            [
              Margin("1px 1px 2px 2px"),
              PaddingBottom("2px"),
              Color("red"),
            ],
          ),
          (["#my-id .my-class-2"], [BackgroundColor("red")]),
        ],
      ));
    expect(mediaQuery)
    |> toEqual(
         "#my-id .my-class, #my-id .my-class:hover {\n  margin: 1px 1px 2px 2px;\n  padding-bottom: 2px;\n  color: red;\n}\n#my-id .my-class-2 {\n  background-color: red;\n}",
       );
  });
  test("print_media_query", () => {
    let mediaQuery =
      print_media_query((
        Some("screen and (max-width: 664px)"),
        [
          (
            ["#my-id .my-class", "#my-id .my-class:hover"],
            [
              Margin("1px 1px 2px 2px"),
              PaddingBottom("2px"),
              Color("red"),
            ],
          ),
          (["#my-id .my-class-2"], [BackgroundColor("red")]),
        ],
      ));
    expect(mediaQuery)
    |> toEqual(
         "@media screen and (max-width: 664px) {\n#my-id .my-class, #my-id .my-class:hover {\n  margin: 1px 1px 2px 2px;\n  padding-bottom: 2px;\n  color: red;\n}\n#my-id .my-class-2 {\n  background-color: red;\n}\n}",
       );
  });
});

describe("print_media_queries", () =>
  test("print_media_queries", () => {
    let mediaQueries =
      print_media_queries([
        (
          None,
          [
            (
              ["#my-id .my-class", "#my-id .my-class:hover"],
              [
                Margin("1px 1px 2px 2px"),
                PaddingBottom("2px"),
                Color("red"),
              ],
            ),
            (["#my-id .my-class-2"], [BackgroundColor("red")]),
          ],
        ),
        (
          Some("screen and (max-width: 664px)"),
          [
            (
              ["#my-id .my-class", "#my-id .my-class:hover"],
              [
                Margin("1px 1px 2px 2px"),
                PaddingBottom("2px"),
                Color("red"),
              ],
            ),
            (["#my-id .my-class-2"], [BackgroundColor("red")]),
          ],
        ),
      ]);
    expect(mediaQueries)
    |> toEqual(
         {|#my-id .my-class, #my-id .my-class:hover {
  margin: 1px 1px 2px 2px;
  padding-bottom: 2px;
  color: red;
}
#my-id .my-class-2 {
  background-color: red;
}
@media screen and (max-width: 664px) {
#my-id .my-class, #my-id .my-class:hover {
  margin: 1px 1px 2px 2px;
  padding-bottom: 2px;
  color: red;
}
#my-id .my-class-2 {
  background-color: red;
}
}|},
       );
  })
);
