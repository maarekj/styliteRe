open Jest;

open ExpectJs;

open Stylesheet;

describe("stylesheet", () => {
  let stylesheet = create();
  test("register_rules with decl", () =>
    expect(Rules.(register_rules(stylesheet, ~cls="my-class", ~decl=[Margin("10px"), Padding("5px")], ())))
    |> toEqual("my-class")
  );
  test("register_rules with decl and rules", () =>
    expect(
      Rules.(
        register_rules(
          stylesheet,
          ~cls="my-class-2",
          ~decl=[Margin("10px"), Padding("5px")],
          ~rules=[(["&:hover", "&:focused"], [Color("red")])],
          ()
        )
      )
    )
    |> toEqual("my-class-2")
  );
  test("register_rules with decl and rules and mediaQueries", () =>
    expect(
      Rules.(
        register_rules(
          stylesheet,
          ~cls="my-class-2",
          ~decl=[Margin("10px"), Padding("5px")],
          ~rules=[(["&:hover", "&:focused"], [Color("red")])],
          ~mediaQueries=[(Some("(max-width: 664px)"), [(["&"], [Color("blue")])])],
          ()
        )
      )
    )
    |> toEqual("my-class-2")
  );
  test("get_all", () => {
    let rules = Rules.print_media_queries(get_all_media_queries(stylesheet));
    expect(rules)
    |> toEqual(
         {|.my-class {
  margin: 10px;
  padding: 5px;
}
.my-class-2 {
  margin: 10px;
  padding: 5px;
}
.my-class-2:hover, .my-class-2:focused {
  color: red;
}
@media (max-width: 664px) {
.my-class-2 {
  color: blue;
}
}|}
       );
  });
  describe("listener", () => {
    let listener1_is_called = ref(false);
    let listener2_is_called = ref(false);
    let listener3_is_called = ref(false);
    let listener1 = _event => listener1_is_called := true;
    let listener2 = _event => listener2_is_called := true;
    let listener3 = _event => listener3_is_called := true;
    let _remove1 = Stylesheet.add_listener(stylesheet, listener1);
    let _remove2 = Stylesheet.add_listener(stylesheet, listener2);
    let remove3 = Stylesheet.add_listener(stylesheet, listener3);
    remove3();
    ignore(
      Rules.(
        register_rules(
          stylesheet,
          ~cls="my-class-2",
          ~decl=[Margin("10px"), Padding("5px")],
          ~rules=[(["&:hover", "&:focused"], [Color("red")])],
          ()
        )
      )
    );
    test("listener1 is called", () =>
      expect(listener1_is_called^) |> toEqual(true)
    );
    test("listener2 is called", () =>
      expect(listener2_is_called^) |> toEqual(true)
    );
    test("listener3 not is called", () =>
      expect(listener3_is_called^) |> toEqual(false)
    );
  });
});