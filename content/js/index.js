(() => {
    var t, e, n = {
            650: (t, e, n) => {
                "use strict";

                function i(t, e) {
                    for (var n = 0; n < e.length; n++) {
                        var i = e[n];
                        i.enumerable = i.enumerable || !1, i.configurable = !0, "value" in i && (i.writable = !0), Object.defineProperty(t, i.key, i)
                    }
                }

                function r(t) {
                    return function(t) {
                        if (Array.isArray(t)) return o(t)
                    }(t) || function(t) {
                        if ("undefined" != typeof Symbol && Symbol.iterator in Object(t)) return Array.from(t)
                    }(t) || function(t, e) {
                        if (t) {
                            if ("string" == typeof t) return o(t, e);
                            var n = Object.prototype.toString.call(t).slice(8, -1);
                            return "Object" === n && t.constructor && (n = t.constructor.name), "Map" === n || "Set" === n ? Array.from(n) : "Arguments" === n || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n) ? o(t, e) : void 0
                        }
                    }(t) || function() {
                        throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")
                    }()
                }

                function o(t, e) {
                    (null == e || e > t.length) && (e = t.length);
                    for (var n = 0, i = new Array(e); n < e; n++) i[n] = t[n];
                    return i
                }
                n.r(e), n.d(e, {
                    default: () => d
                });
                var a, s, l, c, u, f = (a = ["a[href]", "area[href]", 'input:not([disabled]):not([type="hidden"]):not([aria-hidden])', "select:not([disabled]):not([aria-hidden])", "textarea:not([disabled]):not([aria-hidden])", "button:not([disabled]):not([aria-hidden])", "iframe", "object", "embed", "[contenteditable]", '[tabindex]:not([tabindex^="-"])'], s = function() {
                    function t(e) {
                        var n = e.targetModal,
                            i = e.triggers,
                            o = void 0 === i ? [] : i,
                            a = e.onShow,
                            s = void 0 === a ? function() {} : a,
                            l = e.onClose,
                            c = void 0 === l ? function() {} : l,
                            u = e.openTrigger,
                            f = void 0 === u ? "data-micromodal-trigger" : u,
                            d = e.closeTrigger,
                            h = void 0 === d ? "data-micromodal-close" : d,
                            p = e.openClass,
                            v = void 0 === p ? "is-open" : p,
                            m = e.disableScroll,
                            g = void 0 !== m && m,
                            y = e.disableFocus,
                            b = void 0 !== y && y,
                            w = e.awaitCloseAnimation,
                            x = void 0 !== w && w,
                            C = e.awaitOpenAnimation,
                            E = void 0 !== C && C,
                            T = e.debugMode,
                            M = void 0 !== T && T;
                        ! function(t, e) {
                            if (!(t instanceof e)) throw new TypeError("Cannot call a class as a function")
                        }(this, t), this.modal = document.getElementById(n), this.config = {
                            debugMode: M,
                            disableScroll: g,
                            openTrigger: f,
                            closeTrigger: h,
                            openClass: v,
                            onShow: s,
                            onClose: c,
                            awaitCloseAnimation: x,
                            awaitOpenAnimation: E,
                            disableFocus: b
                        }, o.length > 0 && this.registerTriggers.apply(this, r(o)), this.onClick = this.onClick.bind(this), this.onKeydown = this.onKeydown.bind(this)
                    }
                    var e, n;
                    return e = t, (n = [{
                        key: "registerTriggers",
                        value: function() {
                            for (var t = this, e = arguments.length, n = new Array(e), i = 0; i < e; i++) n[i] = arguments[i];
                            n.filter(Boolean).forEach((function(e) {
                                e.addEventListener("click", (function(e) {
                                    return t.showModal(e)
                                }))
                            }))
                        }
                    }, {
                        key: "showModal",
                        value: function() {
                            var t = this,
                                e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : null;
                            if (this.activeElement = document.activeElement, this.modal.setAttribute("aria-hidden", "false"), this.modal.classList.add(this.config.openClass), this.scrollBehaviour("disable"), this.addEventListeners(), this.config.awaitOpenAnimation) {
                                var n = function e() {
                                    t.modal.removeEventListener("animationend", e, !1), t.setFocusToFirstNode()
                                };
                                this.modal.addEventListener("animationend", n, !1)
                            } else this.setFocusToFirstNode();
                            this.config.onShow(this.modal, this.activeElement, e)
                        }
                    }, {
                        key: "closeModal",
                        value: function() {
                            var t = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : null,
                                e = this.modal;
                            if (this.modal.setAttribute("aria-hidden", "true"), this.removeEventListeners(), this.scrollBehaviour("enable"), this.activeElement && this.activeElement.focus && this.activeElement.focus(), this.config.onClose(this.modal, this.activeElement, t), this.config.awaitCloseAnimation) {
                                var n = this.config.openClass;
                                this.modal.addEventListener("animationend", (function t() {
                                    e.classList.remove(n), e.removeEventListener("animationend", t, !1)
                                }), !1)
                            } else e.classList.remove(this.config.openClass)
                        }
                    }, {
                        key: "closeModalById",
                        value: function(t) {
                            this.modal = document.getElementById(t), this.modal && this.closeModal()
                        }
                    }, {
                        key: "scrollBehaviour",
                        value: function(t) {
                            if (this.config.disableScroll) {
                                var e = document.querySelector("body");
                                switch (t) {
                                    case "enable":
                                        Object.assign(e.style, {
                                            overflow: ""
                                        });
                                        break;
                                    case "disable":
                                        Object.assign(e.style, {
                                            overflow: "hidden"
                                        })
                                }
                            }
                        }
                    }, {
                        key: "addEventListeners",
                        value: function() {
                            this.modal.addEventListener("touchstart", this.onClick), this.modal.addEventListener("click", this.onClick), document.addEventListener("keydown", this.onKeydown)
                        }
                    }, {
                        key: "removeEventListeners",
                        value: function() {
                            this.modal.removeEventListener("touchstart", this.onClick), this.modal.removeEventListener("click", this.onClick), document.removeEventListener("keydown", this.onKeydown)
                        }
                    }, {
                        key: "onClick",
                        value: function(t) {
                            t.target.hasAttribute(this.config.closeTrigger) && this.closeModal(t)
                        }
                    }, {
                        key: "onKeydown",
                        value: function(t) {
                            27 === t.keyCode && this.closeModal(t), 9 === t.keyCode && this.retainFocus(t)
                        }
                    }, {
                        key: "getFocusableNodes",
                        value: function() {
                            var t = this.modal.querySelectorAll(a);
                            return Array.apply(void 0, r(t))
                        }
                    }, {
                        key: "setFocusToFirstNode",
                        value: function() {
                            var t = this;
                            if (!this.config.disableFocus) {
                                var e = this.getFocusableNodes();
                                if (0 !== e.length) {
                                    var n = e.filter((function(e) {
                                        return !e.hasAttribute(t.config.closeTrigger)
                                    }));
                                    n.length > 0 && n[0].focus(), 0 === n.length && e[0].focus()
                                }
                            }
                        }
                    }, {
                        key: "retainFocus",
                        value: function(t) {
                            var e = this.getFocusableNodes();
                            if (0 !== e.length)
                                if (e = e.filter((function(t) {
                                        return null !== t.offsetParent
                                    })), this.modal.contains(document.activeElement)) {
                                    var n = e.indexOf(document.activeElement);
                                    t.shiftKey && 0 === n && (e[e.length - 1].focus(), t.preventDefault()), !t.shiftKey && e.length > 0 && n === e.length - 1 && (e[0].focus(), t.preventDefault())
                                } else e[0].focus()
                        }
                    }]) && i(e.prototype, n), t
                }(), l = null, c = function(t) {
                    if (!document.getElementById(t)) return console.warn("MicroModal: ???Seems like you have missed %c'".concat(t, "'"), "background-color: #f8f9fa;color: #50596c;font-weight: bold;", "ID somewhere in your code. Refer example below to resolve it."), console.warn("%cExample:", "background-color: #f8f9fa;color: #50596c;font-weight: bold;", '<div class="modal" id="'.concat(t, '"></div>')), !1
                }, u = function(t, e) {
                    if (function(t) {
                            t.length <= 0 && (console.warn("MicroModal: ???Please specify at least one %c'micromodal-trigger'", "background-color: #f8f9fa;color: #50596c;font-weight: bold;", "data attribute."), console.warn("%cExample:", "background-color: #f8f9fa;color: #50596c;font-weight: bold;", '<a href="#" data-micromodal-trigger="my-modal"></a>'))
                        }(t), !e) return !0;
                    for (var n in e) c(n);
                    return !0
                }, {
                    init: function(t) {
                        var e = Object.assign({}, {
                                openTrigger: "data-micromodal-trigger"
                            }, t),
                            n = r(document.querySelectorAll("[".concat(e.openTrigger, "]"))),
                            i = function(t, e) {
                                var n = [];
                                return t.forEach((function(t) {
                                    var i = t.attributes[e].value;
                                    void 0 === n[i] && (n[i] = []), n[i].push(t)
                                })), n
                            }(n, e.openTrigger);
                        if (!0 !== e.debugMode || !1 !== u(n, i))
                            for (var o in i) {
                                var a = i[o];
                                e.targetModal = o, e.triggers = r(a), l = new s(e)
                            }
                    },
                    show: function(t, e) {
                        var n = e || {};
                        n.targetModal = t, !0 === n.debugMode && !1 === c(t) || (l && l.removeEventListeners(), (l = new s(n)).showModal())
                    },
                    close: function(t) {
                        t ? l.closeModalById(t) : l.closeModal()
                    }
                });
                window.MicroModal = f;
                const d = f
            },
            745: function(t, e, n) {
                var i;
                void 0 === (i = function() {
                    return n = function() {
                            var t, e, n, i, r, o, a = [],
                                s = a.concat,
                                l = a.filter,
                                c = a.slice,
                                u = window.document,
                                f = {},
                                d = {},
                                h = {
                                    "column-count": 1,
                                    columns: 1,
                                    "font-weight": 1,
                                    "line-height": 1,
                                    opacity: 1,
                                    "z-index": 1,
                                    zoom: 1
                                },
                                p = /^\s*<(\w+|!)[^>]*>/,
                                v = /^<(\w+)\s*\/?>(?:<\/\1>|)$/,
                                m = /<(?!area|br|col|embed|hr|img|input|link|meta|param)(([\w:]+)[^>]*)\/>/gi,
                                g = /^(?:body|html)$/i,
                                y = /([A-Z])/g,
                                b = ["val", "css", "html", "text", "data", "width", "height", "offset"],
                                w = u.createElement("table"),
                                x = u.createElement("tr"),
                                C = {
                                    tr: u.createElement("tbody"),
                                    tbody: w,
                                    thead: w,
                                    tfoot: w,
                                    td: x,
                                    th: x,
                                    "*": u.createElement("div")
                                },
                                E = /complete|loaded|interactive/,
                                T = /^[\w-]*$/,
                                M = {},
                                S = M.toString,
                                k = {},
                                N = u.createElement("div"),
                                A = {
                                    tabindex: "tabIndex",
                                    readonly: "readOnly",
                                    for: "htmlFor",
                                    class: "className",
                                    maxlength: "maxLength",
                                    cellspacing: "cellSpacing",
                                    cellpadding: "cellPadding",
                                    rowspan: "rowSpan",
                                    colspan: "colSpan",
                                    usemap: "useMap",
                                    frameborder: "frameBorder",
                                    contenteditable: "contentEditable"
                                },
                                O = Array.isArray || function(t) {
                                    return t instanceof Array
                                };

                            function L(t) {
                                return null == t ? String(t) : M[S.call(t)] || "object"
                            }

                            function j(t) {
                                return "function" == L(t)
                            }

                            function P(t) {
                                return null != t && t == t.window
                            }

                            function D(t) {
                                return null != t && t.nodeType == t.DOCUMENT_NODE
                            }

                            function B(t) {
                                return "object" == L(t)
                            }

                            function R(t) {
                                return B(t) && !P(t) && Object.getPrototypeOf(t) == Object.prototype
                            }

                            function I(t) {
                                var e = !!t && "length" in t && t.length,
                                    i = n.type(t);
                                return "function" != i && !P(t) && ("array" == i || 0 === e || "number" == typeof e && e > 0 && e - 1 in t)
                            }

                            function H(t) {
                                return t.replace(/::/g, "/").replace(/([A-Z]+)([A-Z][a-z])/g, "$1_$2").replace(/([a-z\d])([A-Z])/g, "$1_$2").replace(/_/g, "-").toLowerCase()
                            }

                            function F(t) {
                                return t in d ? d[t] : d[t] = new RegExp("(^|\\s)" + t + "(\\s|$)")
                            }

                            function q(t, e) {
                                return "number" != typeof e || h[H(t)] ? e : e + "px"
                            }

                            function z(t) {
                                return "children" in t ? c.call(t.children) : n.map(t.childNodes, (function(t) {
                                    if (1 == t.nodeType) return t
                                }))
                            }

                            function _(t, e) {
                                var n, i = t ? t.length : 0;
                                for (n = 0; n < i; n++) this[n] = t[n];
                                this.length = i, this.selector = e || ""
                            }

                            function W(n, i, r) {
                                for (e in i) r && (R(i[e]) || O(i[e])) ? (R(i[e]) && !R(n[e]) && (n[e] = {}), O(i[e]) && !O(n[e]) && (n[e] = []), W(n[e], i[e], r)) : i[e] !== t && (n[e] = i[e])
                            }

                            function $(t, e) {
                                return null == e ? n(t) : n(t).filter(e)
                            }

                            function V(t, e, n, i) {
                                return j(e) ? e.call(t, n, i) : e
                            }

                            function Z(t, e, n) {
                                null == n ? t.removeAttribute(e) : t.setAttribute(e, n)
                            }

                            function X(e, n) {
                                var i = e.className || "",
                                    r = i && i.baseVal !== t;
                                if (n === t) return r ? i.baseVal : i;
                                r ? i.baseVal = n : e.className = n
                            }

                            function U(t) {
                                try {
                                    return t ? "true" == t || "false" != t && ("null" == t ? null : +t + "" == t ? +t : /^[\[\{]/.test(t) ? n.parseJSON(t) : t) : t
                                } catch (e) {
                                    return t
                                }
                            }

                            function K(t, e) {
                                e(t);
                                for (var n = 0, i = t.childNodes.length; n < i; n++) K(t.childNodes[n], e)
                            }
                            return k.matches = function(t, e) {
                                if (!e || !t || 1 !== t.nodeType) return !1;
                                var n = t.matches || t.webkitMatchesSelector || t.mozMatchesSelector || t.oMatchesSelector || t.matchesSelector;
                                if (n) return n.call(t, e);
                                var i, r = t.parentNode,
                                    o = !r;
                                return o && (r = N).appendChild(t), i = ~k.qsa(r, e).indexOf(t), o && N.removeChild(t), i
                            }, r = function(t) {
                                return t.replace(/-+(.)?/g, (function(t, e) {
                                    return e ? e.toUpperCase() : ""
                                }))
                            }, o = function(t) {
                                return l.call(t, (function(e, n) {
                                    return t.indexOf(e) == n
                                }))
                            }, k.fragment = function(e, i, r) {
                                var o, a, s;
                                return v.test(e) && (o = n(u.createElement(RegExp.$1))), o || (e.replace && (e = e.replace(m, "<$1></$2>")), i === t && (i = p.test(e) && RegExp.$1), i in C || (i = "*"), (s = C[i]).innerHTML = "" + e, o = n.each(c.call(s.childNodes), (function() {
                                    s.removeChild(this)
                                }))), R(r) && (a = n(o), n.each(r, (function(t, e) {
                                    b.indexOf(t) > -1 ? a[t](e) : a.attr(t, e)
                                }))), o
                            }, k.Z = function(t, e) {
                                return new _(t, e)
                            }, k.isZ = function(t) {
                                return t instanceof k.Z
                            }, k.init = function(e, i) {
                                var r, o;
                                if (!e) return k.Z();
                                if ("string" == typeof e)
                                    if ("<" == (e = e.trim())[0] && p.test(e)) r = k.fragment(e, RegExp.$1, i), e = null;
                                    else {
                                        if (i !== t) return n(i).find(e);
                                        r = k.qsa(u, e)
                                    } else {
                                    if (j(e)) return n(u).ready(e);
                                    if (k.isZ(e)) return e;
                                    if (O(e)) o = e, r = l.call(o, (function(t) {
                                        return null != t
                                    }));
                                    else if (B(e)) r = [e], e = null;
                                    else if (p.test(e)) r = k.fragment(e.trim(), RegExp.$1, i), e = null;
                                    else {
                                        if (i !== t) return n(i).find(e);
                                        r = k.qsa(u, e)
                                    }
                                }
                                return k.Z(r, e)
                            }, (n = function(t, e) {
                                return k.init(t, e)
                            }).extend = function(t) {
                                var e, n = c.call(arguments, 1);
                                return "boolean" == typeof t && (e = t, t = n.shift()), n.forEach((function(n) {
                                    W(t, n, e)
                                })), t
                            }, k.qsa = function(t, e) {
                                var n, i = "#" == e[0],
                                    r = !i && "." == e[0],
                                    o = i || r ? e.slice(1) : e,
                                    a = T.test(o);
                                return t.getElementById && a && i ? (n = t.getElementById(o)) ? [n] : [] : 1 !== t.nodeType && 9 !== t.nodeType && 11 !== t.nodeType ? [] : c.call(a && !i && t.getElementsByClassName ? r ? t.getElementsByClassName(o) : t.getElementsByTagName(e) : t.querySelectorAll(e))
                            }, n.contains = u.documentElement.contains ? function(t, e) {
                                return t !== e && t.contains(e)
                            } : function(t, e) {
                                for (; e && (e = e.parentNode);)
                                    if (e === t) return !0;
                                return !1
                            }, n.type = L, n.isFunction = j, n.isWindow = P, n.isArray = O, n.isPlainObject = R, n.isEmptyObject = function(t) {
                                var e;
                                for (e in t) return !1;
                                return !0
                            }, n.isNumeric = function(t) {
                                var e = Number(t),
                                    n = typeof t;
                                return null != t && "boolean" != n && ("string" != n || t.length) && !isNaN(e) && isFinite(e) || !1
                            }, n.inArray = function(t, e, n) {
                                return a.indexOf.call(e, t, n)
                            }, n.camelCase = r, n.trim = function(t) {
                                return null == t ? "" : String.prototype.trim.call(t)
                            }, n.uuid = 0, n.support = {}, n.expr = {}, n.noop = function() {}, n.map = function(t, e) {
                                var i, r, o, a, s = [];
                                if (I(t))
                                    for (r = 0; r < t.length; r++) null != (i = e(t[r], r)) && s.push(i);
                                else
                                    for (o in t) null != (i = e(t[o], o)) && s.push(i);
                                return (a = s).length > 0 ? n.fn.concat.apply([], a) : a
                            }, n.each = function(t, e) {
                                var n, i;
                                if (I(t)) {
                                    for (n = 0; n < t.length; n++)
                                        if (!1 === e.call(t[n], n, t[n])) return t
                                } else
                                    for (i in t)
                                        if (!1 === e.call(t[i], i, t[i])) return t; return t
                            }, n.grep = function(t, e) {
                                return l.call(t, e)
                            }, window.JSON && (n.parseJSON = JSON.parse), n.each("Boolean Number String Function Array Date RegExp Object Error".split(" "), (function(t, e) {
                                M["[object " + e + "]"] = e.toLowerCase()
                            })), n.fn = {
                                constructor: k.Z,
                                length: 0,
                                forEach: a.forEach,
                                reduce: a.reduce,
                                push: a.push,
                                sort: a.sort,
                                splice: a.splice,
                                indexOf: a.indexOf,
                                concat: function() {
                                    var t, e, n = [];
                                    for (t = 0; t < arguments.length; t++) e = arguments[t], n[t] = k.isZ(e) ? e.toArray() : e;
                                    return s.apply(k.isZ(this) ? this.toArray() : this, n)
                                },
                                map: function(t) {
                                    return n(n.map(this, (function(e, n) {
                                        return t.call(e, n, e)
                                    })))
                                },
                                slice: function() {
                                    return n(c.apply(this, arguments))
                                },
                                ready: function(t) {
                                    return E.test(u.readyState) && u.body ? t(n) : u.addEventListener("DOMContentLoaded", (function() {
                                        t(n)
                                    }), !1), this
                                },
                                get: function(e) {
                                    return e === t ? c.call(this) : this[e >= 0 ? e : e + this.length]
                                },
                                toArray: function() {
                                    return this.get()
                                },
                                size: function() {
                                    return this.length
                                },
                                remove: function() {
                                    return this.each((function() {
                                        null != this.parentNode && this.parentNode.removeChild(this)
                                    }))
                                },
                                each: function(t) {
                                    return a.every.call(this, (function(e, n) {
                                        return !1 !== t.call(e, n, e)
                                    })), this
                                },
                                filter: function(t) {
                                    return j(t) ? this.not(this.not(t)) : n(l.call(this, (function(e) {
                                        return k.matches(e, t)
                                    })))
                                },
                                add: function(t, e) {
                                    return n(o(this.concat(n(t, e))))
                                },
                                is: function(t) {
                                    return this.length > 0 && k.matches(this[0], t)
                                },
                                not: function(e) {
                                    var i = [];
                                    if (j(e) && e.call !== t) this.each((function(t) {
                                        e.call(this, t) || i.push(this)
                                    }));
                                    else {
                                        var r = "string" == typeof e ? this.filter(e) : I(e) && j(e.item) ? c.call(e) : n(e);
                                        this.forEach((function(t) {
                                            r.indexOf(t) < 0 && i.push(t)
                                        }))
                                    }
                                    return n(i)
                                },
                                has: function(t) {
                                    return this.filter((function() {
                                        return B(t) ? n.contains(this, t) : n(this).find(t).size()
                                    }))
                                },
                                eq: function(t) {
                                    return -1 === t ? this.slice(t) : this.slice(t, +t + 1)
                                },
                                first: function() {
                                    var t = this[0];
                                    return t && !B(t) ? t : n(t)
                                },
                                last: function() {
                                    var t = this[this.length - 1];
                                    return t && !B(t) ? t : n(t)
                                },
                                find: function(t) {
                                    var e = this;
                                    return t ? "object" == typeof t ? n(t).filter((function() {
                                        var t = this;
                                        return a.some.call(e, (function(e) {
                                            return n.contains(e, t)
                                        }))
                                    })) : 1 == this.length ? n(k.qsa(this[0], t)) : this.map((function() {
                                        return k.qsa(this, t)
                                    })) : n()
                                },
                                closest: function(t, e) {
                                    var i = [],
                                        r = "object" == typeof t && n(t);
                                    return this.each((function(n, o) {
                                        for (; o && !(r ? r.indexOf(o) >= 0 : k.matches(o, t));) o = o !== e && !D(o) && o.parentNode;
                                        o && i.indexOf(o) < 0 && i.push(o)
                                    })), n(i)
                                },
                                parents: function(t) {
                                    for (var e = [], i = this; i.length > 0;) i = n.map(i, (function(t) {
                                        if ((t = t.parentNode) && !D(t) && e.indexOf(t) < 0) return e.push(t), t
                                    }));
                                    return $(e, t)
                                },
                                parent: function(t) {
                                    return $(o(this.pluck("parentNode")), t)
                                },
                                children: function(t) {
                                    return $(this.map((function() {
                                        return z(this)
                                    })), t)
                                },
                                contents: function() {
                                    return this.map((function() {
                                        return this.contentDocument || c.call(this.childNodes)
                                    }))
                                },
                                siblings: function(t) {
                                    return $(this.map((function(t, e) {
                                        return l.call(z(e.parentNode), (function(t) {
                                            return t !== e
                                        }))
                                    })), t)
                                },
                                empty: function() {
                                    return this.each((function() {
                                        this.innerHTML = ""
                                    }))
                                },
                                pluck: function(t) {
                                    return n.map(this, (function(e) {
                                        return e[t]
                                    }))
                                },
                                show: function() {
                                    return this.each((function() {
                                        var t, e, n;
                                        "none" == this.style.display && (this.style.display = ""), "none" == getComputedStyle(this, "").getPropertyValue("display") && (this.style.display = (t = this.nodeName, f[t] || (e = u.createElement(t), u.body.appendChild(e), n = getComputedStyle(e, "").getPropertyValue("display"), e.parentNode.removeChild(e), "none" == n && (n = "block"), f[t] = n), f[t]))
                                    }))
                                },
                                replaceWith: function(t) {
                                    return this.before(t).remove()
                                },
                                wrap: function(t) {
                                    var e = j(t);
                                    if (this[0] && !e) var i = n(t).get(0),
                                        r = i.parentNode || this.length > 1;
                                    return this.each((function(o) {
                                        n(this).wrapAll(e ? t.call(this, o) : r ? i.cloneNode(!0) : i)
                                    }))
                                },
                                wrapAll: function(t) {
                                    if (this[0]) {
                                        var e;
                                        for (n(this[0]).before(t = n(t));
                                            (e = t.children()).length;) t = e.first();
                                        n(t).append(this)
                                    }
                                    return this
                                },
                                wrapInner: function(t) {
                                    var e = j(t);
                                    return this.each((function(i) {
                                        var r = n(this),
                                            o = r.contents(),
                                            a = e ? t.call(this, i) : t;
                                        o.length ? o.wrapAll(a) : r.append(a)
                                    }))
                                },
                                unwrap: function() {
                                    return this.parent().each((function() {
                                        n(this).replaceWith(n(this).children())
                                    })), this
                                },
                                clone: function() {
                                    return this.map((function() {
                                        return this.cloneNode(!0)
                                    }))
                                },
                                hide: function() {
                                    return this.css("display", "none")
                                },
                                toggle: function(e) {
                                    return this.each((function() {
                                        var i = n(this);
                                        (e === t ? "none" == i.css("display") : e) ? i.show(): i.hide()
                                    }))
                                },
                                prev: function(t) {
                                    return n(this.pluck("previousElementSibling")).filter(t || "*")
                                },
                                next: function(t) {
                                    return n(this.pluck("nextElementSibling")).filter(t || "*")
                                },
                                html: function(t) {
                                    return 0 in arguments ? this.each((function(e) {
                                        var i = this.innerHTML;
                                        n(this).empty().append(V(this, t, e, i))
                                    })) : 0 in this ? this[0].innerHTML : null
                                },
                                text: function(t) {
                                    return 0 in arguments ? this.each((function(e) {
                                        var n = V(this, t, e, this.textContent);
                                        this.textContent = null == n ? "" : "" + n
                                    })) : 0 in this ? this.pluck("textContent").join("") : null
                                },
                                attr: function(n, i) {
                                    var r;
                                    return "string" != typeof n || 1 in arguments ? this.each((function(t) {
                                        if (1 === this.nodeType)
                                            if (B(n))
                                                for (e in n) Z(this, e, n[e]);
                                            else Z(this, n, V(this, i, t, this.getAttribute(n)))
                                    })) : 0 in this && 1 == this[0].nodeType && null != (r = this[0].getAttribute(n)) ? r : t
                                },
                                removeAttr: function(t) {
                                    return this.each((function() {
                                        1 === this.nodeType && t.split(" ").forEach((function(t) {
                                            Z(this, t)
                                        }), this)
                                    }))
                                },
                                prop: function(t, e) {
                                    return t = A[t] || t, 1 in arguments ? this.each((function(n) {
                                        this[t] = V(this, e, n, this[t])
                                    })) : this[0] && this[0][t]
                                },
                                removeProp: function(t) {
                                    return t = A[t] || t, this.each((function() {
                                        delete this[t]
                                    }))
                                },
                                data: function(e, n) {
                                    var i = "data-" + e.replace(y, "-$1").toLowerCase(),
                                        r = 1 in arguments ? this.attr(i, n) : this.attr(i);
                                    return null !== r ? U(r) : t
                                },
                                val: function(t) {
                                    return 0 in arguments ? (null == t && (t = ""), this.each((function(e) {
                                        this.value = V(this, t, e, this.value)
                                    }))) : this[0] && (this[0].multiple ? n(this[0]).find("option").filter((function() {
                                        return this.selected
                                    })).pluck("value") : this[0].value)
                                },
                                offset: function(t) {
                                    if (t) return this.each((function(e) {
                                        var i = n(this),
                                            r = V(this, t, e, i.offset()),
                                            o = i.offsetParent().offset(),
                                            a = {
                                                top: r.top - o.top,
                                                left: r.left - o.left
                                            };
                                        "static" == i.css("position") && (a.position = "relative"), i.css(a)
                                    }));
                                    if (!this.length) return null;
                                    if (u.documentElement !== this[0] && !n.contains(u.documentElement, this[0])) return {
                                        top: 0,
                                        left: 0
                                    };
                                    var e = this[0].getBoundingClientRect();
                                    return {
                                        left: e.left + window.pageXOffset,
                                        top: e.top + window.pageYOffset,
                                        width: Math.round(e.width),
                                        height: Math.round(e.height)
                                    }
                                },
                                css: function(t, i) {
                                    if (arguments.length < 2) {
                                        var o = this[0];
                                        if ("string" == typeof t) {
                                            if (!o) return;
                                            return o.style[r(t)] || getComputedStyle(o, "").getPropertyValue(t)
                                        }
                                        if (O(t)) {
                                            if (!o) return;
                                            var a = {},
                                                s = getComputedStyle(o, "");
                                            return n.each(t, (function(t, e) {
                                                a[e] = o.style[r(e)] || s.getPropertyValue(e)
                                            })), a
                                        }
                                    }
                                    var l = "";
                                    if ("string" == L(t)) i || 0 === i ? l = H(t) + ":" + q(t, i) : this.each((function() {
                                        this.style.removeProperty(H(t))
                                    }));
                                    else
                                        for (e in t) t[e] || 0 === t[e] ? l += H(e) + ":" + q(e, t[e]) + ";" : this.each((function() {
                                            this.style.removeProperty(H(e))
                                        }));
                                    return this.each((function() {
                                        this.style.cssText += ";" + l
                                    }))
                                },
                                index: function(t) {
                                    return t ? this.indexOf(n(t)[0]) : this.parent().children().indexOf(this[0])
                                },
                                hasClass: function(t) {
                                    return !!t && a.some.call(this, (function(t) {
                                        return this.test(X(t))
                                    }), F(t))
                                },
                                addClass: function(t) {
                                    return t ? this.each((function(e) {
                                        if ("className" in this) {
                                            i = [];
                                            var r = X(this);
                                            V(this, t, e, r).split(/\s+/g).forEach((function(t) {
                                                n(this).hasClass(t) || i.push(t)
                                            }), this), i.length && X(this, r + (r ? " " : "") + i.join(" "))
                                        }
                                    })) : this
                                },
                                removeClass: function(e) {
                                    return this.each((function(n) {
                                        if ("className" in this) {
                                            if (e === t) return X(this, "");
                                            i = X(this), V(this, e, n, i).split(/\s+/g).forEach((function(t) {
                                                i = i.replace(F(t), " ")
                                            })), X(this, i.trim())
                                        }
                                    }))
                                },
                                toggleClass: function(e, i) {
                                    return e ? this.each((function(r) {
                                        var o = n(this);
                                        V(this, e, r, X(this)).split(/\s+/g).forEach((function(e) {
                                            (i === t ? !o.hasClass(e) : i) ? o.addClass(e): o.removeClass(e)
                                        }))
                                    })) : this
                                },
                                scrollTop: function(e) {
                                    if (this.length) {
                                        var n = "scrollTop" in this[0];
                                        return e === t ? n ? this[0].scrollTop : this[0].pageYOffset : this.each(n ? function() {
                                            this.scrollTop = e
                                        } : function() {
                                            this.scrollTo(this.scrollX, e)
                                        })
                                    }
                                },
                                scrollLeft: function(e) {
                                    if (this.length) {
                                        var n = "scrollLeft" in this[0];
                                        return e === t ? n ? this[0].scrollLeft : this[0].pageXOffset : this.each(n ? function() {
                                            this.scrollLeft = e
                                        } : function() {
                                            this.scrollTo(e, this.scrollY)
                                        })
                                    }
                                },
                                position: function() {
                                    if (this.length) {
                                        var t = this[0],
                                            e = this.offsetParent(),
                                            i = this.offset(),
                                            r = g.test(e[0].nodeName) ? {
                                                top: 0,
                                                left: 0
                                            } : e.offset();
                                        return i.top -= parseFloat(n(t).css("margin-top")) || 0, i.left -= parseFloat(n(t).css("margin-left")) || 0, r.top += parseFloat(n(e[0]).css("border-top-width")) || 0, r.left += parseFloat(n(e[0]).css("border-left-width")) || 0, {
                                            top: i.top - r.top,
                                            left: i.left - r.left
                                        }
                                    }
                                },
                                offsetParent: function() {
                                    return this.map((function() {
                                        for (var t = this.offsetParent || u.body; t && !g.test(t.nodeName) && "static" == n(t).css("position");) t = t.offsetParent;
                                        return t
                                    }))
                                }
                            }, n.fn.detach = n.fn.remove, ["width", "height"].forEach((function(e) {
                                var i = e.replace(/./, (function(t) {
                                    return t[0].toUpperCase()
                                }));
                                n.fn[e] = function(r) {
                                    var o, a = this[0];
                                    return r === t ? P(a) ? a["inner" + i] : D(a) ? a.documentElement["scroll" + i] : (o = this.offset()) && o[e] : this.each((function(t) {
                                        (a = n(this)).css(e, V(this, r, t, a[e]()))
                                    }))
                                }
                            })), ["after", "prepend", "before", "append"].forEach((function(e, i) {
                                var r = i % 2;
                                n.fn[e] = function() {
                                    var e, o, a = n.map(arguments, (function(i) {
                                            var r = [];
                                            return "array" == (e = L(i)) ? (i.forEach((function(e) {
                                                return e.nodeType !== t ? r.push(e) : n.zepto.isZ(e) ? r = r.concat(e.get()) : void(r = r.concat(k.fragment(e)))
                                            })), r) : "object" == e || null == i ? i : k.fragment(i)
                                        })),
                                        s = this.length > 1;
                                    return a.length < 1 ? this : this.each((function(t, e) {
                                        o = r ? e : e.parentNode, e = 0 == i ? e.nextSibling : 1 == i ? e.firstChild : 2 == i ? e : null;
                                        var l = n.contains(u.documentElement, o);
                                        a.forEach((function(t) {
                                            if (s) t = t.cloneNode(!0);
                                            else if (!o) return n(t).remove();
                                            o.insertBefore(t, e), l && K(t, (function(t) {
                                                if (!(null == t.nodeName || "SCRIPT" !== t.nodeName.toUpperCase() || t.type && "text/javascript" !== t.type || t.src)) {
                                                    var e = t.ownerDocument ? t.ownerDocument.defaultView : window;
                                                    e.eval.call(e, t.innerHTML)
                                                }
                                            }))
                                        }))
                                    }))
                                }, n.fn[r ? e + "To" : "insert" + (i ? "Before" : "After")] = function(t) {
                                    return n(t)[e](this), this
                                }
                            })), k.Z.prototype = _.prototype = n.fn, k.uniq = o, k.deserializeValue = U, n.zepto = k, n
                        }(), window.Zepto = n, void 0 === window.$ && (window.$ = n), t.exports = n,
                        function(t) {
                            var e, n = 1,
                                i = Array.prototype.slice,
                                r = t.isFunction,
                                o = function(t) {
                                    return "string" == typeof t
                                },
                                a = {},
                                s = {},
                                l = "onfocusin" in window,
                                c = {
                                    focus: "focusin",
                                    blur: "focusout"
                                },
                                u = {
                                    mouseenter: "mouseover",
                                    mouseleave: "mouseout"
                                };

                            function f(t) {
                                return t._zid || (t._zid = n++)
                            }

                            function d(t, e, n, i) {
                                if ((e = h(e)).ns) var r = (o = e.ns, new RegExp("(?:^| )" + o.replace(" ", " .* ?") + "(?: |$)"));
                                var o;
                                return (a[f(t)] || []).filter((function(t) {
                                    return t && (!e.e || t.e == e.e) && (!e.ns || r.test(t.ns)) && (!n || f(t.fn) === f(n)) && (!i || t.sel == i)
                                }))
                            }

                            function h(t) {
                                var e = ("" + t).split(".");
                                return {
                                    e: e[0],
                                    ns: e.slice(1).sort().join(" ")
                                }
                            }

                            function p(t, e) {
                                return t.del && !l && t.e in c || !!e
                            }

                            function v(t) {
                                return u[t] || l && c[t] || t
                            }

                            function m(n, i, r, o, s, l, c) {
                                var d = f(n),
                                    m = a[d] || (a[d] = []);
                                i.split(/\s/).forEach((function(i) {
                                    if ("ready" == i) return t(document).ready(r);
                                    var a = h(i);
                                    a.fn = r, a.sel = s, a.e in u && (r = function(e) {
                                        var n = e.relatedTarget;
                                        if (!n || n !== this && !t.contains(this, n)) return a.fn.apply(this, arguments)
                                    }), a.del = l;
                                    var f = l || r;
                                    a.proxy = function(t) {
                                        if (!(t = C(t)).isImmediatePropagationStopped()) {
                                            t.data = o;
                                            var i = f.apply(n, t._args == e ? [t] : [t].concat(t._args));
                                            return !1 === i && (t.preventDefault(), t.stopPropagation()), i
                                        }
                                    }, a.i = m.length, m.push(a), "addEventListener" in n && n.addEventListener(v(a.e), a.proxy, p(a, c))
                                }))
                            }

                            function g(t, e, n, i, r) {
                                var o = f(t);
                                (e || "").split(/\s/).forEach((function(e) {
                                    d(t, e, n, i).forEach((function(e) {
                                        delete a[o][e.i], "removeEventListener" in t && t.removeEventListener(v(e.e), e.proxy, p(e, r))
                                    }))
                                }))
                            }
                            s.click = s.mousedown = s.mouseup = s.mousemove = "MouseEvents", t.event = {
                                add: m,
                                remove: g
                            }, t.proxy = function(e, n) {
                                var a = 2 in arguments && i.call(arguments, 2);
                                if (r(e)) {
                                    var s = function() {
                                        return e.apply(n, a ? a.concat(i.call(arguments)) : arguments)
                                    };
                                    return s._zid = f(e), s
                                }
                                if (o(n)) return a ? (a.unshift(e[n], e), t.proxy.apply(null, a)) : t.proxy(e[n], e);
                                throw new TypeError("expected function")
                            }, t.fn.bind = function(t, e, n) {
                                return this.on(t, e, n)
                            }, t.fn.unbind = function(t, e) {
                                return this.off(t, e)
                            }, t.fn.one = function(t, e, n, i) {
                                return this.on(t, e, n, i, 1)
                            };
                            var y = function() {
                                    return !0
                                },
                                b = function() {
                                    return !1
                                },
                                w = /^([A-Z]|returnValue$|layer[XY]$|webkitMovement[XY]$)/,
                                x = {
                                    preventDefault: "isDefaultPrevented",
                                    stopImmediatePropagation: "isImmediatePropagationStopped",
                                    stopPropagation: "isPropagationStopped"
                                };

                            function C(n, i) {
                                return !i && n.isDefaultPrevented || (i || (i = n), t.each(x, (function(t, e) {
                                    var r = i[t];
                                    n[t] = function() {
                                        return this[e] = y, r && r.apply(i, arguments)
                                    }, n[e] = b
                                })), n.timeStamp || (n.timeStamp = Date.now()), (i.defaultPrevented !== e ? i.defaultPrevented : "returnValue" in i ? !1 === i.returnValue : i.getPreventDefault && i.getPreventDefault()) && (n.isDefaultPrevented = y)), n
                            }

                            function E(t) {
                                var n, i = {
                                    originalEvent: t
                                };
                                for (n in t) w.test(n) || t[n] === e || (i[n] = t[n]);
                                return C(i, t)
                            }
                            t.fn.delegate = function(t, e, n) {
                                return this.on(e, t, n)
                            }, t.fn.undelegate = function(t, e, n) {
                                return this.off(e, t, n)
                            }, t.fn.live = function(e, n) {
                                return t(document.body).delegate(this.selector, e, n), this
                            }, t.fn.die = function(e, n) {
                                return t(document.body).undelegate(this.selector, e, n), this
                            }, t.fn.on = function(n, a, s, l, c) {
                                var u, f, d = this;
                                return n && !o(n) ? (t.each(n, (function(t, e) {
                                    d.on(t, a, s, e, c)
                                })), d) : (o(a) || r(l) || !1 === l || (l = s, s = a, a = e), l !== e && !1 !== s || (l = s, s = e), !1 === l && (l = b), d.each((function(e, r) {
                                    c && (u = function(t) {
                                        return g(r, t.type, l), l.apply(this, arguments)
                                    }), a && (f = function(e) {
                                        var n, o = t(e.target).closest(a, r).get(0);
                                        if (o && o !== r) return n = t.extend(E(e), {
                                            currentTarget: o,
                                            liveFired: r
                                        }), (u || l).apply(o, [n].concat(i.call(arguments, 1)))
                                    }), m(r, n, l, s, a, f || u)
                                })))
                            }, t.fn.off = function(n, i, a) {
                                var s = this;
                                return n && !o(n) ? (t.each(n, (function(t, e) {
                                    s.off(t, i, e)
                                })), s) : (o(i) || r(a) || !1 === a || (a = i, i = e), !1 === a && (a = b), s.each((function() {
                                    g(this, n, a, i)
                                })))
                            }, t.fn.trigger = function(e, n) {
                                return (e = o(e) || t.isPlainObject(e) ? t.Event(e) : C(e))._args = n, this.each((function() {
                                    e.type in c && "function" == typeof this[e.type] ? this[e.type]() : "dispatchEvent" in this ? this.dispatchEvent(e) : t(this).triggerHandler(e, n)
                                }))
                            }, t.fn.triggerHandler = function(e, n) {
                                var i, r;
                                return this.each((function(a, s) {
                                    (i = E(o(e) ? t.Event(e) : e))._args = n, i.target = s, t.each(d(s, e.type || e), (function(t, e) {
                                        if (r = e.proxy(i), i.isImmediatePropagationStopped()) return !1
                                    }))
                                })), r
                            }, "focusin focusout focus blur load resize scroll unload click dblclick mousedown mouseup mousemove mouseover mouseout mouseenter mouseleave change select keydown keypress keyup error".split(" ").forEach((function(e) {
                                t.fn[e] = function(t) {
                                    return 0 in arguments ? this.bind(e, t) : this.trigger(e)
                                }
                            })), t.Event = function(t, e) {
                                o(t) || (t = (e = t).type);
                                var n = document.createEvent(s[t] || "Events"),
                                    i = !0;
                                if (e)
                                    for (var r in e) "bubbles" == r ? i = !!e[r] : n[r] = e[r];
                                return n.initEvent(t, i, !0), C(n)
                            }
                        }(n),
                        function(t) {
                            var e, n, i = +new Date,
                                r = window.document,
                                o = /<script\b[^<]*(?:(?!<\/script>)<[^<]*)*<\/script>/gi,
                                a = /^(?:text|application)\/javascript/i,
                                s = /^(?:text|application)\/xml/i,
                                l = "application/json",
                                c = "text/html",
                                u = /^\s*$/,
                                f = r.createElement("a");

                            function d(e, n, i, o) {
                                if (e.global) return function(e, n, i) {
                                    var r = t.Event(n);
                                    return t(e).trigger(r, i), !r.isDefaultPrevented()
                                }(n || r, i, o)
                            }

                            function h(t, e) {
                                var n = e.context;
                                if (!1 === e.beforeSend.call(n, t, e) || !1 === d(e, n, "ajaxBeforeSend", [t, e])) return !1;
                                d(e, n, "ajaxSend", [t, e])
                            }

                            function p(t, e, n, i) {
                                var r = n.context,
                                    o = "success";
                                n.success.call(r, t, o, e), i && i.resolveWith(r, [t, o, e]), d(n, r, "ajaxSuccess", [e, n, t]), m(o, e, n)
                            }

                            function v(t, e, n, i, r) {
                                var o = i.context;
                                i.error.call(o, n, e, t), r && r.rejectWith(o, [n, e, t]), d(i, o, "ajaxError", [n, i, t || e]), m(e, n, i)
                            }

                            function m(e, n, i) {
                                var r = i.context;
                                i.complete.call(r, n, e), d(i, r, "ajaxComplete", [n, i]),
                                    function(e) {
                                        e.global && !--t.active && d(e, null, "ajaxStop")
                                    }(i)
                            }

                            function g() {}

                            function y(t, e) {
                                return "" == e ? t : (t + "&" + e).replace(/[&?]{1,2}/, "?")
                            }

                            function b(e, n, i, r) {
                                return t.isFunction(n) && (r = i, i = n, n = void 0), t.isFunction(i) || (r = i, i = void 0), {
                                    url: e,
                                    data: n,
                                    success: i,
                                    dataType: r
                                }
                            }
                            f.href = window.location.href, t.active = 0, t.ajaxJSONP = function(e, n) {
                                if (!("type" in e)) return t.ajax(e);
                                var o, a, s = e.jsonpCallback,
                                    l = (t.isFunction(s) ? s() : s) || "Zepto" + i++,
                                    c = r.createElement("script"),
                                    u = window[l],
                                    f = function(e) {
                                        t(c).triggerHandler("error", e || "abort")
                                    },
                                    d = {
                                        abort: f
                                    };
                                return n && n.promise(d), t(c).on("load error", (function(i, r) {
                                    clearTimeout(a), t(c).off().remove(), "error" != i.type && o ? p(o[0], d, e, n) : v(null, r || "error", d, e, n), window[l] = u, o && t.isFunction(u) && u(o[0]), u = o = void 0
                                })), !1 === h(d, e) ? (f("abort"), d) : (window[l] = function() {
                                    o = arguments
                                }, c.src = e.url.replace(/\?(.+)=\?/, "?$1=" + l), r.head.appendChild(c), e.timeout > 0 && (a = setTimeout((function() {
                                    f("timeout")
                                }), e.timeout)), d)
                            }, t.ajaxSettings = {
                                type: "GET",
                                beforeSend: g,
                                success: g,
                                error: g,
                                complete: g,
                                context: null,
                                global: !0,
                                xhr: function() {
                                    return new window.XMLHttpRequest
                                },
                                accepts: {
                                    script: "text/javascript, application/javascript, application/x-javascript",
                                    json: l,
                                    xml: "application/xml, text/xml",
                                    html: c,
                                    text: "text/plain"
                                },
                                crossDomain: !1,
                                timeout: 0,
                                processData: !0,
                                cache: !0,
                                dataFilter: g
                            }, t.ajax = function(i) {
                                var o, m, b = t.extend({}, i || {}),
                                    w = t.Deferred && t.Deferred();
                                for (e in t.ajaxSettings) void 0 === b[e] && (b[e] = t.ajaxSettings[e]);
                                (function(e) {
                                    e.global && 0 == t.active++ && d(e, null, "ajaxStart")
                                })(b), b.crossDomain || ((o = r.createElement("a")).href = b.url, o.href = o.href, b.crossDomain = f.protocol + "//" + f.host != o.protocol + "//" + o.host), b.url || (b.url = window.location.toString()), (m = b.url.indexOf("#")) > -1 && (b.url = b.url.slice(0, m)),
                                    function(e) {
                                        e.processData && e.data && "string" != t.type(e.data) && (e.data = t.param(e.data, e.traditional)), !e.data || e.type && "GET" != e.type.toUpperCase() && "jsonp" != e.dataType || (e.url = y(e.url, e.data), e.data = void 0)
                                    }(b);
                                var x = b.dataType,
                                    C = /\?.+=\?/.test(b.url);
                                if (C && (x = "jsonp"), !1 !== b.cache && (i && !0 === i.cache || "script" != x && "jsonp" != x) || (b.url = y(b.url, "_=" + Date.now())), "jsonp" == x) return C || (b.url = y(b.url, b.jsonp ? b.jsonp + "=?" : !1 === b.jsonp ? "" : "callback=?")), t.ajaxJSONP(b, w);
                                var E, T = b.accepts[x],
                                    M = {},
                                    S = function(t, e) {
                                        M[t.toLowerCase()] = [t, e]
                                    },
                                    k = /^([\w-]+:)\/\//.test(b.url) ? RegExp.$1 : window.location.protocol,
                                    N = b.xhr(),
                                    A = N.setRequestHeader;
                                if (w && w.promise(N), b.crossDomain || S("X-Requested-With", "XMLHttpRequest"), S("Accept", T || "*/*"), (T = b.mimeType || T) && (T.indexOf(",") > -1 && (T = T.split(",", 2)[0]), N.overrideMimeType && N.overrideMimeType(T)), (b.contentType || !1 !== b.contentType && b.data && "GET" != b.type.toUpperCase()) && S("Content-Type", b.contentType || "application/x-www-form-urlencoded"), b.headers)
                                    for (n in b.headers) S(n, b.headers[n]);
                                if (N.setRequestHeader = S, N.onreadystatechange = function() {
                                        if (4 == N.readyState) {
                                            N.onreadystatechange = g, clearTimeout(E);
                                            var e, n = !1;
                                            if (N.status >= 200 && N.status < 300 || 304 == N.status || 0 == N.status && "file:" == k) {
                                                if (x = x || function(t) {
                                                        return t && (t = t.split(";", 2)[0]), t && (t == c ? "html" : t == l ? "json" : a.test(t) ? "script" : s.test(t) && "xml") || "text"
                                                    }(b.mimeType || N.getResponseHeader("content-type")), "arraybuffer" == N.responseType || "blob" == N.responseType) e = N.response;
                                                else {
                                                    e = N.responseText;
                                                    try {
                                                        e = function(t, e, n) {
                                                            if (n.dataFilter == g) return t;
                                                            var i = n.context;
                                                            return n.dataFilter.call(i, t, e)
                                                        }(e, x, b), "script" == x ? (0, eval)(e) : "xml" == x ? e = N.responseXML : "json" == x && (e = u.test(e) ? null : t.parseJSON(e))
                                                    } catch (t) {
                                                        n = t
                                                    }
                                                    if (n) return v(n, "parsererror", N, b, w)
                                                }
                                                p(e, N, b, w)
                                            } else v(N.statusText || null, N.status ? "error" : "abort", N, b, w)
                                        }
                                    }, !1 === h(N, b)) return N.abort(), v(null, "abort", N, b, w), N;
                                var O = !("async" in b) || b.async;
                                if (N.open(b.type, b.url, O, b.username, b.password), b.xhrFields)
                                    for (n in b.xhrFields) N[n] = b.xhrFields[n];
                                for (n in M) A.apply(N, M[n]);
                                return b.timeout > 0 && (E = setTimeout((function() {
                                    N.onreadystatechange = g, N.abort(), v(null, "timeout", N, b, w)
                                }), b.timeout)), N.send(b.data ? b.data : null), N
                            }, t.get = function() {
                                return t.ajax(b.apply(null, arguments))
                            }, t.post = function() {
                                var e = b.apply(null, arguments);
                                return e.type = "POST", t.ajax(e)
                            }, t.getJSON = function() {
                                var e = b.apply(null, arguments);
                                return e.dataType = "json", t.ajax(e)
                            }, t.fn.load = function(e, n, i) {
                                if (!this.length) return this;
                                var r, a = this,
                                    s = e.split(/\s/),
                                    l = b(e, n, i),
                                    c = l.success;
                                return s.length > 1 && (l.url = s[0], r = s[1]), l.success = function(e) {
                                    a.html(r ? t("<div>").html(e.replace(o, "")).find(r) : e), c && c.apply(a, arguments)
                                }, t.ajax(l), this
                            };
                            var w = encodeURIComponent;

                            function x(e, n, i, r) {
                                var o, a = t.isArray(n),
                                    s = t.isPlainObject(n);
                                t.each(n, (function(n, l) {
                                    o = t.type(l), r && (n = i ? r : r + "[" + (s || "object" == o || "array" == o ? n : "") + "]"), !r && a ? e.add(l.name, l.value) : "array" == o || !i && "object" == o ? x(e, l, i, n) : e.add(n, l)
                                }))
                            }
                            t.param = function(e, n) {
                                var i = [];
                                return i.add = function(e, n) {
                                    t.isFunction(n) && (n = n()), null == n && (n = ""), this.push(w(e) + "=" + w(n))
                                }, x(i, e, n), i.join("&").replace(/%20/g, "+")
                            }
                        }(n), (e = n).fn.serializeArray = function() {
                            var t, n, i = [],
                                r = function(e) {
                                    if (e.forEach) return e.forEach(r);
                                    i.push({
                                        name: t,
                                        value: e
                                    })
                                };
                            return this[0] && e.each(this[0].elements, (function(i, o) {
                                n = o.type, (t = o.name) && "fieldset" != o.nodeName.toLowerCase() && !o.disabled && "submit" != n && "reset" != n && "button" != n && "file" != n && ("radio" != n && "checkbox" != n || o.checked) && r(e(o).val())
                            })), i
                        }, e.fn.serialize = function() {
                            var t = [];
                            return this.serializeArray().forEach((function(e) {
                                t.push(encodeURIComponent(e.name) + "=" + encodeURIComponent(e.value))
                            })), t.join("&")
                        }, e.fn.submit = function(t) {
                            if (0 in arguments) this.bind("submit", t);
                            else if (this.length) {
                                var n = e.Event("submit");
                                this.eq(0).trigger(n), n.isDefaultPrevented() || this.get(0).submit()
                            }
                            return this
                        },
                        function() {
                            try {
                                getComputedStyle(void 0)
                            } catch (e) {
                                var t = getComputedStyle;
                                window.getComputedStyle = function(e, n) {
                                    try {
                                        return t(e, n)
                                    } catch (t) {
                                        return null
                                    }
                                }
                            }
                        }(), n;
                    var e, n
                }.call(e, n, e, t)) || (t.exports = i)
            }
        },
        i = {};

    function r(t) {
        if (i[t]) return i[t].exports;
        var e = i[t] = {
            exports: {}
        };
        return n[t].call(e.exports, e, e.exports, r), e.exports
    }
    r.d = (t, e) => {
        for (var n in e) r.o(e, n) && !r.o(t, n) && Object.defineProperty(t, n, {
            enumerable: !0,
            get: e[n]
        })
    }, r.o = (t, e) => Object.prototype.hasOwnProperty.call(t, e), r.r = t => {
        "undefined" != typeof Symbol && Symbol.toStringTag && Object.defineProperty(t, Symbol.toStringTag, {
            value: "Module"
        }), Object.defineProperty(t, "__esModule", {
            value: !0
        })
    }, (() => {
        var t = r(745);

        function e() {
            t(this).children("ul:nth-child(2)").length && t(".first-generation--wrapper").addClass("show-first-fold")
        }

        function n() {
            var e = t(".second-generation ul");
            if (!t(this).hasClass("active")) {
                e.removeClass("active"), t(".first-generation > ul ").children("li.active").removeClass("active"), t(this).addClass("active");
                const n = t(this).children("ul:nth-child(2)"),
                    r = '<li class="go-back first-generation-go-back"><icon class="icon-keyboard_backspace"></icon>Back</li>',
                    a = n.html() ? n.html() : "";
                e.html(r + a).show(), setTimeout((function() {
                    e.addClass("active")
                }), 100), t(".second-generation > ul > li").on("mouseover", i), t(".second-generation > ul > li").on("click", o), t(".first-generation-go-back").on("click", (function() {
                    t(".first-generation--wrapper").removeClass("show-first-fold")
                }))
            }
        }

        function i() {
            const e = t(".third-generation ul"),
                n = t(this).children("ul:nth-child(2)");
            if (!t(this).hasClass("active")) {
                e.removeClass("active"), t(".second-generation > ul ").children("li.active").removeClass("active"), t(this).addClass("active");
                const i = '<li class="go-back second-generation-go-back"><icon class="icon-keyboard_backspace"></icon>Back</li>',
                    r = n.html() ? n.html() : "";
                e.html(i + r).show(), setTimeout((function() {
                    e.addClass("active")
                }), 100), t(".second-generation-go-back").on("click", (function() {
                    t(".first-generation--wrapper").removeClass("show-second-fold")
                }))
            }
        }

        function o() {
            t(this).children("ul:nth-child(2)").length && t(".first-generation--wrapper").addClass("show-second-fold")
        }
        t((function() {
            t(".first-generation > ul > li ").on("mouseover", n), t(".first-generation > ul > li ").on("click", e), t(".navbar__tutorial-menu").on("click", (function() {
                console.log("clicked"), t(".mega-menu").length && t("body").toggleClass("overlay-open")
            })), t(".navbar__actions .icon-search").click((function() {
                t(".navbar__search--xs").toggleClass("show")
            })), t("form .icon-search").click((function() {
                t(".navbar__search--input").val() && t("#search-form").submit()
            }))
        })), t((function() {
            t("#hamburger-menu").click((function() {
                t("body").toggleClass("hamburger-menu-overlay-open")
            })), t(".hamburger-menu-overlay").click((function() {
                t("body").removeClass("hamburger-menu-overlay-open")
            }))
        }))
    })(), (() => {
        "use strict";
        var t = window,
            e = t.requestAnimationFrame || t.webkitRequestAnimationFrame || t.mozRequestAnimationFrame || t.msRequestAnimationFrame || function(t) {
                return setTimeout(t, 16)
            },
            n = window,
            i = n.cancelAnimationFrame || n.mozCancelAnimationFrame || function(t) {
                clearTimeout(t)
            };

        function r() {
            for (var t, e, n, i = arguments[0] || {}, r = 1, o = arguments.length; r < o; r++)
                if (null !== (t = arguments[r]))
                    for (e in t) i !== (n = t[e]) && void 0 !== n && (i[e] = n);
            return i
        }

        function o(t) {
            return ["true", "false"].indexOf(t) >= 0 ? JSON.parse(t) : t
        }

        function a(t, e, n, i) {
            if (i) try {
                t.setItem(e, n)
            } catch (t) {}
            return n
        }

        function s() {
            var t = document,
                e = t.body;
            return e || ((e = t.createElement("body")).fake = !0), e
        }
        var l = document.documentElement;

        function c(t) {
            var e = "";
            return t.fake && (e = l.style.overflow, t.style.background = "", t.style.overflow = l.style.overflow = "hidden", l.appendChild(t)), e
        }

        function u(t, e) {
            t.fake && (t.remove(), l.style.overflow = e, l.offsetHeight)
        }

        function f(t, e, n, i) {
            "insertRule" in t ? t.insertRule(e + "{" + n + "}", i) : t.addRule(e, n, i)
        }

        function d(t) {
            return ("insertRule" in t ? t.cssRules : t.rules).length
        }

        function h(t, e, n) {
            for (var i = 0, r = t.length; i < r; i++) e.call(n, t[i], i)
        }
        var p = "classList" in document.createElement("_"),
            v = p ? function(t, e) {
                return t.classList.contains(e)
            } : function(t, e) {
                return t.className.indexOf(e) >= 0
            },
            m = p ? function(t, e) {
                v(t, e) || t.classList.add(e)
            } : function(t, e) {
                v(t, e) || (t.className += " " + e)
            },
            g = p ? function(t, e) {
                v(t, e) && t.classList.remove(e)
            } : function(t, e) {
                v(t, e) && (t.className = t.className.replace(e, ""))
            };

        function y(t, e) {
            return t.hasAttribute(e)
        }

        function b(t, e) {
            return t.getAttribute(e)
        }

        function w(t) {
            return void 0 !== t.item
        }

        function x(t, e) {
            if (t = w(t) || t instanceof Array ? t : [t], "[object Object]" === Object.prototype.toString.call(e))
                for (var n = t.length; n--;)
                    for (var i in e) t[n].setAttribute(i, e[i])
        }

        function C(t, e) {
            t = w(t) || t instanceof Array ? t : [t];
            for (var n = (e = e instanceof Array ? e : [e]).length, i = t.length; i--;)
                for (var r = n; r--;) t[i].removeAttribute(e[r])
        }

        function E(t) {
            for (var e = [], n = 0, i = t.length; n < i; n++) e.push(t[n]);
            return e
        }

        function T(t, e) {
            "none" !== t.style.display && (t.style.display = "none")
        }

        function M(t, e) {
            "none" === t.style.display && (t.style.display = "")
        }

        function S(t) {
            return "none" !== window.getComputedStyle(t).display
        }

        function k(t) {
            if ("string" == typeof t) {
                var e = [t],
                    n = t.charAt(0).toUpperCase() + t.substr(1);
                ["Webkit", "Moz", "ms", "O"].forEach((function(i) {
                    "ms" === i && "transform" !== t || e.push(i + n)
                })), t = e
            }
            for (var i = document.createElement("fakeelement"), r = (t.length, 0); r < t.length; r++) {
                var o = t[r];
                if (void 0 !== i.style[o]) return o
            }
            return !1
        }

        function N(t, e) {
            var n = !1;
            return /^Webkit/.test(t) ? n = "webkit" + e + "End" : /^O/.test(t) ? n = "o" + e + "End" : t && (n = e.toLowerCase() + "end"), n
        }
        var A = !1;
        try {
            var O = Object.defineProperty({}, "passive", {
                get: function() {
                    A = !0
                }
            });
            window.addEventListener("test", null, O)
        } catch (t) {}
        var L = !!A && {
            passive: !0
        };

        function j(t, e, n) {
            for (var i in e) {
                var r = ["touchstart", "touchmove"].indexOf(i) >= 0 && !n && L;
                t.addEventListener(i, e[i], r)
            }
        }

        function P(t, e) {
            for (var n in e) {
                var i = ["touchstart", "touchmove"].indexOf(n) >= 0 && L;
                t.removeEventListener(n, e[n], i)
            }
        }

        function D() {
            return {
                topics: {},
                on: function(t, e) {
                    this.topics[t] = this.topics[t] || [], this.topics[t].push(e)
                },
                off: function(t, e) {
                    if (this.topics[t])
                        for (var n = 0; n < this.topics[t].length; n++)
                            if (this.topics[t][n] === e) {
                                this.topics[t].splice(n, 1);
                                break
                            }
                },
                emit: function(t, e) {
                    e.type = t, this.topics[t] && this.topics[t].forEach((function(n) {
                        n(e, t)
                    }))
                }
            }
        }
        Object.keys || (Object.keys = function(t) {
            var e = [];
            for (var n in t) Object.prototype.hasOwnProperty.call(t, n) && e.push(n);
            return e
        }), "remove" in Element.prototype || (Element.prototype.remove = function() {
            this.parentNode && this.parentNode.removeChild(this)
        });
        var B = function(t) {
            t = r({
                container: ".slider",
                mode: "carousel",
                axis: "horizontal",
                items: 1,
                gutter: 0,
                edgePadding: 0,
                fixedWidth: !1,
                autoWidth: !1,
                viewportMax: !1,
                slideBy: 1,
                center: !1,
                controls: !0,
                controlsPosition: "top",
                controlsText: ["prev", "next"],
                controlsContainer: !1,
                prevButton: !1,
                nextButton: !1,
                nav: !0,
                navPosition: "top",
                navContainer: !1,
                navAsThumbnails: !1,
                arrowKeys: !1,
                speed: 300,
                autoplay: !1,
                autoplayPosition: "top",
                autoplayTimeout: 5e3,
                autoplayDirection: "forward",
                autoplayText: ["start", "stop"],
                autoplayHoverPause: !1,
                autoplayButton: !1,
                autoplayButtonOutput: !0,
                autoplayResetOnVisibility: !0,
                animateIn: "tns-fadeIn",
                animateOut: "tns-fadeOut",
                animateNormal: "tns-normal",
                animateDelay: !1,
                loop: !0,
                rewind: !1,
                autoHeight: !1,
                responsive: !1,
                lazyload: !1,
                lazyloadSelector: ".tns-lazy-img",
                touch: !0,
                mouseDrag: !1,
                swipeAngle: 15,
                nested: !1,
                preventActionWhenRunning: !1,
                preventScrollOnTouch: !1,
                freezable: !0,
                onInit: !1,
                useLocalStorage: !0,
                nonce: !1
            }, t || {});
            var n = document,
                l = window,
                p = {
                    ENTER: 13,
                    SPACE: 32,
                    LEFT: 37,
                    RIGHT: 39
                },
                w = {},
                A = t.useLocalStorage;
            if (A) {
                var O = navigator.userAgent,
                    L = new Date;
                try {
                    (w = l.localStorage) ? (w.setItem(L, L), A = w.getItem(L) == L, w.removeItem(L)) : A = !1, A || (w = {})
                } catch (t) {
                    A = !1
                }
                A && (w.tnsApp && w.tnsApp !== O && ["tC", "tPL", "tMQ", "tTf", "t3D", "tTDu", "tTDe", "tADu", "tADe", "tTE", "tAE"].forEach((function(t) {
                    w.removeItem(t)
                })), localStorage.tnsApp = O)
            }
            var R = w.tC ? o(w.tC) : a(w, "tC", function() {
                    var t = document,
                        e = s(),
                        n = c(e),
                        i = t.createElement("div"),
                        r = !1;
                    e.appendChild(i);
                    try {
                        for (var o, a = "(10px * 10)", l = ["calc" + a, "-moz-calc" + a, "-webkit-calc" + a], f = 0; f < 3; f++)
                            if (o = l[f], i.style.width = o, 100 === i.offsetWidth) {
                                r = o.replace(a, "");
                                break
                            }
                    } catch (t) {}
                    return e.fake ? u(e, n) : i.remove(), r
                }(), A),
                I = w.tPL ? o(w.tPL) : a(w, "tPL", function() {
                    var t, e = document,
                        n = s(),
                        i = c(n),
                        r = e.createElement("div"),
                        o = e.createElement("div"),
                        a = "";
                    r.className = "tns-t-subp2", o.className = "tns-t-ct";
                    for (var l = 0; l < 70; l++) a += "<div></div>";
                    return o.innerHTML = a, r.appendChild(o), n.appendChild(r), t = Math.abs(r.getBoundingClientRect().left - o.children[67].getBoundingClientRect().left) < 2, n.fake ? u(n, i) : r.remove(), t
                }(), A),
                H = w.tMQ ? o(w.tMQ) : a(w, "tMQ", function() {
                    if (window.matchMedia || window.msMatchMedia) return !0;
                    var t, e = document,
                        n = s(),
                        i = c(n),
                        r = e.createElement("div"),
                        o = e.createElement("style"),
                        a = "@media all and (min-width:1px){.tns-mq-test{position:absolute}}";
                    return o.type = "text/css", r.className = "tns-mq-test", n.appendChild(o), n.appendChild(r), o.styleSheet ? o.styleSheet.cssText = a : o.appendChild(e.createTextNode(a)), t = window.getComputedStyle ? window.getComputedStyle(r).position : r.currentStyle.position, n.fake ? u(n, i) : r.remove(), "absolute" === t
                }(), A),
                F = w.tTf ? o(w.tTf) : a(w, "tTf", k("transform"), A),
                q = w.t3D ? o(w.t3D) : a(w, "t3D", function(t) {
                    if (!t) return !1;
                    if (!window.getComputedStyle) return !1;
                    var e, n = document,
                        i = s(),
                        r = c(i),
                        o = n.createElement("p"),
                        a = t.length > 9 ? "-" + t.slice(0, -9).toLowerCase() + "-" : "";
                    return a += "transform", i.insertBefore(o, null), o.style[t] = "translate3d(1px,1px,1px)", e = window.getComputedStyle(o).getPropertyValue(a), i.fake ? u(i, r) : o.remove(), void 0 !== e && e.length > 0 && "none" !== e
                }(F), A),
                z = w.tTDu ? o(w.tTDu) : a(w, "tTDu", k("transitionDuration"), A),
                _ = w.tTDe ? o(w.tTDe) : a(w, "tTDe", k("transitionDelay"), A),
                W = w.tADu ? o(w.tADu) : a(w, "tADu", k("animationDuration"), A),
                $ = w.tADe ? o(w.tADe) : a(w, "tADe", k("animationDelay"), A),
                V = w.tTE ? o(w.tTE) : a(w, "tTE", N(z, "Transition"), A),
                Z = w.tAE ? o(w.tAE) : a(w, "tAE", N(W, "Animation"), A),
                X = l.console && "function" == typeof l.console.warn,
                U = ["container", "controlsContainer", "prevButton", "nextButton", "navContainer", "autoplayButton"],
                K = {};
            if (U.forEach((function(e) {
                    if ("string" == typeof t[e]) {
                        var i = t[e],
                            r = n.querySelector(i);
                        if (K[e] = i, !r || !r.nodeName) return void(X && console.warn("Can't find", t[e]));
                        t[e] = r
                    }
                })), !(t.container.children.length < 1)) {
                var J = t.responsive,
                    Y = t.nested,
                    G = "carousel" === t.mode;
                if (J) {
                    0 in J && (t = r(t, J[0]), delete J[0]);
                    var Q = {};
                    for (var tt in J) {
                        var et = J[tt];
                        et = "number" == typeof et ? {
                            items: et
                        } : et, Q[tt] = et
                    }
                    J = Q, Q = null
                }
                if (G || function t(e) {
                        for (var n in e) G || ("slideBy" === n && (e[n] = "page"), "edgePadding" === n && (e[n] = !1), "autoHeight" === n && (e[n] = !1)), "responsive" === n && t(e[n])
                    }(t), !G) {
                    t.axis = "horizontal", t.slideBy = "page", t.edgePadding = !1;
                    var nt = t.animateIn,
                        it = t.animateOut,
                        rt = t.animateDelay,
                        ot = t.animateNormal
                }
                var at, st, lt = "horizontal" === t.axis,
                    ct = n.createElement("div"),
                    ut = n.createElement("div"),
                    ft = t.container,
                    dt = ft.parentNode,
                    ht = ft.outerHTML,
                    pt = ft.children,
                    vt = pt.length,
                    mt = jn(),
                    gt = !1;
                J && Qn(), G && (ft.className += " tns-vpfix");
                var yt, bt, wt, xt, Ct, Et, Tt, Mt, St = t.autoWidth,
                    kt = In("fixedWidth"),
                    Nt = In("edgePadding"),
                    At = In("gutter"),
                    Ot = Bn(),
                    Lt = In("center"),
                    jt = St ? 1 : Math.floor(In("items")),
                    Pt = In("slideBy"),
                    Dt = t.viewportMax || t.fixedWidthViewportWidth,
                    Bt = In("arrowKeys"),
                    Rt = In("speed"),
                    It = t.rewind,
                    Ht = !It && t.loop,
                    Ft = In("autoHeight"),
                    qt = In("controls"),
                    zt = In("controlsText"),
                    _t = In("nav"),
                    Wt = In("touch"),
                    $t = In("mouseDrag"),
                    Vt = In("autoplay"),
                    Zt = In("autoplayTimeout"),
                    Xt = In("autoplayText"),
                    Ut = In("autoplayHoverPause"),
                    Kt = In("autoplayResetOnVisibility"),
                    Jt = (null, Tt = In("nonce"), Mt = document.createElement("style"), Tt && Mt.setAttribute("nonce", Tt), document.querySelector("head").appendChild(Mt), Mt.sheet ? Mt.sheet : Mt.styleSheet),
                    Yt = t.lazyload,
                    Gt = t.lazyloadSelector,
                    Qt = [],
                    te = Ht ? (Ct = function() {
                        if (St || kt && !Dt) return vt - 1;
                        var e = kt ? "fixedWidth" : "items",
                            n = [];
                        if ((kt || t[e] < vt) && n.push(t[e]), J)
                            for (var i in J) {
                                var r = J[i][e];
                                r && (kt || r < vt) && n.push(r)
                            }
                        return n.length || n.push(0), Math.ceil(kt ? Dt / Math.min.apply(null, n) : Math.max.apply(null, n))
                    }(), Et = G ? Math.ceil((5 * Ct - vt) / 2) : 4 * Ct - vt, Et = Math.max(Ct, Et), Rn("edgePadding") ? Et + 1 : Et) : 0,
                    ee = G ? vt + 2 * te : vt + te,
                    ne = !(!kt && !St || Ht),
                    ie = kt ? Mi() : null,
                    re = !G || !Ht,
                    oe = lt ? "left" : "top",
                    ae = "",
                    se = "",
                    le = kt ? function() {
                        return Lt && !Ht ? vt - 1 : Math.ceil(-ie / (kt + At))
                    } : St ? function() {
                        for (var t = 0; t < ee; t++)
                            if (yt[t] >= -ie) return t
                    } : function() {
                        return Lt && G && !Ht ? vt - 1 : Ht || G ? Math.max(0, ee - Math.ceil(jt)) : ee - 1
                    },
                    ce = An(In("startIndex")),
                    ue = ce,
                    fe = (Nn(), 0),
                    de = St ? null : le(),
                    he = t.preventActionWhenRunning,
                    pe = t.swipeAngle,
                    ve = !pe || "?",
                    me = !1,
                    ge = t.onInit,
                    ye = new D,
                    be = " tns-slider tns-" + t.mode,
                    we = ft.id || (xt = window.tnsId, window.tnsId = xt ? xt + 1 : 1, "tns" + window.tnsId),
                    xe = In("disable"),
                    Ce = !1,
                    Ee = t.freezable,
                    Te = !(!Ee || St) && Gn(),
                    Me = !1,
                    Se = {
                        click: Di,
                        keydown: function(t) {
                            t = _i(t);
                            var e = [p.LEFT, p.RIGHT].indexOf(t.keyCode);
                            e >= 0 && (0 === e ? Ue.disabled || Di(t, -1) : Ke.disabled || Di(t, 1))
                        }
                    },
                    ke = {
                        click: function(t) {
                            if (me) {
                                if (he) return;
                                ji()
                            }
                            for (var e = Wi(t = _i(t)); e !== Qe && !y(e, "data-nav");) e = e.parentNode;
                            if (y(e, "data-nav")) {
                                var n = rn = Number(b(e, "data-nav")),
                                    i = kt || St ? n * vt / en : n * jt;
                                Pi(Be ? n : Math.min(Math.ceil(i), vt - 1), t), on === n && (fn && Fi(), rn = -1)
                            }
                        },
                        keydown: function(t) {
                            t = _i(t);
                            var e = n.activeElement;
                            if (y(e, "data-nav")) {
                                var i = [p.LEFT, p.RIGHT, p.ENTER, p.SPACE].indexOf(t.keyCode),
                                    r = Number(b(e, "data-nav"));
                                i >= 0 && (0 === i ? r > 0 && zi(Ge[r - 1]) : 1 === i ? r < en - 1 && zi(Ge[r + 1]) : (rn = r, Pi(r, t)))
                            }
                        }
                    },
                    Ne = {
                        mouseover: function() {
                            fn && (Ri(), dn = !0)
                        },
                        mouseout: function() {
                            dn && (Bi(), dn = !1)
                        }
                    },
                    Ae = {
                        visibilitychange: function() {
                            n.hidden ? fn && (Ri(), pn = !0) : pn && (Bi(), pn = !1)
                        }
                    },
                    Oe = {
                        keydown: function(t) {
                            t = _i(t);
                            var e = [p.LEFT, p.RIGHT].indexOf(t.keyCode);
                            e >= 0 && Di(t, 0 === e ? -1 : 1)
                        }
                    },
                    Le = {
                        touchstart: Xi,
                        touchmove: Ui,
                        touchend: Ji,
                        touchcancel: Ji
                    },
                    je = {
                        mousedown: Xi,
                        mousemove: Ui,
                        mouseup: Ji,
                        mouseleave: Ji
                    },
                    Pe = Rn("controls"),
                    De = Rn("nav"),
                    Be = !!St || t.navAsThumbnails,
                    Re = Rn("autoplay"),
                    Ie = Rn("touch"),
                    He = Rn("mouseDrag"),
                    Fe = "tns-slide-active",
                    qe = "tns-slide-cloned",
                    ze = "tns-complete",
                    _e = {
                        load: function(t) {
                            li(Wi(t))
                        },
                        error: function(t) {
                            var e;
                            e = Wi(t), m(e, "failed"), ci(e)
                        }
                    },
                    We = "force" === t.preventScrollOnTouch;
                if (Pe) var $e, Ve, Ze = t.controlsContainer,
                    Xe = t.controlsContainer ? t.controlsContainer.outerHTML : "",
                    Ue = t.prevButton,
                    Ke = t.nextButton,
                    Je = t.prevButton ? t.prevButton.outerHTML : "",
                    Ye = t.nextButton ? t.nextButton.outerHTML : "";
                if (De) var Ge, Qe = t.navContainer,
                    tn = t.navContainer ? t.navContainer.outerHTML : "",
                    en = St ? vt : Gi(),
                    nn = 0,
                    rn = -1,
                    on = Ln(),
                    an = on,
                    sn = "tns-nav-active",
                    ln = "Carousel Page ",
                    cn = " (Current Slide)";
                if (Re) var un, fn, dn, hn, pn, vn = "forward" === t.autoplayDirection ? 1 : -1,
                    mn = t.autoplayButton,
                    gn = t.autoplayButton ? t.autoplayButton.outerHTML : "",
                    yn = ["<span class='tns-visually-hidden'>", " animation</span>"];
                if (Ie || He) var bn, wn, xn = {},
                    Cn = {},
                    En = !1,
                    Tn = lt ? function(t, e) {
                        return t.x - e.x
                    } : function(t, e) {
                        return t.y - e.y
                    };
                St || kn(xe || Te), F && (oe = F, ae = "translate", q ? (ae += lt ? "3d(" : "3d(0px, ", se = lt ? ", 0px, 0px)" : ", 0px)") : (ae += lt ? "X(" : "Y(", se = ")")), G && (ft.className = ft.className.replace("tns-vpfix", "")),
                    function() {
                        if (Rn("gutter"), ct.className = "tns-outer", ut.className = "tns-inner", ct.id = we + "-ow", ut.id = we + "-iw", "" === ft.id && (ft.id = we), be += I || St ? " tns-subpixel" : " tns-no-subpixel", be += R ? " tns-calc" : " tns-no-calc", St && (be += " tns-autowidth"), be += " tns-" + t.axis, ft.className += be, G ? ((at = n.createElement("div")).id = we + "-mw", at.className = "tns-ovh", ct.appendChild(at), at.appendChild(ut)) : ct.appendChild(ut), Ft && ((at || ut).className += " tns-ah"), dt.insertBefore(ct, ft), ut.appendChild(ft), h(pt, (function(t, e) {
                                m(t, "tns-item"), t.id || (t.id = we + "-item" + e), !G && ot && m(t, ot), x(t, {
                                    "aria-hidden": "true",
                                    tabindex: "-1"
                                })
                            })), te) {
                            for (var e = n.createDocumentFragment(), i = n.createDocumentFragment(), r = te; r--;) {
                                var o = r % vt,
                                    a = pt[o].cloneNode(!0);
                                if (m(a, qe), C(a, "id"), i.insertBefore(a, i.firstChild), G) {
                                    var s = pt[vt - 1 - o].cloneNode(!0);
                                    m(s, qe), C(s, "id"), e.appendChild(s)
                                }
                            }
                            ft.insertBefore(e, ft.firstChild), ft.appendChild(i), pt = ft.children
                        }
                    }(),
                    function() {
                        if (!G)
                            for (var e = ce, n = ce + Math.min(vt, jt); e < n; e++) {
                                var i = pt[e];
                                i.style.left = 100 * (e - ce) / jt + "%", m(i, nt), g(i, ot)
                            }
                        if (lt && (I || St ? (f(Jt, "#" + we + " > .tns-item", "font-size:" + l.getComputedStyle(pt[0]).fontSize + ";", d(Jt)), f(Jt, "#" + we, "font-size:0;", d(Jt))) : G && h(pt, (function(t, e) {
                                t.style.marginLeft = function(t) {
                                    return R ? R + "(" + 100 * t + "% / " + ee + ")" : 100 * t / ee + "%"
                                }(e)
                            }))), H) {
                            if (z) {
                                var r = at && t.autoHeight ? Wn(t.speed) : "";
                                f(Jt, "#" + we + "-mw", r, d(Jt))
                            }
                            r = Hn(t.edgePadding, t.gutter, t.fixedWidth, t.speed, t.autoHeight), f(Jt, "#" + we + "-iw", r, d(Jt)), G && (r = lt && !St ? "width:" + Fn(t.fixedWidth, t.gutter, t.items) + ";" : "", z && (r += Wn(Rt)), f(Jt, "#" + we, r, d(Jt))), r = lt && !St ? qn(t.fixedWidth, t.gutter, t.items) : "", t.gutter && (r += zn(t.gutter)), G || (z && (r += Wn(Rt)), W && (r += $n(Rt))), r && f(Jt, "#" + we + " > .tns-item", r, d(Jt))
                        } else G && Ft && (at.style[z] = Rt / 1e3 + "s"), ut.style.cssText = Hn(Nt, At, kt, Ft), G && lt && !St && (ft.style.width = Fn(kt, At, jt)), r = lt && !St ? qn(kt, At, jt) : "", At && (r += zn(At)), r && f(Jt, "#" + we + " > .tns-item", r, d(Jt));
                        if (J && H)
                            for (var o in J) {
                                o = parseInt(o);
                                var a = J[o],
                                    s = (r = "", ""),
                                    c = "",
                                    u = "",
                                    p = "",
                                    v = St ? null : In("items", o),
                                    y = In("fixedWidth", o),
                                    b = In("speed", o),
                                    w = In("edgePadding", o),
                                    x = In("autoHeight", o),
                                    C = In("gutter", o);
                                z && at && In("autoHeight", o) && "speed" in a && (s = "#" + we + "-mw{" + Wn(b) + "}"), ("edgePadding" in a || "gutter" in a) && (c = "#" + we + "-iw{" + Hn(w, C, y, b, x) + "}"), G && lt && !St && ("fixedWidth" in a || "items" in a || kt && "gutter" in a) && (u = "width:" + Fn(y, C, v) + ";"), z && "speed" in a && (u += Wn(b)), u && (u = "#" + we + "{" + u + "}"), ("fixedWidth" in a || kt && "gutter" in a || !G && "items" in a) && (p += qn(y, C, v)), "gutter" in a && (p += zn(C)), !G && "speed" in a && (z && (p += Wn(b)), W && (p += $n(b))), p && (p = "#" + we + " > .tns-item{" + p + "}"), (r = s + c + u + p) && Jt.insertRule("@media (min-width: " + o / 16 + "em) {" + r + "}", Jt.cssRules.length)
                            }
                    }(), Vn();
                var Mn = Ht ? G ? function() {
                        var t = fe,
                            e = de;
                        t += Pt, e -= Pt, Nt ? (t += 1, e -= 1) : kt && (Ot + At) % (kt + At) && (e -= 1), te && (ce > e ? ce -= vt : ce < t && (ce += vt))
                    } : function() {
                        if (ce > de)
                            for (; ce >= fe + vt;) ce -= vt;
                        else if (ce < fe)
                            for (; ce <= de - vt;) ce += vt
                    } : function() {
                        ce = Math.max(fe, Math.min(de, ce))
                    },
                    Sn = G ? function() {
                        var t, e, n, i, r, o, a, s, l, c, u;
                        Ei(ft, ""), z || !Rt ? (Ni(), Rt && S(ft) || ji()) : (t = ft, e = oe, n = ae, i = se, r = Si(), o = Rt, a = ji, s = Math.min(o, 10), l = r.indexOf("%") >= 0 ? "%" : "px", r = r.replace(l, ""), c = Number(t.style[e].replace(n, "").replace(i, "").replace(l, "")), u = (r - c) / o * s, setTimeout((function r() {
                            o -= s, c += u, t.style[e] = n + c + l + i, o > 0 ? setTimeout(r, s) : a()
                        }), s)), lt || Yi()
                    } : function() {
                        Qt = [];
                        var t = {};
                        t[V] = t[Z] = ji, P(pt[ue], t), j(pt[ce], t), Ai(ue, nt, it, !0), Ai(ce, ot, nt), V && Z && Rt && S(ft) || ji()
                    };
                return {
                    version: "2.9.4",
                    getInfo: tr,
                    events: ye,
                    goTo: Pi,
                    play: function() {
                        Vt && !fn && (Hi(), hn = !1)
                    },
                    pause: function() {
                        fn && (Fi(), hn = !0)
                    },
                    isOn: gt,
                    updateSliderHeight: vi,
                    refresh: Vn,
                    destroy: function() {
                        if (Jt.disabled = !0, Jt.ownerNode && Jt.ownerNode.remove(), P(l, {
                                resize: Jn
                            }), Bt && P(n, Oe), Ze && P(Ze, Se), Qe && P(Qe, ke), P(ft, Ne), P(ft, Ae), mn && P(mn, {
                                click: qi
                            }), Vt && clearInterval(un), G && V) {
                            var e = {};
                            e[V] = ji, P(ft, e)
                        }
                        Wt && P(ft, Le), $t && P(ft, je);
                        var i = [ht, Xe, Je, Ye, tn, gn];
                        for (var r in U.forEach((function(e, n) {
                                var r = "container" === e ? ct : t[e];
                                if ("object" == typeof r && r) {
                                    var o = !!r.previousElementSibling && r.previousElementSibling,
                                        a = r.parentNode;
                                    r.outerHTML = i[n], t[e] = o ? o.nextElementSibling : a.firstElementChild
                                }
                            })), U = nt = it = rt = ot = lt = ct = ut = ft = dt = ht = pt = vt = st = mt = St = kt = Nt = At = Ot = jt = Pt = Dt = Bt = Rt = It = Ht = Ft = Jt = Yt = yt = Qt = te = ee = ne = ie = re = oe = ae = se = le = ce = ue = fe = de = pe = ve = me = ge = ye = be = we = xe = Ce = Ee = Te = Me = Se = ke = Ne = Ae = Oe = Le = je = Pe = De = Be = Re = Ie = He = Fe = ze = _e = bt = qt = zt = Ze = Xe = Ue = Ke = $e = Ve = _t = Qe = tn = Ge = en = nn = rn = on = an = sn = ln = cn = Vt = Zt = vn = Xt = Ut = mn = gn = Kt = yn = un = fn = dn = hn = pn = xn = Cn = bn = En = wn = Tn = Wt = $t = null, this) "rebuild" !== r && (this[r] = null);
                        gt = !1
                    },
                    rebuild: function() {
                        return B(r(t, K))
                    }
                }
            }

            function kn(t) {
                t && (qt = _t = Wt = $t = Bt = Vt = Ut = Kt = !1)
            }

            function Nn() {
                for (var t = G ? ce - te : ce; t < 0;) t += vt;
                return t % vt + 1
            }

            function An(t) {
                return t = t ? Math.max(0, Math.min(Ht ? vt - 1 : vt - jt, t)) : 0, G ? t + te : t
            }

            function On(t) {
                for (null == t && (t = ce), G && (t -= te); t < 0;) t += vt;
                return Math.floor(t % vt)
            }

            function Ln() {
                var t, e = On();
                return t = Be ? e : kt || St ? Math.ceil((e + 1) * en / vt - 1) : Math.floor(e / jt), !Ht && G && ce === de && (t = en - 1), t
            }

            function jn() {
                return l.innerWidth || n.documentElement.clientWidth || n.body.clientWidth
            }

            function Pn(t) {
                return "top" === t ? "afterbegin" : "beforeend"
            }

            function Dn(t) {
                if (null != t) {
                    var e, i, r = n.createElement("div");
                    return t.appendChild(r), i = (e = r.getBoundingClientRect()).right - e.left, r.remove(), i || Dn(t.parentNode)
                }
            }

            function Bn() {
                var t = Nt ? 2 * Nt - At : 0;
                return Dn(dt) - t
            }

            function Rn(e) {
                if (t[e]) return !0;
                if (J)
                    for (var n in J)
                        if (J[n][e]) return !0;
                return !1
            }

            function In(e, n) {
                if (null == n && (n = mt), "items" === e && kt) return Math.floor((Ot + At) / (kt + At)) || 1;
                var i = t[e];
                if (J)
                    for (var r in J) n >= parseInt(r) && e in J[r] && (i = J[r][e]);
                return "slideBy" === e && "page" === i && (i = In("items")), G || "slideBy" !== e && "items" !== e || (i = Math.floor(i)), i
            }

            function Hn(t, e, n, i, r) {
                var o = "";
                if (void 0 !== t) {
                    var a = t;
                    e && (a -= e), o = lt ? "margin: 0 " + a + "px 0 " + t + "px;" : "margin: " + t + "px 0 " + a + "px 0;"
                } else if (e && !n) {
                    var s = "-" + e + "px";
                    o = "margin: 0 " + (lt ? s + " 0 0" : "0 " + s + " 0") + ";"
                }
                return !G && r && z && i && (o += Wn(i)), o
            }

            function Fn(t, e, n) {
                return t ? (t + e) * ee + "px" : R ? R + "(" + 100 * ee + "% / " + n + ")" : 100 * ee / n + "%"
            }

            function qn(t, e, n) {
                var i;
                if (t) i = t + e + "px";
                else {
                    G || (n = Math.floor(n));
                    var r = G ? ee : n;
                    i = R ? R + "(100% / " + r + ")" : 100 / r + "%"
                }
                return i = "width:" + i, "inner" !== Y ? i + ";" : i + " !important;"
            }

            function zn(t) {
                var e = "";
                return !1 !== t && (e = (lt ? "padding-" : "margin-") + (lt ? "right" : "bottom") + ": " + t + "px;"), e
            }

            function _n(t, e) {
                var n = t.substring(0, t.length - e).toLowerCase();
                return n && (n = "-" + n + "-"), n
            }

            function Wn(t) {
                return _n(z, 18) + "transition-duration:" + t / 1e3 + "s;"
            }

            function $n(t) {
                return _n(W, 17) + "animation-duration:" + t / 1e3 + "s;"
            }

            function Vn() {
                if (Rn("autoHeight") || St || !lt) {
                    var t = ft.querySelectorAll("img");
                    h(t, (function(t) {
                        var e = t.src;
                        Yt || (e && e.indexOf("data:image") < 0 ? (t.src = "", j(t, _e), m(t, "loading"), t.src = e) : li(t))
                    })), e((function() {
                        di(E(t), (function() {
                            bt = !0
                        }))
                    })), Rn("autoHeight") && (t = ui(ce, Math.min(ce + jt - 1, ee - 1))), Yt ? Zn() : e((function() {
                        di(E(t), Zn)
                    }))
                } else G && ki(), Un(), Kn()
            }

            function Zn() {
                if (St && vt > 1) {
                    var t = Ht ? ce : vt - 1;
                    ! function e() {
                        var n = pt[t].getBoundingClientRect().left,
                            i = pt[t - 1].getBoundingClientRect().right;
                        Math.abs(n - i) <= 1 ? Xn() : setTimeout((function() {
                            e()
                        }), 16)
                    }()
                } else Xn()
            }

            function Xn() {
                lt && !St || (mi(), St ? (ie = Mi(), Ee && (Te = Gn()), de = le(), kn(xe || Te)) : Yi()), G && ki(), Un(), Kn()
            }

            function Un() {
                if (gi(), ct.insertAdjacentHTML("afterbegin", '<div class="tns-liveregion tns-visually-hidden" aria-live="polite" aria-atomic="true">slide <span class="current">' + oi() + "</span>  of " + vt + "</div>"), wt = ct.querySelector(".tns-liveregion .current"), Re) {
                    var e = Vt ? "stop" : "start";
                    mn ? x(mn, {
                        "data-action": e
                    }) : t.autoplayButtonOutput && (ct.insertAdjacentHTML(Pn(t.autoplayPosition), '<button type="button" data-action="' + e + '">' + yn[0] + e + yn[1] + Xt[0] + "</button>"), mn = ct.querySelector("[data-action]")), mn && j(mn, {
                        click: qi
                    }), Vt && (Hi(), Ut && j(ft, Ne), Kt && j(ft, Ae))
                }
                if (De) {
                    if (Qe) x(Qe, {
                        "aria-label": "Carousel Pagination"
                    }), h(Ge = Qe.children, (function(t, e) {
                        x(t, {
                            "data-nav": e,
                            tabindex: "-1",
                            "aria-label": ln + (e + 1),
                            "aria-controls": we
                        })
                    }));
                    else {
                        for (var n = "", i = Be ? "" : 'style="display:none"', r = 0; r < vt; r++) n += '<button type="button" data-nav="' + r + '" tabindex="-1" aria-controls="' + we + '" ' + i + ' aria-label="' + ln + (r + 1) + '"></button>';
                        n = '<div class="tns-nav" aria-label="Carousel Pagination">' + n + "</div>", ct.insertAdjacentHTML(Pn(t.navPosition), n), Qe = ct.querySelector(".tns-nav"), Ge = Qe.children
                    }
                    if (Qi(), z) {
                        var o = z.substring(0, z.length - 18).toLowerCase(),
                            a = "transition: all " + Rt / 1e3 + "s";
                        o && (a = "-" + o + "-" + a), f(Jt, "[aria-controls^=" + we + "-item]", a, d(Jt))
                    }
                    x(Ge[on], {
                        "aria-label": ln + (on + 1) + cn
                    }), C(Ge[on], "tabindex"), m(Ge[on], sn), j(Qe, ke)
                }
                Pe && (Ze || Ue && Ke || (ct.insertAdjacentHTML(Pn(t.controlsPosition), '<div class="tns-controls" aria-label="Carousel Navigation" tabindex="0"><button type="button" data-controls="prev" tabindex="-1" aria-controls="' + we + '">' + zt[0] + '</button><button type="button" data-controls="next" tabindex="-1" aria-controls="' + we + '">' + zt[1] + "</button></div>"), Ze = ct.querySelector(".tns-controls")), Ue && Ke || (Ue = Ze.children[0], Ke = Ze.children[1]), t.controlsContainer && x(Ze, {
                    "aria-label": "Carousel Navigation",
                    tabindex: "0"
                }), (t.controlsContainer || t.prevButton && t.nextButton) && x([Ue, Ke], {
                    "aria-controls": we,
                    tabindex: "-1"
                }), (t.controlsContainer || t.prevButton && t.nextButton) && (x(Ue, {
                    "data-controls": "prev"
                }), x(Ke, {
                    "data-controls": "next"
                })), $e = bi(Ue), Ve = bi(Ke), Ci(), Ze ? j(Ze, Se) : (j(Ue, Se), j(Ke, Se))), ti()
            }

            function Kn() {
                if (G && V) {
                    var e = {};
                    e[V] = ji, j(ft, e)
                }
                Wt && j(ft, Le, t.preventScrollOnTouch), $t && j(ft, je), Bt && j(n, Oe), "inner" === Y ? ye.on("outerResized", (function() {
                    Yn(), ye.emit("innerLoaded", tr())
                })) : (J || kt || St || Ft || !lt) && j(l, {
                    resize: Jn
                }), Ft && ("outer" === Y ? ye.on("innerLoaded", fi) : xe || fi()), si(), xe ? ii() : Te && ni(), ye.on("indexChanged", hi), "inner" === Y && ye.emit("innerLoaded", tr()), "function" == typeof ge && ge(tr()), gt = !0
            }

            function Jn(t) {
                e((function() {
                    Yn(_i(t))
                }))
            }

            function Yn(e) {
                if (gt) {
                    "outer" === Y && ye.emit("outerResized", tr(e)), mt = jn();
                    var i, r = st,
                        o = !1;
                    J && (Qn(), (i = r !== st) && ye.emit("newBreakpointStart", tr(e)));
                    var a, s, l = jt,
                        c = xe,
                        u = Te,
                        p = Bt,
                        v = qt,
                        y = _t,
                        b = Wt,
                        w = $t,
                        x = Vt,
                        C = Ut,
                        E = Kt,
                        S = ce;
                    if (i) {
                        var k = kt,
                            N = Ft,
                            A = zt,
                            O = Lt,
                            L = Xt;
                        if (!H) var D = At,
                            B = Nt
                    }
                    if (Bt = In("arrowKeys"), qt = In("controls"), _t = In("nav"), Wt = In("touch"), Lt = In("center"), $t = In("mouseDrag"), Vt = In("autoplay"), Ut = In("autoplayHoverPause"), Kt = In("autoplayResetOnVisibility"), i && (xe = In("disable"), kt = In("fixedWidth"), Rt = In("speed"), Ft = In("autoHeight"), zt = In("controlsText"), Xt = In("autoplayText"), Zt = In("autoplayTimeout"), H || (Nt = In("edgePadding"), At = In("gutter"))), kn(xe), Ot = Bn(), lt && !St || xe || (mi(), lt || (Yi(), o = !0)), (kt || St) && (ie = Mi(), de = le()), (i || kt) && (jt = In("items"), Pt = In("slideBy"), (s = jt !== l) && (kt || St || (de = le()), Mn())), i && xe !== c && (xe ? ii() : function() {
                            if (Ce) {
                                if (Jt.disabled = !1, ft.className += be, ki(), Ht)
                                    for (var t = te; t--;) G && M(pt[t]), M(pt[ee - t - 1]);
                                if (!G)
                                    for (var e = ce, n = ce + vt; e < n; e++) {
                                        var i = pt[e],
                                            r = e < ce + jt ? nt : ot;
                                        i.style.left = 100 * (e - ce) / jt + "%", m(i, r)
                                    }
                                ei(), Ce = !1
                            }
                        }()), Ee && (i || kt || St) && (Te = Gn()) !== u && (Te ? (Ni(Si(An(0))), ni()) : (function() {
                            if (Me) {
                                if (Nt && H && (ut.style.margin = ""), te)
                                    for (var t = "tns-transparent", e = te; e--;) G && g(pt[e], t), g(pt[ee - e - 1], t);
                                ei(), Me = !1
                            }
                        }(), o = !0)), kn(xe || Te), Vt || (Ut = Kt = !1), Bt !== p && (Bt ? j(n, Oe) : P(n, Oe)), qt !== v && (qt ? Ze ? M(Ze) : (Ue && M(Ue), Ke && M(Ke)) : Ze ? T(Ze) : (Ue && T(Ue), Ke && T(Ke))), _t !== y && (_t ? (M(Qe), Qi()) : T(Qe)), Wt !== b && (Wt ? j(ft, Le, t.preventScrollOnTouch) : P(ft, Le)), $t !== w && ($t ? j(ft, je) : P(ft, je)), Vt !== x && (Vt ? (mn && M(mn), fn || hn || Hi()) : (mn && T(mn), fn && Fi())), Ut !== C && (Ut ? j(ft, Ne) : P(ft, Ne)), Kt !== E && (Kt ? j(n, Ae) : P(n, Ae)), i) {
                        if (kt === k && Lt === O || (o = !0), Ft !== N && (Ft || (ut.style.height = "")), qt && zt !== A && (Ue.innerHTML = zt[0], Ke.innerHTML = zt[1]), mn && Xt !== L) {
                            var R = Vt ? 1 : 0,
                                I = mn.innerHTML,
                                F = I.length - L[R].length;
                            I.substring(F) === L[R] && (mn.innerHTML = I.substring(0, F) + Xt[R])
                        }
                    } else Lt && (kt || St) && (o = !0);
                    if ((s || kt && !St) && (en = Gi(), Qi()), (a = ce !== S) ? (ye.emit("indexChanged", tr()), o = !0) : s ? a || hi() : (kt || St) && (si(), gi(), ri()), s && !G && function() {
                            for (var t = ce + Math.min(vt, jt), e = ee; e--;) {
                                var n = pt[e];
                                e >= ce && e < t ? (m(n, "tns-moving"), n.style.left = 100 * (e - ce) / jt + "%", m(n, nt), g(n, ot)) : n.style.left && (n.style.left = "", m(n, ot), g(n, nt)), g(n, it)
                            }
                            setTimeout((function() {
                                h(pt, (function(t) {
                                    g(t, "tns-moving")
                                }))
                            }), 300)
                        }(), !xe && !Te) {
                        if (i && !H && (Nt === B && At === D || (ut.style.cssText = Hn(Nt, At, kt, Rt, Ft)), lt)) {
                            G && (ft.style.width = Fn(kt, At, jt));
                            var q = qn(kt, At, jt) + zn(At);
                            ! function(t, e) {
                                "deleteRule" in t ? t.deleteRule(e) : t.removeRule(e)
                            }(Jt, d(Jt) - 1), f(Jt, "#" + we + " > .tns-item", q, d(Jt))
                        }
                        Ft && fi(), o && (ki(), ue = ce)
                    }
                    i && ye.emit("newBreakpointEnd", tr(e))
                }
            }

            function Gn() {
                if (!kt && !St) return vt <= (Lt ? jt - (jt - 1) / 2 : jt);
                var t = kt ? (kt + At) * vt : yt[vt],
                    e = Nt ? Ot + 2 * Nt : Ot + At;
                return Lt && (e -= kt ? (Ot - kt) / 2 : (Ot - (yt[ce + 1] - yt[ce] - At)) / 2), t <= e
            }

            function Qn() {
                for (var t in st = 0, J) t = parseInt(t), mt >= t && (st = t)
            }

            function ti() {
                !Vt && mn && T(mn), !_t && Qe && T(Qe), qt || (Ze ? T(Ze) : (Ue && T(Ue), Ke && T(Ke)))
            }

            function ei() {
                Vt && mn && M(mn), _t && Qe && M(Qe), qt && (Ze ? M(Ze) : (Ue && M(Ue), Ke && M(Ke)))
            }

            function ni() {
                if (!Me) {
                    if (Nt && (ut.style.margin = "0px"), te)
                        for (var t = "tns-transparent", e = te; e--;) G && m(pt[e], t), m(pt[ee - e - 1], t);
                    ti(), Me = !0
                }
            }

            function ii() {
                if (!Ce) {
                    if (Jt.disabled = !0, ft.className = ft.className.replace(be.substring(1), ""), C(ft, ["style"]), Ht)
                        for (var t = te; t--;) G && T(pt[t]), T(pt[ee - t - 1]);
                    if (lt && G || C(ut, ["style"]), !G)
                        for (var e = ce, n = ce + vt; e < n; e++) {
                            var i = pt[e];
                            C(i, ["style"]), g(i, nt), g(i, ot)
                        }
                    ti(), Ce = !0
                }
            }

            function ri() {
                var t = oi();
                wt.innerHTML !== t && (wt.innerHTML = t)
            }

            function oi() {
                var t = ai(),
                    e = t[0] + 1,
                    n = t[1] + 1;
                return e === n ? e + "" : e + " to " + n
            }

            function ai(t) {
                null == t && (t = Si());
                var e, n, i, r = ce;
                if (Lt || Nt ? (St || kt) && (n = -(parseFloat(t) + Nt), i = n + Ot + 2 * Nt) : St && (n = yt[ce], i = n + Ot), St) yt.forEach((function(t, o) {
                    o < ee && ((Lt || Nt) && t <= n + .5 && (r = o), i - t >= .5 && (e = o))
                }));
                else {
                    if (kt) {
                        var o = kt + At;
                        Lt || Nt ? (r = Math.floor(n / o), e = Math.ceil(i / o - 1)) : e = r + Math.ceil(Ot / o) - 1
                    } else if (Lt || Nt) {
                        var a = jt - 1;
                        if (Lt ? (r -= a / 2, e = ce + a / 2) : e = ce + a, Nt) {
                            var s = Nt * jt / Ot;
                            r -= s, e += s
                        }
                        r = Math.floor(r), e = Math.ceil(e)
                    } else e = r + jt - 1;
                    r = Math.max(r, 0), e = Math.min(e, ee - 1)
                }
                return [r, e]
            }

            function si() {
                if (Yt && !xe) {
                    var t = ai();
                    t.push(Gt), ui.apply(null, t).forEach((function(t) {
                        if (!v(t, ze)) {
                            var e = {};
                            e[V] = function(t) {
                                t.stopPropagation()
                            }, j(t, e), j(t, _e), t.src = b(t, "data-src");
                            var n = b(t, "data-srcset");
                            n && (t.srcset = n), m(t, "loading")
                        }
                    }))
                }
            }

            function li(t) {
                m(t, "loaded"), ci(t)
            }

            function ci(t) {
                m(t, ze), g(t, "loading"), P(t, _e)
            }

            function ui(t, e, n) {
                var i = [];
                for (n || (n = "img"); t <= e;) h(pt[t].querySelectorAll(n), (function(t) {
                    i.push(t)
                })), t++;
                return i
            }

            function fi() {
                var t = ui.apply(null, ai());
                e((function() {
                    di(t, vi)
                }))
            }

            function di(t, n) {
                return bt ? n() : (t.forEach((function(e, n) {
                    !Yt && e.complete && ci(e), v(e, ze) && t.splice(n, 1)
                })), t.length ? void e((function() {
                    di(t, n)
                })) : n())
            }

            function hi() {
                si(), gi(), ri(), Ci(),
                    function() {
                        if (_t && (on = rn >= 0 ? rn : Ln(), rn = -1, on !== an)) {
                            var t = Ge[an],
                                e = Ge[on];
                            x(t, {
                                tabindex: "-1",
                                "aria-label": ln + (an + 1)
                            }), g(t, sn), x(e, {
                                "aria-label": ln + (on + 1) + cn
                            }), C(e, "tabindex"), m(e, sn), an = on
                        }
                    }()
            }

            function pi(t, e) {
                for (var n = [], i = t, r = Math.min(t + e, ee); i < r; i++) n.push(pt[i].offsetHeight);
                return Math.max.apply(null, n)
            }

            function vi() {
                var t = Ft ? pi(ce, jt) : pi(te, vt),
                    e = at || ut;
                e.style.height !== t && (e.style.height = t + "px")
            }

            function mi() {
                yt = [0];
                var t = lt ? "left" : "top",
                    e = lt ? "right" : "bottom",
                    n = pt[0].getBoundingClientRect()[t];
                h(pt, (function(i, r) {
                    r && yt.push(i.getBoundingClientRect()[t] - n), r === ee - 1 && yt.push(i.getBoundingClientRect()[e] - n)
                }))
            }

            function gi() {
                var t = ai(),
                    e = t[0],
                    n = t[1];
                h(pt, (function(t, i) {
                    i >= e && i <= n ? y(t, "aria-hidden") && (C(t, ["aria-hidden", "tabindex"]), m(t, Fe)) : y(t, "aria-hidden") || (x(t, {
                        "aria-hidden": "true",
                        tabindex: "-1"
                    }), g(t, Fe))
                }))
            }

            function yi(t) {
                return t.nodeName.toLowerCase()
            }

            function bi(t) {
                return "button" === yi(t)
            }

            function wi(t) {
                return "true" === t.getAttribute("aria-disabled")
            }

            function xi(t, e, n) {
                t ? e.disabled = n : e.setAttribute("aria-disabled", n.toString())
            }

            function Ci() {
                if (qt && !It && !Ht) {
                    var t = $e ? Ue.disabled : wi(Ue),
                        e = Ve ? Ke.disabled : wi(Ke),
                        n = ce <= fe,
                        i = !It && ce >= de;
                    n && !t && xi($e, Ue, !0), !n && t && xi($e, Ue, !1), i && !e && xi(Ve, Ke, !0), !i && e && xi(Ve, Ke, !1)
                }
            }

            function Ei(t, e) {
                z && (t.style[z] = e)
            }

            function Ti(t) {
                return null == t && (t = ce), St ? (Ot - (Nt ? At : 0) - (yt[t + 1] - yt[t] - At)) / 2 : kt ? (Ot - kt) / 2 : (jt - 1) / 2
            }

            function Mi() {
                var t = Ot + (Nt ? At : 0) - (kt ? (kt + At) * ee : yt[ee]);
                return Lt && !Ht && (t = kt ? -(kt + At) * (ee - 1) - Ti() : Ti(ee - 1) - yt[ee - 1]), t > 0 && (t = 0), t
            }

            function Si(t) {
                var e;
                if (null == t && (t = ce), lt && !St)
                    if (kt) e = -(kt + At) * t, Lt && (e += Ti());
                    else {
                        var n = F ? ee : jt;
                        Lt && (t -= Ti()), e = 100 * -t / n
                    } else e = -yt[t], Lt && St && (e += Ti());
                return ne && (e = Math.max(e, ie)), e + (!lt || St || kt ? "px" : "%")
            }

            function ki(t) {
                Ei(ft, "0s"), Ni(t)
            }

            function Ni(t) {
                null == t && (t = Si()), ft.style[oe] = ae + t + se
            }

            function Ai(t, e, n, i) {
                var r = t + jt;
                Ht || (r = Math.min(r, ee));
                for (var o = t; o < r; o++) {
                    var a = pt[o];
                    i || (a.style.left = 100 * (o - ce) / jt + "%"), rt && _ && (a.style[_] = a.style[$] = rt * (o - t) / 1e3 + "s"), g(a, e), m(a, n), i && Qt.push(a)
                }
            }

            function Oi(t, e) {
                re && Mn(), (ce !== ue || e) && (ye.emit("indexChanged", tr()), ye.emit("transitionStart", tr()), Ft && fi(), fn && t && ["click", "keydown"].indexOf(t.type) >= 0 && Fi(), me = !0, Sn())
            }

            function Li(t) {
                return t.toLowerCase().replace(/-/g, "")
            }

            function ji(t) {
                if (G || me) {
                    if (ye.emit("transitionEnd", tr(t)), !G && Qt.length > 0)
                        for (var e = 0; e < Qt.length; e++) {
                            var n = Qt[e];
                            n.style.left = "", $ && _ && (n.style[$] = "", n.style[_] = ""), g(n, it), m(n, ot)
                        }
                    if (!t || !G && t.target.parentNode === ft || t.target === ft && Li(t.propertyName) === Li(oe)) {
                        if (!re) {
                            var i = ce;
                            Mn(), ce !== i && (ye.emit("indexChanged", tr()), ki())
                        }
                        "inner" === Y && ye.emit("innerLoaded", tr()), me = !1, ue = ce
                    }
                }
            }

            function Pi(t, e) {
                if (!Te)
                    if ("prev" === t) Di(e, -1);
                    else if ("next" === t) Di(e, 1);
                else {
                    if (me) {
                        if (he) return;
                        ji()
                    }
                    var n = On(),
                        i = 0;
                    if ("first" === t ? i = -n : "last" === t ? i = G ? vt - jt - n : vt - 1 - n : ("number" != typeof t && (t = parseInt(t)), isNaN(t) || (e || (t = Math.max(0, Math.min(vt - 1, t))), i = t - n)), !G && i && Math.abs(i) < jt) {
                        var r = i > 0 ? 1 : -1;
                        i += ce + i - vt >= fe ? vt * r : 2 * vt * r * -1
                    }
                    ce += i, G && Ht && (ce < fe && (ce += vt), ce > de && (ce -= vt)), On(ce) !== On(ue) && Oi(e)
                }
            }

            function Di(t, e) {
                if (me) {
                    if (he) return;
                    ji()
                }
                var n;
                if (!e) {
                    for (var i = Wi(t = _i(t)); i !== Ze && [Ue, Ke].indexOf(i) < 0;) i = i.parentNode;
                    var r = [Ue, Ke].indexOf(i);
                    r >= 0 && (n = !0, e = 0 === r ? -1 : 1)
                }
                if (It) {
                    if (ce === fe && -1 === e) return void Pi("last", t);
                    if (ce === de && 1 === e) return void Pi("first", t)
                }
                e && (ce += Pt * e, St && (ce = Math.floor(ce)), Oi(n || t && "keydown" === t.type ? t : null))
            }

            function Bi() {
                un = setInterval((function() {
                    Di(null, vn)
                }), Zt), fn = !0
            }

            function Ri() {
                clearInterval(un), fn = !1
            }

            function Ii(t, e) {
                x(mn, {
                    "data-action": t
                }), mn.innerHTML = yn[0] + t + yn[1] + e
            }

            function Hi() {
                Bi(), mn && Ii("stop", Xt[1])
            }

            function Fi() {
                Ri(), mn && Ii("start", Xt[0])
            }

            function qi() {
                fn ? (Fi(), hn = !0) : (Hi(), hn = !1)
            }

            function zi(t) {
                t.focus()
            }

            function _i(t) {
                return $i(t = t || l.event) ? t.changedTouches[0] : t
            }

            function Wi(t) {
                return t.target || l.event.srcElement
            }

            function $i(t) {
                return t.type.indexOf("touch") >= 0
            }

            function Vi(t) {
                t.preventDefault ? t.preventDefault() : t.returnValue = !1
            }

            function Zi() {
                return o = Cn.y - xn.y, a = Cn.x - xn.x, e = Math.atan2(o, a) * (180 / Math.PI), n = pe, i = !1, (r = Math.abs(90 - Math.abs(e))) >= 90 - n ? i = "horizontal" : r <= n && (i = "vertical"), i === t.axis;
                var e, n, i, r, o, a
            }

            function Xi(t) {
                if (me) {
                    if (he) return;
                    ji()
                }
                Vt && fn && Ri(), En = !0, wn && (i(wn), wn = null);
                var e = _i(t);
                ye.emit($i(t) ? "touchStart" : "dragStart", tr(t)), !$i(t) && ["img", "a"].indexOf(yi(Wi(t))) >= 0 && Vi(t), Cn.x = xn.x = e.clientX, Cn.y = xn.y = e.clientY, G && (bn = parseFloat(ft.style[oe].replace(ae, "")), Ei(ft, "0s"))
            }

            function Ui(t) {
                if (En) {
                    var n = _i(t);
                    Cn.x = n.clientX, Cn.y = n.clientY, G ? wn || (wn = e((function() {
                        Ki(t)
                    }))) : ("?" === ve && (ve = Zi()), ve && (We = !0)), ("boolean" != typeof t.cancelable || t.cancelable) && We && t.preventDefault()
                }
            }

            function Ki(t) {
                if (ve) {
                    if (i(wn), En && (wn = e((function() {
                            Ki(t)
                        }))), "?" === ve && (ve = Zi()), ve) {
                        !We && $i(t) && (We = !0);
                        try {
                            t.type && ye.emit($i(t) ? "touchMove" : "dragMove", tr(t))
                        } catch (t) {}
                        var n = bn,
                            r = Tn(Cn, xn);
                        !lt || kt || St ? (n += r, n += "px") : (n += F ? r * jt * 100 / ((Ot + At) * ee) : 100 * r / (Ot + At), n += "%"), ft.style[oe] = ae + n + se
                    }
                } else En = !1
            }

            function Ji(n) {
                if (En) {
                    wn && (i(wn), wn = null), G && Ei(ft, ""), En = !1;
                    var r = _i(n);
                    Cn.x = r.clientX, Cn.y = r.clientY;
                    var o = Tn(Cn, xn);
                    if (Math.abs(o)) {
                        if (!$i(n)) {
                            var a = Wi(n);
                            j(a, {
                                click: function t(e) {
                                    Vi(e), P(a, {
                                        click: t
                                    })
                                }
                            })
                        }
                        G ? wn = e((function() {
                            if (lt && !St) {
                                var t = -o * jt / (Ot + At);
                                t = o > 0 ? Math.floor(t) : Math.ceil(t), ce += t
                            } else {
                                var e = -(bn + o);
                                if (e <= 0) ce = fe;
                                else if (e >= yt[ee - 1]) ce = de;
                                else
                                    for (var i = 0; i < ee && e >= yt[i];) ce = i, e > yt[i] && o < 0 && (ce += 1), i++
                            }
                            Oi(n, o), ye.emit($i(n) ? "touchEnd" : "dragEnd", tr(n))
                        })) : ve && Di(n, o > 0 ? -1 : 1)
                    }
                }
                "auto" === t.preventScrollOnTouch && (We = !1), pe && (ve = "?"), Vt && !fn && Bi()
            }

            function Yi() {
                (at || ut).style.height = yt[ce + jt] - yt[ce] + "px"
            }

            function Gi() {
                var t = kt ? (kt + At) * vt / Ot : vt / jt;
                return Math.min(Math.ceil(t), vt)
            }

            function Qi() {
                if (_t && !Be && en !== nn) {
                    var t = nn,
                        e = en,
                        n = M;
                    for (nn > en && (t = en, e = nn, n = T); t < e;) n(Ge[t]), t++;
                    nn = en
                }
            }

            function tr(t) {
                return {
                    container: ft,
                    slideItems: pt,
                    navContainer: Qe,
                    navItems: Ge,
                    controlsContainer: Ze,
                    hasControls: Pe,
                    prevButton: Ue,
                    nextButton: Ke,
                    items: jt,
                    slideBy: Pt,
                    cloneCount: te,
                    slideCount: vt,
                    slideCountNew: ee,
                    index: ce,
                    indexCached: ue,
                    displayIndex: Nn(),
                    navCurrentIndex: on,
                    navCurrentIndexCached: an,
                    pages: en,
                    pagesCached: nn,
                    sheet: Jt,
                    isOn: gt,
                    event: t || {}
                }
            }
            X && console.warn("No slides found in", t.container)
        };

        function R(t) {
            var e = this.querySelector(".icon-down");
            if (e) {
                let t = e.className; - 1 === t.indexOf("rotate") ? e.className += " rotate" : (t = t.replace(" rotate", ""), e.className = t)
            }
            F(this.closest("li").querySelector("ul")), t.preventDefault(), t.stopPropagation()
        }
        for (var I = document.querySelectorAll(".article-body__left-menu--wrapper > ul > li > div, .toc--menu > ul > li > div "), H = 0; H < I.length; H++) I[H].addEventListener("click", R);

        function F(t) {
            if (null !== t) {
                var e = t.className; - 1 === e.indexOf("active") ? e += " active" : e = e.replace(" active", ""), t.className = e
            }
        }

        function flag() {
            console.log("CTF{J4v4script_i5_4m4zing}");
        }

        document.querySelector(".toc--heading").addEventListener("click", (function(t) {
                F(this.closest(".row").querySelector(".toc--menu"))
            })),
            function() {
                var t = `${window.location.protocol}//${window.location.host}`,
                    e = window.location.href.replace(t, ""),
                    n = document.querySelectorAll(`a[href="${e}"]`);
                0 == n.length && (n = document.querySelectorAll(`a[href="${e}/"]`));
                for (var i = 0; i < n.length; i++) F(n[i].closest("li"));
                ! function() {
                    for (var t = document.querySelectorAll(".article-body__left-menu--wrapper > ul > li > ul, .toc--menu > ul > li > ul"), e = 0; e < t.length; e++) t[e].querySelector("li.active") && F(t[e])
                }()
            }(), async function() {
                let t = !1;
                try {
                    await fetch(new Request("https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js")).catch((e => t = !0))
                } catch (e) {
                    t = !1
                } finally {
                    !0 === t && (dataLayer.push({
                        event: "Ad Blocker"
                    }), console.log("Adblocker enabled"))
                }
            }(), B({
                container: ".similar-articles__grid",
                autoplay: !0,
                controls: !0,
                items: 4,
                nav: !1,
                gutter: 15,
                controlsText: ["<", ">"],
                responsive: {
                    320: {
                        items: 1
                    },
                    576: {
                        items: 2
                    },
                    768: {
                        items: 3
                    },
                    1200: {
                        items: 4
                    }
                }
            })
    })(), t = r(745), e = r(650), t((function() {
        function n(n) {
            t("#advertisement-image").attr("src", n.image), t("#advertisement-url").attr("href", n.url), t("#advertisement-url").click((function(t) {
                window.open(n.url), t.preventDefault(), t.stopPropagation(), e.default.close("advertisement-modal")
            })), e.default.show("advertisement-modal", {
                disableScroll: !0
            })
        }
        setTimeout((function() {
            t.ajax({
                type: "GET",
                url: "/api/advertisement",
                contentType: "application/json",
                success: function(t) {
                    t.payload && (window.innerWidth <= 768 ? t.payload.showOnMobile && n(t.payload) : n(t.payload))
                }
            })
        }), 5e3)
    }))
})();