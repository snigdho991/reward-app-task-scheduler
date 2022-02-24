(self.AMP = self.AMP || []).push({
    m: 1,
    v: "2111152338000",
    n: "amp-analytics",
    ev: "0.1",
    l: true,
    f: function(AMP, _) {
        let ca;
        function p() {
            return ca ? ca : ca = Promise.resolve(void 0)
        }
        class q {
            constructor() {
                this.promise = new Promise(((a,b)=>{
                    this.resolve = a;
                    this.reject = b
                }
                ))
            }
        }
        function da(a) {
            return new Promise((b=>{
                b(a())
            }
            ))
        }
        let ea = Object.prototype.hasOwnProperty
          , fa = Object.prototype.toString;
        function u(a) {
            return "[object Object]" === fa.call(a)
        }
        function v(a) {
            return a || {}
        }
        function w(a, b) {
            return ea.call(a, b)
        }
        function ha(a, b, c=10) {
            let d = []
              , e = [];
            for (e.push({
                t: a,
                s: b,
                d: 0
            }); 0 < e.length; ) {
                let {d: f, s: g, t: h} = e.shift();
                if (d.includes(g))
                    throw Error("Source object has a circular reference.");
                d.push(g);
                if (h !== g)
                    if (f > c)
                        Object.assign(h, g);
                    else
                        for (let k of Object.keys(g)) {
                            a = g[k];
                            if (w(h, k) && (b = h[k],
                            u(a) && u(b))) {
                                e.push({
                                    t: b,
                                    s: a,
                                    d: f + 1
                                });
                                continue
                            }
                            h[k] = a
                        }
            }
        }
        let x = Array.isArray;
        function ia(a, b) {
            let c = [];
            let d = 0;
            for (let e = 0; e < a.length; e++) {
                let f = a[e];
                b(f, e, a) ? c.push(f) : (d < e && (a[d] = f),
                d++)
            }
            d < a.length && (a.length = d)
        }
        function ka(a, b) {
            for (let c = 0; c < a.length; c++)
                if (b(a[c], c, a))
                    return c;
            return -1
        }
        function la(a, b) {
            try {
                return JSON.parse(a)
            } catch (c) {
                return null === b || void 0 === b ? void 0 : b(c),
                null
            }
        }
        function ma(a, b) {
            let c = a.length - b.length;
            return 0 <= c && a.indexOf(b, c) == c
        }
        function na(a, b) {
            for (let c = 0; 5 > c; c++) {
                let d = 0;
                a = a.replace(/\${([^}]*)}/g, ((e,f)=>{
                    d++;
                    return b(f)
                }
                ));
                if (!d)
                    break
            }
            return a
        }
        function oa(a, b) {
            var c = /\${([^}]*)}/g;
            if ("string" == typeof b)
                return Promise.resolve(a.replace(c, b));
            let d = [];
            let e = 0;
            a.replace(c, (function(f) {
                let g = arguments[arguments.length - 2];
                d.push(a.slice(e, g));
                e = g + f.length;
                let h = b.apply(null, arguments);
                d.push(h)
            }
            ));
            d.push(a.slice(e));
            return Promise.all(d).then((f=>f.join("")))
        }
        function y(a) {
            return "number" === typeof a && isFinite(a)
        }
        /* https://mths.be/cssescape v1.5.1 by @mathias | MIT license */
        function pa(a, b) {
            let c = a.matches || a.webkitMatchesSelector || a.mozMatchesSelector || a.msMatchesSelector || a.oMatchesSelector;
            return c ? c.call(a, b) : !1
        }
        function qa(a, b) {
            for (; a && void 0 !== a; a = a.parentElement)
                if (b(a))
                    return a;
            return null
        }
        function ra(a, b) {
            return a.closest ? a.closest(b) : qa(a, (c=>pa(c, b)))
        }
        function sa(a, b) {
            for (a = a.lastElementChild; a; a = a.previousElementSibling)
                if (b(a))
                    return a;
            return null
        }
        function ta(a, b, c) {
            a = a.createElement(b);
            for (let d in c)
                a.setAttribute(d, c[d]);
            return a
        }
        function ua(a, b) {
            let c = g=>g
              , d = a.dataset;
            a = {};
            let e = b || /^param(.+)/;
            for (let g in d) {
                var f = g.match(e);
                f && (f = f[1][0].toLowerCase() + f[1].substr(1),
                a[c(f)] = d[g])
            }
            return a
        }
        let z = self.AMP_CONFIG || {}
          , va = ("string" == typeof z.cdnProxyRegex ? new RegExp(z.cdnProxyRegex) : z.cdnProxyRegex) || /^https:\/\/([a-zA-Z0-9_-]+\.)?cdn\.ampproject\.org$/;
        function wa(a) {
            if (!self.document || !self.document.head || self.location && va.test(self.location.origin))
                return null;
            let b = self.document.head.querySelector(`meta[name="${a}"]`);
            return b && b.getAttribute("content") || null
        }
        let xa = {
            thirdParty: z.thirdPartyUrl || "https://3p.ampproject.net",
            thirdPartyFrameHost: z.thirdPartyFrameHost || "ampproject.net",
            thirdPartyFrameRegex: ("string" == typeof z.thirdPartyFrameRegex ? new RegExp(z.thirdPartyFrameRegex) : z.thirdPartyFrameRegex) || /^d-\d+\.ampproject\.net$/,
            cdn: z.cdnUrl || wa("runtime-host") || "https://cdn.ampproject.org",
            cdnProxyRegex: va,
            localhostRegex: /^https?:\/\/localhost(:\d+)?$/,
            errorReporting: z.errorReportingUrl || "https://us-central1-amp-error-reporting.cloudfunctions.net/r",
            betaErrorReporting: z.betaErrorReportingUrl || "https://us-central1-amp-error-reporting.cloudfunctions.net/r-beta",
            localDev: z.localDev || !1,
            trustedViewerHosts: [/(^|\.)google\.(com?|[a-z]{2}|com?\.[a-z]{2}|cat)$/, /(^|\.)gmail\.(com|dev)$/],
            geoApi: z.geoApiUrl || wa("amp-geo-api")
        };
        let ya = /(?:^[#?]?|&)([^=&]+)(?:=([^&]*))?/g;
        function za(a, b="") {
            try {
                return decodeURIComponent(a)
            } catch (c) {
                return b
            }
        }
        function Aa(a) {
            let b = Object.create(null);
            if (!a)
                return b;
            for (var c; c = ya.exec(a); ) {
                let d = za(c[1], c[1]);
                c = c[2] ? za(c[2].replace(/\+/g, " "), c[2]) : "";
                b[d] = c
            }
            return b
        }
        function Ba(a) {
            ({location: a} = a || self);
            return Aa(a.originalHash || a.hash)
        }
        let Ca = "";
        function B(a) {
            a = a || self;
            if (a.__AMP_MODE)
                var b = a.__AMP_MODE;
            else {
                var c = Ba(a) || Ba(a);
                c = ["1", "actions", "amp", "amp4ads", "amp4email"].includes(c.development) || !!a.AMP_DEV_MODE;
                Ca || (Ca = (null === (b = a.AMP_CONFIG) || void 0 === b ? void 0 : b.v) || "012111152338000");
                b = a.__AMP_MODE = {
                    localDev: !1,
                    development: c,
                    esm: !0,
                    test: !1,
                    rtvVersion: Ca
                }
            }
            return b
        }
        function Da(a) {
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
                        for (let g in b)
                            f[g] = b[g];
                        f.stack = d;
                        b = f
                    }
                else
                    c && (c += " "),
                    c += e;
            b ? c && (b.message = c + ": " + b.message) : b = Error(c);
            return b
        }
        function Ea(a) {
            let b = Da.apply(null, arguments);
            setTimeout((()=>{
                var c, d;
                null === (c = (d = self).__AMP_REPORT_ERROR) || void 0 === c ? void 0 : c.call(d, b);
                throw b
            }
            ))
        }
        function Fa(a, b) {
            function c() {
                d = 0;
                let g = 500 - (a.Date.now() - e);
                if (0 < g)
                    d = a.setTimeout(c, g);
                else {
                    var h = f;
                    f = null;
                    b.apply(null, h)
                }
            }
            let d = 0
              , e = 0
              , f = null;
            return function(...g) {
                e = a.Date.now();
                f = g;
                d || (d = a.setTimeout(c, 500))
            }
        }
        self.__AMP_LOG = self.__AMP_LOG || {
            user: null,
            dev: null,
            userForEmbed: null
        };
        let D = self.__AMP_LOG;
        function Ga() {
            throw Error("failed to call initLogConstructor")
        }
        function E() {
            D.user || (D.user = Ga());
            return D.user
        }
        function F(a, b, c, d, e, f) {
            return E().assert(a, b, c, d, e, f, void 0, void 0, void 0, void 0, void 0)
        }
        function G(a, b) {
            a = I(a);
            return J(a, b)
        }
        function K(a, b) {
            var c = L(a);
            c = Ha(c);
            return J(c, b)
        }
        function M(a, b) {
            a = L(a);
            a = Ha(a);
            return Ia(a, b) ? J(a, b) : null
        }
        function N(a, b) {
            {
                a = Ha(a);
                let c = Ja(a, b);
                c ? b = c : (a = Ka(a),
                a[b] = La(),
                b = a[b].promise)
            }
            return b
        }
        function Ma(a, b) {
            return Ja(Ha(a), b)
        }
        function I(a) {
            return a.__AMP_TOP || (a.__AMP_TOP = a)
        }
        function Na(a, b) {
            let c = (a.ownerDocument || a).defaultView
              , d = b || I(c);
            if (c && c != d && I(c) == d)
                try {
                    return c.frameElement
                } catch (e) {}
            return null
        }
        function L(a) {
            return a.nodeType ? G((a.ownerDocument || a).defaultView, "ampdoc").getAmpDoc(a) : a
        }
        function Ha(a) {
            a = L(a);
            return a.isSingleDoc() ? a.win : a
        }
        function J(a, b) {
            Ia(a, b);
            a = Ka(a)[b];
            a.obj || (a.obj = new a.ctor(a.context),
            a.context = null,
            a.resolve && a.resolve(a.obj));
            return a.obj
        }
        function Oa(a, b, c, d) {
            let e = Ka(a);
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
            f.resolve && J(a, c))
        }
        function Ja(a, b) {
            let c = Ka(a)[b];
            if (c) {
                if (c.promise)
                    return c.promise;
                J(a, b);
                return c.promise = Promise.resolve(c.obj)
            }
            return null
        }
        function Ka(a) {
            let b = a.__AMP_SERVICES;
            b || (b = a.__AMP_SERVICES = {});
            return b
        }
        function Ia(a, b) {
            a = a.__AMP_SERVICES && a.__AMP_SERVICES[b];
            return !(!a || !a.ctor)
        }
        function La() {
            let a = new q
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
        function Pa(a) {
            return Qa(a, "userNotificationManager", "amp-user-notification", void 0).then((b=>F(b, "Service %s was requested to be provided through %s, but %s is not loaded in the current page. To fix this problem load the JavaScript file for %s in this page.", "userNotificationManager", "amp-user-notification", "amp-user-notification", "amp-user-notification")))
        }
        function Qa(a, b, c, d) {
            let e = Ma(a, b);
            if (e)
                return e;
            let f = L(a);
            return f.whenExtensionsKnown().then((()=>{
                let g = f.getExtensionVersion(c);
                return g ? G(f.win, "extensions").waitForExtension(c, g) : null
            }
            )).then((g=>g ? d ? Ma(a, b) : N(a, b) : null))
        }
        function Ra(a) {
            let b = M(a, "amp-script");
            return b ? Promise.resolve(b) : Qa(a, "amp-script", "amp-script")
        }
        var Sa = a=>Qa(a, "consentPolicyManager", "amp-consent");
        let Ta;
        function Ua(a, b, c, d) {
            let e = a
              , f = c
              , g = l=>{
                try {
                    return f(l)
                } catch (r) {
                    var m, n;
                    null === (m = (n = self).__AMP_REPORT_ERROR) || void 0 === m ? void 0 : m.call(n, r);
                    throw r
                }
            }
            ;
            let h = Va()
              , k = !(null === d || void 0 === d || !d.capture);
            e.addEventListener(b, g, h ? d : k);
            return ()=>{
                var l;
                null === (l = e) || void 0 === l ? void 0 : l.removeEventListener(b, g, h ? d : k);
                g = e = f = null
            }
        }
        function Va() {
            if (void 0 !== Ta)
                return Ta;
            Ta = !1;
            try {
                let a = {
                    get capture() {
                        Ta = !0
                    }
                };
                self.addEventListener("test-options", null, a);
                self.removeEventListener("test-options", null, a)
            } catch (a) {}
            return Ta
        }
        function O(a, b, c) {
            return Ua(a, b, c, void 0)
        }
        function Wa(a, b, c, d) {
            let e = c;
            let f = Ua(a, b, (g=>{
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
        function Xa(a) {
            return !!(a.complete || "complete" == a.readyState || Ya(a) && 0 < a.readyState || a.document && "complete" == a.document.readyState)
        }
        function Za(a) {
            let b, c;
            if (Xa(a))
                return Promise.resolve(a);
            let d = Ya(a);
            return d && a.__AMP_MEDIA_LOAD_FAILURE_SRC === a.currentSrc ? Promise.reject(a) : new Promise(((e,f)=>{
                b = d ? Wa(a, "loadedmetadata", e, {
                    capture: !0
                }) : Wa(a, "load", e);
                if (a.tagName) {
                    var g = a;
                    if (d && !a.hasAttribute("src") && (g = sa(a, (h=>"SOURCE" === h.tagName)),
                    !g))
                        return f(Error("Media has no source."));
                    c = Wa(g, "error", f)
                }
            }
            )).then((()=>{
                c && c();
                return a
            }
            ), (()=>{
                b && b();
                Ya(a) && (a.__AMP_MEDIA_LOAD_FAILURE_SRC = a.currentSrc || !0);
                let e = a;
                e && e.src && (e = e.src);
                throw E().createError("Failed to load:", e)
            }
            ))
        }
        function Ya(a) {
            return "AUDIO" === a.tagName || "VIDEO" === a.tagName
        }
        function $a(a, b) {
            let c = 0;
            "active" === a.type && (c = 5);
            return Math.min(b - a.time, c)
        }
        class ab {
            constructor() {
                this.Kb = 0;
                this.sa = void 0
            }
            push(a) {
                this.sa && this.sa.time < a.time && (this.Kb += $a(this.sa, a.time));
                this.sa = a
            }
            getTotalEngagedTime(a) {
                let b = 0;
                void 0 !== this.sa && (b = this.Kb + $a(this.sa, a));
                return b
            }
        }
        let bb = ["mousedown", "mouseup", "mousemove", "keydown", "keyup"]
          , cb = ["mouseleave"];
        function db(a) {
            let b = Date.now() - a.X;
            return 0 < b ? b : 0
        }
        function eb(a, b) {
            let c = db(a)
              , d = Math.floor(c / 1e3);
            setTimeout(a.Fc, 1e3 - c % 1e3);
            a.Pb.push({
                type: b,
                time: d
            })
        }
        class fb {
            constructor(a) {
                this.ampdoc = a;
                this.Fc = this.md.bind(this);
                this.Tb = this.wb.bind(this);
                this.Dc = this.bc.bind(this);
                this.Ec = this.Tc.bind(this);
                this.La = {};
                this.wa = [];
                this.Xa = this.Wa = !1;
                this.Pb = new ab;
                this.T = K(this.ampdoc, "viewport");
                this.ampdoc.whenFirstVisible().then(this.ld.bind(this))
            }
            ld() {
                this.X = Date.now();
                this.wb();
                var a = this.ampdoc.getRootNode()
                  , b = this.Tb;
                for (var c = 0; c < bb.length; c++)
                    this.wa.push(O(a, bb[c], b));
                a = this.ampdoc.getRootNode();
                b = this.Dc;
                for (c = 0; c < cb.length; c++)
                    this.wa.push(O(a, cb[c], b));
                this.wa.push(this.ampdoc.onVisibilityChanged(this.Ec));
                this.T.onScroll(this.Tb)
            }
            md() {
                this.Xa = this.Wa = !1
            }
            wb() {
                this.Wa || (this.Wa = !0,
                this.Xa = !1,
                eb(this, "active"))
            }
            bc() {
                this.Xa || (this.Xa = !0,
                this.Wa = !1,
                eb(this, "inactive"))
            }
            Tc() {
                this.ampdoc.isVisible() ? this.wb() : this.bc()
            }
            Mb() {
                for (let a = 0; a < this.wa.length; a++) {
                    let b = this.wa[a];
                    "function" === typeof b && b()
                }
                this.wa = []
            }
            qd() {
                this.Mb()
            }
            getTotalEngagedTime() {
                let a = Math.floor(db(this) / 1e3);
                return this.Pb.getTotalEngagedTime(a)
            }
            getIncrementalEngagedTime(a, b=!0) {
                if (!w(this.La, a))
                    return b && (this.La[a] = this.getTotalEngagedTime()),
                    this.getTotalEngagedTime();
                let c = this.La[a];
                if (!1 === b)
                    return this.getTotalEngagedTime() - c;
                this.La[a] = this.getTotalEngagedTime();
                return this.La[a] - c
            }
        }
        let gb = JSON.parse('{"transport":{"beacon":true,"xhrpost":true,"image":true},"vars":{"accessReaderId":"ACCESS_READER_ID","ampGeo":"AMP_GEO","ampState":"AMP_STATE","ampVersion":"AMP_VERSION","ampdocHost":"AMPDOC_HOST","ampdocHostname":"AMPDOC_HOSTNAME","ampdocMeta":"AMPDOC_META","ampdocUrl":"AMPDOC_URL","authdata":"AUTHDATA","availableScreenHeight":"AVAILABLE_SCREEN_HEIGHT","availableScreenWidth":"AVAILABLE_SCREEN_WIDTH","backgroundState":"BACKGROUND_STATE","browserLanguage":"BROWSER_LANGUAGE","canonicalHost":"CANONICAL_HOST","canonicalHostname":"CANONICAL_HOSTNAME","canonicalPath":"CANONICAL_PATH","canonicalUrl":"CANONICAL_URL","clientId":"CLIENT_ID","consentState":"CONSENT_STATE","consentString":"CONSENT_STRING","contentLoadTime":"CONTENT_LOAD_TIME","cookie":"COOKIE","counter":"COUNTER","cumulativeLayoutShift":"CUMULATIVE_LAYOUT_SHIFT","documentCharset":"DOCUMENT_CHARSET","documentReferrer":"DOCUMENT_REFERRER","domInteractiveTime":"DOM_INTERACTIVE_TIME","domainLookupTime":"DOMAIN_LOOKUP_TIME","experimentBranches":"EXPERIMENT_BRANCHES","externalReferrer":"EXTERNAL_REFERRER","firstContentfulPaint":"FIRST_CONTENTFUL_PAINT","firstInputDelay":"FIRST_INPUT_DELAY","firstViewportReady":"FIRST_VIEWPORT_READY","fragmentParam":"FRAGMENT_PARAM","htmlAttr":"HTML_ATTR","incrementalEngagedTime":"INCREMENTAL_ENGAGED_TIME","largestContentfulPaint":"LARGEST_CONTENTFUL_PAINT","makeBodyVisible":"MAKE_BODY_VISIBLE","navRedirectCount":"NAV_REDIRECT_COUNT","navTiming":"NAV_TIMING","navType":"NAV_TYPE","pageDownloadTime":"PAGE_DOWNLOAD_TIME","pageLoadTime":"PAGE_LOAD_TIME","pageViewId":"PAGE_VIEW_ID","pageViewId64":"PAGE_VIEW_ID_64","queryParam":"QUERY_PARAM","random":"RANDOM","redirectTime":"REDIRECT_TIME","resourceTiming":"RESOURCE_TIMING","screenColorDepth":"SCREEN_COLOR_DEPTH","screenHeight":"SCREEN_HEIGHT","screenWidth":"SCREEN_WIDTH","scrollHeight":"SCROLL_HEIGHT","scrollLeft":"SCROLL_LEFT","scrollTop":"SCROLL_TOP","scrollWidth":"SCROLL_WIDTH","sessionId":"SESSION_ID","sessionCount":"SESSION_COUNT","sessionEngaged":"SESSION_ENGAGED","sessionEventTimestamp":"SESSION_EVENT_TIMESTAMP","sessionTimestamp":"SESSION_TIMESTAMP","serverResponseTime":"SERVER_RESPONSE_TIME","sourceHost":"SOURCE_HOST","sourceHostname":"SOURCE_HOSTNAME","sourcePath":"SOURCE_PATH","sourceUrl":"SOURCE_URL","tcpConnectTime":"TCP_CONNECT_TIME","timestamp":"TIMESTAMP","timezone":"TIMEZONE","timezoneCode":"TIMEZONE_CODE","title":"TITLE","totalEngagedTime":"TOTAL_ENGAGED_TIME","uach":"UACH","userAgent":"USER_AGENT","viewer":"VIEWER","viewportHeight":"VIEWPORT_HEIGHT","viewportWidth":"VIEWPORT_WIDTH"}}');
        let hb = new Set(["c", "v", "a", "ad"]);
        let ib;
        let jb = a=>"string" == typeof a ? P(a) : a;
        function P(a) {
            ib || (ib = self.document.createElement("a"));
            var b = ib;
            b.href = "";
            a = new URL(a,b.href);
            return a
        }
        function kb(a, b, c) {
            if (!b)
                return a;
            let d = a.split("#", 2)
              , e = d[0].split("?", 2);
            let f = e[0] + (e[1] ? c ? `?${b}&${e[1]}` : `?${e[1]}&${b}` : `?${b}`);
            return f += d[1] ? `#${d[1]}` : ""
        }
        function lb(a, b) {
            return `${encodeURIComponent(a)}=${encodeURIComponent(b)}`
        }
        function mb(a) {
            let b = [];
            for (let d in a) {
                var c = a[d];
                if (null != c) {
                    c = x(c) ? c : [c];
                    for (let e = 0; e < c.length; e++)
                        b.push(lb(d, c[e]))
                }
            }
            return b.join("&")
        }
        function nb(a, b) {
            F(null != a, "%s %s must be available", b, "source");
            var c = jb(a);
            c = "https:" == c.protocol || "localhost" == c.hostname || "127.0.0.1" == c.hostname || ma(c.hostname, ".localhost");
            F(c || /^\/\//.test(a), '%s %s must start with "https://" or "//" or be relative and served from either https or from localhost. Invalid value: %s', b, "source", a)
        }
        function ob(a) {
            return xa.cdnProxyRegex.test(jb(a).origin)
        }
        function pb(a, b) {
            return a && "?" != a ? (a = a.replace(new RegExp(`[?&]${b}\\b[^&]*`,"g"), "").replace(/^[?&]/, "")) ? "?" + a : "" : ""
        }
        function qb(a, b, c) {
            b in a ? Object.defineProperty(a, b, {
                value: c,
                enumerable: !0,
                configurable: !0,
                writable: !0
            }) : a[b] = c;
            return a
        }
        qb["default"] = qb;
        qb.__esModule = !0;
        function Q(a) {
            for (var b = 1; b < arguments.length; b++) {
                var c = null != arguments[b] ? arguments[b] : {};
                b % 2 ? rb(Object(c), !0).forEach((function(d) {
                    qb(a, d, c[d])
                }
                )) : Object.getOwnPropertyDescriptors ? Object.defineProperties(a, Object.getOwnPropertyDescriptors(c)) : rb(Object(c)).forEach((function(d) {
                    Object.defineProperty(a, d, Object.getOwnPropertyDescriptor(c, d))
                }
                ))
            }
            return a
        }
        function rb(a, b) {
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
        Q["default"] = Q;
        Q.__esModule = !0;
        function sb(a) {
            var b, c, d, e, f;
            if (a.__AMP__EXPERIMENT_TOGGLES)
                var g = a.__AMP__EXPERIMENT_TOGGLES;
            else {
                a.__AMP__EXPERIMENT_TOGGLES = Object.create(null);
                g = a.__AMP__EXPERIMENT_TOGGLES;
                var h = Q(Q({}, null !== (b = a.AMP_CONFIG) && void 0 !== b ? b : {}), null !== (c = a.AMP_EXP) && void 0 !== c ? c : JSON.parse((null === (d = a.__AMP_EXP) || void 0 === d ? void 0 : d.textContent) || "{}"));
                for (let n in h)
                    b = h[n],
                    "number" === typeof b && 0 <= b && 1 >= b && (g[n] = Math.random() < b);
                h = null === (e = a.AMP_CONFIG) || void 0 === e ? void 0 : e["allow-doc-opt-in"];
                if (x(h) && h.length && (e = a.document.head.querySelector('meta[name="amp-experiments-opt-in"]'))) {
                    e = e.getAttribute("content").split(",");
                    for (var k of e)
                        h.includes(k) && (g[k] = !0)
                }
                k = Object;
                e = k.assign;
                var l;
                h = "";
                try {
                    "localStorage"in a && (h = a.localStorage.getItem("amp-experiment-toggles"))
                } catch (n) {}
                h = (null === (l = h) || void 0 === l ? void 0 : l.split(/\s*,\s*/g)) || [];
                l = Object.create(null);
                for (var m of h)
                    m && ("-" == m[0] ? l[m.substr(1)] = !1 : l[m] = !0);
                e.call(k, g, l);
                m = null === (f = a.AMP_CONFIG) || void 0 === f ? void 0 : f["allow-url-opt-in"];
                if (x(m) && m.length) {
                    a = Aa(a.location.originalHash || a.location.hash);
                    for (let n of m)
                        f = a[`e-${n}`],
                        "1" == f && (g[n] = !0),
                        "0" == f && (g[n] = !1)
                }
            }
            return !!g["analytics-browser-events"]
        }
        function tb(a) {
            a = I(a);
            a.__AMP_EXPERIMENT_BRANCHES || (a.__AMP_EXPERIMENT_BRANCHES = {});
            return Q({}, a.__AMP_EXPERIMENT_BRANCHES)
        }
        let ub;
        let vb = "Webkit webkit Moz moz ms O o".split(" ")
          , wb = {
            getPropertyPriority: ()=>"",
            getPropertyValue: ()=>""
        };
        function xb(a, b, c) {
            if (b.startsWith("--"))
                return b;
            ub || (ub = Object.create(null));
            let d = ub[b];
            if (!d || c) {
                d = b;
                if (void 0 === a[b]) {
                    var e = b.charAt(0).toUpperCase() + b.slice(1);
                    a: {
                        for (let g = 0; g < vb.length; g++) {
                            let h = vb[g] + e;
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
                c || (ub[b] = d)
            }
            return d
        }
        function yb(a) {
            var b = !1;
            void 0 === b && (b = a.hasAttribute("hidden"));
            b ? a.removeAttribute("hidden") : a.setAttribute("hidden", "")
        }
        function zb(a) {
            let b = xb(a, "visibilityState", !0);
            if (a[b])
                return a[b];
            let c = xb(a, "hidden", !0);
            return a[c] ? a[c] ? "hidden" : "visible" : "visible"
        }
        function Ab(a) {
            Object.keys(a.I).forEach((b=>{
                let c = a.I[b];
                c.engaged = Bb(a);
                Cb(a, b, c)
            }
            ))
        }
        function Bb(a) {
            return a.$a && a.qa && a.Ba
        }
        function Cb(a, b, c) {
            a.xc.then((d=>{
                d.setNonBoolean("amp-session:" + b, c)
            }
            ))
        }
        function Db(a, b, c) {
            let d = b.count
              , e = Date.now();
            if (Eb(b)) {
                let f = (null !== d && void 0 !== d ? d : 0) + 1;
                b = Fb(Bb(a), f)
            } else {
                let f = c && b.engaged;
                b.engaged = f || Bb(a);
                f && (a.Ba = !0,
                a.$a = !0,
                a.qa = !0)
            }
            b.accessTimestamp = e;
            return b
        }
        function Gb(a, b, c) {
            return a.xc.then((d=>d.get("amp-session:" + b))).then((d=>{
                var e;
                d ? (u(d) ? d = {
                    ["sessionId"]: d.sessionId,
                    ["creationTimestamp"]: d.creationTimestamp,
                    ["count"]: d.count,
                    ["accessTimestamp"]: d.accessTimestamp,
                    ["eventTimestamp"]: d.eventTimestamp,
                    ["engaged"]: null !== (e = d.engaged) && void 0 !== e ? e : !0
                } : ((D.dev || (D.dev = Ga())).error("amp-analytics/session-manager", "Invalid stored session value"),
                d = Fb()),
                e = Db(a, d, !0)) : e = Fb(Bb(a));
                return e
            }
            )).then((d=>{
                if (b in a.I && !Eb(a.I[b]))
                    return a.I[b];
                null === c || void 0 === c ? void 0 : c(d);
                Cb(a, b, d);
                a.I[b] = d;
                return a.I[b]
            }
            ))
        }
        class Hb {
            constructor(a) {
                this.xc = N(a, "storage");
                this.I = Object.create(null);
                this.o = a;
                this.j = a.win;
                this.Nb = [];
                this.qa = this.Ba = null;
                this.$a = !0;
                this.xb()
            }
            xb() {
                this.Ba = this.j.document.hasFocus();
                this.qa = "visible" == zb(this.j.document);
                this.Nb.push(O(this.j, "focus", (()=>{
                    this.Ba = !0;
                    Ab(this)
                }
                )), O(this.j, "blur", (()=>{
                    this.Ba = !1;
                    Ab(this)
                }
                )), O(this.j, "pageshow", (()=>{
                    this.$a = !0;
                    Ab(this)
                }
                )), O(this.j, "pagehide", (()=>{
                    this.$a = !1;
                    Ab(this)
                }
                )), this.o.onVisibilityChanged((()=>{
                    this.qa = this.o.isVisible();
                    Ab(this)
                }
                )))
            }
            dispose() {
                this.Nb.forEach((a=>{
                    a()
                }
                ));
                this.Nb.length = 0
            }
            getSessionValue(a, b) {
                return this.get(a).then((c=>null === c || void 0 === c ? void 0 : c[b]))
            }
            updateEvent(a) {
                return this.get(a, (b=>{
                    b.eventTimestamp = Date.now()
                }
                ))
            }
            get(a, b) {
                return a ? w(this.I, a) && !Eb(this.I[a]) ? (this.I[a] = Db(this, this.I[a]),
                null === b || void 0 === b ? void 0 : b(this.I[a]),
                Cb(this, a, this.I[a]),
                Promise.resolve(this.I[a])) : Gb(this, a, b) : (E().error("amp-analytics/session-manager", "Sessions can only be accessed with a vendor type."),
                Promise.resolve(null))
            }
        }
        function Eb(a) {
            return a.accessTimestamp + 18e5 < Date.now()
        }
        function Fb(a, b=1) {
            return {
                ["sessionId"]: Math.round(1e4 * Math.random()),
                ["creationTimestamp"]: Date.now(),
                ["accessTimestamp"]: Date.now(),
                ["count"]: b,
                ["eventTimestamp"]: void 0,
                ["engaged"]: a
            }
        }
        function Ib(a) {
            return "undefined" !== typeof TextEncoder ? new TextEncoder("utf-8").encode(a) : Jb(unescape(encodeURIComponent(a)))
        }
        function Jb(a) {
            let b = new Uint8Array(a.length);
            for (let c = 0; c < a.length; c++) {
                let d = a.charCodeAt(c);
                b[c] = d
            }
            return b
        }
        function Kb(a) {
            let b = Array(a.length);
            for (let c = 0; c < a.length; c++)
                b[c] = String.fromCharCode(a[c]);
            return b.join("")
        }
        let Lb = {
            "-": "+",
            _: "/",
            ".": "="
        }
          , Mb = {
            "+": "-",
            "/": "_",
            "=": "."
        };
        function Nb(a) {
            let b = atob(a.replace(/[-_.]/g, (c=>Lb[c])));
            return Jb(b)
        }
        function Ob(a) {
            a = Kb(a);
            return btoa(a).replace(/[+/=]/g, (b=>Mb[b]))
        }
        function Pb(a) {
            a = Ib(a);
            return Ob(a)
        }
        function Qb(a, b) {
            try {
                var c = a.document.cookie
            } catch (f) {
                c = ""
            }
            let d = c;
            if (!d)
                return null;
            let e = d.split(";");
            for (a = 0; a < e.length; a++) {
                let f = e[a].trim()
                  , g = f.indexOf("=");
                if (-1 != g && za(f.substring(0, g).trim()) == b)
                    return b = f.substring(g + 1).trim(),
                    za(b, b)
            }
            return null
        }
        function Rb(a, b, c, d, e={}) {
            if (e.allowOnProxyOrigin)
                F(!e.highestAvailableDomain, "Could not support highestAvailable Domain on proxy origin, specify domain explicitly");
            else {
                F(!ob(a.location.href), `Should never attempt to set cookie on proxy origin: ${b}`);
                var f = P(a.location.href).hostname.toLowerCase()
                  , g = P(xa.cdn).hostname.toLowerCase();
                F(!(f == g || ma(f, "." + g)), "Should never attempt to set cookie on proxy origin. (in depth check): " + b)
            }
            f = void 0;
            e.domain ? f = e.domain : e.highestAvailableDomain && (f = Sb(a));
            Tb(a, b, c, d, f, e.sameSite, e.secure)
        }
        function Sb(a) {
            let b = a.document.head && a.document.head.querySelector("meta[name='amp-cookie-scope']");
            if (b) {
                let f = b.getAttribute("content") || "";
                a = a.location.href;
                a = jb(a);
                if (ob(a)) {
                    var c = a.pathname.split("/");
                    F(hb.has(c[1]), "Unknown path prefix in url %s", a.href);
                    var d = c[2]
                      , e = "s" == d ? "https://" + decodeURIComponent(c[3]) : "http://" + decodeURIComponent(d);
                    F(0 < e.indexOf("."), "Expected a . in origin %s", e);
                    c.splice(1, "s" == d ? 3 : 2);
                    a = e + c.join("/") + pb(a.search, "(amp_(js[^&=]*|gsa|r|kit)|usqp)") + (a.hash || "")
                } else
                    a = a.href;
                a = P(a).origin;
                return ma(a, "." + f) ? f : a.split("://")[1]
            }
            if (!ob(a.location.href)) {
                c = a.location.hostname.split(".");
                d = c[c.length - 1];
                for (e = "-test-amp-cookie-tmp"; Qb(a, e); )
                    e = "-test-amp-cookie-tmp0";
                for (let f = c.length - 2; 0 <= f; f--)
                    if (d = c[f] + "." + d,
                    Tb(a, e, "delete", Date.now() + 1e3, d),
                    "delete" == Qb(a, e))
                        return Tb(a, e, "delete", Date.now() - 1e3, d),
                        d
            }
            return null
        }
        function Tb(a, b, c, d, e, f, g) {
            "ampproject.org" == e && (c = "delete",
            d = 0);
            b = encodeURIComponent(b) + "=" + encodeURIComponent(c) + "; path=/" + (e ? "; domain=" + e : "") + "; expires=" + new Date(d).toUTCString() + (f ? `; SameSite=${f}` : "") + (g ? "; Secure" : "");
            try {
                a.document.cookie = b
            } catch (h) {}
        }
        function Ub(a) {
            if (!Vb(a))
                return null;
            let b = a.indexOf("{");
            return la(a.substr(b), (c=>{
                Ea(Error(`MESSAGING: Failed to parse message: ${a}\n${c.message}`))
            }
            ))
        }
        function Vb(a) {
            return "string" == typeof a && a.startsWith("amp-") && -1 != a.indexOf("{")
        }
        function Wb(a, b, c) {
            let {listeningFors: d} = a;
            !d && c && (d = a.listeningFors = Object.create(null));
            a = d || null;
            if (!a)
                return a;
            let e = a[b];
            !e && c && (e = a[b] = []);
            return e || null
        }
        function Xb(a, b, c) {
            var d = c ? b.getAttribute("data-amp-3p-sentinel") : "amp";
            a = Wb(a, d, !0);
            let e;
            for (d = 0; d < a.length; d++) {
                let f = a[d];
                if (f.frame === b) {
                    e = f;
                    break
                }
            }
            e || (e = {
                frame: b,
                events: Object.create(null)
            },
            a.push(e));
            return e.events
        }
        function Yb(a) {
            let b = v({
                sentinel: "unlisten"
            });
            for (let d = a.length - 1; 0 <= d; d--) {
                var c = a[d];
                if (!c.frame.contentWindow) {
                    a.splice(d, 1);
                    c = c.events;
                    for (let e in c)
                        c[e].splice(0, 1 / 0).forEach((f=>{
                            f(b)
                        }
                        ))
                }
            }
        }
        function Zb(a) {
            a.listeningFors || a.addEventListener("message", (function(b) {
                if (b.data) {
                    var c = $b(b.data);
                    if (c && c.sentinel) {
                        {
                            var d = b.source;
                            let k = Wb(a, c.sentinel);
                            if (k) {
                                for (let l = 0; l < k.length; l++) {
                                    let m = k[l]
                                      , n = m.frame.contentWindow;
                                    if (n) {
                                        var e;
                                        if (!(e = d == n))
                                            b: {
                                                for (e = d; e && e != e.parent; e = e.parent)
                                                    if (e == n) {
                                                        e = !0;
                                                        break b
                                                    }
                                                e = !1
                                            }
                                        if (e) {
                                            var f = m;
                                            break
                                        }
                                    } else
                                        setTimeout(Yb, 0, k)
                                }
                                var g = f ? f.events : null
                            } else
                                g = k
                        }
                        if (g) {
                            var h = g[c.type];
                            if (h)
                                for (h = h.slice(),
                                d = 0; d < h.length; d++)
                                    (0,
                                    h[d])(c, b.source, b.origin, b)
                        }
                    }
                }
            }
            ))
        }
        function ac(a, b, c, d) {
            function e(l, m, n, r) {
                if ("amp" == l.sentinel) {
                    if (m != a.contentWindow)
                        return;
                    let t = "null" == n && void 0;
                    if (g != n && !t)
                        return
                }
                if (d || m == a.contentWindow)
                    "unlisten" == l.sentinel ? k() : b(l, m, n, r)
            }
            let f = a.ownerDocument.defaultView;
            Zb(f);
            c = Xb(f, a, c);
            let g = P(a.src).origin;
            let k, h = c["send-iframe-transport-events"] || (c["send-iframe-transport-events"] = []);
            h.push(e);
            return k = function() {
                if (e) {
                    let l = h.indexOf(e);
                    -1 < l && h.splice(l, 1);
                    b = h = e = null
                }
            }
        }
        function bc(a, b, c, d, e) {
            if (a.contentWindow)
                for (d.type = c,
                d.sentinel = e ? a.getAttribute("data-amp-3p-sentinel") : "amp",
                a = d,
                e && (a = "amp-" + JSON.stringify(d)),
                d = 0; d < b.length; d++)
                    e = b[d],
                    e.win.postMessage(a, e.origin)
        }
        function $b(a) {
            "string" == typeof a && (a = "{" == a.charAt(0) ? la(a, (()=>{}
            )) || null : Vb(a) ? Ub(a) : null);
            return a
        }
        class cc {
            constructor(a, b) {
                this.dc = a;
                this.zb = !0;
                this.za = [];
                this.Mb = ac(this.dc, ((c,d,e)=>{
                    this.za.some((f=>f.win == d)) || this.za.push({
                        win: d,
                        origin: e
                    });
                    b(c, d, e)
                }
                ), this.zb, this.zb)
            }
            send(a, b) {
                ia(this.za, (c=>!c.win.parent));
                bc(this.dc, this.za, a, b, this.zb)
            }
            destroy() {
                this.Mb();
                this.za.length = 0
            }
        }
        function dc(a) {
            return a.classList.contains("i-amphtml-fie") || !!ra(a, ".i-amphtml-fie")
        }
        function ec(a, b) {
            return !dc(b) && !ob(a.location) && "inabox" != B(a).runtime
        }
        function fc(a) {
            return Sa(a).then((b=>b ? b.whenPolicyResolved("default") : null))
        }
        function hc(a) {
            return Sa(a).then((b=>b ? b.getConsentStringInfo("default") : null))
        }
        function ic(a) {
            return Sa(a).then((b=>b ? b.getConsentMetadataInfo("default") : null))
        }
        let jc = null;
        let kc = /^[a-zA-Z0-9\-_.]+$/;
        function lc(a) {
            let b = mc(a);
            return "" === b ? "" : ["1", nc(b), b].join("*")
        }
        function nc(a, b) {
            var c = (new Date).getTimezoneOffset();
            var d = window;
            c = [window.navigator.userAgent, c, d.navigator.userLanguage || d.navigator.language].join("*");
            d = b || 0;
            d = Math.floor(Date.now() / 6e4) - d;
            a = [c, d, a].join("*");
            if (!jc) {
                c = Array(256);
                for (d = 0; 256 > d; d++) {
                    let e = d;
                    for (let f = 0; 8 > f; f++)
                        e = 1 & e ? e >>> 1 ^ 3988292384 : e >>> 1;
                    c[d] = e
                }
                jc = c
            }
            a = Ib(a);
            c = 4294967295;
            for (d = 0; d < a.length; d++)
                c = c >>> 8 ^ jc[255 & (c ^ a[d])];
            return ((-1 ^ c) >>> 0).toString(36)
        }
        function mc(a) {
            return a ? Object.keys(a).filter((b=>{
                let c = kc.test(b);
                c || E().error("amp-analytics/linker", "Invalid linker key: " + b);
                return c
            }
            )).map((b=>b + "*" + Pb(String(a[b])))).join("*") : ""
        }
        class oc {
            constructor(a) {
                this.j = a;
                this.Ea = {}
            }
            get(a, b) {
                if (!a || !b)
                    return E().error("amp-analytics/linker-reader", "LINKER_PARAM requires two params, name and id"),
                    null;
                if (!w(this.Ea, a)) {
                    var c = this.Ea;
                    var d = Aa(this.j.location.search);
                    if (w(d, a)) {
                        d = d[a];
                        var e = this.j.location;
                        if (this.j.history.replaceState) {
                            var f = pb(e.search, a);
                            this.j.history.replaceState(null, "", e.origin + e.pathname + f + (e.hash || ""))
                        }
                        e = d.split("*");
                        f = 0 == e.length % 2;
                        4 > e.length || !f ? (E().error("amp-analytics/linker", `Invalid linker_param value ${d}`),
                        d = null) : (d = Number(e.shift()),
                        1 !== d ? (E().error("amp-analytics/linker", `Invalid version number ${d}`),
                        d = null) : (d = e.shift(),
                        e = e.join("*"),
                        d = {
                            checksum: d,
                            serializedIds: e
                        }));
                        if (d) {
                            e = d.serializedIds;
                            c: {
                                d = d.checksum;
                                for (f = 0; 1 >= f; f++)
                                    if (nc(e, f) == d) {
                                        d = !0;
                                        break c
                                    }
                                d = !1
                            }
                            if (d)
                                for (d = {},
                                e = e.split("*"),
                                f = 0; f < e.length; f += 2) {
                                    let h = e[f];
                                    if (kc.test(h)) {
                                        var g = Nb(String(e[f + 1]));
                                        "undefined" !== typeof TextDecoder ? g = new TextDecoder("utf-8").decode(g) : (g = Kb(new Uint8Array(g.buffer || g)),
                                        g = decodeURIComponent(escape(g)));
                                        d[h] = g
                                    } else
                                        E().error("amp-analytics/linker", `Invalid linker key ${h}, value ignored`)
                                }
                            else
                                E().error("amp-analytics/linker", "LINKER_PARAM value checksum not valid"),
                                d = null
                        } else
                            d = null
                    } else
                        d = null;
                    c[a] = d
                }
                return this.Ea[a] && this.Ea[a][b] ? this.Ea[a][b] : null
            }
        }
        let pc = /^(?:([^\s]*)(\([^)]*\))|[^]+)$/
          , qc = {
            1: "sufficient",
            2: "insufficient",
            3: "not_required",
            4: "unknown"
        };
        class R {
            constructor(a, b, c) {
                this.vars = a;
                this.iterations = void 0 === b ? 2 : b;
                this.noEncode = !!c;
                this.freezeVars = {}
            }
            freezeVar(a) {
                this.freezeVars[a] = !0
            }
            getVar(a) {
                a = this.vars[a];
                null == a && (a = "");
                return a
            }
        }
        function rc(a, b, c) {
            b = Number(b);
            let {length: d} = a;
            F(y(b), "Start index " + b + "in substr macro should be a number");
            c && (d = Number(c),
            F(y(d), "Length " + d + " in substr macro should be a number"));
            return a.substr(b, d)
        }
        function sc(a, b) {
            return a && a.length ? a : b
        }
        function tc(a, b, c) {
            c || (c = "");
            return a.replace(new RegExp(b,"g"), c)
        }
        function uc(a, b, c) {
            let d = 0;
            c && (d = parseInt(c, 10),
            0 != d && !d || 0 > d) && (E().error("amp-analytics/variables", "Third argument in MATCH macro must be a number >= 0"),
            d = 0);
            return (a = a.match(new RegExp(b))) && a[d] ? a[d] : ""
        }
        function vc(a, b, c, d) {
            let e = Number(a)
              , f = Number(b);
            F(!isNaN(e), "CALC macro - left operand must be a number");
            F(!isNaN(f), "CALC macro - right operand must be a number");
            let g = 0;
            switch (c) {
            case "add":
                g = e + f;
                break;
            case "subtract":
                g = e - f;
                break;
            case "multiply":
                g = e * f;
                break;
            case "divide":
                F(f, "CALC macro - cannot divide by 0");
                g = e / f;
                break;
            default:
                E().error("amp-analytics/variables", "CALC macro - Invalid operation")
            }
            return wc(d) ? Math.round(g) : g
        }
        function xc(a, b) {
            if (b)
                return (a.__AMP_EXPERIMENT_BRANCHES ? a.__AMP_EXPERIMENT_BRANCHES[b] : null) || "";
            let c = tb(a);
            return Object.keys(c).map((d=>`${d}:${c[d]}`)).join(",")
        }
        function S(a, b, c) {
            a.ea[b] = c
        }
        function yc(a, b, c) {
            return a.kd.then((d=>d.getSessionValue(b, c)))
        }
        function zc(a, b, c, d, e, f, g, h) {
            return a.expandTemplate(b, new R(c.vars,c.iterations - 1,!0), d, f, g).then((k=>e.expandStringAsync(h ? k + h : k, f || a.getMacros(d), g)))
        }
        class Ac {
            constructor(a) {
                this.o = a;
                this.ea = v({});
                this.Xc = G(this.o.win, "amp-analytics-linker-reader");
                this.kd = N(this.o, "amp-analytics-session");
                this.ea.$DEFAULT = sc;
                this.ea.$SUBSTR = rc;
                S(this, "$TRIM", (b=>b.trim()));
                S(this, "$TOLOWERCASE", (b=>b.toLowerCase()));
                S(this, "$TOUPPERCASE", (b=>b.toUpperCase()));
                S(this, "$NOT", (b=>String(!b)));
                S(this, "$BASE64", (b=>Pb(b)));
                S(this, "$HASH", this.Uc.bind(this));
                S(this, "$IF", ((b,c,d)=>wc(b) ? c : d));
                this.ea.$REPLACE = tc;
                this.ea.$MATCH = uc;
                this.ea.$CALC = vc;
                S(this, "$EQUALS", ((b,c)=>b === c));
                S(this, "LINKER_PARAM", ((b,c)=>this.Xc.get(b, c)));
                S(this, "TIMEZONE_CODE", (()=>{
                    let b = "";
                    "Intl"in this.o.win && "DateTimeFormat"in this.o.win.Intl && (b = (new this.o.win.Intl.DateTimeFormat).resolvedOptions().timeZone);
                    return b
                }
                ));
                S(this, "SCROLL_TOP", (()=>Math.round(K(this.o, "viewport").getScrollTop())));
                S(this, "SCROLL_LEFT", (()=>Math.round(K(this.o, "viewport").getScrollLeft())));
                S(this, "EXPERIMENT_BRANCHES", (b=>xc(this.o.win, b)));
                S(this, "AMPDOC_META", ((b,c="")=>{
                    var d;
                    return null !== (d = this.o.getMetaByName(b)) && void 0 !== d ? d : c
                }
                ))
            }
            getMacros(a) {
                let b = a.getAttribute("type")
                  , c = {
                    COOKIE: e=>{
                        var f = this.o.win;
                        return ec(f, a) ? Qb(f, e) : null
                    }
                    ,
                    CONSENT_STATE: Bc(a),
                    CONSENT_STRING: hc(a),
                    CONSENT_METADATA: e=>Cc(a, F(e, "CONSENT_METADATA macro must contain a key")),
                    SESSION_ID: ()=>yc(this, b, "sessionId"),
                    SESSION_TIMESTAMP: ()=>yc(this, b, "creationTimestamp"),
                    SESSION_COUNT: ()=>yc(this, b, "count"),
                    SESSION_EVENT_TIMESTAMP: ()=>yc(this, b, "eventTimestamp"),
                    SESSION_ENGAGED: ()=>yc(this, b, "engaged")
                }
                  , d = dc(a) ? {} : {
                    FIRST_CONTENTFUL_PAINT: ()=>G(this.o.win, "performance").getMetric("fcpv"),
                    FIRST_VIEWPORT_READY: ()=>G(this.o.win, "performance").getMetric("pc"),
                    MAKE_BODY_VISIBLE: ()=>G(this.o.win, "performance").getMetric("mbv"),
                    LARGEST_CONTENTFUL_PAINT: ()=>G(this.o.win, "performance").getMetric("lcpv"),
                    FIRST_INPUT_DELAY: ()=>G(this.o.win, "performance").getMetric("fid"),
                    CUMULATIVE_LAYOUT_SHIFT: ()=>G(this.o.win, "performance").getMetric("cls")
                };
                return Q(Q(Q({}, this.ea), c), d)
            }
            expandTemplate(a, b, c, d, e) {
                return oa(a, ((f,g)=>{
                    if (0 > b.iterations)
                        return E().error("amp-analytics/variables", "Maximum depth reached while expanding variables. Please ensure that the variables are not recursive."),
                        f;
                    if (!g)
                        return "";
                    let {argList: h, name: k} = Dc(g);
                    if (b.freezeVars[k])
                        return f;
                    f = b.getVar(k);
                    let l = M(c, "url-replace");
                    if ("string" == typeof f)
                        f = zc(this, f, b, c, l, d, e, h);
                    else if (x(f)) {
                        for (g = 0; g < f.length; g++)
                            f[g] = "string" == typeof f[g] ? zc(this, f[g], b, c, l, d, e) : f[g];
                        f = Promise.all(f)
                    }
                    return Promise.resolve(f).then((m=>b.noEncode ? m : Ec(m)))
                }
                ))
            }
            Uc(a) {
                return G(this.o.win, "crypto").sha384Base64(a)
            }
        }
        function Ec(a) {
            if (null == a)
                return "";
            if (x(a))
                return a.map(Ec).join(",");
            let {argList: b, name: c} = Dc(String(a));
            return encodeURIComponent(c) + b
        }
        function Dc(a) {
            if (!a)
                return {
                    name: "",
                    argList: ""
                };
            let b = a.match(pc);
            F(b, "Variable with invalid format found: " + a);
            return {
                name: b[1] || b[0],
                argList: b[2] || ""
            }
        }
        function T(a) {
            return K(a, "amp-analytics-variables")
        }
        function Bc(a) {
            return fc(a).then((b=>b ? qc[b] : null))
        }
        function Cc(a, b) {
            return ic(a).then((c=>c ? c[b] : null))
        }
        function wc(a) {
            return "false" !== a && "" !== a && "0" !== a && "null" !== a && "NaN" !== a && "undefined" !== a
        }
        function Fc(a) {
            let b = a.A.getAttribute("config");
            if (!b || a.V)
                return p();
            nb(b, a.A);
            let c = a.B()
              , d = {};
            a.A.hasAttribute("data-credentials") && (d.credentials = a.A.getAttribute("data-credentials"));
            return M(a.A, "url-replace").expandUrlAsync(b, a.K.getMacros(a.A)).then((e=>{
                b = e;
                return G(a.j, "xhr").fetchJson(b, d)
            }
            )).then((e=>e.json())).then((e=>{
                a.ta = e
            }
            ), (e=>{
                E().error(c, "Error loading remote config: ", b, e)
            }
            ))
        }
        function Gc(a) {
            let b = a.A.getAttribute("type");
            if (!b)
                return p();
            let c = Hc(b)
              , d = a.B();
            return G(a.j, "xhr").fetchJson(c, {
                ampCors: !1
            }).then((e=>e.json())).then((e=>{
                a.nb = e || {}
            }
            ), (e=>{
                E().error(d, "Error loading vendor config: ", c, e)
            }
            ))
        }
        function Hc(a) {
            var b = xa.cdn;
            var c;
            if (c = "bg" === a) {
                var d;
                c = !(null === (d = self.AMP_CONFIG) || void 0 === d || !d.canary)
            }
            let e = c ? ".canary" : "";
            return `${b}/rtv/${B().rtvVersion}/v0/analytics-vendors/${a}${e}.json`
        }
        function Ic(a, b) {
            let c = v({
                vars: {
                    requestCount: 0
                }
            });
            U(Jc(a.Nc), c);
            U(Jc(a.nb), c, !0);
            U(Jc(b), c, !0);
            return c
        }
        function Kc(a, b, c) {
            nb(c, a.A);
            let d = a.B();
            return Lc(a, b).then((()=>{
                let e = {
                    method: "POST",
                    body: b
                };
                a.A.hasAttribute("data-credentials") && (e.credentials = a.A.getAttribute("data-credentials"));
                return M(a.A, "url-replace").expandUrlAsync(c).then((f=>G(a.j, "xhr").fetchJson(f, e))).then((f=>f.json())).then((f=>{
                    a.h = Ic(a, f)
                }
                ), (f=>{
                    E().error(d, "Error rewriting configuration: ", c, f)
                }
                ))
            }
            ))
        }
        function Lc(a, b) {
            let c = b.configRewriter
              , d = c && c.varGroups
              , e = (a.nb.configRewriter || {}).varGroups;
            if (!d && !e)
                return p();
            if (d && !e)
                return a.B(),
                p();
            b.configRewriter = b.configRewriter || {};
            let f = b.configRewriter;
            f.vars = v({});
            let g = []
              , h = d || {};
            ha(h, e);
            Object.keys(h).forEach((k=>{
                let l = h[k];
                if (l.enabled) {
                    var m = a.shallowExpandObject(a.A, l).then((n=>{
                        delete n.enabled;
                        Object.assign(f.vars, n)
                    }
                    ));
                    g.push(m)
                }
            }
            ));
            return Promise.all(g).then((()=>{
                if (!Object.keys(f.vars).length)
                    return delete b.configRewriter;
                d && delete f.varGroups
            }
            ))
        }
        class Mc {
            constructor(a) {
                this.A = a;
                this.j = null;
                this.Nc = gb || {};
                this.nb = {};
                this.h = {};
                this.ta = {};
                this.V = !1;
                this.K = T(a)
            }
            loadConfig() {
                this.j = this.A.ownerDocument.defaultView;
                this.V = this.A.hasAttribute("sandbox");
                return Promise.all([Fc(this), Gc(this)]).then(this.gd.bind(this)).then(this.Ic.bind(this)).then((()=>this.h))
            }
            gd() {
                let a = (this.nb.configRewriter || {}).url
                  , b = v({});
                if (this.A.CONFIG)
                    var c = this.A.CONFIG;
                else {
                    c = {};
                    var d = this.B();
                    try {
                        let k = this.A.children;
                        if (1 == k.length) {
                            var e = this.A;
                            /^[\w-]+$/.test("script");
                            var f = e.querySelectorAll("> script".replace(/^|,/g, "$&:scope "));
                            let l = f.length;
                            if (1 !== l)
                                throw Error(`Found ${l} <script> children. Expected 1.`);
                            let m = f[0];
                            var g;
                            if ("SCRIPT" != m.tagName || "APPLICATION/JSON" != (null === (g = m.getAttribute("type")) || void 0 === g ? void 0 : g.toUpperCase()))
                                throw Error('<script> child must have type="application/json"');
                            try {
                                c = JSON.parse(m.textContent)
                            } catch (n) {
                                throw Error("Failed to parse <script> contents. Is it valid JSON?")
                            }
                        } else
                            1 < k.length && E().error(d, "The tag should contain only one <script> child.")
                    } catch (k) {
                        E().error(d, k.message)
                    }
                }
                let h = c;
                this.A.getAttribute("type") && (h.transport || this.ta.transport) && (c = this.B(),
                E().error(c, "Inline or remote config should not overwrite vendor transport settings"));
                h.transport && h.transport.iframe && (E().error("amp-analytics/config", "Inline configs are not allowed to specify transport iframe"),
                h.transport.iframe = void 0);
                this.ta.transport && this.ta.transport.iframe && (E().error("amp-analytics/config", "Remote configs are not allowed to specify transport iframe"),
                this.ta.transport.iframe = void 0);
                U(h, b);
                U(this.ta, b);
                return !a || this.V ? (this.h = Ic(this, b),
                p()) : Kc(this, b, a)
            }
            Ic() {
                this.h.warningMessage && (this.B(),
                this.A.getAttribute("type"),
                this.A.getAttribute("config"),
                delete this.h.warningMessage)
            }
            B() {
                return "AmpAnalytics " + (this.A.getAttribute("id") || "<unknown id>")
            }
            shallowExpandObject(a, b) {
                let c = {}
                  , d = []
                  , e = []
                  , f = M(a, "url-replace")
                  , g = T(a).getMacros(a);
                Object.keys(b).forEach((h=>{
                    d.push(h);
                    let k = f.expandStringAsync(b[h], g);
                    e.push(k)
                }
                ));
                return Promise.all(e).then((h=>{
                    d.forEach(((k,l)=>c[k] = h[l]));
                    return c
                }
                ))
            }
        }
        function U(a, b, c) {
            if (null === b || void 0 === b)
                b = {};
            F(c || !a || !a.optout || "_gaUserPrefs.ioo" == a.optout || "__gaOptOutExtension" == a.optoutElementId, "optout property is only available to vendor config.");
            for (let d in a)
                F(c || "iframePing" != d, "iframePing config is only available to vendor config."),
                w(a, d) && (x(a[d]) ? (x(b[d]) || (b[d] = []),
                b[d] = U(a[d], b[d], c)) : u(a[d]) ? (u(b[d]) || (b[d] = {}),
                b[d] = U(a[d], b[d], c)) : b[d] = a[d]);
            return b
        }
        function Jc(a) {
            if (!a.requests)
                return a;
            for (let d in a.requests)
                if (w(a.requests, d)) {
                    var b = a.requests;
                    var c = a.requests[d];
                    c = u(c) ? c : {
                        baseUrl: c
                    };
                    b[d] = c
                }
            if (w(a, "requests") && w(a, "requestOrigin")) {
                b = a.requestOrigin;
                for (let d in a.requests)
                    w(a.requests[d], "origin") || (a.requests[d].origin = b)
            }
            return a
        }
        class V {
            constructor() {
                this.P = null
            }
            add(a) {
                this.P || (this.P = []);
                this.P.push(a);
                return ()=>{
                    this.remove(a)
                }
            }
            remove(a) {
                if (this.P) {
                    var b = this.P;
                    a = b.indexOf(a);
                    -1 != a && b.splice(a, 1)
                }
            }
            removeAll() {
                this.P && (this.P.length = 0)
            }
            fire(a) {
                if (this.P)
                    for (let b of this.P)
                        b(a)
            }
            getHandlerCount() {
                var a, b;
                return null !== (a = null === (b = this.P) || void 0 === b ? void 0 : b.length) && void 0 !== a ? a : 0
            }
        }
        let Nc = "video-ended video-pause video-play video-session video-session-visible video-seconds-played video-hosted-custom video-percentage-played video-ad-start video-ad-end".split(" ")
          , Oc = /^vars(.+)/;
        function Pc() {}
        let W = ["ampdoc", "embed"]
          , X = Object.freeze({
            ["click"]: {
                name: "click",
                allowedFor: W.concat(["timer"]),
                klass: function(a) {
                    return new Qc(a)
                }
            },
            ["browser-event"]: {
                name: "browser-event",
                allowedFor: W.concat(["timer"]),
                klass: function(a) {
                    return new Rc(a)
                }
            },
            ["custom"]: {
                name: "custom",
                allowedFor: W.concat(["timer"]),
                klass: function(a) {
                    return new Sc(a)
                }
            },
            ["hidden"]: {
                name: "visible",
                allowedFor: W.concat(["timer"]),
                klass: function(a) {
                    return new Tc(a)
                }
            },
            ["ini-load"]: {
                name: "ini-load",
                allowedFor: W.concat(["timer", "visible"]),
                klass: function(a) {
                    return new Uc(a)
                }
            },
            ["render-start"]: {
                name: "render-start",
                allowedFor: W.concat(["timer", "visible"]),
                klass: function(a) {
                    return new Vc(a)
                }
            },
            ["scroll"]: {
                name: "scroll",
                allowedFor: W.concat(["timer"]),
                klass: function(a) {
                    return new Wc(a)
                }
            },
            ["story"]: {
                name: "story",
                allowedFor: W,
                klass: function(a) {
                    return new Xc(a)
                }
            },
            ["timer"]: {
                name: "timer",
                allowedFor: W,
                klass: function(a) {
                    return new Yc(a)
                }
            },
            ["video"]: {
                name: "video",
                allowedFor: W.concat(["timer"]),
                klass: function(a) {
                    return new Zc(a)
                }
            },
            ["visible"]: {
                name: "visible",
                allowedFor: W.concat(["timer"]),
                klass: function(a) {
                    return new Tc(a)
                }
            }
        });
        function $c(a) {
            F(!x(a) || new Set(a).size === a.length, "Cannot have duplicate selectors in selectors list: %s", a)
        }
        function ad(a) {
            return a.startsWith("video") ? "video" : "blur" === a || "change" === a ? "browser-event" : a.startsWith("story") ? "story" : "click" === a || "browser-event" === a || "custom" === a || "hidden" === a || "ini-load" === a || "render-start" === a || "scroll" === a || "story" === a || "timer" === a || "video" === a || "visible" === a ? w(X, a) ? X[a].name : a : "custom"
        }
        function bd(a) {
            let b = {};
            Object.keys(X).forEach((c=>{
                w(X, c) && -1 != X[c].allowedFor.indexOf(a) && (b[c] = X[c].klass)
            }
            ));
            return b
        }
        class Y {
            constructor(a, b, c={}, d=!0) {
                this.target = a;
                this.type = b;
                d && (a = ua(a, Oc),
                ha(a, c, 0),
                c = a);
                this.vars = c
            }
        }
        class Z {
            constructor(a) {
                this.root = a
            }
            dispose() {}
            add() {}
        }
        class Rc extends Z {
            constructor(a) {
                super(a);
                this.G = new V;
                this.Db = v({});
                this.oa = this.G.fire.bind(this.G);
                this.Zb = Fa(this.root.ampdoc.win, this.oa)
            }
            dispose() {
                let a = this.root.getRoot();
                Object.keys(this.Db).forEach((b=>{
                    a.removeEventListener(b, this.Zb)
                }
                ));
                this.G = this.oa = null
            }
            add(a, b, c, d) {
                F(sb(this.root.ampdoc.win), 'expected global "analytics-browser-events" experiment to be enabled');
                let {on: e, selectionMethod: f=null, selector: g} = c;
                F(null === g || void 0 === g ? void 0 : g.length, "Missing required selector on browser event trigger");
                $c(g);
                let h = this.root.getElements(a, g, f, !1);
                this.Db[e] || (this.root.getRootElement().addEventListener(e, this.Zb, !0),
                this.Db[e] = !0);
                return this.G.add((k=>{
                    k.type === e && h.then((l=>{
                        l.forEach((m=>{
                            m.contains(k.target) && d(new Y(m,e,{}))
                        }
                        ))
                    }
                    ))
                }
                ))
            }
        }
        class Sc extends Z {
            constructor(a) {
                super(a);
                this.G = {};
                this.H = {};
                this.ia = {};
                setTimeout((()=>{
                    this.H = void 0
                }
                ), 1e4)
            }
            dispose() {
                this.ia = this.H = void 0;
                for (let a in this.G)
                    this.G[a].removeAll()
            }
            add(a, b, c, d) {
                let e = c.selector;
                e || (e = ":root");
                let f = this.root.getElement(a, e, c.selectionMethod || null)
                  , g = b.startsWith("sandbox-")
                  , h = g ? this.ia && this.ia[b] : this.H && this.H[b];
                if (h) {
                    let l = h.length;
                    f.then((m=>{
                        setTimeout((()=>{
                            for (let n = 0; n < l; n++) {
                                let r = h[n];
                                m.contains(r.target) && d(r)
                            }
                            g && (this.ia[b] = void 0)
                        }
                        ), 1)
                    }
                    ))
                }
                let k = this.G[b];
                k || (k = new V,
                this.G[b] = k);
                return this.G[b].add((l=>{
                    f.then((m=>{
                        m.contains(l.target) && d(l)
                    }
                    ))
                }
                ))
            }
            trigger(a) {
                let b = a.type
                  , c = b.startsWith("sandbox-")
                  , d = this.G[b];
                if (d && (d.fire(a),
                c))
                    return;
                c ? (this.ia[b] = this.ia[b] || [],
                this.ia[b].push(a)) : this.H && (this.H[b] = this.H[b] || [],
                this.H[b].push(a))
            }
        }
        function cd(a, b, c, d) {
            let e = a.type;
            a = a.vars;
            let f = c.storySpec || {}
              , g = void 0 === f.repeat ? !0 : f.repeat
              , h = a.eventDetails;
            (c = c.tagName) && h.tagName && c.toLowerCase() !== h.tagName || !1 === g && h.repeated || d(new Y(b,e,a))
        }
        class Xc extends Sc {
            constructor(a) {
                super(a)
            }
            add(a, b, c, d) {
                let e = this.root.getRootElement();
                if (a = this.H && this.H[b]) {
                    let f = a.length;
                    for (let g = 0; g < f; g++)
                        cd(a[g], e, c, d)
                }
                a = this.G[b];
                a || (a = new V,
                this.G[b] = a);
                return this.G[b].add((f=>{
                    cd(f, e, c, d)
                }
                ))
            }
            trigger(a) {
                let b = a.type
                  , c = this.G[b];
                c && c.fire(a);
                this.H && (this.H[b] = this.H[b] || [],
                this.H[b].push(a))
            }
        }
        class Qc extends Z {
            constructor(a) {
                super(a);
                this.Oa = new V;
                this.Ub = this.Oa.fire.bind(this.Oa);
                this.root.getRoot().addEventListener("click", this.Ub)
            }
            dispose() {
                this.root.getRoot().removeEventListener("click", this.Ub);
                this.Oa.removeAll()
            }
            add(a, b, c, d) {
                b = F(c.selector, "Missing required selector on click trigger");
                c = c.selectionMethod || null;
                return this.Oa.add(this.root.createSelectiveListener(this.Qc.bind(this, d), a.parentElement || a, b, c))
            }
            Qc(a, b) {
                a(new Y(b,"click"))
            }
        }
        function dd(a) {
            let b = v({});
            if (!a || !Array.isArray(a))
                return b;
            for (let c = 0; c < a.length; c++) {
                let d = a[c];
                if ("number" !== typeof d || !isFinite(d)) {
                    E().error("amp-analytics/events", "Scroll trigger boundaries must be finite.");
                    break
                }
                d = Math.min(5 * Math.round(d / 5), 100);
                b[d] = !1
            }
            return b
        }
        function ed(a, b, c, d, e) {
            if (c)
                for (let g in b)
                    if (w(b, g)) {
                        var f = parseInt(g, 10);
                        f > c || b[f] || (b[f] = !0,
                        f = {},
                        f[d] = g,
                        e(new Y(a.J.getRootElement(),"scroll",f,!1)))
                    }
        }
        class Wc extends Z {
            constructor(a) {
                super(a);
                this.J = a;
                this.ya = null
            }
            dispose() {
                null !== this.ya && (this.J.getScrollManager().removeScrollHandler(this.ya),
                this.ya = null)
            }
            add(a, b, c, d) {
                if (!c.scrollSpec)
                    return E().error("amp-analytics/events", "Missing scrollSpec on scroll trigger."),
                    Pc;
                if (!Array.isArray(c.scrollSpec.verticalBoundaries) && !Array.isArray(c.scrollSpec.horizontalBoundaries))
                    return E().error("amp-analytics/events", "Boundaries are required for the scroll trigger to work."),
                    Pc;
                let e = dd(c.scrollSpec.verticalBoundaries)
                  , f = dd(c.scrollSpec.horizontalBoundaries);
                this.ya = this.jd.bind(this, f, e, !!c.scrollSpec.useInitialPageSize, d);
                return this.J.getScrollManager().addScrollHandler(this.ya)
            }
            jd(a, b, c, d, e) {
                let {scrollHeight: f, scrollWidth: g} = c ? e.initialSize : e;
                ed(this, b, 100 * (e.top + e.height) / f, "verticalScrollBoundary", d);
                ed(this, a, 100 * (e.left + e.width) / g, "horizontalScrollBoundary", d)
            }
        }
        class Vc extends Z {
            constructor(a) {
                super(a)
            }
            dispose() {}
            add(a, b, c, d) {
                let e, f;
                let g = c.selector || ":root";
                ":root" == g || ":host" == g ? (e = this.root.getRootElement(),
                f = this.getRootSignal(b)) : f = this.root.getAmpElement(a.parentElement || a, g, c.selectionMethod).then((h=>{
                    e = h;
                    return this.getElementSignal(b, e)
                }
                ));
                f.then((()=>{
                    d(new Y(e,b))
                }
                ));
                return Pc
            }
            getRootSignal(a) {
                return this.root.signals().whenSignal(a)
            }
            getElementSignal(a, b) {
                return "function" != typeof b.signals ? p() : b.signals().whenSignal(a)
            }
        }
        class Uc extends Z {
            constructor(a) {
                super(a)
            }
            dispose() {}
            add(a, b, c, d) {
                let e;
                let f = c.selector || ":root";
                ":root" == f || ":host" == f ? (e = this.root.getRootElement(),
                a = this.getRootSignal()) : a = this.root.getAmpElement(a.parentElement || a, f, c.selectionMethod).then((g=>{
                    e = g;
                    return this.getElementSignal("ini-load", e)
                }
                ));
                a.then((()=>{
                    d(new Y(e,b))
                }
                ));
                return Pc
            }
            getRootSignal() {
                return this.root.whenIniLoaded()
            }
            getElementSignal(a, b) {
                if ("function" != typeof b.signals)
                    return p();
                let c = b.signals();
                return Promise.race([c.whenSignal("ini-load"), c.whenSignal("load-end")])
            }
        }
        class fd {
            constructor(a, b, c) {
                this.Za = void 0;
                F("interval"in a, "Timer interval specification required");
                this.jc = Number(a.interval) || 0;
                F(.5 <= this.jc, "Bad timer interval specification");
                this.mc = "maxTimerLength"in a ? Number(a.maxTimerLength) : 7200;
                F(0 < this.mc, "Bad maxTimerLength specification");
                this.Yc = "maxTimerLength"in a;
                this.Hc = "immediate"in a ? !!a.immediate : !0;
                this.ja = this.$ = this.yb = null;
                this.Ka = b || null;
                this.kb = c || null;
                this.ab = this.X = void 0
            }
            init(a) {
                this.Ka ? this.Ka && (this.$ = this.Ka()) : a()
            }
            dispose() {
                this.ja && (this.ja(),
                this.ja = null);
                this.$ && (this.$(),
                this.$ = null)
            }
            isRunning() {
                return !!this.Za
            }
            startIntervalInWindow(a, b, c) {
                if (!this.isRunning() && (this.X = Date.now(),
                this.ab = void 0,
                this.yb = b,
                this.Za = a.setInterval((()=>{
                    b()
                }
                ), 1e3 * this.jc),
                (!this.kb || this.kb && this.Yc) && a.setTimeout((()=>{
                    c()
                }
                ), 1e3 * this.mc),
                this.$ && (this.$(),
                this.$ = null),
                this.Hc && b(),
                this.kb))
                    try {
                        this.ja = this.kb()
                    } catch (d) {
                        throw this.dispose(),
                        d
                    }
            }
            lb(a) {
                this.isRunning() && (this.yb(),
                this.yb = null,
                a.clearInterval(this.Za),
                this.ab = this.Za = void 0,
                this.ja && (this.ja(),
                this.ja = null),
                this.Ka && (this.$ = this.Ka()))
            }
            getTimerVars() {
                let a = 0;
                this.isRunning() && (a = this.X ? Date.now() - (this.ab || this.X) : 0,
                this.ab = Date.now());
                return v({
                    timerDuration: a,
                    timerStart: this.X || 0
                })
            }
        }
        function gd(a, b) {
            b = E().assertString(b.on);
            let c = ad(b);
            return a.root.getTrackerForAllowlist(c, bd("timer"))
        }
        class Yc extends Z {
            constructor(a) {
                super(a);
                this.D = {};
                this.od = 1
            }
            getTrackedTimerKeys() {
                return Object.keys(this.D)
            }
            dispose() {
                this.getTrackedTimerKeys().forEach((a=>{
                    this.Gb(a)
                }
                ))
            }
            add(a, b, c, d) {
                c = c.timerSpec;
                F(c && "object" == typeof c, "Bad timer specification");
                let e = "startSpec"in c ? c.startSpec : null;
                F(!e || "object" == typeof e, "Bad timer start specification");
                let f = "stopSpec"in c ? c.stopSpec : null;
                F(!e && !f || "object" == typeof f, "Bad timer stop specification");
                let g = ++this.od;
                let h, k;
                if (e) {
                    let m = gd(this, e);
                    F(m, "Cannot track timer start");
                    h = m.add.bind(m, a, e.on, e, this.cc.bind(this, g, b, d))
                }
                if (f) {
                    let m = gd(this, f);
                    F(m, "Cannot track timer stop");
                    k = m.add.bind(m, a, f.on, f, this.cc.bind(this, g, b, d))
                }
                let l = new fd(c,h,k);
                this.D[g] = l;
                l.init(this.wc.bind(this, g, b, d));
                return ()=>{
                    this.Gb(g)
                }
            }
            cc(a, b, c) {
                let d = this.D[a];
                d && (d.isRunning() ? this.lb(a) : this.wc(a, b, c))
            }
            wc(a, b, c) {
                this.D[a].startIntervalInWindow(this.root.ampdoc.win, (()=>{
                    var d = new Y(this.root.getRootElement(),b,this.D[a].getTimerVars(),!1);
                    c(d)
                }
                ), this.Gb.bind(this, a))
            }
            lb(a) {
                this.D[a].lb(this.root.ampdoc.win)
            }
            Gb(a) {
                this.D[a] && (this.lb(a),
                this.D[a].dispose(),
                delete this.D[a])
            }
        }
        class Zc extends Z {
            constructor(a) {
                super(a);
                this.jb = new V;
                this.oa = this.jb.fire.bind(this.jb);
                Nc.forEach((b=>{
                    this.root.getRoot().addEventListener(b, this.oa)
                }
                ))
            }
            dispose() {
                let a = this.root.getRoot();
                Nc.forEach((b=>{
                    a.removeEventListener(b, this.oa)
                }
                ));
                this.jb = this.oa = null
            }
            add(a, b, c, d) {
                let e = c.videoSpec || {};
                b = F(c.selector || e.selector, "Missing required selector on video trigger");
                F(b.length, "Missing required selector on video trigger");
                $c(b);
                let f = this.root.getElements(a, b, c.selectionMethod || null, !1)
                  , g = e["end-session-when-invisible"]
                  , h = e["exclude-autoplay"]
                  , k = e.interval
                  , l = e.percentages
                  , m = c.on;
                let n = 0
                  , r = 0;
                return this.jb.add((t=>{
                    let A = t.type
                      , C = t.data
                      , H = "video-session-visible" == A ? "video-session" : "video-hosted-custom" == A ? C["__amp:eventType"] : A;
                    if (H === m)
                        if ("video-seconds-played" !== H || k) {
                            if ("video-seconds-played" === H && (n++,
                            0 !== n % k))
                                return;
                            if ("video-percentage-played" === H) {
                                if (!l) {
                                    E().error("amp-analytics/events", "video-percentage-played requires percentages spec.");
                                    return
                                }
                                for (let aa = 0; aa < l.length; aa++) {
                                    let ja = l[aa];
                                    if (0 >= ja || 0 != ja % 5) {
                                        E().error("amp-analytics/events", "Percentages must be set in increments of %s with non-zero values", 5);
                                        return
                                    }
                                }
                                let ba = parseInt(C.normalizedPercentage, 10);
                                y(ba);
                                if (r == ba && 1 < l.length || 0 > l.indexOf(ba))
                                    return;
                                r = ba
                            }
                            if ("video-session-visible" !== A || g)
                                if (!h || "playing_auto" !== C.state) {
                                    var Wd = t.target;
                                    f.then((ba=>{
                                        ba.forEach((aa=>{
                                            if (aa.contains(Wd)) {
                                                if (C) {
                                                    var ja = Q({}, C);
                                                    delete ja["__amp:eventType"];
                                                    var gc = ja
                                                } else
                                                    gc = {};
                                                d(new Y(aa,H,gc))
                                            }
                                        }
                                        ))
                                    }
                                    ))
                                }
                        } else
                            E().error("amp-analytics/events", "video-seconds-played requires interval spec with non-zero value")
                }
                ))
            }
        }
        class Tc extends Z {
            constructor(a) {
                super(a);
                this.Ac = {}
            }
            dispose() {}
            add(a, b, c, d) {
                let e = c.visibilitySpec || {}
                  , f = c.selector || e.selector
                  , g = e.waitFor;
                let h = e.reportWhen
                  , k = null;
                h && F(!e.repeat, "reportWhen and repeat are mutually exclusive.");
                "hidden" === b && (h && E().error("amp-analytics/events", 'ReportWhen should not be defined when eventType is "hidden"'),
                h = "documentHidden");
                let l = this.root.getVisibilityManager();
                "documentHidden" == h ? k = this.Kc.bind(this) : "documentExit" == h ? k = this.Jc.bind(this) : F(!h, 'reportWhen value "%s" not supported.', h);
                if (!f || ":root" == f || ":host" == f)
                    return l.listenRoot(e, this.getReadyPromise(g || (f ? "ini-load" : "none")), k, this.nc.bind(this, b, d, this.root.getRootElement()));
                c = c.selectionMethod || e.selectionMethod;
                $c(f);
                let m = this.root.getElements(a.parentElement || a, f, c).then((n=>{
                    let r = [];
                    for (let t = 0; t < n.length; t++)
                        r.push(l.listenElement(n[t], e, this.getReadyPromise(g, n[t]), k, this.nc.bind(this, b, d, n[t])));
                    return r
                }
                ));
                return function() {
                    m.then((n=>{
                        for (let r = 0; r < n.length; r++)
                            n[r]()
                    }
                    ))
                }
            }
            Kc() {
                let a = this.root.ampdoc;
                return a.isVisible() ? new Promise((b=>{
                    a.onVisibilityChanged((()=>{
                        a.isVisible() || b()
                    }
                    ))
                }
                )) : p()
            }
            Jc() {
                let a = new q
                  , b = this.root.ampdoc.win;
                let c, d;
                "onpagehide"in this.root.ampdoc.win || b.addEventListener("unload", c = ()=>{
                    b.removeEventListener("unload", c);
                    a.resolve()
                }
                );
                b.addEventListener("pagehide", d = ()=>{
                    b.removeEventListener("pagehide", d);
                    a.resolve()
                }
                );
                return a.promise
            }
            getReadyPromise(a, b) {
                if (b) {
                    let e = b.tagName;
                    e.startsWith("AMP-") && "AMP-STICKY-AD-TOP-PADDING" != e && "AMP-BODY" != e ? a = a || "ini-load" : F(!a || "none" == a, "waitFor for non-AMP elements must be none or null. Found %s", a)
                }
                if (!a || "none" == a)
                    return null;
                let c = bd("visible");
                F(void 0 !== c[a], "waitFor value %s not supported", a);
                let d = this.Ac[a] || this.root.getTrackerForAllowlist(a, c);
                if (d)
                    this.Ac[a] = d;
                else
                    return null;
                return b ? d.getElementSignal(a, b) : d.getRootSignal(a)
            }
            nc(a, b, c, d) {
                let e = ua(c, Oc);
                for (let f in e)
                    d[f] = e[f];
                b(new Y(c,a,d,!1))
            }
        }
        class hd {
            constructor() {
                this.ha = []
            }
            peek() {
                let a = this.length;
                return a ? this.ha[a - 1].item : null
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
                    if (this.ha[c].priority < b)
                        d = c + 1;
                    else if (0 < c && this.ha[c - 1].priority >= b)
                        e = c - 1;
                    else
                        break
                }
                this.ha.splice(c, 0, {
                    item: a,
                    priority: b
                })
            }
            forEach(a) {
                let b = this.length;
                for (; b--; )
                    a(this.ha[b].item)
            }
            dequeue() {
                return this.length ? this.ha.pop().item : null
            }
            get length() {
                return this.ha.length
            }
        }
        let id = !1;
        let jd = /nochunking=1/.test(self.location.hash);
        let kd = p();
        function ld(a, b, c) {
            if (jd)
                kd.then(b);
            else {
                var d = md;
                let e = L(a)
                  , f = Ha(e);
                Oa(f, e, "chunk", d);
                K(a, "chunk").run(b, c)
            }
        }
        function nd(a, b) {
            if ("run" != a.state) {
                a.state = "run";
                try {
                    a.vb(b)
                } catch (c) {
                    throw a.oc(),
                    c
                }
            }
        }
        class od {
            constructor(a) {
                this.state = "not_run";
                this.vb = a
            }
            B() {
                return this.vb.displayName || this.vb.name
            }
            oc() {}
            ec() {
                return !1
            }
            zc() {
                return !1
            }
        }
        class pd extends od {
            constructor(a, b) {
                super(a);
                this.Vb = b
            }
            oc() {
                var a = self.document;
                if (!id) {
                    id = !0;
                    a = a.body;
                    var b = {
                        opacity: 1,
                        visibility: "visible",
                        animation: "none"
                    };
                    for (let e in b) {
                        var c = a
                          , d = b[e];
                        let f = xb(c.style, e, void 0);
                        f && (f.startsWith("--") ? c.style.setProperty(f, d) : c.style[f] = d)
                    }
                }
            }
            ec() {
                return this.qa()
            }
            zc() {
                return this.Vb.Xb
            }
            qa() {
                return this.Vb.ampdoc.isVisible()
            }
        }
        function qd(a) {
            if (!a.ib) {
                var b = rd(a);
                b && (b.ec() ? (a.ib = !0,
                sd(a)) : b.zc() && a.j.requestIdleCallback ? td(a.j, a.Sb) : ud(a))
            }
        }
        function rd(a, b) {
            let c = a.va.peek();
            for (; c && "not_run" !== c.state; )
                a.va.dequeue(),
                c = a.va.peek();
            c && b && a.va.dequeue();
            return c
        }
        function ud(a) {
            a.j.postMessage("amp-macro-task", "*")
        }
        function sd(a) {
            a.Cc && (a.nd ? a.j.navigator.scheduling.isInputPending() : 5 < a.Aa) ? (a.Aa = 0,
            ud(a)) : kd.then((()=>{
                a.Sb(null)
            }
            ))
        }
        class md {
            constructor(a) {
                this.ampdoc = a;
                this.j = a.win;
                this.va = new hd;
                this.Sb = this.$b.bind(this);
                this.Aa = 0;
                this.nd = !(!this.j.navigator.scheduling || !this.j.navigator.scheduling.isInputPending);
                this.ib = !1;
                this.Cc = this.j.document.documentElement.hasAttribute("i-amphtml-no-boilerplate");
                this.j.addEventListener("message", (b=>{
                    "amp-macro-task" == b.data && this.$b(null)
                }
                ));
                this.Xb = !1;
                N(a, "viewer").then((()=>{
                    this.Xb = !0
                }
                ));
                a.onVisibilityChanged((()=>{
                    a.isVisible() && qd(this)
                }
                ))
            }
            run(a, b) {
                a = new od(a);
                this.va.enqueue(a, b);
                qd(this)
            }
            runForStartup(a) {
                a = new pd(a,this);
                this.va.enqueue(a, Number.POSITIVE_INFINITY);
                qd(this)
            }
            $b(a) {
                let b = rd(this, !0);
                if (!b)
                    return this.ib = !1,
                    this.Aa = 0,
                    !1;
                let c;
                try {
                    c = Date.now(),
                    nd(b, a)
                } finally {
                    kd.then().then().then().then().then().then().then().then().then((()=>{
                        this.ib = !1;
                        this.Aa += Date.now() - c;
                        qd(this)
                    }
                    ))
                }
                return !0
            }
        }
        function td(a, b) {
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
        let vd = {
            referrerDomains: !0,
            enabled: !0,
            cookiePath: !0,
            cookieMaxAge: !0,
            cookieSecure: !0,
            cookieDomain: !0,
            sameSite: !0,
            SameSite: !0,
            secure: !0
        };
        function wd(a, b, c, d, e) {
            return a.mb.expandStringAsync(c, a.Bc).then((f=>{
                if (f) {
                    let g = Date.now() + d;
                    Rb(a.j, b, f, g, {
                        highestAvailableDomain: !0,
                        sameSite: e,
                        secure: "None" === e
                    })
                }
            }
            )).catch((f=>{
                E().error("amp-analytics/cookie-writer", "Error expanding cookie string", f)
            }
            ))
        }
        class xd {
            constructor(a, b, c) {
                this.j = a;
                this.A = b;
                this.mb = M(b, "url-replace");
                this.ob = null;
                this.h = c;
                this.Bc = T(b).getMacros(b)
            }
            write() {
                this.ob || (this.ob = new q,
                ld(this.A, (()=>{
                    this.ob.resolve(this.xb())
                }
                ), 10));
                return this.ob.promise
            }
            xb() {
                if (!ec(this.j, this.A) || !w(this.h, "cookies"))
                    return p();
                if (!u(this.h.cookies))
                    return E().error("amp-analytics/cookie-writer", "cookies config must be an object"),
                    p();
                let a = this.h.cookies;
                if (!1 === a.enabled)
                    return p();
                var b;
                w(a, "cookieMaxAge") ? (b = Number(a.cookieMaxAge)) || 0 === b ? b *= 1e3 : (E().error("amp-analytics/cookie-writer", "invalid cookieMaxAge %s, falling back to default value (1 year)", a.cookieMaxAge),
                b = 31536e6) : b = 31536e6;
                let c = b;
                b = Object.keys(a);
                let d = [];
                for (let g = 0; g < b.length; g++) {
                    let h = b[g]
                      , k = a[h];
                    a: {
                        switch (k.sameSite || k.SameSite || a.sameSite || a.SameSite) {
                        case "Strict":
                            var e = "Strict";
                            break a;
                        case "Lax":
                            e = "Lax";
                            break a;
                        case "None":
                            e = "None";
                            break a
                        }
                        e = void 0
                    }
                    var f = k;
                    vd[h] ? f = !1 : u(f) ? w(f, "value") ? f = !0 : (E().error("amp-analytics/cookie-writer", "value is required in the cookieValue object"),
                    f = !1) : (E().error("amp-analytics/cookie-writer", "cookieValue must be configured in an object"),
                    f = !1);
                    f && d.push(wd(this, h, k.value, c, e))
                }
                return Promise.all(d)
            }
        }
        function yd(a) {
            let b = a.$c.measureElement((()=>a.T.getLayoutRect(a.J)));
            a.Ya = a.Ya || b;
            return b
        }
        class zd {
            constructor(a) {
                this.T = K(a.ampdoc, "viewport");
                this.$c = K(a.ampdoc, "mutator");
                this.ma = null;
                this.ua = new V;
                this.J = a.getRootElement();
                this.Ya = null
            }
            dispose() {
                this.ua.removeAll();
                this.ma && (this.ma(),
                this.ma = null)
            }
            removeScrollHandler(a) {
                this.ua.remove(a);
                0 >= this.ua.getHandlerCount() && this.ma && (this.ma(),
                this.ma = null)
            }
            addScrollHandler(a) {
                let b = this.T.getSize();
                (this.Ya || yd(this)).then((c=>{
                    let d = c.height
                      , e = c.left
                      , f = c.top
                      , g = c.width
                      , h = {
                        top: this.T.getScrollTop() - f,
                        left: this.T.getScrollLeft() - e,
                        width: b.width,
                        height: b.height,
                        scrollHeight: d,
                        scrollWidth: g,
                        initialSize: {
                            scrollHeight: d,
                            scrollWidth: g
                        }
                    };
                    a(h)
                }
                ));
                0 === this.ua.getHandlerCount() && (this.ma = this.T.onChanged(this.cd.bind(this)));
                return this.ua.add(a)
            }
            cd(a) {
                return Promise.all([this.Ya || yd(this), yd(this)]).then((b=>{
                    let {height: c, width: d} = b[0]
                      , {height: e, left: f, top: g, width: h} = b[1];
                    this.ua.fire({
                        top: a.top - g,
                        left: a.left - f,
                        width: a.width,
                        height: a.height,
                        scrollWidth: h,
                        scrollHeight: e,
                        initialSize: {
                            scrollHeight: c,
                            scrollWidth: d
                        }
                    })
                }
                ))
            }
        }
        function Ad(a, b, c, d) {
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
        function Bd(a, b, c) {
            c = {
                top: c,
                bottom: c + b.getHeight(),
                left: 0,
                right: b.getWidth()
            };
            c = Ad(Number(c.left), Number(c.top), Number(c.width), Number(c.height));
            return a.top <= c.bottom && c.top <= a.bottom && a.left <= c.right && c.left <= a.right ? "inside" : a.top < c.top ? "top" : a.bottom > c.bottom ? "bottom" : "inside"
        }
        function Cd(a, b) {
            if (a.Ob)
                Dd(a, b) || a.fb();
            else if (a.pa)
                if (Ed(a, b) || a.Vc) {
                    if (a.M && (clearTimeout(a.M),
                    a.M = null),
                    a.Hb)
                        a.pa(),
                        a.pa = null,
                        a.rc && (a.Ob = !0,
                        a.U = 0);
                    else if (a.Pa) {
                        let c = a.Pa();
                        a.Pa = null;
                        c.then((()=>{
                            a.Hb = !0;
                            a.update()
                        }
                        ))
                    }
                } else if (a.ra && !a.M) {
                    let c = Fd(a);
                    0 < c && (a.M = setTimeout((()=>{
                        a.M = null;
                        a.update()
                    }
                    ), c))
                } else
                    !a.ra && a.M && (clearTimeout(a.M),
                    a.M = null)
        }
        function Dd(a, b) {
            return 1 == a.O.visiblePercentageMin ? 1 == b : 0 == a.O.visiblePercentageMax ? 0 == b : b > a.O.visiblePercentageMin && b <= a.O.visiblePercentageMax
        }
        function Ed(a, b) {
            let c = Date.now();
            0 < b && (a.Sa = a.Sa || c,
            a.Bb = c,
            !a.Eb && 300 > c - a.Lc && (a.Eb = b));
            let d = a.ra
              , e = a.Ca ? c - a.Ca : 0;
            a.ra = Dd(a, b);
            a.ra ? (a.ub = !0,
            d ? (a.S += e,
            a.U += e,
            a.W = Math.max(a.W, a.U)) : a.Ta = a.Ta || c,
            a.Ca = c,
            a.Fa = 0 < a.Fa ? Math.min(a.Fa, b) : b,
            a.cb = Math.max(a.cb, b),
            a.bb = c) : d && (a.W = Math.max(a.W, a.U + e),
            a.Ca = 0,
            a.S += e,
            a.U = 0,
            a.bb = c);
            return a.ub && a.S >= a.O.totalTimeMin && a.S <= a.O.totalTimeMax && a.W >= a.O.continuousTimeMin && a.W <= a.O.continuousTimeMax
        }
        function Fd(a) {
            let b = Math.max(a.O.continuousTimeMin - a.U, 0)
              , c = Math.max(a.O.totalTimeMin - a.S, 0);
            return Math.min(Math.max(b, c), b || 1 / 0, c || 1 / 0)
        }
        class Gd {
            constructor(a, b) {
                this.Gc = b;
                this.O = v({
                    visiblePercentageMin: Number(a.visiblePercentageMin) / 100 || 0,
                    visiblePercentageMax: Number(a.visiblePercentageMax) / 100 || 1,
                    totalTimeMin: Number(a.totalTimeMin) || 0,
                    totalTimeMax: Number(a.totalTimeMax) || 1 / 0,
                    continuousTimeMin: Number(a.continuousTimeMin) || 0,
                    continuousTimeMax: Number(a.continuousTimeMax) || 1 / 0
                });
                "0" === String(a.visiblePercentageMax).trim() && (this.O.visiblePercentageMax = 0);
                this.Vc = void 0 !== a.reportWhen;
                this.rc = !0 === a.repeat;
                this.ga = new V;
                let c = new q;
                this.Qa = c.promise;
                this.pa = c.resolve;
                this.Qa.then((()=>{
                    this.ga.fire()
                }
                ));
                this.ka = [];
                this.Lc = Date.now();
                this.Hb = this.pc = !0;
                this.M = this.Pa = null;
                this.ub = this.ra = !1;
                this.hc = this.Ca = this.cb = this.Fa = this.Eb = this.bb = this.Ta = this.Bb = this.Sa = this.S = this.W = this.U = 0;
                this.Ob = this.fc = !1;
                this.hb = null
            }
            fb() {
                let a = new q;
                this.Qa = a.promise;
                this.pa = a.resolve;
                this.Qa.then((()=>{
                    this.ga.fire()
                }
                ));
                this.hb = null;
                this.ra = this.ub = !1;
                this.Ca = this.cb = this.Fa = this.bb = this.Bb = this.Sa = this.Ta = this.S = this.W = this.U = 0;
                this.Ob = !1
            }
            maybeDispose() {
                this.rc || this.dispose()
            }
            dispose() {
                this.M && (clearTimeout(this.M),
                this.M = null);
                this.hb && (clearTimeout(this.hb),
                this.hb = null);
                this.ka.forEach((a=>{
                    a()
                }
                ));
                this.ka.length = 0;
                this.pa = null;
                this.ga && (this.ga.removeAll(),
                this.ga = null)
            }
            unsubscribe(a) {
                this.ka.push(a)
            }
            onTriggerEvent(a) {
                this.ga && this.ga.add(a);
                this.Qa && !this.pa && a()
            }
            setReady(a) {
                this.pc = a;
                this.update()
            }
            setReportReady(a) {
                this.Hb = !1;
                this.Pa = a
            }
            update() {
                Cd(this, this.pc ? this.Gc() : 0)
            }
            getState(a) {
                return v({
                    firstSeenTime: Hd(this.Sa, a),
                    lastSeenTime: Hd(this.Bb, a),
                    lastVisibleTime: Hd(this.bb, a),
                    firstVisibleTime: Hd(this.Ta, a),
                    maxContinuousVisibleTime: this.W,
                    totalVisibleTime: this.S,
                    loadTimeVisibility: 100 * this.Eb || 0,
                    minVisiblePercentage: 100 * this.Fa,
                    maxVisiblePercentage: 100 * this.cb
                })
            }
            maybeSetInitialScrollDepth(a) {
                this.fc || (this.hc = a,
                this.fc = !0)
            }
            getInitialScrollDepth() {
                return this.hc
            }
        }
        function Hd(a, b) {
            return a >= b ? a - b : 0
        }
        function Id(a) {
            var b = a.parentElement;
            var c = [];
            if (b) {
                var d = b;
                c.push(d);
                for (let g = 0; 50 > g; g++)
                    if ((b = d.parentNode || d.parentElement) && 1 == b.nodeType)
                        d = b,
                        c.push(d);
                    else if (b && 9 == b.nodeType)
                        if ((b = d.ownerDocument.defaultView.frameElement) && 1 == b.nodeType)
                            d = b,
                            c.push(d);
                        else
                            break;
                    else
                        break
            }
            c.push(a);
            let f, e = 1;
            for (a = 0; a < c.length; a++) {
                a: {
                    b = c[a];
                    if (!b) {
                        f = 1;
                        break a
                    }
                    let {opacity: g, visibility: h} = window.getComputedStyle(b) || wb;
                    "hidden" === h ? f = 0 : (b = "" === g ? 1 : parseFloat(g),
                    f = isNaN(b) ? 1 : b)
                }
                f < e && (e = f);
                if (0 === e)
                    break
            }
            return e
        }
        let Jd = [0, .05, .1, .15, .2, .25, .3, .35, .4, .45, .5, .55, .6, .65, .7, .75, .8, .85, .9, .95, 1];
        let Kd = 1;
        function Ld(a) {
            let b = a.__AMP_VIS_ID;
            b || (b = ++Kd,
            a.__AMP_VIS_ID = b);
            return b
        }
        function Md(a) {
            if (!a.__AMP_VIS) {
                var b = L(a);
                let d = Na(a)
                  , e = d && d.__AMP_EMBED__;
                var c;
                if (c = d)
                    if (c = d,
                    Node.prototype.getRootNode)
                        c = c.getRootNode() || c;
                    else
                        for (; c.parentNode && (!c || "I-AMPHTML-SHADOW-ROOT" != c.tagName && (11 != c.nodeType || "[object ShadowRoot]" !== Object.prototype.toString.call(c))); c = c.parentNode)
                            ;
                b = e && c ? new Nd(Md(c),e) : new Od(b);
                a.__AMP_VIS = b
            }
            return a.__AMP_VIS
        }
        function Pd(a, b) {
            a.L || (a.L = []);
            a.L.push(b)
        }
        function Qd(a, b) {
            a.L && (b = a.L.indexOf(b),
            -1 != b && a.L.splice(b, 1))
        }
        function Rd(a) {
            for (let b = 0; b < a.fa.length; b++)
                a.fa[b].update()
        }
        function Sd(a, b, c, d, e, f, g) {
            if (c.visiblePercentageThresholds && void 0 == c.visiblePercentageMin && void 0 == c.visiblePercentageMax) {
                let k = []
                  , l = c.visiblePercentageThresholds;
                if (!l || !x(l))
                    return E().error("amp-analytics/visibility-manager", "invalid visiblePercentageThresholds"),
                    ()=>{}
                    ;
                for (let m = 0; m < l.length; m++) {
                    let n = l[m];
                    if (!x(n) || 2 != n.length) {
                        E().error("amp-analytics/visibility-manager", "visiblePercentageThresholds entry length is not 2");
                        continue
                    }
                    if (!y(n[0]) || !y(n[1])) {
                        E().error("amp-analytics/visibility-manager", "visiblePercentageThresholds entry is not valid number");
                        continue
                    }
                    let r = Number(n[0])
                      , t = Number(n[1]);
                    if (0 > r || 100 < t || r > t || r == t && 100 != r && 0 != t) {
                        E().error("amp-analytics/visibility-manager", "visiblePercentageThresholds entry invalid min/max value");
                        continue
                    }
                    let A = c;
                    A.visiblePercentageMin = r;
                    A.visiblePercentageMax = t;
                    let C = new Gd(A,b,K(a.ampdoc, "viewport"));
                    k.push(Td(a, C, d, e, f, g))
                }
                return ()=>{
                    k.forEach((m=>m()))
                }
            }
            let h = new Gd(c,b,K(a.ampdoc, "viewport"));
            return Td(a, h, d, e, f, g)
        }
        function Td(a, b, c, d, e, f) {
            d && b.setReportReady(d);
            let g = K(a.ampdoc, "viewport")
              , h = g.getScrollTop();
            a.maybeUpdateMaxScrollDepth(h);
            c ? (b.setReady(!1),
            c.then((()=>{
                b.setReady(!0);
                b.maybeSetInitialScrollDepth(h)
            }
            ))) : b.maybeSetInitialScrollDepth(h);
            b.onTriggerEvent((()=>{
                var k = a.getStartTime();
                let l = b.getState(k);
                l.backgrounded = a.isBackgrounded() ? 1 : 0;
                l.backgroundedAtStart = a.isBackgroundedAtStart() ? 1 : 0;
                l.totalTime = Date.now() - k;
                if (f) {
                    l.elementId = f.id;
                    l.opacity = Id(f);
                    k = g.getLayoutRect(f);
                    let m = a.getElementVisibility(f)
                      , n = a.getElementIntersectionRect(f);
                    Object.assign(l, v({
                        intersectionRatio: m,
                        intersectionRect: JSON.stringify(n)
                    }))
                } else
                    l.opacity = a.getRootMinOpacity(),
                    l.intersectionRatio = a.getRootVisibility(),
                    k = a.getRootLayoutBox();
                b.maybeDispose();
                k && (Object.assign(l, v({
                    elementX: k.left,
                    elementY: k.top,
                    elementWidth: k.width,
                    elementHeight: k.height
                })),
                l.initialScrollDepth = Bd(k, g, b.getInitialScrollDepth()),
                l.maxScrollDepth = Bd(k, g, a.getMaxScrollDepth()));
                e(l)
            }
            ));
            a.fa.push(b);
            b.unsubscribe((()=>{
                let k = a.fa.indexOf(b);
                -1 != k && a.fa.splice(k, 1)
            }
            ));
            f && b.unsubscribe(a.observe(f, (()=>b.update())));
            b.update();
            return function() {
                b.dispose()
            }
        }
        class Ud {
            constructor(a, b) {
                this.parent = a;
                this.ampdoc = b;
                this.Jb = 0;
                this.fa = [];
                this.L = null;
                this.ka = [];
                this.Fb = 0;
                this.parent && Pd(this.parent, this);
                let c = K(this.ampdoc, "viewport");
                c.onChanged((()=>{
                    this.maybeUpdateMaxScrollDepth(c.getScrollTop())
                }
                ))
            }
            dispose() {
                this.setRootVisibility(0);
                for (var a = this.fa.length - 1; 0 <= a; a--)
                    this.fa[a].dispose();
                this.ka.forEach((b=>{
                    b()
                }
                ));
                this.ka.length = 0;
                this.parent && Qd(this.parent, this);
                if (this.L)
                    for (a = 0; a < this.L.length; a++)
                        this.L[a].dispose()
            }
            unsubscribe(a) {
                this.ka.push(a)
            }
            getStartTime() {}
            isBackgrounded() {}
            isBackgroundedAtStart() {}
            getRootMinOpacity() {}
            getRootLayoutBox() {}
            getRootVisibility() {
                return this.parent ? 0 < this.parent.getRootVisibility() ? this.Jb : 0 : this.Jb
            }
            setRootVisibility(a) {
                this.Jb = a;
                Rd(this);
                if (this.L)
                    for (a = 0; a < this.L.length; a++)
                        Rd(this.L[a])
            }
            maybeUpdateMaxScrollDepth(a) {
                a > this.Fb && (this.Fb = a)
            }
            getMaxScrollDepth() {
                return this.Fb
            }
            listenRoot(a, b, c, d) {
                let e = this.getRootVisibility.bind(this);
                return Sd(this, e, a, b, c, d)
            }
            listenElement(a, b, c, d, e) {
                let f = this.getElementVisibility.bind(this, a);
                return Sd(this, f, b, c, d, e, a)
            }
            observe() {}
            getElementVisibility() {}
            getElementIntersectionRect() {}
        }
        class Od extends Ud {
            constructor(a) {
                super(null, a);
                this.T = K(a, "viewport");
                this.Rb = !a.isVisible();
                this.qb = this.isBackgrounded();
                this.Y = Object.create(null);
                this.ca = null;
                if ("inabox" == B(this.ampdoc.win).runtime) {
                    a = this.ampdoc.getRootNode();
                    let b = a.documentElement || a.body || a;
                    this.unsubscribe(this.observe(b, this.setRootVisibility.bind(this)));
                    let c = ()=>{
                        let d = Ld(b)
                          , e = this.Y[d];
                        e && (e.isVisible = 1 > this.ampdoc.win.innerHeight || 1 > this.ampdoc.win.innerWidth ? !1 : !0,
                        this.setRootVisibility(e.isVisible ? e.intersectionRatio : 0))
                    }
                    ;
                    this.ampdoc.win.addEventListener("resize", c);
                    this.unsubscribe((()=>{
                        this.ampdoc.win.removeEventListener("resize", c)
                    }
                    ))
                } else
                    this.setRootVisibility(this.ampdoc.isVisible() ? 1 : 0),
                    this.unsubscribe(this.ampdoc.onVisibilityChanged((()=>{
                        let b = this.ampdoc.isVisible();
                        b || (this.Rb = !0);
                        this.setRootVisibility(b ? 1 : 0)
                    }
                    )))
            }
            dispose() {
                super.dispose();
                this.ca && (this.ca.disconnect(),
                this.ca = null)
            }
            getStartTime() {
                return this.ampdoc.getFirstVisibleTime()
            }
            isBackgrounded() {
                return this.Rb
            }
            isBackgroundedAtStart() {
                return this.qb
            }
            getRootMinOpacity() {
                let a = this.ampdoc.getRootNode();
                return Id(a.documentElement || a.body || a)
            }
            getRootLayoutBox() {
                let a = this.ampdoc.getRootNode();
                return this.T.getLayoutRect(a.documentElement || a.body || a)
            }
            observe(a, b) {
                let c = Ld(a);
                let d = this.Y[c];
                d ? 0 < d.intersectionRatio && d.isVisible && b(d.intersectionRatio) : (d = {
                    element: a,
                    intersectionRatio: 0,
                    intersectionRect: null,
                    isVisible: !1,
                    boundingClientRect: null,
                    listeners: []
                },
                this.Y[c] = d);
                d.listeners.push(b);
                this.ca || (this.ca = new this.ampdoc.win.IntersectionObserver(this.bd.bind(this),{
                    threshold: Jd
                }));
                this.ca.observe(a);
                return ()=>{
                    let e = this.Y[c];
                    if (e) {
                        let f = e.listeners.indexOf(b);
                        -1 != f && e.listeners.splice(f, 1);
                        0 == e.listeners.length && (this.ca.unobserve(a),
                        delete this.Y[c])
                    }
                }
            }
            getElementVisibility(a) {
                if (0 == this.getRootVisibility())
                    return 0;
                a = Ld(a);
                return (a = this.Y[a]) && a.isVisible && a.intersectionRatio || 0
            }
            getElementIntersectionRect(a) {
                if (0 >= this.getElementVisibility(a))
                    return null;
                a = Ld(a);
                return (a = this.Y[a]) ? a.intersectionRect : null
            }
            bd(a) {
                a.forEach((b=>{
                    let c = b.intersectionRect;
                    c = Ad(Number(c.left), Number(c.top), Number(c.width), Number(c.height));
                    let {boundingClientRect: d} = b;
                    d = d && Ad(Number(d.left), Number(d.top), Number(d.width), Number(d.height));
                    var e = b.intersectionRatio
                      , f = c
                      , g = d;
                    e = Math.min(Math.max(e, 0), 1);
                    b = Ld(b.target);
                    b = this.Y[b];
                    let h = !0;
                    if (1 > g.width || 1 > g.height)
                        h = !1;
                    if (b)
                        for (b.isVisible = h,
                        b.intersectionRatio = e,
                        b.intersectionRect = f,
                        b.boundingClientRect = g,
                        f = 0; f < b.listeners.length; f++)
                            b.listeners[f](b.isVisible ? e : 0)
                }
                ))
            }
        }
        class Nd extends Ud {
            constructor(a, b) {
                super(a, a.ampdoc);
                this.embed = b;
                this.qb = this.parent.isBackgrounded();
                this.unsubscribe(this.parent.observe(b.host, this.setRootVisibility.bind(this)))
            }
            getStartTime() {
                return this.embed.getStartTime()
            }
            isBackgrounded() {
                return this.parent.isBackgrounded()
            }
            isBackgroundedAtStart() {
                return this.qb
            }
            getRootMinOpacity() {
                return Id(this.embed.iframe)
            }
            getRootLayoutBox() {
                let a = this.embed.iframe;
                return K(this.ampdoc, "viewport").getLayoutRect(a)
            }
            observe(a, b) {
                return this.parent.observe(a, b)
            }
            getElementVisibility(a) {
                return 0 == this.getRootVisibility() ? 0 : this.parent.getElementVisibility(a)
            }
            getElementIntersectionRect(a) {
                return 0 == this.getRootVisibility() ? null : this.parent.getElementIntersectionRect(a)
            }
        }
        let Vd = ["AMP-AD", "AMP-ANALYTICS", "AMP-PIXEL", "AMP-AD-EXIT"];
        function Xd(a) {
            let b = L(a);
            return b.signals().whenSignal("ready-scan").then((()=>{
                let c = K(b, "resources").get().filter((d=>!Vd.includes(d.element.tagName))).map((d=>d.element));
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
                        root: e.parent && e.parent != e ? e.document : null,
                        threshold: .01
                    });
                    for (e = 0; e < Math.min(c.length, 100); e++)
                        f.observe(c[e])
                }
                )).then((d=>Promise.all(d.map((e=>e.whenLoaded())))))
            }
            ))
        }
        let Yd = /^vars(.+)/;
        function Zd(a) {
            let b = 0;
            let c = [];
            for (let d = 0; d < a.length; d++)
                Object.keys(ua(a[d], Yd)).length ? c.push(a[d]) : b++;
            return c
        }
        function $d(a, b, c=!0) {
            return a.ampdoc.whenReady().then((()=>{
                let d = [];
                for (let e = 0; e < b.length; e++) {
                    let f, g = [];
                    let h = b[e];
                    try {
                        f = a.getRoot().querySelectorAll(h)
                    } catch (k) {
                        F(!1, `Invalid query selector ${h}`)
                    }
                    for (let k = 0; k < f.length; k++)
                        a.contains(f[k]) && g.push(f[k]);
                    g = c ? Zd(g) : g;
                    F(g.length, `Element "${h}" not found`);
                    d = d.concat(g)
                }
                return d.filter(((e,f)=>d.indexOf(e) === f))
            }
            ))
        }
        class ae {
            constructor(a) {
                this.ampdoc = a;
                this.D = Object.create(null);
                this.Ja = this.Ma = null
            }
            dispose() {
                for (let a in this.D)
                    this.D[a].dispose(),
                    delete this.D[a];
                this.Ma && this.Ma.dispose();
                this.Ja && this.Ja.dispose()
            }
            getType() {}
            getRoot() {}
            getRootElement() {
                let a = this.getRoot();
                return a.host || a.documentElement || a.body || a
            }
            getHostElement() {}
            signals() {}
            contains(a) {
                return this.getRoot().contains(a)
            }
            getElementById() {}
            getTrackerForAllowlist(a, b) {
                let c = b[a];
                return c ? this.getTracker(a, c) : null
            }
            getTracker(a, b) {
                let c = this.D[a];
                c || (c = new b(this),
                this.D[a] = c);
                return c
            }
            getTrackerOptional(a) {
                return this.D[a] || null
            }
            getElement(a, b, c=null) {
                return ":root" == b ? da((()=>this.getRootElement())) : ":host" == b ? new Promise((d=>{
                    d(E().assertElement(this.getHostElement(), `Element "${b}" not found`))
                }
                )) : this.ampdoc.whenReady().then((()=>{
                    let d, e = null;
                    try {
                        var f = "scope" == c ? a.querySelector(b.replace(/^|,/g, "$&:scope ")) : "closest" == c ? ra(a, b) : this.getRoot().querySelector(b);
                        d = f
                    } catch (g) {
                        F(!1, `Invalid query selector ${b}`)
                    }
                    d && this.contains(d) && (e = d);
                    return E().assertElement(e, `Element "${b}" not found`)
                }
                ))
            }
            getAmpElement(a, b, c) {
                return this.getElement(a, b, c).then((d=>{
                    var e = [d];
                    for (let f = 0; f < e.length; f++)
                        F(e[f].classList.contains("i-amphtml-element"), 'Element "%s" is required to be an AMP element', b);
                    return d
                }
                ))
            }
            getElements(a, b, c, d=!0) {
                return x(b) ? (F(!c, "Cannot have selectionMethod %s defined with an array selector.", c),
                $d(this, b, d)) : this.getElement(a, b, c).then((e=>[e]))
            }
            createSelectiveListener(a, b, c, d=null) {
                return e=>{
                    if (":host" != c)
                        for (var f = this.getRootElement(), g = "*" == c, h = ":root" == c, {target: k} = e; k && this.contains(k) && ("scope" != d || h || b.contains(k)); ) {
                            if ("closest" != d || k.contains(b)) {
                                var l;
                                if (!(l = g || h && k == f)) {
                                    var m = c;
                                    try {
                                        l = pa(k, m)
                                    } catch (n) {
                                        E().error("amp-analytics/analytics-root", "Bad query selector.", m, n),
                                        l = !1
                                    }
                                }
                                if (l) {
                                    a(k, e);
                                    break
                                }
                            }
                            k = k.parentElement
                        }
                }
            }
            whenIniLoaded() {}
            getVisibilityManager() {
                this.Ma || (this.Ma = Md(this.getRoot()));
                return this.Ma
            }
            getScrollManager() {
                this.Ja || (this.Ja = new zd(this));
                return this.Ja
            }
        }
        class be extends ae {
            constructor(a) {
                super(a)
            }
            getType() {
                return "ampdoc"
            }
            getRoot() {
                return this.ampdoc.getRootNode()
            }
            getHostElement() {
                return null
            }
            signals() {
                return this.ampdoc.signals()
            }
            getElementById(a) {
                return this.ampdoc.getElementById(a)
            }
            whenIniLoaded() {
                var a = K(this.ampdoc, "viewport");
                "inabox" == B(this.ampdoc.win).runtime ? a.getLayoutRect(this.getRootElement()) : (a = a.getSize(),
                Ad(0, 0, a.width, a.height));
                return Xd(this.ampdoc)
            }
        }
        class ce extends ae {
            constructor(a, b) {
                super(a);
                this.embed = b
            }
            getType() {
                return "embed"
            }
            getRoot() {
                return this.embed.win.document
            }
            getHostElement() {
                return this.embed.iframe
            }
            signals() {
                return this.embed.signals()
            }
            getElementById(a) {
                return this.embed.win.document.getElementById(a)
            }
            whenIniLoaded() {
                return this.embed.whenIniLoaded()
            }
        }
        class de {
            constructor(a, b) {
                this.J = a;
                this.Qb = b;
                this.lc = [];
                this.Lb = 0;
                this.j = (b.ownerDocument || b).defaultView
            }
            dispose() {
                this.lc.forEach((a=>{
                    a()
                }
                ))
            }
            addTrigger(a, b) {
                let c = a.on;
                var d = ad(c);
                let e = bd(this.J.getType())
                  , f = this.J.getTrackerForAllowlist(d, e);
                F(!!f, 'Trigger type "%s" is not allowed in the %s', c, this.J.getType());
                let g;
                let h = new q;
                d = ()=>{
                    g = f.add(this.Qb, c, a, b);
                    this.lc.push(g);
                    h.resolve()
                }
                ;
                1 > this.Lb || "inabox" == B(this.j).runtime ? d() : ld(this.Qb, d, 3 > this.Lb ? 20 : 10);
                this.Lb++;
                return h.promise
            }
        }
        function ee(a, b) {
            let c = L(b)
              , d = (b = Na(b)) && b.__AMP_EMBED__;
            return c == a.ampdoc && !d && a.J ? a.J : fe(d || c, (()=>d ? new ce(c,d) : new be(c)))
        }
        function fe(a, b) {
            let c = a.__AMP_AN_ROOT;
            c || (c = b(),
            a.__AMP_AN_ROOT = c);
            return c
        }
        class ge {
            constructor(a) {
                this.ampdoc = a;
                this.J = ee(this, a.getRootNode())
            }
            dispose() {
                this.J.dispose()
            }
            getAnalyticsRoot(a) {
                return ee(this, a)
            }
            createAnalyticsGroup(a) {
                let b = ee(this, a);
                return new de(b,a)
            }
            triggerEventForTarget(a, b, c={}, d=!0) {
                c = new Y(a,b,c,d);
                a = ee(this, a);
                b = ad(b);
                d = a.getTracker;
                a: switch (b) {
                case "story":
                    var e = Xc;
                    break a;
                default:
                    e = Sc
                }
                d.call(a, b, e).trigger(c)
            }
        }
        function he(a, b) {
            let c = {}
              , d = {
                enabled: ie(a) && je(a)
            }
              , e = Object.keys(b).filter((g=>{
                let h = b[g]
                  , k = u(h);
                k || (d[g] = h);
                return k
            }
            ))
              , f = a.la.isProxyOrigin(a.o.win.location);
            e.forEach((g=>{
                let h = Q(Q({}, d), b[g]);
                !0 !== h.enabled || !f && !1 !== h.proxyOnly || (h.ids ? c[g] = h : E().error("amp-analytics/linker-manager", '"ids" is a required field for use of "linkers".'))
            }
            ));
            return c
        }
        function ke(a, b) {
            let c = a.h;
            for (let h in c)
                if (a.gb[h]) {
                    var d = a
                      , e = h
                      , f = c[h]
                      , g = d.la.parse(b);
                    if (le(d, g, f) && ("https:" === g.protocol || "http:" === g.protocol) && (f = lc(d.gb[e]))) {
                        d = {};
                        d[e] = f;
                        e = d;
                        d = P(b);
                        d = Aa(d.search);
                        f = v({});
                        g = Object.keys(e);
                        for (let k = 0; k < g.length; k++)
                            w(d, g[k]) || (f[g[k]] = e[g[k]]);
                        b = kb(b, mb(f))
                    }
                }
            return b
        }
        function me(a) {
            a.Ua || a.Oc.then((b=>{
                a.Ua = b.beforeSubmit(a.Sc.bind(a))
            }
            ))
        }
        function ie(a) {
            return "googleanalytics" !== a.F || "googleanalytics" !== a.o.getMetaByName("amp-google-client-id-api") ? !1 : a.o.registerSingleton(2)
        }
        function je(a) {
            a = G(a.o.win, "platform");
            return a.isSafari() && 12 <= a.getMajorVersion()
        }
        function le(a, b, c) {
            let d = c.destinationDomains
              , e = b.hostname
              , f = a.o.win.location.hostname;
            if (!c.sameDomainEnabled && f === e || d && !Array.isArray(d))
                return !1;
            if (d)
                return ne(d, e);
            let {canonicalUrl: g, sourceUrl: h} = K(a.o, "documentInfo").get()
              , k = a.la.parse(g).hostname;
            b = oe(k) === oe(e);
            if (a.Va)
                return ne([a.Va, "*" + a.Va], e) || b;
            a = a.la.parse(h).hostname;
            return oe(a) === oe(e) || b
        }
        function ne(a, b) {
            for (let e = 0; e < a.length; e++) {
                var d, c = a[e];
                !(d = c === b) && (d = -1 !== c.indexOf("*")) && (d = b,
                c = c.replace(/[-\/\\^$+?.()|[\]{}]/g, "\\$&").replace(/\*/g, ".*"),
                d = new RegExp("^" + c + "$").test(d));
                if (d)
                    return !0
            }
            return !1
        }
        class pe {
            constructor(a, b, c, d) {
                this.o = a;
                this.h = b.linkers;
                this.pd = b.vars || {};
                this.F = c;
                this.A = d;
                this.gb = {};
                this.la = M(this.A, "url");
                this.Oc = N(a, "form-submit-service");
                this.Ua = null;
                this.K = T(this.o);
                this.Va = null
            }
            init() {
                if (!u(this.h))
                    return p();
                this.Va = Sb(this.o.win);
                this.h = he(this, this.h);
                let a = Object.keys(this.h).map((b=>{
                    let c = this.h[b].ids
                      , d = Object.keys(c)
                      , e = d.map((f=>{
                        let g = new R(this.pd,void 0,!0);
                        return this.Ra(c[f], g)
                    }
                    ));
                    return Promise.all(e).then((f=>{
                        let g = {};
                        f.forEach(((h,k)=>{
                            h && (g[d[k]] = h)
                        }
                        ));
                        return this.gb[b] = g
                    }
                    ))
                }
                ));
                if (a.length) {
                    let b = K(this.o, "navigation");
                    b.registerAnchorMutator(((c,d)=>{
                        c.href && "click" === d.type && (c.href = ke(this, c.href))
                    }
                    ), 2);
                    b.registerNavigateToMutator((c=>ke(this, c)), 2)
                }
                me(this);
                return Promise.all(a)
            }
            dispose() {
                this.Ua && this.Ua()
            }
            Ra(a, b) {
                let c = this.K.getMacros(this.A);
                return this.K.expandTemplate(a, b, this.A).then((d=>M(this.A, "url-replace").expandUrlAsync(d, c)))
            }
            Sc(a) {
                let b = a.actionXhrMutator;
                a = a.form;
                for (let h in this.h) {
                    var c = this.h[h]
                      , d = a.getAttribute("action-xhr") || a.getAttribute("action");
                    d = this.la.parse(d);
                    if (le(this, d, c)) {
                        var e = a;
                        c = b;
                        d = h;
                        var f = this.gb[d];
                        if (f) {
                            f = lc(f);
                            var g = e.getAttribute("action-xhr");
                            g ? (d = kb(g, lb(d, f), void 0),
                            c(d)) : (c = e,
                            d = v({
                                type: "hidden",
                                name: d,
                                value: f
                            }),
                            d = ta(c.ownerDocument, "input", d),
                            c.appendChild(d))
                        }
                    }
                }
            }
        }
        function oe(a) {
            return a.replace(/^(?:www\.|m\.|amp\.)+/, "")
        }
        class qe {
            generateRequest(a, b, c=!1) {
                return c ? {
                    url: a.replace("${extraUrlParams}", ""),
                    payload: JSON.stringify(b.extraUrlParams)
                } : {
                    url: re(a, [b])
                }
            }
            generateBatchRequest(a, b, c=!1) {
                return c ? {
                    url: a.replace("${extraUrlParams}", ""),
                    payload: JSON.stringify(b.map((d=>d.extraUrlParams)))
                } : {
                    url: re(a, b)
                }
            }
        }
        let se = {
            "default": new qe
        };
        function re(a, b) {
            let c = b.map((d=>mb(d.extraUrlParams))).filter(Boolean).join("&");
            return 0 <= a.indexOf("${extraUrlParams}") ? a.replace("${extraUrlParams}", c) : kb(a, c)
        }
        let te = {
            AMPDOC_HOST: !0,
            AMPDOC_HOSTNAME: !0,
            AMPDOC_URL: !0,
            AMP_VERSION: !0,
            AVAILABLE_SCREEN_HEIGHT: !0,
            AVAILABLE_SCREEN_WIDTH: !0,
            BACKGROUND_STATE: !0,
            BROWSER_LANGUAGE: !0,
            CANONICAL_HOST: !0,
            CANONICAL_HOSTNAME: !0,
            CANONICAL_PATH: !0,
            CANONICAL_URL: !0,
            DOCUMENT_CHARSET: !0,
            FIRST_CONTENTFUL_PAINT: !0,
            FIRST_VIEWPORT_READY: !0,
            MAKE_BODY_VISIBLE: !0,
            RANDOM: !0,
            SCREEN_COLOR_DEPTH: !0,
            SCREEN_HEIGHT: !0,
            SCREEN_WIDTH: !0,
            SOURCE_HOST: !0,
            SOURCE_HOSTNAME: !0,
            SOURCE_PATH: !0,
            SOURCE_URL: !0,
            TIMESTAMP: !0,
            TIMEZONE: !0,
            TIMEZONE_CODE: !0,
            USER_AGENT: !0,
            VIEWPORT_HEIGHT: !0,
            VIEWPORT_WIDTH: !0
        };
        function ue(a) {
            return new Promise((b=>{
                setTimeout((()=>b(a())))
            }
            ))
        }
        function ve(a) {
            return !(u(a.resources) && a.encoding && a.encoding.entry && a.encoding.delim) || 2 > a.encoding.base || 36 < a.encoding.base || null != a.responseAfter && "number" != typeof a.responseAfter ? !1 : !0
        }
        function we(a, b) {
            let c = a.name;
            for (a = 0; a < b.length; ++a) {
                let {hostPattern: d, resources: e} = b[a];
                if (!d.test(c.host))
                    continue;
                let f = ka(e, (g=>g.pathPattern.test(c.pathname) && g.queryPattern.test(c.search)));
                if (-1 != f)
                    return e[f].name
            }
            return null
        }
        function xe(a) {
            let b = {};
            for (let d in a) {
                let e = a[d].host || ""
                  , f = {
                    name: d,
                    pathPattern: new RegExp(a[d].path || ""),
                    queryPattern: new RegExp(a[d].query || "")
                };
                b[e] ? b[e].resources.push(f) : b[e] = {
                    hostPattern: new RegExp(e),
                    resources: [f]
                }
            }
            let c = [];
            for (let d in b)
                c.push(b[d]);
            return c
        }
        function ye(a, b) {
            let c = xe(b)
              , d = [];
            a.forEach((e=>{
                let f = we(e, c);
                f && d.push({
                    entry: e,
                    name: f
                })
            }
            ));
            return d
        }
        function ze(a, b, c) {
            let d = b.resources
              , e = b.encoding
              , f = T(c)
              , g = (h,k=0)=>Math.round(h - k).toString(e.base || 10);
            a = ye(a, d).map((h=>{
                var k = h.entry;
                k = {
                    key: h.name,
                    startTime: g(k.startTime),
                    redirectTime: g(k.redirectEnd, k.redirectStart),
                    domainLookupTime: g(k.domainLookupEnd, k.domainLookupStart),
                    tcpConnectTime: g(k.connectEnd, k.connectStart),
                    serverResponseTime: g(k.responseStart, k.requestStart),
                    networkTransferTime: g(k.responseEnd, k.responseStart),
                    transferSize: g(k.transferSize || 0),
                    encodedBodySize: g(k.encodedBodySize || 0),
                    decodedBodySize: g(k.decodedBodySize || 0),
                    duration: g(k.duration),
                    initiatorType: k.initiatorType
                };
                return new R(k,1)
            }
            )).map((h=>f.expandTemplate(e.entry, h, c)));
            return Promise.all(a).then((h=>h.join(e.delim)))
        }
        function Ae(a, b) {
            let {win: c} = a.getAmpDoc();
            if (b.done || !c.performance || !c.performance.now || !c.performance.getEntriesByType || !ve(b))
                return b.done = !0,
                Promise.resolve("");
            let d = c.performance.getEntriesByType("resource");
            150 <= d.length && (b.done = !0);
            let e = b.responseAfter || 0;
            b.responseAfter = Math.max(e, c.performance.now());
            d = d.filter((f=>f.startTime + f.duration >= e));
            return d.length ? ue((()=>ze(d, b, a))) : Promise.resolve("")
        }
        function Be(a, b, c) {
            return b && Date.now() < c + 6e4 ? Ae(a, b) : Promise.resolve("")
        }
        function Ce(a) {
            a.tc && (a.eb = a.win.setTimeout((()=>{
                0 != a.Ha && De(a);
                a.sc = !1;
                a.aa && (a.win.clearTimeout(a.aa),
                a.aa = null)
            }
            ), 1e3 * a.tc))
        }
        function Ee(a, b, c, d) {
            return a.K.expandTemplate(b, c, a.A, d, a.pb).then((e=>a.mb.expandUrlAsync(e, d, a.pb).catch((f=>F(!1, `Could not expand URL "${e}": ${f.message}`)))))
        }
        function De(a) {
            let b = a.Na
              , c = a.sb
              , d = a.Ib
              , e = a.Cb;
            a.fb();
            (d ? d : b).then((f=>{
                a.fd.url(a.o, f, !0)
            }
            ));
            Promise.all([b, Promise.all(c), d]).then((f=>{
                var g = f[0];
                var h = f[2];
                g = h ? a.la.parse(h).origin + g : g;
                f = f[1];
                0 !== f.length && (e.iframePing ? (F("visible" == e.on, "iframePing is only available on page view requests."),
                a.Z.sendRequestUsingIframe(g, f[0])) : a.Z.sendRequest(g, f, !!a.C))
            }
            ))
        }
        function Fe(a) {
            let b = a.rb < a.C.length ? a.C[a.rb++] : a.C[a.C.length - 1];
            a.aa = a.win.setTimeout((()=>{
                0 != a.Ha && De(a);
                Fe(a)
            }
            ), b)
        }
        class Ge {
            constructor(a, b, c, d, e) {
                this.A = a;
                this.o = a.getAmpDoc();
                this.win = this.o.win;
                this.uc = b.origin;
                this.baseUrl = b.baseUrl;
                this.C = b.batchInterval;
                this.tc = Number(b.reportWindow) || null;
                this.rb = null;
                this.K = T(a);
                this.mb = M(a, "url-replace");
                this.la = M(a, "url");
                this.Ib = this.Na = null;
                this.sb = [];
                this.fd = c;
                this.Z = d;
                this.pb = e ? te : void 0;
                this.eb = this.aa = null;
                this.sc = !0;
                this.Cb = null;
                this.Ha = 0;
                this.X = Date.now();
                Ce(this);
                if (this.C) {
                    this.C = x(this.C) ? this.C : [this.C];
                    for (a = 0; a < this.C.length; a++)
                        b = this.C[a],
                        F(y(b), "Invalid batchInterval value: %s", this.C),
                        b = 1e3 * Number(b),
                        F(200 <= b, "Invalid batchInterval value: %s, interval value must be greater than %s ms.", this.C, 200),
                        this.C[a] = b;
                    this.rb = 0;
                    Fe(this)
                }
            }
            send(a, b, c) {
                let d = !0 === b.important;
                if (this.sc || d) {
                    this.Ha++;
                    this.Cb = b;
                    var e = this.K.getMacros(this.A);
                    e.RESOURCE_TIMING = Be(this.A, b.resourceTimingSpec, this.X);
                    this.Na || (c.freezeVar("extraUrlParams"),
                    this.Na = Ee(this, this.baseUrl, c, e));
                    if (!this.Ib && this.uc) {
                        let k = new R(c.vars,c.iterations,!0);
                        this.Ib = Ee(this, this.uc, k, e)
                    }
                    var f = Q(Q({}, a), b.extraUrlParams)
                      , g = this.win.Date.now()
                      , h = He(this.K, this.mb, f, c, e, this.A, this.pb).then((k=>v({
                        trigger: b.on,
                        timestamp: g,
                        extraUrlParams: k
                    })));
                    this.sb.push(h);
                    0 == this.Ha || !d && this.C || De(this)
                }
            }
            dispose() {
                this.fb();
                this.aa && (this.win.clearTimeout(this.aa),
                this.aa = null);
                this.eb && (this.win.clearTimeout(this.eb),
                this.eb = null)
            }
            fb() {
                this.Ha = 0;
                this.Na = null;
                this.sb = [];
                this.Cb = null
            }
        }
        function Ie(a, b, c, d, e, f) {
            let g = T(a)
              , h = M(f, "url-replace")
              , k = g.getMacros(f);
            e.freezeVar("extraUrlParams");
            let l = g.expandTemplate(b, e, f).then((m=>h.expandStringAsync(m, k)));
            return 0 > b.indexOf("${extraUrlParams}") ? l : l.then((m=>{
                let n = Q(Q({}, c), d.extraUrlParams);
                return He(g, h, n, e, k, f).then((r=>re(m, [v({
                    extraUrlParams: r
                })])))
            }
            ))
        }
        function He(a, b, c, d, e, f, g) {
            let h = {}
              , k = []
              , l = new R(d.vars,d.iterations,!0)
              , m = (r,t,A)=>{
                r = r[t];
                if ("string" === typeof r)
                    A[t] = void 0,
                    r = a.expandTemplate(r, l, f).then((H=>b.expandStringAsync(H, e, g))).then((H=>{
                        A[t] = H
                    }
                    )),
                    k.push(r);
                else if (x(r)) {
                    A[t] = [];
                    for (var C = 0; C < r.length; C++)
                        m(r, C, A[t])
                } else if (u(r) && null !== r) {
                    A[t] = {};
                    let H = Object.keys(r);
                    for (C = 0; C < H.length; C++)
                        m(r, H[C], A[t])
                } else
                    A[t] = r
            }
              , n = Object.keys(c);
            for (d = 0; d < n.length; d++)
                m(c, n[d], h);
            return Promise.all(k).then((()=>h))
        }
        function Je(a) {
            a.isReady() && a.queueSize() && (a.ed.send("iframe-transport-events", {
                events: a.Ga
            }),
            a.Ga = [])
        }
        class Ke {
            constructor(a) {
                this.Pc = a;
                this.kc = !1;
                this.Ga = [];
                this.ed = new cc(this.Pc,(()=>{
                    this.setIsReady()
                }
                ))
            }
            isReady() {
                return this.kc
            }
            setIsReady() {
                this.kc = !0;
                Je(this)
            }
            queueSize() {
                return this.Ga.length
            }
            enqueue(a) {
                this.Ga.push(a);
                100 <= this.queueSize() && this.Ga.shift();
                Je(this)
            }
        }
        function Le(a) {
            Me(a.xa) && (Ne[a.F] = new a.xa.PerformanceObserver((b=>{
                b && b.getEntries().forEach((c=>{
                    c && "longtask" == c.entryType && "cross-origin-descendant" == c.name && c.attribution && c.attribution.forEach((d=>{
                        a.ac == d.containerSrc && 0 == ++a.ad % 5 && E().error("amp-analytics/iframe-transport", `Long Task: Vendor: "${a.F}"`)
                    }
                    ))
                }
                ))
            }
            )),
            Ne[a.F].observe({
                entryTypes: ["longtask"]
            }))
        }
        class Oe {
            constructor(a, b, c, d) {
                this.xa = a;
                this.F = b;
                this.Yb = d;
                this.ac = c.iframe;
                this.ad = 0;
                this.processCrossDomainIframe()
            }
            detach() {
                var a = this.xa.document
                  , b = this.F;
                let c = Pe[b];
                --c.usageCount || (a.body.removeChild(c.frame),
                delete Pe[b],
                Ne[b] && (Ne[b].disconnect(),
                Ne[b] = null))
            }
            processCrossDomainIframe() {
                let a;
                w(Pe, this.F) ? (a = Pe[this.F],
                ++a.usageCount) : (a = this.createCrossDomainIframe(),
                this.xa.document.body.appendChild(a.frame),
                Le(this))
            }
            createCrossDomainIframe() {
                var a = String(++Qe);
                let b = JSON.stringify({
                    scriptSrc: xa.thirdParty + "/2111152338000/iframe-transport-client-v0.js",
                    sentinel: a,
                    type: this.F
                })
                  , c = ta(this.xa.document, "iframe", {
                    sandbox: "allow-scripts allow-same-origin",
                    name: b,
                    "data-amp-3p-sentinel": a
                });
                c.sentinel = a;
                yb(c);
                c.src = this.ac;
                a = {
                    frame: c,
                    usageCount: 1,
                    queue: new Ke(c)
                };
                return Pe[this.F] = a
            }
            sendRequest(a) {
                Pe[this.F].queue.enqueue({
                    creativeId: this.Yb,
                    message: a
                })
            }
            getCreativeId() {
                return this.Yb
            }
            getType() {
                return this.F
            }
        }
        function Me(a) {
            return !!a.PerformanceObserver && !!a.TaskAttributionTiming && "containerName"in a.TaskAttributionTiming.prototype
        }
        var Pe = {}
          , Qe = 0
          , Ne = {};
        function Re(a, b, c) {
            c && "no-referrer" !== c && E().error("pixel", "Unsupported referrerPolicy: %s", c);
            return "no-referrer" === c ? Se(a, b) : Te(a, b)
        }
        function Se(a, b) {
            if ("referrerPolicy"in Image.prototype)
                return Te(a, b, !0);
            let c = ta(a.document, "iframe", v({
                src: "about:blank",
                style: "display:none"
            }));
            c.onload = ()=>{
                Te(c.contentWindow, b)
            }
            ;
            a.document.body.appendChild(c);
            return c
        }
        function Te(a, b, c=!1) {
            a = new a.Image;
            c && (a.referrerPolicy = "no-referrer");
            a.src = b;
            return a
        }
        function Ue(a, b) {
            Ra(a).then((c=>{
                F(c, "AMP-SCRIPT is not installed");
                c.fetch(b.url, JSON.parse(b.payload))
            }
            ))
        }
        function Ve(a, b) {
            a = a.navigator.sendBeacon ? a.navigator.sendBeacon.bind(a.navigator) : void 0;
            return a ? a(b.url, b.payload || "") : !1
        }
        function We(a, b) {
            a = a.XMLHttpRequest;
            if (!a)
                return !1;
            let c = new a;
            if (!("withCredentials"in c))
                return !1;
            c.open("POST", b.url, !0);
            c.withCredentials = !0;
            c.setRequestHeader("Content-Type", "text/plain");
            c.onreadystatechange = ()=>{}
            ;
            c.send(b.payload || "");
            return !0
        }
        function Xe(a, b, c) {
            a && (a = Re(a, b.url, c),
            Za(a).then((()=>{}
            )).catch((()=>{}
            )))
        }
        class Ye {
            constructor(a, b={}) {
                this.o = a;
                this.j = a.win;
                this.N = b;
                this.qc = this.N.referrerPolicy;
                "no-referrer" === this.qc && (this.N.beacon = !1,
                this.N.xhrpost = !1);
                this.yc = !!this.N.useBody;
                this.ba = null;
                this.da = "inabox" == B(this.j).runtime
            }
            sendRequest(a, b, c) {
                if (a && 0 !== b.length) {
                    var d = se["default"]
                      , e = Ze((function(f) {
                        f = c ? d.generateBatchRequest(a, b, f) : d.generateRequest(a, b[0], f);
                        if (!f.url.startsWith("amp-script:")) {
                            nb(f.url, "amp-analytics request");
                            var g = f.url
                              , h = P(g);
                            h = Aa(h.search);
                            F(!("__amp_source_origin"in h), "Source origin is not allowed in %s", g)
                        }
                        return f
                    }
                    ));
                    this.N.iframe ? this.ba ? this.ba.sendRequest(e(!1).url) : (D.dev || (D.dev = Ga())).error("amp-analytics/transport", "iframe transport was inadvertently deleted") : this.N["amp-script"] ? Ue(this.o, {
                        url: a,
                        payload: e(!0).payload
                    }) : this.N.beacon && Ve(this.j, e(this.yc)) || this.N.xhrpost && We(this.j, e(this.yc)) || this.N.image && Xe(this.j, e(!1), this.qc)
                }
            }
            maybeInitIframeTransport(a) {
                if (this.N.iframe && !this.ba) {
                    var b = I((a.ownerDocument || a).defaultView)
                      , c = a.getAttribute("type");
                    if (this.da)
                        a = "1";
                    else {
                        var d = E()
                          , e = d.assertString;
                        a: {
                            try {
                                let g = Na(a, b).parentElement;
                                if ("AMP-AD" == g.nodeName) {
                                    var f = String(g.getResourceId());
                                    break a
                                }
                            } catch (g) {}
                            f = null
                        }
                        a = e.call(d, f, "No friendly amp-ad ancestor element was found for amp-analytics tag with iframe transport.")
                    }
                    this.ba = new Oe(b,c,this.N,a)
                }
            }
            deleteIframeTransport() {
                this.ba && (this.ba.detach(),
                this.ba = null)
            }
            sendRequestUsingIframe(a, b) {
                if (a = re(a, [b])) {
                    nb(a, "amp-analytics request");
                    F(P(a).origin != P(this.j.location.href).origin, "Origin of iframe request must not be equal to the document origin. See https://github.com/ampproject/amphtml/blob/main/docs/spec/amp-iframe-origin-policy.md for details.");
                    var c = this.j.document.createElement("iframe");
                    yb(c);
                    c.onload = c.onerror = ()=>{
                        J(this.j, "timer").delay((()=>{
                            var d;
                            null === (d = c.parentElement) || void 0 === d ? void 0 : d.removeChild(c)
                        }
                        ), 5e3)
                    }
                    ;
                    c.setAttribute("amp-analytics", "");
                    c.setAttribute("sandbox", "allow-scripts allow-same-origin");
                    c.src = a;
                    this.j.document.body.appendChild(c)
                } else
                    E().error("amp-analytics/transport", "Request not sent. Contents empty.")
            }
        }
        function Ze(a) {
            let b = {};
            return c=>{
                let d = String(c);
                void 0 === b[d] && (b[d] = a(c));
                return b[d]
            }
        }
        let $e = ["visible", "hidden", "ini-load", "render-start"];
        function af(a) {
            if (a.R)
                return a.R;
            let b = a.getAmpDoc();
            a.R = b.whenFirstVisible().then((()=>J(a.win, "timer").promise(1))).then((()=>a.Wb)).then((()=>Promise.all([N(b, "amp-analytics-instrumentation"), N(b, "amp-analytics-variables")]))).then((c=>{
                a.ic = c[0];
                a.K = c[1];
                let d = new q
                  , e = ()=>{
                    let f = new Mc(a.element).loadConfig();
                    d.resolve(f)
                }
                ;
                a.da ? e() : ld(a.element, e, 20);
                return d.promise
            }
            )).then((c=>{
                a.h = c;
                return new xd(a.win,a.element,a.h).write()
            }
            )).then((()=>{
                a.Z = new Ye(a.getAmpDoc(),a.h.transport || {})
            }
            )).then(a.Zc.bind(a)).then(a.hd.bind(a)).then(a.Wc.bind(a));
            a.R.then((()=>{
                a.collapse()
            }
            ));
            return a.R
        }
        function bf(a) {
            if (a.da)
                return !0;
            null == a.Ab && (a.Ab = dc(a.element));
            return a.Ab
        }
        function cf(a) {
            let b = a.h.optoutElementId;
            if (b && a.win.document.getElementById(b))
                return !0;
            if (!a.h.optout)
                return !1;
            let c = a.h.optout.split(".");
            a = a.win;
            for (let d = 0; d < c.length; d++) {
                if (!a)
                    return !1;
                a = a[c[d]]
            }
            return a()
        }
        function df(a) {
            if (!a.h.requests) {
                if (!bf(a)) {
                    var b = a.B();
                    a.user().warn(b, "No request strings defined. Analytics data will not be sent from this page.")
                }
            } else if (a.h.requests) {
                for (var c in a.h.requests)
                    w(a.h.requests, c) && !a.h.requests[c].baseUrl && (a.user().error("amp-analytics", "request must have a baseUrl"),
                    delete a.h.requests[c]);
                for (let d in a.h.requests)
                    a.h.requests[d].baseUrl = na(a.h.requests[d].baseUrl, (e=>{
                        let f = a.h.requests[e];
                        return f && f.baseUrl || "${" + e + "}"
                    }
                    ));
                c = {};
                for (b in a.h.requests)
                    w(a.h.requests, b) && (c[b] = new Ge(a.element,a.h.requests[b],G(a.win, "preconnect"),a.Z,a.V));
                a.Ia = c
            }
        }
        function ef(a, b, c) {
            if (b && c) {
                let d = 0;
                for (let e in c) {
                    if (16 < ++d) {
                        b = a.B();
                        a.user().error(b, "More than 16 extraUrlParamsReplaceMap rules aren't allowed; Skipping the rest");
                        break
                    }
                    for (let f in b) {
                        let g = f.replace(e, c[e]);
                        if (f != g) {
                            let h = b[f];
                            delete b[f];
                            b[g] = h
                        }
                    }
                }
            }
        }
        function ff(a, b, c, d, e) {
            let f = {};
            U(a.h.vars, f);
            U(c.vars, f);
            U(b.vars, f);
            return new R(f,d,e)
        }
        function gf(a, b) {
            let c = b.sampleSpec
              , d = a.B();
            if (!c)
                return Promise.resolve(!0);
            let e = c.sampleOn;
            if (!e)
                return a.user().error(d, "Invalid sampleOn value."),
                Promise.resolve(!0);
            let f = parseFloat(c.threshold);
            if (0 <= f && 100 >= f) {
                let g = new q
                  , h = ()=>{
                    let k = ff(a, v({}), b)
                      , l = a.Ra(e, k).then((m=>a.Mc.uniform(m))).then((m=>100 * m < f));
                    g.resolve(l)
                }
                ;
                a.da ? h() : ld(a.element, h, 10);
                return g.promise
            }
            E().error(d, "Invalid threshold for sampling.");
            return Promise.resolve(!0)
        }
        function hf(a, b) {
            if (!a.na)
                return p();
            try {
                return a.na.addTrigger(b, a.Rc.bind(a, b))
            } catch (c) {
                return a = a.B(),
                Ea(a, 'Failed to process trigger "' + b.on + '"', c),
                p()
            }
        }
        function jf(a, b, c, d) {
            a.element.ownerDocument.defaultView || a.B();
            let e = a.Ia[b]
              , f = bf(a) && c.parentPostMessage;
            if (void 0 != b && !e && (b = a.B(),
            a.user().error(b, "Ignoring request for event. Request string not found: ", c.request),
            !f))
                return;
            kf(a, c, d).then((g=>{
                let h = a.element.ownerDocument && a.element.ownerDocument.defaultView;
                if (g && h) {
                    e && (a.h.vars.requestCount++,
                    g = ff(a, d, c),
                    e.send(a.h.extraUrlParams, c, g));
                    if (g = c.parentPostMessage && bf(a))
                        g = a.win,
                        g = g.parent && g.parent != g;
                    g && lf(a, c, d)
                }
            }
            ))
        }
        function kf(a, b, c) {
            c = ff(a, c, b);
            let d = mf(a, a.h.enabled, c)
              , e = mf(a, b.enabled, c);
            return Promise.all([d, e]).then((f=>f[0] && f[1]))
        }
        function lf(a, b, c) {
            let d = b.parentPostMessage;
            c = ff(a, c, b);
            Ie(a.getAmpDoc(), d, a.h.extraUrlParams, b, c, a.element).then((e=>{
                a.win.parent.postMessage(e, "*")
            }
            ))
        }
        function mf(a, b, c) {
            return void 0 === b ? Promise.resolve(!0) : "boolean" === typeof b ? Promise.resolve(b) : a.Ra(b, c).then((d=>wc(d)))
        }
        class nf extends AMP.BaseElement {
            constructor(a) {
                super(a);
                this.Wb = p();
                this.tb = null;
                this.V = !1;
                this.Ia = {};
                this.h = {};
                this.K = this.na = this.ic = null;
                this.Mc = G(this.win, "crypto");
                this.Z = this.R = null;
                this.F = this.element.getAttribute("type");
                this.da = "inabox" == B(this.win).runtime;
                this.Ab = this.vc = this.Da = null
            }
            getLayoutPriority() {
                return this.da ? 0 : 1
            }
            isAlwaysFixed() {
                return !dc(this.element)
            }
            isLayoutSupported() {
                return !0
            }
            buildCallback() {
                this.V = this.element.hasAttribute("sandbox");
                this.element.setAttribute("aria-hidden", "true");
                this.tb = this.element.getAttribute("data-consent-notification-id");
                null != this.tb && (this.Wb = Pa(this.element).then((a=>a.get(this.tb))));
                "immediate" == this.element.getAttribute("trigger") && af(this)
            }
            layoutCallback() {
                return af(this)
            }
            detachedCallback() {
                this.na && (this.na.dispose(),
                this.na = null);
                this.Da && (this.Da.dispose(),
                this.Da = null);
                for (let a in this.Ia)
                    this.Ia[a].dispose(),
                    delete this.Ia[a]
            }
            resumeCallback() {
                this.R && this.R.then((()=>{
                    this.Z.maybeInitIframeTransport(this.element)
                }
                ))
            }
            unlayoutCallback() {
                if (this.getAmpDoc().isVisible())
                    return !1;
                this.R && this.R.then((()=>{
                    this.Z.deleteIframeTransport()
                }
                ));
                return super.unlayoutCallback()
            }
            Zc() {
                if (!this.h.triggers)
                    return p();
                if (Object.values(this.h.triggers).some((a=>{
                    var b;
                    return null === a || void 0 === a ? void 0 : null === (b = a.session) || void 0 === b ? void 0 : b.persistEvent
                }
                )) && this.F) {
                    let a = this.getAmpDoc();
                    return N(a, "amp-analytics-session").then((b=>{
                        this.vc = b
                    }
                    ))
                }
                return p()
            }
            hd() {
                if (cf(this))
                    return this.B(),
                    p();
                df(this);
                if (!this.h.triggers) {
                    var a = this.B();
                    this.user().warn(a, "No triggers were found in the config. No analytics data will be sent.");
                    return p()
                }
                ef(this, this.h.extraUrlParams, this.h.extraUrlParamsReplaceMap);
                this.na = this.ic.createAnalyticsGroup(this.element);
                this.Z.maybeInitIframeTransport(this.element);
                a = [];
                for (let b in this.h.triggers)
                    if (w(this.h.triggers, b)) {
                        let c = this.h.triggers[b]
                          , d = ff(this, v({}), c, void 0, !0)
                          , e = this.B();
                        if (!c) {
                            this.user().error(e, "Trigger should be an object: ", b);
                            continue
                        }
                        let f = c.request || c.parentPostMessage && bf(this);
                        if (c.on && f) {
                            if (this.V) {
                                let g = c.on;
                                if (("click" === g || "browser-event" === g || "custom" === g || "hidden" === g || "ini-load" === g || "render-start" === g || "scroll" === g || "story" === g || "timer" === g || "video" === g || "visible" === g) && !$e.includes(g)) {
                                    this.user().error(e, g + " is not supported for amp-analytics in scope");
                                    continue
                                }
                            }
                            ef(this, c.extraUrlParams, this.h.extraUrlParamsReplaceMap);
                            a.push(gf(this, c).then((g=>{
                                if (g)
                                    if (this.V) {
                                        if (this.element.parentElement)
                                            return c.selector = this.element.parentElement.tagName,
                                            c.selectionMethod = "closest",
                                            hf(this, c)
                                    } else
                                        return c.selector && !x(c.selector) ? this.K.expandTemplate(c.selector, d, this.element).then((h=>{
                                            c.selector = h;
                                            return hf(this, c)
                                        }
                                        )) : hf(this, c)
                            }
                            )))
                        } else {
                            let g = bf(this) ? '/"parentPostMessage"' : "";
                            this.user().error(e, '"on" and "request"' + g + " attributes are required for data to be collected.")
                        }
                    }
                return Promise.all(a)
            }
            preload(a, b) {
                G(this.win, "preconnect").preload(this.getAmpDoc(), a, b)
            }
            Wc() {
                this.Da = new pe(this.getAmpDoc(),this.h,this.F,this.element);
                let a = ()=>{
                    this.Da.init()
                }
                ;
                this.da ? a() : ld(this.element, a, 10)
            }
            Rc(a, b) {
                var c;
                if (null !== (c = a.session) && void 0 !== c && c.persistEvent) {
                    var d;
                    null === (d = this.vc) || void 0 === d ? void 0 : d.updateEvent(this.F)
                }
                c = x(a.request) ? a.request : [a.request];
                for (d = 0; d < c.length; d++)
                    jf(this, c[d], a, b)
            }
            Ra(a, b) {
                return this.K.expandTemplate(a, b, this.element).then((c=>M(this.element, "url-replace").expandUrlAsync(c, this.K.getMacros(this.element))))
            }
            B() {
                return "AmpAnalytics " + (this.element.getAttribute("id") || "<unknown id>")
            }
        }
        AMP.registerServiceForDoc("amp-analytics-instrumentation", ge);
        AMP.registerServiceForDoc("activity", fb);
        (function(a) {
            var b = oc;
            a = I(a);
            Oa(a, a, "amp-analytics-linker-reader", b)
        }
        )(AMP.win);
        AMP.registerServiceForDoc("amp-analytics-session", Hb);
        AMP.registerServiceForDoc("amp-analytics-variables", Ac);
        AMP.registerElement("amp-analytics", nf)
    }
});
//# sourceMappingURL=amp-analytics-0.1.mjs.map
