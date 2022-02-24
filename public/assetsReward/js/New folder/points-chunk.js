/*!For license information please see points-e6798dcc2683b226d092.chunk.js.LICENSE.txt*/
(window.webpackJsonp = window.webpackJsonp || []).push([[19], {
    238: function(t, e, n) {
        "use strict";
        n.r(e);
        var a = n(0)
          , o = n(7)
          , s = a.a.start()
          , i = n(239);
        s.load(Object(o.a)(i))
    },
    239: function(t, e, n) {
        var a = {
            "./points_controller.js": 240
        };
        function o(t) {
            var e = s(t);
            return n(e)
        }
        function s(t) {
            if (!n.o(a, t)) {
                var e = new Error("Cannot find module '" + t + "'");
                throw e.code = "MODULE_NOT_FOUND",
                e
            }
            return a[t]
        }
        o.keys = function() {
            return Object.keys(a)
        }
        ,
        o.resolve = s,
        t.exports = o,
        o.id = 239
    },
    240: function(t, e, n) {
        "use strict";
        n.r(e),
        function(t) {
            n.d(e, "default", (function() {
                return l
            }
            ));
            var a = n(0);
            n(34);
            function o(t, e) {
                if (!(t instanceof e))
                    throw new TypeError("Cannot call a class as a function")
            }
            function s(t, e) {
                for (var n = 0; n < e.length; n++) {
                    var a = e[n];
                    a.enumerable = a.enumerable || !1,
                    a.configurable = !0,
                    "value"in a && (a.writable = !0),
                    Object.defineProperty(t, a.key, a)
                }
            }
            function i(t, e) {
                return !e || "object" !== typeof e && "function" !== typeof e ? function(t) {
                    if (void 0 === t)
                        throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
                    return t
                }(t) : e
            }
            function r(t) {
                return (r = Object.setPrototypeOf ? Object.getPrototypeOf : function(t) {
                    return t.__proto__ || Object.getPrototypeOf(t)
                }
                )(t)
            }
            function c(t, e) {
                return (c = Object.setPrototypeOf || function(t, e) {
                    return t.__proto__ = e,
                    t
                }
                )(t, e)
            }
            var l = function(e) {
                function a() {
                    return o(this, a),
                    i(this, r(a).apply(this, arguments))
                }
                var l, u, h;
                return function(t, e) {
                    if ("function" !== typeof e && null !== e)
                        throw new TypeError("Super expression must either be null or a function");
                    t.prototype = Object.create(e && e.prototype, {
                        constructor: {
                            value: t,
                            writable: !0,
                            configurable: !0
                        }
                    }),
                    e && c(t, e)
                }(a, e),
                l = a,
                (u = [{
                    key: "connect",
                    value: function() {
                        var t = this.nextDailyRewardCountdownTimerTarget;
                        this._displayCountdownTime(t)
                    }
                }, {
                    key: "claimCandy",
                    value: function() {
                        this.todayBoxTarget.classList.value.includes("today-box") && this._updateCandyBalance(),
                        this._updateButtonState(),
                        this._updateProgressState(),
                        this._updateCandyJarState()
                    }
                }, {
                    key: "_updateCandyJarState",
                    value: function() {
                        this.candyJarTarget.classList.add("tw-hidden"),
                        this.claimSuccessJarTarget.classList.remove("tw-hidden")
                    }
                }, {
                    key: "_updateProgressState",
                    value: function() {
                        parseInt(this.todayBoxTarget.dataset.points),
                        this._nextIsNotLastdayReward() ? (this.todayBoxTarget.classList.remove("today-box"),
                        this.todayBoxTarget.classList.add("ticked-box")) : (this.todayBoxTarget.classList.add("tw-hidden"),
                        this.tickedDaySevenBoxTarget.classList.remove("tw-hidden"))
                    }
                }, {
                    key: "_nextIsNotLastdayReward",
                    value: function() {
                        return 6 != this.data.get("currentStreak")
                    }
                }, {
                    key: "_updateCandyBalance",
                    value: function() {
                        var t = this
                          , e = parseInt(this.todayBoxTarget.dataset.points)
                          , a = parseInt(this.balanceTarget.innerHTML) + e;
                        n.e(55).then(n.bind(null, 319)).then((function(e) {
                            new (0,
                            e.CountUp)(t.balanceTarget,a,{
                                duration: 1
                            }).start()
                        }
                        ))
                    }
                }, {
                    key: "_updateButtonState",
                    value: function() {
                        this.buttonTarget.classList.remove("btn-primary"),
                        this.buttonTarget.classList.add("btn-secondary"),
                        this.buttonTarget.hidden = !0,
                        this.disabledButtonTarget.hidden = !1
                    }
                }, {
                    key: "_displayCountdownTime",
                    value: function(e) {
                        new Date;
                        var n = new Date;
                        n.setDate((new Date).getDate() + 1);
                        var a = (new Date(n).setUTCHours(0, 0, 0, 0) - (new Date).getTime()) / 1e3
                          , o = (new Date).setSeconds((new Date).getSeconds() + a);
                        t("#" + e.id).countdown(o, (function(e) {
                            t(this).text(e.strftime("%-H:%M:%S"))
                        }
                        ))
                    }
                }]) && s(l.prototype, u),
                h && s(l, h),
                a
            }(a.b);
            l.targets = ["button", "todayBox", "balance", "candyJar", "claimSuccessJar", "disabledButton", "tickedDaySevenBox", "nextDailyRewardCountdownTimer"]
        }
        .call(this, n(5))
    },
    34: function(t, e, n) {
        var a, o, s;
        !function(i) {
            "use strict";
            o = [n(5)],
            void 0 === (s = "function" === typeof (a = function(t) {
                var e = []
                  , n = []
                  , a = {
                    precision: 100,
                    elapse: !1,
                    defer: !1
                };
                n.push(/^[0-9]*$/.source),
                n.push(/([0-9]{1,2}\/){2}[0-9]{4}( [0-9]{1,2}(:[0-9]{2}){2})?/.source),
                n.push(/[0-9]{4}([\/\-][0-9]{1,2}){2}( [0-9]{1,2}(:[0-9]{2}){2})?/.source),
                n = new RegExp(n.join("|"));
                var o = {
                    Y: "years",
                    m: "months",
                    n: "daysToMonth",
                    d: "daysToWeek",
                    w: "weeks",
                    W: "weeksToMonth",
                    H: "hours",
                    M: "minutes",
                    S: "seconds",
                    D: "totalDays",
                    I: "totalHours",
                    N: "totalMinutes",
                    T: "totalSeconds"
                };
                function s(t, e) {
                    var n = "s"
                      , a = "";
                    return t && (1 === (t = t.replace(/(:|;|\s)/gi, "").split(/\,/)).length ? n = t[0] : (a = t[0],
                    n = t[1])),
                    Math.abs(e) > 1 ? n : a
                }
                var i = function(n, o, s) {
                    this.el = n,
                    this.$el = t(n),
                    this.interval = null,
                    this.offset = {},
                    this.options = t.extend({}, a),
                    this.instanceNumber = e.length,
                    e.push(this),
                    this.$el.data("countdown-instance", this.instanceNumber),
                    s && ("function" === typeof s ? (this.$el.on("update.countdown", s),
                    this.$el.on("stoped.countdown", s),
                    this.$el.on("finish.countdown", s)) : this.options = t.extend({}, a, s)),
                    this.setFinalDate(o),
                    !1 === this.options.defer && this.start()
                };
                t.extend(i.prototype, {
                    start: function() {
                        null !== this.interval && clearInterval(this.interval);
                        var t = this;
                        this.update(),
                        this.interval = setInterval((function() {
                            t.update.call(t)
                        }
                        ), this.options.precision)
                    },
                    stop: function() {
                        clearInterval(this.interval),
                        this.interval = null,
                        this.dispatchEvent("stoped")
                    },
                    toggle: function() {
                        this.interval ? this.stop() : this.start()
                    },
                    pause: function() {
                        this.stop()
                    },
                    resume: function() {
                        this.start()
                    },
                    remove: function() {
                        this.stop.call(this),
                        e[this.instanceNumber] = null,
                        delete this.$el.data().countdownInstance
                    },
                    setFinalDate: function(t) {
                        this.finalDate = function(t) {
                            if (t instanceof Date)
                                return t;
                            if (String(t).match(n))
                                return String(t).match(/^[0-9]*$/) && (t = Number(t)),
                                String(t).match(/\-/) && (t = String(t).replace(/\-/g, "/")),
                                new Date(t);
                            throw new Error("Couldn't cast `" + t + "` to a date object.")
                        }(t)
                    },
                    update: function() {
                        if (0 !== this.$el.closest("html").length) {
                            var e, n = void 0 !== t._data(this.el, "events"), a = new Date;
                            e = this.finalDate.getTime() - a.getTime(),
                            e = Math.ceil(e / 1e3),
                            e = !this.options.elapse && e < 0 ? 0 : Math.abs(e),
                            this.totalSecsLeft !== e && n && (this.totalSecsLeft = e,
                            this.elapsed = a >= this.finalDate,
                            this.offset = {
                                seconds: this.totalSecsLeft % 60,
                                minutes: Math.floor(this.totalSecsLeft / 60) % 60,
                                hours: Math.floor(this.totalSecsLeft / 60 / 60) % 24,
                                days: Math.floor(this.totalSecsLeft / 60 / 60 / 24) % 7,
                                daysToWeek: Math.floor(this.totalSecsLeft / 60 / 60 / 24) % 7,
                                daysToMonth: Math.floor(this.totalSecsLeft / 60 / 60 / 24 % 30.4368),
                                weeks: Math.floor(this.totalSecsLeft / 60 / 60 / 24 / 7),
                                weeksToMonth: Math.floor(this.totalSecsLeft / 60 / 60 / 24 / 7) % 4,
                                months: Math.floor(this.totalSecsLeft / 60 / 60 / 24 / 30.4368),
                                years: Math.abs(this.finalDate.getFullYear() - a.getFullYear()),
                                totalDays: Math.floor(this.totalSecsLeft / 60 / 60 / 24),
                                totalHours: Math.floor(this.totalSecsLeft / 60 / 60),
                                totalMinutes: Math.floor(this.totalSecsLeft / 60),
                                totalSeconds: this.totalSecsLeft
                            },
                            this.options.elapse || 0 !== this.totalSecsLeft ? this.dispatchEvent("update") : (this.stop(),
                            this.dispatchEvent("finish")))
                        } else
                            this.remove()
                    },
                    dispatchEvent: function(e) {
                        var n, a = t.Event(e + ".countdown");
                        a.finalDate = this.finalDate,
                        a.elapsed = this.elapsed,
                        a.offset = t.extend({}, this.offset),
                        a.strftime = (n = this.offset,
                        function(t) {
                            var e, a, i = t.match(/%(-|!)?[A-Z]{1}(:[^;]+;)?/gi);
                            if (i)
                                for (var r = 0, c = i.length; r < c; ++r) {
                                    var l = i[r].match(/%(-|!)?([a-zA-Z]{1})(:[^;]+;)?/)
                                      , u = (e = l[0],
                                    a = void 0,
                                    a = e.toString().replace(/([.?*+^$[\]\\(){}|-])/g, "\\$1"),
                                    new RegExp(a))
                                      , h = l[1] || ""
                                      , d = l[3] || ""
                                      , f = null;
                                    l = l[2],
                                    o.hasOwnProperty(l) && (f = o[l],
                                    f = Number(n[f])),
                                    null !== f && ("!" === h && (f = s(d, f)),
                                    "" === h && f < 10 && (f = "0" + f.toString()),
                                    t = t.replace(u, f.toString()))
                                }
                            return t = t.replace(/%%/, "%")
                        }
                        ),
                        this.$el.trigger(a)
                    }
                }),
                t.fn.countdown = function() {
                    var n = Array.prototype.slice.call(arguments, 0);
                    return this.each((function() {
                        var a = t(this).data("countdown-instance");
                        if (void 0 !== a) {
                            var o = e[a]
                              , s = n[0];
                            i.prototype.hasOwnProperty(s) ? o[s].apply(o, n.slice(1)) : null === String(s).match(/^[$A-Z_][0-9A-Z_$]*$/i) ? (o.setFinalDate.call(o, s),
                            o.start()) : t.error("Method %s does not exist on jQuery.countdown".replace(/\%s/gi, s))
                        } else
                            new i(this,n[0],n[1])
                    }
                    ))
                }
            }
            ) ? a.apply(e, o) : a) || (t.exports = s)
        }()
    }
}, [[238, 38, 0, 3]]]);
