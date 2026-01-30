"use strict";
(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([
    [5055], {
        319: (e, t) => {
            function r(e) {
                let {
                    widthInt: t,
                    heightInt: r,
                    blurWidth: n,
                    blurHeight: i,
                    blurDataURL: l,
                    objectFit: a
                } = e, o = n ? 40 * n : t, u = i ? 40 * i : r, d = o && u ? "viewBox='0 0 " + o + " " + u + "'" : "";
                return "%3Csvg xmlns='http://www.w3.org/2000/svg' " + d + "%3E%3Cfilter id='b' color-interpolation-filters='sRGB'%3E%3CfeGaussianBlur stdDeviation='20'/%3E%3CfeColorMatrix values='1 0 0 0 0 0 1 0 0 0 0 0 1 0 0 0 0 0 100 -1' result='s'/%3E%3CfeFlood x='0' y='0' width='100%25' height='100%25'/%3E%3CfeComposite operator='out' in='s'/%3E%3CfeComposite in2='SourceGraphic'/%3E%3CfeGaussianBlur stdDeviation='20'/%3E%3C/filter%3E%3Cimage width='100%25' height='100%25' x='0' y='0' preserveAspectRatio='" + (d ? "none" : "contain" === a ? "xMidYMid" : "cover" === a ? "xMidYMid slice" : "none") + "' style='filter: url(%23b);' href='" + l + "'/%3E%3C/svg%3E"
            }
            Object.defineProperty(t, "__esModule", {
                value: !0
            }), Object.defineProperty(t, "getImageBlurSvg", {
                enumerable: !0,
                get: function() {
                    return r
                }
            })
        },
        1528: (e, t, r) => {
            r.d(t, {
                A: () => n
            });
            let n = (0, r(3572).A)("Trash2", [
                ["path", {
                    d: "M3 6h18",
                    key: "d0wm0j"
                }],
                ["path", {
                    d: "M19 6v14c0 1-1 2-2 2H7c-1 0-2-1-2-2V6",
                    key: "4alrt4"
                }],
                ["path", {
                    d: "M8 6V4c0-1 1-2 2-2h4c1 0 2 1 2 2v2",
                    key: "v07s0e"
                }],
                ["line", {
                    x1: "10",
                    x2: "10",
                    y1: "11",
                    y2: "17",
                    key: "1uufr5"
                }],
                ["line", {
                    x1: "14",
                    x2: "14",
                    y1: "11",
                    y2: "17",
                    key: "xtxkd"
                }]
            ])
        },
        1807: (e, t, r) => {
            Object.defineProperty(t, "__esModule", {
                value: !0
            }), Object.defineProperty(t, "AmpStateContext", {
                enumerable: !0,
                get: function() {
                    return n
                }
            });
            let n = r(8463)._(r(2312)).default.createContext({})
        },
        2231: (e, t) => {
            function r(e) {
                let {
                    ampFirst: t = !1,
                    hybrid: r = !1,
                    hasQuery: n = !1
                } = void 0 === e ? {} : e;
                return t || r && n
            }
            Object.defineProperty(t, "__esModule", {
                value: !0
            }), Object.defineProperty(t, "isInAmpMode", {
                enumerable: !0,
                get: function() {
                    return r
                }
            })
        },
        2422: (e, t, r) => {
            Object.defineProperty(t, "__esModule", {
                value: !0
            }), Object.defineProperty(t, "Image", {
                enumerable: !0,
                get: function() {
                    return _
                }
            });
            let n = r(8463),
                i = r(2780),
                l = r(2404),
                a = i._(r(2312)),
                o = n._(r(1081)),
                u = n._(r(9519)),
                d = r(9846),
                s = r(4331),
                c = r(8393);
            r(9095);
            let f = r(8316),
                p = n._(r(6158)),
                m = r(3573),
                g = {
                    deviceSizes: [640, 750, 828, 1080, 1200, 1920, 2048, 3840],
                    imageSizes: [16, 32, 48, 64, 96, 128, 256, 384],
                    path: "/_next/image",
                    loader: "default",
                    dangerouslyAllowSVG: !1,
                    unoptimized: !0
                };

            function h(e, t, r, n, i, l, a) {
                let o = null == e ? void 0 : e.src;
                e && e["data-loaded-src"] !== o && (e["data-loaded-src"] = o, ("decode" in e ? e.decode() : Promise.resolve()).catch(() => {}).then(() => {
                    if (e.parentElement && e.isConnected) {
                        if ("empty" !== t && i(!0), null == r ? void 0 : r.current) {
                            let t = new Event("load");
                            Object.defineProperty(t, "target", {
                                writable: !1,
                                value: e
                            });
                            let n = !1,
                                i = !1;
                            r.current({ ...t,
                                nativeEvent: t,
                                currentTarget: e,
                                target: e,
                                isDefaultPrevented: () => n,
                                isPropagationStopped: () => i,
                                persist: () => {},
                                preventDefault: () => {
                                    n = !0, t.preventDefault()
                                },
                                stopPropagation: () => {
                                    i = !0, t.stopPropagation()
                                }
                            })
                        }(null == n ? void 0 : n.current) && n.current(e)
                    }
                }))
            }

            function y(e) {
                return a.use ? {
                    fetchPriority: e
                } : {
                    fetchpriority: e
                }
            }
            let v = (0, a.forwardRef)((e, t) => {
                let {
                    src: r,
                    srcSet: n,
                    sizes: i,
                    height: o,
                    width: u,
                    decoding: d,
                    className: s,
                    style: c,
                    fetchPriority: f,
                    placeholder: p,
                    loading: g,
                    unoptimized: v,
                    fill: b,
                    onLoadRef: _,
                    onLoadingCompleteRef: w,
                    setBlurComplete: x,
                    setShowAltText: j,
                    sizesInput: O,
                    onLoad: P,
                    onError: S,
                    ...C
                } = e, M = (0, a.useCallback)(e => {
                    e && (S && (e.src = e.src), e.complete && h(e, p, _, w, x, v, O))
                }, [r, p, _, w, x, S, v, O]), E = (0, m.useMergedRef)(t, M);
                return (0, l.jsx)("img", { ...C,
                    ...y(f),
                    loading: g,
                    width: u,
                    height: o,
                    decoding: d,
                    "data-nimg": b ? "fill" : "1",
                    className: s,
                    style: c,
                    sizes: i,
                    srcSet: n,
                    src: r,
                    ref: E,
                    onLoad: e => {
                        h(e.currentTarget, p, _, w, x, v, O)
                    },
                    onError: e => {
                        j(!0), "empty" !== p && x(!0), S && S(e)
                    }
                })
            });

            function b(e) {
                let {
                    isAppRouter: t,
                    imgAttributes: r
                } = e, n = {
                    as: "image",
                    imageSrcSet: r.srcSet,
                    imageSizes: r.sizes,
                    crossOrigin: r.crossOrigin,
                    referrerPolicy: r.referrerPolicy,
                    ...y(r.fetchPriority)
                };
                return t && o.default.preload ? (o.default.preload(r.src, n), null) : (0, l.jsx)(u.default, {
                    children: (0, l.jsx)("link", {
                        rel: "preload",
                        href: r.srcSet ? void 0 : r.src,
                        ...n
                    }, "__nimg-" + r.src + r.srcSet + r.sizes)
                })
            }
            let _ = (0, a.forwardRef)((e, t) => {
                let r = (0, a.useContext)(f.RouterContext),
                    n = (0, a.useContext)(c.ImageConfigContext),
                    i = (0, a.useMemo)(() => {
                        var e;
                        let t = g || n || s.imageConfigDefault,
                            r = [...t.deviceSizes, ...t.imageSizes].sort((e, t) => e - t),
                            i = t.deviceSizes.sort((e, t) => e - t),
                            l = null == (e = t.qualities) ? void 0 : e.sort((e, t) => e - t);
                        return { ...t,
                            allSizes: r,
                            deviceSizes: i,
                            qualities: l
                        }
                    }, [n]),
                    {
                        onLoad: o,
                        onLoadingComplete: u
                    } = e,
                    m = (0, a.useRef)(o);
                (0, a.useEffect)(() => {
                    m.current = o
                }, [o]);
                let h = (0, a.useRef)(u);
                (0, a.useEffect)(() => {
                    h.current = u
                }, [u]);
                let [y, _] = (0, a.useState)(!1), [w, x] = (0, a.useState)(!1), {
                    props: j,
                    meta: O
                } = (0, d.getImgProps)(e, {
                    defaultLoader: p.default,
                    imgConf: i,
                    blurComplete: y,
                    showAltText: w
                });
                return (0, l.jsxs)(l.Fragment, {
                    children: [(0, l.jsx)(v, { ...j,
                        unoptimized: O.unoptimized,
                        placeholder: O.placeholder,
                        fill: O.fill,
                        onLoadRef: m,
                        onLoadingCompleteRef: h,
                        setBlurComplete: _,
                        setShowAltText: x,
                        sizesInput: e.sizes,
                        ref: t
                    }), O.priority ? (0, l.jsx)(b, {
                        isAppRouter: !r,
                        imgAttributes: j
                    }) : null]
                })
            });
            ("function" == typeof t.default || "object" == typeof t.default && null !== t.default) && void 0 === t.default.__esModule && (Object.defineProperty(t.default, "__esModule", {
                value: !0
            }), Object.assign(t.default, t), e.exports = t.default)
        },
        3573: (e, t, r) => {
            Object.defineProperty(t, "__esModule", {
                value: !0
            }), Object.defineProperty(t, "useMergedRef", {
                enumerable: !0,
                get: function() {
                    return i
                }
            });
            let n = r(2312);

            function i(e, t) {
                let r = (0, n.useRef)(null),
                    i = (0, n.useRef)(null);
                return (0, n.useCallback)(n => {
                    if (null === n) {
                        let e = r.current;
                        e && (r.current = null, e());
                        let t = i.current;
                        t && (i.current = null, t())
                    } else e && (r.current = l(e, n)), t && (i.current = l(t, n))
                }, [e, t])
            }

            function l(e, t) {
                if ("function" != typeof e) return e.current = t, () => {
                    e.current = null
                }; {
                    let r = e(t);
                    return "function" == typeof r ? r : () => e(null)
                }
            }("function" == typeof t.default || "object" == typeof t.default && null !== t.default) && void 0 === t.default.__esModule && (Object.defineProperty(t.default, "__esModule", {
                value: !0
            }), Object.assign(t.default, t), e.exports = t.default)
        },
        4331: (e, t) => {
            Object.defineProperty(t, "__esModule", {
                value: !0
            }), ! function(e, t) {
                for (var r in t) Object.defineProperty(e, r, {
                    enumerable: !0,
                    get: t[r]
                })
            }(t, {
                VALID_LOADERS: function() {
                    return r
                },
                imageConfigDefault: function() {
                    return n
                }
            });
            let r = ["default", "imgix", "cloudinary", "akamai", "custom"],
                n = {
                    deviceSizes: [640, 750, 828, 1080, 1200, 1920, 2048, 3840],
                    imageSizes: [16, 32, 48, 64, 96, 128, 256, 384],
                    path: "/_next/image",
                    loader: "default",
                    loaderFile: "",
                    domains: [],
                    disableStaticImages: !1,
                    minimumCacheTTL: 60,
                    formats: ["image/webp"],
                    dangerouslyAllowSVG: !1,
                    contentSecurityPolicy: "script-src 'none'; frame-src 'none'; sandbox;",
                    contentDispositionType: "attachment",
                    localPatterns: void 0,
                    remotePatterns: [],
                    qualities: void 0,
                    unoptimized: !1
                }
        },
        5798: (e, t, r) => {
            r.d(t, {
                A: () => n
            });
            let n = (0, r(3572).A)("Settings", [
                ["path", {
                    d: "M12.22 2h-.44a2 2 0 0 0-2 2v.18a2 2 0 0 1-1 1.73l-.43.25a2 2 0 0 1-2 0l-.15-.08a2 2 0 0 0-2.73.73l-.22.38a2 2 0 0 0 .73 2.73l.15.1a2 2 0 0 1 1 1.72v.51a2 2 0 0 1-1 1.74l-.15.09a2 2 0 0 0-.73 2.73l.22.38a2 2 0 0 0 2.73.73l.15-.08a2 2 0 0 1 2 0l.43.25a2 2 0 0 1 1 1.73V20a2 2 0 0 0 2 2h.44a2 2 0 0 0 2-2v-.18a2 2 0 0 1 1-1.73l.43-.25a2 2 0 0 1 2 0l.15.08a2 2 0 0 0 2.73-.73l.22-.39a2 2 0 0 0-.73-2.73l-.15-.08a2 2 0 0 1-1-1.74v-.5a2 2 0 0 1 1-1.74l.15-.09a2 2 0 0 0 .73-2.73l-.22-.38a2 2 0 0 0-2.73-.73l-.15.08a2 2 0 0 1-2 0l-.43-.25a2 2 0 0 1-1-1.73V4a2 2 0 0 0-2-2z",
                    key: "1qme2f"
                }],
                ["circle", {
                    cx: "12",
                    cy: "12",
                    r: "3",
                    key: "1v7zrd"
                }]
            ])
        },
        5836: (e, t, r) => {
            r.d(t, {
                b: () => o
            });
            var n = r(2312),
                i = r(871),
                l = r(2404),
                a = n.forwardRef((e, t) => (0, l.jsx)(i.sG.label, { ...e,
                    ref: t,
                    onMouseDown: t => {
                        var r;
                        t.target.closest("button, input, select, textarea") || (null == (r = e.onMouseDown) || r.call(e, t), !t.defaultPrevented && t.detail > 1 && t.preventDefault())
                    }
                }));
            a.displayName = "Label";
            var o = a
        },
        6158: (e, t) => {
            function r(e) {
                var t;
                let {
                    config: r,
                    src: n,
                    width: i,
                    quality: l
                } = e, a = l || (null == (t = r.qualities) ? void 0 : t.reduce((e, t) => Math.abs(t - 75) < Math.abs(e - 75) ? t : e)) || 75;
                return r.path + "?url=" + encodeURIComponent(n) + "&w=" + i + "&q=" + a + (n.startsWith("/_next/static/media/"), "")
            }
            Object.defineProperty(t, "__esModule", {
                value: !0
            }), Object.defineProperty(t, "default", {
                enumerable: !0,
                get: function() {
                    return n
                }
            }), r.__next_img_default = !0;
            let n = r
        },
        6692: (e, t, r) => {
            r.d(t, {
                A: () => n
            });
            let n = (0, r(3572).A)("Smartphone", [
                ["rect", {
                    width: "14",
                    height: "20",
                    x: "5",
                    y: "2",
                    rx: "2",
                    ry: "2",
                    key: "1yt0o3"
                }],
                ["path", {
                    d: "M12 18h.01",
                    key: "mhygvu"
                }]
            ])
        },
        6736: (e, t, r) => {
            r.d(t, {
                A: () => n
            });
            let n = (0, r(3572).A)("TriangleAlert", [
                ["path", {
                    d: "m21.73 18-8-14a2 2 0 0 0-3.48 0l-8 14A2 2 0 0 0 4 21h16a2 2 0 0 0 1.73-3",
                    key: "wmoenq"
                }],
                ["path", {
                    d: "M12 9v4",
                    key: "juzpu7"
                }],
                ["path", {
                    d: "M12 17h.01",
                    key: "p32p05"
                }]
            ])
        },
        7214: (e, t, r) => {
            Object.defineProperty(t, "__esModule", {
                value: !0
            }), ! function(e, t) {
                for (var r in t) Object.defineProperty(e, r, {
                    enumerable: !0,
                    get: t[r]
                })
            }(t, {
                default: function() {
                    return u
                },
                getImageProps: function() {
                    return o
                }
            });
            let n = r(8463),
                i = r(9846),
                l = r(2422),
                a = n._(r(6158));

            function o(e) {
                let {
                    props: t
                } = (0, i.getImgProps)(e, {
                    defaultLoader: a.default,
                    imgConf: {
                        deviceSizes: [640, 750, 828, 1080, 1200, 1920, 2048, 3840],
                        imageSizes: [16, 32, 48, 64, 96, 128, 256, 384],
                        path: "/_next/image",
                        loader: "default",
                        dangerouslyAllowSVG: !1,
                        unoptimized: !0
                    }
                });
                for (let [e, r] of Object.entries(t)) void 0 === r && delete t[e];
                return {
                    props: t
                }
            }
            let u = l.Image
        },
        7814: (e, t, r) => {
            r.d(t, {
                A: () => n
            });
            let n = (0, r(3572).A)("Wifi", [
                ["path", {
                    d: "M12 20h.01",
                    key: "zekei9"
                }],
                ["path", {
                    d: "M2 8.82a15 15 0 0 1 20 0",
                    key: "dnpr2z"
                }],
                ["path", {
                    d: "M5 12.859a10 10 0 0 1 14 0",
                    key: "1x1e6c"
                }],
                ["path", {
                    d: "M8.5 16.429a5 5 0 0 1 7 0",
                    key: "1bycff"
                }]
            ])
        },
        8316: (e, t, r) => {
            Object.defineProperty(t, "__esModule", {
                value: !0
            }), Object.defineProperty(t, "RouterContext", {
                enumerable: !0,
                get: function() {
                    return n
                }
            });
            let n = r(8463)._(r(2312)).default.createContext(null)
        },
        8393: (e, t, r) => {
            Object.defineProperty(t, "__esModule", {
                value: !0
            }), Object.defineProperty(t, "ImageConfigContext", {
                enumerable: !0,
                get: function() {
                    return l
                }
            });
            let n = r(8463)._(r(2312)),
                i = r(4331),
                l = n.default.createContext(i.imageConfigDefault)
        },
        8659: (e, t, r) => {
            r.d(t, {
                A: () => n
            });
            let n = (0, r(3572).A)("Monitor", [
                ["rect", {
                    width: "20",
                    height: "14",
                    x: "2",
                    y: "3",
                    rx: "2",
                    key: "48i651"
                }],
                ["line", {
                    x1: "8",
                    x2: "16",
                    y1: "21",
                    y2: "21",
                    key: "1svkeh"
                }],
                ["line", {
                    x1: "12",
                    x2: "12",
                    y1: "17",
                    y2: "21",
                    key: "vw1qmm"
                }]
            ])
        },
        8944: (e, t, r) => {
            Object.defineProperty(t, "__esModule", {
                value: !0
            }), Object.defineProperty(t, "default", {
                enumerable: !0,
                get: function() {
                    return a
                }
            });
            let n = r(2312),
                i = n.useLayoutEffect,
                l = n.useEffect;

            function a(e) {
                let {
                    headManager: t,
                    reduceComponentsToState: r
                } = e;

                function a() {
                    if (t && t.mountedInstances) {
                        let i = n.Children.toArray(Array.from(t.mountedInstances).filter(Boolean));
                        t.updateHead(r(i, e))
                    }
                }
                return i(() => {
                    var r;
                    return null == t || null == (r = t.mountedInstances) || r.add(e.children), () => {
                        var r;
                        null == t || null == (r = t.mountedInstances) || r.delete(e.children)
                    }
                }), i(() => (t && (t._pendingUpdate = a), () => {
                    t && (t._pendingUpdate = a)
                })), l(() => (t && t._pendingUpdate && (t._pendingUpdate(), t._pendingUpdate = null), () => {
                    t && t._pendingUpdate && (t._pendingUpdate(), t._pendingUpdate = null)
                })), null
            }
        },
        9519: (e, t, r) => {
            Object.defineProperty(t, "__esModule", {
                value: !0
            }), ! function(e, t) {
                for (var r in t) Object.defineProperty(e, r, {
                    enumerable: !0,
                    get: t[r]
                })
            }(t, {
                default: function() {
                    return g
                },
                defaultHead: function() {
                    return c
                }
            });
            let n = r(8463),
                i = r(2780),
                l = r(2404),
                a = i._(r(2312)),
                o = n._(r(8944)),
                u = r(1807),
                d = r(4935),
                s = r(2231);

            function c(e) {
                void 0 === e && (e = !1);
                let t = [(0, l.jsx)("meta", {
                    charSet: "utf-8"
                }, "charset")];
                return e || t.push((0, l.jsx)("meta", {
                    name: "viewport",
                    content: "width=device-width"
                }, "viewport")), t
            }

            function f(e, t) {
                return "string" == typeof t || "number" == typeof t ? e : t.type === a.default.Fragment ? e.concat(a.default.Children.toArray(t.props.children).reduce((e, t) => "string" == typeof t || "number" == typeof t ? e : e.concat(t), [])) : e.concat(t)
            }
            r(9095);
            let p = ["name", "httpEquiv", "charSet", "itemProp"];

            function m(e, t) {
                let {
                    inAmpMode: r
                } = t;
                return e.reduce(f, []).reverse().concat(c(r).reverse()).filter(function() {
                    let e = new Set,
                        t = new Set,
                        r = new Set,
                        n = {};
                    return i => {
                        let l = !0,
                            a = !1;
                        if (i.key && "number" != typeof i.key && i.key.indexOf("$") > 0) {
                            a = !0;
                            let t = i.key.slice(i.key.indexOf("$") + 1);
                            e.has(t) ? l = !1 : e.add(t)
                        }
                        switch (i.type) {
                            case "title":
                            case "base":
                                t.has(i.type) ? l = !1 : t.add(i.type);
                                break;
                            case "meta":
                                for (let e = 0, t = p.length; e < t; e++) {
                                    let t = p[e];
                                    if (i.props.hasOwnProperty(t))
                                        if ("charSet" === t) r.has(t) ? l = !1 : r.add(t);
                                        else {
                                            let e = i.props[t],
                                                r = n[t] || new Set;
                                            ("name" !== t || !a) && r.has(e) ? l = !1 : (r.add(e), n[t] = r)
                                        }
                                }
                        }
                        return l
                    }
                }()).reverse().map((e, t) => {
                    let r = e.key || t;
                    return a.default.cloneElement(e, {
                        key: r
                    })
                })
            }
            let g = function(e) {
                let {
                    children: t
                } = e, r = (0, a.useContext)(u.AmpStateContext), n = (0, a.useContext)(d.HeadManagerContext);
                return (0, l.jsx)(o.default, {
                    reduceComponentsToState: m,
                    headManager: n,
                    inAmpMode: (0, s.isInAmpMode)(r),
                    children: t
                })
            };
            ("function" == typeof t.default || "object" == typeof t.default && null !== t.default) && void 0 === t.default.__esModule && (Object.defineProperty(t.default, "__esModule", {
                value: !0
            }), Object.assign(t.default, t), e.exports = t.default)
        },
        9561: (e, t, r) => {
            r.d(t, {
                default: () => i.a
            });
            var n = r(7214),
                i = r.n(n)
        },
        9846: (e, t, r) => {
            Object.defineProperty(t, "__esModule", {
                value: !0
            }), Object.defineProperty(t, "getImgProps", {
                enumerable: !0,
                get: function() {
                    return u
                }
            }), r(9095);
            let n = r(319),
                i = r(4331),
                l = ["-moz-initial", "fill", "none", "scale-down", void 0];

            function a(e) {
                return void 0 !== e.default
            }

            function o(e) {
                return void 0 === e ? e : "number" == typeof e ? Number.isFinite(e) ? e : NaN : "string" == typeof e && /^[0-9]+$/.test(e) ? parseInt(e, 10) : NaN
            }

            function u(e, t) {
                var r, u;
                let d, s, c, {
                        src: f,
                        sizes: p,
                        unoptimized: m = !1,
                        priority: g = !1,
                        loading: h,
                        className: y,
                        quality: v,
                        width: b,
                        height: _,
                        fill: w = !1,
                        style: x,
                        overrideSrc: j,
                        onLoad: O,
                        onLoadingComplete: P,
                        placeholder: S = "empty",
                        blurDataURL: C,
                        fetchPriority: M,
                        decoding: E = "async",
                        layout: k,
                        objectFit: z,
                        objectPosition: R,
                        lazyBoundary: A,
                        lazyRoot: I,
                        ...D
                    } = e,
                    {
                        imgConf: N,
                        showAltText: T,
                        blurComplete: L,
                        defaultLoader: F
                    } = t,
                    U = N || i.imageConfigDefault;
                if ("allSizes" in U) d = U;
                else {
                    let e = [...U.deviceSizes, ...U.imageSizes].sort((e, t) => e - t),
                        t = U.deviceSizes.sort((e, t) => e - t),
                        n = null == (r = U.qualities) ? void 0 : r.sort((e, t) => e - t);
                    d = { ...U,
                        allSizes: e,
                        deviceSizes: t,
                        qualities: n
                    }
                }
                if (void 0 === F) throw Object.defineProperty(Error("images.loaderFile detected but the file is missing default export.\nRead more: https://nextjs.org/docs/messages/invalid-images-config"), "__NEXT_ERROR_CODE", {
                    value: "E163",
                    enumerable: !1,
                    configurable: !0
                });
                let q = D.loader || F;
                delete D.loader, delete D.srcSet;
                let G = "__next_img_default" in q;
                if (G) {
                    if ("custom" === d.loader) throw Object.defineProperty(Error('Image with src "' + f + '" is missing "loader" prop.\nRead more: https://nextjs.org/docs/messages/next-image-missing-loader'), "__NEXT_ERROR_CODE", {
                        value: "E252",
                        enumerable: !1,
                        configurable: !0
                    })
                } else {
                    let e = q;
                    q = t => {
                        let {
                            config: r,
                            ...n
                        } = t;
                        return e(n)
                    }
                }
                if (k) {
                    "fill" === k && (w = !0);
                    let e = {
                        intrinsic: {
                            maxWidth: "100%",
                            height: "auto"
                        },
                        responsive: {
                            width: "100%",
                            height: "auto"
                        }
                    }[k];
                    e && (x = { ...x,
                        ...e
                    });
                    let t = {
                        responsive: "100vw",
                        fill: "100vw"
                    }[k];
                    t && !p && (p = t)
                }
                let V = "",
                    B = o(b),
                    W = o(_);
                if ((u = f) && "object" == typeof u && (a(u) || void 0 !== u.src)) {
                    let e = a(f) ? f.default : f;
                    if (!e.src) throw Object.defineProperty(Error("An object should only be passed to the image component src parameter if it comes from a static image import. It must include src. Received " + JSON.stringify(e)), "__NEXT_ERROR_CODE", {
                        value: "E460",
                        enumerable: !1,
                        configurable: !0
                    });
                    if (!e.height || !e.width) throw Object.defineProperty(Error("An object should only be passed to the image component src parameter if it comes from a static image import. It must include height and width. Received " + JSON.stringify(e)), "__NEXT_ERROR_CODE", {
                        value: "E48",
                        enumerable: !1,
                        configurable: !0
                    });
                    if (s = e.blurWidth, c = e.blurHeight, C = C || e.blurDataURL, V = e.src, !w)
                        if (B || W) {
                            if (B && !W) {
                                let t = B / e.width;
                                W = Math.round(e.height * t)
                            } else if (!B && W) {
                                let t = W / e.height;
                                B = Math.round(e.width * t)
                            }
                        } else B = e.width, W = e.height
                }
                let H = !g && ("lazy" === h || void 0 === h);
                (!(f = "string" == typeof f ? f : V) || f.startsWith("data:") || f.startsWith("blob:")) && (m = !0, H = !1), d.unoptimized && (m = !0), G && !d.dangerouslyAllowSVG && f.split("?", 1)[0].endsWith(".svg") && (m = !0);
                let X = o(v),
                    $ = Object.assign(w ? {
                        position: "absolute",
                        height: "100%",
                        width: "100%",
                        left: 0,
                        top: 0,
                        right: 0,
                        bottom: 0,
                        objectFit: z,
                        objectPosition: R
                    } : {}, T ? {} : {
                        color: "transparent"
                    }, x),
                    J = L || "empty" === S ? null : "blur" === S ? 'url("data:image/svg+xml;charset=utf-8,' + (0, n.getImageBlurSvg)({
                        widthInt: B,
                        heightInt: W,
                        blurWidth: s,
                        blurHeight: c,
                        blurDataURL: C || "",
                        objectFit: $.objectFit
                    }) + '")' : 'url("' + S + '")',
                    Y = l.includes($.objectFit) ? "fill" === $.objectFit ? "100% 100%" : "cover" : $.objectFit,
                    K = J ? {
                        backgroundSize: Y,
                        backgroundPosition: $.objectPosition || "50% 50%",
                        backgroundRepeat: "no-repeat",
                        backgroundImage: J
                    } : {},
                    Q = function(e) {
                        let {
                            config: t,
                            src: r,
                            unoptimized: n,
                            width: i,
                            quality: l,
                            sizes: a,
                            loader: o
                        } = e;
                        if (n) return {
                            src: r,
                            srcSet: void 0,
                            sizes: void 0
                        };
                        let {
                            widths: u,
                            kind: d
                        } = function(e, t, r) {
                            let {
                                deviceSizes: n,
                                allSizes: i
                            } = e;
                            if (r) {
                                let e = /(^|\s)(1?\d?\d)vw/g,
                                    t = [];
                                for (let n; n = e.exec(r);) t.push(parseInt(n[2]));
                                if (t.length) {
                                    let e = .01 * Math.min(...t);
                                    return {
                                        widths: i.filter(t => t >= n[0] * e),
                                        kind: "w"
                                    }
                                }
                                return {
                                    widths: i,
                                    kind: "w"
                                }
                            }
                            return "number" != typeof t ? {
                                widths: n,
                                kind: "w"
                            } : {
                                widths: [...new Set([t, 2 * t].map(e => i.find(t => t >= e) || i[i.length - 1]))],
                                kind: "x"
                            }
                        }(t, i, a), s = u.length - 1;
                        return {
                            sizes: a || "w" !== d ? a : "100vw",
                            srcSet: u.map((e, n) => o({
                                config: t,
                                src: r,
                                quality: l,
                                width: e
                            }) + " " + ("w" === d ? e : n + 1) + d).join(", "),
                            src: o({
                                config: t,
                                src: r,
                                quality: l,
                                width: u[s]
                            })
                        }
                    }({
                        config: d,
                        src: f,
                        unoptimized: m,
                        width: B,
                        quality: X,
                        sizes: p,
                        loader: q
                    });
                return {
                    props: { ...D,
                        loading: H ? "lazy" : h,
                        fetchPriority: M,
                        width: B,
                        height: W,
                        decoding: E,
                        className: y,
                        style: { ...$,
                            ...K
                        },
                        sizes: Q.sizes,
                        srcSet: Q.srcSet,
                        src: j || Q.src
                    },
                    meta: {
                        unoptimized: m,
                        priority: g,
                        placeholder: S,
                        fill: w
                    }
                }
            }
        }
    }
]);