(function (e) {
  function t(t) {
    for (
      var o, c, l = t[0], i = t[1], s = t[2], d = 0, p = [];
      d < l.length;
      d++
    )
      (c = l[d]),
        Object.prototype.hasOwnProperty.call(a, c) && a[c] && p.push(a[c][0]),
        (a[c] = 0);
    for (o in i) Object.prototype.hasOwnProperty.call(i, o) && (e[o] = i[o]);
    u && u(t);
    while (p.length) p.shift()();
    return r.push.apply(r, s || []), n();
  }
  function n() {
    for (var e, t = 0; t < r.length; t++) {
      for (var n = r[t], o = !0, l = 1; l < n.length; l++) {
        var i = n[l];
        0 !== a[i] && (o = !1);
      }
      o && (r.splice(t--, 1), (e = c((c.s = n[0]))));
    }
    return e;
  }
  var o = {},
    a = { app: 0 },
    r = [];
  function c(t) {
    if (o[t]) return o[t].exports;
    var n = (o[t] = { i: t, l: !1, exports: {} });
    return e[t].call(n.exports, n, n.exports, c), (n.l = !0), n.exports;
  }
  (c.m = e),
    (c.c = o),
    (c.d = function (e, t, n) {
      c.o(e, t) || Object.defineProperty(e, t, { enumerable: !0, get: n });
    }),
    (c.r = function (e) {
      "undefined" !== typeof Symbol &&
        Symbol.toStringTag &&
        Object.defineProperty(e, Symbol.toStringTag, { value: "Module" }),
        Object.defineProperty(e, "__esModule", { value: !0 });
    }),
    (c.t = function (e, t) {
      if ((1 & t && (e = c(e)), 8 & t)) return e;
      if (4 & t && "object" === typeof e && e && e.__esModule) return e;
      var n = Object.create(null);
      if (
        (c.r(n),
        Object.defineProperty(n, "default", { enumerable: !0, value: e }),
        2 & t && "string" != typeof e)
      )
        for (var o in e)
          c.d(
            n,
            o,
            function (t) {
              return e[t];
            }.bind(null, o)
          );
      return n;
    }),
    (c.n = function (e) {
      var t =
        e && e.__esModule
          ? function () {
              return e["default"];
            }
          : function () {
              return e;
            };
      return c.d(t, "a", t), t;
    }),
    (c.o = function (e, t) {
      return Object.prototype.hasOwnProperty.call(e, t);
    }),
    (c.p = "/");
  var l = (window["webpackJsonp"] = window["webpackJsonp"] || []),
    i = l.push.bind(l);
  (l.push = t), (l = l.slice());
  for (var s = 0; s < l.length; s++) t(l[s]);
  var u = i;
  r.push([0, "chunk-vendors"]), n();
})({
  0: function (e, t, n) {
    e.exports = n("56d7");
  },
  1725: function (e) {
    e.exports = JSON.parse(
      '[{"id":1,"company":"Photosnap","logo":"photosnap.svg","new":true,"featured":true,"position":"Senior Frontend Developer","role":"Frontend","level":"Senior","postedAt":"1d ago","contract":"Full Time","location":"USA Only","languages":["HTML","CSS","JavaScript"],"tools":[]},{"id":2,"company":"Manage","logo":"manage.svg","new":true,"featured":true,"position":"Fullstack Developer","role":"Fullstack","level":"Midweight","postedAt":"1d ago","contract":"Part Time","location":"Remote","languages":["Python"],"tools":["React"]},{"id":3,"company":"Account","logo":"account.svg","new":true,"featured":false,"position":"Junior Frontend Developer","role":"Frontend","level":"Junior","postedAt":"2d ago","contract":"Part Time","location":"USA Only","languages":["JavaScript"],"tools":["React","Sass"]},{"id":4,"company":"MyHome","logo":"myhome.svg","new":false,"featured":false,"position":"Junior Frontend Developer","role":"Frontend","level":"Junior","postedAt":"5d ago","contract":"Contract","location":"USA Only","languages":["CSS","JavaScript"],"tools":[]},{"id":5,"company":"Loop Studios","logo":"loop-studios.svg","new":false,"featured":false,"position":"Software Engineer","role":"Fullstack","level":"Midweight","postedAt":"1w ago","contract":"Full Time","location":"Worldwide","languages":["JavaScript"],"tools":["Ruby","Sass"]},{"id":6,"company":"FaceIt","logo":"faceit.svg","new":false,"featured":false,"position":"Junior Backend Developer","role":"Backend","level":"Junior","postedAt":"2w ago","contract":"Full Time","location":"UK Only","languages":["Ruby"],"tools":["RoR"]},{"id":7,"company":"Shortly","logo":"shortly.svg","new":false,"featured":false,"position":"Junior Developer","role":"Frontend","level":"Junior","postedAt":"2w ago","contract":"Full Time","location":"Worldwide","languages":["HTML","JavaScript"],"tools":["Sass"]},{"id":8,"company":"Insure","logo":"insure.svg","new":false,"featured":false,"position":"Junior Frontend Developer","role":"Frontend","level":"Junior","postedAt":"2w ago","contract":"Full Time","location":"USA Only","languages":["JavaScript"],"tools":["Vue","Sass"]},{"id":9,"company":"Eyecam Co.","logo":"eyecam-co.svg","new":false,"featured":false,"position":"Full Stack Engineer","role":"Fullstack","level":"Midweight","postedAt":"3w ago","contract":"Full Time","location":"Worldwide","languages":["JavaScript","Python"],"tools":["Django"]},{"id":10,"company":"The Air Filter Company","logo":"the-air-filter-company.svg","new":false,"featured":false,"position":"Front-end Dev","role":"Frontend","level":"Junior","postedAt":"1mo ago","contract":"Part Time","location":"Worldwide","languages":["JavaScript"],"tools":["React","Sass"]}]'
    );
  },
  2655: function (e, t, n) {
    e.exports = n.p + "img/icon-remove.ae67c678.svg";
  },
  "318f": function (e, t, n) {
    e.exports = n.p + "img/faceit.76faa79f.svg";
  },
  "4b8b": function (e, t, n) {
    e.exports = n.p + "img/bg-header-mobile.6b5ff5a0.svg";
  },
  "4c1e": function (e, t, n) {
    e.exports = n.p + "img/myhome.e0ad9358.svg";
  },
  "52cf": function (e, t, n) {
    e.exports = n.p + "img/photosnap.3f34b49c.svg";
  },
  "56d7": function (e, t, n) {
    "use strict";
    n.r(t);
    n("e260"), n("e6cf"), n("cca6"), n("a79d");
    var o = n("7a23"),
      a = Object(o["e"])("header", null, null, -1),
      r = { class: "jobs" };
    function c(e, t, n, c, l, i) {
      var s = Object(o["l"])("Person");
      return (
        Object(o["i"])(),
        Object(o["d"])(
          o["a"],
          null,
          [a, Object(o["e"])("div", r, [Object(o["f"])(s)])],
          64
        )
      );
    }
    n("4de4"), n("d3b7"), n("fb6a"), n("ac1f"), n("1276");
    var l = { class: "filter" },
      i = Object(o["e"])("div", { class: "spans" }, null, -1),
      s = { class: "company" },
      u = ["src"],
      d = { class: "text" },
      p = { class: "first-line" },
      f = { class: "name" },
      g = { key: 0, class: "new" },
      A = { key: 1, class: "featured" },
      v = { class: "last-line" },
      b = { class: "lang" };
    function m(e, t, a, r, c, m) {
      return (
        Object(o["i"])(),
        Object(o["d"])(
          o["a"],
          null,
          [
            Object(o["e"])("div", l, [
              i,
              Object(o["e"])(
                "p",
                {
                  class: "clear",
                  onClick:
                    t[0] ||
                    (t[0] = function () {
                      return m.clear && m.clear.apply(m, arguments);
                    }),
                },
                "clear"
              ),
            ]),
            (Object(o["i"])(!0),
            Object(o["d"])(
              o["a"],
              null,
              Object(o["k"])(m.filter, function (e, a) {
                return (
                  Object(o["i"])(),
                  Object(o["d"])(
                    "div",
                    {
                      key: a,
                      class: Object(o["h"])(["job", { featured: e.featured }]),
                    },
                    [
                      Object(o["e"])("div", s, [
                        Object(o["e"])("div", null, [
                          Object(o["e"])(
                            "img",
                            { src: n("7584")("./".concat(e.logo)), alt: "" },
                            null,
                            8,
                            u
                          ),
                        ]),
                        Object(o["e"])("div", d, [
                          Object(o["e"])("div", p, [
                            Object(o["e"])(
                              "span",
                              f,
                              Object(o["m"])(e.company),
                              1
                            ),
                            e.new
                              ? (Object(o["i"])(),
                                Object(o["d"])("span", g, "NEW!"))
                              : Object(o["c"])("", !0),
                            e.featured
                              ? (Object(o["i"])(),
                                Object(o["d"])("span", A, "FEATURED"))
                              : Object(o["c"])("", !0),
                          ]),
                          Object(o["e"])(
                            "h3",
                            null,
                            Object(o["m"])(e.position),
                            1
                          ),
                          Object(o["e"])("div", v, [
                            Object(o["e"])(
                              "span",
                              null,
                              Object(o["m"])(e.postedAt),
                              1
                            ),
                            Object(o["e"])(
                              "span",
                              null,
                              Object(o["m"])(e.contract),
                              1
                            ),
                            Object(o["e"])(
                              "span",
                              null,
                              Object(o["m"])(e.location),
                              1
                            ),
                          ]),
                        ]),
                      ]),
                      Object(o["e"])("div", b, [
                        Object(o["e"])("ul", null, [
                          (Object(o["i"])(!0),
                          Object(o["d"])(
                            o["a"],
                            null,
                            Object(o["k"])(e.languages, function (e, n) {
                              return (
                                Object(o["i"])(),
                                Object(o["d"])(
                                  "li",
                                  {
                                    key: n,
                                    onClick:
                                      t[1] ||
                                      (t[1] = function () {
                                        return (
                                          m.add && m.add.apply(m, arguments)
                                        );
                                      }),
                                    class: "language",
                                  },
                                  Object(o["m"])(e),
                                  1
                                )
                              );
                            }),
                            128
                          )),
                          (Object(o["i"])(!0),
                          Object(o["d"])(
                            o["a"],
                            null,
                            Object(o["k"])(e.tools, function (e, n) {
                              return (
                                Object(o["i"])(),
                                Object(o["d"])(
                                  "li",
                                  {
                                    key: n,
                                    onClick:
                                      t[2] ||
                                      (t[2] = function () {
                                        return (
                                          m.add && m.add.apply(m, arguments)
                                        );
                                      }),
                                    class: "tool",
                                  },
                                  Object(o["m"])(e),
                                  1
                                )
                              );
                            }),
                            128
                          )),
                          (Object(o["i"])(!0),
                          Object(o["d"])(
                            o["a"],
                            null,
                            Object(o["k"])(
                              e.position.split(" ").slice(0, a),
                              function (e, n) {
                                return (
                                  Object(o["i"])(),
                                  Object(o["d"])(
                                    "li",
                                    {
                                      key: n,
                                      onClick:
                                        t[3] ||
                                        (t[3] = function () {
                                          return (
                                            m.add && m.add.apply(m, arguments)
                                          );
                                        }),
                                      class: "position",
                                    },
                                    Object(o["m"])(e),
                                    1
                                  )
                                );
                              }
                            ),
                            128
                          )),
                        ]),
                      ]),
                    ],
                    2
                  )
                );
              }),
              128
            )),
          ],
          64
        )
      );
    }
    n("caad"), n("2532"), n("159b"), n("a630"), n("3ca3");
    var O = n("1725"),
      j = n("2655"),
      y = n.n(j),
      h = {
        name: "Person",
        data: function () {
          return { data: [], names: [], len: 0 };
        },
        mounted: function () {
          this.data = O;
        },
        methods: {
          add: function (e) {
            var t = this,
              n = document.querySelector(".spans"),
              o = document.createElement("span"),
              a = document.createElement("button"),
              r = document.createElement("img");
            this.names.includes(e.target.innerHTML) ||
              ((o.innerHTML = e.target.innerHTML),
              o.classList.add(e.target.classList[0]),
              a.setAttribute("class", e.target.innerHTML),
              n.appendChild(o),
              r.setAttribute("src", y.a),
              a.appendChild(r),
              n.appendChild(a),
              this.names.push(o.innerHTML),
              (this.len += 1)),
              a.addEventListener("click", function (e) {
                var n = document.querySelectorAll(".spans span");
                n.forEach(function (n) {
                  n.innerHTML === e.currentTarget.classList[0] &&
                    (n.remove(),
                    (t.names = t.names.filter(function (e) {
                      return e !== n.innerHTML;
                    }))),
                    e.currentTarget.remove();
                }),
                  (t.len -= 1),
                  console.log(t.len);
              });
          },
          clear: function () {
            var e = this,
              t = document.querySelector(".spans").children;
            Array.from(t).forEach(function (t) {
              t.remove(),
                (e.names = e.names.filter(function (e) {
                  return e !== t.innerHTML;
                }));
            });
          },
        },
        computed: {
          filter: function () {
            var e,
              t = this,
              n = document.querySelectorAll(".spans span");
            return 0 === this.len
              ? this.data
              : (n.forEach(function (n) {
                  e = t.data.filter(function (e) {
                    return (
                      e.languages.includes(n.innerHTML) ||
                      e.tools.includes(n.innerHTML) ||
                      e.position.split(" ").includes(n.innerHTML)
                    );
                  });
                }),
                e);
          },
        },
      },
      S = (n("8ffc"), n("6b0d")),
      w = n.n(S);
    const E = w()(h, [["render", m]]);
    var M = E,
      k = { name: "App", components: { Person: M } };
    n("8eb2");
    const F = w()(k, [["render", c]]);
    var T = F,
      x = n("5502"),
      L = Object(x["a"])({
        state: {},
        mutations: {},
        actions: {},
        modules: {},
      });
    Object(o["b"])(T).use(L).mount("#app");
  },
  "57a5": function (e) {
    e.exports = "../img/the-air-filter-company.23b515f9.svg";
  },
  6518: function (e) {
    e.exports = "../img/eyecam-co.39eaebdf.svg";
  },
  "6d8a": function (e) {
    e.exports = "../img/account.9f72c13b.svg";
  },
  7584: function (e, t, n) {
    var o = {
      "./account.svg": "6d8a",
      "./bg-header-desktop.svg": "f898",
      "./bg-header-mobile.svg": "4b8b",
      "./eyecam-co.svg": "6518",
      "./faceit.svg": "318f",
      "./favicon-32x32.png": "f245",
      "./icon-remove.svg": "2655",
      "./insure.svg": "9b7a",
      "./loop-studios.svg": "7ab7",
      "./manage.svg": "d8b4",
      "./myhome.svg": "4c1e",
      "./photosnap.svg": "52cf",
      "./shortly.svg": "ba15",
      "./the-air-filter-company.svg": "57a5",
    };
    function a(e) {
      var t = r(e);
      return n(t);
    }
    function r(e) {
      if (!n.o(o, e)) {
        var t = new Error("Cannot find module '" + e + "'");
        throw ((t.code = "MODULE_NOT_FOUND"), t);
      }
      return o[e];
    }
    (a.keys = function () {
      return Object.keys(o);
    }),
      (a.resolve = r),
      (e.exports = a),
      (a.id = "7584");
  },
  "7ab7": function (e, t, n) {
    e.exports = n.p + "img/loop-studios.6c50fd74.svg";
  },
  "8eb2": function (e, t, n) {
    "use strict";
    n("a2c6");
  },
  "8ffc": function (e, t, n) {
    "use strict";
    n("a2c0");
  },
  "9b7a": function (e, t, n) {
    e.exports = n.p + "img/insure.52b85a50.svg";
  },
  a2c0: function (e, t, n) {},
  a2c6: function (e, t, n) {},
  ba15: function (e, t, n) {
    e.exports = n.p + "img/shortly.45f63772.svg";
  },
  d8b4: function (e, t, n) {
    e.exports = n.p + "img/manage.fbe431a9.svg";
  },
  f245: function (e, t) {
    e.exports =
      "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACAAAAAgCAMAAABEpIrGAAAABGdBTUEAALGPC/xhBQAAACBjSFJNAAB6JgAAgIQAAPoAAACA6AAAdTAAAOpgAAA6mAAAF3CculE8AAABO1BMVEUAAAD////////////////////////////////////////////////////////////////////////////////////////////////////////////////l9Pff8fS54ein2eOn2eL9/v684unr9vj7/f7c8PSl2eKHzNil2OLv+Prz+vue1eB3xdOq2uPm9Pf29/vy8/n3/Py13+eEyteZ097P6u/2+/zByeKOm8r8/f7u+Pq+4+qOz9uU0dzo9fjb4O5meLbh5fH0+vvV7fHx+fv8/P2Gk8Wbps+44eim2eLW2+xkdrXO1Oit3OWttthperja3u7u+Pn6+/2hrNJneLfFy+P7+/23v92IlcbN0ufx8/nj5/Kbp9BsfbltfrqAj8ORnsvg5PD+/v/v8ffQ1em0vduqtNfn6vS/61TcAAAAHHRSTlMAAAQqbK3Z8v0DN5ff+xqJ6jbC/kHBAjjp3qz8qSKHsgAAAAFiS0dEAf8CLd4AAAAJcEhZcwAACxMAAAsTAQCanBgAAAAHdElNRQfiChMPAx5FOtlkAAABSUlEQVQ4y4WTZ2OCMBCGc4IMEXAPjB10771t7dLuXbv3/v+/oNigIYjN+4HcJU9CcgMhVxASxLAkK4oshUUhBIgVqBEtqmNXelSLqF4EwDBjmFHMNADoejyRxD4lE/EGAZCScICkFCGc/YHrDkHOACON2yhtOABkTNxWZgYQZHPeqWKH18tlAakas6ezi3E1FQl5Fuhm3LyARD0AsIs9vSSmIrJwC9DXPzA4NEx8C0ktwMjo2PiE3YgFkokxOdUEpmdm5+YXXEBGCjEWl5bpHVZKq2tlMq+gAjHWNza9r9jarpD5QuMX1Z3dv3Fvn72T3LzkweFRfSgd+xJGn3lyeuZ8K+csYNFAXVzWrqr+bDmBoqG+vqnd3t3bDOCE2push8en55fXNzZZTLrfPz6/vn+oX083t2C4JccvWm7Z8xuH33r85v2v/X8Bp/FiyVLnL/0AAAAldEVYdGRhdGU6Y3JlYXRlADIwMTgtMTAtMTlUMTU6MDM6MzArMDI6MDCzEaEaAAAAJXRFWHRkYXRlOm1vZGlmeQAyMDE4LTEwLTE5VDE1OjAzOjMwKzAyOjAwwkwZpgAAAFd6VFh0UmF3IHByb2ZpbGUgdHlwZSBpcHRjAAB4nOPyDAhxVigoyk/LzEnlUgADIwsuYwsTIxNLkxQDEyBEgDTDZAMjs1Qgy9jUyMTMxBzEB8uASKBKLgDqFxF08kI1lQAAAABJRU5ErkJggg==";
  },
  f898: function (e, t, n) {
    e.exports = n.p + "img/bg-header-desktop.6e2f7196.svg";
  },
});
//# sourceMappingURL=app.bc9beb95.js.map
