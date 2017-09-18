'use strict';

var Jest               = require("bs-jest/lib/js/src/jest.js");
var Curry              = require("bs-platform/lib/js/curry.js");
var Stylite_rules      = require("../stylite_rules.js");
var Stylite_stylesheet = require("../stylite_stylesheet.js");

describe("stylesheet", (function () {
        var stylesheet = Stylite_stylesheet.create(/* () */0);
        Jest.test("register_rules", (function () {
                return Jest.ExpectJs[/* toEqual */11](".my-class")(Jest.ExpectJs[/* expect */0](Stylite_stylesheet.register_rules(stylesheet, "my-class", /* Some */[/* :: */[
                                      [
                                        Stylite_rules.Margin,
                                        "10px"
                                      ],
                                      /* :: */[
                                        [
                                          Stylite_rules.Padding,
                                          "5px"
                                        ],
                                        /* [] */0
                                      ]
                                    ]], /* None */0, /* () */0)));
              }));
        Jest.test("register_rules", (function () {
                return Jest.ExpectJs[/* toEqual */11](".my-class-2")(Jest.ExpectJs[/* expect */0](Stylite_stylesheet.register_rules(stylesheet, "my-class-2", /* Some */[/* :: */[
                                      [
                                        Stylite_rules.Margin,
                                        "10px"
                                      ],
                                      /* :: */[
                                        [
                                          Stylite_rules.Padding,
                                          "5px"
                                        ],
                                        /* [] */0
                                      ]
                                    ]], /* Some */[/* :: */[
                                      /* tuple */[
                                        /* :: */[
                                          "&:hover",
                                          /* :: */[
                                            "&:focused",
                                            /* [] */0
                                          ]
                                        ],
                                        /* :: */[
                                          [
                                            Stylite_rules.Color,
                                            "red"
                                          ],
                                          /* [] */0
                                        ]
                                      ],
                                      /* [] */0
                                    ]], /* () */0)));
              }));
        Jest.test("get_all_rules", (function () {
                var rules = Stylite_rules.print_rules(Stylite_stylesheet.get_all_rules(stylesheet));
                return Jest.ExpectJs[/* toEqual */11](".my-class {\n  margin: 10px;\n  padding: 5px;\n}\n.my-class-2 {\n  margin: 10px;\n  padding: 5px;\n}\n.my-class-2:hover, .my-class-2:focused {\n  color: red;\n}")(Jest.ExpectJs[/* expect */0](rules));
              }));
        describe("listener", (function () {
                var listener1_is_called = [/* false */0];
                var listener2_is_called = [/* false */0];
                var listener3_is_called = [/* false */0];
                var listener1 = function () {
                  listener1_is_called[0] = /* true */1;
                  return /* () */0;
                };
                var listener2 = function () {
                  listener2_is_called[0] = /* true */1;
                  return /* () */0;
                };
                var listener3 = function () {
                  listener3_is_called[0] = /* true */1;
                  return /* () */0;
                };
                Stylite_stylesheet.add_listener(stylesheet, listener1);
                Stylite_stylesheet.add_listener(stylesheet, listener2);
                var remove3 = Stylite_stylesheet.add_listener(stylesheet, listener3);
                Curry._1(remove3, /* () */0);
                Stylite_stylesheet.register_rules(stylesheet, "my-class-2", /* Some */[/* :: */[
                        [
                          Stylite_rules.Margin,
                          "10px"
                        ],
                        /* :: */[
                          [
                            Stylite_rules.Padding,
                            "5px"
                          ],
                          /* [] */0
                        ]
                      ]], /* Some */[/* :: */[
                        /* tuple */[
                          /* :: */[
                            "&:hover",
                            /* :: */[
                              "&:focused",
                              /* [] */0
                            ]
                          ],
                          /* :: */[
                            [
                              Stylite_rules.Color,
                              "red"
                            ],
                            /* [] */0
                          ]
                        ],
                        /* [] */0
                      ]], /* () */0);
                Jest.test("listener1 is called", (function () {
                        return Jest.ExpectJs[/* toEqual */11](/* true */1)(Jest.ExpectJs[/* expect */0](listener1_is_called[0]));
                      }));
                Jest.test("listener2 is called", (function () {
                        return Jest.ExpectJs[/* toEqual */11](/* true */1)(Jest.ExpectJs[/* expect */0](listener2_is_called[0]));
                      }));
                return Jest.test("listener3 not is called", (function () {
                              return Jest.ExpectJs[/* toEqual */11](/* false */0)(Jest.ExpectJs[/* expect */0](listener3_is_called[0]));
                            }));
              }));
        return /* () */0;
      }));

/*  Not a pure module */
