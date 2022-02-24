/*!jQuery v3.5.1 -ajax,-ajax/jsonp,-ajax/load,-ajax/script,-ajax/var/location,-ajax/var/nonce,-ajax/var/rquery,-ajax/xhr,-manipulation/_evalUrl,-deprecated/ajax-event-alias,-effects,-effects/Tween,-effects/animatedSelector | (c) JS Foundation and other contributors | jquery.org/license*/
function m(e) {
    e.relatedTarget && e.target.closest("a") == e.relatedTarget.closest("a") || t && (clearTimeout(t),
    t = void 0)
}
function f(e) {
    if (e && e.href && (!a || "instant"in e.dataset) && (r || e.origin == location.origin || "instant"in e.dataset) && ["http:", "https:"].includes(e.protocol) && ("http:" != e.protocol || "https:" != location.protocol) && (i || !e.search || "instant"in e.dataset) && !(e.hash && e.pathname + e.search == location.pathname + location.search || "noInstant"in e.dataset))
        return !0
}
function h(e) {
    if (n.has(e))
        return;
    const t = document.createElement("link");
    t.rel = "prefetch",
    t.href = e,
    document.head.appendChild(t),
    n.add(e)
}
/*!instant.page v3.0.0 - (C) 2019 Alexandre Dieulot - https://instant.page/license*/
let t, e;
!function(e, t) {
    "use strict";
    "object" == typeof module && "object" == typeof module.exports ? module.exports = e.document ? t(e, !0) : function(e) {
        if (!e.document)
            throw new Error("jQuery requires a window with a document");
        return t(e)
    }
    : t(e)
}("undefined" != typeof window ? window : this, function(e, t) {
    "use strict";
    function n(e, t, n) {
        var r, i, o = (n = n || te).createElement("script");
        if (o.text = e,
        t)
            for (r in ne)
                (i = t[r] || t.getAttribute && t.getAttribute(r)) && o.setAttribute(r, i);
        n.head.appendChild(o).parentNode.removeChild(o)
    }
    function r(e) {
        return null == e ? e + "" : "object" == typeof e || "function" == typeof e ? Q[V.call(e)] || "object" : typeof e
    }
    function i(e) {
        var t = !!e && "length"in e && e.length
          , n = r(e);
        return !Z(e) && !ee(e) && ("array" === n || 0 === t || "number" == typeof t && 0 < t && t - 1 in e)
    }
    function o(e, t) {
        return e.nodeName && e.nodeName.toLowerCase() === t.toLowerCase()
    }
    function a(e, t, n) {
        return Z(t) ? ie.grep(e, function(e, r) {
            return !!t.call(e, r, e) !== n
        }) : t.nodeType ? ie.grep(e, function(e) {
            return e === t !== n
        }) : "string" != typeof t ? ie.grep(e, function(e) {
            return -1 < X.call(t, e) !== n
        }) : ie.filter(t, e, n)
    }
    function s(e, t) {
        for (; (e = e[t]) && 1 !== e.nodeType; )
            ;
        return e
    }
    function l(e) {
        return e
    }
    function u(e) {
        throw e
    }
    function c(e, t, n, r) {
        var i;
        try {
            e && Z(i = e.promise) ? i.call(e).done(t).fail(n) : e && Z(i = e.then) ? i.call(e, t, n) : t.apply(void 0, [e].slice(r))
        } catch (e) {
            n.apply(void 0, [e])
        }
    }
    function f() {
        te.removeEventListener("DOMContentLoaded", f),
        e.removeEventListener("load", f),
        ie.ready()
    }
    function d(e, t) {
        return t.toUpperCase()
    }
    function p(e) {
        return e.replace(ye, "ms-").replace(be, d)
    }
    function h() {
        this.expando = ie.expando + h.uid++
    }
    function m(e, t, n) {
        var r, i;
        if (void 0 === n && 1 === e.nodeType)
            if (r = "data-" + t.replace(Ae, "-$&").toLowerCase(),
            "string" == typeof (n = e.getAttribute(r))) {
                try {
                    n = "true" === (i = n) || "false" !== i && ("null" === i ? null : i === +i + "" ? +i : Se.test(i) ? JSON.parse(i) : i)
                } catch (e) {}
                we.set(e, t, n)
            } else
                n = void 0;
        return n
    }
    function g(e, t) {
        for (var n, r, i, o, a, s, l, u = [], c = 0, f = e.length; c < f; c++)
            (r = e[c]).style && (n = r.style.display,
            t ? ("none" === n && (u[c] = Ce.get(r, "display") || null,
            u[c] || (r.style.display = "")),
            "" === r.style.display && je(r) && (u[c] = (l = a = o = void 0,
            a = (i = r).ownerDocument,
            s = i.nodeName,
            (l = Le[s]) || (o = a.body.appendChild(a.createElement(s)),
            l = ie.css(o, "display"),
            o.parentNode.removeChild(o),
            "none" === l && (l = "block"),
            Le[s] = l)))) : "none" !== n && (u[c] = "none",
            Ce.set(r, "display", n)));
        for (c = 0; c < f; c++)
            null != u[c] && (e[c].style.display = u[c]);
        return e
    }
    function v(e, t) {
        var n;
        return n = "undefined" != typeof e.getElementsByTagName ? e.getElementsByTagName(t || "*") : "undefined" != typeof e.querySelectorAll ? e.querySelectorAll(t || "*") : [],
        void 0 === t || t && o(e, t) ? ie.merge([e], n) : n
    }
    function y(e, t) {
        for (var n = 0, r = e.length; n < r; n++)
            Ce.set(e[n], "globalEval", !t || Ce.get(t[n], "globalEval"))
    }
    function b(e, t, n, i, o) {
        for (var a, s, l, u, c, f, d = t.createDocumentFragment(), p = [], h = 0, m = e.length; h < m; h++)
            if ((a = e[h]) || 0 === a)
                if ("object" === r(a))
                    ie.merge(p, a.nodeType ? [a] : a);
                else if (Fe.test(a)) {
                    for (s = s || d.appendChild(t.createElement("div")),
                    l = (qe.exec(a) || ["", ""])[1].toLowerCase(),
                    u = Me[l] || Me._default,
                    s.innerHTML = u[1] + ie.htmlPrefilter(a) + u[2],
                    f = u[0]; f--; )
                        s = s.lastChild;
                    ie.merge(p, s.childNodes),
                    (s = d.firstChild).textContent = ""
                } else
                    p.push(t.createTextNode(a));
        for (d.textContent = "",
        h = 0; a = p[h++]; )
            if (i && -1 < ie.inArray(a, i))
                o && o.push(a);
            else if (c = De(a),
            s = v(d.appendChild(a), "script"),
            c && y(s),
            n)
                for (f = 0; a = s[f++]; )
                    He.test(a.type || "") && n.push(a);
        return d
    }
    function x() {
        return !0
    }
    function C() {
        return !1
    }
    function w(e, t) {
        return e === function() {
            try {
                return te.activeElement
            } catch (e) {}
        }() == ("focus" === t)
    }
    function S(e, t, n, r, i, o) {
        var a, s;
        if ("object" == typeof t) {
            for (s in "string" != typeof n && (r = r || n,
            n = void 0),
            t)
                S(e, s, n, r, t[s], o);
            return e
        }
        if (null == r && null == i ? (i = n,
        r = n = void 0) : null == i && ("string" == typeof n ? (i = r,
        r = void 0) : (i = r,
        r = n,
        n = void 0)),
        !1 === i)
            i = C;
        else if (!i)
            return e;
        return 1 === o && (a = i,
        (i = function(e) {
            return ie().off(e),
            a.apply(this, arguments)
        }
        ).guid = a.guid || (a.guid = ie.guid++)),
        e.each(function() {
            ie.event.add(this, t, i, r, n)
        })
    }
    function A(e, t, n) {
        n ? (Ce.set(e, t, !1),
        ie.event.add(e, t, {
            namespace: !1,
            handler: function(e) {
                var r, i, o = Ce.get(this, t);
                if (1 & e.isTrigger && this[t]) {
                    if (o.length)
                        (ie.event.special[t] || {}).delegateType && e.stopPropagation();
                    else if (o = _.call(arguments),
                    Ce.set(this, t, o),
                    r = n(this, t),
                    this[t](),
                    o !== (i = Ce.get(this, t)) || r ? Ce.set(this, t, !1) : i = {},
                    o !== i)
                        return e.stopImmediatePropagation(),
                        e.preventDefault(),
                        i.value
                } else
                    o.length && (Ce.set(this, t, {
                        value: ie.event.trigger(ie.extend(o[0], ie.Event.prototype), o.slice(1), this)
                    }),
                    e.stopImmediatePropagation())
            }
        })) : void 0 === Ce.get(e, t) && ie.event.add(e, t, x)
    }
    function E(e, t) {
        return o(e, "table") && o(11 !== t.nodeType ? t : t.firstChild, "tr") && ie(e).children("tbody")[0] || e
    }
    function k(e) {
        return e.type = (null !== e.getAttribute("type")) + "/" + e.type,
        e
    }
    function T(e) {
        return "true/" === (e.type || "").slice(0, 5) ? e.type = e.type.slice(5) : e.removeAttribute("type"),
        e
    }
    function R(e, t) {
        var n, r, i, o, a, s;
        if (1 === t.nodeType) {
            if (Ce.hasData(e) && (s = Ce.get(e).events))
                for (i in Ce.remove(t, "handle events"),
                s)
                    for (n = 0,
                    r = s[i].length; n < r; n++)
                        ie.event.add(t, i, s[i][n]);
            we.hasData(e) && (o = we.access(e),
            a = ie.extend({}, o),
            we.set(t, a))
        }
    }
    function D(e, t, r, i) {
        t = U(t);
        var o, a, s, l, u, c, f = 0, d = e.length, p = d - 1, h = t[0], m = Z(h);
        if (m || 1 < d && "string" == typeof h && !K.checkClone && Ue.test(h))
            return e.each(function(n) {
                var o = e.eq(n);
                m && (t[0] = h.call(this, n, o.html())),
                D(o, t, r, i)
            });
        if (d && (a = (o = b(t, e[0].ownerDocument, !1, e, i)).firstChild,
        1 === o.childNodes.length && (o = a),
        a || i)) {
            for (l = (s = ie.map(v(o, "script"), k)).length; f < d; f++)
                u = o,
                f !== p && (u = ie.clone(u, !0, !0),
                l && ie.merge(s, v(u, "script"))),
                r.call(e[f], u, f);
            if (l)
                for (c = s[s.length - 1].ownerDocument,
                ie.map(s, T),
                f = 0; f < l; f++)
                    u = s[f],
                    He.test(u.type || "") && !Ce.access(u, "globalEval") && ie.contains(c, u) && (u.src && "module" !== (u.type || "").toLowerCase() ? ie._evalUrl && !u.noModule && ie._evalUrl(u.src, {
                        nonce: u.nonce || u.getAttribute("nonce")
                    }, c) : n(u.textContent.replace(ze, ""), u, c))
        }
        return e
    }
    function N(e, t, n) {
        for (var r, i = t ? ie.filter(t, e) : e, o = 0; null != (r = i[o]); o++)
            n || 1 !== r.nodeType || ie.cleanData(v(r)),
            r.parentNode && (n && De(r) && y(v(r, "script")),
            r.parentNode.removeChild(r));
        return e
    }
    function j(e, t, n) {
        var r, i, o, a, s = e.style;
        return (n = n || Qe(e)) && ("" !== (a = n.getPropertyValue(t) || n[t]) || De(e) || (a = ie.style(e, t)),
        !K.pixelBoxStyles() && Xe.test(a) && Ge.test(t) && (r = s.width,
        i = s.minWidth,
        o = s.maxWidth,
        s.minWidth = s.maxWidth = s.width = a,
        a = n.width,
        s.width = r,
        s.minWidth = i,
        s.maxWidth = o)),
        void 0 !== a ? a + "" : a
    }
    function L(e, t) {
        return {
            get: function() {
                if (!e())
                    return (this.get = t).apply(this, arguments);
                delete this.get
            }
        }
    }
    function P(e) {
        return ie.cssProps[e] || et[e] || (e in Ze ? e : et[e] = function(e) {
            for (var t = e[0].toUpperCase() + e.slice(1), n = Ke.length; n--; )
                if ((e = Ke[n] + t)in Ze)
                    return e
        }(e) || e)
    }
    function I(e, t, n) {
        var r = ke.exec(t);
        return r ? Math.max(0, r[2] - (n || 0)) + (r[3] || "px") : t
    }
    function O(e, t, n, r, i, o) {
        var a = "width" === t ? 1 : 0
          , s = 0
          , l = 0;
        if (n === (r ? "border" : "content"))
            return 0;
        for (; a < 4; a += 2)
            "margin" === n && (l += ie.css(e, n + Te[a], !0, i)),
            r ? ("content" === n && (l -= ie.css(e, "padding" + Te[a], !0, i)),
            "margin" !== n && (l -= ie.css(e, "border" + Te[a] + "Width", !0, i))) : (l += ie.css(e, "padding" + Te[a], !0, i),
            "padding" !== n ? l += ie.css(e, "border" + Te[a] + "Width", !0, i) : s += ie.css(e, "border" + Te[a] + "Width", !0, i));
        return !r && 0 <= o && (l += Math.max(0, Math.ceil(e["offset" + t[0].toUpperCase() + t.slice(1)] - o - l - s - .5)) || 0),
        l
    }
    function q(e, t, n) {
        var r = Qe(e)
          , i = (!K.boxSizingReliable() || n) && "border-box" === ie.css(e, "boxSizing", !1, r)
          , a = i
          , s = j(e, t, r)
          , l = "offset" + t[0].toUpperCase() + t.slice(1);
        if (Xe.test(s)) {
            if (!n)
                return s;
            s = "auto"
        }
        return (!K.boxSizingReliable() && i || !K.reliableTrDimensions() && o(e, "tr") || "auto" === s || !parseFloat(s) && "inline" === ie.css(e, "display", !1, r)) && e.getClientRects().length && (i = "border-box" === ie.css(e, "boxSizing", !1, r),
        (a = l in e) && (s = e[l])),
        (s = parseFloat(s) || 0) + O(e, t, n || (i ? "border" : "content"), a, r, s) + "px"
    }
    function H(e) {
        return (e.match(he) || []).join(" ")
    }
    function M(e) {
        return e.getAttribute && e.getAttribute("class") || ""
    }
    function F(e) {
        return Array.isArray(e) ? e : "string" == typeof e && e.match(he) || []
    }
    function W(e, t, n, i) {
        var o;
        if (Array.isArray(t))
            ie.each(t, function(t, r) {
                n || pt.test(e) ? i(e, r) : W(e + "[" + ("object" == typeof r && null != r ? t : "") + "]", r, n, i)
            });
        else if (n || "object" !== r(t))
            i(e, t);
        else
            for (o in t)
                W(e + "[" + o + "]", t[o], n, i)
    }
    var $ = []
      , B = Object.getPrototypeOf
      , _ = $.slice
      , U = $.flat ? function(e) {
        return $.flat.call(e)
    }
    : function(e) {
        return $.concat.apply([], e)
    }
      , z = $.push
      , X = $.indexOf
      , Q = {}
      , V = Q.toString
      , G = Q.hasOwnProperty
      , J = G.toString
      , Y = J.call(Object)
      , K = {}
      , Z = function(e) {
        return "function" == typeof e && "number" != typeof e.nodeType
    }
      , ee = function(e) {
        return null != e && e === e.window
    }
      , te = e.document
      , ne = {
        type: !0,
        src: !0,
        nonce: !0,
        noModule: !0
    }
      , re = "3.5.1 -ajax,-ajax/jsonp,-ajax/load,-ajax/script,-ajax/var/location,-ajax/var/nonce,-ajax/var/rquery,-ajax/xhr,-manipulation/_evalUrl,-deprecated/ajax-event-alias,-effects,-effects/Tween,-effects/animatedSelector"
      , ie = function(e, t) {
        return new ie.fn.init(e,t)
    };
    ie.fn = ie.prototype = {
        jquery: re,
        constructor: ie,
        length: 0,
        toArray: function() {
            return _.call(this)
        },
        get: function(e) {
            return null == e ? _.call(this) : e < 0 ? this[e + this.length] : this[e]
        },
        pushStack: function(e) {
            var t = ie.merge(this.constructor(), e);
            return t.prevObject = this,
            t
        },
        each: function(e) {
            return ie.each(this, e)
        },
        map: function(e) {
            return this.pushStack(ie.map(this, function(t, n) {
                return e.call(t, n, t)
            }))
        },
        slice: function() {
            return this.pushStack(_.apply(this, arguments))
        },
        first: function() {
            return this.eq(0)
        },
        last: function() {
            return this.eq(-1)
        },
        even: function() {
            return this.pushStack(ie.grep(this, function(e, t) {
                return (t + 1) % 2
            }))
        },
        odd: function() {
            return this.pushStack(ie.grep(this, function(e, t) {
                return t % 2
            }))
        },
        eq: function(e) {
            var t = this.length
              , n = +e + (e < 0 ? t : 0);
            return this.pushStack(0 <= n && n < t ? [this[n]] : [])
        },
        end: function() {
            return this.prevObject || this.constructor()
        },
        push: z,
        sort: $.sort,
        splice: $.splice
    },
    ie.extend = ie.fn.extend = function() {
        var e, t, n, r, i, o, a = arguments[0] || {}, s = 1, l = arguments.length, u = !1;
        for ("boolean" == typeof a && (u = a,
        a = arguments[s] || {},
        s++),
        "object" == typeof a || Z(a) || (a = {}),
        s === l && (a = this,
        s--); s < l; s++)
            if (null != (e = arguments[s]))
                for (t in e)
                    r = e[t],
                    "__proto__" !== t && a !== r && (u && r && (ie.isPlainObject(r) || (i = Array.isArray(r))) ? (n = a[t],
                    o = i && !Array.isArray(n) ? [] : i || ie.isPlainObject(n) ? n : {},
                    i = !1,
                    a[t] = ie.extend(u, o, r)) : void 0 !== r && (a[t] = r));
        return a
    }
    ,
    ie.extend({
        expando: "jQuery" + (re + Math.random()).replace(/\D/g, ""),
        isReady: !0,
        error: function(e) {
            throw new Error(e)
        },
        noop: function() {},
        isPlainObject: function(e) {
            var t, n;
            return !(!e || "[object Object]" !== V.call(e) || (t = B(e)) && ("function" != typeof (n = G.call(t, "constructor") && t.constructor) || J.call(n) !== Y))
        },
        isEmptyObject: function(e) {
            var t;
            for (t in e)
                return !1;
            return !0
        },
        globalEval: function(e, t, r) {
            n(e, {
                nonce: t && t.nonce
            }, r)
        },
        each: function(e, t) {
            var n, r = 0;
            if (i(e))
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
            return null != e && (i(Object(e)) ? ie.merge(n, "string" == typeof e ? [e] : e) : z.call(n, e)),
            n
        },
        inArray: function(e, t, n) {
            return null == t ? -1 : X.call(t, e, n)
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
            var r, o, a = 0, s = [];
            if (i(e))
                for (r = e.length; a < r; a++)
                    null != (o = t(e[a], a, n)) && s.push(o);
            else
                for (a in e)
                    null != (o = t(e[a], a, n)) && s.push(o);
            return U(s)
        },
        guid: 1,
        support: K
    }),
    "function" == typeof Symbol && (ie.fn[Symbol.iterator] = $[Symbol.iterator]),
    ie.each("Boolean Number String Function Array Date RegExp Object Error Symbol".split(" "), function(e, t) {
        Q["[object " + t + "]"] = t.toLowerCase()
    });
    var oe = function(e) {
        function t(e, t, n, r) {
            var i, o, a, s, l, u, c, d = t && t.ownerDocument, h = t ? t.nodeType : 9;
            if (n = n || [],
            "string" != typeof e || !e || 1 !== h && 9 !== h && 11 !== h)
                return n;
            if (!r && (N(t),
            t = t || j,
            P)) {
                if (11 !== h && (l = ve.exec(e)))
                    if (i = l[1]) {
                        if (9 === h) {
                            if (!(a = t.getElementById(i)))
                                return n;
                            if (a.id === i)
                                return n.push(a),
                                n
                        } else if (d && (a = d.getElementById(i)) && H(t, a) && a.id === i)
                            return n.push(a),
                            n
                    } else {
                        if (l[2])
                            return Y.apply(n, t.getElementsByTagName(e)),
                            n;
                        if ((i = l[3]) && x.getElementsByClassName && t.getElementsByClassName)
                            return Y.apply(n, t.getElementsByClassName(i)),
                            n
                    }
                if (x.qsa && !z[e + " "] && (!I || !I.test(e)) && (1 !== h || "object" !== t.nodeName.toLowerCase())) {
                    if (c = e,
                    d = t,
                    1 === h && (ue.test(e) || le.test(e))) {
                        for ((d = ye.test(e) && f(t.parentNode) || t) === t && x.scope || ((s = t.getAttribute("id")) ? s = s.replace(Ce, we) : t.setAttribute("id", s = M)),
                        o = (u = A(e)).length; o--; )
                            u[o] = (s ? "#" + s : ":scope") + " " + p(u[o]);
                        c = u.join(",")
                    }
                    try {
                        return Y.apply(n, d.querySelectorAll(c)),
                        n
                    } catch (t) {
                        z(e, !0)
                    } finally {
                        s === M && t.removeAttribute("id")
                    }
                }
            }
            return k(e.replace(ae, "$1"), t, n, r)
        }
        function n() {
            var e = [];
            return function t(n, r) {
                return e.push(n + " ") > C.cacheLength && delete t[e.shift()],
                t[n + " "] = r
            }
        }
        function r(e) {
            return e[M] = !0,
            e
        }
        function i(e) {
            var t = j.createElement("fieldset");
            try {
                return !!e(t)
            } catch (e) {
                return !1
            } finally {
                t.parentNode && t.parentNode.removeChild(t),
                t = null
            }
        }
        function o(e, t) {
            for (var n = e.split("|"), r = n.length; r--; )
                C.attrHandle[n[r]] = t
        }
        function a(e, t) {
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
        function s(e) {
            return function(t) {
                return "input" === t.nodeName.toLowerCase() && t.type === e
            }
        }
        function l(e) {
            return function(t) {
                var n = t.nodeName.toLowerCase();
                return ("input" === n || "button" === n) && t.type === e
            }
        }
        function u(e) {
            return function(t) {
                return "form"in t ? t.parentNode && !1 === t.disabled ? "label"in t ? "label"in t.parentNode ? t.parentNode.disabled === e : t.disabled === e : t.isDisabled === e || t.isDisabled !== !e && Ae(t) === e : t.disabled === e : "label"in t && t.disabled === e
            }
        }
        function c(e) {
            return r(function(t) {
                return t = +t,
                r(function(n, r) {
                    for (var i, o = e([], n.length, t), a = o.length; a--; )
                        n[i = o[a]] && (n[i] = !(r[i] = n[i]))
                })
            })
        }
        function f(e) {
            return e && "undefined" != typeof e.getElementsByTagName && e
        }
        function d() {}
        function p(e) {
            for (var t = 0, n = e.length, r = ""; t < n; t++)
                r += e[t].value;
            return r
        }
        function h(e, t, n) {
            var r = t.dir
              , i = t.next
              , o = i || r
              , a = n && "parentNode" === o
              , s = $++;
            return t.first ? function(t, n, i) {
                for (; t = t[r]; )
                    if (1 === t.nodeType || a)
                        return e(t, n, i);
                return !1
            }
            : function(t, n, l) {
                var u, c, f, d = [W, s];
                if (l) {
                    for (; t = t[r]; )
                        if ((1 === t.nodeType || a) && e(t, n, l))
                            return !0
                } else
                    for (; t = t[r]; )
                        if (1 === t.nodeType || a)
                            if (c = (f = t[M] || (t[M] = {}))[t.uniqueID] || (f[t.uniqueID] = {}),
                            i && i === t.nodeName.toLowerCase())
                                t = t[r] || t;
                            else {
                                if ((u = c[o]) && u[0] === W && u[1] === s)
                                    return d[2] = u[2];
                                if ((c[o] = d)[2] = e(t, n, l))
                                    return !0
                            }
                return !1
            }
        }
        function m(e) {
            return 1 < e.length ? function(t, n, r) {
                for (var i = e.length; i--; )
                    if (!e[i](t, n, r))
                        return !1;
                return !0
            }
            : e[0]
        }
        function g(e, t, n, r, i) {
            for (var o, a = [], s = 0, l = e.length, u = null != t; s < l; s++)
                (o = e[s]) && (n && !n(o, r, i) || (a.push(o),
                u && t.push(s)));
            return a
        }
        function v(e, n, i, o, a, s) {
            return o && !o[M] && (o = v(o)),
            a && !a[M] && (a = v(a, s)),
            r(function(r, s, l, u) {
                var c, f, d, p = [], h = [], m = s.length, v = r || function(e, n, r) {
                    for (var i = 0, o = n.length; i < o; i++)
                        t(e, n[i], r);
                    return r
                }(n || "*", l.nodeType ? [l] : l, []), y = !e || !r && n ? v : g(v, p, e, l, u), b = i ? a || (r ? e : m || o) ? [] : s : y;
                if (i && i(y, b, l, u),
                o)
                    for (c = g(b, h),
                    o(c, [], l, u),
                    f = c.length; f--; )
                        (d = c[f]) && (b[h[f]] = !(y[h[f]] = d));
                if (r) {
                    if (a || e) {
                        if (a) {
                            for (c = [],
                            f = b.length; f--; )
                                (d = b[f]) && c.push(y[f] = d);
                            a(null, b = [], c, u)
                        }
                        for (f = b.length; f--; )
                            (d = b[f]) && -1 < (c = a ? Z(r, d) : p[f]) && (r[c] = !(s[c] = d))
                    }
                } else
                    b = g(b === s ? b.splice(m, b.length) : b),
                    a ? a(null, s, b, u) : Y.apply(s, b)
            })
        }
        function y(e) {
            for (var t, n, r, i = e.length, o = C.relative[e[0].type], a = o || C.relative[" "], s = o ? 1 : 0, l = h(function(e) {
                return e === t
            }, a, !0), u = h(function(e) {
                return -1 < Z(t, e)
            }, a, !0), c = [function(e, n, r) {
                var i = !o && (r || n !== T) || ((t = n).nodeType ? l(e, n, r) : u(e, n, r));
                return t = null,
                i
            }
            ]; s < i; s++)
                if (n = C.relative[e[s].type])
                    c = [h(m(c), n)];
                else {
                    if ((n = C.filter[e[s].type].apply(null, e[s].matches))[M]) {
                        for (r = ++s; r < i && !C.relative[e[r].type]; r++)
                            ;
                        return v(1 < s && m(c), 1 < s && p(e.slice(0, s - 1).concat({
                            value: " " === e[s - 2].type ? "*" : ""
                        })).replace(ae, "$1"), n, s < r && y(e.slice(s, r)), r < i && y(e = e.slice(r)), r < i && p(e))
                    }
                    c.push(n)
                }
            return m(c)
        }
        var b, x, C, w, S, A, E, k, T, R, D, N, j, L, P, I, O, q, H, M = "sizzle" + 1 * new Date, F = e.document, W = 0, $ = 0, B = n(), _ = n(), U = n(), z = n(), X = function(e, t) {
            return e === t && (D = !0),
            0
        }, Q = {}.hasOwnProperty, V = [], G = V.pop, J = V.push, Y = V.push, K = V.slice, Z = function(e, t) {
            for (var n = 0, r = e.length; n < r; n++)
                if (e[n] === t)
                    return n;
            return -1
        }, ee = "checked|selected|async|autofocus|autoplay|controls|defer|disabled|hidden|ismap|loop|multiple|open|readonly|required|scoped", te = "[\\x20\\t\\r\\n\\f]", ne = "(?:\\\\[\\da-fA-F]{1,6}" + te + "?|\\\\[^\\r\\n\\f]|[\\w-]|[^\0-\\x7f])+", re = "\\[" + te + "*(" + ne + ")(?:" + te + "*([*^$|!~]?=)" + te + "*(?:'((?:\\\\.|[^\\\\'])*)'|\"((?:\\\\.|[^\\\\\"])*)\"|(" + ne + "))|)" + te + "*\\]", ie = ":(" + ne + ")(?:\\((('((?:\\\\.|[^\\\\'])*)'|\"((?:\\\\.|[^\\\\\"])*)\")|((?:\\\\.|[^\\\\()[\\]]|" + re + ")*)|.*)\\)|)", oe = new RegExp(te + "+","g"), ae = new RegExp("^" + te + "+|((?:^|[^\\\\])(?:\\\\.)*)" + te + "+$","g"), se = new RegExp("^" + te + "*," + te + "*"), le = new RegExp("^" + te + "*([>+~]|" + te + ")" + te + "*"), ue = new RegExp(te + "|>"), ce = new RegExp(ie), fe = new RegExp("^" + ne + "$"), de = {
            ID: new RegExp("^#(" + ne + ")"),
            CLASS: new RegExp("^\\.(" + ne + ")"),
            TAG: new RegExp("^(" + ne + "|[*])"),
            ATTR: new RegExp("^" + re),
            PSEUDO: new RegExp("^" + ie),
            CHILD: new RegExp("^:(only|first|last|nth|nth-last)-(child|of-type)(?:\\(" + te + "*(even|odd|(([+-]|)(\\d*)n|)" + te + "*(?:([+-]|)" + te + "*(\\d+)|))" + te + "*\\)|)","i"),
            bool: new RegExp("^(?:" + ee + ")$","i"),
            needsContext: new RegExp("^" + te + "*[>+~]|:(even|odd|eq|gt|lt|nth|first|last)(?:\\(" + te + "*((?:-\\d)?\\d*)" + te + "*\\)|)(?=[^-]|$)","i")
        }, pe = /HTML$/i, he = /^(?:input|select|textarea|button)$/i, me = /^h\d$/i, ge = /^[^{]+\{\s*\[native \w/, ve = /^(?:#([\w-]+)|(\w+)|\.([\w-]+))$/, ye = /[+~]/, be = new RegExp("\\\\[\\da-fA-F]{1,6}" + te + "?|\\\\([^\\r\\n\\f])","g"), xe = function(e, t) {
            var n = "0x" + e.slice(1) - 65536;
            return t || (n < 0 ? String.fromCharCode(n + 65536) : String.fromCharCode(n >> 10 | 55296, 1023 & n | 56320))
        }, Ce = /([\0-\x1f\x7f]|^-?\d)|^-$|[^\0-\x1f\x7f-\uFFFF\w-]/g, we = function(e, t) {
            return t ? "\0" === e ? "\ufffd" : e.slice(0, -1) + "\\" + e.charCodeAt(e.length - 1).toString(16) + " " : "\\" + e
        }, Se = function() {
            N()
        }, Ae = h(function(e) {
            return !0 === e.disabled && "fieldset" === e.nodeName.toLowerCase()
        }, {
            dir: "parentNode",
            next: "legend"
        });
        try {
            Y.apply(V = K.call(F.childNodes), F.childNodes),
            V[F.childNodes.length].nodeType
        } catch (b) {
            Y = {
                apply: V.length ? function(e, t) {
                    J.apply(e, K.call(t))
                }
                : function(e, t) {
                    for (var n = e.length, r = 0; e[n++] = t[r++]; )
                        ;
                    e.length = n - 1
                }
            }
        }
        for (b in x = t.support = {},
        S = t.isXML = function(e) {
            var t = e.namespaceURI
              , n = (e.ownerDocument || e).documentElement;
            return !pe.test(t || n && n.nodeName || "HTML")
        }
        ,
        N = t.setDocument = function(e) {
            var t, n, r = e ? e.ownerDocument || e : F;
            return r != j && 9 === r.nodeType && r.documentElement && (L = (j = r).documentElement,
            P = !S(j),
            F != j && (n = j.defaultView) && n.top !== n && (n.addEventListener ? n.addEventListener("unload", Se, !1) : n.attachEvent && n.attachEvent("onunload", Se)),
            x.scope = i(function(e) {
                return L.appendChild(e).appendChild(j.createElement("div")),
                "undefined" != typeof e.querySelectorAll && !e.querySelectorAll(":scope fieldset div").length
            }),
            x.attributes = i(function(e) {
                return e.className = "i",
                !e.getAttribute("className")
            }),
            x.getElementsByTagName = i(function(e) {
                return e.appendChild(j.createComment("")),
                !e.getElementsByTagName("*").length
            }),
            x.getElementsByClassName = ge.test(j.getElementsByClassName),
            x.getById = i(function(e) {
                return L.appendChild(e).id = M,
                !j.getElementsByName || !j.getElementsByName(M).length
            }),
            x.getById ? (C.filter.ID = function(e) {
                var t = e.replace(be, xe);
                return function(e) {
                    return e.getAttribute("id") === t
                }
            }
            ,
            C.find.ID = function(e, t) {
                if ("undefined" != typeof t.getElementById && P) {
                    var n = t.getElementById(e);
                    return n ? [n] : []
                }
            }
            ) : (C.filter.ID = function(e) {
                var t = e.replace(be, xe);
                return function(e) {
                    var n = "undefined" != typeof e.getAttributeNode && e.getAttributeNode("id");
                    return n && n.value === t
                }
            }
            ,
            C.find.ID = function(e, t) {
                if ("undefined" != typeof t.getElementById && P) {
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
            C.find.TAG = x.getElementsByTagName ? function(e, t) {
                return "undefined" != typeof t.getElementsByTagName ? t.getElementsByTagName(e) : x.qsa ? t.querySelectorAll(e) : void 0
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
            C.find.CLASS = x.getElementsByClassName && function(e, t) {
                if ("undefined" != typeof t.getElementsByClassName && P)
                    return t.getElementsByClassName(e)
            }
            ,
            O = [],
            I = [],
            (x.qsa = ge.test(j.querySelectorAll)) && (i(function(e) {
                var t;
                L.appendChild(e).innerHTML = "<a id='" + M + "'></a><select id='" + M + "-\r\\' msallowcapture=''><option selected=''></option></select>",
                e.querySelectorAll("[msallowcapture^='']").length && I.push("[*^$]=" + te + "*(?:''|\"\")"),
                e.querySelectorAll("[selected]").length || I.push("\\[" + te + "*(?:value|" + ee + ")"),
                e.querySelectorAll("[id~=" + M + "-]").length || I.push("~="),
                (t = j.createElement("input")).setAttribute("name", ""),
                e.appendChild(t),
                e.querySelectorAll("[name='']").length || I.push("\\[" + te + "*name" + te + "*=" + te + "*(?:''|\"\")"),
                e.querySelectorAll(":checked").length || I.push(":checked"),
                e.querySelectorAll("a#" + M + "+*").length || I.push(".#.+[+~]"),
                e.querySelectorAll("\\\f"),
                I.push("[\\r\\n\\f]")
            }),
            i(function(e) {
                e.innerHTML = "<a href='' disabled='disabled'></a><select disabled='disabled'><option/></select>";
                var t = j.createElement("input");
                t.setAttribute("type", "hidden"),
                e.appendChild(t).setAttribute("name", "D"),
                e.querySelectorAll("[name=d]").length && I.push("name" + te + "*[*^$|!~]?="),
                2 !== e.querySelectorAll(":enabled").length && I.push(":enabled", ":disabled"),
                L.appendChild(e).disabled = !0,
                2 !== e.querySelectorAll(":disabled").length && I.push(":enabled", ":disabled"),
                e.querySelectorAll("*,:x"),
                I.push(",.*:")
            })),
            (x.matchesSelector = ge.test(q = L.matches || L.webkitMatchesSelector || L.mozMatchesSelector || L.oMatchesSelector || L.msMatchesSelector)) && i(function(e) {
                x.disconnectedMatch = q.call(e, "*"),
                q.call(e, "[s!='']:x"),
                O.push("!=", ie)
            }),
            I = I.length && new RegExp(I.join("|")),
            O = O.length && new RegExp(O.join("|")),
            t = ge.test(L.compareDocumentPosition),
            H = t || ge.test(L.contains) ? function(e, t) {
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
            X = t ? function(e, t) {
                if (e === t)
                    return D = !0,
                    0;
                var n = !e.compareDocumentPosition - !t.compareDocumentPosition;
                return n || (1 & (n = (e.ownerDocument || e) == (t.ownerDocument || t) ? e.compareDocumentPosition(t) : 1) || !x.sortDetached && t.compareDocumentPosition(e) === n ? e == j || e.ownerDocument == F && H(F, e) ? -1 : t == j || t.ownerDocument == F && H(F, t) ? 1 : R ? Z(R, e) - Z(R, t) : 0 : 4 & n ? -1 : 1)
            }
            : function(e, t) {
                if (e === t)
                    return D = !0,
                    0;
                var n, r = 0, i = e.parentNode, o = t.parentNode, s = [e], l = [t];
                if (!i || !o)
                    return e == j ? -1 : t == j ? 1 : i ? -1 : o ? 1 : R ? Z(R, e) - Z(R, t) : 0;
                if (i === o)
                    return a(e, t);
                for (n = e; n = n.parentNode; )
                    s.unshift(n);
                for (n = t; n = n.parentNode; )
                    l.unshift(n);
                for (; s[r] === l[r]; )
                    r++;
                return r ? a(s[r], l[r]) : s[r] == F ? -1 : l[r] == F ? 1 : 0
            }
            ),
            j
        }
        ,
        t.matches = function(e, n) {
            return t(e, null, null, n)
        }
        ,
        t.matchesSelector = function(e, n) {
            if (N(e),
            x.matchesSelector && P && !z[n + " "] && (!O || !O.test(n)) && (!I || !I.test(n)))
                try {
                    var r = q.call(e, n);
                    if (r || x.disconnectedMatch || e.document && 11 !== e.document.nodeType)
                        return r
                } catch (e) {
                    z(n, !0)
                }
            return 0 < t(n, j, null, [e]).length
        }
        ,
        t.contains = function(e, t) {
            return (e.ownerDocument || e) != j && N(e),
            H(e, t)
        }
        ,
        t.attr = function(e, t) {
            (e.ownerDocument || e) != j && N(e);
            var n = C.attrHandle[t.toLowerCase()]
              , r = n && Q.call(C.attrHandle, t.toLowerCase()) ? n(e, t, !P) : void 0;
            return void 0 !== r ? r : x.attributes || !P ? e.getAttribute(t) : (r = e.getAttributeNode(t)) && r.specified ? r.value : null
        }
        ,
        t.escape = function(e) {
            return (e + "").replace(Ce, we)
        }
        ,
        t.error = function(e) {
            throw new Error("Syntax error, unrecognized expression: " + e)
        }
        ,
        t.uniqueSort = function(e) {
            var t, n = [], r = 0, i = 0;
            if (D = !x.detectDuplicates,
            R = !x.sortStable && e.slice(0),
            e.sort(X),
            D) {
                for (; t = e[i++]; )
                    t === e[i] && (r = n.push(i));
                for (; r--; )
                    e.splice(n[r], 1)
            }
            return R = null,
            e
        }
        ,
        w = t.getText = function(e) {
            var t, n = "", r = 0, i = e.nodeType;
            if (i) {
                if (1 === i || 9 === i || 11 === i) {
                    if ("string" == typeof e.textContent)
                        return e.textContent;
                    for (e = e.firstChild; e; e = e.nextSibling)
                        n += w(e)
                } else if (3 === i || 4 === i)
                    return e.nodeValue
            } else
                for (; t = e[r++]; )
                    n += w(t);
            return n
        }
        ,
        (C = t.selectors = {
            cacheLength: 50,
            createPseudo: r,
            match: de,
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
                    return e[1] = e[1].replace(be, xe),
                    e[3] = (e[3] || e[4] || e[5] || "").replace(be, xe),
                    "~=" === e[2] && (e[3] = " " + e[3] + " "),
                    e.slice(0, 4)
                },
                CHILD: function(e) {
                    return e[1] = e[1].toLowerCase(),
                    "nth" === e[1].slice(0, 3) ? (e[3] || t.error(e[0]),
                    e[4] = +(e[4] ? e[5] + (e[6] || 1) : 2 * ("even" === e[3] || "odd" === e[3])),
                    e[5] = +(e[7] + e[8] || "odd" === e[3])) : e[3] && t.error(e[0]),
                    e
                },
                PSEUDO: function(e) {
                    var t, n = !e[6] && e[2];
                    return de.CHILD.test(e[0]) ? null : (e[3] ? e[2] = e[4] || e[5] || "" : n && ce.test(n) && (t = A(n, !0)) && (t = n.indexOf(")", n.length - t) - n.length) && (e[0] = e[0].slice(0, t),
                    e[2] = n.slice(0, t)),
                    e.slice(0, 3))
                }
            },
            filter: {
                TAG: function(e) {
                    var t = e.replace(be, xe).toLowerCase();
                    return "*" === e ? function() {
                        return !0
                    }
                    : function(e) {
                        return e.nodeName && e.nodeName.toLowerCase() === t
                    }
                },
                CLASS: function(e) {
                    var t = B[e + " "];
                    return t || (t = new RegExp("(^|" + te + ")" + e + "(" + te + "|$)")) && B(e, function(e) {
                        return t.test("string" == typeof e.className && e.className || "undefined" != typeof e.getAttribute && e.getAttribute("class") || "")
                    })
                },
                ATTR: function(e, n, r) {
                    return function(i) {
                        var o = t.attr(i, e);
                        return null == o ? "!=" === n : !n || (o += "",
                        "=" === n ? o === r : "!=" === n ? o !== r : "^=" === n ? r && 0 === o.indexOf(r) : "*=" === n ? r && -1 < o.indexOf(r) : "$=" === n ? r && o.slice(-r.length) === r : "~=" === n ? -1 < (" " + o.replace(oe, " ") + " ").indexOf(r) : "|=" === n && (o === r || o.slice(0, r.length + 1) === r + "-"))
                    }
                },
                CHILD: function(e, t, n, r, i) {
                    var o = "nth" !== e.slice(0, 3)
                      , a = "last" !== e.slice(-4)
                      , s = "of-type" === t;
                    return 1 === r && 0 === i ? function(e) {
                        return !!e.parentNode
                    }
                    : function(t, n, l) {
                        var u, c, f, d, p, h, m = o !== a ? "nextSibling" : "previousSibling", g = t.parentNode, v = s && t.nodeName.toLowerCase(), y = !l && !s, b = !1;
                        if (g) {
                            if (o) {
                                for (; m; ) {
                                    for (d = t; d = d[m]; )
                                        if (s ? d.nodeName.toLowerCase() === v : 1 === d.nodeType)
                                            return !1;
                                    h = m = "only" === e && !h && "nextSibling"
                                }
                                return !0
                            }
                            if (h = [a ? g.firstChild : g.lastChild],
                            a && y) {
                                for (b = (p = (u = (c = (f = (d = g)[M] || (d[M] = {}))[d.uniqueID] || (f[d.uniqueID] = {}))[e] || [])[0] === W && u[1]) && u[2],
                                d = p && g.childNodes[p]; d = ++p && d && d[m] || (b = p = 0) || h.pop(); )
                                    if (1 === d.nodeType && ++b && d === t) {
                                        c[e] = [W, p, b];
                                        break
                                    }
                            } else if (y && (b = p = (u = (c = (f = (d = t)[M] || (d[M] = {}))[d.uniqueID] || (f[d.uniqueID] = {}))[e] || [])[0] === W && u[1]),
                            !1 === b)
                                for (; (d = ++p && d && d[m] || (b = p = 0) || h.pop()) && ((s ? d.nodeName.toLowerCase() !== v : 1 !== d.nodeType) || !++b || (y && ((c = (f = d[M] || (d[M] = {}))[d.uniqueID] || (f[d.uniqueID] = {}))[e] = [W, b]),
                                d !== t)); )
                                    ;
                            return (b -= i) === r || b % r == 0 && 0 <= b / r
                        }
                    }
                },
                PSEUDO: function(e, n) {
                    var i, o = C.pseudos[e] || C.setFilters[e.toLowerCase()] || t.error("unsupported pseudo: " + e);
                    return o[M] ? o(n) : 1 < o.length ? (i = [e, e, "", n],
                    C.setFilters.hasOwnProperty(e.toLowerCase()) ? r(function(e, t) {
                        for (var r, i = o(e, n), a = i.length; a--; )
                            e[r = Z(e, i[a])] = !(t[r] = i[a])
                    }) : function(e) {
                        return o(e, 0, i)
                    }
                    ) : o
                }
            },
            pseudos: {
                not: r(function(e) {
                    var t = []
                      , n = []
                      , i = E(e.replace(ae, "$1"));
                    return i[M] ? r(function(e, t, n, r) {
                        for (var o, a = i(e, null, r, []), s = e.length; s--; )
                            (o = a[s]) && (e[s] = !(t[s] = o))
                    }) : function(e, r, o) {
                        return t[0] = e,
                        i(t, null, o, n),
                        t[0] = null,
                        !n.pop()
                    }
                }),
                has: r(function(e) {
                    return function(n) {
                        return 0 < t(e, n).length
                    }
                }),
                contains: r(function(e) {
                    return e = e.replace(be, xe),
                    function(t) {
                        return -1 < (t.textContent || w(t)).indexOf(e)
                    }
                }),
                lang: r(function(e) {
                    return fe.test(e || "") || t.error("unsupported lang: " + e),
                    e = e.replace(be, xe).toLowerCase(),
                    function(t) {
                        var n;
                        do {
                            if (n = P ? t.lang : t.getAttribute("xml:lang") || t.getAttribute("lang"))
                                return (n = n.toLowerCase()) === e || 0 === n.indexOf(e + "-")
                        } while ((t = t.parentNode) && 1 === t.nodeType);
                        return !1
                    }
                }),
                target: function(t) {
                    var n = e.location && e.location.hash;
                    return n && n.slice(1) === t.id
                },
                root: function(e) {
                    return e === L
                },
                focus: function(e) {
                    return e === j.activeElement && (!j.hasFocus || j.hasFocus()) && !!(e.type || e.href || ~e.tabIndex)
                },
                enabled: u(!1),
                disabled: u(!0),
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
                    return !C.pseudos.empty(e)
                },
                header: function(e) {
                    return me.test(e.nodeName)
                },
                input: function(e) {
                    return he.test(e.nodeName)
                },
                button: function(e) {
                    var t = e.nodeName.toLowerCase();
                    return "input" === t && "button" === e.type || "button" === t
                },
                text: function(e) {
                    var t;
                    return "input" === e.nodeName.toLowerCase() && "text" === e.type && (null == (t = e.getAttribute("type")) || "text" === t.toLowerCase())
                },
                first: c(function() {
                    return [0]
                }),
                last: c(function(e, t) {
                    return [t - 1]
                }),
                eq: c(function(e, t, n) {
                    return [n < 0 ? n + t : n]
                }),
                even: c(function(e, t) {
                    for (var n = 0; n < t; n += 2)
                        e.push(n);
                    return e
                }),
                odd: c(function(e, t) {
                    for (var n = 1; n < t; n += 2)
                        e.push(n);
                    return e
                }),
                lt: c(function(e, t, n) {
                    for (var r = n < 0 ? n + t : t < n ? t : n; 0 <= --r; )
                        e.push(r);
                    return e
                }),
                gt: c(function(e, t, n) {
                    for (var r = n < 0 ? n + t : n; ++r < t; )
                        e.push(r);
                    return e
                })
            }
        }).pseudos.nth = C.pseudos.eq,
        {
            radio: !0,
            checkbox: !0,
            file: !0,
            password: !0,
            image: !0
        })
            C.pseudos[b] = s(b);
        for (b in {
            submit: !0,
            reset: !0
        })
            C.pseudos[b] = l(b);
        return d.prototype = C.filters = C.pseudos,
        C.setFilters = new d,
        A = t.tokenize = function(e, n) {
            var r, i, o, a, s, l, u, c = _[e + " "];
            if (c)
                return n ? 0 : c.slice(0);
            for (s = e,
            l = [],
            u = C.preFilter; s; ) {
                for (a in r && !(i = se.exec(s)) || (i && (s = s.slice(i[0].length) || s),
                l.push(o = [])),
                r = !1,
                (i = le.exec(s)) && (r = i.shift(),
                o.push({
                    value: r,
                    type: i[0].replace(ae, " ")
                }),
                s = s.slice(r.length)),
                C.filter)
                    !(i = de[a].exec(s)) || u[a] && !(i = u[a](i)) || (r = i.shift(),
                    o.push({
                        value: r,
                        type: a,
                        matches: i
                    }),
                    s = s.slice(r.length));
                if (!r)
                    break
            }
            return n ? s.length : s ? t.error(e) : _(e, l).slice(0)
        }
        ,
        E = t.compile = function(e, n) {
            var i, o, a, s, l, u, c = [], f = [], d = U[e + " "];
            if (!d) {
                for (n || (n = A(e)),
                i = n.length; i--; )
                    (d = y(n[i]))[M] ? c.push(d) : f.push(d);
                (d = U(e, (o = f,
                s = 0 < (a = c).length,
                l = 0 < o.length,
                u = function(e, n, r, i, u) {
                    var c, f, d, p = 0, h = "0", m = e && [], v = [], y = T, b = e || l && C.find.TAG("*", u), x = W += null == y ? 1 : Math.random() || .1, w = b.length;
                    for (u && (T = n == j || n || u); h !== w && null != (c = b[h]); h++) {
                        if (l && c) {
                            for (f = 0,
                            n || c.ownerDocument == j || (N(c),
                            r = !P); d = o[f++]; )
                                if (d(c, n || j, r)) {
                                    i.push(c);
                                    break
                                }
                            u && (W = x)
                        }
                        s && ((c = !d && c) && p--,
                        e && m.push(c))
                    }
                    if (p += h,
                    s && h !== p) {
                        for (f = 0; d = a[f++]; )
                            d(m, v, n, r);
                        if (e) {
                            if (0 < p)
                                for (; h--; )
                                    m[h] || v[h] || (v[h] = G.call(i));
                            v = g(v)
                        }
                        Y.apply(i, v),
                        u && !e && 0 < v.length && 1 < p + a.length && t.uniqueSort(i)
                    }
                    return u && (W = x,
                    T = y),
                    m
                }
                ,
                s ? r(u) : u))).selector = e
            }
            return d
        }
        ,
        k = t.select = function(e, t, n, r) {
            var i, o, a, s, l, u = "function" == typeof e && e, c = !r && A(e = u.selector || e);
            if (n = n || [],
            1 === c.length) {
                if (2 < (o = c[0] = c[0].slice(0)).length && "ID" === (a = o[0]).type && 9 === t.nodeType && P && C.relative[o[1].type]) {
                    if (!(t = (C.find.ID(a.matches[0].replace(be, xe), t) || [])[0]))
                        return n;
                    u && (t = t.parentNode),
                    e = e.slice(o.shift().value.length)
                }
                for (i = de.needsContext.test(e) ? 0 : o.length; i-- && (a = o[i],
                !C.relative[s = a.type]); )
                    if ((l = C.find[s]) && (r = l(a.matches[0].replace(be, xe), ye.test(o[0].type) && f(t.parentNode) || t))) {
                        if (o.splice(i, 1),
                        !(e = r.length && p(o)))
                            return Y.apply(n, r),
                            n;
                        break
                    }
            }
            return (u || E(e, c))(r, t, !P, n, !t || ye.test(e) && f(t.parentNode) || t),
            n
        }
        ,
        x.sortStable = M.split("").sort(X).join("") === M,
        x.detectDuplicates = !!D,
        N(),
        x.sortDetached = i(function(e) {
            return 1 & e.compareDocumentPosition(j.createElement("fieldset"))
        }),
        i(function(e) {
            return e.innerHTML = "<a href='#'></a>",
            "#" === e.firstChild.getAttribute("href")
        }) || o("type|href|height|width", function(e, t, n) {
            if (!n)
                return e.getAttribute(t, "type" === t.toLowerCase() ? 1 : 2)
        }),
        x.attributes && i(function(e) {
            return e.innerHTML = "<input/>",
            e.firstChild.setAttribute("value", ""),
            "" === e.firstChild.getAttribute("value")
        }) || o("value", function(e, t, n) {
            if (!n && "input" === e.nodeName.toLowerCase())
                return e.defaultValue
        }),
        i(function(e) {
            return null == e.getAttribute("disabled")
        }) || o(ee, function(e, t, n) {
            var r;
            if (!n)
                return !0 === e[t] ? t.toLowerCase() : (r = e.getAttributeNode(t)) && r.specified ? r.value : null
        }),
        t
    }(e);
    ie.find = oe,
    ie.expr = oe.selectors,
    ie.expr[":"] = ie.expr.pseudos,
    ie.uniqueSort = ie.unique = oe.uniqueSort,
    ie.text = oe.getText,
    ie.isXMLDoc = oe.isXML,
    ie.contains = oe.contains,
    ie.escapeSelector = oe.escape;
    var ae = function(e, t, n) {
        for (var r = [], i = void 0 !== n; (e = e[t]) && 9 !== e.nodeType; )
            if (1 === e.nodeType) {
                if (i && ie(e).is(n))
                    break;
                r.push(e)
            }
        return r
    }
      , se = function(e, t) {
        for (var n = []; e; e = e.nextSibling)
            1 === e.nodeType && e !== t && n.push(e);
        return n
    }
      , le = ie.expr.match.needsContext
      , ue = /^<([a-z][^\/\0>:\x20\t\r\n\f]*)[\x20\t\r\n\f]*\/?>(?:<\/\1>|)$/i;
    ie.filter = function(e, t, n) {
        var r = t[0];
        return n && (e = ":not(" + e + ")"),
        1 === t.length && 1 === r.nodeType ? ie.find.matchesSelector(r, e) ? [r] : [] : ie.find.matches(e, ie.grep(t, function(e) {
            return 1 === e.nodeType
        }))
    }
    ,
    ie.fn.extend({
        find: function(e) {
            var t, n, r = this.length, i = this;
            if ("string" != typeof e)
                return this.pushStack(ie(e).filter(function() {
                    for (t = 0; t < r; t++)
                        if (ie.contains(i[t], this))
                            return !0
                }));
            for (n = this.pushStack([]),
            t = 0; t < r; t++)
                ie.find(e, i[t], n);
            return 1 < r ? ie.uniqueSort(n) : n
        },
        filter: function(e) {
            return this.pushStack(a(this, e || [], !1))
        },
        not: function(e) {
            return this.pushStack(a(this, e || [], !0))
        },
        is: function(e) {
            return !!a(this, "string" == typeof e && le.test(e) ? ie(e) : e || [], !1).length
        }
    });
    var ce, fe = /^(?:\s*(<[\w\W]+>)[^>]*|#([\w-]+))$/;
    (ie.fn.init = function(e, t, n) {
        var r, i;
        if (!e)
            return this;
        if (n = n || ce,
        "string" == typeof e) {
            if (!(r = "<" === e[0] && ">" === e[e.length - 1] && 3 <= e.length ? [null, e, null] : fe.exec(e)) || !r[1] && t)
                return !t || t.jquery ? (t || n).find(e) : this.constructor(t).find(e);
            if (r[1]) {
                if (t = t instanceof ie ? t[0] : t,
                ie.merge(this, ie.parseHTML(r[1], t && t.nodeType ? t.ownerDocument || t : te, !0)),
                ue.test(r[1]) && ie.isPlainObject(t))
                    for (r in t)
                        Z(this[r]) ? this[r](t[r]) : this.attr(r, t[r]);
                return this
            }
            return (i = te.getElementById(r[2])) && (this[0] = i,
            this.length = 1),
            this
        }
        return e.nodeType ? (this[0] = e,
        this.length = 1,
        this) : Z(e) ? void 0 !== n.ready ? n.ready(e) : e(ie) : ie.makeArray(e, this)
    }
    ).prototype = ie.fn,
    ce = ie(te);
    var de = /^(?:parents|prev(?:Until|All))/
      , pe = {
        children: !0,
        contents: !0,
        next: !0,
        prev: !0
    };
    ie.fn.extend({
        has: function(e) {
            var t = ie(e, this)
              , n = t.length;
            return this.filter(function() {
                for (var e = 0; e < n; e++)
                    if (ie.contains(this, t[e]))
                        return !0
            })
        },
        closest: function(e, t) {
            var n, r = 0, i = this.length, o = [], a = "string" != typeof e && ie(e);
            if (!le.test(e))
                for (; r < i; r++)
                    for (n = this[r]; n && n !== t; n = n.parentNode)
                        if (n.nodeType < 11 && (a ? -1 < a.index(n) : 1 === n.nodeType && ie.find.matchesSelector(n, e))) {
                            o.push(n);
                            break
                        }
            return this.pushStack(1 < o.length ? ie.uniqueSort(o) : o)
        },
        index: function(e) {
            return e ? "string" == typeof e ? X.call(ie(e), this[0]) : X.call(this, e.jquery ? e[0] : e) : this[0] && this[0].parentNode ? this.first().prevAll().length : -1
        },
        add: function(e, t) {
            return this.pushStack(ie.uniqueSort(ie.merge(this.get(), ie(e, t))))
        },
        addBack: function(e) {
            return this.add(null == e ? this.prevObject : this.prevObject.filter(e))
        }
    }),
    ie.each({
        parent: function(e) {
            var t = e.parentNode;
            return t && 11 !== t.nodeType ? t : null
        },
        parents: function(e) {
            return ae(e, "parentNode")
        },
        parentsUntil: function(e, t, n) {
            return ae(e, "parentNode", n)
        },
        next: function(e) {
            return s(e, "nextSibling")
        },
        prev: function(e) {
            return s(e, "previousSibling")
        },
        nextAll: function(e) {
            return ae(e, "nextSibling")
        },
        prevAll: function(e) {
            return ae(e, "previousSibling")
        },
        nextUntil: function(e, t, n) {
            return ae(e, "nextSibling", n)
        },
        prevUntil: function(e, t, n) {
            return ae(e, "previousSibling", n)
        },
        siblings: function(e) {
            return se((e.parentNode || {}).firstChild, e)
        },
        children: function(e) {
            return se(e.firstChild)
        },
        contents: function(e) {
            return null != e.contentDocument && B(e.contentDocument) ? e.contentDocument : (o(e, "template") && (e = e.content || e),
            ie.merge([], e.childNodes))
        }
    }, function(e, t) {
        ie.fn[e] = function(n, r) {
            var i = ie.map(this, t, n);
            return "Until" !== e.slice(-5) && (r = n),
            r && "string" == typeof r && (i = ie.filter(r, i)),
            1 < this.length && (pe[e] || ie.uniqueSort(i),
            de.test(e) && i.reverse()),
            this.pushStack(i)
        }
    });
    var he = /[^\x20\t\r\n\f]+/g;
    ie.Callbacks = function(e) {
        var t, n;
        e = "string" == typeof e ? (t = e,
        n = {},
        ie.each(t.match(he) || [], function(e, t) {
            n[t] = !0
        }),
        n) : ie.extend({}, e);
        var i, o, a, s, l = [], u = [], c = -1, f = function() {
            for (s = s || e.once,
            a = i = !0; u.length; c = -1)
                for (o = u.shift(); ++c < l.length; )
                    !1 === l[c].apply(o[0], o[1]) && e.stopOnFalse && (c = l.length,
                    o = !1);
            e.memory || (o = !1),
            i = !1,
            s && (l = o ? [] : "")
        }, d = {
            add: function() {
                return l && (o && !i && (c = l.length - 1,
                u.push(o)),
                function t(n) {
                    ie.each(n, function(n, i) {
                        Z(i) ? e.unique && d.has(i) || l.push(i) : i && i.length && "string" !== r(i) && t(i)
                    })
                }(arguments),
                o && !i && f()),
                this
            },
            remove: function() {
                return ie.each(arguments, function(e, t) {
                    for (var n; -1 < (n = ie.inArray(t, l, n)); )
                        l.splice(n, 1),
                        n <= c && c--
                }),
                this
            },
            has: function(e) {
                return e ? -1 < ie.inArray(e, l) : 0 < l.length
            },
            empty: function() {
                return l && (l = []),
                this
            },
            disable: function() {
                return s = u = [],
                l = o = "",
                this
            },
            disabled: function() {
                return !l
            },
            lock: function() {
                return s = u = [],
                o || i || (l = o = ""),
                this
            },
            locked: function() {
                return !!s
            },
            fireWith: function(e, t) {
                return s || (t = [e, (t = t || []).slice ? t.slice() : t],
                u.push(t),
                i || f()),
                this
            },
            fire: function() {
                return d.fireWith(this, arguments),
                this
            },
            fired: function() {
                return !!a
            }
        };
        return d
    }
    ,
    ie.extend({
        Deferred: function(t) {
            var n = [["notify", "progress", ie.Callbacks("memory"), ie.Callbacks("memory"), 2], ["resolve", "done", ie.Callbacks("once memory"), ie.Callbacks("once memory"), 0, "resolved"], ["reject", "fail", ie.Callbacks("once memory"), ie.Callbacks("once memory"), 1, "rejected"]]
              , r = "pending"
              , i = {
                state: function() {
                    return r
                },
                always: function() {
                    return o.done(arguments).fail(arguments),
                    this
                },
                "catch": function(e) {
                    return i.then(null, e)
                },
                pipe: function() {
                    var e = arguments;
                    return ie.Deferred(function(t) {
                        ie.each(n, function(n, r) {
                            var i = Z(e[r[4]]) && e[r[4]];
                            o[r[1]](function() {
                                var e = i && i.apply(this, arguments);
                                e && Z(e.promise) ? e.promise().progress(t.notify).done(t.resolve).fail(t.reject) : t[r[0] + "With"](this, i ? [e] : arguments)
                            })
                        }),
                        e = null
                    }).promise()
                },
                then: function(t, r, i) {
                    function o(t, n, r, i) {
                        return function() {
                            var s = this
                              , c = arguments
                              , f = function() {
                                var e, f;
                                if (!(t < a)) {
                                    if ((e = r.apply(s, c)) === n.promise())
                                        throw new TypeError("Thenable self-resolution");
                                    f = e && ("object" == typeof e || "function" == typeof e) && e.then,
                                    Z(f) ? i ? f.call(e, o(a, n, l, i), o(a, n, u, i)) : (a++,
                                    f.call(e, o(a, n, l, i), o(a, n, u, i), o(a, n, l, n.notifyWith))) : (r !== l && (s = void 0,
                                    c = [e]),
                                    (i || n.resolveWith)(s, c))
                                }
                            }
                              , d = i ? f : function() {
                                try {
                                    f()
                                } catch (f) {
                                    ie.Deferred.exceptionHook && ie.Deferred.exceptionHook(f, d.stackTrace),
                                    a <= t + 1 && (r !== u && (s = void 0,
                                    c = [f]),
                                    n.rejectWith(s, c))
                                }
                            }
                            ;
                            t ? d() : (ie.Deferred.getStackHook && (d.stackTrace = ie.Deferred.getStackHook()),
                            e.setTimeout(d))
                        }
                    }
                    var a = 0;
                    return ie.Deferred(function(e) {
                        n[0][3].add(o(0, e, Z(i) ? i : l, e.notifyWith)),
                        n[1][3].add(o(0, e, Z(t) ? t : l)),
                        n[2][3].add(o(0, e, Z(r) ? r : u))
                    }).promise()
                },
                promise: function(e) {
                    return null != e ? ie.extend(e, i) : i
                }
            }
              , o = {};
            return ie.each(n, function(e, t) {
                var a = t[2]
                  , s = t[5];
                i[t[1]] = a.add,
                s && a.add(function() {
                    r = s
                }, n[3 - e][2].disable, n[3 - e][3].disable, n[0][2].lock, n[0][3].lock),
                a.add(t[3].fire),
                o[t[0]] = function() {
                    return o[t[0] + "With"](this === o ? void 0 : this, arguments),
                    this
                }
                ,
                o[t[0] + "With"] = a.fireWith
            }),
            i.promise(o),
            t && t.call(o, o),
            o
        },
        when: function(e) {
            var t = arguments.length
              , n = t
              , r = Array(n)
              , i = _.call(arguments)
              , o = ie.Deferred()
              , a = function(e) {
                return function(n) {
                    r[e] = this,
                    i[e] = 1 < arguments.length ? _.call(arguments) : n,
                    --t || o.resolveWith(r, i)
                }
            };
            if (t <= 1 && (c(e, o.done(a(n)).resolve, o.reject, !t),
            "pending" === o.state() || Z(i[n] && i[n].then)))
                return o.then();
            for (; n--; )
                c(i[n], a(n), o.reject);
            return o.promise()
        }
    });
    var me = /^(Eval|Internal|Range|Reference|Syntax|Type|URI)Error$/;
    ie.Deferred.exceptionHook = function(t, n) {
        e.console && e.console.warn && t && me.test(t.name) && e.console.warn("jQuery.Deferred exception: " + t.message, t.stack, n)
    }
    ,
    ie.readyException = function(t) {
        e.setTimeout(function() {
            throw t
        })
    }
    ;
    var ge = ie.Deferred();
    ie.fn.ready = function(e) {
        return ge.then(e)["catch"](function(e) {
            ie.readyException(e)
        }),
        this
    }
    ,
    ie.extend({
        isReady: !1,
        readyWait: 1,
        ready: function(e) {
            (!0 === e ? --ie.readyWait : ie.isReady) || (ie.isReady = !0) !== e && 0 < --ie.readyWait || ge.resolveWith(te, [ie])
        }
    }),
    ie.ready.then = ge.then,
    "complete" === te.readyState || "loading" !== te.readyState && !te.documentElement.doScroll ? e.setTimeout(ie.ready) : (te.addEventListener("DOMContentLoaded", f),
    e.addEventListener("load", f));
    var ve = function(e, t, n, i, o, a, s) {
        var l = 0
          , u = e.length
          , c = null == n;
        if ("object" === r(n))
            for (l in o = !0,
            n)
                ve(e, t, l, n[l], !0, a, s);
        else if (void 0 !== i && (o = !0,
        Z(i) || (s = !0),
        c && (s ? (t.call(e, i),
        t = null) : (c = t,
        t = function(e, t, n) {
            return c.call(ie(e), n)
        }
        )),
        t))
            for (; l < u; l++)
                t(e[l], n, s ? i : i.call(e[l], l, t(e[l], n)));
        return o ? e : c ? t.call(e) : u ? t(e[0], n) : a
    }
      , ye = /^-ms-/
      , be = /-([a-z])/g
      , xe = function(e) {
        return 1 === e.nodeType || 9 === e.nodeType || !+e.nodeType
    };
    h.uid = 1,
    h.prototype = {
        cache: function(e) {
            var t = e[this.expando];
            return t || (t = {},
            xe(e) && (e.nodeType ? e[this.expando] = t : Object.defineProperty(e, this.expando, {
                value: t,
                configurable: !0
            }))),
            t
        },
        set: function(e, t, n) {
            var r, i = this.cache(e);
            if ("string" == typeof t)
                i[p(t)] = n;
            else
                for (r in t)
                    i[p(r)] = t[r];
            return i
        },
        get: function(e, t) {
            return void 0 === t ? this.cache(e) : e[this.expando] && e[this.expando][p(t)]
        },
        access: function(e, t, n) {
            return void 0 === t || t && "string" == typeof t && void 0 === n ? this.get(e, t) : (this.set(e, t, n),
            void 0 !== n ? n : t)
        },
        remove: function(e, t) {
            var n, r = e[this.expando];
            if (void 0 !== r) {
                if (void 0 !== t) {
                    n = (t = Array.isArray(t) ? t.map(p) : (t = p(t))in r ? [t] : t.match(he) || []).length;
                    for (; n--; )
                        delete r[t[n]]
                }
                (void 0 === t || ie.isEmptyObject(r)) && (e.nodeType ? e[this.expando] = void 0 : delete e[this.expando])
            }
        },
        hasData: function(e) {
            var t = e[this.expando];
            return void 0 !== t && !ie.isEmptyObject(t)
        }
    };
    var Ce = new h
      , we = new h
      , Se = /^(?:\{[\w\W]*\}|\[[\w\W]*\])$/
      , Ae = /[A-Z]/g;
    ie.extend({
        hasData: function(e) {
            return we.hasData(e) || Ce.hasData(e)
        },
        data: function(e, t, n) {
            return we.access(e, t, n)
        },
        removeData: function(e, t) {
            we.remove(e, t)
        },
        _data: function(e, t, n) {
            return Ce.access(e, t, n)
        },
        _removeData: function(e, t) {
            Ce.remove(e, t)
        }
    }),
    ie.fn.extend({
        data: function(e, t) {
            var n, r, i, o = this[0], a = o && o.attributes;
            if (void 0 === e) {
                if (this.length && (i = we.get(o),
                1 === o.nodeType && !Ce.get(o, "hasDataAttrs"))) {
                    for (n = a.length; n--; )
                        a[n] && 0 === (r = a[n].name).indexOf("data-") && (r = p(r.slice(5)),
                        m(o, r, i[r]));
                    Ce.set(o, "hasDataAttrs", !0)
                }
                return i
            }
            return "object" == typeof e ? this.each(function() {
                we.set(this, e)
            }) : ve(this, function(t) {
                var n;
                if (o && void 0 === t)
                    return void 0 !== (n = we.get(o, e)) ? n : void 0 !== (n = m(o, e)) ? n : void 0;
                this.each(function() {
                    we.set(this, e, t)
                })
            }, null, t, 1 < arguments.length, null, !0)
        },
        removeData: function(e) {
            return this.each(function() {
                we.remove(this, e)
            })
        }
    }),
    ie.extend({
        queue: function(e, t, n) {
            var r;
            if (e)
                return t = (t || "fx") + "queue",
                r = Ce.get(e, t),
                n && (!r || Array.isArray(n) ? r = Ce.access(e, t, ie.makeArray(n)) : r.push(n)),
                r || []
        },
        dequeue: function(e, t) {
            t = t || "fx";
            var n = ie.queue(e, t)
              , r = n.length
              , i = n.shift()
              , o = ie._queueHooks(e, t);
            "inprogress" === i && (i = n.shift(),
            r--),
            i && ("fx" === t && n.unshift("inprogress"),
            delete o.stop,
            i.call(e, function() {
                ie.dequeue(e, t)
            }, o)),
            !r && o && o.empty.fire()
        },
        _queueHooks: function(e, t) {
            var n = t + "queueHooks";
            return Ce.get(e, n) || Ce.access(e, n, {
                empty: ie.Callbacks("once memory").add(function() {
                    Ce.remove(e, [t + "queue", n])
                })
            })
        }
    }),
    ie.fn.extend({
        queue: function(e, t) {
            var n = 2;
            return "string" != typeof e && (t = e,
            e = "fx",
            n--),
            arguments.length < n ? ie.queue(this[0], e) : void 0 === t ? this : this.each(function() {
                var n = ie.queue(this, e, t);
                ie._queueHooks(this, e),
                "fx" === e && "inprogress" !== n[0] && ie.dequeue(this, e)
            })
        },
        dequeue: function(e) {
            return this.each(function() {
                ie.dequeue(this, e)
            })
        },
        clearQueue: function(e) {
            return this.queue(e || "fx", [])
        },
        promise: function(e, t) {
            var n, r = 1, i = ie.Deferred(), o = this, a = this.length, s = function() {
                --r || i.resolveWith(o, [o])
            };
            for ("string" != typeof e && (t = e,
            e = void 0),
            e = e || "fx"; a--; )
                (n = Ce.get(o[a], e + "queueHooks")) && n.empty && (r++,
                n.empty.add(s));
            return s(),
            i.promise(t)
        }
    });
    var Ee = /[+-]?(?:\d*\.|)\d+(?:[eE][+-]?\d+|)/.source
      , ke = new RegExp("^(?:([+-])=|)(" + Ee + ")([a-z%]*)$","i")
      , Te = ["Top", "Right", "Bottom", "Left"]
      , Re = te.documentElement
      , De = function(e) {
        return ie.contains(e.ownerDocument, e)
    }
      , Ne = {
        composed: !0
    };
    Re.getRootNode && (De = function(e) {
        return ie.contains(e.ownerDocument, e) || e.getRootNode(Ne) === e.ownerDocument
    }
    );
    var je = function(e, t) {
        return "none" === (e = t || e).style.display || "" === e.style.display && De(e) && "none" === ie.css(e, "display")
    }
      , Le = {};
    ie.fn.extend({
        show: function() {
            return g(this, !0)
        },
        hide: function() {
            return g(this)
        },
        toggle: function(e) {
            return "boolean" == typeof e ? e ? this.show() : this.hide() : this.each(function() {
                je(this) ? ie(this).show() : ie(this).hide()
            })
        }
    });
    var Pe, Ie, Oe = /^(?:checkbox|radio)$/i, qe = /<([a-z][^\/\0>\x20\t\r\n\f]*)/i, He = /^$|^module$|\/(?:java|ecma)script/i;
    Pe = te.createDocumentFragment().appendChild(te.createElement("div")),
    (Ie = te.createElement("input")).setAttribute("type", "radio"),
    Ie.setAttribute("checked", "checked"),
    Ie.setAttribute("name", "t"),
    Pe.appendChild(Ie),
    K.checkClone = Pe.cloneNode(!0).cloneNode(!0).lastChild.checked,
    Pe.innerHTML = "<textarea>x</textarea>",
    K.noCloneChecked = !!Pe.cloneNode(!0).lastChild.defaultValue,
    Pe.innerHTML = "<option></option>",
    K.option = !!Pe.lastChild;
    var Me = {
        thead: [1, "<table>", "</table>"],
        col: [2, "<table><colgroup>", "</colgroup></table>"],
        tr: [2, "<table><tbody>", "</tbody></table>"],
        td: [3, "<table><tbody><tr>", "</tr></tbody></table>"],
        _default: [0, "", ""]
    };
    Me.tbody = Me.tfoot = Me.colgroup = Me.caption = Me.thead,
    Me.th = Me.td,
    K.option || (Me.optgroup = Me.option = [1, "<select multiple='multiple'>", "</select>"]);
    var Fe = /<|&#?\w+;/
      , We = /^key/
      , $e = /^(?:mouse|pointer|contextmenu|drag|drop)|click/
      , Be = /^([^.]*)(?:\.(.+)|)/;
    ie.event = {
        global: {},
        add: function(e, t, n, r, i) {
            var o, a, s, l, u, c, f, d, p, h, m, g = Ce.get(e);
            if (xe(e))
                for (n.handler && (n = (o = n).handler,
                i = o.selector),
                i && ie.find.matchesSelector(Re, i),
                n.guid || (n.guid = ie.guid++),
                (l = g.events) || (l = g.events = Object.create(null)),
                (a = g.handle) || (a = g.handle = function(t) {
                    return void 0 !== ie && ie.event.triggered !== t.type ? ie.event.dispatch.apply(e, arguments) : void 0
                }
                ),
                u = (t = (t || "").match(he) || [""]).length; u--; )
                    p = m = (s = Be.exec(t[u]) || [])[1],
                    h = (s[2] || "").split(".").sort(),
                    p && (f = ie.event.special[p] || {},
                    p = (i ? f.delegateType : f.bindType) || p,
                    f = ie.event.special[p] || {},
                    c = ie.extend({
                        type: p,
                        origType: m,
                        data: r,
                        handler: n,
                        guid: n.guid,
                        selector: i,
                        needsContext: i && ie.expr.match.needsContext.test(i),
                        namespace: h.join(".")
                    }, o),
                    (d = l[p]) || ((d = l[p] = []).delegateCount = 0,
                    f.setup && !1 !== f.setup.call(e, r, h, a) || e.addEventListener && e.addEventListener(p, a)),
                    f.add && (f.add.call(e, c),
                    c.handler.guid || (c.handler.guid = n.guid)),
                    i ? d.splice(d.delegateCount++, 0, c) : d.push(c),
                    ie.event.global[p] = !0)
        },
        remove: function(e, t, n, r, i) {
            var o, a, s, l, u, c, f, d, p, h, m, g = Ce.hasData(e) && Ce.get(e);
            if (g && (l = g.events)) {
                for (u = (t = (t || "").match(he) || [""]).length; u--; )
                    if (p = m = (s = Be.exec(t[u]) || [])[1],
                    h = (s[2] || "").split(".").sort(),
                    p) {
                        for (f = ie.event.special[p] || {},
                        d = l[p = (r ? f.delegateType : f.bindType) || p] || [],
                        s = s[2] && new RegExp("(^|\\.)" + h.join("\\.(?:.*\\.|)") + "(\\.|$)"),
                        a = o = d.length; o--; )
                            c = d[o],
                            !i && m !== c.origType || n && n.guid !== c.guid || s && !s.test(c.namespace) || r && r !== c.selector && ("**" !== r || !c.selector) || (d.splice(o, 1),
                            c.selector && d.delegateCount--,
                            f.remove && f.remove.call(e, c));
                        a && !d.length && (f.teardown && !1 !== f.teardown.call(e, h, g.handle) || ie.removeEvent(e, p, g.handle),
                        delete l[p])
                    } else
                        for (p in l)
                            ie.event.remove(e, p + t[u], n, r, !0);
                ie.isEmptyObject(l) && Ce.remove(e, "handle events")
            }
        },
        dispatch: function(e) {
            var t, n, r, i, o, a, s = new Array(arguments.length), l = ie.event.fix(e), u = (Ce.get(this, "events") || Object.create(null))[l.type] || [], c = ie.event.special[l.type] || {};
            for (s[0] = l,
            t = 1; t < arguments.length; t++)
                s[t] = arguments[t];
            if (l.delegateTarget = this,
            !c.preDispatch || !1 !== c.preDispatch.call(this, l)) {
                for (a = ie.event.handlers.call(this, l, u),
                t = 0; (i = a[t++]) && !l.isPropagationStopped(); )
                    for (l.currentTarget = i.elem,
                    n = 0; (o = i.handlers[n++]) && !l.isImmediatePropagationStopped(); )
                        l.rnamespace && !1 !== o.namespace && !l.rnamespace.test(o.namespace) || (l.handleObj = o,
                        l.data = o.data,
                        void 0 !== (r = ((ie.event.special[o.origType] || {}).handle || o.handler).apply(i.elem, s)) && !1 === (l.result = r) && (l.preventDefault(),
                        l.stopPropagation()));
                return c.postDispatch && c.postDispatch.call(this, l),
                l.result
            }
        },
        handlers: function(e, t) {
            var n, r, i, o, a, s = [], l = t.delegateCount, u = e.target;
            if (l && u.nodeType && !("click" === e.type && 1 <= e.button))
                for (; u !== this; u = u.parentNode || this)
                    if (1 === u.nodeType && ("click" !== e.type || !0 !== u.disabled)) {
                        for (o = [],
                        a = {},
                        n = 0; n < l; n++)
                            void 0 === a[i = (r = t[n]).selector + " "] && (a[i] = r.needsContext ? -1 < ie(i, this).index(u) : ie.find(i, this, null, [u]).length),
                            a[i] && o.push(r);
                        o.length && s.push({
                            elem: u,
                            handlers: o
                        })
                    }
            return u = this,
            l < t.length && s.push({
                elem: u,
                handlers: t.slice(l)
            }),
            s
        },
        addProp: function(e, t) {
            Object.defineProperty(ie.Event.prototype, e, {
                enumerable: !0,
                configurable: !0,
                get: Z(t) ? function() {
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
            return e[ie.expando] ? e : new ie.Event(e)
        },
        special: {
            load: {
                noBubble: !0
            },
            click: {
                setup: function(e) {
                    var t = this || e;
                    return Oe.test(t.type) && t.click && o(t, "input") && A(t, "click", x),
                    !1
                },
                trigger: function(e) {
                    var t = this || e;
                    return Oe.test(t.type) && t.click && o(t, "input") && A(t, "click"),
                    !0
                },
                _default: function(e) {
                    var t = e.target;
                    return Oe.test(t.type) && t.click && o(t, "input") && Ce.get(t, "click") || o(t, "a")
                }
            },
            beforeunload: {
                postDispatch: function(e) {
                    void 0 !== e.result && e.originalEvent && (e.originalEvent.returnValue = e.result)
                }
            }
        }
    },
    ie.removeEvent = function(e, t, n) {
        e.removeEventListener && e.removeEventListener(t, n)
    }
    ,
    ie.Event = function(e, t) {
        if (!(this instanceof ie.Event))
            return new ie.Event(e,t);
        e && e.type ? (this.originalEvent = e,
        this.type = e.type,
        this.isDefaultPrevented = e.defaultPrevented || void 0 === e.defaultPrevented && !1 === e.returnValue ? x : C,
        this.target = e.target && 3 === e.target.nodeType ? e.target.parentNode : e.target,
        this.currentTarget = e.currentTarget,
        this.relatedTarget = e.relatedTarget) : this.type = e,
        t && ie.extend(this, t),
        this.timeStamp = e && e.timeStamp || Date.now(),
        this[ie.expando] = !0
    }
    ,
    ie.Event.prototype = {
        constructor: ie.Event,
        isDefaultPrevented: C,
        isPropagationStopped: C,
        isImmediatePropagationStopped: C,
        isSimulated: !1,
        preventDefault: function() {
            var e = this.originalEvent;
            this.isDefaultPrevented = x,
            e && !this.isSimulated && e.preventDefault()
        },
        stopPropagation: function() {
            var e = this.originalEvent;
            this.isPropagationStopped = x,
            e && !this.isSimulated && e.stopPropagation()
        },
        stopImmediatePropagation: function() {
            var e = this.originalEvent;
            this.isImmediatePropagationStopped = x,
            e && !this.isSimulated && e.stopImmediatePropagation(),
            this.stopPropagation()
        }
    },
    ie.each({
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
            return null == e.which && We.test(e.type) ? null != e.charCode ? e.charCode : e.keyCode : !e.which && void 0 !== t && $e.test(e.type) ? 1 & t ? 1 : 2 & t ? 3 : 4 & t ? 2 : 0 : e.which
        }
    }, ie.event.addProp),
    ie.each({
        focus: "focusin",
        blur: "focusout"
    }, function(e, t) {
        ie.event.special[e] = {
            setup: function() {
                return A(this, e, w),
                !1
            },
            trigger: function() {
                return A(this, e),
                !0
            },
            delegateType: t
        }
    }),
    ie.each({
        mouseenter: "mouseover",
        mouseleave: "mouseout",
        pointerenter: "pointerover",
        pointerleave: "pointerout"
    }, function(e, t) {
        ie.event.special[e] = {
            delegateType: t,
            bindType: t,
            handle: function(e) {
                var n, r = e.relatedTarget, i = e.handleObj;
                return r && (r === this || ie.contains(this, r)) || (e.type = i.origType,
                n = i.handler.apply(this, arguments),
                e.type = t),
                n
            }
        }
    }),
    ie.fn.extend({
        on: function(e, t, n, r) {
            return S(this, e, t, n, r)
        },
        one: function(e, t, n, r) {
            return S(this, e, t, n, r, 1)
        },
        off: function(e, t, n) {
            var r, i;
            if (e && e.preventDefault && e.handleObj)
                return r = e.handleObj,
                ie(e.delegateTarget).off(r.namespace ? r.origType + "." + r.namespace : r.origType, r.selector, r.handler),
                this;
            if ("object" == typeof e) {
                for (i in e)
                    this.off(i, t, e[i]);
                return this
            }
            return !1 !== t && "function" != typeof t || (n = t,
            t = void 0),
            !1 === n && (n = C),
            this.each(function() {
                ie.event.remove(this, e, n, t)
            })
        }
    });
    var _e = /<script|<style|<link/i
      , Ue = /checked\s*(?:[^=]|=\s*.checked.)/i
      , ze = /^\s*<!(?:\[CDATA\[|--)|(?:\]\]|--)>\s*$/g;
    ie.extend({
        htmlPrefilter: function(e) {
            return e
        },
        clone: function(e, t, n) {
            var r, i, o, a, s, l, u, c = e.cloneNode(!0), f = De(e);
            if (!(K.noCloneChecked || 1 !== e.nodeType && 11 !== e.nodeType || ie.isXMLDoc(e)))
                for (a = v(c),
                r = 0,
                i = (o = v(e)).length; r < i; r++)
                    s = o[r],
                    "input" === (u = (l = a[r]).nodeName.toLowerCase()) && Oe.test(s.type) ? l.checked = s.checked : "input" !== u && "textarea" !== u || (l.defaultValue = s.defaultValue);
            if (t)
                if (n)
                    for (o = o || v(e),
                    a = a || v(c),
                    r = 0,
                    i = o.length; r < i; r++)
                        R(o[r], a[r]);
                else
                    R(e, c);
            return 0 < (a = v(c, "script")).length && y(a, !f && v(e, "script")),
            c
        },
        cleanData: function(e) {
            for (var t, n, r, i = ie.event.special, o = 0; void 0 !== (n = e[o]); o++)
                if (xe(n)) {
                    if (t = n[Ce.expando]) {
                        if (t.events)
                            for (r in t.events)
                                i[r] ? ie.event.remove(n, r) : ie.removeEvent(n, r, t.handle);
                        n[Ce.expando] = void 0
                    }
                    n[we.expando] && (n[we.expando] = void 0)
                }
        }
    }),
    ie.fn.extend({
        detach: function(e) {
            return N(this, e, !0)
        },
        remove: function(e) {
            return N(this, e)
        },
        text: function(e) {
            return ve(this, function(e) {
                return void 0 === e ? ie.text(this) : this.empty().each(function() {
                    1 !== this.nodeType && 11 !== this.nodeType && 9 !== this.nodeType || (this.textContent = e)
                })
            }, null, e, arguments.length)
        },
        append: function() {
            return D(this, arguments, function(e) {
                1 !== this.nodeType && 11 !== this.nodeType && 9 !== this.nodeType || E(this, e).appendChild(e)
            })
        },
        prepend: function() {
            return D(this, arguments, function(e) {
                if (1 === this.nodeType || 11 === this.nodeType || 9 === this.nodeType) {
                    var t = E(this, e);
                    t.insertBefore(e, t.firstChild)
                }
            })
        },
        before: function() {
            return D(this, arguments, function(e) {
                this.parentNode && this.parentNode.insertBefore(e, this)
            })
        },
        after: function() {
            return D(this, arguments, function(e) {
                this.parentNode && this.parentNode.insertBefore(e, this.nextSibling)
            })
        },
        empty: function() {
            for (var e, t = 0; null != (e = this[t]); t++)
                1 === e.nodeType && (ie.cleanData(v(e, !1)),
                e.textContent = "");
            return this
        },
        clone: function(e, t) {
            return e = null != e && e,
            t = null == t ? e : t,
            this.map(function() {
                return ie.clone(this, e, t)
            })
        },
        html: function(e) {
            return ve(this, function(e) {
                var t = this[0] || {}
                  , n = 0
                  , r = this.length;
                if (void 0 === e && 1 === t.nodeType)
                    return t.innerHTML;
                if ("string" == typeof e && !_e.test(e) && !Me[(qe.exec(e) || ["", ""])[1].toLowerCase()]) {
                    e = ie.htmlPrefilter(e);
                    try {
                        for (; n < r; n++)
                            1 === (t = this[n] || {}).nodeType && (ie.cleanData(v(t, !1)),
                            t.innerHTML = e);
                        t = 0
                    } catch (e) {}
                }
                t && this.empty().append(e)
            }, null, e, arguments.length)
        },
        replaceWith: function() {
            var e = [];
            return D(this, arguments, function(t) {
                var n = this.parentNode;
                ie.inArray(this, e) < 0 && (ie.cleanData(v(this)),
                n && n.replaceChild(t, this))
            }, e)
        }
    }),
    ie.each({
        appendTo: "append",
        prependTo: "prepend",
        insertBefore: "before",
        insertAfter: "after",
        replaceAll: "replaceWith"
    }, function(e, t) {
        ie.fn[e] = function(e) {
            for (var n, r = [], i = ie(e), o = i.length - 1, a = 0; a <= o; a++)
                n = a === o ? this : this.clone(!0),
                ie(i[a])[t](n),
                z.apply(r, n.get());
            return this.pushStack(r)
        }
    });
    var Xe = new RegExp("^(" + Ee + ")(?!px)[a-z%]+$","i")
      , Qe = function(t) {
        var n = t.ownerDocument.defaultView;
        return n && n.opener || (n = e),
        n.getComputedStyle(t)
    }
      , Ve = function(e, t, n) {
        var r, i, o = {};
        for (i in t)
            o[i] = e.style[i],
            e.style[i] = t[i];
        for (i in r = n.call(e),
        t)
            e.style[i] = o[i];
        return r
    }
      , Ge = new RegExp(Te.join("|"),"i");
    !function() {
        function t() {
            if (c) {
                u.style.cssText = "position:absolute;left:-11111px;width:60px;margin-top:1px;padding:0;border:0",
                c.style.cssText = "position:relative;display:block;box-sizing:border-box;overflow:scroll;margin:auto;border:1px;padding:1px;width:60%;top:1%",
                Re.appendChild(u).appendChild(c);
                var t = e.getComputedStyle(c);
                r = "1%" !== t.top,
                l = 12 === n(t.marginLeft),
                c.style.right = "60%",
                a = 36 === n(t.right),
                i = 36 === n(t.width),
                c.style.position = "absolute",
                o = 12 === n(c.offsetWidth / 3),
                Re.removeChild(u),
                c = null
            }
        }
        function n(e) {
            return Math.round(parseFloat(e))
        }
        var r, i, o, a, s, l, u = te.createElement("div"), c = te.createElement("div");
        c.style && (c.style.backgroundClip = "content-box",
        c.cloneNode(!0).style.backgroundClip = "",
        K.clearCloneStyle = "content-box" === c.style.backgroundClip,
        ie.extend(K, {
            boxSizingReliable: function() {
                return t(),
                i
            },
            pixelBoxStyles: function() {
                return t(),
                a
            },
            pixelPosition: function() {
                return t(),
                r
            },
            reliableMarginLeft: function() {
                return t(),
                l
            },
            scrollboxSize: function() {
                return t(),
                o
            },
            reliableTrDimensions: function() {
                var t, n, r, i;
                return null == s && (t = te.createElement("table"),
                n = te.createElement("tr"),
                r = te.createElement("div"),
                t.style.cssText = "position:absolute;left:-11111px",
                n.style.height = "1px",
                r.style.height = "9px",
                Re.appendChild(t).appendChild(n).appendChild(r),
                i = e.getComputedStyle(n),
                s = 3 < parseInt(i.height),
                Re.removeChild(t)),
                s
            }
        }))
    }();
    var Je, Ye, Ke = ["Webkit", "Moz", "ms"], Ze = te.createElement("div").style, et = {}, tt = /^(none|table(?!-c[ea]).+)/, nt = /^--/, rt = {
        position: "absolute",
        visibility: "hidden",
        display: "block"
    }, it = {
        letterSpacing: "0",
        fontWeight: "400"
    };
    ie.extend({
        cssHooks: {
            opacity: {
                get: function(e, t) {
                    if (t) {
                        var n = j(e, "opacity");
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
        style: function(e, t, n, r) {
            if (e && 3 !== e.nodeType && 8 !== e.nodeType && e.style) {
                var i, o, a, s = p(t), l = nt.test(t), u = e.style;
                if (l || (t = P(s)),
                a = ie.cssHooks[t] || ie.cssHooks[s],
                void 0 === n)
                    return a && "get"in a && void 0 !== (i = a.get(e, !1, r)) ? i : u[t];
                "string" == (o = typeof n) && (i = ke.exec(n)) && i[1] && (n = function(e, t, n, r) {
                    var i, o, a = 20, s = r ? function() {
                        return r.cur()
                    }
                    : function() {
                        return ie.css(e, t, "")
                    }
                    , l = s(), u = n && n[3] || (ie.cssNumber[t] ? "" : "px"), c = e.nodeType && (ie.cssNumber[t] || "px" !== u && +l) && ke.exec(ie.css(e, t));
                    if (c && c[3] !== u) {
                        for (l /= 2,
                        u = u || c[3],
                        c = +l || 1; a--; )
                            ie.style(e, t, c + u),
                            (1 - o) * (1 - (o = s() / l || .5)) <= 0 && (a = 0),
                            c /= o;
                        c *= 2,
                        ie.style(e, t, c + u),
                        n = n || []
                    }
                    return n && (c = +c || +l || 0,
                    i = n[1] ? c + (n[1] + 1) * n[2] : +n[2],
                    r && (r.unit = u,
                    r.start = c,
                    r.end = i)),
                    i
                }(e, t, i),
                o = "number"),
                null != n && n == n && ("number" !== o || l || (n += i && i[3] || (ie.cssNumber[s] ? "" : "px")),
                K.clearCloneStyle || "" !== n || 0 !== t.indexOf("background") || (u[t] = "inherit"),
                a && "set"in a && void 0 === (n = a.set(e, n, r)) || (l ? u.setProperty(t, n) : u[t] = n))
            }
        },
        css: function(e, t, n, r) {
            var i, o, a, s = p(t);
            return nt.test(t) || (t = P(s)),
            (a = ie.cssHooks[t] || ie.cssHooks[s]) && "get"in a && (i = a.get(e, !0, n)),
            void 0 === i && (i = j(e, t, r)),
            "normal" === i && t in it && (i = it[t]),
            "" === n || n ? (o = parseFloat(i),
            !0 === n || isFinite(o) ? o || 0 : i) : i
        }
    }),
    ie.each(["height", "width"], function(e, t) {
        ie.cssHooks[t] = {
            get: function(e, n, r) {
                if (n)
                    return !tt.test(ie.css(e, "display")) || e.getClientRects().length && e.getBoundingClientRect().width ? q(e, t, r) : Ve(e, rt, function() {
                        return q(e, t, r)
                    })
            },
            set: function(e, n, r) {
                var i, o = Qe(e), a = !K.scrollboxSize() && "absolute" === o.position, s = (a || r) && "border-box" === ie.css(e, "boxSizing", !1, o), l = r ? O(e, t, r, s, o) : 0;
                return s && a && (l -= Math.ceil(e["offset" + t[0].toUpperCase() + t.slice(1)] - parseFloat(o[t]) - O(e, t, "border", !1, o) - .5)),
                l && (i = ke.exec(n)) && "px" !== (i[3] || "px") && (e.style[t] = n,
                n = ie.css(e, t)),
                I(0, n, l)
            }
        }
    }),
    ie.cssHooks.marginLeft = L(K.reliableMarginLeft, function(e, t) {
        if (t)
            return (parseFloat(j(e, "marginLeft")) || e.getBoundingClientRect().left - Ve(e, {
                marginLeft: 0
            }, function() {
                return e.getBoundingClientRect().left
            })) + "px"
    }),
    ie.each({
        margin: "",
        padding: "",
        border: "Width"
    }, function(e, t) {
        ie.cssHooks[e + t] = {
            expand: function(n) {
                for (var r = 0, i = {}, o = "string" == typeof n ? n.split(" ") : [n]; r < 4; r++)
                    i[e + Te[r] + t] = o[r] || o[r - 2] || o[0];
                return i
            }
        },
        "margin" !== e && (ie.cssHooks[e + t].set = I)
    }),
    ie.fn.extend({
        css: function(e, t) {
            return ve(this, function(e, t, n) {
                var r, i, o = {}, a = 0;
                if (Array.isArray(t)) {
                    for (r = Qe(e),
                    i = t.length; a < i; a++)
                        o[t[a]] = ie.css(e, t[a], !1, r);
                    return o
                }
                return void 0 !== n ? ie.style(e, t, n) : ie.css(e, t)
            }, e, t, 1 < arguments.length)
        }
    }),
    ie.fn.delay = function(t, n) {
        return t = ie.fx && ie.fx.speeds[t] || t,
        n = n || "fx",
        this.queue(n, function(n, r) {
            var i = e.setTimeout(n, t);
            r.stop = function() {
                e.clearTimeout(i)
            }
        })
    }
    ,
    Je = te.createElement("input"),
    Ye = te.createElement("select").appendChild(te.createElement("option")),
    Je.type = "checkbox",
    K.checkOn = "" !== Je.value,
    K.optSelected = Ye.selected,
    (Je = te.createElement("input")).value = "t",
    Je.type = "radio",
    K.radioValue = "t" === Je.value;
    var ot, at = ie.expr.attrHandle;
    ie.fn.extend({
        attr: function(e, t) {
            return ve(this, ie.attr, e, t, 1 < arguments.length)
        },
        removeAttr: function(e) {
            return this.each(function() {
                ie.removeAttr(this, e)
            })
        }
    }),
    ie.extend({
        attr: function(e, t, n) {
            var r, i, o = e.nodeType;
            if (3 !== o && 8 !== o && 2 !== o)
                return "undefined" == typeof e.getAttribute ? ie.prop(e, t, n) : (1 === o && ie.isXMLDoc(e) || (i = ie.attrHooks[t.toLowerCase()] || (ie.expr.match.bool.test(t) ? ot : void 0)),
                void 0 !== n ? null === n ? void ie.removeAttr(e, t) : i && "set"in i && void 0 !== (r = i.set(e, n, t)) ? r : (e.setAttribute(t, n + ""),
                n) : i && "get"in i && null !== (r = i.get(e, t)) ? r : null == (r = ie.find.attr(e, t)) ? void 0 : r)
        },
        attrHooks: {
            type: {
                set: function(e, t) {
                    if (!K.radioValue && "radio" === t && o(e, "input")) {
                        var n = e.value;
                        return e.setAttribute("type", t),
                        n && (e.value = n),
                        t
                    }
                }
            }
        },
        removeAttr: function(e, t) {
            var n, r = 0, i = t && t.match(he);
            if (i && 1 === e.nodeType)
                for (; n = i[r++]; )
                    e.removeAttribute(n)
        }
    }),
    ot = {
        set: function(e, t, n) {
            return !1 === t ? ie.removeAttr(e, n) : e.setAttribute(n, n),
            n
        }
    },
    ie.each(ie.expr.match.bool.source.match(/\w+/g), function(e, t) {
        var n = at[t] || ie.find.attr;
        at[t] = function(e, t, r) {
            var i, o, a = t.toLowerCase();
            return r || (o = at[a],
            at[a] = i,
            i = null != n(e, t, r) ? a : null,
            at[a] = o),
            i
        }
    });
    var st = /^(?:input|select|textarea|button)$/i
      , lt = /^(?:a|area)$/i;
    ie.fn.extend({
        prop: function(e, t) {
            return ve(this, ie.prop, e, t, 1 < arguments.length)
        },
        removeProp: function(e) {
            return this.each(function() {
                delete this[ie.propFix[e] || e]
            })
        }
    }),
    ie.extend({
        prop: function(e, t, n) {
            var r, i, o = e.nodeType;
            if (3 !== o && 8 !== o && 2 !== o)
                return 1 === o && ie.isXMLDoc(e) || (t = ie.propFix[t] || t,
                i = ie.propHooks[t]),
                void 0 !== n ? i && "set"in i && void 0 !== (r = i.set(e, n, t)) ? r : e[t] = n : i && "get"in i && null !== (r = i.get(e, t)) ? r : e[t]
        },
        propHooks: {
            tabIndex: {
                get: function(e) {
                    var t = ie.find.attr(e, "tabindex");
                    return t ? parseInt(t, 10) : st.test(e.nodeName) || lt.test(e.nodeName) && e.href ? 0 : -1
                }
            }
        },
        propFix: {
            "for": "htmlFor",
            "class": "className"
        }
    }),
    K.optSelected || (ie.propHooks.selected = {
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
    ie.each(["tabIndex", "readOnly", "maxLength", "cellSpacing", "cellPadding", "rowSpan", "colSpan", "useMap", "frameBorder", "contentEditable"], function() {
        ie.propFix[this.toLowerCase()] = this
    }),
    ie.fn.extend({
        addClass: function(e) {
            var t, n, r, i, o, a, s, l = 0;
            if (Z(e))
                return this.each(function(t) {
                    ie(this).addClass(e.call(this, t, M(this)))
                });
            if ((t = F(e)).length)
                for (; n = this[l++]; )
                    if (i = M(n),
                    r = 1 === n.nodeType && " " + H(i) + " ") {
                        for (a = 0; o = t[a++]; )
                            r.indexOf(" " + o + " ") < 0 && (r += o + " ");
                        i !== (s = H(r)) && n.setAttribute("class", s)
                    }
            return this
        },
        removeClass: function(e) {
            var t, n, r, i, o, a, s, l = 0;
            if (Z(e))
                return this.each(function(t) {
                    ie(this).removeClass(e.call(this, t, M(this)))
                });
            if (!arguments.length)
                return this.attr("class", "");
            if ((t = F(e)).length)
                for (; n = this[l++]; )
                    if (i = M(n),
                    r = 1 === n.nodeType && " " + H(i) + " ") {
                        for (a = 0; o = t[a++]; )
                            for (; -1 < r.indexOf(" " + o + " "); )
                                r = r.replace(" " + o + " ", " ");
                        i !== (s = H(r)) && n.setAttribute("class", s)
                    }
            return this
        },
        toggleClass: function(e, t) {
            var n = typeof e
              , r = "string" === n || Array.isArray(e);
            return "boolean" == typeof t && r ? t ? this.addClass(e) : this.removeClass(e) : Z(e) ? this.each(function(n) {
                ie(this).toggleClass(e.call(this, n, M(this), t), t)
            }) : this.each(function() {
                var t, i, o, a;
                if (r)
                    for (i = 0,
                    o = ie(this),
                    a = F(e); t = a[i++]; )
                        o.hasClass(t) ? o.removeClass(t) : o.addClass(t);
                else
                    void 0 !== e && "boolean" !== n || ((t = M(this)) && Ce.set(this, "__className__", t),
                    this.setAttribute && this.setAttribute("class", t || !1 === e ? "" : Ce.get(this, "__className__") || ""))
            })
        },
        hasClass: function(e) {
            var t, n, r = 0;
            for (t = " " + e + " "; n = this[r++]; )
                if (1 === n.nodeType && -1 < (" " + H(M(n)) + " ").indexOf(t))
                    return !0;
            return !1
        }
    });
    var ut = /\r/g;
    ie.fn.extend({
        val: function(e) {
            var t, n, r, i = this[0];
            return arguments.length ? (r = Z(e),
            this.each(function(n) {
                var i;
                1 === this.nodeType && (null == (i = r ? e.call(this, n, ie(this).val()) : e) ? i = "" : "number" == typeof i ? i += "" : Array.isArray(i) && (i = ie.map(i, function(e) {
                    return null == e ? "" : e + ""
                })),
                (t = ie.valHooks[this.type] || ie.valHooks[this.nodeName.toLowerCase()]) && "set"in t && void 0 !== t.set(this, i, "value") || (this.value = i))
            })) : i ? (t = ie.valHooks[i.type] || ie.valHooks[i.nodeName.toLowerCase()]) && "get"in t && void 0 !== (n = t.get(i, "value")) ? n : "string" == typeof (n = i.value) ? n.replace(ut, "") : null == n ? "" : n : void 0
        }
    }),
    ie.extend({
        valHooks: {
            option: {
                get: function(e) {
                    var t = ie.find.attr(e, "value");
                    return null != t ? t : H(ie.text(e))
                }
            },
            select: {
                get: function(e) {
                    var t, n, r, i = e.options, a = e.selectedIndex, s = "select-one" === e.type, l = s ? null : [], u = s ? a + 1 : i.length;
                    for (r = a < 0 ? u : s ? a : 0; r < u; r++)
                        if (((n = i[r]).selected || r === a) && !n.disabled && (!n.parentNode.disabled || !o(n.parentNode, "optgroup"))) {
                            if (t = ie(n).val(),
                            s)
                                return t;
                            l.push(t)
                        }
                    return l
                },
                set: function(e, t) {
                    for (var n, r, i = e.options, o = ie.makeArray(t), a = i.length; a--; )
                        ((r = i[a]).selected = -1 < ie.inArray(ie.valHooks.option.get(r), o)) && (n = !0);
                    return n || (e.selectedIndex = -1),
                    o
                }
            }
        }
    }),
    ie.each(["radio", "checkbox"], function() {
        ie.valHooks[this] = {
            set: function(e, t) {
                if (Array.isArray(t))
                    return e.checked = -1 < ie.inArray(ie(e).val(), t)
            }
        },
        K.checkOn || (ie.valHooks[this].get = function(e) {
            return null === e.getAttribute("value") ? "on" : e.value
        }
        )
    }),
    K.focusin = "onfocusin"in e;
    var ct = /^(?:focusinfocus|focusoutblur)$/
      , ft = function(e) {
        e.stopPropagation()
    };
    ie.extend(ie.event, {
        trigger: function(t, n, r, i) {
            var o, a, s, l, u, c, f, d, p = [r || te], h = G.call(t, "type") ? t.type : t, m = G.call(t, "namespace") ? t.namespace.split(".") : [];
            if (a = d = s = r = r || te,
            3 !== r.nodeType && 8 !== r.nodeType && !ct.test(h + ie.event.triggered) && (-1 < h.indexOf(".") && (h = (m = h.split(".")).shift(),
            m.sort()),
            u = h.indexOf(":") < 0 && "on" + h,
            (t = t[ie.expando] ? t : new ie.Event(h,"object" == typeof t && t)).isTrigger = i ? 2 : 3,
            t.namespace = m.join("."),
            t.rnamespace = t.namespace ? new RegExp("(^|\\.)" + m.join("\\.(?:.*\\.|)") + "(\\.|$)") : null,
            t.result = void 0,
            t.target || (t.target = r),
            n = null == n ? [t] : ie.makeArray(n, [t]),
            f = ie.event.special[h] || {},
            i || !f.trigger || !1 !== f.trigger.apply(r, n))) {
                if (!i && !f.noBubble && !ee(r)) {
                    for (l = f.delegateType || h,
                    ct.test(l + h) || (a = a.parentNode); a; a = a.parentNode)
                        p.push(a),
                        s = a;
                    s === (r.ownerDocument || te) && p.push(s.defaultView || s.parentWindow || e)
                }
                for (o = 0; (a = p[o++]) && !t.isPropagationStopped(); )
                    d = a,
                    t.type = 1 < o ? l : f.bindType || h,
                    (c = (Ce.get(a, "events") || Object.create(null))[t.type] && Ce.get(a, "handle")) && c.apply(a, n),
                    (c = u && a[u]) && c.apply && xe(a) && (t.result = c.apply(a, n),
                    !1 === t.result && t.preventDefault());
                return t.type = h,
                i || t.isDefaultPrevented() || f._default && !1 !== f._default.apply(p.pop(), n) || !xe(r) || u && Z(r[h]) && !ee(r) && ((s = r[u]) && (r[u] = null),
                ie.event.triggered = h,
                t.isPropagationStopped() && d.addEventListener(h, ft),
                r[h](),
                t.isPropagationStopped() && d.removeEventListener(h, ft),
                ie.event.triggered = void 0,
                s && (r[u] = s)),
                t.result
            }
        },
        simulate: function(e, t, n) {
            var r = ie.extend(new ie.Event, n, {
                type: e,
                isSimulated: !0
            });
            ie.event.trigger(r, null, t)
        }
    }),
    ie.fn.extend({
        trigger: function(e, t) {
            return this.each(function() {
                ie.event.trigger(e, t, this)
            })
        },
        triggerHandler: function(e, t) {
            var n = this[0];
            if (n)
                return ie.event.trigger(e, t, n, !0)
        }
    }),
    K.focusin || ie.each({
        focus: "focusin",
        blur: "focusout"
    }, function(e, t) {
        var n = function(e) {
            ie.event.simulate(t, e.target, ie.event.fix(e))
        };
        ie.event.special[t] = {
            setup: function() {
                var r = this.ownerDocument || this.document || this
                  , i = Ce.access(r, t);
                i || r.addEventListener(e, n, !0),
                Ce.access(r, t, (i || 0) + 1)
            },
            teardown: function() {
                var r = this.ownerDocument || this.document || this
                  , i = Ce.access(r, t) - 1;
                i ? Ce.access(r, t, i) : (r.removeEventListener(e, n, !0),
                Ce.remove(r, t))
            }
        }
    }),
    ie.parseXML = function(t) {
        var n;
        if (!t || "string" != typeof t)
            return null;
        try {
            n = (new e.DOMParser).parseFromString(t, "text/xml")
        } catch (t) {
            n = void 0
        }
        return n && !n.getElementsByTagName("parsererror").length || ie.error("Invalid XML: " + t),
        n
    }
    ;
    var dt, pt = /\[\]$/, ht = /\r?\n/g, mt = /^(?:submit|button|image|reset|file)$/i, gt = /^(?:input|select|textarea|keygen)/i;
    ie.param = function(e, t) {
        var n, r = [], i = function(e, t) {
            var n = Z(t) ? t() : t;
            r[r.length] = encodeURIComponent(e) + "=" + encodeURIComponent(null == n ? "" : n)
        };
        if (null == e)
            return "";
        if (Array.isArray(e) || e.jquery && !ie.isPlainObject(e))
            ie.each(e, function() {
                i(this.name, this.value)
            });
        else
            for (n in e)
                W(n, e[n], t, i);
        return r.join("&")
    }
    ,
    ie.fn.extend({
        serialize: function() {
            return ie.param(this.serializeArray())
        },
        serializeArray: function() {
            return this.map(function() {
                var e = ie.prop(this, "elements");
                return e ? ie.makeArray(e) : this
            }).filter(function() {
                var e = this.type;
                return this.name && !ie(this).is(":disabled") && gt.test(this.nodeName) && !mt.test(e) && (this.checked || !Oe.test(e))
            }).map(function(e, t) {
                var n = ie(this).val();
                return null == n ? null : Array.isArray(n) ? ie.map(n, function(e) {
                    return {
                        name: t.name,
                        value: e.replace(ht, "\r\n")
                    }
                }) : {
                    name: t.name,
                    value: n.replace(ht, "\r\n")
                }
            }).get()
        }
    }),
    ie.fn.extend({
        wrapAll: function(e) {
            var t;
            return this[0] && (Z(e) && (e = e.call(this[0])),
            t = ie(e, this[0].ownerDocument).eq(0).clone(!0),
            this[0].parentNode && t.insertBefore(this[0]),
            t.map(function() {
                for (var e = this; e.firstElementChild; )
                    e = e.firstElementChild;
                return e
            }).append(this)),
            this
        },
        wrapInner: function(e) {
            return Z(e) ? this.each(function(t) {
                ie(this).wrapInner(e.call(this, t))
            }) : this.each(function() {
                var t = ie(this)
                  , n = t.contents();
                n.length ? n.wrapAll(e) : t.append(e)
            })
        },
        wrap: function(e) {
            var t = Z(e);
            return this.each(function(n) {
                ie(this).wrapAll(t ? e.call(this, n) : e)
            })
        },
        unwrap: function(e) {
            return this.parent(e).not("body").each(function() {
                ie(this).replaceWith(this.childNodes)
            }),
            this
        }
    }),
    ie.expr.pseudos.hidden = function(e) {
        return !ie.expr.pseudos.visible(e)
    }
    ,
    ie.expr.pseudos.visible = function(e) {
        return !!(e.offsetWidth || e.offsetHeight || e.getClientRects().length)
    }
    ,
    K.createHTMLDocument = ((dt = te.implementation.createHTMLDocument("").body).innerHTML = "<form></form><form></form>",
    2 === dt.childNodes.length),
    ie.parseHTML = function(e, t, n) {
        return "string" != typeof e ? [] : ("boolean" == typeof t && (n = t,
        t = !1),
        t || (K.createHTMLDocument ? ((r = (t = te.implementation.createHTMLDocument("")).createElement("base")).href = te.location.href,
        t.head.appendChild(r)) : t = te),
        o = !n && [],
        (i = ue.exec(e)) ? [t.createElement(i[1])] : (i = b([e], t, o),
        o && o.length && ie(o).remove(),
        ie.merge([], i.childNodes)));
        var r, i, o
    }
    ,
    ie.offset = {
        setOffset: function(e, t, n) {
            var r, i, o, a, s, l, u = ie.css(e, "position"), c = ie(e), f = {};
            "static" === u && (e.style.position = "relative"),
            s = c.offset(),
            o = ie.css(e, "top"),
            l = ie.css(e, "left"),
            ("absolute" === u || "fixed" === u) && -1 < (o + l).indexOf("auto") ? (a = (r = c.position()).top,
            i = r.left) : (a = parseFloat(o) || 0,
            i = parseFloat(l) || 0),
            Z(t) && (t = t.call(e, n, ie.extend({}, s))),
            null != t.top && (f.top = t.top - s.top + a),
            null != t.left && (f.left = t.left - s.left + i),
            "using"in t ? t.using.call(e, f) : ("number" == typeof f.top && (f.top += "px"),
            "number" == typeof f.left && (f.left += "px"),
            c.css(f))
        }
    },
    ie.fn.extend({
        offset: function(e) {
            if (arguments.length)
                return void 0 === e ? this : this.each(function(t) {
                    ie.offset.setOffset(this, e, t)
                });
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
                if ("fixed" === ie.css(r, "position"))
                    t = r.getBoundingClientRect();
                else {
                    for (t = this.offset(),
                    n = r.ownerDocument,
                    e = r.offsetParent || n.documentElement; e && (e === n.body || e === n.documentElement) && "static" === ie.css(e, "position"); )
                        e = e.parentNode;
                    e && e !== r && 1 === e.nodeType && ((i = ie(e).offset()).top += ie.css(e, "borderTopWidth", !0),
                    i.left += ie.css(e, "borderLeftWidth", !0))
                }
                return {
                    top: t.top - i.top - ie.css(r, "marginTop", !0),
                    left: t.left - i.left - ie.css(r, "marginLeft", !0)
                }
            }
        },
        offsetParent: function() {
            return this.map(function() {
                for (var e = this.offsetParent; e && "static" === ie.css(e, "position"); )
                    e = e.offsetParent;
                return e || Re
            })
        }
    }),
    ie.each({
        scrollLeft: "pageXOffset",
        scrollTop: "pageYOffset"
    }, function(e, t) {
        var n = "pageYOffset" === t;
        ie.fn[e] = function(r) {
            return ve(this, function(e, r, i) {
                var o;
                if (ee(e) ? o = e : 9 === e.nodeType && (o = e.defaultView),
                void 0 === i)
                    return o ? o[t] : e[r];
                o ? o.scrollTo(n ? o.pageXOffset : i, n ? i : o.pageYOffset) : e[r] = i
            }, e, r, arguments.length)
        }
    }),
    ie.each(["top", "left"], function(e, t) {
        ie.cssHooks[t] = L(K.pixelPosition, function(e, n) {
            if (n)
                return n = j(e, t),
                Xe.test(n) ? ie(e).position()[t] + "px" : n
        })
    }),
    ie.each({
        Height: "height",
        Width: "width"
    }, function(e, t) {
        ie.each({
            padding: "inner" + e,
            content: t,
            "": "outer" + e
        }, function(n, r) {
            ie.fn[r] = function(i, o) {
                var a = arguments.length && (n || "boolean" != typeof i)
                  , s = n || (!0 === i || !0 === o ? "margin" : "border");
                return ve(this, function(t, n, i) {
                    var o;
                    return ee(t) ? 0 === r.indexOf("outer") ? t["inner" + e] : t.document.documentElement["client" + e] : 9 === t.nodeType ? (o = t.documentElement,
                    Math.max(t.body["scroll" + e], o["scroll" + e], t.body["offset" + e], o["offset" + e], o["client" + e])) : void 0 === i ? ie.css(t, n, s) : ie.style(t, n, i, s)
                }, t, a ? i : void 0, a)
            }
        })
    }),
    ie.fn.extend({
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
    ie.each("blur focus focusin focusout resize scroll click dblclick mousedown mouseup mousemove mouseover mouseout mouseenter mouseleave change select submit keydown keypress keyup contextmenu".split(" "), function(e, t) {
        ie.fn[t] = function(e, n) {
            return 0 < arguments.length ? this.on(t, null, e, n) : this.trigger(t)
        }
    });
    var vt = /^[\s\uFEFF\xA0]+|[\s\uFEFF\xA0]+$/g;
    ie.proxy = function(e, t) {
        var n, r, i;
        if ("string" == typeof t && (n = e[t],
        t = e,
        e = n),
        Z(e))
            return r = _.call(arguments, 2),
            (i = function() {
                return e.apply(t || this, r.concat(_.call(arguments)))
            }
            ).guid = e.guid = e.guid || ie.guid++,
            i
    }
    ,
    ie.holdReady = function(e) {
        e ? ie.readyWait++ : ie.ready(!0)
    }
    ,
    ie.isArray = Array.isArray,
    ie.parseJSON = JSON.parse,
    ie.nodeName = o,
    ie.isFunction = Z,
    ie.isWindow = ee,
    ie.camelCase = p,
    ie.type = r,
    ie.now = Date.now,
    ie.isNumeric = function(e) {
        var t = ie.type(e);
        return ("number" === t || "string" === t) && !isNaN(e - parseFloat(e))
    }
    ,
    ie.trim = function(e) {
        return null == e ? "" : (e + "").replace(vt, "")
    }
    ,
    "function" == typeof define && define.amd && define("jquery", [], function() {
        return ie
    });
    var yt = e.jQuery
      , bt = e.$;
    return ie.noConflict = function(t) {
        return e.$ === ie && (e.$ = bt),
        t && e.jQuery === ie && (e.jQuery = yt),
        ie
    }
    ,
    void 0 === t && (e.jQuery = e.$ = ie),
    ie
}),
function() {
    this.Rails = {
        linkClickSelector: "a[data-confirm], a[data-method], a[data-remote]:not([disabled]), a[data-disable-with], a[data-disable]",
        buttonClickSelector: {
            selector: "button[data-remote]:not([form]), button[data-confirm]:not([form])",
            exclude: "form button"
        },
        inputChangeSelector: "select[data-remote], input[data-remote], textarea[data-remote]",
        formSubmitSelector: "form",
        formInputClickSelector: "form input[type=submit], form input[type=image], form button[type=submit], form button:not([type]), input[type=submit][form], input[type=image][form], button[type=submit][form], button[form]:not([type])",
        formDisableSelector: "input[data-disable-with]:enabled, button[data-disable-with]:enabled, textarea[data-disable-with]:enabled, input[data-disable]:enabled, button[data-disable]:enabled, textarea[data-disable]:enabled",
        formEnableSelector: "input[data-disable-with]:disabled, button[data-disable-with]:disabled, textarea[data-disable-with]:disabled, input[data-disable]:disabled, button[data-disable]:disabled, textarea[data-disable]:disabled",
        fileInputSelector: "input[name][type=file]:not([disabled])",
        linkDisableSelector: "a[data-disable-with], a[data-disable]",
        buttonDisableSelector: "button[data-remote][data-disable-with], button[data-remote][data-disable]"
    }
}
.call(this),
function() {
    var e;
    e = null,
    Rails.loadCSPNonce = function() {
        var t;
        return e = null != (t = document.querySelector("meta[name=csp-nonce]")) ? t.content : void 0
    }
    ,
    Rails.cspNonce = function() {
        return null != e ? e : Rails.loadCSPNonce()
    }
}
.call(this),
function() {
    var e, t;
    t = Element.prototype.matches || Element.prototype.matchesSelector || Element.prototype.mozMatchesSelector || Element.prototype.msMatchesSelector || Element.prototype.oMatchesSelector || Element.prototype.webkitMatchesSelector,
    Rails.matches = function(e, n) {
        return null != n.exclude ? t.call(e, n.selector) && !t.call(e, n.exclude) : t.call(e, n)
    }
    ,
    e = "_ujsData",
    Rails.getData = function(t, n) {
        var r;
        return null != (r = t[e]) ? r[n] : void 0
    }
    ,
    Rails.setData = function(t, n, r) {
        return null == t[e] && (t[e] = {}),
        t[e][n] = r
    }
    ,
    Rails.$ = function(e) {
        return Array.prototype.slice.call(document.querySelectorAll(e))
    }
}
.call(this),
function() {
    var e, t, n;
    e = Rails.$,
    n = Rails.csrfToken = function() {
        var e;
        return (e = document.querySelector("meta[name=csrf-token]")) && e.content
    }
    ,
    t = Rails.csrfParam = function() {
        var e;
        return (e = document.querySelector("meta[name=csrf-param]")) && e.content
    }
    ,
    Rails.CSRFProtection = function(e) {
        var t;
        if (null != (t = n()))
            return e.setRequestHeader("X-CSRF-Token", t)
    }
    ,
    Rails.refreshCSRFTokens = function() {
        var r, i;
        if (i = n(),
        r = t(),
        null != i && null != r)
            return e('form input[name="' + r + '"]').forEach(function(e) {
                return e.value = i
            })
    }
}
.call(this),
function() {
    var e, t, n, r;
    n = Rails.matches,
    "function" != typeof (e = window.CustomEvent) && ((e = function(e, t) {
        var n;
        return (n = document.createEvent("CustomEvent")).initCustomEvent(e, t.bubbles, t.cancelable, t.detail),
        n
    }
    ).prototype = window.Event.prototype,
    r = e.prototype.preventDefault,
    e.prototype.preventDefault = function() {
        var e;
        return e = r.call(this),
        this.cancelable && !this.defaultPrevented && Object.defineProperty(this, "defaultPrevented", {
            get: function() {
                return !0
            }
        }),
        e
    }
    ),
    t = Rails.fire = function(t, n, r) {
        var i;
        return i = new e(n,{
            bubbles: !0,
            cancelable: !0,
            detail: r
        }),
        t.dispatchEvent(i),
        !i.defaultPrevented
    }
    ,
    Rails.stopEverything = function(e) {
        return t(e.target, "ujs:everythingStopped"),
        e.preventDefault(),
        e.stopPropagation(),
        e.stopImmediatePropagation()
    }
    ,
    Rails.delegate = function(e, t, r, i) {
        return e.addEventListener(r, function(e) {
            var r;
            for (r = e.target; r instanceof Element && !n(r, t); )
                r = r.parentNode;
            if (r instanceof Element && !1 === i.call(r, e))
                return e.preventDefault(),
                e.stopPropagation()
        })
    }
}
.call(this),
function() {
    var e, t, n, r, i, o;
    r = Rails.cspNonce,
    t = Rails.CSRFProtection,
    Rails.fire,
    e = {
        "*": "*/*",
        text: "text/plain",
        html: "text/html",
        xml: "application/xml, text/xml",
        json: "application/json, text/javascript",
        script: "text/javascript, application/javascript, application/ecmascript, application/x-ecmascript"
    },
    Rails.ajax = function(e) {
        var t;
        return e = i(e),
        t = n(e, function() {
            var n, r;
            return r = o(null != (n = t.response) ? n : t.responseText, t.getResponseHeader("Content-Type")),
            2 === Math.floor(t.status / 100) ? "function" == typeof e.success && e.success(r, t.statusText, t) : "function" == typeof e.error && e.error(r, t.statusText, t),
            "function" == typeof e.complete ? e.complete(t, t.statusText) : void 0
        }),
        !(null != e.beforeSend && !e.beforeSend(t, e)) && (t.readyState === XMLHttpRequest.OPENED ? t.send(e.data) : void 0)
    }
    ,
    i = function(t) {
        return t.url = t.url || location.href,
        t.type = t.type.toUpperCase(),
        "GET" === t.type && t.data && (t.url.indexOf("?") < 0 ? t.url += "?" + t.data : t.url += "&" + t.data),
        null == e[t.dataType] && (t.dataType = "*"),
        t.accept = e[t.dataType],
        "*" !== t.dataType && (t.accept += ", */*; q=0.01"),
        t
    }
    ,
    n = function(e, n) {
        var r;
        return (r = new XMLHttpRequest).open(e.type, e.url, !0),
        r.setRequestHeader("Accept", e.accept),
        "string" == typeof e.data && r.setRequestHeader("Content-Type", "application/x-www-form-urlencoded; charset=UTF-8"),
        e.crossDomain || (r.setRequestHeader("X-Requested-With", "XMLHttpRequest"),
        t(r)),
        r.withCredentials = !!e.withCredentials,
        r.onreadystatechange = function() {
            if (r.readyState === XMLHttpRequest.DONE)
                return n(r)
        }
        ,
        r
    }
    ,
    o = function(e, t) {
        var n, i;
        if ("string" == typeof e && "string" == typeof t)
            if (t.match(/\bjson\b/))
                try {
                    e = JSON.parse(e)
                } catch (o) {}
            else if (t.match(/\b(?:java|ecma)script\b/))
                (i = document.createElement("script")).setAttribute("nonce", r()),
                i.text = e,
                document.head.appendChild(i).parentNode.removeChild(i);
            else if (t.match(/\b(xml|html|svg)\b/)) {
                n = new DOMParser,
                t = t.replace(/;.+/, "");
                try {
                    e = n.parseFromString(e, t)
                } catch (o) {}
            }
        return e
    }
    ,
    Rails.href = function(e) {
        return e.href
    }
    ,
    Rails.isCrossDomain = function(e) {
        var t, n;
        (t = document.createElement("a")).href = location.href,
        n = document.createElement("a");
        try {
            return n.href = e,
            !((!n.protocol || ":" === n.protocol) && !n.host || t.protocol + "//" + t.host == n.protocol + "//" + n.host)
        } catch (r) {
            return r,
            !0
        }
    }
}
.call(this),
function() {
    var e, t;
    e = Rails.matches,
    t = function(e) {
        return Array.prototype.slice.call(e)
    }
    ,
    Rails.serializeElement = function(n, r) {
        var i, o;
        return i = [n],
        e(n, "form") && (i = t(n.elements)),
        o = [],
        i.forEach(function(n) {
            if (n.name && !n.disabled)
                return e(n, "select") ? t(n.options).forEach(function(e) {
                    if (e.selected)
                        return o.push({
                            name: n.name,
                            value: e.value
                        })
                }) : n.checked || -1 === ["radio", "checkbox", "submit"].indexOf(n.type) ? o.push({
                    name: n.name,
                    value: n.value
                }) : void 0
        }),
        r && o.push(r),
        o.map(function(e) {
            return null != e.name ? encodeURIComponent(e.name) + "=" + encodeURIComponent(e.value) : e
        }).join("&")
    }
    ,
    Rails.formElements = function(n, r) {
        return e(n, "form") ? t(n.elements).filter(function(t) {
            return e(t, r)
        }) : t(n.querySelectorAll(r))
    }
}
.call(this),
function() {
    var e, t, n;
    t = Rails.fire,
    n = Rails.stopEverything,
    Rails.handleConfirm = function(t) {
        if (!e(this))
            return n(t)
    }
    ,
    e = function(e) {
        var n, r, i;
        if (!(i = e.getAttribute("data-confirm")))
            return !0;
        if (n = !1,
        t(e, "confirm")) {
            try {
                n = confirm(i)
            } catch (o) {}
            r = t(e, "confirm:complete", [n])
        }
        return n && r
    }
}
.call(this),
function() {
    var e, t, n, r, i, o, a, s, l, u, c;
    l = Rails.matches,
    s = Rails.getData,
    u = Rails.setData,
    c = Rails.stopEverything,
    a = Rails.formElements,
    Rails.handleDisabledElement = function(e) {
        if (this.disabled)
            return c(e)
    }
    ,
    Rails.enableElement = function(e) {
        var t;
        return t = e instanceof Event ? e.target : e,
        l(t, Rails.linkDisableSelector) ? o(t) : l(t, Rails.buttonDisableSelector) || l(t, Rails.formEnableSelector) ? r(t) : l(t, Rails.formSubmitSelector) ? i(t) : void 0
    }
    ,
    Rails.disableElement = function(r) {
        var i;
        return i = r instanceof Event ? r.target : r,
        l(i, Rails.linkDisableSelector) ? n(i) : l(i, Rails.buttonDisableSelector) || l(i, Rails.formDisableSelector) ? e(i) : l(i, Rails.formSubmitSelector) ? t(i) : void 0
    }
    ,
    n = function(e) {
        var t;
        return null != (t = e.getAttribute("data-disable-with")) && (u(e, "ujs:enable-with", e.innerHTML),
        e.innerHTML = t),
        e.addEventListener("click", c),
        u(e, "ujs:disabled", !0)
    }
    ,
    o = function(e) {
        var t;
        return null != (t = s(e, "ujs:enable-with")) && (e.innerHTML = t,
        u(e, "ujs:enable-with", null)),
        e.removeEventListener("click", c),
        u(e, "ujs:disabled", null)
    }
    ,
    t = function(t) {
        return a(t, Rails.formDisableSelector).forEach(e)
    }
    ,
    e = function(e) {
        var t;
        return null != (t = e.getAttribute("data-disable-with")) && (l(e, "button") ? (u(e, "ujs:enable-with", e.innerHTML),
        e.innerHTML = t) : (u(e, "ujs:enable-with", e.value),
        e.value = t)),
        e.disabled = !0,
        u(e, "ujs:disabled", !0)
    }
    ,
    i = function(e) {
        return a(e, Rails.formEnableSelector).forEach(r)
    }
    ,
    r = function(e) {
        var t;
        return null != (t = s(e, "ujs:enable-with")) && (l(e, "button") ? e.innerHTML = t : e.value = t,
        u(e, "ujs:enable-with", null)),
        e.disabled = !1,
        u(e, "ujs:disabled", null)
    }
}
.call(this),
function() {
    var e;
    e = Rails.stopEverything,
    Rails.handleMethod = function(t) {
        var n, r, i, o, a, s, l;
        if (l = (s = this).getAttribute("data-method"))
            return a = Rails.href(s),
            r = Rails.csrfToken(),
            n = Rails.csrfParam(),
            i = document.createElement("form"),
            o = "<input name='_method' value='" + l + "' type='hidden' />",
            null == n || null == r || Rails.isCrossDomain(a) || (o += "<input name='" + n + "' value='" + r + "' type='hidden' />"),
            o += '<input type="submit" />',
            i.method = "post",
            i.action = a,
            i.target = s.target,
            i.innerHTML = o,
            i.style.display = "none",
            document.body.appendChild(i),
            i.querySelector('[type="submit"]').click(),
            e(t)
    }
}
.call(this),
function() {
    var e, t, n, r, i, o, a, s, l, u = [].slice;
    o = Rails.matches,
    n = Rails.getData,
    s = Rails.setData,
    t = Rails.fire,
    l = Rails.stopEverything,
    e = Rails.ajax,
    r = Rails.isCrossDomain,
    a = Rails.serializeElement,
    i = function(e) {
        var t;
        return null != (t = e.getAttribute("data-remote")) && "false" !== t
    }
    ,
    Rails.handleRemote = function(c) {
        var f, d, p, h, m, g, v;
        return !i(h = this) || (t(h, "ajax:before") ? (v = h.getAttribute("data-with-credentials"),
        p = h.getAttribute("data-type") || "script",
        o(h, Rails.formSubmitSelector) ? (f = n(h, "ujs:submit-button"),
        m = n(h, "ujs:submit-button-formmethod") || h.method,
        g = n(h, "ujs:submit-button-formaction") || h.getAttribute("action") || location.href,
        "GET" === m.toUpperCase() && (g = g.replace(/\?.*$/, "")),
        "multipart/form-data" === h.enctype ? (d = new FormData(h),
        null != f && d.append(f.name, f.value)) : d = a(h, f),
        s(h, "ujs:submit-button", null),
        s(h, "ujs:submit-button-formmethod", null),
        s(h, "ujs:submit-button-formaction", null)) : o(h, Rails.buttonClickSelector) || o(h, Rails.inputChangeSelector) ? (m = h.getAttribute("data-method"),
        g = h.getAttribute("data-url"),
        d = a(h, h.getAttribute("data-params"))) : (m = h.getAttribute("data-method"),
        g = Rails.href(h),
        d = h.getAttribute("data-params")),
        e({
            type: m || "GET",
            url: g,
            data: d,
            dataType: p,
            beforeSend: function(e, n) {
                return t(h, "ajax:beforeSend", [e, n]) ? t(h, "ajax:send", [e]) : (t(h, "ajax:stopped"),
                !1)
            },
            success: function() {
                var e;
                return e = 1 <= arguments.length ? u.call(arguments, 0) : [],
                t(h, "ajax:success", e)
            },
            error: function() {
                var e;
                return e = 1 <= arguments.length ? u.call(arguments, 0) : [],
                t(h, "ajax:error", e)
            },
            complete: function() {
                var e;
                return e = 1 <= arguments.length ? u.call(arguments, 0) : [],
                t(h, "ajax:complete", e)
            },
            crossDomain: r(g),
            withCredentials: null != v && "false" !== v
        }),
        l(c)) : (t(h, "ajax:stopped"),
        !1))
    }
    ,
    Rails.formSubmitButtonClick = function() {
        var e, t;
        if (t = (e = this).form)
            return e.name && s(t, "ujs:submit-button", {
                name: e.name,
                value: e.value
            }),
            s(t, "ujs:formnovalidate-button", e.formNoValidate),
            s(t, "ujs:submit-button-formaction", e.getAttribute("formaction")),
            s(t, "ujs:submit-button-formmethod", e.getAttribute("formmethod"))
    }
    ,
    Rails.preventInsignificantClick = function(e) {
        var t, n, r, i;
        if (i = ((r = this).getAttribute("data-method") || "GET").toUpperCase(),
        t = r.getAttribute("data-params"),
        n = (e.metaKey || e.ctrlKey) && "GET" === i && !t,
        null != e.button && 0 !== e.button || n)
            return e.stopImmediatePropagation()
    }
}
.call(this),
function() {
    var e, t, n, r, i, o, a, s, l, u, c, f, d, p, h;
    if (o = Rails.fire,
    n = Rails.delegate,
    s = Rails.getData,
    e = Rails.$,
    h = Rails.refreshCSRFTokens,
    t = Rails.CSRFProtection,
    d = Rails.loadCSPNonce,
    i = Rails.enableElement,
    r = Rails.disableElement,
    u = Rails.handleDisabledElement,
    l = Rails.handleConfirm,
    p = Rails.preventInsignificantClick,
    f = Rails.handleRemote,
    a = Rails.formSubmitButtonClick,
    c = Rails.handleMethod,
    "undefined" != typeof jQuery && null !== jQuery && null != jQuery.ajax) {
        if (jQuery.rails)
            throw new Error("If you load both jquery_ujs and rails-ujs, use rails-ujs only.");
        jQuery.rails = Rails,
        jQuery.ajaxPrefilter(function(e, n, r) {
            if (!e.crossDomain)
                return t(r)
        })
    }
    Rails.start = function() {
        if (window._rails_loaded)
            throw new Error("rails-ujs has already been loaded!");
        return window.addEventListener("pageshow", function() {
            return e(Rails.formEnableSelector).forEach(function(e) {
                if (s(e, "ujs:disabled"))
                    return i(e)
            }),
            e(Rails.linkDisableSelector).forEach(function(e) {
                if (s(e, "ujs:disabled"))
                    return i(e)
            })
        }),
        n(document, Rails.linkDisableSelector, "ajax:complete", i),
        n(document, Rails.linkDisableSelector, "ajax:stopped", i),
        n(document, Rails.buttonDisableSelector, "ajax:complete", i),
        n(document, Rails.buttonDisableSelector, "ajax:stopped", i),
        n(document, Rails.linkClickSelector, "click", p),
        n(document, Rails.linkClickSelector, "click", u),
        n(document, Rails.linkClickSelector, "click", l),
        n(document, Rails.linkClickSelector, "click", r),
        n(document, Rails.linkClickSelector, "click", f),
        n(document, Rails.linkClickSelector, "click", c),
        n(document, Rails.buttonClickSelector, "click", p),
        n(document, Rails.buttonClickSelector, "click", u),
        n(document, Rails.buttonClickSelector, "click", l),
        n(document, Rails.buttonClickSelector, "click", r),
        n(document, Rails.buttonClickSelector, "click", f),
        n(document, Rails.inputChangeSelector, "change", u),
        n(document, Rails.inputChangeSelector, "change", l),
        n(document, Rails.inputChangeSelector, "change", f),
        n(document, Rails.formSubmitSelector, "submit", u),
        n(document, Rails.formSubmitSelector, "submit", l),
        n(document, Rails.formSubmitSelector, "submit", f),
        n(document, Rails.formSubmitSelector, "submit", function(e) {
            return setTimeout(function() {
                return r(e)
            }, 13)
        }),
        n(document, Rails.formSubmitSelector, "ajax:send", r),
        n(document, Rails.formSubmitSelector, "ajax:complete", i),
        n(document, Rails.formInputClickSelector, "click", p),
        n(document, Rails.formInputClickSelector, "click", u),
        n(document, Rails.formInputClickSelector, "click", l),
        n(document, Rails.formInputClickSelector, "click", a),
        document.addEventListener("DOMContentLoaded", h),
        document.addEventListener("DOMContentLoaded", d),
        window._rails_loaded = !0
    }
    ,
    window.Rails === Rails && o(document, "rails:attachBindings") && Rails.start()
}
.call(this),
window.UnobtrusiveFlash = {},
function() {
    function t(e) {
        var t = new Date;
        t.setDate(t.getDate() - 1);
        var n = window.location.hostname.split(".").reverse()
          , r = n.shift();
        $.each(n, function(n, i) {
            r = i + "." + r,
            document.cookie = e + "=; path=/;expires=" + t + "; domain=" + r
        }),
        document.cookie = e + "=; path=/;expires=" + t + "; domain="
    }
    function n() {
        var n = null;
        if (document.cookie && "" !== document.cookie) {
            for (var r = document.cookie.split(";"), i = "flash", o = null, a = 0; a < r.length; a++) {
                var s = jQuery.trim(r[a]);
                if (s.substring(0, i.length + 1) == i + "=" && (o = decodeURIComponent(s.substring(i.length + 1).replace(/\+/g, "%20"))).length > 0)
                    break
            }
            try {
                n = $.parseJSON(o)
            } catch (e) {}
            t("flash")
        }
        return n
    }
    window.UnobtrusiveFlash.showFlash = function(e) {
        null !== e && $.each(e, function(e, t) {
            $(window).trigger("rails:flash", {
                type: t[0],
                message: t[1]
            })
        })
    }
    ,
    window.UnobtrusiveFlash.showFlashFromCookies = function() {
        UnobtrusiveFlash.showFlash(n())
    }
    ;
    var r = n();
    $(window).on("load", function() {
        UnobtrusiveFlash.showFlash(r)
    }),
    $(document).on("page:change page:load", UnobtrusiveFlash.showFlashFromCookies),
    $(document).on("turbolinks:load", UnobtrusiveFlash.showFlashFromCookies),
    $(document).on("ajax:complete,", function() {
        UnobtrusiveFlash.showFlashFromCookies()
    })
}(),
window.UnobtrusiveFlash.flashOptions = {
    type: "notice",
    timeout: 0
},
function() {
    function e(e) {
        e.slideUp(100, function() {
            e.remove()
        })
    }
    UnobtrusiveFlash.showFlashMessage = function(t, n) {
        n = $.extend(UnobtrusiveFlash.flashOptions, n);
        var r = $('<div class="unobtrusive-flash-message-wrapper unobtrusive-flash-' + n.type + '"><div class="unobtrusive-flash-message">' + t + "</div></div>")
          , i = $("#unobtrusive-flash-messages");
        0 == i.length && (i = $("<div/>").attr("id", "unobtrusive-flash-messages").prependTo("body")),
        i.prepend(r),
        r.show(),
        r.click(function() {
            e(r)
        }),
        n.timeout > 0 && setTimeout(function() {
            e(r)
        }, n.timeout)
    }
    ,
    flashHandler = function(e, t) {
        UnobtrusiveFlash.showFlashMessage(t.message, {
            type: t.type
        })
    }
    ,
    $(window).bind("rails:flash", flashHandler)
}();
const n = new Set
  , o = document.createElement("link")
  , s = o.relList && o.relList.supports && o.relList.supports("prefetch") && window.IntersectionObserver && "isIntersecting"in IntersectionObserverEntry.prototype
  , i = "instantAllowQueryString"in document.body.dataset
  , r = "instantAllowExternalLinks"in document.body.dataset
  , a = "instantWhitelist"in document.body.dataset;
let c = 65
  , d = !1
  , l = !1
  , u = !1;
if ("instantIntensity"in document.body.dataset) {
    const e = document.body.dataset.instantIntensity;
    if ("mousedown" == e.substr(0, "mousedown".length))
        d = !0,
        "mousedown-only" == e && (l = !0);
    else if ("viewport" == e.substr(0, "viewport".length))
        navigator.connection && (navigator.connection.saveData || navigator.connection.effectiveType.includes("2g")) || ("viewport" == e ? document.documentElement.clientWidth * document.documentElement.clientHeight < 45e4 && (u = !0) : "viewport-all" == e && (u = !0));
    else {
        const t = parseInt(e);
        isNaN(t) || (c = t)
    }
}
if (s) {
    const n = {
        capture: !0,
        passive: !0
    };
    if (l || document.addEventListener("touchstart", function(t) {
        e = performance.now();
        const n = t.target.closest("a");
        f(n) && h(n.href)
    }, n),
    d ? document.addEventListener("mousedown", function(e) {
        const t = e.target.closest("a");
        f(t) && h(t.href)
    }, n) : document.addEventListener("mouseover", function(n) {
        if (performance.now() - e < 1100)
            return;
        const r = n.target.closest("a");
        f(r) && (r.addEventListener("mouseout", m, {
            passive: !0
        }),
        t = setTimeout(()=>{
            h(r.href),
            t = void 0
        }
        , c))
    }, n),
    u) {
        let e;
        (e = window.requestIdleCallback ? e=>{
            requestIdleCallback(e, {
                timeout: 1500
            })
        }
        : e=>{
            e()
        }
        )(()=>{
            const e = new IntersectionObserver(t=>{
                t.forEach(t=>{
                    if (t.isIntersecting) {
                        const n = t.target;
                        e.unobserve(n),
                        h(n.href)
                    }
                }
                )
            }
            );
            document.querySelectorAll("a").forEach(t=>{
                f(t) && e.observe(t)
            }
            )
        }
        )
    }
}
(function() {
    var e = [].slice;
    this.ActionCable = {
        INTERNAL: {
            message_types: {
                welcome: "welcome",
                ping: "ping",
                confirmation: "confirm_subscription",
                rejection: "reject_subscription"
            },
            default_mount_path: "/cable",
            protocols: ["actioncable-v1-json", "actioncable-unsupported"]
        },
        WebSocket: window.WebSocket,
        logger: window.console,
        createConsumer: function(e) {
            var t;
            return null == e && (e = null != (t = this.getConfig("url")) ? t : this.INTERNAL.default_mount_path),
            new ActionCable.Consumer(this.createWebSocketURL(e))
        },
        getConfig: function(e) {
            var t;
            return null != (t = document.head.querySelector("meta[name='action-cable-" + e + "']")) ? t.getAttribute("content") : void 0
        },
        createWebSocketURL: function(e) {
            var t;
            return e && !/^wss?:/i.test(e) ? ((t = document.createElement("a")).href = e,
            t.href = t.href,
            t.protocol = t.protocol.replace("http", "ws"),
            t.href) : e
        },
        startDebugging: function() {
            return this.debugging = !0
        },
        stopDebugging: function() {
            return this.debugging = null
        },
        log: function() {
            var t, n;
            if (t = 1 <= arguments.length ? e.call(arguments, 0) : [],
            this.debugging)
                return t.push(Date.now()),
                (n = this.logger).log.apply(n, ["[ActionCable]"].concat(e.call(t)))
        }
    }
}
).call(this),
function() {
    var e = function(e, t) {
        return function() {
            return e.apply(t, arguments)
        }
    };
    ActionCable.ConnectionMonitor = function() {
        function t(t) {
            this.connection = t,
            this.visibilityDidChange = e(this.visibilityDidChange, this),
            this.reconnectAttempts = 0
        }
        var n, r, i;
        return t.pollInterval = {
            min: 3,
            max: 30
        },
        t.staleThreshold = 6,
        t.prototype.start = function() {
            if (!this.isRunning())
                return this.startedAt = r(),
                delete this.stoppedAt,
                this.startPolling(),
                document.addEventListener("visibilitychange", this.visibilityDidChange),
                ActionCable.log("ConnectionMonitor started. pollInterval = " + this.getPollInterval() + " ms")
        }
        ,
        t.prototype.stop = function() {
            if (this.isRunning())
                return this.stoppedAt = r(),
                this.stopPolling(),
                document.removeEventListener("visibilitychange", this.visibilityDidChange),
                ActionCable.log("ConnectionMonitor stopped")
        }
        ,
        t.prototype.isRunning = function() {
            return null != this.startedAt && null == this.stoppedAt
        }
        ,
        t.prototype.recordPing = function() {
            return this.pingedAt = r()
        }
        ,
        t.prototype.recordConnect = function() {
            return this.reconnectAttempts = 0,
            this.recordPing(),
            delete this.disconnectedAt,
            ActionCable.log("ConnectionMonitor recorded connect")
        }
        ,
        t.prototype.recordDisconnect = function() {
            return this.disconnectedAt = r(),
            ActionCable.log("ConnectionMonitor recorded disconnect")
        }
        ,
        t.prototype.startPolling = function() {
            return this.stopPolling(),
            this.poll()
        }
        ,
        t.prototype.stopPolling = function() {
            return clearTimeout(this.pollTimeout)
        }
        ,
        t.prototype.poll = function() {
            return this.pollTimeout = setTimeout((e = this,
            function() {
                return e.reconnectIfStale(),
                e.poll()
            }
            ), this.getPollInterval());
            var e
        }
        ,
        t.prototype.getPollInterval = function() {
            var e, t, r, i;
            return r = (i = this.constructor.pollInterval).min,
            t = i.max,
            e = 5 * Math.log(this.reconnectAttempts + 1),
            Math.round(1e3 * n(e, r, t))
        }
        ,
        t.prototype.reconnectIfStale = function() {
            if (this.connectionIsStale())
                return ActionCable.log("ConnectionMonitor detected stale connection. reconnectAttempts = " + this.reconnectAttempts + ", pollInterval = " + this.getPollInterval() + " ms, time disconnected = " + i(this.disconnectedAt) + " s, stale threshold = " + this.constructor.staleThreshold + " s"),
                this.reconnectAttempts++,
                this.disconnectedRecently() ? ActionCable.log("ConnectionMonitor skipping reopening recent disconnect") : (ActionCable.log("ConnectionMonitor reopening"),
                this.connection.reopen())
        }
        ,
        t.prototype.connectionIsStale = function() {
            var e;
            return i(null != (e = this.pingedAt) ? e : this.startedAt) > this.constructor.staleThreshold
        }
        ,
        t.prototype.disconnectedRecently = function() {
            return this.disconnectedAt && i(this.disconnectedAt) < this.constructor.staleThreshold
        }
        ,
        t.prototype.visibilityDidChange = function() {
            if ("visible" === document.visibilityState)
                return setTimeout((e = this,
                function() {
                    if (e.connectionIsStale() || !e.connection.isOpen())
                        return ActionCable.log("ConnectionMonitor reopening stale connection on visibilitychange. visbilityState = " + document.visibilityState),
                        e.connection.reopen()
                }
                ), 200);
            var e
        }
        ,
        r = function() {
            return (new Date).getTime()
        }
        ,
        i = function(e) {
            return (r() - e) / 1e3
        }
        ,
        n = function(e, t, n) {
            return Math.max(t, Math.min(n, e))
        }
        ,
        t
    }()
}
.call(this),
function() {
    var e, t, n, r, i, o = [].slice, a = function(e, t) {
        return function() {
            return e.apply(t, arguments)
        }
    }, s = [].indexOf || function(e) {
        for (var t = 0, n = this.length; t < n; t++)
            if (t in this && this[t] === e)
                return t;
        return -1
    }
    ;
    r = ActionCable.INTERNAL,
    t = r.message_types,
    n = r.protocols,
    i = 2 <= n.length ? o.call(n, 0, e = n.length - 1) : (e = 0,
    []),
    n[e++],
    ActionCable.Connection = function() {
        function e(e) {
            this.consumer = e,
            this.open = a(this.open, this),
            this.subscriptions = this.consumer.subscriptions,
            this.monitor = new ActionCable.ConnectionMonitor(this),
            this.disconnected = !0
        }
        return e.reopenDelay = 500,
        e.prototype.send = function(e) {
            return !!this.isOpen() && (this.webSocket.send(JSON.stringify(e)),
            !0)
        }
        ,
        e.prototype.open = function() {
            return this.isActive() ? (ActionCable.log("Attempted to open WebSocket, but existing socket is " + this.getState()),
            !1) : (ActionCable.log("Opening WebSocket, current state is " + this.getState() + ", subprotocols: " + n),
            null != this.webSocket && this.uninstallEventHandlers(),
            this.webSocket = new ActionCable.WebSocket(this.consumer.url,n),
            this.installEventHandlers(),
            this.monitor.start(),
            !0)
        }
        ,
        e.prototype.close = function(e) {
            var t;
            if ((null != e ? e : {
                allowReconnect: !0
            }).allowReconnect || this.monitor.stop(),
            this.isActive())
                return null != (t = this.webSocket) ? t.close() : void 0
        }
        ,
        e.prototype.reopen = function() {
            var e;
            if (ActionCable.log("Reopening WebSocket, current state is " + this.getState()),
            !this.isActive())
                return this.open();
            try {
                return this.close()
            } catch (t) {
                return e = t,
                ActionCable.log("Failed to reopen WebSocket", e)
            } finally {
                ActionCable.log("Reopening WebSocket in " + this.constructor.reopenDelay + "ms"),
                setTimeout(this.open, this.constructor.reopenDelay)
            }
        }
        ,
        e.prototype.getProtocol = function() {
            var e;
            return null != (e = this.webSocket) ? e.protocol : void 0
        }
        ,
        e.prototype.isOpen = function() {
            return this.isState("open")
        }
        ,
        e.prototype.isActive = function() {
            return this.isState("open", "connecting")
        }
        ,
        e.prototype.isProtocolSupported = function() {
            var e;
            return e = this.getProtocol(),
            s.call(i, e) >= 0
        }
        ,
        e.prototype.isState = function() {
            var e, t;
            return t = 1 <= arguments.length ? o.call(arguments, 0) : [],
            e = this.getState(),
            s.call(t, e) >= 0
        }
        ,
        e.prototype.getState = function() {
            var e, t;
            for (t in WebSocket)
                if (WebSocket[t] === (null != (e = this.webSocket) ? e.readyState : void 0))
                    return t.toLowerCase();
            return null
        }
        ,
        e.prototype.installEventHandlers = function() {
            var e, t;
            for (e in this.events)
                t = this.events[e].bind(this),
                this.webSocket["on" + e] = t
        }
        ,
        e.prototype.uninstallEventHandlers = function() {
            var e;
            for (e in this.events)
                this.webSocket["on" + e] = function() {}
        }
        ,
        e.prototype.events = {
            message: function(e) {
                var n, r, i;
                if (this.isProtocolSupported())
                    switch (n = (i = JSON.parse(e.data)).identifier,
                    r = i.message,
                    i.type) {
                    case t.welcome:
                        return this.monitor.recordConnect(),
                        this.subscriptions.reload();
                    case t.ping:
                        return this.monitor.recordPing();
                    case t.confirmation:
                        return this.subscriptions.notify(n, "connected");
                    case t.rejection:
                        return this.subscriptions.reject(n);
                    default:
                        return this.subscriptions.notify(n, "received", r)
                    }
            },
            open: function() {
                if (ActionCable.log("WebSocket onopen event, using '" + this.getProtocol() + "' subprotocol"),
                this.disconnected = !1,
                !this.isProtocolSupported())
                    return ActionCable.log("Protocol is unsupported. Stopping monitor and disconnecting."),
                    this.close({
                        allowReconnect: !1
                    })
            },
            close: function() {
                if (ActionCable.log("WebSocket onclose event"),
                !this.disconnected)
                    return this.disconnected = !0,
                    this.monitor.recordDisconnect(),
                    this.subscriptions.notifyAll("disconnected", {
                        willAttemptReconnect: this.monitor.isRunning()
                    })
            },
            error: function() {
                return ActionCable.log("WebSocket onerror event")
            }
        },
        e
    }()
}
.call(this),
function() {
    var e = [].slice;
    ActionCable.Subscriptions = function() {
        function t(e) {
            this.consumer = e,
            this.subscriptions = []
        }
        return t.prototype.create = function(e, t) {
            var n, r, i;
            return r = "object" == typeof (n = e) ? n : {
                channel: n
            },
            i = new ActionCable.Subscription(this.consumer,r,t),
            this.add(i)
        }
        ,
        t.prototype.add = function(e) {
            return this.subscriptions.push(e),
            this.consumer.ensureActiveConnection(),
            this.notify(e, "initialized"),
            this.sendCommand(e, "subscribe"),
            e
        }
        ,
        t.prototype.remove = function(e) {
            return this.forget(e),
            this.findAll(e.identifier).length || this.sendCommand(e, "unsubscribe"),
            e
        }
        ,
        t.prototype.reject = function(e) {
            var t, n, r, i, o;
            for (i = [],
            t = 0,
            n = (r = this.findAll(e)).length; t < n; t++)
                o = r[t],
                this.forget(o),
                this.notify(o, "rejected"),
                i.push(o);
            return i
        }
        ,
        t.prototype.forget = function(e) {
            var t;
            return this.subscriptions = function() {
                var n, r, i, o;
                for (o = [],
                n = 0,
                r = (i = this.subscriptions).length; n < r; n++)
                    (t = i[n]) !== e && o.push(t);
                return o
            }
            .call(this),
            e
        }
        ,
        t.prototype.findAll = function(e) {
            var t, n, r, i, o;
            for (i = [],
            t = 0,
            n = (r = this.subscriptions).length; t < n; t++)
                (o = r[t]).identifier === e && i.push(o);
            return i
        }
        ,
        t.prototype.reload = function() {
            var e, t, n, r, i;
            for (r = [],
            e = 0,
            t = (n = this.subscriptions).length; e < t; e++)
                i = n[e],
                r.push(this.sendCommand(i, "subscribe"));
            return r
        }
        ,
        t.prototype.notifyAll = function() {
            var t, n, r, i, o, a, s;
            for (n = arguments[0],
            t = 2 <= arguments.length ? e.call(arguments, 1) : [],
            a = [],
            r = 0,
            i = (o = this.subscriptions).length; r < i; r++)
                s = o[r],
                a.push(this.notify.apply(this, [s, n].concat(e.call(t))));
            return a
        }
        ,
        t.prototype.notify = function() {
            var t, n, r, i, o, a, s;
            for (a = arguments[0],
            n = arguments[1],
            t = 3 <= arguments.length ? e.call(arguments, 2) : [],
            o = [],
            r = 0,
            i = (s = "string" == typeof a ? this.findAll(a) : [a]).length; r < i; r++)
                a = s[r],
                o.push("function" == typeof a[n] ? a[n].apply(a, t) : void 0);
            return o
        }
        ,
        t.prototype.sendCommand = function(e, t) {
            var n;
            return n = e.identifier,
            this.consumer.send({
                command: t,
                identifier: n
            })
        }
        ,
        t
    }()
}
.call(this),
function() {
    ActionCable.Subscription = function() {
        function e(e, n, r) {
            this.consumer = e,
            null == n && (n = {}),
            this.identifier = JSON.stringify(n),
            t(this, r)
        }
        var t;
        return e.prototype.perform = function(e, t) {
            return null == t && (t = {}),
            t.action = e,
            this.send(t)
        }
        ,
        e.prototype.send = function(e) {
            return this.consumer.send({
                command: "message",
                identifier: this.identifier,
                data: JSON.stringify(e)
            })
        }
        ,
        e.prototype.unsubscribe = function() {
            return this.consumer.subscriptions.remove(this)
        }
        ,
        t = function(e, t) {
            var n, r;
            if (null != t)
                for (n in t)
                    r = t[n],
                    e[n] = r;
            return e
        }
        ,
        e
    }()
}
.call(this),
function() {
    ActionCable.Consumer = function() {
        function e(e) {
            this.url = e,
            this.subscriptions = new ActionCable.Subscriptions(this),
            this.connection = new ActionCable.Connection(this)
        }
        return e.prototype.send = function(e) {
            return this.connection.send(e)
        }
        ,
        e.prototype.connect = function() {
            return this.connection.open()
        }
        ,
        e.prototype.disconnect = function() {
            return this.connection.close({
                allowReconnect: !1
            })
        }
        ,
        e.prototype.ensureActiveConnection = function() {
            if (!this.connection.isActive())
                return this.connection.open()
        }
        ,
        e
    }()
}
.call(this),
function() {
    this.App || (this.App = {}),
    App.cable = ActionCable.createConsumer()
}
.call(this),
function() {
    function e() {
        App.CEChannel = App.cable.subscriptions.create({
            channel: "CEChannel"
        }, {
            received: function(e) {
                fx.rates = e.rates || e.r
            }
        })
    }
    setTimeout(function() {
        return e()
    }, 1e3)
}(),
function() {
    function e() {
        var e = {};
        Array.from(document.querySelectorAll("[data-target='price.price'][data-coin-id]")).forEach(function(t) {
            var n = Number(t.getAttribute("data-coin-id"));
            e[n] = !0
        }),
        Object.keys(e).forEach(function(e) {
            App.cable.subscriptions.create({
                channel: "PChannel",
                m: e
            }, {
                received: function(e) {
                    var t = e.c
                      , n = e.p
                      , r = e.e;
                    window.dispatchEvent(new CustomEvent("coingecko-price-percentage-changed",{
                        detail: {
                            priceChangePercentage24H: r,
                            coinId: t
                        }
                    })),
                    window.dispatchEvent(new CustomEvent("coingecko-price-changed",{
                        detail: {
                            priceBTC: n,
                            coinId: t
                        }
                    }))
                }
            })
        })
    }
    window.location.pathname.indexOf("/all") > 0 || setTimeout(function() {
        return e()
    }, 1500)
}(),
function(e, t) {
    var n = function(e) {
        return new a(e)
    };
    n.version = "0.1.3";
    var r = e.fxSetup || {
        rates: {},
        base: ""
    };
    n.rates = r.rates,
    n.base = r.base,
    n.settings = {
        from: r.from || n.base,
        to: r.to || n.base
    };
    var i, o = n.convert = function(e, t) {
        if ("object" == typeof e && e.length) {
            for (var r = 0; r < e.length; r++)
                e[r] = o(e[r], t);
            return e
        }
        (t = t || {}).from || (t.from = n.settings.from),
        t.to || (t.to = n.settings.to);
        r = t.to;
        var i = t.from
          , a = n.rates;
        if (a[n.base] = 1,
        !a[r] || !a[i])
            throw "fx error";
        return e * (r = i === n.base ? a[r] : r === n.base ? 1 / a[i] : a[r] * (1 / a[i]))
    }
    , a = function(e) {
        "string" == typeof e ? (this._v = parseFloat(e.replace(/[^0-9-.]/g, "")),
        this._fx = e.replace(/([^A-Za-z])/g, "")) : this._v = e
    };
    (r = n.prototype = a.prototype).convert = function() {
        var e = Array.prototype.slice.call(arguments);
        return e.unshift(this._v),
        o.apply(n, e)
    }
    ,
    r.from = function(e) {
        return (e = n(o(this._v, {
            from: e,
            to: n.base
        })))._fx = n.base,
        e
    }
    ,
    r.to = function(e) {
        return o(this._v, {
            from: this._fx ? this._fx : n.settings.from,
            to: e
        })
    }
    ,
    "undefined" != typeof exports ? ("undefined" != typeof module && module.exports && (exports = module.exports = n),
    exports.fx = fx) : "function" == typeof define && define.amd ? define([], function() {
        return n
    }) : (n.noConflict = (i = e.fx,
    function() {
        return e.fx = i,
        n.noConflict = t,
        n
    }
    ),
    e.fx = n)
}(this),
UnobtrusiveFlash.flashOptions.timeout = 15e3;
