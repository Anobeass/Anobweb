"use strict";

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(source, true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(source).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _nonIterableRest(); }

function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance"); }

function _iterableToArrayLimit(arr, i) { if (!(Symbol.iterator in Object(arr) || Object.prototype.toString.call(arr) === "[object Arguments]")) { return; } var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }

function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }

function _toConsumableArray(arr) { return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _nonIterableSpread(); }

function _nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance"); }

function _iterableToArray(iter) { if (Symbol.iterator in Object(iter) || Object.prototype.toString.call(iter) === "[object Arguments]") return Array.from(iter); }

function _arrayWithoutHoles(arr) { if (Array.isArray(arr)) { for (var i = 0, arr2 = new Array(arr.length); i < arr.length; i++) { arr2[i] = arr[i]; } return arr2; } }

(function () {
  var e = {};
  e.id = 195, e.ids = [195, 888, 660], e.modules = {
    1625: function _(e, t, s) {
      "use strict";

      s.r(t), s.d(t, {
        config: function config() {
          return Z;
        },
        "default": function _default() {
          return C;
        },
        getServerSideProps: function getServerSideProps() {
          return N;
        },
        getStaticPaths: function getStaticPaths() {
          return P;
        },
        getStaticProps: function getStaticProps() {
          return S;
        },
        reportWebVitals: function reportWebVitals() {
          return D;
        },
        routeModule: function routeModule() {
          return T;
        },
        unstable_getServerProps: function unstable_getServerProps() {
          return B;
        },
        unstable_getServerSideProps: function unstable_getServerSideProps() {
          return E;
        },
        unstable_getStaticParams: function unstable_getStaticParams() {
          return A;
        },
        unstable_getStaticPaths: function unstable_getStaticPaths() {
          return R;
        },
        unstable_getStaticProps: function unstable_getStaticProps() {
          return q;
        }
      });
      var i = {};
      s.r(i), s.d(i, {
        "default": function _default() {
          return y;
        },
        getStaticProps: function getStaticProps() {
          return j;
        }
      });
      var a = s(5872),
          r = s(3593),
          n = s(1323),
          o = s(2899),
          l = s.n(o),
          c = s(3414),
          d = s(997),
          u = s(968),
          m = s.n(u),
          h = s(1163),
          p = s.n(h),
          g = s(6689),
          b = s(2506);
      s(9883);
      var x = s(1957),
          f = s(6929),
          v = s(9954),
          k = s(4683),
          w = s(3368);

      function j() {
        return regeneratorRuntime.async(function j$(_context) {
          while (1) {
            switch (_context.prev = _context.next) {
              case 0:
                return _context.abrupt("return", {
                  props: {
                    posts: _toConsumableArray((0, w.Bd)(["slug", "title", "image", "preview", "author", "date"]))
                  }
                });

              case 1:
              case "end":
                return _context.stop();
            }
          }
        });
      }

      var y = function y(_ref) {
        var e = _ref.posts;

        var t = (0, g.useRef)(v.showBlog),
            s = (0, g.useRef)(),
            i = (0, h.useRouter)(),
            _ref2 = (0, g.useState)(!1),
            _ref3 = _slicedToArray(_ref2, 2),
            a = _ref3[0],
            r = _ref3[1];

        return (0, k.LI)(function () {
          (0, b.E)([s.current], {
            y: 40,
            x: -10,
            transform: "scale(0.95) skew(10deg)"
          }, {
            y: 0,
            x: 0,
            transform: "scale(1)"
          }), t.current ? (0, b.E)([s.current], {
            y: 30
          }, {
            y: 0
          }) : i.push("/");
        }, []), (0, g.useEffect)(function () {
          r(!0);
        }, []), t.current && (0, d.jsxs)(d.Fragment, {
          children: [v.showCursor && (0, d.jsx)(x.Z, {}), (0, d.jsx)(m(), {
            children: (0, d.jsx)("title", {
              children: "Blog"
            })
          }), (0, d.jsxs)("div", {
            className: "container mx-auto mb-10 ".concat(v.showCursor && "cursor-none"),
            children: [(0, d.jsx)(f.Z, {
              isBlog: !0
            }), (0, d.jsxs)("div", {
              className: "mt-10",
              children: [(0, d.jsx)("h1", {
                ref: s,
                className: "mx-auto mob:p-2 text-bold text-6xl laptop:text-8xl w-full",
                children: "Blog."
              }), (0, d.jsx)("div", {
                className: "mt-10 grid grid-cols-1 mob:grid-cols-1 tablet:grid-cols-2 laptop:grid-cols-3 justify-between gap-10",
                children: e && e.map(function (e) {
                  return (0, d.jsxs)("div", {
                    className: "cursor-pointer relative",
                    onClick: function onClick() {
                      return p().push("/blog/".concat(e.slug));
                    },
                    children: [(0, d.jsx)("img", {
                      className: "w-full h-60 rounded-lg shadow-lg object-cover",
                      src: e.image,
                      alt: e.title
                    }), (0, d.jsx)("h2", {
                      className: "mt-5 text-4xl",
                      children: e.title
                    }), (0, d.jsx)("p", {
                      className: "mt-2 opacity-50 text-lg",
                      children: e.preview
                    }), (0, d.jsx)("span", {
                      className: "text-sm mt-5 opacity-25",
                      children: (0, k.KO)(e.date)
                    }), !1]
                  }, e.slug);
                })
              })]
            })]
          }), !1]
        });
      },
          C = (0, n.l)(i, "default"),
          S = (0, n.l)(i, "getStaticProps"),
          P = (0, n.l)(i, "getStaticPaths"),
          N = (0, n.l)(i, "getServerSideProps"),
          Z = (0, n.l)(i, "config"),
          D = (0, n.l)(i, "reportWebVitals"),
          q = (0, n.l)(i, "unstable_getStaticProps"),
          R = (0, n.l)(i, "unstable_getStaticPaths"),
          A = (0, n.l)(i, "unstable_getStaticParams"),
          B = (0, n.l)(i, "unstable_getServerProps"),
          E = (0, n.l)(i, "unstable_getServerSideProps"),
          T = new a.PagesRouteModule({
        definition: {
          kind: r.x.PAGES,
          page: "/blog",
          pathname: "/blog",
          bundlePath: "",
          filename: ""
        },
        components: {
          App: c["default"],
          Document: l()
        },
        userland: i
      });
    },
    2506: function _(e, t, s) {
      "use strict";

      s.d(t, {
        E: function E() {
          return r;
        }
      });
      var i = s(4287),
          a = s.n(i);

      var r = function r(e, t, s) {
        return a().fromTo(e, _objectSpread({
          opacity: 0
        }, t), _objectSpread({
          opacity: 1
        }, s, {
          stagger: .3,
          ease: i.Power3.easeOut
        }));
      };
    },
    9883: function _(e, t, s) {
      "use strict";

      s.d(t, {
        Z: function Z() {
          return n;
        }
      });
      var i = s(997);
      s(6689);
      var a = s(1162),
          r = s(9954);

      var n = function n(_ref4) {
        var e = _ref4.children,
            t = _ref4.type,
            s = _ref4.onClick,
            n = _ref4.classes;

        var _ref5 = (0, a.useTheme)(),
            o = _ref5.theme;

        return "primary" === t ? (0, i.jsx)("button", {
          onClick: s,
          type: "button",
          className: "text-sm tablet:text-base p-1 laptop:p-2 m-1 laptop:m-2 rounded-lg ".concat("dark" === o ? "bg-white text-black" : "bg-black text-white", "  transition-all duration-300 ease-out first:ml-0 hover:scale-105 active:scale-100 link ").concat(r.showCursor && "cursor-none", "  ").concat(n),
          children: e
        }) : (0, i.jsx)("button", {
          onClick: s,
          type: "button",
          className: "text-sm tablet:text-base p-1 laptop:p-2 m-1 laptop:m-2 rounded-lg flex items-center transition-all ease-out duration-300 ".concat("dark" === o ? "hover:bg-slate-600 text-white" : "hover:bg-slate-100", " hover:scale-105 active:scale-100  tablet:first:ml-0  ").concat(r.showCursor && "cursor-none", " ").concat(n, " link"),
          children: e
        });
      };
    },
    1957: function _(e, t, s) {
      "use strict";

      s.d(t, {
        Z: function Z() {
          return l;
        }
      });
      var i = s(997),
          a = s(6689),
          r = s(1263),
          n = s.n(r);
      s(6814);
      var o = s(1162);

      var l = function l() {
        var e = (0, o.useTheme)(),
            _ref6 = (0, a.useState)(),
            _ref7 = _slicedToArray(_ref6, 2),
            t = _ref7[0],
            s = _ref7[1];

        return (0, a.useEffect)(function () {
          s(!0);
        }, []), (0, i.jsx)(i.Fragment, {
          children: t && (0, i.jsx)(n(), {
            targets: [".link"],
            customClass: "custom-cursor",
            dimensions: 30,
            fill: "dark" === e.theme ? "#fff" : "light" === e.theme ? "#000" : void 0,
            smoothness: {
              movement: .2,
              scale: .1,
              opacity: .2
            },
            targetOpacity: .5,
            targetScale: 2
          })
        });
      };
    },
    6929: function _(e, t, s) {
      "use strict";

      s.d(t, {
        Z: function Z() {
          return d;
        }
      });
      var i = s(997),
          a = s(5918),
          r = s(1162),
          n = s(1163),
          o = s(6689),
          l = s(9883),
          c = s(9954);

      var d = function d(_ref8) {
        var e = _ref8.handleWorkScroll,
            t = _ref8.handleAboutScroll,
            s = _ref8.isBlog;

        var d = (0, n.useRouter)(),
            _ref9 = (0, r.useTheme)(),
            u = _ref9.theme,
            m = _ref9.setTheme,
            _ref10 = (0, o.useState)(!1),
            _ref11 = _slicedToArray(_ref10, 2),
            h = _ref11[0],
            p = _ref11[1],
            g = c.name,
            b = c.showBlog,
            x = c.showResume;

        return (0, o.useEffect)(function () {
          p(!0);
        }, []), (0, i.jsxs)(i.Fragment, {
          children: [(0, i.jsx)(a.J, {
            className: "block tablet:hidden mt-5 sticky top-0 bg-white shadow z-10",
            children: function children(_ref12) {
              var r = _ref12.open;
              return (0, i.jsxs)(i.Fragment, {
                children: [(0, i.jsxs)("div", {
                  className: "flex items-center justify-between p-2 laptop:p-0",
                  children: [(0, i.jsx)("h1", {
                    onClick: function onClick() {
                      return d.push("/");
                    },
                    className: "font-bold p-2 laptop:p-0 link text-xl",
                    children: g
                  }), (0, i.jsxs)("div", {
                    className: "flex items-center p-4",
                    children: [c.darkMode && (0, i.jsx)(l.Z, {
                      onClick: function onClick() {
                        return m("dark" === u ? "light" : "dark");
                      },
                      children: (0, i.jsx)("img", {
                        className: "h-6",
                        src: "/images/".concat("dark" === u ? "moon.svg" : "sun.svg")
                      })
                    }), (0, i.jsx)(a.J.Button, {
                      children: (0, i.jsx)("img", {
                        className: "h-5",
                        src: "/images/".concat(r ? "light" === u ? "cancel.svg" : "cancel-white.svg" : "dark" === u ? "menu-white.svg" : "menu.svg")
                      })
                    })]
                  })]
                }), (0, i.jsx)(a.J.Panel, {
                  className: "absolute right-0 z-10 w-11/12 p-4 ".concat("dark" === u ? "bg-slate-800" : "bg-white", " shadow-md rounded-md"),
                  children: s ? (0, i.jsxs)("div", {
                    className: "grid grid-cols-1",
                    children: [(0, i.jsx)(l.Z, {
                      onClick: function onClick() {
                        return d.push("/");
                      },
                      classes: "first:ml-1",
                      children: "Home"
                    }), b && (0, i.jsx)(l.Z, {
                      onClick: function onClick() {
                        return d.push("/blog");
                      },
                      children: "Blog"
                    }), x && (0, i.jsx)(l.Z, {
                      onClick: function onClick() {
                        return d.push("/resume");
                      },
                      classes: "first:ml-1",
                      children: "Resume"
                    }), (0, i.jsx)(l.Z, {
                      onClick: function onClick() {
                        return window.open("mailto:anobeassale@gmail.com");
                      },
                      children: "Contact"
                    })]
                  }) : (0, i.jsxs)("div", {
                    className: "grid grid-cols-1",
                    children: [(0, i.jsx)(l.Z, {
                      onClick: e,
                      children: "Work"
                    }), (0, i.jsx)(l.Z, {
                      onClick: t,
                      children: "About"
                    }), b && (0, i.jsx)(l.Z, {
                      onClick: function onClick() {
                        return d.push("/blog");
                      },
                      children: "Blog"
                    }), x && (0, i.jsx)(l.Z, {
                      onClick: function onClick() {
                        return window.open("mailto:anobeassale@gmail.com");
                      },
                      children: "Resume"
                    }), (0, i.jsx)(l.Z, {
                      onClick: function onClick() {
                        return window.open("mailto:anobeassale@gmail.com");
                      },
                      children: "Contact"
                    })]
                  })
                })]
              });
            }
          }), (0, i.jsxs)("div", {
            className: "mt-10 hidden flex-row items-center justify-between sticky ".concat("light" === u && "bg-white", " dark:text-white top-0 z-10 tablet:flex"),
            children: [(0, i.jsxs)("h1", {
              onClick: function onClick() {
                return d.push("/");
              },
              className: "font-medium cursor-pointer mob:p-2 laptop:p-0",
              children: [g, "."]
            }), s ? (0, i.jsxs)("div", {
              className: "flex",
              children: [(0, i.jsx)(l.Z, {
                onClick: function onClick() {
                  return d.push("/");
                },
                children: "Home"
              }), b && (0, i.jsx)(l.Z, {
                onClick: function onClick() {
                  return d.push("/blog");
                },
                children: "Blog"
              }), x && (0, i.jsx)(l.Z, {
                onClick: function onClick() {
                  return d.push("/resume");
                },
                classes: "first:ml-1",
                children: "Resume"
              }), (0, i.jsx)(l.Z, {
                onClick: function onClick() {
                  return window.open("mailto:anobeassale@gmail.com");
                },
                children: "Contact"
              }), h && u && c.darkMode && (0, i.jsx)(l.Z, {
                onClick: function onClick() {
                  return m("dark" === u ? "light" : "dark");
                },
                children: (0, i.jsx)("img", {
                  className: "h-6",
                  src: "/images/".concat("dark" === u ? "moon.svg" : "sun.svg")
                })
              })]
            }) : (0, i.jsxs)("div", {
              className: "flex",
              children: [(0, i.jsx)(l.Z, {
                onClick: e,
                children: "Work"
              }), (0, i.jsx)(l.Z, {
                onClick: t,
                children: "About"
              }), b && (0, i.jsx)(l.Z, {
                onClick: function onClick() {
                  return d.push("/blog");
                },
                children: "Blog"
              }), x && (0, i.jsx)(l.Z, {
                onClick: function onClick() {
                  return d.push("/resume");
                },
                classes: "first:ml-1",
                children: "Resume"
              }), (0, i.jsx)(l.Z, {
                onClick: function onClick() {
                  return window.open("mailto:anobeassale@gmail.com");
                },
                children: "Contact"
              }), h && u && c.darkMode && (0, i.jsx)(l.Z, {
                onClick: function onClick() {
                  return m("dark" === u ? "light" : "dark");
                },
                children: (0, i.jsx)("img", {
                  className: "h-6",
                  src: "/images/".concat("dark" === u ? "moon.svg" : "sun.svg")
                })
              })]
            })]
          })]
        });
      };
    },
    3414: function _(e, t, s) {
      "use strict";

      s.r(t), s.d(t, {
        "default": function _default() {
          return r;
        }
      });
      var i = s(997);
      s(6764);
      var a = s(1162);

      var r = function r(_ref13) {
        var e = _ref13.Component,
            t = _ref13.pageProps;
        return (0, i.jsx)(a.ThemeProvider, {
          children: (0, i.jsx)(e, _objectSpread({}, t))
        });
      };
    },
    3368: function _(e, t, s) {
      "use strict";

      s.d(t, {
        Bd: function Bd() {
          return d;
        },
        zQ: function zQ() {
          return c;
        }
      });
      var i = s(2048),
          a = s.n(i),
          r = s(5315);

      var n = require("gray-matter");

      var o = s.n(n);
      var l = (0, r.join)(process.cwd(), "_posts");

      function c(e) {
        var t = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : [];

        var s = e.replace(/\.md$/, ""),
            i = (0, r.join)(l, "".concat(s, ".md")),
            n = a().readFileSync(i, "utf8"),
            _o = o()(n),
            d = _o.data,
            u = _o.content,
            m = {};

        return t.forEach(function (e) {
          "slug" === e && (m[e] = s), "content" === e && (m[e] = u), void 0 !== d[e] && (m[e] = d[e]);
        }), m;
      }

      function d() {
        var e = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : [];
        return a().readdirSync(l).map(function (t) {
          return c(t, e);
        }).sort(function (e, t) {
          return e.date > t.date ? -1 : 1;
        });
      }
    },
    4683: function _(e, t, s) {
      "use strict";

      s.d(t, {
        KO: function KO() {
          return a;
        },
        LI: function LI() {
          return i;
        }
      });
      var i = s(6689).useEffect;

      function a(e) {
        if (e) {
          var _t = new Date(e);

          return _t.getFullYear() + "-" + (_t.getMonth() + 1) + "-" + _t.getDate();
        }
      }
    },
    6764: function _() {},
    1263: function _(e) {
      "use strict";

      e.exports = require("react-cursor-position");
    },
    4287: function _(e) {
      "use strict";

      e.exports = require("gsap");
    },
    1162: function _(e) {
      "use strict";

      e.exports = require("next-themes");
    },
    2785: function _(e) {
      "use strict";

      e.exports = require("next/dist/compiled/next-server/pages.runtime.prod.js");
    },
    968: function _(e) {
      "use strict";

      e.exports = require("next/head");
    },
    6689: function _(e) {
      "use strict";

      e.exports = require("react");
    },
    6405: function _(e) {
      "use strict";

      e.exports = require("react-dom");
    },
    997: function _(e) {
      "use strict";

      e.exports = require("react/jsx-runtime");
    },
    2048: function _(e) {
      "use strict";

      e.exports = require("fs");
    },
    5315: function _(e) {
      "use strict";

      e.exports = require("path");
    },
    6162: function _(e) {
      "use strict";

      e.exports = require("stream");
    },
    1568: function _(e) {
      "use strict";

      e.exports = require("zlib");
    },
    9954: function _(e) {
      "use strict";

      e.exports = JSON.parse('{"name":"Anobeass","headerTaglineOne":"Hello there!","headerTaglineTwo":"I\'m Goudy Gareb","headerTaglineThree":"Graphic Designer","headerTaglineFour":" based in Saudi Arabia, Riyadh.","showCursor":true,"showBlog":false,"darkMode":true,"showResume":true,"socials":[{"id":"1","title":"Behance","link":"https://www.behance.net/GoudyGareb"},{"id":"2","title":"LinkedIn","link":"https://www.linkedin.com/in/goudygareb-anobeass/"},{"id":"3","title":"Pinterest","link":"https://www.pinterest.com/anobeass/"},{"id":"5","title":"Email","link":"anobeassale@gmail.com"},{"id":"34e539d6-d3e9-4ef3-9b97-2f90c3c19af3","title":"Instagram","link":"https://www.instagram.com/anobeass"},{"id":"05db60ba-9d35-43f5-8fdd-ba6a24f0ac7f","title":"Facebook","link":"https://www.facebook.com/Anobeass/"}],"projects":[{"id":"1","title":"Uqdat Visual identity | عقدة هوية بصرية","description":"Visual identity.","imageSrc":"https://cdn.discordapp.com/attachments/1294021635816427540/1302090521577128017/Untitled-1.png?ex=6726d9cc&is=6725884c&hm=c0159b2bfa6b56e40019b5d30e06d3b2f226e58e4b664da1a7d003ca3fee1d15&","url":"https://www.behance.net/gallery/209394847/Uqdat-Visual-identity-"},{"id":"2","title":"BOOKCOVER Foilo","description":"book covers design.","imageSrc":"https://cdn.discordapp.com/attachments/1294021635816427540/1302093577958068284/Coverfoilo_01.png?ex=6726dca4&is=67258b24&hm=ac04e217dc93cc9539c67b707e4e39468c22803499d5f570dfff0249e0cc126c&","url":"https://www.behance.net/gallery/208778285/CoverFoilo"}],"services":[{"id":"1","title":"Book Covers Designing","description":"We specialize in the creation and development of captivating book cover designs, with a strong focus on visually appealing and impactful aesthetics that bring stories to life."},{"id":"2","title":"Logo Designing","description":"We design unique logos that capture the essence of your brand, creating memorable and distinctive visuals that set your brand apart from competitors."},{"id":"3","title":"Visual identity","description":"We create comprehensive visual identities that encompass logo design, color palettes, typography, and other essential design elements, ensuring your brand communicates its values and stands out in the market."},{"id":"4","title":"Brand Strategy","description":"We craft comprehensive brand strategies and complete brand identities that define your brand\'s vision, mission, and values, along with its visual components. Our approach ensures a cohesive narrative and impactful presence that engages your audience and sets you apart in the marketplace."}],"aboutpara":"Graphic Designer with 5+ years of experience in book cover design, logo design, typography, thumbnails, visual identities, and social media posts. Skilled at creating impactful and effective visual content.","resume":{"tagline":"I\'m a Graphic Designer.","description":"Graphic Designer with 5+ years of experience in book cover design, logo design, typography, thumbnails, visual identities, and social media posts. Skilled at creating impactful and effective visual content.","experiences":[{"id":"1","dates":"July 2023 - July 2024","type":"Remotely","position":"Creative Director ","bullets":"at Arabic spring Team"},{"id":"d495c23b-4f65-479a-9b8a-cfbc1c089725","dates":"July 2022- July 2023","type":"Remotely","position":"Senior Graphic Designer ","bullets":"at DesignSolders Team"},{"id":"5c2db7db-5498-4107-b45c-74368ea6e424","dates":"December 2021- June 2022","type":"Remotely","position":"Junior Graphic Designer","bullets":"at Inspirationhall Team."}],"education":{"universityName":"Our expatriate children / High school","universityDate":"2022 - 2025, Riyadh","universityPara":"A specialized educational institution offering the Egyptian curriculum to the children of the Egyptian community in Saudi Arabia."},"languages":["Arabic ","English","Korean","German","French"],"frameworks":["Adobe Photoshop","Adobe Illustrator","Adobe InDesign","Adobe premiere","Figma","Microsoft Excel","Microsoft PowerPoint","Google Sheets","Canva"],"others":["Project Management","Team Leadership","Risk Assessment","Effective Communication","Time Management","Problem Solving","Decision Making","Quality Management","Process Improvement","Change Management","Negotiation Skills","Dedication to work","Willingness to learn and continuous improvement"]}}');
    }
  };

  var t = require("../webpack-runtime.js");

  t.C(e);

  var s = function s(e) {
    return t(t.s = e);
  },
      i = t.X(0, [899, 171], function () {
    return s(1625);
  });

  module.exports = i;
})();
//# sourceMappingURL=blog.dev.js.map
