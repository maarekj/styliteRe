open Jest;

open Expect;

open Utils;

describe("join", () =>
  test("join", () => {
    let list = ["joseph", "vanessa", "yona", "na\195\169li"];
    let joined = list |> join(" | ");
    expect(joined) |> toEqual("joseph | vanessa | yona | na\195\169li");
  })
);
