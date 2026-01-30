"use strict";
(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([
    [5155], {
        551: (e, t, r) => {
            r.d(t, {
                jH: () => u
            });
            var n = r(2312);
            r(2404);
            var o = n.createContext(void 0);

            function u(e) {
                let t = n.useContext(o);
                return e || t || "ltr"
            }
        },
        871: (e, t, r) => {
            r.d(t, {
                hO: () => a,
                sG: () => l
            });
            var n = r(2312),
                o = r(1081),
                u = r(8796),
                i = r(2404),
                l = ["a", "button", "div", "form", "h2", "h3", "img", "input", "label", "li", "nav", "ol", "p", "span", "svg", "ul"].reduce((e, t) => {
                    let r = n.forwardRef((e, r) => {
                        let {
                            asChild: n,
                            ...o
                        } = e, l = n ? u.DX : t;
                        return "undefined" != typeof window && (window[Symbol.for("radix-ui")] = !0), (0, i.jsx)(l, { ...o,
                            ref: r
                        })
                    });
                    return r.displayName = `Primitive.${t}`, { ...e,
                        [t]: r
                    }
                }, {});

            function a(e, t) {
                e && o.flushSync(() => e.dispatchEvent(t))
            }
        },
        884: (e, t, r) => {
            r.d(t, {
                A: () => n
            });
            let n = (0, r(3572).A)("Lock", [
                ["rect", {
                    width: "18",
                    height: "11",
                    x: "3",
                    y: "11",
                    rx: "2",
                    ry: "2",
                    key: "1w4ew1"
                }],
                ["path", {
                    d: "M7 11V7a5 5 0 0 1 10 0v4",
                    key: "fwvmzm"
                }]
            ])
        },
        1587: (e, t, r) => {
            r.d(t, {
                N: () => o
            });
            var n = r(2312),
                o = globalThis ? .document ? n.useLayoutEffect : () => {}
        },
        3323: (e, t, r) => {
            r.d(t, {
                i: () => u
            });
            var n = r(2312),
                o = r(6895);

            function u({
                prop: e,
                defaultProp: t,
                onChange: r = () => {}
            }) {
                let [u, i] = function({
                    defaultProp: e,
                    onChange: t
                }) {
                    let r = n.useState(e),
                        [u] = r,
                        i = n.useRef(u),
                        l = (0, o.c)(t);
                    return n.useEffect(() => {
                        i.current !== u && (l(u), i.current = u)
                    }, [u, i, l]), r
                }({
                    defaultProp: t,
                    onChange: r
                }), l = void 0 !== e, a = l ? e : u, s = (0, o.c)(r);
                return [a, n.useCallback(t => {
                    if (l) {
                        let r = "function" == typeof t ? t(e) : t;
                        r !== e && s(r)
                    } else i(t)
                }, [l, e, i, s])]
            }
        },
        3700: (e, t, r) => {
            r.d(t, {
                A: () => i,
                q: () => u
            });
            var n = r(2312),
                o = r(2404);

            function u(e, t) {
                let r = n.createContext(t),
                    u = e => {
                        let {
                            children: t,
                            ...u
                        } = e, i = n.useMemo(() => u, Object.values(u));
                        return (0, o.jsx)(r.Provider, {
                            value: i,
                            children: t
                        })
                    };
                return u.displayName = e + "Provider", [u, function(o) {
                    let u = n.useContext(r);
                    if (u) return u;
                    if (void 0 !== t) return t;
                    throw Error(`\`${o}\` must be used within \`${e}\``)
                }]
            }

            function i(e, t = []) {
                let r = [],
                    u = () => {
                        let t = r.map(e => n.createContext(e));
                        return function(r) {
                            let o = r ? .[e] || t;
                            return n.useMemo(() => ({
                                [`__scope${e}`]: { ...r,
                                    [e]: o
                                }
                            }), [r, o])
                        }
                    };
                return u.scopeName = e, [function(t, u) {
                    let i = n.createContext(u),
                        l = r.length;
                    r = [...r, u];
                    let a = t => {
                        let {
                            scope: r,
                            children: u,
                            ...a
                        } = t, s = r ? .[e] ? .[l] || i, c = n.useMemo(() => a, Object.values(a));
                        return (0, o.jsx)(s.Provider, {
                            value: c,
                            children: u
                        })
                    };
                    return a.displayName = t + "Provider", [a, function(r, o) {
                        let a = o ? .[e] ? .[l] || i,
                            s = n.useContext(a);
                        if (s) return s;
                        if (void 0 !== u) return u;
                        throw Error(`\`${r}\` must be used within \`${t}\``)
                    }]
                }, function(...e) {
                    let t = e[0];
                    if (1 === e.length) return t;
                    let r = () => {
                        let r = e.map(e => ({
                            useScope: e(),
                            scopeName: e.scopeName
                        }));
                        return function(e) {
                            let o = r.reduce((t, {
                                useScope: r,
                                scopeName: n
                            }) => {
                                let o = r(e)[`__scope${n}`];
                                return { ...t,
                                    ...o
                                }
                            }, {});
                            return n.useMemo(() => ({
                                [`__scope${t.scopeName}`]: o
                            }), [o])
                        }
                    };
                    return r.scopeName = t.scopeName, r
                }(u, ...t)]
            }
        },
        5483: (e, t, r) => {
            r.d(t, {
                B: () => a
            });
            var n, o = r(2312),
                u = r(1587),
                i = (n || (n = r.t(o, 2)))["useId".toString()] || (() => void 0),
                l = 0;

            function a(e) {
                let [t, r] = o.useState(i());
                return (0, u.N)(() => {
                    e || r(e => e ? ? String(l++))
                }, [e]), e || (t ? `radix-${t}` : "")
            }
        },
        5501: (e, t, r) => {
            r.d(t, {
                C: () => i
            });
            var n = r(2312),
                o = r(8290),
                u = r(1587),
                i = e => {
                    let {
                        present: t,
                        children: r
                    } = e, i = function(e) {
                        var t, r;
                        let [o, i] = n.useState(), a = n.useRef({}), s = n.useRef(e), c = n.useRef("none"), [f, d] = (t = e ? "mounted" : "unmounted", r = {
                            mounted: {
                                UNMOUNT: "unmounted",
                                ANIMATION_OUT: "unmountSuspended"
                            },
                            unmountSuspended: {
                                MOUNT: "mounted",
                                ANIMATION_END: "unmounted"
                            },
                            unmounted: {
                                MOUNT: "mounted"
                            }
                        }, n.useReducer((e, t) => {
                            let n = r[e][t];
                            return null != n ? n : e
                        }, t));
                        return n.useEffect(() => {
                            let e = l(a.current);
                            c.current = "mounted" === f ? e : "none"
                        }, [f]), (0, u.N)(() => {
                            let t = a.current,
                                r = s.current;
                            if (r !== e) {
                                let n = c.current,
                                    o = l(t);
                                e ? d("MOUNT") : "none" === o || (null == t ? void 0 : t.display) === "none" ? d("UNMOUNT") : r && n !== o ? d("ANIMATION_OUT") : d("UNMOUNT"), s.current = e
                            }
                        }, [e, d]), (0, u.N)(() => {
                            if (o) {
                                var e;
                                let t, r = null != (e = o.ownerDocument.defaultView) ? e : window,
                                    n = e => {
                                        let n = l(a.current).includes(e.animationName);
                                        if (e.target === o && n && (d("ANIMATION_END"), !s.current)) {
                                            let e = o.style.animationFillMode;
                                            o.style.animationFillMode = "forwards", t = r.setTimeout(() => {
                                                "forwards" === o.style.animationFillMode && (o.style.animationFillMode = e)
                                            })
                                        }
                                    },
                                    u = e => {
                                        e.target === o && (c.current = l(a.current))
                                    };
                                return o.addEventListener("animationstart", u), o.addEventListener("animationcancel", n), o.addEventListener("animationend", n), () => {
                                    r.clearTimeout(t), o.removeEventListener("animationstart", u), o.removeEventListener("animationcancel", n), o.removeEventListener("animationend", n)
                                }
                            }
                            d("ANIMATION_END")
                        }, [o, d]), {
                            isPresent: ["mounted", "unmountSuspended"].includes(f),
                            ref: n.useCallback(e => {
                                e && (a.current = getComputedStyle(e)), i(e)
                            }, [])
                        }
                    }(t), a = "function" == typeof r ? r({
                        present: i.isPresent
                    }) : n.Children.only(r), s = (0, o.s)(i.ref, function(e) {
                        var t, r;
                        let n = null == (t = Object.getOwnPropertyDescriptor(e.props, "ref")) ? void 0 : t.get,
                            o = n && "isReactWarning" in n && n.isReactWarning;
                        return o ? e.ref : (o = (n = null == (r = Object.getOwnPropertyDescriptor(e, "ref")) ? void 0 : r.get) && "isReactWarning" in n && n.isReactWarning) ? e.props.ref : e.props.ref || e.ref
                    }(a));
                    return "function" == typeof r || i.isPresent ? n.cloneElement(a, {
                        ref: s
                    }) : null
                };

            function l(e) {
                return (null == e ? void 0 : e.animationName) || "none"
            }
            i.displayName = "Presence"
        },
        6895: (e, t, r) => {
            r.d(t, {
                c: () => o
            });
            var n = r(2312);

            function o(e) {
                let t = n.useRef(e);
                return n.useEffect(() => {
                    t.current = e
                }), n.useMemo(() => (...e) => t.current ? .(...e), [])
            }
        },
        8086: (e, t, r) => {
            r.d(t, {
                q7: () => O,
                bL: () => T,
                RG: () => A
            });
            var n = r(2312),
                o = r(8285),
                u = r(3700),
                i = r(8290),
                l = r(8796),
                a = r(2404),
                s = r(5483),
                c = r(871),
                f = r(6895),
                d = r(3323),
                m = r(551),
                p = "rovingFocusGroup.onEntryFocus",
                v = {
                    bubbles: !1,
                    cancelable: !0
                },
                w = "RovingFocusGroup",
                [y, N, h] = function(e) {
                    let t = e + "CollectionProvider",
                        [r, o] = (0, u.A)(t),
                        [s, c] = r(t, {
                            collectionRef: {
                                current: null
                            },
                            itemMap: new Map
                        }),
                        f = e => {
                            let {
                                scope: t,
                                children: r
                            } = e, o = n.useRef(null), u = n.useRef(new Map).current;
                            return (0, a.jsx)(s, {
                                scope: t,
                                itemMap: u,
                                collectionRef: o,
                                children: r
                            })
                        };
                    f.displayName = t;
                    let d = e + "CollectionSlot",
                        m = n.forwardRef((e, t) => {
                            let {
                                scope: r,
                                children: n
                            } = e, o = c(d, r), u = (0, i.s)(t, o.collectionRef);
                            return (0, a.jsx)(l.DX, {
                                ref: u,
                                children: n
                            })
                        });
                    m.displayName = d;
                    let p = e + "CollectionItemSlot",
                        v = "data-radix-collection-item",
                        w = n.forwardRef((e, t) => {
                            let {
                                scope: r,
                                children: o,
                                ...u
                            } = e, s = n.useRef(null), f = (0, i.s)(t, s), d = c(p, r);
                            return n.useEffect(() => (d.itemMap.set(s, {
                                ref: s,
                                ...u
                            }), () => void d.itemMap.delete(s))), (0, a.jsx)(l.DX, { ...{
                                    [v]: ""
                                },
                                ref: f,
                                children: o
                            })
                        });
                    return w.displayName = p, [{
                        Provider: f,
                        Slot: m,
                        ItemSlot: w
                    }, function(t) {
                        let r = c(e + "CollectionConsumer", t);
                        return n.useCallback(() => {
                            let e = r.collectionRef.current;
                            if (!e) return [];
                            let t = Array.from(e.querySelectorAll("[".concat(v, "]")));
                            return Array.from(r.itemMap.values()).sort((e, r) => t.indexOf(e.ref.current) - t.indexOf(r.ref.current))
                        }, [r.collectionRef, r.itemMap])
                    }, o]
                }(w),
                [g, A] = (0, u.A)(w, [h]),
                [b, R] = g(w),
                x = n.forwardRef((e, t) => (0, a.jsx)(y.Provider, {
                    scope: e.__scopeRovingFocusGroup,
                    children: (0, a.jsx)(y.Slot, {
                        scope: e.__scopeRovingFocusGroup,
                        children: (0, a.jsx)(M, { ...e,
                            ref: t
                        })
                    })
                }));
            x.displayName = w;
            var M = n.forwardRef((e, t) => {
                    let {
                        __scopeRovingFocusGroup: r,
                        orientation: u,
                        loop: l = !1,
                        dir: s,
                        currentTabStopId: w,
                        defaultCurrentTabStopId: y,
                        onCurrentTabStopIdChange: h,
                        onEntryFocus: g,
                        preventScrollOnEntryFocus: A = !1,
                        ...R
                    } = e, x = n.useRef(null), M = (0, i.s)(t, x), E = (0, m.jH)(s), [C = null, I] = (0, d.i)({
                        prop: w,
                        defaultProp: y,
                        onChange: h
                    }), [T, O] = n.useState(!1), D = (0, f.c)(g), j = N(r), F = n.useRef(!1), [P, _] = n.useState(0);
                    return n.useEffect(() => {
                        let e = x.current;
                        if (e) return e.addEventListener(p, D), () => e.removeEventListener(p, D)
                    }, [D]), (0, a.jsx)(b, {
                        scope: r,
                        orientation: u,
                        dir: E,
                        loop: l,
                        currentTabStopId: C,
                        onItemFocus: n.useCallback(e => I(e), [I]),
                        onItemShiftTab: n.useCallback(() => O(!0), []),
                        onFocusableItemAdd: n.useCallback(() => _(e => e + 1), []),
                        onFocusableItemRemove: n.useCallback(() => _(e => e - 1), []),
                        children: (0, a.jsx)(c.sG.div, {
                            tabIndex: T || 0 === P ? -1 : 0,
                            "data-orientation": u,
                            ...R,
                            ref: M,
                            style: {
                                outline: "none",
                                ...e.style
                            },
                            onMouseDown: (0, o.m)(e.onMouseDown, () => {
                                F.current = !0
                            }),
                            onFocus: (0, o.m)(e.onFocus, e => {
                                let t = !F.current;
                                if (e.target === e.currentTarget && t && !T) {
                                    let t = new CustomEvent(p, v);
                                    if (e.currentTarget.dispatchEvent(t), !t.defaultPrevented) {
                                        let e = j().filter(e => e.focusable);
                                        S([e.find(e => e.active), e.find(e => e.id === C), ...e].filter(Boolean).map(e => e.ref.current), A)
                                    }
                                }
                                F.current = !1
                            }),
                            onBlur: (0, o.m)(e.onBlur, () => O(!1))
                        })
                    })
                }),
                E = "RovingFocusGroupItem",
                C = n.forwardRef((e, t) => {
                    let {
                        __scopeRovingFocusGroup: r,
                        focusable: u = !0,
                        active: i = !1,
                        tabStopId: l,
                        ...f
                    } = e, d = (0, s.B)(), m = l || d, p = R(E, r), v = p.currentTabStopId === m, w = N(r), {
                        onFocusableItemAdd: h,
                        onFocusableItemRemove: g
                    } = p;
                    return n.useEffect(() => {
                        if (u) return h(), () => g()
                    }, [u, h, g]), (0, a.jsx)(y.ItemSlot, {
                        scope: r,
                        id: m,
                        focusable: u,
                        active: i,
                        children: (0, a.jsx)(c.sG.span, {
                            tabIndex: v ? 0 : -1,
                            "data-orientation": p.orientation,
                            ...f,
                            ref: t,
                            onMouseDown: (0, o.m)(e.onMouseDown, e => {
                                u ? p.onItemFocus(m) : e.preventDefault()
                            }),
                            onFocus: (0, o.m)(e.onFocus, () => p.onItemFocus(m)),
                            onKeyDown: (0, o.m)(e.onKeyDown, e => {
                                if ("Tab" === e.key && e.shiftKey) return void p.onItemShiftTab();
                                if (e.target !== e.currentTarget) return;
                                let t = function(e, t, r) {
                                    var n;
                                    let o = (n = e.key, "rtl" !== r ? n : "ArrowLeft" === n ? "ArrowRight" : "ArrowRight" === n ? "ArrowLeft" : n);
                                    if (!("vertical" === t && ["ArrowLeft", "ArrowRight"].includes(o)) && !("horizontal" === t && ["ArrowUp", "ArrowDown"].includes(o))) return I[o]
                                }(e, p.orientation, p.dir);
                                if (void 0 !== t) {
                                    if (e.metaKey || e.ctrlKey || e.altKey || e.shiftKey) return;
                                    e.preventDefault();
                                    let r = w().filter(e => e.focusable).map(e => e.ref.current);
                                    if ("last" === t) r.reverse();
                                    else if ("prev" === t || "next" === t) {
                                        "prev" === t && r.reverse();
                                        let n = r.indexOf(e.currentTarget);
                                        r = p.loop ? function(e, t) {
                                            return e.map((r, n) => e[(t + n) % e.length])
                                        }(r, n + 1) : r.slice(n + 1)
                                    }
                                    setTimeout(() => S(r))
                                }
                            })
                        })
                    })
                });
            C.displayName = E;
            var I = {
                ArrowLeft: "prev",
                ArrowUp: "prev",
                ArrowRight: "next",
                ArrowDown: "next",
                PageUp: "first",
                Home: "first",
                PageDown: "last",
                End: "last"
            };

            function S(e) {
                let t = arguments.length > 1 && void 0 !== arguments[1] && arguments[1],
                    r = document.activeElement;
                for (let n of e)
                    if (n === r || (n.focus({
                            preventScroll: t
                        }), document.activeElement !== r)) return
            }
            var T = x,
                O = C
        },
        8226: (e, t, r) => {
            r.d(t, {
                A: () => n
            });
            let n = (0, r(3572).A)("Zap", [
                ["path", {
                    d: "M4 14a1 1 0 0 1-.78-1.63l9.9-10.2a.5.5 0 0 1 .86.46l-1.92 6.02A1 1 0 0 0 13 10h7a1 1 0 0 1 .78 1.63l-9.9 10.2a.5.5 0 0 1-.86-.46l1.92-6.02A1 1 0 0 0 11 14z",
                    key: "1xq2db"
                }]
            ])
        },
        8285: (e, t, r) => {
            r.d(t, {
                m: () => n
            });

            function n(e, t, {
                checkForDefaultPrevented: r = !0
            } = {}) {
                return function(n) {
                    if (e ? .(n), !1 === r || !n.defaultPrevented) return t ? .(n)
                }
            }
        },
        9998: (e, t, r) => {
            r.d(t, {
                A: () => n
            });
            let n = (0, r(3572).A)("Shield", [
                ["path", {
                    d: "M20 13c0 5-3.5 7.5-7.66 8.95a1 1 0 0 1-.67-.01C7.5 20.5 4 18 4 13V6a1 1 0 0 1 1-1c2 0 4.5-1.2 6.24-2.72a1.17 1.17 0 0 1 1.52 0C14.51 3.81 17 5 19 5a1 1 0 0 1 1 1z",
                    key: "oel41y"
                }]
            ])
        }
    }
]);