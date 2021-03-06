(self.AMP = self.AMP || []).push({
    m: 1,
    v: "2111152338000",
    n: "amp-form",
    ev: "0.1",
    l: true,
    f: function(AMP, _) {
        let l;
        function n() {
            return l ? l : l = Promise.resolve(void 0)
        }
        class p {
            constructor() {
                this.promise = new Promise(((a,b)=>{
                    this.resolve = a;
                    this.reject = b
                }
                ))
            }
        }
        function aa(a) {
            return new Promise((b=>{
                b(a())
            }
            ))
        }
        class ba {
            constructor() {
                this.U = new p;
                this.$ = 0
            }
            add(a) {
                let b = ++this.$;
                a.then((c=>{
                    this.$ === b && this.U.resolve(c)
                }
                ), (c=>{
                    this.$ === b && this.U.reject(c)
                }
                ));
                return this.U.promise
            }
            then(a, b) {
                return this.U.promise.then(a, b)
            }
        }
        function q(a) {
            return a ? Array.prototype.slice.call(a) : []
        }
        let r = Array.isArray;
        let ca = Object.prototype.hasOwnProperty
          , da = Object.prototype.toString;
        function t(a) {
            return a || {}
        }
        function ea(a, b) {
            let c = []
              , d = [];
            for (d.push({
                t: a,
                s: b,
                d: 0
            }); 0 < d.length; ) {
                let {d: e, s: g, t: h} = d.shift();
                if (c.includes(g))
                    throw Error("Source object has a circular reference.");
                c.push(g);
                if (h !== g)
                    if (10 < e)
                        Object.assign(h, g);
                    else
                        for (let f of Object.keys(g)) {
                            a = g[f];
                            if (ca.call(h, f) && (b = h[f],
                            "[object Object]" === da.call(a) && "[object Object]" === da.call(b))) {
                                d.push({
                                    t: b,
                                    s: a,
                                    d: e + 1
                                });
                                continue
                            }
                            h[f] = a
                        }
            }
        }
        function fa(a) {
            let b = a.documentElement;
            return ["???4email", "amp4email"].some((c=>b.hasAttribute(c)))
        }
        function ha(a, b) {
            try {
                return JSON.parse(a)
            } catch (c) {
                return null === b || void 0 === b ? void 0 : b(c),
                null
            }
        }
        /* https://mths.be/cssescape v1.5.1 by @mathias | MIT license */
        function ia(a, b) {
            let c = [];
            for (let d = a.parentElement; d; d = d.parentElement)
                b(d) && c.push(d);
            return c
        }
        function ja(a) {
            var b = "fieldset";
            /^[\w-]+$/.test(b);
            b = b.toUpperCase();
            return ia(a, (c=>c.tagName == b))
        }
        function ka(a) {
            var b;
            null === (b = a.parentElement) || void 0 === b ? void 0 : b.removeChild(a)
        }
        function la(a, b, c=null) {
            c ? a.insertBefore(b, c.nextSibling) : a.insertBefore(b, a.firstChild)
        }
        function v(a, b) {
            let c = a.length;
            for (let d = 0; d < c; d++)
                b(a[d], d)
        }
        function w(a) {
            var b = a.elements;
            let c = {}
              , d = /^(?:input|select|textarea)$/i
              , e = /^(?:submit|button|image|file|reset)$/i
              , g = /^(?:checkbox|radio)$/i;
            for (let f = 0; f < b.length; f++) {
                let k = b[f]
                  , m = k.checked
                  , u = k.multiple
                  , C = k.name
                  , pb = k.options
                  , qb = k.tagName
                  , sa = k.type
                  , rb = k.value;
                !C || ma(k) || !d.test(qb) || e.test(sa) || g.test(sa) && !m || (void 0 === c[C] && (c[C] = []),
                u ? v(pb, (ua=>{
                    ua.selected && c[C].push(ua.value)
                }
                )) : c[C].push(rb))
            }
            let h = na(a);
            null !== h && void 0 !== h && h.name && (a = h.name,
            b = h.value,
            void 0 === c[a] && (c[a] = []),
            c[a].push(b));
            Object.keys(c).forEach((f=>{
                0 == c[f].length && delete c[f]
            }
            ));
            return c
        }
        function na(a) {
            let b = a.ownerDocument.activeElement
              , c = q(a.elements).filter(oa);
            return c.includes(b) ? b : c[0] || null
        }
        function oa(a) {
            let b = a.type;
            return "BUTTON" == a.tagName || "submit" == b
        }
        function ma(a) {
            return a.disabled || ja(a).some((b=>b.disabled))
        }
        function pa(a) {
            switch (a.type) {
            case "select-multiple":
            case "select-one":
                return q(a.options).every((({defaultSelected: b, selected: c})=>c === b));
            case "checkbox":
            case "radio":
                return a.checked === a.defaultChecked;
            default:
                return a.value === a.defaultValue
            }
        }
        let qa = /(?:^[#?]?|&)([^=&]+)(?:=([^&]*))?/g;
        function ra(a, b="") {
            try {
                return decodeURIComponent(a)
            } catch (c) {
                return b
            }
        }
        function ta(a) {
            let b = Object.create(null);
            if (!a)
                return b;
            for (var c; c = qa.exec(a); ) {
                let d = ra(c[1], c[1]);
                c = c[2] ? ra(c[2].replace(/\+/g, " "), c[2]) : "";
                b[d] = c
            }
            return b
        }
        let x = self.AMP_CONFIG || {}
          , va = ("string" == typeof x.cdnProxyRegex ? new RegExp(x.cdnProxyRegex) : x.cdnProxyRegex) || /^https:\/\/([a-zA-Z0-9_-]+\.)?cdn\.ampproject\.org$/;
        function wa(a) {
            if (!self.document || !self.document.head || self.location && va.test(self.location.origin))
                return null;
            let b = self.document.head.querySelector(`meta[name="${a}"]`);
            return b && b.getAttribute("content") || null
        }
        let xa = {
            thirdParty: x.thirdPartyUrl || "https://3p.ampproject.net",
            thirdPartyFrameHost: x.thirdPartyFrameHost || "ampproject.net",
            thirdPartyFrameRegex: ("string" == typeof x.thirdPartyFrameRegex ? new RegExp(x.thirdPartyFrameRegex) : x.thirdPartyFrameRegex) || /^d-\d+\.ampproject\.net$/,
            cdn: x.cdnUrl || wa("runtime-host") || "https://cdn.ampproject.org",
            cdnProxyRegex: va,
            localhostRegex: /^https?:\/\/localhost(:\d+)?$/,
            errorReporting: x.errorReportingUrl || "https://us-central1-amp-error-reporting.cloudfunctions.net/r",
            betaErrorReporting: x.betaErrorReportingUrl || "https://us-central1-amp-error-reporting.cloudfunctions.net/r-beta",
            localDev: x.localDev || !1,
            trustedViewerHosts: [/(^|\.)google\.(com?|[a-z]{2}|com?\.[a-z]{2}|cat)$/, /(^|\.)gmail\.(com|dev)$/],
            geoApi: x.geoApiUrl || wa("amp-geo-api")
        };
        function ya(a, b) {
            function c(h) {
                g = null;
                e = a.setTimeout(d, 100);
                b.apply(null, h)
            }
            function d() {
                e = 0;
                g && c(g)
            }
            let e = 0
              , g = null;
            return function(...h) {
                e ? g = h : c(h)
            }
        }
        self.__AMP_LOG = self.__AMP_LOG || {
            user: null,
            dev: null,
            userForEmbed: null
        };
        let y = self.__AMP_LOG;
        function za() {
            throw Error("failed to call initLogConstructor")
        }
        function z() {
            y.user || (y.user = za());
            return y.user
        }
        function Aa() {
            return y.dev || (y.dev = za())
        }
        function A(a, b, c, d) {
            z().assert(a, b, c, d, void 0, void 0, void 0, void 0, void 0, void 0, void 0)
        }
        function B(a, b) {
            a = a.__AMP_TOP || (a.__AMP_TOP = a);
            return D(a, b)
        }
        function E(a, b) {
            var c = F(a);
            c = G(c);
            return D(c, b)
        }
        function H(a, b) {
            a = F(a);
            a = G(a);
            return Ba(a, b) ? D(a, b) : null
        }
        function Ca(a, b) {
            return Da(G(a), b)
        }
        function F(a) {
            return a.nodeType ? B((a.ownerDocument || a).defaultView, "ampdoc").getAmpDoc(a) : a
        }
        function G(a) {
            a = F(a);
            return a.isSingleDoc() ? a.win : a
        }
        function D(a, b) {
            Ba(a, b);
            a = Ea(a)[b];
            a.obj || (a.obj = new a.ctor(a.context),
            a.context = null,
            a.resolve && a.resolve(a.obj));
            return a.obj
        }
        function Fa(a, b) {
            let c = Da(a, b);
            if (c)
                return c;
            a = Ea(a);
            a[b] = Ga();
            return a[b].promise
        }
        function Da(a, b) {
            let c = Ea(a)[b];
            if (c) {
                if (c.promise)
                    return c.promise;
                D(a, b);
                return c.promise = Promise.resolve(c.obj)
            }
            return null
        }
        function Ea(a) {
            let b = a.__AMP_SERVICES;
            b || (b = a.__AMP_SERVICES = {});
            return b
        }
        function Ba(a, b) {
            a = a.__AMP_SERVICES && a.__AMP_SERVICES[b];
            return !(!a || !a.ctor)
        }
        function Ga() {
            let a = new p
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
        function Ha(a, b, c) {
            let d = Ca(a, b);
            if (d)
                return d;
            let e = F(a);
            return e.whenExtensionsKnown().then((()=>{
                let g = e.getExtensionVersion(c);
                return g ? B(e.win, "extensions").waitForExtension(c, g) : null
            }
            )).then((g=>g ? Fa(G(a), b) : null))
        }
        function Ia(a, b, c={}) {
            Ha(a, "amp-analytics-instrumentation", "amp-analytics").then((d=>{
                d && d.triggerEventForTarget(a, b, c, !0)
            }
            ))
        }
        let I;
        function Ja(a, b, c) {
            let d = a
              , e = c
              , g = f=>{
                try {
                    return e(f)
                } catch (u) {
                    var k, m;
                    null === (k = (m = self).__AMP_REPORT_ERROR) || void 0 === k ? void 0 : k.call(m, u);
                    throw u
                }
            }
            ;
            let h = Ka();
            d.addEventListener(b, g, h ? void 0 : !1);
            return ()=>{
                var f;
                null === (f = d) || void 0 === f ? void 0 : f.removeEventListener(b, g, h ? void 0 : !1);
                g = d = e = null
            }
        }
        function Ka() {
            if (void 0 !== I)
                return I;
            I = !1;
            try {
                let a = {
                    get capture() {
                        I = !0
                    }
                };
                self.addEventListener("test-options", null, a);
                self.removeEventListener("test-options", null, a)
            } catch (a) {}
            return I
        }
        function J(a, b, c, d) {
            c = {
                detail: c
            };
            Object.assign(c, d);
            return new a.CustomEvent(b,c)
        }
        function La(a, b, c) {
            return Ja(a, b, c)
        }
        function Ma(a, b) {
            let c = b;
            let d = Ja(a, "mouseup", (e=>{
                try {
                    c(e)
                } finally {
                    c = null,
                    d()
                }
            }
            ));
            return d
        }
        function Na(a) {
            let b;
            let c = new Promise((d=>{
                b = Ma(a, d)
            }
            ));
            c.then(b, b);
            return c
        }
        function K(a, b, c) {
            b in a ? Object.defineProperty(a, b, {
                value: c,
                enumerable: !0,
                configurable: !0,
                writable: !0
            }) : a[b] = c;
            return a
        }
        K["default"] = K;
        K.__esModule = !0;
        function L(a) {
            for (var b = 1; b < arguments.length; b++) {
                var c = null != arguments[b] ? arguments[b] : {};
                b % 2 ? Oa(Object(c), !0).forEach((function(d) {
                    K(a, d, c[d])
                }
                )) : Object.getOwnPropertyDescriptors ? Object.defineProperties(a, Object.getOwnPropertyDescriptors(c)) : Oa(Object(c)).forEach((function(d) {
                    Object.defineProperty(a, d, Object.getOwnPropertyDescriptor(c, d))
                }
                ))
            }
            return a
        }
        function Oa(a, b) {
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
        L["default"] = L;
        L.__esModule = !0;
        function Pa(a, b) {
            let c = B(a, "platform");
            return c.isIos() && 11 == c.getMajorVersion() ? new Qa(b) : FormData.prototype.entries && FormData.prototype.delete ? new Ra(b) : new Sa(b)
        }
        class Sa {
            constructor(a) {
                this.C = a ? w(a) : Object.create(null)
            }
            append(a, b) {
                let c = String(a);
                this.C[c] = this.C[c] || [];
                this.C[c].push(String(b))
            }
            delete(a) {
                delete this.C[a]
            }
            entries() {
                let a = [];
                Object.keys(this.C).forEach((c=>{
                    this.C[c].forEach((d=>a.push([c, d])))
                }
                ));
                let b = 0;
                return {
                    next() {
                        return b < a.length ? {
                            value: a[b++],
                            done: !1
                        } : {
                            value: void 0,
                            done: !0
                        }
                    }
                }
            }
            getFormData() {
                let a = new FormData;
                Object.keys(this.C).forEach((b=>{
                    this.C[b].forEach((c=>a.append(b, c)))
                }
                ));
                return a
            }
        }
        class Ra {
            constructor(a) {
                this.D = new FormData(a);
                a && (a = na(a)) && a.name && this.append(a.name, a.value)
            }
            append(a, b) {
                this.D.append(a, b)
            }
            delete(a) {
                this.D.delete(a)
            }
            entries() {
                return this.D.entries()
            }
            getFormData() {
                return this.D
            }
        }
        class Qa extends Ra {
            constructor(a) {
                super(a);
                a && v(a.elements, (b=>{
                    "file" == b.type && 0 == b.files.length && (this.D.delete(b.name),
                    this.D.append(b.name, new Blob([]), ""))
                }
                ))
            }
            append(a, b, c) {
                b && "object" == typeof b && "" == b.name && 0 == b.size ? this.D.append(a, new Blob([]), c || "") : this.D.append(a, b)
            }
        }
        let Ta = new Set(["c", "v", "a", "ad"]);
        let Ua;
        let Va = a=>"string" == typeof a ? M(a) : a;
        function M(a) {
            Ua || (Ua = self.document.createElement("a"));
            var b = Ua;
            b.href = "";
            a = new URL(a,b.href);
            return a
        }
        function Wa(a, b, c) {
            if (!b)
                return a;
            let d = a.split("#", 2)
              , e = d[0].split("?", 2);
            let g = e[0] + (e[1] ? c ? `?${b}&${e[1]}` : `?${e[1]}&${b}` : `?${b}`);
            return g += d[1] ? `#${d[1]}` : ""
        }
        function Xa(a, b) {
            return `${encodeURIComponent(a)}=${encodeURIComponent(b)}`
        }
        function Ya(a) {
            let b = [];
            for (let d in a) {
                var c = a[d];
                if (null != c) {
                    c = r(c) ? c : [c];
                    for (let e = 0; e < c.length; e++)
                        b.push(Xa(d, c[e]))
                }
            }
            return b.join("&")
        }
        let Za = ["GET", "POST"];
        let N;
        let $a = "Webkit webkit Moz moz ms O o".split(" ")
          , ab = {
            getPropertyPriority: ()=>"",
            getPropertyValue: ()=>""
        };
        function bb(a, b, c) {
            var d = a.style;
            if (!b.startsWith("--")) {
                N || (N = Object.create(null));
                var e = N[b];
                if (!e) {
                    e = b;
                    if (void 0 === d[b]) {
                        var g = b.charAt(0).toUpperCase() + b.slice(1);
                        b: {
                            for (let h = 0; h < $a.length; h++) {
                                let f = $a[h] + g;
                                if (void 0 !== d[f]) {
                                    g = f;
                                    break b
                                }
                            }
                            g = ""
                        }
                        void 0 !== d[g] && (e = g)
                    }
                    N[b] = e
                }
                b = e
            }
            b && (b.startsWith("--") ? a.style.setProperty(b, c) : a.style[b] = c)
        }
        function cb(a, b) {
            void 0 === b && (b = a.hasAttribute("hidden"));
            b ? a.removeAttribute("hidden") : a.setAttribute("hidden", "")
        }
        function db(a) {
            let b = a.getRootNode();
            let c = null;
            let d = ()=>{
                let e = b.querySelector("textarea[autoexpand]");
                e && !c ? c = new eb(a) : !e && c && (c.dispose(),
                c = null)
            }
            ;
            Ja(b, "amp:dom-update", d);
            d()
        }
        class eb {
            constructor(a) {
                let b = a.getRootNode();
                this.N = b.ownerDocument || b;
                this.j = this.N.defaultView;
                this.ga = E(a, "viewport");
                this.P = [];
                this.P.push(La(b, "input", (e=>{
                    e = e.target;
                    "TEXTAREA" == e.tagName && e.hasAttribute("autoexpand") && fb(e)
                }
                )));
                this.P.push(La(b, "mousedown", (e=>{
                    1 == e.which && (e = e.target,
                    "TEXTAREA" == e.tagName && gb(e))
                }
                )));
                let c = b.querySelectorAll("textarea");
                this.P.push(La(b, "amp:dom-update", (()=>{
                    c = b.querySelectorAll("textarea")
                }
                )));
                let d = ya(this.j, (e=>{
                    e.relayoutAll && hb(c)
                }
                ));
                this.P.push(this.ga.onResize(d));
                ib(c)
            }
            dispose() {
                this.P.forEach((a=>a()))
            }
        }
        function ib(a) {
            Promise.all(q(a).map((b=>jb(b).then((c=>{
                c && b.removeAttribute("autoexpand")
            }
            )))))
        }
        function jb(a) {
            return E(a, "mutator").measureElement((()=>a.scrollHeight > a.clientHeight))
        }
        function hb(a) {
            v(a, (b=>{
                "TEXTAREA" == b.tagName && b.hasAttribute("autoexpand") && fb(b)
            }
            ))
        }
        function gb(a) {
            let b = E(a, "mutator");
            Promise.all([b.measureElement((()=>a.scrollHeight)), Na(a)]).then((c=>{
                let d = c[0];
                let e = 0;
                return b.measureMutateElement(a, (()=>{
                    e = a.scrollHeight
                }
                ), (()=>{
                    d != e && a.removeAttribute("autoexpand")
                }
                ))
            }
            ))
        }
        function fb(a) {
            let b = E(a, "mutator")
              , c = a.ownerDocument.defaultView;
            let d = 0
              , e = 0
              , g = 0;
            let h = kb(a);
            b.measureMutateElement(a, (()=>{
                let f = c.getComputedStyle(a) || ab;
                e = a.scrollHeight;
                let k = parseInt(f.getPropertyValue("max-height"), 10);
                g = isNaN(k) ? 1 / 0 : k;
                d = "content-box" == f.getPropertyValue("box-sizing") ? -parseInt(f.getPropertyValue("padding-top"), 10) + -parseInt(f.getPropertyValue("padding-bottom"), 10) : parseInt(f.getPropertyValue("border-top-width"), 10) + parseInt(f.getPropertyValue("border-bottom-width"), 10)
            }
            ), (()=>h.then((f=>{
                a.classList.toggle("i-amphtml-textarea-max", f + d > g);
                let k = "iAmphtmlHasExpanded"in a.dataset
                  , m = /google/i.test(c.navigator.vendor) ? 3 : 0;
                if (k || e <= f + m)
                    a.dataset.iAmphtmlHasExpanded = "",
                    bb(a, "height", `${f + d}px`)
            }
            ))))
        }
        function kb(a) {
            let b = a.ownerDocument
              , c = b.defaultView
              , d = b.body
              , e = E(a, "mutator")
              , g = a.cloneNode(!1);
            g.classList.add("i-amphtml-textarea-clone");
            let h = 0
              , f = 0
              , k = !1;
            return e.measureMutateElement(d, (()=>{
                let m = c.getComputedStyle(a) || ab
                  , u = parseInt(m.getPropertyValue("max-height"), 10);
                h = parseInt(m.getPropertyValue("width"), 10);
                k = isNaN(u) || a.scrollHeight < u
            }
            ), (()=>{
                k && (a.scrollTop = 0);
                bb(g, "width", `${h}px`);
                b.body.appendChild(g)
            }
            )).then((()=>e.measureMutateElement(d, (()=>{
                f = g.scrollHeight
            }
            ), (()=>{
                ka(g)
            }
            )))).then((()=>f))
        }
        let lb = {
            INPUT: !0,
            SELECT: !0,
            TEXTAREA: !0
        };
        function O(a) {
            let b = 0 < a.M && !a.Y;
            if (b !== a.sa) {
                a.h.classList.toggle("amp-form-dirty", b);
                let c = J(a.j, "amp:form-dirtiness-change", t({
                    isDirty: b
                }), {
                    bubbles: !0
                });
                a.h.dispatchEvent(c)
            }
            a.sa = b
        }
        function mb(a, b) {
            var c = b.hidden;
            if (lb[b.tagName] && b.name && !c && !ma(b)) {
                a: switch (b.tagName) {
                case "INPUT":
                    c = "checkbox" == b.type || "radio" == b.type ? !b.checked : !b.value;
                    break a;
                case "TEXTAREA":
                    c = !b.value;
                    break a;
                case "SELECT":
                    c = !1;
                    break a;
                default:
                    throw Error(`isFieldEmpty: ${b.tagName} is not a supported field element.`)
                }
                (c = c || pa(b)) || (a.fa ? (c = b.value,
                c = a.fa.get(b.name) === c) : c = !1);
                c ? (b = b.name,
                a.I[b] && (a.I[b] = !1,
                --a.M)) : (b = b.name,
                a.I[b] || (a.I[b] = !0,
                ++a.M))
            }
        }
        class nb {
            constructor(a, b) {
                this.h = a;
                this.j = b;
                this.M = 0;
                this.I = Object.create(null);
                this.fa = null;
                this.sa = this.Y = !1;
                this.ea();
                for (a = 0; a < this.h.elements.length; ++a)
                    mb(this, this.h.elements[a]);
                O(this)
            }
            onSubmitting() {
                this.Y = !0;
                O(this)
            }
            onSubmitError() {
                this.Y = !1;
                O(this)
            }
            onSubmitSuccess() {
                this.Y = !1;
                this.fa = Pa(this.j, this.h).getFormData();
                this.I = Object.create(null);
                this.M = 0;
                O(this)
            }
            ea() {
                this.h.addEventListener("input", this.ma.bind(this));
                this.h.addEventListener("reset", this.xa.bind(this));
                this.h.addEventListener("amp:form-value-change", this.ma.bind(this))
            }
            ma(a) {
                mb(this, a.target);
                O(this)
            }
            xa() {
                this.I = Object.create(null);
                this.M = 0;
                O(this)
            }
        }
        function ob(a) {
            var b = (a.ownerDocument || a).defaultView;
            b.FormProxy || (b.FormProxy = sb(b));
            let c = new b.FormProxy(a);
            "action"in c || tb(a, c);
            a.$p = c
        }
        function sb(a) {
            function b(g) {
                this.h = g
            }
            let c = b.prototype
              , d = a.Object
              , e = d.prototype;
            [a.HTMLFormElement, a.EventTarget].reduce(((g,h)=>{
                for (h = h && h.prototype; h && h !== e && !(0 <= g.indexOf(h)); )
                    g.push(h),
                    h = d.getPrototypeOf(h);
                return g
            }
            ), []).forEach((g=>{
                for (let h in g) {
                    let f = a.Object.getOwnPropertyDescriptor(g, h);
                    if (f && h.toUpperCase() != h && !h.startsWith("on") && !e.hasOwnProperty.call(c, h))
                        if ("function" == typeof f.value) {
                            let k = f.value;
                            c[h] = function() {
                                return k.apply(this.h, arguments)
                            }
                        } else {
                            let k = {};
                            f.get && (k.get = function() {
                                return f.get.call(this.h)
                            }
                            );
                            f.set && (k.set = function(m) {
                                return f.set.call(this.h, m)
                            }
                            );
                            a.Object.defineProperty(c, h, k)
                        }
                }
            }
            ));
            return b
        }
        function tb(a, b) {
            var c = a.ownerDocument.defaultView.HTMLFormElement.prototype.cloneNode.call(a, !1);
            for (let d in c) {
                if (d in b || d.toUpperCase() == d || d.startsWith("on"))
                    continue;
                let e = ub[d]
                  , g = a[d];
                if (e) {
                    if (e.access == P) {
                        let h;
                        if (g && g.nodeType) {
                            c = g;
                            let f = c.nextSibling
                              , k = c.parentNode;
                            k.removeChild(c);
                            try {
                                h = a[d]
                            } finally {
                                k.insertBefore(c, f)
                            }
                        } else
                            h = g;
                        Object.defineProperty(b, d, {
                            get() {
                                return h
                            }
                        })
                    } else if (e.access == Q) {
                        let h = e.attr || d;
                        Object.defineProperty(b, d, {
                            get() {
                                var f = b.getAttribute(h);
                                return null == f && void 0 !== e.def ? e.def : e.type == vb ? "true" === f : e.type == R ? null != f : e.type == wb ? (f = f || "",
                                H(a, "url").parse(f).href) : f
                            },
                            set(f) {
                                e.type == R && (f = f ? "" : null);
                                null != f ? b.setAttribute(h, f) : b.removeAttribute(h)
                            }
                        })
                    }
                } else
                    Object.defineProperty(b, d, {
                        get() {
                            return a[d]
                        },
                        set(h) {
                            a[d] = h
                        }
                    })
            }
        }
        var Q = 1
          , P = 2
          , wb = 1
          , vb = 2
          , R = 3;
        let ub = {
            acceptCharset: {
                access: Q,
                attr: "accept-charset"
            },
            accessKey: {
                access: Q,
                attr: "accesskey"
            },
            action: {
                access: Q,
                type: wb
            },
            attributes: {
                access: P
            },
            autocomplete: {
                access: Q,
                def: "on"
            },
            children: {
                access: P
            },
            dataset: {
                access: P
            },
            dir: {
                access: Q
            },
            draggable: {
                access: Q,
                type: vb,
                def: !1
            },
            elements: {
                access: P
            },
            encoding: {
                access: P
            },
            enctype: {
                access: Q
            },
            hidden: {
                access: Q,
                type: R,
                def: !1
            },
            id: {
                access: Q,
                def: ""
            },
            lang: {
                access: Q
            },
            localName: {
                access: P
            },
            method: {
                access: Q,
                def: "get"
            },
            name: {
                access: Q
            },
            noValidate: {
                access: Q,
                attr: "novalidate",
                type: R,
                def: !1
            },
            prefix: {
                access: P
            },
            spellcheck: {
                access: Q
            },
            style: {
                access: P
            },
            target: {
                access: Q,
                def: ""
            },
            title: {
                access: Q
            },
            translate: {
                access: Q
            }
        };
        class xb {
            constructor() {
                this.A = null
            }
            add(a) {
                this.A || (this.A = []);
                this.A.push(a);
                return ()=>{
                    this.remove(a)
                }
            }
            remove(a) {
                if (this.A) {
                    var b = this.A;
                    a = b.indexOf(a);
                    -1 != a && b.splice(a, 1)
                }
            }
            removeAll() {
                this.A && (this.A.length = 0)
            }
            fire(a) {
                if (this.A)
                    for (let b of this.A)
                        b(a)
            }
            getHandlerCount() {
                var a, b;
                return null !== (a = null === (b = this.A) || void 0 === b ? void 0 : b.length) && void 0 !== a ? a : 0
            }
        }
        class yb {
            constructor() {
                this.la = new xb
            }
            beforeSubmit(a) {
                return this.la.add(a)
            }
            fire(a) {
                this.la.fire(a)
            }
        }
        class zb {
            constructor(a, b) {
                this.da = b;
                this.ga = E(a, "viewport");
                this.ra = B(a.win, "vsync");
                this.ba = null;
                this.aa = "";
                this.Z = !1;
                this.H = a.win.document.createElement("div");
                cb(this.H, !1);
                this.H.classList.add("i-amphtml-validation-bubble");
                this.H.__BUBBLE_OBJ = this;
                a.getBody().appendChild(this.H)
            }
            isActiveOn(a) {
                return this.Z && a == this.ba
            }
            hide() {
                this.Z && (this.Z = !1,
                this.ba = null,
                this.aa = "",
                this.ra.run({
                    measure: void 0,
                    mutate: Ab
                }, {
                    bubbleElement: this.H
                }))
            }
            show(a, b) {
                this.isActiveOn(a) && b == this.aa || (this.Z = !0,
                this.ba = a,
                this.aa = b,
                this.ra.run({
                    measure: Bb,
                    mutate: Cb
                }, {
                    message: b,
                    targetElement: a,
                    bubbleElement: this.H,
                    viewport: this.ga,
                    id: this.da
                }))
            }
        }
        function Ab(a) {
            a.bubbleElement.removeAttribute("aria-alert");
            a.bubbleElement.removeAttribute("role");
            for (var b = a.bubbleElement; b.firstChild; )
                b.removeChild(b.firstChild);
            cb(a.bubbleElement, !1)
        }
        function Bb(a) {
            a.targetRect = a.viewport.getLayoutRect(a.targetElement)
        }
        function Cb(a) {
            for (var b = a.bubbleElement; b.firstChild; )
                b.removeChild(b.firstChild);
            let c = a.bubbleElement.ownerDocument.createElement("div");
            c.id = `bubble-message-${a.id}`;
            c.textContent = a.message;
            a.bubbleElement.setAttribute("aria-labeledby", c.id);
            a.bubbleElement.setAttribute("role", "alert");
            a.bubbleElement.setAttribute("aria-live", "assertive");
            a.bubbleElement.appendChild(c);
            cb(a.bubbleElement, !0);
            b = a.bubbleElement;
            a = {
                top: `${a.targetRect.top - 10}px`,
                left: `${a.targetRect.left + a.targetRect.width / 2}px`
            };
            for (let d in a)
                bb(b, d, a[d])
        }
        let Db, Eb, Fb = 0;
        function Gb(a, b) {
            v(b.elements, (c=>{
                "TEXTAREA" == c.tagName && a.checkInputValidity(c)
            }
            ))
        }
        class Hb {
            constructor(a) {
                this.form = a;
                this.ampdoc = F(a);
                this.mutator = E(a, "mutator");
                this.root = this.ampdoc.getRootNode();
                this.X = null
            }
            report() {}
            onBlur() {}
            onInput() {}
            inputs() {
                return this.form.querySelectorAll("input,select,textarea")
            }
            checkInputValidity(a) {
                if ("TEXTAREA" === a.tagName && a.hasAttribute("pattern") && (a.checkValidity() || "Please match the requested format." === a.validationMessage)) {
                    let b = a.getAttribute("pattern")
                      , c = new RegExp(`^${b}$`,"m").test(a.value);
                    a.setCustomValidity(c ? "" : "Please match the requested format.")
                }
                return a.checkValidity()
            }
            checkFormValidity(a) {
                Gb(this, a);
                return a.checkValidity()
            }
            reportFormValidity(a) {
                Gb(this, a);
                return a.reportValidity()
            }
            fireValidityEventIfNecessary() {
                let a = this.X;
                this.X = this.checkFormValidity(this.form);
                if (a !== this.X) {
                    var b = this.form;
                    b = J((b.ownerDocument || b).defaultView, this.X ? "valid" : "invalid", null, {
                        bubbles: !0
                    });
                    this.form.dispatchEvent(b)
                }
            }
        }
        class Ib extends Hb {
            report() {
                this.reportFormValidity(this.form);
                this.fireValidityEventIfNecessary()
            }
        }
        class Jb extends Hb {
            constructor(a) {
                super(a);
                let b = `i-amphtml-validation-bubble-${Fb++}`;
                this.R = new zb(this.ampdoc,b)
            }
            report() {
                let a = this.inputs();
                for (let b = 0; b < a.length; b++)
                    if (!this.checkInputValidity(a[b])) {
                        a[b].focus();
                        this.R.show(a[b], a[b].validationMessage);
                        break
                    }
                this.fireValidityEventIfNecessary()
            }
            onBlur(a) {
                "submit" != a.target.type && this.R.hide()
            }
            onInput(a) {
                a = a.target;
                this.R.isActiveOn(a) && (this.checkInputValidity(a) ? (a.removeAttribute("aria-invalid"),
                this.R.hide()) : (a.setAttribute("aria-invalid", "true"),
                this.R.show(a, a.validationMessage)))
            }
        }
        class Kb extends Hb {
            constructor(a) {
                super(a);
                this.Ca = this.form.id ? this.form.id : String(Date.now() + Math.floor(100 * Math.random()));
                this.ua = 0
            }
            reportInput(a) {
                let b = Lb(a);
                b && this.showValidationFor(a, b)
            }
            hideAllValidations() {
                let a = this.inputs();
                for (let b = 0; b < a.length; b++)
                    this.hideValidationFor(a[b])
            }
            getValidationFor(a, b) {
                if (!a.id)
                    return null;
                var c = a.validationMessage;
                c = "TEXTAREA" === a.tagName && "customError" === b && "Please match the requested format." === c ? "patternMismatch" : b;
                let d = "__AMP_VALIDATION_" + c;
                d in a || (a[d] = this.root.querySelector(`[visible-when-invalid=${c}][validation-for=${a.id}]`));
                return a[d]
            }
            showValidationFor(a, b) {
                let c = this.getValidationFor(a, b);
                if (c) {
                    c.textContent.trim() || (c.textContent = a.validationMessage);
                    a.__AMP_VISIBLE_VALIDATION = c;
                    var d = c.getAttribute("id");
                    d || (d = `i-amphtml-aria-desc-${this.Ca}-${this.ua++}`,
                    c.setAttribute("id", d));
                    a.setAttribute("aria-invalid", "true");
                    a.setAttribute("aria-describedby", d);
                    this.mutator.mutateElement(c, (()=>c.classList.add("visible")))
                }
            }
            hideValidationFor(a) {
                let b = this.getVisibleValidationFor(a);
                b && (delete a.__AMP_VISIBLE_VALIDATION,
                a.removeAttribute("aria-invalid"),
                a.removeAttribute("aria-describedby"),
                this.mutator.mutateElement(b, (()=>b.classList.remove("visible"))))
            }
            getVisibleValidationFor(a) {
                return a.__AMP_VISIBLE_VALIDATION
            }
            shouldValidateOnInteraction() {
                throw Error("Not Implemented")
            }
            onInteraction(a) {
                a = a.target;
                let b = !!a.checkValidity && this.shouldValidateOnInteraction(a);
                this.hideValidationFor(a);
                b && !this.checkInputValidity(a) && this.reportInput(a)
            }
            onBlur(a) {
                this.onInteraction(a)
            }
            onInput(a) {
                this.onInteraction(a)
            }
        }
        class Mb extends Kb {
            report() {
                this.hideAllValidations();
                let a = this.inputs();
                for (let b = 0; b < a.length; b++)
                    if (!this.checkInputValidity(a[b])) {
                        this.reportInput(a[b]);
                        a[b].focus();
                        break
                    }
                this.fireValidityEventIfNecessary()
            }
            shouldValidateOnInteraction(a) {
                return !!this.getVisibleValidationFor(a)
            }
        }
        class Nb extends Kb {
            report() {
                this.hideAllValidations();
                let a = null;
                let b = this.inputs();
                for (let c = 0; c < b.length; c++)
                    this.checkInputValidity(b[c]) || (a = a || b[c],
                    this.reportInput(b[c]));
                a && a.focus();
                this.fireValidityEventIfNecessary()
            }
            shouldValidateOnInteraction(a) {
                return !!this.getVisibleValidationFor(a)
            }
        }
        class Ob extends Kb {
            shouldValidateOnInteraction() {
                return !0
            }
            onInteraction(a) {
                super.onInteraction(a);
                this.fireValidityEventIfNecessary()
            }
        }
        class Pb extends Nb {
            shouldValidateOnInteraction() {
                return !0
            }
            onInteraction(a) {
                super.onInteraction(a);
                this.fireValidityEventIfNecessary()
            }
        }
        function Qb(a) {
            switch (a.getAttribute("custom-validation-reporting")) {
            case "as-you-go":
                return new Ob(a);
            case "show-all-on-submit":
                return new Nb(a);
            case "interact-and-submit":
                return new Pb(a);
            case "show-first-on-submit":
                return new Mb(a)
            }
            a.ownerDocument && void 0 === Db && (Db = !!document.createElement("form").reportValidity);
            return Db ? new Ib(a) : new Jb(a)
        }
        function Lb(a) {
            let b = ["badInput"];
            for (var c in a.validity)
                b.includes(c) || b.push(c);
            c = b.filter((d=>!0 === a.validity[d]));
            return c.length ? c[0] : null
        }
        function Rb(a, b) {
            return a.hasAttribute("verify-xhr") ? new Sb(a,b) : new Tb(a)
        }
        function Ub(a) {
            (a = a.h.elements) && v(a, (b=>{
                b.setCustomValidity("")
            }
            ))
        }
        class Vb {
            constructor(a) {
                this.h = a
            }
            onCommit() {
                Ub(this);
                a: {
                    var a = this.h.elements;
                    for (let b = 0; b < a.length; b++) {
                        let c = a[b];
                        if (!c.disabled && !pa(c)) {
                            a = !0;
                            break a
                        }
                    }
                    a = !1
                }
                return a ? this.qa() : Promise.resolve({
                    updatedElements: [],
                    errors: []
                })
            }
            qa() {
                return Promise.resolve({
                    updatedElements: [],
                    errors: []
                })
            }
        }
        class Tb extends Vb {
        }
        function Wb(a, b) {
            if (!a.T) {
                a.T = new ba;
                let c = ()=>a.T = null;
                a.T.then(c, c)
            }
            return a.T.add(b)
        }
        function Xb(a, b) {
            let c = []
              , d = a.na;
            a.na = b;
            for (let f = 0; f < b.length; f++) {
                var e = b[f]
                  , g = z().assertString(e.name, "Verification errors must have a name property");
                e = z().assertString(e.message, "Verification errors must have a message property");
                g = z().assertElement(a.h.querySelector(`[name="${g}"]`), "Verification error name property must match a field name");
                g.checkValidity() && (g.setCustomValidity(e),
                c.push(g))
            }
            let h = d.filter((f=>b.every((k=>f.name !== k.name)))).map((f=>a.h.querySelector(`[name="${f.name}"]`)));
            return {
                updatedElements: c.concat(h),
                errors: b
            }
        }
        class Sb extends Vb {
            constructor(a, b) {
                super(a);
                this.W = b;
                this.T = null;
                this.na = []
            }
            qa() {
                let a = this.W().then((()=>[]), (b=>Yb(b)));
                return Wb(this, a).then((b=>Xb(this, b)))
            }
        }
        function Yb(a) {
            return (a = a.response) ? a.json().then((b=>b.verifyErrors || []), (()=>[])) : Promise.resolve([])
        }
        function Zb(a, b, c, d, e={}) {
            let g = t({
                type: a.za
            })
              , h = d && d.successTemplate ? d.successTemplate : c;
            h && (g.successTemplate = {
                type: "amp-mustache",
                payload: h.innerHTML
            });
            let f = d && d.errorTemplate ? d.errorTemplate : null;
            f && (g.errorTemplate = {
                type: "amp-mustache",
                payload: f.innerHTML
            });
            e && Object.assign(g, e);
            a = b.xhrUrl;
            c = b.fetchOpt;
            b = L({}, c);
            if ((d = c.body) && "function" == typeof d.getFormData) {
                c = c.body;
                b.headers["Content-Type"] = "multipart/form-data;charset=utf-8";
                c = c.entries();
                d = [];
                for (e = c.next(); !e.done; e = c.next())
                    d.push(e.value);
                b.body = d
            }
            return t({
                originalRequest: {
                    input: a,
                    init: b
                },
                ampComponent: g
            })
        }
        class $b {
            constructor(a, b) {
                this.J = a;
                this.B = b;
                this.za = "amp-form"
            }
            isEnabled() {
                let a = this.J.getAmpDoc();
                return a.isSingleDoc() && a.getRootNode().documentElement.hasAttribute("allow-viewer-render-template") ? this.J.hasCapability("viewerRenderTemplate") : !1
            }
            assertTrustedViewer(a) {
                return this.J.isTrustedViewer().then((b=>{
                    A(b, "Refused to attempt SSR in untrusted viewer: ", a)
                }
                ))
            }
            ssr(a, b, c=null, d={}) {
                let e;
                c || (e = this.B.maybeFindTemplate(a));
                return this.assertTrustedViewer(a).then((()=>this.J.sendMessageAwaitResponse("viewerRenderTemplate", Zb(this, b, e, c, d))))
            }
            applySsrOrCsrTemplate(a, b) {
                let c;
                this.isEnabled() ? (A("string" === typeof b.html, "Skipping template rendering due to failed fetch"),
                c = this.assertTrustedViewer(a).then((()=>this.B.findAndSetHtmlForTemplate(a, b.html)))) : c = r(b) ? this.B.findAndRenderTemplateArray(a, b) : this.B.findAndRenderTemplate(a, b);
                return c
            }
        }
        function ac(a, b) {
            let c = a.getHeadNode()
              , d = bc(c, cc(c));
            if (b) {
                let g = a.getRootNode();
                if (dc(g, d))
                    b(d);
                else
                    var e = setInterval((()=>{
                        dc(g, d) && (clearInterval(e),
                        b(d))
                    }
                    ), 4)
            }
        }
        function bc(a, b) {
            let c = a.__AMP_CSS_SM;
            c || (c = a.__AMP_CSS_SM = Object.create(null));
            let d = ec(a, c, "amp-extension=amp-form");
            if (d)
                return "STYLE" == d.tagName && d.textContent !== b && (d.textContent = b),
                d;
            let e = (a.ownerDocument || a).createElement("style");
            e.textContent = b;
            let g = null;
            e.setAttribute("amp-extension", "amp-form");
            g = ec(a, c, "amp-runtime");
            la(a, e, g);
            return c["amp-extension=amp-form"] = e
        }
        function ec(a, b, c) {
            return b[c] ? b[c] : (a = a.querySelector(`style[${c}], link[${c}]`)) ? b[c] = a : null
        }
        function cc(a) {
            return (a = a.__AMP_CSS_TR) ? a('form.amp-form-submit-error [submit-error],form.amp-form-submit-success [submit-success],form.amp-form-submitting [submitting]{display:block}textarea[autoexpand]:not(.i-amphtml-textarea-max){overflow:hidden!important}.i-amphtml-textarea-clone{visibility:hidden;position:absolute;top:-9999px;left:-9999px;height:0!important}.i-amphtml-validation-bubble{transform:translate(-50%,-100%);background-color:#fff;box-shadow:0 5px 15px 0 rgba(0,0,0,.5);max-width:200px;position:absolute;display:block;box-sizing:border-box;padding:10px;border-radius:5px}.i-amphtml-validation-bubble:after{content:" ";position:absolute;bottom:-8px;left:30px;width:0;height:0;border-left:8px solid transparent;border-right:8px solid transparent;border-top:8px solid #fff}[visible-when-invalid]{color:red}\n/*# sourceURL=/extensions/amp-form/0.1/amp-form.css*/') : 'form.amp-form-submit-error [submit-error],form.amp-form-submit-success [submit-success],form.amp-form-submitting [submitting]{display:block}textarea[autoexpand]:not(.i-amphtml-textarea-max){overflow:hidden!important}.i-amphtml-textarea-clone{visibility:hidden;position:absolute;top:-9999px;left:-9999px;height:0!important}.i-amphtml-validation-bubble{transform:translate(-50%,-100%);background-color:#fff;box-shadow:0 5px 15px 0 rgba(0,0,0,.5);max-width:200px;position:absolute;display:block;box-sizing:border-box;padding:10px;border-radius:5px}.i-amphtml-validation-bubble:after{content:" ";position:absolute;bottom:-8px;left:30px;width:0;height:0;border-left:8px solid transparent;border-right:8px solid transparent;border-top:8px solid #fff}[visible-when-invalid]{color:red}\n/*# sourceURL=/extensions/amp-form/0.1/amp-form.css*/'
        }
        function dc(a, b) {
            let c = a.styleSheets;
            for (a = 0; a < c.length; a++)
                if (c[a].ownerNode == b)
                    return !0;
            return !1
        }
        let fc = ["amp-selector"];
        function gc(a, b) {
            let c = a.h.getAttribute(b);
            if (c) {
                let d = H(a.o, "url");
                d.assertHttpsUrl(c, a.h, b);
                A(!d.isProxyOrigin(c), "form %s should not be on AMP CDN: %s", b, a.h)
            }
            return c
        }
        function hc(a) {
            let b = a.h.getAttribute("enctype");
            return "application/x-www-form-urlencoded" === b || "multipart/form-data" === b ? b : "multipart/form-data"
        }
        function ic(a) {
            if ("submitting" === a.G)
                return n();
            S(a, "verifying");
            T(a, "verify", null, 3);
            return jc(a, kc(a)).then((()=>lc(a)))
        }
        function mc(a) {
            Ha(a.o, "inputmask", "amp-inputmask").then((b=>{
                b && b.install()
            }
            ))
        }
        function nc(a) {
            if (!xa.cdnProxyRegex.test(Va(a.j.location).origin) && a.h.hasAttribute("data-initialize-from-url")) {
                var b = ["SELECT", "TEXTAREA"]
                  , c = "color date datetime-local email hidden month number range search tel text time url week".split(" ")
                  , d = ["checkbox", "radio"]
                  , e = (h,f)=>{
                    if (!h.hasAttribute("data-amp-replace") && h.hasAttribute("data-allow-initialization")) {
                        f = g[f] || "";
                        var k = h.getAttribute("type") || "text"
                          , m = h.tagName;
                        "INPUT" === m ? c.includes(k.toLocaleLowerCase()) ? h.value !== f && (h.value = f) : d.includes(k) && (f = h.value === f,
                        h.checked !== f && (h.checked = f)) : b.includes(m) && h.value !== f && (h.value = f)
                    }
                }
                  , g = ta(a.j.location.search);
                Object.keys(g).forEach((h=>{
                    let f = a.h.elements[h];
                    f && (f.nodeType === Node.ELEMENT_NODE ? e(f, h) : f.length && v(f, (k=>e(k, h))))
                }
                ))
            }
        }
        function oc(a) {
            let b = a.h.querySelectorAll("input[type=password],input[type=file]");
            A(0 == b.length, "input[type=password] or input[type=file] may only appear in form[method=post]")
        }
        function pc(a) {
            if (a.ca)
                return a.ca;
            let b = a.h.querySelectorAll(fc.join(","))
              , c = q(b).map((d=>d.build()));
            return a.ca = qc(a, c, 2e3)
        }
        function rc(a) {
            a.h.reset();
            S(a, "initial");
            a.h.classList.remove("user-valid");
            a.h.classList.remove("user-invalid");
            let b = a.h.querySelectorAll(".user-valid, .user-invalid");
            v(b, (d=>{
                d.classList.remove("user-valid");
                d.classList.remove("user-invalid")
            }
            ));
            let c = a.h.querySelectorAll(".visible[validation-for]");
            v(c, (d=>{
                d.classList.remove("visible")
            }
            ));
            sc(a.h)
        }
        function qc(a, b, c) {
            return Promise.race([Promise.all(b), a.Ba.promise(c)])
        }
        function S(a, b) {
            let c = a.G;
            a.h.classList.remove(`amp-form-${c}`);
            a.h.classList.add(`amp-form-${b}`);
            var d = a.h.querySelector(`[${c}]`);
            if (d) {
                /^[\w-]+$/.test("i-amphtml-rendered");
                var e = d.querySelector;
                var g = "> [i-amphtml-rendered]".replace(/^|,/g, "$&:scope ");
                d = e.call(d, g);
                d && ka(d)
            }
            a.G = b
        }
        function U(a, b) {
            r(b) && (b = {});
            let c = a.h.querySelector(`[${a.G}]`);
            let d = n();
            if (c) {
                let e = `rendered-message-${a.da}`;
                c.setAttribute("role", "alert");
                c.setAttribute("aria-labeledby", e);
                c.setAttribute("aria-live", "assertive");
                a.B.hasTemplate(c) ? d = a.O.applySsrOrCsrTemplate(c, b).then((g=>{
                    let h;
                    r(g) ? 1 === g.length ? h = g[0] : (h = document.createElement("div"),
                    g.forEach((f=>h.appendChild(f)))) : h = g;
                    h.id = e;
                    h.setAttribute("i-amphtml-rendered", "");
                    return a.ka.mutateElement(c, (()=>{
                        c.appendChild(h);
                        let f = J(a.j, "amp:dom-update", null, {
                            bubbles: !0
                        });
                        c.dispatchEvent(f)
                    }
                    ))
                }
                )) : a.ka.mutateElement(c, (()=>{}
                ))
            }
            return d
        }
        function T(a, b, c, d) {
            c = J(a.j, `amp-form.${b}`, t({
                response: c
            }));
            a.L.trigger(a.h, b, c, d)
        }
        function V(a, b) {
            let c = a.O.isEnabled();
            A(!1 === c, "[amp-form]: viewerRenderTemplate | %s", b)
        }
        function W(a, b) {
            V(a, "Form analytics not supported");
            let c = t({})
              , d = w(a.h);
            for (let e in d)
                Object.prototype.hasOwnProperty.call(d, e) && (c["formFields[" + e + "]"] = d[e].join(","));
            c.formId = a.h.id;
            try {
                Ia(a.h, b, c)
            } catch (e) {
                Aa().error("amp-form", "Sending analytics failed:", e)
            }
        }
        function tc(a) {
            void 0 === Eb && (Eb = !!a.j.document.createElement("input").checkValidity);
            if (Eb) {
                let b = uc(a.h);
                if (a.oa)
                    return a.S.report(),
                    b
            }
            return !0
        }
        function vc(a, b, c) {
            try {
                let f = {
                    form: a.h,
                    actionXhrMutator: a.setXhrAction.bind(a)
                };
                a.ia.fire(f)
            } catch (f) {
                Aa().error("amp-form", "Form submit service failed: %s", f)
            }
            let d = kc(a)
              , e = a.h.getElementsByClassName("i-amphtml-async-input");
            a.V.onSubmitting();
            if (!a.K && "GET" == a.F) {
                V(a, "Non-XHR GETs not supported.");
                oc(a);
                if (0 === e.length) {
                    for (let f = 0; f < d.length; f++)
                        a.pa.expandInputValueSync(d[f]);
                    wc(a, !c);
                    a.V.onSubmitSuccess();
                    return n()
                }
                c && c.preventDefault()
            }
            S(a, "submitting");
            let g = []
              , h = [];
            h.push(jc(a, d));
            v(e, (f=>{
                let k = xc(a, f);
                f.classList.contains("i-async-require-action") ? g.push(k) : h.push(k)
            }
            ));
            return Promise.all(g).then((()=>qc(a, h, 1e4).then((()=>{
                if (a.K)
                    var f = yc(a, b);
                else
                    "POST" == a.F ? A(!1, "Only XHR based (via action-xhr attribute) submissions are supported for POST requests. %s", a.h) : "GET" == a.F && wc(a, !0),
                    f = n();
                return f
            }
            ), (f=>zc(a, f, b)))), (f=>zc(a, f, b)))
        }
        function kc(a) {
            return a.h.querySelectorAll('[type="hidden"][data-amp-replace]')
        }
        function wc(a, b) {
            W(a, "amp-form-submit");
            b && a.h.submit();
            S(a, "initial")
        }
        function jc(a, b) {
            let c = [];
            for (let d = 0; d < b.length; d++)
                c.push(a.pa.expandInputValueAsync(b[d]));
            return qc(a, c, 100)
        }
        function xc(a, b) {
            return b.getImpl().then((c=>c.getValue())).then((c=>{
                var d = b.getAttribute("name");
                d = a.h.querySelector(`input[name=${CSS.escape(d)}]`);
                if (!d) {
                    d = t({
                        name: b.getAttribute("name"),
                        hidden: "true"
                    });
                    var e = a.j.document.createElement("input");
                    for (let g in d)
                        e.setAttribute(g, d[g]);
                    d = e
                }
                d.setAttribute("value", c);
                a.h.appendChild(d)
            }
            ))
        }
        function zc(a, b, c) {
            let d = {};
            b && b.message && (d.error = b.message);
            return X(a, b, d, c)
        }
        function X(a, b, c, d, e) {
            S(a, "submit-error");
            z().error("amp-form", "Form submission failed: %s", b);
            return aa((()=>{
                U(a, c).then((()=>{
                    T(a, "submit-error", void 0 === e ? c : e, d - 1);
                    a.V.onSubmitError()
                }
                ))
            }
            ))
        }
        function yc(a, b) {
            let c;
            a.O.isEnabled() ? c = Ac(a, b) : (Bc(a, b),
            c = a.W(a.K, a.F).then((d=>Cc(a, d, b)), (d=>Dc(a, d, b))));
            return c
        }
        function lc(a) {
            let b = q(a.h.querySelectorAll(`[${CSS.escape("no-verify")}]`)).map((c=>c.name || c.id));
            return a.W(a.Ga, a.F, {
                ["__amp_form_verify"]: !0
            }, b)
        }
        function Ac(a, b) {
            let c = w(a.h);
            return U(a, c).then((()=>a.L.trigger(a.h, "submit", null, b))).then((()=>{
                let d = a.requestForFormFetch(a.K, a.F);
                var e = d.fetchOpt || {};
                var g = e.method;
                void 0 === g ? g = "GET" : (g = g.toUpperCase(),
                Za.includes(g));
                e.method = g;
                e.headers = e.headers || t({});
                d.fetchOpt = e;
                g = d.xhrUrl;
                e = (e = d.fetchOpt) || {};
                var h = a.j;
                h = h.origin || M(h.location.href).origin;
                g = M(g).origin;
                h == g && (e.headers = e.headers || {},
                e.headers["AMP-Same-Origin"] = "true");
                d.fetchOpt = e;
                g = a.j;
                e = d.xhrUrl;
                if (!1 !== d.fetchOpt.ampCors) {
                    h = M(e);
                    h = ta(h.search);
                    A(!("__amp_source_origin"in h), "Source origin is not allowed in %s", e);
                    g = g.location.href;
                    g = Va(g);
                    if (xa.cdnProxyRegex.test(Va(g).origin)) {
                        h = g.pathname.split("/");
                        A(Ta.has(h[1]), "Unknown path prefix in url %s", g.href);
                        var f = h[2]
                          , k = "s" == f ? "https://" + decodeURIComponent(h[3]) : "http://" + decodeURIComponent(f);
                        A(0 < k.indexOf("."), "Expected a . in origin %s", k);
                        h.splice(1, "s" == f ? 3 : 2);
                        h = k + h.join("/");
                        f = (f = g.search) && "?" != f ? (f = f.replace(/[?&](amp_(js[^&=]*|gsa|r|kit)|usqp)\b[^&]*/g, "").replace(/^[?&]/, "")) ? "?" + f : "" : "";
                        g = h + f + (g.hash || "")
                    } else
                        g = g.href;
                    g = M(g).origin;
                    e = Wa(e, Xa("__amp_source_origin", g), void 0)
                }
                d.xhrUrl = e;
                e = a.O;
                g = e.ssr;
                h = a.h;
                let m;
                (f = a.h.querySelector("[submit-success]")) && (m = a.B.maybeFindTemplate(f));
                let u;
                (f = a.h.querySelector("[submit-error]")) && (u = a.B.maybeFindTemplate(f));
                return g.call(e, h, d, {
                    successTemplate: m,
                    errorTemplate: u
                })
            }
            )).then((d=>Ec(a, d, b)), (d=>{
                let e = {};
                d && d.message && (e.error = d.message);
                return X(a, d, e, b)
            }
            ))
        }
        function Bc(a, b) {
            W(a, "amp-form-submit");
            let c = w(a.h);
            U(a, c).then((()=>{
                a.L.trigger(a.h, "submit", null, b)
            }
            ))
        }
        function Cc(a, b, c) {
            return a.ha.xssiJson(b, a.getXssiPrefix()).then((d=>Fc(a, d, c)), (d=>z().error("amp-form", "Failed to parse response JSON: %s", d))).then((()=>{
                W(a, "amp-form-submit-success");
                Gc(a, b)
            }
            ))
        }
        function Dc(a, b, c) {
            return (b && b.response ? a.ha.xssiJson(b.response, a.getXssiPrefix()).catch((()=>null)) : Promise.resolve(null)).then((d=>{
                X(a, b, d, c);
                W(a, "amp-form-submit-error");
                Gc(a, b.response)
            }
            ))
        }
        function Ec(a, b, c) {
            var d = b.init;
            let e = ha(b.body, (g=>z().error("amp-form", "Failed to parse response JSON: %s", g)));
            return d && (d = d.status,
            300 <= d) ? X(a, d, b, c, e) : Fc(a, b, c, e)
        }
        function Fc(a, b, c, d) {
            S(a, "submit-success");
            return aa((()=>{
                U(a, b || {}).then((()=>{
                    T(a, "submit-success", void 0 === d ? b : d, c - 1);
                    a.V.onSubmitSuccess()
                }
                ))
            }
            ))
        }
        function Gc(a, b) {
            V(a, "Redirects not supported.");
            if (b && b.headers) {
                var c = b.headers.get("AMP-Redirect-To");
                if (c) {
                    A(!a.wa, "Redirects not supported in AMP4Email.", a.h);
                    A("_blank" != a.Aa, "Redirecting to target=_blank using AMP-Redirect-To is currently not supported, use target=_top instead. %s", a.h);
                    try {
                        let d = H(a.o, "url");
                        d.assertAbsoluteHttpOrHttpsUrl(c);
                        d.assertHttpsUrl(c, "AMP-Redirect-To", "Url")
                    } catch (d) {
                        A(!1, "The `AMP-Redirect-To` header value must be an absolute URL starting with https://. Found %s", c)
                    }
                    E(a.o, "navigation").navigateTo(a.j, c, "AMP-Redirect-To")
                }
            }
        }
        class Hc {
            constructor(a, b) {
                try {
                    ob(a)
                } catch (c) {
                    Aa().error("amp-form", "form proxy failed to install", c)
                }
                a.__AMP_FORM = this;
                this.da = b;
                this.N = a.ownerDocument;
                this.j = this.N.defaultView;
                this.Ba = D(this.j, "timer");
                this.h = a;
                this.o = F(this.h);
                this.ca = null;
                this.pa = H(this.o, "url-replace");
                this.B = E(this.o, "templates");
                this.ha = B(this.j, "xhr");
                this.L = H(this.o, "action");
                this.ka = E(this.o, "mutator");
                this.J = E(this.o, "viewer");
                this.O = new $b(this.J,this.B);
                this.F = (this.h.getAttribute("method") || "GET").toUpperCase();
                this.Aa = this.h.getAttribute("target");
                this.K = gc(this, "action-xhr");
                this.Ga = gc(this, "verify-xhr");
                this.va = hc(this);
                this.oa = !this.h.hasAttribute("novalidate");
                this.h.setAttribute("novalidate", "");
                this.oa || this.h.setAttribute("amp-novalidate", "");
                this.h.classList.add("i-amphtml-form");
                this.G = "initial";
                b = this.h.elements;
                for (let c = 0; c < b.length; c++) {
                    let {name: d} = b[c];
                    A("__amp_source_origin" != d && "__amp_form_verify" != d, "Illegal input name, %s found: %s", d, b[c])
                }
                this.V = new nb(this.h,this.j);
                this.S = Qb(this.h);
                this.Da = Rb(this.h, (()=>ic(this)));
                this.L.addToAllowlist("FORM", ["clear", "submit"], ["email"]);
                this.L.installActionHandler(this.h, this.ta.bind(this));
                this.ea();
                mc(this);
                nc(this);
                this.ia = this.ya = this.Fa = null;
                Fa(G(a), "form-submit-service").then((c=>{
                    this.ia = c
                }
                ));
                this.wa = this.N && fa(this.N)
            }
            getXssiPrefix() {
                return this.h.getAttribute("xssi-prefix")
            }
            requestForFormFetch(a, b, c, d) {
                let e, g, h = t({
                    Accept: "application/json"
                });
                if ("GET" == b || "HEAD" == b) {
                    oc(this);
                    let f = w(this.h);
                    d && d.forEach((k=>delete f[k]));
                    c && ea(f, c);
                    e = Wa(a, Ya(f))
                } else {
                    e = a;
                    "application/x-www-form-urlencoded" === this.va ? (g = Ya(w(this.h)),
                    h = t({
                        Accept: "application/json",
                        "Content-Type": "application/x-www-form-urlencoded"
                    })) : g = Pa(this.j, this.h);
                    d && d.forEach((f=>g.delete(f)));
                    for (let f in c)
                        g.append(f, c[f])
                }
                return {
                    xhrUrl: e,
                    fetchOpt: t({
                        body: g,
                        method: b,
                        credentials: "include",
                        headers: h
                    })
                }
            }
            setXhrAction(a) {
                this.K = a
            }
            ta(a) {
                if (!a.satisfiesTrust(2))
                    return null;
                if ("submit" == a.method)
                    return pc(this).then((()=>"submitting" != this.G && tc(this) ? vc(this, a.trust, null) : Promise.resolve(null)));
                "clear" === a.method && rc(this);
                return null
            }
            ea() {
                this.o.whenNextVisible().then((()=>{
                    let a = this.h.querySelector("[autofocus]");
                    if (a)
                        try {
                            a.focus()
                        } catch (b) {}
                }
                ));
                this.h.addEventListener("submit", this.ja.bind(this), !0);
                this.h.addEventListener("blur", (a=>{
                    Y(a.target);
                    this.S.onBlur(a)
                }
                ), !0);
                this.h.addEventListener("amp:form-value-change", (a=>{
                    Y(a.target);
                    this.S.onInput(a)
                }
                ), !0);
                this.O.isEnabled() || this.h.addEventListener("change", (a=>{
                    this.Da.onCommit().then((b=>{
                        let c = b.errors;
                        b.updatedElements.forEach(Y);
                        this.S.onBlur(a);
                        "verifying" === this.G && (c.length ? (S(this, "verify-error"),
                        U(this, t({
                            verifyErrors: c
                        })).then((()=>{
                            T(this, "verify-error", c, 2)
                        }
                        ))) : S(this, "initial"))
                    }
                    ))
                }
                ));
                this.h.addEventListener("input", (a=>{
                    Y(a.target);
                    this.S.onInput(a)
                }
                ))
            }
            ja(a) {
                if ("submitting" == this.G || !tc(this))
                    return a.stopImmediatePropagation(),
                    a.preventDefault(),
                    Promise.resolve(null);
                (this.K || "POST" == this.F) && a.preventDefault();
                return vc(this, 3, a)
            }
            W(a, b, c, d) {
                V(this, "XHRs should be proxied.");
                a = this.requestForFormFetch(a, b, c, d);
                return this.ha.fetch(a.xhrUrl, a.fetchOpt)
            }
            Ha() {
                return this.ya
            }
            Ia() {
                return this.Fa
            }
        }
        function uc(a) {
            let b = a.querySelectorAll("input,select,textarea,fieldset");
            v(b, (c=>Z(c)));
            return Z(a)
        }
        function sc(a) {
            let b = document.createElement("input");
            for (let c in b.validity) {
                let d = a.querySelectorAll(`.${CSS.escape(c)}`);
                v(d, (e=>{
                    e.classList.remove(c)
                }
                ))
            }
        }
        function Z(a, b=!1) {
            if (!a.checkValidity)
                return !0;
            let c = !1;
            var d = a.classList.contains("user-valid") ? "valid" : a.classList.contains("user-invalid") ? "invalid" : "none";
            let e = a.checkValidity();
            "valid" != d && e ? (a.classList.add("user-valid"),
            a.classList.remove("user-invalid"),
            c = "invalid" == d) : "invalid" == d || e || (a.classList.add("user-invalid"),
            a.classList.remove("user-valid"),
            c = !0);
            if (a.validity)
                for (var g in a.validity)
                    a.classList.toggle(g, a.validity[g]);
            if (b && c) {
                d = ja(a);
                for (g = 0; g < d.length; g++)
                    Z(d[g]);
                a.form && Z(a.form)
            }
            return e
        }
        function Y(a) {
            Z(a, !0)
        }
        function Ic(a) {
            let b = new p;
            ac(a, b.resolve);
            return b.promise
        }
        function Jc(a) {
            return a.whenReady().then((()=>{
                let b = a.getRootNode();
                Kc(b.querySelectorAll("form"));
                db(a);
                Lc(b);
                Mc(b)
            }
            ))
        }
        function Kc(a) {
            a && v(a, ((b,c)=>{
                b.__AMP_FORM || new Hc(b,`amp-form-${c}`)
            }
            ))
        }
        function Lc(a) {
            a.addEventListener("amp:dom-update", (()=>{
                Kc(a.querySelectorAll("form"))
            }
            ))
        }
        function Mc(a) {
            a.addEventListener("keydown", (b=>{
                if (!b.defaultPrevented && "Enter" == b.key && (b.ctrlKey || b.metaKey) && "TEXTAREA" === b.target.tagName) {
                    var c = b.target.form
                      , d = c ? c.__AMP_FORM || null : null;
                    d && (d.ja(b),
                    b.preventDefault())
                }
            }
            ))
        }
        class Nc {
            constructor(a) {
                this.Ea = Ic(a).then((()=>Jc(a)))
            }
            whenInitialized() {
                return this.Ea
            }
        }
        AMP.registerServiceForDoc("form-submit-service", yb);
        AMP.registerServiceForDoc("amp-form", Nc)
    }
});
//# sourceMappingURL=amp-form-0.1.mjs.map
