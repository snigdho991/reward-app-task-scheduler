(function(E) {
    var window = this;
    if (window.googletag && googletag.evalScripts) {
        googletag.evalScripts();
    }
    if (window.googletag && googletag._loaded_)
        return;
    /*

 Copyright The Closure Library Authors.
 SPDX-License-Identifier: Apache-2.0
*/
    var aa, ba = function(a) {
        var b = 0;
        return function() {
            return b < a.length ? {
                done: !1,
                value: a[b++]
            } : {
                done: !0
            }
        }
    }, ca = "function" == typeof Object.defineProperties ? Object.defineProperty : function(a, b, c) {
        if (a == Array.prototype || a == Object.prototype)
            return a;
        a[b] = c.value;
        return a
    }
    , da = function(a) {
        a = ["object" == typeof globalThis && globalThis, a, "object" == typeof window && window, "object" == typeof self && self, "object" == typeof global && global];
        for (var b = 0; b < a.length; ++b) {
            var c = a[b];
            if (c && c.Math == Math)
                return c
        }
        throw Error("Cannot find global object");
    }, ea = da(this), ha = "function" === typeof Symbol && "symbol" === typeof Symbol("x"), m = {}, ia = {}, p = function(a, b) {
        var c = ia[b];
        if (null == c)
            return a[b];
        c = a[c];
        return void 0 !== c ? c : a[b]
    }, q = function(a, b, c) {
        if (b)
            a: {
                var d = a.split(".");
                a = 1 === d.length;
                var e = d[0], f;
                !a && e in m ? f = m : f = ea;
                for (e = 0; e < d.length - 1; e++) {
                    var h = d[e];
                    if (!(h in f))
                        break a;
                    f = f[h]
                }
                d = d[d.length - 1];
                c = ha && "es6" === c ? f[d] : null;
                b = b(c);
                null != b && (a ? ca(m, d, {
                    configurable: !0,
                    writable: !0,
                    value: b
                }) : b !== c && (void 0 === ia[d] && (a = 1E9 * Math.random() >>> 0,
                ia[d] = ha ? ea.Symbol(d) : "$jscp$" + a + "$" + d),
                ca(f, ia[d], {
                    configurable: !0,
                    writable: !0,
                    value: b
                })))
            }
    };
    q("Symbol", function(a) {
        if (a)
            return a;
        var b = function(f, h) {
            this.g = f;
            ca(this, "description", {
                configurable: !0,
                writable: !0,
                value: h
            })
        };
        b.prototype.toString = function() {
            return this.g
        }
        ;
        var c = "jscomp_symbol_" + (1E9 * Math.random() >>> 0) + "_"
          , d = 0
          , e = function(f) {
            if (this instanceof e)
                throw new TypeError("Symbol is not a constructor");
            return new b(c + (f || "") + "_" + d++,f)
        };
        return e
    }, "es6");
    q("Symbol.iterator", function(a) {
        if (a)
            return a;
        a = (0,
        m.Symbol)("Symbol.iterator");
        for (var b = "Array Int8Array Uint8Array Uint8ClampedArray Int16Array Uint16Array Int32Array Uint32Array Float32Array Float64Array".split(" "), c = 0; c < b.length; c++) {
            var d = ea[b[c]];
            "function" === typeof d && "function" != typeof d.prototype[a] && ca(d.prototype, a, {
                configurable: !0,
                writable: !0,
                value: function() {
                    return ja(ba(this))
                }
            })
        }
        return a
    }, "es6");
    var ja = function(a) {
        a = {
            next: a
        };
        a[p(m.Symbol, "iterator")] = function() {
            return this
        }
        ;
        return a
    }, ka = function(a) {
        return a.raw = a
    }, t = function(a) {
        var b = "undefined" != typeof m.Symbol && p(m.Symbol, "iterator") && a[p(m.Symbol, "iterator")];
        return b ? b.call(a) : {
            next: ba(a)
        }
    }, la = function(a) {
        for (var b, c = []; !(b = a.next()).done; )
            c.push(b.value);
        return c
    }, u = function(a) {
        return a instanceof Array ? a : la(t(a))
    }, ma = "function" == typeof Object.create ? Object.create : function(a) {
        var b = function() {};
        b.prototype = a;
        return new b
    }
    , na;
    if (ha && "function" == typeof Object.setPrototypeOf)
        na = Object.setPrototypeOf;
    else {
        var oa;
        a: {
            var pa = {
                a: !0
            }
              , qa = {};
            try {
                qa.__proto__ = pa;
                oa = qa.a;
                break a
            } catch (a) {}
            oa = !1
        }
        na = oa ? function(a, b) {
            a.__proto__ = b;
            if (a.__proto__ !== b)
                throw new TypeError(a + " is not extensible");
            return a
        }
        : null
    }
    var ra = na
      , v = function(a, b) {
        a.prototype = ma(b.prototype);
        a.prototype.constructor = a;
        if (ra)
            ra(a, b);
        else
            for (var c in b)
                if ("prototype" != c)
                    if (Object.defineProperties) {
                        var d = Object.getOwnPropertyDescriptor(b, c);
                        d && Object.defineProperty(a, c, d)
                    } else
                        a[c] = b[c];
        a.Ea = b.prototype
    }
      , w = function() {
        for (var a = Number(this), b = [], c = a; c < arguments.length; c++)
            b[c - a] = arguments[c];
        return b
    }
      , x = function(a, b) {
        return Object.prototype.hasOwnProperty.call(a, b)
    }
      , sa = ha && "function" == typeof p(Object, "assign") ? p(Object, "assign") : function(a, b) {
        for (var c = 1; c < arguments.length; c++) {
            var d = arguments[c];
            if (d)
                for (var e in d)
                    x(d, e) && (a[e] = d[e])
        }
        return a
    }
    ;
    q("Object.assign", function(a) {
        return a || sa
    }, "es6");
    q("WeakMap", function(a) {
        function b() {}
        function c(h) {
            var g = typeof h;
            return "object" === g && null !== h || "function" === g
        }
        if (function() {
            if (!a || !Object.seal)
                return !1;
            try {
                var h = Object.seal({})
                  , g = Object.seal({})
                  , k = new a([[h, 2], [g, 3]]);
                if (2 != k.get(h) || 3 != k.get(g))
                    return !1;
                k.delete(h);
                k.set(g, 4);
                return !k.has(h) && 4 == k.get(g)
            } catch (l) {
                return !1
            }
        }())
            return a;
        var d = "$jscomp_hidden_" + Math.random()
          , e = 0
          , f = function(h) {
            this.g = (e += Math.random() + 1).toString();
            if (h) {
                h = t(h);
                for (var g; !(g = h.next()).done; )
                    g = g.value,
                    this.set(g[0], g[1])
            }
        };
        f.prototype.set = function(h, g) {
            if (!c(h))
                throw Error("Invalid WeakMap key");
            if (!x(h, d)) {
                var k = new b;
                ca(h, d, {
                    value: k
                })
            }
            if (!x(h, d))
                throw Error("WeakMap key fail: " + h);
            h[d][this.g] = g;
            return this
        }
        ;
        f.prototype.get = function(h) {
            return c(h) && x(h, d) ? h[d][this.g] : void 0
        }
        ;
        f.prototype.has = function(h) {
            return c(h) && x(h, d) && x(h[d], this.g)
        }
        ;
        f.prototype.delete = function(h) {
            return c(h) && x(h, d) && x(h[d], this.g) ? delete h[d][this.g] : !1
        }
        ;
        return f
    }, "es6");
    q("Map", function(a) {
        if (function() {
            if (!a || "function" != typeof a || !a.prototype.entries || "function" != typeof Object.seal)
                return !1;
            try {
                var g = Object.seal({
                    x: 4
                })
                  , k = new a(t([[g, "s"]]));
                if ("s" != k.get(g) || 1 != k.size || k.get({
                    x: 4
                }) || k.set({
                    x: 4
                }, "t") != k || 2 != k.size)
                    return !1;
                var l = k.entries()
                  , n = l.next();
                if (n.done || n.value[0] != g || "s" != n.value[1])
                    return !1;
                n = l.next();
                return n.done || 4 != n.value[0].x || "t" != n.value[1] || !l.next().done ? !1 : !0
            } catch (r) {
                return !1
            }
        }())
            return a;
        var b = new m.WeakMap
          , c = function(g) {
            this.h = {};
            this.g = f();
            this.size = 0;
            if (g) {
                g = t(g);
                for (var k; !(k = g.next()).done; )
                    k = k.value,
                    this.set(k[0], k[1])
            }
        };
        c.prototype.set = function(g, k) {
            g = 0 === g ? 0 : g;
            var l = d(this, g);
            l.list || (l.list = this.h[l.id] = []);
            l.m ? l.m.value = k : (l.m = {
                next: this.g,
                u: this.g.u,
                head: this.g,
                key: g,
                value: k
            },
            l.list.push(l.m),
            this.g.u.next = l.m,
            this.g.u = l.m,
            this.size++);
            return this
        }
        ;
        c.prototype.delete = function(g) {
            g = d(this, g);
            return g.m && g.list ? (g.list.splice(g.index, 1),
            g.list.length || delete this.h[g.id],
            g.m.u.next = g.m.next,
            g.m.next.u = g.m.u,
            g.m.head = null,
            this.size--,
            !0) : !1
        }
        ;
        c.prototype.clear = function() {
            this.h = {};
            this.g = this.g.u = f();
            this.size = 0
        }
        ;
        c.prototype.has = function(g) {
            return !!d(this, g).m
        }
        ;
        c.prototype.get = function(g) {
            return (g = d(this, g).m) && g.value
        }
        ;
        c.prototype.entries = function() {
            return e(this, function(g) {
                return [g.key, g.value]
            })
        }
        ;
        c.prototype.keys = function() {
            return e(this, function(g) {
                return g.key
            })
        }
        ;
        c.prototype.values = function() {
            return e(this, function(g) {
                return g.value
            })
        }
        ;
        c.prototype.forEach = function(g, k) {
            for (var l = this.entries(), n; !(n = l.next()).done; )
                n = n.value,
                g.call(k, n[1], n[0], this)
        }
        ;
        c.prototype[p(m.Symbol, "iterator")] = c.prototype.entries;
        var d = function(g, k) {
            var l = k && typeof k;
            "object" == l || "function" == l ? b.has(k) ? l = b.get(k) : (l = "" + ++h,
            b.set(k, l)) : l = "p_" + k;
            var n = g.h[l];
            if (n && x(g.h, l))
                for (g = 0; g < n.length; g++) {
                    var r = n[g];
                    if (k !== k && r.key !== r.key || k === r.key)
                        return {
                            id: l,
                            list: n,
                            index: g,
                            m: r
                        }
                }
            return {
                id: l,
                list: n,
                index: -1,
                m: void 0
            }
        }
          , e = function(g, k) {
            var l = g.g;
            return ja(function() {
                if (l) {
                    for (; l.head != g.g; )
                        l = l.u;
                    for (; l.next != l.head; )
                        return l = l.next,
                        {
                            done: !1,
                            value: k(l)
                        };
                    l = null
                }
                return {
                    done: !0,
                    value: void 0
                }
            })
        }
          , f = function() {
            var g = {};
            return g.u = g.next = g.head = g
        }
          , h = 0;
        return c
    }, "es6");
    var ta = function(a, b) {
        a instanceof String && (a += "");
        var c = 0
          , d = !1
          , e = {
            next: function() {
                if (!d && c < a.length) {
                    var f = c++;
                    return {
                        value: b(f, a[f]),
                        done: !1
                    }
                }
                d = !0;
                return {
                    done: !0,
                    value: void 0
                }
            }
        };
        e[p(m.Symbol, "iterator")] = function() {
            return e
        }
        ;
        return e
    }
      , ua = function(a, b, c) {
        if (null == a)
            throw new TypeError("The 'this' value for String.prototype." + c + " must not be null or undefined");
        if (b instanceof RegExp)
            throw new TypeError("First argument to String.prototype." + c + " must not be a regular expression");
        return a + ""
    };
    q("String.prototype.startsWith", function(a) {
        return a ? a : function(b, c) {
            var d = ua(this, b, "startsWith")
              , e = d.length
              , f = b.length;
            c = Math.max(0, Math.min(c | 0, d.length));
            for (var h = 0; h < f && c < e; )
                if (d[c++] != b[h++])
                    return !1;
            return h >= f
        }
    }, "es6");
    q("String.prototype.repeat", function(a) {
        return a ? a : function(b) {
            var c = ua(this, null, "repeat");
            if (0 > b || 1342177279 < b)
                throw new RangeError("Invalid count value");
            b |= 0;
            for (var d = ""; b; )
                if (b & 1 && (d += c),
                b >>>= 1)
                    c += c;
            return d
        }
    }, "es6");
    q("globalThis", function(a) {
        return a || ea
    }, "es_2020");
    q("Set", function(a) {
        if (function() {
            if (!a || "function" != typeof a || !a.prototype.entries || "function" != typeof Object.seal)
                return !1;
            try {
                var c = Object.seal({
                    x: 4
                })
                  , d = new a(t([c]));
                if (!d.has(c) || 1 != d.size || d.add(c) != d || 1 != d.size || d.add({
                    x: 4
                }) != d || 2 != d.size)
                    return !1;
                var e = d.entries()
                  , f = e.next();
                if (f.done || f.value[0] != c || f.value[1] != c)
                    return !1;
                f = e.next();
                return f.done || f.value[0] == c || 4 != f.value[0].x || f.value[1] != f.value[0] ? !1 : e.next().done
            } catch (h) {
                return !1
            }
        }())
            return a;
        var b = function(c) {
            this.g = new m.Map;
            if (c) {
                c = t(c);
                for (var d; !(d = c.next()).done; )
                    this.add(d.value)
            }
            this.size = this.g.size
        };
        b.prototype.add = function(c) {
            c = 0 === c ? 0 : c;
            this.g.set(c, c);
            this.size = this.g.size;
            return this
        }
        ;
        b.prototype.delete = function(c) {
            c = this.g.delete(c);
            this.size = this.g.size;
            return c
        }
        ;
        b.prototype.clear = function() {
            this.g.clear();
            this.size = 0
        }
        ;
        b.prototype.has = function(c) {
            return this.g.has(c)
        }
        ;
        b.prototype.entries = function() {
            return this.g.entries()
        }
        ;
        b.prototype.values = function() {
            return p(this.g, "values").call(this.g)
        }
        ;
        b.prototype.keys = p(b.prototype, "values");
        b.prototype[p(m.Symbol, "iterator")] = p(b.prototype, "values");
        b.prototype.forEach = function(c, d) {
            var e = this;
            this.g.forEach(function(f) {
                return c.call(d, f, f, e)
            })
        }
        ;
        return b
    }, "es6");
    q("String.prototype.padStart", function(a) {
        return a ? a : function(b, c) {
            var d = ua(this, null, "padStart");
            b -= d.length;
            c = void 0 !== c ? String(c) : " ";
            return (0 < b && c ? p(c, "repeat").call(c, Math.ceil(b / c.length)).substring(0, b) : "") + d
        }
    }, "es8");
    q("Array.prototype.keys", function(a) {
        return a ? a : function() {
            return ta(this, function(b) {
                return b
            })
        }
    }, "es6");
    q("Array.prototype.values", function(a) {
        return a ? a : function() {
            return ta(this, function(b, c) {
                return c
            })
        }
    }, "es8");
    q("Object.is", function(a) {
        return a ? a : function(b, c) {
            return b === c ? 0 !== b || 1 / b === 1 / c : b !== b && c !== c
        }
    }, "es6");
    q("Array.prototype.includes", function(a) {
        return a ? a : function(b, c) {
            var d = this;
            d instanceof String && (d = String(d));
            var e = d.length;
            c = c || 0;
            for (0 > c && (c = Math.max(c + e, 0)); c < e; c++) {
                var f = d[c];
                if (f === b || p(Object, "is").call(Object, f, b))
                    return !0
            }
            return !1
        }
    }, "es7");
    q("String.prototype.includes", function(a) {
        return a ? a : function(b, c) {
            return -1 !== ua(this, b, "includes").indexOf(b, c || 0)
        }
    }, "es6");
    var z = this || self
      , va = function(a) {
        a = a.split(".");
        for (var b = z, c = 0; c < a.length; c++)
            if (b = b[a[c]],
            null == b)
                return null;
        return b
    }
      , ya = function(a) {
        return Object.prototype.hasOwnProperty.call(a, wa) && a[wa] || (a[wa] = ++xa)
    }
      , wa = "closure_uid_" + (1E9 * Math.random() >>> 0)
      , xa = 0
      , za = function(a, b) {
        a = a.split(".");
        var c = z;
        a[0]in c || "undefined" == typeof c.execScript || c.execScript("var " + a[0]);
        for (var d; a.length && (d = a.shift()); )
            a.length || void 0 === b ? c[d] && c[d] !== Object.prototype[d] ? c = c[d] : c = c[d] = {} : c[d] = b
    };
    var Aa = function(a) {
        return /^[\s\xa0]*([\s\S]*?)[\s\xa0]*$/.exec(a)[1]
    }
      , Ia = function(a) {
        if (!Ba.test(a))
            return a;
        -1 != a.indexOf("&") && (a = a.replace(Ca, "&amp;"));
        -1 != a.indexOf("<") && (a = a.replace(Da, "&lt;"));
        -1 != a.indexOf(">") && (a = a.replace(Ea, "&gt;"));
        -1 != a.indexOf('"') && (a = a.replace(Fa, "&quot;"));
        -1 != a.indexOf("'") && (a = a.replace(Ga, "&#39;"));
        -1 != a.indexOf("\x00") && (a = a.replace(Ha, "&#0;"));
        return a
    }
      , Ca = /&/g
      , Da = /</g
      , Ea = />/g
      , Fa = /"/g
      , Ga = /'/g
      , Ha = /\x00/g
      , Ba = /[\x00&<>"']/
      , La = function(a, b) {
        var c = 0;
        a = Aa(String(a)).split(".");
        b = Aa(String(b)).split(".");
        for (var d = Math.max(a.length, b.length), e = 0; 0 == c && e < d; e++) {
            var f = a[e] || ""
              , h = b[e] || "";
            do {
                f = /(\d*)(\D*)(.*)/.exec(f) || ["", "", "", ""];
                h = /(\d*)(\D*)(.*)/.exec(h) || ["", "", "", ""];
                if (0 == f[0].length && 0 == h[0].length)
                    break;
                c = Ja(0 == f[1].length ? 0 : parseInt(f[1], 10), 0 == h[1].length ? 0 : parseInt(h[1], 10)) || Ja(0 == f[2].length, 0 == h[2].length) || Ja(f[2], h[2]);
                f = f[3];
                h = h[3]
            } while (0 == c)
        }
        return c
    }
      , Ja = function(a, b) {
        return a < b ? -1 : a > b ? 1 : 0
    };
    function Ma() {
        var a = z.navigator;
        return a && (a = a.userAgent) ? a : ""
    }
    function Na(a) {
        return -1 != Ma().indexOf(a)
    }
    ;var Oa = function(a, b) {
        Array.prototype.forEach.call(a, b, void 0)
    }
      , Pa = function(a, b) {
        return Array.prototype.filter.call(a, b, void 0)
    }
      , Qa = function(a, b) {
        return Array.prototype.map.call(a, b, void 0)
    };
    function Ra(a, b) {
        a: {
            for (var c = a.length, d = "string" === typeof a ? a.split("") : a, e = 0; e < c; e++)
                if (e in d && b.call(void 0, d[e], e, a)) {
                    b = e;
                    break a
                }
            b = -1
        }
        return 0 > b ? null : "string" === typeof a ? a.charAt(b) : a[b]
    }
    function Sa(a, b) {
        a: {
            for (var c = "string" === typeof a ? a.split("") : a, d = a.length - 1; 0 <= d; d--)
                if (d in c && b.call(void 0, c[d], d, a)) {
                    b = d;
                    break a
                }
            b = -1
        }
        return 0 > b ? null : "string" === typeof a ? a.charAt(b) : a[b]
    }
    function Ta(a, b) {
        return 0 <= Array.prototype.indexOf.call(a, b, void 0)
    }
    ;var Ua = {}
      , Va = null
      , Xa = function(a) {
        var b = [];
        Wa(a, function(c) {
            b.push(c)
        });
        return b
    }
      , Wa = function(a, b) {
        function c(k) {
            for (; d < a.length; ) {
                var l = a.charAt(d++)
                  , n = Va[l];
                if (null != n)
                    return n;
                if (!/^[\s\xa0]*$/.test(l))
                    throw Error("Unknown base64 encoding at char: " + l);
            }
            return k
        }
        Ya();
        for (var d = 0; ; ) {
            var e = c(-1)
              , f = c(0)
              , h = c(64)
              , g = c(64);
            if (64 === g && -1 === e)
                break;
            b(e << 2 | f >> 4);
            64 != h && (b(f << 4 & 240 | h >> 2),
            64 != g && b(h << 6 & 192 | g))
        }
    }
      , Ya = function() {
        if (!Va) {
            Va = {};
            for (var a = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789".split(""), b = ["+/=", "+/", "-_=", "-_.", "-_"], c = 0; 5 > c; c++) {
                var d = a.concat(b[c].split(""));
                Ua[c] = d;
                for (var e = 0; e < d.length; e++) {
                    var f = d[e];
                    void 0 === Va[f] && (Va[f] = e)
                }
            }
        }
    };
    var Za = "function" === typeof Uint8Array;
    var $a = "function" === typeof m.Symbol && "symbol" === typeof (0,
    m.Symbol)() ? (0,
    m.Symbol)(void 0) : void 0;
    function ab(a) {
        Object.isFrozen(a) || ($a ? a[$a] |= 1 : void 0 !== a.g ? a.g |= 1 : Object.defineProperties(a, {
            g: {
                value: 1,
                configurable: !0,
                writable: !0,
                enumerable: !1
            }
        }));
        return a
    }
    ;function bb(a) {
        return null !== a && "object" === typeof a && !Array.isArray(a) && a.constructor === Object
    }
    var cb, db = Object.freeze(ab([]));
    var A = function(a, b, c) {
        return -1 === b ? null : b >= a.l ? a.i ? a.i[b] : void 0 : (void 0 === c ? 0 : c) && a.i && (c = a.i[b],
        null != c) ? c : a.h[b + a.j]
    }
      , B = function(a, b, c, d) {
        b < a.l && (void 0 === d || !d) ? a.h[b + a.j] = c : (a.i || (a.i = a.h[a.l + a.j] = {}))[b] = c;
        return a
    }
      , eb = function(a, b, c) {
        c = void 0 === c ? !1 : c;
        var d = A(a, b, c);
        null == d && (d = db);
        d === db && (d = ab(d.slice()),
        B(a, b, d, c));
        return d
    }
      , C = function(a, b, c) {
        a = A(a, b);
        return null == a ? c : a
    }
      , fb = function(a, b) {
        a = A(a, b);
        a = null == a ? a : !!a;
        return null == a ? !1 : a
    }
      , gb = function(a, b, c) {
        a = A(a, b);
        a = null == a ? a : +a;
        return null == a ? void 0 === c ? 0 : c : a
    }
      , hb = function(a, b, c) {
        var d = void 0 === d ? !1 : d;
        return B(a, b, null == c ? ab([]) : Array.isArray(c) ? ab(c) : c, d)
    };
    function D(a, b, c) {
        0 !== c ? B(a, b, c) : B(a, b, void 0, !1);
        return a
    }
    var kb = function(a, b, c, d) {
        (c = F(a, c)) && c !== b && null != d && (a.g && c in a.g && (a.g[c] = void 0),
        B(a, c, void 0));
        return B(a, b, d)
    }
      , F = function(a, b) {
        for (var c = 0, d = 0; d < b.length; d++) {
            var e = b[d];
            null != A(a, e) && (0 !== c && B(a, c, void 0, !1),
            c = e)
        }
        return c
    }
      , G = function(a, b, c) {
        if (-1 === c)
            return null;
        a.g || (a.g = {});
        var d = a.g[c];
        if (d)
            return d;
        var e = A(a, c, !1);
        if (null == e)
            return d;
        b = new b(e);
        return a.g[c] = b
    }
      , H = function(a, b, c) {
        a.g || (a.g = {});
        var d = a.g[c];
        if (!d) {
            var e = eb(a, c, !1);
            d = [];
            for (var f = 0; f < e.length; f++)
                d[f] = new b(e[f]);
            a.g[c] = d
        }
        return d
    }
      , lb = function(a, b, c) {
        var d;
        a.g || (a.g = {});
        var e = c ? c.h : c;
        a.g[b] = c;
        return B(a, b, e, void 0 === d ? !1 : d)
    }
      , nb = function(a, b, c) {
        var d = mb;
        a.g || (a.g = {});
        var e = c ? c.h : c;
        a.g[b] = c;
        return kb(a, b, d, e)
    }
      , ob = function(a, b, c) {
        var d = void 0 === d ? !1 : d;
        if (c) {
            var e = ab([]);
            for (var f = 0; f < c.length; f++)
                e[f] = c[f].h;
            a.g || (a.g = {});
            a.g[b] = c
        } else
            a.g && (a.g[b] = void 0),
            e = db;
        return B(a, b, e, d)
    }
      , pb = function(a, b, c) {
        return C(a, b, void 0 === c ? "" : c)
    }
      , qb = function(a, b, c) {
        b = F(a, c) === b ? b : -1;
        return C(a, b, 0)
    };
    function rb(a) {
        switch (typeof a) {
        case "number":
            return isFinite(a) ? a : String(a);
        case "object":
            if (a && !Array.isArray(a) && Za && null != a && a instanceof Uint8Array) {
                var b;
                void 0 === b && (b = 0);
                Ya();
                b = Ua[b];
                for (var c = Array(Math.floor(a.length / 3)), d = b[64] || "", e = 0, f = 0; e < a.length - 2; e += 3) {
                    var h = a[e]
                      , g = a[e + 1]
                      , k = a[e + 2]
                      , l = b[h >> 2];
                    h = b[(h & 3) << 4 | g >> 4];
                    g = b[(g & 15) << 2 | k >> 6];
                    k = b[k & 63];
                    c[f++] = l + h + g + k
                }
                l = 0;
                k = d;
                switch (a.length - e) {
                case 2:
                    l = a[e + 1],
                    k = b[(l & 15) << 2] || d;
                case 1:
                    a = a[e],
                    c[f] = b[a >> 2] + b[(a & 3) << 4 | l >> 4] + k + d
                }
                return c.join("")
            }
        }
        return a
    }
    ;function sb(a, b) {
        if (null != a) {
            if (Array.isArray(a))
                a = tb(a, b);
            else if (bb(a)) {
                var c = {}, d;
                for (d in a)
                    Object.prototype.hasOwnProperty.call(a, d) && (c[d] = sb(a[d], b));
                a = c
            } else
                a = b(a);
            return a
        }
    }
    function tb(a, b) {
        for (var c = a.slice(), d = 0; d < c.length; d++)
            c[d] = sb(c[d], b);
        if (b = Array.isArray(a)) {
            var e;
            $a ? e = a[$a] : e = a.g;
            b = (null == e ? 0 : e) & 1
        }
        b && ab(c);
        return c
    }
    function ub(a) {
        if (a && "object" == typeof a && a.toJSON)
            return a.toJSON();
        a = rb(a);
        return Array.isArray(a) ? tb(a, ub) : a
    }
    ;var vb;
    var wb = function(a, b, c) {
        var d = vb;
        vb = null;
        a || (a = d);
        d = this.constructor.messageId;
        a || (a = d ? [d] : []);
        this.j = (d ? 0 : -1) - (this.constructor.Aa || 0);
        this.g = void 0;
        this.h = a;
        a: {
            d = this.h.length;
            a = d - 1;
            if (d && (d = this.h[a],
            bb(d))) {
                this.l = a - this.j;
                this.i = d;
                break a
            }
            void 0 !== b && -1 < b ? (this.l = Math.max(b, a + 1 - this.j),
            this.i = void 0) : this.l = Number.MAX_VALUE
        }
        if (c)
            for (b = 0; b < c.length; b++)
                if (a = c[b],
                a < this.l)
                    a += this.j,
                    (d = this.h[a]) ? Array.isArray(d) && ab(d) : this.h[a] = db;
                else {
                    d = this.i || (this.i = this.h[this.l + this.j] = {});
                    var e = d[a];
                    e ? Array.isArray(e) && ab(e) : d[a] = db
                }
    };
    wb.prototype.toJSON = function() {
        var a = this.h;
        return cb ? a : tb(a, ub)
    }
    ;
    function xb(a, b) {
        return rb(b)
    }
    var yb = function(a) {
        cb = !0;
        try {
            return JSON.stringify(a.toJSON(), xb)
        } finally {
            cb = !1
        }
    };
    var I = function() {
        wb.apply(this, arguments)
    };
    v(I, wb);
    var Bb = function(a, b) {
        this.h = a === zb && b || "";
        this.i = Ab
    };
    Bb.prototype.B = !0;
    Bb.prototype.g = function() {
        return this.h
    }
    ;
    var Cb = function(a) {
        return a instanceof Bb && a.constructor === Bb && a.i === Ab ? a.h : "type_error:Const"
    }
      , J = function(a) {
        return new Bb(zb,a)
    }
      , Ab = {}
      , zb = {};
    function Db(a) {
        var b = [], c = 0, d;
        for (d in a)
            b[c++] = a[d];
        return b
    }
    ;var Eb = {
        area: !0,
        base: !0,
        br: !0,
        col: !0,
        command: !0,
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
    };
    var K = function(a, b) {
        this.i = b === Fb ? a : ""
    };
    K.prototype.B = !0;
    K.prototype.g = function() {
        return this.i.toString()
    }
    ;
    K.prototype.J = !0;
    K.prototype.h = function() {
        return 1
    }
    ;
    var Jb = function(a, b) {
        a = Gb.exec(Hb(a).toString());
        var c = a[3] || "";
        return new K(a[1] + Ib("?", a[2] || "", b) + Ib("#", c, void 0),Fb)
    };
    K.prototype.toString = function() {
        return this.i + ""
    }
    ;
    var Hb = function(a) {
        return a instanceof K && a.constructor === K ? a.i : "type_error:TrustedResourceUrl"
    }
      , Gb = /^([^?#]*)(\?[^#]*)?(#[\s\S]*)?/
      , Kb = function(a) {
        for (var b = "", c = 0; c < a.length; c++)
            b += Cb(a[c]);
        return new K(b,Fb)
    }
      , Fb = {}
      , Ib = function(a, b, c) {
        if (null == c)
            return b;
        if ("string" === typeof c)
            return c ? a + encodeURIComponent(c) : "";
        for (var d in c)
            if (Object.prototype.hasOwnProperty.call(c, d)) {
                var e = c[d];
                e = Array.isArray(e) ? e : [e];
                for (var f = 0; f < e.length; f++) {
                    var h = e[f];
                    null != h && (b || (b = a),
                    b += (b.length > a.length ? "&" : "") + encodeURIComponent(d) + "=" + encodeURIComponent(String(h)))
                }
            }
        return b
    };
    var L = function(a, b) {
        this.i = b === Lb ? a : ""
    };
    L.prototype.B = !0;
    L.prototype.g = function() {
        return this.i.toString()
    }
    ;
    L.prototype.J = !0;
    L.prototype.h = function() {
        return 1
    }
    ;
    L.prototype.toString = function() {
        return this.i.toString()
    }
    ;
    var Mb = RegExp('^(?:audio/(?:3gpp2|3gpp|aac|L16|midi|mp3|mp4|mpeg|oga|ogg|opus|x-m4a|x-matroska|x-wav|wav|webm)|font/\\w+|image/(?:bmp|gif|jpeg|jpg|png|tiff|webp|x-icon)|video/(?:mpeg|mp4|ogg|webm|quicktime|x-matroska))(?:;\\w+=(?:\\w+|"[\\w;,= ]+"))*$', "i")
      , Nb = /^data:(.*);base64,[a-z0-9+\/]+=*$/i
      , Ob = /^(?:(?:https?|mailto|ftp):|[^:/?#]*(?:[/?#]|$))/i
      , Lb = {}
      , Pb = new L("about:invalid#zClosurez",Lb);
    var Qb = {}
      , M = function(a, b, c) {
        this.i = c === Qb ? a : "";
        this.j = b;
        this.B = this.J = !0
    };
    M.prototype.h = function() {
        return this.j
    }
    ;
    M.prototype.g = function() {
        return this.i.toString()
    }
    ;
    M.prototype.toString = function() {
        return this.i.toString()
    }
    ;
    var Rb = function(a) {
        return a instanceof M && a.constructor === M ? a.i : "type_error:SafeHtml"
    }
      , Sb = function(a) {
        if (a instanceof M)
            return a;
        var b = "object" == typeof a
          , c = null;
        b && a.J && (c = a.h());
        a = Ia(b && a.B ? a.g() : String(a));
        return new M(a,c,Qb)
    }
      , Wb = function(a, b) {
        var c = {
            src: a
        }
          , d = {};
        a = {};
        for (var e in c)
            Object.prototype.hasOwnProperty.call(c, e) && (a[e] = c[e]);
        for (var f in d)
            Object.prototype.hasOwnProperty.call(d, f) && (a[f] = d[f]);
        if (b)
            for (var h in b)
                if (Object.prototype.hasOwnProperty.call(b, h)) {
                    e = h.toLowerCase();
                    if (e in c)
                        throw Error("");
                    e in d && delete a[e];
                    a[h] = b[h]
                }
        var g;
        b = null;
        h = "";
        if (a)
            for (k in a)
                if (Object.prototype.hasOwnProperty.call(a, k)) {
                    if (!Tb.test(k))
                        throw Error("");
                    d = a[k];
                    if (null != d) {
                        c = k;
                        if (d instanceof Bb)
                            d = Cb(d);
                        else {
                            if ("style" == c.toLowerCase())
                                throw Error("");
                            if (/^on/i.test(c))
                                throw Error("");
                            if (c.toLowerCase()in Ub)
                                if (d instanceof K)
                                    d = Hb(d).toString();
                                else if (d instanceof L)
                                    d = d instanceof L && d.constructor === L ? d.i : "type_error:SafeUrl";
                                else if ("string" === typeof d)
                                    d instanceof L || (d = "object" == typeof d && d.B ? d.g() : String(d),
                                    Ob.test(d) ? d = new L(d,Lb) : (d = String(d),
                                    d = d.replace(/(%0A|%0D)/g, ""),
                                    d = (e = d.match(Nb)) && Mb.test(e[1]) ? new L(d,Lb) : null)),
                                    d = (d || Pb).g();
                                else
                                    throw Error("");
                        }
                        d.B && (d = d.g());
                        c = c + '="' + Ia(String(d)) + '"';
                        h += " " + c
                    }
                }
        var k = "<script" + h;
        null == g ? g = [] : Array.isArray(g) || (g = [g]);
        !0 === Eb.script ? k += ">" : (g = Vb(g),
        k += ">" + Rb(g).toString() + "\x3c/script>",
        b = g.h());
        (a = a && a.dir) && (/^(ltr|rtl|auto)$/i.test(a) ? b = 0 : b = null);
        return new M(k,b,Qb)
    }
      , Yb = function(a) {
        var b = Sb(Xb)
          , c = b.h()
          , d = []
          , e = function(f) {
            Array.isArray(f) ? f.forEach(e) : (f = Sb(f),
            d.push(Rb(f).toString()),
            f = f.h(),
            0 == c ? c = f : 0 != f && c != f && (c = null))
        };
        a.forEach(e);
        return new M(d.join(Rb(b).toString()),c,Qb)
    }
      , Vb = function(a) {
        return Yb(Array.prototype.slice.call(arguments))
    }
      , Tb = /^[a-zA-Z0-9-]+$/
      , Ub = {
        action: !0,
        cite: !0,
        data: !0,
        formaction: !0,
        href: !0,
        manifest: !0,
        poster: !0,
        src: !0
    }
      , Xb = new M(z.trustedTypes && z.trustedTypes.emptyHTML || "",0,Qb);
    /*

 SPDX-License-Identifier: Apache-2.0
*/
    var Zb = {};
    function $b() {
        var a = "undefined" !== typeof window ? window.trustedTypes : void 0;
        return null !== a && void 0 !== a ? a : null
    }
    var ac;
    function bc() {
        var a, b;
        if (void 0 === ac)
            try {
                ac = null !== (b = null === (a = $b()) || void 0 === a ? void 0 : a.createPolicy("google#safe", {
                    createHTML: function(c) {
                        return c
                    },
                    createScript: function(c) {
                        return c
                    },
                    createScriptURL: function(c) {
                        return c
                    }
                })) && void 0 !== b ? b : null
            } catch (c) {
                ac = null
            }
        return ac
    }
    ;var cc = function() {}
      , dc = function(a) {
        this.g = a
    };
    v(dc, cc);
    dc.prototype.toString = function() {
        return this.g.toString()
    }
    ;
    function ec(a) {
        var b, c = null === (b = bc()) || void 0 === b ? void 0 : b.createScriptURL(a);
        return new dc(null !== c && void 0 !== c ? c : a,Zb)
    }
    ;function fc(a) {
        if (a instanceof cc)
            if (a instanceof dc)
                a = a.g;
            else
                throw Error("");
        else
            a = Hb(a);
        return a
    }
    ;function gc(a) {
        var b, c = (a.ownerDocument && a.ownerDocument.defaultView || window).document, d = null === (b = c.querySelector) || void 0 === b ? void 0 : b.call(c, "script[nonce]");
        (b = d ? d.nonce || d.getAttribute("nonce") || "" : "") && a.setAttribute("nonce", b)
    }
    ;function hc(a, b) {
        a.write(Rb(b))
    }
    ;var ic = function(a) {
        var b = !1, c;
        return function() {
            b || (c = a(),
            b = !0);
            return c
        }
    };
    var jc = function(a, b) {
        a.addEventListener && a.addEventListener("load", b, !1)
    };
    var lc = function() {
        a: {
            var a = z.document;
            if (a.querySelector && (a = a.querySelector("script[nonce]")) && (a = a.nonce || a.getAttribute("nonce")) && kc.test(a))
                break a;
            a = ""
        }
        return a
    }
      , kc = /^[\w+/_-]+[=]{0,2}$/;
    var mc = function() {
        return Na("iPad") || Na("Android") && !Na("Mobile") || Na("Silk")
    };
    var nc = RegExp("^(?:([^:/?#.]+):)?(?://(?:([^\\\\/?#]*)@)?([^\\\\/?#]*?)(?::([0-9]+))?(?=[\\\\/?#]|$))?([^?#]+)?(?:\\?([^#]*))?(?:#([\\s\\S]*))?$")
      , oc = function(a) {
        return a ? decodeURI(a) : a
    }
      , pc = /#|$/
      , qc = function(a, b) {
        var c = a.search(pc);
        a: {
            var d = 0;
            for (var e = b.length; 0 <= (d = a.indexOf(b, d)) && d < c; ) {
                var f = a.charCodeAt(d - 1);
                if (38 == f || 63 == f)
                    if (f = a.charCodeAt(d + e),
                    !f || 61 == f || 38 == f || 35 == f)
                        break a;
                d += e + 1
            }
            d = -1
        }
        if (0 > d)
            return null;
        e = a.indexOf("&", d);
        if (0 > e || e > c)
            e = c;
        d += b.length + 1;
        return decodeURIComponent(a.substr(d, e - d).replace(/\+/g, " "))
    };
    var uc = function(a, b) {
        if (!rc() && !sc()) {
            var c = Math.random();
            if (c < b)
                return c = tc(),
                a[Math.floor(c * a.length)]
        }
        return null
    }
      , tc = function() {
        if (!m.globalThis.crypto)
            return Math.random();
        try {
            var a = new Uint32Array(1);
            m.globalThis.crypto.getRandomValues(a);
            return a[0] / 65536 / 65536
        } catch (b) {
            return Math.random()
        }
    }
      , vc = function(a, b) {
        if (a)
            for (var c in a)
                Object.prototype.hasOwnProperty.call(a, c) && b(a[c], c, a)
    }
      , wc = function(a) {
        var b = a.length;
        if (0 == b)
            return 0;
        for (var c = 305419896, d = 0; d < b; d++)
            c ^= (c << 5) + (c >> 2) + a.charCodeAt(d) & 4294967295;
        return 0 < c ? c : 4294967296 + c
    }
      , sc = ic(function() {
        return Array.prototype.some.call(["Google Web Preview", "Mediapartners-Google", "Google-Read-Aloud", "Google-Adwords"], xc, void 0) || 1E-4 > Math.random()
    })
      , rc = ic(function() {
        return xc("MSIE")
    })
      , xc = function(a) {
        return -1 != Ma().indexOf(a)
    }
      , yc = /^(-?[0-9.]{1,30})$/
      , zc = function(a) {
        var b = void 0 === b ? null : b;
        if (!yc.test(a))
            return b;
        a = Number(a);
        return isNaN(a) ? b : a
    }
      , Ac = function(a) {
        return /^true$/.test(a)
    }
      , Bc = ic(function() {
        return !mc() && (Na("iPod") || Na("iPhone") || Na("Android") || Na("IEMobile")) ? 2 : mc() ? 1 : 0
    })
      , Cc = function(a, b) {
        a = void 0 === a ? "" : a;
        b = void 0 === b ? window : b;
        return (b = oc(b.location.href.match(nc)[3] || null)) ? wc(b + a) : null
    }
      , Ec = function(a, b) {
        0 != a.length && b.head && a.forEach(function(c) {
            if (c && c && b.head) {
                var d = Dc("META");
                b.head.appendChild(d);
                d.httpEquiv = "origin-trial";
                d.content = c
            }
        })
    }
      , Fc = function(a) {
        if ("number" !== typeof a.goog_pvsid)
            try {
                Object.defineProperty(a, "goog_pvsid", {
                    value: Math.floor(Math.random() * Math.pow(2, 52)),
                    configurable: !1
                })
            } catch (b) {}
        return Number(a.goog_pvsid) || -1
    }
      , Dc = function(a, b) {
        b = void 0 === b ? document : b;
        return b.createElement(String(a).toLowerCase())
    };
    function Gc(a) {
        var b = w.apply(1, arguments);
        if (0 === b.length)
            return ec(a[0]);
        for (var c = [a[0]], d = 0; d < b.length; d++)
            c.push(encodeURIComponent(b[d])),
            c.push(a[d + 1]);
        return ec(c.join(""))
    }
    ;var Hc = "a".charCodeAt()
      , Ic = Db({
        va: 0,
        ua: 1,
        ra: 2,
        ma: 3,
        sa: 4,
        na: 5,
        ta: 6,
        pa: 7,
        qa: 8,
        la: 9,
        oa: 10
    })
      , Jc = Db({
        xa: 0,
        ya: 1,
        wa: 2
    });
    var Kc = function(a) {
        if (/[^01]/.test(a))
            throw Error("Input bitstring " + a + " is malformed!");
        this.h = a;
        this.g = 0
    }
      , Nc = function(a) {
        var b = N(a, 16);
        return !0 === !!N(a, 1) ? (a = Lc(a),
        a.forEach(function(c) {
            if (c > b)
                throw Error("ID " + c + " is past MaxVendorId " + b + "!");
        }),
        a) : Mc(a, b)
    }
      , Lc = function(a) {
        for (var b = N(a, 12), c = []; b--; ) {
            var d = !0 === !!N(a, 1)
              , e = N(a, 16);
            if (d)
                for (d = N(a, 16); e <= d; e++)
                    c.push(e);
            else
                c.push(e)
        }
        c.sort(function(f, h) {
            return f - h
        });
        return c
    }
      , Mc = function(a, b, c) {
        for (var d = [], e = 0; e < b; e++)
            if (N(a, 1)) {
                var f = e + 1;
                if (c && -1 === c.indexOf(f))
                    throw Error("ID: " + f + " is outside of allowed values!");
                d.push(f)
            }
        return d
    }
      , N = function(a, b) {
        if (a.g + b > a.h.length)
            throw Error("Requested length " + b + " is past end of string.");
        var c = a.h.substring(a.g, a.g + b);
        a.g += b;
        return parseInt(c, 2)
    };
    var Pc = function(a, b) {
        try {
            var c = Xa(a.split(".")[0]).map(function(e) {
                return (aa = e.toString(2),
                p(aa, "padStart")).call(aa, 8, "0")
            }).join("")
              , d = new Kc(c);
            c = {};
            c.tcString = a;
            c.gdprApplies = !0;
            d.g += 78;
            c.cmpId = N(d, 12);
            c.cmpVersion = N(d, 12);
            d.g += 30;
            c.tcfPolicyVersion = N(d, 6);
            c.isServiceSpecific = !!N(d, 1);
            c.useNonStandardStacks = !!N(d, 1);
            c.specialFeatureOptins = Oc(Mc(d, 12, Jc), Jc);
            c.purpose = {
                consents: Oc(Mc(d, 24, Ic), Ic),
                legitimateInterests: Oc(Mc(d, 24, Ic), Ic)
            };
            c.purposeOneTreatment = !!N(d, 1);
            c.publisherCC = String.fromCharCode(Hc + N(d, 6)) + String.fromCharCode(Hc + N(d, 6));
            c.vendor = {
                consents: Oc(Nc(d), b),
                legitimateInterests: Oc(Nc(d), b)
            };
            return c
        } catch (e) {
            return null
        }
    }
      , Oc = function(a, b) {
        var c = {};
        if (Array.isArray(b) && 0 !== b.length) {
            b = t(b);
            for (var d = b.next(); !d.done; d = b.next())
                d = d.value,
                c[d] = -1 !== a.indexOf(d)
        } else
            for (a = t(a),
            d = a.next(); !d.done; d = a.next())
                c[d.value] = !0;
        delete c[0];
        return c
    };
    function Qc(a) {
        return function() {
            var b = w.apply(0, arguments);
            try {
                return a.apply(this, b)
            } catch (c) {}
        }
    }
    var Rc = Qc(function(a) {
        var b = []
          , c = {};
        a = t(a);
        for (var d = a.next(); !d.done; c = {
            C: c.C
        },
        d = a.next())
            c.C = d.value,
            Qc(function(e) {
                return function() {
                    b.push('[{"' + e.C.ka + '":' + yb(e.C.message) + "}]")
                }
            }(c))();
        return "[[" + b.join(",") + "]]"
    });
    var Sc = function(a, b) {
        if (m.globalThis.fetch)
            m.globalThis.fetch(a, {
                method: "POST",
                body: b,
                keepalive: 65536 > b.length,
                credentials: "omit",
                mode: "no-cors",
                redirect: "follow"
            });
        else {
            var c = new XMLHttpRequest;
            c.open("POST", a, !0);
            c.send(b)
        }
    };
    function Tc(a) {
        a.ia.apply(a, u(w.apply(1, arguments).map(function(b) {
            return {
                ka: 4,
                message: b
            }
        })))
    }
    ;var Uc = function(a) {
        var b = void 0 === b ? Sc : b;
        this.j = void 0 === a ? 1E3 : a;
        this.i = b;
        this.h = [];
        this.g = null
    };
    Uc.prototype.ia = function() {
        var a = w.apply(0, arguments)
          , b = this;
        Qc(function() {
            b.h.push.apply(b.h, u(a));
            var c = Qc(function() {
                var d = Rc(b.h);
                b.i("https://pagead2.googlesyndication.com/pagead/ping?e=1", d);
                b.h = [];
                b.g = null
            });
            100 <= b.h.length ? (null !== b.g && clearTimeout(b.g),
            b.g = setTimeout(c, 0)) : null === b.g && (b.g = setTimeout(c, b.j))
        })()
    }
    ;
    var Vc = function(a) {
        this.g = a;
        this.defaultValue = !1
    }
      , Wc = function(a) {
        this.g = a;
        this.defaultValue = 0
    }
      , Xc = function(a, b) {
        b = void 0 === b ? [] : b;
        this.g = a;
        this.defaultValue = b
    };
    var Yc = new Vc(399544548)
      , Zc = new Wc(24)
      , $c = new Xc(1939)
      , ad = new Xc(1934,["A8FHS1NmdCwGqD9DwOicnHHY+y27kdWfxKa0YHSGDfv0CSpDKRHTQdQmZVPDUdaFWUsxdgVxlwAd6o+dhJykPA0AAACWeyJvcmlnaW4iOiJodHRwczovL2RvdWJsZWNsaWNrLm5ldDo0NDMiLCJmZWF0dXJlIjoiQ29udmVyc2lvbk1lYXN1cmVtZW50IiwiZXhwaXJ5IjoxNjQzMTU1MTk5LCJpc1N1YmRvbWFpbiI6dHJ1ZSwiaXNUaGlyZFBhcnR5Ijp0cnVlLCJ1c2FnZSI6InN1YnNldCJ9", "A8zdXi6dr1hwXEUjQrYiyYQGlU3557y5QWDnN0Lwgj9ePt66XMEvNkVWOEOWPd7TP9sBQ25X0Q15Lr1Nn4oGFQkAAACceyJvcmlnaW4iOiJodHRwczovL2dvb2dsZXN5bmRpY2F0aW9uLmNvbTo0NDMiLCJmZWF0dXJlIjoiQ29udmVyc2lvbk1lYXN1cmVtZW50IiwiZXhwaXJ5IjoxNjQzMTU1MTk5LCJpc1N1YmRvbWFpbiI6dHJ1ZSwiaXNUaGlyZFBhcnR5Ijp0cnVlLCJ1c2FnZSI6InN1YnNldCJ9", "A4/Htern2udN9w3yJK9QgWQxQFruxOXsXL7cW60DyCl0EZFGCSme/J33Q/WzF7bBkVvhEWDlcBiUyZaim5CpFQwAAACceyJvcmlnaW4iOiJodHRwczovL2dvb2dsZXRhZ3NlcnZpY2VzLmNvbTo0NDMiLCJmZWF0dXJlIjoiQ29udmVyc2lvbk1lYXN1cmVtZW50IiwiZXhwaXJ5IjoxNjQzMTU1MTk5LCJpc1N1YmRvbWFpbiI6dHJ1ZSwiaXNUaGlyZFBhcnR5Ijp0cnVlLCJ1c2FnZSI6InN1YnNldCJ9"])
      , bd = new Vc(1959)
      , cd = new Vc(203)
      , dd = new Vc(1928)
      , ed = new Vc(1941)
      , fd = new Vc(370946349)
      , gd = new Vc(392736476)
      , hd = new Wc(406149835)
      , id = new Xc(1932,["AxujKG9INjsZ8/gUq8+dTruNvk7RjZQ1oFhhgQbcTJKDnZfbzSTE81wvC2Hzaf3TW4avA76LTZEMdiedF1vIbA4AAABueyJvcmlnaW4iOiJodHRwczovL2ltYXNkay5nb29nbGVhcGlzLmNvbTo0NDMiLCJmZWF0dXJlIjoiVHJ1c3RUb2tlbnMiLCJleHBpcnkiOjE2NTI3NzQ0MDAsImlzVGhpcmRQYXJ0eSI6dHJ1ZX0=", "Azuce85ORtSnWe1MZDTv68qpaW3iHyfL9YbLRy0cwcCZwVnePnOmkUJlG8HGikmOwhZU22dElCcfrfX2HhrBPAkAAAB7eyJvcmlnaW4iOiJodHRwczovL2RvdWJsZWNsaWNrLm5ldDo0NDMiLCJmZWF0dXJlIjoiVHJ1c3RUb2tlbnMiLCJleHBpcnkiOjE2NTI3NzQ0MDAsImlzU3ViZG9tYWluIjp0cnVlLCJpc1RoaXJkUGFydHkiOnRydWV9", "A16nvcdeoOAqrJcmjLRpl1I6f3McDD8EfofAYTt/P/H4/AWwB99nxiPp6kA0fXoiZav908Z8etuL16laFPUdfQsAAACBeyJvcmlnaW4iOiJodHRwczovL2dvb2dsZXRhZ3NlcnZpY2VzLmNvbTo0NDMiLCJmZWF0dXJlIjoiVHJ1c3RUb2tlbnMiLCJleHBpcnkiOjE2NTI3NzQ0MDAsImlzU3ViZG9tYWluIjp0cnVlLCJpc1RoaXJkUGFydHkiOnRydWV9", "AxBHdr0J44vFBQtZUqX9sjiqf5yWZ/OcHRcRMN3H9TH+t90V/j3ENW6C8+igBZFXMJ7G3Pr8Dd13632aLng42wgAAACBeyJvcmlnaW4iOiJodHRwczovL2dvb2dsZXN5bmRpY2F0aW9uLmNvbTo0NDMiLCJmZWF0dXJlIjoiVHJ1c3RUb2tlbnMiLCJleHBpcnkiOjE2NTI3NzQ0MDAsImlzU3ViZG9tYWluIjp0cnVlLCJpc1RoaXJkUGFydHkiOnRydWV9", "A88BWHFjcawUfKU3lIejLoryXoyjooBXLgWmGh+hNcqMK44cugvsI5YZbNarYvi3roc1fYbHA1AVbhAtuHZflgEAAAB2eyJvcmlnaW4iOiJodHRwczovL2dvb2dsZS5jb206NDQzIiwiZmVhdHVyZSI6IlRydXN0VG9rZW5zIiwiZXhwaXJ5IjoxNjUyNzc0NDAwLCJpc1N1YmRvbWFpbiI6dHJ1ZSwiaXNUaGlyZFBhcnR5Ijp0cnVlfQ=="])
      , jd = new Wc(1935);
    var ld = function(a) {
        I.call(this, a, -1, kd)
    };
    v(ld, I);
    var md = function(a) {
        I.call(this, a)
    };
    v(md, I);
    var nd = function(a) {
        I.call(this, a)
    };
    v(nd, I);
    var kd = [7];
    var od = function(a) {
        this.g = a || {
            cookie: ""
        }
    };
    od.prototype.set = function(a, b, c) {
        var d = !1;
        if ("object" === typeof c) {
            var e = c.Ca;
            d = c.Da || !1;
            var f = c.domain || void 0;
            var h = c.path || void 0;
            var g = c.ga
        }
        if (/[;=\s]/.test(a))
            throw Error('Invalid cookie name "' + a + '"');
        if (/[;\r\n]/.test(b))
            throw Error('Invalid cookie value "' + b + '"');
        void 0 === g && (g = -1);
        this.g.cookie = a + "=" + b + (f ? ";domain=" + f : "") + (h ? ";path=" + h : "") + (0 > g ? "" : 0 == g ? ";expires=" + (new Date(1970,1,1)).toUTCString() : ";expires=" + (new Date(Date.now() + 1E3 * g)).toUTCString()) + (d ? ";secure" : "") + (null != e ? ";samesite=" + e : "")
    }
    ;
    od.prototype.get = function(a, b) {
        for (var c = a + "=", d = (this.g.cookie || "").split(";"), e = 0, f; e < d.length; e++) {
            f = Aa(d[e]);
            if (0 == f.lastIndexOf(c, 0))
                return f.substr(c.length);
            if (f == a)
                return ""
        }
        return b
    }
    ;
    od.prototype.isEmpty = function() {
        return !this.g.cookie
    }
    ;
    od.prototype.clear = function() {
        for (var a = (this.g.cookie || "").split(";"), b = [], c = [], d, e, f = 0; f < a.length; f++)
            e = Aa(a[f]),
            d = e.indexOf("="),
            -1 == d ? (b.push(""),
            c.push(e)) : (b.push(e.substring(0, d)),
            c.push(e.substring(d + 1)));
        for (a = b.length - 1; 0 <= a; a--)
            c = b[a],
            this.get(c),
            this.set(c, "", {
                ga: 0,
                path: void 0,
                domain: void 0
            })
    }
    ;
    function pd(a) {
        return (a = qd(a)) ? G(a, md, 4) : null
    }
    function qd(a) {
        a = (a = (new od(a)).get("FCCDCF", "")) ? a : null;
        try {
            if (a) {
                var b = a ? JSON.parse(a) : null;
                vb = b;
                var c = new ld(b);
                vb = null;
                var d = c
            } else
                d = null;
            return d
        } catch (e) {
            return null
        }
    }
    ;var rd = function(a) {
        this.g = a;
        this.h = null
    }
      , td = function(a) {
        a.__tcfapiPostMessageReady || sd(new rd(a))
    }
      , sd = function(a) {
        a.h = function(b) {
            var c = "string" == typeof b.data;
            try {
                var d = c ? JSON.parse(b.data) : b.data
            } catch (f) {
                return
            }
            var e = d.__tcfapiCall;
            !e || "ping" !== e.command && "getTCData" !== e.command && "addEventListener" !== e.command && "removeEventListener" !== e.command || a.g.__tcfapi(e.command, e.version, function(f, h) {
                var g = {};
                g.__tcfapiReturn = "removeEventListener" === e.command ? {
                    success: f,
                    callId: e.callId
                } : {
                    returnValue: f,
                    success: h,
                    callId: e.callId
                };
                f = c ? JSON.stringify(g) : g;
                b.source && "function" === typeof b.source.postMessage && b.source.postMessage(f, b.origin);
                return f
            }, e.parameter)
        }
        ;
        a.g.addEventListener("message", a.h);
        a.g.__tcfapiPostMessageReady = !0
    };
    var vd = function(a, b) {
        var c = a.document
          , d = function() {
            if (!a.frames[b])
                if (c.body) {
                    var e = Dc("IFRAME", c);
                    e.style.display = "none";
                    e.style.width = "0px";
                    e.style.height = "0px";
                    e.style.border = "none";
                    e.style.zIndex = "-1000";
                    e.style.left = "-1000px";
                    e.style.top = "-1000px";
                    e.name = b;
                    c.body.appendChild(e)
                } else
                    a.setTimeout(d, 5)
        };
        d()
    };
    var wd = function(a) {
        this.g = a;
        this.h = a.document;
        this.l = (a = (a = qd(this.h)) ? G(a, nd, 5) || null : null) ? A(a, 2) : null;
        this.i = (a = pd(this.h)) && null != A(a, 1) ? A(a, 1) : null;
        this.j = (a = pd(this.h)) && null != A(a, 2) ? A(a, 2) : null
    }
      , zd = function(a) {
        a.__uspapi || a.frames.__uspapiLocator || (a = new wd(a),
        xd(a),
        yd(a))
    }
      , xd = function(a) {
        !a.l || a.g.__uspapi || a.g.frames.__uspapiLocator || (a.g.__uspapiManager = "fc",
        vd(a.g, "__uspapiLocator"),
        za("__uspapi", function() {
            return a.s.apply(a, u(w.apply(0, arguments)))
        }))
    };
    wd.prototype.s = function(a, b, c) {
        "function" === typeof c && "getUSPData" === a && c({
            version: 1,
            uspString: this.l
        }, !0)
    }
    ;
    var yd = function(a) {
        !a.i || a.g.__tcfapi || a.g.frames.__tcfapiLocator || (a.g.__tcfapiManager = "fc",
        vd(a.g, "__tcfapiLocator"),
        a.g.__tcfapiEventListeners = a.g.__tcfapiEventListeners || [],
        za("__tcfapi", function() {
            return a.o.apply(a, u(w.apply(0, arguments)))
        }),
        td(a.g))
    };
    wd.prototype.o = function(a, b, c, d) {
        d = void 0 === d ? null : d;
        if ("function" === typeof c)
            if (b && 2 !== b)
                c(null, !1);
            else
                switch (b = this.g.__tcfapiEventListeners,
                a) {
                case "getTCData":
                    !d || Array.isArray(d) && d.every(function(e) {
                        return "number" === typeof e
                    }) ? c(Ad(this, d, null), !0) : c(null, !1);
                    break;
                case "ping":
                    c({
                        gdprApplies: !0,
                        cmpLoaded: !0,
                        cmpStatus: "loaded",
                        displayStatus: "disabled",
                        apiVersion: "2.0",
                        cmpVersion: 1,
                        cmpId: 300
                    });
                    break;
                case "addEventListener":
                    a = b.push(c);
                    c(Ad(this, null, a - 1), !0);
                    break;
                case "removeEventListener":
                    b[d] ? (b[d] = null,
                    c(!0)) : c(!1);
                    break;
                case "getInAppTCData":
                case "getVendorList":
                    c(null, !1)
                }
    }
    ;
    var Ad = function(a, b, c) {
        if (!a.i)
            return null;
        b = Pc(a.i, b);
        b.addtlConsent = null != a.j ? a.j : void 0;
        b.cmpStatus = "loaded";
        b.eventStatus = "tcloaded";
        null != c && (b.listenerId = c);
        return b
    };
    var Cd = function(a) {
        I.call(this, a, -1, Bd)
    };
    v(Cd, I);
    var Dd = function(a, b) {
        return lb(a, 1, b)
    }
      , Ed = function(a, b) {
        return ob(a, 2, b)
    }
      , Fd = function(a, b) {
        return hb(a, 4, b)
    }
      , Gd = function(a, b) {
        return ob(a, 5, b)
    }
      , Hd = function(a, b) {
        return D(a, 6, b)
    }
      , Id = function(a) {
        I.call(this, a)
    };
    v(Id, I);
    Id.prototype.A = function() {
        return C(this, 1, 0)
    }
    ;
    var Jd = function(a, b) {
        return D(a, 1, b)
    }
      , Kd = function(a, b) {
        return D(a, 2, b)
    }
      , Ld = function(a) {
        I.call(this, a)
    };
    v(Ld, I);
    var Bd = [2, 4, 5]
      , Md = [1, 2];
    var Od = function(a) {
        I.call(this, a, -1, Nd)
    };
    v(Od, I);
    var Qd = function(a) {
        I.call(this, a, -1, Pd)
    };
    v(Qd, I);
    var Nd = [2, 3]
      , Pd = [5]
      , Rd = [1, 2, 3, 4];
    var Sd = function(a) {
        I.call(this, a)
    };
    v(Sd, I);
    Sd.prototype.getTagSessionCorrelator = function() {
        return C(this, 2, 0)
    }
    ;
    var Td = function(a) {
        var b = new Sd;
        return nb(b, 4, a)
    }
      , mb = [4, 5, 7];
    var Ud = function(a, b) {
        var c = void 0 === c ? {} : c;
        this.error = a;
        this.context = b.context;
        this.msg = b.message || "";
        this.id = b.id || "jserror";
        this.meta = c
    };
    var Vd = null
      , Wd = function() {
        if (null === Vd) {
            Vd = "";
            try {
                var a = "";
                try {
                    a = z.top.location.hash
                } catch (c) {
                    a = z.location.hash
                }
                if (a) {
                    var b = a.match(/\bdeid=([\d,]+)/);
                    Vd = b ? b[1] : ""
                }
            } catch (c) {}
        }
        return Vd
    };
    var Yd = function(a) {
        I.call(this, a, -1, Xd)
    };
    v(Yd, I);
    var Xd = [2, 8]
      , Zd = [3, 4, 5]
      , $d = [6, 7];
    var ae;
    ae = {
        za: 0,
        ba: 3,
        ca: 4,
        da: 5
    };
    var be = ae.ba
      , O = ae.ca
      , ce = ae.da
      , de = function(a) {
        return null != a ? !a : a
    }
      , ee = function(a, b) {
        for (var c = !1, d = 0; d < a.length; d++) {
            var e = a[d]();
            if (e === b)
                return e;
            null == e && (c = !0)
        }
        if (!c)
            return !b
    }
      , ge = function(a, b) {
        var c = H(a, Yd, 2);
        if (!c.length)
            return fe(a, b);
        a = C(a, 1, 0);
        if (1 === a)
            return de(ge(c[0], b));
        c = Qa(c, function(d) {
            return function() {
                return ge(d, b)
            }
        });
        switch (a) {
        case 2:
            return ee(c, !1);
        case 3:
            return ee(c, !0)
        }
    }
      , fe = function(a, b) {
        var c = F(a, Zd);
        a: {
            switch (c) {
            case be:
                var d = qb(a, 3, Zd);
                break a;
            case O:
                d = qb(a, 4, Zd);
                break a;
            case ce:
                d = qb(a, 5, Zd);
                break a
            }
            d = void 0
        }
        if (d && (b = (b = b[c]) && b[d])) {
            try {
                var e = b.apply(null, u(eb(a, 8)))
            } catch (f) {
                return
            }
            b = C(a, 1, 0);
            if (4 === b)
                return !!e;
            d = null != e;
            if (5 === b)
                return d;
            if (12 === b)
                a = pb(a, 7 === F(a, $d) ? 7 : -1, void 0);
            else
                a: {
                    switch (c) {
                    case O:
                        a = gb(a, 6 === F(a, $d) ? 6 : -1, void 0);
                        break a;
                    case ce:
                        a = pb(a, 7 === F(a, $d) ? 7 : -1, void 0);
                        break a
                    }
                    a = void 0
                }
            if (null != a) {
                if (6 === b)
                    return e === a;
                if (9 === b)
                    return null != e && 0 === La(String(e), a);
                if (d)
                    switch (b) {
                    case 7:
                        return e < a;
                    case 8:
                        return e > a;
                    case 12:
                        return "string" === typeof a && "string" === typeof e && (new RegExp(a)).test(e);
                    case 10:
                        return null != e && -1 === La(String(e), a);
                    case 11:
                        return null != e && 1 === La(String(e), a)
                    }
            }
        }
    }
      , he = function(a, b) {
        return !a || !(!b || !ge(a, b))
    };
    var je = function(a) {
        I.call(this, a, -1, ie)
    };
    v(je, I);
    var ie = [4];
    var ke = function(a) {
        I.call(this, a)
    };
    v(ke, I);
    var me = function(a) {
        I.call(this, a, -1, le)
    };
    v(me, I);
    var le = [5]
      , ne = [1, 2, 3, 6, 7];
    var oe = function(a, b, c) {
        var d = void 0 === d ? new Uc(b) : d;
        this.h = a;
        this.l = c;
        this.i = d;
        this.g = [];
        this.j = 0 < this.h && tc() < 1 / this.h
    }
      , qe = function(a, b, c, d, e, f) {
        var h = Kd(Jd(new Id, b), c);
        b = Hd(Ed(Dd(Gd(Fd(new Cd, d), e), h), a.g), f);
        b = Td(b);
        a.j && Tc(a.i, pe(a, b));
        if (1 === f || 3 === f || 4 === f && !a.g.some(function(g) {
            return g.A() === h.A() && C(g, 2, 0) === c
        }))
            a.g.push(h),
            100 < a.g.length && a.g.shift()
    }
      , re = function(a, b, c, d) {
        if (a.l) {
            var e = new Od;
            b = ob(e, 2, b);
            c = ob(b, 3, c);
            d && D(c, 1, d);
            d = new Sd;
            d = nb(d, 7, c);
            a.j && Tc(a.i, pe(a, d))
        }
    }
      , pe = function(a, b) {
        b = D(b, 1, Date.now());
        var c = Fc(window);
        b = D(b, 2, c);
        return D(b, 6, a.h)
    };
    var P = function(a) {
        var b = "K";
        if (a.K && a.hasOwnProperty(b))
            return a.K;
        b = new a;
        return a.K = b
    };
    var se = function() {
        var a = {};
        this.g = (a[be] = {},
        a[O] = {},
        a[ce] = {},
        a)
    };
    var te = Ac("false");
    var ue = te
      , ve = function(a, b) {
        switch (b) {
        case 1:
            return qb(a, 1, ne);
        case 2:
            return qb(a, 2, ne);
        case 3:
            return qb(a, 3, ne);
        case 6:
            return qb(a, 6, ne);
        default:
            return null
        }
    }
      , we = function(a, b) {
        if (!a)
            return null;
        switch (b) {
        case 1:
            return fb(a, 1);
        case 7:
            return pb(a, 3);
        case 2:
            return gb(a, 2);
        case 3:
            return pb(a, 3);
        case 6:
            return eb(a, 4);
        default:
            return null
        }
    }
      , xe = ic(function() {
        if (!ue)
            return {};
        try {
            var a = window.sessionStorage && window.sessionStorage.getItem("GGDFSSK");
            if (a)
                return JSON.parse(a)
        } catch (b) {}
        return {}
    })
      , Ae = function(a, b, c, d) {
        var e = d = void 0 === d ? 0 : d, f, h;
        P(Q).i[e] = null != (h = null == (f = P(Q).i[e]) ? void 0 : f.add(b)) ? h : (new m.Set).add(b);
        e = xe();
        if (null != e[b])
            return e[b];
        b = ye(d)[b];
        if (!b)
            return c;
        b = new me(b);
        b = ze(b);
        a = we(b, a);
        return null != a ? a : c
    }
      , ze = function(a) {
        var b = P(se).g;
        if (b) {
            var c = Sa(H(a, ke, 5), function(d) {
                return he(G(d, Yd, 1), b)
            });
            if (c)
                return G(c, je, 2)
        }
        return G(a, je, 4)
    }
      , Q = function() {
        this.h = {};
        this.j = [];
        this.i = {};
        this.g = new m.Map
    }
      , Be = function(a, b, c) {
        return !!Ae(1, a, void 0 === b ? !1 : b, c)
    }
      , Ce = function(a, b, c) {
        b = void 0 === b ? 0 : b;
        a = Number(Ae(2, a, b, c));
        return isNaN(a) ? b : a
    }
      , De = function(a, b, c) {
        return Ae(3, a, void 0 === b ? "" : b, c)
    }
      , Ee = function(a, b, c) {
        b = void 0 === b ? [] : b;
        return Ae(6, a, b, c)
    }
      , ye = function(a) {
        return P(Q).h[a] || (P(Q).h[a] = {})
    }
      , Fe = function(a, b) {
        var c = ye(b);
        vc(a, function(d, e) {
            return c[e] = d
        })
    }
      , Ge = function(a, b, c, d, e) {
        e = void 0 === e ? !1 : e;
        var f = []
          , h = [];
        Oa(b, function(g) {
            var k = ye(g);
            Oa(a, function(l) {
                var n = F(l, ne)
                  , r = ve(l, n);
                if (r) {
                    var y, ib, ud;
                    var jb = null != (ud = null == (y = P(Q).g.get(g)) ? void 0 : null == (ib = y.get(r)) ? void 0 : ib.slice(0)) ? ud : [];
                    a: {
                        y = new Qd;
                        switch (n) {
                        case 1:
                            kb(y, 1, Rd, r);
                            break;
                        case 2:
                            kb(y, 2, Rd, r);
                            break;
                        case 3:
                            kb(y, 3, Rd, r);
                            break;
                        case 6:
                            kb(y, 4, Rd, r);
                            break;
                        default:
                            n = void 0;
                            break a
                        }
                        hb(y, 5, jb);
                        n = y
                    }
                    if (jb = n) {
                        var Ka;
                        jb = !(null == (Ka = P(Q).i[g]) || !Ka.has(r))
                    }
                    jb && f.push(n);
                    if (Ka = n) {
                        var fa;
                        Ka = !(null == (fa = P(Q).g.get(g)) || !fa.has(r))
                    }
                    Ka && h.push(n);
                    e || (fa = P(Q),
                    fa.g.has(g) || fa.g.set(g, new m.Map),
                    fa.g.get(g).has(r) || fa.g.get(g).set(r, []),
                    d && fa.g.get(g).get(r).push(d));
                    k[r] = l.toJSON()
                }
            })
        });
        (f.length || h.length) && re(c, f, h, null != d ? d : void 0)
    }
      , He = function(a, b) {
        var c = ye(b);
        Oa(a, function(d) {
            var e = new me(d)
              , f = F(e, ne);
            (e = ve(e, f)) && (c[e] || (c[e] = d))
        })
    }
      , Ie = function() {
        return Qa(p(Object, "keys").call(Object, P(Q).h), function(a) {
            return Number(a)
        })
    }
      , Je = function(a) {
        Ta(P(Q).j, a) || Fe(ye(4), a)
    };
    var R = function(a) {
        this.methodName = a
    }
      , Ke = new R(1)
      , Le = new R(16)
      , Me = new R(15)
      , Ne = new R(2)
      , Oe = new R(3)
      , Pe = new R(4)
      , Qe = new R(5)
      , Re = new R(6)
      , Se = new R(7)
      , Te = new R(8)
      , Ue = new R(9)
      , Ve = new R(10)
      , We = new R(11)
      , Xe = new R(12)
      , Ye = new R(13)
      , Ze = new R(14)
      , S = function(a, b, c) {
        c.hasOwnProperty(a.methodName) || Object.defineProperty(c, String(a.methodName), {
            value: b
        })
    }
      , T = function(a, b, c) {
        return b[a.methodName] || c || function() {}
    }
      , $e = function(a) {
        S(Qe, Be, a);
        S(Re, Ce, a);
        S(Se, De, a);
        S(Te, Ee, a);
        S(Ye, He, a);
        S(Me, Je, a)
    }
      , af = function(a) {
        S(Pe, function(b) {
            P(se).g = b
        }, a);
        S(Ue, function(b, c) {
            var d = P(se);
            d.g[be][b] || (d.g[be][b] = c)
        }, a);
        S(Ve, function(b, c) {
            var d = P(se);
            d.g[O][b] || (d.g[O][b] = c)
        }, a);
        S(We, function(b, c) {
            var d = P(se);
            d.g[ce][b] || (d.g[ce][b] = c)
        }, a);
        S(Ze, function(b) {
            for (var c = P(se), d = t([be, O, ce]), e = d.next(); !e.done; e = d.next())
                e = e.value,
                p(Object, "assign").call(Object, c.g[e], b[e])
        }, a)
    }
      , bf = function(a) {
        a.hasOwnProperty("init-done") || Object.defineProperty(a, "init-done", {
            value: !0
        })
    };
    var cf = function() {
        this.g = function() {}
        ;
        this.h = function() {
            return []
        }
    }
      , df = function(a, b, c) {
        a.g = function(d) {
            T(Ne, b, function() {
                return []
            })(d, c)
        }
        ;
        a.h = function() {
            return T(Oe, b, function() {
                return []
            })(c)
        }
    };
    var ef = function(a, b) {
        try {
            var c = a.split(".");
            a = z;
            for (var d = 0, e; null != a && d < c.length; d++)
                e = a,
                a = a[c[d]],
                "function" === typeof a && (a = e[c[d]]());
            var f = a;
            if (typeof f === b)
                return f
        } catch (h) {}
    }
      , ff = function() {
        var a = {};
        this[be] = (a[8] = function(b) {
            try {
                return null != va(b)
            } catch (c) {}
        }
        ,
        a[9] = function(b) {
            try {
                var c = va(b)
            } catch (d) {
                return
            }
            if (b = "function" === typeof c)
                c = c && c.toString && c.toString(),
                b = "string" === typeof c && -1 != c.indexOf("[native code]");
            return b
        }
        ,
        a[10] = function() {
            return window == window.top
        }
        ,
        a[6] = function(b) {
            return Ta(P(cf).h(), parseInt(b, 10))
        }
        ,
        a[27] = function(b) {
            b = ef(b, "boolean");
            return void 0 !== b ? b : void 0
        }
        ,
        a[60] = function(b) {
            try {
                return !!z.document.querySelector(b)
            } catch (c) {}
        }
        ,
        a);
        a = {};
        this[O] = (a[3] = function() {
            return Bc()
        }
        ,
        a[6] = function(b) {
            b = ef(b, "number");
            return void 0 !== b ? b : void 0
        }
        ,
        a[11] = function(b) {
            b = Cc(void 0 === b ? "" : b, z);
            return null == b ? void 0 : b % 1E3
        }
        ,
        a);
        a = {};
        this[ce] = (a[2] = function() {
            return window.location.href
        }
        ,
        a[3] = function() {
            try {
                return window.top.location.hash
            } catch (b) {
                return ""
            }
        }
        ,
        a[4] = function(b) {
            b = ef(b, "string");
            return void 0 !== b ? b : void 0
        }
        ,
        a)
    };
    var gf = function() {
        var a = void 0 === a ? z : a;
        return a.ggeac || (a.ggeac = {})
    };
    var jf = function(a) {
        I.call(this, a, -1, hf)
    };
    v(jf, I);
    jf.prototype.getId = function() {
        return C(this, 1, 0)
    }
    ;
    jf.prototype.A = function() {
        return C(this, 7, 0)
    }
    ;
    var hf = [2];
    var lf = function(a) {
        I.call(this, a, -1, kf)
    };
    v(lf, I);
    lf.prototype.A = function() {
        return C(this, 5, 0)
    }
    ;
    var kf = [2];
    var nf = function(a) {
        I.call(this, a, -1, mf)
    };
    v(nf, I);
    var pf = function(a) {
        I.call(this, a, -1, of)
    };
    v(pf, I);
    pf.prototype.A = function() {
        return C(this, 1, 0)
    }
    ;
    var qf = function(a) {
        I.call(this, a)
    };
    v(qf, I);
    var mf = [1, 4, 2, 3]
      , of = [2];
    var rf = [12, 13, 20]
      , sf = function() {}
      , tf = function(a, b, c, d, e) {
        e = void 0 === e ? {} : e;
        var f = void 0 === e.$ ? !1 : e.$
          , h = void 0 === e.ha ? {} : e.ha;
        e = void 0 === e.aa ? [] : e.aa;
        a.j = b;
        a.o = {};
        a.s = f;
        a.l = h;
        b = {};
        a.h = (b[c] = [],
        b[4] = [],
        b);
        a.i = {};
        (c = Wd()) && Oa(c.split(",") || [], function(g) {
            (g = parseInt(g, 10)) && (a.i[g] = !0)
        });
        Oa(e, function(g) {
            a.i[g] = !0
        });
        a.g = d;
        return a
    }
      , xf = function(a, b, c) {
        var d = [], e = uf(a.j, b), f;
        if (f = 9 !== b)
            a.o[b] ? f = !0 : (a.o[b] = !0,
            f = !1);
        if (f) {
            var h;
            null == (h = a.g) || qe(h, b, c, d, [], 4);
            return d
        }
        if (!e.length) {
            var g;
            null == (g = a.g) || qe(g, b, c, d, [], 3);
            return d
        }
        var k = Ta(rf, b)
          , l = [];
        Oa(e, function(r) {
            var y = new Ld;
            if (r = vf(a, r, c, y))
                0 !== F(y, Md) && l.push(y),
                y = r.getId(),
                d.push(y),
                wf(a, y, k ? 4 : c),
                (r = H(r, me, 2)) && (k ? Ge(r, Ie(), a.g, y) : Ge(r, [c], a.g, y))
        });
        var n;
        null == (n = a.g) || qe(n, b, c, d, l, 1);
        return d
    }
      , wf = function(a, b, c) {
        a.h[c] || (a.h[c] = []);
        a = a.h[c];
        Ta(a, b) || a.push(b)
    }
      , yf = function(a, b) {
        a.j.push.apply(a.j, u(Pa(Qa(b, function(c) {
            return new pf(c)
        }), function(c) {
            return !Ta(rf, c.A())
        })))
    }
      , vf = function(a, b, c, d) {
        var e = P(se).g;
        if (!he(G(b, Yd, 3), e))
            return null;
        var f = H(b, jf, 2)
          , h = C(b, 6, 0);
        if (h) {
            kb(d, 1, Md, h);
            f = e[O];
            switch (c) {
            case 2:
                var g = f[8];
                break;
            case 1:
                g = f[7]
            }
            c = void 0;
            if (g)
                try {
                    c = g(h),
                    D(d, 3, c)
                } catch (k) {}
            return (b = zf(b, c)) ? Af(a, [b], 1) : null
        }
        if (h = C(b, 10, 0)) {
            kb(d, 2, Md, h);
            g = null;
            switch (c) {
            case 1:
                g = e[O][9];
                break;
            case 2:
                g = e[O][10];
                break;
            default:
                return null
            }
            c = g ? g(String(h)) : void 0;
            if (void 0 === c && 1 === C(b, 11, 0))
                return null;
            void 0 !== c && D(d, 3, c);
            return (b = zf(b, c)) ? Af(a, [b], 1) : null
        }
        d = e ? Pa(f, function(k) {
            return he(G(k, Yd, 3), e)
        }) : f;
        if (!d.length)
            return null;
        c = d.length * C(b, 1, 0);
        return (b = C(b, 4, 0)) ? Bf(a, b, c, d) : Af(a, d, c / 1E3)
    }
      , Bf = function(a, b, c, d) {
        var e = null != a.l[b] ? a.l[b] : 1E3;
        if (0 >= e)
            return null;
        d = Af(a, d, c / e);
        a.l[b] = d ? 0 : e - c;
        return d
    }
      , Af = function(a, b, c) {
        var d = a.i
          , e = Ra(b, function(f) {
            return !!d[f.getId()]
        });
        return e ? e : a.s ? null : uc(b, c)
    }
      , Cf = function(a, b) {
        S(Ke, function(c) {
            a.i[c] = !0
        }, b);
        S(Ne, function(c, d) {
            return xf(a, c, d)
        }, b);
        S(Oe, function(c) {
            return (a.h[c] || []).concat(a.h[4])
        }, b);
        S(Xe, function(c) {
            return yf(a, c)
        }, b);
        S(Le, function(c, d) {
            return wf(a, c, d)
        }, b)
    }
      , uf = function(a, b) {
        return (a = Ra(a, function(c) {
            return c.A() == b
        })) && H(a, lf, 2) || []
    }
      , zf = function(a, b) {
        var c = H(a, jf, 2)
          , d = c.length
          , e = C(a, 8, 0);
        a = d * C(a, 1, 0) - 1;
        b = void 0 !== b ? b : Math.floor(1E3 * tc());
        d = (b - e) % d;
        if (b < e || b - e - d >= a)
            return null;
        c = c[d];
        e = P(se).g;
        return !c || e && !he(G(c, Yd, 3), e) ? null : c
    };
    var Df = function() {
        var a = {};
        this.i = function(b, c) {
            return null != a[b] ? a[b] : c
        }
        ;
        this.g = function(b, c) {
            return null != a[b] ? a[b] : c
        }
        ;
        this.l = function(b, c) {
            return null != a[b] ? a[b] : c
        }
        ;
        this.h = function(b, c) {
            return null != a[b] ? a[b] : c
        }
        ;
        this.j = function() {}
    }
      , Ef = function(a) {
        return P(Df).i(a.g, a.defaultValue)
    };
    var Ff = function() {
        this.g = function() {}
    }
      , Gf = function(a) {
        P(Ff).g(a)
    };
    var Hf, If, Jf, Kf, Lf, Mf, Pf = function(a) {
        var b = P(Nf).g
          , c = {
            $: U[211],
            aa: U[226]
        }
          , d = void 0
          , e = 2;
        d = void 0 === d ? gf() : d;
        e = void 0 === e ? 0 : e;
        var f = void 0 === f ? new oe(null != (Kf = null == (Hf = G(a, qf, 5)) ? void 0 : C(Hf, 2, 0)) ? Kf : 0,null != (Lf = null == (If = G(a, qf, 5)) ? void 0 : C(If, 4, 0)) ? Lf : 0,null != (Mf = null == (Jf = G(a, qf, 5)) ? void 0 : fb(Jf, 3)) ? Mf : !1) : f;
        d.hasOwnProperty("init-done") ? (T(Xe, d)(Qa(H(a, pf, 2), function(h) {
            return h.toJSON()
        })),
        T(Ye, d)(Qa(H(a, me, 1), function(h) {
            return h.toJSON()
        }), e),
        b && T(Ze, d)(b),
        Of(d, e)) : (Cf(tf(P(sf), H(a, pf, 2), e, f, c), d),
        $e(d),
        af(d),
        bf(d),
        Of(d, e),
        Ge(H(a, me, 1), [e], f, void 0, !0),
        ue = ue || !(!c || !c.Ba),
        Gf(P(ff)),
        b && Gf(b))
    }, Of = function(a, b) {
        a = void 0 === a ? gf() : a;
        b = void 0 === b ? 0 : b;
        var c = a
          , d = b;
        d = void 0 === d ? 0 : d;
        df(P(cf), c, d);
        Qf(a, b);
        P(Ff).g = T(Ze, a);
        P(Df).j()
    }, Qf = function(a, b) {
        var c = P(Df);
        c.i = function(d, e) {
            return T(Qe, a, function() {
                return !1
            })(d, e, b)
        }
        ;
        c.g = function(d, e) {
            return T(Re, a, function() {
                return 0
            })(d, e, b)
        }
        ;
        c.l = function(d, e) {
            return T(Se, a, function() {
                return ""
            })(d, e, b)
        }
        ;
        c.h = function(d, e) {
            return T(Te, a, function() {
                return []
            })(d, e, b)
        }
        ;
        c.j = function() {
            T(Me, a)(b)
        }
    };
    var Rf = P(Df).h($c.g, $c.defaultValue);
    function Sf(a) {
        a = void 0 === a ? window.document : a;
        Ec(Rf, a)
    }
    ;var Uf = function(a, b) {
        var c = "https://pagead2.googlesyndication.com/pagead/gen_204?id=" + b;
        vc(a, function(d, e) {
            d && (c += "&" + e + "=" + encodeURIComponent(d))
        });
        Tf(c)
    }
      , Tf = function(a) {
        var b = window;
        if (b.fetch)
            b.fetch(a, {
                keepalive: !0,
                credentials: "include",
                redirect: "follow",
                method: "get",
                mode: "no-cors"
            });
        else {
            b.google_image_requests || (b.google_image_requests = []);
            var c = Dc("IMG", b.document);
            c.src = a;
            b.google_image_requests.push(c)
        }
    };
    var Vf = function(a) {
        a = void 0 === a ? z : a;
        return (a = a.performance) && a.now ? a.now() : null
    };
    var Wf = z.performance
      , Xf = !!(Wf && Wf.mark && Wf.measure && Wf.clearMarks)
      , Yf = ic(function() {
        var a;
        if (a = Xf)
            a = Wd(),
            a = !!a.indexOf && 0 <= a.indexOf("1337");
        return a
    });
    var Zf = ka(["https://pagead2.googlesyndication.com/pagead/js/err_rep.js"])
      , $f = function(a, b, c) {
        this.g = void 0 === a ? null : a;
        this.j = void 0 === b ? "jserror" : b;
        this.h = null;
        this.i = void 0 === c ? .01 : c;
        this.o = this.l;
        this.s = null
    }
      , ag = function(a, b) {
        a.h = b
    };
    $f.prototype.l = function(a, b, c, d, e) {
        c = void 0 === c ? this.i : c;
        e = void 0 === e ? this.j : e;
        if (Math.random() > c)
            return !1;
        b.error && b.meta && b.id || (b = new Ud(b,{
            context: a,
            id: e
        }));
        if (d || this.h)
            b.meta = {},
            this.h && this.h(b.meta),
            d && d(b.meta);
        z.google_js_errors = z.google_js_errors || [];
        z.google_js_errors.push(b);
        if (!z.error_rep_loaded) {
            c = Gc(Zf);
            var f;
            a = z.document;
            b = null != (f = this.s) ? f : new K(fc(c).toString(),Fb);
            f = Dc("SCRIPT", a);
            f.src = fc(b);
            gc(f);
            (a = a.getElementsByTagName("script")[0]) && a.parentNode && a.parentNode.insertBefore(f, a);
            z.error_rep_loaded = !0
        }
        return !1
    }
    ;
    var bg = function(a, b) {
        try {
            var c = a.g && a.g.start("420", 3);
            b();
            a.g && c && a.g.end(c)
        } catch (d) {
            if (a.g && c && (b = c) && Wf && Yf() && (Wf.clearMarks("goog_" + b.label + "_" + b.uniqueId + "_start"),
            Wf.clearMarks("goog_" + b.label + "_" + b.uniqueId + "_end")),
            !a.o(420, d, a.i, void 0, a.j))
                throw d;
        }
    };
    var cg = P(Df).h(ad.g, ad.defaultValue);
    function dg(a) {
        a = void 0 === a ? window.document : a;
        Ec(cg, a)
    }
    ;var eg = J("gpt/pubads_impl_")
      , fg = J("pagead/managed/js/gpt/");
    var gg = function(a, b) {
        var c = Vf(b);
        c && (a = {
            label: a,
            type: 9,
            value: c
        },
        b = b.google_js_reporting_queue = b.google_js_reporting_queue || [],
        2048 > b.length && b.push(a))
    }
      , hg = function(a, b, c) {
        var d = window;
        return function() {
            var e = Vf()
              , f = 3;
            try {
                var h = b.apply(this, arguments)
            } catch (g) {
                f = 13;
                if (c)
                    return c(a, g),
                    h;
                throw g;
            } finally {
                d.google_measure_js_timing && e && (e = {
                    label: a.toString(),
                    value: e,
                    duration: (Vf() || 0) - e,
                    type: f
                },
                f = d.google_js_reporting_queue = d.google_js_reporting_queue || [],
                2048 > f.length && f.push(e))
            }
            return h
        }
    }
      , ig = function(a, b) {
        return hg(a, b, function(c, d) {
            (new $f).l(c, d)
        })
    };
    var jg = function() {
        this.i = this.i;
        this.j = this.j
    };
    jg.prototype.i = !1;
    jg.prototype.M = function() {
        if (this.j)
            for (; this.j.length; )
                this.j.shift()()
    }
    ;
    function V(a, b) {
        return null == b ? "&" + a + "=null" : "&" + a + "=" + Math.floor(b)
    }
    function kg(a, b) {
        return "&" + a + "=" + b.toFixed(3)
    }
    function lg() {
        var a = new m.Set;
        var b = void 0 === b ? window : b;
        b = b.googletag;
        b = (null === b || void 0 === b ? 0 : b.apiReady) ? b : void 0;
        try {
            if (!b)
                return a;
            for (var c = b.pubads(), d = t(c.getSlots()), e = d.next(); !e.done; e = d.next())
                a.add(e.value.getSlotId().getDomId())
        } catch (f) {}
        return a
    }
    function mg(a) {
        a = a.id;
        return null != a && (lg().has(a) || p(a, "startsWith").call(a, "google_ads_iframe_") || p(a, "startsWith").call(a, "aswift"))
    }
    function ng(a, b, c) {
        if (!a.sources)
            return !1;
        switch (og(a)) {
        case 2:
            var d = pg(a);
            if (d)
                return c.some(function(f) {
                    return qg(d, f)
                });
        case 1:
            var e = rg(a);
            if (e)
                return b.some(function(f) {
                    return qg(e, f)
                })
        }
        return !1
    }
    function og(a) {
        if (!a.sources)
            return 0;
        a = a.sources.filter(function(b) {
            return b.previousRect && b.currentRect
        });
        if (1 <= a.length) {
            a = a[0];
            if (a.previousRect.top < a.currentRect.top)
                return 2;
            if (a.previousRect.top > a.currentRect.top)
                return 1
        }
        return 0
    }
    function rg(a) {
        return sg(a, function(b) {
            return b.currentRect
        })
    }
    function pg(a) {
        return sg(a, function(b) {
            return b.previousRect
        })
    }
    function sg(a, b) {
        return a.sources.reduce(function(c, d) {
            d = b(d);
            return c ? d && 0 !== d.width * d.height ? d.top < c.top ? d : c : c : d
        }, null)
    }
    var tg = function() {
        jg.call(this);
        this.h = this.g = this.G = this.F = this.L = 0;
        this.W = this.T = Number.NEGATIVE_INFINITY;
        this.O = this.R = this.S = this.U = this.Z = this.o = this.Y = this.I = 0;
        this.P = !1;
        this.H = this.D = this.s = 0;
        var a = document.querySelector("[data-google-query-id]");
        this.X = a ? a.getAttribute("data-google-query-id") : null;
        this.l = null;
        this.V = !1;
        this.N = function() {}
    };
    v(tg, jg);
    var wg = function() {
        var a = new tg;
        if (Ef(cd)) {
            var b = window;
            if (!b.google_plmetrics && window.PerformanceObserver) {
                b.google_plmetrics = !0;
                b = t(["layout-shift", "largest-contentful-paint", "first-input", "longtask"]);
                for (var c = b.next(); !c.done; c = b.next())
                    c = c.value,
                    ug(a).observe({
                        type: c,
                        buffered: !0
                    });
                vg(a)
            }
        }
    }
      , ug = function(a) {
        a.l || (a.l = new PerformanceObserver(ig(640, function(b) {
            var c = xg !== window.scrollX || yg !== window.scrollY ? [] : zg
              , d = Ag();
            b = t(b.getEntries());
            for (var e = b.next(); !e.done; e = b.next())
                switch (e = e.value,
                e.entryType) {
                case "layout-shift":
                    var f = a;
                    if (!e.hadRecentInput) {
                        f.L += Number(e.value);
                        Number(e.value) > f.F && (f.F = Number(e.value));
                        f.G += 1;
                        var h = ng(e, c, d);
                        h && (f.o += e.value,
                        f.U++);
                        if (5E3 < e.startTime - f.T || 1E3 < e.startTime - f.W)
                            f.T = e.startTime,
                            f.g = 0,
                            f.h = 0;
                        f.W = e.startTime;
                        f.g += e.value;
                        h && (f.h += e.value);
                        f.g > f.I && (f.I = f.g,
                        f.Z = f.h,
                        f.Y = e.startTime + e.duration)
                    }
                    break;
                case "largest-contentful-paint":
                    a.S = Math.floor(e.renderTime || e.loadTime);
                    a.R = e.size;
                    break;
                case "first-input":
                    a.O = Number((e.processingStart - e.startTime).toFixed(3));
                    a.P = !0;
                    break;
                case "longtask":
                    e = Math.max(0, e.duration - 50),
                    a.s += e,
                    a.D = Math.max(a.D, e),
                    a.H += 1
                }
        })));
        return a.l
    }
      , vg = function(a) {
        var b = ig(641, function() {
            var d = document;
            2 == (Ef(bd) && d.prerendering ? 3 : {
                visible: 1,
                hidden: 2,
                prerender: 3,
                preview: 4,
                unloaded: 5
            }[d.visibilityState || d.webkitVisibilityState || d.mozVisibilityState || ""] || 0) && Bg(a)
        })
          , c = ig(641, function() {
            return void Bg(a)
        });
        document.addEventListener("visibilitychange", b);
        document.addEventListener("unload", c);
        a.N = function() {
            document.removeEventListener("visibilitychange", b);
            document.removeEventListener("unload", c);
            ug(a).disconnect()
        }
    };
    tg.prototype.M = function() {
        jg.prototype.M.call(this);
        this.N()
    }
    ;
    var Bg = function(a) {
        if (!a.V) {
            a.V = !0;
            ug(a).takeRecords();
            var b = "https://pagead2.googlesyndication.com/pagead/gen_204?id=plmetrics";
            window.LayoutShift && (b += kg("cls", a.L),
            b += kg("mls", a.F),
            b += V("nls", a.G),
            window.LayoutShiftAttribution && (b += kg("cas", a.o),
            b += V("nas", a.U)),
            b += kg("wls", a.I),
            b += kg("tls", a.Y),
            window.LayoutShiftAttribution && (b += kg("was", a.Z)));
            window.LargestContentfulPaint && (b += V("lcp", a.S),
            b += V("lcps", a.R));
            window.PerformanceEventTiming && a.P && (b += V("fid", a.O));
            window.PerformanceLongTaskTiming && (b += V("cbt", a.s),
            b += V("mbt", a.D),
            b += V("nlt", a.H));
            for (var c = 0, d = t(document.getElementsByTagName("iframe")), e = d.next(); !e.done; e = d.next())
                mg(e.value) && c++;
            b += V("nif", c);
            c = window.google_unique_id;
            b += V("ifi", "number" === typeof c ? c : 0);
            c = P(cf).h();
            b += "&eid=" + encodeURIComponent(c.join());
            b += "&top=" + (z === z.top ? 1 : 0);
            b += a.X ? "&qqid=" + encodeURIComponent(a.X) : V("pvsid", Fc(z));
            window.googletag && (b += "&gpt=1");
            window.fetch(b, {
                keepalive: !0,
                credentials: "include",
                redirect: "follow",
                method: "get",
                mode: "no-cors"
            });
            a.i || (a.i = !0,
            a.M())
        }
    }
      , qg = function(a, b) {
        var c = Math.min(a.right, b.right) - Math.max(a.left, b.left);
        a = Math.min(a.bottom, b.bottom) - Math.max(a.top, b.top);
        return 0 >= c || 0 >= a ? !1 : 50 <= 100 * c * a / ((b.right - b.left) * (b.bottom - b.top))
    }
      , Ag = function() {
        var a = [].concat(u(document.getElementsByTagName("iframe"))).filter(mg)
          , b = [].concat(u(lg())).map(function(c) {
            return document.getElementById(c)
        }).filter(function(c) {
            return null !== c
        });
        xg = window.scrollX;
        yg = window.scrollY;
        return zg = [].concat(u(a), u(b)).map(function(c) {
            return c.getBoundingClientRect()
        })
    }
      , xg = void 0
      , yg = void 0
      , zg = [];
    var W = {
        issuerOrigin: "https://attestation.android.com",
        issuancePath: "/att/i",
        redemptionPath: "/att/r"
    }
      , X = {
        issuerOrigin: "https://pagead2.googlesyndication.com",
        issuancePath: "/dtt/i",
        redemptionPath: "/dtt/r",
        getStatePath: "/dtt/s"
    };
    var Cg = P(Df).h(id.g, id.defaultValue)
      , Eg = function(a, b, c) {
        jg.call(this);
        var d = this;
        this.h = a;
        this.g = [];
        b && Dg() && this.g.push(W);
        c && this.g.push(X);
        if (document.hasTrustToken && !Ef(fd)) {
            var e = new m.Map;
            this.g.forEach(function(f) {
                e.set(f.issuerOrigin, {
                    issuerOrigin: f.issuerOrigin,
                    state: d.h ? 1 : 12,
                    hasRedemptionRecord: !1
                })
            });
            window.goog_tt_state_map = window.goog_tt_state_map && window.goog_tt_state_map instanceof m.Map ? new m.Map([].concat(u(e), u(window.goog_tt_state_map))) : e;
            window.goog_tt_promise_map && window.goog_tt_promise_map instanceof m.Map || (window.goog_tt_promise_map = new m.Map)
        }
    };
    v(Eg, jg);
    var Dg = function() {
        var a = void 0 === a ? window : a;
        a = a.navigator.userAgent;
        var b = /Chrome/.test(a);
        return /Android/.test(a) && b
    }
      , Fg = function() {
        var a = window;
        a = void 0 === a ? window : a;
        return !a.PeriodicSyncManager
    }
      , Gg = function() {
        var a = void 0 === a ? window.document : a;
        Ec(Cg, a)
    }
      , Hg = function(a) {
        var b = U[150];
        return U[221] || ".google.ch" === b || "function" === typeof a.__tcfapi
    }
      , Y = function(a, b, c) {
        var d, e = null == (d = window.goog_tt_state_map) ? void 0 : d.get(a);
        e && (e.state = b,
        void 0 != c && (e.hasRedemptionRecord = c))
    }
      , Ig = function() {
        var a = W.issuerOrigin + W.redemptionPath
          , b = {
            keepalive: !0,
            trustToken: {
                type: "token-redemption",
                issuer: W.issuerOrigin,
                refreshPolicy: "none"
            }
        };
        Y(W.issuerOrigin, 2);
        return window.fetch(a, b).then(function(c) {
            if (!c.ok)
                throw Error(c.status + ": Network response was not ok!");
            Y(W.issuerOrigin, 6, !0)
        }).catch(function(c) {
            c && "NoModificationAllowedError" === c.name ? Y(W.issuerOrigin, 6, !0) : Y(W.issuerOrigin, 5)
        })
    }
      , Jg = function() {
        var a = W.issuerOrigin + W.issuancePath;
        Y(W.issuerOrigin, 8);
        return window.fetch(a, {
            keepalive: !0,
            trustToken: {
                type: "token-request"
            }
        }).then(function(b) {
            if (!b.ok)
                throw Error(b.status + ": Network response was not ok!");
            Y(W.issuerOrigin, 10);
            return Ig()
        }).catch(function(b) {
            if (b && "NoModificationAllowedError" === b.name)
                return Y(W.issuerOrigin, 10),
                Ig();
            Y(W.issuerOrigin, 9)
        })
    }
      , Kg = function() {
        Y(W.issuerOrigin, 13);
        return document.hasTrustToken(W.issuerOrigin).then(function(a) {
            return a ? Ig() : Jg()
        })
    }
      , Lg = function() {
        Y(X.issuerOrigin, 13);
        if (window.Promise) {
            var a = document.hasTrustToken(X.issuerOrigin).then(function(e) {
                return e
            }).catch(function(e) {
                return window.Promise.reject({
                    state: 19,
                    error: e
                })
            })
              , b = X.issuerOrigin + X.redemptionPath
              , c = {
                keepalive: !0,
                trustToken: {
                    type: "token-redemption",
                    refreshPolicy: "none"
                }
            };
            Y(X.issuerOrigin, 16);
            a = a.then(function(e) {
                return window.fetch(b, c).then(function(f) {
                    if (!f.ok)
                        throw Error(f.status + ": Network response was not ok!");
                    Y(X.issuerOrigin, 18, !0)
                }).catch(function(f) {
                    if (f && "NoModificationAllowedError" === f.name)
                        Y(X.issuerOrigin, 18, !0);
                    else {
                        if (e)
                            return window.Promise.reject({
                                state: 17,
                                error: f
                            });
                        Y(X.issuerOrigin, 17)
                    }
                })
            }).then(function() {
                return document.hasTrustToken(X.issuerOrigin).then(function(e) {
                    return e
                }).catch(function(e) {
                    return window.Promise.reject({
                        state: 19,
                        error: e
                    })
                })
            }).then(function(e) {
                var f = X.issuerOrigin + X.getStatePath;
                Y(X.issuerOrigin, 20);
                return window.fetch(f + "?ht=" + e, {
                    trustToken: {
                        type: "send-redemption-record",
                        issuers: [X.issuerOrigin]
                    }
                }).then(function(h) {
                    if (!h.ok)
                        throw Error(h.status + ": Network response was not ok!");
                    Y(X.issuerOrigin, 22);
                    return h.text().then(function(g) {
                        return JSON.parse(g)
                    })
                }).catch(function(h) {
                    return window.Promise.reject({
                        state: 21,
                        error: h
                    })
                })
            });
            var d = Fc(window);
            return a.then(function(e) {
                var f = X.issuerOrigin + X.issuancePath;
                return e && e.srqt && e.cs ? (Y(X.issuerOrigin, 23),
                window.fetch(f + "?cs=" + e.cs + "&correlator=" + d, {
                    keepalive: !0,
                    trustToken: {
                        type: "token-request"
                    }
                }).then(function(h) {
                    if (!h.ok)
                        throw Error(h.status + ": Network response was not ok!");
                    Y(X.issuerOrigin, 25);
                    return e
                }).catch(function(h) {
                    return window.Promise.reject({
                        state: 24,
                        error: h
                    })
                })) : e
            }).then(function(e) {
                if (e && e.srdt && e.cs)
                    return Y(X.issuerOrigin, 26),
                    window.fetch(b + "?cs=" + e.cs + "&correlator=" + d, {
                        keepalive: !0,
                        trustToken: {
                            type: "token-redemption",
                            refreshPolicy: "refresh"
                        }
                    }).then(function(f) {
                        if (!f.ok)
                            throw Error(f.status + ": Network response was not ok!");
                        Y(X.issuerOrigin, 28, !0)
                    }).catch(function(f) {
                        return window.Promise.reject({
                            state: 27,
                            error: f
                        })
                    })
            }).then(function() {
                Y(X.issuerOrigin, 29)
            }).catch(function(e) {
                if (e instanceof Object && e.hasOwnProperty("state") && e.hasOwnProperty("error"))
                    if ("number" === typeof e.state && e.error instanceof Error) {
                        Y(X.issuerOrigin, e.state);
                        var f = P(Df).g(hd.g, hd.defaultValue);
                        Math.random() <= f && Uf({
                            state: e.state,
                            err: e.error.toString()
                        }, "dtt_err")
                    } else
                        throw Error(e);
                else
                    throw e;
            })
        }
    }
      , Mg = function(a) {
        if (document.hasTrustToken && !Ef(fd) && a.h) {
            var b = window.goog_tt_promise_map;
            if (b && b instanceof m.Map) {
                var c = [];
                if (a.g.some(function(e) {
                    return e.issuerOrigin === W.issuerOrigin
                })) {
                    var d = b.get(W.issuerOrigin);
                    d || (d = Kg(),
                    b.set(W.issuerOrigin, d));
                    c.push(d)
                }
                a.g.some(function(e) {
                    return e.issuerOrigin === X.issuerOrigin
                }) && (a = b.get(X.issuerOrigin),
                a || (a = Lg(),
                b.set(X.issuerOrigin, a)),
                c.push(a));
                if (0 < c.length && window.Promise && window.Promise.all)
                    return window.Promise.all(c)
            }
        }
    };
    var Og = function(a) {
        I.call(this, a, -1, Ng)
    };
    v(Og, I);
    var Pg = function(a, b) {
        return B(a, 2, b)
    }
      , Qg = function(a, b) {
        return B(a, 3, b)
    }
      , Rg = function(a, b) {
        return B(a, 4, b)
    }
      , Sg = function(a, b) {
        return B(a, 5, b)
    }
      , Tg = function(a, b) {
        return B(a, 9, b)
    }
      , Ug = function(a, b) {
        return ob(a, 10, b)
    }
      , Vg = function(a, b) {
        return B(a, 1, b)
    }
      , Wg = function(a) {
        I.call(this, a)
    };
    v(Wg, I);
    Wg.prototype.getVersion = function() {
        return pb(this, 2)
    }
    ;
    var Ng = [10, 6];
    var Xg = "platform platformVersion architecture model uaFullVersion bitness fullVersionList".split(" ");
    function Yg(a) {
        var b, c;
        return "function" !== typeof (null === (c = null === (b = null === a || void 0 === a ? void 0 : a.navigator) || void 0 === b ? void 0 : b.userAgentData) || void 0 === c ? void 0 : c.getHighEntropyValues) ? null : a.navigator.userAgentData.getHighEntropyValues(Xg).then(function(d) {
            var e;
            return Ug(Tg(Sg(Rg(Qg(Pg(Vg(new Og, d.platform), d.platformVersion), d.architecture), d.model), d.uaFullVersion), d.bitness), null === (e = d.fullVersionList) || void 0 === e ? void 0 : e.map(function(f) {
                var h = new Wg;
                h = B(h, 1, f.brand);
                return B(h, 2, f.version)
            }))
        })
    }
    ;function Zg() {
        var a;
        return null !== (a = z.googletag) && void 0 !== a ? a : z.googletag = {}
    }
    function $g(a, b) {
        var c = Zg();
        c.hasOwnProperty(a) || (c[a] = b)
    }
    ;var Z = {}
      , U = (Z[23] = .001,
    Z[38] = .001,
    Z[150] = ".google.nl",
    Z[211] = !1,
    Z[253] = !1,
    Z[172] = null,
    Z[246] = [],
    Z[226] = [],
    Z[252] = null,
    Z[258] = null,
    Z[251] = null,
    Z[259] = null,
    Z[6] = function(a, b) {
        b = void 0 === b ? !0 : b;
        try {
            for (var c = null; c != a; c = a,
            a = a.parent)
                switch (a.location.protocol) {
                case "https:":
                    return !0;
                case "file:":
                    return b;
                case "http:":
                    return !1
                }
        } catch (d) {}
        return !0
    }(window),
    Z[36] = Ac("false"),
    Z[148] = te,
    Z[221] = Ac("true"),
    Z[257] = Ac("false"),
    Z[260] = void 0,
    Z[262] = Ac("false"),
    Z);
    function ah(a, b) {
        U[a] = b
    }
    var bh = Zg();
    p(Object, "assign").call(Object, U, bh._vars_);
    bh._vars_ = U;
    var ch = new m.WeakMap
      , dh = function(a, b) {
        a = [a];
        for (var c = b.length - 1; 0 <= c; --c)
            a.push(typeof b[c], b[c]);
        return a.join("\v")
    };
    var eh = function(a, b) {
        b = void 0 === b ? dh : b;
        var c = ya(a)
          , d = function(e) {
            e = t(e);
            e.next();
            e = la(e);
            return b(c, e)
        };
        return function() {
            var e = w.apply(0, arguments)
              , f = this || z
              , h = ch.get(f);
            h || (h = {},
            ch.set(f, h));
            f = h;
            h = [this].concat(u(e));
            e = d ? d(h) : h;
            if (Object.prototype.hasOwnProperty.call(f, e))
                f = f[e];
            else {
                var g = t(h);
                h = g.next().value;
                g = la(g);
                h = a.apply(h, g);
                f = f[e] = h
            }
            return f
        }
    }(function(a) {
        return (null === a || void 0 === a ? 0 : a.src) ? /^(?:https?:)?\/\/(?:www\.googletagservices\.com|securepubads\.g\.doubleclick\.net|pagead2\.googlesyndication\.com)\/tag\/js\/gpt(?:_[a-z]+)*\.js/.test(a.src) ? 0 : 1 : 2
    }, function(a, b) {
        var c;
        return a + "\v" + (null === (c = b[0]) || void 0 === c ? void 0 : c.src)
    });
    function fh() {
        return 0 === eh(U[172])
    }
    ;function gh() {
        return zc("1") || 0
    }
    function hh() {
        var a = ih;
        var b = Number(a);
        if (1 > b || Math.floor(b) !== b)
            Uf({
                v: a
            }, "gpt_inv_ver"),
            a = "1";
        return a
    }
    var ih = "2022012701";
    var Nf = function() {
        var a = {}
          , b = {}
          , c = {};
        this.g = (c[be] = (a[3] = fh,
        a[17] = function() {
            return p(w.apply(0, arguments), "includes").call(w.apply(0, arguments), String(Cc()))
        }
        ,
        a[59] = function() {
            var d = w.apply(0, arguments), e = p(d, "includes"), f = String, h;
            var g = void 0 === g ? window : g;
            var k;
            g = null != (k = null == (h = oc(g.location.href.match(nc)[3] || null)) ? void 0 : h.split(".")) ? k : [];
            h = 2 > g.length ? null : "uk" === g[g.length - 1] ? 3 > g.length ? null : wc(g.splice(g.length - 3).join(".")) : wc(g.splice(g.length - 2).join("."));
            return e.call(d, f(h))
        }
        ,
        a[21] = function() {
            return U[148]
        }
        ,
        a[61] = function() {
            return U[221]
        }
        ,
        a[63] = function() {
            return U[221] || ".google.ch" === U[150]
        }
        ,
        a[50] = function() {
            return 1 === Math.floor((new Date).getTime() / 24 / 60 / 60 / 1E3) % 2
        }
        ,
        a[54] = function() {
            return !!U[259]
        }
        ,
        a),
        c[O] = (b[1] = function() {
            var d;
            return null !== (d = zc("{{MOD}}")) && void 0 !== d ? d : -1
        }
        ,
        b[4] = gh,
        b),
        c)
    };
    function jh(a) {
        var b = new nf(U[246]);
        a = new nf(a);
        if (!H(b, me, 1).length && H(a, me, 1).length) {
            var c = H(a, me, 1);
            ob(b, 1, c)
        }
        !H(b, pf, 2).length && H(a, pf, 2).length && (c = H(a, pf, 2),
        ob(b, 2, c));
        null == A(b, 5) && null != A(a, 5) && (a = G(a, qf, 5),
        lb(b, 5, a));
        Pf(b)
    }
    ;function kh(a) {
        return (a = a.currentScript) ? a : null
    }
    function lh(a) {
        var b;
        a = t(null !== (b = a.scripts) && void 0 !== b ? b : []);
        for (var c = a.next(); !c.done; c = a.next())
            if (c = c.value,
            p(c.src, "includes").call(c.src, "/tag/js/gpt"))
                return c;
        return null
    }
    function mh(a) {
        return !(null === a || void 0 === a || !a.src) && "pagead2.googlesyndication.com" === oc(a.src.match(nc)[3] || null)
    }
    function nh(a) {
        var b = kh(a);
        return "complete" === a.readyState || "loaded" === a.readyState || !(null === b || void 0 === b || !b.async)
    }
    function oh(a) {
        var b = a.ja
          , c = a.fa;
        a = mh(a.ea) ? J("https://pagead2.googlesyndication.com/") : J("https://securepubads.g.doubleclick.net/");
        b = 0 === b ? Kb([a, eg, J("2022012701"), J(".js")]) : Kb([a, fg, c, J("/pubads_impl.js")]);
        return (c = P(Df).g(Zc.g, Zc.defaultValue)) ? Jb(b, String(c)) : b
    }
    var ph = function() {
        this.h = [];
        this.error = this.g = void 0
    }
      , qh = function(a, b, c) {
        a.g = b;
        a.error = c;
        for (var d = t(a.h), e = d.next(); !e.done; e = d.next())
            e = e.value,
            e(b, c);
        a.h.length = 0
    };
    function rh(a, b, c) {
        a = a.location.host;
        var d = b && qc(b.src, "domain")
          , e = b && qc(b.src, "network-code");
        if (!a && !d && !e)
            return qh(c, void 0, new m.globalThis.Error("no provided or inferred data")),
            null;
        b = mh(b) ? J("https://pagead2.googlesyndication.com") : J("https://securepubads.g.doubleclick.net");
        return Jb(Kb([b, J("/pagead/ppub_config")]), {
            ippd: a,
            pppd: d,
            pppnc: e
        })
    }
    function sh(a, b) {
        var c = new ph;
        ah(260, function(e) {
            void 0 !== c.g || c.error ? e(c.g, c.error) : c.h.push(e)
        });
        if (b = rh(a, b, c)) {
            var d = new m.globalThis.XMLHttpRequest;
            d.open("GET", b.toString(), !0);
            d.withCredentials = !1;
            d.onload = function() {
                300 > d.status ? (gg("13", a),
                qh(c, 204 === d.status ? "" : d.responseText)) : qh(c, void 0, new m.globalThis.Error("resp:" + d.status))
            }
            ;
            d.onerror = function() {
                return void qh(c, void 0, new m.globalThis.Error("s:" + d.status + " rs:" + d.readyState))
            }
            ;
            d.send()
        }
    }
    function th(a, b, c, d) {
        U[172] = d;
        U[259] = nh(a);
        jh(b);
        P(cf).g(12);
        P(cf).g(5);
        Gg();
        Hg(c) || (a = Ef(Fg() ? ed : dd),
        b = Ef(gd),
        a = new Eg(!0,a,b),
        0 < P(Df).g(jd.g, jd.defaultValue) ? ah(258, Mg(a)) : Mg(a));
        (a = Yg(c)) && a.then(function(e) {
            e = yb(e);
            U[251] = e
        });
        dg(c.document);
        Sf(c.document)
    }
    function uh(a, b) {
        var c, d, e, f, h, g = Zg(), k = null !== (c = null !== a && void 0 !== a ? a : g.fifWin) && void 0 !== c ? c : window;
        a = k.document;
        var l = g.fifWin ? window : k;
        $g("_loaded_", !0);
        $g("getVersion", hh);
        $g("cmd", []);
        var n = null !== (d = kh(a)) && void 0 !== d ? d : lh(a);
        th(a, b, k, n);
        try {
            wg()
        } catch (ib) {}
        gg("1", k);
        b = oh({
            ea: n,
            ja: 0,
            fa: J("")
        });
        if (!U[259]) {
            k = "gpt-impl-" + Math.random();
            try {
                hc(a, Wb(b, {
                    id: k,
                    nonce: lc()
                }))
            } catch (ib) {}
            a.getElementById(k) && (g._loadStarted_ = !0)
        }
        if (!g._loadStarted_) {
            k = g.fifWin ? l.document : a;
            var r = Dc("SCRIPT");
            r.src = fc(b);
            gc(r);
            r.async = !0;
            var y = null !== (f = null !== (e = k.head) && void 0 !== e ? e : k.body) && void 0 !== f ? f : k.documentElement;
            "complete" !== l.document.readyState && g.fifWin ? jc(l, function() {
                return void y.appendChild(r)
            }) : y.appendChild(r);
            g._loadStarted_ = !0
        }
        l === l.top && (Ef(Yc) || U[259] || !kh(a) && (null === (h = lh(a)) || void 0 === h ? 0 : h.async)) && (zd(l),
        sh(l, n))
    }
    ;var vh;
    a: {
        try {
            if (Array.isArray(E)) {
                vh = E;
                break a
            }
        } catch (a) {}
        vh = []
    }
    (function(a, b) {
        var c = new $f(null,"gpt_exception",.01);
        ag(c, function(d) {
            d.methodId = 420
        });
        bg(c, function() {
            return void uh(a, b)
        })
    }
    )(void 0, vh);
}
).call(this.googletag && googletag.fifWin ? googletag.fifWin.parent : this, [[[null, 7, null, [null, 0.1]], [410803690, null, null, [1]], [398776878, null, null, [1]], [411170147, null, null, [1]], [null, 408380992, null, [null, 0.01]], [400963805, null, null, [1]], [400992469, null, null, [1]], [400992468, null, null, [1]], [null, 397316938, null, [null, 1000]], [null, 385440135, null, [null, 1000]], [378290973, null, null, [1]], [null, 377289019, null, [null, 10000]], [null, 385610149, null, [null, 300]], [null, 529, null, [null, 20]], [null, 494, null, [null, 5000]], [411840949, null, null, [1]], [413477729, null, null, [1]], [413925305, null, null, [1]], [413667516, null, null, [1]], [20, null, null, null, [[[1, [[6, null, null, 3, null, 0]]], [1]]]], [null, 388529191, null, null, [[[4, null, 59, null, null, null, null, ["4276767238"]], [null, 86400]]]], [null, 492, null, [null, 0.01]], [402847016, null, null, [1]], [null, 389357230, null, [null, 1000]], [null, 398776877, null, [null, 60000]], [403426966, null, null, [1]], [null, 374201269, null, [null, 60000]], [null, 371364213, null, [null, 60000]], [null, 373440923, null, [null, 0.0001]], [null, 376149757, null, [null, 0.0025]], [null, 396668915, null, [null, 5]], [399982759, null, null, [1]], [null, 47, null, [null, 1]], [null, null, 2, [null, null, "1-0-38"]], [392065905, null, null, null, [[[3, [[4, null, 15, null, null, null, null, ["18190176,155953048"]], [4, null, 15, null, null, null, null, ["49944529"]], [4, null, 15, null, null, null, null, ["5441"]], [4, null, 15, null, null, null, null, ["6177"]], [4, null, 15, null, null, null, null, ["6782"]], [4, null, 15, null, null, null, null, ["6581"]]]], [1]]]], [null, 360245595, null, [null, 500]], [396442598, null, null, [1]], [null, 61, null, [null, 0.001]], [1936, null, null, [1]], [null, 1921, null, [null, 72]], [null, 1920, null, [null, 24]], [null, 1922, null, [null, 5]], [null, 1917, null, [null, 300]], [null, 1916, null, [null, 0.001]], [null, null, null, [null, null, null, ["A8FHS1NmdCwGqD9DwOicnHHY+y27kdWfxKa0YHSGDfv0CSpDKRHTQdQmZVPDUdaFWUsxdgVxlwAd6o+dhJykPA0AAACWeyJvcmlnaW4iOiJodHRwczovL2RvdWJsZWNsaWNrLm5ldDo0NDMiLCJmZWF0dXJlIjoiQ29udmVyc2lvbk1lYXN1cmVtZW50IiwiZXhwaXJ5IjoxNjQzMTU1MTk5LCJpc1N1YmRvbWFpbiI6dHJ1ZSwiaXNUaGlyZFBhcnR5Ijp0cnVlLCJ1c2FnZSI6InN1YnNldCJ9", "A8zdXi6dr1hwXEUjQrYiyYQGlU3557y5QWDnN0Lwgj9ePt66XMEvNkVWOEOWPd7TP9sBQ25X0Q15Lr1Nn4oGFQkAAACceyJvcmlnaW4iOiJodHRwczovL2dvb2dsZXN5bmRpY2F0aW9uLmNvbTo0NDMiLCJmZWF0dXJlIjoiQ29udmVyc2lvbk1lYXN1cmVtZW50IiwiZXhwaXJ5IjoxNjQzMTU1MTk5LCJpc1N1YmRvbWFpbiI6dHJ1ZSwiaXNUaGlyZFBhcnR5Ijp0cnVlLCJ1c2FnZSI6InN1YnNldCJ9", "A4/Htern2udN9w3yJK9QgWQxQFruxOXsXL7cW60DyCl0EZFGCSme/J33Q/WzF7bBkVvhEWDlcBiUyZaim5CpFQwAAACceyJvcmlnaW4iOiJodHRwczovL2dvb2dsZXRhZ3NlcnZpY2VzLmNvbTo0NDMiLCJmZWF0dXJlIjoiQ29udmVyc2lvbk1lYXN1cmVtZW50IiwiZXhwaXJ5IjoxNjQzMTU1MTk5LCJpc1N1YmRvbWFpbiI6dHJ1ZSwiaXNUaGlyZFBhcnR5Ijp0cnVlLCJ1c2FnZSI6InN1YnNldCJ9"]], null, 1934], [1959, null, null, [1]], [1903, null, null, [1]], [1953, null, null, [1]], [1938, null, null, [1]], [1948, null, null, [1]], [null, null, null, [null, null, null, ["AxujKG9INjsZ8/gUq8+dTruNvk7RjZQ1oFhhgQbcTJKDnZfbzSTE81wvC2Hzaf3TW4avA76LTZEMdiedF1vIbA4AAABueyJvcmlnaW4iOiJodHRwczovL2ltYXNkay5nb29nbGVhcGlzLmNvbTo0NDMiLCJmZWF0dXJlIjoiVHJ1c3RUb2tlbnMiLCJleHBpcnkiOjE2NTI3NzQ0MDAsImlzVGhpcmRQYXJ0eSI6dHJ1ZX0=", "Azuce85ORtSnWe1MZDTv68qpaW3iHyfL9YbLRy0cwcCZwVnePnOmkUJlG8HGikmOwhZU22dElCcfrfX2HhrBPAkAAAB7eyJvcmlnaW4iOiJodHRwczovL2RvdWJsZWNsaWNrLm5ldDo0NDMiLCJmZWF0dXJlIjoiVHJ1c3RUb2tlbnMiLCJleHBpcnkiOjE2NTI3NzQ0MDAsImlzU3ViZG9tYWluIjp0cnVlLCJpc1RoaXJkUGFydHkiOnRydWV9", "A16nvcdeoOAqrJcmjLRpl1I6f3McDD8EfofAYTt/P/H4/AWwB99nxiPp6kA0fXoiZav908Z8etuL16laFPUdfQsAAACBeyJvcmlnaW4iOiJodHRwczovL2dvb2dsZXRhZ3NlcnZpY2VzLmNvbTo0NDMiLCJmZWF0dXJlIjoiVHJ1c3RUb2tlbnMiLCJleHBpcnkiOjE2NTI3NzQ0MDAsImlzU3ViZG9tYWluIjp0cnVlLCJpc1RoaXJkUGFydHkiOnRydWV9", "AxBHdr0J44vFBQtZUqX9sjiqf5yWZ/OcHRcRMN3H9TH+t90V/j3ENW6C8+igBZFXMJ7G3Pr8Dd13632aLng42wgAAACBeyJvcmlnaW4iOiJodHRwczovL2dvb2dsZXN5bmRpY2F0aW9uLmNvbTo0NDMiLCJmZWF0dXJlIjoiVHJ1c3RUb2tlbnMiLCJleHBpcnkiOjE2NTI3NzQ0MDAsImlzU3ViZG9tYWluIjp0cnVlLCJpc1RoaXJkUGFydHkiOnRydWV9", "A88BWHFjcawUfKU3lIejLoryXoyjooBXLgWmGh+hNcqMK44cugvsI5YZbNarYvi3roc1fYbHA1AVbhAtuHZflgEAAAB2eyJvcmlnaW4iOiJodHRwczovL2dvb2dsZS5jb206NDQzIiwiZmVhdHVyZSI6IlRydXN0VG9rZW5zIiwiZXhwaXJ5IjoxNjUyNzc0NDAwLCJpc1N1YmRvbWFpbiI6dHJ1ZSwiaXNUaGlyZFBhcnR5Ijp0cnVlfQ=="]], null, 1932], [null, 397907552, null, [null, 500]]], [[20, [[50, [[31062930], [31062931, [[380025941, null, null, [1]]]]], null, null, null, null, null, 101, null, 102]]], [13, [[10, [[44756894], [44756895, [[1947, null, null, [1]]]]]], [10, [[44756896], [44756897]]], [10, [[44756431], [44756432, [[1960, null, null, [1]]]]]], [10, [[44758226], [44758227]]], [10, [[44758228], [44758229]]], [1, [[31062554, null, [2, [[6, null, null, 3, null, 0], [12, null, null, null, 4, null, "Chrome/(9[23456789]|\\d{3,})", ["navigator.userAgent"]]]]], [31062555, [[395842139, null, null, [1]]], [2, [[6, null, null, 3, null, 0], [12, null, null, null, 4, null, "Chrome/(9[23456789]|\\d{3,})", ["navigator.userAgent"]]]]]]], [1000, [[21067496]], [4, null, 9, null, null, null, null, ["document.hasTrustToken"]]], [1000, [[31060475, null, [2, [[1, [[4, null, 9, null, null, null, null, ["window.PeriodicSyncManager"]]]], [12, null, null, null, 4, null, "Android", ["navigator.userAgent"]]]]]]], [500, [[31061692], [31061693, [[77, null, null, [1]], [78, null, null, [1]], [85, null, null, [1]], [80, null, null, [1]], [76, null, null, [1]]]]], [4, null, 6, null, null, null, null, ["31061691"]]], [1, [[31062890], [31062891, [[397841828, null, null, [1]]]]]], [1, [[31062946]], [4, null, 27, null, null, null, null, ["document.prerendering"]]], [1, [[31062947]], [1, [[4, null, 27, null, null, null, null, ["document.prerendering"]]]]], [100, [[31063982, null, [4, null, 6, null, null, null, null, ["31063247"]]], [31063983, [[419638674, null, null, [1]]], [4, null, 6, null, null, null, null, ["31063247"]]]], [2, [[12, null, null, null, 4, null, "Chrome/(9[3456789]|\\d{3,})", ["navigator.userAgent"]], [4, null, 9, null, null, null, null, ["window.PeriodicSyncManager"]]]], 45], [1, [[31064018], [31064019, [[1961, null, null, [1]]]]]]]], [4, [[null, [[44714449, [[null, 7, null, [null, 1]]]], [676982961, [[null, 7, null, [null, 0.4]], [212, null, null, [1]]]], [676982996, [[null, 7, null, [null, 1]]]]]], [10, [[31063162], [31063163, [[359351145, null, null, [1]]]]], [3, [[4, null, 15, null, null, null, null, ["18190176,155953048"]], [4, null, 15, null, null, null, null, ["49944529"]], [4, null, 15, null, null, null, null, ["5441"]], [4, null, 15, null, null, null, null, ["6177"]], [4, null, 15, null, null, null, null, ["6782"]], [4, null, 15, null, null, null, null, ["6581"]]]], 40]]], [3, [[null, [[44732730], [44732731]]], [null, [[676982960], [676982994], [676982998]]], [null, [[676982975], [676982980]]], [null, [[1337, [[77, null, null, [1]], [78, null, null, [1]], [85, null, null, [1]], [80, null, null, [1]], [76, null, null, [1]], [84, null, null, [1]], [188, null, null, [1]]]]]], [10, [[21064365], [21064372, [[null, null, null, [null, null, null, ["flash"]], null, 489]]]], null, 15], [10, [[21068766], [21068767, [[null, 488, null, [null, 0.1]]]]], null, 42], [1000, [[31060545, [[null, null, 363931022, [null, null, "A0Bg2nddUj4Nw6FzsXudBXHZs1aAzIgO+UGzfJGkC1f4J56ghvJ6TCirjdt8BUwsK14sBBjWGmOY+QCTr2HrBQoAAACBeyJvcmlnaW4iOiJodHRwczovL3NlY3VyZXB1YmFkcy5nLmRvdWJsZWNsaWNrLm5ldDo0NDMiLCJmZWF0dXJlIjoiU3VicmVzb3VyY2VXZWJCdW5kbGVzIiwiZXhwaXJ5IjoxNjUyODMxOTk5LCJpc1RoaXJkUGFydHkiOnRydWV9"]]]]], [2, [[12, null, null, null, 4, null, "Chrome/(9\\d|\\d{3,})", ["navigator.userAgent"]], [3, [[2, [[2, [[8, null, null, 1, null, -1], [7, null, null, 1, null, 10]]], [4, null, 3]]], [2, [[2, [[8, null, null, 1, null, 29], [7, null, null, 1, null, 50]]], [4, null, 3]]]]]]]], [1, [[31062923], [31062924, [[144, null, null, [1]]]]]], [10, [[31063706], [31063707, [[null, 359346956, null, [null, 1]]]], [31063708, [[null, 359346956, null, [null, 2]]]]]], [500, [[31063709, null, [4, null, 8, null, null, null, null, ["top.frames.google_ads_top_frame"]]], [31063710, [[360245596, null, null, [1]]], [4, null, 8, null, null, null, null, ["top.frames.google_ads_top_frame"]]]]], [null, [[31063831, null, [2, [[2, [[8, null, null, 1, null, -1], [7, null, null, 1, null, 5]]], [4, null, 3]]]], [31063832, null, [2, [[2, [[8, null, null, 1, null, 4], [7, null, null, 1, null, 10]]], [4, null, 3]]]]], [4, null, 3]], [1, [[31063874], [31063875, [[null, 357045128, null, [null, 1]]]], [31063876, [[null, 357045128, null, [null, 2]]]]]], [1, [[31063916], [31063917, [[null, 413725046, null, [null, 1]]]]], null, 40], [10, [[31064537, [[null, 488, null, [null, 0.1]]]], [31064538, [[419920765, null, null, [1]], [null, 488, null, [null, 0.1]]]]], null, 42], [10, [[31064539], [31064540, [[416614038, null, null, [1]], [410883576, null, null, [1]]]]]], [10, [[44755845], [44755846, [[null, 387165532, null, [null, 0.05]]]]], [2, [[1, [[4, null, 63]]], [4, null, 59, null, null, null, null, ["3372044115", "2902623493", "1900948638", "3922065694", "1163038905", "2299118599", "528876146", "1417165976"]]]]]]], [5, [[50, [[21062785, null, [4, null, 8, null, null, null, null, ["_gmptnl"]]], [21062786, [[23, null, null, [1]]], [4, null, 8, null, null, null, null, ["_gmptnl"]]]], [12, null, null, null, 2, null, "today\\.line\\.me/.+/(main|article)"], 43], [900, [[21062812, [[23, null, null, [1]]], [4, null, 8, null, null, null, null, ["_gmptnl"]]]], [12, null, null, null, 2, null, "today\\.line\\.me/.+/(main|article)"], 43], [50, [[21063916, null, [4, null, 8, null, null, null, null, ["webkit.messageHandlers._gmptnl"]]], [21063917, [[23, null, null, [1]]], [4, null, 8, null, null, null, null, ["webkit.messageHandlers._gmptnl"]]]], [12, null, null, null, 2, null, "today\\.line\\.me/.+/(main|article)"], 44], [900, [[21064113, [[23, null, null, [1]]], [4, null, 8, null, null, null, null, ["webkit.messageHandlers._gmptnl"]]]], [12, null, null, null, 2, null, "today\\.line\\.me/.+/(main|article)"], 44], [10, [[31060437], [31060438, [[200, null, null, [1]]]], [31060439, [[220, null, null, [1]]]]], null, 24], [10, [[31060837], [31060838, [[368279556, null, null, [1]], [366809413, null, null, [1]]]]]], [150, [[31061482], [31061483, [[360245597, null, null, [1]], [45360254, null, null, [1]], [null, 494, null, [null, 5000], [[[12, null, null, null, 4, null, "Android", ["navigator.userAgent"]], [null, 5500]]]], [null, 517, null, [null, 1]]]], [31063012, [[360245597, null, null, [1]], [null, 494, null, [null, 5000], [[[12, null, null, null, 4, null, "Android", ["navigator.userAgent"]], [null, 5500]]]], [null, 517, null, [null, 1]]]], [31064123, [[null, null, null, [null, null, null, ["scar"]], null, 489], [null, 405881106, null, [null, 1]], [360245597, null, null, [1]], [null, 494, null, [null, 5000], [[[12, null, null, null, 4, null, "Android", ["navigator.userAgent"]], [null, 5500]]]], [null, 517, null, [null, 1]]]], [44753752, [[360245597, null, null, [1]], [null, 494, null, [null, 5000], [[[12, null, null, null, 4, null, "Android", ["navigator.userAgent"]], [null, 5500]]]], [null, 517, null, [null, 1]]]]], [3, [[4, null, 8, null, null, null, null, ["gmaSdk.getQueryInfo"]], [4, null, 8, null, null, null, null, ["webkit.messageHandlers.getGmaQueryInfo.postMessage"]], [4, null, 8, null, null, null, null, ["webkit.messageHandlers.getGmaSig.postMessage"]]]], 15], [100, [[31061814], [31061815, [[384734642, null, null, [1]], [null, 529, null, [null, 20]]]]]], [50, [[31063011, [[null, null, null, [null, null, null, ["scar"]], null, 489], [360245597, null, null, [1]], [null, 494, null, [null, 5000], [[[12, null, null, null, 4, null, "Android", ["navigator.userAgent"]], [null, 5500]]]], [null, 517, null, [null, 1]]]], [31063841, [[360245597, null, null, [1]], [null, 494, null, [null, 5000], [[[12, null, null, null, 4, null, "Android", ["navigator.userAgent"]], [null, 5500]]]], [null, 517, null, [null, 1]]]], [44753813]], [3, [[4, null, 8, null, null, null, null, ["gmaSdk.getQueryInfo"]], [4, null, 8, null, null, null, null, ["webkit.messageHandlers.getGmaQueryInfo.postMessage"]], [4, null, 8, null, null, null, null, ["webkit.messageHandlers.getGmaSig.postMessage"]]]], 15], [50, [[31063377], [31063378, [[1958, null, null, [1]]]]]], [50, [[31063820], [31063821, [[410573952, null, null, [1]]]]]], [10, [[31063870], [31063871, [[384700361, null, null, [1]]]]]], [null, [[31064134], [31064135, [[421072586, null, null, [1]]]]]], [50, [[31064150], [31064151, [[414440070, null, null, [1]]]]]], [100, [[31064612], [31064613, [[416805799, null, null, [1]]]]]], [100, [[31064621], [31064622, [[417166612, null, null, [1]]]]]], [100, [[31064627], [31064628, [[419344496, null, null, [1]]]]]], [1000, [[31064649, [[null, 24, null, [null, 31064649]], [null, 25, null, [null, 31064649]]], [6, null, null, 4, null, 2]], [31064650, [[null, 24, null, [null, 31064650]], [null, 25, null, [null, 31064650]]], [6, null, null, 4, null, 3]]], [4, null, 3], 1], [100, [[31064657], [31064658, [[416396733, null, null, [1]]]]]], [10, [[31064659], [31064660, [[421109922, null, null, [1]]]]]], [100, [[31064667], [31064668, [[421859928, null, null, [1]]]]]], [100, [[31064671], [31064672, [[415024182, null, null, [1]]]]]], [50, [[31064673], [31064674, [[402847016, null, null, []]]]]], [1000, [[31064679, [[null, 24, null, [null, 31064679]], [null, 25, null, [null, 31064679]]], [6, null, null, 4, null, 4]], [31064680, [[null, 24, null, [null, 31064680]], [null, 25, null, [null, 31064680]]], [6, null, null, 4, null, 5]]], [4, null, 3], 1], [1000, [[31064711, [[null, 24, null, [null, 31064711]], [null, 25, null, [null, 31064711]]], [6, null, null, 4, null, 6]], [31064712, [[null, 24, null, [null, 31064712]], [null, 25, null, [null, 31064712]]], [6, null, null, 4, null, 7]]], [4, null, 3], 1], [50, [[44752540], [44752541, [[399544548, null, null, [1]]]]]], [50, [[44757100], [44757101, [[398776878, null, null, []]]]], null, 40], [1000, [[31063223, null, [3, [[2, [[2, [[8, null, null, 1, null, -1], [7, null, null, 1, null, 5]]], [4, null, 3]]], [2, [[2, [[8, null, null, 1, null, 9], [7, null, null, 1, null, 20]]], [4, null, 3]]], [2, [[2, [[8, null, null, 1, null, 29], [7, null, null, 1, null, 35]]], [4, null, 3]]], [2, [[2, [[8, null, null, 1, null, 39], [7, null, null, 1, null, 45]]], [4, null, 3]]]]]], [31063224, [[1954, null, null, [1]]], [3, [[2, [[2, [[8, null, null, 1, null, 4], [7, null, null, 1, null, 10]]], [4, null, 3]]], [2, [[2, [[8, null, null, 1, null, 19], [7, null, null, 1, null, 30]]], [4, null, 3]]], [2, [[2, [[8, null, null, 1, null, 34], [7, null, null, 1, null, 40]]], [4, null, 3]]], [2, [[2, [[8, null, null, 1, null, 44], [7, null, null, 1, null, 50]]], [4, null, 3]]]]]]]]]], [2, [[10, [[31060888]]], [10, [[31060889], [31060890]], null, null, null, null, null, null, null, 104], [10, [[31061165], [31061166, [[null, 363650251, null, [null, 2]]]], [31061167, [[null, 363650251, null, [null, 1]]]]], null, null, null, null, null, 1, null, 102], [1000, [[31064623, null, [2, [[2, [[8, null, null, 1, null, -1], [7, null, null, 1, null, 10]]], [4, null, 3]]]], [31064624, null, [2, [[2, [[8, null, null, 1, null, 29], [7, null, null, 1, null, 40]]], [4, null, 3]]]]], [2, [[4, null, 53], [12, null, null, null, 4, null, "Chrome/(9[23456789]|\\d{3,})", ["navigator.userAgent"]], [1, [[4, null, 8, null, null, null, null, ["navigator.serviceWorker.controller"]]]], [4, null, 9, null, null, null, null, ["document.head.appendChild"]], [1, [[4, null, 8, null, null, null, null, ["pbjs"]]]]]]], [10, [[44742767], [44742768]]], [10, [[44752585], [44752586, [[392065905, null, null, [1]]]]], null, 41], [50, [[44753506], [44753507, [[392065905, null, null, []]]]], [3, [[4, null, 15, null, null, null, null, ["18190176,155953048"]], [4, null, 15, null, null, null, null, ["49944529"]], [4, null, 15, null, null, null, null, ["5441"]], [4, null, 15, null, null, null, null, ["6177"]], [4, null, 15, null, null, null, null, ["6782"]], [4, null, 15, null, null, null, null, ["6581"]]]], 41], [1, [[44757300], [44757301, [[398776878, null, null, []], [391385505, null, null, [1]]]]], [1, [[3, [[4, null, 15, null, null, null, null, ["18190176,155953048"]], [4, null, 15, null, null, null, null, ["49944529"]], [4, null, 15, null, null, null, null, ["5441"]], [4, null, 15, null, null, null, null, ["6177"]], [4, null, 15, null, null, null, null, ["6782"]], [4, null, 15, null, null, null, null, ["6581"]]]]]], 40]]], [12, [[1, [[31061828], [31061829, [[null, 1032, null, [null, 200], [[[12, null, null, null, 4, null, "Android", ["navigator.userAgent"]], [null, 500]]]], [360245597, null, null, [1]], [null, 494, null, [null, 5000], [[[12, null, null, null, 4, null, "Android", ["navigator.userAgent"]], [null, 5500]]]], [null, 517, null, [null, 1]]]]], null, 15], [20, [[21065724], [21065725, [[203, null, null, [1]]]]], [4, null, 9, null, null, null, null, ["LayoutShift"]]], [50, [[31060006, null, [2, [[12, null, null, null, 4, null, "Android", ["navigator.userAgent"]], [12, null, null, null, 4, null, "Chrome/(89|9\\d|\\d{3,})", ["navigator.userAgent"]], [4, null, 9, null, null, null, null, ["window.PeriodicSyncManager"]]]]], [31060007, [[1928, null, null, [1]]], [2, [[12, null, null, null, 4, null, "Android", ["navigator.userAgent"]], [12, null, null, null, 4, null, "Chrome/(89|9\\d|\\d{3,})", ["navigator.userAgent"]], [4, null, 9, null, null, null, null, ["window.PeriodicSyncManager"]]]]]], null, 21], [10, [[31060032], [31060033, [[1928, null, null, [1]]]]], null, 21], [10, [[31061690], [31061691, [[83, null, null, [1]], [84, null, null, [1]]]]]], [1, [[31063244], [31063245, [[392736476, null, null, [1]]]]], null, 45], [50, [[31063246], [31063247, [[392736476, null, null, [1]], [null, 406149835, null, [null, 0.01]]]]], [2, [[12, null, null, null, 4, null, "Chrome/(9[3456789]|\\d{3,})", ["navigator.userAgent"]], [4, null, 9, null, null, null, null, ["window.PeriodicSyncManager"]]]], 45], [10, [[31063910], [31063911, [[1948, null, null, []]]]]]]], [9, [[1000, [[31063049]], [4, null, 13, null, null, null, null, ["cxbbhbxm"]]]]], [6, [[1000, [[31063877, null, [2, [[2, [[8, null, null, 1, null, -1], [7, null, null, 1, null, 10]]], [4, null, 3]]]], [31063878, [[501, null, null, [1]]], [2, [[2, [[8, null, null, 1, null, 29], [7, null, null, 1, null, 40]]], [4, null, 3]]]]], [2, [[4, null, 53], [12, null, null, null, 4, null, "Chrome/(9[23456789]|\\d{3,})", ["navigator.userAgent"]], [1, [[4, null, 8, null, null, null, null, ["navigator.serviceWorker.controller"]]]], [4, null, 9, null, null, null, null, ["document.head.appendChild"]]]]]]]], null, null, [0.001, 1000, 1, 1000]])
