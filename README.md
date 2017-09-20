# The core

The core of `Stylite` is the ability to express CSS rules using `Reason` syntax.

A `selector` is a string of a CSS selector.
A `declaration` is a reason constuctor that corresponds to a css declaration e.g. `BackgroundColor "red"` or `PaddingTop "10px"`.

A `rule` is a couple made of:
1. a list of selectors
2. a list of declarations

Here is an example of a `rule`:
```reason
let my_rule = (["#button-1", ".big-rectangle"], [BackgroundColor "red", PaddingTop "10px"]);
```

We can convert a `rule` to a CSS statement with `print_rule`:
```reason
print my_rule;
/*
"#button-1, .big-rectangle {
  background-color: red;
  padding-top: 10px;
}";
*/
```

# Integration in an application

In order to integrate `Stylite` rules in an application one has to:
1. Create a `Stylite` instance with `Stylite.Make()`
2. Register the rules into a class with `register_rules`
3. Apply the class to an element
4. Load all the class rules (this is done differently for client side and server side rendering (`print_all_rules`))

# Register rules into a class

We can register 
```reason
let wrap_image_cls =
StyliteRe.Rules.(
    Stylite.register_rules
    cls::(prefix "wrap_image")
    declaration::[
            BorderRadius "30px",
            Border "1px solid",
            BorderColor "#19c0ff",
            MarginRight "15px",
            Cursor "pointer"
        ]
    ()
);
```

# Server side rendering

retrieve the CSS string with `print_all_rules` and put it into a `<style>` element

# Client side rendering

Once the first page of the app is created, inject the CSS into a tag and follow style changes with `inject_in_tag_and_follow_changes`.