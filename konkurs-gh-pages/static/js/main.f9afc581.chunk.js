(window.webpackJsonpkonkurs = window.webpackJsonpkonkurs || []).push([
    [0], {
        115: function(e, t, n) {
            e.exports = n(223)
        },
        193: function(e, t, n) {
            e.exports = n.p + "static/media/button.1e0fc11f.png"
        },
        194: function(e, t, n) {
            e.exports = n.p + "static/media/bg.bd011f2d.png"
        },
        196: function(e, t, n) {},
        223: function(e, t, n) {
            "use strict";
            n.r(t);
            n(116), n(142), n(144), n(145), n(147), n(148), n(149), n(150), n(151), n(152), n(153), n(154), n(156), n(157), n(158), n(159), n(160), n(161), n(162), n(163), n(164), n(165), n(167), n(168), n(169), n(170), n(171), n(172), n(173), n(174), n(175), n(176), n(177), n(178), n(179), n(180), n(181), n(182), n(183), n(184);
            var a = n(0),
                l = n.n(a),
                r = n(73),
                c = n.n(r),
                o = n(37),
                i = n.n(o),
                u = n(48),
                m = n(77),
                p = n.n(m),
                s = n(78),
                d = n.n(s),
                b = n(45),
                E = n.n(b),
                f = n(109),
                k = n.n(f),
                g = n(110),
                y = n.n(g),
                _ = n(46),
                h = n.n(_),
                v = n(47),
                x = n.n(v),
                j = n(41),
                w = n.n(j),
                C = n(76),
                O = n.n(C),
                S = n(75),
                z = n.n(S),
                A = n(113),
                K = n.n(A),
                V = n(54),
                W = n.n(V),
                J = n(112),
                B = n.n(J),
                I = n(114),
                M = n.n(I),
                F = n(111),
                G = n.n(F),
                H = (n(192), n(193), n(194), n(106)),
                L = n.n(H),
                P = n(107),
                Q = n.n(P),
                T = n(108),
                X = n.n(T),
                q = (n(196), n(74)),
                D = n.n(q),
                N = function() {
                    var e = Object(a.useState)(null),
                        t = Object(u.a)(e, 2),
                        n = t[0],
                        r = t[1],
                        c = Object(a.useState)("app"),
                        o = Object(u.a)(c, 2),
                        m = o[0],
                        s = o[1],
                        b = Object(a.useState)(!0),
                        f = Object(u.a)(b, 2),
                        g = f[0],
                        _ = f[1],
                        v = Object(a.useState)(null),
                        j = Object(u.a)(v, 2),
                        C = j[0],
                        S = j[1],
                        A = l.a.createElement(k.a, {
                            activeModal: n
                        }, l.a.createElement(y.a, {
                            id: "first",
                            icon: l.a.createElement(X.a, {
                                style: {
                                    color: "var(--destructive)"
                                }
                            }),
                            onClose: function() {
                                return r(null)
                            },
                            header: "\u0410\u0442\u0435\u043d\u0448\u043d!",
                            actions: [{
                                title: "\u041f\u043e\u043d\u044f\u043b(\u0430)",
                                mode: "destructive",
                                action: function() {
                                    i.a.send("VKWebAppAllowMessagesFromGroup", {
                                        group_id: 188761943
                                    }).then((function() {
                                        i.a.send("VKWebAppShowStoryBox", {
                                            background_type: "image",
                                            url: "https://i.ibb.co/Qp7gJ5b/bg.png",
                                            locked: !0,
                                            stickers: [{
                                                sticker_type: "renderable",
                                                sticker: {
                                                    content_type: "image",
                                                    url: "https://i.ibb.co/j5zKFrX/button.png",
                                                    clickable_zones: [{
                                                        action_type: "link",
                                                        action: {
                                                            link: "https://vk.com/enjoystick1",
                                                            tooltip_text_key: "tooltip_open_link"
                                                        },
                                                        clickable_area: [{
                                                            x: 0,
                                                            y: 0
                                                        }, {
                                                            x: 584,
                                                            y: 0
                                                        }, {
                                                            x: 584,
                                                            y: 130
                                                        }, {
                                                            x: 0,
                                                            y: 130
                                                        }]
                                                    }]
                                                }
                                            }]
                                        }).then((function() {
                                            i.a.send("VKWebAppSendPayload", {
                                                group_id: 188761943,
                                                payload: {
                                                    foo: "bar"
                                                }
                                            }), r(null), S(l.a.createElement(G.a, {
                                                layout: "vertical",
                                                onClose: S(null),
                                                before: l.a.createElement(O.a, {
                                                    size: 24,
                                                    style: {
                                                        backgroundColor: "var(--accent)"
                                                    }
                                                }, l.a.createElement(D.a, {
                                                    fill: "#fff",
                                                    width: 14,
                                                    height: 14
                                                }))
                                            }, "\u0418\u0441\u0442\u043e\u0440\u0438\u044f \u043e\u043f\u0443\u0431\u043b\u0438\u043a\u043e\u0432\u0430\u043d\u0430."))
                                        })).catch((function() {
                                            s("error"), r(null)
                                        }))
                                    }))
                                }
                            }]
                        }, l.a.createElement(w.a, null, l.a.createElement("td", {
                            dangerouslySetInnerHTML: {
                                __html: "\u0421\u0435\u0439\u0447\u0430\u0441 \u0442\u0435\u0431\u0435 \u043d\u0443\u0436\u043d\u043e \u0431\u0443\u0434\u0435\u0442 \u043e\u043f\u0443\u0431\u043b\u0438\u043a\u043e\u0432\u0430\u0442\u044c \u0441\u0435\u0431\u0435 \u0438\u0441\u0442\u043e\u0440\u0438\u044e \u0441 \u0440\u0435\u043f\u043e\u0441\u0442\u043e\u043c \u0433\u0440\u0443\u043f\u043f\u044b, \u043f\u043e\u0441\u043b\u0435 \u0447\u0435\u0433\u043e \u0442\u044b \u043f\u043e\u043b\u0443\u0447\u0438\u0448\u044c \u0441\u043e\u043e\u0431\u0449\u0435\u043d\u0438\u0435 \u0441 \u0440\u0435\u0437\u0443\u043b\u044c\u0442\u0430\u0442\u043e\u043c \u0432 \u041b\u0421.</br></br>2 \u043c\u0430\u0440\u0442\u0430 \u0432 12:00 \u041c\u0421\u041a \u043c\u044b \u043c\u0435\u0442\u043e\u0434\u043e\u043c \u0440\u0430\u043d\u0434\u043e\u043c\u0430 \u0432\u044b\u0431\u0435\u0440\u0435\u043c \u043e\u0434\u043d\u043e\u0433\u043e \u043f\u043e\u0431\u0435\u0434\u0438\u0442\u0435\u043b\u044f.</br><b>\u041d\u0435 \u0437\u0430\u0431\u044b\u0432\u0430\u0439:</b> \u043c\u044b \u043f\u0440\u043e\u0432\u0435\u0440\u044f\u0435\u043c \u0432\u0441\u0435 \u0443\u0441\u043b\u043e\u0432\u0438\u044f \ud83d\ude0f"
                            }
                        }))));
                    return l.a.createElement(z.a, {
                        activePanel: m,
                        modal: A
                    }, l.a.createElement(p.a, {
                        id: "app"
                    }, l.a.createElement(d.a, null, "\u041a\u043e\u043d\u043a\u0443\u0440\u0441"), l.a.createElement(w.a, null, l.a.createElement(E.a, {
                        before: l.a.createElement(Q.a, null),
                        size: "xl",
                        onClick: function() {
                            return r("first")
                        },
                        mode: "secondary"
                    }, "\u0423\u0447\u0430\u0441\u0442\u0432\u043e\u0432\u0430\u0442\u044c")), !0 === g ? l.a.createElement(w.a, null, l.a.createElement(B.a, {
                        mode: "shadow"
                    }, l.a.createElement(h.a, null, l.a.createElement(w.a, null, "\u041d\u0435 \u0437\u0430\u0431\u044b\u0432\u0430\u0439, \u0447\u0442\u043e\u0431\u044b \u0443\u0447\u0430\u0441\u0442\u0432\u043e\u0432\u0430\u0442\u044c \u0432 \u043a\u043e\u043d\u043a\u0443\u0440\u0441\u0435, \u043d\u0443\u0436\u043d\u043e \u0431\u044b\u0442\u044c \u043f\u043e\u0434\u043f\u0438\u0441\u0430\u043d\u043d\u044b\u043c \u043d\u0430 \u0441\u043e\u043e\u0431\u0449\u0435\u0441\u0442\u0432\u043e \u2705")), l.a.createElement(h.a, null, l.a.createElement(x.a, {
                        bottomContent: l.a.createElement(E.a, {
                            onClick: function() {
                                i.a.send("VKWebAppJoinGroup", {
                                    group_id: 188761943
                                }).then((function() {
                                    return _(!1)
                                }))
                            }
                        }, "\u041f\u043e\u0434\u043f\u0438\u0441\u0430\u0442\u044c\u0441\u044f"),
                        before: l.a.createElement(O.a, {
                            src: "https://sun9-49.userapi.com/c858020/v858020958/16d0b0/Z0Cs-Fa2-dg.jpg",
                            size: 80
                        }),
                        size: "l"
                    }, "ENJOY STICK")))) : null, C), l.a.createElement(p.a, {
                        id: "error"
                    }, l.a.createElement(d.a, {
                        left: l.a.createElement(K.a, {
                            onClick: function() {
                                return s("app")
                            }
                        })
                    }, l.a.createElement("font", {
                        color: "red"
                    }, "\u041e\u0448\u0438\u0431\u043a\u0430")), l.a.createElement(h.a, null, l.a.createElement(w.a, null, "\u041f\u0440\u043e\u0438\u0437\u043e\u0448\u043b\u0430 \u043e\u0448\u0438\u0431\u043a\u0430! \u0412\u043e\u0437\u043c\u043e\u0436\u043d\u044b\u0435 \u043f\u0440\u0438\u0447\u0438\u043d\u044b \u043e\u0448\u0438\u0431\u043a\u0438:")), l.a.createElement(h.a, null, l.a.createElement(M.a, null, l.a.createElement(x.a, {
                        indicator: l.a.createElement(W.a, {
                            mode: "prominent"
                        }, "1")
                    }, "\u0412\u044b \u0432\u043e\u0448\u043b\u0438 \u0447\u0435\u0440\u0435\u0437 \u0432\u0435\u0431 \u0432\u0435\u0440\u0441\u0438\u044e."), l.a.createElement(x.a, {
                        multiline: !0,
                        indicator: l.a.createElement(W.a, {
                            mode: "prominent"
                        }, "2")
                    }, "\u0412\u044b \u0438\u0441\u043f\u043e\u043b\u044c\u0437\u0443\u0435\u0442\u0435 \u043d\u0435\u043e\u0444\u0438\u0446\u0438\u0430\u043b\u044c\u043d\u044b\u0439 \u043a\u043b\u0438\u0435\u043d\u0442."), l.a.createElement(x.a, {
                        indicator: l.a.createElement(W.a, {
                            mode: "prominent"
                        }, "3")
                    }, "\u0412\u044b \u043e\u0442\u043c\u0435\u043d\u0438\u043b\u0438 \u043e\u0442\u043f\u0440\u0430\u0432\u043a\u0443 \u0438\u0441\u0442\u043e\u0440\u0438\u0438.")), l.a.createElement(w.a, null, l.a.createElement(E.a, {
                        before: l.a.createElement(L.a, null),
                        size: "xl",
                        onClick: function() {
                            s("app"), r("first")
                        }
                    }, "\u0412\u0435\u0440\u043d\u0443\u0442\u044c\u0441\u044f")))))
                };
            i.a.send("VKWebAppInit", {}), c.a.render(l.a.createElement(N, null), document.getElementById("root"))
        }
    },
    [
        [115, 1, 2]
    ]
]);
//# sourceMappingURL=main.f9afc581.chunk.js.map
