'use strict';

var Stylite_stylesheet = require("./stylite_stylesheet.js");

function Make() {
  var stylesheet = Stylite_stylesheet.create(/* () */0);
  var register_rules = function (param, param$1, param$2, param$3) {
    return Stylite_stylesheet.register_rules(stylesheet, param, param$1, param$2, param$3);
  };
  var get_all_rules = function () {
    return Stylite_stylesheet.get_all_rules(stylesheet);
  };
  var add_listener = function (param) {
    return Stylite_stylesheet.add_listener(stylesheet, param);
  };
  var inject_in_tag = function (param) {
    return Stylite_stylesheet.inject_in_tag(stylesheet, param);
  };
  return /* module */[
          /* stylesheet */stylesheet,
          /* register_rules */register_rules,
          /* get_all_rules */get_all_rules,
          /* add_listener */add_listener,
          /* inject_in_tag */inject_in_tag
        ];
}

var Rules = 0;

var Stylesheet = 0;

exports.Rules      = Rules;
exports.Stylesheet = Stylesheet;
exports.Make       = Make;
/* Stylite_stylesheet Not a pure module */
