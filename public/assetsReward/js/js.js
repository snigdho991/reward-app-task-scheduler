// Copyright 2012 Google Inc. All rights reserved.
(function() {

    var data = {
        "resource": {
            "version": "1",

            "macros": [{
                "function": "__e"
            }, {
                "function": "__c",
                "vtp_value": "undefined"
            }],
            "tags": [{
                "function": "__rep",
                "vtp_containerId": "UA-49392197-1",
                "vtp_remoteConfig": ["map"],
                "tag_id": 1
            }, {
                "function": "__zone",
                "vtp_childContainers": ["list", ["map", "publicId", "G-LJR3232ZPB"]],
                "tag_id": 3
            }],
            "predicates": [{
                "function": "_eq",
                "arg0": ["macro", 0],
                "arg1": "gtm.js"
            }],
            "rules": [[["if", 0], ["add", 0, 1]]]
        },
        "runtime": []

    };

    /*

 Copyright The Closure Library Authors.
 SPDX-License-Identifier: Apache-2.0
*/
    var h, aa = function(a) {
        var b = 0;
        return function() {
            return b < a.length ? {
                done: !1,
                value: a[b++]
            } : {
                done: !0
            }
        }
    }, ca = "function" == typeof Object.create ? Object.create : function(a) {
        var b = function() {};
        b.prototype = a;
        return new b
    }
    , da;
    if ("function" == typeof Object.setPrototypeOf)
        da = Object.setPrototypeOf;
    else {
        var ha;
        a: {
            var ia = {
                a: !0
            }
              , ka = {};
            try {
                ka.__proto__ = ia;
                ha = ka.a;
                break a
            } catch (a) {}
            ha = !1
        }
        da = ha ? function(a, b) {
            a.__proto__ = b;
            if (a.__proto__ !== b)
                throw new TypeError(a + " is not extensible");
            return a
        }
        : null
    }
    var ma = da
      , na = function(a, b) {
        a.prototype = ca(b.prototype);
        a.prototype.constructor = a;
        if (ma)
            ma(a, b);
        else
            for (var c in b)
                if ("prototype" != c)
                    if (Object.defineProperties) {
                        var d = Object.getOwnPropertyDescriptor(b, c);
                        d && Object.defineProperty(a, c, d)
                    } else
                        a[c] = b[c];
        a.Oj = b.prototype
    }
      , oa = this || self
      , pa = function(a) {
        return a
    };
    var ra = function() {}
      , sa = function(a) {
        return "function" == typeof a
    }
      , l = function(a) {
        return "string" == typeof a
    }
      , ta = function(a) {
        return "number" == typeof a && !isNaN(a)
    }
      , ua = Array.isArray
      , wa = function(a, b) {
        if (a && ua(a))
            for (var c = 0; c < a.length; c++)
                if (a[c] && b(a[c]))
                    return a[c]
    }
      , ya = function(a, b) {
        if (!ta(a) || !ta(b) || a > b)
            a = 0,
            b = 2147483647;
        return Math.floor(Math.random() * (b - a + 1) + a)
    }
      , Aa = function(a, b) {
        for (var c = new za, d = 0; d < a.length; d++)
            c.set(a[d], !0);
        for (var e = 0; e < b.length; e++)
            if (c.get(b[e]))
                return !0;
        return !1
    }
      , Ba = function(a, b) {
        for (var c in a)
            Object.prototype.hasOwnProperty.call(a, c) && b(c, a[c])
    }
      , Ca = function(a) {
        return !!a && ("[object Arguments]" == Object.prototype.toString.call(a) || Object.prototype.hasOwnProperty.call(a, "callee"))
    }
      , Ea = function(a) {
        return Math.round(Number(a)) || 0
    }
      , Fa = function(a) {
        return "false" == String(a).toLowerCase() ? !1 : !!a
    }
      , Ga = function(a) {
        var b = [];
        if (ua(a))
            for (var c = 0; c < a.length; c++)
                b.push(String(a[c]));
        return b
    }
      , Ha = function(a) {
        return a ? a.replace(/^\s+|\s+$/g, "") : ""
    }
      , Ia = function() {
        return new Date(Date.now())
    }
      , Ja = function() {
        return Ia().getTime()
    }
      , za = function() {
        this.prefix = "gtm.";
        this.values = {}
    };
    za.prototype.set = function(a, b) {
        this.values[this.prefix + a] = b
    }
    ;
    za.prototype.get = function(a) {
        return this.values[this.prefix + a]
    }
    ;
    var Ka = function(a, b, c) {
        return a && a.hasOwnProperty(b) ? a[b] : c
    }
      , Ma = function(a) {
        var b = a;
        return function() {
            if (b) {
                var c = b;
                b = void 0;
                try {
                    c()
                } catch (d) {}
            }
        }
    }
      , Na = function(a, b) {
        for (var c in b)
            b.hasOwnProperty(c) && (a[c] = b[c])
    }
      , Oa = function(a) {
        for (var b in a)
            if (a.hasOwnProperty(b))
                return !0;
        return !1
    }
      , Pa = function(a, b) {
        for (var c = [], d = 0; d < a.length; d++)
            c.push(a[d]),
            c.push.apply(c, b[a[d]] || []);
        return c
    }
      , Qa = function(a, b) {
        for (var c = {}, d = c, e = a.split("."), f = 0; f < e.length - 1; f++)
            d = d[e[f]] = {};
        d[e[e.length - 1]] = b;
        return c
    }
      , Ra = /^\w{1,9}$/
      , Sa = function(a, b) {
        a = a || {};
        b = b || ",";
        var c = [];
        Ba(a, function(d, e) {
            Ra.test(d) && e && c.push(d)
        });
        return c.join(b)
    };
    var Ta, Ua = function() {
        if (void 0 === Ta) {
            var a = null
              , b = oa.trustedTypes;
            if (b && b.createPolicy) {
                try {
                    a = b.createPolicy("goog#html", {
                        createHTML: pa,
                        createScript: pa,
                        createScriptURL: pa
                    })
                } catch (c) {
                    oa.console && oa.console.error(c.message)
                }
                Ta = a
            } else
                Ta = a
        }
        return Ta
    };
    var Wa = function(a, b) {
        this.m = b === Va ? a : ""
    };
    Wa.prototype.toString = function() {
        return this.m + ""
    }
    ;
    var Va = {};
    var Xa = /^(?:(?:https?|mailto|ftp):|[^:/?#]*(?:[/?#]|$))/i;
    function Ya() {
        var a = oa.navigator;
        if (a) {
            var b = a.userAgent;
            if (b)
                return b
        }
        return ""
    }
    function Za(a) {
        return -1 != Ya().indexOf(a)
    }
    ;var $a = {}
      , ab = function(a, b, c) {
        this.m = c === $a ? a : ""
    };
    ab.prototype.toString = function() {
        return this.m.toString()
    }
    ;
    var bb = function(a) {
        return a instanceof ab && a.constructor === ab ? a.m : "type_error:SafeHtml"
    }
      , cb = function(a) {
        var b = Ua()
          , c = b ? b.createHTML(a) : a;
        return new ab(c,null,$a)
    }
      , db = new ab(oa.trustedTypes && oa.trustedTypes.emptyHTML || "",0,$a);
    /*

 SPDX-License-Identifier: Apache-2.0
*/
    var eb = function(a, b) {
        var c = function() {};
        c.prototype = a.prototype;
        var d = new c;
        a.apply(d, Array.prototype.slice.call(arguments, 1));
        return d
    }
      , fb = function(a) {
        var b = a;
        return function() {
            if (b) {
                var c = b;
                b = null;
                c()
            }
        }
    };
    var gb = function(a) {
        var b = !1, c;
        return function() {
            b || (c = a(),
            b = !0);
            return c
        }
    }(function() {
        var a = document.createElement("div")
          , b = document.createElement("div");
        b.appendChild(document.createElement("div"));
        a.appendChild(b);
        var c = a.firstChild.firstChild;
        a.innerHTML = bb(db);
        return !c.parentElement
    });
    var B = window
      , F = document
      , hb = navigator
      , ib = F.currentScript && F.currentScript.src
      , jb = function(a, b) {
        var c = B[a];
        B[a] = void 0 === c ? b : c;
        return B[a]
    }
      , kb = function(a, b) {
        b && (a.addEventListener ? a.onload = b : a.onreadystatechange = function() {
            a.readyState in {
                loaded: 1,
                complete: 1
            } && (a.onreadystatechange = null,
            b())
        }
        )
    }
      , lb = {
        async: 1,
        nonce: 1,
        onerror: 1,
        onload: 1,
        src: 1,
        type: 1
    }
      , mb = {
        onload: 1,
        src: 1,
        width: 1,
        height: 1,
        style: 1
    };
    function nb(a, b, c) {
        b && Ba(b, function(d, e) {
            d = d.toLowerCase();
            c.hasOwnProperty(d) || a.setAttribute(d, e)
        })
    }
    var ob = function(a, b, c, d) {
        var e = F.createElement("script");
        nb(e, d, lb);
        e.type = "text/javascript";
        e.async = !0;
        var f, g = Ua(), k = g ? g.createScriptURL(a) : a;
        f = new Wa(k,Va);
        e.src = f instanceof Wa && f.constructor === Wa ? f.m : "type_error:TrustedResourceUrl";
        var m, n, p = (e.ownerDocument && e.ownerDocument.defaultView || window).document, r = null === (n = p.querySelector) || void 0 === n ? void 0 : n.call(p, "script[nonce]");
        (m = r ? r.nonce || r.getAttribute("nonce") || "" : "") && e.setAttribute("nonce", m);
        kb(e, b);
        c && (e.onerror = c);
        var t = F.getElementsByTagName("script")[0] || F.body || F.head;
        t.parentNode.insertBefore(e, t);
        return e
    }
      , pb = function() {
        if (ib) {
            var a = ib.toLowerCase();
            if (0 === a.indexOf("https://"))
                return 2;
            if (0 === a.indexOf("http://"))
                return 3
        }
        return 1
    }
      , rb = function(a, b, c, d, e) {
        var f = e
          , g = !1;
        f || (f = F.createElement("iframe"),
        g = !0);
        nb(f, c, mb);
        d && Ba(d, function(m, n) {
            f.dataset[m] = n
        });
        f.height = "0";
        f.width = "0";
        f.style.display = "none";
        f.style.visibility = "hidden";
        if (g) {
            var k = F.body && F.body.lastChild || F.body || F.head;
            k.parentNode.insertBefore(f, k)
        }
        kb(f, b);
        void 0 !== a && (f.src = a);
        return f
    }
      , sb = function(a, b, c) {
        var d = new Image(1,1);
        d.onload = function() {
            d.onload = null;
            b && b()
        }
        ;
        d.onerror = function() {
            d.onerror = null;
            c && c()
        }
        ;
        d.src = a;
        return d
    }
      , tb = function(a, b, c, d) {
        a.addEventListener ? a.addEventListener(b, c, !!d) : a.attachEvent && a.attachEvent("on" + b, c)
    }
      , ub = function(a, b, c) {
        a.removeEventListener ? a.removeEventListener(b, c, !1) : a.detachEvent && a.detachEvent("on" + b, c)
    }
      , H = function(a) {
        B.setTimeout(a, 0)
    }
      , vb = function(a, b) {
        return a && b && a.attributes && a.attributes[b] ? a.attributes[b].value : null
    }
      , wb = function(a) {
        var b = a.innerText || a.textContent || "";
        b && " " != b && (b = b.replace(/^[\s\xa0]+|[\s\xa0]+$/g, ""));
        b && (b = b.replace(/(\xa0+|\s{2,}|\n|\r\t)/g, " "));
        return b
    }
      , xb = function(a) {
        var b = F.createElement("div")
          , c = cb("A<div>" + a + "</div>")
          , d = b;
        if (gb())
            for (; d.lastChild; )
                d.removeChild(d.lastChild);
        d.innerHTML = bb(c);
        b = b.lastChild;
        for (var e = []; b.firstChild; )
            e.push(b.removeChild(b.firstChild));
        return e
    }
      , yb = function(a, b, c) {
        c = c || 100;
        for (var d = {}, e = 0; e < b.length; e++)
            d[b[e]] = !0;
        for (var f = a, g = 0; f && g <= c; g++) {
            if (d[String(f.tagName).toLowerCase()])
                return f;
            f = f.parentElement
        }
        return null
    }
      , zb = function(a) {
        var b;
        try {
            b = hb.sendBeacon && hb.sendBeacon(a)
        } catch (c) {}
        b || sb(a)
    }
      , Ab = function(a, b) {
        var c = a[b];
        c && "string" === typeof c.animVal && (c = c.animVal);
        return c
    }
      , Bb = function(a) {
        var b = F.featurePolicy;
        return b && sa(b.allowsFeature) ? b.allowsFeature(a) : !1
    };
    /*
 jQuery (c) 2005, 2012 jQuery Foundation, Inc. jquery.org/license. */
    var Cb = /\[object (Boolean|Number|String|Function|Array|Date|RegExp)\]/
      , Fb = function(a) {
        if (null == a)
            return String(a);
        var b = Cb.exec(Object.prototype.toString.call(Object(a)));
        return b ? b[1].toLowerCase() : "object"
    }
      , Gb = function(a, b) {
        return Object.prototype.hasOwnProperty.call(Object(a), b)
    }
      , Hb = function(a) {
        if (!a || "object" != Fb(a) || a.nodeType || a == a.window)
            return !1;
        try {
            if (a.constructor && !Gb(a, "constructor") && !Gb(a.constructor.prototype, "isPrototypeOf"))
                return !1
        } catch (c) {
            return !1
        }
        for (var b in a)
            ;
        return void 0 === b || Gb(a, b)
    }
      , J = function(a, b) {
        var c = b || ("array" == Fb(a) ? [] : {}), d;
        for (d in a)
            if (Gb(a, d)) {
                var e = a[d];
                "array" == Fb(e) ? ("array" != Fb(c[d]) && (c[d] = []),
                c[d] = J(e, c[d])) : Hb(e) ? (Hb(c[d]) || (c[d] = {}),
                c[d] = J(e, c[d])) : c[d] = e
            }
        return c
    };
    var Ib = function(a) {
        if (void 0 === a || ua(a) || Hb(a))
            return !0;
        switch (typeof a) {
        case "boolean":
        case "number":
        case "string":
        case "function":
            return !0
        }
        return !1
    };
    var Jb = function() {
        var a = function(b) {
            return {
                toString: function() {
                    return b
                }
            }
        };
        return {
            dh: a("consent"),
            eh: a("consent_always_fire"),
            df: a("convert_case_to"),
            ef: a("convert_false_to"),
            ff: a("convert_null_to"),
            hf: a("convert_true_to"),
            jf: a("convert_undefined_to"),
            Aj: a("debug_mode_metadata"),
            ob: a("function"),
            Mh: a("instance_name"),
            Qh: a("live_only"),
            Rh: a("malware_disabled"),
            Sh: a("metadata"),
            Cj: a("original_activity_id"),
            Dj: a("original_vendor_template_id"),
            Wh: a("once_per_event"),
            Pf: a("once_per_load"),
            Fj: a("priority_override"),
            Gj: a("respected_consent_types"),
            Tf: a("setup_tags"),
            Vf: a("tag_id"),
            Wf: a("teardown_tags")
        }
    }();
    var ec;
    var fc = [], gc = [], hc = [], ic = [], jc = [], kc = {}, lc, mc, nc, oc = function(a, b) {
        var c = a["function"]
          , d = b && b.event;
        if (!c)
            throw Error("Error: No function name given for function call.");
        var e = kc[c], f = {}, g;
        for (g in a)
            if (a.hasOwnProperty(g))
                if (0 === g.indexOf("vtp_"))
                    e && d && d.hg && d.hg(a[g]),
                    f[void 0 !== e ? g : g.substr(4)] = a[g];
                else if (g === Jb.eh.toString() && a[g]) {}
        e && d && d.gg && (f.vtp_gtmCachedValues = d.gg);
        return void 0 !== e ? e(f) : ec(c, f, b)
    }, qc = function(a, b, c) {
        c = c || [];
        var d = {}, e;
        for (e in a)
            a.hasOwnProperty(e) && (d[e] = pc(a[e], b, c));
        return d
    }, pc = function(a, b, c) {
        if (ua(a)) {
            var d;
            switch (a[0]) {
            case "function_id":
                return a[1];
            case "list":
                d = [];
                for (var e = 1; e < a.length; e++)
                    d.push(pc(a[e], b, c));
                return d;
            case "macro":
                var f = a[1];
                if (c[f])
                    return;
                var g = fc[f];
                if (!g || b.Ke(g))
                    return;
                c[f] = !0;
                try {
                    var k = qc(g, b, c);
                    k.vtp_gtmEventId = b.id;
                    d = oc(k, {
                        event: b,
                        index: f,
                        type: 2
                    });
                    nc && (d = nc.ji(d, k))
                } catch (A) {
                    b.Ag && b.Ag(A, Number(f)),
                    d = !1
                }
                c[f] = !1;
                return d;
            case "map":
                d = {};
                for (var m = 1; m < a.length; m += 2)
                    d[pc(a[m], b, c)] = pc(a[m + 1], b, c);
                return d;
            case "template":
                d = [];
                for (var n = !1, p = 1; p < a.length; p++) {
                    var r = pc(a[p], b, c);
                    mc && (n = n || r === mc.Yc);
                    d.push(r)
                }
                return mc && n ? mc.ni(d) : d.join("");
            case "escape":
                d = pc(a[1], b, c);
                if (mc && ua(a[1]) && "macro" === a[1][0] && mc.Li(a))
                    return mc.aj(d);
                d = String(d);
                for (var t = 2; t < a.length; t++)
                    Kb[a[t]] && (d = Kb[a[t]](d));
                return d;
            case "tag":
                var u = a[1];
                if (!ic[u])
                    throw Error("Unable to resolve tag reference " + u + ".");
                return d = {
                    mg: a[2],
                    index: u
                };
            case "zb":
                var q = {
                    arg0: a[2],
                    arg1: a[3],
                    ignore_case: a[5]
                };
                q["function"] = a[1];
                var v = rc(q, b, c)
                  , y = !!a[4];
                return y || 2 !== v ? y !== (1 === v) : null;
            default:
                throw Error("Attempting to expand unknown Value type: " + a[0] + ".");
            }
        }
        return a
    }, rc = function(a, b, c) {
        try {
            return lc(qc(a, b, c))
        } catch (d) {
            JSON.stringify(a)
        }
        return 2
    };
    var uc = function(a) {
        function b(t) {
            for (var u = 0; u < t.length; u++)
                d[t[u]] = !0
        }
        for (var c = [], d = [], e = sc(a), f = 0; f < gc.length; f++) {
            var g = gc[f]
              , k = tc(g, e);
            if (k) {
                for (var m = g.add || [], n = 0; n < m.length; n++)
                    c[m[n]] = !0;
                b(g.block || [])
            } else
                null === k && b(g.block || []);
        }
        for (var p = [], r = 0; r < ic.length; r++)
            c[r] && !d[r] && (p[r] = !0);
        return p
    }
      , tc = function(a, b) {
        for (var c = a["if"] || [], d = 0; d < c.length; d++) {
            var e = b(c[d]);
            if (0 === e)
                return !1;
            if (2 === e)
                return null
        }
        for (var f = a.unless || [], g = 0; g < f.length; g++) {
            var k = b(f[g]);
            if (2 === k)
                return null;
            if (1 === k)
                return !1
        }
        return !0
    }
      , sc = function(a) {
        var b = [];
        return function(c) {
            void 0 === b[c] && (b[c] = rc(hc[c], a));
            return b[c]
        }
    };
    var vc = {
        ji: function(a, b) {
            b[Jb.df] && "string" === typeof a && (a = 1 == b[Jb.df] ? a.toLowerCase() : a.toUpperCase());
            b.hasOwnProperty(Jb.ff) && null === a && (a = b[Jb.ff]);
            b.hasOwnProperty(Jb.jf) && void 0 === a && (a = b[Jb.jf]);
            b.hasOwnProperty(Jb.hf) && !0 === a && (a = b[Jb.hf]);
            b.hasOwnProperty(Jb.ef) && !1 === a && (a = b[Jb.ef]);
            return a
        }
    };
    var O = {
        Kb: "_ee",
        ed: "_syn_or_mod",
        Hj: "_uei",
        fe: "_eu",
        Ej: "_pci",
        Hb: "event_callback",
        Oc: "event_timeout",
        ya: "gtag.config",
        La: "gtag.get",
        wa: "purchase",
        Db: "refund",
        ib: "begin_checkout",
        Ab: "add_to_cart",
        Bb: "remove_from_cart",
        nh: "view_cart",
        lf: "add_to_wishlist",
        xa: "view_item",
        Cb: "view_promotion",
        Hd: "select_promotion",
        Gd: "select_item",
        jb: "view_item_list",
        kf: "add_payment_info",
        mh: "add_shipping_info",
        Na: "value_key",
        Wa: "value_callback",
        U: "allow_ad_personalization_signals",
        fc: "restricted_data_processing",
        Yb: "allow_google_signals",
        qa: "cookie_expires",
        Fb: "cookie_update",
        hc: "session_duration",
        Sc: "session_engaged_time",
        Ga: "user_properties",
        ra: "transport_url",
        T: "ads_data_redaction",
        Aa: "user_data",
        ac: "first_party_collection",
        C: "ad_storage",
        K: "analytics_storage",
        bf: "region",
        cf: "wait_for_update",
        oa: "conversion_linker",
        Ea: "conversion_cookie_prefix",
        ia: "value",
        fa: "currency",
        Lf: "trip_type",
        aa: "items",
        Cf: "passengers",
        Kd: "allow_custom_scripts",
        ic: "session_id",
        Hf: "quantity",
        $a: "transaction_id",
        Ya: "language",
        Mc: "country",
        Lc: "allow_enhanced_conversions",
        Pd: "aw_merchant_id",
        Nd: "aw_feed_country",
        Od: "aw_feed_language",
        Md: "discount",
        W: "developer_id",
        Tc: "delivery_postal_code",
        Vd: "estimated_delivery_date",
        Td: "shipping",
        be: "new_customer",
        Qd: "customer_lifetime_value",
        Ud: "enhanced_conversions",
        Xb: "page_view",
        ka: "linker",
        N: "domains",
        Jb: "decorate_forms",
        yf: "enhanced_conversions_automatic_settings",
        uh: "auto_detection_enabled",
        zf: "ga_temp_client_id",
        Id: "user_engagement",
        hh: "app_remove",
        ih: "app_store_refund",
        jh: "app_store_subscription_cancel",
        kh: "app_store_subscription_convert",
        lh: "app_store_subscription_renew",
        oh: "first_open",
        ph: "first_visit",
        qh: "in_app_purchase",
        rh: "session_start",
        sh: "allow_display_features",
        Zb: "campaign",
        nf: "campaign_content",
        pf: "campaign_id",
        qf: "campaign_medium",
        rf: "campaign_name",
        sf: "campaign_source",
        tf: "campaign_term",
        kb: "client_id",
        ja: "cookie_domain",
        Eb: "cookie_name",
        Va: "cookie_path",
        Fa: "cookie_flags",
        $b: "custom_map",
        Yd: "groups",
        Bf: "non_interaction",
        Za: "page_location",
        ce: "page_path",
        Oa: "page_referrer",
        cc: "page_title",
        la: "send_page_view",
        nb: "send_to",
        de: "session_engaged",
        ae: "_logged_in_state",
        ee: "session_number",
        Ih: "tracking_id",
        ab: "url_passthrough",
        Ib: "accept_incoming",
        bc: "url_position",
        Ff: "phone_conversion_number",
        Df: "phone_conversion_callback",
        Ef: "phone_conversion_css_class",
        Gf: "phone_conversion_options",
        Fh: "phone_conversion_ids",
        Eh: "phone_conversion_country_code",
        Ma: "aw_remarketing",
        Ld: "aw_remarketing_only",
        Jd: "gclid",
        th: "auid",
        zh: "affiliation",
        xf: "tax",
        Sd: "list_name",
        wf: "checkout_step",
        vf: "checkout_option",
        Ah: "coupon",
        Bh: "promotions",
        cb: "user_id",
        Gh: "retoken",
        za: "cookie_prefix",
        uf: "disable_merchant_reported_purchases",
        yh: "dc_natural_search",
        xh: "dc_custom_params",
        Af: "method",
        Hh: "search_term",
        wh: "content_type",
        Dh: "optimize_id",
        Ch: "experiments",
        Xa: "google_signals"
    };
    O.Qc = "google_tld";
    O.Uc = "update";
    O.Wd = "firebase_id";
    O.Xd = "ga_restrict_domain";
    O.Nc = "event_settings";
    O.Rd = "dynamic_event_settings";
    O.jc = "user_data_settings";
    O.If = "screen_name";
    O.Jf = "screen_resolution";
    O.lb = "_x_19";
    O.Gb = "_ecid";
    O.Pc = "_x_20";
    O.$d = "internal_traffic_results";
    O.Kf = "traffic_type";
    O.Rc = "referral_exclusion_definition";
    O.Zd = "ignore_referrer";
    O.vh = "content_group";
    O.da = "allow_interest_groups";
    var Xc = {};
    O.Nf = Object.freeze((Xc[O.kf] = 1,
    Xc[O.mh] = 1,
    Xc[O.Ab] = 1,
    Xc[O.Bb] = 1,
    Xc[O.nh] = 1,
    Xc[O.ib] = 1,
    Xc[O.Gd] = 1,
    Xc[O.jb] = 1,
    Xc[O.Hd] = 1,
    Xc[O.Cb] = 1,
    Xc[O.wa] = 1,
    Xc[O.Db] = 1,
    Xc[O.xa] = 1,
    Xc[O.lf] = 1,
    Xc));
    O.ie = Object.freeze([O.U, O.Yb, O.Fb]);
    O.Uh = Object.freeze([].concat(O.ie));
    O.je = Object.freeze([O.qa, O.Oc, O.hc, O.Sc]);
    O.Vh = Object.freeze([].concat(O.je));
    var ad = {};
    O.Dd = (ad[O.C] = "1",
    ad[O.K] = "2",
    ad);
    var cd = {}
      , dd = function(a, b) {
        cd[a] = cd[a] || [];
        cd[a][b] = !0
    }
      , ed = function(a) {
        for (var b = [], c = cd[a] || [], d = 0; d < c.length; d++)
            c[d] && (b[Math.floor(d / 6)] ^= 1 << d % 6);
        for (var e = 0; e < b.length; e++)
            b[e] = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789-_".charAt(b[e] || 0);
        return b.join("")
    };
    var fd = function(a) {
        dd("GTM", a)
    };
    var S = {}
      , U = B.google_tag_manager = B.google_tag_manager || {}
      , gd = Math.random();
    S.H = "UA-49392197-1";
    S.cd = "1v0";
    S.V = "dataLayer";
    S.gh = "ChEIgPTojwYQ+ZzDrNjCzubbARImAHUayDCKwc7dH6IjEK8CqKMCcZO5Up/uUTJM8myZMlCHkdFsBl8aAghQ";
    var hd = {
        __cl: !0,
        __ecl: !0,
        __ehl: !0,
        __evl: !0,
        __fal: !0,
        __fil: !0,
        __fsl: !0,
        __hl: !0,
        __jel: !0,
        __lcl: !0,
        __sdl: !0,
        __tl: !0,
        __ytl: !0
    }, id = {
        __ogt_consent_defaults: !0,
        __ogt_cookie_settings: !0,
        __ogt_cross_domain: !0,
        __ogt_em_form: !0,
        __ogt_em_download: !0,
        __ccd_em_form: !0,
        __ogt_em_outbound_click: !0,
        __ogt_em_page_view: !0,
        __ogt_em_scroll: !0,
        __ogt_em_site_search: !0,
        __ogt_em_video: !0,
        __ogt_event_create: !0,
        __ogt_event_edit: !0,
        __ogt_ga_gam_link: !0,
        __ogt_ga_send: !0,
        __ogt_ip_mark: !0,
        __ogt_ads_datatos: !0,
        __ogt_conv_def: !0,
        __ogt_event_settings: !0,
        __ogt_ga_datatos: !0,
        __ogt_google_signals: !0,
        __set_product_settings: !0,
        __ogt_referral_exclusion: !0,
        __ogt_session_timeout: !0,
        __ogt_1p_data: !0
    }, jd = {
        __paused: !0,
        __tg: !0
    }, kd;
    for (kd in hd)
        hd.hasOwnProperty(kd) && (jd[kd] = !0);
    S.Ed = "www.googletagmanager.com";
    var ld, md = S.Ed + "/gtm.js";
    md = S.Ed + "/gtag/js";
    ld = md;
    var nd = Fa("")
      , od = null
      , pd = null
      , qd = "https://www.googletagmanager.com/a?id=" + S.H + "&cv=1"
      , rd = {}
      , vd = {}
      , wd = function() {
        var a = U.sequence || 1;
        U.sequence = a + 1;
        return a
    };
    S.fh = "";
    var xd = "";
    S.dd = xd;
    var yd = new za
      , zd = {}
      , Ad = {}
      , Dd = {
        name: S.V,
        set: function(a, b) {
            J(Qa(a, b), zd);
            Bd()
        },
        get: function(a) {
            return Cd(a, 2)
        },
        reset: function() {
            yd = new za;
            zd = {};
            Bd()
        }
    }
      , Cd = function(a, b) {
        return 2 != b ? yd.get(a) : Ed(a)
    }
      , Ed = function(a) {
        var b, c = a.split(".");
        b = b || [];
        for (var d = zd, e = 0; e < c.length; e++) {
            if (null === d)
                return !1;
            if (void 0 === d)
                break;
            d = d[c[e]];
            if (-1 !== b.indexOf(d))
                return
        }
        return d
    }
      , Fd = function(a, b) {
        Ad.hasOwnProperty(a) || (yd.set(a, b),
        J(Qa(a, b), zd),
        Bd())
    }
      , Bd = function(a) {
        Ba(Ad, function(b, c) {
            yd.set(b, c);
            J(Qa(b, void 0), zd);
            J(Qa(b, c), zd);
            a && delete Ad[b]
        })
    }
      , Gd = function(a, b) {
        var c, d = 1 !== (void 0 === b ? 2 : b) ? Ed(a) : yd.get(a);
        "array" === Fb(d) || "object" === Fb(d) ? c = J(d) : c = d;
        return c
    };
    var Hd = new RegExp(/^(.*\.)?(google|youtube|blogger|withgoogle)(\.com?)?(\.[a-z]{2})?\.?$/)
      , Id = {
        cl: ["ecl"],
        customPixels: ["nonGooglePixels"],
        ecl: ["cl"],
        ehl: ["hl"],
        hl: ["ehl"],
        html: ["customScripts", "customPixels", "nonGooglePixels", "nonGoogleScripts", "nonGoogleIframes"],
        customScripts: ["html", "customPixels", "nonGooglePixels", "nonGoogleScripts", "nonGoogleIframes"],
        nonGooglePixels: [],
        nonGoogleScripts: ["nonGooglePixels"],
        nonGoogleIframes: ["nonGooglePixels"]
    }
      , Jd = {
        cl: ["ecl"],
        customPixels: ["customScripts", "html"],
        ecl: ["cl"],
        ehl: ["hl"],
        hl: ["ehl"],
        html: ["customScripts"],
        customScripts: ["html"],
        nonGooglePixels: ["customPixels", "customScripts", "html", "nonGoogleScripts", "nonGoogleIframes"],
        nonGoogleScripts: ["customScripts", "html"],
        nonGoogleIframes: ["customScripts", "html", "nonGoogleScripts"]
    }
      , Kd = "google customPixels customScripts html nonGooglePixels nonGoogleScripts nonGoogleIframes".split(" ");
    var Ld = function() {
        var a = !1;
        a = !0;
        return a
    }
      , Nd = function(a) {
        var b = Cd("gtm.allowlist") || Cd("gtm.whitelist");
        b && fd(9);
        Ld() && (b = "google gtagfl lcl zone oid op".split(" "));
        var c = b && Pa(Ga(b), Id)
          , d = Cd("gtm.blocklist") || Cd("gtm.blacklist");
        d || (d = Cd("tagTypeBlacklist")) && fd(3);
        d ? fd(8) : d = [];
        Md() && (d = Ga(d),
        d.push("nonGooglePixels", "nonGoogleScripts", "sandboxedScripts"));
        0 <= Ga(d).indexOf("google") && fd(2);
        var e = d && Pa(Ga(d), Jd)
          , f = {};
        return function(g) {
            var k = g && g[Jb.ob];
            if (!k || "string" != typeof k)
                return !0;
            k = k.replace(/^_*/, "");
            if (void 0 !== f[k])
                return f[k];
            var m = vd[k] || []
              , n = a(k, m);
            if (b) {
                var p;
                if (p = n)
                    a: {
                        if (0 > c.indexOf(k))
                            if (m && 0 < m.length)
                                for (var r = 0; r < m.length; r++) {
                                    if (0 > c.indexOf(m[r])) {
                                        fd(11);
                                        p = !1;
                                        break a
                                    }
                                }
                            else {
                                p = !1;
                                break a
                            }
                        p = !0
                    }
                n = p
            }
            var t = !1;
            if (d) {
                var u = 0 <= e.indexOf(k);
                if (u)
                    t = u;
                else {
                    var q = Aa(e, m || []);
                    q && fd(10);
                    t = q
                }
            }
            var v = !n || t;
            v || !(0 <= m.indexOf("sandboxedScripts")) || c && -1 !== c.indexOf("sandboxedScripts") || (v = Aa(e, Kd));
            return f[k] = v
        }
    }
      , Md = function() {
        return Hd.test(B.location && B.location.hostname)
    };
    var Od = {
        active: !0,
        isAllowed: function() {
            return !0
        }
    }
      , Pd = function(a) {
        var b = U.zones;
        return b ? b.checkState(S.H, a) : Od
    }
      , Qd = function(a) {
        var b = U.zones;
        !b && a && (b = U.zones = a());
        return b
    };
    var Rd = new function(a, b) {
        this.m = a;
        this.defaultValue = void 0 === b ? !1 : b
    }
    (1933);
    var Td = function() {
        var a = Sd
          , b = "Ie";
        if (a.Ie && a.hasOwnProperty(b))
            return a.Ie;
        var c = new a;
        a.Ie = c;
        a.hasOwnProperty(b);
        return c
    };
    var Sd = function() {
        var a = {};
        this.m = function() {
            var b = Rd.m
              , c = Rd.defaultValue;
            return null != a[b] ? a[b] : c
        }
        ;
        this.o = function() {
            a[Rd.m] = !0
        }
    };
    var Ud = [];
    function Vd() {
        var a = jb("google_tag_data", {});
        a.ics || (a.ics = {
            entries: {},
            set: Wd,
            update: Xd,
            addListener: Yd,
            notifyListeners: Zd,
            active: !1,
            usedDefault: !1,
            usedUpdate: !1,
            accessedDefault: !1,
            accessedAny: !1,
            wasSetLate: !1
        });
        return a.ics
    }
    function Wd(a, b, c, d, e, f) {
        var g = Vd();
        !g.usedDefault && g.usedUpdate && (g.wasSetLate = !0);
        g.usedDefault || !g.accessedDefault && !g.accessedAny || (g.wasSetLate = !0);
        g.active = !0;
        g.usedDefault = !0;
        if (void 0 != b) {
            var k = g.entries
              , m = k[a] || {}
              , n = m.region
              , p = c && l(c) ? c.toUpperCase() : void 0;
            d = d.toUpperCase();
            e = e.toUpperCase();
            if ("" === d || p === e || (p === d ? n !== e : !p && !n)) {
                var r = !!(f && 0 < f && void 0 === m.update)
                  , t = {
                    region: p,
                    initial: "granted" === b,
                    update: m.update,
                    quiet: r
                };
                if ("" !== d || !1 !== m.initial)
                    k[a] = t;
                r && B.setTimeout(function() {
                    k[a] === t && t.quiet && (t.quiet = !1,
                    $d(a),
                    Zd(),
                    dd("TAGGING", 2))
                }, f)
            }
        }
    }
    function Xd(a, b) {
        var c = Vd();
        c.usedDefault || c.usedUpdate || !c.accessedAny || (c.wasSetLate = !0);
        c.active = !0;
        c.usedUpdate = !0;
        if (void 0 != b) {
            var d = ae(a)
              , e = c.entries
              , f = e[a] = e[a] || {};
            f.update = "granted" === b;
            var g = ae(a);
            f.quiet ? (f.quiet = !1,
            $d(a)) : g !== d && $d(a)
        }
    }
    function Yd(a, b) {
        Ud.push({
            ze: a,
            xi: b
        })
    }
    function $d(a) {
        for (var b = 0; b < Ud.length; ++b) {
            var c = Ud[b];
            ua(c.ze) && -1 !== c.ze.indexOf(a) && (c.Gg = !0)
        }
    }
    function Zd(a) {
        for (var b = 0; b < Ud.length; ++b) {
            var c = Ud[b];
            if (c.Gg) {
                c.Gg = !1;
                try {
                    c.xi({
                        consentEventId: a
                    })
                } catch (d) {}
            }
        }
    }
    var ae = function(a) {
        var b = Vd();
        b.accessedAny = !0;
        var c = b.entries[a] || {};
        return void 0 !== c.update ? c.update : c.initial
    }
      , be = function(a) {
        var b = Vd();
        b.accessedDefault = !0;
        return (b.entries[a] || {}).initial
    }
      , ce = function(a) {
        var b = Vd();
        b.accessedAny = !0;
        return !(b.entries[a] || {}).quiet
    }
      , de = function() {
        if (!Td().m())
            return !1;
        var a = Vd();
        a.accessedAny = !0;
        return a.active
    }
      , ee = function() {
        var a = Vd();
        a.accessedDefault = !0;
        return a.usedDefault
    }
      , fe = function(a, b) {
        Vd().addListener(a, b)
    }
      , ge = function(a) {
        Vd().notifyListeners(a)
    }
      , he = function(a, b) {
        function c() {
            for (var e = 0; e < b.length; e++)
                if (!ce(b[e]))
                    return !0;
            return !1
        }
        if (c()) {
            var d = !1;
            fe(b, function(e) {
                d || c() || (d = !0,
                a(e))
            })
        } else
            a({})
    }
      , ie = function(a, b) {
        function c() {
            for (var f = [], g = 0; g < d.length; g++) {
                var k = d[g];
                !1 === ae(k) || e[k] || (f.push(k),
                e[k] = !0)
            }
            return f
        }
        var d = l(b) ? [b] : b
          , e = {};
        c().length !== d.length && fe(d, function(f) {
            var g = c();
            0 < g.length && (f.ze = g,
            a(f))
        })
    };
    function je() {}
    function ke() {}
    ;function le(a) {
        for (var b = [], c = 0; c < me.length; c++) {
            var d = a(me[c]);
            b[c] = !0 === d ? "1" : !1 === d ? "0" : "-"
        }
        return b.join("")
    }
    var me = [O.C, O.K]
      , ne = function(a) {
        var b = a[O.bf];
        b && fd(40);
        var c = a[O.cf];
        c && fd(41);
        for (var d = ua(b) ? b : [b], e = {
            Vb: 0
        }; e.Vb < d.length; e = {
            Vb: e.Vb
        },
        ++e.Vb)
            Ba(a, function(f) {
                return function(g, k) {
                    if (g !== O.bf && g !== O.cf) {
                        var m = d[f.Vb];
                        Vd().set(g, k, m, "NL", "NL-ZH", c)
                    }
                }
            }(e))
    }
      , re = 0
      , se = function(a, b) {
        Ba(a, function(e, f) {
            Vd().update(e, f)
        });
        ge(b);
        var c = Ja()
          , d = c - re;
        re && 0 <= d && 1E3 > d && fd(66);
        re = c
    }
      , te = function(a) {
        var b = ae(a);
        return void 0 != b ? b : !0
    }
      , ue = function() {
        return "G1" + le(ae)
    }
      , ve = function() {
        return "G1" + le(be)
    }
      , we = function(a, b) {
        ie(a, b)
    }
      , xe = function(a, b) {
        he(a, b)
    };
    var ze = function(a) {
        return ye ? F.querySelectorAll(a) : null
    }
      , Ae = function(a, b) {
        if (!ye)
            return null;
        if (Element.prototype.closest)
            try {
                return a.closest(b)
            } catch (e) {
                return null
            }
        var c = Element.prototype.matches || Element.prototype.webkitMatchesSelector || Element.prototype.mozMatchesSelector || Element.prototype.msMatchesSelector || Element.prototype.oMatchesSelector
          , d = a;
        if (!F.documentElement.contains(d))
            return null;
        do {
            try {
                if (c.call(d, b))
                    return d
            } catch (e) {
                break
            }
            d = d.parentElement || d.parentNode
        } while (null !== d && 1 === d.nodeType);
        return null
    }
      , Be = !1;
    if (F.querySelectorAll)
        try {
            var Ce = F.querySelectorAll(":root");
            Ce && 1 == Ce.length && Ce[0] == F.documentElement && (Be = !0)
        } catch (a) {}
    var ye = Be;
    var We = function() {
        this.eventModel = {};
        this.targetConfig = {};
        this.containerConfig = {};
        this.globalConfig = {};
        this.remoteConfig = {};
        this.onSuccess = function() {}
        ;
        this.onFailure = function() {}
        ;
        this.setContainerTypeLoaded = function() {}
        ;
        this.getContainerTypeLoaded = function() {}
        ;
        this.eventId = void 0;
        this.isGtmEvent = !1
    }
      , Xe = function(a) {
        var b = new We;
        b.eventModel = a;
        return b
    }
      , Ye = function(a, b) {
        a.targetConfig = b;
        return a
    }
      , Ze = function(a, b) {
        a.containerConfig = b;
        return a
    }
      , $e = function(a, b) {
        a.globalConfig = b;
        return a
    }
      , af = function(a, b) {
        a.remoteConfig = b;
        return a
    }
      , bf = function(a, b) {
        a.onSuccess = b;
        return a
    }
      , cf = function(a, b) {
        a.setContainerTypeLoaded = b;
        return a
    }
      , df = function(a, b) {
        a.getContainerTypeLoaded = b;
        return a
    }
      , ef = function(a, b) {
        a.onFailure = b;
        return a
    };
    We.prototype.getWithConfig = function(a) {
        if (void 0 !== this.eventModel[a])
            return this.eventModel[a];
        if (void 0 !== this.targetConfig[a])
            return this.targetConfig[a];
        if (void 0 !== this.containerConfig[a])
            return this.containerConfig[a];
        if (void 0 !== this.globalConfig[a])
            return this.globalConfig[a];
        if (void 0 !== this.remoteConfig[a])
            return this.remoteConfig[a]
    }
    ;
    var ff = function(a) {
        function b(d) {
            for (var e = Object.keys(d), f = 0; f < e.length; ++f)
                c[e[f]] = 1
        }
        var c = {};
        b(a.eventModel);
        b(a.targetConfig);
        b(a.containerConfig);
        b(a.globalConfig);
        return Object.keys(c)
    }
      , gf = function(a, b, c) {
        function d(g) {
            Hb(g) && Ba(g, function(k, m) {
                f = !0;
                e[k] = m
            })
        }
        var e = {}
          , f = !1;
        c && 1 !== c || (d(a.remoteConfig[b]),
        d(a.globalConfig[b]),
        d(a.containerConfig[b]),
        d(a.targetConfig[b]));
        c && 2 !== c || d(a.eventModel[b]);
        return f ? e : void 0
    }
      , hf = function(a) {
        var b = [O.Zb, O.nf, O.pf, O.qf, O.rf, O.sf, O.tf]
          , c = {}
          , d = !1
          , e = function(f) {
            for (var g = 0; g < b.length; g++)
                void 0 !== f[b[g]] && (c[b[g]] = f[b[g]],
                d = !0);
            return d
        };
        if (e(a.eventModel) || e(a.targetConfig) || e(a.containerConfig) || e(a.globalConfig))
            return c;
        e(a.remoteConfig);
        return c
    }
      , jf = function(a) {
        var b = [], c;
        for (c in a.eventModel)
            c !== O.Kb && a.eventModel.hasOwnProperty(c) && void 0 !== a.eventModel[c] && b.push(c);
        return b
    };
    var kf, lf = !1, mf = function(a) {
        if (!lf) {
            lf = !0;
            kf = kf || {}
        }
        return kf[a]
    };
    var nf = function(a) {
        if (F.hidden)
            return !0;
        var b = a.getBoundingClientRect();
        if (b.top == b.bottom || b.left == b.right || !B.getComputedStyle)
            return !0;
        var c = B.getComputedStyle(a, null);
        if ("hidden" === c.visibility)
            return !0;
        for (var d = a, e = c; d; ) {
            if ("none" === e.display)
                return !0;
            var f = e.opacity
              , g = e.filter;
            if (g) {
                var k = g.indexOf("opacity(");
                0 <= k && (g = g.substring(k + 8, g.indexOf(")", k)),
                "%" == g.charAt(g.length - 1) && (g = g.substring(0, g.length - 1)),
                f = Math.min(g, f))
            }
            if (void 0 !== f && 0 >= f)
                return !0;
            (d = d.parentElement) && (e = B.getComputedStyle(d, null))
        }
        return !1
    };
    var wf = /:[0-9]+$/
      , xf = function(a, b, c) {
        for (var d = a.split("&"), e = 0; e < d.length; e++) {
            var f = d[e].split("=");
            if (decodeURIComponent(f[0]).replace(/\+/g, " ") === b) {
                var g = f.slice(1).join("=");
                return c ? g : decodeURIComponent(g).replace(/\+/g, " ")
            }
        }
    }
      , Af = function(a, b, c, d, e) {
        b && (b = String(b).toLowerCase());
        if ("protocol" === b || "port" === b)
            a.protocol = yf(a.protocol) || yf(B.location.protocol);
        "port" === b ? a.port = String(Number(a.hostname ? a.port : B.location.port) || ("http" == a.protocol ? 80 : "https" == a.protocol ? 443 : "")) : "host" === b && (a.hostname = (a.hostname || B.location.hostname).replace(wf, "").toLowerCase());
        return zf(a, b, c, d, e)
    }
      , zf = function(a, b, c, d, e) {
        var f, g = yf(a.protocol);
        b && (b = String(b).toLowerCase());
        switch (b) {
        case "url_no_fragment":
            f = Bf(a);
            break;
        case "protocol":
            f = g;
            break;
        case "host":
            f = a.hostname.replace(wf, "").toLowerCase();
            if (c) {
                var k = /^www\d*\./.exec(f);
                k && k[0] && (f = f.substr(k[0].length))
            }
            break;
        case "port":
            f = String(Number(a.port) || ("http" == g ? 80 : "https" == g ? 443 : ""));
            break;
        case "path":
            a.pathname || a.hostname || dd("TAGGING", 1);
            f = "/" == a.pathname.substr(0, 1) ? a.pathname : "/" + a.pathname;
            var m = f.split("/");
            0 <= (d || []).indexOf(m[m.length - 1]) && (m[m.length - 1] = "");
            f = m.join("/");
            break;
        case "query":
            f = a.search.replace("?", "");
            e && (f = xf(f, e, void 0));
            break;
        case "extension":
            var n = a.pathname.split(".");
            f = 1 < n.length ? n[n.length - 1] : "";
            f = f.split("/")[0];
            break;
        case "fragment":
            f = a.hash.replace("#", "");
            break;
        default:
            f = a && a.href
        }
        return f
    }
      , yf = function(a) {
        return a ? a.replace(":", "").toLowerCase() : ""
    }
      , Bf = function(a) {
        var b = "";
        if (a && a.href) {
            var c = a.href.indexOf("#");
            b = 0 > c ? a.href : a.href.substr(0, c)
        }
        return b
    }
      , Cf = function(a) {
        var b = F.createElement("a");
        a && (b.href = a);
        var c = b.pathname;
        "/" !== c[0] && (a || dd("TAGGING", 1),
        c = "/" + c);
        var d = b.hostname.replace(wf, "");
        return {
            href: b.href,
            protocol: b.protocol,
            host: b.host,
            hostname: d,
            pathname: c,
            search: b.search,
            hash: b.hash,
            port: b.port
        }
    }
      , Df = function(a) {
        function b(n) {
            var p = n.split("=")[0];
            return 0 > d.indexOf(p) ? n : p + "=0"
        }
        function c(n) {
            return n.split("&").map(b).filter(function(p) {
                return void 0 != p
            }).join("&")
        }
        var d = "gclid dclid gbraid wbraid gclaw gcldc gclha gclgf gclgb _gl".split(" ")
          , e = Cf(a)
          , f = a.split(/[?#]/)[0]
          , g = e.search
          , k = e.hash;
        "?" === g[0] && (g = g.substring(1));
        "#" === k[0] && (k = k.substring(1));
        g = c(g);
        k = c(k);
        "" !== g && (g = "?" + g);
        "" !== k && (k = "#" + k);
        var m = "" + f + g + k;
        "/" === m[m.length - 1] && (m = m.substring(0, m.length - 1));
        return m
    };
    var Ef = {};
    var ag = {}
      , bg = function(a, b) {
        if (B._gtmexpgrp && B._gtmexpgrp.hasOwnProperty(a))
            return B._gtmexpgrp[a];
        void 0 === ag[a] && (ag[a] = Math.floor(Math.random() * b));
        return ag[a]
    };
    var cg = function(a) {
        var b = 1, c, d, e;
        if (a)
            for (b = 0,
            d = a.length - 1; 0 <= d; d--)
                e = a.charCodeAt(d),
                b = (b << 6 & 268435455) + e + (e << 14),
                c = b & 266338304,
                b = 0 != c ? b ^ c >> 21 : b;
        return b
    };
    var dg = function(a, b, c) {
        for (var d = [], e = b.split(";"), f = 0; f < e.length; f++) {
            var g = e[f].split("=")
              , k = g[0].replace(/^\s*|\s*$/g, "");
            if (k && k == a) {
                var m = g.slice(1).join("=").replace(/^\s*|\s*$/g, "");
                m && c && (m = decodeURIComponent(m));
                d.push(m)
            }
        }
        return d
    };
    function eg(a) {
        return "null" !== a.origin
    }
    ;var hg = function(a, b, c, d) {
        return fg(d) ? dg(a, String(b || gg()), c) : []
    }
      , kg = function(a, b, c, d, e) {
        if (fg(e)) {
            var f = ig(a, d, e);
            if (1 === f.length)
                return f[0].id;
            if (0 !== f.length) {
                f = jg(f, function(g) {
                    return g.md
                }, b);
                if (1 === f.length)
                    return f[0].id;
                f = jg(f, function(g) {
                    return g.Ac
                }, c);
                return f[0] ? f[0].id : void 0
            }
        }
    };
    function lg(a, b, c, d) {
        var e = gg()
          , f = window;
        eg(f) && (f.document.cookie = a);
        var g = gg();
        return e != g || void 0 != c && 0 <= hg(b, g, !1, d).indexOf(c)
    }
    var pg = function(a, b, c) {
        function d(u, q, v) {
            if (null == v)
                return delete g[q],
                u;
            g[q] = v;
            return u + "; " + q + "=" + v
        }
        function e(u, q) {
            if (null == q)
                return delete g[q],
                u;
            g[q] = !0;
            return u + "; " + q
        }
        if (!fg(c.Ra))
            return 2;
        var f;
        void 0 == b ? f = a + "=deleted; expires=" + (new Date(0)).toUTCString() : (c.encode && (b = encodeURIComponent(b)),
        b = mg(b),
        f = a + "=" + b);
        var g = {};
        f = d(f, "path", c.path);
        var k;
        c.expires instanceof Date ? k = c.expires.toUTCString() : null != c.expires && (k = "" + c.expires);
        f = d(f, "expires", k);
        f = d(f, "max-age", c.Kj);
        f = d(f, "samesite", c.Mj);
        c.Nj && (f = e(f, "secure"));
        var m = c.domain;
        if (m && "auto" === m.toLowerCase()) {
            for (var n = ng(), p = 0; p < n.length; ++p) {
                var r = "none" !== n[p] ? n[p] : void 0
                  , t = d(f, "domain", r);
                t = e(t, c.flags);
                if (!og(r, c.path) && lg(t, a, b, c.Ra))
                    return 0
            }
            return 1
        }
        m && "none" !== m.toLowerCase() && (f = d(f, "domain", m));
        f = e(f, c.flags);
        return og(m, c.path) ? 1 : lg(f, a, b, c.Ra) ? 0 : 1
    }
      , qg = function(a, b, c) {
        null == c.path && (c.path = "/");
        c.domain || (c.domain = "auto");
        return pg(a, b, c)
    };
    function jg(a, b, c) {
        for (var d = [], e = [], f, g = 0; g < a.length; g++) {
            var k = a[g]
              , m = b(k);
            m === c ? d.push(k) : void 0 === f || m < f ? (e = [k],
            f = m) : m === f && e.push(k)
        }
        return 0 < d.length ? d : e
    }
    function ig(a, b, c) {
        for (var d = [], e = hg(a, void 0, void 0, c), f = 0; f < e.length; f++) {
            var g = e[f].split(".")
              , k = g.shift();
            if (!b || -1 !== b.indexOf(k)) {
                var m = g.shift();
                m && (m = m.split("-"),
                d.push({
                    id: g.join("."),
                    md: 1 * m[0] || 1,
                    Ac: 1 * m[1] || 1
                }))
            }
        }
        return d
    }
    var mg = function(a) {
        a && 1200 < a.length && (a = a.substring(0, 1200));
        return a
    }
      , rg = /^(www\.)?google(\.com?)?(\.[a-z]{2})?$/
      , sg = /(^|\.)doubleclick\.net$/i
      , og = function(a, b) {
        return sg.test(window.document.location.hostname) || "/" === b && rg.test(a)
    }
      , gg = function() {
        return eg(window) ? window.document.cookie : ""
    }
      , ng = function() {
        var a = []
          , b = window.document.location.hostname.split(".");
        if (4 === b.length) {
            var c = b[b.length - 1];
            if (parseInt(c, 10).toString() === c)
                return ["none"]
        }
        for (var d = b.length - 2; 0 <= d; d--)
            a.push(b.slice(d).join("."));
        var e = window.document.location.hostname;
        sg.test(e) || rg.test(e) || a.push("none");
        return a
    }
      , fg = function(a) {
        if (!Td().m() || !a || !de())
            return !0;
        if (!ce(a))
            return !1;
        var b = ae(a);
        return null == b ? !0 : !!b
    };
    var tg = function(a) {
        var b = Math.round(2147483647 * Math.random());
        return a ? String(b ^ cg(a) & 2147483647) : String(b)
    }
      , ug = function(a) {
        return [tg(a), Math.round(Ja() / 1E3)].join(".")
    }
      , xg = function(a, b, c, d, e) {
        var f = vg(b);
        return kg(a, f, wg(c), d, e)
    }
      , yg = function(a, b, c, d) {
        var e = "" + vg(c)
          , f = wg(d);
        1 < f && (e += "-" + f);
        return [b, e, a].join(".")
    }
      , vg = function(a) {
        if (!a)
            return 1;
        a = 0 === a.indexOf(".") ? a.substr(1) : a;
        return a.split(".").length
    }
      , wg = function(a) {
        if (!a || "/" === a)
            return 1;
        "/" !== a[0] && (a = "/" + a);
        "/" !== a[a.length - 1] && (a += "/");
        return a.split("/").length - 1
    };
    function zg(a, b, c) {
        var d, e = Number(null != a.tb ? a.tb : void 0);
        0 !== e && (d = new Date((b || Ja()) + 1E3 * (e || 7776E3)));
        return {
            path: a.path,
            domain: a.domain,
            flags: a.flags,
            encode: !!c,
            expires: d
        }
    }
    ;var Ag = ["1"]
      , Bg = {}
      , Cg = {}
      , Gg = function(a, b) {
        b = void 0 === b ? !0 : b;
        var c = Dg(a.prefix);
        if (!Bg[c] && !Eg(c, a.path, a.domain) && b) {
            var d = Dg(a.prefix)
              , e = ug();
            if (0 === Fg(d, e, a)) {
                var f = jb("google_tag_data", {});
                f._gcl_au ? dd("GTM", 57) : f._gcl_au = e
            }
            Eg(c, a.path, a.domain)
        }
    };
    function Fg(a, b, c, d) {
        var e = yg(b, "1", c.domain, c.path)
          , f = zg(c, d);
        f.Ra = "ad_storage";
        return qg(a, e, f)
    }
    function Eg(a, b, c) {
        var d = xg(a, b, c, Ag, "ad_storage");
        if (!d)
            return !1;
        var e = d.split(".");
        5 === e.length ? (Bg[a] = e.slice(0, 2).join("."),
        Cg[a] = {
            id: e.slice(2, 4).join("."),
            xg: Number(e[4]) || 0
        }) : 3 === e.length ? Cg[a] = {
            id: e.slice(0, 2).join("."),
            xg: Number(e[2]) || 0
        } : Bg[a] = d;
        return !0
    }
    function Dg(a) {
        return (a || "_gcl") + "_au"
    }
    ;var Hg = function(a) {
        for (var b = [], c = F.cookie.split(";"), d = new RegExp("^\\s*" + (a || "_gac") + "_(UA-\\d+-\\d+)=\\s*(.+?)\\s*$"), e = 0; e < c.length; e++) {
            var f = c[e].match(d);
            f && b.push({
                Ye: f[1],
                value: f[2],
                timestamp: Number(f[2].split(".")[1]) || 0
            })
        }
        b.sort(function(g, k) {
            return k.timestamp - g.timestamp
        });
        return b
    };
    function Ig(a, b) {
        var c = Hg(a)
          , d = {};
        if (!c || !c.length)
            return d;
        for (var e = 0; e < c.length; e++) {
            var f = c[e].value.split(".");
            if (!("1" !== f[0] || b && 3 > f.length || !b && 3 !== f.length) && Number(f[1])) {
                d[c[e].Ye] || (d[c[e].Ye] = []);
                var g = {
                    version: f[0],
                    timestamp: 1E3 * Number(f[1]),
                    sa: f[2]
                };
                b && 3 < f.length && (g.labels = f.slice(3));
                d[c[e].Ye].push(g)
            }
        }
        return d
    }
    ;function Jg() {
        for (var a = Kg, b = {}, c = 0; c < a.length; ++c)
            b[a[c]] = c;
        return b
    }
    function Lg() {
        var a = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
        a += a.toLowerCase() + "0123456789-_";
        return a + "."
    }
    var Kg, Mg;
    function Ng(a) {
        function b(m) {
            for (; d < a.length; ) {
                var n = a.charAt(d++)
                  , p = Mg[n];
                if (null != p)
                    return p;
                if (!/^[\s\xa0]*$/.test(n))
                    throw Error("Unknown base64 encoding at char: " + n);
            }
            return m
        }
        Kg = Kg || Lg();
        Mg = Mg || Jg();
        for (var c = "", d = 0; ; ) {
            var e = b(-1)
              , f = b(0)
              , g = b(64)
              , k = b(64);
            if (64 === k && -1 === e)
                return c;
            c += String.fromCharCode(e << 2 | f >> 4);
            64 != g && (c += String.fromCharCode(f << 4 & 240 | g >> 2),
            64 != k && (c += String.fromCharCode(g << 6 & 192 | k)))
        }
    }
    ;var Og;
    var Sg = function() {
        var a = Pg
          , b = Qg
          , c = Rg()
          , d = function(g) {
            a(g.target || g.srcElement || {})
        }
          , e = function(g) {
            b(g.target || g.srcElement || {})
        };
        if (!c.init) {
            tb(F, "mousedown", d);
            tb(F, "keyup", d);
            tb(F, "submit", e);
            var f = HTMLFormElement.prototype.submit;
            HTMLFormElement.prototype.submit = function() {
                b(this);
                f.call(this)
            }
            ;
            c.init = !0
        }
    }
      , Tg = function(a, b, c, d, e) {
        var f = {
            callback: a,
            domains: b,
            fragment: 2 === c,
            placement: c,
            forms: d,
            sameHost: e
        };
        Rg().decorators.push(f)
    }
      , Ug = function(a, b, c) {
        for (var d = Rg().decorators, e = {}, f = 0; f < d.length; ++f) {
            var g = d[f], k;
            if (k = !c || g.forms)
                a: {
                    var m = g.domains
                      , n = a
                      , p = !!g.sameHost;
                    if (m && (p || n !== F.location.hostname))
                        for (var r = 0; r < m.length; r++)
                            if (m[r]instanceof RegExp) {
                                if (m[r].test(n)) {
                                    k = !0;
                                    break a
                                }
                            } else if (0 <= n.indexOf(m[r]) || p && 0 <= m[r].indexOf(n)) {
                                k = !0;
                                break a
                            }
                    k = !1
                }
            if (k) {
                var t = g.placement;
                void 0 == t && (t = g.fragment ? 2 : 1);
                t === b && Na(e, g.callback())
            }
        }
        return e
    };
    function Rg() {
        var a = jb("google_tag_data", {})
          , b = a.gl;
        b && b.decorators || (b = {
            decorators: []
        },
        a.gl = b);
        return b
    }
    ;var Vg = /(.*?)\*(.*?)\*(.*)/
      , Wg = /^https?:\/\/([^\/]*?)\.?cdn\.ampproject\.org\/?(.*)/
      , Xg = /^(?:www\.|m\.|amp\.)+/
      , Yg = /([^?#]+)(\?[^#]*)?(#.*)?/;
    function Zg(a) {
        return new RegExp("(.*?)(^|&)" + a + "=([^&]*)&?(.*)")
    }
    var ah = function(a) {
        var b = [], c;
        for (c in a)
            if (a.hasOwnProperty(c)) {
                var d = a[c];
                if (void 0 !== d && d === d && null !== d && "[object Object]" !== d.toString()) {
                    b.push(c);
                    var e = b, f = e.push, g, k = String(d);
                    Kg = Kg || Lg();
                    Mg = Mg || Jg();
                    for (var m = [], n = 0; n < k.length; n += 3) {
                        var p = n + 1 < k.length
                          , r = n + 2 < k.length
                          , t = k.charCodeAt(n)
                          , u = p ? k.charCodeAt(n + 1) : 0
                          , q = r ? k.charCodeAt(n + 2) : 0
                          , v = t >> 2
                          , y = (t & 3) << 4 | u >> 4
                          , A = (u & 15) << 2 | q >> 6
                          , w = q & 63;
                        r || (w = 64,
                        p || (A = 64));
                        m.push(Kg[v], Kg[y], Kg[A], Kg[w])
                    }
                    g = m.join("");
                    f.call(e, g)
                }
            }
        var z = b.join("*");
        return ["1", $g(z), z].join("*")
    };
    function $g(a, b) {
        var c = [B.navigator.userAgent, (new Date).getTimezoneOffset(), hb.userLanguage || hb.language, Math.floor(Ja() / 60 / 1E3) - (void 0 === b ? 0 : b), a].join("*"), d;
        if (!(d = Og)) {
            for (var e = Array(256), f = 0; 256 > f; f++) {
                for (var g = f, k = 0; 8 > k; k++)
                    g = g & 1 ? g >>> 1 ^ 3988292384 : g >>> 1;
                e[f] = g
            }
            d = e
        }
        Og = d;
        for (var m = 4294967295, n = 0; n < c.length; n++)
            m = m >>> 8 ^ Og[(m ^ c.charCodeAt(n)) & 255];
        return ((m ^ -1) >>> 0).toString(36)
    }
    function bh() {
        return function(a) {
            var b = Cf(B.location.href)
              , c = b.search.replace("?", "")
              , d = xf(c, "_gl", !0) || "";
            a.query = ch(d) || {};
            var e = Af(b, "fragment").match(Zg("_gl"));
            a.fragment = ch(e && e[3] || "") || {}
        }
    }
    var dh = function(a) {
        var b = bh()
          , c = Rg();
        c.data || (c.data = {
            query: {},
            fragment: {}
        },
        b(c.data));
        var d = {}
          , e = c.data;
        e && (Na(d, e.query),
        a && Na(d, e.fragment));
        return d
    }
      , ch = function(a) {
        var b;
        b = void 0 === b ? 3 : b;
        try {
            if (a) {
                var c;
                a: {
                    for (var d = a, e = 0; 3 > e; ++e) {
                        var f = Vg.exec(d);
                        if (f) {
                            c = f;
                            break a
                        }
                        d = decodeURIComponent(d)
                    }
                    c = void 0
                }
                var g = c;
                if (g && "1" === g[1]) {
                    var k = g[3], m;
                    a: {
                        for (var n = g[2], p = 0; p < b; ++p)
                            if (n === $g(k, p)) {
                                m = !0;
                                break a
                            }
                        m = !1
                    }
                    if (m) {
                        for (var r = {}, t = k ? k.split("*") : [], u = 0; u + 1 < t.length; u += 2) {
                            var q = t[u]
                              , v = Ng(t[u + 1]);
                            r[q] = v
                        }
                        dd("TAGGING", 6);
                        return r
                    }
                    dd("TAGGING", 7)
                }
            }
        } catch (y) {
            dd("TAGGING", 8)
        }
    };
    function eh(a, b, c, d) {
        function e(p) {
            var r = p
              , t = Zg(a).exec(r)
              , u = r;
            if (t) {
                var q = t[2]
                  , v = t[4];
                u = t[1];
                v && (u = u + q + v)
            }
            p = u;
            var y = p.charAt(p.length - 1);
            p && "&" !== y && (p += "&");
            return p + n
        }
        d = void 0 === d ? !1 : d;
        var f = Yg.exec(c);
        if (!f)
            return "";
        var g = f[1]
          , k = f[2] || ""
          , m = f[3] || ""
          , n = a + "=" + b;
        d ? m = "#" + e(m.substring(1)) : k = "?" + e(k.substring(1));
        return "" + g + k + m
    }
    function fh(a, b) {
        var c = "FORM" === (a.tagName || "").toUpperCase()
          , d = Ug(b, 1, c)
          , e = Ug(b, 2, c)
          , f = Ug(b, 3, c);
        if (Oa(d)) {
            var g = ah(d);
            c ? gh("_gl", g, a) : hh("_gl", g, a, !1)
        }
        if (!c && Oa(e)) {
            var k = ah(e);
            hh("_gl", k, a, !0)
        }
        for (var m in f)
            if (f.hasOwnProperty(m))
                a: {
                    var n = m
                      , p = f[m]
                      , r = a;
                    if (r.tagName) {
                        if ("a" === r.tagName.toLowerCase()) {
                            hh(n, p, r, void 0);
                            break a
                        }
                        if ("form" === r.tagName.toLowerCase()) {
                            gh(n, p, r);
                            break a
                        }
                    }
                    "string" == typeof r && eh(n, p, r, void 0)
                }
    }
    function hh(a, b, c, d) {
        if (c.href) {
            var e = eh(a, b, c.href, void 0 === d ? !1 : d);
            Xa.test(e) && (c.href = e)
        }
    }
    function gh(a, b, c) {
        if (c && c.action) {
            var d = (c.method || "").toLowerCase();
            if ("get" === d) {
                for (var e = c.childNodes || [], f = !1, g = 0; g < e.length; g++) {
                    var k = e[g];
                    if (k.name === a) {
                        k.setAttribute("value", b);
                        f = !0;
                        break
                    }
                }
                if (!f) {
                    var m = F.createElement("input");
                    m.setAttribute("type", "hidden");
                    m.setAttribute("name", a);
                    m.setAttribute("value", b);
                    c.appendChild(m)
                }
            } else if ("post" === d) {
                var n = eh(a, b, c.action);
                Xa.test(n) && (c.action = n)
            }
        }
    }
    function Pg(a) {
        try {
            var b;
            a: {
                for (var c = a, d = 100; c && 0 < d; ) {
                    if (c.href && c.nodeName.match(/^a(?:rea)?$/i)) {
                        b = c;
                        break a
                    }
                    c = c.parentNode;
                    d--
                }
                b = null
            }
            var e = b;
            if (e) {
                var f = e.protocol;
                "http:" !== f && "https:" !== f || fh(e, e.hostname)
            }
        } catch (g) {}
    }
    function Qg(a) {
        try {
            if (a.action) {
                var b = Af(Cf(a.action), "host");
                fh(a, b)
            }
        } catch (c) {}
    }
    var ih = function(a, b, c, d) {
        Sg();
        Tg(a, b, "fragment" === c ? 2 : 1, !!d, !1)
    }
      , jh = function(a, b) {
        Sg();
        Tg(a, [zf(B.location, "host", !0)], b, !0, !0)
    }
      , kh = function() {
        var a = F.location.hostname
          , b = Wg.exec(F.referrer);
        if (!b)
            return !1;
        var c = b[2]
          , d = b[1]
          , e = "";
        if (c) {
            var f = c.split("/")
              , g = f[1];
            e = "s" === g ? decodeURIComponent(f[2]) : decodeURIComponent(g)
        } else if (d) {
            if (0 === d.indexOf("xn--"))
                return !1;
            e = d.replace(/-/g, ".").replace(/\.\./g, "-")
        }
        var k = a.replace(Xg, ""), m = e.replace(Xg, ""), n;
        if (!(n = k === m)) {
            var p = "." + m;
            n = k.substring(k.length - p.length, k.length) === p
        }
        return n
    }
      , lh = function(a, b) {
        return !1 === a ? !1 : a || b || kh()
    };
    var mh = {};
    var nh = /^\w+$/
      , oh = /^[\w-]+$/
      , ph = {
        aw: "_aw",
        dc: "_dc",
        gf: "_gf",
        ha: "_ha",
        gp: "_gp",
        gb: "_gb"
    }
      , qh = function() {
        if (!Td().m() || !de())
            return !0;
        var a = ae("ad_storage");
        return null == a ? !0 : !!a
    }
      , rh = function(a, b) {
        ce("ad_storage") ? qh() ? a() : ie(a, "ad_storage") : b ? dd("TAGGING", 3) : he(function() {
            rh(a, !0)
        }, ["ad_storage"])
    }
      , th = function(a) {
        return sh(a).map(function(b) {
            return b.sa
        })
    }
      , sh = function(a) {
        var b = [];
        if (!eg(B) || !F.cookie)
            return b;
        var c = hg(a, F.cookie, void 0, "ad_storage");
        if (!c || 0 == c.length)
            return b;
        for (var d = {}, e = 0; e < c.length; d = {
            Hc: d.Hc
        },
        e++) {
            var f = uh(c[e]);
            if (null != f) {
                var g = f
                  , k = g.version;
                d.Hc = g.sa;
                var m = g.timestamp
                  , n = g.labels
                  , p = wa(b, function(r) {
                    return function(t) {
                        return t.sa === r.Hc
                    }
                }(d));
                p ? (p.timestamp = Math.max(p.timestamp, m),
                p.labels = vh(p.labels, n || [])) : b.push({
                    version: k,
                    sa: d.Hc,
                    timestamp: m,
                    labels: n
                })
            }
        }
        b.sort(function(r, t) {
            return t.timestamp - r.timestamp
        });
        return wh(b)
    };
    function vh(a, b) {
        for (var c = {}, d = [], e = 0; e < a.length; e++)
            c[a[e]] = !0,
            d.push(a[e]);
        for (var f = 0; f < b.length; f++)
            c[b[f]] || d.push(b[f]);
        return d
    }
    function xh(a) {
        return a && "string" == typeof a && a.match(nh) ? a : "_gcl"
    }
    var zh = function() {
        var a = Cf(B.location.href)
          , b = Af(a, "query", !1, void 0, "gclid")
          , c = Af(a, "query", !1, void 0, "gclsrc")
          , d = Af(a, "query", !1, void 0, "wbraid")
          , e = Af(a, "query", !1, void 0, "dclid");
        if (!b || !c || !d) {
            var f = a.hash.replace("#", "");
            b = b || xf(f, "gclid", void 0);
            c = c || xf(f, "gclsrc", void 0);
            d = d || xf(f, "wbraid", void 0)
        }
        return yh(b, c, e, d)
    }
      , yh = function(a, b, c, d) {
        var e = {}
          , f = function(g, k) {
            e[k] || (e[k] = []);
            e[k].push(g)
        };
        e.gclid = a;
        e.gclsrc = b;
        e.dclid = c;
        void 0 !== d && oh.test(d) && (e.gbraid = d,
        f(d, "gb"));
        if (void 0 !== a && a.match(oh))
            switch (b) {
            case void 0:
                f(a, "aw");
                break;
            case "aw.ds":
                f(a, "aw");
                f(a, "dc");
                break;
            case "ds":
                f(a, "dc");
                break;
            case "3p.ds":
                f(a, "dc");
                break;
            case "gf":
                f(a, "gf");
                break;
            case "ha":
                f(a, "ha")
            }
        c && f(c, "dc");
        return e
    }
      , Bh = function(a) {
        var b = zh();
        rh(function() {
            Ah(b, !1, a)
        })
    };
    function Ah(a, b, c, d, e) {
        function f(y, A) {
            var w = Ch(y, g);
            w && (qg(w, A, k),
            m = !0)
        }
        c = c || {};
        e = e || [];
        var g = xh(c.prefix);
        d = d || Ja();
        var k = zg(c, d, !0);
        k.Ra = "ad_storage";
        var m = !1
          , n = Math.round(d / 1E3)
          , p = function(y) {
            var A = ["GCL", n, y];
            0 < e.length && A.push(e.join("."));
            return A.join(".")
        };
        a.aw && f("aw", p(a.aw[0]));
        a.dc && f("dc", p(a.dc[0]));
        a.gf && f("gf", p(a.gf[0]));
        a.ha && f("ha", p(a.ha[0]));
        a.gp && f("gp", p(a.gp[0]));
        if ((void 0 == mh.enable_gbraid_cookie_write ? 0 : mh.enable_gbraid_cookie_write) && !m && a.gb) {
            var r = a.gb[0]
              , t = Ch("gb", g)
              , u = !1;
            if (!b)
                for (var q = sh(t), v = 0; v < q.length; v++)
                    q[v].sa === r && q[v].labels && 0 < q[v].labels.length && (u = !0);
            u || f("gb", p(r))
        }
    }
    var Eh = function(a, b) {
        var c = dh(!0);
        rh(function() {
            for (var d = xh(b.prefix), e = 0; e < a.length; ++e) {
                var f = a[e];
                if (void 0 !== ph[f]) {
                    var g = Ch(f, d)
                      , k = c[g];
                    if (k) {
                        var m = Math.min(Dh(k), Ja()), n;
                        b: {
                            var p = m;
                            if (eg(B))
                                for (var r = hg(g, F.cookie, void 0, "ad_storage"), t = 0; t < r.length; ++t)
                                    if (Dh(r[t]) > p) {
                                        n = !0;
                                        break b
                                    }
                            n = !1
                        }
                        if (!n) {
                            var u = zg(b, m, !0);
                            u.Ra = "ad_storage";
                            qg(g, k, u)
                        }
                    }
                }
            }
            Ah(yh(c.gclid, c.gclsrc), !1, b)
        })
    }
      , Ch = function(a, b) {
        var c = ph[a];
        if (void 0 !== c)
            return b + c
    }
      , Dh = function(a) {
        return 0 !== Fh(a.split(".")).length ? 1E3 * (Number(a.split(".")[1]) || 0) : 0
    };
    function uh(a) {
        var b = Fh(a.split("."));
        return 0 === b.length ? null : {
            version: b[0],
            sa: b[2],
            timestamp: 1E3 * (Number(b[1]) || 0),
            labels: b.slice(3)
        }
    }
    function Fh(a) {
        return 3 > a.length || "GCL" !== a[0] && "1" !== a[0] || !/^\d+$/.test(a[1]) || !oh.test(a[2]) ? [] : a
    }
    var Gh = function(a, b, c, d, e) {
        if (ua(b) && eg(B)) {
            var f = xh(e)
              , g = function() {
                for (var k = {}, m = 0; m < a.length; ++m) {
                    var n = Ch(a[m], f);
                    if (n) {
                        var p = hg(n, F.cookie, void 0, "ad_storage");
                        p.length && (k[n] = p.sort()[p.length - 1])
                    }
                }
                return k
            };
            rh(function() {
                ih(g, b, c, d)
            })
        }
    }
      , wh = function(a) {
        return a.filter(function(b) {
            return oh.test(b.sa)
        })
    }
      , Hh = function(a, b) {
        if (eg(B)) {
            for (var c = xh(b.prefix), d = {}, e = 0; e < a.length; e++)
                ph[a[e]] && (d[a[e]] = ph[a[e]]);
            rh(function() {
                Ba(d, function(f, g) {
                    var k = hg(c + g, F.cookie, void 0, "ad_storage");
                    k.sort(function(u, q) {
                        return Dh(q) - Dh(u)
                    });
                    if (k.length) {
                        var m = k[0], n = Dh(m), p = 0 !== Fh(m.split(".")).length ? m.split(".").slice(3) : [], r = {}, t;
                        t = 0 !== Fh(m.split(".")).length ? m.split(".")[2] : void 0;
                        r[f] = [t];
                        Ah(r, !0, b, n, p)
                    }
                })
            })
        }
    };
    function Ih(a, b) {
        for (var c = 0; c < b.length; ++c)
            if (a[b[c]])
                return !0;
        return !1
    }
    var Jh = function(a) {
        function b(e, f, g) {
            g && (e[f] = g)
        }
        if (de()) {
            var c = zh();
            if (Ih(c, a)) {
                var d = {};
                b(d, "gclid", c.gclid);
                b(d, "dclid", c.dclid);
                b(d, "gclsrc", c.gclsrc);
                b(d, "wbraid", c.gbraid);
                jh(function() {
                    return d
                }, 3);
                jh(function() {
                    var e = {};
                    return e._up = "1",
                    e
                }, 1)
            }
        }
    };
    function Kh(a, b) {
        var c = xh(b)
          , d = Ch(a, c);
        if (!d)
            return 0;
        for (var e = sh(d), f = 0, g = 0; g < e.length; g++)
            f = Math.max(f, e[g].timestamp);
        return f
    }
    function Lh(a) {
        var b = 0, c;
        for (c in a)
            for (var d = a[c], e = 0; e < d.length; e++)
                b = Math.max(b, Number(d[e].timestamp));
        return b
    }
    ;var gi = !1
      , hi = 0
      , ii = [];
    function ji(a) {
        if (!gi) {
            var b = F.createEventObject
              , c = "complete" == F.readyState
              , d = "interactive" == F.readyState;
            if (!a || "readystatechange" != a.type || c || !b && d) {
                gi = !0;
                for (var e = 0; e < ii.length; e++)
                    H(ii[e])
            }
            ii.push = function() {
                for (var f = 0; f < arguments.length; f++)
                    H(arguments[f]);
                return 0
            }
        }
    }
    function ki() {
        if (!gi && 140 > hi) {
            hi++;
            try {
                F.documentElement.doScroll("left"),
                ji()
            } catch (a) {
                B.setTimeout(ki, 50)
            }
        }
    }
    var li = function(a) {
        gi ? a() : ii.push(a)
    };
    var ni = function(a, b) {
        this.m = !1;
        this.D = [];
        this.J = {
            tags: []
        };
        this.X = !1;
        this.o = this.s = 0;
        mi(this, a, b)
    }
      , oi = function(a, b, c, d) {
        if (jd.hasOwnProperty(b) || "__zone" === b)
            return -1;
        var e = {};
        Hb(d) && (e = J(d, e));
        e.id = c;
        e.status = "timeout";
        return a.J.tags.push(e) - 1
    }
      , pi = function(a, b, c, d) {
        var e = a.J.tags[b];
        e && (e.status = c,
        e.executionTime = d)
    }
      , qi = function(a) {
        if (!a.m) {
            for (var b = a.D, c = 0; c < b.length; c++)
                b[c]();
            a.m = !0;
            a.D.length = 0
        }
    }
      , mi = function(a, b, c) {
        sa(b) && ri(a, b);
        c && B.setTimeout(function() {
            return qi(a)
        }, Number(c))
    }
      , ri = function(a, b) {
        var c = Ma(function() {
            return H(function() {
                b(S.H, a.J)
            })
        });
        a.m ? c() : a.D.push(c)
    }
      , si = function(a) {
        a.s++;
        return Ma(function() {
            a.o++;
            a.X && a.o >= a.s && qi(a)
        })
    };
    var ti = function() {
        function a(d) {
            return !ta(d) || 0 > d ? 0 : d
        }
        if (!U._li && B.performance && B.performance.timing) {
            var b = B.performance.timing.navigationStart
              , c = ta(Dd.get("gtm.start")) ? Dd.get("gtm.start") : 0;
            U._li = {
                cst: a(c - b),
                cbt: a(pd - b)
            }
        }
    }
      , ui = function(a) {
        B.performance && B.performance.mark(S.H + "_" + a + "_start")
    }
      , vi = function(a) {
        if (B.performance) {
            var b = S.H + "_" + a + "_start"
              , c = S.H + "_" + a + "_duration";
            B.performance.measure(c, b);
            var d = B.performance.getEntriesByName(c)[0];
            B.performance.clearMarks(b);
            B.performance.clearMeasures(c);
            var e = U._p || {};
            void 0 === e[a] && (e[a] = d.duration,
            U._p = e);
            return d.duration
        }
    }
      , wi = function() {
        if (B.performance && B.performance.now) {
            var a = U._p || {};
            a.PAGEVIEW = B.performance.now();
            U._p = a
        }
    };
    var xi = {}
      , yi = function() {
        return B.GoogleAnalyticsObject && B[B.GoogleAnalyticsObject]
    }
      , zi = !1;
    var Ai = function(a) {
        B.GoogleAnalyticsObject || (B.GoogleAnalyticsObject = a || "ga");
        var b = B.GoogleAnalyticsObject;
        if (B[b])
            B.hasOwnProperty(b) || fd(12);
        else {
            var c = function() {
                c.q = c.q || [];
                c.q.push(arguments)
            };
            c.l = Number(Ia());
            B[b] = c
        }
        ti();
        return B[b]
    }
      , Bi = function(a) {
        if (de()) {
            var b = yi();
            b(a + "require", "linker");
            b(a + "linker:passthrough", !0)
        }
    };
    function Ci() {
        return B.GoogleAnalyticsObject || "ga"
    }
    var Di = function(a) {}
      , Ei = function(a, b) {
        return function() {
            var c = yi()
              , d = c && c.getByName && c.getByName(a);
            if (d) {
                var e = d.get("sendHitTask");
                d.set("sendHitTask", function(f) {
                    var g = f.get("hitPayload")
                      , k = f.get("hitCallback")
                      , m = 0 > g.indexOf("&tid=" + b);
                    m && (f.set("hitPayload", g.replace(/&tid=UA-[0-9]+-[0-9]+/, "&tid=" + b), !0),
                    f.set("hitCallback", void 0, !0));
                    e(f);
                    m && (f.set("hitPayload", g, !0),
                    f.set("hitCallback", k, !0),
                    f.set("_x_19", void 0, !0),
                    e(f))
                })
            }
        }
    };
    var Li = function(a) {}, Wi = function(a) {}, Xi = function() {
        return "&tc=" + ic.filter(function(a) {
            return a
        }).length
    }, $i = function() {
        2022 <= Yi().length && Zi()
    }, aj = function(a) {
        return 0 === a.indexOf("gtm.") ? encodeURIComponent(a) : "*"
    }, cj = function() {
        bj || (bj = B.setTimeout(Zi, 500))
    }, Zi = function() {
        bj && (B.clearTimeout(bj),
        bj = void 0);
        void 0 === dj || ej[dj] && !fj && !gj || (hj[dj] || ij.Mi() || 0 >= jj-- ? (fd(1),
        hj[dj] = !0) : (ij.ij(),
        sb(Yi(!0)),
        ej[dj] = !0,
        kj = lj = mj = gj = fj = ""))
    }, Yi = function(a) {
        var b = dj;
        if (void 0 === b)
            return "";
        var c = ed("GTM")
          , d = ed("TAGGING");
        return [nj, ej[b] ? "" : "&es=1", oj[b], Li(b), c ? "&u=" + c : "", d ? "&ut=" + d : "", Xi(), fj, gj, mj, lj, Wi(a), kj, "&z=0"].join("")
    }, qj = function() {
        nj = pj()
    }, pj = function() {
        return [qd, "&v=3&t=t", "&pid=" + ya(), "&rv=" + S.cd].join("")
    }, Vi = ["L", "S", "Y"], Ki = ["S", "E"], rj = {
        sampleRate: "0.005000",
        Zg: "",
        Yg: Number("5")
    }, sj = 0 <= F.location.search.indexOf("?gtm_latency=") || 0 <= F.location.search.indexOf("&gtm_latency="), tj;
    if (!(tj = sj)) {
        var uj = Math.random()
          , vj = rj.sampleRate;
        tj = uj < vj
    }
    var wj = tj
      , xj = {
        label: S.H + " Container",
        children: [{
            label: "Initialization",
            children: []
        }]
    }
      , nj = pj()
      , ej = {}
      , fj = ""
      , gj = ""
      , kj = ""
      , lj = ""
      , Ui = {}
      , Ti = !1
      , Ji = {}
      , yj = {}
      , mj = ""
      , dj = void 0
      , oj = {}
      , hj = {}
      , bj = void 0
      , zj = 5;
    0 < rj.Yg && (zj = rj.Yg);
    var ij = function(a, b) {
        for (var c = 0, d = [], e = 0; e < a; ++e)
            d.push(0);
        return {
            Mi: function() {
                return c < a ? !1 : Ja() - d[c % a] < b
            },
            ij: function() {
                var f = c++ % a;
                d[f] = Ja()
            }
        }
    }(zj, 1E3)
      , jj = 1E3
      , Bj = function(a, b) {
        if (wj && !hj[a] && dj !== a) {
            Zi();
            dj = a;
            kj = fj = "";
            oj[a] = "&e=" + aj(b) + "&eid=" + a;
            cj();
        }
    }
      , Cj = function(a, b, c, d) {
        if (wj && b) {
            var e, f = String(b[Jb.ob] || "").replace(/_/g, "");
            0 === f.indexOf("cvt") && (f = "cvt");
            e = f;
            var g = c + e;
            if (!hj[a]) {
                a !== dj && (Zi(),
                dj = a);
                fj = fj ? fj + "." + g : "&tr=" + g;
                var k = b["function"];
                if (!k)
                    throw Error("Error: No function name given for function call.");
                var m = (kc[k] ? "1" : "2") + e;
                kj = kj ? kj + "." + m : "&ti=" + m;
                cj();
                $i()
            }
        }
    };
    var Jj = function(a, b, c) {
        if (wj && !hj[a]) {
            a !== dj && (Zi(),
            dj = a);
            var d = c + b;
            gj = gj ? gj + "." + d : "&epr=" + d;
            cj();
            $i()
        }
    }
      , Kj = function(a, b, c) {};
    function Lj(a, b, c, d) {
        var e = ic[a]
          , f = Mj(a, b, c, d);
        if (!f)
            return null;
        var g = pc(e[Jb.Tf], c, []);
        if (g && g.length) {
            var k = g[0];
            f = Lj(k.index, {
                onSuccess: f,
                onFailure: 1 === k.mg ? b.terminate : f,
                terminate: b.terminate
            }, c, d)
        }
        return f
    }
    function Mj(a, b, c, d) {
        function e() {
            if (f[Jb.Rh])
                k();
            else {
                var y = qc(f, c, []);
                var A = y[Jb.dh];
                if (null != A)
                    for (var w = 0; w < A.length; w++)
                        if (!te(A[w])) {
                            k();
                            return
                        }
                var z = oi(c.Nb, String(f[Jb.ob]), Number(f[Jb.Vf]), y[Jb.Sh])
                  , x = !1;
                y.vtp_gtmOnSuccess = function() {
                    if (!x) {
                        x = !0;
                        var D = Ja() - E;
                        Cj(c.id, ic[a], "5", D);
                        pi(c.Nb, z, "success", D);
                        g()
                    }
                }
                ;
                y.vtp_gtmOnFailure = function() {
                    if (!x) {
                        x = !0;
                        var D = Ja() - E;
                        Cj(c.id, ic[a], "6", D);
                        pi(c.Nb, z, "failure", D);
                        k()
                    }
                }
                ;
                y.vtp_gtmTagId = f.tag_id;
                y.vtp_gtmEventId = c.id;
                Cj(c.id, f, "1");
                var C = function() {
                    var D = Ja() - E;
                    Cj(c.id, f, "7", D);
                    pi(c.Nb, z, "exception", D);
                    x || (x = !0,
                    k())
                };
                var E = Ja();
                try {
                    oc(y, {
                        event: c,
                        index: a,
                        type: 1
                    })
                } catch (D) {
                    C(D)
                }
            }
        }
        var f = ic[a]
          , g = b.onSuccess
          , k = b.onFailure
          , m = b.terminate;
        if (c.Ke(f))
            return null;
        var n = pc(f[Jb.Wf], c, []);
        if (n && n.length) {
            var p = n[0]
              , r = Lj(p.index, {
                onSuccess: g,
                onFailure: k,
                terminate: m
            }, c, d);
            if (!r)
                return null;
            g = r;
            k = 2 === p.mg ? m : r
        }
        if (f[Jb.Pf] || f[Jb.Wh]) {
            var t = f[Jb.Pf] ? jc : c.uj
              , u = g
              , q = k;
            if (!t[a]) {
                e = Ma(e);
                var v = Nj(a, t, e);
                g = v.onSuccess;
                k = v.onFailure
            }
            return function() {
                t[a](u, q)
            }
        }
        return e
    }
    function Nj(a, b, c) {
        var d = []
          , e = [];
        b[a] = Oj(d, e, c);
        return {
            onSuccess: function() {
                b[a] = Pj;
                for (var f = 0; f < d.length; f++)
                    d[f]()
            },
            onFailure: function() {
                b[a] = Qj;
                for (var f = 0; f < e.length; f++)
                    e[f]()
            }
        }
    }
    function Oj(a, b, c) {
        return function(d, e) {
            a.push(d);
            b.push(e);
            c()
        }
    }
    function Pj(a) {
        a()
    }
    function Qj(a, b) {
        b()
    }
    ;var Tj = function(a, b) {
        for (var c = [], d = 0; d < ic.length; d++)
            if (a[d]) {
                var e = ic[d];
                var f = si(b.Nb);
                try {
                    var g = Lj(d, {
                        onSuccess: f,
                        onFailure: f,
                        terminate: f
                    }, b, d);
                    if (g) {
                        var k = c
                          , m = k.push
                          , n = d
                          , p = e["function"];
                        if (!p)
                            throw "Error: No function name given for function call.";
                        var r = kc[p];
                        m.call(k, {
                            Rg: n,
                            Hg: r ? r.priorityOverride || 0 : 0,
                            execute: g
                        })
                    } else
                        Rj(d, b),
                        f()
                } catch (q) {
                    f()
                }
            }
        var t = b.Nb;
        t.X = !0;
        t.o >= t.s && qi(t);
        c.sort(Sj);
        for (var u = 0; u < c.length; u++)
            c[u].execute();
        return 0 < c.length
    };
    function Sj(a, b) {
        var c, d = b.Hg, e = a.Hg;
        c = d > e ? 1 : d < e ? -1 : 0;
        var f;
        if (0 !== c)
            f = c;
        else {
            var g = a.Rg
              , k = b.Rg;
            f = g > k ? 1 : g < k ? -1 : 0
        }
        return f
    }
    function Rj(a, b) {
        if (!wj)
            return;
        var c = function(d) {
            var e = b.Ke(ic[d]) ? "3" : "4"
              , f = pc(ic[d][Jb.Tf], b, []);
            f && f.length && c(f[0].index);
            Cj(b.id, ic[d], e);
            var g = pc(ic[d][Jb.Wf], b, []);
            g && g.length && c(g[0].index)
        };
        c(a);
    }
    var Uj = !1;
    var Zj = function(a) {
        var b = Ja()
          , c = a["gtm.uniqueEventId"]
          , d = a.event;
        if ("gtm.js" === d) {
            if (Uj)
                return !1;
            Uj = !0;
        }
        var g = Pd(c)
          , k = !1;
        if (!g.active) {
            if ("gtm.js" !== d && "gtm.init" !== d && "gtm.init_consent" !== d)
                return !1;
            k = !0;
            g = Pd(Number.MAX_SAFE_INTEGER)
        }
        Bj(c, d);
        var m = a.eventCallback
          , n = a.eventTimeout
          , p = m;
        var r = {
            id: c,
            name: d,
            Ke: Nd(g.isAllowed),
            uj: [],
            Ag: function() {
                fd(6)
            },
            gg: Vj(),
            hg: Wj(c),
            Nb: new ni(p,n)
        }
          , t = uc(r);
        k && (t = Xj(t));
        var u = Tj(t, r);
        "gtm.js" !== d && "gtm.sync" !== d || Di(S.H);
        return Yj(t, u)
    };
    function Wj(a) {
        return function(b) {
            wj && (Ib(b) || Kj(a, "input", b))
        }
    }
    function Vj() {
        var a = {};
        a.event = Gd("event", 1);
        a.ecommerce = Gd("ecommerce", 1);
        a.gtm = Gd("gtm");
        a.eventModel = Gd("eventModel");
        return a
    }
    function Xj(a) {
        for (var b = [], c = 0; c < a.length; c++)
            if (a[c]) {
                var d = String(ic[c][Jb.ob]);
                hd[d] && (b[c] = !0);
                id[d] && (b[c] = !0);
            }
        return b
    }
    function Yj(a, b) {
        if (!b)
            return b;
        for (var c = 0; c < a.length; c++)
            if (a[c] && ic[c] && !jd[String(ic[c][Jb.ob])])
                return !0;
        return !1
    }
    function ak(a, b) {
        if (a) {
            var c = "" + a;
            0 !== c.indexOf("http://") && 0 !== c.indexOf("https://") && (c = "https://" + c);
            "/" === c[c.length - 1] && (c = c.substring(0, c.length - 1));
            return Cf("" + c + b).href
        }
    }
    function bk(a, b) {
        return ck() ? ak(a, b) : void 0
    }
    function ck() {
        var a = !1;
        return a
    }
    function dk() {
        return !!S.dd && "SGTM_TOKEN" !== S.dd.replaceAll("@@", "")
    }
    ;var ek = function() {
        var a = !1;
        return a
    };
    var fk;
    if (3 === S.cd.length)
        fk = "g";
    else {
        var gk = "G";
        gk = "g";
        fk = gk
    }
    var hk = {
        "": "n",
        UA: "u",
        AW: "a",
        DC: "d",
        G: "e",
        GF: "f",
        HA: "h",
        GTM: fk,
        OPT: "o"
    }
      , ik = function(a) {
        var b = S.H.split("-"), c = b[0].toUpperCase(), d = hk[c] || "i", e = a && "GTM" === c ? b[1] : "OPT" === c ? b[1] : "", f;
        if (3 === S.cd.length) {
            var g = "w";
            g = ek() ? "s" : "o";
            f = "2" + g
        } else
            f = "";
        return f + d + S.cd + e
    };
    function jk(a, b) {
        if ("" === a)
            return b;
        var c = Number(a);
        return isNaN(c) ? b : c
    }
    ;var kk = function(a, b) {
        a.addEventListener && a.addEventListener.call(a, "message", b, !1)
    };
    function lk() {
        return Za("iPhone") && !Za("iPod") && !Za("iPad")
    }
    ;Za("Opera");
    Za("Trident") || Za("MSIE");
    Za("Edge");
    !Za("Gecko") || -1 != Ya().toLowerCase().indexOf("webkit") && !Za("Edge") || Za("Trident") || Za("MSIE") || Za("Edge");
    -1 != Ya().toLowerCase().indexOf("webkit") && !Za("Edge") && Za("Mobile");
    Za("Macintosh");
    Za("Windows");
    Za("Linux") || Za("CrOS");
    var mk = oa.navigator || null;
    mk && (mk.appVersion || "").indexOf("X11");
    Za("Android");
    lk();
    Za("iPad");
    Za("iPod");
    lk() || Za("iPad") || Za("iPod");
    Ya().toLowerCase().indexOf("kaios");
    var nk = function(a) {
        if (!a || !F.head)
            return null;
        var b, c;
        c = void 0 === c ? document : c;
        b = c.createElement("meta");
        F.head.appendChild(b);
        b.httpEquiv = "origin-trial";
        b.content = a;
        return b
    };
    var ok = function() {};
    var pk = function(a) {
        void 0 !== a.addtlConsent && "string" !== typeof a.addtlConsent && (a.addtlConsent = void 0);
        void 0 !== a.gdprApplies && "boolean" !== typeof a.gdprApplies && (a.gdprApplies = void 0);
        return void 0 !== a.tcString && "string" !== typeof a.tcString || void 0 !== a.listenerId && "number" !== typeof a.listenerId ? 2 : a.cmpStatus && "error" !== a.cmpStatus ? 0 : 3
    }
      , qk = function(a, b) {
        this.o = a;
        this.m = null;
        this.D = {};
        this.X = 0;
        this.J = void 0 === b ? 500 : b;
        this.s = null
    };
    na(qk, ok);
    qk.prototype.addEventListener = function(a) {
        var b = {}
          , c = fb(function() {
            return a(b)
        })
          , d = 0;
        -1 !== this.J && (d = setTimeout(function() {
            b.tcString = "tcunavailable";
            b.internalErrorState = 1;
            c()
        }, this.J));
        var e = function(f, g) {
            clearTimeout(d);
            f ? (b = f,
            b.internalErrorState = pk(b),
            g && 0 === b.internalErrorState || (b.tcString = "tcunavailable",
            g || (b.internalErrorState = 3))) : (b.tcString = "tcunavailable",
            b.internalErrorState = 3);
            a(b)
        };
        try {
            rk(this, "addEventListener", e)
        } catch (f) {
            b.tcString = "tcunavailable",
            b.internalErrorState = 3,
            d && (clearTimeout(d),
            d = 0),
            c()
        }
    }
    ;
    qk.prototype.removeEventListener = function(a) {
        a && a.listenerId && rk(this, "removeEventListener", null, a.listenerId)
    }
    ;
    var tk = function(a, b, c) {
        var d;
        d = void 0 === d ? "755" : d;
        var e;
        a: {
            if (a.publisher && a.publisher.restrictions) {
                var f = a.publisher.restrictions[b];
                if (void 0 !== f) {
                    e = f[void 0 === d ? "755" : d];
                    break a
                }
            }
            e = void 0
        }
        var g = e;
        if (0 === g)
            return !1;
        var k = c;
        2 === c ? (k = 0,
        2 === g && (k = 1)) : 3 === c && (k = 1,
        1 === g && (k = 0));
        var m;
        if (0 === k)
            if (a.purpose && a.vendor) {
                var n = sk(a.vendor.consents, void 0 === d ? "755" : d);
                m = n && "1" === b && a.purposeOneTreatment && "CH" === a.publisherCC ? !0 : n && sk(a.purpose.consents, b)
            } else
                m = !0;
        else
            m = 1 === k ? a.purpose && a.vendor ? sk(a.purpose.legitimateInterests, b) && sk(a.vendor.legitimateInterests, void 0 === d ? "755" : d) : !0 : !0;
        return m
    }
      , sk = function(a, b) {
        return !(!a || !a[b])
    }
      , rk = function(a, b, c, d) {
        c || (c = function() {}
        );
        if ("function" === typeof a.o.__tcfapi) {
            var e = a.o.__tcfapi;
            e(b, 2, c, d)
        } else if (uk(a)) {
            vk(a);
            var f = ++a.X;
            a.D[f] = c;
            if (a.m) {
                var g = {};
                a.m.postMessage((g.__tcfapiCall = {
                    command: b,
                    version: 2,
                    callId: f,
                    parameter: d
                },
                g), "*")
            }
        } else
            c({}, !1)
    }
      , uk = function(a) {
        if (a.m)
            return a.m;
        var b;
        a: {
            for (var c = a.o, d = 0; 50 > d; ++d) {
                var e;
                try {
                    e = !(!c.frames || !c.frames.__tcfapiLocator)
                } catch (k) {
                    e = !1
                }
                if (e) {
                    b = c;
                    break a
                }
                var f;
                b: {
                    try {
                        var g = c.parent;
                        if (g && g != c) {
                            f = g;
                            break b
                        }
                    } catch (k) {}
                    f = null
                }
                if (!(c = f))
                    break
            }
            b = null
        }
        a.m = b;
        return a.m
    }
      , vk = function(a) {
        a.s || (a.s = function(b) {
            try {
                var c;
                c = ("string" === typeof b.data ? JSON.parse(b.data) : b.data).__tcfapiReturn;
                a.D[c.callId](c.returnValue, c.success)
            } catch (d) {}
        }
        ,
        kk(a.o, a.s))
    };
    var wk = !0;
    wk = !1;
    var xk = {
        1: 0,
        3: 0,
        4: 0,
        7: 3,
        9: 3,
        10: 3
    }
      , yk = jk("", 550)
      , zk = jk("", 500);
    function Ak() {
        var a = U.tcf || {};
        return U.tcf = a
    }
    var Fk = function() {
        var a = Ak()
          , b = new qk(B,wk ? 3E3 : -1);
        if (!0 === B.gtag_enable_tcf_support && !a.active && ("function" === typeof B.__tcfapi || "function" === typeof b.o.__tcfapi || null != uk(b))) {
            a.active = !0;
            a.Cc = {};
            Bk();
            var c = null;
            wk ? c = B.setTimeout(function() {
                Ck(a);
                Dk(a);
                c = null
            }, zk) : a.tcString = "tcunavailable";
            try {
                b.addEventListener(function(d) {
                    c && (clearTimeout(c),
                    c = null);
                    if (0 !== d.internalErrorState)
                        Ck(a),
                        Dk(a);
                    else {
                        var e;
                        a.gdprApplies = d.gdprApplies;
                        if (!1 === d.gdprApplies)
                            e = Ek(),
                            b.removeEventListener(d);
                        else if ("tcloaded" === d.eventStatus || "useractioncomplete" === d.eventStatus || "cmpuishown" === d.eventStatus) {
                            var f = {}, g;
                            for (g in xk)
                                if (xk.hasOwnProperty(g))
                                    if ("1" === g) {
                                        var k = d
                                          , m = !0;
                                        m = void 0 === m ? !1 : m;
                                        var n;
                                        var p = k;
                                        !1 === p.gdprApplies ? n = !0 : (void 0 === p.internalErrorState && (p.internalErrorState = pk(p)),
                                        n = "error" === p.cmpStatus || 0 !== p.internalErrorState || "loaded" === p.cmpStatus && ("tcloaded" === p.eventStatus || "useractioncomplete" === p.eventStatus) ? !0 : !1);
                                        f["1"] = n ? !1 === k.gdprApplies || "tcunavailable" === k.tcString || void 0 === k.gdprApplies && !m || "string" !== typeof k.tcString || !k.tcString.length ? !0 : tk(k, "1", 0) : !1
                                    } else
                                        f[g] = tk(d, g, xk[g]);
                            e = f
                        }
                        e && (a.tcString = d.tcString || "tcempty",
                        a.Cc = e,
                        Dk(a))
                    }
                })
            } catch (d) {
                c && (clearTimeout(c),
                c = null),
                Ck(a),
                Dk(a)
            }
        }
    };
    function Ck(a) {
        a.type = "e";
        a.tcString = "tcunavailable";
        wk && (a.Cc = Ek())
    }
    function Bk() {
        var a = {}
          , b = (a.ad_storage = "denied",
        a.wait_for_update = yk,
        a);
        ne(b)
    }
    function Ek() {
        var a = {}, b;
        for (b in xk)
            xk.hasOwnProperty(b) && (a[b] = !0);
        return a
    }
    function Dk(a) {
        var b = {}
          , c = (b.ad_storage = a.Cc["1"] ? "granted" : "denied",
        b);
        se(c, 0, {
            gdprApplies: a ? a.gdprApplies : void 0,
            tcString: Gk()
        })
    }
    var Gk = function() {
        var a = Ak();
        return a.active ? a.tcString || "" : ""
    }
      , Hk = function() {
        var a = Ak();
        return a.active && void 0 !== a.gdprApplies ? a.gdprApplies ? "1" : "0" : ""
    }
      , Ik = function(a) {
        if (!xk.hasOwnProperty(String(a)))
            return !0;
        var b = Ak();
        return b.active && b.Cc ? !!b.Cc[String(a)] : !0
    };
    var Pk = !1;
    var Qk = function() {
        this.m = {}
    }
      , Rk = function(a, b, c) {
        null != c && (a.m[b] = c)
    }
      , Sk = function(a) {
        return Object.keys(a.m).map(function(b) {
            return encodeURIComponent(b) + "=" + encodeURIComponent(a.m[b])
        }).join("&")
    }
      , Uk = function(a, b, c, d, e) {};
    var Wk = /[A-Z]+/
      , Xk = /\s/
      , Yk = function(a) {
        if (l(a)) {
            a = Ha(a);
            var b = a.indexOf("-");
            if (!(0 > b)) {
                var c = a.substring(0, b);
                if (Wk.test(c)) {
                    for (var d = a.substring(b + 1).split("/"), e = 0; e < d.length; e++)
                        if (!d[e] || Xk.test(d[e]) && ("AW" !== c || 1 !== e))
                            return;
                    return {
                        id: a,
                        prefix: c,
                        containerId: c + "-" + d[0],
                        M: d
                    }
                }
            }
        }
    }
      , $k = function(a) {
        for (var b = {}, c = 0; c < a.length; ++c) {
            var d = Yk(a[c]);
            d && (b[d.id] = d)
        }
        Zk(b);
        var e = [];
        Ba(b, function(f, g) {
            e.push(g)
        });
        return e
    };
    function Zk(a) {
        var b = [], c;
        for (c in a)
            if (a.hasOwnProperty(c)) {
                var d = a[c];
                "AW" === d.prefix && d.M[1] && b.push(d.containerId)
            }
        for (var e = 0; e < b.length; ++e)
            delete a[b[e]]
    }
    ;var bl = function(a, b, c, d) {
        return (2 === al() || d || "http:" != B.location.protocol ? a : b) + c
    }
      , al = function() {
        var a = pb(), b;
        if (1 === a)
            a: {
                var c = ld;
                c = c.toLowerCase();
                for (var d = "https://" + c, e = "http://" + c, f = 1, g = F.getElementsByTagName("script"), k = 0; k < g.length && 100 > k; k++) {
                    var m = g[k].src;
                    if (m) {
                        m = m.toLowerCase();
                        if (0 === m.indexOf(e)) {
                            b = 3;
                            break a
                        }
                        1 === f && 0 === m.indexOf(d) && (f = 2)
                    }
                }
                b = f
            }
        else
            b = a;
        return b
    };
    var dl = function(a, b, c) {
        if (B[a.functionName])
            return b.Qe && H(b.Qe),
            B[a.functionName];
        var d = cl();
        B[a.functionName] = d;
        if (a.hd)
            for (var e = 0; e < a.hd.length; e++)
                B[a.hd[e]] = B[a.hd[e]] || cl();
        a.ud && void 0 === B[a.ud] && (B[a.ud] = c);
        ob(bl("https://", "http://", a.We), b.Qe, b.Xi);
        return d
    }
      , cl = function() {
        var a = function() {
            a.q = a.q || [];
            a.q.push(arguments)
        };
        return a
    }
      , el = {
        functionName: "_googWcmImpl",
        ud: "_googWcmAk",
        We: "www.gstatic.com/wcm/loader.js"
    }
      , fl = {
        functionName: "_gaPhoneImpl",
        ud: "ga_wpid",
        We: "www.gstatic.com/gaphone/loader.js"
    }
      , gl = {
        bh: "",
        Xh: "5"
    }
      , hl = {
        functionName: "_googCallTrackingImpl",
        hd: [fl.functionName, el.functionName],
        We: "www.gstatic.com/call-tracking/call-tracking_" + (gl.bh || gl.Xh) + ".js"
    }
      , il = {}
      , jl = function(a, b, c, d) {
        fd(22);
        if (c) {
            d = d || {};
            var e = dl(el, d, a)
              , f = {
                ak: a,
                cl: b
            };
            void 0 === d.Qa && (f.autoreplace = c);
            e(2, d.Qa, f, c, 0, Ia(), d.options)
        }
    }
      , kl = function(a, b, c, d) {
        fd(21);
        if (b && c) {
            d = d || {};
            for (var e = {
                countryNameCode: c,
                destinationNumber: b,
                retrievalTime: Ia()
            }, f = 0; f < a.length; f++) {
                var g = a[f];
                il[g.id] || (g && "AW" === g.prefix && !e.adData && 2 <= g.M.length ? (e.adData = {
                    ak: g.M[0],
                    cl: g.M[1]
                },
                il[g.id] = !0) : g && "UA" === g.prefix && !e.gaData && (e.gaData = {
                    gaWpid: g.containerId
                },
                il[g.id] = !0))
            }
            (e.gaData || e.adData) && dl(hl, d)(d.Qa, e, d.options)
        }
    }
      , ll = function() {
        var a = !1;
        return a
    }
      , ml = function(a, b) {
        if (a)
            if (ek()) {} else {
                if (l(a)) {
                    var c = Yk(a);
                    if (!c)
                        return;
                    a = c
                }
                var d = void 0
                  , e = !1
                  , f = b.getWithConfig(O.Fh);
                if (f && ua(f)) {
                    d = [];
                    for (var g = 0; g < f.length; g++) {
                        var k = Yk(f[g]);
                        k && (d.push(k),
                        (a.id === k.id || a.id === a.containerId && a.containerId === k.containerId) && (e = !0))
                    }
                }
                if (!d || e) {
                    var m = b.getWithConfig(O.Ff), n;
                    if (m) {
                        ua(m) ? n = m : n = [m];
                        var p = b.getWithConfig(O.Df)
                          , r = b.getWithConfig(O.Ef)
                          , t = b.getWithConfig(O.Gf)
                          , u = b.getWithConfig(O.Eh)
                          , q = p || r
                          , v = 1;
                        "UA" !== a.prefix || d || (v = 5);
                        for (var y = 0; y < n.length; y++)
                            if (y < v)
                                if (d)
                                    kl(d, n[y], u, {
                                        Qa: q,
                                        options: t
                                    });
                                else if ("AW" === a.prefix && a.M[1])
                                    ll() ? kl([a], n[y], u || "US", {
                                        Qa: q,
                                        options: t
                                    }) : jl(a.M[0], a.M[1], n[y], {
                                        Qa: q,
                                        options: t
                                    });
                                else if ("UA" === a.prefix)
                                    if (ll())
                                        kl([a], n[y], u || "US", {
                                            Qa: q
                                        });
                                    else {
                                        var A = a.containerId
                                          , w = n[y]
                                          , z = {
                                            Qa: q
                                        };
                                        fd(23);
                                        if (w) {
                                            z = z || {};
                                            var x = dl(fl, z, A)
                                              , C = {};
                                            void 0 !== z.Qa ? C.receiver = z.Qa : C.replace = w;
                                            C.ga_wpid = A;
                                            C.destination = w;
                                            x(2, Ia(), C)
                                        }
                                    }
                    }
                }
            }
    };
    var ul = !1;
    function vl() {
        if (sa(hb.joinAdInterestGroup))
            return !0;
        ul || (nk(''),
        ul = !0);
        return sa(hb.joinAdInterestGroup)
    }
    function wl(a, b) {
        var c = void 0;
        try {
            c = F.querySelector('iframe[data-tagging-id="' + b + '"]')
        } catch (e) {}
        if (c) {
            var d = Number(c.dataset.loadTime);
            if (d && 6E4 > Ja() - d) {
                dd("TAGGING", 9);
                return
            }
        } else
            try {
                if (50 <= F.querySelectorAll('iframe[allow="join-ad-interest-group"][data-tagging-id*="-"]').length) {
                    dd("TAGGING", 10);
                    return
                }
            } catch (e) {}
        rb(a, void 0, {
            allow: "join-ad-interest-group"
        }, {
            taggingId: b,
            loadTime: Ja()
        }, c)
    }
    ;var sm = function() {
        var a = !0;
        Ik(7) && Ik(9) && Ik(10) || (a = !1);
        return a
    }
      , tm = function() {
        var a = !0;
        Ik(3) && Ik(4) || (a = !1);
        return a
    };
    var xm = function(a, b) {
        var c = b.getWithConfig(O.Na)
          , d = b.getWithConfig(O.Wa)
          , e = b.getWithConfig(c);
        if (void 0 === e) {
            var f = void 0;
            um.hasOwnProperty(c) ? f = um[c] : vm.hasOwnProperty(c) && (f = vm[c]);
            1 === f && (f = wm(c));
            l(f) ? yi()(function() {
                var g = yi().getByName(a).get(f);
                d(g)
            }) : d(void 0)
        } else
            d(e);
    }
      , ym = function(a, b) {
        var c = a[O.bc]
          , d = b + "."
          , e = a[O.N] || ""
          , f = void 0 === c ? !!a.use_anchor : "fragment" === c
          , g = !!a[O.Jb];
        e = String(e).replace(/\s+/g, "").split(",");
        var k = yi();
        k(d + "require", "linker");
        k(d + "linker:autoLink", e, f, g)
    }
      , Cm = function(a, b, c) {
        if (de() && (!c.isGtmEvent || !zm[a])) {
            var d = !te(O.K)
              , e = function(f) {
                var g, k, m = yi(), n = Am(b, "", c), p, r = n.createOnlyFields._useUp;
                if (c.isGtmEvent || Bm(b, n.createOnlyFields)) {
                    var t = !0;
                    if (c.isGtmEvent) {
                        g = "gtm" + wd();
                        k = n.createOnlyFields;
                        n.gtmTrackerName && (k.name = g);
                        t = !1;
                        t = !0;
                    }
                    t && m(function() {
                        var q = m.getByName(b);
                        q && (p = q.get("clientId"));
                        c.isGtmEvent || m.remove(b)
                    });
                    m("create", a, c.isGtmEvent ? k : n.createOnlyFields);
                    d && te(O.K) && (d = !1,
                    m(function() {
                        var q = yi().getByName(c.isGtmEvent ? g : b);
                        !q || q.get("clientId") == p && r || (c.isGtmEvent ? (n.fieldsToSet["&gcu"] = "1",
                        n.fieldsToSet["&gcut"] = O.Dd[f]) : (n.fieldsToSend["&gcu"] = "1",
                        n.fieldsToSend["&gcut"] = O.Dd[f]),
                        q.set(n.fieldsToSet),
                        c.isGtmEvent ? q.send("pageview") : q.send("pageview", n.fieldsToSend))
                    }));
                    c.isGtmEvent && m(function() {
                        m.remove(g)
                    })
                }
            };
            we(function() {
                return e(O.K)
            }, O.K);
            we(function() {
                return e(O.C)
            }, O.C);
            c.isGtmEvent && (zm[a] = !0)
        }
    }
      , Dm = function(a, b) {
        dk() && b && (a[O.lb] = b)
    }
      , Mm = function(a, b, c) {
        function d() {
            var K = c.getWithConfig(O.$b);
            k(function() {
                if (!c.isGtmEvent && Hb(K)) {
                    var I = q.fieldsToSend, N = m().getByName(n), P;
                    for (P in K)
                        if (K.hasOwnProperty(P) && /^(dimension|metric)\d+$/.test(P) && void 0 != K[P]) {
                            var L = N.get(wm(K[P]));
                            Em(I, P, L)
                        }
                }
            })
        }
        function e() {
            if (q.displayfeatures) {
                var K = "_dc_gtm_" + f.replace(/[^A-Za-z0-9-]/g, "");
                p("require", "displayfeatures", void 0, {
                    cookieName: K
                })
            }
        }
        var f = a
          , g = "https://www.google-analytics.com/analytics.js"
          , k = c.isGtmEvent ? Ai(c.getWithConfig("gaFunctionName")) : Ai();
        if (sa(k)) {
            var m = yi, n;
            c.isGtmEvent ? n = c.getWithConfig("name") || c.getWithConfig("gtmTrackerName") : n = "gtag_" + f.split("-").join("_");
            var p = function(K) {
                var I = [].slice.call(arguments, 0);
                I[0] = n ? n + "." + I[0] : "" + I[0];
                k.apply(window, I)
            }
              , r = function(K) {
                var I = function(R, la) {
                    for (var va = 0; la && va < la.length; va++)
                        p(R, la[va])
                }
                  , N = c.isGtmEvent
                  , P = N ? Fm(q) : Gm(b, c);
                if (P) {
                    var L = {};
                    Dm(L, K);
                    p("require", "ec", "ec.js", L);
                    N && P.Ae && p("set", "&cu", P.Ae);
                    var T = P.action;
                    if (N || "impressions" === T)
                        if (I("ec:addImpression", P.wg),
                        !N)
                            return;
                    if ("promo_click" === T || "promo_view" === T || N && P.Bc) {
                        var ba = P.Bc;
                        I("ec:addPromo", ba);
                        if (ba && 0 < ba.length && "promo_click" === T) {
                            N ? p("ec:setAction", T, P.eb) : p("ec:setAction", T);
                            return
                        }
                        if (!N)
                            return
                    }
                    "promo_view" !== T && "impressions" !== T && (I("ec:addProduct", P.ub),
                    p("ec:setAction", T, P.eb))
                }
            }
              , t = function(K) {
                if (K) {
                    var I = {};
                    if (Hb(K))
                        for (var N in Hm)
                            Hm.hasOwnProperty(N) && Im(Hm[N], N, K[N], I);
                    Dm(I, A);
                    p("require", "linkid", I)
                }
            }
              , u = function() {
                if (ek()) {} else {
                    var K = c.getWithConfig(O.Dh);
                    K && (p("require", K, {
                        dataLayer: S.V
                    }),
                    p("require", "render"))
                }
            }
              , q = Am(n, b, c)
              , v = function(K, I, N) {
                N && (I = "" + I);
                q.fieldsToSend[K] = I
            };
            !c.isGtmEvent && Bm(n, q.createOnlyFields) && (k(function() {
                m() && m().remove(n)
            }),
            Jm[n] = !1);
            k("create", f, q.createOnlyFields);
            if (q.createOnlyFields[O.lb] && !c.isGtmEvent) {
                var y = bk(q.createOnlyFields[O.lb], "/analytics.js");
                y && (g = y)
            }
            var A = c.isGtmEvent ? q.fieldsToSet[O.lb] : q.createOnlyFields[O.lb];
            if (A) {
                var w = c.isGtmEvent ? q.fieldsToSet[O.Pc] : q.createOnlyFields[O.Pc];
                w && !Jm[n] && (Jm[n] = !0,
                k(Ei(n, w)))
            }
            c.isGtmEvent ? q.enableRecaptcha && p("require", "recaptcha", "recaptcha.js") : (d(),
            t(q.linkAttribution));
            var z = q[O.ka];
            z && z[O.N] && ym(z, n);
            p("set", q.fieldsToSet);
            if (c.isGtmEvent) {
                if (q.enableLinkId) {
                    var x = {};
                    Dm(x, A);
                    p("require", "linkid", "linkid.js", x)
                }
                de() && Cm(f, n, c)
            }
            if (b === O.Xb)
                if (c.isGtmEvent) {
                    e();
                    if (q.remarketingLists) {
                        var C = "_dc_gtm_" + f.replace(/[^A-Za-z0-9-]/g, "");
                        p("require", "adfeatures", {
                            cookieName: C
                        })
                    }
                    r(A);
                    p("send", "pageview");
                    q.createOnlyFields._useUp && Bi(n + ".")
                } else
                    u(),
                    p("send", "pageview", q.fieldsToSend);
            else
                b === O.ya ? (u(),
                ml(f, c),
                c.getWithConfig(O.ab) && (Jh(["aw", "dc"]),
                Bi(n + ".")),
                0 != q.sendPageView && p("send", "pageview", q.fieldsToSend),
                Cm(f, n, c),
                !c.isGtmEvent && 0 < jf(c).length && (fd(68),
                1 < U.configCount && fd(69))) : b === O.La ? xm(n, c) : "screen_view" === b ? p("send", "screenview", q.fieldsToSend) : "timing_complete" === b ? (q.fieldsToSend.hitType = "timing",
                v("timingCategory", q.eventCategory, !0),
                c.isGtmEvent ? v("timingVar", q.timingVar, !0) : v("timingVar", q.name, !0),
                v("timingValue", Ea(q.value)),
                void 0 !== q.eventLabel && v("timingLabel", q.eventLabel, !0),
                p("send", q.fieldsToSend)) : "exception" === b ? p("send", "exception", q.fieldsToSend) : "" === b && c.isGtmEvent || ("track_social" === b && c.isGtmEvent ? (q.fieldsToSend.hitType = "social",
                v("socialNetwork", q.socialNetwork, !0),
                v("socialAction", q.socialAction, !0),
                v("socialTarget", q.socialTarget, !0)) : ((c.isGtmEvent || Km[b]) && r(A),
                c.isGtmEvent && e(),
                q.fieldsToSend.hitType = "event",
                v("eventCategory", q.eventCategory, !0),
                v("eventAction", q.eventAction || b, !0),
                void 0 !== q.eventLabel && v("eventLabel", q.eventLabel, !0),
                void 0 !== q.value && v("eventValue", Ea(q.value))),
                p("send", q.fieldsToSend));
            var E = !1;
            var D = Lm;
            E && (D = c.getContainerTypeLoaded("UA"));
            if (!D && !c.isGtmEvent) {
                Lm = !0;
                E && c.setContainerTypeLoaded("UA", !0);
                ti();
                var G = function() {
                    E && c.setContainerTypeLoaded("UA", !1);
                    c.onFailure()
                }
                  , Q = function() {
                    m().loaded || G()
                };
                ek() ? H(Q) : ob(g, Q, G)
            }
        } else
            H(c.onFailure)
    }
      , Nm = function(a, b, c, d) {
        xe(function() {
            Mm(a, b, d)
        }, [O.K, O.C])
    }
      , Pm = function(a, b) {
        function c(f) {
            function g(p, r) {
                for (var t = 0; t < r.length; t++) {
                    var u = r[t];
                    if (f[u]) {
                        m[p] = f[u];
                        break
                    }
                }
            }
            function k() {
                if (f.category)
                    m.category = f.category;
                else {
                    for (var p = "", r = 0; r < Om.length; r++)
                        void 0 !== f[Om[r]] && (p && (p += "/"),
                        p += f[Om[r]]);
                    p && (m.category = p)
                }
            }
            var m = J(f)
              , n = !1;
            if (n || b)
                g("id", ["id", "item_id", "promotion_id"]),
                g("name", ["name", "item_name", "promotion_name"]),
                g("brand", ["brand", "item_brand"]),
                g("variant", ["variant", "item_variant"]),
                g("list", ["list_name", "item_list_name"]),
                g("position", ["list_position", "creative_slot", "index"]),
                k();
            g("listPosition", ["list_position"]);
            g("creative", ["creative_name"]);
            g("list", ["list_name"]);
            g("position", ["list_position", "creative_slot"]);
            return m
        }
        b = void 0 === b ? !1 : b;
        for (var d = [], e = 0; a && e < a.length; e++)
            a[e] && Hb(a[e]) && d.push(c(a[e]));
        return d.length ? d : void 0
    }
      , Qm = function(a) {
        return te(a)
    }
      , Rm = !1;
    var Lm, Jm = {}, zm = {}, Sm = {}, um = Object.freeze((Sm.client_storage = "storage",
    Sm.sample_rate = 1,
    Sm.site_speed_sample_rate = 1,
    Sm.store_gac = 1,
    Sm.use_amp_client_id = 1,
    Sm[O.kb] = 1,
    Sm[O.oa] = "storeGac",
    Sm[O.ja] = 1,
    Sm[O.qa] = 1,
    Sm[O.Fa] = 1,
    Sm[O.Eb] = 1,
    Sm[O.Va] = 1,
    Sm[O.Fb] = 1,
    Sm)), Tm = {}, Um = Object.freeze((Tm._cs = 1,
    Tm._useUp = 1,
    Tm.allowAnchor = 1,
    Tm.allowLinker = 1,
    Tm.alwaysSendReferrer = 1,
    Tm.clientId = 1,
    Tm.cookieDomain = 1,
    Tm.cookieExpires = 1,
    Tm.cookieFlags = 1,
    Tm.cookieName = 1,
    Tm.cookiePath = 1,
    Tm.cookieUpdate = 1,
    Tm.legacyCookieDomain = 1,
    Tm.legacyHistoryImport = 1,
    Tm.name = 1,
    Tm.sampleRate = 1,
    Tm.siteSpeedSampleRate = 1,
    Tm.storage = 1,
    Tm.storeGac = 1,
    Tm.useAmpClientId = 1,
    Tm._cd2l = 1,
    Tm)), Vm = Object.freeze({
        anonymize_ip: 1
    }), Wm = {}, vm = Object.freeze((Wm.campaign = {
        content: "campaignContent",
        id: "campaignId",
        medium: "campaignMedium",
        name: "campaignName",
        source: "campaignSource",
        term: "campaignKeyword"
    },
    Wm.app_id = 1,
    Wm.app_installer_id = 1,
    Wm.app_name = 1,
    Wm.app_version = 1,
    Wm.description = "exDescription",
    Wm.fatal = "exFatal",
    Wm.language = 1,
    Wm.page_hostname = "hostname",
    Wm.transport_type = "transport",
    Wm[O.fa] = "currencyCode",
    Wm[O.Bf] = 1,
    Wm[O.Za] = "location",
    Wm[O.ce] = "page",
    Wm[O.Oa] = "referrer",
    Wm[O.cc] = "title",
    Wm[O.If] = 1,
    Wm[O.cb] = 1,
    Wm)), Xm = {}, Ym = Object.freeze((Xm.content_id = 1,
    Xm.event_action = 1,
    Xm.event_category = 1,
    Xm.event_label = 1,
    Xm.link_attribution = 1,
    Xm.name = 1,
    Xm[O.ka] = 1,
    Xm[O.Af] = 1,
    Xm[O.la] = 1,
    Xm[O.ia] = 1,
    Xm)), Zm = Object.freeze({
        displayfeatures: 1,
        enableLinkId: 1,
        enableRecaptcha: 1,
        eventAction: 1,
        eventCategory: 1,
        eventLabel: 1,
        gaFunctionName: 1,
        gtmEcommerceData: 1,
        gtmTrackerName: 1,
        linker: 1,
        remarketingLists: 1,
        socialAction: 1,
        socialNetwork: 1,
        socialTarget: 1,
        timingVar: 1,
        value: 1
    }), Om = Object.freeze(["item_category", "item_category2", "item_category3", "item_category4", "item_category5"]), $m = {}, Hm = Object.freeze(($m.levels = 1,
    $m[O.qa] = "duration",
    $m[O.Eb] = 1,
    $m)), an = {}, bn = Object.freeze((an.anonymize_ip = 1,
    an.fatal = 1,
    an.send_page_view = 1,
    an.store_gac = 1,
    an.use_amp_client_id = 1,
    an[O.oa] = 1,
    an[O.Bf] = 1,
    an)), Im = function(a, b, c, d) {
        if (void 0 !== c)
            if (bn[b] && (c = Fa(c)),
            "anonymize_ip" !== b || c || (c = void 0),
            1 === a)
                d[wm(b)] = c;
            else if (l(a))
                d[a] = c;
            else
                for (var e in a)
                    a.hasOwnProperty(e) && void 0 !== c[e] && (d[a[e]] = c[e])
    }, wm = function(a) {
        return a && l(a) ? a.replace(/(_[a-z])/g, function(b) {
            return b[1].toUpperCase()
        }) : a
    }, cn = {}, Km = Object.freeze((cn.checkout_progress = 1,
    cn.select_content = 1,
    cn.set_checkout_option = 1,
    cn[O.Ab] = 1,
    cn[O.Bb] = 1,
    cn[O.ib] = 1,
    cn[O.jb] = 1,
    cn[O.Cb] = 1,
    cn[O.wa] = 1,
    cn[O.Db] = 1,
    cn[O.xa] = 1,
    cn)), dn = {}, en = Object.freeze((dn.checkout_progress = 1,
    dn.set_checkout_option = 1,
    dn[O.kf] = 1,
    dn[O.Ab] = 1,
    dn[O.Bb] = 1,
    dn[O.ib] = 1,
    dn[O.wa] = 1,
    dn[O.Db] = 1,
    dn[O.lf] = 1,
    dn)), fn = {}, gn = Object.freeze((fn.generate_lead = 1,
    fn.login = 1,
    fn.search = 1,
    fn.select_content = 1,
    fn.share = 1,
    fn.sign_up = 1,
    fn.view_search_results = 1,
    fn[O.jb] = 1,
    fn[O.Cb] = 1,
    fn[O.xa] = 1,
    fn)), hn = function(a) {
        var b = "general";
        en[a] ? b = "ecommerce" : gn[a] ? b = "engagement" : "exception" === a && (b = "error");
        return b
    }, jn = {}, kn = Object.freeze((jn.view_search_results = 1,
    jn[O.jb] = 1,
    jn[O.Cb] = 1,
    jn[O.xa] = 1,
    jn)), Em = function(a, b, c) {
        a.hasOwnProperty(b) || (a[b] = c)
    }, ln = function(a) {
        if (ua(a)) {
            for (var b = [], c = 0; c < a.length; c++) {
                var d = a[c];
                if (void 0 != d) {
                    var e = d.id
                      , f = d.variant;
                    void 0 != e && void 0 != f && b.push(String(e) + "." + String(f))
                }
            }
            return 0 < b.length ? b.join("!") : void 0
        }
    }, Am = function(a, b, c) {
        var d = function(Q) {
            return c.getWithConfig(Q)
        }
          , e = {}
          , f = {}
          , g = {}
          , k = {}
          , m = ln(d(O.Ch));
        !c.isGtmEvent && m && Em(f, "exp", m);
        g["&gtm"] = ik(!0);
        de() && (k._cs = Qm);
        var n = d(O.$b);
        if (!c.isGtmEvent && Hb(n))
            for (var p in n)
                if (n.hasOwnProperty(p) && /^(dimension|metric)\d+$/.test(p) && void 0 != n[p]) {
                    var r = d(String(n[p]));
                    void 0 !== r && Em(f, p, r)
                }
        for (var t = ff(c), u = 0; u < t.length; ++u) {
            var q = t[u];
            if (c.isGtmEvent) {
                var v = d(q);
                Zm.hasOwnProperty(q) ? e[q] = v : Um.hasOwnProperty(q) ? k[q] = v : g[q] = v
            } else {
                var y = void 0;
                y = q !== O.W ? d(q) : gf(c, q);
                if (Ym.hasOwnProperty(q))
                    Im(Ym[q], q, y, e);
                else if (Vm.hasOwnProperty(q))
                    Im(Vm[q], q, y, g);
                else if (vm.hasOwnProperty(q))
                    Im(vm[q], q, y, f);
                else if (um.hasOwnProperty(q))
                    Im(um[q], q, y, k);
                else if (/^(dimension|metric|content_group)\d+$/.test(q))
                    Im(1, q, y, f);
                else if (q === O.W) {
                    if (!Rm) {
                        var A = Sa(y);
                        A && (f["&did"] = A)
                    }
                    var w = void 0
                      , z = void 0;
                    b === O.ya ? w = Sa(gf(c, q), ".") : (w = Sa(gf(c, q, 1), "."),
                    z = Sa(gf(c, q, 2), "."));
                    w && (f["&gdid"] = w);
                    z && (f["&edid"] = z)
                } else
                    q === O.za && 0 > t.indexOf(O.Eb) && (k.cookieName = y + "_ga")
            }
        }
        !1 !== d(O.sh) && !1 !== d(O.Yb) && sm() || (g.allowAdFeatures = !1);
        !1 !== d(O.U) && tm() || (g.allowAdPersonalizationSignals = !1);
        !c.isGtmEvent && d(O.ab) && (k._useUp = !0);
        if (c.isGtmEvent) {
            k.name = k.name || e.gtmTrackerName;
            var x = g.hitCallback;
            g.hitCallback = function() {
                sa(x) && x();
                c.onSuccess()
            }
        } else {
            Em(k, "cookieDomain", "auto");
            Em(g, "forceSSL", !0);
            Em(e, "eventCategory", hn(b));
            kn[b] && Em(f, "nonInteraction", !0);
            "login" === b || "sign_up" === b || "share" === b ? Em(e, "eventLabel", d(O.Af)) : "search" === b || "view_search_results" === b ? Em(e, "eventLabel", d(O.Hh)) : "select_content" === b && Em(e, "eventLabel", d(O.wh));
            var C = e[O.ka] || {}
              , E = C[O.Ib];
            E || 0 != E && C[O.N] ? k.allowLinker = !0 : !1 === E && Em(k, "useAmpClientId", !1);
            f.hitCallback = c.onSuccess;
            k.name = a
        }
        de() && (g["&gcs"] = ue(),
        te(O.K) || (k.storage = "none"),
        te(O.C) || (g.allowAdFeatures = !1,
        k.storeGac = !1));
        var D = d(O.ra) || d(O.lb)
          , G = d(O.Pc);
        D && (c.isGtmEvent || (k[O.lb] = D),
        k._cd2l = !0);
        G && !c.isGtmEvent && (k[O.Pc] = G);
        e.fieldsToSend = f;
        e.fieldsToSet = g;
        e.createOnlyFields = k;
        return e
    }, Fm = function(a) {
        var b = a.gtmEcommerceData;
        if (!b)
            return null;
        var c = {};
        b.currencyCode && (c.Ae = b.currencyCode);
        if (b.impressions) {
            c.action = "impressions";
            var d = b.impressions;
            c.wg = "impressions" === b.translateIfKeyEquals ? Pm(d, !0) : d
        }
        if (b.promoView) {
            c.action = "promo_view";
            var e = b.promoView.promotions;
            c.Bc = "promoView" === b.translateIfKeyEquals ? Pm(e, !0) : e
        }
        if (b.promoClick) {
            c.action = "promo_click";
            var f = b.promoClick.promotions;
            c.Bc = "promoClick" === b.translateIfKeyEquals ? Pm(f, !0) : f;
            c.eb = b.promoClick.actionField;
            return c
        }
        for (var g in b)
            if (b.hasOwnProperty(g) && "translateIfKeyEquals" !== g && "impressions" !== g && "promoView" !== g && "promoClick" !== g && "currencyCode" !== g) {
                c.action = g;
                var k = b[g].products;
                c.ub = "products" === b.translateIfKeyEquals ? Pm(k, !0) : k;
                c.eb = b[g].actionField;
                break
            }
        return Object.keys(c).length ? c : null
    }, Gm = function(a, b) {
        function c(u) {
            return {
                id: d(O.$a),
                affiliation: d(O.zh),
                revenue: d(O.ia),
                tax: d(O.xf),
                shipping: d(O.Td),
                coupon: d(O.Ah),
                list: d(O.Sd) || u
            }
        }
        for (var d = function(u) {
            return b.getWithConfig(u)
        }, e = d(O.aa), f, g = 0; e && g < e.length && !(f = e[g][O.Sd]); g++)
            ;
        var k = d(O.$b);
        if (Hb(k))
            for (var m = 0; e && m < e.length; ++m) {
                var n = e[m], p;
                for (p in k)
                    k.hasOwnProperty(p) && /^(dimension|metric)\d+$/.test(p) && void 0 != k[p] && Em(n, p, n[k[p]])
            }
        var r = null
          , t = d(O.Bh);
        a === O.wa || a === O.Db ? r = {
            action: a,
            eb: c(),
            ub: Pm(e)
        } : a === O.Ab ? r = {
            action: "add",
            ub: Pm(e)
        } : a === O.Bb ? r = {
            action: "remove",
            ub: Pm(e)
        } : a === O.xa ? r = {
            action: "detail",
            eb: c(f),
            ub: Pm(e)
        } : a === O.jb ? r = {
            action: "impressions",
            wg: Pm(e)
        } : "view_promotion" === a ? r = {
            action: "promo_view",
            Bc: Pm(t)
        } : "select_content" === a && t && 0 < t.length ? r = {
            action: "promo_click",
            Bc: Pm(t)
        } : "select_content" === a ? r = {
            action: "click",
            eb: {
                list: d(O.Sd) || f
            },
            ub: Pm(e)
        } : a === O.ib || "checkout_progress" === a ? r = {
            action: "checkout",
            ub: Pm(e),
            eb: {
                step: a === O.ib ? 1 : d(O.wf),
                option: d(O.vf)
            }
        } : "set_checkout_option" === a && (r = {
            action: "checkout_option",
            eb: {
                step: d(O.wf),
                option: d(O.vf)
            }
        });
        r && (r.Ae = d(O.fa));
        return r
    }, mn = {}, Bm = function(a, b) {
        var c = mn[a];
        mn[a] = J(b);
        if (!c)
            return !1;
        for (var d in b)
            if (b.hasOwnProperty(d) && b[d] !== c[d])
                return !0;
        for (var e in c)
            if (c.hasOwnProperty(e) && c[e] !== b[e])
                return !0;
        return !1
    };
    function nn() {
        return U.gcq = U.gcq || new on
    }
    var pn = function(a, b, c) {
        nn().register(a, b, c)
    }
      , qn = function(a, b, c, d) {
        nn().push("event", [b, a], c, d)
    }
      , rn = function(a, b) {
        nn().push("config", [a], b)
    }
      , sn = function(a, b, c, d) {
        nn().push("get", [a, b], c, d)
    }
      , tn = {}
      , un = function() {
        this.status = 1;
        this.containerConfig = {};
        this.targetConfig = {};
        this.remoteConfig = {};
        this.o = {};
        this.s = null;
        this.m = !1
    }
      , vn = function(a, b, c, d, e) {
        this.type = a;
        this.s = b;
        this.R = c || "";
        this.m = d;
        this.o = e
    }
      , on = function() {
        this.o = {};
        this.s = {};
        this.m = [];
        this.D = {
            AW: !1,
            UA: !1
        }
    }
      , wn = function(a, b) {
        var c = Yk(b);
        return a.o[c.containerId] = a.o[c.containerId] || new un
    }
      , xn = function(a, b, c) {
        if (b) {
            var d = Yk(b);
            if (d && 1 === wn(a, b).status) {
                wn(a, b).status = 2;
                var e = {};
                wj && (e.timeoutId = B.setTimeout(function() {
                    fd(38);
                    cj()
                }, 3E3));
                a.push("require", [e], d.containerId);
                tn[d.containerId] = Ja();
                if (ek()) {} else {
                    var g = "/gtag/js?id=" + encodeURIComponent(d.containerId) + "&l=" + S.V + "&cx=c";
                    dk() && (g += "&sign=" + S.dd);
                    var k = ("http:" != B.location.protocol ? "https:" : "http:") + ("//www.googletagmanager.com" + g)
                      , m = bk(c, g) || k;
                    ob(m)
                }
            }
        }
    }
      , yn = function(a, b, c, d) {
        if (d.R) {
            var e = wn(a, d.R)
              , f = e.s;
            if (f) {
                var g = J(c)
                  , k = J(e.targetConfig[d.R])
                  , m = J(e.containerConfig)
                  , n = J(e.remoteConfig)
                  , p = J(a.s)
                  , r = Cd("gtm.uniqueEventId")
                  , t = Yk(d.R).prefix
                  , u = Ma(function() {
                    var v = g[O.Hb];
                    v && H(v)
                })
                  , q = df(cf(ef(bf($e(af(Ze(Ye(Xe(g), k), m), n), p), function() {
                    Jj(r, t, "2");
                    u()
                }), function() {
                    Jj(r, t, "3");
                    u()
                }), function(v, y) {
                    a.D[v] = y
                }), function(v) {
                    return a.D[v]
                });
                try {
                    Jj(r, t, "1");
                    f(d.R, b, d.s, q)
                } catch (v) {
                    Jj(r, t, "4");
                }
            }
        }
    };
    on.prototype.register = function(a, b, c) {
        var d = wn(this, a);
        if (3 !== d.status) {
            d.s = b;
            d.status = 3;
            c && (J(d.remoteConfig, c),
            d.remoteConfig = c);
            var e = Yk(a)
              , f = tn[e.containerId];
            if (void 0 !== f) {
                var g = U[e.containerId].bootstrap
                  , k = e.prefix.toUpperCase();
                U[e.containerId]._spx && (k = k.toLowerCase());
                var m = Cd("gtm.uniqueEventId")
                  , n = k
                  , p = Ja() - g;
                if (wj && !hj[m]) {
                    m !== dj && (Zi(),
                    dj = m);
                    var r = n + "." + Math.floor(g - f) + "." + Math.floor(p);
                    lj = lj ? lj + "," + r : "&cl=" + r
                }
                delete tn[e.containerId]
            }
            this.flush()
        }
    }
    ;
    on.prototype.push = function(a, b, c, d) {
        var e = Math.floor(Ja() / 1E3);
        xn(this, c, b[0][O.ra] || this.s[O.ra]);
        c && wn(this, c).m && (d = !1);
        this.m.push(new vn(a,e,c,b,d));
        d || this.flush()
    }
    ;
    on.prototype.insert = function(a, b, c) {
        var d = Math.floor(Ja() / 1E3);
        0 < this.m.length ? this.m.splice(1, 0, new vn(a,d,c,b,!1)) : this.m.push(new vn(a,d,c,b,!1))
    }
    ;
    on.prototype.flush = function(a) {
        for (var b = this, c = [], d = !1, e = {}; this.m.length; ) {
            var f = this.m[0];
            if (f.o)
                !f.R || wn(this, f.R).m ? (f.o = !1,
                this.m.push(f)) : c.push(f),
                this.m.shift();
            else {
                switch (f.type) {
                case "require":
                    if (3 !== wn(this, f.R).status && !a) {
                        this.m.push.apply(this.m, c);
                        return
                    }
                    wj && B.clearTimeout(f.m[0].timeoutId);
                    break;
                case "set":
                    Ba(f.m[0], function(t, u) {
                        J(Qa(t, u), b.s)
                    });
                    break;
                case "config":
                    e.Ka = {};
                    Ba(f.m[0], function(t) {
                        return function(u, q) {
                            J(Qa(u, q), t.Ka)
                        }
                    }(e));
                    var g = !!e.Ka[O.Uc];
                    delete e.Ka[O.Uc];
                    var k = wn(this, f.R)
                      , m = Yk(f.R)
                      , n = m.containerId === m.id;
                    g || (n ? k.containerConfig = {} : k.targetConfig[f.R] = {});
                    k.m && g || yn(this, O.ya, e.Ka, f);
                    k.m = !0;
                    delete e.Ka[O.Kb];
                    n ? J(e.Ka, k.containerConfig) : J(e.Ka, k.targetConfig[f.R]);
                    d = !0;
                    break;
                case "event":
                    e.Gc = {};
                    Ba(f.m[0], function(t) {
                        return function(u, q) {
                            J(Qa(u, q), t.Gc)
                        }
                    }(e));
                    yn(this, f.m[1], e.Gc, f);
                    break;
                case "get":
                    var p = {}
                      , r = (p[O.Na] = f.m[0],
                    p[O.Wa] = f.m[1],
                    p);
                    yn(this, O.La, r, f)
                }
                this.m.shift();
                zn(this, f)
            }
            e = {
                Ka: e.Ka,
                Gc: e.Gc
            }
        }
        this.m.push.apply(this.m, c);
        d && this.flush()
    }
    ;
    var zn = function(a, b) {
        if ("require" !== b.type)
            if (b.R)
                for (var c = a.getCommandListeners(b.R)[b.type] || [], d = 0; d < c.length; d++)
                    c[d]();
            else
                for (var e in a.o)
                    if (a.o.hasOwnProperty(e)) {
                        var f = a.o[e];
                        if (f && f.o)
                            for (var g = f.o[b.type] || [], k = 0; k < g.length; k++)
                                g[k]()
                    }
    };
    on.prototype.getRemoteConfig = function(a) {
        return wn(this, a).remoteConfig
    }
    ;
    on.prototype.getCommandListeners = function(a) {
        return wn(this, a).o
    }
    ;
    var An = {}
      , Bn = function(a, b) {
        b = b.toString().split(",");
        for (var c = 0; c < b.length; c++) {
            var d = An[b[c]] || [];
            An[b[c]] = d;
            0 > d.indexOf(a) && d.push(a)
        }
    }
      , Cn = function(a) {
        Ba(An, function(b, c) {
            var d = c.indexOf(a);
            0 <= d && c.splice(d, 1)
        })
    };
    var Dn = "HA GF G UA AW DC".split(" ")
      , En = !1
      , Fn = !1
      , Gn = 0;
    function Hn(a, b) {
        var c = {
            event: a
        };
        b && (c.eventModel = J(b),
        b[O.Hb] && (c.eventCallback = b[O.Hb]),
        b[O.Oc] && (c.eventTimeout = b[O.Oc]));
        return c
    }
    function In(a) {
        a.hasOwnProperty("gtm.uniqueEventId") || Object.defineProperty(a, "gtm.uniqueEventId", {
            value: wd()
        });
        return a["gtm.uniqueEventId"]
    }
    function Jn() {
        if (!En && !U.gtagRegistered) {
            En = U.gtagRegistered = !0;
            U.addTargetToGroup = function(c) {
                Bn(c, "default")
            }
            ;
            var a = U.pendingDefaultTargets;
            delete U.pendingDefaultTargets;
            if (ua(a))
                for (var b = 0; b < a.length; ++b)
                    Bn(a[b], "default")
        }
        return En
    }
    var Kn = {
        config: function(a) {
            var b, c = In(a);
            if (2 > a.length || !l(a[1]))
                return;
            var d = {};
            if (2 < a.length) {
                if (void 0 != a[2] && !Hb(a[2]) || 3 < a.length)
                    return;
                d = a[2]
            }
            var e = Yk(a[1]);
            if (!e)
                return;
            Cn(e.id);
            Bn(e.id, d[O.Yd] || "default");
            delete d[O.Yd];
            Fn || fd(43);
            if (Jn() && -1 !== Dn.indexOf(e.prefix)) {
                "G" === e.prefix && (d[O.Kb] = !0);
                delete d[O.Hb];
                e.id === e.containerId && (U.configCount = ++Gn);
                rn(d, e.id);
                return
            }
            Fd("gtag.targets." + e.id, void 0);
            Fd("gtag.targets." + e.id, J(d));
            var f = {};
            f[O.nb] = e.id;
            b = Hn(O.ya, f);
            b["gtm.uniqueEventId"] = c;
            return b
        },
        consent: function(a) {
            if (3 === a.length) {
                fd(39);
                var b = wd()
                  , c = a[1];
                "default" === c ? ne(a[2]) : "update" === c && se(a[2], b)
            }
        },
        event: function(a) {
            var b = a[1];
            if (!(2 > a.length) && l(b)) {
                var c;
                if (2 < a.length) {
                    if (!Hb(a[2]) && void 0 != a[2] || 3 < a.length)
                        return;
                    c = a[2]
                }
                var d = Hn(b, c)
                  , e = In(a);
                d["gtm.uniqueEventId"] = e;
                if ("optimize.callback" === b)
                    return d.eventModel = d.eventModel || {},
                    d;
                var f;
                var g = c && c[O.nb];
                void 0 === g && (g = Cd(O.nb, 2),
                void 0 === g && (g = "default"));
                if (l(g) || ua(g)) {
                    for (var k = g.toString().replace(/\s+/g, "").split(","), m = [], n = 0; n < k.length; n++)
                        if (0 <= k[n].indexOf("-"))
                            m.push(k[n]);
                        else {
                            var p = An[k[n]];
                            p && p.length && (m = m.concat(p))
                        }
                    f = $k(m)
                } else
                    f = void 0;
                var r = f;
                if (!r)
                    return;
                for (var t = Jn(), u = [], q = 0; t && q < r.length; q++) {
                    var v = r[q];
                    if (-1 !== Dn.indexOf(v.prefix)) {
                        var y = J(c);
                        "G" === v.prefix && (y[O.Kb] = !0);
                        delete y[O.Hb];
                        qn(b, y, v.id)
                    }
                    u.push(v.id)
                }
                d.eventModel = d.eventModel || {};
                0 < r.length ? d.eventModel[O.nb] = u.join() : delete d.eventModel[O.nb];
                Fn || fd(43);
                return d
            }
        },
        get: function(a) {
            fd(53);
            if (4 !== a.length || !l(a[1]) || !l(a[2]) || !sa(a[3]))
                return;
            var b = Yk(a[1])
              , c = String(a[2])
              , d = a[3];
            if (!b)
                return;
            Fn || fd(43);
            if (!Jn() || -1 === Dn.indexOf(b.prefix))
                return;
            wd();
            var e = {};
            je(J((e[O.Na] = c,
            e[O.Wa] = d,
            e)));
            sn(c, function(f) {
                H(function() {
                    return d(f)
                })
            }, b.id);
        },
        js: function(a) {
            if (2 == a.length && a[1].getTime) {
                Fn = !0;
                Jn();
                var b = {};
                return b.event = "gtm.js",
                b["gtm.start"] = a[1].getTime(),
                b["gtm.uniqueEventId"] = In(a),
                b
            }
        },
        policy: function() {},
        set: function(a) {
            var b;
            2 == a.length && Hb(a[1]) ? b = J(a[1]) : 3 == a.length && l(a[1]) && (b = {},
            Hb(a[2]) || ua(a[2]) ? b[a[1]] = J(a[2]) : b[a[1]] = a[2]);
            if (b) {
                if (wd(),
                J(b),
                Jn()) {
                    var c = J(b);
                    nn().push("set", [c])
                }
                b._clear = !0;
                return b
            }
        }
    }
      , Ln = {
        policy: !0
    };
    var Mn = function() {
        this.m = [];
        this.o = []
    };
    Mn.prototype.push = function(a, b, c) {
        var d = {
            debugContext: c,
            message: a,
            notBeforeEventId: b,
            priorityId: this.m.length + 1
        };
        this.m.push(d);
        for (var e = 0; e < this.o.length; e++)
            try {
                this.o[e](d)
            } catch (f) {}
    }
    ;
    Mn.prototype.zg = function(a) {
        this.o.push(a)
    }
    ;
    Mn.prototype.get = function() {
        for (var a = {}, b = 0; b < this.m.length; b++) {
            var c = this.m[b]
              , d = a[c.notBeforeEventId];
            d || (d = [],
            a[c.notBeforeEventId] = d);
            d.push(c)
        }
        return a
    }
    ;
    Mn.prototype.get = Mn.prototype.get;
    Mn.prototype.listen = Mn.prototype.zg;
    Mn.prototype.push = Mn.prototype.push;
    function Nn(a, b) {
        return a.notBeforeEventId - b.notBeforeEventId || a.priorityId - b.priorityId
    }
    ;var On = function(a) {
        var b = B[S.V].hide;
        if (b && void 0 !== b[a] && b.end) {
            b[a] = !1;
            var c = !0, d;
            for (d in b)
                if (b.hasOwnProperty(d) && !0 === b[d]) {
                    c = !1;
                    break
                }
            c && (b.end(),
            b.end = null)
        }
    }
      , Pn = function(a) {
        var b = B[S.V]
          , c = b && b.hide;
        c && c.end && (c[a] = !0)
    };
    var Vn = !1
      , Wn = [];
    function Xn() {
        if (!Vn) {
            Vn = !0;
            for (var a = 0; a < Wn.length; a++)
                H(Wn[a])
        }
    }
    var Yn = function(a) {
        Vn ? H(a) : Wn.push(a)
    };
    var po = function(a) {
        if (oo(a))
            return a;
        this.m = a
    };
    po.prototype.Ei = function() {
        return this.m
    }
    ;
    po.prototype.Di = function() {
        return this.m
    }
    ;
    var oo = function(a) {
        return !a || "object" !== Fb(a) || Hb(a) ? !1 : "getUntrustedMessageValue"in a || "getUntrustedUpdateValue"in a
    };
    po.prototype.getUntrustedMessageValue = po.prototype.Di;
    po.prototype.getUntrustedUpdateValue = po.prototype.Ei;
    var qo = 0, ro, so = {}, to = [], uo = [], vo = !1, wo = !1, xo = function(a) {
        return B[S.V].push(a)
    }, yo = function(a, b) {
        var c = U[S.V]
          , d = c ? c.subscribers : 1
          , e = 0
          , f = !1
          , g = void 0;
        b && (g = B.setTimeout(function() {
            f || (f = !0,
            a());
            g = void 0
        }, b));
        return function() {
            ++e === d && (g && (B.clearTimeout(g),
            g = void 0),
            f || (a(),
            f = !0))
        }
    };
    function zo(a) {
        var b = a._clear;
        Ba(a, function(d, e) {
            "_clear" !== d && (b && Fd(d, void 0),
            Fd(d, e))
        });
        od || (od = a["gtm.start"]);
        var c = a["gtm.uniqueEventId"];
        if (!a.event)
            return !1;
        c || (c = wd(),
        a["gtm.uniqueEventId"] = c,
        Fd("gtm.uniqueEventId", c));
        return Zj(a)
    }
    function Ao(a) {
        if (null == a || "object" !== typeof a)
            return !1;
        if (a.event)
            return !0;
        if (Ca(a)) {
            var b = a[0];
            if ("config" === b || "event" === b || "js" === b)
                return !0
        }
        return !1
    }
    function Bo() {
        for (var a = !1; !wo && (0 < to.length || 0 < uo.length); ) {
            if (!vo && Ao(to[0])) {
                var b = {}
                  , c = (b.event = "gtm.init_consent",
                b)
                  , d = {}
                  , e = (d.event = "gtm.init",
                d)
                  , f = to[0]["gtm.uniqueEventId"];
                f && (c["gtm.uniqueEventId"] = f - 2,
                e["gtm.uniqueEventId"] = f - 1);
                to.unshift(c, e);
                vo = !0
            }
            wo = !0;
            delete zd.eventModel;
            Bd();
            var g = null
              , k = void 0;
            null == g && (g = to.shift());
            if (null != g) {
                var n = oo(g);
                if (n) {
                    var p = g;
                    g = oo(p) ? "getUntrustedMessageValue"in p ? p.getUntrustedMessageValue() : p.getUntrustedUpdateValue() : void 0;
                    for (var r = ["gtm.allowlist", "gtm.blocklist", "gtm.whitelist", "gtm.blacklist", "tagTypeBlacklist"], t = 0; t < r.length; t++) {
                        var u = r[t]
                          , q = Cd(u, 1);
                        if (ua(q) || Hb(q))
                            q = J(q);
                        Ad[u] = q
                    }
                }
                try {
                    if (sa(g))
                        try {
                            g.call(Dd)
                        } catch (G) {}
                    else if (ua(g)) {
                        var v = g;
                        if (l(v[0])) {
                            var y = v[0].split(".")
                              , A = y.pop()
                              , w = v.slice(1)
                              , z = Cd(y.join("."), 2);
                            if (null != z)
                                try {
                                    z[A].apply(z, w)
                                } catch (G) {}
                        }
                    } else {
                        if (Ca(g)) {
                            a: {
                                var x = g
                                  , C = k;
                                if (x.length && l(x[0])) {
                                    var E = Kn[x[0]];
                                    if (E && (!n || !Ln[x[0]])) {
                                        g = E(x, C);
                                        break a
                                    }
                                }
                                g = void 0
                            }
                            if (!g) {
                                wo = !1;
                                continue
                            }
                        }
                        a = zo(g) || a;
                    }
                } finally {
                    n && Bd(!0)
                }
            }
            wo = !1
        }
        return !a
    }
    function Do() {
        var b = Bo();
        try {
            On(S.H)
        } catch (c) {}
        return b
    }
    var Go = function() {
        var a = jb(S.V, [])
          , b = jb("google_tag_manager", {});
        b = b[S.V] = b[S.V] || {};
        li(function() {
            b.gtmDom || (b.gtmDom = !0,
            a.push({
                event: "gtm.dom"
            }))
        });
        Yn(function() {
            b.gtmLoad || (b.gtmLoad = !0,
            a.push({
                event: "gtm.load"
            }))
        });
        b.subscribers = (b.subscribers || 0) + 1;
        var c = a.push;
        a.push = function() {
            var e;
            if (0 < U.SANDBOXED_JS_SEMAPHORE) {
                e = [];
                for (var f = 0; f < arguments.length; f++)
                    e[f] = new po(arguments[f])
            } else
                e = [].slice.call(arguments, 0);
            to.push.apply(to, e);
            var g = c.apply(a, e);
            if (300 < this.length)
                for (fd(4); 300 < this.length; )
                    this.shift();
            var k = "boolean" !== typeof g || g;
            return Bo() && k
        }
        ;
        var d = a.slice(0);
        to.push.apply(to, d);
        if (Eo()) {
            H(Do)
        }
    };
    var Eo = function() {
        var a = !0;
        return a
    };
    function Ho(a) {
        if (null == a || 0 === a.length)
            return !1;
        var b = Number(a)
          , c = Ja();
        return b < c + 3E5 && b > c - 9E5
    }
    ;var Io = function(a) {
        U.addTargetToGroup ? U.addTargetToGroup(a) : (U.pendingDefaultTargets = U.pendingDefaultTargets || [],
        U.pendingDefaultTargets.push(a))
    };
    var Jo = {
        Fg: "UA-49392197-1"
    };
    var Ko = {};
    Ko.Yc = new String("undefined");
    var kp = B.clearTimeout
      , lp = B.setTimeout
      , W = function(a, b, c, d) {
        if (ek()) {
            b && H(b)
        } else
            return ob(a, b, c, d)
    }
      , mp = function() {
        return new Date
    }
      , np = function() {
        return B.location.href
    }
      , op = function(a) {
        return Af(Cf(a), "fragment")
    }
      , pp = function(a) {
        return Bf(Cf(a))
    }
      , qp = function(a, b) {
        return Cd(a, b || 2)
    }
      , rp = function(a, b, c) {
        var d;
        b ? (a.eventCallback = b,
        c && (a.eventTimeout = c),
        d = xo(a)) : d = xo(a);
        return d
    }
      , sp = function(a, b) {
        B[a] = b
    }
      , X = function(a, b, c) {
        b && (void 0 === B[a] || c && !B[a]) && (B[a] = b);
        return B[a]
    }
      , tp = function(a, b, c) {
        return hg(a, b, void 0 === c ? !0 : !!c)
    }
      , up = function(a, b, c) {
        return 0 === qg(a, b, c)
    }
      , vp = function(a, b) {
        if (ek()) {
            b && H(b)
        } else
            rb(a, b)
    }
      , wp = function(a) {
        return !!Ro(a, "init", !1)
    }
      , xp = function(a) {
        Po(a, "init", !0)
    }
      , yp = function(a) {
        var b = ld
          , c = "?id=" + encodeURIComponent(a) + "&l=" + S.V;
        dk() && (c += "&sign=" + S.dd,
        ib && (b = ib.replace(/^(?:https?:\/\/)?/i, "").split(/[?#]/)[0]));
        var d = bl("https://", "http://", b + c);
        W(d)
    }
      , zp = function(a, b, c) {
        wj && (Ib(a) || Kj(c, b, a))
    };
    var Xp = ["matches", "webkitMatchesSelector", "mozMatchesSelector", "msMatchesSelector", "oMatchesSelector"];
    function Yp(a, b) {
        a = String(a);
        b = String(b);
        var c = a.length - b.length;
        return 0 <= c && a.indexOf(b, c) === c
    }
    var Zp = new za;
    function $p(a, b, c) {
        var d = c ? "i" : void 0;
        try {
            var e = String(b) + d
              , f = Zp.get(e);
            f || (f = new RegExp(b,d),
            Zp.set(e, f));
            return f.test(a)
        } catch (g) {
            return !1
        }
    }
    function aq(a, b) {
        function c(g) {
            var k = Cf(g)
              , m = Af(k, "protocol")
              , n = Af(k, "host", !0)
              , p = Af(k, "port")
              , r = Af(k, "path").toLowerCase().replace(/\/$/, "");
            if (void 0 === m || "http" === m && "80" === p || "https" === m && "443" === p)
                m = "web",
                p = "default";
            return [m, n, p, r]
        }
        for (var d = c(String(a)), e = c(String(b)), f = 0; f < d.length; f++)
            if (d[f] !== e[f])
                return !1;
        return !0
    }
    function bq(a) {
        return cq(a) ? 1 : 0
    }
    function cq(a) {
        var b = a.arg0
          , c = a.arg1;
        if (a.any_of && Array.isArray(c)) {
            for (var d = 0; d < c.length; d++) {
                var e = J(a, {});
                J({
                    arg1: c[d],
                    any_of: void 0
                }, e);
                if (bq(e))
                    return !0
            }
            return !1
        }
        switch (a["function"]) {
        case "_cn":
            return 0 <= String(b).indexOf(String(c));
        case "_css":
            var f;
            a: {
                if (b)
                    try {
                        for (var g = 0; g < Xp.length; g++) {
                            var k = Xp[g];
                            if (b[k]) {
                                f = b[k](c);
                                break a
                            }
                        }
                    } catch (m) {}
                f = !1
            }
            return f;
        case "_ew":
            return Yp(b, c);
        case "_eq":
            return String(b) === String(c);
        case "_ge":
            return Number(b) >= Number(c);
        case "_gt":
            return Number(b) > Number(c);
        case "_lc":
            return 0 <= String(b).split(",").indexOf(String(c));
        case "_le":
            return Number(b) <= Number(c);
        case "_lt":
            return Number(b) < Number(c);
        case "_re":
            return $p(b, c, a.ignore_case);
        case "_sw":
            return 0 === String(b).indexOf(String(c));
        case "_um":
            return aq(b, c)
        }
        return !1
    }
    ;Object.freeze({
        dl: 1,
        id: 1
    });
    var hq = function(a, b, c) {
        this.o = a;
        this.eventName = b;
        this.m = c;
        this.J = {};
        this.metadata = {}
    }
      , iq = function(a, b, c) {
        var d = a.m.getWithConfig(b);
        void 0 !== d ? a.J[b] = d : void 0 !== c && (a.J[b] = c)
    };
    Object.freeze(["config", "event", "get", "set"]);
    var jq = encodeURI
      , Y = encodeURIComponent
      , kq = sb;
    var lq = function(a, b) {
        if (!a)
            return !1;
        var c = Af(Cf(a), "host");
        if (!c)
            return !1;
        for (var d = 0; b && d < b.length; d++) {
            var e = b[d] && b[d].toLowerCase();
            if (e) {
                var f = c.length - e.length;
                0 < f && "." != e.charAt(0) && (f--,
                e = "." + e);
                if (0 <= f && c.indexOf(e, f) == f)
                    return !0
            }
        }
        return !1
    };
    var mq = function(a, b, c) {
        for (var d = {}, e = !1, f = 0; a && f < a.length; f++)
            a[f] && a[f].hasOwnProperty(b) && a[f].hasOwnProperty(c) && (d[a[f][b]] = a[f][c],
            e = !0);
        return e ? d : null
    };
    var nq = function(a, b, c) {
        for (var d = 0; d < b.length; d++)
            a.hasOwnProperty(b[d]) && (a[b[d]] = c(a[b[d]]))
    };
    function Gr() {
        return B.gaGlobal = B.gaGlobal || {}
    }
    var Hr = function() {
        var a = Gr();
        a.hid = a.hid || ya();
        return a.hid
    }
      , Ir = function(a, b) {
        var c = Gr();
        if (void 0 == c.vid || b && !c.from_cookie)
            c.vid = a,
            c.from_cookie = b
    };
    var fs = function() {
        if (sa(B.__uspapi)) {
            var a = "";
            try {
                B.__uspapi("getUSPData", 1, function(b, c) {
                    if (c && b) {
                        var d = b.uspString;
                        d && RegExp("^[\\da-zA-Z-]{1,20}$").test(d) && (a = d)
                    }
                })
            } catch (b) {}
            return a
        }
    };
    var Bs = window
      , Cs = document
      , Ds = function(a) {
        var b = Bs._gaUserPrefs;
        if (b && b.ioo && b.ioo() || a && !0 === Bs["ga-disable-" + a])
            return !0;
        try {
            var c = Bs.external;
            if (c && c._gaUserPrefs && "oo" == c._gaUserPrefs)
                return !0
        } catch (f) {}
        for (var d = dg("AMP_TOKEN", String(Cs.cookie), !0), e = 0; e < d.length; e++)
            if ("$OPT_OUT" == d[e])
                return !0;
        return Cs.getElementById("__gaOptOutExtension") ? !0 : !1
    };
    var Es = {};
    function Ls(a) {
        delete a.eventModel[O.Kb];
        Ns(a.eventModel)
    }
    var Ns = function(a) {
        Ba(a, function(c) {
            "_" === c.charAt(0) && delete a[c]
        });
        var b = a[O.Ga] || {};
        Ba(b, function(c) {
            "_" === c.charAt(0) && delete b[c]
        })
    };
    var Qs = function(a, b, c) {
        qn(b, c, a)
    }
      , bt = function(a, b, c) {
        qn(b, c, a, !0)
    }
      , dt = function(a, b) {};
    function ct(a, b) {}
    var Z = {
        g: {}
    };

    Z.g.c = ["google"],
    function() {
        (function(a) {
            Z.__c = a;
            Z.__c.h = "c";
            Z.__c.isVendorTemplate = !0;
            Z.__c.priorityOverride = 0
        }
        )(function(a) {
            zp(a.vtp_value, "c", a.vtp_gtmEventId);
            return a.vtp_value
        })
    }();
    Z.g.e = ["google"],
    function() {
        (function(a) {
            Z.__e = a;
            Z.__e.h = "e";
            Z.__e.isVendorTemplate = !0;
            Z.__e.priorityOverride = 0
        }
        )(function(a) {
            return String(a.vtp_gtmCachedValues.event)
        })
    }();

    Z.g.v = ["google"],
    function() {
        (function(a) {
            Z.__v = a;
            Z.__v.h = "v";
            Z.__v.isVendorTemplate = !0;
            Z.__v.priorityOverride = 0
        }
        )(function(a) {
            var b = a.vtp_name;
            if (!b || !b.replace)
                return !1;
            var c = qp(b.replace(/\\\./g, "."), a.vtp_dataLayerVersion || 1)
              , d = void 0 !== c ? c : a.vtp_defaultValue;
            zp(d, "v", a.vtp_gtmEventId);
            return d
        })
    }();
    Z.g.rep = ["google"],
    function() {
        (function(a) {
            Z.__rep = a;
            Z.__rep.h = "rep";
            Z.__rep.isVendorTemplate = !0;
            Z.__rep.priorityOverride = 0
        }
        )(function(a) {
            var b;
            switch (Yk(a.vtp_containerId).prefix) {
            case "AW":
                b = Sl;
                break;
            case "DC":
                b = em;
                break;
            case "GF":
                b = jm;
                break;
            case "HA":
                b = om;
                break;
            case "UA":
                b = Nm;
                break;
            default:
                H(a.vtp_gtmOnFailure);
                return
            }
            H(a.vtp_gtmOnSuccess);
            pn(a.vtp_containerId, b, a.vtp_remoteConfig || {})
        })
    }();

    Z.g.get = ["google"],
    function() {
        (function(a) {
            Z.__get = a;
            Z.__get.h = "get";
            Z.__get.isVendorTemplate = !0;
            Z.__get.priorityOverride = 0
        }
        )(function(a) {
            var b = a.vtp_settings;
            (a.vtp_deferrable ? bt : Qs)(String(b.streamId), String(a.vtp_eventName), b.eventParameters || {});
            a.vtp_gtmOnSuccess()
        })
    }();
    Z.g.zone = [],
    function() {
        function a(m) {
            for (var n = m.vtp_boundaries || [], p = 0; p < n.length; p++)
                if (!n[p])
                    return !1;
            return !0
        }
        function b(m) {
            var n = S.H
              , p = n + ":" + m.vtp_gtmTagId
              , r = qp("gtm.uniqueEventId") || 0
              , t = Qd(function() {
                return new g
            })
              , u = a(m)
              , q = m.vtp_enableTypeRestrictions ? m.vtp_whitelistedTypes.map(function(z) {
                return z.typeId
            }) : null;
            q = q && Pa(q, f);
            if (t.registerZone(p, r, u, q))
                for (var v = m.vtp_childContainers.map(function(z) {
                    return z.publicId
                }), y = 0; y < v.length; y++) {
                    var A = String(v[y]);
                    if (t.registerChild(A, n, p))
                        if (0 === A.indexOf("GTM-"))
                            yp(A);
                        else {
                            (function(z, x) {
                                rp(arguments)
                            }
                            )("js", Ia());
                            Io(A);
                            var w = {};
                            rn(w, A)
                        }
                }
        }
        var c = {
            active: !1,
            isAllowed: function() {
                return !1
            },
            Ni: function() {
                return !1
            }
        }
          , d = {
            active: !0,
            isAllowed: function() {
                return !0
            },
            Ni: function() {
                return !0
            }
        }
          , e = {
            zone: !0,
            cn: !0,
            css: !0,
            ew: !0,
            eq: !0,
            ge: !0,
            gt: !0,
            lc: !0,
            le: !0,
            lt: !0,
            re: !0,
            sw: !0,
            um: !0
        }
          , f = {
            cl: ["ecl"],
            ecl: ["cl"],
            ehl: ["hl"],
            hl: ["ehl"]
        }
          , g = function() {
            this.m = {};
            this.o = {}
        };
        g.prototype.checkState = function(m, n) {
            var p = this.m[m];
            if (!p)
                return d;
            var r = this.checkState(p.Dg, n);
            if (!r.active)
                return c;
            for (var t = [], u = 0; u < p.$e.length; u++) {
                var q = this.o[p.$e[u]];
                q.wc(n) && t.push(q)
            }
            return t.length ? {
                active: !0,
                isAllowed: function(v, y) {
                    y = y || [];
                    var A = r.isAllowed;
                    if (!A(v, y))
                        return !1;
                    for (var w = 0; w < t.length; ++w)
                        if (t[w].isAllowed(v, y))
                            return !0;
                    return !1
                }
            } : c
        }
        ;
        g.prototype.unregisterChild = function(m) {
            delete this.m[m]
        }
        ;
        g.prototype.registerZone = function(m, n, p, r) {
            var t = this.o[m];
            if (t)
                return t.s(n, p),
                !1;
            if (!p)
                return !1;
            this.o[m] = new k(n,r);
            return !0
        }
        ;
        g.prototype.registerChild = function(m, n, p) {
            var r = this.m[m];
            if (!r && U[m] || r && r.Dg !== n)
                return !1;
            if (r)
                return r.$e.push(p),
                !1;
            this.m[m] = {
                Dg: n,
                $e: [p]
            };
            return !0
        }
        ;
        var k = function(m, n) {
            this.m = [{
                eventId: m,
                wc: !0
            }];
            this.o = null;
            if (n) {
                this.o = {};
                for (var p = 0; p < n.length; p++)
                    this.o[n[p]] = !0
            }
        };
        k.prototype.s = function(m, n) {
            var p = this.m[this.m.length - 1];
            m <= p.eventId || p.wc != n && this.m.push({
                eventId: m,
                wc: n
            })
        }
        ;
        k.prototype.wc = function(m) {
            if (!this.m || 0 == this.m.length)
                return !1;
            for (var n = this.m.length - 1; 0 <= n; n--)
                if (this.m[n].eventId <= m)
                    return this.m[n].wc;
            return !1
        }
        ;
        k.prototype.isAllowed = function(m, n) {
            n = n || [];
            if (!this.o || e[m] || this.o[m])
                return !0;
            for (var p = 0; p < n.length; ++p)
                if (this.o[n[p]])
                    return !0;
            return !1
        }
        ;
        (function(m) {
            Z.__zone = m;
            Z.__zone.h = "zone";
            Z.__zone.isVendorTemplate = !0;
            Z.__zone.priorityOverride = 0
        }
        )(function(m) {
            b(m);
            H(m.vtp_gtmOnSuccess)
        })
    }();

    var et = {};
    et.dataLayer = Dd;
    et.callback = function(a) {
        rd.hasOwnProperty(a) && sa(rd[a]) && rd[a]();
        delete rd[a]
    }
    ;
    et.bootstrap = 0;
    et._spx = !1;
    (function(a) {
        if (!B["__TAGGY_INSTALLED"]) {
            var b = !1;
            if (F.referrer) {
                var c = Cf(F.referrer);
                b = "cct.google" === zf(c, "host")
            }
            if (!b) {
                var d = hg("googTaggyReferrer");
                b = d.length && d[0].length
            }
            b && (B["__TAGGY_INSTALLED"] = !0,
            ob("https://cct.google/taggy/agent.js"))
        }
        var f = function(r) {
            var t = "GTM"
              , u = "GTM";
            t = "OGT",
            u = "GTAG";
            var q = B["google.tagmanager.debugui2.queue"];
            q || (q = [],
            B["google.tagmanager.debugui2.queue"] = q,
            ob("https://" + S.Ed + "/debug/bootstrap?id=" + S.H + "&src=" + u + "&cond=" + r + "&gtm=" + ik()));
            var v = {
                messageType: "CONTAINER_STARTING",
                data: {
                    scriptSource: ib,
                    containerProduct: t,
                    debug: !1,
                    id: S.H
                }
            };
            v.data.resume = function() {
                a()
            }
            ;
            S.fh && (v.data.initialPublish = !0);
            q.push(v)
        }
          , g = void 0
          , k = Af(B.location, "query", !1, void 0, "gtm_debug");
        Ho(k) && (g = 2);
        if (!g && F.referrer) {
            var m = Cf(F.referrer);
            "tagassistant.google.com" === zf(m, "host") && (g = 3)
        }
        if (!g) {
            var n = hg("__TAG_ASSISTANT");
            n.length && n[0].length && (g = 4)
        }
        if (!g) {
            var p = F.documentElement.getAttribute("data-tag-assistant-present");
            Ho(p) && (g = 5)
        }
        g && ib ? f(g) : a()
    }
    )(function() {
        var a = !1;
        a && ui("INIT");
        Td().o();
        Fk();
        mh.enable_gbraid_cookie_write = !0;
        var b = !!U[S.H];
        if (b) {
            var c = U.zones;
            c && c.unregisterChild(S.H);
        } else {
            for (var g = data.resource || {}, k = g.macros || [], m = 0; m < k.length; m++)
                fc.push(k[m]);
            for (var n = g.tags || [], p = 0; p < n.length; p++)
                ic.push(n[p]);
            for (var r = g.predicates || [], t = 0; t < r.length; t++)
                hc.push(r[t]);
            for (var u = g.rules || [], q = 0; q < u.length; q++) {
                for (var v = u[q], y = {}, A = 0; A < v.length; A++)
                    y[v[A][0]] = Array.prototype.slice.call(v[A], 1);
                gc.push(y)
            }
            kc = Z;
            lc = bq;
            U[S.H] = et;
            Na(vd, Z.g);
            nc = vc;
            Go();
            gi = !1;
            hi = 0;
            if ("interactive" == F.readyState && !F.createEventObject || "complete" == F.readyState)
                ji();
            else {
                tb(F, "DOMContentLoaded", ji);
                tb(F, "readystatechange", ji);
                if (F.createEventObject && F.documentElement.doScroll) {
                    var w = !0;
                    try {
                        w = !B.frameElement
                    } catch (D) {}
                    w && ki()
                }
                tb(B, "load", ji)
            }
            Vn = !1;
            "complete" === F.readyState ? Xn() : tb(B, "load", Xn);
            wj && B.setInterval(qj, 864E5);
            pd = Ja();
            et.bootstrap = pd;
            if (a) {
                var E = vi("INIT");
            }
        }
    });

}
)()
