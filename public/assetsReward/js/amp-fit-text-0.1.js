(self.AMP = self.AMP || []).push({
    m: 1,
    v: "2111152338000",
    n: "amp-fit-text",
    ev: "0.1",
    l: true,
    f: function(AMP, _) {
        function h(a) {
            let b = parseFloat(a);
            return "number" === typeof b && isFinite(b) ? b : void 0
        }
        let l;
        let m = "Webkit webkit Moz moz ms O o".split(" ");
        function n(a, b, c) {
            if (b.startsWith("--"))
                return b;
            l || (l = Object.create(null));
            let e = l[b];
            if (!e || c) {
                e = b;
                if (void 0 === a[b]) {
                    var d = b.charAt(0).toUpperCase() + b.slice(1);
                    a: {
                        for (let f = 0; f < m.length; f++) {
                            let k = m[f] + d;
                            if (void 0 !== a[k]) {
                                d = k;
                                break a
                            }
                        }
                        d = ""
                    }
                    let g = d;
                    void 0 !== a[g] && (e = g)
                }
                c || (l[b] = e)
            }
            return e
        }
        function p(a, b, c) {
            (b = n(a.style, b, void 0)) && (b.startsWith("--") ? a.style.setProperty(b, c) : a.style[b] = c)
        }
        function q(a, b) {
            function c(f) {
                g = null;
                d = a.setTimeout(e, 100);
                b.apply(null, f)
            }
            function e() {
                d = 0;
                g && c(g)
            }
            let d = 0
              , g = null;
            return function(...f) {
                d ? g = f : c(f)
            }
        }
        /* https://mths.be/cssescape v1.5.1 by @mathias | MIT license */
        function r(a, b) {
            let c = [];
            for (a = a.firstChild; a; a = a.nextSibling)
                b(a) && c.push(a);
            return c
        }
        function t(a) {
            return r(a, (b=>{
                {
                    let c;
                    "string" == typeof b ? c = b : b.nodeType === Node.ELEMENT_NODE && (c = b.tagName);
                    b = c && c.toLowerCase().startsWith("i-") ? !0 : b.nodeType !== Node.ELEMENT_NODE ? !1 : b.hasAttribute("placeholder") || b.hasAttribute("fallback") || b.hasAttribute("overflow")
                }
                return !b
            }
            ))
        }
        function u(a) {
            if (a.hasAttribute("i-amphtml-ssr"))
                return v(a);
            let b = a.ownerDocument
              , c = b.createElement("div");
            c.classList.add("i-amphtml-fill-content");
            c.classList.add("i-amphtml-fit-text-content");
            let e = b.createElement("div");
            e.classList.add("i-amphtml-fit-text-content-wrapper");
            c.appendChild(e);
            let d = b.createElement("div");
            d.classList.add("i-amphtml-fit-text-measurer");
            t(a).forEach((g=>e.appendChild(g)));
            w(e, d);
            a.appendChild(c);
            a.appendChild(d);
            return {
                content: c,
                contentWrapper: e,
                measurer: d
            }
        }
        function v(a) {
            let b = a.querySelector(`.${CSS.escape("i-amphtml-fit-text-content")}`)
              , c = a.querySelector(`.${CSS.escape("i-amphtml-fit-text-content-wrapper")}`);
            a = a.querySelector(`.${CSS.escape("i-amphtml-fit-text-measurer")}`);
            if (!b || !c || !a)
                throw Error("Invalid server render");
            return {
                content: b,
                contentWrapper: c,
                measurer: a
            }
        }
        function w(a, b) {
            for (; b.firstChild; )
                b.removeChild(b.firstChild);
            let c = b.ownerDocument.createDocumentFragment();
            for (a = a.firstChild; a; a = a.nextSibling)
                c.appendChild(a.cloneNode(!0));
            b.appendChild(c)
        }
        function x(a) {
            let b = a.o.offsetHeight;
            var c = a.j;
            var e = a.o.offsetWidth;
            var d = a.C
              , g = a.B;
            for (g++; 1 < g - d; ) {
                let f = Math.floor((d + g) / 2);
                p(c, "fontSize", `${f}px`);
                let k = c.offsetWidth;
                c.offsetHeight > b || k > e ? g = f : d = f
            }
            e = d;
            p(a.h, "fontSize", `${e}px`);
            c = a.h;
            a = a.j;
            p(a, "fontSize", `${e}px`);
            a = a.offsetHeight > b;
            e *= 1.15;
            d = Math.floor(b / e);
            c.classList.toggle("i-amphtml-fit-text-content-overflown", a);
            a = {
                lineClamp: a ? d : "",
                maxHeight: a ? `${e * d}px` : ""
            };
            for (let f in a)
                p(c, f, a[f])
        }
        class y extends AMP.BaseElement {
            static prerenderAllowed() {
                return !0
            }
            constructor(a) {
                super(a);
                this.j = this.h = this.o = null;
                this.B = this.C = -1;
                this.A = null;
                this.D = ""
            }
            isLayoutSupported(a) {
                return "fixed" == a || "fixed-height" == a || "responsive" == a || "fill" == a || "flex-item" == a || "fluid" == a || "intrinsic" == a
            }
            buildCallback() {
                let a = this.element
                  , {content: b, contentWrapper: c, measurer: e} = u(a);
                this.o = b;
                this.h = c;
                this.j = e;
                this.C = h(a.getAttribute("min-font-size")) || 6;
                this.B = h(a.getAttribute("max-font-size")) || 72;
                Object.defineProperty(this.element, "textContent", {
                    set: d=>{
                        this.D = d;
                        this.mutateElement((()=>{
                            this.h.textContent = d;
                            w(this.h, this.j);
                            x(this)
                        }
                        ))
                    }
                    ,
                    get: ()=>this.D || this.h.textContent
                })
            }
            isRelayoutNeeded() {
                return !0
            }
            layoutCallback() {
                if (this.win.ResizeObserver && null === this.A) {
                    let a = new this.win.ResizeObserver(q(this.win, (()=>this.mutateElement((()=>{
                        w(this.h, this.j);
                        x(this)
                    }
                    )))));
                    a.observe(this.o);
                    a.observe(this.j);
                    this.A = function() {
                        a.disconnect()
                    }
                }
                return this.mutateElement((()=>{
                    x(this);
                    var a = {
                        visibility: "visible"
                    };
                    let b = this.o.style;
                    for (let c in a)
                        b.setProperty(n(b, c), String(a[c]), "important")
                }
                ))
            }
            unlayoutCallback() {
                null !== this.A && (this.A(),
                this.A = null)
            }
        }
        AMP.registerElement("amp-fit-text", y, ".i-amphtml-fit-text-content,.i-amphtml-fit-text-content.i-amphtml-fill-content{display:block;display:-ms-flexbox;display:flex;-ms-flex-direction:column;flex-direction:column;-ms-flex-wrap:nowrap;flex-wrap:nowrap;-ms-flex-pack:center;justify-content:center}.i-amphtml-fit-text-content{z-index:2!important;visibility:hidden!important}.i-amphtml-fit-text-content-wrapper{line-height:1.15em!important}.i-amphtml-fit-text-content-overflown{display:block;display:-webkit-box;-webkit-box-orient:vertical;overflow:hidden}.i-amphtml-fit-text-measurer{position:absolute!important;top:0!important;left:0!important;z-index:1!important;visibility:hidden!important;line-height:1.15em!important}\n/*# sourceURL=/extensions/amp-fit-text/0.1/amp-fit-text.css*/")
    }
});
//# sourceMappingURL=amp-fit-text-0.1.mjs.map
