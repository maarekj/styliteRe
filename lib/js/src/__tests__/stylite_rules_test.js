'use strict';

var Jest          = require("bs-jest/lib/js/src/jest.js");
var Stylite_rules = require("../stylite_rules.js");

describe("join", (function () {
        return Jest.test("join", (function () {
                      var joined = Stylite_rules.join(" | ", /* :: */[
                            "joseph",
                            /* :: */[
                              "vanessa",
                              /* :: */[
                                "yona",
                                /* :: */[
                                  "na\xc3\xa9li",
                                  /* [] */0
                                ]
                              ]
                            ]
                          ]);
                      return Jest.ExpectJs[/* toEqual */11]("joseph | vanessa | yona | na\xc3\xa9li")(Jest.ExpectJs[/* expect */0](joined));
                    }));
      }));

describe("print_rules", (function () {
        return Jest.test("print_rules", (function () {
                      var rules = Stylite_rules.print_rules(/* :: */[
                            /* tuple */[
                              /* :: */[
                                "#my-id .my-class",
                                /* :: */[
                                  "#my-id .my-class:hover",
                                  /* [] */0
                                ]
                              ],
                              /* :: */[
                                [
                                  Stylite_rules.Margin,
                                  "1px 1px 2px 2px"
                                ],
                                /* :: */[
                                  [
                                    Stylite_rules.PaddingBottom,
                                    "2px"
                                  ],
                                  /* :: */[
                                    [
                                      Stylite_rules.Color,
                                      "red"
                                    ],
                                    /* [] */0
                                  ]
                                ]
                              ]
                            ],
                            /* :: */[
                              /* tuple */[
                                /* :: */[
                                  "#my-id .my-class-2",
                                  /* [] */0
                                ],
                                /* :: */[
                                  [
                                    Stylite_rules.BackgroundColor,
                                    "red"
                                  ],
                                  /* [] */0
                                ]
                              ],
                              /* [] */0
                            ]
                          ]);
                      return Jest.ExpectJs[/* toEqual */11]("#my-id .my-class, #my-id .my-class:hover {\n  margin: 1px 1px 2px 2px;\n  padding-bottom: 2px;\n  color: red;\n}\n#my-id .my-class-2 {\n  background-color: red;\n}")(Jest.ExpectJs[/* expect */0](rules));
                    }));
      }));

/*  Not a pure module */
