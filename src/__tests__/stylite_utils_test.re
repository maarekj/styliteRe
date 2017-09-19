open Jest;
open ExpectJs;
open Stylite_utils;

describe "join" (fun () => {
  test "join" (fun () => {
    let list = ["joseph", "vanessa", "yona", "naéli"];
    let joined = list |> join " | ";
    expect joined |> toEqual "joseph | vanessa | yona | naéli"
  });
});