open Jest;

open ExpectJs;

open Stylite_stylesheet;

describe(
  "stylesheet",
  () => {
    let stylesheet = create();
    test(
      "register_rules",
      () =>
        expect(
          Stylite_rules.(
            register_rules(stylesheet, ~cls="my-class", ~decl=[Margin("10px"), Padding("5px")], ())
          )
        )
        |> toEqual("my-class")
    );
    test(
      "register_rules",
      () =>
        expect(
          Stylite_rules.(
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
    test(
      "get_all_rules",
      () => {
        let rules = Stylite_rules.print_rules(get_all_rules(stylesheet));
        expect(rules)
        |> toEqual(
             ".my-class {\n  margin: 10px;\n  padding: 5px;\n}\n.my-class-2 {\n  margin: 10px;\n  padding: 5px;\n}\n.my-class-2:hover, .my-class-2:focused {\n  color: red;\n}"
           )
      }
    );
    describe(
      "listener",
      () => {
        let listener1_is_called = ref(false);
        let listener2_is_called = ref(false);
        let listener3_is_called = ref(false);
        let listener1 = (_event) => listener1_is_called := true;
        let listener2 = (_event) => listener2_is_called := true;
        let listener3 = (_event) => listener3_is_called := true;
        let _remove1 = Stylite_stylesheet.add_listener(stylesheet, listener1);
        let _remove2 = Stylite_stylesheet.add_listener(stylesheet, listener2);
        let remove3 = Stylite_stylesheet.add_listener(stylesheet, listener3);
        remove3();
        ignore(
          Stylite_rules.(
            register_rules(
              stylesheet,
              ~cls="my-class-2",
              ~decl=[Margin("10px"), Padding("5px")],
              ~rules=[(["&:hover", "&:focused"], [Color("red")])],
              ()
            )
          )
        );
        test("listener1 is called", () => expect(listener1_is_called^) |> toEqual(true));
        test("listener2 is called", () => expect(listener2_is_called^) |> toEqual(true));
        test("listener3 not is called", () => expect(listener3_is_called^) |> toEqual(false))
      }
    )
  }
);
