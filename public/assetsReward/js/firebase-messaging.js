!function(e, t) {
    "object" == typeof exports && "undefined" != typeof module ? t(require("@firebase/app")) : "function" == typeof define && define.amd ? define(["@firebase/app"], t) : t(e.firebase)
}(this, function(e) {
    "use strict";
    try {
        (function() {
            e = e && e.hasOwnProperty("default") ? e.default : e;
            var t = Object.setPrototypeOf || {
                __proto__: []
            }instanceof Array && function(e, t) {
                e.__proto__ = t
            }
            || function(e, t) {
                for (var n in t)
                    t.hasOwnProperty(n) && (e[n] = t[n])
            }
            ;
            function n(e, n) {
                function r() {
                    this.constructor = e
                }
                t(e, n),
                e.prototype = null === n ? Object.create(n) : (r.prototype = n.prototype,
                new r)
            }
            var r = Object.assign || function(e) {
                for (var t, n = 1, r = arguments.length; n < r; n++)
                    for (var i in t = arguments[n])
                        Object.prototype.hasOwnProperty.call(t, i) && (e[i] = t[i]);
                return e
            }
            ;
            function i(e, t, n, r) {
                return new (n || (n = Promise))(function(i, o) {
                    function s(e) {
                        try {
                            c(r.next(e))
                        } catch (e) {
                            o(e)
                        }
                    }
                    function a(e) {
                        try {
                            c(r.throw(e))
                        } catch (e) {
                            o(e)
                        }
                    }
                    function c(e) {
                        e.done ? i(e.value) : new n(function(t) {
                            t(e.value)
                        }
                        ).then(s, a)
                    }
                    c((r = r.apply(e, t || [])).next())
                }
                )
            }
            function o(e, t) {
                var n, r, i, o, s = {
                    label: 0,
                    sent: function() {
                        if (1 & i[0])
                            throw i[1];
                        return i[1]
                    },
                    trys: [],
                    ops: []
                };
                return o = {
                    next: a(0),
                    throw: a(1),
                    return: a(2)
                },
                "function" == typeof Symbol && (o[Symbol.iterator] = function() {
                    return this
                }
                ),
                o;
                function a(o) {
                    return function(a) {
                        return function(o) {
                            if (n)
                                throw new TypeError("Generator is already executing.");
                            for (; s; )
                                try {
                                    if (n = 1,
                                    r && (i = r[2 & o[0] ? "return" : o[0] ? "throw" : "next"]) && !(i = i.call(r, o[1])).done)
                                        return i;
                                    switch (r = 0,
                                    i && (o = [0, i.value]),
                                    o[0]) {
                                    case 0:
                                    case 1:
                                        i = o;
                                        break;
                                    case 4:
                                        return s.label++,
                                        {
                                            value: o[1],
                                            done: !1
                                        };
                                    case 5:
                                        s.label++,
                                        r = o[1],
                                        o = [0];
                                        continue;
                                    case 7:
                                        o = s.ops.pop(),
                                        s.trys.pop();
                                        continue;
                                    default:
                                        if (!(i = (i = s.trys).length > 0 && i[i.length - 1]) && (6 === o[0] || 2 === o[0])) {
                                            s = 0;
                                            continue
                                        }
                                        if (3 === o[0] && (!i || o[1] > i[0] && o[1] < i[3])) {
                                            s.label = o[1];
                                            break
                                        }
                                        if (6 === o[0] && s.label < i[1]) {
                                            s.label = i[1],
                                            i = o;
                                            break
                                        }
                                        if (i && s.label < i[2]) {
                                            s.label = i[2],
                                            s.ops.push(o);
                                            break
                                        }
                                        i[2] && s.ops.pop(),
                                        s.trys.pop();
                                        continue
                                    }
                                    o = t.call(e, s)
                                } catch (e) {
                                    o = [6, e],
                                    r = 0
                                } finally {
                                    n = i = 0
                                }
                            if (5 & o[0])
                                throw o[1];
                            return {
                                value: o[0] ? o[1] : void 0,
                                done: !0
                            }
                        }([o, a])
                    }
                }
            }
            var s = "FirebaseError"
              , a = Error.captureStackTrace
              , c = function() {
                return function(e, t) {
                    if (this.code = e,
                    this.message = t,
                    a)
                        a(this, u.prototype.create);
                    else
                        try {
                            throw Error.apply(this, arguments)
                        } catch (e) {
                            this.name = s,
                            Object.defineProperty(this, "stack", {
                                get: function() {
                                    return e.stack
                                }
                            })
                        }
                }
            }();
            c.prototype = Object.create(Error.prototype),
            c.prototype.constructor = c,
            c.prototype.name = s;
            var u = function() {
                function e(e, t, n) {
                    this.service = e,
                    this.serviceName = t,
                    this.errors = n,
                    this.pattern = /\{\$([^}]+)}/g
                }
                return e.prototype.create = function(e, t) {
                    void 0 === t && (t = {});
                    var n, r = this.errors[e], i = this.service + "/" + e;
                    n = void 0 === r ? "Error" : r.replace(this.pattern, function(e, n) {
                        var r = t[n];
                        return void 0 !== r ? r.toString() : "<" + n + "?>"
                    }),
                    n = this.serviceName + ": " + n + " (" + i + ").";
                    var o = new c(i,n);
                    for (var s in t)
                        t.hasOwnProperty(s) && "_" !== s.slice(-1) && (o[s] = t[s]);
                    return o
                }
                ,
                e
            }();
            !function(e) {
                function t() {
                    var t = e.call(this) || this;
                    t.chain_ = [],
                    t.buf_ = [],
                    t.W_ = [],
                    t.pad_ = [],
                    t.inbuf_ = 0,
                    t.total_ = 0,
                    t.blockSize = 64,
                    t.pad_[0] = 128;
                    for (var n = 1; n < t.blockSize; ++n)
                        t.pad_[n] = 0;
                    return t.reset(),
                    t
                }
                n(t, e),
                t.prototype.reset = function() {
                    this.chain_[0] = 1732584193,
                    this.chain_[1] = 4023233417,
                    this.chain_[2] = 2562383102,
                    this.chain_[3] = 271733878,
                    this.chain_[4] = 3285377520,
                    this.inbuf_ = 0,
                    this.total_ = 0
                }
                ,
                t.prototype.compress_ = function(e, t) {
                    t || (t = 0);
                    var n = this.W_;
                    if ("string" == typeof e)
                        for (var r = 0; r < 16; r++)
                            n[r] = e.charCodeAt(t) << 24 | e.charCodeAt(t + 1) << 16 | e.charCodeAt(t + 2) << 8 | e.charCodeAt(t + 3),
                            t += 4;
                    else
                        for (r = 0; r < 16; r++)
                            n[r] = e[t] << 24 | e[t + 1] << 16 | e[t + 2] << 8 | e[t + 3],
                            t += 4;
                    for (r = 16; r < 80; r++) {
                        var i = n[r - 3] ^ n[r - 8] ^ n[r - 14] ^ n[r - 16];
                        n[r] = 4294967295 & (i << 1 | i >>> 31)
                    }
                    var o, s, a = this.chain_[0], c = this.chain_[1], u = this.chain_[2], h = this.chain_[3], f = this.chain_[4];
                    for (r = 0; r < 80; r++) {
                        r < 40 ? r < 20 ? (o = h ^ c & (u ^ h),
                        s = 1518500249) : (o = c ^ u ^ h,
                        s = 1859775393) : r < 60 ? (o = c & u | h & (c | u),
                        s = 2400959708) : (o = c ^ u ^ h,
                        s = 3395469782);
                        i = (a << 5 | a >>> 27) + o + f + s + n[r] & 4294967295;
                        f = h,
                        h = u,
                        u = 4294967295 & (c << 30 | c >>> 2),
                        c = a,
                        a = i
                    }
                    this.chain_[0] = this.chain_[0] + a & 4294967295,
                    this.chain_[1] = this.chain_[1] + c & 4294967295,
                    this.chain_[2] = this.chain_[2] + u & 4294967295,
                    this.chain_[3] = this.chain_[3] + h & 4294967295,
                    this.chain_[4] = this.chain_[4] + f & 4294967295
                }
                ,
                t.prototype.update = function(e, t) {
                    if (null != e) {
                        void 0 === t && (t = e.length);
                        for (var n = t - this.blockSize, r = 0, i = this.buf_, o = this.inbuf_; r < t; ) {
                            if (0 == o)
                                for (; r <= n; )
                                    this.compress_(e, r),
                                    r += this.blockSize;
                            if ("string" == typeof e) {
                                for (; r < t; )
                                    if (i[o] = e.charCodeAt(r),
                                    ++r,
                                    ++o == this.blockSize) {
                                        this.compress_(i),
                                        o = 0;
                                        break
                                    }
                            } else
                                for (; r < t; )
                                    if (i[o] = e[r],
                                    ++r,
                                    ++o == this.blockSize) {
                                        this.compress_(i),
                                        o = 0;
                                        break
                                    }
                        }
                        this.inbuf_ = o,
                        this.total_ += t
                    }
                }
                ,
                t.prototype.digest = function() {
                    var e = []
                      , t = 8 * this.total_;
                    this.inbuf_ < 56 ? this.update(this.pad_, 56 - this.inbuf_) : this.update(this.pad_, this.blockSize - (this.inbuf_ - 56));
                    for (var n = this.blockSize - 1; n >= 56; n--)
                        this.buf_[n] = 255 & t,
                        t /= 256;
                    this.compress_(this.buf_);
                    var r = 0;
                    for (n = 0; n < 5; n++)
                        for (var i = 24; i >= 0; i -= 8)
                            e[r] = this.chain_[n] >> i & 255,
                            ++r;
                    return e
                }
            }(function() {
                return function() {
                    this.blockSize = -1
                }
            }());
            function h(e, t) {
                var n = new f(e,t);
                return n.subscribe.bind(n)
            }
            var f = function() {
                function e(e, t) {
                    var n = this;
                    this.observers = [],
                    this.unsubscribes = [],
                    this.observerCount = 0,
                    this.task = Promise.resolve(),
                    this.finalized = !1,
                    this.onNoObservers = t,
                    this.task.then(function() {
                        e(n)
                    }).catch(function(e) {
                        n.error(e)
                    })
                }
                return e.prototype.next = function(e) {
                    this.forEachObserver(function(t) {
                        t.next(e)
                    })
                }
                ,
                e.prototype.error = function(e) {
                    this.forEachObserver(function(t) {
                        t.error(e)
                    }),
                    this.close(e)
                }
                ,
                e.prototype.complete = function() {
                    this.forEachObserver(function(e) {
                        e.complete()
                    }),
                    this.close()
                }
                ,
                e.prototype.subscribe = function(e, t, n) {
                    var r, i = this;
                    if (void 0 === e && void 0 === t && void 0 === n)
                        throw new Error("Missing Observer.");
                    void 0 === (r = function(e, t) {
                        if ("object" != typeof e || null === e)
                            return !1;
                        for (var n = 0, r = t; n < r.length; n++) {
                            var i = r[n];
                            if (i in e && "function" == typeof e[i])
                                return !0
                        }
                        return !1
                    }(e, ["next", "error", "complete"]) ? e : {
                        next: e,
                        error: t,
                        complete: n
                    }).next && (r.next = d),
                    void 0 === r.error && (r.error = d),
                    void 0 === r.complete && (r.complete = d);
                    var o = this.unsubscribeOne.bind(this, this.observers.length);
                    return this.finalized && this.task.then(function() {
                        try {
                            i.finalError ? r.error(i.finalError) : r.complete()
                        } catch (e) {}
                    }),
                    this.observers.push(r),
                    o
                }
                ,
                e.prototype.unsubscribeOne = function(e) {
                    void 0 !== this.observers && void 0 !== this.observers[e] && (delete this.observers[e],
                    this.observerCount -= 1,
                    0 === this.observerCount && void 0 !== this.onNoObservers && this.onNoObservers(this))
                }
                ,
                e.prototype.forEachObserver = function(e) {
                    if (!this.finalized)
                        for (var t = 0; t < this.observers.length; t++)
                            this.sendOne(t, e)
                }
                ,
                e.prototype.sendOne = function(e, t) {
                    var n = this;
                    this.task.then(function() {
                        if (void 0 !== n.observers && void 0 !== n.observers[e])
                            try {
                                t(n.observers[e])
                            } catch (e) {
                                "undefined" != typeof console && console.error && console.error(e)
                            }
                    })
                }
                ,
                e.prototype.close = function(e) {
                    var t = this;
                    this.finalized || (this.finalized = !0,
                    void 0 !== e && (this.finalError = e),
                    this.task.then(function() {
                        t.observers = void 0,
                        t.onNoObservers = void 0
                    }))
                }
                ,
                e
            }();
            function d() {}
            var p, l, _, E = {
                AVAILABLE_IN_WINDOW: "only-available-in-window",
                AVAILABLE_IN_SW: "only-available-in-sw",
                SHOULD_BE_INHERITED: "should-be-overriden",
                BAD_SENDER_ID: "bad-sender-id",
                INCORRECT_GCM_SENDER_ID: "incorrect-gcm-sender-id",
                PERMISSION_DEFAULT: "permission-default",
                PERMISSION_BLOCKED: "permission-blocked",
                UNSUPPORTED_BROWSER: "unsupported-browser",
                NOTIFICATIONS_BLOCKED: "notifications-blocked",
                FAILED_DEFAULT_REGISTRATION: "failed-serviceworker-registration",
                SW_REGISTRATION_EXPECTED: "sw-registration-expected",
                GET_SUBSCRIPTION_FAILED: "get-subscription-failed",
                INVALID_SAVED_TOKEN: "invalid-saved-token",
                SW_REG_REDUNDANT: "sw-reg-redundant",
                TOKEN_SUBSCRIBE_FAILED: "token-subscribe-failed",
                TOKEN_SUBSCRIBE_NO_TOKEN: "token-subscribe-no-token",
                TOKEN_SUBSCRIBE_NO_PUSH_SET: "token-subscribe-no-push-set",
                TOKEN_UNSUBSCRIBE_FAILED: "token-unsubscribe-failed",
                TOKEN_UPDATE_FAILED: "token-update-failed",
                TOKEN_UPDATE_NO_TOKEN: "token-update-no-token",
                USE_SW_BEFORE_GET_TOKEN: "use-sw-before-get-token",
                INVALID_DELETE_TOKEN: "invalid-delete-token",
                DELETE_TOKEN_NOT_FOUND: "delete-token-not-found",
                DELETE_SCOPE_NOT_FOUND: "delete-scope-not-found",
                BG_HANDLER_FUNCTION_EXPECTED: "bg-handler-function-expected",
                NO_WINDOW_CLIENT_TO_MSG: "no-window-client-to-msg",
                UNABLE_TO_RESUBSCRIBE: "unable-to-resubscribe",
                NO_FCM_TOKEN_FOR_RESUBSCRIBE: "no-fcm-token-for-resubscribe",
                FAILED_TO_DELETE_TOKEN: "failed-to-delete-token",
                NO_SW_IN_REG: "no-sw-in-reg",
                BAD_SCOPE: "bad-scope",
                BAD_VAPID_KEY: "bad-vapid-key",
                BAD_SUBSCRIPTION: "bad-subscription",
                BAD_TOKEN: "bad-token",
                BAD_PUSH_SET: "bad-push-set",
                FAILED_DELETE_VAPID_KEY: "failed-delete-vapid-key",
                INVALID_PUBLIC_VAPID_KEY: "invalid-public-vapid-key",
                USE_PUBLIC_KEY_BEFORE_GET_TOKEN: "use-public-key-before-get-token",
                PUBLIC_KEY_DECRYPTION_FAILED: "public-vapid-key-decryption-failed"
            }, b = ((p = {})[E.AVAILABLE_IN_WINDOW] = "This method is available in a Window context.",
            p[E.AVAILABLE_IN_SW] = "This method is available in a service worker context.",
            p[E.SHOULD_BE_INHERITED] = "This method should be overriden by extended classes.",
            p[E.BAD_SENDER_ID] = "Please ensure that 'messagingSenderId' is set correctly in the options passed into firebase.initializeApp().",
            p[E.PERMISSION_DEFAULT] = "The required permissions were not granted and dismissed instead.",
            p[E.PERMISSION_BLOCKED] = "The required permissions were not granted and blocked instead.",
            p[E.UNSUPPORTED_BROWSER] = "This browser doesn't support the API's required to use the firebase SDK.",
            p[E.NOTIFICATIONS_BLOCKED] = "Notifications have been blocked.",
            p[E.FAILED_DEFAULT_REGISTRATION] = "We are unable to register the default service worker. {$browserErrorMessage}",
            p[E.SW_REGISTRATION_EXPECTED] = "A service worker registration was the expected input.",
            p[E.GET_SUBSCRIPTION_FAILED] = "There was an error when trying to get any existing Push Subscriptions.",
            p[E.INVALID_SAVED_TOKEN] = "Unable to access details of the saved token.",
            p[E.SW_REG_REDUNDANT] = "The service worker being used for push was made redundant.",
            p[E.TOKEN_SUBSCRIBE_FAILED] = "A problem occured while subscribing the user to FCM: {$message}",
            p[E.TOKEN_SUBSCRIBE_NO_TOKEN] = "FCM returned no token when subscribing the user to push.",
            p[E.TOKEN_SUBSCRIBE_NO_PUSH_SET] = "FCM returned an invalid response when getting an FCM token.",
            p[E.TOKEN_UNSUBSCRIBE_FAILED] = "A problem occured while unsubscribing the user from FCM: {$message}",
            p[E.TOKEN_UPDATE_FAILED] = "A problem occured while updating the user from FCM: {$message}",
            p[E.TOKEN_UPDATE_NO_TOKEN] = "FCM returned no token when updating the user to push.",
            p[E.USE_SW_BEFORE_GET_TOKEN] = "The useServiceWorker() method may only be called once and must be called before calling getToken() to ensure your service worker is used.",
            p[E.INVALID_DELETE_TOKEN] = "You must pass a valid token into deleteToken(), i.e. the token from getToken().",
            p[E.DELETE_TOKEN_NOT_FOUND] = "The deletion attempt for token could not be performed as the token was not found.",
            p[E.DELETE_SCOPE_NOT_FOUND] = "The deletion attempt for service worker scope could not be performed as the scope was not found.",
            p[E.BG_HANDLER_FUNCTION_EXPECTED] = "The input to setBackgroundMessageHandler() must be a function.",
            p[E.NO_WINDOW_CLIENT_TO_MSG] = "An attempt was made to message a non-existant window client.",
            p[E.UNABLE_TO_RESUBSCRIBE] = "There was an error while re-subscribing the FCM token for push messaging. Will have to resubscribe the user on next visit. {$message}",
            p[E.NO_FCM_TOKEN_FOR_RESUBSCRIBE] = "Could not find an FCM token and as a result, unable to resubscribe. Will have to resubscribe the user on next visit.",
            p[E.FAILED_TO_DELETE_TOKEN] = "Unable to delete the currently saved token.",
            p[E.NO_SW_IN_REG] = "Even though the service worker registration was successful, there was a problem accessing the service worker itself.",
            p[E.INCORRECT_GCM_SENDER_ID] = "Please change your web app manifest's 'gcm_sender_id' value to '103953800507' to use Firebase messaging.",
            p[E.BAD_SCOPE] = "The service worker scope must be a string with at least one character.",
            p[E.BAD_VAPID_KEY] = "The public VAPID key is not a Uint8Array with 65 bytes.",
            p[E.BAD_SUBSCRIPTION] = "The subscription must be a valid PushSubscription.",
            p[E.BAD_TOKEN] = "The FCM Token used for storage / lookup was not a valid token string.",
            p[E.BAD_PUSH_SET] = "The FCM push set used for storage / lookup was not not a valid push set string.",
            p[E.FAILED_DELETE_VAPID_KEY] = "The VAPID key could not be deleted.",
            p[E.INVALID_PUBLIC_VAPID_KEY] = "The public VAPID key must be a string.",
            p[E.PUBLIC_KEY_DECRYPTION_FAILED] = "The public VAPID key did not equal 65 bytes when decrypted.",
            p), v = new u("messaging","Messaging",b), g = new Uint8Array([4, 51, 148, 247, 223, 161, 235, 177, 220, 3, 162, 94, 21, 113, 219, 72, 211, 46, 237, 237, 178, 52, 219, 183, 71, 58, 12, 143, 196, 204, 225, 111, 60, 140, 132, 223, 171, 182, 102, 62, 242, 12, 212, 139, 254, 227, 249, 118, 47, 20, 28, 99, 8, 106, 111, 45, 177, 26, 149, 176, 206, 55, 192, 156, 110]), T = "https://fcm.googleapis.com";
            function S(e, t) {
                if (null == e || null == t)
                    return !1;
                if (e === t)
                    return !0;
                if (e.byteLength !== t.byteLength)
                    return !1;
                for (var n = new DataView(e), r = new DataView(t), i = 0; i < e.byteLength; i++)
                    if (n.getUint8(i) !== r.getUint8(i))
                        return !1;
                return !0
            }
            function y(e) {
                return function(e) {
                    var t = new Uint8Array(e);
                    return btoa(String.fromCharCode.apply(null, t))
                }(e).replace(/=/g, "").replace(/\+/g, "-").replace(/\//g, "_")
            }
            !function(e) {
                e.TYPE_OF_MSG = "firebase-messaging-msg-type",
                e.DATA = "firebase-messaging-msg-data"
            }(l || (l = {})),
            function(e) {
                e.PUSH_MSG_RECEIVED = "push-msg-received",
                e.NOTIFICATION_CLICKED = "notification-clicked"
            }(_ || (_ = {}));
            var w = function() {
                function e() {}
                return e.prototype.getToken = function(e, t, n) {
                    return i(this, void 0, void 0, function() {
                        var r, i, s, a, c, u, h, f;
                        return o(this, function(o) {
                            switch (o.label) {
                            case 0:
                                r = y(t.getKey("p256dh")),
                                i = y(t.getKey("auth")),
                                s = "authorized_entity=" + e + "&endpoint=" + t.endpoint + "&encryption_key=" + r + "&encryption_auth=" + i,
                                S(n.buffer, g.buffer) || (a = y(n),
                                s += "&application_pub_key=" + a),
                                (c = new Headers).append("Content-Type", "application/x-www-form-urlencoded"),
                                u = {
                                    method: "POST",
                                    headers: c,
                                    body: s
                                },
                                o.label = 1;
                            case 1:
                                return o.trys.push([1, 4, , 5]),
                                [4, fetch(T + "/fcm/connect/subscribe", u)];
                            case 2:
                                return [4, o.sent().json()];
                            case 3:
                                return h = o.sent(),
                                [3, 5];
                            case 4:
                                throw o.sent(),
                                v.create(E.TOKEN_SUBSCRIBE_FAILED);
                            case 5:
                                if (h.error)
                                    throw f = h.error.message,
                                    v.create(E.TOKEN_SUBSCRIBE_FAILED, {
                                        message: f
                                    });
                                if (!h.token)
                                    throw v.create(E.TOKEN_SUBSCRIBE_NO_TOKEN);
                                if (!h.pushSet)
                                    throw v.create(E.TOKEN_SUBSCRIBE_NO_PUSH_SET);
                                return [2, {
                                    token: h.token,
                                    pushSet: h.pushSet
                                }]
                            }
                        })
                    })
                }
                ,
                e.prototype.updateToken = function(e, t, n, r, s) {
                    return i(this, void 0, void 0, function() {
                        var i, a, c, u, h, f, d, p;
                        return o(this, function(o) {
                            switch (o.label) {
                            case 0:
                                i = y(r.getKey("p256dh")),
                                a = y(r.getKey("auth")),
                                c = "push_set=" + n + "&token=" + t + "&authorized_entity=" + e + "&endpoint=" + r.endpoint + "&encryption_key=" + i + "&encryption_auth=" + a,
                                S(s.buffer, g.buffer) || (u = y(s),
                                c += "&application_pub_key=" + u),
                                (h = new Headers).append("Content-Type", "application/x-www-form-urlencoded"),
                                f = {
                                    method: "POST",
                                    headers: h,
                                    body: c
                                },
                                o.label = 1;
                            case 1:
                                return o.trys.push([1, 4, , 5]),
                                [4, fetch(T + "/fcm/connect/subscribe", f)];
                            case 2:
                                return [4, o.sent().json()];
                            case 3:
                                return d = o.sent(),
                                [3, 5];
                            case 4:
                                throw o.sent(),
                                v.create(E.TOKEN_UPDATE_FAILED);
                            case 5:
                                if (d.error)
                                    throw p = d.error.message,
                                    v.create(E.TOKEN_UPDATE_FAILED, {
                                        message: p
                                    });
                                if (!d.token)
                                    throw v.create(E.TOKEN_UPDATE_NO_TOKEN);
                                return [2, d.token]
                            }
                        })
                    })
                }
                ,
                e.prototype.deleteToken = function(e, t, n) {
                    return i(this, void 0, void 0, function() {
                        var r, i, s, a, c;
                        return o(this, function(o) {
                            switch (o.label) {
                            case 0:
                                r = "authorized_entity=" + e + "&token=" + t + "&pushSet=" + n,
                                (i = new Headers).append("Content-Type", "application/x-www-form-urlencoded"),
                                s = {
                                    method: "POST",
                                    headers: i,
                                    body: r
                                },
                                o.label = 1;
                            case 1:
                                return o.trys.push([1, 4, , 5]),
                                [4, fetch(T + "/fcm/connect/unsubscribe", s)];
                            case 2:
                                return [4, o.sent().json()];
                            case 3:
                                if ((a = o.sent()).error)
                                    throw c = a.error.message,
                                    v.create(E.TOKEN_UNSUBSCRIBE_FAILED, {
                                        message: c
                                    });
                                return [3, 5];
                            case 4:
                                throw o.sent(),
                                v.create(E.TOKEN_UNSUBSCRIBE_FAILED);
                            case 5:
                                return [2]
                            }
                        })
                    })
                }
                ,
                e
            }();
            function I(e) {
                for (var t = (e + "=".repeat((4 - e.length % 4) % 4)).replace(/\-/g, "+").replace(/_/g, "/"), n = atob(t), r = new Uint8Array(n.length), i = 0; i < n.length; ++i)
                    r[i] = n.charCodeAt(i);
                return r
            }
            var D = "undefined"
              , N = "fcm_token_object_Store";
            function m() {
                var e = indexedDB.open(D);
                e.onerror = function(e) {}
                ,
                e.onsuccess = function(t) {
                    !function(e) {
                        if (e.objectStoreNames.contains(N)) {
                            var t = e.transaction(N).objectStore(N)
                              , n = new w
                              , r = t.openCursor();
                            r.onerror = function(e) {
                                console.warn("Unable to cleanup old IDB.", e)
                            }
                            ,
                            r.onsuccess = function() {
                                var t = r.result;
                                if (t) {
                                    var i = t.value;
                                    n.deleteToken(i.fcmSenderId, i.fcmToken, i.fcmPushSet),
                                    t.continue()
                                } else
                                    e.close(),
                                    indexedDB.deleteDatabase(D)
                            }
                        }
                    }(e.result)
                }
            }
            var O = function() {
                function e() {
                    this.dbPromise = null
                }
                return e.prototype.get = function(e) {
                    return this.createTransaction(function(t) {
                        return t.get(e)
                    })
                }
                ,
                e.prototype.getIndex = function(e, t) {
                    return this.createTransaction(function(n) {
                        return n.index(e).get(t)
                    })
                }
                ,
                e.prototype.put = function(e) {
                    return this.createTransaction(function(t) {
                        return t.put(e)
                    }, "readwrite")
                }
                ,
                e.prototype.delete = function(e) {
                    return this.createTransaction(function(t) {
                        return t.delete(e)
                    }, "readwrite")
                }
                ,
                e.prototype.closeDatabase = function() {
                    return i(this, void 0, void 0, function() {
                        return o(this, function(e) {
                            switch (e.label) {
                            case 0:
                                return this.dbPromise ? [4, this.dbPromise] : [3, 2];
                            case 1:
                                e.sent().close(),
                                this.dbPromise = null,
                                e.label = 2;
                            case 2:
                                return [2]
                            }
                        })
                    })
                }
                ,
                e.prototype.createTransaction = function(e, t) {
                    return void 0 === t && (t = "readonly"),
                    i(this, void 0, void 0, function() {
                        var n, r, i, s;
                        return o(this, function(o) {
                            switch (o.label) {
                            case 0:
                                return [4, this.getDb()];
                            case 1:
                                return n = o.sent(),
                                r = n.transaction(this.objectStoreName, t),
                                i = r.objectStore(this.objectStoreName),
                                [4, function(e) {
                                    return new Promise(function(t, n) {
                                        e.onsuccess = function() {
                                            t(e.result)
                                        }
                                        ,
                                        e.onerror = function() {
                                            n(e.error)
                                        }
                                    }
                                    )
                                }(e(i))];
                            case 2:
                                return s = o.sent(),
                                [2, new Promise(function(e, t) {
                                    r.oncomplete = function() {
                                        e(s)
                                    }
                                    ,
                                    r.onerror = function() {
                                        t(r.error)
                                    }
                                }
                                )]
                            }
                        })
                    })
                }
                ,
                e.prototype.getDb = function() {
                    var e = this;
                    return this.dbPromise || (this.dbPromise = new Promise(function(t, n) {
                        var r = indexedDB.open(e.dbName, e.dbVersion);
                        r.onsuccess = function() {
                            t(r.result)
                        }
                        ,
                        r.onerror = function() {
                            e.dbPromise = null,
                            n(r.error)
                        }
                        ,
                        r.onupgradeneeded = function(t) {
                            return e.onDbUpgrade(r, t)
                        }
                    }
                    )),
                    this.dbPromise
                }
                ,
                e
            }();
            var k = function(e) {
                function t() {
                    var t = null !== e && e.apply(this, arguments) || this;
                    return t.dbName = "fcm_token_details_db",
                    t.dbVersion = 3,
                    t.objectStoreName = "fcm_token_object_Store",
                    t
                }
                return n(t, e),
                t.prototype.onDbUpgrade = function(e, t) {
                    var n = e.result;
                    switch (t.oldVersion) {
                    case 0:
                        (i = n.createObjectStore(this.objectStoreName, {
                            keyPath: "swScope"
                        })).createIndex("fcmSenderId", "fcmSenderId", {
                            unique: !1
                        }),
                        i.createIndex("fcmToken", "fcmToken", {
                            unique: !0
                        });
                    case 1:
                        m();
                    case 2:
                        var i, o = (i = e.transaction.objectStore(this.objectStoreName)).openCursor();
                        o.onsuccess = function() {
                            var e = o.result;
                            if (e) {
                                var t = e.value
                                  , n = r({}, t);
                                t.createTime || (n.createTime = Date.now()),
                                "string" == typeof t.vapidKey && (n.vapidKey = I(t.vapidKey)),
                                "string" == typeof t.auth && (n.auth = I(t.auth).buffer),
                                "string" == typeof t.auth && (n.p256dh = I(t.p256dh).buffer),
                                e.update(n),
                                e.continue()
                            }
                        }
                    }
                }
                ,
                t.prototype.getTokenDetailsFromToken = function(e) {
                    return i(this, void 0, void 0, function() {
                        return o(this, function(t) {
                            if (!e)
                                throw v.create(E.BAD_TOKEN);
                            return A({
                                fcmToken: e
                            }),
                            [2, this.getIndex("fcmToken", e)]
                        })
                    })
                }
                ,
                t.prototype.getTokenDetailsFromSWScope = function(e) {
                    return i(this, void 0, void 0, function() {
                        return o(this, function(t) {
                            if (!e)
                                throw v.create(E.BAD_SCOPE);
                            return A({
                                swScope: e
                            }),
                            [2, this.get(e)]
                        })
                    })
                }
                ,
                t.prototype.saveTokenDetails = function(e) {
                    return i(this, void 0, void 0, function() {
                        return o(this, function(t) {
                            if (!e.swScope)
                                throw v.create(E.BAD_SCOPE);
                            if (!e.vapidKey)
                                throw v.create(E.BAD_VAPID_KEY);
                            if (!e.endpoint || !e.auth || !e.p256dh)
                                throw v.create(E.BAD_SUBSCRIPTION);
                            if (!e.fcmSenderId)
                                throw v.create(E.BAD_SENDER_ID);
                            if (!e.fcmToken)
                                throw v.create(E.BAD_TOKEN);
                            if (!e.fcmPushSet)
                                throw v.create(E.BAD_PUSH_SET);
                            return A(e),
                            [2, this.put(e)]
                        })
                    })
                }
                ,
                t.prototype.deleteToken = function(e) {
                    return i(this, void 0, void 0, function() {
                        var t;
                        return o(this, function(n) {
                            switch (n.label) {
                            case 0:
                                return "string" != typeof e || 0 === e.length ? [2, Promise.reject(v.create(E.INVALID_DELETE_TOKEN))] : [4, this.getTokenDetailsFromToken(e)];
                            case 1:
                                if (!(t = n.sent()))
                                    throw v.create(E.DELETE_TOKEN_NOT_FOUND);
                                return [4, this.delete(t.swScope)];
                            case 2:
                                return n.sent(),
                                [2, t]
                            }
                        })
                    })
                }
                ,
                t
            }(O);
            function A(e) {
                if (e.fcmToken && ("string" != typeof e.fcmToken || 0 === e.fcmToken.length))
                    throw v.create(E.BAD_TOKEN);
                if (e.swScope && ("string" != typeof e.swScope || 0 === e.swScope.length))
                    throw v.create(E.BAD_SCOPE);
                if (e.vapidKey && (!(e.vapidKey instanceof Uint8Array) || 65 !== e.vapidKey.length))
                    throw v.create(E.BAD_VAPID_KEY);
                if (e.endpoint && ("string" != typeof e.endpoint || 0 === e.endpoint.length))
                    throw v.create(E.BAD_SUBSCRIPTION);
                if (e.auth && !(e.auth instanceof ArrayBuffer))
                    throw v.create(E.BAD_SUBSCRIPTION);
                if (e.p256dh && !(e.p256dh instanceof ArrayBuffer))
                    throw v.create(E.BAD_SUBSCRIPTION);
                if (e.fcmSenderId && ("string" != typeof e.fcmSenderId || 0 === e.fcmSenderId.length))
                    throw v.create(E.BAD_SENDER_ID);
                if (e.fcmPushSet && ("string" != typeof e.fcmPushSet || 0 === e.fcmPushSet.length))
                    throw v.create(E.BAD_PUSH_SET)
            }
            var P = function(e) {
                function t() {
                    var t = null !== e && e.apply(this, arguments) || this;
                    return t.dbName = "fcm_vapid_details_db",
                    t.dbVersion = 1,
                    t.objectStoreName = "fcm_vapid_object_Store",
                    t
                }
                return n(t, e),
                t.prototype.onDbUpgrade = function(e) {
                    e.result.createObjectStore(this.objectStoreName, {
                        keyPath: "swScope"
                    })
                }
                ,
                t.prototype.getVapidFromSWScope = function(e) {
                    return i(this, void 0, void 0, function() {
                        var t;
                        return o(this, function(n) {
                            switch (n.label) {
                            case 0:
                                if ("string" != typeof e || 0 === e.length)
                                    throw v.create(E.BAD_SCOPE);
                                return [4, this.get(e)];
                            case 1:
                                return [2, (t = n.sent()) ? t.vapidKey : void 0]
                            }
                        })
                    })
                }
                ,
                t.prototype.saveVapidDetails = function(e, t) {
                    return i(this, void 0, void 0, function() {
                        var n;
                        return o(this, function(r) {
                            if ("string" != typeof e || 0 === e.length)
                                throw v.create(E.BAD_SCOPE);
                            if (null === t || 65 !== t.length)
                                throw v.create(E.BAD_VAPID_KEY);
                            return n = {
                                swScope: e,
                                vapidKey: t
                            },
                            [2, this.put(n)]
                        })
                    })
                }
                ,
                t.prototype.deleteVapidDetails = function(e) {
                    return i(this, void 0, void 0, function() {
                        var t;
                        return o(this, function(n) {
                            switch (n.label) {
                            case 0:
                                return [4, this.getVapidFromSWScope(e)];
                            case 1:
                                if (!(t = n.sent()))
                                    throw v.create(E.DELETE_SCOPE_NOT_FOUND);
                                return [4, this.delete(e)];
                            case 2:
                                return n.sent(),
                                [2, t]
                            }
                        })
                    })
                }
                ,
                t
            }(O)
              , C = "messagingSenderId"
              , B = function() {
                function e(e) {
                    var t = this;
                    if (!e.options[C] || "string" != typeof e.options[C])
                        throw v.create(E.BAD_SENDER_ID);
                    this.messagingSenderId = e.options[C],
                    this.tokenDetailsModel = new k,
                    this.vapidDetailsModel = new P,
                    this.iidModel = new w,
                    this.app = e,
                    this.INTERNAL = {
                        delete: function() {
                            return t.delete()
                        }
                    }
                }
                return e.prototype.getToken = function() {
                    return i(this, void 0, void 0, function() {
                        var e, t, n, r, i;
                        return o(this, function(o) {
                            switch (o.label) {
                            case 0:
                                if ("denied" === (e = this.getNotificationPermission_()))
                                    throw v.create(E.NOTIFICATIONS_BLOCKED);
                                return "granted" !== e ? [2, null] : [4, this.getSWRegistration_()];
                            case 1:
                                return t = o.sent(),
                                [4, this.getPublicVapidKey_()];
                            case 2:
                                return n = o.sent(),
                                [4, this.getPushSubscription(t, n)];
                            case 3:
                                return r = o.sent(),
                                [4, this.tokenDetailsModel.getTokenDetailsFromSWScope(t.scope)];
                            case 4:
                                return (i = o.sent()) ? [2, this.manageExistingToken(t, r, n, i)] : [2, this.getNewToken(t, r, n)]
                            }
                        })
                    })
                }
                ,
                e.prototype.manageExistingToken = function(e, t, n, r) {
                    return i(this, void 0, void 0, function() {
                        return o(this, function(i) {
                            switch (i.label) {
                            case 0:
                                return function(e, t, n) {
                                    if (!n.vapidKey || !S(t.buffer, n.vapidKey.buffer))
                                        return !1;
                                    var r = e.endpoint === n.endpoint
                                      , i = S(e.getKey("auth"), n.auth)
                                      , o = S(e.getKey("p256dh"), n.p256dh);
                                    return r && i && o
                                }(t, n, r) ? Date.now() < r.createTime + 6048e5 ? [2, r.fcmToken] : [2, this.updateToken(e, t, n, r)] : [4, this.deleteTokenFromDB(r.fcmToken)];
                            case 1:
                                return i.sent(),
                                [2, this.getNewToken(e, t, n)]
                            }
                        })
                    })
                }
                ,
                e.prototype.updateToken = function(e, t, n, r) {
                    return i(this, void 0, void 0, function() {
                        var i, s, a;
                        return o(this, function(o) {
                            switch (o.label) {
                            case 0:
                                return o.trys.push([0, 4, , 6]),
                                [4, this.iidModel.updateToken(this.messagingSenderId, r.fcmToken, r.fcmPushSet, t, n)];
                            case 1:
                                return i = o.sent(),
                                s = {
                                    swScope: e.scope,
                                    vapidKey: n,
                                    fcmSenderId: this.messagingSenderId,
                                    fcmToken: i,
                                    fcmPushSet: r.fcmPushSet,
                                    createTime: Date.now(),
                                    endpoint: t.endpoint,
                                    auth: t.getKey("auth"),
                                    p256dh: t.getKey("p256dh")
                                },
                                [4, this.tokenDetailsModel.saveTokenDetails(s)];
                            case 2:
                                return o.sent(),
                                [4, this.vapidDetailsModel.saveVapidDetails(e.scope, n)];
                            case 3:
                                return o.sent(),
                                [2, i];
                            case 4:
                                return a = o.sent(),
                                [4, this.deleteToken(r.fcmToken)];
                            case 5:
                                throw o.sent(),
                                a;
                            case 6:
                                return [2]
                            }
                        })
                    })
                }
                ,
                e.prototype.getNewToken = function(e, t, n) {
                    return i(this, void 0, void 0, function() {
                        var r, i;
                        return o(this, function(o) {
                            switch (o.label) {
                            case 0:
                                return [4, this.iidModel.getToken(this.messagingSenderId, t, n)];
                            case 1:
                                return r = o.sent(),
                                i = {
                                    swScope: e.scope,
                                    vapidKey: n,
                                    fcmSenderId: this.messagingSenderId,
                                    fcmToken: r.token,
                                    fcmPushSet: r.pushSet,
                                    createTime: Date.now(),
                                    endpoint: t.endpoint,
                                    auth: t.getKey("auth"),
                                    p256dh: t.getKey("p256dh")
                                },
                                [4, this.tokenDetailsModel.saveTokenDetails(i)];
                            case 2:
                                return o.sent(),
                                [4, this.vapidDetailsModel.saveVapidDetails(e.scope, n)];
                            case 3:
                                return o.sent(),
                                [2, r.token]
                            }
                        })
                    })
                }
                ,
                e.prototype.deleteToken = function(e) {
                    return i(this, void 0, void 0, function() {
                        var t, n;
                        return o(this, function(r) {
                            switch (r.label) {
                            case 0:
                                return [4, this.deleteTokenFromDB(e)];
                            case 1:
                                return r.sent(),
                                [4, this.getSWRegistration_()];
                            case 2:
                                return (t = r.sent()) ? [4, t.pushManager.getSubscription()] : [3, 4];
                            case 3:
                                if (n = r.sent())
                                    return [2, n.unsubscribe()];
                                r.label = 4;
                            case 4:
                                return [2, !0]
                            }
                        })
                    })
                }
                ,
                e.prototype.deleteTokenFromDB = function(e) {
                    return i(this, void 0, void 0, function() {
                        var t;
                        return o(this, function(n) {
                            switch (n.label) {
                            case 0:
                                return [4, this.tokenDetailsModel.deleteToken(e)];
                            case 1:
                                return t = n.sent(),
                                [4, this.iidModel.deleteToken(t.fcmSenderId, t.fcmToken, t.fcmPushSet)];
                            case 2:
                                return n.sent(),
                                [2]
                            }
                        })
                    })
                }
                ,
                e.prototype.getPushSubscription = function(e, t) {
                    return e.pushManager.getSubscription().then(function(n) {
                        return n || e.pushManager.subscribe({
                            userVisibleOnly: !0,
                            applicationServerKey: t
                        })
                    })
                }
                ,
                e.prototype.requestPermission = function() {
                    throw v.create(E.AVAILABLE_IN_WINDOW)
                }
                ,
                e.prototype.useServiceWorker = function(e) {
                    throw v.create(E.AVAILABLE_IN_WINDOW)
                }
                ,
                e.prototype.usePublicVapidKey = function(e) {
                    throw v.create(E.AVAILABLE_IN_WINDOW)
                }
                ,
                e.prototype.onMessage = function(e, t, n) {
                    throw v.create(E.AVAILABLE_IN_WINDOW)
                }
                ,
                e.prototype.onTokenRefresh = function(e, t, n) {
                    throw v.create(E.AVAILABLE_IN_WINDOW)
                }
                ,
                e.prototype.setBackgroundMessageHandler = function(e) {
                    throw v.create(E.AVAILABLE_IN_SW)
                }
                ,
                e.prototype.delete = function() {
                    return i(this, void 0, void 0, function() {
                        return o(this, function(e) {
                            switch (e.label) {
                            case 0:
                                return [4, Promise.all([this.tokenDetailsModel.closeDatabase(), this.vapidDetailsModel.closeDatabase()])];
                            case 1:
                                return e.sent(),
                                [2]
                            }
                        })
                    })
                }
                ,
                e.prototype.getNotificationPermission_ = function() {
                    return Notification.permission
                }
                ,
                e.prototype.getTokenDetailsModel = function() {
                    return this.tokenDetailsModel
                }
                ,
                e.prototype.getVapidDetailsModel = function() {
                    return this.vapidDetailsModel
                }
                ,
                e.prototype.getIidModel = function() {
                    return this.iidModel
                }
                ,
                e
            }();
            var R = function(e) {
                function t(t) {
                    var n = e.call(this, t) || this;
                    return n.bgMessageHandler = null,
                    self.addEventListener("push", function(e) {
                        n.onPush(e)
                    }),
                    self.addEventListener("pushsubscriptionchange", function(e) {
                        n.onSubChange(e)
                    }),
                    self.addEventListener("notificationclick", function(e) {
                        n.onNotificationClick(e)
                    }),
                    n
                }
                return n(t, e),
                t.prototype.onPush = function(e) {
                    e.waitUntil(this.onPush_(e))
                }
                ,
                t.prototype.onSubChange = function(e) {
                    e.waitUntil(this.onSubChange_(e))
                }
                ,
                t.prototype.onNotificationClick = function(e) {
                    e.waitUntil(this.onNotificationClick_(e))
                }
                ,
                t.prototype.onPush_ = function(e) {
                    return i(this, void 0, void 0, function() {
                        var t, n, r, i, s, a;
                        return o(this, function(o) {
                            switch (o.label) {
                            case 0:
                                if (!e.data)
                                    return [2];
                                try {
                                    t = e.data.json()
                                } catch (e) {
                                    return [2]
                                }
                                return [4, this.hasVisibleClients_()];
                            case 1:
                                return o.sent() ? [2, this.sendMessageToWindowClients_(t)] : (n = this.getNotificationData_(t)) ? (r = n.title || "",
                                [4, this.getSWRegistration_()]) : [3, 3];
                            case 2:
                                return i = o.sent(),
                                s = n.actions,
                                a = Notification.maxActions,
                                s && a && s.length > a && console.warn("This browser only supports " + a + " actions.The remaining actions will not be displayed."),
                                [2, i.showNotification(r, n)];
                            case 3:
                                return this.bgMessageHandler ? [4, this.bgMessageHandler(t)] : [3, 5];
                            case 4:
                                return o.sent(),
                                [2];
                            case 5:
                                return [2]
                            }
                        })
                    })
                }
                ,
                t.prototype.onSubChange_ = function(e) {
                    return i(this, void 0, void 0, function() {
                        var e, t, n, r;
                        return o(this, function(i) {
                            switch (i.label) {
                            case 0:
                                return i.trys.push([0, 2, , 3]),
                                [4, this.getSWRegistration_()];
                            case 1:
                                return e = i.sent(),
                                [3, 3];
                            case 2:
                                throw t = i.sent(),
                                v.create(E.UNABLE_TO_RESUBSCRIBE, {
                                    message: t
                                });
                            case 3:
                                return i.trys.push([3, 5, , 8]),
                                [4, e.pushManager.getSubscription()];
                            case 4:
                                return i.sent(),
                                [3, 8];
                            case 5:
                                return n = i.sent(),
                                [4, this.getTokenDetailsModel().getTokenDetailsFromSWScope(e.scope)];
                            case 6:
                                if (!(r = i.sent()))
                                    throw n;
                                return [4, this.deleteToken(r.fcmToken)];
                            case 7:
                                throw i.sent(),
                                n;
                            case 8:
                                return [2]
                            }
                        })
                    })
                }
                ,
                t.prototype.onNotificationClick_ = function(e) {
                    return i(this, void 0, void 0, function() {
                        var t, n, r, i;
                        return o(this, function(o) {
                            switch (o.label) {
                            case 0:
                                return e.notification && e.notification.data && e.notification.data.FCM_MSG ? e.action ? [2] : (e.stopImmediatePropagation(),
                                e.notification.close(),
                                (t = e.notification.data.FCM_MSG).notification && (n = t.fcmOptions && t.fcmOptions.link || t.notification.click_action) ? [4, this.getWindowClient_(n)] : [2]) : [2];
                            case 1:
                                return (r = o.sent()) ? [3, 3] : [4, self.clients.openWindow(n)];
                            case 2:
                                return r = o.sent(),
                                [3, 5];
                            case 3:
                                return [4, r.focus()];
                            case 4:
                                r = o.sent(),
                                o.label = 5;
                            case 5:
                                return r ? (delete t.notification,
                                delete t.fcmOptions,
                                i = L(_.NOTIFICATION_CLICKED, t),
                                [2, this.attemptToMessageClient_(r, i)]) : [2]
                            }
                        })
                    })
                }
                ,
                t.prototype.getNotificationData_ = function(e) {
                    if (e && "object" == typeof e.notification) {
                        var t, n = r({}, e.notification);
                        return n.data = r({}, e.notification.data, ((t = {}).FCM_MSG = e,
                        t)),
                        n
                    }
                }
                ,
                t.prototype.setBackgroundMessageHandler = function(e) {
                    if (!e || "function" != typeof e)
                        throw v.create(E.BG_HANDLER_FUNCTION_EXPECTED);
                    this.bgMessageHandler = e
                }
                ,
                t.prototype.getWindowClient_ = function(e) {
                    return i(this, void 0, void 0, function() {
                        var t, n, r, i;
                        return o(this, function(o) {
                            switch (o.label) {
                            case 0:
                                return t = new URL(e,self.location.href).href,
                                [4, U()];
                            case 1:
                                for (n = o.sent(),
                                r = null,
                                i = 0; i < n.length; i++)
                                    if (new URL(n[i].url,self.location.href).href === t) {
                                        r = n[i];
                                        break
                                    }
                                return [2, r]
                            }
                        })
                    })
                }
                ,
                t.prototype.attemptToMessageClient_ = function(e, t) {
                    return i(this, void 0, void 0, function() {
                        return o(this, function(n) {
                            if (!e)
                                throw v.create(E.NO_WINDOW_CLIENT_TO_MSG);
                            return e.postMessage(t),
                            [2]
                        })
                    })
                }
                ,
                t.prototype.hasVisibleClients_ = function() {
                    return i(this, void 0, void 0, function() {
                        return o(this, function(e) {
                            switch (e.label) {
                            case 0:
                                return [4, U()];
                            case 1:
                                return [2, e.sent().some(function(e) {
                                    return "visible" === e.visibilityState
                                })]
                            }
                        })
                    })
                }
                ,
                t.prototype.sendMessageToWindowClients_ = function(e) {
                    return i(this, void 0, void 0, function() {
                        var t, n, r = this;
                        return o(this, function(i) {
                            switch (i.label) {
                            case 0:
                                return [4, U()];
                            case 1:
                                return t = i.sent(),
                                n = L(_.PUSH_MSG_RECEIVED, e),
                                [4, Promise.all(t.map(function(e) {
                                    return r.attemptToMessageClient_(e, n)
                                }))];
                            case 2:
                                return i.sent(),
                                [2]
                            }
                        })
                    })
                }
                ,
                t.prototype.getSWRegistration_ = function() {
                    return i(this, void 0, void 0, function() {
                        return o(this, function(e) {
                            return [2, self.registration]
                        })
                    })
                }
                ,
                t.prototype.getPublicVapidKey_ = function() {
                    return i(this, void 0, void 0, function() {
                        var e, t;
                        return o(this, function(n) {
                            switch (n.label) {
                            case 0:
                                return [4, this.getSWRegistration_()];
                            case 1:
                                if (!(e = n.sent()))
                                    throw v.create(E.SW_REGISTRATION_EXPECTED);
                                return [4, this.getVapidDetailsModel().getVapidFromSWScope(e.scope)];
                            case 2:
                                return null == (t = n.sent()) ? [2, g] : [2, t]
                            }
                        })
                    })
                }
                ,
                t
            }(B);
            function U() {
                return self.clients.matchAll({
                    type: "window",
                    includeUncontrolled: !0
                })
            }
            function L(e, t) {
                return (n = {})[l.TYPE_OF_MSG] = e,
                n[l.DATA] = t,
                n;
                var n
            }
            var K, M = function(e) {
                function t(t) {
                    var n = e.call(this, t) || this;
                    return n.registrationToUse = null,
                    n.publicVapidKeyToUse = null,
                    n.manifestCheckPromise = null,
                    n.messageObserver = null,
                    n.tokenRefreshObserver = null,
                    n.onMessageInternal = h(function(e) {
                        n.messageObserver = e
                    }),
                    n.onTokenRefreshInternal = h(function(e) {
                        n.tokenRefreshObserver = e
                    }),
                    n.setupSWMessageListener_(),
                    n
                }
                return n(t, e),
                t.prototype.getToken = function() {
                    return i(this, void 0, void 0, function() {
                        return o(this, function(t) {
                            switch (t.label) {
                            case 0:
                                return this.manifestCheckPromise || (this.manifestCheckPromise = function() {
                                    return i(this, void 0, void 0, function() {
                                        var e, t;
                                        return o(this, function(n) {
                                            switch (n.label) {
                                            case 0:
                                                if (!(e = document.querySelector('link[rel="manifest"]')))
                                                    return [2];
                                                n.label = 1;
                                            case 1:
                                                return n.trys.push([1, 4, , 5]),
                                                [4, fetch(e.href)];
                                            case 2:
                                                return [4, n.sent().json()];
                                            case 3:
                                                return t = n.sent(),
                                                [3, 5];
                                            case 4:
                                                return n.sent(),
                                                [2];
                                            case 5:
                                                if (!t || !t.gcm_sender_id)
                                                    return [2];
                                                if ("103953800507" !== t.gcm_sender_id)
                                                    throw v.create(E.INCORRECT_GCM_SENDER_ID);
                                                return [2]
                                            }
                                        })
                                    })
                                }()),
                                [4, this.manifestCheckPromise];
                            case 1:
                                return t.sent(),
                                [2, e.prototype.getToken.call(this)]
                            }
                        })
                    })
                }
                ,
                t.prototype.requestPermission = function() {
                    return i(this, void 0, void 0, function() {
                        var e;
                        return o(this, function(t) {
                            switch (t.label) {
                            case 0:
                                return "granted" === this.getNotificationPermission_() ? [2] : [4, Notification.requestPermission()];
                            case 1:
                                if ("granted" === (e = t.sent()))
                                    return [2];
                                throw "denied" === e ? v.create(E.PERMISSION_BLOCKED) : v.create(E.PERMISSION_DEFAULT)
                            }
                        })
                    })
                }
                ,
                t.prototype.useServiceWorker = function(e) {
                    if (!(e instanceof ServiceWorkerRegistration))
                        throw v.create(E.SW_REGISTRATION_EXPECTED);
                    if (null != this.registrationToUse)
                        throw v.create(E.USE_SW_BEFORE_GET_TOKEN);
                    this.registrationToUse = e
                }
                ,
                t.prototype.usePublicVapidKey = function(e) {
                    if ("string" != typeof e)
                        throw v.create(E.INVALID_PUBLIC_VAPID_KEY);
                    if (null != this.publicVapidKeyToUse)
                        throw v.create(E.USE_PUBLIC_KEY_BEFORE_GET_TOKEN);
                    var t = I(e);
                    if (65 !== t.length)
                        throw v.create(E.PUBLIC_KEY_DECRYPTION_FAILED);
                    this.publicVapidKeyToUse = t
                }
                ,
                t.prototype.onMessage = function(e, t, n) {
                    return "function" == typeof e ? this.onMessageInternal(e, t, n) : this.onMessageInternal(e)
                }
                ,
                t.prototype.onTokenRefresh = function(e, t, n) {
                    return "function" == typeof e ? this.onTokenRefreshInternal(e, t, n) : this.onTokenRefreshInternal(e)
                }
                ,
                t.prototype.waitForRegistrationToActivate_ = function(e) {
                    var t = e.installing || e.waiting || e.active;
                    return new Promise(function(n, r) {
                        if (t)
                            if ("activated" !== t.state)
                                if ("redundant" !== t.state) {
                                    var i = function() {
                                        if ("activated" === t.state)
                                            n(e);
                                        else {
                                            if ("redundant" !== t.state)
                                                return;
                                            r(v.create(E.SW_REG_REDUNDANT))
                                        }
                                        t.removeEventListener("statechange", i)
                                    };
                                    t.addEventListener("statechange", i)
                                } else
                                    r(v.create(E.SW_REG_REDUNDANT));
                            else
                                n(e);
                        else
                            r(v.create(E.NO_SW_IN_REG))
                    }
                    )
                }
                ,
                t.prototype.getSWRegistration_ = function() {
                    var e = this;
                    return this.registrationToUse ? this.waitForRegistrationToActivate_(this.registrationToUse) : (this.registrationToUse = null,
                    navigator.serviceWorker.register("/firebase-messaging-sw.js", {
                        scope: "/firebase-cloud-messaging-push-scope"
                    }).catch(function(e) {
                        throw v.create(E.FAILED_DEFAULT_REGISTRATION, {
                            browserErrorMessage: e.message
                        })
                    }).then(function(t) {
                        return e.waitForRegistrationToActivate_(t).then(function() {
                            return e.registrationToUse = t,
                            t.update(),
                            t
                        })
                    }))
                }
                ,
                t.prototype.getPublicVapidKey_ = function() {
                    return i(this, void 0, void 0, function() {
                        return o(this, function(e) {
                            return this.publicVapidKeyToUse ? [2, this.publicVapidKeyToUse] : [2, g]
                        })
                    })
                }
                ,
                t.prototype.setupSWMessageListener_ = function() {
                    var e = this;
                    navigator.serviceWorker.addEventListener("message", function(t) {
                        if (t.data && t.data[l.TYPE_OF_MSG]) {
                            var n = t.data;
                            switch (n[l.TYPE_OF_MSG]) {
                            case _.PUSH_MSG_RECEIVED:
                            case _.NOTIFICATION_CLICKED:
                                var r = n[l.DATA];
                                e.messageObserver && e.messageObserver.next(r)
                            }
                        }
                    }, !1)
                }
                ,
                t
            }(B);
            function F() {
                return self && "ServiceWorkerGlobalScope"in self ? "PushManager"in self && "Notification"in self && ServiceWorkerRegistration.prototype.hasOwnProperty("showNotification") && PushSubscription.prototype.hasOwnProperty("getKey") : navigator.cookieEnabled && "serviceWorker"in navigator && "PushManager"in window && "Notification"in window && "fetch"in window && ServiceWorkerRegistration.prototype.hasOwnProperty("showNotification") && PushSubscription.prototype.hasOwnProperty("getKey")
            }
            K = {
                isSupported: F
            },
            e.INTERNAL.registerService("messaging", function(e) {
                if (!F())
                    throw v.create(E.UNSUPPORTED_BROWSER);
                return self && "ServiceWorkerGlobalScope"in self ? new R(e) : new M(e)
            }, K)
        }
        ).apply(this, arguments)
    } catch (e) {
        throw console.error(e),
        new Error("Cannot instantiate firebase-messaging - be sure to load firebase-app.js first.")
    }
});
//# sourceMappingURL=firebase-messaging.js.map
