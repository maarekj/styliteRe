'use strict';

var $$Map         = require("bs-platform/lib/js/map.js");
var List          = require("bs-platform/lib/js/list.js");
var Curry         = require("bs-platform/lib/js/curry.js");
var $$String      = require("bs-platform/lib/js/string.js");
var Stylite_rules = require("./stylite_rules.js");

var StringMap = $$Map.Make([$$String.compare]);

function create() {
  return /* record */[
          /* map */StringMap[/* empty */0],
          /* listeners : [] */0,
          /* listener_id */0
        ];
}

function replace_amp_by_classname(classname, rules) {
  var amp_reg = new RegExp("&", "g");
  var replace_aux = function (param) {
    var selectors = List.map((function (param) {
            return param.replace(amp_reg, classname);
          }), param[0]);
    return /* tuple */[
            selectors,
            param[1]
          ];
  };
  return List.map(replace_aux, rules);
}

function register_rules(stylesheet, cls, $staropt$star, $staropt$star$1, _) {
  var decl = $staropt$star ? $staropt$star[0] : /* [] */0;
  var rules = $staropt$star$1 ? $staropt$star$1[0] : /* [] */0;
  var rules$1 = decl ? /* :: */[
      /* tuple */[
        /* :: */[
          "&",
          /* [] */0
        ],
        decl
      ],
      rules
    ] : rules;
  stylesheet[/* map */0] = Curry._3(StringMap[/* add */3], cls, rules$1, stylesheet[/* map */0]);
  List.iter((function (listener) {
          return Curry._1(listener[/* callable */1], /* RegisterRulesEvent */[
                      cls,
                      rules$1
                    ]);
        }), stylesheet[/* listeners */1]);
  return "." + cls;
}

function get_all_rules(stylesheet) {
  var rules = Curry._2(StringMap[/* mapi */23], (function (classname, rules) {
          return replace_amp_by_classname("." + classname, rules);
        }), stylesheet[/* map */0]);
  return List.flatten(List.map((function (param) {
                    return param[1];
                  }), Curry._1(StringMap[/* bindings */16], rules)));
}

function remove_listener(stylesheet, id) {
  stylesheet[/* listeners */1] = List.filter((function (item) {
            return +(item[/* id */0] !== id);
          }))(stylesheet[/* listeners */1]);
  return /* () */0;
}

function add_listener(stylesheet, listener) {
  var id = stylesheet[/* listener_id */2] + 1 | 0;
  stylesheet[/* listener_id */2] = id;
  var listener$1 = /* record */[
    /* id */id,
    /* callable */listener
  ];
  stylesheet[/* listeners */1] = /* :: */[
    listener$1,
    stylesheet[/* listeners */1]
  ];
  return (function () {
      return remove_listener(stylesheet, id);
    });
}

function inject_in_tag(stylesheet, id) {
  var $$document$1 = document;
  var match = $$document$1.getElementById(id);
  var styleTag;
  if (match !== null) {
    styleTag = match;
  } else {
    var styleTag$1 = $$document$1.createElement("style");
    styleTag$1.setAttribute("type", "text/css");
    styleTag$1.id = id;
    var heads = $$document$1.getElementsByTagName("head");
    var head = heads.item(0);
    if (!(head == null)) {
      head.appendChild(styleTag$1);
    }
    styleTag = styleTag$1;
  }
  styleTag.textContent = Stylite_rules.print_rules(get_all_rules(stylesheet));
  return /* () */0;
}

exports.StringMap                = StringMap;
exports.create                   = create;
exports.replace_amp_by_classname = replace_amp_by_classname;
exports.register_rules           = register_rules;
exports.get_all_rules            = get_all_rules;
exports.remove_listener          = remove_listener;
exports.add_listener             = add_listener;
exports.inject_in_tag            = inject_in_tag;
/* StringMap Not a pure module */
