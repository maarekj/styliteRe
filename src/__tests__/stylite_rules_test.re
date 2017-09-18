open Jest;
open ExpectJs;
open Stylite_rules;

describe "join" (fun () => {
  test "join" (fun () => {
    let list = ["joseph", "vanessa", "yona", "naéli"];
    let joined = list |> join " | ";
    expect joined |> toEqual "joseph | vanessa | yona | naéli"
  });
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