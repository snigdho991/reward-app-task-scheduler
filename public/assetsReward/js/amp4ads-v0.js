self.AMP_CONFIG = {
    "v": "012111152338000",
    "type": "production",
    "allow-doc-opt-in": ["amp-next-page"],
    "allow-url-opt-in": [],
    "canary": 0,
    "a4aProfilingRate": 0.01,
    "doubleclickSraExp": 0.01,
    "doubleclickSraReportExcludedBlock": 0.1,
    "flexAdSlots": 0.05,
    "flexible-bitrate": 0.1,
    "ios-fixed-no-transfer": 0,
    "disable-a4a-non-sd": 1,
    "amp-cid-backup": 1,
    "story-ad-placements": 0.01,
    "story-disable-animations-first-page": 0,
    "story-load-first-page-only": 1,
    "story-load-inactive-outside-viewport": 1,
    "amp-story-page-attachment-ui-v2": 1,
    "amp-sticky-ad-to-amp-ad-v4": 0,
    "esm": 1
};
/*AMP_CONFIG*/
(function() {
    function aa() {
        return "2111152338000"
    }
    class ba {
        constructor() {
            this.Ba = new ca
        }
        abort() {
            this.Ba.Fc || (this.Ba.Fc = !0,
            this.Ba.Ib && this.Ba.Ib({
                type: "abort",
                bubbles: !1,
                cancelable: !1,
                target: this.Ba,
                currentTarget: this.Ba
            }))
        }
        get signal() {
            return this.Ba
        }
    }
    class ca {
        constructor() {
            this.Fc = !1;
            this.Ib = null
        }
        get aborted() {
            return this.Fc
        }
        get onabort() {
            return this.Ib
        }
        set onabort(a) {
            this.Ib = a
        }
    }
    let da;
    function p() {
        return da ? da : da = Promise.resolve(void 0)
    }
    class r {
        constructor() {
            this.promise = new Promise(((a,b)=>{
                this.resolve = a;
                this.reject = b
            }
            ))
        }
    }
    function ea(a) {
        return new Promise((b=>{
            b(a())
        }
        ))
    }
    function fa(a) {
        let b = Object.getOwnPropertyDescriptor(a, "message");
        if (null !== b && void 0 !== b && b.writable)
            return a;
        let c = a.stack
          , d = Error(a.message);
        for (let e in a)
            d[e] = a[e];
        d.stack = c;
        return d
    }
    function ha(a) {
        let b = null
          , c = "";
        for (let d of arguments)
            d instanceof Error && !b ? b = fa(d) : (c && (c += " "),
            c += d);
        b ? c && (b.message = c + ": " + b.message) : b = Error(c);
        return b
    }
    function u(a) {
        let b = ha.apply(null, arguments);
        setTimeout((()=>{
            var c, d;
            null === (c = (d = self).__AMP_REPORT_ERROR) || void 0 === c ? void 0 : c.call(d, b);
            throw b
        }
        ))
    }
    function ia(a) {
        let b = ha.apply(null, arguments);
        b.expected = !0;
        return b
    }
    let ja = Object.prototype.hasOwnProperty
      , ka = Object.prototype.toString;
    function la(a) {
        return "[object Object]" === ka.call(a)
    }
    function v(a) {
        let b = Object.create(null);
        a && Object.assign(b, a);
        return b
    }
    function w(a) {
        return a || {}
    }
    let ma = /^[a-z][a-z0-9._]*-[a-z0-9._-]*$/
      , na = "annotation-xml color-profile font-face font-face-src font-face-uri font-face-format font-face-name missing-glyph".split(" ")
      , oa = {
        childList: !0,
        subtree: !0
    };
    function pa(a, b) {
        if (!ma.test(b) || na.includes(b))
            throw new a(`invalid custom element name "${b}"`)
    }
    class qa {
        constructor(a, b) {
            this.A = a;
            this.Rb = b;
            this.ge = v()
        }
        define(a, b, c) {
            this.Rb.define(a, b, c);
            let d = this.ge
              , e = d[a];
            e && (e.resolve(),
            delete d[a])
        }
        get(a) {
            let b = this.Rb.getByName(a);
            if (b)
                return b.ctor
        }
        whenDefined(a) {
            pa(this.A.SyntaxError, a);
            if (this.Rb.getByName(a))
                return p();
            let b = this.ge;
            let c = b[a];
            c || (c = new r,
            b[a] = c);
            return c.promise
        }
        upgrade(a) {
            this.Rb.upgrade(a)
        }
    }
    function ra(a, b) {
        if (a.za)
            a.za += `,${b}`;
        else {
            a.za = b;
            var c = new a.A.MutationObserver((d=>{
                d && sa(a, d)
            }
            ));
            a.Y = c;
            for (let d of a.$c)
                c.observe(d, oa);
            ta(a.A, a)
        }
    }
    function ua(a, b) {
        return b && a.querySelectorAll ? a.querySelectorAll(b) : []
    }
    function va(a, b) {
        let c = a.getByName(b.localName);
        if (c && (wa(a, b, c),
        b.connectedCallback))
            try {
                b.connectedCallback()
            } catch (d) {
                u(d)
            }
    }
    function wa(a, b, c) {
        c = c.ctor;
        if (!(b instanceof c)) {
            a.qc = b;
            try {
                if (new c !== b)
                    throw new a.A.Error("Constructor illegally returned a different instance.")
            } catch (d) {
                u(d)
            }
        }
    }
    function sa(a, b) {
        for (let c of b) {
            if (!c)
                continue;
            let d = c.addedNodes
              , e = c.removedNodes;
            for (let f of d) {
                let g = ua(f, a.za);
                va(a, f);
                for (let h of g)
                    va(a, h)
            }
            for (let f of e) {
                let g = ua(f, a.za);
                if (f.disconnectedCallback)
                    try {
                        f.disconnectedCallback()
                    } catch (h) {
                        u(h)
                    }
                for (let h of g)
                    if (h.disconnectedCallback)
                        try {
                            h.disconnectedCallback()
                        } catch (k) {
                            u(k)
                        }
            }
        }
    }
    class xa {
        constructor(a) {
            this.A = a;
            this.sc = v();
            this.za = "";
            this.Y = this.qc = null;
            this.$c = [a.document]
        }
        current() {
            let a = this.qc;
            this.qc = null;
            return a
        }
        getByName(a) {
            let b = this.sc[a];
            if (b)
                return b
        }
        getByConstructor(a) {
            let b = this.sc;
            for (let c in b) {
                let d = b[c];
                if (d.ctor === a)
                    return d
            }
        }
        define(a, b, c) {
            let d = this.A.Error
              , e = this.A.SyntaxError;
            if (c)
                throw new d("Extending native custom elements is not supported");
            pa(e, a);
            if (this.getByName(a) || this.getByConstructor(b))
                throw new d(`duplicate definition "${a}"`);
            this.sc[a] = {
                name: a,
                ctor: b
            };
            ra(this, a);
            for (let f of this.$c)
                this.upgrade(f, a)
        }
        upgrade(a, b) {
            let c = !!b
              , d = ua(a, b || this.za);
            for (let e of d)
                c ? va(this, e) : this.upgradeSelf(e)
        }
        upgradeSelf(a) {
            let b = this.getByName(a.localName);
            b && wa(this, a, b)
        }
        observe(a) {
            this.$c.push(a);
            this.Y && this.Y.observe(a, oa)
        }
        sync() {
            this.Y && sa(this, this.Y.takeRecords())
        }
    }
    function ta(a, b) {
        var c;
        let d = a.document
          , e = a.Document.prototype
          , f = a.Element.prototype
          , g = a.Node.prototype
          , h = e.createElement
          , k = e.importNode
          , l = g.appendChild
          , m = g.cloneNode
          , n = g.insertBefore
          , q = g.removeChild
          , E = g.replaceChild;
        e.createElement = function(t) {
            let T = b.getByName(t);
            return T ? new T.ctor : h.apply(this, arguments)
        }
        ;
        e.importNode = function() {
            let t = k.apply(this, arguments);
            t && this === d && (b.upgradeSelf(t),
            b.upgrade(t));
            return t
        }
        ;
        g.appendChild = function() {
            let t = l.apply(this, arguments);
            b.sync();
            return t
        }
        ;
        g.insertBefore = function() {
            let t = n.apply(this, arguments);
            b.sync();
            return t
        }
        ;
        g.removeChild = function() {
            let t = q.apply(this, arguments);
            b.sync();
            return t
        }
        ;
        g.replaceChild = function() {
            let t = E.apply(this, arguments);
            b.sync();
            return t
        }
        ;
        g.cloneNode = function() {
            let t = m.apply(this, arguments);
            t.ownerDocument === d && (b.upgradeSelf(t),
            b.upgrade(t));
            return t
        }
        ;
        let z = f
          , x = Object.getOwnPropertyDescriptor(z, "innerHTML");
        x || (z = Object.getPrototypeOf(a.HTMLElement.prototype),
        x = Object.getOwnPropertyDescriptor(z, "innerHTML"));
        if (null !== (c = x) && void 0 !== c && c.configurable) {
            let t = x.set;
            x.set = function(T) {
                t.call(this, T);
                b.upgrade(this)
            }
            ;
            Object.defineProperty(z, "innerHTML", x)
        }
    }
    function ya() {
        function a() {
            let m = this.constructor;
            var n = g.current();
            n || (n = g.getByConstructor(m),
            n = f.call(e, n.name));
            Object.setPrototypeOf(n, m.prototype);
            return n
        }
        var b = za
          , c = b.Element;
        let d = b.HTMLElement
          , e = b.document
          , f = e.createElement
          , g = new xa(b)
          , h = new qa(b,g);
        Object.defineProperty(b, "customElements", {
            enumerable: !0,
            configurable: !0,
            value: h
        });
        c = c.prototype;
        let k = c.attachShadow
          , l = c.createShadowRoot;
        k && (c.attachShadow = function(m) {
            let n = k.apply(this, arguments);
            g.observe(n);
            return n
        }
        ,
        c.attachShadow.toString = function() {
            return k.toString()
        }
        );
        l && (c.createShadowRoot = function() {
            let m = l.apply(this, arguments);
            g.observe(m);
            return m
        }
        ,
        c.createShadowRoot.toString = function() {
            return l.toString()
        }
        );
        Aa(d, a);
        b.HTMLElementOrig = b.HTMLElement;
        b.HTMLElement = a;
        a.call || (a.apply = b.Function.apply,
        a.bind = b.Function.bind,
        a.call = b.Function.call)
    }
    function Ba() {
        function a() {
            return d.construct(c, [], this.constructor)
        }
        var b = za;
        let c = b.HTMLElement
          , d = b.Reflect;
        Aa(c, a);
        b.HTMLElementOrig = b.HTMLElement;
        b.HTMLElement = a
    }
    function Aa(a, b) {
        b.prototype = Object.create(a.prototype, {
            constructor: {
                configurable: !0,
                writable: !0,
                value: b
            }
        });
        Object.setPrototypeOf(b, a)
    }
    function Ca(a, b, c) {
        b in a ? Object.defineProperty(a, b, {
            value: c,
            enumerable: !0,
            configurable: !0,
            writable: !0
        }) : a[b] = c;
        return a
    }
    Ca["default"] = Ca;
    Ca.__esModule = !0;
    function y(a) {
        for (var b = 1; b < arguments.length; b++) {
            var c = null != arguments[b] ? arguments[b] : {};
            b % 2 ? Da(Object(c), !0).forEach((function(d) {
                Ca(a, d, c[d])
            }
            )) : Object.getOwnPropertyDescriptors ? Object.defineProperties(a, Object.getOwnPropertyDescriptors(c)) : Da(Object(c)).forEach((function(d) {
                Object.defineProperty(a, d, Object.getOwnPropertyDescriptor(c, d))
            }
            ))
        }
        return a
    }
    function Da(a, b) {
        var c = Object.keys(a);
        if (Object.getOwnPropertySymbols) {
            var d = Object.getOwnPropertySymbols(a);
            b && (d = d.filter((function(e) {
                return Object.getOwnPropertyDescriptor(a, e).enumerable
            }
            )));
            c.push.apply(c, d)
        }
        return c
    }
    y["default"] = y;
    y.__esModule = !0;
    function Ea(a) {
        return a ? Array.prototype.slice.call(a) : []
    }
    let A = Array.isArray;
    function Fa(a) {
        return A(a) ? a : [a]
    }
    function Ga(a, b) {
        let c = [];
        let d = 0;
        for (let e = 0; e < a.length; e++) {
            let f = a[e];
            b(f, e, a) ? c.push(f) : (d < e && (a[d] = f),
            d++)
        }
        d < a.length && (a.length = d);
        return c
    }
    function Ha(a, b) {
        for (let c = 0; c < a.length; c++)
            if (b(a[c], c, a))
                return c;
        return -1
    }
    function Ia(a, b) {
        b = a.indexOf(b);
        -1 != b && a.splice(b, 1)
    }
    function Ja(a) {
        return a.trimStart ? a.trimStart() : (a + "_").trim().slice(0, -1)
    }
    function Ka(a) {
        return "number" === typeof a && isFinite(a)
    }
    function La(a) {
        return 1 == (null === a || void 0 === a ? void 0 : a.nodeType) ? a.tagName.toLowerCase() + (a.id ? `#${a.id}` : "") : a
    }
    function Ma(a) {
        return 0 <= a.indexOf("​​​")
    }
    function Na(a, b, c="Assertion failed", d) {
        var e, f;
        let g = c;
        if (b)
            return b;
        a && -1 == g.indexOf(a) && (g += a);
        c = 3;
        let h = g.split("%s");
        let k = h.shift();
        let l = [k];
        for (; h.length; ) {
            let m = arguments[c++]
              , n = h.shift();
            k += La(m) + n;
            l.push(m, n.trim())
        }
        c = Error(k);
        c.messageArray = Ga(l, (m=>"" !== m));
        null === (e = (f = self).__AMP_REPORT_ERROR) || void 0 === e ? void 0 : e.call(f, c);
        throw c
    }
    function Oa(a, b, c, d, e) {
        A(e) ? a(c, e.concat([b])) : a(c, `${e || d}: %s`, b);
        return b
    }
    function B(a, b, c, d, e) {
        return Na("​​​", a, b, c, d, e, void 0, void 0, void 0, void 0, void 0, void 0)
    }
    function Pa(a, b) {
        try {
            return JSON.parse(a)
        } catch (c) {
            return null === b || void 0 === b ? void 0 : b(c),
            null
        }
    }
    function Qa(a) {
        let b = new Uint8Array(a.length);
        for (let c = 0; c < a.length; c++) {
            let d = a.charCodeAt(c);
            b[c] = d
        }
        return b
    }
    function Ra(a) {
        let b = Array(a.length);
        for (let c = 0; c < a.length; c++)
            b[c] = String.fromCharCode(a[c]);
        return b.join("")
    }
    function Sa(a) {
        ({crypto: a} = a);
        let b = new Uint8Array(16);
        a.getRandomValues(b);
        return b
    }
    function Ta(a) {
        let b = !1
          , c = null
          , d = a;
        return (...e)=>{
            b || (c = d.apply(self, e),
            b = !0,
            d = null);
            return c
        }
    }
    function Ua(a, b) {
        function c(g) {
            f = null;
            e = a.setTimeout(d, 100);
            b.apply(null, g)
        }
        function d() {
            e = 0;
            f && c(f)
        }
        let e = 0
          , f = null;
        return function(...g) {
            e ? f = g : c(g)
        }
    }
    function Va(a, b, c) {
        function d() {
            e = 0;
            let h = c - (a.Date.now() - f);
            if (0 < h)
                e = a.setTimeout(d, h);
            else {
                var k = g;
                g = null;
                b.apply(null, k)
            }
        }
        let e = 0
          , f = 0
          , g = null;
        return function(...h) {
            f = a.Date.now();
            g = h;
            e || (e = a.setTimeout(d, c))
        }
    }
    let Wa = /(?:^[#?]?|&)([^=&]+)(?:=([^&]*))?/g;
    function Xa(a, b="") {
        try {
            return decodeURIComponent(a)
        } catch (c) {
            return b
        }
    }
    function C(a) {
        let b = v();
        if (!a)
            return b;
        for (var c; c = Wa.exec(a); ) {
            let d = Xa(c[1], c[1]);
            c = c[2] ? Xa(c[2].replace(/\+/g, " "), c[2]) : "";
            b[d] = c
        }
        return b
    }
    function Ya(a) {
        ({location: a} = a || self);
        return C(a.originalHash || a.hash)
    }
    let D = self.AMP_CONFIG || {}
      , Za = ("string" == typeof D.cdnProxyRegex ? new RegExp(D.cdnProxyRegex) : D.cdnProxyRegex) || /^https:\/\/([a-zA-Z0-9_-]+\.)?cdn\.ampproject\.org$/;
    function $a(a) {
        if (!self.document || !self.document.head || self.location && Za.test(self.location.origin))
            return null;
        let b = self.document.head.querySelector(`meta[name="${a}"]`);
        return b && b.getAttribute("content") || null
    }
    let F = {
        thirdParty: D.thirdPartyUrl || "https://3p.ampproject.net",
        thirdPartyFrameHost: D.thirdPartyFrameHost || "ampproject.net",
        thirdPartyFrameRegex: ("string" == typeof D.thirdPartyFrameRegex ? new RegExp(D.thirdPartyFrameRegex) : D.thirdPartyFrameRegex) || /^d-\d+\.ampproject\.net$/,
        cdn: D.cdnUrl || $a("runtime-host") || "https://cdn.ampproject.org",
        cdnProxyRegex: Za,
        localhostRegex: /^https?:\/\/localhost(:\d+)?$/,
        errorReporting: D.errorReportingUrl || "https://us-central1-amp-error-reporting.cloudfunctions.net/r",
        betaErrorReporting: D.betaErrorReportingUrl || "https://us-central1-amp-error-reporting.cloudfunctions.net/r-beta",
        localDev: D.localDev || !1,
        trustedViewerHosts: [/(^|\.)google\.(com?|[a-z]{2}|com?\.[a-z]{2}|cat)$/, /(^|\.)gmail\.(com|dev)$/],
        geoApi: D.geoApiUrl || $a("amp-geo-api")
    }
      , ab = {
        urls: F
    };
    let bb = "";
    function G(a) {
        a = a || self;
        if (a.__AMP_MODE)
            var b = a.__AMP_MODE;
        else {
            var c = Ya(a);
            c = cb(a, c);
            bb || (bb = (null === (b = a.AMP_CONFIG) || void 0 === b ? void 0 : b.v) || `01${aa()}`);
            b = a.__AMP_MODE = {
                localDev: !1,
                development: c,
                esm: !0,
                test: !1,
                rtvVersion: bb
            }
        }
        return b
    }
    function cb(a, b) {
        let c = b || Ya(a);
        return ["1", "actions", "amp", "amp4ads", "amp4email"].includes(c.development) || !!a.AMP_DEV_MODE
    }
    let db = ()=>{}
    ;
    let eb;
    function fb(a) {
        eb = a
    }
    let gb = (a,b)=>b.reduce(((c,d)=>`${c}&s[]=${encodeURIComponent(String(La(d)))}`), `https://log.amp.dev/?v=${`01${aa()}`}&id=${encodeURIComponent(a)}`);
    function hb(a) {
        var b;
        let c = a.win;
        return null !== (b = c.console) && void 0 !== b && b.log && 0 != parseInt(Ya(c).log, 10) ? a.gf(parseInt(Ya(void 0).log, 10), !1) : 0
    }
    function ib(a, b, c, d) {
        var e, f;
        if (c > (null !== (e = eb) && void 0 !== e ? e : a.hf))
            return !1;
        let g = a.win.console;
        c = null !== (f = {
            [1]: g.error,
            [3]: g.info,
            [2]: g.warn
        }[c]) && void 0 !== f ? f : g.log;
        a = A(d[0]) ? jb(a, d[0]) : d;
        b = `[${b}]`;
        "string" == typeof a[0] ? a[0] = b + " " + a[0] : a.unshift(b);
        c.apply(g, a);
        return !0
    }
    function kb(a, b) {
        b = fa(b);
        a.sb ? b.message ? -1 == b.message.indexOf(a.sb) && (b.message += a.sb) : b.message = a.sb : Ma(b.message) && (b.message = b.message.replace("​​​", ""));
        return b
    }
    function jb(a, b) {
        var c;
        let d = b.shift();
        return null !== (c = a.Oc) && void 0 !== c && c[d] ? [a.Oc[d]].concat(b) : [`More info at ${gb(d, b)}`]
    }
    class lb {
        constructor(a, b, c="") {
            this.win = a;
            this.gf = b;
            this.hf = hb(this);
            this.sb = c;
            this.Oc = null;
            this.Lf = Ta((()=>{
                a.fetch(`${F.cdn}/rtv/${`01${aa()}`}/log-messages.simple.json`).then((d=>d.json()), db).then((d=>{
                    d && (this.Oc = d)
                }
                ))
            }
            ));
            this.Ta = this.assert.bind(this)
        }
        fine(a, ...b) {
            ib(this, a, 4, b)
        }
        info(a, ...b) {
            ib(this, a, 3, b)
        }
        warn(a, ...b) {
            ib(this, a, 2, b)
        }
        error(a, ...b) {
            if (!ib(this, a, 1, b)) {
                var c, d;
                b = this.createError.apply(this, b);
                b.name = a || b.name;
                null === (c = (d = self).__AMP_REPORT_ERROR) || void 0 === c ? void 0 : c.call(d, b)
            }
        }
        expectedError(a, ...b) {
            if (!ib(this, a, 1, b)) {
                var c, d;
                null === (c = (d = self).__AMP_REPORT_ERROR) || void 0 === c ? void 0 : c.call(d, this.createExpectedError.apply(this, b))
            }
        }
        createError(a) {
            return kb(this, ha.apply(null, arguments))
        }
        createExpectedError(a) {
            return kb(this, ia.apply(null, arguments))
        }
        assert(a, b, c) {
            return A(b) ? this.assert.apply(this, [a].concat(jb(this, b))) : Na.apply(null, [this.sb].concat(Array.prototype.slice.call(arguments)))
        }
        assertElement(a, b) {
            return Oa(this.Ta, a, 1 == (null === a || void 0 === a ? void 0 : a.nodeType), "Element expected", b)
        }
        assertString(a, b) {
            return Oa(this.Ta, a, "string" == typeof a, "String expected", b)
        }
        assertNumber(a, b) {
            return Oa(this.Ta, a, "number" == typeof a, "Number expected", b)
        }
        assertArray(a, b) {
            return Oa(this.Ta, a, A(a), "Array expected", b)
        }
        assertBoolean(a, b) {
            return Oa(this.Ta, a, !!a === a, "Boolean expected", b)
        }
    }
    self.__AMP_LOG = self.__AMP_LOG || {
        user: null,
        dev: null,
        userForEmbed: null
    };
    let mb = self.__AMP_LOG;
    let nb = null;
    function ob(a, b) {
        if (!nb)
            throw Error("failed to call initLogConstructor");
        return new nb(self,a,b)
    }
    function H(a) {
        mb.user || (mb.user = pb("​​​"));
        var b = mb.user.win;
        return a && a.ownerDocument.defaultView != b ? mb.userForEmbed || (mb.userForEmbed = pb("​​​​")) : mb.user
    }
    function pb(a) {
        return ob(((b,c)=>c || 1 <= b ? 4 : 2), a)
    }
    function I() {
        return mb.dev || (mb.dev = ob((a=>3 <= a ? 4 : 2 <= a ? 3 : 0)))
    }
    function J(a, b, c, d, e, f) {
        return H().assert(a, b, c, d, e, f, void 0, void 0, void 0, void 0, void 0)
    }
    function K(a) {
        return (a.ownerDocument || a).defaultView
    }
    /* https://mths.be/cssescape v1.5.1 by @mathias | MIT license */
    function qb(a, b) {
        return a.querySelector(b.replace(/^|,/g, "$&:scope "))
    }
    function rb(a, b) {
        let c = a.matches || a.webkitMatchesSelector || a.mozMatchesSelector || a.msMatchesSelector || a.oMatchesSelector;
        return c ? c.call(a, b) : !1
    }
    function sb(a, b) {
        for (; a && void 0 !== a; a = a.parentElement)
            if (b(a))
                return a;
        return null
    }
    function tb(a, b) {
        return a.closest ? a.closest(b) : sb(a, (c=>rb(c, b)))
    }
    function ub(a, b) {
        for (a = a.lastElementChild; a; a = a.previousElementSibling)
            if (b(a))
                return a;
        return null
    }
    function vb(a, b) {
        let c = [];
        for (a = a.firstChild; a; a = a.nextSibling)
            b(a) && c.push(a);
        return c
    }
    function wb(a, b) {
        /^[\w-]+$/.test(b);
        return qb(a, `> [${b}]`)
    }
    function xb(a) {
        return vb(a, (b=>!yb(b)))
    }
    function yb(a) {
        let b;
        "string" == typeof a ? b = a : a.nodeType === Node.ELEMENT_NODE && (b = a.tagName);
        return b && b.toLowerCase().startsWith("i-") ? !0 : a.nodeType !== Node.ELEMENT_NODE ? !1 : a.hasAttribute("placeholder") || a.hasAttribute("fallback") || a.hasAttribute("overflow")
    }
    let zb = {
        bubbles: !0,
        cancelable: !0
    };
    function Ab(a, b, c) {
        if (b(a))
            c();
        else {
            let d = new (K(a).MutationObserver)((()=>{
                b(a) && (d.disconnect(),
                c())
            }
            ));
            d.observe(a, {
                childList: !0
            })
        }
    }
    function Bb(a, b) {
        return new Promise((c=>{
            Ab(a, b, c)
        }
        ))
    }
    function Cb(a, b) {
        Ab(a.documentElement, (()=>!!a.body), b)
    }
    function Db(a) {
        return new Promise((b=>Cb(a, b)))
    }
    function Eb(a) {
        var b;
        null === (b = a.parentElement) || void 0 === b ? void 0 : b.removeChild(a)
    }
    function Fb(a, b, c=null) {
        c ? a.insertBefore(b, c.nextSibling) : a.insertBefore(b, a.firstChild)
    }
    function Gb(a, b, c) {
        a = a.createElement(b);
        for (let d in c)
            a.setAttribute(d, c[d]);
        return a
    }
    function Hb(a) {
        let b = a.isConnected;
        if (void 0 !== b)
            return b;
        do {
            if (a = Ib(a),
            a.host)
                a = a.host;
            else
                break
        } while (1);
        return a.nodeType === Node.DOCUMENT_NODE
    }
    function Ib(a) {
        if (Node.prototype.getRootNode)
            return a.getRootNode() || a;
        for (; a.parentNode && (!a || "I-AMPHTML-SHADOW-ROOT" != a.tagName && (11 != a.nodeType || "[object ShadowRoot]" !== Object.prototype.toString.call(a))); a = a.parentNode)
            ;
        return a
    }
    function Jb(a, b) {
        let c = a;
        do {
            if (c.nextSibling)
                return !0
        } while ((c = c.parentNode) && c != b);
        return !1
    }
    function Kb(a, b) {
        let c = a.length;
        for (let d = 0; d < c; d++)
            b(a[d], d)
    }
    function Lb(a) {
        return a.parent && a.parent != a
    }
    function Mb(a, b, c, d) {
        c = c || {};
        let e = a.ownerDocument.createEvent("Event");
        e.data = c;
        let {bubbles: f, cancelable: g} = d || zb;
        e.initEvent(b, f, g);
        a.dispatchEvent(e)
    }
    function L(a, b, c, d) {
        return {
            left: a,
            top: b,
            width: c,
            height: d,
            bottom: b + d,
            right: a + c,
            x: a,
            y: b
        }
    }
    function Nb(a) {
        return L(Number(a.left), Number(a.top), Number(a.width), Number(a.height))
    }
    function Ob(a) {
        let b = -1 / 0
          , c = 1 / 0
          , d = -1 / 0
          , e = 1 / 0;
        for (let f = 0; f < arguments.length; f++) {
            let g = arguments[f];
            if (g && (b = Math.max(b, g.left),
            c = Math.min(c, g.left + g.width),
            d = Math.max(d, g.top),
            e = Math.min(e, g.top + g.height),
            c < b || e < d))
                return null
        }
        return 1 / 0 == c ? null : L(b, d, c - b, e - d)
    }
    function Pb(a, b, c) {
        return 0 == b && 0 == c || 0 == a.width && 0 == a.height ? a : L(a.left + b, a.top + c, a.width, a.height)
    }
    function Qb(a) {
        return !a.IntersectionObserver || !a.IntersectionObserverEntry || !!a.IntersectionObserver._stub || !Rb(a) || /apple/i.test(a.navigator.vendor)
    }
    function Sb() {
        var a = Tb.IntersectionObserver
          , b = Ub;
        return function(c, d) {
            var e;
            return 9 === (null === d || void 0 === d ? void 0 : null === (e = d.root) || void 0 === e ? void 0 : e.nodeType) ? new b(c,d) : new a(c,d)
        }
    }
    function Rb(a) {
        try {
            return new a.IntersectionObserver((()=>{}
            ),{
                root: a.document
            }),
            !0
        } catch (b) {
            return !1
        }
    }
    class Ub {
        constructor(a, b) {
            this.ya = a;
            this.Jb = y({
                root: null,
                rootMargin: "0px 0px 0px 0px"
            }, b);
            this.L = [];
            this.J = null;
            Ub._upgraders.push(this.jd.bind(this))
        }
        get root() {
            return this.J ? this.J.root : this.Jb.root || null
        }
        get rootMargin() {
            return this.J ? this.J.rootMargin : this.Jb.rootMargin
        }
        get thresholds() {
            return this.J ? this.J.thresholds : [].concat(this.Jb.threshold || 0)
        }
        disconnect() {
            this.J ? this.J.disconnect() : this.L.length = 0
        }
        takeRecords() {
            return this.J ? this.J.takeRecords() : []
        }
        observe(a) {
            this.J ? this.J.observe(a) : -1 == this.L.indexOf(a) && this.L.push(a)
        }
        unobserve(a) {
            this.J ? this.J.unobserve(a) : (a = this.L.indexOf(a),
            -1 != a && this.L.splice(a, 1))
        }
        jd(a) {
            let b = new a(this.ya,this.Jb);
            this.J = b;
            for (let c of this.L)
                b.observe(c);
            this.L.length = 0
        }
    }
    Ub._upgraders = [];
    function Vb() {
        var a = Wb;
        !a.IntersectionObserverEntry || "isIntersecting"in a.IntersectionObserverEntry.prototype || Object.defineProperty(a.IntersectionObserverEntry.prototype, "isIntersecting", {
            enumerable: !0,
            configurable: !0,
            get() {
                return 0 < this.intersectionRatio
            }
        })
    }
    class Xb {
        constructor(a) {
            this.ya = a;
            this.L = [];
            this.J = null;
            Xb._upgraders.push(this.jd.bind(this))
        }
        disconnect() {
            this.J ? this.J.disconnect() : this.L.length = 0
        }
        observe(a) {
            this.J ? this.J.observe(a) : -1 == this.L.indexOf(a) && this.L.push(a)
        }
        unobserve(a) {
            this.J ? this.J.unobserve(a) : (a = this.L.indexOf(a),
            -1 != a && this.L.splice(a, 1))
        }
        jd(a) {
            this.J = a = new a(this.ya);
            for (let b of this.L)
                a.observe(b);
            this.L.length = 0
        }
    }
    Xb._upgraders = [];
    if (self.document) {
        var za = self
          , Yb = class {
        }
        ;
        let a = za.document;
        var Zb;
        let b = za.customElements;
        Zb = !!(b && b.define && b.get && b.whenDefined);
        var $b;
        if (!($b = !a)) {
            var ac;
            if (ac = Zb)
                ac = -1 === za.HTMLElement.toString().indexOf("[native code]");
            $b = ac
        }
        if (!$b) {
            var bc = !0
              , cc = !1;
            if (Yb && Zb)
                try {
                    let c = za.Reflect
                      , d = Object.create(Yb.prototype);
                    Function.call.call(Yb, d);
                    cc = !(null === c || void 0 === c || !c.construct)
                } catch (c) {
                    bc = !1
                }
            cc ? Ba() : bc && ya()
        }
        var Wb = self;
        if (Qb(Wb)) {
            var Tb = Wb;
            if (Tb.IntersectionObserver) {
                var dc = Tb.IntersectionObserver;
                Tb.IntersectionObserver = Sb();
                Tb.IntersectionObserver._stub = Ub;
                Tb.IntersectionObserver._native = dc
            } else
                Tb.IntersectionObserver = Ub,
                Tb.IntersectionObserver._stub = Ub
        }
        Vb();
        var ec = self;
        ec.ResizeObserver && !ec.ResizeObserver._stub || ec.ResizeObserver || (ec.ResizeObserver = Xb,
        ec.ResizeObserver._stub = Xb);
        var fc = self;
        fc.AbortController || (Object.defineProperty(fc, "AbortController", {
            configurable: !0,
            enumerable: !1,
            writable: !0,
            value: ba
        }),
        Object.defineProperty(fc, "AbortSignal", {
            configurable: !0,
            enumerable: !1,
            writable: !0,
            value: ca
        }))
    }
    let gc = ["amp-mustache"];
    function hc(a) {
        if (!a)
            return null;
        var b = a.match(/^(.*)\/(.*)-([0-9.]+|latest)(\.max)?\.(?:js|mjs)$/i);
        let c = b ? b[2] : void 0;
        b = b ? b[3] : void 0;
        return c && b ? {
            extensionId: c,
            extensionVersion: b
        } : null
    }
    function ic(a, b, c) {
        let d = a.document.createElement("script");
        d.async = !0;
        b.startsWith("_") ? c = "" : d.setAttribute(0 <= gc.indexOf(b) ? "custom-template" : "custom-element", b);
        d.setAttribute("data-script", b);
        d.setAttribute("i-amphtml-inserted", "");
        d.setAttribute("type", "module");
        let e = a.document.head.querySelector("script[nonce]");
        e && d.setAttribute("nonce", e.getAttribute("nonce"));
        d.setAttribute("crossorigin", "anonymous");
        a = c;
        c = F.cdn;
        let f = G().rtvVersion;
        d.src = `${c}/rtv/${f}/v0/${b}${a ? "-" + a : ""}.mjs`;
        return d
    }
    function jc(a, b, c, d, e=!0) {
        a = a.document.head.querySelectorAll(`script[src*="/${b}-"]${":not([i-amphtml-loaded-new-version])" + (e ? "" : ":not([i-amphtml-inserted])")}`);
        let f = [];
        for (let g = 0; g < a.length; g++) {
            let h = a[g]
              , k = hc(h.src);
            if (!k)
                continue;
            let l = k.extensionVersion;
            k.extensionId == b && (b.startsWith("_") || l == c || "latest" == l && d) && f.push(h)
        }
        return f
    }
    function kc(a) {
        if (!a)
            return [];
        let b = a.querySelectorAll("script[custom-element],script[custom-template]")
          , c = [];
        for (let d = 0; d < b.length; d++) {
            let e = b[d]
              , f = e.getAttribute("custom-element") || e.getAttribute("custom-template")
              , g = hc(e.src);
            f && g && c.push({
                script: e,
                extensionId: f,
                extensionVersion: g.extensionVersion
            })
        }
        return c
    }
    function M(a, b, c, d) {
        a = lc(a);
        mc(a, a, b, c);
        d && nc(a, b)
    }
    function N(a, b, c, d) {
        let e = O(a)
          , f = P(e);
        mc(f, e, b, c);
        d && nc(f, b)
    }
    function Q(a, b) {
        a = lc(a);
        return nc(a, b)
    }
    function R(a) {
        return nc(a, "timer")
    }
    function oc(a, b) {
        a = lc(a);
        return pc(a, b) ? nc(a, b) : null
    }
    function S(a, b) {
        var c = O(a);
        c = P(c);
        return nc(c, b)
    }
    function qc(a, b) {
        a = O(a);
        a = P(a);
        return pc(a, b) ? nc(a, b) : null
    }
    function rc(a, b) {
        return sc(P(a), b)
    }
    function lc(a) {
        return a.__AMP_TOP || (a.__AMP_TOP = a)
    }
    function O(a) {
        if (a.nodeType) {
            let b = K(a);
            return Q(b, "ampdoc").getAmpDoc(a)
        }
        return a
    }
    function P(a) {
        a = O(a);
        return a.isSingleDoc() ? a.win : a
    }
    function nc(a, b) {
        pc(a, b);
        a = tc(a)[b];
        a.obj || (a.obj = new a.ctor(a.context),
        a.context = null,
        a.resolve && a.resolve(a.obj));
        return a.obj
    }
    function mc(a, b, c, d) {
        let e = tc(a);
        let f = e[c];
        f || (f = e[c] = {
            obj: null,
            promise: null,
            resolve: null,
            reject: null,
            context: null,
            ctor: null,
            sharedInstance: !1
        });
        f.ctor || (f.ctor = d,
        f.context = b,
        f.sharedInstance = !1,
        f.resolve && nc(a, c))
    }
    function uc(a, b) {
        let c = sc(a, b);
        if (c)
            return c;
        a = tc(a);
        a[b] = vc();
        return a[b].promise
    }
    function sc(a, b) {
        let c = tc(a)[b];
        if (c) {
            if (c.promise)
                return c.promise;
            nc(a, b);
            return c.promise = Promise.resolve(c.obj)
        }
        return null
    }
    function tc(a) {
        let b = a.__AMP_SERVICES;
        b || (b = a.__AMP_SERVICES = {});
        return b
    }
    function wc(a) {
        a = tc(a);
        for (let b in a) {
            if (!Object.prototype.hasOwnProperty.call(a, b))
                continue;
            let c = a[b];
            c.sharedInstance || (c.obj ? xc(b, c.obj) : c.promise && c.promise.then((d=>xc(b, d))))
        }
    }
    function xc(a, b) {
        if ("function" == typeof b.dispose)
            try {
                b.dispose()
            } catch (c) {
                I().error("SERVICE", "failed to dispose service", a, c)
            }
    }
    function pc(a, b) {
        a = a.__AMP_SERVICES && a.__AMP_SERVICES[b];
        return !(!a || !a.ctor)
    }
    function vc() {
        var a = new r;
        let b = a.promise
          , c = a.reject;
        a = a.resolve;
        b.catch((()=>{}
        ));
        return {
            obj: null,
            promise: b,
            resolve: a,
            reject: c,
            context: null,
            ctor: null
        }
    }
    function yc(a, b, c) {
        return zc(a, b, c, void 0).then((d=>J(d, "Service %s was requested to be provided through %s, but %s is not loaded in the current page. To fix this problem load the JavaScript file for %s in this page.", b, c, c, c)))
    }
    function zc(a, b, c, d) {
        let e = rc(a, b);
        if (e)
            return e;
        let f = O(a);
        return f.whenExtensionsKnown().then((()=>{
            let g = f.getExtensionVersion(c);
            return g ? Q(f.win, "extensions").waitForExtension(c, g) : null
        }
        )).then((g=>g ? d ? rc(a, b) : uc(P(a), b) : null))
    }
    function Ac(a) {
        let b = qc(a, "bind");
        return b ? Promise.resolve(b) : zc(a, "bind", "amp-bind")
    }
    function U(a) {
        return Q(a, "ampdoc")
    }
    function Bc(a) {
        return Q(a, "extensions")
    }
    class V {
        constructor() {
            this.da = null
        }
        add(a) {
            this.da || (this.da = []);
            this.da.push(a);
            return ()=>{
                this.remove(a)
            }
        }
        remove(a) {
            this.da && Ia(this.da, a)
        }
        removeAll() {
            this.da && (this.da.length = 0)
        }
        fire(a) {
            if (this.da)
                for (let b of this.da)
                    b(a)
        }
        getHandlerCount() {
            var a, b;
            return null !== (a = null === (b = this.da) || void 0 === b ? void 0 : b.length) && void 0 !== a ? a : 0
        }
    }
    class Cc {
        constructor() {
            this.qa = v();
            this.ta = null
        }
        get(a) {
            a = this.qa[a];
            return null == a ? null : a
        }
        whenSignal(a) {
            var b;
            let c = null === (b = this.ta) || void 0 === b ? void 0 : b[a];
            c || (b = this.qa[a],
            c = null != b ? {
                promise: "number" == typeof b ? Promise.resolve(b) : Promise.reject(b)
            } : new r,
            this.ta || (this.ta = v()),
            this.ta[a] = c);
            return c.promise
        }
        signal(a, b) {
            var c;
            if (null == this.qa[a]) {
                var d = null !== b && void 0 !== b ? b : Date.now();
                this.qa[a] = d;
                a = null === (c = this.ta) || void 0 === c ? void 0 : c[a];
                null !== a && void 0 !== a && a.resolve && (a.resolve(d),
                a.resolve = void 0,
                a.reject = void 0)
            }
        }
        rejectSignal(a, b) {
            var c;
            null == this.qa[a] && (this.qa[a] = b,
            a = null === (c = this.ta) || void 0 === c ? void 0 : c[a],
            null !== a && void 0 !== a && a.reject && (a.reject(b),
            a.promise.catch((()=>{}
            )),
            a.resolve = void 0,
            a.reject = void 0))
        }
        reset(a) {
            var b;
            this.qa[a] && delete this.qa[a];
            let c = null === (b = this.ta) || void 0 === b ? void 0 : b[a];
            c && !c.resolve && delete this.ta[a]
        }
    }
    function Dc(a) {
        return "loading" != a.readyState && "uninitialized" != a.readyState
    }
    function Ec(a) {
        return "complete" == a.readyState
    }
    function Fc(a, b) {
        Gc(a, Dc, b)
    }
    function Gc(a, b, c) {
        let d = b(a);
        if (d)
            c(a);
        else {
            let e = ()=>{
                b(a) && (d || (d = !0,
                c(a)),
                a.removeEventListener("readystatechange", e))
            }
            ;
            a.addEventListener("readystatechange", e)
        }
    }
    function Hc(a) {
        return new Promise((b=>{
            Fc(a, b)
        }
        ))
    }
    function Ic(a) {
        return new Promise((b=>{
            Gc(a, Ec, b)
        }
        ))
    }
    let Jc;
    let Kc = "Webkit webkit Moz moz ms O o".split(" ")
      , Lc = {
        getPropertyPriority: ()=>"",
        getPropertyValue: ()=>""
    };
    function Mc(a, b, c) {
        if (b.startsWith("--"))
            return b;
        Jc || (Jc = v());
        let d = Jc[b];
        if (!d || c) {
            d = b;
            if (void 0 === a[b]) {
                var e = b.charAt(0).toUpperCase() + b.slice(1);
                a: {
                    for (let g = 0; g < Kc.length; g++) {
                        let h = Kc[g] + e;
                        if (void 0 !== a[h]) {
                            e = h;
                            break a
                        }
                    }
                    e = ""
                }
                let f = e;
                void 0 !== a[f] && (d = f)
            }
            c || (Jc[b] = d)
        }
        return d
    }
    function Nc(a, b) {
        a = a.style;
        for (let c in b)
            a.setProperty(Mc(a, c), String(b[c]), "important")
    }
    function W(a, b, c, d) {
        if (b = Mc(a.style, b, void 0)) {
            var e = d ? c + d : c;
            b.startsWith("--") ? a.style.setProperty(b, e) : a.style[b] = e
        }
    }
    function Oc(a, b) {
        for (let c in b)
            W(a, c, b[c])
    }
    function Pc(a, b) {
        void 0 === b && (b = a.hasAttribute("hidden"));
        b ? a.removeAttribute("hidden") : a.setAttribute("hidden", "")
    }
    function Qc(a) {
        return "number" == typeof a ? `${a}px` : a
    }
    function Rc(a, b) {
        for (let c = 0; c < b.length; c++)
            W(a, b[c], null)
    }
    function Sc(a) {
        let b = Mc(a, "visibilityState", !0);
        if (a[b])
            return a[b];
        let c = Mc(a, "hidden", !0);
        return a[c] ? a[c] ? "hidden" : "visible" : "visible"
    }
    function Tc(a, b) {
        if (a.addEventListener) {
            var c = Uc(a);
            c && a.addEventListener(c, b)
        }
    }
    function Vc(a, b) {
        if (a.removeEventListener) {
            var c = Uc(a);
            c && a.removeEventListener(c, b)
        }
    }
    function Uc(a) {
        a = Mc(a, "hidden", !0);
        let b = a.indexOf("Hidden");
        return -1 != b ? a.substring(0, b) + "Visibilitychange" : "visibilitychange"
    }
    class Wc {
        constructor(a) {
            this.win = a;
            this.Wb = null;
            let b = v();
            a.name && 0 == a.name.indexOf("__AMP__") && Object.assign(b, C(a.name.substring(7)));
            a.location && a.location.hash && Object.assign(b, C(a.location.hash));
            this.Wb = new Xc(a,{
                params: b
            });
            a.document.__AMPDOC = this.Wb
        }
        isSingleDoc() {
            return !!this.Wb
        }
        getSingleDoc() {
            return this.Wb
        }
        getAmpDocIfAvailable(a) {
            for (var b = a; b; ) {
                let e = a.everAttached && "function" === typeof a.getAmpDoc ? a.getAmpDoc() : null;
                if (e)
                    return e;
                b = Ib(b);
                if (!b)
                    break;
                var c = b.__AMPDOC;
                if (c)
                    return c;
                if (b.host)
                    var d = b.host;
                else
                    a: {
                        b = (b.ownerDocument || b).defaultView;
                        c = this.win || lc(b);
                        if (b && b != c && lc(b) == c)
                            try {
                                d = b.frameElement;
                                break a
                            } catch (f) {}
                        d = null
                    }
                b = d
            }
            return null
        }
        getAmpDoc(a) {
            let b = this.getAmpDocIfAvailable(a);
            if (!b)
                throw I().createError("No ampdoc found for", a);
            return b
        }
        installShadowDoc(a, b, c) {
            a = new Yc(this.win,a,b,c);
            return b.__AMPDOC = a
        }
        installFieDoc(a, b, c) {
            let d = b.document;
            a = new Zc(b,a,this.getAmpDoc(b.frameElement),c);
            return d.__AMPDOC = a
        }
    }
    class $c {
        constructor(a, b, c) {
            this.win = a;
            this.he = v();
            this.Lb = b;
            this.o = c && c.signals || new Cc;
            this.ee = c && c.params || v();
            this.ea = null;
            this.rc = {};
            let d = this.ee.visibilityState;
            this.ld = c && c.visibilityState || d || null;
            this.wb = null;
            this.we = new V;
            this.Xd = null;
            this.gd = [];
            let e = this.hd.bind(this);
            this.Lb && this.gd.push(this.Lb.onVisibilityChanged(e));
            Tc(this.win.document, e);
            this.gd.push((()=>Vc(this.win.document, e)));
            this.hd()
        }
        dispose() {
            wc(this);
            this.gd.forEach((a=>a()))
        }
        isSingleDoc() {
            return null
        }
        getParent() {
            return this.Lb
        }
        signals() {
            return this.o
        }
        getParam(a) {
            a = this.ee[a];
            return null == a ? null : a
        }
        getMeta() {
            if (this.ea)
                return v(this.ea);
            this.ea = v();
            let a = this.win.document.head.querySelectorAll("meta[name]");
            Kb(a, (b=>{
                let c = b.getAttribute("name");
                b = b.getAttribute("content");
                c && null !== b && void 0 === this.ea[c] && (this.ea[c] = b)
            }
            ));
            return v(this.ea)
        }
        getMetaByName(a) {
            if (!a)
                return null;
            a = this.getMeta()[a];
            return void 0 !== a ? a : null
        }
        setMetaByName() {}
        declaresExtension(a, b) {
            let c = this.rc[a];
            return c ? !b || c === b : !1
        }
        declareExtension(a, b) {
            this.rc[a] = b
        }
        getExtensionVersion(a) {
            return this.rc[a] || null
        }
        setExtensionsKnown() {
            this.o.signal("-ampdoc-ext-known")
        }
        whenExtensionsKnown() {
            return this.o.whenSignal("-ampdoc-ext-known")
        }
        getRootNode() {
            return null
        }
        getHeadNode() {}
        isBodyAvailable() {
            return !1
        }
        getBody() {
            return null
        }
        waitForBodyOpen() {
            return null
        }
        isReady() {
            return null
        }
        whenReady() {
            return null
        }
        getUrl() {
            return null
        }
        getElementById(a) {
            return this.getRootNode().getElementById(a)
        }
        contains(a) {
            return this.getRootNode().contains(a)
        }
        overrideVisibilityState(a) {
            this.ld != a && (this.ld = a,
            this.hd())
        }
        hd() {
            let a = Sc(this.win.document);
            let b = "visible";
            for (let f = this.Lb; f; f = f.getParent())
                if ("visible" != f.getVisibilityState()) {
                    b = f.getVisibilityState();
                    break
                }
            let c;
            let d = this.ld || "visible";
            c = "visible" == d && "visible" == b && "visible" == a ? "visible" : "hidden" == a && "paused" == d ? a : "paused" == d || "inactive" == d ? d : "paused" == b || "inactive" == b ? b : "prerender" == d || "prerender" == a || "prerender" == b ? "prerender" : "hidden";
            if (this.wb != c) {
                if ("visible" == c) {
                    let f;
                    let g = this.win.performance;
                    if (null == this.wb) {
                        var e;
                        f = Math.floor(null !== (e = g.timeOrigin) && void 0 !== e ? e : g.timing.navigationStart)
                    } else
                        f = Math.floor(g.now());
                    this.Xd = f;
                    this.o.signal("-ampdoc-first-visible", f);
                    this.o.signal("-ampdoc-next-visible", f)
                } else
                    this.o.reset("-ampdoc-next-visible");
                this.wb = c;
                this.we.fire()
            }
        }
        whenFirstVisible() {
            return this.o.whenSignal("-ampdoc-first-visible").then((()=>{}
            ))
        }
        whenNextVisible() {
            return this.o.whenSignal("-ampdoc-next-visible").then((()=>{}
            ))
        }
        getFirstVisibleTime() {
            return this.o.get("-ampdoc-first-visible")
        }
        getLastVisibleTime() {
            return this.Xd
        }
        getVisibilityState() {
            return this.wb
        }
        isVisible() {
            return "visible" == this.wb
        }
        hasBeenVisible() {
            return null != this.getLastVisibleTime()
        }
        onVisibilityChanged(a) {
            return this.we.add(a)
        }
        registerSingleton(a) {
            return this.he[a] ? !1 : this.he[a] = !0
        }
    }
    class Xc extends $c {
        constructor(a, b) {
            super(a, null, b);
            this.Sa = this.win.document.body ? Promise.resolve(this.win.document.body) : Db(this.win.document).then((()=>this.getBody()));
            this.mb = Hc(this.win.document)
        }
        isSingleDoc() {
            return !0
        }
        getRootNode() {
            return this.win.document
        }
        getUrl() {
            return this.win.location.href
        }
        getHeadNode() {
            return this.win.document.head
        }
        isBodyAvailable() {
            return !!this.win.document.body
        }
        getBody() {
            return this.win.document.body
        }
        waitForBodyOpen() {
            return this.Sa
        }
        isReady() {
            return Dc(this.win.document)
        }
        whenReady() {
            return this.mb
        }
    }
    class Yc extends $c {
        constructor(a, b, c, d) {
            super(a, null, d);
            this.vb = b;
            this.le = c;
            this.hc = null;
            let e = new r;
            this.Sa = e.promise;
            this.sd = e.resolve;
            this.ob = !1;
            let f = new r;
            this.mb = f.promise;
            this.nb = f.resolve
        }
        isSingleDoc() {
            return !1
        }
        getRootNode() {
            return this.le
        }
        getUrl() {
            return this.vb
        }
        getHeadNode() {
            return this.le
        }
        isBodyAvailable() {
            return !!this.hc
        }
        getBody() {
            return this.hc
        }
        setBody(a) {
            this.hc = a;
            this.sd(a);
            this.sd = void 0
        }
        waitForBodyOpen() {
            return this.Sa
        }
        isReady() {
            return this.ob
        }
        setReady() {
            this.ob = !0;
            this.nb();
            this.nb = void 0
        }
        whenReady() {
            return this.mb
        }
        getMeta() {
            return v(this.ea)
        }
        setMetaByName(a, b) {
            this.ea || (this.ea = v());
            this.ea[a] = b
        }
    }
    class Zc extends $c {
        constructor(a, b, c, d) {
            super(a, c, d);
            this.vb = b;
            this.Sa = this.win.document.body ? Promise.resolve(this.win.document.body) : Db(this.win.document).then((()=>this.getBody()));
            this.ob = !1;
            a = new r;
            this.mb = a.promise;
            this.nb = a.resolve
        }
        isSingleDoc() {
            return !1
        }
        getRootNode() {
            return this.win.document
        }
        getUrl() {
            return this.vb
        }
        getHeadNode() {
            return this.win.document.head
        }
        isBodyAvailable() {
            return !!this.win.document.body
        }
        getBody() {
            return this.win.document.body
        }
        waitForBodyOpen() {
            return this.Sa
        }
        isReady() {
            return this.ob
        }
        whenReady() {
            return this.mb
        }
        setReady() {
            this.ob = !0;
            this.nb();
            this.nb = void 0
        }
    }
    function ad() {
        var a = self;
        M(a, "ampdoc", (function() {
            return new Wc(a)
        }
        ))
    }
    let bd = /^amp\-(video|.+player)|AMP-BRIGHTCOVE|AMP-DAILYMOTION|AMP-YOUTUBE|AMP-VIMEO|AMP-IMA-VIDEO/i;
    function cd(a) {
        if ("nodisplay" === a || "fixed" === a || "fixed-height" === a || "responsive" === a || "container" === a || "fill" === a || "flex-item" === a || "fluid" === a || "intrinsic" === a)
            return a
    }
    function dd(a) {
        return "fixed" == a || "fixed-height" == a || "responsive" == a || "fill" == a || "flex-item" == a || "fluid" == a || "intrinsic" == a
    }
    function ed(a) {
        if ("number" == typeof a)
            return a + "px";
        if (a && /^\d+(\.\d+)?(px|em|rem|vh|vw|vmin|vmax|cm|mm|q|in|pc|pt)?$/.test(a))
            return /^\d+(\.\d+)?$/.test(a) ? a + "px" : a
    }
    function fd(a) {
        B(/^\d+(\.\d+)?(px|em|rem|vh|vw|vmin|vmax|cm|mm|q|in|pc|pt)$/.test(a), "Invalid length value: %s", a);
        return B(/[a-z]+/i.exec(a), "Failed to read units from %s", a)[0]
    }
    function gd(a) {
        a = parseFloat(a);
        return Ka(a) ? a : void 0
    }
    function hd(a, b) {
        a.classList.add("i-amphtml-fill-content");
        b && a.classList.add("i-amphtml-replaced-content")
    }
    function id(a, b, c, d) {
        let e = Fa(a);
        for (let f of e)
            a = b.getAttribute(f),
            null !== a ? c.setAttribute(f, a) : d && c.removeAttribute(f)
    }
    function jd(a, b, c, d) {
        if (!b.trim())
            return d;
        var e = a.na[b] || a.lb[b];
        e || (e = c(a.A, b),
        kd(e, a.ya, !0));
        a.na[b] = e;
        a: {
            for (a = 0; a < e.length; a++) {
                let {query: f, value: g} = e[a];
                if (!f || f.matches) {
                    e = g;
                    break a
                }
            }
            e = ""
        }
        return e
    }
    class ld {
        constructor(a, b) {
            this.A = a;
            this.ya = b;
            this.na = {};
            this.lb = null
        }
        start() {
            this.lb = this.na;
            this.na = {}
        }
        resolveMatchQuery(a) {
            return "1" === jd(this, a, md, "1")
        }
        resolveListQuery(a) {
            return jd(this, a, nd, "")
        }
        complete() {
            for (let a in this.lb)
                a in this.na || kd(this.lb[a], this.ya, !1);
            this.lb = null
        }
        dispose() {
            for (let a in this.na)
                kd(this.na[a], this.ya, !1);
            this.na = {}
        }
    }
    function md(a, b) {
        return [{
            query: a.matchMedia(b),
            value: "1"
        }, {
            query: null,
            value: ""
        }]
    }
    function nd(a, b) {
        return b.split(",").map((c=>{
            c = c.replace(/\s+/g, " ").trim();
            if (0 != c.length) {
                var d;
                if (")" == c.charAt(c.length - 1)) {
                    let f = 1;
                    for (d = c.length - 2; 0 <= d; d--) {
                        var e = c.charAt(d);
                        "(" == e ? f-- : ")" == e && f++;
                        if (0 == f)
                            break
                    }
                    let g = d - 1;
                    if (0 < d)
                        for (d--; 0 <= d && (e = c.charAt(d),
                        "%" == e || "-" == e || "_" == e || "a" <= e && "z" >= e || "A" <= e && "Z" >= e || "0" <= e && "9" >= e); d--)
                            ;
                    if (d >= g)
                        return null
                } else
                    for (d = c.length - 2; 0 <= d && (e = c.charAt(d),
                    "%" == e || "." == e || "a" <= e && "z" >= e || "A" <= e && "Z" >= e || "0" <= e && "9" >= e); d--)
                        ;
                0 <= d ? (e = c.substring(0, d + 1).trim(),
                c = c.substring(d + 1).trim()) : e = void 0;
                return c ? {
                    query: e ? a.matchMedia(e) : null,
                    value: c
                } : null
            }
        }
        )).filter(Boolean)
    }
    function kd(a, b, c) {
        for (let d = 0; d < a.length; d++) {
            let {query: e} = a[d];
            e && (void 0 !== e.onchange ? e.onchange = c ? b : null : c ? e.addListener(b) : e.removeListener(b))
        }
    }
    let od;
    function pd(a) {
        a = a.ownerDocument || a;
        od && od.ownerDocument === a || (od = a.createElement("div"));
        return qd
    }
    function qd(a) {
        var b = od;
        b.innerHTML = a[0];
        a = b.firstElementChild;
        b.removeChild(a);
        return a
    }
    let rd = ['<i-amphtml-sizer class=i-amphtml-sizer slot=i-amphtml-svc><img alt="" role=presentation aria-hidden=true class=i-amphtml-intrinsic-sizer></i-amphtml-sizer>']
      , sd = {
        "AMP-PIXEL": {
            width: "0px",
            height: "0px"
        },
        "AMP-ANALYTICS": {
            width: "1px",
            height: "1px"
        },
        "AMP-AUDIO": null,
        "AMP-SOCIAL-SHARE": {
            width: "60px",
            height: "44px"
        }
    };
    function td(a) {
        let b = cd(a.getAttribute("layout"));
        return b ? b : ud(a).layout
    }
    function ud(a) {
        let b = a.getAttribute("layout")
          , c = a.getAttribute("width")
          , d = a.getAttribute("height")
          , e = a.getAttribute("sizes")
          , f = a.getAttribute("heights")
          , g = b ? cd(b) : null;
        B(void 0 !== g, 'Invalid "layout" value: %s, %s', b, a);
        let h = c && "auto" != c ? ed(c) : c;
        B(void 0 !== h, 'Invalid "width" value: %s, %s', c, a);
        let k = d && "fluid" != d ? ed(d) : d;
        B(void 0 !== k, 'Invalid "height" value: %s, %s', d, a);
        var l;
        (l = g && "fixed" != g && "fixed-height" != g || h && k) || (l = a.tagName,
        l = l.toUpperCase(),
        l = void 0 === sd[l]);
        if (l) {
            l = h;
            var m = k
        } else {
            l = a.tagName.toUpperCase();
            if (!sd[l]) {
                m = a.ownerDocument;
                var n = l.replace(/^AMP\-/, "");
                n = m.createElement(n);
                n.controls = !0;
                Oc(n, {
                    position: "absolute",
                    visibility: "hidden"
                });
                m.body.appendChild(n);
                sd[l] = {
                    width: (n.offsetWidth || 1) + "px",
                    height: (n.offsetHeight || 1) + "px"
                };
                m.body.removeChild(n)
            }
            m = sd[l];
            l = h || "fixed-height" == g ? h : m.width;
            m = k || m.height
        }
        n = g ? g : l || m ? "fluid" == m ? "fluid" : !m || l && "auto" != l ? m && l && (e || f) ? "responsive" : "fixed" : "fixed-height" : "container";
        "fixed" != n && "fixed-height" != n && "responsive" != n && "intrinsic" != n || B(m, 'The "height" attribute is missing: %s', a);
        "fixed-height" == n && B(!l || "auto" == l, 'The "width" attribute must be missing or "auto": %s', a);
        "fixed" != n && "responsive" != n && "intrinsic" != n || B(l && "auto" != l, 'The "width" attribute must be present and not "auto": %s', a);
        "responsive" == n || "intrinsic" == n ? B(fd(l) == fd(m), 'Length units should be the same for "width" and "height": %s, %s, %s', c, d, a) : B(null === f, '"heights" attribute must be missing: %s', a);
        return {
            layout: n,
            width: l,
            height: m
        }
    }
    function vd() {
        let a = wd();
        return b=>setTimeout(b, a())
    }
    function wd() {
        let a = 0;
        return ()=>{
            let b = Math.pow(1.5, a++);
            var c = b * (c || .3) * Math.random();
            .5 < Math.random() && (c *= -1);
            b += c;
            return 1e3 * b
        }
    }
    function xd(a, b) {
        return !!yd(a)[b]
    }
    function zd(a, b, c, d) {
        let e = xd(a, b)
          , f = null !== c && void 0 !== c ? c : !e;
        if (f != e && (yd(a)[b] = f,
        !d)) {
            let h = Ad(a);
            h[b] = f;
            b = h;
            let k = [];
            for (let l in b)
                k.push((!1 === b[l] ? "-" : "") + l);
            try {
                var g;
                null === (g = a.localStorage) || void 0 === g ? void 0 : g.setItem("amp-experiment-toggles", k.join(","))
            } catch (l) {
                H().error("EXPERIMENTS", "Failed to save experiments to localStorage.")
            }
        }
        return f
    }
    function yd(a) {
        var b, c, d, e, f;
        if (a.__AMP__EXPERIMENT_TOGGLES)
            return a.__AMP__EXPERIMENT_TOGGLES;
        a.__AMP__EXPERIMENT_TOGGLES = v();
        let g = a.__AMP__EXPERIMENT_TOGGLES
          , h = y(y({}, null !== (b = a.AMP_CONFIG) && void 0 !== b ? b : {}), null !== (c = a.AMP_EXP) && void 0 !== c ? c : JSON.parse((null === (d = a.__AMP_EXP) || void 0 === d ? void 0 : d.textContent) || "{}"));
        for (let m in h) {
            let n = h[m];
            "number" === typeof n && 0 <= n && 1 >= n && (g[m] = Math.random() < n)
        }
        let k = null === (e = a.AMP_CONFIG) || void 0 === e ? void 0 : e["allow-doc-opt-in"];
        if (A(k) && k.length) {
            let m = a.document.head.querySelector('meta[name="amp-experiments-opt-in"]');
            if (m) {
                let n = m.getAttribute("content").split(",");
                for (let q of n)
                    k.includes(q) && (g[q] = !0)
            }
        }
        Object.assign(g, Ad(a));
        let l = null === (f = a.AMP_CONFIG) || void 0 === f ? void 0 : f["allow-url-opt-in"];
        if (A(l) && l.length) {
            a = C(a.location.originalHash || a.location.hash);
            for (let m of l)
                b = a[`e-${m}`],
                "1" == b && (g[m] = !0),
                "0" == b && (g[m] = !1)
        }
        return g
    }
    function Ad(a) {
        var b;
        let c = "";
        try {
            "localStorage"in a && (c = a.localStorage.getItem("amp-experiment-toggles"))
        } catch (e) {}
        let d = (null === (b = c) || void 0 === b ? void 0 : b.split(/\s*,\s*/g)) || [];
        a = v();
        for (let e of d)
            e && ("-" == e[0] ? a[e.substr(1)] = !1 : a[e] = !0);
        return a
    }
    function Bd(a, b={}) {
        zc(a, "amp-analytics-instrumentation", "amp-analytics").then((c=>{
            c && c.triggerEventForTarget(a, "user-error", b, !1)
        }
        ))
    }
    let Cd;
    function Dd(a, b, c, d) {
        let e = a
          , f = c
          , g = l=>{
            try {
                return f(l)
            } catch (q) {
                var m, n;
                null === (m = (n = self).__AMP_REPORT_ERROR) || void 0 === m ? void 0 : m.call(n, q);
                throw q
            }
        }
        ;
        let h = Ed()
          , k = !(null === d || void 0 === d || !d.capture);
        e.addEventListener(b, g, h ? d : k);
        return ()=>{
            var l;
            null === (l = e) || void 0 === l ? void 0 : l.removeEventListener(b, g, h ? d : k);
            g = e = f = null
        }
    }
    function Ed() {
        if (void 0 !== Cd)
            return Cd;
        Cd = !1;
        try {
            let a = {
                get capture() {
                    Cd = !0
                }
            };
            self.addEventListener("test-options", null, a);
            self.removeEventListener("test-options", null, a)
        } catch (a) {}
        return Cd
    }
    function Fd(a, b, c, d) {
        c = {
            detail: c
        };
        Object.assign(c, d);
        return new a.CustomEvent(b,c)
    }
    function Gd(a, b, c) {
        return Dd(a, b, c, void 0)
    }
    function Hd(a, b, c, d) {
        let e = c;
        let f = Dd(a, b, (g=>{
            try {
                e(g)
            } finally {
                e = null,
                f()
            }
        }
        ), d);
        return f
    }
    function Id(a, b) {
        let c;
        let d = new Promise((e=>{
            c = Hd(a, "click", e, void 0)
        }
        ));
        d.then(c, c);
        b && b(c);
        return d
    }
    function Jd(a) {
        return !!(a.complete || "complete" == a.readyState || Kd(a) && 0 < a.readyState || a.document && "complete" == a.document.readyState)
    }
    function Ld(a) {
        let b, c;
        if (Jd(a))
            return Promise.resolve(a);
        let d = Kd(a);
        return d && a.__AMP_MEDIA_LOAD_FAILURE_SRC === a.currentSrc ? Promise.reject(a) : new Promise(((e,f)=>{
            b = d ? Hd(a, "loadedmetadata", e, {
                capture: !0
            }) : Hd(a, "load", e);
            if (a.tagName) {
                var g = a;
                if (d && !a.hasAttribute("src") && (g = ub(a, (h=>"SOURCE" === h.tagName)),
                !g))
                    return f(Error("Media has no source."));
                c = Hd(g, "error", f)
            }
        }
        )).then((()=>{
            c && c();
            return a
        }
        ), (()=>{
            b && b();
            Kd(a) && (a.__AMP_MEDIA_LOAD_FAILURE_SRC = a.currentSrc || !0);
            let e = a;
            e && e.src && (e = e.src);
            throw H().createError("Failed to load:", e)
        }
        ))
    }
    function Kd(a) {
        return "AUDIO" === a.tagName || "VIDEO" === a.tagName
    }
    let Md = {
        "amp-dynamic-css-classes": "[custom-element=amp-dynamic-css-classes]",
        variant: "amp-experiment",
        "amp-story-render": "amp-story[standalone]"
    };
    function Nd(a) {
        let b = Od(a).map((c=>{
            let d = uc(a, c).then((e=>e && "function" == typeof e.whenReady ? e.whenReady().then((()=>e)) : e));
            return R(a).timeoutPromise(3e3, d, `Render timeout waiting for service ${c} to be ready.`)
        }
        ));
        return Promise.all(b)
    }
    function Od(a) {
        let b = a.document;
        return Object.keys(Md).filter((c=>b.querySelector(Md[c])))
    }
    function Pd(a, b, c, d, e) {
        let f = a.getHeadNode()
          , g = Qd(f, Rd(f, b), d || !1, e || null);
        if (c) {
            let k = a.getRootNode();
            if (Sd(k, g))
                c(g);
            else
                var h = setInterval((()=>{
                    Sd(k, g) && (clearInterval(h),
                    c(g))
                }
                ), 4)
        }
    }
    function Qd(a, b, c, d) {
        let e = a.__AMP_CSS_SM;
        e || (e = a.__AMP_CSS_SM = v());
        let f = !c && d && "amp-custom" != d && "amp-keyframes" != d
          , g = c ? "amp-runtime" : f ? `amp-extension=${d}` : null;
        if (g) {
            let l = Td(a, e, g);
            if (l)
                return "STYLE" == l.tagName && l.textContent !== b && (l.textContent = b),
                l
        }
        let h = (a.ownerDocument || a).createElement("style");
        h.textContent = b;
        let k = null;
        c ? h.setAttribute("amp-runtime", "") : f ? (h.setAttribute("amp-extension", d || ""),
        k = Td(a, e, "amp-runtime")) : (d && h.setAttribute(d, ""),
        k = a.lastChild);
        Fb(a, h, k);
        g && (e[g] = h);
        return h
    }
    function Td(a, b, c) {
        return b[c] ? b[c] : (a = a.querySelector(`style[${c}], link[${c}]`)) ? b[c] = a : null
    }
    function Ud(a, b) {
        a.__AMP_CSS_TR = b
    }
    function Rd(a, b) {
        return (a = a.__AMP_CSS_TR) ? a(b) : b
    }
    let Vd = !1;
    function Wd() {
        var a = self.document;
        let b = a.defaultView;
        Db(a).then((()=>Nd(b))).catch((c=>{
            u(c);
            return []
        }
        )).then((c=>{
            Vd = !0;
            a.body.getBoundingClientRect();
            Xd(a);
            O(a).signals().signal("render-start");
            0 < c.length && S(a.documentElement, "resources").schedulePass(1, !0);
            try {
                let d = Q(b, "performance");
                d.tick("mbv");
                d.flush()
            } catch (d) {}
        }
        ))
    }
    function Yd(a) {
        Vd || (Vd = !0,
        Xd(a))
    }
    function Xd(a) {
        Oc(a.body, {
            opacity: 1,
            visibility: "visible",
            animation: "none"
        })
    }
    function Sd(a, b) {
        let c = a.styleSheets;
        for (a = 0; a < c.length; a++)
            if (c[a].ownerNode == b)
                return !0;
        return !1
    }
    let Zd = new Set(["c", "v", "a", "ad"]);
    let $d;
    let ae = ["javascript:", "data:", "vbscript:"]
      , be = a=>"string" == typeof a ? X(a) : a;
    function X(a) {
        $d || ($d = self.document.createElement("a"));
        return ce($d, a)
    }
    function ce(a, b) {
        a.href = "";
        return new URL(b,a.href)
    }
    function de(a, b, c) {
        if (!b)
            return a;
        let d = a.split("#", 2)
          , e = d[0].split("?", 2);
        let f = e[0] + (e[1] ? c ? `?${b}&${e[1]}` : `?${e[1]}&${b}` : `?${b}`);
        return f += d[1] ? `#${d[1]}` : ""
    }
    function ee(a, b) {
        return `${encodeURIComponent(a)}=${encodeURIComponent(b)}`
    }
    function fe(a, b) {
        return de(a, ge(b))
    }
    function ge(a) {
        let b = [];
        for (let c in a) {
            let d = a[c];
            if (null != d) {
                d = Fa(d);
                for (let e = 0; e < d.length; e++)
                    b.push(ee(c, d[e]))
            }
        }
        return b.join("&")
    }
    function he(a) {
        a = be(a);
        var b;
        (b = "https:" == a.protocol || "localhost" == a.hostname || "127.0.0.1" == a.hostname) || (a = a.hostname,
        b = a.length - 10,
        b = 0 <= b && a.indexOf(".localhost", b) == b);
        return b
    }
    function ie(a, b, c="source") {
        J(null != a, "%s %s must be available", b, c);
        J(he(a) || /^\/\//.test(a), '%s %s must start with "https://" or "//" or be relative and served from either https or from localhost. Invalid value: %s', b, c, a);
        return a
    }
    function je(a) {
        let b = a.indexOf("#");
        return -1 == b ? a : a.substring(0, b)
    }
    function ke(a) {
        return F.cdnProxyRegex.test(be(a).origin)
    }
    function le(a) {
        let {hash: b, origin: c, pathname: d, search: e} = X(a)
          , f = me(e);
        return c + d + f + b
    }
    function me(a) {
        return a && "?" != a ? (a = a.replace(/[?&](amp_(js[^&=]*|gsa|r|kit)|usqp)\b[^&]*/g, "").replace(/^[?&]/, "")) ? "?" + a : "" : ""
    }
    function ne(a) {
        a = be(a);
        if (!ke(a))
            return a.href;
        let b = a.pathname.split("/");
        J(Zd.has(b[1]), "Unknown path prefix in url %s", a.href);
        let c = b[2]
          , d = "s" == c ? "https://" + decodeURIComponent(b[3]) : "http://" + decodeURIComponent(c);
        J(0 < d.indexOf("."), "Expected a . in origin %s", d);
        b.splice(1, "s" == c ? 3 : 2);
        return d + b.join("/") + me(a.search) + (a.hash || "")
    }
    function oe(a, b) {
        b = be(b);
        return new URL(a,b.href).toString()
    }
    function pe(a, b) {
        qe(b);
        let c = X(ne(a.location.href)).origin;
        return de(b, ee("__amp_source_origin", c), void 0)
    }
    function qe(a) {
        let b = X(a)
          , c = C(b.search);
        J(!("__amp_source_origin"in c), "Source origin is not allowed in %s", a)
    }
    let re = self.__AMP_ERRORS || [];
    self.__AMP_ERRORS = re;
    function se(a) {
        se = vd();
        return se(a)
    }
    function te(a) {
        try {
            return JSON.stringify(a)
        } catch (b) {
            return String(a)
        }
    }
    function ue(a, b) {
        try {
            if (a)
                if (void 0 !== a.message)
                    a = fa(a);
                else {
                    let d = a;
                    a = Error(te(d));
                    a.origError = d
                }
            else
                a = Error("Unknown error");
            if (a.reported)
                return a;
            a.reported = !0;
            if (a.messageArray) {
                let d = Ha(a.messageArray, (e=>null === e || void 0 === e ? void 0 : e.tagName));
                -1 < d && (a.associatedElement = a.messageArray[d])
            }
            let c = b || a.associatedElement;
            c && c.classList && c.classList.add("i-amphtml-error");
            if (self.console && (Ma(a.message) || !a.expected)) {
                let d = console.error || console.log;
                a.messageArray ? d.apply(console, a.messageArray) : c ? d.call(console, a.message, c) : d.call(console, a.message)
            }
            c && c.ba && c.ba("amp:error", a.message);
            ve.call(self, void 0, void 0, void 0, void 0, a)
        } catch (c) {
            setTimeout((function() {
                throw c
            }
            ))
        }
        return a
    }
    function we() {
        return Error("CANCELLED")
    }
    function xe(a) {
        return a ? "string" == typeof a ? a.startsWith("BLOCK_BY_CONSENT") : "string" == typeof a.message ? a.message.startsWith("BLOCK_BY_CONSENT") : !1 : !1
    }
    function ye() {
        var a = self;
        a.onerror = ve;
        a.addEventListener("unhandledrejection", (b=>{
            !b.reason || "CANCELLED" !== b.reason.message && "BLOCK_BY_CONSENT" !== b.reason.message && "AbortError" !== b.reason.message ? ue(b.reason || Error("rejected promise " + b)) : b.preventDefault()
        }
        ))
    }
    function ve(a, b, c, d, e) {
        !this || !this.document || e && e.expected || Yd(this.document);
        let f = !1;
        try {
            f = ze()
        } catch (h) {}
        if (!(f && .01 < Math.random())) {
            var g = Ae(a, b, c, d, e, f);
            g && se((()=>{
                try {
                    return Be(this, g).catch((()=>{}
                    ))
                } catch (h) {}
            }
            ))
        }
    }
    function Be(a, b) {
        return b.pt && .9 > Math.random() ? p() : Ce(a, b).then((c=>{
            if (!c) {
                let d = new XMLHttpRequest;
                d.open("POST", .1 > Math.random() ? F.betaErrorReporting : F.errorReporting, !0);
                d.send(JSON.stringify(b))
            }
        }
        ))
    }
    function Ce(a, b) {
        a = U(a);
        if (!a.isSingleDoc())
            return Promise.resolve(!1);
        let c = a.getSingleDoc();
        if (!c.getRootNode().documentElement.hasAttribute("report-errors-to-viewer"))
            return Promise.resolve(!1);
        let d = S(c, "viewer");
        return d.hasCapability("errorReporter") ? d.isTrustedViewer().then((e=>{
            if (!e)
                return !1;
            d.sendMessage("error", w({
                m: b.m,
                a: b.a,
                s: b.s,
                el: b.el,
                ex: b.ex,
                v: b.v,
                pt: b.pt
            }));
            return !0
        }
        )) : Promise.resolve(!1)
    }
    function Ae(a, b, c, d, e, f) {
        var g = a;
        e && (g = e.message ? e.message : String(e));
        g || (g = "Unknown error");
        a = g;
        let h = !(!e || !e.expected);
        if (!/_reported_/.test(a) && "CANCELLED" != a) {
            var k = !(self && self.window)
              , l = Math.random();
            if (-1 != a.indexOf("Failed to load:") || "Script error." == a || k)
                if (h = !0,
                .001 < l)
                    return;
            var m = Ma(a);
            if (!(m && .1 < l)) {
                g = Object.create(null);
                g.v = G().rtvVersion;
                g.noAmp = f ? "1" : "0";
                g.m = a.replace("​​​", "");
                g.a = m ? "1" : "0";
                g.ex = h ? "1" : "0";
                g.dw = k ? "1" : "0";
                var n = "1p";
                n = "esm";
                g.esm = "1";
                g.rt = n;
                "inabox" === n && (g.adid = G().a4aId);
                var q;
                f = !(null === (q = self.AMP_CONFIG) || void 0 === q || !q.canary);
                g.ca = f ? "1" : "0";
                var E;
                q = (null === (E = self.AMP_CONFIG) || void 0 === E ? void 0 : E.type) || "unknown";
                g.bt = q;
                self.location.ancestorOrigins && self.location.ancestorOrigins[0] && (g.or = self.location.ancestorOrigins[0]);
                self.viewerState && (g.vs = self.viewerState);
                self.parent && self.parent != self && (g.iem = "1");
                if (self.AMP && self.AMP.viewer) {
                    let t = self.AMP.viewer.getResolvedViewerUrl()
                      , T = self.AMP.viewer.maybeGetMessagingOrigin();
                    t && (g.rvu = t);
                    T && (g.mso = T)
                }
                var z = [];
                E = self.__AMP__EXPERIMENT_TOGGLES || null;
                for (let t in E)
                    z.push(`${t}=${E[t] ? "1" : "0"}`);
                g.exps = z.join(",");
                if (e) {
                    var x;
                    g.el = (null === (x = e.associatedElement) || void 0 === x ? void 0 : x.tagName) || "u";
                    e.args && (g.args = JSON.stringify(e.args));
                    m || e.ignoreStack || !e.stack || (g.s = e.stack);
                    e.message && (e.message += " _reported_")
                } else
                    g.f = b || "",
                    g.l = c || "",
                    g.c = d || "";
                g.r = self.document ? self.document.referrer : "";
                g.ae = re.join(",");
                g.fr = self.location.originalHash || self.location.hash;
                "production" === g.bt && (g.pt = "1");
                b = a;
                25 <= re.length && re.splice(0, re.length - 25 + 1);
                re.push(b);
                return g
            }
        }
    }
    function ze() {
        var a = self;
        if (!a.document)
            return !1;
        a = a.document.querySelectorAll("script[src]");
        for (let b = 0; b < a.length; b++)
            if (!ke(a[b].src.toLowerCase()))
                return !0;
        return !1
    }
    function De(a) {
        return a.__AMP__RESOURCE
    }
    function Ee(a) {
        if (a.aa) {
            var b = a.getDistanceViewportRatio();
            for (let c in a.aa)
                a.isWithinViewportRatio(parseFloat(c), b) && (a.aa[c].resolve(),
                delete a.aa[c])
        }
    }
    function Fe(a, b, c, d) {
        a.Ea = null;
        if (c.aborted)
            throw c = I().createError("layoutComplete race"),
            c.associatedElement = a.element,
            I().expectedError("Resource", c),
            we();
        a.Nc && (a.Nc(),
        a.Nc = null);
        a.fb = null;
        a.H = b ? 4 : 5;
        a.Wd = d;
        if (!b)
            return Promise.reject(d)
    }
    class Ge {
        constructor(a, b, c) {
            b.__AMP__RESOURCE = this;
            this.Xe = a;
            this.element = b;
            this.debugid = b.tagName.toLowerCase() + "#" + a;
            this.hostWin = b.ownerDocument.defaultView;
            this.B = c;
            this.ff = b.hasAttribute("placeholder");
            this.bb = !1;
            this.La = void 0;
            this.H = b.isBuilt() ? 1 : 0;
            0 == this.H && b.isBuilding() && this.build();
            this.Yc = -1;
            this.ja = 0;
            this.Wd = this.Ea = null;
            this.Eb = !1;
            this.R = L(-1e4, -1e4, 0, 0);
            this.Dc = null;
            this.Kc = !1;
            this.fb = this.aa = null;
            this.Xc = void 0;
            a = new r;
            this.jf = a.promise;
            this.Nc = a.resolve;
            this.Jc = !1
        }
        getId() {
            return this.Xe
        }
        updateOwner(a) {
            this.La = a
        }
        getOwner() {
            if (void 0 === this.La) {
                for (let a = this.element; a; a = a.parentElement)
                    if (a.__AMP__OWNER) {
                        this.La = a.__AMP__OWNER;
                        break
                    }
                void 0 === this.La && (this.La = null)
            }
            return this.La
        }
        hasOwner() {
            return !!this.getOwner()
        }
        getLayoutPriority() {
            return -1 != this.Yc ? this.Yc : this.element.getLayoutPriority()
        }
        updateLayoutPriority(a) {
            this.Yc = a
        }
        getState() {
            return this.H
        }
        isBuilt() {
            return this.element.isBuilt()
        }
        isBuilding() {
            return this.bb
        }
        whenBuilt() {
            return this.element.signals().whenSignal("res-built")
        }
        build() {
            if (this.bb || !this.element.isUpgraded())
                return null;
            this.bb = !0;
            return this.element.buildInternal().then((()=>{
                this.bb = !1;
                this.H = 1;
                this.element.signals().signal("res-built")
            }
            ), (a=>{
                this.maybeReportErrorOnBuildFailure(a);
                this.bb = !1;
                this.element.signals().rejectSignal("res-built", a);
                throw a
            }
            ))
        }
        maybeReportErrorOnBuildFailure(a) {
            xe(a) || I().error("Resource", "failed to build:", this.debugid, a)
        }
        changeSize(a, b, c) {
            this.element.applySize(a, b, c);
            this.requestMeasure()
        }
        overflowCallback(a, b, c, d) {
            a && (this.Xc = {
                height: b,
                width: c,
                margins: d
            });
            this.element.overflowCallback(a, b, c, d)
        }
        resetPendingChangeSize() {
            this.Xc = void 0
        }
        getPendingChangeSize() {
            return this.Xc
        }
        getUpgradeDelayMs() {
            return this.element.getUpgradeDelayMs()
        }
        measure() {
            if (!(this.ff && this.element.parentElement && this.element.parentElement.tagName.startsWith("AMP-")) || "__AMP__RESOURCE"in this.element.parentElement)
                if (this.element.ownerDocument && this.element.ownerDocument.defaultView) {
                    this.Kc = !1;
                    var a = this.R;
                    let d = S(this.element, "viewport");
                    this.R = d.getLayoutRect(this.element);
                    let e = !1;
                    if (d.supportsPositionFixed() && this.isDisplayed()) {
                        let {win: f} = this.B.getAmpdoc()
                          , g = f.document.body;
                        for (let h = this.element; h && h != g; h = h.offsetParent) {
                            if (h.isAlwaysFixed && h.isAlwaysFixed()) {
                                e = !0;
                                break
                            }
                            if (d.isDeclaredFixed(h) && "fixed" == (f.getComputedStyle(h) || Lc).position) {
                                e = !0;
                                break
                            }
                        }
                    }
                    if (this.Eb = e)
                        this.R = Pb(this.R, -d.getScrollLeft(), -d.getScrollTop());
                    var b = this.R
                      , c = !(a.width == b.width && a.height === b.height);
                    (1 == this.H || a.top != b.top || c) && this.element.isUpgraded() && (1 == this.H ? this.H = 2 : 4 != this.H && 5 != this.H || !this.element.isRelayoutNeeded() || (this.H = 2));
                    this.hasBeenMeasured() || (this.Dc = b);
                    this.element.updateLayoutBox(b, c)
                } else
                    this.H = 1
        }
        ensureMeasured() {
            return this.hasBeenMeasured() ? p() : Q(this.hostWin, "vsync").measure((()=>this.measure()))
        }
        completeCollapse() {
            Pc(this.element, !1);
            this.R = L(this.R.left, this.R.top, 0, 0);
            this.Eb = !1;
            this.element.updateLayoutBox(this.getLayoutBox());
            let a = this.getOwner();
            a && a.collapsedCallback(this.element)
        }
        completeExpand() {
            Pc(this.element, !0);
            this.requestMeasure()
        }
        isMeasureRequested() {
            return this.Kc
        }
        hasBeenMeasured() {
            return !!this.Dc
        }
        requestMeasure() {
            this.Kc = !0
        }
        getLayoutSize() {
            var a = this.R;
            return {
                width: a.width,
                height: a.height
            }
        }
        getLayoutBox() {
            if (!this.Eb)
                return this.R;
            let a = S(this.element, "viewport");
            return Pb(this.R, a.getScrollLeft(), a.getScrollTop())
        }
        getInitialLayoutBox() {
            return this.Dc || this.R
        }
        isDisplayed() {
            if (!this.element.ownerDocument || !this.element.ownerDocument.defaultView)
                return !1;
            let a = "fluid" == this.element.getLayout()
              , b = this.getLayoutBox()
              , c = 0 < b.height && 0 < b.width;
            return a || c
        }
        isFixed() {
            return this.Eb
        }
        overlaps(a) {
            var b = this.getLayoutBox();
            return b.top <= a.bottom && a.top <= b.bottom && b.left <= a.right && a.left <= b.right
        }
        prerenderAllowed() {
            return this.element.prerenderAllowed()
        }
        isBuildRenderBlocking() {
            return this.element.isBuildRenderBlocking()
        }
        whenWithinViewport(a) {
            if (!this.isLayoutPending() || !0 === a)
                return p();
            let b = String(a);
            if (this.aa && this.aa[b])
                return this.aa[b].promise;
            if (this.isWithinViewportRatio(a))
                return p();
            this.aa = this.aa || {};
            this.aa[b] = new r;
            return this.aa[b].promise
        }
        getDistanceViewportRatio() {
            let a = S(this.element, "viewport").getRect()
              , b = this.getLayoutBox()
              , c = this.B.getScrollDirection();
            let d = 1
              , e = 0;
            if (a.right < b.left || a.left > b.right)
                return {
                    distance: !1
                };
            if (a.bottom < b.top)
                e = b.top - a.bottom,
                -1 == c && (d = 2);
            else if (a.top > b.bottom)
                e = a.top - b.bottom,
                1 == c && (d = 2);
            else
                return {
                    distance: !0
                };
            return {
                distance: e,
                scrollPenalty: d,
                viewportHeight: a.height
            }
        }
        isWithinViewportRatio(a, b) {
            if ("boolean" === typeof a)
                return a;
            let {distance: c, scrollPenalty: d, viewportHeight: e} = b || this.getDistanceViewportRatio();
            return "boolean" == typeof c ? c : c < e * a / d
        }
        renderOutsideViewport() {
            Ee(this);
            return this.hasOwner() || this.isWithinViewportRatio(this.element.renderOutsideViewport())
        }
        idleRenderOutsideViewport() {
            return this.isWithinViewportRatio(this.element.idleRenderOutsideViewport())
        }
        layoutScheduled(a) {
            this.H = 3;
            this.element.layoutScheduleTime = a
        }
        layoutCanceled() {
            this.H = this.hasBeenMeasured() ? 2 : 1
        }
        startLayout() {
            if (this.fb)
                return this.fb;
            if (4 == this.H)
                return p();
            if (5 == this.H)
                return Promise.reject(this.Wd);
            this.isDisplayed();
            if (3 != this.H) {
                let b = I().createError("startLayout called but not LAYOUT_SCHEDULED", "currently: ", this.H);
                ue(b, this.element);
                return Promise.reject(b)
            }
            if (0 < this.ja && !this.element.isRelayoutNeeded())
                return this.H = 4,
                p();
            this.ja++;
            this.H = 3;
            this.Ea = new AbortController;
            let a = this.Ea.signal;
            return this.fb = new Promise(((b,c)=>{
                Q(this.hostWin, "vsync").mutate((()=>{
                    let d;
                    try {
                        d = this.element.layoutCallback(a)
                    } catch (e) {
                        c(e)
                    }
                    Promise.resolve(d).then(b, c)
                }
                ));
                a.onabort = ()=>c(we())
            }
            )).then((()=>Fe(this, !0, a)), (b=>Fe(this, !1, a, b)))
        }
        isLayoutPending() {
            return 4 != this.H && 5 != this.H
        }
        loadedOnce() {
            return this.element.R1() ? this.element.whenLoaded() : this.jf
        }
        isInViewport() {
            this.Jc && Ee(this);
            return this.Jc
        }
        setInViewport(a) {
            this.Jc = a
        }
        unlayout() {
            0 != this.H && 1 != this.H && 2 != this.H && (this.Ea && (this.Ea.abort(),
            this.Ea = null),
            this.setInViewport(!1),
            this.element.unlayoutCallback() && (this.element.togglePlaceholder(!0),
            this.H = 1,
            this.ja = 0,
            this.fb = null))
        }
        getTaskId(a) {
            return this.debugid + "#" + a
        }
        pause() {
            this.element.pause()
        }
        pauseOnRemove() {
            this.element.pause()
        }
        resume() {
            this.element.resume()
        }
        unload() {
            this.element.unmount()
        }
        disconnect() {
            delete this.element.__AMP__RESOURCE;
            this.element.disconnect(!0)
        }
    }
    function He(a, b) {
        for (let c = 0; c < b.length; c++) {
            let {isIntersecting: d, target: e} = b[c]
              , f = e
              , g = a.T.get(f);
            if (!g)
                continue;
            let h = d || g.isIntersecting;
            h !== g.isIntersecting && a.T.set(f, {
                asap: g.asap,
                isIntersecting: h
            });
            h && Ie(a, f)
        }
    }
    function Je(a) {
        let b = a.j.isReady()
          , c = a.Ma;
        if (c)
            for (let d = 0; d < c.length; d++) {
                let e = c[d];
                if (b || Jb(e, a.j.getRootNode()))
                    c.splice(d--, 1),
                    Ie(a, e)
            }
        b && (a.Ma = null,
        Ke(a))
    }
    function Le(a) {
        let b = a.j.getVisibilityState();
        "visible" != b && "hidden" != b && "prerender" != b || a.T.forEach(((c,d)=>Ie(a, d)))
    }
    function Me(a, b) {
        let c = a.Ma;
        c ? (c.includes(b) || c.push(b),
        Je(a)) : Ie(a, b)
    }
    function Ke(a) {
        a.j.isReady() && !a.je && (a.je = !0,
        a.j.win.setTimeout((()=>{
            a.j.signals().signal("ready-scan")
        }
        ), 50))
    }
    function Ie(a, b) {
        var c = a.Ma;
        c = !(c && c.includes(b));
        let {asap: d, isIntersecting: e} = a.T.get(b) || {
            asap: !1,
            isIntersecting: !1
        }
          , f = a.j.getVisibilityState();
        c && (d || e) && ("visible" == f || "hidden" == f || "prerender" == f && b.prerenderAllowed()) && (a.unschedule(b),
        a = a.j.win,
        (d || 0 >= b.getBuildPriority() ? a.setTimeout : a.requestIdleCallback || a.setTimeout)((()=>b.mountInternal())))
    }
    class Ne {
        constructor(a) {
            this.j = a;
            let b = a.win;
            this.Uc = new b.IntersectionObserver((c=>He(this, c)),{
                root: Lb(b) ? b.document : null,
                rootMargin: "250% 31.25%"
            });
            this.ma = new Map;
            this.T = new Map;
            this.Ma = [];
            this.je = !1;
            a.whenReady().then((()=>Je(this)));
            this.md = a.onVisibilityChanged((()=>Le(this)))
        }
        dispose() {
            this.Uc.disconnect();
            this.T.clear();
            this.md && (this.md(),
            this.md = null)
        }
        scheduleAsap(a) {
            this.T.set(a, {
                asap: !0,
                isIntersecting: !1
            });
            Me(this, a)
        }
        schedule(a) {
            this.T.has(a) || (a.deferredMount() ? (this.T.set(a, {
                asap: !1,
                isIntersecting: !1
            }),
            this.Uc.observe(a),
            0 < this.ma.size && this.ma.forEach(((b,c)=>{
                a !== c && c.contains(a) && b.observe(a)
            }
            ))) : this.T.set(a, {
                asap: !1,
                isIntersecting: !0
            }),
            Me(this, a))
        }
        unschedule(a) {
            this.T.has(a) && (this.T.delete(a),
            this.Uc.unobserve(a),
            0 < this.ma.size && this.ma.forEach((b=>{
                b.unobserve(a)
            }
            )),
            this.Ma && (Ia(this.Ma, a),
            Je(this)))
        }
        setContainer(a, b) {
            if (!this.ma.has(a)) {
                var c = new this.j.win.IntersectionObserver((d=>He(this, d)),{
                    root: b || a,
                    rootMargin: "250% 31.25%"
                });
                this.ma.set(a, c);
                this.T.forEach((({asap: d},e)=>{
                    !d && e !== a && a.contains(e) && c.observe(e)
                }
                ))
            }
        }
        removeContainer(a) {
            let b = this.ma.get(a);
            b && (b.disconnect(),
            this.ma.delete(a))
        }
    }
    function Oe(a) {
        N(a, "scheduler", Ne);
        return S(a, "scheduler")
    }
    class Pe {
        constructor() {
            this.P = []
        }
        peek() {
            let a = this.length;
            return a ? this.P[a - 1].item : null
        }
        enqueue(a, b) {
            if (isNaN(b))
                throw Error("Priority must not be NaN.");
            let c = -1
              , d = 0
              , e = this.length;
            for (; d <= e; ) {
                c = Math.floor((d + e) / 2);
                if (c === this.length)
                    break;
                if (this.P[c].priority < b)
                    d = c + 1;
                else if (0 < c && this.P[c - 1].priority >= b)
                    e = c - 1;
                else
                    break
            }
            this.P.splice(c, 0, {
                item: a,
                priority: b
            })
        }
        forEach(a) {
            let b = this.length;
            for (; b--; )
                a(this.P[b].item)
        }
        dequeue() {
            return this.length ? this.P.pop().item : null
        }
        get length() {
            return this.P.length
        }
    }
    let Qe = /nochunking=1/.test(self.location.hash)
      , Re = !1;
    let Se = p();
    function Te(a) {
        N(a, "chunk", Ue);
        return S(a, "chunk")
    }
    function Ve(a, b, c) {
        if (Qe)
            Se.then(b);
        else {
            var d = Te(a.documentElement || a);
            d.runForStartup(b);
            c && d.runForStartup((()=>{
                d.rd = !0
            }
            ))
        }
    }
    function We(a, b) {
        if ("run" != a.state) {
            a.state = "run";
            try {
                a.uc(b)
            } catch (c) {
                throw a.de(),
                c
            }
        }
    }
    class Xe {
        constructor(a) {
            this.state = "not_run";
            this.uc = a
        }
        Mf() {
            return this.uc.displayName || this.uc.name
        }
        de() {}
        Rd() {
            return !1
        }
        ve() {
            return !1
        }
    }
    class Ye extends Xe {
        constructor(a, b) {
            super(a);
            this.yd = b
        }
        de() {
            Yd(self.document)
        }
        Rd() {
            return this.yd.ampdoc.isVisible()
        }
        ve() {
            return this.yd.Bd
        }
    }
    function Ze(a, b) {
        let c = a.ia.peek();
        for (; c && "not_run" !== c.state; )
            a.ia.dequeue(),
            c = a.ia.peek();
        c && b && a.ia.dequeue();
        return c
    }
    function af(a) {
        a.A.postMessage("amp-macro-task", "*")
    }
    function bf(a) {
        !Re && a.rd && (a.Df ? a.A.navigator.scheduling.isInputPending() : 5 < a.Wa) ? (a.Wa = 0,
        af(a)) : Se.then((()=>{
            a.vd(null)
        }
        ))
    }
    class Ue {
        constructor(a) {
            this.ampdoc = a;
            this.A = a.win;
            this.ia = new Pe;
            this.vd = this.Id.bind(this);
            this.Wa = 0;
            this.Df = !(!this.A.navigator.scheduling || !this.A.navigator.scheduling.isInputPending);
            this.Ub = !1;
            this.rd = this.A.document.documentElement.hasAttribute("i-amphtml-no-boilerplate");
            this.A.addEventListener("message", (b=>{
                "amp-macro-task" == b.data && this.Id(null)
            }
            ));
            this.Bd = !1;
            uc(P(a), "viewer").then((()=>{
                this.Bd = !0
            }
            ));
            a.onVisibilityChanged((()=>{
                a.isVisible() && this.Na()
            }
            ))
        }
        run(a, b) {
            a = new Xe(a);
            this.ia.enqueue(a, b);
            this.Na()
        }
        runForStartup(a) {
            a = new Ye(a,this);
            this.ia.enqueue(a, Number.POSITIVE_INFINITY);
            this.Na()
        }
        Id(a) {
            let b = Ze(this, !0);
            if (!b)
                return this.Ub = !1,
                this.Wa = 0,
                !1;
            let c;
            try {
                c = Date.now(),
                We(b, a)
            } finally {
                Se.then().then().then().then().then().then().then().then().then((()=>{
                    this.Ub = !1;
                    this.Wa += Date.now() - c;
                    this.Na()
                }
                ))
            }
            return !0
        }
        Na() {
            if (!this.Ub) {
                var a = Ze(this);
                a && (a.Rd() ? (this.Ub = !0,
                bf(this)) : a.ve() && this.A.requestIdleCallback ? cf(this.A, this.vd) : af(this))
            }
        }
    }
    function cf(a, b) {
        function c(e) {
            if (15 > e.timeRemaining()) {
                let f = 2e3 - (Date.now() - d);
                0 >= f || e.didTimeout ? b(e) : a.requestIdleCallback(c, {
                    timeout: f
                })
            } else
                b(e)
        }
        let d = Date.now();
        a.requestIdleCallback(c, {
            timeout: 2e3
        })
    }
    class df {
        static R1() {
            return !1
        }
        static deferredMount() {
            return !0
        }
        static prerenderAllowed() {
            return !1
        }
        static usesLoading() {
            return !1
        }
        static createLoaderLogoCallback() {
            return {}
        }
        static getBuildPriority() {
            return 0
        }
        static getPreconnects() {
            return null
        }
        static requiresShadowDom() {
            return !1
        }
        constructor(a) {
            this.element = a;
            this.win = K(a);
            this.defaultActionAlias_ = this.actionMap_ = null
        }
        signals() {
            return this.element.signals()
        }
        getDefaultActionAlias() {
            return this.defaultActionAlias_
        }
        getLayoutPriority() {
            return 0
        }
        updateLayoutPriority(a) {
            this.element.getResources().updateLayoutPriority(this.element, a)
        }
        getLayout() {
            return this.element.getLayout()
        }
        getLayoutBox() {
            return this.element.getLayoutBox()
        }
        getLayoutSize() {
            return this.element.getLayoutSize()
        }
        getAmpDoc() {
            return this.element.getAmpDoc()
        }
        getVsync() {
            return Q(this.win, "vsync")
        }
        getConsentPolicy() {
            let a = null;
            this.element.hasAttribute("data-block-on-consent") && (a = this.element.getAttribute("data-block-on-consent") || "default");
            return a
        }
        isLayoutSupported(a) {
            return "nodisplay" == a
        }
        isAlwaysFixed() {
            return !1
        }
        upgradeCallback() {
            return null
        }
        buildCallback() {}
        preconnectCallback() {}
        attachedCallback() {}
        detachedCallback() {}
        setAsContainer(a) {
            this.element.setAsContainerInternal(a)
        }
        removeAsContainer() {
            this.element.removeAsContainerInternal()
        }
        isBuildRenderBlocking() {
            return !1
        }
        createPlaceholderCallback() {
            return null
        }
        renderOutsideViewport() {
            return "inabox" == G(this.win).runtime || 3
        }
        idleRenderOutsideViewport() {
            return !1
        }
        ensureLoaded() {}
        setReadyState(a, b) {
            this.element.setReadyStateInternal(a, b)
        }
        mountCallback() {}
        unmountCallback() {}
        isRelayoutNeeded() {
            return !1
        }
        layoutCallback() {
            return p()
        }
        firstLayoutCompleted() {
            this.togglePlaceholder(!1)
        }
        pauseCallback() {}
        resumeCallback() {}
        unlayoutCallback() {
            return !1
        }
        unlayoutOnPause() {
            return !1
        }
        reconstructWhenReparented() {
            return !0
        }
        loadPromise(a) {
            return Ld(a)
        }
        registerAction(a, b, c=2) {
            ef(this);
            this.actionMap_[a] = {
                handler: b,
                minTrust: c
            }
        }
        registerDefaultAction(a, b="activate", c=2) {
            this.registerAction(b, a, c);
            this.defaultActionAlias_ = b
        }
        executeAction(a) {
            var {method: b} = a;
            "activate" === b && (b = this.defaultActionAlias_ || b);
            ef(this);
            let c = this.actionMap_[b];
            J(c, `Method not found: ${b} in ${this.element.tagName}`);
            b = c.handler;
            if (a.satisfiesTrust(c.minTrust))
                return b(a)
        }
        forwardEvents(a, b) {
            let c = (A(a) ? a : [a]).map((d=>Gd(b, d, (e=>{
                Mb(this.element, d, e.data || {})
            }
            ))));
            return ()=>c.forEach((d=>d()))
        }
        getPlaceholder() {
            return this.element.getPlaceholder()
        }
        togglePlaceholder(a) {
            this.element.togglePlaceholder(a)
        }
        getFallback() {
            return this.element.getFallback()
        }
        toggleFallback(a) {
            this.element.toggleFallback(a)
        }
        toggleLoading(a, b=!1) {
            this.element.toggleLoading(a, b)
        }
        getOverflowElement() {
            return this.element.getOverflowElement()
        }
        renderStarted() {
            this.element.renderStarted()
        }
        getViewport() {
            return S(this.getAmpDoc(), "viewport")
        }
        getIntersectionElementLayoutBox() {
            return this.getLayoutBox()
        }
        collapse() {
            S(this.getAmpDoc(), "mutator").collapseElement(this.element)
        }
        attemptCollapse() {
            return S(this.getAmpDoc(), "mutator").attemptCollapse(this.element)
        }
        forceChangeHeight(a) {
            S(this.getAmpDoc(), "mutator").forceChangeSize(this.element, a, void 0)
        }
        attemptChangeHeight(a) {
            return S(this.getAmpDoc(), "mutator").requestChangeSize(this.element, a, void 0)
        }
        attemptChangeSize(a, b, c) {
            return S(this.getAmpDoc(), "mutator").requestChangeSize(this.element, a, b, void 0, c)
        }
        measureElement(a) {
            return S(this.getAmpDoc(), "mutator").measureElement(a)
        }
        mutateElement(a, b) {
            return this.measureMutateElement(null, a, b)
        }
        measureMutateElement(a, b, c) {
            return S(this.getAmpDoc(), "mutator").measureMutateElement(c || this.element, a, b)
        }
        mutateElementSkipRemeasure(a) {
            return S(this.getAmpDoc(), "mutator").mutateElement(this.element, a, !0)
        }
        collapsedCallback() {}
        expand() {
            S(this.getAmpDoc(), "mutator").expandElement(this.element)
        }
        mutatedAttributesCallback() {}
        onLayoutMeasure() {}
        user() {
            return H(this.element)
        }
        getApi() {
            return this
        }
    }
    function ef(a) {
        a.actionMap_ || (a.actionMap_ = a.win.Object.create(null))
    }
    class ff extends df {
    }
    function gf(a, b) {
        Dd(a, "message", b, void 0)
    }
    function hf(a, b, c={}, d=null) {
        c.type = a;
        c.sentinel = b;
        return "amp-" + (d || "") + JSON.stringify(c)
    }
    function jf(a) {
        if (!kf(a))
            return null;
        let b = a.indexOf("{");
        return Pa(a.substr(b), (c=>{
            u(Error(`MESSAGING: Failed to parse message: ${a}\n${c.message}`))
        }
        ))
    }
    function kf(a) {
        return "string" == typeof a && a.startsWith("amp-") && -1 != a.indexOf("{")
    }
    function lf(a) {
        try {
            return !!a.location.href && (a.test || !0)
        } catch (b) {
            return !1
        }
    }
    let mf = Date.now();
    let nf = {
        bubbles: !1
    }
      , of = ()=>!0;
    let pf;
    let qf = []
      , rf = new Set;
    function sf(a) {
        let b = tf(a);
        class c extends b {
            adoptedCallback() {
                Object.getPrototypeOf(this) !== d && Object.setPrototypeOf(this, d)
            }
        }
        let d = c.prototype;
        return c
    }
    function tf(a) {
        var b = uf;
        if (a.__AMP_BASE_CE_CLASS)
            return a.__AMP_BASE_CE_CLASS;
        let c = a.HTMLElement;
        class d extends c {
            constructor() {
                super();
                this.createdCallback()
            }
            createdCallback() {
                this.pa = this.mc = !1;
                this.xa = null;
                this.Pc = !1;
                this.X = this.ra = null;
                this.Aa = "upgrading";
                this.everAttached = !1;
                this.B = this.j = null;
                this.W = "nodisplay";
                this.ja = 0;
                this.Ic = !1;
                this.warnOnMissingOverflow = !0;
                this.layoutScheduleTime = this.Z = this.sizerElement = void 0;
                var e = a.__AMP_EXTENDED_ELEMENTS && a.__AMP_EXTENDED_ELEMENTS[this.localName];
                (this.I = e === ff ? null : e || null) || qf.push(this);
                this.h = null;
                this.Qa = 1;
                this.te = 0;
                this.Ia = this.wa = void 0;
                this.o = new Cc;
                this.I && this.o.signal("ready-upgrade");
                this.Nf = (e = oc(a, "performance")) && e.isPerformanceTrackingOn();
                this.Ja = null;
                this.__AMP_UPG_RES && (this.__AMP_UPG_RES(this),
                delete this.__AMP_UPG_RES,
                delete this.__AMP_UPG_PRM)
            }
            get readyState() {
                return this.Aa
            }
            signals() {
                return this.o
            }
            getAmpDoc() {
                return this.j
            }
            getResources() {
                return this.B
            }
            isUpgraded() {
                return 2 == this.Qa
            }
            whenUpgraded() {
                return this.o.whenSignal("upgraded")
            }
            upgrade(e) {
                this.Ia || 1 != this.Qa || (this.I = e,
                this.o.signal("ready-upgrade"),
                this.everAttached && this.bc())
            }
            markUnresolved() {
                this.I || this.classList.add("amp-unresolved", "i-amphtml-unresolved")
            }
            getUpgradeDelayMs() {
                return this.te
            }
            oc(e, f) {
                this.h = e;
                this.te = a.Date.now() - f;
                this.Qa = 2;
                this.setReadyStateInternal("building");
                this.classList.remove("amp-unresolved", "i-amphtml-unresolved");
                this.Be();
                this.ba("amp:attached");
                this.R1() || this.getResources().upgraded(this);
                this.o.signal("upgraded")
            }
            Be() {
                "nodisplay" != this.W && this.h && !this.h.isLayoutSupported(this.W) && (J(this.getAttribute("layout"), "The element did not specify a layout attribute. Check https://amp.dev/documentation/guides-and-tutorials/develop/style_and_layout/control_layout and the respective element documentation for details."),
                J(!1, `Layout not supported: ${this.W}`))
            }
            getBuildPriority() {
                return this.I ? this.I.getBuildPriority(this) : 3
            }
            getLayoutPriority() {
                return this.h ? this.h.getLayoutPriority() : 3
            }
            getDefaultActionAlias() {
                this.isUpgraded();
                return this.h.getDefaultActionAlias()
            }
            isBuilding() {
                return !!this.xa
            }
            isBuilt() {
                return this.mc
            }
            whenBuilt() {
                return this.o.whenSignal("built")
            }
            buildInternal() {
                if (this.xa)
                    return this.xa;
                this.setReadyStateInternal("building");
                let e = this.Cd();
                this.vc();
                return this.xa = e.then((()=>{
                    let f = this.Ne()
                      , g = f ? null : this.Oe();
                    if (f || g)
                        return zc(this, "consentPolicyManager", "amp-consent").then((h=>h ? f ? h.whenPolicyUnblock(f) : h.whenPurposesUnblock(g) : !0)).then((h=>{
                            if (!h)
                                throw Error("BLOCK_BY_CONSENT")
                        }
                        ))
                }
                )).then((()=>this.h.buildCallback())).then((()=>{
                    this.mc = !0;
                    this.classList.add("i-amphtml-built");
                    this.classList.remove("i-amphtml-notbuilt", "amp-notbuilt");
                    this.o.signal("built");
                    this.R1() ? this.setReadyStateInternal("building" != this.Aa ? this.Aa : "mounting") : (this.setReadyStateInternal("loading"),
                    this.preconnect(!1));
                    this.pa && this.Ad();
                    this.wa && R(K(this)).delay(this.He.bind(this), 1);
                    if (!this.getPlaceholder()) {
                        let f = this.createPlaceholder();
                        f && this.appendChild(f)
                    }
                }
                ), (f=>{
                    this.o.rejectSignal("built", f);
                    this.R1() && this.setReadyStateInternal("error", f);
                    xe(f) || ue(f, this);
                    throw f
                }
                ))
            }
            build() {
                return this.xa ? this.xa : this.o.whenSignal("ready-upgrade").then((()=>{
                    this.R1() && Oe(this.getAmpDoc()).scheduleAsap(this);
                    return this.whenBuilt()
                }
                ))
            }
            mountInternal() {
                if (this.ra)
                    return this.ra;
                this.X = this.X || new AbortController;
                let e = this.X.signal;
                return this.ra = this.buildInternal().then((()=>{
                    this.R1();
                    if (!e.aborted) {
                        this.setReadyStateInternal("mounting" != this.Aa ? this.Aa : this.I.usesLoading(this) ? "loading" : "mounting");
                        this.Pc = !0;
                        var f = this.h.mountCallback(e);
                        return f ? f.then(of) : !1
                    }
                }
                )).then((f=>{
                    this.X = null;
                    if (e.aborted)
                        throw we();
                    this.o.signal("mounted");
                    this.I.usesLoading(this) && !f || this.setReadyStateInternal("complete")
                }
                )).catch((f=>{
                    this.X = null;
                    f && ("string" == typeof f ? f.startsWith("CANCELLED") : "string" == typeof f.message && f.message.startsWith("CANCELLED")) ? this.ra = null : (this.o.rejectSignal("mounted", f),
                    this.setReadyStateInternal("error", f));
                    throw f
                }
                ))
            }
            mount() {
                if (this.ra)
                    return this.ra;
                this.X = this.X || new AbortController;
                let e = this.X.signal;
                return this.o.whenSignal("ready-upgrade").then((()=>{
                    if (!this.R1())
                        return this.whenBuilt();
                    if (e.aborted)
                        throw we();
                    Oe(this.getAmpDoc()).scheduleAsap(this);
                    return this.whenMounted()
                }
                ))
            }
            unmount() {
                this.pa && this.pause();
                this.R1() ? (this.X && (this.X.abort(),
                this.X = null),
                Oe(this.getAmpDoc()).unschedule(this),
                this.Pc && this.h.unmountCallback(),
                this.Pc = !1,
                this.ra = null,
                this.Zc(),
                this.pa && this.bc(!0)) : this.re()
            }
            whenMounted() {
                return this.o.whenSignal("mounted")
            }
            whenLoaded() {
                return this.o.whenSignal("load-end")
            }
            ensureLoaded(e) {
                return this.mount().then((()=>{
                    if (this.R1())
                        return this.I.usesLoading(this) && this.h.ensureLoaded(),
                        this.whenLoaded();
                    let f = this.oa();
                    return f.whenBuilt().then((()=>{
                        if (4 != f.getState() && ((3 != f.getState() || f.isMeasureRequested()) && f.measure(),
                        f.isDisplayed()))
                            return this.getResources().scheduleLayoutOrPreload(f, !0, e, !0),
                            this.whenLoaded()
                    }
                    ))
                }
                ))
            }
            setAsContainerInternal(e) {
                Oe(this.getAmpDoc()).setContainer(this, e)
            }
            removeAsContainerInternal() {
                Oe(this.getAmpDoc()).removeContainer(this)
            }
            setReadyStateInternal(e, f) {
                if (e !== this.Aa && (this.Aa = e,
                this.R1()))
                    switch (e) {
                    case "loading":
                        this.o.signal("load-start");
                        this.o.reset("unload");
                        this.o.reset("load-end");
                        this.classList.add("i-amphtml-layout");
                        this.toggleLoading(!0);
                        this.ba("amp:load-start");
                        break;
                    case "complete":
                        this.o.signal("load-start");
                        this.o.signal("load-end");
                        this.o.reset("unload");
                        this.classList.add("i-amphtml-layout");
                        this.toggleLoading(!1);
                        Mb(this, "load", null, nf);
                        this.ba("amp:load-end");
                        break;
                    case "error":
                        this.o.rejectSignal("load-end", f),
                        this.toggleLoading(!1),
                        Mb(this, "error", f, nf)
                    }
            }
            preconnect(e) {
                this.isUpgraded();
                e ? this.h.preconnectCallback(e) : Ve(this.getAmpDoc(), (()=>{
                    this.ownerDocument && this.ownerDocument.defaultView && this.h.preconnectCallback(e)
                }
                ))
            }
            R1() {
                return this.I ? this.I.R1() : !1
            }
            deferredMount() {
                return this.I ? this.I.deferredMount(this) : !1
            }
            isAlwaysFixed() {
                return this.h ? this.h.isAlwaysFixed() : !1
            }
            updateLayoutBox(e, f=!1) {
                if (this.isBuilt())
                    this.onMeasure(f)
            }
            onMeasure() {
                this.isBuilt();
                try {
                    this.h.onLayoutMeasure()
                } catch (e) {
                    ue(e, this)
                }
            }
            vc() {
                if (void 0 === this.sizerElement && ("responsive" === this.W || "intrinsic" === this.W)) {
                    var e;
                    this.sizerElement = this.querySelector("i-amphtml-sizer");
                    null === (e = this.sizerElement) || void 0 === e ? void 0 : e.setAttribute("slot", "i-amphtml-svc")
                }
                return this.sizerElement || null
            }
            uf(e) {
                if ("responsive" === this.W)
                    W(e, "paddingTop", "0");
                else if ("intrinsic" === this.W) {
                    let f = e.querySelector(".i-amphtml-intrinsic-sizer");
                    f && f.setAttribute("src", "")
                }
            }
            Ye() {
                let e = this.hasAttribute("media") || this.hasAttribute("sizes") && !this.hasAttribute("disable-inline-width") || this.hasAttribute("heights")
                  , f = this.ownerDocument.defaultView;
                e != !!this.Ja && f && (e ? (this.Ja = new ld(f,(()=>this.pd())),
                this.pd()) : this.Dd())
            }
            Dd() {
                this.Ja && (this.Ja.dispose(),
                this.Ja = null)
            }
            pd() {
                let e = this.Ja;
                if (e) {
                    e.start();
                    var f = this.getAttribute("media") || null
                      , g = f ? e.resolveMatchQuery(f) : !0;
                    this.classList.toggle("i-amphtml-hidden-by-media-query", !g);
                    var h = this.hasAttribute("disable-inline-width") ? null : this.getAttribute("sizes");
                    h && W(this, "width", e.resolveListQuery(h));
                    if (h = "responsive" === this.W ? this.getAttribute("heights") : null) {
                        let k = this.vc();
                        k && W(k, "paddingTop", e.resolveListQuery(h))
                    }
                    e.complete();
                    this.oa().requestMeasure()
                }
            }
            applySize(e, f, g) {
                let h = this.vc();
                h && (this.sizerElement = null,
                this.uf(h),
                this.lf((()=>{
                    h && Eb(h)
                }
                )));
                void 0 !== e && W(this, "height", e, "px");
                void 0 !== f && W(this, "width", f, "px");
                g && (null != g.top && W(this, "marginTop", g.top, "px"),
                null != g.right && W(this, "marginRight", g.right, "px"),
                null != g.bottom && W(this, "marginBottom", g.bottom, "px"),
                null != g.left && W(this, "marginLeft", g.left, "px"));
                this.$e() && this.Bf();
                Mb(this, "amp:size-changed")
            }
            connectedCallback() {
                void 0 === pf && (pf = "content"in self.document.createElement("template"));
                pf || void 0 !== this.Ia || (this.Ia = !!tb(this, "template"));
                if (!this.Ia && !this.pa && Hb(this)) {
                    this.pa = !0;
                    this.everAttached || this.classList.add("i-amphtml-element", "i-amphtml-notbuilt", "amp-notbuilt");
                    if (!this.j) {
                        var e = K(this);
                        this.j = e = U(e).getAmpDoc(this);
                        b(e, this, this.I)
                    }
                    this.B || (this.B = S(this.j, "resources"));
                    this.getResources().add(this);
                    if (this.everAttached) {
                        let m = this.reconstructWhenReparented();
                        m && this.Zc();
                        this.isUpgraded() && (m && !this.R1() && this.getResources().upgraded(this),
                        this.Ad(),
                        this.ba("amp:attached"));
                        this.I && this.R1() && this.bc()
                    } else {
                        this.everAttached = !0;
                        try {
                            {
                                let m = this.getAttribute("i-amphtml-layout");
                                if (m) {
                                    let n = cd(m);
                                    if ("responsive" != n && "intrinsic" != n || !this.firstElementChild)
                                        "nodisplay" == n && Pc(this, !1);
                                    else {
                                        var f;
                                        this.sizerElement = this.querySelector("i-amphtml-sizer") || void 0;
                                        null === (f = this.sizerElement) || void 0 === f ? void 0 : f.setAttribute("slot", "i-amphtml-svc")
                                    }
                                    var g = n
                                } else {
                                    var {height: h, layout: k, width: l} = ud(this);
                                    this.classList.add("i-amphtml-layout-" + k);
                                    dd(k) && this.classList.add("i-amphtml-layout-size-defined");
                                    if ("nodisplay" == k)
                                        Pc(this, !1);
                                    else if ("fixed" == k)
                                        Oc(this, {
                                            width: l,
                                            height: h
                                        });
                                    else if ("fixed-height" == k)
                                        W(this, "height", h);
                                    else if ("responsive" == k) {
                                        let n = this.ownerDocument.createElement("i-amphtml-sizer");
                                        n.setAttribute("slot", "i-amphtml-svc");
                                        Oc(n, {
                                            paddingTop: gd(h) / gd(l) * 100 + "%"
                                        });
                                        this.insertBefore(n, this.firstChild);
                                        this.sizerElement = n
                                    } else if ("intrinsic" == k) {
                                        let n = pd(this)(rd);
                                        n.firstElementChild.setAttribute("src", `data:image/svg+xml;charset=utf-8,<svg height="${h}" width="${l}" xmlns="http://www.w3.org/2000/svg" version="1.1"/>`);
                                        this.insertBefore(n, this.firstChild);
                                        this.sizerElement = n
                                    } else
                                        "fill" != k && "container" != k && ("flex-item" == k ? (l && W(this, "width", l),
                                        h && W(this, "height", h)) : "fluid" == k && (this.classList.add("i-amphtml-layout-awaiting-size"),
                                        l && W(this, "width", l),
                                        W(this, "height", 0)));
                                    this.setAttribute("i-amphtml-layout", k);
                                    g = k
                                }
                            }
                            this.W = g;
                            this.Ye()
                        } catch (m) {
                            ue(m, this)
                        }
                        this.I ? this.bc() : (rf.has("*") || rf.has(this.tagName.toLowerCase())) && this.markUnresolved();
                        this.isUpgraded() || this.ba("amp:stubbed")
                    }
                    this.toggleLoading(!0)
                }
            }
            $e() {
                return this.classList.contains("i-amphtml-layout-awaiting-size")
            }
            Bf() {
                this.classList.remove("i-amphtml-layout-awaiting-size")
            }
            bc(e) {
                if (!this.R1())
                    this.qe();
                else if (!this.ra)
                    if (Oe(this.getAmpDoc()).schedule(this),
                    this.classList.remove("amp-unresolved", "i-amphtml-unresolved"),
                    this.xa)
                        this.setReadyStateInternal(this.I && this.I.usesLoading(this) ? "loading" : "mounting");
                    else if (this.setReadyStateInternal("building"),
                    !e) {
                        let f = this.I.getPreconnects(this);
                        if (f && 0 < f.length) {
                            let g = this.getAmpDoc();
                            Ve(g, (()=>{
                                let h = g.win;
                                if (h) {
                                    var k = Q(h, "preconnect");
                                    f.forEach((l=>k.url(g, l, !1)))
                                }
                            }
                            ))
                        }
                    }
            }
            qe() {
                if (!this.Ia && 1 == this.Qa) {
                    var e = new this.I(this);
                    this.Qa = 4;
                    var f = a.Date.now()
                      , g = e.upgradeCallback();
                    g ? "function" == typeof g.then ? g.then((h=>{
                        this.oc(h || e, f)
                    }
                    )).catch((h=>{
                        this.Qa = 3;
                        u(h)
                    }
                    )) : this.oc(g, f) : this.oc(e, f)
                }
            }
            disconnectedCallback() {
                this.disconnect(!1)
            }
            Ad() {
                this.mc && this.h.attachedCallback()
            }
            disconnect(e) {
                this.Ia || !this.pa || !e && Hb(this) || (e && this.classList.remove("i-amphtml-element"),
                this.pa = !1,
                this.getResources().remove(this),
                this.h && this.h.detachedCallback(),
                this.R1() && this.unmount(),
                this.toggleLoading(!1),
                this.Dd())
            }
            ba() {}
            prerenderAllowed() {
                return this.hasAttribute("noprerender") ? !1 : this.I ? this.I.prerenderAllowed(this) : !1
            }
            isBuildRenderBlocking() {
                return this.h ? this.h.isBuildRenderBlocking() : !1
            }
            createPlaceholder() {
                return this.h ? this.h.createPlaceholderCallback() : null
            }
            createLoaderLogo() {
                return this.I ? this.I.createLoaderLogoCallback(this) : {}
            }
            renderOutsideViewport() {
                return this.h ? this.h.renderOutsideViewport() : !1
            }
            idleRenderOutsideViewport() {
                return this.h ? this.h.idleRenderOutsideViewport() : !1
            }
            getLayoutBox() {
                return this.oa().getLayoutBox()
            }
            getLayoutSize() {
                return this.oa().getLayoutSize()
            }
            getOwner() {
                return this.oa().getOwner()
            }
            getIntersectionChangeEntry() {
                var e = this.h ? this.h.getIntersectionElementLayoutBox() : this.getLayoutBox()
                  , f = this.getOwner();
                let g = S(this.getAmpDoc(), "viewport").getRect()
                  , h = f && f.getLayoutBox();
                f = Ob(e, h, g) || L(0, 0, 0, 0);
                var k = f.width * f.height
                  , l = e.width * e.height;
                k = 0 === l ? 0 : k / l;
                if (l = g)
                    f = Pb(f, -g.left, -g.top),
                    e = Pb(e, -g.left, -g.top),
                    l = Pb(l, -g.left, -g.top);
                return {
                    time: "undefined" !== typeof performance && performance.now ? performance.now() : Date.now() - mf,
                    rootBounds: l,
                    boundingClientRect: e,
                    intersectionRect: f,
                    intersectionRatio: k
                }
            }
            oa() {
                return this.getResources().getResourceForElement(this)
            }
            getResourceId() {
                return this.oa().getId()
            }
            isRelayoutNeeded() {
                return this.h ? this.h.isRelayoutNeeded() : !1
            }
            getImpl(e=!0) {
                return (e ? this.build() : this.Cd()).then((()=>this.h))
            }
            Cd() {
                return this.o.whenSignal("ready-upgrade").then((()=>{
                    this.qe();
                    return this.whenUpgraded()
                }
                ))
            }
            getApi() {
                return this.getImpl().then((e=>e.getApi()))
            }
            getLayout() {
                return this.W
            }
            layoutCallback(e) {
                this.isBuilt();
                if (e.aborted)
                    return Promise.reject(we());
                this.ba("amp:load-start");
                let f = 0 == this.ja;
                this.o.reset("unload");
                f && this.o.signal("load-start");
                this.toggleLoading(!0);
                let g = ea((()=>this.h.layoutCallback()));
                this.preconnect(!0);
                this.classList.add("i-amphtml-layout");
                return g.then((()=>{
                    if (e.aborted)
                        throw we();
                    f && this.o.signal("load-end");
                    this.setReadyStateInternal("complete");
                    this.ja++;
                    this.toggleLoading(!1);
                    this.Ic || (this.h.firstLayoutCompleted(),
                    this.Ic = !0,
                    this.ba("amp:load-end"))
                }
                ), (h=>{
                    if (e.aborted)
                        throw we();
                    f && this.o.rejectSignal("load-end", h);
                    this.setReadyStateInternal("error", h);
                    this.ja++;
                    this.toggleLoading(!1);
                    throw h
                }
                ))
            }
            pause() {
                this.isBuilt() && (this.h.pauseCallback(),
                !this.R1() && this.h.unlayoutOnPause() && this.re())
            }
            resume() {
                this.isBuilt() && this.h.resumeCallback()
            }
            unlayoutCallback() {
                if (!this.isBuilt())
                    return !1;
                this.o.signal("unload");
                let e = this.h.unlayoutCallback();
                e && this.Zc();
                this.ba("amp:unload");
                return e
            }
            re() {
                this.oa().unlayout();
                this.pa && this.B && this.B.schedulePass()
            }
            Zc() {
                this.ja = 0;
                this.Ic = !1;
                this.o.reset("mounted");
                this.o.reset("render-start");
                this.o.reset("load-start");
                this.o.reset("load-end");
                this.o.reset("ini-load")
            }
            reconstructWhenReparented() {
                return this.h ? this.h.reconstructWhenReparented() : !1
            }
            collapse() {
                this.h && this.h.collapse()
            }
            collapsedCallback(e) {
                this.h && this.h.collapsedCallback(e)
            }
            expand() {
                this.h && this.h.expand()
            }
            mutatedAttributesCallback(e) {
                this.h && this.h.mutatedAttributesCallback(e)
            }
            enqueAction(e) {
                this.isBuilt() ? this.Jd(e, !1) : (void 0 === this.wa && (this.wa = []),
                this.wa.push(e),
                this.build())
            }
            He() {
                if (this.wa) {
                    var e = this.wa;
                    this.wa = null;
                    e.forEach((f=>{
                        this.Jd(f, !0)
                    }
                    ))
                }
            }
            Jd(e, f) {
                try {
                    this.h.executeAction(e, f)
                } catch (g) {
                    u("Action execution failed:", g, e.node.tagName, e.method)
                }
            }
            Ne() {
                var e = this.getAttribute("data-block-on-consent");
                if (null === e)
                    if ((e = this.getAmpDoc().getMetaByName("amp-consent-blocking")) ? (e = e.toUpperCase().replace(/\s+/g, ""),
                    e = e.split(",").includes(this.tagName)) : e = !1,
                    e)
                        e = "default",
                        this.setAttribute("data-block-on-consent", e);
                    else
                        return null;
                return "" == e || "default" == e ? this.h.getConsentPolicy() : e
            }
            Oe() {
                var e;
                let f = this.getAttribute("data-block-on-consent-purposes") || null;
                return null === f || void 0 === f ? void 0 : null === (e = f.replace(/\s+/g, "")) || void 0 === e ? void 0 : e.split(",")
            }
            getPlaceholder() {
                return ub(this, (e=>e.hasAttribute("placeholder") && !("placeholder"in e)))
            }
            togglePlaceholder(e) {
                if (e)
                    (e = this.getPlaceholder()) && e.classList.remove("amp-hidden");
                else {
                    /^[\w-]+$/.test("placeholder");
                    e = this.querySelectorAll("> [placeholder]".replace(/^|,/g, "$&:scope "));
                    for (let f = 0; f < e.length; f++)
                        "placeholder"in e[f] || e[f].classList.add("amp-hidden")
                }
            }
            getFallback() {
                return wb(this, "fallback")
            }
            toggleFallback(e) {
                let f = this.oa().getState();
                if (this.R1() || !e || 0 != f && 1 != f && 2 != f)
                    if (this.classList.toggle("amp-notsupported", e),
                    1 == e) {
                        let g = this.getFallback();
                        g && S(this.getAmpDoc(), "owners").scheduleLayout(this, g)
                    }
            }
            renderStarted() {
                this.o.signal("render-start");
                this.togglePlaceholder(!1);
                this.toggleLoading(!1)
            }
            ef(e) {
                let f = 0 < this.ja || this.o.get("render-start");
                (e = "nodisplay" == this.W || this.hasAttribute("noloading") || f && !e) || (e = this.tagName.toUpperCase(),
                e = !("AMP-AD" === e || "AMP-ANIM" === e || "AMP-EMBED" === e || "AMP-FACEBOOK" === e || "AMP-FACEBOOK-COMMENTS" === e || "AMP-FACEBOOK-PAGE" === e || "AMP-GOOGLE-DOCUMENT-EMBED" === e || "AMP-IFRAME" === e || "AMP-IMG" === e || "AMP-INSTAGRAM" === e || "AMP-LIST" === e || "AMP-PINTEREST" === e || "AMP-PLAYBUZZ" === e || "AMP-RENDER" === e || "AMP-TIKTOK" === e || "AMP-TWITTER" === e || ("AMP-VIDEO" == e ? 0 : bd.test(e))));
                return e || yb(this) ? !1 : !0
            }
            toggleLoading(e, f=!1) {
                if (this.ownerDocument && this.ownerDocument.defaultView) {
                    var g = qc(this.getAmpDoc(), "loadingIndicator");
                    g && ((e = e && this.ef(f)) ? g.track(this) : g.untrack(this))
                }
            }
            getOverflowElement() {
                void 0 === this.Z && (this.Z = wb(this, "overflow")) && (this.Z.hasAttribute("tabindex") || this.Z.setAttribute("tabindex", "0"),
                this.Z.hasAttribute("role") || this.Z.setAttribute("role", "button"));
                return this.Z
            }
            overflowCallback(e, f, g) {
                this.getOverflowElement();
                this.Z && (this.Z.classList.toggle("amp-visible", e),
                this.Z.onclick = e ? ()=>{
                    let h = S(this.getAmpDoc(), "mutator");
                    h.forceChangeSize(this, f, g);
                    h.mutateElement(this, (()=>{
                        this.overflowCallback(!1, f, g)
                    }
                    ))
                }
                : null)
            }
            lf(e) {
                this.j ? S(this.getAmpDoc(), "mutator").mutateElement(this, e, !1) : e()
            }
        }
        a.__AMP_BASE_CE_CLASS = d;
        return a.__AMP_BASE_CE_CLASS
    }
    let vf = new WeakMap;
    function wf(a) {
        a.__AMP_EXTENDED_ELEMENTS || (a.__AMP_EXTENDED_ELEMENTS = {});
        return a.__AMP_EXTENDED_ELEMENTS
    }
    function xf(a, b, c) {
        let d = yf(a, c);
        d ? d.then((()=>zf(a, b, c))) : zf(a, b, c)
    }
    function zf(a, b, c) {
        let d = wf(a);
        if (!d[b])
            Af(a, b, c);
        else if (d[b] != c) {
            J(d[b] == ff, "%s is already registered. The script tag for %s is likely included twice in the page.", b, b);
            d[b] = c;
            for (let f = 0; f < qf.length; f++) {
                var e = qf[f];
                if (e.tagName.toLowerCase() == b && e.ownerDocument.defaultView == a) {
                    try {
                        e.upgrade(c)
                    } catch (g) {
                        ue(g, e)
                    }
                    qf.splice(f--, 1)
                }
            }
        }
    }
    function yf(a, b) {
        if (b.requiresShadowDom() && !a.Element.prototype.attachShadow)
            return Bc(a).importUnwrapped(a, "amp-shadow-dom-polyfill")
    }
    function Bf(a) {
        kc(a.getHeadNode()).forEach((({extensionId: b, extensionVersion: c, script: d})=>{
            a.declareExtension(b, c);
            d.addEventListener("error", (()=>{
                rf.add(b || "*");
                for (let e of qf)
                    null != b && e.tagName.toLowerCase() !== b || e.markUnresolved()
            }
            ));
            Cf(a.win, b)
        }
        ));
        a.isBodyAvailable() && a.setExtensionsKnown()
    }
    function Cf(a, b) {
        wf(a)[b] || Af(a, b, ff)
    }
    function Af(a, b, c) {
        wf(a)[b] = c;
        let d = sf(a);
        a.customElements.define(b, d)
    }
    function uf(a, b, c) {
        vf.has(a) || (vf.set(a, !0),
        Bf(a));
        b = b.localName;
        c || a.declaresExtension(b) || Bc(a.win).installExtensionForDoc(a, b, "0.1")
    }
    let Df = "alt aria-describedby aria-label aria-labelledby crossorigin referrerpolicy title importance sizes srcset src".split(" ");
    function Ef(a) {
        !a.xb && a.D.classList.contains("i-amphtml-ghost") && (a.D.classList.remove("i-amphtml-ghost"),
        a.toggleFallback(!1))
    }
    function Ff(a) {
        a.xb && (a.D.classList.add("i-amphtml-ghost"),
        a.toggleFallback(!0),
        a.togglePlaceholder(!1),
        a.xb = !1)
    }
    class Gf extends df {
        static R1() {
            return !1
        }
        static prerenderAllowed() {
            return !0
        }
        static usesLoading() {
            return !0
        }
        static getPreconnects(a) {
            let b = a.getAttribute("src");
            if (b)
                return [b];
            if (a = a.getAttribute("srcset"))
                if (a = /\S+/.exec(a))
                    return [a[0]];
            return null
        }
        constructor(a) {
            super(a);
            this.xb = !0;
            this.$b = this.ac = this.D = null;
            this.me = 0
        }
        mutatedAttributesCallback(a) {
            if (this.D) {
                let b = Df.filter((c=>void 0 !== a[c]));
                a.src && !a.srcset && this.element.hasAttribute("srcset") && (this.element.removeAttribute("srcset"),
                b.push("srcset"),
                this.user().warn("amp-img", "Removed [srcset] since [src] was mutated. Recommend adding a [srcset] binding to support responsive images.", this.element));
                id(b, this.element, this.D, !0);
                this.propagateDataset(this.D);
                Gf.R1() && !this.D.complete && this.setReadyState("loading")
            }
        }
        preconnectCallback(a) {
            var b = this.element.getAttribute("src");
            b ? Q(this.win, "preconnect").url(this.getAmpDoc(), b, a) : (b = this.element.getAttribute("srcset")) && (b = /\S+/.exec(b)) && Q(this.win, "preconnect").url(this.getAmpDoc(), b[0], a)
        }
        isLayoutSupported(a) {
            return dd(a)
        }
        ab() {
            if (this.D)
                return this.D;
            this.xb = !this.element.hasAttribute("fallback");
            let a = this.element.hasAttribute("i-amphtml-ssr");
            a && (this.D = qb(this.element, "> img:not([placeholder])"));
            this.D = this.D || new Image;
            this.D.setAttribute("decoding", "async");
            this.element.id && this.D.setAttribute("amp-img-id", this.element.id);
            "img" == this.element.getAttribute("role") && (this.element.removeAttribute("role"),
            this.user().error("amp-img", "Setting role=img on amp-img elements breaks screen readers please just set alt or ARIA attributes, they will be correctly propagated for the underlying <img> element."));
            if (this.D && !this.element.hasAttribute("i-amphtml-ssr") && !this.element.hasAttribute("sizes") && !this.D.hasAttribute("sizes")) {
                var b = this.element.getAttribute("srcset");
                if (b && !/[0-9]+x(?:,|$)/.test(b) && (({width: b} = this.element.getLayoutSize()),
                this.D.hasAttribute("sizes") ? b > this.me : 1)) {
                    var c = this.getViewport().getWidth()
                      , d = `(max-width: ${c}px) ${b}px, `
                      , e = b + "px";
                    "fixed" !== this.getLayout() && (e = Math.max(Math.round(100 * b / c), 100) + "vw");
                    this.D.setAttribute("sizes", d + e);
                    this.me = b
                }
            }
            id(Df, this.element, this.D);
            this.propagateDataset(this.D);
            hd(this.D, !0);
            b = this.element;
            c = this.D;
            b.hasAttribute("object-fit") && W(c, "object-fit", b.getAttribute("object-fit"));
            b.hasAttribute("object-position") && W(c, "object-position", b.getAttribute("object-position"));
            a || this.element.appendChild(this.D);
            return this.D
        }
        reconstructWhenReparented() {
            return !1
        }
        mountCallback() {
            let a = !!this.D
              , b = this.ab();
            a || (Gd(b, "load", (()=>{
                this.setReadyState("complete");
                this.firstLayoutCompleted();
                Ef(this)
            }
            )),
            Gd(b, "error", (c=>{
                this.setReadyState("error", c);
                Ff(this)
            }
            )));
            b.complete ? (this.setReadyState("complete"),
            this.firstLayoutCompleted(),
            Ef(this)) : this.setReadyState("loading")
        }
        unmountCallback() {
            let a = this.D;
            a && !a.complete && (a.src = "data:image/gif;base64,R0lGODlhAQABAIAAAP///wAAACwAAAAAAQABAAACAkQBADs=",
            Eb(a),
            this.D = null)
        }
        ensureLoaded() {
            this.D.loading = "eager"
        }
        layoutCallback() {
            this.ab();
            let a = this.D;
            this.ac = Gd(a, "load", (()=>Ef(this)));
            this.$b = Gd(a, "error", (()=>Ff(this)));
            let {width: b} = this.element.getLayoutSize();
            return 0 >= b ? p() : this.loadPromise(a)
        }
        unlayoutCallback() {
            if (!Gf.R1()) {
                this.$b && (this.$b(),
                this.$b = null);
                this.ac && (this.ac(),
                this.ac = null);
                var a = this.D;
                a && !a.complete && (a.src = "data:image/gif;base64,R0lGODlhAQABAIAAAP///wAAACwAAAAAAQABAAACAkQBADs=",
                Eb(a),
                this.D = null);
                return !0
            }
        }
        firstLayoutCompleted() {
            let a = this.getPlaceholder();
            a && a.classList.contains("i-amphtml-blurry-placeholder") ? Nc(a, {
                opacity: 0
            }) : this.togglePlaceholder(!1)
        }
        propagateDataset(a) {
            for (let b in a.dataset)
                b in this.element.dataset || delete a.dataset[b];
            for (let b in this.element.dataset)
                b.startsWith("ampBind") && "ampBind" !== b || a.dataset[b] !== this.element.dataset[b] && (a.dataset[b] = this.element.dataset[b])
        }
    }
    function Hf(a) {
        if (!a.hasAttribute("i-amphtml-ssr") && "container" != td(a)) {
            var b = a.ownerDocument.createElement("div");
            hd(b);
            xb(a).forEach((c=>{
                b.appendChild(c)
            }
            ));
            a.appendChild(b)
        }
    }
    class If extends df {
        static prerenderAllowed() {
            return !0
        }
        isLayoutSupported(a) {
            return "container" == a || dd(a)
        }
        buildCallback() {
            Hf(this.element)
        }
    }
    function Jf(a, b) {
        if ("referrerPolicy"in Image.prototype)
            return Kf(a, b, !0);
        let c = Gb(a.document, "iframe", w({
            src: "about:blank",
            style: "display:none"
        }));
        c.onload = ()=>{
            Kf(c.contentWindow, b)
        }
        ;
        a.document.body.appendChild(c);
        return c
    }
    function Kf(a, b, c=!1) {
        a = new a.Image;
        c && (a.referrerPolicy = "no-referrer");
        a.src = b;
        return a
    }
    function Lf(a) {
        J(/^(https:\/\/|\/\/)/i.test(a), 'The <amp-pixel> src attribute must start with "https://" or "//". Invalid value: ' + a);
        return a
    }
    class Mf extends df {
        constructor(a) {
            super(a);
            this.fd = null
        }
        isLayoutSupported() {
            return !0
        }
        buildCallback() {
            this.element.setAttribute("aria-hidden", "true");
            (this.Qb = this.element.getAttribute("referrerpolicy")) && J("no-referrer" == this.Qb, `amp-pixel: invalid "referrerpolicy" value "${this.Qb}". Only "no-referrer" is supported`);
            this.element.hasAttribute("i-amphtml-ssr") && this.element.querySelector("img") || this.getAmpDoc().whenFirstVisible().then(this.If.bind(this))
        }
        If() {
            if (this.fd)
                return I().error("amp-pixel", "duplicate pixel"),
                this.fd;
            this.fd = R(this.win).promise(1).then((()=>{
                let a = this.element.getAttribute("src");
                if (a)
                    return qc(this.element, "url-replace").expandUrlAsync(Lf(a)).then((b=>{
                        if (this.win) {
                            var c = this.win
                              , d = this.Qb;
                            d && "no-referrer" !== d && H().error("pixel", "Unsupported referrerPolicy: %s", d);
                            return "no-referrer" === d ? Jf(c, b) : Kf(c, b)
                        }
                    }
                    ))
            }
            ))
        }
    }
    class Nf {
        constructor(a, b, c) {
            this.va = R(a);
            this.Ve = b;
            this.Ge = c || 0;
            this.ha = -1;
            this.Tc = 0;
            this.ad = !1;
            this.Ee = ()=>{
                this.Mb()
            }
        }
        isPending() {
            return -1 != this.ha
        }
        schedule(a) {
            let b = a || this.Ge;
            this.ad && 10 > b && (b = 10);
            let c = Date.now() + b;
            return !this.isPending() || -10 > c - this.Tc ? (this.cancel(),
            this.Tc = c,
            this.ha = this.va.delay(this.Ee, b),
            !0) : !1
        }
        Mb() {
            this.ha = -1;
            this.Tc = 0;
            this.ad = !0;
            this.Ve();
            this.ad = !1
        }
        cancel() {
            this.isPending() && (this.va.cancel(this.ha),
            this.ha = -1)
        }
    }
    function Of(a) {
        for (let b = a.Nb.length - 1; 0 <= b; b--) {
            let c = a.Nb[b];
            if (a.Gd || Jb(c.element, a.j.getRootNode()))
                a.Nb.splice(b, 1),
                c.build().then((()=>a.schedulePass()))
        }
    }
    class Pf {
        constructor(a) {
            this.j = a;
            this.win = a.win;
            this.B = [];
            this.wf = 0;
            this.Mb = new Nf(this.win,this.Ie.bind(this),70);
            this.fe = new V;
            this.Kd = new r;
            this.$a = null;
            Q(this.win, "input").setupInputModeClasses(a);
            if ("inabox" != G(this.win).runtime)
                a.onVisibilityChanged((()=>{
                    switch (a.getVisibilityState()) {
                    case "paused":
                        this.B.forEach((b=>b.pause()));
                        break;
                    case "visible":
                        this.B.forEach((b=>b.resume())),
                        this.schedulePass()
                    }
                }
                ));
            this.Nb = [];
            this.Gd = !1;
            this.j.whenReady().then((()=>{
                this.Gd = !0;
                Of(this);
                this.schedulePass(1)
            }
            ))
        }
        dispose() {
            this.B.forEach((a=>a.unload()));
            this.B.length = 0;
            this.$a && (this.$a.disconnect(),
            this.$a = null)
        }
        get() {
            return this.B.slice(0)
        }
        getAmpdoc() {
            return this.j
        }
        getResourceForElement(a) {
            return De(a)
        }
        getResourceForElementOptional(a) {
            return De(a)
        }
        getScrollDirection() {
            return 1
        }
        add(a) {
            a = new Ge(++this.wf,a,this);
            this.B.push(a)
        }
        upgraded(a) {
            a = De(a);
            this.Nb.push(a);
            Of(this)
        }
        remove(a) {
            let b = De(a);
            b && (this.$a && this.$a.unobserve(a),
            a = this.B.indexOf(b),
            -1 !== a && this.B.splice(a, 1))
        }
        scheduleLayoutOrPreload() {
            this.Mb.schedule()
        }
        schedulePass(a) {
            return this.Mb.schedule(a)
        }
        updateOrEnqueueMutateTask() {}
        schedulePassVsync() {}
        onNextPass(a) {
            this.fe.add(a)
        }
        ampInitComplete() {}
        updateLayoutPriority() {}
        setRelayoutTop() {}
        maybeHeightChanged() {}
        whenFirstPass() {
            return this.Kd.promise
        }
        Ie() {
            let a = Date.now();
            this.B.forEach((b=>{
                b.isLayoutPending() && !b.element.R1() && b.measure()
            }
            ));
            this.B.forEach((b=>{
                !b.element.R1() && 2 === b.getState() && b.isDisplayed() && (b.layoutScheduled(a),
                b.startLayout())
            }
            ));
            this.j.signals().signal("ready-scan");
            this.fe.fire();
            this.Kd.resolve()
        }
    }
    function Qf(a) {
        let b = a.documentElement;
        return ["⚡4email", "amp4email"].some((c=>b.hasAttribute(c)))
    }
    let Rf = "__AMP_ACTION_MAP__" + Math.random()
      , Sf = {
        form: ["submit", "clear"]
    }
      , Tf = [{
        tagOrTarget: "AMP",
        method: "setState"
    }, {
        tagOrTarget: "*",
        method: "focus"
    }, {
        tagOrTarget: "*",
        method: "hide"
    }, {
        tagOrTarget: "*",
        method: "show"
    }, {
        tagOrTarget: "*",
        method: "toggleClass"
    }, {
        tagOrTarget: "*",
        method: "toggleChecked"
    }, {
        tagOrTarget: "*",
        method: "toggleVisibility"
    }]
      , Uf = {
        button: !0,
        checkbox: !0,
        link: !0,
        listbox: !0,
        menuitem: !0,
        menuitemcheckbox: !0,
        menuitemradio: !0,
        option: !0,
        radio: !0,
        scrollbar: !0,
        slider: !0,
        spinbutton: !0,
        "switch": !0,
        tab: !0,
        treeitem: !0
    };
    class Vf {
        constructor(a, b, c, d, e, f, g, h="?", k=null, l=Math.random()) {
            this.node = a;
            this.method = b;
            this.args = c;
            this.source = d;
            this.caller = e;
            this.event = f;
            this.trust = g;
            this.actionEventType = h;
            this.tagOrTarget = k || a.tagName;
            this.sequenceId = l
        }
        satisfiesTrust(a) {
            if (!Ka(this.trust))
                return I().error("Action", `Invalid trust for '${this.method}': ${this.trust}`),
                !1;
            if (this.trust < a) {
                a: switch (this.trust) {
                case 1:
                    var b = "low";
                    break a;
                case 3:
                    b = "high";
                    break a;
                default:
                    b = "default"
                }
                H().error("Action", `"${this.actionEventType}" event with "${b}" trust is not allowed to invoke "${this.tagOrTarget.toLowerCase()}.${this.method}".`);
                return !1
            }
            return !0
        }
    }
    function Wf(a) {
        let b = v()
          , c = a.target;
        void 0 !== c.value && (b.value = c.value);
        "INPUT" == c.tagName && (b.valueAsNumber = Number(c.value));
        void 0 !== c.checked && (b.checked = c.checked);
        if (void 0 !== c.min || void 0 !== c.max)
            b.min = c.min,
            b.max = c.max;
        c.files && (b.files = Ea(c.files).map((d=>({
            name: d.name,
            size: d.size,
            type: d.type
        }))));
        if (0 < Object.keys(b).length)
            try {
                a.detail = b
            } catch (d) {}
    }
    function Xf(a, b, c, d, e, f) {
        let g = Yf(b, c);
        if (!g)
            return !1;
        let h = Math.random();
        let k = null;
        g.actionInfos.forEach((l=>{
            let m = l.method
              , n = l.str
              , q = l.target
              , E = Zf(l.args, d, f)
              , z = ()=>{
                var x = $f(a, q);
                if (x)
                    return x = new Vf(x,m,E,b,g.node,d,e,c,x.tagName || q,h),
                    ag(a, x);
                bg(`Target "${q}" not found for action [${n}].`)
            }
            ;
            k = k ? k.then(z) : z()
        }
        ));
        return 1 <= g.actionInfos.length
    }
    function ag(a, b) {
        let c = b.method
          , d = b.tagOrTarget;
        if (a.V && !cg(b, a.V))
            return bg(`"${d}.${c}" is not allowlisted ${JSON.stringify(a.V)}.`),
            null;
        let e = a.wc[d];
        if (e)
            return e(b);
        let f = b.node
          , g = a.Ld[c];
        if (g && b.satisfiesTrust(g.minTrust))
            return g.handler(b);
        let h = f.tagName.toLowerCase();
        if ("amp-" === h.substring(0, 4))
            return f.enqueAction ? f.enqueAction(b) : bg(`Unrecognized AMP element "${h}".`, f),
            null;
        let k = Sf[h];
        if ("amp-" === (f.getAttribute("id") || "").substring(0, 4) || k && -1 < k.indexOf(c))
            return (a = f.__AMP_ACTION_HANDLER__) ? a(b) : (f.__AMP_ACTION_QUEUE__ = f.__AMP_ACTION_QUEUE__ || [],
            f.__AMP_ACTION_QUEUE__.push(b)),
            null;
        bg(`Target (${d}) doesn't support "${c}" action.`, b.caller);
        return null
    }
    function Yf(a, b, c) {
        for (; a && (!c || a != c); ) {
            var d = b
              , e = a
              , f = d
              , g = e[Rf];
            void 0 === g && (g = null,
            e.hasAttribute("on") ? (f = e.getAttribute("on"),
            g = dg(f, e),
            e[Rf] = g) : e.hasAttribute("execute") && (g = e.getAttribute("execute"),
            g = dg(`${f}:${g}`, e),
            e[Rf] = g));
            let h = (e = g) ? e[d] || null : null;
            if (h && !a.disabled && !rb(a, ":disabled"))
                return {
                    node: a,
                    actionInfos: h
                };
            a = a.parentElement
        }
        return null
    }
    function $f(a, b) {
        return a.wc[b] ? a.O : a.O.getElementById(b)
    }
    function bg(a, b) {
        if (b)
            throw a = H().createError(`[Action] ${a}`),
            ue(a, b),
            a;
        H().error("Action", a)
    }
    class eg {
        constructor(a, b) {
            this.ampdoc = a;
            this.O = b || a.getRootNode();
            this.V = (this.Sd = this.ampdoc.isSingleDoc() && Qf(this.O)) ? Tf : null;
            this.wc = v();
            this.Ld = v();
            this.addEvent("tap");
            this.addEvent("submit");
            this.addEvent("change");
            this.addEvent("input-debounced");
            this.addEvent("input-throttled");
            this.addEvent("valid");
            this.addEvent("invalid")
        }
        addEvent(a) {
            if ("tap" == a)
                this.O.addEventListener("click", (b=>{
                    b.defaultPrevented || this.trigger(b.target, a, b, 3)
                }
                )),
                this.O.addEventListener("keydown", (b=>{
                    var c = b.key;
                    let d = b.target;
                    if ("Enter" == c || " " == c) {
                        let e = d.getAttribute("role");
                        if (c = e)
                            c = e.toLowerCase(),
                            c = ja.call(Uf, c);
                        let f = c;
                        !b.defaultPrevented && f && this.trigger(d, a, b, 3) && b.preventDefault()
                    }
                }
                ));
            else if ("submit" == a)
                this.O.addEventListener(a, (b=>{
                    this.trigger(b.target, a, b, 3)
                }
                ));
            else if ("change" == a)
                this.O.addEventListener(a, (b=>{
                    let c = b.target;
                    Wf(b);
                    this.trigger(c, a, b, 3)
                }
                ));
            else if ("input-debounced" == a) {
                let b = Va(this.ampdoc.win, (c=>{
                    this.trigger(c.target, a, c, 3)
                }
                ), 300);
                this.O.addEventListener("input", (c=>{
                    let d = new fg(c);
                    Wf(d);
                    b(d)
                }
                ))
            } else if ("input-throttled" == a) {
                let b = Ua(this.ampdoc.win, (c=>{
                    this.trigger(c.target, a, c, 3)
                }
                ));
                this.O.addEventListener("input", (c=>{
                    c = new fg(c);
                    Wf(c);
                    b(c)
                }
                ))
            } else
                "valid" != a && "invalid" != a || this.O.addEventListener(a, (b=>{
                    this.trigger(b.target, a, b, 3)
                }
                ))
        }
        addGlobalTarget(a, b) {
            this.wc[a] = b
        }
        addGlobalMethodHandler(a, b, c=2) {
            this.Ld[a] = {
                handler: b,
                minTrust: c
            }
        }
        trigger(a, b, c, d, e) {
            return Xf(this, a, b, c, d, e)
        }
        execute(a, b, c, d, e, f, g) {
            a = new Vf(a,b,c,d,e,f,g);
            ag(this, a)
        }
        installActionHandler(a, b) {
            "amp-" === (a.getAttribute("id") || "").substring(0, 4) || a.tagName.toLowerCase();
            if (a.__AMP_ACTION_HANDLER__)
                I().error("Action", `Action handler already installed for ${a}`);
            else {
                a.__AMP_ACTION_HANDLER__ = b;
                var c = a.__AMP_ACTION_QUEUE__;
                A(c) && R(K(a)).delay((()=>{
                    c.forEach((d=>{
                        try {
                            b(d)
                        } catch (e) {
                            I().error("Action", "Action execution failed:", d, e)
                        }
                    }
                    ));
                    a.__AMP_ACTION_QUEUE__.length = 0
                }
                ), 1)
            }
        }
        hasAction(a, b, c) {
            return !!Yf(a, b, c)
        }
        hasResolvableAction(a, b, c) {
            let d = Yf(a, b, c);
            return d ? d.actionInfos.some((e=>!!$f(this, e.target))) : !1
        }
        hasResolvableActionForTarget(a, b, c, d) {
            return (a = Yf(a, b, d)) ? a.actionInfos.some((e=>$f(this, e.target) == c)) : !1
        }
        setAllowlist(a) {
            a.every((b=>b.tagOrTarget && b.method));
            this.V = a
        }
        addToAllowlist(a, b, c) {
            c && c.includes("email") !== this.Sd || (this.V || (this.V = []),
            A(b) || (b = [b]),
            b.forEach((d=>{
                this.V.some((e=>e.tagOrTarget == a && e.method == d)) || this.V.push({
                    tagOrTarget: a,
                    method: d
                })
            }
            )))
        }
        setActions(a, b) {
            a.setAttribute("on", b);
            delete a[Rf]
        }
    }
    function cg(a, b) {
        let {method: c} = a;
        let d = a.node;
        a = a.tagOrTarget;
        "activate" === c && "function" == typeof d.getDefaultActionAlias && (c = d.getDefaultActionAlias());
        let e = c.toLowerCase()
          , f = a.toLowerCase();
        return b.some((g=>g.tagOrTarget.toLowerCase() !== f && "*" !== g.tagOrTarget || g.method.toLowerCase() !== e ? !1 : !0))
    }
    class fg {
        constructor(a) {
            this.detail = null;
            let b = this || v();
            for (let c in a)
                b[c] = "function" === typeof a[c] ? gg : a[c]
        }
    }
    function gg() {}
    function dg(a, b) {
        let c = hg.bind(null, a, b)
          , d = ig.bind(null, a, b);
        b = null;
        let e = new jg(a);
        let f, g;
        do {
            if (f = e.next(),
            f.type != kg && (f.type != Y || ";" != f.value))
                if (f.type == lg || f.type == mg) {
                    let n = f.value;
                    d(e.next(), [Y], ":");
                    let q = [];
                    do {
                        let E = d(e.next(), [lg, mg]).value;
                        let z = "activate";
                        var h = null;
                        g = e.peek();
                        if (g.type == Y && "." == g.value && (e.next(),
                        z = d(e.next(), [lg, mg]).value || z,
                        g = e.peek(),
                        g.type == Y && "(" == g.value)) {
                            e.next();
                            let x;
                            h = e;
                            var k = d
                              , l = c
                              , m = h.peek();
                            let t = null;
                            if (m.type == ng)
                                t = v(),
                                ({value: l} = h.next()),
                                t.__AMP_OBJECT_STRING__ = l,
                                k(h.next(), [Y], ")");
                            else
                                do {
                                    x = h.next();
                                    m = x.type;
                                    let T = x.value;
                                    if (m != Y || "," != T && ")" != T)
                                        if (m == lg || m == mg) {
                                            k(h.next(), [Y], "=");
                                            x = k(h.next(!0), [lg, mg]);
                                            let $e = [x];
                                            if (x.type == mg)
                                                for (m = h.peek(); m.type == Y && "." == m.value; m = h.peek())
                                                    h.next(),
                                                    x = k(h.next(!1), [mg]),
                                                    $e.push(x);
                                            m = og($e);
                                            t || (t = v());
                                            t[T] = m;
                                            m = h.peek();
                                            l(m.type == Y && ("," == m.value || ")" == m.value), "Expected either [,] or [)]")
                                        } else
                                            l(!1, `; unexpected token [${x.value || ""}]`)
                                } while (x.type != Y || ")" != x.value);
                            h = t
                        }
                        q.push({
                            event: n,
                            target: E,
                            method: z,
                            args: h,
                            str: a
                        });
                        g = e.peek()
                    } while (g.type == Y && "," == g.value && e.next());
                    b || (b = v());
                    b[n] = q
                } else
                    c(!1, `; unexpected token [${f.value || ""}]`)
        } while (f.type != kg);
        return b
    }
    function og(a) {
        return 0 == a.length ? null : 1 == a.length ? a[0].value : {
            expression: a.map((b=>b.value)).join(".")
        }
    }
    function Zf(a, b, c) {
        if (!a)
            return a;
        let d = c || w({});
        b && (b = b.detail) && (d.event = b);
        let e = v();
        Object.keys(a).forEach((f=>{
            var g = a[f];
            if ("object" == typeof g && g.expression) {
                g = g.expression;
                if ("." == g)
                    var h = d;
                else {
                    g = g.split(".");
                    var k = d;
                    for (h of g)
                        if (h && k && void 0 !== k[h] && "object" == typeof k && ja.call(k, h))
                            k = k[h];
                        else {
                            k = void 0;
                            break
                        }
                    h = k
                }
                let l = h;
                g = void 0 === l ? null : l
            }
            e[f] = d[g] ? d[g] : g
        }
        ));
        return e
    }
    function hg(a, b, c, d) {
        return J(c, "Invalid action definition in %s: [%s] %s", b, a, d || "")
    }
    function ig(a, b, c, d, e) {
        void 0 !== e ? hg(a, b, d.includes(c.type) && c.value == e, `; expected [${e}]`) : hg(a, b, d.includes(c.type));
        return c
    }
    var kg = 1
      , Y = 2
      , lg = 3
      , mg = 4
      , ng = 5;
    function pg(a, b) {
        let c = a.Bc + 1;
        if (c >= a.K.length)
            return {
                type: kg,
                index: a.Bc
            };
        var d = a.K.charAt(c);
        if (-1 != " \t\n\r\f\v \u2028\u2029".indexOf(d)) {
            for (c++; c < a.K.length && -1 != " \t\n\r\f\v \u2028\u2029".indexOf(a.K.charAt(c)); c++)
                ;
            if (c >= a.K.length)
                return {
                    type: kg,
                    index: c
                };
            d = a.K.charAt(c)
        }
        if (b && (qg(d) || "." == d && c + 1 < a.K.length && qg(a.K[c + 1]))) {
            let e = "." == d
              , f = c + 1;
            for (; f < a.K.length; f++) {
                let h = a.K.charAt(f);
                if ("." == h)
                    e = !0;
                else if (!qg(h))
                    break
            }
            let g = a.K.substring(c, f);
            a = e ? parseFloat(g) : parseInt(g, 10);
            c = f - 1;
            return {
                type: lg,
                value: a,
                index: c
            }
        }
        if (-1 != ";:.()=,|!".indexOf(d))
            return {
                type: Y,
                value: d,
                index: c
            };
        if (-1 != "\"'".indexOf(d)) {
            let e = -1;
            for (let f = c + 1; f < a.K.length; f++)
                if (a.K.charAt(f) == d) {
                    e = f;
                    break
                }
            if (-1 == e)
                return {
                    type: 0,
                    index: c
                };
            a = a.K.substring(c + 1, e);
            c = e;
            return {
                type: lg,
                value: a,
                index: c
            }
        }
        if ("{" == d) {
            let e = 1
              , f = -1;
            for (d = c + 1; d < a.K.length; d++) {
                let g = a.K[d];
                "{" == g ? e++ : "}" == g && e--;
                if (0 >= e) {
                    f = d;
                    break
                }
            }
            if (-1 == f)
                return {
                    type: 0,
                    index: c
                };
            a = a.K.substring(c, f + 1);
            c = f;
            return {
                type: ng,
                value: a,
                index: c
            }
        }
        for (d = c + 1; d < a.K.length && -1 == " \t\n\r\f\v \u2028\u2029;:.()=,|!\"'{}".indexOf(a.K.charAt(d)); d++)
            ;
        a = a.K.substring(c, d);
        c = d - 1;
        return !b || "true" != a && "false" != a ? qg(a.charAt(0)) ? {
            type: lg,
            value: a,
            index: c
        } : {
            type: mg,
            value: a,
            index: c
        } : {
            type: lg,
            value: "true" == a,
            index: c
        }
    }
    class jg {
        constructor(a) {
            this.K = a;
            this.Bc = -1
        }
        next(a) {
            let b = pg(this, a || !1);
            this.Bc = b.index;
            return b
        }
        peek(a) {
            return pg(this, a || !1)
        }
    }
    function qg(a) {
        return "0" <= a && "9" >= a
    }
    function rg(a) {
        return !!a && "function" == typeof a.getFormData
    }
    let sg = ["GET", "POST"]
      , tg = [A, la];
    function ug(a, b) {
        let c = y({}, b);
        if (rg(b.body)) {
            let d = b.body;
            c.headers["Content-Type"] = "multipart/form-data;charset=utf-8";
            b = d.entries();
            let e = [];
            for (let f = b.next(); !f.done; f = b.next())
                e.push(f.value);
            c.body = e
        }
        return {
            input: a,
            init: c
        }
    }
    function vg(a, b) {
        B(la(a), "Object expected: %s", a);
        if ("document" != b)
            return new Response(a.body,a.init);
        let c = v()
          , d = {
            status: 200,
            statusText: "OK",
            getResponseHeader(e) {
                return c[String(e).toLowerCase()] || null
            }
        };
        if (a.init) {
            let e = a.init;
            A(e.headers) && e.headers.forEach((f=>{
                let g = f[1];
                c[String(f[0]).toLowerCase()] = String(g)
            }
            ));
            e.status && (d.status = parseInt(e.status, 10));
            e.statusText && (d.statusText = String(e.statusText))
        }
        return new Response(a.body ? String(a.body) : "",d)
    }
    function wg(a, b, c, d) {
        if (!b)
            return p();
        let e = d.prerenderSafe ? p() : b.whenFirstVisible()
          , f = S(b, "viewer")
          , g = ke(c)
          , h = f.hasCapability("xhrInterceptor")
          , k = d.bypassInterceptorForDev && !1;
        return g || !h || k || !b.getRootNode().documentElement.hasAttribute("allow-xhr-interception") ? e : e.then((()=>f.isTrustedViewer())).then((l=>{
            if (l || xd(a, "untrusted-xhr-interception")) {
                var m = w({
                    originalRequest: ug(c, d)
                });
                return f.sendMessageAwaitResponse("xhr", m).then((n=>vg(n, d.responseType)))
            }
        }
        ))
    }
    function xg(a, b, c) {
        !1 !== c.ampCors && (b = pe(a, b));
        return b
    }
    function yg(a, b) {
        a = a || {};
        var c = a.method;
        void 0 === c ? c = "GET" : (c = c.toUpperCase(),
        sg.includes(c));
        a.method = c;
        a.headers = a.headers || w({});
        b && (a.headers.Accept = b);
        return a
    }
    function zg(a, b, c) {
        c = c || {};
        let d = a.origin || X(a.location.href).origin;
        a = X(b).origin;
        d == a && (c.headers = c.headers || {},
        c.headers["AMP-Same-Origin"] = "true");
        return c
    }
    function Ag(a) {
        let b = yg(a, "application/json");
        "POST" != b.method || rg(b.body) || (tg.some((c=>c(b.body))),
        b.headers["Content-Type"] = b.headers["Content-Type"] || "text/plain;charset=utf-8",
        b.body = "application/x-www-form-urlencoded" === b.headers["Content-Type"] ? ge(b.body) : JSON.stringify(b.body));
        return b
    }
    function Bg(a) {
        return new Promise((b=>{
            if (a.ok)
                return b(a);
            b = a.status;
            let c = H().createError(`HTTP error ${b}`);
            c.retriable = 415 == b || 500 <= b && 600 > b;
            c.response = a;
            throw c
        }
        ))
    }
    function Cg(a, b, c={}) {
        b = xg(a.win, b, c);
        c = zg(a.win, b, c);
        return a.Le(b, c).then((d=>d), (d=>{
            let e = X(b).origin;
            throw H().createExpectedError("XHR", `Failed fetching (${e}/...):`, d && d.message)
        }
        ))
    }
    class Dg {
        constructor(a) {
            this.win = a;
            a = U(a);
            this.ze = a.isSingleDoc() ? a.getSingleDoc() : null
        }
        Le(a, b) {
            return wg(this.win, this.ze, a, b).then((c=>{
                if (c)
                    return c;
                rg(b.body) && (b.body = b.body.getFormData());
                return this.win.fetch.apply(null, arguments)
            }
            ))
        }
        fetchJson(a, b) {
            return this.fetch(a, Ag(b))
        }
        fetchText(a, b) {
            return this.fetch(a, yg(b, "text/plain"))
        }
        xssiJson(a, b) {
            return b ? a.text().then((c=>c.startsWith(b) ? JSON.parse(c.slice(b.length)) : JSON.parse(c))) : a.json()
        }
        fetch(a, b) {
            b = yg(b);
            return Cg(this, a, b).then((c=>Bg(c)))
        }
        sendSignal(a, b) {
            return Cg(this, a, b).then((c=>Bg(c)))
        }
        getCorsUrl(a, b) {
            return pe(a, b)
        }
    }
    function Eg(a, b, c) {
        let d = oe(b, X(ne(a.win.location)).origin);
        return je(d) + c
    }
    class Fg extends Dg {
        constructor(a) {
            super(a);
            this.Za = v()
        }
        fetch(a, b) {
            let c = !b || !b.method || "GET" === b.method
              , d = Eg(this, a, b && b.headers && b.headers.Accept || "")
              , e = !!this.Za[d];
            if (c && e)
                return this.Za[d].then((g=>g.clone()));
            let f = super.fetch(a, b);
            c && (this.Za[d] = f.then((g=>{
                delete this.Za[d];
                return g.clone()
            }
            ), (g=>{
                delete this.Za[d];
                throw g
            }
            )));
            return f
        }
    }
    let Gg = {
        "+": "-",
        "/": "_",
        "=": "."
    };
    function Hg(a) {
        a = Ra(a);
        return btoa(a).replace(/[+/=]/g, (b=>Gg[b]))
    }
    function Ig(a) {
        let b = Sa(a);
        return b ? b : String(a.location.href + Date.now() + a.Math.random() + a.screen.width + a.screen.height)
    }
    function Jg(a) {
        let b = Ig(a);
        return "string" == typeof b ? Q(a, "crypto").sha384Base64(b) : ea((()=>Hg(b).replace(/\.+$/, "")))
    }
    function Kg(a) {
        return a.kb ? a.kb : a.kb = Bc(a.A).preloadExtension("amp-crypto-polyfill").then((()=>Q(a.A, "crypto-polyfill")))
    }
    class Lg {
        constructor(a) {
            this.A = a;
            let b = null
              , c = !1;
            a.crypto && (a.crypto.subtle ? b = a.crypto.subtle : a.crypto.webkitSubtle && (b = a.crypto.webkitSubtle,
            c = !0));
            this.pkcsAlgo = {
                name: "RSASSA-PKCS1-v1_5",
                hash: {
                    name: "SHA-256"
                }
            };
            this.subtle = b;
            this.df = c;
            this.kb = null
        }
        sha384(a) {
            "string" === typeof a && (a = Qa(a));
            if (!this.subtle || this.kb)
                return (this.kb || Kg(this)).then((b=>b(a)));
            try {
                return this.subtle.digest({
                    name: "SHA-384"
                }, a).then((b=>new Uint8Array(b)), (b=>{
                    b.message && 0 > b.message.indexOf("secure origin") && H().error("Crypto", "SubtleCrypto failed, fallback to closure lib.", b);
                    return Kg(this).then((()=>this.sha384(a)))
                }
                ))
            } catch (b) {
                return I().error("Crypto", "SubtleCrypto failed, fallback to closure lib.", b),
                Kg(this).then((()=>this.sha384(a)))
            }
        }
        sha384Base64(a) {
            return this.sha384(a).then((b=>Hg(b)))
        }
        uniform(a) {
            return this.sha384(a).then((b=>{
                let c = 0;
                for (let d = 2; 0 <= d; d--)
                    c = (c + b[d]) / 256;
                return c
            }
            ))
        }
        isPkcsAvailable() {
            return !!this.subtle && !1 !== this.A.isSecureContext
        }
        importPkcsKey(a) {
            this.isPkcsAvailable();
            if (this.df) {
                var b = JSON.stringify(a);
                b = "undefined" !== typeof TextEncoder ? new TextEncoder("utf-8").encode(b) : Qa(unescape(encodeURIComponent(b)))
            } else
                b = a;
            return this.subtle.importKey("jwk", b, this.pkcsAlgo, !0, ["verify"])
        }
        verifyPkcs(a, b, c) {
            this.isPkcsAvailable();
            return this.subtle.verify(this.pkcsAlgo, a, b, c)
        }
    }
    let Mg = ["prefetch", "preload", "preconnect", "dns-prefetch"];
    class Ng {
        constructor(a) {
            this.j = a;
            this.Wc = this.Cc = null
        }
        get() {
            if (this.Cc)
                return this.Cc;
            let a = this.j;
            var b = a.getUrl();
            let c = ne(b);
            var d = a.getRootNode();
            b = d && d.AMP && d.AMP.canonicalUrl;
            if (!b) {
                let h = d.querySelector("link[rel=canonical]");
                b = h ? X(h.href).href : c
            }
            let e = String(Math.floor(1e4 * a.win.Math.random()))
              , f = Og(a.win.document);
            d = Pg(a.win.document);
            let g = Qg(a);
            return this.Cc = {
                get sourceUrl() {
                    return ne(a.getUrl())
                },
                canonicalUrl: b,
                pageViewId: e,
                get pageViewId64() {
                    this.Wc || (this.Wc = Jg(a.win));
                    return this.Wc
                },
                linkRels: f,
                viewport: d,
                replaceParams: g
            }
        }
    }
    function Og(a) {
        let b = v();
        if (a.head) {
            let c = a.head.querySelectorAll("link[rel]");
            for (a = 0; a < c.length; a++) {
                let d = c[a]
                  , e = d.href
                  , f = d.getAttribute("rel");
                f && e && f.split(/\s+/).forEach((g=>{
                    if (-1 == Mg.indexOf(g)) {
                        var h = b[g];
                        h ? (A(h) || (h = b[g] = [h]),
                        h.push(e)) : b[g] = e
                    }
                }
                ))
            }
        }
        return b
    }
    function Pg(a) {
        let b = a.head.querySelector('meta[name="viewport"]');
        return b ? b.getAttribute("content") : null
    }
    function Qg(a) {
        var b;
        (b = !a.isSingleDoc()) || (b = a.win.location.href,
        b = be(b),
        b = "a" != (ke(b) ? b.pathname.split("/", 2)[1] : null));
        if (b)
            return null;
        a = X(a.win.location.href);
        let c = C(a.search).amp_r;
        return void 0 === c ? null : C(c)
    }
    let Rg = {
        attributes: !0,
        attributeFilter: ["hidden"],
        subtree: !0
    };
    function Sg(a) {
        if (!a.Y) {
            a.Ka = new V;
            var b = new a.A.MutationObserver((c=>{
                c && a.Ka.fire(c)
            }
            ));
            a.Y = b;
            b.observe(a.O, Rg)
        }
    }
    class Tg {
        constructor(a) {
            this.O = a.getRootNode();
            this.A = (this.O.ownerDocument || this.O).defaultView;
            this.Ka = this.Y = null
        }
        add(a) {
            Sg(this);
            let b = this.Ka.add(a);
            return ()=>{
                b();
                0 === this.Ka.getHandlerCount() && this.dispose()
            }
        }
        dispose() {
            this.Y && (this.Y.disconnect(),
            this.Ka.removeAll(),
            this.Ka = this.Y = null)
        }
    }
    function Ug(a) {
        try {
            return a.state
        } catch (b) {
            return null
        }
    }
    function Vg(a, b, c) {
        let d = new r
          , e = d.promise;
        a.P.push({
            callback: b,
            resolve: d.resolve,
            reject: d.reject,
            trace: Error("history trace for " + c + ": ")
        });
        1 == a.P.length && Wg(a);
        return e
    }
    function Xg(a, b) {
        if (!(a.C >= a.Ca.length - 1)) {
            var c = [];
            for (let d = a.Ca.length - 1; d > a.C; d--)
                a.Ca[d] && (c.push(a.Ca[d]),
                a.Ca[d] = void 0);
            a.Ca.splice(a.C + 1);
            if (0 < c.length)
                for (let d = 0; d < c.length; d++)
                    a.va.delay((()=>c[d](b)), 1)
        }
    }
    function Wg(a) {
        if (0 != a.P.length) {
            var b = a.P[0];
            try {
                var c = b.callback()
            } catch (d) {
                c = Promise.reject(d)
            }
            c.then((d=>{
                b.resolve(d)
            }
            ), (d=>{
                I().error("History", "failed to execute a task:", d);
                b.trace && (b.trace.message += d,
                I().error("History", b.trace));
                b.reject(d)
            }
            )).then((()=>{
                a.P.splice(0, 1);
                Wg(a)
            }
            ))
        }
    }
    class Yg {
        constructor(a, b) {
            this.j = a;
            this.va = R(a.win);
            this.G = b;
            this.C = 0;
            this.Ca = [];
            this.P = [];
            this.G.setOnStateUpdated(this.S.bind(this))
        }
        cleanup() {
            this.G.cleanup()
        }
        push(a, b) {
            return Vg(this, (()=>this.G.push(b).then((c=>{
                this.S(c);
                a && (this.Ca[c.stackIndex] = a);
                return c.stackIndex
            }
            ))), "push")
        }
        pop(a) {
            return Vg(this, (()=>this.G.pop(a).then((b=>{
                this.S(b)
            }
            ))), "pop")
        }
        replace(a) {
            return Vg(this, (()=>this.G.replace(a)), "replace")
        }
        get() {
            return Vg(this, (()=>this.G.get()), "get")
        }
        goBack(a) {
            return Vg(this, (()=>0 >= this.C && !a ? p() : this.G.pop(this.C).then((b=>{
                this.S(b)
            }
            ))), "goBack")
        }
        replaceStateForTarget(a) {
            let b = this.j.win.location.hash;
            return this.push((()=>{
                this.j.win.location.replace(b || "#")
            }
            )).then((()=>{
                this.G.replaceStateForTarget(a)
            }
            ))
        }
        getFragment() {
            return this.G.getFragment()
        }
        updateFragment(a) {
            "#" == a[0] && (a = a.substr(1));
            return this.G.updateFragment(a)
        }
        S(a) {
            this.C = a.stackIndex;
            Xg(this, a)
        }
    }
    function Zg(a, b, c) {
        a = v(c ? $g(a) : void 0);
        a["AMP.History"] = b;
        return a
    }
    function $g(a) {
        return a.Ff ? Ug(a.win.history) : a.Pa
    }
    function ah(a, b) {
        return a.ec ? a.ec.promise.then(b, b) : b()
    }
    function bh(a, b) {
        let c = y(y({}, a && a.data || {}), b.data || {});
        return y(y(y({}, a || {}), b), {}, {
            data: c
        })
    }
    function ch(a, b) {
        if (0 >= b)
            return Promise.resolve(a.C);
        a.Pa = Zg(a, a.C - b);
        let c = dh(a);
        a.win.history.go(-b);
        return c.then((()=>Promise.resolve(a.C)))
    }
    function dh(a) {
        var b = new r;
        let c = b.reject
          , d = b.resolve;
        b = a.va.timeoutPromise(500, b.promise);
        a.ec = {
            promise: b,
            resolve: d,
            reject: c
        };
        return b
    }
    class eh {
        constructor(a) {
            this.win = a;
            this.va = R(a);
            a = this.win.history;
            this.Da = a.length - 1;
            let b = Ug(a);
            b && void 0 !== b["AMP.History"] && (this.Da = Math.min(b["AMP.History"], this.Da));
            this.C = this.Da;
            this.S = null;
            this.Ff = "state"in a;
            this.Pa = Zg(this, this.C);
            let c, d;
            a.pushState && a.replaceState ? (this.Kb = a.originalPushState || a.pushState.bind(a),
            this.ib = a.originalReplaceState || a.replaceState.bind(a),
            c = (e,f,g)=>{
                this.Pa = e;
                this.Kb(e, f, g || null)
            }
            ,
            d = (e,f,g)=>{
                this.Pa = e;
                void 0 !== g ? this.ib(e, f, g) : this.ib(e, f)
            }
            ,
            a.originalPushState || (a.originalPushState = this.Kb),
            a.originalReplaceState || (a.originalReplaceState = this.ib)) : (c = e=>{
                this.Pa = e
            }
            ,
            d = e=>{
                this.Pa = e
            }
            );
            this.sf = c;
            this.Sb = d;
            try {
                this.Sb(Zg(this, this.C, !0))
            } catch (e) {
                I().error("History", "Initial replaceState failed: " + e.message)
            }
            a.pushState = this.Qd.bind(this);
            a.replaceState = this.Ac.bind(this);
            this.Ob = ()=>{
                let e = $g(this);
                let f = e ? e["AMP.History"] : void 0;
                let g = this.C;
                let h = this.ec;
                this.ec = void 0;
                g > this.win.history.length - 2 && (g = this.win.history.length - 2,
                this.ka(bh(e, {
                    stackIndex: g
                })));
                g = void 0 == f ? g + 1 : f < this.win.history.length ? f : this.win.history.length - 1;
                e || (e = {});
                e["AMP.History"] = g;
                this.Sb(e, void 0, void 0);
                g != this.C && this.ka(bh(e, {
                    stackIndex: g
                }));
                g < this.Da && (this.Da = g);
                h && h.resolve()
            }
            ;
            this.win.addEventListener("popstate", this.Ob)
        }
        cleanup() {
            this.Kb && (this.win.history.pushState = this.Kb);
            this.ib && (this.win.history.replaceState = this.ib);
            this.win.removeEventListener("popstate", this.Ob)
        }
        setOnStateUpdated(a) {
            this.S = a
        }
        push(a) {
            return ah(this, (()=>{
                let b = bh($g(this), a || {});
                this.Qd(b, void 0, b.fragment ? "#" + b.fragment : void 0);
                return ea((()=>bh(b, {
                    stackIndex: this.C
                })))
            }
            ))
        }
        pop(a) {
            a = Math.max(a, this.Da);
            return ah(this, (()=>ch(this, this.C - a + 1))).then((b=>bh($g(this), {
                stackIndex: b
            })))
        }
        replace(a={}) {
            return ah(this, (()=>{
                let b = bh($g(this), a || {})
                  , c = (b.url || "").replace(/#.*/, "")
                  , d = b.fragment ? "#" + b.fragment : "";
                this.Ac(b, b.title, c || d ? c + d : void 0);
                return ea((()=>bh(b, {
                    stackIndex: this.C
                })))
            }
            ))
        }
        get() {
            return ea((()=>bh($g(this), {
                stackIndex: this.C
            })))
        }
        backTo(a) {
            a = Math.max(a, this.Da);
            return ah(this, (()=>ch(this, this.C - a)))
        }
        Qd(a, b, c) {
            a || (a = {});
            let d = this.C + 1;
            a["AMP.History"] = d;
            this.sf(a, b, c);
            d != this.win.history.length - 1 && (d = this.win.history.length - 1,
            a["AMP.History"] = d,
            this.Sb(a));
            a = bh(a, {
                stackIndex: d
            });
            this.ka(a)
        }
        replaceStateForTarget(a) {
            ah(this, (()=>{
                this.win.removeEventListener("popstate", this.Ob);
                try {
                    this.win.location.replace(a)
                } finally {
                    this.win.addEventListener("popstate", this.Ob)
                }
                this.Ac();
                return p()
            }
            ))
        }
        Ac(a, b, c) {
            a || (a = {});
            let d = Math.min(this.C, this.win.history.length - 1);
            a["AMP.History"] = d;
            this.Sb(a, b, c);
            a = bh(a, {
                stackIndex: d
            });
            this.ka(a)
        }
        ka(a) {
            a.stackIndex = Math.min(a.stackIndex, this.win.history.length - 1);
            this.C != a.stackIndex && (this.C = a.stackIndex,
            this.S && this.S(a))
        }
        getFragment() {
            let {hash: a} = this.win.location;
            a = a.substr(1);
            return Promise.resolve(a)
        }
        updateFragment(a) {
            return this.replace({
                fragment: a
            })
        }
    }
    function fh(a) {
        return !!a && void 0 !== a.stackIndex
    }
    class gh {
        constructor(a, b) {
            this.win = a;
            this.F = b;
            this.C = 0;
            this.S = null;
            this.Jf = this.F.onMessage("historyPopped", (c=>{
                void 0 !== c.newStackIndex && (c.stackIndex = c.newStackIndex);
                fh(c) && this.ka(c)
            }
            ))
        }
        replaceStateForTarget(a) {
            this.win.location.replace(a)
        }
        cleanup() {
            this.Jf()
        }
        setOnStateUpdated(a) {
            this.S = a
        }
        push(a) {
            let b = y({
                stackIndex: this.C + 1
            }, a || {});
            return this.F.sendMessageAwaitResponse("pushHistory", b).then((c=>{
                c = fh(c) ? c : b;
                this.ka(c);
                return c
            }
            ))
        }
        pop(a) {
            if (a > this.C)
                return this.get();
            a = w({
                stackIndex: this.C
            });
            return this.F.sendMessageAwaitResponse("popHistory", a).then((b=>{
                let c = w({
                    stackIndex: this.C - 1
                });
                b = fh(b) ? b : c;
                this.ka(b);
                return b
            }
            ))
        }
        replace(a) {
            if (a && a.url) {
                if (!this.F.hasCapability("fullReplaceHistory")) {
                    let d = w({
                        stackIndex: this.C
                    });
                    return Promise.resolve(d)
                }
                let c = a.url.replace(/#.*/, "");
                a.url = c
            }
            let b = y({
                stackIndex: this.C
            }, a || {});
            return this.F.sendMessageAwaitResponse("replaceHistory", b, !0).then((c=>{
                c = fh(c) ? c : b;
                this.ka(c);
                return c
            }
            ))
        }
        get() {
            return Promise.resolve({
                data: void 0,
                fragment: "",
                stackIndex: this.C,
                title: ""
            })
        }
        ka(a) {
            let b = a.stackIndex;
            this.C != b && (this.C = b,
            this.S && this.S(a))
        }
        getFragment() {
            return this.F.hasCapability("fragment") ? this.F.sendMessageAwaitResponse("getFragment", void 0, !0).then((a=>{
                if (!a)
                    return "";
                "#" == a[0] && (a = a.substr(1));
                return a
            }
            )) : Promise.resolve("")
        }
        updateFragment(a) {
            return this.F.hasCapability("fragment") ? this.F.sendMessageAwaitResponse("replaceHistory", w({
                fragment: a
            }), !0) : p()
        }
    }
    function hh(a) {
        var b = S(a, "viewer");
        b.isOvertakeHistory() || a.win.__AMP_TEST_IFRAME ? b = new gh(a.win,b) : (M(a.win, "global-history-binding", eh),
        b = Q(a.win, "global-history-binding"));
        return new Yg(a,b)
    }
    new WeakMap;
    new WeakMap;
    let ih = null;
    let jh = ["gclid", "gclsrc"];
    function kh() {
        return J(ih, "E#19457 trackImpressionPromise")
    }
    function lh(a) {
        return a.whenReady().then((()=>!!a.getBody().querySelector("amp-analytics[type=googleanalytics]")))
    }
    function mh(a, b, c, d) {
        let e;
        try {
            e = a.open(b, c, d)
        } catch (g) {
            I().error("DOM", "Failed to open url on target: ", c, g)
        }
        if (!(c = e || "_top" == c)) {
            c = d || "";
            var f;
            "number" !== typeof f && (f = 0);
            c = f + 8 > c.length ? !1 : -1 !== c.indexOf("noopener", f)
        }
        c || (e = a.open(b, "_top"));
        return e
    }
    let nh = ["_top", "_blank"];
    function oh(a, b) {
        a.ce.forEach((c=>{
            b = c(b)
        }
        ));
        return b
    }
    function ph(a) {
        return (a = a.$.querySelector('meta[name="amp-to-amp-navigation"]')) && a.hasAttribute("content") ? a.getAttribute("content").split(",").map((b=>b.trim())) : []
    }
    function qh(a, b) {
        let c = null;
        if (a.od && !a.Gc) {
            a = X(a.ampdoc.win.location.href);
            var d = C(a.search);
            a = [];
            for (var e = 0; e < jh.length; e++) {
                var f = jh[e];
                "undefined" !== typeof d[f] && a.push(f)
            }
            d = b.getAttribute("data-amp-addparams");
            ({href: e} = b);
            d && (e = fe(e, C(d)));
            d = X(e);
            d = C(d.search);
            for (e = a.length - 1; 0 <= e; e--)
                "undefined" !== typeof d[a[e]] && a.splice(e, 1);
            d = "";
            for (e = 0; e < a.length; e++)
                f = a[e],
                d += 0 == e ? `${f}=QUERY_PARAM(${f})` : `&${f}=QUERY_PARAM(${f})`;
            c = d
        }
        qc(b, "url-replace").maybeExpandLink(b, c)
    }
    function rh(a, b) {
        return qc(a.ke, "url").parse(b)
    }
    function sh(a, b, c, d) {
        return c.hasAttribute("rel") && c.getAttribute("rel").split(" ").map((e=>e.trim())).includes("amphtml") ? a.navigateToAmpUrl(d.href, "<a rel=amphtml>") ? (b.preventDefault(),
        !0) : !1 : !1
    }
    function th(a, b, c) {
        a.nd.forEach((d=>{
            d(b, c)
        }
        ))
    }
    function uh(a, b, c, d) {
        b.preventDefault();
        if (!a.Gc) {
            b = c.hash.slice(1);
            var e = null;
            if (b) {
                let f = CSS.escape(b);
                e = a.$.getElementById(b) || a.$.querySelector(`a[name="${f}"]`)
            }
            c.hash != d.hash ? a.We.replaceStateForTarget(c.hash).then((()=>{
                vh(a, e)
            }
            )) : vh(a, e)
        }
    }
    function wh(a, b, c) {
        let d = b.href
          , e = `${b.origin}${b.pathname}${b.hash}`;
        a.history.replaceState(null, "", e);
        let f = ()=>{
            let g = a.location.href;
            g == e ? a.history.replaceState(null, "", d) : I().error("navigation", "Unexpected iframe URL change:", g, e)
        }
        ;
        "_blank" === c ? a.setTimeout(f, 0) : a.addEventListener("pageshow", (function k(h) {
            h.persisted && (f(),
            a.removeEventListener("pageshow", k))
        }
        ))
    }
    function vh(a, b) {
        b && (a.dc.scrollIntoView(b),
        R(a.ampdoc.win).delay((()=>a.dc.scrollIntoView(b)), 1))
    }
    class xh {
        constructor(a) {
            this.ampdoc = a;
            this.$ = a.getRootNode();
            this.dc = S(this.ampdoc, "viewport");
            this.F = S(this.ampdoc, "viewer");
            this.We = S(this.ampdoc, "history");
            this.sa = Q(this.ampdoc.win, "platform");
            this.cf = this.sa.isIos() && this.sa.isSafari();
            this.af = Lb(this.ampdoc.win) && this.F.isOvertakeHistory();
            this.Gc = this.$ != this.ampdoc.getRootNode() || !!this.ampdoc.getParent();
            this.bf = "inabox" == G(this.ampdoc.win).runtime;
            this.ke = this.$.nodeType == Node.DOCUMENT_NODE ? this.$.documentElement : this.$;
            this.Ua = this.Ue.bind(this);
            this.$.addEventListener("click", this.Ua);
            this.$.addEventListener("contextmenu", this.Ua);
            this.od = !1;
            lh(this.ampdoc).then((b=>{
                this.od = b
            }
            ));
            this.Td = this.Ud = !1;
            Promise.all([this.F.isTrustedViewer(), this.F.getViewerOrigin()]).then((b=>{
                this.Ud = b[0];
                this.Td = F.localhostRegex.test(be(b[1]).origin)
            }
            ));
            this.fc = null;
            this.nd = new Pe;
            this.ce = new Pe
        }
        cleanup() {
            this.Ua && (this.$.removeEventListener("click", this.Ua),
            this.$.removeEventListener("contextmenu", this.Ua))
        }
        openWindow(a, b, c, d) {
            let e = "";
            !this.sa.isIos() && this.sa.isChrome() || d || (e += "noopener");
            let f = mh(a, b, c, e);
            f && !d && (f.opener = null)
        }
        navigateTo(a, b, c, d={}) {
            let {opener: e=!1, target: f="_top"} = d;
            b = oh(this, b);
            let g = qc(this.ke, "url");
            if (g.isProtocolValid(b))
                if (J(nh.includes(f), `Target '${f}' not supported.`),
                d = g.getSourceUrl(a.location),
                b = g.resolveRelativeUrl(b, d),
                "_blank" == f)
                    this.openWindow(a, b, f, e);
                else {
                    if (c && (this.fc || (this.fc = ph(this)),
                    this.fc.includes(c) && this.navigateToAmpUrl(b, c)))
                        return;
                    a.top.location.href = b
                }
            else
                H().error("navigation", "Cannot navigate to invalid protocol: " + b)
        }
        navigateToAmpUrl(a, b) {
            return this.F.hasCapability("a2a") ? (this.F.sendMessage("a2aNavigate", w({
                url: a,
                requestedBy: b
            })),
            !0) : !1
        }
        Ue(a) {
            if (!a.defaultPrevented) {
                var b = tb(a.__AMP_CUSTOM_LINKER_TARGET__ || a.target, "A");
                if (b && b.href)
                    if ("click" == a.type) {
                        qh(this, b);
                        var d, c = rh(this, b.href);
                        if (d = !sh(this, a, b, c)) {
                            var e = c;
                            if (this.af) {
                                d = K(b);
                                var f = b.href;
                                e = e.protocol;
                                "ftp:" == e ? (mh(d, f, "_blank"),
                                a.preventDefault(),
                                d = !0) : (e = /^(https?|mailto):$/.test(e),
                                this.cf && !e ? (mh(d, f, "_top"),
                                a.preventDefault(),
                                d = !0) : d = !1)
                            } else
                                d = !1;
                            d = !d
                        }
                        if (d)
                            if (d = rh(this, ""),
                            yh(c) != yh(d) && (th(this, b, a),
                            c = rh(this, b.href)),
                            f = c,
                            c = yh(f),
                            e = yh(d),
                            f.hash && c == e)
                                uh(this, a, f, d);
                            else {
                                f = (b.getAttribute("target") || "").toLowerCase();
                                (this.Gc || this.bf) && "_top" != f && "_blank" != f && (f = "_blank",
                                b.setAttribute("target", f));
                                e = this.ampdoc.win;
                                let g = Q(e, "platform");
                                b = S(b, "viewer");
                                d.search && g.isSafari() && 13 <= g.getMajorVersion() && b.isProxyOrigin() && b.isEmbedded() && wh(e, d, f);
                                this.viewerInterceptsNavigation(c, "intercept_click") && a.preventDefault()
                            }
                    } else
                        "contextmenu" == a.type && (qh(this, b),
                        th(this, b, a))
            }
        }
        registerAnchorMutator(a, b) {
            this.nd.enqueue(a, b)
        }
        registerNavigateToMutator(a, b) {
            this.ce.enqueue(a, b)
        }
        viewerInterceptsNavigation(a, b) {
            let c = this.F.hasCapability("interceptNavigation")
              , d = this.ampdoc.isSingleDoc() && this.ampdoc.getRootNode().documentElement.hasAttribute("allow-navigation-interception");
            if (!c || !d || !this.Ud && !this.Td)
                return !1;
            this.F.sendMessage("navigateTo", w({
                url: a,
                requestedBy: b
            }));
            return !0
        }
    }
    function zh(a, b) {
        if ((a = tb(b.target, "A")) && a.href) {
            var c = a.getAttribute("data-a4a-orig-href") || a.getAttribute("href");
            if (c) {
                var d = qc(a, "url-replace").expandUrlSync(c, {
                    CLICK_X: ()=>b.pageX,
                    CLICK_Y: ()=>b.pageY
                }, {
                    CLICK_X: !0,
                    CLICK_Y: !0
                });
                d != c && (a.getAttribute("data-a4a-orig-href") || a.setAttribute("data-a4a-orig-href", c),
                a.setAttribute("href", d))
            }
        }
    }
    function yh(a) {
        return `${a.origin}${a.pathname}${a.search}`
    }
    function Ah(a) {
        return A(a) ? a : [a]
    }
    function Bh(a, b, c) {
        Ch(a, b, c, (d=>{
            d.element.ensureLoaded(b.getLayoutPriority())
        }
        ))
    }
    function Ch(a, b, c, d) {
        for (let e of c)
            b.element.contains(e),
            Dh(a, e, d)
    }
    function Dh(a, b, c) {
        if (b.classList.contains("i-amphtml-element"))
            c(a.B.getResourceForElement(b)),
            (b = b.getPlaceholder()) && Dh(a, b, c);
        else {
            b = b.getElementsByClassName("i-amphtml-element");
            let d = [];
            for (let e = 0; e < b.length; e++) {
                let f = b[e];
                let g = !1;
                for (let h = 0; h < d.length; h++)
                    if (d[h].contains(f)) {
                        g = !0;
                        break
                    }
                g || (d.push(f),
                c(a.B.getResourceForElement(f)))
            }
        }
    }
    class Eh {
        constructor(a) {
            this.B = S(a, "resources")
        }
        setOwner(a, b) {
            b.contains(a);
            De(a) && De(a).updateOwner(b);
            a.__AMP__OWNER = b;
            a = a.getElementsByClassName("i-amphtml-element");
            for (b = 0; b < a.length; b++) {
                let c = a[b];
                De(c) && De(c).updateOwner(void 0)
            }
        }
        schedulePreload(a, b) {
            Bh(this, this.B.getResourceForElement(a), Ah(b))
        }
        scheduleLayout(a, b) {
            Bh(this, this.B.getResourceForElement(a), Ah(b))
        }
        schedulePause(a, b) {
            let c = this.B.getResourceForElement(a);
            b = Ah(b);
            Ch(this, c, b, (d=>{
                d.pause()
            }
            ))
        }
        scheduleResume(a, b) {
            a = this.B.getResourceForElement(a);
            b = Ah(b);
            Ch(this, a, b, (c=>{
                c.resume()
            }
            ))
        }
        scheduleUnlayout(a, b) {
            a = this.B.getResourceForElement(a);
            b = Ah(b);
            Ch(this, a, b, (c=>{
                c.unlayout()
            }
            ))
        }
        requireLayout(a) {
            let b = [];
            Dh(this, a, (c=>{
                b.push(c.element.ensureLoaded())
            }
            ));
            return Promise.all(b)
        }
    }
    function Fh(a, b, c) {
        if (!a.M.userAgent)
            return 0;
        a = a.M.userAgent.match(b);
        return !a || c >= a.length ? 0 : parseInt(a[c], 10)
    }
    class Gh {
        constructor(a) {
            this.M = a.navigator;
            this.A = a
        }
        isAndroid() {
            return /Android/i.test(this.M.userAgent)
        }
        isIos() {
            return /iPhone|iPad|iPod/i.test(this.M.userAgent)
        }
        isSafari() {
            return /Safari/i.test(this.M.userAgent) && !this.isChrome() && !this.isEdge() && !this.isFirefox() && !this.isOpera()
        }
        isChrome() {
            return /Chrome|CriOS/i.test(this.M.userAgent) && !this.isEdge() && !this.isOpera()
        }
        isFirefox() {
            return /Firefox|FxiOS/i.test(this.M.userAgent) && !this.isEdge()
        }
        isOpera() {
            return /OPR\/|Opera|OPiOS/i.test(this.M.userAgent)
        }
        isEdge() {
            return /Edge/i.test(this.M.userAgent)
        }
        isWebKit() {
            return /WebKit/i.test(this.M.userAgent) && !this.isEdge()
        }
        isWindows() {
            return /Windows/i.test(this.M.userAgent)
        }
        isStandalone() {
            return this.isIos() && this.M.standalone || this.isChrome() && this.A.matchMedia("(display-mode: standalone)").matches
        }
        isBot() {
            return /bot/i.test(this.M.userAgent)
        }
        getMajorVersion() {
            return this.isSafari() ? this.isIos() ? this.getIosMajorVersion() || 0 : Fh(this, /\sVersion\/(\d+)/, 1) : this.isChrome() ? Fh(this, /(Chrome|CriOS)\/(\d+)/, 2) : this.isFirefox() ? Fh(this, /(Firefox|FxiOS)\/(\d+)/, 2) : this.isOpera() ? Fh(this, /(OPR|Opera|OPiOS)\/(\d+)/, 2) : this.isEdge() ? Fh(this, /Edge\/(\d+)/, 1) : 0
        }
        getIosVersionString() {
            if (!this.M.userAgent || !this.isIos())
                return "";
            let a = this.M.userAgent.match(/OS ([0-9]+[_.][0-9]+([_.][0-9]+)?)\b/);
            return a ? a = a[1].replace(/_/g, ".") : ""
        }
        getIosMajorVersion() {
            let a = this.getIosVersionString();
            return "" == a ? null : Number(a.split(".")[0])
        }
    }
    function Hh(a) {
        return a.hasAttribute("autofocus") ? a : a.querySelector("[autofocus]")
    }
    let Ih = /^i-amphtml-/;
    function Jh(a, b) {
        let c = b.args
          , d = b.caller
          , e = b.method
          , f = K(b.node);
        b = p();
        d.tagName.startsWith("AMP-") && (b = d.getImpl().then((g=>{
            "function" == typeof g.throwIfCannotNavigate && g.throwIfCannotNavigate()
        }
        )));
        return b.then((()=>{
            S(a.ampdoc, "navigation").navigateTo(f, c.url, `AMP.${e}`, {
                target: c.target,
                opener: c.opener
            })
        }
        ), (g=>{
            H().error("STANDARD-ACTIONS", g)
        }
        ))
    }
    function Kh(a, b) {
        let c = K(b.node)
          , d = c.parent != c;
        let e = !1;
        c.opener && a.ampdoc.isSingleDoc() && !d && (c.close(),
        e = c.closed);
        return e ? p() : Jh(a, b)
    }
    function Lh(a, b) {
        a.classList.contains("i-amphtml-element") ? a.expand() : Pc(a, !0);
        if (b)
            try {
                b.focus()
            } catch (c) {}
    }
    class Mh {
        constructor(a) {
            this.ampdoc = a;
            let b = a.getHeadNode();
            this.ga = S(a, "mutator");
            this.dc = S(a, "viewport");
            a = qc(b, "action");
            a.addGlobalTarget("AMP", this.Pe.bind(this));
            a.addGlobalMethodHandler("hide", this.Nd.bind(this));
            a.addGlobalMethodHandler("show", this.Pd.bind(this));
            a.addGlobalMethodHandler("toggleVisibility", this.Te.bind(this));
            a.addGlobalMethodHandler("scrollTo", this.Od.bind(this));
            a.addGlobalMethodHandler("focus", this.Qe.bind(this));
            a.addGlobalMethodHandler("toggleClass", this.Se.bind(this));
            a.addGlobalMethodHandler("toggleChecked", this.Re.bind(this))
        }
        Pe(a) {
            if (!a.satisfiesTrust(2))
                return null;
            let b = a.args
              , c = a.method
              , d = a.node
              , e = K(d);
            switch (c) {
            case "pushState":
            case "setState":
                return Ac(d.nodeType === Node.DOCUMENT_NODE ? d.documentElement : d).then((f=>{
                    J(f, "AMP-BIND is not installed.");
                    return f.invoke(a)
                }
                ));
            case "navigateTo":
                return Jh(this, a);
            case "closeOrNavigateTo":
                return Kh(this, a);
            case "scrollTo":
                return J(b.id, "AMP.scrollTo must provide element ID"),
                a.node = O(d).getElementById(b.id),
                this.Od(a);
            case "goBack":
                return S(this.ampdoc, "history").goBack(!(!b || !0 !== b.navigate)),
                null;
            case "print":
                return e.print(),
                null;
            case "optoutOfCid":
                return uc(P(this.ampdoc), "cid").then((f=>f.optOut())).catch((f=>{
                    I().error("STANDARD-ACTIONS", "Failed to opt out of CID", f)
                }
                ))
            }
            throw H().createError("Unknown AMP action ", c)
        }
        Od(a) {
            let b = a.node;
            let c = (a = a.args) && a.position
              , d = a && a.duration;
            c && !["top", "bottom", "center"].includes(c) && (c = void 0);
            Ka(d) || (d = void 0);
            return this.dc.animateScrollIntoView(b, c, d)
        }
        Qe(a) {
            try {
                a.node.focus()
            } catch (b) {}
            return null
        }
        Nd(a) {
            let b = a.node;
            b.classList.contains("i-amphtml-element") ? this.ga.mutateElement(b, (()=>b.collapse()), !0) : this.ga.mutateElement(b, (()=>Pc(b, !1)));
            return null
        }
        Pd(a) {
            let b = a.node
              , c = K(b);
            if (b.classList.contains("i-amphtml-layout-nodisplay"))
                return null;
            this.ga.measureElement((()=>{
                "none" == (c.getComputedStyle(b) || Lc).display && b.hasAttribute("hidden")
            }
            ));
            let d = Hh(b);
            d && Q(c, "platform").isIos() ? (Lh(b, d),
            this.ga.mutateElement(b, (()=>{}
            ))) : this.ga.mutateElement(b, (()=>{
                Lh(b, d)
            }
            ));
            return null
        }
        Te(a) {
            return a.node.hasAttribute("hidden") ? this.Pd(a) : this.Nd(a)
        }
        Se(a) {
            let b = a.node
              , c = a.args
              , d = H().assertString(c["class"], "Argument 'class' must be a string.");
            if (Ih.test(d))
                return null;
            this.ga.mutateElement(b, (()=>{
                if (void 0 !== c.force) {
                    let e = H().assertBoolean(c.force, "Optional argument 'force' must be a boolean.");
                    b.classList.toggle(d, e)
                } else
                    b.classList.toggle(d)
            }
            ));
            return null
        }
        Re(a) {
            let b = a.node
              , c = a.args;
            this.ga.mutateElement(b, (()=>{
                if (void 0 !== c.force) {
                    let d = H().assertBoolean(c.force, "Optional argument 'force' must be a boolean.");
                    b.checked = d
                } else
                    b.checked = !0 === b.checked ? !1 : !0
            }
            ));
            return null
        }
    }
    let Nh = ()=>{}
    ;
    function Oh(a, b) {
        var c = b.__AMP_IMPL_;
        if (c)
            return Promise.resolve(c);
        c = "";
        var d = b.tagName;
        "TEMPLATE" == d ? c = b.getAttribute("type") : "SCRIPT" == d && (c = b.getAttribute("template"));
        J(c, "Type must be specified: %s", b);
        if (d = b.__AMP_WAIT_)
            return d;
        d = Ph(a, c).then((e=>{
            let f = b.__AMP_IMPL_ = new e(b,a.j.win);
            delete b.__AMP_WAIT_;
            return f
        }
        ));
        return b.__AMP_WAIT_ = d
    }
    function Ph(a, b) {
        if (a.tb[b])
            return a.tb[b];
        var c = new r;
        let d = c.promise;
        c = c.resolve;
        a.tb[b] = d;
        a.ed[b] = c;
        return d
    }
    class Qh {
        constructor(a) {
            this.j = a;
            this.tb = {};
            this.ed = {}
        }
        whenReady(a) {
            return Oh(this, a).then(Nh)
        }
        setHtmlForTemplate(a, b) {
            return Oh(this, a).then((c=>c.setHtml(b)))
        }
        renderTemplate(a, b) {
            return Oh(this, a).then((c=>c.render(b)))
        }
        renderTemplateAsString(a, b) {
            return Oh(this, a).then((c=>c.renderAsString(b)))
        }
        renderTemplateArray(a, b) {
            return 0 == b.length ? Promise.resolve([]) : Oh(this, a).then((c=>b.map((d=>c.render(d)))))
        }
        findAndRenderTemplate(a, b, c) {
            return this.renderTemplate(this.findTemplate(a, c), b)
        }
        findAndSetHtmlForTemplate(a, b, c) {
            return this.setHtmlForTemplate(this.findTemplate(a, c), b)
        }
        findAndRenderTemplateArray(a, b, c) {
            return this.renderTemplateArray(this.findTemplate(a, c), b)
        }
        hasTemplate(a, b) {
            return !!this.maybeFindTemplate(a, b)
        }
        findTemplate(a, b) {
            b = this.maybeFindTemplate(a, b);
            J(b, "Template not found for %s", a);
            let c = b.tagName;
            J("TEMPLATE" == c || "SCRIPT" == c && "text/plain" === b.getAttribute("type"), 'Template must be defined in a <template> or <script type="text/plain"> tag');
            return b
        }
        maybeFindTemplate(a, b) {
            let c = a.getAttribute("template");
            return c ? Ib(a).getElementById(c) : b ? qb(a, b) : a.querySelector('template[type], script[type="text/plain"]')
        }
    }
    class Rh {
        constructor(a) {
            this.win = a;
            this.vf = this.win.Promise.resolve();
            this.Gf = 0;
            this.nc = {};
            this.Cf = Date.now()
        }
        timeSinceStart() {
            return Date.now() - this.Cf
        }
        delay(a, b) {
            if (!b) {
                let c = "p" + this.Gf++;
                this.vf.then((()=>{
                    this.nc[c] ? delete this.nc[c] : a()
                }
                )).catch(ue);
                return c
            }
            return this.win.setTimeout((()=>{
                try {
                    a()
                } catch (c) {
                    throw ue(c),
                    c
                }
            }
            ), b)
        }
        cancel(a) {
            "string" == typeof a ? this.nc[a] = !0 : this.win.clearTimeout(a)
        }
        promise(a) {
            return new this.win.Promise((b=>{
                if (-1 == this.delay(b, a))
                    throw Error("Failed to schedule timer.")
            }
            ))
        }
        timeoutPromise(a, b, c) {
            let d;
            let e = new this.win.Promise(((g,h)=>{
                d = this.delay((()=>{
                    h(H().createError(c || "timeout"))
                }
                ), a);
                if (-1 == d)
                    throw Error("Failed to schedule timer.")
            }
            ));
            if (!b)
                return e;
            let f = ()=>{
                this.cancel(d)
            }
            ;
            b.then(f, f);
            return this.win.Promise.race([e, b])
        }
        poll(a, b) {
            return new this.win.Promise((c=>{
                let d = this.win.setInterval((()=>{
                    b() && (this.win.clearInterval(d),
                    c())
                }
                ), a)
            }
            ))
        }
    }
    function Sh(a, b) {
        return "string" !== typeof b ? b : a.parse(b)
    }
    class Th {
        constructor(a) {
            a = a.getRootNode();
            this.Ae = (a.ownerDocument || a).createElement("a");
            this.Kf = null
        }
        parse(a) {
            return ce(this.Ae, a)
        }
        isProtocolValid(a) {
            return !(a && ae.includes(be(a).protocol))
        }
        getSourceOrigin(a) {
            return X(ne(Sh(this, a))).origin
        }
        getSourceUrl(a) {
            return ne(Sh(this, a))
        }
        resolveRelativeUrl(a, b) {
            return oe(a, Sh(this, b))
        }
        assertHttpsUrl(a, b, c="source") {
            return ie(a, b, c)
        }
        assertAbsoluteHttpOrHttpsUrl(a) {
            J(/^https?:/i.test(a), 'URL must start with "http://" or "https://". Invalid value: %s', a);
            return X(a).href
        }
        isProxyOrigin(a) {
            return ke(Sh(this, a))
        }
        isSecure(a) {
            return he(Sh(this, a))
        }
        getWinOrigin(a) {
            return a.origin || Sh(this, a.location.href).origin
        }
        getCdnUrlOnOrigin(a) {
            if (ke(a))
                return a;
            let {hash: b, host: c, pathname: d, search: e} = Sh(this, a)
              , f = encodeURIComponent(c);
            return `${F.cdn}/c/${f}${d}${e}${b}`
        }
    }
    function Uh(a, b) {
        let c = [];
        a.replace(b, ((d,e,f)=>{
            d = d.length;
            c.push({
                start: f,
                stop: d + f - 1,
                name: e,
                length: d
            })
        }
        ));
        return c
    }
    function Vh(a, b, c) {
        let d = [];
        let e = 0
          , f = 0
          , g = c[f]
          , h = 0
          , k = !1;
        let l = m=>{
            var n = "";
            let q = [];
            let E = [];
            for (; e < b.length && f <= c.length; ) {
                let z = n.trim();
                if (g && e === g.start)
                    z && q.push(h ? Ja(n) : n),
                    n = a.Ra && ja.call(a.Ra, g.name) ? {
                        name: g.name,
                        prioritized: a.Ra[g.name],
                        encode: m
                    } : y(y({}, a.U.get(g.name)), {}, {
                        name: g.name,
                        encode: m
                    }),
                    e = g.stop + 1,
                    g = c[++f],
                    "(" === b[e] ? (e++,
                    h++,
                    d.push(n),
                    q.push(l(!1))) : q.push(Wh(a, n)),
                    n = "";
                else {
                    if ("`" === b[e])
                        k ? (k = !1,
                        n.length && q.push(n)) : (k = !0,
                        z && q.push(z)),
                        n = "";
                    else if (h && "," === b[e] && !k)
                        z && q.push(z),
                        E.push(q),
                        q = [],
                        "," === b[e + 1] && (E.push([""]),
                        e++),
                        n = "";
                    else {
                        if (h && ")" === b[e] && !k)
                            return e++,
                            h--,
                            n = d.pop(),
                            z && q.push(z),
                            E.push(q),
                            Wh(a, n, E);
                        n += b[e]
                    }
                    e++
                }
                e === b.length && n.length && q.push(n)
            }
            return a.Oa ? q.join("") : Promise.all(q).then((z=>z.join(""))).catch((z=>{
                u(z);
                return ""
            }
            ))
        }
        ;
        return l(a.Je)
    }
    function Wh(a, b, c) {
        let d = b.encode
          , e = b.name;
        let f;
        void 0 != b.prioritized ? f = b.prioritized : a.Oa && void 0 != b.sync ? f = b.sync : a.Oa ? (H().error("Expander", "ignoring async replacement key: ", b.name),
        f = "") : f = b.async || b.sync;
        return a.Oa ? (a = Xh(a, f, e, c),
        d ? encodeURIComponent(a) : a) : Yh(a, f, e, c).then((g=>d ? encodeURIComponent(g) : g))
    }
    function Xh(a, b, c, d) {
        try {
            let e = b;
            "function" === typeof b && (e = b.apply(null, Zh(d)));
            let f;
            e && "function" == typeof e.then ? (H().error("Expander", "ignoring async macro resolution"),
            f = "") : "string" === typeof e || "number" === typeof e || "boolean" === typeof e ? ($h(a, c, e, d),
            f = e.toString()) : ($h(a, c, "", d),
            f = "");
            return f
        } catch (e) {
            return u(e),
            $h(a, c, "", d),
            ""
        }
    }
    function Yh(a, b, c, d) {
        let e;
        try {
            return e = "function" === typeof b ? d ? ai(d).then((f=>b.apply(null, f))) : ea(b) : Promise.resolve(b),
            e.then((f=>{
                $h(a, c, f, d);
                return null == f ? "" : f
            }
            )).catch((f=>{
                u(f);
                $h(a, c, "", d);
                return Promise.resolve("")
            }
            ))
        } catch (f) {
            return u(f),
            $h(a, c, "", d),
            Promise.resolve("")
        }
    }
    function ai(a) {
        return Promise.all(a.map((b=>Promise.all(b).then((c=>c.join(""))))))
    }
    function $h(a, b, c, d) {
        if (a.zd) {
            var e = "";
            d && (e = `(${d.filter((f=>"" !== f)).join(",")})`);
            a.zd[`${b}${e}`] = c || ""
        }
    }
    function Zh(a) {
        return a ? a.map((b=>b.join(""))) : a
    }
    class bi {
        constructor(a, b, c, d, e, f) {
            this.U = a;
            this.Ra = b;
            this.zd = c;
            this.Oa = d;
            this.V = e;
            this.Je = !f
        }
        expand(a) {
            if (!a.length)
                return this.Oa ? a : Promise.resolve(a);
            var b = this.U.getExpr(this.Ra, this.V);
            b = Uh(a, b);
            return b.length ? Vh(this, a, b) : this.Oa ? a : Promise.resolve(a)
        }
        getMacroNames(a) {
            let b = this.U.getExpr(this.Ra, this.V);
            return (a = a.match(b)) ? a : []
        }
    }
    let ci = {
        navigationStart: 1,
        redirectStart: 1,
        redirectEnd: 1,
        fetchStart: 1,
        domainLookupStart: 1,
        domainLookupEnd: 1,
        connectStart: 1,
        secureConnectionStart: 1,
        connectEnd: 1,
        requestStart: 1,
        responseStart: 1,
        responseEnd: 1,
        domLoading: 2,
        domInteractive: 2,
        domContentLoaded: 2,
        domComplete: 2,
        loadEventStart: 3,
        loadEventEnd: 4
    };
    function di(a, b, c) {
        let d = ci[b] || 3
          , e = Math.max(d, c ? ci[c] || 3 : d);
        let f;
        if (1 === e)
            f = p();
        else if (2 === e)
            f = Ic(a.document);
        else if (3 === e)
            f = Ld(a);
        else if (4 === e) {
            let g = R(a);
            f = Ld(a).then((()=>g.promise(1)))
        }
        return f.then((()=>ei(a, b, c)))
    }
    function ei(a, b, c) {
        let d = a.performance && a.performance.timing;
        if (d && 0 != d.navigationStart) {
            var e = void 0 === c ? d[b] : d[c] - d[b];
            if (Ka(e) && !(0 > e))
                return e
        }
    }
    function fi(a, b) {
        let c = a.performance && a.performance.navigation;
        if (c && void 0 !== c[b])
            return c[b]
    }
    function gi(a) {
        if (a.kd)
            return a.kd;
        if (a.ampdoc.isSingleDoc()) {
            let b = a.ampdoc.getRootNode();
            if (Qf(b))
                return a.kd = [""],
                a.kd
        }
    }
    function hi(a, b, c) {
        gi(a) && (b = b.filter((e=>gi(a).includes(e))));
        c && (b = b.filter((e=>c[e])));
        if (0 === b.length)
            return /_^/g;
        b.sort(((e,f)=>f.length - e.length));
        let d = "\\$?(" + b.map((e=>"$" === e[0] ? "\\" + e : e)).join("|") + ")";
        return new RegExp(d,"g")
    }
    class ii {
        constructor(a) {
            this.ampdoc = a;
            this.ua = Object.create(null);
            this.Ec = !1;
            gi(this)
        }
        ab() {
            this.initialize();
            this.Ec = !0
        }
        initialize() {}
        get(a) {
            this.Ec || this.ab();
            return this.ua[a]
        }
        set(a, b) {
            a.indexOf("RETURN");
            this.ua[a] = this.ua[a] || {
                sync: void 0,
                async: void 0
            };
            this.ua[a].sync = b;
            return this
        }
        setAsync(a, b) {
            a.indexOf("RETURN");
            this.ua[a] = this.ua[a] || {
                sync: void 0,
                async: void 0
            };
            this.ua[a].async = b;
            return this
        }
        setBoth(a, b, c) {
            return this.set(a, b).setAsync(a, c)
        }
        getExpr(a, b) {
            this.Ec || this.ab();
            let c = y(y({}, this.ua), a);
            return hi(this, Object.keys(c), b)
        }
    }
    function ji(a) {
        return ()=>(new Date)[a]()
    }
    function ki(a, b) {
        return ()=>a[b]
    }
    function li(a, b) {
        return b ? (J("ISOCountry" === b, "The value passed to AMP_GEO() is not valid name:" + b),
        a && a[b] || "unknown") : (null === a || void 0 === a ? void 0 : a.matchedISOCountryGroups.join(",")) || "unknown"
    }
    function mi(a, b, c, d) {
        a.setBoth(b, (()=>ei(a.ampdoc.win, c, d)), (()=>di(a.ampdoc.win, c, d)))
    }
    function Z(a) {
        return S(a.ampdoc, "documentInfo").get()
    }
    function ni(a, b) {
        ({replaceParams: a} = Z(a));
        if (a) {
            var c = le(b)
              , d = X(c);
            d = C(d.search);
            let e = w({})
              , f = Object.keys(a);
            for (let g = 0; g < f.length; g++)
                ja.call(d, f[g]) || (e[f[g]] = a[f[g]]);
            a = fe(c, e)
        } else
            a = b;
        return a
    }
    function oi(a, b, c) {
        J(b, "The first argument to QUERY_PARAM, the query string param is required");
        var d = X(le(a.ampdoc.win.location.href));
        d = C(d.search);
        ({replaceParams: a} = Z(a));
        return "undefined" !== typeof d[b] ? d[b] : a && "undefined" !== typeof a[b] ? a[b] : c
    }
    function pi(a, b, c) {
        return zc(a.ampdoc.getHeadNode(), "variant", "amp-experiment", !0).then((d=>{
            J(d, "To use variable %s, amp-experiment should be configured", c);
            return d.getVariants()
        }
        )).then((d=>b(d)))
    }
    function qi(a, b) {
        return null !== a.Va ? b(a.Va) : zc(a.ampdoc.getHeadNode(), "geo", "amp-geo", !0).then((c=>{
            J(c, "To use variable %s, amp-geo should be configured", "AMP_GEO");
            a.Va = c;
            return b(c)
        }
        ))
    }
    function ri(a, b, c) {
        a = a.ampdoc.getHeadNode();
        return Promise.all([zc(a, "access", "amp-access"), zc(a, "subscriptions", "amp-subscriptions")]).then((d=>{
            let e = d[0]
              , f = d[1];
            d = e || f;
            return d ? e && f ? b(f) || b(e) : b(d) : (H().error("UrlReplacements", "Access or subsciptions service is not installed to access: ", c),
            null)
        }
        ))
    }
    class si extends ii {
        constructor(a) {
            super(a);
            this.Va = null
        }
        initialize() {
            let a = this.ampdoc.win
              , b = this.ampdoc.getHeadNode()
              , c = S(this.ampdoc, "viewport");
            zc(this.ampdoc, "geo", "amp-geo", !0).then((h=>{
                this.Va = h
            }
            ));
            this.set("RANDOM", (()=>Math.random()));
            let d = Object.create(null);
            this.set("COUNTER", (h=>d[h] = (0 | d[h]) + 1));
            this.set("CANONICAL_URL", (()=>Z(this).canonicalUrl));
            this.set("CANONICAL_HOST", (()=>X(Z(this).canonicalUrl).host));
            this.set("CANONICAL_HOSTNAME", (()=>X(Z(this).canonicalUrl).hostname));
            this.set("CANONICAL_PATH", (()=>X(Z(this).canonicalUrl).pathname));
            this.setAsync("DOCUMENT_REFERRER", (()=>S(this.ampdoc, "viewer").getReferrerUrl()));
            this.setAsync("EXTERNAL_REFERRER", (()=>S(this.ampdoc, "viewer").getReferrerUrl().then((h=>h ? X(ne(h)).hostname === a.location.hostname ? null : h : null))));
            this.set("TITLE", (()=>{
                let h = a.document;
                return h.originalTitle || h.title
            }
            ));
            this.set("AMPDOC_URL", (()=>je(ni(this, a.location.href))));
            this.set("AMPDOC_HOST", (()=>{
                let h = X(a.location.href);
                return h && h.host
            }
            ));
            this.set("AMPDOC_HOSTNAME", (()=>{
                let h = X(a.location.href);
                return h && h.hostname
            }
            ));
            let e = ()=>{
                let h = Z(this);
                return je(ni(this, h.sourceUrl))
            }
            ;
            this.setBoth("SOURCE_URL", (()=>e()), (()=>kh().then((()=>e()))));
            this.set("SOURCE_HOST", (()=>X(Z(this).sourceUrl).host));
            this.set("SOURCE_HOSTNAME", (()=>X(Z(this).sourceUrl).hostname));
            this.set("SOURCE_PATH", (()=>X(Z(this).sourceUrl).pathname));
            this.set("PAGE_VIEW_ID", (()=>Z(this).pageViewId));
            this.setAsync("PAGE_VIEW_ID_64", (()=>Z(this).pageViewId64));
            this.setBoth("QUERY_PARAM", ((h,k="")=>oi(this, h, k)), ((h,k="")=>kh().then((()=>oi(this, h, k)))));
            this.set("FRAGMENT_PARAM", ((h,k="")=>{
                J(h, "The first argument to FRAGMENT_PARAM, the fragment string param is required");
                J("string" == typeof h, "param should be a string");
                let l = Ya(this.ampdoc.win);
                return void 0 === l[h] ? k : l[h]
            }
            ));
            let f = null;
            this.setBoth("CLIENT_ID", (h=>f ? f[h] : null), ((h,k,l,m)=>{
                J(h, "The first argument to CLIENT_ID, the fallback Cookie name, is required");
                let n = p();
                k && (n = yc(b, "userNotificationManager", "amp-user-notification").then((q=>q.get(k))));
                return uc(P(this.ampdoc), "cid").then((q=>{
                    m = "true" == m ? !0 : !1;
                    return q.get({
                        scope: h,
                        createCookieIfNotPresent: !0,
                        cookieName: l || void 0,
                        disableBackup: m
                    }, n)
                }
                )).then((q=>{
                    f || (f = Object.create(null));
                    let E = l || h;
                    q && "_ga" == E && ("string" === typeof q ? q = q.replace(/^(GA1|1)\.[\d-]+\./, "") : I().error("UrlReplacements", "non-string cid, what is it?", Object.keys(q)));
                    return f[h] = q
                }
                ))
            }
            ));
            this.setAsync("VARIANT", (h=>pi(this, (k=>{
                let l = k[h];
                J(void 0 !== l, "The value passed to VARIANT() is not a valid experiment in <amp-experiment>:" + h);
                return null === l ? "none" : l
            }
            ), "VARIANT")));
            this.setAsync("VARIANTS", (()=>pi(this, (h=>{
                let k = [];
                for (let l in h)
                    k.push(l + "." + (h[l] || "none"));
                return k.join("!")
            }
            ), "VARIANTS")));
            this.setBoth("AMP_GEO", (h=>li(this.Va, h)), (h=>qi(this, (k=>li(k, h)))));
            this.set("TIMESTAMP", ji("getTime"));
            this.set("TIMESTAMP_ISO", ji("toISOString"));
            this.set("TIMEZONE", ji("getTimezoneOffset"));
            this.set("SCROLL_HEIGHT", (()=>c.getScrollHeight()));
            this.set("SCROLL_WIDTH", (()=>c.getScrollWidth()));
            this.set("VIEWPORT_HEIGHT", (()=>c.getHeight()));
            this.set("VIEWPORT_WIDTH", (()=>c.getWidth()));
            let g = a.screen;
            this.set("SCREEN_WIDTH", ki(g, "width"));
            this.set("SCREEN_HEIGHT", ki(g, "height"));
            this.set("AVAILABLE_SCREEN_HEIGHT", ki(g, "availHeight"));
            this.set("AVAILABLE_SCREEN_WIDTH", ki(g, "availWidth"));
            this.set("SCREEN_COLOR_DEPTH", ki(g, "colorDepth"));
            this.set("DOCUMENT_CHARSET", (()=>{
                let h = a.document;
                return h.characterSet || h.charset
            }
            ));
            this.set("BROWSER_LANGUAGE", (()=>{
                let h = a.navigator;
                return (h.language || h.userLanguage || h.browserLanguage || "").toLowerCase()
            }
            ));
            this.set("USER_AGENT", (()=>a.navigator.userAgent));
            this.setAsync("UACH", (h=>{
                var k, l, m;
                return (null === (k = a.navigator) || void 0 === k ? void 0 : null === (l = k.userAgentData) || void 0 === l ? void 0 : null === (m = l.getHighEntropyValues([h])) || void 0 === m ? void 0 : m.then((n=>"object" !== typeof n[h] ? n[h] : JSON.stringify(n[h])))) || Promise.resolve("")
            }
            ));
            mi(this, "PAGE_LOAD_TIME", "navigationStart", "loadEventStart");
            mi(this, "DOMAIN_LOOKUP_TIME", "domainLookupStart", "domainLookupEnd");
            mi(this, "TCP_CONNECT_TIME", "connectStart", "connectEnd");
            mi(this, "SERVER_RESPONSE_TIME", "requestStart", "responseStart");
            mi(this, "PAGE_DOWNLOAD_TIME", "responseStart", "responseEnd");
            mi(this, "REDIRECT_TIME", "navigationStart", "fetchStart");
            mi(this, "DOM_INTERACTIVE_TIME", "navigationStart", "domInteractive");
            mi(this, "CONTENT_LOAD_TIME", "navigationStart", "domContentLoadedEventStart");
            this.setAsync("ACCESS_READER_ID", (()=>ri(this, (h=>h.getAccessReaderId()), "ACCESS_READER_ID")));
            this.setAsync("AUTHDATA", (h=>{
                J(h, "The first argument to AUTHDATA, the field, is required");
                return ri(this, (k=>k.getAuthdataField(h)), "AUTHDATA")
            }
            ));
            this.setAsync("VIEWER", (()=>S(this.ampdoc, "viewer").getViewerOrigin().then((h=>void 0 == h ? "" : h))));
            this.setAsync("TOTAL_ENGAGED_TIME", (()=>yc(b, "activity", "amp-analytics").then((h=>h.getTotalEngagedTime()))));
            this.setAsync("INCREMENTAL_ENGAGED_TIME", ((h,k)=>yc(b, "activity", "amp-analytics").then((l=>l.getIncrementalEngagedTime(h, "false" !== k)))));
            this.set("NAV_TIMING", ((h,k)=>{
                J(h, "The first argument to NAV_TIMING, the start attribute name, is required");
                return ei(a, h, k)
            }
            ));
            this.setAsync("NAV_TIMING", ((h,k)=>{
                J(h, "The first argument to NAV_TIMING, the start attribute name, is required");
                return di(a, h, k)
            }
            ));
            this.set("NAV_TYPE", (()=>fi(a, "type")));
            this.set("NAV_REDIRECT_COUNT", (()=>fi(a, "redirectCount")));
            this.set("AMP_VERSION", (()=>aa()));
            this.set("BACKGROUND_STATE", (()=>this.ampdoc.isVisible() ? "0" : "1"));
            this.setAsync("VIDEO_STATE", ((h,k)=>S(this.ampdoc, "video-manager").getVideoStateProperty(h, k)));
            this.setAsync("AMP_STATE", (h=>{
                let k = this.ampdoc.getRootNode();
                return Ac(k.documentElement || k).then((l=>l ? l.getStateValue(h) || "" : ""))
            }
            ))
        }
    }
    function ti(a, b) {
        let c = X(b).protocol
          , d = X(a).protocol;
        if (c != d)
            return H().error("UrlReplacements", "Illegal replacement of the protocol: ", a),
            a;
        J(!(b && ae.includes(be(b).protocol)), "The replacement url has invalid protocol: %s", b);
        return b
    }
    function ui(a, b, c) {
        "INPUT" == b.tagName && (b.getAttribute("type") || "").toLowerCase();
        let d = vi(b);
        if (!d)
            return c ? b.value : Promise.resolve(b.value);
        void 0 === b["amp-original-value"] && (b["amp-original-value"] = b.value);
        a = new bi(a.U,void 0,void 0,c,d).expand(b["amp-original-value"] || b.value);
        return c ? b.value = a : a.then((e=>b.value = e))
    }
    function vi(a, b) {
        if (a = a.getAttribute("data-amp-replace")) {
            var c = {};
            a.trim().split(/\s+/).forEach((d=>{
                if (!b || ja.call(b, d))
                    c[d] = !0
            }
            ));
            return c
        }
    }
    class wi {
        constructor(a, b) {
            this.ampdoc = a;
            this.U = b
        }
        expandStringSync(a, b, c) {
            return new bi(this.U,b,void 0,!0,c,!0).expand(a)
        }
        expandStringAsync(a, b, c) {
            return new bi(this.U,b,void 0,void 0,c,!0).expand(a)
        }
        expandUrlSync(a, b, c) {
            return ti(a, new bi(this.U,b,void 0,!0,c).expand(a))
        }
        expandUrlAsync(a, b, c, d) {
            return new bi(this.U,b,void 0,void 0,c,d).expand(a).then((e=>ti(a, e)))
        }
        expandInputValueAsync(a) {
            return ui(this, a, !1)
        }
        expandInputValueSync(a) {
            return ui(this, a, !0)
        }
        maybeExpandLink(a, b) {
            let c = a.getAttribute("data-amp-addparams") || "";
            let d = vi(a, {
                CLIENT_ID: !0,
                QUERY_PARAM: !0,
                PAGE_VIEW_ID: !0,
                PAGE_VIEW_ID_64: !0,
                NAV_TIMING: !0
            });
            if (d || c || b) {
                var e = a["amp-original-href"] || a.getAttribute("href")
                  , f = X(e);
                null == a["amp-original-href"] && (a["amp-original-href"] = e);
                a: {
                    var g = S(this.ampdoc, "documentInfo").get();
                    if (f.origin == X(g.canonicalUrl).origin || f.origin == X(g.sourceUrl).origin)
                        var h = !0;
                    else {
                        if (g = this.ampdoc.getMetaByName("amp-link-variable-allowed-origin")) {
                            g = g.trim().split(/\s+/);
                            for (let k = 0; k < g.length; k++)
                                if (f.origin == X(g[k]).origin) {
                                    h = !0;
                                    break a
                                }
                        }
                        h = !1
                    }
                }
                c && (h ? (f = c,
                f = d ? this.expandUrlSync(f, void 0, d) : f) : f = c,
                c = f,
                e = fe(e, C(c)));
                if (!h)
                    return a.href = e;
                b && (d && d.QUERY_PARAM || (b = this.expandUrlSync(b, void 0, {
                    QUERY_PARAM: !0
                })),
                e = fe(e, C(b)));
                e = d ? this.expandUrlSync(e, void 0, d) : e;
                return a.href = e
            }
        }
        collectVars(a, b) {
            let c = Object.create(null);
            return new bi(this.U,b,c).expand(a).then((()=>c))
        }
        collectDisallowedVarsSync(a) {
            let b = a.getAttribute("src")
              , c = new bi(this.U).getMacroNames(b)
              , d = vi(a);
            return d ? c.filter((e=>!d[e])) : c
        }
        getVariableSource() {
            return this.U
        }
    }
    function xi(a) {
        N(a, "url-replace", (function(b) {
            return new wi(b,new si(b))
        }
        ))
    }
    function yi(a) {
        let b = a.win.requestAnimationFrame || a.win.webkitRequestAnimationFrame;
        if (b)
            return b.bind(a.win);
        let c = 0;
        return d=>{
            let e = Date.now()
              , f = Math.max(0, 16 - (e - c));
            c = e + f;
            a.win.setTimeout(d, f)
        }
    }
    function zi(a) {
        Ai(a) ? (a.tf(a.lc),
        a.qd.schedule()) : a.Ze.schedule()
    }
    function Ai(a, b) {
        return "visible" != Sc(a.win.document) ? !1 : a.la.isSingleDoc() ? a.la.getSingleDoc().isVisible() : b ? (a = a.la.getAmpDocIfAvailable(b),
        !a || a.isVisible()) : !0
    }
    class Bi {
        constructor(a) {
            this.win = a;
            this.la = U(this.win);
            this.tf = yi(this);
            this.ia = [];
            this.Sc = [];
            this.cd = [];
            this.Rc = [];
            this.ha = !1;
            this.Qc = this.Hb = null;
            this.lc = this.yf.bind(this);
            this.Ze = new Nf(this.win,this.lc,16);
            this.qd = new Nf(this.win,this.lc,40);
            this.kc = this.rf.bind(this);
            if (this.la.isSingleDoc())
                this.la.getSingleDoc().onVisibilityChanged(this.kc);
            else
                Tc(this.win.document, this.kc)
        }
        dispose() {
            Vc(this.win.document, this.kc)
        }
        rf() {
            this.ha && zi(this)
        }
        run(a, b) {
            this.ia.push(a);
            this.cd.push(b || void 0);
            this.Na()
        }
        runPromise(a, b) {
            this.run(a, b);
            if (this.Hb)
                return this.Hb;
            a = new r;
            this.Qc = a.resolve;
            return this.Hb = a.promise
        }
        createTask(a) {
            return b=>{
                this.run(a, b)
            }
        }
        mutate(a) {
            this.run({
                measure: void 0,
                mutate: a
            })
        }
        mutatePromise(a) {
            return this.runPromise({
                measure: void 0,
                mutate: a
            })
        }
        measure(a) {
            this.run({
                measure: a,
                mutate: void 0
            })
        }
        measurePromise(a) {
            return new Promise((b=>{
                this.measure((()=>{
                    b(a())
                }
                ))
            }
            ))
        }
        canAnimate(a) {
            return Ai(this, a)
        }
        runAnim(a, b, c) {
            if (!Ai(this, a))
                return !1;
            this.run(b, c);
            return !0
        }
        createAnimTask(a, b) {
            return c=>this.runAnim(a, b, c)
        }
        runAnimMutateSeries(a, b, c) {
            return Ai(this, a) ? new Promise(((d,e)=>{
                let f = Date.now();
                let g = 0;
                let h = this.createAnimTask(a, {
                    mutate: k=>{
                        let l = Date.now() - f;
                        b(l, l - g, k) ? c && l > c ? e(Error("timeout")) : (g = l,
                        h(k)) : d()
                    }
                });
                h({})
            }
            )) : Promise.reject(we())
        }
        Na() {
            this.ha || (this.ha = !0,
            zi(this))
        }
        yf() {
            this.qd.cancel();
            this.ha = !1;
            let a = this.Qc
              , b = this.cd
              , c = this.ia;
            this.Hb = this.Qc = null;
            this.ia = this.Sc;
            this.cd = this.Rc;
            for (var d = 0; d < c.length; d++)
                c[d].measure && !Ci(c[d].measure, b[d]) && (c[d].mutate = void 0);
            for (d = 0; d < c.length; d++)
                c[d].mutate && Ci(c[d].mutate, b[d]);
            this.Sc = c;
            this.Rc = b;
            this.Sc.length = 0;
            this.Rc.length = 0;
            a && a()
        }
    }
    function Ci(a, b) {
        try {
            void 0 !== a(b) && I().error("VSYNC", "callback returned a value but vsync cannot propogate it: %s", a.toString())
        } catch (c) {
            return u(c),
            !1
        }
        return !0
    }
    function Di(a) {
        a.whenExtensionsKnown().then((()=>{
            a.declaresExtension("amp-form") && a.getRootNode().addEventListener("submit", Ei, !0)
        }
        ))
    }
    function Ei(a) {
        if (!a.defaultPrevented) {
            var b = a.target;
            if (b && "FORM" == b.tagName) {
                (b.classList.contains("i-amphtml-form") ? b.hasAttribute("amp-novalidate") : b.hasAttribute("novalidate")) || !b.checkValidity || b.checkValidity() || a.preventDefault();
                var c = b.elements;
                for (var d = 0; d < c.length; d++)
                    J(!c[d].name || "__amp_source_origin" != c[d].name, "Illegal input name, %s found: %s", "__amp_source_origin", c[d]);
                c = b.getAttribute("action");
                var e = b.getAttribute("action-xhr");
                d = (b.getAttribute("method") || "GET").toUpperCase();
                e && (ie(e, b, "action-xhr"),
                J(!ke(e), "form action-xhr should not be on AMP CDN: %s", b),
                qe(e));
                c && (ie(c, b, "action"),
                J(!ke(c), "form action should not be on AMP CDN: %s", b),
                qe(c));
                "GET" == d ? J(e || c, "form action-xhr or action attribute is required for method=GET: %s", b) : "POST" == d && (c && H().error("form", "action attribute is invalid for method=POST: %s", b),
                e || (a.preventDefault(),
                J(!1, "Only XHR based (via action-xhr attribute) submissions are support for POST requests. %s", b)));
                (c = b.getAttribute("target")) ? J("_blank" == c || "_top" == c, "form target=%s is invalid can only be _blank or _top: %s", c, b) : b.setAttribute("target", "_top");
                e && (a.preventDefault(),
                a.stopImmediatePropagation(),
                qc(b, "action").execute(b, "submit", null, b, b, a, 3))
            }
        }
    }
    function Fi(a, b, c, d) {
        b.waitForBodyOpen().then((e=>{
            Q(a.win, "vsync").mutate((()=>{
                e.classList.toggle(c, d)
            }
            ))
        }
        ))
    }
    class Gi {
        constructor(a) {
            this.win = a;
            this.Ce = this.nf.bind(this);
            this.De = this.pf.bind(this);
            this.ic = this.wd = this.jc = null;
            this.yc = "ontouchstart"in a || void 0 !== a.navigator.maxTouchPoints && 0 < a.navigator.maxTouchPoints || void 0 !== a.DocumentTouch;
            this.eb = !1;
            this.win.document.addEventListener("keydown", this.Ce);
            this.win.document.addEventListener("mousedown", this.De);
            this.xc = !0;
            this.$d = 0;
            this.Hf = new V;
            this.be = new V;
            this.Mc = new V;
            this.yc && (this.xc = !this.yc,
            this.jc = this.qf.bind(this),
            Hd(a.document, "mousemove", this.jc))
        }
        setupInputModeClasses(a) {
            this.onTouchDetected((b=>{
                Fi(this, a, "amp-mode-touch", b)
            }
            ), !0);
            this.onMouseDetected((b=>{
                Fi(this, a, "amp-mode-mouse", b)
            }
            ), !0);
            this.onKeyboardStateChanged((b=>{
                Fi(this, a, "amp-mode-keyboard-active", b)
            }
            ), !0)
        }
        isTouchDetected() {
            return this.yc
        }
        onTouchDetected(a, b) {
            b && a(this.isTouchDetected());
            return this.Hf.add(a)
        }
        isMouseDetected() {
            return this.xc
        }
        onMouseDetected(a, b) {
            b && a(this.isMouseDetected());
            return this.be.add(a)
        }
        isKeyboardActive() {
            return this.eb
        }
        onKeyboardStateChanged(a, b) {
            b && a(this.isKeyboardActive());
            return this.Mc.add(a)
        }
        nf(a) {
            this.eb || a.defaultPrevented || (a = a.target,
            a && ("INPUT" == a.tagName || "TEXTAREA" == a.tagName || "SELECT" == a.tagName || "OPTION" == a.tagName || a.hasAttribute("contenteditable"))) || (this.eb = !0,
            this.Mc.fire(!0))
        }
        pf() {
            this.eb && (this.eb = !1,
            this.Mc.fire(!1))
        }
        qf(a) {
            if (a.sourceCapabilities && a.sourceCapabilities.firesTouchEvents)
                this.Zd();
            else {
                this.ic || (this.ic = this.kf.bind(this),
                this.wd = this.Zd.bind(this));
                var b, c = Id(this.win.document, (d=>{
                    b = d
                }
                ));
                return R(this.win).timeoutPromise(300, c).then(this.wd, (()=>{
                    b && b();
                    this.ic()
                }
                ))
            }
        }
        kf() {
            this.xc = !0;
            this.be.fire(!0)
        }
        Zd() {
            this.$d++;
            3 >= this.$d && Hd(this.win.document, "mousemove", this.jc)
        }
    }
    let Hi = ["<link rel=preload referrerpolicy=origin>"];
    let Ii = null;
    function Ji(a) {
        return a.startsWith("https:") || a.startsWith("http:") ? !0 : !1
    }
    function Ki(a, b) {
        if (!a.Cb.preconnect && (a.sa.isSafari() || a.sa.isIos())) {
            var c = Date.now();
            a.jb[b] = c + 18e4;
            a = new XMLHttpRequest;
            a.open("HEAD", b + "/robots.txt?_AMP_safari_preconnect_polyfill_cachebust=" + (c - c % 18e4), !0);
            a.withCredentials = !0;
            a.send()
        }
    }
    class Li {
        constructor(a) {
            this.tc = a.document;
            this.zc = a.document.head;
            this.jb = {};
            this.ue = {};
            this.sa = Q(a, "platform");
            this.jb[X(a.location.href).origin] = !0;
            a: {
                if (!Ii) {
                    var b = a.document.createElement("link");
                    let c = b.relList;
                    b.as = "invalid-value";
                    if (!c || !c.supports) {
                        b = {};
                        break a
                    }
                    Ii = {
                        preconnect: c.supports("preconnect"),
                        preload: c.supports("preload"),
                        onlyValidAs: "invalid-value" != b.as
                    }
                }
                b = Ii
            }
            this.Cb = b;
            this.va = R(a)
        }
        url(a, b, c) {
            a.whenFirstVisible().then((()=>{
                this.vb(a, b, c)
            }
            ))
        }
        vb(a, b, c) {
            if (Ji(b)) {
                ({origin: a} = X(b));
                b = Date.now();
                var d = this.jb[a];
                if (d && b < d)
                    c && (this.jb[a] = b + 18e4);
                else {
                    this.jb[a] = b + (c ? 18e4 : 1e4);
                    if (!this.Cb.preconnect) {
                        var e = this.tc.createElement("link");
                        e.setAttribute("rel", "dns-prefetch");
                        e.setAttribute("href", a);
                        this.zc.appendChild(e)
                    }
                    var f = this.tc.createElement("link");
                    f.setAttribute("rel", "preconnect");
                    f.setAttribute("href", a);
                    f.setAttribute("referrerpolicy", "origin");
                    this.zc.appendChild(f);
                    this.va.delay((()=>{
                        e && e.parentNode && e.parentNode.removeChild(e);
                        f.parentNode && f.parentNode.removeChild(f)
                    }
                    ), 1e4);
                    Ki(this, a)
                }
            }
        }
        preload(a, b, c) {
            Ji(b) && !this.ue[b] && (this.ue[b] = !0,
            this.url(a, b, !0),
            this.Cb.preload && ("document" == c && this.sa.isSafari() || a.whenFirstVisible().then((()=>{
                let d = pd(this.tc)(Hi);
                d.setAttribute("href", b);
                d.as = this.Cb.onlyValidAs ? "fetch" : "";
                this.zc.appendChild(d)
            }
            ))))
        }
    }
    function Mi(a) {
        M(a, "crypto", Lg);
        M(a, "batched-xhr", Fg);
        M(a, "platform", Gh);
        M(a, "timer", Rh);
        M(a, "timer", Rh);
        M(a, "vsync", Bi);
        M(a, "xhr", Dg);
        M(a, "input", Gi);
        M(a, "preconnect", Li)
    }
    function Ni(a) {
        return a.waitForBodyOpen().then((()=>{
            let b = a.getBody()
              , c = Bb(b, (()=>!!b.firstElementChild));
            return R(a.win).timeoutPromise(2e3, c).then((()=>"AMP-STORY" === b.firstElementChild.tagName), (()=>!1))
        }
        ))
    }
    let Oi = ["AMP-AD", "AMP-ANALYTICS", "AMP-PIXEL", "AMP-AD-EXIT"];
    function Pi(a, b, c) {
        a = O(a);
        return Qi(a, b, (d=>d.isDisplayed() && (d.overlaps(c) || d.isFixed()) ? !0 : !1)).then((d=>{
            let e = [];
            d.forEach((f=>{
                Oi.includes(f.element.tagName) || e.push(f.loadedOnce())
            }
            ));
            return Promise.all(e)
        }
        ))
    }
    function Ri(a) {
        let b = O(a);
        return b.signals().whenSignal("ready-scan").then((()=>{
            let c = S(b, "resources").get().filter((d=>d.prerenderAllowed() ? !Oi.includes(d.element.tagName) : !1)).map((d=>d.element));
            return 0 === c.length ? Promise.resolve([]) : new Promise((d=>{
                var e = b.win;
                let f = new e.IntersectionObserver((g=>{
                    f.disconnect();
                    let h = [];
                    for (let k = 0; k < g.length; k++) {
                        let {isIntersecting: l, target: m} = g[k];
                        l && h.push(m)
                    }
                    d(h)
                }
                ),{
                    root: Lb(e) ? e.document : null,
                    threshold: .01
                });
                for (e = 0; e < Math.min(c.length, 100); e++)
                    f.observe(c[e])
            }
            )).then((d=>Promise.all(d.map((e=>e.whenLoaded())))))
        }
        ))
    }
    function Qi(a, b, c) {
        return a.signals().whenSignal("ready-scan").then((()=>{
            let d = [];
            S(a, "resources").get().forEach((e=>{
                e.hasBeenMeasured() || e.hostWin != b || e.hasOwner() || d.push(e.ensureMeasured())
            }
            ));
            return Promise.all(d)
        }
        )).then((()=>S(a, "resources").get().filter((d=>d.hostWin == b && !d.hasOwner() && d.hasBeenMeasured() && c(d)))))
    }
    function Si(a) {
        if (null == a)
            return 0;
        let b = a;
        for (; null != (a = a.parentNode); )
            a.nodeName.startsWith("AMP-") && (b = a);
        a = b;
        let c = a.nodeName;
        return "IMG" === c || "AMP-IMG" === c ? 1 : "VIDEO" === c || "AMP-VIDEO" === c ? 2 : "AMP-CAROUSEL" === c ? 8 : "AMP-BASE-CAROUSEL" === c ? 16 : "AMP-AD" === c ? 4 : !c.startsWith("AMP-") && a.textContent ? 32 : 0
    }
    function Ti(a) {
        if ("inabox" !== G(a.win).runtime) {
            var b = !1
              , c = !1
              , d = !1
              , e = !1
              , f = h=>{
                if ("first-paint" != h.name || b)
                    if ("first-contentful-paint" != h.name || c)
                        "first-input" !== h.entryType || d ? "layout-shift" === h.entryType ? h.hadRecentInput || (Ui(a, h),
                        a.Gb += h.value) : "largest-contentful-paint" === h.entryType ? (a.Fb = h.startTime,
                        a.Vd = Si(h.element)) : "navigation" != h.entryType || e || ("domComplete domContentLoadedEventEnd domContentLoadedEventStart domInteractive loadEventEnd loadEventStart requestStart responseStart".split(" ").forEach((k=>a.tick(k, h[k]))),
                        e = !0) : (a.tickDelta("fid", h.processingStart - h.startTime),
                        d = !0);
                    else {
                        let k = h.startTime + h.duration;
                        a.tickDelta("fcp", k);
                        a.tickSinceVisible("fcpv", k);
                        c = !0
                    }
                else
                    a.tickDelta("fp", h.startTime + h.duration),
                    b = !0
            }
              , g = [];
            a.win.PerformancePaintTiming && (a.win.performance.getEntriesByType("paint").forEach(f),
            g.push("paint"));
            a.ne && Vi(a, f, {
                type: "first-input",
                buffered: !0
            });
            a.Yb && Vi(a, f, {
                type: "layout-shift",
                buffered: !0
            });
            a.Xb && Vi(a, f, {
                type: "largest-contentful-paint",
                buffered: !0
            });
            a.Ef && Vi(a, f, {
                type: "navigation",
                buffered: !0
            });
            0 < g.length && Vi(a, f, {
                entryTypes: g
            })
        }
    }
    function Wi(a) {
        let b = a.Yd
          , c = a.fa.get("cls");
        let d = 0
          , e = 0;
        for (let f of b) {
            if (f.sources)
                for (let g of f.sources)
                    d |= Si(g.node);
            e += f.value
        }
        b.length = 0;
        Xi(a);
        if (null == c || e > c)
            a.fa.reset("cls"),
            a.fa.reset("clstu"),
            a.tickDelta("cls", e),
            a.tickDelta("clstu", d),
            a.flush()
    }
    function Yi(a) {
        let b = !a.j.hasBeenVisible();
        let c = -1;
        a.j.whenFirstVisible().then((()=>{
            c = a.win.performance.now();
            a.mark("visible")
        }
        ));
        Zi(a).then((()=>{
            if (b) {
                let d = -1 < c ? a.win.performance.now() - c : 0;
                a.j.whenFirstVisible().then((()=>{
                    a.tickDelta("pc", d)
                }
                ));
                $i(a, d);
                a.mark("pc")
            } else
                a.tick("pc"),
                $i(a, a.win.performance.now() - c);
            a.flush()
        }
        ))
    }
    function aj(a) {
        let b = U(a.win).getSingleDoc();
        return Ni(b).then((c=>{
            c && a.addEnabledExperiment("story")
        }
        ))
    }
    function bj(a) {
        a.F && (a.cb && a.Xa.forEach((b=>{
            a.F.sendMessage("tick", b)
        }
        )),
        a.Xa.length = 0)
    }
    function Ui(a, b) {
        if (a.j && !cj(a)) {
            var c = a.Yd;
            if (0 < c.length) {
                let d = c[0];
                if (1e3 > b.startTime - c[c.length - 1].startTime && 5e3 > b.startTime - d.startTime) {
                    c.push(b);
                    return
                }
                Wi(a)
            }
            c.push(b);
            a.Fe()
        }
    }
    function Vi(a, b, c) {
        try {
            new a.win.PerformanceObserver((d=>{
                d.getEntries().forEach(b);
                a.flush()
            }
            )).observe(c)
        } catch (d) {}
    }
    function cj(a) {
        a = a.j.getVisibilityState();
        return "inactive" === a || "hidden" === a
    }
    function Xi(a) {
        if (!a.Md) {
            a.Md = !0;
            let b = a.win
              , c = parseInt((b.getComputedStyle(b.document.body) || Lc).getPropertyValue("--google-font-exp"), 10);
            0 <= c && a.addEnabledExperiment(`google-font-exp=${c}`)
        }
    }
    function Zi(a) {
        return a.B.whenFirstPass().then((()=>{
            let b = a.win.document.documentElement
              , c = S(b, "viewport").getSize();
            L(0, 0, c.width, c.height);
            return Ri(b)
        }
        ))
    }
    function $i(a, b) {
        a.F && a.F.sendMessage("prerenderComplete", w({
            value: b
        }), !0)
    }
    class dj {
        constructor(a) {
            this.win = a;
            this.Ke = Hg(Sa(a));
            this.Xa = [];
            this.Zb = a.performance.timeOrigin || a.performance.timing.navigationStart;
            this.Fd = this.B = this.F = this.j = null;
            this.cb = this.Lc = !1;
            this.Hd = v();
            this.yb = void 0;
            this.fa = new Cc;
            this.Vb = 0;
            this.Yd = [];
            this.Gb = 0;
            let b = this.win.PerformanceObserver && this.win.PerformanceObserver.supportedEntryTypes || [];
            b.includes("paint") || this.fa.rejectSignal("fcp", I().createExpectedError("First Contentful Paint not supported"));
            this.Yb = b.includes("layout-shift");
            if (!this.Yb) {
                let c = I().createExpectedError("Cumulative Layout Shift not supported");
                this.fa.rejectSignal("cls", c);
                this.fa.rejectSignal("cls-1", c)
            }
            (this.ne = b.includes("first-input")) || this.fa.rejectSignal("fid", I().createExpectedError("First Input Delay not supported"));
            (this.Xb = b.includes("largest-contentful-paint")) || this.fa.rejectSignal("lcp", I().createExpectedError("Largest Contentful Paint not supported"));
            this.Ef = b.includes("navigation");
            this.Vd = this.Fb = null;
            this.Vc = this.Vc.bind(this);
            this.addEnabledExperiment("rtv-" + G(this.win).rtvVersion);
            Hc(a.document).then((()=>{
                this.tick("dr");
                this.flush()
            }
            ));
            Ic(a.document).then((()=>{
                this.tick("ol");
                this.flush()
            }
            ));
            Ti(this);
            this.Md = !1;
            this.Fe = Va(a, (()=>{
                Wi(this)
            }
            ), 6e3)
        }
        coreServicesAvailable() {
            let a = this.win.document.documentElement;
            this.j = O(a);
            this.F = S(a, "viewer");
            this.B = S(a, "resources");
            this.Fd = S(this.j, "documentInfo").get();
            this.cb = this.F.isEmbedded() && "1" === this.F.getParam("csi");
            this.j.onVisibilityChanged(this.flush.bind(this));
            Yi(this);
            let b = this.F.whenMessagingReady();
            this.j.whenFirstVisible().then((()=>{
                this.tick("ofv");
                this.flush()
            }
            ));
            if (this.Xb || this.Yb)
                this.j.onVisibilityChanged(this.Vc);
            return b ? b.then((()=>{
                this.tickDelta("msr", this.win.performance.now());
                this.tick("timeOrigin", void 0, this.Zb);
                let c = this.j.getMetaByName("amp-usqp");
                c && c.split(",").forEach((d=>{
                    this.addEnabledExperiment("ssr-" + d)
                }
                ));
                return aj(this)
            }
            )).then((()=>{
                this.Lc = !0;
                bj(this);
                this.flush()
            }
            )) : p()
        }
        Vc() {
            cj(this) && (this.Yb && (Xi(this),
            0 === this.Vb ? (this.tickDelta("cls-1", this.Gb),
            this.flush(),
            this.Vb = 1) : 1 === this.Vb && (this.tickDelta("cls-2", this.Gb),
            this.flush(),
            this.Vb = 2)),
            this.Xb && null != this.Fb && (this.tickDelta("lcpt", this.Vd),
            this.tickDelta("lcp", this.Fb),
            this.tickSinceVisible("lcpv", this.Fb),
            this.flush()),
            Wi(this))
        }
        tick(a, b, c) {
            let d = w({
                label: a
            });
            let e;
            void 0 != b ? d.delta = e = Math.max(b, 0) : void 0 != c ? d.value = c : (this.mark(a),
            e = this.win.performance.now(),
            d.value = this.Zb + e);
            this.win.dispatchEvent(Fd(this.win, "perf", {
                label: a,
                delta: e
            }));
            this.Lc && this.cb ? this.F.sendMessage("tick", d) : (50 <= this.Xa.length && this.Xa.shift(),
            this.Xa.push(d));
            this.fa.signal(a, e)
        }
        mark(a) {
            var b, c;
            null === (b = (c = this.win.performance).mark) || void 0 === b ? void 0 : b.call(c, a)
        }
        tickDelta(a, b) {
            this.tick(a, b)
        }
        tickSinceVisible(a, b) {
            var c, d;
            b = void 0 == b ? this.win.performance.now() : b;
            b = this.Zb + b;
            let e = null !== (c = this.F) && void 0 !== c && c.isEmbedded() ? null === (d = this.j) || void 0 === d ? void 0 : d.getFirstVisibleTime() : this.Zb;
            this.tickDelta(a, e ? Math.max(b - e, 0) : 0)
        }
        flush() {
            this.Lc && this.cb && (null == this.yb && (this.yb = Object.keys(this.Hd).join(",")),
            this.F.sendMessage("sendCsi", w({
                ampexp: this.yb,
                canonicalUrl: this.Fd.canonicalUrl,
                eventid: this.Ke
            }), !0))
        }
        addEnabledExperiment(a) {
            this.Hd[a] = !0;
            this.yb = void 0
        }
        isPerformanceTrackingOn() {
            return this.cb
        }
        getMetric(a) {
            return this.fa.whenSignal(a)
        }
    }
    class ej {
        get() {
            return Promise.resolve(null)
        }
        optOut() {}
    }
    function fj(a) {
        gf(a.A, (b=>{
            if (!a.Ga || b.source == a.Ga) {
                var c = jf(b.data);
                c && c.sentinel == a.bd && (c.origin = b.origin,
                a.Ga || (a.Ga = b.source),
                b = c.type,
                b in a.hb && a.hb[b].fire(c))
            }
        }
        ))
    }
    function gj(a, b) {
        a.postMessage(b, w({
            targetOrigin: "*",
            includeUserActivation: !0
        }))
    }
    class hj {
        constructor(a) {
            this.A = a;
            this.xf = G().rtvVersion || null;
            this.bd = this.Ga = null;
            this.mf = 1;
            this.hb = v();
            fj(this)
        }
        getData(a, b, c) {
            let d = this.mf++
              , e = this.registerCallback(a + "-result", (g=>{
                g.messageId === d && (e(),
                c(g.content))
            }
            ))
              , f = {};
            f.payload = b;
            f.messageId = d;
            this.sendMessage(a, f)
        }
        makeRequest(a, b, c) {
            b = this.registerCallback(b, c);
            this.sendMessage(a);
            return b
        }
        requestOnce(a, b, c) {
            let d = this.registerCallback(b, (e=>{
                d();
                c(e)
            }
            ));
            this.sendMessage(a);
            return d
        }
        registerCallback(a, b) {
            a in this.hb || (this.hb[a] = new V);
            return this.hb[a].add(b)
        }
        sendMessage(a, b) {
            let c = hf(a, this.bd, b, this.xf);
            if (this.Ga)
                a = this.Ga,
                1 == a.postMessage.length ? gj(a, c) : a.postMessage(c, "*");
            else
                for (let e = 0, f = this.A; 10 > e && f != this.A.top; e++) {
                    a = f = f.parent;
                    var d = c;
                    1 == a.postMessage.length ? gj(a, d) : a.postMessage(d, "*");
                    e++
                }
        }
        setSentinel(a) {
            this.bd = a
        }
    }
    function ij(a) {
        let b = new hj(a)
          , c = Pa(a.name);
        let d = null;
        c && c._context && (d = c._context.sentinel);
        b.setSentinel(d || String(a.Math.random()).substr(2));
        return b
    }
    class jj {
        constructor(a) {
            this.B = S(a, "resources");
            this.ye = Q(a.win, "vsync")
        }
        forceChangeSize(a, b, c, d, e) {
            this.requestChangeSize(a, b, c, e).then((()=>{
                d && d()
            }
            ))
        }
        requestChangeSize(a, b, c, d) {
            return this.mutateElement(a, (()=>{
                this.B.getResourceForElement(a).changeSize(b, c, d)
            }
            ))
        }
        expandElement(a) {
            this.B.getResourceForElement(a).completeExpand();
            this.B.schedulePass()
        }
        attemptCollapse(a) {
            return this.mutateElement(a, (()=>{
                this.B.getResourceForElement(a).completeCollapse()
            }
            ))
        }
        collapseElement(a) {
            this.B.getResourceForElement(a).completeCollapse();
            this.B.schedulePass()
        }
        measureElement(a) {
            return this.ye.measurePromise(a)
        }
        mutateElement(a, b) {
            return this.measureMutateElement(a, null, b)
        }
        measureMutateElement(a, b, c) {
            return this.ye.runPromise({
                measure: ()=>{
                    b && b()
                }
                ,
                mutate: ()=>{
                    c();
                    this.B.schedulePass()
                }
            })
        }
    }
    class kj {
        constructor(a) {
            this.j = a
        }
        getAmpDoc() {
            return this.j
        }
        getParam(a) {
            return this.j.getParam(a)
        }
        hasCapability() {
            return !1
        }
        isEmbedded() {
            return !1
        }
        isWebviewEmbedded() {
            return !1
        }
        isCctEmbedded() {
            return !1
        }
        isProxyOrigin() {
            return !1
        }
        maybeUpdateFragmentForCct() {}
        isRuntimeOn() {
            return !0
        }
        toggleRuntime() {}
        onRuntimeState() {
            return ()=>{}
        }
        isOvertakeHistory() {
            return !1
        }
        getResolvedViewerUrl() {
            return this.j.win.location.href
        }
        maybeGetMessagingOrigin() {
            return null
        }
        getUnconfirmedReferrerUrl() {
            return this.j.win.document.referrer
        }
        getReferrerUrl() {
            return Promise.resolve(this.getUnconfirmedReferrerUrl())
        }
        isTrustedViewer() {
            return Promise.resolve(!1)
        }
        getViewerOrigin() {
            return Promise.resolve("")
        }
        onMessage() {
            return ()=>{}
        }
        onMessageRespond() {
            return ()=>{}
        }
        receiveMessage() {}
        setMessageDeliverer() {}
        maybeGetMessageDeliverer() {
            return null
        }
        sendMessage() {}
        sendMessageAwaitResponse() {
            return p()
        }
        broadcast() {
            return Promise.resolve(!1)
        }
        onBroadcast() {
            return ()=>{}
        }
        whenMessagingReady() {
            return null
        }
        replaceUrl() {}
    }
    function lj(a, b, c) {
        let d = `${c.width / 2 - b.width / 2 - b.left}px`
          , e = `${c.height / 2 - b.height / 2 - b.top}px`;
        var f = `${b.top}px`
          , g = `${c.width - (b.left + b.width)}px`
          , h = `${b.left}px`;
        c = `${c.height - (b.top + b.height)}px`;
        var k = `${b.height}px`
          , l = `${b.width}px`;
        var m = void 0 === e || null === e ? `translate(${Qc(d)})` : `translate(${Qc(d)}, ${Qc(e)})`;
        Oc(a, {
            position: "fixed",
            top: f,
            right: g,
            left: h,
            bottom: c,
            height: k,
            width: l,
            transition: "transform 150ms ease",
            transform: m,
            margin: 0
        })
    }
    function mj(a, b, c) {
        a.requestAnimationFrame((()=>{
            b.measure && b.measure(c);
            b.mutate && b.mutate(c)
        }
        ))
    }
    function nj(a, b, c) {
        mj(a, {
            measure(d) {
                d.viewportSize = {
                    width: a.innerWidth,
                    height: a.innerHeight
                };
                d.rect = Nb(b.getBoundingClientRect())
            },
            mutate(d) {
                let e = L(0, 0, d.viewportSize.width, d.viewportSize.height);
                lj(b, d.rect, d.viewportSize);
                Nc(b, {
                    "pointer-events": "none"
                });
                setTimeout((()=>{
                    mj(a, {
                        mutate() {
                            Rc(b, ["pointer-events"]);
                            Oc(b, {
                                position: "fixed",
                                "z-index": 1e3,
                                left: 0,
                                right: 0,
                                top: 0,
                                bottom: 0,
                                width: "100vw",
                                height: "100vh",
                                transition: null,
                                transform: null,
                                margin: 0,
                                border: 0
                            });
                            c(d.rect, e)
                        }
                    })
                }
                ), 200)
            }
        }, {})
    }
    function oj(a, b, c, d) {
        mj(a, {
            mutate() {
                Rc(b, "position z-index left right top bottom width height margin border".split(" "));
                c();
                mj(a, {
                    measure() {
                        d(Nb(b.getBoundingClientRect()))
                    }
                })
            }
        })
    }
    function pj(a) {
        a.A.addEventListener("resize", (()=>a.onWindowResize()))
    }
    class qj {
        constructor(a) {
            this.A = a;
            this.cc = this.Hc = !1;
            this.Ab = null;
            pj(this)
        }
        onWindowResize() {
            this.Hc && (this.cc = !0)
        }
        expandFrame(a, b) {
            nj(this.A, a, ((c,d)=>{
                this.Hc = !0;
                this.cc = !1;
                this.Ab = c;
                b(d)
            }
            ))
        }
        collapseFrame(a, b) {
            oj(this.A, a, (()=>{
                this.Hc = !1;
                this.cc || b(this.Ab)
            }
            ), (c=>{
                this.Ab = c;
                this.cc && b(this.Ab)
            }
            ))
        }
    }
    function rj(a) {
        a.ampInaboxFrameOverlayManager = a.ampInaboxFrameOverlayManager || new qj(a);
        return a.ampInaboxFrameOverlayManager
    }
    class sj {
        constructor(a) {
            this.A = a;
            this.Pb = null;
            var b = this.A;
            a = b.document;
            if (a.scrollingElement)
                a = a.scrollingElement;
            else {
                var c;
                if (c = a.body)
                    b = b.navigator.userAgent,
                    c = /WebKit/i.test(b) && !/Edge/i.test(b);
                a = c ? a.body : a.documentElement
            }
            this.Af = a;
            this.N = null
        }
        observe(a, b) {
            if (!this.Pb) {
                this.Pb = new V;
                let c = Ua(this.A, (()=>{
                    this.N = this.getViewportRect();
                    this.Pb.fire()
                }
                ));
                this.N = this.getViewportRect();
                this.A.addEventListener("scroll", c, !0);
                this.A.addEventListener("resize", c, !0)
            }
            b({
                viewportRect: this.N,
                targetRect: this.getTargetRect(a)
            });
            return this.Pb.add((()=>{
                b({
                    viewportRect: this.N,
                    targetRect: this.getTargetRect(a)
                })
            }
            ))
        }
        getViewportRect() {
            let a = this.Af
              , b = this.A;
            return L(Math.round(a.scrollLeft || b.pageXOffset), Math.round(a.scrollTop || b.pageYOffset), b.innerWidth, b.innerHeight)
        }
        getTargetRect(a) {
            let b = Nb(a.getBoundingClientRect());
            a = a.ownerDocument.defaultView;
            for (let c = 0, d = a; 10 > c && d && d != this.A && d != this.A.top; c++,
            d = d.parent) {
                let e = Nb(d.frameElement.getBoundingClientRect());
                b = Pb(b, e.left, e.top)
            }
            return b
        }
    }
    function tj(a) {
        a.ampInaboxPositionObserver = a.ampInaboxPositionObserver || new sj(a);
        return a.ampInaboxPositionObserver
    }
    function uj(a, b) {
        return Q(a, "vsync").runPromise({
            measure: c=>{
                c.width = a.innerWidth;
                c.height = a.innerHeight
            }
            ,
            mutate: c=>{
                Nc(b, {
                    background: "transparent",
                    left: "50%",
                    top: "50%",
                    right: "auto",
                    bottom: "auto",
                    position: "absolute",
                    height: `${c.height}px`,
                    width: `${c.width}px`,
                    "margin-top": `${-c.height / 2}px`,
                    "margin-left": `${-c.width / 2}px`
                })
            }
        }, {})
    }
    function vj(a, b) {
        return Q(a, "vsync").mutatePromise((()=>{
            Rc(b, "position left top right bottom width height margin-left margin-top".split(" "))
        }
        ))
    }
    function wj(a) {
        let b = a.getSize()
          , c = a.getScrollTop()
          , d = a.getScrollLeft();
        a.xd.fire({
            relayoutAll: !1,
            top: c,
            left: d,
            width: b.width,
            height: b.height,
            velocity: 0
        })
    }
    class xj {
        constructor(a, b) {
            let c = a.win;
            this.ampdoc = a;
            this.G = b;
            this.pb = null;
            this.xd = new V;
            this.rb = new V;
            this.qb = new V;
            this.G.onScroll(this.zf.bind(this));
            this.G.onResize(this.ie.bind(this));
            this.xe = !1;
            this.ampdoc.onVisibilityChanged(this.se.bind(this));
            this.se();
            this.ud = this.dispose.bind(this);
            c.addEventListener("pagehide", this.ud);
            let d = c.document.documentElement;
            d.classList.add("i-amphtml-singledoc");
            d.classList.add("i-amphtml-standalone");
            Lb(c) && d.classList.add("i-amphtml-iframed")
        }
        dispose() {
            this.G.disconnect();
            this.ampdoc.win.removeEventListener("pagehide", this.ud)
        }
        ensureReadyForElements() {}
        getPaddingTop() {
            return 0
        }
        getScrollTop() {
            return this.G.getScrollTop()
        }
        getScrollLeft() {
            return this.G.getScrollLeft()
        }
        setScrollTop() {}
        updatePaddingBottom() {}
        getSize() {
            return this.G.getSize()
        }
        getHeight() {
            return this.getSize().height
        }
        getWidth() {
            return this.getSize().width
        }
        getScrollWidth() {
            return this.G.getScrollWidth()
        }
        getScrollHeight() {
            return this.G.getScrollHeight()
        }
        getContentHeight() {
            return this.G.getContentHeight()
        }
        contentHeightChanged() {}
        getRect() {
            if (null == this.pb) {
                let a = this.getSize();
                this.pb = L(this.getScrollLeft(), this.getScrollTop(), a.width, a.height)
            }
            return this.pb
        }
        getLayoutRect(a) {
            return this.G.getLayoutRect(a)
        }
        getClientRectAsync(a) {
            let b = a.getBoundingClientRect();
            return this.G.getRootClientRectAsync().then((c=>c ? Pb(b, c.left, c.top) : Nb(b)))
        }
        supportsPositionFixed() {
            return !1
        }
        isDeclaredFixed() {
            return !1
        }
        scrollIntoView() {
            return p()
        }
        animateScrollIntoView() {
            return p()
        }
        animateScrollWithinParent() {
            return p()
        }
        getScrollingElement() {
            return this.G.getScrollingElement()
        }
        onChanged(a) {
            return this.xd.add(a)
        }
        onScroll(a) {
            return this.rb.add(a)
        }
        onResize(a) {
            return this.qb.add(a)
        }
        enterLightboxMode() {
            this.enterOverlayMode();
            return this.G.updateLightboxMode(!0)
        }
        leaveLightboxMode() {
            this.leaveOverlayMode();
            return this.G.updateLightboxMode(!1)
        }
        enterOverlayMode() {
            this.disableTouchZoom();
            this.disableScroll()
        }
        leaveOverlayMode() {
            this.resetScroll();
            this.restoreOriginalTouchZoom()
        }
        disableScroll() {}
        resetScroll() {}
        resetTouchZoom() {}
        disableTouchZoom() {
            return !1
        }
        restoreOriginalTouchZoom() {
            return !1
        }
        updateFixedLayer() {
            return p()
        }
        addToFixedLayer() {
            return p()
        }
        removeFromFixedLayer() {}
        createFixedLayer() {}
        zf() {
            this.pb = null;
            0 > this.G.getScrollTop() || (wj(this),
            this.rb.fire())
        }
        ie() {
            this.pb = null;
            let a = this.getSize();
            wj(this);
            this.qb.fire({
                relayoutAll: !1,
                width: a.width,
                height: a.height
            })
        }
        se() {
            let a = this.ampdoc.isVisible();
            a != this.xe && ((this.xe = a) ? (this.G.connect(),
            this.ie()) : this.G.disconnect())
        }
    }
    function yj(a) {
        return uc(P(a.win.document.documentElement), "resources").then((()=>{
            a.ub = a.ub || a.pe.observe(a.win.frameElement || a.getScrollingElement(), (b=>{
                zj(a, b.viewportRect, b.targetRect)
            }
            ))
        }
        ))
    }
    function Aj(a) {
        a.Db.makeRequest("send-positions", "position", (b=>{
            zj(a, b.viewportRect, b.targetRect)
        }
        ));
        return p()
    }
    function zj(a, b, c) {
        let d = a.N;
        a.N = b;
        Bj(a, c);
        Cj(a.N, d) && a.qb.fire();
        Dj(a.N, d) && a.Me()
    }
    function Bj(a, b) {
        if (b) {
            var c = Pb(b, a.N.left, a.N.top)
              , d = a.zb;
            if (Dj(c, d) || Cj(c, d))
                a.zb = c,
                Ej(a)
        }
    }
    function Ej(a) {
        a.getChildResources().forEach((b=>b.measure()))
    }
    function Fj(a) {
        return uj(a.win, a.getBodyElement()).then((()=>Gj(a)))
    }
    function Hj(a) {
        return Ij(a).then((()=>vj(a.win, a.getBodyElement())))
    }
    function Gj(a) {
        return new Promise(((b,c)=>{
            if (a.Ha) {
                let d = a.win.frameElement;
                d ? a.oe.expandFrame(d, (e=>{
                    Bj(a, e);
                    b()
                }
                )) : c("Request to open lightbox failed; frame does not exist.")
            } else
                a.Db.requestOnce("full-overlay-frame", "full-overlay-frame-response", (d=>{
                    d.success ? (Bj(a, d.boxRect),
                    b()) : c("Request to open lightbox rejected by host document")
                }
                ))
        }
        ))
    }
    function Ij(a) {
        return new Promise(((b,c)=>{
            if (a.Ha) {
                let d = a.win.frameElement;
                d ? a.oe.collapseFrame(d, (e=>{
                    Bj(a, e);
                    b()
                }
                )) : c("Request to open lightbox failed; frame does not exist.")
            } else
                a.Db.requestOnce("cancel-full-overlay-frame", "cancel-full-overlay-frame-response", (d=>{
                    Bj(a, d.boxRect);
                    b()
                }
                ))
        }
        ))
    }
    class Jj {
        constructor(a) {
            this.win = a;
            this.rb = new V;
            this.qb = new V;
            let b = a.innerWidth
              , c = a.innerHeight;
            this.N = L(0, 0, b, c);
            this.zb = L(0, c + 1, b, c);
            this.Db = oc(a, "iframeMessagingClient");
            this.Tb = null;
            this.Me = Ua(this.win, (()=>{
                this.rb.fire()
            }
            ));
            this.pe = (this.Ha = lf(this.win.top)) ? tj(this.win.top) : null;
            this.oe = this.Ha ? rj(this.win.top) : null;
            this.ub = null
        }
        connect() {
            return this.Ha ? yj(this) : Aj(this)
        }
        getLayoutRect(a) {
            a = a.getBoundingClientRect();
            return L(Math.round(a.left + this.zb.left), Math.round(a.top + this.zb.top), Math.round(a.width), Math.round(a.height))
        }
        onScroll(a) {
            this.rb.add(a)
        }
        onResize(a) {
            this.qb.add(a)
        }
        getSize() {
            return {
                width: this.N.width,
                height: this.N.height
            }
        }
        getScrollTop() {
            return this.N.top
        }
        getScrollLeft() {
            return this.N.left
        }
        getScrollingElement() {
            return this.getBodyElement()
        }
        getScrollingElementScrollsLikeViewport() {
            return !0
        }
        supportsPositionFixed() {
            return !1
        }
        getChildResources() {
            return S(this.win.document.documentElement, "resources").get()
        }
        updateLightboxMode(a) {
            return a ? Fj(this) : Hj(this)
        }
        getRootClientRectAsync() {
            if (this.Ha)
                return yj(this).then((()=>this.pe.getTargetRect(this.win.frameElement || this.getScrollingElement())));
            this.Tb || (this.Tb = new Promise((a=>{
                this.Db.requestOnce("send-positions", "position", (b=>{
                    this.Tb = null;
                    a(b.targetRect)
                }
                ))
            }
            )));
            return this.Tb
        }
        getBodyElement() {
            return this.win.document.body
        }
        disconnect() {
            this.ub && (this.ub(),
            this.ub = null)
        }
        getScrollWidth() {
            return this.getScrollingElement().offsetWidth
        }
        getScrollHeight() {
            return this.getScrollingElement().offsetHeight
        }
        getContentHeight() {
            return this.getScrollHeight()
        }
        updatePaddingTop() {}
        hideViewerHeader() {}
        showViewerHeader() {}
        disableScroll() {}
        resetScroll() {}
        ensureReadyForElements() {}
        setScrollTop() {}
        contentHeightChanged() {}
        getBorderTop() {
            return 0
        }
        requiresFixedLayerTransfer() {
            return !1
        }
        overrideGlobalScrollTo() {
            return !1
        }
    }
    function Kj(a) {
        let b = new Jj(a.win);
        N(a, "viewport", (function() {
            return new xj(a,b)
        }
        ), !0)
    }
    function Dj(a, b) {
        return a.left != b.left || a.top != b.top
    }
    function Cj(a, b) {
        return a.width != b.width || a.height != b.height
    }
    class Lj {
        constructor(a) {
            this.ga = S(a, "mutator");
            this.Ed = a.win.document;
            this.gb = this.Ed.createElement("div");
            this.ga.mutateElement(this.gb, (()=>{
                this.Ed.body.appendChild(this.gb);
                Oc(this.gb, {
                    position: "absolute",
                    top: 0,
                    left: 0,
                    zIndex: 1,
                    visibility: "hidden",
                    "font-weight": "bold",
                    "letter-spacing": "0.2px"
                })
            }
            ))
        }
        fit(a, b, c) {
            let d = !1;
            return this.ga.mutateElement(b, (()=>{
                this.gb.textContent = c;
                a: {
                    var e = this.gb;
                    var f = a.offsetWidth - 84;
                    for (let h = 14; 12 <= h; h--) {
                        W(e, "fontSize", `${h}px`);
                        let k = e.offsetWidth;
                        if (32 > e.offsetHeight && k < f) {
                            e = h;
                            break a
                        }
                    }
                    e = 11
                }
                let g = e;
                12 <= g && (W(b, "fontSize", `${g}px`),
                d = !0)
            }
            )).then((()=>d))
        }
    }
    let Mj, Nj;
    function Oj(a) {
        return !!a && -1 != a.toString().indexOf("[native code]")
    }
    function Pj() {
        if (void 0 === Mj) {
            var a = Element;
            Mj = a.prototype.attachShadow ? "v1" : a.prototype.createShadowRoot ? "v0" : "none"
        }
        return Mj
    }
    /* Copyright (c) 2014 The Polymer Project Authors. All rights reserved. Use of this source code is governed by a BSD-style license that can be found in the LICENSE file or at https://developers.google.com/open-source/licenses/bsd */
    let Tj = {
        strictStyling: !1,
        scopeRules: function(a, b, c) {
            var d = "";
            a && Array.prototype.forEach.call(a, (function(e) {
                if (e.selectorText && e.style && void 0 !== e.style.cssText)
                    d += this.scopeSelector(e.selectorText, b, this.strictStyling, c) + " {\n\t",
                    d += this.propertiesFromRule(e) + "\n}\n\n";
                else if (e.type === CSSRule.MEDIA_RULE)
                    d += "@media " + e.media.mediaText + " {\n",
                    d += this.scopeRules(e.cssRules, b),
                    d += "\n}\n\n";
                else
                    try {
                        e.cssText && (d += e.cssText + "\n\n")
                    } catch (f) {
                        e.type === CSSRule.KEYFRAMES_RULE && e.cssRules && (d += this.ieSafeCssTextFromKeyFrameRule(e))
                    }
            }
            ), this);
            return d
        },
        ieSafeCssTextFromKeyFrameRule: function(a) {
            var b = "@keyframes " + a.name + " {";
            Array.prototype.forEach.call(a.cssRules, (function(c) {
                b += " " + c.keyText + " {" + c.style.cssText + "}"
            }
            ));
            return b += " }"
        },
        scopeSelector: function(a, b, c, d) {
            var e = [];
            a.split(",").forEach((function(f) {
                f = f.trim();
                d && (f = d(f));
                this.selectorNeedsScoping(f, b) && (f = c && !f.match(Qj) ? this.applyStrictSelectorScope(f, b) : this.applySelectorScope(f, b));
                e.push(f)
            }
            ), this);
            return e.join(", ")
        },
        selectorNeedsScoping: function(a, b) {
            if (Array.isArray(b))
                return !0;
            var c = this.makeScopeMatcher(b);
            return !a.match(c)
        },
        makeScopeMatcher: function(a) {
            a = a.replace(/\[/g, "\\[").replace(/\]/g, "\\]");
            return new RegExp("^(" + a + ")" + Rj,"m")
        },
        applySelectorScope: function(a, b) {
            return Array.isArray(b) ? this.applySelectorScopeList(a, b) : this.applySimpleSelectorScope(a, b)
        },
        applySelectorScopeList: function(a, b) {
            for (var e, c = [], d = 0; e = b[d]; d++)
                c.push(this.applySimpleSelectorScope(a, e));
            return c.join(", ")
        },
        applySimpleSelectorScope: function(a, b) {
            return a.match(Sj) ? (a = a.replace(Qj, b),
            a.replace(Sj, b + " ")) : b + " " + a
        },
        applyStrictSelectorScope: function(a, b) {
            b = b.replace(/\[is=([^\]]*)\]/g, "$1");
            var c = [" ", ">", "+", "~"]
              , d = a
              , e = "[" + b + "]";
            c.forEach((function(f) {
                d = d.split(f).map((function(g) {
                    var h = g.trim().replace(Sj, "");
                    h && 0 > c.indexOf(h) && 0 > h.indexOf(e) && (g = h.replace(/([^:]*)(:*)(.*)/, "$1" + e + "$2$3"));
                    return g
                }
                )).join(f)
            }
            ));
            return d
        },
        propertiesFromRule: function(a) {
            var b = a.style.cssText;
            a.style.content && !a.style.content.match(/['"]+|attr/) && (b = b.replace(/content:[^;]*;/g, "content: '" + a.style.content + "';"));
            a = a.style;
            for (var c in a)
                "initial" === a[c] && (b += c + ": initial; ");
            return b
        }
    };
    var Rj = "([>\\s~+[.,{:][\\s\\S]*)?$"
      , Qj = "-shadowcsshost-no-combinator"
      , Sj = /-shadowcsshost/gim;
    let Uj = /[^\.\-_0-9a-zA-Z]/
      , Vj = /[^\-_0-9a-zA-Z]/;
    function Wj(a) {
        let b = K(a)
          , c = a.shadowRoot || a.__AMP_SHADOW_ROOT;
        if (c)
            return c.innerHTML = "",
            c;
        let d;
        let e = Pj();
        "v1" == e ? (d = a.attachShadow({
            mode: "open"
        }),
        d.styleSheets || Object.defineProperty(d, "styleSheets", {
            get: function() {
                let f = [];
                Kb(d.childNodes, (g=>{
                    "STYLE" === g.tagName && f.push(g.sheet)
                }
                ));
                return f
            }
        })) : d = "v0" == e ? a.createShadowRoot() : Xj(a);
        void 0 === Nj && (Nj = "none" != Pj() && (Oj(Element.prototype.attachShadow) || Oj(Element.prototype.createShadowRoot)));
        if (!Nj) {
            let f = `i-amphtml-sd-${b.Math.floor(1e4 * b.Math.random())}`;
            d.id = f;
            d.host.classList.add(f);
            Ud(d, (g=>{
                var h = d;
                let k = h.id;
                h = h.ownerDocument;
                let l = null;
                try {
                    l = Yj(h.implementation.createHTMLDocument(""), g)
                } catch (m) {}
                if (!l)
                    try {
                        l = Yj(h, g)
                    } catch (m) {}
                return l ? Tj.scopeRules.call(Tj, l, `.${k}`, Zj) : g
            }
            ))
        }
        return d
    }
    function Xj(a) {
        let b = a.ownerDocument;
        a.classList.add("i-amphtml-shadow-host-polyfill");
        let c = b.createElement("style");
        c.textContent = ".i-amphtml-shadow-host-polyfill>:not(i-amphtml-shadow-root){display:none!important}";
        a.appendChild(c);
        let d = b.createElement("i-amphtml-shadow-root");
        a.appendChild(d);
        a.__AMP_SHADOW_ROOT = d;
        Object.defineProperty(a, "shadowRoot", {
            enumerable: !0,
            configurable: !0,
            value: d
        });
        d.host = a;
        d.getElementById = function(e) {
            let f = CSS.escape(e);
            return d.querySelector(`#${f}`)
        }
        ;
        Object.defineProperty(d, "styleSheets", {
            get: ()=>b.styleSheets ? Ea(b.styleSheets).filter((e=>d.contains(e.ownerNode))) : []
        });
        return d
    }
    function Zj(a) {
        return a.replace(/(html|body)/g, ak)
    }
    function ak(a, b, c, d) {
        let e = d.charAt(c - 1)
          , f = d.charAt(c + a.length);
        return e && !Uj.test(e) || f && !Vj.test(f) ? a : "amp-" + a
    }
    function Yj(a, b) {
        let c = a.createElement("style");
        c.textContent = b;
        try {
            return (a.head || a.documentElement).appendChild(c),
            c.sheet ? c.sheet.cssRules : null
        } finally {
            c.parentNode && c.parentNode.removeChild(c)
        }
    }
    function bk(a, b, c) {
        let d = self.document.createElement("style");
        d.textContent = c;
        let e = Wj(a);
        e.appendChild(d);
        e.appendChild(b)
    }
    let ck = ["cta-accent-color", "cta-accent-element", "cta-image", "theme"];
    function dk(a) {
        let b = a.querySelectorAll("meta[name^=amp4ads-vars-],meta[name^=amp-cta-]")
          , c = v();
        Kb(b, (d=>{
            let e = d.content;
            d = d.name;
            d.startsWith("amp-cta-") ? (d = d.split("amp-")[1],
            c[d] = e) : d.startsWith("amp4ads-vars-") && (d = d.split("amp4ads-vars-")[1],
            c[d] = e)
        }
        ));
        return c
    }
    function ek(a) {
        return a["cta-type"] && a["cta-url"] ? !0 : !1
    }
    function fk(a, b, c) {
        let d = a.document;
        try {
            let g = b["attribution-url"]
              , h = b["attribution-icon"];
            if (g && h) {
                ie(g, c, "amp-story-auto-ads attribution url");
                ie(h, c, "amp-story-auto-ads attribution icon");
                var e = Gb(d, "div", w({
                    role: "button",
                    "class": "i-amphtml-attribution-host"
                }))
                  , f = Gb(d, "img", w({
                    "class": "i-amphtml-story-ad-attribution",
                    src: h
                }));
                f.addEventListener("click", (()=>{
                    mh(a, g, "_blank")
                }
                ));
                bk(e, f, ".i-amphtml-story-ad-attribution{position:absolute;bottom:0!important;left:0!important;max-height:15px!important;z-index:4!important}.i-amphtml-story-ad-fullbleed.i-amphtml-story-ad-attribution{bottom:12.5vh!important;left:50%!important;transform:translateX(-22.5vh)!important}\n/*# sourceURL=/extensions/amp-story-auto-ads/0.1/amp-story-auto-ads-attribution.css*/");
                c.appendChild(e)
            }
        } catch (g) {}
    }
    function gk(a, b, c, d) {
        let e = d["cta-url"]
          , f = d["cta-type"]
          , g = Gb(a, "a", w({
            "class": "i-amphtml-story-ad-link",
            target: "_blank",
            href: e
        }));
        return b.fit(c, g, f).then((h=>{
            if (!h)
                return null;
            g.href = e;
            g.textContent = f;
            if ("https:" !== g.protocol && "http:" !== g.protocol)
                return null;
            h = a.defaultView;
            h = h.__AMP_EXPERIMENT_BRANCHES ? h.__AMP_EXPERIMENT_BRANCHES["story-ad-progress-segment"] : null;
            if (h && "31063379" !== h) {
                h = a.createElement("amp-story-page-outlink");
                h.setAttribute("layout", "nodisplay");
                let l = Gb(a, "a", w({
                    "class": "i-amphtml-story-ad-link",
                    target: "_top",
                    href: d["cta-url"]
                }));
                l.textContent = d["cta-type"];
                h.appendChild(l);
                for (k of ck)
                    d[k] && h.setAttribute(k, d[k]);
                h.className = "i-amphtml-story-page-outlink-container";
                c.appendChild(h);
                var k = l
            } else
                k = a.createElement("amp-story-cta-layer"),
                k.className = "i-amphtml-cta-container",
                h = Gb(a, "div", w({
                    "class": "i-amphtml-story-ad-link-root",
                    role: "button"
                })),
                bk(h, g, ".i-amphtml-story-ad-link{background-color:#fff!important;border-radius:20px!important;box-sizing:border-box!important;bottom:32px!important;box-shadow:0px 2px 12px rgba(0,0,0,0.16)!important;color:#4285f4!important;font-family:Roboto,sans-serif!important;font-weight:700!important;height:36px!important;letter-spacing:0.2px!important;line-height:36px!important;overflow:hidden!important;opacity:0;padding:0 10px!important;position:absolute!important;text-align:center!important;text-decoration:none!important;min-width:120px!important;max-width:calc(100vw - 64px)}[cta-active].i-amphtml-story-ad-link{animation-delay:100ms!important;animation-duration:300ms!important;animation-timing-function:cubic-bezier(0.4,0,0.2,1)!important;animation-fill-mode:forwards!important;animation-name:ad-cta!important}@keyframes ad-cta{0%{opacity:0;transform:scale(0)}to{opacity:1;transform:scale(1)}}\n/*# sourceURL=/extensions/amp-story-auto-ads/0.1/amp-story-auto-ads-cta-button.css*/"),
                k.appendChild(h),
                c.appendChild(k),
                k = g;
            return k
        }
        ))
    }
    function hk(a) {
        let b = a.win
          , c = b.document
          , d = dk(c);
        if (ek(d)) {
            Pd(a, ".i-amphtml-story-ad-link-root{all:initial!important;color:initial!important;display:-ms-flexbox!important;display:flex!important;-ms-flex-direction:column!important;flex-direction:column!important;-ms-flex-align:center!important;align-items:center!important}\n/*# sourceURL=/extensions/amp-story-auto-ads/0.1/amp-story-auto-ads-shared.css*/amp-story-cta-layer{display:block!important;position:absolute!important;top:80%!important;right:0!important;bottom:0!important;left:0!important;margin:0!important;z-index:2147483642!important}\n/*# sourceURL=/extensions/amp-story-auto-ads/0.1/amp-story-auto-ads-inabox.css*/", (()=>{}
            ));
            fk(b, d, c.body);
            a = new Lj(a);
            var e = c.createElement("div");
            gk(c, a, e, d).then((f=>f && f.setAttribute("cta-active", "")));
            c.body.appendChild(e);
            b.parent && b.parent.postMessage("amp-story-ad-load", "*")
        }
    }
    function ik(a) {
        let b = a.win
          , c = a.getRootNode();
        Pi(a, b, S(a, "viewport").getLayoutRect(c.documentElement || c.body || c)).then((()=>{
            b.dispatchEvent(Fd(b, "amp-ini-load", null, {
                bubbles: !0
            }));
            b.parent && b.parent.postMessage("amp-ini-load", "*")
        }
        ))
    }
    function jk() {
        var a = self;
        Fc(a.document, (()=>kk(a)))
    }
    function kk(a) {
        let b = 1500;
        let c = a.performance;
        c && c.timing && c.timing.navigationStart && (b = Date.now() - c.timing.navigationStart);
        let d = Math.max(1, 2100 - b);
        a.setTimeout((()=>{
            lk(a);
            let e = a.document.styleSheets;
            if (e) {
                var f = a.document.querySelectorAll(`link[rel~="stylesheet"]:not([href^="${CSS.escape(F.cdn)}"])`)
                  , g = [];
                for (var h = 0; h < f.length; h++) {
                    let k = f[h];
                    let l = !1;
                    for (let m = 0; m < e.length; m++)
                        if (e[m].ownerNode == k) {
                            l = !0;
                            break
                        }
                    l || g.push(k)
                }
                for (h = 0; h < g.length; h++) {
                    let k = g[h]
                      , l = k.media || "all";
                    k.media = "print";
                    k.onload = ()=>{
                        k.media = l;
                        lk(a)
                    }
                    ;
                    k.setAttribute("i-amphtml-timeout", d);
                    k.parentNode.insertBefore(k, k.nextSibling)
                }
            }
        }
        ), d)
    }
    function lk(a) {
        a = a.document;
        if (a.fonts && a.fonts.values)
            for (var b = a.fonts.values(); a = b.next(); ) {
                let c = a.value;
                if (!c)
                    break;
                "loading" == c.status && "display"in c && "auto" == c.display && (c.display = "swap")
            }
    }
    let mk = ["amp-ad", "amp-embed", "amp-video"];
    function nk(a, b, c, d) {
        b = `${b}:${c}`;
        let e = a.Ya[b];
        e || (e = {
            version: c,
            latest: "latest" == c,
            extension: {
                elements: {},
                services: []
            },
            auto: d || !1,
            docFactories: [],
            promise: void 0,
            resolve: void 0,
            reject: void 0,
            loaded: void 0,
            error: void 0,
            scriptPresent: void 0
        },
        a.Ya[b] = e);
        return e
    }
    function ok(a) {
        if (!a.promise)
            if (a.loaded)
                a.promise = Promise.resolve(a.extension);
            else if (a.error)
                a.promise = Promise.reject(a.error);
            else {
                let b = new r;
                a.promise = b.promise;
                a.resolve = b.resolve;
                a.reject = b.reject
            }
        return a.promise
    }
    function pk(a, b) {
        a.Fa || I().error("extensions", "unknown extension for ", b);
        return nk(a, a.Fa || "_UNKNOWN_", a.Bb || "")
    }
    function qk(a, b, c, d) {
        d ? Pd(a, d, (()=>{
            rk(a.win, b, c)
        }
        ), !1, b) : rk(a.win, b, c)
    }
    function rk(a, b, c) {
        xf(a, b, c);
        M(a, b, sk)
    }
    class tk {
        constructor(a) {
            this.win = a;
            this.la = U(a);
            this.Ya = {};
            this.pc = this.Bb = this.Fa = null
        }
        registerExtension(a, b, c, d, e) {
            var f;
            let g = c ? this.Ya[`${a}:latest`] : null
              , h = nk(this, a, b, null !== (f = null === g || void 0 === g ? void 0 : g.auto) && void 0 !== f ? f : !0);
            h.latest = c;
            if (!h.loaded) {
                c && (this.Ya[`${a}:latest`] = h);
                try {
                    var k, l;
                    this.Fa = a;
                    this.Bb = b;
                    this.pc = c;
                    d(e, e._);
                    h.loaded = !0;
                    null === (k = h.resolve) || void 0 === k ? void 0 : k.call(h, h.extension);
                    null === g || void 0 === g ? void 0 : null === (l = g.resolve) || void 0 === l ? void 0 : l.call(g, h.extension)
                } catch (q) {
                    var m, n;
                    h.error = q;
                    null === (m = h.reject) || void 0 === m ? void 0 : m.call(h, q);
                    null === g || void 0 === g ? void 0 : null === (n = g.reject) || void 0 === n ? void 0 : n.call(g, q);
                    throw q
                } finally {
                    this.pc = this.Bb = this.Fa = null
                }
            }
        }
        waitForExtension(a, b) {
            let c = ok(nk(this, a, b));
            return R(this.win).timeoutPromise(16e3, c).catch((d=>{
                if (!d.message.includes("timeout"))
                    throw d;
                H().error("extensions", `Waited over 16s to load extension ${a}.`);
                return c
            }
            ))
        }
        preloadExtension(a, b="0.1") {
            "amp-embed" == a && (a = "amp-ad");
            let c = nk(this, a, b);
            if (c.loaded || c.error)
                var d = !1;
            else
                void 0 === c.scriptPresent && (d = jc(this.win, a, b, c.latest),
                c.scriptPresent = 0 < d.length),
                d = !c.scriptPresent;
            d && (b = ic(this.win, a, b),
            this.win.document.head.appendChild(b),
            c.scriptPresent = !0);
            return ok(c)
        }
        installExtensionForDoc(a, b, c="0.1") {
            let d = a.getRootNode();
            let e = d.__AMP_EXT_LDR;
            e || (e = d.__AMP_EXT_LDR = v());
            if (e[b])
                return e[b];
            a.declareExtension(b, c);
            Cf(a.win, b);
            return e[b] = this.preloadExtension(b, c).then((()=>this.installExtensionInDoc(a, b, c)))
        }
        reloadExtension(a, b, c) {
            let d = jc(this.win, a, b, c, !1);
            if (c = this.Ya[`${a}:${b}`])
                c.scriptPresent = !1;
            d.forEach((e=>e.setAttribute("i-amphtml-loaded-new-version", a)));
            return this.preloadExtension(a, b)
        }
        importUnwrapped(a, b, c="0.1", d=!0) {
            let e = jc(a, b, c, d);
            let f = 0 < e.length ? e[0] : null;
            f ? b = f.__AMP_SCR_LOADED : (f = ic(this.win, b, c),
            b = f.__AMP_SCR_LOADED = new Promise(((g,h)=>{
                f.onload = g;
                f.onerror = h
            }
            )),
            a.document.head.appendChild(f));
            return b
        }
        loadElementClass(a, b="0.1") {
            return this.preloadExtension(a, b).then((c=>c.elements[a].implementationClass))
        }
        addElement(a, b, c) {
            pk(this, a).extension.elements[a] = {
                implementationClass: b,
                css: c
            };
            this.addDocFactory((d=>{
                qk(d, a, b, c)
            }
            ))
        }
        addTemplate(a, b) {
            this.addDocFactory((c=>{
                c = S(c, "templates");
                if (c.tb[a]) {
                    let d = c.ed[a];
                    J(d, "Duplicate template type: %s", a);
                    delete c.ed[a];
                    d(b)
                } else
                    c.tb[a] = Promise.resolve(b)
            }
            ))
        }
        addService(a, b) {
            pk(this, a).extension.services.push({
                serviceName: a,
                serviceClass: b
            });
            this.addDocFactory((c=>{
                N(c, a, b, !0)
            }
            ))
        }
        addDocFactory(a, b) {
            let c = pk(this, b);
            c.docFactories.push(a);
            if (this.Fa && this.la.isSingleDoc()) {
                let d = this.la.getAmpDoc(this.win.document)
                  , e = this.Fa
                  , f = this.pc || !1;
                (d.declaresExtension(e, this.Bb) || f && d.declaresExtension(e, "latest") || c.auto) && a(d)
            }
        }
        preinstallEmbed(a, b) {
            let c = a.win;
            uk(this.win, c);
            vk(c);
            b.forEach((({extensionId: d, extensionVersion: e})=>{
                a.declareExtension(d, e);
                mk.includes(d) || Cf(c, d)
            }
            ))
        }
        installExtensionsInDoc(a, b) {
            return Promise.all(b.map((({extensionId: c, extensionVersion: d})=>this.installExtensionInDoc(a, c, d))))
        }
        installExtensionInDoc(a, b, c="0.1") {
            a.declareExtension(b, c);
            return ok(nk(this, b, c)).then((()=>{
                nk(this, b, c).docFactories.forEach((d=>{
                    try {
                        d(a)
                    } catch (e) {
                        u("Doc factory failed: ", e, b)
                    }
                }
                ))
            }
            ))
        }
    }
    function vk(a) {
        mk.forEach((b=>{
            Cf(a, b)
        }
        ))
    }
    function uk(a, b) {
        let c = wf(a)["amp-img"];
        Af(b, "amp-img", c || ff);
        a = wf(a)["amp-pixel"];
        Af(b, "amp-pixel", a || ff)
    }
    function sk() {
        return {}
    }
    (function() {
        nb = lb;
        I();
        H()
    }
    )();
    (function(a) {
        self.__AMP_REPORT_ERROR = a
    }
    )(function(a, b, c) {
        ue(b, c);
        b && a && Ma(b.message) && !(0 <= b.message.indexOf("​​​​")) && U(a).isSingleDoc() && (b = w({
            errorName: b.name,
            errorMessage: b.message
        }),
        a = U(a).getSingleDoc().getRootNode(),
        Bd(a.documentElement || a.body || a, b))
    }
    .bind(null, self));
    function wk(a) {
        function b(h) {
            xk(c, h, (()=>{
                f.then((()=>{
                    "function" == typeof h ? h(c.AMP, c.AMP._) : e.registerExtension(h.n, h.ev, h.l, h.f, c.AMP)
                }
                ))
            }
            ))
        }
        var c = self;
        if (c.__AMP_TAG)
            p();
        else {
            c.__AMP_TAG = !0;
            var d = c.AMP || [];
            M(c, "extensions", tk);
            var e = Bc(c);
            Mi(c);
            vk(c);
            c.AMP = {
                win: c,
                _: c.AMP ? c.AMP._ : void 0
            };
            c.AMP.config = ab;
            c.AMP.BaseElement = df;
            c.AMP.registerElement = e.addElement.bind(e);
            c.AMP.registerTemplate = e.addTemplate.bind(e);
            c.AMP.registerServiceForDoc = e.addService.bind(e);
            c.AMP.isExperimentOn = xd.bind(null, c);
            c.AMP.toggleExperiment = zd.bind(null, c);
            c.AMP.setLogLevel = fb.bind(null);
            c.AMP.setTickFunction = ()=>{}
            ;
            var f = a(c, e);
            for (a = 0; a < d.length; a++) {
                let h = d[a];
                if (yk(c, h))
                    d.splice(a--, 1);
                else if ("function" == typeof h || "high" == h.p) {
                    try {
                        b(h)
                    } catch (k) {
                        I().error("runtime", "Extension failed: ", k, h.n)
                    }
                    d.splice(a--, 1)
                }
            }
            zk(c, (()=>{
                c.AMP.push = function(h) {
                    yk(c, h) || b(h)
                }
                ;
                for (let h = 0; h < d.length; h++) {
                    let k = d[h];
                    if (!yk(c, k))
                        try {
                            b(k)
                        } catch (l) {
                            I().error("runtime", "Extension failed: ", l, k.n)
                        }
                }
                d.length = 0
            }
            ));
            c.AMP.push || (c.AMP.push = d.push.bind(d));
            Q(c, "platform").isIos() && W(c.document.documentElement, "cursor", "pointer");
            var g = Bc(c);
            c.ResizeObserver && !c.ResizeObserver._stub || g.preloadExtension("amp-resize-observer-polyfill");
            Qb(c) && g.preloadExtension("amp-intersection-observer-polyfill")
        }
    }
    function xk(a, b, c) {
        "function" == typeof b || "high" == b.p ? p().then(c) : (c.displayName = b.n,
        Ve(a.document, c))
    }
    function Ak() {
        wk((a=>{
            Bk(a);
            return Db(a.document).then((()=>{
                Bf(a.AMP.ampdoc)
            }
            ))
        }
        ))
    }
    function Bk(a) {
        var b = a.document.documentElement
          , c = U(a).getSingleDoc();
        a.AMP.ampdoc = c;
        c = S(b, "viewer");
        a.AMP.viewer = c;
        b = S(b, "viewport");
        a.AMP.viewport = {};
        a.AMP.viewport.getScrollLeft = b.getScrollLeft.bind(b);
        a.AMP.viewport.getScrollWidth = b.getScrollWidth.bind(b);
        a.AMP.viewport.getWidth = b.getWidth.bind(b)
    }
    function yk(a, b) {
        if ("function" == typeof b)
            return !1;
        if (!b.m)
            return !0;
        let c = b.v;
        if (aa() == c)
            return !1;
        Bc(a).reloadExtension(b.n, b.ev, b.l);
        return !0
    }
    function zk(a, b) {
        a.document.body ? 0 < Od(a).length ? b() : R(a).delay(b, 1) : b()
    }
    function Ck() {
        var a = self;
        let b = a.location.href;
        if (!b.startsWith("about:")) {
            var c = !1
              , d = Ya(a);
            cb(a, d) && (c = "0" !== d.validate);
            c && Dk(a.document).then((()=>{
                amp.validator.validateUrlAndLog(b, a.document)
            }
            ))
        }
    }
    function Dk(a) {
        var b = `${F.cdn}/v0/validator_wasm.js`;
        let c = a.createElement("script");
        c.src = b;
        (b = a.head.querySelector("script[nonce]")) && c.setAttribute("nonce", b.getAttribute("nonce"));
        b = Ld(c).then((()=>{
            a.head.removeChild(c)
        }
        ), (()=>{}
        ));
        a.head.appendChild(c);
        return b
    }
    G(self).runtime = "inabox";
    G(self).a4aId = function(a) {
        let b = a.document.head.querySelector('meta[name="amp4ads-id"]');
        return b ? b.getAttribute("content") : null
    }(self);
    let Ek;
    try {
        ye(),
        ad(),
        Ek = U(self)
    } catch (a) {
        throw Yd(self.document),
        a
    }
    (function() {
        Re = !0
    }
    )();
    Ve(self.document, (function() {
        let a = Ek.getAmpDoc(self.document);
        M(self, "platform", Gh);
        M(self, "performance", dj);
        let b = Q(self, "performance");
        b.tick("is");
        self.document.documentElement.classList.add("i-amphtml-inabox");
        Pd(a, "[hidden]{display:none!important}.i-amphtml-element{display:inline-block}.i-amphtml-blurry-placeholder{transition:opacity 0.3s cubic-bezier(0.0,0.0,0.2,1)!important;pointer-events:none}[layout=nodisplay]:not(.i-amphtml-element){display:none!important}.i-amphtml-layout-fixed,[layout=fixed][width][height]:not(.i-amphtml-layout-fixed){display:inline-block;position:relative}.i-amphtml-layout-responsive,[layout=responsive][width][height]:not(.i-amphtml-layout-responsive),[width][height][heights]:not([layout]):not(.i-amphtml-layout-responsive),[width][height][sizes]:not(img):not([layout]):not(.i-amphtml-layout-responsive){display:block;position:relative}.i-amphtml-layout-intrinsic,[layout=intrinsic][width][height]:not(.i-amphtml-layout-intrinsic){display:inline-block;position:relative;max-width:100%}.i-amphtml-layout-intrinsic .i-amphtml-sizer{max-width:100%}.i-amphtml-intrinsic-sizer{max-width:100%;display:block!important}.i-amphtml-layout-container,.i-amphtml-layout-fixed-height,[layout=container],[layout=fixed-height][height]:not(.i-amphtml-layout-fixed-height){display:block;position:relative}.i-amphtml-layout-fill,.i-amphtml-layout-fill.i-amphtml-notbuilt,[layout=fill]:not(.i-amphtml-layout-fill),body noscript>*{display:block;overflow:hidden!important;position:absolute;top:0;left:0;bottom:0;right:0}body noscript>*{position:absolute!important;width:100%;height:100%;z-index:2}body noscript{display:inline!important}.i-amphtml-layout-flex-item,[layout=flex-item]:not(.i-amphtml-layout-flex-item){display:block;position:relative;-ms-flex:1 1 auto;flex:1 1 auto}.i-amphtml-layout-fluid{position:relative}.i-amphtml-layout-size-defined{overflow:hidden!important}.i-amphtml-layout-awaiting-size{position:absolute!important;top:auto!important;bottom:auto!important}i-amphtml-sizer{display:block!important}@supports (aspect-ratio:1/1){i-amphtml-sizer.i-amphtml-disable-ar{display:none!important}}.i-amphtml-blurry-placeholder,.i-amphtml-fill-content{display:block;height:0;max-height:100%;max-width:100%;min-height:100%;min-width:100%;width:0;margin:auto}.i-amphtml-layout-size-defined .i-amphtml-fill-content{position:absolute;top:0;left:0;bottom:0;right:0}.i-amphtml-replaced-content,.i-amphtml-screen-reader{padding:0!important;border:none!important}.i-amphtml-screen-reader{position:fixed!important;top:0px!important;left:0px!important;width:4px!important;height:4px!important;opacity:0!important;overflow:hidden!important;margin:0!important;display:block!important;visibility:visible!important}.i-amphtml-screen-reader~.i-amphtml-screen-reader{left:8px!important}.i-amphtml-screen-reader~.i-amphtml-screen-reader~.i-amphtml-screen-reader{left:12px!important}.i-amphtml-screen-reader~.i-amphtml-screen-reader~.i-amphtml-screen-reader~.i-amphtml-screen-reader{left:16px!important}.i-amphtml-unresolved{position:relative;overflow:hidden!important}.i-amphtml-select-disabled{-webkit-user-select:none!important;-ms-user-select:none!important;user-select:none!important}.i-amphtml-notbuilt,[layout]:not(.i-amphtml-element),[width][height][heights]:not([layout]):not(.i-amphtml-element),[width][height][sizes]:not(img):not([layout]):not(.i-amphtml-element){position:relative;overflow:hidden!important;color:transparent!important}.i-amphtml-notbuilt:not(.i-amphtml-layout-container)>*,[layout]:not([layout=container]):not(.i-amphtml-element)>*,[width][height][heights]:not([layout]):not(.i-amphtml-element)>*,[width][height][sizes]:not([layout]):not(.i-amphtml-element)>*{display:none}amp-img:not(.i-amphtml-element)[i-amphtml-ssr]>img.i-amphtml-fill-content{display:block}.i-amphtml-notbuilt:not(.i-amphtml-layout-container),[layout]:not([layout=container]):not(.i-amphtml-element),[width][height][heights]:not([layout]):not(.i-amphtml-element),[width][height][sizes]:not(img):not([layout]):not(.i-amphtml-element){color:transparent!important;line-height:0!important}.i-amphtml-ghost{visibility:hidden!important}.i-amphtml-element>[placeholder],[layout]:not(.i-amphtml-element)>[placeholder],[width][height][heights]:not([layout]):not(.i-amphtml-element)>[placeholder],[width][height][sizes]:not([layout]):not(.i-amphtml-element)>[placeholder]{display:block;line-height:normal}.i-amphtml-element>[placeholder].amp-hidden,.i-amphtml-element>[placeholder].hidden{visibility:hidden}.i-amphtml-element:not(.amp-notsupported)>[fallback],.i-amphtml-layout-container>[placeholder].amp-hidden,.i-amphtml-layout-container>[placeholder].hidden{display:none}.i-amphtml-layout-size-defined>[fallback],.i-amphtml-layout-size-defined>[placeholder]{position:absolute!important;top:0!important;left:0!important;right:0!important;bottom:0!important;z-index:1}amp-img[i-amphtml-ssr]:not(.i-amphtml-element)>[placeholder]{z-index:auto}.i-amphtml-notbuilt>[placeholder]{display:block!important}.i-amphtml-hidden-by-media-query{display:none!important}.i-amphtml-element-error{background:red!important;color:#fff!important;position:relative!important}.i-amphtml-element-error:before{content:attr(error-message)}i-amp-scroll-container,i-amphtml-scroll-container{position:absolute;top:0;left:0;right:0;bottom:0;display:block}i-amp-scroll-container.amp-active,i-amphtml-scroll-container.amp-active{overflow:auto;-webkit-overflow-scrolling:touch}.i-amphtml-loading-container{display:block!important;pointer-events:none;z-index:1}.i-amphtml-notbuilt>.i-amphtml-loading-container{display:block!important}.i-amphtml-loading-container.amp-hidden{visibility:hidden}.i-amphtml-element>[overflow]{cursor:pointer;position:relative;z-index:2;visibility:hidden;display:initial;line-height:normal}.i-amphtml-layout-size-defined>[overflow]{position:absolute}.i-amphtml-element>[overflow].amp-visible{visibility:visible}template{display:none!important}.amp-border-box,.amp-border-box *,.amp-border-box :after,.amp-border-box :before{box-sizing:border-box}amp-pixel{display:none!important}amp-analytics,amp-auto-ads,amp-story-auto-ads{position:fixed!important;top:0!important;width:1px!important;height:1px!important;overflow:hidden!important;visibility:hidden}html.i-amphtml-fie>amp-analytics{position:initial!important}[visible-when-invalid]:not(.visible),form [submit-error],form [submit-success],form [submitting]{display:none}amp-accordion{display:block!important}@media (min-width:1px){:where(amp-accordion>section)>:first-child{margin:0;background-color:#efefef;padding-right:20px;border:1px solid #dfdfdf}:where(amp-accordion>section)>:last-child{margin:0}}amp-accordion>section{float:none!important}amp-accordion>section>*{float:none!important;display:block!important;overflow:hidden!important;position:relative!important}amp-accordion,amp-accordion>section{margin:0}amp-accordion:not(.i-amphtml-built)>section>:last-child{display:none!important}amp-accordion:not(.i-amphtml-built)>section[expanded]>:last-child{display:block!important}\n/*# sourceURL=/css/ampshared.css*/html.i-amphtml-inabox{width:100%!important;height:100%!important}", (()=>{
            Ve(self.document, (function() {
                Mi(self);
                jk();
                var c = a.win;
                lf(c.top) || M(c, "iframeMessagingClient", ij.bind(null, c), !0);
                N(a, "url", Th, !0);
                N(a, "templates", Qh);
                N(a, "documentInfo", Ng);
                N(a, "cid", ej);
                N(a, "viewer", kj, !0);
                Kj(a);
                N(a, "hidden-observer", Tg);
                N(a, "history", hh);
                N(a, "resources", Pf);
                N(a, "owners", Eh);
                N(a, "mutator", jj);
                xi(a);
                N(a, "action", eg, !0);
                N(a, "standard-actions", Mh, !0);
                c = Error("Un-supported service: storage");
                var d = O(a);
                d = P(d);
                d = tc(d);
                let e = d.storage;
                e ? e.reject && e.reject(c) : (d.storage = vc(),
                d.storage.reject(c));
                N(a, "navigation", xh, !0);
                Di(a);
                b.coreServicesAvailable();
                ih = p();
                ik(a)
            }
            ));
            Ve(self.document, (function() {
                var c = self;
                Af(c, "amp-img", Gf);
                Af(c, "amp-pixel", Mf);
                Af(c, "amp-layout", If)
            }
            ));
            Ve(self.document, (function() {
                Ak()
            }
            ));
            Ve(self.document, (function() {
                Bf(a)
            }
            ));
            Ve(self.document, (function() {
                self.document.documentElement.addEventListener("click", zh.bind(null, a), !0);
                hk(a);
                Ck();
                Wd()
            }
            ), !0);
            Ve(self.document, (function() {
                b.tick("e_is");
                S(a, "resources").ampInitComplete();
                b.flush()
            }
            ))
        }
        ), !0, "amp-runtime")
    }
    ));
    self.console && (console.info || console.log).call(console, `Powered by AMP ⚡ HTML – Version ${aa()}`, self.location.href);
    self.document.documentElement.setAttribute("amp-version", aa())
}
)();
//# sourceMappingURL=amp4ads-v0.mjs.map
