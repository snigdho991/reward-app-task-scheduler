(self.AMP = self.AMP || []).push({
    m: 1,
    v: "2111152338000",
    n: "amp-ad-exit",
    ev: "0.1",
    l: true,
    f: function(AMP, _) {
        let h = Object.prototype.toString;
        let n;
        function p(a, b) {
            let c = a
              , d = b
              , e = k=>{
                try {
                    return d(k)
                } catch (m) {
                    var g, l;
                    null === (g = (l = self).__AMP_REPORT_ERROR) || void 0 === g ? void 0 : g.call(l, m);
                    throw m
                }
            }
            ;
            let f = q();
            c.addEventListener("message", e, f ? void 0 : !1);
            return ()=>{
                var k;
                null === (k = c) || void 0 === k ? void 0 : k.removeEventListener("message", e, f ? void 0 : !1);
                e = c = d = null
            }
        }
        function q() {
            if (void 0 !== n)
                return n;
            n = !1;
            try {
                let a = {
                    get capture() {
                        n = !0
                    }
                };
                self.addEventListener("test-options", null, a);
                self.removeEventListener("test-options", null, a)
            } catch (a) {}
            return n
        }
        function r(a) {
            var b = null;
            let c = "";
            for (let e of arguments)
                if (e instanceof Error && !b)
                    a: {
                        b = e;
                        var d = Object.getOwnPropertyDescriptor(b, "message");
                        if (null !== d && void 0 !== d && d.writable)
                            break a;
                        d = b.stack;
                        let f = Error(b.message);
                        for (let k in b)
                            f[k] = b[k];
                        f.stack = d;
                        b = f
                    }
                else
                    c && (c += " "),
                    c += e;
            b ? c && (b.message = c + ": " + b.message) : b = Error(c);
            return b
        }
        function t(a) {
            let b = r.apply(null, arguments);
            setTimeout((()=>{
                var c, d;
                null === (c = (d = self).__AMP_REPORT_ERROR) || void 0 === c ? void 0 : c.call(d, b);
                throw b
            }
            ))
        }
        function u(a, b) {
            try {
                return JSON.parse(a)
            } catch (c) {
                return null === b || void 0 === b ? void 0 : b(c),
                null
            }
        }
        function aa(a, b) {
            return p(a, b)
        }
        function ba(a) {
            if (!ca(a))
                return null;
            let b = a.indexOf("{");
            return u(a.substr(b), (c=>{
                t(Error(`MESSAGING: Failed to parse message: ${a}\n${c.message}`))
            }
            ))
        }
        function ca(a) {
            return "string" == typeof a && a.startsWith("amp-") && -1 != a.indexOf("{")
        }
        /* https://mths.be/cssescape v1.5.1 by @mathias | MIT license */
        function da(a) {
            var b;
            return "SCRIPT" == a.tagName && "APPLICATION/JSON" == (null === (b = a.getAttribute("type")) || void 0 === b ? void 0 : b.toUpperCase())
        }
        let v = self.AMP_CONFIG || {}
          , ea = ("string" == typeof v.cdnProxyRegex ? new RegExp(v.cdnProxyRegex) : v.cdnProxyRegex) || /^https:\/\/([a-zA-Z0-9_-]+\.)?cdn\.ampproject\.org$/;
        function w(a) {
            if (self.document && self.document.head && (!self.location || !ea.test(self.location.origin))) {
                var b = self.document.head.querySelector(`meta[name="${a}"]`);
                b && b.getAttribute("content")
            }
        }
        v.cdnUrl || w("runtime-host");
        v.geoApiUrl || w("amp-geo-api");
        let fa = /(?:^[#?]?|&)([^=&]+)(?:=([^&]*))?/g;
        function x(a, b="") {
            try {
                return decodeURIComponent(a)
            } catch (c) {
                return b
            }
        }
        function y(a) {
            ({location: a} = a || self);
            {
                a = a.originalHash || a.hash;
                let c = Object.create(null);
                if (a)
                    for (var b; b = fa.exec(a); ) {
                        let d = x(b[1], b[1]);
                        b = b[2] ? x(b[2].replace(/\+/g, " "), b[2]) : "";
                        c[d] = b
                    }
                a = c
            }
            return a
        }
        let z = "";
        function ha() {
            var a = self;
            if (a.__AMP_MODE)
                a = a.__AMP_MODE;
            else {
                var b = y(a) || y(a);
                b = ["1", "actions", "amp", "amp4ads", "amp4email"].includes(b.development) || !!a.AMP_DEV_MODE;
                if (!z) {
                    var c;
                    z = (null === (c = a.AMP_CONFIG) || void 0 === c ? void 0 : c.v) || "012111152338000"
                }
                a = a.__AMP_MODE = {
                    localDev: !1,
                    development: b,
                    esm: !0,
                    test: !1,
                    rtvVersion: z
                }
            }
            return a
        }
        self.__AMP_LOG = self.__AMP_LOG || {
            user: null,
            dev: null,
            userForEmbed: null
        };
        let A = self.__AMP_LOG;
        function B() {
            throw Error("failed to call initLogConstructor")
        }
        function C() {
            A.user || (A.user = B());
            return A.user
        }
        function F(a, b, c, d) {
            C().assert(a, b, c, d, void 0, void 0, void 0, void 0, void 0, void 0, void 0)
        }
        class ia {
            constructor() {
                this.promise = new Promise(((a,b)=>{
                    this.resolve = a;
                    this.reject = b
                }
                ))
            }
        }
        function ja(a) {
            a = G(a);
            a = H(a);
            return I(a, "url-replace") ? J(a, "url-replace") : null
        }
        function K(a) {
            return a.__AMP_TOP || (a.__AMP_TOP = a)
        }
        function G(a) {
            if (a.nodeType) {
                var b = (a.ownerDocument || a).defaultView;
                b = K(b);
                return J(b, "ampdoc").getAmpDoc(a)
            }
            return a
        }
        function H(a) {
            a = G(a);
            return a.isSingleDoc() ? a.win : a
        }
        function J(a, b) {
            I(a, b);
            a = L(a)[b];
            a.obj || (a.obj = new a.ctor(a.context),
            a.context = null,
            a.resolve && a.resolve(a.obj));
            return a.obj
        }
        function ka(a) {
            var b;
            (b = L(a)["host-exit"]) ? b.promise ? b = b.promise : (J(a, "host-exit"),
            b = b.promise = Promise.resolve(b.obj)) : b = null;
            let c = b;
            if (c)
                return c;
            a = L(a);
            a["host-exit"] = la();
            return a["host-exit"].promise
        }
        function L(a) {
            let b = a.__AMP_SERVICES;
            b || (b = a.__AMP_SERVICES = {});
            return b
        }
        function I(a, b) {
            a = a.__AMP_SERVICES && a.__AMP_SERVICES[b];
            return !(!a || !a.ctor)
        }
        function la() {
            let a = new ia
              , b = a.promise
              , c = a.reject
              , d = a.resolve;
            b.catch((()=>{}
            ));
            return {
                obj: null,
                promise: b,
                resolve: d,
                reject: c,
                context: null,
                ctor: null
            }
        }
        class M {
            constructor(a, b) {
                this.name = a;
                this.type = b
            }
            filter() {}
            onLayoutMeasure() {}
        }
        function N(a, b, c) {
            b in a ? Object.defineProperty(a, b, {
                value: c,
                enumerable: !0,
                configurable: !0,
                writable: !0
            }) : a[b] = c;
            return a
        }
        N["default"] = N;
        N.__esModule = !0;
        function O(a) {
            for (var b = 1; b < arguments.length; b++) {
                var c = null != arguments[b] ? arguments[b] : {};
                b % 2 ? P(Object(c), !0).forEach((function(d) {
                    N(a, d, c[d])
                }
                )) : Object.getOwnPropertyDescriptors ? Object.defineProperties(a, Object.getOwnPropertyDescriptors(c)) : P(Object(c)).forEach((function(d) {
                    Object.defineProperty(a, d, Object.getOwnPropertyDescriptor(c, d))
                }
                ))
            }
            return a
        }
        function P(a, b) {
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
        O["default"] = O;
        O.__esModule = !0;
        let Q = {
            bg: "https://tpc.googlesyndication.com/b4a/b4a-runner.html",
            moat: "https://z.moatads.com/ampanalytics093284/iframe.html"
        };
        O(O({}, Q), {}, {
            bg: "https://tpc.googlesyndication.com/b4a/experimental/b4a-runner.html"
        });
        function ma(a) {
            F("object" == typeof a);
            if (a.filters) {
                var b = a.filters;
                let d = ["clickDelay", "clickLocation", "inactiveElement"];
                for (let e in b)
                    F("object" == typeof b[e], "Filter specification '%s' is malformed", e),
                    F(-1 != d.indexOf(b[e].type), "Supported filters: " + d.join(", "))
            } else
                a.filters = {};
            if (a.transport) {
                b = a.transport;
                for (var c in b)
                    F("beacon" == c || "image" == c, `Unknown transport option: '${c}'`),
                    F("boolean" == typeof b[c])
            } else
                a.transport = {};
            c = a.targets;
            F("object" == typeof c, "'targets' must be an object");
            for (let d in c)
                na(d, c[d], a);
            return a
        }
        function na(a, b, c) {
            F("string" == typeof b.finalUrl, "finalUrl of target '%s' must be a string", a);
            b.filters && b.filters.forEach((d=>{
                F(c.filters[d], "filter '%s' not defined", d)
            }
            ));
            if (b.vars) {
                a = /^_[a-zA-Z0-9_-]+$/;
                for (let d in b.vars)
                    F(a.test(d), "'%s' must match the pattern '%s'", d, a)
            }
        }
        function R(a) {
            return C().assertString(Q[a], `Unknown or invalid vendor ${a}, note that vendor must use transport: iframe`)
        }
        class oa extends M {
            constructor(a, b, c) {
                super(a, b.type);
                F("clickDelay" == b.type && "number" == typeof b.delay && 0 < b.delay, "Invalid ClickDelay spec");
                this.spec = b;
                this.intervalStart = Date.now();
                b.startTimingEvent && c.performance && c.performance.timing && void 0 != c.performance.timing[b.startTimingEvent] && (this.intervalStart = c.performance.timing[b.startTimingEvent])
            }
            filter() {
                return Date.now() - this.intervalStart >= this.spec.delay
            }
        }
        function T(a) {
            return {
                type: "clickDelay",
                delay: 1e3,
                startTimingEvent: a
            }
        }
        class pa extends M {
            constructor(a, b, c) {
                super(a, b.type);
                F("clickLocation" == b.type && ("undefined" === typeof b.left || "number" === typeof b.left) && ("undefined" === typeof b.right || "number" === typeof b.right) && ("undefined" === typeof b.top || "number" === typeof b.top) && ("undefined" === typeof b.bottom || "number" === typeof b.bottom) && ("undefined" === typeof b.relativeTo || "string" === typeof b.relativeTo), "Invaid ClickLocation spec");
                this.M = b.left || 0;
                this.N = b.right || 0;
                this.P = b.top || 0;
                this.L = b.bottom || 0;
                this.G = b.relativeTo;
                this.H = c;
                this.h = {
                    top: 0,
                    right: 0,
                    bottom: 0,
                    left: 0
                }
            }
            filter(a) {
                return a.clientX >= this.h.left && a.clientX <= this.h.right && a.clientY >= this.h.top && a.clientY <= this.h.bottom ? !0 : !1
            }
            onLayoutMeasure() {
                this.H.getVsync().measure((()=>{
                    let a = this.H.win;
                    if (this.G) {
                        let b = a.document.querySelector(this.G);
                        F(b, `relativeTo element ${this.G} not found.`);
                        let c = b.getBoundingClientRect();
                        this.h.left = c.left;
                        this.h.top = c.top;
                        this.h.bottom = c.bottom;
                        this.h.right = c.right
                    } else
                        this.h.left = 0,
                        this.h.top = 0,
                        this.h.bottom = a.innerHeight,
                        this.h.right = a.innerWidth;
                    this.h.left += this.M;
                    this.h.top += this.P;
                    this.h.right -= this.N;
                    this.h.bottom -= this.L
                }
                ))
            }
        }
        class qa extends M {
            constructor(a, b) {
                super(a, b.type);
                F("inactiveElement" == b.type && "string" == typeof b.selector, "Invalid InactiveElementspec");
                this.O = b.selector
            }
            filter(a) {
                a = a.target;
                let b = a.matches || a.webkitMatchesSelector || a.mozMatchesSelector || a.msMatchesSelector || a.oMatchesSelector;
                return !(b && b.call(a, this.O))
            }
        }
        function U(a, b, c) {
            switch (b.type) {
            case "clickDelay":
                return new oa(a,b,c.win);
            case "clickLocation":
                return new pa(a,b,c);
            case "inactiveElement":
                return new qa(a,b)
            }
        }
        function ra(a, b) {
            try {
                a: {
                    let e = (a.ownerDocument || a).defaultView
                      , f = b || K(e);
                    if (e && e != f && K(e) == f)
                        try {
                            var c = e.frameElement;
                            break a
                        } catch (k) {}
                    c = null
                }
                let d = c.parentElement;
                if ("AMP-AD" == d.nodeName)
                    return String(d.getResourceId())
            } catch (d) {}
            return null
        }
        function V(a, b, c, d) {
            let e;
            try {
                e = a.open(b, c, d)
            } catch (k) {
                (A.dev || (A.dev = B())).error("DOM", "Failed to open url on target: ", c, k)
            }
            if (!(c = e || "_top" == c)) {
                c = d || "";
                var f;
                "number" !== typeof f && (f = 0);
                c = f + 8 > c.length ? !1 : -1 !== c.indexOf("noopener", f)
            }
            c || a.open(b, "_top")
        }
        new Set(["c", "v", "a", "ad"]);
        let W;
        function X(a) {
            W || (W = self.document.createElement("a"));
            var b = W;
            b.href = "";
            a = new URL(a,b.href);
            return a
        }
        function Y(a, b) {
            return a.every((c=>c.filter(b)))
        }
        function sa(a, b, c, d) {
            let e = {
                ATTRIBUTION_REPORTING_STATUS: ()=>{
                    var g, l;
                    return null !== d && void 0 !== d && null !== (g = d.behaviors) && void 0 !== g && g.browserAdConversion && a.I ? 3 : null !== d && void 0 !== d && null !== (l = d.behaviors) && void 0 !== l && l.browserAdConversion ? 2 : 1
                }
                ,
                CLICK_X: ()=>c.clientX,
                CLICK_Y: ()=>c.clientY
            }
              , f = ja(a.element)
              , k = {
                ATTRIBUTION_REPORTING_STATUS: !0,
                CLICK_X: !0,
                CLICK_Y: !0,
                RANDOM: !0
            };
            if (d.vars)
                for (let g in d.vars) {
                    if ("_" != g[0])
                        continue;
                    let l = d.vars[g];
                    l && (e[g] = ()=>{
                        if (l.iframeTransportSignal) {
                            let m = f.expandStringSync(l.iframeTransportSignal, {
                                IFRAME_TRANSPORT_SIGNAL: (S,D)=>{
                                    if (!S || !D)
                                        return "";
                                    let E = a.K[S];
                                    if (E && D in E)
                                        return E[D]
                                }
                            });
                            if (l.iframeTransportSignal == `IFRAME_TRANSPORT_SIGNAL${m}`)
                                (A.dev || (A.dev = B())).error("amp-ad-exit", "Invalid IFRAME_TRANSPORT_SIGNAL format:" + m + " (perhaps there is a space after a comma?)");
                            else if ("" != m)
                                return m
                        }
                        return g in b ? b[g] : l.defaultValue
                    }
                    ,
                    k[g] = !0)
                }
            return g=>f.expandUrlSync(g, e, k)
        }
        function ta(a) {
            if (a && Object.keys(a)) {
                var b = ["noopener"];
                for (let c of Object.keys(a))
                    b.push(`${c.toLowerCase()}=${a[c]}`);
                return b.join(",")
            }
        }
        function Z(a) {
            "inabox" != ha().runtime && (a.j = a.j || ra(a.element, K(a.win)),
            a.j && (a.C = aa(a.getAmpDoc().win, (b=>{
                if (a.F[b.origin]) {
                    var c = ba(b.data);
                    if (c && "iframe-transport-response" == c.type) {
                        b = b.origin;
                        F(c.message, "Received empty response from 3p analytics frame");
                        F(c.creativeId, "Received malformed message from 3p analytics frame: creativeId missing");
                        F(c.vendor, "Received malformed message from 3p analytics frame: vendor missing");
                        let d = X(R(c.vendor));
                        F(d && d.origin == b, `Invalid origin for vendor ${c.vendor}: ${b}`);
                        c.creativeId == a.j && (a.K[c.vendor] = c.message)
                    }
                }
            }
            ))))
        }
        class ua extends AMP.BaseElement {
            constructor(a) {
                super(a);
                this.A = {};
                this.J = {};
                this.o = [];
                this.B = {
                    beacon: !0,
                    image: !0
                };
                this.D = {};
                this.registerAction("exit", this.exit.bind(this));
                this.registerAction("setVariable", this.setVariable.bind(this), 1);
                this.K = {};
                this.j = this.C = null;
                this.F = {};
                this.I = this.detectAttributionReportingSupport()
            }
            exit(a) {
                let b = a.args;
                let {event: c} = a;
                F("variable"in b != "target"in b, "One and only one of 'target' and 'variable' must be specified");
                let d;
                "variable"in b ? ((d = this.J[b.variable]) || (d = b["default"]),
                F(d, `Variable target not found, variable:'${b.variable}', default:'${b["default"]}'`),
                delete b["default"]) : d = b.target;
                let e = this.A[d];
                F(e, `Exit target not found: '${d}'`);
                F(c, "Unexpected null event");
                c.preventDefault();
                if (Y(this.o, c) && Y(e.filters, c)) {
                    var f = sa(this, b, c, e);
                    e.trackingUrls && e.trackingUrls.map(f).forEach((g=>{
                        this.B.beacon && this.win.navigator.sendBeacon && this.win.navigator.sendBeacon(g, "") || !this.B.image || (this.win.document.createElement("img").src = g)
                    }
                    ));
                    var k = f(e.finalUrl);
                    G(this.getAmpDoc()).getHeadNode().querySelector("script[host-service]") ? ka(H(this.getAmpDoc())).then((g=>g.openUrl(k))).catch((g=>{
                        g.fallback && V(this.win, k, "_blank")
                    }
                    )) : V(this.win, k, e.behaviors && e.behaviors.clickTarget && "_top" == e.behaviors.clickTarget ? "_top" : "_blank", e.windowFeatures)
                }
            }
            setVariable(a) {
                a = a.args;
                F(this.A[a.target], `Exit target not found: '${a.target}'`);
                this.J[a.name] = a.target
            }
            buildCallback() {
                this.element.setAttribute("aria-hidden", "true");
                this.o.push(U("minDelay", T(), this));
                this.o.push(U("carouselBtns", {
                    type: "inactiveElement",
                    selector: ".amp-carousel-button"
                }, this));
                var a = this.element.children;
                F(1 == a.length, "The tag should contain exactly one <script> child.");
                a = a[0];
                F(da(a), 'The amp-ad-exit config should be inside a <script> tag with type="application/json"');
                try {
                    let c = ma(JSON.parse(a.textContent));
                    let d;
                    "[object Object]" === h.call(c.options) && "string" === typeof c.options.startTimingEvent && (d = c.options.startTimingEvent,
                    this.o.splice(0, 1, U("minDelay", T(c.options.startTimingEvent), this)));
                    for (let e in c.filters) {
                        let f = c.filters[e];
                        "clickDelay" == f.type && (f.startTimingEvent = f.startTimingEvent || d);
                        this.D[e] = U(e, f, this)
                    }
                    for (let e in c.targets) {
                        let f = c.targets[e];
                        this.A[e] = {
                            finalUrl: f.finalUrl,
                            trackingUrls: f.trackingUrls || [],
                            vars: f.vars || {},
                            filters: (f.filters || []).map((k=>this.D[k])).filter(Boolean),
                            behaviors: f.behaviors || {}
                        };
                        if (this.I) {
                            var b;
                            this.A[e].windowFeatures = ta(null === f || void 0 === f ? void 0 : null === (b = f.behaviors) || void 0 === b ? void 0 : b.browserAdConversion)
                        }
                        for (let k in f.vars) {
                            if (!f.vars[k].iframeTransportSignal)
                                continue;
                            let g = f.vars[k].iframeTransportSignal.match(/IFRAME_TRANSPORT_SIGNAL\(([^,]+)/);
                            if (!g || 2 > g.length)
                                continue;
                            let l = g[1]
                              , {origin: m} = X(R(l));
                            this.F[m] = this.F[m] || l
                        }
                    }
                    this.B.beacon = !1 !== c.transport.beacon;
                    this.B.image = !1 !== c.transport.image
                } catch (c) {
                    throw this.user().error("amp-ad-exit", "Invalid JSON config", c),
                    c
                }
                Z(this)
            }
            detectAttributionReportingSupport() {
                var a;
                return null === (a = this.win.document.featurePolicy) || void 0 === a ? void 0 : a.allowsFeature("attribution-reporting")
            }
            resumeCallback() {
                Z(this)
            }
            unlayoutCallback() {
                this.C && (this.C(),
                this.C = null);
                return super.unlayoutCallback()
            }
            isLayoutSupported() {
                return !0
            }
            onLayoutMeasure() {
                for (let a in this.D)
                    this.D[a].onLayoutMeasure()
            }
        }
        AMP.registerElement("amp-ad-exit", ua)
    }
});
//# sourceMappingURL=amp-ad-exit-0.1.mjs.map
