/*!For license information please see 3-ea108af327b950b61373.chunk.js.LICENSE.txt*/
(window.webpackJsonp = window.webpackJsonp || []).push([[3, 4, 64, 65], {
    42: function(e, t) {
        e.exports = function(e) {
            return e.webpackPolyfill || (e.deprecate = function() {}
            ,
            e.paths = [],
            e.children || (e.children = []),
            Object.defineProperty(e, "loaded", {
                enumerable: !0,
                get: function() {
                    return e.l
                }
            }),
            Object.defineProperty(e, "id", {
                enumerable: !0,
                get: function() {
                    return e.i
                }
            }),
            e.webpackPolyfill = 1),
            e
        }
    },
    5: function(e, t, n) {
        (function(e) {
            var n;
            function r(e) {
                return (r = "function" === typeof Symbol && "symbol" === typeof Symbol.iterator ? function(e) {
                    return typeof e
                }
                : function(e) {
                    return e && "function" === typeof Symbol && e.constructor === Symbol && e !== Symbol.prototype ? "symbol" : typeof e
                }
                )(e)
            }
            !function(t, n) {
                "use strict";
                "object" === r(e) && "object" === r(e.exports) ? e.exports = t.document ? n(t, !0) : function(e) {
                    if (!e.document)
                        throw new Error("jQuery requires a window with a document");
                    return n(e)
                }
                : n(t)
            }("undefined" !== typeof window ? window : this, (function(i, o) {
                "use strict";
                var a = []
                  , s = Object.getPrototypeOf
                  , u = a.slice
                  , l = a.flat ? function(e) {
                    return a.flat.call(e)
                }
                : function(e) {
                    return a.concat.apply([], e)
                }
                  , c = a.push
                  , f = a.indexOf
                  , p = {}
                  , d = p.toString
                  , h = p.hasOwnProperty
                  , g = h.toString
                  , v = g.call(Object)
                  , y = {}
                  , m = function(e) {
                    return "function" === typeof e && "number" !== typeof e.nodeType
                }
                  , x = function(e) {
                    return null != e && e === e.window
                }
                  , b = i.document
                  , w = {
                    type: !0,
                    src: !0,
                    nonce: !0,
                    noModule: !0
                };
                function T(e, t, n) {
                    var r, i, o = (n = n || b).createElement("script");
                    if (o.text = e,
                    t)
                        for (r in w)
                            (i = t[r] || t.getAttribute && t.getAttribute(r)) && o.setAttribute(r, i);
                    n.head.appendChild(o).parentNode.removeChild(o)
                }
                function C(e) {
                    return null == e ? e + "" : "object" === r(e) || "function" === typeof e ? p[d.call(e)] || "object" : r(e)
                }
                var S = function e(t, n) {
                    return new e.fn.init(t,n)
                };
                function E(e) {
                    var t = !!e && "length"in e && e.length
                      , n = C(e);
                    return !m(e) && !x(e) && ("array" === n || 0 === t || "number" === typeof t && t > 0 && t - 1 in e)
                }
                S.fn = S.prototype = {
                    jquery: "3.5.1",
                    constructor: S,
                    length: 0,
                    toArray: function() {
                        return u.call(this)
                    },
                    get: function(e) {
                        return null == e ? u.call(this) : e < 0 ? this[e + this.length] : this[e]
                    },
                    pushStack: function(e) {
                        var t = S.merge(this.constructor(), e);
                        return t.prevObject = this,
                        t
                    },
                    each: function(e) {
                        return S.each(this, e)
                    },
                    map: function(e) {
                        return this.pushStack(S.map(this, (function(t, n) {
                            return e.call(t, n, t)
                        }
                        )))
                    },
                    slice: function() {
                        return this.pushStack(u.apply(this, arguments))
                    },
                    first: function() {
                        return this.eq(0)
                    },
                    last: function() {
                        return this.eq(-1)
                    },
                    even: function() {
                        return this.pushStack(S.grep(this, (function(e, t) {
                            return (t + 1) % 2
                        }
                        )))
                    },
                    odd: function() {
                        return this.pushStack(S.grep(this, (function(e, t) {
                            return t % 2
                        }
                        )))
                    },
                    eq: function(e) {
                        var t = this.length
                          , n = +e + (e < 0 ? t : 0);
                        return this.pushStack(n >= 0 && n < t ? [this[n]] : [])
                    },
                    end: function() {
                        return this.prevObject || this.constructor()
                    },
                    push: c,
                    sort: a.sort,
                    splice: a.splice
                },
                S.extend = S.fn.extend = function() {
                    var e, t, n, i, o, a, s = arguments[0] || {}, u = 1, l = arguments.length, c = !1;
                    for ("boolean" === typeof s && (c = s,
                    s = arguments[u] || {},
                    u++),
                    "object" === r(s) || m(s) || (s = {}),
                    u === l && (s = this,
                    u--); u < l; u++)
                        if (null != (e = arguments[u]))
                            for (t in e)
                                i = e[t],
                                "__proto__" !== t && s !== i && (c && i && (S.isPlainObject(i) || (o = Array.isArray(i))) ? (n = s[t],
                                a = o && !Array.isArray(n) ? [] : o || S.isPlainObject(n) ? n : {},
                                o = !1,
                                s[t] = S.extend(c, a, i)) : void 0 !== i && (s[t] = i));
                    return s
                }
                ,
                S.extend({
                    expando: "jQuery" + ("3.5.1" + Math.random()).replace(/\D/g, ""),
                    isReady: !0,
                    error: function(e) {
                        throw new Error(e)
                    },
                    noop: function() {},
                    isPlainObject: function(e) {
                        var t, n;
                        return !(!e || "[object Object]" !== d.call(e)) && (!(t = s(e)) || "function" === typeof (n = h.call(t, "constructor") && t.constructor) && g.call(n) === v)
                    },
                    isEmptyObject: function(e) {
                        var t;
                        for (t in e)
                            return !1;
                        return !0
                    },
                    globalEval: function(e, t, n) {
                        T(e, {
                            nonce: t && t.nonce
                        }, n)
                    },
                    each: function(e, t) {
                        var n, r = 0;
                        if (E(e))
                            for (n = e.length; r < n && !1 !== t.call(e[r], r, e[r]); r++)
                                ;
                        else
                            for (r in e)
                                if (!1 === t.call(e[r], r, e[r]))
                                    break;
                        return e
                    },
                    makeArray: function(e, t) {
                        var n = t || [];
                        return null != e && (E(Object(e)) ? S.merge(n, "string" === typeof e ? [e] : e) : c.call(n, e)),
                        n
                    },
                    inArray: function(e, t, n) {
                        return null == t ? -1 : f.call(t, e, n)
                    },
                    merge: function(e, t) {
                        for (var n = +t.length, r = 0, i = e.length; r < n; r++)
                            e[i++] = t[r];
                        return e.length = i,
                        e
                    },
                    grep: function(e, t, n) {
                        for (var r = [], i = 0, o = e.length, a = !n; i < o; i++)
                            !t(e[i], i) !== a && r.push(e[i]);
                        return r
                    },
                    map: function(e, t, n) {
                        var r, i, o = 0, a = [];
                        if (E(e))
                            for (r = e.length; o < r; o++)
                                null != (i = t(e[o], o, n)) && a.push(i);
                        else
                            for (o in e)
                                null != (i = t(e[o], o, n)) && a.push(i);
                        return l(a)
                    },
                    guid: 1,
                    support: y
                }),
                "function" === typeof Symbol && (S.fn[Symbol.iterator] = a[Symbol.iterator]),
                S.each("Boolean Number String Function Array Date RegExp Object Error Symbol".split(" "), (function(e, t) {
                    p["[object " + t + "]"] = t.toLowerCase()
                }
                ));
                var k = function(e) {
                    var t, n, r, i, o, a, s, u, l, c, f, p, d, h, g, v, y, m, x, b = "sizzle" + 1 * new Date, w = e.document, T = 0, C = 0, S = ue(), E = ue(), k = ue(), A = ue(), N = function(e, t) {
                        return e === t && (f = !0),
                        0
                    }, D = {}.hasOwnProperty, j = [], q = j.pop, L = j.push, H = j.push, O = j.slice, P = function(e, t) {
                        for (var n = 0, r = e.length; n < r; n++)
                            if (e[n] === t)
                                return n;
                        return -1
                    }, R = "checked|selected|async|autofocus|autoplay|controls|defer|disabled|hidden|ismap|loop|multiple|open|readonly|required|scoped", M = "[\\x20\\t\\r\\n\\f]", I = "(?:\\\\[\\da-fA-F]{1,6}" + M + "?|\\\\[^\\r\\n\\f]|[\\w-]|[^\0-\\x7f])+", W = "\\[" + M + "*(" + I + ")(?:" + M + "*([*^$|!~]?=)" + M + "*(?:'((?:\\\\.|[^\\\\'])*)'|\"((?:\\\\.|[^\\\\\"])*)\"|(" + I + "))|)" + M + "*\\]", F = ":(" + I + ")(?:\\((('((?:\\\\.|[^\\\\'])*)'|\"((?:\\\\.|[^\\\\\"])*)\")|((?:\\\\.|[^\\\\()[\\]]|" + W + ")*)|.*)\\)|)", B = new RegExp(M + "+","g"), $ = new RegExp("^" + M + "+|((?:^|[^\\\\])(?:\\\\.)*)" + M + "+$","g"), _ = new RegExp("^" + M + "*," + M + "*"), z = new RegExp("^" + M + "*([>+~]|" + M + ")" + M + "*"), U = new RegExp(M + "|>"), X = new RegExp(F), V = new RegExp("^" + I + "$"), G = {
                        ID: new RegExp("^#(" + I + ")"),
                        CLASS: new RegExp("^\\.(" + I + ")"),
                        TAG: new RegExp("^(" + I + "|[*])"),
                        ATTR: new RegExp("^" + W),
                        PSEUDO: new RegExp("^" + F),
                        CHILD: new RegExp("^:(only|first|last|nth|nth-last)-(child|of-type)(?:\\(" + M + "*(even|odd|(([+-]|)(\\d*)n|)" + M + "*(?:([+-]|)" + M + "*(\\d+)|))" + M + "*\\)|)","i"),
                        bool: new RegExp("^(?:" + R + ")$","i"),
                        needsContext: new RegExp("^" + M + "*[>+~]|:(even|odd|eq|gt|lt|nth|first|last)(?:\\(" + M + "*((?:-\\d)?\\d*)" + M + "*\\)|)(?=[^-]|$)","i")
                    }, Y = /HTML$/i, J = /^(?:input|select|textarea|button)$/i, Q = /^h\d$/i, K = /^[^{]+\{\s*\[native \w/, Z = /^(?:#([\w-]+)|(\w+)|\.([\w-]+))$/, ee = /[+~]/, te = new RegExp("\\\\[\\da-fA-F]{1,6}" + M + "?|\\\\([^\\r\\n\\f])","g"), ne = function(e, t) {
                        var n = "0x" + e.slice(1) - 65536;
                        return t || (n < 0 ? String.fromCharCode(n + 65536) : String.fromCharCode(n >> 10 | 55296, 1023 & n | 56320))
                    }, re = /([\0-\x1f\x7f]|^-?\d)|^-$|[^\0-\x1f\x7f-\uFFFF\w-]/g, ie = function(e, t) {
                        return t ? "\0" === e ? "\ufffd" : e.slice(0, -1) + "\\" + e.charCodeAt(e.length - 1).toString(16) + " " : "\\" + e
                    }, oe = function() {
                        p()
                    }, ae = be((function(e) {
                        return !0 === e.disabled && "fieldset" === e.nodeName.toLowerCase()
                    }
                    ), {
                        dir: "parentNode",
                        next: "legend"
                    });
                    try {
                        H.apply(j = O.call(w.childNodes), w.childNodes),
                        j[w.childNodes.length].nodeType
                    } catch (Ee) {
                        H = {
                            apply: j.length ? function(e, t) {
                                L.apply(e, O.call(t))
                            }
                            : function(e, t) {
                                for (var n = e.length, r = 0; e[n++] = t[r++]; )
                                    ;
                                e.length = n - 1
                            }
                        }
                    }
                    function se(e, t, r, i) {
                        var o, s, l, c, f, h, y, m = t && t.ownerDocument, w = t ? t.nodeType : 9;
                        if (r = r || [],
                        "string" !== typeof e || !e || 1 !== w && 9 !== w && 11 !== w)
                            return r;
                        if (!i && (p(t),
                        t = t || d,
                        g)) {
                            if (11 !== w && (f = Z.exec(e)))
                                if (o = f[1]) {
                                    if (9 === w) {
                                        if (!(l = t.getElementById(o)))
                                            return r;
                                        if (l.id === o)
                                            return r.push(l),
                                            r
                                    } else if (m && (l = m.getElementById(o)) && x(t, l) && l.id === o)
                                        return r.push(l),
                                        r
                                } else {
                                    if (f[2])
                                        return H.apply(r, t.getElementsByTagName(e)),
                                        r;
                                    if ((o = f[3]) && n.getElementsByClassName && t.getElementsByClassName)
                                        return H.apply(r, t.getElementsByClassName(o)),
                                        r
                                }
                            if (n.qsa && !A[e + " "] && (!v || !v.test(e)) && (1 !== w || "object" !== t.nodeName.toLowerCase())) {
                                if (y = e,
                                m = t,
                                1 === w && (U.test(e) || z.test(e))) {
                                    for ((m = ee.test(e) && ye(t.parentNode) || t) === t && n.scope || ((c = t.getAttribute("id")) ? c = c.replace(re, ie) : t.setAttribute("id", c = b)),
                                    s = (h = a(e)).length; s--; )
                                        h[s] = (c ? "#" + c : ":scope") + " " + xe(h[s]);
                                    y = h.join(",")
                                }
                                try {
                                    return H.apply(r, m.querySelectorAll(y)),
                                    r
                                } catch (T) {
                                    A(e, !0)
                                } finally {
                                    c === b && t.removeAttribute("id")
                                }
                            }
                        }
                        return u(e.replace($, "$1"), t, r, i)
                    }
                    function ue() {
                        var e = [];
                        return function t(n, i) {
                            return e.push(n + " ") > r.cacheLength && delete t[e.shift()],
                            t[n + " "] = i
                        }
                    }
                    function le(e) {
                        return e[b] = !0,
                        e
                    }
                    function ce(e) {
                        var t = d.createElement("fieldset");
                        try {
                            return !!e(t)
                        } catch (Ee) {
                            return !1
                        } finally {
                            t.parentNode && t.parentNode.removeChild(t),
                            t = null
                        }
                    }
                    function fe(e, t) {
                        for (var n = e.split("|"), i = n.length; i--; )
                            r.attrHandle[n[i]] = t
                    }
                    function pe(e, t) {
                        var n = t && e
                          , r = n && 1 === e.nodeType && 1 === t.nodeType && e.sourceIndex - t.sourceIndex;
                        if (r)
                            return r;
                        if (n)
                            for (; n = n.nextSibling; )
                                if (n === t)
                                    return -1;
                        return e ? 1 : -1
                    }
                    function de(e) {
                        return function(t) {
                            return "input" === t.nodeName.toLowerCase() && t.type === e
                        }
                    }
                    function he(e) {
                        return function(t) {
                            var n = t.nodeName.toLowerCase();
                            return ("input" === n || "button" === n) && t.type === e
                        }
                    }
                    function ge(e) {
                        return function(t) {
                            return "form"in t ? t.parentNode && !1 === t.disabled ? "label"in t ? "label"in t.parentNode ? t.parentNode.disabled === e : t.disabled === e : t.isDisabled === e || t.isDisabled !== !e && ae(t) === e : t.disabled === e : "label"in t && t.disabled === e
                        }
                    }
                    function ve(e) {
                        return le((function(t) {
                            return t = +t,
                            le((function(n, r) {
                                for (var i, o = e([], n.length, t), a = o.length; a--; )
                                    n[i = o[a]] && (n[i] = !(r[i] = n[i]))
                            }
                            ))
                        }
                        ))
                    }
                    function ye(e) {
                        return e && "undefined" !== typeof e.getElementsByTagName && e
                    }
                    for (t in n = se.support = {},
                    o = se.isXML = function(e) {
                        var t = e.namespaceURI
                          , n = (e.ownerDocument || e).documentElement;
                        return !Y.test(t || n && n.nodeName || "HTML")
                    }
                    ,
                    p = se.setDocument = function(e) {
                        var t, i, a = e ? e.ownerDocument || e : w;
                        return a != d && 9 === a.nodeType && a.documentElement ? (h = (d = a).documentElement,
                        g = !o(d),
                        w != d && (i = d.defaultView) && i.top !== i && (i.addEventListener ? i.addEventListener("unload", oe, !1) : i.attachEvent && i.attachEvent("onunload", oe)),
                        n.scope = ce((function(e) {
                            return h.appendChild(e).appendChild(d.createElement("div")),
                            "undefined" !== typeof e.querySelectorAll && !e.querySelectorAll(":scope fieldset div").length
                        }
                        )),
                        n.attributes = ce((function(e) {
                            return e.className = "i",
                            !e.getAttribute("className")
                        }
                        )),
                        n.getElementsByTagName = ce((function(e) {
                            return e.appendChild(d.createComment("")),
                            !e.getElementsByTagName("*").length
                        }
                        )),
                        n.getElementsByClassName = K.test(d.getElementsByClassName),
                        n.getById = ce((function(e) {
                            return h.appendChild(e).id = b,
                            !d.getElementsByName || !d.getElementsByName(b).length
                        }
                        )),
                        n.getById ? (r.filter.ID = function(e) {
                            var t = e.replace(te, ne);
                            return function(e) {
                                return e.getAttribute("id") === t
                            }
                        }
                        ,
                        r.find.ID = function(e, t) {
                            if ("undefined" !== typeof t.getElementById && g) {
                                var n = t.getElementById(e);
                                return n ? [n] : []
                            }
                        }
                        ) : (r.filter.ID = function(e) {
                            var t = e.replace(te, ne);
                            return function(e) {
                                var n = "undefined" !== typeof e.getAttributeNode && e.getAttributeNode("id");
                                return n && n.value === t
                            }
                        }
                        ,
                        r.find.ID = function(e, t) {
                            if ("undefined" !== typeof t.getElementById && g) {
                                var n, r, i, o = t.getElementById(e);
                                if (o) {
                                    if ((n = o.getAttributeNode("id")) && n.value === e)
                                        return [o];
                                    for (i = t.getElementsByName(e),
                                    r = 0; o = i[r++]; )
                                        if ((n = o.getAttributeNode("id")) && n.value === e)
                                            return [o]
                                }
                                return []
                            }
                        }
                        ),
                        r.find.TAG = n.getElementsByTagName ? function(e, t) {
                            return "undefined" !== typeof t.getElementsByTagName ? t.getElementsByTagName(e) : n.qsa ? t.querySelectorAll(e) : void 0
                        }
                        : function(e, t) {
                            var n, r = [], i = 0, o = t.getElementsByTagName(e);
                            if ("*" === e) {
                                for (; n = o[i++]; )
                                    1 === n.nodeType && r.push(n);
                                return r
                            }
                            return o
                        }
                        ,
                        r.find.CLASS = n.getElementsByClassName && function(e, t) {
                            if ("undefined" !== typeof t.getElementsByClassName && g)
                                return t.getElementsByClassName(e)
                        }
                        ,
                        y = [],
                        v = [],
                        (n.qsa = K.test(d.querySelectorAll)) && (ce((function(e) {
                            var t;
                            h.appendChild(e).innerHTML = "<a id='" + b + "'></a><select id='" + b + "-\r\\' msallowcapture=''><option selected=''></option></select>",
                            e.querySelectorAll("[msallowcapture^='']").length && v.push("[*^$]=" + M + "*(?:''|\"\")"),
                            e.querySelectorAll("[selected]").length || v.push("\\[" + M + "*(?:value|" + R + ")"),
                            e.querySelectorAll("[id~=" + b + "-]").length || v.push("~="),
                            (t = d.createElement("input")).setAttribute("name", ""),
                            e.appendChild(t),
                            e.querySelectorAll("[name='']").length || v.push("\\[" + M + "*name" + M + "*=" + M + "*(?:''|\"\")"),
                            e.querySelectorAll(":checked").length || v.push(":checked"),
                            e.querySelectorAll("a#" + b + "+*").length || v.push(".#.+[+~]"),
                            e.querySelectorAll("\\\f"),
                            v.push("[\\r\\n\\f]")
                        }
                        )),
                        ce((function(e) {
                            e.innerHTML = "<a href='' disabled='disabled'></a><select disabled='disabled'><option/></select>";
                            var t = d.createElement("input");
                            t.setAttribute("type", "hidden"),
                            e.appendChild(t).setAttribute("name", "D"),
                            e.querySelectorAll("[name=d]").length && v.push("name" + M + "*[*^$|!~]?="),
                            2 !== e.querySelectorAll(":enabled").length && v.push(":enabled", ":disabled"),
                            h.appendChild(e).disabled = !0,
                            2 !== e.querySelectorAll(":disabled").length && v.push(":enabled", ":disabled"),
                            e.querySelectorAll("*,:x"),
                            v.push(",.*:")
                        }
                        ))),
                        (n.matchesSelector = K.test(m = h.matches || h.webkitMatchesSelector || h.mozMatchesSelector || h.oMatchesSelector || h.msMatchesSelector)) && ce((function(e) {
                            n.disconnectedMatch = m.call(e, "*"),
                            m.call(e, "[s!='']:x"),
                            y.push("!=", F)
                        }
                        )),
                        v = v.length && new RegExp(v.join("|")),
                        y = y.length && new RegExp(y.join("|")),
                        t = K.test(h.compareDocumentPosition),
                        x = t || K.test(h.contains) ? function(e, t) {
                            var n = 9 === e.nodeType ? e.documentElement : e
                              , r = t && t.parentNode;
                            return e === r || !(!r || 1 !== r.nodeType || !(n.contains ? n.contains(r) : e.compareDocumentPosition && 16 & e.compareDocumentPosition(r)))
                        }
                        : function(e, t) {
                            if (t)
                                for (; t = t.parentNode; )
                                    if (t === e)
                                        return !0;
                            return !1
                        }
                        ,
                        N = t ? function(e, t) {
                            if (e === t)
                                return f = !0,
                                0;
                            var r = !e.compareDocumentPosition - !t.compareDocumentPosition;
                            return r || (1 & (r = (e.ownerDocument || e) == (t.ownerDocument || t) ? e.compareDocumentPosition(t) : 1) || !n.sortDetached && t.compareDocumentPosition(e) === r ? e == d || e.ownerDocument == w && x(w, e) ? -1 : t == d || t.ownerDocument == w && x(w, t) ? 1 : c ? P(c, e) - P(c, t) : 0 : 4 & r ? -1 : 1)
                        }
                        : function(e, t) {
                            if (e === t)
                                return f = !0,
                                0;
                            var n, r = 0, i = e.parentNode, o = t.parentNode, a = [e], s = [t];
                            if (!i || !o)
                                return e == d ? -1 : t == d ? 1 : i ? -1 : o ? 1 : c ? P(c, e) - P(c, t) : 0;
                            if (i === o)
                                return pe(e, t);
                            for (n = e; n = n.parentNode; )
                                a.unshift(n);
                            for (n = t; n = n.parentNode; )
                                s.unshift(n);
                            for (; a[r] === s[r]; )
                                r++;
                            return r ? pe(a[r], s[r]) : a[r] == w ? -1 : s[r] == w ? 1 : 0
                        }
                        ,
                        d) : d
                    }
                    ,
                    se.matches = function(e, t) {
                        return se(e, null, null, t)
                    }
                    ,
                    se.matchesSelector = function(e, t) {
                        if (p(e),
                        n.matchesSelector && g && !A[t + " "] && (!y || !y.test(t)) && (!v || !v.test(t)))
                            try {
                                var r = m.call(e, t);
                                if (r || n.disconnectedMatch || e.document && 11 !== e.document.nodeType)
                                    return r
                            } catch (Ee) {
                                A(t, !0)
                            }
                        return se(t, d, null, [e]).length > 0
                    }
                    ,
                    se.contains = function(e, t) {
                        return (e.ownerDocument || e) != d && p(e),
                        x(e, t)
                    }
                    ,
                    se.attr = function(e, t) {
                        (e.ownerDocument || e) != d && p(e);
                        var i = r.attrHandle[t.toLowerCase()]
                          , o = i && D.call(r.attrHandle, t.toLowerCase()) ? i(e, t, !g) : void 0;
                        return void 0 !== o ? o : n.attributes || !g ? e.getAttribute(t) : (o = e.getAttributeNode(t)) && o.specified ? o.value : null
                    }
                    ,
                    se.escape = function(e) {
                        return (e + "").replace(re, ie)
                    }
                    ,
                    se.error = function(e) {
                        throw new Error("Syntax error, unrecognized expression: " + e)
                    }
                    ,
                    se.uniqueSort = function(e) {
                        var t, r = [], i = 0, o = 0;
                        if (f = !n.detectDuplicates,
                        c = !n.sortStable && e.slice(0),
                        e.sort(N),
                        f) {
                            for (; t = e[o++]; )
                                t === e[o] && (i = r.push(o));
                            for (; i--; )
                                e.splice(r[i], 1)
                        }
                        return c = null,
                        e
                    }
                    ,
                    i = se.getText = function(e) {
                        var t, n = "", r = 0, o = e.nodeType;
                        if (o) {
                            if (1 === o || 9 === o || 11 === o) {
                                if ("string" === typeof e.textContent)
                                    return e.textContent;
                                for (e = e.firstChild; e; e = e.nextSibling)
                                    n += i(e)
                            } else if (3 === o || 4 === o)
                                return e.nodeValue
                        } else
                            for (; t = e[r++]; )
                                n += i(t);
                        return n
                    }
                    ,
                    (r = se.selectors = {
                        cacheLength: 50,
                        createPseudo: le,
                        match: G,
                        attrHandle: {},
                        find: {},
                        relative: {
                            ">": {
                                dir: "parentNode",
                                first: !0
                            },
                            " ": {
                                dir: "parentNode"
                            },
                            "+": {
                                dir: "previousSibling",
                                first: !0
                            },
                            "~": {
                                dir: "previousSibling"
                            }
                        },
                        preFilter: {
                            ATTR: function(e) {
                                return e[1] = e[1].replace(te, ne),
                                e[3] = (e[3] || e[4] || e[5] || "").replace(te, ne),
                                "~=" === e[2] && (e[3] = " " + e[3] + " "),
                                e.slice(0, 4)
                            },
                            CHILD: function(e) {
                                return e[1] = e[1].toLowerCase(),
                                "nth" === e[1].slice(0, 3) ? (e[3] || se.error(e[0]),
                                e[4] = +(e[4] ? e[5] + (e[6] || 1) : 2 * ("even" === e[3] || "odd" === e[3])),
                                e[5] = +(e[7] + e[8] || "odd" === e[3])) : e[3] && se.error(e[0]),
                                e
                            },
                            PSEUDO: function(e) {
                                var t, n = !e[6] && e[2];
                                return G.CHILD.test(e[0]) ? null : (e[3] ? e[2] = e[4] || e[5] || "" : n && X.test(n) && (t = a(n, !0)) && (t = n.indexOf(")", n.length - t) - n.length) && (e[0] = e[0].slice(0, t),
                                e[2] = n.slice(0, t)),
                                e.slice(0, 3))
                            }
                        },
                        filter: {
                            TAG: function(e) {
                                var t = e.replace(te, ne).toLowerCase();
                                return "*" === e ? function() {
                                    return !0
                                }
                                : function(e) {
                                    return e.nodeName && e.nodeName.toLowerCase() === t
                                }
                            },
                            CLASS: function(e) {
                                var t = S[e + " "];
                                return t || (t = new RegExp("(^|" + M + ")" + e + "(" + M + "|$)")) && S(e, (function(e) {
                                    return t.test("string" === typeof e.className && e.className || "undefined" !== typeof e.getAttribute && e.getAttribute("class") || "")
                                }
                                ))
                            },
                            ATTR: function(e, t, n) {
                                return function(r) {
                                    var i = se.attr(r, e);
                                    return null == i ? "!=" === t : !t || (i += "",
                                    "=" === t ? i === n : "!=" === t ? i !== n : "^=" === t ? n && 0 === i.indexOf(n) : "*=" === t ? n && i.indexOf(n) > -1 : "$=" === t ? n && i.slice(-n.length) === n : "~=" === t ? (" " + i.replace(B, " ") + " ").indexOf(n) > -1 : "|=" === t && (i === n || i.slice(0, n.length + 1) === n + "-"))
                                }
                            },
                            CHILD: function(e, t, n, r, i) {
                                var o = "nth" !== e.slice(0, 3)
                                  , a = "last" !== e.slice(-4)
                                  , s = "of-type" === t;
                                return 1 === r && 0 === i ? function(e) {
                                    return !!e.parentNode
                                }
                                : function(t, n, u) {
                                    var l, c, f, p, d, h, g = o !== a ? "nextSibling" : "previousSibling", v = t.parentNode, y = s && t.nodeName.toLowerCase(), m = !u && !s, x = !1;
                                    if (v) {
                                        if (o) {
                                            for (; g; ) {
                                                for (p = t; p = p[g]; )
                                                    if (s ? p.nodeName.toLowerCase() === y : 1 === p.nodeType)
                                                        return !1;
                                                h = g = "only" === e && !h && "nextSibling"
                                            }
                                            return !0
                                        }
                                        if (h = [a ? v.firstChild : v.lastChild],
                                        a && m) {
                                            for (x = (d = (l = (c = (f = (p = v)[b] || (p[b] = {}))[p.uniqueID] || (f[p.uniqueID] = {}))[e] || [])[0] === T && l[1]) && l[2],
                                            p = d && v.childNodes[d]; p = ++d && p && p[g] || (x = d = 0) || h.pop(); )
                                                if (1 === p.nodeType && ++x && p === t) {
                                                    c[e] = [T, d, x];
                                                    break
                                                }
                                        } else if (m && (x = d = (l = (c = (f = (p = t)[b] || (p[b] = {}))[p.uniqueID] || (f[p.uniqueID] = {}))[e] || [])[0] === T && l[1]),
                                        !1 === x)
                                            for (; (p = ++d && p && p[g] || (x = d = 0) || h.pop()) && ((s ? p.nodeName.toLowerCase() !== y : 1 !== p.nodeType) || !++x || (m && ((c = (f = p[b] || (p[b] = {}))[p.uniqueID] || (f[p.uniqueID] = {}))[e] = [T, x]),
                                            p !== t)); )
                                                ;
                                        return (x -= i) === r || x % r === 0 && x / r >= 0
                                    }
                                }
                            },
                            PSEUDO: function(e, t) {
                                var n, i = r.pseudos[e] || r.setFilters[e.toLowerCase()] || se.error("unsupported pseudo: " + e);
                                return i[b] ? i(t) : i.length > 1 ? (n = [e, e, "", t],
                                r.setFilters.hasOwnProperty(e.toLowerCase()) ? le((function(e, n) {
                                    for (var r, o = i(e, t), a = o.length; a--; )
                                        e[r = P(e, o[a])] = !(n[r] = o[a])
                                }
                                )) : function(e) {
                                    return i(e, 0, n)
                                }
                                ) : i
                            }
                        },
                        pseudos: {
                            not: le((function(e) {
                                var t = []
                                  , n = []
                                  , r = s(e.replace($, "$1"));
                                return r[b] ? le((function(e, t, n, i) {
                                    for (var o, a = r(e, null, i, []), s = e.length; s--; )
                                        (o = a[s]) && (e[s] = !(t[s] = o))
                                }
                                )) : function(e, i, o) {
                                    return t[0] = e,
                                    r(t, null, o, n),
                                    t[0] = null,
                                    !n.pop()
                                }
                            }
                            )),
                            has: le((function(e) {
                                return function(t) {
                                    return se(e, t).length > 0
                                }
                            }
                            )),
                            contains: le((function(e) {
                                return e = e.replace(te, ne),
                                function(t) {
                                    return (t.textContent || i(t)).indexOf(e) > -1
                                }
                            }
                            )),
                            lang: le((function(e) {
                                return V.test(e || "") || se.error("unsupported lang: " + e),
                                e = e.replace(te, ne).toLowerCase(),
                                function(t) {
                                    var n;
                                    do {
                                        if (n = g ? t.lang : t.getAttribute("xml:lang") || t.getAttribute("lang"))
                                            return (n = n.toLowerCase()) === e || 0 === n.indexOf(e + "-")
                                    } while ((t = t.parentNode) && 1 === t.nodeType);
                                    return !1
                                }
                            }
                            )),
                            target: function(t) {
                                var n = e.location && e.location.hash;
                                return n && n.slice(1) === t.id
                            },
                            root: function(e) {
                                return e === h
                            },
                            focus: function(e) {
                                return e === d.activeElement && (!d.hasFocus || d.hasFocus()) && !!(e.type || e.href || ~e.tabIndex)
                            },
                            enabled: ge(!1),
                            disabled: ge(!0),
                            checked: function(e) {
                                var t = e.nodeName.toLowerCase();
                                return "input" === t && !!e.checked || "option" === t && !!e.selected
                            },
                            selected: function(e) {
                                return e.parentNode && e.parentNode.selectedIndex,
                                !0 === e.selected
                            },
                            empty: function(e) {
                                for (e = e.firstChild; e; e = e.nextSibling)
                                    if (e.nodeType < 6)
                                        return !1;
                                return !0
                            },
                            parent: function(e) {
                                return !r.pseudos.empty(e)
                            },
                            header: function(e) {
                                return Q.test(e.nodeName)
                            },
                            input: function(e) {
                                return J.test(e.nodeName)
                            },
                            button: function(e) {
                                var t = e.nodeName.toLowerCase();
                                return "input" === t && "button" === e.type || "button" === t
                            },
                            text: function(e) {
                                var t;
                                return "input" === e.nodeName.toLowerCase() && "text" === e.type && (null == (t = e.getAttribute("type")) || "text" === t.toLowerCase())
                            },
                            first: ve((function() {
                                return [0]
                            }
                            )),
                            last: ve((function(e, t) {
                                return [t - 1]
                            }
                            )),
                            eq: ve((function(e, t, n) {
                                return [n < 0 ? n + t : n]
                            }
                            )),
                            even: ve((function(e, t) {
                                for (var n = 0; n < t; n += 2)
                                    e.push(n);
                                return e
                            }
                            )),
                            odd: ve((function(e, t) {
                                for (var n = 1; n < t; n += 2)
                                    e.push(n);
                                return e
                            }
                            )),
                            lt: ve((function(e, t, n) {
                                for (var r = n < 0 ? n + t : n > t ? t : n; --r >= 0; )
                                    e.push(r);
                                return e
                            }
                            )),
                            gt: ve((function(e, t, n) {
                                for (var r = n < 0 ? n + t : n; ++r < t; )
                                    e.push(r);
                                return e
                            }
                            ))
                        }
                    }).pseudos.nth = r.pseudos.eq,
                    {
                        radio: !0,
                        checkbox: !0,
                        file: !0,
                        password: !0,
                        image: !0
                    })
                        r.pseudos[t] = de(t);
                    for (t in {
                        submit: !0,
                        reset: !0
                    })
                        r.pseudos[t] = he(t);
                    function me() {}
                    function xe(e) {
                        for (var t = 0, n = e.length, r = ""; t < n; t++)
                            r += e[t].value;
                        return r
                    }
                    function be(e, t, n) {
                        var r = t.dir
                          , i = t.next
                          , o = i || r
                          , a = n && "parentNode" === o
                          , s = C++;
                        return t.first ? function(t, n, i) {
                            for (; t = t[r]; )
                                if (1 === t.nodeType || a)
                                    return e(t, n, i);
                            return !1
                        }
                        : function(t, n, u) {
                            var l, c, f, p = [T, s];
                            if (u) {
                                for (; t = t[r]; )
                                    if ((1 === t.nodeType || a) && e(t, n, u))
                                        return !0
                            } else
                                for (; t = t[r]; )
                                    if (1 === t.nodeType || a)
                                        if (c = (f = t[b] || (t[b] = {}))[t.uniqueID] || (f[t.uniqueID] = {}),
                                        i && i === t.nodeName.toLowerCase())
                                            t = t[r] || t;
                                        else {
                                            if ((l = c[o]) && l[0] === T && l[1] === s)
                                                return p[2] = l[2];
                                            if (c[o] = p,
                                            p[2] = e(t, n, u))
                                                return !0
                                        }
                            return !1
                        }
                    }
                    function we(e) {
                        return e.length > 1 ? function(t, n, r) {
                            for (var i = e.length; i--; )
                                if (!e[i](t, n, r))
                                    return !1;
                            return !0
                        }
                        : e[0]
                    }
                    function Te(e, t, n, r, i) {
                        for (var o, a = [], s = 0, u = e.length, l = null != t; s < u; s++)
                            (o = e[s]) && (n && !n(o, r, i) || (a.push(o),
                            l && t.push(s)));
                        return a
                    }
                    function Ce(e, t, n, r, i, o) {
                        return r && !r[b] && (r = Ce(r)),
                        i && !i[b] && (i = Ce(i, o)),
                        le((function(o, a, s, u) {
                            var l, c, f, p = [], d = [], h = a.length, g = o || function(e, t, n) {
                                for (var r = 0, i = t.length; r < i; r++)
                                    se(e, t[r], n);
                                return n
                            }(t || "*", s.nodeType ? [s] : s, []), v = !e || !o && t ? g : Te(g, p, e, s, u), y = n ? i || (o ? e : h || r) ? [] : a : v;
                            if (n && n(v, y, s, u),
                            r)
                                for (l = Te(y, d),
                                r(l, [], s, u),
                                c = l.length; c--; )
                                    (f = l[c]) && (y[d[c]] = !(v[d[c]] = f));
                            if (o) {
                                if (i || e) {
                                    if (i) {
                                        for (l = [],
                                        c = y.length; c--; )
                                            (f = y[c]) && l.push(v[c] = f);
                                        i(null, y = [], l, u)
                                    }
                                    for (c = y.length; c--; )
                                        (f = y[c]) && (l = i ? P(o, f) : p[c]) > -1 && (o[l] = !(a[l] = f))
                                }
                            } else
                                y = Te(y === a ? y.splice(h, y.length) : y),
                                i ? i(null, a, y, u) : H.apply(a, y)
                        }
                        ))
                    }
                    function Se(e) {
                        for (var t, n, i, o = e.length, a = r.relative[e[0].type], s = a || r.relative[" "], u = a ? 1 : 0, c = be((function(e) {
                            return e === t
                        }
                        ), s, !0), f = be((function(e) {
                            return P(t, e) > -1
                        }
                        ), s, !0), p = [function(e, n, r) {
                            var i = !a && (r || n !== l) || ((t = n).nodeType ? c(e, n, r) : f(e, n, r));
                            return t = null,
                            i
                        }
                        ]; u < o; u++)
                            if (n = r.relative[e[u].type])
                                p = [be(we(p), n)];
                            else {
                                if ((n = r.filter[e[u].type].apply(null, e[u].matches))[b]) {
                                    for (i = ++u; i < o && !r.relative[e[i].type]; i++)
                                        ;
                                    return Ce(u > 1 && we(p), u > 1 && xe(e.slice(0, u - 1).concat({
                                        value: " " === e[u - 2].type ? "*" : ""
                                    })).replace($, "$1"), n, u < i && Se(e.slice(u, i)), i < o && Se(e = e.slice(i)), i < o && xe(e))
                                }
                                p.push(n)
                            }
                        return we(p)
                    }
                    return me.prototype = r.filters = r.pseudos,
                    r.setFilters = new me,
                    a = se.tokenize = function(e, t) {
                        var n, i, o, a, s, u, l, c = E[e + " "];
                        if (c)
                            return t ? 0 : c.slice(0);
                        for (s = e,
                        u = [],
                        l = r.preFilter; s; ) {
                            for (a in n && !(i = _.exec(s)) || (i && (s = s.slice(i[0].length) || s),
                            u.push(o = [])),
                            n = !1,
                            (i = z.exec(s)) && (n = i.shift(),
                            o.push({
                                value: n,
                                type: i[0].replace($, " ")
                            }),
                            s = s.slice(n.length)),
                            r.filter)
                                !(i = G[a].exec(s)) || l[a] && !(i = l[a](i)) || (n = i.shift(),
                                o.push({
                                    value: n,
                                    type: a,
                                    matches: i
                                }),
                                s = s.slice(n.length));
                            if (!n)
                                break
                        }
                        return t ? s.length : s ? se.error(e) : E(e, u).slice(0)
                    }
                    ,
                    s = se.compile = function(e, t) {
                        var n, i = [], o = [], s = k[e + " "];
                        if (!s) {
                            for (t || (t = a(e)),
                            n = t.length; n--; )
                                (s = Se(t[n]))[b] ? i.push(s) : o.push(s);
                            (s = k(e, function(e, t) {
                                var n = t.length > 0
                                  , i = e.length > 0
                                  , o = function(o, a, s, u, c) {
                                    var f, h, v, y = 0, m = "0", x = o && [], b = [], w = l, C = o || i && r.find.TAG("*", c), S = T += null == w ? 1 : Math.random() || .1, E = C.length;
                                    for (c && (l = a == d || a || c); m !== E && null != (f = C[m]); m++) {
                                        if (i && f) {
                                            for (h = 0,
                                            a || f.ownerDocument == d || (p(f),
                                            s = !g); v = e[h++]; )
                                                if (v(f, a || d, s)) {
                                                    u.push(f);
                                                    break
                                                }
                                            c && (T = S)
                                        }
                                        n && ((f = !v && f) && y--,
                                        o && x.push(f))
                                    }
                                    if (y += m,
                                    n && m !== y) {
                                        for (h = 0; v = t[h++]; )
                                            v(x, b, a, s);
                                        if (o) {
                                            if (y > 0)
                                                for (; m--; )
                                                    x[m] || b[m] || (b[m] = q.call(u));
                                            b = Te(b)
                                        }
                                        H.apply(u, b),
                                        c && !o && b.length > 0 && y + t.length > 1 && se.uniqueSort(u)
                                    }
                                    return c && (T = S,
                                    l = w),
                                    x
                                };
                                return n ? le(o) : o
                            }(o, i))).selector = e
                        }
                        return s
                    }
                    ,
                    u = se.select = function(e, t, n, i) {
                        var o, u, l, c, f, p = "function" === typeof e && e, d = !i && a(e = p.selector || e);
                        if (n = n || [],
                        1 === d.length) {
                            if ((u = d[0] = d[0].slice(0)).length > 2 && "ID" === (l = u[0]).type && 9 === t.nodeType && g && r.relative[u[1].type]) {
                                if (!(t = (r.find.ID(l.matches[0].replace(te, ne), t) || [])[0]))
                                    return n;
                                p && (t = t.parentNode),
                                e = e.slice(u.shift().value.length)
                            }
                            for (o = G.needsContext.test(e) ? 0 : u.length; o-- && (l = u[o],
                            !r.relative[c = l.type]); )
                                if ((f = r.find[c]) && (i = f(l.matches[0].replace(te, ne), ee.test(u[0].type) && ye(t.parentNode) || t))) {
                                    if (u.splice(o, 1),
                                    !(e = i.length && xe(u)))
                                        return H.apply(n, i),
                                        n;
                                    break
                                }
                        }
                        return (p || s(e, d))(i, t, !g, n, !t || ee.test(e) && ye(t.parentNode) || t),
                        n
                    }
                    ,
                    n.sortStable = b.split("").sort(N).join("") === b,
                    n.detectDuplicates = !!f,
                    p(),
                    n.sortDetached = ce((function(e) {
                        return 1 & e.compareDocumentPosition(d.createElement("fieldset"))
                    }
                    )),
                    ce((function(e) {
                        return e.innerHTML = "<a href='#'></a>",
                        "#" === e.firstChild.getAttribute("href")
                    }
                    )) || fe("type|href|height|width", (function(e, t, n) {
                        if (!n)
                            return e.getAttribute(t, "type" === t.toLowerCase() ? 1 : 2)
                    }
                    )),
                    n.attributes && ce((function(e) {
                        return e.innerHTML = "<input/>",
                        e.firstChild.setAttribute("value", ""),
                        "" === e.firstChild.getAttribute("value")
                    }
                    )) || fe("value", (function(e, t, n) {
                        if (!n && "input" === e.nodeName.toLowerCase())
                            return e.defaultValue
                    }
                    )),
                    ce((function(e) {
                        return null == e.getAttribute("disabled")
                    }
                    )) || fe(R, (function(e, t, n) {
                        var r;
                        if (!n)
                            return !0 === e[t] ? t.toLowerCase() : (r = e.getAttributeNode(t)) && r.specified ? r.value : null
                    }
                    )),
                    se
                }(i);
                S.find = k,
                (S.expr = k.selectors)[":"] = S.expr.pseudos,
                S.uniqueSort = S.unique = k.uniqueSort,
                S.text = k.getText,
                S.isXMLDoc = k.isXML,
                S.contains = k.contains,
                S.escapeSelector = k.escape;
                var A = function(e, t, n) {
                    for (var r = [], i = void 0 !== n; (e = e[t]) && 9 !== e.nodeType; )
                        if (1 === e.nodeType) {
                            if (i && S(e).is(n))
                                break;
                            r.push(e)
                        }
                    return r
                }
                  , N = function(e, t) {
                    for (var n = []; e; e = e.nextSibling)
                        1 === e.nodeType && e !== t && n.push(e);
                    return n
                }
                  , D = S.expr.match.needsContext;
                function j(e, t) {
                    return e.nodeName && e.nodeName.toLowerCase() === t.toLowerCase()
                }
                var q = /^<([a-z][^\/\0>:\x20\t\r\n\f]*)[\x20\t\r\n\f]*\/?>(?:<\/\1>|)$/i;
                function L(e, t, n) {
                    return m(t) ? S.grep(e, (function(e, r) {
                        return !!t.call(e, r, e) !== n
                    }
                    )) : t.nodeType ? S.grep(e, (function(e) {
                        return e === t !== n
                    }
                    )) : "string" !== typeof t ? S.grep(e, (function(e) {
                        return f.call(t, e) > -1 !== n
                    }
                    )) : S.filter(t, e, n)
                }
                S.filter = function(e, t, n) {
                    var r = t[0];
                    return n && (e = ":not(" + e + ")"),
                    1 === t.length && 1 === r.nodeType ? S.find.matchesSelector(r, e) ? [r] : [] : S.find.matches(e, S.grep(t, (function(e) {
                        return 1 === e.nodeType
                    }
                    )))
                }
                ,
                S.fn.extend({
                    find: function(e) {
                        var t, n, r = this.length, i = this;
                        if ("string" !== typeof e)
                            return this.pushStack(S(e).filter((function() {
                                for (t = 0; t < r; t++)
                                    if (S.contains(i[t], this))
                                        return !0
                            }
                            )));
                        for (n = this.pushStack([]),
                        t = 0; t < r; t++)
                            S.find(e, i[t], n);
                        return r > 1 ? S.uniqueSort(n) : n
                    },
                    filter: function(e) {
                        return this.pushStack(L(this, e || [], !1))
                    },
                    not: function(e) {
                        return this.pushStack(L(this, e || [], !0))
                    },
                    is: function(e) {
                        return !!L(this, "string" === typeof e && D.test(e) ? S(e) : e || [], !1).length
                    }
                });
                var H, O = /^(?:\s*(<[\w\W]+>)[^>]*|#([\w-]+))$/;
                (S.fn.init = function(e, t, n) {
                    var r, i;
                    if (!e)
                        return this;
                    if (n = n || H,
                    "string" === typeof e) {
                        if (!(r = "<" === e[0] && ">" === e[e.length - 1] && e.length >= 3 ? [null, e, null] : O.exec(e)) || !r[1] && t)
                            return !t || t.jquery ? (t || n).find(e) : this.constructor(t).find(e);
                        if (r[1]) {
                            if (t = t instanceof S ? t[0] : t,
                            S.merge(this, S.parseHTML(r[1], t && t.nodeType ? t.ownerDocument || t : b, !0)),
                            q.test(r[1]) && S.isPlainObject(t))
                                for (r in t)
                                    m(this[r]) ? this[r](t[r]) : this.attr(r, t[r]);
                            return this
                        }
                        return (i = b.getElementById(r[2])) && (this[0] = i,
                        this.length = 1),
                        this
                    }
                    return e.nodeType ? (this[0] = e,
                    this.length = 1,
                    this) : m(e) ? void 0 !== n.ready ? n.ready(e) : e(S) : S.makeArray(e, this)
                }
                ).prototype = S.fn,
                H = S(b);
                var P = /^(?:parents|prev(?:Until|All))/
                  , R = {
                    children: !0,
                    contents: !0,
                    next: !0,
                    prev: !0
                };
                function M(e, t) {
                    for (; (e = e[t]) && 1 !== e.nodeType; )
                        ;
                    return e
                }
                S.fn.extend({
                    has: function(e) {
                        var t = S(e, this)
                          , n = t.length;
                        return this.filter((function() {
                            for (var e = 0; e < n; e++)
                                if (S.contains(this, t[e]))
                                    return !0
                        }
                        ))
                    },
                    closest: function(e, t) {
                        var n, r = 0, i = this.length, o = [], a = "string" !== typeof e && S(e);
                        if (!D.test(e))
                            for (; r < i; r++)
                                for (n = this[r]; n && n !== t; n = n.parentNode)
                                    if (n.nodeType < 11 && (a ? a.index(n) > -1 : 1 === n.nodeType && S.find.matchesSelector(n, e))) {
                                        o.push(n);
                                        break
                                    }
                        return this.pushStack(o.length > 1 ? S.uniqueSort(o) : o)
                    },
                    index: function(e) {
                        return e ? "string" === typeof e ? f.call(S(e), this[0]) : f.call(this, e.jquery ? e[0] : e) : this[0] && this[0].parentNode ? this.first().prevAll().length : -1
                    },
                    add: function(e, t) {
                        return this.pushStack(S.uniqueSort(S.merge(this.get(), S(e, t))))
                    },
                    addBack: function(e) {
                        return this.add(null == e ? this.prevObject : this.prevObject.filter(e))
                    }
                }),
                S.each({
                    parent: function(e) {
                        var t = e.parentNode;
                        return t && 11 !== t.nodeType ? t : null
                    },
                    parents: function(e) {
                        return A(e, "parentNode")
                    },
                    parentsUntil: function(e, t, n) {
                        return A(e, "parentNode", n)
                    },
                    next: function(e) {
                        return M(e, "nextSibling")
                    },
                    prev: function(e) {
                        return M(e, "previousSibling")
                    },
                    nextAll: function(e) {
                        return A(e, "nextSibling")
                    },
                    prevAll: function(e) {
                        return A(e, "previousSibling")
                    },
                    nextUntil: function(e, t, n) {
                        return A(e, "nextSibling", n)
                    },
                    prevUntil: function(e, t, n) {
                        return A(e, "previousSibling", n)
                    },
                    siblings: function(e) {
                        return N((e.parentNode || {}).firstChild, e)
                    },
                    children: function(e) {
                        return N(e.firstChild)
                    },
                    contents: function(e) {
                        return null != e.contentDocument && s(e.contentDocument) ? e.contentDocument : (j(e, "template") && (e = e.content || e),
                        S.merge([], e.childNodes))
                    }
                }, (function(e, t) {
                    S.fn[e] = function(n, r) {
                        var i = S.map(this, t, n);
                        return "Until" !== e.slice(-5) && (r = n),
                        r && "string" === typeof r && (i = S.filter(r, i)),
                        this.length > 1 && (R[e] || S.uniqueSort(i),
                        P.test(e) && i.reverse()),
                        this.pushStack(i)
                    }
                }
                ));
                var I = /[^\x20\t\r\n\f]+/g;
                function W(e) {
                    return e
                }
                function F(e) {
                    throw e
                }
                function B(e, t, n, r) {
                    var i;
                    try {
                        e && m(i = e.promise) ? i.call(e).done(t).fail(n) : e && m(i = e.then) ? i.call(e, t, n) : t.apply(void 0, [e].slice(r))
                    } catch (e) {
                        n.apply(void 0, [e])
                    }
                }
                S.Callbacks = function(e) {
                    e = "string" === typeof e ? function(e) {
                        var t = {};
                        return S.each(e.match(I) || [], (function(e, n) {
                            t[n] = !0
                        }
                        )),
                        t
                    }(e) : S.extend({}, e);
                    var t, n, r, i, o = [], a = [], s = -1, u = function() {
                        for (i = i || e.once,
                        r = t = !0; a.length; s = -1)
                            for (n = a.shift(); ++s < o.length; )
                                !1 === o[s].apply(n[0], n[1]) && e.stopOnFalse && (s = o.length,
                                n = !1);
                        e.memory || (n = !1),
                        t = !1,
                        i && (o = n ? [] : "")
                    }, l = {
                        add: function() {
                            return o && (n && !t && (s = o.length - 1,
                            a.push(n)),
                            function t(n) {
                                S.each(n, (function(n, r) {
                                    m(r) ? e.unique && l.has(r) || o.push(r) : r && r.length && "string" !== C(r) && t(r)
                                }
                                ))
                            }(arguments),
                            n && !t && u()),
                            this
                        },
                        remove: function() {
                            return S.each(arguments, (function(e, t) {
                                for (var n; (n = S.inArray(t, o, n)) > -1; )
                                    o.splice(n, 1),
                                    n <= s && s--
                            }
                            )),
                            this
                        },
                        has: function(e) {
                            return e ? S.inArray(e, o) > -1 : o.length > 0
                        },
                        empty: function() {
                            return o && (o = []),
                            this
                        },
                        disable: function() {
                            return i = a = [],
                            o = n = "",
                            this
                        },
                        disabled: function() {
                            return !o
                        },
                        lock: function() {
                            return i = a = [],
                            n || t || (o = n = ""),
                            this
                        },
                        locked: function() {
                            return !!i
                        },
                        fireWith: function(e, n) {
                            return i || (n = [e, (n = n || []).slice ? n.slice() : n],
                            a.push(n),
                            t || u()),
                            this
                        },
                        fire: function() {
                            return l.fireWith(this, arguments),
                            this
                        },
                        fired: function() {
                            return !!r
                        }
                    };
                    return l
                }
                ,
                S.extend({
                    Deferred: function(e) {
                        var t = [["notify", "progress", S.Callbacks("memory"), S.Callbacks("memory"), 2], ["resolve", "done", S.Callbacks("once memory"), S.Callbacks("once memory"), 0, "resolved"], ["reject", "fail", S.Callbacks("once memory"), S.Callbacks("once memory"), 1, "rejected"]]
                          , n = "pending"
                          , o = {
                            state: function() {
                                return n
                            },
                            always: function() {
                                return a.done(arguments).fail(arguments),
                                this
                            },
                            catch: function(e) {
                                return o.then(null, e)
                            },
                            pipe: function() {
                                var e = arguments;
                                return S.Deferred((function(n) {
                                    S.each(t, (function(t, r) {
                                        var i = m(e[r[4]]) && e[r[4]];
                                        a[r[1]]((function() {
                                            var e = i && i.apply(this, arguments);
                                            e && m(e.promise) ? e.promise().progress(n.notify).done(n.resolve).fail(n.reject) : n[r[0] + "With"](this, i ? [e] : arguments)
                                        }
                                        ))
                                    }
                                    )),
                                    e = null
                                }
                                )).promise()
                            },
                            then: function(e, n, o) {
                                var a = 0;
                                function s(e, t, n, o) {
                                    return function() {
                                        var u = this
                                          , l = arguments
                                          , c = function() {
                                            var i, c;
                                            if (!(e < a)) {
                                                if ((i = n.apply(u, l)) === t.promise())
                                                    throw new TypeError("Thenable self-resolution");
                                                c = i && ("object" === r(i) || "function" === typeof i) && i.then,
                                                m(c) ? o ? c.call(i, s(a, t, W, o), s(a, t, F, o)) : (a++,
                                                c.call(i, s(a, t, W, o), s(a, t, F, o), s(a, t, W, t.notifyWith))) : (n !== W && (u = void 0,
                                                l = [i]),
                                                (o || t.resolveWith)(u, l))
                                            }
                                        }
                                          , f = o ? c : function() {
                                            try {
                                                c()
                                            } catch (r) {
                                                S.Deferred.exceptionHook && S.Deferred.exceptionHook(r, f.stackTrace),
                                                e + 1 >= a && (n !== F && (u = void 0,
                                                l = [r]),
                                                t.rejectWith(u, l))
                                            }
                                        }
                                        ;
                                        e ? f() : (S.Deferred.getStackHook && (f.stackTrace = S.Deferred.getStackHook()),
                                        i.setTimeout(f))
                                    }
                                }
                                return S.Deferred((function(r) {
                                    t[0][3].add(s(0, r, m(o) ? o : W, r.notifyWith)),
                                    t[1][3].add(s(0, r, m(e) ? e : W)),
                                    t[2][3].add(s(0, r, m(n) ? n : F))
                                }
                                )).promise()
                            },
                            promise: function(e) {
                                return null != e ? S.extend(e, o) : o
                            }
                        }
                          , a = {};
                        return S.each(t, (function(e, r) {
                            var i = r[2]
                              , s = r[5];
                            o[r[1]] = i.add,
                            s && i.add((function() {
                                n = s
                            }
                            ), t[3 - e][2].disable, t[3 - e][3].disable, t[0][2].lock, t[0][3].lock),
                            i.add(r[3].fire),
                            a[r[0]] = function() {
                                return a[r[0] + "With"](this === a ? void 0 : this, arguments),
                                this
                            }
                            ,
                            a[r[0] + "With"] = i.fireWith
                        }
                        )),
                        o.promise(a),
                        e && e.call(a, a),
                        a
                    },
                    when: function(e) {
                        var t = arguments.length
                          , n = t
                          , r = Array(n)
                          , i = u.call(arguments)
                          , o = S.Deferred()
                          , a = function(e) {
                            return function(n) {
                                r[e] = this,
                                i[e] = arguments.length > 1 ? u.call(arguments) : n,
                                --t || o.resolveWith(r, i)
                            }
                        };
                        if (t <= 1 && (B(e, o.done(a(n)).resolve, o.reject, !t),
                        "pending" === o.state() || m(i[n] && i[n].then)))
                            return o.then();
                        for (; n--; )
                            B(i[n], a(n), o.reject);
                        return o.promise()
                    }
                });
                var $ = /^(Eval|Internal|Range|Reference|Syntax|Type|URI)Error$/;
                S.Deferred.exceptionHook = function(e, t) {
                    i.console && i.console.warn && e && $.test(e.name) && i.console.warn("jQuery.Deferred exception: " + e.message, e.stack, t)
                }
                ,
                S.readyException = function(e) {
                    i.setTimeout((function() {
                        throw e
                    }
                    ))
                }
                ;
                var _ = S.Deferred();
                function z() {
                    b.removeEventListener("DOMContentLoaded", z),
                    i.removeEventListener("load", z),
                    S.ready()
                }
                S.fn.ready = function(e) {
                    return _.then(e).catch((function(e) {
                        S.readyException(e)
                    }
                    )),
                    this
                }
                ,
                S.extend({
                    isReady: !1,
                    readyWait: 1,
                    ready: function(e) {
                        (!0 === e ? --S.readyWait : S.isReady) || (S.isReady = !0,
                        !0 !== e && --S.readyWait > 0 || _.resolveWith(b, [S]))
                    }
                }),
                S.ready.then = _.then,
                "complete" === b.readyState || "loading" !== b.readyState && !b.documentElement.doScroll ? i.setTimeout(S.ready) : (b.addEventListener("DOMContentLoaded", z),
                i.addEventListener("load", z));
                var U = function e(t, n, r, i, o, a, s) {
                    var u = 0
                      , l = t.length
                      , c = null == r;
                    if ("object" === C(r))
                        for (u in o = !0,
                        r)
                            e(t, n, u, r[u], !0, a, s);
                    else if (void 0 !== i && (o = !0,
                    m(i) || (s = !0),
                    c && (s ? (n.call(t, i),
                    n = null) : (c = n,
                    n = function(e, t, n) {
                        return c.call(S(e), n)
                    }
                    )),
                    n))
                        for (; u < l; u++)
                            n(t[u], r, s ? i : i.call(t[u], u, n(t[u], r)));
                    return o ? t : c ? n.call(t) : l ? n(t[0], r) : a
                }
                  , X = /^-ms-/
                  , V = /-([a-z])/g;
                function G(e, t) {
                    return t.toUpperCase()
                }
                function Y(e) {
                    return e.replace(X, "ms-").replace(V, G)
                }
                var J = function(e) {
                    return 1 === e.nodeType || 9 === e.nodeType || !+e.nodeType
                };
                function Q() {
                    this.expando = S.expando + Q.uid++
                }
                Q.uid = 1,
                Q.prototype = {
                    cache: function(e) {
                        var t = e[this.expando];
                        return t || (t = {},
                        J(e) && (e.nodeType ? e[this.expando] = t : Object.defineProperty(e, this.expando, {
                            value: t,
                            configurable: !0
                        }))),
                        t
                    },
                    set: function(e, t, n) {
                        var r, i = this.cache(e);
                        if ("string" === typeof t)
                            i[Y(t)] = n;
                        else
                            for (r in t)
                                i[Y(r)] = t[r];
                        return i
                    },
                    get: function(e, t) {
                        return void 0 === t ? this.cache(e) : e[this.expando] && e[this.expando][Y(t)]
                    },
                    access: function(e, t, n) {
                        return void 0 === t || t && "string" === typeof t && void 0 === n ? this.get(e, t) : (this.set(e, t, n),
                        void 0 !== n ? n : t)
                    },
                    remove: function(e, t) {
                        var n, r = e[this.expando];
                        if (void 0 !== r) {
                            if (void 0 !== t) {
                                n = (t = Array.isArray(t) ? t.map(Y) : (t = Y(t))in r ? [t] : t.match(I) || []).length;
                                for (; n--; )
                                    delete r[t[n]]
                            }
                            (void 0 === t || S.isEmptyObject(r)) && (e.nodeType ? e[this.expando] = void 0 : delete e[this.expando])
                        }
                    },
                    hasData: function(e) {
                        var t = e[this.expando];
                        return void 0 !== t && !S.isEmptyObject(t)
                    }
                };
                var K = new Q
                  , Z = new Q
                  , ee = /^(?:\{[\w\W]*\}|\[[\w\W]*\])$/
                  , te = /[A-Z]/g;
                function ne(e, t, n) {
                    var r;
                    if (void 0 === n && 1 === e.nodeType)
                        if (r = "data-" + t.replace(te, "-$&").toLowerCase(),
                        "string" === typeof (n = e.getAttribute(r))) {
                            try {
                                n = function(e) {
                                    return "true" === e || "false" !== e && ("null" === e ? null : e === +e + "" ? +e : ee.test(e) ? JSON.parse(e) : e)
                                }(n)
                            } catch (i) {}
                            Z.set(e, t, n)
                        } else
                            n = void 0;
                    return n
                }
                S.extend({
                    hasData: function(e) {
                        return Z.hasData(e) || K.hasData(e)
                    },
                    data: function(e, t, n) {
                        return Z.access(e, t, n)
                    },
                    removeData: function(e, t) {
                        Z.remove(e, t)
                    },
                    _data: function(e, t, n) {
                        return K.access(e, t, n)
                    },
                    _removeData: function(e, t) {
                        K.remove(e, t)
                    }
                }),
                S.fn.extend({
                    data: function(e, t) {
                        var n, i, o, a = this[0], s = a && a.attributes;
                        if (void 0 === e) {
                            if (this.length && (o = Z.get(a),
                            1 === a.nodeType && !K.get(a, "hasDataAttrs"))) {
                                for (n = s.length; n--; )
                                    s[n] && 0 === (i = s[n].name).indexOf("data-") && (i = Y(i.slice(5)),
                                    ne(a, i, o[i]));
                                K.set(a, "hasDataAttrs", !0)
                            }
                            return o
                        }
                        return "object" === r(e) ? this.each((function() {
                            Z.set(this, e)
                        }
                        )) : U(this, (function(t) {
                            var n;
                            if (a && void 0 === t)
                                return void 0 !== (n = Z.get(a, e)) ? n : void 0 !== (n = ne(a, e)) ? n : void 0;
                            this.each((function() {
                                Z.set(this, e, t)
                            }
                            ))
                        }
                        ), null, t, arguments.length > 1, null, !0)
                    },
                    removeData: function(e) {
                        return this.each((function() {
                            Z.remove(this, e)
                        }
                        ))
                    }
                }),
                S.extend({
                    queue: function(e, t, n) {
                        var r;
                        if (e)
                            return t = (t || "fx") + "queue",
                            r = K.get(e, t),
                            n && (!r || Array.isArray(n) ? r = K.access(e, t, S.makeArray(n)) : r.push(n)),
                            r || []
                    },
                    dequeue: function(e, t) {
                        var n = S.queue(e, t = t || "fx")
                          , r = n.length
                          , i = n.shift()
                          , o = S._queueHooks(e, t);
                        "inprogress" === i && (i = n.shift(),
                        r--),
                        i && ("fx" === t && n.unshift("inprogress"),
                        delete o.stop,
                        i.call(e, (function() {
                            S.dequeue(e, t)
                        }
                        ), o)),
                        !r && o && o.empty.fire()
                    },
                    _queueHooks: function(e, t) {
                        var n = t + "queueHooks";
                        return K.get(e, n) || K.access(e, n, {
                            empty: S.Callbacks("once memory").add((function() {
                                K.remove(e, [t + "queue", n])
                            }
                            ))
                        })
                    }
                }),
                S.fn.extend({
                    queue: function(e, t) {
                        var n = 2;
                        return "string" !== typeof e && (t = e,
                        e = "fx",
                        n--),
                        arguments.length < n ? S.queue(this[0], e) : void 0 === t ? this : this.each((function() {
                            var n = S.queue(this, e, t);
                            S._queueHooks(this, e),
                            "fx" === e && "inprogress" !== n[0] && S.dequeue(this, e)
                        }
                        ))
                    },
                    dequeue: function(e) {
                        return this.each((function() {
                            S.dequeue(this, e)
                        }
                        ))
                    },
                    clearQueue: function(e) {
                        return this.queue(e || "fx", [])
                    },
                    promise: function(e, t) {
                        var n, r = 1, i = S.Deferred(), o = this, a = this.length, s = function() {
                            --r || i.resolveWith(o, [o])
                        };
                        for ("string" !== typeof e && (t = e,
                        e = void 0),
                        e = e || "fx"; a--; )
                            (n = K.get(o[a], e + "queueHooks")) && n.empty && (r++,
                            n.empty.add(s));
                        return s(),
                        i.promise(t)
                    }
                });
                var re = /[+-]?(?:\d*\.|)\d+(?:[eE][+-]?\d+|)/.source
                  , ie = new RegExp("^(?:([+-])=|)(" + re + ")([a-z%]*)$","i")
                  , oe = ["Top", "Right", "Bottom", "Left"]
                  , ae = b.documentElement
                  , se = function(e) {
                    return S.contains(e.ownerDocument, e)
                }
                  , ue = {
                    composed: !0
                };
                ae.getRootNode && (se = function(e) {
                    return S.contains(e.ownerDocument, e) || e.getRootNode(ue) === e.ownerDocument
                }
                );
                var le = function(e, t) {
                    return "none" === (e = t || e).style.display || "" === e.style.display && se(e) && "none" === S.css(e, "display")
                };
                function ce(e, t, n, r) {
                    var i, o, a = 20, s = r ? function() {
                        return r.cur()
                    }
                    : function() {
                        return S.css(e, t, "")
                    }
                    , u = s(), l = n && n[3] || (S.cssNumber[t] ? "" : "px"), c = e.nodeType && (S.cssNumber[t] || "px" !== l && +u) && ie.exec(S.css(e, t));
                    if (c && c[3] !== l) {
                        for (u /= 2,
                        l = l || c[3],
                        c = +u || 1; a--; )
                            S.style(e, t, c + l),
                            (1 - o) * (1 - (o = s() / u || .5)) <= 0 && (a = 0),
                            c /= o;
                        S.style(e, t, (c *= 2) + l),
                        n = n || []
                    }
                    return n && (c = +c || +u || 0,
                    i = n[1] ? c + (n[1] + 1) * n[2] : +n[2],
                    r && (r.unit = l,
                    r.start = c,
                    r.end = i)),
                    i
                }
                var fe = {};
                function pe(e) {
                    var t, n = e.ownerDocument, r = e.nodeName, i = fe[r];
                    return i || (t = n.body.appendChild(n.createElement(r)),
                    i = S.css(t, "display"),
                    t.parentNode.removeChild(t),
                    "none" === i && (i = "block"),
                    fe[r] = i,
                    i)
                }
                function de(e, t) {
                    for (var n, r, i = [], o = 0, a = e.length; o < a; o++)
                        (r = e[o]).style && (n = r.style.display,
                        t ? ("none" === n && (i[o] = K.get(r, "display") || null,
                        i[o] || (r.style.display = "")),
                        "" === r.style.display && le(r) && (i[o] = pe(r))) : "none" !== n && (i[o] = "none",
                        K.set(r, "display", n)));
                    for (o = 0; o < a; o++)
                        null != i[o] && (e[o].style.display = i[o]);
                    return e
                }
                S.fn.extend({
                    show: function() {
                        return de(this, !0)
                    },
                    hide: function() {
                        return de(this)
                    },
                    toggle: function(e) {
                        return "boolean" === typeof e ? e ? this.show() : this.hide() : this.each((function() {
                            le(this) ? S(this).show() : S(this).hide()
                        }
                        ))
                    }
                });
                var he, ge, ve = /^(?:checkbox|radio)$/i, ye = /<([a-z][^\/\0>\x20\t\r\n\f]*)/i, me = /^$|^module$|\/(?:java|ecma)script/i;
                he = b.createDocumentFragment().appendChild(b.createElement("div")),
                (ge = b.createElement("input")).setAttribute("type", "radio"),
                ge.setAttribute("checked", "checked"),
                ge.setAttribute("name", "t"),
                he.appendChild(ge),
                y.checkClone = he.cloneNode(!0).cloneNode(!0).lastChild.checked,
                he.innerHTML = "<textarea>x</textarea>",
                y.noCloneChecked = !!he.cloneNode(!0).lastChild.defaultValue,
                he.innerHTML = "<option></option>",
                y.option = !!he.lastChild;
                var xe = {
                    thead: [1, "<table>", "</table>"],
                    col: [2, "<table><colgroup>", "</colgroup></table>"],
                    tr: [2, "<table><tbody>", "</tbody></table>"],
                    td: [3, "<table><tbody><tr>", "</tr></tbody></table>"],
                    _default: [0, "", ""]
                };
                function be(e, t) {
                    var n;
                    return n = "undefined" !== typeof e.getElementsByTagName ? e.getElementsByTagName(t || "*") : "undefined" !== typeof e.querySelectorAll ? e.querySelectorAll(t || "*") : [],
                    void 0 === t || t && j(e, t) ? S.merge([e], n) : n
                }
                function we(e, t) {
                    for (var n = 0, r = e.length; n < r; n++)
                        K.set(e[n], "globalEval", !t || K.get(t[n], "globalEval"))
                }
                xe.tbody = xe.tfoot = xe.colgroup = xe.caption = xe.thead,
                xe.th = xe.td,
                y.option || (xe.optgroup = xe.option = [1, "<select multiple='multiple'>", "</select>"]);
                var Te = /<|&#?\w+;/;
                function Ce(e, t, n, r, i) {
                    for (var o, a, s, u, l, c, f = t.createDocumentFragment(), p = [], d = 0, h = e.length; d < h; d++)
                        if ((o = e[d]) || 0 === o)
                            if ("object" === C(o))
                                S.merge(p, o.nodeType ? [o] : o);
                            else if (Te.test(o)) {
                                for (a = a || f.appendChild(t.createElement("div")),
                                s = (ye.exec(o) || ["", ""])[1].toLowerCase(),
                                u = xe[s] || xe._default,
                                a.innerHTML = u[1] + S.htmlPrefilter(o) + u[2],
                                c = u[0]; c--; )
                                    a = a.lastChild;
                                S.merge(p, a.childNodes),
                                (a = f.firstChild).textContent = ""
                            } else
                                p.push(t.createTextNode(o));
                    for (f.textContent = "",
                    d = 0; o = p[d++]; )
                        if (r && S.inArray(o, r) > -1)
                            i && i.push(o);
                        else if (l = se(o),
                        a = be(f.appendChild(o), "script"),
                        l && we(a),
                        n)
                            for (c = 0; o = a[c++]; )
                                me.test(o.type || "") && n.push(o);
                    return f
                }
                var Se = /^key/
                  , Ee = /^(?:mouse|pointer|contextmenu|drag|drop)|click/
                  , ke = /^([^.]*)(?:\.(.+)|)/;
                function Ae() {
                    return !0
                }
                function Ne() {
                    return !1
                }
                function De(e, t) {
                    return e === function() {
                        try {
                            return b.activeElement
                        } catch (e) {}
                    }() === ("focus" === t)
                }
                function je(e, t, n, i, o, a) {
                    var s, u;
                    if ("object" === r(t)) {
                        for (u in "string" !== typeof n && (i = i || n,
                        n = void 0),
                        t)
                            je(e, u, n, i, t[u], a);
                        return e
                    }
                    if (null == i && null == o ? (o = n,
                    i = n = void 0) : null == o && ("string" === typeof n ? (o = i,
                    i = void 0) : (o = i,
                    i = n,
                    n = void 0)),
                    !1 === o)
                        o = Ne;
                    else if (!o)
                        return e;
                    return 1 === a && (s = o,
                    (o = function(e) {
                        return S().off(e),
                        s.apply(this, arguments)
                    }
                    ).guid = s.guid || (s.guid = S.guid++)),
                    e.each((function() {
                        S.event.add(this, t, o, i, n)
                    }
                    ))
                }
                function qe(e, t, n) {
                    n ? (K.set(e, t, !1),
                    S.event.add(e, t, {
                        namespace: !1,
                        handler: function(e) {
                            var r, i, o = K.get(this, t);
                            if (1 & e.isTrigger && this[t]) {
                                if (o.length)
                                    (S.event.special[t] || {}).delegateType && e.stopPropagation();
                                else if (o = u.call(arguments),
                                K.set(this, t, o),
                                r = n(this, t),
                                this[t](),
                                o !== (i = K.get(this, t)) || r ? K.set(this, t, !1) : i = {},
                                o !== i)
                                    return e.stopImmediatePropagation(),
                                    e.preventDefault(),
                                    i.value
                            } else
                                o.length && (K.set(this, t, {
                                    value: S.event.trigger(S.extend(o[0], S.Event.prototype), o.slice(1), this)
                                }),
                                e.stopImmediatePropagation())
                        }
                    })) : void 0 === K.get(e, t) && S.event.add(e, t, Ae)
                }
                S.event = {
                    global: {},
                    add: function(e, t, n, r, i) {
                        var o, a, s, u, l, c, f, p, d, h, g, v = K.get(e);
                        if (J(e))
                            for (n.handler && (n = (o = n).handler,
                            i = o.selector),
                            i && S.find.matchesSelector(ae, i),
                            n.guid || (n.guid = S.guid++),
                            (u = v.events) || (u = v.events = Object.create(null)),
                            (a = v.handle) || (a = v.handle = function(t) {
                                return S.event.triggered !== t.type ? S.event.dispatch.apply(e, arguments) : void 0
                            }
                            ),
                            l = (t = (t || "").match(I) || [""]).length; l--; )
                                d = g = (s = ke.exec(t[l]) || [])[1],
                                h = (s[2] || "").split(".").sort(),
                                d && (f = S.event.special[d] || {},
                                d = (i ? f.delegateType : f.bindType) || d,
                                f = S.event.special[d] || {},
                                c = S.extend({
                                    type: d,
                                    origType: g,
                                    data: r,
                                    handler: n,
                                    guid: n.guid,
                                    selector: i,
                                    needsContext: i && S.expr.match.needsContext.test(i),
                                    namespace: h.join(".")
                                }, o),
                                (p = u[d]) || ((p = u[d] = []).delegateCount = 0,
                                f.setup && !1 !== f.setup.call(e, r, h, a) || e.addEventListener && e.addEventListener(d, a)),
                                f.add && (f.add.call(e, c),
                                c.handler.guid || (c.handler.guid = n.guid)),
                                i ? p.splice(p.delegateCount++, 0, c) : p.push(c),
                                S.event.global[d] = !0)
                    },
                    remove: function(e, t, n, r, i) {
                        var o, a, s, u, l, c, f, p, d, h, g, v = K.hasData(e) && K.get(e);
                        if (v && (u = v.events)) {
                            for (l = (t = (t || "").match(I) || [""]).length; l--; )
                                if (d = g = (s = ke.exec(t[l]) || [])[1],
                                h = (s[2] || "").split(".").sort(),
                                d) {
                                    for (f = S.event.special[d] || {},
                                    p = u[d = (r ? f.delegateType : f.bindType) || d] || [],
                                    s = s[2] && new RegExp("(^|\\.)" + h.join("\\.(?:.*\\.|)") + "(\\.|$)"),
                                    a = o = p.length; o--; )
                                        c = p[o],
                                        !i && g !== c.origType || n && n.guid !== c.guid || s && !s.test(c.namespace) || r && r !== c.selector && ("**" !== r || !c.selector) || (p.splice(o, 1),
                                        c.selector && p.delegateCount--,
                                        f.remove && f.remove.call(e, c));
                                    a && !p.length && (f.teardown && !1 !== f.teardown.call(e, h, v.handle) || S.removeEvent(e, d, v.handle),
                                    delete u[d])
                                } else
                                    for (d in u)
                                        S.event.remove(e, d + t[l], n, r, !0);
                            S.isEmptyObject(u) && K.remove(e, "handle events")
                        }
                    },
                    dispatch: function(e) {
                        var t, n, r, i, o, a, s = new Array(arguments.length), u = S.event.fix(e), l = (K.get(this, "events") || Object.create(null))[u.type] || [], c = S.event.special[u.type] || {};
                        for (s[0] = u,
                        t = 1; t < arguments.length; t++)
                            s[t] = arguments[t];
                        if (u.delegateTarget = this,
                        !c.preDispatch || !1 !== c.preDispatch.call(this, u)) {
                            for (a = S.event.handlers.call(this, u, l),
                            t = 0; (i = a[t++]) && !u.isPropagationStopped(); )
                                for (u.currentTarget = i.elem,
                                n = 0; (o = i.handlers[n++]) && !u.isImmediatePropagationStopped(); )
                                    u.rnamespace && !1 !== o.namespace && !u.rnamespace.test(o.namespace) || (u.handleObj = o,
                                    u.data = o.data,
                                    void 0 !== (r = ((S.event.special[o.origType] || {}).handle || o.handler).apply(i.elem, s)) && !1 === (u.result = r) && (u.preventDefault(),
                                    u.stopPropagation()));
                            return c.postDispatch && c.postDispatch.call(this, u),
                            u.result
                        }
                    },
                    handlers: function(e, t) {
                        var n, r, i, o, a, s = [], u = t.delegateCount, l = e.target;
                        if (u && l.nodeType && !("click" === e.type && e.button >= 1))
                            for (; l !== this; l = l.parentNode || this)
                                if (1 === l.nodeType && ("click" !== e.type || !0 !== l.disabled)) {
                                    for (o = [],
                                    a = {},
                                    n = 0; n < u; n++)
                                        void 0 === a[i = (r = t[n]).selector + " "] && (a[i] = r.needsContext ? S(i, this).index(l) > -1 : S.find(i, this, null, [l]).length),
                                        a[i] && o.push(r);
                                    o.length && s.push({
                                        elem: l,
                                        handlers: o
                                    })
                                }
                        return l = this,
                        u < t.length && s.push({
                            elem: l,
                            handlers: t.slice(u)
                        }),
                        s
                    },
                    addProp: function(e, t) {
                        Object.defineProperty(S.Event.prototype, e, {
                            enumerable: !0,
                            configurable: !0,
                            get: m(t) ? function() {
                                if (this.originalEvent)
                                    return t(this.originalEvent)
                            }
                            : function() {
                                if (this.originalEvent)
                                    return this.originalEvent[e]
                            }
                            ,
                            set: function(t) {
                                Object.defineProperty(this, e, {
                                    enumerable: !0,
                                    configurable: !0,
                                    writable: !0,
                                    value: t
                                })
                            }
                        })
                    },
                    fix: function(e) {
                        return e[S.expando] ? e : new S.Event(e)
                    },
                    special: {
                        load: {
                            noBubble: !0
                        },
                        click: {
                            setup: function(e) {
                                var t = this || e;
                                return ve.test(t.type) && t.click && j(t, "input") && qe(t, "click", Ae),
                                !1
                            },
                            trigger: function(e) {
                                var t = this || e;
                                return ve.test(t.type) && t.click && j(t, "input") && qe(t, "click"),
                                !0
                            },
                            _default: function(e) {
                                var t = e.target;
                                return ve.test(t.type) && t.click && j(t, "input") && K.get(t, "click") || j(t, "a")
                            }
                        },
                        beforeunload: {
                            postDispatch: function(e) {
                                void 0 !== e.result && e.originalEvent && (e.originalEvent.returnValue = e.result)
                            }
                        }
                    }
                },
                S.removeEvent = function(e, t, n) {
                    e.removeEventListener && e.removeEventListener(t, n)
                }
                ,
                (S.Event = function(e, t) {
                    if (!(this instanceof S.Event))
                        return new S.Event(e,t);
                    e && e.type ? (this.originalEvent = e,
                    this.type = e.type,
                    this.isDefaultPrevented = e.defaultPrevented || void 0 === e.defaultPrevented && !1 === e.returnValue ? Ae : Ne,
                    this.target = e.target && 3 === e.target.nodeType ? e.target.parentNode : e.target,
                    this.currentTarget = e.currentTarget,
                    this.relatedTarget = e.relatedTarget) : this.type = e,
                    t && S.extend(this, t),
                    this.timeStamp = e && e.timeStamp || Date.now(),
                    this[S.expando] = !0
                }
                ).prototype = {
                    constructor: S.Event,
                    isDefaultPrevented: Ne,
                    isPropagationStopped: Ne,
                    isImmediatePropagationStopped: Ne,
                    isSimulated: !1,
                    preventDefault: function() {
                        var e = this.originalEvent;
                        this.isDefaultPrevented = Ae,
                        e && !this.isSimulated && e.preventDefault()
                    },
                    stopPropagation: function() {
                        var e = this.originalEvent;
                        this.isPropagationStopped = Ae,
                        e && !this.isSimulated && e.stopPropagation()
                    },
                    stopImmediatePropagation: function() {
                        var e = this.originalEvent;
                        this.isImmediatePropagationStopped = Ae,
                        e && !this.isSimulated && e.stopImmediatePropagation(),
                        this.stopPropagation()
                    }
                },
                S.each({
                    altKey: !0,
                    bubbles: !0,
                    cancelable: !0,
                    changedTouches: !0,
                    ctrlKey: !0,
                    detail: !0,
                    eventPhase: !0,
                    metaKey: !0,
                    pageX: !0,
                    pageY: !0,
                    shiftKey: !0,
                    view: !0,
                    char: !0,
                    code: !0,
                    charCode: !0,
                    key: !0,
                    keyCode: !0,
                    button: !0,
                    buttons: !0,
                    clientX: !0,
                    clientY: !0,
                    offsetX: !0,
                    offsetY: !0,
                    pointerId: !0,
                    pointerType: !0,
                    screenX: !0,
                    screenY: !0,
                    targetTouches: !0,
                    toElement: !0,
                    touches: !0,
                    which: function(e) {
                        var t = e.button;
                        return null == e.which && Se.test(e.type) ? null != e.charCode ? e.charCode : e.keyCode : !e.which && void 0 !== t && Ee.test(e.type) ? 1 & t ? 1 : 2 & t ? 3 : 4 & t ? 2 : 0 : e.which
                    }
                }, S.event.addProp),
                S.each({
                    focus: "focusin",
                    blur: "focusout"
                }, (function(e, t) {
                    S.event.special[e] = {
                        setup: function() {
                            return qe(this, e, De),
                            !1
                        },
                        trigger: function() {
                            return qe(this, e),
                            !0
                        },
                        delegateType: t
                    }
                }
                )),
                S.each({
                    mouseenter: "mouseover",
                    mouseleave: "mouseout",
                    pointerenter: "pointerover",
                    pointerleave: "pointerout"
                }, (function(e, t) {
                    S.event.special[e] = {
                        delegateType: t,
                        bindType: t,
                        handle: function(e) {
                            var n, r = this, i = e.relatedTarget, o = e.handleObj;
                            return i && (i === r || S.contains(r, i)) || (e.type = o.origType,
                            n = o.handler.apply(this, arguments),
                            e.type = t),
                            n
                        }
                    }
                }
                )),
                S.fn.extend({
                    on: function(e, t, n, r) {
                        return je(this, e, t, n, r)
                    },
                    one: function(e, t, n, r) {
                        return je(this, e, t, n, r, 1)
                    },
                    off: function(e, t, n) {
                        var i, o;
                        if (e && e.preventDefault && e.handleObj)
                            return i = e.handleObj,
                            S(e.delegateTarget).off(i.namespace ? i.origType + "." + i.namespace : i.origType, i.selector, i.handler),
                            this;
                        if ("object" === r(e)) {
                            for (o in e)
                                this.off(o, t, e[o]);
                            return this
                        }
                        return !1 !== t && "function" !== typeof t || (n = t,
                        t = void 0),
                        !1 === n && (n = Ne),
                        this.each((function() {
                            S.event.remove(this, e, n, t)
                        }
                        ))
                    }
                });
                var Le = /<script|<style|<link/i
                  , He = /checked\s*(?:[^=]|=\s*.checked.)/i
                  , Oe = /^\s*<!(?:\[CDATA\[|--)|(?:\]\]|--)>\s*$/g;
                function Pe(e, t) {
                    return j(e, "table") && j(11 !== t.nodeType ? t : t.firstChild, "tr") && S(e).children("tbody")[0] || e
                }
                function Re(e) {
                    return e.type = (null !== e.getAttribute("type")) + "/" + e.type,
                    e
                }
                function Me(e) {
                    return "true/" === (e.type || "").slice(0, 5) ? e.type = e.type.slice(5) : e.removeAttribute("type"),
                    e
                }
                function Ie(e, t) {
                    var n, r, i, o, a, s;
                    if (1 === t.nodeType) {
                        if (K.hasData(e) && (s = K.get(e).events))
                            for (i in K.remove(t, "handle events"),
                            s)
                                for (n = 0,
                                r = s[i].length; n < r; n++)
                                    S.event.add(t, i, s[i][n]);
                        Z.hasData(e) && (o = Z.access(e),
                        a = S.extend({}, o),
                        Z.set(t, a))
                    }
                }
                function We(e, t) {
                    var n = t.nodeName.toLowerCase();
                    "input" === n && ve.test(e.type) ? t.checked = e.checked : "input" !== n && "textarea" !== n || (t.defaultValue = e.defaultValue)
                }
                function Fe(e, t, n, r) {
                    t = l(t);
                    var i, o, a, s, u, c, f = 0, p = e.length, d = p - 1, h = t[0], g = m(h);
                    if (g || p > 1 && "string" === typeof h && !y.checkClone && He.test(h))
                        return e.each((function(i) {
                            var o = e.eq(i);
                            g && (t[0] = h.call(this, i, o.html())),
                            Fe(o, t, n, r)
                        }
                        ));
                    if (p && (o = (i = Ce(t, e[0].ownerDocument, !1, e, r)).firstChild,
                    1 === i.childNodes.length && (i = o),
                    o || r)) {
                        for (s = (a = S.map(be(i, "script"), Re)).length; f < p; f++)
                            u = i,
                            f !== d && (u = S.clone(u, !0, !0),
                            s && S.merge(a, be(u, "script"))),
                            n.call(e[f], u, f);
                        if (s)
                            for (c = a[a.length - 1].ownerDocument,
                            S.map(a, Me),
                            f = 0; f < s; f++)
                                u = a[f],
                                me.test(u.type || "") && !K.access(u, "globalEval") && S.contains(c, u) && (u.src && "module" !== (u.type || "").toLowerCase() ? S._evalUrl && !u.noModule && S._evalUrl(u.src, {
                                    nonce: u.nonce || u.getAttribute("nonce")
                                }, c) : T(u.textContent.replace(Oe, ""), u, c))
                    }
                    return e
                }
                function Be(e, t, n) {
                    for (var r, i = t ? S.filter(t, e) : e, o = 0; null != (r = i[o]); o++)
                        n || 1 !== r.nodeType || S.cleanData(be(r)),
                        r.parentNode && (n && se(r) && we(be(r, "script")),
                        r.parentNode.removeChild(r));
                    return e
                }
                S.extend({
                    htmlPrefilter: function(e) {
                        return e
                    },
                    clone: function(e, t, n) {
                        var r, i, o, a, s = e.cloneNode(!0), u = se(e);
                        if (!y.noCloneChecked && (1 === e.nodeType || 11 === e.nodeType) && !S.isXMLDoc(e))
                            for (a = be(s),
                            r = 0,
                            i = (o = be(e)).length; r < i; r++)
                                We(o[r], a[r]);
                        if (t)
                            if (n)
                                for (o = o || be(e),
                                a = a || be(s),
                                r = 0,
                                i = o.length; r < i; r++)
                                    Ie(o[r], a[r]);
                            else
                                Ie(e, s);
                        return (a = be(s, "script")).length > 0 && we(a, !u && be(e, "script")),
                        s
                    },
                    cleanData: function(e) {
                        for (var t, n, r, i = S.event.special, o = 0; void 0 !== (n = e[o]); o++)
                            if (J(n)) {
                                if (t = n[K.expando]) {
                                    if (t.events)
                                        for (r in t.events)
                                            i[r] ? S.event.remove(n, r) : S.removeEvent(n, r, t.handle);
                                    n[K.expando] = void 0
                                }
                                n[Z.expando] && (n[Z.expando] = void 0)
                            }
                    }
                }),
                S.fn.extend({
                    detach: function(e) {
                        return Be(this, e, !0)
                    },
                    remove: function(e) {
                        return Be(this, e)
                    },
                    text: function(e) {
                        return U(this, (function(e) {
                            return void 0 === e ? S.text(this) : this.empty().each((function() {
                                1 !== this.nodeType && 11 !== this.nodeType && 9 !== this.nodeType || (this.textContent = e)
                            }
                            ))
                        }
                        ), null, e, arguments.length)
                    },
                    append: function() {
                        return Fe(this, arguments, (function(e) {
                            1 !== this.nodeType && 11 !== this.nodeType && 9 !== this.nodeType || Pe(this, e).appendChild(e)
                        }
                        ))
                    },
                    prepend: function() {
                        return Fe(this, arguments, (function(e) {
                            if (1 === this.nodeType || 11 === this.nodeType || 9 === this.nodeType) {
                                var t = Pe(this, e);
                                t.insertBefore(e, t.firstChild)
                            }
                        }
                        ))
                    },
                    before: function() {
                        return Fe(this, arguments, (function(e) {
                            this.parentNode && this.parentNode.insertBefore(e, this)
                        }
                        ))
                    },
                    after: function() {
                        return Fe(this, arguments, (function(e) {
                            this.parentNode && this.parentNode.insertBefore(e, this.nextSibling)
                        }
                        ))
                    },
                    empty: function() {
                        for (var e, t = 0; null != (e = this[t]); t++)
                            1 === e.nodeType && (S.cleanData(be(e, !1)),
                            e.textContent = "");
                        return this
                    },
                    clone: function(e, t) {
                        return e = null != e && e,
                        t = null == t ? e : t,
                        this.map((function() {
                            return S.clone(this, e, t)
                        }
                        ))
                    },
                    html: function(e) {
                        return U(this, (function(e) {
                            var t = this[0] || {}
                              , n = 0
                              , r = this.length;
                            if (void 0 === e && 1 === t.nodeType)
                                return t.innerHTML;
                            if ("string" === typeof e && !Le.test(e) && !xe[(ye.exec(e) || ["", ""])[1].toLowerCase()]) {
                                e = S.htmlPrefilter(e);
                                try {
                                    for (; n < r; n++)
                                        1 === (t = this[n] || {}).nodeType && (S.cleanData(be(t, !1)),
                                        t.innerHTML = e);
                                    t = 0
                                } catch (i) {}
                            }
                            t && this.empty().append(e)
                        }
                        ), null, e, arguments.length)
                    },
                    replaceWith: function() {
                        var e = [];
                        return Fe(this, arguments, (function(t) {
                            var n = this.parentNode;
                            S.inArray(this, e) < 0 && (S.cleanData(be(this)),
                            n && n.replaceChild(t, this))
                        }
                        ), e)
                    }
                }),
                S.each({
                    appendTo: "append",
                    prependTo: "prepend",
                    insertBefore: "before",
                    insertAfter: "after",
                    replaceAll: "replaceWith"
                }, (function(e, t) {
                    S.fn[e] = function(e) {
                        for (var n, r = [], i = S(e), o = i.length - 1, a = 0; a <= o; a++)
                            n = a === o ? this : this.clone(!0),
                            S(i[a])[t](n),
                            c.apply(r, n.get());
                        return this.pushStack(r)
                    }
                }
                ));
                var $e = new RegExp("^(" + re + ")(?!px)[a-z%]+$","i")
                  , _e = function(e) {
                    var t = e.ownerDocument.defaultView;
                    return t && t.opener || (t = i),
                    t.getComputedStyle(e)
                }
                  , ze = function(e, t, n) {
                    var r, i, o = {};
                    for (i in t)
                        o[i] = e.style[i],
                        e.style[i] = t[i];
                    for (i in r = n.call(e),
                    t)
                        e.style[i] = o[i];
                    return r
                }
                  , Ue = new RegExp(oe.join("|"),"i");
                function Xe(e, t, n) {
                    var r, i, o, a, s = e.style;
                    return (n = n || _e(e)) && ("" !== (a = n.getPropertyValue(t) || n[t]) || se(e) || (a = S.style(e, t)),
                    !y.pixelBoxStyles() && $e.test(a) && Ue.test(t) && (r = s.width,
                    i = s.minWidth,
                    o = s.maxWidth,
                    s.minWidth = s.maxWidth = s.width = a,
                    a = n.width,
                    s.width = r,
                    s.minWidth = i,
                    s.maxWidth = o)),
                    void 0 !== a ? a + "" : a
                }
                function Ve(e, t) {
                    return {
                        get: function() {
                            if (!e())
                                return (this.get = t).apply(this, arguments);
                            delete this.get
                        }
                    }
                }
                !function() {
                    function e() {
                        if (c) {
                            l.style.cssText = "position:absolute;left:-11111px;width:60px;margin-top:1px;padding:0;border:0",
                            c.style.cssText = "position:relative;display:block;box-sizing:border-box;overflow:scroll;margin:auto;border:1px;padding:1px;width:60%;top:1%",
                            ae.appendChild(l).appendChild(c);
                            var e = i.getComputedStyle(c);
                            n = "1%" !== e.top,
                            u = 12 === t(e.marginLeft),
                            c.style.right = "60%",
                            a = 36 === t(e.right),
                            r = 36 === t(e.width),
                            c.style.position = "absolute",
                            o = 12 === t(c.offsetWidth / 3),
                            ae.removeChild(l),
                            c = null
                        }
                    }
                    function t(e) {
                        return Math.round(parseFloat(e))
                    }
                    var n, r, o, a, s, u, l = b.createElement("div"), c = b.createElement("div");
                    c.style && (c.style.backgroundClip = "content-box",
                    c.cloneNode(!0).style.backgroundClip = "",
                    y.clearCloneStyle = "content-box" === c.style.backgroundClip,
                    S.extend(y, {
                        boxSizingReliable: function() {
                            return e(),
                            r
                        },
                        pixelBoxStyles: function() {
                            return e(),
                            a
                        },
                        pixelPosition: function() {
                            return e(),
                            n
                        },
                        reliableMarginLeft: function() {
                            return e(),
                            u
                        },
                        scrollboxSize: function() {
                            return e(),
                            o
                        },
                        reliableTrDimensions: function() {
                            var e, t, n, r;
                            return null == s && (e = b.createElement("table"),
                            t = b.createElement("tr"),
                            n = b.createElement("div"),
                            e.style.cssText = "position:absolute;left:-11111px",
                            t.style.height = "1px",
                            n.style.height = "9px",
                            ae.appendChild(e).appendChild(t).appendChild(n),
                            r = i.getComputedStyle(t),
                            s = parseInt(r.height) > 3,
                            ae.removeChild(e)),
                            s
                        }
                    }))
                }();
                var Ge = ["Webkit", "Moz", "ms"]
                  , Ye = b.createElement("div").style
                  , Je = {};
                function Qe(e) {
                    var t = S.cssProps[e] || Je[e];
                    return t || (e in Ye ? e : Je[e] = function(e) {
                        for (var t = e[0].toUpperCase() + e.slice(1), n = Ge.length; n--; )
                            if ((e = Ge[n] + t)in Ye)
                                return e
                    }(e) || e)
                }
                var Ke = /^(none|table(?!-c[ea]).+)/
                  , Ze = /^--/
                  , et = {
                    position: "absolute",
                    visibility: "hidden",
                    display: "block"
                }
                  , tt = {
                    letterSpacing: "0",
                    fontWeight: "400"
                };
                function nt(e, t, n) {
                    var r = ie.exec(t);
                    return r ? Math.max(0, r[2] - (n || 0)) + (r[3] || "px") : t
                }
                function rt(e, t, n, r, i, o) {
                    var a = "width" === t ? 1 : 0
                      , s = 0
                      , u = 0;
                    if (n === (r ? "border" : "content"))
                        return 0;
                    for (; a < 4; a += 2)
                        "margin" === n && (u += S.css(e, n + oe[a], !0, i)),
                        r ? ("content" === n && (u -= S.css(e, "padding" + oe[a], !0, i)),
                        "margin" !== n && (u -= S.css(e, "border" + oe[a] + "Width", !0, i))) : (u += S.css(e, "padding" + oe[a], !0, i),
                        "padding" !== n ? u += S.css(e, "border" + oe[a] + "Width", !0, i) : s += S.css(e, "border" + oe[a] + "Width", !0, i));
                    return !r && o >= 0 && (u += Math.max(0, Math.ceil(e["offset" + t[0].toUpperCase() + t.slice(1)] - o - u - s - .5)) || 0),
                    u
                }
                function it(e, t, n) {
                    var r = _e(e)
                      , i = (!y.boxSizingReliable() || n) && "border-box" === S.css(e, "boxSizing", !1, r)
                      , o = i
                      , a = Xe(e, t, r)
                      , s = "offset" + t[0].toUpperCase() + t.slice(1);
                    if ($e.test(a)) {
                        if (!n)
                            return a;
                        a = "auto"
                    }
                    return (!y.boxSizingReliable() && i || !y.reliableTrDimensions() && j(e, "tr") || "auto" === a || !parseFloat(a) && "inline" === S.css(e, "display", !1, r)) && e.getClientRects().length && (i = "border-box" === S.css(e, "boxSizing", !1, r),
                    (o = s in e) && (a = e[s])),
                    (a = parseFloat(a) || 0) + rt(e, t, n || (i ? "border" : "content"), o, r, a) + "px"
                }
                function ot(e, t, n, r, i) {
                    return new ot.prototype.init(e,t,n,r,i)
                }
                S.extend({
                    cssHooks: {
                        opacity: {
                            get: function(e, t) {
                                if (t) {
                                    var n = Xe(e, "opacity");
                                    return "" === n ? "1" : n
                                }
                            }
                        }
                    },
                    cssNumber: {
                        animationIterationCount: !0,
                        columnCount: !0,
                        fillOpacity: !0,
                        flexGrow: !0,
                        flexShrink: !0,
                        fontWeight: !0,
                        gridArea: !0,
                        gridColumn: !0,
                        gridColumnEnd: !0,
                        gridColumnStart: !0,
                        gridRow: !0,
                        gridRowEnd: !0,
                        gridRowStart: !0,
                        lineHeight: !0,
                        opacity: !0,
                        order: !0,
                        orphans: !0,
                        widows: !0,
                        zIndex: !0,
                        zoom: !0
                    },
                    cssProps: {},
                    style: function(e, t, n, i) {
                        if (e && 3 !== e.nodeType && 8 !== e.nodeType && e.style) {
                            var o, a, s, u = Y(t), l = Ze.test(t), c = e.style;
                            if (l || (t = Qe(u)),
                            s = S.cssHooks[t] || S.cssHooks[u],
                            void 0 === n)
                                return s && "get"in s && void 0 !== (o = s.get(e, !1, i)) ? o : c[t];
                            "string" === (a = r(n)) && (o = ie.exec(n)) && o[1] && (n = ce(e, t, o),
                            a = "number"),
                            null != n && n === n && ("number" !== a || l || (n += o && o[3] || (S.cssNumber[u] ? "" : "px")),
                            y.clearCloneStyle || "" !== n || 0 !== t.indexOf("background") || (c[t] = "inherit"),
                            s && "set"in s && void 0 === (n = s.set(e, n, i)) || (l ? c.setProperty(t, n) : c[t] = n))
                        }
                    },
                    css: function(e, t, n, r) {
                        var i, o, a, s = Y(t);
                        return Ze.test(t) || (t = Qe(s)),
                        (a = S.cssHooks[t] || S.cssHooks[s]) && "get"in a && (i = a.get(e, !0, n)),
                        void 0 === i && (i = Xe(e, t, r)),
                        "normal" === i && t in tt && (i = tt[t]),
                        "" === n || n ? (o = parseFloat(i),
                        !0 === n || isFinite(o) ? o || 0 : i) : i
                    }
                }),
                S.each(["height", "width"], (function(e, t) {
                    S.cssHooks[t] = {
                        get: function(e, n, r) {
                            if (n)
                                return !Ke.test(S.css(e, "display")) || e.getClientRects().length && e.getBoundingClientRect().width ? it(e, t, r) : ze(e, et, (function() {
                                    return it(e, t, r)
                                }
                                ))
                        },
                        set: function(e, n, r) {
                            var i, o = _e(e), a = !y.scrollboxSize() && "absolute" === o.position, s = (a || r) && "border-box" === S.css(e, "boxSizing", !1, o), u = r ? rt(e, t, r, s, o) : 0;
                            return s && a && (u -= Math.ceil(e["offset" + t[0].toUpperCase() + t.slice(1)] - parseFloat(o[t]) - rt(e, t, "border", !1, o) - .5)),
                            u && (i = ie.exec(n)) && "px" !== (i[3] || "px") && (e.style[t] = n,
                            n = S.css(e, t)),
                            nt(0, n, u)
                        }
                    }
                }
                )),
                S.cssHooks.marginLeft = Ve(y.reliableMarginLeft, (function(e, t) {
                    if (t)
                        return (parseFloat(Xe(e, "marginLeft")) || e.getBoundingClientRect().left - ze(e, {
                            marginLeft: 0
                        }, (function() {
                            return e.getBoundingClientRect().left
                        }
                        ))) + "px"
                }
                )),
                S.each({
                    margin: "",
                    padding: "",
                    border: "Width"
                }, (function(e, t) {
                    S.cssHooks[e + t] = {
                        expand: function(n) {
                            for (var r = 0, i = {}, o = "string" === typeof n ? n.split(" ") : [n]; r < 4; r++)
                                i[e + oe[r] + t] = o[r] || o[r - 2] || o[0];
                            return i
                        }
                    },
                    "margin" !== e && (S.cssHooks[e + t].set = nt)
                }
                )),
                S.fn.extend({
                    css: function(e, t) {
                        return U(this, (function(e, t, n) {
                            var r, i, o = {}, a = 0;
                            if (Array.isArray(t)) {
                                for (r = _e(e),
                                i = t.length; a < i; a++)
                                    o[t[a]] = S.css(e, t[a], !1, r);
                                return o
                            }
                            return void 0 !== n ? S.style(e, t, n) : S.css(e, t)
                        }
                        ), e, t, arguments.length > 1)
                    }
                }),
                S.Tween = ot,
                ot.prototype = {
                    constructor: ot,
                    init: function(e, t, n, r, i, o) {
                        this.elem = e,
                        this.prop = n,
                        this.easing = i || S.easing._default,
                        this.options = t,
                        this.start = this.now = this.cur(),
                        this.end = r,
                        this.unit = o || (S.cssNumber[n] ? "" : "px")
                    },
                    cur: function() {
                        var e = ot.propHooks[this.prop];
                        return e && e.get ? e.get(this) : ot.propHooks._default.get(this)
                    },
                    run: function(e) {
                        var t, n = ot.propHooks[this.prop];
                        return this.options.duration ? this.pos = t = S.easing[this.easing](e, this.options.duration * e, 0, 1, this.options.duration) : this.pos = t = e,
                        this.now = (this.end - this.start) * t + this.start,
                        this.options.step && this.options.step.call(this.elem, this.now, this),
                        n && n.set ? n.set(this) : ot.propHooks._default.set(this),
                        this
                    }
                },
                ot.prototype.init.prototype = ot.prototype,
                ot.propHooks = {
                    _default: {
                        get: function(e) {
                            var t;
                            return 1 !== e.elem.nodeType || null != e.elem[e.prop] && null == e.elem.style[e.prop] ? e.elem[e.prop] : (t = S.css(e.elem, e.prop, "")) && "auto" !== t ? t : 0
                        },
                        set: function(e) {
                            S.fx.step[e.prop] ? S.fx.step[e.prop](e) : 1 !== e.elem.nodeType || !S.cssHooks[e.prop] && null == e.elem.style[Qe(e.prop)] ? e.elem[e.prop] = e.now : S.style(e.elem, e.prop, e.now + e.unit)
                        }
                    }
                },
                ot.propHooks.scrollTop = ot.propHooks.scrollLeft = {
                    set: function(e) {
                        e.elem.nodeType && e.elem.parentNode && (e.elem[e.prop] = e.now)
                    }
                },
                S.easing = {
                    linear: function(e) {
                        return e
                    },
                    swing: function(e) {
                        return .5 - Math.cos(e * Math.PI) / 2
                    },
                    _default: "swing"
                },
                (S.fx = ot.prototype.init).step = {};
                var at, st, ut = /^(?:toggle|show|hide)$/, lt = /queueHooks$/;
                function ct() {
                    st && (!1 === b.hidden && i.requestAnimationFrame ? i.requestAnimationFrame(ct) : i.setTimeout(ct, S.fx.interval),
                    S.fx.tick())
                }
                function ft() {
                    return i.setTimeout((function() {
                        at = void 0
                    }
                    )),
                    at = Date.now()
                }
                function pt(e, t) {
                    var n, r = 0, i = {
                        height: e
                    };
                    for (t = t ? 1 : 0; r < 4; r += 2 - t)
                        i["margin" + (n = oe[r])] = i["padding" + n] = e;
                    return t && (i.opacity = i.width = e),
                    i
                }
                function dt(e, t, n) {
                    for (var r, i = (ht.tweeners[t] || []).concat(ht.tweeners["*"]), o = 0, a = i.length; o < a; o++)
                        if (r = i[o].call(n, t, e))
                            return r
                }
                function ht(e, t, n) {
                    var r, i, o = 0, a = ht.prefilters.length, s = S.Deferred().always((function() {
                        delete u.elem
                    }
                    )), u = function() {
                        if (i)
                            return !1;
                        for (var t = at || ft(), n = Math.max(0, l.startTime + l.duration - t), r = 1 - (n / l.duration || 0), o = 0, a = l.tweens.length; o < a; o++)
                            l.tweens[o].run(r);
                        return s.notifyWith(e, [l, r, n]),
                        r < 1 && a ? n : (a || s.notifyWith(e, [l, 1, 0]),
                        s.resolveWith(e, [l]),
                        !1)
                    }, l = s.promise({
                        elem: e,
                        props: S.extend({}, t),
                        opts: S.extend(!0, {
                            specialEasing: {},
                            easing: S.easing._default
                        }, n),
                        originalProperties: t,
                        originalOptions: n,
                        startTime: at || ft(),
                        duration: n.duration,
                        tweens: [],
                        createTween: function(t, n) {
                            var r = S.Tween(e, l.opts, t, n, l.opts.specialEasing[t] || l.opts.easing);
                            return l.tweens.push(r),
                            r
                        },
                        stop: function(t) {
                            var n = 0
                              , r = t ? l.tweens.length : 0;
                            if (i)
                                return this;
                            for (i = !0; n < r; n++)
                                l.tweens[n].run(1);
                            return t ? (s.notifyWith(e, [l, 1, 0]),
                            s.resolveWith(e, [l, t])) : s.rejectWith(e, [l, t]),
                            this
                        }
                    }), c = l.props;
                    for (!function(e, t) {
                        var n, r, i, o, a;
                        for (n in e)
                            if (i = t[r = Y(n)],
                            o = e[n],
                            Array.isArray(o) && (i = o[1],
                            o = e[n] = o[0]),
                            n !== r && (e[r] = o,
                            delete e[n]),
                            (a = S.cssHooks[r]) && "expand"in a)
                                for (n in o = a.expand(o),
                                delete e[r],
                                o)
                                    n in e || (e[n] = o[n],
                                    t[n] = i);
                            else
                                t[r] = i
                    }(c, l.opts.specialEasing); o < a; o++)
                        if (r = ht.prefilters[o].call(l, e, c, l.opts))
                            return m(r.stop) && (S._queueHooks(l.elem, l.opts.queue).stop = r.stop.bind(r)),
                            r;
                    return S.map(c, dt, l),
                    m(l.opts.start) && l.opts.start.call(e, l),
                    l.progress(l.opts.progress).done(l.opts.done, l.opts.complete).fail(l.opts.fail).always(l.opts.always),
                    S.fx.timer(S.extend(u, {
                        elem: e,
                        anim: l,
                        queue: l.opts.queue
                    })),
                    l
                }
                S.Animation = S.extend(ht, {
                    tweeners: {
                        "*": [function(e, t) {
                            var n = this.createTween(e, t);
                            return ce(n.elem, e, ie.exec(t), n),
                            n
                        }
                        ]
                    },
                    tweener: function(e, t) {
                        m(e) ? (t = e,
                        e = ["*"]) : e = e.match(I);
                        for (var n, r = 0, i = e.length; r < i; r++)
                            n = e[r],
                            ht.tweeners[n] = ht.tweeners[n] || [],
                            ht.tweeners[n].unshift(t)
                    },
                    prefilters: [function(e, t, n) {
                        var r, i, o, a, s, u, l, c, f = "width"in t || "height"in t, p = this, d = {}, h = e.style, g = e.nodeType && le(e), v = K.get(e, "fxshow");
                        for (r in n.queue || (null == (a = S._queueHooks(e, "fx")).unqueued && (a.unqueued = 0,
                        s = a.empty.fire,
                        a.empty.fire = function() {
                            a.unqueued || s()
                        }
                        ),
                        a.unqueued++,
                        p.always((function() {
                            p.always((function() {
                                a.unqueued--,
                                S.queue(e, "fx").length || a.empty.fire()
                            }
                            ))
                        }
                        ))),
                        t)
                            if (i = t[r],
                            ut.test(i)) {
                                if (delete t[r],
                                o = o || "toggle" === i,
                                i === (g ? "hide" : "show")) {
                                    if ("show" !== i || !v || void 0 === v[r])
                                        continue;
                                    g = !0
                                }
                                d[r] = v && v[r] || S.style(e, r)
                            }
                        if ((u = !S.isEmptyObject(t)) || !S.isEmptyObject(d))
                            for (r in f && 1 === e.nodeType && (n.overflow = [h.overflow, h.overflowX, h.overflowY],
                            null == (l = v && v.display) && (l = K.get(e, "display")),
                            "none" === (c = S.css(e, "display")) && (l ? c = l : (de([e], !0),
                            l = e.style.display || l,
                            c = S.css(e, "display"),
                            de([e]))),
                            ("inline" === c || "inline-block" === c && null != l) && "none" === S.css(e, "float") && (u || (p.done((function() {
                                h.display = l
                            }
                            )),
                            null == l && (c = h.display,
                            l = "none" === c ? "" : c)),
                            h.display = "inline-block")),
                            n.overflow && (h.overflow = "hidden",
                            p.always((function() {
                                h.overflow = n.overflow[0],
                                h.overflowX = n.overflow[1],
                                h.overflowY = n.overflow[2]
                            }
                            ))),
                            u = !1,
                            d)
                                u || (v ? "hidden"in v && (g = v.hidden) : v = K.access(e, "fxshow", {
                                    display: l
                                }),
                                o && (v.hidden = !g),
                                g && de([e], !0),
                                p.done((function() {
                                    for (r in g || de([e]),
                                    K.remove(e, "fxshow"),
                                    d)
                                        S.style(e, r, d[r])
                                }
                                ))),
                                u = dt(g ? v[r] : 0, r, p),
                                r in v || (v[r] = u.start,
                                g && (u.end = u.start,
                                u.start = 0))
                    }
                    ],
                    prefilter: function(e, t) {
                        t ? ht.prefilters.unshift(e) : ht.prefilters.push(e)
                    }
                }),
                S.speed = function(e, t, n) {
                    var i = e && "object" === r(e) ? S.extend({}, e) : {
                        complete: n || !n && t || m(e) && e,
                        duration: e,
                        easing: n && t || t && !m(t) && t
                    };
                    return S.fx.off ? i.duration = 0 : "number" !== typeof i.duration && (i.duration in S.fx.speeds ? i.duration = S.fx.speeds[i.duration] : i.duration = S.fx.speeds._default),
                    null != i.queue && !0 !== i.queue || (i.queue = "fx"),
                    i.old = i.complete,
                    i.complete = function() {
                        m(i.old) && i.old.call(this),
                        i.queue && S.dequeue(this, i.queue)
                    }
                    ,
                    i
                }
                ,
                S.fn.extend({
                    fadeTo: function(e, t, n, r) {
                        return this.filter(le).css("opacity", 0).show().end().animate({
                            opacity: t
                        }, e, n, r)
                    },
                    animate: function(e, t, n, r) {
                        var i = S.isEmptyObject(e)
                          , o = S.speed(t, n, r)
                          , a = function() {
                            var t = ht(this, S.extend({}, e), o);
                            (i || K.get(this, "finish")) && t.stop(!0)
                        };
                        return a.finish = a,
                        i || !1 === o.queue ? this.each(a) : this.queue(o.queue, a)
                    },
                    stop: function(e, t, n) {
                        var r = function(e) {
                            var t = e.stop;
                            delete e.stop,
                            t(n)
                        };
                        return "string" !== typeof e && (n = t,
                        t = e,
                        e = void 0),
                        t && this.queue(e || "fx", []),
                        this.each((function() {
                            var t = !0
                              , i = null != e && e + "queueHooks"
                              , o = S.timers
                              , a = K.get(this);
                            if (i)
                                a[i] && a[i].stop && r(a[i]);
                            else
                                for (i in a)
                                    a[i] && a[i].stop && lt.test(i) && r(a[i]);
                            for (i = o.length; i--; )
                                o[i].elem !== this || null != e && o[i].queue !== e || (o[i].anim.stop(n),
                                t = !1,
                                o.splice(i, 1));
                            !t && n || S.dequeue(this, e)
                        }
                        ))
                    },
                    finish: function(e) {
                        return !1 !== e && (e = e || "fx"),
                        this.each((function() {
                            var t, n = K.get(this), r = n[e + "queue"], i = n[e + "queueHooks"], o = S.timers, a = r ? r.length : 0;
                            for (n.finish = !0,
                            S.queue(this, e, []),
                            i && i.stop && i.stop.call(this, !0),
                            t = o.length; t--; )
                                o[t].elem === this && o[t].queue === e && (o[t].anim.stop(!0),
                                o.splice(t, 1));
                            for (t = 0; t < a; t++)
                                r[t] && r[t].finish && r[t].finish.call(this);
                            delete n.finish
                        }
                        ))
                    }
                }),
                S.each(["toggle", "show", "hide"], (function(e, t) {
                    var n = S.fn[t];
                    S.fn[t] = function(e, r, i) {
                        return null == e || "boolean" === typeof e ? n.apply(this, arguments) : this.animate(pt(t, !0), e, r, i)
                    }
                }
                )),
                S.each({
                    slideDown: pt("show"),
                    slideUp: pt("hide"),
                    slideToggle: pt("toggle"),
                    fadeIn: {
                        opacity: "show"
                    },
                    fadeOut: {
                        opacity: "hide"
                    },
                    fadeToggle: {
                        opacity: "toggle"
                    }
                }, (function(e, t) {
                    S.fn[e] = function(e, n, r) {
                        return this.animate(t, e, n, r)
                    }
                }
                )),
                S.timers = [],
                S.fx.tick = function() {
                    var e, t = 0, n = S.timers;
                    for (at = Date.now(); t < n.length; t++)
                        (e = n[t])() || n[t] !== e || n.splice(t--, 1);
                    n.length || S.fx.stop(),
                    at = void 0
                }
                ,
                S.fx.timer = function(e) {
                    S.timers.push(e),
                    S.fx.start()
                }
                ,
                S.fx.interval = 13,
                S.fx.start = function() {
                    st || (st = !0,
                    ct())
                }
                ,
                S.fx.stop = function() {
                    st = null
                }
                ,
                S.fx.speeds = {
                    slow: 600,
                    fast: 200,
                    _default: 400
                },
                S.fn.delay = function(e, t) {
                    return e = S.fx && S.fx.speeds[e] || e,
                    t = t || "fx",
                    this.queue(t, (function(t, n) {
                        var r = i.setTimeout(t, e);
                        n.stop = function() {
                            i.clearTimeout(r)
                        }
                    }
                    ))
                }
                ,
                function() {
                    var e = b.createElement("input")
                      , t = b.createElement("select").appendChild(b.createElement("option"));
                    e.type = "checkbox",
                    y.checkOn = "" !== e.value,
                    y.optSelected = t.selected,
                    (e = b.createElement("input")).value = "t",
                    e.type = "radio",
                    y.radioValue = "t" === e.value
                }();
                var gt, vt = S.expr.attrHandle;
                S.fn.extend({
                    attr: function(e, t) {
                        return U(this, S.attr, e, t, arguments.length > 1)
                    },
                    removeAttr: function(e) {
                        return this.each((function() {
                            S.removeAttr(this, e)
                        }
                        ))
                    }
                }),
                S.extend({
                    attr: function(e, t, n) {
                        var r, i, o = e.nodeType;
                        if (3 !== o && 8 !== o && 2 !== o)
                            return "undefined" === typeof e.getAttribute ? S.prop(e, t, n) : (1 === o && S.isXMLDoc(e) || (i = S.attrHooks[t.toLowerCase()] || (S.expr.match.bool.test(t) ? gt : void 0)),
                            void 0 !== n ? null === n ? void S.removeAttr(e, t) : i && "set"in i && void 0 !== (r = i.set(e, n, t)) ? r : (e.setAttribute(t, n + ""),
                            n) : i && "get"in i && null !== (r = i.get(e, t)) ? r : null == (r = S.find.attr(e, t)) ? void 0 : r)
                    },
                    attrHooks: {
                        type: {
                            set: function(e, t) {
                                if (!y.radioValue && "radio" === t && j(e, "input")) {
                                    var n = e.value;
                                    return e.setAttribute("type", t),
                                    n && (e.value = n),
                                    t
                                }
                            }
                        }
                    },
                    removeAttr: function(e, t) {
                        var n, r = 0, i = t && t.match(I);
                        if (i && 1 === e.nodeType)
                            for (; n = i[r++]; )
                                e.removeAttribute(n)
                    }
                }),
                gt = {
                    set: function(e, t, n) {
                        return !1 === t ? S.removeAttr(e, n) : e.setAttribute(n, n),
                        n
                    }
                },
                S.each(S.expr.match.bool.source.match(/\w+/g), (function(e, t) {
                    var n = vt[t] || S.find.attr;
                    vt[t] = function(e, t, r) {
                        var i, o, a = t.toLowerCase();
                        return r || (o = vt[a],
                        vt[a] = i,
                        i = null != n(e, t, r) ? a : null,
                        vt[a] = o),
                        i
                    }
                }
                ));
                var yt = /^(?:input|select|textarea|button)$/i
                  , mt = /^(?:a|area)$/i;
                function xt(e) {
                    return (e.match(I) || []).join(" ")
                }
                function bt(e) {
                    return e.getAttribute && e.getAttribute("class") || ""
                }
                function wt(e) {
                    return Array.isArray(e) ? e : "string" === typeof e && e.match(I) || []
                }
                S.fn.extend({
                    prop: function(e, t) {
                        return U(this, S.prop, e, t, arguments.length > 1)
                    },
                    removeProp: function(e) {
                        return this.each((function() {
                            delete this[S.propFix[e] || e]
                        }
                        ))
                    }
                }),
                S.extend({
                    prop: function(e, t, n) {
                        var r, i, o = e.nodeType;
                        if (3 !== o && 8 !== o && 2 !== o)
                            return 1 === o && S.isXMLDoc(e) || (t = S.propFix[t] || t,
                            i = S.propHooks[t]),
                            void 0 !== n ? i && "set"in i && void 0 !== (r = i.set(e, n, t)) ? r : e[t] = n : i && "get"in i && null !== (r = i.get(e, t)) ? r : e[t]
                    },
                    propHooks: {
                        tabIndex: {
                            get: function(e) {
                                var t = S.find.attr(e, "tabindex");
                                return t ? parseInt(t, 10) : yt.test(e.nodeName) || mt.test(e.nodeName) && e.href ? 0 : -1
                            }
                        }
                    },
                    propFix: {
                        for: "htmlFor",
                        class: "className"
                    }
                }),
                y.optSelected || (S.propHooks.selected = {
                    get: function(e) {
                        var t = e.parentNode;
                        return t && t.parentNode && t.parentNode.selectedIndex,
                        null
                    },
                    set: function(e) {
                        var t = e.parentNode;
                        t && (t.selectedIndex,
                        t.parentNode && t.parentNode.selectedIndex)
                    }
                }),
                S.each(["tabIndex", "readOnly", "maxLength", "cellSpacing", "cellPadding", "rowSpan", "colSpan", "useMap", "frameBorder", "contentEditable"], (function() {
                    S.propFix[this.toLowerCase()] = this
                }
                )),
                S.fn.extend({
                    addClass: function(e) {
                        var t, n, r, i, o, a, s, u = 0;
                        if (m(e))
                            return this.each((function(t) {
                                S(this).addClass(e.call(this, t, bt(this)))
                            }
                            ));
                        if ((t = wt(e)).length)
                            for (; n = this[u++]; )
                                if (i = bt(n),
                                r = 1 === n.nodeType && " " + xt(i) + " ") {
                                    for (a = 0; o = t[a++]; )
                                        r.indexOf(" " + o + " ") < 0 && (r += o + " ");
                                    i !== (s = xt(r)) && n.setAttribute("class", s)
                                }
                        return this
                    },
                    removeClass: function(e) {
                        var t, n, r, i, o, a, s, u = 0;
                        if (m(e))
                            return this.each((function(t) {
                                S(this).removeClass(e.call(this, t, bt(this)))
                            }
                            ));
                        if (!arguments.length)
                            return this.attr("class", "");
                        if ((t = wt(e)).length)
                            for (; n = this[u++]; )
                                if (i = bt(n),
                                r = 1 === n.nodeType && " " + xt(i) + " ") {
                                    for (a = 0; o = t[a++]; )
                                        for (; r.indexOf(" " + o + " ") > -1; )
                                            r = r.replace(" " + o + " ", " ");
                                    i !== (s = xt(r)) && n.setAttribute("class", s)
                                }
                        return this
                    },
                    toggleClass: function(e, t) {
                        var n = r(e)
                          , i = "string" === n || Array.isArray(e);
                        return "boolean" === typeof t && i ? t ? this.addClass(e) : this.removeClass(e) : m(e) ? this.each((function(n) {
                            S(this).toggleClass(e.call(this, n, bt(this), t), t)
                        }
                        )) : this.each((function() {
                            var t, r, o, a;
                            if (i)
                                for (r = 0,
                                o = S(this),
                                a = wt(e); t = a[r++]; )
                                    o.hasClass(t) ? o.removeClass(t) : o.addClass(t);
                            else
                                void 0 !== e && "boolean" !== n || ((t = bt(this)) && K.set(this, "__className__", t),
                                this.setAttribute && this.setAttribute("class", t || !1 === e ? "" : K.get(this, "__className__") || ""))
                        }
                        ))
                    },
                    hasClass: function(e) {
                        var t, n, r = 0;
                        for (t = " " + e + " "; n = this[r++]; )
                            if (1 === n.nodeType && (" " + xt(bt(n)) + " ").indexOf(t) > -1)
                                return !0;
                        return !1
                    }
                });
                var Tt = /\r/g;
                S.fn.extend({
                    val: function(e) {
                        var t, n, r, i = this[0];
                        return arguments.length ? (r = m(e),
                        this.each((function(n) {
                            var i;
                            1 === this.nodeType && (null == (i = r ? e.call(this, n, S(this).val()) : e) ? i = "" : "number" === typeof i ? i += "" : Array.isArray(i) && (i = S.map(i, (function(e) {
                                return null == e ? "" : e + ""
                            }
                            ))),
                            (t = S.valHooks[this.type] || S.valHooks[this.nodeName.toLowerCase()]) && "set"in t && void 0 !== t.set(this, i, "value") || (this.value = i))
                        }
                        ))) : i ? (t = S.valHooks[i.type] || S.valHooks[i.nodeName.toLowerCase()]) && "get"in t && void 0 !== (n = t.get(i, "value")) ? n : "string" === typeof (n = i.value) ? n.replace(Tt, "") : null == n ? "" : n : void 0
                    }
                }),
                S.extend({
                    valHooks: {
                        option: {
                            get: function(e) {
                                var t = S.find.attr(e, "value");
                                return null != t ? t : xt(S.text(e))
                            }
                        },
                        select: {
                            get: function(e) {
                                var t, n, r, i = e.options, o = e.selectedIndex, a = "select-one" === e.type, s = a ? null : [], u = a ? o + 1 : i.length;
                                for (r = o < 0 ? u : a ? o : 0; r < u; r++)
                                    if (((n = i[r]).selected || r === o) && !n.disabled && (!n.parentNode.disabled || !j(n.parentNode, "optgroup"))) {
                                        if (t = S(n).val(),
                                        a)
                                            return t;
                                        s.push(t)
                                    }
                                return s
                            },
                            set: function(e, t) {
                                for (var n, r, i = e.options, o = S.makeArray(t), a = i.length; a--; )
                                    ((r = i[a]).selected = S.inArray(S.valHooks.option.get(r), o) > -1) && (n = !0);
                                return n || (e.selectedIndex = -1),
                                o
                            }
                        }
                    }
                }),
                S.each(["radio", "checkbox"], (function() {
                    S.valHooks[this] = {
                        set: function(e, t) {
                            if (Array.isArray(t))
                                return e.checked = S.inArray(S(e).val(), t) > -1
                        }
                    },
                    y.checkOn || (S.valHooks[this].get = function(e) {
                        return null === e.getAttribute("value") ? "on" : e.value
                    }
                    )
                }
                )),
                y.focusin = "onfocusin"in i;
                var Ct = /^(?:focusinfocus|focusoutblur)$/
                  , St = function(e) {
                    e.stopPropagation()
                };
                S.extend(S.event, {
                    trigger: function(e, t, n, o) {
                        var a, s, u, l, c, f, p, d, g = [n || b], v = h.call(e, "type") ? e.type : e, y = h.call(e, "namespace") ? e.namespace.split(".") : [];
                        if (s = d = u = n = n || b,
                        3 !== n.nodeType && 8 !== n.nodeType && !Ct.test(v + S.event.triggered) && (v.indexOf(".") > -1 && (y = v.split("."),
                        v = y.shift(),
                        y.sort()),
                        c = v.indexOf(":") < 0 && "on" + v,
                        (e = e[S.expando] ? e : new S.Event(v,"object" === r(e) && e)).isTrigger = o ? 2 : 3,
                        e.namespace = y.join("."),
                        e.rnamespace = e.namespace ? new RegExp("(^|\\.)" + y.join("\\.(?:.*\\.|)") + "(\\.|$)") : null,
                        e.result = void 0,
                        e.target || (e.target = n),
                        t = null == t ? [e] : S.makeArray(t, [e]),
                        p = S.event.special[v] || {},
                        o || !p.trigger || !1 !== p.trigger.apply(n, t))) {
                            if (!o && !p.noBubble && !x(n)) {
                                for (l = p.delegateType || v,
                                Ct.test(l + v) || (s = s.parentNode); s; s = s.parentNode)
                                    g.push(s),
                                    u = s;
                                u === (n.ownerDocument || b) && g.push(u.defaultView || u.parentWindow || i)
                            }
                            for (a = 0; (s = g[a++]) && !e.isPropagationStopped(); )
                                d = s,
                                e.type = a > 1 ? l : p.bindType || v,
                                (f = (K.get(s, "events") || Object.create(null))[e.type] && K.get(s, "handle")) && f.apply(s, t),
                                (f = c && s[c]) && f.apply && J(s) && (e.result = f.apply(s, t),
                                !1 === e.result && e.preventDefault());
                            return e.type = v,
                            o || e.isDefaultPrevented() || p._default && !1 !== p._default.apply(g.pop(), t) || !J(n) || c && m(n[v]) && !x(n) && ((u = n[c]) && (n[c] = null),
                            S.event.triggered = v,
                            e.isPropagationStopped() && d.addEventListener(v, St),
                            n[v](),
                            e.isPropagationStopped() && d.removeEventListener(v, St),
                            S.event.triggered = void 0,
                            u && (n[c] = u)),
                            e.result
                        }
                    },
                    simulate: function(e, t, n) {
                        var r = S.extend(new S.Event, n, {
                            type: e,
                            isSimulated: !0
                        });
                        S.event.trigger(r, null, t)
                    }
                }),
                S.fn.extend({
                    trigger: function(e, t) {
                        return this.each((function() {
                            S.event.trigger(e, t, this)
                        }
                        ))
                    },
                    triggerHandler: function(e, t) {
                        var n = this[0];
                        if (n)
                            return S.event.trigger(e, t, n, !0)
                    }
                }),
                y.focusin || S.each({
                    focus: "focusin",
                    blur: "focusout"
                }, (function(e, t) {
                    var n = function(e) {
                        S.event.simulate(t, e.target, S.event.fix(e))
                    };
                    S.event.special[t] = {
                        setup: function() {
                            var r = this.ownerDocument || this.document || this
                              , i = K.access(r, t);
                            i || r.addEventListener(e, n, !0),
                            K.access(r, t, (i || 0) + 1)
                        },
                        teardown: function() {
                            var r = this.ownerDocument || this.document || this
                              , i = K.access(r, t) - 1;
                            i ? K.access(r, t, i) : (r.removeEventListener(e, n, !0),
                            K.remove(r, t))
                        }
                    }
                }
                ));
                var Et = i.location
                  , kt = {
                    guid: Date.now()
                }
                  , At = /\?/;
                S.parseXML = function(e) {
                    var t;
                    if (!e || "string" !== typeof e)
                        return null;
                    try {
                        t = (new i.DOMParser).parseFromString(e, "text/xml")
                    } catch (n) {
                        t = void 0
                    }
                    return t && !t.getElementsByTagName("parsererror").length || S.error("Invalid XML: " + e),
                    t
                }
                ;
                var Nt = /\[\]$/
                  , Dt = /\r?\n/g
                  , jt = /^(?:submit|button|image|reset|file)$/i
                  , qt = /^(?:input|select|textarea|keygen)/i;
                function Lt(e, t, n, i) {
                    var o;
                    if (Array.isArray(t))
                        S.each(t, (function(t, o) {
                            n || Nt.test(e) ? i(e, o) : Lt(e + "[" + ("object" === r(o) && null != o ? t : "") + "]", o, n, i)
                        }
                        ));
                    else if (n || "object" !== C(t))
                        i(e, t);
                    else
                        for (o in t)
                            Lt(e + "[" + o + "]", t[o], n, i)
                }
                S.param = function(e, t) {
                    var n, r = [], i = function(e, t) {
                        var n = m(t) ? t() : t;
                        r[r.length] = encodeURIComponent(e) + "=" + encodeURIComponent(null == n ? "" : n)
                    };
                    if (null == e)
                        return "";
                    if (Array.isArray(e) || e.jquery && !S.isPlainObject(e))
                        S.each(e, (function() {
                            i(this.name, this.value)
                        }
                        ));
                    else
                        for (n in e)
                            Lt(n, e[n], t, i);
                    return r.join("&")
                }
                ,
                S.fn.extend({
                    serialize: function() {
                        return S.param(this.serializeArray())
                    },
                    serializeArray: function() {
                        return this.map((function() {
                            var e = S.prop(this, "elements");
                            return e ? S.makeArray(e) : this
                        }
                        )).filter((function() {
                            var e = this.type;
                            return this.name && !S(this).is(":disabled") && qt.test(this.nodeName) && !jt.test(e) && (this.checked || !ve.test(e))
                        }
                        )).map((function(e, t) {
                            var n = S(this).val();
                            return null == n ? null : Array.isArray(n) ? S.map(n, (function(e) {
                                return {
                                    name: t.name,
                                    value: e.replace(Dt, "\r\n")
                                }
                            }
                            )) : {
                                name: t.name,
                                value: n.replace(Dt, "\r\n")
                            }
                        }
                        )).get()
                    }
                });
                var Ht = /%20/g
                  , Ot = /#.*$/
                  , Pt = /([?&])_=[^&]*/
                  , Rt = /^(.*?):[ \t]*([^\r\n]*)$/gm
                  , Mt = /^(?:GET|HEAD)$/
                  , It = /^\/\//
                  , Wt = {}
                  , Ft = {}
                  , Bt = "*/".concat("*")
                  , $t = b.createElement("a");
                function _t(e) {
                    return function(t, n) {
                        "string" !== typeof t && (n = t,
                        t = "*");
                        var r, i = 0, o = t.toLowerCase().match(I) || [];
                        if (m(n))
                            for (; r = o[i++]; )
                                "+" === r[0] ? (r = r.slice(1) || "*",
                                (e[r] = e[r] || []).unshift(n)) : (e[r] = e[r] || []).push(n)
                    }
                }
                function zt(e, t, n, r) {
                    var i = {}
                      , o = e === Ft;
                    function a(s) {
                        var u;
                        return i[s] = !0,
                        S.each(e[s] || [], (function(e, s) {
                            var l = s(t, n, r);
                            return "string" !== typeof l || o || i[l] ? o ? !(u = l) : void 0 : (t.dataTypes.unshift(l),
                            a(l),
                            !1)
                        }
                        )),
                        u
                    }
                    return a(t.dataTypes[0]) || !i["*"] && a("*")
                }
                function Ut(e, t) {
                    var n, r, i = S.ajaxSettings.flatOptions || {};
                    for (n in t)
                        void 0 !== t[n] && ((i[n] ? e : r || (r = {}))[n] = t[n]);
                    return r && S.extend(!0, e, r),
                    e
                }
                $t.href = Et.href,
                S.extend({
                    active: 0,
                    lastModified: {},
                    etag: {},
                    ajaxSettings: {
                        url: Et.href,
                        type: "GET",
                        isLocal: /^(?:about|app|app-storage|.+-extension|file|res|widget):$/.test(Et.protocol),
                        global: !0,
                        processData: !0,
                        async: !0,
                        contentType: "application/x-www-form-urlencoded; charset=UTF-8",
                        accepts: {
                            "*": Bt,
                            text: "text/plain",
                            html: "text/html",
                            xml: "application/xml, text/xml",
                            json: "application/json, text/javascript"
                        },
                        contents: {
                            xml: /\bxml\b/,
                            html: /\bhtml/,
                            json: /\bjson\b/
                        },
                        responseFields: {
                            xml: "responseXML",
                            text: "responseText",
                            json: "responseJSON"
                        },
                        converters: {
                            "* text": String,
                            "text html": !0,
                            "text json": JSON.parse,
                            "text xml": S.parseXML
                        },
                        flatOptions: {
                            url: !0,
                            context: !0
                        }
                    },
                    ajaxSetup: function(e, t) {
                        return t ? Ut(Ut(e, S.ajaxSettings), t) : Ut(S.ajaxSettings, e)
                    },
                    ajaxPrefilter: _t(Wt),
                    ajaxTransport: _t(Ft),
                    ajax: function(e, t) {
                        "object" === r(e) && (t = e,
                        e = void 0);
                        var n, o, a, s, u, l, c, f, p, d, h = S.ajaxSetup({}, t = t || {}), g = h.context || h, v = h.context && (g.nodeType || g.jquery) ? S(g) : S.event, y = S.Deferred(), m = S.Callbacks("once memory"), x = h.statusCode || {}, w = {}, T = {}, C = "canceled", E = {
                            readyState: 0,
                            getResponseHeader: function(e) {
                                var t;
                                if (c) {
                                    if (!s)
                                        for (s = {}; t = Rt.exec(a); )
                                            s[t[1].toLowerCase() + " "] = (s[t[1].toLowerCase() + " "] || []).concat(t[2]);
                                    t = s[e.toLowerCase() + " "]
                                }
                                return null == t ? null : t.join(", ")
                            },
                            getAllResponseHeaders: function() {
                                return c ? a : null
                            },
                            setRequestHeader: function(e, t) {
                                return null == c && (e = T[e.toLowerCase()] = T[e.toLowerCase()] || e,
                                w[e] = t),
                                this
                            },
                            overrideMimeType: function(e) {
                                return null == c && (h.mimeType = e),
                                this
                            },
                            statusCode: function(e) {
                                var t;
                                if (e)
                                    if (c)
                                        E.always(e[E.status]);
                                    else
                                        for (t in e)
                                            x[t] = [x[t], e[t]];
                                return this
                            },
                            abort: function(e) {
                                var t = e || C;
                                return n && n.abort(t),
                                k(0, t),
                                this
                            }
                        };
                        if (y.promise(E),
                        h.url = ((e || h.url || Et.href) + "").replace(It, Et.protocol + "//"),
                        h.type = t.method || t.type || h.method || h.type,
                        h.dataTypes = (h.dataType || "*").toLowerCase().match(I) || [""],
                        null == h.crossDomain) {
                            l = b.createElement("a");
                            try {
                                l.href = h.url,
                                l.href = l.href,
                                h.crossDomain = $t.protocol + "//" + $t.host !== l.protocol + "//" + l.host
                            } catch (A) {
                                h.crossDomain = !0
                            }
                        }
                        if (h.data && h.processData && "string" !== typeof h.data && (h.data = S.param(h.data, h.traditional)),
                        zt(Wt, h, t, E),
                        c)
                            return E;
                        for (p in (f = S.event && h.global) && 0 === S.active++ && S.event.trigger("ajaxStart"),
                        h.type = h.type.toUpperCase(),
                        h.hasContent = !Mt.test(h.type),
                        o = h.url.replace(Ot, ""),
                        h.hasContent ? h.data && h.processData && 0 === (h.contentType || "").indexOf("application/x-www-form-urlencoded") && (h.data = h.data.replace(Ht, "+")) : (d = h.url.slice(o.length),
                        h.data && (h.processData || "string" === typeof h.data) && (o += (At.test(o) ? "&" : "?") + h.data,
                        delete h.data),
                        !1 === h.cache && (o = o.replace(Pt, "$1"),
                        d = (At.test(o) ? "&" : "?") + "_=" + kt.guid++ + d),
                        h.url = o + d),
                        h.ifModified && (S.lastModified[o] && E.setRequestHeader("If-Modified-Since", S.lastModified[o]),
                        S.etag[o] && E.setRequestHeader("If-None-Match", S.etag[o])),
                        (h.data && h.hasContent && !1 !== h.contentType || t.contentType) && E.setRequestHeader("Content-Type", h.contentType),
                        E.setRequestHeader("Accept", h.dataTypes[0] && h.accepts[h.dataTypes[0]] ? h.accepts[h.dataTypes[0]] + ("*" !== h.dataTypes[0] ? ", " + Bt + "; q=0.01" : "") : h.accepts["*"]),
                        h.headers)
                            E.setRequestHeader(p, h.headers[p]);
                        if (h.beforeSend && (!1 === h.beforeSend.call(g, E, h) || c))
                            return E.abort();
                        if (C = "abort",
                        m.add(h.complete),
                        E.done(h.success),
                        E.fail(h.error),
                        n = zt(Ft, h, t, E)) {
                            if (E.readyState = 1,
                            f && v.trigger("ajaxSend", [E, h]),
                            c)
                                return E;
                            h.async && h.timeout > 0 && (u = i.setTimeout((function() {
                                E.abort("timeout")
                            }
                            ), h.timeout));
                            try {
                                c = !1,
                                n.send(w, k)
                            } catch (A) {
                                if (c)
                                    throw A;
                                k(-1, A)
                            }
                        } else
                            k(-1, "No Transport");
                        function k(e, t, r, s) {
                            var l, p, d, b, w, T = t;
                            c || (c = !0,
                            u && i.clearTimeout(u),
                            n = void 0,
                            a = s || "",
                            E.readyState = e > 0 ? 4 : 0,
                            l = e >= 200 && e < 300 || 304 === e,
                            r && (b = function(e, t, n) {
                                for (var r, i, o, a, s = e.contents, u = e.dataTypes; "*" === u[0]; )
                                    u.shift(),
                                    void 0 === r && (r = e.mimeType || t.getResponseHeader("Content-Type"));
                                if (r)
                                    for (i in s)
                                        if (s[i] && s[i].test(r)) {
                                            u.unshift(i);
                                            break
                                        }
                                if (u[0]in n)
                                    o = u[0];
                                else {
                                    for (i in n) {
                                        if (!u[0] || e.converters[i + " " + u[0]]) {
                                            o = i;
                                            break
                                        }
                                        a || (a = i)
                                    }
                                    o = o || a
                                }
                                if (o)
                                    return o !== u[0] && u.unshift(o),
                                    n[o]
                            }(h, E, r)),
                            !l && S.inArray("script", h.dataTypes) > -1 && (h.converters["text script"] = function() {}
                            ),
                            b = function(e, t, n, r) {
                                var i, o, a, s, u, l = {}, c = e.dataTypes.slice();
                                if (c[1])
                                    for (a in e.converters)
                                        l[a.toLowerCase()] = e.converters[a];
                                for (o = c.shift(); o; )
                                    if (e.responseFields[o] && (n[e.responseFields[o]] = t),
                                    !u && r && e.dataFilter && (t = e.dataFilter(t, e.dataType)),
                                    u = o,
                                    o = c.shift())
                                        if ("*" === o)
                                            o = u;
                                        else if ("*" !== u && u !== o) {
                                            if (!(a = l[u + " " + o] || l["* " + o]))
                                                for (i in l)
                                                    if ((s = i.split(" "))[1] === o && (a = l[u + " " + s[0]] || l["* " + s[0]])) {
                                                        !0 === a ? a = l[i] : !0 !== l[i] && (o = s[0],
                                                        c.unshift(s[1]));
                                                        break
                                                    }
                                            if (!0 !== a)
                                                if (a && e.throws)
                                                    t = a(t);
                                                else
                                                    try {
                                                        t = a(t)
                                                    } catch (A) {
                                                        return {
                                                            state: "parsererror",
                                                            error: a ? A : "No conversion from " + u + " to " + o
                                                        }
                                                    }
                                        }
                                return {
                                    state: "success",
                                    data: t
                                }
                            }(h, b, E, l),
                            l ? (h.ifModified && ((w = E.getResponseHeader("Last-Modified")) && (S.lastModified[o] = w),
                            (w = E.getResponseHeader("etag")) && (S.etag[o] = w)),
                            204 === e || "HEAD" === h.type ? T = "nocontent" : 304 === e ? T = "notmodified" : (T = b.state,
                            p = b.data,
                            l = !(d = b.error))) : (d = T,
                            !e && T || (T = "error",
                            e < 0 && (e = 0))),
                            E.status = e,
                            E.statusText = (t || T) + "",
                            l ? y.resolveWith(g, [p, T, E]) : y.rejectWith(g, [E, T, d]),
                            E.statusCode(x),
                            x = void 0,
                            f && v.trigger(l ? "ajaxSuccess" : "ajaxError", [E, h, l ? p : d]),
                            m.fireWith(g, [E, T]),
                            f && (v.trigger("ajaxComplete", [E, h]),
                            --S.active || S.event.trigger("ajaxStop")))
                        }
                        return E
                    },
                    getJSON: function(e, t, n) {
                        return S.get(e, t, n, "json")
                    },
                    getScript: function(e, t) {
                        return S.get(e, void 0, t, "script")
                    }
                }),
                S.each(["get", "post"], (function(e, t) {
                    S[t] = function(e, n, r, i) {
                        return m(n) && (i = i || r,
                        r = n,
                        n = void 0),
                        S.ajax(S.extend({
                            url: e,
                            type: t,
                            dataType: i,
                            data: n,
                            success: r
                        }, S.isPlainObject(e) && e))
                    }
                }
                )),
                S.ajaxPrefilter((function(e) {
                    var t;
                    for (t in e.headers)
                        "content-type" === t.toLowerCase() && (e.contentType = e.headers[t] || "")
                }
                )),
                S._evalUrl = function(e, t, n) {
                    return S.ajax({
                        url: e,
                        type: "GET",
                        dataType: "script",
                        cache: !0,
                        async: !1,
                        global: !1,
                        converters: {
                            "text script": function() {}
                        },
                        dataFilter: function(e) {
                            S.globalEval(e, t, n)
                        }
                    })
                }
                ,
                S.fn.extend({
                    wrapAll: function(e) {
                        var t;
                        return this[0] && (m(e) && (e = e.call(this[0])),
                        t = S(e, this[0].ownerDocument).eq(0).clone(!0),
                        this[0].parentNode && t.insertBefore(this[0]),
                        t.map((function() {
                            for (var e = this; e.firstElementChild; )
                                e = e.firstElementChild;
                            return e
                        }
                        )).append(this)),
                        this
                    },
                    wrapInner: function(e) {
                        return m(e) ? this.each((function(t) {
                            S(this).wrapInner(e.call(this, t))
                        }
                        )) : this.each((function() {
                            var t = S(this)
                              , n = t.contents();
                            n.length ? n.wrapAll(e) : t.append(e)
                        }
                        ))
                    },
                    wrap: function(e) {
                        var t = m(e);
                        return this.each((function(n) {
                            S(this).wrapAll(t ? e.call(this, n) : e)
                        }
                        ))
                    },
                    unwrap: function(e) {
                        return this.parent(e).not("body").each((function() {
                            S(this).replaceWith(this.childNodes)
                        }
                        )),
                        this
                    }
                }),
                S.expr.pseudos.hidden = function(e) {
                    return !S.expr.pseudos.visible(e)
                }
                ,
                S.expr.pseudos.visible = function(e) {
                    return !!(e.offsetWidth || e.offsetHeight || e.getClientRects().length)
                }
                ,
                S.ajaxSettings.xhr = function() {
                    try {
                        return new i.XMLHttpRequest
                    } catch (e) {}
                }
                ;
                var Xt = {
                    0: 200,
                    1223: 204
                }
                  , Vt = S.ajaxSettings.xhr();
                y.cors = !!Vt && "withCredentials"in Vt,
                y.ajax = Vt = !!Vt,
                S.ajaxTransport((function(e) {
                    var t, n;
                    if (y.cors || Vt && !e.crossDomain)
                        return {
                            send: function(r, o) {
                                var a, s = e.xhr();
                                if (s.open(e.type, e.url, e.async, e.username, e.password),
                                e.xhrFields)
                                    for (a in e.xhrFields)
                                        s[a] = e.xhrFields[a];
                                for (a in e.mimeType && s.overrideMimeType && s.overrideMimeType(e.mimeType),
                                e.crossDomain || r["X-Requested-With"] || (r["X-Requested-With"] = "XMLHttpRequest"),
                                r)
                                    s.setRequestHeader(a, r[a]);
                                t = function(e) {
                                    return function() {
                                        t && (t = n = s.onload = s.onerror = s.onabort = s.ontimeout = s.onreadystatechange = null,
                                        "abort" === e ? s.abort() : "error" === e ? "number" !== typeof s.status ? o(0, "error") : o(s.status, s.statusText) : o(Xt[s.status] || s.status, s.statusText, "text" !== (s.responseType || "text") || "string" !== typeof s.responseText ? {
                                            binary: s.response
                                        } : {
                                            text: s.responseText
                                        }, s.getAllResponseHeaders()))
                                    }
                                }
                                ,
                                s.onload = t(),
                                n = s.onerror = s.ontimeout = t("error"),
                                void 0 !== s.onabort ? s.onabort = n : s.onreadystatechange = function() {
                                    4 === s.readyState && i.setTimeout((function() {
                                        t && n()
                                    }
                                    ))
                                }
                                ,
                                t = t("abort");
                                try {
                                    s.send(e.hasContent && e.data || null)
                                } catch (u) {
                                    if (t)
                                        throw u
                                }
                            },
                            abort: function() {
                                t && t()
                            }
                        }
                }
                )),
                S.ajaxPrefilter((function(e) {
                    e.crossDomain && (e.contents.script = !1)
                }
                )),
                S.ajaxSetup({
                    accepts: {
                        script: "text/javascript, application/javascript, application/ecmascript, application/x-ecmascript"
                    },
                    contents: {
                        script: /\b(?:java|ecma)script\b/
                    },
                    converters: {
                        "text script": function(e) {
                            return S.globalEval(e),
                            e
                        }
                    }
                }),
                S.ajaxPrefilter("script", (function(e) {
                    void 0 === e.cache && (e.cache = !1),
                    e.crossDomain && (e.type = "GET")
                }
                )),
                S.ajaxTransport("script", (function(e) {
                    var t, n;
                    if (e.crossDomain || e.scriptAttrs)
                        return {
                            send: function(r, i) {
                                t = S("<script>").attr(e.scriptAttrs || {}).prop({
                                    charset: e.scriptCharset,
                                    src: e.url
                                }).on("load error", n = function(e) {
                                    t.remove(),
                                    n = null,
                                    e && i("error" === e.type ? 404 : 200, e.type)
                                }
                                ),
                                b.head.appendChild(t[0])
                            },
                            abort: function() {
                                n && n()
                            }
                        }
                }
                ));
                var Gt, Yt = [], Jt = /(=)\?(?=&|$)|\?\?/;
                S.ajaxSetup({
                    jsonp: "callback",
                    jsonpCallback: function() {
                        var e = Yt.pop() || S.expando + "_" + kt.guid++;
                        return this[e] = !0,
                        e
                    }
                }),
                S.ajaxPrefilter("json jsonp", (function(e, t, n) {
                    var r, o, a, s = !1 !== e.jsonp && (Jt.test(e.url) ? "url" : "string" === typeof e.data && 0 === (e.contentType || "").indexOf("application/x-www-form-urlencoded") && Jt.test(e.data) && "data");
                    if (s || "jsonp" === e.dataTypes[0])
                        return r = e.jsonpCallback = m(e.jsonpCallback) ? e.jsonpCallback() : e.jsonpCallback,
                        s ? e[s] = e[s].replace(Jt, "$1" + r) : !1 !== e.jsonp && (e.url += (At.test(e.url) ? "&" : "?") + e.jsonp + "=" + r),
                        e.converters["script json"] = function() {
                            return a || S.error(r + " was not called"),
                            a[0]
                        }
                        ,
                        e.dataTypes[0] = "json",
                        o = i[r],
                        i[r] = function() {
                            a = arguments
                        }
                        ,
                        n.always((function() {
                            void 0 === o ? S(i).removeProp(r) : i[r] = o,
                            e[r] && (e.jsonpCallback = t.jsonpCallback,
                            Yt.push(r)),
                            a && m(o) && o(a[0]),
                            a = o = void 0
                        }
                        )),
                        "script"
                }
                )),
                y.createHTMLDocument = ((Gt = b.implementation.createHTMLDocument("").body).innerHTML = "<form></form><form></form>",
                2 === Gt.childNodes.length),
                S.parseHTML = function(e, t, n) {
                    return "string" !== typeof e ? [] : ("boolean" === typeof t && (n = t,
                    t = !1),
                    t || (y.createHTMLDocument ? ((r = (t = b.implementation.createHTMLDocument("")).createElement("base")).href = b.location.href,
                    t.head.appendChild(r)) : t = b),
                    o = !n && [],
                    (i = q.exec(e)) ? [t.createElement(i[1])] : (i = Ce([e], t, o),
                    o && o.length && S(o).remove(),
                    S.merge([], i.childNodes)));
                    var r, i, o
                }
                ,
                S.fn.load = function(e, t, n) {
                    var i, o, a, s = this, u = e.indexOf(" ");
                    return u > -1 && (i = xt(e.slice(u)),
                    e = e.slice(0, u)),
                    m(t) ? (n = t,
                    t = void 0) : t && "object" === r(t) && (o = "POST"),
                    s.length > 0 && S.ajax({
                        url: e,
                        type: o || "GET",
                        dataType: "html",
                        data: t
                    }).done((function(e) {
                        a = arguments,
                        s.html(i ? S("<div>").append(S.parseHTML(e)).find(i) : e)
                    }
                    )).always(n && function(e, t) {
                        s.each((function() {
                            n.apply(this, a || [e.responseText, t, e])
                        }
                        ))
                    }
                    ),
                    this
                }
                ,
                S.expr.pseudos.animated = function(e) {
                    return S.grep(S.timers, (function(t) {
                        return e === t.elem
                    }
                    )).length
                }
                ,
                S.offset = {
                    setOffset: function(e, t, n) {
                        var r, i, o, a, s, u, l = S.css(e, "position"), c = S(e), f = {};
                        "static" === l && (e.style.position = "relative"),
                        s = c.offset(),
                        o = S.css(e, "top"),
                        u = S.css(e, "left"),
                        ("absolute" === l || "fixed" === l) && (o + u).indexOf("auto") > -1 ? (a = (r = c.position()).top,
                        i = r.left) : (a = parseFloat(o) || 0,
                        i = parseFloat(u) || 0),
                        m(t) && (t = t.call(e, n, S.extend({}, s))),
                        null != t.top && (f.top = t.top - s.top + a),
                        null != t.left && (f.left = t.left - s.left + i),
                        "using"in t ? t.using.call(e, f) : ("number" === typeof f.top && (f.top += "px"),
                        "number" === typeof f.left && (f.left += "px"),
                        c.css(f))
                    }
                },
                S.fn.extend({
                    offset: function(e) {
                        if (arguments.length)
                            return void 0 === e ? this : this.each((function(t) {
                                S.offset.setOffset(this, e, t)
                            }
                            ));
                        var t, n, r = this[0];
                        return r ? r.getClientRects().length ? (t = r.getBoundingClientRect(),
                        n = r.ownerDocument.defaultView,
                        {
                            top: t.top + n.pageYOffset,
                            left: t.left + n.pageXOffset
                        }) : {
                            top: 0,
                            left: 0
                        } : void 0
                    },
                    position: function() {
                        if (this[0]) {
                            var e, t, n, r = this[0], i = {
                                top: 0,
                                left: 0
                            };
                            if ("fixed" === S.css(r, "position"))
                                t = r.getBoundingClientRect();
                            else {
                                for (t = this.offset(),
                                n = r.ownerDocument,
                                e = r.offsetParent || n.documentElement; e && (e === n.body || e === n.documentElement) && "static" === S.css(e, "position"); )
                                    e = e.parentNode;
                                e && e !== r && 1 === e.nodeType && ((i = S(e).offset()).top += S.css(e, "borderTopWidth", !0),
                                i.left += S.css(e, "borderLeftWidth", !0))
                            }
                            return {
                                top: t.top - i.top - S.css(r, "marginTop", !0),
                                left: t.left - i.left - S.css(r, "marginLeft", !0)
                            }
                        }
                    },
                    offsetParent: function() {
                        return this.map((function() {
                            for (var e = this.offsetParent; e && "static" === S.css(e, "position"); )
                                e = e.offsetParent;
                            return e || ae
                        }
                        ))
                    }
                }),
                S.each({
                    scrollLeft: "pageXOffset",
                    scrollTop: "pageYOffset"
                }, (function(e, t) {
                    var n = "pageYOffset" === t;
                    S.fn[e] = function(r) {
                        return U(this, (function(e, r, i) {
                            var o;
                            if (x(e) ? o = e : 9 === e.nodeType && (o = e.defaultView),
                            void 0 === i)
                                return o ? o[t] : e[r];
                            o ? o.scrollTo(n ? o.pageXOffset : i, n ? i : o.pageYOffset) : e[r] = i
                        }
                        ), e, r, arguments.length)
                    }
                }
                )),
                S.each(["top", "left"], (function(e, t) {
                    S.cssHooks[t] = Ve(y.pixelPosition, (function(e, n) {
                        if (n)
                            return n = Xe(e, t),
                            $e.test(n) ? S(e).position()[t] + "px" : n
                    }
                    ))
                }
                )),
                S.each({
                    Height: "height",
                    Width: "width"
                }, (function(e, t) {
                    S.each({
                        padding: "inner" + e,
                        content: t,
                        "": "outer" + e
                    }, (function(n, r) {
                        S.fn[r] = function(i, o) {
                            var a = arguments.length && (n || "boolean" !== typeof i)
                              , s = n || (!0 === i || !0 === o ? "margin" : "border");
                            return U(this, (function(t, n, i) {
                                var o;
                                return x(t) ? 0 === r.indexOf("outer") ? t["inner" + e] : t.document.documentElement["client" + e] : 9 === t.nodeType ? (o = t.documentElement,
                                Math.max(t.body["scroll" + e], o["scroll" + e], t.body["offset" + e], o["offset" + e], o["client" + e])) : void 0 === i ? S.css(t, n, s) : S.style(t, n, i, s)
                            }
                            ), t, a ? i : void 0, a)
                        }
                    }
                    ))
                }
                )),
                S.each(["ajaxStart", "ajaxStop", "ajaxComplete", "ajaxError", "ajaxSuccess", "ajaxSend"], (function(e, t) {
                    S.fn[t] = function(e) {
                        return this.on(t, e)
                    }
                }
                )),
                S.fn.extend({
                    bind: function(e, t, n) {
                        return this.on(e, null, t, n)
                    },
                    unbind: function(e, t) {
                        return this.off(e, null, t)
                    },
                    delegate: function(e, t, n, r) {
                        return this.on(t, e, n, r)
                    },
                    undelegate: function(e, t, n) {
                        return 1 === arguments.length ? this.off(e, "**") : this.off(t, e || "**", n)
                    },
                    hover: function(e, t) {
                        return this.mouseenter(e).mouseleave(t || e)
                    }
                }),
                S.each("blur focus focusin focusout resize scroll click dblclick mousedown mouseup mousemove mouseover mouseout mouseenter mouseleave change select submit keydown keypress keyup contextmenu".split(" "), (function(e, t) {
                    S.fn[t] = function(e, n) {
                        return arguments.length > 0 ? this.on(t, null, e, n) : this.trigger(t)
                    }
                }
                ));
                var Qt = /^[\s\uFEFF\xA0]+|[\s\uFEFF\xA0]+$/g;
                S.proxy = function(e, t) {
                    var n, r, i;
                    if ("string" === typeof t && (n = e[t],
                    t = e,
                    e = n),
                    m(e))
                        return r = u.call(arguments, 2),
                        (i = function() {
                            return e.apply(t || this, r.concat(u.call(arguments)))
                        }
                        ).guid = e.guid = e.guid || S.guid++,
                        i
                }
                ,
                S.holdReady = function(e) {
                    e ? S.readyWait++ : S.ready(!0)
                }
                ,
                S.isArray = Array.isArray,
                S.parseJSON = JSON.parse,
                S.nodeName = j,
                S.isFunction = m,
                S.isWindow = x,
                S.camelCase = Y,
                S.type = C,
                S.now = Date.now,
                S.isNumeric = function(e) {
                    var t = S.type(e);
                    return ("number" === t || "string" === t) && !isNaN(e - parseFloat(e))
                }
                ,
                S.trim = function(e) {
                    return null == e ? "" : (e + "").replace(Qt, "")
                }
                ,
                void 0 === (n = function() {
                    return S
                }
                .apply(t, [])) || (e.exports = n);
                var Kt = i.jQuery
                  , Zt = i.$;
                return S.noConflict = function(e) {
                    return i.$ === S && (i.$ = Zt),
                    e && i.jQuery === S && (i.jQuery = Kt),
                    S
                }
                ,
                "undefined" === typeof o && (i.jQuery = i.$ = S),
                S
            }
            ))
        }
        ).call(this, n(42)(e))
    }
}]);
