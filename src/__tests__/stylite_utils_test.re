open Jest;

open ExpectJs;

open Stylite_utils;

describe(
  "join",
  () =>
    test(
      "join",
      () => {
        let list = ["joseph", "vanessa", "yona", "na\195\169li"];
        let joined = list |> join(" | ");
        expect(joined) |> toEqual("joseph | vanessa | yona | na\195\169li")
      }
    )
);
