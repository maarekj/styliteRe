A `selector` is a string of a CSS selector.
A `declaration` is a reason constuctor that corresponds to a css declaration e.g. `BackgroundColor "red"` or `PaddingTop "10px"`.

A `rule` is a couple made of:
1. a list of selectors
2. a list of declarations

Here is an example of a `rule`:
```reason
(["#button-1", ".big-rectangle"] [(BackgroundColor "red", PaddingTop "10px"])
```



```reason
let wrap_image_cls =
StyliteRe.Rules.(
    Stylite.register_rules
    cls::(prefix "wrap_image")
    description::[
            BorderRadius "30px",
            Border "1px solid",
            BorderColor "#19c0ff",
            MarginRight "15px",
            Cursor "pointer"
        ]
    ()
);
```

