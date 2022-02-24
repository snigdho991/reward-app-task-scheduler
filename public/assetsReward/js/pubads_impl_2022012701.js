(function(_) {
    /*

 Copyright The Closure Library Authors.
 SPDX-License-Identifier: Apache-2.0
*/
    var p, da, fa, ha, ka, na, pa, la, qa, ra, sa, ta, ua, wa, xa, ya, za, Aa, Ba, Da, Ca, Ea, Fa, Ga, Ja, Ma, Oa, Pa, Qa, Ta, Wa, Xa, Ya, $a, ab, bb, db, fb, lb, ob, rb, vb, yb, zb, Cb, Db, Fb, Jb, Lb, Kb, Mb, Qb, Sb, Vb, Xb, bc, Zb, $b, fc, gc, hc, ic, dc, ec, kc, mc, nc, sc, uc, B, wc, xc, zc, Ac, Bc, Cc, Dc, Fc, Gc, Tc, Mc, Vc, Wc, Zc, ad, fd, ld, nd, ud, Ad, Dd, Wd, ce, ee, ge, he, je, ke, le, ne, me, re, te, ue, ve, we, xe, ze, Ae, Be, Ce, Ee, De, He, Ne, Pe, df, of, vf, J, Df, Gf, Vf, Zf, ag, cg, eg, fg, gg, ig, lg, ug, yg, Ag, Dg, Gg, Jg, Kg, Ng, Sg, Tg, Ug, Vg, Lg, Wg, Zg, $g, ah, Mg, eh, fh, hh, ih, kh, jh, mh, lh, nh, vh, zh, Ah, Bh, Dh, Eh, Fh, Gh, Hh, Ih, Jh, Lh, Nh, Qh, Rh, L, Th, Uh, Xh, fi, gi, ji, si, ti, vi, wi, yi, Di, Ei, Gi, zi, Ji, Li, Mi, Vi, Xi, dj, ej, Yi, hj, jj, lj, rj, sj, tj, wj, xj, yj, Aj, Bj, Cj, Dj, Ej, Fj, Ij, Kj, Mj, Oj, Pj, Qj, Vj, Wj, Yj, Zj, ak, bk, ck, dk, ek, Vk, Wk, al, jl, kl, ml, rl, sl, tl, vl, wl, yl, Al, Bl, El, Dl, Il, Jl, Kl, Ml, Ol, Ql, Tl, Wl, Xl, Yl, Zl, $l, am, bm, cm, dm, em, fm, gm, im, km, om, rm, tm, oa, vm, xm, zm, Am, Jm, Nm, Qm, Rm, Ym, an, C, bn, cn, dn, en, fn, v, gn, hn, jn, Q, kn, ln, mn, nn, rn, sn, tn, Rn, Zh, ja, Sn, Tn, Un, Vn, $d;
    da = function(a, b) {
        b = _.aa(a, b);
        var c;
        (c = 0 <= b) && Array.prototype.splice.call(a, b, 1);
        return c
    }
    ;
    fa = function(a) {
        var b = a.length;
        if (0 < b) {
            for (var c = Array(b), d = 0; d < b; d++)
                c[d] = a[d];
            return c
        }
        return []
    }
    ;
    ha = function(a, b, c) {
        return 2 >= arguments.length ? Array.prototype.slice.call(a, b) : Array.prototype.slice.call(a, b, c)
    }
    ;
    ka = function(a) {
        for (var b = 0, c = 0, d = {}; c < a.length; ) {
            var e = a[c++]
              , f = _.ia(e) ? "o" + ja(e) : (typeof e).charAt(0) + e;
            Object.prototype.hasOwnProperty.call(d, f) || (d[f] = !0,
            a[b++] = e)
        }
        a.length = b
    }
    ;
    na = function(a, b) {
        a.sort(b || la)
    }
    ;
    pa = function(a) {
        for (var b = oa, c = Array(a.length), d = 0; d < a.length; d++)
            c[d] = {
                index: d,
                value: a[d]
            };
        var e = b || la;
        na(c, function(f, g) {
            return e(f.value, g.value) || f.index - g.index
        });
        for (b = 0; b < a.length; b++)
            a[b] = c[b].value
    }
    ;
    la = function(a, b) {
        return a > b ? 1 : a < b ? -1 : 0
    }
    ;
    qa = function(a, b) {
        return a === b
    }
    ;
    ra = function(a, b) {
        for (var c = {}, d = 0; d < a.length; d++) {
            var e = a[d]
              , f = b.call(void 0, e, d, a);
            void 0 !== f && (c[f] || (c[f] = [])).push(e)
        }
        return c
    }
    ;
    sa = function(a) {
        for (var b = [], c = 0; c < arguments.length; c++) {
            var d = arguments[c];
            if (Array.isArray(d))
                for (var e = 0; e < d.length; e += 8192)
                    for (var f = sa.apply(null, ha(d, e, e + 8192)), g = 0; g < f.length; g++)
                        b.push(f[g]);
            else
                b.push(d)
        }
        return b
    }
    ;
    ta = function(a, b) {
        for (var c in a)
            b.call(void 0, a[c], c, a)
    }
    ;
    ua = function(a, b) {
        for (var c in a)
            if (b.call(void 0, a[c], c, a))
                return c
    }
    ;
    wa = function(a, b) {
        for (var c, d, e = 1; e < arguments.length; e++) {
            d = arguments[e];
            for (c in d)
                a[c] = d[c];
            for (var f = 0; f < va.length; f++)
                c = va[f],
                Object.prototype.hasOwnProperty.call(d, c) && (a[c] = d[c])
        }
    }
    ;
    xa = function() {
        var a = _.t.navigator;
        return a && (a = a.userAgent) ? a : ""
    }
    ;
    ya = function(a) {
        return -1 != xa().indexOf(a)
    }
    ;
    za = function(a) {
        for (var b = RegExp("([A-Z][\\w ]+)/([^\\s]+)\\s*(?:\\((.*?)\\))?", "g"), c = [], d; d = b.exec(a); )
            c.push([d[1], d[2], d[3] || void 0]);
        return c
    }
    ;
    Aa = function() {
        return ya("Trident") || ya("MSIE")
    }
    ;
    Ba = function() {
        return ya("Firefox") || ya("FxiOS")
    }
    ;
    Da = function() {
        return ya("Safari") && !(Ca() || ya("Coast") || ya("Opera") || ya("Edge") || ya("Edg/") || ya("OPR") || Ba() || ya("Silk") || ya("Android"))
    }
    ;
    Ca = function() {
        return (ya("Chrome") || ya("CriOS")) && !ya("Edge") || ya("Silk")
    }
    ;
    Ea = function(a) {
        var b = {};
        a.forEach(function(c) {
            b[c[0]] = c[1]
        });
        return function(c) {
            return b[_.u(c, "find").call(c, function(d) {
                return d in b
            })] || ""
        }
    }
    ;
    Fa = function() {
        var a = xa();
        if (Aa()) {
            var b = /rv: *([\d\.]*)/.exec(a);
            if (b && b[1])
                a = b[1];
            else {
                b = "";
                var c = /MSIE +([\d\.]+)/.exec(a);
                if (c && c[1])
                    if (a = /Trident\/(\d.\d)/.exec(a),
                    "7.0" == c[1])
                        if (a && a[1])
                            switch (a[1]) {
                            case "4.0":
                                b = "8.0";
                                break;
                            case "5.0":
                                b = "9.0";
                                break;
                            case "6.0":
                                b = "10.0";
                                break;
                            case "7.0":
                                b = "11.0"
                            }
                        else
                            b = "7.0";
                    else
                        b = c[1];
                a = b
            }
            return a
        }
        a = za(a);
        b = Ea(a);
        return ya("Opera") ? b(["Version", "Opera"]) : ya("Edge") ? b(["Edge"]) : ya("Edg/") ? b(["Edg"]) : ya("Silk") ? b(["Silk"]) : Ca() ? b(["Chrome", "CriOS", "HeadlessChrome"]) : (a = a[2]) && a[1] || ""
    }
    ;
    Ga = function() {
        var a = "undefined" !== typeof window ? window.trustedTypes : void 0;
        return null !== a && void 0 !== a ? a : null
    }
    ;
    Ja = function() {
        var a, b;
        if (void 0 === Ia)
            try {
                Ia = null !== (b = null === (a = Ga()) || void 0 === a ? void 0 : a.createPolicy("google#safe", {
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
                Ia = null
            }
        return Ia
    }
    ;
    Ma = function(a) {
        var b, c = null === (b = Ja()) || void 0 === b ? void 0 : b.createHTML(a);
        return new Ka(null !== c && void 0 !== c ? c : a,_.La)
    }
    ;
    Oa = function(a) {
        var b, c = null === (b = Ja()) || void 0 === b ? void 0 : b.createScriptURL(a);
        return new Na(null !== c && void 0 !== c ? c : a,_.La)
    }
    ;
    Pa = function(a) {
        if (a instanceof Na)
            return a.j;
        throw Error("");
    }
    ;
    Qa = function(a) {
        var b;
        a = Pa(a);
        return (null === (b = Ga()) || void 0 === b ? 0 : b.isScriptURL(a)) ? TrustedScriptURL.prototype.toString.apply(a) : a
    }
    ;
    Ta = function(a) {
        if (a instanceof Ra)
            if (a instanceof Ka)
                a = a.j;
            else
                throw Error("");
        else
            a = Sa(a);
        return a
    }
    ;
    Wa = function(a) {
        return a instanceof Ua ? Pa(a) : Va(a)
    }
    ;
    Xa = function(a) {
        return a instanceof Ua ? Pa(a).toString() : Va(a).toString()
    }
    ;
    Ya = function(a, b) {
        if (null !== a && void 0 !== a.tagName) {
            if ("script" === a.tagName.toLowerCase())
                throw Error("Use setTextContent with a SafeScript.");
            if ("style" === a.tagName.toLowerCase())
                throw Error("Use setTextContent with a SafeStyleSheet.");
        }
        a.innerHTML = Ta(b)
    }
    ;
    $a = function(a) {
        var b, c = (a.ownerDocument && a.ownerDocument.defaultView || window).document, d = null === (b = c.querySelector) || void 0 === b ? void 0 : b.call(c, "script[nonce]");
        (b = d ? d.nonce || d.getAttribute("nonce") || "" : "") && a.setAttribute("nonce", b)
    }
    ;
    ab = function(a, b) {
        a.src = Wa(b);
        $a(a)
    }
    ;
    bb = function(a, b) {
        a.write(Ta(b))
    }
    ;
    db = function(a) {
        return a ? a.passive && cb() ? a : a.capture || !1 : !1
    }
    ;
    fb = function(a) {
        var b = window
          , c = !0;
        c = void 0 === c ? !1 : c;
        new v.Promise(function(d, e) {
            function f() {
                var h;
                g.onload = null;
                g.onerror = null;
                null === (h = g.parentElement) || void 0 === h ? void 0 : h.removeChild(g)
            }
            var g = b.document.createElement("script");
            g.onload = function() {
                f();
                d()
            }
            ;
            g.onerror = function() {
                f();
                e(void 0)
            }
            ;
            g.type = "text/javascript";
            ab(g, a);
            c && "complete" !== b.document.readyState ? _.eb(b, "load", function() {
                b.document.body.appendChild(g)
            }) : b.document.body.appendChild(g)
        }
        )
    }
    ;
    lb = function(a) {
        var b, c, d, e, f, g;
        return gb(function(h) {
            switch (h.j) {
            case 1:
                return b = "https://pagead2.googlesyndication.com/getconfig/sodar?sv=200&tid=" + a.j + ("&tv=" + a.m + "&st=") + a.ib,
                c = void 0,
                h.F = 2,
                hb(h, ib(b), 4);
            case 4:
                c = h.m;
                jb(h, 3);
                break;
            case 2:
                kb(h);
            case 3:
                if (!c)
                    return h.return(void 0);
                d = a.yb || c.sodar_query_id;
                e = void 0 !== c.rc_enable && a.F ? c.rc_enable : "n";
                f = void 0 === c.bg_snapshot_delay_ms ? "0" : c.bg_snapshot_delay_ms;
                g = void 0 === c.is_gen_204 ? "1" : c.is_gen_204;
                return d && c.bg_hash_basename && c.bg_binary ? h.return({
                    context: a.A,
                    Ed: c.bg_hash_basename,
                    Dd: c.bg_binary,
                    je: a.j + "_" + a.m,
                    yb: d,
                    ib: a.ib,
                    Qb: e,
                    $b: f,
                    Pb: g
                }) : h.return(void 0)
            }
        })
    }
    ;
    ob = function(a) {
        var b;
        return gb(function(c) {
            if (1 == c.j)
                return hb(c, lb(a), 2);
            if (b = c.m) {
                var d = "sodar2";
                d = void 0 === d ? "sodar2" : d;
                var e = window
                  , f = e.GoogleGcLKhOms;
                f && "function" === typeof f.push || (f = e.GoogleGcLKhOms = []);
                var g = {};
                f.push((g._ctx_ = b.context,
                g._bgv_ = b.Ed,
                g._bgp_ = b.Dd,
                g._li_ = b.je,
                g._jk_ = b.yb,
                g._st_ = b.ib,
                g._rc_ = b.Qb,
                g._dl_ = b.$b,
                g._g2_ = b.Pb,
                g));
                if (f = e.GoogleDX5YKUSk)
                    e.GoogleDX5YKUSk = void 0,
                    f[1]();
                d = mb(nb, {
                    basename: d
                });
                fb(d)
            }
            return c.return(b)
        })
    }
    ;
    rb = function(a) {
        if (pb)
            a = (qb || (qb = new TextEncoder)).encode(a);
        else {
            var b = void 0;
            b = void 0 === b ? !1 : b;
            for (var c = 0, d = new Uint8Array(3 * a.length), e = 0; e < a.length; e++) {
                var f = a.charCodeAt(e);
                if (128 > f)
                    d[c++] = f;
                else {
                    if (2048 > f)
                        d[c++] = f >> 6 | 192;
                    else {
                        if (55296 <= f && 57343 >= f) {
                            if (56319 >= f && e < a.length) {
                                var g = a.charCodeAt(++e);
                                if (56320 <= g && 57343 >= g) {
                                    f = 1024 * (f - 55296) + g - 56320 + 65536;
                                    d[c++] = f >> 18 | 240;
                                    d[c++] = f >> 12 & 63 | 128;
                                    d[c++] = f >> 6 & 63 | 128;
                                    d[c++] = f & 63 | 128;
                                    continue
                                } else
                                    e--
                            }
                            if (b)
                                throw Error("Found an unpaired surrogate");
                            f = 65533
                        }
                        d[c++] = f >> 12 | 224;
                        d[c++] = f >> 6 & 63 | 128
                    }
                    d[c++] = f & 63 | 128
                }
            }
            a = d.subarray(0, c)
        }
        return a
    }
    ;
    vb = function(a) {
        var b = 0 > a;
        a = Math.abs(a);
        var c = a >>> 0;
        a = Math.floor((a - c) / 4294967296);
        a >>>= 0;
        b && (a = ~a >>> 0,
        c = (~c >>> 0) + 1,
        4294967295 < c && (c = 0,
        a++,
        4294967295 < a && (a = 0)));
        tb = c;
        ub = a
    }
    ;
    yb = function(a) {
        Object.isFrozen(a) || (xb ? a[xb] |= 1 : void 0 !== a.Ob ? a.Ob |= 1 : Object.defineProperties(a, {
            Ob: {
                value: 1,
                configurable: !0,
                writable: !0,
                enumerable: !1
            }
        }));
        return a
    }
    ;
    zb = function(a) {
        return null !== a && "object" === typeof a && !Array.isArray(a) && a.constructor === Object
    }
    ;
    Cb = function(a) {
        a = null == a || "string" === typeof a ? a : Ab && a instanceof Uint8Array ? Bb(a) : null;
        return a
    }
    ;
    Db = function(a, b, c, d) {
        c !== d ? w(a, b, c) : w(a, b, void 0, !1);
        return a
    }
    ;
    Fb = function(a, b, c) {
        return Eb(a, b) === c ? c : -1
    }
    ;
    Jb = function(a) {
        switch (typeof a) {
        case "number":
            return isFinite(a) ? a : String(a);
        case "object":
            if (a && !Array.isArray(a)) {
                if (Ab && null != a && a instanceof Uint8Array)
                    return Bb(a);
                if (a instanceof Gb)
                    return a.Ia()
            }
        }
        return a
    }
    ;
    Lb = function(a, b) {
        if (null != a) {
            if (Array.isArray(a))
                a = Kb(a, b);
            else if (zb(a)) {
                var c = {}, d;
                for (d in a)
                    Object.prototype.hasOwnProperty.call(a, d) && (c[d] = Lb(a[d], b));
                a = c
            } else
                a = b(a);
            return a
        }
    }
    ;
    Kb = function(a, b) {
        for (var c = a.slice(), d = 0; d < c.length; d++)
            c[d] = Lb(c[d], b);
        if (b = Array.isArray(a)) {
            var e;
            xb ? e = a[xb] : e = a.Ob;
            b = (null == e ? 0 : e) & 1
        }
        b && yb(c);
        return c
    }
    ;
    Mb = function(a) {
        if (a && "object" == typeof a && a.toJSON)
            return a.toJSON();
        a = Jb(a);
        return Array.isArray(a) ? Kb(a, Mb) : a
    }
    ;
    Qb = function(a) {
        if (Ab && null != a && a instanceof Uint8Array)
            a = new Uint8Array(a);
        else if (a instanceof Gb) {
            var b = a.F, c = new Gb(yb([]),b), d;
            for (d in a.map) {
                var e = a.map[d];
                b ? c.set(e[0], Ob(Pb(a, e))) : c.set(e[0], e[1])
            }
            a = c
        }
        return a
    }
    ;
    Sb = function(a, b) {
        Rb = b;
        a = new a(b);
        Rb = null;
        return a
    }
    ;
    Vb = function(a, b) {
        return Jb(b)
    }
    ;
    Xb = function(a, b) {
        b.zc && (a.zc = b.zc.slice());
        var c = b.aa;
        if (c) {
            b = b.j;
            for (var d in c)
                if (Object.prototype.hasOwnProperty.call(c, d)) {
                    var e = c[d];
                    if (e) {
                        var f = !(!b || !b[d])
                          , g = +d;
                        if (Array.isArray(e)) {
                            if (e.length)
                                for (f = Wb(a, e[0].constructor, g, f),
                                g = 0; g < Math.min(f.length, e.length); g++)
                                    Xb(f[g], e[g])
                        } else
                            (f = Yb(a, e.constructor, g, void 0, f)) && Xb(f, e)
                    }
                }
        }
    }
    ;
    bc = function(a, b, c) {
        if (c) {
            var d = {}, e;
            for (e in c) {
                if (Object.prototype.hasOwnProperty.call(c, e)) {
                    var f = c[e]
                      , g = f.Ue;
                    g || (d.lb = f.Wf || f.ig.cc,
                    f.Cd ? (d.hc = Zb(f.Cd),
                    g = function(h) {
                        return function(k, l, m) {
                            return h.lb(k, l, m, h.hc)
                        }
                    }(d)) : f.ke ? (d.ec = $b(f.Td.j, f.ke),
                    g = function(h) {
                        return function(k, l, m) {
                            return h.lb(k, l, m, h.ec)
                        }
                    }(d)) : g = d.lb,
                    f.Ue = g);
                    g(b, a, f.Td)
                }
                d = {
                    lb: d.lb,
                    hc: d.hc,
                    ec: d.ec
                }
            }
        }
        ac(b, a)
    }
    ;
    Zb = function(a) {
        var b = a[cc];
        if (!b) {
            var c = dc(a);
            b = function(d, e) {
                return ec(d, e, c)
            }
            ;
            a[cc] = b
        }
        return b
    }
    ;
    $b = function(a, b) {
        var c = a[cc];
        c || (c = function(d, e) {
            return bc(d, e, b)
        }
        ,
        a[cc] = c);
        return c
    }
    ;
    fc = function(a, b) {
        a.push(b)
    }
    ;
    gc = function(a, b, c) {
        a.push(b, c.cc)
    }
    ;
    hc = function(a, b, c, d, e) {
        var f = Zb(e)
          , g = c.cc;
        a.push(b, function(h, k, l) {
            return g(h, k, l, d, f)
        })
    }
    ;
    ic = function(a, b, c, d, e, f) {
        var g = $b(d, f)
          , h = c.cc;
        a.push(b, function(k, l, m) {
            return h(k, l, m, d, g)
        })
    }
    ;
    dc = function(a) {
        var b = a[jc];
        if (!b) {
            b = a[jc] = [];
            var c = fc
              , d = gc
              , e = hc
              , f = ic;
            a = a();
            var g = 0;
            a.length && "number" !== typeof a[0] && (c(b, a[0]),
            g++);
            for (; g < a.length; ) {
                c = a[g++];
                for (var h = g + 1; h < a.length && "number" !== typeof a[h]; )
                    h++;
                var k = a[g++];
                h -= g;
                switch (h) {
                case 0:
                    d(b, c, k);
                    break;
                case 1:
                    d(b, c, k, a[g++]);
                    break;
                case 2:
                    e(b, c, k, a[g++], a[g++]);
                    break;
                case 3:
                    h = a[g++];
                    var l = a[g++]
                      , m = a[g++];
                    Array.isArray(m) ? e(b, c, k, h, l, m) : f(b, c, k, h, l, m);
                    break;
                case 4:
                    f(b, c, k, a[g++], a[g++], a[g++], a[g++]);
                    break;
                default:
                    throw Error("unexpected number of binary field arguments: " + h);
                }
            }
        }
        return b
    }
    ;
    ec = function(a, b, c) {
        for (var d = c.length, e = 1 == d % 2, f = e ? 1 : 0; f < d; f += 2)
            (0,
            c[f + 1])(b, a, c[f]);
        bc(a, b, e ? c[0] : void 0)
    }
    ;
    kc = function(a, b) {
        return {
            hg: a,
            cc: b
        }
    }
    ;
    mc = function(a, b, c) {
        b = x(b, c);
        null != b && lc(a, c, rb(b))
    }
    ;
    nc = function(a) {
        switch (a) {
        case 1:
            return "gda";
        case 2:
            return "gpt";
        case 3:
            return "ima";
        case 4:
            return "pal";
        case 5:
            return "xfad";
        case 6:
            return "dv3n";
        case 7:
            return "spa";
        default:
            return "unk"
        }
    }
    ;
    sc = function(a, b, c, d) {
        d = void 0 === d ? [] : d;
        var e = new a.MutationObserver(function(f) {
            f = _.y(f);
            for (var g = f.next(); !g.done; g = f.next()) {
                g = _.y(g.value.removedNodes);
                for (var h = g.next(); !h.done; h = g.next())
                    if (h = h.value,
                    d && (h === b || oc(h, b))) {
                        f = _.y(d);
                        for (g = f.next(); !g.done; g = f.next())
                            g.value.disconnect();
                        d.length = 0;
                        c();
                        return
                    }
            }
        }
        );
        d.push(e);
        e.observe(a.document.documentElement, {
            childList: !0,
            subtree: !0
        });
        pc(function(f) {
            if (!f.parent || !qc(f.parent))
                return !1;
            for (var g = f.parent.document.getElementsByTagName("iframe"), h = 0; h < g.length; h++)
                try {
                    if (rc(g[h]) == f) {
                        sc(f.parent, g[h], c, d);
                        break
                    }
                } catch (k) {}
            return !1
        }, !1, !1, a)
    }
    ;
    uc = function(a) {
        return new _.tc(function(b) {
            return b.substr(0, a.length + 1).toLowerCase() === a + ":"
        }
        )
    }
    ;
    B = function(a) {
        var b = vc.apply(1, arguments);
        if (0 === b.length)
            return Oa(a[0]);
        for (var c = [a[0]], d = 0; d < b.length; d++)
            c.push(encodeURIComponent(b[d])),
            c.push(a[d + 1]);
        return Oa(c.join(""))
    }
    ;
    wc = function(a, b) {
        var c = Qa(a);
        if (/#/.test(c))
            throw Error("");
        var d = /\?/.test(c) ? "&" : "?";
        b.forEach(function(e, f) {
            e = e instanceof Array ? e : [e];
            for (var g = 0; g < e.length; g++) {
                var h = e[g];
                null !== h && void 0 !== h && (c += d + encodeURIComponent(f) + "=" + encodeURIComponent(String(h)),
                d = "&")
            }
        });
        return Oa(c)
    }
    ;
    xc = function(a) {
        return function() {
            var b = vc.apply(0, arguments);
            try {
                return a.apply(this, b)
            } catch (c) {}
        }
    }
    ;
    zc = function(a) {
        a.od.apply(a, _.yc(vc.apply(1, arguments).map(function(b) {
            return {
                pd: 2,
                message: b
            }
        })))
    }
    ;
    Ac = function(a) {
        a.od.apply(a, _.yc(vc.apply(1, arguments).map(function(b) {
            return {
                pd: 5,
                message: b
            }
        })))
    }
    ;
    Bc = function(a) {
        a && "function" == typeof a.va && a.va()
    }
    ;
    Cc = function(a) {
        return a
    }
    ;
    Dc = function(a, b) {
        if (!b(a))
            throw Error(String(a));
    }
    ;
    Fc = function(a, b) {
        Dc(a, b);
        return a
    }
    ;
    Gc = function(a, b, c) {
        if (!a) {
            if (c && 0 < c.length)
                throw Error("[" + c.map(String).join(",") + "]");
            throw Error(String(a));
        }
    }
    ;
    Tc = function(a, b) {
        var c;
        a: {
            try {
                if (a) {
                    var d = a.getItem("google_experiment_mod");
                    break a
                }
            } catch (h) {}
            d = null
        }
        d = null !== (c = d) && void 0 !== c ? c : "";
        try {
            var e = Hc(Ic, d);
            if (d) {
                var f = Hc(Ic, d);
                Jc(f, Kc(Lc(1), -1));
                f.X()
            }
        } catch (h) {
            Mc(d),
            e = new Ic
        }
        if (f = (C = Wb(e, Nc, 1),
        _.u(C, "find")).call(C, function(h) {
            return Oc(h, 1, 0) === b
        })) {
            var g = Pc(f, 2);
            if (null === g || isNaN(g))
                Mc(d);
            else
                return g
        }
        d = Qc() ? null : Math.floor(1E3 * Rc());
        if (null === d)
            return null;
        f ? Kc(f, d) : Jc(e, Kc(Lc(b), d));
        return Sc(a, e.X()) ? d : null
    }
    ;
    Mc = function(a) {
        .01 > Math.random() && Uc({
            data: a
        }, "ls_tamp")
    }
    ;
    Vc = function(a, b) {
        b = void 0 === b ? window : b;
        if (D(a, 5))
            try {
                return b.localStorage
            } catch (c) {}
        return null
    }
    ;
    Wc = function(a) {
        return "null" !== a.origin
    }
    ;
    Zc = function(a, b, c) {
        b = D(b, 5) && Wc(c) ? c.document.cookie : null;
        return null === b ? null : (new Yc({
            cookie: b
        })).get(a) || ""
    }
    ;
    ad = function(a, b) {
        var c, d, e;
        return gb(function(f) {
            if (1 == f.j)
                return c = 0 < b ? a.filter(function(g) {
                    return !g.Pc
                }) : a,
                hb(f, v.Promise.all(c.map(function(g) {
                    return g.Tc.promise
                })), 2);
            if (3 != f.j) {
                if (a.length === c.length)
                    return f.return(0);
                d = a.filter(function(g) {
                    return g.Pc
                });
                e = _.$c();
                return hb(f, v.Promise.race([v.Promise.all(d.map(function(g) {
                    return g.Tc.promise
                })), new v.Promise(function(g) {
                    return void setTimeout(g, b)
                }
                )]), 3)
            }
            return f.return(_.$c() - e)
        })
    }
    ;
    fd = function(a, b, c, d) {
        c = void 0 === c ? null : c;
        d = void 0 === d ? {} : d;
        if (Math.random() < _.bd(cd)) {
            var e = {};
            Uc(_.u(Object, "assign").call(Object, (e.c = String(a),
            e.pc = String(dd(window)),
            e.em = c,
            e.lid = b,
            e.eids = ed().m().join(),
            e), d), "esp")
        }
    }
    ;
    ld = function(a, b, c, d) {
        fd(18, a);
        try {
            var e = _.$c();
            _.bd(gd) && (hd(b, Number(((0,
            E.I)(id(b, 8)) - 1).toFixed(3))),
            w(b, 7, Math.round(e / 1E3 / 60)));
            return c().then(function(f) {
                fd(29, a, null, {
                    delta: String(_.$c() - e)
                });
                w(b, 3, Date.now());
                jd(a, b, f, d);
                return b
            }).catch(function(f) {
                jd(a, b, x(b, 2), d);
                fd(28, a, kd(f));
                return b
            })
        } catch (f) {
            return jd(a, b, x(b, 2), d),
            fd(1, a, kd(f)),
            v.Promise.resolve(b)
        }
    }
    ;
    nd = function() {
        var a = window;
        var b = void 0 === b ? function() {}
        : b;
        return new v.Promise(function(c) {
            var d = function() {
                c(b());
                _.md(a, "load", d)
            };
            _.eb(a, "load", d)
        }
        )
    }
    ;
    ud = function(a, b, c, d) {
        var e, f, g, h, k;
        return gb(function(l) {
            if (1 == l.j)
                return e = new od(a,b,c,d),
                f = new pd(e.o,e.B,c,d),
                g = new qd(f.o,f.B,c,d),
                h = new rd,
                sd(h, [e, f, g]),
                td(h),
                hb(l, f.l.promise, 2);
            k = l.m;
            return l.return(k ? k : {
                id: a,
                collectorGeneratedData: null
            })
        })
    }
    ;
    Ad = function(a, b, c) {
        var d;
        if (b)
            if (vd() === wd(window) || _.F(xd))
                if (a.encryptedSignalProviders instanceof yd)
                    a.encryptedSignalProviders.addErrorHandler(c);
                else {
                    var e = new zd(null !== (d = a.encryptedSignalProviders) && void 0 !== d ? d : [],b);
                    a.encryptedSignalProviders = new yd(e);
                    e.addErrorHandler(c)
                }
            else
                fd(16, "");
        else
            fd(15, "")
    }
    ;
    Dd = function(a, b, c) {
        var d, e = b.toString();
        if (c && !document.querySelector('[src="' + e + '"]'))
            if (c = Bd().get(a, c),
            c.getError())
                fd(c.getError(), a, c.errorMessage);
            else if (c = c.bc,
            !c || !(0 === Cd(c) || 1 > (null !== (d = id(c, 8)) && void 0 !== d ? d : 0))) {
                fd(30, a, null, {
                    url: e
                });
                var f = document.createElement("script");
                f.setAttribute("esp-signal", "true");
                ab(f, b);
                var g = function() {
                    fd(31, a, null, {
                        url: e
                    });
                    _.md(f, "error", g)
                };
                document.head.appendChild(f);
                _.eb(f, "error", g)
            }
    }
    ;
    Wd = function(a) {
        var b = a.id, c = ["id"], d = {}, e;
        for (e in a)
            Object.prototype.hasOwnProperty.call(a, e) && 0 > c.indexOf(e) && (d[e] = a[e]);
        if (null != a && "function" === typeof Object.getOwnPropertySymbols) {
            var f = 0;
            for (e = Object.getOwnPropertySymbols(a); f < e.length; f++)
                0 > c.indexOf(e[f]) && (d[e[f]] = a[e[f]])
        }
        if (_.u(Object, "keys").call(Object, d).length)
            throw Error("Invalid attribute(s): " + _.u(Object, "keys").call(Object, d));
        a = {
            id: b
        };
        if (!Ed.test("div"))
            throw Error("");
        if ("DIV"in Fd)
            throw Error("");
        c = void 0;
        b = null;
        d = "";
        if (a)
            for (h in a)
                if (Object.prototype.hasOwnProperty.call(a, h)) {
                    if (!Ed.test(h))
                        throw Error("");
                    f = a[h];
                    if (null != f) {
                        e = h;
                        if (f instanceof Gd)
                            f = Hd(f);
                        else {
                            if ("style" == e.toLowerCase())
                                throw Error("");
                            if (/^on/i.test(e))
                                throw Error("");
                            if (e.toLowerCase()in Id)
                                if (f instanceof Jd)
                                    f = Va(f).toString();
                                else if (f instanceof Kd)
                                    f = _.Ld(f);
                                else if ("string" === typeof f) {
                                    if (!(f instanceof Kd))
                                        if (f = "object" == typeof f && f.Ka ? f.Ga() : String(f),
                                        Nd.test(f))
                                            f = new Kd(f,Od);
                                        else {
                                            f = String(f);
                                            f = f.replace(/(%0A|%0D)/g, "");
                                            var g = f.match(Pd);
                                            f = g && Qd.test(g[1]) ? new Kd(f,Od) : null
                                        }
                                    f = (f || Rd).Ga()
                                } else
                                    throw Error("");
                        }
                        f.Ka && (f = f.Ga());
                        e = e + '="' + Sd(String(f)) + '"';
                        d += " " + e
                    }
                }
        var h = "<div" + d;
        null == c ? c = [] : Array.isArray(c) || (c = [c]);
        !0 === Td.div ? h += ">" : (b = Ud(c),
        h += ">" + Sa(b).toString() + "</div>",
        b = b.fb());
        (a = a && a.dir) && (/^(ltr|rtl|auto)$/i.test(a) ? b = 0 : b = null);
        h = Vd(h, b);
        return Ma(Ta(h).toString())
    }
    ;
    ce = function(a) {
        Xd();
        var b = Yd.googleToken[5] || 0;
        a && (0 != b || Zd[3] >= $d() ? be.Rc(a) : (be.Vc().push(a),
        be.jd()));
        Zd[3] >= $d() && Zd[2] >= $d() || be.jd()
    }
    ;
    ee = function(a) {
        a = _.de(a.split(/\s+/), function(b) {
            return (b = /^(-?\d+)(px|%)$/.exec(b)) ? {
                value: parseFloat(b[1]),
                type: b[2]
            } : {
                value: 0,
                type: "px"
            }
        });
        a[1] = a[1] || a[0];
        a[2] = a[2] || a[0];
        a[3] = a[3] || a[1];
        return a
    }
    ;
    ge = function(a) {
        if (!a)
            return [0];
        a = "number" === typeof a ? [a] : a;
        a = _.fe(a, function(b) {
            return "number" === typeof b && 0 <= b && 1 >= b ? !0 : !1
        });
        ka(a);
        na(a, function(b, c) {
            return b - c
        });
        return a
    }
    ;
    he = function(a) {
        try {
            var b = a.getBoundingClientRect()
        } catch (c) {}
        return b ? {
            top: b.top,
            right: b.right,
            bottom: b.bottom,
            left: b.left,
            width: b.width || b.right - b.left,
            height: b.height || b.bottom - b.top
        } : {
            top: 0,
            right: 0,
            bottom: 0,
            left: 0,
            width: 0,
            height: 0
        }
    }
    ;
    je = function(a, b, c, d) {
        var e, f, g, h, k, l, m, n = new ie, q = "", r = function(z) {
            try {
                var A = "object" === typeof z.data ? z.data : JSON.parse(z.data);
                q === A.paw_id && (_.md(a, "message", r),
                A.error ? n.reject(Error(A.error)) : n.resolve(d(A)))
            } catch (I) {}
        };
        return "function" === typeof (null === (e = a.gmaSdk) || void 0 === e ? void 0 : e.getQueryInfo) ? (_.eb(a, "message", r),
        q = c(a.gmaSdk),
        n.promise) : "function" === typeof (null === (h = null === (g = null === (f = a.webkit) || void 0 === f ? void 0 : f.messageHandlers) || void 0 === g ? void 0 : g.getGmaQueryInfo) || void 0 === h ? void 0 : h.postMessage) || "function" === typeof (null === (m = null === (l = null === (k = a.webkit) || void 0 === k ? void 0 : k.messageHandlers) || void 0 === l ? void 0 : l.getGmaSig) || void 0 === m ? void 0 : m.postMessage) ? (q = String(Math.floor(2147483647 * Rc())),
        _.eb(a, "message", r),
        b(a.webkit.messageHandlers, q),
        n.promise) : null
    }
    ;
    ke = function(a) {
        return je(a, function(b, c) {
            var d;
            return void (null !== (d = b.getGmaQueryInfo) && void 0 !== d ? d : b.getGmaSig).postMessage(c)
        }, function(b) {
            return b.getQueryInfo()
        }, function(b) {
            return b.signal
        })
    }
    ;
    le = function(a, b, c, d) {
        try {
            if (a.setAttribute("data-google-query-id", c),
            !d) {
                var e, f;
                null !== (e = b.googletag) && void 0 !== e ? e : b.googletag = {};
                var g = null !== (f = b.googletag.queryIds) && void 0 !== f ? f : [];
                g.push(c);
                500 < g.length && g.shift();
                b.googletag.queryIds = g
            }
        } catch (h) {}
    }
    ;
    ne = function(a, b, c) {
        c = void 0 === c ? null : c;
        b = _.y(b);
        for (var d = b.next(); !d.done; d = b.next()) {
            var e = a
              , f = d.value;
            d = c;
            d = void 0 === d ? null : d;
            var g = e.document;
            var h = f.x
              , k = f.y;
            g.hasOwnProperty("_goog_efp_called_") || (g._goog_efp_called_ = g.elementFromPoint(h, k));
            if (g = g.elementFromPoint(h, k)) {
                if (!(h = me(g, e, f, d)))
                    a: {
                        d = void 0 === d ? null : d;
                        h = e.document;
                        for (g = g.offsetParent; g && g != h.body; g = g.offsetParent)
                            if (k = me(g, e, f, d)) {
                                h = k;
                                break a
                            }
                        h = null
                    }
                d = h || null
            } else
                d = null;
            if (d)
                return d
        }
        return null
    }
    ;
    me = function(a, b, c, d) {
        d = void 0 === d ? null : d;
        if ("fixed" !== oe(a, "position"))
            return null;
        var e = "GoogleActiveViewInnerContainer" == a.getAttribute("class") || 1 >= _.pe(_.qe, a).width && 1 >= _.pe(_.qe, a).height ? !0 : !1;
        d && d.j("ach_evt", {
            url: b.location.href,
            tn: a.tagName,
            id: a.getAttribute("id"),
            cls: a.getAttribute("class"),
            ign: e,
            pw: b.innerWidth,
            ph: b.innerHeight,
            x: c.x,
            y: c.y
        }, 1);
        return e ? null : a
    }
    ;
    re = function(a, b) {
        b = void 0 === b ? [] : b;
        var c = Date.now();
        return _.fe(b, function(d) {
            return c - d < 1E3 * a
        })
    }
    ;
    te = function(a, b) {
        try {
            var c = a.getItem("__lsv__");
            if (!c)
                return [];
            try {
                var d = JSON.parse(c)
            } catch (e) {}
            if (!Array.isArray(d) || _.se(d, function(e) {
                return !_.u(Number, "isInteger").call(Number, e)
            }))
                return a.removeItem("__lsv__"),
                [];
            d = re(b, d);
            d.length || null == a || a.removeItem("__lsv__");
            return d
        } catch (e) {
            return null
        }
    }
    ;
    ue = function(a, b) {
        .001 > Rc() && Uc({
            c: a,
            s: b
        }, "gpt_whirs")
    }
    ;
    ve = function(a) {
        var b = a.split("/");
        return "/" === a.charAt(0) && 2 <= b.length ? b[1] : "/" !== a.charAt(0) && 1 <= b.length ? b[0] : ""
    }
    ;
    we = function() {
        var a;
        return null !== (a = _.t.googletag) && void 0 !== a ? a : _.t.googletag = {}
    }
    ;
    xe = function(a, b) {
        var c = we();
        c.hasOwnProperty(a) || (c[a] = b)
    }
    ;
    ze = function(a) {
        var b;
        a = ye[a];
        return null !== (b = we()[a]()) && void 0 !== b ? b : null
    }
    ;
    Ae = function(a) {
        if (15360 >= a.length)
            return {
                url: a,
                Sc: 0
            };
        var b = a;
        15360 < b.length && (b = b.substring(0, 15352),
        b = b.replace(/%\w?$/, ""),
        b = b.replace(/&[^=]*=?$/, ""),
        b += "&trunc=1");
        return {
            url: b,
            Sc: a.length - b.length + 8
        }
    }
    ;
    Be = function(a, b) {
        b = void 0 === b ? window : b;
        return b.location ? b.URLSearchParams ? (a = (new URLSearchParams(b.location.search)).get(a),
        (null === a || void 0 === a ? 0 : a.length) ? a : null) : (a = (new RegExp("[?&]" + a + "=([^&]*)")).exec(b.location.search)) ? decodeURIComponent(a[1]) : null : null
    }
    ;
    Ce = function(a, b) {
        b = void 0 === b ? window : b;
        return !!Be(a, b)
    }
    ;
    Ee = function() {
        return De()
    }
    ;
    De = function() {
        var a = Fe
          , b = Number(a);
        return 1 > b || Math.floor(b) !== b ? (Uc({
            v: a
        }, "gpt_inv_ver"),
        "1") : a
    }
    ;
    He = function(a, b) {
        if (!document.getElementById("gatc:host:script")) {
            var c = document.createElement("script");
            c.id = "gatc:host:script";
            ab(c, a.rd.Zd);
            a.Wc.appendChild(c)
        }
        a = window.gatc_host;
        Ge(a) ? b(a) : Array.isArray(a) && "function" === typeof a.push ? a.push(b) : window.gatc_host = [b]
    }
    ;
    Ne = function(a, b) {
        b = void 0 === b ? Ie : b;
        var c = function(e) {
            "string" === typeof e && (e = Je.j(e),
            a(e))
        }
          , d = new Ke;
        He(b, function(e) {
            if (Ge(e)) {
                var f = new Le;
                Db(f, 1, Je.m, 0);
                e.openConsoleTab(f.X(), c, function(g) {
                    if (!(d.j instanceof MessagePort)) {
                        var h = d.j;
                        d.j = g;
                        g = _.y(Me(h));
                        for (h = g.next(); !h.done; h = g.next())
                            d.send(h.value)
                    }
                })
            }
        });
        return d
    }
    ;
    Pe = function(a, b) {
        (0,
        E.qb)(!Oe.has(a));
        Oe.set(a, b)
    }
    ;
    df = function(a) {
        var b = new Qe;
        if (Re(a))
            return Ue(b, 1, Ve, a),
            b;
        if (We(a))
            return Ue(b, 2, Ve, a),
            b;
        if (Xe(a))
            return Ue(b, 3, Ve, a),
            b;
        if (Ye(a))
            return Ue(b, 4, Ve, 2),
            b;
        if (Ze(a))
            return Ue(b, 4, Ve, 1),
            b;
        if ($e(a))
            return Ue(b, 7, Ve, a.toString()),
            b;
        if (af(a)) {
            var c = new bf;
            cf(c, a.map(function(h) {
                return df(h)
            }));
            ef(b, 5, Ve, c);
            return b
        }
        c = new ff;
        var d = gf(c)
          , e = !1;
        if (a === we())
            w(c, 2, 1),
            e = !0;
        else if (void 0 !== a.constructor && Oe.has(a.constructor)) {
            var f = (0,
            E.I)(Oe.get(a.constructor));
            w(c, 2, f);
            e = !0;
            8 === f ? (f = a.getSlotId().getDomId(),
            hf(c, jf(new kf, lf.N().m[f]))) : 7 === f && (f = lf.N().j,
            hf(c, mf(f)))
        }
        a = _.y(_.u(Object, "entries").call(Object, a));
        for (f = a.next(); !f.done; f = a.next()) {
            var g = _.y(f.value);
            f = g.next().value;
            g = g.next().value;
            e && $e(g) || d.set(f, df(g))
        }
        ef(b, 6, Ve, c);
        return b
    }
    ;
    of = function(a, b) {
        a = {
            methodId: a
        };
        b.name && (a.name = b.name);
        b.message && (a.message = b.message.substring(0, 512));
        b.fileName && (a.fileName = b.fileName);
        b.lineNumber && (a.lineNumber = b.lineNumber);
        b.stack && (a.stack = nf(b.stack, ""));
        return a
    }
    ;
    vf = function(a, b) {
        var c = void 0 === c ? pf : c;
        if (!b.isReported)
            try {
                b.isReported = !0;
                if ("__throw_for_testing" === b.name && _.qf[148])
                    throw Error("throwing error for testing");
                var d = of(a, b)
                  , e = new rf("gpt_exception");
                try {
                    sf(e)
                } catch (f) {}
                _.tf(d, function(f, g) {
                    G(e, g, f)
                });
                uf(e, c)
            } catch (f) {}
    }
    ;
    J = function(a, b, c) {
        c = void 0 === c ? !1 : c;
        var d = void 0 === d ? wf : d;
        _.qf[148] && (xf || (xf = new yf,
        xf.initialize()),
        b = zf(a, b));
        return _.Af(a, b, c, _.F(Bf), d)
    }
    ;
    Df = function(a, b) {
        if (.1 > Math.random())
            try {
                var c = Error();
                Cf("gpt_api_usage", function(d) {
                    G(d, "methodId", a);
                    G(d, "args", b);
                    c.stack && G(d, "stack", nf(c.stack, c.message));
                    sf(d)
                }, 1)
            } catch (d) {}
    }
    ;
    _.Af = function(a, b, c, d, e) {
        c = void 0 === c ? !1 : c;
        d = void 0 === d ? !1 : d;
        e = void 0 === e ? wf : e;
        return function() {
            var f = vc.apply(0, arguments)
              , g = void 0
              , h = !1
              , k = null
              , l = Ef.N();
            try {
                var m = _.F(Ff);
                m && l && (k = l.start(a.toString(), 3));
                g = b.apply(this, f);
                h = !0;
                m && l && l.end(k)
            } catch (n) {
                try {
                    if (h)
                        Gf.call(this, 110, n, e);
                    else if (Gf.call(this, a, n, e),
                    !c)
                        throw n;
                } catch (q) {
                    if (k && Hf && If() && (Hf.clearMarks("goog_" + k.label + "_" + k.uniqueId + "_start"),
                    Hf.clearMarks("goog_" + k.label + "_" + k.uniqueId + "_end")),
                    !h && !c)
                        throw n;
                }
            }
            d && Df.call(this, a, f.length);
            return g
        }
    }
    ;
    _.Jf = function(a, b, c) {
        var d = void 0 === d ? wf : d;
        return _.Af(a, b, void 0 === c ? !1 : c, !1, d)()
    }
    ;
    Gf = function(a, b, c) {
        c = void 0 === c ? wf : c;
        b = b.error && b.meta && b.id ? b.error : b;
        if (_.F(Kf)) {
            if (c = c(),
            c.Ee) {
                var d = new Lf
                  , e = new Mf;
                try {
                    var f = dd(window);
                    Db(e, 1, f, 0)
                } catch (r) {}
                try {
                    var g = ed().m();
                    Nf(e, 2, g)
                } catch (r) {}
                try {
                    Db(e, 3, window.document.URL, "")
                } catch (r) {}
                f = Of(d, 2, e);
                g = new Pf;
                a = Db(g, 1, a, 0);
                try {
                    var h = Re(null === b || void 0 === b ? void 0 : b.name) ? b.name : "Unknown error";
                    Db(a, 2, h, "")
                } catch (r) {}
                try {
                    var k = Re(null === b || void 0 === b ? void 0 : b.message) ? b.message : "Caught " + b;
                    Db(a, 3, k, "")
                } catch (r) {}
                try {
                    var l = Re(null === b || void 0 === b ? void 0 : b.stack) ? b.stack : Error().stack;
                    l && Nf(a, 4, l.split(/\n\s*/))
                } catch (r) {}
                h = Of(f, 1, a);
                k = new Qf;
                try {
                    var m = De();
                    Db(k, 1, m, "")
                } catch (r) {}
                try {
                    var n = Rf();
                    Db(k, 2, n, 0)
                } catch (r) {}
                try {
                    var q = [].concat(_.yc(_.u(Sf, "keys").call(Sf)));
                    Nf(k, 3, q)
                } catch (r) {}
                ef(h, 4, Tf, k);
                Db(h, 5, c.Pd, 0);
                zc(c.zb, h)
            }
        } else
            vf.call(this, a, b)
    }
    ;
    Vf = function(a, b) {
        var c;
        a = _.u(a, "find").call(a, function(d) {
            d = (0,
            E.I)(Yb(d, Uf, 1));
            return d.getWidth() <= b.getWidth() && d.getHeight() <= b.getHeight()
        });
        return null !== (c = null === a || void 0 === a ? void 0 : Wb(a, Uf, 2)) && void 0 !== c ? c : null
    }
    ;
    Zf = function(a, b, c) {
        return "number" === typeof b && "number" === typeof c && Wb(a, Wf, 6).length ? Vf(Wb(a, Wf, 6), Xf(Yf(new Uf, b), c)) : Wb(a, Uf, 5)
    }
    ;
    ag = function(a) {
        var b = void 0 === b ? window : b;
        var c = null;
        b.top === b && (b = $f(!1, b),
        c = Zf(a, b.width, b.height));
        null !== c && void 0 !== c ? c : c = Zf(a);
        return null == c ? [] : c.map(function(d) {
            return D(d, 3) ? "fluid" : [(0,
            E.wa)(d.getWidth()), (0,
            E.wa)(d.getHeight())]
        })
    }
    ;
    cg = function(a) {
        if (!ag(a).length && bg(a, 16))
            return "1x1";
        var b = []
          , c = !1;
        a = _.y(ag(a));
        for (var d = a.next(); !d.done; d = a.next())
            d = d.value,
            Array.isArray(d) ? b.push(d.join("x")) : "fluid" === d ? c = !0 : b.push(d);
        c && b.unshift("320x50");
        return b.join("|")
    }
    ;
    eg = function(a, b) {
        b = void 0 === b ? null : b;
        var c = [];
        a && (c.push(a.getAdUnitPath()),
        c.push(cg(a)),
        c.push(a.getDomId()));
        if (b) {
            a = [];
            for (var d = 0; b && 25 > d; b = b.parentNode,
            ++d)
                9 === b.nodeType ? a.push("") : a.push(b.id);
            (b = a.join()) && c.push(b)
        }
        return c.length ? dg(c.join(":")).toString() : "0"
    }
    ;
    fg = function(a) {
        return 0 !== a && 1 !== a
    }
    ;
    gg = function(a, b) {
        var c;
        return !(null !== (c = D(b, 22)) && void 0 !== c ? !c : !D(a, 15))
    }
    ;
    ig = function(a, b) {
        var c, d;
        return null !== (d = null !== (c = null === b || void 0 === b ? void 0 : b.get(a)) && void 0 !== c ? c : null === b || void 0 === b ? void 0 : b.get(dg(a))) && void 0 !== d ? d : 1E6 * _.bd(hg)
    }
    ;
    lg = function(a) {
        var b, c = (0,
        E.I)(null === (b = a.pbjs) || void 0 === b ? void 0 : b.que), d = function() {
            var e, f;
            null === (f = null === (e = a.pbjs) || void 0 === e ? void 0 : e.requestBids) || void 0 === f ? void 0 : f.before.call(a, function(g, h) {
                return we().pbjs_hooks.push({
                    context: a,
                    nextFunction: g,
                    requestBidsConfig: h
                })
            }, 0)
        };
        c.hasOwnProperty("push") ? c.push(d) : c.unshift(d)
    }
    ;
    ug = function(a, b, c) {
        c = (c = void 0 === c ? null : c) ? Vc(c) : null;
        b = (void 0 === b ? 0 : b) ? _.bd(_.mg) || 3600 : -1;
        var d = 0;
        try {
            d |= a != a.top ? 512 : 0,
            d |= a.navigator && /Android 2/.test(a.navigator.userAgent) ? 1048576 : 0,
            _.F(ng) && null == window.IntersectionObserver && (d |= 2097152)
        } catch (g) {
            d |= 32
        }
        var e = 0;
        try {
            e |= og(a, 2500);
            if (_.F(pg)) {
                var f = _.qg(a).clientHeight;
                e |= f ? 320 > f ? -2147483648 : 0 : 1073741824
            }
            e |= rg(a);
            0 < b && !_.sg(_.tg(c, b)) && (e |= 134217728)
        } catch (g) {
            e |= 32
        }
        return d | e
    }
    ;
    yg = function(a, b, c, d) {
        if (5 !== vg(b) || _.F(wg))
            return !1;
        var e = ug(c, "22639388115" !== ve(a.getAdUnitPath()), d);
        e && Cf("gpt_int_ns", function(f) {
            G(f, "nsr", e);
            sf(f)
        }, _.bd(xg));
        return !!e
    }
    ;
    Ag = function(a) {
        var b = a.document;
        return zg(a) ? b.URL : b.referrer
    }
    ;
    Dg = function(a) {
        try {
            return Bg(a, window.top)
        } catch (b) {
            return new _.Cg(-12245933,-12245933)
        }
    }
    ;
    Gg = function(a) {
        var b;
        if (!a)
            return null;
        a.getBoundingClientRect ? (a = _.pe(Eg, a),
        a = new _.Fg(a.right - a.left,a.bottom - a.top)) : a = null;
        return null !== (b = null === a || void 0 === a ? void 0 : a.floor()) && void 0 !== b ? b : null
    }
    ;
    Jg = function(a, b) {
        for (var c = {}, d = _.y(_.u(Object, "keys").call(Object, b)), e = d.next(); !e.done; e = d.next()) {
            e = e.value;
            var f = Ob(b[e])
              , g = Hg.N()
              , h = g.j.get(e);
            null == h ? h = ++Ef.N().m : g.j.delete(e);
            w(f, 20, h);
            c[e] = f
        }
        a = Ob(a);
        b = new Date(Date.now());
        b = b.getUTCFullYear() + Ig(b.getUTCMonth() + 1) + Ig(b.getUTCDate());
        return {
            T: a,
            O: c,
            Zb: b
        }
    }
    ;
    Kg = function() {
        var a, b, c;
        if ("function" === typeof (null === (a = window.crypto) || void 0 === a ? void 0 : a.getRandomValues)) {
            var d = new Uint8Array(16);
            null === (b = window.crypto) || void 0 === b ? void 0 : b.getRandomValues(d);
            return d
        }
        d = window;
        if ("function" === typeof (null === (c = d.msCrypto) || void 0 === c ? void 0 : c.getRandomValues)) {
            var e = new Uint8Array(16);
            d.msCrypto.getRandomValues(e);
            return e
        }
        d = Array(16);
        for (e = 0; e < d.length; e++)
            d[e] = Math.floor(255 * Math.random());
        return d
    }
    ;
    Ng = function(a, b) {
        return Lg(a, b) || Mg(a, b)
    }
    ;
    Sg = function(a, b, c, d) {
        var e, f, g = Ng(b, a);
        if (!g)
            return null;
        var h = Dg(g)
          , k = g === Mg(b, a)
          , l = Og(function() {
            var q = k ? Mg(b, a) : g;
            return q && Pg(q, window)
        })
          , m = function(q) {
            var r;
            return null === (r = l()) || void 0 === r ? void 0 : r.getPropertyValue(q)
        };
        c = ag(c)[0];
        var n = !1;
        Array.isArray(c) && (n = d ? k : 0 === h.x && "center" === m("text-align"));
        n && (h.x += Math.round(Math.max(0, (k ? g.clientWidth : g.parentElement.clientWidth) - Number(c[0])) / 2));
        k && (h.y += Math.round(Math.min(null !== (e = Qg(m("padding-top"))) && void 0 !== e ? e : 0, g.clientHeight)),
        n || (d = g.clientWidth,
        h.x += Math.round(Math.min(null !== (f = Qg(m("padding-left"))) && void 0 !== f ? f : 0, d))));
        return h && Rg(g) ? h : new _.Cg(-12245933,-12245933)
    }
    ;
    Tg = function(a, b, c, d) {
        var e = Mg(a, c)
          , f = "none" === (null === e || void 0 === e ? void 0 : e.style.display);
        f && (e.style.display = "block");
        a = Sg(c, a, b, d);
        f && (e.style.display = "none");
        return a
    }
    ;
    Ug = function(a) {
        return "google_ads_iframe_" + a.toString()
    }
    ;
    Vg = function(a) {
        return Ug(a) + "__container__"
    }
    ;
    Lg = function(a, b) {
        b = Mg(a, b);
        return (null === b || void 0 === b ? void 0 : b.querySelector('[id="' + Vg(a) + '"]')) || null
    }
    ;
    Wg = function(a, b) {
        var c, d;
        return null !== (d = null === (c = Lg(a, b)) || void 0 === c ? void 0 : c.querySelector('iframe[id="' + Ug(a) + '"]')) && void 0 !== d ? d : null
    }
    ;
    Zg = function(a, b) {
        for (var c = new Xg, d = 0; d < a.length; d++)
            c.set(a.length - d - 1, b(a[d]));
        return Yg(c)
    }
    ;
    $g = function(a, b, c, d) {
        var e = 0;
        e = void 0 === e ? "" : e;
        c = void 0 === c ? function(l) {
            return !!l
        }
        : c;
        d = void 0 === d ? "," : d;
        var f = []
          , g = !1;
        a = _.y(a);
        for (var h = a.next(); !h.done; h = a.next()) {
            var k = (h = b(h.value)) ? c(h) : !1;
            g = g || k;
            f.push(String(k ? h : e))
        }
        return g ? f.join(d) : null
    }
    ;
    ah = function(a) {
        var b = window, c, d;
        try {
            null === (d = null === (c = b.performance) || void 0 === c ? void 0 : c.mark) || void 0 === d ? void 0 : d.call(c, a)
        } catch (e) {}
    }
    ;
    Mg = function(a, b) {
        b = void 0 === b ? document : b;
        return lf.N().F.get(a) || b.getElementById(a.getDomId())
    }
    ;
    eh = function(a) {
        return _.qf[260] ? _.bh(ch).M.then(_.Af(895, function() {
            return dh(a)
        })) : v.Promise.resolve(dh(a))
    }
    ;
    fh = function(a) {
        return Math.round(Number(Qg(a)))
    }
    ;
    hh = function(a, b, c) {
        for (var d = 100; a && a !== b && --d; )
            _.gh(a, c),
            a = a.parentElement
    }
    ;
    ih = function(a, b, c, d, e) {
        _.gh(a, {
            "margin-left": "0px",
            "margin-right": "0px"
        });
        var f = {
            "z-index": "0"
        };
        "absolute" !== d.position && "fixed" !== d.position && "relative" !== d.position && (f.position = "relative");
        var g = "rtl" === d.direction
          , h = ((e && -12245933 !== e.width ? e.width : b.innerWidth) - c) / 2;
        d = function() {
            var k = a.getBoundingClientRect().left;
            return g ? h - k : k - h
        }
        ;
        b = d();
        return 0 !== b ? (c = function(k) {
            g ? f["margin-right"] = k + "px" : f["margin-left"] = k + "px"
        }
        ,
        c(-b),
        _.gh(a, f),
        d = d(),
        0 !== d && b !== d && (c(b / (d - b) * b),
        _.gh(a, f)),
        !0) : !1
    }
    ;
    kh = function(a, b, c, d, e, f, g, h) {
        var k = cg(c);
        _.t.setTimeout(_.Af(459, function() {
            return void jh(a, b, d, e, f, k, g, h)
        }), 500)
    }
    ;
    jh = function(a, b, c, d, e, f, g, h) {
        var k;
        if (_.t.IntersectionObserver) {
            var l = null
              , m = null !== (k = Wg(b, a)) && void 0 !== k ? k : Mg(b, a)
              , n = _.Af(459, function(q) {
                if (q = q && q[0]) {
                    var r = q.boundingClientRect
                      , z = window.innerWidth
                      , A = Math.round(r.left)
                      , I = Math.round(r.right)
                      , H = 0 > A + 2
                      , V = 0 < I - (z + 2);
                    if (q.intersectionRatio >= 1 - ((0 <= Math.round(r.left) ? 0 : 2) + (Math.round(r.right) <= window.innerWidth ? 0 : 2)) / d || H || V)
                        Cf(g, function(T) {
                            if (H || V) {
                                var ea = new Xg;
                                ea.set(8);
                                lh(m) && ea.set(10);
                                ea = Yg(ea)
                            } else
                                ea = mh(a, b);
                            var K = nh(b, m, e)
                              , P = K.de;
                            K = K.ee;
                            sf(T);
                            G(T, "qid", h);
                            G(T, "iu", b.getAdUnitPath());
                            G(T, "e", String(ea));
                            H && G(T, "ofl", String(A));
                            V && G(T, "ofr", String(I - z));
                            G(T, "ret", d + "x" + e);
                            G(T, "req", f);
                            G(T, "bm", String(c));
                            G(T, "efh", Number(P));
                            G(T, "stk", Number(K));
                            G(T, "ifi", oh(window))
                        }, _.bd(ph)),
                        l && l.unobserve((0,
                        E.I)(m))
                }
            });
            m && (l = new _.t.IntersectionObserver(n,{
                threshold: [1]
            }),
            (0,
            E.I)(l).observe(m))
        }
    }
    ;
    mh = function(a, b) {
        var c = Wg(b, a) || Mg(b, a)
          , d = new Xg;
        try {
            var e = c.getBoundingClientRect()
              , f = e.left
              , g = e.top
              , h = e.width
              , k = e.height
              , l = Mg(b, a)
              , m = (0,
            E.I)(Pg(l, window));
            if ("hidden" === m.visibility || "none" === m.display)
                return Yg(d);
            var n = fh(m.getPropertyValue("border-top-width") || 0) + 1;
            b = f + h;
            k = g + k;
            var q = a.elementsFromPoint(f + n + 2, g + n);
            var r = a.elementsFromPoint(b - n - 2, g + n);
            var z = a.elementsFromPoint(b - n - 2, k - n);
            var A = a.elementsFromPoint(f + n + 2, k - n);
            var I = a.elementsFromPoint(b / 2, k - n)
        } catch (V) {
            return d.set(1),
            Yg(d)
        }
        if (!(q && q.length && r && r.length && z && z.length && A && A.length && I && I.length))
            return d.set(7),
            Yg(d);
        a = function(V, T) {
            for (var ea = !1, K = 0; K < V.length; K++) {
                var P = V[K];
                if (ea) {
                    var S = Pg(P, window);
                    if ("hidden" !== S.visibility && !qh(P) && !H(c, P)) {
                        d.set(T);
                        "absolute" === S.position && d.set(11);
                        break
                    }
                } else
                    c === P && (ea = !0)
            }
        }
        ;
        rh(c) && d.set(9);
        var H = function(V, T) {
            return sh(V, T) || sh(T, V)
        };
        f = q[0];
        c === f || H(c, f) || qh(f) || d.set(2);
        f = r[0];
        c === f || H(c, f) || qh(f) || d.set(3);
        f = z[0];
        c === f || H(c, f) || qh(f) || d.set(4);
        f = A[0];
        c === f || H(c, f) || qh(f) || d.set(5);
        if (qh(c))
            return Yg(d);
        a(q, 12);
        a(r, 13);
        a(z, 14);
        a(A, 15);
        a(I, 6);
        return Yg(d)
    }
    ;
    lh = function(a) {
        var b = !1
          , c = !1;
        return th(a, function(d) {
            c = c || "scroll" === d.overflowX || "auto" === d.overflowX;
            return (b = b || "flex" === d.display) && c
        })
    }
    ;
    nh = function(a, b, c) {
        var d = (a = Mg(a)) && Pg(a, window)
          , e = d ? "absolute" !== d.position : !0
          , f = !1
          , g = a && a.parentElement
          , h = !1;
        uh(b, function(k) {
            var l = k.style;
            if (e)
                if (h || (h = k === g))
                    e = vh(k, _.t, -1, -1);
                else {
                    l = l && l.height;
                    var m = (l && _.u(l, "endsWith").call(l, "px") ? fh(l) : 0) >= c;
                    !l || m || "string" === typeof l && _.u(wh, "includes").call(wh, l) || (e = !1)
                }
            f || (k = Pg(k, _.t),
            "sticky" !== k.position && "fixed" !== k.position) || (f = !0);
            return !(f && !e)
        }, 100);
        return {
            de: e,
            ee: f
        }
    }
    ;
    vh = function(a, b, c, d) {
        var e = a.style;
        return (null === e || void 0 === e ? 0 : e.height) && !_.u(wh, "includes").call(wh, e.height) || (null === e || void 0 === e ? 0 : e.maxHeight) && !_.u(yh, "includes").call(yh, e.maxHeight) || zh(a, b.document, function(f) {
            var g = f.style.height;
            f = f.style.getPropertyValue("max-height");
            return !!g && !_.u(wh, "includes").call(wh, g) || !!f && !_.u(yh, "includes").call(yh, f)
        }, c, d) ? !1 : !0
    }
    ;
    zh = function(a, b, c, d, e) {
        b = b.styleSheets;
        if (!b)
            return !1;
        var f = a.matches || a.msMatchesSelector;
        d = -1 === d ? Infinity : d;
        e = -1 === e ? Infinity : e;
        for (var g = 0; g < Math.min(b.length, d); ++g) {
            var h = null;
            try {
                var k = b[g]
                  , l = null;
                try {
                    l = k.cssRules || k.rules
                } catch (H) {
                    if (15 == H.code)
                        throw H.styleSheet = k,
                        H;
                }
                h = l
            } catch (H) {
                continue
            }
            if (null !== h && void 0 !== h && h.length)
                for (l = 0; l < Math.min(h.length, e); ++l) {
                    var m = h[l];
                    var n = c;
                    if (!(n = f.call(a, m.selectorText) && n(m)))
                        a: {
                            var q = void 0;
                            n = a;
                            var r = c
                              , z = e;
                            m = null !== (q = m.cssRules) && void 0 !== q ? q : [];
                            for (q = 0; q < Math.min(m.length, z); q++) {
                                var A = m[q]
                                  , I = r;
                                if (f.call(n, A.selectorText) && I(A)) {
                                    n = !0;
                                    break a
                                }
                            }
                            n = !1
                        }
                    if (n)
                        return !0
                }
        }
        return !1
    }
    ;
    Ah = function(a) {
        return "number" === typeof a || "string" === typeof a
    }
    ;
    Bh = function(a) {
        switch (a) {
        case void 0:
        case null:
        case 2:
            return !1;
        case 0:
        case 1:
            return !0;
        default:
            throw Error("Unexpected encryption mode: " + a);
        }
    }
    ;
    Dh = function(a, b, c) {
        c = void 0 === c ? Ch : c;
        a.goog_sdr_l || (Object.defineProperty(a, "goog_sdr_l", {
            value: !0
        }),
        "complete" === a.document.readyState ? c(a, b) : _.eb(a, "load", function() {
            return void c(a, b)
        }))
    }
    ;
    Eh = function(a) {
        var b, c;
        try {
            return (null !== (c = null === (b = a.top) || void 0 === b ? void 0 : b.frames) && void 0 !== c ? c : {}).google_ads_top_frame
        } catch (d) {}
        return null
    }
    ;
    Fh = function(a) {
        var b = RegExp("^https?://[^/#?]+/?$");
        return !!a && !b.test(a)
    }
    ;
    Gh = function(a) {
        if (a === a.top || qc(a.top))
            return v.Promise.resolve({
                status: 4
            });
        var b = Eh(a);
        if (!b)
            return v.Promise.resolve({
                status: 2
            });
        if (a.parent === a.top && Fh(a.document.referrer))
            return v.Promise.resolve({
                status: 3
            });
        var c = new ie;
        a = new MessageChannel;
        a.port1.onmessage = function(d) {
            "__goog_top_url_resp" === d.data.msgType && c.resolve({
                tb: d.data.topUrl,
                status: d.data.topUrl ? 0 : 1
            })
        }
        ;
        b.postMessage({
            msgType: "__goog_top_url_req"
        }, "*", [a.port2]);
        return c.promise
    }
    ;
    Hh = function(a) {
        var b = "";
        pc(function(c) {
            var d;
            if (c === c.top)
                return !0;
            if (null === (d = c.document) || void 0 === d ? 0 : d.referrer)
                b = c.document.referrer;
            return !1
        }, !1, !1, a);
        return b
    }
    ;
    Ih = function(a) {
        var b;
        if (a = null === (b = a.navigator) || void 0 === b ? void 0 : b.userActivation) {
            var c = 0;
            if (null === a || void 0 === a ? 0 : a.hasBeenActive)
                c |= 1;
            if (null === a || void 0 === a ? 0 : a.isActive)
                c |= 2;
            return c
        }
    }
    ;
    Jh = function(a) {
        return !!a && !!x(a, 1)
    }
    ;
    Lh = function(a) {
        a = (qc(a.top) ? a.top : a).AMP;
        return "object" === typeof a && !!Kh(a, function(b, c) {
            return !/^inabox/i.test(c)
        })
    }
    ;
    Nh = function(a) {
        return new v.Map([["arp", {
            value: Lh(a) ? 1 : null
        }], ["abxe", {
            value: qc(a.top) || Mh(a.IntersectionObserver) ? 1 : null
        }]])
    }
    ;
    Qh = function(a) {
        return (0,
        E.wa)(Oh(a, function() {
            return new Ph(a)
        }))
    }
    ;
    Rh = function(a) {
        switch (Number(a)) {
        case 2:
        case 3:
            return "Anchor";
        case 5:
            return "Interstitial";
        default:
            return "Out-of-page creative"
        }
    }
    ;
    L = function(a) {
        return function() {
            return new Sh(a,[].concat(_.yc(vc.apply(0, arguments))))
        }
    }
    ;
    Th = function(a) {
        return "[" + a.map(function(b) {
            return "string" === typeof b ? "'" + b + "'" : Array.isArray(b) ? Th(b) : String(b)
        }).join(", ") + "]"
    }
    ;
    Uh = function(a, b) {
        b = Th(b);
        b = b.substring(1, b.length - 1);
        return new Sh(96,[a, b])
    }
    ;
    Xh = function(a) {
        var b;
        return _.F(Vh) && "rewardedSlotCanceled" === a ? null : null !== (b = (C = _.u(Object, "values").call(Object, Wh),
        _.u(C, "find")).call(C, function(c) {
            return c === a
        })) && void 0 !== b ? b : null
    }
    ;
    fi = function(a, b, c, d, e) {
        if ("string" !== typeof c || Yh(c))
            M(e, Uh("Slot.setTargeting", [c, d]), a);
        else {
            var f = [];
            Array.isArray(d) ? f = d : Zh(d) ? f = _.u(Array, "from").call(Array, d) : d && (f = [d]);
            f = f.map(String);
            (d = (C = Wb(b, $h, 9),
            _.u(C, "find")).call(C, function(g) {
                return ai(g) === c
            })) ? bi(d, f) : (d = bi(ci(new $h, c), f),
            di(b, 9, $h, d));
            e.info(ei(c, f.join(), (0,
            E.I)(b.getAdUnitPath())), a)
        }
    }
    ;
    gi = function(a, b, c, d) {
        if (null != c && "object" === typeof c)
            for (var e = _.y(_.u(Object, "keys").call(Object, c)), f = e.next(); !f.done; f = e.next())
                f = f.value,
                fi(a, b, f, c[f], d);
        else
            d.error(Uh("Slot.updateTargetingFromMap", [c]), a)
    }
    ;
    ji = function() {
        for (var a = hi(ii) || "0-0-0", b = a.split("-").map(function(e) {
            return Number(e)
        }), c = ["1", "0", "38"].map(function(e) {
            return Number(e)
        }), d = 0; d < b.length; d++) {
            if (b[d] > c[d])
                return a;
            if (b[d] < c[d])
                break
        }
        return "1-0-38"
    }
    ;
    si = function(a) {
        if (!a || !_.ia(a))
            return null;
        var b = !1
          , c = new ki;
        _.tf(a, function(d, e) {
            var f = !1;
            switch (e) {
            case "allowOverlayExpansion":
                "boolean" === typeof d ? w(c, 1, a.allowOverlayExpansion) : b = f = !0;
                break;
            case "allowPushExpansion":
                "boolean" === typeof d ? w(c, 2, a.allowPushExpansion) : b = f = !0;
                break;
            case "sandbox":
                !0 === d ? w(c, 3, a.sandbox) : b = f = !0;
                break;
            case "useUniqueDomain":
                if (_.F(li)) {
                    mi();
                    return
                }
                _.F(ni) && oi();
                "boolean" === typeof d ? w(c, 4, a.useUniqueDomain) : null !== d && (b = f = !0);
                break;
            default:
                f = !0
            }
            f && pi().error(qi("setSafeFrameConfig", ri(a), e, ri(d)))
        });
        return b ? null : c
    }
    ;
    ti = function(a) {
        var b = new ki;
        a = _.y(a);
        for (var c = a.next(); !c.done; c = a.next())
            if (c = c.value)
                bg(c, 1) && w(b, 1, D(c, 1)),
                bg(c, 2) && w(b, 2, D(c, 2)),
                bg(c, 3) && w(b, 3, D(c, 3)),
                bg(c, 4) && w(b, 4, D(c, 4));
        return b
    }
    ;
    vi = function(a) {
        return Array.isArray(a) && 2 === a.length ? a.every(ui) : "fluid" === a
    }
    ;
    wi = function(a) {
        return Array.isArray(a) && 2 === a.length && ui(a[0]) && ui(a[1])
    }
    ;
    yi = function(a) {
        return Array.isArray(a) ? Xf(Yf(new Uf, (0,
        E.wa)(a[0])), (0,
        E.wa)(a[1])) : xi()
    }
    ;
    Di = function(a) {
        var b = [];
        if (zi(a))
            b.push(yi((0,
            E.I)(a)));
        else if (Array.isArray(a)) {
            a = _.y(a);
            for (var c = a.next(); !c.done; c = a.next())
                if (c = c.value,
                zi(c))
                    b.push(yi((0,
                    E.I)(c)));
                else {
                    a: {
                        var d = ["fluid"];
                        if (Zh(c) && Zh(d) && c.length == d.length) {
                            for (var e = c.length, f = qa, g = 0; g < e; g++)
                                if (!f(c[g], d[g])) {
                                    c = !1;
                                    break a
                                }
                            c = !0
                        } else
                            c = !1
                    }
                    c && b.push(xi())
                }
        }
        return b
    }
    ;
    Ei = function(a) {
        if (!Array.isArray(a) || 2 !== a.length)
            return null;
        var b = a[0];
        a = a[1];
        if ("number" === typeof b && 0 <= b)
            b = Math.floor(b);
        else if (null !== b)
            return null;
        if ("number" === typeof a && 0 <= a)
            a = Math.floor(a);
        else if (null !== a)
            return null;
        return Xf(Yf(new Uf, b), a)
    }
    ;
    Gi = function(a) {
        var b = void 0 === b ? window : b;
        var c, d;
        if (!a)
            return {
                tc: [],
                Ha: null
            };
        if (Array.isArray(a) ? 0 : Array.isArray(a.fixed) || "fluid" === a.fixed || Array.isArray(a.max)) {
            var e = Di(a.fixed), f;
            if (f = Ei(a.max)) {
                var g = a.min ? Ei(a.min) : new Uf;
                null == (null === g || void 0 === g ? void 0 : g.getWidth()) && (null === g || void 0 === g ? void 0 : Yf(g, 0));
                null == (null === g || void 0 === g ? void 0 : g.getHeight()) && (null === g || void 0 === g ? void 0 : Xf(g, 0));
                f = {
                    max: f,
                    min: g
                }
            } else
                f = {
                    max: null,
                    min: null
                };
            g = f;
            f = g.max;
            g = g.min;
            var h;
            if (a.max && !f)
                throw Error("Invalid GPT maximum size: " + JSON.stringify(a));
            if (a.min && !g)
                throw Error("Invalid GPT minimum size: " + JSON.stringify(a));
            if (null !== (h = a.fixed) && void 0 !== h && h.length || f) {
                b = (0,
                E.I)(f);
                if (0 === b.getWidth() || 0 === b.getHeight())
                    throw Error("Invalid GPT size,\n        maximums cannot be zero: " + JSON.stringify(a));
                if (g) {
                    h = (0,
                    E.I)(g);
                    var k = h.getWidth();
                    var l = b.getWidth();
                    if (null != k && null != l && k > l)
                        throw Error("Invalid GPT size: minimum width larger than maximum width: " + JSON.stringify(a));
                    h = h.getHeight();
                    b = b.getHeight();
                    if (null != h && null != b && h > b)
                        throw Error(" Invalid GPT size: minimum height larger than maximum height: " + JSON.stringify(a));
                }
            } else
                null === (l = null === (k = b.console) || void 0 === k ? void 0 : k.warn) || void 0 === l ? void 0 : l.call(k, "Invalid GPT fixed size specification: " + JSON.stringify(a));
            f && g ? (a = new Fi,
            a = Of(a, 1, f),
            a = Of(a, 2, g)) : a = null;
            return {
                tc: e,
                Ha: a
            }
        }
        a.length || (null === (d = null === (c = b.console) || void 0 === c ? void 0 : c.warn) || void 0 === d ? void 0 : d.call(c, "Invalid GPT fixed size specification: " + JSON.stringify(a)));
        return {
            tc: Di(a),
            Ha: null
        }
    }
    ;
    zi = function(a) {
        return Array.isArray(a) && 1 < a.length ? "number" === typeof a[0] && "number" === typeof a[1] : "fluid" === a
    }
    ;
    Ji = function(a) {
        if (!Array.isArray(a) || 2 !== a.length)
            throw new Hi("Each mapping entry must be an array of size 2");
        var b = a[0];
        if (!wi(b))
            throw new Hi("Size must be an array of two non-negative integers");
        b = Xf(Yf(new Uf, b[0]), b[1]);
        if (Array.isArray(a[1]) && 0 === a[1].length)
            a = [];
        else if (a = Di(a[1]),
        0 === a.length)
            throw new Hi("At least one slot size must be present");
        var c = new Wf;
        b = Of(c, 1, b);
        return Ii(b, 2, a)
    }
    ;
    Li = function(a) {
        return Oh(a, function() {
            return new Ki(a)
        })
    }
    ;
    Mi = function(a) {
        if (4 === a)
            return 11;
        switch (a) {
        case 2:
            return 2;
        case 3:
            return 1;
        case 5:
            return 8;
        default:
            return null
        }
    }
    ;
    Vi = function(a) {
        a = Mi(a);
        if (!a)
            return null;
        var b = 0;
        if (11 !== a) {
            b |= _.t != _.t.top ? 512 : 0;
            var c = _.Ni(_.t);
            c = 26 !== a && 27 !== a && 40 !== a && 10 !== a && c.adCount ? 1 == a || 2 == a ? !(!c.adCount[1] && !c.adCount[2]) : (c = c.adCount[a]) ? 1 <= c : !1 : !1;
            c && (b |= 64);
            if (b)
                return b
        }
        if (2 === a || 1 === a) {
            0 !== Oi() || _.F(_.Pi) || (b |= 536870912);
            var d = {
                ka: _.t,
                $c: Qi
            };
            _.F(_.Pi) && (d.$c = 3E3,
            d.bd = 650);
            c = 0;
            try {
                var e = d.ka;
                c |= e != e.top ? 512 : 0;
                var f = d.ka
                  , g = Math.min(f.screen.width || 0, f.screen.height || 0);
                e = c |= g ? 320 > g ? 8192 : 0 : 2048;
                var h = d.ka, k;
                if (k = h.navigator) {
                    var l = h.navigator.userAgent;
                    k = !_.F(Ri) && /Firefox/.test(l) || /Android 2/.test(l) || /iPhone OS [34]_/.test(l) || /Windows Phone (?:OS )?[67]/.test(l) || /MSIE.*Windows NT/.test(l) || /Windows NT.*Trident/.test(l)
                }
                c = e | (k ? 1048576 : 0);
                c = d.bd ? c | (d.ka.innerHeight >= d.bd ? 0 : 1024) : c | (_.Si(d.ka) ? 0 : 8);
                c |= og(d.ka, d.$c);
                c |= rg(d.ka)
            } catch (m) {
                c |= 32
            }
            switch (d.Kf) {
            case 2:
                h = d.ka;
                k = d.Sa;
                k = void 0 === k ? null : k;
                l = Ti(h.innerWidth, 0, Math.min(Math.round(h.innerWidth / 320 * 50), Ui) + 15);
                null != ne(h, l, void 0 === k ? null : k) && (c |= 16777216);
                break;
            case 1:
                h = d.ka,
                k = d.Sa,
                k = void 0 === k ? null : k,
                l = h.innerWidth,
                e = h.innerHeight,
                f = Math.min(Math.round(h.innerWidth / 320 * 50), Ui) + 15,
                g = Ti(l, e - f, e),
                25 < f && g.push({
                    x: l - 25,
                    y: e - 25
                }),
                null != ne(h, g, void 0 === k ? null : k) && (c |= 16777216)
            }
            b |= c
        } else
            8 === a ? b |= ug(_.t) : 11 !== a && (b |= 32);
        b || (c = _.Ni(_.t),
        c.adCount = c.adCount || {},
        c.adCount[a] = c.adCount[a] + 1 || 1);
        return b
    }
    ;
    Xi = function(a) {
        var b = new RegExp("(^|,|/)" + a + "($|,|/)");
        return [].concat(_.yc(_.bh(Wi).da)).some(function(c) {
            return b.test(ve(c.getAdUnitPath()))
        })
    }
    ;
    dj = function(a) {
        var b = pi()
          , c = Yi(a)
          , d = c.slotId
          , e = c.Ld;
        c = c.Md;
        if (d) {
            if (c = lf.N(),
            (a = Zi(c, d.getDomId())) && !D(a, 19))
                if (e && c.F.set(d, e),
                Mg(d) || fg(vg(a)))
                    for (w(a, 19, !0),
                    b = Jg(c.j, c.m),
                    e = _.y($i(a, 4)),
                    a = e.next(); !a.done; a = e.next())
                        a = ze(a.value),
                        a = (0,
                        E.I)(aj.get((0,
                        E.I)(a))),
                        a.isEnabled() && a.Lc(b, d);
                else
                    M(b, bj(String(a.getAdUnitPath()), String(a.getDomId())), d)
        } else
            c ? b.error(cj(c)) : b.error(Uh("googletag.display", [String(a)]))
    }
    ;
    ej = function() {
        xe("display", J(95, function(a) {
            return void dj(a)
        }))
    }
    ;
    Yi = function(a) {
        var b, c = null, d = null, e = "";
        c = _.bh(Wi);
        "string" === typeof a ? (e = a,
        c = fj(c, e)) : _.ia(a) && 1 == a.nodeType ? (d = a,
        e = d.id,
        c = fj(c, e)) : c = null !== (b = (C = [].concat(_.yc(c.da)),
        _.u(C, "find")).call(C, function(f) {
            return f.j === a
        })) && void 0 !== b ? b : null;
        return {
            slotId: c,
            Ld: d,
            Md: e
        }
    }
    ;
    hj = function(a) {
        return Oh(a, function() {
            return new gj(a)
        })
    }
    ;
    jj = function(a) {
        return Oh(a, function() {
            return new ij(a)
        })
    }
    ;
    lj = function(a) {
        var b, c = Ag(a);
        return null !== (b = (C = ["google_debug", "dfpdeb", "google_console", "google_force_console", "googfc"],
        _.u(C, "find")).call(C, function(d) {
            return null !== kj(c, d)
        })) && void 0 !== b ? b : null
    }
    ;
    rj = function(a) {
        a = void 0 === a ? _.t : a;
        if (!mj) {
            var b = new rf("gpt_pubconsole_loaded");
            sf(b);
            G(b, "param", String(lj(a)));
            G(b, "api", String(nj));
            uf(b, 1);
            oj(a.document, pj(Wa(qj).toString()));
            mj = !0
        }
    }
    ;
    sj = function() {
        var a = void 0 === a ? _.t : a;
        we()._pubconsole_disable_ || null !== lj(a) && rj(a)
    }
    ;
    tj = function() {
        we()._pubconsole_disable_ = !0
    }
    ;
    wj = function() {
        uj && (we().console.openConsole(vj),
        vj = null,
        uj = !1)
    }
    ;
    xj = function(a) {
        a = void 0 === a ? "" : a;
        var b;
        nj = !0;
        (null === (b = we()) || void 0 === b ? 0 : b.console) ? we().console.openConsole(a) : (a && (vj = a),
        uj = !0,
        rj())
    }
    ;
    yj = function() {
        "complete" === _.t.document.readyState ? _.Jf(94, function() {
            sj()
        }) : _.eb(_.t, "load", _.Af(94, function() {
            sj()
        }));
        xe("disablePublisherConsole", J(93, tj));
        xe("onPubConsoleJsLoad", J(731, wj));
        xe("openConsole", J(732, xj))
    }
    ;
    Aj = function(a) {
        return Oh(a, function() {
            return new zj(a,a.j)
        })
    }
    ;
    Bj = function(a) {
        return _.u(Object, "assign").call(Object, _.u(Object, "assign").call(Object, {}, a), _.u(Object, "fromEntries").call(Object, _.u(Object, "entries").call(Object, a).map(function(b) {
            b = _.y(b);
            var c = b.next().value;
            return [b.next().value, c]
        })))
    }
    ;
    Cj = function(a, b) {
        var c;
        return !(null !== (c = D(a, 11)) && void 0 !== c ? !c : !D(b, 10))
    }
    ;
    Dj = function(a, b, c, d) {
        var e;
        if (a = Mg(a, b)) {
            if (c = null !== (e = D(c, 24)) && void 0 !== e ? e : D(d, 30))
                b = a.getBoundingClientRect(),
                d = b.top,
                c = b.bottom,
                0 === b.height ? c = !1 : (b = _.t.innerHeight,
                c = 0 < c && c < b || 0 < d && d < b);
            c || (a.style.display = "none")
        }
    }
    ;
    Ej = function(a, b) {
        return null === a || void 0 === a ? void 0 : a.replace(/\$\{AUCTION_PRICE\}/g, String(b))
    }
    ;
    Fj = function(a) {
        var b = {};
        a = _.y(a);
        for (var c = a.next(); !c.done; c = a.next())
            c = c.value,
            b[x(c, 1)] = x(c, 2);
        return b
    }
    ;
    Ij = function(a, b) {
        var c;
        return Gj(a, Hj, function(d) {
            d = d.detail.data;
            try {
                return c = JSON.parse(d),
                "rewarded" === c.type && c.message === b
            } catch (e) {
                return !1
            }
        }).then(function() {
            return c
        })
    }
    ;
    Kj = function(a) {
        Jj = a
    }
    ;
    Mj = function(a, b, c, d) {
        var e = _.Lj("DIV");
        e.id = b;
        e.name = b;
        b = e.style;
        b.border = "0pt none";
        c && (b.margin = "auto",
        b.textAlign = "center");
        d && (c = Array.isArray(d),
        b.width = c ? d[0] + "px" : "100%",
        b.height = c ? d[1] + "px" : "0%");
        a.appendChild(e);
        return e
    }
    ;
    Oj = function(a, b, c, d) {
        d = _.Lj((void 0 === d ? 0 : d) ? "fencedframe" : "IFRAME");
        d.id = a;
        d.title = b;
        d.name = a;
        Array.isArray(c) ? null != c[0] && null != c[1] && (d.width = String(c[0]),
        d.height = String(c[1])) : (d.width = "100%",
        d.height = "0");
        d.allowTransparency = "true";
        d.scrolling = "no";
        d.marginWidth = "0";
        d.marginHeight = "0";
        d.frameBorder = "0";
        d.style.border = "0";
        d.style.verticalAlign = "bottom";
        _.F(Nj) && (d.setAttribute("role", "region"),
        d.setAttribute("aria-label", "Advertisement"),
        d.tabIndex = 0);
        return d
    }
    ;
    Pj = function(a) {
        return "sticky" === (null === a || void 0 === a ? void 0 : a.position) || "fixed" === (null === a || void 0 === a ? void 0 : a.position)
    }
    ;
    Qj = function(a, b) {
        /^urn:uuid:[0-9a-fA-F-]*$/.test(b) && (b = pj(b),
        a.src = Xa(b))
    }
    ;
    Vj = function(a) {
        switch (a.id) {
        case 5:
            return new Rj(a);
        case 6:
            return new Sj(a);
        case 0:
            return new Tj(a);
        default:
            return new Uj(a)
        }
    }
    ;
    Wj = function(a) {
        if (!qc(a))
            return -1;
        a = a.pageYOffset;
        return 0 > a ? -1 : a
    }
    ;
    Yj = function(a) {
        var b = {
            threshold: [0, .3, .5, .75, 1]
        };
        return window.IntersectionObserver ? new IntersectionObserver(a,b) : new Xj(a,b)
    }
    ;
    Zj = function(a, b) {
        return "undefined" === typeof IntersectionObserver ? new Xj(b,{
            rootMargin: a
        }) : new IntersectionObserver(b,{
            rootMargin: a
        })
    }
    ;
    ak = function(a, b) {
        return a && (a = Yb(a, Uf, 1)) ? a.getWidth() || b.innerWidth : 0
    }
    ;
    bk = function(a, b) {
        return a && (a = Yb(a, Uf, 1)) ? a.getHeight() || b.innerHeight : 0
    }
    ;
    ck = function(a) {
        return a && (a = Yb(a, Uf, 2)) ? a.getWidth() || 0 : 0
    }
    ;
    dk = function(a) {
        return a && (a = Yb(a, Uf, 2)) ? a.getHeight() || 0 : 0
    }
    ;
    ek = function(a, b, c) {
        a = a.map(function(e) {
            return b[e.getDomId()]
        });
        var d = a.some(function(e) {
            return bg(e, 16)
        });
        return new v.Map([["rtgs", {
            value: d ? a.map(function(e) {
                return bg(e, 16) ? ag(e).length ? "1" : "2" : "0"
            }) : null,
            options: {
                xa: "!"
            }
        }], ["max_w", {
            value: d ? a.map(function(e) {
                return ak(Yb(e, Fi, 16), c)
            }) : null,
            options: {
                xa: "!"
            }
        }], ["max_h", {
            value: d ? a.map(function(e) {
                return bk(Yb(e, Fi, 16), c)
            }) : null,
            options: {
                xa: "!"
            }
        }], ["min_w", {
            value: d ? a.map(function(e) {
                return ck(Yb(e, Fi, 16))
            }) : null,
            options: {
                xa: "!"
            }
        }], ["min_h", {
            value: d ? a.map(function(e) {
                return dk(Yb(e, Fi, 16))
            }) : null,
            options: {
                xa: "!"
            }
        }]])
    }
    ;
    Vk = function(a, b, c, d, e, f, g) {
        var h = new rd
          , k = $f(!0, window)
          , l = c.T
          , m = c.O[a.getDomId()]
          , n = new fk(window);
        N(h, n);
        var q = d.Xd
          , r = d.nc
          , z = d.Bd
          , A = d.Od
          , I = d.be
          , H = d.Me
          , V = d.Yd
          , T = d.Ud
          , ea = d.Eb
          , K = d.Ne
          , P = d.Xc
          , S = d.Le
          , ba = d.Qe
          , ma = d.Re
          , ca = d.$d
          , Za = d.Oe
          , sb = d.Gb
          , Ha = d.Rd
          , Hb = d.Je
          , Nb = d.Ie
          , xh = d.qe
          , Xc = new gk(b,a,d.vb,d.Ab,d.ma,d.Te);
        N(h, Xc);
        d = new hk;
        d.j(f);
        f = new ik;
        f.notify();
        f = new jk(window.top,d,f);
        N(h, f);
        Ha = new kk(ve(a.getAdUnitPath()),Ha,f.C);
        N(h, Ha);
        var wb = new lk(vg(m),k.height,T,Xc.vb);
        N(h, wb);
        Ha = new mk(a,Mg(a, e),a.getDomId(),Vg(a),e,vg(m),b);
        N(h, Ha);
        var Ib = new nk(Xc.ma,z,A,I,H);
        N(h, Ib);
        H = new ok(l,m,window,z,A,H);
        N(h, H);
        ba = new pk(Yb(l, qk, 5),ba);
        N(h, ba);
        wb = new rk(a.getAdUnitPath(),m,k.width,window,ea,Xc.Ab,wb.C,Ib.ma,Ha.C);
        N(h, wb);
        ea = new sk(a,l,m,vg(m),e,b,Ha.C,H.C,wb.o,q);
        N(h, ea);
        Ib = new tk(ea.C);
        N(h, Ib);
        var Md = new uk(a,k,b,Ib.C,ba.l);
        N(h, Md);
        Ib = new vk(window,Ha.C);
        N(h, Ib);
        ma = new wk(Md.C,ea.C,ma,ba.l);
        N(h, ma);
        k = new xk(e,a,m,k,q,Ha.C,ea.C,wb.o,wb.Eb,Ib.C,r);
        N(h, k);
        ba = new yk(Nb);
        N(h, ba);
        Nb = new zk(Nb,ba.C,wb.ma,wb.o);
        N(h, Nb);
        H = new Ak(H.C,Nb.ma);
        N(h, H);
        K = new Bk(l,m,H.C,z,I,K);
        N(h, K);
        sb = new Ck(window,sb,n.C);
        N(h, sb);
        Za = new Dk(a,c,I,Za);
        N(h, Za);
        ba = new Ek(Hb);
        N(h, ba);
        wb = new Fk(e);
        N(h, wb);
        Hb = new Gk(vg(m),T,V);
        N(h, Hb);
        r = new Hk(a,b,c,g,window,Nb.ma,Za.C,ma.C,Ha.C,ea.C,Nb.o,H.C,A,r,q,K.C,I,P,S,k.C,sb.C,ba.C,wb.C,Hb.C,Xc.l);
        N(h, r);
        _.F(Ik) && (I = new Jk(window,a,r.B,d),
        N(h, I));
        T = new Kk(b,vg(m),a,window,T,r.l,Ha.C,Hb.C);
        N(h, T);
        c = new Lk(a,vg(m),(0,
        E.I)(c.$a),V,r.l,Ha.C,f.C,Hb.C);
        N(h, c);
        c = new Mk(a,window,z,r.l,r.o);
        N(h, c);
        m = new Nk(a,vg(m),g,window,r.l,Ha.C);
        N(h, m);
        e = new Ok(a,r.l,e,g);
        N(h, e);
        b = new Pk(Qk(b, a),window.top,r.l,n.C);
        N(h, b);
        a = new Rk(a,q,A,z,S,r.l,ea.C,r.o);
        N(h, a);
        ca = new Sk(window,ca,r.l,ea.C,Ha.C);
        N(h, ca);
        _.F(Tk) && N(h, new Uk(xh,we(),l));
        return h
    }
    ;
    Wk = function(a, b, c) {
        bg(a, 3) || (c === b.getAdUnitPath() ? w(a, 3, 1) : c === b.getDomId() && w(a, 3, 2))
    }
    ;
    al = function(a, b, c, d, e, f) {
        (e = null === e || void 0 === e ? void 0 : e.get(null !== f && void 0 !== f ? f : function() {
            return null
        }
        )) && 1 !== Oc(e, 1, 0) && Of(b, 5, e);
        bg(a, 5) || (e ? 1 === Oc(e, 1, 0) ? Xk(a, e) : Xk(a, Yk(Zk(new $k, 1), ig(c, d))) : Xk(a, Zk(new $k, ig(c, d) ? 2 : 3)))
    }
    ;
    jl = function(a, b, c) {
        c = void 0 === c ? [] : c;
        var d, e = new bl;
        "number" === typeof a.cpm && w(e, 2, 1E6 * a.cpm);
        "string" === typeof a.currency && cl(e, (0,
        E.I)(a.currency));
        if ("number" === typeof a.dealId) {
            var f = new dl;
            w(f, 1, String(a.dealId));
            Of(e, 6, f)
        }
        if (a.adserverTargeting && "object" === typeof a.adserverTargeting) {
            c = _.u(Object, "fromEntries").call(Object, c.map(function(n) {
                return [ai(n), $i(n, 2)]
            }));
            f = _.y(["", "_" + a.bidder]);
            for (var g = f.next(); !g.done; g = f.next()) {
                g = g.value;
                for (var h = [], k = _.y(_.u(Object, "entries").call(Object, a.adserverTargeting)), l = k.next(); !l.done; l = k.next()) {
                    var m = _.y(l.value);
                    l = m.next().value;
                    m = m.next().value;
                    l += g;
                    if (null !== (d = c[l]) && void 0 !== d && d.length)
                        if (c[l][0] === String(m))
                            h.push(l);
                        else {
                            h = [];
                            break
                        }
                }
                el(e, $i(e, 4).concat(h))
            }
        }
        switch (a.mediaType || "banner") {
        case "banner":
            w(e, 5, 1);
            break;
        case "native":
            w(e, 5, 2);
            break;
        case "video":
            w(e, 5, 3)
        }
        c = "number" === typeof a.height ? a.height : void 0;
        f = "number" === typeof a.height ? a.width : void 0;
        void 0 !== c && void 0 !== f && fl(e, gl(hl(f), c));
        "string" === typeof a.adId && (il(e, (0,
        E.I)(a.adId)),
        b.set((0,
        E.I)(a.adId), {
            height: c,
            width: f,
            adUrl: "string" === typeof a.adUrl ? a.adUrl : void 0,
            yd: "string" === typeof a.ad ? a.ad : void 0,
            format: Oc(e, 5, 0),
            cpm: bg(e, 2) ? Pc(e, 2) : void 0
        }));
        return e
    }
    ;
    kl = function(a, b) {
        var c = new v.Map
          , d = function(l) {
            var m = c.get(l);
            m || (m = {},
            c.set(l, m));
            return m
        };
        a = _.y(a);
        for (var e = a.next(); !e.done; e = a.next()) {
            var f = e.value;
            e = f.elapsedTime;
            var g = f.args
              , h = g.bidId
              , k = g.bids;
            if (g.auctionId === b)
                switch (f.eventType) {
                case "bidRequested":
                    if (!Array.isArray(k))
                        continue;
                    f = _.y(k);
                    for (g = f.next(); !g.done; g = f.next())
                        if (g = g.value.bidId)
                            d(g).requestTime = e;
                    break;
                case "noBid":
                    h && (d(h).we = e)
                }
        }
        b = new v.Map;
        d = _.y(_.u(c, "entries").call(c));
        for (a = d.next(); !a.done; a = d.next())
            e = _.y(a.value),
            a = e.next().value,
            f = e.next().value,
            e = f.requestTime,
            f = f.we,
            e && f && b.set(a, f - e);
        return b
    }
    ;
    ml = function(a) {
        var b = new ll;
        b = Db(b, 1, Date.now(), 0);
        b = Db(b, 2, a.re, 0);
        b = Db(b, 3, a.vc, "");
        var c = ed().m();
        b = Nf(b, 4, c);
        return Db(b, 5, a.ie, 0)
    }
    ;
    rl = function(a, b) {
        var c = nl();
        if (a.Nc) {
            var d = a.zb;
            a = ml(a);
            var e = new ol;
            b = pl(e, 1, b);
            c = Db(b, 2, c, 0);
            c = ef(a, 6, ql, c);
            Ac(d, c)
        }
    }
    ;
    sl = function(a) {
        Cf("gpt_fc_has_namespace_but_no_iframes", function(b) {
            sf(b);
            G(b, "networkId", a)
        }, 1)
    }
    ;
    tl = function(a, b) {
        return window.IntersectionObserver ? new IntersectionObserver(a,{
            rootMargin: b
        }) : new Xj(a,{
            rootMargin: b
        })
    }
    ;
    vl = function() {
        if (Da())
            var a = 0 <= ul(Fa(), 11);
        else
            a = za(xa()),
            Ea(a),
            a = Ba() ? (a = a[2]) && a[1] || "" : "",
            "" === a ? a = NaN : (a = a.split("."),
            a = 0 === a.length ? NaN : Number(a[0])),
            a = 65 <= a;
        return a
    }
    ;
    wl = function(a) {
        var b = a
          , c = 0;
        uh(b, function(d) {
            var e;
            if (1 !== (null === (e = d.parentElement) || void 0 === e ? void 0 : e.childElementCount))
                return !1;
            b = d.parentElement;
            c++;
            return !0
        });
        return {
            De: b,
            depth: c
        }
    }
    ;
    yl = function() {
        var a = void 0 === a ? window : a;
        xl = _.$c(a)
    }
    ;
    Al = function(a, b, c) {
        var d = a.map(function(e) {
            return b[e.getDomId()]
        });
        a = new v.Map([["ists", {
            value: Zg(d, function(e) {
                return 0 !== vg(e)
            }) || null
        }], ["fas", {
            value: $g(d, function(e) {
                return Mi(vg(e))
            })
        }], ["itsi", {
            value: _.F(wg) && c && a.some(function(e) {
                var f;
                return 5 === (null === (f = b[e.getDomId()]) || void 0 === f ? void 0 : vg(f))
            }) ? function() {
                var e, f = Math.max.apply(Math, _.yc(null !== (e = _.tg(c, 6048E5)) && void 0 !== e ? e : []));
                return isFinite(f) ? Math.floor((Date.now() - f) / 6E4) : null
            }() : null
        }]]);
        (0,
        E.qb)(!_.F(zl));
        return a
    }
    ;
    Bl = function(a) {
        return new v.Map([["rbvs", {
            value: Zg(a, function(b) {
                return 4 === vg(b)
            }) || null
        }]])
    }
    ;
    El = function(a, b) {
        var c = []
          , d = [];
        a = _.y(a);
        for (var e = a.next(); !e.done; e = a.next()) {
            var f = void 0
              , g = void 0
              , h = void 0;
            var k = b;
            e = Mg(e.value);
            var l = Cl((null === e || void 0 === e ? void 0 : e.parentElement) && Pg(e.parentElement, k) || null);
            !l || 1 === l[0] && 1 === l[3] ? (l = null !== (h = null === e || void 0 === e ? void 0 : e.parentElement) && void 0 !== h ? h : null,
            h = null !== (g = Gg(l)) && void 0 !== g ? g : new _.Fg(0,0),
            Dl(h, l, k, 100),
            g = null !== (f = Gg(e)) && void 0 !== f ? f : new _.Fg(0,0),
            Dl(g, e, k, 1),
            -1 === h.height && (g.height = -1),
            k = h,
            g = f = g,
            f = k.width + "x" + k.height,
            k = g.width + "x" + g.height) : k = f = "-1x-1";
            c.push(f);
            d.push(k)
        }
        return new v.Map([["psz", {
            value: c,
            options: {
                xa: "|"
            }
        }], ["msz", {
            value: d,
            options: {
                xa: "|"
            }
        }]])
    }
    ;
    Dl = function(a, b, c, d) {
        try {
            var e;
            if (!(e = !b)) {
                var f;
                if (!(f = !Fl(b, c, d))) {
                    a: {
                        do {
                            var g = Pg(b, c);
                            if (g && "fixed" == g.position) {
                                var h = !1;
                                break a
                            }
                        } while (b = b.parentElement);
                        h = !0
                    }
                    f = !h
                }
                e = f
            }
            e && (a.height = -1)
        } catch (k) {
            a.width = -1,
            a.height = -1
        }
    }
    ;
    Il = function(a) {
        var b, c, d, e, f, g, h;
        var k = a;
        k = void 0 === k ? Gl : k;
        try {
            var l = k.history.length
        } catch (ca) {
            l = 0
        }
        k = v.Map;
        l = ["u_his", {
            value: l
        }];
        var m = ["u_h", {
            value: null === (b = a.screen) || void 0 === b ? void 0 : b.height
        }]
          , n = ["u_w", {
            value: null === (c = a.screen) || void 0 === c ? void 0 : c.width
        }]
          , q = ["u_ah", {
            value: null === (d = a.screen) || void 0 === d ? void 0 : d.availHeight
        }]
          , r = ["u_aw", {
            value: null === (e = a.screen) || void 0 === e ? void 0 : e.availWidth
        }]
          , z = ["u_cd", {
            value: null === (f = a.screen) || void 0 === f ? void 0 : f.colorDepth
        }]
          , A = a;
        A = void 0 === A ? _.t : A;
        A = A.devicePixelRatio;
        A = ["u_sd", {
            value: "number" === typeof A ? +A.toFixed(3) : null
        }];
        var I = ["u_tz", {
            value: -(new Date).getTimezoneOffset()
        }];
        var H, V, T, ea, K;
        try {
            var P = null !== (ea = null === (T = null === (V = null === (H = a.external) || void 0 === H ? void 0 : H.Pf) || void 0 === V ? void 0 : V.bind(a.external)) || void 0 === T ? void 0 : T("os-mode")) && void 0 !== ea ? ea : ""
              , S = Number(null === (K = JSON.parse(P)) || void 0 === K ? void 0 : K["os-mode"]);
            var ba = 0 <= S ? S + 1 : null
        } catch (ca) {
            ba = null
        }
        ba = ["wsm", {
            value: ba
        }];
        H = a;
        H = void 0 === H ? window : H;
        try {
            var ma = Hl(H)
        } catch (ca) {
            ma = "0"
        }
        return new k([l, m, n, q, r, z, A, I, ba, ["flash", {
            value: ma,
            options: {
                ga: !1,
                oa: !0
            }
        }], ["dmc", {
            value: null !== (h = null === (g = a.navigator) || void 0 === g ? void 0 : g.deviceMemory) && void 0 !== h ? h : null
        }]])
    }
    ;
    Jl = function(a, b) {
        return new v.Map([["click", {
            value: !b && a.getClickUrl() ? a.getClickUrl() : null
        }]])
    }
    ;
    Kl = function(a) {
        return a ? new v.Map([["floc_id", {
            value: a.id
        }], ["floc_ver", {
            value: a.version
        }]]) : new v.Map([["floc_id", {
            value: null
        }], ["floc_ver", {
            value: null
        }]])
    }
    ;
    Ml = function(a) {
        try {
            var b = a.top;
            var c = Ll(b.document, b)
        } catch (d) {
            c = new _.Cg(-12245933,-12245933)
        }
        return new v.Map([["scr_x", {
            value: Math.round(c.x),
            options: {
                oa: !0
            }
        }], ["scr_y", {
            value: Math.round(c.y),
            options: {
                oa: !0
            }
        }]])
    }
    ;
    Ol = function(a, b, c) {
        var d = null;
        try {
            var e = Ll(b.top.document, b.top).y;
            d = a.map(function(f) {
                var g, h = c.T, k = c.O[f.getDomId()];
                f = null === (g = Tg(f, k, b.document, gg(h, k))) || void 0 === g ? void 0 : g.y;
                h = $f(!0, b).height;
                return void 0 === f || -12245933 === f || -12245933 === h ? -1 : f < e + h ? 0 : ++Nl
            })
        } catch (f) {}
        return new v.Map([["btvi", {
            value: d,
            options: {
                oa: !0,
                xa: "|"
            }
        }]])
    }
    ;
    Ql = function(a) {
        if (_.F(Pl))
            return new v.Map;
        var b = a.ic
          , c = a.Jc
          , d = 0 === a.Jd;
        return new v.Map([["adsid", {
            value: d ? b : null
        }], ["pucrd", {
            value: d ? c : null
        }], ["jar", {
            value: a.Bc
        }]])
    }
    ;
    Tl = function(a, b) {
        var c, d, e, f;
        a = Rl(a) || new Sl;
        var g = Oc(a, 6, 2);
        return new v.Map([["rdp", {
            value: D(a, 1) ? "1" : null
        }], ["ltd", {
            value: D(a, 9) ? "1" : null
        }], ["gdpr_consent", {
            value: null !== (c = x(b, 2)) && void 0 !== c ? c : null
        }], ["gdpr", {
            value: bg(b, 3) ? D(b, 3) ? "1" : "0" : null,
            options: {
                oa: !0
            }
        }], ["addtl_consent", {
            value: null !== (d = x(b, 4)) && void 0 !== d ? d : null
        }], ["tcfe", {
            value: null !== (e = x(b, 7)) && void 0 !== e ? e : null
        }], ["us_privacy", {
            value: null !== (f = x(b, 1)) && void 0 !== f ? f : null
        }], ["npa", {
            value: D(b, 6) || D(a, 8) ? 1 : null
        }], ["tfua", {
            value: 2 !== g ? g : null,
            options: {
                oa: !0
            }
        }], ["tfcd", {
            value: bg(a, 5) ? x(a, 5) : null,
            options: {
                oa: !0
            }
        }], ["trt", {
            value: bg(a, 10) ? x(a, 10) : null,
            options: {
                oa: !0
            }
        }], ["macr", {
            value: bg(a, 11) ? Oc(a, 11, 0) : null,
            options: {
                oa: !0
            }
        }]])
    }
    ;
    Wl = function(a, b, c) {
        var d = window;
        return new v.Map([["ris", {
            value: $g(b, function(e) {
                var f, g;
                e = null !== (g = null === (f = a.j.get(e)) || void 0 === f ? void 0 : f.Zc) && void 0 !== g ? g : 0;
                f = _.Ul(d);
                return Math.round(Math.min((e && f ? f - e : 0) / 1E3, 1800))
            }, void 0, "~")
        }], ["rcs", {
            value: $g(b, function(e) {
                if (!c) {
                    var f = void 0 === f ? _.t : f;
                    var g = a.j.get(e);
                    g && (g.Zc = _.Ul(f) || 0,
                    g.ld++)
                }
                return Vl(a, e)
            })
        }]])
    }
    ;
    Xl = function(a, b) {
        var c = [];
        a = a.map(function(d) {
            return d.getAdUnitPath().replace(/,/g, ":").split("/").map(function(e) {
                if (!e)
                    return "";
                var f = _.u(c, "findIndex").call(c, function(g) {
                    return g === e
                });
                return 0 <= f ? f : c.push(e) - 1
            }).join("/")
        });
        return new v.Map([["iu_parts", {
            value: c
        }], ["enc_prev_ius", {
            value: a
        }], ["prev_iu_szs", {
            value: b.map(function(d) {
                return cg(d)
            })
        }], ["fluid", {
            value: function() {
                var d = !1
                  , e = b.map(function(f) {
                    f = (C = ag(f),
                    _.u(C, "includes")).call(C, "fluid");
                    d || (d = f);
                    return f ? "height" : "0"
                });
                return d ? e : null
            }()
        }]])
    }
    ;
    Yl = function(a) {
        var b;
        return (null === (b = (C = Wb(a, $h, 3),
        _.u(C, "find")).call(C, function(c) {
            return "page_url" === ai(c)
        })) || void 0 === b ? void 0 : $i(b, 2)[0]) || null
    }
    ;
    Zl = function(a) {
        var b;
        return (null === (b = (C = Wb(a, $h, 14),
        _.u(C, "find")).call(C, function(c) {
            return "page_url" === ai(c)
        })) || void 0 === b ? void 0 : $i(b, 2)[0]) || null
    }
    ;
    $l = function(a) {
        var b = a.indexOf("google_preview=", a.lastIndexOf("?"))
          , c = a.indexOf("&", b);
        -1 === c && (c = a.length - 1,
        --b);
        return a.substring(0, b) + a.substring(c + 1, a.length)
    }
    ;
    am = function(a) {
        var b;
        if (null === (b = a.location) || void 0 === b ? 0 : b.ancestorOrigins)
            return a.location.ancestorOrigins.length;
        var c = 0;
        pc(function() {
            c++;
            return !1
        }, !0, !0, a);
        return c
    }
    ;
    bm = function(a, b, c) {
        var d, e = D(a, 21);
        return new v.Map([["hxva", {
            value: e ? 1 : null,
            options: {
                ga: !1
            }
        }], ["cmsid", {
            value: e ? x(a, 23) : null
        }], ["vid", {
            value: e ? x(a, 22) : null
        }], ["pod", {
            value: isNaN(c) ? null : c,
            options: {
                ga: !1
            }
        }], ["ppos", {
            value: isNaN(b) ? null : b,
            options: {
                ga: !1
            }
        }], ["scor", {
            value: null !== (d = x(a, 29)) && void 0 !== d ? d : null,
            options: {
                ga: !1
            }
        }]])
    }
    ;
    cm = function(a, b, c) {
        return "wbn" === a ? new v.Map([["wbsu", {
            value: Va((0,
            E.I)(b)).toString().replace(/^urn:uuid:/, "")
        }], ["callback", {
            value: c
        }]]) : new v.Map
    }
    ;
    dm = function(a) {
        for (var b, c = {}, d = _.y(Wb(a, $h, 9)), e = d.next(); !e.done; e = d.next())
            e = e.value,
            c[(0,
            E.I)(ai(e))] = $i(e, 2);
        a = $i(a, 8);
        a.length && (null !== (b = c.excl_cat) && void 0 !== b ? b : c.excl_cat = a);
        return c
    }
    ;
    em = function(a) {
        a = dm(a);
        var b = [];
        _.tf(a, function(c, d) {
            c.length && (c = c.map(encodeURIComponent),
            d = encodeURIComponent(d),
            b.push(d + "=" + c.join()))
        });
        return b
    }
    ;
    fm = function(a) {
        var b = !1
          , c = Wb(a, $h, 2).map(function(d) {
            var e = (0,
            E.I)(ai(d));
            b = "excl_cat" === e;
            d = $i(d, 2);
            return encodeURIComponent(e) + "=" + encodeURIComponent(d.join())
        });
        a = $i(a, 3);
        !b && a.length && c.push(encodeURIComponent("excl_cat") + "=" + encodeURIComponent(a.join()));
        return c
    }
    ;
    gm = function(a, b) {
        return !!Zl(b.T) || a.some(function(c) {
            return null !== Yl(b.O[c.getDomId()])
        })
    }
    ;
    im = function(a, b) {
        return b || _.F(hm) ? encodeURIComponent(a.toString()) : a.toString()
    }
    ;
    km = function(a, b) {
        function c(g) {
            var h = g;
            return function() {
                var k = vc.apply(0, arguments);
                if (h) {
                    var l = h;
                    h = null;
                    l.apply(null, _.yc(k))
                }
            }
        }
        var d = null
          , e = 0
          , f = 0;
        return function() {
            var g, h, k, l;
            return gb(function(m) {
                if (1 == m.j)
                    return e && clearTimeout(e),
                    e = 0,
                    g = new ie,
                    h = c(g.resolve),
                    k = ++f,
                    hb(m, 0, 2);
                if (f !== k)
                    return h(!1),
                    m.return(g.promise);
                d ? d(!1) : h(!0);
                l = c(function() {
                    d = null;
                    e = 0;
                    h(!0)
                });
                e = setTimeout(l, a);
                _.jm(b, function() {
                    return void h(!1)
                });
                d = h;
                return m.return(g.promise)
            })
        }
    }
    ;
    om = function() {
        xe("pubadsReady", !0);
        if (_.F(lm)) {
            var a = 0;
            Object.defineProperty(we(), "pubadsReady", {
                get: function() {
                    M(pi(), mm());
                    if (5 > a) {
                        var b = _.bd(nm);
                        Cf("gpt_pubads_ready", function(c) {
                            var d;
                            ++a;
                            sf(c);
                            var e = Error("pubadsReady");
                            G(c, "stack", nf(null !== (d = e.stack) && void 0 !== d ? d : "", e.message))
                        }, b)
                    }
                    return !0
                },
                configurable: !0,
                enumerable: !0
            })
        }
    }
    ;
    rm = function(a, b, c) {
        var d = pm(b, c, void 0, !0)
          , e = d.slotId;
        d = d.Ma;
        if (!e || !d)
            return M(pi(), Uh("PubAdsService.definePassback", [b, c])),
            null;
        w(d, 17, !0);
        a.Na(e, d);
        return {
            fd: Aj(new qm(e,a)),
            Ma: d
        }
    }
    ;
    tm = function(a) {
        return Oh(a, function() {
            return new sm(a)
        })
    }
    ;
    oa = function(a, b) {
        a = (0,
        E.wa)(a[0]);
        b = (0,
        E.wa)(b[0]);
        a: {
            for (var c = la, d = Math.min(b.length, a.length), e = 0; e < d; e++) {
                var f = c(b[e], a[e]);
                if (0 != f) {
                    a = f;
                    break a
                }
            }
            a = la(b.length, a.length)
        }
        return a
    }
    ;
    vm = function(a, b) {
        var c = new rd;
        N(c, new um(a,b));
        td(c)
    }
    ;
    xm = function(a) {
        return !!Kh(wm, function(b) {
            return b === a
        })
    }
    ;
    zm = function(a, b, c) {
        c = _.bh(Wi).add(a, [1, 1], {
            Va: c,
            format: b
        });
        a = c.slotId;
        c = c.Ma;
        if (a && c) {
            if (5 === b && _.F(ym))
                return null;
            w(c, 15, b);
            _.jm(a, function() {
                var d = window
                  , e = Mi(b);
                if (null != e) {
                    d = _.Ni(d);
                    var f = d.adCount && d.adCount[e];
                    f && (d.adCount[e] = f - 1)
                }
            })
        }
        return null !== a && void 0 !== a ? a : null
    }
    ;
    Am = function(a) {
        var b = function() {
            return a.Reflect.construct(a.HTMLElement, [], this.constructor)
        };
        b.prototype = a.HTMLElement.prototype;
        b.prototype.constructor = b;
        _.u(Object, "setPrototypeOf").call(Object, b, a.HTMLElement);
        return b
    }
    ;
    Jm = function() {
        var a = window;
        var b = void 0 === b ? ob : b;
        var c;
        if (a.customElements && null !== (c = a.Reflect) && void 0 !== c && c.construct && !a.customElements.get("google-product-ad")) {
            var d = Am(a)
              , e = function() {
                return d.apply(this, arguments) || this
            };
            _.O(e, d);
            e.prototype.connectedCallback = function() {
                var f = this.dataset.rendering;
                if (f) {
                    try {
                        var g = Hc(Bm, Cm(f))
                    } catch (l) {}
                    if (null === g || void 0 === g ? 0 : bg(g, 1)) {
                        var h = new Dm;
                        h = Db(h, 4, 1, 0);
                        h = Db(h, 2, 7, 0);
                        f = De();
                        h = Db(h, 3, f, "");
                        f = Yb(g, Em, 1);
                        h = Of(h, 5, f);
                        var k = pl(h, 6, !0)
                    } else
                        pi().error(Fm("invalid data-rendering attribute"));
                    h = null === g || void 0 === g ? void 0 : Gm(g, 2)
                } else
                    pi().error(Fm("missing data-rendering attribute"));
                (g = k) && b(Hm(window, g));
                h && Im(h)
            }
            ;
            a.customElements.define("google-product-ad", e)
        }
    }
    ;
    Nm = function() {
        for (var a = _.y(_.u(Array, "from").call(Array, document.getElementsByTagName("script"))), b = a.next(); !b.done; b = a.next()) {
            var c = b.value;
            b = c;
            var d = c.src;
            if (d && (-1 != d.indexOf("/tag/js/gpt.js") || -1 != d.indexOf("/tag/js/gpt_mobile.js")) && !b.googletag_executed && c.textContent) {
                b.googletag_executed = !0;
                b = document.createElement("script");
                d = void 0;
                c = c.textContent;
                var e = null === (d = Ja()) || void 0 === d ? void 0 : d.createScript(c);
                c = new Km(null !== e && void 0 !== e ? e : c,_.La);
                if (c instanceof Lm)
                    if (c instanceof Km)
                        c = c.j;
                    else
                        throw Error("");
                else
                    c = c instanceof Mm && c.constructor === Mm ? c.j : "type_error:SafeScript";
                b.textContent = c;
                $a(b);
                document.head.appendChild(b);
                document.head.removeChild(b)
            }
        }
    }
    ;
    Qm = function(a) {
        var b = [];
        b = _.bh(Wi);
        b = [].concat(_.yc(b.da)).slice();
        if (a) {
            if (!Array.isArray(a))
                return M(pi(), Uh("googletag.destroySlots", [a])),
                !1;
            ka(a);
            b = b.filter(function(c) {
                return _.u(a, "includes").call(a, c.j)
            })
        }
        if (!b.length)
            return !1;
        Om(b);
        Pm(b);
        return !0
    }
    ;
    Rm = function() {
        var a, b;
        try {
            Nm()
        } catch (c) {
            vf(297, c),
            null === (b = null === (a = window.console) || void 0 === a ? void 0 : a.error) || void 0 === b ? void 0 : b.call(a, c)
        }
    }
    ;
    Ym = function() {
        var a = window
          , b = new Sm(a);
        eh(b).then(_.Af(894, function(c) {
            Cf("cmpMet", function(d) {
                sf(d);
                var e = new Tm(a)
                  , f = new Um(a);
                G(d, "fc", Number(null !== c && void 0 !== c ? c : 0));
                G(d, "tcfv1", a.__cmp ? 1 : 0);
                G(d, "tcfv2", Vm(e) ? 1 : 0);
                G(d, "usp", Wm(f) ? 1 : 0);
                G(d, "ptt", 17)
            }, _.bd(Xm))
        }))
    }
    ;
    an = function() {
        var a = De()
          , b = dd(window)
          , c = new Zm
          , d = _.bd($m);
        return {
            vc: a,
            re: b,
            zb: c,
            Nc: 0 < d && Rc() < 1 / d,
            ie: d
        }
    }
    ;
    bn = function(a) {
        var b = 0;
        return function() {
            return b < a.length ? {
                done: !1,
                value: a[b++]
            } : {
                done: !0
            }
        }
    }
    ;
    cn = "function" == typeof Object.defineProperties ? Object.defineProperty : function(a, b, c) {
        if (a == Array.prototype || a == Object.prototype)
            return a;
        a[b] = c.value;
        return a
    }
    ;
    dn = function(a) {
        a = ["object" == typeof globalThis && globalThis, a, "object" == typeof window && window, "object" == typeof self && self, "object" == typeof global && global];
        for (var b = 0; b < a.length; ++b) {
            var c = a[b];
            if (c && c.Math == Math)
                return c
        }
        throw Error("Cannot find global object");
    }
    ;
    en = dn(this);
    fn = "function" === typeof Symbol && "symbol" === typeof Symbol("x");
    v = {};
    gn = {};
    _.u = function(a, b) {
        var c = gn[b];
        if (null == c)
            return a[b];
        c = a[c];
        return void 0 !== c ? c : a[b]
    }
    ;
    hn = function(a, b, c) {
        if (b)
            a: {
                var d = a.split(".");
                a = 1 === d.length;
                var e = d[0], f;
                !a && e in v ? f = v : f = en;
                for (e = 0; e < d.length - 1; e++) {
                    var g = d[e];
                    if (!(g in f))
                        break a;
                    f = f[g]
                }
                d = d[d.length - 1];
                c = fn && "es6" === c ? f[d] : null;
                b = b(c);
                null != b && (a ? cn(v, d, {
                    configurable: !0,
                    writable: !0,
                    value: b
                }) : b !== c && (void 0 === gn[d] && (a = 1E9 * Math.random() >>> 0,
                gn[d] = fn ? en.Symbol(d) : "$jscp$" + a + "$" + d),
                cn(f, gn[d], {
                    configurable: !0,
                    writable: !0,
                    value: b
                })))
            }
    }
    ;
    hn("Symbol", function(a) {
        if (a)
            return a;
        var b = function(f, g) {
            this.j = f;
            cn(this, "description", {
                configurable: !0,
                writable: !0,
                value: g
            })
        };
        b.prototype.toString = function() {
            return this.j
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
    hn("Symbol.iterator", function(a) {
        if (a)
            return a;
        a = (0,
        v.Symbol)("Symbol.iterator");
        for (var b = "Array Int8Array Uint8Array Uint8ClampedArray Int16Array Uint16Array Int32Array Uint32Array Float32Array Float64Array".split(" "), c = 0; c < b.length; c++) {
            var d = en[b[c]];
            "function" === typeof d && "function" != typeof d.prototype[a] && cn(d.prototype, a, {
                configurable: !0,
                writable: !0,
                value: function() {
                    return jn(bn(this))
                }
            })
        }
        return a
    }, "es6");
    jn = function(a) {
        a = {
            next: a
        };
        a[_.u(v.Symbol, "iterator")] = function() {
            return this
        }
        ;
        return a
    }
    ;
    Q = function(a) {
        return a.raw = a
    }
    ;
    _.y = function(a) {
        var b = "undefined" != typeof v.Symbol && _.u(v.Symbol, "iterator") && a[_.u(v.Symbol, "iterator")];
        return b ? b.call(a) : {
            next: bn(a)
        }
    }
    ;
    kn = function(a) {
        for (var b, c = []; !(b = a.next()).done; )
            c.push(b.value);
        return c
    }
    ;
    _.yc = function(a) {
        return a instanceof Array ? a : kn(_.y(a))
    }
    ;
    ln = "function" == typeof Object.create ? Object.create : function(a) {
        var b = function() {};
        b.prototype = a;
        return new b
    }
    ;
    mn = function() {
        function a() {
            function c() {}
            new c;
            _.u(v.Reflect, "construct").call(v.Reflect, c, [], function() {});
            return new c instanceof c
        }
        if (fn && "undefined" != typeof v.Reflect && _.u(v.Reflect, "construct")) {
            if (a())
                return _.u(v.Reflect, "construct");
            var b = _.u(v.Reflect, "construct");
            return function(c, d, e) {
                c = b(c, d);
                e && _.u(v.Reflect, "setPrototypeOf").call(v.Reflect, c, e.prototype);
                return c
            }
        }
        return function(c, d, e) {
            void 0 === e && (e = c);
            e = ln(e.prototype || Object.prototype);
            return Function.prototype.apply.call(c, e, d) || e
        }
    }();
    if (fn && "function" == typeof _.u(Object, "setPrototypeOf"))
        nn = _.u(Object, "setPrototypeOf");
    else {
        var on;
        a: {
            var pn = {
                a: !0
            }
              , qn = {};
            try {
                qn.__proto__ = pn;
                on = qn.a;
                break a
            } catch (a) {}
            on = !1
        }
        nn = on ? function(a, b) {
            a.__proto__ = b;
            if (a.__proto__ !== b)
                throw new TypeError(a + " is not extensible");
            return a
        }
        : null
    }
    rn = nn;
    _.O = function(a, b) {
        a.prototype = ln(b.prototype);
        a.prototype.constructor = a;
        if (rn)
            rn(a, b);
        else
            for (var c in b)
                if ("prototype" != c)
                    if (Object.defineProperties) {
                        var d = Object.getOwnPropertyDescriptor(b, c);
                        d && Object.defineProperty(a, c, d)
                    } else
                        a[c] = b[c];
        a.og = b.prototype
    }
    ;
    sn = function() {
        this.l = !1;
        this.A = null;
        this.m = void 0;
        this.j = 1;
        this.B = this.F = 0;
        this.D = null
    }
    ;
    tn = function(a) {
        if (a.l)
            throw new TypeError("Generator is already running");
        a.l = !0
    }
    ;
    sn.prototype.o = function(a) {
        this.m = a
    }
    ;
    var un = function(a, b) {
        a.D = {
            Uc: b,
            ce: !0
        };
        a.j = a.F || a.B
    };
    sn.prototype.return = function(a) {
        this.D = {
            return: a
        };
        this.j = this.B
    }
    ;
    var hb = function(a, b, c) {
        a.j = c;
        return {
            value: b
        }
    }
      , vn = function(a) {
        a.j = 0
    }
      , jb = function(a, b) {
        a.j = b;
        a.F = 0
    }
      , kb = function(a) {
        a.F = 0;
        var b = a.D.Uc;
        a.D = null;
        return b
    }
      , wn = function(a) {
        this.j = new sn;
        this.m = a
    }
      , zn = function(a, b) {
        tn(a.j);
        var c = a.j.A;
        if (c)
            return xn(a, "return"in c ? c["return"] : function(d) {
                return {
                    value: d,
                    done: !0
                }
            }
            , b, a.j.return);
        a.j.return(b);
        return yn(a)
    }
      , xn = function(a, b, c, d) {
        try {
            var e = b.call(a.j.A, c);
            if (!(e instanceof Object))
                throw new TypeError("Iterator result " + e + " is not an object");
            if (!e.done)
                return a.j.l = !1,
                e;
            var f = e.value
        } catch (g) {
            return a.j.A = null,
            un(a.j, g),
            yn(a)
        }
        a.j.A = null;
        d.call(a.j, f);
        return yn(a)
    }
      , yn = function(a) {
        for (; a.j.j; )
            try {
                var b = a.m(a.j);
                if (b)
                    return a.j.l = !1,
                    {
                        value: b.value,
                        done: !1
                    }
            } catch (c) {
                a.j.m = void 0,
                un(a.j, c)
            }
        a.j.l = !1;
        if (a.j.D) {
            b = a.j.D;
            a.j.D = null;
            if (b.ce)
                throw b.Uc;
            return {
                value: b.return,
                done: !0
            }
        }
        return {
            value: void 0,
            done: !0
        }
    }
      , An = function(a) {
        this.next = function(b) {
            tn(a.j);
            a.j.A ? b = xn(a, a.j.A.next, b, a.j.o) : (a.j.o(b),
            b = yn(a));
            return b
        }
        ;
        this.throw = function(b) {
            tn(a.j);
            a.j.A ? b = xn(a, a.j.A["throw"], b, a.j.o) : (un(a.j, b),
            b = yn(a));
            return b
        }
        ;
        this.return = function(b) {
            return zn(a, b)
        }
        ;
        this[_.u(v.Symbol, "iterator")] = function() {
            return this
        }
    }
      , Ln = function(a) {
        function b(d) {
            return a.next(d)
        }
        function c(d) {
            return a.throw(d)
        }
        return new v.Promise(function(d, e) {
            function f(g) {
                g.done ? d(g.value) : v.Promise.resolve(g.value).then(b, c).then(f, e)
            }
            f(a.next())
        }
        )
    }
      , gb = function(a) {
        return Ln(new An(new wn(a)))
    }
      , vc = function() {
        for (var a = Number(this), b = [], c = a; c < arguments.length; c++)
            b[c - a] = arguments[c];
        return b
    };
    hn("Reflect", function(a) {
        return a ? a : {}
    }, "es6");
    hn("Reflect.construct", function() {
        return mn
    }, "es6");
    hn("Reflect.setPrototypeOf", function(a) {
        return a ? a : rn ? function(b, c) {
            try {
                return rn(b, c),
                !0
            } catch (d) {
                return !1
            }
        }
        : null
    }, "es6");
    hn("Promise", function(a) {
        function b() {
            this.j = null
        }
        function c(g) {
            return g instanceof e ? g : new e(function(h) {
                h(g)
            }
            )
        }
        if (a)
            return a;
        b.prototype.m = function(g) {
            if (null == this.j) {
                this.j = [];
                var h = this;
                this.F(function() {
                    h.D()
                })
            }
            this.j.push(g)
        }
        ;
        var d = en.setTimeout;
        b.prototype.F = function(g) {
            d(g, 0)
        }
        ;
        b.prototype.D = function() {
            for (; this.j && this.j.length; ) {
                var g = this.j;
                this.j = [];
                for (var h = 0; h < g.length; ++h) {
                    var k = g[h];
                    g[h] = null;
                    try {
                        k()
                    } catch (l) {
                        this.A(l)
                    }
                }
            }
            this.j = null
        }
        ;
        b.prototype.A = function(g) {
            this.F(function() {
                throw g;
            })
        }
        ;
        var e = function(g) {
            this.m = 0;
            this.F = void 0;
            this.j = [];
            this.o = !1;
            var h = this.A();
            try {
                g(h.resolve, h.reject)
            } catch (k) {
                h.reject(k)
            }
        };
        e.prototype.A = function() {
            function g(l) {
                return function(m) {
                    k || (k = !0,
                    l.call(h, m))
                }
            }
            var h = this
              , k = !1;
            return {
                resolve: g(this.U),
                reject: g(this.D)
            }
        }
        ;
        e.prototype.U = function(g) {
            if (g === this)
                this.D(new TypeError("A Promise cannot resolve to itself"));
            else if (g instanceof e)
                this.K(g);
            else {
                a: switch (typeof g) {
                case "object":
                    var h = null != g;
                    break a;
                case "function":
                    h = !0;
                    break a;
                default:
                    h = !1
                }
                h ? this.R(g) : this.l(g)
            }
        }
        ;
        e.prototype.R = function(g) {
            var h = void 0;
            try {
                h = g.then
            } catch (k) {
                this.D(k);
                return
            }
            "function" == typeof h ? this.P(h, g) : this.l(g)
        }
        ;
        e.prototype.D = function(g) {
            this.B(2, g)
        }
        ;
        e.prototype.l = function(g) {
            this.B(1, g)
        }
        ;
        e.prototype.B = function(g, h) {
            if (0 != this.m)
                throw Error("Cannot settle(" + g + ", " + h + "): Promise already settled in state" + this.m);
            this.m = g;
            this.F = h;
            2 === this.m && this.G();
            this.M()
        }
        ;
        e.prototype.G = function() {
            var g = this;
            d(function() {
                if (g.ba()) {
                    var h = en.console;
                    "undefined" !== typeof h && h.error(g.F)
                }
            }, 1)
        }
        ;
        e.prototype.ba = function() {
            if (this.o)
                return !1;
            var g = en.CustomEvent
              , h = en.Event
              , k = en.dispatchEvent;
            if ("undefined" === typeof k)
                return !0;
            "function" === typeof g ? g = new g("unhandledrejection",{
                cancelable: !0
            }) : "function" === typeof h ? g = new h("unhandledrejection",{
                cancelable: !0
            }) : (g = en.document.createEvent("CustomEvent"),
            g.initCustomEvent("unhandledrejection", !1, !0, g));
            g.promise = this;
            g.reason = this.F;
            return k(g)
        }
        ;
        e.prototype.M = function() {
            if (null != this.j) {
                for (var g = 0; g < this.j.length; ++g)
                    f.m(this.j[g]);
                this.j = null
            }
        }
        ;
        var f = new b;
        e.prototype.K = function(g) {
            var h = this.A();
            g.Fb(h.resolve, h.reject)
        }
        ;
        e.prototype.P = function(g, h) {
            var k = this.A();
            try {
                g.call(h, k.resolve, k.reject)
            } catch (l) {
                k.reject(l)
            }
        }
        ;
        e.prototype.then = function(g, h) {
            function k(q, r) {
                return "function" == typeof q ? function(z) {
                    try {
                        l(q(z))
                    } catch (A) {
                        m(A)
                    }
                }
                : r
            }
            var l, m, n = new e(function(q, r) {
                l = q;
                m = r
            }
            );
            this.Fb(k(g, l), k(h, m));
            return n
        }
        ;
        e.prototype.catch = function(g) {
            return this.then(void 0, g)
        }
        ;
        e.prototype.Fb = function(g, h) {
            function k() {
                switch (l.m) {
                case 1:
                    g(l.F);
                    break;
                case 2:
                    h(l.F);
                    break;
                default:
                    throw Error("Unexpected state: " + l.m);
                }
            }
            var l = this;
            null == this.j ? f.m(k) : this.j.push(k);
            this.o = !0
        }
        ;
        e.resolve = c;
        e.reject = function(g) {
            return new e(function(h, k) {
                k(g)
            }
            )
        }
        ;
        e.race = function(g) {
            return new e(function(h, k) {
                for (var l = _.y(g), m = l.next(); !m.done; m = l.next())
                    c(m.value).Fb(h, k)
            }
            )
        }
        ;
        e.all = function(g) {
            var h = _.y(g)
              , k = h.next();
            return k.done ? c([]) : new e(function(l, m) {
                function n(z) {
                    return function(A) {
                        q[z] = A;
                        r--;
                        0 == r && l(q)
                    }
                }
                var q = []
                  , r = 0;
                do
                    q.push(void 0),
                    r++,
                    c(k.value).Fb(n(q.length - 1), m),
                    k = h.next();
                while (!k.done)
            }
            )
        }
        ;
        return e
    }, "es6");
    hn("Object.setPrototypeOf", function(a) {
        return a || rn
    }, "es6");
    var Mn = function(a, b) {
        return Object.prototype.hasOwnProperty.call(a, b)
    }
      , Nn = fn && "function" == typeof _.u(Object, "assign") ? _.u(Object, "assign") : function(a, b) {
        for (var c = 1; c < arguments.length; c++) {
            var d = arguments[c];
            if (d)
                for (var e in d)
                    Mn(d, e) && (a[e] = d[e])
        }
        return a
    }
    ;
    hn("Object.assign", function(a) {
        return a || Nn
    }, "es6");
    hn("WeakMap", function(a) {
        function b() {}
        function c(g) {
            var h = typeof g;
            return "object" === h && null !== g || "function" === h
        }
        if (function() {
            if (!a || !Object.seal)
                return !1;
            try {
                var g = Object.seal({})
                  , h = Object.seal({})
                  , k = new a([[g, 2], [h, 3]]);
                if (2 != k.get(g) || 3 != k.get(h))
                    return !1;
                k.delete(g);
                k.set(h, 4);
                return !k.has(g) && 4 == k.get(h)
            } catch (l) {
                return !1
            }
        }())
            return a;
        var d = "$jscomp_hidden_" + Math.random()
          , e = 0
          , f = function(g) {
            this.j = (e += Math.random() + 1).toString();
            if (g) {
                g = _.y(g);
                for (var h; !(h = g.next()).done; )
                    h = h.value,
                    this.set(h[0], h[1])
            }
        };
        f.prototype.set = function(g, h) {
            if (!c(g))
                throw Error("Invalid WeakMap key");
            if (!Mn(g, d)) {
                var k = new b;
                cn(g, d, {
                    value: k
                })
            }
            if (!Mn(g, d))
                throw Error("WeakMap key fail: " + g);
            g[d][this.j] = h;
            return this
        }
        ;
        f.prototype.get = function(g) {
            return c(g) && Mn(g, d) ? g[d][this.j] : void 0
        }
        ;
        f.prototype.has = function(g) {
            return c(g) && Mn(g, d) && Mn(g[d], this.j)
        }
        ;
        f.prototype.delete = function(g) {
            return c(g) && Mn(g, d) && Mn(g[d], this.j) ? delete g[d][this.j] : !1
        }
        ;
        return f
    }, "es6");
    hn("Map", function(a) {
        if (function() {
            if (!a || "function" != typeof a || !_.u(a.prototype, "entries") || "function" != typeof Object.seal)
                return !1;
            try {
                var h = Object.seal({
                    x: 4
                })
                  , k = new a(_.y([[h, "s"]]));
                if ("s" != k.get(h) || 1 != k.size || k.get({
                    x: 4
                }) || k.set({
                    x: 4
                }, "t") != k || 2 != k.size)
                    return !1;
                var l = _.u(k, "entries").call(k)
                  , m = l.next();
                if (m.done || m.value[0] != h || "s" != m.value[1])
                    return !1;
                m = l.next();
                return m.done || 4 != m.value[0].x || "t" != m.value[1] || !l.next().done ? !1 : !0
            } catch (n) {
                return !1
            }
        }())
            return a;
        var b = new v.WeakMap
          , c = function(h) {
            this.m = {};
            this.j = f();
            this.size = 0;
            if (h) {
                h = _.y(h);
                for (var k; !(k = h.next()).done; )
                    k = k.value,
                    this.set(k[0], k[1])
            }
        };
        c.prototype.set = function(h, k) {
            h = 0 === h ? 0 : h;
            var l = d(this, h);
            l.list || (l.list = this.m[l.id] = []);
            l.ra ? l.ra.value = k : (l.ra = {
                next: this.j,
                La: this.j.La,
                head: this.j,
                key: h,
                value: k
            },
            l.list.push(l.ra),
            this.j.La.next = l.ra,
            this.j.La = l.ra,
            this.size++);
            return this
        }
        ;
        c.prototype.delete = function(h) {
            h = d(this, h);
            return h.ra && h.list ? (h.list.splice(h.index, 1),
            h.list.length || delete this.m[h.id],
            h.ra.La.next = h.ra.next,
            h.ra.next.La = h.ra.La,
            h.ra.head = null,
            this.size--,
            !0) : !1
        }
        ;
        c.prototype.clear = function() {
            this.m = {};
            this.j = this.j.La = f();
            this.size = 0
        }
        ;
        c.prototype.has = function(h) {
            return !!d(this, h).ra
        }
        ;
        c.prototype.get = function(h) {
            return (h = d(this, h).ra) && h.value
        }
        ;
        c.prototype.entries = function() {
            return e(this, function(h) {
                return [h.key, h.value]
            })
        }
        ;
        c.prototype.keys = function() {
            return e(this, function(h) {
                return h.key
            })
        }
        ;
        c.prototype.values = function() {
            return e(this, function(h) {
                return h.value
            })
        }
        ;
        c.prototype.forEach = function(h, k) {
            for (var l = _.u(this, "entries").call(this), m; !(m = l.next()).done; )
                m = m.value,
                h.call(k, m[1], m[0], this)
        }
        ;
        c.prototype[_.u(v.Symbol, "iterator")] = _.u(c.prototype, "entries");
        var d = function(h, k) {
            var l = k && typeof k;
            "object" == l || "function" == l ? b.has(k) ? l = b.get(k) : (l = "" + ++g,
            b.set(k, l)) : l = "p_" + k;
            var m = h.m[l];
            if (m && Mn(h.m, l))
                for (h = 0; h < m.length; h++) {
                    var n = m[h];
                    if (k !== k && n.key !== n.key || k === n.key)
                        return {
                            id: l,
                            list: m,
                            index: h,
                            ra: n
                        }
                }
            return {
                id: l,
                list: m,
                index: -1,
                ra: void 0
            }
        }
          , e = function(h, k) {
            var l = h.j;
            return jn(function() {
                if (l) {
                    for (; l.head != h.j; )
                        l = l.La;
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
            var h = {};
            return h.La = h.next = h.head = h
        }
          , g = 0;
        return c
    }, "es6");
    var On = function(a, b, c) {
        if (null == a)
            throw new TypeError("The 'this' value for String.prototype." + c + " must not be null or undefined");
        if (b instanceof RegExp)
            throw new TypeError("First argument to String.prototype." + c + " must not be a regular expression");
        return a + ""
    };
    hn("String.prototype.endsWith", function(a) {
        return a ? a : function(b, c) {
            var d = On(this, b, "endsWith");
            void 0 === c && (c = d.length);
            c = Math.max(0, Math.min(c | 0, d.length));
            for (var e = b.length; 0 < e && 0 < c; )
                if (d[--c] != b[--e])
                    return !1;
            return 0 >= e
        }
    }, "es6");
    var Pn = function(a, b, c) {
        a instanceof String && (a = String(a));
        for (var d = a.length, e = 0; e < d; e++) {
            var f = a[e];
            if (b.call(c, f, e, a))
                return {
                    i: e,
                    td: f
                }
        }
        return {
            i: -1,
            td: void 0
        }
    };
    hn("Array.prototype.find", function(a) {
        return a ? a : function(b, c) {
            return Pn(this, b, c).td
        }
    }, "es6");
    var Qn = function(a, b) {
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
        e[_.u(v.Symbol, "iterator")] = function() {
            return e
        }
        ;
        return e
    };
    hn("Array.prototype.entries", function(a) {
        return a ? a : function() {
            return Qn(this, function(b, c) {
                return [b, c]
            })
        }
    }, "es6");
    hn("String.prototype.startsWith", function(a) {
        return a ? a : function(b, c) {
            var d = On(this, b, "startsWith")
              , e = d.length
              , f = b.length;
            c = Math.max(0, Math.min(c | 0, d.length));
            for (var g = 0; g < f && c < e; )
                if (d[c++] != b[g++])
                    return !1;
            return g >= f
        }
    }, "es6");
    hn("Number.isFinite", function(a) {
        return a ? a : function(b) {
            return "number" !== typeof b ? !1 : !isNaN(b) && Infinity !== b && -Infinity !== b
        }
    }, "es6");
    hn("globalThis", function(a) {
        return a || en
    }, "es_2020");
    hn("Array.prototype.findIndex", function(a) {
        return a ? a : function(b, c) {
            return Pn(this, b, c).i
        }
    }, "es6");
    hn("Set", function(a) {
        if (function() {
            if (!a || "function" != typeof a || !_.u(a.prototype, "entries") || "function" != typeof Object.seal)
                return !1;
            try {
                var c = Object.seal({
                    x: 4
                })
                  , d = new a(_.y([c]));
                if (!d.has(c) || 1 != d.size || d.add(c) != d || 1 != d.size || d.add({
                    x: 4
                }) != d || 2 != d.size)
                    return !1;
                var e = _.u(d, "entries").call(d)
                  , f = e.next();
                if (f.done || f.value[0] != c || f.value[1] != c)
                    return !1;
                f = e.next();
                return f.done || f.value[0] == c || 4 != f.value[0].x || f.value[1] != f.value[0] ? !1 : e.next().done
            } catch (g) {
                return !1
            }
        }())
            return a;
        var b = function(c) {
            this.j = new v.Map;
            if (c) {
                c = _.y(c);
                for (var d; !(d = c.next()).done; )
                    this.add(d.value)
            }
            this.size = this.j.size
        };
        b.prototype.add = function(c) {
            c = 0 === c ? 0 : c;
            this.j.set(c, c);
            this.size = this.j.size;
            return this
        }
        ;
        b.prototype.delete = function(c) {
            c = this.j.delete(c);
            this.size = this.j.size;
            return c
        }
        ;
        b.prototype.clear = function() {
            this.j.clear();
            this.size = 0
        }
        ;
        b.prototype.has = function(c) {
            return this.j.has(c)
        }
        ;
        b.prototype.entries = function() {
            return _.u(this.j, "entries").call(this.j)
        }
        ;
        b.prototype.values = function() {
            return _.u(this.j, "values").call(this.j)
        }
        ;
        b.prototype.keys = _.u(b.prototype, "values");
        b.prototype[_.u(v.Symbol, "iterator")] = _.u(b.prototype, "values");
        b.prototype.forEach = function(c, d) {
            var e = this;
            this.j.forEach(function(f) {
                return c.call(d, f, f, e)
            })
        }
        ;
        return b
    }, "es6");
    hn("Object.entries", function(a) {
        return a ? a : function(b) {
            var c = [], d;
            for (d in b)
                Mn(b, d) && c.push([d, b[d]]);
            return c
        }
    }, "es8");
    hn("Array.prototype.keys", function(a) {
        return a ? a : function() {
            return Qn(this, function(b) {
                return b
            })
        }
    }, "es6");
    hn("Array.from", function(a) {
        return a ? a : function(b, c, d) {
            c = null != c ? c : function(h) {
                return h
            }
            ;
            var e = []
              , f = "undefined" != typeof v.Symbol && _.u(v.Symbol, "iterator") && b[_.u(v.Symbol, "iterator")];
            if ("function" == typeof f) {
                b = f.call(b);
                for (var g = 0; !(f = b.next()).done; )
                    e.push(c.call(d, f.value, g++))
            } else
                for (f = b.length,
                g = 0; g < f; g++)
                    e.push(c.call(d, b[g], g));
            return e
        }
    }, "es6");
    hn("Array.prototype.values", function(a) {
        return a ? a : function() {
            return Qn(this, function(b, c) {
                return c
            })
        }
    }, "es8");
    hn("Object.values", function(a) {
        return a ? a : function(b) {
            var c = [], d;
            for (d in b)
                Mn(b, d) && c.push(b[d]);
            return c
        }
    }, "es8");
    hn("Object.is", function(a) {
        return a ? a : function(b, c) {
            return b === c ? 0 !== b || 1 / b === 1 / c : b !== b && c !== c
        }
    }, "es6");
    hn("Array.prototype.includes", function(a) {
        return a ? a : function(b, c) {
            var d = this;
            d instanceof String && (d = String(d));
            var e = d.length;
            c = c || 0;
            for (0 > c && (c = Math.max(c + e, 0)); c < e; c++) {
                var f = d[c];
                if (f === b || _.u(Object, "is").call(Object, f, b))
                    return !0
            }
            return !1
        }
    }, "es7");
    hn("String.prototype.includes", function(a) {
        return a ? a : function(b, c) {
            return -1 !== On(this, b, "includes").indexOf(b, c || 0)
        }
    }, "es6");
    hn("Number.isInteger", function(a) {
        return a ? a : function(b) {
            return _.u(Number, "isFinite").call(Number, b) ? b === Math.floor(b) : !1
        }
    }, "es6");
    hn("Object.fromEntries", function(a) {
        return a ? a : function(b) {
            var c = {};
            if (!(_.u(v.Symbol, "iterator")in b))
                throw new TypeError("" + b + " is not iterable");
            b = b[_.u(v.Symbol, "iterator")].call(b);
            for (var d = b.next(); !d.done; d = b.next()) {
                d = d.value;
                if (Object(d) !== d)
                    throw new TypeError("iterable for fromEntries should yield objects");
                c[d[0]] = d[1]
            }
            return c
        }
    }, "es_2019");
    hn("Number.isNaN", function(a) {
        return a ? a : function(b) {
            return "number" === typeof b && isNaN(b)
        }
    }, "es6");
    _.t = this || self;
    Rn = function(a) {
        a.Ya = void 0;
        a.N = function() {
            return a.Ya ? a.Ya : a.Ya = new a
        }
    }
    ;
    Zh = function(a) {
        var b = typeof a;
        b = "object" != b ? b : a ? Array.isArray(a) ? "array" : b : "null";
        return "array" == b || "object" == b && "number" == typeof a.length
    }
    ;
    _.ia = function(a) {
        var b = typeof a;
        return "object" == b && null != a || "function" == b
    }
    ;
    ja = function(a) {
        return Object.prototype.hasOwnProperty.call(a, Sn) && a[Sn] || (a[Sn] = ++Tn)
    }
    ;
    Sn = "closure_uid_" + (1E9 * Math.random() >>> 0);
    Tn = 0;
    Un = function(a, b, c) {
        return a.call.apply(a.bind, arguments)
    }
    ;
    Vn = function(a, b, c) {
        if (!a)
            throw Error();
        if (2 < arguments.length) {
            var d = Array.prototype.slice.call(arguments, 2);
            return function() {
                var e = Array.prototype.slice.call(arguments);
                Array.prototype.unshift.apply(e, d);
                return a.apply(b, e)
            }
        }
        return function() {
            return a.apply(b, arguments)
        }
    }
    ;
    _.Wn = function(a, b, c) {
        Function.prototype.bind && -1 != Function.prototype.bind.toString().indexOf("native code") ? _.Wn = Un : _.Wn = Vn;
        return _.Wn.apply(null, arguments)
    }
    ;
    _.Xn = function(a, b) {
        var c = Array.prototype.slice.call(arguments, 1);
        return function() {
            var d = c.slice();
            d.push.apply(d, arguments);
            return a.apply(this, d)
        }
    }
    ;
    $d = function() {
        return Date.now()
    }
    ;
    var Yn;
    var Gd = function(a, b) {
        this.j = a === Zn && b || "";
        this.m = $n
    };
    Gd.prototype.Ka = !0;
    Gd.prototype.Ga = function() {
        return this.j
    }
    ;
    var Hd = function(a) {
        return a instanceof Gd && a.constructor === Gd && a.m === $n ? a.j : "type_error:Const"
    }
      , ao = function(a) {
        return new Gd(Zn,a)
    }
      , $n = {}
      , Zn = {};
    var nb = ao("https://tpc.googlesyndication.com/sodar/%{basename}.js");
    var co;
    _.aa = function(a, b) {
        return Array.prototype.indexOf.call(a, b, void 0)
    }
    ;
    _.bo = function(a, b) {
        Array.prototype.forEach.call(a, b, void 0)
    }
    ;
    _.fe = function(a, b) {
        return Array.prototype.filter.call(a, b, void 0)
    }
    ;
    _.de = function(a, b) {
        return Array.prototype.map.call(a, b, void 0)
    }
    ;
    co = function(a, b) {
        return Array.prototype.reduce.call(a, b, 0)
    }
    ;
    _.se = function(a, b) {
        return Array.prototype.some.call(a, b, void 0)
    }
    ;
    var va = "constructor hasOwnProperty isPrototypeOf propertyIsEnumerable toLocaleString toString valueOf".split(" ");
    var Td = {
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
    var eo = {}
      , Mm = function(a, b) {
        this.j = b === eo ? a : "";
        this.Ka = !0
    };
    Mm.prototype.Ga = function() {
        return this.j.toString()
    }
    ;
    Mm.prototype.toString = function() {
        return this.j.toString()
    }
    ;
    var Jd = function(a, b) {
        this.j = b === fo ? a : ""
    };
    Jd.prototype.Ka = !0;
    Jd.prototype.Ga = function() {
        return this.j.toString()
    }
    ;
    Jd.prototype.wc = !0;
    Jd.prototype.fb = function() {
        return 1
    }
    ;
    var io = function(a, b) {
        a = Va(a).toString();
        a = go.exec(a);
        var c = a[3] || "";
        return pj(a[1] + ho("?", a[2] || "", b) + ho("#", c, void 0))
    };
    Jd.prototype.toString = function() {
        return this.j + ""
    }
    ;
    var Va = function(a) {
        return a instanceof Jd && a.constructor === Jd ? a.j : "type_error:TrustedResourceUrl"
    }
      , mb = function(a, b) {
        var c = Hd(a);
        if (!jo.test(c))
            throw Error("Invalid TrustedResourceUrl format: " + c);
        a = c.replace(ko, function(d, e) {
            if (!Object.prototype.hasOwnProperty.call(b, e))
                throw Error('Found marker, "' + e + '", in format string, "' + c + '", but no valid label mapping found in args: ' + JSON.stringify(b));
            d = b[e];
            return d instanceof Gd ? Hd(d) : encodeURIComponent(String(d))
        });
        return pj(a)
    }
      , ko = /%{(\w+)}/g
      , jo = RegExp("^((https:)?//[0-9a-z.:[\\]-]+/|/[^/\\\\]|[^:/\\\\%]+/|[^:/\\\\%]*[?#]|about:blank#)", "i")
      , go = /^([^?#]*)(\?[^#]*)?(#[\s\S]*)?/
      , fo = {}
      , pj = function(a) {
        return new Jd(a,fo)
    }
      , ho = function(a, b, c) {
        if (null == c)
            return b;
        if ("string" === typeof c)
            return c ? a + encodeURIComponent(c) : "";
        for (var d in c)
            if (Object.prototype.hasOwnProperty.call(c, d)) {
                var e = c[d];
                e = Array.isArray(e) ? e : [e];
                for (var f = 0; f < e.length; f++) {
                    var g = e[f];
                    null != g && (b || (b = a),
                    b += (b.length > a.length ? "&" : "") + encodeURIComponent(d) + "=" + encodeURIComponent(String(g)))
                }
            }
        return b
    };
    var lo = function(a, b) {
        var c = a.length - b.length;
        return 0 <= c && a.indexOf(b, c) == c
    }
      , Yh = function(a) {
        return /^[\s\xa0]*$/.test(a)
    }
      , mo = function(a) {
        return /^[\s\xa0]*([\s\S]*?)[\s\xa0]*$/.exec(a)[1]
    }
      , Sd = function(a, b) {
        if (b)
            a = a.replace(no, "&amp;").replace(oo, "&lt;").replace(po, "&gt;").replace(qo, "&quot;").replace(ro, "&#39;").replace(so, "&#0;");
        else {
            if (!to.test(a))
                return a;
            -1 != a.indexOf("&") && (a = a.replace(no, "&amp;"));
            -1 != a.indexOf("<") && (a = a.replace(oo, "&lt;"));
            -1 != a.indexOf(">") && (a = a.replace(po, "&gt;"));
            -1 != a.indexOf('"') && (a = a.replace(qo, "&quot;"));
            -1 != a.indexOf("'") && (a = a.replace(ro, "&#39;"));
            -1 != a.indexOf("\x00") && (a = a.replace(so, "&#0;"))
        }
        return a
    }
      , no = /&/g
      , oo = /</g
      , po = />/g
      , qo = /"/g
      , ro = /'/g
      , so = /\x00/g
      , to = /[\x00&<>"']/
      , ul = function(a, b) {
        var c = 0;
        a = mo(String(a)).split(".");
        b = mo(String(b)).split(".");
        for (var d = Math.max(a.length, b.length), e = 0; 0 == c && e < d; e++) {
            var f = a[e] || ""
              , g = b[e] || "";
            do {
                f = /(\d*)(\D*)(.*)/.exec(f) || ["", "", "", ""];
                g = /(\d*)(\D*)(.*)/.exec(g) || ["", "", "", ""];
                if (0 == f[0].length && 0 == g[0].length)
                    break;
                c = uo(0 == f[1].length ? 0 : parseInt(f[1], 10), 0 == g[1].length ? 0 : parseInt(g[1], 10)) || uo(0 == f[2].length, 0 == g[2].length) || uo(f[2], g[2]);
                f = f[3];
                g = g[3]
            } while (0 == c)
        }
        return c
    }
      , uo = function(a, b) {
        return a < b ? -1 : a > b ? 1 : 0
    };
    var Kd = function(a, b) {
        this.j = b === Od ? a : ""
    }, Qd, Pd, Nd, Od, Rd;
    p = Kd.prototype;
    p.Ka = !0;
    p.Ga = function() {
        return this.j.toString()
    }
    ;
    p.wc = !0;
    p.fb = function() {
        return 1
    }
    ;
    p.toString = function() {
        return this.j.toString()
    }
    ;
    _.Ld = function(a) {
        return a instanceof Kd && a.constructor === Kd ? a.j : "type_error:SafeUrl"
    }
    ;
    Qd = RegExp('^(?:audio/(?:3gpp2|3gpp|aac|L16|midi|mp3|mp4|mpeg|oga|ogg|opus|x-m4a|x-matroska|x-wav|wav|webm)|font/\\w+|image/(?:bmp|gif|jpeg|jpg|png|tiff|webp|x-icon)|video/(?:mpeg|mp4|ogg|webm|quicktime|x-matroska))(?:;\\w+=(?:\\w+|"[\\w;,= ]+"))*$', "i");
    Pd = /^data:(.*);base64,[a-z0-9+\/]+=*$/i;
    Nd = /^(?:(?:https?|mailto|ftp):|[^:/?#]*(?:[/?#]|$))/i;
    Od = {};
    Rd = new Kd("about:invalid#zClosurez",Od);
    var vo = {}
      , wo = function(a, b, c) {
        this.j = c === vo ? a : "";
        this.m = b;
        this.Ka = this.wc = !0
    };
    wo.prototype.fb = function() {
        return this.m
    }
    ;
    wo.prototype.Ga = function() {
        return this.j.toString()
    }
    ;
    wo.prototype.toString = function() {
        return this.j.toString()
    }
    ;
    var Sa = function(a) {
        return a instanceof wo && a.constructor === wo ? a.j : "type_error:SafeHtml"
    }
      , xo = function(a) {
        if (a instanceof wo)
            return a;
        var b = "object" == typeof a
          , c = null;
        b && a.wc && (c = a.fb());
        return Vd(Sd(b && a.Ka ? a.Ga() : String(a)), c)
    }
      , zo = function(a) {
        var b = xo(yo)
          , c = b.fb()
          , d = []
          , e = function(f) {
            Array.isArray(f) ? f.forEach(e) : (f = xo(f),
            d.push(Sa(f).toString()),
            f = f.fb(),
            0 == c ? c = f : 0 != f && c != f && (c = null))
        };
        a.forEach(e);
        return Vd(d.join(Sa(b).toString()), c)
    }
      , Ud = function(a) {
        return zo(Array.prototype.slice.call(arguments))
    }
      , Vd = function(a, b) {
        return new wo(a,b,vo)
    }
      , Ed = /^[a-zA-Z0-9-]+$/
      , Id = {
        action: !0,
        cite: !0,
        data: !0,
        formaction: !0,
        href: !0,
        manifest: !0,
        poster: !0,
        src: !0
    }
      , Fd = {
        APPLET: !0,
        BASE: !0,
        EMBED: !0,
        IFRAME: !0,
        LINK: !0,
        MATH: !0,
        META: !0,
        OBJECT: !0,
        SCRIPT: !0,
        STYLE: !0,
        SVG: !0,
        TEMPLATE: !0
    }
      , yo = new wo(_.t.trustedTypes && _.t.trustedTypes.emptyHTML || "",0,vo);
    /*

 SPDX-License-Identifier: Apache-2.0
*/
    _.La = {};
    var Ia;
    var Ra = function() {}
      , Ka = function(a) {
        this.j = a
    };
    _.O(Ka, Ra);
    Ka.prototype.toString = function() {
        return this.j.toString()
    }
    ;
    var Ua = function() {}
      , Na = function(a) {
        this.j = a
    };
    _.O(Na, Ua);
    Na.prototype.toString = function() {
        return this.j.toString()
    }
    ;
    var Lm = function() {}
      , Km = function(a) {
        this.j = a
    };
    _.O(Km, Lm);
    Km.prototype.toString = function() {
        return this.j.toString()
    }
    ;
    _.Ao = function() {}
    ;
    _.Bo = function(a) {
        this.j = a
    }
    ;
    _.O(_.Bo, _.Ao);
    _.Bo.prototype.toString = function() {
        return this.j
    }
    ;
    _.Co = new _.Bo("about:invalid#zTSz",_.La);
    var Do, Eo, Og, Go;
    Do = function() {
        return !0
    }
    ;
    Eo = function(a) {
        return function() {
            return !a.apply(this, arguments)
        }
    }
    ;
    Og = function(a) {
        var b = !1, c;
        return function() {
            b || (c = a(),
            b = !0);
            return c
        }
    }
    ;
    _.Fo = function(a) {
        var b = a;
        return function() {
            if (b) {
                var c = b;
                b = null;
                c()
            }
        }
    }
    ;
    Go = function(a, b, c) {
        var d = 0
          , e = !1
          , f = []
          , g = function() {
            d = 0;
            e && (e = !1,
            h())
        }
          , h = function() {
            d = _.t.setTimeout(g, b);
            var k = f;
            f = [];
            a.apply(c, k)
        };
        return function(k) {
            f = arguments;
            d ? e = !0 : h()
        }
    }
    ;
    var cb;
    cb = Og(function() {
        var a = !1;
        try {
            var b = Object.defineProperty({}, "passive", {
                get: function() {
                    a = !0
                }
            });
            _.t.addEventListener("test", null, b)
        } catch (c) {}
        return a
    });
    _.eb = function(a, b, c, d) {
        return a.addEventListener ? (a.addEventListener(b, c, db(d)),
        !0) : !1
    }
    ;
    _.md = function(a, b, c, d) {
        return a.removeEventListener ? (a.removeEventListener(b, c, db(d)),
        !0) : !1
    }
    ;
    var ib = function(a) {
        return new v.Promise(function(b, c) {
            var d = new XMLHttpRequest;
            d.onreadystatechange = function() {
                d.readyState === d.DONE && (200 <= d.status && 300 > d.status ? b(JSON.parse(d.responseText)) : c())
            }
            ;
            d.open("GET", a, !0);
            d.send()
        }
        )
    };
    var qb, pb = "undefined" !== typeof TextEncoder;
    var Ho = function(a) {
        Ho[" "](a);
        return a
    };
    Ho[" "] = function() {}
    ;
    var Io = function(a, b) {
        try {
            return Ho(a[b]),
            !0
        } catch (c) {}
        return !1
    }
      , Jo = function(a, b, c, d) {
        d = d ? d(b) : b;
        return Object.prototype.hasOwnProperty.call(a, d) ? a[d] : a[d] = c(b)
    };
    var Ko, Mo, No, Oo, Po, Qo, Ro, So;
    Ko = ya("Opera");
    _.Lo = Aa();
    Mo = ya("Edge");
    No = ya("Gecko") && !(-1 != xa().toLowerCase().indexOf("webkit") && !ya("Edge")) && !(ya("Trident") || ya("MSIE")) && !ya("Edge");
    Oo = -1 != xa().toLowerCase().indexOf("webkit") && !ya("Edge");
    Po = Oo && ya("Mobile");
    Qo = ya("Android");
    Ro = function() {
        var a = _.t.document;
        return a ? a.documentMode : void 0
    }
    ;
    a: {
        var To = ""
          , Uo = function() {
            var a = xa();
            if (No)
                return /rv:([^\);]+)(\)|;)/.exec(a);
            if (Mo)
                return /Edge\/([\d\.]+)/.exec(a);
            if (_.Lo)
                return /\b(?:MSIE|rv)[: ]([^\);]+)(\)|;)/.exec(a);
            if (Oo)
                return /WebKit\/(\S+)/.exec(a);
            if (Ko)
                return /(?:Version)[ \/]?(\S+)/.exec(a)
        }();
        Uo && (To = Uo ? Uo[1] : "");
        if (_.Lo) {
            var Vo = Ro();
            if (null != Vo && Vo > parseFloat(To)) {
                So = String(Vo);
                break a
            }
        }
        So = To
    }
    var Wo = So, Xo = {}, Yo = function(a) {
        return Jo(Xo, a, function() {
            return 0 <= ul(Wo, a)
        })
    }, Zo;
    if (_.t.document && _.Lo) {
        var $o = Ro();
        Zo = $o ? $o : parseInt(Wo, 10) || void 0
    } else
        Zo = void 0;
    var ap = Zo;
    !ya("Android") || Ca();
    Ca();
    Da();
    var bp = {}
      , cp = null
      , dp = No || Oo || "function" == typeof _.t.btoa
      , Bb = function(a, b) {
        void 0 === b && (b = 0);
        ep();
        b = bp[b];
        for (var c = Array(Math.floor(a.length / 3)), d = b[64] || "", e = 0, f = 0; e < a.length - 2; e += 3) {
            var g = a[e]
              , h = a[e + 1]
              , k = a[e + 2]
              , l = b[g >> 2];
            g = b[(g & 3) << 4 | h >> 4];
            h = b[(h & 15) << 2 | k >> 6];
            k = b[k & 63];
            c[f++] = l + g + h + k
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
      , fp = function(a, b) {
        if (dp && !b)
            a = _.t.btoa(a);
        else {
            for (var c = [], d = 0, e = 0; e < a.length; e++) {
                var f = a.charCodeAt(e);
                255 < f && (c[d++] = f & 255,
                f >>= 8);
                c[d++] = f
            }
            a = Bb(c, b)
        }
        return a
    }
      , Cm = function(a) {
        var b = "";
        gp(a, function(c) {
            b += String.fromCharCode(c)
        });
        return b
    }
      , gp = function(a, b) {
        function c(k) {
            for (; d < a.length; ) {
                var l = a.charAt(d++)
                  , m = cp[l];
                if (null != m)
                    return m;
                if (!Yh(l))
                    throw Error("Unknown base64 encoding at char: " + l);
            }
            return k
        }
        ep();
        for (var d = 0; ; ) {
            var e = c(-1)
              , f = c(0)
              , g = c(64)
              , h = c(64);
            if (64 === h && -1 === e)
                break;
            b(e << 2 | f >> 4);
            64 != g && (b(f << 4 & 240 | g >> 2),
            64 != h && b(g << 6 & 192 | h))
        }
    }
      , ep = function() {
        if (!cp) {
            cp = {};
            for (var a = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789".split(""), b = ["+/=", "+/", "-_=", "-_.", "-_"], c = 0; 5 > c; c++) {
                var d = a.concat(b[c].split(""));
                bp[c] = d;
                for (var e = 0; e < d.length; e++) {
                    var f = d[e];
                    void 0 === cp[f] && (cp[f] = e)
                }
            }
        }
    };
    var Ab = "function" === typeof Uint8Array;
    var tb = 0
      , ub = 0;
    var hp = function() {
        this.j = []
    };
    hp.prototype.length = function() {
        return this.j.length
    }
    ;
    hp.prototype.end = function() {
        var a = this.j;
        this.j = [];
        return a
    }
    ;
    var ip = function(a) {
        for (var b = tb, c = ub; 0 < c || 127 < b; )
            a.j.push(b & 127 | 128),
            b = (b >>> 7 | c << 25) >>> 0,
            c >>>= 7;
        a.j.push(b)
    }
      , jp = function(a, b) {
        for (; 127 < b; )
            a.j.push(b & 127 | 128),
            b >>>= 7;
        a.j.push(b)
    }
      , kp = function(a, b) {
        if (0 <= b)
            jp(a, b);
        else {
            for (var c = 0; 9 > c; c++)
                a.j.push(b & 127 | 128),
                b >>= 7;
            a.j.push(1)
        }
    };
    var lp = function() {
        this.F = [];
        this.m = 0;
        this.j = new hp
    }
      , mp = function(a, b) {
        0 !== b.length && (a.F.push(b),
        a.m += b.length)
    }
      , np = function(a, b) {
        jp(a.j, 8 * b + 2);
        b = a.j.end();
        mp(a, b);
        b.push(a.m);
        return b
    }
      , op = function(a, b) {
        var c = b.pop();
        for (c = a.m + a.j.length() - c; 127 < c; )
            b.push(c & 127 | 128),
            c >>>= 7,
            a.m++;
        b.push(c);
        a.m++
    }
      , ac = function(a, b) {
        if (b = b.zc) {
            mp(a, a.j.end());
            for (var c = 0; c < b.length; c++)
                mp(a, b[c])
        }
    }
      , lc = function(a, b, c) {
        jp(a.j, 8 * b + 2);
        jp(a.j, c.length);
        mp(a, a.j.end());
        mp(a, c)
    };
    var xb = "function" === typeof v.Symbol && "symbol" === typeof (0,
    v.Symbol)() ? (0,
    v.Symbol)(void 0) : void 0;
    var pp, qp = Object.freeze(yb([]));
    var Gb = function(a, b) {
        this.j = a;
        this.F = b;
        this.map = {};
        this.m = !1;
        for (a = this.size = 0; a < this.j.length; a++) {
            b = this.j[a];
            var c = b[0].toString()
              , d = this.map[c];
            this.map[c] = b;
            void 0 === d && this.size++
        }
    };
    p = Gb.prototype;
    p.Ia = function() {
        if (!this.m) {
            var a = rp(this);
            a.sort();
            for (var b = 0; b < a.length; b++)
                this.j[b] = this.map[a[b]];
            a.length < this.j.length && (this.j.length = a.length);
            this.m = !0;
            this.size = this.j.length
        }
        return this.j
    }
    ;
    p.clear = function() {
        this.map = {};
        this.size = this.j.length = 0;
        this.m = !0
    }
    ;
    p.delete = function(a) {
        a = a.toString();
        return this.map.hasOwnProperty(a) ? (delete this.map[a],
        this.size--,
        this.m = !1,
        !0) : !1
    }
    ;
    p.entries = function() {
        var a = []
          , b = rp(this);
        b.sort();
        for (var c = 0; c < b.length; c++) {
            var d = this.map[b[c]];
            a.push([d[0], Pb(this, d)])
        }
        return new sp(a)
    }
    ;
    p.keys = function() {
        var a = []
          , b = rp(this);
        b.sort();
        for (var c = 0; c < b.length; c++)
            a.push(this.map[b[c]][0]);
        return new sp(a)
    }
    ;
    p.values = function() {
        var a = []
          , b = rp(this);
        b.sort();
        for (var c = 0; c < b.length; c++)
            a.push(Pb(this, this.map[b[c]]));
        return new sp(a)
    }
    ;
    p.forEach = function(a, b) {
        var c = rp(this);
        c.sort();
        for (var d = 0; d < c.length; d++) {
            var e = this.map[c[d]];
            a.call(b, Pb(this, e), e[0], this)
        }
    }
    ;
    p.set = function(a, b) {
        var c = a.toString()
          , d = this.map[c];
        d ? d[1] = b : (a = [a, b],
        this.map[c] = a,
        this.j.push(a),
        this.m = !1,
        this.size++);
        return this
    }
    ;
    var Pb = function(a, b) {
        var c = b[1];
        a.F && (Array.isArray(c) || null == c) && (a = new a.F(c),
        c = b[1] = a);
        return c
    };
    Gb.prototype.get = function(a) {
        if (a = this.map[a.toString()])
            return Pb(this, a)
    }
    ;
    Gb.prototype.has = function(a) {
        return a.toString()in this.map
    }
    ;
    var rp = function(a) {
        a = a.map;
        var b = [], c;
        for (c in a)
            Object.prototype.hasOwnProperty.call(a, c) && b.push(c);
        return b
    };
    Gb.prototype[_.u(v.Symbol, "iterator")] = function() {
        return _.u(this, "entries").call(this)
    }
    ;
    var sp = function(a) {
        this.m = 0;
        this.j = a
    };
    sp.prototype.next = function() {
        return this.m < this.j.length ? {
            done: !1,
            value: this.j[this.m++]
        } : {
            done: !0,
            value: void 0
        }
    }
    ;
    sp.prototype[_.u(v.Symbol, "iterator")] = function() {
        return this
    }
    ;
    var x = function(a, b, c) {
        return -1 === b ? null : b >= a.A ? a.j ? a.j[b] : void 0 : (void 0 === c ? 0 : c) && a.j && (c = a.j[b],
        null != c) ? c : a.m[b + a.F]
    }
      , w = function(a, b, c, d) {
        b < a.A && (void 0 === d || !d) ? a.m[b + a.F] = c : (a.j || (a.j = a.m[a.A + a.F] = {}))[b] = c;
        return a
    }
      , bg = function(a, b) {
        return null != x(a, b)
    }
      , $i = function(a, b, c) {
        c = void 0 === c ? !1 : c;
        var d = x(a, b, c);
        null == d && (d = qp);
        d === qp && (d = yb(d.slice()),
        w(a, b, d, c));
        return d
    }
      , id = function(a, b) {
        a = x(a, b);
        return null == a ? a : +a
    }
      , D = function(a, b) {
        a = x(a, b);
        return null == a ? a : !!a
    }
      , Oc = function(a, b, c) {
        a = x(a, b);
        return null == a ? c : a
    }
      , tp = function(a, b, c) {
        a = D(a, b);
        return null == a ? void 0 === c ? !1 : c : a
    }
      , Nf = function(a, b, c) {
        var d = void 0 === d ? !1 : d;
        return w(a, b, null == c ? yb([]) : Array.isArray(c) ? yb(c) : c, d)
    }
      , up = function(a, b, c, d) {
        a = $i(a, b);
        void 0 != d ? a.splice(d, 0, c) : a.push(c)
    }
      , Ue = function(a, b, c, d) {
        (c = Eb(a, c)) && c !== b && null != d && (a.aa && c in a.aa && (a.aa[c] = void 0),
        w(a, c, void 0));
        return w(a, b, d)
    }
      , Eb = function(a, b) {
        for (var c = 0, d = 0; d < b.length; d++) {
            var e = b[d];
            null != x(a, e) && (0 !== c && w(a, c, void 0, !1),
            c = e)
        }
        return c
    }
      , Yb = function(a, b, c, d, e) {
        if (-1 === c)
            return null;
        a.aa || (a.aa = {});
        var f = a.aa[c];
        if (f)
            return f;
        e = x(a, c, void 0 === e ? !1 : e);
        if (null == e && !d)
            return f;
        b = new b(e);
        return a.aa[c] = b
    }
      , Wb = function(a, b, c, d) {
        a.aa || (a.aa = {});
        var e = a.aa[c];
        if (!e) {
            d = $i(a, c, void 0 === d ? !1 : d);
            e = [];
            for (var f = 0; f < d.length; f++)
                e[f] = new b(d[f]);
            a.aa[c] = e
        }
        return e
    }
      , Of = function(a, b, c) {
        var d = void 0 === d ? !1 : d;
        a.aa || (a.aa = {});
        var e = c ? c.Ia() : c;
        a.aa[b] = c;
        return w(a, b, e, d)
    }
      , ef = function(a, b, c, d) {
        a.aa || (a.aa = {});
        var e = d ? d.Ia() : d;
        a.aa[b] = d;
        return Ue(a, b, c, e)
    }
      , Ii = function(a, b, c) {
        var d = void 0 === d ? !1 : d;
        if (c) {
            var e = yb([]);
            for (var f = 0; f < c.length; f++)
                e[f] = c[f].Ia();
            a.aa || (a.aa = {});
            a.aa[b] = c
        } else
            a.aa && (a.aa[b] = void 0),
            e = qp;
        return w(a, b, e, d)
    }
      , vp = function(a, b, c, d, e) {
        var f = Wb(a, c, b, void 0 === f ? !1 : f);
        c = d ? d : new c;
        a = $i(a, b);
        void 0 != e ? (f.splice(e, 0, c),
        a.splice(e, 0, c.Ia())) : (f.push(c),
        a.push(c.Ia()));
        return c
    }
      , di = function(a, b, c, d) {
        vp(a, b, c, d, void 0)
    }
      , Pc = function(a, b, c) {
        return Oc(a, b, void 0 === c ? 0 : c)
    }
      , Gm = function(a, b, c) {
        return Oc(a, b, void 0 === c ? "" : c)
    }
      , xp = function(a) {
        return Pc(a, Fb(a, wp, 3), void 0)
    }
      , yp = function(a) {
        return Gm(a, Fb(a, wp, 2), void 0)
    }
      , pl = function(a, b, c) {
        return Db(a, b, c, !1)
    };
    var Rb;
    var zp = function(a, b, c) {
        var d = Rb;
        Rb = null;
        a || (a = d);
        d = this.constructor.messageId;
        a || (a = d ? [d] : []);
        this.F = (d ? 0 : -1) - (this.constructor.Sf || 0);
        this.aa = void 0;
        this.m = a;
        a: {
            d = this.m.length;
            a = d - 1;
            if (d && (d = this.m[a],
            zb(d))) {
                this.A = a - this.F;
                this.j = d;
                break a
            }
            void 0 !== b && -1 < b ? (this.A = Math.max(b, a + 1 - this.F),
            this.j = void 0) : this.A = Number.MAX_VALUE
        }
        if (c)
            for (b = 0; b < c.length; b++)
                if (a = c[b],
                a < this.A)
                    a += this.F,
                    (d = this.m[a]) ? Array.isArray(d) && yb(d) : this.m[a] = qp;
                else {
                    d = this.j || (this.j = this.m[this.A + this.F] = {});
                    var e = d[a];
                    e ? Array.isArray(e) && yb(e) : d[a] = qp
                }
    };
    zp.prototype.toJSON = function() {
        var a = this.Ia();
        return pp ? a : Kb(a, Mb)
    }
    ;
    zp.prototype.Ia = function() {
        return this.m
    }
    ;
    zp.prototype.X = function() {
        pp = !0;
        try {
            return JSON.stringify(this.toJSON(), Vb)
        } finally {
            pp = !1
        }
    }
    ;
    var Hc = function(a, b) {
        return Sb(a, b ? JSON.parse(b) : null)
    }
      , Ob = function(a) {
        var b = a.constructor
          , c = Kb(a.Ia(), Qb);
        b = Sb(b, c);
        Xb(b, a);
        return b
    };
    var cc = (0,
    v.Symbol)()
      , jc = (0,
    v.Symbol)()
      , Ap = function(a, b) {
        var c = new lp;
        ec(a, c, dc(b));
        mp(c, c.j.end());
        a = new Uint8Array(c.m);
        b = c.F;
        for (var d = b.length, e = 0, f = 0; f < d; f++) {
            var g = b[f];
            a.set(g, e);
            e += g.length
        }
        c.F = [a];
        return a
    }
      , Bp = kc(function(a, b, c) {
        if (5 !== a.j())
            return !1;
        w(b, c, a.l());
        return !0
    }, function(a, b, c) {
        b = x(b, c);
        if (null != b) {
            jp(a.j, 8 * c + 5);
            a = a.j;
            var d = b;
            d = (c = 0 > d ? 1 : 0) ? -d : d;
            0 === d ? 0 < 1 / d ? tb = ub = 0 : (ub = 0,
            tb = 2147483648) : isNaN(d) ? (ub = 0,
            tb = 2147483647) : 3.4028234663852886E38 < d ? (ub = 0,
            tb = (c << 31 | 2139095040) >>> 0) : 1.1754943508222875E-38 > d ? (d = Math.round(d / Math.pow(2, -149)),
            ub = 0,
            tb = (c << 31 | d) >>> 0) : (b = Math.floor(Math.log(d) / Math.LN2),
            d *= Math.pow(2, -b),
            d = Math.round(8388608 * d),
            16777216 <= d && ++b,
            ub = 0,
            tb = (c << 31 | b + 127 << 23 | d & 8388607) >>> 0);
            c = tb;
            a.j.push(c >>> 0 & 255);
            a.j.push(c >>> 8 & 255);
            a.j.push(c >>> 16 & 255);
            a.j.push(c >>> 24 & 255)
        }
    })
      , Cp = kc(function(a, b, c) {
        if (0 !== a.j())
            return !1;
        w(b, c, a.B());
        return !0
    }, function(a, b, c) {
        b = x(b, c);
        null != b && null != b && (jp(a.j, 8 * c),
        a = a.j,
        vb(b),
        ip(a))
    })
      , Dp = kc(function(a, b, c) {
        if (0 !== a.j())
            return !1;
        w(b, c, a.ba());
        return !0
    }, function(a, b, c) {
        b = x(b, c);
        null != b && null != b && (jp(a.j, 8 * c),
        a = a.j,
        vb(b),
        ip(a))
    })
      , Ep = kc(function(a, b, c) {
        if (0 !== a.j())
            return !1;
        w(b, c, a.o());
        return !0
    }, function(a, b, c) {
        b = x(b, c);
        null != b && null != b && (jp(a.j, 8 * c),
        kp(a.j, b))
    })
      , Fp = kc(function(a, b, c) {
        if (0 !== a.j())
            return !1;
        w(b, c, a.A());
        return !0
    }, function(a, b, c) {
        b = x(b, c);
        null != b && (jp(a.j, 8 * c),
        a.j.j.push(b ? 1 : 0))
    })
      , Gp = kc(function(a, b, c) {
        if (2 !== a.j())
            return !1;
        w(b, c, a.M());
        return !0
    }, mc)
      , Hp = kc(function(a, b, c) {
        if (2 !== a.j())
            return !1;
        w(b, c, a.F());
        return !0
    }, mc)
      , Ip = kc(function(a, b, c) {
        if (2 !== a.j())
            return !1;
        up(b, c, a.F());
        return !0
    }, function(a, b, c) {
        b = $i(b, c);
        if (null != b)
            for (var d = 0; d < b.length; d++) {
                var e = b[d];
                null != e && lc(a, c, rb(e))
            }
    })
      , Jp = kc(function(a, b, c, d, e) {
        if (2 !== a.j())
            return !1;
        var f = a.m;
        var g = void 0 === g ? !1 : g;
        b.aa || (b.aa = {});
        var h = b.aa[c];
        h ? b = h : (h = x(b, c, g),
        d = new d(h),
        null == h && w(b, c, d.Ia(), g),
        b = b.aa[c] = d);
        f.call(a, b, e);
        return !0
    }, function(a, b, c, d, e) {
        b = Yb(b, d, c);
        null != b && (c = np(a, c),
        e(b, a),
        op(a, c))
    })
      , Kp = kc(function(a, b, c, d, e) {
        if (2 !== a.j())
            return !1;
        a.m(vp(b, c, d), e);
        return !0
    }, function(a, b, c, d, e) {
        b = Wb(b, d, c);
        if (null != b)
            for (d = 0; d < b.length; d++) {
                var f = np(a, c);
                e(b[d], a);
                op(a, f)
            }
    })
      , Lp = kc(function(a, b, c) {
        if (0 !== a.j())
            return !1;
        w(b, c, a.D());
        return !0
    }, function(a, b, c) {
        b = x(b, c);
        null != b && (b = parseInt(b, 10),
        jp(a.j, 8 * c),
        kp(a.j, b))
    });
    var R = function() {
        zp.apply(this, arguments)
    };
    _.O(R, zp);
    var Dm = function(a) {
        R.call(this, a)
    };
    _.O(Dm, R);
    var Em = function(a) {
        R.call(this, a)
    };
    _.O(Em, R);
    var Mp = function(a) {
        this.j = a.m;
        this.m = a.F;
        this.A = a.A;
        this.yb = a.yb;
        this.H = a.H;
        this.ib = a.ib;
        this.Qb = a.Qb;
        this.$b = a.$b;
        this.Pb = a.Pb;
        this.F = a.j
    }
      , Np = function(a, b, c) {
        this.m = a;
        this.F = b;
        this.A = c;
        this.H = window;
        this.ib = "env";
        this.Qb = "n";
        this.$b = "0";
        this.Pb = "1";
        this.j = !0
    };
    Np.prototype.build = function() {
        return new Mp(this)
    }
    ;
    var Hm = function(a, b) {
        var c, d, e = void 0 === tp(b, 6) ? !0 : tp(b, 6);
        a: switch (Oc(b, 4, 0)) {
        case 1:
            var f = "pt";
            break a;
        case 2:
            f = "cr";
            break a;
        default:
            f = ""
        }
        f = new Np(nc(Oc(b, 2, 0)),Gm(b, 3),f);
        b = null !== (d = null === (c = Yb(b, Em, 5)) || void 0 === c ? void 0 : Gm(c, 1)) && void 0 !== d ? d : "";
        f.yb = b;
        f.j = e;
        f.H = a;
        return f.build()
    };
    var $k = function(a) {
        R.call(this, a)
    };
    _.O($k, R);
    var Zk = function(a, b) {
        return w(a, 1, b)
    }
      , Yk = function(a, b) {
        return w(a, 2, b)
    }
      , Op = function() {
        return [1, Lp, 2, Ep, 3, Gp]
    };
    var Qp = function(a) {
        R.call(this, a, -1, Pp)
    };
    _.O(Qp, R);
    var Rp = function(a) {
        var b = new Qp;
        return w(b, 1, a)
    }
      , Tp = function() {
        return [1, Hp, 2, Cp, 3, Kp, bl, Sp, 4, Lp, 5, Jp, $k, Op]
    }
      , bl = function(a) {
        R.call(this, a, -1, Up)
    };
    _.O(bl, R);
    var il = function(a, b) {
        w(a, 1, b)
    }
      , cl = function(a, b) {
        w(a, 3, b)
    }
      , el = function(a, b) {
        Nf(a, 4, b)
    }
      , fl = function(a, b) {
        Of(a, 7, b)
    }
      , Sp = function() {
        return [1, Hp, 2, Cp, 3, Hp, 4, Ip, 5, Lp, 6, Jp, dl, Vp, 7, Jp, Wp, Xp]
    }
      , dl = function(a) {
        R.call(this, a)
    };
    _.O(dl, R);
    dl.prototype.getId = function() {
        return Gm(this, 1)
    }
    ;
    var Vp = function() {
        return [1, Hp]
    }
      , Wp = function(a) {
        R.call(this, a)
    };
    _.O(Wp, R);
    Wp.prototype.getWidth = function() {
        return Pc(this, 1)
    }
    ;
    var hl = function(a) {
        var b = new Wp;
        return w(b, 1, a)
    };
    Wp.prototype.getHeight = function() {
        return Pc(this, 2)
    }
    ;
    var gl = function(a, b) {
        return w(a, 2, b)
    }
      , Xp = function() {
        return [1, Ep, 2, Ep]
    }
      , Pp = [3]
      , Up = [4];
    var Zp = function(a) {
        R.call(this, a, -1, Yp)
    };
    _.O(Zp, R);
    var $p = function(a, b) {
        return vp(a, 2, Qp, b, void 0)
    }
      , Xk = function(a, b) {
        Of(a, 5, b)
    }
      , aq = function() {
        return [1, Lp, 2, Kp, Qp, Tp, 3, Lp, 4, Hp, 5, Jp, $k, Op]
    }
      , Yp = [2];
    var cq = function(a) {
        R.call(this, a, -1, bq)
    };
    _.O(cq, R);
    var dq = function(a) {
        var b = new Zp;
        b = w(b, 1, 1);
        return vp(a, 1, Zp, b, void 0)
    }
      , eq = function() {
        return [1, Kp, Zp, aq]
    }
      , bq = [1];
    var gq = function(a) {
        R.call(this, a, -1, fq)
    };
    _.O(gq, R);
    var iq = function(a) {
        R.call(this, a, -1, hq)
    };
    _.O(iq, R);
    var jq = function(a) {
        R.call(this, a)
    };
    _.O(jq, R);
    var fq = [1]
      , hq = [1]
      , wp = [2, 3];
    var lq = function(a) {
        R.call(this, a, -1, kq)
    };
    _.O(lq, R);
    var mq = function(a) {
        R.call(this, a)
    };
    _.O(mq, R);
    var kq = [4];
    var oq = function(a) {
        R.call(this, a, -1, nq)
    };
    _.O(oq, R);
    var nq = [4];
    var pq = function(a) {
        R.call(this, a)
    };
    _.O(pq, R);
    var rq = function(a) {
        R.call(this, a, -1, qq)
    };
    _.O(rq, R);
    var qq = [1];
    var tq = function(a) {
        R.call(this, a, -1, sq)
    };
    _.O(tq, R);
    var uq = function(a) {
        R.call(this, a)
    };
    _.O(uq, R);
    var sq = [1];
    var wq = function(a) {
        R.call(this, a, -1, vq)
    };
    _.O(wq, R);
    var vq = [4];
    var xq = function(a) {
        R.call(this, a)
    };
    _.O(xq, R);
    var zq = function(a) {
        R.call(this, a, -1, yq)
    };
    _.O(zq, R);
    var yq = [13];
    var Bq = function(a) {
        R.call(this, a, -1, Aq)
    };
    _.O(Bq, R);
    var Aq = [13];
    var Dq = function(a) {
        R.call(this, a, -1, Cq)
    };
    _.O(Dq, R);
    var Iq = function() {
        return [1, Kp, Eq, Fq, 2, Kp, Gq, Hq]
    }
      , Eq = function(a) {
        R.call(this, a)
    };
    _.O(Eq, R);
    var Fq = function() {
        return [1, Dp, 2, Jp, Jq, Kq, 3, Jp, Jq, Kq, 4, Hp, 5, Hp, 6, Fp]
    }
      , Jq = function(a) {
        R.call(this, a)
    };
    _.O(Jq, R);
    var Kq = function() {
        return [1, Dp, 2, Dp, 3, Dp]
    }
      , Gq = function(a) {
        R.call(this, a)
    };
    _.O(Gq, R);
    var hd = function(a, b) {
        return w(a, 8, b)
    }
      , Hq = function() {
        return [1, Hp, 2, Hp, 3, Cp, 7, Cp, 8, Bp, 4, Ep, 5, Ep, 6, Ep, 9, Fp]
    }
      , Cq = [1, 2];
    var Lq = function(a) {
        R.call(this, a)
    };
    _.O(Lq, R);
    var Nq = function(a) {
        R.call(this, a, -1, Mq)
    };
    _.O(Nq, R);
    var Mq = [1];
    var Oq = function(a) {
        R.call(this, a)
    };
    _.O(Oq, R);
    var Pq = function(a) {
        R.call(this, a)
    };
    _.O(Pq, R);
    Pq.prototype.getVersion = function() {
        return x(this, 5)
    }
    ;
    var Qq = function(a) {
        R.call(this, a)
    };
    _.O(Qq, R);
    var Rq = function(a) {
        R.call(this, a)
    };
    _.O(Rq, R);
    var Sq = function(a) {
        R.call(this, a)
    };
    _.O(Sq, R);
    var Tq = function(a) {
        R.call(this, a)
    };
    _.O(Tq, R);
    var Uq = function(a) {
        R.call(this, a)
    };
    _.O(Uq, R);
    Uq.prototype.getAdUnitPath = function() {
        return Gm(this, 2)
    }
    ;
    var Wq = function(a) {
        R.call(this, a, -1, Vq)
    };
    _.O(Wq, R);
    Wq.prototype.getEscapedQemQueryId = function() {
        return Gm(this, 4)
    }
    ;
    var Vq = [2];
    var Xq = function(a) {
        R.call(this, a)
    };
    _.O(Xq, R);
    var Yq = function(a) {
        R.call(this, a)
    };
    _.O(Yq, R);
    Yq.prototype.getEscapedQemQueryId = function() {
        return Gm(this, 2)
    }
    ;
    var $q = function(a) {
        R.call(this, a, -1, Zq)
    };
    _.O($q, R);
    $q.prototype.getWidth = function() {
        return Pc(this, 9)
    }
    ;
    $q.prototype.getHeight = function() {
        return Pc(this, 10)
    }
    ;
    var Zq = [3, 7];
    var br = function(a) {
        R.call(this, a, -1, ar)
    };
    _.O(br, R);
    br.prototype.getHeight = function() {
        return x(this, 6)
    }
    ;
    br.prototype.getWidth = function() {
        return x(this, 7)
    }
    ;
    br.prototype.getEscapedQemQueryId = function() {
        return x(this, 34)
    }
    ;
    var cr = function(a) {
        R.call(this, a)
    };
    _.O(cr, R);
    cr.prototype.D = function() {
        return x(this, 1)
    }
    ;
    var ar = [14, 15, 16, 17, 18, 19, 20, 21, 22, 45, 23, 27, 28, 38, 53, 62]
      , dr = [4, 41]
      , er = [39, 48];
    cr.prototype.getHtml = cr.prototype.D;
    var Bm = function(a) {
        R.call(this, a)
    };
    _.O(Bm, R);
    var Gl = window;
    var gr = function(a) {
        R.call(this, a, -1, fr)
    };
    _.O(gr, R);
    var ir = function() {
        var a = new gr
          , b = _.F(hr);
        return pl(a, 7, b)
    }
      , kr = function() {
        var a = ir()
          , b = _.F(jr);
        return pl(a, 8, b)
    }
      , fr = [15];
    var lr = function(a) {
        R.call(this, a)
    };
    _.O(lr, R);
    lr.prototype.getCorrelator = function() {
        return Pc(this, 1)
    }
    ;
    lr.prototype.setCorrelator = function(a) {
        return Db(this, 1, a, 0)
    }
    ;
    var mr = function(a) {
        R.call(this, a)
    };
    _.O(mr, R);
    var nr = _.Lo || Oo;
    var pr = function(a, b, c) {
        a.rel = c;
        -1 != c.toLowerCase().indexOf("stylesheet") ? (a.href = Va(b).toString(),
        (b = or('style[nonce],link[rel="stylesheet"][nonce]', a.ownerDocument && a.ownerDocument.defaultView)) && a.setAttribute("nonce", b)) : (b instanceof Jd ? b = Va(b).toString() : b instanceof Kd ? b = _.Ld(b) : (b instanceof Kd || (b = "object" == typeof b && b.Ka ? b.Ga() : String(b),
        Nd.test(b) || (b = "about:invalid#zClosurez"),
        b = new Kd(b,Od)),
        b = _.Ld(b)),
        a.href = b)
    }
      , qr = /^[\w+/_-]+[=]{0,2}$/
      , or = function(a, b) {
        b = (b || _.t).document;
        return b.querySelector ? (a = b.querySelector(a)) && (a = a.nonce || a.getAttribute("nonce")) && qr.test(a) ? a : "" : ""
    };
    _.Cg = function(a, b) {
        this.x = void 0 !== a ? a : 0;
        this.y = void 0 !== b ? b : 0
    }
    ;
    _.Cg.prototype.ceil = function() {
        this.x = Math.ceil(this.x);
        this.y = Math.ceil(this.y);
        return this
    }
    ;
    _.Cg.prototype.floor = function() {
        this.x = Math.floor(this.x);
        this.y = Math.floor(this.y);
        return this
    }
    ;
    _.Cg.prototype.round = function() {
        this.x = Math.round(this.x);
        this.y = Math.round(this.y);
        return this
    }
    ;
    _.Fg = function(a, b) {
        this.width = a;
        this.height = b
    }
    ;
    p = _.Fg.prototype;
    p.aspectRatio = function() {
        return this.width / this.height
    }
    ;
    p.isEmpty = function() {
        return !(this.width * this.height)
    }
    ;
    p.ceil = function() {
        this.width = Math.ceil(this.width);
        this.height = Math.ceil(this.height);
        return this
    }
    ;
    p.floor = function() {
        this.width = Math.floor(this.width);
        this.height = Math.floor(this.height);
        return this
    }
    ;
    p.round = function() {
        this.width = Math.round(this.width);
        this.height = Math.round(this.height);
        return this
    }
    ;
    var rr, sr, Ig, tr, ur, wr;
    rr = function(a) {
        return a = Sd(a, void 0)
    }
    ;
    sr = String.prototype.repeat ? function(a, b) {
        return a.repeat(b)
    }
    : function(a, b) {
        return Array(b + 1).join(a)
    }
    ;
    Ig = function(a) {
        if (!_.u(Number, "isFinite").call(Number, a))
            return String(a);
        a = String(a);
        var b = a.indexOf(".");
        -1 === b && (b = a.length);
        var c = "-" === a[0] ? "-" : "";
        c && (a = a.substring(1));
        return c + sr("0", Math.max(0, 2 - b)) + a
    }
    ;
    tr = function() {
        return Math.floor(2147483648 * Math.random()).toString(36) + Math.abs(Math.floor(2147483648 * Math.random()) ^ $d()).toString(36)
    }
    ;
    ur = 2147483648 * Math.random() | 0;
    _.vr = function(a) {
        return String(a).replace(/\-([a-z])/g, function(b, c) {
            return c.toUpperCase()
        })
    }
    ;
    wr = function(a) {
        return a.replace(RegExp("(^|[\\s]+)([a-z])", "g"), function(b, c, d) {
            return c + d.toUpperCase()
        })
    }
    ;
    var zr, Br, Ar, Er, Gr, oc, rc, xr;
    zr = function(a) {
        return a ? new xr(_.yr(a)) : Yn || (Yn = new xr)
    }
    ;
    Br = function(a, b) {
        ta(b, function(c, d) {
            c && "object" == typeof c && c.Ka && (c = c.Ga());
            "style" == d ? a.style.cssText = c : "class" == d ? a.className = c : "for" == d ? a.htmlFor = c : Ar.hasOwnProperty(d) ? a.setAttribute(Ar[d], c) : 0 == d.lastIndexOf("aria-", 0) || 0 == d.lastIndexOf("data-", 0) ? a.setAttribute(d, c) : a[d] = c
        })
    }
    ;
    Ar = {
        cellpadding: "cellPadding",
        cellspacing: "cellSpacing",
        colspan: "colSpan",
        frameborder: "frameBorder",
        height: "height",
        maxlength: "maxLength",
        nonce: "nonce",
        role: "role",
        rowspan: "rowSpan",
        type: "type",
        usemap: "useMap",
        valign: "vAlign",
        width: "width"
    };
    _.Dr = function(a) {
        a = a.document;
        a = _.Cr(a) ? a.documentElement : a.body;
        return new _.Fg(a.clientWidth,a.clientHeight)
    }
    ;
    Er = function(a) {
        return a.scrollingElement ? a.scrollingElement : !Oo && _.Cr(a) ? a.documentElement : a.body || a.documentElement
    }
    ;
    _.Fr = function(a) {
        return a ? a.parentWindow || a.defaultView : window
    }
    ;
    Gr = function(a, b, c) {
        function d(h) {
            h && b.appendChild("string" === typeof h ? a.createTextNode(h) : h)
        }
        for (var e = 1; e < c.length; e++) {
            var f = c[e];
            if (!Zh(f) || _.ia(f) && 0 < f.nodeType)
                d(f);
            else {
                a: {
                    if (f && "number" == typeof f.length) {
                        if (_.ia(f)) {
                            var g = "function" == typeof f.item || "string" == typeof f.item;
                            break a
                        }
                        if ("function" === typeof f) {
                            g = "function" == typeof f.item;
                            break a
                        }
                    }
                    g = !1
                }
                _.bo(g ? fa(f) : f, d)
            }
        }
    }
    ;
    _.Cr = function(a) {
        return "CSS1Compat" == a.compatMode
    }
    ;
    _.Hr = function(a) {
        return a && a.parentNode ? a.parentNode.removeChild(a) : null
    }
    ;
    _.Ir = function(a) {
        var b;
        if (nr && !(_.Lo && Yo("9") && !Yo("10") && _.t.SVGElement && a instanceof _.t.SVGElement) && (b = a.parentElement))
            return b;
        b = a.parentNode;
        return _.ia(b) && 1 == b.nodeType ? b : null
    }
    ;
    oc = function(a) {
        var b, c = arguments.length;
        if (!c)
            return null;
        if (1 == c)
            return arguments[0];
        var d = []
          , e = Infinity;
        for (b = 0; b < c; b++) {
            for (var f = [], g = arguments[b]; g; )
                f.unshift(g),
                g = g.parentNode;
            d.push(f);
            e = Math.min(e, f.length)
        }
        f = null;
        for (b = 0; b < e; b++) {
            g = d[0][b];
            for (var h = 1; h < c; h++)
                if (g != d[h][b])
                    return f;
            f = g
        }
        return f
    }
    ;
    _.yr = function(a) {
        return 9 == a.nodeType ? a : a.ownerDocument || a.document
    }
    ;
    rc = function(a) {
        try {
            return a.contentWindow || (a.contentDocument ? _.Fr(a.contentDocument) : null)
        } catch (b) {}
        return null
    }
    ;
    xr = function(a) {
        this.j = a || _.t.document || document
    }
    ;
    p = xr.prototype;
    p.getElementsByTagName = function(a, b) {
        return (b || this.j).getElementsByTagName(String(a))
    }
    ;
    p.createElement = function(a) {
        var b = this.j;
        a = String(a);
        "application/xhtml+xml" === b.contentType && (a = a.toLowerCase());
        return b.createElement(a)
    }
    ;
    p.createTextNode = function(a) {
        return this.j.createTextNode(String(a))
    }
    ;
    p.append = function(a, b) {
        Gr(_.yr(a), a, arguments)
    }
    ;
    p.vd = _.Hr;
    var Jr = function() {
        return ya("iPad") || ya("Android") && !ya("Mobile") || ya("Silk")
    };
    var Lr, Mr, Nr, kj;
    _.Kr = RegExp("^(?:([^:/?#.]+):)?(?://(?:([^\\\\/?#]*)@)?([^\\\\/?#]*?)(?::([0-9]+))?(?=[\\\\/?#]|$))?([^?#]+)?(?:\\?([^#]*))?(?:#([\\s\\S]*))?$");
    Lr = function(a) {
        return a ? decodeURI(a) : a
    }
    ;
    Mr = function(a, b, c) {
        if (Array.isArray(b))
            for (var d = 0; d < b.length; d++)
                Mr(a, String(b[d]), c);
        else
            null != b && c.push(a + ("" === b ? "" : "=" + encodeURIComponent(String(b))))
    }
    ;
    Nr = /#|$/;
    kj = function(a, b) {
        var c = a.search(Nr);
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
    }
    ;
    var qc, pc, vd, Or, wd, oj, Pg, Rc, Pr, Qr, Kh, dg, Qc, Sc, Sr, Tr, Ur, Qg, Vr, Wr, Xr, Yr, Zr, $r, Mh, as, bs, cs, Oi, sh, uh, qh, rh, th, Cl, ds, fs, gs, hs, is, js, dd, ks, ls, ui, ms, ns, os, ri, ps;
    qc = function(a) {
        try {
            return !!a && null != a.location.href && Io(a, "foo")
        } catch (b) {
            return !1
        }
    }
    ;
    pc = function(a, b, c, d) {
        b = void 0 === b ? !1 : b;
        d = void 0 === d ? _.t : d;
        c = (void 0 === c ? 0 : c) ? Or(d) : d;
        for (d = 0; c && 40 > d++ && (!b && !qc(c) || !a(c)); )
            c = Or(c)
    }
    ;
    vd = function() {
        var a, b = a = void 0 === a ? _.t : a;
        pc(function(c) {
            b = c;
            return !1
        });
        return b
    }
    ;
    Or = function(a) {
        try {
            var b = a.parent;
            if (b && b != a)
                return b
        } catch (c) {}
        return null
    }
    ;
    wd = function(a) {
        return qc(a.top) ? a.top : null
    }
    ;
    oj = function(a, b) {
        var c = _.Lj("SCRIPT", a);
        ab(c, b);
        return (a = a.getElementsByTagName("script")[0]) && a.parentNode ? (a.parentNode.insertBefore(c, a),
        c) : null
    }
    ;
    Pg = function(a, b) {
        return b.getComputedStyle ? b.getComputedStyle(a, null) : a.currentStyle
    }
    ;
    Rc = function() {
        if (!v.globalThis.crypto)
            return Math.random();
        try {
            var a = new Uint32Array(1);
            v.globalThis.crypto.getRandomValues(a);
            return a[0] / 65536 / 65536
        } catch (b) {
            return Math.random()
        }
    }
    ;
    _.tf = function(a, b) {
        if (a)
            for (var c in a)
                Object.prototype.hasOwnProperty.call(a, c) && b(a[c], c, a)
    }
    ;
    Pr = function(a) {
        for (var b in a)
            if (Object.prototype.hasOwnProperty.call(a, b))
                return !1;
        return !0
    }
    ;
    Qr = function(a) {
        var b = [];
        _.tf(a, function(c, d) {
            b.push(d)
        });
        return b
    }
    ;
    _.Rr = function(a) {
        var b = [];
        _.tf(a, function(c) {
            b.push(c)
        });
        return b
    }
    ;
    Kh = function(a, b) {
        return ua(a, function(c, d) {
            return Object.prototype.hasOwnProperty.call(a, d) && b(c, d)
        })
    }
    ;
    dg = function(a) {
        var b = a.length;
        if (0 == b)
            return 0;
        for (var c = 305419896, d = 0; d < b; d++)
            c ^= (c << 5) + (c >> 2) + a.charCodeAt(d) & 4294967295;
        return 0 < c ? c : 4294967296 + c
    }
    ;
    Qc = Og(function() {
        return _.se(["Google Web Preview", "Mediapartners-Google", "Google-Read-Aloud", "Google-Adwords"], Sr) || 1E-4 > Math.random()
    });
    Sc = function(a, b) {
        try {
            if (a)
                return a.setItem("google_experiment_mod", b),
                b
        } catch (c) {}
        return null
    }
    ;
    Sr = function(a) {
        return -1 != xa().indexOf(a)
    }
    ;
    Tr = /^([0-9.]+)px$/;
    Ur = function() {
        return /^true$/.test("false")
    }
    ;
    Qg = function(a) {
        return (a = Tr.exec(a)) ? +a[1] : null
    }
    ;
    Vr = function(a, b) {
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
    }
    ;
    Wr = function(a) {
        if (!a)
            return "";
        var b = RegExp(".*[&#?]google_debug(=[^&]*)?(&.*)?$");
        try {
            var c = b.exec(decodeURIComponent(a));
            if (c)
                return c[1] && 1 < c[1].length ? c[1].substring(1) : "true"
        } catch (d) {}
        return ""
    }
    ;
    Xr = {
        Ye: "allow-forms",
        Ze: "allow-modals",
        $e: "allow-orientation-lock",
        af: "allow-pointer-lock",
        bf: "allow-popups",
        cf: "allow-popups-to-escape-sandbox",
        df: "allow-presentation",
        ef: "allow-same-origin",
        ff: "allow-scripts",
        gf: "allow-top-navigation",
        hf: "allow-top-navigation-by-user-activation"
    };
    Yr = Og(function() {
        return _.Rr(Xr)
    });
    Zr = function(a) {
        var b = Yr();
        return a.length ? _.fe(b, function(c) {
            return !(0 <= _.aa(a, c))
        }) : b
    }
    ;
    $r = function() {
        var a = _.Lj("IFRAME")
          , b = {};
        _.bo(Yr(), function(c) {
            a.sandbox && a.sandbox.supports && a.sandbox.supports(c) && (b[c] = !0)
        });
        return b
    }
    ;
    Mh = function(a) {
        a = a && a.toString && a.toString();
        return "string" === typeof a && -1 != a.indexOf("[native code]")
    }
    ;
    as = function(a, b) {
        try {
            return !(!a.frames || !a.frames[b])
        } catch (c) {
            return !1
        }
    }
    ;
    bs = function(a, b) {
        for (var c = 0; 50 > c; ++c) {
            if (as(a, b))
                return a;
            if (!(a = Or(a)))
                break
        }
        return null
    }
    ;
    cs = function(a, b) {
        if (!b || !b.frames)
            return null;
        if (b.frames[a])
            return b.frames[a].frameElement;
        try {
            var c = b.document, d = c.head, e, f = null != (e = c.body) ? e : null == d ? void 0 : d.parentElement;
            if (f) {
                var g = _.Lj("IFRAME");
                g.name = a;
                g.id = a;
                g.setAttribute("style", "display:none;position:fixed;left:-999px;top:-999px;width:0px;height:0px;");
                f.appendChild(g);
                return g
            }
        } catch (h) {}
        return null
    }
    ;
    Oi = Og(function() {
        return !Jr() && (ya("iPod") || ya("iPhone") || ya("Android") || ya("IEMobile")) ? 2 : Jr() ? 1 : 0
    });
    sh = function(a, b) {
        var c;
        for (c = void 0 === c ? 100 : c; a && c--; ) {
            if (a == b)
                return !0;
            a = a.parentElement
        }
        return !1
    }
    ;
    _.gh = function(a, b) {
        _.tf(b, function(c, d) {
            a.style.setProperty(d, c, "important")
        })
    }
    ;
    uh = function(a, b, c) {
        for (c = void 0 === c ? 100 : c; a && c-- && !1 !== b(a); )
            a = a.parentElement
    }
    ;
    qh = function(a) {
        return th(a, function(b) {
            return "fixed" == b.position || "sticky" == b.position
        })
    }
    ;
    rh = function(a) {
        return th(a, function(b) {
            return "left" == b["float"] || "right" == b["float"] || "left" == b.cssFloat || "right" == b.cssFloat
        })
    }
    ;
    th = function(a, b) {
        for (var c = 100; a && c--; ) {
            var d = Pg(a, window);
            if (d) {
                if (b(d))
                    return !0;
                a = a.parentElement
            }
        }
        return !1
    }
    ;
    Cl = function(a) {
        if (!a)
            return null;
        a = a.transform;
        if (!a)
            return null;
        a = a.replace(/^.*\(([0-9., -]+)\)$/, "$1").split(/, /);
        return 6 != a.length ? null : _.de(a, parseFloat)
    }
    ;
    ds = {};
    _.es = (ds["http://googleads.g.doubleclick.net"] = !0,
    ds["http://pagead2.googlesyndication.com"] = !0,
    ds["https://googleads.g.doubleclick.net"] = !0,
    ds["https://pagead2.googlesyndication.com"] = !0,
    ds);
    fs = function(a) {
        _.t.console && _.t.console.warn && _.t.console.warn(a)
    }
    ;
    gs = [];
    hs = function() {
        var a = gs;
        gs = [];
        a = _.y(a);
        for (var b = a.next(); !b.done; b = a.next()) {
            b = b.value;
            try {
                b()
            } catch (c) {}
        }
    }
    ;
    is = function(a) {
        return a.replace(/\\(n|r|\\)/g, function(b, c) {
            return "n" == c ? "\n" : "r" == c ? "\r" : "\\"
        })
    }
    ;
    js = function() {
        return Math.floor(Math.random() * Math.pow(2, 52))
    }
    ;
    dd = function(a) {
        if ("number" !== typeof a.goog_pvsid)
            try {
                Object.defineProperty(a, "goog_pvsid", {
                    value: js(),
                    configurable: !1
                })
            } catch (b) {}
        return Number(a.goog_pvsid) || -1
    }
    ;
    ks = function(a, b) {
        sc(_.Fr(_.yr(a)), a, b)
    }
    ;
    ls = function(a, b) {
        "complete" === a.readyState || "interactive" === a.readyState ? (gs.push(b),
        1 == gs.length && (v.Promise ? v.Promise.resolve().then(hs) : window.setImmediate ? setImmediate(hs) : setTimeout(hs, 0))) : a.addEventListener("DOMContentLoaded", b)
    }
    ;
    ui = function(a) {
        return 0 === a || "number" === typeof a && isFinite(a) && 0 == a % 1 && 0 < a
    }
    ;
    ms = function(a) {
        try {
            return Math.round(Date.parse(a.lastModified) / 1E3) || null
        } catch (b) {
            return null
        }
    }
    ;
    ns = function(a, b) {
        var c = _.Lj("DIV");
        c.id = a;
        c.textContent = b;
        _.gh(c, {
            height: "24px",
            "line-height": "24px",
            "text-align": "center",
            "vertical-align": "middle",
            color: "white",
            "background-color": "black",
            margin: "0",
            "font-family": "Roboto",
            "font-style": "normal",
            "font-weight": "500",
            "font-size": "11px",
            "letter-spacing": "0.08em"
        });
        return c
    }
    ;
    os = function(a) {
        return new v.Promise(function(b) {
            setTimeout(function() {
                return void b("timeout")
            }, a)
        }
        )
    }
    ;
    ri = function(a) {
        try {
            var b = JSON.stringify(a)
        } catch (c) {}
        return b || String(a)
    }
    ;
    _.Lj = function(a, b) {
        b = void 0 === b ? document : b;
        return b.createElement(String(a).toLowerCase())
    }
    ;
    ps = function(a) {
        for (var b = a; a && a != a.parent; )
            a = a.parent,
            qc(a) && (b = a);
        return b
    }
    ;
    _.qs = function(a, b, c, d) {
        this.top = a;
        this.right = b;
        this.bottom = c;
        this.left = d
    }
    ;
    _.qs.prototype.getWidth = function() {
        return this.right - this.left
    }
    ;
    _.qs.prototype.getHeight = function() {
        return this.bottom - this.top
    }
    ;
    _.rs = function(a) {
        return new _.qs(a.top,a.right,a.bottom,a.left)
    }
    ;
    _.qs.prototype.ceil = function() {
        this.top = Math.ceil(this.top);
        this.right = Math.ceil(this.right);
        this.bottom = Math.ceil(this.bottom);
        this.left = Math.ceil(this.left);
        return this
    }
    ;
    _.qs.prototype.floor = function() {
        this.top = Math.floor(this.top);
        this.right = Math.floor(this.right);
        this.bottom = Math.floor(this.bottom);
        this.left = Math.floor(this.left);
        return this
    }
    ;
    _.qs.prototype.round = function() {
        this.top = Math.round(this.top);
        this.right = Math.round(this.right);
        this.bottom = Math.round(this.bottom);
        this.left = Math.round(this.left);
        return this
    }
    ;
    var ss = function(a, b, c, d) {
        this.left = a;
        this.top = b;
        this.width = c;
        this.height = d
    }
      , ts = function(a) {
        return new _.qs(a.top,a.left + a.width,a.top + a.height,a.left)
    }
      , us = function(a, b) {
        var c = Math.max(a.left, b.left)
          , d = Math.min(a.left + a.width, b.left + b.width);
        if (c <= d) {
            var e = Math.max(a.top, b.top);
            a = Math.min(a.top + a.height, b.top + b.height);
            if (e <= a)
                return new ss(c,e,d - c,a - e)
        }
        return null
    };
    ss.prototype.ceil = function() {
        this.left = Math.ceil(this.left);
        this.top = Math.ceil(this.top);
        this.width = Math.ceil(this.width);
        this.height = Math.ceil(this.height);
        return this
    }
    ;
    ss.prototype.floor = function() {
        this.left = Math.floor(this.left);
        this.top = Math.floor(this.top);
        this.width = Math.floor(this.width);
        this.height = Math.floor(this.height);
        return this
    }
    ;
    ss.prototype.round = function() {
        this.left = Math.round(this.left);
        this.top = Math.round(this.top);
        this.width = Math.round(this.width);
        this.height = Math.round(this.height);
        return this
    }
    ;
    var vs = function(a) {
        a = void 0 === a ? _.t : a;
        var b = a.context || a.AMP_CONTEXT_DATA;
        if (!b)
            try {
                b = a.parent.context || a.parent.AMP_CONTEXT_DATA
            } catch (c) {}
        try {
            if (b && b.pageViewId && b.canonicalUrl)
                return b
        } catch (c) {}
        return null
    }
      , ws = function(a) {
        return (a = a || vs()) ? qc(a.master) ? a.master : null : null
    }
      , ys = function(a, b) {
        if (a.ampInaboxInitialized)
            return !0;
        var c, d = "amp-ini-load" === b.data;
        a.ampInaboxPendingMessages && !d && (c = /^amp-(\d{15,20})?/.exec(b.data)) && (a.ampInaboxPendingMessages.push(b),
        xs(a, c[1]));
        return !1
    }
      , zs = function(a, b, c) {
        var d = !0;
        d = void 0 === d ? !1 : d;
        var e = a.ampInaboxIframes = a.ampInaboxIframes || []
          , f = function() {}
          , g = function() {};
        b && (e.push(b),
        g = function() {
            a.AMP && a.AMP.inaboxUnregisterIframe && a.AMP.inaboxUnregisterIframe(b);
            da(e, b);
            f()
        }
        );
        if (a.ampInaboxInitialized)
            return g;
        a.ampInaboxPendingMessages = a.ampInaboxPendingMessages || [];
        c && /^\d{15,20}$/.test(c) && xs(a, c);
        var h = function(k) {
            ys(a, k) && f()
        };
        d || e.google_amp_listener_added || (e.google_amp_listener_added = !0,
        _.eb(a, "message", h),
        f = function() {
            _.md(a, "message", h)
        }
        );
        return g
    }
      , xs = function(a, b) {
        a.ampInaboxInitialized || b && !/^\d{15,20}$/.test(b) || a.document.querySelector('script[src$="amp4ads-host-v0.js"]') || oj(a.document, b ? mb(ao("https://cdn.ampproject.org/rtv/%{ampVersion}/amp4ads-host-v0.js"), {
            ampVersion: b
        }) : pj(Hd(ao("https://cdn.ampproject.org/amp4ads-host-v0.js"))))
    };
    _.tc = function(a) {
        this.fe = a
    }
    ;
    _.As = [uc("data"), uc("http"), uc("https"), uc("mailto"), uc("ftp"), new _.tc(function(a) {
        return /^[^:]*([/?#]|$)/.test(a)
    }
    )];
    var Ds, oe, Eg, Fs, Gs, Bg;
    _.Cs = function(a, b, c) {
        if ("string" === typeof b)
            (b = _.Bs(a, b)) && (a.style[b] = c);
        else
            for (var d in b) {
                c = a;
                var e = b[d]
                  , f = _.Bs(c, d);
                f && (c.style[f] = e)
            }
    }
    ;
    Ds = {};
    _.Bs = function(a, b) {
        var c = Ds[b];
        if (!c) {
            var d = _.vr(b);
            c = d;
            void 0 === a.style[d] && (d = (Oo ? "Webkit" : No ? "Moz" : _.Lo ? "ms" : null) + wr(d),
            void 0 !== a.style[d] && (c = d));
            Ds[b] = c
        }
        return c
    }
    ;
    _.Es = function(a, b) {
        var c = _.yr(a);
        return c.defaultView && c.defaultView.getComputedStyle && (a = c.defaultView.getComputedStyle(a, null)) ? a[b] || a.getPropertyValue(b) || "" : ""
    }
    ;
    oe = function(a, b) {
        return _.Es(a, b) || (a.currentStyle ? a.currentStyle[b] : null) || a.style && a.style[b]
    }
    ;
    Eg = function(a) {
        try {
            return a.getBoundingClientRect()
        } catch (b) {
            return {
                left: 0,
                top: 0,
                right: 0,
                bottom: 0
            }
        }
    }
    ;
    Fs = function(a) {
        if (_.Lo && !(8 <= Number(ap)))
            return a.offsetParent;
        var b = _.yr(a)
          , c = oe(a, "position")
          , d = "fixed" == c || "absolute" == c;
        for (a = a.parentNode; a && a != b; a = a.parentNode)
            if (11 == a.nodeType && a.host && (a = a.host),
            c = oe(a, "position"),
            d = d && "static" == c && a != b.documentElement && a != b.body,
            !d && (a.scrollWidth > a.clientWidth || a.scrollHeight > a.clientHeight || "fixed" == c || "absolute" == c || "relative" == c))
                return a;
        return null
    }
    ;
    Gs = function(a) {
        var b = _.yr(a)
          , c = new _.Cg(0,0);
        var d = b ? _.yr(b) : document;
        d = !_.Lo || 9 <= Number(ap) || _.Cr(zr(d).j) ? d.documentElement : d.body;
        if (a == d)
            return c;
        a = Eg(a);
        d = zr(b).j;
        b = Er(d);
        d = d.parentWindow || d.defaultView;
        b = _.Lo && Yo("10") && d.pageYOffset != b.scrollTop ? new _.Cg(b.scrollLeft,b.scrollTop) : new _.Cg(d.pageXOffset || b.scrollLeft,d.pageYOffset || b.scrollTop);
        c.x = a.left + b.x;
        c.y = a.top + b.y;
        return c
    }
    ;
    Bg = function(a, b) {
        var c = new _.Cg(0,0)
          , d = _.Fr(_.yr(a));
        if (!Io(d, "parent"))
            return c;
        do {
            var e = d == b ? Gs(a) : _.Hs(a);
            c.x += e.x;
            c.y += e.y
        } while (d && d != b && d != d.parent && (a = d.frameElement) && (d = d.parent));
        return c
    }
    ;
    _.Hs = function(a) {
        a = Eg(a);
        return new _.Cg(a.left,a.top)
    }
    ;
    _.Is = function(a, b) {
        "number" == typeof a && (a = (b ? Math.round(a) : a) + "px");
        return a
    }
    ;
    _.pe = function(a, b) {
        if ("none" != oe(b, "display"))
            return a(b);
        var c = b.style
          , d = c.display
          , e = c.visibility
          , f = c.position;
        c.visibility = "hidden";
        c.position = "absolute";
        c.display = "inline";
        a = a(b);
        c.display = d;
        c.position = f;
        c.visibility = e;
        return a
    }
    ;
    _.qe = function(a) {
        var b = a.offsetWidth
          , c = a.offsetHeight
          , d = Oo && !b && !c;
        return (void 0 === b || d) && a.getBoundingClientRect ? (a = Eg(a),
        new _.Fg(a.right - a.left,a.bottom - a.top)) : new _.Fg(b,c)
    }
    ;
    var oh = function(a) {
        a = ws(vs(a)) || a;
        a = a.google_unique_id;
        return "number" === typeof a ? a : 0
    }
      , Hl = function(a) {
        var b = a.ActiveXObject;
        if (a.navigator.plugins && a.navigator.mimeTypes.length) {
            if ((b = a.navigator.plugins["Shockwave Flash"]) && b.description)
                return b.description.replace(/([a-zA-Z]|\s)+/, "").replace(/(\s)+r/, ".")
        } else {
            if (a.navigator.userAgent && 0 <= a.navigator.userAgent.indexOf("Windows CE")) {
                var c = 3;
                for (a = 1; a; )
                    try {
                        a = new b("ShockwaveFlash.ShockwaveFlash." + (c + 1)),
                        c++
                    } catch (d) {
                        a = null
                    }
                return c.toString()
            }
            if (Aa()) {
                a = null;
                try {
                    a = new b("ShockwaveFlash.ShockwaveFlash.7")
                } catch (d) {
                    c = 0;
                    try {
                        a = new b("ShockwaveFlash.ShockwaveFlash.6"),
                        c = 6,
                        a.AllowScriptAccess = "always"
                    } catch (e) {
                        if (6 === c)
                            return c.toString()
                    }
                    try {
                        a = new b("ShockwaveFlash.ShockwaveFlash")
                    } catch (e) {}
                }
                if (a)
                    return c = a.GetVariable("$version").split(" ")[1],
                    c.replace(/,/g, ".")
            }
        }
        return "0"
    };
    var Js = xc(function(a) {
        var b = []
          , c = {};
        a = _.y(a);
        for (var d = a.next(); !d.done; c = {
            Cb: c.Cb
        },
        d = a.next())
            c.Cb = d.value,
            xc(function(e) {
                return function() {
                    b.push('[{"' + e.Cb.pd + '":' + e.Cb.message.X() + "}]")
                }
            }(c))();
        return "[[" + b.join(",") + "]]"
    });
    var Ks = function(a, b) {
        if (v.globalThis.fetch)
            v.globalThis.fetch(a, {
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
    var Zm = function(a) {
        var b = void 0 === b ? Ks : b;
        this.A = void 0 === a ? 1E3 : a;
        this.F = b;
        this.m = [];
        this.j = null
    };
    Zm.prototype.od = function() {
        var a = vc.apply(0, arguments)
          , b = this;
        xc(function() {
            b.m.push.apply(b.m, _.yc(a));
            var c = xc(function() {
                var d = Js(b.m);
                b.F("https://pagead2.googlesyndication.com/pagead/ping?e=1", d);
                b.m = [];
                b.j = null
            });
            100 <= b.m.length ? (null !== b.j && clearTimeout(b.j),
            b.j = setTimeout(c, 0)) : null === b.j && (b.j = setTimeout(c, b.A))
        })()
    }
    ;
    var U = function(a, b) {
        this.j = a;
        this.defaultValue = void 0 === b ? !1 : b
    }
      , Ls = function(a, b) {
        this.j = a;
        this.defaultValue = void 0 === b ? 0 : b
    }
      , Ms = function(a, b) {
        this.j = a;
        this.defaultValue = void 0 === b ? "" : b
    }
      , Ns = function(a, b) {
        b = void 0 === b ? [] : b;
        this.j = a;
        this.defaultValue = b
    };
    var zl, lm, nm, Bf, Os, Ps, Qs, Rs, ph, Ss, Ts, Us, hg, Vs, Ws, Xs, Ys, Zs, $s, at, bt, ct, dt, et, ft, gt, ht, it, jt, kt, li, ni, lt, mt, Kf, nt, ot, pt, qt, rt, st, tt, ut, vt, wt, xt, yt, Ik, zt, hm, At, Bt, Ct, Dt, Et, Ft, Gt, Ht, It, Pl, Jt, ym, xg, wg, Kt, Lt, Ff, Mt, $m, Nt, Ot, Pt, Qt, Rt, St, Tt, Ut, Tk, Vt, Wt, Xt, ii, Yt, Vh, Zt, $t, au, bu, cu, du, eu, fu, gu, hu, Xm, iu, ju, ku, lu, mu, xd, nu, ou, gd, pu, qu, ru, cd, su, jr, tu, uu, pg, ng, vu, wu, Ri, xu, hr, yu, Au, Bu, Cu, Nj, Du, Eu, Fu, Gu, Hu, Iu, Ju, Ku;
    _.Pi = new U(421072586);
    zl = new U(98);
    lm = new U(206);
    nm = new Ls(465);
    Bf = new U(144);
    Os = new U(368279556);
    Ps = new U(366809413);
    Qs = new Ms(3);
    Rs = new Ns(481);
    ph = new Ls(7,.1);
    Ss = new U(212);
    Ts = new Ls(383474324);
    Us = new Ls(413725046);
    hg = new Ls(387165532);
    Vs = new U(401851958);
    Ws = new U(359351145);
    Xs = new U(398776878,!0);
    Ys = new U(391385505);
    Zs = new U(416396733);
    $s = new U(23);
    at = new U(369430);
    bt = new Ls(357045128);
    ct = new U(416614038);
    dt = new U(410883576);
    et = new U(411170147,!0);
    ft = new U(419920765);
    gt = new U(395842139);
    ht = new U(403405932);
    it = new Ls(408380992,.01);
    jt = new U(400963806);
    kt = new U(400963805,!0);
    li = new U(400992469,!0);
    ni = new U(400992468,!0);
    lt = new Ls(397316938,1E3);
    mt = new Ls(385440135,1E3);
    Kf = new U(378290973,!0);
    nt = new Ls(377289019,1E4);
    ot = new U(421859928);
    pt = new U(384734642);
    qt = new Ls(488);
    rt = new Ls(529,20);
    st = new Ms(10);
    tt = new Ls(405881106);
    ut = new U(360245597);
    vt = new U(45360254);
    wt = new Ls(494,5E3);
    xt = new Ls(517);
    yt = new U(384700360);
    Ik = new U(384700361);
    zt = new U(410573952);
    hm = new U(419344496);
    At = new U(411840949,!0);
    Bt = new U(415024182);
    Ct = new U(416805799);
    Dt = new U(371390390);
    Et = new U(413925305,!0);
    Ft = new U(387626692);
    Gt = new U(402181801);
    Ht = new U(20);
    It = new U(220);
    Pl = new U(200);
    Jt = new U(111);
    ym = new U(323);
    _.mg = new Ls(388529191);
    xg = new Ls(492,.01);
    wg = new U(423059401);
    Kt = new Ls(363650251);
    Lt = new U(83);
    Ff = new U(85);
    Mt = new U(402847016);
    $m = new Ls(389357230,1E3);
    Nt = new Ls(398776877,6E4);
    Ot = new Ls(374201269,6E4);
    Pt = new Ls(371364213,6E4);
    Qt = new Ls(373440923,1E-4);
    Rt = new Ls(376149757,.0025);
    St = new Ls(396668915,5);
    Tt = new U(396668914);
    Ut = new U(399982759,!0);
    Tk = new U(377936516);
    Vt = new Ls(47,1);
    Wt = new Ls(25);
    Xt = new Ns(1);
    ii = new Ms(2,"1-0-38");
    Yt = new U(116);
    Vh = new U(416);
    Zt = new U(414440070);
    $t = new U(421109922);
    au = new Ns(489);
    bu = new U(371157910);
    cu = new U(392065905);
    du = new U(360245598);
    eu = new Ls(360245595,500);
    fu = new U(360245596);
    gu = new U(396442598,!0);
    hu = new Ls(359346956);
    Xm = new Ls(61,.001);
    iu = new U(417166612);
    ju = new U(399705355);
    ku = new U(522);
    lu = new U(501);
    mu = new Ms(363931022);
    xd = new U(1930);
    nu = new U(453);
    ou = new U(454);
    gd = new Ls(360261971);
    pu = new Ls(1921,72);
    qu = new Ls(1920,24);
    ru = new Ls(1917,300);
    cd = new Ls(1916,.001);
    su = new Ns(1934,["A8FHS1NmdCwGqD9DwOicnHHY+y27kdWfxKa0YHSGDfv0CSpDKRHTQdQmZVPDUdaFWUsxdgVxlwAd6o+dhJykPA0AAACWeyJvcmlnaW4iOiJodHRwczovL2RvdWJsZWNsaWNrLm5ldDo0NDMiLCJmZWF0dXJlIjoiQ29udmVyc2lvbk1lYXN1cmVtZW50IiwiZXhwaXJ5IjoxNjQzMTU1MTk5LCJpc1N1YmRvbWFpbiI6dHJ1ZSwiaXNUaGlyZFBhcnR5Ijp0cnVlLCJ1c2FnZSI6InN1YnNldCJ9", "A8zdXi6dr1hwXEUjQrYiyYQGlU3557y5QWDnN0Lwgj9ePt66XMEvNkVWOEOWPd7TP9sBQ25X0Q15Lr1Nn4oGFQkAAACceyJvcmlnaW4iOiJodHRwczovL2dvb2dsZXN5bmRpY2F0aW9uLmNvbTo0NDMiLCJmZWF0dXJlIjoiQ29udmVyc2lvbk1lYXN1cmVtZW50IiwiZXhwaXJ5IjoxNjQzMTU1MTk5LCJpc1N1YmRvbWFpbiI6dHJ1ZSwiaXNUaGlyZFBhcnR5Ijp0cnVlLCJ1c2FnZSI6InN1YnNldCJ9", "A4/Htern2udN9w3yJK9QgWQxQFruxOXsXL7cW60DyCl0EZFGCSme/J33Q/WzF7bBkVvhEWDlcBiUyZaim5CpFQwAAACceyJvcmlnaW4iOiJodHRwczovL2dvb2dsZXRhZ3NlcnZpY2VzLmNvbTo0NDMiLCJmZWF0dXJlIjoiQ29udmVyc2lvbk1lYXN1cmVtZW50IiwiZXhwaXJ5IjoxNjQzMTU1MTk5LCJpc1N1YmRvbWFpbiI6dHJ1ZSwiaXNUaGlyZFBhcnR5Ijp0cnVlLCJ1c2FnZSI6InN1YnNldCJ9"]);
    jr = new U(77);
    tu = new U(78);
    uu = new U(1961);
    pg = new U(309);
    ng = new U(1962);
    vu = new U(1959);
    wu = new U(1953,!0);
    Ri = new U(1960);
    xu = new U(80);
    hr = new U(76);
    yu = new U(81);
    _.zu = new U(1947);
    Au = new U(84);
    Bu = new U(1958);
    Cu = new U(188);
    Nj = new U(1948,!0);
    Du = new U(1928);
    Eu = new U(1941);
    Fu = new U(370946349);
    Gu = new U(392736476);
    Hu = new Ls(406149835);
    Iu = new U(397841828);
    Ju = new Ns(1932,["AxujKG9INjsZ8/gUq8+dTruNvk7RjZQ1oFhhgQbcTJKDnZfbzSTE81wvC2Hzaf3TW4avA76LTZEMdiedF1vIbA4AAABueyJvcmlnaW4iOiJodHRwczovL2ltYXNkay5nb29nbGVhcGlzLmNvbTo0NDMiLCJmZWF0dXJlIjoiVHJ1c3RUb2tlbnMiLCJleHBpcnkiOjE2NTI3NzQ0MDAsImlzVGhpcmRQYXJ0eSI6dHJ1ZX0=", "Azuce85ORtSnWe1MZDTv68qpaW3iHyfL9YbLRy0cwcCZwVnePnOmkUJlG8HGikmOwhZU22dElCcfrfX2HhrBPAkAAAB7eyJvcmlnaW4iOiJodHRwczovL2RvdWJsZWNsaWNrLm5ldDo0NDMiLCJmZWF0dXJlIjoiVHJ1c3RUb2tlbnMiLCJleHBpcnkiOjE2NTI3NzQ0MDAsImlzU3ViZG9tYWluIjp0cnVlLCJpc1RoaXJkUGFydHkiOnRydWV9", "A16nvcdeoOAqrJcmjLRpl1I6f3McDD8EfofAYTt/P/H4/AWwB99nxiPp6kA0fXoiZav908Z8etuL16laFPUdfQsAAACBeyJvcmlnaW4iOiJodHRwczovL2dvb2dsZXRhZ3NlcnZpY2VzLmNvbTo0NDMiLCJmZWF0dXJlIjoiVHJ1c3RUb2tlbnMiLCJleHBpcnkiOjE2NTI3NzQ0MDAsImlzU3ViZG9tYWluIjp0cnVlLCJpc1RoaXJkUGFydHkiOnRydWV9", "AxBHdr0J44vFBQtZUqX9sjiqf5yWZ/OcHRcRMN3H9TH+t90V/j3ENW6C8+igBZFXMJ7G3Pr8Dd13632aLng42wgAAACBeyJvcmlnaW4iOiJodHRwczovL2dvb2dsZXN5bmRpY2F0aW9uLmNvbTo0NDMiLCJmZWF0dXJlIjoiVHJ1c3RUb2tlbnMiLCJleHBpcnkiOjE2NTI3NzQ0MDAsImlzU3ViZG9tYWluIjp0cnVlLCJpc1RoaXJkUGFydHkiOnRydWV9", "A88BWHFjcawUfKU3lIejLoryXoyjooBXLgWmGh+hNcqMK44cugvsI5YZbNarYvi3roc1fYbHA1AVbhAtuHZflgEAAAB2eyJvcmlnaW4iOiJodHRwczovL2dvb2dsZS5jb206NDQzIiwiZmVhdHVyZSI6IlRydXN0VG9rZW5zIiwiZXhwaXJ5IjoxNjUyNzc0NDAwLCJpc1N1YmRvbWFpbiI6dHJ1ZSwiaXNUaGlyZFBhcnR5Ijp0cnVlfQ=="]);
    Ku = new U(419638674);
    var Lu = function(a, b, c, d, e, f) {
        try {
            var g = a.j
              , h = _.Lj("SCRIPT", g);
            h.async = !0;
            ab(h, b);
            g.head.appendChild(h);
            h.addEventListener("load", function() {
                e();
                d && g.head.removeChild(h)
            });
            h.addEventListener("error", function() {
                0 < c ? Lu(a, b, c - 1, d, e, f) : (d && g.head.removeChild(h),
                f())
            })
        } catch (k) {
            f()
        }
    }
      , Mu = function(a, b, c, d) {
        c = void 0 === c ? function() {}
        : c;
        d = void 0 === d ? function() {}
        : d;
        Lu(zr(a), b, 0, !1, c, d)
    };
    var Nu = function(a) {
        var b = a.document
          , c = function() {
            if (!a.frames.googlefcPresent)
                if (b.body) {
                    var d = _.Lj("IFRAME", b);
                    d.style.display = "none";
                    d.style.width = "0px";
                    d.style.height = "0px";
                    d.style.border = "none";
                    d.style.zIndex = "-1000";
                    d.style.left = "-1000px";
                    d.style.top = "-1000px";
                    d.name = "googlefcPresent";
                    b.body.appendChild(d)
                } else
                    a.setTimeout(c, 5)
        };
        c()
    };
    _.Ou = function() {
        this.m = this.m;
        this.ba = this.ba
    }
    ;
    _.Ou.prototype.m = !1;
    _.Ou.prototype.va = function() {
        this.m || (this.m = !0,
        this.F())
    }
    ;
    _.Pu = function(a, b) {
        _.jm(a, _.Xn(Bc, b))
    }
    ;
    _.jm = function(a, b) {
        a.m ? b() : (a.ba || (a.ba = []),
        a.ba.push(b))
    }
    ;
    _.Ou.prototype.F = function() {
        if (this.ba)
            for (; this.ba.length; )
                this.ba.shift()()
    }
    ;
    var Qu = function(a) {
        void 0 !== a.addtlConsent && "string" !== typeof a.addtlConsent && (a.addtlConsent = void 0);
        void 0 !== a.gdprApplies && "boolean" !== typeof a.gdprApplies && (a.gdprApplies = void 0);
        return void 0 !== a.tcString && "string" !== typeof a.tcString || void 0 !== a.listenerId && "number" !== typeof a.listenerId ? 2 : a.cmpStatus && "error" !== a.cmpStatus ? 0 : 3
    }
      , Tm = function(a, b) {
        b = void 0 === b ? 500 : b;
        _.Ou.call(this);
        this.j = a;
        this.A = null;
        this.l = {};
        this.B = 0;
        this.o = b;
        this.D = null
    };
    _.O(Tm, _.Ou);
    Tm.prototype.F = function() {
        this.l = {};
        this.D && (_.md(this.j, "message", this.D),
        delete this.D);
        delete this.l;
        delete this.j;
        delete this.A;
        _.Ou.prototype.F.call(this)
    }
    ;
    var Vm = function(a) {
        return "function" === typeof a.j.__tcfapi || null != Ru(a)
    };
    Tm.prototype.addEventListener = function(a) {
        var b = {}
          , c = _.Fo(function() {
            return a(b)
        })
          , d = 0;
        -1 !== this.o && (d = setTimeout(function() {
            b.tcString = "tcunavailable";
            b.internalErrorState = 1;
            c()
        }, this.o));
        var e = function(f, g) {
            clearTimeout(d);
            f ? (b = f,
            b.internalErrorState = Qu(b),
            g && 0 === b.internalErrorState || (b.tcString = "tcunavailable",
            g || (b.internalErrorState = 3))) : (b.tcString = "tcunavailable",
            b.internalErrorState = 3);
            a(b)
        };
        try {
            Su(this, "addEventListener", e)
        } catch (f) {
            b.tcString = "tcunavailable",
            b.internalErrorState = 3,
            d && (clearTimeout(d),
            d = 0),
            c()
        }
    }
    ;
    Tm.prototype.removeEventListener = function(a) {
        a && a.listenerId && Su(this, "removeEventListener", null, a.listenerId)
    }
    ;
    var Uu = function(a, b) {
        var c = {
            internalErrorState: 0
        }
          , d = _.Fo(function() {
            return b(c)
        })
          , e = 0;
        -1 !== a.o && (e = setTimeout(function() {
            c.tcString = "tcunavailable";
            c.internalErrorState = 1;
            d()
        }, a.o));
        Su(a, "addEventListener", function(f, g) {
            e && (clearTimeout(e),
            e = 0);
            g && (c = f);
            c.internalErrorState = Qu(c);
            0 != c.internalErrorState && (c.tcString = "tcunavailable");
            if (0 != c.internalErrorState || Tu(c))
                Su(a, "removeEventListener", null, c.listenerId),
                d()
        })
    }
      , Su = function(a, b, c, d) {
        c || (c = function() {}
        );
        if ("function" === typeof a.j.__tcfapi)
            a = a.j.__tcfapi,
            a(b, 2, c, d);
        else if (Ru(a)) {
            Xu(a);
            var e = ++a.B;
            a.l[e] = c;
            a.A && (c = {},
            a.A.postMessage((c.__tcfapiCall = {
                command: b,
                version: 2,
                callId: e,
                parameter: d
            },
            c), "*"))
        } else
            c({}, !1)
    }
      , Ru = function(a) {
        if (a.A)
            return a.A;
        a.A = bs(a.j, "__tcfapiLocator");
        return a.A
    }
      , Xu = function(a) {
        a.D || (a.D = function(b) {
            try {
                var c = ("string" === typeof b.data ? JSON.parse(b.data) : b.data).__tcfapiReturn;
                a.l[c.callId](c.returnValue, c.success)
            } catch (d) {}
        }
        ,
        _.eb(a.j, "message", a.D))
    }
      , Tu = function(a) {
        if (!1 === a.gdprApplies)
            return !0;
        void 0 === a.internalErrorState && (a.internalErrorState = Qu(a));
        return "error" === a.cmpStatus || 0 !== a.internalErrorState || "loaded" === a.cmpStatus && ("tcloaded" === a.eventStatus || "useractioncomplete" === a.eventStatus) ? !0 : !1
    };
    var Yu = function(a, b, c) {
        this.j = a;
        this.F = b;
        this.m = void 0 === c ? function() {}
        : c
    }
      , Zu = function(a, b, c) {
        return new Yu(a,b,c)
    };
    Yu.prototype.start = function() {
        try {
            Nu(this.j),
            $u(this)
        } catch (a) {}
    }
    ;
    var $u = function(a) {
        var b = mb(ao("https://fundingchoicesmessages.google.com/i/%{id}?ers=%{ers}"), {
            id: a.F,
            ers: 3
        });
        Mu(a.j, b, function() {
            a.m(!0)
        }, function() {
            a.m(!1)
        })
    };
    var E = {
        qf: function() {},
        Qf: function() {
            return ""
        },
        lf: function() {}
    };
    E.Ra = Cc;
    var av = Cc(function(a) {
        return null !== a && void 0 !== a
    }, "exists");
    E.assert = function() {}
    ;
    E.wa = function(a) {
        return a
    }
    ;
    E.bg = Dc;
    E.eg = Fc;
    E.qb = function() {}
    ;
    E.Jf = function(a) {
        return a
    }
    ;
    E.dg = Gc;
    E.gg = function(a) {
        Gc(a);
        return a
    }
    ;
    E.If = function() {}
    ;
    E.I = function(a) {
        return a
    }
    ;
    E.cg = function(a) {
        Dc(a, av)
    }
    ;
    E.fg = function(a) {
        return Fc(a, av)
    }
    ;
    E.Of = function(a, b) {
        return a(b)
    }
    ;
    E.functionName = function(a) {
        var b = a.name;
        b || (b = (a = /function\s+([^\(]+)/m.exec(String(a))) ? a[1] : "(Anonymous)");
        return b
    }
    ;
    var We = (0,
    E.Ra)(function(a) {
        return "number" === typeof a
    }, "number")
      , Re = (0,
    E.Ra)(function(a) {
        return "string" === typeof a
    }, "string")
      , Xe = (0,
    E.Ra)(function(a) {
        return "boolean" === typeof a
    }, "boolean")
      , Ze = (0,
    E.Ra)(function(a) {
        return null === a
    }, "null")
      , Ye = (0,
    E.Ra)(function(a) {
        return void 0 === a
    }, "undefined")
      , $e = (0,
    E.Ra)(function(a) {
        return "function" === typeof a
    }, "Function")
      , af = (0,
    E.Ra)(function(a) {
        return Array.isArray(a)
    }, "Array<unknown>");
    var bv = function(a) {
        R.call(this, a)
    };
    _.O(bv, R);
    var cv = function(a) {
        R.call(this, a)
    };
    _.O(cv, R);
    var ol = function(a) {
        R.call(this, a)
    };
    _.O(ol, R);
    var ll = function(a) {
        R.call(this, a, -1, dv)
    };
    _.O(ll, R);
    ll.prototype.getTagSessionCorrelator = function() {
        return Pc(this, 2)
    }
    ;
    var dv = [4]
      , ql = [6, 7, 8];
    var Qf = function(a) {
        R.call(this, a, -1, ev)
    };
    _.O(Qf, R);
    var ev = [3];
    var Pf = function(a) {
        R.call(this, a, -1, fv)
    };
    _.O(Pf, R);
    var fv = [4];
    var Mf = function(a) {
        R.call(this, a, -1, gv)
    };
    _.O(Mf, R);
    Mf.prototype.getTagSessionCorrelator = function() {
        return Pc(this, 1)
    }
    ;
    var gv = [2];
    var Lf = function(a) {
        R.call(this, a)
    };
    _.O(Lf, R);
    var Tf = [4];
    _.bh = function(a) {
        var b = "Ya";
        if (a.Ya && a.hasOwnProperty(b))
            return a.Ya;
        b = new a;
        return a.Ya = b
    }
    ;
    var hv, hi, iv;
    hv = function() {
        var a = {};
        this.m = function(b, c) {
            return null != a[b] ? a[b] : c
        }
        ;
        this.F = function(b, c) {
            return null != a[b] ? a[b] : c
        }
        ;
        this.A = function(b, c) {
            return null != a[b] ? a[b] : c
        }
        ;
        this.D = function(b, c) {
            return null != a[b] ? a[b] : c
        }
        ;
        this.j = function() {}
    }
    ;
    _.F = function(a) {
        return _.bh(hv).m(a.j, a.defaultValue)
    }
    ;
    _.bd = function(a) {
        return _.bh(hv).F(a.j, a.defaultValue)
    }
    ;
    hi = function(a) {
        return _.bh(hv).A(a.j, a.defaultValue)
    }
    ;
    iv = function(a) {
        return _.bh(hv).D(a.j, a.defaultValue)
    }
    ;
    var jv = navigator
      , pv = function(a, b, c, d, e, f) {
        if (vs())
            return window.gaGlobal || {};
        var g = Math.round((new Date).getTime() / 1E3)
          , h = f.google_analytics_domain_name;
        a = "undefined" == typeof h ? kv("auto", a) : kv(h, a);
        var k = -1 < b.indexOf("__utma=" + a + ".")
          , l = -1 < b.indexOf("__utmb=" + a);
        (f = (ws() || window).gaGlobal) || (f = {},
        (ws() || window).gaGlobal = f);
        var m = !1;
        if (k)
            e = b.split("__utma=" + a + ".")[1].split(";")[0].split("."),
            l ? f.sid = e[3] : f.sid || (f.sid = g + ""),
            f.vid = e[0] + "." + e[1],
            f.from_cookie = !0;
        else {
            f.sid || (f.sid = g + "");
            if (!f.vid) {
                m = !0;
                l = Math.round(2147483647 * Math.random());
                k = jv.appName;
                var n = jv.version
                  , q = jv.language ? jv.language : jv.browserLanguage
                  , r = jv.platform
                  , z = jv.userAgent;
                try {
                    var A = jv.javaEnabled()
                } catch (H) {
                    A = !1
                }
                A = [k, n, q, r, z, A ? 1 : 0].join("");
                d ? A += d.width + "x" + d.height + d.colorDepth : _.t.java && _.t.java.awt && (d = _.t.java.awt.Toolkit.getDefaultToolkit().getScreenSize(),
                A += d.screen.width + "x" + d.screen.height);
                A = A + b + (e || "");
                for (e = A.length; 0 < c; )
                    A += c-- ^ e++;
                f.vid = (l ^ lv(A) & 2147483647) + "." + g
            }
            _.F(wu) && f.from_cookie || (f.from_cookie = !1)
        }
        if (!f.cid) {
            a: for (g = 999,
            h && (h = 0 == h.indexOf(".") ? h.substr(1) : h,
            g = h.split(".").length),
            h = 999,
            b = b.split(";"),
            e = 0; e < b.length; e++)
                if (d = mv.exec(b[e]) || nv.exec(b[e]) || ov.exec(b[e])) {
                    A = d[1] || 0;
                    if (A == g) {
                        var I = d[2];
                        break a
                    }
                    A < h && (h = A,
                    I = d[2])
                }
            m && I && -1 != I.search(/^\d+\.\d+$/) ? (f.vid = I,
            f.from_cookie = !0) : I != f.vid && (f.cid = I)
        }
        f.dh = a;
        f.hid || (f.hid = Math.round(2147483647 * Math.random()));
        return f
    }
      , lv = function(a) {
        var b = 1, c;
        if (void 0 != a && "" != a)
            for (b = 0,
            c = a.length - 1; 0 <= c; c--) {
                var d = a.charCodeAt(c);
                b = (b << 6 & 268435455) + d + (d << 14);
                d = b & 266338304;
                b = 0 != d ? b ^ d >> 21 : b
            }
        return b
    }
      , kv = function(a, b) {
        if (!a || "none" == a)
            return 1;
        a = String(a);
        "auto" == a && (a = b,
        "www." == a.substring(0, 4) && (a = a.substring(4, a.length)));
        return lv(a.toLowerCase())
    }
      , mv = RegExp("^\\s*_ga=\\s*1\\.(\\d+)[^.]*\\.(.*?)\\s*$")
      , nv = RegExp("^[^=]+=\\s*GA1\\.(\\d+)[^.]*\\.(.*?)\\s*$")
      , ov = RegExp("^\\s*_ga=\\s*()(amp-[\\w.-]{22,64})$");
    var zg = function(a) {
        return !!a && a.top == a
    }
      , qv = function(a, b, c, d) {
        c = c || a.google_ad_width;
        d = d || a.google_ad_height;
        if (zg(a))
            return !1;
        var e = b.documentElement;
        if (c && d) {
            var f = 1
              , g = 1;
            a.innerHeight ? (f = a.innerWidth,
            g = a.innerHeight) : e && e.clientHeight ? (f = e.clientWidth,
            g = e.clientHeight) : b.body && (f = b.body.clientWidth,
            g = b.body.clientHeight);
            if (g > 2 * d || f > 2 * c)
                return !1
        }
        return !0
    };
    var rv = function(a) {
        a = void 0 === a ? window : a;
        return a._gmptnl ? "afma-gpt-sdk-a" : a.webkit && a.webkit.messageHandlers && a.webkit.messageHandlers._gmptnl ? "afma-gpt-sdk-i" : null
    }
      , sv = function(a, b) {
        b = void 0 === b ? window : b;
        var c = rv(b);
        if (!c)
            return null;
        var d = null;
        try {
            "afma-gpt-sdk-a" == c ? d = b._gmptnl.pm("GAM=", a) || "5" : (d = b.__gmptnl_n || "5",
            b.webkit.messageHandlers._gmptnl.postMessage("GAM="))
        } catch (e) {
            return "3"
        }
        return "string" === typeof d ? d : "3"
    };
    var Xg = function() {
        this.j = [];
        this.m = -1
    };
    Xg.prototype.set = function(a, b) {
        b = void 0 === b ? !0 : b;
        0 <= a && 52 > a && 0 === a % 1 && this.j[a] != b && (this.j[a] = b,
        this.m = -1)
    }
    ;
    Xg.prototype.get = function(a) {
        return !!this.j[a]
    }
    ;
    var Yg = function(a) {
        -1 == a.m && (a.m = co(a.j, function(b, c, d) {
            return c ? b + Math.pow(2, d) : b
        }));
        return a.m
    };
    var Ic = function(a) {
        R.call(this, a, -1, tv)
    };
    _.O(Ic, R);
    var Jc = function(a, b) {
        di(a, 1, Nc, b)
    }
      , Nc = function(a) {
        R.call(this, a)
    };
    _.O(Nc, R);
    var Lc = function(a) {
        var b = new Nc;
        return Db(b, 1, a, 0)
    }
      , Kc = function(a, b) {
        return Db(a, 2, b, 0)
    }
      , tv = [1];
    var Uc, Im;
    _.uv = function(a, b) {
        a.google_image_requests || (a.google_image_requests = []);
        var c = _.Lj("IMG", a.document);
        c.src = b;
        a.google_image_requests.push(c)
    }
    ;
    Uc = function(a, b) {
        var c = "https://pagead2.googlesyndication.com/pagead/gen_204?id=" + b;
        _.tf(a, function(d, e) {
            d && (c += "&" + e + "=" + encodeURIComponent(d))
        });
        Im(c)
    }
    ;
    Im = function(a) {
        var b = window;
        b.fetch ? b.fetch(a, {
            keepalive: !0,
            credentials: "include",
            redirect: "follow",
            method: "get",
            mode: "no-cors"
        }) : _.uv(b, a)
    }
    ;
    var Yc = function(a) {
        this.j = a || {
            cookie: ""
        }
    };
    p = Yc.prototype;
    p.isEnabled = function() {
        if (!_.t.navigator.cookieEnabled)
            return !1;
        if (!this.isEmpty())
            return !0;
        this.set("TESTCOOKIESENABLED", "1", {
            Cc: 60
        });
        if ("1" !== this.get("TESTCOOKIESENABLED"))
            return !1;
        this.remove("TESTCOOKIESENABLED");
        return !0
    }
    ;
    p.set = function(a, b, c) {
        var d = !1;
        if ("object" === typeof c) {
            var e = c.jg;
            d = c.Ce || !1;
            var f = c.domain || void 0;
            var g = c.path || void 0;
            var h = c.Cc
        }
        if (/[;=\s]/.test(a))
            throw Error('Invalid cookie name "' + a + '"');
        if (/[;\r\n]/.test(b))
            throw Error('Invalid cookie value "' + b + '"');
        void 0 === h && (h = -1);
        this.j.cookie = a + "=" + b + (f ? ";domain=" + f : "") + (g ? ";path=" + g : "") + (0 > h ? "" : 0 == h ? ";expires=" + (new Date(1970,1,1)).toUTCString() : ";expires=" + (new Date(Date.now() + 1E3 * h)).toUTCString()) + (d ? ";secure" : "") + (null != e ? ";samesite=" + e : "")
    }
    ;
    p.get = function(a, b) {
        for (var c = a + "=", d = (this.j.cookie || "").split(";"), e = 0, f; e < d.length; e++) {
            f = mo(d[e]);
            if (0 == f.lastIndexOf(c, 0))
                return f.substr(c.length);
            if (f == a)
                return ""
        }
        return b
    }
    ;
    p.remove = function(a, b, c) {
        var d = void 0 !== this.get(a);
        this.set(a, "", {
            Cc: 0,
            path: b,
            domain: c
        });
        return d
    }
    ;
    p.isEmpty = function() {
        return !this.j.cookie
    }
    ;
    p.clear = function() {
        for (var a = (this.j.cookie || "").split(";"), b = [], c = [], d, e, f = 0; f < a.length; f++)
            e = mo(a[f]),
            d = e.indexOf("="),
            -1 == d ? (b.push(""),
            c.push(e)) : (b.push(e.substring(0, d)),
            c.push(e.substring(d + 1)));
        for (a = b.length - 1; 0 <= a; a--)
            this.remove(b[a])
    }
    ;
    var vv = new Yc("undefined" == typeof document ? null : document);
    var wv = null
      , xv = function() {
        if (null === wv) {
            wv = "";
            try {
                var a = "";
                try {
                    a = _.t.top.location.hash
                } catch (c) {
                    a = _.t.location.hash
                }
                if (a) {
                    var b = a.match(/\bdeid=([\d,]+)/);
                    wv = b ? b[1] : ""
                }
            } catch (c) {}
        }
        return wv
    };
    var yv, nl;
    _.$c = function(a) {
        a = void 0 === a ? _.t : a;
        return (a = a.performance) && a.now && a.timing ? Math.floor(a.now() + a.timing.navigationStart) : $d()
    }
    ;
    _.Ul = function(a) {
        a = void 0 === a ? _.t : a;
        return (a = a.performance) && a.now ? a.now() : null
    }
    ;
    yv = function(a, b) {
        b = void 0 === b ? _.t : b;
        var c, d;
        return (null == (c = b.performance) ? void 0 : null == (d = c.timing) ? void 0 : d[a]) || 0
    }
    ;
    nl = function(a) {
        a = void 0 === a ? _.t : a;
        var b = Math.min(yv("domLoading", a) || Infinity, yv("domInteractive", a) || Infinity);
        return Infinity == b ? Math.max(yv("responseEnd", a), yv("navigationStart", a)) : b
    }
    ;
    var zv = function(a, b, c, d, e) {
        this.label = a;
        this.type = b;
        this.value = c;
        this.duration = void 0 === d ? 0 : d;
        this.uniqueId = Math.random();
        this.slotId = e
    };
    var Hf = _.t.performance
      , Av = !!(Hf && Hf.mark && Hf.measure && Hf.clearMarks)
      , If = Og(function() {
        var a;
        if (a = Av)
            a = xv(),
            a = !!a.indexOf && 0 <= a.indexOf("1337");
        return a
    })
      , Bv = function(a, b) {
        this.events = [];
        var c = null;
        b && (b.google_js_reporting_queue = b.google_js_reporting_queue || [],
        this.events = b.google_js_reporting_queue,
        c = b.google_measure_js_timing);
        this.j = If() || (null != c ? c : Math.random() < a)
    }
      , Cv = function(a, b, c, d, e, f) {
        a.j && (b = new zv(b,c,d,void 0 === e ? 0 : e,f),
        !a.j || 2048 < a.events.length || a.events.push(b))
    };
    Bv.prototype.start = function(a, b) {
        if (!this.j)
            return null;
        a = new zv(a,b,_.Ul() || _.$c());
        b = "goog_" + a.label + "_" + a.uniqueId + "_start";
        Hf && If() && Hf.mark(b);
        return a
    }
    ;
    Bv.prototype.end = function(a) {
        if (this.j && "number" === typeof a.value) {
            a.duration = (_.Ul() || _.$c()) - a.value;
            var b = "goog_" + a.label + "_" + a.uniqueId + "_end";
            Hf && If() && Hf.mark(b);
            !this.j || 2048 < this.events.length || this.events.push(a)
        }
    }
    ;
    var Dv = function(a, b, c) {
        var d = _.Ul();
        d && Cv(a, b, 9, d, 0, c)
    };
    var nf = function(a, b) {
        try {
            -1 == a.indexOf(b) && (a = b + "\n" + a);
            for (var c; a != c; )
                c = a,
                a = a.replace(/((https?:\/..*\/)[^\/:]*:\d+(?:.|\n)*)\2/, "$1");
            return a.replace(/\n */g, "\n")
        } catch (d) {
            return b
        }
    };
    var Hi = function(a) {
        a = Error.call(this, a);
        this.message = a.message;
        "stack"in a && (this.stack = a.stack);
        _.u(Object, "setPrototypeOf").call(Object, this, Hi.prototype)
    };
    _.O(Hi, Error);
    Hi.prototype.name = "PublisherInputError";
    var Ev = function(a) {
        a = Error.call(this, a);
        this.message = a.message;
        "stack"in a && (this.stack = a.stack);
        _.u(Object, "setPrototypeOf").call(Object, this, Ev.prototype)
    };
    _.O(Ev, Error);
    Ev.prototype.name = "ServerError";
    var Fv = function(a) {
        a = Error.call(this, a);
        this.message = a.message;
        "stack"in a && (this.stack = a.stack);
        _.u(Object, "setPrototypeOf").call(Object, this, Fv.prototype)
    };
    _.O(Fv, Error);
    Fv.prototype.name = "NetworkError";
    var Gv = function() {
        _.Ou.apply(this, arguments);
        this.j = [];
        this.A = [];
        this.D = []
    };
    _.O(Gv, _.Ou);
    var Hv = function(a, b, c) {
        a.A.push({
            Pc: void 0 === c ? !1 : c,
            Tc: b
        })
    };
    Gv.prototype.F = function() {
        this.j.length = 0;
        this.D.length = 0;
        this.A.length = 0;
        _.Ou.prototype.F.call(this)
    }
    ;
    var ie = function() {
        var a = this;
        this.promise = new v.Promise(function(b, c) {
            a.resolve = b;
            a.reject = c
        }
        )
    };
    var Iv = function(a) {
        a = Error.call(this, a);
        this.message = a.message;
        "stack"in a && (this.stack = a.stack);
        _.u(Object, "setPrototypeOf").call(Object, this, Iv.prototype);
        this.name = "InputError"
    };
    _.O(Iv, Error);
    var Jv = function() {
        var a = this;
        this.M = this.F = null;
        this.l = -1;
        this.A = new ie;
        this.m = !1;
        this.A.promise.then(function() {
            -1 !== a.l && (a.M = _.$c() - a.l)
        }, function() {})
    }
      , Kv = function() {
        Jv.apply(this, arguments)
    };
    _.O(Kv, Jv);
    en.Object.defineProperties(Kv.prototype, {
        promise: {
            configurable: !0,
            enumerable: !0,
            get: function() {
                return this.A.promise
            }
        },
        D: {
            configurable: !0,
            enumerable: !0,
            get: function() {
                return this.m
            }
        },
        o: {
            configurable: !0,
            enumerable: !0,
            get: function() {
                return this.M
            }
        }
    });
    var hk = function() {
        Kv.apply(this, arguments)
    };
    _.O(hk, Kv);
    hk.prototype.j = function(a) {
        this.m || (this.m = !0,
        this.F = a,
        this.A.resolve(a))
    }
    ;
    hk.prototype.ca = function(a) {
        null == a ? Lv(this) : this.j(a)
    }
    ;
    var Lv = function(a) {
        a.m || (a.m = !0,
        a.F = null,
        a.A.resolve(null))
    }
      , Mv = function(a, b) {
        a.m || (a.m = !0,
        a.F = null,
        a.B = b,
        a.A.reject(b))
    }
      , Nv = function(a) {
        Jv.call(this);
        this.j = a
    };
    _.O(Nv, Jv);
    var Ov = function(a) {
        return null !== a.j.F
    };
    en.Object.defineProperties(Nv.prototype, {
        error: {
            configurable: !0,
            enumerable: !0,
            get: function() {
                return this.j.B
            }
        }
    });
    var Pv = function(a) {
        Nv.call(this, a);
        this.j = a
    };
    _.O(Pv, Nv);
    en.Object.defineProperties(Pv.prototype, {
        value: {
            configurable: !0,
            enumerable: !0,
            get: function() {
                return this.j.F
            }
        }
    });
    var Qv = function() {
        Nv.apply(this, arguments)
    };
    _.O(Qv, Nv);
    en.Object.defineProperties(Qv.prototype, {
        value: {
            configurable: !0,
            enumerable: !0,
            get: function() {
                return this.j.F
            }
        }
    });
    var ik = function() {
        Kv.apply(this, arguments)
    };
    _.O(ik, Kv);
    ik.prototype.notify = function() {
        this.m || (this.m = !0,
        this.F = null,
        this.A.resolve(null))
    }
    ;
    var Rv = function(a, b) {
        b = void 0 === b ? 0 : b;
        _.Ou.call(this);
        this.id = a;
        this.ia = b;
        this.D = new Gv;
        this.ha = !1;
        this.U = -1;
        _.Pu(this, this.D)
    };
    _.O(Rv, _.Ou);
    Rv.prototype.start = function() {
        var a = this, b, c, d, e, f;
        return gb(function(g) {
            switch (g.j) {
            case 1:
                if (a.ha)
                    return g.return();
                a.ha = !0;
                g.F = 2;
                b = a;
                return hb(g, ad(a.D.A, a.ia), 4);
            case 4:
                b.U = g.m;
                if (a.m) {
                    g.j = 5;
                    break
                }
                for (var h = 0, k = _.y(a.D.D), l = k.next(); !l.done; l = k.next()) {
                    if (!Ov(l.value))
                        throw Error("missing input: " + a.id + "/" + h);
                    ++h
                }
                c = _.y(a.D.j);
                for (d = c.next(); !d.done; d = c.next())
                    e = d.value,
                    e.l = _.$c();
                return hb(g, a.j(), 5);
            case 5:
                jb(g, 0);
                break;
            case 2:
                f = kb(g);
                if (a.m)
                    return g.return();
                f instanceof Iv ? a.M(f) : f instanceof Error && (a.R(f),
                a.A(f));
                vn(g)
            }
        })
    }
    ;
    var W = function(a) {
        var b = new hk;
        a.D.j.push(b);
        return b
    }
      , Sv = function(a) {
        var b = new ik;
        a.D.j.push(b);
        return b
    }
      , X = function(a, b) {
        Hv(a.D, b);
        b = new Qv(b);
        a.D.D.push(b);
        return b
    }
      , Y = function(a, b) {
        Hv(a.D, b);
        return new Pv(b)
    }
      , Tv = function(a, b) {
        Hv(a.D, b, !0);
        return new Pv(b)
    }
      , Uv = function(a, b) {
        Hv(a.D, b)
    };
    Rv.prototype.M = function() {}
    ;
    Rv.prototype.A = function(a) {
        if (this.D.j.length) {
            a = new Iv(a.message);
            for (var b = _.y(this.D.j), c = b.next(); !c.done; c = b.next())
                if (c = c.value,
                !c.D) {
                    var d = a;
                    c.m = !0;
                    c.B = d;
                    c.A.reject(d)
                }
        }
    }
    ;
    var Vv = function(a, b) {
        Rv.call(this, a);
        this.id = a;
        this.K = b
    };
    _.O(Vv, Rv);
    Vv.prototype.R = function(a) {
        this.K(this.id, a)
    }
    ;
    var Wv = function() {
        this.errorMessage = this.info = this.error = this.bc = null
    }
      , Xv = function(a, b) {
        a.bc = b;
        return a
    };
    Wv.prototype.getError = function() {
        return this.error
    }
    ;
    var Yv = function(a, b) {
        a.errorMessage = b;
        return a
    }
      , Zv = function() {
        this.cache = {}
    }
      , Bd = function() {
        $v || (aw = _.bd(qu),
        bw = _.bd(pu),
        $v = new Zv);
        return $v
    }
      , Cd = function(a) {
        var b = x(a, 3);
        if (!b)
            return 3;
        if (void 0 === x(a, 2))
            return 4;
        a = Date.now();
        return a > b + 36E5 * bw ? 2 : a > b + 36E5 * aw ? 1 : 0
    };
    Zv.prototype.get = function(a, b) {
        var c = new Wv;
        if (this.cache[a])
            return Xv(c, this.cache[a]);
        var d = "";
        try {
            d = b.getItem("_GESPSK-" + a)
        } catch (e) {
            return c.error = 6,
            Yv(c, e.message)
        }
        if (!d)
            return new Wv;
        b = null;
        try {
            b = Hc(Gq, d)
        } catch (e) {
            return a = new Wv,
            a.error = 5,
            Yv(a, e.message)
        }
        b && (this.cache[a] = b);
        return Xv(new Wv, b)
    }
    ;
    Zv.prototype.set = function(a, b) {
        var c = (0,
        E.I)(x(a, 1))
          , d = "_GESPSK-" + c
          , e = Xv(new Wv, a);
        try {
            b.setItem(d, a.X())
        } catch (f) {
            e.info = 7,
            Yv(e, f.message)
        }
        this.cache[c] = a;
        return e
    }
    ;
    var $v = null
      , aw = 24
      , bw = 72;
    var cw;
    cw = {
        uf: 0,
        ud: 3,
        xd: 4,
        Gf: 5
    };
    var dw = cw.ud
      , ew = cw.xd;
    var fw = Ur();
    var gw = function(a) {
        this.methodName = a
    }
      , hw = new gw(1)
      , iw = new gw(15)
      , jw = new gw(2)
      , kw = new gw(3)
      , lw = new gw(5)
      , mw = new gw(6)
      , nw = new gw(7)
      , ow = new gw(8)
      , pw = new gw(14)
      , qw = function(a, b, c) {
        return b[a.methodName] || c || function() {}
    };
    var rw = function() {
        this.F = function() {}
        ;
        this.j = function() {
            return []
        }
        ;
        this.m = function() {
            return []
        }
    }
      , sw = function(a, b, c) {
        a.F = qw(hw, b, function() {});
        a.j = function(d) {
            return qw(jw, b, function() {
                return []
            })(d, c)
        }
        ;
        a.m = function() {
            return qw(kw, b, function() {
                return []
            })(c)
        }
    }
      , ed = function() {
        return _.bh(rw)
    };
    var od = function(a, b, c, d) {
        Vv.call(this, 655, d);
        this.Ja = a;
        this.collectorFunction = b;
        this.G = c;
        this.o = W(this);
        this.B = W(this);
        this.l = _.bd(gd)
    };
    _.O(od, Vv);
    od.prototype.j = function() {
        var a, b = Bd().get(this.Ja, this.G);
        if (b.getError())
            fd(b.getError(), this.Ja, b.errorMessage),
            Lv(this.o),
            Lv(this.B);
        else {
            var c = Date.now();
            if (b = b.bc)
                if (this.l && (bg(b, 8) || (fd(33, this.Ja),
                hd(b, this.l)),
                bg(b, 7) || (fd(34, this.Ja),
                w(b, 7, Math.round(Date.now() / 1E3 / 60)))),
                bg(b, 3) || fd(35, this.Ja),
                this.l) {
                    var d = (0,
                    E.I)(id(b, 8))
                      , e = null !== (a = x(b, 7)) && void 0 !== a ? a : c;
                    d < this.l && hd(b, Math.min(d + Number((this.l * (c / 1E3 / 60 - e) / 60).toFixed(3)), this.l));
                    1 > (0,
                    E.I)(id(b, 8)) ? (c = {},
                    fd(22, this.Ja, null, (c.t = String(e),
                    c.cr = String(d),
                    c.cs = String(Cd(b)),
                    c)),
                    Lv(this.o),
                    Lv(this.B)) : (this.o.j(this.collectorFunction),
                    this.B.j(b))
                } else
                    this.o.j(this.collectorFunction),
                    this.B.j(b);
            else
                this.o.j(this.collectorFunction),
                b = this.B,
                d = b.j,
                e = new Gq,
                e = w(e, 1, this.Ja),
                e = hd(e, this.l),
                c = w(e, 3, c),
                d.call(b, c)
        }
    }
    ;
    var jd = function(a, b, c, d) {
        "string" !== typeof c ? fd(21, a) : c || fd(20, a);
        w(b, 2, c);
        b = Bd().set(b, d);
        b.errorMessage ? fd((0,
        E.I)(b.info), a, b.errorMessage) : fd(27, a)
    }
      , kd = function(a) {
        return "string" === typeof a ? a : a instanceof Error ? a.message : null
    };
    var pd = function(a, b, c, d) {
        Vv.call(this, 658, d);
        this.P = c;
        this.l = W(this);
        this.o = W(this);
        this.B = W(this);
        this.G = Y(this, a);
        this.V = Y(this, b)
    };
    _.O(pd, Vv);
    pd.prototype.j = function() {
        var a = this;
        if (this.G.value) {
            var b = function(g) {
                a.l.j({
                    id: (0,
                    E.I)(x(g, 1)),
                    collectorGeneratedData: x(g, 2)
                })
            }
              , c = this.G.value
              , d = (0,
            E.I)(this.V.value)
              , e = (0,
            E.I)(x(d, 1))
              , f = Cd(d);
            switch (f) {
            case 0:
                fd(24, e);
                break;
            case 1:
                fd(25, e);
                break;
            case 2:
                fd(26, e);
                break;
            case 3:
                fd(9, e);
                break;
            case 4:
                fd(23, e)
            }
            switch (f) {
            case 0:
                b(d);
                tw(this);
                break;
            case 1:
                b(d);
                this.o.j(c);
                this.B.j(d);
                break;
            case 3:
            case 2:
            case 4:
                w(d, 2, null),
                ld(e, d, c, this.P).then(b),
                tw(this)
            }
        } else
            Lv(this.l),
            tw(this)
    }
    ;
    var tw = function(a) {
        Lv(a.o);
        Lv(a.B)
    };
    var qd = function(a, b, c, d) {
        Vv.call(this, 662, d);
        this.B = c;
        this.l = Y(this, a);
        this.o = Y(this, b)
    };
    _.O(qd, Vv);
    qd.prototype.j = function() {
        var a = this;
        this.o.value && this.l.value && nd().then(function() {
            var b = (0,
            E.I)(a.o.value)
              , c = (0,
            E.I)(x(b, 1));
            ld(c, b, (0,
            E.I)(a.l.value), a.B)
        })
    }
    ;
    var rd = function() {
        _.Ou.apply(this, arguments);
        this.j = []
    };
    _.O(rd, _.Ou);
    var sd = function(a, b) {
        b = _.y(b);
        for (var c = b.next(); !c.done; c = b.next())
            c = c.value,
            _.Pu(a, c),
            a.j.push(c)
    }
      , N = function(a, b) {
        sd(a, [b])
    }
      , td = function(a) {
        if (a.j.length) {
            a = _.y(a.j);
            for (var b = a.next(); !b.done; b = a.next())
                b.value.start()
        }
    };
    rd.prototype.F = function() {
        _.Ou.prototype.F.call(this);
        this.j.length = 0
    }
    ;
    var zd = function(a, b) {
        this.D = b;
        this.F = [];
        this.m = [];
        this.j = [];
        a = _.y(a);
        for (b = a.next(); !b.done; b = a.next())
            this.push(b.value)
    };
    zd.prototype.push = function(a) {
        var b = a.id;
        a = a.collectorFunction;
        if ("string" !== typeof b)
            fd(37, "invalid-id");
        else if ("function" !== typeof a)
            fd(14, b);
        else {
            b = ud(b, a, this.D, this.A);
            this.F.push(b);
            a = _.y(this.m);
            for (var c = a.next(); !c.done; c = a.next())
                b.then(c.value)
        }
    }
    ;
    zd.prototype.addOnSignalResolveCallback = function(a) {
        this.m.push(a);
        for (var b = _.y(this.F), c = b.next(); !c.done; c = b.next())
            c.value.then(a)
    }
    ;
    zd.prototype.addErrorHandler = function(a) {
        this.j.push(a)
    }
    ;
    zd.prototype.A = function(a, b) {
        for (var c = _.y(this.j), d = c.next(); !d.done; d = c.next())
            d = d.value,
            d(a, b)
    }
    ;
    var yd = function(a) {
        this.push = function(b) {
            a.push(b)
        }
        ;
        this.addOnSignalResolveCallback = function(b) {
            a.addOnSignalResolveCallback(b)
        }
        ;
        this.addErrorHandler = function(b) {
            a.addErrorHandler(b)
        }
    };
    var uw = 0
      , vw = pj(Hd(ao("https://pagead2.googlesyndication.com/pagead/expansion_embed.js")));
    var ww = function() {
        this.j = function() {}
    }
      , yw = function() {
        var a = _.bh(xw).l;
        _.bh(ww).j(a)
    };
    var Aw = function() {
        var a = void 0
          , b = 2;
        if (void 0 === a) {
            var c = void 0 === c ? _.t : c;
            a = c.ggeac || (c.ggeac = {})
        }
        b = void 0 === b ? 0 : b;
        c = a;
        var d = b;
        d = void 0 === d ? 0 : d;
        sw(ed(), c, d);
        zw(a, b);
        b = a;
        _.bh(ww).j = qw(pw, b);
        _.bh(hv).j()
    }
      , zw = function(a, b) {
        var c = _.bh(hv);
        c.m = function(d, e) {
            return qw(lw, a, function() {
                return !1
            })(d, e, b)
        }
        ;
        c.F = function(d, e) {
            return qw(mw, a, function() {
                return 0
            })(d, e, b)
        }
        ;
        c.A = function(d, e) {
            return qw(nw, a, function() {
                return ""
            })(d, e, b)
        }
        ;
        c.D = function(d, e) {
            return qw(ow, a, function() {
                return []
            })(d, e, b)
        }
        ;
        c.j = function() {
            qw(iw, a)(b)
        }
    };
    var $f = function(a, b, c) {
        a && null !== b && b != b.top && (b = b.top);
        try {
            return (void 0 === c ? 0 : c) ? (new _.Fg(b.innerWidth,b.innerHeight)).round() : _.Dr(b || window).round()
        } catch (d) {
            return new _.Fg(-12245933,-12245933)
        }
    }
      , Bw = function(a) {
        return "CSS1Compat" == a.compatMode ? a.documentElement : a.body
    }
      , Ll = function(a, b) {
        b = void 0 === b ? _.t : b;
        a = a.scrollingElement || Bw(a);
        return new _.Cg(b.pageXOffset || a.scrollLeft,b.pageYOffset || a.scrollTop)
    }
      , Rg = function(a) {
        try {
            return !(!a || !(a.offsetWidth || a.offsetHeight || a.getClientRects().length))
        } catch (b) {
            return !1
        }
    };
    var Cw = function(a) {
        R.call(this, a)
    };
    _.O(Cw, R);
    var Dw = function(a) {
        this.j = a;
        this.m = 0
    }
      , Fw = function(a, b) {
        if (0 === a.m) {
            if (Ew(a, "__gads", b))
                b = !0;
            else {
                var c = a.j;
                D(b, 5) && Wc(c) && (new Yc(c.document)).set("GoogleAdServingTest", "Good", void 0);
                if (c = "Good" === Zc("GoogleAdServingTest", b, a.j)) {
                    var d = a.j;
                    D(b, 5) && Wc(d) && (new Yc(d.document)).remove("GoogleAdServingTest", void 0, void 0)
                }
                b = c
            }
            a.m = b ? 2 : 1
        }
        return 2 === a.m
    }
      , Ew = function(a, b, c) {
        return c ? Zc(b, c, a.j) : null
    }
      , Gw = function(a, b, c, d) {
        if (d) {
            var e = {
                Cc: x(c, 2) - Date.now() / 1E3,
                path: x(c, 3),
                domain: x(c, 4),
                Ce: !1
            };
            a = a.j;
            D(d, 5) && Wc(a) && (new Yc(a.document)).set(b, x(c, 1), e)
        }
    }
      , Hw = function(a, b, c) {
        if (c && Zc(b, c, a.j)) {
            var d = a.j.location.hostname;
            if ("localhost" === d)
                d = ["localhost"];
            else if (d = d.split("."),
            2 > d.length)
                d = [];
            else {
                for (var e = [], f = 0; f < d.length - 1; ++f)
                    e.push(d.slice(f).join("."));
                d = e
            }
            d = _.y(d);
            for (e = d.next(); !e.done; e = d.next())
                f = a.j,
                D(c, 5) && Wc(f) && (new Yc(f.document)).remove(b, "/", e.value)
        }
    };
    var Iw = {}
      , Jw = (Iw[3] = pj(Hd(ao("https://s0.2mdn.net/ads/richmedia/studio/mu/templates/hifi/hifi.js"))),
    Iw)
      , Kw = {}
      , Lw = (Kw[3] = pj(Hd(ao("https://s0.2mdn.net/ads/richmedia/studio_canary/mu/templates/hifi/hifi_canary.js"))),
    Kw);
    var Mw = function(a) {
        this.j = a;
        this.m = tr()
    }
      , Nw = function(a) {
        var b = {};
        _.bo(a, function(c) {
            b[c.j] = c.m
        });
        return b
    };
    var Ow = Q(["https://adservice.google.com/adsid/integrator.", ""])
      , Pw = Q(["https://adservice.google.ad/adsid/integrator.", ""])
      , Qw = Q(["https://adservice.google.ae/adsid/integrator.", ""])
      , Rw = Q(["https://adservice.google.com.af/adsid/integrator.", ""])
      , Sw = Q(["https://adservice.google.com.ag/adsid/integrator.", ""])
      , Tw = Q(["https://adservice.google.com.ai/adsid/integrator.", ""])
      , Uw = Q(["https://adservice.google.al/adsid/integrator.", ""])
      , Vw = Q(["https://adservice.google.co.ao/adsid/integrator.", ""])
      , Ww = Q(["https://adservice.google.com.ar/adsid/integrator.", ""])
      , Xw = Q(["https://adservice.google.as/adsid/integrator.", ""])
      , Yw = Q(["https://adservice.google.at/adsid/integrator.", ""])
      , Zw = Q(["https://adservice.google.com.au/adsid/integrator.", ""])
      , $w = Q(["https://adservice.google.az/adsid/integrator.", ""])
      , ax = Q(["https://adservice.google.com.bd/adsid/integrator.", ""])
      , bx = Q(["https://adservice.google.be/adsid/integrator.", ""])
      , cx = Q(["https://adservice.google.bf/adsid/integrator.", ""])
      , dx = Q(["https://adservice.google.bg/adsid/integrator.", ""])
      , ex = Q(["https://adservice.google.com.bh/adsid/integrator.", ""])
      , fx = Q(["https://adservice.google.bi/adsid/integrator.", ""])
      , gx = Q(["https://adservice.google.bj/adsid/integrator.", ""])
      , hx = Q(["https://adservice.google.com.bn/adsid/integrator.", ""])
      , ix = Q(["https://adservice.google.com.bo/adsid/integrator.", ""])
      , jx = Q(["https://adservice.google.com.br/adsid/integrator.", ""])
      , kx = Q(["https://adservice.google.bs/adsid/integrator.", ""])
      , lx = Q(["https://adservice.google.bt/adsid/integrator.", ""])
      , mx = Q(["https://adservice.google.co.bw/adsid/integrator.", ""])
      , nx = Q(["https://adservice.google.com.bz/adsid/integrator.", ""])
      , ox = Q(["https://adservice.google.ca/adsid/integrator.", ""])
      , px = Q(["https://adservice.google.cd/adsid/integrator.", ""])
      , qx = Q(["https://adservice.google.cf/adsid/integrator.", ""])
      , rx = Q(["https://adservice.google.cg/adsid/integrator.", ""])
      , sx = Q(["https://adservice.google.ch/adsid/integrator.", ""])
      , tx = Q(["https://adservice.google.ci/adsid/integrator.", ""])
      , ux = Q(["https://adservice.google.co.ck/adsid/integrator.", ""])
      , vx = Q(["https://adservice.google.cl/adsid/integrator.", ""])
      , wx = Q(["https://adservice.google.cm/adsid/integrator.", ""])
      , xx = Q(["https://adservice.google.com.co/adsid/integrator.", ""])
      , yx = Q(["https://adservice.google.co.cr/adsid/integrator.", ""])
      , zx = Q(["https://adservice.google.com.cu/adsid/integrator.", ""])
      , Ax = Q(["https://adservice.google.cv/adsid/integrator.", ""])
      , Bx = Q(["https://adservice.google.com.cy/adsid/integrator.", ""])
      , Cx = Q(["https://adservice.google.cz/adsid/integrator.", ""])
      , Dx = Q(["https://adservice.google.de/adsid/integrator.", ""])
      , Ex = Q(["https://adservice.google.dj/adsid/integrator.", ""])
      , Fx = Q(["https://adservice.google.dk/adsid/integrator.", ""])
      , Gx = Q(["https://adservice.google.dm/adsid/integrator.", ""])
      , Hx = Q(["https://adservice.google.dz/adsid/integrator.", ""])
      , Ix = Q(["https://adservice.google.com.ec/adsid/integrator.", ""])
      , Jx = Q(["https://adservice.google.ee/adsid/integrator.", ""])
      , Kx = Q(["https://adservice.google.com.eg/adsid/integrator.", ""])
      , Lx = Q(["https://adservice.google.es/adsid/integrator.", ""])
      , Mx = Q(["https://adservice.google.com.et/adsid/integrator.", ""])
      , Nx = Q(["https://adservice.google.fi/adsid/integrator.", ""])
      , Ox = Q(["https://adservice.google.com.fj/adsid/integrator.", ""])
      , Px = Q(["https://adservice.google.fm/adsid/integrator.", ""])
      , Qx = Q(["https://adservice.google.fr/adsid/integrator.", ""])
      , Rx = Q(["https://adservice.google.ga/adsid/integrator.", ""])
      , Sx = Q(["https://adservice.google.ge/adsid/integrator.", ""])
      , Tx = Q(["https://adservice.google.gg/adsid/integrator.", ""])
      , Ux = Q(["https://adservice.google.com.gh/adsid/integrator.", ""])
      , Vx = Q(["https://adservice.google.com.gi/adsid/integrator.", ""])
      , Wx = Q(["https://adservice.google.gl/adsid/integrator.", ""])
      , Xx = Q(["https://adservice.google.gm/adsid/integrator.", ""])
      , Yx = Q(["https://adservice.google.gr/adsid/integrator.", ""])
      , Zx = Q(["https://adservice.google.com.gt/adsid/integrator.", ""])
      , $x = Q(["https://adservice.google.gy/adsid/integrator.", ""])
      , ay = Q(["https://adservice.google.com.hk/adsid/integrator.", ""])
      , by = Q(["https://adservice.google.hn/adsid/integrator.", ""])
      , cy = Q(["https://adservice.google.hr/adsid/integrator.", ""])
      , dy = Q(["https://adservice.google.ht/adsid/integrator.", ""])
      , ey = Q(["https://adservice.google.hu/adsid/integrator.", ""])
      , fy = Q(["https://adservice.google.co.id/adsid/integrator.", ""])
      , gy = Q(["https://adservice.google.ie/adsid/integrator.", ""])
      , hy = Q(["https://adservice.google.co.il/adsid/integrator.", ""])
      , iy = Q(["https://adservice.google.im/adsid/integrator.", ""])
      , jy = Q(["https://adservice.google.co.in/adsid/integrator.", ""])
      , ky = Q(["https://adservice.google.iq/adsid/integrator.", ""])
      , ly = Q(["https://adservice.google.is/adsid/integrator.", ""])
      , my = Q(["https://adservice.google.it/adsid/integrator.", ""])
      , ny = Q(["https://adservice.google.je/adsid/integrator.", ""])
      , oy = Q(["https://adservice.google.com.jm/adsid/integrator.", ""])
      , py = Q(["https://adservice.google.jo/adsid/integrator.", ""])
      , qy = Q(["https://adservice.google.co.jp/adsid/integrator.", ""])
      , ry = Q(["https://adservice.google.co.ke/adsid/integrator.", ""])
      , sy = Q(["https://adservice.google.com.kh/adsid/integrator.", ""])
      , ty = Q(["https://adservice.google.ki/adsid/integrator.", ""])
      , uy = Q(["https://adservice.google.kg/adsid/integrator.", ""])
      , vy = Q(["https://adservice.google.co.kr/adsid/integrator.", ""])
      , wy = Q(["https://adservice.google.com.kw/adsid/integrator.", ""])
      , xy = Q(["https://adservice.google.kz/adsid/integrator.", ""])
      , yy = Q(["https://adservice.google.la/adsid/integrator.", ""])
      , zy = Q(["https://adservice.google.com.lb/adsid/integrator.", ""])
      , Ay = Q(["https://adservice.google.li/adsid/integrator.", ""])
      , By = Q(["https://adservice.google.lk/adsid/integrator.", ""])
      , Cy = Q(["https://adservice.google.co.ls/adsid/integrator.", ""])
      , Dy = Q(["https://adservice.google.lt/adsid/integrator.", ""])
      , Ey = Q(["https://adservice.google.lu/adsid/integrator.", ""])
      , Fy = Q(["https://adservice.google.lv/adsid/integrator.", ""])
      , Gy = Q(["https://adservice.google.com.ly/adsid/integrator.", ""])
      , Hy = Q(["https://adservice.google.md/adsid/integrator.", ""])
      , Iy = Q(["https://adservice.google.me/adsid/integrator.", ""])
      , Jy = Q(["https://adservice.google.mg/adsid/integrator.", ""])
      , Ky = Q(["https://adservice.google.mk/adsid/integrator.", ""])
      , Ly = Q(["https://adservice.google.ml/adsid/integrator.", ""])
      , My = Q(["https://adservice.google.com.mm/adsid/integrator.", ""])
      , Ny = Q(["https://adservice.google.mn/adsid/integrator.", ""])
      , Oy = Q(["https://adservice.google.ms/adsid/integrator.", ""])
      , Py = Q(["https://adservice.google.com.mt/adsid/integrator.", ""])
      , Qy = Q(["https://adservice.google.mu/adsid/integrator.", ""])
      , Ry = Q(["https://adservice.google.mv/adsid/integrator.", ""])
      , Sy = Q(["https://adservice.google.mw/adsid/integrator.", ""])
      , Ty = Q(["https://adservice.google.com.mx/adsid/integrator.", ""])
      , Uy = Q(["https://adservice.google.com.my/adsid/integrator.", ""])
      , Vy = Q(["https://adservice.google.co.mz/adsid/integrator.", ""])
      , Wy = Q(["https://adservice.google.com.na/adsid/integrator.", ""])
      , Xy = Q(["https://adservice.google.com.ng/adsid/integrator.", ""])
      , Yy = Q(["https://adservice.google.com.ni/adsid/integrator.", ""])
      , Zy = Q(["https://adservice.google.ne/adsid/integrator.", ""])
      , $y = Q(["https://adservice.google.nl/adsid/integrator.", ""])
      , az = Q(["https://adservice.google.no/adsid/integrator.", ""])
      , bz = Q(["https://adservice.google.com.np/adsid/integrator.", ""])
      , cz = Q(["https://adservice.google.nr/adsid/integrator.", ""])
      , dz = Q(["https://adservice.google.nu/adsid/integrator.", ""])
      , ez = Q(["https://adservice.google.co.nz/adsid/integrator.", ""])
      , fz = Q(["https://adservice.google.com.om/adsid/integrator.", ""])
      , gz = Q(["https://adservice.google.com.pa/adsid/integrator.", ""])
      , hz = Q(["https://adservice.google.com.pe/adsid/integrator.", ""])
      , iz = Q(["https://adservice.google.com.pg/adsid/integrator.", ""])
      , jz = Q(["https://adservice.google.com.ph/adsid/integrator.", ""])
      , kz = Q(["https://adservice.google.com.pk/adsid/integrator.", ""])
      , lz = Q(["https://adservice.google.pl/adsid/integrator.", ""])
      , mz = Q(["https://adservice.google.pn/adsid/integrator.", ""])
      , nz = Q(["https://adservice.google.com.pr/adsid/integrator.", ""])
      , oz = Q(["https://adservice.google.ps/adsid/integrator.", ""])
      , pz = Q(["https://adservice.google.pt/adsid/integrator.", ""])
      , qz = Q(["https://adservice.google.com.py/adsid/integrator.", ""])
      , rz = Q(["https://adservice.google.com.qa/adsid/integrator.", ""])
      , sz = Q(["https://adservice.google.ro/adsid/integrator.", ""])
      , tz = Q(["https://adservice.google.ru/adsid/integrator.", ""])
      , uz = Q(["https://adservice.google.rw/adsid/integrator.", ""])
      , vz = Q(["https://adservice.google.com.sa/adsid/integrator.", ""])
      , wz = Q(["https://adservice.google.com.sb/adsid/integrator.", ""])
      , xz = Q(["https://adservice.google.sc/adsid/integrator.", ""])
      , yz = Q(["https://adservice.google.se/adsid/integrator.", ""])
      , zz = Q(["https://adservice.google.com.sg/adsid/integrator.", ""])
      , Az = Q(["https://adservice.google.sh/adsid/integrator.", ""])
      , Bz = Q(["https://adservice.google.si/adsid/integrator.", ""])
      , Cz = Q(["https://adservice.google.sk/adsid/integrator.", ""])
      , Dz = Q(["https://adservice.google.sn/adsid/integrator.", ""])
      , Ez = Q(["https://adservice.google.so/adsid/integrator.", ""])
      , Fz = Q(["https://adservice.google.sm/adsid/integrator.", ""])
      , Gz = Q(["https://adservice.google.sr/adsid/integrator.", ""])
      , Hz = Q(["https://adservice.google.st/adsid/integrator.", ""])
      , Iz = Q(["https://adservice.google.com.sv/adsid/integrator.", ""])
      , Jz = Q(["https://adservice.google.td/adsid/integrator.", ""])
      , Kz = Q(["https://adservice.google.tg/adsid/integrator.", ""])
      , Lz = Q(["https://adservice.google.co.th/adsid/integrator.", ""])
      , Mz = Q(["https://adservice.google.com.tj/adsid/integrator.", ""])
      , Nz = Q(["https://adservice.google.tl/adsid/integrator.", ""])
      , Oz = Q(["https://adservice.google.tm/adsid/integrator.", ""])
      , Pz = Q(["https://adservice.google.tn/adsid/integrator.", ""])
      , Qz = Q(["https://adservice.google.to/adsid/integrator.", ""])
      , Rz = Q(["https://adservice.google.com.tr/adsid/integrator.", ""])
      , Sz = Q(["https://adservice.google.tt/adsid/integrator.", ""])
      , Tz = Q(["https://adservice.google.com.tw/adsid/integrator.", ""])
      , Uz = Q(["https://adservice.google.co.tz/adsid/integrator.", ""])
      , Vz = Q(["https://adservice.google.com.ua/adsid/integrator.", ""])
      , Wz = Q(["https://adservice.google.co.ug/adsid/integrator.", ""])
      , Xz = Q(["https://adservice.google.co.uk/adsid/integrator.", ""])
      , Yz = Q(["https://adservice.google.com.uy/adsid/integrator.", ""])
      , Zz = Q(["https://adservice.google.co.uz/adsid/integrator.", ""])
      , $z = Q(["https://adservice.google.com.vc/adsid/integrator.", ""])
      , aA = Q(["https://adservice.google.co.ve/adsid/integrator.", ""])
      , bA = Q(["https://adservice.google.vg/adsid/integrator.", ""])
      , cA = Q(["https://adservice.google.co.vi/adsid/integrator.", ""])
      , dA = Q(["https://adservice.google.com.vn/adsid/integrator.", ""])
      , eA = Q(["https://adservice.google.vu/adsid/integrator.", ""])
      , fA = Q(["https://adservice.google.ws/adsid/integrator.", ""])
      , gA = Q(["https://adservice.google.rs/adsid/integrator.", ""])
      , hA = Q(["https://adservice.google.co.za/adsid/integrator.", ""])
      , iA = Q(["https://adservice.google.co.zm/adsid/integrator.", ""])
      , jA = Q(["https://adservice.google.co.zw/adsid/integrator.", ""])
      , kA = Q(["https://adservice.google.cat/adsid/integrator.", ""])
      , lA = new v.Map([[".google.com", function(a) {
        return B(Ow, a)
    }
    ], [".google.ad", function(a) {
        return B(Pw, a)
    }
    ], [".google.ae", function(a) {
        return B(Qw, a)
    }
    ], [".google.com.af", function(a) {
        return B(Rw, a)
    }
    ], [".google.com.ag", function(a) {
        return B(Sw, a)
    }
    ], [".google.com.ai", function(a) {
        return B(Tw, a)
    }
    ], [".google.al", function(a) {
        return B(Uw, a)
    }
    ], [".google.co.ao", function(a) {
        return B(Vw, a)
    }
    ], [".google.com.ar", function(a) {
        return B(Ww, a)
    }
    ], [".google.as", function(a) {
        return B(Xw, a)
    }
    ], [".google.at", function(a) {
        return B(Yw, a)
    }
    ], [".google.com.au", function(a) {
        return B(Zw, a)
    }
    ], [".google.az", function(a) {
        return B($w, a)
    }
    ], [".google.com.bd", function(a) {
        return B(ax, a)
    }
    ], [".google.be", function(a) {
        return B(bx, a)
    }
    ], [".google.bf", function(a) {
        return B(cx, a)
    }
    ], [".google.bg", function(a) {
        return B(dx, a)
    }
    ], [".google.com.bh", function(a) {
        return B(ex, a)
    }
    ], [".google.bi", function(a) {
        return B(fx, a)
    }
    ], [".google.bj", function(a) {
        return B(gx, a)
    }
    ], [".google.com.bn", function(a) {
        return B(hx, a)
    }
    ], [".google.com.bo", function(a) {
        return B(ix, a)
    }
    ], [".google.com.br", function(a) {
        return B(jx, a)
    }
    ], [".google.bs", function(a) {
        return B(kx, a)
    }
    ], [".google.bt", function(a) {
        return B(lx, a)
    }
    ], [".google.co.bw", function(a) {
        return B(mx, a)
    }
    ], [".google.com.bz", function(a) {
        return B(nx, a)
    }
    ], [".google.ca", function(a) {
        return B(ox, a)
    }
    ], [".google.cd", function(a) {
        return B(px, a)
    }
    ], [".google.cf", function(a) {
        return B(qx, a)
    }
    ], [".google.cg", function(a) {
        return B(rx, a)
    }
    ], [".google.ch", function(a) {
        return B(sx, a)
    }
    ], [".google.ci", function(a) {
        return B(tx, a)
    }
    ], [".google.co.ck", function(a) {
        return B(ux, a)
    }
    ], [".google.cl", function(a) {
        return B(vx, a)
    }
    ], [".google.cm", function(a) {
        return B(wx, a)
    }
    ], [".google.com.co", function(a) {
        return B(xx, a)
    }
    ], [".google.co.cr", function(a) {
        return B(yx, a)
    }
    ], [".google.com.cu", function(a) {
        return B(zx, a)
    }
    ], [".google.cv", function(a) {
        return B(Ax, a)
    }
    ], [".google.com.cy", function(a) {
        return B(Bx, a)
    }
    ], [".google.cz", function(a) {
        return B(Cx, a)
    }
    ], [".google.de", function(a) {
        return B(Dx, a)
    }
    ], [".google.dj", function(a) {
        return B(Ex, a)
    }
    ], [".google.dk", function(a) {
        return B(Fx, a)
    }
    ], [".google.dm", function(a) {
        return B(Gx, a)
    }
    ], [".google.dz", function(a) {
        return B(Hx, a)
    }
    ], [".google.com.ec", function(a) {
        return B(Ix, a)
    }
    ], [".google.ee", function(a) {
        return B(Jx, a)
    }
    ], [".google.com.eg", function(a) {
        return B(Kx, a)
    }
    ], [".google.es", function(a) {
        return B(Lx, a)
    }
    ], [".google.com.et", function(a) {
        return B(Mx, a)
    }
    ], [".google.fi", function(a) {
        return B(Nx, a)
    }
    ], [".google.com.fj", function(a) {
        return B(Ox, a)
    }
    ], [".google.fm", function(a) {
        return B(Px, a)
    }
    ], [".google.fr", function(a) {
        return B(Qx, a)
    }
    ], [".google.ga", function(a) {
        return B(Rx, a)
    }
    ], [".google.ge", function(a) {
        return B(Sx, a)
    }
    ], [".google.gg", function(a) {
        return B(Tx, a)
    }
    ], [".google.com.gh", function(a) {
        return B(Ux, a)
    }
    ], [".google.com.gi", function(a) {
        return B(Vx, a)
    }
    ], [".google.gl", function(a) {
        return B(Wx, a)
    }
    ], [".google.gm", function(a) {
        return B(Xx, a)
    }
    ], [".google.gr", function(a) {
        return B(Yx, a)
    }
    ], [".google.com.gt", function(a) {
        return B(Zx, a)
    }
    ], [".google.gy", function(a) {
        return B($x, a)
    }
    ], [".google.com.hk", function(a) {
        return B(ay, a)
    }
    ], [".google.hn", function(a) {
        return B(by, a)
    }
    ], [".google.hr", function(a) {
        return B(cy, a)
    }
    ], [".google.ht", function(a) {
        return B(dy, a)
    }
    ], [".google.hu", function(a) {
        return B(ey, a)
    }
    ], [".google.co.id", function(a) {
        return B(fy, a)
    }
    ], [".google.ie", function(a) {
        return B(gy, a)
    }
    ], [".google.co.il", function(a) {
        return B(hy, a)
    }
    ], [".google.im", function(a) {
        return B(iy, a)
    }
    ], [".google.co.in", function(a) {
        return B(jy, a)
    }
    ], [".google.iq", function(a) {
        return B(ky, a)
    }
    ], [".google.is", function(a) {
        return B(ly, a)
    }
    ], [".google.it", function(a) {
        return B(my, a)
    }
    ], [".google.je", function(a) {
        return B(ny, a)
    }
    ], [".google.com.jm", function(a) {
        return B(oy, a)
    }
    ], [".google.jo", function(a) {
        return B(py, a)
    }
    ], [".google.co.jp", function(a) {
        return B(qy, a)
    }
    ], [".google.co.ke", function(a) {
        return B(ry, a)
    }
    ], [".google.com.kh", function(a) {
        return B(sy, a)
    }
    ], [".google.ki", function(a) {
        return B(ty, a)
    }
    ], [".google.kg", function(a) {
        return B(uy, a)
    }
    ], [".google.co.kr", function(a) {
        return B(vy, a)
    }
    ], [".google.com.kw", function(a) {
        return B(wy, a)
    }
    ], [".google.kz", function(a) {
        return B(xy, a)
    }
    ], [".google.la", function(a) {
        return B(yy, a)
    }
    ], [".google.com.lb", function(a) {
        return B(zy, a)
    }
    ], [".google.li", function(a) {
        return B(Ay, a)
    }
    ], [".google.lk", function(a) {
        return B(By, a)
    }
    ], [".google.co.ls", function(a) {
        return B(Cy, a)
    }
    ], [".google.lt", function(a) {
        return B(Dy, a)
    }
    ], [".google.lu", function(a) {
        return B(Ey, a)
    }
    ], [".google.lv", function(a) {
        return B(Fy, a)
    }
    ], [".google.com.ly", function(a) {
        return B(Gy, a)
    }
    ], [".google.md", function(a) {
        return B(Hy, a)
    }
    ], [".google.me", function(a) {
        return B(Iy, a)
    }
    ], [".google.mg", function(a) {
        return B(Jy, a)
    }
    ], [".google.mk", function(a) {
        return B(Ky, a)
    }
    ], [".google.ml", function(a) {
        return B(Ly, a)
    }
    ], [".google.com.mm", function(a) {
        return B(My, a)
    }
    ], [".google.mn", function(a) {
        return B(Ny, a)
    }
    ], [".google.ms", function(a) {
        return B(Oy, a)
    }
    ], [".google.com.mt", function(a) {
        return B(Py, a)
    }
    ], [".google.mu", function(a) {
        return B(Qy, a)
    }
    ], [".google.mv", function(a) {
        return B(Ry, a)
    }
    ], [".google.mw", function(a) {
        return B(Sy, a)
    }
    ], [".google.com.mx", function(a) {
        return B(Ty, a)
    }
    ], [".google.com.my", function(a) {
        return B(Uy, a)
    }
    ], [".google.co.mz", function(a) {
        return B(Vy, a)
    }
    ], [".google.com.na", function(a) {
        return B(Wy, a)
    }
    ], [".google.com.ng", function(a) {
        return B(Xy, a)
    }
    ], [".google.com.ni", function(a) {
        return B(Yy, a)
    }
    ], [".google.ne", function(a) {
        return B(Zy, a)
    }
    ], [".google.nl", function(a) {
        return B($y, a)
    }
    ], [".google.no", function(a) {
        return B(az, a)
    }
    ], [".google.com.np", function(a) {
        return B(bz, a)
    }
    ], [".google.nr", function(a) {
        return B(cz, a)
    }
    ], [".google.nu", function(a) {
        return B(dz, a)
    }
    ], [".google.co.nz", function(a) {
        return B(ez, a)
    }
    ], [".google.com.om", function(a) {
        return B(fz, a)
    }
    ], [".google.com.pa", function(a) {
        return B(gz, a)
    }
    ], [".google.com.pe", function(a) {
        return B(hz, a)
    }
    ], [".google.com.pg", function(a) {
        return B(iz, a)
    }
    ], [".google.com.ph", function(a) {
        return B(jz, a)
    }
    ], [".google.com.pk", function(a) {
        return B(kz, a)
    }
    ], [".google.pl", function(a) {
        return B(lz, a)
    }
    ], [".google.pn", function(a) {
        return B(mz, a)
    }
    ], [".google.com.pr", function(a) {
        return B(nz, a)
    }
    ], [".google.ps", function(a) {
        return B(oz, a)
    }
    ], [".google.pt", function(a) {
        return B(pz, a)
    }
    ], [".google.com.py", function(a) {
        return B(qz, a)
    }
    ], [".google.com.qa", function(a) {
        return B(rz, a)
    }
    ], [".google.ro", function(a) {
        return B(sz, a)
    }
    ], [".google.ru", function(a) {
        return B(tz, a)
    }
    ], [".google.rw", function(a) {
        return B(uz, a)
    }
    ], [".google.com.sa", function(a) {
        return B(vz, a)
    }
    ], [".google.com.sb", function(a) {
        return B(wz, a)
    }
    ], [".google.sc", function(a) {
        return B(xz, a)
    }
    ], [".google.se", function(a) {
        return B(yz, a)
    }
    ], [".google.com.sg", function(a) {
        return B(zz, a)
    }
    ], [".google.sh", function(a) {
        return B(Az, a)
    }
    ], [".google.si", function(a) {
        return B(Bz, a)
    }
    ], [".google.sk", function(a) {
        return B(Cz, a)
    }
    ], [".google.sn", function(a) {
        return B(Dz, a)
    }
    ], [".google.so", function(a) {
        return B(Ez, a)
    }
    ], [".google.sm", function(a) {
        return B(Fz, a)
    }
    ], [".google.sr", function(a) {
        return B(Gz, a)
    }
    ], [".google.st", function(a) {
        return B(Hz, a)
    }
    ], [".google.com.sv", function(a) {
        return B(Iz, a)
    }
    ], [".google.td", function(a) {
        return B(Jz, a)
    }
    ], [".google.tg", function(a) {
        return B(Kz, a)
    }
    ], [".google.co.th", function(a) {
        return B(Lz, a)
    }
    ], [".google.com.tj", function(a) {
        return B(Mz, a)
    }
    ], [".google.tl", function(a) {
        return B(Nz, a)
    }
    ], [".google.tm", function(a) {
        return B(Oz, a)
    }
    ], [".google.tn", function(a) {
        return B(Pz, a)
    }
    ], [".google.to", function(a) {
        return B(Qz, a)
    }
    ], [".google.com.tr", function(a) {
        return B(Rz, a)
    }
    ], [".google.tt", function(a) {
        return B(Sz, a)
    }
    ], [".google.com.tw", function(a) {
        return B(Tz, a)
    }
    ], [".google.co.tz", function(a) {
        return B(Uz, a)
    }
    ], [".google.com.ua", function(a) {
        return B(Vz, a)
    }
    ], [".google.co.ug", function(a) {
        return B(Wz, a)
    }
    ], [".google.co.uk", function(a) {
        return B(Xz, a)
    }
    ], [".google.com.uy", function(a) {
        return B(Yz, a)
    }
    ], [".google.co.uz", function(a) {
        return B(Zz, a)
    }
    ], [".google.com.vc", function(a) {
        return B($z, a)
    }
    ], [".google.co.ve", function(a) {
        return B(aA, a)
    }
    ], [".google.vg", function(a) {
        return B(bA, a)
    }
    ], [".google.co.vi", function(a) {
        return B(cA, a)
    }
    ], [".google.com.vn", function(a) {
        return B(dA, a)
    }
    ], [".google.vu", function(a) {
        return B(eA, a)
    }
    ], [".google.ws", function(a) {
        return B(fA, a)
    }
    ], [".google.rs", function(a) {
        return B(gA, a)
    }
    ], [".google.co.za", function(a) {
        return B(hA, a)
    }
    ], [".google.co.zm", function(a) {
        return B(iA, a)
    }
    ], [".google.co.zw", function(a) {
        return B(jA, a)
    }
    ], [".google.cat", function(a) {
        return B(kA, a)
    }
    ]].map(function(a) {
        var b = _.y(a);
        a = b.next().value;
        b = b.next().value;
        var c = {};
        return [a, (c.json = b("json"),
        c.js = b("js"),
        c["sync.js"] = b("sync.js"),
        c)]
    }));
    var mA = function(a, b, c) {
        var d = "script";
        d = void 0 === d ? "" : d;
        var e = _.Lj("LINK", a);
        try {
            pr(e, b, "preload")
        } catch (f) {
            return
        }
        d && (e.as = d);
        c && e.setAttribute("nonce", c);
        if (a = a.getElementsByTagName("head")[0])
            try {
                a.appendChild(e)
            } catch (f) {}
    };
    var Yd = _.t, nA = function(a) {
        var b = new v.Map([["domain", _.t.location.hostname]]);
        Zd[3] >= $d() && b.set("adsid", Zd[1]);
        return wc(lA.get(a).js, b)
    }, Zd, oA, Xd = function() {
        Yd = _.t;
        Zd = Yd.googleToken = Yd.googleToken || {};
        var a = $d();
        Zd[1] && Zd[3] > a && 0 < Zd[2] || (Zd[1] = "",
        Zd[2] = -1,
        Zd[3] = -1,
        Zd[4] = "",
        Zd[6] = "");
        oA = Yd.googleIMState = Yd.googleIMState || {};
        lA.has(oA[1]) || (oA[1] = ".google.com");
        Array.isArray(oA[5]) || (oA[5] = []);
        "boolean" !== typeof oA[6] && (oA[6] = !1);
        Array.isArray(oA[7]) || (oA[7] = []);
        "number" !== typeof oA[8] && (oA[8] = 0)
    }, pA = function(a) {
        Xd();
        lA.has(a) && (oA[1] = a)
    }, be = {
        uc: function() {
            return 0 < oA[8]
        },
        te: function() {
            oA[8]++
        },
        ue: function() {
            0 < oA[8] && oA[8]--
        },
        ve: function() {
            oA[8] = 0
        },
        ng: function() {
            return !1
        },
        Vc: function() {
            return oA[5]
        },
        Rc: function(a) {
            try {
                a()
            } catch (b) {
                _.t.setTimeout(function() {
                    throw b;
                }, 0)
            }
        },
        jd: function() {
            if (!be.uc()) {
                var a = _.t.document
                  , b = function(e) {
                    e = nA(e);
                    a: {
                        try {
                            var f = or("script[nonce]", void 0);
                            break a
                        } catch (g) {}
                        f = void 0
                    }
                    mA(a, e.toString(), f);
                    f = _.Lj("SCRIPT", a);
                    f.type = "text/javascript";
                    f.onerror = function() {
                        return _.t.processGoogleToken({}, 2)
                    }
                    ;
                    ab(f, e);
                    try {
                        (a.head || a.body || a.documentElement).appendChild(f),
                        be.te()
                    } catch (g) {}
                }
                  , c = oA[1];
                b(c);
                ".google.com" != c && b(".google.com");
                b = {};
                var d = (b.newToken = "FBT",
                b);
                _.t.setTimeout(function() {
                    return _.t.processGoogleToken(d, 1)
                }, 1E3)
            }
        }
    }, qA = function(a) {
        _.t.processGoogleToken = _.t.processGoogleToken || function(b, c) {
            var d = b;
            d = void 0 === d ? {} : d;
            c = void 0 === c ? 0 : c;
            b = d.newToken || "";
            var e = "NT" == b
              , f = parseInt(d.freshLifetimeSecs || "", 10)
              , g = parseInt(d.validLifetimeSecs || "", 10)
              , h = d["1p_jar"] || "";
            d = d.pucrd || "";
            Xd();
            1 == c ? be.ve() : be.ue();
            var k = Yd.googleToken = Yd.googleToken || {}
              , l = 0 == c && b && "string" === typeof b && !e && "number" === typeof f && 0 < f && "number" === typeof g && 0 < g && "string" === typeof h;
            e = e && !be.uc() && (!(Zd[3] >= $d()) || "NT" == Zd[1]);
            var m = !(Zd[3] >= $d()) && 0 != c;
            if (l || e || m)
                e = $d(),
                f = e + 1E3 * f,
                g = e + 1E3 * g,
                1E-5 > Math.random() && _.uv(_.t, "https://pagead2.googlesyndication.com/pagead/gen_204?id=imerr&err=" + c),
                k[5] = c,
                k[1] = b,
                k[2] = f,
                k[3] = g,
                k[4] = h,
                k[6] = d,
                Xd();
            if (l || !be.uc()) {
                c = be.Vc();
                for (b = 0; b < c.length; b++)
                    be.Rc(c[b]);
                c.length = 0
            }
        }
        ;
        ce(a)
    };
    var Xj = function(a, b) {
        b = void 0 === b ? {} : b;
        this.root = b.root ? b.root : null;
        this.o = b.rootMargin ? ee(b.rootMargin) : [{
            value: 0,
            type: "px"
        }, {
            value: 0,
            type: "px"
        }, {
            value: 0,
            type: "px"
        }, {
            value: 0,
            type: "px"
        }];
        this.rootMargin = _.de(this.o, function(c) {
            return "" + c.value + c.type
        }).join(" ");
        this.M = ge(b.threshold);
        this.B = a;
        this.j = [];
        this.A = [];
        this.D = !1;
        this.m = null;
        this.F = Go(this.l, 100, this)
    }
      , rA = function(a) {
        if (a.root)
            var b = he(a.root);
        else {
            var c = _.Dr(window);
            b = {
                top: 0,
                right: c.width,
                bottom: c.height,
                left: 0,
                width: c.width,
                height: c.height
            }
        }
        a = _.de(a.o, function(d, e) {
            return "px" == d.type ? d.value : d.value * (e % 2 ? b.width : b.height) / 100
        });
        return {
            top: b.top - a[0],
            right: b.right + a[1],
            bottom: b.bottom + a[2],
            left: b.left - a[3],
            width: b.width + a[1] + a[3],
            height: b.height + a[0] + a[2]
        }
    }
      , sA = function(a, b, c) {
        if (!b || b.isIntersecting != c.isIntersecting)
            return !0;
        var d = b.intersectionRatio
          , e = c.intersectionRatio;
        return d == e ? !1 : _.se(a.M, function(f) {
            return f < d != f < e
        })
    };
    Xj.prototype.l = function() {
        var a = this
          , b = rA(this);
        _.bo(this.j, function(c) {
            var d = c.target
              , e = he(d)
              , f = e.width * e.height;
            var g = Math.max(b.top, e.top);
            var h = Math.min(b.right, e.right)
              , k = Math.min(b.bottom, e.bottom)
              , l = Math.max(b.left, e.left)
              , m = h - l
              , n = k - g;
            g = 0 <= m && 0 <= n ? {
                top: g,
                right: h,
                bottom: k,
                left: l,
                width: m,
                height: n
            } : null;
            h = !!g;
            k = g ? g.width * g.height : 0;
            l = window.performance;
            d = {
                boundingClientRect: e,
                intersectionRatio: f ? k / f : h ? 1 : 0,
                intersectionRect: g || {
                    top: 0,
                    bottom: 0,
                    left: 0,
                    right: 0,
                    width: 0,
                    height: 0
                },
                isIntersecting: h,
                rootBounds: b,
                target: d,
                time: l && l.now ? l.now() : 0
            };
            sA(a, c.ra, d) && a.A.push(d);
            c.ra = d
        });
        this.A.length && this.B(tA(this), this)
    }
    ;
    Xj.prototype.observe = function(a) {
        _.se(this.j, function(b) {
            return b.target == a
        }) || (this.j.push({
            target: a,
            ra: null
        }),
        this.l(),
        this.D || (this.D = !0,
        _.eb(_.t, "scroll", this.F),
        _.eb(_.t, "resize", this.F),
        _.t.MutationObserver && !this.m && (this.m = new MutationObserver(this.F),
        this.m.observe(_.t.document, {
            attributes: !0,
            childList: !0,
            characterData: !0,
            subtree: !0
        }))))
    }
    ;
    Xj.prototype.unobserve = function(a) {
        this.j = _.fe(this.j, function(b) {
            return b.target != a
        });
        0 == this.j.length && this.disconnect()
    }
    ;
    Xj.prototype.disconnect = function() {
        this.D = !1;
        this.j.length = 0;
        _.md(_.t, "scroll", this.F);
        _.md(_.t, "resize", this.F);
        this.m && (this.m.disconnect(),
        this.m = null)
    }
    ;
    var tA = function(a) {
        var b = [].concat(_.yc(a.A));
        a.A.length = 0;
        return b
    };
    var uA = function(a, b, c, d, e, f) {
        _.Ou.call(this);
        this.l = a;
        this.status = 1;
        this.D = b;
        this.A = c;
        this.K = d;
        this.xb = !!e;
        this.o = Math.random();
        this.B = {};
        this.j = null;
        this.R = (0,
        _.Wn)(this.G, this);
        this.M = f
    };
    _.O(uA, _.Ou);
    uA.prototype.G = function(a) {
        if (!("*" !== this.A && a.origin !== this.A || !this.xb && a.source != this.D)) {
            var b = null;
            try {
                b = JSON.parse(a.data)
            } catch (c) {}
            if (_.ia(b) && (a = b.i,
            b.c === this.l && a != this.o)) {
                if (2 !== this.status)
                    try {
                        this.status = 2,
                        vA(this),
                        this.j && (this.j(),
                        this.j = null)
                    } catch (c) {}
                a = b.s;
                b = b.p;
                if ("string" === typeof a && ("string" === typeof b || _.ia(b)) && this.B.hasOwnProperty(a))
                    this.B[a](b)
            }
        }
    }
    ;
    var vA = function(a) {
        var b = {};
        b.c = a.l;
        b.i = a.o;
        a.M && (b.e = a.M);
        a.D.postMessage(JSON.stringify(b), a.A)
    };
    uA.prototype.U = function() {
        if (1 === this.status) {
            try {
                this.D.postMessage && vA(this)
            } catch (a) {}
            window.setTimeout((0,
            _.Wn)(this.U, this), 50)
        }
    }
    ;
    uA.prototype.connect = function(a) {
        a && (this.j = a);
        _.eb(window, "message", this.R);
        this.K && this.U()
    }
    ;
    var wA = function(a, b, c) {
        a.B[b] = c
    };
    uA.prototype.send = function(a, b) {
        var c = {};
        c.c = this.l;
        c.i = this.o;
        c.s = a;
        c.p = b;
        try {
            this.D.postMessage(JSON.stringify(c), this.A)
        } catch (d) {}
    }
    ;
    uA.prototype.F = function() {
        this.status = 3;
        _.md(window, "message", this.R);
        _.Ou.prototype.F.call(this)
    }
    ;
    var xA = new v.Map([["navigate", 1], ["reload", 2], ["back_forward", 3], ["prerender", 4]])
      , yA = new v.Map([[0, 1], [1, 2], [2, 3]]);
    iv(su);
    var zA = function(a) {
        R.call(this, a)
    };
    _.O(zA, R);
    var AA = function(a) {
        R.call(this, a)
    };
    _.O(AA, R);
    var BA = function(a) {
        R.call(this, a)
    };
    _.O(BA, R);
    pj(Hd(ao("https://pagead2.googlesyndication.com/pagead/osd.js")));
    var DA = function() {
        return 0 != CA(document)
    }
      , CA = function(a) {
        return _.F(vu) && a.prerendering ? 3 : {
            visible: 1,
            hidden: 2,
            prerender: 3,
            preview: 4,
            unloaded: 5
        }[a.visibilityState || a.webkitVisibilityState || a.mozVisibilityState || ""] || 0
    }
      , EA = function(a) {
        var b;
        a.visibilityState ? b = "visibilitychange" : a.mozVisibilityState ? b = "mozvisibilitychange" : a.webkitVisibilityState && (b = "webkitvisibilitychange");
        return b
    }
      , FA = function(a) {
        return null != a.hidden ? a.hidden : null != a.mozHidden ? a.mozHidden : null != a.webkitHidden ? a.webkitHidden : null
    }
      , GA = function(a, b) {
        if (3 == CA(b))
            return !1;
        a();
        return !0
    }
      , HA = function(a, b) {
        if (!GA(a, b)) {
            var c = !1
              , d = EA(b)
              , e = function() {
                !c && GA(a, b) && (c = !0,
                _.md(b, d, e))
            };
            d && _.eb(b, d, e)
        }
    };
    var JA, IA;
    JA = function() {
        this.wasPlaTagProcessed = !1;
        this.wasReactiveAdConfigReceived = {};
        this.adCount = {};
        this.wasReactiveAdVisible = {};
        this.stateForType = {};
        this.reactiveTypeEnabledInAsfe = {};
        this.wasReactiveTagRequestSent = !1;
        this.reactiveTypeDisabledByPublisher = {};
        this.tagSpecificState = {};
        this.messageValidationEnabled = !1;
        this.floatingAdsStacking = new IA;
        this.sideRailProcessedFixedElements = new v.Set;
        this.sideRailAvailableSpace = new v.Map
    }
    ;
    _.Ni = function(a) {
        a.google_reactive_ads_global_state ? (null == a.google_reactive_ads_global_state.sideRailProcessedFixedElements && (a.google_reactive_ads_global_state.sideRailProcessedFixedElements = new v.Set),
        null == a.google_reactive_ads_global_state.sideRailAvailableSpace && (a.google_reactive_ads_global_state.sideRailAvailableSpace = new v.Map)) : a.google_reactive_ads_global_state = new JA;
        return a.google_reactive_ads_global_state
    }
    ;
    IA = function() {
        this.maxZIndexRestrictions = {};
        this.nextRestrictionId = 0;
        this.maxZIndexListeners = []
    }
    ;
    var MA;
    _.KA = function(a) {
        this.j = _.Ni(a).floatingAdsStacking
    }
    ;
    _.LA = function(a) {
        a = _.Rr(a.j.maxZIndexRestrictions);
        return a.length ? Math.min.apply(null, a) : null
    }
    ;
    MA = function(a) {
        var b = _.LA(a);
        _.bo(a.j.maxZIndexListeners, function(c) {
            return c(b)
        })
    }
    ;
    _.NA = function(a) {
        this.m = a;
        this.j = null
    }
    ;
    _.OA = function(a) {
        if (null == a.j) {
            var b = a.m
              , c = b.j.nextRestrictionId++;
            b.j.maxZIndexRestrictions[c] = 2147483646;
            MA(b);
            a.j = c
        }
    }
    ;
    _.PA = function(a) {
        if (null != a.j) {
            var b = a.m;
            delete b.j.maxZIndexRestrictions[a.j];
            MA(b);
            a.j = null
        }
    }
    ;
    var Qi, og, rg;
    Qi = 728 * 1.38;
    _.Si = function(a) {
        return a.innerHeight >= a.innerWidth
    }
    ;
    _.QA = function(a) {
        var b = _.qg(a).clientWidth;
        a = a.innerWidth;
        return b && a ? b / a : 0
    }
    ;
    og = function(a, b) {
        return (a = _.qg(a).clientWidth) ? a > (void 0 === b ? 420 : b) ? 32768 : 320 > a ? 65536 : 0 : 16384
    }
    ;
    rg = function(a) {
        return (a = _.QA(a)) ? 1.05 < a ? 262144 : .95 > a ? 524288 : 0 : 131072
    }
    ;
    _.qg = function(a) {
        a = a.document;
        var b = {};
        a && (b = "CSS1Compat" == a.compatMode ? a.documentElement : a.body);
        return b || {}
    }
    ;
    _.RA = function(a) {
        return void 0 === a.pageYOffset ? (a.document.documentElement || a.document.body.parentNode || a.document.body).scrollTop : a.pageYOffset
    }
    ;
    var Ti = function(a, b, c) {
        for (var d = [], e = 0; 3 > e; e++)
            for (var f = 0; 3 > f; f++) {
                var g = d;
                g.push.call(g, {
                    x: f / 2 * a,
                    y: b + e / 2 * (c - b)
                })
            }
        return d
    }
      , Ui = 90 * 1.38;
    var SA;
    _.TA = function(a, b) {
        if (!a.body)
            return null;
        var c = new SA;
        c.apply(a, b);
        return function() {
            _.Cs(a.body, {
                filter: c.j,
                webkitFilter: c.j,
                overflow: c.F,
                position: c.A,
                top: c.D
            });
            b.scrollTo(0, c.m)
        }
    }
    ;
    SA = function() {
        this.j = this.D = this.A = this.F = null;
        this.m = 0
    }
    ;
    SA.prototype.apply = function(a, b) {
        this.F = a.body.style.overflow;
        this.A = a.body.style.position;
        this.D = a.body.style.top;
        this.j = a.body.style.filter ? a.body.style.filter : a.body.style.webkitFilter;
        this.m = _.RA(b);
        _.Cs(a.body, "top", -this.m + "px")
    }
    ;
    _.tg = function(a, b) {
        var c;
        if (!(c = 0 >= b) && !(c = null == a)) {
            try {
                a.setItem("__storage_test__", "__storage_test__");
                var d = a.getItem("__storage_test__");
                a.removeItem("__storage_test__");
                var e = "__storage_test__" === d
            } catch (f) {
                e = !1
            }
            c = !e
        }
        return c ? null : te(a, b)
    }
    ;
    _.sg = function(a) {
        return !!a && 1 > a.length
    }
    ;
    var Um = function(a, b) {
        b = void 0 === b ? 500 : b;
        _.Ou.call(this);
        this.A = a;
        this.o = b;
        this.j = null;
        this.l = {};
        this.B = 0;
        this.D = null
    };
    _.O(Um, _.Ou);
    Um.prototype.F = function() {
        this.l = {};
        this.D && (_.md(this.A, "message", this.D),
        delete this.D);
        delete this.l;
        delete this.A;
        delete this.j;
        _.Ou.prototype.F.call(this)
    }
    ;
    var Wm = function(a) {
        var b;
        return "function" === typeof (null === (b = a.A) || void 0 === b ? void 0 : b.__uspapi) || null != UA(a)
    }
      , WA = function(a, b) {
        var c = {};
        if (Wm(a)) {
            var d = _.Fo(function() {
                return b(c)
            });
            VA(a, function(e, f) {
                f && (c = e);
                d()
            });
            setTimeout(d, a.o)
        } else
            b(c)
    }
      , VA = function(a, b) {
        var c;
        if ("function" === typeof (null === (c = a.A) || void 0 === c ? void 0 : c.__uspapi))
            a = a.A.__uspapi,
            a("getUSPData", 1, b);
        else if (UA(a)) {
            XA(a);
            var d = ++a.B;
            a.l[d] = b;
            a.j && (b = {},
            a.j.postMessage((b.__uspapiCall = {
                command: "getUSPData",
                version: 1,
                callId: d
            },
            b), "*"))
        }
    }
      , UA = function(a) {
        if (a.j)
            return a.j;
        a.j = bs(a.A, "__uspapiLocator");
        return a.j
    }
      , XA = function(a) {
        a.D || (a.D = function(b) {
            var c;
            try {
                var d = {};
                "string" === typeof b.data ? d = JSON.parse(b.data) : d = b.data;
                var e = d.__uspapiReturn;
                null === (c = a.l) || void 0 === c ? void 0 : c[e.callId](e.returnValue, e.success)
            } catch (f) {}
        }
        ,
        _.eb(a.A, "message", a.D))
    };
    var YA = function(a) {
        R.call(this, a)
    };
    _.O(YA, R);
    var $A = function(a) {
        R.call(this, a, -1, ZA)
    };
    _.O($A, R);
    var ZA = [1, 2];
    var aB = function(a) {
        R.call(this, a)
    };
    _.O(aB, R);
    var bB = function(a) {
        R.call(this, a)
    };
    _.O(bB, R);
    var Sm = function(a) {
        _.Ou.call(this);
        this.A = a;
        this.D = this.j = null;
        this.l = {};
        this.B = 0;
        this.o = !1
    };
    _.O(Sm, _.Ou);
    var dh = function(a) {
        a.o || (a.j || (a.j = a.A.googlefc ? a.A : bs(a.A, "googlefcPresent")),
        a.o = !0);
        return !!a.j
    }
      , dB = function(a, b, c) {
        if (dh(a))
            if (a.j === a.A)
                a = a.j.googlefc || (a.j.googlefc = {}),
                a.__fci = a.__fci || [],
                a.__fci.push(b, function(f) {
                    c(Hc(bB, f))
                });
            else {
                cB(a);
                var d = a.B++;
                a.l[d] = c;
                var e = {};
                a.j.postMessage((e.__fciCall = {
                    command: b,
                    callId: d
                },
                e), "*")
            }
    }
      , eB = function(a, b) {
        return new v.Promise(function(c) {
            dB(a, b, c)
        }
        )
    }
      , cB = function(a) {
        a.D || (a.D = function(b) {
            try {
                var c = Hc(bB, b.data.__fciReturn);
                (0,
                a.l[x(c, 1)])(c)
            } catch (d) {}
        }
        ,
        _.eb(a.A, "message", a.D))
    }
      , fB = function(a, b, c, d) {
        if (!b)
            return v.Promise.resolve(null);
        var e = Yb(b, YA, 3);
        b = Yb(b, aB, 2);
        return e && b && 1 === x(b, 1) && 2 === x(e, 1) ? eB(a, "getM25Consent").then(function(f) {
            var g = Yb(f, $A, 4);
            if (g) {
                if (f = d,
                c) {
                    var h = $i(g, 1);
                    h && _.u(h, "includes").call(h, c) && (f = !1);
                    (g = $i(g, 2)) && _.u(g, "includes").call(g, c) && (f = !0)
                }
            } else
                f = null;
            return f
        }) : v.Promise.resolve(null)
    };
    var gB = function(a, b, c) {
        var d = !0;
        b = void 0 === b ? "" : b;
        d = void 0 === d ? !1 : d;
        c = void 0 === c ? "" : c;
        if (!a)
            return d && ue(c, 1),
            a;
        var e = a.toLowerCase();
        if (-1 < e.indexOf("<!doctype") || -1 < e.indexOf("<html"))
            return d && ue(c, 2),
            a;
        d && ue(c, 3);
        return _.F(Bu) ? a : "<!doctype html><html><head>" + b + "</head><body>" + a + "</body></html>"
    };
    var hB = {}
      , ye = (hB.companion_ads = "companionAds",
    hB.content = "content",
    hB.publisher_ads = "pubads",
    hB)
      , iB = function(a) {
        return a + 'Correlator has been deprecated. Please see the Google Ad Manager help page on "Pageviews in GPT" for more information: https://support.google.com/admanager/answer/183281?hl=en'
    }
      , Wh = {
        zf: "rewardedSlotReady",
        yf: "rewardedSlotGranted",
        vf: "rewardedSlotCanceled",
        wf: "rewardedSlotClosed",
        xf: "rewardedSlotCompleted",
        Af: "slotAdded",
        Df: "slotRequested",
        Ef: "slotResponseReceived",
        Cf: "slotRenderEnded",
        Bf: "slotOnload",
        Ff: "slotVisibilityChanged",
        rf: "impressionViewable"
    };
    var jB, kB;
    jB = {};
    _.qf = (jB[23] = .001,
    jB[38] = .001,
    jB[150] = "",
    jB[211] = !1,
    jB[253] = !1,
    jB[172] = null,
    jB[246] = [],
    jB[226] = [],
    jB[252] = null,
    jB[258] = null,
    jB[251] = null,
    jB[259] = null,
    jB[6] = Vr(window),
    jB[36] = Ur(),
    jB[148] = fw,
    jB[221] = Ur(),
    jB[257] = Ur(),
    jB[260] = void 0,
    jB[262] = Ur(),
    jB);
    kB = we();
    _.u(Object, "assign").call(Object, _.qf, kB._vars_);
    kB._vars_ = _.qf;
    var lB = Og(function() {
        return !!Wr(_.t.location.href)
    });
    var Fe = "2022012701";
    var rf = function(a) {
        var b = void 0 === b ? dd(_.t) : b;
        this.id = a;
        this.m = Math.random() < _.qf[23];
        this.j = {
            pvsid: String(b)
        }
    }
      , mB = function(a) {
        var b;
        a = ve(a);
        Sf.set(a, (null !== (b = Sf.get(a)) && void 0 !== b ? b : 0) + 1)
    }
      , Rf = function() {
        return [].concat(_.yc(_.u(Sf, "values").call(Sf))).reduce(function(a, b) {
            return a + b
        }, 0)
    }
      , G = function(a, b, c) {
        "string" !== typeof c && (c = String(c));
        /^\w+$/.test(b) && (c ? a.j[b] = c : delete a.j[b])
    }
      , uf = function(a, b) {
        b = void 0 === b ? null : b;
        b = void 0 === b ? null : b;
        if (lB())
            b = !0;
        else {
            var c = a.m;
            b && 0 <= b && (c = Math.random() < b);
            b = c && !!a.id
        }
        b && (a = nB(a) || "",
        _.uv(window, a))
    }
      , nB = function(a) {
        var b = "https://pagead2.googlesyndication.com/pagead/gen_204?id=" + encodeURIComponent(a.id);
        _.tf(a.j, function(c, d) {
            c && (b += "&" + d + "=" + encodeURIComponent(c))
        });
        return b
    }
      , oB = function(a, b) {
        b = b.map(function(c) {
            return c.replace(/,/g, "\\,")
        });
        3 >= b.length ? G(a, "nw_id", b.join()) : (b = b.slice(0, 3),
        b.push("__extra__"),
        G(a, "nw_id", b.join()))
    }
      , sf = function(a, b) {
        G(a, "vrg", De());
        b ? (oB(a, b),
        G(a, "nslots", b.length.toString())) : (oB(a, [].concat(_.yc(_.u(Sf, "keys").call(Sf)))),
        G(a, "nslots", Rf().toString()));
        b = ed().m();
        b.length && G(a, "eid", b.join());
        G(a, "pub_url", document.URL)
    }
      , Cf = function(a, b, c) {
        c = void 0 === c ? _.qf[23] : c;
        if (void 0 === c || 0 > c || 1 < c)
            c = _.qf[23];
        Math.random() < c && (a = new rf(a),
        b(a),
        uf(a, 1))
    }
      , Sf = new v.Map;
    var $h = function(a) {
        R.call(this, a, -1, pB)
    };
    _.O($h, R);
    var ai = function(a) {
        return x(a, 1)
    }
      , ci = function(a, b) {
        return w(a, 1, b)
    }
      , bi = function(a, b) {
        return Nf(a, 2, b)
    }
      , pB = [2];
    var qk = function(a) {
        R.call(this, a)
    };
    _.O(qk, R);
    var Sl = function(a) {
        R.call(this, a)
    };
    _.O(Sl, R);
    Sl.prototype.setTagForChildDirectedTreatment = function(a) {
        return w(this, 5, a)
    }
    ;
    Sl.prototype.clearTagForChildDirectedTreatment = function() {
        return w(this, 5, void 0, !1)
    }
    ;
    Sl.prototype.setTagForUnderAgeOfConsent = function(a) {
        return w(this, 6, a)
    }
    ;
    var rB = function(a) {
        R.call(this, a, -1, qB)
    };
    _.O(rB, R);
    rB.prototype.getTaxonomy = function() {
        return x(this, 1)
    }
    ;
    var sB = function(a, b) {
        return w(a, 1, b)
    };
    rB.prototype.clearTaxonomy = function() {
        return w(this, 1, void 0, !1)
    }
    ;
    var tB = function(a, b) {
        return Nf(a, 2, b)
    }
      , qB = [2];
    var ki = function(a) {
        R.call(this, a)
    };
    _.O(ki, R);
    var vB = function(a) {
        R.call(this, a, -1, uB)
    };
    _.O(vB, R);
    vB.prototype.Da = function() {
        return Yb(this, ki, 18)
    }
    ;
    var Rl = function(a) {
        return Yb(a, Sl, 25)
    };
    vB.prototype.getCorrelator = function() {
        return x(this, 26)
    }
    ;
    vB.prototype.setCorrelator = function(a) {
        return w(this, 26, a)
    }
    ;
    var wB = function(a, b) {
        di(a, 32, rB, b)
    }
      , uB = [2, 3, 14, 32];
    var Uf = function(a) {
        R.call(this, a)
    };
    _.O(Uf, R);
    Uf.prototype.getWidth = function() {
        return x(this, 1)
    }
    ;
    var Yf = function(a, b) {
        return w(a, 1, b)
    };
    Uf.prototype.getHeight = function() {
        return x(this, 2)
    }
    ;
    var Xf = function(a, b) {
        return w(a, 2, b)
    }
      , xi = function() {
        var a = new Uf;
        return w(a, 3, !0)
    };
    var Fi = function(a) {
        R.call(this, a)
    };
    _.O(Fi, R);
    var Wf = function(a) {
        R.call(this, a, -1, xB)
    };
    _.O(Wf, R);
    var xB = [2];
    var zB = function(a) {
        R.call(this, a, -1, yB)
    };
    _.O(zB, R);
    zB.prototype.getAdUnitPath = function() {
        return x(this, 1)
    }
    ;
    zB.prototype.getDomId = function() {
        return x(this, 2)
    }
    ;
    var AB = function(a, b) {
        w(a, 2, b)
    };
    zB.prototype.getClickUrl = function() {
        return x(this, 7)
    }
    ;
    zB.prototype.setClickUrl = function(a) {
        return w(this, 7, a)
    }
    ;
    zB.prototype.Da = function() {
        return Yb(this, ki, 13)
    }
    ;
    var vg = function(a) {
        return Oc(a, 15, 0)
    }
      , yB = [3, 4, 5, 6, 8, 9];
    var kf = function(a) {
        R.call(this, a)
    };
    _.O(kf, R);
    var jf = function(a, b) {
        return ef(a, 1, BB, b)
    }
      , mf = function(a) {
        var b = new kf;
        return ef(b, 2, BB, a)
    }
      , BB = [1, 2];
    var Qe = function(a) {
        R.call(this, a)
    };
    _.O(Qe, R);
    var bf = function(a) {
        R.call(this, a, -1, CB)
    };
    _.O(bf, R);
    var cf = function(a, b) {
        Ii(a, 1, b)
    }
      , ff = function(a) {
        R.call(this, a)
    };
    _.O(ff, R);
    var gf = function(a) {
        var b = x(a, 1);
        null == b && (b = yb([]));
        b.constructor === Gb ? a = b : (b = new Gb(b,Qe),
        w(a, 1, b, !1),
        a = b);
        return a
    }
      , hf = function(a, b) {
        Of(a, 3, b)
    }
      , Ve = [1, 2, 3, 4, 7, 5, 6]
      , CB = [1];
    var EB = function(a) {
        R.call(this, a, -1, DB)
    };
    _.O(EB, R);
    var FB = function(a, b) {
        return Db(a, 1, b, 0)
    }
      , GB = function(a, b) {
        return Of(a, 2, b)
    }
      , HB = function(a, b) {
        return Ii(a, 3, b)
    }
      , DB = [3];
    var IB = function(a) {
        R.call(this, a)
    };
    _.O(IB, R);
    IB.prototype.getTimestamp = function() {
        return Pc(this, 1)
    }
    ;
    var KB = function(a) {
        var b = new IB;
        b = Db(b, 1, Date.now(), 0);
        return ef(b, 2, JB, a)
    }
      , JB = [2, 3];
    var LB = function(a) {
        R.call(this, a)
    };
    _.O(LB, R);
    var MB = function(a) {
        var b = new LB;
        return Of(b, 1, a)
    };
    var NB = function(a) {
        R.call(this, a)
    };
    _.O(NB, R);
    var Je = new function(a, b, c) {
        this.j = b;
        this.m = c
    }
    (function(a) {
        return Hc(LB, a)
    }
    ,function(a) {
        return Hc(NB, a)
    }
    ,4);
    var Ge = (0,
    E.Ra)(function(a) {
        return !!a && "function" === typeof a.openConsoleTab && "function" === typeof a.attachOverlay
    }, "HostModule");
    var Le = function(a) {
        R.call(this, a)
    };
    _.O(Le, R);
    var OB = function(a) {
        this.m = 0;
        this.F = a || 100;
        this.j = []
    };
    p = OB.prototype;
    p.add = function(a) {
        var b = this.j[this.m];
        this.j[this.m] = a;
        this.m = (this.m + 1) % this.F;
        return b
    }
    ;
    p.get = function(a) {
        a = PB(this, a);
        return this.j[a]
    }
    ;
    p.set = function(a, b) {
        a = PB(this, a);
        this.j[a] = b
    }
    ;
    p.isEmpty = function() {
        return 0 == this.j.length
    }
    ;
    p.clear = function() {
        this.m = this.j.length = 0
    }
    ;
    var Me = function(a) {
        for (var b = a.j.length, c = [], d = a.j.length - a.j.length; d < b; d++)
            c.push(a.get(d));
        return c
    }
      , PB = function(a, b) {
        if (b >= a.j.length)
            throw Error("Out of bounds exception");
        return a.j.length < a.F ? b : (a.m + Number(b)) % a.F
    };
    var Ke = function() {
        this.j = new OB(100)
    };
    Ke.prototype.send = function(a) {
        this.j instanceof MessagePort ? this.j.postMessage(a.X()) : this.j.add(a)
    }
    ;
    var QB = Q(["https://www.googletagservices.com/console/host/host.js"])
      , RB = Q(["https://www.googletagservices.com/console/panel/index.html"])
      , SB = Q(["https://www.googletagservices.com/console/overlay/index.html"])
      , TB = {
        Zd: B(QB),
        Zf: B(RB),
        Xf: B(SB)
    };
    var Ie = {
        Wc: document.body,
        rd: TB
    };
    var Oe = new v.Map;
    var UB = function() {
        Bv.apply(this, arguments)
    };
    _.O(UB, Bv);
    UB.N = function() {
        throw Error("Must be overridden");
    }
    ;
    var Ef = function() {
        UB.call(this, _.F(Ff) || _.F(Au) ? 1 : 0, _.t);
        this.m = 0;
        var a = _.F(Ff) || _.F(Au);
        _.t.google_measure_js_timing = a || _.t.google_measure_js_timing
    };
    _.O(Ef, UB);
    Rn(Ef);
    var VB = function() {};
    VB.N = function() {
        throw Error("Must be overridden");
    }
    ;
    var Hg = function() {
        this.j = new v.Map
    };
    _.O(Hg, VB);
    Rn(Hg);
    var WB = function() {};
    WB.N = function() {
        throw Error("Must be overridden");
    }
    ;
    var lf = function() {
        this.m = {};
        this.j = new vB;
        this.F = new v.Map;
        this.j.setCorrelator(js());
        _.qf[36] && w(this.j, 15, !0)
    };
    _.O(lf, WB);
    var XB = function(a) {
        var b = lf.N()
          , c = a.getDomId();
        if (c && !b.m.hasOwnProperty(c)) {
            var d = Hg.N()
              , e = ++Ef.N().m;
            d.j.set(c, e);
            w(a, 20, e);
            b.m[c] = a
        }
    }
      , Zi = function(a, b) {
        var c;
        return null !== (c = a.m[b]) && void 0 !== c ? c : null
    };
    Rn(lf);
    var YB = {
        Wc: document.body,
        rd: TB
    }, yf = function() {
        var a = void 0 === a ? YB : a;
        var b = void 0 === b ? document.URL : b;
        this.F = a;
        this.url = b;
        this.m = !1
    }, xf;
    yf.prototype.initialize = function() {
        var a;
        if (null !== kj(this.url, "googtime") && !this.j)
            try {
                this.j = Ne(function() {}, this.F)
            } catch (b) {
                null === (a = null === console || void 0 === console ? void 0 : console.error) || void 0 === a ? void 0 : a.call(console, b)
            }
    }
    ;
    yf.prototype.sendMessage = function(a, b, c, d) {
        a = HB(GB(FB(new EB, a), df(b)), c.map(function(e) {
            return df(e)
        }));
        d && w(a, 4, d);
        d = KB(a);
        d = MB(d);
        (0,
        E.I)(this.j).send(d)
    }
    ;
    var zf = function(a, b) {
        var c = xf;
        return function() {
            var d = vc.apply(0, arguments), e;
            if (c.j && !c.m) {
                c.m = !0;
                try {
                    c.sendMessage(a, this, d, Error().stack)
                } catch (f) {
                    null === (e = null === console || void 0 === console ? void 0 : console.error) || void 0 === e ? void 0 : e.call(console, f)
                } finally {
                    c.m = !1
                }
            }
            return b.apply(this, d)
        }
    };
    var pf, wf;
    pf = _.qf[38];
    wf = Og(function() {
        var a = _.bd(lt);
        a = new Zm(a);
        var b = _.bd(mt);
        return {
            zb: a,
            Ee: 0 < b ? Rc() < 1 / b : !1,
            Pd: b
        }
    });
    _.ZB = function() {}
    ;
    var Z = function() {
        Rv.apply(this, arguments)
    };
    _.O(Z, Rv);
    Z.prototype.R = function(a) {
        var b, c;
        Gf(this.id, a);
        null === (c = null === (b = window.console) || void 0 === b ? void 0 : b.error) || void 0 === c ? void 0 : c.call(b, a)
    }
    ;
    var $B = function(a, b, c, d, e) {
        var f = null
          , g = _.Af(b, e);
        _.eb(c, d, g) && (f = function() {
            return _.md(c, d, g)
        }
        ,
        _.jm(a, f));
        return f
    };
    var aC = function(a) {
        Z.call(this, 937, _.bd(Nt));
        this.o = W(this);
        this.l = W(this);
        this.B = W(this);
        this.G = Tv(this, a)
    };
    _.O(aC, Z);
    aC.prototype.j = function() {
        var a, b, c = this.G.value;
        if (_.F(Xs) && c) {
            for (var d = {}, e = new v.Set, f = _.y(Wb(c, oq, 1)), g = f.next(); !g.done; g = f.next()) {
                g = g.value;
                d[[Gm(g, 2), Gm(g, 1)].filter(function(k) {
                    return !!k
                }).join()] = {
                    le: tp(g, 3)
                };
                g = _.y($i(g, 4));
                for (var h = g.next(); !h.done; h = g.next())
                    e.add(h.value)
            }
            this.o.ca(d);
            this.l.ca([].concat(_.yc(e)));
            c = null === (b = null === (a = Yb(c, pq, 2)) || void 0 === a ? void 0 : Yb(a, gq, 1)) || void 0 === b ? void 0 : Wb(b, iq, 1);
            this.B.ca((null === c || void 0 === c ? 0 : c.length) ? c : null)
        } else
            Lv(this.o),
            Lv(this.l),
            Lv(this.B)
    }
    ;
    aC.prototype.M = function(a) {
        this.A(a)
    }
    ;
    aC.prototype.A = function() {
        Lv(this.o);
        Lv(this.l);
        Lv(this.B)
    }
    ;
    var aj = new v.Map
      , bC = new v.Map
      , cC = function() {}
      , Oh = function(a, b) {
        var c = bC.get(a);
        c || (b = c = b(),
        aj.set(b, a),
        bC.set(a, b));
        return c
    };
    var dC = function(a) {
        this.push = J(932, function(b) {
            a.push(b)
        })
    };
    _.O(dC, cC);
    var eC = function(a, b, c) {
        c = void 0 === c ? window.pbjs : c;
        this.j = a;
        this.m = b;
        this.pbjs = c
    };
    eC.prototype.push = function(a) {
        var b, c, d;
        if (this.pbjs) {
            var e = a.context
              , f = a.nextFunction;
            a = a.requestBidsConfig;
            if (this.j.size || _.bd(hg)) {
                var g = null !== (d = null !== (b = null === a || void 0 === a ? void 0 : a.adUnits) && void 0 !== b ? b : null === (c = this.pbjs) || void 0 === c ? void 0 : c.adUnits) && void 0 !== d ? d : []
                  , h = {};
                g = _.y(g);
                for (var k = g.next(); !k.done; h = {
                    Db: h.Db
                },
                k = g.next()) {
                    var l = k.value;
                    k = l.code;
                    var m = l.bids;
                    if (k && null !== m && void 0 !== m && m.length && (k = ig(k, this.j),
                    h.Db = k / 1E6,
                    !(0 >= k))) {
                        l = {};
                        m = _.y(null !== m && void 0 !== m ? m : []);
                        for (var n = m.next(); !n.done; l = {
                            za: l.za,
                            nb: l.nb
                        },
                        n = m.next())
                            n = n.value,
                            l.nb = "function" === typeof n.getFloor ? n.getFloor : void 0,
                            l.za = Yk(Zk(new $k, 4), k),
                            n.getFloor = function(q, r) {
                                return function(z) {
                                    4 === Oc(q.za, 1, 0) && Zk(q.za, 1);
                                    var A = {
                                        currency: "USD",
                                        floor: r.Db
                                    };
                                    z = null === q.nb || void 0 === q.nb ? void 0 : q.nb.apply(e, [z]);
                                    return null !== z && void 0 !== z && z.floor ? (null === z || void 0 === z ? 0 : z.currency) && "USD" !== z.currency ? (1 === Oc(q.za, 1, 0) && (Zk(q.za, 6),
                                    Yk(q.za, 1E6 * z.floor),
                                    w(q.za, 3, z.currency)),
                                    z) : (z.floor || 0) > r.Db ? (1 === Oc(q.za, 1, 0) && (Zk(q.za, 5),
                                    Yk(q.za, 1E6 * z.floor)),
                                    z) : A : A
                                }
                            }(l, h),
                            this.m.set(n.getFloor, l.za)
                    }
                }
            }
            null === f || void 0 === f ? void 0 : f.apply(e, [a])
        }
    }
    ;
    var fC = function(a) {
        Z.call(this, 931);
        this.B = W(this);
        this.l = W(this);
        this.o = W(this);
        this.H = window;
        this.G = Y(this, a)
    };
    _.O(fC, Z);
    fC.prototype.j = function() {
        var a, b, c, d, e, f, g, h = _.bd(hg) || this.G.value, k = new v.Map;
        this.B.ca(k || null);
        var l = new v.Map;
        this.l.j(l);
        if (h) {
            null !== (a = (f = this.H).pbjs) && void 0 !== a ? a : f.pbjs = {};
            null !== (b = (g = this.H.pbjs).que) && void 0 !== b ? b : g.que = [];
            for (var m = _.y(null !== (c = this.G.value) && void 0 !== c ? c : []), n = m.next(); !n.done; n = m.next()) {
                n = n.value;
                var q = Wb(n, jq, 1);
                q = 1 === Oc(q[0], 1, 0) ? xp(q[0]) : yp(q[0]);
                n = Pc(n, 2);
                k.set(q, Math.min(null !== (d = k.get(q)) && void 0 !== d ? d : Number.MAX_VALUE, n))
            }
        }
        this.o.j(k);
        if (!_.F(Zs)) {
            var r = new eC(k,l,this.H.pbjs);
            k = null !== (e = we().pbjs_hooks) && void 0 !== e ? e : [];
            k = _.y(k);
            for (l = k.next(); !l.done; l = k.next())
                r.push(l.value);
            k = !!we().pbjs_hooks;
            if (h || k)
                we().pbjs_hooks = Oh(r, function() {
                    return new dC(r)
                });
            h && !k && lg(this.H)
        }
    }
    ;
    var gC = function(a) {
        Z.call(this, 892, _.bd(Pt));
        this.o = W(this);
        this.G = W(this);
        this.B = W(this);
        this.l = W(this);
        this.K = Tv(this, a)
    };
    _.O(gC, Z);
    gC.prototype.j = function() {
        var a = this.K.value;
        if (!a)
            throw Error("config timeout");
        this.o.ca(Yb(a, rq, 3));
        this.B.ca(Yb(a, lq, 1));
        this.G.ca(Yb(a, tq, 2));
        this.l.ca($i(a, 4))
    }
    ;
    gC.prototype.M = function(a) {
        this.A(a)
    }
    ;
    gC.prototype.A = function(a) {
        Mv(this.o, a);
        Mv(this.G, a);
        Mv(this.B, a);
        Lv(this.l)
    }
    ;
    var hC = [{
        name: "Interstitial",
        rc: 1
    }, {
        name: "TopAnchor",
        rc: 2
    }, {
        name: "BottomAnchor",
        rc: 3
    }]
      , iC = function(a) {
        Z.call(this, 789);
        this.l = a;
        this.C = W(this)
    };
    _.O(iC, Z);
    iC.prototype.j = function() {
        var a = this;
        this.C.j(hC.filter(function(b) {
            return (new RegExp("gam" + b.name + "Demo","i")).test(a.l)
        }).map(function(b) {
            var c = b.name;
            b = b.rc;
            var d, e;
            null === (e = null === (d = window.console) || void 0 === d ? void 0 : d.warn) || void 0 === e ? void 0 : e.call(d, "GPT - Demo " + c + " ENABLED");
            var f = new Uq;
            b = w(f, 3, b);
            return w(b, 2, "/22639388115/example/" + c.toLowerCase())
        }))
    }
    ;
    var jC = function() {
        this.id = "goog_" + ur++
    }
      , kC = function() {
        _.Ou.apply(this, arguments);
        this.A = new v.Map
    };
    _.O(kC, _.Ou);
    kC.prototype.F = function() {
        _.Ou.prototype.F.call(this);
        this.A.clear()
    }
    ;
    var mC = function(a, b, c) {
        var d, e;
        if (a.m)
            return function() {}
            ;
        var f = "string" === typeof b ? b : b.id
          , g = null !== (e = null === (d = a.A.get(f)) || void 0 === d ? void 0 : d.add(c)) && void 0 !== e ? e : new v.Set([c]);
        a.A.set(f, g);
        return function() {
            return void lC(a, b, c)
        }
    }
      , Gj = function(a, b, c) {
        c = void 0 === c ? function() {
            return !0
        }
        : c;
        return new v.Promise(function(d) {
            var e = mC(a, b, function(f) {
                c(f) && (e(),
                d(f))
            })
        }
        )
    }
      , lC = function(a, b, c) {
        var d;
        return !(null === (d = a.A.get("string" === typeof b ? b : b.id)) || void 0 === d || !d.delete(c))
    };
    kC.prototype.dispatchEvent = function(a, b, c) {
        var d = this, e, f, g, h, k, l;
        return gb(function(m) {
            if (1 == m.j) {
                e = "string" === typeof a ? a : a.id;
                f = d.A.get(e);
                if (null === f || void 0 === f || !f.size)
                    return m.return();
                g = _.F(ot) && "function" === typeof window.CustomEvent ? new CustomEvent(e,{
                    detail: c,
                    bubbles: !0,
                    cancelable: !0
                }) : function() {
                    var n = document.createEvent("CustomEvent");
                    n.initCustomEvent(e, !0, !0, c);
                    return n
                }();
                h = {};
                k = _.y(f);
                l = k.next()
            }
            if (5 != m.j) {
                if (l.done) {
                    m.j = 0;
                    return
                }
                h.Bb = l.value;
                return hb(m, 0, 5)
            }
            _.Jf(b, function(n) {
                return function() {
                    d.A.has(e) && f.has(n.Bb) && n.Bb(g)
                }
            }(h), !0);
            h = {
                Bb: h.Bb
            };
            l = k.next();
            m.j = 2
        })
    }
    ;
    var nC = new jC
      , oC = new jC
      , pC = new jC
      , qC = new jC
      , rC = new jC
      , sC = new jC
      , tC = new jC
      , Hj = new jC
      , uC = new jC;
    var vC = function(a, b, c) {
        Z.call(this, 906, _.bd(Ot));
        this.H = a;
        this.l = Sv(this);
        this.B = Tv(this, b);
        this.o = Gj(c, sC).then(function(d) {
            return ve((0,
            E.I)(d.detail.O.getAdUnitPath()))
        });
        this.H !== this.H.top && this.l.notify()
    };
    _.O(vC, Z);
    vC.prototype.j = function() {
        var a = this, b;
        return gb(function(c) {
            if (a.H !== a.H.top)
                return c.return();
            if (b = a.B.value)
                return hb(c, wC(a, b), 0);
            a.l.notify();
            c.j = 0
        })
    }
    ;
    var wC = function(a, b) {
        var c, d;
        return gb(function(e) {
            c = Wb(b, uq, 1);
            if (!c.length)
                return a.l.notify(),
                e.return();
            d = c[0];
            return (C = [2, 3],
            _.u(C, "includes")).call(C, Oc(d, 3, 0)) ? (xC(a, Gm(d, 1)),
            e.return()) : hb(e, _.Jf(917, function() {
                return yC(a, b)
            }), 0)
        })
    }
      , yC = function(a, b) {
        var c, d;
        return gb(function(e) {
            if (1 == e.j)
                return hb(e, a.o, 2);
            c = e.m;
            (d = Wb(b, uq, 1).some(function(f) {
                return Gm(f, 1) === c
            })) ? xC(a, c) : (Cf("pp_iris_failure", function(f) {
                G(f, "fnc", c);
                sf(f)
            }, _.bd(Rt)),
            a.l.notify());
            vn(e)
        })
    }
      , xC = function(a, b) {
        var c = Zu(a.H, b, function(d) {
            if (!d) {
                d = zr(c.j);
                for (var e = _.y(document.getElementsByName("googlefcPresent")), f = e.next(); !f.done; f = e.next())
                    d.vd(f.value)
            }
            a.l.notify()
        });
        c.start()
    };
    vC.prototype.M = function(a) {
        this.A(a)
    }
    ;
    vC.prototype.A = function() {
        this.l.notify()
    }
    ;
    var zC = function(a, b) {
        Z.call(this, 901);
        this.l = Y(this, a);
        this.o = Gj(b, sC).then(function(c) {
            return (0,
            E.I)(c.detail.O.getAdUnitPath())
        })
    };
    _.O(zC, Z);
    zC.prototype.j = function() {
        var a = this, b, c, d, e, f;
        return gb(function(g) {
            if (1 == g.j)
                return (c = a.l.value) ? hb(g, a.o, 2) : g.return();
            d = g.m;
            e = ve(d);
            f = null === (b = Wb(c, mq, 4)) || void 0 === b ? void 0 : b.some(function(h) {
                return Gm(h, 2) === e
            });
            Cf("pp_fsm", function(h) {
                G(h, "fsnc", e);
                G(h, "aup", d);
                G(h, "tld", Gm(c, 1));
                G(h, "pdu", Gm(c, 2));
                G(h, "idu", Gm(c, 3));
                G(h, "pnc", Gm(c, 5));
                G(h, "dm", f);
                sf(h)
            }, _.bd(Qt));
            vn(g)
        })
    }
    ;
    var AC = function() {
        Z.call(this, 891);
        this.l = W(this);
        if (_.F(Ct)) {
            var a = new hk;
            this.o = X(this, a);
            var b = _.qf[260];
            b ? b(function(c, d) {
                if (d)
                    Mv(a, d);
                else
                    try {
                        if ("string" === typeof c) {
                            var e = JSON.parse(c || "[]");
                            Array.isArray(e) && a.j(e)
                        }
                    } catch (f) {} finally {
                        a.D || Mv(a, Error("malformed response"))
                    }
            }) : Mv(a, Error("missing input"))
        }
    };
    _.O(AC, Z);
    AC.prototype.j = function() {
        var a = this, b, c;
        return gb(function(d) {
            if (1 == d.j)
                return _.F(Ct) ? (a.l.j(new wq((0,
                E.I)(a.o).value)),
                d.return()) : hb(d, new v.Promise(function(e, f) {
                    var g;
                    null === (g = _.qf[260]) || void 0 === g ? void 0 : g(function(h, k) {
                        k ? f(k) : e(h)
                    })
                }
                ), 2);
            b = d.m;
            try {
                "string" === typeof b && (c = JSON.parse(b || "[]"))
            } catch (e) {}
            if (c && Array.isArray(c))
                a.l.j(new wq(c));
            else
                throw Error("malformed response");
            vn(d)
        })
    }
    ;
    var BC = new v.Map([[1, 5], [2, 2], [3, 3]])
      , Uk = function(a, b, c, d) {
        d = void 0 === d ? document : d;
        Z.call(this, 912);
        this.googletag = b;
        this.T = c;
        this.W = d;
        this.l = X(this, a)
    };
    _.O(Uk, Z);
    Uk.prototype.j = function() {
        for (var a = this, b = {}, c = _.y(this.l.value), d = c.next(); !d.done; b = {
            ab: b.ab
        },
        d = c.next())
            d = d.value,
            BC.has(Oc(d, 3, 0)) && d.getAdUnitPath() && (b.ab = this.googletag.defineOutOfPageSlot((0,
            E.I)(d.getAdUnitPath()), (0,
            E.I)(BC.get(Oc(d, 3, 0)))),
            b.ab && (b.ab.addService(this.googletag.pubads()),
            ls(this.W, function(e) {
                return function() {
                    var f;
                    a.googletag.display(e.ab);
                    D(null !== (f = a.T) && void 0 !== f ? f : lf.N().j, 4) && a.googletag.pubads().refresh([e.ab])
                }
            }(b))))
    }
    ;
    var ch = function() {
        this.ba = new AC;
        this.m = new gC(this.ba.l);
        this.o = this.m.l;
        this.F = new aC(this.m.o);
        this.j = new fC(this.F.B);
        this.R = this.j.o;
        this.U = this.j.l;
        this.M = null;
        this.l = this.F.o;
        this.A = this.F.l;
        this.D = this.j.B;
        this.B = this.j.l;
        _.qf[260] || (Lv(this.o),
        Lv(this.l),
        Lv(this.A),
        Lv(this.D),
        Lv(this.B))
    }
      , CC = function(a, b) {
        var c, d = new rd;
        N(d, a.ba);
        N(d, a.m);
        N(d, a.F);
        N(d, a.j);
        var e = new vC(window,a.m.G,b);
        a.M = e.l.promise;
        N(d, e);
        N(d, new zC(a.m.B,b));
        a = new iC(null !== (c = window.location.hash) && void 0 !== c ? c : "");
        N(d, a);
        N(d, new Uk(a.C,we(),null));
        td(d)
    };
    var DC = Og(function() {
        for (var a = "", b = _.y(Kg()), c = b.next(); !c.done; c = b.next())
            c = c.value,
            15 >= c && (a += "0"),
            a += c.toString(16);
        return a
    });
    var wh = ["auto", "inherit", "100%"]
      , yh = wh.concat(["none"]);
    var Fl = function(a, b, c) {
        if (!a)
            return !0;
        var d = !0;
        uh(a, function(e) {
            return d = vh(e, b, 10, 10)
        }, c);
        return d
    };
    var EC = function(a, b, c, d, e, f) {
        this.F = _.rs(a);
        this.m = _.rs(b);
        this.A = c;
        this.j = _.rs(d);
        this.D = e;
        this.l = f
    };
    EC.prototype.X = function() {
        return JSON.stringify({
            windowCoords_t: this.F.top,
            windowCoords_r: this.F.right,
            windowCoords_b: this.F.bottom,
            windowCoords_l: this.F.left,
            frameCoords_t: this.m.top,
            frameCoords_r: this.m.right,
            frameCoords_b: this.m.bottom,
            frameCoords_l: this.m.left,
            styleZIndex: this.A,
            allowedExpansion_t: this.j.top,
            allowedExpansion_r: this.j.right,
            allowedExpansion_b: this.j.bottom,
            allowedExpansion_l: this.j.left,
            xInView: this.D,
            yInView: this.l
        })
    }
    ;
    var FC = function(a, b) {
        var c = window
          , d = c.screenX || c.screenLeft || 0
          , e = c.screenY || c.screenTop || 0;
        c = new _.qs(e,d + (c.outerWidth || document.documentElement.clientWidth || 0),e + (c.outerHeight || document.documentElement.clientHeight || 0),d);
        var f = Gs(a);
        d = _.pe(_.qe, a);
        var g = new ss(f.x,f.y,d.width,d.height);
        d = ts(g);
        e = String(oe(a, "zIndex"));
        var h = new _.qs(0,Infinity,Infinity,0);
        for (var k = zr(a), l = k.j.body, m = k.j.documentElement, n = Er(k.j); a = Fs(a); )
            if (!(_.Lo && 0 == a.clientWidth || Oo && 0 == a.clientHeight && a == l) && a != l && a != m && "visible" != oe(a, "overflow")) {
                var q = Gs(a)
                  , r = new _.Cg(a.clientLeft,a.clientTop);
                q.x += r.x;
                q.y += r.y;
                h.top = Math.max(h.top, q.y);
                h.right = Math.min(h.right, q.x + a.clientWidth);
                h.bottom = Math.min(h.bottom, q.y + a.clientHeight);
                h.left = Math.max(h.left, q.x)
            }
        a = n.scrollLeft;
        n = n.scrollTop;
        h.left = Math.max(h.left, a);
        h.top = Math.max(h.top, n);
        k = k.j;
        k = _.Dr(k.parentWindow || k.defaultView || window);
        h.right = Math.min(h.right, a + k.width);
        h.bottom = Math.min(h.bottom, n + k.height);
        h = (h = 0 <= h.top && 0 <= h.left && h.bottom > h.top && h.right > h.left ? h : null) ? new ss(h.left,h.top,h.right - h.left,h.bottom - h.top) : null;
        b ? (k = b.boundingClientRect,
        b = new ss(f.x - k.left,f.y - k.top,b.rootBounds.width,b.rootBounds.height)) : b = h;
        k = h ? us(g, h) : null;
        h = f = 0;
        k && !(new _.Fg(k.width,k.height)).isEmpty() && (f = k.width / g.width,
        h = k.height / g.height);
        k = new _.qs(0,0,0,0);
        if (a = b)
            (g = us(g, b)) ? (n = ts(b),
            l = ts(g),
            a = l.right != n.left && n.right != l.left,
            n = l.bottom != n.top && n.bottom != l.top,
            a = (0 != g.width || a) && (0 != g.height || n)) : a = !1;
        a && (k = new _.qs(Math.max(d.top - b.top, 0),Math.max(b.left + b.width - d.right, 0),Math.max(b.top + b.height - d.bottom, 0),Math.max(d.left - b.left, 0)));
        return new EC(c,d,e,k,f,h)
    };
    var GC = function(a) {
        this.A = a;
        this.D = null;
        this.R = this.status = 0;
        this.m = null;
        this.na = "sfchannel" + a
    };
    var HC = function(a) {
        this.j = a
    };
    HC.prototype.X = function() {
        return JSON.stringify(this.j)
    }
    ;
    var IC = function(a, b) {
        this.Hb = a;
        this.Ib = b;
        this.m = this.j = !1
    };
    IC.prototype.X = function() {
        return JSON.stringify({
            expandByOverlay: this.Hb,
            expandByPush: this.Ib,
            readCookie: this.j,
            writeCookie: this.m
        })
    }
    ;
    var JC = function(a, b, c, d, e, f, g, h, k, l) {
        k = void 0 === k ? [] : k;
        this.m = a;
        this.F = b;
        this.A = c;
        this.permissions = d;
        this.metadata = e;
        this.D = f;
        this.xb = g;
        this.hostpageLibraryTokens = k;
        this.j = "";
        this.Qa = h;
        this.hb = void 0 === l ? "" : l
    };
    JC.prototype.X = function() {
        var a = {};
        a = (a.uid = this.m,
        a.hostPeerName = this.F,
        a.initialGeometry = this.A.X(),
        a.permissions = this.permissions.X(),
        a.metadata = this.metadata.X(),
        a.reportCreativeGeometry = this.D,
        a.isDifferentSourceWindow = this.xb,
        a.goog_safeframe_hlt = Nw(this.hostpageLibraryTokens),
        a.encryptionMode = this.Qa,
        a);
        this.j && (a.sentinel = this.j);
        this.hb && (a.pbjsAdConfig = this.hb);
        return JSON.stringify(a)
    }
    ;
    var KC = function(a, b) {
        this.j = a;
        this.F = b
    };
    KC.prototype.X = function(a) {
        this.F && a && (a.sentinel = this.F);
        return JSON.stringify(a)
    }
    ;
    var LC = function(a, b, c) {
        KC.call(this, a, void 0 === c ? "" : c);
        this.version = b
    };
    _.O(LC, KC);
    LC.prototype.X = function() {
        return KC.prototype.X.call(this, {
            uid: this.j,
            version: this.version
        })
    }
    ;
    var MC = function(a, b, c, d) {
        KC.call(this, a, void 0 === d ? "" : d);
        this.A = b;
        this.m = c
    };
    _.O(MC, KC);
    MC.prototype.X = function() {
        return KC.prototype.X.call(this, {
            uid: this.j,
            initialWidth: this.A,
            initialHeight: this.m
        })
    }
    ;
    var NC = function(a, b, c) {
        KC.call(this, a, void 0 === c ? "" : c);
        this.description = b
    };
    _.O(NC, KC);
    NC.prototype.X = function() {
        return KC.prototype.X.call(this, {
            uid: this.j,
            description: this.description
        })
    }
    ;
    var OC = function(a, b, c, d) {
        KC.call(this, a, void 0 === d ? "" : d);
        this.m = b;
        this.push = c
    };
    _.O(OC, KC);
    OC.prototype.X = function() {
        return KC.prototype.X.call(this, {
            uid: this.j,
            expand_t: this.m.top,
            expand_r: this.m.right,
            expand_b: this.m.bottom,
            expand_l: this.m.left,
            push: this.push
        })
    }
    ;
    var PC = function(a, b) {
        KC.call(this, a, void 0 === b ? "" : b)
    };
    _.O(PC, KC);
    PC.prototype.X = function() {
        return KC.prototype.X.call(this, {
            uid: this.j
        })
    }
    ;
    var QC = function(a, b, c) {
        KC.call(this, a, void 0 === c ? "" : c);
        this.A = b
    };
    _.O(QC, KC);
    QC.prototype.X = function() {
        var a = {
            uid: this.j,
            newGeometry: this.A.X()
        };
        return KC.prototype.X.call(this, a)
    }
    ;
    var RC = function(a, b, c, d, e, f) {
        QC.call(this, a, c, void 0 === f ? "" : f);
        this.success = b;
        this.m = d;
        this.push = e
    };
    _.O(RC, QC);
    RC.prototype.X = function() {
        var a = {
            uid: this.j,
            success: this.success,
            newGeometry: this.A.X(),
            expand_t: this.m.top,
            expand_r: this.m.right,
            expand_b: this.m.bottom,
            expand_l: this.m.left,
            push: this.push
        };
        this.F && (a.sentinel = this.F);
        return JSON.stringify(a)
    }
    ;
    var SC = function(a, b, c, d) {
        KC.call(this, a, void 0 === d ? "" : d);
        this.width = b;
        this.height = c
    };
    _.O(SC, KC);
    SC.prototype.X = function() {
        return KC.prototype.X.call(this, {
            uid: this.j,
            width: this.width,
            height: this.height
        })
    }
    ;
    var TC = function() {
        this.j = []
    }
      , VC = function(a, b, c, d, e) {
        a.j.push(new UC(b,c,d,e))
    }
      , WC = function(a, b, c, d) {
        VC(a, b, c, d + "px", void 0)
    }
      , XC = function(a) {
        for (var b = a.j.length - 1; 0 <= b; b--) {
            var c = a.j[b];
            c.m ? (c.F.style.removeProperty(c.j),
            c.F.style.setProperty(c.j, String(c.A), c.D)) : c.F.style[c.j] = c.A
        }
        a.j.length = 0
    }
      , UC = function(a, b, c, d) {
        this.F = a;
        this.j = (this.m = !(void 0 === d || !a.style || !a.style.getPropertyPriority)) ? String(b).replace(/([A-Z])/g, "-$1").toLowerCase() : b;
        this.A = this.m ? a.style.getPropertyValue(this.j) : a.style[this.j];
        this.D = this.m ? a.style.getPropertyPriority(this.j) : void 0;
        this.m ? (a.style.removeProperty(this.j),
        a.style.setProperty(this.j, String(c), d)) : a.style[this.j] = String(c)
    };
    var YC = function() {
        var a = window
          , b = _.Ul(a);
        b && (b = {
            label: "2",
            type: 9,
            value: b
        },
        a = a.google_js_reporting_queue = a.google_js_reporting_queue || [],
        2048 > a.length && a.push(b))
    }
      , ZC = function(a, b, c) {
        var d = window;
        return function() {
            var e = _.Ul()
              , f = 3;
            try {
                var g = b.apply(this, arguments)
            } catch (h) {
                f = 13;
                if (c)
                    return c(a, h),
                    g;
                throw h;
            } finally {
                d.google_measure_js_timing && e && (e = {
                    label: a.toString(),
                    value: e,
                    duration: (_.Ul() || 0) - e,
                    type: f
                },
                f = d.google_js_reporting_queue = d.google_js_reporting_queue || [],
                2048 > f.length && f.push(e))
            }
            return g
        }
    };
    var dD = function(a) {
        GC.call(this, a.uniqueId);
        var b = this;
        this.o = a.Vf;
        this.ba = 1 === a.size;
        this.ia = new IC(a.permissions.Hb && !this.ba,a.permissions.Ib && !this.ba);
        this.l = a.Hc;
        var c;
        this.sa = null != (c = a.hostpageLibraryTokens) ? c : [];
        var d = window.location;
        c = d.protocol;
        d = d.host;
        this.ua = "file:" == c ? "*" : c + "//" + d;
        this.Aa = !!a.xb;
        c = !1 === a.sd ? "https:" : window.location.protocol;
        this.P = a.Yb ? "//" + a.Yb + ".safeframe.googlesyndication.com" : "//tpc.googlesyndication.com";
        this.ta = a.wb ? "*" : Bh(a.Qa) ? "https://secureframe.doubleclick.net" : c + this.P;
        this.Y = !!a.Nd;
        this.fa = $C(a);
        this.F = new TC;
        aD(this, a.Hc, a.size);
        this.D = this.ea = FC(a.Hc);
        this.K = a.Be || "1-0-38";
        var e;
        this.qa = null != (e = a.Hd) ? e : "";
        var f;
        this.Z = null != (f = a.Qa) ? f : null;
        this.Pa = a.hb;
        bD(this, a);
        this.ha = null;
        this.U = ZC(412, function() {
            return cD(b)
        }, a.Ba);
        this.G = -1;
        this.M = 0;
        this.B = null;
        !a.qg || "function" !== typeof IntersectionObserver || Qo || Po || (this.B = new IntersectionObserver(ZC(414, function(h) {
            b.ha = h[h.length - 1];
            cD(b)
        }, a.Ba)));
        this.m = new uA(this.na,this.j.contentWindow,this.ta,!1);
        wA(this.m, "init_done", (0,
        _.Wn)(this.xc, this));
        wA(this.m, "register_done", (0,
        _.Wn)(this.Kc, this));
        wA(this.m, "report_error", (0,
        _.Wn)(this.Mc, this));
        wA(this.m, "expand_request", (0,
        _.Wn)(this.qc, this));
        wA(this.m, "collapse_request", (0,
        _.Wn)(this.jc, this));
        wA(this.m, "creative_geometry_update", (0,
        _.Wn)(this.V, this));
        this.m.connect((0,
        _.Wn)(this.Dc, this));
        var g = ZC(415, function() {
            b.j && (b.j.name = "",
            a.dd && a.dd(),
            _.md(b.j, "load", g))
        }, a.Ba);
        _.eb(this.j, "load", g);
        this.xc = ZC(413, this.xc, a.Ba);
        this.Kc = ZC(417, this.Kc, a.Ba);
        this.Mc = ZC(419, this.Mc, a.Ba);
        this.qc = ZC(411, this.qc, a.Ba);
        this.jc = ZC(409, this.jc, a.Ba);
        this.V = ZC(410, this.V, a.Ba);
        this.Dc = ZC(416, this.Dc, a.Ba)
    };
    _.O(dD, GC);
    var aD = function(a, b, c) {
        a.ba ? (b.style.width = _.Is("100%", !0),
        b.style.height = _.Is("auto", !0)) : (b.style.width = _.Is(c.width, !0),
        b.style.height = _.Is(c.height, !0))
    }
      , bD = function(a, b) {
        var c, d = b.wb ? "" : null != (c = b.content) ? c : "";
        c = {
            shared: {
                sf_ver: a.K,
                ck_on: vv.isEnabled() ? 1 : 0,
                flash_ver: "0"
            }
        };
        var e = a.K + ";" + d.length + ";" + d + (new JC(a.A,a.ua,a.ea,a.ia,new HC(c),a.ba,a.Aa,a.Z,a.sa,a.Pa)).X();
        c = !1 === b.sd;
        if (a.Y && b.size instanceof _.Fg) {
            d = Bh(b.Qa) ? "https://secureframe.doubleclick.net" : _.Fr(_.yr(a.l)).location.protocol + a.P;
            var f = _.Fr(_.yr(a.l))
              , g = b.Xa
              , h = b.size;
            uw || oj(f.document, vw);
            uw++;
            f.google_eas_queue = f.google_eas_queue || [];
            f.google_eas_queue.push({
                a: g,
                b: d,
                c: h.width,
                d: h.height,
                e: "sf-gdn-exp-" + uw,
                f: void 0,
                g: void 0,
                h: void 0,
                i: void 0
            })
        }
        d = _.F(Nj) ? "3rd party ad content" : "";
        var k = b.size;
        g = b.Zb;
        h = b.gb || d;
        d = b.Kb;
        f = void 0 === b.wb;
        var l = k.width;
        k = k.height;
        a.ba && (k = l = 0);
        var m = {};
        e = (m.id = b.Xa,
        m.title = h,
        m.name = e,
        m.scrolling = "no",
        m.marginWidth = "0",
        m.marginHeight = "0",
        m.width = String(l),
        m.height = String(k),
        m["data-is-safeframe"] = "true",
        m);
        if (f) {
            f = _.Fr(_.yr(a.l));
            if (Bh(a.Z))
                c = "https://secureframe.doubleclick.net/container.html?ecs=" + g;
            else {
                g = a.qa;
                h = a.P;
                (l = g) && (l = "?" + l);
                h = (void 0 === h ? "//tpc.googlesyndication.com" : h) + ("/safeframe/" + a.K + "/html/container.html" + l);
                l = f;
                for (k = 0; l != l.parent; )
                    k++,
                    l = l.parent;
                (l = k) && (h += (g ? "&" : "?") + "n=" + l);
                c = (c || Vr(f, !1) ? "https:" : "http:") + h
            }
            g = [];
            a.Y && (h = Wr(f.location.href),
            f = g.push,
            h = [0 < h.length ? "google_debug" + (h ? "=" + h : "") + "&" : "", "xpc=", "sf-gdn-exp-" + a.A, "&p=", encodeURIComponent(_.t.document.location.protocol), "//", encodeURIComponent(_.t.document.location.host)].join(""),
            f.call(g, h));
            g.length && (c += "#" + g.join("&"));
            e.src = c
        }
        null !== a.fa && (e.sandbox = a.fa);
        d && (e.allow = d);
        _.F(Nj) && (e.role = "region",
        e["aria-label"] = "Advertisement",
        e.tabIndex = "0");
        b.wb ? (a.j = b.wb,
        Br(a.j, e)) : (b = {},
        b = (b.frameborder = 0,
        b.allowTransparency = "true",
        b.style = "border:0;vertical-align:bottom;",
        b.src = "about:blank",
        b),
        e && wa(b, e),
        d = _.Lj("IFRAME"),
        Br(d, b),
        a.j = d);
        a.ba && (a.j.style.minWidth = "100%");
        a.l.appendChild(a.j)
    };
    p = dD.prototype;
    p.Dc = function() {
        this.B && this.j ? this.B.observe(this.j) : (_.eb(window, "resize", this.U),
        _.eb(window, "scroll", this.U))
    }
    ;
    p.xc = function(a) {
        try {
            if (0 != this.status)
                throw Error("Container already initialized");
            if ("string" !== typeof a)
                throw Error("Could not parse serialized message");
            var b = JSON.parse(a);
            if (!_.ia(b) || !Ah(b.uid) || "string" !== typeof b.version)
                throw Error("Cannot parse JSON message");
            var c = new LC(b.uid,b.version,b.sentinel);
            if (this.A !== c.j || this.K !== c.version)
                throw Error("Wrong source container");
            this.status = 1
        } catch (e) {
            var d;
            null == (d = this.o) || d.error("Invalid INITIALIZE_DONE message. Reason: " + e.message)
        }
    }
    ;
    p.Kc = function(a) {
        try {
            if (1 != this.status)
                throw Error("Container not initialized");
            if ("string" !== typeof a)
                throw Error("Could not parse serialized message");
            var b = JSON.parse(a);
            if (!_.ia(b) || !Ah(b.uid) || "number" !== typeof b.initialWidth || "number" !== typeof b.initialHeight)
                throw Error("Cannot parse JSON message");
            if (this.A !== (new MC(b.uid,b.initialWidth,b.initialHeight,b.sentinel)).j)
                throw Error("Wrong source container");
            this.status = 2
        } catch (d) {
            var c;
            null == (c = this.o) || c.error("Invalid REGISTER_DONE message. Reason: " + d.message)
        }
    }
    ;
    p.Mc = function(a) {
        try {
            if ("string" !== typeof a)
                throw Error("Could not parse serialized message");
            var b = JSON.parse(a);
            if (!_.ia(b) || !Ah(b.uid) || "string" !== typeof b.description)
                throw Error("Cannot parse JSON message");
            var c = new NC(b.uid,b.description,b.sentinel);
            if (this.A !== c.j)
                throw Error("Wrong source container");
            var d;
            null == (d = this.o) || d.info("Ext reported an error. Description: " + c.description)
        } catch (f) {
            var e;
            null == (e = this.o) || e.error("Invalid REPORT_ERROR message. Reason: " + f.message)
        }
    }
    ;
    p.qc = function(a) {
        try {
            if (2 != this.status)
                throw Error("Container is not registered");
            if (0 != this.R)
                throw Error("Container is not collapsed");
            if ("string" !== typeof a)
                throw Error("Could not parse serialized message");
            var b = JSON.parse(a);
            if (!_.ia(b) || !Ah(b.uid) || "number" !== typeof b.expand_t || "number" !== typeof b.expand_r || "number" !== typeof b.expand_b || "number" !== typeof b.expand_l || "boolean" !== typeof b.push)
                throw Error("Cannot parse JSON message");
            var c = new OC(b.uid,new _.qs(b.expand_t,b.expand_r,b.expand_b,b.expand_l),b.push,b.sentinel);
            if (this.A !== c.j)
                throw Error("Wrong source container");
            if (!(0 <= c.m.top && 0 <= c.m.left && 0 <= c.m.bottom && 0 <= c.m.right))
                throw Error("Invalid expansion amounts");
            var d;
            if (d = c.push && this.ia.Ib || !c.push && this.ia.Hb) {
                var e = c.m
                  , f = c.push
                  , g = this.D = FC(this.j);
                if (e.top <= g.j.top && e.right <= g.j.right && e.bottom <= g.j.bottom && e.left <= g.j.left) {
                    if (!f)
                        for (var h = this.j.parentNode; h && h.style; h = h.parentNode)
                            VC(this.F, h, "overflowX", "visible", "important"),
                            VC(this.F, h, "overflowY", "visible", "important");
                    var k = ts(new ss(0,0,this.D.m.getWidth(),this.D.m.getHeight()));
                    _.ia(e) ? (k.top -= e.top,
                    k.right += e.right,
                    k.bottom += e.bottom,
                    k.left -= e.left) : (k.top -= e,
                    k.right += Number(void 0),
                    k.bottom += Number(void 0),
                    k.left -= Number(void 0));
                    VC(this.F, this.l, "position", "relative");
                    VC(this.F, this.j, "position", "absolute");
                    f ? (WC(this.F, this.l, "width", k.getWidth()),
                    WC(this.F, this.l, "height", k.getHeight())) : VC(this.F, this.j, "zIndex", "10000");
                    WC(this.F, this.j, "width", k.getWidth());
                    WC(this.F, this.j, "height", k.getHeight());
                    WC(this.F, this.j, "left", k.left);
                    WC(this.F, this.j, "top", k.top);
                    this.R = 2;
                    this.D = FC(this.j);
                    d = !0
                } else
                    d = !1
            }
            a = d;
            this.m.send("expand_response", (new RC(this.A,a,this.D,c.m,c.push)).X());
            if (!a)
                throw Error("Viewport or document body not large enough to expand into.");
        } catch (m) {
            var l;
            null == (l = this.o) || l.error("Invalid EXPAND_REQUEST message. Reason: " + m.message)
        }
    }
    ;
    p.jc = function(a) {
        try {
            if (2 != this.status)
                throw Error("Container is not registered");
            if (2 != this.R)
                throw Error("Container is not expanded");
            if ("string" !== typeof a)
                throw Error("Could not parse serialized message");
            var b = JSON.parse(a);
            if (!_.ia(b) || !Ah(b.uid))
                throw Error("Cannot parse JSON message");
            if (this.A !== (new PC(b.uid,b.sentinel)).j)
                throw Error("Wrong source container");
            XC(this.F);
            this.R = 0;
            this.j && (this.D = FC(this.j));
            this.m.send("collapse_response", (new QC(this.A,this.D)).X())
        } catch (d) {
            var c;
            null == (c = this.o) || c.error("Invalid COLLAPSE_REQUEST message. Reason: " + d.message)
        }
    }
    ;
    var cD = function(a) {
        if (1 == a.status || 2 == a.status)
            switch (a.M) {
            case 0:
                eD(a);
                a.G = window.setTimeout((0,
                _.Wn)(a.$, a), 1E3);
                a.M = 1;
                break;
            case 1:
                a.M = 2;
                break;
            case 2:
                a.M = 2
            }
    };
    dD.prototype.V = function(a) {
        try {
            if ("string" !== typeof a)
                throw Error("Could not parse serialized message");
            var b = JSON.parse(a);
            if (!_.ia(b) || !Ah(b.uid) || "number" !== typeof b.width || "number" !== typeof b.height || b.sentinel && "string" !== typeof b.sentinel)
                throw Error("Cannot parse JSON message");
            var c = new SC(b.uid,b.width,b.height,b.sentinel);
            if (this.A !== c.j)
                throw Error("Wrong source container");
            var d = String(c.height);
            if (this.ba)
                d !== this.j.height && (this.j.height = d,
                cD(this));
            else {
                var e;
                null == (e = this.o) || e.error("Got CreativeGeometryUpdate message in non-fluidcontainer. The container is not resized.")
            }
        } catch (g) {
            var f;
            null == (f = this.o) || f.error("Invalid CREATIVE_GEOMETRY_UPDATE message. Reason: " + g.message)
        }
    }
    ;
    dD.prototype.$ = function() {
        if (1 == this.status || 2 == this.status)
            switch (this.M) {
            case 1:
                this.M = 0;
                break;
            case 2:
                eD(this),
                this.G = window.setTimeout((0,
                _.Wn)(this.$, this), 1E3),
                this.M = 1
            }
    }
    ;
    var eD = function(a) {
        a.D = FC(a.j, a.ha);
        a.ha = null;
        a.m.send("geometry_update", (new QC(a.A,a.D)).X())
    }
      , $C = function(a) {
        var b = null;
        a.nd && (b = a.nd);
        return null == b ? null : b.join(" ")
    }
      , fD = ["allow-modals", "allow-orientation-lock", "allow-presentation", "allow-pointer-lock"]
      , gD = ["allow-top-navigation"]
      , hD = ["allow-same-origin"]
      , iD = Zr([].concat(_.yc(fD), _.yc(gD)));
    Zr([].concat(_.yc(fD), _.yc(hD)));
    Zr([].concat(_.yc(fD), _.yc(gD), _.yc(hD)));
    var jD = Q(["https://tpc.googlesyndication.com/safeframe/", "/html/container.html"])
      , kD = Q(["https://secureframe.doubleclick.net/container.html"])
      , lD = {
        ge: function(a) {
            if ("string" !== typeof a.version)
                throw new TypeError("version is not a string");
            if (!/^[0-9]+-[0-9]+-[0-9]+$/.test(a.version))
                throw new RangeError("Invalid version: " + a.version);
            if ("string" !== typeof a.ac)
                throw new TypeError("subdomain is not a string");
            if (!/^[a-z0-9]([a-z0-9-]{0,61}[a-z0-9])?$/.test(a.ac))
                throw new RangeError("Invalid subdomain: " + a.ac);
            return Oa("https://" + a.ac + ".safeframe.googlesyndication.com/safeframe/" + a.version + "/html/container.html")
        },
        lg: function(a) {
            return B(jD, a)
        },
        kg: B(kD)
    };
    var Ch = function(a, b) {
        try {
            ob(Hm(a, b))
        } catch (c) {}
    };
    var mD = function(a) {
        R.call(this, a)
    };
    _.O(mD, R);
    var nD = function() {
        return [4, Cp, 2, Cp, 1, Cp, 3, Cp, 5, Fp]
    };
    var oD = function() {};
    var pD = [.05, .1, .2, .5]
      , qD = [0, .5, 1]
      , rD = function(a) {
        a = wd(a);
        if (!a)
            return -1;
        try {
            var b = Bw(a.document);
            var c = new _.Fg(b.clientWidth,b.clientHeight)
        } catch (d) {
            c = new _.Fg(-12245933,-12245933)
        }
        return -12245933 == c.width || -12245933 == c.height ? -1 : c.width * c.height
    }
      , sD = function(a, b) {
        return 0 > a ? [] : _.de(pD, function(c) {
            return Math.min(a / b * c, 1)
        })
    }
      , vD = function(a) {
        this.j = a.H;
        this.F = a.Va;
        this.M = a.Oa;
        this.A = null;
        this.D = a.Ba;
        this.m = tD(this);
        this.B = a.Fe || !1;
        this.o = a.mg || !1;
        this.l = null;
        this.o && uD(this)
    };
    vD.prototype.getSlotId = function() {
        return this.A
    }
    ;
    var xD = function(a, b) {
        if (a.m) {
            if (null != a.A) {
                try {
                    wD(a, Math.round(performance.now()), 0, 0, 0, !1)
                } catch (g) {
                    a.D && a.D(g)
                }
                a.m && a.m.unobserve(a.F);
                a.l = null
            }
            a.A = b;
            a.m.observe(a.F);
            if (a.o) {
                b = Math.round(performance.now());
                var c = a.F.getBoundingClientRect()
                  , d = c.width * c.height;
                a: {
                    var e = 0;
                    if (!FA(a.j.document)) {
                        e = wd(a.j);
                        if (!e) {
                            c = -1;
                            break a
                        }
                        var f = Bw(e.document);
                        e = Math.min(f.clientWidth, c.left + c.width) - Math.max(0, c.left);
                        c = Math.min(f.clientHeight, c.top + c.height) - Math.max(0, c.top);
                        e = 0 < e && 0 < c ? e * c : 0
                    }
                    c = e
                }
                a.l = new oD({
                    time: b,
                    Uf: 0 < d ? c / d > (242500 < d ? .3 : .5) : !1,
                    Tf: 1 == CA(a.j.document)
                })
            }
        }
    }
      , tD = function(a) {
        var b = a.F.offsetWidth * a.F.offsetHeight
          , c = rD(a.j);
        b = [].concat(_.yc(qD), _.yc(sD(c, b)));
        ka(b);
        return _.t.IntersectionObserver ? new _.t.IntersectionObserver(function(d) {
            return yD(a, d)
        }
        ,{
            threshold: b
        }) : new Xj(function(d) {
            return yD(a, d)
        }
        ,{
            threshold: b
        })
    }
      , yD = function(a, b) {
        try {
            var c = rD(a.j);
            _.bo(b, function(d) {
                var e = Math.round(d.time)
                  , f = d.boundingClientRect.width * d.boundingClientRect.height
                  , g = d.intersectionRect.width * d.intersectionRect.height;
                d = d.isIntersecting;
                a.B && wD(a, e, f, g, c, d)
            })
        } catch (d) {
            a.D && a.D(d)
        }
    }
      , wD = function(a, b, c, d, e, f) {
        if (null == a.A)
            throw Error("Not Attached.");
        var g = new mD;
        c = w(g, 1, c);
        d = w(c, 2, d);
        e = w(d, 3, e);
        b = w(e, 4, b);
        f = w(b, 5, f);
        f = Bb(Ap(f, nD), 4);
        Cv(a.M, "1", 10, f, void 0, a.A)
    }
      , uD = function(a) {
        var b = EA(a.j.document);
        b && _.eb(a.j.document, b, function() {
            a.l && CA(a.j.document)
        })
    };
    var zD = function(a, b) {
        this.j = a;
        this.m = b
    }
      , AD = function(a) {
        if (a.j.frames.google_ads_top_frame)
            return !0;
        var b = cs("google_ads_top_frame", a.j);
        b = b && b.contentWindow;
        if (!b)
            return !1;
        b.addEventListener("message", function(c) {
            var d = c.ports;
            "__goog_top_url_req" === c.data.msgType && d.length && d[0].postMessage({
                msgType: "__goog_top_url_resp",
                topUrl: a.m
            })
        }, !1);
        return !0
    };
    var BD = {
        issuerOrigin: "https://attestation.android.com",
        issuancePath: "/att/i",
        redemptionPath: "/att/r"
    }
      , CD = {
        issuerOrigin: "https://pagead2.googlesyndication.com",
        issuancePath: "/dtt/i",
        redemptionPath: "/dtt/r",
        getStatePath: "/dtt/s"
    };
    iv(Ju);
    var ED = function(a, b, c) {
        _.Ou.call(this);
        var d = this;
        this.A = a;
        this.j = [];
        b && DD() && this.j.push(BD);
        c && this.j.push(CD);
        if (document.hasTrustToken && !_.F(Fu)) {
            var e = new v.Map;
            this.j.forEach(function(f) {
                e.set(f.issuerOrigin, {
                    issuerOrigin: f.issuerOrigin,
                    state: d.A ? 1 : 12,
                    hasRedemptionRecord: !1
                })
            });
            window.goog_tt_state_map = window.goog_tt_state_map && window.goog_tt_state_map instanceof v.Map ? new v.Map([].concat(_.yc(e), _.yc(window.goog_tt_state_map))) : e;
            window.goog_tt_promise_map && window.goog_tt_promise_map instanceof v.Map || (window.goog_tt_promise_map = new v.Map)
        }
    };
    _.O(ED, _.Ou);
    var DD = function() {
        var a = void 0 === a ? window : a;
        a = a.navigator.userAgent;
        var b = /Chrome/.test(a);
        return /Android/.test(a) && b
    }
      , FD = function() {
        var a = window;
        a = void 0 === a ? window : a;
        return !a.PeriodicSyncManager
    }
      , GD = function(a, b) {
        var c = window.goog_tt_state_map, d, e = [];
        a && (d = null == c ? void 0 : c.get(BD.issuerOrigin)) && e.push(d);
        b && (d = null == c ? void 0 : c.get(CD.issuerOrigin)) && e.push(d);
        return e
    }
      , HD = function(a) {
        return a.some(function(b) {
            return b.hasRedemptionRecord
        })
    }
      , ID = function() {
        var a = window
          , b = _.qf[150];
        return _.qf[221] || ".google.ch" === b || "function" === typeof a.__tcfapi
    }
      , JD = function(a, b) {
        a = a.filter(function(c) {
            return c.hasRedemptionRecord
        }).map(function(c) {
            return c.issuerOrigin
        });
        if (0 == a.length)
            return null;
        a = {
            type: "send-redemption-record",
            issuers: a,
            refreshPolicy: "none",
            signRequestData: _.F(Ku) ? "omit" : "include",
            includeTimestampHeader: !0,
            additionalSignedHeaders: ["sec-time", "Sec-Redemption-Record"]
        };
        !_.F(Ku) && b && 0 < _.u(Object, "keys").call(Object, b).length && (a.additionalSigningData = fp(JSON.stringify(b), 3));
        return a
    }
      , KD = function(a, b) {
        var c = _.qf[252];
        if (a.setTrustToken && b && HD(b))
            try {
                var d = JD(b, c);
                d && a.setTrustToken(d)
            } catch (e) {}
    }
      , LD = function(a, b, c) {
        var d, e = null == (d = window.goog_tt_state_map) ? void 0 : d.get(a);
        e && (e.state = b,
        void 0 != c && (e.hasRedemptionRecord = c))
    }
      , MD = function() {
        var a = BD.issuerOrigin + BD.redemptionPath
          , b = {
            keepalive: !0,
            trustToken: {
                type: "token-redemption",
                issuer: BD.issuerOrigin,
                refreshPolicy: "none"
            }
        };
        LD(BD.issuerOrigin, 2);
        return window.fetch(a, b).then(function(c) {
            if (!c.ok)
                throw Error(c.status + ": Network response was not ok!");
            LD(BD.issuerOrigin, 6, !0)
        }).catch(function(c) {
            c && "NoModificationAllowedError" === c.name ? LD(BD.issuerOrigin, 6, !0) : LD(BD.issuerOrigin, 5)
        })
    }
      , ND = function() {
        var a = BD.issuerOrigin + BD.issuancePath;
        LD(BD.issuerOrigin, 8);
        return window.fetch(a, {
            keepalive: !0,
            trustToken: {
                type: "token-request"
            }
        }).then(function(b) {
            if (!b.ok)
                throw Error(b.status + ": Network response was not ok!");
            LD(BD.issuerOrigin, 10);
            return MD()
        }).catch(function(b) {
            if (b && "NoModificationAllowedError" === b.name)
                return LD(BD.issuerOrigin, 10),
                MD();
            LD(BD.issuerOrigin, 9)
        })
    }
      , OD = function() {
        LD(BD.issuerOrigin, 13);
        return document.hasTrustToken(BD.issuerOrigin).then(function(a) {
            return a ? MD() : ND()
        })
    }
      , PD = function() {
        LD(CD.issuerOrigin, 13);
        if (v.Promise) {
            var a = document.hasTrustToken(CD.issuerOrigin).then(function(e) {
                return e
            }).catch(function(e) {
                return v.Promise.reject({
                    state: 19,
                    error: e
                })
            })
              , b = CD.issuerOrigin + CD.redemptionPath
              , c = {
                keepalive: !0,
                trustToken: {
                    type: "token-redemption",
                    refreshPolicy: "none"
                }
            };
            LD(CD.issuerOrigin, 16);
            a = a.then(function(e) {
                return window.fetch(b, c).then(function(f) {
                    if (!f.ok)
                        throw Error(f.status + ": Network response was not ok!");
                    LD(CD.issuerOrigin, 18, !0)
                }).catch(function(f) {
                    if (f && "NoModificationAllowedError" === f.name)
                        LD(CD.issuerOrigin, 18, !0);
                    else {
                        if (e)
                            return v.Promise.reject({
                                state: 17,
                                error: f
                            });
                        LD(CD.issuerOrigin, 17)
                    }
                })
            }).then(function() {
                return document.hasTrustToken(CD.issuerOrigin).then(function(e) {
                    return e
                }).catch(function(e) {
                    return v.Promise.reject({
                        state: 19,
                        error: e
                    })
                })
            }).then(function(e) {
                var f = CD.issuerOrigin + CD.getStatePath;
                LD(CD.issuerOrigin, 20);
                return window.fetch(f + "?ht=" + e, {
                    trustToken: {
                        type: "send-redemption-record",
                        issuers: [CD.issuerOrigin]
                    }
                }).then(function(g) {
                    if (!g.ok)
                        throw Error(g.status + ": Network response was not ok!");
                    LD(CD.issuerOrigin, 22);
                    return g.text().then(function(h) {
                        return JSON.parse(h)
                    })
                }).catch(function(g) {
                    return v.Promise.reject({
                        state: 21,
                        error: g
                    })
                })
            });
            var d = dd(window);
            return a.then(function(e) {
                var f = CD.issuerOrigin + CD.issuancePath;
                return e && e.srqt && e.cs ? (LD(CD.issuerOrigin, 23),
                window.fetch(f + "?cs=" + e.cs + "&correlator=" + d, {
                    keepalive: !0,
                    trustToken: {
                        type: "token-request"
                    }
                }).then(function(g) {
                    if (!g.ok)
                        throw Error(g.status + ": Network response was not ok!");
                    LD(CD.issuerOrigin, 25);
                    return e
                }).catch(function(g) {
                    return v.Promise.reject({
                        state: 24,
                        error: g
                    })
                })) : e
            }).then(function(e) {
                if (e && e.srdt && e.cs)
                    return LD(CD.issuerOrigin, 26),
                    window.fetch(b + "?cs=" + e.cs + "&correlator=" + d, {
                        keepalive: !0,
                        trustToken: {
                            type: "token-redemption",
                            refreshPolicy: "refresh"
                        }
                    }).then(function(f) {
                        if (!f.ok)
                            throw Error(f.status + ": Network response was not ok!");
                        LD(CD.issuerOrigin, 28, !0)
                    }).catch(function(f) {
                        return v.Promise.reject({
                            state: 27,
                            error: f
                        })
                    })
            }).then(function() {
                LD(CD.issuerOrigin, 29)
            }).catch(function(e) {
                if (e instanceof Object && e.hasOwnProperty("state") && e.hasOwnProperty("error"))
                    if ("number" === typeof e.state && e.error instanceof Error) {
                        LD(CD.issuerOrigin, e.state);
                        var f = _.bd(Hu);
                        Math.random() <= f && Uc({
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
      , QD = function(a) {
        if (document.hasTrustToken && !_.F(Fu) && a.A) {
            var b = window.goog_tt_promise_map;
            if (b && b instanceof v.Map) {
                var c = [];
                if (a.j.some(function(e) {
                    return e.issuerOrigin === BD.issuerOrigin
                })) {
                    var d = b.get(BD.issuerOrigin);
                    d || (d = OD(),
                    b.set(BD.issuerOrigin, d));
                    c.push(d)
                }
                a.j.some(function(e) {
                    return e.issuerOrigin === CD.issuerOrigin
                }) && (a = b.get(CD.issuerOrigin),
                a || (a = PD(),
                b.set(CD.issuerOrigin, a)),
                c.push(a));
                if (0 < c.length && v.Promise && v.Promise.all)
                    return v.Promise.all(c)
            }
        }
    };
    var RD = 0, SD = function() {}, YD, bE, Qk, Vl, cE, XD, WD, VD, dE;
    SD.N = function() {
        throw Error("Must be overridden");
    }
    ;
    var TD = function() {
        this.m = new v.Map;
        this.o = 0;
        this.B = dd(_.t);
        this.A = this.tb = null;
        this.D = 0;
        this.l = _.Fo(function() {
            return void ah("gpt-first-ad-request")
        });
        this.j = new v.Map;
        this.F = new v.Map
    };
    _.O(TD, SD);
    YD = function(a, b) {
        a.j.get(b) || (a.j.set(b, {
            Za: !0,
            Gc: "",
            bb: "",
            ld: 0,
            Zc: 0,
            Ec: [],
            Fc: [],
            Wa: !1
        }),
        _.jm(b, function() {
            UD(a, b);
            a.j.delete(b);
            VD(a, b)
        }),
        mC(b, oC, function(c) {
            c = c.detail;
            var d = (0,
            E.I)(a.j.get(b));
            d.Gc = x(c, 33) || "";
            d.Wa = !0;
            WD(a, b, function() {
                d.Gc = ""
            });
            XD(a, b, function() {
                d.Wa = !1
            })
        }))
    }
    ;
    _.ZD = function(a, b) {
        var c, d;
        return null !== (d = null === (c = a.j.get(b)) || void 0 === c ? void 0 : c.Za) && void 0 !== d ? d : !1
    }
    ;
    _.$D = function(a, b) {
        a.j.get(b) && (a.j.get(b).Za = !1)
    }
    ;
    _.aE = function(a, b) {
        a.j.get(b) && (a.j.get(b).Za = !0)
    }
    ;
    bE = function(a, b) {
        if (!b.length)
            return [];
        var c = ve(b[0].getAdUnitPath());
        (0,
        E.qb)(b.every(function(g) {
            return ve(g.getAdUnitPath()) === c
        }));
        var d = [];
        a = _.y(a.j);
        for (var e = a.next(); !e.done; e = a.next()) {
            var f = _.y(e.value);
            e = f.next().value;
            (f = f.next().value.Gc) && ve(e.getAdUnitPath()) === c && !_.u(b, "includes").call(b, e) && d.push(f)
        }
        return d
    }
    ;
    Qk = function(a, b) {
        var c, d;
        return null !== (d = null === (c = a.j.get(b)) || void 0 === c ? void 0 : c.bb) && void 0 !== d ? d : ""
    }
    ;
    Vl = function(a, b) {
        return (a = a.j.get(b)) && a.ld - 1 || 0
    }
    ;
    cE = function(a, b, c) {
        (0,
        E.qb)(!a.m.has(b));
        a.m.set(b, c)
    }
    ;
    XD = function(a, b, c) {
        (a = a.j.get(b)) && a.Ec.push(c)
    }
    ;
    WD = function(a, b, c) {
        (a = a.j.get(b)) && a.Fc.push(c)
    }
    ;
    VD = function(a, b) {
        if (a = a.j.get(b))
            for (b = a.Fc.slice(),
            a.Fc.length = 0,
            a = _.y(b),
            b = a.next(); !b.done; b = a.next())
                b = b.value,
                b()
    }
    ;
    dE = function(a, b) {
        if (a = a.j.get(b))
            for (b = a.Ec.slice(),
            a.Ec.length = 0,
            a = _.y(b),
            b = a.next(); !b.done; b = a.next())
                b = b.value,
                b()
    }
    ;
    TD.prototype.Wa = function(a) {
        var b, c;
        return null !== (c = null === (b = this.j.get(a)) || void 0 === b ? void 0 : b.Wa) && void 0 !== c ? c : !1
    }
    ;
    var UD = function(a, b) {
        var c;
        if (a = a.j.get(b))
            null === (c = a.Ic) || void 0 === c ? void 0 : c.va(),
            delete a.Ic
    }
      , eE = function(a, b) {
        var c = a.F.get(b);
        c || (c = window === window.top ? (++RD).toString(36) : tr(),
        a.F.set(b, c),
        _.jm(b, function() {
            a.F.delete(b)
        }));
        return c
    }
      , gE = function(a, b, c) {
        (0,
        E.I)(a.j.get(b)).Qc = c;
        XD(a, b, function() {
            return void fE(a, b)
        })
    }
      , fE = function(a, b) {
        var c;
        null === (c = a.j.get(b)) || void 0 === c ? !0 : delete c.Qc
    };
    Rn(TD);
    var hE = function() {
        var a = {};
        return a.adsense_channel_ids = "channel",
        a.adsense_ad_types = "ad_type",
        a.adsense_ad_format = "format",
        a.adsense_background_color = "color_bg",
        a.adsense_border_color = "color_border",
        a.adsense_link_color = "color_link",
        a.adsense_text_color = "color_text",
        a.adsense_url_color = "color_url",
        a.page_url = "url",
        a.adsense_allow_expandable_ads = "ea",
        a.adsense_encoding = "oe",
        a.adsense_family_safe = "adsafe",
        a.adsense_flash_version = "flash",
        a.adsense_font_face = "f",
        a.adsense_hints = "hints",
        a.adsense_keyword_type = "kw_type",
        a.adsense_keywords = "kw",
        a.adsense_test_mode = "adtest",
        a.alternate_ad_iframe_color = "alt_color",
        a.alternate_ad_url = "alternate_ad_url",
        a.demographic_age = "cust_age",
        a.demographic_gender = "cust_gender",
        a.document_language = "hl",
        a
    };
    var Rk = function(a, b, c, d, e, f, g, h) {
        Z.call(this, 718);
        this.G = Y(this, b);
        this.B = Y(this, c);
        this.l = Y(this, d);
        Uv(this, e);
        this.K = X(this, f);
        this.o = X(this, g);
        this.P = X(this, h);
        this.V = Gj(a, uC)
    };
    _.O(Rk, Z);
    Rk.prototype.j = function() {
        var a = this, b, c, d;
        return gb(function(e) {
            if (1 == e.j) {
                if (!iE(a))
                    return e.return();
                b = a.K.value;
                c = a.o.value;
                _.Cs(c, "visibility", "hidden");
                _.Cs(c, "min-width", "100%");
                _.Cs(b, "min-width", "100%");
                return hb(e, a.V, 2)
            }
            if (a.m)
                return e.return();
            d = b.contentDocument;
            if (!d)
                return Cf("gpt_amp_fluid_no_iframedoc", function(f) {
                    sf(f)
                }),
                e.return();
            jE(b, c, (0,
            E.I)(d.body).offsetWidth, d.body.offsetHeight);
            vn(e)
        })
    }
    ;
    var iE = function(a) {
        var b = !a.P.value;
        return null == a.l.value || a.B.value || "height" !== a.G.value || b ? !1 : !0
    }
      , jE = function(a, b, c, d) {
        a.setAttribute("height", String(d));
        a.setAttribute("width", String(c));
        _.Cs(b, "visibility", "visible")
    };
    var Mk = function(a, b, c, d, e) {
        Z.call(this, 685);
        var f = this;
        this.slotId = a;
        this.H = b;
        this.l = Y(this, c);
        this.o = X(this, d);
        this.B = X(this, e);
        Gj(this.slotId, Hj, function(g) {
            return ys(f.H, g.detail)
        })
    };
    _.O(Mk, Z);
    Mk.prototype.j = function() {
        var a, b;
        if (!_.F(Jt) && !this.B.value) {
            var c = null !== (b = null === (a = this.l.value) || void 0 === a ? void 0 : x(a, 1)) && void 0 !== b ? b : ""
              , d = zs(this.H, this.o.value, c);
            _.jm(this, function() {
                try {
                    d()
                } catch (e) {
                    Gf(493, e)
                }
            })
        }
    }
    ;
    var kE = /(<head(\s+[^>]*)?>)/i
      , nk = function(a, b, c, d, e) {
        Z.call(this, 665);
        this.ma = W(this);
        this.l = X(this, a);
        this.o = Y(this, b);
        this.B = Y(this, c);
        this.G = Y(this, d);
        this.K = Y(this, e)
    };
    _.O(nk, Z);
    nk.prototype.j = function() {
        if (0 !== this.l.value.kind || !Jh(this.o.value) || Ov(this.B))
            this.ma.j(this.l.value);
        else {
            var a = this.l.value.ya || ""
              , b = !!this.G.value
              , c = !!this.K.value;
            c || Ba() || (a = a.replace(kE, "$1<meta http-equiv=Content-Security-Policy content=\"script-src https://cdn.ampproject.org/;object-src 'none';child-src blob:;frame-src 'none'\">"));
            b && !c && (a = a.replace(kE, '$1<meta name="referrer" content="origin">'));
            this.ma.j({
                kind: 0,
                ya: a
            })
        }
    }
    ;
    var Ph = function(a) {
        this.push = J(76, a.push.bind(a))
    };
    _.O(Ph, cC);
    Pe(Ph, 2);
    var lE = ["Debug", "Info", "Warning", "Error", "Fatal"]
      , mE = function(a, b, c) {
        this.j = a;
        this.message = b;
        this.m = c;
        this.timestamp = new Date
    };
    p = mE.prototype;
    p.getSlot = function() {
        return this.m
    }
    ;
    p.getLevel = function() {
        return this.j
    }
    ;
    p.getTimestamp = function() {
        return this.timestamp
    }
    ;
    p.getMessage = function() {
        return this.message
    }
    ;
    p.toString = function() {
        return this.timestamp.toTimeString() + ": " + lE[this.j] + ": " + this.message
    }
    ;
    var nE = {
        20: function(a) {
            return "Ignoring a call to setCollapseEmptyDiv(false, true). Slots that start out collapsed should also collapse when empty. Slot: " + a[0] + "."
        },
        23: function(a) {
            return 'Error in googletag.display: could not find div with id "' + a[1] + '" in DOM for slot: ' + a[0] + "."
        },
        34: function(a) {
            return "Size mapping is null because invalid mappings were added: " + a[0] + "."
        },
        60: function(a) {
            return "Ignoring the " + a[0] + "(" + (a[1] || "") + ") call since the service is already enabled."
        },
        66: function(a) {
            return "Slot " + a[0] + " cannot be refreshed until PubAdsService is enabled."
        },
        68: function() {
            return "Slots cannot be cleared until service is enabled."
        },
        80: function(a) {
            return "Slot object at position " + a[0] + " is of incorrect type."
        },
        84: function(a) {
            return 'Cannot find targeting attribute "' + a[0] + '" for "' + a[1] + '".'
        },
        93: function(a) {
            return "Failed to register listener. Unknown event type: " + a[0] + "."
        },
        96: function(a) {
            return "Invalid arguments: " + a[0] + "(" + a[1] + ")."
        },
        122: function(a) {
            return "Invalid argument: " + a[0] + "(" + a[1] + "). Valid values: " + a[2] + "."
        },
        121: function(a) {
            return "Invalid object passed to " + a[0] + "(" + a[1] + "), for " + a[2] + ": " + a[3] + "."
        },
        105: function(a) {
            return "SRA requests may include a maximum of 30 ad slots. " + a[1] + " were requested, so the last " + a[2] + " were ignored."
        },
        106: function(a) {
            return "Publisher betas " + a[0] + " were declared after enableServices() was called."
        },
        107: function(a) {
            return "Publisher betas may only be declared once. " + a[0] + " were added after betas had already been declared."
        },
        108: function(a) {
            return "Beta keys cannot be cleared. clearTargeting() was called on " + a[0] + "."
        },
        123: function(a) {
            return "Refresh was throttled for slot: " + a[0] + "."
        },
        113: function(a) {
            return a[0] + " ad slot ineligible as page is not mobile optimized: " + a[1] + "."
        },
        116: function(a) {
            return 'The unique SafeFrame domain setting in Google Ad Manager conflicts with the "useUniqueDomain" setting passed to the setSafeFrameConfig API method. GPT will use useUniqueDomain=' + a[0] + " based on the API call."
        },
        114: function() {
            return 'setCorrelator has been deprecated. See the Google Ad Manager help page on "Creative selection for multiple ad slots" for more information: https://support.google.com/admanager/answer/183281.'
        },
        115: function() {
            return 'updateCorrelator has been deprecated. See the Google Ad Manager help page on "Creative selection for multiple ad slots" for more information: https://support.google.com/admanager/answer/183281.'
        },
        120: function() {
            return "Checking googletag.pubadsReady is discouraged. Please use googletag.cmd.push instead."
        },
        124: function(a) {
            return "To reserve space and reduce layout shifts, consider setting min-width=" + a[2] + "px, min-height=" + a[3] + "px styles on the div element with id=" + a[1] + ". Learn more: https://developers.google.com/publisher-tag/guides/minimize-layout-shift"
        },
        128: function() {
            return "ContentService is deprecated. The content() method will be removed from googletag soon. For more information, see https://developers.google.com/publisher-tag/reference#googletag.ContentService."
        },
        132: function(a) {
            return "Taxonomy with id " + a[0] + " has reached the limit of " + a[1] + " values."
        },
        133: function() {
            return "No taxonomy values were cleared, either due to an invalid taxonomy or no values present."
        },
        134: function(a) {
            return Rh(a[0]) + " not requested: Format already created on the page."
        },
        135: function(a) {
            return Rh(a[0]) + " not requested: Frequency cap of 1 has been exceeded."
        },
        136: function(a) {
            return Rh(a[0]) + " not requested: Layout viewport exceeds maximum width."
        },
        137: function(a) {
            return Rh(a[0]) + " not requested: Format only supported on mobile."
        },
        138: function(a) {
            return Rh(a[0]) + " not requested: Format only supports portrait orientation."
        },
        139: function(a) {
            return Rh(a[0]) + " not requested: GPT is not running in the top-level window."
        },
        140: function(a) {
            return Rh(a[0]) + " not requested: Detected browser is unsupported."
        },
        141: function(a) {
            return Rh(a[0]) + " not requested: Format is only supported when no zoom is applied."
        }
    }
      , oE = {
        26: function(a) {
            return "Div ID passed to googletag.display() does not match any defined slots: " + a[0] + "."
        },
        28: function(a) {
            return "Error in googletag.defineSlot: Cannot create slot " + a[1] + '. Div element "' + a[0] + '" is already associated with another slot: ' + a[2] + "."
        },
        92: function(a) {
            return "Exception in " + a[1] + ' event listener: "' + a[0] + '".'
        },
        30: function(a) {
            return "Exception in googletag.cmd function: " + a[0] + "."
        },
        125: function(a) {
            return "google-product-ad element is invalid: " + a[0] + "."
        },
        126: function() {
            return "Attempted to collect prebid data but window.pbjs is undefined."
        },
        127: function(a) {
            return "Encountered the following error while attempting to collect prebid metadata: " + a[0] + "."
        }
    };
    var pE = function() {
        this.events = new OB(1E3);
        this.j = this.m = 0;
        this.F = window
    }
      , qE = function(a, b) {
        return Me(a.events).filter(function(c) {
            return c.getSlot() === b
        })
    }
      , rE = function(a, b) {
        return Me(a.events).filter(function(c) {
            return c.getLevel() >= b
        })
    };
    pE.prototype.log = function(a, b, c, d, e) {
        var f = this;
        c = void 0 === c ? null : c;
        d = void 0 === d ? !1 : d;
        e = void 0 === e ? {} : e;
        e = void 0 === e.ub ? !1 : e.ub;
        var g;
        c = new mE(a,b,null !== (g = null === c || void 0 === c ? void 0 : c.j) && void 0 !== g ? g : null);
        this.events.add(c);
        e = (_.F(pt) || e) && this.F === top;
        var h = _.bd(qt) && 100 > this.m
          , k = 2 === a || 3 === a
          , l = this.j < _.bd(rt) && k && _.t.console
          , m = b.getMessageArgs()
          , n = b.getMessageId()
          , q = nE[n] || oE[n];
        h && k && (b = _.bd(qt),
        Cf("gpt_eventlog_messages", function(r) {
            var z;
            ++f.m;
            sf(r);
            G(r, "level", a);
            G(r, "messageId", n);
            G(r, "args", m.join("|"));
            q || G(r, "noMsg", !0);
            var A = Error();
            G(r, "stack", nf(null !== (z = A.stack) && void 0 !== z ? z : "", A.message))
        }, b));
        if (q) {
            b = "[GPT] " + q(m);
            if (d)
                throw new Hi(b);
            e && l && (function(r) {
                var z, A, I, H;
                return void (2 === a ? null === (A = (z = _.t.console).warn) || void 0 === A ? void 0 : A.call(z, r) : null === (H = (I = _.t.console).error) || void 0 === H ? void 0 : H.call(I, r))
            }(b),
            this.j++)
        }
        return c
    }
    ;
    pE.prototype.info = function(a, b) {
        return this.log(1, a, void 0 === b ? null : b)
    }
    ;
    var M = function(a, b, c, d) {
        d = void 0 === d ? {} : d;
        a.log(2, b, c, !1, {
            ub: void 0 === d.ub ? !1 : d.ub
        })
    };
    pE.prototype.error = function(a, b, c) {
        return this.log(3, a, b, void 0 === c ? !1 : c)
    }
    ;
    var pi = function() {
        return _.bh(pE)
    };
    var Sh = function(a, b) {
        b = void 0 === b ? [] : b;
        this.messageId = a;
        this.args = b
    };
    Sh.prototype.getMessageId = function() {
        return this.messageId
    }
    ;
    Sh.prototype.getMessageArgs = function() {
        return this.args
    }
    ;
    var sE = L(2)
      , tE = L(3)
      , uE = L(4)
      , vE = L(5)
      , wE = L(6)
      , xE = L(12)
      , yE = L(14)
      , zE = L(16)
      , AE = L(19)
      , BE = L(20)
      , bj = L(23)
      , cj = L(26)
      , CE = L(28)
      , DE = L(30)
      , EE = L(31)
      , FE = L(34)
      , GE = L(35)
      , HE = L(36)
      , IE = L(38)
      , JE = L(40)
      , KE = L(48)
      , LE = L(50)
      , ME = L(60)
      , NE = L(63)
      , OE = L(64)
      , PE = L(66)
      , QE = L(68)
      , RE = L(69)
      , SE = L(70)
      , TE = L(71)
      , UE = L(78)
      , VE = L(80)
      , WE = L(82)
      , XE = L(84)
      , YE = L(85)
      , ZE = L(87)
      , ei = L(88)
      , $E = L(92)
      , aF = L(93)
      , bF = L(99)
      , cF = L(103)
      , dF = L(104)
      , eF = L(105)
      , fF = L(106)
      , gF = L(107)
      , hF = L(108)
      , iF = L(113)
      , jF = L(114)
      , kF = L(115)
      , lF = L(116)
      , mF = L(117)
      , nF = L(118)
      , oF = L(119)
      , mm = L(120)
      , qi = L(121)
      , pF = L(122)
      , qF = L(123)
      , Fm = L(125)
      , rF = L(126)
      , sF = L(127)
      , tF = L(128)
      , uF = L(129)
      , vF = L(130)
      , wF = L(131)
      , xF = L(132)
      , yF = L(133);
    var zF = function(a) {
        var b = this;
        this.addEventListener = J(86, function(c, d) {
            if ("function" !== typeof d)
                return M(pi(), Uh("Service.addEventListener", [c, d])),
                b;
            var e = Xh(c);
            if (!e)
                return M(pi(), aF(c)),
                b;
            a.addEventListener(e, d);
            return b
        });
        this.removeEventListener = J(904, function(c, d) {
            var e = Xh(c);
            if ("function" === typeof d && e)
                return a.removeEventListener(e, d);
            M(pi(), Uh("Service.removeEventListener", [c, d]));
            return _.F(iu) ? !1 : void 0
        });
        this.getSlots = J(573, function() {
            return a.ja.map(function(c) {
                return (0,
                E.I)(c.j)
            })
        });
        this.getSlotIdMap = J(574, function() {
            for (var c = {}, d = _.y(a.ja), e = d.next(); !e.done; e = d.next())
                e = e.value,
                c[e.toString()] = e.j;
            return c
        });
        this.enable = J(87, function() {
            return a.enable()
        }, !0);
        this.getName = J(575, function() {
            return a.getName()
        })
    };
    _.O(zF, cC);
    var AF = function(a) {
        this.getId = J(593, function() {
            return a.getId()
        });
        this.getAdUnitPath = J(594, function() {
            return a.getAdUnitPath()
        });
        this.getName = J(595, function() {
            return a.getName()
        });
        this.toString = J(596, function() {
            return a.toString()
        });
        this.getDomId = J(597, function() {
            return a.getDomId()
        })
    };
    var BF = function() {
        this.sourceAgnosticLineItemId = this.sourceAgnosticCreativeId = this.lineItemId = this.creativeId = this.campaignId = this.advertiserId = null;
        this.isBackfill = !1;
        this.encryptedTroubleshootingInfo = this.creativeTemplateId = this.companyIds = this.yieldGroupIds = null
    };
    var CF = ""
      , DF = null
      , oi = _.Fo(function() {
        var a, b;
        null === (b = null === (a = window.console) || void 0 === a ? void 0 : a.warn) || void 0 === b ? void 0 : b.call(a, "googletag.pubads().setSafeFrameConfig({useUniqueDomain: ...}) is deprecated, and will stop having an effect in early 2022.")
    })
      , mi = _.Fo(function() {
        var a, b;
        null === (b = null === (a = window.console) || void 0 === a ? void 0 : a.warn) || void 0 === b ? void 0 : b.call(a, "googletag.pubads().setSafeFrameConfig({useUniqueDomain: ...}) has been removed, and no longer has any effect.")
    });
    var EF = function(a, b) {
        this.serviceName = b;
        this.slot = a.j
    }
      , FF = function(a, b) {
        EF.call(this, a, b);
        this.isEmpty = !1;
        this.slotContentChanged = !0;
        this.sourceAgnosticLineItemId = this.sourceAgnosticCreativeId = this.lineItemId = this.labelIds = this.creativeTemplateId = this.creativeId = this.campaignId = this.advertiserId = this.size = null;
        this.isBackfill = !1;
        this.companyIds = this.yieldGroupIds = null
    };
    _.O(FF, EF);
    var GF = function() {
        EF.apply(this, arguments)
    };
    _.O(GF, EF);
    var HF = function(a, b, c) {
        EF.call(this, a, b);
        this.inViewPercentage = c
    };
    _.O(HF, EF);
    var IF = function() {
        EF.apply(this, arguments)
    };
    _.O(IF, EF);
    var JF = function() {
        EF.apply(this, arguments)
    };
    _.O(JF, EF);
    var KF = function(a, b, c, d) {
        EF.call(this, a, b);
        this.payload = d;
        this.makeRewardedVisible = c
    };
    _.O(KF, EF);
    var LF = function(a, b, c) {
        EF.call(this, a, b);
        this.payload = this.payload = c
    };
    _.O(LF, EF);
    var MF = function() {
        EF.apply(this, arguments)
    };
    _.O(MF, EF);
    var NF = function() {
        EF.apply(this, arguments)
    };
    _.O(NF, EF);
    var OF = function() {
        EF.apply(this, arguments)
    };
    _.O(OF, EF);
    var PF = function() {
        EF.apply(this, arguments)
    };
    _.O(PF, EF);
    var QF = function() {
        EF.apply(this, arguments)
    };
    _.O(QF, EF);
    var RF = new v.Set
      , SF = function(a, b, c) {
        var d = 0
          , e = function() {
            d = 0
        };
        return function(f) {
            d || (d = _.t.setTimeout(e, b),
            a.apply(c, arguments))
        }
    }(function() {
        throw new Hi("Reached Limit for addEventListener");
    }, 3E5)
      , TF = function() {
        kC.call(this);
        this.ja = [];
        this.enabled = !1;
        this.oc = 0;
        this.kb = new v.Map;
        this.log = pi();
        this.cd = [];
        RF.add(this);
        this.log.info(GE(this.getName()))
    };
    _.O(TF, kC);
    p = TF.prototype;
    p.isEnabled = function() {
        return this.enabled
    }
    ;
    p.enable = function() {
        if (!this.enabled) {
            this.enabled = !0;
            ed().j(6);
            this.yc();
            for (var a = _.y(this.cd), b = a.next(); !b.done; b = a.next()) {
                b = b.value;
                try {
                    b()
                } catch (c) {}
            }
            this.cd.length = 0
        }
    }
    ;
    p.Na = function(a, b) {
        this.ja.push(a);
        var c = new JF(a,this.getName());
        this.dispatchEvent("slotAdded", 818, c);
        this.log.info(JE(this.getName(), a.getAdUnitPath()), a);
        a = this.getName();
        up(b, 4, a, void 0)
    }
    ;
    p.destroySlots = function(a) {
        var b = this;
        return a.filter(function(c) {
            return da(b.ja, c)
        })
    }
    ;
    p.addEventListener = function(a, b) {
        var c = this, d;
        if (this.oc >= _.bd(nt) && 0 < _.bd(nt))
            SF();
        else if (null === (d = this.kb.get(a)) || void 0 === d || !d.has(b)) {
            this.kb.has(a) || this.kb.set(a, new v.Map);
            var e = function(f) {
                f = f.detail;
                var g, h;
                try {
                    b(f)
                } catch (k) {
                    c.log.error($E(String(k), a)),
                    null === (h = null === (g = window.console) || void 0 === g ? void 0 : g.error) || void 0 === h ? void 0 : h.call(g, k)
                }
            };
            (0,
            E.I)(this.kb.get(a)).set(b, e);
            mC(this, a, e);
            this.oc++
        }
    }
    ;
    p.removeEventListener = function(a, b) {
        var c, d = null === (c = this.kb.get(a)) || void 0 === c ? void 0 : c.get(b);
        if (!d || !lC(this, a, d))
            return !1;
        this.oc--;
        return (0,
        E.I)(this.kb.get(a)).delete(b)
    }
    ;
    var Om = function(a) {
        for (var b = _.y(RF), c = b.next(); !c.done; c = b.next())
            c.value.destroySlots(a)
    };
    var UF = function(a, b) {
        this.width = a;
        this.height = b
    };
    UF.prototype.getWidth = function() {
        return this.width
    }
    ;
    UF.prototype.getHeight = function() {
        return this.height
    }
    ;
    var VF = function(a, b, c) {
        kC.call(this);
        this.D = a;
        this.instance = b;
        this.Va = c;
        this.j = null;
        this.id = this.D + "_" + this.instance
    };
    _.O(VF, kC);
    p = VF.prototype;
    p.getId = function() {
        return this.id
    }
    ;
    p.getAdUnitPath = function() {
        return this.D
    }
    ;
    p.getName = function() {
        return this.D
    }
    ;
    p.N = function() {
        return this.instance
    }
    ;
    p.toString = function() {
        return this.getId()
    }
    ;
    p.getDomId = function() {
        return this.Va
    }
    ;
    var WF = function(a, b) {
        a.j = b
    };
    var Ki = function(a) {
        var b = this
          , c = pi()
          , d = Zi(lf.N(), a.getDomId());
        _.F(ct) && _.jm(a, function() {
            return d = new zB
        });
        var e = "";
        _.F(ct) && _.jm(a, function() {
            return e = ""
        });
        var f = !1;
        mC(a, pC, function(m) {
            var n = m.detail;
            m = n.lc;
            n = n.isBackfill;
            m && (e = m,
            f = n)
        });
        this.set = J(40, function(m, n) {
            if ("string" !== typeof m || "string" !== typeof n || void 0 === hE()[m])
                return M(c, Uh("Slot.set", [m, n]), a),
                b;
            var q = (C = Wb(d, $h, 3),
            _.u(C, "find")).call(C, function(r) {
                return ai(r) === m
            });
            q ? bi(q, [n]) : (q = ci(new $h, m),
            up(q, 2, n, void 0),
            di(d, 3, $h, q));
            return b
        });
        this.get = J(41, function(m) {
            if ("string" !== typeof m)
                return M(c, Uh("Slot.get", [m]), a),
                null;
            var n = (C = Wb(d, $h, 3),
            _.u(C, "find")).call(C, function(q) {
                return ai(q) === m
            });
            return (n = n && $i(n, 2)) ? n[0] : null
        });
        this.getAttributeKeys = J(42, function() {
            return Wb(d, $h, 3).map(function(m) {
                return (0,
                E.I)(ai(m))
            })
        });
        this.addService = J(43, function(m) {
            m = aj.get(m);
            if (!m)
                return M(c, Uh("Slot.addService", [m]), a),
                b;
            var n = m.getName();
            if ((C = $i(d, 4),
            _.u(C, "includes")).call(C, n))
                return c.info(xE(n, a.toString()), a),
                b;
            m.Na(a, d);
            return b
        });
        this.defineSizeMapping = J(44, function(m) {
            try {
                var n = d;
                if (!Array.isArray(m))
                    throw new Hi("Size mapping must be an array");
                var q = m.map(Ji);
                Ii(n, 6, q)
            } catch (r) {
                Gf(44, r),
                fs("Incorrect usage of googletag.Slot defineSizeMapping: " + r.message)
            }
            return b
        });
        this.setClickUrl = J(45, function(m) {
            if ("string" !== typeof m)
                return M(c, Uh("Slot.setClickUrl", [m]), a),
                b;
            d.setClickUrl(m);
            return b
        });
        this.setCategoryExclusion = J(46, function(m) {
            "string" !== typeof m || Yh(m) ? M(c, Uh("Slot.setCategoryExclusion", [m]), a) : ((C = $i(d, 8),
            _.u(C, "includes")).call(C, m) || up(d, 8, m, void 0),
            c.info(yE(m), a));
            return b
        });
        this.clearCategoryExclusions = J(47, function() {
            w(d, 8, qp);
            c.info(zE(), a);
            return b
        });
        this.getCategoryExclusions = J(48, function() {
            return $i(d, 8).slice()
        });
        this.setTargeting = J(49, function(m, n) {
            fi(a, d, m, n, c);
            return b
        });
        this.updateTargetingFromMap = J(649, function(m) {
            gi(a, d, m, c);
            return b
        });
        this.clearTargeting = J(50, function(m) {
            if (void 0 === m)
                return Ii(d, 9, void 0),
                c.info(AE(a.getAdUnitPath()), a),
                b;
            var n = Wb(d, $h, 9)
              , q = _.u(n, "findIndex").call(n, function(r) {
                return ai(r) === m
            });
            if (0 > q)
                return M(c, XE(m, a.getAdUnitPath()), a),
                b;
            n.splice(q, 1);
            Ii(d, 9, n);
            c.info(cF(m, a.getAdUnitPath()), a);
            return b
        });
        this.getTargeting = J(51, function(m) {
            if ("string" !== typeof m)
                return M(c, Uh("Slot.getTargeting", [m]), a),
                [];
            var n = (C = Wb(d, $h, 9),
            _.u(C, "find")).call(C, function(q) {
                return ai(q) === m
            });
            return n ? $i(n, 2).slice() : []
        });
        this.getTargetingKeys = J(52, function() {
            return Wb(d, $h, 9).map(function(m) {
                return (0,
                E.I)(ai(m))
            })
        });
        this.setCollapseEmptyDiv = J(53, function(m, n) {
            n = void 0 === n ? !1 : n;
            if ("boolean" !== typeof m || "boolean" !== typeof n)
                return M(c, Uh("Slot.setCollapseEmptyDiv", [m, n]), a),
                b;
            w(d, 10, m);
            w(d, 11, m && n);
            Cf("gpt_ced", function(q) {
                G(q, "sc", D(d, 11) ? "t" : "f");
                G(q, "level", "slot");
                sf(q)
            });
            n && !m && M(c, BE(a.toString()), a);
            return b
        });
        this.getAdUnitPath = J(54, function() {
            return a.getAdUnitPath()
        });
        this.getSlotElementId = J(598, function() {
            return a.getDomId()
        });
        this.setForceSafeFrame = J(55, function(m) {
            if ("boolean" !== typeof m)
                return M(c, Uh("Slot.setForceSafeFrame", [String(m)]), a),
                b;
            w(d, 12, m);
            return b
        });
        this.setSafeFrameConfig = J(56, function(m) {
            var n = si(m);
            if (!n)
                return c.error(Uh("Slot.setSafeFrameConfig", [m]), a),
                b;
            Of(d, 13, n);
            return b
        });
        var g = null;
        _.F(ct) && _.jm(a, function() {
            return g = null
        });
        mC(a, oC, function(m) {
            m = m.detail;
            if (D(m, 8))
                g = null;
            else {
                g = new BF;
                var n = !!D(m, 9);
                g.isBackfill = n;
                var q = $i(m, 15)
                  , r = $i(m, 16);
                q.length && r.length && (g.sourceAgnosticCreativeId = q[0],
                g.sourceAgnosticLineItemId = r[0],
                n || (g.creativeId = q[0],
                g.lineItemId = r[0],
                (n = $i(m, 22)) && n.length && (g.creativeTemplateId = n[0])));
                $i(m, 17).length && (n = $i(m, 17)[0],
                g.advertiserId = n);
                $i(m, 18).length && (n = $i(m, 18)[0],
                g.campaignId = n);
                $i(m, 19).length && (n = $i(m, 19),
                g.yieldGroupIds = n);
                $i(m, 20).length && (n = $i(m, 20),
                g.companyIds = n);
                m = $i(m, 45);
                m = m.length && "string" !== typeof m[0] ? _.de(m, Cb) : m;
                m.length && (g.encryptedTroubleshootingInfo = m[0])
            }
        });
        this.getResponseInformation = J(355, function() {
            return g
        });
        this.getName = J(170, function() {
            window.console && console.error && console.error("getName on googletag.Slot is deprecated and will be removed. Use getAdUnitPath instead.");
            var m = new rf("slot_get_name");
            sf(m);
            uf(m);
            return a.getAdUnitPath()
        });
        var h = new AF(a);
        this.getSlotId = J(579, function() {
            return h
        });
        this.getServices = J(580, function() {
            return $i(d, 4).map(function(m) {
                return ze(m)
            })
        });
        this.getSizes = J(581, function(m, n) {
            var q, r;
            return null != (r = null == (q = Zf(d, m, n)) ? void 0 : q.map(function(z) {
                return D(z, 3) ? "fluid" : new UF(z.getWidth(),z.getHeight())
            })) ? r : null
        });
        this.getClickUrl = J(582, function() {
            var m;
            return null != (m = d.getClickUrl()) ? m : ""
        });
        this.getTargetingMap = J(583, function() {
            for (var m = {}, n = _.y(Wb(d, $h, 9)), q = n.next(); !q.done; q = n.next())
                q = q.value,
                ai(q) && (m[ai(q)] = $i(q, 2));
            return m
        });
        this.getOutOfPage = J(584, function(m) {
            return "number" === typeof m ? vg(d) === m : 0 !== vg(d)
        });
        this.getCollapseEmptyDiv = J(585, function() {
            return bg(d, 10) ? D(d, 10) : null
        });
        this.getDivStartsCollapsed = J(586, function() {
            return bg(d, 11) ? D(d, 11) : null
        });
        var k = function() {
            return ""
        };
        _.F(ct) && _.jm(a, function() {
            return k = function() {
                return ""
            }
        });
        mC(a, qC, function(m) {
            k = m.detail.Id
        });
        this.getContentUrl = J(587, function() {
            return k()
        });
        this.getFirstLook = J(588, function() {
            fs("The getFirstLook method of SlotInterface is deprecated. Please update your code to no longer call this method.");
            return 0
        });
        var l = "";
        _.F(ct) && _.jm(a, function() {
            return l = ""
        });
        mC(a, oC, function(m) {
            var n;
            l = null != (n = m.detail.getEscapedQemQueryId()) ? n : ""
        });
        this.getEscapedQemQueryId = J(591, function() {
            return l
        });
        this.getHtml = J(592, function() {
            return f ? (window.console && console.warn && console.warn("This ad's html cannot be accessed using the getHtml method on googletag.Slot. Returning the empty string instead."),
            "") : e
        })
    };
    _.O(Ki, cC);
    Pe(Ki, 8);
    var XF = function() {
        this.m = [];
        this.hostpageLibraryTokens = [];
        this.j = {}
    }
      , YF = function(a, b) {
        if (!_.u(a.m, "includes").call(a.m, b) && (C = [1, 2, 3],
        _.u(C, "includes")).call(C, b)) {
            var c;
            if (c = _.F(Yt) ? Lw[b] : Jw[b]) {
                var d = b + "_hostpage_library";
                if (c = oj(document, c))
                    c.id = d
            }
            a.m.push(b);
            b = new Mw(b);
            a.hostpageLibraryTokens.push(b);
            a = we();
            a.hostpageLibraryTokens || (a.hostpageLibraryTokens = {});
            a.hostpageLibraryTokens[b.j] = b.m
        }
    }
      , ZF = function(a, b, c) {
        var d;
        a.j[b] = null !== (d = a.j[b]) && void 0 !== d ? d : new v.Set;
        a.j[b].add(c)
    }
      , $F = function(a, b) {
        var c, d;
        a = null !== (d = null === (c = a.j[b]) || void 0 === c ? void 0 : _.u(c, "values").call(c)) && void 0 !== d ? d : [];
        return [].concat(_.yc(a))
    };
    var xw = function(a, b) {
        var c = this;
        a = void 0 === a ? lf.N().j : a;
        b = void 0 === b ? _.t : b;
        this.D = "";
        this.j = this.m = null;
        this.F = !1;
        this.A = function() {
            return !1
        }
        ;
        var d = {}
          , e = {}
          , f = {};
        this.l = (f[dw] = (d[19] = function() {
            return !!D(a, 10)
        }
        ,
        d[13] = function() {
            return vc.apply(0, arguments).some(function(g) {
                return 0 == c.D.lastIndexOf(g, 0)
            })
        }
        ,
        d[12] = function() {
            return !!D(a, 6)
        }
        ,
        d[11] = DA,
        d[15] = function(g) {
            return c.A(g)
        }
        ,
        d[7] = function() {
            var g;
            return !(null === (g = b.crypto) || void 0 === g || !g.subtle)
        }
        ,
        d[48] = function() {
            return !!c.m
        }
        ,
        d[51] = function() {
            return c.F
        }
        ,
        d[53] = function() {
            try {
                return !!_.Lj("LINK").relList.supports("webbundle")
            } catch (g) {
                return !1
            }
        }
        ,
        d),
        f[ew] = (e[8] = function(g) {
            var h;
            return null !== (h = Tc(c.m, Number(g))) && void 0 !== h ? h : void 0
        }
        ,
        e[10] = function(g) {
            return c.j ? dg(g + c.j) % 1E3 : void 0
        }
        ,
        e),
        f)
    }
      , aG = function(a, b) {
        b && !a.j && (a.j = _.u(b.split(":"), "find").call(b.split(":"), function(c) {
            return 0 === c.indexOf("ID=")
        }) || null)
    };
    var bG = _.Fo(function() {
        fs("The googletag.pubads().definePassback function has been deprecated. The function may break in certain contexts, see https://developers.google.com/publisher-tag/guides/passback-tags#construct_passback_tags for how to correctly create a passback.")
    })
      , Wi = function() {
        this.j = new v.Map;
        this.da = new v.Set;
        _.bh(xw).A = Xi
    };
    Wi.prototype.add = function(a, b, c) {
        var d = this
          , e = void 0 === c ? {} : c;
        c = void 0 === e.Va ? void 0 : e.Va;
        var f = void 0 === e.format ? 0 : e.format;
        e = void 0 === e.ed ? !1 : e.ed;
        var g, h = Vi(f);
        if (h)
            return Cf("gpt_pla_ns", function(l) {
                G(l, "iu", a);
                G(l, "f", null !== f && void 0 !== f ? f : "");
                G(l, "nsr", h);
                sf(l)
            }),
            {};
        e && bG();
        e = this.j.get(a) || Number(e);
        b = null !== (g = cG(a, e, b, c || "gpt_unit_" + a + "_" + e)) && void 0 !== g ? g : {};
        c = b.Ma;
        var k = b.slotId;
        if (!k)
            return {};
        this.j.set(a, e + 1);
        this.da.add(k);
        _.jm(k, function() {
            return void d.da.delete(k)
        });
        mB(a);
        return {
            slotId: k,
            Ma: c
        }
    }
    ;
    var dG = function(a) {
        return $F(_.bh(XF), a).map(function(b) {
            var c;
            return null === (c = Wg(b, document)) || void 0 === c ? void 0 : c.contentWindow
        }).filter(function(b) {
            return !!b
        })
    }
      , Pm = function(a) {
        a = _.y(a);
        for (var b = a.next(); !b.done; b = a.next())
            Bc(b.value)
    }
      , fj = function(a, b) {
        a = _.y(a.da);
        for (var c = a.next(); !c.done; c = a.next())
            if (c = c.value,
            c.getDomId() === b)
                return c;
        return null
    }
      , pm = function(a, b, c, d) {
        d = void 0 === d ? !1 : d;
        return "string" === typeof a && 0 < a.length && b && (void 0 === c || "string" === typeof c) ? _.bh(Wi).add(a, b, {
            Va: c,
            ed: d
        }) : {}
    }
      , eG = function(a, b, c) {
        var d = pm(a, b, c).slotId;
        if (d)
            return d.j;
        pi().error(Uh("googletag.defineSlot", [a, b, c]), void 0, _.F(Ps));
        return null
    }
      , fG = function() {
        var a = _.Af(74, eG);
        xe("defineSlot", a);
        xe("defineUnit", a);
        xe("getWindowsThatCanCommunicateWithHostpageLibrary", dG)
    }
      , cG = function(a, b, c, d) {
        var e = fj(_.bh(Wi), d);
        if (e)
            return pi().error(CE(d, a, e.getAdUnitPath())),
            null;
        var f = new zB;
        AB(w(f, 1, a), d);
        c = Gi(c);
        e = c.Ha;
        Ii(f, 5, c.tc);
        null !== e && Of(f, 16, e);
        XB(f);
        var g = new VF(a,b,d);
        WF(g, Li(g));
        _.jm(g, function() {
            var h = lf.N()
              , k = g.getDomId();
            delete h.m[k];
            h.F.delete(g);
            h = g.getAdUnitPath();
            var l;
            h = ve(h);
            k = (null !== (l = Sf.get(h)) && void 0 !== l ? l : 0) - 1;
            0 >= k ? Sf.delete(h) : Sf.set(h, k);
            pi().info(bF(g.toString()), g);
            _.F(dt) && ((l = bC.get(g)) && aj.delete(l),
            bC.delete(g))
        });
        pi().info(sE(g.toString()), g);
        mC(g, qC, function(h) {
            h = h.detail.ye;
            pi().info(tE(g.getAdUnitPath()), g);
            Cv(Ef.N(), "7", 9, Vl(TD.N(), g), 0, h)
        });
        mC(g, oC, function(h) {
            var k = h.detail, l;
            pi().info(uE(g.getAdUnitPath()), g);
            h = Ef.N();
            var m = x(f, 20);
            k = null !== (l = k.getEscapedQemQueryId()) && void 0 !== l ? l : "";
            h.j && (_.t.google_timing_params = _.t.google_timing_params || {},
            _.t.google_timing_params["qqid." + m] = k)
        });
        mC(g, pC, function() {
            return void pi().info(vE(g.getAdUnitPath()), g)
        });
        mC(g, rC, function() {
            return void pi().info(wE(g.getAdUnitPath()), g)
        });
        return {
            Ma: f,
            slotId: g
        }
    };
    var gG = function(a) {
        TF.call(this);
        this.D = a;
        this.ads = new v.Map;
        this.j = {};
        this.l = this.Za = !1;
        _.bh(xw).F = !0
    };
    _.O(gG, TF);
    p = gG.prototype;
    p.set = function(a, b) {
        "string" === typeof a && a.length ? (this.j[a] = b,
        this.log.info(HE(a, String(b), this.getName()))) : M(this.log, Uh("CompanionAdsService.set", [a, b]));
        return this
    }
    ;
    p.get = function(a) {
        var b;
        return null !== (b = this.j[a]) && void 0 !== b ? b : null
    }
    ;
    p.display = function(a, b, c, d) {
        this.enable();
        b = pm(a, b, c);
        a = b.slotId;
        b = b.Ma;
        this.Na((0,
        E.I)(a), (0,
        E.I)(b));
        null === b || void 0 === b ? void 0 : b.setClickUrl(d);
        dj(null === a || void 0 === a ? void 0 : a.getDomId())
    }
    ;
    p.Na = function(a, b) {
        var c = this;
        mC(a, oC, function(d) {
            D(d.detail, 11) && (hG(c, a).pe = !0)
        });
        TF.prototype.Na.call(this, a, b)
    }
    ;
    p.yc = function() {}
    ;
    p.setRefreshUnfilledSlots = function(a) {
        "boolean" === typeof a && (this.Za = a)
    }
    ;
    var iG = function(a, b) {
        (b = void 0 === b ? "" : b) && !a.l && Cf("ima_sdk_v", function(c) {
            a.l = !0;
            G(c, "v", b)
        });
        return String(lf.N().j.getCorrelator())
    }
      , jG = function(a, b) {
        var c = lf.N().j
          , d = lf.N().m;
        if (a.D.isEnabled()) {
            var e = {
                Ea: 3
            };
            a.o && (e.Ta = a.o);
            a.B && (e.Ua = a.B);
            b = null !== b && void 0 !== b ? b : a.ja;
            c = Jg(c, d);
            d = e.Ta;
            var f = e.Ua;
            d && "number" !== typeof d || f && "number" !== typeof f || a.D.refresh(c, b, e)
        } else
            (null === b || void 0 === b ? 0 : b[0]) && a.log.error(PE(b[0].getDomId()))
    }
      , kG = function(a, b) {
        var c;
        return a.D.isEnabled() && !(null === (c = a.ads.get(b)) || void 0 === c || !c.pe)
    }
      , lG = function(a, b) {
        return a.ja.filter(function(c) {
            return _.u(b, "includes").call(b, c.toString())
        })
    };
    gG.prototype.getName = function() {
        return "companion_ads"
    }
    ;
    gG.prototype.Lc = function() {}
    ;
    var mG = function(a, b, c, d) {
        b = new FF(b,a.getName());
        null != c && null != d && (b.size = [c, d]);
        a.dispatchEvent("slotRenderEnded", 67, b)
    }
      , hG = function(a, b) {
        var c = a.ads.get(b);
        c || (c = {},
        a.ads.set(b, c),
        _.jm(b, function() {
            return a.ads.delete(b)
        }));
        return c
    };
    var gj = function(a) {
        zF.call(this, a);
        var b = this;
        this.set = J(576, function(c, d) {
            a.set(c, d);
            return b
        });
        this.get = J(577, function(c) {
            return a.get(c)
        });
        this.getAttributeKeys = J(578, function() {
            return Qr(a.j)
        });
        this.display = J(558, function(c, d, e, f) {
            return a.display(c, d, null != e ? e : "", null != f ? f : "")
        });
        this.notifyUnfilledSlots = J(69, function(c) {
            a.Za && jG(a, lG(a, c))
        });
        this.refreshAllSlots = J(60, function() {
            a.Za && jG(a)
        });
        this.setVideoSession = J(61, function(c, d, e) {
            a.o = d;
            a.B = e;
            "number" === typeof c && w(lf.N().j, 29, c)
        });
        this.getDisplayAdsCorrelator = J(62, function(c) {
            return iG(a, void 0 === c ? "" : c)
        });
        this.getVideoStreamCorrelator = J(63, function() {
            var c;
            return null !== (c = x(lf.N().j, 29)) && void 0 !== c ? c : 0
        });
        this.isSlotAPersistentRoadblock = J(64, function(c) {
            var d = _.u(a.ja, "find").call(a.ja, function(e) {
                return e.j === c
            });
            return !!d && kG(a, d)
        });
        this.onImplementationLoaded = J(65, function() {
            a.log.info(KE("GPT CompanionAds"))
        });
        this.slotRenderEnded = J(67, function(c, d, e) {
            var f = _.u(a.ja, "find").call(a.ja, function(g) {
                return g.j === c
            });
            return f && mG(a, f, d, e)
        });
        this.setRefreshUnfilledSlots = J(59, function(c) {
            return a.setRefreshUnfilledSlots(c)
        })
    };
    _.O(gj, zF);
    Pe(gj, 3);
    var ij = function(a) {
        zF.call(this, a);
        this.setContent = J(72, function(b, c) {
            var d = _.u(a.ja, "find").call(a.ja, function(e) {
                return e.j === b
            });
            return !!d && a.setContent(d, c)
        })
    };
    _.O(ij, zF);
    Pe(ij, 4);
    var nG = Q(["https://console.googletagservices.com/pubconsole/loader.js"])
      , oG = Q(["/pubconsole/loader.js"])
      , vj = null
      , uj = !1
      , mj = !1
      , nj = !1
      , qj = B(nG);
    B(oG);
    var pG = function() {
        var a = pi();
        this.getAllEvents = J(563, function() {
            return mj ? Me(a.events).slice() : []
        });
        this.getEventsBySlot = J(565, function(b) {
            return mj ? qE(a, b).slice() : []
        });
        this.getEventsByLevel = J(566, function(b) {
            return mj ? rE(a, b).slice() : []
        })
    };
    _.O(pG, cC);
    Pe(pG, 5);
    var zj = function(a, b) {
        var c = this
          , d = pi()
          , e = a.getSlotId()
          , f = lf.N().j
          , g = (0,
        E.I)(Zi(lf.N(), e.getDomId()));
        this.set = J(83, function(h, k) {
            "page_url" === h && k && (h = [bi(ci(new $h, h), [String(k)])],
            Ii(g, 3, h));
            return c
        });
        this.get = J(84, function(h) {
            var k, l;
            return "page_url" !== h ? null : null !== (l = null === (k = (C = (0,
            E.I)(Wb(g, $h, 3)),
            _.u(C, "find")).call(C, function(m) {
                return ai(m) === h
            })) || void 0 === k ? void 0 : $i(k, 2)[0]) && void 0 !== l ? l : null
        });
        this.setClickUrl = J(79, function(h) {
            "string" === typeof h ? g.setClickUrl(h) : M(d, Uh("Slot.setClickUrl", [h]), e);
            return c
        });
        this.setTargeting = J(81, function(h, k) {
            fi(e, g, h, k, d);
            return c
        });
        this.updateTargetingFromMap = J(85, function(h) {
            gi(e, g, h, d);
            return c
        });
        this.display = J(78, function() {
            qG(b, e, Jg(f, lf.N().m))
        });
        this.setTagForChildDirectedTreatment = J(80, function(h) {
            if (0 === h || 1 === h) {
                var k = Rl(f) || new Sl;
                k.setTagForChildDirectedTreatment(h);
                Of(f, 25, k)
            }
            return c
        });
        this.setForceSafeFrame = J(567, function(h) {
            "boolean" === typeof h ? w(g, 12, h) : M(d, Uh("PassbackSlot.setForceSafeFrame", [String(h)]), e);
            return c
        });
        this.setTagForUnderAgeOfConsent = J(448, function(h) {
            if (0 === h || 1 === h) {
                var k = Rl(f) || new Sl;
                k.setTagForUnderAgeOfConsent(h);
                Of(f, 25, k)
            }
            return c
        })
    };
    _.O(zj, cC);
    Pe(zj, 6);
    var wm = {
        REWARDED: 4,
        TOP_ANCHOR: 2,
        BOTTOM_ANCHOR: 3,
        INTERSTITIAL: 5
    }
      , rG = {
        IAB_AUDIENCE_1_1: 1,
        IAB_CONTENT_2_1: 2
    }
      , sG = {
        PURCHASED: 1,
        ORGANIC: 2
    }
      , tG = {
        EVERYONE: 1,
        PARENTAL_GUIDANCE: 2,
        TEEN: 3,
        MATURE_AUDIENCE: 4
    }
      , uG = function() {
        if (!we().enums) {
            var a = {}
              , b = Bj(wm);
            a.OutOfPageFormat = b;
            _.F(Ut) && (b = Bj(sG),
            a.TrafficSource = b);
            _.F(Tt) && (b = Bj(rG),
            a.Taxonomies = b);
            _.F(ht) && (b = Bj(tG),
            a.AdContentRating = b);
            we().enums = a
        }
    };
    var qm = function(a, b) {
        kC.call(this);
        this.slotId = a;
        this.j = b
    };
    _.O(qm, kC);
    qm.prototype.getSlotId = function() {
        return this.slotId
    }
    ;
    var xG = function(a) {
        var b = this;
        this.j = new v.Map;
        this.m = new v.Map;
        this.Oa = Ef.N();
        window.performance && Mh(window.performance.now) && (_.eb(window, "DOMContentLoaded", _.Af(334, function() {
            for (var c = _.y(b.j), d = c.next(); !d.done; d = c.next()) {
                var e = _.y(d.value);
                d = e.next().value;
                e = e.next().value;
                vG(b, d, e) && b.j.delete(d)
            }
        })),
        mC(a, sC, function(c) {
            var d = c.detail;
            c = d.Oc;
            d = d.O;
            return void wG(b, (0,
            E.I)(fj(_.bh(Wi), c)), (0,
            E.I)(x(d, 20)))
        }),
        mC(a, tC, function(c) {
            var d = c.detail;
            c = d.Oc;
            d = d.O;
            c = (0,
            E.I)(fj(_.bh(Wi), c));
            d = (0,
            E.I)(x(d, 20));
            var e = b.m.get(c);
            null != e ? xD(e, d) : wG(b, c, d)
        }))
    }
      , wG = function(a, b, c) {
        vG(a, b, c) ? a.j.delete(b) : (a.j.set(b, c),
        _.jm(b, function() {
            return a.j.delete(b)
        }))
    }
      , vG = function(a, b, c) {
        var d = Mg(b);
        if ("DIV" !== (null === d || void 0 === d ? void 0 : d.nodeName))
            return !1;
        d = new vD({
            H: window,
            Oa: a.Oa,
            Va: (0,
            E.wa)(d),
            Ba: function(e) {
                return void Gf(336, e)
            },
            Fe: _.F(Au)
        });
        if (!d.m)
            return !1;
        xD(d, c);
        a.m.set(b, d);
        XD(TD.N(), b, function() {
            return void a.m.delete(b)
        });
        return !0
    };
    var yG = new v.Map([[2, {
        ne: "page_level_ads"
    }]]), zG = function() {}, CG;
    zG.N = function() {
        throw Error("Must be overridden");
    }
    ;
    _.AG = function(a) {
        this.j = a = void 0 === a ? yG : a;
        this.m = new v.Map;
        this.loaded = new v.Set;
        this.F = null
    }
    ;
    _.O(_.AG, zG);
    _.BG = function(a, b) {
        b = b.module;
        a.m.has(b) || a.m.set(b, new ie);
        return (0,
        E.I)(a.m.get(b))
    }
    ;
    CG = function(a, b) {
        var c = b.module;
        b = "_gpt_js_load_" + c + "_";
        var d = _.Af(340, function(e) {
            if (a.j.has(c) && "function" === typeof e) {
                var f = (0,
                E.I)(a.j.get(c));
                f = (void 0 === f.Kd ? [] : f.Kd).map(function(g) {
                    return _.BG(a, g).promise
                });
                v.Promise.all(f).then(function() {
                    e.call(window, _)
                })
            }
        });
        Object.defineProperty(we(), b, {
            value: function(e) {
                if (d) {
                    var f = d;
                    d = null;
                    f(e)
                }
            },
            writable: !1,
            enumerable: !1
        })
    }
    ;
    _.AG.prototype.load = function(a) {
        var b, c = _.BG(this, a), d = (null !== (b = this.j.get(a.module)) && void 0 !== b ? b : {}).ne;
        if (!d)
            throw Error("cannot load invalid module: " + d);
        if (!this.loaded.has(a.module)) {
            var e = _.qf[172];
            e = e && "pagead2.googlesyndication.com" === Lr((e.src || "").match(_.Kr)[3] || null);
            var f = (0,
            E.I)(this.F);
            d = pj(Wa(e ? f.Fd(d) : f.Gd(d)).toString());
            d = (e = _.bd(Wt)) ? io(d, {
                cb: e
            }) : d;
            CG(this, a);
            oj(document, d);
            this.loaded.add(a.module)
        }
        return c.promise
    }
    ;
    Rn(_.AG);
    var DG = function() {
        this.resources = {}
    };
    var gk = function(a, b, c, d, e, f) {
        Z.call(this, 856);
        this.J = a;
        this.slotId = b;
        this.vb = W(this);
        this.Ab = W(this);
        this.ma = W(this);
        this.K = W(this);
        this.l = W(this);
        this.B = Y(this, c);
        this.G = Y(this, d);
        this.o = Y(this, e);
        this.P = Y(this, f)
    };
    _.O(gk, Z);
    var EG = function(a) {
        a.vb.ca(a.B.value);
        a.Ab.ca(a.G.value);
        a.ma.ca(a.o.value);
        Lv(a.K);
        Lv(a.l)
    };
    gk.prototype.j = function() {
        var a = this.P.value
          , b = this.o.value;
        if (_.F(Ws) && a) {
            var c;
            var d = null === (c = this.J.j.get(this.slotId)) || void 0 === c ? void 0 : c.Qc;
            d = null === d || void 0 === d ? void 0 : d.get(a);
            if (!d)
                throw new Hi("Could not find bid with id: " + a);
            this.K.j(d);
            var e = d.height;
            c = d.width;
            var f = d.adUrl
              , g = d.yd
              , h = d.cpm;
            if (1 !== d.format)
                EG(this);
            else {
                if (!g && !f)
                    throw new Hi("Could not find ad to render for bid id: " + a);
                d = null !== e && void 0 !== e ? e : this.B.value;
                c = null !== c && void 0 !== c ? c : this.G.value;
                f = {
                    ad: Ej(g, null !== h && void 0 !== h ? h : 0),
                    adUrl: Ej(f, null !== h && void 0 !== h ? h : 0),
                    adId: a,
                    width: c,
                    height: d
                };
                h = btoa(JSON.stringify(f));
                0 === (null === b || void 0 === b ? void 0 : b.kind) ? (f = this.ma,
                g = f.j,
                b = b.ya.replace(new RegExp("{{GOOGLE_PBJS_AD_CONFIG}}".replace(/([-()\[\]{}+?*.$\^|,:#<!\\])/g, "\\$1").replace(/\x08/g, "\\x08"),"g"), h.replace(/\$/g, "$$$$")),
                g.call(f, {
                    kind: 0,
                    ya: b
                }),
                Lv(this.l)) : (this.ma.ca(b),
                this.l.ca(h));
                this.vb.ca(null !== d && void 0 !== d ? d : null);
                this.Ab.ca(null !== c && void 0 !== c ? c : null);
                window.postMessage(JSON.stringify({
                    message: "Prebid Request",
                    adId: a
                }), "*")
            }
            fE(this.J, this.slotId)
        } else
            EG(this)
    }
    ;
    var Kk = function(a, b, c, d, e, f, g, h) {
        Z.call(this, 682);
        this.J = a;
        this.format = b;
        this.slotId = c;
        this.H = d;
        this.C = Sv(this);
        this.l = Y(this, e);
        this.o = X(this, f);
        this.G = X(this, g);
        this.B = Y(this, h)
    };
    _.O(Kk, Z);
    Kk.prototype.j = function() {
        var a = this, b, c, d, e, f, g, h, k, l;
        return gb(function(m) {
            if (2 !== a.format && 3 !== a.format || !Ov(a.l) || !tp(a.l.value, 12, !1))
                return a.C.notify(),
                m.return();
            b = (0,
            E.I)(a.B.value);
            c = b.Vd;
            d = _.ZD(a.J, a.slotId);
            e = a.G.value;
            f = a.o.value;
            _.gh(f, {
                "max-height": "30vh",
                overflow: "hidden"
            });
            if (FG)
                FG.Pe(f);
            else {
                FG = new c(a.format,f,a.H,e,a.J,a.slotId);
                g = {};
                h = _.y(Wb(a.l.value, xq, 13));
                for (k = h.next(); !k.done; k = h.next())
                    l = k.value,
                    g[x(l, 1)] = x(l, 2);
                FG.Se(g);
                FG.rb();
                WD(a.J, a.slotId, function() {
                    FG && (FG.va(),
                    FG = null);
                    d && _.aE(a.J, a.slotId)
                })
            }
            _.jm(a, function() {
                return _.Hr(f)
            });
            a.C.notify();
            vn(m)
        })
    }
    ;
    var FG = null;
    var Lk = function(a, b, c, d, e, f, g, h) {
        Z.call(this, 683);
        this.slotId = a;
        this.format = b;
        this.V = c;
        this.o = Y(this, d);
        this.l = X(this, e);
        this.K = X(this, f);
        this.B = Y(this, g);
        this.G = Y(this, h);
        this.P = Gj(a, Hj, function(k) {
            k = k.detail;
            try {
                var l = JSON.parse(k.data);
                return "sth" === l.googMsgType && "i-adframe-load" === l.msg_type
            } catch (m) {
                return !1
            }
        })
    };
    _.O(Lk, Z);
    Lk.prototype.j = function() {
        var a = this, b, c, d, e, f, g, h, k;
        return gb(function(l) {
            if (1 == l.j) {
                b = a.o.value;
                if (!b || 5 !== a.format)
                    return l.return();
                c = a.K.value;
                d = a.l.value;
                e = (0,
                E.I)(a.G.value);
                f = e.ae;
                g = new _.ZB;
                h = new f(window,d,c,g,a.V,Fj(Wb(b, xq, 13)),"22639388115" === ve(a.slotId.getAdUnitPath()),function() {
                    return void a.va()
                }
                ,a.B.value);
                _.Pu(a, h);
                k = _.bd(Kt);
                switch (k) {
                case 0:
                    h.K();
                    break;
                case 1:
                    l.j = 2;
                    return
                }
            } else {
                if (4 != l.j)
                    return hb(l, a.P, 4);
                if (a.m)
                    return l.return();
                h.K(!0)
            }
            l.j = 0
        })
    }
    ;
    var GG = function() {
        this.module = 2
    };
    GG.prototype.toString = function() {
        return String(this.module)
    }
    ;
    _.HG = new GG;
    var Gk = function(a, b, c) {
        Z.call(this, 846);
        this.format = a;
        this.C = W(this);
        this.l = Y(this, b);
        this.o = Y(this, c)
    };
    _.O(Gk, Z);
    Gk.prototype.j = function() {
        var a = this, b, c, d, e, f;
        return gb(function(g) {
            if (1 == g.j) {
                c = (2 === a.format || 3 === a.format) && !(null === (b = a.l.value) || void 0 === b || !tp(b, 12, !1));
                d = 5 === a.format && a.o.value;
                if (!c && !d) {
                    Lv(a.C);
                    g.j = 0;
                    return
                }
                e = a.C;
                f = e.j;
                return hb(g, _.AG.N().load(_.HG), 3)
            }
            f.call(e, g.m);
            vn(g)
        })
    }
    ;
    var IG = function(a, b, c) {
        Z.call(this, 696);
        this.slotId = a;
        this.pa = b;
        Uv(this, c);
        this.l = new v.Promise(function(d) {
            var e = ["canceled", "ha_before_make_visible"];
            _.F(Vh) || e.push("closed");
            e = _.y(e);
            for (var f = e.next(); !f.done; f = e.next())
                Ij(a, f.value).then(d)
        }
        )
    };
    _.O(IG, Z);
    IG.prototype.j = function() {
        var a = this;
        return gb(function(b) {
            switch (b.j) {
            case 1:
                return hb(b, a.l, 2);
            case 2:
                if (a.m)
                    return b.return();
                if (_.F(Vh)) {
                    b.j = 3;
                    break
                }
                return hb(b, a.pa.dispatchEvent("rewardedSlotCanceled", 703, new MF(a.slotId,"publisher_ads")), 3);
            case 3:
                return hb(b, a.pa.dispatchEvent("rewardedSlotClosed", 703, new NF(a.slotId,"publisher_ads")), 5);
            case 5:
                a.va(),
                vn(b)
            }
        })
    }
    ;
    var JG = function(a, b, c) {
        Z.call(this, 697);
        this.slotId = a;
        this.pa = b;
        this.l = Ij(a, "completed");
        Uv(this, c)
    };
    _.O(JG, Z);
    JG.prototype.j = function() {
        var a = this;
        return gb(function(b) {
            if (1 == b.j)
                return hb(b, a.l, 2);
            if (3 != b.j)
                return a.m ? b.return() : hb(b, a.pa.dispatchEvent("rewardedSlotCompleted", 704, new OF(a.slotId,"publisher_ads")), 3);
            a.va();
            vn(b)
        })
    }
    ;
    var KG = function(a, b, c) {
        Z.call(this, 694);
        this.slotId = a;
        this.pa = b;
        Uv(this, c);
        this.o = Ij(a, "granted");
        this.l = Ij(a, "closed")
    };
    _.O(KG, Z);
    KG.prototype.j = function() {
        var a = this, b, c, d;
        return gb(function(e) {
            if (1 == e.j)
                return hb(e, a.o, 2);
            if (3 != e.j)
                return b = e.m,
                c = b.payload,
                a.m ? e.return() : hb(e, a.pa.dispatchEvent("rewardedSlotGranted", 702, new LF(a.slotId,"publisher_ads",null !== c && void 0 !== c ? c : null)), 3);
            _.F(Zt) ? (a.l.then(function() {
                return void a.va()
            }),
            d = (new Date).getTime(),
            $B(a, a.id, window, "pagehide", function() {
                Cf("gpt_rew_clo", function(f) {
                    sf(f);
                    G(f, "dms", (new Date).getTime() - d)
                }, 1)
            })) : a.va();
            vn(e)
        })
    }
    ;
    var LG = {
        width: "100%",
        height: "100%",
        left: "0",
        top: "0"
    }
      , MG = function(a, b, c, d, e) {
        Z.call(this, 693);
        this.H = a;
        this.G = e;
        this.C = Sv(this);
        this.l = X(this, b);
        this.o = X(this, c);
        Uv(this, d);
        this.B = new _.KA(this.H)
    };
    _.O(MG, Z);
    MG.prototype.j = function() {
        var a = this;
        if (!this.G.D) {
            var b = 0 === Oi() ? "rgba(1,1,1,0.5)" : "white";
            _.gh(this.o.value, _.u(Object, "assign").call(Object, {
                "background-color": b,
                opacity: "1",
                position: "fixed",
                margin: "0",
                padding: "0",
                "z-index": "2147483647",
                display: "block"
            }, LG));
            _.jm(this, _.TA(this.H.document, this.H));
            rc(this.l.value).postMessage(JSON.stringify({
                type: "rewarded",
                message: "visible"
            }), "*");
            if (this.H === this.H.top) {
                this.H.location.hash = "goog_rewarded";
                var c = new _.NA(this.B);
                _.OA(c);
                _.jm(this, function() {
                    _.PA(c);
                    "goog_rewarded" === a.H.location.hash && (a.H.location.hash = "")
                })
            }
            this.C.notify()
        }
    }
    ;
    var NG = function(a, b, c) {
        Z.call(this, 695);
        this.H = a;
        this.l = X(this, b);
        Uv(this, c)
    };
    _.O(NG, Z);
    NG.prototype.j = function() {
        if (this.H === this.H.top)
            var a = (0,
            E.I)(rc(this.l.value))
              , b = $B(this, 503, this.H, "hashchange", function(c) {
                lo(c.oldURL, "#goog_rewarded") && (a.postMessage(JSON.stringify({
                    type: "rewarded",
                    message: "back_button"
                }), "*"),
                b())
            })
    }
    ;
    var OG = function(a, b, c) {
        Z.call(this, 692);
        this.slotId = a;
        this.pa = b;
        this.C = Sv(this);
        this.l = X(this, c)
    };
    _.O(OG, Z);
    OG.prototype.j = function() {
        var a = this, b, c, d, e, f;
        return gb(function(g) {
            if (1 == g.j)
                return c = a.l.value,
                d = new ie,
                e = d.promise,
                f = d.resolve,
                a.pa.dispatchEvent("rewardedSlotReady", 701, new KF(a.slotId,"publisher_ads",f,null !== (b = c.payload) && void 0 !== b ? b : null)),
                hb(g, e, 2);
            if (a.m)
                return g.return();
            a.C.notify();
            a.va();
            vn(g)
        })
    }
    ;
    var PG = {
        width: "100%",
        height: "100%",
        left: "0",
        top: "0"
    }
      , QG = {
        width: "60%",
        height: "60%",
        transform: "translate(-50%, -50%)",
        left: "50%",
        top: "50%"
    }
      , RG = function(a, b) {
        Z.call(this, 691);
        var c = this;
        this.o = W(this);
        this.l = Sv(this);
        this.B = X(this, b);
        this.G = Ij(a, "prefetched");
        Ij(a, "ha_before_make_visible").then(function() {
            return void c.l.notify()
        })
    };
    _.O(RG, Z);
    RG.prototype.j = function() {
        var a = this, b;
        return gb(function(c) {
            if (1 == c.j) {
                if (a.l.D)
                    return c.return();
                _.gh(a.B.value, _.u(Object, "assign").call(Object, {
                    position: "absolute"
                }, 0 === Oi() ? QG : PG));
                return hb(c, a.G, 2)
            }
            b = c.m;
            if (a.m)
                return c.return();
            a.o.j(b);
            vn(c)
        })
    }
    ;
    var Nk = function(a, b, c, d, e, f) {
        Z.call(this, 688);
        if (4 === b) {
            this.l = new rd;
            _.Pu(this, this.l);
            var g = new RG(a,e);
            N(this.l, g);
            b = new OG(a,c,g.o);
            N(this.l, b);
            f = new MG(d,e,f,b.C,g.l);
            N(this.l, f);
            N(this.l, new NG(d,e,f.C));
            N(this.l, new KG(a,c,b.C));
            N(this.l, new IG(a,c,b.C));
            N(this.l, new JG(a,c,b.C))
        }
    };
    _.O(Nk, Z);
    Nk.prototype.j = function() {
        var a;
        null === (a = this.l) || void 0 === a ? void 0 : td(a)
    }
    ;
    var jk = function(a, b, c) {
        Z.call(this, 706);
        this.H = a;
        this.C = W(this);
        this.l = Y(this, b);
        Uv(this, c)
    };
    _.O(jk, Z);
    jk.prototype.j = function() {
        var a = this.l.value;
        this.C.ca(a ? Vc(a, this.H) : null)
    }
    ;
    var Jj = "3rd party ad content";
    var SG = function(a) {
        _.Ou.call(this);
        this.j = a;
        var b = a.slotId
          , c = a.size;
        this.A = "height" === a.Wd ? "fluid" : [c.width, c.height];
        this.Xa = Ug(b);
        this.gb = Jj
    };
    _.O(SG, _.Ou);
    SG.prototype.render = function() {
        var a = this.j
          , b = a.slotId
          , c = a.L
          , d = a.W
          , e = a.size
          , f = a.Fa
          , g = a.jb
          , h = a.Qd
          , k = a.isBackfill;
        a = a.qd;
        g && le(g, _.Fr(d), null !== h && void 0 !== h ? h : "", !1);
        Dv(Ef.N(), "5", (0,
        E.I)(x(c.O[b.getDomId()], 20)));
        b.dispatchEvent(pC, 801, {
            lc: 0 === f.kind ? f.ya : "",
            isBackfill: !!k
        });
        c = this.l();
        a && c && c.setAttribute("data-google-container-id", a);
        b.dispatchEvent(rC, 825, {
            size: e
        });
        return c
    }
    ;
    SG.prototype.loaded = function(a) {
        var b = this.j
          , c = b.slotId
          , d = b.pa;
        b = b.L;
        c.dispatchEvent(uC, 844, void 0);
        a && a.setAttribute("data-load-complete", !0);
        d.dispatchEvent("slotOnload", 710, new IF(c,"publisher_ads"));
        Dv(Ef.N(), "6", (0,
        E.I)(x(b.O[c.getDomId()], 20)))
    }
    ;
    SG.prototype.F = function() {
        var a;
        _.Ou.prototype.F.call(this);
        null === (a = this.j.jb) || void 0 === a ? void 0 : a.removeAttribute("data-google-query-id")
    }
    ;
    SG.prototype.o = function(a, b) {
        var c = this
          , d = TG(this, function() {
            return void c.loaded((0,
            E.I)(d.j))
        }, a, b);
        _.jm(this, function() {
            100 != d.status && (2 == d.R && (XC(d.F),
            d.R = 0),
            window.clearTimeout(d.G),
            d.G = -1,
            d.M = 3,
            d.m && (d.m.va(),
            d.m = null),
            d.B && d.j ? d.B.unobserve(d.j) : (_.md(window, "resize", d.U),
            _.md(window, "scroll", d.U)),
            d.l && d.j && d.l == _.Ir(d.j) && d.l.removeChild(d.j),
            d.j = null,
            d.l = null,
            d.B && (d.B.disconnect(),
            d.B = null),
            d.status = 100)
        });
        return d
    }
    ;
    var TG = function(a, b, c, d) {
        var e = a.j
          , f = e.L
          , g = e.md
          , h = e.isBackfill
          , k = e.Ac
          , l = e.qd
          , m = e.Yb
          , n = e.Kb
          , q = e.hb
          , r = e.Qa
          , z = Array.isArray(a.A) ? new _.Fg(Number(a.A[0]),Number(a.A[1])) : 1;
        e = e.kc;
        var A = a.Xa
          , I = a.gb;
        if (d)
            a = null;
        else {
            a = a.j;
            var H = a.Fa;
            H = 0 === H.kind ? H.ya : "";
            a = null == a.Qa ? gB(H, "", "sf") : "<startguard>" + H + "<endguard>"
        }
        c = {
            Hb: bg(c, 1) ? !!D(c, 1) : !h,
            Ib: bg(c, 2) ? !!D(c, 2) : !1
        };
        h = !!we().fifWin;
        H = CF ? CF : CF = ji();
        if (DF)
            var V = DF;
        else {
            V = iv(Xt);
            for (var T = [], ea = 0; ea < V.length; ea += 2)
                Mr(V[ea], V[ea + 1], T);
            V = DF = T.join("&")
        }
        T = _.bh(XF).hostpageLibraryTokens;
        return new dD({
            Hc: e,
            Xa: A,
            gb: I,
            content: a,
            size: z,
            Nd: !!k,
            dd: b,
            nd: null !== g && void 0 !== g ? g : void 0,
            permissions: c,
            xb: h,
            Be: H,
            Hd: V,
            sd: !1,
            hostpageLibraryTokens: T,
            Ba: Gf,
            Qa: null !== r && void 0 !== r ? r : void 0,
            uniqueId: (0,
            E.I)(l),
            Zb: (0,
            E.I)(f.Zb),
            Yb: null !== m && void 0 !== m ? m : void 0,
            Kb: null !== n && void 0 !== n ? n : void 0,
            wb: null !== d && void 0 !== d ? d : void 0,
            hb: null !== q && void 0 !== q ? q : void 0
        })
    };
    var Uj = function() {
        SG.apply(this, arguments)
    };
    _.O(Uj, SG);
    Uj.prototype.l = function() {
        var a = this.j
          , b = a.L
          , c = b.T;
        a = b.O[a.slotId.getDomId()];
        b = new ki;
        c = ti([b, c.Da(), null === a || void 0 === a ? void 0 : a.Da()]);
        c = SG.prototype.o.call(this, c);
        return (0,
        E.I)(c.j)
    }
    ;
    Uj.prototype.D = function() {
        return !1
    }
    ;
    var UG = function() {
        SG.apply(this, arguments)
    };
    _.O(UG, SG);
    var VG = function(a, b, c, d) {
        "string" !== typeof c && (b.width = String(c[0]),
        b.height = String(c[1]));
        var e = _.Af(774, function() {
            a.loaded(b);
            _.md(b, "load", e)
        });
        _.eb(b, "load", e);
        _.jm(a, function() {
            return _.md(b, "load", e)
        });
        d.appendChild(b)
    };
    var Tj = function() {
        UG.apply(this, arguments)
    };
    _.O(Tj, UG);
    Tj.prototype.l = function() {
        var a = this.j
          , b = a.Fa
          , c = a.kc
          , d = a.md;
        a = a.Kb;
        var e = Oj(this.Xa, this.gb, this.A, void 0);
        if (null === d || void 0 === d ? 0 : d.length)
            if (_.Lo) {
                d = _.y(d);
                for (var f = d.next(); !f.done; f = d.next())
                    e.sandbox.add(f.value)
            } else
                e.sandbox.add.apply(e.sandbox, _.yc(d));
        a && (e.allow = a);
        -1 == xa().indexOf("iPhone") && (e.srcdoc = Ta(yo));
        VG(this, e, this.A, c);
        _.Jf(653, function() {
            var g = b.ya, h, k, l, m, n, q, r;
            g = gB(g, "<script>var inDapIF=true,inGptIF=true;\x3c/script>", "sd");
            var z = null !== (k = null === (h = e.contentWindow) || void 0 === h ? void 0 : h.document) && void 0 !== k ? k : e.contentDocument;
            Ba() && z.open("text/html", "replace");
            bb(z, Vd(g, null));
            lo(null !== (n = null === (m = null === (l = e.contentWindow) || void 0 === l ? void 0 : l.location) || void 0 === m ? void 0 : m.href) && void 0 !== n ? n : "", "#") && (null === (r = null === (q = e.contentWindow) || void 0 === q ? void 0 : q.history) || void 0 === r ? void 0 : r.replaceState(null, "", "#" + Math.random()));
            z.close()
        }, !0);
        return e
    }
    ;
    Tj.prototype.D = function() {
        return !0
    }
    ;
    /*

Math.uuid.js (v1.4)
http://www.broofa.com
mailto:robert@broofa.com
Copyright (c) 2010 Robert Kieffer
Dual licensed under the MIT and GPL licenses.
*/
    var WG = "0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz".split("");
    var Sj = function() {
        UG.apply(this, arguments)
    };
    _.O(Sj, UG);
    Sj.prototype.l = function() {
        var a = this.j
          , b = a.Fa;
        a = a.kc;
        var c = Oj(this.Xa, this.gb, this.A, !0);
        Qj(c, b.He);
        VG(this, c, this.A, a);
        return c
    }
    ;
    Sj.prototype.D = function() {
        return !1
    }
    ;
    var Rj = function() {
        UG.apply(this, arguments)
    };
    _.O(Rj, UG);
    Rj.prototype.l = function() {
        var a = this.j
          , b = a.L
          , c = a.Fa.url
          , d = b.T;
        a = b.O[a.slotId.getDomId()];
        d = ti([d.Da(), null === a || void 0 === a ? void 0 : a.Da()]);
        var e = Oj(this.Xa, this.gb, this.A, void 0);
        Qj(e, c);
        UG.prototype.o.call(this, d, e);
        var f = function() {
            e.removeEventListener("load", f);
            XG(c)
        };
        e.addEventListener("load", f);
        ks(e, function() {
            return void XG(c)
        });
        return e
    }
    ;
    var XG = function(a) {
        var b = document.querySelectorAll("link[rel=webbundle][resources*='" + a + "']");
        if (1 === b.length) {
            var c = b[0];
            c.resources.remove(a);
            c.resources.length || b[0].remove()
        }
    };
    Rj.prototype.D = function() {
        return !1
    }
    ;
    var Hk = function(a, b, c, d, e, f, g, h, k, l, m, n, q, r, z, A, I, H, V, T, ea, K, P, S, ba) {
        Z.call(this, 680);
        this.slotId = a;
        this.J = b;
        this.L = c;
        this.pa = d;
        this.H = e;
        this.l = W(this);
        this.o = W(this);
        this.B = Sv(this);
        this.K = X(this, f);
        Uv(this, h);
        this.fa = X(this, k);
        this.G = X(this, l);
        this.ea = X(this, m);
        this.$ = X(this, n);
        Uv(this, T);
        this.P = Y(this, q);
        this.V = Y(this, r);
        this.Y = Y(this, z);
        this.ua = Y(this, A);
        this.Z = Y(this, I);
        this.qa = Y(this, H);
        this.Aa = Y(this, V);
        this.ta = Y(this, g);
        Uv(this, ea);
        Uv(this, K);
        this.na = X(this, P);
        Uv(this, S);
        this.sa = Y(this, ba)
    };
    _.O(Hk, Z);
    Hk.prototype.j = function() {
        var a = this
          , b = this.P.value
          , c = this.K.value;
        if (0 === c.kind) {
            var d = null === b || void 0 === b ? void 0 : Cb(b.D());
            d && (c.ya = d);
            if (null == c.ya)
                throw new Ev("invalid html");
        }
        b = Vj({
            id: this.$.value,
            W: document,
            slotId: this.slotId,
            J: this.J,
            L: this.L,
            pa: this.pa,
            size: this.ea.value,
            Fa: c,
            jb: this.fa.value,
            kc: this.G.value,
            Qd: this.V.value,
            Wd: this.Y.value,
            md: this.ua.value,
            Qa: null === b || void 0 === b ? void 0 : x(b, 2),
            isBackfill: this.Z.value,
            Ac: this.qa.value,
            qd: this.Aa.value,
            Yb: this.ta.value,
            Kb: this.na.value,
            hb: this.sa.value
        });
        _.Pu(this, b);
        var e = b.render();
        $B(this, this.id, this.H, "message", function(f) {
            e.contentWindow === f.source && a.slotId.dispatchEvent(Hj, 824, f)
        });
        this.B.notify();
        this.l.j(e);
        this.o.j(b.D())
    }
    ;
    var Pk = function(a, b, c, d) {
        Z.call(this, 863);
        this.l = b;
        this.bb = Number(a);
        this.o = X(this, c);
        this.B = X(this, d);
        this.G = YG(this)
    };
    _.O(Pk, Z);
    var YG = function(a) {
        return gb(function(b) {
            return b.return(new v.Promise(function(c) {
                try {
                    $B(a, a.id, a.l, "message", function(d) {
                        var e;
                        "asmreq" === (null === (e = d.data) || void 0 === e ? void 0 : e.type) && Pc(Hc(zA, d.data.payload), 1) === a.bb && c(d)
                    })
                } catch (d) {}
            }
            ))
        })
    };
    Pk.prototype.j = function() {
        var a = this, b, c, d, e, f, g;
        return gb(function(h) {
            if (1 == h.j)
                return b = Wj(a.l),
                c = a.o.value,
                d = a.B.value,
                hb(h, a.G, 2);
            e = h.m;
            var k = a.l
              , l = Wj(k);
            var m = c.getBoundingClientRect();
            var n = qc(k) ? Bg(c, k) : {
                x: 0,
                y: 0
            };
            k = n.x;
            n = n.y;
            m = new _.qs(n,k + m.right,n + m.bottom,k);
            k = new BA;
            k = w(k, 1, m.top);
            k = w(k, 3, m.bottom);
            k = w(k, 2, m.left);
            m = w(k, 4, m.right);
            k = new AA;
            k = w(k, 1, a.bb);
            k = w(k, 2, !d);
            m = Of(k, 3, m);
            m = w(m, 4, b);
            f = w(m, 5, l);
            g = {
                type: "asmres",
                payload: f.X()
            };
            e.ports[0].postMessage(g);
            vn(h)
        })
    }
    ;
    var xk = function(a, b, c, d, e, f, g, h, k, l, m) {
        Z.call(this, 699);
        this.W = a;
        this.slotId = b;
        this.l = c;
        this.$a = d;
        this.C = Sv(this);
        this.K = Y(this, e);
        this.V = X(this, f);
        this.B = X(this, g);
        this.P = X(this, h);
        this.o = Y(this, k);
        this.Y = X(this, l);
        this.G = X(this, m)
    };
    _.O(xk, Z);
    xk.prototype.j = function() {
        var a, b = this.V.value, c = this.B.value;
        c.style.width = "";
        c.style.height = "";
        if ("height" !== this.K.value) {
            var d = null !== (a = this.o.value) && void 0 !== a ? a : 0
              , e = this.P.value
              , f = this.Y.value
              , g = this.G.value
              , h = !1;
            switch (d) {
            case 1:
            case 2:
                h = this.W;
                var k = this.slotId
                  , l = this.l
                  , m = this.$a;
                var n = e.width
                  , q = e.height
                  , r = 0;
                var z = 0;
                var A = ag(l);
                A = _.y(A);
                for (var I = A.next(); !I.done; I = A.next()) {
                    var H = I.value;
                    Array.isArray(H) && (I = (0,
                    E.wa)(H[0]),
                    H = (0,
                    E.wa)(H[1]),
                    r < I && (r = I),
                    z < H && (z = H))
                }
                z = [r, z];
                r = z[0] < n;
                q = z[1] < q;
                r || q ? (z = n + "px",
                A = {
                    "max-height": "none",
                    "max-width": z,
                    padding: "0px",
                    width: z
                },
                q && (A.height = "auto"),
                hh(c, b, A),
                c = {},
                r && (r = fh(f.width),
                n > r && (c.width = z,
                c["max-width"] = z)),
                q && (c.height = "auto",
                c["max-height"] = "none"),
                Pr(c) ? c = !1 : (c["padding-" + ("ltr" === f.direction ? "left" : "right")] = "0px",
                _.gh(b, c),
                c = !0)) : c = !1;
                b: switch (A = e.width,
                n = h.defaultView || h.parentWindow || _.t,
                d) {
                case 2:
                    b = ih(b, n, A, f, m);
                    break b;
                case 1:
                    var V, T;
                    if (f = b.parentElement)
                        if (m = Gg(f)) {
                            H = m.width;
                            m = Mg(k, n.document);
                            q = (0,
                            E.I)(Pg(m, n));
                            r = q.position;
                            var ea = fh(q.width) || 0;
                            z = Pg(f, n);
                            I = "rtl" === z.direction ? "Right" : "Left";
                            m = I.toLowerCase();
                            n = "absolute" === r ? 0 : fh(z["padding" + I]);
                            z = fh(z["border" + I + "Width"]);
                            A = Math.max(Math.round((H - Math.max(ea, A)) / 2), 0);
                            H = {};
                            ea = 0;
                            var K = Cl(q);
                            K && (ea = K[4] * ("Right" === I ? -1 : 1),
                            I = K[3] || 1,
                            1 !== (K[0] || 1) || 1 !== I) && (K[0] = 1,
                            K[3] = 1,
                            H.transform = "matrix(" + K.join(",") + ")");
                            I = 0;
                            switch (r) {
                            case "fixed":
                                var P = null !== (V = Number(Qg(q.getPropertyValue(m)))) && void 0 !== V ? V : 0;
                                V = null !== (T = f.getBoundingClientRect().left) && void 0 !== T ? T : 0;
                                I = P - V;
                                break;
                            case "relative":
                                I = null !== (P = Number(Qg(q.getPropertyValue(m)))) && void 0 !== P ? P : 0;
                                break;
                            case "absolute":
                                H[m] = "0"
                            }
                            H["margin-" + m] = A - n - z - I - ea + "px";
                            _.gh(b, H);
                            b = !0
                        } else
                            b = !1;
                    else
                        b = !1;
                    break b;
                default:
                    b = !1
                }
                c || b ? (kh(h, k, l, d, e.width, e.height, "gpt_slotexp", g),
                h = !0) : h = !1;
                break;
            case 3:
                d = this.W,
                h = this.slotId,
                k = this.l,
                V = this.$a,
                l = e.width,
                T = e.height,
                P = fh(f.height) || 0,
                T >= P || "none" === f.display || "hidden" === f.visibility || !V || -12245933 === V.width || b.getBoundingClientRect().bottom <= V.height ? h = !1 : (V = {
                    height: T + "px"
                },
                hh(c, b, V),
                _.gh(b, V),
                kh(d, h, k, 3, l, T, "gpt_slotred", g),
                h = !0)
            }
            !h && _.F(Ss) && kh(this.W, this.slotId, this.l, 0, e.width, e.height, "gpt_pgbrk", g)
        }
        this.C.notify()
    }
    ;
    var lk = function(a, b, c, d) {
        Z.call(this, 720);
        this.format = a;
        this.B = b;
        this.C = W(this);
        this.l = Y(this, c);
        this.o = Y(this, d)
    };
    _.O(lk, Z);
    lk.prototype.j = function() {
        var a = this.o.value;
        if (null == a)
            Lv(this.C);
        else {
            var b = Math.round(.3 * this.B);
            2 !== this.format && 3 !== this.format || !Ov(this.l) || !tp(this.l.value, 12, !1) || 0 >= b || a <= b ? this.C.j(a) : this.C.j(b)
        }
    }
    ;
    var sk = function(a, b, c, d, e, f, g, h, k, l) {
        Z.call(this, 674);
        this.slotId = a;
        this.T = b;
        this.o = c;
        this.W = e;
        this.J = f;
        this.C = W(this);
        this.G = 2 === d || 3 === d;
        this.l = X(this, g);
        this.P = X(this, h);
        this.K = Y(this, k);
        this.B = Y(this, l)
    };
    _.O(sk, Z);
    sk.prototype.j = function() {
        var a = gg(this.T, this.o)
          , b = Lg(this.slotId, this.W) || Mj(this.l.value, Vg(this.slotId), a);
        this.P.value && !a && (b.style.display = "inline-block");
        this.G ? WD(this.J, this.slotId, function() {
            return void _.Hr(b)
        }) : _.jm(this, function() {
            return void _.Hr(b)
        });
        a = ZG(this);
        0 < a && (b.style.paddingTop = a + "px");
        this.C.j(b)
    }
    ;
    var ZG = function(a) {
        var b, c = a.l.value, d = null === (b = (0,
        E.I)(a.K).value) || void 0 === b ? void 0 : b.height;
        if (c && !(0,
        E.I)(a.B).value && d) {
            var e;
            var f = (null !== (e = D(a.o, 23)) && void 0 !== e ? e : D(a.T, 31)) ? Math.floor((c.offsetHeight - d) / 2) : 0
        } else
            f = 0;
        return f
    };
    var fk = function(a) {
        Z.call(this, 859);
        this.H = a;
        this.C = W(this)
    };
    _.O(fk, Z);
    fk.prototype.j = function() {
        this.C.j(!qc(this.H.top))
    }
    ;
    var vk = function(a, b) {
        Z.call(this, 698);
        this.H = a;
        this.C = W(this);
        this.l = X(this, b)
    };
    _.O(vk, Z);
    vk.prototype.j = function() {
        this.C.ca(Pg(this.l.value, this.H))
    }
    ;
    var kk = function(a, b, c) {
        Z.call(this, 813);
        this.Ca = a;
        this.l = W(this);
        this.B = Y(this, b);
        this.o = Y(this, c)
    };
    _.O(kk, Z);
    kk.prototype.j = function() {
        var a, b = this.B.value;
        if (!b || _.F(nu))
            this.l.j(!1);
        else if ($G.has(this.Ca))
            this.l.j(!1);
        else {
            $G.add(this.Ca);
            b = _.y(b);
            for (var c = b.next(); !c.done; c = b.next()) {
                var d = c.value;
                c = d.Ja;
                (d = d.he) && Dd(c, d, null !== (a = this.o.value) && void 0 !== a ? a : null)
            }
            this.l.j(!0)
        }
    }
    ;
    var $G = new v.Set;
    var Fk = function(a) {
        Z.call(this, 840);
        this.W = a;
        this.C = W(this)
    };
    _.O(Fk, Z);
    Fk.prototype.j = function() {
        var a;
        var b = void 0 === b ? window.navigator.userAgent : b;
        b = (b = b.match(/Chrome\/([0-9]+)/)) && 92 > Number(b[1]) ? "conversion-measurement" : "attribution-reporting";
        (null === (a = this.W.featurePolicy) || void 0 === a ? 0 : (C = a.features(),
        _.u(C, "includes")).call(C, b)) ? this.C.j(b) : this.C.j("")
    }
    ;
    var Jk = function(a, b, c, d) {
        Z.call(this, 934);
        this.H = a;
        this.slotId = b;
        Uv(this, c);
        this.l = Y(this, d)
    };
    _.O(Jk, Z);
    Jk.prototype.j = function() {
        var a = this;
        mC(this.slotId, Hj, function(b) {
            b = b.detail;
            var c = void 0;
            try {
                if (c = JSON.parse(b.data),
                !c || "gpi-uoo" !== c.googMsgType)
                    return
            } catch (f) {
                return
            }
            b = c;
            c = a.l.value;
            var d = new Pq;
            d = w(d, 1, b.userOptOut ? "1" : "0");
            d = w(w(d, 2, 2147483647), 3, "/");
            d = w(d, 4, a.H.location.hostname);
            var e = new Dw(a.H);
            Gw(e, "__gpi_opt_out", d, c);
            if (b.userOptOut || b.clearAdsData)
                Hw(e, "__gads", c),
                Hw(e, "__gpi", c)
        })
    }
    ;
    var aH = function(a, b, c, d, e, f, g) {
        Z.call(this, 758);
        this.slotId = a;
        this.L = b;
        this.J = c;
        this.Oa = d;
        this.H = e;
        this.W = f;
        this.l = Y(this, g)
    };
    _.O(aH, Z);
    aH.prototype.j = function() {
        var a = this;
        return gb(function(b) {
            if (1 == b.j) {
                var c, d = Mg(a.slotId, a.W);
                d && le(d, a.H, null !== (c = a.l.value) && void 0 !== c ? c : "", !0);
                Dv(a.Oa, "5", (0,
                E.I)(x(a.L.O[a.slotId.getDomId()], 20)));
                return hb(b, a.slotId.dispatchEvent(pC, 801, {
                    lc: null,
                    isBackfill: !1
                }), 2)
            }
            if (_.ZD(a.J, a.slotId) && !Wg(a.slotId, a.W)) {
                var e = a.L;
                c = e.T;
                e = e.O[a.slotId.getDomId()];
                (null !== (d = D(e, 10)) && void 0 !== d ? d : D(c, 11)) && Dj(a.slotId, a.W, e, c)
            }
            return hb(b, a.slotId.dispatchEvent(rC, 825, {
                isEmpty: !0
            }), 0)
        })
    }
    ;
    var Sk = function(a, b, c, d, e) {
        Z.call(this, 721);
        this.H = a;
        this.G = Y(this, b);
        this.o = X(this, c);
        this.l = X(this, d);
        this.B = X(this, e)
    };
    _.O(Sk, Z);
    Sk.prototype.j = function() {
        var a = this, b, c, d, e = this.G.value, f = null === (b = null === e || void 0 === e ? void 0 : x(e, 1)) || void 0 === b ? void 0 : b.toUpperCase();
        e = null === (c = null === e || void 0 === e ? void 0 : x(e, 2)) || void 0 === c ? void 0 : c.toUpperCase();
        if (f && e) {
            var g = this.o.value
              , h = this.l.value
              , k = this.B.value
              , l = k.style.height
              , m = k.style.width
              , n = k.style.display
              , q = k.style.position
              , r = ns(g.id + "_top", f)
              , z = ns(g.id + "_bottom", e);
            _.gh(z, {
                position: "relative",
                top: "calc(100vh - 48px)"
            });
            k.appendChild(r);
            k.appendChild(z);
            _.gh(h, {
                position: "absolute",
                top: "24px",
                clip: "rect(0, auto, auto, 0)",
                width: "100vw",
                height: "calc(100vh - 48px)"
            });
            _.gh(g, {
                position: "fixed",
                top: "0",
                height: "100vh"
            });
            _.gh(k, {
                position: "relative",
                display: (null === (d = this.H.screen.orientation) || void 0 === d ? 0 : d.angle) ? "none" : "block",
                width: "100vw",
                height: "100vh"
            });
            $B(this, 722, this.H, "orientationchange", function() {
                var A;
                (null === (A = a.H.screen.orientation) || void 0 === A ? 0 : A.angle) ? _.gh(k, {
                    display: "none"
                }) : _.gh(k, {
                    display: "block"
                })
            });
            _.jm(this, function() {
                _.Hr(r);
                _.Hr(z);
                k.style.position = q;
                k.style.height = l;
                k.style.width = m;
                k.style.display = n
            })
        }
    }
    ;
    var Ok = function(a, b, c, d, e) {
        e = void 0 === e ? Yj : e;
        Z.call(this, 783);
        var f = this;
        this.slotId = a;
        this.W = c;
        this.pa = d;
        this.K = e;
        this.G = !1;
        this.l = null;
        this.B = this.o = -1;
        this.V = _.Fo(function() {
            f.pa.dispatchEvent("impressionViewable", 715, new GF(f.slotId,"publisher_ads"))
        });
        this.Y = Go(function() {
            f.pa.dispatchEvent("slotVisibilityChanged", 716, new HF(f.slotId,"publisher_ads",f.B))
        }, 200);
        this.P = X(this, b);
        var g = new ik;
        Gj(this.slotId, uC).then(function() {
            return void g.notify()
        });
        Uv(this, g)
    };
    _.O(Ok, Z);
    Ok.prototype.j = function() {
        var a = this
          , b = this.K(_.Af(this.id, function(c) {
            c = _.y(c);
            for (var d = c.next(); !d.done; d = c.next())
                a.o = 100 * d.value.intersectionRatio,
                _.u(Number, "isFinite").call(Number, a.o) && bH(a)
        }));
        b.observe(this.P.value);
        $B(this, this.id, this.W, "visibilitychange", function() {
            bH(a)
        });
        _.jm(this, function() {
            b.disconnect()
        })
    }
    ;
    var bH = function(a) {
        var b = !FA(a.W);
        cH(a, 50 <= a.o && b);
        b = Math.floor(b ? a.o : 0);
        if (0 > b || 100 < b || b === a.B ? 0 : -1 !== a.B || 0 !== b)
            a.B = b,
            a.Y()
    }
      , cH = function(a, b) {
        a.G || (b ? null === a.l && (a.l = setTimeout(function() {
            FA(a.W) || (a.V(),
            a.G = !0);
            a.l = null
        }, 1E3)) : null !== a.l && (clearTimeout(a.l),
        a.l = null))
    };
    var pk = function(a, b) {
        Z.call(this, 666);
        this.o = a;
        this.l = W(this);
        this.B = Y(this, b)
    };
    _.O(pk, Z);
    pk.prototype.j = function() {
        var a = new qk;
        Ov(this.B) && (w(a, 2, this.B.value),
        w(a, 3, 1));
        if (this.o) {
            var b = [this.o, a]
              , c = new qk;
            b = _.y(b);
            for (a = b.next(); !a.done; a = b.next())
                a = a.value,
                bg(a, 1) && w(c, 1, x(a, 1)),
                bg(a, 2) && w(c, 2, x(a, 2)),
                bg(a, 3) && w(c, 3, id(a, 3));
            a = c
        }
        c = this.l;
        b = c.ca;
        a = bg(a, 2) ? bg(a, 3) && 0 !== Oi() ? (0,
        E.wa)(x(a, 2)) * (0,
        E.wa)(id(a, 3)) : x(a, 2) : null;
        b.call(c, a)
    }
    ;
    var wk = function(a, b, c, d) {
        Z.call(this, 666);
        this.C = W(this);
        Uv(this, a);
        this.l = X(this, b);
        this.o = Y(this, d);
        this.B = Y(this, c)
    };
    _.O(wk, Z);
    wk.prototype.j = function() {
        var a, b = this.o.value, c = null !== (a = this.B.value) && void 0 !== a ? a : void 0;
        if (null == b || 0 > b || 0 === c)
            this.C.j(!1);
        else {
            var d = this.l.value;
            Rg(d) ? dH(this, b, c, d) : this.C.j(!1)
        }
    }
    ;
    var dH = function(a, b, c, d) {
        var e = Zj(b + "%", _.Af(291, function(f, g) {
            f = _.y(f);
            for (var h = f.next(); !h.done; h = f.next())
                if (h = h.value,
                !(0 >= h.intersectionRatio)) {
                    g.unobserve(h.target);
                    a.C.j(!0);
                    break
                }
        }));
        null != c && setTimeout(function() {
            a.C.j(!0);
            e.disconnect()
        }, c);
        e.observe(d);
        _.jm(a, function() {
            e.disconnect()
        })
    };
    var uk = function(a, b, c, d, e) {
        Z.call(this, 664);
        this.slotId = a;
        this.$a = b;
        this.J = c;
        this.C = Sv(this);
        this.o = Y(this, d);
        this.l = Y(this, e)
    };
    _.O(uk, Z);
    uk.prototype.j = function() {
        var a = this, b, c = null !== (b = this.l.value) && void 0 !== b ? b : 0;
        if (_.F(Ht) || 0 < c) {
            var d = document;
            c = EA(d);
            if (FA(d) && c && (0 < Vl(this.J, this.slotId) || !eH(this)) && c) {
                var e = $B(this, 324, d, c, function() {
                    FA(d) || (e && e(),
                    a.C.notify())
                });
                if (e)
                    return
            }
        }
        this.C.notify()
    }
    ;
    var eH = function(a) {
        var b = a.o.value;
        if (null == b)
            return !1;
        try {
            var c = null !== top && void 0 !== top ? top : void 0;
            if (void 0 === c)
                return !0;
            var d = Ll(null === c || void 0 === c ? void 0 : c.document, c).y
              , e = d + a.$a.height;
            return b.y >= d && b.y <= e
        } catch (f) {
            return !0
        }
    };
    var Ak = function(a, b) {
        Z.call(this, 762);
        this.C = W(this);
        this.o = X(this, a);
        this.l = X(this, b)
    };
    _.O(Ak, Z);
    Ak.prototype.j = function() {
        var a = this.l.value.kind
          , b = 0;
        1 === a ? b = 5 : 2 === a ? b = 6 : this.o.value && (b = 1);
        this.C.j(b)
    }
    ;
    var ok = function(a, b, c, d, e, f) {
        Z.call(this, 669);
        this.T = a;
        this.O = b;
        this.H = c;
        this.C = W(this);
        this.l = Y(this, d);
        this.o = Y(this, e);
        this.B = Y(this, f)
    };
    _.O(ok, Z);
    ok.prototype.j = function() {
        var a;
        if (!(a = Ov(this.o))) {
            a = this.O;
            var b = this.H;
            b = void 0 === b ? window : b;
            a = !!(hi(Qs) || a && bg(a, 16) && Ce("google_range_debug", b))
        }
        a ? this.C.j(!0) : this.C.j(!!(Jh(this.l.value) && (D(this.O, 12) || D(this.T, 13)) || this.B.value))
    }
    ;
    var Dk = function(a, b, c, d) {
        Z.call(this, 828);
        this.slotId = a;
        this.L = b;
        this.C = W(this);
        this.l = Y(this, c);
        this.o = Y(this, d)
    };
    _.O(Dk, Z);
    Dk.prototype.j = function() {
        var a = this, b, c, d, e, f, g, h, k, l, m, n;
        return gb(function(q) {
            c = a.L;
            d = c.T;
            e = c.O;
            f = e[a.slotId.getDomId()];
            g = a.o.value;
            h = null;
            k = null !== (b = null === f || void 0 === f ? void 0 : f.Da()) && void 0 !== b ? b : null;
            l = d.Da();
            (null === k || void 0 === k ? 0 : bg(k, 4)) ? h = D(k, 4) : (null === l || void 0 === l ? 0 : bg(l, 4)) ? h = D(l, 4) : null != g && (h = g);
            m = String(h);
            null == g || g === h || a.l.value || M(pi(), lF(m, String(g)));
            a.l.value || Cf("gpt_sf_r", function(r) {
                sf(r);
                G(r, "GAM", String(g));
                G(r, "Final", m)
            });
            n = _.F(li) || a.l.value || h || null == h;
            if (!n)
                return Lv(a.C),
                q.return();
            a.C.j(DC());
            vn(q)
        })
    }
    ;
    var Bk = function(a, b, c, d, e, f) {
        Z.call(this, 719);
        this.T = a;
        this.B = b;
        this.C = W(this);
        this.o = X(this, c);
        this.l = Y(this, d);
        this.G = Y(this, f)
    };
    _.O(Bk, Z);
    Bk.prototype.j = function() {
        var a = this.l.value
          , b = this.o.value;
        if (1 === b || 5 === b) {
            if (a = this.G.value,
            b = new ki,
            a = w(b, 3, a),
            D(ti([a, this.T.Da(), this.B.Da()]), 3)) {
                this.C.j(iD);
                return
            }
        } else {
            if (a = 0 === b && a)
                a = $r(),
                a = !(!a["allow-top-navigation-by-user-activation"] || !a["allow-popups-to-escape-sandbox"]);
            if (a) {
                this.C.j(iD);
                return
            }
        }
        Lv(this.C)
    }
    ;
    var rk = function(a, b, c, d, e, f, g, h, k) {
        Z.call(this, 681);
        this.P = a;
        this.ea = b;
        this.K = c;
        this.window = d;
        this.ma = W(this);
        this.o = W(this);
        this.Eb = W(this);
        this.l = hi(Qs).split(",");
        this.B = iv(Rs);
        this.Ha = bg(b, 16) ? Yb(b, Fi, 16) : null;
        this.G = Be("google_range_debug", this.window);
        this.V = Y(this, e);
        this.fa = Y(this, f);
        this.Z = Y(this, g);
        this.Y = X(this, h);
        this.$ = X(this, k)
    };
    _.O(rk, Z);
    rk.prototype.j = function() {
        var a;
        if (a = !!(this.l.length || this.Ha && this.G)) {
            var b;
            b: if (this.l.length) {
                if (this.B.length && (a = this.P.split("/"),
                !_.u(this.B, "includes").call(this.B, a[a.length - 1]))) {
                    a = !1;
                    break b
                }
                a = !0
            } else
                a = !1;
            var c = a;
            a = c ? fH(this) : null;
            if (c && a) {
                c = this.$.value;
                var d = Gg(c.parentElement);
                d = null !== (b = null === d || void 0 === d ? void 0 : d.width) && void 0 !== b ? b : 0;
                b = "p" === this.l[0];
                var e = Number(this.l[0]);
                if (b = "f" === this.l[0] ? this.K : e && 0 < e ? e : b ? Math.min(d, this.K) : null) {
                    e = a.width;
                    var f = a.height
                      , g = this.l[1]
                      , h = Number(g);
                    e = "ratio" === g && e ? Math.floor(f / e * b) : h && 0 < h ? f * h : f;
                    gH(this, b, e, {
                        kind: 0,
                        ya: hH(b, e, "<p>Requested size:" + a.width + "x" + a.height + "</p>")
                    }, b <= d ? 1 : 2, c);
                    a = !0
                } else
                    a = !1
            } else
                a = !1;
            if (!a)
                a: if (this.Ha && this.G) {
                    a = ak(this.Ha, this.window);
                    c = bk(this.Ha, this.window);
                    d = ck(this.Ha);
                    b = dk(this.Ha);
                    switch (this.G) {
                    case "max":
                        e = a;
                        f = c;
                        break;
                    case "min":
                        e = d;
                        f = b;
                        break;
                    case "banner":
                        e = a;
                        f = 90 > c ? c : 90 < b ? b : 90;
                        break;
                    case "skyscraper":
                        e = 90 > a ? a : 90 < d ? d : 90;
                        f = c;
                        break;
                    default:
                        a = !1;
                        break a
                    }
                    gH(this, e, f, {
                        kind: 0,
                        ya: hH(e, f, "<p>Minimum size:" + d + "x" + b + "</p><p>Maximum size:" + (a + "x" + c + "</p><div id=toowide style=\"display:none; background:#faa\">Slot does not fit horizontally<script>new IntersectionObserver((e) => {toowide.style.display =   (e[e.length-1].boundingClientRect.width >    e[e.length-1].intersectionRect.width) ? 'block' : 'none';},{threshold:1}).observe(document.body);\x3c/script></div>"))
                    });
                    a = !0
                } else
                    a = !1
        }
        if (!a) {
            a = this.fa.value;
            if (null == a)
                throw new Hi("Missing 'width'.");
            c = this.Z.value;
            if (null == c)
                throw new Hi("Missing 'height'.");
            gH(this, a, c, this.Y.value)
        }
    }
    ;
    var fH = function(a) {
        a = ag(a.ea)[0];
        return Array.isArray(a) && a.every(function(b) {
            return "number" === typeof b
        }) ? new _.Fg(a[0],a[1]) : null
    }
      , hH = function(a, b, c) {
        return '<html><body style="height:' + (b - 2 + "px;width:" + (a - 2 + 'px;background-color:#ddd;color:#000;border:1px solid #f00;">')) + c + ("<p>Rendered size:" + a + "x" + b + "</p></body></html>")
    }
      , gH = function(a, b, c, d, e, f) {
        e = void 0 === e ? a.V.value : e;
        a.o.j(new _.Fg(b,c));
        a.ma.j(d);
        a.Eb.ca(e);
        f && _.Cs(f, "opacity", .5)
    };
    var mk = function(a, b, c, d, e, f, g) {
        Z.call(this, 673);
        this.slotId = a;
        this.jb = b;
        this.B = c;
        this.o = d;
        this.W = e;
        this.l = f;
        this.J = g;
        this.C = W(this)
    };
    _.O(mk, Z);
    mk.prototype.j = function() {
        var a = this, b, c;
        return gb(function(d) {
            if (1 == d.j) {
                if (a.jb) {
                    iH(a, a.jb);
                    a.C.j(a.jb);
                    d.j = 0;
                    return
                }
                if (fg(a.l)) {
                    a.C.j(jH(a));
                    d.j = 0;
                    return
                }
                return hb(d, Gj(a.slotId, nC), 4)
            }
            b = d.m;
            c = b.detail;
            if (a.m)
                return d.return();
            iH(a, c);
            a.C.j(c);
            vn(d)
        })
    }
    ;
    var jH = function(a) {
        var b = _.Lj("INS");
        b.id = a.B;
        _.gh(b, {
            display: "none"
        });
        a.W.documentElement.appendChild(b);
        var c = function() {
            return void _.Hr(b)
        };
        2 === a.l || 3 === a.l ? WD(a.J, a.slotId, c) : _.jm(a, c);
        return b
    }
      , iH = function(a, b) {
        if (2 !== a.l && 3 !== a.l) {
            for (var c = _.y(_.u(Array, "from").call(Array, b.childNodes)), d = c.next(); !d.done; d = c.next())
                d = d.value,
                1 === d.nodeType && d.id !== a.o && _.Hr(d);
            b.style.display = ""
        }
    };
    var tk = function(a) {
        Z.call(this, 676);
        this.C = W(this);
        this.l = X(this, a)
    };
    _.O(tk, Z);
    tk.prototype.j = function() {
        var a = Dg(this.l.value);
        this.C.j(a)
    }
    ;
    var Ck = function(a, b, c) {
        Z.call(this, 807);
        this.H = a;
        this.C = Sv(this);
        this.l = Y(this, b);
        this.o = Y(this, c)
    };
    _.O(Ck, Z);
    Ck.prototype.j = function() {
        var a = _.bd(hu);
        if (0 !== a) {
            var b = this.l.value;
            if (b && !this.o.value) {
                var c = ps(this.H);
                b = new zD(c,b);
                1 === a ? b = AD(b) : (b = cs("google_ads_top_frame_ctrl", b.j),
                b = !(!b || !b.contentWindow));
                b || this.R(new Hi("Cannot create top window frame: " + a))
            }
        }
        this.C.notify()
    }
    ;
    var yk = function(a) {
        Z.call(this, 881);
        this.C = W(this);
        this.l = Y(this, a)
    };
    _.O(yk, Z);
    yk.prototype.j = function() {
        var a;
        if (_.F(ju) || !this.l.value)
            Lv(this.C);
        else {
            for (var b = this.l.value, c = {}, d = _.y(Wb(b, Xq, 7)), e = d.next(); !e.done; e = d.next())
                e = e.value,
                c[Gm(e, 1)] = JSON.parse(Gm(e, 2));
            (d = Yb(b, Wq, 6)) && (c["https://googleads.g.doubleclick.net"] = d.toJSON());
            this.C.j({
                seller: "https://pubads.g.doubleclick.net",
                decisionLogicUrl: Gm(b, 1),
                trustedScoringSignalsUrl: Gm(b, 2),
                interestGroupBuyers: $i(b, 3),
                additionalBids: [],
                auctionSignals: JSON.parse(Gm(b, 4) || "{}"),
                sellerSignals: (null === (a = Yb(b, Yq, 5)) || void 0 === a ? void 0 : a.toJSON()) || [],
                perBuyerSignals: c
            })
        }
    }
    ;
    yk.prototype.A = function() {
        Lv(this.C)
    }
    ;
    var kH = navigator
      , zk = function(a, b, c, d) {
        Z.call(this, 882);
        this.ma = W(this);
        this.o = W(this);
        this.l = Y(this, a);
        this.B = Y(this, b);
        this.G = Y(this, c);
        this.K = Y(this, d)
    };
    _.O(zk, Z);
    var lH = function(a, b, c) {
        var d, e, f, g, h, k, l, m, n = "https://googleads.g.doubleclick.net/td/auctionwinner?status=nowinner&isContextualWinner=1", q = null === (e = null === (d = a.l.value) || void 0 === d ? void 0 : Yb(d, Yq, 5)) || void 0 === e ? void 0 : e.getEscapedQemQueryId();
        q && (n += "&qqid=" + encodeURIComponent(q));
        (q = null === (g = null === (f = a.l.value) || void 0 === f ? void 0 : Yb(f, Yq, 5)) || void 0 === g ? void 0 : Gm(g, 6)) && (n += "&xfpQid=" + encodeURIComponent(q));
        if (null === (k = null === (h = a.l.value) || void 0 === h ? void 0 : Yb(h, Yq, 5)) || void 0 === k ? 0 : tp(k, 4))
            n += "&is_plog=1";
        if (null === (m = null === (l = a.l.value) || void 0 === l ? void 0 : Yb(l, Yq, 5)) || void 0 === m ? 0 : tp(m, 7))
            n += "&hasXfpAds=1";
        n += "&applied_timeout_ms=" + c + "&duration_ms=" + Math.round(b);
        Im(n)
    }
      , mH = function(a) {
        a.ma.ca(a.G.value);
        a.o.ca(a.K.value)
    };
    zk.prototype.j = function() {
        var a = this, b, c, d, e, f, g, h, k, l, m, n;
        return gb(function(q) {
            if (1 == q.j) {
                if (_.F(ju) || !a.B.value)
                    return mH(a),
                    q.return();
                f = null === (b = a.l.value) || void 0 === b ? void 0 : b.getWidth();
                g = null === (c = a.l.value) || void 0 === c ? void 0 : c.getHeight();
                if (!f || !g)
                    return mH(a),
                    q.return();
                h = performance.now();
                k = (null === (d = a.l.value) || void 0 === d ? void 0 : Pc(d, 8)) || 1E3;
                return hb(q, v.Promise.race([null === (e = kH.runAdAuction) || void 0 === e ? void 0 : e.call(kH, a.B.value), os(k)]), 2)
            }
            l = q.m;
            m = performance.now() - h;
            n = "timeout" === l;
            Cf("run_ad_auction_stats", function(r) {
                sf(r);
                G(r, "duration_ms", m);
                G(r, "applied_timeout_ms", k);
                G(r, "timed_out", n)
            }, 1);
            if (!l || n)
                return lH(a, m, n ? k : 0),
                mH(a),
                q.return();
            a.ma.j({
                kind: 2,
                He: l
            });
            a.o.j(new _.Fg(f,g));
            vn(q)
        })
    }
    ;
    zk.prototype.A = function() {
        mH(this)
    }
    ;
    var Ek = function(a) {
        Z.call(this, 839);
        this.C = Sv(this);
        this.l = Y(this, a)
    };
    _.O(Ek, Z);
    Ek.prototype.j = function() {
        var a = this, b, c, d, e;
        return gb(function(f) {
            switch (f.j) {
            case 1:
                if (_.F(ku) || !Ov(a.l))
                    return a.C.notify(),
                    f.return();
                b = a.l.value;
                c = Yb(b, Sq, 3);
                if (null === c || void 0 === c || !tp(c, 11)) {
                    f.j = 2;
                    break
                }
                d = performance.now();
                e = Pc(c, 12);
                f.F = 3;
                return hb(f, new v.Promise(function(g, h) {
                    var k = "https://pubads.g.doubleclick.net/td/sts?render_urls=";
                    bg(c, 13) && (k += Gm(c, 13));
                    var l = new XMLHttpRequest;
                    l.open("GET", k);
                    l.timeout = e;
                    l.onload = function() {
                        200 <= l.status && 300 > l.status ? (Cf("gpt_td_sts_rpc", function(m) {
                            sf(m);
                            G(m, "timeout_ms", e);
                            G(m, "duration_ms", Math.round(performance.now() - d));
                            G(m, "url_count", Pc(c, 14))
                        }),
                        g()) : h(Error("status: " + l.status.toString() + " " + l.statusText))
                    }
                    ;
                    l.onerror = function() {
                        h(Error("status: " + l.status.toString() + " " + l.statusText))
                    }
                    ;
                    l.ontimeout = function() {
                        Cf("gpt_td_sts_rpc_timeout", function(m) {
                            sf(m);
                            G(m, "timeout_ms", e);
                            G(m, "duration_ms", Math.round(performance.now() - d));
                            G(m, "url_count", Pc(c, 14))
                        });
                        g()
                    }
                    ;
                    l.send()
                }
                ), 5);
            case 5:
                jb(f, 2);
                break;
            case 3:
                kb(f),
                Cf("gpt_td_sts_rpc_error", function(g) {
                    sf(g);
                    G(g, "timeout_ms", e);
                    G(g, "duration_ms", Math.round(performance.now() - d));
                    G(g, "url_count", Pc(c, 14))
                }, 1);
            case 2:
                a.C.notify(),
                vn(f)
            }
        })
    }
    ;
    Ek.prototype.A = function() {
        this.C.notify()
    }
    ;
    var nH = function() {
        this.j = new v.Map
    }
      , oH = function(a, b) {
        var c;
        b && (null === (c = a.j.get(b)) || void 0 === c ? void 0 : c.va(),
        a.j.delete(b))
    }
      , qH = function(a, b, c, d, e, f, g, h) {
        var k = document
          , l = window;
        oH(a, b);
        mC(b, rC, pH);
        h && _.F(Gt) ? (f = new rd,
        c = new aH(b,d,c,Ef.N(),l,k,e.nc),
        N(f, c),
        a.j.set(b, f),
        _.jm(b, function() {
            return void oH(a, b)
        }),
        td(f)) : (c = Vk(b, c, d, e, k, f, g),
        a.j.set(b, c),
        _.jm(b, function() {
            return void oH(a, b)
        }),
        td(c))
    }
      , pH = _.Fo(function() {
        return void ah("gpt-first-ad-render")
    });
    var rH = function(a, b, c, d, e, f, g) {
        Z.call(this, 920);
        this.O = b;
        this.Ca = f;
        this.J = g;
        this.C = W(this);
        this.o = X(this, a);
        this.G = Y(this, c);
        this.B = Y(this, d);
        this.K = Y(this, e);
        this.l = _.qf[148] && _.F(Vs)
    };
    _.O(rH, Z);
    rH.prototype.j = function() {
        var a, b, c, d, e, f, g, h, k, l, m, n, q, r, z, A, I, H = window.pbjs;
        Cf("hbm_bca", function(K) {
            sf(K);
            var P = (0,
            E.I)(H), S, ba, ma, ca = new v.Map, Za = 0, sb = 0;
            P = _.y(_.u(Object, "entries").call(Object, null !== (S = P.bidderSettings) && void 0 !== S ? S : {}));
            for (S = P.next(); !S.done; S = P.next()) {
                var Ha = _.y(S.value);
                S = Ha.next().value;
                Ha = Ha.next().value;
                try {
                    var Hb = null === (ba = Ha.bidCpmAdjustment) || void 0 === ba ? void 0 : ba.call(Ha, 1, {
                        bidderCode: S
                    });
                    void 0 !== Hb && (ca.set(S, Hb),
                    Za++,
                    sb += Hb)
                } catch (Nb) {
                    ca.set(S, "err_" + (null === (ma = Nb) || void 0 === ma ? void 0 : ma.message))
                }
            }
            ca.set("acnt", Za);
            ca.set("aavg", Za ? sb / Za : 0);
            ba = _.y(_.u(ca, "entries").call(ca));
            for (ma = ba.next(); !ma.done; ma = ba.next())
                ca = _.y(ma.value),
                ma = ca.next().value,
                ca = ca.next().value,
                G(K, ma, ca)
        }, H ? _.bd(Us) : 0);
        if (!_.F(Ys) && !_.F(Xs))
            if (this.l)
                null === (b = null === (a = window.console) || void 0 === a ? void 0 : a.log) || void 0 === b ? void 0 : b.call(a, "[GPT] metadata debug: disabled by configuration");
            else {
                Lv(this.C);
                return
            }
        if (_.F(Xs) && (null === (d = null === (c = this.G.value) || void 0 === c ? void 0 : c[this.Ca]) || void 0 === d || !d.le))
            if (this.l)
                null === (f = null === (e = window.console) || void 0 === e ? void 0 : e.log) || void 0 === f ? void 0 : f.call(e, "[GPT] metadata debug: collection not enabled");
            else {
                Lv(this.C);
                return
            }
        if (null === H || void 0 === H || !H.libLoaded)
            if (this.l)
                null === (h = null === (g = window.console) || void 0 === g ? void 0 : g.log) || void 0 === h ? void 0 : h.call(g, "[GPT] metadata debug: prebid not loaded");
            else {
                Lv(this.C);
                return
            }
        if ("function" !== typeof (null === H || void 0 === H ? void 0 : H.getEvents))
            if (pi().error(rF()),
            this.l)
                null === (l = null === (k = window.console) || void 0 === k ? void 0 : k.log) || void 0 === l ? void 0 : l.call(k, "[GPT] metadata debug: events unavailable");
            else {
                Lv(this.C);
                return
            }
        var V = sH(this, H);
        if (V)
            if (this.l) {
                null === (n = null === (m = window.console) || void 0 === m ? void 0 : m.group) || void 0 === n ? void 0 : n.call(m, "[GPT] metadata debug for " + this.o.value.length + " slots");
                for (var T = 0; T < this.o.value.length; T++) {
                    var ea = Bb(Ap(V[T], eq), 3);
                    null === (r = null === (q = window.console) || void 0 === q ? void 0 : q.log) || void 0 === r ? void 0 : r.call(q, "[GPT] slot " + this.o.value[T] + ": http://go/metadata-debug/" + ea)
                }
                null === (z = window.console) || void 0 === z ? void 0 : z.groupEnd();
                Lv(this.C)
            } else
                this.C.j(V);
        else
            this.l ? (null === (I = null === (A = window.console) || void 0 === A ? void 0 : A.log) || void 0 === I ? void 0 : I.call(A, "[GPT] metadata debug: no bidding data"),
            Lv(this.C)) : this.C.j([])
    }
    ;
    rH.prototype.M = function(a) {
        this.A(a)
    }
    ;
    rH.prototype.A = function(a) {
        pi().error(sF(a.message));
        Lv(this.C)
    }
    ;
    var sH = function(a, b) {
        var c = b ? (0,
        E.I)(b.getEvents)() : []
          , d = c.filter(function(f) {
            var g = f.args;
            return "auctionEnd" === f.eventType && g.auctionId
        })
          , e = !1;
        b = a.o.value.map(function(f) {
            var g, h, k, l = new cq, m = function(ca) {
                return ca === f.getDomId() || ca === f.getAdUnitPath()
            }, n = null !== (g = tH.get(f)) && void 0 !== g ? g : 0, q = null !== (h = d.filter(function(ca) {
                var Za, sb, Ha;
                return Number(null === (Za = ca.args) || void 0 === Za ? void 0 : Za.timestamp) > n && (null === (Ha = null === (sb = ca.args) || void 0 === sb ? void 0 : sb.adUnitCodes) || void 0 === Ha ? void 0 : _.u(Ha, "find").call(Ha, m))
            })) && void 0 !== h ? h : [];
            if (!q.length)
                return l;
            var r = null === (k = q.reduce(function(ca, Za) {
                return Number(Za.args.timestamp) > Number(ca.args.timestamp) ? Za : ca
            })) || void 0 === k ? void 0 : k.args;
            if (!r)
                return l;
            var z = void 0 === r.bidderRequests ? [] : r.bidderRequests;
            q = void 0 === r.bidsReceived ? [] : r.bidsReceived;
            var A = r.auctionId;
            r = r.timestamp;
            if (!A || void 0 == r || !z.length)
                return l;
            tH.has(f) || _.jm(f, function() {
                return tH.delete(f)
            });
            tH.set(f, r);
            r = dq(l);
            var I = new v.Map
              , H = Og(function() {
                return kl(c, A)
            });
            z = _.y(z);
            for (var V = z.next(); !V.done; V = z.next()) {
                var T = V.value;
                V = T.bidderCode;
                var ea = T.timeout
                  , K = {};
                T = _.y(T.bids);
                for (var P = T.next(); !P.done; K = {
                    mb: K.mb
                },
                P = T.next()) {
                    var S = P.value;
                    K.mb = S.bidId;
                    var ba = S.transactionId;
                    P = S.adUnitCode;
                    S = S.getFloor;
                    if (K.mb && m(P)) {
                        e = !0;
                        Wk(r, f, P);
                        ba && !bg(r, 4) && w(r, 4, ba);
                        var ma = _.u(q, "find").call(q, function(ca) {
                            return function(Za) {
                                return Za.requestId === ca.mb
                            }
                        }(K));
                        ba = $p(r, Rp(V));
                        ma ? (w(ba, 4, 1),
                        "number" === typeof ma.timeToRespond && w(ba, 2, ma.timeToRespond),
                        ma = jl(ma, I, Wb(a.O[f.getDomId()], $h, 9)),
                        al(r, ba, P, a.B.value, a.K.value, S),
                        di(ba, 3, bl, ma)) : (P = H().get(K.mb)) ? (w(ba, 4, 2),
                        w(ba, 2, Math.round(P))) : (w(ba, 4, 3),
                        w(ba, 2, ea))
                    }
                }
            }
            gE(a.J, f, I);
            return l
        });
        return e ? b : null
    }
      , tH = new v.Map;
    var uH = function(a, b, c, d, e) {
        Z.call(this, 876);
        this.K = a;
        this.l = b;
        this.o = W(this);
        this.B = Y(this, c);
        this.G = Y(this, d);
        this.P = Y(this, e)
    };
    _.O(uH, Z);
    uH.prototype.j = function() {
        var a = this, b, c, d, e, f;
        return gb(function(g) {
            d = new Cw;
            e = null === (b = a.K) || void 0 === b ? void 0 : D(b, 9);
            f = a.P.value;
            if (null != f) {
                var h;
                if (h = !e) {
                    var k = void 0 === k ? !1 : k;
                    if (Tu(f))
                        if (!1 === f.gdprApplies || "tcunavailable" === f.tcString || void 0 === f.gdprApplies && !k || "string" !== typeof f.tcString || !f.tcString.length)
                            var l = !0;
                        else {
                            l = void 0 === l ? "755" : l;
                            b: {
                                if (f.publisher && f.publisher.restrictions && (h = f.publisher.restrictions["1"],
                                void 0 !== h)) {
                                    h = h[void 0 === l ? "755" : l];
                                    break b
                                }
                                h = void 0
                            }
                            0 === h ? l = !1 : f.purpose && f.vendor ? (h = f.vendor.consents,
                            (l = !(!h || !h[void 0 === l ? "755" : l])) && f.purposeOneTreatment && "CH" === f.publisherCC ? l = !0 : l && (l = f.purpose.consents,
                            l = !(!l || !l["1"]))) : l = !0
                        }
                    else
                        l = !1;
                    h = l
                }
                l = w(d, 5, h);
                l = w(l, 2, f.tcString);
                h = null !== (c = f.addtlConsent) && void 0 !== c ? c : "";
                l = w(l, 4, h);
                w(l, 7, f.internalErrorState);
                null != f.gdprApplies && w(d, 3, f.gdprApplies);
                "tcunavailable" === f.tcString ? a.l.info(oF("failed")) : a.l.info(oF("succeeded"))
            } else
                w(d, 5, !e);
            a.G.value && w(d, 1, a.G.value);
            null != a.B.value && w(d, 6, a.B.value);
            a.o.j(d);
            vn(g)
        })
    }
    ;
    var vH = function(a, b, c, d, e, f) {
        f = void 0 === f ? sl : f;
        Z.call(this, 879);
        this.Ca = a;
        this.o = b;
        this.H = d;
        this.ka = e;
        this.G = f;
        this.l = W(this);
        this.B = null;
        _.qf[260] && (this.B = X(this, c))
    };
    _.O(vH, Z);
    vH.prototype.j = function() {
        var a = this, b, c, d;
        return gb(function(e) {
            if (1 == e.j) {
                var f = a.ka;
                f = void 0 === f ? _.t.top : f;
                f = as(f, "googlefcPresent");
                var g = a.H;
                g = void 0 === g ? _.t : g;
                g.googlefc && !f && a.G(a.Ca);
                if (null !== (c = null === (b = a.B) || void 0 === b ? void 0 : b.value) && void 0 !== c ? !c : !dh(a.o)) {
                    Lv(a.l);
                    e.j = 0;
                    return
                }
                return hb(e, eB(a.o, "loaded"), 3)
            }
            d = e.m;
            a.l.j(d);
            vn(e)
        })
    }
    ;
    var wH = function(a, b, c, d) {
        Z.call(this, 877);
        this.Ca = a;
        this.o = b;
        this.G = c;
        this.l = W(this);
        this.B = Y(this, d)
    };
    _.O(wH, Z);
    wH.prototype.j = function() {
        var a = this, b, c;
        return gb(function(d) {
            if (1 == d.j)
                return b = a.B.value,
                hb(d, fB(a.o, b, a.Ca, a.G), 2);
            c = d.m;
            a.l.ca(c);
            vn(d)
        })
    }
    ;
    var xH = function(a, b) {
        Z.call(this, 874);
        this.H = a;
        this.l = W(this);
        Uv(this, b)
    };
    _.O(xH, Z);
    xH.prototype.j = function() {
        var a = this, b, c;
        return gb(function(d) {
            b = new Tm(a.H,-1);
            _.Pu(a, b);
            if (!Vm(b))
                return Lv(a.l),
                d.return();
            pi().info(nF());
            c = _.Af(661, function(e) {
                a.l.ca(e)
            });
            Uu(b, c);
            vn(d)
        })
    }
    ;
    var yH = function(a, b, c) {
        Z.call(this, 875);
        this.o = a;
        this.H = b;
        this.l = W(this);
        Uv(this, c)
    };
    _.O(yH, Z);
    yH.prototype.j = function() {
        var a = this, b, c;
        return gb(function(d) {
            b = new Um(a.H);
            _.Pu(a, b);
            if (!Wm(b))
                return Lv(a.l),
                d.return();
            c = _.Af(660, function(e) {
                e && "string" === typeof e.uspString ? a.l.j(e.uspString) : Lv(a.l)
            });
            a.o.info(mF());
            WA(b, c);
            vn(d)
        })
    }
    ;
    var zH = function(a) {
        Z.call(this, 896);
        this.o = a;
        this.l = W(this)
    };
    _.O(zH, Z);
    zH.prototype.j = function() {
        var a = this, b;
        return gb(function(c) {
            if (1 == c.j)
                return hb(c, eh(a.o), 2);
            b = c.m;
            a.l.j(b);
            vn(c)
        })
    }
    ;
    var AH = function(a, b, c, d, e) {
        d = void 0 === d ? tl : d;
        e = void 0 === e ? document : e;
        Z.call(this, 886);
        this.da = a;
        this.J = b;
        this.L = c;
        this.l = d;
        this.W = e;
        this.C = Sv(this)
    };
    _.O(AH, Z);
    AH.prototype.j = function() {
        var a = this, b, c, d, e, f, g;
        return gb(function(h) {
            if (1 == h.j)
                return _.F(Mt) && 3 === CA(a.W) ? h = hb(h, new v.Promise(function(k) {
                    return void HA(k, a.W)
                }
                ), 2) : (h.j = 2,
                h = void 0),
                h;
            if (4 != h.j) {
                c = a.L;
                d = c.T;
                e = null !== (b = Yb(d, qk, 5)) && void 0 !== b ? b : new qk;
                f = bg(e, 1) ? bg(e, 3) && 0 !== Oi() ? (0,
                E.wa)(x(e, 1)) * (0,
                E.wa)(id(e, 3)) : x(e, 1) : null;
                if (null == f)
                    return a.C.notify(),
                    h.return();
                g = a.da.every(function(k) {
                    return Rg(Mg(k))
                });
                return g ? hb(h, BH(a, f), 4) : (a.C.notify(),
                h.return())
            }
            a.C.notify();
            vn(h)
        })
    }
    ;
    var BH = function(a, b) {
        return gb(function(c) {
            return c.return(new v.Promise(function(d) {
                var e = a.l(function(k, l) {
                    k.some(function(m) {
                        return 0 < m.intersectionRatio
                    }) && (l.disconnect(),
                    d())
                }, b + "%");
                _.jm(a, function() {
                    e.disconnect()
                });
                for (var f = {}, g = _.y(a.da), h = g.next(); !h.done; f = {
                    ob: f.ob
                },
                h = g.next())
                    h = h.value,
                    f.ob = Mg(h),
                    f.ob && (e.observe(f.ob),
                    XD(a.J, h, function(k) {
                        return function() {
                            e.unobserve(k.ob)
                        }
                    }(f)))
            }
            ))
        })
    };
    var CH = function(a, b) {
        Z.call(this, 944);
        this.H = a;
        this.l = new Dw(this.H);
        this.o = Y(this, b)
    };
    _.O(CH, Z);
    CH.prototype.j = function() {
        var a = this.o.value;
        if (a && Fw(this.l, a)) {
            var b = Ew(this.l, "__gpi_opt_out", a);
            if (b) {
                var c = new Pq;
                b = w(c, 1, b);
                b = w(w(b, 2, 2147483647), 3, "/");
                b = w(b, 4, this.H.location.hostname);
                Gw(this.l, "__gpi_opt_out", b, a)
            }
        }
    }
    ;
    var DH = function(a, b, c) {
        c = void 0 === c ? vl : c;
        Z.call(this, 883);
        this.B = a;
        this.G = c;
        this.l = Sv(this);
        this.o = X(this, b)
    };
    _.O(DH, Z);
    DH.prototype.j = function() {
        var a = this;
        return gb(function(b) {
            if (1 == b.j) {
                if (!D(a.o.value, 5) || _.F(Pl))
                    return a.l.notify(),
                    b.return();
                _.F(It) || pA(a.B);
                if (!a.G()) {
                    qA(null);
                    b.j = 2;
                    return
                }
                return hb(b, new v.Promise(function(c) {
                    return void qA(c)
                }
                ), 2)
            }
            a.l.notify();
            vn(b)
        })
    }
    ;
    var EH = function(a, b, c) {
        Z.call(this, 884);
        this.B = a;
        this.l = Sv(this);
        this.G = Y(this, b);
        this.o = X(this, c)
    };
    _.O(EH, Z);
    EH.prototype.j = function() {
        _.bh(xw).m = this.G.value;
        aG(_.bh(xw), Ew(this.B, "__gads", this.o.value));
        ed().j(20);
        ed().j(2);
        this.l.notify()
    }
    ;
    var FH = function(a, b, c) {
        Z.call(this, 890);
        this.o = a;
        this.console = b;
        this.l = Y(this, c)
    };
    _.O(FH, Z);
    FH.prototype.j = function() {
        var a = this;
        Ad(this.o, this.l.value, function(b, c) {
            var d, e;
            Gf(b, c);
            null === (e = null === (d = a.console) || void 0 === d ? void 0 : d.error) || void 0 === e ? void 0 : e.call(d, c)
        })
    }
    ;
    var GH = function(a, b) {
        Z.call(this, 873);
        this.H = a;
        this.l = X(this, b)
    };
    _.O(GH, Z);
    GH.prototype.j = function() {
        var a = this.l.value
          , b = this.H;
        !we()._pubconsole_disable_ && (a = Zc("google_pubconsole", a, b)) && (a = a.split("|"),
        "1" !== a[0] && "0" !== a[0] || rj())
    }
    ;
    var HH = function(a, b, c, d) {
        Z.call(this, 878);
        this.l = a;
        this.W = b;
        this.L = c;
        this.H = d;
        this.C = Sv(this)
    };
    _.O(HH, Z);
    HH.prototype.j = function() {
        for (var a = _.y(this.l), b = a.next(); !b.done; b = a.next()) {
            b = b.value;
            var c = Mg(b, this.W);
            if (!Lg(b, this.W) && c) {
                a: {
                    var d = b;
                    var e = c;
                    IH(this, e);
                    var f = this.L.O[d.getDomId()]
                      , g = d = 0;
                    f = _.y(ag(f));
                    for (var h = f.next(); !h.done; h = f.next())
                        if (h = h.value,
                        Array.isArray(h)) {
                            var k = _.y(h);
                            h = k.next().value;
                            k = k.next().value;
                            if (!("number" !== typeof h || "number" !== typeof k || 1 >= h || 1 >= k || (d = d || h,
                            g = Math.min(g || Infinity, k),
                            Pj(Pg(e, this.H)) || !e.parentElement || Pj(Pg(e.parentElement, this.H))))) {
                                e = [d, 0];
                                break a
                            }
                        }
                    e = d || g ? [d, g] : null
                }
                g = this.L;
                d = g.T;
                g = g.O[b.getDomId()];
                Mj(c, Vg(b), gg(d, g), e)
            }
        }
        this.C.notify()
    }
    ;
    var IH = function(a, b) {
        if (Math.random() < _.qf[23]) {
            b = wl(b);
            var c = b.depth
              , d = b.De.getBoundingClientRect();
            0 === (null === d || void 0 === d ? void 0 : d.height) && Cf("gpt_not_reserved", function(e) {
                sf(e);
                G(e, "inViewport", 0 <= d.top && d.bottom <= (_.t.innerHeight || a.W.documentElement.clientHeight));
                G(e, "depth", c)
            }, 1)
        }
    };
    var JH = function(a, b, c, d, e, f) {
        Z.call(this, 885);
        this.L = a;
        this.H = b;
        this.o = c;
        this.B = d;
        this.W = e;
        this.J = f;
        this.l = W(this)
    };
    _.O(JH, Z);
    JH.prototype.j = function() {
        var a = this, b;
        return gb(function(c) {
            if (1 == c.j)
                return a.o ? hb(c, KH(a), 2) : (Lv(a.l),
                c.return());
            b = c.m;
            a.l.j(b);
            vn(c)
        })
    }
    ;
    var KH = function(a) {
        var b, c, d, e, f, g, h, k, l, m, n, q, r, z, A, I, H, V, T;
        return gb(function(ea) {
            if (1 == ea.j) {
                d = new rd;
                _.Pu(a, d);
                e = a.o;
                f = e.Ca;
                g = e.da;
                var K = a.L
                  , P = a.H
                  , S = new rd
                  , ba = new Sm(P);
                _.Pu(S, ba);
                var ma = new zH(ba);
                N(S, ma);
                var ca = new vH(f,ba,ma.l,P,P.top);
                N(S, ca);
                ma = new yH(pi(),P,ca.l);
                N(S, ma);
                ba = new wH(f,ba,_.qf[221],ca.l);
                N(S, ba);
                P = new xH(P,ca.l);
                N(S, P);
                K = new uH(Rl(K.T),pi(),ba.l,ma.l,P.l);
                N(S, K);
                td(S);
                b = K.o;
                c = S;
                h = b;
                k = c;
                _.Pu(a, k);
                l = new GH(a.H,h);
                N(d, l);
                _.F(yt) && (m = new CH(a.H,h),
                N(d, m));
                n = new DH(_.qf[150],h);
                N(d, n);
                q = new jk(a.H,h,n.l);
                N(d, q);
                r = new EH(a.B,q.C,h);
                N(d, r);
                _.F(nu) || (z = new FH(we(),a.H.console,q.C),
                N(d, z));
                A = new HH(g,a.W,a.L,a.H);
                N(d, A);
                I = new AH(g,a.J,a.L);
                N(d, I);
                td(d);
                return hb(ea, v.Promise.all([r.l.promise, A.C.promise, I.C.promise, q.C.promise]), 2)
            }
            return 3 != ea.j ? (H = g,
            V = E,
            T = V.I,
            hb(ea, h.promise, 3)) : ea.return({
                da: H,
                la: T.call(V, ea.m)
            })
        })
    };
    var xl = 0;
    var Nl = 0
      , LH = new _.Cg(-9,-9);
    var MH = new v.WeakMap
      , NH = function(a, b) {
        a = [a];
        for (var c = b.length - 1; 0 <= c; --c)
            a.push(typeof b[c], b[c]);
        return a.join("\v")
    };
    var OH = function(a, b) {
        b = void 0 === b ? NH : b;
        var c = ja(a)
          , d = function(f) {
            f = _.y(f);
            f.next();
            f = kn(f);
            return b(c, f)
        }
          , e = function(f) {
            var g = _.y(f);
            f = g.next().value;
            g = kn(g);
            return a.apply(f, g)
        };
        return function() {
            var f = vc.apply(0, arguments)
              , g = this || _.t
              , h = MH.get(g);
            h || (h = {},
            MH.set(g, h));
            return Jo(h, [this].concat(_.yc(f)), e, d)
        }
    }(function(a) {
        return (null === a || void 0 === a ? 0 : a.src) ? /^(?:https?:)?\/\/(?:www\.googletagservices\.com|securepubads\.g\.doubleclick\.net|pagead2\.googlesyndication\.com)\/tag\/js\/gpt(?:_[a-z]+)*\.js/.test(a.src) ? 0 : 1 : 2
    }, function(a, b) {
        var c;
        return a + "\v" + (null === (c = b[0]) || void 0 === c ? void 0 : c.src)
    });
    var PH = function(a, b, c, d, e, f, g, h, k, l, m, n, q, r, z, A, I, H, V, T) {
        this.da = a;
        this.m = b;
        this.J = c;
        this.B = d;
        this.la = e;
        this.L = f;
        this.F = g;
        this.Ea = h;
        this.Ua = k;
        this.Ta = l;
        this.ba = m;
        this.ic = n;
        this.Bc = q;
        this.Jc = r;
        this.R = z;
        this.interestCohort = A;
        this.M = I;
        this.o = H;
        this.D = V;
        this.l = void 0 === T ? !1 : T;
        this.A = [];
        this.j = "";
        this.U = new v.Set(iv(au))
    }
      , SH = function(a) {
        var b = void 0 === b ? window : b;
        if (0 === a.da.length)
            return "";
        QH(a, a.da, b);
        var c, d;
        b = null !== (d = null === (c = Rl(a.L.T)) || void 0 === c ? void 0 : D(c, 9)) && void 0 !== d && d || !D(a.la, 5) ? "https://pagead2.googlesyndication.com/gampad/ads?" : "https://securepubads.g.doubleclick.net/gampad/ads?";
        a.j = b;
        c = a.A;
        if (_.F(Dt))
            for (d = Math.random,
            b = c.length - 1; 0 < b; b--) {
                var e = Math.floor(d() * (b + 1))
                  , f = c[b];
                c[b] = c[e];
                c[e] = f
            }
        c = _.y(c);
        for (b = c.next(); !b.done; b = c.next())
            if (d = a,
            b = b.value,
            e = RH(b))
                "?" !== d.j[d.j.length - 1] && (d.j += "&"),
                d.j += b.oe + "=" + e;
        return a.j
    }
      , UH = function(a, b) {
        try {
            var c = (0,
            E.I)(b.top);
            var d = Ll(c.document, c)
        } catch (e) {
            d = new _.Cg(-12245933,-12245933)
        }
        TH(a, "scr_x", Math.round(d.x), {
            oa: !0
        });
        TH(a, "scr_y", Math.round(d.y), {
            oa: !0
        })
    }
      , VH = function(a, b) {
        if (_.F(gu)) {
            a: {
                var c, d, e, f, g, h;
                try {
                    var k = null === (d = null === (c = b.performance) || void 0 === c ? void 0 : c.getEntriesByType("navigation")) || void 0 === d ? void 0 : d[0];
                    if (null === k || void 0 === k ? 0 : k.type) {
                        var l = null !== (e = xA.get(k.type)) && void 0 !== e ? e : 0;
                        break a
                    }
                } catch (m) {}
                l = null !== (h = yA.get(null === (g = null === (f = b.performance) || void 0 === f ? void 0 : f.navigation) || void 0 === g ? void 0 : g.type)) && void 0 !== h ? h : 0
            }
            b = l;
            0 !== b && TH(a, "nvt", b)
        }
    }
      , QH = function(a, b, c) {
        c = void 0 === c ? window : c;
        var d, e = c.document, f = a.L, g = f.T, h = f.O, k = f.Zb;
        f = a.J.B;
        TH(a, "gdfp_req", 1, {
            ga: !1
        });
        TH(a, "pvsid", f);
        TH(a, "correlator", g.getCorrelator());
        TH(a, "output", a.F, {
            ga: !1
        });
        WH(a, cm(a.F, a.M, a.o));
        TH(a, "impl", D(g, 6) ? "fifs" : "fif", {
            ga: !1
        });
        WH(a, Ql({
            Jd: Oc(g, 24, 0),
            ic: a.ic,
            Jc: a.Jc,
            Bc: a.Bc
        }));
        WH(a, bm(g, a.Ua, a.Ta));
        WH(a, new v.Map([["eid", {
            value: a.ba
        }], ["debug_experiment_id", {
            value: xv().split(",")
        }]]));
        TH(a, "vrg", De());
        TH(a, "ptt", 17);
        WH(a, new v.Map([["co", {
            value: 0 !== Oc(g, 24, 0) ? Oc(g, 24, 0) : null,
            options: {
                oa: !0
            }
        }]]));
        WH(a, Tl(g, a.la));
        TH(a, "sc", _.qf[6] ? 1 : 0, {
            oa: !0
        });
        window.postMessage && TH(a, "sfv", CF ? CF : CF = ji());
        TH(a, "ecs", k);
        XH(a, b);
        YH(a);
        ZH(a, b);
        $H(a, b);
        aI(a, c);
        Ce("google_preview") && TH(a, "gct", Be("google_preview"));
        WH(a, Nh(c));
        WH(a, new v.Map([["expflags", {
            value: _.qf[253] ? hi(st) || null : null
        }]]));
        bI(a, b, c);
        WH(a, Il(c));
        cI(a, b, c);
        (_.F(Au) || Ef.N().j) && TH(a, "rumc", f, {
            ga: !1
        });
        _.F(Lt) && TH(a, "rume", 1, {
            ga: !1
        });
        TH(a, "vis", CA(e), {
            ga: !1
        });
        0 === OH(_.qf[172]) || TH(a, "stss", OH(_.qf[172]));
        _.F(Bt) ? WH(a, Ml(c)) : UH(a, c);
        WH(a, El(b, c));
        WH(a, ek(b, h, c));
        WH(a, new v.Map([["psts", {
            value: bE(a.J, b)
        }]]));
        e = pv(c.document.domain, null !== (d = D(a.la, 5) && Wc(c) ? c.document.cookie : null) && void 0 !== d ? d : "", c.history.length, c.screen, c.document.referrer, c);
        WH(a, e.from_cookie && !D(a.la, 5) ? new v.Map : new v.Map([["ga_vid", {
            value: e.vid,
            options: {
                ga: !1
            }
        }], ["ga_sid", {
            value: e.sid,
            options: {
                ga: !1
            }
        }], ["ga_hid", {
            value: e.hid,
            options: {
                ga: !1
            }
        }], ["ga_fc", {
            value: e.from_cookie,
            options: {
                ga: !1
            }
        }], ["ga_cid", {
            value: e.cid,
            options: {
                ga: !1
            }
        }], ["ga_wpids", {
            value: c.google_analytics_uacct
        }]]));
        _.qf[221] || TH(a, "uas", Ih(c));
        _.F($s) && (TH(a, "js", rv(c)),
        TH(a, "ms", sv(f.toString(), c)));
        dI(a, c, b);
        _.F(Bt) ? WH(a, Ol(b, c, a.L)) : eI(a, b, c);
        WH(a, Kl(a.interestCohort));
        "runAdAuction"in navigator && "joinAdInterestGroup"in navigator && TH(a, "td", 1);
        fI(a);
        gI(a);
        hI(a);
        a.D && TH(a, "cbidsp", a.D.map(function(l) {
            return Bb(Ap(l, eq), 3)
        }).join("~"));
        VH(a, c)
    }
      , fI = function(a) {
        var b = _.qf[251];
        b && TH(a, "uach", fp(b, 3))
    }
      , gI = function(a) {
        var b = _.F(FD() ? Eu : Du)
          , c = _.F(Gu);
        b = GD(b, c);
        null !== b && void 0 !== b && b.length && TH(a, "tt_state", fp(JSON.stringify(b), 3))
    }
      , dI = function(a, b, c) {
        var d = 0 !== Oi()
          , e = $f(!0, b, d).width
          , f = []
          , g = []
          , h = [];
        if (null !== b && b != b.top) {
            var k = $f(!1, b).width;
            (-12245933 === e || -12245933 === k || k < e) && h.push(8)
        }
        -12245933 !== e && (1.5 * e < b.document.documentElement.scrollWidth ? h.push(10) : d && 1.5 * b.outerWidth < e && h.push(10));
        c = _.y(c);
        for (k = c.next(); !k.done; k = c.next()) {
            d = new Xg;
            var l = Mg(k.value);
            k = 0;
            var m = !1
              , n = !1;
            if (l) {
                for (var q = 0, r = l; r && 100 > q; q++,
                r = r.parentElement) {
                    var z = Pg(r, b);
                    if (z) {
                        var A = z
                          , I = A.display
                          , H = A.overflowX;
                        if ("visible" !== A.overflowY && (d.set(2),
                        (A = Gg(r)) && (k = k ? Math.min(k, A.width) : A.width),
                        d.get(9)))
                            break;
                        Pj(z) && d.set(9);
                        "none" === I && d.set(7);
                        "IFRAME" === r.nodeName && (z = parseInt(z.width, 10),
                        z < e && (d.set(8),
                        k = k ? Math.min(z, k) : z));
                        n || (n = "scroll" === H || "auto" === H);
                        m || (m = "flex" === I)
                    } else
                        d.set(3)
                }
                n && m && (l = l.getBoundingClientRect().left,
                (l > e || 0 > l) && d.set(11))
            } else
                d.set(1);
            l = _.y(h);
            for (m = l.next(); !m.done; m = l.next())
                d.set(m.value);
            f.push(Yg(d));
            g.push(k)
        }
        TH(a, "fws", f);
        TH(a, "ohw", g)
    }
      , eI = function(a, b, c) {
        try {
            var d = (0,
            E.I)(c.top)
              , e = Ll(d.document, d).y;
            TH(a, "btvi", b.map(function(f) {
                var g, h = a.L, k = h.T;
                h = h.O[f.getDomId()];
                f = null === (g = Tg(f, h, c.document, gg(k, h))) || void 0 === g ? void 0 : g.y;
                k = $f(!0, c).height;
                return void 0 === f || -12245933 === f || -12245933 === k ? -1 : f < e + k ? 0 : ++iI
            }), {
                oa: !0,
                xa: "|"
            })
        } catch (f) {}
    }
      , jI = function(a, b) {
        var c = a.L.O;
        return a.m ? b.map(function(d) {
            var e = c[d.getDomId()];
            e = eg(e);
            if (d = a.J.j.get(d))
                d.bb = e;
            return e
        }).join(",") : b.map(function(d) {
            var e = a.L.O[d.getDomId()];
            e = Qk(a.J, d) || eg(e, D(a.L.T, 6) || D(e, 17) ? null : Mg(d));
            if (d = a.J.j.get(d))
                d.bb = e;
            return e
        }).join(",")
    }
      , cI = function(a, b, c) {
        c = void 0 === c ? window : c;
        var d = Ce("google_preview")
          , e = c.document
          , f = d ? $l(e.URL) : e.URL
          , g = a.L;
        e = d ? $l(e.referrer) : e.referrer;
        d = !1;
        var h = g.T;
        g = g.O;
        var k;
        b = a.m ? Zl(h) : null !== (k = Yl(g[b[0].getDomId()])) && void 0 !== k ? k : Zl(h);
        if (null != b) {
            var l = f;
            zg(c) || (e = "",
            d = !_.F(bu) || !a.J.tb)
        } else
            b = f;
        f = am(c);
        TH(a, "nhd", f || null);
        TH(a, "url", b);
        k = _.qf[252] || {};
        k.url = b;
        _.qf[252] = k;
        null != l && l !== b && TH(a, "loc", l);
        TH(a, "ref", e);
        if (f) {
            var m;
            l = c;
            var n, q;
            c = qc(l.top) && (null === (q = null === (n = l.top) || void 0 === n ? void 0 : n.location) || void 0 === q ? void 0 : q.href);
            n = null === (m = l.location) || void 0 === m ? void 0 : m.ancestorOrigins;
            m = Hh(l) || "";
            n = (null === n || void 0 === n ? void 0 : n[n.length - 1]) || "";
            _.F(uu) ? (m = n && Lr(n.match(_.Kr)[3] || null) && Lr(n.match(_.Kr)[3] || null) !== Lr(m.match(_.Kr)[3] || null) ? n : m || n,
            m = c || m || "") : m = c || m || n;
            d = m ? d ? Lr(m.match(_.Kr)[3] || null) : m : null;
            TH(a, "top", d);
            TH(a, "etu", a.J.tb)
        }
        TH(a, "scar", a.R)
    }
      , ZH = function(a, b) {
        var c = a.L.O
          , d = b = b.map(function(e) {
            e = c[e.getDomId()];
            return em(e).join("&")
        });
        d.join("|").length === b.length - 1 && (d = null);
        TH(a, "prev_scp", d, {
            xa: "|"
        })
    }
      , YH = function(a) {
        var b = a.L.T;
        1 !== Oc(b, 24, 0) && bg(b, 16) && TH(a, "ppid", x(b, 16), {
            oa: !0
        })
    }
      , $H = function(a, b) {
        var c = a.L
          , d = c.T
          , e = c.O[b[0].getDomId()];
        c = 1 !== a.Ea;
        e = !!D(e, 17);
        b = gm(b, a.L);
        d = D(d, 27) || !1;
        var f = 3 === a.Ea
          , g = new Xg;
        g.set(0, c);
        g.set(1, e);
        g.set(2, b);
        g.set(3, d);
        g.set(4, f);
        c = Yg(g);
        0 < c && TH(a, "eri", c)
    }
      , aI = function(a, b) {
        var c = a.L.T
          , d = fm(c);
        TH(a, "cust_params", d, {
            xa: "&"
        });
        d = a.B;
        var e = a.la
          , f = Zl(c);
        if (0 === Oc(c, 24, 0) && d) {
            var g = null === d || void 0 === d ? void 0 : Ew(d, "__gads", e)
              , h = v.Map
              , k = ["cookie_enabled", {
                value: !g && (null === d || void 0 === d ? 0 : Fw(d, e)) ? "1" : null,
                options: {
                    oa: !0
                }
            }]
              , l = b.document;
            b = ["cdm", {
                value: (f || Ag(b)) === l.URL ? "" : l.domain
            }];
            f = _.F(Ik) && _.F(yt) ? (f = Ew(d, "__gpi", e)) && !_.u(f, "includes").call(f, "&") ? f : null : null;
            d = new h([["cookie", {
                value: g,
                options: {
                    oa: !0
                }
            }], k, b, ["gpic", {
                value: f
            }], ["gpico", {
                value: _.F(Ik) && "1" === Ew(d, "__gpi_opt_out", e) ? "1" : null
            }]])
        } else
            d = new v.Map;
        WH(a, d);
        (c = x(c, 8)) ? (50 < c.length && (c = c.substring(0, 50)),
        c = "a " + fp('role:1 producer:12 loc:"' + c + '"')) : c = "";
        c && TH(a, "uule", c);
        c = new Xg;
        _.t.SVGElement && _.t.document.createElementNS && c.set(0);
        d = $r();
        d["allow-top-navigation-by-user-activation"] && c.set(1);
        d["allow-popups-to-escape-sandbox"] && c.set(2);
        _.t.crypto && _.t.crypto.subtle && c.set(3);
        _.t.TextDecoder && _.t.TextEncoder && c.set(4);
        c = Yg(c);
        TH(a, "bc", c)
    }
      , kI = function(a, b) {
        var c = a.L
          , d = c.O
          , e = new v.Map;
        c = _.y(Wb(c.T, $h, 14));
        for (var f = c.next(); !f.done; f = c.next()) {
            var g = f.value;
            e.set((0,
            E.I)(ai(g)), [$i(g, 2)[0]])
        }
        for (c = 0; c < b.length; c++) {
            g = d[b[c].getDomId()];
            if (!g)
                return;
            g = _.y(Wb(g, $h, 3));
            for (f = g.next(); !f.done; f = g.next()) {
                var h = f.value;
                f = (0,
                E.I)(ai(h));
                var k = e.get(f) || [];
                h = $i(h, 2)[0];
                1 === b.length ? k[0] = h : h !== k[0] && (k[c + 1] = h);
                e.set(f, k)
            }
        }
        b = [];
        d = _.y(_.u(e, "keys").call(e));
        for (c = d.next(); !c.done; c = d.next())
            g = c.value,
            c = hE()[g],
            g = e.get(g),
            c && g && (1 < g.length ? (g = g.map(function(l) {
                return encodeURIComponent(l || "")
            }).join(),
            b.push(c + "," + g)) : 1 === g.length && "url" !== c && TH(a, c, g[0]));
        b.length && TH(a, "sps", b.join("|"))
    }
      , bI = function(a, b, c) {
        var d, e = a.L, f = e.T;
        e = e.O;
        if (_.F(Et)) {
            var g = Zl(f);
            var h = new v.Map([["dt", {
                value: (new Date).getTime(),
                options: {
                    ga: !1
                }
            }]]);
            g || h.set("lmt", {
                value: ms(c.document)
            });
            g = xl;
            var k = nl(c);
            0 < k && g >= k && (h.set("dlt", {
                value: k,
                options: {
                    ga: !1
                }
            }),
            h.set("idt", {
                value: g - k,
                options: {
                    ga: !1
                }
            }));
            WH(a, h)
        } else {
            Zl(a.L.T) || (g = ms(c.document),
            TH(a, "lmt", g ? g.toString() : null));
            TH(a, "dt", (new Date).getTime(), {
                ga: !1
            });
            try {
                g = xl,
                h = nl(),
                0 < h && g >= h && (TH(a, "dlt", h, {
                    ga: !1
                }),
                TH(a, "idt", g - h, {
                    ga: !1
                }))
            } catch (r) {
                TH(a, "idt", -9, {
                    ga: !1
                }),
                r instanceof Error && Gf(479, r)
            }
        }
        if (null !== (d = lI) && void 0 !== d)
            d;
        else {
            a: {
                h = c.navigator;
                g = c.document;
                k = h.userAgent;
                var l = h.platform
                  , m = /WebKit\/(\d+)/
                  , n = /rv:(\d+\.\d+)/
                  , q = /rv:1\.8([^.]|\.0)/;
                if (/Win|Mac|Linux|iPad|iPod|iPhone/.test(l) && !/^Opera/.test(k) && (m = (m.exec(k) || [0, 0])[1],
                n = (n.exec(k) || [0, 0])[1],
                /Win/.test(l) && /Trident/.test(k) && 11 <= g.documentMode || !m && "Gecko" === h.product && 27 <= n && !q.test(k) || 536 <= m)) {
                    h = !0;
                    break a
                }
                h = !1
            }
            g = qv(c, c.document, 500, 300);
            lI = h && !g
        }
        lI || TH(a, "ea", "0", {
            oa: !0
        });
        h = c.document;
        l = ps(window);
        g = l.location.href;
        l == l.top ? g = !0 : (k = !1,
        (q = l.document) && q.referrer && (g = q.referrer,
        l.parent == l.top && (k = !0)),
        (l = l.location.ancestorOrigins) && (l = l[l.length - 1]) && -1 == g.indexOf(l) && (k = !1),
        g = k);
        h = qv(window, h, c.google_ad_width, c.google_ad_height);
        k = window;
        k = k.top == k ? 0 : qc(k.top) ? 1 : 2;
        l = 4;
        h || 1 != k ? h || 2 != k ? h && 1 == k ? l = 7 : h && 2 == k && (l = 8) : l = 6 : l = 5;
        g && (l |= 16);
        h = "" + l;
        g = window;
        if (g != g.top)
            for (; g && g != g.top && qc(g) && !g.sf_ && !g.$sf && !g.inGptIF && !g.inDapIF; g = g.parent)
                ;
        TH(a, "frm", h || null);
        h = $f(!0, c);
        _.F(Bt) ? (h && (a.L.$a = h),
        g = zg(c) ? null : $f(!1, c),
        WH(a, new v.Map([["biw", {
            value: h ? h.width : null
        }], ["bih", {
            value: h ? h.height : null
        }], ["isw", {
            value: h ? null === g || void 0 === g ? void 0 : g.width : null
        }], ["ish", {
            value: h ? null === g || void 0 === g ? void 0 : g.height : null
        }]]))) : h && (a.L.$a = h,
        TH(a, "biw", h.width),
        TH(a, "bih", h.height),
        !zg(c) && (h = $f(!1, c))) && (TH(a, "isw", h.width),
        TH(a, "ish", h.height));
        TH(a, "oid", 2);
        if (_.F(Bt)) {
            h = c.document;
            g = a.m;
            k = [];
            l = [];
            q = _.y(b);
            for (n = q.next(); !n.done; n = q.next())
                if (n = n.value,
                m = e[n.getDomId()],
                n = Tg(n, m, h, gg(f, m)),
                n = g ? null !== n && void 0 !== n ? n : LH : n)
                    k.push(Math.round(n.x)),
                    l.push(Math.round(n.y));
            WH(a, new v.Map([["adxs", {
                value: k
            }], ["adys", {
                value: l
            }]]))
        } else {
            f = c.document;
            e = [];
            h = [];
            k = a.L;
            g = k.T;
            k = k.O;
            l = _.y(b);
            for (q = l.next(); !q.done && (q = q.value,
            n = k[q.getDomId()],
            q = Tg(q, n, f, gg(g, n)),
            a.m && (q = q || new _.Cg(-9,-9)),
            q && (e.push(Math.round(q.x)),
            h.push(Math.round(q.y))),
            a.m); q = l.next())
                ;
            TH(a, "adxs", e);
            TH(a, "adys", h)
        }
        TH(a, "adks", jI(a, b));
        mI(a, b);
        kI(a, b);
        f = oh(c);
        a.l ? TH(a, "ifi", f) : (TH(a, "ifi", f + 1),
        a = c,
        b = b.length,
        b = void 0 === b ? 1 : b,
        a = ws(vs(a)) || a,
        a.google_unique_id = (a.google_unique_id || 0) + b)
    }
      , XH = function(a, b) {
        var c = a.L
          , d = c.T
          , e = c.O
          , f = b.map(function(k) {
            return e[k.getDomId()]
        });
        WH(a, Xl(b, f));
        TH(a, "fsfs", $g(b, function(k) {
            var l;
            k = e[k.getDomId()];
            return Number(null !== (l = null === k || void 0 === k ? void 0 : D(k, 12)) && void 0 !== l ? l : D(d, 13))
        }));
        TH(a, "fsbs", $g(b, function(k) {
            var l = a.L.O[k.getDomId()];
            k = a.L.T.Da();
            l = null === l || void 0 === l ? void 0 : l.Da();
            return (null === l || void 0 === l ? 0 : D(l, 3)) || (null === k || void 0 === k ? 0 : D(k, 3)) ? 1 : 0
        }));
        WH(a, Wl(a.J, b, a.l));
        WH(a, Jl(e[b[0].getDomId()], a.m));
        WH(a, Al(b, e, Vc(a.la, window)));
        WH(a, Bl(f));
        c = {};
        f = _.y(f);
        for (var g = f.next(); !g.done; g = f.next())
            (g = g.value.getClickUrl()) && (c[g] = (c[g] || 0) + 1);
        if (!Pr(c)) {
            f = new rf("gpt_sra_setclickurl");
            var h = [];
            _.tf(c, function(k, l) {
                h.push(String(l.length) + ":" + String(k))
            });
            G(f, "lenfreqs", h.join());
            sf(f);
            uf(f, 1)
        }
        _.F(cu) && TH(a, "didk", b.map(function(k) {
            return dg(k.getDomId())
        }).join("~"))
    }
      , mI = function(a, b) {
        b = b.map(function(c) {
            var d;
            return null !== (d = eE(a.J, c)) && void 0 !== d ? d : []
        });
        TH(a, "ucis", b, {
            xa: "|"
        })
    }
      , hI = function(a) {
        if (!_.F(ou)) {
            var b;
            if (b = Vc(a.la, window)) {
                var c = new Dq
                  , d = _.bd(ru)
                  , e = []
                  , f = RegExp("^_GESPSK-(.+)$");
                try {
                    for (var g = 0; g < b.length; g++) {
                        var h = (f.exec(b.key(g)) || [])[1];
                        h && e.push(h)
                    }
                } catch (k) {}
                e = _.y(e);
                for (f = e.next(); !f.done; f = e.next())
                    if (f = f.value,
                    g = Bd().get(f, b),
                    g.getError())
                        fd(g.getError(), f, g.errorMessage);
                    else if (g = g.bc)
                        if (h = Cd(g),
                        0 === h || 1 === h)
                            h = x(g, 2),
                            0 <= d && h && h.length > d ? fd(12, f) : (di(c, 2, Gq, g),
                            fd(19, f));
                b = Wb(c, Gq, 2).length ? Bb(Ap(c, Iq), 2) : null
            } else
                b = null;
            TH(a, "a3p", b)
        }
    }
      , TH = function(a, b, c, d) {
        d = void 0 === d ? {} : d;
        a.U.has(b) || null == c || a.A.push({
            oe: b,
            value: c,
            options: d
        })
    }
      , WH = function(a, b) {
        b = _.y(_.u(b, "entries").call(b));
        for (var c = b.next(); !c.done; c = b.next()) {
            var d = _.y(c.value);
            c = d.next().value;
            d = d.next().value;
            TH(a, c, d.value, d.options)
        }
    }
      , RH = function(a) {
        var b = a.value
          , c = a.options
          , d = void 0 === c.ga ? !0 : c.ga;
        a = void 0 === c.xa ? "," : c.xa;
        c = void 0 === c.oa ? !1 : c.oa;
        return "object" !== typeof b ? null == b || !c && 0 === b ? null : im(b, d) : Array.isArray(b) && b.length ? b.map(function(e) {
            return im(e, d)
        }).join(im(a, d)) : null
    }
      , iI = 0
      , lI = null;
    var nI = function(a, b, c, d, e, f, g, h, k, l, m, n, q, r, z, A, I, H, V, T) {
        Z.call(this, 798);
        this.J = a;
        this.L = b;
        this.B = c;
        this.Y = d;
        this.V = e;
        this.Ea = f;
        this.Ua = g;
        this.Ta = h;
        this.$ = l;
        this.o = m;
        this.C = W(this);
        this.qa = X(this, n);
        this.Z = X(this, q);
        this.G = X(this, k);
        this.P = Tv(this, r);
        this.K = Tv(this, z);
        this.ea = X(this, A);
        this.fa = X(this, I);
        this.na = X(this, H);
        this.l = Y(this, V);
        Uv(this, T)
    };
    _.O(nI, Z);
    nI.prototype.j = function() {
        for (var a = this, b = new v.Map, c = _.y(this.Z.value), d = c.next(); !d.done; d = c.next())
            d = d.value,
            b.set(d, this.V ? oI(this, d) : function() {
                return a.qa.value
            }
            );
        this.C.j(b)
    }
    ;
    var oI = function(a, b) {
        return Og(function() {
            var c, d = new Cw;
            d = new PH([b],!1,a.J,a.B,d,a.L,a.Y,a.Ea,a.Ua,a.Ta,a.G.value,a.ea.value,a.fa.value,a.na.value,null !== (c = a.P.value) && void 0 !== c ? c : "0",a.K.value,a.$,a.o,a.l.value,!0);
            return Ae(SH(d)).url
        })
    };
    var pI = new v.Map
      , qI = function(a, b) {
        b = void 0 === b ? pI : b;
        Z.call(this, 834);
        this.da = a;
        this.l = b;
        this.o = W(this);
        this.B = v.Promise.all(this.da.map(this.G, this))
    };
    _.O(qI, Z);
    qI.prototype.j = function() {
        var a = this, b;
        return gb(function(c) {
            if (1 == c.j)
                return hb(c, a.B, 2);
            b = c.m;
            a.o.j(b.filter(function(d) {
                return null != d && !d.m
            }));
            vn(c)
        })
    }
    ;
    qI.prototype.G = function(a) {
        var b = this, c, d, e;
        return gb(function(f) {
            if (1 == f.j) {
                c = 1E3 * _.bd(Vt);
                if (a.m)
                    return f.return(null);
                if (0 >= c)
                    return f.return(a);
                b.l.has(a) || (b.l.set(a, km(c, a)),
                _.jm(a, function() {
                    return void b.l.delete(a)
                }));
                d = (0,
                E.I)(b.l.get(a));
                return hb(f, d(), 2)
            }
            e = f.m;
            if (b.m)
                return f.return(null);
            if (e)
                return f.return(a);
            M(pi(), qF(a.getAdUnitPath()));
            return f.return(null)
        })
    }
    ;
    var rI = function(a, b, c) {
        Z.call(this, 936);
        this.o = a;
        this.C = W(this);
        this.l = Y(this, b);
        this.B = Y(this, c)
    };
    _.O(rI, Z);
    rI.prototype.j = function() {
        var a, b;
        this.C.j([].concat(_.yc(this.o), _.yc(null !== (a = this.l.value) && void 0 !== a ? a : []), _.yc(null !== (b = this.B.value) && void 0 !== b ? b : [])))
    }
    ;
    var sI = function(a, b, c, d, e, f, g, h, k, l, m, n) {
        Z.call(this, 866);
        this.P = a;
        this.V = b;
        this.K = c;
        this.l = e;
        this.G = f;
        this.W = g;
        this.C = Sv(this);
        this.B = X(this, h);
        this.Z = X(this, k);
        Uv(this, l);
        this.Y = X(this, m);
        this.o = X(this, n)
    };
    _.O(sI, Z);
    sI.prototype.j = function() {
        var a = this, b, c, d, e, f, g, h, k, l, m;
        return gb(function(n) {
            if (1 == n.j) {
                c = a.Z.value;
                if (!c)
                    return a.C.notify(),
                    n.return();
                d = _.Lj("LINK");
                (/^https:/.test(c) || _.qf[257]) && pr(d, new Kd(c,Od), "webbundle");
                null === (b = d.resources) || void 0 === b ? void 0 : b.add(Va(a.G).toString());
                d.crossOrigin = a.Y.value ? "use-credentials" : "anonymous";
                e = _.Lj("SCRIPT");
                ab(e, a.G);
                a.W.head.appendChild(d);
                a.W.head.appendChild(e);
                a.C.notify();
                return hb(n, tI(a), 2)
            }
            f = n.m;
            g = f.zd;
            h = f.me;
            _.F(et) && delete we()[a.l.replace("googletag.", "")];
            d.resources.remove(d.resources[0]);
            if (g.length !== h.length)
                return a.V(new Ev("Received " + g.length + " ad URLs but " + h.length + " metadatas")),
                n.return();
            for (k = 0; k < g.length; k++)
                l = g[k],
                m = h[k],
                l && d.resources.add(l),
                a.P(k, m, {
                    kind: 1,
                    url: l
                }, a.B.value, a.o.value);
            d.resources.length || d.remove();
            a.K(g.length - 1, a.B.value, a.o.value);
            vn(n)
        })
    }
    ;
    var tI = function(a) {
        var b = we()
          , c = a.l.replace("googletag.", "");
        return new v.Promise(function(d) {
            var e = !1;
            Object.defineProperty(b, c, {
                value: function(f, g) {
                    e || d({
                        zd: f,
                        me: g
                    });
                    e = !0
                },
                writable: !1,
                enumerable: !1,
                configurable: !0
            })
        }
        )
    };
    var uI = function(a, b, c, d, e, f) {
        Z.call(this, 810);
        this.o = a;
        this.K = b;
        this.L = c;
        this.G = d;
        this.H = e;
        this.l = W(this);
        this.B = X(this, f)
    };
    _.O(uI, Z);
    uI.prototype.j = function() {
        var a = this
          , b = this.o;
        !this.K && 1 < this.o.length && (b = [b[0]]);
        b = b.filter(function(c) {
            var d = a.L.O[c.getDomId()];
            if (rg(a.H) && 4 === vg(d)) {
                M(pi(), iF("googletag.enums.OutOfPageFormat.REWARDED", String(c.getAdUnitPath())));
                var e = !0
            } else
                e = !1;
            return !e && !yg(c, d, a.H, a.B.value)
        });
        30 < b.length && (M(this.G, eF("30", String(b.length), String(b.length - 30))),
        b = b.slice(0, 30));
        this.l.j(b)
    }
    ;
    var vI = function(a) {
        Z.call(this, 826);
        this.J = a;
        this.C = W(this)
    };
    _.O(vI, Z);
    vI.prototype.j = function() {
        var a = this, b, c;
        return gb(function(d) {
            if (1 == d.j)
                return b = a.C,
                c = b.ca,
                hb(d, a.J.A, 2);
            c.call(b, d.m);
            vn(d)
        })
    }
    ;
    vI.prototype.A = function() {
        Lv(this.C)
    }
    ;
    var wI = function(a) {
        Z.call(this, 802);
        this.H = a;
        this.l = W(this)
    };
    _.O(wI, Z);
    wI.prototype.j = function() {
        var a = this, b, c, d, e, f, g, h;
        return gb(function(k) {
            if (1 == k.j) {
                if (!_.F(ut))
                    return a.l.j(""),
                    k.return();
                c = _.bd(tt);
                d = Date.now();
                e = CA(a.H.document);
                f = 0 < c ? new v.Promise(function(l) {
                    return void setTimeout(function() {
                        l("0");
                        Cf("gpt_paw_adel", function(m) {
                            sf(m);
                            G(m, "exp", c);
                            G(m, "act", Date.now() - d);
                            G(m, "sviz", e);
                            G(m, "eviz", CA(a.H.document))
                        }, 1)
                    }, c)
                }
                ) : ke(a.H);
                if (!f) {
                    a.l.j("");
                    k.j = 0;
                    return
                }
                k.F = 3;
                return hb(k, f, 5)
            }
            if (3 != k.j)
                return g = null !== (b = k.m) && void 0 !== b ? b : "0",
                g.length > _.bd(wt) && (Gf(a.id, new Hi("ML:" + (_.F(vt) ? g : g.length))),
                g = "0"),
                a.l.j(g),
                jb(k, 0);
            h = kb(k);
            Gf(a.id, h);
            a.l.j("0");
            vn(k)
        })
    }
    ;
    wI.prototype.A = function() {
        this.l.j("")
    }
    ;
    var xI = function(a, b, c, d) {
        Z.call(this, 847);
        this.J = a;
        this.o = b;
        this.B = c;
        this.l = W(this);
        this.G = X(this, d)
    };
    _.O(xI, Z);
    xI.prototype.j = function() {
        var a = this.G.value;
        if (a.length) {
            for (var b = _.y(a), c = b.next(); !c.done; c = b.next())
                dE(this.J, c.value);
            this.B ? Lv(this.l) : this.o ? (b = ve(a[0].getAdUnitPath()),
            a = yI(a, b),
            this.l.j(a)) : (a = a.map(function(d) {
                return {
                    Ca: ve(d.getAdUnitPath()),
                    da: [d]
                }
            }),
            this.l.j(a))
        } else
            Lv(this.l)
    }
    ;
    var yI = function(a, b) {
        var c = [];
        a = ra(a, function(f) {
            return ve(f.getAdUnitPath())
        });
        a = _.y(_.u(Object, "entries").call(Object, a));
        for (var d = a.next(); !d.done; d = a.next()) {
            var e = _.y(d.value);
            d = e.next().value;
            e = e.next().value;
            d === b ? c.unshift({
                Ca: d,
                da: e
            }) : c.push({
                Ca: d,
                da: e
            })
        }
        return c
    };
    var zI = function(a, b) {
        Z.call(this, 845);
        this.O = a;
        this.l = W(this);
        this.o = W(this);
        this.B = X(this, b)
    };
    _.O(zI, Z);
    zI.prototype.j = function() {
        var a = this
          , b = function(d) {
            d = a.O[d.getDomId()];
            return !!ag(d).length || bg(d, 16)
        }
          , c = this.B.value;
        this.l.j(c.filter(b));
        this.o.j(c.filter(Eo(b)))
    }
    ;
    var AI = function(a, b) {
        Z.call(this, 919);
        this.o = a;
        this.C = W(this);
        this.l = X(this, b)
    };
    _.O(AI, Z);
    AI.prototype.j = function() {
        var a, b = !(null === (a = this.o) || void 0 === a ? 0 : D(a, 9)) && !!D(this.l.value, 5);
        this.C.j(b)
    }
    ;
    var BI = function(a, b, c, d, e) {
        Z.call(this, 935);
        this.J = a;
        this.L = b;
        this.W = c;
        this.C = Sv(this);
        this.l = X(this, d);
        Uv(this, e)
    };
    _.O(BI, Z);
    BI.prototype.j = function() {
        var a = this.L
          , b = a.T;
        a = a.O;
        for (var c = _.y(this.l.value), d = c.next(); !d.done; d = c.next()) {
            d = d.value;
            var e = a[d.getDomId()]
              , f = this.W;
            f = void 0 === f ? document : f;
            Cj(e, b) && !this.J.Wa(d) && Dj(d, f, e, b)
        }
        this.C.notify()
    }
    ;
    var CI = function(a, b, c, d) {
        Z.call(this, 864);
        this.J = a;
        this.L = b;
        this.W = c;
        this.l = Sv(this);
        this.o = X(this, d)
    };
    _.O(CI, Z);
    CI.prototype.j = function() {
        for (var a = _.y(this.o.value), b = a.next(); !b.done; b = a.next())
            if (b = b.value,
            _.ZD(this.J, b)) {
                var c = this.L
                  , d = c.T;
                c = c.O[b.getDomId()];
                Cj(c, d) && Dj(b, this.W, c, d);
                dE(this.J, b);
                var e = void 0
                  , f = void 0;
                null !== (e = null !== (f = D(c, 10)) && void 0 !== f ? f : D(d, 11)) && void 0 !== e && e && Dj(b, this.W, c, d)
            }
        this.l.notify()
    }
    ;
    var DI = function(a, b, c, d, e, f) {
        f = void 0 === f ? Dh : f;
        Z.call(this, 939);
        this.B = a;
        this.vc = b;
        this.H = c;
        this.o = f;
        this.l = X(this, d);
        Uv(this, e)
    };
    _.O(DI, Z);
    DI.prototype.j = function() {
        if (D(this.l.value, 5)) {
            var a = this.o
              , b = this.H
              , c = new Dm;
            var d = new Em;
            d = Db(d, 1, String(this.B), "");
            c = Of(c, 5, d);
            c = Db(c, 4, 1, 0);
            c = Db(c, 2, 2, 0);
            c = Db(c, 3, this.vc, "");
            a.call(this, b, pl(c, 6, !0))
        }
    }
    ;
    var EI = function(a, b, c, d) {
        Z.call(this, 905);
        this.L = a;
        this.l = b;
        this.C = Sv(this);
        this.o = X(this, c);
        Uv(this, d)
    };
    _.O(EI, Z);
    EI.prototype.j = function() {
        for (var a, b = _.y(this.o.value), c = b.next(); !c.done; c = b.next())
            switch (null === (a = this.L.O[c.value.getDomId()]) || void 0 === a ? void 0 : vg(a)) {
            case 2:
            case 3:
            case 5:
                this.l.load(_.HG);
                return
            }
        this.C.notify()
    }
    ;
    var FI = function(a, b, c, d) {
        Z.call(this, 833);
        this.l = a;
        this.o = b;
        this.H = c;
        this.C = Sv(this);
        Uv(this, d)
    };
    _.O(FI, Z);
    FI.prototype.j = function() {
        if ("wbn" !== this.l) {
            var a = this.o, b = this.H, c = DC(), d;
            c = {
                version: CF ? CF : CF = ji(),
                ac: c
            };
            c = lD.ge(c);
            for (var e = b, f = 0; e !== e.parent; )
                f++,
                e = e.parent;
            c = f ? wc(c, new v.Map([["n", String(f)]])) : c;
            e = iv(Xt);
            f = new v.Map;
            for (var g = 0; g < e.length; g += 2)
                f.set(e[g], e[g + 1]);
            c = wc(c, f);
            a.resources[c.toString()] || (null === (d = we()) || void 0 === d ? 0 : d.fifWin) || (a.resources[c.toString()] = 1,
            b = b.document,
            a = _.Lj("IFRAME"),
            a.src = Xa(c),
            a.style.visibility = "hidden",
            a.style.display = "none",
            b = b.getElementsByTagName("script"),
            b.length && (b = b[b.length - 1],
            b.parentNode && b.parentNode.insertBefore(a, b.nextSibling)))
        }
        this.C.notify()
    }
    ;
    var GI = function(a, b, c, d) {
        Z.call(this, 928);
        this.J = a;
        this.context = b;
        this.C = Sv(this);
        this.l = X(this, c);
        Uv(this, d)
    };
    _.O(GI, Z);
    GI.prototype.j = function() {
        this.J.l();
        var a = this.context
          , b = this.l.value.length;
        if (a.Nc) {
            var c = a.zb;
            a = ml(a);
            var d = new bv;
            b = Db(d, 1, b, 0);
            b = ef(a, 7, ql, b);
            Ac(c, b)
        }
        this.C.notify()
    }
    ;
    var HI = function(a, b, c) {
        Z.call(this, 867);
        this.pa = a;
        this.L = b;
        this.C = Sv(this);
        this.l = X(this, c)
    };
    _.O(HI, Z);
    HI.prototype.j = function() {
        for (var a = _.y(this.l.value), b = a.next(); !b.done; b = a.next()) {
            var c = _.y(b.value);
            b = c.next().value;
            c = c.next().value;
            var d = x(this.L.O[b.getDomId()], 20);
            b.dispatchEvent(qC, 808, {
                Id: c,
                ye: d
            });
            this.pa.dispatchEvent("slotRequested", 705, new PF(b,"publisher_ads"))
        }
        this.C.notify()
    }
    ;
    var II = function(a, b, c, d, e, f, g, h, k, l, m, n, q, r, z, A, I, H, V) {
        Z.call(this, 785, _.bd(eu));
        this.ta = a;
        this.J = b;
        this.ea = c;
        this.L = d;
        this.ua = e;
        this.Ea = f;
        this.Ua = g;
        this.Ta = h;
        this.sa = l;
        this.Z = m;
        this.Oa = n;
        this.K = r;
        this.Gb = z;
        this.l = W(this);
        this.G = W(this);
        this.P = W(this);
        this.V = W(this);
        this.$ = X(this, q);
        this.qa = Tv(this, r);
        this.o = Tv(this, z);
        this.fa = X(this, k);
        this.B = Y(this, A);
        this.na = Tv(this, I);
        this.Y = Y(this, V);
        Hv(this.D, H, !0)
    };
    _.O(II, Z);
    II.prototype.j = function() {
        var a = this, b, c, d, e, f, g, h, k, l, m, n;
        return gb(function(q) {
            if (1 == q.j) {
                if (null === (b = a.B.value) || void 0 === b || !b.length)
                    return a.l.j(""),
                    q.return();
                d = !_.F(Pl);
                if (d) {
                    Xd();
                    var r = Zd[1]
                } else
                    r = "";
                e = r;
                d ? (Xd(),
                r = Zd[4]) : r = "";
                f = r;
                d ? (Xd(),
                r = Zd[6]) : r = "";
                g = r;
                h = null !== (c = a.qa.value) && void 0 !== c ? c : "0";
                a.o.value && (a.J.tb = a.o.value);
                k = new PH(a.B.value,a.ta,a.J,a.ea,a.$.value,a.L,a.ua,a.Ea,a.Ua,a.Ta,a.fa.value,e,f,g,h,a.na.value,a.sa,a.Z,a.Y.value);
                l = Ae(SH(k));
                m = l.url;
                n = l.Sc;
                Cv(a.Oa, (9).toString(), 9, n);
                a.l.j(m);
                a.G.j(e);
                a.P.j(f);
                a.V.j(g);
                return hb(q, a.K.promise, 2)
            }
            if (4 != q.j) {
                if (a.m)
                    return q.return();
                Cf("gpt_paw", function(z) {
                    var A, I;
                    sf(z);
                    G(z, "sig", null !== (A = a.K.o) && void 0 !== A ? A : -1);
                    G(z, "req", a.U);
                    G(z, "req_cnt", a.J.D);
                    G(z, "dm", null !== (I = window.navigator.deviceMemory) && void 0 !== I ? I : -1)
                }, _.bd(xt));
                a.o.value ? q = hb(q, a.Gb.promise, 4) : (q.j = 0,
                q = void 0);
                return q
            }
            Cf("gpt_etu", function(z) {
                var A;
                sf(z);
                G(z, "sig", null !== (A = a.Gb.o) && void 0 !== A ? A : -1);
                G(z, "req", a.U)
            });
            vn(q)
        })
    }
    ;
    var JI = function(a, b, c, d, e) {
        this.D = a;
        this.l = b;
        this.A = c;
        this.da = d;
        this.la = e;
        this.F = "";
        this.m = -1;
        this.state = 1;
        this.j = ""
    }
      , KI = function(a, b) {
        a.state = 4;
        try {
            a.l(b)
        } catch (c) {}
    };
    var LI = function(a, b, c, d, e, f, g, h, k) {
        Z.call(this, 788);
        this.K = a;
        this.P = b;
        this.G = c;
        this.C = Sv(this);
        this.B = 0;
        this.o = !1;
        this.l = null !== k && void 0 !== k ? k : new XMLHttpRequest;
        this.Z = X(this, d);
        this.$ = X(this, e);
        Uv(this, f);
        this.Y = X(this, g);
        this.V = X(this, h)
    };
    _.O(LI, Z);
    LI.prototype.j = function() {
        var a = this
          , b = this.$.value;
        if (b) {
            var c = new JI(this.K,this.P,this.G,this.Z.value,this.V.value);
            this.l.open("GET", b);
            this.l.withCredentials = this.Y.value;
            b = _.F(FD() ? Eu : Du);
            var d = _.F(Gu);
            b = GD(b, d);
            KD(this.l, b);
            this.l.onreadystatechange = function() {
                MI(a, c, !1)
            }
            ;
            this.l.onload = function() {
                MI(a, c, !0)
            }
            ;
            this.l.onerror = function() {
                KI(c, new Fv("XHR error"))
            }
            ;
            this.l.send()
        }
        this.C.notify()
    }
    ;
    var MI = function(a, b, c) {
        try {
            if (3 === a.l.readyState || 4 === a.l.readyState) {
                if (300 <= a.l.status) {
                    if (a.o)
                        return;
                    KI(b, new Fv("xhr_err-" + a.l.status));
                    a.o = !0;
                    if (_.F(At))
                        return
                }
                var d = a.l.responseText.substr(a.B);
                if (d && d)
                    if (1 !== b.state && 2 !== b.state)
                        KI(b, new Ev("state err: (" + ([b.state, b.j.length].join() + ")")));
                    else {
                        b.j && (d = b.j + d);
                        var e = 0
                          , f = !1;
                        do {
                            var g = d.indexOf("\n", e);
                            f = -1 !== g;
                            if (!f)
                                break;
                            var h = b
                              , k = d.substr(e, g - e);
                            if (1 === h.state)
                                h.F = k,
                                ++h.m,
                                h.state = 2;
                            else {
                                try {
                                    h.D(h.m, h.F, {
                                        kind: 0,
                                        ya: is(k)
                                    }, h.da, h.la),
                                    h.F = ""
                                } catch (l) {}
                                h.state = 1
                            }
                            e = g + 1
                        } while (f && e < d.length);
                        b.j = d.substr(e)
                    }
                a.B = a.l.responseText.length;
                c && 4 === a.l.readyState && (1 !== b.state || b.j ? KI(b, new Ev("state err (" + ([b.state, b.j.length].join() + ")"))) : (b.state = 3,
                b.A(b.m, b.da, b.la)))
            }
        } catch (l) {
            KI(b, l)
        }
    };
    var NI = function(a, b, c, d) {
        Z.call(this, 918);
        this.L = a;
        this.Oa = b;
        this.C = Sv(this);
        this.l = X(this, d);
        Uv(this, c)
    };
    _.O(NI, Z);
    NI.prototype.j = function() {
        var a = this.l.value;
        a.length && Dv(this.Oa, "3", (0,
        E.I)(x(this.L.O[a[0].getDomId()], 20)));
        this.C.notify()
    }
    ;
    var OI = function(a) {
        Z.call(this, 820);
        this.H = a;
        this.C = W(this)
    };
    _.O(OI, Z);
    OI.prototype.j = function() {
        var a = this, b, c, d;
        return gb(function(e) {
            if (1 == e.j)
                return _.F(fu) ? hb(e, Gh(a.H), 2) : (a.C.j(""),
                e.return());
            b = e.m;
            c = b.tb;
            d = b.status;
            c || Cf("gpt_etu", function(f) {
                sf(f);
                G(f, "rsn", d)
            });
            a.C.j(null !== c && void 0 !== c ? c : "");
            vn(e)
        })
    }
    ;
    var PI = function(a, b) {
        Z.call(this, 858);
        this.o = a;
        this.C = Sv(this);
        this.l = X(this, b)
    };
    _.O(PI, Z);
    PI.prototype.j = function() {
        var a = this, b, c, d, e, f, g, h;
        return gb(function(k) {
            switch (k.j) {
            case 1:
                k.F = 2;
                if (ID())
                    return d = _.F(FD() ? Eu : Du),
                    e = _.F(Gu),
                    f = new ED(!!D(a.l.value, 5),d,e),
                    hb(k, QD(f), 7);
                c = _.qf[258];
                return hb(k, c, 6);
            case 6:
                a.C.notify();
                k.j = 5;
                break;
            case 7:
                a.C.notify();
            case 5:
                _.F(Iu) && (g = null === (b = a.o) || void 0 === b ? void 0 : D(b, 9)) && !ID() && Uc({
                    mc: "1"
                }, "gptttmc");
                jb(k, 0);
                break;
            case 2:
                h = kb(k),
                h instanceof Error && a.R(h),
                a.C.notify(),
                vn(k)
            }
        })
    }
    ;
    var RI = function(a, b, c, d, e, f, g, h, k, l) {
        var m = vc.apply(10, arguments);
        Z.call(this, 814);
        this.slotId = a;
        this.L = b;
        this.J = c;
        this.B = d;
        this.la = e;
        this.pa = g;
        this.W = h;
        this.H = k;
        this.G = l;
        this.l = Sv(this);
        this.o = Y(this, l.Yc);
        this.Ac = Y(this, l.Xc);
        m = _.y(m);
        for (var n = m.next(); !n.done; n = m.next())
            Uv(this, n.value);
        mC(this.slotId, rC, QI)
    };
    _.O(RI, Z);
    RI.prototype.j = function() {
        if (!(this.B || this.o.value || _.F(zt) && this.Ac.value)) {
            var a = Vk(this.slotId, this.J, this.L, this.G, this.W, this.la, this.pa), b, c = this.J.j.get(this.slotId);
            c && (null === (b = c.Ic) || void 0 === b ? void 0 : b.va(),
            c.Ic = a);
            td(a)
        }
        this.l.notify()
    }
    ;
    var QI = _.Fo(function() {
        return void ah("gpt-first-ad-render")
    });
    var TI = function(a, b) {
        Z.call(this, 804);
        this.Fa = b;
        this.o = [];
        this.metadata = {
            Mf: SI(this, function(c) {
                return x(c, Fb(c, dr, 4))
            }),
            vb: SI(this, function(c) {
                return c.getHeight()
            }),
            Ab: SI(this, function(c) {
                return c.getWidth()
            }),
            Yc: SI(this, function(c) {
                return D(c, 8)
            }),
            Xd: SI(this, function(c) {
                return x(c, 10)
            }),
            Nf: SI(this, function(c) {
                return $i(c, 15)
            }),
            nc: SI(this, function(c) {
                return c.getEscapedQemQueryId()
            }),
            Bd: SI(this, function(c) {
                return Yb(c, Oq, 43)
            }),
            Od: SI(this, function(c) {
                return Yb(c, cr, Fb(c, dr, 41))
            }),
            be: SI(this, function(c) {
                return D(c, 9)
            }),
            Me: SI(this, function(c) {
                return D(c, 12)
            }),
            Yd: SI(this, function(c) {
                return Yb(c, Bq, Fb(c, er, 48))
            }),
            Ud: SI(this, function(c) {
                return Yb(c, zq, Fb(c, er, 39))
            }),
            Eb: SI(this, function(c) {
                return x(c, 36)
            }),
            Ne: SI(this, function(c) {
                return D(c, 13)
            }),
            Xc: SI(this, function(c) {
                return D(c, 3)
            }),
            Le: SI(this, function(c) {
                return x(c, 49)
            }),
            Qe: SI(this, function(c) {
                return x(c, 29)
            }),
            Re: SI(this, function(c) {
                return x(c, 30)
            }),
            $d: SI(this, function(c) {
                return Yb(c, Rq, 51)
            }),
            Oe: SI(this, function(c) {
                return D(c, 52)
            }),
            Gb: SI(this, function(c) {
                return x(c, 61)
            }),
            Rd: SI(this, function(c) {
                return (c = Yb(c, Nq, 54)) ? Wb(c, Lq, 1).filter(function(d) {
                    Gm(d, 1) || fd(32, "");
                    return !!Gm(d, 1)
                }).map(function(d) {
                    var e = Gm(d, 2);
                    return {
                        Ja: Gm(d, 1),
                        he: e && (_.u(e, "startsWith").call(e, window.location.protocol) || _.u(e, "startsWith").call(e, "data:") && 40 >= e.length) ? Oa(e) : void 0
                    }
                }) : []
            }),
            Rf: SI(this, function(c) {
                return $i(c, 23)
            }),
            Lf: SI(this, function(c) {
                return Wb(c, Pq, 14)
            }),
            $f: SI(this, function(c) {
                return D(c, 11)
            }),
            Yf: SI(this, function(c) {
                return x(c, 33)
            }),
            Hf: SI(this, function(c) {
                return $i(c, 27)
            }),
            ma: W(this),
            Je: SI(this, function(c) {
                return Yb(c, Tq, 55)
            }),
            Ie: SI(this, function(c) {
                return Yb(c, $q, 58)
            }),
            Te: SI(this, function(c) {
                var d, e;
                return null !== (e = null === (d = Yb(c, Qq, 56)) || void 0 === d ? void 0 : x(d, 1)) && void 0 !== e ? e : null
            }),
            qe: SI(this, function(c) {
                var d;
                return null !== (d = Wb(c, Uq, 62)) && void 0 !== d ? d : []
            })
        };
        this.l = X(this, a)
    };
    _.O(TI, Z);
    var SI = function(a, b) {
        var c = W(a);
        a.o.push({
            C: c,
            Sd: b
        });
        return c
    };
    TI.prototype.j = function() {
        for (var a = _.y(this.o), b = a.next(); !b.done; b = a.next()) {
            b = b.value;
            var c = b.Sd;
            b.C.ca(c(this.l.value))
        }
        0 === this.Fa.kind || 1 === this.Fa.kind && this.Fa.url ? this.metadata.ma.j(this.Fa) : (a = this.metadata.ma,
        b = a.j,
        c = this.l.value,
        c = x(c, Fb(c, dr, 4)),
        b.call(a, {
            kind: 0,
            ya: c || ""
        }))
    }
    ;
    var UI = function(a, b) {
        Z.call(this, 822);
        this.slotId = a;
        this.l = Sv(this);
        this.o = X(this, b)
    };
    _.O(UI, Z);
    UI.prototype.j = function() {
        for (var a, b = null !== (a = $i(this.o.value, 23)) && void 0 !== a ? a : [], c = _.bh(XF), d = _.y(b), e = d.next(); !e.done; e = d.next())
            e = e.value,
            YF(c, e),
            ZF(c, e, this.slotId);
        this.l.notify();
        b.length && Cf("gpt_hp", function(f) {
            sf(f);
            G(f, "ls", b.join())
        }, _.bd(it))
    }
    ;
    var VI = function(a, b) {
        Z.call(this, 803);
        this.l = a;
        this.slotId = b;
        this.C = W(this)
    };
    _.O(VI, Z);
    VI.prototype.j = function() {
        var a, b = JSON.parse(this.l), c = b ? Kh(b, Do) : void 0;
        if (!c)
            throw Error("missing ad unit path");
        if (null === b || void 0 === b || !b[c])
            throw Error("invalid ad unit path: " + c);
        b = b[c];
        if (!Array.isArray(b))
            throw Error("dictionary not an array: " + this.l);
        b = new br(b.slice());
        c = _.y(null !== (a = $i(b, 27)) && void 0 !== a ? a : []);
        for (var d = c.next(); !d.done; d = c.next())
            d = d.value,
            ed().F(d);
        ed().j(4);
        this.slotId.dispatchEvent(oC, 800, b);
        this.C.j(b)
    }
    ;
    var WI = function(a, b, c, d) {
        Z.call(this, 823);
        this.slotId = a;
        this.L = b;
        this.J = c;
        this.l = Sv(this);
        this.o = X(this, d)
    };
    _.O(WI, Z);
    WI.prototype.j = function() {
        var a = this
          , b = this.L.O[this.slotId.getDomId()];
        try {
            b && (4 === vg(b) || 5 === vg(b) || D(this.o.value, 11)) && (_.$D(this.J, this.slotId),
            WD(this.J, this.slotId, function() {
                _.aE(a.J, a.slotId)
            }))
        } finally {
            this.l.notify()
        }
    }
    ;
    var XI = function(a, b, c) {
        Z.call(this, 821);
        this.la = a;
        this.o = b;
        this.l = Sv(this);
        this.B = X(this, c)
    };
    _.O(XI, Z);
    XI.prototype.j = function() {
        if (this.la && D(this.la, 5)) {
            var a = new v.Set
              , b = Wb(this.B.value, Pq, 14);
            b = _.y(b);
            for (var c = b.next(); !c.done; c = b.next()) {
                c = c.value;
                var d = c.getVersion() || 1;
                1 === d ? a.has(1) || (Gw(this.o, "__gads", c, this.la),
                a.add(d)) : _.F(yt) && 2 === d && !a.has(2) && "1" !== Ew(this.o, "__gpi_opt_out", this.la) && (Gw(this.o, "__gpi", c, this.la),
                a.add(d))
            }
        }
        this.l.notify()
    }
    ;
    var YI = function() {
        this.j = new v.Map
    }
      , bJ = function(a, b, c, d, e, f, g, h, k, l, m) {
        var n = document
          , q = window
          , r = ++e.o;
        ZI(a, r, b, e, d).then(_.Af(872, function(z) {
            if (null !== z && void 0 !== z && z.length) {
                cE(e, r, z.length);
                z = _.y(z);
                for (var A = z.next(); !A.done; A = z.next())
                    $I(a, r, A.value, d, f, n, e, q).then(_.Af(907, function(I) {
                        if (I) {
                            var H = I.da;
                            I = I.la;
                            var V = c.Ea
                              , T = c.Ua || NaN
                              , ea = c.Ta || NaN
                              , K = null
                              , P = null
                              , S = ++e.D
                              , ba = window.isSecureContext && _.F(lu) ? "wbn" : "ldjh";
                            if ("wbn" === ba) {
                                K = Array(36);
                                P = 0;
                                for (var ma, ca = 0; 36 > ca; ca++)
                                    8 == ca || 13 == ca || 18 == ca || 23 == ca ? K[ca] = "-" : 14 == ca ? K[ca] = "4" : (2 >= P && (P = 33554432 + 16777216 * Math.random() | 0),
                                    ma = P & 15,
                                    P >>= 4,
                                    K[ca] = WG[19 == ca ? ma & 3 | 8 : ma]);
                                K = pj("urn:uuid:" + K.join("").toLowerCase());
                                P = "googletag.wbn" + S
                            }
                            aJ(a, r, H, e, ba, I, d, f, !!D(d.T, 6), V, T, ea, ed().m(), ve(H[0].getAdUnitPath()), K, P, n, q, g, h, k, l, m)
                        }
                    }))
            }
        }))
    }
      , ZI = function(a, b, c, d, e) {
        var f = Ce("google_nofetch"), g, h, k, l, m;
        return gb(function(n) {
            return 1 == n.j ? (g = new rd,
            (0,
            E.qb)(!a.j.has(b)),
            a.j.set(b, g),
            h = new qI(c),
            N(g, h),
            k = new zI(e.O,h.o),
            N(g, k),
            l = new xI(d,!!D(e.T, 6),f,k.l),
            N(g, l),
            m = new CI(d,e,document,k.o),
            N(g, m),
            td(g),
            hb(n, m.l.promise, 2)) : n.return(l.l.promise)
        })
    }
      , $I = function(a, b, c, d, e, f, g, h) {
        var k, l;
        return gb(function(m) {
            k = new rd;
            _.Pu((0,
            E.I)(a.j.get(b)), k);
            l = new JH(d,h,c,e,f,g);
            N(k, l);
            td(k);
            return m.return(l.l.promise)
        })
    }
      , aJ = function(a, b, c, d, e, f, g, h, k, l, m, n, q, r, z, A, I, H, V, T, ea, K, P) {
        var S, ba, ma, ca, Za, sb, Ha, Hb, Nb, xh, Xc, wb, Ib, Md, Ec, Ai, Bi, Bn, Cn, Vu, Dn, jg, En, Fn, Gn, Hn, In, Jn, Wu;
        gb(function(XK) {
            S = new rd;
            _.Pu((0,
            E.I)(a.j.get(b)), S);
            ba = new hk;
            ba.j(f);
            ma = new wI(H);
            N(S, ma);
            ca = new uI(c,k,g,pi(),H,ba);
            N(S, ca);
            Za = new OI(H);
            N(S, Za);
            sb = new vI(d);
            N(S, sb);
            Ha = new PI(Rl(g.T),ba);
            N(S, Ha);
            Hb = (0,
            E.I)(_.bh(ch).o);
            Nb = (0,
            E.I)(_.bh(ch).l);
            xh = (0,
            E.I)(_.bh(ch).D);
            Xc = (0,
            E.I)(_.bh(ch).B);
            wb = (0,
            E.I)(_.bh(ch).A);
            Ib = new rH(ca.l,g.O,Nb,xh,Xc,r,d);
            N(S, Ib);
            Md = new rI(q,wb,Hb);
            N(S, Md);
            Ec = new II(k,d,h,g,e,l,m,n,Md.C,z,A,Ef.N(),ba,ma.l,Za.C,ca.l,sb.C,Ha.C,Ib.C);
            N(S, Ec);
            Ai = new NI(g,Ef.N(),Ec.l,ca.l);
            N(S, Ai);
            Bi = new AI(Rl(g.T),ba);
            N(S, Bi);
            Bn = _.Af(646, function(Tb, Se, Kn, Ci, kg) {
                var Te = function() {
                    return void cJ(kg, g, Tb, Se, Kn, Ci, d, h, T, P)
                };
                Tb && _.F(at) ? setTimeout(_.Af(646, Te), 0) : Te()
            });
            Cn = _.Af(647, function(Tb, Se, Kn) {
                var Ci = function() {
                    var kg = Tb + 1
                      , Te = Se.length;
                    if (V.Nc) {
                        var Ub = V.zb
                          , ae = ml(V)
                          , YK = new cv;
                        kg = Db(YK, 1, kg, 0);
                        Te = Db(kg, 2, Te, 0);
                        ae = ef(ae, 8, ql, Te);
                        Ac(Ub, ae)
                    }
                    for (Ub = Tb + 1; Ub < Se.length; ++Ub)
                        Se[Ub] && (ae = new br,
                        ae = '{"empty":' + w(ae, 8, !0).X() + "}",
                        cJ(Kn, g, Ub, ae, {
                            kind: 0,
                            ya: ""
                        }, Se, d, h, T, P));
                    Ub = (0,
                    E.I)(d.m.get(b)) - 1;
                    0 === Ub ? d.m.delete(b) : d.m.set(b, Ub);
                    0 === Ub && (Ub = a.j.get(b)) && (a.j.delete(b),
                    Ub.va())
                };
                _.F(at) ? setTimeout(_.Af(646, Ci), 0) : Ci()
            });
            Vu = function(Tb) {
                Tb = Tb instanceof Error ? Tb : Error();
                Tb.message = Tb.message || "strm_err";
                Gf(289, Tb)
            }
            ;
            Dn = _.Af(289, Vu);
            "ldjh" === e ? jg = new LI(Bn,Dn,Cn,ca.l,Ec.l,Ai.C,Bi.C,ba) : jg = new sI(Bn,Dn,Cn,e,(0,
            E.I)(A),(0,
            E.I)(z),I,ca.l,Ec.l,Ai.C,Bi.C,ba);
            N(S, jg);
            En = new GI(d,V,ca.l,jg.C);
            N(S, En);
            Fn = new nI(d,g,h,e,k,l,m,n,Md.C,z,A,Ec.l,ca.l,ma.l,sb.C,Ec.G,Ec.P,Ec.V,Ib.C,En.C);
            N(S, Fn);
            Gn = new HI(T,g,Fn.C);
            N(S, Gn);
            Hn = new FI(e,ea,H,Gn.C);
            N(S, Hn);
            In = new EI(g,K,ca.l,Hn.C);
            N(S, In);
            Jn = new BI(d,g,I,ca.l,In.C);
            N(S, Jn);
            Wu = new DI(dd(H),De(),H,ba,jg.C);
            N(S, Wu);
            td(S);
            return hb(XK, Jn.C.promise, 0)
        })
    }
      , cJ = function(a, b, c, d, e, f, g, h, k, l) {
        var m, n;
        return gb(function(q) {
            m = f[c];
            if (!m)
                return Gf(646, Error("missing slot")),
                q.return();
            0 === c && (n = (0,
            E.I)(x(b.O[m.getDomId()], 20)),
            Dv(Ef.N(), "4", n));
            return hb(q, dJ(m, d, e, g, b, a, h, k, l), 0)
        })
    }
      , dJ = function(a, b, c, d, e, f, g, h, k) {
        var l, m, n, q, r, z, A, I, H, V, T, ea, K, P;
        return gb(function(S) {
            switch (S.j) {
            case 1:
                n = Ce("google_norender");
                q = _.F(Ft);
                r = new rd;
                z = new VI(b,a);
                N(r, z);
                A = new XI(f,g,z.C);
                N(r, A);
                I = new UI(a,z.C);
                N(r, I);
                H = new WI(a,e,d,z.C);
                N(r, H);
                V = new TI(z.C,c);
                N(r, V);
                T = V.metadata;
                if (q)
                    return ea = new RI(a,e,d,n,f,g,h,document,window,T,A.l,I.l,H.l),
                    N(r, ea),
                    td(r),
                    hb(S, ea.l.promise, 3);
                td(r);
                return hb(S, v.Promise.all([A.l.promise, I.l.promise, H.l.promise]), 3);
            case 3:
                return a.m ? S.return() : hb(S, T.Yc.promise, 6);
            case 6:
                return K = null !== (l = S.m) && void 0 !== l ? l : !1,
                hb(S, T.nc.promise, 7);
            case 7:
                P = null !== (m = S.m) && void 0 !== m ? m : "";
                if (!K && !n || _.F(Gt))
                    q || qH(k, a, d, e, T, f, h, K || n);
                else {
                    var ba = Mg(a, document);
                    ba && le(ba, window, P, !0);
                    Dv(Ef.N(), "5", (0,
                    E.I)(x(e.O[a.getDomId()], 20)));
                    a.dispatchEvent(pC, 801, {
                        lc: null,
                        isBackfill: !1
                    });
                    var ma;
                    if (_.ZD(d, a) && !Wg(a, document)) {
                        ba = e.T;
                        var ca = e.O[a.getDomId()];
                        (null !== (ma = D(ca, 10)) && void 0 !== ma ? ma : D(ba, 11)) && Dj(a, document, ca, ba)
                    }
                    a.dispatchEvent(rC, 825, {
                        isEmpty: !0
                    })
                }
                r.va();
                vn(S)
            }
        })
    };
    var eJ = function(a) {
        TF.call(this);
        this.context = a;
        this.j = new v.Set;
        this.D = {};
        this.J = TD.N();
        this.R = new YI;
        this.l = new nH;
        this.o = new Dw(window);
        this.M = _.bh(DG);
        this.B = _.AG.N();
        _.F(Au) && new xG(this)
    };
    _.O(eJ, TF);
    eJ.prototype.getName = function() {
        return "publisher_ads"
    }
    ;
    eJ.prototype.display = function(a, b, c, d) {
        c = void 0 === c ? "" : c;
        d = void 0 === d ? "" : d;
        var e = "";
        if (c)
            if (_.ia(c) && 1 == c.nodeType) {
                var f = c;
                e = f.id
            } else
                e = c;
        this.enable();
        var g = pm(a, b, e)
          , h = g.slotId;
        g = g.Ma;
        h && g ? (f && !e && (f.id = h.getDomId()),
        this.Na(h, g),
        g.setClickUrl(d),
        dj(null !== f && void 0 !== f ? f : h.getDomId())) : M(this.log, Uh("PubAdsService.display", [a, b, c]))
    }
    ;
    var qG = function(a, b, c) {
        var d = void 0 === d ? document : d;
        var e;
        null === (e = c.O[b.getDomId()]) || void 0 === e ? void 0 : w(e, 19, !0);
        var f = {
            id: rr(b.getDomId())
        };
        bb(d, Wd(f));
        Mg(b, d) ? (a.enable(),
        YD(a.J, b),
        fJ(a, c, b)) : Cf("gpt_pb_write", function(g) {
            sf(g)
        })
    };
    eJ.prototype.Na = function(a, b) {
        var c = this;
        D(b, 17) || gJ(this, a);
        this.dispatchEvent(sC, 724, {
            Oc: a.getDomId(),
            O: b
        });
        mC(a, rC, function(d) {
            var e = d.detail;
            d = e.size;
            var f = new FF(a,"publisher_ads");
            e.isEmpty && (f.isEmpty = !0);
            e = a.j.getResponseInformation();
            d && e && (f.size = [d.width, d.height],
            f.sourceAgnosticCreativeId = e.sourceAgnosticCreativeId,
            f.sourceAgnosticLineItemId = e.sourceAgnosticLineItemId,
            f.isBackfill = e.isBackfill,
            f.creativeId = e.creativeId,
            f.lineItemId = e.lineItemId,
            f.creativeTemplateId = e.creativeTemplateId,
            f.advertiserId = e.advertiserId,
            f.campaignId = e.campaignId,
            f.yieldGroupIds = e.yieldGroupIds,
            f.companyIds = e.companyIds);
            c.dispatchEvent("slotRenderEnded", 708, f)
        });
        mC(a, oC, function() {
            return void c.dispatchEvent("slotResponseReceived", 709, new QF(a,c.getName()))
        });
        TF.prototype.Na.call(this, a, b)
    }
    ;
    eJ.prototype.Lc = function(a, b) {
        this.enable();
        gJ(this, b);
        this.log.info(LE());
        var c = a.T
          , d = a.O
          , e = D(c, 6);
        if (e || !this.J.Wa(b))
            e && (e = Mg(b)) && b.dispatchEvent(nC, 778, e),
            D(c, 4) && (d = d[b.getDomId()],
            e = document,
            e = void 0 === e ? document : e,
            Cj(d, c) && !this.J.Wa(b) && Dj(b, e, d, c)),
            fJ(this, a, b)
    }
    ;
    var gJ = function(a, b) {
        a.isEnabled() && YD(a.J, b)
    }
      , fJ = function(a, b, c) {
        var d = hJ(a, b, c);
        iJ(a, d, b, {
            Ea: 1
        });
        b = c.getAdUnitPath();
        if (c = a.D[b]) {
            c = _.y(c);
            for (d = c.next(); !d.done; d = c.next())
                d = d.value,
                iJ(a, d.da, d.L, d.se);
            delete a.D[b]
        }
    }
      , hJ = function(a, b, c) {
        var d, e = b.T;
        b = b.O;
        return D(e, 4) ? [] : !D(e, 6) || (null === (d = b[c.getDomId()]) || void 0 === d ? 0 : D(d, 17)) ? (a.j.add(c),
        _.jm(c, function() {
            return void a.j.delete(c)
        }),
        [c]) : a.ja.filter(function(f) {
            if (a.j.has(f))
                return !1;
            a.j.add(f);
            _.jm(f, function() {
                return void a.j.delete(f)
            });
            return !0
        })
    }
      , iJ = function(a, b, c, d) {
        a.log.info(SE());
        if (jJ(a, b, d, c) && 1 !== d.Ea)
            for (b = _.y(b),
            d = b.next(); !d.done; d = b.next())
                d = d.value.getDomId(),
                a.dispatchEvent(tC, 725, {
                    Oc: d,
                    O: c.O[d]
                })
    }
      , jJ = function(a, b, c, d) {
        b = b.filter(function(e) {
            return _.ZD(a.J, e)
        });
        if (!b.length)
            return null;
        bJ(a.R, b, c, d, a.J, a.o, a.context, a, a.M, a.B, a.l);
        return b
    };
    eJ.prototype.refresh = function(a, b, c) {
        b = b ? kJ(this, b) : this.ja;
        if (!b.length)
            return !1;
        lJ(this, a, b, null !== c && void 0 !== c ? c : {
            Ea: 2
        });
        return !0
    }
    ;
    var kJ = function(a, b) {
        return b.filter(function(c, d) {
            if (!c.m)
                return !0;
            M(a.log, VE(String(d)));
            return !1
        })
    }
      , lJ = function(a, b, c, d) {
        var e, f, g = c[0], h = null !== (e = null === g || void 0 === g ? void 0 : g.getDomId()) && void 0 !== e ? e : "";
        if (a.isEnabled()) {
            g = {};
            h = _.y(c);
            for (var k = h.next(); !k.done; g = {
                pb: g.pb
            },
            k = h.next())
                g.pb = k.value,
                a.j.add(g.pb),
                _.jm(g.pb, function(l) {
                    return function() {
                        return void a.j.delete(l.pb)
                    }
                }(g));
            iJ(a, c, b, d)
        } else
            c.length && D(b.T, 6) ? (M(a.log, RE(h), g),
            g = g.getAdUnitPath(),
            h = null !== (f = a.D[g]) && void 0 !== f ? f : [],
            h.push({
                da: c,
                L: b,
                se: d
            }),
            a.D[g] = h) : M(a.log, PE(h), g)
    };
    eJ.prototype.yc = function() {
        var a = this
          , b = lf.N().j;
        if (D(b, 6))
            for (var c = _.y(this.ja), d = c.next(); !d.done; d = c.next())
                gJ(this, d.value);
        mJ(this, b);
        mC(this, "rewardedSlotClosed", function(e) {
            var f = e.detail.slot;
            e = _.u(a.ja, "find").call(a.ja, function(g) {
                return f === g.j
            });
            nJ(a, [e], lf.N().j, lf.N().m, a.J)
        });
        om()
    }
    ;
    eJ.prototype.destroySlots = function(a, b) {
        var c, d;
        a = TF.prototype.destroySlots.call(this, a);
        if (a.length && this.isEnabled()) {
            var e = null !== (c = null === b || void 0 === b ? void 0 : b.T) && void 0 !== c ? c : lf.N().j;
            b = null !== (d = null === b || void 0 === b ? void 0 : b.O) && void 0 !== d ? d : lf.N().m;
            oJ(this, a, e, b)
        }
        return a
    }
    ;
    var pJ = function(a, b, c, d) {
        if (!a.isEnabled())
            return M(a.log, QE(), d[0]),
            !1;
        var e = kJ(a, d);
        if (!e.length)
            return M(a.log, Uh("PubAdsService.clear", [d].filter(function(f) {
                return void 0 !== f
            }))),
            !1;
        a.log.info(TE());
        oJ(a, e, b, c);
        return !0
    }
      , oJ = function(a, b, c, d) {
        for (var e = _.y(b), f = e.next(); !f.done; f = e.next())
            VD(a.J, f.value);
        nJ(a, b, c, d, a.J)
    };
    eJ.prototype.forceExperiment = function(a) {
        a = Number(a);
        0 < a && ed().F(a)
    }
    ;
    var nJ = function(a, b, c, d, e) {
        var f = void 0 === f ? window : f;
        var g = _.F(Ft);
        b = _.y(b);
        for (var h = b.next(); !h.done; h = b.next()) {
            h = h.value;
            g ? UD(e, h) : oH(a.l, h);
            var k = d[h.getDomId()];
            Cj(k, c) && Dj(h, f.document, k, c);
            dE(e, h)
        }
    }
      , qJ = function(a, b, c, d) {
        w(d, 21, !0);
        w(d, 22, String(null !== b && void 0 !== b ? b : ""));
        w(d, 23, String(null !== c && void 0 !== c ? c : ""));
        mJ(a, d)
    }
      , rJ = function(a, b) {
        var c, d;
        return a.isEnabled() ? {
            vid: null !== (c = x(b, 22)) && void 0 !== c ? c : "",
            cmsid: null !== (d = x(b, 23)) && void 0 !== d ? d : ""
        } : null
    }
      , mJ = function(a, b) {
        D(b, 21) && a.isEnabled() && w(b, 29, js())
    };
    var sJ = function(a, b) {
        var c = b.ja;
        return a.map(function(d) {
            return _.u(c, "find").call(c, function(e) {
                return e.j === d
            })
        }).filter(function(d) {
            return !!d
        })
    }
      , tJ = function(a) {
        var b = _.bh(xw)
          , c = [];
        a = _.y(a);
        for (var d = a.next(); !d.done; d = a.next()) {
            d = d.value;
            b.D = d;
            var e = ed().j(9);
            1 === e.length && (c.push(d),
            c.push(d + "-" + e[0]))
        }
        return c
    }
      , uJ = _.Fo(function() {
        return fs("google_DisableInitialLoad is deprecated and will be removed. Please use googletag.pubads().isInitialLoadDisabled() instead to check if initial load has been disabled.")
    })
      , vJ = _.Fo(function() {
        return fs("googletag.pubadds().setCookieOptions() is deprecated, and will stop having an effect in early 2022.  Consider migrating to Limited Ads.")
    })
      , wJ = _.Fo(function() {
        return fs("googletag.pubadds().setCookieOptions() has been removed, and no longer has any effect.  Consider migrating to Limited Ads.")
    })
      , xJ = function() {
        Object.defineProperty(window, "google_DisableInitialLoad", {
            get: function() {
                uJ();
                return !0
            },
            set: function() {
                uJ()
            },
            configurable: !0
        })
    }
      , sm = function(a) {
        zF.call(this, a);
        var b = this
          , c = pi()
          , d = lf.N().j
          , e = lf.N().m
          , f = !1;
        this.setTargeting = J(1, function(g, h) {
            var k = null;
            "string" === typeof h ? k = [h] : Array.isArray(h) ? k = h : Zh(h) && (k = _.u(Array, "from").call(Array, h));
            var l = "string" === typeof g && !Yh(g);
            k = k && sa(k);
            var m, n = null != (m = null == k ? void 0 : k.every(function(q) {
                return "string" === typeof q
            })) ? m : !1;
            if (!l || !n)
                return M(c, Uh("PubAdsService.setTargeting", [g, h])),
                b;
            h = (C = Wb(d, $h, 2),
            _.u(C, "find")).call(C, function(q) {
                return ai(q) === g
            });
            if ("gpt-beta" === g) {
                if (a.isEnabled())
                    return M(c, fF(k.join())),
                    b;
                if (h)
                    return M(c, gF(k.join())),
                    b;
                k = tJ(k)
            }
            h ? bi(h, k) : (h = bi(ci(new $h, g), k),
            di(d, 2, $h, h));
            c.info(ei(g, k.join(), a.getName()));
            return b
        });
        this.clearTargeting = J(2, function(g) {
            if (void 0 === g)
                return Ii(d, 2, void 0),
                c.info(dF(a.getName())),
                b;
            if ("gpt-beta" === g)
                return M(c, hF(g)),
                b;
            var h = Wb(d, $h, 2)
              , k = _.u(h, "findIndex").call(h, function(l) {
                return ai(l) === g
            });
            if (0 > k)
                return M(c, XE(g, a.getName())),
                b;
            h.splice(k, 1);
            Ii(d, 2, h);
            c.info(WE(g, a.getName()));
            return b
        });
        this.getTargeting = J(38, function(g) {
            if ("string" !== typeof g)
                return M(c, Uh("PubAdsService.getTargeting", [g])),
                [];
            var h = (C = Wb(d, $h, 2),
            _.u(C, "find")).call(C, function(k) {
                return ai(k) === g
            });
            return h ? $i(h, 2).slice() : []
        });
        this.getTargetingKeys = J(39, function() {
            return Wb(d, $h, 2).map(function(g) {
                return ai(g)
            })
        });
        this.setCategoryExclusion = J(3, function(g) {
            if ("string" !== typeof g || Yh(g))
                return M(c, Uh("PubAdsService.setCategoryExclusion", [g])),
                b;
            (C = $i(d, 3),
            _.u(C, "includes")).call(C, g) || up(d, 3, g, void 0);
            c.info(YE(g));
            return b
        });
        this.clearCategoryExclusions = J(4, function() {
            w(d, 3, qp);
            c.info(ZE());
            return b
        });
        this.disableInitialLoad = J(5, function() {
            w(d, 4, !0);
            f || (f = !0,
            xJ())
        });
        this.enableSingleRequest = J(6, function() {
            if (a.isEnabled() && !D(d, 6))
                return M(c, ME("PubAdsService.enableSingleRequest")),
                !1;
            c.info(NE("single request"));
            w(d, 6, !0);
            return !0
        });
        this.enableAsyncRendering = J(7, function() {
            return !0
        });
        this.enableSyncRendering = J(8, function() {
            fs("GPT synchronous rendering is no longer supported, ads will be requested and rendered asynchronously. See https://support.google.com/admanager/answer/9212594 for more details.");
            return !1
        });
        this.enableLazyLoad = J(485, function(g) {
            var h = new qk;
            w(h, 1, 800);
            w(h, 2, 400);
            w(h, 3, 3);
            if (_.ia(g)) {
                var k = g.fetchMarginPercent;
                "number" === typeof k && (0 <= k ? w(h, 1, k) : -1 == k && w(h, 1, void 0, !1));
                k = g.renderMarginPercent;
                "number" === typeof k && (0 <= k ? w(h, 2, k) : -1 == k && w(h, 2, void 0, !1));
                g = g.mobileScaling;
                "number" === typeof g && (0 < g ? w(h, 3, g) : -1 == g && w(h, 3, 1))
            }
            Of(d, 5, h)
        });
        this.setCentering = J(9, function(g) {
            g = !!g;
            c.info(OE("centering", String(g)));
            w(d, 15, g)
        });
        this.definePassback = J(10, function(g, h) {
            return (g = rm(a, g, h)) && g.fd
        });
        this.refresh = J(11, function(g, h) {
            h = void 0 === h ? {} : h;
            if (g && !Array.isArray(g) || !_.ia(h) || h.changeCorrelator && "boolean" !== typeof h.changeCorrelator)
                M(c, Uh("PubAdsService.refresh", _.u(Array, "from").call(Array, arguments)));
            else {
                h && 0 == h.changeCorrelator || d.setCorrelator(js());
                var k = g ? sJ(g, a) : a.ja;
                a.refresh(Jg(d, e), k) || M(c, Uh("PubAdsService.refresh", _.u(Array, "from").call(Array, arguments)))
            }
        });
        this.enableVideoAds = J(12, function() {
            w(d, 21, !0);
            mJ(a, d)
        });
        this.setVideoContent = J(13, function(g, h) {
            qJ(a, g, h, d)
        });
        this.collapseEmptyDivs = J(14, function(g) {
            g = void 0 === g ? !1 : g;
            w(d, 11, !0);
            var h = !!g;
            w(d, 10, h);
            Cf("gpt_ced", function(k) {
                G(k, "sc", h ? "t" : "f");
                G(k, "level", "page");
                sf(k)
            });
            c.info(UE(String(h)));
            return !!D(d, 11)
        });
        this.clear = J(15, function(g) {
            if (Array.isArray(g))
                return pJ(a, d, e, sJ(g, a));
            if (void 0 === g)
                return pJ(a, d, e, a.ja);
            M(c, Uh("PubAdsService.clear", [g]));
            return !1
        });
        this.setLocation = J(16, function(g) {
            if ("string" !== typeof g)
                return M(c, Uh("PubAdsService.setLocation", [g])),
                b;
            w(d, 8, g);
            return b
        });
        this.setCookieOptions = J(17, function(g) {
            if (_.F(jt))
                return wJ(),
                b;
            _.F(kt) && vJ();
            if (0 !== g && 1 !== g)
                return M(c, pF("PubadsService.setCookieOptions", ri(g), "0,1")),
                b;
            w(d, 24, g);
            return b
        });
        this.setTagForChildDirectedTreatment = J(18, function(g) {
            if (1 !== g && 0 !== g)
                return M(c, pF("PubadsService.setTagForChildDirectedTreatment", ri(g), "0,1")),
                b;
            var h = Rl(d) || new Sl;
            h.setTagForChildDirectedTreatment(g);
            Of(d, 25, h);
            return b
        });
        this.clearTagForChildDirectedTreatment = J(19, function() {
            var g = Rl(d);
            if (!g)
                return b;
            g.clearTagForChildDirectedTreatment();
            Of(d, 25, g);
            return b
        });
        this.setPublisherProvidedId = J(20, function(g) {
            g = String(g);
            c.info(OE("PPID", g));
            w(d, 16, g);
            return b
        });
        this.set = J(21, function(g, h) {
            if ("string" !== typeof g || !g.length || void 0 === hE()[g] || "string" !== typeof h)
                return M(c, Uh("PubAdsService.set", [g, h])),
                b;
            var k = (C = Wb(d, $h, 14),
            _.u(C, "find")).call(C, function(l) {
                return ai(l) === g
            });
            k ? bi(k, [h]) : (k = ci(new $h, g),
            up(k, 2, h, void 0),
            di(d, 14, $h, k));
            c.info(HE(g, String(h), a.getName()));
            return b
        });
        this.get = J(22, function(g) {
            if ("string" !== typeof g)
                return M(c, Uh("PubAdsService.get", [g])),
                null;
            var h = (C = Wb(d, $h, 14),
            _.u(C, "find")).call(C, function(k) {
                return ai(k) === g
            });
            return (h = h && $i(h, 2)) ? h[0] : null
        });
        this.getAttributeKeys = J(23, function() {
            return Wb(d, $h, 14).map(function(g) {
                return ai(g)
            })
        });
        this.display = J(24, function(g, h, k, l) {
            return void a.display(g, h, void 0 === k ? "" : k, void 0 === l ? "" : l)
        });
        this.updateCorrelator = J(25, function() {
            fs(iB("update"));
            M(c, kF());
            d.setCorrelator(js());
            return b
        });
        this.defineOutOfPagePassback = J(35, function(g) {
            g = rm(a, g, [1, 1]);
            if (!g)
                return null;
            w(g.Ma, 15, 1);
            return g.fd
        });
        this.setForceSafeFrame = J(36, function(g) {
            if ("boolean" !== typeof g)
                return M(c, Uh("PubAdsService.setForceSafeFrame", [ri(g)])),
                b;
            w(d, 13, g);
            return b
        });
        this.setSafeFrameConfig = J(37, function(g) {
            var h = si(g);
            if (!h)
                return M(c, Uh("PubAdsService.setSafeFrameConfig", [g])),
                b;
            Of(d, 18, h);
            return b
        });
        this.setRequestNonPersonalizedAds = J(445, function(g) {
            if (0 !== g && 1 !== g)
                return M(c, pF("PubAdsService.setRequestNonPersonalizedAds", ri(g), "0,1")),
                b;
            var h = Rl(d) || new Sl;
            w(h, 8, !!g);
            Of(d, 25, h);
            return b
        });
        this.setTagForUnderAgeOfConsent = J(447, function(g) {
            g = void 0 === g ? 2 : g;
            if (2 !== g && 0 !== g && 1 !== g)
                return M(c, pF("PubadsService.setTagForUnderAgeOfConsent", ri(g), "2,0,1")),
                b;
            var h = Rl(d) || new Sl;
            h.setTagForUnderAgeOfConsent(g);
            Of(d, 25, h);
            return b
        });
        this.getCorrelator = J(27, function() {
            return String(d.getCorrelator())
        });
        this.getTagSessionCorrelator = J(631, function() {
            return dd(_.t)
        });
        this.getVideoContent = J(30, function() {
            return rJ(a, d)
        });
        this.getVersion = J(568, Ee);
        this.forceExperiment = J(569, function(g) {
            return void a.forceExperiment(g)
        });
        this.setCorrelator = J(28, function(g) {
            fs(iB("set"));
            M(c, jF());
            if (zg(window))
                return b;
            if (!("number" === typeof g && isFinite(g) && 0 == g % 1 && 0 < g))
                return M(c, Uh("PubadsService.setCorrelator", [ri(g)])),
                b;
            d.setCorrelator(g);
            w(d, 27, !0);
            return b
        });
        this.markAsAmp = J(570, function() {
            window.console && window.console.warn && window.console.warn("googletag.pubads().markAsAmp() is deprecated and ignored.")
        });
        this.isSRA = J(571, function() {
            return !!D(d, 6)
        });
        this.setImaContent = J(328, function(g, h) {
            bg(d, 22) ? qJ(a, g, h, d) : (w(d, 21, !0),
            mJ(a, d),
            "string" === typeof g && w(d, 19, g),
            "string" === typeof h && w(d, 20, h))
        });
        this.getImaContent = J(329, function() {
            return bg(d, 22) ? rJ(a, d) : a.isEnabled() ? {
                vid: x(d, 19) || "",
                cmsid: x(d, 20) || ""
            } : null
        });
        this.isInitialLoadDisabled = J(572, function() {
            return !!D(d, 4)
        });
        this.setPrivacySettings = J(648, function(g) {
            if (!_.ia(g))
                return M(c, Uh("PubAdsService.setPrivacySettings", [g])),
                b;
            var h = g.restrictDataProcessing, k = g.childDirectedTreatment, l = g.underAgeOfConsent, m = g.limitedAds, n = g.nonPersonalizedAds, q = g.trafficSource, r = g.adContentRating, z, A = null != (z = Rl(d)) ? z : new Sl;
            if (_.F(ht) && void 0 !== r)
                if (null === r || 0 === r)
                    w(A, 11, void 0, !1);
                else if (Kh(tG, function(I) {
                    return I === r
                }))
                    w(A, 11, r);
                else
                    throw Error("Invalid Ad Content Rating value " + ri(r));
            "boolean" === typeof n ? w(A, 8, n) : void 0 !== n && M(c, qi("PubAdsService.setPrivacySettings", ri(g), "nonPersonalizedAds", ri(n)));
            "boolean" === typeof h ? w(A, 1, h) : void 0 !== h && M(c, qi("PubAdsService.setPrivacySettings", ri(g), "restrictDataProcessing", ri(h)));
            "boolean" === typeof m ? (Cf("gpt_ltd_sd", function(I) {
                return void sf(I)
            }, Number(m && !D(A, 9))),
            w(A, 9, m)) : void 0 !== m && M(c, qi("PubAdsService.setPrivacySettings", ri(g), "limitedAds", ri(m)));
            void 0 !== l && (null === l ? A.setTagForUnderAgeOfConsent(2) : !1 === l ? A.setTagForUnderAgeOfConsent(0) : !0 === l ? A.setTagForUnderAgeOfConsent(1) : M(c, qi("PubAdsService.setPrivacySettings", ri(g), "underAgeOfConsent", ri(l))));
            void 0 !== k && (null === k ? A.clearTagForChildDirectedTreatment() : !1 === k ? A.setTagForChildDirectedTreatment(0) : !0 === k ? A.setTagForChildDirectedTreatment(1) : M(c, qi("PubAdsService.setPrivacySettings", ri(g), "childDirectedTreatment", ri(k))));
            _.F(Ut) && void 0 !== q && (null === q ? w(A, 10, void 0, !1) : Kh(sG, function(I) {
                return I === q
            }) ? w(A, 10, q) : M(c, qi("PubAdsService.setPrivacySettings", ri(g), "trafficSource", ri(q))));
            Of(d, 25, A);
            return b
        });
        _.F(Tt) && (this.addTaxonomyValue = J(922, function(g, h) {
            if (!Kh(rG, function(I) {
                return I === g
            }) || null == h || "object" === typeof h && !Array.isArray(h))
                return M(c, Uh("PubAdsService.addTaxonomyValue", [g, h])),
                b;
            var k = (C = Wb(d, rB, 32),
            _.u(C, "find")).call(C, function(I) {
                return I.getTaxonomy() === g
            })
              , l = k ? [].concat(_.yc($i(k, 2))) : []
              , m = l.length
              , n = _.bd(St)
              , q = [];
            h = _.y(Array.isArray(h) ? h : [h]);
            for (var r = h.next(); !r.done; r = h.next()) {
                r = r.value;
                var z = Number(r)
                  , A = String(r);
                !_.u(Number, "isInteger").call(Number, z) || 0 >= z || 999999 < z ? q.push(r) : _.u(l, "includes").call(l, A) || l.push(A)
            }
            q.length && M(c, Uh("PubAdsService.addTaxonomyValue", [g, q]));
            l.length > n && (M(c, xF(g.toString(), String(n))),
            l.splice(n));
            l.length > m && (c.info(uF(JSON.stringify(l.slice(m)), g)),
            k ? tB(k, l) : wB(d, tB(sB(new rB, g), l)));
            return b
        }),
        this.getTaxonomy = J(923, function(g) {
            if (!Kh(rG, function(l) {
                return l === g
            }))
                return M(c, Uh("PubAdsService.getTaxonomy", [g])),
                [];
            var h, k;
            return null != (k = null == (h = (C = Wb(d, rB, 32),
            _.u(C, "find")).call(C, function(l) {
                return l.getTaxonomy() === g
            })) ? void 0 : $i(h, 2).slice()) ? k : []
        }),
        this.getTaxonomies = J(924, function() {
            for (var g = new v.Map, h = _.y(Wb(d, rB, 32)), k = h.next(); !k.done; k = h.next())
                k = k.value,
                g.set(k.getTaxonomy(), $i(k, 2).slice());
            return g
        }),
        this.clearTaxonomy = J(925, function(g) {
            if (void 0 === g) {
                if (!Wb(d, rB, 32).length)
                    return M(c, yF()),
                    b;
                Ii(d, 32, void 0);
                c.info(wF())
            } else {
                var h = Wb(d, rB, 32)
                  , k = h.filter(function(l) {
                    return l.getTaxonomy() !== g
                });
                h.length === k.length ? M(c, yF()) : (Ii(d, 32, k),
                c.info(vF(g)))
            }
            return b
        }))
    };
    _.O(sm, zF);
    Pe(sm, 7);
    var yJ = function() {
        var a = this
          , b = []
          , c = []
          , d = pi();
        this.addSize = _.Af(88, function(e, f) {
            var g;
            if (g = wi(e))
                g = vi(f) || Array.isArray(f) && f.every(vi);
            g ? b.push([e, f]) : (c.push([e, f]),
            M(d, Uh("SizeMappingBuilder.addSize", [e, f])));
            return a
        });
        this.build = _.Af(89, function() {
            if (c.length)
                return M(d, FE(ri(c))),
                null;
            pa(b);
            return b
        })
    };
    var um = function(a, b) {
        Z.call(this, 951);
        this.H = window;
        a && (this.l = X(this, a));
        b && (this.o = X(this, b))
    };
    _.O(um, Z);
    um.prototype.j = function() {
        var a, b, c, d, e, f, g, h, k, l;
        null !== (a = (k = this.H).pbjs) && void 0 !== a ? a : k.pbjs = {};
        null !== (b = (l = this.H.pbjs).que) && void 0 !== b ? b : l.que = [];
        var m = null !== (c = we().pbjs_hooks) && void 0 !== c ? c : []
          , n = new eC(null !== (e = null === (d = this.l) || void 0 === d ? void 0 : d.value) && void 0 !== e ? e : new v.Map,null !== (g = null === (f = this.o) || void 0 === f ? void 0 : f.value) && void 0 !== g ? g : new v.Map,this.H.pbjs);
        m = _.y(m);
        for (var q = m.next(); !q.done; q = m.next())
            n.push(q.value);
        m = !!we().pbjs_hooks;
        if ((q = (null === (h = this.l) || void 0 === h ? void 0 : h.value) || _.bd(hg)) || m)
            we().pbjs_hooks = Oh(n, function() {
                return new dC(n)
            });
        q && !m && lg(this.H)
    }
    ;
    var zJ = function() {
        kC.apply(this, arguments);
        this.D = this.j = 0
    };
    _.O(zJ, kC);
    zJ.prototype.push = function() {
        var a = vc.apply(0, arguments), b, c = pi();
        a = _.y(a);
        for (var d = a.next(); !d.done; d = a.next()) {
            d = d.value;
            try {
                "function" === typeof d && (_.F(ft) ? d.call(v.globalThis) : d.call(arguments),
                this.j++)
            } catch (e) {
                this.D++,
                null === (b = null === window || void 0 === window ? void 0 : window.console) || void 0 === b ? void 0 : b.error("Exception in queued GPT command", e),
                c.error(DE(String(e)))
            }
        }
        c.info(EE(String(this.j), String(this.D)));
        return this.j
    }
    ;
    var AJ = function() {
        var a = new lr
          , b = new mr;
        a.setCorrelator(dd(_.t));
        var c = ed().m().join();
        Db(a, 5, c, "");
        Db(a, 2, 1, 0);
        Of(b, 1, a);
        a = kr();
        c = _.F(tu);
        a = pl(a, 9, c);
        a = pl(a, 10, !0);
        c = _.F(xu);
        a = pl(a, 13, c);
        c = _.F(yu);
        a = pl(a, 14, c);
        a = pl(a, 16, !0);
        Of(b, 2, a);
        window.google_rum_config = b.toJSON()
    };
    var BJ = function() {
        TF.apply(this, arguments);
        this.j = new v.Map
    };
    _.O(BJ, TF);
    BJ.prototype.getName = function() {
        return "content"
    }
    ;
    BJ.prototype.display = function(a, b, c, d) {
        c = void 0 === c ? "" : c;
        d = void 0 === d ? "" : d;
        this.enable();
        b = pm(a, b, c);
        a = b.slotId;
        b = b.Ma;
        this.Na((0,
        E.I)(a), (0,
        E.I)(b));
        b.setClickUrl(d);
        dj(a.getDomId())
    }
    ;
    BJ.prototype.destroySlots = function(a) {
        a = TF.prototype.destroySlots.call(this, a);
        for (var b = _.y(a), c = b.next(); !c.done; c = b.next())
            this.j.delete(c.value);
        return a
    }
    ;
    var CJ = function(a, b) {
        var c = a.j.get(b)
          , d = Mg(b);
        !(c && void 0 !== c.content && d && a.isEnabled()) || c && c.kd || (c.kd = !0,
        Ya(d, Ma(c.content)),
        Cf("gpt_cont_svc", function(e) {
            var f;
            G(e, "cl", String(null === (f = null === c || void 0 === c ? void 0 : c.content) || void 0 === f ? void 0 : f.length));
            sf(e, [b.getAdUnitPath()])
        }),
        a.dispatchEvent("slotRenderEnded", 819, new FF(b,a.getName())))
    };
    BJ.prototype.yc = function() {}
    ;
    BJ.prototype.Lc = function(a, b) {
        CJ(this, b)
    }
    ;
    BJ.prototype.setContent = function(a, b) {
        var c = this;
        if (_.u(this.ja, "includes").call(this.ja, a) && "string" === typeof b && b.length) {
            var d = this.j.get(a);
            d ? d.content = b : this.j.set(a, {
                content: b,
                kd: void 0
            });
            _.jm(a, function() {
                return void c.j.delete(a)
            });
            CJ(this, a)
        }
    }
    ;
    var DJ = Q(["https://securepubads.g.doubleclick.net/gpt/pubads_impl_", "_", ".js"])
      , EJ = Q(["https://securepubads.g.doubleclick.net/pagead/managed/js/gpt/", "/pubads_impl_", ".js"])
      , FJ = Q(["https://pagead2.googlesyndication.com/gpt/pubads_impl_", "_", ".js"])
      , GJ = Q(["https://pagead2.googlesyndication.com/pagead/managed/js/gpt/", "/pubads_impl_", ".js"])
      , HJ = Q(["https://securepubads.g.doubleclick.net/pagead/js/rum.js"])
      , IJ = Q(["https://securepubads.g.doubleclick.net/pagead/js/rum_debug.js"]);
    (function(a, b, c, d) {
        var e, f;
        try {
            var g = window.googletag;
            if (null === g || void 0 === g ? 0 : g.evalScripts)
                g.evalScripts();
            else {
                YC();
                xe("evalScripts", Rm);
                try {
                    Aw()
                } catch (K) {
                    vf(408, K)
                }
                yl();
                try {
                    yw(),
                    ed().j(13),
                    ed().j(3)
                } catch (K) {
                    vf(408, K)
                }
                ah("gpt-tag-load");
                var h = null !== d && void 0 !== d ? d : an()
                  , k = !!_.qf[259];
                rl(h, k);
                _.bh(Wi);
                var l = new eJ(h);
                g = d = void 0;
                if (_.qf[260]) {
                    var m = _.bh(ch);
                    CC(m, l);
                    d = m.R;
                    g = m.U
                }
                _.F(Zs) && vm(d, g);
                var n = b(a, 0);
                _.AG.N().F = n;
                _.bd(Xm) && Ym();
                _.Jf(827, function() {
                    var K, P = document;
                    "function" === typeof P.interestCohort && _.F(du) && (TD.N().A = null === (K = P.interestCohort) || void 0 === K ? void 0 : K.call(P))
                }, !0);
                var q = hi(mu);
                q && _.Jf(862, function() {
                    var K = document;
                    if (q && K.head) {
                        var P = _.Lj("META");
                        K.head.appendChild(P);
                        P.httpEquiv = "origin-trial";
                        P.content = q
                    }
                }, !0);
                xe("defineOutOfPageSlot", J(73, function(K, P) {
                    var S;
                    "string" === typeof K && K.length && (null == P || "string" === typeof P || "number" === typeof P && xm(P)) ? K = zm(K, "number" === typeof P ? P : 1, "string" === typeof P ? P : void 0) : (pi().error(Uh("googletag.defineOutOfPageSlot", [K, P]), void 0, _.F(Os)),
                    K = null);
                    return K ? null !== (S = K.j) && void 0 !== S ? S : null : null
                }));
                fG();
                ej();
                uG();
                xe("getVersion", J(946, Ee));
                xe("pubads", J(947, function() {
                    return tm(l)
                }));
                var r;
                xe("companionAds", J(816, function() {
                    null !== r && void 0 !== r ? r : r = new gG(l);
                    return hj(r)
                }));
                var z;
                if (_.F($t) && Ce("google_content_service_disabled", c))
                    Cf("gpt_scdvqp", function(K) {
                        sf(K)
                    }, 1);
                else {
                    var A = _.Fo(function() {
                        M(pi(), tF(), null, {
                            ub: !0
                        })
                    });
                    xe("content", J(817, function() {
                        _.F($t) && A();
                        null !== z && void 0 !== z ? z : z = new BJ;
                        return jj(z)
                    }))
                }
                xe("setAdIframeTitle", J(729, Kj));
                xe("getEventLog", J(945, function() {
                    return new pG
                }));
                xe("sizeMapping", J(90, function() {
                    return new yJ
                }));
                xe("enableServices", J(91, function() {
                    for (var K = _.y(RF), P = K.next(); !P.done; P = K.next())
                        P = P.value,
                        P.isEnabled() && pi().info(IE()),
                        P.enable()
                }));
                xe("destroySlots", J(75, Qm));
                xe("apiReady", !0);
                var I = function() {
                    _.Jf(77, function() {
                        var K = we().cmd;
                        if (!K || Array.isArray(K)) {
                            var P = new zJ;
                            we().cmd = Qh(P);
                            null !== K && void 0 !== K && K.length && P.push.apply(P, K)
                        }
                    })
                };
                we().fifWin && "complete" !== document.readyState ? _.eb(window, "load", function() {
                    window.setTimeout(I, 0)
                }) : I();
                Nm();
                if (_.F(Au) || Ef.N().j)
                    AJ(),
                    oj(document, pj(Wa(_.F(Cu) ? n.xe : n.ze).toString()));
                Jm();
                yj();
                var H = _.bd(bt);
                if (0 !== H) {
                    var V = _.Lj("SCRIPT")
                      , T = 1 === H ? pj(Hd(ao("https://pagead2.googlesyndication.com/pagead/managed/js/m202102160101/pubads_impl.js"))) : pj(Hd(ao("https://securepubads.g.doubleclick.net/gpt/pubads_impl_2021021602.js")));
                    ab(V, io(T, String(Math.random())));
                    var ea = _.$c();
                    (null !== (f = null !== (e = document.head) && void 0 !== e ? e : document.body) && void 0 !== f ? f : document.documentElement).appendChild(V);
                    V.onload = function() {
                        Cf("gpt_bvslt", function(K) {
                            sf(K);
                            G(K, "t", _.$c() - ea);
                            G(K, "f", H)
                        }, 1)
                    }
                }
                Cf("gpt_ila", function(K) {
                    sf(K);
                    G(K, "ila", k)
                }, _.bd(Ts));
                if (_.F(gt))
                    try {
                        new SharedArrayBuffer(1),
                        Uc({
                            sab: "1"
                        }, "gpt_sab")
                    } catch (K) {
                        .01 >= Math.random() && Uc({
                            sab: "0"
                        }, "gpt_sab")
                    }
            }
        } catch (K) {
            vf(106, K)
        }
    }
    )(De(), function(a, b) {
        return {
            Gd: function(c) {
                return 0 === b ? B(DJ, c, a) : B(EJ, a, c)
            },
            Fd: function(c) {
                return 0 === b ? B(FJ, c, a) : B(GJ, a, c)
            },
            ze: B(HJ),
            xe: B(IJ)
        }
    }, window);
}
).call(this, {});
