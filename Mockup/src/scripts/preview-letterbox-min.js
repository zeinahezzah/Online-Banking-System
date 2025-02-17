!(function (e, t) {
  "object" == typeof module && "object" == typeof module.exports
    ? (module.exports = e.document
        ? t(e, !0)
        : function (e) {
            if (!e.document)
              throw new Error("jQuery requires a window with a document");
            return t(e);
          })
    : t(e);
})("undefined" != typeof window ? window : this, function (h, e) {
  function t(e, t) {
    return t.toUpperCase();
  }
  var n = [],
    l = n.slice,
    g = n.concat,
    s = n.push,
    o = n.indexOf,
    r = {},
    i = r.toString,
    m = r.hasOwnProperty,
    v = {},
    y = h.document,
    a = "2.1.4",
    C = function (e, t) {
      return new C.fn.init(e, t);
    },
    u = /^[\s\uFEFF\xA0]+|[\s\uFEFF\xA0]+$/g,
    c = /^-ms-/,
    p = /-([\da-z])/gi;
  function f(e) {
    var t = "length" in e && e.length,
      n = C.type(e);
    return (
      "function" !== n &&
      !C.isWindow(e) &&
      (!(1 !== e.nodeType || !t) ||
        "array" === n ||
        0 === t ||
        ("number" == typeof t && 0 < t && t - 1 in e))
    );
  }
  (C.fn = C.prototype =
    {
      jquery: a,
      constructor: C,
      selector: "",
      length: 0,
      toArray: function () {
        return l.call(this);
      },
      get: function (e) {
        return null != e
          ? e < 0
            ? this[e + this.length]
            : this[e]
          : l.call(this);
      },
      pushStack: function (e) {
        var t = C.merge(this.constructor(), e);
        return (t.prevObject = this), (t.context = this.context), t;
      },
      each: function (e, t) {
        return C.each(this, e, t);
      },
      map: function (n) {
        return this.pushStack(
          C.map(this, function (e, t) {
            return n.call(e, t, e);
          })
        );
      },
      slice: function () {
        return this.pushStack(l.apply(this, arguments));
      },
      first: function () {
        return this.eq(0);
      },
      last: function () {
        return this.eq(-1);
      },
      eq: function (e) {
        var t = this.length,
          n = +e + (e < 0 ? t : 0);
        return this.pushStack(0 <= n && n < t ? [this[n]] : []);
      },
      end: function () {
        return this.prevObject || this.constructor(null);
      },
      push: s,
      sort: n.sort,
      splice: n.splice,
    }),
    (C.extend = C.fn.extend =
      function () {
        var e,
          t,
          n,
          r,
          o,
          i,
          a = arguments[0] || {},
          s = 1,
          u = arguments.length,
          c = !1;
        for (
          "boolean" == typeof a && ((c = a), (a = arguments[s] || {}), s++),
            "object" == typeof a || C.isFunction(a) || (a = {}),
            s === u && ((a = this), s--);
          s < u;
          s++
        )
          if (null != (e = arguments[s]))
            for (t in e)
              (n = a[t]),
                a !== (r = e[t]) &&
                  (c && r && (C.isPlainObject(r) || (o = C.isArray(r)))
                    ? ((i = o
                        ? ((o = !1), n && C.isArray(n) ? n : [])
                        : n && C.isPlainObject(n)
                        ? n
                        : {}),
                      (a[t] = C.extend(c, i, r)))
                    : void 0 !== r && (a[t] = r));
        return a;
      }),
    C.extend({
      expando: "jQuery" + (a + Math.random()).replace(/\D/g, ""),
      isReady: !0,
      error: function (e) {
        throw new Error(e);
      },
      noop: function () {},
      isFunction: function (e) {
        return "function" === C.type(e);
      },
      isArray: Array.isArray,
      isWindow: function (e) {
        return null != e && e === e.window;
      },
      isNumeric: function (e) {
        return !C.isArray(e) && 0 <= e - parseFloat(e) + 1;
      },
      isPlainObject: function (e) {
        return (
          "object" === C.type(e) &&
          !e.nodeType &&
          !C.isWindow(e) &&
          !(e.constructor && !m.call(e.constructor.prototype, "isPrototypeOf"))
        );
      },
      isEmptyObject: function (e) {
        var t;
        for (t in e) return !1;
        return !0;
      },
      type: function (e) {
        return null == e
          ? e + ""
          : "object" == typeof e || "function" == typeof e
          ? r[i.call(e)] || "object"
          : typeof e;
      },
      globalEval: function (e) {
        var t,
          n = eval;
        (e = C.trim(e)) &&
          (1 === e.indexOf("use strict")
            ? (((t = y.createElement("script")).text = e),
              y.head.appendChild(t).parentNode.removeChild(t))
            : n(e));
      },
      camelCase: function (e) {
        return e.replace(c, "ms-").replace(p, t);
      },
      nodeName: function (e, t) {
        return e.nodeName && e.nodeName.toLowerCase() === t.toLowerCase();
      },
      each: function (e, t, n) {
        var r = 0,
          o = e.length,
          i = f(e);
        if (n) {
          if (i) for (; r < o && !1 !== t.apply(e[r], n); r++);
          else for (r in e) if (!1 === t.apply(e[r], n)) break;
        } else if (i) for (; r < o && !1 !== t.call(e[r], r, e[r]); r++);
        else for (r in e) if (!1 === t.call(e[r], r, e[r])) break;
        return e;
      },
      trim: function (e) {
        return null == e ? "" : (e + "").replace(u, "");
      },
      makeArray: function (e, t) {
        var n = t || [];
        return (
          null != e &&
            (f(Object(e))
              ? C.merge(n, "string" == typeof e ? [e] : e)
              : s.call(n, e)),
          n
        );
      },
      inArray: function (e, t, n) {
        return null == t ? -1 : o.call(t, e, n);
      },
      merge: function (e, t) {
        for (var n = +t.length, r = 0, o = e.length; r < n; r++) e[o++] = t[r];
        return (e.length = o), e;
      },
      grep: function (e, t, n) {
        for (var r = [], o = 0, i = e.length, a = !n; o < i; o++)
          !t(e[o], o) != a && r.push(e[o]);
        return r;
      },
      map: function (e, t, n) {
        var r,
          o = 0,
          i = e.length,
          a = [];
        if (f(e)) for (; o < i; o++) null != (r = t(e[o], o, n)) && a.push(r);
        else for (o in e) null != (r = t(e[o], o, n)) && a.push(r);
        return g.apply([], a);
      },
      guid: 1,
      proxy: function (e, t) {
        var n, r, o;
        return (
          "string" == typeof t && ((n = e[t]), (t = e), (e = n)),
          C.isFunction(e)
            ? ((r = l.call(arguments, 2)),
              ((o = function () {
                return e.apply(t || this, r.concat(l.call(arguments)));
              }).guid = e.guid =
                e.guid || C.guid++),
              o)
            : void 0
        );
      },
      now: Date.now,
      support: v,
    }),
    C.each(
      "Boolean Number String Function Array Date RegExp Object Error".split(
        " "
      ),
      function (e, t) {
        r["[object " + t + "]"] = t.toLowerCase();
      }
    );
  var d = (function (n) {
    function p(e, t, n) {
      var r = "0x" + t - 65536;
      return r != r || n
        ? t
        : r < 0
        ? String.fromCharCode(65536 + r)
        : String.fromCharCode((r >> 10) | 55296, (1023 & r) | 56320);
    }
    function r() {
      v();
    }
    var e,
      h,
      b,
      i,
      o,
      g,
      f,
      m,
      w,
      c,
      l,
      v,
      k,
      a,
      y,
      x,
      s,
      d,
      C,
      T = "sizzle" + 1 * new Date(),
      S = n.document,
      j = 0,
      A = 0,
      u = ie(),
      E = ie(),
      N = ie(),
      D = function (e, t) {
        return e === t && (l = !0), 0;
      },
      _ = {}.hasOwnProperty,
      t = [],
      $ = t.pop,
      O = t.push,
      L = t.push,
      F = t.slice,
      q = function (e, t) {
        for (var n = 0, r = e.length; n < r; n++) if (e[n] === t) return n;
        return -1;
      },
      P =
        "checked|selected|async|autofocus|autoplay|controls|defer|disabled|hidden|ismap|loop|multiple|open|readonly|required|scoped",
      H = "[\\x20\\t\\r\\n\\f]",
      I = "(?:\\\\.|[\\w-]|[^\\x00-\\xa0])+",
      M = I.replace("w", "w#"),
      R =
        "\\[" +
        H +
        "*(" +
        I +
        ")(?:" +
        H +
        "*([*^$|!~]?=)" +
        H +
        "*(?:'((?:\\\\.|[^\\\\'])*)'|\"((?:\\\\.|[^\\\\\"])*)\"|(" +
        M +
        "))|)" +
        H +
        "*\\]",
      z =
        ":(" +
        I +
        ")(?:\\((('((?:\\\\.|[^\\\\'])*)'|\"((?:\\\\.|[^\\\\\"])*)\")|((?:\\\\.|[^\\\\()[\\]]|" +
        R +
        ")*)|.*)\\)|)",
      W = new RegExp(H + "+", "g"),
      B = new RegExp("^" + H + "+|((?:^|[^\\\\])(?:\\\\.)*)" + H + "+$", "g"),
      U = new RegExp("^" + H + "*," + H + "*"),
      X = new RegExp("^" + H + "*([>+~]|" + H + ")" + H + "*"),
      V = new RegExp("=" + H + "*([^\\]'\"]*?)" + H + "*\\]", "g"),
      J = new RegExp(z),
      G = new RegExp("^" + M + "$"),
      K = {
        ID: new RegExp("^#(" + I + ")"),
        CLASS: new RegExp("^\\.(" + I + ")"),
        TAG: new RegExp("^(" + I.replace("w", "w*") + ")"),
        ATTR: new RegExp("^" + R),
        PSEUDO: new RegExp("^" + z),
        CHILD: new RegExp(
          "^:(only|first|last|nth|nth-last)-(child|of-type)(?:\\(" +
            H +
            "*(even|odd|(([+-]|)(\\d*)n|)" +
            H +
            "*(?:([+-]|)" +
            H +
            "*(\\d+)|))" +
            H +
            "*\\)|)",
          "i"
        ),
        bool: new RegExp("^(?:" + P + ")$", "i"),
        needsContext: new RegExp(
          "^" +
            H +
            "*[>+~]|:(even|odd|eq|gt|lt|nth|first|last)(?:\\(" +
            H +
            "*((?:-\\d)?\\d*)" +
            H +
            "*\\)|)(?=[^-]|$)",
          "i"
        ),
      },
      Y = /^(?:input|select|textarea|button)$/i,
      Q = /^h\d$/i,
      Z = /^[^{]+\{\s*\[native \w/,
      ee = /^(?:#([\w-]+)|(\w+)|\.([\w-]+))$/,
      te = /[+~]/,
      ne = /'|\\/g,
      re = new RegExp("\\\\([\\da-f]{1,6}" + H + "?|(" + H + ")|.)", "ig");
    try {
      L.apply((t = F.call(S.childNodes)), S.childNodes),
        t[S.childNodes.length].nodeType;
    } catch (e) {
      L = {
        apply: t.length
          ? function (e, t) {
              O.apply(e, F.call(t));
            }
          : function (e, t) {
              for (var n = e.length, r = 0; (e[n++] = t[r++]); );
              e.length = n - 1;
            },
      };
    }
    function oe(e, t, n, r) {
      var o, i, a, s, u, c, l, p, f, d;
      if (
        ((t ? t.ownerDocument || t : S) !== k && v(t),
        (n = n || []),
        (s = (t = t || k).nodeType),
        "string" != typeof e || !e || (1 !== s && 9 !== s && 11 !== s))
      )
        return n;
      if (!r && y) {
        if (11 !== s && (o = ee.exec(e)))
          if ((a = o[1])) {
            if (9 === s) {
              if (!(i = t.getElementById(a)) || !i.parentNode) return n;
              if (i.id === a) return n.push(i), n;
            } else if (
              t.ownerDocument &&
              (i = t.ownerDocument.getElementById(a)) &&
              C(t, i) &&
              i.id === a
            )
              return n.push(i), n;
          } else {
            if (o[2]) return L.apply(n, t.getElementsByTagName(e)), n;
            if ((a = o[3]) && h.getElementsByClassName)
              return L.apply(n, t.getElementsByClassName(a)), n;
          }
        if (h.qsa && (!x || !x.test(e))) {
          if (
            ((p = l = T),
            (f = t),
            (d = 1 !== s && e),
            1 === s && "object" !== t.nodeName.toLowerCase())
          ) {
            for (
              c = g(e),
                (l = t.getAttribute("id"))
                  ? (p = l.replace(ne, "\\$&"))
                  : t.setAttribute("id", p),
                p = "[id='" + p + "'] ",
                u = c.length;
              u--;

            )
              c[u] = p + ge(c[u]);
            (f = (te.test(e) && de(t.parentNode)) || t), (d = c.join(","));
          }
          if (d)
            try {
              return L.apply(n, f.querySelectorAll(d)), n;
            } catch (e) {
            } finally {
              l || t.removeAttribute("id");
            }
        }
      }
      return m(e.replace(B, "$1"), t, n, r);
    }
    function ie() {
      var r = [];
      return function e(t, n) {
        return (
          r.push(t + " ") > b.cacheLength && delete e[r.shift()],
          (e[t + " "] = n)
        );
      };
    }
    function ae(e) {
      return (e[T] = !0), e;
    }
    function se(e) {
      var t = k.createElement("div");
      try {
        return !!e(t);
      } catch (e) {
        return !1;
      } finally {
        t.parentNode && t.parentNode.removeChild(t), (t = null);
      }
    }
    function ue(e, t) {
      for (var n = e.split("|"), r = e.length; r--; ) b.attrHandle[n[r]] = t;
    }
    function ce(e, t) {
      var n = t && e,
        r =
          n &&
          1 === e.nodeType &&
          1 === t.nodeType &&
          (~t.sourceIndex || 1 << 31) - (~e.sourceIndex || 1 << 31);
      if (r) return r;
      if (n) for (; (n = n.nextSibling); ) if (n === t) return -1;
      return e ? 1 : -1;
    }
    function le(t) {
      return function (e) {
        return "input" === e.nodeName.toLowerCase() && e.type === t;
      };
    }
    function pe(n) {
      return function (e) {
        var t = e.nodeName.toLowerCase();
        return ("input" === t || "button" === t) && e.type === n;
      };
    }
    function fe(a) {
      return ae(function (i) {
        return (
          (i = +i),
          ae(function (e, t) {
            for (var n, r = a([], e.length, i), o = r.length; o--; )
              e[(n = r[o])] && (e[n] = !(t[n] = e[n]));
          })
        );
      });
    }
    function de(e) {
      return e && void 0 !== e.getElementsByTagName && e;
    }
    for (e in ((h = oe.support = {}),
    (o = oe.isXML =
      function (e) {
        var t = e && (e.ownerDocument || e).documentElement;
        return !!t && "HTML" !== t.nodeName;
      }),
    (v = oe.setDocument =
      function (e) {
        var t,
          n,
          u = e ? e.ownerDocument || e : S;
        return u !== k && 9 === u.nodeType && u.documentElement
          ? ((a = (k = u).documentElement),
            (n = u.defaultView) &&
              n !== n.top &&
              (n.addEventListener
                ? n.addEventListener("unload", r, !1)
                : n.attachEvent && n.attachEvent("onunload", r)),
            (y = !o(u)),
            (h.attributes = se(function (e) {
              return (e.className = "i"), !e.getAttribute("className");
            })),
            (h.getElementsByTagName = se(function (e) {
              return (
                e.appendChild(u.createComment("")),
                !e.getElementsByTagName("*").length
              );
            })),
            (h.getElementsByClassName = Z.test(u.getElementsByClassName)),
            (h.getById = se(function (e) {
              return (
                (a.appendChild(e).id = T),
                !u.getElementsByName || !u.getElementsByName(T).length
              );
            })),
            h.getById
              ? ((b.find.ID = function (e, t) {
                  if (void 0 !== t.getElementById && y) {
                    var n = t.getElementById(e);
                    return n && n.parentNode ? [n] : [];
                  }
                }),
                (b.filter.ID = function (e) {
                  var t = e.replace(re, p);
                  return function (e) {
                    return e.getAttribute("id") === t;
                  };
                }))
              : (delete b.find.ID,
                (b.filter.ID = function (e) {
                  var n = e.replace(re, p);
                  return function (e) {
                    var t =
                      void 0 !== e.getAttributeNode && e.getAttributeNode("id");
                    return t && t.value === n;
                  };
                })),
            (b.find.TAG = h.getElementsByTagName
              ? function (e, t) {
                  return void 0 !== t.getElementsByTagName
                    ? t.getElementsByTagName(e)
                    : h.qsa
                    ? t.querySelectorAll(e)
                    : void 0;
                }
              : function (e, t) {
                  var n,
                    r = [],
                    o = 0,
                    i = t.getElementsByTagName(e);
                  if ("*" !== e) return i;
                  for (; (n = i[o++]); ) 1 === n.nodeType && r.push(n);
                  return r;
                }),
            (b.find.CLASS =
              h.getElementsByClassName &&
              function (e, t) {
                return y ? t.getElementsByClassName(e) : void 0;
              }),
            (s = []),
            (x = []),
            (h.qsa = Z.test(u.querySelectorAll)) &&
              (se(function (e) {
                (a.appendChild(e).innerHTML =
                  "<a id='" +
                  T +
                  "'></a><select id='" +
                  T +
                  "-\f]' msallowcapture=''><option selected=''></option></select>"),
                  e.querySelectorAll("[msallowcapture^='']").length &&
                    x.push("[*^$]=" + H + "*(?:''|\"\")"),
                  e.querySelectorAll("[selected]").length ||
                    x.push("\\[" + H + "*(?:value|" + P + ")"),
                  e.querySelectorAll("[id~=" + T + "-]").length || x.push("~="),
                  e.querySelectorAll(":checked").length || x.push(":checked"),
                  e.querySelectorAll("a#" + T + "+*").length ||
                    x.push(".#.+[+~]");
              }),
              se(function (e) {
                var t = u.createElement("input");
                t.setAttribute("type", "hidden"),
                  e.appendChild(t).setAttribute("name", "D"),
                  e.querySelectorAll("[name=d]").length &&
                    x.push("name" + H + "*[*^$|!~]?="),
                  e.querySelectorAll(":enabled").length ||
                    x.push(":enabled", ":disabled"),
                  e.querySelectorAll("*,:x"),
                  x.push(",.*:");
              })),
            (h.matchesSelector = Z.test(
              (d =
                a.matches ||
                a.webkitMatchesSelector ||
                a.mozMatchesSelector ||
                a.oMatchesSelector ||
                a.msMatchesSelector)
            )) &&
              se(function (e) {
                (h.disconnectedMatch = d.call(e, "div")),
                  d.call(e, "[s!='']:x"),
                  s.push("!=", z);
              }),
            (x = x.length && new RegExp(x.join("|"))),
            (s = s.length && new RegExp(s.join("|"))),
            (t = Z.test(a.compareDocumentPosition)),
            (C =
              t || Z.test(a.contains)
                ? function (e, t) {
                    var n = 9 === e.nodeType ? e.documentElement : e,
                      r = t && t.parentNode;
                    return (
                      e === r ||
                      !(
                        !r ||
                        1 !== r.nodeType ||
                        !(n.contains
                          ? n.contains(r)
                          : e.compareDocumentPosition &&
                            16 & e.compareDocumentPosition(r))
                      )
                    );
                  }
                : function (e, t) {
                    if (t) for (; (t = t.parentNode); ) if (t === e) return !0;
                    return !1;
                  }),
            (D = t
              ? function (e, t) {
                  if (e === t) return (l = !0), 0;
                  var n =
                    !e.compareDocumentPosition - !t.compareDocumentPosition;
                  return (
                    n ||
                    (1 &
                      (n =
                        (e.ownerDocument || e) === (t.ownerDocument || t)
                          ? e.compareDocumentPosition(t)
                          : 1) ||
                    (!h.sortDetached && t.compareDocumentPosition(e) === n)
                      ? e === u || (e.ownerDocument === S && C(S, e))
                        ? -1
                        : t === u || (t.ownerDocument === S && C(S, t))
                        ? 1
                        : c
                        ? q(c, e) - q(c, t)
                        : 0
                      : 4 & n
                      ? -1
                      : 1)
                  );
                }
              : function (e, t) {
                  if (e === t) return (l = !0), 0;
                  var n,
                    r = 0,
                    o = e.parentNode,
                    i = t.parentNode,
                    a = [e],
                    s = [t];
                  if (!o || !i)
                    return e === u
                      ? -1
                      : t === u
                      ? 1
                      : o
                      ? -1
                      : i
                      ? 1
                      : c
                      ? q(c, e) - q(c, t)
                      : 0;
                  if (o === i) return ce(e, t);
                  for (n = e; (n = n.parentNode); ) a.unshift(n);
                  for (n = t; (n = n.parentNode); ) s.unshift(n);
                  for (; a[r] === s[r]; ) r++;
                  return r
                    ? ce(a[r], s[r])
                    : a[r] === S
                    ? -1
                    : s[r] === S
                    ? 1
                    : 0;
                }),
            u)
          : k;
      }),
    (oe.matches = function (e, t) {
      return oe(e, null, null, t);
    }),
    (oe.matchesSelector = function (e, t) {
      if (
        ((e.ownerDocument || e) !== k && v(e),
        (t = t.replace(V, "='$1']")),
        !(!h.matchesSelector || !y || (s && s.test(t)) || (x && x.test(t))))
      )
        try {
          var n = d.call(e, t);
          if (
            n ||
            h.disconnectedMatch ||
            (e.document && 11 !== e.document.nodeType)
          )
            return n;
        } catch (e) {}
      return 0 < oe(t, k, null, [e]).length;
    }),
    (oe.contains = function (e, t) {
      return (e.ownerDocument || e) !== k && v(e), C(e, t);
    }),
    (oe.attr = function (e, t) {
      (e.ownerDocument || e) !== k && v(e);
      var n = b.attrHandle[t.toLowerCase()],
        r = n && _.call(b.attrHandle, t.toLowerCase()) ? n(e, t, !y) : void 0;
      return void 0 !== r
        ? r
        : h.attributes || !y
        ? e.getAttribute(t)
        : (r = e.getAttributeNode(t)) && r.specified
        ? r.value
        : null;
    }),
    (oe.error = function (e) {
      throw new Error("Syntax error, unrecognized expression: " + e);
    }),
    (oe.uniqueSort = function (e) {
      var t,
        n = [],
        r = 0,
        o = 0;
      if (
        ((l = !h.detectDuplicates),
        (c = !h.sortStable && e.slice(0)),
        e.sort(D),
        l)
      ) {
        for (; (t = e[o++]); ) t === e[o] && (r = n.push(o));
        for (; r--; ) e.splice(n[r], 1);
      }
      return (c = null), e;
    }),
    (i = oe.getText =
      function (e) {
        var t,
          n = "",
          r = 0,
          o = e.nodeType;
        if (o) {
          if (1 === o || 9 === o || 11 === o) {
            if ("string" == typeof e.textContent) return e.textContent;
            for (e = e.firstChild; e; e = e.nextSibling) n += i(e);
          } else if (3 === o || 4 === o) return e.nodeValue;
        } else for (; (t = e[r++]); ) n += i(t);
        return n;
      }),
    ((b = oe.selectors =
      {
        cacheLength: 50,
        createPseudo: ae,
        match: K,
        attrHandle: {},
        find: {},
        relative: {
          ">": { dir: "parentNode", first: !0 },
          " ": { dir: "parentNode" },
          "+": { dir: "previousSibling", first: !0 },
          "~": { dir: "previousSibling" },
        },
        preFilter: {
          ATTR: function (e) {
            return (
              (e[1] = e[1].replace(re, p)),
              (e[3] = (e[3] || e[4] || e[5] || "").replace(re, p)),
              "~=" === e[2] && (e[3] = " " + e[3] + " "),
              e.slice(0, 4)
            );
          },
          CHILD: function (e) {
            return (
              (e[1] = e[1].toLowerCase()),
              "nth" === e[1].slice(0, 3)
                ? (e[3] || oe.error(e[0]),
                  (e[4] = +(e[4]
                    ? e[5] + (e[6] || 1)
                    : 2 * ("even" === e[3] || "odd" === e[3]))),
                  (e[5] = +(e[7] + e[8] || "odd" === e[3])))
                : e[3] && oe.error(e[0]),
              e
            );
          },
          PSEUDO: function (e) {
            var t,
              n = !e[6] && e[2];
            return K.CHILD.test(e[0])
              ? null
              : (e[3]
                  ? (e[2] = e[4] || e[5] || "")
                  : n &&
                    J.test(n) &&
                    (t = g(n, !0)) &&
                    (t = n.indexOf(")", n.length - t) - n.length) &&
                    ((e[0] = e[0].slice(0, t)), (e[2] = n.slice(0, t))),
                e.slice(0, 3));
          },
        },
        filter: {
          TAG: function (e) {
            var t = e.replace(re, p).toLowerCase();
            return "*" === e
              ? function () {
                  return !0;
                }
              : function (e) {
                  return e.nodeName && e.nodeName.toLowerCase() === t;
                };
          },
          CLASS: function (e) {
            var t = u[e + " "];
            return (
              t ||
              ((t = new RegExp("(^|" + H + ")" + e + "(" + H + "|$)")) &&
                u(e, function (e) {
                  return t.test(
                    ("string" == typeof e.className && e.className) ||
                      (void 0 !== e.getAttribute && e.getAttribute("class")) ||
                      ""
                  );
                }))
            );
          },
          ATTR: function (n, r, o) {
            return function (e) {
              var t = oe.attr(e, n);
              return null == t
                ? "!=" === r
                : !r ||
                    ((t += ""),
                    "=" === r
                      ? t === o
                      : "!=" === r
                      ? t !== o
                      : "^=" === r
                      ? o && 0 === t.indexOf(o)
                      : "*=" === r
                      ? o && -1 < t.indexOf(o)
                      : "$=" === r
                      ? o && t.slice(-o.length) === o
                      : "~=" === r
                      ? -1 < (" " + t.replace(W, " ") + " ").indexOf(o)
                      : "|=" === r &&
                        (t === o || t.slice(0, o.length + 1) === o + "-"));
            };
          },
          CHILD: function (d, e, t, h, g) {
            var m = "nth" !== d.slice(0, 3),
              v = "last" !== d.slice(-4),
              y = "of-type" === e;
            return 1 === h && 0 === g
              ? function (e) {
                  return !!e.parentNode;
                }
              : function (e, t, n) {
                  var r,
                    o,
                    i,
                    a,
                    s,
                    u,
                    c = m != v ? "nextSibling" : "previousSibling",
                    l = e.parentNode,
                    p = y && e.nodeName.toLowerCase(),
                    f = !n && !y;
                  if (l) {
                    if (m) {
                      for (; c; ) {
                        for (i = e; (i = i[c]); )
                          if (
                            y
                              ? i.nodeName.toLowerCase() === p
                              : 1 === i.nodeType
                          )
                            return !1;
                        u = c = "only" === d && !u && "nextSibling";
                      }
                      return !0;
                    }
                    if (((u = [v ? l.firstChild : l.lastChild]), v && f)) {
                      for (
                        s =
                          (r = (o = l[T] || (l[T] = {}))[d] || [])[0] === j &&
                          r[1],
                          a = r[0] === j && r[2],
                          i = s && l.childNodes[s];
                        (i = (++s && i && i[c]) || (a = s = 0) || u.pop());

                      )
                        if (1 === i.nodeType && ++a && i === e) {
                          o[d] = [j, s, a];
                          break;
                        }
                    } else if (
                      f &&
                      (r = (e[T] || (e[T] = {}))[d]) &&
                      r[0] === j
                    )
                      a = r[1];
                    else
                      for (
                        ;
                        (i = (++s && i && i[c]) || (a = s = 0) || u.pop()) &&
                        ((y
                          ? i.nodeName.toLowerCase() !== p
                          : 1 !== i.nodeType) ||
                          !++a ||
                          (f && ((i[T] || (i[T] = {}))[d] = [j, a]), i !== e));

                      );
                    return (a -= g) === h || (a % h == 0 && 0 <= a / h);
                  }
                };
          },
          PSEUDO: function (e, i) {
            var t,
              a =
                b.pseudos[e] ||
                b.setFilters[e.toLowerCase()] ||
                oe.error("unsupported pseudo: " + e);
            return a[T]
              ? a(i)
              : 1 < a.length
              ? ((t = [e, e, "", i]),
                b.setFilters.hasOwnProperty(e.toLowerCase())
                  ? ae(function (e, t) {
                      for (var n, r = a(e, i), o = r.length; o--; )
                        e[(n = q(e, r[o]))] = !(t[n] = r[o]);
                    })
                  : function (e) {
                      return a(e, 0, t);
                    })
              : a;
          },
        },
        pseudos: {
          not: ae(function (e) {
            var r = [],
              o = [],
              s = f(e.replace(B, "$1"));
            return s[T]
              ? ae(function (e, t, n, r) {
                  for (var o, i = s(e, null, r, []), a = e.length; a--; )
                    (o = i[a]) && (e[a] = !(t[a] = o));
                })
              : function (e, t, n) {
                  return (r[0] = e), s(r, null, n, o), (r[0] = null), !o.pop();
                };
          }),
          has: ae(function (t) {
            return function (e) {
              return 0 < oe(t, e).length;
            };
          }),
          contains: ae(function (t) {
            return (
              (t = t.replace(re, p)),
              function (e) {
                return -1 < (e.textContent || e.innerText || i(e)).indexOf(t);
              }
            );
          }),
          lang: ae(function (n) {
            return (
              G.test(n || "") || oe.error("unsupported lang: " + n),
              (n = n.replace(re, p).toLowerCase()),
              function (e) {
                var t;
                do {
                  if (
                    (t = y
                      ? e.lang
                      : e.getAttribute("xml:lang") || e.getAttribute("lang"))
                  )
                    return (
                      (t = t.toLowerCase()) === n || 0 === t.indexOf(n + "-")
                    );
                } while ((e = e.parentNode) && 1 === e.nodeType);
                return !1;
              }
            );
          }),
          target: function (e) {
            var t = n.location && n.location.hash;
            return t && t.slice(1) === e.id;
          },
          root: function (e) {
            return e === a;
          },
          focus: function (e) {
            return (
              e === k.activeElement &&
              (!k.hasFocus || k.hasFocus()) &&
              !!(e.type || e.href || ~e.tabIndex)
            );
          },
          enabled: function (e) {
            return !1 === e.disabled;
          },
          disabled: function (e) {
            return !0 === e.disabled;
          },
          checked: function (e) {
            var t = e.nodeName.toLowerCase();
            return (
              ("input" === t && !!e.checked) || ("option" === t && !!e.selected)
            );
          },
          selected: function (e) {
            return (
              e.parentNode && e.parentNode.selectedIndex, !0 === e.selected
            );
          },
          empty: function (e) {
            for (e = e.firstChild; e; e = e.nextSibling)
              if (e.nodeType < 6) return !1;
            return !0;
          },
          parent: function (e) {
            return !b.pseudos.empty(e);
          },
          header: function (e) {
            return Q.test(e.nodeName);
          },
          input: function (e) {
            return Y.test(e.nodeName);
          },
          button: function (e) {
            var t = e.nodeName.toLowerCase();
            return ("input" === t && "button" === e.type) || "button" === t;
          },
          text: function (e) {
            var t;
            return (
              "input" === e.nodeName.toLowerCase() &&
              "text" === e.type &&
              (null == (t = e.getAttribute("type")) ||
                "text" === t.toLowerCase())
            );
          },
          first: fe(function () {
            return [0];
          }),
          last: fe(function (e, t) {
            return [t - 1];
          }),
          eq: fe(function (e, t, n) {
            return [n < 0 ? n + t : n];
          }),
          even: fe(function (e, t) {
            for (var n = 0; n < t; n += 2) e.push(n);
            return e;
          }),
          odd: fe(function (e, t) {
            for (var n = 1; n < t; n += 2) e.push(n);
            return e;
          }),
          lt: fe(function (e, t, n) {
            for (var r = n < 0 ? n + t : n; 0 <= --r; ) e.push(r);
            return e;
          }),
          gt: fe(function (e, t, n) {
            for (var r = n < 0 ? n + t : n; ++r < t; ) e.push(r);
            return e;
          }),
        },
      }).pseudos.nth = b.pseudos.eq),
    { radio: !0, checkbox: !0, file: !0, password: !0, image: !0 }))
      b.pseudos[e] = le(e);
    for (e in { submit: !0, reset: !0 }) b.pseudos[e] = pe(e);
    function he() {}
    function ge(e) {
      for (var t = 0, n = e.length, r = ""; t < n; t++) r += e[t].value;
      return r;
    }
    function me(a, e, t) {
      var s = e.dir,
        u = t && "parentNode" === s,
        c = A++;
      return e.first
        ? function (e, t, n) {
            for (; (e = e[s]); ) if (1 === e.nodeType || u) return a(e, t, n);
          }
        : function (e, t, n) {
            var r,
              o,
              i = [j, c];
            if (n) {
              for (; (e = e[s]); )
                if ((1 === e.nodeType || u) && a(e, t, n)) return !0;
            } else
              for (; (e = e[s]); )
                if (1 === e.nodeType || u) {
                  if (
                    (r = (o = e[T] || (e[T] = {}))[s]) &&
                    r[0] === j &&
                    r[1] === c
                  )
                    return (i[2] = r[2]);
                  if (((o[s] = i)[2] = a(e, t, n))) return !0;
                }
          };
    }
    function ve(o) {
      return 1 < o.length
        ? function (e, t, n) {
            for (var r = o.length; r--; ) if (!o[r](e, t, n)) return !1;
            return !0;
          }
        : o[0];
    }
    function ye(e, t, n, r, o) {
      for (var i, a = [], s = 0, u = e.length, c = null != t; s < u; s++)
        !(i = e[s]) || (n && !n(i, r, o)) || (a.push(i), c && t.push(s));
      return a;
    }
    function xe(d, h, g, m, v, e) {
      return (
        m && !m[T] && (m = xe(m)),
        v && !v[T] && (v = xe(v, e)),
        ae(function (e, t, n, r) {
          var o,
            i,
            a,
            s = [],
            u = [],
            c = t.length,
            l =
              e ||
              (function (e, t, n) {
                for (var r = 0, o = t.length; r < o; r++) oe(e, t[r], n);
                return n;
              })(h || "*", n.nodeType ? [n] : n, []),
            p = !d || (!e && h) ? l : ye(l, s, d, n, r),
            f = g ? (v || (e ? d : c || m) ? [] : t) : p;
          if ((g && g(p, f, n, r), m))
            for (o = ye(f, u), m(o, [], n, r), i = o.length; i--; )
              (a = o[i]) && (f[u[i]] = !(p[u[i]] = a));
          if (e) {
            if (v || d) {
              if (v) {
                for (o = [], i = f.length; i--; )
                  (a = f[i]) && o.push((p[i] = a));
                v(null, (f = []), o, r);
              }
              for (i = f.length; i--; )
                (a = f[i]) &&
                  -1 < (o = v ? q(e, a) : s[i]) &&
                  (e[o] = !(t[o] = a));
            }
          } else (f = ye(f === t ? f.splice(c, f.length) : f)), v ? v(null, t, f, r) : L.apply(t, f);
        })
      );
    }
    function be(e) {
      for (
        var o,
          t,
          n,
          r = e.length,
          i = b.relative[e[0].type],
          a = i || b.relative[" "],
          s = i ? 1 : 0,
          u = me(
            function (e) {
              return e === o;
            },
            a,
            !0
          ),
          c = me(
            function (e) {
              return -1 < q(o, e);
            },
            a,
            !0
          ),
          l = [
            function (e, t, n) {
              var r =
                (!i && (n || t !== w)) ||
                ((o = t).nodeType ? u(e, t, n) : c(e, t, n));
              return (o = null), r;
            },
          ];
        s < r;
        s++
      )
        if ((t = b.relative[e[s].type])) l = [me(ve(l), t)];
        else {
          if ((t = b.filter[e[s].type].apply(null, e[s].matches))[T]) {
            for (n = ++s; n < r && !b.relative[e[n].type]; n++);
            return xe(
              1 < s && ve(l),
              1 < s &&
                ge(
                  e
                    .slice(0, s - 1)
                    .concat({ value: " " === e[s - 2].type ? "*" : "" })
                ).replace(B, "$1"),
              t,
              s < n && be(e.slice(s, n)),
              n < r && be((e = e.slice(n))),
              n < r && ge(e)
            );
          }
          l.push(t);
        }
      return ve(l);
    }
    return (
      (he.prototype = b.filters = b.pseudos),
      (b.setFilters = new he()),
      (g = oe.tokenize =
        function (e, t) {
          var n,
            r,
            o,
            i,
            a,
            s,
            u,
            c = E[e + " "];
          if (c) return t ? 0 : c.slice(0);
          for (a = e, s = [], u = b.preFilter; a; ) {
            for (i in ((n && !(r = U.exec(a))) ||
              (r && (a = a.slice(r[0].length) || a), s.push((o = []))),
            (n = !1),
            (r = X.exec(a)) &&
              ((n = r.shift()),
              o.push({ value: n, type: r[0].replace(B, " ") }),
              (a = a.slice(n.length))),
            b.filter))
              !(r = K[i].exec(a)) ||
                (u[i] && !(r = u[i](r))) ||
                ((n = r.shift()),
                o.push({ value: n, type: i, matches: r }),
                (a = a.slice(n.length)));
            if (!n) break;
          }
          return t ? a.length : a ? oe.error(e) : E(e, s).slice(0);
        }),
      (f = oe.compile =
        function (e, t) {
          var n,
            r = [],
            o = [],
            i = N[e + " "];
          if (!i) {
            for (t || (t = g(e)), n = t.length; n--; )
              (i = be(t[n]))[T] ? r.push(i) : o.push(i);
            (i = N(
              e,
              (function (m, v) {
                function e(e, t, n, r, o) {
                  var i,
                    a,
                    s,
                    u = 0,
                    c = "0",
                    l = e && [],
                    p = [],
                    f = w,
                    d = e || (x && b.find.TAG("*", o)),
                    h = (j += null == f ? 1 : Math.random() || 0.1),
                    g = d.length;
                  for (
                    o && (w = t !== k && t);
                    c !== g && null != (i = d[c]);
                    c++
                  ) {
                    if (x && i) {
                      for (a = 0; (s = m[a++]); )
                        if (s(i, t, n)) {
                          r.push(i);
                          break;
                        }
                      o && (j = h);
                    }
                    y && ((i = !s && i) && u--, e && l.push(i));
                  }
                  if (((u += c), y && c !== u)) {
                    for (a = 0; (s = v[a++]); ) s(l, p, t, n);
                    if (e) {
                      if (0 < u)
                        for (; c--; ) l[c] || p[c] || (p[c] = $.call(r));
                      p = ye(p);
                    }
                    L.apply(r, p),
                      o &&
                        !e &&
                        0 < p.length &&
                        1 < u + v.length &&
                        oe.uniqueSort(r);
                  }
                  return o && ((j = h), (w = f)), l;
                }
                var y = 0 < v.length,
                  x = 0 < m.length;
                return y ? ae(e) : e;
              })(o, r)
            )).selector = e;
          }
          return i;
        }),
      (m = oe.select =
        function (e, t, n, r) {
          var o,
            i,
            a,
            s,
            u,
            c = "function" == typeof e && e,
            l = !r && g((e = c.selector || e));
          if (((n = n || []), 1 === l.length)) {
            if (
              2 < (i = l[0] = l[0].slice(0)).length &&
              "ID" === (a = i[0]).type &&
              h.getById &&
              9 === t.nodeType &&
              y &&
              b.relative[i[1].type]
            ) {
              if (!(t = (b.find.ID(a.matches[0].replace(re, p), t) || [])[0]))
                return n;
              c && (t = t.parentNode), (e = e.slice(i.shift().value.length));
            }
            for (
              o = K.needsContext.test(e) ? 0 : i.length;
              o-- && ((a = i[o]), !b.relative[(s = a.type)]);

            )
              if (
                (u = b.find[s]) &&
                (r = u(
                  a.matches[0].replace(re, p),
                  (te.test(i[0].type) && de(t.parentNode)) || t
                ))
              ) {
                if ((i.splice(o, 1), !(e = r.length && ge(i))))
                  return L.apply(n, r), n;
                break;
              }
          }
          return (
            (c || f(e, l))(r, t, !y, n, (te.test(e) && de(t.parentNode)) || t),
            n
          );
        }),
      (h.sortStable = T.split("").sort(D).join("") === T),
      (h.detectDuplicates = !!l),
      v(),
      (h.sortDetached = se(function (e) {
        return 1 & e.compareDocumentPosition(k.createElement("div"));
      })),
      se(function (e) {
        return (
          (e.innerHTML = "<a href='#'></a>"),
          "#" === e.firstChild.getAttribute("href")
        );
      }) ||
        ue("type|href|height|width", function (e, t, n) {
          return n
            ? void 0
            : e.getAttribute(t, "type" === t.toLowerCase() ? 1 : 2);
        }),
      (h.attributes &&
        se(function (e) {
          return (
            (e.innerHTML = "<input/>"),
            e.firstChild.setAttribute("value", ""),
            "" === e.firstChild.getAttribute("value")
          );
        })) ||
        ue("value", function (e, t, n) {
          return n || "input" !== e.nodeName.toLowerCase()
            ? void 0
            : e.defaultValue;
        }),
      se(function (e) {
        return null == e.getAttribute("disabled");
      }) ||
        ue(P, function (e, t, n) {
          var r;
          return n
            ? void 0
            : !0 === e[t]
            ? t.toLowerCase()
            : (r = e.getAttributeNode(t)) && r.specified
            ? r.value
            : null;
        }),
      oe
    );
  })(h);
  (C.find = d),
    (C.expr = d.selectors),
    (C.expr[":"] = C.expr.pseudos),
    (C.unique = d.uniqueSort),
    (C.text = d.getText),
    (C.isXMLDoc = d.isXML),
    (C.contains = d.contains);
  var x = C.expr.match.needsContext,
    b = /^<(\w+)\s*\/?>(?:<\/\1>|)$/,
    w = /^.[^:#\[\.,]*$/;
  function k(e, n, r) {
    if (C.isFunction(n))
      return C.grep(e, function (e, t) {
        return !!n.call(e, t, e) !== r;
      });
    if (n.nodeType)
      return C.grep(e, function (e) {
        return (e === n) !== r;
      });
    if ("string" == typeof n) {
      if (w.test(n)) return C.filter(n, e, r);
      n = C.filter(n, e);
    }
    return C.grep(e, function (e) {
      return 0 <= o.call(n, e) !== r;
    });
  }
  (C.filter = function (e, t, n) {
    var r = t[0];
    return (
      n && (e = ":not(" + e + ")"),
      1 === t.length && 1 === r.nodeType
        ? C.find.matchesSelector(r, e)
          ? [r]
          : []
        : C.find.matches(
            e,
            C.grep(t, function (e) {
              return 1 === e.nodeType;
            })
          )
    );
  }),
    C.fn.extend({
      find: function (e) {
        var t,
          n = this.length,
          r = [],
          o = this;
        if ("string" != typeof e)
          return this.pushStack(
            C(e).filter(function () {
              for (t = 0; t < n; t++) if (C.contains(o[t], this)) return !0;
            })
          );
        for (t = 0; t < n; t++) C.find(e, o[t], r);
        return (
          ((r = this.pushStack(1 < n ? C.unique(r) : r)).selector = this
            .selector
            ? this.selector + " " + e
            : e),
          r
        );
      },
      filter: function (e) {
        return this.pushStack(k(this, e || [], !1));
      },
      not: function (e) {
        return this.pushStack(k(this, e || [], !0));
      },
      is: function (e) {
        return !!k(this, "string" == typeof e && x.test(e) ? C(e) : e || [], !1)
          .length;
      },
    });
  var T,
    S = /^(?:\s*(<[\w\W]+>)[^>]*|#([\w-]*))$/;
  ((C.fn.init = function (e, t) {
    var n, r;
    if (!e) return this;
    if ("string" != typeof e)
      return e.nodeType
        ? ((this.context = this[0] = e), (this.length = 1), this)
        : C.isFunction(e)
        ? void 0 !== T.ready
          ? T.ready(e)
          : e(C)
        : (void 0 !== e.selector &&
            ((this.selector = e.selector), (this.context = e.context)),
          C.makeArray(e, this));
    if (
      !(n =
        "<" === e[0] && ">" === e[e.length - 1] && 3 <= e.length
          ? [null, e, null]
          : S.exec(e)) ||
      (!n[1] && t)
    )
      return !t || t.jquery ? (t || T).find(e) : this.constructor(t).find(e);
    if (n[1]) {
      if (
        ((t = t instanceof C ? t[0] : t),
        C.merge(
          this,
          C.parseHTML(n[1], t && t.nodeType ? t.ownerDocument || t : y, !0)
        ),
        b.test(n[1]) && C.isPlainObject(t))
      )
        for (n in t) C.isFunction(this[n]) ? this[n](t[n]) : this.attr(n, t[n]);
      return this;
    }
    return (
      (r = y.getElementById(n[2])) &&
        r.parentNode &&
        ((this.length = 1), (this[0] = r)),
      (this.context = y),
      (this.selector = e),
      this
    );
  }).prototype = C.fn),
    (T = C(y));
  var j = /^(?:parents|prev(?:Until|All))/,
    A = { children: !0, contents: !0, next: !0, prev: !0 };
  function E(e, t) {
    for (; (e = e[t]) && 1 !== e.nodeType; );
    return e;
  }
  C.extend({
    dir: function (e, t, n) {
      for (var r = [], o = void 0 !== n; (e = e[t]) && 9 !== e.nodeType; )
        if (1 === e.nodeType) {
          if (o && C(e).is(n)) break;
          r.push(e);
        }
      return r;
    },
    sibling: function (e, t) {
      for (var n = []; e; e = e.nextSibling)
        1 === e.nodeType && e !== t && n.push(e);
      return n;
    },
  }),
    C.fn.extend({
      has: function (e) {
        var t = C(e, this),
          n = t.length;
        return this.filter(function () {
          for (var e = 0; e < n; e++) if (C.contains(this, t[e])) return !0;
        });
      },
      closest: function (e, t) {
        for (
          var n,
            r = 0,
            o = this.length,
            i = [],
            a = x.test(e) || "string" != typeof e ? C(e, t || this.context) : 0;
          r < o;
          r++
        )
          for (n = this[r]; n && n !== t; n = n.parentNode)
            if (
              n.nodeType < 11 &&
              (a
                ? -1 < a.index(n)
                : 1 === n.nodeType && C.find.matchesSelector(n, e))
            ) {
              i.push(n);
              break;
            }
        return this.pushStack(1 < i.length ? C.unique(i) : i);
      },
      index: function (e) {
        return e
          ? "string" == typeof e
            ? o.call(C(e), this[0])
            : o.call(this, e.jquery ? e[0] : e)
          : this[0] && this[0].parentNode
          ? this.first().prevAll().length
          : -1;
      },
      add: function (e, t) {
        return this.pushStack(C.unique(C.merge(this.get(), C(e, t))));
      },
      addBack: function (e) {
        return this.add(
          null == e ? this.prevObject : this.prevObject.filter(e)
        );
      },
    }),
    C.each(
      {
        parent: function (e) {
          var t = e.parentNode;
          return t && 11 !== t.nodeType ? t : null;
        },
        parents: function (e) {
          return C.dir(e, "parentNode");
        },
        parentsUntil: function (e, t, n) {
          return C.dir(e, "parentNode", n);
        },
        next: function (e) {
          return E(e, "nextSibling");
        },
        prev: function (e) {
          return E(e, "previousSibling");
        },
        nextAll: function (e) {
          return C.dir(e, "nextSibling");
        },
        prevAll: function (e) {
          return C.dir(e, "previousSibling");
        },
        nextUntil: function (e, t, n) {
          return C.dir(e, "nextSibling", n);
        },
        prevUntil: function (e, t, n) {
          return C.dir(e, "previousSibling", n);
        },
        siblings: function (e) {
          return C.sibling((e.parentNode || {}).firstChild, e);
        },
        children: function (e) {
          return C.sibling(e.firstChild);
        },
        contents: function (e) {
          return e.contentDocument || C.merge([], e.childNodes);
        },
      },
      function (r, o) {
        C.fn[r] = function (e, t) {
          var n = C.map(this, o, e);
          return (
            "Until" !== r.slice(-5) && (t = e),
            t && "string" == typeof t && (n = C.filter(t, n)),
            1 < this.length && (A[r] || C.unique(n), j.test(r) && n.reverse()),
            this.pushStack(n)
          );
        };
      }
    );
  var N,
    D = /\S+/g,
    _ = {};
  function $() {
    y.removeEventListener("DOMContentLoaded", $, !1),
      h.removeEventListener("load", $, !1),
      C.ready();
  }
  (C.Callbacks = function (o) {
    o =
      "string" == typeof o
        ? _[o] ||
          (function (e) {
            var n = (_[e] = {});
            return (
              C.each(e.match(D) || [], function (e, t) {
                n[t] = !0;
              }),
              n
            );
          })(o)
        : C.extend({}, o);
    var t,
      n,
      r,
      i,
      a,
      s,
      u = [],
      c = !o.once && [],
      l = function (e) {
        for (
          t = o.memory && e, n = !0, s = i || 0, i = 0, a = u.length, r = !0;
          u && s < a;
          s++
        )
          if (!1 === u[s].apply(e[0], e[1]) && o.stopOnFalse) {
            t = !1;
            break;
          }
        (r = !1),
          u && (c ? c.length && l(c.shift()) : t ? (u = []) : p.disable());
      },
      p = {
        add: function () {
          if (u) {
            var e = u.length;
            !(function r(e) {
              C.each(e, function (e, t) {
                var n = C.type(t);
                "function" === n
                  ? (o.unique && p.has(t)) || u.push(t)
                  : t && t.length && "string" !== n && r(t);
              });
            })(arguments),
              r ? (a = u.length) : t && ((i = e), l(t));
          }
          return this;
        },
        remove: function () {
          return (
            u &&
              C.each(arguments, function (e, t) {
                for (var n; -1 < (n = C.inArray(t, u, n)); )
                  u.splice(n, 1), r && (n <= a && a--, n <= s && s--);
              }),
            this
          );
        },
        has: function (e) {
          return e ? -1 < C.inArray(e, u) : !(!u || !u.length);
        },
        empty: function () {
          return (u = []), (a = 0), this;
        },
        disable: function () {
          return (u = c = t = void 0), this;
        },
        disabled: function () {
          return !u;
        },
        lock: function () {
          return (c = void 0), t || p.disable(), this;
        },
        locked: function () {
          return !c;
        },
        fireWith: function (e, t) {
          return (
            !u ||
              (n && !c) ||
              ((t = [e, (t = t || []).slice ? t.slice() : t]),
              r ? c.push(t) : l(t)),
            this
          );
        },
        fire: function () {
          return p.fireWith(this, arguments), this;
        },
        fired: function () {
          return !!n;
        },
      };
    return p;
  }),
    C.extend({
      Deferred: function (e) {
        var i = [
            ["resolve", "done", C.Callbacks("once memory"), "resolved"],
            ["reject", "fail", C.Callbacks("once memory"), "rejected"],
            ["notify", "progress", C.Callbacks("memory")],
          ],
          o = "pending",
          a = {
            state: function () {
              return o;
            },
            always: function () {
              return s.done(arguments).fail(arguments), this;
            },
            then: function () {
              var o = arguments;
              return C.Deferred(function (r) {
                C.each(i, function (e, t) {
                  var n = C.isFunction(o[e]) && o[e];
                  s[t[1]](function () {
                    var e = n && n.apply(this, arguments);
                    e && C.isFunction(e.promise)
                      ? e
                          .promise()
                          .done(r.resolve)
                          .fail(r.reject)
                          .progress(r.notify)
                      : r[t[0] + "With"](
                          this === a ? r.promise() : this,
                          n ? [e] : arguments
                        );
                  });
                }),
                  (o = null);
              }).promise();
            },
            promise: function (e) {
              return null != e ? C.extend(e, a) : a;
            },
          },
          s = {};
        return (
          (a.pipe = a.then),
          C.each(i, function (e, t) {
            var n = t[2],
              r = t[3];
            (a[t[1]] = n.add),
              r &&
                n.add(
                  function () {
                    o = r;
                  },
                  i[1 ^ e][2].disable,
                  i[2][2].lock
                ),
              (s[t[0]] = function () {
                return s[t[0] + "With"](this === s ? a : this, arguments), this;
              }),
              (s[t[0] + "With"] = n.fireWith);
          }),
          a.promise(s),
          e && e.call(s, s),
          s
        );
      },
      when: function (e) {
        function t(t, n, r) {
          return function (e) {
            (n[t] = this),
              (r[t] = 1 < arguments.length ? l.call(arguments) : e),
              r === o ? c.notifyWith(n, r) : --u || c.resolveWith(n, r);
          };
        }
        var o,
          n,
          r,
          i = 0,
          a = l.call(arguments),
          s = a.length,
          u = 1 !== s || (e && C.isFunction(e.promise)) ? s : 0,
          c = 1 === u ? e : C.Deferred();
        if (1 < s)
          for (o = new Array(s), n = new Array(s), r = new Array(s); i < s; i++)
            a[i] && C.isFunction(a[i].promise)
              ? a[i]
                  .promise()
                  .done(t(i, r, a))
                  .fail(c.reject)
                  .progress(t(i, n, o))
              : --u;
        return u || c.resolveWith(r, a), c.promise();
      },
    }),
    (C.fn.ready = function (e) {
      return C.ready.promise().done(e), this;
    }),
    C.extend({
      isReady: !1,
      readyWait: 1,
      holdReady: function (e) {
        e ? C.readyWait++ : C.ready(!0);
      },
      ready: function (e) {
        (!0 === e ? --C.readyWait : C.isReady) ||
          ((C.isReady = !0) !== e && 0 < --C.readyWait) ||
          (N.resolveWith(y, [C]),
          C.fn.triggerHandler &&
            (C(y).triggerHandler("ready"), C(y).off("ready")));
      },
    }),
    (C.ready.promise = function (e) {
      return (
        N ||
          ((N = C.Deferred()),
          "complete" === y.readyState
            ? setTimeout(C.ready)
            : (y.addEventListener("DOMContentLoaded", $, !1),
              h.addEventListener("load", $, !1))),
        N.promise(e)
      );
    }),
    C.ready.promise();
  var O = (C.access = function (e, t, n, r, o, i, a) {
    var s = 0,
      u = e.length,
      c = null == n;
    if ("object" === C.type(n))
      for (s in ((o = !0), n)) C.access(e, t, s, n[s], !0, i, a);
    else if (
      void 0 !== r &&
      ((o = !0),
      C.isFunction(r) || (a = !0),
      c &&
        (t = a
          ? (t.call(e, r), null)
          : ((c = t),
            function (e, t, n) {
              return c.call(C(e), n);
            })),
      t)
    )
      for (; s < u; s++) t(e[s], n, a ? r : r.call(e[s], s, t(e[s], n)));
    return o ? e : c ? t.call(e) : u ? t(e[0], n) : i;
  });
  function L() {
    Object.defineProperty((this.cache = {}), 0, {
      get: function () {
        return {};
      },
    }),
      (this.expando = C.expando + L.uid++);
  }
  (C.acceptData = function (e) {
    return 1 === e.nodeType || 9 === e.nodeType || !+e.nodeType;
  }),
    (L.uid = 1),
    (L.accepts = C.acceptData),
    (L.prototype = {
      key: function (t) {
        if (!L.accepts(t)) return 0;
        var n = {},
          r = t[this.expando];
        if (!r) {
          r = L.uid++;
          try {
            (n[this.expando] = { value: r }), Object.defineProperties(t, n);
          } catch (e) {
            (n[this.expando] = r), C.extend(t, n);
          }
        }
        return this.cache[r] || (this.cache[r] = {}), r;
      },
      set: function (e, t, n) {
        var r,
          o = this.key(e),
          i = this.cache[o];
        if ("string" == typeof t) i[t] = n;
        else if (C.isEmptyObject(i)) C.extend(this.cache[o], t);
        else for (r in t) i[r] = t[r];
        return i;
      },
      get: function (e, t) {
        var n = this.cache[this.key(e)];
        return void 0 === t ? n : n[t];
      },
      access: function (e, t, n) {
        var r;
        return void 0 === t || (t && "string" == typeof t && void 0 === n)
          ? void 0 !== (r = this.get(e, t))
            ? r
            : this.get(e, C.camelCase(t))
          : (this.set(e, t, n), void 0 !== n ? n : t);
      },
      remove: function (e, t) {
        var n,
          r,
          o,
          i = this.key(e),
          a = this.cache[i];
        if (void 0 === t) this.cache[i] = {};
        else {
          n = (r = C.isArray(t)
            ? t.concat(t.map(C.camelCase))
            : ((o = C.camelCase(t)),
              t in a ? [t, o] : (r = o) in a ? [r] : r.match(D) || [])).length;
          for (; n--; ) delete a[r[n]];
        }
      },
      hasData: function (e) {
        return !C.isEmptyObject(this.cache[e[this.expando]] || {});
      },
      discard: function (e) {
        e[this.expando] && delete this.cache[e[this.expando]];
      },
    });
  var F = new L(),
    q = new L(),
    P = /^(?:\{[\w\W]*\}|\[[\w\W]*\])$/,
    H = /([A-Z])/g;
  function I(e, t, n) {
    var r;
    if (void 0 === n && 1 === e.nodeType)
      if (
        ((r = "data-" + t.replace(H, "-$1").toLowerCase()),
        "string" == typeof (n = e.getAttribute(r)))
      ) {
        try {
          n =
            "true" === n ||
            ("false" !== n &&
              ("null" === n
                ? null
                : +n + "" === n
                ? +n
                : P.test(n)
                ? C.parseJSON(n)
                : n));
        } catch (e) {}
        q.set(e, t, n);
      } else n = void 0;
    return n;
  }
  C.extend({
    hasData: function (e) {
      return q.hasData(e) || F.hasData(e);
    },
    data: function (e, t, n) {
      return q.access(e, t, n);
    },
    removeData: function (e, t) {
      q.remove(e, t);
    },
    _data: function (e, t, n) {
      return F.access(e, t, n);
    },
    _removeData: function (e, t) {
      F.remove(e, t);
    },
  }),
    C.fn.extend({
      data: function (r, e) {
        var t,
          n,
          o,
          i = this[0],
          a = i && i.attributes;
        if (void 0 !== r)
          return "object" == typeof r
            ? this.each(function () {
                q.set(this, r);
              })
            : O(
                this,
                function (t) {
                  var e,
                    n = C.camelCase(r);
                  if (i && void 0 === t) {
                    if (void 0 !== (e = q.get(i, r))) return e;
                    if (void 0 !== (e = q.get(i, n))) return e;
                    if (void 0 !== (e = I(i, n, void 0))) return e;
                  } else
                    this.each(function () {
                      var e = q.get(this, n);
                      q.set(this, n, t),
                        -1 !== r.indexOf("-") &&
                          void 0 !== e &&
                          q.set(this, r, t);
                    });
                },
                null,
                e,
                1 < arguments.length,
                null,
                !0
              );
        if (
          this.length &&
          ((o = q.get(i)), 1 === i.nodeType && !F.get(i, "hasDataAttrs"))
        ) {
          for (t = a.length; t--; )
            a[t] &&
              0 === (n = a[t].name).indexOf("data-") &&
              ((n = C.camelCase(n.slice(5))), I(i, n, o[n]));
          F.set(i, "hasDataAttrs", !0);
        }
        return o;
      },
      removeData: function (e) {
        return this.each(function () {
          q.remove(this, e);
        });
      },
    }),
    C.extend({
      queue: function (e, t, n) {
        var r;
        return e
          ? ((t = (t || "fx") + "queue"),
            (r = F.get(e, t)),
            n &&
              (!r || C.isArray(n)
                ? (r = F.access(e, t, C.makeArray(n)))
                : r.push(n)),
            r || [])
          : void 0;
      },
      dequeue: function (e, t) {
        t = t || "fx";
        var n = C.queue(e, t),
          r = n.length,
          o = n.shift(),
          i = C._queueHooks(e, t);
        "inprogress" === o && ((o = n.shift()), r--),
          o &&
            ("fx" === t && n.unshift("inprogress"),
            delete i.stop,
            o.call(
              e,
              function () {
                C.dequeue(e, t);
              },
              i
            )),
          !r && i && i.empty.fire();
      },
      _queueHooks: function (e, t) {
        var n = t + "queueHooks";
        return (
          F.get(e, n) ||
          F.access(e, n, {
            empty: C.Callbacks("once memory").add(function () {
              F.remove(e, [t + "queue", n]);
            }),
          })
        );
      },
    }),
    C.fn.extend({
      queue: function (t, n) {
        var e = 2;
        return (
          "string" != typeof t && ((n = t), (t = "fx"), e--),
          arguments.length < e
            ? C.queue(this[0], t)
            : void 0 === n
            ? this
            : this.each(function () {
                var e = C.queue(this, t, n);
                C._queueHooks(this, t),
                  "fx" === t && "inprogress" !== e[0] && C.dequeue(this, t);
              })
        );
      },
      dequeue: function (e) {
        return this.each(function () {
          C.dequeue(this, e);
        });
      },
      clearQueue: function (e) {
        return this.queue(e || "fx", []);
      },
      promise: function (e, t) {
        function n() {
          --o || i.resolveWith(a, [a]);
        }
        var r,
          o = 1,
          i = C.Deferred(),
          a = this,
          s = this.length;
        for (
          "string" != typeof e && ((t = e), (e = void 0)), e = e || "fx";
          s--;

        )
          (r = F.get(a[s], e + "queueHooks")) &&
            r.empty &&
            (o++, r.empty.add(n));
        return n(), i.promise(t);
      },
    });
  function M(e, t) {
    return (
      (e = t || e),
      "none" === C.css(e, "display") || !C.contains(e.ownerDocument, e)
    );
  }
  var R,
    z,
    W = /[+-]?(?:\d*\.|)\d+(?:[eE][+-]?\d+|)/.source,
    B = ["Top", "Right", "Bottom", "Left"],
    U = /^(?:checkbox|radio)$/i;
  (R = y.createDocumentFragment().appendChild(y.createElement("div"))),
    (z = y.createElement("input")).setAttribute("type", "radio"),
    z.setAttribute("checked", "checked"),
    z.setAttribute("name", "t"),
    R.appendChild(z),
    (v.checkClone = R.cloneNode(!0).cloneNode(!0).lastChild.checked),
    (R.innerHTML = "<textarea>x</textarea>"),
    (v.noCloneChecked = !!R.cloneNode(!0).lastChild.defaultValue);
  var X = "undefined";
  v.focusinBubbles = "onfocusin" in h;
  var V = /^key/,
    J = /^(?:mouse|pointer|contextmenu)|click/,
    G = /^(?:focusinfocus|focusoutblur)$/,
    K = /^([^.]*)(?:\.(.+)|)$/;
  function Y() {
    return !0;
  }
  function Q() {
    return !1;
  }
  function Z() {
    try {
      return y.activeElement;
    } catch (e) {}
  }
  (C.event = {
    global: {},
    add: function (t, e, n, r, o) {
      var i,
        a,
        s,
        u,
        c,
        l,
        p,
        f,
        d,
        h,
        g,
        m = F.get(t);
      if (m)
        for (
          n.handler && ((n = (i = n).handler), (o = i.selector)),
            n.guid || (n.guid = C.guid++),
            (u = m.events) || (u = m.events = {}),
            (a = m.handle) ||
              (a = m.handle =
                function (e) {
                  return typeof C != X && C.event.triggered !== e.type
                    ? C.event.dispatch.apply(t, arguments)
                    : void 0;
                }),
            c = (e = (e || "").match(D) || [""]).length;
          c--;

        )
          (d = g = (s = K.exec(e[c]) || [])[1]),
            (h = (s[2] || "").split(".").sort()),
            d &&
              ((p = C.event.special[d] || {}),
              (d = (o ? p.delegateType : p.bindType) || d),
              (p = C.event.special[d] || {}),
              (l = C.extend(
                {
                  type: d,
                  origType: g,
                  data: r,
                  handler: n,
                  guid: n.guid,
                  selector: o,
                  needsContext: o && C.expr.match.needsContext.test(o),
                  namespace: h.join("."),
                },
                i
              )),
              (f = u[d]) ||
                (((f = u[d] = []).delegateCount = 0),
                (p.setup && !1 !== p.setup.call(t, r, h, a)) ||
                  (t.addEventListener && t.addEventListener(d, a, !1))),
              p.add &&
                (p.add.call(t, l), l.handler.guid || (l.handler.guid = n.guid)),
              o ? f.splice(f.delegateCount++, 0, l) : f.push(l),
              (C.event.global[d] = !0));
    },
    remove: function (e, t, n, r, o) {
      var i,
        a,
        s,
        u,
        c,
        l,
        p,
        f,
        d,
        h,
        g,
        m = F.hasData(e) && F.get(e);
      if (m && (u = m.events)) {
        for (c = (t = (t || "").match(D) || [""]).length; c--; )
          if (
            ((d = g = (s = K.exec(t[c]) || [])[1]),
            (h = (s[2] || "").split(".").sort()),
            d)
          ) {
            for (
              p = C.event.special[d] || {},
                f = u[(d = (r ? p.delegateType : p.bindType) || d)] || [],
                s =
                  s[2] &&
                  new RegExp("(^|\\.)" + h.join("\\.(?:.*\\.|)") + "(\\.|$)"),
                a = i = f.length;
              i--;

            )
              (l = f[i]),
                (!o && g !== l.origType) ||
                  (n && n.guid !== l.guid) ||
                  (s && !s.test(l.namespace)) ||
                  (r && r !== l.selector && ("**" !== r || !l.selector)) ||
                  (f.splice(i, 1),
                  l.selector && f.delegateCount--,
                  p.remove && p.remove.call(e, l));
            a &&
              !f.length &&
              ((p.teardown && !1 !== p.teardown.call(e, h, m.handle)) ||
                C.removeEvent(e, d, m.handle),
              delete u[d]);
          } else for (d in u) C.event.remove(e, d + t[c], n, r, !0);
        C.isEmptyObject(u) && (delete m.handle, F.remove(e, "events"));
      }
    },
    trigger: function (e, t, n, r) {
      var o,
        i,
        a,
        s,
        u,
        c,
        l,
        p = [n || y],
        f = m.call(e, "type") ? e.type : e,
        d = m.call(e, "namespace") ? e.namespace.split(".") : [];
      if (
        ((i = a = n = n || y),
        3 !== n.nodeType &&
          8 !== n.nodeType &&
          !G.test(f + C.event.triggered) &&
          (0 <= f.indexOf(".") && ((f = (d = f.split(".")).shift()), d.sort()),
          (u = f.indexOf(":") < 0 && "on" + f),
          ((e = e[C.expando]
            ? e
            : new C.Event(f, "object" == typeof e && e)).isTrigger = r ? 2 : 3),
          (e.namespace = d.join(".")),
          (e.namespace_re = e.namespace
            ? new RegExp("(^|\\.)" + d.join("\\.(?:.*\\.|)") + "(\\.|$)")
            : null),
          (e.result = void 0),
          e.target || (e.target = n),
          (t = null == t ? [e] : C.makeArray(t, [e])),
          (l = C.event.special[f] || {}),
          r || !l.trigger || !1 !== l.trigger.apply(n, t)))
      ) {
        if (!r && !l.noBubble && !C.isWindow(n)) {
          for (
            s = l.delegateType || f, G.test(s + f) || (i = i.parentNode);
            i;
            i = i.parentNode
          )
            p.push(i), (a = i);
          a === (n.ownerDocument || y) &&
            p.push(a.defaultView || a.parentWindow || h);
        }
        for (o = 0; (i = p[o++]) && !e.isPropagationStopped(); )
          (e.type = 1 < o ? s : l.bindType || f),
            (c = (F.get(i, "events") || {})[e.type] && F.get(i, "handle")) &&
              c.apply(i, t),
            (c = u && i[u]) &&
              c.apply &&
              C.acceptData(i) &&
              ((e.result = c.apply(i, t)),
              !1 === e.result && e.preventDefault());
        return (
          (e.type = f),
          r ||
            e.isDefaultPrevented() ||
            (l._default && !1 !== l._default.apply(p.pop(), t)) ||
            !C.acceptData(n) ||
            (u &&
              C.isFunction(n[f]) &&
              !C.isWindow(n) &&
              ((a = n[u]) && (n[u] = null),
              n[(C.event.triggered = f)](),
              (C.event.triggered = void 0),
              a && (n[u] = a))),
          e.result
        );
      }
    },
    dispatch: function (e) {
      e = C.event.fix(e);
      var t,
        n,
        r,
        o,
        i,
        a = [],
        s = l.call(arguments),
        u = (F.get(this, "events") || {})[e.type] || [],
        c = C.event.special[e.type] || {};
      if (
        (((s[0] = e).delegateTarget = this),
        !c.preDispatch || !1 !== c.preDispatch.call(this, e))
      ) {
        for (
          a = C.event.handlers.call(this, e, u), t = 0;
          (o = a[t++]) && !e.isPropagationStopped();

        )
          for (
            e.currentTarget = o.elem, n = 0;
            (i = o.handlers[n++]) && !e.isImmediatePropagationStopped();

          )
            (e.namespace_re && !e.namespace_re.test(i.namespace)) ||
              ((e.handleObj = i),
              (e.data = i.data),
              void 0 !==
                (r = (
                  (C.event.special[i.origType] || {}).handle || i.handler
                ).apply(o.elem, s)) &&
                !1 === (e.result = r) &&
                (e.preventDefault(), e.stopPropagation()));
        return c.postDispatch && c.postDispatch.call(this, e), e.result;
      }
    },
    handlers: function (e, t) {
      var n,
        r,
        o,
        i,
        a = [],
        s = t.delegateCount,
        u = e.target;
      if (s && u.nodeType && (!e.button || "click" !== e.type))
        for (; u !== this; u = u.parentNode || this)
          if (!0 !== u.disabled || "click" !== e.type) {
            for (r = [], n = 0; n < s; n++)
              void 0 === r[(o = (i = t[n]).selector + " ")] &&
                (r[o] = i.needsContext
                  ? 0 <= C(o, this).index(u)
                  : C.find(o, this, null, [u]).length),
                r[o] && r.push(i);
            r.length && a.push({ elem: u, handlers: r });
          }
      return s < t.length && a.push({ elem: this, handlers: t.slice(s) }), a;
    },
    props:
      "altKey bubbles cancelable ctrlKey currentTarget eventPhase metaKey relatedTarget shiftKey target timeStamp view which".split(
        " "
      ),
    fixHooks: {},
    keyHooks: {
      props: "char charCode key keyCode".split(" "),
      filter: function (e, t) {
        return (
          null == e.which &&
            (e.which = null != t.charCode ? t.charCode : t.keyCode),
          e
        );
      },
    },
    mouseHooks: {
      props:
        "button buttons clientX clientY offsetX offsetY pageX pageY screenX screenY toElement".split(
          " "
        ),
      filter: function (e, t) {
        var n,
          r,
          o,
          i = t.button;
        return (
          null == e.pageX &&
            null != t.clientX &&
            ((r = (n = e.target.ownerDocument || y).documentElement),
            (o = n.body),
            (e.pageX =
              t.clientX +
              ((r && r.scrollLeft) || (o && o.scrollLeft) || 0) -
              ((r && r.clientLeft) || (o && o.clientLeft) || 0)),
            (e.pageY =
              t.clientY +
              ((r && r.scrollTop) || (o && o.scrollTop) || 0) -
              ((r && r.clientTop) || (o && o.clientTop) || 0))),
          e.which ||
            void 0 === i ||
            (e.which = 1 & i ? 1 : 2 & i ? 3 : 4 & i ? 2 : 0),
          e
        );
      },
    },
    fix: function (e) {
      if (e[C.expando]) return e;
      var t,
        n,
        r,
        o = e.type,
        i = e,
        a = this.fixHooks[o];
      for (
        a ||
          (this.fixHooks[o] = a =
            J.test(o) ? this.mouseHooks : V.test(o) ? this.keyHooks : {}),
          r = a.props ? this.props.concat(a.props) : this.props,
          e = new C.Event(i),
          t = r.length;
        t--;

      )
        e[(n = r[t])] = i[n];
      return (
        e.target || (e.target = y),
        3 === e.target.nodeType && (e.target = e.target.parentNode),
        a.filter ? a.filter(e, i) : e
      );
    },
    special: {
      load: { noBubble: !0 },
      focus: {
        trigger: function () {
          return this !== Z() && this.focus ? (this.focus(), !1) : void 0;
        },
        delegateType: "focusin",
      },
      blur: {
        trigger: function () {
          return this === Z() && this.blur ? (this.blur(), !1) : void 0;
        },
        delegateType: "focusout",
      },
      click: {
        trigger: function () {
          return "checkbox" === this.type &&
            this.click &&
            C.nodeName(this, "input")
            ? (this.click(), !1)
            : void 0;
        },
        _default: function (e) {
          return C.nodeName(e.target, "a");
        },
      },
      beforeunload: {
        postDispatch: function (e) {
          void 0 !== e.result &&
            e.originalEvent &&
            (e.originalEvent.returnValue = e.result);
        },
      },
    },
    simulate: function (e, t, n, r) {
      var o = C.extend(new C.Event(), n, {
        type: e,
        isSimulated: !0,
        originalEvent: {},
      });
      r ? C.event.trigger(o, null, t) : C.event.dispatch.call(t, o),
        o.isDefaultPrevented() && n.preventDefault();
    },
  }),
    (C.removeEvent = function (e, t, n) {
      e.removeEventListener && e.removeEventListener(t, n, !1);
    }),
    (C.Event = function (e, t) {
      return this instanceof C.Event
        ? (e && e.type
            ? ((this.originalEvent = e),
              (this.type = e.type),
              (this.isDefaultPrevented =
                e.defaultPrevented ||
                (void 0 === e.defaultPrevented && !1 === e.returnValue)
                  ? Y
                  : Q))
            : (this.type = e),
          t && C.extend(this, t),
          (this.timeStamp = (e && e.timeStamp) || C.now()),
          void (this[C.expando] = !0))
        : new C.Event(e, t);
    }),
    (C.Event.prototype = {
      isDefaultPrevented: Q,
      isPropagationStopped: Q,
      isImmediatePropagationStopped: Q,
      preventDefault: function () {
        var e = this.originalEvent;
        (this.isDefaultPrevented = Y),
          e && e.preventDefault && e.preventDefault();
      },
      stopPropagation: function () {
        var e = this.originalEvent;
        (this.isPropagationStopped = Y),
          e && e.stopPropagation && e.stopPropagation();
      },
      stopImmediatePropagation: function () {
        var e = this.originalEvent;
        (this.isImmediatePropagationStopped = Y),
          e && e.stopImmediatePropagation && e.stopImmediatePropagation(),
          this.stopPropagation();
      },
    }),
    C.each(
      {
        mouseenter: "mouseover",
        mouseleave: "mouseout",
        pointerenter: "pointerover",
        pointerleave: "pointerout",
      },
      function (e, o) {
        C.event.special[e] = {
          delegateType: o,
          bindType: o,
          handle: function (e) {
            var t,
              n = e.relatedTarget,
              r = e.handleObj;
            return (
              (n && (n === this || C.contains(this, n))) ||
                ((e.type = r.origType),
                (t = r.handler.apply(this, arguments)),
                (e.type = o)),
              t
            );
          },
        };
      }
    ),
    v.focusinBubbles ||
      C.each({ focus: "focusin", blur: "focusout" }, function (n, r) {
        function o(e) {
          C.event.simulate(r, e.target, C.event.fix(e), !0);
        }
        C.event.special[r] = {
          setup: function () {
            var e = this.ownerDocument || this,
              t = F.access(e, r);
            t || e.addEventListener(n, o, !0), F.access(e, r, (t || 0) + 1);
          },
          teardown: function () {
            var e = this.ownerDocument || this,
              t = F.access(e, r) - 1;
            t
              ? F.access(e, r, t)
              : (e.removeEventListener(n, o, !0), F.remove(e, r));
          },
        };
      }),
    C.fn.extend({
      on: function (e, t, n, r, o) {
        var i, a;
        if ("object" == typeof e) {
          for (a in ("string" != typeof t && ((n = n || t), (t = void 0)), e))
            this.on(a, t, n, e[a], o);
          return this;
        }
        if (
          (null == n && null == r
            ? ((r = t), (n = t = void 0))
            : null == r &&
              ("string" == typeof t
                ? ((r = n), (n = void 0))
                : ((r = n), (n = t), (t = void 0))),
          !1 === r)
        )
          r = Q;
        else if (!r) return this;
        return (
          1 === o &&
            ((i = r),
            ((r = function (e) {
              return C().off(e), i.apply(this, arguments);
            }).guid = i.guid || (i.guid = C.guid++))),
          this.each(function () {
            C.event.add(this, e, r, n, t);
          })
        );
      },
      one: function (e, t, n, r) {
        return this.on(e, t, n, r, 1);
      },
      off: function (e, t, n) {
        var r, o;
        if (e && e.preventDefault && e.handleObj)
          return (
            (r = e.handleObj),
            C(e.delegateTarget).off(
              r.namespace ? r.origType + "." + r.namespace : r.origType,
              r.selector,
              r.handler
            ),
            this
          );
        if ("object" != typeof e)
          return (
            (!1 !== t && "function" != typeof t) || ((n = t), (t = void 0)),
            !1 === n && (n = Q),
            this.each(function () {
              C.event.remove(this, e, n, t);
            })
          );
        for (o in e) this.off(o, t, e[o]);
        return this;
      },
      trigger: function (e, t) {
        return this.each(function () {
          C.event.trigger(e, t, this);
        });
      },
      triggerHandler: function (e, t) {
        var n = this[0];
        return n ? C.event.trigger(e, t, n, !0) : void 0;
      },
    });
  var ee =
      /<(?!area|br|col|embed|hr|img|input|link|meta|param)(([\w:]+)[^>]*)\/>/gi,
    te = /<([\w:]+)/,
    ne = /<|&#?\w+;/,
    re = /<(?:script|style|link)/i,
    oe = /checked\s*(?:[^=]|=\s*.checked.)/i,
    ie = /^$|\/(?:java|ecma)script/i,
    ae = /^true\/(.*)/,
    se = /^\s*<!(?:\[CDATA\[|--)|(?:\]\]|--)>\s*$/g,
    ue = {
      option: [1, "<select multiple='multiple'>", "</select>"],
      thead: [1, "<table>", "</table>"],
      col: [2, "<table><colgroup>", "</colgroup></table>"],
      tr: [2, "<table><tbody>", "</tbody></table>"],
      td: [3, "<table><tbody><tr>", "</tr></tbody></table>"],
      _default: [0, "", ""],
    };
  function ce(e, t) {
    return C.nodeName(e, "table") &&
      C.nodeName(11 !== t.nodeType ? t : t.firstChild, "tr")
      ? e.getElementsByTagName("tbody")[0] ||
          e.appendChild(e.ownerDocument.createElement("tbody"))
      : e;
  }
  function le(e) {
    return (e.type = (null !== e.getAttribute("type")) + "/" + e.type), e;
  }
  function pe(e) {
    var t = ae.exec(e.type);
    return t ? (e.type = t[1]) : e.removeAttribute("type"), e;
  }
  function fe(e, t) {
    for (var n = 0, r = e.length; n < r; n++)
      F.set(e[n], "globalEval", !t || F.get(t[n], "globalEval"));
  }
  function de(e, t) {
    var n, r, o, i, a, s, u, c;
    if (1 === t.nodeType) {
      if (
        F.hasData(e) &&
        ((i = F.access(e)), (a = F.set(t, i)), (c = i.events))
      )
        for (o in (delete a.handle, (a.events = {}), c))
          for (n = 0, r = c[o].length; n < r; n++) C.event.add(t, o, c[o][n]);
      q.hasData(e) && ((s = q.access(e)), (u = C.extend({}, s)), q.set(t, u));
    }
  }
  function he(e, t) {
    var n = e.getElementsByTagName
      ? e.getElementsByTagName(t || "*")
      : e.querySelectorAll
      ? e.querySelectorAll(t || "*")
      : [];
    return void 0 === t || (t && C.nodeName(e, t)) ? C.merge([e], n) : n;
  }
  (ue.optgroup = ue.option),
    (ue.tbody = ue.tfoot = ue.colgroup = ue.caption = ue.thead),
    (ue.th = ue.td),
    C.extend({
      clone: function (e, t, n) {
        var r,
          o,
          i,
          a,
          s,
          u,
          c,
          l = e.cloneNode(!0),
          p = C.contains(e.ownerDocument, e);
        if (
          !(
            v.noCloneChecked ||
            (1 !== e.nodeType && 11 !== e.nodeType) ||
            C.isXMLDoc(e)
          )
        )
          for (a = he(l), r = 0, o = (i = he(e)).length; r < o; r++)
            (s = i[r]),
              (u = a[r]),
              void 0,
              "input" === (c = u.nodeName.toLowerCase()) && U.test(s.type)
                ? (u.checked = s.checked)
                : ("input" !== c && "textarea" !== c) ||
                  (u.defaultValue = s.defaultValue);
        if (t)
          if (n)
            for (
              i = i || he(e), a = a || he(l), r = 0, o = i.length;
              r < o;
              r++
            )
              de(i[r], a[r]);
          else de(e, l);
        return (
          0 < (a = he(l, "script")).length && fe(a, !p && he(e, "script")), l
        );
      },
      buildFragment: function (e, t, n, r) {
        for (
          var o,
            i,
            a,
            s,
            u,
            c,
            l = t.createDocumentFragment(),
            p = [],
            f = 0,
            d = e.length;
          f < d;
          f++
        )
          if ((o = e[f]) || 0 === o)
            if ("object" === C.type(o)) C.merge(p, o.nodeType ? [o] : o);
            else if (ne.test(o)) {
              for (
                i = i || l.appendChild(t.createElement("div")),
                  a = (te.exec(o) || ["", ""])[1].toLowerCase(),
                  s = ue[a] || ue._default,
                  i.innerHTML = s[1] + o.replace(ee, "<$1></$2>") + s[2],
                  c = s[0];
                c--;

              )
                i = i.lastChild;
              C.merge(p, i.childNodes), ((i = l.firstChild).textContent = "");
            } else p.push(t.createTextNode(o));
        for (l.textContent = "", f = 0; (o = p[f++]); )
          if (
            (!r || -1 === C.inArray(o, r)) &&
            ((u = C.contains(o.ownerDocument, o)),
            (i = he(l.appendChild(o), "script")),
            u && fe(i),
            n)
          )
            for (c = 0; (o = i[c++]); ) ie.test(o.type || "") && n.push(o);
        return l;
      },
      cleanData: function (e) {
        for (
          var t, n, r, o, i = C.event.special, a = 0;
          void 0 !== (n = e[a]);
          a++
        ) {
          if (C.acceptData(n) && (o = n[F.expando]) && (t = F.cache[o])) {
            if (t.events)
              for (r in t.events)
                i[r] ? C.event.remove(n, r) : C.removeEvent(n, r, t.handle);
            F.cache[o] && delete F.cache[o];
          }
          delete q.cache[n[q.expando]];
        }
      },
    }),
    C.fn.extend({
      text: function (e) {
        return O(
          this,
          function (e) {
            return void 0 === e
              ? C.text(this)
              : this.empty().each(function () {
                  (1 !== this.nodeType &&
                    11 !== this.nodeType &&
                    9 !== this.nodeType) ||
                    (this.textContent = e);
                });
          },
          null,
          e,
          arguments.length
        );
      },
      append: function () {
        return this.domManip(arguments, function (e) {
          (1 !== this.nodeType &&
            11 !== this.nodeType &&
            9 !== this.nodeType) ||
            ce(this, e).appendChild(e);
        });
      },
      prepend: function () {
        return this.domManip(arguments, function (e) {
          if (
            1 === this.nodeType ||
            11 === this.nodeType ||
            9 === this.nodeType
          ) {
            var t = ce(this, e);
            t.insertBefore(e, t.firstChild);
          }
        });
      },
      before: function () {
        return this.domManip(arguments, function (e) {
          this.parentNode && this.parentNode.insertBefore(e, this);
        });
      },
      after: function () {
        return this.domManip(arguments, function (e) {
          this.parentNode && this.parentNode.insertBefore(e, this.nextSibling);
        });
      },
      remove: function (e, t) {
        for (
          var n, r = e ? C.filter(e, this) : this, o = 0;
          null != (n = r[o]);
          o++
        )
          t || 1 !== n.nodeType || C.cleanData(he(n)),
            n.parentNode &&
              (t && C.contains(n.ownerDocument, n) && fe(he(n, "script")),
              n.parentNode.removeChild(n));
        return this;
      },
      empty: function () {
        for (var e, t = 0; null != (e = this[t]); t++)
          1 === e.nodeType && (C.cleanData(he(e, !1)), (e.textContent = ""));
        return this;
      },
      clone: function (e, t) {
        return (
          (e = null != e && e),
          (t = null == t ? e : t),
          this.map(function () {
            return C.clone(this, e, t);
          })
        );
      },
      html: function (e) {
        return O(
          this,
          function (e) {
            var t = this[0] || {},
              n = 0,
              r = this.length;
            if (void 0 === e && 1 === t.nodeType) return t.innerHTML;
            if (
              "string" == typeof e &&
              !re.test(e) &&
              !ue[(te.exec(e) || ["", ""])[1].toLowerCase()]
            ) {
              e = e.replace(ee, "<$1></$2>");
              try {
                for (; n < r; n++)
                  1 === (t = this[n] || {}).nodeType &&
                    (C.cleanData(he(t, !1)), (t.innerHTML = e));
                t = 0;
              } catch (e) {}
            }
            t && this.empty().append(e);
          },
          null,
          e,
          arguments.length
        );
      },
      replaceWith: function () {
        var t = arguments[0];
        return (
          this.domManip(arguments, function (e) {
            (t = this.parentNode),
              C.cleanData(he(this)),
              t && t.replaceChild(e, this);
          }),
          t && (t.length || t.nodeType) ? this : this.remove()
        );
      },
      detach: function (e) {
        return this.remove(e, !0);
      },
      domManip: function (n, r) {
        n = g.apply([], n);
        var e,
          t,
          o,
          i,
          a,
          s,
          u = 0,
          c = this.length,
          l = this,
          p = c - 1,
          f = n[0],
          d = C.isFunction(f);
        if (d || (1 < c && "string" == typeof f && !v.checkClone && oe.test(f)))
          return this.each(function (e) {
            var t = l.eq(e);
            d && (n[0] = f.call(this, e, t.html())), t.domManip(n, r);
          });
        if (
          c &&
          ((t = (e = C.buildFragment(n, this[0].ownerDocument, !1, this))
            .firstChild),
          1 === e.childNodes.length && (e = t),
          t)
        ) {
          for (i = (o = C.map(he(e, "script"), le)).length; u < c; u++)
            (a = e),
              u !== p &&
                ((a = C.clone(a, !0, !0)), i && C.merge(o, he(a, "script"))),
              r.call(this[u], a, u);
          if (i)
            for (
              s = o[o.length - 1].ownerDocument, C.map(o, pe), u = 0;
              u < i;
              u++
            )
              (a = o[u]),
                ie.test(a.type || "") &&
                  !F.access(a, "globalEval") &&
                  C.contains(s, a) &&
                  (a.src
                    ? C._evalUrl && C._evalUrl(a.src)
                    : C.globalEval(a.textContent.replace(se, "")));
        }
        return this;
      },
    }),
    C.each(
      {
        appendTo: "append",
        prependTo: "prepend",
        insertBefore: "before",
        insertAfter: "after",
        replaceAll: "replaceWith",
      },
      function (e, a) {
        C.fn[e] = function (e) {
          for (var t, n = [], r = C(e), o = r.length - 1, i = 0; i <= o; i++)
            (t = i === o ? this : this.clone(!0)),
              C(r[i])[a](t),
              s.apply(n, t.get());
          return this.pushStack(n);
        };
      }
    );
  var ge,
    me = {};
  function ve(e, t) {
    var n,
      r = C(t.createElement(e)).appendTo(t.body),
      o =
        h.getDefaultComputedStyle && (n = h.getDefaultComputedStyle(r[0]))
          ? n.display
          : C.css(r[0], "display");
    return r.detach(), o;
  }
  function ye(e) {
    var t = y,
      n = me[e];
    return (
      n ||
        (("none" !== (n = ve(e, t)) && n) ||
          ((t = (ge = (
            ge || C("<iframe frameborder='0' width='0' height='0'/>")
          ).appendTo(t.documentElement))[0].contentDocument).write(),
          t.close(),
          (n = ve(e, t)),
          ge.detach()),
        (me[e] = n)),
      n
    );
  }
  var xe = /^margin/,
    be = new RegExp("^(" + W + ")(?!px)[a-z%]+$", "i"),
    we = function (e) {
      return e.ownerDocument.defaultView && e.ownerDocument.defaultView.opener
        ? e.ownerDocument.defaultView.getComputedStyle(e, null)
        : h.getComputedStyle(e, null);
    };
  function ke(e, t, n) {
    var r,
      o,
      i,
      a,
      s = e.style;
    return (
      (n = n || we(e)) && (a = n.getPropertyValue(t) || n[t]),
      n &&
        ("" !== a || C.contains(e.ownerDocument, e) || (a = C.style(e, t)),
        be.test(a) &&
          xe.test(t) &&
          ((r = s.width),
          (o = s.minWidth),
          (i = s.maxWidth),
          (s.minWidth = s.maxWidth = s.width = a),
          (a = n.width),
          (s.width = r),
          (s.minWidth = o),
          (s.maxWidth = i))),
      void 0 !== a ? a + "" : a
    );
  }
  function Ce(e, t) {
    return {
      get: function () {
        return e()
          ? void delete this.get
          : (this.get = t).apply(this, arguments);
      },
    };
  }
  !(function () {
    var t,
      n,
      r = y.documentElement,
      o = y.createElement("div"),
      i = y.createElement("div");
    if (i.style) {
      function e() {
        (i.style.cssText =
          "-webkit-box-sizing:border-box;-moz-box-sizing:border-box;box-sizing:border-box;display:block;margin-top:1%;top:1%;border:1px;padding:1px;width:4px;position:absolute"),
          (i.innerHTML = ""),
          r.appendChild(o);
        var e = h.getComputedStyle(i, null);
        (t = "1%" !== e.top), (n = "4px" === e.width), r.removeChild(o);
      }
      (i.style.backgroundClip = "content-box"),
        (i.cloneNode(!0).style.backgroundClip = ""),
        (v.clearCloneStyle = "content-box" === i.style.backgroundClip),
        (o.style.cssText =
          "border:0;width:0;height:0;top:0;left:-9999px;margin-top:1px;position:absolute"),
        o.appendChild(i),
        h.getComputedStyle &&
          C.extend(v, {
            pixelPosition: function () {
              return e(), t;
            },
            boxSizingReliable: function () {
              return null == n && e(), n;
            },
            reliableMarginRight: function () {
              var e,
                t = i.appendChild(y.createElement("div"));
              return (
                (t.style.cssText = i.style.cssText =
                  "-webkit-box-sizing:content-box;-moz-box-sizing:content-box;box-sizing:content-box;display:block;margin:0;border:0;padding:0"),
                (t.style.marginRight = t.style.width = "0"),
                (i.style.width = "1px"),
                r.appendChild(o),
                (e = !parseFloat(h.getComputedStyle(t, null).marginRight)),
                r.removeChild(o),
                i.removeChild(t),
                e
              );
            },
          });
    }
  })(),
    (C.swap = function (e, t, n, r) {
      var o,
        i,
        a = {};
      for (i in t) (a[i] = e.style[i]), (e.style[i] = t[i]);
      for (i in ((o = n.apply(e, r || [])), t)) e.style[i] = a[i];
      return o;
    });
  var Te = /^(none|table(?!-c[ea]).+)/,
    Se = new RegExp("^(" + W + ")(.*)$", "i"),
    je = new RegExp("^([+-])=(" + W + ")", "i"),
    Ae = { position: "absolute", visibility: "hidden", display: "block" },
    Ee = { letterSpacing: "0", fontWeight: "400" },
    Ne = ["Webkit", "O", "Moz", "ms"];
  function De(e, t) {
    if (t in e) return t;
    for (var n = t[0].toUpperCase() + t.slice(1), r = t, o = Ne.length; o--; )
      if ((t = Ne[o] + n) in e) return t;
    return r;
  }
  function _e(e, t, n) {
    var r = Se.exec(t);
    return r ? Math.max(0, r[1] - (n || 0)) + (r[2] || "px") : t;
  }
  function $e(e, t, n, r, o) {
    for (
      var i = n === (r ? "border" : "content") ? 4 : "width" === t ? 1 : 0,
        a = 0;
      i < 4;
      i += 2
    )
      "margin" === n && (a += C.css(e, n + B[i], !0, o)),
        r
          ? ("content" === n && (a -= C.css(e, "padding" + B[i], !0, o)),
            "margin" !== n && (a -= C.css(e, "border" + B[i] + "Width", !0, o)))
          : ((a += C.css(e, "padding" + B[i], !0, o)),
            "padding" !== n &&
              (a += C.css(e, "border" + B[i] + "Width", !0, o)));
    return a;
  }
  function Oe(e, t, n) {
    var r = !0,
      o = "width" === t ? e.offsetWidth : e.offsetHeight,
      i = we(e),
      a = "border-box" === C.css(e, "boxSizing", !1, i);
    if (o <= 0 || null == o) {
      if (
        (((o = ke(e, t, i)) < 0 || null == o) && (o = e.style[t]), be.test(o))
      )
        return o;
      (r = a && (v.boxSizingReliable() || o === e.style[t])),
        (o = parseFloat(o) || 0);
    }
    return o + $e(e, t, n || (a ? "border" : "content"), r, i) + "px";
  }
  function Le(e, t) {
    for (var n, r, o, i = [], a = 0, s = e.length; a < s; a++)
      (r = e[a]).style &&
        ((i[a] = F.get(r, "olddisplay")),
        (n = r.style.display),
        t
          ? (i[a] || "none" !== n || (r.style.display = ""),
            "" === r.style.display &&
              M(r) &&
              (i[a] = F.access(r, "olddisplay", ye(r.nodeName))))
          : ((o = M(r)),
            ("none" === n && o) ||
              F.set(r, "olddisplay", o ? n : C.css(r, "display"))));
    for (a = 0; a < s; a++)
      (r = e[a]).style &&
        ((t && "none" !== r.style.display && "" !== r.style.display) ||
          (r.style.display = t ? i[a] || "" : "none"));
    return e;
  }
  function Fe(e, t, n, r, o) {
    return new Fe.prototype.init(e, t, n, r, o);
  }
  C.extend({
    cssHooks: {
      opacity: {
        get: function (e, t) {
          if (t) {
            var n = ke(e, "opacity");
            return "" === n ? "1" : n;
          }
        },
      },
    },
    cssNumber: {
      columnCount: !0,
      fillOpacity: !0,
      flexGrow: !0,
      flexShrink: !0,
      fontWeight: !0,
      lineHeight: !0,
      opacity: !0,
      order: !0,
      orphans: !0,
      widows: !0,
      zIndex: !0,
      zoom: !0,
    },
    cssProps: { float: "cssFloat" },
    style: function (e, t, n, r) {
      if (e && 3 !== e.nodeType && 8 !== e.nodeType && e.style) {
        var o,
          i,
          a,
          s = C.camelCase(t),
          u = e.style;
        return (
          (t = C.cssProps[s] || (C.cssProps[s] = De(u, s))),
          (a = C.cssHooks[t] || C.cssHooks[s]),
          void 0 === n
            ? a && "get" in a && void 0 !== (o = a.get(e, !1, r))
              ? o
              : u[t]
            : ("string" === (i = typeof n) &&
                (o = je.exec(n)) &&
                ((n = (o[1] + 1) * o[2] + parseFloat(C.css(e, t))),
                (i = "number")),
              void (
                null != n &&
                n == n &&
                ("number" !== i || C.cssNumber[s] || (n += "px"),
                v.clearCloneStyle ||
                  "" !== n ||
                  0 !== t.indexOf("background") ||
                  (u[t] = "inherit"),
                (a && "set" in a && void 0 === (n = a.set(e, n, r))) ||
                  (u[t] = n))
              ))
        );
      }
    },
    css: function (e, t, n, r) {
      var o,
        i,
        a,
        s = C.camelCase(t);
      return (
        (t = C.cssProps[s] || (C.cssProps[s] = De(e.style, s))),
        (a = C.cssHooks[t] || C.cssHooks[s]) &&
          "get" in a &&
          (o = a.get(e, !0, n)),
        void 0 === o && (o = ke(e, t, r)),
        "normal" === o && t in Ee && (o = Ee[t]),
        "" === n || n
          ? ((i = parseFloat(o)), !0 === n || C.isNumeric(i) ? i || 0 : o)
          : o
      );
    },
  }),
    C.each(["height", "width"], function (e, o) {
      C.cssHooks[o] = {
        get: function (e, t, n) {
          return t
            ? Te.test(C.css(e, "display")) && 0 === e.offsetWidth
              ? C.swap(e, Ae, function () {
                  return Oe(e, o, n);
                })
              : Oe(e, o, n)
            : void 0;
        },
        set: function (e, t, n) {
          var r = n && we(e);
          return _e(
            0,
            t,
            n
              ? $e(e, o, n, "border-box" === C.css(e, "boxSizing", !1, r), r)
              : 0
          );
        },
      };
    }),
    (C.cssHooks.marginRight = Ce(v.reliableMarginRight, function (e, t) {
      return t
        ? C.swap(e, { display: "inline-block" }, ke, [e, "marginRight"])
        : void 0;
    })),
    C.each({ margin: "", padding: "", border: "Width" }, function (o, i) {
      (C.cssHooks[o + i] = {
        expand: function (e) {
          for (
            var t = 0, n = {}, r = "string" == typeof e ? e.split(" ") : [e];
            t < 4;
            t++
          )
            n[o + B[t] + i] = r[t] || r[t - 2] || r[0];
          return n;
        },
      }),
        xe.test(o) || (C.cssHooks[o + i].set = _e);
    }),
    C.fn.extend({
      css: function (e, t) {
        return O(
          this,
          function (e, t, n) {
            var r,
              o,
              i = {},
              a = 0;
            if (C.isArray(t)) {
              for (r = we(e), o = t.length; a < o; a++)
                i[t[a]] = C.css(e, t[a], !1, r);
              return i;
            }
            return void 0 !== n ? C.style(e, t, n) : C.css(e, t);
          },
          e,
          t,
          1 < arguments.length
        );
      },
      show: function () {
        return Le(this, !0);
      },
      hide: function () {
        return Le(this);
      },
      toggle: function (e) {
        return "boolean" == typeof e
          ? e
            ? this.show()
            : this.hide()
          : this.each(function () {
              M(this) ? C(this).show() : C(this).hide();
            });
      },
    }),
    (((C.Tween = Fe).prototype = {
      constructor: Fe,
      init: function (e, t, n, r, o, i) {
        (this.elem = e),
          (this.prop = n),
          (this.easing = o || "swing"),
          (this.options = t),
          (this.start = this.now = this.cur()),
          (this.end = r),
          (this.unit = i || (C.cssNumber[n] ? "" : "px"));
      },
      cur: function () {
        var e = Fe.propHooks[this.prop];
        return e && e.get ? e.get(this) : Fe.propHooks._default.get(this);
      },
      run: function (e) {
        var t,
          n = Fe.propHooks[this.prop];
        return (
          this.options.duration
            ? (this.pos = t =
                C.easing[this.easing](
                  e,
                  this.options.duration * e,
                  0,
                  1,
                  this.options.duration
                ))
            : (this.pos = t = e),
          (this.now = (this.end - this.start) * t + this.start),
          this.options.step &&
            this.options.step.call(this.elem, this.now, this),
          n && n.set ? n.set(this) : Fe.propHooks._default.set(this),
          this
        );
      },
    }).init.prototype = Fe.prototype),
    ((Fe.propHooks = {
      _default: {
        get: function (e) {
          var t;
          return null == e.elem[e.prop] ||
            (e.elem.style && null != e.elem.style[e.prop])
            ? (t = C.css(e.elem, e.prop, "")) && "auto" !== t
              ? t
              : 0
            : e.elem[e.prop];
        },
        set: function (e) {
          C.fx.step[e.prop]
            ? C.fx.step[e.prop](e)
            : e.elem.style &&
              (null != e.elem.style[C.cssProps[e.prop]] || C.cssHooks[e.prop])
            ? C.style(e.elem, e.prop, e.now + e.unit)
            : (e.elem[e.prop] = e.now);
        },
      },
    }).scrollTop = Fe.propHooks.scrollLeft =
      {
        set: function (e) {
          e.elem.nodeType && e.elem.parentNode && (e.elem[e.prop] = e.now);
        },
      }),
    (C.easing = {
      linear: function (e) {
        return e;
      },
      swing: function (e) {
        return 0.5 - Math.cos(e * Math.PI) / 2;
      },
    }),
    (C.fx = Fe.prototype.init),
    (C.fx.step = {});
  var qe,
    Pe,
    He,
    Ie,
    Me,
    Re = /^(?:toggle|show|hide)$/,
    ze = new RegExp("^(?:([+-])=|)(" + W + ")([a-z%]*)$", "i"),
    We = /queueHooks$/,
    Be = [
      function (t, e, n) {
        var r,
          o,
          i,
          a,
          s,
          u,
          c,
          l = this,
          p = {},
          f = t.style,
          d = t.nodeType && M(t),
          h = F.get(t, "fxshow");
        for (r in (n.queue ||
          (null == (s = C._queueHooks(t, "fx")).unqueued &&
            ((s.unqueued = 0),
            (u = s.empty.fire),
            (s.empty.fire = function () {
              s.unqueued || u();
            })),
          s.unqueued++,
          l.always(function () {
            l.always(function () {
              s.unqueued--, C.queue(t, "fx").length || s.empty.fire();
            });
          })),
        1 === t.nodeType &&
          ("height" in e || "width" in e) &&
          ((n.overflow = [f.overflow, f.overflowX, f.overflowY]),
          (c = C.css(t, "display")),
          "inline" ===
            ("none" === c ? F.get(t, "olddisplay") || ye(t.nodeName) : c) &&
            "none" === C.css(t, "float") &&
            (f.display = "inline-block")),
        n.overflow &&
          ((f.overflow = "hidden"),
          l.always(function () {
            (f.overflow = n.overflow[0]),
              (f.overflowX = n.overflow[1]),
              (f.overflowY = n.overflow[2]);
          })),
        e))
          if (((o = e[r]), Re.exec(o))) {
            if (
              (delete e[r],
              (i = i || "toggle" === o),
              o === (d ? "hide" : "show"))
            ) {
              if ("show" !== o || !h || void 0 === h[r]) continue;
              d = !0;
            }
            p[r] = (h && h[r]) || C.style(t, r);
          } else c = void 0;
        if (C.isEmptyObject(p))
          "inline" === ("none" === c ? ye(t.nodeName) : c) && (f.display = c);
        else
          for (r in (h
            ? "hidden" in h && (d = h.hidden)
            : (h = F.access(t, "fxshow", {})),
          i && (h.hidden = !d),
          d
            ? C(t).show()
            : l.done(function () {
                C(t).hide();
              }),
          l.done(function () {
            var e;
            for (e in (F.remove(t, "fxshow"), p)) C.style(t, e, p[e]);
          }),
          p))
            (a = Je(d ? h[r] : 0, r, l)),
              r in h ||
                ((h[r] = a.start),
                d &&
                  ((a.end = a.start),
                  (a.start = "width" === r || "height" === r ? 1 : 0)));
      },
    ],
    Ue = {
      "*": [
        function (e, t) {
          var n = this.createTween(e, t),
            r = n.cur(),
            o = ze.exec(t),
            i = (o && o[3]) || (C.cssNumber[e] ? "" : "px"),
            a =
              (C.cssNumber[e] || ("px" !== i && +r)) &&
              ze.exec(C.css(n.elem, e)),
            s = 1,
            u = 20;
          if (a && a[3] !== i)
            for (
              i = i || a[3], o = o || [], a = +r || 1;
              (a /= s = s || ".5"),
                C.style(n.elem, e, a + i),
                s !== (s = n.cur() / r) && 1 !== s && --u;

            );
          return (
            o &&
              ((a = n.start = +a || +r || 0),
              (n.unit = i),
              (n.end = o[1] ? a + (o[1] + 1) * o[2] : +o[2])),
            n
          );
        },
      ],
    };
  function Xe() {
    return (
      setTimeout(function () {
        qe = void 0;
      }),
      (qe = C.now())
    );
  }
  function Ve(e, t) {
    var n,
      r = 0,
      o = { height: e };
    for (t = t ? 1 : 0; r < 4; r += 2 - t)
      o["margin" + (n = B[r])] = o["padding" + n] = e;
    return t && (o.opacity = o.width = e), o;
  }
  function Je(e, t, n) {
    for (
      var r, o = (Ue[t] || []).concat(Ue["*"]), i = 0, a = o.length;
      i < a;
      i++
    )
      if ((r = o[i].call(n, t, e))) return r;
  }
  function Ge(i, e, t) {
    var n,
      a,
      r = 0,
      o = Be.length,
      s = C.Deferred().always(function () {
        delete u.elem;
      }),
      u = function () {
        if (a) return !1;
        for (
          var e = qe || Xe(),
            t = Math.max(0, c.startTime + c.duration - e),
            n = 1 - (t / c.duration || 0),
            r = 0,
            o = c.tweens.length;
          r < o;
          r++
        )
          c.tweens[r].run(n);
        return (
          s.notifyWith(i, [c, n, t]),
          n < 1 && o ? t : (s.resolveWith(i, [c]), !1)
        );
      },
      c = s.promise({
        elem: i,
        props: C.extend({}, e),
        opts: C.extend(!0, { specialEasing: {} }, t),
        originalProperties: e,
        originalOptions: t,
        startTime: qe || Xe(),
        duration: t.duration,
        tweens: [],
        createTween: function (e, t) {
          var n = C.Tween(
            i,
            c.opts,
            e,
            t,
            c.opts.specialEasing[e] || c.opts.easing
          );
          return c.tweens.push(n), n;
        },
        stop: function (e) {
          var t = 0,
            n = e ? c.tweens.length : 0;
          if (a) return this;
          for (a = !0; t < n; t++) c.tweens[t].run(1);
          return e ? s.resolveWith(i, [c, e]) : s.rejectWith(i, [c, e]), this;
        },
      }),
      l = c.props;
    for (
      (function (e, t) {
        var n, r, o, i, a;
        for (n in e)
          if (
            ((o = t[(r = C.camelCase(n))]),
            (i = e[n]),
            C.isArray(i) && ((o = i[1]), (i = e[n] = i[0])),
            n !== r && ((e[r] = i), delete e[n]),
            (a = C.cssHooks[r]) && ("expand" in a))
          )
            for (n in ((i = a.expand(i)), delete e[r], i))
              (n in e) || ((e[n] = i[n]), (t[n] = o));
          else t[r] = o;
      })(l, c.opts.specialEasing);
      r < o;
      r++
    )
      if ((n = Be[r].call(c, i, l, c.opts))) return n;
    return (
      C.map(l, Je, c),
      C.isFunction(c.opts.start) && c.opts.start.call(i, c),
      C.fx.timer(C.extend(u, { elem: i, anim: c, queue: c.opts.queue })),
      c
        .progress(c.opts.progress)
        .done(c.opts.done, c.opts.complete)
        .fail(c.opts.fail)
        .always(c.opts.always)
    );
  }
  (C.Animation = C.extend(Ge, {
    tweener: function (e, t) {
      for (
        var n,
          r = 0,
          o = (e = C.isFunction(e) ? ((t = e), ["*"]) : e.split(" ")).length;
        r < o;
        r++
      )
        (n = e[r]), (Ue[n] = Ue[n] || []), Ue[n].unshift(t);
    },
    prefilter: function (e, t) {
      t ? Be.unshift(e) : Be.push(e);
    },
  })),
    (C.speed = function (e, t, n) {
      var r =
        e && "object" == typeof e
          ? C.extend({}, e)
          : {
              complete: n || (!n && t) || (C.isFunction(e) && e),
              duration: e,
              easing: (n && t) || (t && !C.isFunction(t) && t),
            };
      return (
        (r.duration = C.fx.off
          ? 0
          : "number" == typeof r.duration
          ? r.duration
          : r.duration in C.fx.speeds
          ? C.fx.speeds[r.duration]
          : C.fx.speeds._default),
        (null != r.queue && !0 !== r.queue) || (r.queue = "fx"),
        (r.old = r.complete),
        (r.complete = function () {
          C.isFunction(r.old) && r.old.call(this),
            r.queue && C.dequeue(this, r.queue);
        }),
        r
      );
    }),
    C.fn.extend({
      fadeTo: function (e, t, n, r) {
        return this.filter(M)
          .css("opacity", 0)
          .show()
          .end()
          .animate({ opacity: t }, e, n, r);
      },
      animate: function (t, e, n, r) {
        function o() {
          var e = Ge(this, C.extend({}, t), a);
          (i || F.get(this, "finish")) && e.stop(!0);
        }
        var i = C.isEmptyObject(t),
          a = C.speed(e, n, r);
        return (
          (o.finish = o),
          i || !1 === a.queue ? this.each(o) : this.queue(a.queue, o)
        );
      },
      stop: function (o, e, i) {
        function a(e) {
          var t = e.stop;
          delete e.stop, t(i);
        }
        return (
          "string" != typeof o && ((i = e), (e = o), (o = void 0)),
          e && !1 !== o && this.queue(o || "fx", []),
          this.each(function () {
            var e = !0,
              t = null != o && o + "queueHooks",
              n = C.timers,
              r = F.get(this);
            if (t) r[t] && r[t].stop && a(r[t]);
            else for (t in r) r[t] && r[t].stop && We.test(t) && a(r[t]);
            for (t = n.length; t--; )
              n[t].elem !== this ||
                (null != o && n[t].queue !== o) ||
                (n[t].anim.stop(i), (e = !1), n.splice(t, 1));
            (!e && i) || C.dequeue(this, o);
          })
        );
      },
      finish: function (a) {
        return (
          !1 !== a && (a = a || "fx"),
          this.each(function () {
            var e,
              t = F.get(this),
              n = t[a + "queue"],
              r = t[a + "queueHooks"],
              o = C.timers,
              i = n ? n.length : 0;
            for (
              t.finish = !0,
                C.queue(this, a, []),
                r && r.stop && r.stop.call(this, !0),
                e = o.length;
              e--;

            )
              o[e].elem === this &&
                o[e].queue === a &&
                (o[e].anim.stop(!0), o.splice(e, 1));
            for (e = 0; e < i; e++)
              n[e] && n[e].finish && n[e].finish.call(this);
            delete t.finish;
          })
        );
      },
    }),
    C.each(["toggle", "show", "hide"], function (e, r) {
      var o = C.fn[r];
      C.fn[r] = function (e, t, n) {
        return null == e || "boolean" == typeof e
          ? o.apply(this, arguments)
          : this.animate(Ve(r, !0), e, t, n);
      };
    }),
    C.each(
      {
        slideDown: Ve("show"),
        slideUp: Ve("hide"),
        slideToggle: Ve("toggle"),
        fadeIn: { opacity: "show" },
        fadeOut: { opacity: "hide" },
        fadeToggle: { opacity: "toggle" },
      },
      function (e, r) {
        C.fn[e] = function (e, t, n) {
          return this.animate(r, e, t, n);
        };
      }
    ),
    (C.timers = []),
    (C.fx.tick = function () {
      var e,
        t = 0,
        n = C.timers;
      for (qe = C.now(); t < n.length; t++)
        (e = n[t])() || n[t] !== e || n.splice(t--, 1);
      n.length || C.fx.stop(), (qe = void 0);
    }),
    (C.fx.timer = function (e) {
      C.timers.push(e), e() ? C.fx.start() : C.timers.pop();
    }),
    (C.fx.interval = 13),
    (C.fx.start = function () {
      Pe || (Pe = setInterval(C.fx.tick, C.fx.interval));
    }),
    (C.fx.stop = function () {
      clearInterval(Pe), (Pe = null);
    }),
    (C.fx.speeds = { slow: 600, fast: 200, _default: 400 }),
    (C.fn.delay = function (r, e) {
      return (
        (r = (C.fx && C.fx.speeds[r]) || r),
        (e = e || "fx"),
        this.queue(e, function (e, t) {
          var n = setTimeout(e, r);
          t.stop = function () {
            clearTimeout(n);
          };
        })
      );
    }),
    (He = y.createElement("input")),
    (Ie = y.createElement("select")),
    (Me = Ie.appendChild(y.createElement("option"))),
    (He.type = "checkbox"),
    (v.checkOn = "" !== He.value),
    (v.optSelected = Me.selected),
    (Ie.disabled = !0),
    (v.optDisabled = !Me.disabled),
    ((He = y.createElement("input")).value = "t"),
    (He.type = "radio"),
    (v.radioValue = "t" === He.value);
  var Ke,
    Ye = C.expr.attrHandle;
  C.fn.extend({
    attr: function (e, t) {
      return O(this, C.attr, e, t, 1 < arguments.length);
    },
    removeAttr: function (e) {
      return this.each(function () {
        C.removeAttr(this, e);
      });
    },
  }),
    C.extend({
      attr: function (e, t, n) {
        var r,
          o,
          i = e.nodeType;
        if (e && 3 !== i && 8 !== i && 2 !== i)
          return typeof e.getAttribute == X
            ? C.prop(e, t, n)
            : ((1 === i && C.isXMLDoc(e)) ||
                ((t = t.toLowerCase()),
                (r =
                  C.attrHooks[t] || (C.expr.match.bool.test(t) ? Ke : void 0))),
              void 0 === n
                ? r && "get" in r && null !== (o = r.get(e, t))
                  ? o
                  : null == (o = C.find.attr(e, t))
                  ? void 0
                  : o
                : null !== n
                ? r && "set" in r && void 0 !== (o = r.set(e, n, t))
                  ? o
                  : (e.setAttribute(t, n + ""), n)
                : void C.removeAttr(e, t));
      },
      removeAttr: function (e, t) {
        var n,
          r,
          o = 0,
          i = t && t.match(D);
        if (i && 1 === e.nodeType)
          for (; (n = i[o++]); )
            (r = C.propFix[n] || n),
              C.expr.match.bool.test(n) && (e[r] = !1),
              e.removeAttribute(n);
      },
      attrHooks: {
        type: {
          set: function (e, t) {
            if (!v.radioValue && "radio" === t && C.nodeName(e, "input")) {
              var n = e.value;
              return e.setAttribute("type", t), n && (e.value = n), t;
            }
          },
        },
      },
    }),
    (Ke = {
      set: function (e, t, n) {
        return !1 === t ? C.removeAttr(e, n) : e.setAttribute(n, n), n;
      },
    }),
    C.each(C.expr.match.bool.source.match(/\w+/g), function (e, t) {
      var i = Ye[t] || C.find.attr;
      Ye[t] = function (e, t, n) {
        var r, o;
        return (
          n ||
            ((o = Ye[t]),
            (Ye[t] = r),
            (r = null != i(e, t, n) ? t.toLowerCase() : null),
            (Ye[t] = o)),
          r
        );
      };
    });
  var Qe = /^(?:input|select|textarea|button)$/i;
  C.fn.extend({
    prop: function (e, t) {
      return O(this, C.prop, e, t, 1 < arguments.length);
    },
    removeProp: function (e) {
      return this.each(function () {
        delete this[C.propFix[e] || e];
      });
    },
  }),
    C.extend({
      propFix: { for: "htmlFor", class: "className" },
      prop: function (e, t, n) {
        var r,
          o,
          i = e.nodeType;
        if (e && 3 !== i && 8 !== i && 2 !== i)
          return (
            (1 !== i || !C.isXMLDoc(e)) &&
              ((t = C.propFix[t] || t), (o = C.propHooks[t])),
            void 0 !== n
              ? o && "set" in o && void 0 !== (r = o.set(e, n, t))
                ? r
                : (e[t] = n)
              : o && "get" in o && null !== (r = o.get(e, t))
              ? r
              : e[t]
          );
      },
      propHooks: {
        tabIndex: {
          get: function (e) {
            return e.hasAttribute("tabindex") || Qe.test(e.nodeName) || e.href
              ? e.tabIndex
              : -1;
          },
        },
      },
    }),
    v.optSelected ||
      (C.propHooks.selected = {
        get: function (e) {
          var t = e.parentNode;
          return t && t.parentNode && t.parentNode.selectedIndex, null;
        },
      }),
    C.each(
      [
        "tabIndex",
        "readOnly",
        "maxLength",
        "cellSpacing",
        "cellPadding",
        "rowSpan",
        "colSpan",
        "useMap",
        "frameBorder",
        "contentEditable",
      ],
      function () {
        C.propFix[this.toLowerCase()] = this;
      }
    );
  var Ze = /[\t\r\n\f]/g;
  C.fn.extend({
    addClass: function (t) {
      var e,
        n,
        r,
        o,
        i,
        a,
        s = "string" == typeof t && t,
        u = 0,
        c = this.length;
      if (C.isFunction(t))
        return this.each(function (e) {
          C(this).addClass(t.call(this, e, this.className));
        });
      if (s)
        for (e = (t || "").match(D) || []; u < c; u++)
          if (
            (r =
              1 === (n = this[u]).nodeType &&
              (n.className ? (" " + n.className + " ").replace(Ze, " ") : " "))
          ) {
            for (i = 0; (o = e[i++]); )
              r.indexOf(" " + o + " ") < 0 && (r += o + " ");
            (a = C.trim(r)), n.className !== a && (n.className = a);
          }
      return this;
    },
    removeClass: function (t) {
      var e,
        n,
        r,
        o,
        i,
        a,
        s = 0 === arguments.length || ("string" == typeof t && t),
        u = 0,
        c = this.length;
      if (C.isFunction(t))
        return this.each(function (e) {
          C(this).removeClass(t.call(this, e, this.className));
        });
      if (s)
        for (e = (t || "").match(D) || []; u < c; u++)
          if (
            (r =
              1 === (n = this[u]).nodeType &&
              (n.className ? (" " + n.className + " ").replace(Ze, " ") : ""))
          ) {
            for (i = 0; (o = e[i++]); )
              for (; 0 <= r.indexOf(" " + o + " "); )
                r = r.replace(" " + o + " ", " ");
            (a = t ? C.trim(r) : ""), n.className !== a && (n.className = a);
          }
      return this;
    },
    toggleClass: function (o, t) {
      var i = typeof o;
      return "boolean" == typeof t && "string" == i
        ? t
          ? this.addClass(o)
          : this.removeClass(o)
        : this.each(
            C.isFunction(o)
              ? function (e) {
                  C(this).toggleClass(o.call(this, e, this.className, t), t);
                }
              : function () {
                  if ("string" == i)
                    for (
                      var e, t = 0, n = C(this), r = o.match(D) || [];
                      (e = r[t++]);

                    )
                      n.hasClass(e) ? n.removeClass(e) : n.addClass(e);
                  else
                    (i != X && "boolean" != i) ||
                      (this.className &&
                        F.set(this, "__className__", this.className),
                      (this.className =
                        this.className || !1 === o
                          ? ""
                          : F.get(this, "__className__") || ""));
                }
          );
    },
    hasClass: function (e) {
      for (var t = " " + e + " ", n = 0, r = this.length; n < r; n++)
        if (
          1 === this[n].nodeType &&
          0 <= (" " + this[n].className + " ").replace(Ze, " ").indexOf(t)
        )
          return !0;
      return !1;
    },
  });
  var et = /\r/g;
  C.fn.extend({
    val: function (n) {
      var r,
        e,
        o,
        t = this[0];
      return arguments.length
        ? ((o = C.isFunction(n)),
          this.each(function (e) {
            var t;
            1 === this.nodeType &&
              (null == (t = o ? n.call(this, e, C(this).val()) : n)
                ? (t = "")
                : "number" == typeof t
                ? (t += "")
                : C.isArray(t) &&
                  (t = C.map(t, function (e) {
                    return null == e ? "" : e + "";
                  })),
              ((r =
                C.valHooks[this.type] ||
                C.valHooks[this.nodeName.toLowerCase()]) &&
                "set" in r &&
                void 0 !== r.set(this, t, "value")) ||
                (this.value = t));
          }))
        : t
        ? (r = C.valHooks[t.type] || C.valHooks[t.nodeName.toLowerCase()]) &&
          "get" in r &&
          void 0 !== (e = r.get(t, "value"))
          ? e
          : "string" == typeof (e = t.value)
          ? e.replace(et, "")
          : null == e
          ? ""
          : e
        : void 0;
    },
  }),
    C.extend({
      valHooks: {
        option: {
          get: function (e) {
            var t = C.find.attr(e, "value");
            return null != t ? t : C.trim(C.text(e));
          },
        },
        select: {
          get: function (e) {
            for (
              var t,
                n,
                r = e.options,
                o = e.selectedIndex,
                i = "select-one" === e.type || o < 0,
                a = i ? null : [],
                s = i ? o + 1 : r.length,
                u = o < 0 ? s : i ? o : 0;
              u < s;
              u++
            )
              if (
                !(
                  (!(n = r[u]).selected && u !== o) ||
                  (v.optDisabled
                    ? n.disabled
                    : null !== n.getAttribute("disabled")) ||
                  (n.parentNode.disabled &&
                    C.nodeName(n.parentNode, "optgroup"))
                )
              ) {
                if (((t = C(n).val()), i)) return t;
                a.push(t);
              }
            return a;
          },
          set: function (e, t) {
            for (
              var n, r, o = e.options, i = C.makeArray(t), a = o.length;
              a--;

            )
              ((r = o[a]).selected = 0 <= C.inArray(r.value, i)) && (n = !0);
            return n || (e.selectedIndex = -1), i;
          },
        },
      },
    }),
    C.each(["radio", "checkbox"], function () {
      (C.valHooks[this] = {
        set: function (e, t) {
          return C.isArray(t)
            ? (e.checked = 0 <= C.inArray(C(e).val(), t))
            : void 0;
        },
      }),
        v.checkOn ||
          (C.valHooks[this].get = function (e) {
            return null === e.getAttribute("value") ? "on" : e.value;
          });
    }),
    C.each(
      "blur focus focusin focusout load resize scroll unload click dblclick mousedown mouseup mousemove mouseover mouseout mouseenter mouseleave change select submit keydown keypress keyup error contextmenu".split(
        " "
      ),
      function (e, n) {
        C.fn[n] = function (e, t) {
          return 0 < arguments.length
            ? this.on(n, null, e, t)
            : this.trigger(n);
        };
      }
    ),
    C.fn.extend({
      hover: function (e, t) {
        return this.mouseenter(e).mouseleave(t || e);
      },
      bind: function (e, t, n) {
        return this.on(e, null, t, n);
      },
      unbind: function (e, t) {
        return this.off(e, null, t);
      },
      delegate: function (e, t, n, r) {
        return this.on(t, e, n, r);
      },
      undelegate: function (e, t, n) {
        return 1 === arguments.length
          ? this.off(e, "**")
          : this.off(t, e || "**", n);
      },
    });
  var tt = C.now(),
    nt = /\?/;
  (C.parseJSON = function (e) {
    return JSON.parse(e + "");
  }),
    (C.parseXML = function (e) {
      var t;
      if (!e || "string" != typeof e) return null;
      try {
        t = new DOMParser().parseFromString(e, "text/xml");
      } catch (e) {
        t = void 0;
      }
      return (
        (t && !t.getElementsByTagName("parsererror").length) ||
          C.error("Invalid XML: " + e),
        t
      );
    });
  var rt = /#.*$/,
    ot = /([?&])_=[^&]*/,
    it = /^(.*?):[ \t]*([^\r\n]*)$/gm,
    at = /^(?:GET|HEAD)$/,
    st = /^\/\//,
    ut = /^([\w.+-]+:)(?:\/\/(?:[^\/?#]*@|)([^\/?#:]*)(?::(\d+)|)|)/,
    ct = {},
    lt = {},
    pt = "*/".concat("*"),
    ft = h.location.href,
    dt = ut.exec(ft.toLowerCase()) || [];
  function ht(i) {
    return function (e, t) {
      "string" != typeof e && ((t = e), (e = "*"));
      var n,
        r = 0,
        o = e.toLowerCase().match(D) || [];
      if (C.isFunction(t))
        for (; (n = o[r++]); )
          "+" === n[0]
            ? ((n = n.slice(1) || "*"), (i[n] = i[n] || []).unshift(t))
            : (i[n] = i[n] || []).push(t);
    };
  }
  function gt(t, o, i, a) {
    var s = {},
      u = t === lt;
    function c(e) {
      var r;
      return (
        (s[e] = !0),
        C.each(t[e] || [], function (e, t) {
          var n = t(o, i, a);
          return "string" != typeof n || u || s[n]
            ? u
              ? !(r = n)
              : void 0
            : (o.dataTypes.unshift(n), c(n), !1);
        }),
        r
      );
    }
    return c(o.dataTypes[0]) || (!s["*"] && c("*"));
  }
  function mt(e, t) {
    var n,
      r,
      o = C.ajaxSettings.flatOptions || {};
    for (n in t) void 0 !== t[n] && ((o[n] ? e : r || (r = {}))[n] = t[n]);
    return r && C.extend(!0, e, r), e;
  }
  C.extend({
    active: 0,
    lastModified: {},
    etag: {},
    ajaxSettings: {
      url: ft,
      type: "GET",
      isLocal: /^(?:about|app|app-storage|.+-extension|file|res|widget):$/.test(
        dt[1]
      ),
      global: !0,
      processData: !0,
      async: !0,
      contentType: "application/x-www-form-urlencoded; charset=UTF-8",
      accepts: {
        "*": pt,
        text: "text/plain",
        html: "text/html",
        xml: "application/xml, text/xml",
        json: "application/json, text/javascript",
      },
      contents: { xml: /xml/, html: /html/, json: /json/ },
      responseFields: {
        xml: "responseXML",
        text: "responseText",
        json: "responseJSON",
      },
      converters: {
        "* text": String,
        "text html": !0,
        "text json": C.parseJSON,
        "text xml": C.parseXML,
      },
      flatOptions: { url: !0, context: !0 },
    },
    ajaxSetup: function (e, t) {
      return t ? mt(mt(e, C.ajaxSettings), t) : mt(C.ajaxSettings, e);
    },
    ajaxPrefilter: ht(ct),
    ajaxTransport: ht(lt),
    ajax: function (e, t) {
      "object" == typeof e && ((t = e), (e = void 0)), (t = t || {});
      var l,
        p,
        f,
        n,
        d,
        r,
        h,
        o,
        g = C.ajaxSetup({}, t),
        m = g.context || g,
        v = g.context && (m.nodeType || m.jquery) ? C(m) : C.event,
        y = C.Deferred(),
        x = C.Callbacks("once memory"),
        b = g.statusCode || {},
        i = {},
        a = {},
        w = 0,
        s = "canceled",
        k = {
          readyState: 0,
          getResponseHeader: function (e) {
            var t;
            if (2 === w) {
              if (!n)
                for (n = {}; (t = it.exec(f)); ) n[t[1].toLowerCase()] = t[2];
              t = n[e.toLowerCase()];
            }
            return null == t ? null : t;
          },
          getAllResponseHeaders: function () {
            return 2 === w ? f : null;
          },
          setRequestHeader: function (e, t) {
            var n = e.toLowerCase();
            return w || ((e = a[n] = a[n] || e), (i[e] = t)), this;
          },
          overrideMimeType: function (e) {
            return w || (g.mimeType = e), this;
          },
          statusCode: function (e) {
            var t;
            if (e)
              if (w < 2) for (t in e) b[t] = [b[t], e[t]];
              else k.always(e[k.status]);
            return this;
          },
          abort: function (e) {
            var t = e || s;
            return l && l.abort(t), u(0, t), this;
          },
        };
      if (
        ((y.promise(k).complete = x.add),
        (k.success = k.done),
        (k.error = k.fail),
        (g.url = ((e || g.url || ft) + "")
          .replace(rt, "")
          .replace(st, dt[1] + "//")),
        (g.type = t.method || t.type || g.method || g.type),
        (g.dataTypes = C.trim(g.dataType || "*")
          .toLowerCase()
          .match(D) || [""]),
        null == g.crossDomain &&
          ((r = ut.exec(g.url.toLowerCase())),
          (g.crossDomain = !(
            !r ||
            (r[1] === dt[1] &&
              r[2] === dt[2] &&
              (r[3] || ("http:" === r[1] ? "80" : "443")) ===
                (dt[3] || ("http:" === dt[1] ? "80" : "443")))
          ))),
        g.data &&
          g.processData &&
          "string" != typeof g.data &&
          (g.data = C.param(g.data, g.traditional)),
        gt(ct, g, t, k),
        2 === w)
      )
        return k;
      for (o in ((h = C.event && g.global) &&
        0 == C.active++ &&
        C.event.trigger("ajaxStart"),
      (g.type = g.type.toUpperCase()),
      (g.hasContent = !at.test(g.type)),
      (p = g.url),
      g.hasContent ||
        (g.data &&
          ((p = g.url += (nt.test(p) ? "&" : "?") + g.data), delete g.data),
        !1 === g.cache &&
          (g.url = ot.test(p)
            ? p.replace(ot, "$1_=" + tt++)
            : p + (nt.test(p) ? "&" : "?") + "_=" + tt++)),
      g.ifModified &&
        (C.lastModified[p] &&
          k.setRequestHeader("If-Modified-Since", C.lastModified[p]),
        C.etag[p] && k.setRequestHeader("If-None-Match", C.etag[p])),
      ((g.data && g.hasContent && !1 !== g.contentType) || t.contentType) &&
        k.setRequestHeader("Content-Type", g.contentType),
      k.setRequestHeader(
        "Accept",
        g.dataTypes[0] && g.accepts[g.dataTypes[0]]
          ? g.accepts[g.dataTypes[0]] +
              ("*" !== g.dataTypes[0] ? ", " + pt + "; q=0.01" : "")
          : g.accepts["*"]
      ),
      g.headers))
        k.setRequestHeader(o, g.headers[o]);
      if (g.beforeSend && (!1 === g.beforeSend.call(m, k, g) || 2 === w))
        return k.abort();
      for (o in ((s = "abort"), { success: 1, error: 1, complete: 1 }))
        k[o](g[o]);
      if ((l = gt(lt, g, t, k))) {
        (k.readyState = 1),
          h && v.trigger("ajaxSend", [k, g]),
          g.async &&
            0 < g.timeout &&
            (d = setTimeout(function () {
              k.abort("timeout");
            }, g.timeout));
        try {
          (w = 1), l.send(i, u);
        } catch (e) {
          if (!(w < 2)) throw e;
          u(-1, e);
        }
      } else u(-1, "No Transport");
      function u(e, t, n, r) {
        var o,
          i,
          a,
          s,
          u,
          c = t;
        2 !== w &&
          ((w = 2),
          d && clearTimeout(d),
          (l = void 0),
          (f = r || ""),
          (k.readyState = 0 < e ? 4 : 0),
          (o = (200 <= e && e < 300) || 304 === e),
          n &&
            (s = (function (e, t, n) {
              for (
                var r, o, i, a, s = e.contents, u = e.dataTypes;
                "*" === u[0];

              )
                u.shift(),
                  void 0 === r &&
                    (r = e.mimeType || t.getResponseHeader("Content-Type"));
              if (r)
                for (o in s)
                  if (s[o] && s[o].test(r)) {
                    u.unshift(o);
                    break;
                  }
              if (u[0] in n) i = u[0];
              else {
                for (o in n) {
                  if (!u[0] || e.converters[o + " " + u[0]]) {
                    i = o;
                    break;
                  }
                  a || (a = o);
                }
                i = i || a;
              }
              return i ? (i !== u[0] && u.unshift(i), n[i]) : void 0;
            })(g, k, n)),
          (s = (function (e, t, n, r) {
            var o,
              i,
              a,
              s,
              u,
              c = {},
              l = e.dataTypes.slice();
            if (l[1])
              for (a in e.converters) c[a.toLowerCase()] = e.converters[a];
            for (i = l.shift(); i; )
              if (
                (e.responseFields[i] && (n[e.responseFields[i]] = t),
                !u && r && e.dataFilter && (t = e.dataFilter(t, e.dataType)),
                (u = i),
                (i = l.shift()))
              )
                if ("*" === i) i = u;
                else if ("*" !== u && u !== i) {
                  if (!(a = c[u + " " + i] || c["* " + i]))
                    for (o in c)
                      if (
                        (s = o.split(" "))[1] === i &&
                        (a = c[u + " " + s[0]] || c["* " + s[0]])
                      ) {
                        !0 === a
                          ? (a = c[o])
                          : !0 !== c[o] && ((i = s[0]), l.unshift(s[1]));
                        break;
                      }
                  if (!0 !== a)
                    if (a && e.throws) t = a(t);
                    else
                      try {
                        t = a(t);
                      } catch (e) {
                        return {
                          state: "parsererror",
                          error: a ? e : "No conversion from " + u + " to " + i,
                        };
                      }
                }
            return { state: "success", data: t };
          })(g, s, k, o)),
          o
            ? (g.ifModified &&
                ((u = k.getResponseHeader("Last-Modified")) &&
                  (C.lastModified[p] = u),
                (u = k.getResponseHeader("etag")) && (C.etag[p] = u)),
              204 === e || "HEAD" === g.type
                ? (c = "nocontent")
                : 304 === e
                ? (c = "notmodified")
                : ((c = s.state), (i = s.data), (o = !(a = s.error))))
            : ((a = c), (!e && c) || ((c = "error"), e < 0 && (e = 0))),
          (k.status = e),
          (k.statusText = (t || c) + ""),
          o ? y.resolveWith(m, [i, c, k]) : y.rejectWith(m, [k, c, a]),
          k.statusCode(b),
          (b = void 0),
          h && v.trigger(o ? "ajaxSuccess" : "ajaxError", [k, g, o ? i : a]),
          x.fireWith(m, [k, c]),
          h &&
            (v.trigger("ajaxComplete", [k, g]),
            --C.active || C.event.trigger("ajaxStop")));
      }
      return k;
    },
    getJSON: function (e, t, n) {
      return C.get(e, t, n, "json");
    },
    getScript: function (e, t) {
      return C.get(e, void 0, t, "script");
    },
  }),
    C.each(["get", "post"], function (e, o) {
      C[o] = function (e, t, n, r) {
        return (
          C.isFunction(t) && ((r = r || n), (n = t), (t = void 0)),
          C.ajax({ url: e, type: o, dataType: r, data: t, success: n })
        );
      };
    }),
    (C._evalUrl = function (e) {
      return C.ajax({
        url: e,
        type: "GET",
        dataType: "script",
        async: !1,
        global: !1,
        throws: !0,
      });
    }),
    C.fn.extend({
      wrapAll: function (t) {
        var e;
        return C.isFunction(t)
          ? this.each(function (e) {
              C(this).wrapAll(t.call(this, e));
            })
          : (this[0] &&
              ((e = C(t, this[0].ownerDocument).eq(0).clone(!0)),
              this[0].parentNode && e.insertBefore(this[0]),
              e
                .map(function () {
                  for (var e = this; e.firstElementChild; )
                    e = e.firstElementChild;
                  return e;
                })
                .append(this)),
            this);
      },
      wrapInner: function (n) {
        return this.each(
          C.isFunction(n)
            ? function (e) {
                C(this).wrapInner(n.call(this, e));
              }
            : function () {
                var e = C(this),
                  t = e.contents();
                t.length ? t.wrapAll(n) : e.append(n);
              }
        );
      },
      wrap: function (t) {
        var n = C.isFunction(t);
        return this.each(function (e) {
          C(this).wrapAll(n ? t.call(this, e) : t);
        });
      },
      unwrap: function () {
        return this.parent()
          .each(function () {
            C.nodeName(this, "body") || C(this).replaceWith(this.childNodes);
          })
          .end();
      },
    }),
    (C.expr.filters.hidden = function (e) {
      return e.offsetWidth <= 0 && e.offsetHeight <= 0;
    }),
    (C.expr.filters.visible = function (e) {
      return !C.expr.filters.hidden(e);
    });
  var vt = /%20/g,
    yt = /\[\]$/,
    xt = /\r?\n/g,
    bt = /^(?:submit|button|image|reset|file)$/i,
    wt = /^(?:input|select|textarea|keygen)/i;
  function kt(n, e, r, o) {
    var t;
    if (C.isArray(e))
      C.each(e, function (e, t) {
        r || yt.test(n)
          ? o(n, t)
          : kt(n + "[" + ("object" == typeof t ? e : "") + "]", t, r, o);
      });
    else if (r || "object" !== C.type(e)) o(n, e);
    else for (t in e) kt(n + "[" + t + "]", e[t], r, o);
  }
  (C.param = function (e, t) {
    function n(e, t) {
      (t = C.isFunction(t) ? t() : null == t ? "" : t),
        (o[o.length] = encodeURIComponent(e) + "=" + encodeURIComponent(t));
    }
    var r,
      o = [];
    if (
      (void 0 === t && (t = C.ajaxSettings && C.ajaxSettings.traditional),
      C.isArray(e) || (e.jquery && !C.isPlainObject(e)))
    )
      C.each(e, function () {
        n(this.name, this.value);
      });
    else for (r in e) kt(r, e[r], t, n);
    return o.join("&").replace(vt, "+");
  }),
    C.fn.extend({
      serialize: function () {
        return C.param(this.serializeArray());
      },
      serializeArray: function () {
        return this.map(function () {
          var e = C.prop(this, "elements");
          return e ? C.makeArray(e) : this;
        })
          .filter(function () {
            var e = this.type;
            return (
              this.name &&
              !C(this).is(":disabled") &&
              wt.test(this.nodeName) &&
              !bt.test(e) &&
              (this.checked || !U.test(e))
            );
          })
          .map(function (e, t) {
            var n = C(this).val();
            return null == n
              ? null
              : C.isArray(n)
              ? C.map(n, function (e) {
                  return { name: t.name, value: e.replace(xt, "\r\n") };
                })
              : { name: t.name, value: n.replace(xt, "\r\n") };
          })
          .get();
      },
    }),
    (C.ajaxSettings.xhr = function () {
      try {
        return new XMLHttpRequest();
      } catch (e) {}
    });
  var Ct = 0,
    Tt = {},
    St = { 0: 200, 1223: 204 },
    jt = C.ajaxSettings.xhr();
  h.attachEvent &&
    h.attachEvent("onunload", function () {
      for (var e in Tt) Tt[e]();
    }),
    (v.cors = !!jt && "withCredentials" in jt),
    (v.ajax = jt = !!jt),
    C.ajaxTransport(function (i) {
      var a;
      return v.cors || (jt && !i.crossDomain)
        ? {
            send: function (e, t) {
              var n,
                r = i.xhr(),
                o = ++Ct;
              if (
                (r.open(i.type, i.url, i.async, i.username, i.password),
                i.xhrFields)
              )
                for (n in i.xhrFields) r[n] = i.xhrFields[n];
              for (n in (i.mimeType &&
                r.overrideMimeType &&
                r.overrideMimeType(i.mimeType),
              i.crossDomain ||
                e["X-Requested-With"] ||
                (e["X-Requested-With"] = "XMLHttpRequest"),
              e))
                r.setRequestHeader(n, e[n]);
              (a = function (e) {
                return function () {
                  a &&
                    (delete Tt[o],
                    (a = r.onload = r.onerror = null),
                    "abort" === e
                      ? r.abort()
                      : "error" === e
                      ? t(r.status, r.statusText)
                      : t(
                          St[r.status] || r.status,
                          r.statusText,
                          "string" == typeof r.responseText
                            ? { text: r.responseText }
                            : void 0,
                          r.getAllResponseHeaders()
                        ));
                };
              }),
                (r.onload = a()),
                (r.onerror = a("error")),
                (a = Tt[o] = a("abort"));
              try {
                r.send((i.hasContent && i.data) || null);
              } catch (e) {
                if (a) throw e;
              }
            },
            abort: function () {
              a && a();
            },
          }
        : void 0;
    }),
    C.ajaxSetup({
      accepts: {
        script:
          "text/javascript, application/javascript, application/ecmascript, application/x-ecmascript",
      },
      contents: { script: /(?:java|ecma)script/ },
      converters: {
        "text script": function (e) {
          return C.globalEval(e), e;
        },
      },
    }),
    C.ajaxPrefilter("script", function (e) {
      void 0 === e.cache && (e.cache = !1), e.crossDomain && (e.type = "GET");
    }),
    C.ajaxTransport("script", function (n) {
      var r, o;
      if (n.crossDomain)
        return {
          send: function (e, t) {
            (r = C("<script>")
              .prop({ async: !0, charset: n.scriptCharset, src: n.url })
              .on(
                "load error",
                (o = function (e) {
                  r.remove(),
                    (o = null),
                    e && t("error" === e.type ? 404 : 200, e.type);
                })
              )),
              y.head.appendChild(r[0]);
          },
          abort: function () {
            o && o();
          },
        };
    });
  var At = [],
    Et = /(=)\?(?=&|$)|\?\?/;
  C.ajaxSetup({
    jsonp: "callback",
    jsonpCallback: function () {
      var e = At.pop() || C.expando + "_" + tt++;
      return (this[e] = !0), e;
    },
  }),
    C.ajaxPrefilter("json jsonp", function (e, t, n) {
      var r,
        o,
        i,
        a =
          !1 !== e.jsonp &&
          (Et.test(e.url)
            ? "url"
            : "string" == typeof e.data &&
              !(e.contentType || "").indexOf(
                "application/x-www-form-urlencoded"
              ) &&
              Et.test(e.data) &&
              "data");
      return a || "jsonp" === e.dataTypes[0]
        ? ((r = e.jsonpCallback =
            C.isFunction(e.jsonpCallback)
              ? e.jsonpCallback()
              : e.jsonpCallback),
          a
            ? (e[a] = e[a].replace(Et, "$1" + r))
            : !1 !== e.jsonp &&
              (e.url += (nt.test(e.url) ? "&" : "?") + e.jsonp + "=" + r),
          (e.converters["script json"] = function () {
            return i || C.error(r + " was not called"), i[0];
          }),
          (e.dataTypes[0] = "json"),
          (o = h[r]),
          (h[r] = function () {
            i = arguments;
          }),
          n.always(function () {
            (h[r] = o),
              e[r] && ((e.jsonpCallback = t.jsonpCallback), At.push(r)),
              i && C.isFunction(o) && o(i[0]),
              (i = o = void 0);
          }),
          "script")
        : void 0;
    }),
    (C.parseHTML = function (e, t, n) {
      if (!e || "string" != typeof e) return null;
      "boolean" == typeof t && ((n = t), (t = !1)), (t = t || y);
      var r = b.exec(e),
        o = !n && [];
      return r
        ? [t.createElement(r[1])]
        : ((r = C.buildFragment([e], t, o)),
          o && o.length && C(o).remove(),
          C.merge([], r.childNodes));
    });
  var Nt = C.fn.load;
  (C.fn.load = function (e, t, n) {
    if ("string" != typeof e && Nt) return Nt.apply(this, arguments);
    var r,
      o,
      i,
      a = this,
      s = e.indexOf(" ");
    return (
      0 <= s && ((r = C.trim(e.slice(s))), (e = e.slice(0, s))),
      C.isFunction(t)
        ? ((n = t), (t = void 0))
        : t && "object" == typeof t && (o = "POST"),
      0 < a.length &&
        C.ajax({ url: e, type: o, dataType: "html", data: t })
          .done(function (e) {
            (i = arguments),
              a.html(r ? C("<div>").append(C.parseHTML(e)).find(r) : e);
          })
          .complete(
            n &&
              function (e, t) {
                a.each(n, i || [e.responseText, t, e]);
              }
          ),
      this
    );
  }),
    C.each(
      [
        "ajaxStart",
        "ajaxStop",
        "ajaxComplete",
        "ajaxError",
        "ajaxSuccess",
        "ajaxSend",
      ],
      function (e, t) {
        C.fn[t] = function (e) {
          return this.on(t, e);
        };
      }
    ),
    (C.expr.filters.animated = function (t) {
      return C.grep(C.timers, function (e) {
        return t === e.elem;
      }).length;
    });
  var Dt = h.document.documentElement;
  function _t(e) {
    return C.isWindow(e) ? e : 9 === e.nodeType && e.defaultView;
  }
  (C.offset = {
    setOffset: function (e, t, n) {
      var r,
        o,
        i,
        a,
        s,
        u,
        c = C.css(e, "position"),
        l = C(e),
        p = {};
      "static" === c && (e.style.position = "relative"),
        (s = l.offset()),
        (i = C.css(e, "top")),
        (u = C.css(e, "left")),
        (o =
          ("absolute" === c || "fixed" === c) && -1 < (i + u).indexOf("auto")
            ? ((a = (r = l.position()).top), r.left)
            : ((a = parseFloat(i) || 0), parseFloat(u) || 0)),
        C.isFunction(t) && (t = t.call(e, n, s)),
        null != t.top && (p.top = t.top - s.top + a),
        null != t.left && (p.left = t.left - s.left + o),
        "using" in t ? t.using.call(e, p) : l.css(p);
    },
  }),
    C.fn.extend({
      offset: function (t) {
        if (arguments.length)
          return void 0 === t
            ? this
            : this.each(function (e) {
                C.offset.setOffset(this, t, e);
              });
        var e,
          n,
          r = this[0],
          o = { top: 0, left: 0 },
          i = r && r.ownerDocument;
        return i
          ? ((e = i.documentElement),
            C.contains(e, r)
              ? (typeof r.getBoundingClientRect != X &&
                  (o = r.getBoundingClientRect()),
                (n = _t(i)),
                {
                  top: o.top + n.pageYOffset - e.clientTop,
                  left: o.left + n.pageXOffset - e.clientLeft,
                })
              : o)
          : void 0;
      },
      position: function () {
        if (this[0]) {
          var e,
            t,
            n = this[0],
            r = { top: 0, left: 0 };
          return (
            "fixed" === C.css(n, "position")
              ? (t = n.getBoundingClientRect())
              : ((e = this.offsetParent()),
                (t = this.offset()),
                C.nodeName(e[0], "html") || (r = e.offset()),
                (r.top += C.css(e[0], "borderTopWidth", !0)),
                (r.left += C.css(e[0], "borderLeftWidth", !0))),
            {
              top: t.top - r.top - C.css(n, "marginTop", !0),
              left: t.left - r.left - C.css(n, "marginLeft", !0),
            }
          );
        }
      },
      offsetParent: function () {
        return this.map(function () {
          for (
            var e = this.offsetParent || Dt;
            e && !C.nodeName(e, "html") && "static" === C.css(e, "position");

          )
            e = e.offsetParent;
          return e || Dt;
        });
      },
    }),
    C.each(
      { scrollLeft: "pageXOffset", scrollTop: "pageYOffset" },
      function (t, o) {
        var i = "pageYOffset" === o;
        C.fn[t] = function (e) {
          return O(
            this,
            function (e, t, n) {
              var r = _t(e);
              return void 0 === n
                ? r
                  ? r[o]
                  : e[t]
                : void (r
                    ? r.scrollTo(i ? h.pageXOffset : n, i ? n : h.pageYOffset)
                    : (e[t] = n));
            },
            t,
            e,
            arguments.length,
            null
          );
        };
      }
    ),
    C.each(["top", "left"], function (e, n) {
      C.cssHooks[n] = Ce(v.pixelPosition, function (e, t) {
        return t
          ? ((t = ke(e, n)), be.test(t) ? C(e).position()[n] + "px" : t)
          : void 0;
      });
    }),
    C.each({ Height: "height", Width: "width" }, function (i, a) {
      C.each(
        { padding: "inner" + i, content: a, "": "outer" + i },
        function (r, e) {
          C.fn[e] = function (e, t) {
            var n = arguments.length && (r || "boolean" != typeof e),
              o = r || (!0 === e || !0 === t ? "margin" : "border");
            return O(
              this,
              function (e, t, n) {
                var r;
                return C.isWindow(e)
                  ? e.document.documentElement["client" + i]
                  : 9 === e.nodeType
                  ? ((r = e.documentElement),
                    Math.max(
                      e.body["scroll" + i],
                      r["scroll" + i],
                      e.body["offset" + i],
                      r["offset" + i],
                      r["client" + i]
                    ))
                  : void 0 === n
                  ? C.css(e, t, o)
                  : C.style(e, t, n, o);
              },
              a,
              n ? e : void 0,
              n,
              null
            );
          };
        }
      );
    }),
    (C.fn.size = function () {
      return this.length;
    }),
    (C.fn.andSelf = C.fn.addBack),
    "function" == typeof define &&
      define.amd &&
      define("jquery", [], function () {
        return C;
      });
  var $t = h.jQuery,
    Ot = h.$;
  return (
    (C.noConflict = function (e) {
      return h.$ === C && (h.$ = Ot), e && h.jQuery === C && (h.jQuery = $t), C;
    }),
    typeof e == X && (h.jQuery = h.$ = C),
    C
  );
});
("use strict");
function _typeof(e) {
  return (_typeof =
    "function" == typeof Symbol && "symbol" == typeof Symbol.iterator
      ? function (e) {
          return typeof e;
        }
      : function (e) {
          return e &&
            "function" == typeof Symbol &&
            e.constructor === Symbol &&
            e !== Symbol.prototype
            ? "symbol"
            : typeof e;
        })(e);
}
function _typeof(e) {
  return (_typeof =
    "function" == typeof Symbol && "symbol" == typeof Symbol.iterator
      ? function (e) {
          return typeof e;
        }
      : function (e) {
          return e &&
            "function" == typeof Symbol &&
            e.constructor === Symbol &&
            e !== Symbol.prototype
            ? "symbol"
            : typeof e;
        })(e);
}
(window.Kvs = (function () {
  function e(e) {
    (e = e || {}),
      (this.namespace = e.namespace || "kvs"),
      e.seconds && (this.seconds = e.seconds || 2592e3);
  }
  return (
    (e.prototype.get = function (e) {
      if (
        ((e = this.namespace + "-" + e),
        !this.isLocalStorageSupported() || void 0 === localStorage[e])
      )
        return null;
      var t = JSON.parse(localStorage[e]),
        n = new Date().getTime();
      if (void 0 !== t.meta.exp && t.meta.exp < n)
        return delete localStorage[e], null;
      switch (t.meta.type) {
        case "string":
          return t.data;
        case "undefined":
        case "null":
          return t.data;
        case "object":
        default:
          return JSON.parse(t.data);
      }
    }),
    (e.prototype.set = function (e, t, n) {
      if (this.isLocalStorageSupported()) {
        var r = { meta: { type: _typeof(t) } };
        switch (
          ((void 0 === n && void 0 === this.seconds) ||
            (r.meta.exp =
              new Date().getTime() + 1e3 * parseInt(n || this.seconds)),
          r.meta.type)
        ) {
          case "string":
            r.data = t;
            break;
          case "object":
          default:
            r.data = JSON.stringify(t);
        }
        localStorage[this.namespace + "-" + e] = JSON.stringify(r);
      }
    }),
    (e.prototype.delete = function (e) {
      this.isLocalStorageSupported() &&
        delete localStorage[this.namespace + "-" + e];
    }),
    (e.prototype.remove = function (e) {
      if (this.isLocalStorageSupported()) {
        var t = this.get(e);
        return this.delete(e), t;
      }
    }),
    (e.prototype.isLocalStorageSupported = function () {
      try {
        var e = window.localStorage;
        return e.setItem("test", "1"), e.removeItem("test"), !0;
      } catch (e) {
        return !1;
      }
    }),
    e
  );
})()),
  (window.prx = window.prx || {}),
  (window.sd = window.sd || {}),
  (window.evt = window.evt || {}),
  (window.pee = window.pee || {}),
  window.proto && (window.prxy = window.prxy || window.proto.data),
  (prx.kvs = new Kvs({ namespace: "proto" })),
  (prx.utils = window.prx.utils || {}),
  (prx.utils.dynamic_properties = ["listitems", "buttons", "options", "tabs"]),
  (prx.utils.XSSJSWhitelistForFroala = {
    b: ["style"],
    br: [],
    div: ["style"],
    em: ["style"],
    i: ["style"],
    span: ["style", "class"],
    strong: ["style"],
    strike: ["style"],
    s: ["style"],
    u: ["style"],
    font: [],
  }),
  (prx.utils.setCookie = function (e, t, n) {
    var r = new Date();
    r.setDate(r.getDate() + n);
    var o = escape(t) + (null == n ? "" : "; expires=" + r.toUTCString());
    document.cookie = e + "=" + o;
  }),
  (prx.utils.getCookie = function (e) {
    var t,
      n,
      r,
      o = document.cookie.split(";");
    for (t = 0; t < o.length; t++)
      if (
        ((n = o[t].substr(0, o[t].indexOf("="))),
        (r = o[t].substr(o[t].indexOf("=") + 1)),
        (n = n.replace(/^\s+|\s+$/g, "")) == e)
      )
        return unescape(r);
  }),
  (prx.utils.deleteCookie = function (e) {
    document.cookie = e + "=; expires=Thu, 01 Jan 1970 00:00:01 GMT;";
  }),
  (prx.utils.getGuid = function () {
    return "xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx".replace(
      /[xy]/g,
      function (e) {
        var t = (16 * Math.random()) | 0;
        return ("x" == e ? t : (3 & t) | 8).toString(16);
      }
    );
  }),
  (prx.utils.isGuid = function (e) {
    return /^[0-9a-fA-F]{8}-[0-9a-fA-F]{4}-[0-9a-fA-F]{4}-[0-9a-fA-F]{4}-?[0-9a-fA-F]{12}$/.test(
      e
    );
  }),
  (prx.utils.getColor = function (e) {
    if ("string" == typeof e) {
      if (!/^[0-9a-f]{3,6}$/i.test(e))
        try {
          e = JSON.parse(e);
        } catch (e) {}
      "number" == typeof e && (e = "" + e);
    }
    return "object" == _typeof(e)
      ? e
      : void 0 === e || null == e
      ? ""
      : "none" == (e = e.trim())
      ? "rgba(0,0,0,0)"
      : 0 == e
      ? "rgba(0,0,0,1)"
      : ("rgba" == e.substring(0, 4) &&
          3 < (e.match(/,/g) || []).length &&
          (e = e.replace(/,([^,]*)$/, ".$1")),
        e == e.replace(/[^A-F0-9]/gi, "") ? "#" + e : e);
  }),
  (prx.utils.getBgCss = function (e) {
    return prx.gradients.getBgCss(e);
  }),
  (prx.utils.getBgCssByProperty = function (e, t) {
    return prx.gradients.getBgCssByProperty(e, t);
  }),
  (prx.utils.getBgCssByValue = function (e) {
    return prx.gradients.getBgCssByValue(e);
  }),
  (prx.utils.checkColorPickerInputOnUpdate = function (e) {
    var t = /[#a-f0-9]/i;
    return (
      !!(
        t.test(e) ||
        /^rgb\((?:(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)\s?,\s?){2}(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)\)/.test(
          e
        ) ||
        /rgba\((\d{1,3}),\s*(\d{1,3}),\s*(\d{1,3}),\s*(\d*(?:\.\d+)?)\)/gi.test(
          e
        ) ||
        /^hsl\(\s*(0|[1-9]\d?|[12]\d\d|3[0-5]\d)\s*,\s*((0|[1-9]\d?|100)%)\s*,\s*((0|[1-9]\d?|100)%)\s*\)$/.test(
          e
        )
      ) && (t.test(e) && "#" !== e.substring(0, 1) ? "#" + e : e)
    );
  }),
  (prx.utils.getOpacity = function (e) {
    if (void 0 === e) return "";
    return /^[A-Z0-9,.%]+$/.test(e) ? e : 1;
  }),
  (prx.utils.checkURL = function (e) {
    return /^(http|https)/i.test(e) ? e : "url";
  }),
  (prx.utils.isURL = function (e) {
    return e === prx.utils.checkURL(e);
  }),
  (prx.utils.getNormalizedFilename = function (e) {
    return void 0 === e ? "" : (e = e.replace(/[<,>,:,"",/,\,|,?,*]/gi, "-"));
  }),
  (prx.utils.escapeHTML = function (e) {
    return "string" != typeof e
      ? e
      : e
          .replace(/&/g, "&amp;")
          .replace(/</g, "&lt;")
          .replace(/>/g, "&gt;")
          .replace(/"/g, "&quot;")
          .replace(/'/g, "&#039;")
          .replace(/\\/g, "&#92;");
  }),
  (prx.utils.unEscapeHTML = function (e) {
    return "string" != typeof e
      ? e
      : e
          .replace(/&amp;/g, "&")
          .replace(/&lt;/g, "<")
          .replace(/&gt;/g, ">")
          .replace(/&quot;/g, '"')
          .replace(/&#039;/g, "'")
          .replace(/&#92;/g, "\\");
  }),
  (prx.utils.escapeEditableProperties = function (e) {
    return "string" != typeof e
      ? e
      : e
          .replace(/&/g, "&amp;")
          .replace(/(?!<br>|<br\/>|<br \/>)</g, "&lt;")
          .replace(/"/g, "&quot;")
          .replace(/'/g, "&#039;");
  }),
  (prx.utils.escapeForRegEx = function (e) {
    return "string" != typeof e
      ? e
      : e
          .replace(/"/g, "\\\\")
          .replace(/\//g, "\\/")
          .replace(/\*/g, "\\*")
          .replace(/\+/g, "\\+")
          .replace(/\[/g, "\\[")
          .replace(/\]/g, "\\]")
          .replace(/\-/g, "\\-")
          .replace(/\(/g, "\\(")
          .replace(/\)/g, "\\)");
  }),
  (prx.utils.escapeRichText = function (e, t) {
    return (
      void 0 === t && (t = prx.utils.XSSJSWhitelistForFroala),
      "string" != typeof e
        ? e
        : (e = (e = filterXSS(e, {
            whiteList: t,
            stripIgnoreTag: !0,
            stripIgnoreTagBody: ["script"],
          })).replace(/&#8203;/gi, ""))
    );
  }),
  (prx.utils.getEventPageXY = function (e) {
    var t = { x: 0, y: 0 };
    if (
      "touchstart" == e.type ||
      "touchmove" == e.type ||
      "touchend" == e.type ||
      "touchcancel" == e.type
    ) {
      var n = e.originalEvent.touches[0] || e.originalEvent.changedTouches[0];
      (t.x = n.pageX), (t.y = n.pageY);
    } else
      ("click" != e.type &&
        "mousedown" != e.type &&
        "mouseup" != e.type &&
        "mousemove" != e.type &&
        "mouseover" != e.type &&
        "mouseout" != e.type &&
        "mouseenter" != e.type &&
        "mouseleave" != e.type) ||
        ((t.x = e.pageX), (t.y = e.pageY));
    return t;
  }),
  (prx.utils.getAssetsServer = function (e) {
    if (e) {
      for (
        var t = prx.nodejsassetsserver.maxsubdomains, n = 0, r = 0;
        r < e.length;
        r++
      )
        n += e.charCodeAt(r);
      return (
        (t < (n = (n % (t - 1)) + 2) || n < 1) && (n = 2),
        prx.nodejsassetsserver.subdomainprefix + n + prx.nodejsassetsserver.host
      );
    }
    return (
      prx.nodejsassetsserver.subdomainprefix + "1" + prx.nodejsassetsserver.host
    );
  }),
  (prx.utils.forceWebkitRerender = function (e) {
    var t = e.get(0),
      n = t.style.display;
    (t.style.display = "none"), t.offsetHeight, (t.style.display = n);
  }),
  (prx.utils.multilineEllipsis = function (e, t, a, s, u) {
    u || (u = 25), !0 !== s && (s = !1);
    var n = $(e).clone(!0, !0);
    $(t, n).each(function (e, t) {
      var n = "",
        r = 0,
        o = "";
      if (0 !== $(t).outerHeight())
        for (; $(t).outerHeight() > a; ) {
          (o = $(t).text()),
            s &&
              -1 != o.indexOf(".") &&
              ((n = o.substring(o.lastIndexOf("."))),
              (o = o.substring(0, o.lastIndexOf("."))),
              (r = n.length));
          var i = o.replace(/\W*\s(\S)*$/, "...");
          if (o.length == i.length) {
            (i = i.substr(0, u - 3 - r) + "..." + n), $(t).text(i);
            break;
          }
          (o += n), $(t).text(i);
        }
      else
        (o = $(t).text()).length > u &&
          (s &&
            -1 != o.indexOf(".") &&
            ((n = o.substring(o.lastIndexOf(".") + 1)),
            (o = o.substring(0, o.lastIndexOf("."))),
            (r = n.length)),
          (o = o.substr(0, u - 3 - r) + "..." + n),
          $(t).text(o));
    }),
      $(e).replaceWith(n);
  }),
  (prx.utils.bindScreenshotsFunctionality = function (e) {
    $(e)
      .find(".thumbnail-img")
      .on("error", function () {
        $(this).hide(),
          $(this).siblings(".dummy-img").hide(),
          $(this).siblings(".loading-placeholder-img").show();
      }),
      $(e)
        .find(".thumbnail-img")
        .on("load", function () {
          $(this).siblings(".loading-placeholder-img").hide(),
            $(this).show(),
            $(this)
              .parents(".containerLI, .screenLI")
              .hasClass("has-multiple-states") &&
              $(this).siblings(".dummy-img").show();
        });
  }),
  (prx.utils.arraysAreIdentical = function (e, t) {
    if (e.length !== t.length) return !1;
    for (var n = 0, r = e.length; n < r; n++) if (e[n] !== t[n]) return !1;
    return !0;
  }),
  (prx.utils.getNewBezierEase = function (e, t, n, r) {
    return new Ease(BezierEasing(e, t, n, r));
  }),
  (prx.utils.debounceFunction = function (r, o, i) {
    var a;
    return function () {
      var e = this,
        t = arguments,
        n = i && !a;
      clearTimeout(a),
        (a = setTimeout(function () {
          (a = null), i || r.apply(e, t);
        }, o)),
        n && r.apply(e, t);
    };
  }),
  (prx.utils.raf = function (e) {
    window.requestAnimationFrame(e);
  }),
  (prx.utils.isValidUrl = function (e) {
    return new RegExp(
      /^(?:(?:https?|ftp):\/\/)(?:\S+(?::\S*)?@)?(?:(?!(?:10|127)(?:\.\d{1,3}){3})(?!(?:169\.254|192\.168)(?:\.\d{1,3}){2})(?!172\.(?:1[6-9]|2\d|3[0-1])(?:\.\d{1,3}){2})(?:[1-9]\d?|1\d\d|2[01]\d|22[0-3])(?:\.(?:1?\d{1,2}|2[0-4]\d|25[0-5])){2}(?:\.(?:[1-9]\d?|1\d\d|2[0-4]\d|25[0-4]))|(?:(?:[a-z\u00a1-\uffff0-9]-*)*[a-z\u00a1-\uffff0-9]+)(?:\.(?:[a-z\u00a1-\uffff0-9]-*)*[a-z\u00a1-\uffff0-9]+)*(?:\.(?:[a-z\u00a1-\uffff]{2,}))\.?)(?::\d{2,5})?(?:[/?#]\S*)?$/i
    ).test(e);
  }),
  (prx.utils.isFaceTimeUrl = function (e) {
    return (
      !(!e.startsWith("facetime:") && !e.startsWith("facetime-audio:")) &&
      !(
        -1 <
        (e = e
          .replace(/^facetime:/, "")
          .replace(/^facetime-audio:/, "")).indexOf(":")
      )
    );
  }),
  (prx.utils.isValidUserPreset = function (e) {
    return !(
      !/^[0-9a-fA-F]{8}-[0-9a-fA-F]{4}-[0-9a-fA-F]{4}-[0-9a-fA-F]{4}-?[0-9a-fA-F]{12}$/.test(
        e
      ) || void 0 === prx.easing._customEasings[e]
    );
  }),
  (prx.utils.isSpringrk4 = function (e) {
    return "springrk4(" === e.substr(0, 10);
  }),
  (prx.utils.getDefaultDefaultTransition = function () {
    return { duration: 250, delay: 0, easing: "out" };
  }),
  (prx.utils.isSafariVorGreater = function (e) {
    if (
      "undefined" == typeof navigator ||
      ("undefined" != typeof navigator && void 0 === navigator.userAgent)
    )
      return !1;
    if (
      -1 == navigator.userAgent.indexOf("Safari") ||
      -1 !== navigator.userAgent.indexOf("Chrome")
    )
      return !1;
    var t = navigator.userAgent
      .substring(navigator.userAgent.indexOf("Version"))
      .split("/")[1]
      .replace("Safari", "")
      .trim();
    return -1 < prx.utils.compareVersions(t, e);
  }),
  (prx.utils.compareVersions = function (e, t) {
    var n =
      /^v?(?:\d+)(\.(?:[x*]|\d+)(\.(?:[x*]|\d+)(\.(?:[x*]|\d+))?(?:-[\da-z\-]+(?:\.[\da-z\-]+)*)?(?:\+[\da-z\-]+(?:\.[\da-z\-]+)*)?)?)?$/i;
    return (function (e, t) {
      if (!d(e) || !d(t)) return -2;
      for (
        var n = p(e), r = p(t), o = 0;
        o < Math.max(n.length - 1, r.length - 1);
        o++
      ) {
        var i = parseInt(n[o] || 0, 10),
          a = parseInt(r[o] || 0, 10);
        if (a < i) return 1;
        if (i < a) return -1;
      }
      var s = n[n.length - 1],
        u = r[r.length - 1];
      if (s && u) {
        var c = s.split(".").map(f),
          l = u.split(".").map(f);
        for (o = 0; o < Math.max(c.length, l.length); o++) {
          if (
            void 0 === c[o] ||
            ("string" == typeof l[o] && "number" == typeof c[o])
          )
            return -1;
          if (
            void 0 === l[o] ||
            ("string" == typeof c[o] && "number" == typeof l[o])
          )
            return 1;
          if (c[o] > l[o]) return 1;
          if (l[o] > c[o]) return -1;
        }
      } else if (s || u) return s ? -1 : 1;
      return 0;
    })(e, t);
    function p(e) {
      var t = e.replace(/^v/, "").replace(/\+.*$/, ""),
        n = (function (e, t) {
          return -1 === e.indexOf(t) ? e.length : e.indexOf(t);
        })(t, "-"),
        r = t.substring(0, n).split(".");
      return r.push(t.substring(n + 1)), r;
    }
    function f(e) {
      return isNaN(Number(e)) ? e : Number(e);
    }
    function d(e) {
      return "string" == typeof e && !!n.test(e);
    }
  }),
  (prx.utils.isMac = function () {
    return -1 != navigator.appVersion.indexOf("Mac");
  }),
  (prx.utils.isWindows = function () {
    return -1 !== window.navigator.userAgent.indexOf("Windows");
  }),
  (prx.crossmsg = {}),
  (prx.crossmsg.ini = function () {
    window.addEventListener(
      "message",
      function (e) {
        prx.crossmsg.checkrequestdomain(e) && prx.crossmsg.onmsg(e.data);
      },
      !1
    );
  }),
  (prx.crossmsg.getdomain = function () {
    return prx.export2html ? "*" : prx.url.crossmsg;
  }),
  (prx.crossmsg.checkrequestdomain = function (e) {
    var t = e.origin || e.originalEvent.origin;
    return (!prx.export2html && t == prx.url.crossmsg) || !!prx.export2html;
  }),
  (prx.crossmsg.send = function (e, t) {
    prx.crossmsg.gettargetframe(t).postMessage(e, prx.crossmsg.getdomain());
  }),
  (prx.lang = window.prx.lang || {}),
  (prx.lang.get = function (e, t) {
    if (void 0 === prx.lang._dict) return e;
    if (void 0 !== e) {
      void 0 === t && (t = {}),
        (t.ctrlKeyName =
          -1 != navigator.appVersion.indexOf("Mac") ? "Cmd" : "Ctrl");
      var n = e;
      for (var r in (void 0 !== prx.lang._dict[e] && (n = prx.lang._dict[e]),
      t))
        if (t.hasOwnProperty(r)) {
          var o = new RegExp("{" + r + "}", "g");
          n = n.replace(o, t[r]);
        }
      return filterXSS(n);
    }
  }),
  (prx.tooltip = (function () {
    var s,
      u,
      c,
      l = {
        zoom: 1,
        delayIn: 0,
        delayOut: 2e3,
        minMargin: 10,
        location: "top",
        showClose: !0,
        onmouseleaveClose: !0,
        theme: "dark",
        outerSize: !1,
      };
    function p(e, t, n) {
      var r =
          e.left +
          (("true" === n.outerSize.toString() ? t.outerWidth() : t.width()) *
            n.zoom) /
            2,
        o = e.top;
      return { left: r - c.outerWidth() / 2, top: o - c.outerHeight() - 5 };
    }
    function f(e, t, n) {
      var r = e.left,
        o =
          e.top +
          (("true" === n.outerSize.toString() ? t.outerHeight() : t.height()) *
            n.zoom) /
            2;
      return { left: r - c.outerWidth() - 5, top: o - c.outerHeight() / 2 };
    }
    function d(e, t, n) {
      return {
        left:
          e.left +
          ("true" === n.outerSize.toString() ? t.outerWidth() : t.width()) *
            n.zoom +
          5,
        top:
          e.top +
          (("true" === n.outerSize.toString() ? t.outerHeight() : t.height()) *
            n.zoom) /
            2 -
          c.outerHeight() / 2,
      };
    }
    function h(e, t, n) {
      var r =
          e.left +
          (("true" === n.outerSize.toString() ? t.outerWidth() : t.width()) *
            n.zoom) /
            2,
        o =
          e.top +
          ("true" === n.outerSize.toString() ? t.outerHeight() : t.height()) *
            n.zoom;
      return { left: r - c.outerWidth() / 2, top: o + 5 };
    }
    function g() {
      clearTimeout(s), clearTimeout(u), void 0 !== c && c.remove();
    }
    return function (e, t, n, r) {
      (r = Object.assign({}, l, r)), g();
      var o = !1 === r.onmouseleaveClose,
        i = 0 === r.delayIn,
        a = 0 === r.delayOut;
      return (
        (s = setTimeout(function () {
          (i = !0),
            (function (e, t, n, r) {
              (t = prx.lang.get(t)), (e = prx.lang.get(e)), (e = unescape(e));
              var o =
                '<div id="tooltip" class="' +
                (void 0 === t ? " no-title " : " ") +
                ("false" == r.showClose.toString() ? " no-close " : " ") +
                r.theme +
                '">';
              (o += '<div class="close"></div>'),
                (o += '<div class="tail ' + r.location + '"></div>'),
                (o += '<span class="title">' + t + "</span>"),
                (o += '<span class="message">' + e + "</span>"),
                (o += "</div>"),
                0 === (c = $(o)).find(".message")[0].children.length &&
                  c.addClass("unclickable"),
                $("body").append(c),
                n.on("remove", function () {
                  g();
                }),
                r.showClose &&
                  $("#tooltip .close").on("click", function () {
                    g();
                  });
              var i = n.offset();
              switch (r.location) {
                case "top":
                  var a = p(i, n, r);
                  break;
                case "left":
                  a = f(i, n, r);
                  break;
                case "right":
                  a = d(i, n, r);
                  break;
                case "bottom":
                  a = h(i, n, r);
              }
              var s = window.innerWidth - c.width() - r.minMargin,
                u = window.innerHeight - c.height() - r.minMargin;
              a.top < r.minMargin &&
                ($("#tooltip .tail")
                  .addClass("bottom")
                  .removeClass("top")
                  .removeClass("left")
                  .removeClass("right"),
                (a = h(i, n, r))),
                a.top > u &&
                  ($("#tooltip .tail")
                    .addClass("top")
                    .removeClass("bottom")
                    .removeClass("left")
                    .removeClass("right"),
                  (a = p(i, n, r))),
                a.left < r.minMargin &&
                  ($("#tooltip .tail")
                    .addClass("right")
                    .removeClass("bottom")
                    .removeClass("left")
                    .removeClass("top"),
                  (a = d(i, n, r))),
                a.left > s &&
                  ($("#tooltip .tail")
                    .addClass("left")
                    .removeClass("bottom")
                    .removeClass("right")
                    .removeClass("top"),
                  (a = f(i, n, r))),
                c.css("top", a.top),
                c.css("left", a.left);
            })(e, t, n, r),
            !1 === a &&
              (u = setTimeout(function () {
                (a = !0) === o && c.remove();
              }, r.delayOut));
        }, r.delayIn)),
        r.onmouseleaveClose &&
          n
            .off(".tooltip")
            .on("mouseleave.tooltip mousedown.tooltip", function () {
              !(o = !0) === i && g(), !0 === i && !0 === a && g();
            }),
        g
      );
    };
  })()),
  (prx.initializeTooltip = function () {
    $(document).on("mouseenter", "[data-tooltip]", function () {
      prx.tooltip(
        $(this).attr("data-tooltip"),
        $(this).attr("data-tooltip-title"),
        $(this),
        {
          zoom: $(this).hasClass("box") ? prx.zoom._zoom : 1,
          delayIn:
            $(this).attr("data-tooltip-delayin") || prx.tooltipDelay || 100,
          delayOut: $(this).attr("data-tooltip-delayout") || 500,
          minMargin: 10,
          location: $(this).attr("data-tooltip-side") || "top",
          showClose: $(this).attr("data-tooltip-showclose") || "false",
          onmouseleaveClose:
            $(this).attr("data-tooltip-onmouseleaveclose") || "true",
          theme: $(this).attr("data-tooltip-theme") || "dark--small",
          outerSize: $(this).attr("data-tooltip-outersize") || "false",
        }
      );
    });
  }),
  (prx.testTooltip = function () {
    return (
      $(".box").attr("data-tooltip", "tooltip test"),
      "this is for resting and debugging purposes. Hover over the canvas components  to test"
    );
  }),
  (prx.toaster = {}),
  (prx.toaster.toasters = []),
  (prx.toaster.arrange = function () {
    for (
      var e =
          0 < arguments.length && void 0 !== arguments[0] ? arguments[0] : 70,
        t = 0;
      t < prx.toaster.toasters.length;
      t++
    ) {
      var n = $("#" + prx.toaster.toasters[t]).attr("data-custom-top-position");
      n
        ? $("#" + prx.toaster.toasters[t]).css("top", n + "px")
        : ($("#" + prx.toaster.toasters[t]).css("top", e),
          (e += 40 + $("#" + prx.toaster.toasters[t]).height()));
    }
  }),
  (prx.toaster.destroy = function (e) {
    var t = !(1 < arguments.length && void 0 !== arguments[1]) || arguments[1],
      n = prx.toaster.toasters.indexOf(e);
    prx.toaster.toasters.splice(n, 1),
      $("#" + e).css("right", "-400px"),
      $("#" + e).remove(),
      t && prx.toaster.arrange();
  }),
  (prx.toaster.shakeIt = function (e) {
    $(e).addClass("shake"),
      setTimeout(function () {
        $(e).removeClass("shake");
      }, 500);
  }),
  (prx.toaster.create = (function () {
    var a = {
      title: "",
      timeout: 0,
      type: "notification",
      noClose: !1,
      icon: void 0,
      customPosition: void 0,
    };
    return function (e, t) {
      var n;
      t = Object.assign({}, a, t);
      var r = prx.utils.getGuid(),
        o =
          '<div id="' +
          r +
          '" class="toaster ' +
          t.type +
          ("" === t.title.trim() ? " no-title" : "") +
          (t.noClose ? " no-close" : "") +
          '" style="right: -400px;" ' +
          ((null === (n = t.customPosition) || void 0 === n ? void 0 : n.top)
            ? 'data-custom-top-position="' + t.customPosition.top + '"'
            : "") +
          ">";
      (o += '<div class="close"></div>'),
        (o += '<div class="toaster-content-wrapper">'),
        (o +=
          void 0 !== t.icon ? '<div class="icon ' + t.icon + '"></div>' : ""),
        (o += '<div class="title-message-container">'),
        (o += '<div class="title">' + t.title + "</div>"),
        (o += '<div class="message">' + prx.lang.get(e)),
        (o +=
          void 0 !== t.link
            ? ' <a href="' +
              t.link +
              '" target="_blank">' +
              (void 0 !== t.linkLabel ? t.linkLabel : "Learn more") +
              "</a>"
            : ""),
        (o += "</div>"),
        (o += "</div>"),
        (o += "</div>"),
        (o += "</div>");
      var i = $(o);
      $("body").append(i),
        setTimeout(function () {
          var e;
          i.css(
            "right",
            (null === (e = t.customPosition) || void 0 === e ? void 0 : e.right)
              ? t.customPosition.right + "px"
              : "25px"
          );
        }, 20),
        prx.toaster.toasters.push(r),
        prx.toaster.arrange(),
        t.noClose ||
          i.find(".close").on("click", function () {
            prx.toaster.destroy(r);
          }),
        0 !== t.timeout &&
          setTimeout(function () {
            prx.toaster.destroy(r);
          }, t.timeout);
    };
  })()),
  (prx.testToaster = function () {
    prx.toaster.create("basic toaster");
    return (
      prx.toaster.create(
        "This is a vary long message with a long title with a lot of text in order to test how a long message will feel. what do you think is that looking ok or we need to make some adjustments",
        { title: "this is a length title to test the feel of such a title" }
      ),
      prx.toaster.create("toaster with 5 seconds timeout", {
        timeout: 5e3,
        noClose: !0,
      }),
      prx.toaster.create("warning toaster", { type: "warning" }),
      prx.toaster.create("Error toaster with title", {
        type: "error",
        title: "Error",
      }),
      "this is for resting and debugging purposes"
    );
  }),
  (window.prx = window.prx || {}),
  (prx.embed = 0),
  (prx.export2html = 0),
  (prx.letterboxmode = !1),
  (prx.goToPage = function (e) {
    var t = !0,
      n = prx.inAnnotationMode;
    prx.inAnnotationMode && (t = prx.disableAnnotations()),
      t &&
        (prx.highlightPage(e),
        prx.crossmsg.send({ action: "change-page", data: { pageid: e } }),
        $("#menu-screen-browser [data-screen-id=" + parseInt(e) + "]").attr(
          "data-orientation"
        ) != prx.orientation && prx.switchOrientation(!1),
        n && prx.iniAnnotations());
  }),
  (prx.setActivePage = function (e) {
    (prx.activePage = {}),
      (prx.activePage.id = e),
      void 0 !== prx.data &&
        void 0 !== prx.data.pages &&
        (prx.activePage.title =
          prx.data.pages[prx.getPageIndexFromId(e)].title);
  }),
  (prx.getPageIndexFromId = function (e) {
    for (var t = 0; t < prx.data.pages.length; t++)
      if (parseInt(prx.data.pages[t].id) == parseInt(e)) return t;
    return -1;
  });
var getColumnIndex = function (e, t) {
    t = t.toLowerCase();
    for (var n = 0; n < e.length; n++) if (e[n].toLowerCase() == t) return n;
    return !1;
  },
  getMonthsArray = function () {
    return [
      "January",
      "February",
      "March",
      "April",
      "May",
      "June",
      "July",
      "August",
      "September",
      "October",
      "November",
      "December",
    ];
  },
  getScreenIndexFromId = function (e) {
    for (var t = -1, n = 0; n < prx.data.pages.length; n++)
      prx.data.pages[n].id == e && (t = n);
    return t;
  },
  innerPrx = function () {
    return $("#pio-playerframe").get(0).contentWindow.prx;
  };
function setCookie(e, t, n) {
  var r = new Date();
  r.setDate(r.getDate() + n);
  var o = escape(t) + (null == n ? "" : "; expires=" + r.toUTCString());
  document.cookie = e + "=" + o;
}
function getCookie(e) {
  var t,
    n,
    r,
    o = document.cookie.split(";");
  for (t = 0; t < o.length; t++)
    if (
      ((n = o[t].substr(0, o[t].indexOf("="))),
      (r = o[t].substr(o[t].indexOf("=") + 1)),
      (n = n.replace(/^\s+|\s+$/g, "")) == e)
    )
      return unescape(r);
}
function deleteCookie(e) {
  document.cookie = e + "=; expires=Thu, 01 Jan 1970 00:00:01 GMT;";
}
(prx.iniBgColor = function () {
  var e = $("body").css("background-color");
  prx.checkBackgroundColorBrightness(e);
}),
  (prx.checkBackgroundColorBrightness = function (e) {
    if (-1 != e.indexOf("#"))
      var t = e.substring(1),
        n = ((i = parseInt(t, 16)) >> 16) & 255,
        r = (i >> 8) & 255,
        o = (i >> 0) & 255;
    else {
      var i = (t = -1 !== e.indexOf("rgba") ? e.substring(4) : e.substring(3))
        .slice(1, -1)
        .split(",");
      (n = parseInt(i[0].trim())),
        (r = parseInt(i[1].trim())),
        (o = parseInt(i[2].trim()));
    }
    var a = 0.2989 * n + 0.587 * r + 0.114 * o,
      s = $(
        ".sidebar-action-buttons > .header-action-button, .sidebar-action-buttons > #zoom, .sidebar-action-buttons > #zoom .ui-slider-handle, #branding, #screen-nav-arrow-left, #screen-nav-arrow-right"
      );
    a < 120 ? s.addClass("dark-bg") : s.removeClass("dark-bg");
  }),
  (prx.utils.playerEngineEnterFullscreen = function () {
    $("body").addClass("player-engine-fullscreen");
  }),
  (prx.utils.playerEngineExitFullscreen = function () {
    $("body").removeClass("player-engine-fullscreen");
  }),
  (prx.utils.missedFonts = function () {
    var e;
    prx.spaces ||
      prx.export2html ||
      prx.letterboxmode ||
      prx.embed ||
      (prx.user &&
        prx.user.editor_access &&
        (e = "https://support.proto.io/hc/en-us/articles/360007433231"),
      prx.toaster.create(
        "Some fonts used in this project are not available. A default font is displayed instead.",
        {
          type: "warning",
          link: e,
          linkLabel: "Learn more",
          title: "Missing Fonts",
        }
      ));
  }),
  (prx.utils.onmobile = function () {
    var e = navigator.userAgent || navigator.vendor || window.opera;
    return (
      /(android|bb\d+|meego).+mobile|avantgo|bada\/|blackberry|blazer|compal|elaine|fennec|hiptop|iemobile|ip(hone|od|ad)|iris|kindle|lge |maemo|midp|mmp|mobile.+firefox|netfront|opera m(ob|in)i|palm( os)?|phone|p(ixi|re)\/|plucker|pocket|psp|series(4|6)0|symbian|treo|up\.(browser|link)|vodafone|wap|windows ce|xda|xiino/i.test(
        e
      ) ||
      /1207|6310|6590|3gso|4thp|50[1-6]i|770s|802s|a wa|abac|ac(er|oo|s\-)|ai(ko|rn)|al(av|ca|co)|amoi|an(ex|ny|yw)|aptu|ar(ch|go)|as(te|us)|attw|au(di|\-m|r |s )|avan|be(ck|ll|nq)|bi(lb|rd)|bl(ac|az)|br(e|v)w|bumb|bw\-(n|u)|c55\/|capi|ccwa|cdm\-|cell|chtm|cldc|cmd\-|co(mp|nd)|craw|da(it|ll|ng)|dbte|dc\-s|devi|dica|dmob|do(c|p)o|ds(12|\-d)|el(49|ai)|em(l2|ul)|er(ic|k0)|esl8|ez([4-7]0|os|wa|ze)|fetc|fly(\-|_)|g1 u|g560|gene|gf\-5|g\-mo|go(\.w|od)|gr(ad|un)|haie|hcit|hd\-(m|p|t)|hei\-|hi(pt|ta)|hp( i|ip)|hs\-c|ht(c(\-| |_|a|g|p|s|t)|tp)|hu(aw|tc)|i\-(20|go|ma)|i230|iac( |\-|\/)|ibro|idea|ig01|ikom|im1k|inno|ipaq|iris|ja(t|v)a|jbro|jemu|jigs|kddi|keji|kgt( |\/)|klon|kpt |kwc\-|kyo(c|k)|le(no|xi)|lg( g|\/(k|l|u)|50|54|\-[a-w])|libw|lynx|m1\-w|m3ga|m50\/|ma(te|ui|xo)|mc(01|21|ca)|m\-cr|me(rc|ri)|mi(o8|oa|ts)|mmef|mo(01|02|bi|de|do|t(\-| |o|v)|zz)|mt(50|p1|v )|mwbp|mywa|n10[0-2]|n20[2-3]|n30(0|2)|n50(0|2|5)|n7(0(0|1)|10)|ne((c|m)\-|on|tf|wf|wg|wt)|nok(6|i)|nzph|o2im|op(ti|wv)|oran|owg1|p800|pan(a|d|t)|pdxg|pg(13|\-([1-8]|c))|phil|pire|pl(ay|uc)|pn\-2|po(ck|rt|se)|prox|psio|pt\-g|qa\-a|qc(07|12|21|32|60|\-[2-7]|i\-)|qtek|r380|r600|raks|rim9|ro(ve|zo)|s55\/|sa(ge|ma|mm|ms|ny|va)|sc(01|h\-|oo|p\-)|sdk\/|se(c(\-|0|1)|47|mc|nd|ri)|sgh\-|shar|sie(\-|m)|sk\-0|sl(45|id)|sm(al|ar|b3|it|t5)|so(ft|ny)|sp(01|h\-|v\-|v )|sy(01|mb)|t2(18|50)|t6(00|10|18)|ta(gt|lk)|tcl\-|tdg\-|tel(i|m)|tim\-|t\-mo|to(pl|sh)|ts(70|m\-|m3|m5)|tx\-9|up(\.b|g1|si)|utst|v400|v750|veri|vi(rg|te)|vk(40|5[0-3]|\-v)|vm40|voda|vulc|vx(52|53|60|61|70|80|81|83|85|98)|w3c(\-| )|webc|whit|wi(g |nc|nw)|wmlb|wonu|x700|yas\-|your|zeto|zte\-/i.test(
        e.substr(0, 4)
      )
    );
  }),
  (prx.utils.isUserTestingPage = function (e) {
    var t = [
      "usertesting",
      "uxarmy",
      "validately",
      "userzoom",
      "lookback",
      "userlytics",
    ];
    for (var n in t) if (e.includes(t[n])) return !0;
    return !1;
  }),
  (prx.crossmsg = prx.crossmsg || {}),
  (prx.crossmsg.gettargetframe = function (e) {
    if (!0 === e) return window.opener;
    try {
      return $("#pio-playerframe").get(0).contentWindow;
    } catch (e) {}
  }),
  (prx.crossmsg.onmsg = function (e) {
    try {
      switch (e.action) {
        case "player-ready":
          prx.iniPlayerReady(e.data);
          break;
        case "switch-orientation":
          prx.switchOrientation();
          break;
        case "scroll-to-top":
          prx.scrollToTop();
          break;
        case "highlight-page":
          prx.highlightPage(e.data.pageid);
          break;
        case "show-actions":
          prx.showActionsActionsInPreview(e.data.activeStateIds);
          break;
        case "hide-actions":
          prx.hideActionsActionsInPreview();
          break;
        case "show-click-effect":
          prx.showClickEffectActionsInPreview();
          break;
        case "hide-click-effect":
          prx.hideClickEffectActionsInPreview();
          break;
        case "go-to-previous-screen":
          prx.goToPreviousScreen();
          break;
        case "go-to-next-screen":
          prx.goToNextScreen();
          break;
        case "player-engine-enter-fullscreen":
          prx.utils.playerEngineEnterFullscreen();
          break;
        case "player-engine-exit-fullscreen":
          prx.utils.playerEngineExitFullscreen();
          break;
        case "missed-fonts":
          prx.utils.missedFonts();
          break;
        case "inputblur":
          var t = $("iframe").get(0),
            n = t.style.display;
          (t.style.display = "none"), t.offsetHeight, (t.style.display = n);
          break;
        case "ready-to-load-data":
          var r = new URL(window.location.href);
          r.searchParams.delete("hc"),
            window.history.replaceState({}, document.title, r.toString()),
            prx.crossmsg.send({ action: "ready-to-load-data" }, !0);
          break;
        case "project-data-saved":
          try {
            var o = $("#pio-playerframe");
            o.contents().find("#canvas-loader").fadeOut(),
              o.attr("src", prx.engineIFrameURL);
          } catch (e) {}
      }
    } catch (e) {}
  }),
  (prx.letterbox = {}),
  (prx.letterbox.pages = {}),
  (prx.letterbox.inputFocusState = !1),
  (prx.letterbox.kvsKeys = {
    toasterLastDaySeen: "toasterLastDaySeen",
    toasterTimesSeen: "toasterTimesSeen",
  }),
  (prx.letterbox.fitToScreen = function () {
    var e = $("#pio-playerframe"),
      t = e.width(),
      n = e.height();
    e.hide(),
      document.addEventListener(
        "touchmove",
        function (e) {
          e.preventDefault();
        },
        { passive: !1 }
      );
    var r = $(window).width(),
      o = $(window).height(),
      i = Math.min(r / t, o / n);
    "0" == prx.fitToScreen && (i = Math.min(i, 1));
    var a = (o - n * i) / 2,
      s = (r - t * i) / 2;
    e.offset(function (e, t) {
      return { top: 0, left: t.left };
    })
      .css({
        "-webkit-transform": "scale(" + i + ")",
        transform: "scale(" + i + ")",
        marginTop: a,
        marginLeft: s,
      })
      .show();
  }),
  (prx.letterbox.getWindowOrientation = function () {
    var e = $(window).width();
    return $(window).height() < e ? "landscape" : "portrait";
  }),
  (prx.letterbox.getFrameOrientation = function () {
    var e = $("#pio-playerframe"),
      t = e.width();
    return e.height() < t ? "landscape" : "portrait";
  }),
  (prx.letterbox.checkorientation = function () {
    if (prx.utils.onmobile()) {
      var e = $("#pio-playerframe"),
        t = prx.letterbox.getFrameOrientation();
      e.hide();
      var n = prx.letterbox.getWindowOrientation();
      e.show(), t != n && prx.letterbox.changeorientation(t);
    } else prx.letterbox.changeorientation(prx.device.defaultOrientation);
  }),
  (prx.letterbox.updateOrientation = function (t) {
    if (!prx.utils.onmobile()) {
      var e = prx.letterbox.pages.find(function (e) {
        return e.id == t;
      });
      prx.letterbox.getFrameOrientation() !== e.orientation &&
        prx.letterbox.changeorientation(e.orientation);
    }
  }),
  (prx.letterbox.changeorientation = function (e) {
    if (prx.device.allow_orientation_change && prx.device[e + "_applies"]) {
      $("#pio-playerframe").css({
        width: prx.device[e][0],
        height: prx.device[e][1],
      });
      try {
        prx.crossmsg.send({ action: "change-orientation" });
      } catch (e) {}
    }
    prx.letterbox.fitToScreen();
  }),
  (prx.letterbox.changeHash = function (t) {
    var e, n, r;
    prx.letterbox.updateOrientation(t),
      !window.location.pathname.includes("uxarmy") ||
        (0 !==
          (e = prx.letterbox.pages.find(function (e) {
            return e.id == t;
          })).length &&
          ((n = e.id),
          (r = encodeURIComponent(e.title.replace(/ /g, "-"))),
          (window.location.hash = "#".concat(n, "-").concat(r))));
  }),
  (prx.crossmsg.onmsg = function (e) {
    try {
      switch (e.action) {
        case "player-ready":
          if (
            (prx.iniPlayerReady(e.data),
            (prx.letterbox.pages = e.data.pages),
            0 < window.location.hash.length &&
              window.location.pathname.includes("uxarmy"))
          ) {
            var t = window.location.hash.replace("#", "").split("-")[0];
            Number.isInteger(parseInt(t)) &&
              prx.crossmsg.send({ action: "change-page", data: { pageid: t } });
          } else prx.letterbox.changeHash(e.data.startscreen);
          break;
        case "highlight-page":
          prx.letterbox.changeHash(e.data.pageid);
          break;
        case "set-input-focus-status":
          prx.letterbox.inputFocusState = e.data.value;
          break;
        case "ready-to-load-data":
          var n = new URL(window.location.href);
          n.searchParams.delete("hc"),
            window.history.replaceState({}, document.title, n.toString()),
            prx.crossmsg.send({ action: "ready-to-load-data" }, !0);
          break;
        case "project-data-saved":
          try {
            var r = $("#pio-playerframe");
            r.contents().find("#canvas-loader").fadeOut(),
              r.attr("src", prx.engineIFrameURL);
          } catch (e) {}
      }
    } catch (e) {}
  }),
  (prx.letterbox.exitFullScreen = function () {
    prx.utils.onmobile() ||
      prx.utils.isUserTestingPage(location.href) ||
      $("#go-fullscreen").css("visibility", "visible"),
      $("#go-fullscreen").click(function () {
        (location.href = prx.exitFullScreenUrl),
          prx.kvs.set("fullScreen_" + prx.project.id, !1);
      });
  }),
  (prx.helper = {}),
  (prx.helper.blurInputs = function () {
    $("input:focus, textarea:focus").blur();
  }),
  (prx.helper.closeDropdowns = function () {
    $(document).trigger("dummy.close-dropdowns");
  }),
  (prx.helper.toggleDropdownOptions = function (e, t, n) {
    e
      ? ($(t).removeClass("display-on-top"), $(n).hide())
      : (prx.helper.closeDropdowns(),
        $(t).addClass("display-on-top"),
        $(n).show());
  }),
  (prx.helper.rerenderActivePageWebkitIssue = function (e) {}),
  (prx.helper.onmobile = function () {
    var e = navigator.userAgent || navigator.vendor || window.opera;
    return (
      /(android|bb\d+|meego).+mobile|avantgo|bada\/|blackberry|blazer|compal|elaine|fennec|hiptop|iemobile|ip(hone|od|ad)|iris|kindle|lge |maemo|midp|mmp|mobile.+firefox|netfront|opera m(ob|in)i|palm( os)?|phone|p(ixi|re)\/|plucker|pocket|psp|series(4|6)0|symbian|treo|up\.(browser|link)|vodafone|wap|windows ce|xda|xiino/i.test(
        e
      ) ||
      /1207|6310|6590|3gso|4thp|50[1-6]i|770s|802s|a wa|abac|ac(er|oo|s\-)|ai(ko|rn)|al(av|ca|co)|amoi|an(ex|ny|yw)|aptu|ar(ch|go)|as(te|us)|attw|au(di|\-m|r |s )|avan|be(ck|ll|nq)|bi(lb|rd)|bl(ac|az)|br(e|v)w|bumb|bw\-(n|u)|c55\/|capi|ccwa|cdm\-|cell|chtm|cldc|cmd\-|co(mp|nd)|craw|da(it|ll|ng)|dbte|dc\-s|devi|dica|dmob|do(c|p)o|ds(12|\-d)|el(49|ai)|em(l2|ul)|er(ic|k0)|esl8|ez([4-7]0|os|wa|ze)|fetc|fly(\-|_)|g1 u|g560|gene|gf\-5|g\-mo|go(\.w|od)|gr(ad|un)|haie|hcit|hd\-(m|p|t)|hei\-|hi(pt|ta)|hp( i|ip)|hs\-c|ht(c(\-| |_|a|g|p|s|t)|tp)|hu(aw|tc)|i\-(20|go|ma)|i230|iac( |\-|\/)|ibro|idea|ig01|ikom|im1k|inno|ipaq|iris|ja(t|v)a|jbro|jemu|jigs|kddi|keji|kgt( |\/)|klon|kpt |kwc\-|kyo(c|k)|le(no|xi)|lg( g|\/(k|l|u)|50|54|\-[a-w])|libw|lynx|m1\-w|m3ga|m50\/|ma(te|ui|xo)|mc(01|21|ca)|m\-cr|me(rc|ri)|mi(o8|oa|ts)|mmef|mo(01|02|bi|de|do|t(\-| |o|v)|zz)|mt(50|p1|v )|mwbp|mywa|n10[0-2]|n20[2-3]|n30(0|2)|n50(0|2|5)|n7(0(0|1)|10)|ne((c|m)\-|on|tf|wf|wg|wt)|nok(6|i)|nzph|o2im|op(ti|wv)|oran|owg1|p800|pan(a|d|t)|pdxg|pg(13|\-([1-8]|c))|phil|pire|pl(ay|uc)|pn\-2|po(ck|rt|se)|prox|psio|pt\-g|qa\-a|qc(07|12|21|32|60|\-[2-7]|i\-)|qtek|r380|r600|raks|rim9|ro(ve|zo)|s55\/|sa(ge|ma|mm|ms|ny|va)|sc(01|h\-|oo|p\-)|sdk\/|se(c(\-|0|1)|47|mc|nd|ri)|sgh\-|shar|sie(\-|m)|sk\-0|sl(45|id)|sm(al|ar|b3|it|t5)|so(ft|ny)|sp(01|h\-|v\-|v )|sy(01|mb)|t2(18|50)|t6(00|10|18)|ta(gt|lk)|tcl\-|tdg\-|tel(i|m)|tim\-|t\-mo|to(pl|sh)|ts(70|m\-|m3|m5)|tx\-9|up(\.b|g1|si)|utst|v400|v750|veri|vi(rg|te)|vk(40|5[0-3]|\-v)|vm40|voda|vulc|vx(52|53|60|61|70|80|81|83|85|98)|w3c(\-| )|webc|whit|wi(g |nc|nw)|wmlb|wonu|x700|yas\-|your|zeto|zte\-/i.test(
        e.substr(0, 4)
      )
    );
  }),
  (prx.helper.onandroid = function () {
    return /android/i.test(navigator.userAgent.toLowerCase());
  }),
  (prx.helper.oniphone = function () {
    return /iphone/i.test(navigator.userAgent.toLowerCase());
  }),
  (prx.helper.onipad = function () {
    return /ipad/i.test(navigator.userAgent.toLowerCase());
  }),
  (prx.iniPlayerReady = function (e) {
    if (
      ((prx.device = e.device),
      (prx.toasterTimeAlive = 3e4),
      (prx.toasterMaxTimesShown = 3),
      null === prx.kvs.get(prx.letterbox.kvsKeys.toasterLastDaySeen) ||
        864e5 <
          Date.now() -
            new Date(prx.kvs.get(prx.letterbox.kvsKeys.toasterLastDaySeen)))
    ) {
      var t = Date.now();
      prx.kvs.set(prx.letterbox.kvsKeys.toasterLastDaySeen, t),
        prx.kvs.set(prx.letterbox.kvsKeys.toasterTimesSeen, 0);
    }
    prx.kvs.get(prx.letterbox.kvsKeys.toasterTimesSeen) <
      prx.toasterMaxTimesShown &&
      (prx.helper.onandroid() ||
        prx.helper.oniphone() ||
        prx.helper.onipad()) &&
      "true" !== prx.testingtool &&
      setTimeout(function () {
        var e = {
          timeout:
            0 === prx.kvs.get(prx.letterbox.kvsKeys.toasterTimesSeen)
              ? 0
              : prx.toasterTimeAlive,
          type: "notification",
          noClose: !1,
        };
        if (
          (("0" !== prx.downloadURL && "" !== prx.downloadURL) ||
            ((e.link = prx.openURL),
            (e.linkLabel = "Click here to open the app.")),
          prx.toaster.create(
            "Use the Proto.io native app for the most realistic experience.",
            e
          ),
          "0" !== prx.downloadURL && "" !== prx.downloadURL)
        ) {
          var t = "";
          (t +=
            ' <a href="' +
            prx.openURL +
            '" target="_blank">Click here to open the app.</a>'),
            (t += "<br><br>"),
            (t +=
              '<a href="' +
              prx.downloadURL +
              '" target="_blank">If you don\'t have the app installed, first download it here.</a>'),
            $(".toaster .message").append(t);
        }
        prx.kvs.set(
          prx.letterbox.kvsKeys.toasterTimesSeen,
          prx.kvs.get(prx.letterbox.kvsKeys.toasterTimesSeen) + 1
        );
      }, 2e3);
  }),
  (prx.data = {}),
  (prx.sort = ""),
  (prx._zoom = 1),
  (prx._autozoom = !0),
  (prx._zoomcookie = !1),
  (prx.inAnnotationMode = !1),
  (prx.url = {}),
  (prx.fitToScreen = !0),
  $(document).ready(function () {
    prx.letterbox.checkorientation(),
      prx.letterbox.fitToScreen(),
      prx.letterbox.exitFullScreen(),
      prx.crossmsg.ini();
  }),
  $(window).resize(function () {
    prx.letterbox.inputFocusState || prx.letterbox.fitToScreen();
  }),
  "onorientationchange" in window &&
    $(window).on("orientationchange", function () {
      var e = 0 == window.orientation ? "portrait" : "landscape";
      prx.letterbox.changeorientation(e);
    }),
  $(window).on("orientationchange", function () {
    prx.utils.onmobile() && prx.letterbox.checkorientation();
  }),
  (function (e, d) {
    var r = "__lodash_hash_undefined__",
      n = 9007199254740991,
      h = "[object Arguments]",
      g = "[object Boolean]",
      m = "[object Date]",
      v = "[object Function]",
      y = "[object GeneratorFunction]",
      x = "[object Map]",
      b = "[object Number]",
      w = "[object Object]",
      o = "[object Promise]",
      k = "[object RegExp]",
      C = "[object Set]",
      T = "[object String]",
      S = "[object Symbol]",
      i = "[object WeakMap]",
      j = "[object ArrayBuffer]",
      A = "[object DataView]",
      E = "[object Float32Array]",
      N = "[object Float64Array]",
      D = "[object Int8Array]",
      _ = "[object Int16Array]",
      $ = "[object Int32Array]",
      O = "[object Uint8Array]",
      L = "[object Uint8ClampedArray]",
      F = "[object Uint16Array]",
      q = "[object Uint32Array]",
      P = /\w*$/,
      t = /^\[object .+?Constructor\]$/,
      a = /^(?:0|[1-9]\d*)$/,
      H = {};
    (H[h] =
      H["[object Array]"] =
      H[j] =
      H[A] =
      H[g] =
      H[m] =
      H[E] =
      H[N] =
      H[D] =
      H[_] =
      H[$] =
      H[x] =
      H[b] =
      H[w] =
      H[k] =
      H[C] =
      H[T] =
      H[S] =
      H[O] =
      H[L] =
      H[F] =
      H[q] =
        !0),
      (H["[object Error]"] = H[v] = H[i] = !1);
    var s =
        "object" == typeof global &&
        global &&
        global.Object === Object &&
        global,
      u = "object" == typeof self && self && self.Object === Object && self,
      c = s || u || Function("return this")(),
      l = "object" == typeof exports && exports && !exports.nodeType && exports,
      p =
        l && "object" == typeof module && module && !module.nodeType && module,
      f = p && p.exports === l;
    function I(e, t) {
      return e.set(t[0], t[1]), e;
    }
    function M(e, t) {
      return e.add(t), e;
    }
    function R(e, t, n, r) {
      var o = -1,
        i = e ? e.length : 0;
      for (r && i && (n = e[++o]); ++o < i; ) n = t(n, e[o], o, e);
      return n;
    }
    function z(e) {
      var t = !1;
      if (null != e && "function" != typeof e.toString)
        try {
          t = !!(e + "");
        } catch (e) {}
      return t;
    }
    function W(e) {
      var n = -1,
        r = Array(e.size);
      return (
        e.forEach(function (e, t) {
          r[++n] = [t, e];
        }),
        r
      );
    }
    function B(t, n) {
      return function (e) {
        return t(n(e));
      };
    }
    function U(e) {
      var t = -1,
        n = Array(e.size);
      return (
        e.forEach(function (e) {
          n[++t] = e;
        }),
        n
      );
    }
    var X,
      V = Array.prototype,
      J = Function.prototype,
      G = Object.prototype,
      K = c["__core-js_shared__"],
      Y = (X = /[^.]+$/.exec((K && K.keys && K.keys.IE_PROTO) || ""))
        ? "Symbol(src)_1." + X
        : "",
      Q = J.toString,
      Z = G.hasOwnProperty,
      ee = G.toString,
      te = RegExp(
        "^" +
          Q.call(Z)
            .replace(/[\\^$.*+?()[\]{}|]/g, "\\$&")
            .replace(
              /hasOwnProperty|(function).*?(?=\\\()| for .+?(?=\\\])/g,
              "$1.*?"
            ) +
          "$"
      ),
      ne = f ? c.Buffer : d,
      re = c.Symbol,
      oe = c.Uint8Array,
      ie = B(Object.getPrototypeOf, Object),
      ae = Object.create,
      se = G.propertyIsEnumerable,
      ue = V.splice,
      ce = Object.getOwnPropertySymbols,
      le = ne ? ne.isBuffer : d,
      pe = B(Object.keys, Object),
      fe = Pe(c, "DataView"),
      de = Pe(c, "Map"),
      he = Pe(c, "Promise"),
      ge = Pe(c, "Set"),
      me = Pe(c, "WeakMap"),
      ve = Pe(Object, "create"),
      ye = ze(fe),
      xe = ze(de),
      be = ze(he),
      we = ze(ge),
      ke = ze(me),
      Ce = re ? re.prototype : d,
      Te = Ce ? Ce.valueOf : d;
    function Se(e) {
      var t = -1,
        n = e ? e.length : 0;
      for (this.clear(); ++t < n; ) {
        var r = e[t];
        this.set(r[0], r[1]);
      }
    }
    function je(e) {
      var t = -1,
        n = e ? e.length : 0;
      for (this.clear(); ++t < n; ) {
        var r = e[t];
        this.set(r[0], r[1]);
      }
    }
    function Ae(e) {
      var t = -1,
        n = e ? e.length : 0;
      for (this.clear(); ++t < n; ) {
        var r = e[t];
        this.set(r[0], r[1]);
      }
    }
    function Ee(e) {
      this.__data__ = new je(e);
    }
    function Ne(e, t) {
      var n =
          Be(e) ||
          (function (e) {
            return (
              (function (e) {
                return (
                  (function (e) {
                    return !!e && "object" == typeof e;
                  })(e) && Ue(e)
                );
              })(e) &&
              Z.call(e, "callee") &&
              (!se.call(e, "callee") || ee.call(e) == h)
            );
          })(e)
            ? (function (e, t) {
                for (var n = -1, r = Array(e); ++n < e; ) r[n] = t(n);
                return r;
              })(e.length, String)
            : [],
        r = n.length,
        o = !!r;
      for (var i in e)
        (!t && !Z.call(e, i)) ||
          (o && ("length" == i || Me(i, r))) ||
          n.push(i);
      return n;
    }
    function De(e, t, n) {
      var r = e[t];
      (Z.call(e, t) && We(r, n) && (n !== d || t in e)) || (e[t] = n);
    }
    function _e(e, t) {
      for (var n = e.length; n--; ) if (We(e[n][0], t)) return n;
      return -1;
    }
    function $e(n, r, o, i, e, t, a) {
      var s;
      if ((i && (s = t ? i(n, e, t, a) : i(n)), s !== d)) return s;
      if (!Je(n)) return n;
      var u = Be(n);
      if (u) {
        if (
          ((s = (function (e) {
            var t = e.length,
              n = e.constructor(t);
            t &&
              "string" == typeof e[0] &&
              Z.call(e, "index") &&
              ((n.index = e.index), (n.input = e.input));
            return n;
          })(n)),
          !r)
        )
          return (function (e, t) {
            var n = -1,
              r = e.length;
            t || (t = Array(r));
            for (; ++n < r; ) t[n] = e[n];
            return t;
          })(n, s);
      } else {
        var c = Ie(n),
          l = c == v || c == y;
        if (Xe(n))
          return (function (e, t) {
            if (t) return e.slice();
            var n = new e.constructor(e.length);
            return e.copy(n), n;
          })(n, r);
        if (c == w || c == h || (l && !t)) {
          if (z(n)) return t ? n : {};
          if (
            ((s = (function (e) {
              return "function" != typeof e.constructor || Re(e)
                ? {}
                : (function (e) {
                    return Je(e) ? ae(e) : {};
                  })(ie(e));
            })(l ? {} : n)),
            !r)
          )
            return (function (e, t) {
              return Fe(e, He(e), t);
            })(
              n,
              (function (e, t) {
                return e && Fe(t, Ge(t), e);
              })(s, n)
            );
        } else {
          if (!H[c]) return t ? n : {};
          s = (function (e, t, n, r) {
            var o = e.constructor;
            switch (t) {
              case j:
                return Le(e);
              case g:
              case m:
                return new o(+e);
              case A:
                return (function (e, t) {
                  var n = t ? Le(e.buffer) : e.buffer;
                  return new e.constructor(n, e.byteOffset, e.byteLength);
                })(e, r);
              case E:
              case N:
              case D:
              case _:
              case $:
              case O:
              case L:
              case F:
              case q:
                return (function (e, t) {
                  var n = t ? Le(e.buffer) : e.buffer;
                  return new e.constructor(n, e.byteOffset, e.length);
                })(e, r);
              case x:
                return (function (e, t, n) {
                  return R(t ? n(W(e), !0) : W(e), I, new e.constructor());
                })(e, r, n);
              case b:
              case T:
                return new o(e);
              case k:
                return (function (e) {
                  var t = new e.constructor(e.source, P.exec(e));
                  return (t.lastIndex = e.lastIndex), t;
                })(e);
              case C:
                return (function (e, t, n) {
                  return R(t ? n(U(e), !0) : U(e), M, new e.constructor());
                })(e, r, n);
              case S:
                return (function (e) {
                  return Te ? Object(Te.call(e)) : {};
                })(e);
            }
          })(n, c, $e, r);
        }
      }
      a || (a = new Ee());
      var p = a.get(n);
      if (p) return p;
      if ((a.set(n, s), !u))
        var f = o
          ? (function (e) {
              return (function (e, t, n) {
                var r = t(e);
                return Be(e)
                  ? r
                  : (function (e, t) {
                      for (var n = -1, r = t.length, o = e.length; ++n < r; )
                        e[o + n] = t[n];
                      return e;
                    })(r, n(e));
              })(e, Ge, He);
            })(n)
          : Ge(n);
      return (
        (function (e, t) {
          for (
            var n = -1, r = e ? e.length : 0;
            ++n < r && !1 !== t(e[n], n, e);

          );
        })(f || n, function (e, t) {
          f && (e = n[(t = e)]), De(s, t, $e(e, r, o, i, t, n, a));
        }),
        s
      );
    }
    function Oe(e) {
      return (
        !(
          !Je(e) ||
          (function (e) {
            return !!Y && Y in e;
          })(e)
        ) && (Ve(e) || z(e) ? te : t).test(ze(e))
      );
    }
    function Le(e) {
      var t = new e.constructor(e.byteLength);
      return new oe(t).set(new oe(e)), t;
    }
    function Fe(e, t, n, r) {
      n || (n = {});
      for (var o = -1, i = t.length; ++o < i; ) {
        var a = t[o],
          s = r ? r(n[a], e[a], a, n, e) : d;
        De(n, a, s === d ? e[a] : s);
      }
      return n;
    }
    function qe(e, t) {
      var n = e.__data__;
      return (function (e) {
        var t = typeof e;
        return "string" == t || "number" == t || "symbol" == t || "boolean" == t
          ? "__proto__" !== e
          : null === e;
      })(t)
        ? n["string" == typeof t ? "string" : "hash"]
        : n.map;
    }
    function Pe(e, t) {
      var n = (function (e, t) {
        return null == e ? d : e[t];
      })(e, t);
      return Oe(n) ? n : d;
    }
    (Se.prototype.clear = function () {
      this.__data__ = ve ? ve(null) : {};
    }),
      (Se.prototype.delete = function (e) {
        return this.has(e) && delete this.__data__[e];
      }),
      (Se.prototype.get = function (e) {
        var t = this.__data__;
        if (ve) {
          var n = t[e];
          return n === r ? d : n;
        }
        return Z.call(t, e) ? t[e] : d;
      }),
      (Se.prototype.has = function (e) {
        var t = this.__data__;
        return ve ? t[e] !== d : Z.call(t, e);
      }),
      (Se.prototype.set = function (e, t) {
        return (this.__data__[e] = ve && t === d ? r : t), this;
      }),
      (je.prototype.clear = function () {
        this.__data__ = [];
      }),
      (je.prototype.delete = function (e) {
        var t = this.__data__,
          n = _e(t, e);
        return !(n < 0) && (n == t.length - 1 ? t.pop() : ue.call(t, n, 1), !0);
      }),
      (je.prototype.get = function (e) {
        var t = this.__data__,
          n = _e(t, e);
        return n < 0 ? d : t[n][1];
      }),
      (je.prototype.has = function (e) {
        return -1 < _e(this.__data__, e);
      }),
      (je.prototype.set = function (e, t) {
        var n = this.__data__,
          r = _e(n, e);
        return r < 0 ? n.push([e, t]) : (n[r][1] = t), this;
      }),
      (Ae.prototype.clear = function () {
        this.__data__ = {
          hash: new Se(),
          map: new (de || je)(),
          string: new Se(),
        };
      }),
      (Ae.prototype.delete = function (e) {
        return qe(this, e).delete(e);
      }),
      (Ae.prototype.get = function (e) {
        return qe(this, e).get(e);
      }),
      (Ae.prototype.has = function (e) {
        return qe(this, e).has(e);
      }),
      (Ae.prototype.set = function (e, t) {
        return qe(this, e).set(e, t), this;
      }),
      (Ee.prototype.clear = function () {
        this.__data__ = new je();
      }),
      (Ee.prototype.delete = function (e) {
        return this.__data__.delete(e);
      }),
      (Ee.prototype.get = function (e) {
        return this.__data__.get(e);
      }),
      (Ee.prototype.has = function (e) {
        return this.__data__.has(e);
      }),
      (Ee.prototype.set = function (e, t) {
        var n = this.__data__;
        if (n instanceof je) {
          var r = n.__data__;
          if (!de || r.length < 199) return r.push([e, t]), this;
          n = this.__data__ = new Ae(r);
        }
        return n.set(e, t), this;
      });
    var He = ce
        ? B(ce, Object)
        : function () {
            return [];
          },
      Ie = function (e) {
        return ee.call(e);
      };
    function Me(e, t) {
      return (
        !!(t = null == t ? n : t) &&
        ("number" == typeof e || a.test(e)) &&
        -1 < e &&
        e % 1 == 0 &&
        e < t
      );
    }
    function Re(e) {
      var t = e && e.constructor;
      return e === (("function" == typeof t && t.prototype) || G);
    }
    function ze(e) {
      if (null != e) {
        try {
          return Q.call(e);
        } catch (e) {}
        try {
          return e + "";
        } catch (e) {}
      }
      return "";
    }
    function We(e, t) {
      return e === t || (e != e && t != t);
    }
    ((fe && Ie(new fe(new ArrayBuffer(1))) != A) ||
      (de && Ie(new de()) != x) ||
      (he && Ie(he.resolve()) != o) ||
      (ge && Ie(new ge()) != C) ||
      (me && Ie(new me()) != i)) &&
      (Ie = function (e) {
        var t = ee.call(e),
          n = t == w ? e.constructor : d,
          r = n ? ze(n) : d;
        if (r)
          switch (r) {
            case ye:
              return A;
            case xe:
              return x;
            case be:
              return o;
            case we:
              return C;
            case ke:
              return i;
          }
        return t;
      }),
      (e.cloneDeep = function (e) {
        return $e(e, !0, !0);
      });
    var Be = Array.isArray;
    function Ue(e) {
      return (
        null != e &&
        (function (e) {
          return "number" == typeof e && -1 < e && e % 1 == 0 && e <= n;
        })(e.length) &&
        !Ve(e)
      );
    }
    var Xe =
      le ||
      function () {
        return !1;
      };
    function Ve(e) {
      var t = Je(e) ? ee.call(e) : "";
      return t == v || t == y;
    }
    function Je(e) {
      var t = typeof e;
      return !!e && ("object" == t || "function" == t);
    }
    function Ge(e) {
      return Ue(e)
        ? Ne(e)
        : (function (e) {
            if (!Re(e)) return pe(e);
            var t = [];
            for (var n in Object(e))
              Z.call(e, n) && "constructor" != n && t.push(n);
            return t;
          })(e);
    }
  })((window.lodash = window.lodash || {}));
