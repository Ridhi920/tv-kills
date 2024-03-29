/*! For license information please see main.89947918.js.LICENSE.txt */ ! function () {
   var e = {
      945: function (e) {
         e.exports = function (e) {
            function t(r) {
               if (n[r]) return n[r].exports;
               var a = n[r] = {
                  exports: {},
                  id: r,
                  loaded: !1
               };
               return e[r].call(a.exports, a, a.exports, t), a.loaded = !0, a.exports
            }
            var n = {};
            return t.m = e, t.c = n, t.p = "dist/", t(0)
         }([function (e, t, n) {
            "use strict";

            function r(e) {
               return e && e.__esModule ? e : {
                  default: e
               }
            }
            var a = Object.assign || function (e) {
                  for (var t = 1; t < arguments.length; t++) {
                     var n = arguments[t];
                     for (var r in n) Object.prototype.hasOwnProperty.call(n, r) && (e[r] = n[r])
                  }
                  return e
               },
               l = (r(n(1)), n(6)),
               i = r(l),
               o = r(n(7)),
               u = r(n(8)),
               s = r(n(9)),
               c = r(n(10)),
               d = r(n(11)),
               f = r(n(14)),
               p = [],
               m = !1,
               h = {
                  offset: 120,
                  delay: 0,
                  easing: "ease",
                  duration: 400,
                  disable: !1,
                  once: !1,
                  startEvent: "DOMContentLoaded",
                  throttleDelay: 99,
                  debounceDelay: 50,
                  disableMutationObserver: !1
               },
               v = function () {
                  if (arguments.length > 0 && void 0 !== arguments[0] && arguments[0] && (m = !0), m) return p = (0, d.default)(p, h), (0, c.default)(p, h.once), p
               },
               g = function () {
                  p = (0, f.default)(), v()
               },
               y = function () {
                  p.forEach((function (e, t) {
                     e.node.removeAttribute("data-aos"), e.node.removeAttribute("data-aos-easing"), e.node.removeAttribute("data-aos-duration"), e.node.removeAttribute("data-aos-delay")
                  }))
               },
               b = function (e) {
                  return !0 === e || "mobile" === e && s.default.mobile() || "phone" === e && s.default.phone() || "tablet" === e && s.default.tablet() || "function" == typeof e && !0 === e()
               },
               w = function (e) {
                  h = a(h, e), p = (0, f.default)();
                  var t = document.all && !window.atob;
                  return b(h.disable) || t ? y() : (h.disableMutationObserver || u.default.isSupported() || (console.info('\n      aos: MutationObserver is not supported on this browser,\n      code mutations observing has been disabled.\n      You may have to call "refreshHard()" by yourself.\n    '), h.disableMutationObserver = !0), document.querySelector("body").setAttribute("data-aos-easing", h.easing), document.querySelector("body").setAttribute("data-aos-duration", h.duration), document.querySelector("body").setAttribute("data-aos-delay", h.delay), "DOMContentLoaded" === h.startEvent && ["complete", "interactive"].indexOf(document.readyState) > -1 ? v(!0) : "load" === h.startEvent ? window.addEventListener(h.startEvent, (function () {
                     v(!0)
                  })) : document.addEventListener(h.startEvent, (function () {
                     v(!0)
                  })), window.addEventListener("resize", (0, o.default)(v, h.debounceDelay, !0)), window.addEventListener("orientationchange", (0, o.default)(v, h.debounceDelay, !0)), window.addEventListener("scroll", (0, i.default)((function () {
                     (0, c.default)(p, h.once)
                  }), h.throttleDelay)), h.disableMutationObserver || u.default.ready("[data-aos]", g), p)
               };
            e.exports = {
               init: w,
               refresh: v,
               refreshHard: g
            }
         }, function (e, t) {}, , , , , function (e, t) {
            (function (t) {
               "use strict";

               function n(e, t, n) {
                  function r(t) {
                     var n = h,
                        r = v;
                     return h = v = void 0, E = t, y = e.apply(r, n)
                  }

                  function l(e) {
                     return E = e, b = setTimeout(c, t), C ? r(e) : y
                  }

                  function i(e) {
                     var n = t - (e - w);
                     return O ? S(n, g - (e - E)) : n
                  }

                  function u(e) {
                     var n = e - w;
                     return void 0 === w || n >= t || n < 0 || O && e - E >= g
                  }

                  function c() {
                     var e = k();
                     return u(e) ? d(e) : void(b = setTimeout(c, i(e)))
                  }

                  function d(e) {
                     return b = void 0, N && h ? r(e) : (h = v = void 0, y)
                  }

                  function f() {
                     void 0 !== b && clearTimeout(b), E = 0, h = w = v = b = void 0
                  }

                  function p() {
                     return void 0 === b ? y : d(k())
                  }

                  function m() {
                     var e = k(),
                        n = u(e);
                     if (h = arguments, v = this, w = e, n) {
                        if (void 0 === b) return l(w);
                        if (O) return b = setTimeout(c, t), r(w)
                     }
                     return void 0 === b && (b = setTimeout(c, t)), y
                  }
                  var h, v, g, y, b, w, E = 0,
                     C = !1,
                     O = !1,
                     N = !0;
                  if ("function" != typeof e) throw new TypeError(s);
                  return t = o(t) || 0, a(n) && (C = !!n.leading, g = (O = "maxWait" in n) ? x(o(n.maxWait) || 0, t) : g, N = "trailing" in n ? !!n.trailing : N), m.cancel = f, m.flush = p, m
               }

               function r(e, t, r) {
                  var l = !0,
                     i = !0;
                  if ("function" != typeof e) throw new TypeError(s);
                  return a(r) && (l = "leading" in r ? !!r.leading : l, i = "trailing" in r ? !!r.trailing : i), n(e, t, {
                     leading: l,
                     maxWait: t,
                     trailing: i
                  })
               }

               function a(e) {
                  var t = "undefined" == typeof e ? "undefined" : u(e);
                  return !!e && ("object" == t || "function" == t)
               }

               function l(e) {
                  return !!e && "object" == ("undefined" == typeof e ? "undefined" : u(e))
               }

               function i(e) {
                  return "symbol" == ("undefined" == typeof e ? "undefined" : u(e)) || l(e) && w.call(e) == d
               }

               function o(e) {
                  if ("number" == typeof e) return e;
                  if (i(e)) return c;
                  if (a(e)) {
                     var t = "function" == typeof e.valueOf ? e.valueOf() : e;
                     e = a(t) ? t + "" : t
                  }
                  if ("string" != typeof e) return 0 === e ? e : +e;
                  e = e.replace(f, "");
                  var n = m.test(e);
                  return n || h.test(e) ? v(e.slice(2), n ? 2 : 8) : p.test(e) ? c : +e
               }
               var u = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (e) {
                     return typeof e
                  } : function (e) {
                     return e && "function" == typeof Symbol && e.constructor === Symbol && e !== Symbol.prototype ? "symbol" : typeof e
                  },
                  s = "Expected a function",
                  c = NaN,
                  d = "[object Symbol]",
                  f = /^\s+|\s+$/g,
                  p = /^[-+]0x[0-9a-f]+$/i,
                  m = /^0b[01]+$/i,
                  h = /^0o[0-7]+$/i,
                  v = parseInt,
                  g = "object" == ("undefined" == typeof t ? "undefined" : u(t)) && t && t.Object === Object && t,
                  y = "object" == ("undefined" == typeof self ? "undefined" : u(self)) && self && self.Object === Object && self,
                  b = g || y || Function("return this")(),
                  w = Object.prototype.toString,
                  x = Math.max,
                  S = Math.min,
                  k = function () {
                     return b.Date.now()
                  };
               e.exports = r
            }).call(t, function () {
               return this
            }())
         }, function (e, t) {
            (function (t) {
               "use strict";

               function n(e, t, n) {
                  function a(t) {
                     var n = h,
                        r = v;
                     return h = v = void 0, E = t, y = e.apply(r, n)
                  }

                  function l(e) {
                     return E = e, b = setTimeout(c, t), C ? a(e) : y
                  }

                  function o(e) {
                     var n = t - (e - k);
                     return O ? x(n, g - (e - E)) : n
                  }

                  function s(e) {
                     var n = e - k;
                     return void 0 === k || n >= t || n < 0 || O && e - E >= g
                  }

                  function c() {
                     var e = S();
                     return s(e) ? d(e) : void(b = setTimeout(c, o(e)))
                  }

                  function d(e) {
                     return b = void 0, N && h ? a(e) : (h = v = void 0, y)
                  }

                  function f() {
                     void 0 !== b && clearTimeout(b), E = 0, h = k = v = b = void 0
                  }

                  function p() {
                     return void 0 === b ? y : d(S())
                  }

                  function m() {
                     var e = S(),
                        n = s(e);
                     if (h = arguments, v = this, k = e, n) {
                        if (void 0 === b) return l(k);
                        if (O) return b = setTimeout(c, t), a(k)
                     }
                     return void 0 === b && (b = setTimeout(c, t)), y
                  }
                  var h, v, g, y, b, k, E = 0,
                     C = !1,
                     O = !1,
                     N = !0;
                  if ("function" != typeof e) throw new TypeError(u);
                  return t = i(t) || 0, r(n) && (C = !!n.leading, g = (O = "maxWait" in n) ? w(i(n.maxWait) || 0, t) : g, N = "trailing" in n ? !!n.trailing : N), m.cancel = f, m.flush = p, m
               }

               function r(e) {
                  var t = "undefined" == typeof e ? "undefined" : o(e);
                  return !!e && ("object" == t || "function" == t)
               }

               function a(e) {
                  return !!e && "object" == ("undefined" == typeof e ? "undefined" : o(e))
               }

               function l(e) {
                  return "symbol" == ("undefined" == typeof e ? "undefined" : o(e)) || a(e) && b.call(e) == c
               }

               function i(e) {
                  if ("number" == typeof e) return e;
                  if (l(e)) return s;
                  if (r(e)) {
                     var t = "function" == typeof e.valueOf ? e.valueOf() : e;
                     e = r(t) ? t + "" : t
                  }
                  if ("string" != typeof e) return 0 === e ? e : +e;
                  e = e.replace(d, "");
                  var n = p.test(e);
                  return n || m.test(e) ? h(e.slice(2), n ? 2 : 8) : f.test(e) ? s : +e
               }
               var o = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (e) {
                     return typeof e
                  } : function (e) {
                     return e && "function" == typeof Symbol && e.constructor === Symbol && e !== Symbol.prototype ? "symbol" : typeof e
                  },
                  u = "Expected a function",
                  s = NaN,
                  c = "[object Symbol]",
                  d = /^\s+|\s+$/g,
                  f = /^[-+]0x[0-9a-f]+$/i,
                  p = /^0b[01]+$/i,
                  m = /^0o[0-7]+$/i,
                  h = parseInt,
                  v = "object" == ("undefined" == typeof t ? "undefined" : o(t)) && t && t.Object === Object && t,
                  g = "object" == ("undefined" == typeof self ? "undefined" : o(self)) && self && self.Object === Object && self,
                  y = v || g || Function("return this")(),
                  b = Object.prototype.toString,
                  w = Math.max,
                  x = Math.min,
                  S = function () {
                     return y.Date.now()
                  };
               e.exports = n
            }).call(t, function () {
               return this
            }())
         }, function (e, t) {
            "use strict";

            function n(e) {
               var t = void 0,
                  r = void 0;
               for (t = 0; t < e.length; t += 1) {
                  if ((r = e[t]).dataset && r.dataset.aos) return !0;
                  if (r.children && n(r.children)) return !0
               }
               return !1
            }

            function r() {
               return window.MutationObserver || window.WebKitMutationObserver || window.MozMutationObserver
            }

            function a() {
               return !!r()
            }

            function l(e, t) {
               var n = window.document,
                  a = new(r())(i);
               o = t, a.observe(n.documentElement, {
                  childList: !0,
                  subtree: !0,
                  removedNodes: !0
               })
            }

            function i(e) {
               e && e.forEach((function (e) {
                  var t = Array.prototype.slice.call(e.addedNodes),
                     r = Array.prototype.slice.call(e.removedNodes);
                  if (n(t.concat(r))) return o()
               }))
            }
            Object.defineProperty(t, "__esModule", {
               value: !0
            });
            var o = function () {};
            t.default = {
               isSupported: a,
               ready: l
            }
         }, function (e, t) {
            "use strict";

            function n(e, t) {
               if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function")
            }

            function r() {
               return navigator.userAgent || navigator.vendor || window.opera || ""
            }
            Object.defineProperty(t, "__esModule", {
               value: !0
            });
            var a = function () {
                  function e(e, t) {
                     for (var n = 0; n < t.length; n++) {
                        var r = t[n];
                        r.enumerable = r.enumerable || !1, r.configurable = !0, "value" in r && (r.writable = !0), Object.defineProperty(e, r.key, r)
                     }
                  }
                  return function (t, n, r) {
                     return n && e(t.prototype, n), r && e(t, r), t
                  }
               }(),
               l = /(android|bb\d+|meego).+mobile|avantgo|bada\/|blackberry|blazer|compal|elaine|fennec|hiptop|iemobile|ip(hone|od)|iris|kindle|lge |maemo|midp|mmp|mobile.+firefox|netfront|opera m(ob|in)i|palm( os)?|phone|p(ixi|re)\/|plucker|pocket|psp|series(4|6)0|symbian|treo|up\.(browser|link)|vodafone|wap|windows ce|xda|xiino/i,
               i = /1207|6310|6590|3gso|4thp|50[1-6]i|770s|802s|a wa|abac|ac(er|oo|s\-)|ai(ko|rn)|al(av|ca|co)|amoi|an(ex|ny|yw)|aptu|ar(ch|go)|as(te|us)|attw|au(di|\-m|r |s )|avan|be(ck|ll|nq)|bi(lb|rd)|bl(ac|az)|br(e|v)w|bumb|bw\-(n|u)|c55\/|capi|ccwa|cdm\-|cell|chtm|cldc|cmd\-|co(mp|nd)|craw|da(it|ll|ng)|dbte|dc\-s|devi|dica|dmob|do(c|p)o|ds(12|\-d)|el(49|ai)|em(l2|ul)|er(ic|k0)|esl8|ez([4-7]0|os|wa|ze)|fetc|fly(\-|_)|g1 u|g560|gene|gf\-5|g\-mo|go(\.w|od)|gr(ad|un)|haie|hcit|hd\-(m|p|t)|hei\-|hi(pt|ta)|hp( i|ip)|hs\-c|ht(c(\-| |_|a|g|p|s|t)|tp)|hu(aw|tc)|i\-(20|go|ma)|i230|iac( |\-|\/)|ibro|idea|ig01|ikom|im1k|inno|ipaq|iris|ja(t|v)a|jbro|jemu|jigs|kddi|keji|kgt( |\/)|klon|kpt |kwc\-|kyo(c|k)|le(no|xi)|lg( g|\/(k|l|u)|50|54|\-[a-w])|libw|lynx|m1\-w|m3ga|m50\/|ma(te|ui|xo)|mc(01|21|ca)|m\-cr|me(rc|ri)|mi(o8|oa|ts)|mmef|mo(01|02|bi|de|do|t(\-| |o|v)|zz)|mt(50|p1|v )|mwbp|mywa|n10[0-2]|n20[2-3]|n30(0|2)|n50(0|2|5)|n7(0(0|1)|10)|ne((c|m)\-|on|tf|wf|wg|wt)|nok(6|i)|nzph|o2im|op(ti|wv)|oran|owg1|p800|pan(a|d|t)|pdxg|pg(13|\-([1-8]|c))|phil|pire|pl(ay|uc)|pn\-2|po(ck|rt|se)|prox|psio|pt\-g|qa\-a|qc(07|12|21|32|60|\-[2-7]|i\-)|qtek|r380|r600|raks|rim9|ro(ve|zo)|s55\/|sa(ge|ma|mm|ms|ny|va)|sc(01|h\-|oo|p\-)|sdk\/|se(c(\-|0|1)|47|mc|nd|ri)|sgh\-|shar|sie(\-|m)|sk\-0|sl(45|id)|sm(al|ar|b3|it|t5)|so(ft|ny)|sp(01|h\-|v\-|v )|sy(01|mb)|t2(18|50)|t6(00|10|18)|ta(gt|lk)|tcl\-|tdg\-|tel(i|m)|tim\-|t\-mo|to(pl|sh)|ts(70|m\-|m3|m5)|tx\-9|up(\.b|g1|si)|utst|v400|v750|veri|vi(rg|te)|vk(40|5[0-3]|\-v)|vm40|voda|vulc|vx(52|53|60|61|70|80|81|83|85|98)|w3c(\-| )|webc|whit|wi(g |nc|nw)|wmlb|wonu|x700|yas\-|your|zeto|zte\-/i,
               o = /(android|bb\d+|meego).+mobile|avantgo|bada\/|blackberry|blazer|compal|elaine|fennec|hiptop|iemobile|ip(hone|od)|iris|kindle|lge |maemo|midp|mmp|mobile.+firefox|netfront|opera m(ob|in)i|palm( os)?|phone|p(ixi|re)\/|plucker|pocket|psp|series(4|6)0|symbian|treo|up\.(browser|link)|vodafone|wap|windows ce|xda|xiino|android|ipad|playbook|silk/i,
               u = /1207|6310|6590|3gso|4thp|50[1-6]i|770s|802s|a wa|abac|ac(er|oo|s\-)|ai(ko|rn)|al(av|ca|co)|amoi|an(ex|ny|yw)|aptu|ar(ch|go)|as(te|us)|attw|au(di|\-m|r |s )|avan|be(ck|ll|nq)|bi(lb|rd)|bl(ac|az)|br(e|v)w|bumb|bw\-(n|u)|c55\/|capi|ccwa|cdm\-|cell|chtm|cldc|cmd\-|co(mp|nd)|craw|da(it|ll|ng)|dbte|dc\-s|devi|dica|dmob|do(c|p)o|ds(12|\-d)|el(49|ai)|em(l2|ul)|er(ic|k0)|esl8|ez([4-7]0|os|wa|ze)|fetc|fly(\-|_)|g1 u|g560|gene|gf\-5|g\-mo|go(\.w|od)|gr(ad|un)|haie|hcit|hd\-(m|p|t)|hei\-|hi(pt|ta)|hp( i|ip)|hs\-c|ht(c(\-| |_|a|g|p|s|t)|tp)|hu(aw|tc)|i\-(20|go|ma)|i230|iac( |\-|\/)|ibro|idea|ig01|ikom|im1k|inno|ipaq|iris|ja(t|v)a|jbro|jemu|jigs|kddi|keji|kgt( |\/)|klon|kpt |kwc\-|kyo(c|k)|le(no|xi)|lg( g|\/(k|l|u)|50|54|\-[a-w])|libw|lynx|m1\-w|m3ga|m50\/|ma(te|ui|xo)|mc(01|21|ca)|m\-cr|me(rc|ri)|mi(o8|oa|ts)|mmef|mo(01|02|bi|de|do|t(\-| |o|v)|zz)|mt(50|p1|v )|mwbp|mywa|n10[0-2]|n20[2-3]|n30(0|2)|n50(0|2|5)|n7(0(0|1)|10)|ne((c|m)\-|on|tf|wf|wg|wt)|nok(6|i)|nzph|o2im|op(ti|wv)|oran|owg1|p800|pan(a|d|t)|pdxg|pg(13|\-([1-8]|c))|phil|pire|pl(ay|uc)|pn\-2|po(ck|rt|se)|prox|psio|pt\-g|qa\-a|qc(07|12|21|32|60|\-[2-7]|i\-)|qtek|r380|r600|raks|rim9|ro(ve|zo)|s55\/|sa(ge|ma|mm|ms|ny|va)|sc(01|h\-|oo|p\-)|sdk\/|se(c(\-|0|1)|47|mc|nd|ri)|sgh\-|shar|sie(\-|m)|sk\-0|sl(45|id)|sm(al|ar|b3|it|t5)|so(ft|ny)|sp(01|h\-|v\-|v )|sy(01|mb)|t2(18|50)|t6(00|10|18)|ta(gt|lk)|tcl\-|tdg\-|tel(i|m)|tim\-|t\-mo|to(pl|sh)|ts(70|m\-|m3|m5)|tx\-9|up(\.b|g1|si)|utst|v400|v750|veri|vi(rg|te)|vk(40|5[0-3]|\-v)|vm40|voda|vulc|vx(52|53|60|61|70|80|81|83|85|98)|w3c(\-| )|webc|whit|wi(g |nc|nw)|wmlb|wonu|x700|yas\-|your|zeto|zte\-/i,
               s = function () {
                  function e() {
                     n(this, e)
                  }
                  return a(e, [{
                     key: "phone",
                     value: function () {
                        var e = r();
                        return !(!l.test(e) && !i.test(e.substr(0, 4)))
                     }
                  }, {
                     key: "mobile",
                     value: function () {
                        var e = r();
                        return !(!o.test(e) && !u.test(e.substr(0, 4)))
                     }
                  }, {
                     key: "tablet",
                     value: function () {
                        return this.mobile() && !this.phone()
                     }
                  }]), e
               }();
            t.default = new s
         }, function (e, t) {
            "use strict";
            Object.defineProperty(t, "__esModule", {
               value: !0
            });
            var n = function (e, t, n) {
                  var r = e.node.getAttribute("data-aos-once");
                  t > e.position ? e.node.classList.add("aos-animate") : "undefined" != typeof r && ("false" === r || !n && "true" !== r) && e.node.classList.remove("aos-animate")
               },
               r = function (e, t) {
                  var r = window.pageYOffset,
                     a = window.innerHeight;
                  e.forEach((function (e, l) {
                     n(e, a + r, t)
                  }))
               };
            t.default = r
         }, function (e, t, n) {
            "use strict";

            function r(e) {
               return e && e.__esModule ? e : {
                  default: e
               }
            }
            Object.defineProperty(t, "__esModule", {
               value: !0
            });
            var a = r(n(12)),
               l = function (e, t) {
                  return e.forEach((function (e, n) {
                     e.node.classList.add("aos-init"), e.position = (0, a.default)(e.node, t.offset)
                  })), e
               };
            t.default = l
         }, function (e, t, n) {
            "use strict";

            function r(e) {
               return e && e.__esModule ? e : {
                  default: e
               }
            }
            Object.defineProperty(t, "__esModule", {
               value: !0
            });
            var a = r(n(13)),
               l = function (e, t) {
                  var n = 0,
                     r = 0,
                     l = window.innerHeight,
                     i = {
                        offset: e.getAttribute("data-aos-offset"),
                        anchor: e.getAttribute("data-aos-anchor"),
                        anchorPlacement: e.getAttribute("data-aos-anchor-placement")
                     };
                  switch (i.offset && !isNaN(i.offset) && (r = parseInt(i.offset)), i.anchor && document.querySelectorAll(i.anchor) && (e = document.querySelectorAll(i.anchor)[0]), n = (0, a.default)(e).top, i.anchorPlacement) {
                     case "top-bottom":
                        break;
                     case "center-bottom":
                        n += e.offsetHeight / 2;
                        break;
                     case "bottom-bottom":
                        n += e.offsetHeight;
                        break;
                     case "top-center":
                        n += l / 2;
                        break;
                     case "bottom-center":
                        n += l / 2 + e.offsetHeight;
                        break;
                     case "center-center":
                        n += l / 2 + e.offsetHeight / 2;
                        break;
                     case "top-top":
                        n += l;
                        break;
                     case "bottom-top":
                        n += e.offsetHeight + l;
                        break;
                     case "center-top":
                        n += e.offsetHeight / 2 + l
                  }
                  return i.anchorPlacement || i.offset || isNaN(t) || (r = t), n + r
               };
            t.default = l
         }, function (e, t) {
            "use strict";
            Object.defineProperty(t, "__esModule", {
               value: !0
            });
            var n = function (e) {
               for (var t = 0, n = 0; e && !isNaN(e.offsetLeft) && !isNaN(e.offsetTop);) t += e.offsetLeft - ("BODY" != e.tagName ? e.scrollLeft : 0), n += e.offsetTop - ("BODY" != e.tagName ? e.scrollTop : 0), e = e.offsetParent;
               return {
                  top: n,
                  left: t
               }
            };
            t.default = n
         }, function (e, t) {
            "use strict";
            Object.defineProperty(t, "__esModule", {
               value: !0
            });
            var n = function (e) {
               return e = e || document.querySelectorAll("[data-aos]"), Array.prototype.map.call(e, (function (e) {
                  return {
                     node: e
                  }
               }))
            };
            t.default = n
         }])
      },
      463: function (e, t, n) {
         "use strict";
         var r = n(791),
            a = n(296);

         function l(e) {
            for (var t = "https://reactjs.org/docs/error-decoder.html?invariant=" + e, n = 1; n < arguments.length; n++) t += "&args[]=" + encodeURIComponent(arguments[n]);
            return "Minified React error #" + e + "; visit " + t + " for the full message or use the non-minified dev environment for full errors and additional helpful warnings."
         }
         var i = new Set,
            o = {};

         function u(e, t) {
            s(e, t), s(e + "Capture", t)
         }

         function s(e, t) {
            for (o[e] = t, e = 0; e < t.length; e++) i.add(t[e])
         }
         var c = !("undefined" === typeof window || "undefined" === typeof window.document || "undefined" === typeof window.document.createElement),
            d = Object.prototype.hasOwnProperty,
            f = /^[:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD][:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD\-.0-9\u00B7\u0300-\u036F\u203F-\u2040]*$/,
            p = {},
            m = {};

         function h(e, t, n, r, a, l, i) {
            this.acceptsBooleans = 2 === t || 3 === t || 4 === t, this.attributeName = r, this.attributeNamespace = a, this.mustUseProperty = n, this.propertyName = e, this.type = t, this.sanitizeURL = l, this.removeEmptyString = i
         }
         var v = {};
         "children dangerouslySetInnerHTML defaultValue defaultChecked innerHTML suppressContentEditableWarning suppressHydrationWarning style".split(" ").forEach((function (e) {
            v[e] = new h(e, 0, !1, e, null, !1, !1)
         })), [
            ["acceptCharset", "accept-charset"],
            ["className", "class"],
            ["htmlFor", "for"],
            ["httpEquiv", "http-equiv"]
         ].forEach((function (e) {
            var t = e[0];
            v[t] = new h(t, 1, !1, e[1], null, !1, !1)
         })), ["contentEditable", "draggable", "spellCheck", "value"].forEach((function (e) {
            v[e] = new h(e, 2, !1, e.toLowerCase(), null, !1, !1)
         })), ["autoReverse", "externalResourcesRequired", "focusable", "preserveAlpha"].forEach((function (e) {
            v[e] = new h(e, 2, !1, e, null, !1, !1)
         })), "allowFullScreen async autoFocus autoPlay controls default defer disabled disablePictureInPicture disableRemotePlayback formNoValidate hidden loop noModule noValidate open playsInline readOnly required reversed scoped seamless itemScope".split(" ").forEach((function (e) {
            v[e] = new h(e, 3, !1, e.toLowerCase(), null, !1, !1)
         })), ["checked", "multiple", "muted", "selected"].forEach((function (e) {
            v[e] = new h(e, 3, !0, e, null, !1, !1)
         })), ["capture", "download"].forEach((function (e) {
            v[e] = new h(e, 4, !1, e, null, !1, !1)
         })), ["cols", "rows", "size", "span"].forEach((function (e) {
            v[e] = new h(e, 6, !1, e, null, !1, !1)
         })), ["rowSpan", "start"].forEach((function (e) {
            v[e] = new h(e, 5, !1, e.toLowerCase(), null, !1, !1)
         }));
         var g = /[\-:]([a-z])/g;

         function y(e) {
            return e[1].toUpperCase()
         }

         function b(e, t, n, r) {
            var a = v.hasOwnProperty(t) ? v[t] : null;
            (null !== a ? 0 !== a.type : r || !(2 < t.length) || "o" !== t[0] && "O" !== t[0] || "n" !== t[1] && "N" !== t[1]) && (function (e, t, n, r) {
               if (null === t || "undefined" === typeof t || function (e, t, n, r) {
                     if (null !== n && 0 === n.type) return !1;
                     switch (typeof t) {
                        case "function":
                        case "symbol":
                           return !0;
                        case "boolean":
                           return !r && (null !== n ? !n.acceptsBooleans : "data-" !== (e = e.toLowerCase().slice(0, 5)) && "aria-" !== e);
                        default:
                           return !1
                     }
                  }(e, t, n, r)) return !0;
               if (r) return !1;
               if (null !== n) switch (n.type) {
                  case 3:
                     return !t;
                  case 4:
                     return !1 === t;
                  case 5:
                     return isNaN(t);
                  case 6:
                     return isNaN(t) || 1 > t
               }
               return !1
            }(t, n, a, r) && (n = null), r || null === a ? function (e) {
               return !!d.call(m, e) || !d.call(p, e) && (f.test(e) ? m[e] = !0 : (p[e] = !0, !1))
            }(t) && (null === n ? e.removeAttribute(t) : e.setAttribute(t, "" + n)) : a.mustUseProperty ? e[a.propertyName] = null === n ? 3 !== a.type && "" : n : (t = a.attributeName, r = a.attributeNamespace, null === n ? e.removeAttribute(t) : (n = 3 === (a = a.type) || 4 === a && !0 === n ? "" : "" + n, r ? e.setAttributeNS(r, t, n) : e.setAttribute(t, n))))
         }
         "accent-height alignment-baseline arabic-form baseline-shift cap-height clip-path clip-rule color-interpolation color-interpolation-filters color-profile color-rendering dominant-baseline enable-background fill-opacity fill-rule flood-color flood-opacity font-family font-size font-size-adjust font-stretch font-style font-variant font-weight glyph-name glyph-orientation-horizontal glyph-orientation-vertical horiz-adv-x horiz-origin-x image-rendering letter-spacing lighting-color marker-end marker-mid marker-start overline-position overline-thickness paint-order panose-1 pointer-events rendering-intent shape-rendering stop-color stop-opacity strikethrough-position strikethrough-thickness stroke-dasharray stroke-dashoffset stroke-linecap stroke-linejoin stroke-miterlimit stroke-opacity stroke-width text-anchor text-decoration text-rendering underline-position underline-thickness unicode-bidi unicode-range units-per-em v-alphabetic v-hanging v-ideographic v-mathematical vector-effect vert-adv-y vert-origin-x vert-origin-y word-spacing writing-mode xmlns:xlink x-height".split(" ").forEach((function (e) {
            var t = e.replace(g, y);
            v[t] = new h(t, 1, !1, e, null, !1, !1)
         })), "xlink:actuate xlink:arcrole xlink:role xlink:show xlink:title xlink:type".split(" ").forEach((function (e) {
            var t = e.replace(g, y);
            v[t] = new h(t, 1, !1, e, "http://www.w3.org/1999/xlink", !1, !1)
         })), ["xml:base", "xml:lang", "xml:space"].forEach((function (e) {
            var t = e.replace(g, y);
            v[t] = new h(t, 1, !1, e, "http://www.w3.org/XML/1998/namespace", !1, !1)
         })), ["tabIndex", "crossOrigin"].forEach((function (e) {
            v[e] = new h(e, 1, !1, e.toLowerCase(), null, !1, !1)
         })), v.xlinkHref = new h("xlinkHref", 1, !1, "xlink:href", "http://www.w3.org/1999/xlink", !0, !1), ["src", "href", "action", "formAction"].forEach((function (e) {
            v[e] = new h(e, 1, !1, e.toLowerCase(), null, !0, !0)
         }));
         var w = r.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED,
            x = Symbol.for("react.element"),
            S = Symbol.for("react.portal"),
            k = Symbol.for("react.fragment"),
            E = Symbol.for("react.strict_mode"),
            C = Symbol.for("react.profiler"),
            O = Symbol.for("react.provider"),
            N = Symbol.for("react.context"),
            _ = Symbol.for("react.forward_ref"),
            j = Symbol.for("react.suspense"),
            T = Symbol.for("react.suspense_list"),
            P = Symbol.for("react.memo"),
            I = Symbol.for("react.lazy");
         Symbol.for("react.scope"), Symbol.for("react.debug_trace_mode");
         var z = Symbol.for("react.offscreen");
         Symbol.for("react.legacy_hidden"), Symbol.for("react.cache"), Symbol.for("react.tracing_marker");
         var M = Symbol.iterator;

         function L(e) {
            return null === e || "object" !== typeof e ? null : "function" === typeof (e = M && e[M] || e["@@iterator"]) ? e : null
         }
         var R, D = Object.assign;

         function F(e) {
            if (void 0 === R) try {
               throw Error()
            } catch (n) {
               var t = n.stack.trim().match(/\n( *(at )?)/);
               R = t && t[1] || ""
            }
            return "\n" + R + e
         }
         var A = !1;

         function U(e, t) {
            if (!e || A) return "";
            A = !0;
            var n = Error.prepareStackTrace;
            Error.prepareStackTrace = void 0;
            try {
               if (t)
                  if (t = function () {
                        throw Error()
                     }, Object.defineProperty(t.prototype, "props", {
                        set: function () {
                           throw Error()
                        }
                     }), "object" === typeof Reflect && Reflect.construct) {
                     try {
                        Reflect.construct(t, [])
                     } catch (s) {
                        var r = s
                     }
                     Reflect.construct(e, [], t)
                  } else {
                     try {
                        t.call()
                     } catch (s) {
                        r = s
                     }
                     e.call(t.prototype)
                  }
               else {
                  try {
                     throw Error()
                  } catch (s) {
                     r = s
                  }
                  e()
               }
            } catch (s) {
               if (s && r && "string" === typeof s.stack) {
                  for (var a = s.stack.split("\n"), l = r.stack.split("\n"), i = a.length - 1, o = l.length - 1; 1 <= i && 0 <= o && a[i] !== l[o];) o--;
                  for (; 1 <= i && 0 <= o; i--, o--)
                     if (a[i] !== l[o]) {
                        if (1 !== i || 1 !== o)
                           do {
                              if (i--, 0 > --o || a[i] !== l[o]) {
                                 var u = "\n" + a[i].replace(" at new ", " at ");
                                 return e.displayName && u.includes("<anonymous>") && (u = u.replace("<anonymous>", e.displayName)), u
                              }
                           } while (1 <= i && 0 <= o);
                        break
                     }
               }
            } finally {
               A = !1, Error.prepareStackTrace = n
            }
            return (e = e ? e.displayName || e.name : "") ? F(e) : ""
         }

         function H(e) {
            switch (e.tag) {
               case 5:
                  return F(e.type);
               case 16:
                  return F("Lazy");
               case 13:
                  return F("Suspense");
               case 19:
                  return F("SuspenseList");
               case 0:
               case 2:
               case 15:
                  return e = U(e.type, !1);
               case 11:
                  return e = U(e.type.render, !1);
               case 1:
                  return e = U(e.type, !0);
               default:
                  return ""
            }
         }

         function W(e) {
            if (null == e) return null;
            if ("function" === typeof e) return e.displayName || e.name || null;
            if ("string" === typeof e) return e;
            switch (e) {
               case k:
                  return "Fragment";
               case S:
                  return "Portal";
               case C:
                  return "Profiler";
               case E:
                  return "StrictMode";
               case j:
                  return "Suspense";
               case T:
                  return "SuspenseList"
            }
            if ("object" === typeof e) switch (e.$$typeof) {
               case N:
                  return (e.displayName || "Context") + ".Consumer";
               case O:
                  return (e._context.displayName || "Context") + ".Provider";
               case _:
                  var t = e.render;
                  return (e = e.displayName) || (e = "" !== (e = t.displayName || t.name || "") ? "ForwardRef(" + e + ")" : "ForwardRef"), e;
               case P:
                  return null !== (t = e.displayName || null) ? t : W(e.type) || "Memo";
               case I:
                  t = e._payload, e = e._init;
                  try {
                     return W(e(t))
                  } catch (n) {}
            }
            return null
         }

         function V(e) {
            var t = e.type;
            switch (e.tag) {
               case 24:
                  return "Cache";
               case 9:
                  return (t.displayName || "Context") + ".Consumer";
               case 10:
                  return (t._context.displayName || "Context") + ".Provider";
               case 18:
                  return "DehydratedFragment";
               case 11:
                  return e = (e = t.render).displayName || e.name || "", t.displayName || ("" !== e ? "ForwardRef(" + e + ")" : "ForwardRef");
               case 7:
                  return "Fragment";
               case 5:
                  return t;
               case 4:
                  return "Portal";
               case 3:
                  return "Root";
               case 6:
                  return "Text";
               case 16:
                  return W(t);
               case 8:
                  return t === E ? "StrictMode" : "Mode";
               case 22:
                  return "Offscreen";
               case 12:
                  return "Profiler";
               case 21:
                  return "Scope";
               case 13:
                  return "Suspense";
               case 19:
                  return "SuspenseList";
               case 25:
                  return "TracingMarker";
               case 1:
               case 0:
               case 17:
               case 2:
               case 14:
               case 15:
                  if ("function" === typeof t) return t.displayName || t.name || null;
                  if ("string" === typeof t) return t
            }
            return null
         }

         function B(e) {
            switch (typeof e) {
               case "boolean":
               case "number":
               case "string":
               case "undefined":
               case "object":
                  return e;
               default:
                  return ""
            }
         }

         function $(e) {
            var t = e.type;
            return (e = e.nodeName) && "input" === e.toLowerCase() && ("checkbox" === t || "radio" === t)
         }

         function q(e) {
            e._valueTracker || (e._valueTracker = function (e) {
               var t = $(e) ? "checked" : "value",
                  n = Object.getOwnPropertyDescriptor(e.constructor.prototype, t),
                  r = "" + e[t];
               if (!e.hasOwnProperty(t) && "undefined" !== typeof n && "function" === typeof n.get && "function" === typeof n.set) {
                  var a = n.get,
                     l = n.set;
                  return Object.defineProperty(e, t, {
                     configurable: !0,
                     get: function () {
                        return a.call(this)
                     },
                     set: function (e) {
                        r = "" + e, l.call(this, e)
                     }
                  }), Object.defineProperty(e, t, {
                     enumerable: n.enumerable
                  }), {
                     getValue: function () {
                        return r
                     },
                     setValue: function (e) {
                        r = "" + e
                     },
                     stopTracking: function () {
                        e._valueTracker = null, delete e[t]
                     }
                  }
               }
            }(e))
         }

         function Q(e) {
            if (!e) return !1;
            var t = e._valueTracker;
            if (!t) return !0;
            var n = t.getValue(),
               r = "";
            return e && (r = $(e) ? e.checked ? "true" : "false" : e.value), (e = r) !== n && (t.setValue(e), !0)
         }

         function K(e) {
            if ("undefined" === typeof (e = e || ("undefined" !== typeof document ? document : void 0))) return null;
            try {
               return e.activeElement || e.body
            } catch (t) {
               return e.body
            }
         }

         function Y(e, t) {
            var n = t.checked;
            return D({}, t, {
               defaultChecked: void 0,
               defaultValue: void 0,
               value: void 0,
               checked: null != n ? n : e._wrapperState.initialChecked
            })
         }

         function X(e, t) {
            var n = null == t.defaultValue ? "" : t.defaultValue,
               r = null != t.checked ? t.checked : t.defaultChecked;
            n = B(null != t.value ? t.value : n), e._wrapperState = {
               initialChecked: r,
               initialValue: n,
               controlled: "checkbox" === t.type || "radio" === t.type ? null != t.checked : null != t.value
            }
         }

         function G(e, t) {
            null != (t = t.checked) && b(e, "checked", t, !1)
         }

         function Z(e, t) {
            G(e, t);
            var n = B(t.value),
               r = t.type;
            if (null != n) "number" === r ? (0 === n && "" === e.value || e.value != n) && (e.value = "" + n) : e.value !== "" + n && (e.value = "" + n);
            else if ("submit" === r || "reset" === r) return void e.removeAttribute("value");
            t.hasOwnProperty("value") ? ee(e, t.type, n) : t.hasOwnProperty("defaultValue") && ee(e, t.type, B(t.defaultValue)), null == t.checked && null != t.defaultChecked && (e.defaultChecked = !!t.defaultChecked)
         }

         function J(e, t, n) {
            if (t.hasOwnProperty("value") || t.hasOwnProperty("defaultValue")) {
               var r = t.type;
               if (!("submit" !== r && "reset" !== r || void 0 !== t.value && null !== t.value)) return;
               t = "" + e._wrapperState.initialValue, n || t === e.value || (e.value = t), e.defaultValue = t
            }
            "" !== (n = e.name) && (e.name = ""), e.defaultChecked = !!e._wrapperState.initialChecked, "" !== n && (e.name = n)
         }

         function ee(e, t, n) {
            "number" === t && K(e.ownerDocument) === e || (null == n ? e.defaultValue = "" + e._wrapperState.initialValue : e.defaultValue !== "" + n && (e.defaultValue = "" + n))
         }
         var te = Array.isArray;

         function ne(e, t, n, r) {
            if (e = e.options, t) {
               t = {};
               for (var a = 0; a < n.length; a++) t["$" + n[a]] = !0;
               for (n = 0; n < e.length; n++) a = t.hasOwnProperty("$" + e[n].value), e[n].selected !== a && (e[n].selected = a), a && r && (e[n].defaultSelected = !0)
            } else {
               for (n = "" + B(n), t = null, a = 0; a < e.length; a++) {
                  if (e[a].value === n) return e[a].selected = !0, void(r && (e[a].defaultSelected = !0));
                  null !== t || e[a].disabled || (t = e[a])
               }
               null !== t && (t.selected = !0)
            }
         }

         function re(e, t) {
            if (null != t.dangerouslySetInnerHTML) throw Error(l(91));
            return D({}, t, {
               value: void 0,
               defaultValue: void 0,
               children: "" + e._wrapperState.initialValue
            })
         }

         function ae(e, t) {
            var n = t.value;
            if (null == n) {
               if (n = t.children, t = t.defaultValue, null != n) {
                  if (null != t) throw Error(l(92));
                  if (te(n)) {
                     if (1 < n.length) throw Error(l(93));
                     n = n[0]
                  }
                  t = n
               }
               null == t && (t = ""), n = t
            }
            e._wrapperState = {
               initialValue: B(n)
            }
         }

         function le(e, t) {
            var n = B(t.value),
               r = B(t.defaultValue);
            null != n && ((n = "" + n) !== e.value && (e.value = n), null == t.defaultValue && e.defaultValue !== n && (e.defaultValue = n)), null != r && (e.defaultValue = "" + r)
         }

         function ie(e) {
            var t = e.textContent;
            t === e._wrapperState.initialValue && "" !== t && null !== t && (e.value = t)
         }

         function oe(e) {
            switch (e) {
               case "svg":
                  return "http://www.w3.org/2000/svg";
               case "math":
                  return "http://www.w3.org/1998/Math/MathML";
               default:
                  return "http://www.w3.org/1999/xhtml"
            }
         }

         function ue(e, t) {
            return null == e || "http://www.w3.org/1999/xhtml" === e ? oe(t) : "http://www.w3.org/2000/svg" === e && "foreignObject" === t ? "http://www.w3.org/1999/xhtml" : e
         }
         var se, ce, de = (ce = function (e, t) {
            if ("http://www.w3.org/2000/svg" !== e.namespaceURI || "innerHTML" in e) e.innerHTML = t;
            else {
               for ((se = se || document.createElement("div")).innerHTML = "<svg>" + t.valueOf().toString() + "</svg>", t = se.firstChild; e.firstChild;) e.removeChild(e.firstChild);
               for (; t.firstChild;) e.appendChild(t.firstChild)
            }
         }, "undefined" !== typeof MSApp && MSApp.execUnsafeLocalFunction ? function (e, t, n, r) {
            MSApp.execUnsafeLocalFunction((function () {
               return ce(e, t)
            }))
         } : ce);

         function fe(e, t) {
            if (t) {
               var n = e.firstChild;
               if (n && n === e.lastChild && 3 === n.nodeType) return void(n.nodeValue = t)
            }
            e.textContent = t
         }
         var pe = {
               animationIterationCount: !0,
               aspectRatio: !0,
               borderImageOutset: !0,
               borderImageSlice: !0,
               borderImageWidth: !0,
               boxFlex: !0,
               boxFlexGroup: !0,
               boxOrdinalGroup: !0,
               columnCount: !0,
               columns: !0,
               flex: !0,
               flexGrow: !0,
               flexPositive: !0,
               flexShrink: !0,
               flexNegative: !0,
               flexOrder: !0,
               gridArea: !0,
               gridRow: !0,
               gridRowEnd: !0,
               gridRowSpan: !0,
               gridRowStart: !0,
               gridColumn: !0,
               gridColumnEnd: !0,
               gridColumnSpan: !0,
               gridColumnStart: !0,
               fontWeight: !0,
               lineClamp: !0,
               lineHeight: !0,
               opacity: !0,
               order: !0,
               orphans: !0,
               tabSize: !0,
               widows: !0,
               zIndex: !0,
               zoom: !0,
               fillOpacity: !0,
               floodOpacity: !0,
               stopOpacity: !0,
               strokeDasharray: !0,
               strokeDashoffset: !0,
               strokeMiterlimit: !0,
               strokeOpacity: !0,
               strokeWidth: !0
            },
            me = ["Webkit", "ms", "Moz", "O"];

         function he(e, t, n) {
            return null == t || "boolean" === typeof t || "" === t ? "" : n || "number" !== typeof t || 0 === t || pe.hasOwnProperty(e) && pe[e] ? ("" + t).trim() : t + "px"
         }

         function ve(e, t) {
            for (var n in e = e.style, t)
               if (t.hasOwnProperty(n)) {
                  var r = 0 === n.indexOf("--"),
                     a = he(n, t[n], r);
                  "float" === n && (n = "cssFloat"), r ? e.setProperty(n, a) : e[n] = a
               }
         }
         Object.keys(pe).forEach((function (e) {
            me.forEach((function (t) {
               t = t + e.charAt(0).toUpperCase() + e.substring(1), pe[t] = pe[e]
            }))
         }));
         var ge = D({
            menuitem: !0
         }, {
            area: !0,
            base: !0,
            br: !0,
            col: !0,
            embed: !0,
            hr: !0,
            img: !0,
            input: !0,
            keygen: !0,
            link: !0,
            meta: !0,
            param: !0,
            source: !0,
            track: !0,
            wbr: !0
         });

         function ye(e, t) {
            if (t) {
               if (ge[e] && (null != t.children || null != t.dangerouslySetInnerHTML)) throw Error(l(137, e));
               if (null != t.dangerouslySetInnerHTML) {
                  if (null != t.children) throw Error(l(60));
                  if ("object" !== typeof t.dangerouslySetInnerHTML || !("__html" in t.dangerouslySetInnerHTML)) throw Error(l(61))
               }
               if (null != t.style && "object" !== typeof t.style) throw Error(l(62))
            }
         }

         function be(e, t) {
            if (-1 === e.indexOf("-")) return "string" === typeof t.is;
            switch (e) {
               case "annotation-xml":
               case "color-profile":
               case "font-face":
               case "font-face-src":
               case "font-face-uri":
               case "font-face-format":
               case "font-face-name":
               case "missing-glyph":
                  return !1;
               default:
                  return !0
            }
         }
         var we = null;

         function xe(e) {
            return (e = e.target || e.srcElement || window).correspondingUseElement && (e = e.correspondingUseElement), 3 === e.nodeType ? e.parentNode : e
         }
         var Se = null,
            ke = null,
            Ee = null;

         function Ce(e) {
            if (e = ba(e)) {
               if ("function" !== typeof Se) throw Error(l(280));
               var t = e.stateNode;
               t && (t = xa(t), Se(e.stateNode, e.type, t))
            }
         }

         function Oe(e) {
            ke ? Ee ? Ee.push(e) : Ee = [e] : ke = e
         }

         function Ne() {
            if (ke) {
               var e = ke,
                  t = Ee;
               if (Ee = ke = null, Ce(e), t)
                  for (e = 0; e < t.length; e++) Ce(t[e])
            }
         }

         function _e(e, t) {
            return e(t)
         }

         function je() {}
         var Te = !1;

         function Pe(e, t, n) {
            if (Te) return e(t, n);
            Te = !0;
            try {
               return _e(e, t, n)
            } finally {
               Te = !1, (null !== ke || null !== Ee) && (je(), Ne())
            }
         }

         function Ie(e, t) {
            var n = e.stateNode;
            if (null === n) return null;
            var r = xa(n);
            if (null === r) return null;
            n = r[t];
            e: switch (t) {
               case "onClick":
               case "onClickCapture":
               case "onDoubleClick":
               case "onDoubleClickCapture":
               case "onMouseDown":
               case "onMouseDownCapture":
               case "onMouseMove":
               case "onMouseMoveCapture":
               case "onMouseUp":
               case "onMouseUpCapture":
               case "onMouseEnter":
                  (r = !r.disabled) || (r = !("button" === (e = e.type) || "input" === e || "select" === e || "textarea" === e)), e = !r;
                  break e;
               default:
                  e = !1
            }
            if (e) return null;
            if (n && "function" !== typeof n) throw Error(l(231, t, typeof n));
            return n
         }
         var ze = !1;
         if (c) try {
            var Me = {};
            Object.defineProperty(Me, "passive", {
               get: function () {
                  ze = !0
               }
            }), window.addEventListener("test", Me, Me), window.removeEventListener("test", Me, Me)
         } catch (ce) {
            ze = !1
         }

         function Le(e, t, n, r, a, l, i, o, u) {
            var s = Array.prototype.slice.call(arguments, 3);
            try {
               t.apply(n, s)
            } catch (c) {
               this.onError(c)
            }
         }
         var Re = !1,
            De = null,
            Fe = !1,
            Ae = null,
            Ue = {
               onError: function (e) {
                  Re = !0, De = e
               }
            };

         function He(e, t, n, r, a, l, i, o, u) {
            Re = !1, De = null, Le.apply(Ue, arguments)
         }

         function We(e) {
            var t = e,
               n = e;
            if (e.alternate)
               for (; t.return;) t = t.return;
            else {
               e = t;
               do {
                  0 !== (4098 & (t = e).flags) && (n = t.return), e = t.return
               } while (e)
            }
            return 3 === t.tag ? n : null
         }

         function Ve(e) {
            if (13 === e.tag) {
               var t = e.memoizedState;
               if (null === t && (null !== (e = e.alternate) && (t = e.memoizedState)), null !== t) return t.dehydrated
            }
            return null
         }

         function Be(e) {
            if (We(e) !== e) throw Error(l(188))
         }

         function $e(e) {
            return null !== (e = function (e) {
               var t = e.alternate;
               if (!t) {
                  if (null === (t = We(e))) throw Error(l(188));
                  return t !== e ? null : e
               }
               for (var n = e, r = t;;) {
                  var a = n.return;
                  if (null === a) break;
                  var i = a.alternate;
                  if (null === i) {
                     if (null !== (r = a.return)) {
                        n = r;
                        continue
                     }
                     break
                  }
                  if (a.child === i.child) {
                     for (i = a.child; i;) {
                        if (i === n) return Be(a), e;
                        if (i === r) return Be(a), t;
                        i = i.sibling
                     }
                     throw Error(l(188))
                  }
                  if (n.return !== r.return) n = a, r = i;
                  else {
                     for (var o = !1, u = a.child; u;) {
                        if (u === n) {
                           o = !0, n = a, r = i;
                           break
                        }
                        if (u === r) {
                           o = !0, r = a, n = i;
                           break
                        }
                        u = u.sibling
                     }
                     if (!o) {
                        for (u = i.child; u;) {
                           if (u === n) {
                              o = !0, n = i, r = a;
                              break
                           }
                           if (u === r) {
                              o = !0, r = i, n = a;
                              break
                           }
                           u = u.sibling
                        }
                        if (!o) throw Error(l(189))
                     }
                  }
                  if (n.alternate !== r) throw Error(l(190))
               }
               if (3 !== n.tag) throw Error(l(188));
               return n.stateNode.current === n ? e : t
            }(e)) ? qe(e) : null
         }

         function qe(e) {
            if (5 === e.tag || 6 === e.tag) return e;
            for (e = e.child; null !== e;) {
               var t = qe(e);
               if (null !== t) return t;
               e = e.sibling
            }
            return null
         }
         var Qe = a.unstable_scheduleCallback,
            Ke = a.unstable_cancelCallback,
            Ye = a.unstable_shouldYield,
            Xe = a.unstable_requestPaint,
            Ge = a.unstable_now,
            Ze = a.unstable_getCurrentPriorityLevel,
            Je = a.unstable_ImmediatePriority,
            et = a.unstable_UserBlockingPriority,
            tt = a.unstable_NormalPriority,
            nt = a.unstable_LowPriority,
            rt = a.unstable_IdlePriority,
            at = null,
            lt = null;
         var it = Math.clz32 ? Math.clz32 : function (e) {
               return 0 === (e >>>= 0) ? 32 : 31 - (ot(e) / ut | 0) | 0
            },
            ot = Math.log,
            ut = Math.LN2;
         var st = 64,
            ct = 4194304;

         function dt(e) {
            switch (e & -e) {
               case 1:
                  return 1;
               case 2:
                  return 2;
               case 4:
                  return 4;
               case 8:
                  return 8;
               case 16:
                  return 16;
               case 32:
                  return 32;
               case 64:
               case 128:
               case 256:
               case 512:
               case 1024:
               case 2048:
               case 4096:
               case 8192:
               case 16384:
               case 32768:
               case 65536:
               case 131072:
               case 262144:
               case 524288:
               case 1048576:
               case 2097152:
                  return 4194240 & e;
               case 4194304:
               case 8388608:
               case 16777216:
               case 33554432:
               case 67108864:
                  return 130023424 & e;
               case 134217728:
                  return 134217728;
               case 268435456:
                  return 268435456;
               case 536870912:
                  return 536870912;
               case 1073741824:
                  return 1073741824;
               default:
                  return e
            }
         }

         function ft(e, t) {
            var n = e.pendingLanes;
            if (0 === n) return 0;
            var r = 0,
               a = e.suspendedLanes,
               l = e.pingedLanes,
               i = 268435455 & n;
            if (0 !== i) {
               var o = i & ~a;
               0 !== o ? r = dt(o) : 0 !== (l &= i) && (r = dt(l))
            } else 0 !== (i = n & ~a) ? r = dt(i) : 0 !== l && (r = dt(l));
            if (0 === r) return 0;
            if (0 !== t && t !== r && 0 === (t & a) && ((a = r & -r) >= (l = t & -t) || 16 === a && 0 !== (4194240 & l))) return t;
            if (0 !== (4 & r) && (r |= 16 & n), 0 !== (t = e.entangledLanes))
               for (e = e.entanglements, t &= r; 0 < t;) a = 1 << (n = 31 - it(t)), r |= e[n], t &= ~a;
            return r
         }

         function pt(e, t) {
            switch (e) {
               case 1:
               case 2:
               case 4:
                  return t + 250;
               case 8:
               case 16:
               case 32:
               case 64:
               case 128:
               case 256:
               case 512:
               case 1024:
               case 2048:
               case 4096:
               case 8192:
               case 16384:
               case 32768:
               case 65536:
               case 131072:
               case 262144:
               case 524288:
               case 1048576:
               case 2097152:
                  return t + 5e3;
               default:
                  return -1
            }
         }

         function mt(e) {
            return 0 !== (e = -1073741825 & e.pendingLanes) ? e : 1073741824 & e ? 1073741824 : 0
         }

         function ht() {
            var e = st;
            return 0 === (4194240 & (st <<= 1)) && (st = 64), e
         }

         function vt(e) {
            for (var t = [], n = 0; 31 > n; n++) t.push(e);
            return t
         }

         function gt(e, t, n) {
            e.pendingLanes |= t, 536870912 !== t && (e.suspendedLanes = 0, e.pingedLanes = 0), (e = e.eventTimes)[t = 31 - it(t)] = n
         }

         function yt(e, t) {
            var n = e.entangledLanes |= t;
            for (e = e.entanglements; n;) {
               var r = 31 - it(n),
                  a = 1 << r;
               a & t | e[r] & t && (e[r] |= t), n &= ~a
            }
         }
         var bt = 0;

         function wt(e) {
            return 1 < (e &= -e) ? 4 < e ? 0 !== (268435455 & e) ? 16 : 536870912 : 4 : 1
         }
         var xt, St, kt, Et, Ct, Ot = !1,
            Nt = [],
            _t = null,
            jt = null,
            Tt = null,
            Pt = new Map,
            It = new Map,
            zt = [],
            Mt = "mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset submit".split(" ");

         function Lt(e, t) {
            switch (e) {
               case "focusin":
               case "focusout":
                  _t = null;
                  break;
               case "dragenter":
               case "dragleave":
                  jt = null;
                  break;
               case "mouseover":
               case "mouseout":
                  Tt = null;
                  break;
               case "pointerover":
               case "pointerout":
                  Pt.delete(t.pointerId);
                  break;
               case "gotpointercapture":
               case "lostpointercapture":
                  It.delete(t.pointerId)
            }
         }

         function Rt(e, t, n, r, a, l) {
            return null === e || e.nativeEvent !== l ? (e = {
               blockedOn: t,
               domEventName: n,
               eventSystemFlags: r,
               nativeEvent: l,
               targetContainers: [a]
            }, null !== t && (null !== (t = ba(t)) && St(t)), e) : (e.eventSystemFlags |= r, t = e.targetContainers, null !== a && -1 === t.indexOf(a) && t.push(a), e)
         }

         function Dt(e) {
            var t = ya(e.target);
            if (null !== t) {
               var n = We(t);
               if (null !== n)
                  if (13 === (t = n.tag)) {
                     if (null !== (t = Ve(n))) return e.blockedOn = t, void Ct(e.priority, (function () {
                        kt(n)
                     }))
                  } else if (3 === t && n.stateNode.current.memoizedState.isDehydrated) return void(e.blockedOn = 3 === n.tag ? n.stateNode.containerInfo : null)
            }
            e.blockedOn = null
         }

         function Ft(e) {
            if (null !== e.blockedOn) return !1;
            for (var t = e.targetContainers; 0 < t.length;) {
               var n = Yt(e.domEventName, e.eventSystemFlags, t[0], e.nativeEvent);
               if (null !== n) return null !== (t = ba(n)) && St(t), e.blockedOn = n, !1;
               var r = new(n = e.nativeEvent).constructor(n.type, n);
               we = r, n.target.dispatchEvent(r), we = null, t.shift()
            }
            return !0
         }

         function At(e, t, n) {
            Ft(e) && n.delete(t)
         }

         function Ut() {
            Ot = !1, null !== _t && Ft(_t) && (_t = null), null !== jt && Ft(jt) && (jt = null), null !== Tt && Ft(Tt) && (Tt = null), Pt.forEach(At), It.forEach(At)
         }

         function Ht(e, t) {
            e.blockedOn === t && (e.blockedOn = null, Ot || (Ot = !0, a.unstable_scheduleCallback(a.unstable_NormalPriority, Ut)))
         }

         function Wt(e) {
            function t(t) {
               return Ht(t, e)
            }
            if (0 < Nt.length) {
               Ht(Nt[0], e);
               for (var n = 1; n < Nt.length; n++) {
                  var r = Nt[n];
                  r.blockedOn === e && (r.blockedOn = null)
               }
            }
            for (null !== _t && Ht(_t, e), null !== jt && Ht(jt, e), null !== Tt && Ht(Tt, e), Pt.forEach(t), It.forEach(t), n = 0; n < zt.length; n++)(r = zt[n]).blockedOn === e && (r.blockedOn = null);
            for (; 0 < zt.length && null === (n = zt[0]).blockedOn;) Dt(n), null === n.blockedOn && zt.shift()
         }
         var Vt = w.ReactCurrentBatchConfig,
            Bt = !0;

         function $t(e, t, n, r) {
            var a = bt,
               l = Vt.transition;
            Vt.transition = null;
            try {
               bt = 1, Qt(e, t, n, r)
            } finally {
               bt = a, Vt.transition = l
            }
         }

         function qt(e, t, n, r) {
            var a = bt,
               l = Vt.transition;
            Vt.transition = null;
            try {
               bt = 4, Qt(e, t, n, r)
            } finally {
               bt = a, Vt.transition = l
            }
         }

         function Qt(e, t, n, r) {
            if (Bt) {
               var a = Yt(e, t, n, r);
               if (null === a) Br(e, t, r, Kt, n), Lt(e, r);
               else if (function (e, t, n, r, a) {
                     switch (t) {
                        case "focusin":
                           return _t = Rt(_t, e, t, n, r, a), !0;
                        case "dragenter":
                           return jt = Rt(jt, e, t, n, r, a), !0;
                        case "mouseover":
                           return Tt = Rt(Tt, e, t, n, r, a), !0;
                        case "pointerover":
                           var l = a.pointerId;
                           return Pt.set(l, Rt(Pt.get(l) || null, e, t, n, r, a)), !0;
                        case "gotpointercapture":
                           return l = a.pointerId, It.set(l, Rt(It.get(l) || null, e, t, n, r, a)), !0
                     }
                     return !1
                  }(a, e, t, n, r)) r.stopPropagation();
               else if (Lt(e, r), 4 & t && -1 < Mt.indexOf(e)) {
                  for (; null !== a;) {
                     var l = ba(a);
                     if (null !== l && xt(l), null === (l = Yt(e, t, n, r)) && Br(e, t, r, Kt, n), l === a) break;
                     a = l
                  }
                  null !== a && r.stopPropagation()
               } else Br(e, t, r, null, n)
            }
         }
         var Kt = null;

         function Yt(e, t, n, r) {
            if (Kt = null, null !== (e = ya(e = xe(r))))
               if (null === (t = We(e))) e = null;
               else if (13 === (n = t.tag)) {
               if (null !== (e = Ve(t))) return e;
               e = null
            } else if (3 === n) {
               if (t.stateNode.current.memoizedState.isDehydrated) return 3 === t.tag ? t.stateNode.containerInfo : null;
               e = null
            } else t !== e && (e = null);
            return Kt = e, null
         }

         function Xt(e) {
            switch (e) {
               case "cancel":
               case "click":
               case "close":
               case "contextmenu":
               case "copy":
               case "cut":
               case "auxclick":
               case "dblclick":
               case "dragend":
               case "dragstart":
               case "drop":
               case "focusin":
               case "focusout":
               case "input":
               case "invalid":
               case "keydown":
               case "keypress":
               case "keyup":
               case "mousedown":
               case "mouseup":
               case "paste":
               case "pause":
               case "play":
               case "pointercancel":
               case "pointerdown":
               case "pointerup":
               case "ratechange":
               case "reset":
               case "resize":
               case "seeked":
               case "submit":
               case "touchcancel":
               case "touchend":
               case "touchstart":
               case "volumechange":
               case "change":
               case "selectionchange":
               case "textInput":
               case "compositionstart":
               case "compositionend":
               case "compositionupdate":
               case "beforeblur":
               case "afterblur":
               case "beforeinput":
               case "blur":
               case "fullscreenchange":
               case "focus":
               case "hashchange":
               case "popstate":
               case "select":
               case "selectstart":
                  return 1;
               case "drag":
               case "dragenter":
               case "dragexit":
               case "dragleave":
               case "dragover":
               case "mousemove":
               case "mouseout":
               case "mouseover":
               case "pointermove":
               case "pointerout":
               case "pointerover":
               case "scroll":
               case "toggle":
               case "touchmove":
               case "wheel":
               case "mouseenter":
               case "mouseleave":
               case "pointerenter":
               case "pointerleave":
                  return 4;
               case "message":
                  switch (Ze()) {
                     case Je:
                        return 1;
                     case et:
                        return 4;
                     case tt:
                     case nt:
                        return 16;
                     case rt:
                        return 536870912;
                     default:
                        return 16
                  }
               default:
                  return 16
            }
         }
         var Gt = null,
            Zt = null,
            Jt = null;

         function en() {
            if (Jt) return Jt;
            var e, t, n = Zt,
               r = n.length,
               a = "value" in Gt ? Gt.value : Gt.textContent,
               l = a.length;
            for (e = 0; e < r && n[e] === a[e]; e++);
            var i = r - e;
            for (t = 1; t <= i && n[r - t] === a[l - t]; t++);
            return Jt = a.slice(e, 1 < t ? 1 - t : void 0)
         }

         function tn(e) {
            var t = e.keyCode;
            return "charCode" in e ? 0 === (e = e.charCode) && 13 === t && (e = 13) : e = t, 10 === e && (e = 13), 32 <= e || 13 === e ? e : 0
         }

         function nn() {
            return !0
         }

         function rn() {
            return !1
         }

         function an(e) {
            function t(t, n, r, a, l) {
               for (var i in this._reactName = t, this._targetInst = r, this.type = n, this.nativeEvent = a, this.target = l, this.currentTarget = null, e) e.hasOwnProperty(i) && (t = e[i], this[i] = t ? t(a) : a[i]);
               return this.isDefaultPrevented = (null != a.defaultPrevented ? a.defaultPrevented : !1 === a.returnValue) ? nn : rn, this.isPropagationStopped = rn, this
            }
            return D(t.prototype, {
               preventDefault: function () {
                  this.defaultPrevented = !0;
                  var e = this.nativeEvent;
                  e && (e.preventDefault ? e.preventDefault() : "unknown" !== typeof e.returnValue && (e.returnValue = !1), this.isDefaultPrevented = nn)
               },
               stopPropagation: function () {
                  var e = this.nativeEvent;
                  e && (e.stopPropagation ? e.stopPropagation() : "unknown" !== typeof e.cancelBubble && (e.cancelBubble = !0), this.isPropagationStopped = nn)
               },
               persist: function () {},
               isPersistent: nn
            }), t
         }
         var ln, on, un, sn = {
               eventPhase: 0,
               bubbles: 0,
               cancelable: 0,
               timeStamp: function (e) {
                  return e.timeStamp || Date.now()
               },
               defaultPrevented: 0,
               isTrusted: 0
            },
            cn = an(sn),
            dn = D({}, sn, {
               view: 0,
               detail: 0
            }),
            fn = an(dn),
            pn = D({}, dn, {
               screenX: 0,
               screenY: 0,
               clientX: 0,
               clientY: 0,
               pageX: 0,
               pageY: 0,
               ctrlKey: 0,
               shiftKey: 0,
               altKey: 0,
               metaKey: 0,
               getModifierState: Cn,
               button: 0,
               buttons: 0,
               relatedTarget: function (e) {
                  return void 0 === e.relatedTarget ? e.fromElement === e.srcElement ? e.toElement : e.fromElement : e.relatedTarget
               },
               movementX: function (e) {
                  return "movementX" in e ? e.movementX : (e !== un && (un && "mousemove" === e.type ? (ln = e.screenX - un.screenX, on = e.screenY - un.screenY) : on = ln = 0, un = e), ln)
               },
               movementY: function (e) {
                  return "movementY" in e ? e.movementY : on
               }
            }),
            mn = an(pn),
            hn = an(D({}, pn, {
               dataTransfer: 0
            })),
            vn = an(D({}, dn, {
               relatedTarget: 0
            })),
            gn = an(D({}, sn, {
               animationName: 0,
               elapsedTime: 0,
               pseudoElement: 0
            })),
            yn = D({}, sn, {
               clipboardData: function (e) {
                  return "clipboardData" in e ? e.clipboardData : window.clipboardData
               }
            }),
            bn = an(yn),
            wn = an(D({}, sn, {
               data: 0
            })),
            xn = {
               Esc: "Escape",
               Spacebar: " ",
               Left: "ArrowLeft",
               Up: "ArrowUp",
               Right: "ArrowRight",
               Down: "ArrowDown",
               Del: "Delete",
               Win: "OS",
               Menu: "ContextMenu",
               Apps: "ContextMenu",
               Scroll: "ScrollLock",
               MozPrintableKey: "Unidentified"
            },
            Sn = {
               8: "Backspace",
               9: "Tab",
               12: "Clear",
               13: "Enter",
               16: "Shift",
               17: "Control",
               18: "Alt",
               19: "Pause",
               20: "CapsLock",
               27: "Escape",
               32: " ",
               33: "PageUp",
               34: "PageDown",
               35: "End",
               36: "Home",
               37: "ArrowLeft",
               38: "ArrowUp",
               39: "ArrowRight",
               40: "ArrowDown",
               45: "Insert",
               46: "Delete",
               112: "F1",
               113: "F2",
               114: "F3",
               115: "F4",
               116: "F5",
               117: "F6",
               118: "F7",
               119: "F8",
               120: "F9",
               121: "F10",
               122: "F11",
               123: "F12",
               144: "NumLock",
               145: "ScrollLock",
               224: "Meta"
            },
            kn = {
               Alt: "altKey",
               Control: "ctrlKey",
               Meta: "metaKey",
               Shift: "shiftKey"
            };

         function En(e) {
            var t = this.nativeEvent;
            return t.getModifierState ? t.getModifierState(e) : !!(e = kn[e]) && !!t[e]
         }

         function Cn() {
            return En
         }
         var On = D({}, dn, {
               key: function (e) {
                  if (e.key) {
                     var t = xn[e.key] || e.key;
                     if ("Unidentified" !== t) return t
                  }
                  return "keypress" === e.type ? 13 === (e = tn(e)) ? "Enter" : String.fromCharCode(e) : "keydown" === e.type || "keyup" === e.type ? Sn[e.keyCode] || "Unidentified" : ""
               },
               code: 0,
               location: 0,
               ctrlKey: 0,
               shiftKey: 0,
               altKey: 0,
               metaKey: 0,
               repeat: 0,
               locale: 0,
               getModifierState: Cn,
               charCode: function (e) {
                  return "keypress" === e.type ? tn(e) : 0
               },
               keyCode: function (e) {
                  return "keydown" === e.type || "keyup" === e.type ? e.keyCode : 0
               },
               which: function (e) {
                  return "keypress" === e.type ? tn(e) : "keydown" === e.type || "keyup" === e.type ? e.keyCode : 0
               }
            }),
            Nn = an(On),
            _n = an(D({}, pn, {
               pointerId: 0,
               width: 0,
               height: 0,
               pressure: 0,
               tangentialPressure: 0,
               tiltX: 0,
               tiltY: 0,
               twist: 0,
               pointerType: 0,
               isPrimary: 0
            })),
            jn = an(D({}, dn, {
               touches: 0,
               targetTouches: 0,
               changedTouches: 0,
               altKey: 0,
               metaKey: 0,
               ctrlKey: 0,
               shiftKey: 0,
               getModifierState: Cn
            })),
            Tn = an(D({}, sn, {
               propertyName: 0,
               elapsedTime: 0,
               pseudoElement: 0
            })),
            Pn = D({}, pn, {
               deltaX: function (e) {
                  return "deltaX" in e ? e.deltaX : "wheelDeltaX" in e ? -e.wheelDeltaX : 0
               },
               deltaY: function (e) {
                  return "deltaY" in e ? e.deltaY : "wheelDeltaY" in e ? -e.wheelDeltaY : "wheelDelta" in e ? -e.wheelDelta : 0
               },
               deltaZ: 0,
               deltaMode: 0
            }),
            In = an(Pn),
            zn = [9, 13, 27, 32],
            Mn = c && "CompositionEvent" in window,
            Ln = null;
         c && "documentMode" in document && (Ln = document.documentMode);
         var Rn = c && "TextEvent" in window && !Ln,
            Dn = c && (!Mn || Ln && 8 < Ln && 11 >= Ln),
            Fn = String.fromCharCode(32),
            An = !1;

         function Un(e, t) {
            switch (e) {
               case "keyup":
                  return -1 !== zn.indexOf(t.keyCode);
               case "keydown":
                  return 229 !== t.keyCode;
               case "keypress":
               case "mousedown":
               case "focusout":
                  return !0;
               default:
                  return !1
            }
         }

         function Hn(e) {
            return "object" === typeof (e = e.detail) && "data" in e ? e.data : null
         }
         var Wn = !1;
         var Vn = {
            color: !0,
            date: !0,
            datetime: !0,
            "datetime-local": !0,
            email: !0,
            month: !0,
            number: !0,
            password: !0,
            range: !0,
            search: !0,
            tel: !0,
            text: !0,
            time: !0,
            url: !0,
            week: !0
         };

         function Bn(e) {
            var t = e && e.nodeName && e.nodeName.toLowerCase();
            return "input" === t ? !!Vn[e.type] : "textarea" === t
         }

         function $n(e, t, n, r) {
            Oe(r), 0 < (t = qr(t, "onChange")).length && (n = new cn("onChange", "change", null, n, r), e.push({
               event: n,
               listeners: t
            }))
         }
         var qn = null,
            Qn = null;

         function Kn(e) {
            Fr(e, 0)
         }

         function Yn(e) {
            if (Q(wa(e))) return e
         }

         function Xn(e, t) {
            if ("change" === e) return t
         }
         var Gn = !1;
         if (c) {
            var Zn;
            if (c) {
               var Jn = "oninput" in document;
               if (!Jn) {
                  var er = document.createElement("div");
                  er.setAttribute("oninput", "return;"), Jn = "function" === typeof er.oninput
               }
               Zn = Jn
            } else Zn = !1;
            Gn = Zn && (!document.documentMode || 9 < document.documentMode)
         }

         function tr() {
            qn && (qn.detachEvent("onpropertychange", nr), Qn = qn = null)
         }

         function nr(e) {
            if ("value" === e.propertyName && Yn(Qn)) {
               var t = [];
               $n(t, Qn, e, xe(e)), Pe(Kn, t)
            }
         }

         function rr(e, t, n) {
            "focusin" === e ? (tr(), Qn = n, (qn = t).attachEvent("onpropertychange", nr)) : "focusout" === e && tr()
         }

         function ar(e) {
            if ("selectionchange" === e || "keyup" === e || "keydown" === e) return Yn(Qn)
         }

         function lr(e, t) {
            if ("click" === e) return Yn(t)
         }

         function ir(e, t) {
            if ("input" === e || "change" === e) return Yn(t)
         }
         var or = "function" === typeof Object.is ? Object.is : function (e, t) {
            return e === t && (0 !== e || 1 / e === 1 / t) || e !== e && t !== t
         };

         function ur(e, t) {
            if (or(e, t)) return !0;
            if ("object" !== typeof e || null === e || "object" !== typeof t || null === t) return !1;
            var n = Object.keys(e),
               r = Object.keys(t);
            if (n.length !== r.length) return !1;
            for (r = 0; r < n.length; r++) {
               var a = n[r];
               if (!d.call(t, a) || !or(e[a], t[a])) return !1
            }
            return !0
         }

         function sr(e) {
            for (; e && e.firstChild;) e = e.firstChild;
            return e
         }

         function cr(e, t) {
            var n, r = sr(e);
            for (e = 0; r;) {
               if (3 === r.nodeType) {
                  if (n = e + r.textContent.length, e <= t && n >= t) return {
                     node: r,
                     offset: t - e
                  };
                  e = n
               }
               e: {
                  for (; r;) {
                     if (r.nextSibling) {
                        r = r.nextSibling;
                        break e
                     }
                     r = r.parentNode
                  }
                  r = void 0
               }
               r = sr(r)
            }
         }

         function dr(e, t) {
            return !(!e || !t) && (e === t || (!e || 3 !== e.nodeType) && (t && 3 === t.nodeType ? dr(e, t.parentNode) : "contains" in e ? e.contains(t) : !!e.compareDocumentPosition && !!(16 & e.compareDocumentPosition(t))))
         }

         function fr() {
            for (var e = window, t = K(); t instanceof e.HTMLIFrameElement;) {
               try {
                  var n = "string" === typeof t.contentWindow.location.href
               } catch (r) {
                  n = !1
               }
               if (!n) break;
               t = K((e = t.contentWindow).document)
            }
            return t
         }

         function pr(e) {
            var t = e && e.nodeName && e.nodeName.toLowerCase();
            return t && ("input" === t && ("text" === e.type || "search" === e.type || "tel" === e.type || "url" === e.type || "password" === e.type) || "textarea" === t || "true" === e.contentEditable)
         }

         function mr(e) {
            var t = fr(),
               n = e.focusedElem,
               r = e.selectionRange;
            if (t !== n && n && n.ownerDocument && dr(n.ownerDocument.documentElement, n)) {
               if (null !== r && pr(n))
                  if (t = r.start, void 0 === (e = r.end) && (e = t), "selectionStart" in n) n.selectionStart = t, n.selectionEnd = Math.min(e, n.value.length);
                  else if ((e = (t = n.ownerDocument || document) && t.defaultView || window).getSelection) {
                  e = e.getSelection();
                  var a = n.textContent.length,
                     l = Math.min(r.start, a);
                  r = void 0 === r.end ? l : Math.min(r.end, a), !e.extend && l > r && (a = r, r = l, l = a), a = cr(n, l);
                  var i = cr(n, r);
                  a && i && (1 !== e.rangeCount || e.anchorNode !== a.node || e.anchorOffset !== a.offset || e.focusNode !== i.node || e.focusOffset !== i.offset) && ((t = t.createRange()).setStart(a.node, a.offset), e.removeAllRanges(), l > r ? (e.addRange(t), e.extend(i.node, i.offset)) : (t.setEnd(i.node, i.offset), e.addRange(t)))
               }
               for (t = [], e = n; e = e.parentNode;) 1 === e.nodeType && t.push({
                  element: e,
                  left: e.scrollLeft,
                  top: e.scrollTop
               });
               for ("function" === typeof n.focus && n.focus(), n = 0; n < t.length; n++)(e = t[n]).element.scrollLeft = e.left, e.element.scrollTop = e.top
            }
         }
         var hr = c && "documentMode" in document && 11 >= document.documentMode,
            vr = null,
            gr = null,
            yr = null,
            br = !1;

         function wr(e, t, n) {
            var r = n.window === n ? n.document : 9 === n.nodeType ? n : n.ownerDocument;
            br || null == vr || vr !== K(r) || ("selectionStart" in (r = vr) && pr(r) ? r = {
               start: r.selectionStart,
               end: r.selectionEnd
            } : r = {
               anchorNode: (r = (r.ownerDocument && r.ownerDocument.defaultView || window).getSelection()).anchorNode,
               anchorOffset: r.anchorOffset,
               focusNode: r.focusNode,
               focusOffset: r.focusOffset
            }, yr && ur(yr, r) || (yr = r, 0 < (r = qr(gr, "onSelect")).length && (t = new cn("onSelect", "select", null, t, n), e.push({
               event: t,
               listeners: r
            }), t.target = vr)))
         }

         function xr(e, t) {
            var n = {};
            return n[e.toLowerCase()] = t.toLowerCase(), n["Webkit" + e] = "webkit" + t, n["Moz" + e] = "moz" + t, n
         }
         var Sr = {
               animationend: xr("Animation", "AnimationEnd"),
               animationiteration: xr("Animation", "AnimationIteration"),
               animationstart: xr("Animation", "AnimationStart"),
               transitionend: xr("Transition", "TransitionEnd")
            },
            kr = {},
            Er = {};

         function Cr(e) {
            if (kr[e]) return kr[e];
            if (!Sr[e]) return e;
            var t, n = Sr[e];
            for (t in n)
               if (n.hasOwnProperty(t) && t in Er) return kr[e] = n[t];
            return e
         }
         c && (Er = document.createElement("div").style, "AnimationEvent" in window || (delete Sr.animationend.animation, delete Sr.animationiteration.animation, delete Sr.animationstart.animation), "TransitionEvent" in window || delete Sr.transitionend.transition);
         var Or = Cr("animationend"),
            Nr = Cr("animationiteration"),
            _r = Cr("animationstart"),
            jr = Cr("transitionend"),
            Tr = new Map,
            Pr = "abort auxClick cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(" ");

         function Ir(e, t) {
            Tr.set(e, t), u(t, [e])
         }
         for (var zr = 0; zr < Pr.length; zr++) {
            var Mr = Pr[zr];
            Ir(Mr.toLowerCase(), "on" + (Mr[0].toUpperCase() + Mr.slice(1)))
         }
         Ir(Or, "onAnimationEnd"), Ir(Nr, "onAnimationIteration"), Ir(_r, "onAnimationStart"), Ir("dblclick", "onDoubleClick"), Ir("focusin", "onFocus"), Ir("focusout", "onBlur"), Ir(jr, "onTransitionEnd"), s("onMouseEnter", ["mouseout", "mouseover"]), s("onMouseLeave", ["mouseout", "mouseover"]), s("onPointerEnter", ["pointerout", "pointerover"]), s("onPointerLeave", ["pointerout", "pointerover"]), u("onChange", "change click focusin focusout input keydown keyup selectionchange".split(" ")), u("onSelect", "focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" ")), u("onBeforeInput", ["compositionend", "keypress", "textInput", "paste"]), u("onCompositionEnd", "compositionend focusout keydown keypress keyup mousedown".split(" ")), u("onCompositionStart", "compositionstart focusout keydown keypress keyup mousedown".split(" ")), u("onCompositionUpdate", "compositionupdate focusout keydown keypress keyup mousedown".split(" "));
         var Lr = "abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" "),
            Rr = new Set("cancel close invalid load scroll toggle".split(" ").concat(Lr));

         function Dr(e, t, n) {
            var r = e.type || "unknown-event";
            e.currentTarget = n,
               function (e, t, n, r, a, i, o, u, s) {
                  if (He.apply(this, arguments), Re) {
                     if (!Re) throw Error(l(198));
                     var c = De;
                     Re = !1, De = null, Fe || (Fe = !0, Ae = c)
                  }
               }(r, t, void 0, e), e.currentTarget = null
         }

         function Fr(e, t) {
            t = 0 !== (4 & t);
            for (var n = 0; n < e.length; n++) {
               var r = e[n],
                  a = r.event;
               r = r.listeners;
               e: {
                  var l = void 0;
                  if (t)
                     for (var i = r.length - 1; 0 <= i; i--) {
                        var o = r[i],
                           u = o.instance,
                           s = o.currentTarget;
                        if (o = o.listener, u !== l && a.isPropagationStopped()) break e;
                        Dr(a, o, s), l = u
                     } else
                        for (i = 0; i < r.length; i++) {
                           if (u = (o = r[i]).instance, s = o.currentTarget, o = o.listener, u !== l && a.isPropagationStopped()) break e;
                           Dr(a, o, s), l = u
                        }
               }
            }
            if (Fe) throw e = Ae, Fe = !1, Ae = null, e
         }

         function Ar(e, t) {
            var n = t[ha];
            void 0 === n && (n = t[ha] = new Set);
            var r = e + "__bubble";
            n.has(r) || (Vr(t, e, 2, !1), n.add(r))
         }

         function Ur(e, t, n) {
            var r = 0;
            t && (r |= 4), Vr(n, e, r, t)
         }
         var Hr = "_reactListening" + Math.random().toString(36).slice(2);

         function Wr(e) {
            if (!e[Hr]) {
               e[Hr] = !0, i.forEach((function (t) {
                  "selectionchange" !== t && (Rr.has(t) || Ur(t, !1, e), Ur(t, !0, e))
               }));
               var t = 9 === e.nodeType ? e : e.ownerDocument;
               null === t || t[Hr] || (t[Hr] = !0, Ur("selectionchange", !1, t))
            }
         }

         function Vr(e, t, n, r) {
            switch (Xt(t)) {
               case 1:
                  var a = $t;
                  break;
               case 4:
                  a = qt;
                  break;
               default:
                  a = Qt
            }
            n = a.bind(null, t, n, e), a = void 0, !ze || "touchstart" !== t && "touchmove" !== t && "wheel" !== t || (a = !0), r ? void 0 !== a ? e.addEventListener(t, n, {
               capture: !0,
               passive: a
            }) : e.addEventListener(t, n, !0) : void 0 !== a ? e.addEventListener(t, n, {
               passive: a
            }) : e.addEventListener(t, n, !1)
         }

         function Br(e, t, n, r, a) {
            var l = r;
            if (0 === (1 & t) && 0 === (2 & t) && null !== r) e: for (;;) {
               if (null === r) return;
               var i = r.tag;
               if (3 === i || 4 === i) {
                  var o = r.stateNode.containerInfo;
                  if (o === a || 8 === o.nodeType && o.parentNode === a) break;
                  if (4 === i)
                     for (i = r.return; null !== i;) {
                        var u = i.tag;
                        if ((3 === u || 4 === u) && ((u = i.stateNode.containerInfo) === a || 8 === u.nodeType && u.parentNode === a)) return;
                        i = i.return
                     }
                  for (; null !== o;) {
                     if (null === (i = ya(o))) return;
                     if (5 === (u = i.tag) || 6 === u) {
                        r = l = i;
                        continue e
                     }
                     o = o.parentNode
                  }
               }
               r = r.return
            }
            Pe((function () {
               var r = l,
                  a = xe(n),
                  i = [];
               e: {
                  var o = Tr.get(e);
                  if (void 0 !== o) {
                     var u = cn,
                        s = e;
                     switch (e) {
                        case "keypress":
                           if (0 === tn(n)) break e;
                        case "keydown":
                        case "keyup":
                           u = Nn;
                           break;
                        case "focusin":
                           s = "focus", u = vn;
                           break;
                        case "focusout":
                           s = "blur", u = vn;
                           break;
                        case "beforeblur":
                        case "afterblur":
                           u = vn;
                           break;
                        case "click":
                           if (2 === n.button) break e;
                        case "auxclick":
                        case "dblclick":
                        case "mousedown":
                        case "mousemove":
                        case "mouseup":
                        case "mouseout":
                        case "mouseover":
                        case "contextmenu":
                           u = mn;
                           break;
                        case "drag":
                        case "dragend":
                        case "dragenter":
                        case "dragexit":
                        case "dragleave":
                        case "dragover":
                        case "dragstart":
                        case "drop":
                           u = hn;
                           break;
                        case "touchcancel":
                        case "touchend":
                        case "touchmove":
                        case "touchstart":
                           u = jn;
                           break;
                        case Or:
                        case Nr:
                        case _r:
                           u = gn;
                           break;
                        case jr:
                           u = Tn;
                           break;
                        case "scroll":
                           u = fn;
                           break;
                        case "wheel":
                           u = In;
                           break;
                        case "copy":
                        case "cut":
                        case "paste":
                           u = bn;
                           break;
                        case "gotpointercapture":
                        case "lostpointercapture":
                        case "pointercancel":
                        case "pointerdown":
                        case "pointermove":
                        case "pointerout":
                        case "pointerover":
                        case "pointerup":
                           u = _n
                     }
                     var c = 0 !== (4 & t),
                        d = !c && "scroll" === e,
                        f = c ? null !== o ? o + "Capture" : null : o;
                     c = [];
                     for (var p, m = r; null !== m;) {
                        var h = (p = m).stateNode;
                        if (5 === p.tag && null !== h && (p = h, null !== f && (null != (h = Ie(m, f)) && c.push($r(m, h, p)))), d) break;
                        m = m.return
                     }
                     0 < c.length && (o = new u(o, s, null, n, a), i.push({
                        event: o,
                        listeners: c
                     }))
                  }
               }
               if (0 === (7 & t)) {
                  if (u = "mouseout" === e || "pointerout" === e, (!(o = "mouseover" === e || "pointerover" === e) || n === we || !(s = n.relatedTarget || n.fromElement) || !ya(s) && !s[ma]) && (u || o) && (o = a.window === a ? a : (o = a.ownerDocument) ? o.defaultView || o.parentWindow : window, u ? (u = r, null !== (s = (s = n.relatedTarget || n.toElement) ? ya(s) : null) && (s !== (d = We(s)) || 5 !== s.tag && 6 !== s.tag) && (s = null)) : (u = null, s = r), u !== s)) {
                     if (c = mn, h = "onMouseLeave", f = "onMouseEnter", m = "mouse", "pointerout" !== e && "pointerover" !== e || (c = _n, h = "onPointerLeave", f = "onPointerEnter", m = "pointer"), d = null == u ? o : wa(u), p = null == s ? o : wa(s), (o = new c(h, m + "leave", u, n, a)).target = d, o.relatedTarget = p, h = null, ya(a) === r && ((c = new c(f, m + "enter", s, n, a)).target = p, c.relatedTarget = d, h = c), d = h, u && s) e: {
                        for (f = s, m = 0, p = c = u; p; p = Qr(p)) m++;
                        for (p = 0, h = f; h; h = Qr(h)) p++;
                        for (; 0 < m - p;) c = Qr(c),
                        m--;
                        for (; 0 < p - m;) f = Qr(f),
                        p--;
                        for (; m--;) {
                           if (c === f || null !== f && c === f.alternate) break e;
                           c = Qr(c), f = Qr(f)
                        }
                        c = null
                     }
                     else c = null;
                     null !== u && Kr(i, o, u, c, !1), null !== s && null !== d && Kr(i, d, s, c, !0)
                  }
                  if ("select" === (u = (o = r ? wa(r) : window).nodeName && o.nodeName.toLowerCase()) || "input" === u && "file" === o.type) var v = Xn;
                  else if (Bn(o))
                     if (Gn) v = ir;
                     else {
                        v = ar;
                        var g = rr
                     }
                  else(u = o.nodeName) && "input" === u.toLowerCase() && ("checkbox" === o.type || "radio" === o.type) && (v = lr);
                  switch (v && (v = v(e, r)) ? $n(i, v, n, a) : (g && g(e, o, r), "focusout" === e && (g = o._wrapperState) && g.controlled && "number" === o.type && ee(o, "number", o.value)), g = r ? wa(r) : window, e) {
                     case "focusin":
                        (Bn(g) || "true" === g.contentEditable) && (vr = g, gr = r, yr = null);
                        break;
                     case "focusout":
                        yr = gr = vr = null;
                        break;
                     case "mousedown":
                        br = !0;
                        break;
                     case "contextmenu":
                     case "mouseup":
                     case "dragend":
                        br = !1, wr(i, n, a);
                        break;
                     case "selectionchange":
                        if (hr) break;
                     case "keydown":
                     case "keyup":
                        wr(i, n, a)
                  }
                  var y;
                  if (Mn) e: {
                     switch (e) {
                        case "compositionstart":
                           var b = "onCompositionStart";
                           break e;
                        case "compositionend":
                           b = "onCompositionEnd";
                           break e;
                        case "compositionupdate":
                           b = "onCompositionUpdate";
                           break e
                     }
                     b = void 0
                  }
                  else Wn ? Un(e, n) && (b = "onCompositionEnd") : "keydown" === e && 229 === n.keyCode && (b = "onCompositionStart");
                  b && (Dn && "ko" !== n.locale && (Wn || "onCompositionStart" !== b ? "onCompositionEnd" === b && Wn && (y = en()) : (Zt = "value" in (Gt = a) ? Gt.value : Gt.textContent, Wn = !0)), 0 < (g = qr(r, b)).length && (b = new wn(b, e, null, n, a), i.push({
                     event: b,
                     listeners: g
                  }), y ? b.data = y : null !== (y = Hn(n)) && (b.data = y))), (y = Rn ? function (e, t) {
                     switch (e) {
                        case "compositionend":
                           return Hn(t);
                        case "keypress":
                           return 32 !== t.which ? null : (An = !0, Fn);
                        case "textInput":
                           return (e = t.data) === Fn && An ? null : e;
                        default:
                           return null
                     }
                  }(e, n) : function (e, t) {
                     if (Wn) return "compositionend" === e || !Mn && Un(e, t) ? (e = en(), Jt = Zt = Gt = null, Wn = !1, e) : null;
                     switch (e) {
                        case "paste":
                        default:
                           return null;
                        case "keypress":
                           if (!(t.ctrlKey || t.altKey || t.metaKey) || t.ctrlKey && t.altKey) {
                              if (t.char && 1 < t.char.length) return t.char;
                              if (t.which) return String.fromCharCode(t.which)
                           }
                           return null;
                        case "compositionend":
                           return Dn && "ko" !== t.locale ? null : t.data
                     }
                  }(e, n)) && (0 < (r = qr(r, "onBeforeInput")).length && (a = new wn("onBeforeInput", "beforeinput", null, n, a), i.push({
                     event: a,
                     listeners: r
                  }), a.data = y))
               }
               Fr(i, t)
            }))
         }

         function $r(e, t, n) {
            return {
               instance: e,
               listener: t,
               currentTarget: n
            }
         }

         function qr(e, t) {
            for (var n = t + "Capture", r = []; null !== e;) {
               var a = e,
                  l = a.stateNode;
               5 === a.tag && null !== l && (a = l, null != (l = Ie(e, n)) && r.unshift($r(e, l, a)), null != (l = Ie(e, t)) && r.push($r(e, l, a))), e = e.return
            }
            return r
         }

         function Qr(e) {
            if (null === e) return null;
            do {
               e = e.return
            } while (e && 5 !== e.tag);
            return e || null
         }

         function Kr(e, t, n, r, a) {
            for (var l = t._reactName, i = []; null !== n && n !== r;) {
               var o = n,
                  u = o.alternate,
                  s = o.stateNode;
               if (null !== u && u === r) break;
               5 === o.tag && null !== s && (o = s, a ? null != (u = Ie(n, l)) && i.unshift($r(n, u, o)) : a || null != (u = Ie(n, l)) && i.push($r(n, u, o))), n = n.return
            }
            0 !== i.length && e.push({
               event: t,
               listeners: i
            })
         }
         var Yr = /\r\n?/g,
            Xr = /\u0000|\uFFFD/g;

         function Gr(e) {
            return ("string" === typeof e ? e : "" + e).replace(Yr, "\n").replace(Xr, "")
         }

         function Zr(e, t, n) {
            if (t = Gr(t), Gr(e) !== t && n) throw Error(l(425))
         }

         function Jr() {}
         var ea = null,
            ta = null;

         function na(e, t) {
            return "textarea" === e || "noscript" === e || "string" === typeof t.children || "number" === typeof t.children || "object" === typeof t.dangerouslySetInnerHTML && null !== t.dangerouslySetInnerHTML && null != t.dangerouslySetInnerHTML.__html
         }
         var ra = "function" === typeof setTimeout ? setTimeout : void 0,
            aa = "function" === typeof clearTimeout ? clearTimeout : void 0,
            la = "function" === typeof Promise ? Promise : void 0,
            ia = "function" === typeof queueMicrotask ? queueMicrotask : "undefined" !== typeof la ? function (e) {
               return la.resolve(null).then(e).catch(oa)
            } : ra;

         function oa(e) {
            setTimeout((function () {
               throw e
            }))
         }

         function ua(e, t) {
            var n = t,
               r = 0;
            do {
               var a = n.nextSibling;
               if (e.removeChild(n), a && 8 === a.nodeType)
                  if ("/$" === (n = a.data)) {
                     if (0 === r) return e.removeChild(a), void Wt(t);
                     r--
                  } else "$" !== n && "$?" !== n && "$!" !== n || r++;
               n = a
            } while (n);
            Wt(t)
         }

         function sa(e) {
            for (; null != e; e = e.nextSibling) {
               var t = e.nodeType;
               if (1 === t || 3 === t) break;
               if (8 === t) {
                  if ("$" === (t = e.data) || "$!" === t || "$?" === t) break;
                  if ("/$" === t) return null
               }
            }
            return e
         }

         function ca(e) {
            e = e.previousSibling;
            for (var t = 0; e;) {
               if (8 === e.nodeType) {
                  var n = e.data;
                  if ("$" === n || "$!" === n || "$?" === n) {
                     if (0 === t) return e;
                     t--
                  } else "/$" === n && t++
               }
               e = e.previousSibling
            }
            return null
         }
         var da = Math.random().toString(36).slice(2),
            fa = "__reactFiber$" + da,
            pa = "__reactProps$" + da,
            ma = "__reactContainer$" + da,
            ha = "__reactEvents$" + da,
            va = "__reactListeners$" + da,
            ga = "__reactHandles$" + da;

         function ya(e) {
            var t = e[fa];
            if (t) return t;
            for (var n = e.parentNode; n;) {
               if (t = n[ma] || n[fa]) {
                  if (n = t.alternate, null !== t.child || null !== n && null !== n.child)
                     for (e = ca(e); null !== e;) {
                        if (n = e[fa]) return n;
                        e = ca(e)
                     }
                  return t
               }
               n = (e = n).parentNode
            }
            return null
         }

         function ba(e) {
            return !(e = e[fa] || e[ma]) || 5 !== e.tag && 6 !== e.tag && 13 !== e.tag && 3 !== e.tag ? null : e
         }

         function wa(e) {
            if (5 === e.tag || 6 === e.tag) return e.stateNode;
            throw Error(l(33))
         }

         function xa(e) {
            return e[pa] || null
         }
         var Sa = [],
            ka = -1;

         function Ea(e) {
            return {
               current: e
            }
         }

         function Ca(e) {
            0 > ka || (e.current = Sa[ka], Sa[ka] = null, ka--)
         }

         function Oa(e, t) {
            ka++, Sa[ka] = e.current, e.current = t
         }
         var Na = {},
            _a = Ea(Na),
            ja = Ea(!1),
            Ta = Na;

         function Pa(e, t) {
            var n = e.type.contextTypes;
            if (!n) return Na;
            var r = e.stateNode;
            if (r && r.__reactInternalMemoizedUnmaskedChildContext === t) return r.__reactInternalMemoizedMaskedChildContext;
            var a, l = {};
            for (a in n) l[a] = t[a];
            return r && ((e = e.stateNode).__reactInternalMemoizedUnmaskedChildContext = t, e.__reactInternalMemoizedMaskedChildContext = l), l
         }

         function Ia(e) {
            return null !== (e = e.childContextTypes) && void 0 !== e
         }

         function za() {
            Ca(ja), Ca(_a)
         }

         function Ma(e, t, n) {
            if (_a.current !== Na) throw Error(l(168));
            Oa(_a, t), Oa(ja, n)
         }

         function La(e, t, n) {
            var r = e.stateNode;
            if (t = t.childContextTypes, "function" !== typeof r.getChildContext) return n;
            for (var a in r = r.getChildContext())
               if (!(a in t)) throw Error(l(108, V(e) || "Unknown", a));
            return D({}, n, r)
         }

         function Ra(e) {
            return e = (e = e.stateNode) && e.__reactInternalMemoizedMergedChildContext || Na, Ta = _a.current, Oa(_a, e), Oa(ja, ja.current), !0
         }

         function Da(e, t, n) {
            var r = e.stateNode;
            if (!r) throw Error(l(169));
            n ? (e = La(e, t, Ta), r.__reactInternalMemoizedMergedChildContext = e, Ca(ja), Ca(_a), Oa(_a, e)) : Ca(ja), Oa(ja, n)
         }
         var Fa = null,
            Aa = !1,
            Ua = !1;

         function Ha(e) {
            null === Fa ? Fa = [e] : Fa.push(e)
         }

         function Wa() {
            if (!Ua && null !== Fa) {
               Ua = !0;
               var e = 0,
                  t = bt;
               try {
                  var n = Fa;
                  for (bt = 1; e < n.length; e++) {
                     var r = n[e];
                     do {
                        r = r(!0)
                     } while (null !== r)
                  }
                  Fa = null, Aa = !1
               } catch (a) {
                  throw null !== Fa && (Fa = Fa.slice(e + 1)), Qe(Je, Wa), a
               } finally {
                  bt = t, Ua = !1
               }
            }
            return null
         }
         var Va = [],
            Ba = 0,
            $a = null,
            qa = 0,
            Qa = [],
            Ka = 0,
            Ya = null,
            Xa = 1,
            Ga = "";

         function Za(e, t) {
            Va[Ba++] = qa, Va[Ba++] = $a, $a = e, qa = t
         }

         function Ja(e, t, n) {
            Qa[Ka++] = Xa, Qa[Ka++] = Ga, Qa[Ka++] = Ya, Ya = e;
            var r = Xa;
            e = Ga;
            var a = 32 - it(r) - 1;
            r &= ~(1 << a), n += 1;
            var l = 32 - it(t) + a;
            if (30 < l) {
               var i = a - a % 5;
               l = (r & (1 << i) - 1).toString(32), r >>= i, a -= i, Xa = 1 << 32 - it(t) + a | n << a | r, Ga = l + e
            } else Xa = 1 << l | n << a | r, Ga = e
         }

         function el(e) {
            null !== e.return && (Za(e, 1), Ja(e, 1, 0))
         }

         function tl(e) {
            for (; e === $a;) $a = Va[--Ba], Va[Ba] = null, qa = Va[--Ba], Va[Ba] = null;
            for (; e === Ya;) Ya = Qa[--Ka], Qa[Ka] = null, Ga = Qa[--Ka], Qa[Ka] = null, Xa = Qa[--Ka], Qa[Ka] = null
         }
         var nl = null,
            rl = null,
            al = !1,
            ll = null;

         function il(e, t) {
            var n = Ps(5, null, null, 0);
            n.elementType = "DELETED", n.stateNode = t, n.return = e, null === (t = e.deletions) ? (e.deletions = [n], e.flags |= 16) : t.push(n)
         }

         function ol(e, t) {
            switch (e.tag) {
               case 5:
                  var n = e.type;
                  return null !== (t = 1 !== t.nodeType || n.toLowerCase() !== t.nodeName.toLowerCase() ? null : t) && (e.stateNode = t, nl = e, rl = sa(t.firstChild), !0);
               case 6:
                  return null !== (t = "" === e.pendingProps || 3 !== t.nodeType ? null : t) && (e.stateNode = t, nl = e, rl = null, !0);
               case 13:
                  return null !== (t = 8 !== t.nodeType ? null : t) && (n = null !== Ya ? {
                     id: Xa,
                     overflow: Ga
                  } : null, e.memoizedState = {
                     dehydrated: t,
                     treeContext: n,
                     retryLane: 1073741824
                  }, (n = Ps(18, null, null, 0)).stateNode = t, n.return = e, e.child = n, nl = e, rl = null, !0);
               default:
                  return !1
            }
         }

         function ul(e) {
            return 0 !== (1 & e.mode) && 0 === (128 & e.flags)
         }

         function sl(e) {
            if (al) {
               var t = rl;
               if (t) {
                  var n = t;
                  if (!ol(e, t)) {
                     if (ul(e)) throw Error(l(418));
                     t = sa(n.nextSibling);
                     var r = nl;
                     t && ol(e, t) ? il(r, n) : (e.flags = -4097 & e.flags | 2, al = !1, nl = e)
                  }
               } else {
                  if (ul(e)) throw Error(l(418));
                  e.flags = -4097 & e.flags | 2, al = !1, nl = e
               }
            }
         }

         function cl(e) {
            for (e = e.return; null !== e && 5 !== e.tag && 3 !== e.tag && 13 !== e.tag;) e = e.return;
            nl = e
         }

         function dl(e) {
            if (e !== nl) return !1;
            if (!al) return cl(e), al = !0, !1;
            var t;
            if ((t = 3 !== e.tag) && !(t = 5 !== e.tag) && (t = "head" !== (t = e.type) && "body" !== t && !na(e.type, e.memoizedProps)), t && (t = rl)) {
               if (ul(e)) throw fl(), Error(l(418));
               for (; t;) il(e, t), t = sa(t.nextSibling)
            }
            if (cl(e), 13 === e.tag) {
               if (!(e = null !== (e = e.memoizedState) ? e.dehydrated : null)) throw Error(l(317));
               e: {
                  for (e = e.nextSibling, t = 0; e;) {
                     if (8 === e.nodeType) {
                        var n = e.data;
                        if ("/$" === n) {
                           if (0 === t) {
                              rl = sa(e.nextSibling);
                              break e
                           }
                           t--
                        } else "$" !== n && "$!" !== n && "$?" !== n || t++
                     }
                     e = e.nextSibling
                  }
                  rl = null
               }
            } else rl = nl ? sa(e.stateNode.nextSibling) : null;
            return !0
         }

         function fl() {
            for (var e = rl; e;) e = sa(e.nextSibling)
         }

         function pl() {
            rl = nl = null, al = !1
         }

         function ml(e) {
            null === ll ? ll = [e] : ll.push(e)
         }
         var hl = w.ReactCurrentBatchConfig;

         function vl(e, t) {
            if (e && e.defaultProps) {
               for (var n in t = D({}, t), e = e.defaultProps) void 0 === t[n] && (t[n] = e[n]);
               return t
            }
            return t
         }
         var gl = Ea(null),
            yl = null,
            bl = null,
            wl = null;

         function xl() {
            wl = bl = yl = null
         }

         function Sl(e) {
            var t = gl.current;
            Ca(gl), e._currentValue = t
         }

         function kl(e, t, n) {
            for (; null !== e;) {
               var r = e.alternate;
               if ((e.childLanes & t) !== t ? (e.childLanes |= t, null !== r && (r.childLanes |= t)) : null !== r && (r.childLanes & t) !== t && (r.childLanes |= t), e === n) break;
               e = e.return
            }
         }

         function El(e, t) {
            yl = e, wl = bl = null, null !== (e = e.dependencies) && null !== e.firstContext && (0 !== (e.lanes & t) && (wo = !0), e.firstContext = null)
         }

         function Cl(e) {
            var t = e._currentValue;
            if (wl !== e)
               if (e = {
                     context: e,
                     memoizedValue: t,
                     next: null
                  }, null === bl) {
                  if (null === yl) throw Error(l(308));
                  bl = e, yl.dependencies = {
                     lanes: 0,
                     firstContext: e
                  }
               } else bl = bl.next = e;
            return t
         }
         var Ol = null;

         function Nl(e) {
            null === Ol ? Ol = [e] : Ol.push(e)
         }

         function _l(e, t, n, r) {
            var a = t.interleaved;
            return null === a ? (n.next = n, Nl(t)) : (n.next = a.next, a.next = n), t.interleaved = n, jl(e, r)
         }

         function jl(e, t) {
            e.lanes |= t;
            var n = e.alternate;
            for (null !== n && (n.lanes |= t), n = e, e = e.return; null !== e;) e.childLanes |= t, null !== (n = e.alternate) && (n.childLanes |= t), n = e, e = e.return;
            return 3 === n.tag ? n.stateNode : null
         }
         var Tl = !1;

         function Pl(e) {
            e.updateQueue = {
               baseState: e.memoizedState,
               firstBaseUpdate: null,
               lastBaseUpdate: null,
               shared: {
                  pending: null,
                  interleaved: null,
                  lanes: 0
               },
               effects: null
            }
         }

         function Il(e, t) {
            e = e.updateQueue, t.updateQueue === e && (t.updateQueue = {
               baseState: e.baseState,
               firstBaseUpdate: e.firstBaseUpdate,
               lastBaseUpdate: e.lastBaseUpdate,
               shared: e.shared,
               effects: e.effects
            })
         }

         function zl(e, t) {
            return {
               eventTime: e,
               lane: t,
               tag: 0,
               payload: null,
               callback: null,
               next: null
            }
         }

         function Ml(e, t, n) {
            var r = e.updateQueue;
            if (null === r) return null;
            if (r = r.shared, 0 !== (2 & _u)) {
               var a = r.pending;
               return null === a ? t.next = t : (t.next = a.next, a.next = t), r.pending = t, jl(e, n)
            }
            return null === (a = r.interleaved) ? (t.next = t, Nl(r)) : (t.next = a.next, a.next = t), r.interleaved = t, jl(e, n)
         }

         function Ll(e, t, n) {
            if (null !== (t = t.updateQueue) && (t = t.shared, 0 !== (4194240 & n))) {
               var r = t.lanes;
               n |= r &= e.pendingLanes, t.lanes = n, yt(e, n)
            }
         }

         function Rl(e, t) {
            var n = e.updateQueue,
               r = e.alternate;
            if (null !== r && n === (r = r.updateQueue)) {
               var a = null,
                  l = null;
               if (null !== (n = n.firstBaseUpdate)) {
                  do {
                     var i = {
                        eventTime: n.eventTime,
                        lane: n.lane,
                        tag: n.tag,
                        payload: n.payload,
                        callback: n.callback,
                        next: null
                     };
                     null === l ? a = l = i : l = l.next = i, n = n.next
                  } while (null !== n);
                  null === l ? a = l = t : l = l.next = t
               } else a = l = t;
               return n = {
                  baseState: r.baseState,
                  firstBaseUpdate: a,
                  lastBaseUpdate: l,
                  shared: r.shared,
                  effects: r.effects
               }, void(e.updateQueue = n)
            }
            null === (e = n.lastBaseUpdate) ? n.firstBaseUpdate = t : e.next = t, n.lastBaseUpdate = t
         }

         function Dl(e, t, n, r) {
            var a = e.updateQueue;
            Tl = !1;
            var l = a.firstBaseUpdate,
               i = a.lastBaseUpdate,
               o = a.shared.pending;
            if (null !== o) {
               a.shared.pending = null;
               var u = o,
                  s = u.next;
               u.next = null, null === i ? l = s : i.next = s, i = u;
               var c = e.alternate;
               null !== c && ((o = (c = c.updateQueue).lastBaseUpdate) !== i && (null === o ? c.firstBaseUpdate = s : o.next = s, c.lastBaseUpdate = u))
            }
            if (null !== l) {
               var d = a.baseState;
               for (i = 0, c = s = u = null, o = l;;) {
                  var f = o.lane,
                     p = o.eventTime;
                  if ((r & f) === f) {
                     null !== c && (c = c.next = {
                        eventTime: p,
                        lane: 0,
                        tag: o.tag,
                        payload: o.payload,
                        callback: o.callback,
                        next: null
                     });
                     e: {
                        var m = e,
                           h = o;
                        switch (f = t, p = n, h.tag) {
                           case 1:
                              if ("function" === typeof (m = h.payload)) {
                                 d = m.call(p, d, f);
                                 break e
                              }
                              d = m;
                              break e;
                           case 3:
                              m.flags = -65537 & m.flags | 128;
                           case 0:
                              if (null === (f = "function" === typeof (m = h.payload) ? m.call(p, d, f) : m) || void 0 === f) break e;
                              d = D({}, d, f);
                              break e;
                           case 2:
                              Tl = !0
                        }
                     }
                     null !== o.callback && 0 !== o.lane && (e.flags |= 64, null === (f = a.effects) ? a.effects = [o] : f.push(o))
                  } else p = {
                     eventTime: p,
                     lane: f,
                     tag: o.tag,
                     payload: o.payload,
                     callback: o.callback,
                     next: null
                  }, null === c ? (s = c = p, u = d) : c = c.next = p, i |= f;
                  if (null === (o = o.next)) {
                     if (null === (o = a.shared.pending)) break;
                     o = (f = o).next, f.next = null, a.lastBaseUpdate = f, a.shared.pending = null
                  }
               }
               if (null === c && (u = d), a.baseState = u, a.firstBaseUpdate = s, a.lastBaseUpdate = c, null !== (t = a.shared.interleaved)) {
                  a = t;
                  do {
                     i |= a.lane, a = a.next
                  } while (a !== t)
               } else null === l && (a.shared.lanes = 0);
               Ru |= i, e.lanes = i, e.memoizedState = d
            }
         }

         function Fl(e, t, n) {
            if (e = t.effects, t.effects = null, null !== e)
               for (t = 0; t < e.length; t++) {
                  var r = e[t],
                     a = r.callback;
                  if (null !== a) {
                     if (r.callback = null, r = n, "function" !== typeof a) throw Error(l(191, a));
                     a.call(r)
                  }
               }
         }
         var Al = (new r.Component).refs;

         function Ul(e, t, n, r) {
            n = null === (n = n(r, t = e.memoizedState)) || void 0 === n ? t : D({}, t, n), e.memoizedState = n, 0 === e.lanes && (e.updateQueue.baseState = n)
         }
         var Hl = {
            isMounted: function (e) {
               return !!(e = e._reactInternals) && We(e) === e
            },
            enqueueSetState: function (e, t, n) {
               e = e._reactInternals;
               var r = es(),
                  a = ts(e),
                  l = zl(r, a);
               l.payload = t, void 0 !== n && null !== n && (l.callback = n), null !== (t = Ml(e, l, a)) && (ns(t, e, a, r), Ll(t, e, a))
            },
            enqueueReplaceState: function (e, t, n) {
               e = e._reactInternals;
               var r = es(),
                  a = ts(e),
                  l = zl(r, a);
               l.tag = 1, l.payload = t, void 0 !== n && null !== n && (l.callback = n), null !== (t = Ml(e, l, a)) && (ns(t, e, a, r), Ll(t, e, a))
            },
            enqueueForceUpdate: function (e, t) {
               e = e._reactInternals;
               var n = es(),
                  r = ts(e),
                  a = zl(n, r);
               a.tag = 2, void 0 !== t && null !== t && (a.callback = t), null !== (t = Ml(e, a, r)) && (ns(t, e, r, n), Ll(t, e, r))
            }
         };

         function Wl(e, t, n, r, a, l, i) {
            return "function" === typeof (e = e.stateNode).shouldComponentUpdate ? e.shouldComponentUpdate(r, l, i) : !t.prototype || !t.prototype.isPureReactComponent || (!ur(n, r) || !ur(a, l))
         }

         function Vl(e, t, n) {
            var r = !1,
               a = Na,
               l = t.contextType;
            return "object" === typeof l && null !== l ? l = Cl(l) : (a = Ia(t) ? Ta : _a.current, l = (r = null !== (r = t.contextTypes) && void 0 !== r) ? Pa(e, a) : Na), t = new t(n, l), e.memoizedState = null !== t.state && void 0 !== t.state ? t.state : null, t.updater = Hl, e.stateNode = t, t._reactInternals = e, r && ((e = e.stateNode).__reactInternalMemoizedUnmaskedChildContext = a, e.__reactInternalMemoizedMaskedChildContext = l), t
         }

         function Bl(e, t, n, r) {
            e = t.state, "function" === typeof t.componentWillReceiveProps && t.componentWillReceiveProps(n, r), "function" === typeof t.UNSAFE_componentWillReceiveProps && t.UNSAFE_componentWillReceiveProps(n, r), t.state !== e && Hl.enqueueReplaceState(t, t.state, null)
         }

         function $l(e, t, n, r) {
            var a = e.stateNode;
            a.props = n, a.state = e.memoizedState, a.refs = Al, Pl(e);
            var l = t.contextType;
            "object" === typeof l && null !== l ? a.context = Cl(l) : (l = Ia(t) ? Ta : _a.current, a.context = Pa(e, l)), a.state = e.memoizedState, "function" === typeof (l = t.getDerivedStateFromProps) && (Ul(e, t, l, n), a.state = e.memoizedState), "function" === typeof t.getDerivedStateFromProps || "function" === typeof a.getSnapshotBeforeUpdate || "function" !== typeof a.UNSAFE_componentWillMount && "function" !== typeof a.componentWillMount || (t = a.state, "function" === typeof a.componentWillMount && a.componentWillMount(), "function" === typeof a.UNSAFE_componentWillMount && a.UNSAFE_componentWillMount(), t !== a.state && Hl.enqueueReplaceState(a, a.state, null), Dl(e, n, a, r), a.state = e.memoizedState), "function" === typeof a.componentDidMount && (e.flags |= 4194308)
         }

         function ql(e, t, n) {
            if (null !== (e = n.ref) && "function" !== typeof e && "object" !== typeof e) {
               if (n._owner) {
                  if (n = n._owner) {
                     if (1 !== n.tag) throw Error(l(309));
                     var r = n.stateNode
                  }
                  if (!r) throw Error(l(147, e));
                  var a = r,
                     i = "" + e;
                  return null !== t && null !== t.ref && "function" === typeof t.ref && t.ref._stringRef === i ? t.ref : (t = function (e) {
                     var t = a.refs;
                     t === Al && (t = a.refs = {}), null === e ? delete t[i] : t[i] = e
                  }, t._stringRef = i, t)
               }
               if ("string" !== typeof e) throw Error(l(284));
               if (!n._owner) throw Error(l(290, e))
            }
            return e
         }

         function Ql(e, t) {
            throw e = Object.prototype.toString.call(t), Error(l(31, "[object Object]" === e ? "object with keys {" + Object.keys(t).join(", ") + "}" : e))
         }

         function Kl(e) {
            return (0, e._init)(e._payload)
         }

         function Yl(e) {
            function t(t, n) {
               if (e) {
                  var r = t.deletions;
                  null === r ? (t.deletions = [n], t.flags |= 16) : r.push(n)
               }
            }

            function n(n, r) {
               if (!e) return null;
               for (; null !== r;) t(n, r), r = r.sibling;
               return null
            }

            function r(e, t) {
               for (e = new Map; null !== t;) null !== t.key ? e.set(t.key, t) : e.set(t.index, t), t = t.sibling;
               return e
            }

            function a(e, t) {
               return (e = zs(e, t)).index = 0, e.sibling = null, e
            }

            function i(t, n, r) {
               return t.index = r, e ? null !== (r = t.alternate) ? (r = r.index) < n ? (t.flags |= 2, n) : r : (t.flags |= 2, n) : (t.flags |= 1048576, n)
            }

            function o(t) {
               return e && null === t.alternate && (t.flags |= 2), t
            }

            function u(e, t, n, r) {
               return null === t || 6 !== t.tag ? ((t = Ds(n, e.mode, r)).return = e, t) : ((t = a(t, n)).return = e, t)
            }

            function s(e, t, n, r) {
               var l = n.type;
               return l === k ? d(e, t, n.props.children, r, n.key) : null !== t && (t.elementType === l || "object" === typeof l && null !== l && l.$$typeof === I && Kl(l) === t.type) ? ((r = a(t, n.props)).ref = ql(e, t, n), r.return = e, r) : ((r = Ms(n.type, n.key, n.props, null, e.mode, r)).ref = ql(e, t, n), r.return = e, r)
            }

            function c(e, t, n, r) {
               return null === t || 4 !== t.tag || t.stateNode.containerInfo !== n.containerInfo || t.stateNode.implementation !== n.implementation ? ((t = Fs(n, e.mode, r)).return = e, t) : ((t = a(t, n.children || [])).return = e, t)
            }

            function d(e, t, n, r, l) {
               return null === t || 7 !== t.tag ? ((t = Ls(n, e.mode, r, l)).return = e, t) : ((t = a(t, n)).return = e, t)
            }

            function f(e, t, n) {
               if ("string" === typeof t && "" !== t || "number" === typeof t) return (t = Ds("" + t, e.mode, n)).return = e, t;
               if ("object" === typeof t && null !== t) {
                  switch (t.$$typeof) {
                     case x:
                        return (n = Ms(t.type, t.key, t.props, null, e.mode, n)).ref = ql(e, null, t), n.return = e, n;
                     case S:
                        return (t = Fs(t, e.mode, n)).return = e, t;
                     case I:
                        return f(e, (0, t._init)(t._payload), n)
                  }
                  if (te(t) || L(t)) return (t = Ls(t, e.mode, n, null)).return = e, t;
                  Ql(e, t)
               }
               return null
            }

            function p(e, t, n, r) {
               var a = null !== t ? t.key : null;
               if ("string" === typeof n && "" !== n || "number" === typeof n) return null !== a ? null : u(e, t, "" + n, r);
               if ("object" === typeof n && null !== n) {
                  switch (n.$$typeof) {
                     case x:
                        return n.key === a ? s(e, t, n, r) : null;
                     case S:
                        return n.key === a ? c(e, t, n, r) : null;
                     case I:
                        return p(e, t, (a = n._init)(n._payload), r)
                  }
                  if (te(n) || L(n)) return null !== a ? null : d(e, t, n, r, null);
                  Ql(e, n)
               }
               return null
            }

            function m(e, t, n, r, a) {
               if ("string" === typeof r && "" !== r || "number" === typeof r) return u(t, e = e.get(n) || null, "" + r, a);
               if ("object" === typeof r && null !== r) {
                  switch (r.$$typeof) {
                     case x:
                        return s(t, e = e.get(null === r.key ? n : r.key) || null, r, a);
                     case S:
                        return c(t, e = e.get(null === r.key ? n : r.key) || null, r, a);
                     case I:
                        return m(e, t, n, (0, r._init)(r._payload), a)
                  }
                  if (te(r) || L(r)) return d(t, e = e.get(n) || null, r, a, null);
                  Ql(t, r)
               }
               return null
            }

            function h(a, l, o, u) {
               for (var s = null, c = null, d = l, h = l = 0, v = null; null !== d && h < o.length; h++) {
                  d.index > h ? (v = d, d = null) : v = d.sibling;
                  var g = p(a, d, o[h], u);
                  if (null === g) {
                     null === d && (d = v);
                     break
                  }
                  e && d && null === g.alternate && t(a, d), l = i(g, l, h), null === c ? s = g : c.sibling = g, c = g, d = v
               }
               if (h === o.length) return n(a, d), al && Za(a, h), s;
               if (null === d) {
                  for (; h < o.length; h++) null !== (d = f(a, o[h], u)) && (l = i(d, l, h), null === c ? s = d : c.sibling = d, c = d);
                  return al && Za(a, h), s
               }
               for (d = r(a, d); h < o.length; h++) null !== (v = m(d, a, h, o[h], u)) && (e && null !== v.alternate && d.delete(null === v.key ? h : v.key), l = i(v, l, h), null === c ? s = v : c.sibling = v, c = v);
               return e && d.forEach((function (e) {
                  return t(a, e)
               })), al && Za(a, h), s
            }

            function v(a, o, u, s) {
               var c = L(u);
               if ("function" !== typeof c) throw Error(l(150));
               if (null == (u = c.call(u))) throw Error(l(151));
               for (var d = c = null, h = o, v = o = 0, g = null, y = u.next(); null !== h && !y.done; v++, y = u.next()) {
                  h.index > v ? (g = h, h = null) : g = h.sibling;
                  var b = p(a, h, y.value, s);
                  if (null === b) {
                     null === h && (h = g);
                     break
                  }
                  e && h && null === b.alternate && t(a, h), o = i(b, o, v), null === d ? c = b : d.sibling = b, d = b, h = g
               }
               if (y.done) return n(a, h), al && Za(a, v), c;
               if (null === h) {
                  for (; !y.done; v++, y = u.next()) null !== (y = f(a, y.value, s)) && (o = i(y, o, v), null === d ? c = y : d.sibling = y, d = y);
                  return al && Za(a, v), c
               }
               for (h = r(a, h); !y.done; v++, y = u.next()) null !== (y = m(h, a, v, y.value, s)) && (e && null !== y.alternate && h.delete(null === y.key ? v : y.key), o = i(y, o, v), null === d ? c = y : d.sibling = y, d = y);
               return e && h.forEach((function (e) {
                  return t(a, e)
               })), al && Za(a, v), c
            }
            return function e(r, l, i, u) {
               if ("object" === typeof i && null !== i && i.type === k && null === i.key && (i = i.props.children), "object" === typeof i && null !== i) {
                  switch (i.$$typeof) {
                     case x:
                        e: {
                           for (var s = i.key, c = l; null !== c;) {
                              if (c.key === s) {
                                 if ((s = i.type) === k) {
                                    if (7 === c.tag) {
                                       n(r, c.sibling), (l = a(c, i.props.children)).return = r, r = l;
                                       break e
                                    }
                                 } else if (c.elementType === s || "object" === typeof s && null !== s && s.$$typeof === I && Kl(s) === c.type) {
                                    n(r, c.sibling), (l = a(c, i.props)).ref = ql(r, c, i), l.return = r, r = l;
                                    break e
                                 }
                                 n(r, c);
                                 break
                              }
                              t(r, c), c = c.sibling
                           }
                           i.type === k ? ((l = Ls(i.props.children, r.mode, u, i.key)).return = r, r = l) : ((u = Ms(i.type, i.key, i.props, null, r.mode, u)).ref = ql(r, l, i), u.return = r, r = u)
                        }
                        return o(r);
                     case S:
                        e: {
                           for (c = i.key; null !== l;) {
                              if (l.key === c) {
                                 if (4 === l.tag && l.stateNode.containerInfo === i.containerInfo && l.stateNode.implementation === i.implementation) {
                                    n(r, l.sibling), (l = a(l, i.children || [])).return = r, r = l;
                                    break e
                                 }
                                 n(r, l);
                                 break
                              }
                              t(r, l), l = l.sibling
                           }(l = Fs(i, r.mode, u)).return = r,
                           r = l
                        }
                        return o(r);
                     case I:
                        return e(r, l, (c = i._init)(i._payload), u)
                  }
                  if (te(i)) return h(r, l, i, u);
                  if (L(i)) return v(r, l, i, u);
                  Ql(r, i)
               }
               return "string" === typeof i && "" !== i || "number" === typeof i ? (i = "" + i, null !== l && 6 === l.tag ? (n(r, l.sibling), (l = a(l, i)).return = r, r = l) : (n(r, l), (l = Ds(i, r.mode, u)).return = r, r = l), o(r)) : n(r, l)
            }
         }
         var Xl = Yl(!0),
            Gl = Yl(!1),
            Zl = {},
            Jl = Ea(Zl),
            ei = Ea(Zl),
            ti = Ea(Zl);

         function ni(e) {
            if (e === Zl) throw Error(l(174));
            return e
         }

         function ri(e, t) {
            switch (Oa(ti, t), Oa(ei, e), Oa(Jl, Zl), e = t.nodeType) {
               case 9:
               case 11:
                  t = (t = t.documentElement) ? t.namespaceURI : ue(null, "");
                  break;
               default:
                  t = ue(t = (e = 8 === e ? t.parentNode : t).namespaceURI || null, e = e.tagName)
            }
            Ca(Jl), Oa(Jl, t)
         }

         function ai() {
            Ca(Jl), Ca(ei), Ca(ti)
         }

         function li(e) {
            ni(ti.current);
            var t = ni(Jl.current),
               n = ue(t, e.type);
            t !== n && (Oa(ei, e), Oa(Jl, n))
         }

         function ii(e) {
            ei.current === e && (Ca(Jl), Ca(ei))
         }
         var oi = Ea(0);

         function ui(e) {
            for (var t = e; null !== t;) {
               if (13 === t.tag) {
                  var n = t.memoizedState;
                  if (null !== n && (null === (n = n.dehydrated) || "$?" === n.data || "$!" === n.data)) return t
               } else if (19 === t.tag && void 0 !== t.memoizedProps.revealOrder) {
                  if (0 !== (128 & t.flags)) return t
               } else if (null !== t.child) {
                  t.child.return = t, t = t.child;
                  continue
               }
               if (t === e) break;
               for (; null === t.sibling;) {
                  if (null === t.return || t.return === e) return null;
                  t = t.return
               }
               t.sibling.return = t.return, t = t.sibling
            }
            return null
         }
         var si = [];

         function ci() {
            for (var e = 0; e < si.length; e++) si[e]._workInProgressVersionPrimary = null;
            si.length = 0
         }
         var di = w.ReactCurrentDispatcher,
            fi = w.ReactCurrentBatchConfig,
            pi = 0,
            mi = null,
            hi = null,
            vi = null,
            gi = !1,
            yi = !1,
            bi = 0,
            wi = 0;

         function xi() {
            throw Error(l(321))
         }

         function Si(e, t) {
            if (null === t) return !1;
            for (var n = 0; n < t.length && n < e.length; n++)
               if (!or(e[n], t[n])) return !1;
            return !0
         }

         function ki(e, t, n, r, a, i) {
            if (pi = i, mi = t, t.memoizedState = null, t.updateQueue = null, t.lanes = 0, di.current = null === e || null === e.memoizedState ? io : oo, e = n(r, a), yi) {
               i = 0;
               do {
                  if (yi = !1, bi = 0, 25 <= i) throw Error(l(301));
                  i += 1, vi = hi = null, t.updateQueue = null, di.current = uo, e = n(r, a)
               } while (yi)
            }
            if (di.current = lo, t = null !== hi && null !== hi.next, pi = 0, vi = hi = mi = null, gi = !1, t) throw Error(l(300));
            return e
         }

         function Ei() {
            var e = 0 !== bi;
            return bi = 0, e
         }

         function Ci() {
            var e = {
               memoizedState: null,
               baseState: null,
               baseQueue: null,
               queue: null,
               next: null
            };
            return null === vi ? mi.memoizedState = vi = e : vi = vi.next = e, vi
         }

         function Oi() {
            if (null === hi) {
               var e = mi.alternate;
               e = null !== e ? e.memoizedState : null
            } else e = hi.next;
            var t = null === vi ? mi.memoizedState : vi.next;
            if (null !== t) vi = t, hi = e;
            else {
               if (null === e) throw Error(l(310));
               e = {
                  memoizedState: (hi = e).memoizedState,
                  baseState: hi.baseState,
                  baseQueue: hi.baseQueue,
                  queue: hi.queue,
                  next: null
               }, null === vi ? mi.memoizedState = vi = e : vi = vi.next = e
            }
            return vi
         }

         function Ni(e, t) {
            return "function" === typeof t ? t(e) : t
         }

         function _i(e) {
            var t = Oi(),
               n = t.queue;
            if (null === n) throw Error(l(311));
            n.lastRenderedReducer = e;
            var r = hi,
               a = r.baseQueue,
               i = n.pending;
            if (null !== i) {
               if (null !== a) {
                  var o = a.next;
                  a.next = i.next, i.next = o
               }
               r.baseQueue = a = i, n.pending = null
            }
            if (null !== a) {
               i = a.next, r = r.baseState;
               var u = o = null,
                  s = null,
                  c = i;
               do {
                  var d = c.lane;
                  if ((pi & d) === d) null !== s && (s = s.next = {
                     lane: 0,
                     action: c.action,
                     hasEagerState: c.hasEagerState,
                     eagerState: c.eagerState,
                     next: null
                  }), r = c.hasEagerState ? c.eagerState : e(r, c.action);
                  else {
                     var f = {
                        lane: d,
                        action: c.action,
                        hasEagerState: c.hasEagerState,
                        eagerState: c.eagerState,
                        next: null
                     };
                     null === s ? (u = s = f, o = r) : s = s.next = f, mi.lanes |= d, Ru |= d
                  }
                  c = c.next
               } while (null !== c && c !== i);
               null === s ? o = r : s.next = u, or(r, t.memoizedState) || (wo = !0), t.memoizedState = r, t.baseState = o, t.baseQueue = s, n.lastRenderedState = r
            }
            if (null !== (e = n.interleaved)) {
               a = e;
               do {
                  i = a.lane, mi.lanes |= i, Ru |= i, a = a.next
               } while (a !== e)
            } else null === a && (n.lanes = 0);
            return [t.memoizedState, n.dispatch]
         }

         function ji(e) {
            var t = Oi(),
               n = t.queue;
            if (null === n) throw Error(l(311));
            n.lastRenderedReducer = e;
            var r = n.dispatch,
               a = n.pending,
               i = t.memoizedState;
            if (null !== a) {
               n.pending = null;
               var o = a = a.next;
               do {
                  i = e(i, o.action), o = o.next
               } while (o !== a);
               or(i, t.memoizedState) || (wo = !0), t.memoizedState = i, null === t.baseQueue && (t.baseState = i), n.lastRenderedState = i
            }
            return [i, r]
         }

         function Ti() {}

         function Pi(e, t) {
            var n = mi,
               r = Oi(),
               a = t(),
               i = !or(r.memoizedState, a);
            if (i && (r.memoizedState = a, wo = !0), r = r.queue, Vi(Mi.bind(null, n, r, e), [e]), r.getSnapshot !== t || i || null !== vi && 1 & vi.memoizedState.tag) {
               if (n.flags |= 2048, Fi(9, zi.bind(null, n, r, a, t), void 0, null), null === ju) throw Error(l(349));
               0 !== (30 & pi) || Ii(n, t, a)
            }
            return a
         }

         function Ii(e, t, n) {
            e.flags |= 16384, e = {
               getSnapshot: t,
               value: n
            }, null === (t = mi.updateQueue) ? (t = {
               lastEffect: null,
               stores: null
            }, mi.updateQueue = t, t.stores = [e]) : null === (n = t.stores) ? t.stores = [e] : n.push(e)
         }

         function zi(e, t, n, r) {
            t.value = n, t.getSnapshot = r, Li(t) && Ri(e)
         }

         function Mi(e, t, n) {
            return n((function () {
               Li(t) && Ri(e)
            }))
         }

         function Li(e) {
            var t = e.getSnapshot;
            e = e.value;
            try {
               var n = t();
               return !or(e, n)
            } catch (r) {
               return !0
            }
         }

         function Ri(e) {
            var t = jl(e, 1);
            null !== t && ns(t, e, 1, -1)
         }

         function Di(e) {
            var t = Ci();
            return "function" === typeof e && (e = e()), t.memoizedState = t.baseState = e, e = {
               pending: null,
               interleaved: null,
               lanes: 0,
               dispatch: null,
               lastRenderedReducer: Ni,
               lastRenderedState: e
            }, t.queue = e, e = e.dispatch = to.bind(null, mi, e), [t.memoizedState, e]
         }

         function Fi(e, t, n, r) {
            return e = {
               tag: e,
               create: t,
               destroy: n,
               deps: r,
               next: null
            }, null === (t = mi.updateQueue) ? (t = {
               lastEffect: null,
               stores: null
            }, mi.updateQueue = t, t.lastEffect = e.next = e) : null === (n = t.lastEffect) ? t.lastEffect = e.next = e : (r = n.next, n.next = e, e.next = r, t.lastEffect = e), e
         }

         function Ai() {
            return Oi().memoizedState
         }

         function Ui(e, t, n, r) {
            var a = Ci();
            mi.flags |= e, a.memoizedState = Fi(1 | t, n, void 0, void 0 === r ? null : r)
         }

         function Hi(e, t, n, r) {
            var a = Oi();
            r = void 0 === r ? null : r;
            var l = void 0;
            if (null !== hi) {
               var i = hi.memoizedState;
               if (l = i.destroy, null !== r && Si(r, i.deps)) return void(a.memoizedState = Fi(t, n, l, r))
            }
            mi.flags |= e, a.memoizedState = Fi(1 | t, n, l, r)
         }

         function Wi(e, t) {
            return Ui(8390656, 8, e, t)
         }

         function Vi(e, t) {
            return Hi(2048, 8, e, t)
         }

         function Bi(e, t) {
            return Hi(4, 2, e, t)
         }

         function $i(e, t) {
            return Hi(4, 4, e, t)
         }

         function qi(e, t) {
            return "function" === typeof t ? (e = e(), t(e), function () {
               t(null)
            }) : null !== t && void 0 !== t ? (e = e(), t.current = e, function () {
               t.current = null
            }) : void 0
         }

         function Qi(e, t, n) {
            return n = null !== n && void 0 !== n ? n.concat([e]) : null, Hi(4, 4, qi.bind(null, t, e), n)
         }

         function Ki() {}

         function Yi(e, t) {
            var n = Oi();
            t = void 0 === t ? null : t;
            var r = n.memoizedState;
            return null !== r && null !== t && Si(t, r[1]) ? r[0] : (n.memoizedState = [e, t], e)
         }

         function Xi(e, t) {
            var n = Oi();
            t = void 0 === t ? null : t;
            var r = n.memoizedState;
            return null !== r && null !== t && Si(t, r[1]) ? r[0] : (e = e(), n.memoizedState = [e, t], e)
         }

         function Gi(e, t, n) {
            return 0 === (21 & pi) ? (e.baseState && (e.baseState = !1, wo = !0), e.memoizedState = n) : (or(n, t) || (n = ht(), mi.lanes |= n, Ru |= n, e.baseState = !0), t)
         }

         function Zi(e, t) {
            var n = bt;
            bt = 0 !== n && 4 > n ? n : 4, e(!0);
            var r = fi.transition;
            fi.transition = {};
            try {
               e(!1), t()
            } finally {
               bt = n, fi.transition = r
            }
         }

         function Ji() {
            return Oi().memoizedState
         }

         function eo(e, t, n) {
            var r = ts(e);
            if (n = {
                  lane: r,
                  action: n,
                  hasEagerState: !1,
                  eagerState: null,
                  next: null
               }, no(e)) ro(t, n);
            else if (null !== (n = _l(e, t, n, r))) {
               ns(n, e, r, es()), ao(n, t, r)
            }
         }

         function to(e, t, n) {
            var r = ts(e),
               a = {
                  lane: r,
                  action: n,
                  hasEagerState: !1,
                  eagerState: null,
                  next: null
               };
            if (no(e)) ro(t, a);
            else {
               var l = e.alternate;
               if (0 === e.lanes && (null === l || 0 === l.lanes) && null !== (l = t.lastRenderedReducer)) try {
                  var i = t.lastRenderedState,
                     o = l(i, n);
                  if (a.hasEagerState = !0, a.eagerState = o, or(o, i)) {
                     var u = t.interleaved;
                     return null === u ? (a.next = a, Nl(t)) : (a.next = u.next, u.next = a), void(t.interleaved = a)
                  }
               } catch (s) {}
               null !== (n = _l(e, t, a, r)) && (ns(n, e, r, a = es()), ao(n, t, r))
            }
         }

         function no(e) {
            var t = e.alternate;
            return e === mi || null !== t && t === mi
         }

         function ro(e, t) {
            yi = gi = !0;
            var n = e.pending;
            null === n ? t.next = t : (t.next = n.next, n.next = t), e.pending = t
         }

         function ao(e, t, n) {
            if (0 !== (4194240 & n)) {
               var r = t.lanes;
               n |= r &= e.pendingLanes, t.lanes = n, yt(e, n)
            }
         }
         var lo = {
               readContext: Cl,
               useCallback: xi,
               useContext: xi,
               useEffect: xi,
               useImperativeHandle: xi,
               useInsertionEffect: xi,
               useLayoutEffect: xi,
               useMemo: xi,
               useReducer: xi,
               useRef: xi,
               useState: xi,
               useDebugValue: xi,
               useDeferredValue: xi,
               useTransition: xi,
               useMutableSource: xi,
               useSyncExternalStore: xi,
               useId: xi,
               unstable_isNewReconciler: !1
            },
            io = {
               readContext: Cl,
               useCallback: function (e, t) {
                  return Ci().memoizedState = [e, void 0 === t ? null : t], e
               },
               useContext: Cl,
               useEffect: Wi,
               useImperativeHandle: function (e, t, n) {
                  return n = null !== n && void 0 !== n ? n.concat([e]) : null, Ui(4194308, 4, qi.bind(null, t, e), n)
               },
               useLayoutEffect: function (e, t) {
                  return Ui(4194308, 4, e, t)
               },
               useInsertionEffect: function (e, t) {
                  return Ui(4, 2, e, t)
               },
               useMemo: function (e, t) {
                  var n = Ci();
                  return t = void 0 === t ? null : t, e = e(), n.memoizedState = [e, t], e
               },
               useReducer: function (e, t, n) {
                  var r = Ci();
                  return t = void 0 !== n ? n(t) : t, r.memoizedState = r.baseState = t, e = {
                     pending: null,
                     interleaved: null,
                     lanes: 0,
                     dispatch: null,
                     lastRenderedReducer: e,
                     lastRenderedState: t
                  }, r.queue = e, e = e.dispatch = eo.bind(null, mi, e), [r.memoizedState, e]
               },
               useRef: function (e) {
                  return e = {
                     current: e
                  }, Ci().memoizedState = e
               },
               useState: Di,
               useDebugValue: Ki,
               useDeferredValue: function (e) {
                  return Ci().memoizedState = e
               },
               useTransition: function () {
                  var e = Di(!1),
                     t = e[0];
                  return e = Zi.bind(null, e[1]), Ci().memoizedState = e, [t, e]
               },
               useMutableSource: function () {},
               useSyncExternalStore: function (e, t, n) {
                  var r = mi,
                     a = Ci();
                  if (al) {
                     if (void 0 === n) throw Error(l(407));
                     n = n()
                  } else {
                     if (n = t(), null === ju) throw Error(l(349));
                     0 !== (30 & pi) || Ii(r, t, n)
                  }
                  a.memoizedState = n;
                  var i = {
                     value: n,
                     getSnapshot: t
                  };
                  return a.queue = i, Wi(Mi.bind(null, r, i, e), [e]), r.flags |= 2048, Fi(9, zi.bind(null, r, i, n, t), void 0, null), n
               },
               useId: function () {
                  var e = Ci(),
                     t = ju.identifierPrefix;
                  if (al) {
                     var n = Ga;
                     t = ":" + t + "R" + (n = (Xa & ~(1 << 32 - it(Xa) - 1)).toString(32) + n), 0 < (n = bi++) && (t += "H" + n.toString(32)), t += ":"
                  } else t = ":" + t + "r" + (n = wi++).toString(32) + ":";
                  return e.memoizedState = t
               },
               unstable_isNewReconciler: !1
            },
            oo = {
               readContext: Cl,
               useCallback: Yi,
               useContext: Cl,
               useEffect: Vi,
               useImperativeHandle: Qi,
               useInsertionEffect: Bi,
               useLayoutEffect: $i,
               useMemo: Xi,
               useReducer: _i,
               useRef: Ai,
               useState: function () {
                  return _i(Ni)
               },
               useDebugValue: Ki,
               useDeferredValue: function (e) {
                  return Gi(Oi(), hi.memoizedState, e)
               },
               useTransition: function () {
                  return [_i(Ni)[0], Oi().memoizedState]
               },
               useMutableSource: Ti,
               useSyncExternalStore: Pi,
               useId: Ji,
               unstable_isNewReconciler: !1
            },
            uo = {
               readContext: Cl,
               useCallback: Yi,
               useContext: Cl,
               useEffect: Vi,
               useImperativeHandle: Qi,
               useInsertionEffect: Bi,
               useLayoutEffect: $i,
               useMemo: Xi,
               useReducer: ji,
               useRef: Ai,
               useState: function () {
                  return ji(Ni)
               },
               useDebugValue: Ki,
               useDeferredValue: function (e) {
                  var t = Oi();
                  return null === hi ? t.memoizedState = e : Gi(t, hi.memoizedState, e)
               },
               useTransition: function () {
                  return [ji(Ni)[0], Oi().memoizedState]
               },
               useMutableSource: Ti,
               useSyncExternalStore: Pi,
               useId: Ji,
               unstable_isNewReconciler: !1
            };

         function so(e, t) {
            try {
               var n = "",
                  r = t;
               do {
                  n += H(r), r = r.return
               } while (r);
               var a = n
            } catch (l) {
               a = "\nError generating stack: " + l.message + "\n" + l.stack
            }
            return {
               value: e,
               source: t,
               stack: a,
               digest: null
            }
         }

         function co(e, t, n) {
            return {
               value: e,
               source: null,
               stack: null != n ? n : null,
               digest: null != t ? t : null
            }
         }

         function fo(e, t) {
            try {
               console.error(t.value)
            } catch (n) {
               setTimeout((function () {
                  throw n
               }))
            }
         }
         var po = "function" === typeof WeakMap ? WeakMap : Map;

         function mo(e, t, n) {
            (n = zl(-1, n)).tag = 3, n.payload = {
               element: null
            };
            var r = t.value;
            return n.callback = function () {
               Bu || (Bu = !0, $u = r), fo(0, t)
            }, n
         }

         function ho(e, t, n) {
            (n = zl(-1, n)).tag = 3;
            var r = e.type.getDerivedStateFromError;
            if ("function" === typeof r) {
               var a = t.value;
               n.payload = function () {
                  return r(a)
               }, n.callback = function () {
                  fo(0, t)
               }
            }
            var l = e.stateNode;
            return null !== l && "function" === typeof l.componentDidCatch && (n.callback = function () {
               fo(0, t), "function" !== typeof r && (null === qu ? qu = new Set([this]) : qu.add(this));
               var e = t.stack;
               this.componentDidCatch(t.value, {
                  componentStack: null !== e ? e : ""
               })
            }), n
         }

         function vo(e, t, n) {
            var r = e.pingCache;
            if (null === r) {
               r = e.pingCache = new po;
               var a = new Set;
               r.set(t, a)
            } else void 0 === (a = r.get(t)) && (a = new Set, r.set(t, a));
            a.has(n) || (a.add(n), e = Cs.bind(null, e, t, n), t.then(e, e))
         }

         function go(e) {
            do {
               var t;
               if ((t = 13 === e.tag) && (t = null === (t = e.memoizedState) || null !== t.dehydrated), t) return e;
               e = e.return
            } while (null !== e);
            return null
         }

         function yo(e, t, n, r, a) {
            return 0 === (1 & e.mode) ? (e === t ? e.flags |= 65536 : (e.flags |= 128, n.flags |= 131072, n.flags &= -52805, 1 === n.tag && (null === n.alternate ? n.tag = 17 : ((t = zl(-1, 1)).tag = 2, Ml(n, t, 1))), n.lanes |= 1), e) : (e.flags |= 65536, e.lanes = a, e)
         }
         var bo = w.ReactCurrentOwner,
            wo = !1;

         function xo(e, t, n, r) {
            t.child = null === e ? Gl(t, null, n, r) : Xl(t, e.child, n, r)
         }

         function So(e, t, n, r, a) {
            n = n.render;
            var l = t.ref;
            return El(t, a), r = ki(e, t, n, r, l, a), n = Ei(), null === e || wo ? (al && n && el(t), t.flags |= 1, xo(e, t, r, a), t.child) : (t.updateQueue = e.updateQueue, t.flags &= -2053, e.lanes &= ~a, Bo(e, t, a))
         }

         function ko(e, t, n, r, a) {
            if (null === e) {
               var l = n.type;
               return "function" !== typeof l || Is(l) || void 0 !== l.defaultProps || null !== n.compare || void 0 !== n.defaultProps ? ((e = Ms(n.type, null, r, t, t.mode, a)).ref = t.ref, e.return = t, t.child = e) : (t.tag = 15, t.type = l, Eo(e, t, l, r, a))
            }
            if (l = e.child, 0 === (e.lanes & a)) {
               var i = l.memoizedProps;
               if ((n = null !== (n = n.compare) ? n : ur)(i, r) && e.ref === t.ref) return Bo(e, t, a)
            }
            return t.flags |= 1, (e = zs(l, r)).ref = t.ref, e.return = t, t.child = e
         }

         function Eo(e, t, n, r, a) {
            if (null !== e) {
               var l = e.memoizedProps;
               if (ur(l, r) && e.ref === t.ref) {
                  if (wo = !1, t.pendingProps = r = l, 0 === (e.lanes & a)) return t.lanes = e.lanes, Bo(e, t, a);
                  0 !== (131072 & e.flags) && (wo = !0)
               }
            }
            return No(e, t, n, r, a)
         }

         function Co(e, t, n) {
            var r = t.pendingProps,
               a = r.children,
               l = null !== e ? e.memoizedState : null;
            if ("hidden" === r.mode)
               if (0 === (1 & t.mode)) t.memoizedState = {
                  baseLanes: 0,
                  cachePool: null,
                  transitions: null
               }, Oa(zu, Iu), Iu |= n;
               else {
                  if (0 === (1073741824 & n)) return e = null !== l ? l.baseLanes | n : n, t.lanes = t.childLanes = 1073741824, t.memoizedState = {
                     baseLanes: e,
                     cachePool: null,
                     transitions: null
                  }, t.updateQueue = null, Oa(zu, Iu), Iu |= e, null;
                  t.memoizedState = {
                     baseLanes: 0,
                     cachePool: null,
                     transitions: null
                  }, r = null !== l ? l.baseLanes : n, Oa(zu, Iu), Iu |= r
               }
            else null !== l ? (r = l.baseLanes | n, t.memoizedState = null) : r = n, Oa(zu, Iu), Iu |= r;
            return xo(e, t, a, n), t.child
         }

         function Oo(e, t) {
            var n = t.ref;
            (null === e && null !== n || null !== e && e.ref !== n) && (t.flags |= 512, t.flags |= 2097152)
         }

         function No(e, t, n, r, a) {
            var l = Ia(n) ? Ta : _a.current;
            return l = Pa(t, l), El(t, a), n = ki(e, t, n, r, l, a), r = Ei(), null === e || wo ? (al && r && el(t), t.flags |= 1, xo(e, t, n, a), t.child) : (t.updateQueue = e.updateQueue, t.flags &= -2053, e.lanes &= ~a, Bo(e, t, a))
         }

         function _o(e, t, n, r, a) {
            if (Ia(n)) {
               var l = !0;
               Ra(t)
            } else l = !1;
            if (El(t, a), null === t.stateNode) Vo(e, t), Vl(t, n, r), $l(t, n, r, a), r = !0;
            else if (null === e) {
               var i = t.stateNode,
                  o = t.memoizedProps;
               i.props = o;
               var u = i.context,
                  s = n.contextType;
               "object" === typeof s && null !== s ? s = Cl(s) : s = Pa(t, s = Ia(n) ? Ta : _a.current);
               var c = n.getDerivedStateFromProps,
                  d = "function" === typeof c || "function" === typeof i.getSnapshotBeforeUpdate;
               d || "function" !== typeof i.UNSAFE_componentWillReceiveProps && "function" !== typeof i.componentWillReceiveProps || (o !== r || u !== s) && Bl(t, i, r, s), Tl = !1;
               var f = t.memoizedState;
               i.state = f, Dl(t, r, i, a), u = t.memoizedState, o !== r || f !== u || ja.current || Tl ? ("function" === typeof c && (Ul(t, n, c, r), u = t.memoizedState), (o = Tl || Wl(t, n, o, r, f, u, s)) ? (d || "function" !== typeof i.UNSAFE_componentWillMount && "function" !== typeof i.componentWillMount || ("function" === typeof i.componentWillMount && i.componentWillMount(), "function" === typeof i.UNSAFE_componentWillMount && i.UNSAFE_componentWillMount()), "function" === typeof i.componentDidMount && (t.flags |= 4194308)) : ("function" === typeof i.componentDidMount && (t.flags |= 4194308), t.memoizedProps = r, t.memoizedState = u), i.props = r, i.state = u, i.context = s, r = o) : ("function" === typeof i.componentDidMount && (t.flags |= 4194308), r = !1)
            } else {
               i = t.stateNode, Il(e, t), o = t.memoizedProps, s = t.type === t.elementType ? o : vl(t.type, o), i.props = s, d = t.pendingProps, f = i.context, "object" === typeof (u = n.contextType) && null !== u ? u = Cl(u) : u = Pa(t, u = Ia(n) ? Ta : _a.current);
               var p = n.getDerivedStateFromProps;
               (c = "function" === typeof p || "function" === typeof i.getSnapshotBeforeUpdate) || "function" !== typeof i.UNSAFE_componentWillReceiveProps && "function" !== typeof i.componentWillReceiveProps || (o !== d || f !== u) && Bl(t, i, r, u), Tl = !1, f = t.memoizedState, i.state = f, Dl(t, r, i, a);
               var m = t.memoizedState;
               o !== d || f !== m || ja.current || Tl ? ("function" === typeof p && (Ul(t, n, p, r), m = t.memoizedState), (s = Tl || Wl(t, n, s, r, f, m, u) || !1) ? (c || "function" !== typeof i.UNSAFE_componentWillUpdate && "function" !== typeof i.componentWillUpdate || ("function" === typeof i.componentWillUpdate && i.componentWillUpdate(r, m, u), "function" === typeof i.UNSAFE_componentWillUpdate && i.UNSAFE_componentWillUpdate(r, m, u)), "function" === typeof i.componentDidUpdate && (t.flags |= 4), "function" === typeof i.getSnapshotBeforeUpdate && (t.flags |= 1024)) : ("function" !== typeof i.componentDidUpdate || o === e.memoizedProps && f === e.memoizedState || (t.flags |= 4), "function" !== typeof i.getSnapshotBeforeUpdate || o === e.memoizedProps && f === e.memoizedState || (t.flags |= 1024), t.memoizedProps = r, t.memoizedState = m), i.props = r, i.state = m, i.context = u, r = s) : ("function" !== typeof i.componentDidUpdate || o === e.memoizedProps && f === e.memoizedState || (t.flags |= 4), "function" !== typeof i.getSnapshotBeforeUpdate || o === e.memoizedProps && f === e.memoizedState || (t.flags |= 1024), r = !1)
            }
            return jo(e, t, n, r, l, a)
         }

         function jo(e, t, n, r, a, l) {
            Oo(e, t);
            var i = 0 !== (128 & t.flags);
            if (!r && !i) return a && Da(t, n, !1), Bo(e, t, l);
            r = t.stateNode, bo.current = t;
            var o = i && "function" !== typeof n.getDerivedStateFromError ? null : r.render();
            return t.flags |= 1, null !== e && i ? (t.child = Xl(t, e.child, null, l), t.child = Xl(t, null, o, l)) : xo(e, t, o, l), t.memoizedState = r.state, a && Da(t, n, !0), t.child
         }

         function To(e) {
            var t = e.stateNode;
            t.pendingContext ? Ma(0, t.pendingContext, t.pendingContext !== t.context) : t.context && Ma(0, t.context, !1), ri(e, t.containerInfo)
         }

         function Po(e, t, n, r, a) {
            return pl(), ml(a), t.flags |= 256, xo(e, t, n, r), t.child
         }
         var Io, zo, Mo, Lo = {
            dehydrated: null,
            treeContext: null,
            retryLane: 0
         };

         function Ro(e) {
            return {
               baseLanes: e,
               cachePool: null,
               transitions: null
            }
         }

         function Do(e, t, n) {
            var r, a = t.pendingProps,
               i = oi.current,
               o = !1,
               u = 0 !== (128 & t.flags);
            if ((r = u) || (r = (null === e || null !== e.memoizedState) && 0 !== (2 & i)), r ? (o = !0, t.flags &= -129) : null !== e && null === e.memoizedState || (i |= 1), Oa(oi, 1 & i), null === e) return sl(t), null !== (e = t.memoizedState) && null !== (e = e.dehydrated) ? (0 === (1 & t.mode) ? t.lanes = 1 : "$!" === e.data ? t.lanes = 8 : t.lanes = 1073741824, null) : (u = a.children, e = a.fallback, o ? (a = t.mode, o = t.child, u = {
               mode: "hidden",
               children: u
            }, 0 === (1 & a) && null !== o ? (o.childLanes = 0, o.pendingProps = u) : o = Rs(u, a, 0, null), e = Ls(e, a, n, null), o.return = t, e.return = t, o.sibling = e, t.child = o, t.child.memoizedState = Ro(n), t.memoizedState = Lo, e) : Fo(t, u));
            if (null !== (i = e.memoizedState) && null !== (r = i.dehydrated)) return function (e, t, n, r, a, i, o) {
               if (n) return 256 & t.flags ? (t.flags &= -257, Ao(e, t, o, r = co(Error(l(422))))) : null !== t.memoizedState ? (t.child = e.child, t.flags |= 128, null) : (i = r.fallback, a = t.mode, r = Rs({
                  mode: "visible",
                  children: r.children
               }, a, 0, null), (i = Ls(i, a, o, null)).flags |= 2, r.return = t, i.return = t, r.sibling = i, t.child = r, 0 !== (1 & t.mode) && Xl(t, e.child, null, o), t.child.memoizedState = Ro(o), t.memoizedState = Lo, i);
               if (0 === (1 & t.mode)) return Ao(e, t, o, null);
               if ("$!" === a.data) {
                  if (r = a.nextSibling && a.nextSibling.dataset) var u = r.dgst;
                  return r = u, Ao(e, t, o, r = co(i = Error(l(419)), r, void 0))
               }
               if (u = 0 !== (o & e.childLanes), wo || u) {
                  if (null !== (r = ju)) {
                     switch (o & -o) {
                        case 4:
                           a = 2;
                           break;
                        case 16:
                           a = 8;
                           break;
                        case 64:
                        case 128:
                        case 256:
                        case 512:
                        case 1024:
                        case 2048:
                        case 4096:
                        case 8192:
                        case 16384:
                        case 32768:
                        case 65536:
                        case 131072:
                        case 262144:
                        case 524288:
                        case 1048576:
                        case 2097152:
                        case 4194304:
                        case 8388608:
                        case 16777216:
                        case 33554432:
                        case 67108864:
                           a = 32;
                           break;
                        case 536870912:
                           a = 268435456;
                           break;
                        default:
                           a = 0
                     }
                     0 !== (a = 0 !== (a & (r.suspendedLanes | o)) ? 0 : a) && a !== i.retryLane && (i.retryLane = a, jl(e, a), ns(r, e, a, -1))
                  }
                  return hs(), Ao(e, t, o, r = co(Error(l(421))))
               }
               return "$?" === a.data ? (t.flags |= 128, t.child = e.child, t = Ns.bind(null, e), a._reactRetry = t, null) : (e = i.treeContext, rl = sa(a.nextSibling), nl = t, al = !0, ll = null, null !== e && (Qa[Ka++] = Xa, Qa[Ka++] = Ga, Qa[Ka++] = Ya, Xa = e.id, Ga = e.overflow, Ya = t), (t = Fo(t, r.children)).flags |= 4096, t)
            }(e, t, u, a, r, i, n);
            if (o) {
               o = a.fallback, u = t.mode, r = (i = e.child).sibling;
               var s = {
                  mode: "hidden",
                  children: a.children
               };
               return 0 === (1 & u) && t.child !== i ? ((a = t.child).childLanes = 0, a.pendingProps = s, t.deletions = null) : (a = zs(i, s)).subtreeFlags = 14680064 & i.subtreeFlags, null !== r ? o = zs(r, o) : (o = Ls(o, u, n, null)).flags |= 2, o.return = t, a.return = t, a.sibling = o, t.child = a, a = o, o = t.child, u = null === (u = e.child.memoizedState) ? Ro(n) : {
                  baseLanes: u.baseLanes | n,
                  cachePool: null,
                  transitions: u.transitions
               }, o.memoizedState = u, o.childLanes = e.childLanes & ~n, t.memoizedState = Lo, a
            }
            return e = (o = e.child).sibling, a = zs(o, {
               mode: "visible",
               children: a.children
            }), 0 === (1 & t.mode) && (a.lanes = n), a.return = t, a.sibling = null, null !== e && (null === (n = t.deletions) ? (t.deletions = [e], t.flags |= 16) : n.push(e)), t.child = a, t.memoizedState = null, a
         }

         function Fo(e, t) {
            return (t = Rs({
               mode: "visible",
               children: t
            }, e.mode, 0, null)).return = e, e.child = t
         }

         function Ao(e, t, n, r) {
            return null !== r && ml(r), Xl(t, e.child, null, n), (e = Fo(t, t.pendingProps.children)).flags |= 2, t.memoizedState = null, e
         }

         function Uo(e, t, n) {
            e.lanes |= t;
            var r = e.alternate;
            null !== r && (r.lanes |= t), kl(e.return, t, n)
         }

         function Ho(e, t, n, r, a) {
            var l = e.memoizedState;
            null === l ? e.memoizedState = {
               isBackwards: t,
               rendering: null,
               renderingStartTime: 0,
               last: r,
               tail: n,
               tailMode: a
            } : (l.isBackwards = t, l.rendering = null, l.renderingStartTime = 0, l.last = r, l.tail = n, l.tailMode = a)
         }

         function Wo(e, t, n) {
            var r = t.pendingProps,
               a = r.revealOrder,
               l = r.tail;
            if (xo(e, t, r.children, n), 0 !== (2 & (r = oi.current))) r = 1 & r | 2, t.flags |= 128;
            else {
               if (null !== e && 0 !== (128 & e.flags)) e: for (e = t.child; null !== e;) {
                  if (13 === e.tag) null !== e.memoizedState && Uo(e, n, t);
                  else if (19 === e.tag) Uo(e, n, t);
                  else if (null !== e.child) {
                     e.child.return = e, e = e.child;
                     continue
                  }
                  if (e === t) break e;
                  for (; null === e.sibling;) {
                     if (null === e.return || e.return === t) break e;
                     e = e.return
                  }
                  e.sibling.return = e.return, e = e.sibling
               }
               r &= 1
            }
            if (Oa(oi, r), 0 === (1 & t.mode)) t.memoizedState = null;
            else switch (a) {
               case "forwards":
                  for (n = t.child, a = null; null !== n;) null !== (e = n.alternate) && null === ui(e) && (a = n), n = n.sibling;
                  null === (n = a) ? (a = t.child, t.child = null) : (a = n.sibling, n.sibling = null), Ho(t, !1, a, n, l);
                  break;
               case "backwards":
                  for (n = null, a = t.child, t.child = null; null !== a;) {
                     if (null !== (e = a.alternate) && null === ui(e)) {
                        t.child = a;
                        break
                     }
                     e = a.sibling, a.sibling = n, n = a, a = e
                  }
                  Ho(t, !0, n, null, l);
                  break;
               case "together":
                  Ho(t, !1, null, null, void 0);
                  break;
               default:
                  t.memoizedState = null
            }
            return t.child
         }

         function Vo(e, t) {
            0 === (1 & t.mode) && null !== e && (e.alternate = null, t.alternate = null, t.flags |= 2)
         }

         function Bo(e, t, n) {
            if (null !== e && (t.dependencies = e.dependencies), Ru |= t.lanes, 0 === (n & t.childLanes)) return null;
            if (null !== e && t.child !== e.child) throw Error(l(153));
            if (null !== t.child) {
               for (n = zs(e = t.child, e.pendingProps), t.child = n, n.return = t; null !== e.sibling;) e = e.sibling, (n = n.sibling = zs(e, e.pendingProps)).return = t;
               n.sibling = null
            }
            return t.child
         }

         function $o(e, t) {
            if (!al) switch (e.tailMode) {
               case "hidden":
                  t = e.tail;
                  for (var n = null; null !== t;) null !== t.alternate && (n = t), t = t.sibling;
                  null === n ? e.tail = null : n.sibling = null;
                  break;
               case "collapsed":
                  n = e.tail;
                  for (var r = null; null !== n;) null !== n.alternate && (r = n), n = n.sibling;
                  null === r ? t || null === e.tail ? e.tail = null : e.tail.sibling = null : r.sibling = null
            }
         }

         function qo(e) {
            var t = null !== e.alternate && e.alternate.child === e.child,
               n = 0,
               r = 0;
            if (t)
               for (var a = e.child; null !== a;) n |= a.lanes | a.childLanes, r |= 14680064 & a.subtreeFlags, r |= 14680064 & a.flags, a.return = e, a = a.sibling;
            else
               for (a = e.child; null !== a;) n |= a.lanes | a.childLanes, r |= a.subtreeFlags, r |= a.flags, a.return = e, a = a.sibling;
            return e.subtreeFlags |= r, e.childLanes = n, t
         }

         function Qo(e, t, n) {
            var r = t.pendingProps;
            switch (tl(t), t.tag) {
               case 2:
               case 16:
               case 15:
               case 0:
               case 11:
               case 7:
               case 8:
               case 12:
               case 9:
               case 14:
                  return qo(t), null;
               case 1:
               case 17:
                  return Ia(t.type) && za(), qo(t), null;
               case 3:
                  return r = t.stateNode, ai(), Ca(ja), Ca(_a), ci(), r.pendingContext && (r.context = r.pendingContext, r.pendingContext = null), null !== e && null !== e.child || (dl(t) ? t.flags |= 4 : null === e || e.memoizedState.isDehydrated && 0 === (256 & t.flags) || (t.flags |= 1024, null !== ll && (is(ll), ll = null))), qo(t), null;
               case 5:
                  ii(t);
                  var a = ni(ti.current);
                  if (n = t.type, null !== e && null != t.stateNode) zo(e, t, n, r), e.ref !== t.ref && (t.flags |= 512, t.flags |= 2097152);
                  else {
                     if (!r) {
                        if (null === t.stateNode) throw Error(l(166));
                        return qo(t), null
                     }
                     if (e = ni(Jl.current), dl(t)) {
                        r = t.stateNode, n = t.type;
                        var i = t.memoizedProps;
                        switch (r[fa] = t, r[pa] = i, e = 0 !== (1 & t.mode), n) {
                           case "dialog":
                              Ar("cancel", r), Ar("close", r);
                              break;
                           case "iframe":
                           case "object":
                           case "embed":
                              Ar("load", r);
                              break;
                           case "video":
                           case "audio":
                              for (a = 0; a < Lr.length; a++) Ar(Lr[a], r);
                              break;
                           case "source":
                              Ar("error", r);
                              break;
                           case "img":
                           case "image":
                           case "link":
                              Ar("error", r), Ar("load", r);
                              break;
                           case "details":
                              Ar("toggle", r);
                              break;
                           case "input":
                              X(r, i), Ar("invalid", r);
                              break;
                           case "select":
                              r._wrapperState = {
                                 wasMultiple: !!i.multiple
                              }, Ar("invalid", r);
                              break;
                           case "textarea":
                              ae(r, i), Ar("invalid", r)
                        }
                        for (var u in ye(n, i), a = null, i)
                           if (i.hasOwnProperty(u)) {
                              var s = i[u];
                              "children" === u ? "string" === typeof s ? r.textContent !== s && (!0 !== i.suppressHydrationWarning && Zr(r.textContent, s, e), a = ["children", s]) : "number" === typeof s && r.textContent !== "" + s && (!0 !== i.suppressHydrationWarning && Zr(r.textContent, s, e), a = ["children", "" + s]) : o.hasOwnProperty(u) && null != s && "onScroll" === u && Ar("scroll", r)
                           } switch (n) {
                           case "input":
                              q(r), J(r, i, !0);
                              break;
                           case "textarea":
                              q(r), ie(r);
                              break;
                           case "select":
                           case "option":
                              break;
                           default:
                              "function" === typeof i.onClick && (r.onclick = Jr)
                        }
                        r = a, t.updateQueue = r, null !== r && (t.flags |= 4)
                     } else {
                        u = 9 === a.nodeType ? a : a.ownerDocument, "http://www.w3.org/1999/xhtml" === e && (e = oe(n)), "http://www.w3.org/1999/xhtml" === e ? "script" === n ? ((e = u.createElement("div")).innerHTML = "<script><\/script>", e = e.removeChild(e.firstChild)) : "string" === typeof r.is ? e = u.createElement(n, {
                           is: r.is
                        }) : (e = u.createElement(n), "select" === n && (u = e, r.multiple ? u.multiple = !0 : r.size && (u.size = r.size))) : e = u.createElementNS(e, n), e[fa] = t, e[pa] = r, Io(e, t), t.stateNode = e;
                        e: {
                           switch (u = be(n, r), n) {
                              case "dialog":
                                 Ar("cancel", e), Ar("close", e), a = r;
                                 break;
                              case "iframe":
                              case "object":
                              case "embed":
                                 Ar("load", e), a = r;
                                 break;
                              case "video":
                              case "audio":
                                 for (a = 0; a < Lr.length; a++) Ar(Lr[a], e);
                                 a = r;
                                 break;
                              case "source":
                                 Ar("error", e), a = r;
                                 break;
                              case "img":
                              case "image":
                              case "link":
                                 Ar("error", e), Ar("load", e), a = r;
                                 break;
                              case "details":
                                 Ar("toggle", e), a = r;
                                 break;
                              case "input":
                                 X(e, r), a = Y(e, r), Ar("invalid", e);
                                 break;
                              case "option":
                              default:
                                 a = r;
                                 break;
                              case "select":
                                 e._wrapperState = {
                                    wasMultiple: !!r.multiple
                                 }, a = D({}, r, {
                                    value: void 0
                                 }), Ar("invalid", e);
                                 break;
                              case "textarea":
                                 ae(e, r), a = re(e, r), Ar("invalid", e)
                           }
                           for (i in ye(n, a), s = a)
                              if (s.hasOwnProperty(i)) {
                                 var c = s[i];
                                 "style" === i ? ve(e, c) : "dangerouslySetInnerHTML" === i ? null != (c = c ? c.__html : void 0) && de(e, c) : "children" === i ? "string" === typeof c ? ("textarea" !== n || "" !== c) && fe(e, c) : "number" === typeof c && fe(e, "" + c) : "suppressContentEditableWarning" !== i && "suppressHydrationWarning" !== i && "autoFocus" !== i && (o.hasOwnProperty(i) ? null != c && "onScroll" === i && Ar("scroll", e) : null != c && b(e, i, c, u))
                              } switch (n) {
                              case "input":
                                 q(e), J(e, r, !1);
                                 break;
                              case "textarea":
                                 q(e), ie(e);
                                 break;
                              case "option":
                                 null != r.value && e.setAttribute("value", "" + B(r.value));
                                 break;
                              case "select":
                                 e.multiple = !!r.multiple, null != (i = r.value) ? ne(e, !!r.multiple, i, !1) : null != r.defaultValue && ne(e, !!r.multiple, r.defaultValue, !0);
                                 break;
                              default:
                                 "function" === typeof a.onClick && (e.onclick = Jr)
                           }
                           switch (n) {
                              case "button":
                              case "input":
                              case "select":
                              case "textarea":
                                 r = !!r.autoFocus;
                                 break e;
                              case "img":
                                 r = !0;
                                 break e;
                              default:
                                 r = !1
                           }
                        }
                        r && (t.flags |= 4)
                     }
                     null !== t.ref && (t.flags |= 512, t.flags |= 2097152)
                  }
                  return qo(t), null;
               case 6:
                  if (e && null != t.stateNode) Mo(0, t, e.memoizedProps, r);
                  else {
                     if ("string" !== typeof r && null === t.stateNode) throw Error(l(166));
                     if (n = ni(ti.current), ni(Jl.current), dl(t)) {
                        if (r = t.stateNode, n = t.memoizedProps, r[fa] = t, (i = r.nodeValue !== n) && null !== (e = nl)) switch (e.tag) {
                           case 3:
                              Zr(r.nodeValue, n, 0 !== (1 & e.mode));
                              break;
                           case 5:
                              !0 !== e.memoizedProps.suppressHydrationWarning && Zr(r.nodeValue, n, 0 !== (1 & e.mode))
                        }
                        i && (t.flags |= 4)
                     } else(r = (9 === n.nodeType ? n : n.ownerDocument).createTextNode(r))[fa] = t, t.stateNode = r
                  }
                  return qo(t), null;
               case 13:
                  if (Ca(oi), r = t.memoizedState, null === e || null !== e.memoizedState && null !== e.memoizedState.dehydrated) {
                     if (al && null !== rl && 0 !== (1 & t.mode) && 0 === (128 & t.flags)) fl(), pl(), t.flags |= 98560, i = !1;
                     else if (i = dl(t), null !== r && null !== r.dehydrated) {
                        if (null === e) {
                           if (!i) throw Error(l(318));
                           if (!(i = null !== (i = t.memoizedState) ? i.dehydrated : null)) throw Error(l(317));
                           i[fa] = t
                        } else pl(), 0 === (128 & t.flags) && (t.memoizedState = null), t.flags |= 4;
                        qo(t), i = !1
                     } else null !== ll && (is(ll), ll = null), i = !0;
                     if (!i) return 65536 & t.flags ? t : null
                  }
                  return 0 !== (128 & t.flags) ? (t.lanes = n, t) : ((r = null !== r) !== (null !== e && null !== e.memoizedState) && r && (t.child.flags |= 8192, 0 !== (1 & t.mode) && (null === e || 0 !== (1 & oi.current) ? 0 === Mu && (Mu = 3) : hs())), null !== t.updateQueue && (t.flags |= 4), qo(t), null);
               case 4:
                  return ai(), null === e && Wr(t.stateNode.containerInfo), qo(t), null;
               case 10:
                  return Sl(t.type._context), qo(t), null;
               case 19:
                  if (Ca(oi), null === (i = t.memoizedState)) return qo(t), null;
                  if (r = 0 !== (128 & t.flags), null === (u = i.rendering))
                     if (r) $o(i, !1);
                     else {
                        if (0 !== Mu || null !== e && 0 !== (128 & e.flags))
                           for (e = t.child; null !== e;) {
                              if (null !== (u = ui(e))) {
                                 for (t.flags |= 128, $o(i, !1), null !== (r = u.updateQueue) && (t.updateQueue = r, t.flags |= 4), t.subtreeFlags = 0, r = n, n = t.child; null !== n;) e = r, (i = n).flags &= 14680066, null === (u = i.alternate) ? (i.childLanes = 0, i.lanes = e, i.child = null, i.subtreeFlags = 0, i.memoizedProps = null, i.memoizedState = null, i.updateQueue = null, i.dependencies = null, i.stateNode = null) : (i.childLanes = u.childLanes, i.lanes = u.lanes, i.child = u.child, i.subtreeFlags = 0, i.deletions = null, i.memoizedProps = u.memoizedProps, i.memoizedState = u.memoizedState, i.updateQueue = u.updateQueue, i.type = u.type, e = u.dependencies, i.dependencies = null === e ? null : {
                                    lanes: e.lanes,
                                    firstContext: e.firstContext
                                 }), n = n.sibling;
                                 return Oa(oi, 1 & oi.current | 2), t.child
                              }
                              e = e.sibling
                           }
                        null !== i.tail && Ge() > Wu && (t.flags |= 128, r = !0, $o(i, !1), t.lanes = 4194304)
                     }
                  else {
                     if (!r)
                        if (null !== (e = ui(u))) {
                           if (t.flags |= 128, r = !0, null !== (n = e.updateQueue) && (t.updateQueue = n, t.flags |= 4), $o(i, !0), null === i.tail && "hidden" === i.tailMode && !u.alternate && !al) return qo(t), null
                        } else 2 * Ge() - i.renderingStartTime > Wu && 1073741824 !== n && (t.flags |= 128, r = !0, $o(i, !1), t.lanes = 4194304);
                     i.isBackwards ? (u.sibling = t.child, t.child = u) : (null !== (n = i.last) ? n.sibling = u : t.child = u, i.last = u)
                  }
                  return null !== i.tail ? (t = i.tail, i.rendering = t, i.tail = t.sibling, i.renderingStartTime = Ge(), t.sibling = null, n = oi.current, Oa(oi, r ? 1 & n | 2 : 1 & n), t) : (qo(t), null);
               case 22:
               case 23:
                  return ds(), r = null !== t.memoizedState, null !== e && null !== e.memoizedState !== r && (t.flags |= 8192), r && 0 !== (1 & t.mode) ? 0 !== (1073741824 & Iu) && (qo(t), 6 & t.subtreeFlags && (t.flags |= 8192)) : qo(t), null;
               case 24:
               case 25:
                  return null
            }
            throw Error(l(156, t.tag))
         }

         function Ko(e, t) {
            switch (tl(t), t.tag) {
               case 1:
                  return Ia(t.type) && za(), 65536 & (e = t.flags) ? (t.flags = -65537 & e | 128, t) : null;
               case 3:
                  return ai(), Ca(ja), Ca(_a), ci(), 0 !== (65536 & (e = t.flags)) && 0 === (128 & e) ? (t.flags = -65537 & e | 128, t) : null;
               case 5:
                  return ii(t), null;
               case 13:
                  if (Ca(oi), null !== (e = t.memoizedState) && null !== e.dehydrated) {
                     if (null === t.alternate) throw Error(l(340));
                     pl()
                  }
                  return 65536 & (e = t.flags) ? (t.flags = -65537 & e | 128, t) : null;
               case 19:
                  return Ca(oi), null;
               case 4:
                  return ai(), null;
               case 10:
                  return Sl(t.type._context), null;
               case 22:
               case 23:
                  return ds(), null;
               default:
                  return null
            }
         }
         Io = function (e, t) {
            for (var n = t.child; null !== n;) {
               if (5 === n.tag || 6 === n.tag) e.appendChild(n.stateNode);
               else if (4 !== n.tag && null !== n.child) {
                  n.child.return = n, n = n.child;
                  continue
               }
               if (n === t) break;
               for (; null === n.sibling;) {
                  if (null === n.return || n.return === t) return;
                  n = n.return
               }
               n.sibling.return = n.return, n = n.sibling
            }
         }, zo = function (e, t, n, r) {
            var a = e.memoizedProps;
            if (a !== r) {
               e = t.stateNode, ni(Jl.current);
               var l, i = null;
               switch (n) {
                  case "input":
                     a = Y(e, a), r = Y(e, r), i = [];
                     break;
                  case "select":
                     a = D({}, a, {
                        value: void 0
                     }), r = D({}, r, {
                        value: void 0
                     }), i = [];
                     break;
                  case "textarea":
                     a = re(e, a), r = re(e, r), i = [];
                     break;
                  default:
                     "function" !== typeof a.onClick && "function" === typeof r.onClick && (e.onclick = Jr)
               }
               for (c in ye(n, r), n = null, a)
                  if (!r.hasOwnProperty(c) && a.hasOwnProperty(c) && null != a[c])
                     if ("style" === c) {
                        var u = a[c];
                        for (l in u) u.hasOwnProperty(l) && (n || (n = {}), n[l] = "")
                     } else "dangerouslySetInnerHTML" !== c && "children" !== c && "suppressContentEditableWarning" !== c && "suppressHydrationWarning" !== c && "autoFocus" !== c && (o.hasOwnProperty(c) ? i || (i = []) : (i = i || []).push(c, null));
               for (c in r) {
                  var s = r[c];
                  if (u = null != a ? a[c] : void 0, r.hasOwnProperty(c) && s !== u && (null != s || null != u))
                     if ("style" === c)
                        if (u) {
                           for (l in u) !u.hasOwnProperty(l) || s && s.hasOwnProperty(l) || (n || (n = {}), n[l] = "");
                           for (l in s) s.hasOwnProperty(l) && u[l] !== s[l] && (n || (n = {}), n[l] = s[l])
                        } else n || (i || (i = []), i.push(c, n)), n = s;
                  else "dangerouslySetInnerHTML" === c ? (s = s ? s.__html : void 0, u = u ? u.__html : void 0, null != s && u !== s && (i = i || []).push(c, s)) : "children" === c ? "string" !== typeof s && "number" !== typeof s || (i = i || []).push(c, "" + s) : "suppressContentEditableWarning" !== c && "suppressHydrationWarning" !== c && (o.hasOwnProperty(c) ? (null != s && "onScroll" === c && Ar("scroll", e), i || u === s || (i = [])) : (i = i || []).push(c, s))
               }
               n && (i = i || []).push("style", n);
               var c = i;
               (t.updateQueue = c) && (t.flags |= 4)
            }
         }, Mo = function (e, t, n, r) {
            n !== r && (t.flags |= 4)
         };
         var Yo = !1,
            Xo = !1,
            Go = "function" === typeof WeakSet ? WeakSet : Set,
            Zo = null;

         function Jo(e, t) {
            var n = e.ref;
            if (null !== n)
               if ("function" === typeof n) try {
                  n(null)
               } catch (r) {
                  Es(e, t, r)
               } else n.current = null
         }

         function eu(e, t, n) {
            try {
               n()
            } catch (r) {
               Es(e, t, r)
            }
         }
         var tu = !1;

         function nu(e, t, n) {
            var r = t.updateQueue;
            if (null !== (r = null !== r ? r.lastEffect : null)) {
               var a = r = r.next;
               do {
                  if ((a.tag & e) === e) {
                     var l = a.destroy;
                     a.destroy = void 0, void 0 !== l && eu(t, n, l)
                  }
                  a = a.next
               } while (a !== r)
            }
         }

         function ru(e, t) {
            if (null !== (t = null !== (t = t.updateQueue) ? t.lastEffect : null)) {
               var n = t = t.next;
               do {
                  if ((n.tag & e) === e) {
                     var r = n.create;
                     n.destroy = r()
                  }
                  n = n.next
               } while (n !== t)
            }
         }

         function au(e) {
            var t = e.ref;
            if (null !== t) {
               var n = e.stateNode;
               e.tag, e = n, "function" === typeof t ? t(e) : t.current = e
            }
         }

         function lu(e) {
            var t = e.alternate;
            null !== t && (e.alternate = null, lu(t)), e.child = null, e.deletions = null, e.sibling = null, 5 === e.tag && (null !== (t = e.stateNode) && (delete t[fa], delete t[pa], delete t[ha], delete t[va], delete t[ga])), e.stateNode = null, e.return = null, e.dependencies = null, e.memoizedProps = null, e.memoizedState = null, e.pendingProps = null, e.stateNode = null, e.updateQueue = null
         }

         function iu(e) {
            return 5 === e.tag || 3 === e.tag || 4 === e.tag
         }

         function ou(e) {
            e: for (;;) {
               for (; null === e.sibling;) {
                  if (null === e.return || iu(e.return)) return null;
                  e = e.return
               }
               for (e.sibling.return = e.return, e = e.sibling; 5 !== e.tag && 6 !== e.tag && 18 !== e.tag;) {
                  if (2 & e.flags) continue e;
                  if (null === e.child || 4 === e.tag) continue e;
                  e.child.return = e, e = e.child
               }
               if (!(2 & e.flags)) return e.stateNode
            }
         }

         function uu(e, t, n) {
            var r = e.tag;
            if (5 === r || 6 === r) e = e.stateNode, t ? 8 === n.nodeType ? n.parentNode.insertBefore(e, t) : n.insertBefore(e, t) : (8 === n.nodeType ? (t = n.parentNode).insertBefore(e, n) : (t = n).appendChild(e), null !== (n = n._reactRootContainer) && void 0 !== n || null !== t.onclick || (t.onclick = Jr));
            else if (4 !== r && null !== (e = e.child))
               for (uu(e, t, n), e = e.sibling; null !== e;) uu(e, t, n), e = e.sibling
         }

         function su(e, t, n) {
            var r = e.tag;
            if (5 === r || 6 === r) e = e.stateNode, t ? n.insertBefore(e, t) : n.appendChild(e);
            else if (4 !== r && null !== (e = e.child))
               for (su(e, t, n), e = e.sibling; null !== e;) su(e, t, n), e = e.sibling
         }
         var cu = null,
            du = !1;

         function fu(e, t, n) {
            for (n = n.child; null !== n;) pu(e, t, n), n = n.sibling
         }

         function pu(e, t, n) {
            if (lt && "function" === typeof lt.onCommitFiberUnmount) try {
               lt.onCommitFiberUnmount(at, n)
            } catch (o) {}
            switch (n.tag) {
               case 5:
                  Xo || Jo(n, t);
               case 6:
                  var r = cu,
                     a = du;
                  cu = null, fu(e, t, n), du = a, null !== (cu = r) && (du ? (e = cu, n = n.stateNode, 8 === e.nodeType ? e.parentNode.removeChild(n) : e.removeChild(n)) : cu.removeChild(n.stateNode));
                  break;
               case 18:
                  null !== cu && (du ? (e = cu, n = n.stateNode, 8 === e.nodeType ? ua(e.parentNode, n) : 1 === e.nodeType && ua(e, n), Wt(e)) : ua(cu, n.stateNode));
                  break;
               case 4:
                  r = cu, a = du, cu = n.stateNode.containerInfo, du = !0, fu(e, t, n), cu = r, du = a;
                  break;
               case 0:
               case 11:
               case 14:
               case 15:
                  if (!Xo && (null !== (r = n.updateQueue) && null !== (r = r.lastEffect))) {
                     a = r = r.next;
                     do {
                        var l = a,
                           i = l.destroy;
                        l = l.tag, void 0 !== i && (0 !== (2 & l) || 0 !== (4 & l)) && eu(n, t, i), a = a.next
                     } while (a !== r)
                  }
                  fu(e, t, n);
                  break;
               case 1:
                  if (!Xo && (Jo(n, t), "function" === typeof (r = n.stateNode).componentWillUnmount)) try {
                     r.props = n.memoizedProps, r.state = n.memoizedState, r.componentWillUnmount()
                  } catch (o) {
                     Es(n, t, o)
                  }
                  fu(e, t, n);
                  break;
               case 21:
                  fu(e, t, n);
                  break;
               case 22:
                  1 & n.mode ? (Xo = (r = Xo) || null !== n.memoizedState, fu(e, t, n), Xo = r) : fu(e, t, n);
                  break;
               default:
                  fu(e, t, n)
            }
         }

         function mu(e) {
            var t = e.updateQueue;
            if (null !== t) {
               e.updateQueue = null;
               var n = e.stateNode;
               null === n && (n = e.stateNode = new Go), t.forEach((function (t) {
                  var r = _s.bind(null, e, t);
                  n.has(t) || (n.add(t), t.then(r, r))
               }))
            }
         }

         function hu(e, t) {
            var n = t.deletions;
            if (null !== n)
               for (var r = 0; r < n.length; r++) {
                  var a = n[r];
                  try {
                     var i = e,
                        o = t,
                        u = o;
                     e: for (; null !== u;) {
                        switch (u.tag) {
                           case 5:
                              cu = u.stateNode, du = !1;
                              break e;
                           case 3:
                           case 4:
                              cu = u.stateNode.containerInfo, du = !0;
                              break e
                        }
                        u = u.return
                     }
                     if (null === cu) throw Error(l(160));
                     pu(i, o, a), cu = null, du = !1;
                     var s = a.alternate;
                     null !== s && (s.return = null), a.return = null
                  } catch (c) {
                     Es(a, t, c)
                  }
               }
            if (12854 & t.subtreeFlags)
               for (t = t.child; null !== t;) vu(t, e), t = t.sibling
         }

         function vu(e, t) {
            var n = e.alternate,
               r = e.flags;
            switch (e.tag) {
               case 0:
               case 11:
               case 14:
               case 15:
                  if (hu(t, e), gu(e), 4 & r) {
                     try {
                        nu(3, e, e.return), ru(3, e)
                     } catch (v) {
                        Es(e, e.return, v)
                     }
                     try {
                        nu(5, e, e.return)
                     } catch (v) {
                        Es(e, e.return, v)
                     }
                  }
                  break;
               case 1:
                  hu(t, e), gu(e), 512 & r && null !== n && Jo(n, n.return);
                  break;
               case 5:
                  if (hu(t, e), gu(e), 512 & r && null !== n && Jo(n, n.return), 32 & e.flags) {
                     var a = e.stateNode;
                     try {
                        fe(a, "")
                     } catch (v) {
                        Es(e, e.return, v)
                     }
                  }
                  if (4 & r && null != (a = e.stateNode)) {
                     var i = e.memoizedProps,
                        o = null !== n ? n.memoizedProps : i,
                        u = e.type,
                        s = e.updateQueue;
                     if (e.updateQueue = null, null !== s) try {
                        "input" === u && "radio" === i.type && null != i.name && G(a, i), be(u, o);
                        var c = be(u, i);
                        for (o = 0; o < s.length; o += 2) {
                           var d = s[o],
                              f = s[o + 1];
                           "style" === d ? ve(a, f) : "dangerouslySetInnerHTML" === d ? de(a, f) : "children" === d ? fe(a, f) : b(a, d, f, c)
                        }
                        switch (u) {
                           case "input":
                              Z(a, i);
                              break;
                           case "textarea":
                              le(a, i);
                              break;
                           case "select":
                              var p = a._wrapperState.wasMultiple;
                              a._wrapperState.wasMultiple = !!i.multiple;
                              var m = i.value;
                              null != m ? ne(a, !!i.multiple, m, !1) : p !== !!i.multiple && (null != i.defaultValue ? ne(a, !!i.multiple, i.defaultValue, !0) : ne(a, !!i.multiple, i.multiple ? [] : "", !1))
                        }
                        a[pa] = i
                     } catch (v) {
                        Es(e, e.return, v)
                     }
                  }
                  break;
               case 6:
                  if (hu(t, e), gu(e), 4 & r) {
                     if (null === e.stateNode) throw Error(l(162));
                     a = e.stateNode, i = e.memoizedProps;
                     try {
                        a.nodeValue = i
                     } catch (v) {
                        Es(e, e.return, v)
                     }
                  }
                  break;
               case 3:
                  if (hu(t, e), gu(e), 4 & r && null !== n && n.memoizedState.isDehydrated) try {
                     Wt(t.containerInfo)
                  } catch (v) {
                     Es(e, e.return, v)
                  }
                  break;
               case 4:
               default:
                  hu(t, e), gu(e);
                  break;
               case 13:
                  hu(t, e), gu(e), 8192 & (a = e.child).flags && (i = null !== a.memoizedState, a.stateNode.isHidden = i, !i || null !== a.alternate && null !== a.alternate.memoizedState || (Hu = Ge())), 4 & r && mu(e);
                  break;
               case 22:
                  if (d = null !== n && null !== n.memoizedState, 1 & e.mode ? (Xo = (c = Xo) || d, hu(t, e), Xo = c) : hu(t, e), gu(e), 8192 & r) {
                     if (c = null !== e.memoizedState, (e.stateNode.isHidden = c) && !d && 0 !== (1 & e.mode))
                        for (Zo = e, d = e.child; null !== d;) {
                           for (f = Zo = d; null !== Zo;) {
                              switch (m = (p = Zo).child, p.tag) {
                                 case 0:
                                 case 11:
                                 case 14:
                                 case 15:
                                    nu(4, p, p.return);
                                    break;
                                 case 1:
                                    Jo(p, p.return);
                                    var h = p.stateNode;
                                    if ("function" === typeof h.componentWillUnmount) {
                                       r = p, n = p.return;
                                       try {
                                          t = r, h.props = t.memoizedProps, h.state = t.memoizedState, h.componentWillUnmount()
                                       } catch (v) {
                                          Es(r, n, v)
                                       }
                                    }
                                    break;
                                 case 5:
                                    Jo(p, p.return);
                                    break;
                                 case 22:
                                    if (null !== p.memoizedState) {
                                       xu(f);
                                       continue
                                    }
                              }
                              null !== m ? (m.return = p, Zo = m) : xu(f)
                           }
                           d = d.sibling
                        }
                     e: for (d = null, f = e;;) {
                        if (5 === f.tag) {
                           if (null === d) {
                              d = f;
                              try {
                                 a = f.stateNode, c ? "function" === typeof (i = a.style).setProperty ? i.setProperty("display", "none", "important") : i.display = "none" : (u = f.stateNode, o = void 0 !== (s = f.memoizedProps.style) && null !== s && s.hasOwnProperty("display") ? s.display : null, u.style.display = he("display", o))
                              } catch (v) {
                                 Es(e, e.return, v)
                              }
                           }
                        } else if (6 === f.tag) {
                           if (null === d) try {
                              f.stateNode.nodeValue = c ? "" : f.memoizedProps
                           } catch (v) {
                              Es(e, e.return, v)
                           }
                        } else if ((22 !== f.tag && 23 !== f.tag || null === f.memoizedState || f === e) && null !== f.child) {
                           f.child.return = f, f = f.child;
                           continue
                        }
                        if (f === e) break e;
                        for (; null === f.sibling;) {
                           if (null === f.return || f.return === e) break e;
                           d === f && (d = null), f = f.return
                        }
                        d === f && (d = null), f.sibling.return = f.return, f = f.sibling
                     }
                  }
                  break;
               case 19:
                  hu(t, e), gu(e), 4 & r && mu(e);
               case 21:
            }
         }

         function gu(e) {
            var t = e.flags;
            if (2 & t) {
               try {
                  e: {
                     for (var n = e.return; null !== n;) {
                        if (iu(n)) {
                           var r = n;
                           break e
                        }
                        n = n.return
                     }
                     throw Error(l(160))
                  }
                  switch (r.tag) {
                     case 5:
                        var a = r.stateNode;
                        32 & r.flags && (fe(a, ""), r.flags &= -33), su(e, ou(e), a);
                        break;
                     case 3:
                     case 4:
                        var i = r.stateNode.containerInfo;
                        uu(e, ou(e), i);
                        break;
                     default:
                        throw Error(l(161))
                  }
               }
               catch (o) {
                  Es(e, e.return, o)
               }
               e.flags &= -3
            }
            4096 & t && (e.flags &= -4097)
         }

         function yu(e, t, n) {
            Zo = e, bu(e, t, n)
         }

         function bu(e, t, n) {
            for (var r = 0 !== (1 & e.mode); null !== Zo;) {
               var a = Zo,
                  l = a.child;
               if (22 === a.tag && r) {
                  var i = null !== a.memoizedState || Yo;
                  if (!i) {
                     var o = a.alternate,
                        u = null !== o && null !== o.memoizedState || Xo;
                     o = Yo;
                     var s = Xo;
                     if (Yo = i, (Xo = u) && !s)
                        for (Zo = a; null !== Zo;) u = (i = Zo).child, 22 === i.tag && null !== i.memoizedState ? Su(a) : null !== u ? (u.return = i, Zo = u) : Su(a);
                     for (; null !== l;) Zo = l, bu(l, t, n), l = l.sibling;
                     Zo = a, Yo = o, Xo = s
                  }
                  wu(e)
               } else 0 !== (8772 & a.subtreeFlags) && null !== l ? (l.return = a, Zo = l) : wu(e)
            }
         }

         function wu(e) {
            for (; null !== Zo;) {
               var t = Zo;
               if (0 !== (8772 & t.flags)) {
                  var n = t.alternate;
                  try {
                     if (0 !== (8772 & t.flags)) switch (t.tag) {
                        case 0:
                        case 11:
                        case 15:
                           Xo || ru(5, t);
                           break;
                        case 1:
                           var r = t.stateNode;
                           if (4 & t.flags && !Xo)
                              if (null === n) r.componentDidMount();
                              else {
                                 var a = t.elementType === t.type ? n.memoizedProps : vl(t.type, n.memoizedProps);
                                 r.componentDidUpdate(a, n.memoizedState, r.__reactInternalSnapshotBeforeUpdate)
                              } var i = t.updateQueue;
                           null !== i && Fl(t, i, r);
                           break;
                        case 3:
                           var o = t.updateQueue;
                           if (null !== o) {
                              if (n = null, null !== t.child) switch (t.child.tag) {
                                 case 5:
                                 case 1:
                                    n = t.child.stateNode
                              }
                              Fl(t, o, n)
                           }
                           break;
                        case 5:
                           var u = t.stateNode;
                           if (null === n && 4 & t.flags) {
                              n = u;
                              var s = t.memoizedProps;
                              switch (t.type) {
                                 case "button":
                                 case "input":
                                 case "select":
                                 case "textarea":
                                    s.autoFocus && n.focus();
                                    break;
                                 case "img":
                                    s.src && (n.src = s.src)
                              }
                           }
                           break;
                        case 6:
                        case 4:
                        case 12:
                        case 19:
                        case 17:
                        case 21:
                        case 22:
                        case 23:
                        case 25:
                           break;
                        case 13:
                           if (null === t.memoizedState) {
                              var c = t.alternate;
                              if (null !== c) {
                                 var d = c.memoizedState;
                                 if (null !== d) {
                                    var f = d.dehydrated;
                                    null !== f && Wt(f)
                                 }
                              }
                           }
                           break;
                        default:
                           throw Error(l(163))
                     }
                     Xo || 512 & t.flags && au(t)
                  } catch (p) {
                     Es(t, t.return, p)
                  }
               }
               if (t === e) {
                  Zo = null;
                  break
               }
               if (null !== (n = t.sibling)) {
                  n.return = t.return, Zo = n;
                  break
               }
               Zo = t.return
            }
         }

         function xu(e) {
            for (; null !== Zo;) {
               var t = Zo;
               if (t === e) {
                  Zo = null;
                  break
               }
               var n = t.sibling;
               if (null !== n) {
                  n.return = t.return, Zo = n;
                  break
               }
               Zo = t.return
            }
         }

         function Su(e) {
            for (; null !== Zo;) {
               var t = Zo;
               try {
                  switch (t.tag) {
                     case 0:
                     case 11:
                     case 15:
                        var n = t.return;
                        try {
                           ru(4, t)
                        } catch (u) {
                           Es(t, n, u)
                        }
                        break;
                     case 1:
                        var r = t.stateNode;
                        if ("function" === typeof r.componentDidMount) {
                           var a = t.return;
                           try {
                              r.componentDidMount()
                           } catch (u) {
                              Es(t, a, u)
                           }
                        }
                        var l = t.return;
                        try {
                           au(t)
                        } catch (u) {
                           Es(t, l, u)
                        }
                        break;
                     case 5:
                        var i = t.return;
                        try {
                           au(t)
                        } catch (u) {
                           Es(t, i, u)
                        }
                  }
               } catch (u) {
                  Es(t, t.return, u)
               }
               if (t === e) {
                  Zo = null;
                  break
               }
               var o = t.sibling;
               if (null !== o) {
                  o.return = t.return, Zo = o;
                  break
               }
               Zo = t.return
            }
         }
         var ku, Eu = Math.ceil,
            Cu = w.ReactCurrentDispatcher,
            Ou = w.ReactCurrentOwner,
            Nu = w.ReactCurrentBatchConfig,
            _u = 0,
            ju = null,
            Tu = null,
            Pu = 0,
            Iu = 0,
            zu = Ea(0),
            Mu = 0,
            Lu = null,
            Ru = 0,
            Du = 0,
            Fu = 0,
            Au = null,
            Uu = null,
            Hu = 0,
            Wu = 1 / 0,
            Vu = null,
            Bu = !1,
            $u = null,
            qu = null,
            Qu = !1,
            Ku = null,
            Yu = 0,
            Xu = 0,
            Gu = null,
            Zu = -1,
            Ju = 0;

         function es() {
            return 0 !== (6 & _u) ? Ge() : -1 !== Zu ? Zu : Zu = Ge()
         }

         function ts(e) {
            return 0 === (1 & e.mode) ? 1 : 0 !== (2 & _u) && 0 !== Pu ? Pu & -Pu : null !== hl.transition ? (0 === Ju && (Ju = ht()), Ju) : 0 !== (e = bt) ? e : e = void 0 === (e = window.event) ? 16 : Xt(e.type)
         }

         function ns(e, t, n, r) {
            if (50 < Xu) throw Xu = 0, Gu = null, Error(l(185));
            gt(e, n, r), 0 !== (2 & _u) && e === ju || (e === ju && (0 === (2 & _u) && (Du |= n), 4 === Mu && os(e, Pu)), rs(e, r), 1 === n && 0 === _u && 0 === (1 & t.mode) && (Wu = Ge() + 500, Aa && Wa()))
         }

         function rs(e, t) {
            var n = e.callbackNode;
            ! function (e, t) {
               for (var n = e.suspendedLanes, r = e.pingedLanes, a = e.expirationTimes, l = e.pendingLanes; 0 < l;) {
                  var i = 31 - it(l),
                     o = 1 << i,
                     u = a[i]; - 1 === u ? 0 !== (o & n) && 0 === (o & r) || (a[i] = pt(o, t)) : u <= t && (e.expiredLanes |= o), l &= ~o
               }
            }(e, t);
            var r = ft(e, e === ju ? Pu : 0);
            if (0 === r) null !== n && Ke(n), e.callbackNode = null, e.callbackPriority = 0;
            else if (t = r & -r, e.callbackPriority !== t) {
               if (null != n && Ke(n), 1 === t) 0 === e.tag ? function (e) {
                  Aa = !0, Ha(e)
               }(us.bind(null, e)) : Ha(us.bind(null, e)), ia((function () {
                  0 === (6 & _u) && Wa()
               })), n = null;
               else {
                  switch (wt(r)) {
                     case 1:
                        n = Je;
                        break;
                     case 4:
                        n = et;
                        break;
                     case 16:
                     default:
                        n = tt;
                        break;
                     case 536870912:
                        n = rt
                  }
                  n = js(n, as.bind(null, e))
               }
               e.callbackPriority = t, e.callbackNode = n
            }
         }

         function as(e, t) {
            if (Zu = -1, Ju = 0, 0 !== (6 & _u)) throw Error(l(327));
            var n = e.callbackNode;
            if (Ss() && e.callbackNode !== n) return null;
            var r = ft(e, e === ju ? Pu : 0);
            if (0 === r) return null;
            if (0 !== (30 & r) || 0 !== (r & e.expiredLanes) || t) t = vs(e, r);
            else {
               t = r;
               var a = _u;
               _u |= 2;
               var i = ms();
               for (ju === e && Pu === t || (Vu = null, Wu = Ge() + 500, fs(e, t));;) try {
                  ys();
                  break
               } catch (u) {
                  ps(e, u)
               }
               xl(), Cu.current = i, _u = a, null !== Tu ? t = 0 : (ju = null, Pu = 0, t = Mu)
            }
            if (0 !== t) {
               if (2 === t && (0 !== (a = mt(e)) && (r = a, t = ls(e, a))), 1 === t) throw n = Lu, fs(e, 0), os(e, r), rs(e, Ge()), n;
               if (6 === t) os(e, r);
               else {
                  if (a = e.current.alternate, 0 === (30 & r) && ! function (e) {
                        for (var t = e;;) {
                           if (16384 & t.flags) {
                              var n = t.updateQueue;
                              if (null !== n && null !== (n = n.stores))
                                 for (var r = 0; r < n.length; r++) {
                                    var a = n[r],
                                       l = a.getSnapshot;
                                    a = a.value;
                                    try {
                                       if (!or(l(), a)) return !1
                                    } catch (o) {
                                       return !1
                                    }
                                 }
                           }
                           if (n = t.child, 16384 & t.subtreeFlags && null !== n) n.return = t, t = n;
                           else {
                              if (t === e) break;
                              for (; null === t.sibling;) {
                                 if (null === t.return || t.return === e) return !0;
                                 t = t.return
                              }
                              t.sibling.return = t.return, t = t.sibling
                           }
                        }
                        return !0
                     }(a) && (2 === (t = vs(e, r)) && (0 !== (i = mt(e)) && (r = i, t = ls(e, i))), 1 === t)) throw n = Lu, fs(e, 0), os(e, r), rs(e, Ge()), n;
                  switch (e.finishedWork = a, e.finishedLanes = r, t) {
                     case 0:
                     case 1:
                        throw Error(l(345));
                     case 2:
                     case 5:
                        xs(e, Uu, Vu);
                        break;
                     case 3:
                        if (os(e, r), (130023424 & r) === r && 10 < (t = Hu + 500 - Ge())) {
                           if (0 !== ft(e, 0)) break;
                           if (((a = e.suspendedLanes) & r) !== r) {
                              es(), e.pingedLanes |= e.suspendedLanes & a;
                              break
                           }
                           e.timeoutHandle = ra(xs.bind(null, e, Uu, Vu), t);
                           break
                        }
                        xs(e, Uu, Vu);
                        break;
                     case 4:
                        if (os(e, r), (4194240 & r) === r) break;
                        for (t = e.eventTimes, a = -1; 0 < r;) {
                           var o = 31 - it(r);
                           i = 1 << o, (o = t[o]) > a && (a = o), r &= ~i
                        }
                        if (r = a, 10 < (r = (120 > (r = Ge() - r) ? 120 : 480 > r ? 480 : 1080 > r ? 1080 : 1920 > r ? 1920 : 3e3 > r ? 3e3 : 4320 > r ? 4320 : 1960 * Eu(r / 1960)) - r)) {
                           e.timeoutHandle = ra(xs.bind(null, e, Uu, Vu), r);
                           break
                        }
                        xs(e, Uu, Vu);
                        break;
                     default:
                        throw Error(l(329))
                  }
               }
            }
            return rs(e, Ge()), e.callbackNode === n ? as.bind(null, e) : null
         }

         function ls(e, t) {
            var n = Au;
            return e.current.memoizedState.isDehydrated && (fs(e, t).flags |= 256), 2 !== (e = vs(e, t)) && (t = Uu, Uu = n, null !== t && is(t)), e
         }

         function is(e) {
            null === Uu ? Uu = e : Uu.push.apply(Uu, e)
         }

         function os(e, t) {
            for (t &= ~Fu, t &= ~Du, e.suspendedLanes |= t, e.pingedLanes &= ~t, e = e.expirationTimes; 0 < t;) {
               var n = 31 - it(t),
                  r = 1 << n;
               e[n] = -1, t &= ~r
            }
         }

         function us(e) {
            if (0 !== (6 & _u)) throw Error(l(327));
            Ss();
            var t = ft(e, 0);
            if (0 === (1 & t)) return rs(e, Ge()), null;
            var n = vs(e, t);
            if (0 !== e.tag && 2 === n) {
               var r = mt(e);
               0 !== r && (t = r, n = ls(e, r))
            }
            if (1 === n) throw n = Lu, fs(e, 0), os(e, t), rs(e, Ge()), n;
            if (6 === n) throw Error(l(345));
            return e.finishedWork = e.current.alternate, e.finishedLanes = t, xs(e, Uu, Vu), rs(e, Ge()), null
         }

         function ss(e, t) {
            var n = _u;
            _u |= 1;
            try {
               return e(t)
            } finally {
               0 === (_u = n) && (Wu = Ge() + 500, Aa && Wa())
            }
         }

         function cs(e) {
            null !== Ku && 0 === Ku.tag && 0 === (6 & _u) && Ss();
            var t = _u;
            _u |= 1;
            var n = Nu.transition,
               r = bt;
            try {
               if (Nu.transition = null, bt = 1, e) return e()
            } finally {
               bt = r, Nu.transition = n, 0 === (6 & (_u = t)) && Wa()
            }
         }

         function ds() {
            Iu = zu.current, Ca(zu)
         }

         function fs(e, t) {
            e.finishedWork = null, e.finishedLanes = 0;
            var n = e.timeoutHandle;
            if (-1 !== n && (e.timeoutHandle = -1, aa(n)), null !== Tu)
               for (n = Tu.return; null !== n;) {
                  var r = n;
                  switch (tl(r), r.tag) {
                     case 1:
                        null !== (r = r.type.childContextTypes) && void 0 !== r && za();
                        break;
                     case 3:
                        ai(), Ca(ja), Ca(_a), ci();
                        break;
                     case 5:
                        ii(r);
                        break;
                     case 4:
                        ai();
                        break;
                     case 13:
                     case 19:
                        Ca(oi);
                        break;
                     case 10:
                        Sl(r.type._context);
                        break;
                     case 22:
                     case 23:
                        ds()
                  }
                  n = n.return
               }
            if (ju = e, Tu = e = zs(e.current, null), Pu = Iu = t, Mu = 0, Lu = null, Fu = Du = Ru = 0, Uu = Au = null, null !== Ol) {
               for (t = 0; t < Ol.length; t++)
                  if (null !== (r = (n = Ol[t]).interleaved)) {
                     n.interleaved = null;
                     var a = r.next,
                        l = n.pending;
                     if (null !== l) {
                        var i = l.next;
                        l.next = a, r.next = i
                     }
                     n.pending = r
                  } Ol = null
            }
            return e
         }

         function ps(e, t) {
            for (;;) {
               var n = Tu;
               try {
                  if (xl(), di.current = lo, gi) {
                     for (var r = mi.memoizedState; null !== r;) {
                        var a = r.queue;
                        null !== a && (a.pending = null), r = r.next
                     }
                     gi = !1
                  }
                  if (pi = 0, vi = hi = mi = null, yi = !1, bi = 0, Ou.current = null, null === n || null === n.return) {
                     Mu = 1, Lu = t, Tu = null;
                     break
                  }
                  e: {
                     var i = e,
                        o = n.return,
                        u = n,
                        s = t;
                     if (t = Pu, u.flags |= 32768, null !== s && "object" === typeof s && "function" === typeof s.then) {
                        var c = s,
                           d = u,
                           f = d.tag;
                        if (0 === (1 & d.mode) && (0 === f || 11 === f || 15 === f)) {
                           var p = d.alternate;
                           p ? (d.updateQueue = p.updateQueue, d.memoizedState = p.memoizedState, d.lanes = p.lanes) : (d.updateQueue = null, d.memoizedState = null)
                        }
                        var m = go(o);
                        if (null !== m) {
                           m.flags &= -257, yo(m, o, u, 0, t), 1 & m.mode && vo(i, c, t), s = c;
                           var h = (t = m).updateQueue;
                           if (null === h) {
                              var v = new Set;
                              v.add(s), t.updateQueue = v
                           } else h.add(s);
                           break e
                        }
                        if (0 === (1 & t)) {
                           vo(i, c, t), hs();
                           break e
                        }
                        s = Error(l(426))
                     } else if (al && 1 & u.mode) {
                        var g = go(o);
                        if (null !== g) {
                           0 === (65536 & g.flags) && (g.flags |= 256), yo(g, o, u, 0, t), ml(so(s, u));
                           break e
                        }
                     }
                     i = s = so(s, u),
                     4 !== Mu && (Mu = 2),
                     null === Au ? Au = [i] : Au.push(i),
                     i = o;do {
                        switch (i.tag) {
                           case 3:
                              i.flags |= 65536, t &= -t, i.lanes |= t, Rl(i, mo(0, s, t));
                              break e;
                           case 1:
                              u = s;
                              var y = i.type,
                                 b = i.stateNode;
                              if (0 === (128 & i.flags) && ("function" === typeof y.getDerivedStateFromError || null !== b && "function" === typeof b.componentDidCatch && (null === qu || !qu.has(b)))) {
                                 i.flags |= 65536, t &= -t, i.lanes |= t, Rl(i, ho(i, u, t));
                                 break e
                              }
                        }
                        i = i.return
                     } while (null !== i)
                  }
                  ws(n)
               } catch (w) {
                  t = w, Tu === n && null !== n && (Tu = n = n.return);
                  continue
               }
               break
            }
         }

         function ms() {
            var e = Cu.current;
            return Cu.current = lo, null === e ? lo : e
         }

         function hs() {
            0 !== Mu && 3 !== Mu && 2 !== Mu || (Mu = 4), null === ju || 0 === (268435455 & Ru) && 0 === (268435455 & Du) || os(ju, Pu)
         }

         function vs(e, t) {
            var n = _u;
            _u |= 2;
            var r = ms();
            for (ju === e && Pu === t || (Vu = null, fs(e, t));;) try {
               gs();
               break
            } catch (a) {
               ps(e, a)
            }
            if (xl(), _u = n, Cu.current = r, null !== Tu) throw Error(l(261));
            return ju = null, Pu = 0, Mu
         }

         function gs() {
            for (; null !== Tu;) bs(Tu)
         }

         function ys() {
            for (; null !== Tu && !Ye();) bs(Tu)
         }

         function bs(e) {
            var t = ku(e.alternate, e, Iu);
            e.memoizedProps = e.pendingProps, null === t ? ws(e) : Tu = t, Ou.current = null
         }

         function ws(e) {
            var t = e;
            do {
               var n = t.alternate;
               if (e = t.return, 0 === (32768 & t.flags)) {
                  if (null !== (n = Qo(n, t, Iu))) return void(Tu = n)
               } else {
                  if (null !== (n = Ko(n, t))) return n.flags &= 32767, void(Tu = n);
                  if (null === e) return Mu = 6, void(Tu = null);
                  e.flags |= 32768, e.subtreeFlags = 0, e.deletions = null
               }
               if (null !== (t = t.sibling)) return void(Tu = t);
               Tu = t = e
            } while (null !== t);
            0 === Mu && (Mu = 5)
         }

         function xs(e, t, n) {
            var r = bt,
               a = Nu.transition;
            try {
               Nu.transition = null, bt = 1,
                  function (e, t, n, r) {
                     do {
                        Ss()
                     } while (null !== Ku);
                     if (0 !== (6 & _u)) throw Error(l(327));
                     n = e.finishedWork;
                     var a = e.finishedLanes;
                     if (null === n) return null;
                     if (e.finishedWork = null, e.finishedLanes = 0, n === e.current) throw Error(l(177));
                     e.callbackNode = null, e.callbackPriority = 0;
                     var i = n.lanes | n.childLanes;
                     if (function (e, t) {
                           var n = e.pendingLanes & ~t;
                           e.pendingLanes = t, e.suspendedLanes = 0, e.pingedLanes = 0, e.expiredLanes &= t, e.mutableReadLanes &= t, e.entangledLanes &= t, t = e.entanglements;
                           var r = e.eventTimes;
                           for (e = e.expirationTimes; 0 < n;) {
                              var a = 31 - it(n),
                                 l = 1 << a;
                              t[a] = 0, r[a] = -1, e[a] = -1, n &= ~l
                           }
                        }(e, i), e === ju && (Tu = ju = null, Pu = 0), 0 === (2064 & n.subtreeFlags) && 0 === (2064 & n.flags) || Qu || (Qu = !0, js(tt, (function () {
                           return Ss(), null
                        }))), i = 0 !== (15990 & n.flags), 0 !== (15990 & n.subtreeFlags) || i) {
                        i = Nu.transition, Nu.transition = null;
                        var o = bt;
                        bt = 1;
                        var u = _u;
                        _u |= 4, Ou.current = null,
                           function (e, t) {
                              if (ea = Bt, pr(e = fr())) {
                                 if ("selectionStart" in e) var n = {
                                    start: e.selectionStart,
                                    end: e.selectionEnd
                                 };
                                 else e: {
                                    var r = (n = (n = e.ownerDocument) && n.defaultView || window).getSelection && n.getSelection();
                                    if (r && 0 !== r.rangeCount) {
                                       n = r.anchorNode;
                                       var a = r.anchorOffset,
                                          i = r.focusNode;
                                       r = r.focusOffset;
                                       try {
                                          n.nodeType, i.nodeType
                                       } catch (x) {
                                          n = null;
                                          break e
                                       }
                                       var o = 0,
                                          u = -1,
                                          s = -1,
                                          c = 0,
                                          d = 0,
                                          f = e,
                                          p = null;
                                       t: for (;;) {
                                          for (var m; f !== n || 0 !== a && 3 !== f.nodeType || (u = o + a), f !== i || 0 !== r && 3 !== f.nodeType || (s = o + r), 3 === f.nodeType && (o += f.nodeValue.length), null !== (m = f.firstChild);) p = f, f = m;
                                          for (;;) {
                                             if (f === e) break t;
                                             if (p === n && ++c === a && (u = o), p === i && ++d === r && (s = o), null !== (m = f.nextSibling)) break;
                                             p = (f = p).parentNode
                                          }
                                          f = m
                                       }
                                       n = -1 === u || -1 === s ? null : {
                                          start: u,
                                          end: s
                                       }
                                    } else n = null
                                 }
                                 n = n || {
                                    start: 0,
                                    end: 0
                                 }
                              } else n = null;
                              for (ta = {
                                    focusedElem: e,
                                    selectionRange: n
                                 }, Bt = !1, Zo = t; null !== Zo;)
                                 if (e = (t = Zo).child, 0 !== (1028 & t.subtreeFlags) && null !== e) e.return = t, Zo = e;
                                 else
                                    for (; null !== Zo;) {
                                       t = Zo;
                                       try {
                                          var h = t.alternate;
                                          if (0 !== (1024 & t.flags)) switch (t.tag) {
                                             case 0:
                                             case 11:
                                             case 15:
                                             case 5:
                                             case 6:
                                             case 4:
                                             case 17:
                                                break;
                                             case 1:
                                                if (null !== h) {
                                                   var v = h.memoizedProps,
                                                      g = h.memoizedState,
                                                      y = t.stateNode,
                                                      b = y.getSnapshotBeforeUpdate(t.elementType === t.type ? v : vl(t.type, v), g);
                                                   y.__reactInternalSnapshotBeforeUpdate = b
                                                }
                                                break;
                                             case 3:
                                                var w = t.stateNode.containerInfo;
                                                1 === w.nodeType ? w.textContent = "" : 9 === w.nodeType && w.documentElement && w.removeChild(w.documentElement);
                                                break;
                                             default:
                                                throw Error(l(163))
                                          }
                                       } catch (x) {
                                          Es(t, t.return, x)
                                       }
                                       if (null !== (e = t.sibling)) {
                                          e.return = t.return, Zo = e;
                                          break
                                       }
                                       Zo = t.return
                                    }
                              h = tu, tu = !1
                           }(e, n), vu(n, e), mr(ta), Bt = !!ea, ta = ea = null, e.current = n, yu(n, e, a), Xe(), _u = u, bt = o, Nu.transition = i
                     } else e.current = n;
                     if (Qu && (Qu = !1, Ku = e, Yu = a), 0 === (i = e.pendingLanes) && (qu = null), function (e) {
                           if (lt && "function" === typeof lt.onCommitFiberRoot) try {
                              lt.onCommitFiberRoot(at, e, void 0, 128 === (128 & e.current.flags))
                           } catch (t) {}
                        }(n.stateNode), rs(e, Ge()), null !== t)
                        for (r = e.onRecoverableError, n = 0; n < t.length; n++) r((a = t[n]).value, {
                           componentStack: a.stack,
                           digest: a.digest
                        });
                     if (Bu) throw Bu = !1, e = $u, $u = null, e;
                     0 !== (1 & Yu) && 0 !== e.tag && Ss(), 0 !== (1 & (i = e.pendingLanes)) ? e === Gu ? Xu++ : (Xu = 0, Gu = e) : Xu = 0, Wa()
                  }(e, t, n, r)
            } finally {
               Nu.transition = a, bt = r
            }
            return null
         }

         function Ss() {
            if (null !== Ku) {
               var e = wt(Yu),
                  t = Nu.transition,
                  n = bt;
               try {
                  if (Nu.transition = null, bt = 16 > e ? 16 : e, null === Ku) var r = !1;
                  else {
                     if (e = Ku, Ku = null, Yu = 0, 0 !== (6 & _u)) throw Error(l(331));
                     var a = _u;
                     for (_u |= 4, Zo = e.current; null !== Zo;) {
                        var i = Zo,
                           o = i.child;
                        if (0 !== (16 & Zo.flags)) {
                           var u = i.deletions;
                           if (null !== u) {
                              for (var s = 0; s < u.length; s++) {
                                 var c = u[s];
                                 for (Zo = c; null !== Zo;) {
                                    var d = Zo;
                                    switch (d.tag) {
                                       case 0:
                                       case 11:
                                       case 15:
                                          nu(8, d, i)
                                    }
                                    var f = d.child;
                                    if (null !== f) f.return = d, Zo = f;
                                    else
                                       for (; null !== Zo;) {
                                          var p = (d = Zo).sibling,
                                             m = d.return;
                                          if (lu(d), d === c) {
                                             Zo = null;
                                             break
                                          }
                                          if (null !== p) {
                                             p.return = m, Zo = p;
                                             break
                                          }
                                          Zo = m
                                       }
                                 }
                              }
                              var h = i.alternate;
                              if (null !== h) {
                                 var v = h.child;
                                 if (null !== v) {
                                    h.child = null;
                                    do {
                                       var g = v.sibling;
                                       v.sibling = null, v = g
                                    } while (null !== v)
                                 }
                              }
                              Zo = i
                           }
                        }
                        if (0 !== (2064 & i.subtreeFlags) && null !== o) o.return = i, Zo = o;
                        else e: for (; null !== Zo;) {
                           if (0 !== (2048 & (i = Zo).flags)) switch (i.tag) {
                              case 0:
                              case 11:
                              case 15:
                                 nu(9, i, i.return)
                           }
                           var y = i.sibling;
                           if (null !== y) {
                              y.return = i.return, Zo = y;
                              break e
                           }
                           Zo = i.return
                        }
                     }
                     var b = e.current;
                     for (Zo = b; null !== Zo;) {
                        var w = (o = Zo).child;
                        if (0 !== (2064 & o.subtreeFlags) && null !== w) w.return = o, Zo = w;
                        else e: for (o = b; null !== Zo;) {
                           if (0 !== (2048 & (u = Zo).flags)) try {
                              switch (u.tag) {
                                 case 0:
                                 case 11:
                                 case 15:
                                    ru(9, u)
                              }
                           } catch (S) {
                              Es(u, u.return, S)
                           }
                           if (u === o) {
                              Zo = null;
                              break e
                           }
                           var x = u.sibling;
                           if (null !== x) {
                              x.return = u.return, Zo = x;
                              break e
                           }
                           Zo = u.return
                        }
                     }
                     if (_u = a, Wa(), lt && "function" === typeof lt.onPostCommitFiberRoot) try {
                        lt.onPostCommitFiberRoot(at, e)
                     } catch (S) {}
                     r = !0
                  }
                  return r
               } finally {
                  bt = n, Nu.transition = t
               }
            }
            return !1
         }

         function ks(e, t, n) {
            e = Ml(e, t = mo(0, t = so(n, t), 1), 1), t = es(), null !== e && (gt(e, 1, t), rs(e, t))
         }

         function Es(e, t, n) {
            if (3 === e.tag) ks(e, e, n);
            else
               for (; null !== t;) {
                  if (3 === t.tag) {
                     ks(t, e, n);
                     break
                  }
                  if (1 === t.tag) {
                     var r = t.stateNode;
                     if ("function" === typeof t.type.getDerivedStateFromError || "function" === typeof r.componentDidCatch && (null === qu || !qu.has(r))) {
                        t = Ml(t, e = ho(t, e = so(n, e), 1), 1), e = es(), null !== t && (gt(t, 1, e), rs(t, e));
                        break
                     }
                  }
                  t = t.return
               }
         }

         function Cs(e, t, n) {
            var r = e.pingCache;
            null !== r && r.delete(t), t = es(), e.pingedLanes |= e.suspendedLanes & n, ju === e && (Pu & n) === n && (4 === Mu || 3 === Mu && (130023424 & Pu) === Pu && 500 > Ge() - Hu ? fs(e, 0) : Fu |= n), rs(e, t)
         }

         function Os(e, t) {
            0 === t && (0 === (1 & e.mode) ? t = 1 : (t = ct, 0 === (130023424 & (ct <<= 1)) && (ct = 4194304)));
            var n = es();
            null !== (e = jl(e, t)) && (gt(e, t, n), rs(e, n))
         }

         function Ns(e) {
            var t = e.memoizedState,
               n = 0;
            null !== t && (n = t.retryLane), Os(e, n)
         }

         function _s(e, t) {
            var n = 0;
            switch (e.tag) {
               case 13:
                  var r = e.stateNode,
                     a = e.memoizedState;
                  null !== a && (n = a.retryLane);
                  break;
               case 19:
                  r = e.stateNode;
                  break;
               default:
                  throw Error(l(314))
            }
            null !== r && r.delete(t), Os(e, n)
         }

         function js(e, t) {
            return Qe(e, t)
         }

         function Ts(e, t, n, r) {
            this.tag = e, this.key = n, this.sibling = this.child = this.return = this.stateNode = this.type = this.elementType = null, this.index = 0, this.ref = null, this.pendingProps = t, this.dependencies = this.memoizedState = this.updateQueue = this.memoizedProps = null, this.mode = r, this.subtreeFlags = this.flags = 0, this.deletions = null, this.childLanes = this.lanes = 0, this.alternate = null
         }

         function Ps(e, t, n, r) {
            return new Ts(e, t, n, r)
         }

         function Is(e) {
            return !(!(e = e.prototype) || !e.isReactComponent)
         }

         function zs(e, t) {
            var n = e.alternate;
            return null === n ? ((n = Ps(e.tag, t, e.key, e.mode)).elementType = e.elementType, n.type = e.type, n.stateNode = e.stateNode, n.alternate = e, e.alternate = n) : (n.pendingProps = t, n.type = e.type, n.flags = 0, n.subtreeFlags = 0, n.deletions = null), n.flags = 14680064 & e.flags, n.childLanes = e.childLanes, n.lanes = e.lanes, n.child = e.child, n.memoizedProps = e.memoizedProps, n.memoizedState = e.memoizedState, n.updateQueue = e.updateQueue, t = e.dependencies, n.dependencies = null === t ? null : {
               lanes: t.lanes,
               firstContext: t.firstContext
            }, n.sibling = e.sibling, n.index = e.index, n.ref = e.ref, n
         }

         function Ms(e, t, n, r, a, i) {
            var o = 2;
            if (r = e, "function" === typeof e) Is(e) && (o = 1);
            else if ("string" === typeof e) o = 5;
            else e: switch (e) {
               case k:
                  return Ls(n.children, a, i, t);
               case E:
                  o = 8, a |= 8;
                  break;
               case C:
                  return (e = Ps(12, n, t, 2 | a)).elementType = C, e.lanes = i, e;
               case j:
                  return (e = Ps(13, n, t, a)).elementType = j, e.lanes = i, e;
               case T:
                  return (e = Ps(19, n, t, a)).elementType = T, e.lanes = i, e;
               case z:
                  return Rs(n, a, i, t);
               default:
                  if ("object" === typeof e && null !== e) switch (e.$$typeof) {
                     case O:
                        o = 10;
                        break e;
                     case N:
                        o = 9;
                        break e;
                     case _:
                        o = 11;
                        break e;
                     case P:
                        o = 14;
                        break e;
                     case I:
                        o = 16, r = null;
                        break e
                  }
                  throw Error(l(130, null == e ? e : typeof e, ""))
            }
            return (t = Ps(o, n, t, a)).elementType = e, t.type = r, t.lanes = i, t
         }

         function Ls(e, t, n, r) {
            return (e = Ps(7, e, r, t)).lanes = n, e
         }

         function Rs(e, t, n, r) {
            return (e = Ps(22, e, r, t)).elementType = z, e.lanes = n, e.stateNode = {
               isHidden: !1
            }, e
         }

         function Ds(e, t, n) {
            return (e = Ps(6, e, null, t)).lanes = n, e
         }

         function Fs(e, t, n) {
            return (t = Ps(4, null !== e.children ? e.children : [], e.key, t)).lanes = n, t.stateNode = {
               containerInfo: e.containerInfo,
               pendingChildren: null,
               implementation: e.implementation
            }, t
         }

         function As(e, t, n, r, a) {
            this.tag = t, this.containerInfo = e, this.finishedWork = this.pingCache = this.current = this.pendingChildren = null, this.timeoutHandle = -1, this.callbackNode = this.pendingContext = this.context = null, this.callbackPriority = 0, this.eventTimes = vt(0), this.expirationTimes = vt(-1), this.entangledLanes = this.finishedLanes = this.mutableReadLanes = this.expiredLanes = this.pingedLanes = this.suspendedLanes = this.pendingLanes = 0, this.entanglements = vt(0), this.identifierPrefix = r, this.onRecoverableError = a, this.mutableSourceEagerHydrationData = null
         }

         function Us(e, t, n, r, a, l, i, o, u) {
            return e = new As(e, t, n, o, u), 1 === t ? (t = 1, !0 === l && (t |= 8)) : t = 0, l = Ps(3, null, null, t), e.current = l, l.stateNode = e, l.memoizedState = {
               element: r,
               isDehydrated: n,
               cache: null,
               transitions: null,
               pendingSuspenseBoundaries: null
            }, Pl(l), e
         }

         function Hs(e, t, n) {
            var r = 3 < arguments.length && void 0 !== arguments[3] ? arguments[3] : null;
            return {
               $$typeof: S,
               key: null == r ? null : "" + r,
               children: e,
               containerInfo: t,
               implementation: n
            }
         }

         function Ws(e) {
            if (!e) return Na;
            e: {
               if (We(e = e._reactInternals) !== e || 1 !== e.tag) throw Error(l(170));
               var t = e;do {
                  switch (t.tag) {
                     case 3:
                        t = t.stateNode.context;
                        break e;
                     case 1:
                        if (Ia(t.type)) {
                           t = t.stateNode.__reactInternalMemoizedMergedChildContext;
                           break e
                        }
                  }
                  t = t.return
               } while (null !== t);
               throw Error(l(171))
            }
            if (1 === e.tag) {
               var n = e.type;
               if (Ia(n)) return La(e, n, t)
            }
            return t
         }

         function Vs(e, t, n, r, a, l, i, o, u) {
            return (e = Us(n, r, !0, e, 0, l, 0, o, u)).context = Ws(null), n = e.current, (l = zl(r = es(), a = ts(n))).callback = void 0 !== t && null !== t ? t : null, Ml(n, l, a), e.current.lanes = a, gt(e, a, r), rs(e, r), e
         }

         function Bs(e, t, n, r) {
            var a = t.current,
               l = es(),
               i = ts(a);
            return n = Ws(n), null === t.context ? t.context = n : t.pendingContext = n, (t = zl(l, i)).payload = {
               element: e
            }, null !== (r = void 0 === r ? null : r) && (t.callback = r), null !== (e = Ml(a, t, i)) && (ns(e, a, i, l), Ll(e, a, i)), i
         }

         function $s(e) {
            return (e = e.current).child ? (e.child.tag, e.child.stateNode) : null
         }

         function qs(e, t) {
            if (null !== (e = e.memoizedState) && null !== e.dehydrated) {
               var n = e.retryLane;
               e.retryLane = 0 !== n && n < t ? n : t
            }
         }

         function Qs(e, t) {
            qs(e, t), (e = e.alternate) && qs(e, t)
         }
         ku = function (e, t, n) {
            if (null !== e)
               if (e.memoizedProps !== t.pendingProps || ja.current) wo = !0;
               else {
                  if (0 === (e.lanes & n) && 0 === (128 & t.flags)) return wo = !1,
                     function (e, t, n) {
                        switch (t.tag) {
                           case 3:
                              To(t), pl();
                              break;
                           case 5:
                              li(t);
                              break;
                           case 1:
                              Ia(t.type) && Ra(t);
                              break;
                           case 4:
                              ri(t, t.stateNode.containerInfo);
                              break;
                           case 10:
                              var r = t.type._context,
                                 a = t.memoizedProps.value;
                              Oa(gl, r._currentValue), r._currentValue = a;
                              break;
                           case 13:
                              if (null !== (r = t.memoizedState)) return null !== r.dehydrated ? (Oa(oi, 1 & oi.current), t.flags |= 128, null) : 0 !== (n & t.child.childLanes) ? Do(e, t, n) : (Oa(oi, 1 & oi.current), null !== (e = Bo(e, t, n)) ? e.sibling : null);
                              Oa(oi, 1 & oi.current);
                              break;
                           case 19:
                              if (r = 0 !== (n & t.childLanes), 0 !== (128 & e.flags)) {
                                 if (r) return Wo(e, t, n);
                                 t.flags |= 128
                              }
                              if (null !== (a = t.memoizedState) && (a.rendering = null, a.tail = null, a.lastEffect = null), Oa(oi, oi.current), r) break;
                              return null;
                           case 22:
                           case 23:
                              return t.lanes = 0, Co(e, t, n)
                        }
                        return Bo(e, t, n)
                     }(e, t, n);
                  wo = 0 !== (131072 & e.flags)
               }
            else wo = !1, al && 0 !== (1048576 & t.flags) && Ja(t, qa, t.index);
            switch (t.lanes = 0, t.tag) {
               case 2:
                  var r = t.type;
                  Vo(e, t), e = t.pendingProps;
                  var a = Pa(t, _a.current);
                  El(t, n), a = ki(null, t, r, e, a, n);
                  var i = Ei();
                  return t.flags |= 1, "object" === typeof a && null !== a && "function" === typeof a.render && void 0 === a.$$typeof ? (t.tag = 1, t.memoizedState = null, t.updateQueue = null, Ia(r) ? (i = !0, Ra(t)) : i = !1, t.memoizedState = null !== a.state && void 0 !== a.state ? a.state : null, Pl(t), a.updater = Hl, t.stateNode = a, a._reactInternals = t, $l(t, r, e, n), t = jo(null, t, r, !0, i, n)) : (t.tag = 0, al && i && el(t), xo(null, t, a, n), t = t.child), t;
               case 16:
                  r = t.elementType;
                  e: {
                     switch (Vo(e, t), e = t.pendingProps, r = (a = r._init)(r._payload), t.type = r, a = t.tag = function (e) {
                           if ("function" === typeof e) return Is(e) ? 1 : 0;
                           if (void 0 !== e && null !== e) {
                              if ((e = e.$$typeof) === _) return 11;
                              if (e === P) return 14
                           }
                           return 2
                        }(r), e = vl(r, e), a) {
                        case 0:
                           t = No(null, t, r, e, n);
                           break e;
                        case 1:
                           t = _o(null, t, r, e, n);
                           break e;
                        case 11:
                           t = So(null, t, r, e, n);
                           break e;
                        case 14:
                           t = ko(null, t, r, vl(r.type, e), n);
                           break e
                     }
                     throw Error(l(306, r, ""))
                  }
                  return t;
               case 0:
                  return r = t.type, a = t.pendingProps, No(e, t, r, a = t.elementType === r ? a : vl(r, a), n);
               case 1:
                  return r = t.type, a = t.pendingProps, _o(e, t, r, a = t.elementType === r ? a : vl(r, a), n);
               case 3:
                  e: {
                     if (To(t), null === e) throw Error(l(387));r = t.pendingProps,
                     a = (i = t.memoizedState).element,
                     Il(e, t),
                     Dl(t, r, null, n);
                     var o = t.memoizedState;
                     if (r = o.element, i.isDehydrated) {
                        if (i = {
                              element: r,
                              isDehydrated: !1,
                              cache: o.cache,
                              pendingSuspenseBoundaries: o.pendingSuspenseBoundaries,
                              transitions: o.transitions
                           }, t.updateQueue.baseState = i, t.memoizedState = i, 256 & t.flags) {
                           t = Po(e, t, r, n, a = so(Error(l(423)), t));
                           break e
                        }
                        if (r !== a) {
                           t = Po(e, t, r, n, a = so(Error(l(424)), t));
                           break e
                        }
                        for (rl = sa(t.stateNode.containerInfo.firstChild), nl = t, al = !0, ll = null, n = Gl(t, null, r, n), t.child = n; n;) n.flags = -3 & n.flags | 4096, n = n.sibling
                     } else {
                        if (pl(), r === a) {
                           t = Bo(e, t, n);
                           break e
                        }
                        xo(e, t, r, n)
                     }
                     t = t.child
                  }
                  return t;
               case 5:
                  return li(t), null === e && sl(t), r = t.type, a = t.pendingProps, i = null !== e ? e.memoizedProps : null, o = a.children, na(r, a) ? o = null : null !== i && na(r, i) && (t.flags |= 32), Oo(e, t), xo(e, t, o, n), t.child;
               case 6:
                  return null === e && sl(t), null;
               case 13:
                  return Do(e, t, n);
               case 4:
                  return ri(t, t.stateNode.containerInfo), r = t.pendingProps, null === e ? t.child = Xl(t, null, r, n) : xo(e, t, r, n), t.child;
               case 11:
                  return r = t.type, a = t.pendingProps, So(e, t, r, a = t.elementType === r ? a : vl(r, a), n);
               case 7:
                  return xo(e, t, t.pendingProps, n), t.child;
               case 8:
               case 12:
                  return xo(e, t, t.pendingProps.children, n), t.child;
               case 10:
                  e: {
                     if (r = t.type._context, a = t.pendingProps, i = t.memoizedProps, o = a.value, Oa(gl, r._currentValue), r._currentValue = o, null !== i)
                        if (or(i.value, o)) {
                           if (i.children === a.children && !ja.current) {
                              t = Bo(e, t, n);
                              break e
                           }
                        } else
                           for (null !== (i = t.child) && (i.return = t); null !== i;) {
                              var u = i.dependencies;
                              if (null !== u) {
                                 o = i.child;
                                 for (var s = u.firstContext; null !== s;) {
                                    if (s.context === r) {
                                       if (1 === i.tag) {
                                          (s = zl(-1, n & -n)).tag = 2;
                                          var c = i.updateQueue;
                                          if (null !== c) {
                                             var d = (c = c.shared).pending;
                                             null === d ? s.next = s : (s.next = d.next, d.next = s), c.pending = s
                                          }
                                       }
                                       i.lanes |= n, null !== (s = i.alternate) && (s.lanes |= n), kl(i.return, n, t), u.lanes |= n;
                                       break
                                    }
                                    s = s.next
                                 }
                              } else if (10 === i.tag) o = i.type === t.type ? null : i.child;
                              else if (18 === i.tag) {
                                 if (null === (o = i.return)) throw Error(l(341));
                                 o.lanes |= n, null !== (u = o.alternate) && (u.lanes |= n), kl(o, n, t), o = i.sibling
                              } else o = i.child;
                              if (null !== o) o.return = i;
                              else
                                 for (o = i; null !== o;) {
                                    if (o === t) {
                                       o = null;
                                       break
                                    }
                                    if (null !== (i = o.sibling)) {
                                       i.return = o.return, o = i;
                                       break
                                    }
                                    o = o.return
                                 }
                              i = o
                           }
                     xo(e, t, a.children, n),
                     t = t.child
                  }
                  return t;
               case 9:
                  return a = t.type, r = t.pendingProps.children, El(t, n), r = r(a = Cl(a)), t.flags |= 1, xo(e, t, r, n), t.child;
               case 14:
                  return a = vl(r = t.type, t.pendingProps), ko(e, t, r, a = vl(r.type, a), n);
               case 15:
                  return Eo(e, t, t.type, t.pendingProps, n);
               case 17:
                  return r = t.type, a = t.pendingProps, a = t.elementType === r ? a : vl(r, a), Vo(e, t), t.tag = 1, Ia(r) ? (e = !0, Ra(t)) : e = !1, El(t, n), Vl(t, r, a), $l(t, r, a, n), jo(null, t, r, !0, e, n);
               case 19:
                  return Wo(e, t, n);
               case 22:
                  return Co(e, t, n)
            }
            throw Error(l(156, t.tag))
         };
         var Ks = "function" === typeof reportError ? reportError : function (e) {
            console.error(e)
         };

         function Ys(e) {
            this._internalRoot = e
         }

         function Xs(e) {
            this._internalRoot = e
         }

         function Gs(e) {
            return !(!e || 1 !== e.nodeType && 9 !== e.nodeType && 11 !== e.nodeType)
         }

         function Zs(e) {
            return !(!e || 1 !== e.nodeType && 9 !== e.nodeType && 11 !== e.nodeType && (8 !== e.nodeType || " react-mount-point-unstable " !== e.nodeValue))
         }

         function Js() {}

         function ec(e, t, n, r, a) {
            var l = n._reactRootContainer;
            if (l) {
               var i = l;
               if ("function" === typeof a) {
                  var o = a;
                  a = function () {
                     var e = $s(i);
                     o.call(e)
                  }
               }
               Bs(t, i, e, a)
            } else i = function (e, t, n, r, a) {
               if (a) {
                  if ("function" === typeof r) {
                     var l = r;
                     r = function () {
                        var e = $s(i);
                        l.call(e)
                     }
                  }
                  var i = Vs(t, r, e, 0, null, !1, 0, "", Js);
                  return e._reactRootContainer = i, e[ma] = i.current, Wr(8 === e.nodeType ? e.parentNode : e), cs(), i
               }
               for (; a = e.lastChild;) e.removeChild(a);
               if ("function" === typeof r) {
                  var o = r;
                  r = function () {
                     var e = $s(u);
                     o.call(e)
                  }
               }
               var u = Us(e, 0, !1, null, 0, !1, 0, "", Js);
               return e._reactRootContainer = u, e[ma] = u.current, Wr(8 === e.nodeType ? e.parentNode : e), cs((function () {
                  Bs(t, u, n, r)
               })), u
            }(n, t, e, a, r);
            return $s(i)
         }
         Xs.prototype.render = Ys.prototype.render = function (e) {
            var t = this._internalRoot;
            if (null === t) throw Error(l(409));
            Bs(e, t, null, null)
         }, Xs.prototype.unmount = Ys.prototype.unmount = function () {
            var e = this._internalRoot;
            if (null !== e) {
               this._internalRoot = null;
               var t = e.containerInfo;
               cs((function () {
                  Bs(null, e, null, null)
               })), t[ma] = null
            }
         }, Xs.prototype.unstable_scheduleHydration = function (e) {
            if (e) {
               var t = Et();
               e = {
                  blockedOn: null,
                  target: e,
                  priority: t
               };
               for (var n = 0; n < zt.length && 0 !== t && t < zt[n].priority; n++);
               zt.splice(n, 0, e), 0 === n && Dt(e)
            }
         }, xt = function (e) {
            switch (e.tag) {
               case 3:
                  var t = e.stateNode;
                  if (t.current.memoizedState.isDehydrated) {
                     var n = dt(t.pendingLanes);
                     0 !== n && (yt(t, 1 | n), rs(t, Ge()), 0 === (6 & _u) && (Wu = Ge() + 500, Wa()))
                  }
                  break;
               case 13:
                  cs((function () {
                     var t = jl(e, 1);
                     if (null !== t) {
                        var n = es();
                        ns(t, e, 1, n)
                     }
                  })), Qs(e, 1)
            }
         }, St = function (e) {
            if (13 === e.tag) {
               var t = jl(e, 134217728);
               if (null !== t) ns(t, e, 134217728, es());
               Qs(e, 134217728)
            }
         }, kt = function (e) {
            if (13 === e.tag) {
               var t = ts(e),
                  n = jl(e, t);
               if (null !== n) ns(n, e, t, es());
               Qs(e, t)
            }
         }, Et = function () {
            return bt
         }, Ct = function (e, t) {
            var n = bt;
            try {
               return bt = e, t()
            } finally {
               bt = n
            }
         }, Se = function (e, t, n) {
            switch (t) {
               case "input":
                  if (Z(e, n), t = n.name, "radio" === n.type && null != t) {
                     for (n = e; n.parentNode;) n = n.parentNode;
                     for (n = n.querySelectorAll("input[name=" + JSON.stringify("" + t) + '][type="radio"]'), t = 0; t < n.length; t++) {
                        var r = n[t];
                        if (r !== e && r.form === e.form) {
                           var a = xa(r);
                           if (!a) throw Error(l(90));
                           Q(r), Z(r, a)
                        }
                     }
                  }
                  break;
               case "textarea":
                  le(e, n);
                  break;
               case "select":
                  null != (t = n.value) && ne(e, !!n.multiple, t, !1)
            }
         }, _e = ss, je = cs;
         var tc = {
               usingClientEntryPoint: !1,
               Events: [ba, wa, xa, Oe, Ne, ss]
            },
            nc = {
               findFiberByHostInstance: ya,
               bundleType: 0,
               version: "18.2.0",
               rendererPackageName: "react-dom"
            },
            rc = {
               bundleType: nc.bundleType,
               version: nc.version,
               rendererPackageName: nc.rendererPackageName,
               rendererConfig: nc.rendererConfig,
               overrideHookState: null,
               overrideHookStateDeletePath: null,
               overrideHookStateRenamePath: null,
               overrideProps: null,
               overridePropsDeletePath: null,
               overridePropsRenamePath: null,
               setErrorHandler: null,
               setSuspenseHandler: null,
               scheduleUpdate: null,
               currentDispatcherRef: w.ReactCurrentDispatcher,
               findHostInstanceByFiber: function (e) {
                  return null === (e = $e(e)) ? null : e.stateNode
               },
               findFiberByHostInstance: nc.findFiberByHostInstance || function () {
                  return null
               },
               findHostInstancesForRefresh: null,
               scheduleRefresh: null,
               scheduleRoot: null,
               setRefreshHandler: null,
               getCurrentFiber: null,
               reconcilerVersion: "18.2.0-next-9e3b772b8-20220608"
            };
         if ("undefined" !== typeof __REACT_DEVTOOLS_GLOBAL_HOOK__) {
            var ac = __REACT_DEVTOOLS_GLOBAL_HOOK__;
            if (!ac.isDisabled && ac.supportsFiber) try {
               at = ac.inject(rc), lt = ac
            } catch (ce) {}
         }
         t.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED = tc, t.createPortal = function (e, t) {
            var n = 2 < arguments.length && void 0 !== arguments[2] ? arguments[2] : null;
            if (!Gs(t)) throw Error(l(200));
            return Hs(e, t, null, n)
         }, t.createRoot = function (e, t) {
            if (!Gs(e)) throw Error(l(299));
            var n = !1,
               r = "",
               a = Ks;
            return null !== t && void 0 !== t && (!0 === t.unstable_strictMode && (n = !0), void 0 !== t.identifierPrefix && (r = t.identifierPrefix), void 0 !== t.onRecoverableError && (a = t.onRecoverableError)), t = Us(e, 1, !1, null, 0, n, 0, r, a), e[ma] = t.current, Wr(8 === e.nodeType ? e.parentNode : e), new Ys(t)
         }, t.findDOMNode = function (e) {
            if (null == e) return null;
            if (1 === e.nodeType) return e;
            var t = e._reactInternals;
            if (void 0 === t) {
               if ("function" === typeof e.render) throw Error(l(188));
               throw e = Object.keys(e).join(","), Error(l(268, e))
            }
            return e = null === (e = $e(t)) ? null : e.stateNode
         }, t.flushSync = function (e) {
            return cs(e)
         }, t.hydrate = function (e, t, n) {
            if (!Zs(t)) throw Error(l(200));
            return ec(null, e, t, !0, n)
         }, t.hydrateRoot = function (e, t, n) {
            if (!Gs(e)) throw Error(l(405));
            var r = null != n && n.hydratedSources || null,
               a = !1,
               i = "",
               o = Ks;
            if (null !== n && void 0 !== n && (!0 === n.unstable_strictMode && (a = !0), void 0 !== n.identifierPrefix && (i = n.identifierPrefix), void 0 !== n.onRecoverableError && (o = n.onRecoverableError)), t = Vs(t, null, e, 1, null != n ? n : null, a, 0, i, o), e[ma] = t.current, Wr(e), r)
               for (e = 0; e < r.length; e++) a = (a = (n = r[e])._getVersion)(n._source), null == t.mutableSourceEagerHydrationData ? t.mutableSourceEagerHydrationData = [n, a] : t.mutableSourceEagerHydrationData.push(n, a);
            return new Xs(t)
         }, t.render = function (e, t, n) {
            if (!Zs(t)) throw Error(l(200));
            return ec(null, e, t, !1, n)
         }, t.unmountComponentAtNode = function (e) {
            if (!Zs(e)) throw Error(l(40));
            return !!e._reactRootContainer && (cs((function () {
               ec(null, null, e, !1, (function () {
                  e._reactRootContainer = null, e[ma] = null
               }))
            })), !0)
         }, t.unstable_batchedUpdates = ss, t.unstable_renderSubtreeIntoContainer = function (e, t, n, r) {
            if (!Zs(n)) throw Error(l(200));
            if (null == e || void 0 === e._reactInternals) throw Error(l(38));
            return ec(e, t, n, !1, r)
         }, t.version = "18.2.0-next-9e3b772b8-20220608"
      },
      250: function (e, t, n) {
         "use strict";
         var r = n(164);
         t.createRoot = r.createRoot, t.hydrateRoot = r.hydrateRoot
      },
      164: function (e, t, n) {
         "use strict";
         ! function e() {
            if ("undefined" !== typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ && "function" === typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE) try {
               __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(e)
            } catch (t) {
               console.error(t)
            }
         }(), e.exports = n(463)
      },
      374: function (e, t, n) {
         "use strict";
         var r = n(791),
            a = Symbol.for("react.element"),
            l = Symbol.for("react.fragment"),
            i = Object.prototype.hasOwnProperty,
            o = r.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,
            u = {
               key: !0,
               ref: !0,
               __self: !0,
               __source: !0
            };

         function s(e, t, n) {
            var r, l = {},
               s = null,
               c = null;
            for (r in void 0 !== n && (s = "" + n), void 0 !== t.key && (s = "" + t.key), void 0 !== t.ref && (c = t.ref), t) i.call(t, r) && !u.hasOwnProperty(r) && (l[r] = t[r]);
            if (e && e.defaultProps)
               for (r in t = e.defaultProps) void 0 === l[r] && (l[r] = t[r]);
            return {
               $$typeof: a,
               type: e,
               key: s,
               ref: c,
               props: l,
               _owner: o.current
            }
         }
         t.Fragment = l, t.jsx = s, t.jsxs = s
      },
      117: function (e, t) {
         "use strict";
         var n = Symbol.for("react.element"),
            r = Symbol.for("react.portal"),
            a = Symbol.for("react.fragment"),
            l = Symbol.for("react.strict_mode"),
            i = Symbol.for("react.profiler"),
            o = Symbol.for("react.provider"),
            u = Symbol.for("react.context"),
            s = Symbol.for("react.forward_ref"),
            c = Symbol.for("react.suspense"),
            d = Symbol.for("react.memo"),
            f = Symbol.for("react.lazy"),
            p = Symbol.iterator;
         var m = {
               isMounted: function () {
                  return !1
               },
               enqueueForceUpdate: function () {},
               enqueueReplaceState: function () {},
               enqueueSetState: function () {}
            },
            h = Object.assign,
            v = {};

         function g(e, t, n) {
            this.props = e, this.context = t, this.refs = v, this.updater = n || m
         }

         function y() {}

         function b(e, t, n) {
            this.props = e, this.context = t, this.refs = v, this.updater = n || m
         }
         g.prototype.isReactComponent = {}, g.prototype.setState = function (e, t) {
            if ("object" !== typeof e && "function" !== typeof e && null != e) throw Error("setState(...): takes an object of state variables to update or a function which returns an object of state variables.");
            this.updater.enqueueSetState(this, e, t, "setState")
         }, g.prototype.forceUpdate = function (e) {
            this.updater.enqueueForceUpdate(this, e, "forceUpdate")
         }, y.prototype = g.prototype;
         var w = b.prototype = new y;
         w.constructor = b, h(w, g.prototype), w.isPureReactComponent = !0;
         var x = Array.isArray,
            S = Object.prototype.hasOwnProperty,
            k = {
               current: null
            },
            E = {
               key: !0,
               ref: !0,
               __self: !0,
               __source: !0
            };

         function C(e, t, r) {
            var a, l = {},
               i = null,
               o = null;
            if (null != t)
               for (a in void 0 !== t.ref && (o = t.ref), void 0 !== t.key && (i = "" + t.key), t) S.call(t, a) && !E.hasOwnProperty(a) && (l[a] = t[a]);
            var u = arguments.length - 2;
            if (1 === u) l.children = r;
            else if (1 < u) {
               for (var s = Array(u), c = 0; c < u; c++) s[c] = arguments[c + 2];
               l.children = s
            }
            if (e && e.defaultProps)
               for (a in u = e.defaultProps) void 0 === l[a] && (l[a] = u[a]);
            return {
               $$typeof: n,
               type: e,
               key: i,
               ref: o,
               props: l,
               _owner: k.current
            }
         }

         function O(e) {
            return "object" === typeof e && null !== e && e.$$typeof === n
         }
         var N = /\/+/g;

         function _(e, t) {
            return "object" === typeof e && null !== e && null != e.key ? function (e) {
               var t = {
                  "=": "=0",
                  ":": "=2"
               };
               return "$" + e.replace(/[=:]/g, (function (e) {
                  return t[e]
               }))
            }("" + e.key) : t.toString(36)
         }

         function j(e, t, a, l, i) {
            var o = typeof e;
            "undefined" !== o && "boolean" !== o || (e = null);
            var u = !1;
            if (null === e) u = !0;
            else switch (o) {
               case "string":
               case "number":
                  u = !0;
                  break;
               case "object":
                  switch (e.$$typeof) {
                     case n:
                     case r:
                        u = !0
                  }
            }
            if (u) return i = i(u = e), e = "" === l ? "." + _(u, 0) : l, x(i) ? (a = "", null != e && (a = e.replace(N, "$&/") + "/"), j(i, t, a, "", (function (e) {
               return e
            }))) : null != i && (O(i) && (i = function (e, t) {
               return {
                  $$typeof: n,
                  type: e.type,
                  key: t,
                  ref: e.ref,
                  props: e.props,
                  _owner: e._owner
               }
            }(i, a + (!i.key || u && u.key === i.key ? "" : ("" + i.key).replace(N, "$&/") + "/") + e)), t.push(i)), 1;
            if (u = 0, l = "" === l ? "." : l + ":", x(e))
               for (var s = 0; s < e.length; s++) {
                  var c = l + _(o = e[s], s);
                  u += j(o, t, a, c, i)
               } else if (c = function (e) {
                     return null === e || "object" !== typeof e ? null : "function" === typeof (e = p && e[p] || e["@@iterator"]) ? e : null
                  }(e), "function" === typeof c)
                  for (e = c.call(e), s = 0; !(o = e.next()).done;) u += j(o = o.value, t, a, c = l + _(o, s++), i);
               else if ("object" === o) throw t = String(e), Error("Objects are not valid as a React child (found: " + ("[object Object]" === t ? "object with keys {" + Object.keys(e).join(", ") + "}" : t) + "). If you meant to render a collection of children, use an array instead.");
            return u
         }

         function T(e, t, n) {
            if (null == e) return e;
            var r = [],
               a = 0;
            return j(e, r, "", "", (function (e) {
               return t.call(n, e, a++)
            })), r
         }

         function P(e) {
            if (-1 === e._status) {
               var t = e._result;
               (t = t()).then((function (t) {
                  0 !== e._status && -1 !== e._status || (e._status = 1, e._result = t)
               }), (function (t) {
                  0 !== e._status && -1 !== e._status || (e._status = 2, e._result = t)
               })), -1 === e._status && (e._status = 0, e._result = t)
            }
            if (1 === e._status) return e._result.default;
            throw e._result
         }
         var I = {
               current: null
            },
            z = {
               transition: null
            },
            M = {
               ReactCurrentDispatcher: I,
               ReactCurrentBatchConfig: z,
               ReactCurrentOwner: k
            };
         t.Children = {
            map: T,
            forEach: function (e, t, n) {
               T(e, (function () {
                  t.apply(this, arguments)
               }), n)
            },
            count: function (e) {
               var t = 0;
               return T(e, (function () {
                  t++
               })), t
            },
            toArray: function (e) {
               return T(e, (function (e) {
                  return e
               })) || []
            },
            only: function (e) {
               if (!O(e)) throw Error("React.Children.only expected to receive a single React element child.");
               return e
            }
         }, t.Component = g, t.Fragment = a, t.Profiler = i, t.PureComponent = b, t.StrictMode = l, t.Suspense = c, t.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED = M, t.cloneElement = function (e, t, r) {
            if (null === e || void 0 === e) throw Error("React.cloneElement(...): The argument must be a React element, but you passed " + e + ".");
            var a = h({}, e.props),
               l = e.key,
               i = e.ref,
               o = e._owner;
            if (null != t) {
               if (void 0 !== t.ref && (i = t.ref, o = k.current), void 0 !== t.key && (l = "" + t.key), e.type && e.type.defaultProps) var u = e.type.defaultProps;
               for (s in t) S.call(t, s) && !E.hasOwnProperty(s) && (a[s] = void 0 === t[s] && void 0 !== u ? u[s] : t[s])
            }
            var s = arguments.length - 2;
            if (1 === s) a.children = r;
            else if (1 < s) {
               u = Array(s);
               for (var c = 0; c < s; c++) u[c] = arguments[c + 2];
               a.children = u
            }
            return {
               $$typeof: n,
               type: e.type,
               key: l,
               ref: i,
               props: a,
               _owner: o
            }
         }, t.createContext = function (e) {
            return (e = {
               $$typeof: u,
               _currentValue: e,
               _currentValue2: e,
               _threadCount: 0,
               Provider: null,
               Consumer: null,
               _defaultValue: null,
               _globalName: null
            }).Provider = {
               $$typeof: o,
               _context: e
            }, e.Consumer = e
         }, t.createElement = C, t.createFactory = function (e) {
            var t = C.bind(null, e);
            return t.type = e, t
         }, t.createRef = function () {
            return {
               current: null
            }
         }, t.forwardRef = function (e) {
            return {
               $$typeof: s,
               render: e
            }
         }, t.isValidElement = O, t.lazy = function (e) {
            return {
               $$typeof: f,
               _payload: {
                  _status: -1,
                  _result: e
               },
               _init: P
            }
         }, t.memo = function (e, t) {
            return {
               $$typeof: d,
               type: e,
               compare: void 0 === t ? null : t
            }
         }, t.startTransition = function (e) {
            var t = z.transition;
            z.transition = {};
            try {
               e()
            } finally {
               z.transition = t
            }
         }, t.unstable_act = function () {
            throw Error("act(...) is not supported in production builds of React.")
         }, t.useCallback = function (e, t) {
            return I.current.useCallback(e, t)
         }, t.useContext = function (e) {
            return I.current.useContext(e)
         }, t.useDebugValue = function () {}, t.useDeferredValue = function (e) {
            return I.current.useDeferredValue(e)
         }, t.useEffect = function (e, t) {
            return I.current.useEffect(e, t)
         }, t.useId = function () {
            return I.current.useId()
         }, t.useImperativeHandle = function (e, t, n) {
            return I.current.useImperativeHandle(e, t, n)
         }, t.useInsertionEffect = function (e, t) {
            return I.current.useInsertionEffect(e, t)
         }, t.useLayoutEffect = function (e, t) {
            return I.current.useLayoutEffect(e, t)
         }, t.useMemo = function (e, t) {
            return I.current.useMemo(e, t)
         }, t.useReducer = function (e, t, n) {
            return I.current.useReducer(e, t, n)
         }, t.useRef = function (e) {
            return I.current.useRef(e)
         }, t.useState = function (e) {
            return I.current.useState(e)
         }, t.useSyncExternalStore = function (e, t, n) {
            return I.current.useSyncExternalStore(e, t, n)
         }, t.useTransition = function () {
            return I.current.useTransition()
         }, t.version = "18.2.0"
      },
      791: function (e, t, n) {
         "use strict";
         e.exports = n(117)
      },
      184: function (e, t, n) {
         "use strict";
         e.exports = n(374)
      },
      813: function (e, t) {
         "use strict";

         function n(e, t) {
            var n = e.length;
            e.push(t);
            e: for (; 0 < n;) {
               var r = n - 1 >>> 1,
                  a = e[r];
               if (!(0 < l(a, t))) break e;
               e[r] = t, e[n] = a, n = r
            }
         }

         function r(e) {
            return 0 === e.length ? null : e[0]
         }

         function a(e) {
            if (0 === e.length) return null;
            var t = e[0],
               n = e.pop();
            if (n !== t) {
               e[0] = n;
               e: for (var r = 0, a = e.length, i = a >>> 1; r < i;) {
                  var o = 2 * (r + 1) - 1,
                     u = e[o],
                     s = o + 1,
                     c = e[s];
                  if (0 > l(u, n)) s < a && 0 > l(c, u) ? (e[r] = c, e[s] = n, r = s) : (e[r] = u, e[o] = n, r = o);
                  else {
                     if (!(s < a && 0 > l(c, n))) break e;
                     e[r] = c, e[s] = n, r = s
                  }
               }
            }
            return t
         }

         function l(e, t) {
            var n = e.sortIndex - t.sortIndex;
            return 0 !== n ? n : e.id - t.id
         }
         if ("object" === typeof performance && "function" === typeof performance.now) {
            var i = performance;
            t.unstable_now = function () {
               return i.now()
            }
         } else {
            var o = Date,
               u = o.now();
            t.unstable_now = function () {
               return o.now() - u
            }
         }
         var s = [],
            c = [],
            d = 1,
            f = null,
            p = 3,
            m = !1,
            h = !1,
            v = !1,
            g = "function" === typeof setTimeout ? setTimeout : null,
            y = "function" === typeof clearTimeout ? clearTimeout : null,
            b = "undefined" !== typeof setImmediate ? setImmediate : null;

         function w(e) {
            for (var t = r(c); null !== t;) {
               if (null === t.callback) a(c);
               else {
                  if (!(t.startTime <= e)) break;
                  a(c), t.sortIndex = t.expirationTime, n(s, t)
               }
               t = r(c)
            }
         }

         function x(e) {
            if (v = !1, w(e), !h)
               if (null !== r(s)) h = !0, z(S);
               else {
                  var t = r(c);
                  null !== t && M(x, t.startTime - e)
               }
         }

         function S(e, n) {
            h = !1, v && (v = !1, y(O), O = -1), m = !0;
            var l = p;
            try {
               for (w(n), f = r(s); null !== f && (!(f.expirationTime > n) || e && !j());) {
                  var i = f.callback;
                  if ("function" === typeof i) {
                     f.callback = null, p = f.priorityLevel;
                     var o = i(f.expirationTime <= n);
                     n = t.unstable_now(), "function" === typeof o ? f.callback = o : f === r(s) && a(s), w(n)
                  } else a(s);
                  f = r(s)
               }
               if (null !== f) var u = !0;
               else {
                  var d = r(c);
                  null !== d && M(x, d.startTime - n), u = !1
               }
               return u
            } finally {
               f = null, p = l, m = !1
            }
         }
         "undefined" !== typeof navigator && void 0 !== navigator.scheduling && void 0 !== navigator.scheduling.isInputPending && navigator.scheduling.isInputPending.bind(navigator.scheduling);
         var k, E = !1,
            C = null,
            O = -1,
            N = 5,
            _ = -1;

         function j() {
            return !(t.unstable_now() - _ < N)
         }

         function T() {
            if (null !== C) {
               var e = t.unstable_now();
               _ = e;
               var n = !0;
               try {
                  n = C(!0, e)
               } finally {
                  n ? k() : (E = !1, C = null)
               }
            } else E = !1
         }
         if ("function" === typeof b) k = function () {
            b(T)
         };
         else if ("undefined" !== typeof MessageChannel) {
            var P = new MessageChannel,
               I = P.port2;
            P.port1.onmessage = T, k = function () {
               I.postMessage(null)
            }
         } else k = function () {
            g(T, 0)
         };

         function z(e) {
            C = e, E || (E = !0, k())
         }

         function M(e, n) {
            O = g((function () {
               e(t.unstable_now())
            }), n)
         }
         t.unstable_IdlePriority = 5, t.unstable_ImmediatePriority = 1, t.unstable_LowPriority = 4, t.unstable_NormalPriority = 3, t.unstable_Profiling = null, t.unstable_UserBlockingPriority = 2, t.unstable_cancelCallback = function (e) {
            e.callback = null
         }, t.unstable_continueExecution = function () {
            h || m || (h = !0, z(S))
         }, t.unstable_forceFrameRate = function (e) {
            0 > e || 125 < e ? console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported") : N = 0 < e ? Math.floor(1e3 / e) : 5
         }, t.unstable_getCurrentPriorityLevel = function () {
            return p
         }, t.unstable_getFirstCallbackNode = function () {
            return r(s)
         }, t.unstable_next = function (e) {
            switch (p) {
               case 1:
               case 2:
               case 3:
                  var t = 3;
                  break;
               default:
                  t = p
            }
            var n = p;
            p = t;
            try {
               return e()
            } finally {
               p = n
            }
         }, t.unstable_pauseExecution = function () {}, t.unstable_requestPaint = function () {}, t.unstable_runWithPriority = function (e, t) {
            switch (e) {
               case 1:
               case 2:
               case 3:
               case 4:
               case 5:
                  break;
               default:
                  e = 3
            }
            var n = p;
            p = e;
            try {
               return t()
            } finally {
               p = n
            }
         }, t.unstable_scheduleCallback = function (e, a, l) {
            var i = t.unstable_now();
            switch ("object" === typeof l && null !== l ? l = "number" === typeof (l = l.delay) && 0 < l ? i + l : i : l = i, e) {
               case 1:
                  var o = -1;
                  break;
               case 2:
                  o = 250;
                  break;
               case 5:
                  o = 1073741823;
                  break;
               case 4:
                  o = 1e4;
                  break;
               default:
                  o = 5e3
            }
            return e = {
               id: d++,
               callback: a,
               priorityLevel: e,
               startTime: l,
               expirationTime: o = l + o,
               sortIndex: -1
            }, l > i ? (e.sortIndex = l, n(c, e), null === r(s) && e === r(c) && (v ? (y(O), O = -1) : v = !0, M(x, l - i))) : (e.sortIndex = o, n(s, e), h || m || (h = !0, z(S))), e
         }, t.unstable_shouldYield = j, t.unstable_wrapCallback = function (e) {
            var t = p;
            return function () {
               var n = p;
               p = t;
               try {
                  return e.apply(this, arguments)
               } finally {
                  p = n
               }
            }
         }
      },
      296: function (e, t, n) {
         "use strict";
         e.exports = n(813)
      }
   },
   t = {};

function n(r) {
   var a = t[r];
   if (void 0 !== a) return a.exports;
   var l = t[r] = {
      exports: {}
   };
   return e[r].call(l.exports, l, l.exports, n), l.exports
}
n.n = function (e) {
      var t = e && e.__esModule ? function () {
         return e.default
      } : function () {
         return e
      };
      return n.d(t, {
         a: t
      }), t
   }, n.d = function (e, t) {
      for (var r in t) n.o(t, r) && !n.o(e, r) && Object.defineProperty(e, r, {
         enumerable: !0,
         get: t[r]
      })
   }, n.g = function () {
      if ("object" === typeof globalThis) return globalThis;
      try {
         return this || new Function("return this")()
      } catch (e) {
         if ("object" === typeof window) return window
      }
   }(), n.o = function (e, t) {
      return Object.prototype.hasOwnProperty.call(e, t)
   }, n.p = "/",
   function () {
      "use strict";
      var e, t = n(791),
         r = n(250),
         a = n(945),
         l = n.n(a);

      function i(e, t) {
         (null == t || t > e.length) && (t = e.length);
         for (var n = 0, r = new Array(t); n < t; n++) r[n] = e[n];
         return r
      }

      function o(e, t) {
         return function (e) {
            if (Array.isArray(e)) return e
         }(e) || function (e, t) {
            var n = null == e ? null : "undefined" !== typeof Symbol && e[Symbol.iterator] || e["@@iterator"];
            if (null != n) {
               var r, a, l = [],
                  i = !0,
                  o = !1;
               try {
                  for (n = n.call(e); !(i = (r = n.next()).done) && (l.push(r.value), !t || l.length !== t); i = !0);
               } catch (u) {
                  o = !0, a = u
               } finally {
                  try {
                     i || null == n.return || n.return()
                  } finally {
                     if (o) throw a
                  }
               }
               return l
            }
         }(e, t) || function (e, t) {
            if (e) {
               if ("string" === typeof e) return i(e, t);
               var n = Object.prototype.toString.call(e).slice(8, -1);
               return "Object" === n && e.constructor && (n = e.constructor.name), "Map" === n || "Set" === n ? Array.from(e) : "Arguments" === n || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n) ? i(e, t) : void 0
            }
         }(e, t) || function () {
            throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")
         }()
      }
      var u = ["title", "titleId"];

      function s() {
         return s = Object.assign ? Object.assign.bind() : function (e) {
            for (var t = 1; t < arguments.length; t++) {
               var n = arguments[t];
               for (var r in n) Object.prototype.hasOwnProperty.call(n, r) && (e[r] = n[r])
            }
            return e
         }, s.apply(this, arguments)
      }

      function c(e, t) {
         if (null == e) return {};
         var n, r, a = function (e, t) {
            if (null == e) return {};
            var n, r, a = {},
               l = Object.keys(e);
            for (r = 0; r < l.length; r++) n = l[r], t.indexOf(n) >= 0 || (a[n] = e[n]);
            return a
         }(e, t);
         if (Object.getOwnPropertySymbols) {
            var l = Object.getOwnPropertySymbols(e);
            for (r = 0; r < l.length; r++) n = l[r], t.indexOf(n) >= 0 || Object.prototype.propertyIsEnumerable.call(e, n) && (a[n] = e[n])
         }
         return a
      }

      function d(n, r) {
         var a = n.title,
            l = n.titleId,
            i = c(n, u);
         return t.createElement("svg", s({
            xmlns: "http://www.w3.org/2000/svg",
            width: 16,
            height: 16,
            fill: "currentColor",
            className: "bi bi-list",
            viewBox: "0 0 16 16",
            ref: r,
            "aria-labelledby": l
         }, i), a ? t.createElement("title", {
            id: l
         }, a) : null, e || (e = t.createElement("path", {
            fillRule: "evenodd",
            d: "M2.5 12a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5zm0-4a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5zm0-4a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5z"
         })))
      }
      var f, p = t.forwardRef(d),
         m = (n.p, ["title", "titleId"]);

      function h() {
         return h = Object.assign ? Object.assign.bind() : function (e) {
            for (var t = 1; t < arguments.length; t++) {
               var n = arguments[t];
               for (var r in n) Object.prototype.hasOwnProperty.call(n, r) && (e[r] = n[r])
            }
            return e
         }, h.apply(this, arguments)
      }

      function v(e, t) {
         if (null == e) return {};
         var n, r, a = function (e, t) {
            if (null == e) return {};
            var n, r, a = {},
               l = Object.keys(e);
            for (r = 0; r < l.length; r++) n = l[r], t.indexOf(n) >= 0 || (a[n] = e[n]);
            return a
         }(e, t);
         if (Object.getOwnPropertySymbols) {
            var l = Object.getOwnPropertySymbols(e);
            for (r = 0; r < l.length; r++) n = l[r], t.indexOf(n) >= 0 || Object.prototype.propertyIsEnumerable.call(e, n) && (a[n] = e[n])
         }
         return a
      }

      function g(e, n) {
         var r = e.title,
            a = e.titleId,
            l = v(e, m);
         return t.createElement("svg", h({
            xmlns: "http://www.w3.org/2000/svg",
            width: 16,
            height: 16,
            fill: "currentColor",
            className: "bi bi-x-lg",
            viewBox: "0 0 16 16",
            ref: n,
            "aria-labelledby": a
         }, l), r ? t.createElement("title", {
            id: a
         }, r) : null, f || (f = t.createElement("path", {
            d: "M2.146 2.854a.5.5 0 1 1 .708-.708L8 7.293l5.146-5.147a.5.5 0 0 1 .708.708L8.707 8l5.147 5.146a.5.5 0 0 1-.708.708L8 8.707l-5.146 5.147a.5.5 0 0 1-.708-.708L7.293 8 2.146 2.854Z"
         })))
      }
      var y, b = t.forwardRef(g),
         w = (n.p, n(184)),
         x = function () {
            var e = o((0, t.useState)(!1), 2),
               n = e[0],
               r = e[1];
            return (0, w.jsxs)("div", {
               className: "py-8 ",
               children: [(0, w.jsxs)("div", {
                  className: "flex justify-between items-center relative",
                  children: [(0, w.jsx)("div", {
                     children: (0, w.jsx)("h1", {
                        className: "text-2xl font-newton tracking-widest",
                        children: (0, w.jsx)("a", {
                           href: "#main",
                           children: "TV KILLS"
                        })
                     })
                  }), (0, w.jsxs)("div", {
                     className: "sm:hidden pt-3",
                     children: [!n && (0, w.jsx)("button", {
                        onClick: function () {
                           r(!0)
                        },
                        children: (0, w.jsx)(p, {
                           width: 30,
                           height: 30
                        })
                     }), n && (0, w.jsx)("button", {
                        onClick: function () {
                           r(!1)
                        },
                        children: (0, w.jsx)(b, {
                           width: 25,
                           height: 25
                        })
                     })]
                  }), (0, w.jsx)("div", {
                     className: "absolute sm:relative top-20 sm:top-auto w-full sm:w-auto ".concat(n ? "" : "hidden sm:block"),
                     children: (0, w.jsxs)("ul", {
                        className: "flex flex-col sm:flex-row justify-center sm:items-center gap-6 sm:gap-8 text-lg font-newton",
                        children: [(0, w.jsx)("li", {
                           children: (0, w.jsx)("a", {
                              className: "transition-all duration-200 ease-linear hover:text-blue-400",
                              href: "#gallery",
                              children: "Gallery"
                           })
                        }), (0, w.jsx)("li", {
                           children: (0, w.jsx)("a", {
                              className: "transition-all duration-200 ease-linear hover:text-blue-400",
                              href: "#roadmap",
                              children: "Roadmap"
                           })
                        }), (0, w.jsx)("li", {
                           children: (0, w.jsx)("a", {
                              className: "transition-all duration-200 ease-linear hover:text-blue-400",
                              href: "#team",
                              children: "Team"
                           })
                        }), (0, w.jsx)("li", {
                           children: (0, w.jsx)("a", {
                              className: "transition-all duration-200 ease-linear hover:text-blue-400",
                              href: "#faq",
                              children: "FAQ"
                           })
                        })]
                     })
                  })]
               }), n && (0, w.jsx)("div", {
                  className: "h-[170px] sm:hidden"
               })]
            })
         },
         S = "images/HEAD-GIF.GIF",
         k = ["title", "titleId"];

      function E() {
         return E = Object.assign ? Object.assign.bind() : function (e) {
            for (var t = 1; t < arguments.length; t++) {
               var n = arguments[t];
               for (var r in n) Object.prototype.hasOwnProperty.call(n, r) && (e[r] = n[r])
            }
            return e
         }, E.apply(this, arguments)
      }

      function C(e, t) {
         if (null == e) return {};
         var n, r, a = function (e, t) {
            if (null == e) return {};
            var n, r, a = {},
               l = Object.keys(e);
            for (r = 0; r < l.length; r++) n = l[r], t.indexOf(n) >= 0 || (a[n] = e[n]);
            return a
         }(e, t);
         if (Object.getOwnPropertySymbols) {
            var l = Object.getOwnPropertySymbols(e);
            for (r = 0; r < l.length; r++) n = l[r], t.indexOf(n) >= 0 || Object.prototype.propertyIsEnumerable.call(e, n) && (a[n] = e[n])
         }
         return a
      }

      function O(e, n) {
         var r = e.title,
            a = e.titleId,
            l = C(e, k);
         return t.createElement("svg", E({
            xmlns: "http://www.w3.org/2000/svg",
            width: 16,
            height: 16,
            fill: "currentColor",
            className: "bi bi-twitter",
            viewBox: "0 0 16 16",
            ref: n,
            "aria-labelledby": a
         }, l), r ? t.createElement("title", {
            id: a
         }, r) : null, y || (y = t.createElement("path", {
            d: "M5.026 15c6.038 0 9.341-5.003 9.341-9.334 0-.14 0-.282-.006-.422A6.685 6.685 0 0 0 16 3.542a6.658 6.658 0 0 1-1.889.518 3.301 3.301 0 0 0 1.447-1.817 6.533 6.533 0 0 1-2.087.793A3.286 3.286 0 0 0 7.875 6.03a9.325 9.325 0 0 1-6.767-3.429 3.289 3.289 0 0 0 1.018 4.382A3.323 3.323 0 0 1 .64 6.575v.045a3.288 3.288 0 0 0 2.632 3.218 3.203 3.203 0 0 1-.865.115 3.23 3.23 0 0 1-.614-.057 3.283 3.283 0 0 0 3.067 2.277A6.588 6.588 0 0 1 .78 13.58a6.32 6.32 0 0 1-.78-.045A9.344 9.344 0 0 0 5.026 15z"
         })))
      }
      var N = t.forwardRef(O),
         _ = (n.p, function () {
            return (0, w.jsx)("div", {
               className: "py-14",
               children: (0, w.jsxs)("div", {
                  className: "flex flex-col text-center lg:text-left lg:flex-row justify-between items-center gap-10",
                  children: [(0, w.jsxs)("div", {
                     className: "flex-1",
                     "data-aos": "fade-up",
                     children: [(0, w.jsx)("h1", {
                        className: "text-3xl sm:text-5xl xl:text-6xl leading-relaxed font-newton tracking-wider",
                        children: "TV KILLS"
                     }), (0, w.jsx)("p", {
                        className: "mt-10 leading-8",
                        children: "Earth has been taken over by secret invaders who control the media and corporations. Humanity's only connection to their past lives comes from extreme escapism."
                     }), (0, w.jsx)("div", {
                        className: "flex justify-center lg:justify-start items-center gap-10 mt-10",
                        children: (0, w.jsx)("a", {
                           href: "https://twitter.com/TVKillsCNFT",
                           target: "_blank",
                           rel: "noreferrer",
                           "data-aos": "zoom-in-up-right",
                           children: (0, w.jsxs)("button", {
                              className: "flex justify-center items-center gap-2 bg-white text-black py-3 px-10 border-2 border-white transition-all duration-200 ease-in hover:bg-transparent hover:text-white",
                              children: [(0, w.jsx)(N, {
                                 color: "#1DA1F2"
                              }), "Twitter"]
                           })
                        })
                     })]
                  }), (0, w.jsx)("div", {
                     className: "flex-1 flex justify-end h-[500px]",
                     "data-aos": "fade-left",
                     children: (0, w.jsx)("img", {
                        src: S,
                        alt: "",
                        className: "h-full object-contain"
                     })
                  })]
               })
            })
         }),
         j = n(164),
         T = function (e, t) {
            return T = Object.setPrototypeOf || {
               __proto__: []
            }
            instanceof Array && function (e, t) {
               e.__proto__ = t
            } || function (e, t) {
               for (var n in t) Object.prototype.hasOwnProperty.call(t, n) && (e[n] = t[n])
            }, T(e, t)
         };

      function P(e, t) {
         if ("function" !== typeof t && null !== t) throw new TypeError("Class extends value " + String(t) + " is not a constructor or null");

         function n() {
            this.constructor = e
         }
         T(e, t), e.prototype = null === t ? Object.create(t) : (n.prototype = t.prototype, new n)
      }
      var I = function () {
         return I = Object.assign || function (e) {
            for (var t, n = 1, r = arguments.length; n < r; n++)
               for (var a in t = arguments[n]) Object.prototype.hasOwnProperty.call(t, a) && (e[a] = t[a]);
            return e
         }, I.apply(this, arguments)
      };

      function z(e, t) {
         var n = {};
         for (var r in e) Object.prototype.hasOwnProperty.call(e, r) && t.indexOf(r) < 0 && (n[r] = e[r]);
         if (null != e && "function" === typeof Object.getOwnPropertySymbols) {
            var a = 0;
            for (r = Object.getOwnPropertySymbols(e); a < r.length; a++) t.indexOf(r[a]) < 0 && Object.prototype.propertyIsEnumerable.call(e, r[a]) && (n[r[a]] = e[r[a]])
         }
         return n
      }
      var M = "undefined" !== typeof globalThis ? globalThis : "undefined" !== typeof window ? window : "undefined" !== typeof n.g ? n.g : "undefined" !== typeof self ? self : {};
      var L = function (e) {
            var t = typeof e;
            return null != e && ("object" == t || "function" == t)
         },
         R = "object" == typeof M && M && M.Object === Object && M,
         D = "object" == typeof self && self && self.Object === Object && self,
         F = R || D || Function("return this")(),
         A = F,
         U = function () {
            return A.Date.now()
         },
         H = /\s/;
      var W = function (e) {
            for (var t = e.length; t-- && H.test(e.charAt(t)););
            return t
         },
         V = /^\s+/;
      var B = function (e) {
            return e ? e.slice(0, W(e) + 1).replace(V, "") : e
         },
         $ = F.Symbol,
         q = $,
         Q = Object.prototype,
         K = Q.hasOwnProperty,
         Y = Q.toString,
         X = q ? q.toStringTag : void 0;
      var G = function (e) {
            var t = K.call(e, X),
               n = e[X];
            try {
               e[X] = void 0;
               var r = !0
            } catch (l) {}
            var a = Y.call(e);
            return r && (t ? e[X] = n : delete e[X]), a
         },
         Z = Object.prototype.toString;
      var J = G,
         ee = function (e) {
            return Z.call(e)
         },
         te = $ ? $.toStringTag : void 0;
      var ne = function (e) {
            return null == e ? void 0 === e ? "[object Undefined]" : "[object Null]" : te && te in Object(e) ? J(e) : ee(e)
         },
         re = function (e) {
            return null != e && "object" == typeof e
         };
      var ae = B,
         le = L,
         ie = function (e) {
            return "symbol" == typeof e || re(e) && "[object Symbol]" == ne(e)
         },
         oe = /^[-+]0x[0-9a-f]+$/i,
         ue = /^0b[01]+$/i,
         se = /^0o[0-7]+$/i,
         ce = parseInt;
      var de = L,
         fe = U,
         pe = function (e) {
            if ("number" == typeof e) return e;
            if (ie(e)) return NaN;
            if (le(e)) {
               var t = "function" == typeof e.valueOf ? e.valueOf() : e;
               e = le(t) ? t + "" : t
            }
            if ("string" != typeof e) return 0 === e ? e : +e;
            e = ae(e);
            var n = ue.test(e);
            return n || se.test(e) ? ce(e.slice(2), n ? 2 : 8) : oe.test(e) ? NaN : +e
         },
         me = Math.max,
         he = Math.min;
      var ve = function (e, t, n) {
            var r, a, l, i, o, u, s = 0,
               c = !1,
               d = !1,
               f = !0;
            if ("function" != typeof e) throw new TypeError("Expected a function");

            function p(t) {
               var n = r,
                  l = a;
               return r = a = void 0, s = t, i = e.apply(l, n)
            }

            function m(e) {
               return s = e, o = setTimeout(v, t), c ? p(e) : i
            }

            function h(e) {
               var n = e - u;
               return void 0 === u || n >= t || n < 0 || d && e - s >= l
            }

            function v() {
               var e = fe();
               if (h(e)) return g(e);
               o = setTimeout(v, function (e) {
                  var n = t - (e - u);
                  return d ? he(n, l - (e - s)) : n
               }(e))
            }

            function g(e) {
               return o = void 0, f && r ? p(e) : (r = a = void 0, i)
            }

            function y() {
               var e = fe(),
                  n = h(e);
               if (r = arguments, a = this, u = e, n) {
                  if (void 0 === o) return m(u);
                  if (d) return clearTimeout(o), o = setTimeout(v, t), p(u)
               }
               return void 0 === o && (o = setTimeout(v, t)), i
            }
            return t = pe(t) || 0, de(n) && (c = !!n.leading, l = (d = "maxWait" in n) ? me(pe(n.maxWait) || 0, t) : l, f = "trailing" in n ? !!n.trailing : f), y.cancel = function () {
               void 0 !== o && clearTimeout(o), s = 0, r = u = a = o = void 0
            }, y.flush = function () {
               return void 0 === o ? i : g(fe())
            }, y
         },
         ge = ve,
         ye = L;
      var be = function (e, t, n) {
            var r = !0,
               a = !0;
            if ("function" != typeof e) throw new TypeError("Expected a function");
            return ye(n) && (r = "leading" in n ? !!n.leading : r, a = "trailing" in n ? !!n.trailing : a), ge(e, t, {
               leading: r,
               maxWait: t,
               trailing: a
            })
         },
         we = function (e, t, n, r) {
            switch (t) {
               case "debounce":
                  return ve(e, n, r);
               case "throttle":
                  return be(e, n, r);
               default:
                  return e
            }
         },
         xe = function (e) {
            return "function" === typeof e
         },
         Se = function () {
            return "undefined" === typeof window
         },
         ke = function (e) {
            return e instanceof Element || e instanceof HTMLDocument
         },
         Ee = function (e, t, n, r) {
            return function (a) {
               var l = a.width,
                  i = a.height;
               t((function (t) {
                  return t.width === l && t.height === i || t.width === l && !r || t.height === i && !n ? t : (e && xe(e) && e(l, i), {
                     width: l,
                     height: i
                  })
               }))
            }
         };
      ! function (e) {
         function n(n) {
            var r = e.call(this, n) || this;
            r.cancelHandler = function () {
               r.resizeHandler && r.resizeHandler.cancel && (r.resizeHandler.cancel(), r.resizeHandler = null)
            }, r.attachObserver = function () {
               var e = r.props,
                  t = e.targetRef,
                  n = e.observerOptions;
               if (!Se()) {
                  t && t.current && (r.targetRef.current = t.current);
                  var a = r.getElement();
                  a && (r.observableElement && r.observableElement === a || (r.observableElement = a, r.resizeObserver.observe(a, n)))
               }
            }, r.getElement = function () {
               var e = r.props,
                  t = e.querySelector,
                  n = e.targetDomEl;
               if (Se()) return null;
               if (t) return document.querySelector(t);
               if (n && ke(n)) return n;
               if (r.targetRef && ke(r.targetRef.current)) return r.targetRef.current;
               var a = (0, j.findDOMNode)(r);
               if (!a) return null;
               switch (r.getRenderType()) {
                  case "renderProp":
                  case "childFunction":
                  case "child":
                  case "childArray":
                     return a;
                  default:
                     return a.parentElement
               }
            }, r.createResizeHandler = function (e) {
               var t = r.props,
                  n = t.handleWidth,
                  a = void 0 === n || n,
                  l = t.handleHeight,
                  i = void 0 === l || l,
                  o = t.onResize;
               if (a || i) {
                  var u = Ee(o, r.setState.bind(r), a, i);
                  e.forEach((function (e) {
                     var t = e && e.contentRect || {},
                        n = t.width,
                        a = t.height;
                     !r.skipOnMount && !Se() && u({
                        width: n,
                        height: a
                     }), r.skipOnMount = !1
                  }))
               }
            }, r.getRenderType = function () {
               var e = r.props,
                  n = e.render,
                  a = e.children;
               return xe(n) ? "renderProp" : xe(a) ? "childFunction" : (0, t.isValidElement)(a) ? "child" : Array.isArray(a) ? "childArray" : "parent"
            };
            var a = n.skipOnMount,
               l = n.refreshMode,
               i = n.refreshRate,
               o = void 0 === i ? 1e3 : i,
               u = n.refreshOptions;
            return r.state = {
               width: void 0,
               height: void 0
            }, r.skipOnMount = a, r.targetRef = (0, t.createRef)(), r.observableElement = null, Se() || (r.resizeHandler = we(r.createResizeHandler, l, o, u), r.resizeObserver = new window.ResizeObserver(r.resizeHandler)), r
         }
         P(n, e), n.prototype.componentDidMount = function () {
            this.attachObserver()
         }, n.prototype.componentDidUpdate = function () {
            this.attachObserver()
         }, n.prototype.componentWillUnmount = function () {
            Se() || (this.observableElement = null, this.resizeObserver.disconnect(), this.cancelHandler())
         }, n.prototype.render = function () {
            var e, n = this.props,
               r = n.render,
               a = n.children,
               l = n.nodeType,
               i = void 0 === l ? "div" : l,
               o = this.state,
               u = {
                  width: o.width,
                  height: o.height,
                  targetRef: this.targetRef
               };
            switch (this.getRenderType()) {
               case "renderProp":
                  return r && r(u);
               case "childFunction":
                  return (e = a)(u);
               case "child":
                  if ((e = a).type && "string" === typeof e.type) {
                     var s = z(u, ["targetRef"]);
                     return (0, t.cloneElement)(e, s)
                  }
                  return (0, t.cloneElement)(e, u);
               case "childArray":
                  return (e = a).map((function (e) {
                     return !!e && (0, t.cloneElement)(e, u)
                  }));
               default:
                  return t.createElement(i, null)
            }
         }
      }(t.PureComponent);
      var Ce = Se() ? t.useEffect : t.useLayoutEffect;

      function Oe() {
         return Oe = Object.assign || function (e) {
            for (var t = 1; t < arguments.length; t++) {
               var n = arguments[t];
               for (var r in n) Object.prototype.hasOwnProperty.call(n, r) && (e[r] = n[r])
            }
            return e
         }, Oe.apply(this, arguments)
      }

      function Ne(e, t) {
         return Ne = Object.setPrototypeOf || function (e, t) {
            return e.__proto__ = t, e
         }, Ne(e, t)
      }

      function _e(e, t) {
         (null == t || t > e.length) && (t = e.length);
         for (var n = 0, r = new Array(t); n < t; n++) r[n] = e[n];
         return r
      }

      function je(e, t) {
         var n = "undefined" !== typeof Symbol && e[Symbol.iterator] || e["@@iterator"];
         if (n) return (n = n.call(e)).next.bind(n);
         if (Array.isArray(e) || (n = function (e, t) {
               if (e) {
                  if ("string" === typeof e) return _e(e, t);
                  var n = Object.prototype.toString.call(e).slice(8, -1);
                  return "Object" === n && e.constructor && (n = e.constructor.name), "Map" === n || "Set" === n ? Array.from(e) : "Arguments" === n || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n) ? _e(e, t) : void 0
               }
            }(e)) || t && e && "number" === typeof e.length) {
            n && (e = n);
            var r = 0;
            return function () {
               return r >= e.length ? {
                  done: !0
               } : {
                  done: !1,
                  value: e[r++]
               }
            }
         }
         throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")
      }
      var Te, Pe = function (e) {
         var n, r;

         function a(n) {
            var r;
            (r = e.call(this, n) || this).validateProps = function () {
               var e = r.props,
                  t = e.currentVisibleSlide,
                  n = e.maxVisibleSlide,
                  a = e.fadeDistance,
                  l = e.customScales;
               if (e.data.length < (n + 1) / 2) throw Error("you must have more than (maxVisibleSlide + 1) / 2 data item");
               if (t && t % 2 !== 1 || n % 2 !== 1) throw Error("currentVisibleSlide or maxVisibleSlide must be an odd number");
               if (t && t > n) throw Error("currentVisibleSlide must be smaller than maxVisibleSlide");
               if (void 0 !== a && (a > 1 || a < 0)) throw Error("fadeDistance is a percentage value in the range of 0 - 1");
               if (l && l.length !== (n + 3) / 2) throw Error("customScales must have lengh (maxVisibleSlide + 3) / 2")
            }, r.initializeProperties = function (e) {
               void 0 === e && (e = !1), r.validateProps();
               for (var t = r.props, n = t.carouselWidth, a = t.slideWidth, l = t.currentVisibleSlide, i = t.maxVisibleSlide, o = l || i, u = (o - 1) / 2, s = Math.max(u + 1, 1), c = i + 2, d = (i + 1) / 2, f = r.calculateScaleAndOffsets(s), p = f.offsets, m = f.scaledOffsets, h = f.scales, v = e ? Array(c).fill(null) : r.state.renderedSlides.filter((function (e) {
                     var t = e.slideIndex;
                     return -1 === e.dataIndex || Math.abs(t) <= r.slidePerSide
                  })), g = {}, y = e ? (c - 1) / 2 : v.findIndex((function (e) {
                     return 0 === e.slideIndex
                  })), b = e ? 0 : v[y].dataIndex, w = 0, x = n / 2 - a / 2, S = function (t) {
                     var n = p[t],
                        a = h[t],
                        l = w + n;
                     [-t, t].forEach((function (n) {
                        var i = y + n,
                           o = n >= 0 ? l : -l,
                           u = t === s ? 0 : 1,
                           c = r.modDataRange(b + n);
                        v[i] = {
                           dataIndex: c,
                           scale: a,
                           position: o,
                           slideIndex: n,
                           opacity: u,
                           zIndex: d - Math.abs(n),
                           key: e ? n : v[i].key
                        }, g[n] = {
                           position: o,
                           scale: a,
                           opacity: u
                        }
                     })), 0 !== t && (w += m[t])
                  }, k = 0; k <= s; k++) S(k);
               for (var E = -s; E <= s; E++) g[E].maxTransformDistance = {}, g[E].maxTransformScale = {}, g[E].maxTransformOpacity = {
                  left: E === 1 - s || E === s ? 1 : 0,
                  right: E === -s || E === s - 1 ? 1 : 0
               }, g[E].slideIndex = E, E === -s ? (g[E].maxTransformDistance.left = 0, g[E].maxTransformScale.left = 0) : (g[E].maxTransformDistance.left = g[E].position - g[E - 1].position, g[E].maxTransformScale.left = Math.abs(g[E].scale - g[E - 1].scale)), E === s ? (g[E].maxTransformDistance.right = 0, g[E].maxTransformScale.right = 0) : (g[E].maxTransformDistance.right = g[E + 1].position - g[E].position, g[E].maxTransformScale.right = Math.abs(g[E + 1].scale - g[E].scale));
               if (i > o)
                  for (var C = (i + 1) / 2, O = s + 1; O <= C; O++)
                     for (var N = 1; N >= 0; N--) {
                        var _ = y + (1 === N ? O : -O),
                           j = 1 === N ? O : -O,
                           T = e ? _ + (1 === N ? -1 : 1) : _;
                        v[_] = {
                           scale: v[T].scale,
                           position: v[T].position,
                           key: e ? -j : v[_].key,
                           dataIndex: -1,
                           slideIndex: j,
                           opacity: 0,
                           zIndex: 0
                        }
                     }
               var P = Object.values(g);
               return P.sort((function (e, t) {
                  return e.position - t.position
               })), {
                  renderedSlides: v,
                  centerSlideRelativeIndex: y,
                  slideInfoMap: g,
                  slidePerSide: s,
                  newRenderedSlides: v,
                  sortedSlideInfo: P,
                  centerPosition: x,
                  renderedSlidePerSide: d
               }
            }, r.calculateScaleAndOffsets = function (e) {
               for (var t = r.props, n = t.carouselWidth, l = t.slideWidth, i = t.customScales, o = t.fadeDistance, u = n / 2 - l / 2, s = [1], c = [l], d = 1; d <= e; d++) {
                  var f = i ? i[d] : Math.pow(a.defaultScaleFactor, d);
                  s.push(f), c.push(l * f)
               }
               var p = c.slice(1),
                  m = u;
               void 0 !== o && (p = c.slice(1, e), m = u * (1 - o));
               for (var h = p.reduce((function (e, t) {
                     return e + t
                  }), 0), v = h ? m / h : 0, g = [0], y = [0], b = 1; b <= e; b++) {
                  var w = void 0 !== o && b === e,
                     x = s[b];
                  g[b] = w ? o * u : l * x * v, y[b] = g[b] + l * ((1 - x) / 2)
               }
               return {
                  offsets: y,
                  scaledOffsets: g,
                  scales: s
               }
            }, r.getZIndex = function (e) {
               return r.renderedSlidePerSide - Math.abs(e)
            }, r.updateHeight = function () {
               if (!r.props.height) {
                  var e = r.getSlideDOMInfo(0).slideDOM,
                     t = parseInt(window.getComputedStyle(e).height);
                  t !== r.height && (r.height = t, r.forceUpdate())
               }
            }, r.modDataRange = function (e) {
               var t = r.props.data.length;
               return (e % t + t) % t
            }, r.debouncedClearInvisibleSlide = function () {
               var e = r.props.transitionTime;
               clearTimeout(r.clearSlideTimeout), r.clearSlideTimeout = setTimeout(r.clearUselessSlide, void 0 !== e ? e : a.defaultTransitionTime)
            }, r.clearUselessSlide = function () {
               r.addedSlide = 0;
               var e = r.state.renderedSlides.filter((function (e) {
                  var t = e.slideIndex,
                     n = e.dataIndex;
                  return Math.abs(t) <= r.slidePerSide || -1 === n
               }));
               r.setState({
                  renderedSlides: e
               })
            }, r.safeGetSlideInfo = function (e) {
               var t = e;
               return t > r.slidePerSide ? t = r.slidePerSide : t < -r.slidePerSide && (t = -r.slidePerSide), r.slideInfoMap[t]
            }, r.getInsertionInfo = function (e) {
               return {
                  newAddedSlideIndex: e > 0 ? r.slidePerSide - e + 1 : -r.slidePerSide - e - 1,
                  targetSlideIndex: e > 0 ? r.slidePerSide : -r.slidePerSide,
                  requireMoreSlide: function (t, n) {
                     return e > 0 ? t <= n : t >= n
                  },
                  updateCount: e > 0 ? 1 : -1
               }
            }, r.moveCarousel = function (e, t) {
               void 0 === t && (t = !1);
               var n = r.state.renderedSlides,
                  a = r.props.onActiveSlideChange,
                  l = 0,
                  i = n.map((function (t) {
                     var n = t.slideIndex,
                        a = t.dataIndex;
                     if (-1 === a) return t;
                     0 === n && (l = r.modDataRange(a + e));
                     var i = n + -e,
                        o = r.safeGetSlideInfo(i);
                     return Oe({}, t, {
                        slideIndex: i,
                        position: o.position,
                        scale: o.scale,
                        opacity: o.opacity,
                        zIndex: r.getZIndex(i)
                     })
                  }));
               0 !== e && function () {
                  var t = e > 0 ? r.slidePerSide : -r.slidePerSide;
                  r.addedSlide += Math.abs(e);
                  for (var n = r.getInsertionInfo(e), a = n.newAddedSlideIndex, l = n.requireMoreSlide, o = n.updateCount, u = n.targetSlideIndex; l(a, u);) {
                     if (!i.find((function (e) {
                           return e.slideIndex === a
                        }))) {
                        var s = i.findIndex((function (e) {
                              var t = e.slideIndex,
                                 n = e.dataIndex;
                              return t === a - o && -1 !== n
                           })),
                           c = r.slideInfoMap[t],
                           d = c.scale,
                           f = c.position,
                           p = r.modDataRange(i[s].dataIndex + o);
                        r.keyCount += 1;
                        var m = {
                           scale: d,
                           position: f,
                           opacity: 0,
                           zIndex: r.getZIndex(a) - r.addedSlide,
                           slideIndex: a,
                           dataIndex: p,
                           key: r.keyCount
                        };
                        i.splice(e > 0 ? s + 1 : s, 0, m)
                     }
                     a += o
                  }
               }(), 0 !== e && a && a(l), r.setState((function () {
                  return {
                     swipeStarted: !1,
                     renderedSlides: i,
                     swipRight: !t && e < 0
                  }
               }), (function () {
                  setTimeout((function () {
                     r.resetSlides()
                  }), 0)
               }))
            }, r.getSlideDOMInfo = function (e) {
               var t = r.props.slideWidth,
                  n = r.listRef.current,
                  a = n.getElementsByClassName("react-stacked-center-carousel-slide-" + e)[0],
                  l = a.getBoundingClientRect(),
                  i = n.getBoundingClientRect().left,
                  o = l.width / t,
                  u = .5 * t * (1 - o);
               return {
                  scale: o,
                  slideDOM: a,
                  slideCenterOffset: l.left - i - u - r.centerPosition
               }
            }, r.getSlideScaleAndOpacity = function (e) {
               var t = r.sortedSlideInfo.find((function (t) {
                     var n = t.position;
                     return Math.ceil(n) >= e
                  })) || r.sortedSlideInfo[r.sortedSlideInfo.length - 1],
                  n = t.position,
                  a = t.slideIndex,
                  l = t.scale,
                  i = t.maxTransformDistance,
                  o = t.maxTransformScale,
                  u = t.maxTransformOpacity,
                  s = t.opacity,
                  c = Math.ceil(n) - e,
                  d = 0 === i.left ? 0 : c / i.left * (a <= 0 ? -1 : 1);
               return {
                  scale: l + o.left * d,
                  opacity: s + u.left * d
               }
            }, r.centerOffset = function (e) {
               var t = r.getSlideDOMInfo(e).slideCenterOffset;
               return Math.abs(r.slideInfoMap[0].position - t)
            }, r.onSwipeStart = function (e) {
               var t = r.props,
                  n = t.onActiveSlideChange;
               if (!t.disableSwipe) {
                  var a = r.getSwipeX(e),
                     l = r.state.renderedSlides;
                  clearTimeout(r.clearSlideTimeout);
                  var i = 0,
                     o = 0;
                  r.centerOffset(-1) < r.centerOffset(0) ? i = 1 : r.centerOffset(1) < r.centerOffset(0) && (i = -1);
                  for (var u, s = [], c = [], d = je(l); !(u = d()).done;) {
                     var f = u.value,
                        p = f.slideIndex,
                        m = f.dataIndex;
                     if (-1 !== m) {
                        var h = p + i;
                        if (!(Math.abs(h) > r.slidePerSide)) {
                           0 === h && (o = m);
                           var v = r.getSlideDOMInfo(p),
                              g = v.slideCenterOffset,
                              y = v.scale,
                              b = r.getSlideScaleAndOpacity(g).opacity,
                              w = r.safeGetSlideInfo(h),
                              x = w.maxTransformDistance,
                              S = w.position;
                           c.push({
                              slideIndex: h,
                              maxLeft: g - S + x.left,
                              maxRight: S + x.right - g
                           }), s.push(Oe({}, f, {
                              scale: y,
                              opacity: b,
                              position: g,
                              slideIndex: h,
                              zIndex: r.getZIndex(h)
                           }))
                        }
                     } else s.push(f), c.push({
                        slideIndex: p,
                        maxLeft: 0,
                        maxRight: 0
                     })
                  }
                  n && 0 !== i && n(o), r.setState({
                     swipeStarted: !0,
                     initalSwipeX: a,
                     renderedSlides: s,
                     prevRenderedSlides: [].concat(s),
                     swipePositionInfo: c
                  })
               }
            }, r.onSwipe = function (e) {
               if (r.state.swipeStarted) {
                  var t = r.state,
                     n = t.initalSwipeX,
                     a = t.prevRenderedSlides,
                     l = t.swipePositionInfo,
                     i = r.props.slideWidth,
                     o = !1,
                     u = n - r.getSwipeX(e),
                     s = Math.abs(u),
                     c = u > 0,
                     d = 10 / i * s,
                     f = 1 - Math.pow(.8, d),
                     p = a.map((function (e, t) {
                        var n = e.position,
                           a = e.slideIndex;
                        if (-1 === e.dataIndex) return e;
                        var i = l[t][c ? "maxLeft" : "maxRight"],
                           u = n + (c ? -1 : 1) * i * f,
                           s = r.getSlideScaleAndOpacity(u),
                           d = s.scale,
                           p = s.opacity,
                           m = e.zIndex;
                        return 1 === Math.abs(a) && r.centerOffset(a) < r.centerOffset(0) && (m = r.maxZIndex, o = !0), Oe({}, e, {
                           position: u,
                           scale: d,
                           opacity: p,
                           zIndex: m
                        })
                     }));
                  r.setState({
                     renderedSlides: p,
                     tempShift: o
                  })
               }
            }, r.resetSlides = function () {
               var e = r.state.renderedSlides.map((function (e) {
                  var t = r.safeGetSlideInfo(e.slideIndex),
                     n = t.opacity,
                     a = t.scale,
                     l = t.position;
                  return Oe({}, e, {
                     zIndex: r.getZIndex(e.slideIndex),
                     opacity: n,
                     scale: a,
                     position: l
                  })
               }));
               r.setState((function () {
                  return {
                     renderedSlides: e,
                     swipRight: !1
                  }
               }), r.debouncedClearInvisibleSlide)
            }, r.onSwipeEnd = function (e) {
               if (r.state.swipeStarted) {
                  var t = r.state.initalSwipeX - r.getSwipeX(e),
                     n = Math.abs(t),
                     a = t > 0,
                     l = r.props.swipeThreshold || 50;
                  r.moveCarousel(n <= l ? 0 : a ? 1 : -1, !0), r.setState({
                     tempShift: !1
                  })
               }
            }, r.goNext = function () {
               r.moveCarousel(1)
            }, r.goBack = function () {
               r.moveCarousel(-1)
            }, r.swipeTo = function (e) {
               r.moveCarousel(e)
            };
            var l = r.initializeProperties(!0),
               i = l.renderedSlides,
               o = l.slideInfoMap,
               u = l.slidePerSide,
               s = l.sortedSlideInfo,
               c = l.centerPosition,
               d = l.renderedSlidePerSide,
               f = r.props.onActiveSlideChange;
            return r.slideInfoMap = o, r.sortedSlideInfo = s, r.slidePerSide = u, r.height = r.props.height || 0, r.listRef = t.createRef(), r.clearSlideTimeout = null, r.keyCount = n.data.length, r.addedSlide = 0, r.centerPosition = c, r.maxZIndex = 100, r.renderedSlidePerSide = d, f && f(0), r.state = {
               initalSwipeX: 0,
               swipeStarted: !1,
               renderedSlides: i,
               prevRenderedSlides: [].concat(i),
               swipePositionInfo: [],
               swipRight: !1,
               tempShift: !1
            }, r
         }
         r = e, (n = a).prototype = Object.create(r.prototype), n.prototype.constructor = n, Ne(n, r);
         var l = a.prototype;
         return l.componentDidMount = function () {
            this.updateHeight()
         }, l.componentWillUnmount = function () {
            clearTimeout(this.clearSlideTimeout)
         }, l.componentDidUpdate = function (e) {
            if (function (e, t) {
                  var n, r;
                  return e.slideWidth !== t.slideWidth || e.carouselWidth !== t.carouselWidth || e.maxVisibleSlide !== t.maxVisibleSlide || e.currentVisibleSlide !== t.currentVisibleSlide || e.fadeDistance !== t.fadeDistance || (null === (n = e.customScales) || void 0 === n ? void 0 : n.join("")) !== (null === (r = t.customScales) || void 0 === r ? void 0 : r.join(""))
               }(this.props, e)) {
               var t = this.initializeProperties(),
                  n = t.slideInfoMap,
                  r = t.slidePerSide,
                  a = t.newRenderedSlides,
                  l = t.sortedSlideInfo,
                  i = t.centerPosition;
               this.slideInfoMap = n, this.sortedSlideInfo = l, this.slidePerSide = r, this.centerPosition = i, this.setState((function () {
                  return {
                     initalSwipeX: 0,
                     renderedSlides: a,
                     prevRenderedSlides: [].concat(a),
                     swipRight: !1
                  }
               }), this.updateHeight)
            }
         }, l.getSwipeX = function (e) {
            if ("m" === e.type[0]) return e.clientX;
            try {
               var t, n;
               return (null === (t = e.touches[0]) || void 0 === t ? void 0 : t.clientX) || (null === (n = e.changedTouches[0]) || void 0 === n ? void 0 : n.clientX)
            } catch (r) {
               throw Error("Something went wrong with getting mouse position")
            }
         }, l.render = function () {
            var e = this,
               n = this.state,
               r = n.swipeStarted,
               l = n.renderedSlides,
               i = n.swipRight,
               o = n.tempShift,
               u = this.props,
               s = u.slideComponent,
               c = u.transitionTime,
               d = void 0 === c ? a.defaultTransitionTime : c,
               f = u.className,
               p = u.data,
               m = u.slideWidth,
               h = u.customTransition,
               v = u.carouselWidth,
               g = u.useGrabCursor,
               y = u.height,
               b = g && (r ? "grabbing" : "grab") || "default";
            return t.createElement("div", {
               className: "react-stacked-center-carousel " + (f || ""),
               onMouseDown: this.onSwipeStart,
               onMouseUp: this.onSwipeEnd,
               onMouseMove: this.onSwipe,
               onMouseLeave: this.onSwipeEnd,
               onTouchStart: this.onSwipeStart,
               onTouchMove: this.onSwipe,
               onTouchEnd: this.onSwipeEnd,
               ref: this.listRef,
               style: {
                  width: v,
                  height: y || this.height,
                  position: "relative",
                  overflow: "hidden",
                  cursor: b
               }
            }, l.map((function (n) {
               var a = n.opacity,
                  l = n.slideIndex,
                  u = n.dataIndex,
                  c = n.position,
                  f = n.scale,
                  v = n.key,
                  g = n.zIndex,
                  y = -1 === u ? "hidden-" + v : l,
                  b = r ? "none" : h || "all " + d + "ms ease, z-index " + d * (i ? .6 : 1) + "ms ease",
                  w = o ? g === e.maxZIndex : 0 === l;
               return t.createElement("div", {
                  key: v,
                  className: "react-stacked-center-carousel-slide-" + y,
                  draggable: !1,
                  style: {
                     position: "absolute",
                     display: "flex",
                     left: "calc(50% - " + m / 2 + "px)",
                     transform: "translateX(" + c + "px) scale(" + f + ")",
                     width: m,
                     transition: b,
                     opacity: a,
                     zIndex: g
                  }
               }, -1 !== u && t.createElement(s, {
                  dataIndex: u,
                  data: p,
                  slideIndex: l,
                  isCenterSlide: w,
                  swipeTo: e.swipeTo
               }))
            })))
         }, a
      }(t.PureComponent);

      function Ie(e) {
         var n = e.render,
            r = e.carouselRef,
            a = function (e) {
               void 0 === e && (e = {});
               var n = e.skipOnMount,
                  r = void 0 !== n && n,
                  a = e.refreshMode,
                  l = e.refreshRate,
                  i = void 0 === l ? 1e3 : l,
                  o = e.refreshOptions,
                  u = e.handleWidth,
                  s = void 0 === u || u,
                  c = e.handleHeight,
                  d = void 0 === c || c,
                  f = e.targetRef,
                  p = e.observerOptions,
                  m = e.onResize,
                  h = (0, t.useRef)(r),
                  v = (0, t.useRef)(null),
                  g = null !== f && void 0 !== f ? f : v,
                  y = (0, t.useRef)(),
                  b = (0, t.useState)({
                     width: void 0,
                     height: void 0
                  }),
                  w = b[0],
                  x = b[1];
               return Ce((function () {
                  if (!Se()) {
                     var e = Ee(m, x, s, d);
                     y.current = we((function (t) {
                        (s || d) && t.forEach((function (t) {
                           var n = t && t.contentRect || {},
                              r = n.width,
                              a = n.height;
                           !h.current && !Se() && e({
                              width: r,
                              height: a
                           }), h.current = !1
                        }))
                     }), a, i, o);
                     var t = new window.ResizeObserver(y.current);
                     return g.current && t.observe(g.current, p),
                        function () {
                           t.disconnect();
                           var e = y.current;
                           e && e.cancel && e.cancel()
                        }
                  }
               }), [a, i, o, s, d, m, p, g.current]), I({
                  ref: g
               }, w)
            }(),
            l = a.width,
            i = a.ref;
         return t.createElement("div", {
            ref: i,
            className: "stacked-carousel-responsive-container",
            style: {
               width: "100%"
            }
         }, l && n(l, r))
      }
      Pe.defaultScaleFactor = .85, Pe.defaultTransitionTime = 450;
      var ze = ["title", "titleId"];

      function Me() {
         return Me = Object.assign ? Object.assign.bind() : function (e) {
            for (var t = 1; t < arguments.length; t++) {
               var n = arguments[t];
               for (var r in n) Object.prototype.hasOwnProperty.call(n, r) && (e[r] = n[r])
            }
            return e
         }, Me.apply(this, arguments)
      }

      function Le(e, t) {
         if (null == e) return {};
         var n, r, a = function (e, t) {
            if (null == e) return {};
            var n, r, a = {},
               l = Object.keys(e);
            for (r = 0; r < l.length; r++) n = l[r], t.indexOf(n) >= 0 || (a[n] = e[n]);
            return a
         }(e, t);
         if (Object.getOwnPropertySymbols) {
            var l = Object.getOwnPropertySymbols(e);
            for (r = 0; r < l.length; r++) n = l[r], t.indexOf(n) >= 0 || Object.prototype.propertyIsEnumerable.call(e, n) && (a[n] = e[n])
         }
         return a
      }

      function Re(e, n) {
         var r = e.title,
            a = e.titleId,
            l = Le(e, ze);
         return t.createElement("svg", Me({
            xmlns: "http://www.w3.org/2000/svg",
            width: 16,
            height: 16,
            fill: "currentColor",
            className: "bi bi-chevron-left",
            viewBox: "0 0 16 16",
            ref: n,
            "aria-labelledby": a
         }, l), r ? t.createElement("title", {
            id: a
         }, r) : null, Te || (Te = t.createElement("path", {
            fillRule: "evenodd",
            d: "M11.354 1.646a.5.5 0 0 1 0 .708L5.707 8l5.647 5.646a.5.5 0 0 1-.708.708l-6-6a.5.5 0 0 1 0-.708l6-6a.5.5 0 0 1 .708 0z"
         })))
      }
      var De, Fe = t.forwardRef(Re),
         Ae = (n.p, ["title", "titleId"]);

      function Ue() {
         return Ue = Object.assign ? Object.assign.bind() : function (e) {
            for (var t = 1; t < arguments.length; t++) {
               var n = arguments[t];
               for (var r in n) Object.prototype.hasOwnProperty.call(n, r) && (e[r] = n[r])
            }
            return e
         }, Ue.apply(this, arguments)
      }

      function He(e, t) {
         if (null == e) return {};
         var n, r, a = function (e, t) {
            if (null == e) return {};
            var n, r, a = {},
               l = Object.keys(e);
            for (r = 0; r < l.length; r++) n = l[r], t.indexOf(n) >= 0 || (a[n] = e[n]);
            return a
         }(e, t);
         if (Object.getOwnPropertySymbols) {
            var l = Object.getOwnPropertySymbols(e);
            for (r = 0; r < l.length; r++) n = l[r], t.indexOf(n) >= 0 || Object.prototype.propertyIsEnumerable.call(e, n) && (a[n] = e[n])
         }
         return a
      }

      function We(e, n) {
         var r = e.title,
            a = e.titleId,
            l = He(e, Ae);
         return t.createElement("svg", Ue({
            xmlns: "http://www.w3.org/2000/svg",
            width: 16,
            height: 16,
            fill: "currentColor",
            className: "bi bi-chevron-right",
            viewBox: "0 0 16 16",
            ref: n,
            "aria-labelledby": a
         }, l), r ? t.createElement("title", {
            id: a
         }, r) : null, De || (De = t.createElement("path", {
            fillRule: "evenodd",
            d: "M4.646 1.646a.5.5 0 0 1 .708 0l6 6a.5.5 0 0 1 0 .708l-6 6a.5.5 0 0 1-.708-.708L10.293 8 4.646 2.354a.5.5 0 0 1 0-.708z"
         })))
      }
      var Ve, Be = t.forwardRef(We),
         $e = (n.p, "images/1.PNG"),
         qe = "images/2.PNG",
         Qe = "images/3.PNG",
         Ke = [{
            cover: S,
            title: "TV HEAD"
         }, {
            cover: $e,
            title: "TV HEAD"
         }, {
            cover: Qe,
            title: "TV HEAD"
         // }, {
         //    cover: Qe,
         //    title: "TV HEAD"
         }, {
            cover: qe,
            title: "TV HEAD"
         }],
         Ye = t.memo((function (e) {
            var t = e.data[e.dataIndex].cover;
            return (0, w.jsx)("div", {
               style: {
                  width: "100%",
                  height: 300,
                  userSelect: "none"
               },
               className: "mx-10",
               children: (0, w.jsx)("img", {
                  style: {
                     height: "100%",
                     width: "100%",
                     objectFit: "cover",
                     borderRadius: 0
                  },
                  draggable: !1,
                  src: t,
                  alt: ""
               })
            })
         })),
         Xe = function () {
            var e = t.useRef();
            return (0, w.jsxs)("div", {
               style: {
                  width: "100%",
                  position: "relative"
               },
               "data-aos": "zoom-out",
               children: [(0, w.jsx)(Ie, {
                  carouselRef: e,
                  render: function (e, t) {
                     var n = 5;
                     e <= 1440 && (n = 5), e <= 1080 && (n = 5), e <= 800 && (n = 3);
                     var r = 400;
                     return e <= 1080 && (r = 300), (0, w.jsx)(Pe, {
                        ref: t,
                        slideComponent: Ye,
                        slideWidth: r,
                        carouselWidth: e,
                        data: Ke,
                        currentVisibleSlide: n,
                        maxVisibleSlide: 5,
                        useGrabCursor: !0
                     })
                  }
               }), (0, w.jsxs)(w.Fragment, {
                  children: [(0, w.jsx)("button", {
                     style: {
                        position: "absolute",
                        top: "40%",
                        left: 10,
                        zIndex: 10
                     },
                     className: "scale-150",
                     onClick: function () {
                        var t;
                        null === (t = e.current) || void 0 === t || t.goBack()
                     },
                     children: (0, w.jsx)(Fe, {})
                  }), (0, w.jsx)("button", {
                     style: {
                        position: "absolute",
                        top: "40%",
                        right: 10,
                        zIndex: 10
                     },
                     className: "scale-150",
                     onClick: function () {
                        var t;
                        null === (t = e.current) || void 0 === t || t.goNext(6)
                     },
                     children: (0, w.jsx)(Be, {})
                  })]
               })]
            })
         },
         Ge = function () {
            return (0, w.jsxs)("div", {
               className: "py-20",
               id: "gallery",
               children: [(0, w.jsx)("h1", {
                  className: "text-center text-4xl font-newton",
                  "data-aos": "zoom-in-up",
                  children: "GALLERY"
               }), (0, w.jsx)("div", {
                  className: "mt-20",
                  children: (0, w.jsx)(Xe, {})
               })]
            })
         },
         Ze = "images/team1.PNG",
         Je = "images/team2.PNG",
         et = "images/team3.PNG",
         Rt = "images/team4.PNG",
         tt = function (e) {
            var t = e.image,
               n = e.name,
               r = e.position,
               a = e.link,
               l = e.animation;
            return (0, w.jsxs)("div", {
               className: "flex flex-col bg-white w-fit text-black",
               "data-aos": l,
               children: [(0, w.jsx)("div", {
                  className: "h-96",
                  children: (0, w.jsx)("img", {
                     src: t,
                     alt: n,
                     className: "h-full object-cover"
                  })
               }), (0, w.jsxs)("div", {
                  className: "px-4 py-8 text-center",
                  children: [(0, w.jsx)("h1", {
                     className: "text-3xl font-newton",
                     children: n
                  }), (0, w.jsx)("h3", {
                     className: "text-xl font-semibold mt-4",
                     children: r
                  }), (0, w.jsx)("button", {
                     className: "mt-4",
                     children: (0, w.jsx)("a", {
                        href: a,
                        target: "_blank",
                        rel: "noreferrer",
                        children: (0, w.jsx)(N, {
                           width: 25,
                           height: 25,
                           color: "#1DA1F2"
                        })
                     })
                  })]
               })]
            })
         },
         nt = [{
            id: 1,
            name: "STEVE",
            image: Ze,
            position: "Developer",
            link: "#",
            animation: "fade-right"
         }, {
            id: 2,
            name: "HARISH",
            image: Je,
            position: "Project Manager",
            link: "#",
            animation: "zoom-out"
         },{
            id: 3,
            name: "DUKE",
            image: Je,
            position: "Content Creator",
            link: "#",
            animation: "zoom-out"
         }, {
            id: 4,
            name: "JARED",
            image: et,
            position: "Artist",
            link: "#",
            animation: "fade-left"
         }],
         rt = function () {
            return (0, w.jsxs)("div", {
               className: "py-20",
               id: "team",
               children: [(0, w.jsx)("h1", {
                  className: "text-center text-4xl font-newton",
                  "data-aos": "zoom-in-up",
                  children: "Team"
               }), (0, w.jsx)("div", {
                  className: "mt-20 flex justify-center flex-wrap gap-10",
                  children: nt.map((function (e) {
                     return (0, w.jsx)(tt, {
                        animation: e.animation,
                        image: e.image,
                        name: e.name,
                        position: e.position,
                        link: e.link
                     }, e.id)
                  }))
               })]
            })
         },
         at = ["title", "titleId"];

      function lt() {
         return lt = Object.assign ? Object.assign.bind() : function (e) {
            for (var t = 1; t < arguments.length; t++) {
               var n = arguments[t];
               for (var r in n) Object.prototype.hasOwnProperty.call(n, r) && (e[r] = n[r])
            }
            return e
         }, lt.apply(this, arguments)
      }

      function it(e, t) {
         if (null == e) return {};
         var n, r, a = function (e, t) {
            if (null == e) return {};
            var n, r, a = {},
               l = Object.keys(e);
            for (r = 0; r < l.length; r++) n = l[r], t.indexOf(n) >= 0 || (a[n] = e[n]);
            return a
         }(e, t);
         if (Object.getOwnPropertySymbols) {
            var l = Object.getOwnPropertySymbols(e);
            for (r = 0; r < l.length; r++) n = l[r], t.indexOf(n) >= 0 || Object.prototype.propertyIsEnumerable.call(e, n) && (a[n] = e[n])
         }
         return a
      }

      function ot(e, n) {
         var r = e.title,
            a = e.titleId,
            l = it(e, at);
         return t.createElement("svg", lt({
            xmlns: "http://www.w3.org/2000/svg",
            width: 16,
            height: 16,
            fill: "currentColor",
            className: "bi bi-chevron-down",
            viewBox: "0 0 16 16",
            ref: n,
            "aria-labelledby": a
         }, l), r ? t.createElement("title", {
            id: a
         }, r) : null, Ve || (Ve = t.createElement("path", {
            fillRule: "evenodd",
            d: "M1.646 4.646a.5.5 0 0 1 .708 0L8 10.293l5.646-5.647a.5.5 0 0 1 .708.708l-6 6a.5.5 0 0 1-.708 0l-6-6a.5.5 0 0 1 0-.708z"
         })))
      }
      var ut = t.forwardRef(ot),
         st = (n.p, function (e) {
            var n = e.question,
               r = e.answer,
               a = o((0, t.useState)(!1), 2),
               l = a[0],
               i = a[1];
            return (0, w.jsxs)("div", {
               style: {
                  backgroundColor: "#1B1B31"
               },
               className: "my-10 cursor-pointer ".concat(l ? "pb-6" : ""),
               onClick: function () {
                  i((function (e) {
                     return !e
                  }))
               },
               children: [(0, w.jsxs)("div", {
                  style: {
                     backgroundColor: "#07071B"
                  },
                  className: "flex justify-between items-center px-8 sm:px-12 py-8",
                  children: [(0, w.jsx)("h4", {
                     className: "text-xl sm:text-2xl font-newton tracking-widest",
                     children: n
                  }), (0, w.jsx)("button", {
                     className: "pointer-cursor z-40",
                     type: "button",
                     style: {
                        transform: "".concat(l ? "rotate(180deg)" : "")
                     },
                     onClick: function () {
                        i((function (e) {
                           return !e
                        }))
                     },
                     children: (0, w.jsx)(ut, {
                        width: 26,
                        height: 26,
                        onClick: function () {
                           i((function (e) {
                              return !e
                           }))
                        }
                     })
                  })]
               }), l && (0, w.jsx)("div", {
                  className: "mx-6 sm:mx-10 mt-6 text-lg",
                  children: (0, w.jsx)("p", {
                     children: r
                  })
               })]
            })
         }),
         ct = [{
            id: 1,
            question: "DOES THE TVKILLS HAVE DISCORD?",
            answer: "TBA"
         }, {
            id: 2,
            question: "WHAT ARE THE BENEFITS OF HOLDING THE CULTPASS?",
            answer: "Priority minting in every upcoming drop in TVKills. Lifetime Whitelist for every upcoming drop. Holders will receive 10% of the Royalties received from the main drop. Will be eligible for other exclusive Collab WL raffles."
          }, 
         {
            id: 3,
            question: "TOTAL COUNTS OF TV KILLS",
            answer: "TBA"
         }], 
         // {   id: 4,
         //    question: "Lorem ipsum dolor sit, amet consectetur adipisicing elit.",
         //    answer: "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Doloremque excepturi, consequatur cumque iure ducimus, eum praesentium ut."
         // }, {
         //    id: 5,
         //    question: "Lorem ipsum dolor sit, amet consectetur adipisicing elit.",
         //    answer: "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Doloremque excepturi, consequatur cumque iure ducimus, eum praesentium ut."
         // }, {
         //    id: 6,
         //    question: "Lorem ipsum dolor sit, amet consectetur adipisicing elit.",
         //    answer: "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Doloremque excepturi, consequatur cumque iure ducimus, eum praesentium ut."
         // }, {
         //    id: 7,
         //    question: "Lorem ipsum dolor sit, amet consectetur adipisicing elit.",
         //    answer: "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Doloremque excepturi, consequatur cumque iure ducimus, eum praesentium ut."
         // }, {
         //    id: 8,
         //    question: "Lorem ipsum dolor sit, amet consectetur adipisicing elit.",
         //    answer: "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Doloremque excepturi, consequatur cumque iure ducimus, eum praesentium ut."
         // }, {
         //    id: 9,
         //    question: "Lorem ipsum dolor sit, amet consectetur adipisicing elit.",
         //    answer: "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Doloremque excepturi, consequatur cumque iure ducimus, eum praesentium ut."
         // }],
         dt = function () {
            return (0, w.jsxs)("div", {
               className: "py-20",
               id: "faq",
               children: [(0, w.jsx)("h1", {
                  className: "text-center text-4xl font-newton",
                  "data-aos": "zoom-in-up",
                  children: "FAQ"
               }), (0, w.jsx)("div", {
                  className: "mt-20",
                  "data-aos": "fade-right",
                  children: ct.map((function (e) {
                     return (0, w.jsx)(st, {
                        animation: e.animation,
                        animationDuration: e.animationDuration,
                        question: e.question,
                        answer: e.answer
                     }, e.id)
                  }))
               })]
            })
         },
         ft = function () {
            return (0, w.jsx)("div", {
               className: "pt-20 pb-10",
               children: (0, w.jsxs)("div", {
                  className: "flex flex-col md:flex-row md:justify-between",
                  children: [(0, w.jsxs)("div", {
                     className: "flex-1",
                     children: [(0, w.jsx)("h1", {
                        className: "text-2xl lg:text-4xl leading-relaxed font-newton tracking-wider",
                        children: "TV KILLS"
                     }), (0, w.jsx)("p", {
                        className: "mt-6",
                        children: "\xa9 2022 All rights reserved"
                     })]
                  }), (0, w.jsx)("div", {
                     className: "flex-1 mt-10 md:mt-3",
                     children: (0, w.jsxs)("ul", {
                        className: "flex flex-col md:justify-center md:items-center gap-6 text-lg font-newton",
                        children: [(0, w.jsx)("li", {
                           children: (0, w.jsx)("a", {
                              className: "transition-all duration-200 ease-linear hover:text-blue-400",
                              href: "#gallery",
                              children: "Gallery"
                           })
                        }), (0, w.jsx)("li", {
                           children: (0, w.jsx)("a", {
                              className: "transition-all duration-200 ease-linear hover:text-blue-400",
                              href: "#roadmap",
                              children: "Roadmap"
                           })
                        }), (0, w.jsx)("li", {
                           children: (0, w.jsx)("a", {
                              className: "transition-all duration-200 ease-linear hover:text-blue-400",
                              href: "#team",
                              children: "Team"
                           })
                        }), (0, w.jsx)("li", {
                           children: (0, w.jsx)("a", {
                              className: "transition-all duration-200 ease-linear hover:text-blue-400",
                              href: "#faq",
                              children: "FAQ"
                           })
                        })]
                     })
                  }), (0, w.jsx)("div", {
                     className: "flex-1 mt-10 md:mt-4",
                     children: (0, w.jsx)("div", {
                        className: "flex flex-col xs:flex-row sm:flex-col lg:flex-row md:items-center gap-6 w-fit md:gap-10",
                        children: (0, w.jsx)("a", {
                           href: "https://twitter.com/TVKillsCNFT",
                           target: "_blank",
                           rel: "noreferrer",
                           children: (0, w.jsxs)("button", {
                              className: "flex justify-center items-center gap-2 bg-white text-black py-3 px-10 border-2 border-white transition-all duration-200 ease-in hover:bg-transparent hover:text-white",
                              children: [(0, w.jsx)(N, {
                                 color: "#1DA1F2"
                              }), "Twitter"]
                           })
                        })
                     })
                  })]
               })
            })
         },
         pt = "RoadmapItem_roadmapItem__HWEqx",
         mt = function (e) {
            var t = e.title,
               n = e.description,
               r = e.animation,
               a = e.animationDuration;
            return (0, w.jsx)("div", {
               className: "md:px-10 w-full",
               "data-aos": r,
               "data-aos-duration": a,
               children: (0, w.jsxs)("div", {
                  className: "".concat(pt, " py-6 px-4 md:px-10 rounded-md w-full"),
                  children: [(0, w.jsx)("h1", {
                     className: "text-3xl font-blanka tracking-wider",
                     children: t
                  }), (0, w.jsx)("p", {
                     className: "mt-4 tracking-wide leading-8",
                     children: n
                  })]
               })
            })
         },
         ht = [{
            id: 1,
            title: "Twitter Launch:-",
            description: "Launching the Tvkill’s tv into the twitter space",
            animation: "fade-right",
            animationDuration: "1600"
         }, {
            id: 2,
            title: "Community building:- ",
            description: "Building a strong organic Tvkills community in the CNFT Space.",
            animation: "fade-left",
            animationDuration: "1700"
         }, {
            id: 3,
            title: "Showlist:-",
            description: "Our very own version of whitelist which is given to the supporters and for the giveaway winners in different activities.",
            animationDuration: "1800"
         }, {
            id: 4,
            title: "Cultpass:-",
            description: "Cultpass is our way of Honouring the hardcore supporters by inviting them to our TV CULT. Holding Cultpass gives you special benefits and exclusive access.",
            animation: "fade-left",
            animationDuration: "1900"
         }, {
            id: 5,
            title: "Website:-",
            description: "Revealing the official website of TVKills.",
            animation: "fade-right",
            animationDuration: "2000"
         }, {
            id: 6,
            title: "Discord launch:- ",
            description: "The official launch of TVKills discord server.",
            animation: "fade-left",
            animationDuration: "2100"
         },
         {
            id: 7,
            title: "TVKills Mint:-",
            description: "Big day the official minting of TVKills.",
            animation: "fade-left",
            animationDuration: "2100"
         }],
         vt = function () {
            return (0, w.jsxs)("div", {
               className: "py-20",
               id: "roadmap",
               children: [(0, w.jsx)("h1", {
                  className: "text-center text-4xl font-newton",
                  "data-aos": "zoom-in-up",
                  children: "ROADMAP"
               }), (0, w.jsxs)("div", {
                  className: "mt-20 relative",
                  children: [(0, w.jsx)("div", {
                     className: "hidden xl:block bg-white shadow-xl w-1 h-full absolute top-0 left-[50%]"
                  }), (0, w.jsxs)("div", {
                     className: "grid grid-cols-1 xl:grid-cols-2 justify-items-center gap-10",
                     children: [(0, w.jsx)(mt, {
                        title: ht[0].title,
                        description: ht[0].description,
                        animation: ht[0].animation,
                        animationDuration: ht[0].animationDuration
                     }), (0, w.jsx)("div", {
                        className: "hidden xl:block"
                     }), (0, w.jsx)("div", {
                        className: "hidden xl:block"
                     }), (0, w.jsx)(mt, {
                        title: ht[1].title,
                        description: ht[1].description,
                        animation: ht[1].animation,
                        animationDuration: ht[1].animationDuration
                     }), (0, w.jsx)(mt, {
                        title: ht[2].title,
                        description: ht[2].description,
                        animation: ht[2].animation,
                        animationDuration: ht[2].animationDuration
                     }), (0, w.jsx)("div", {
                        className: "hidden xl:block"
                     }), (0, w.jsx)("div", {
                        className: "hidden xl:block"
                     }), (0, w.jsx)(mt, {
                        title: ht[3].title,
                        description: ht[3].description,
                        animation: ht[3].animation,
                        animationDuration: ht[3].animationDuration
                     }), (0, w.jsx)(mt, {
                        title: ht[4].title,
                        description: ht[4].description,
                        animation: ht[4].animation,
                        animationDuration: ht[4].animationDuration
                     }), (0, w.jsx)("div", {
                        className: "hidden xl:block"
                     }), (0, w.jsx)("div", {
                        className: "hidden xl:block"
                     }), (0, w.jsx)(mt, {
                        title: ht[5].title,
                        description: ht[5].description,
                        animation: ht[5].animation,
                        animationDuration: ht[5].animationDuration
                     })]
                  })]
               })]
            })
         };
      var gt = function () {
         return (0, t.useEffect)((function () {
            l().init({
               duration: 1500
            })
         }), []), (0, w.jsx)("div", {
            className: " text-white px-10",
            id: "main",
            children: (0, w.jsxs)("div", {
               className: "container mx-auto",
               children: [(0, w.jsx)(x, {}), (0, w.jsx)(_, {}), (0, w.jsx)(Ge, {}), (0, w.jsx)(vt, {}), (0, w.jsx)(rt, {}), (0, w.jsx)(dt, {}), (0, w.jsx)(ft, {})]
            })
         })
      };
      r.createRoot(document.getElementById("root")).render((0, w.jsx)(t.StrictMode, {
         children: (0, w.jsx)(gt, {})
      }))
   }()
}();
//# sourceMappingURL=main.89947918.js.map