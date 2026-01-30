"use strict";
(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([
    [9399], {
        1013: (e, t, n) => {
            n.d(t, {
                N: () => x
            });
            var r = n(2404),
                l = n(2312),
                u = n(7634),
                o = n(8766),
                s = n(4943),
                i = n(1764),
                a = n(4608),
                c = n(1525);

            function f(e, t) {
                if ("function" == typeof e) return e(t);
                null != e && (e.current = t)
            }
            class d extends l.Component {
                getSnapshotBeforeUpdate(e) {
                    let t = this.props.childRef.current;
                    if (t && e.isPresent && !this.props.isPresent) {
                        let e = t.offsetParent,
                            n = (0, a.s)(e) && e.offsetWidth || 0,
                            r = this.props.sizeRef.current;
                        r.height = t.offsetHeight || 0, r.width = t.offsetWidth || 0, r.top = t.offsetTop, r.left = t.offsetLeft, r.right = n - r.width - r.left
                    }
                    return null
                }
                componentDidUpdate() {}
                render() {
                    return this.props.children
                }
            }

            function p(e) {
                var t, n;
                let {
                    children: u,
                    isPresent: o,
                    anchorX: s,
                    root: i
                } = e, a = (0, l.useId)(), p = (0, l.useRef)(null), h = (0, l.useRef)({
                    width: 0,
                    height: 0,
                    top: 0,
                    left: 0,
                    right: 0
                }), {
                    nonce: m
                } = (0, l.useContext)(c.Q), v = function(...e) {
                    return l.useCallback(function(...e) {
                        return t => {
                            let n = !1,
                                r = e.map(e => {
                                    let r = f(e, t);
                                    return n || "function" != typeof r || (n = !0), r
                                });
                            if (n) return () => {
                                for (let t = 0; t < r.length; t++) {
                                    let n = r[t];
                                    "function" == typeof n ? n() : f(e[t], null)
                                }
                            }
                        }
                    }(...e), e)
                }(p, null != (n = null == (t = u.props) ? void 0 : t.ref) ? n : null == u ? void 0 : u.ref);
                return (0, l.useInsertionEffect)(() => {
                    let {
                        width: e,
                        height: t,
                        top: n,
                        left: r,
                        right: l
                    } = h.current;
                    if (o || !p.current || !e || !t) return;
                    p.current.dataset.motionPopId = a;
                    let u = document.createElement("style");
                    m && (u.nonce = m);
                    let c = null != i ? i : document.head;
                    return c.appendChild(u), u.sheet && u.sheet.insertRule('\n          [data-motion-pop-id="'.concat(a, '"] {\n            position: absolute !important;\n            width: ').concat(e, "px !important;\n            height: ").concat(t, "px !important;\n            ").concat("left" === s ? "left: ".concat(r) : "right: ".concat(l), "px !important;\n            top: ").concat(n, "px !important;\n          }\n        ")), () => {
                        c.contains(u) && c.removeChild(u)
                    }
                }, [o]), (0, r.jsx)(d, {
                    isPresent: o,
                    childRef: p,
                    sizeRef: h,
                    children: l.cloneElement(u, {
                        ref: v
                    })
                })
            }
            let h = e => {
                let {
                    children: t,
                    initial: n,
                    isPresent: u,
                    onExitComplete: s,
                    custom: a,
                    presenceAffectsLayout: c,
                    mode: f,
                    anchorX: d,
                    root: h
                } = e, v = (0, o.M)(m), y = (0, l.useId)(), g = !0, x = (0, l.useMemo)(() => (g = !1, {
                    id: y,
                    initial: n,
                    isPresent: u,
                    custom: a,
                    onExitComplete: e => {
                        for (let t of (v.set(e, !0), v.values()))
                            if (!t) return;
                        s && s()
                    },
                    register: e => (v.set(e, !1), () => v.delete(e))
                }), [u, v, s]);
                return c && g && (x = { ...x
                }), (0, l.useMemo)(() => {
                    v.forEach((e, t) => v.set(t, !1))
                }, [u]), l.useEffect(() => {
                    u || v.size || !s || s()
                }, [u]), "popLayout" === f && (t = (0, r.jsx)(p, {
                    isPresent: u,
                    anchorX: d,
                    root: h,
                    children: t
                })), (0, r.jsx)(i.t.Provider, {
                    value: x,
                    children: t
                })
            };

            function m() {
                return new Map
            }
            var v = n(3155);
            let y = e => e.key || "";

            function g(e) {
                let t = [];
                return l.Children.forEach(e, e => {
                    (0, l.isValidElement)(e) && t.push(e)
                }), t
            }
            let x = e => {
                let {
                    children: t,
                    custom: n,
                    initial: i = !0,
                    onExitComplete: a,
                    presenceAffectsLayout: c = !0,
                    mode: f = "sync",
                    propagate: d = !1,
                    anchorX: p = "left",
                    root: m
                } = e, [x, k] = (0, v.xQ)(d), E = (0, l.useMemo)(() => g(t), [t]), M = d && !x ? [] : E.map(y), C = (0, l.useRef)(!0), j = (0, l.useRef)(E), w = (0, o.M)(() => new Map), R = (0, l.useRef)(new Set), [b, A] = (0, l.useState)(E), [P, L] = (0, l.useState)(E);
                (0, s.E)(() => {
                    C.current = !1, j.current = E;
                    for (let e = 0; e < P.length; e++) {
                        let t = y(P[e]);
                        M.includes(t) ? (w.delete(t), R.current.delete(t)) : !0 !== w.get(t) && w.set(t, !1)
                    }
                }, [P, M.length, M.join("-")]);
                let N = [];
                if (E !== b) {
                    let e = [...E];
                    for (let t = 0; t < P.length; t++) {
                        let n = P[t],
                            r = y(n);
                        M.includes(r) || (e.splice(t, 0, n), N.push(n))
                    }
                    return "wait" === f && N.length && (e = N), L(g(e)), A(E), null
                }
                let {
                    forceRender: z
                } = (0, l.useContext)(u.L);
                return (0, r.jsx)(r.Fragment, {
                    children: P.map(e => {
                        let t = y(e),
                            l = (!d || !!x) && (E === P || M.includes(t));
                        return (0, r.jsx)(h, {
                            isPresent: l,
                            initial: (!C.current || !!i) && void 0,
                            custom: n,
                            presenceAffectsLayout: c,
                            mode: f,
                            root: m,
                            onExitComplete: l ? void 0 : () => {
                                if (R.current.has(t) || (R.current.add(t), !w.has(t))) return;
                                w.set(t, !0);
                                let e = !0;
                                w.forEach(t => {
                                    t || (e = !1)
                                }), e && (null == z || z(), L(j.current), d && (null == k || k()), a && a())
                            },
                            anchorX: p,
                            children: e
                        }, t)
                    })
                })
            }
        },
        5076: (e, t, n) => {
            n.d(t, {
                A: () => r
            });
            let r = (0, n(3572).A)("Sparkles", [
                ["path", {
                    d: "M9.937 15.5A2 2 0 0 0 8.5 14.063l-6.135-1.582a.5.5 0 0 1 0-.962L8.5 9.936A2 2 0 0 0 9.937 8.5l1.582-6.135a.5.5 0 0 1 .963 0L14.063 8.5A2 2 0 0 0 15.5 9.937l6.135 1.581a.5.5 0 0 1 0 .964L15.5 14.063a2 2 0 0 0-1.437 1.437l-1.582 6.135a.5.5 0 0 1-.963 0z",
                    key: "4pj2yx"
                }],
                ["path", {
                    d: "M20 3v4",
                    key: "1olli1"
                }],
                ["path", {
                    d: "M22 5h-4",
                    key: "1gvqau"
                }],
                ["path", {
                    d: "M4 17v2",
                    key: "vumght"
                }],
                ["path", {
                    d: "M5 18H3",
                    key: "zchphs"
                }]
            ])
        },
        9260: (e, t, n) => {
            n.d(t, {
                F: () => o
            });
            var r = n(6122);
            let l = e => "boolean" == typeof e ? `${e}` : 0 === e ? "0" : e,
                u = r.$,
                o = (e, t) => n => {
                    var r;
                    if ((null == t ? void 0 : t.variants) == null) return u(e, null == n ? void 0 : n.class, null == n ? void 0 : n.className);
                    let {
                        variants: o,
                        defaultVariants: s
                    } = t, i = Object.keys(o).map(e => {
                        let t = null == n ? void 0 : n[e],
                            r = null == s ? void 0 : s[e];
                        if (null === t) return null;
                        let u = l(t) || l(r);
                        return o[e][u]
                    }), a = n && Object.entries(n).reduce((e, t) => {
                        let [n, r] = t;
                        return void 0 === r || (e[n] = r), e
                    }, {});
                    return u(e, i, null == t || null == (r = t.compoundVariants) ? void 0 : r.reduce((e, t) => {
                        let {
                            class: n,
                            className: r,
                            ...l
                        } = t;
                        return Object.entries(l).every(e => {
                            let [t, n] = e;
                            return Array.isArray(n) ? n.includes({ ...s,
                                ...a
                            }[t]) : ({ ...s,
                                ...a
                            })[t] === n
                        }) ? [...e, n, r] : e
                    }, []), null == n ? void 0 : n.class, null == n ? void 0 : n.className)
                }
        }
    }
]);