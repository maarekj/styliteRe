open Jest;
open ExpectJs;
open Stylite_rules;

describe "print_rule" (fun () => {
  test "simple rule" (fun () => {
    let my_rule = (["#button-1", ".big-rectangle"], [BackgroundColor "red", PaddingTop "10px"]);
    let css = print_rule my_rule;
    let expected_css = "#button-1, .big-rectangle {
  background-color: red;
  padding-top: 10px;
}";
    expect css |> toEqual expected_css;
  })
});

describe "print_rules" (fun () => {
  test "print_rules" (fun () => {
    let rules = print_rules [
      (["#my-id .my-class", "#my-id .my-class:hover"], [
        Margin "1px 1px 2px 2px",
        PaddingBottom "2px",
        Color "red"
      ]),
      (["#my-id .my-class-2"], [
        BackgroundColor "red",
      ])
    ];
    expect rules |> toEqual "#my-id .my-class, #my-id .my-class:hover {
  margin: 1px 1px 2px 2px;
  padding-bottom: 2px;
  color: red;
}
#my-id .my-class-2 {
  background-color: red;
}"
  });
});