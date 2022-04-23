(this["webpackJsonpdevias-material-kit-pro"] = this["webpackJsonpdevias-material-kit-pro"] || []).push([
    [15], {
        103: function(e, a, t) {
            "use strict";
            a.a = function(e, a) { if (!a) return "/images/avatar.png"; var t = a.match("(testaeroconsultant|prodaeroconsultant)"); return t ? 2 === t.length ? a : void 0 : "https://aeroconsultant.fr".toString() + a }
        },
        121: function(e, a, t) {
            "use strict";
            var n = t(31),
                r = t.n(n),
                i = t(43),
                o = t(44),
                c = { headers: Object(i.a)() };
            a.a = function(e, a, t, n, i) {
                var l = "https://aeroconsultant.fr".toString() + "/consultant/" + e + "/profile_update.json";
                r.a.post(l, { consultant: a }, c).then((function(a) {
                    if (i) {
                        var t = "https://aeroconsultant.fr".toString() + "/consultant/" + e + "/profile.json";
                        r.a.get(t, c).then((function(e) { n && window.location.reload() }))
                    } else n && window.location.reload()
                })).catch((function(e) { return 401 === e.response.status ? function(e) { return Object(o.a)(e) }(t) : t.history.push("/errors/error-500") }))
            }
        },
        17: function(e, a, t) {
            "use strict";
            t.d(a, "a", (function() { return x })), t.d(a, "b", (function() { return z })), t.d(a, "c", (function() { return pe })), t.d(a, "x", (function() { return ve })), t.d(a, "d", (function() { return Se })), t.d(a, "e", (function() { return _e })), t.d(a, "f", (function() { return Pe })), t.d(a, "g", (function() { return Me })), t.d(a, "h", (function() { return ea })), t.d(a, "i", (function() { return xa })), t.d(a, "j", (function() { return wa })), t.d(a, "k", (function() { return Ia })), t.d(a, "l", (function() { return Va })), t.d(a, "m", (function() { return Qa })), t.d(a, "n", (function() { return ut })), t.d(a, "o", (function() { return ft })), t.d(a, "p", (function() { return yt })), t.d(a, "q", (function() { return Ct })), t.d(a, "r", (function() { return sn })), t.d(a, "s", (function() { return mn })), t.d(a, "t", (function() { return Dn })), t.d(a, "u", (function() { return Mn })), t.d(a, "v", (function() { return Gn })), t.d(a, "w", (function() { return Kn }));
            var n = t(12),
                r = t(9),
                i = t(0),
                o = t.n(i),
                c = t(87),
                l = t(2),
                s = t(554),
                m = t(1010),
                u = t(1011),
                d = t(143),
                p = t(550),
                g = t(1012),
                h = t(968),
                v = t(1013),
                b = t(128),
                f = t.n(b),
                E = t(174),
                y = t.n(E),
                j = t(175),
                O = t.n(j),
                N = Object(s.a)((function(e) { return { root: {}, content: { display: "flex", alignItems: "center" }, paper: { flexGrow: 1, padding: e.spacing(.5, 2) }, input: { width: "100%" }, divider: { width: 1, height: 24 }, fileInput: { display: "none" } } })),
                x = function(e) {
                    var a = e.className,
                        t = Object(r.a)(e, ["className"]),
                        s = N(),
                        b = Object(i.useRef)(null),
                        E = Object(i.useState)(""),
                        j = Object(n.a)(E, 2),
                        x = j[0],
                        k = j[1],
                        w = Object(c.d)((function(e) { return e.session })),
                        C = function() { b.current.click() };
                    return o.a.createElement(m.a, Object.assign({}, t, { className: Object(l.a)(s.root, a) }), o.a.createElement(u.a, { className: s.content }, o.a.createElement(d.a, { className: s.paper, elevation: 1 }, o.a.createElement(p.a, { className: s.input, disableUnderline: !0, onChange: function(e) { e.persist(), k(e.target.value) }, placeholder: "What's on your mind, ".concat(w.user.first_name) })), o.a.createElement(g.a, { title: "Send" }, o.a.createElement(h.a, { color: x.length > 0 ? "primary" : "default" }, o.a.createElement(f.a, null))), o.a.createElement(v.a, { className: s.divider }), o.a.createElement(g.a, { title: "Attach image" }, o.a.createElement(h.a, { edge: "end", onClick: C }, o.a.createElement(y.a, null))), o.a.createElement(g.a, { title: "Attach file" }, o.a.createElement(h.a, { edge: "end", onClick: C }, o.a.createElement(O.a, null))), o.a.createElement("input", { className: s.fileInput, ref: b, type: "file" })))
                },
                k = t(4),
                w = t(82),
                C = t(313),
                S = t.n(C),
                A = t(506),
                _ = t.n(A),
                I = t(505),
                T = t.n(I),
                B = t(289),
                P = t.n(B),
                D = t(504),
                F = t.n(D),
                R = Object(s.a)((function(e) { return { root: { display: "flex", alignItems: "center", padding: "6px 16px", borderRadius: e.shape.borderRadius }, default: { backgroundColor: e.palette.primary.main, color: e.palette.primary.contrastText }, success: { backgroundColor: k.a.green[600], color: e.palette.white }, info: { backgroundColor: k.a.lightBlue[600], color: e.palette.white }, warning: { backgroundColor: k.a.orange[900], color: e.palette.white }, error: { backgroundColor: e.palette.error.main, color: e.palette.error.contrastText }, message: { flexGrow: 1, display: "flex", alignItems: "center", padding: "8px 0" }, icon: { fontSize: 20, marginRight: e.spacing(1) }, action: { display: "flex", alignItems: "center", marginLeft: "auto", paddingLeft: 16, marginRight: -8 } } })),
                M = { default: o.a.createElement(P.a, null), success: o.a.createElement(S.a, null), info: o.a.createElement(P.a, null), warning: o.a.createElement(F.a, null), error: o.a.createElement(T.a, null) },
                L = Object(i.forwardRef)((function(e, a) {
                    var t = e.className,
                        n = e.icon,
                        i = e.variant,
                        c = e.message,
                        s = e.onClose,
                        m = Object(r.a)(e, ["className", "icon", "variant", "message", "onClose"]),
                        u = R();
                    return o.a.createElement(d.a, Object.assign({}, m, { className: Object(l.a)(u.root, u[i], t), component: w.a, elevation: 1, ref: a, variant: "h6" }), o.a.createElement("span", { className: u.icon }, n || M[i]), o.a.createElement("div", { className: u.message }, c), s && o.a.createElement(h.a, { className: u.action, color: "inherit", key: "close", onClick: s }, o.a.createElement(_.a, null)))
                }));
            L.displayName = "Alert", L.defaultProps = { variant: "default" };
            var z = L,
                G = t(42),
                U = function(e) {
                    var a = e.roles,
                        t = e.children,
                        n = Object(c.d)((function(e) { return e.session })),
                        r = Object(G.a)();
                    return Object(i.useEffect)((function() { n.loggedIn && n.user ? a.includes(n.user.role) || r.history.push("/errors/error-401") : r.history.push("/auth/login") }), [r]), o.a.createElement(i.Fragment, null, t)
                };
            U.defaultProps = { roles: [] };
            var Y = t(159),
                W = t.n(Y),
                H = t(1014),
                q = Object(H.a)((function() { return { root: {} } })),
                J = function(e) {
                    var a = e.async,
                        t = e.source,
                        n = e.language,
                        c = e.className,
                        s = e.component,
                        m = Object(r.a)(e, ["async", "source", "language", "className", "component"]),
                        u = Object(i.useRef)(null),
                        d = q();
                    return Object(i.useEffect)((function() { Y.highlightElement(u.current, a) })), o.a.createElement("pre", { className: "language-".concat(n) }, o.a.createElement(s, Object.assign({}, m, { className: Object(l.a)(d.root, c), ref: u }), function(e) {
                        var a = e.split("\n");
                        a[0].trim() || a.shift(), a[a.length - 1].trim() || a.pop();
                        var t = a[0].search(/\S|$/),
                            n = "";
                        return a.forEach((function(e, r) { n += e.substr(t, e.length), r !== a.length - 1 && (n += "\n") })), n
                    }(t)))
                };
            J.defaultProps = { component: "code" };
            t(290);
            var K = t(1015),
                V = t(969),
                Z = (Object(s.a)((function(e) { return { root: { maxWidth: 420, position: "fixed", bottom: 0, right: 0, margin: e.spacing(3), outline: "none", zIndex: 2e3 }, media: { padding: e.spacing(1, 2), height: 180, textAlign: "center", "& > img": { height: "100%", width: "auto" } }, content: { padding: e.spacing(1, 2) }, actions: { display: "flex", justifyContent: "flex-end", padding: e.spacing(1, 2, 2, 1) } } })), t(24)),
                $ = t(111),
                X = t(5),
                Q = t.n(X),
                ee = t(549),
                ae = t(46),
                te = t.n(ae),
                ne = t(970),
                re = t(971),
                ie = t(1016),
                oe = t(1017),
                ce = t(216),
                le = t.n(ce),
                se = t(169),
                me = t.n(se),
                ue = t(393),
                de = Object(s.a)((function(e) { return { root: {}, dropZone: { border: "1px dashed ".concat(e.palette.divider), padding: e.spacing(6), outline: "none", display: "flex", justifyContent: "center", flexWrap: "wrap", alignItems: "center", "&:hover": { backgroundColor: k.a.grey[50], opacity: .5, cursor: "pointer" } }, dragActive: { backgroundColor: k.a.grey[50], opacity: .5 }, image: { width: 130 }, info: { marginTop: e.spacing(1) }, list: { maxHeight: 320 }, actions: { marginTop: e.spacing(2), display: "flex", justifyContent: "flex-end", "& > * + *": { marginLeft: e.spacing(2) } } } })),
                pe = function(e) {
                    var a, t = e.className,
                        c = Object(r.a)(e, ["className"]),
                        s = de(),
                        m = Object(i.useState)([]),
                        u = Object(n.a)(m, 2),
                        d = u[0],
                        p = u[1],
                        v = Object(i.useCallback)((function(e) { p((function(a) { return Object($.a)(a).concat(e) })) }), []),
                        b = Object(ee.a)({ onDrop: v }),
                        f = b.getRootProps,
                        E = b.getInputProps,
                        y = b.isDragActive;
                    return o.a.createElement("div", Object.assign({}, c, { className: Object(l.a)(s.root, t) }), o.a.createElement("div", Object.assign({ className: Object(l.a)((a = {}, Object(Z.a)(a, s.dropZone, !0), Object(Z.a)(a, s.dragActive, y), a)) }, f()), o.a.createElement("input", E()), o.a.createElement("div", null, o.a.createElement("img", { alt: "Select file", className: s.image, src: "/images/undraw_add_file2_gvbb.svg" })), o.a.createElement("div", null, o.a.createElement(w.a, { gutterBottom: !0, variant: "h3" }, "Select files"), o.a.createElement(w.a, { className: s.info, color: "textSecondary", variant: "body1" }, "Drop files here or click ", o.a.createElement(K.a, { underline: "always" }, "browse"), " ", "thorough your machine"))), d.length > 0 && o.a.createElement(i.Fragment, null, o.a.createElement(te.a, { options: { suppressScrollX: !0 } }, o.a.createElement(ne.a, { className: s.list }, d.map((function(e, a) { return o.a.createElement(re.a, { divider: a < d.length - 1, key: Q()() }, o.a.createElement(ie.a, null, o.a.createElement(le.a, null)), o.a.createElement(oe.a, { primary: e.name, primaryTypographyProps: { variant: "h5" }, secondary: Object(ue.a)(e.size) }), o.a.createElement(g.a, { title: "More options" }, o.a.createElement(h.a, { edge: "end" }, o.a.createElement(me.a, null)))) })))), o.a.createElement("div", { className: s.actions }, o.a.createElement(V.a, { onClick: function() { p([]) }, size: "small" }, "Remove all"), o.a.createElement(V.a, { color: "secondary", size: "small", variant: "contained" }, "Upload files"))))
                },
                ge = t(508),
                he = (t(579), t(43)),
                ve = function(e) {
                    var a = e.profile,
                        t = e.name,
                        n = e.labelIdle,
                        r = e.onprocessfile,
                        i = "https://aeroconsultant.fr".toString() + "/consultant/" + a.id + "/profile_update.json";
                    return o.a.createElement(ge.FilePond, { name: t, server: { url: i, headers: Object(he.a)() }, labelIdle: n, onprocessfile: r })
                },
                be = t(509),
                fe = t(1019),
                Ee = t(120),
                ye = t.n(Ee),
                je = t(511),
                Oe = t.n(je),
                Ne = t(510),
                xe = t.n(Ne),
                ke = t(187),
                we = t.n(ke),
                Ce = Object(s.a)((function() { return {} })),
                Se = Object(i.memo)((function(e) {
                    var a = Ce(),
                        t = Object(i.useRef)(null),
                        r = Object(i.useState)(!1),
                        c = Object(n.a)(r, 2),
                        l = c[0],
                        s = c[1];
                    return o.a.createElement(i.Fragment, null, o.a.createElement(g.a, { title: "More options" }, o.a.createElement(h.a, Object.assign({}, e, { onClick: function() { s(!0) }, ref: t, size: "small" }), o.a.createElement(me.a, null))), o.a.createElement(be.a, { anchorEl: t.current, anchorOrigin: { vertical: "top", horizontal: "left" }, classes: { paper: a.menu }, onClose: function() { s(!1) }, open: l, transformOrigin: { vertical: "top", horizontal: "left" } }, o.a.createElement(fe.a, null, o.a.createElement(ie.a, null, o.a.createElement(ye.a, null)), o.a.createElement(oe.a, { primary: "Import" })), o.a.createElement(fe.a, null, o.a.createElement(ie.a, null, o.a.createElement(le.a, null)), o.a.createElement(oe.a, { primary: "Copy to clipboard" })), o.a.createElement(fe.a, null, o.a.createElement(ie.a, null, o.a.createElement(xe.a, null)), o.a.createElement(oe.a, { primary: "Export as PDF" })), o.a.createElement(fe.a, null, o.a.createElement(ie.a, null, o.a.createElement(Oe.a, null)), o.a.createElement(oe.a, { primary: "Print" })), o.a.createElement(fe.a, null, o.a.createElement(ie.a, null, o.a.createElement(we.a, null)), o.a.createElement(oe.a, { primary: "Achive" }))))
                })),
                Ae = t(218),
                _e = function() { return o.a.createElement(Ae.Helmet, null) },
                Ie = t(13),
                Te = Object(s.a)((function(e) { return { root: { display: "inline-flex", alignItems: "center", justifyContent: "center", flexGrow: 0, flexShrink: 0, borderRadius: e.shape.borderRadius, lineHeight: "10px", fontSize: "10px", height: 20, minWidth: 20, whiteSpace: "nowrap", padding: e.spacing(.5, 1) }, rounded: { borderRadius: 10, padding: e.spacing(.5) } } })),
                Be = function(e) {
                    var a, t = e.className,
                        n = e.variant,
                        i = e.color,
                        c = e.shape,
                        s = e.children,
                        m = e.style,
                        u = Object(r.a)(e, ["className", "variant", "color", "shape", "children", "style"]),
                        d = Te(),
                        p = Object(l.a)((a = {}, Object(Z.a)(a, d.root, !0), Object(Z.a)(a, d.rounded, "rounded" === c), a), t),
                        g = Object(Ie.a)({}, m);
                    return "contained" === n ? (g.backgroundColor = i, g.color = "#FFF") : (g.border = "1px solid ".concat(i), g.color = i), o.a.createElement(w.a, Object.assign({}, u, { className: p, style: g, variant: "overline" }), s)
                };
            Be.defaultProps = { style: {}, color: k.a.grey[600], variant: "contained", shape: "square" };
            var Pe = Be,
                De = t(512),
                Fe = t.n(De),
                Re = Object(s.a)((function(e) { return { root: { "& h1": Object(Ie.a)(Object(Ie.a)({}, e.typography.h1), {}, { marginBottom: e.spacing(1) }), "& h2": Object(Ie.a)(Object(Ie.a)({}, e.typography.h2), {}, { marginBottom: e.spacing(1) }), "& h3": Object(Ie.a)(Object(Ie.a)({}, e.typography.h3), {}, { marginBottom: e.spacing(1) }), "& h4": Object(Ie.a)(Object(Ie.a)({}, e.typography.h4), {}, { marginBottom: e.spacing(1) }), "& h5": Object(Ie.a)(Object(Ie.a)({}, e.typography.h5), {}, { marginBottom: e.spacing(1) }), "& h6": Object(Ie.a)(Object(Ie.a)({}, e.typography.h6), {}, { marginBottom: e.spacing(1) }), "& p": Object(Ie.a)(Object(Ie.a)({}, e.typography.subtitle1), {}, { marginBottom: e.spacing(2) }), "& ul": { marginLeft: e.spacing(3), marginBottom: e.spacing(2) }, "& ol": { marginLeft: e.spacing(3), marginBottom: e.spacing(2) }, "& li": Object(Ie.a)(Object(Ie.a)({}, e.typography.subtitle1), {}, { marginBottom: e.spacing(1) }), "& hr": { marginTop: e.spacing(3), marginBottom: e.spacing(3), backgroundColor: k.a.grey[300], border: 0, height: 1 }, "& a": { color: e.palette.link, "&:hover": { textDecoration: "underline" } } } } })),
                Me = function(e) {
                    var a = e.className,
                        t = Object(r.a)(e, ["className"]),
                        n = Re();
                    return Object(i.useEffect)((function() { W.a.highlightAll() }), []), o.a.createElement("div", { className: Object(l.a)(n.root, a) }, o.a.createElement(Fe.a, t))
                },
                Le = t(30),
                ze = t(18),
                Ge = t(1020),
                Ue = t(164),
                Ye = t.n(Ue),
                We = t(163),
                He = t.n(We),
                qe = Object(i.forwardRef)((function(e, a) { return o.a.createElement("div", { ref: a, style: { flexGrow: 1 } }, o.a.createElement(ze.c, e)) })),
                Je = Object(s.a)((function(e) { return { item: { display: "block", paddingTop: 0, paddingBottom: 0 }, itemLeaf: { display: "flex", paddingTop: 0, paddingBottom: 0 }, button: { color: k.a.blueGrey[800], padding: "10px 8px", justifyContent: "flex-start", textTransform: "none", letterSpacing: 0, width: "100%" }, buttonLeaf: { color: k.a.blueGrey[800], padding: "10px 8px", justifyContent: "flex-start", textTransform: "none", letterSpacing: 0, width: "100%", fontWeight: e.typography.fontWeightRegular, "&.depth-0": { fontWeight: e.typography.fontWeightMedium } }, icon: { color: e.palette.icon, display: "flex", alignItems: "center", marginRight: e.spacing(1) }, expandIcon: { marginLeft: "auto", height: 16, width: 16 }, label: { display: "flex", alignItems: "center", marginLeft: "auto" }, active: { color: e.palette.primary.main, fontWeight: e.typography.fontWeightMedium, "& $icon": { color: e.palette.primary.main } } } })),
                Ke = function(e) {
                    var a = e.title,
                        t = e.href,
                        c = e.depth,
                        s = e.children,
                        m = e.icon,
                        u = e.className,
                        d = e.open,
                        p = e.label,
                        g = Object(r.a)(e, ["title", "href", "depth", "children", "icon", "className", "open", "label"]),
                        h = Je(),
                        v = Object(i.useState)(d),
                        b = Object(n.a)(v, 2),
                        f = b[0],
                        E = b[1],
                        y = 8;
                    c > 0 && (y = 32 + 8 * c);
                    var j = { paddingLeft: y };
                    return s ? o.a.createElement(re.a, Object.assign({}, g, { className: Object(l.a)(h.item, u), disableGutters: !0 }), o.a.createElement(V.a, { className: h.button, onClick: function() { E((function(e) { return !e })) }, style: j }, m && o.a.createElement(m, { className: h.icon }), a, f ? o.a.createElement(He.a, { className: h.expandIcon, color: "inherit" }) : o.a.createElement(Ye.a, { className: h.expandIcon, color: "inherit" })), o.a.createElement(Ge.a, { in: f }, s)) : o.a.createElement(re.a, Object.assign({}, g, { className: Object(l.a)(h.itemLeaf, u), disableGutters: !0 }), o.a.createElement(V.a, { activeClassName: h.active, className: Object(l.a)(h.buttonLeaf, "depth-".concat(c)), component: qe, exact: !0, style: j, to: t }, m && o.a.createElement(m, { className: h.icon }), a, p && o.a.createElement("span", { className: h.label }, o.a.createElement(p, null))))
                };
            Ke.defaultProps = { depth: 0, open: !1 };
            var Ve = Ke,
                Ze = Object(s.a)((function(e) { return { root: { marginBottom: e.spacing(3) } } })),
                $e = function(e) {
                    var a = e.pages,
                        t = Object(r.a)(e, ["pages"]);
                    return o.a.createElement(ne.a, null, a.reduce((function(e, a) { return Xe(Object(Ie.a)({ items: e, page: a }, t)) }), []))
                },
                Xe = function(e) {
                    var a = e.router,
                        t = e.items,
                        n = e.page,
                        r = e.depth;
                    if (n.children) {
                        var i = Object(Le.f)(a.location.pathname, { path: n.href, exact: !1 });
                        t.push(o.a.createElement(Ve, { depth: r, icon: n.icon, key: n.title, label: n.label, open: Boolean(i), title: n.title }, o.a.createElement($e, { depth: r + 1, pages: n.children, router: a })))
                    } else t.push(o.a.createElement(Ve, { depth: r, href: n.href, icon: n.icon, key: n.title, label: n.label, title: n.title }));
                    return t
                },
                Qe = function(e) {
                    var a = e.title,
                        t = e.pages,
                        n = e.className,
                        i = e.component,
                        c = Object(r.a)(e, ["title", "pages", "className", "component"]),
                        s = Ze(),
                        m = Object(G.a)();
                    return o.a.createElement(i, Object.assign({}, c, { className: Object(l.a)(s.root, n) }), a && o.a.createElement(w.a, { variant: "overline" }, a), o.a.createElement($e, { depth: 0, pages: t, router: m }))
                };
            Qe.defaultProps = { component: "nav" };
            var ea = Qe,
                aa = t(972),
                ta = t(1022),
                na = t(1023),
                ra = t(7),
                ia = t.n(ra),
                oa = t(1062),
                ca = t(1021),
                la = t(55),
                sa = t.n(la),
                ma = t(513),
                ua = t.n(ma),
                da = t(219),
                pa = t.n(da),
                ga = t(119),
                ha = t.n(ga),
                va = t(514),
                ba = t.n(va),
                fa = t(62),
                Ea = Object(s.a)((function(e) { return { root: {}, listItem: { "&:hover": { backgroundColor: e.palette.background.default } }, avatarBlue: { backgroundImage: fa.a.blue }, avatarGreen: { backgroundImage: fa.a.green }, avatarOrange: { backgroundImage: fa.a.orange }, avatarIndigo: { backgroundImage: fa.a.indigo }, arrowForwardIcon: { color: e.palette.icon } } })),
                ya = function(e) {
                    var a = e.notifications,
                        t = e.className,
                        n = Object(r.a)(e, ["notifications", "className"]),
                        i = Ea(),
                        c = { order: o.a.createElement(oa.a, { className: i.avatarBlue }, o.a.createElement(ua.a, null)), user: o.a.createElement(oa.a, { className: i.avatarOrange }, o.a.createElement(pa.a, null)), project: o.a.createElement(oa.a, { className: i.avatarGreen }, o.a.createElement(ba.a, null)), feature: o.a.createElement(oa.a, { className: i.avatarIndigo }, o.a.createElement(ha.a, null)) };
                    return o.a.createElement(ne.a, Object.assign({}, n, { className: Object(l.a)(i.root, t), disablePadding: !0 }), a.map((function(e, t) { return o.a.createElement(re.a, { className: i.listItem, component: ze.b, divider: t < a.length - 1, key: e.id, to: "#" }, o.a.createElement(ca.a, null, c[e.type]), o.a.createElement(oe.a, { primary: e.title, primaryTypographyProps: { variant: "body1" }, secondary: ia()(e.created_at).fromNow() }), o.a.createElement(sa.a, { className: i.arrowForwardIcon })) })))
                },
                ja = Object(s.a)((function(e) { return { root: { textAlign: "center", padding: e.spacing(3) }, image: { height: 240, backgroundImage: 'url("/images/undraw_empty_xct9.svg")', backgroundPositionX: "right", backgroundPositionY: "center", backgroundRepeat: "no-repeat", backgroundSize: "cover" } } })),
                Oa = function(e) {
                    var a = e.className,
                        t = Object(r.a)(e, ["className"]),
                        n = ja();
                    return o.a.createElement("div", Object.assign({}, t, { className: Object(l.a)(n.root, a) }), o.a.createElement("div", { className: n.image }), o.a.createElement(w.a, { variant: "h4" }, "There's nothing here..."))
                },
                Na = Object(s.a)((function() { return { root: { width: 350, maxWidth: "100%" }, actions: { backgroundColor: k.a.grey[50], justifyContent: "center" } } })),
                xa = function(e) {
                    var a = e.notifications,
                        t = e.anchorEl,
                        n = Object(r.a)(e, ["notifications", "anchorEl"]),
                        i = Na();
                    return o.a.createElement(aa.a, Object.assign({}, n, { anchorEl: t, anchorOrigin: { vertical: "bottom", horizontal: "center" } }), o.a.createElement("div", { className: i.root }, o.a.createElement(ta.a, { title: "Notifications" }), o.a.createElement(v.a, null), a.length > 0 ? o.a.createElement(ya, { notifications: a }) : o.a.createElement(Oa, null), o.a.createElement(v.a, null), o.a.createElement(na.a, { className: i.actions }, o.a.createElement(V.a, { component: ze.b, size: "small", to: "#" }, "See all"))))
                },
                ka = Object({ NODE_ENV: "production", PUBLIC_URL: "", WDS_SOCKET_HOST: void 0, WDS_SOCKET_PATH: void 0, WDS_SOCKET_PORT: void 0, REACT_APP_API_URL: "https://aeroconsultant.fr" }).REACT_APP_GA_MEASUREMENT_ID,
                wa = function(e) {
                    var a = e.title,
                        t = e.children,
                        n = Object(r.a)(e, ["title", "children"]),
                        c = Object(G.a)();
                    return Object(i.useEffect)((function() { window.gtag && window.gtag("config", ka, { page_path: c.location.pathname, page_name: a }) }), [a, c]), o.a.createElement("div", n, o.a.createElement(Ae.Helmet, null, o.a.createElement("title", null, a)), t)
                },
                Ca = t(515),
                Sa = t.n(Ca),
                Aa = Object(s.a)((function(e) { return { root: Object(Ie.a)(Object(Ie.a)({}, e.typography.button), {}, { listStyle: "none", userSelect: "none", display: "flex", alignItems: "center" }), active: {}, activeLink: {}, break: {}, breakLink: {}, disabled: {}, next: { marginLeft: e.spacing(1) }, nextLink: { padding: "6px 16px", outline: "none", cursor: "pointer", borderRadius: 4, "&:hover": { backgroundColor: k.a.blueGrey[50] } }, page: {}, pageLink: { color: e.palette.text.secondary, padding: e.spacing(1), outline: "none", cursor: "pointer", width: 40, height: 40, borderRadius: "50%", display: "block", textAlign: "center", "&:hover": { backgroundColor: k.a.blueGrey[50], color: e.palette.text.primary }, "&$activeLink": { backgroundColor: k.a.blueGrey[50], color: e.palette.text.primary } }, previous: { marginRight: e.spacing(1) }, previousLink: { padding: "6px 16px", outline: "none", cursor: "pointer", borderRadius: 4, "&:hover": { backgroundColor: k.a.blueGrey[50] } } } })),
                _a = function(e) {
                    var a = e.pageCount,
                        t = e.pageRangeDisplayed,
                        n = e.onPageChange,
                        i = e.className,
                        c = Object(r.a)(e, ["pageCount", "pageRangeDisplayed", "onPageChange", "className"]),
                        s = Aa();
                    return o.a.createElement(Sa.a, Object.assign({ activeClassName: s.active, activeLinkClassName: s.activeLink, breakClassName: s.break, breakLabel: "...", breakLinkClassName: s.breakLink, containerClassName: Object(l.a)(s.root, i), disabledClassName: s.disabled, marginPagesDisplayed: 2, nextClassName: s.next, nextLabel: "next", nextLinkClassName: s.nextLink, onPageChange: n, pageClassName: s.page, pageCount: a, pageLinkClassName: s.pageLink, pageRangeDisplayed: t, previousClassName: s.previous, previousLabel: "previous", previousLinkClassName: s.previousLink, subContainerClassName: "pages pagination" }, c))
                };
            _a.defaultProps = { onPageChange: function() {}, pageRangeDisplayed: 5 };
            var Ia = _a,
                Ta = t(1024),
                Ba = t(1025),
                Pa = t(516),
                Da = t.n(Pa),
                Fa = Object(s.a)((function(e) { return { root: { display: "flex", marginBottom: e.spacing(2) }, bubble: { flexGrow: 1, padding: e.spacing(1), marginLeft: e.spacing(2), borderRadius: e.shape.borderRadius, backgroundColor: e.palette.background.default }, header: { display: "flex", alignItems: "center" }, time: { marginLeft: "auto" }, message: { marginTop: e.spacing(1) } } })),
                Ra = function(e) {
                    var a = e.comment,
                        t = e.className,
                        n = Object(r.a)(e, ["comment", "className"]),
                        i = Fa();
                    return o.a.createElement("div", Object.assign({}, n, { className: Object(l.a)(i.root, t) }), o.a.createElement(oa.a, { alt: "Person", component: ze.b, src: a.author.avatar, to: "/profile/1/timeline" }), o.a.createElement("div", { className: i.bubble }, o.a.createElement("div", { className: i.header }, o.a.createElement(K.a, { color: "textPrimary", component: ze.b, to: "/profile/1/timeline", variant: "h6" }, a.author.name), o.a.createElement(w.a, { className: i.time, variant: "body2" }, ia()(a.created_at).fromNow())), o.a.createElement(w.a, { className: i.message, variant: "body1" }, a.message)))
                },
                Ma = Object(s.a)((function(e) { return { root: { display: "flex", alignItems: "center" }, paper: { flexGrow: 1, marginLeft: e.spacing(2), padding: e.spacing(.5, 2) }, input: { width: "100%" }, divider: { width: 1, height: 24 }, fileInput: { display: "none" } } })),
                La = function(e) {
                    var a = e.className,
                        t = Object(r.a)(e, ["className"]),
                        c = Ma(),
                        s = Object(i.useRef)(null),
                        m = Object(i.useState)(""),
                        u = Object(n.a)(m, 2),
                        b = u[0],
                        E = u[1],
                        j = function() { s.current.click() };
                    return o.a.createElement("div", Object.assign({}, t, { className: Object(l.a)(c.root, a) }), o.a.createElement(oa.a, { alt: "Person", src: "/images/avatars/avatar_11.png" }), " ", o.a.createElement(d.a, { className: c.paper, elevation: 1 }, o.a.createElement(p.a, { className: c.input, disableUnderline: !0, onChange: function(e) { e.persist(), E(e.target.value) }, placeholder: "Leave a message" })), o.a.createElement(g.a, { title: "Send" }, o.a.createElement(h.a, { color: b.length > 0 ? "primary" : "default" }, o.a.createElement(f.a, null))), o.a.createElement(v.a, { className: c.divider }), o.a.createElement(g.a, { title: "Attach image" }, o.a.createElement(h.a, { edge: "end", onClick: j }, o.a.createElement(y.a, null))), o.a.createElement(g.a, { title: "Attach file" }, o.a.createElement(h.a, { edge: "end", onClick: j }, o.a.createElement(O.a, null))), o.a.createElement("input", { className: c.fileInput, ref: s, type: "file" }))
                },
                za = t(106),
                Ga = t.n(za),
                Ua = t(107),
                Ya = t.n(Ua),
                Wa = t(129),
                Ha = t.n(Wa),
                qa = Object(s.a)((function(e) { return { root: { display: "flex", alignItems: "center" }, likeButton: {}, likedButton: { color: k.a.red[600] }, shareButton: { marginLeft: "auto" }, shareIcon: { marginRight: e.spacing(1) } } })),
                Ja = function(e) {
                    var a = e.post,
                        t = e.className,
                        c = Object(r.a)(e, ["post", "className"]),
                        s = qa(),
                        m = Object(i.useState)(a.liked),
                        u = Object(n.a)(m, 2),
                        d = u[0],
                        p = u[1],
                        v = Object(i.useState)(a.likes),
                        b = Object(n.a)(v, 2),
                        f = b[0],
                        E = b[1];
                    return o.a.createElement("div", Object.assign({}, c, { className: Object(l.a)(s.root, t) }), d ? o.a.createElement(g.a, { title: "Unlike" }, o.a.createElement(h.a, { className: s.likedButton, onClick: function() { p(!1), E((function(e) { return e - 1 })) }, size: "small" }, o.a.createElement(Ga.a, null))) : o.a.createElement(g.a, { title: "Like" }, o.a.createElement(h.a, { className: s.likeButton, onClick: function() { p(!0), E((function(e) { return e + 1 })) }, size: "small" }, o.a.createElement(Ya.a, null))), o.a.createElement(w.a, { color: "textSecondary", variant: "h6" }, f), o.a.createElement(V.a, { className: s.shareButton, size: "small", variant: "contained" }, o.a.createElement(Ha.a, { className: s.shareIcon }), "Share"))
                },
                Ka = Object(s.a)((function(e) { return { root: {}, subheader: { display: "flex", alignItems: "center" }, accessTimeIcon: { color: e.palette.text.secondary, fontSize: "14px", height: 14, width: 14, marginRight: 6 }, content: { paddingTop: 0 }, message: { marginBottom: e.spacing(2) }, mediaArea: { marginBottom: e.spacing(2) }, media: { height: 400, backgroundPosition: "initial" }, divider: { marginTop: e.spacing(2), marginBottom: e.spacing(2) } } })),
                Va = function(e) {
                    var a = e.post,
                        t = e.className,
                        n = Object(r.a)(e, ["post", "className"]),
                        i = Ka();
                    return o.a.createElement(m.a, Object.assign({}, n, { className: Object(l.a)(i.root, t) }), o.a.createElement(ta.a, { avatar: o.a.createElement(oa.a, { alt: "Person", className: i.avatar, component: ze.b, src: a.author.avatar, to: "/profile/1/timeline" }), disableTypography: !0, subheader: o.a.createElement("div", { className: i.subheader }, o.a.createElement(Da.a, { className: i.accessTimeIcon }), o.a.createElement(w.a, { variant: "body2" }, ia()(a.created_at).fromNow())), title: o.a.createElement(K.a, { color: "textPrimary", component: ze.b, to: "/profile/1/timeline", variant: "h6" }, a.author.name) }), o.a.createElement(u.a, { className: i.content }, o.a.createElement(w.a, { className: i.message, variant: "body1" }, a.message), a.media && o.a.createElement(Ta.a, { className: i.mediaArea }, o.a.createElement(Ba.a, { className: i.media, image: a.media })), o.a.createElement(Ja, { className: i.reactions, post: a }), o.a.createElement(v.a, { className: i.divider }), a.comments && o.a.createElement("div", { className: i.comments }, a.comments.map((function(e) { return o.a.createElement(Ra, { comment: e, key: e.id }) }))), o.a.createElement(v.a, { className: i.divider }), o.a.createElement(La, null)))
                },
                Za = t(1026),
                $a = t(1027),
                Xa = Object(s.a)((function(e) { return { root: { width: 960 }, header: { maxWidth: 600, margin: "0 auto", padding: e.spacing(3) }, content: { marginTop: e.spacing(5), padding: e.spacing(2), maxWidth: 720, margin: "0 auto" }, product: { overflow: "unset", position: "relative", padding: e.spacing(5, 3), cursor: "pointer", transition: e.transitions.create("transform", { easing: e.transitions.easing.sharp, duration: e.transitions.duration.leavingScreen }), "&:hover": { transform: "scale(1.1)" } }, image: { borderRadius: e.shape.borderRadius, position: "absolute", top: -24, left: e.spacing(3), height: 48, width: 48, fontSize: 24 }, divider: { margin: e.spacing(2, 0) }, options: { lineHeight: "26px" }, recommended: { backgroundColor: e.palette.primary.main, "& *": { color: "".concat(e.palette.white, " !important") } }, contact: { margin: e.spacing(3, 0) }, actions: { backgroundColor: k.a.grey[100], padding: e.spacing(2), display: "flex", justifyContent: "center" }, startButton: { color: e.palette.white, backgroundColor: k.a.green[600], "&:hover": { backgroundColor: k.a.green[900] } } } })),
                Qa = function(e) {
                    var a = e.open,
                        t = e.onClose,
                        n = e.className,
                        i = Object(r.a)(e, ["open", "onClose", "className"]),
                        c = Xa();
                    return o.a.createElement(Za.a, { maxWidth: "lg", onClose: t, open: a }, o.a.createElement("div", Object.assign({}, i, { className: Object(l.a)(c.root, n) }), o.a.createElement("div", { className: c.header }, o.a.createElement(w.a, { align: "center", gutterBottom: !0, variant: "h3" }, "Start with Freelancer today. Boost up your services!"), o.a.createElement(w.a, { align: "center", className: c.subtitle, variant: "subtitle2" }, "Welcome to the first platform created for freelancers and agencies for showcasing and finding the best clients in the market. 30% of our income goes into Whale Charity")), o.a.createElement("div", { className: c.content }, o.a.createElement($a.a, { container: !0, spacing: 4 }, o.a.createElement($a.a, { item: !0, md: 4, xs: 12 }, o.a.createElement(d.a, { className: c.product, elevation: 1, onClick: t }, o.a.createElement("img", { alt: "Product", className: c.image, src: "/images/products/product_freelancer.svg" }), o.a.createElement(w.a, { component: "h3", gutterBottom: !0, variant: "overline" }, "Freelancer"), o.a.createElement("div", null, o.a.createElement(w.a, { component: "span", display: "inline", variant: "h3" }, "$5"), o.a.createElement(w.a, { component: "span", display: "inline", variant: "subtitle2" }, "/month")), o.a.createElement(w.a, { variant: "overline" }, "Max 1 user"), o.a.createElement(v.a, { className: c.divider }), o.a.createElement(w.a, { className: c.options, variant: "subtitle2" }, o.a.createElement("b", null, "20"), " proposals/month ", o.a.createElement("br", null), o.a.createElement("b", null, "10"), " templates ", o.a.createElement("br", null), "Analytics ", o.a.createElement("b", null, "dashboard"), " ", o.a.createElement("br", null), o.a.createElement("b", null, "Email"), " alerts"))), o.a.createElement($a.a, { item: !0, md: 4, xs: 12 }, o.a.createElement(d.a, { className: Object(l.a)(c.product, c.recommended), elevation: 1, onClick: t }, o.a.createElement("img", { alt: "Product", className: c.image, src: "/images/products/product_agency--outlined.svg" }), o.a.createElement(w.a, { component: "h3", gutterBottom: !0, variant: "overline" }, "Agency"), o.a.createElement("div", null, o.a.createElement(w.a, { component: "span", display: "inline", variant: "h3" }, "$29"), o.a.createElement(w.a, { component: "span", display: "inline", variant: "subtitle2" }, "/month")), o.a.createElement(w.a, { variant: "overline" }, "Max 3 user"), o.a.createElement(v.a, { className: c.divider }), o.a.createElement(w.a, { className: c.options, variant: "subtitle2" }, o.a.createElement("b", null, "20"), " proposals/month ", o.a.createElement("br", null), o.a.createElement("b", null, "10"), " templates ", o.a.createElement("br", null), "Analytics ", o.a.createElement("b", null, "dashboard"), " ", o.a.createElement("br", null), o.a.createElement("b", null, "Email"), " alerts"))), o.a.createElement($a.a, { item: !0, md: 4, xs: 12 }, o.a.createElement(d.a, { className: c.product, elevation: 1, onClick: t }, o.a.createElement("img", { alt: "Product", className: c.image, src: "/images/products/product_enterprise.svg" }), o.a.createElement(w.a, { component: "h3", gutterBottom: !0, variant: "overline" }, "Enterprise"), o.a.createElement("div", null, o.a.createElement(w.a, { component: "span", display: "inline", variant: "h3" }, "$259"), o.a.createElement(w.a, { component: "span", display: "inline", variant: "subtitle2" }, "/month")), o.a.createElement(w.a, { variant: "overline" }, "Unlimited"), o.a.createElement(v.a, { className: c.divider }), o.a.createElement(w.a, { className: c.options, variant: "subtitle2" }, "All from above ", o.a.createElement("br", null), o.a.createElement("b", null, "Unlimited"), " 24/7 support ", o.a.createElement("br", null), "Personalised ", o.a.createElement("b", null, "Page"), " ", o.a.createElement("br", null), o.a.createElement("b", null, "Advertise"), " your profile")))), o.a.createElement(w.a, { align: "center", className: c.contact, variant: "subtitle2" }, "Have a larger team?", " ", o.a.createElement(K.a, { color: "secondary", component: ze.b, to: "#" }, "Contact us"), " ", "for information about more enterprise options.")), o.a.createElement("div", { className: c.actions }, o.a.createElement(V.a, { className: c.startButton, onClick: t, variant: "contained" }, "Start with freelancer"))))
                },
                et = t(296),
                at = t.n(et),
                tt = t(83),
                nt = t(103),
                rt = t(1029),
                it = t(1059),
                ot = t(417),
                ct = t(426),
                lt = t(427),
                st = t(285),
                mt = Object(s.a)((function(e) { return { root: {}, header: { paddingBottom: 0 }, content: { padding: 0, "&:last-child": { paddingBottom: 0 } }, description: { padding: e.spacing(2, 3, 1, 3) }, tags: { padding: e.spacing(0, 3, 1, 3), "& > * + *": { marginLeft: e.spacing(1) } }, learnMoreButton: { marginLeft: e.spacing(2) }, likedButton: { color: k.a.red[600] }, shareButton: { marginLeft: e.spacing(1) }, details: { padding: e.spacing(1, 3) }, saveButton: { marginTop: e.spacing(1), color: e.palette.white, backgroundColor: k.a.green[600], "&:hover": { backgroundColor: k.a.green[900] } }, noButton: { marginTop: e.spacing(1), color: e.palette.white, backgroundColor: k.a.red[600], "&:hover": { backgroundColor: k.a.red[900] } }, yesButton: { marginTop: e.spacing(1), color: e.palette.white, backgroundColor: k.a.green[600], "&:hover": { backgroundColor: k.a.green[900] } }, undefinedButton: { marginTop: e.spacing(1), marginLeft: e.spacing(1), color: e.palette.black } } })),
                ut = function(e) {
                    var a = e.profile,
                        t = e.className,
                        c = Object(r.a)(e, ["profile", "className"]),
                        s = mt(),
                        d = Object(i.useState)(!1),
                        p = Object(n.a)(d, 2),
                        b = p[0],
                        f = p[1],
                        E = Object(i.useState)({ openAlert: !1, messageAlert: "", severityAlert: "info" }),
                        y = Object(n.a)(E, 2),
                        j = y[0],
                        O = y[1],
                        N = Object(i.useState)(!1),
                        x = Object(n.a)(N, 2),
                        k = x[0],
                        C = (x[1], Object(i.useState)(!1)),
                        S = Object(n.a)(C, 2),
                        A = S[0],
                        _ = S[1],
                        I = Object(i.useState)(!1),
                        T = Object(n.a)(I, 2),
                        B = T[0],
                        P = (T[1], Object(i.useState)(!1)),
                        D = Object(n.a)(P, 2),
                        F = D[0],
                        R = D[1];
                    if (!a) return null;
                    var M = Object(G.a)(),
                        L = function(e) { e.preventDefault(), Object(ot.a)(M, a.id) },
                        z = function(e) { e.preventDefault(), Object(ct.a)(M, a.id) },
                        U = function(e, a) { "clickaway" !== a && O(Object(Ie.a)(Object(Ie.a)({}, j), {}, { openAlert: !1 })) },
                        Y = function() { _(!0) },
                        W = function() { _(!1) },
                        H = function() { R(!1) },
                        q = function(e) { e.preventDefault(), Object(lt.a)(M, a.id) },
                        J = Object(nt.a)(a, a.photo.url),
                        Z = "consultant" === JSON.parse(localStorage.getItem("user")).role;
                    return o.a.createElement(m.a, Object.assign({}, c, { className: Object(l.a)(s.root, t) }), o.a.createElement(rt.a, { open: j.openAlert, autoHideDuration: 6e3, onClose: U }, o.a.createElement(it.a, { onClose: U, severity: j.severityAlert }, j.messageAlert)), o.a.createElement(ta.a, { avatar: o.a.createElement(oa.a, { alt: "Author", src: J }, a.name ? Object(tt.a)(a.name) : "Edit Name"), className: s.header, disableTypography: !0, subheader: o.a.createElement(w.a, { variant: "body2" }, a.city ? a.city : "Edit City", ", ", a.country ? a.country : "Edit Country", " \xa0", a.phone_number_with_country_code ? a.phone_number_with_country_code : "Edit Phone"), action: o.a.createElement(h.a, { className: s.editButton, onClick: function() { window.location.href = "/consultant/settings/" + a.id + "/general" }, size: "small" }, o.a.createElement(at.a, null)), title: o.a.createElement(K.a, { color: "textPrimary", component: ze.b, onClick: function() { window.location.href = "/consultant/profile/" + a.id + "/overview" }, to: "#", variant: "h5" }, a.name ? a.name.toUpperCase() : "Edit Name", " \xa0 \xa0 ", o.a.createElement(Ct, { value: a.average_rating ? parseInt(a.average_rating) : parseInt(0) })) }), o.a.createElement(u.a, { className: s.content }, o.a.createElement("div", { className: s.description }, o.a.createElement(w.a, { colo: "textSecondary", variant: "subtitle2" }, a.summary || "Edit Summary")), o.a.createElement(v.a, null), o.a.createElement("div", { className: s.details }, o.a.createElement($a.a, { alignItems: "center", container: !0, justify: "space-between", spacing: 3 }, o.a.createElement($a.a, { item: !0 }, o.a.createElement(w.a, { variant: "h5" }, "Aircraft"), o.a.createElement(w.a, { variant: "body2" }, "1" === a.aircraft_type ? a.aircraft_sub_type : "NA")), o.a.createElement($a.a, { item: !0 }, o.a.createElement(w.a, { variant: "h5" }, "Helicopter"), o.a.createElement(w.a, { variant: "body2" }, "1" === a.helicopter_type ? a.helicopter_sub_type : "NA")), o.a.createElement($a.a, { item: !0 }, o.a.createElement(w.a, { variant: "h5" }, "Power Plant"), o.a.createElement(w.a, { variant: "body2" }, "1" === a.power_plant_type ? a.power_plant_sub_type : "NA")), !Z && o.a.createElement($a.a, { item: !0 }, b ? o.a.createElement(g.a, { title: "Unlike" }, o.a.createElement(h.a, { className: s.likedButton, onClick: function() { f(!1) }, size: "small" }, o.a.createElement(Ga.a, null))) : o.a.createElement(g.a, { title: "Like" }, o.a.createElement(h.a, { className: s.likeButton, onClick: function() { f(!0) }, size: "small" }, o.a.createElement(Ya.a, null))), o.a.createElement(g.a, { title: "Share" }, o.a.createElement(h.a, { className: s.shareButton, size: "small" }, o.a.createElement(Ha.a, null))), o.a.createElement(V.a, {
                        onClick: function() {
                            if (a.resume_edited) {
                                var e = Object(nt.a)(a, a.resume_edited.url),
                                    t = window.open(e, "_blank", "noopener,noreferrer");
                                t && (t.opener = null)
                            } else O(Object(Ie.a)(Object(Ie.a)({}, j), {}, { openAlert: !0, messageAlert: "Resume not uploaded" }))
                        }
                    }, o.a.createElement(ye.a, { className: s.getAppIcon }), "Download"), o.a.createElement("br", null), "verified" !== a.approval_status && o.a.createElement(V.a, { className: s.undefinedButton, onClick: L, variant: "contained" }, "Approve"), "verified" === a.approval_status && o.a.createElement(V.a, { className: s.yesButton, onClick: L, variant: "contained" }, "Approve"), "\xa0\xa0\xa0\xa0", "disapproved" === a.approval_status && o.a.createElement(V.a, { className: s.noButton, onClick: z, variant: "contained" }, "Disapprove"), "disapproved" !== a.approval_status && o.a.createElement(V.a, { className: s.undefinedButton, onClick: z, variant: "contained" }, "Disapprove"), o.a.createElement("br", null), "\xa0", a.availability_status && o.a.createElement(V.a, { onClick: Y, variant: "contained", to: "#", className: s.yesButton }, "Available"), !a.availability_status && o.a.createElement(V.a, { onClick: Y, variant: "contained", to: "#", className: s.undefinedButton }, "Available"), "\xa0\xa0\xa0\xa0", a.availability_status && o.a.createElement(V.a, { className: s.undefinedButton, onClick: q, variant: "contained" }, "Not Available"), null === a.availability_status && o.a.createElement(V.a, { className: s.undefinedButton, onClick: q, variant: "contained" }, "Not Available"), !1 === a.availability_status && o.a.createElement(V.a, { className: s.noButton, onClick: q, variant: "contained" }, "Not Available"), o.a.createElement(V.a, { className: s.undefinedButton, onClick: function() { R(!0) }, variant: "contained" }, "Edit Notes and Rate"))), o.a.createElement(st.a, { profile: a, onClose: W, open: A }), o.a.createElement(rt.a, { anchorOrigin: { vertical: "bottom", horizontal: "left" }, autoHideDuration: 6e3, message: o.a.createElement(w.a, { color: "inherit", variant: "h6" }, "Sent connection request"), onClose: W, open: k }), o.a.createElement(st.b, { profile: a, onClose: H, open: F }), o.a.createElement(rt.a, { anchorOrigin: { vertical: "bottom", horizontal: "left" }, autoHideDuration: 6e3, message: o.a.createElement(w.a, { color: "inherit", variant: "h6" }, "Saved"), onClose: H, open: B }))))
                },
                dt = t(31),
                pt = t.n(dt),
                gt = t(44),
                ht = function(e, a) {
                    var t = { headers: Object(he.a)() },
                        n = "https://aeroconsultant.fr".toString() + "/client/update_like_info.json";
                    pt.a.post(n, a, t).then((function(e) {})).catch((function(a) { return 401 === a.response.status ? function(e) { return Object(gt.a)(e) }(e) : e.history.push("/errors/error-500") }))
                },
                vt = function(e, a) {
                    var t = { headers: Object(he.a)() },
                        n = "https://aeroconsultant.fr".toString() + "/client/update_unlike_info.json";
                    pt.a.post(n, a, t).then((function(e) {})).catch((function(a) { return 401 === a.response.status ? function(e) { return Object(gt.a)(e) }(e) : e.history.push("/errors/error-500") }))
                },
                bt = Object(s.a)((function(e) { return { root: {}, header: { paddingBottom: 0 }, content: { padding: 0, "&:last-child": { paddingBottom: 0 } }, description: { padding: e.spacing(2, 3, 1, 3) }, tags: { padding: e.spacing(0, 3, 1, 3), "& > * + *": { marginLeft: e.spacing(1) } }, learnMoreButton: { marginLeft: e.spacing(2) }, likedButton: { color: k.a.red[600] }, shareButton: { marginLeft: e.spacing(1) }, details: { padding: e.spacing(1, 3) } } })),
                ft = function(e) {
                    var a = e.profile,
                        t = e.liked_consultant,
                        c = e.className,
                        s = Object(r.a)(e, ["profile", "liked_consultant", "className"]),
                        d = bt(),
                        p = Object(i.useState)(t),
                        b = Object(n.a)(p, 2),
                        f = b[0],
                        E = b[1],
                        y = Object(G.a)(),
                        j = Object(i.useState)({ openAlert: !1, messageAlert: "", severityAlert: "info" }),
                        O = Object(n.a)(j, 2),
                        N = O[0],
                        x = O[1];
                    if (!a) return null;
                    var k = function(e, a) { "clickaway" !== a && x(Object(Ie.a)(Object(Ie.a)({}, N), {}, { openAlert: !1 })) },
                        C = Object(nt.a)(a, a.photo.url);
                    return o.a.createElement(m.a, Object.assign({}, s, { className: Object(l.a)(d.root, c) }), o.a.createElement(rt.a, { open: N.openAlert, autoHideDuration: 6e3, onClose: k }, o.a.createElement(it.a, { onClose: k, severity: N.severityAlert }, N.messageAlert)), o.a.createElement(ta.a, { avatar: o.a.createElement(oa.a, { alt: "Author", src: C }, a.name ? Object(tt.a)(a.name) : "Edit Name"), className: d.header, disableTypography: !0, subheader: o.a.createElement(w.a, { variant: "body2" }, a.country ? a.country : "Edit Country", " \xa0"), title: o.a.createElement(w.a, { variant: "h5" }, a.name ? a.name.toUpperCase() : "Edit Name", " \xa0 \xa0") }), o.a.createElement(u.a, { className: d.content }, o.a.createElement("div", { className: d.description }, o.a.createElement(w.a, { colo: "textSecondary", variant: "subtitle2" }, a.summary || "Edit Summary")), o.a.createElement(v.a, null), o.a.createElement("div", { className: d.details }, o.a.createElement($a.a, { alignItems: "center", container: !0, justify: "space-between", spacing: 3 }, o.a.createElement($a.a, { item: !0 }, o.a.createElement(w.a, { variant: "h5" }, "Aircraft"), o.a.createElement(w.a, { variant: "body2" }, "1" === a.aircraft_type ? a.aircraft_sub_type : "NA")), o.a.createElement($a.a, { item: !0 }, o.a.createElement(w.a, { variant: "h5" }, "Helicopter"), o.a.createElement(w.a, { variant: "body2" }, "1" === a.helicopter_type ? a.helicopter_sub_type : "NA")), o.a.createElement($a.a, { item: !0 }, o.a.createElement(w.a, { variant: "h5" }, "Power Plant"), o.a.createElement(w.a, { variant: "body2" }, "1" === a.power_plant_type ? a.power_plant_sub_type : "NA")), o.a.createElement($a.a, { item: !0 }, f ? o.a.createElement(g.a, { title: "Unlike" }, o.a.createElement(h.a, { className: d.likedButton, onClick: function() { vt(y, { id: a.id }), E(!1) }, size: "small" }, o.a.createElement(Ga.a, null))) : o.a.createElement(g.a, { title: "Like" }, o.a.createElement(h.a, { className: d.likeButton, onClick: function() { ht(y, { id: a.id }), E(!0) }, size: "small" }, o.a.createElement(Ya.a, null))), o.a.createElement(V.a, {
                        onClick: function() {
                            if (a.resume_edited.url) {
                                var e = Object(nt.a)(a, a.resume_edited.url),
                                    t = window.open(e, "_blank", "noopener,noreferrer");
                                t && (t.opener = null)
                            } else x(Object(Ie.a)(Object(Ie.a)({}, N), {}, { openAlert: !0, messageAlert: "Resume not uploaded" }))
                        }
                    }, o.a.createElement(ye.a, { className: d.getAppIcon }), "Resume"))))))
                },
                Et = Object(s.a)((function(e) { return { root: {}, header: { paddingBottom: 0 }, content: { padding: 0, "&:last-child": { paddingBottom: 0 } }, description: { padding: e.spacing(2, 3, 1, 3) }, tags: { padding: e.spacing(0, 3, 1, 3), "& > * + *": { marginLeft: e.spacing(1) } }, learnMoreButton: { marginLeft: e.spacing(2) }, likedButton: { color: k.a.red[600] }, shareButton: { marginLeft: e.spacing(1) }, details: { padding: e.spacing(1, 3) } } })),
                yt = function(e) {
                    var a = e.project,
                        t = e.className,
                        c = Object(r.a)(e, ["project", "className"]),
                        s = Et(),
                        d = Object(i.useState)(a.liked),
                        p = Object(n.a)(d, 2),
                        b = p[0],
                        f = p[1];
                    return o.a.createElement(m.a, Object.assign({}, c, { className: Object(l.a)(s.root, t) }), o.a.createElement(ta.a, { avatar: o.a.createElement(oa.a, { alt: "Author", src: a.author.avatar }, Object(tt.a)(a.author.name)), className: s.header, disableTypography: !0, subheader: o.a.createElement(w.a, { variant: "body2" }, "by", " ", o.a.createElement(K.a, { color: "textPrimary", component: ze.b, to: "/profile/1/timeline", variant: "h6" }, a.author.name), " ", "| Updated: ", ia()(a.updated_at).fromNow()), title: o.a.createElement(K.a, { color: "textPrimary", component: ze.b, to: "/projects/1/overview", variant: "h5" }, a.title) }), o.a.createElement(u.a, { className: s.content }, o.a.createElement("div", { className: s.description }, o.a.createElement(w.a, { colo: "textSecondary", variant: "subtitle2" }, "We're looking for experienced Developers and Product Designers to come aboard and help us build succesful businesses through softare.")), o.a.createElement("div", { className: s.tags }, a.tags.map((function(e) { return o.a.createElement(Pe, { color: e.color, key: e.text }, e.text) }))), o.a.createElement(v.a, null), o.a.createElement("div", { className: s.details }, o.a.createElement($a.a, { alignItems: "center", container: !0, justify: "space-between", spacing: 3 }, o.a.createElement($a.a, { item: !0 }, o.a.createElement(w.a, { variant: "h5" }, "$", a.price), o.a.createElement(w.a, { variant: "body2" }, "Per Project")), o.a.createElement($a.a, { item: !0 }, o.a.createElement(w.a, { variant: "h5" }, a.location), o.a.createElement(w.a, { variant: "body2" }, "Location")), o.a.createElement($a.a, { item: !0 }, o.a.createElement(w.a, { variant: "h5" }, a.type), o.a.createElement(w.a, { variant: "body2" }, "Type")), o.a.createElement($a.a, { item: !0 }, b ? o.a.createElement(g.a, { title: "Unlike" }, o.a.createElement(h.a, { className: s.likedButton, onClick: function() { f(!1) }, size: "small" }, o.a.createElement(Ga.a, null))) : o.a.createElement(g.a, { title: "Like" }, o.a.createElement(h.a, { className: s.likeButton, onClick: function() { f(!0) }, size: "small" }, o.a.createElement(Ya.a, null))), o.a.createElement(g.a, { title: "Share" }, o.a.createElement(h.a, { className: s.shareButton, size: "small" }, o.a.createElement(Ha.a, null))), o.a.createElement(V.a, { className: s.learnMoreButton, component: ze.b, size: "small", to: "/projects/1/overview" }, "Learn more"))))))
                },
                jt = t(429),
                Ot = t.n(jt),
                Nt = t(430),
                xt = t.n(Nt),
                kt = Object(s.a)((function(e) { return { root: { display: "inline-flex", alignItems: "center" }, starIcon: { fontSize: 18, height: 18, width: 18 }, starFilledIcon: { color: k.a.amber[400] }, starBorderIcon: { color: e.palette.icon } } })),
                wt = function(e) {
                    for (var a = e.value, t = e.starCount, n = e.className, i = Object(r.a)(e, ["value", "starCount", "className"]), c = kt(), s = [], m = 1; m <= t; m++) {
                        var u = Q()(),
                            d = m <= a ? o.a.createElement(Ot.a, { className: Object(l.a)(c.starIcon, c.starFilledIcon), key: u }) : o.a.createElement(xt.a, { className: Object(l.a)(c.starIcon, c.starBorderIcon), key: u });
                        s.push(d)
                    }
                    return o.a.createElement("div", Object.assign({}, i, { className: Object(l.a)(c.root, n) }), s)
                };
            wt.defaultProps = { value: 0, starCount: 5 };
            var Ct = wt,
                St = t(57),
                At = t(222),
                _t = t(519),
                It = t.n(_t),
                Tt = t(520),
                Bt = t.n(Tt),
                Pt = t(526),
                Dt = t.n(Pt),
                Ft = t(525),
                Rt = t.n(Ft),
                Mt = t(527),
                Lt = t.n(Mt),
                zt = t(518),
                Gt = t.n(zt),
                Ut = t(521),
                Yt = t.n(Ut),
                Wt = t(522),
                Ht = t.n(Wt),
                qt = t(523),
                Jt = t.n(qt),
                Kt = t(524),
                Vt = t.n(Kt),
                Zt = Object(s.a)((function(e) { return { root: {}, inner: { padding: e.spacing(1), display: "flex", alignItems: "center" } } })),
                $t = Object(s.a)((function(e) { return { button: { padding: 0, width: 32, height: 32, minWidth: 32, color: e.palette.icon, "& + &": { marginLeft: e.spacing(1) } }, activeButton: { backgroundColor: Object(At.fade)(e.palette.primary.main, .1), color: e.palette.primary.main } } })),
                Xt = [{ blockType: "header-one", tooltip: "Heading 1", text: "H1" }, { blockType: "header-two", tooltip: "Heading 2", text: "H2" }, { blockType: "header-three", tooltip: "Heading 3", text: "H3" }, { blockType: "header-four", tooltip: "Heading 4", text: "H4" }, { blockType: "header-five", tooltip: "Heading 5", text: "H5" }, { blockType: "header-six", tooltip: "Heading 6", text: "H6" }, { blockType: "blockquote", tooltip: "Blockquote", icon: Gt.a }, { blockType: "unordered-list-item", tooltip: "Unordered list", icon: It.a }, { blockType: "ordered-list-item", tooltip: "Ordered list", icon: Bt.a }, { blockType: "code-block", tooltip: "Code Block", icon: ha.a }, { blockType: "left", tooltip: "Align left", icon: Yt.a }, { blockType: "center", tooltip: "Align center", icon: Ht.a }, { blockType: "right", tooltip: "Align right", icon: Jt.a }, { blockType: "justify", tooltip: "Justify", icon: Vt.a }],
                Qt = [{ inlineStyle: "BOLD", tooltip: "Bold", icon: Rt.a }, { inlineStyle: "ITALIC", tooltip: "Italic", icon: Dt.a }, { inlineStyle: "UNDERLINE", tooltip: "Underline", icon: Lt.a }, { inlineStyle: "CODE", tooltip: "Monospace", icon: ha.a }],
                en = function(e) {
                    var a = e.active,
                        t = e.tooltip,
                        n = e.children,
                        i = Object(r.a)(e, ["active", "tooltip", "children"]),
                        c = $t();
                    return o.a.createElement(g.a, { title: t }, o.a.createElement(V.a, Object.assign({}, i, { className: Object(l.a)(c.button, Object(Z.a)({}, c.activeButton, a)) }), n))
                },
                an = function(e) {
                    var a = e.editorState,
                        t = e.onToggle,
                        n = a.getSelection(),
                        r = a.getCurrentContent().getBlockForKey(n.getStartKey()).getType(),
                        c = a.getCurrentContent().getBlockForKey(n.getStartKey()).getData();
                    return o.a.createElement(i.Fragment, null, Xt.map((function(e) { var a = !1; return a = ["left", "center", "right", "justify"].includes(e.blockType) ? c.get("text-align") === e.blockType : e.blockType === r, o.a.createElement(en, { active: a, key: e.blockType, onClick: function(a) { return function(e, a) { e.preventDefault(), t("blockType", a) }(a, e.blockType) }, tooltip: e.tooltip }, e.icon ? o.a.createElement(e.icon, null) : e.text) })))
                },
                tn = function(e) {
                    var a = e.editorState,
                        t = e.onToggle,
                        n = a.getCurrentInlineStyle();
                    return o.a.createElement(i.Fragment, null, Qt.map((function(e) { return o.a.createElement(en, { active: n.has(e.inlineStyle), key: e.inlineStyle, onClick: function(a) { return function(e, a) { e.preventDefault(), t("inlineStyle", a) }(a, e.inlineStyle) }, tooltip: e.tooltip }, e.icon ? o.a.createElement(e.icon, null) : e.text) })))
                },
                nn = function(e) {
                    var a = e.editorState,
                        t = e.onToggle,
                        n = e.className,
                        i = Object(r.a)(e, ["editorState", "onToggle", "className"]),
                        c = Zt();
                    return o.a.createElement("div", Object.assign({}, i, { className: Object(l.a)(c.root, n) }), o.a.createElement(te.a, null, o.a.createElement("div", { className: c.inner }, o.a.createElement(an, { editorState: a, onToggle: t }), o.a.createElement(tn, { editorState: a, onToggle: t }))))
                },
                rn = t(528);
            var on = Object(rn.a)({ unstyled: { element: "p" }, paragraph: { element: "p" } }),
                cn = St.DefaultDraftBlockRenderMap.merge(on),
                ln = Object(s.a)((function(e) { return { root: {}, editorContainer: { padding: e.spacing(2), minHeight: 400, "& .public-DraftEditorPlaceholder-root": Object(Ie.a)({}, e.typography.body2), "& .public-DraftEditorPlaceholder-hasFocus": { display: "none" }, "& .public-DraftEditor-content": { "& p": Object(Ie.a)({}, e.typography.body1), "& h1": Object(Ie.a)({}, e.typography.h1), "& h2": Object(Ie.a)({}, e.typography.h2), "& h3": Object(Ie.a)({}, e.typography.h3), "& h4": Object(Ie.a)({}, e.typography.h4), "& h5": Object(Ie.a)({}, e.typography.h5), "& h6": Object(Ie.a)({}, e.typography.h6), "& blockquote": Object(Ie.a)({}, e.typography.subtitle1), "& ul": Object(Ie.a)(Object(Ie.a)({}, e.typography.body1), {}, { marginLeft: e.spacing(4) }), "& ol": Object(Ie.a)(Object(Ie.a)({}, e.typography.body1), {}, { marginLeft: e.spacing(4) }), "& pre": { backgroundColor: "rgba(0, 0, 0, 0.05)", fontFamily: '"Inconsolata", "Menlo", "Consolas", monospace', fontSize: 16, padding: 2 } } }, textAlignLeft: { textAlign: "left" }, textAlignCenter: { textAlign: "center" }, textAlignRight: { textAlign: "right" }, textAlignJustify: { textAlign: "justify" } } })),
                sn = function(e) {
                    var a = e.placeholder,
                        t = e.className,
                        c = Object(r.a)(e, ["placeholder", "className"]),
                        s = ln(),
                        m = Object(i.useRef)(null),
                        u = Object(i.useState)(St.EditorState.createEmpty()),
                        p = Object(n.a)(u, 2),
                        g = p[0],
                        h = p[1],
                        b = function(e) { h(e) };
                    return o.a.createElement(d.a, Object.assign({}, c, { className: Object(l.a)(s.root, t) }), o.a.createElement(nn, {
                        editorState: g,
                        onToggle: function(e, a) {
                            if ("blockType" === e) {
                                if (["left", "center", "right", "justify"].includes(a)) {
                                    var t = St.Modifier.setBlockData(g.getCurrentContent(), g.getSelection(), { "text-align": a }),
                                        n = St.EditorState.push(g, t, "change-block-data");
                                    return void h(n)
                                }
                                h(St.RichUtils.toggleBlockType(g, a))
                            } else h(St.RichUtils.toggleInlineStyle(g, a))
                        }
                    }), o.a.createElement(v.a, null), o.a.createElement("div", { className: s.editorContainer, onClick: function() { m.current.focus() } }, o.a.createElement(St.Editor, {
                        blockRenderMap: cn,
                        blockStyleFn: function(e) { var a, t = e.getData().get("text-align"); if (t) { var n = "textAlign".concat((a = t).charAt(0).toUpperCase() + a.slice(1)); return s[n] } return "" },
                        editorState: g,
                        handleKeyCommand: function(e, a) { var t = St.RichUtils.handleKeyCommand(a, e); return !!t && (b(t), !0) },
                        keyBindingFn: function(e) {
                            if (9 !== e.keyCode) return Object(St.getDefaultKeyBinding)(e);
                            var a = St.RichUtils.onTab(e, g, 4);
                            a !== g && b(a)
                        },
                        onChange: b,
                        placeholder: a,
                        ref: m,
                        spellCheck: !0
                    })))
                },
                mn = function() { var e = Object(G.a)(); return Object(i.useEffect)((function() { window.scrollTo(0, 0) }), [e.location.pathname]), null },
                un = t(529),
                dn = t.n(un),
                pn = t(1030),
                gn = t(1028),
                hn = t(1063),
                vn = t(1064),
                bn = t(1031),
                fn = t(1032),
                En = t(1058),
                yn = t(1066),
                jn = t(1033),
                On = t(145),
                Nn = t.n(On),
                xn = t(299),
                kn = t.n(xn),
                wn = t(168),
                Cn = t.n(wn),
                Sn = Object(s.a)((function(e) { return { root: { height: "100%", display: "flex", flexDirection: "column" }, drawer: { width: 420, maxWidth: "100%" }, header: { padding: e.spacing(2, 1), display: "flex", justifyContent: "space-between" }, buttonIcon: { marginRight: e.spacing(1) }, content: { padding: e.spacing(0, 3), flexGrow: 1 }, contentSection: { padding: e.spacing(2, 0) }, contentSectionHeader: { display: "flex", justifyContent: "space-between", cursor: "pointer" }, contentSectionContent: {}, formGroup: { padding: e.spacing(2, 0) }, fieldGroup: { display: "flex", alignItems: "center" }, field: { marginTop: 0, marginBottom: 0 }, flexGrow: { flexGrow: 1 }, addButton: { marginLeft: e.spacing(1) }, tags: { marginTop: e.spacing(1) }, minAmount: { marginRight: e.spacing(3) }, maxAmount: { marginLeft: e.spacing(3) }, radioGroup: {}, actions: { padding: e.spacing(3), "& > * + *": { marginTop: e.spacing(2) } } } })),
                An = function(e) {
                    var a = e.open,
                        t = e.onClose,
                        c = e.onFilter,
                        s = e.className,
                        m = Object(r.a)(e, ["open", "onClose", "onFilter", "className"]),
                        u = Sn(),
                        d = { paymentStatus: "", tag: "", tags: ["Full-Time"], amount: [1, 7], projectStatus: "ended", customerName: "", customerType: "freelancer", customerEmail: "", customerPhone: "", customerAge: "" },
                        p = Object(i.useState)(!0),
                        g = Object(n.a)(p, 2),
                        h = g[0],
                        b = g[1],
                        f = Object(i.useState)(!1),
                        E = Object(n.a)(f, 2),
                        y = E[0],
                        j = E[1],
                        O = Object(i.useState)(Object(Ie.a)({}, d)),
                        N = Object(n.a)(O, 2),
                        x = N[0],
                        k = N[1],
                        C = function(e, a, t) { e.persist && e.persist(), k((function(e) { return Object(Ie.a)(Object(Ie.a)({}, e), {}, Object(Z.a)({}, a, t)) })) };
                    return o.a.createElement(pn.a, { anchor: "right", classes: { paper: u.drawer }, onClose: t, open: a, variant: "temporary" }, o.a.createElement("form", Object.assign({}, m, { className: Object(l.a)(u.root, s), onSubmit: function(e) { e.preventDefault(), c && c(x) } }), o.a.createElement("div", { className: u.header }, o.a.createElement(V.a, { onClick: t, size: "small" }, o.a.createElement(Nn.a, { className: u.buttonIcon }), "Close")), o.a.createElement("div", { className: u.content }, o.a.createElement("div", { className: u.contentSection }, o.a.createElement("div", { className: u.contentSectionHeader, onClick: function() { b((function(e) { return !e })) } }, o.a.createElement(w.a, { variant: "h5" }, "Project"), h ? o.a.createElement(He.a, null) : o.a.createElement(Ye.a, null)), o.a.createElement(v.a, null), o.a.createElement(Ge.a, { in: h }, o.a.createElement("div", { className: u.contentSectionContent }, o.a.createElement("div", { className: u.formGroup }, o.a.createElement(gn.a, { className: u.field, fullWidth: !0, label: "Payment status", margin: "dense", name: "paymentStatus", onChange: function(e) { return C(e, "paymentStatus", e.target.value) }, select: !0, SelectProps: { native: !0 }, value: x.paymentStatus, variant: "outlined" }, o.a.createElement("option", { disabled: !0, value: "" }), ["Pending", "Canceled", "Completed", "Rejected"].map((function(e) { return o.a.createElement("option", { key: e, value: e }, e) })))), o.a.createElement("div", { className: u.formGroup }, o.a.createElement("div", { className: u.fieldGroup }, o.a.createElement(gn.a, { className: Object(l.a)(u.field, u.flexGrow), label: "Filter Tags", margin: "dense", name: "tag", onChange: function(e) { return C(e, "tag", e.target.value) }, value: x.tag, variant: "outlined" }), o.a.createElement(V.a, { className: u.addButton, onClick: function() { k((function(e) { var a = Object(Ie.a)({}, e); return a.tag && !a.tags.includes(a.tag) && (a.tags = Object($.a)(a.tags), a.tags.push(a.tag)), a.tag = "", a })) }, size: "small" }, o.a.createElement(Cn.a, { className: u.addIcon }), "Add")), o.a.createElement("div", { className: u.tags }, x.tags.map((function(e) { return o.a.createElement(hn.a, { deleteIcon: o.a.createElement(Nn.a, null), key: e, label: e, onDelete: function() { return function(e) { k((function(a) { var t = Object(Ie.a)({}, a); return t.tags = t.tags.filter((function(a) { return a !== e })), t })) }(e) } }) })))), o.a.createElement("div", { className: u.formGroup }, o.a.createElement(w.a, { component: "p", gutterBottom: !0, variant: "overline" }, "Project amount"), o.a.createElement("div", { className: u.fieldGroup }, o.a.createElement(w.a, { className: u.minAmount, variant: "body1" }, "$", x.amount[0], "K"), o.a.createElement(vn.a, { className: u.flexGrow, max: 20, min: 1, onChange: function(e, a) { return C(e, "amount", a) }, value: x.amount, valueLabelDisplay: "auto" }), o.a.createElement(w.a, { className: u.maxAmount, variant: "body1" }, "$", x.amount[1], "K"))), o.a.createElement("div", { className: u.formGroup }, o.a.createElement(w.a, { component: "p", gutterBottom: !0, variant: "overline" }, "Project status"), o.a.createElement("div", { className: u.fieldGroup }, o.a.createElement(bn.a, { className: u.radioGroup, name: "projectStatus", onChange: function(e) { return C(e, "projectStatus", e.target.value) }, value: x.projectStatus }, o.a.createElement(fn.a, { control: o.a.createElement(En.a, { color: "primary" }), label: "Ended", value: "ended" }), o.a.createElement(fn.a, { control: o.a.createElement(En.a, { color: "primary" }), label: "On-Going", value: "onGoing" }), o.a.createElement(fn.a, { control: o.a.createElement(En.a, { color: "primary" }), label: "In Review", value: "inReview" }), o.a.createElement(fn.a, { control: o.a.createElement(En.a, { color: "primary" }), label: "Competed", value: "completed" }))))))), o.a.createElement("div", { className: u.contentSection }, o.a.createElement("div", { className: u.contentSectionHeader, onClick: function() { j((function(e) { return !e })) } }, o.a.createElement(w.a, { variant: "h5" }, "Customer"), y ? o.a.createElement(He.a, null) : o.a.createElement(Ye.a, null)), o.a.createElement(v.a, null), o.a.createElement(Ge.a, { in: y }, o.a.createElement("div", { className: u.contentSectionContent }, o.a.createElement("div", { className: u.contentSectionContent }, o.a.createElement("div", { className: u.formGroup }, o.a.createElement(gn.a, { className: u.field, fullWidth: !0, label: "Customer name", margin: "dense", name: "customerName", onChange: function(e) { return C(e, "customerName", e.target.value) }, value: x.customerName, variant: "outlined" })), o.a.createElement("div", { className: u.formGroup }, o.a.createElement(yn.a, { exclusive: !0, onChange: function(e, a) { return a && C(e, "customerType", a) }, size: "small", value: x.customerType, variant: "outlined" }, o.a.createElement(jn.a, { color: "primary", value: "projectOwner" }, "Project owner"), o.a.createElement(jn.a, { value: "freelancer" }, "Freelancer"))), o.a.createElement("div", { className: u.formGroup }, o.a.createElement(gn.a, { className: u.field, fullWidth: !0, label: "Email address", margin: "dense", name: "customerEmail", onChange: function(e) { return C(e, "customerEmail", e.target.value) }, value: x.customerEmail, variant: "outlined" })), o.a.createElement("div", { className: u.formGroup }, o.a.createElement(gn.a, { className: u.field, fullWidth: !0, label: "Phone number", margin: "dense", name: "customerPhone", onChange: function(e) { return C(e, "customerPhone", e.target.value) }, value: x.customerPhone, variant: "outlined" })), o.a.createElement("div", { className: u.formGroup }, o.a.createElement(gn.a, { className: u.field, fullWidth: !0, label: "Age", margin: "dense", name: "customerAge", onChange: function(e) { return C(e, "customerAge", e.target.value) }, select: !0, SelectProps: { native: !0 }, value: x.customerAge, variant: "outlined" }, o.a.createElement("option", { disabled: !0, value: "" }), ["18 - 30", "30 - 45", "50 - 60", "60+"].map((function(e) { return o.a.createElement("option", { key: e, value: e }, e) }))))))))), o.a.createElement("div", { className: u.actions }, o.a.createElement(V.a, { fullWidth: !0, onClick: function() { k(Object(Ie.a)({}, d)) }, variant: "contained" }, o.a.createElement(kn.a, { className: u.buttonIcon }), "Clear"), o.a.createElement(V.a, { color: "primary", fullWidth: !0, type: "submit", variant: "contained" }, "Apply filters"))))
                },
                _n = t(232),
                In = t.n(_n),
                Tn = Object(s.a)((function(e) { return { root: { display: "flex", alignItems: "center" }, search: { flexGrow: 1, height: 42, padding: e.spacing(0, 2), display: "flex", alignItems: "center" }, searchIcon: { marginRight: e.spacing(2), color: e.palette.icon }, searchInput: { flexGrow: 1 }, searchButton: { marginLeft: e.spacing(2) } } })),
                Bn = function(e) {
                    var a = e.onSearch,
                        t = e.className,
                        n = Object(r.a)(e, ["onSearch", "className"]),
                        i = Tn();
                    return o.a.createElement("div", Object.assign({}, n, { className: Object(l.a)(i.root, t) }), o.a.createElement(d.a, { className: i.search, elevation: 1 }, o.a.createElement(In.a, { className: i.searchIcon }), o.a.createElement(p.a, { className: i.searchInput, disableUnderline: !0, placeholder: "Search" })), o.a.createElement(V.a, { className: i.searchButton, onClick: a, size: "large", variant: "contained" }, "Search"))
                },
                Pn = Object(s.a)((function(e) { return { root: { display: "flex", alignItems: "center", justifyContent: "space-between", flexWrap: "wrap" }, search: { flexGrow: 1, maxWidth: 480, flexBasis: 480 }, filterButton: { marginLeft: "auto" }, filterIcon: { marginRight: e.spacing(1) } } })),
                Dn = function(e) {
                    var a = e.onFilter,
                        t = e.onSearch,
                        c = e.className,
                        s = Object(r.a)(e, ["onFilter", "onSearch", "className"]),
                        m = Pn(),
                        u = Object(i.useState)(!1),
                        d = Object(n.a)(u, 2),
                        p = d[0],
                        g = d[1];
                    return o.a.createElement($a.a, Object.assign({}, s, { className: Object(l.a)(m.root, c), container: !0, spacing: 3 }), o.a.createElement($a.a, { item: !0 }, o.a.createElement(Bn, { className: m.search, onSearch: t })), o.a.createElement($a.a, { item: !0 }, o.a.createElement(V.a, { className: m.filterButton, color: "primary", onClick: function() { g(!0) }, size: "small", variant: "outlined" }, o.a.createElement(dn.a, { className: m.filterIcon }), " Show filters")), o.a.createElement(An, { onClose: function() { g(!1) }, onFilter: a, open: p }))
                },
                Fn = Object(s.a)((function(e) { return { root: { display: "flex", paddingLeft: 20 }, avatar: { border: "3px solid ".concat(e.palette.white), marginLeft: -20, "&:hover": { zIndex: 2 } }, more: { backgroundColor: e.palette.error.main, color: e.palette.error.contrastText, fontSize: 14, fontWeight: e.typography.fontWeightMedium } } })),
                Rn = function(e) {
                    var a = e.avatars,
                        t = e.limit,
                        n = e.className,
                        i = Object(r.a)(e, ["avatars", "limit", "className"]),
                        c = Fn(),
                        s = a.slice(0, t).map((function(e) { return o.a.createElement(g.a, { key: Q()(), title: "View" }, o.a.createElement(oa.a, { className: c.avatar, src: e })) }));
                    return a.length > t && s.push(o.a.createElement(g.a, { key: Q()(), title: "View" }, o.a.createElement(oa.a, { className: Object(l.a)(c.avatar, c.more) }, "+", a.length - t))), o.a.createElement("div", Object.assign({}, i, { className: Object(l.a)(c.root, n) }), s)
                };
            Rn.defaultProps = { limit: 3 };
            var Mn = Object(i.memo)(Rn),
                Ln = Object(s.a)((function(e) { return { root: { display: "inline-block", borderRadius: "50%", flexGrow: 0, flexShrink: 0 }, small: { height: e.spacing(1), width: e.spacing(1) }, medium: { height: e.spacing(2), width: e.spacing(2) }, large: { height: e.spacing(3), width: e.spacing(3) }, default: { backgroundColor: k.a.grey[50] }, primary: { backgroundColor: e.palette.primary.main }, info: { backgroundColor: k.a.lightBlue[600] }, warning: { backgroundColor: k.a.orange[900] }, error: { backgroundColor: e.palette.error.main }, success: { backgroundColor: k.a.green[600] } } })),
                zn = function(e) {
                    var a, t = e.className,
                        n = e.size,
                        i = e.color,
                        c = Object(r.a)(e, ["className", "size", "color"]),
                        s = Ln(),
                        m = Object(l.a)((a = {}, Object(Z.a)(a, s.root, !0), Object(Z.a)(a, s[n], n), Object(Z.a)(a, s[i], i), a), t);
                    return o.a.createElement("span", Object.assign({}, c, { className: m }))
                };
            zn.defaultProps = { size: "medium", color: "default" };
            var Gn = zn,
                Un = t(1060),
                Yn = t(314),
                Wn = t.n(Yn),
                Hn = t(469),
                qn = t.n(Hn),
                Jn = Object(s.a)((function(e) { return { root: { padding: e.spacing(2) }, actions: { display: "flex", justifyContent: "center", flexWrap: "wrap", "& > * + *": { marginLeft: e.spacing(2) } }, buttonIcon: { marginRight: e.spacing(1) } } })),
                Kn = function(e) {
                    var a = e.selected,
                        t = e.className,
                        n = e.onMarkPaid,
                        i = e.onMarkUnpaid,
                        c = e.onDelete,
                        s = Object(r.a)(e, ["selected", "className", "onMarkPaid", "onMarkUnpaid", "onDelete"]),
                        m = Jn(),
                        u = a.length > 0;
                    return o.a.createElement(pn.a, { anchor: "bottom", open: u, PaperProps: { elevation: 1 }, variant: "persistent" }, o.a.createElement("div", Object.assign({}, s, { className: Object(l.a)(m.root, t) }), o.a.createElement($a.a, { alignItems: "center", container: !0, spacing: 2 }, o.a.createElement(Un.a, { smDown: !0 }, o.a.createElement($a.a, { item: !0, md: 3 }, o.a.createElement(w.a, { color: "textSecondary", variant: "subtitle1" }, a.length, " selected"))), o.a.createElement($a.a, { item: !0, md: 6, xs: 12 }, o.a.createElement("div", { className: m.actions }, o.a.createElement(V.a, { onClick: n }, o.a.createElement(Wn.a, { className: m.buttonIcon }), "Mark Paid"), o.a.createElement(V.a, { onClick: i }, o.a.createElement(Nn.a, { className: m.buttonIcon }), "Mark Unpaid"), o.a.createElement(V.a, { onClick: c }, o.a.createElement(qn.a, { className: m.buttonIcon }), "Delete"))))))
                }
        },
        176: function(e, a, t) {
            "use strict";
            t.d(a, "a", (function() { return n })), t.d(a, "b", (function() { return r }));
            var n = "SESSION_LOGIN",
                r = "SESSION_LOGOUT"
        },
        227: function(e, a) { e.exports = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAANQAAAAuCAMAAABnCcdVAAAABGdBTUEAALGPC/xhBQAAAAFzUkdCAK7OHOkAAABFUExURUdwTIyYn4yYn4yYn4yYn4yYn4yYn4yYn4yYn4yYn4yYn4yYn4yYn4yYn4yYn4yYn4yYn4yYn4yYn4yYn4yYn4yYn4yYnzE9rjYAAAAWdFJOUwDdMiO87plEdxFVzGWHquUI9km1bzna7DfWAAADi0lEQVRo3u2Y23LcIBBEG3G/SHux0///qXkAJLEge1NJJRWV5snlFQ0HhmYAuOKKK6644or/P/z9bECf6kHqxZ6IKWmWMKdhctzCnYRJPnZQ+iQ7K3Ef8hxQc95NLpIk/Zm2lAeemtQ4U/p5APJGcRKoiST5BAB5e5zF0m8kqbIT6j9iFNZOf+Sb33aKZ+7qc/BBtXuTiZ16PRSarLVL/jhbDm3duWlfwphNMLDQWYaaO6HTdXqbA75R+UiS5C0P4scIyllrrXUiC3dQRmwj9oYmAD6Vj8sAUsMkdQyAT5EJ8PXEnznXCfCdrmP030LdvVxL2IUkd406qCLi9TKC8tot679UnVFvhF/bTm2pkn8CYBIAVRpHEYuG6nWd0OYrKJlMzNXe7cPJraaI8hsozHoElehDPbQdtyzxa9tJt0Wldu2Z4gHA02aVunR7XTgV1mXroKZZNBUEPyQQ8p+38A2U4wgqGkDMdXIHbf0LE/Tc2m8AgCQgEnabbKcLOIW5JkELdU+RfbjqFeTiv4RSo/SbaAGny+TKvq2Pr5ltdDOsPHJjMC8AMItON3cahe+htitGG2ajuk1fQLmhURgBQObcmMWgbccEH6mSbBWgA4IGAGE63dypzHt6DyUjjyIApvr2gIpRKaWUUNPA0kvG5S2tVA9lRkWyi2R05YdACUz0ACdA5mxsdEunIe+2DUreDpn4kLhXZNFfPmicc86ZYrktVNnmeSMMoKIQw6undAuLoKcrqsqtgo1u7XTm1EB9KJOsT2Mq4Yuvs3Y0Sr8pT14LVYcszDj99PTqfdsi15NJLUB0AFxc16bRXTuNwnfuFw52FfWWm9ofu19v6baczHbRfmgUoTul9vuxrIqG54Scg3nmWt21U6mXFyj5wXciHUJZ2lco07TrzDu3Tb3mXhATbfYIiGBzvpmX8dROA90eyhu+F8shVE7wPZTfFmGJh4cvUpsxay7Uw1U4UyzPODHS3TqdaVex+6d+k4ni+JwSr+nnuBvgdFgmwexd1erQCAJzzOcugohmqLt1GnUdz1Pw7XgcFLQpZrN1MWe7lYBYXizjoKCF2V9qDFXwQFhnINR3BM/cR6e7QckC9XbmHUAVB1mm9knNITDsrzD++OrRlhX5Gy7T5vx1HeiBge4uPQItgOftV5io/tIl8bfeg90vIfHx4795AnuX6GZO8vJ3xRVXXHHFFf8sfgJa4l94ZJIICwAAAABJRU5ErkJggg==" },
        228: function(e, a) { e.exports = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAJkAAAAuCAMAAAAMTUtFAAAABGdBTUEAALGPC/xhBQAAAAFzUkdCAK7OHOkAAAA5UExURUdwTIyYn4yYn4yYn4yYn4yYn4yYn4yYn4yYn4yYn4yYn4yYn4yYn4yYn4yYn4yYn4yYn4yYn4yYn5H50coAAAASdFJOUwDtzLsavXcR20RlIpkzVoiqBMZKr2YAAAKUSURBVFjD5ZnL0qsgDIBDUEIA0eb9H/YsuFvt32kXZeawacWgHyE3AeC5Pdyq1OoeMFtbUEREBJfZwKygWxaHYpfZwFYCAKB1LrQKNhtaBzYX2gA2E9oJbB60J7BZ0C7A5kC7BJsB7Qbs92i3YL9GewH2W7SXYL9E+wPsJRox+9+B3aM5FBGxJg83ut5hyX+82NqZyisbOF+b3LG31wdxd2CsJDfFf6ARqn0D8Maq7ZYs2PYuMczMLohOejbIzMxGKd/mYe80VsFE1GutEWJ+IIWEdkFGyhy1V/JcPY7yZIuIUVsReuBpKaVrpwXFsQDfVbMw1DdkTiiKP5EBaBzkjWQGuwOGMhJHG7sjA8LOBJI2OhsQvibDAGD3JzIvppfnfCeKB5cp1/F1L8jAyTpe9lOy4ZJsEwYw6okMAvbyUZKhHrrNWMnyLtkyGB7s2F+Nb6pkwQKAL7PvyJz08ofKmnRlzDdkWvdXRq7I8vyLD3RkLNzkTUZPys0+sEp8lyyOq/kOWbbsslhPZEprrbUqFquSQeLxnQe8s5o2dFZ4sZrWGIPCVPp89/t51KgeQPHOAziFVuZD0a0HkCquq22SjmK+irQ1ahiJ2e1jG2EQAEJ7lruPGjF3+yZtv8tONdIGtaVI67tQGgBIasQ78BRpLTUdZ43udV5bNv5PM3rLTkEyZLAlt4vvInvxgZqd9JCdyB6d/Tcf+LwKahldckontM4DcKoY7HGKxDWj41gBsDgAlx2494XPK8dUBSlDISuNjBIR0QwAsQ9Iu1CrgoqPV4/Z1QbY+TrJ/nW1XSrHFlA2ZvofvlAm/qqb+Et44t2DiXdcJt6lmnhnb+Ld0Il3kCfedU8nFZEoTndSMfHpziwnYv8A53AvOG3BWSAAAAAASUVORK5CYII=" },
        229: function(e, a) { e.exports = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAIsAAAAuCAMAAAAvFhqQAAAABGdBTUEAALGPC/xhBQAAAAFzUkdCAK7OHOkAAAA5UExURUdwTIyYn4yYn4yYn4yYn4yYn4yYn4yYn4yYn4yYn4yYn4yYn4yYn4yYn4yYn4yYn4yYn4yYn4yYn5H50coAAAASdFJOUwAzyuFEmWV3uxEf7gZV+ao6iJQkgG4AAAJrSURBVFjD7ZjNFqMgDIWDAgGttb3v/7CzACwYwJ9zZjZjdremyVe4IJToiSeeeOJvxcv34t+yeIdOFKmaY+ig7dcZuz3NVJGomZmIyDKnZLs6o2tFX+YsC6dPmYjIDwCAIYxdoYpEBqCIyAEuTzW1omTfd1jSeK4klGDhnMUVzbPcDxGRGq+zKAAYAGASSrCsGYtKD+d90bfNhu0Ei0tTywDs9qOlKhKRsQQ2A0DvigLm1TGNYOEkHIDwI41QRSIDwPJjcQA06ZSS5QIYprZpjlgIoUOpJMv3JAvGDxHRZ7zEsoblwbwooSTLcJYFbdO0Wfi3LKuqZMF0lqVtmjbLhLhvVFSFxe5YprRlSpaWadostIahr6kKi9mx1IpuXeumqa7poBTyjoUqEjluJh2WmPtrG0wzDcd7XZQGedVcFYkMwACqw4JtFW5RMU2Pxc8ARqoowWIBvsYCJ0zTY6GlmKVFvmM24QF3kUWaRrCMzrnCsPMkVZHIAGgAxjZLzN2tm71pOusozYuRSqwj+oZxP7mO6qbps4R58UJJFn2LJR6HomkOWMgBsEJJFtqzdPbdwjTqZ5omy8TsbBgKs1c1lvUeS26aJkuqFTqUqsbCN1ky0zRZ0lEldChVjUXdZoGLpmn7JexsKpxNdqrCQmNiMQAsLcloxyzJNO3z7gDA6CGWLJU470YER0RkAcw8x6Nxntu8AbytuEqJFuGt59sqY7GJxc9p7OksSzRN+06S9sPAXKgai9+620itLrBE0zTvamYGMC5x081VjYWGxELLCMApUbR7m34d3H+V9k118MXp+SfjiSee+D/jD2GXg2Y2a8lCAAAAAElFTkSuQmCC" },
        230: function(e, a) { e.exports = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAJcAAAAuCAMAAAAShHv2AAAABGdBTUEAALGPC/xhBQAAAAFzUkdCAK7OHOkAAABFUExURUdwTIyYn4yYn4yYn4yYn4yYn4yYn4yYn4yYn4yYn4yYn4yYn4yYn4yYn4yYn4yYn4yYn4yYn4yYn4yYn4yYn4yYn4yYnzE9rjYAAAAWdFJOUwAiKmZEuxAaM3dMzO5f3VUIHpmIO6pbZeUmAAAC9klEQVRYw+2Y2ZaDIAyGRQCDG3V9/0cddrQCzkXb4cxpLirlBPNJfiJSVV/7j/aAlRVIVbcItfWjMKyJ1OpSk6kkKkZqm0JWE1aQsJrwr1nhUYqwzj0flBniOC+ss31KZqjf9yUqrBWicmL1R2oG36XdCetsH5EZlljjNVvPwrrI7O1gyz7CpXOYmqxNw9+sxCGPhUBEp3GhdCYV4pwTK0Yhu9yfSvbjqhIzpYtPR8SD4Q2cs3bBcsSM2R0XAmja6Mxr24T84bpHjKarMxmRLUpsl40Z8QDZRUzTKK03Lj3Ock01QF21iRWkb+C48O67wEbtfQ9LeIzK5cDlb6ueZchRAbDqyoX0UEo7fVVcRIVbCFkchgGgVM+RSHqcuEgYI9GHdApBTVeESz2XXkGks1zUzQKxHSrELMMzmvPohE+pvIx2TMU7lsoj0pMFqnpduah5TKUZEwR5mVWbjGZCdb/0cFzIy6xK6X6yVKBeRFeuUAftwyvtzFwbNbXbx7j3cE0clkiiTiBwVqW46InrINizZH7j4ZrcZyHOFaigSXJ17+ESSS6fQiP6KJdSOzpGJUE9z1N67+GaymVOcR0mC+wmo41WVbVkKmbXI1OKY0GzV66Mh2+qiQRT9Z+4TlRgXyBXLtCFZuFz7+rXrEiVP+Mm+jNXxsM3VSJ7Tgge1YghmkJbI+JcOsip3jNdP0ddabcoV9rDN1kXBMg91zMVuE1ZhItt9lXn348Q7klZjCvtEZrIu0iVDLEUetHHuaoKb/3e8aOcsb5pv4movjIeh6bMsZ5V7ur9ZbIg7Kzbmy1wqIWEoJtN1b0Hci5DlArC+AgXooYael8xXr8vnBBE7JHjons/YyKW/lxyXmoEtxGsKbe/h0Pl7t71xcRgGK5k+e8ht/W0+5J3ka1YrDHRZ74fgXO6cfzmz8uGYHGtESUc60yCt+fpKuUYDAWZoXLOc7RmnMweJZ1/qZOKVcusKey8UB8Z8rYt73xVf6yTAs+jv/a119oPMfRaZ+ztuy4AAAAASUVORK5CYII=" },
        285: function(e, a, t) {
            "use strict";
            t.d(a, "c", (function() { return x })), t.d(a, "a", (function() { return T })), t.d(a, "b", (function() { return D }));
            var n = t(24),
                r = t(13),
                i = t(12),
                o = t(9),
                c = t(0),
                l = t.n(c),
                s = t(2),
                m = t(554),
                u = t(4),
                d = t(294),
                p = t(1010),
                g = t(1011),
                h = t(82),
                v = t(1027),
                b = t(1028),
                f = t(1023),
                E = t(969),
                y = t(121),
                j = t(42),
                O = Object(m.a)((function(e) { return { root: { position: "absolute", top: "50%", left: "50%", transform: "translate(-50%, -50%)", outline: "none", boxShadow: e.shadows[20], width: 700, maxHeight: "100%", overflowY: "auto", maxWidth: "100%" }, container: { marginTop: e.spacing(3) }, actions: { justifyContent: "flex-end" }, saveButton: { color: e.palette.white, backgroundColor: u.a.green[600], "&:hover": { backgroundColor: u.a.green[900] } } } })),
                N = function(e) {
                    var a = e.profile,
                        t = e.open,
                        m = e.onClose,
                        u = e.className,
                        N = Object(o.a)(e, ["profile", "open", "onClose", "className"]),
                        x = t,
                        k = O(),
                        w = Object(j.a)(),
                        C = Object(c.useState)({ message_to_admin: a.message_to_admin }),
                        S = Object(i.a)(C, 2),
                        A = S[0],
                        _ = S[1];
                    if (!x) return null;
                    return l.a.createElement(d.a, { onClose: m, open: x }, l.a.createElement(p.a, Object.assign({}, N, { className: Object(s.a)(k.root, u) }), l.a.createElement("form", null, l.a.createElement(g.a, null, l.a.createElement(h.a, { align: "center", gutterBottom: !0, variant: "h3" }, "Send Message"), l.a.createElement(v.a, { className: k.container, container: !0, spacing: 3 }, l.a.createElement(v.a, { item: !0, md: 12, xs: 12 }, l.a.createElement(b.a, { fullWidth: !0, label: "Message", name: "message_to_admin", onChange: function(e, a) { _(Object(r.a)(Object(r.a)({}, A), {}, Object(n.a)({}, e.target.name, "checkbox" === e.target.type ? e.target.checked : e.target.value))) }, required: !0, multiline: !0, rows: 4, value: A.message_to_admin || "", variant: "outlined" })))), l.a.createElement(f.a, { className: k.actions }, l.a.createElement(E.a, { onClick: m, variant: "contained" }, "Close"), l.a.createElement(E.a, { className: k.saveButton, onClick: function(e) { e.preventDefault(), Object(y.a)(a.id, A, w, !0, !1) }, variant: "contained" }, "Save")))))
                };
            N.displayName = "Send Message to Admin", N.defaultProps = { open: !1, onClose: function() {} };
            var x = N,
                k = t(31),
                w = t.n(k),
                C = t(43),
                S = t(44),
                A = function(e, a) {
                    var t = { headers: Object(C.a)() },
                        n = "https://aeroconsultant.fr".toString() + "/consultant/" + a + "/available_consultant.json";
                    w.a.get(n, t).then((function(e) { window.location.reload(!0) })).catch((function(a) { return 401 === a.response.status ? function(e) { return Object(S.a)(e) }(e) : e.history.push("/errors/error-500") }))
                },
                _ = Object(m.a)((function(e) { return { root: { position: "absolute", top: "50%", left: "50%", transform: "translate(-50%, -50%)", outline: "none", boxShadow: e.shadows[20], width: 700, maxHeight: "100%", overflowY: "auto", maxWidth: "100%" }, container: { marginTop: e.spacing(3) }, actions: { justifyContent: "flex-end" }, saveButton: { color: e.palette.white, backgroundColor: u.a.green[600], "&:hover": { backgroundColor: u.a.green[900] } } } })),
                I = function(e) {
                    var a = e.profile,
                        t = e.open,
                        m = e.onClose,
                        u = e.className,
                        O = Object(o.a)(e, ["profile", "open", "onClose", "className"]),
                        N = t,
                        x = _(),
                        k = Object(j.a)(),
                        w = Object(c.useState)({ available_start_date: a.available_start_date, available_end_date: a.available_end_date }),
                        C = Object(i.a)(w, 2),
                        S = C[0],
                        I = C[1];
                    if (!N) return null;
                    var T = function(e, a) { I(Object(r.a)(Object(r.a)({}, S), {}, Object(n.a)({}, e.target.name, "checkbox" === e.target.type ? e.target.checked : e.target.value))) };
                    return l.a.createElement(d.a, { onClose: m, open: N }, l.a.createElement(p.a, Object.assign({}, O, { className: Object(s.a)(x.root, u) }), l.a.createElement("form", null, l.a.createElement(g.a, null, l.a.createElement(h.a, { align: "center", gutterBottom: !0, variant: "h3" }, "Set Your Availability"), l.a.createElement(v.a, { className: x.container, container: !0, spacing: 3 }, l.a.createElement(v.a, { item: !0, lg: 6, md: 6, xs: 12 }, l.a.createElement(b.a, { fullWidth: !0, label: "You are Available From", name: "available_start_date", onChange: T, type: "date", InputLabelProps: { shrink: !0 }, required: !0, value: S.available_start_date || "", variant: "outlined" })), l.a.createElement(v.a, { item: !0, lg: 6, md: 6, xs: 12 }, l.a.createElement(b.a, { fullWidth: !0, label: "You are Available Till", name: "available_end_date", onChange: T, type: "date", InputProps: { inputProps: { min: S.available_start_date || "1920-05-04" } }, InputLabelProps: { shrink: !0 }, value: S.available_end_date || "", variant: "outlined" })))), l.a.createElement(f.a, { className: x.actions }, l.a.createElement(E.a, { onClick: m, variant: "contained" }, "Close"), l.a.createElement(E.a, { className: x.saveButton, onClick: function(e) { e.preventDefault(), A(k, a.id), setTimeout((function() { return Object(y.a)(a.id, S, k, !1, !1) }), 3e3) }, variant: "contained" }, "Save")))))
                };
            I.displayName = "Set Your Availability", I.defaultProps = { open: !1, onClose: function() {} };
            var T = I,
                B = Object(m.a)((function(e) { return { root: { position: "absolute", top: "50%", left: "50%", transform: "translate(-50%, -50%)", outline: "none", boxShadow: e.shadows[20], width: 700, maxHeight: "100%", overflowY: "auto", maxWidth: "100%" }, container: { marginTop: e.spacing(3) }, actions: { justifyContent: "flex-end" }, saveButton: { color: e.palette.white, backgroundColor: u.a.green[600], "&:hover": { backgroundColor: u.a.green[900] } } } })),
                P = function(e) {
                    var a = e.profile,
                        t = e.open,
                        m = e.onClose,
                        u = e.className,
                        O = Object(o.a)(e, ["profile", "open", "onClose", "className"]),
                        N = t,
                        x = B(),
                        k = Object(j.a)(),
                        w = Object(c.useState)({ comment_by_admin: a.comment_by_admin, daily_rate_offsite: a.daily_rate_offsite, daily_rate_onsite: a.daily_rate_onsite }),
                        C = Object(i.a)(w, 2),
                        S = C[0],
                        A = C[1];
                    if (!N) return null;
                    var _ = function(e, a) { A(Object(r.a)(Object(r.a)({}, S), {}, Object(n.a)({}, e.target.name, "checkbox" === e.target.type ? e.target.checked : e.target.value))) };
                    return l.a.createElement(d.a, { onClose: m, open: N }, l.a.createElement(p.a, Object.assign({}, O, { className: Object(s.a)(x.root, u) }), l.a.createElement("form", null, l.a.createElement(g.a, null, l.a.createElement(h.a, { align: "center", gutterBottom: !0, variant: "h3" }, "Set Notes and Rates"), l.a.createElement(v.a, { className: x.container, container: !0, spacing: 3 }, l.a.createElement(v.a, { item: !0, lg: 6, md: 6, xs: 12 }, l.a.createElement(b.a, { fullWidth: !0, label: "Notes", name: "comment_by_admin", onChange: _, required: !0, value: S.comment_by_admin || "", variant: "outlined" })), l.a.createElement(v.a, { item: !0, lg: 6, md: 6, xs: 12 }, l.a.createElement(b.a, { fullWidth: !0, label: "Daily Onsite Rate", name: "daily_rate_onsite", onChange: _, required: !0, value: S.daily_rate_onsite || "", variant: "outlined" })), l.a.createElement(v.a, { item: !0, lg: 6, md: 6, xs: 12 }, l.a.createElement(b.a, { fullWidth: !0, label: "Daily Offsite Rate", name: "daily_rate_offsite", onChange: _, required: !0, value: S.daily_rate_offsite || "", variant: "outlined" })))), l.a.createElement(f.a, { className: x.actions }, l.a.createElement(E.a, { onClick: m, variant: "contained" }, "Close"), l.a.createElement(E.a, { className: x.saveButton, onClick: function(e) { e.preventDefault(), Object(y.a)(a.id, S, k, !1, !1), m() }, variant: "contained" }, "Save")))))
                };
            P.displayName = "Set Notes, Rates", P.defaultProps = { open: !1, onClose: function() {} };
            var D = P
        },
        302: function(e, a, t) {
            "use strict";
            a.a = function(e, a) {
                var t = a.name,
                    n = a.stage,
                    r = a.id;
                t && "basic_info" !== n ? "profile" === n ? e.history.push("/consultant/profile/" + r + "/overview") : "verify_phone" === n || "otp_sent" === n || "otp_verified" === n ? e.history.push("/consultant/settings/" + r + "/phone") : "account_locked" === n && e.history.push("/consultant/settings/" + r + "/notifications") : e.history.push("/consultant/settings/" + r + "/general")
            }
        },
        32: function(e, a, t) {
            "use strict";
            var n = t(31),
                r = t.n(n).a.create();
            a.a = r
        },
        393: function(e, a, t) {
            "use strict";
            a.a = function(e) {
                var a = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 2;
                if (0 === e) return "0 Bytes";
                var t = 1024,
                    n = a < 0 ? 0 : a,
                    r = ["Bytes", "KB", "MB", "GB", "TB", "PB", "EB", "ZB", "YB"],
                    i = Math.floor(Math.log(e) / Math.log(t));
                return parseFloat((e / Math.pow(t, i)).toFixed(n)) + " " + r[i]
            }
        },
        417: function(e, a, t) {
            "use strict";
            var n = t(31),
                r = t.n(n),
                i = t(43),
                o = t(44);
            a.a = function(e, a) {
                var t = { headers: Object(i.a)() },
                    n = "https://aeroconsultant.fr".toString() + "/consultant/" + a + "/approve_consultant.json";
                r.a.get(n, t).then((function(e) { window.location.reload(!0) })).catch((function(a) { return 401 === a.response.status ? function(e) { return Object(o.a)(e) }(e) : e.history.push("/errors/error-500") }))
            }
        },
        42: function(e, a, t) {
            "use strict";
            var n = t(0),
                r = t(30);
            a.a = function() { return Object(n.useContext)(r.e) }
        },
        426: function(e, a, t) {
            "use strict";
            var n = t(31),
                r = t.n(n),
                i = t(43),
                o = t(44);
            a.a = function(e, a) {
                var t = { headers: Object(i.a)() },
                    n = "https://aeroconsultant.fr".toString() + "/consultant/" + a + "/disapprove_consultant.json";
                r.a.get(n, t).then((function(e) { window.location.reload(!0) })).catch((function(a) { return 401 === a.response.status ? function(e) { return Object(o.a)(e) }(e) : e.history.push("/errors/error-500") }))
            }
        },
        427: function(e, a, t) {
            "use strict";
            var n = t(31),
                r = t.n(n),
                i = t(43),
                o = t(44);
            a.a = function(e, a) {
                var t = { headers: Object(i.a)() },
                    n = "https://aeroconsultant.fr".toString() + "/consultant/" + a + "/not_available_consultant.json";
                r.a.get(n, t).then((function(e) { window.location.reload(!0) })).catch((function(a) { return 401 === a.response.status ? function(e) { return Object(o.a)(e) }(e) : e.history.push("/errors/error-500") }))
            }
        },
        43: function(e, a, t) {
            "use strict";
            a.a = function() { var e = JSON.parse(localStorage.getItem("user")); if (e) return { "Access-Control-Allow-Origin": "*", "X-User-Email": e.email, "X-User-Token": e.authentication_token } }
        },
        44: function(e, a, t) {
            "use strict";
            a.a = function(e) { localStorage.removeItem("user"), localStorage.removeItem("consultant_email"), localStorage.removeItem("consultant_profile_data"), localStorage.removeItem("consultant_project"), localStorage.removeItem("consultant_duplicate_emails"), localStorage.removeItem("consultant_project"), localStorage.clear(), sessionStorage.clear(), e.history.push("/auth/login") }
        },
        557: function(e, a, t) { e.exports = t(963) },
        565: function(e, a, t) {},
        62: function(e, a, t) {
            "use strict";
            var n = t(4),
                r = function(e, a) { return "linear-gradient(180deg, ".concat(e, " 0%, ").concat(a, " 100%)") },
                i = r(n.a.grey[400], n.a.grey[600]),
                o = r(n.a.blue[700], n.a.blue[900]),
                c = r(n.a.indigo[400], n.a.indigo[600]),
                l = r(n.a.green[400], n.a.green[600]),
                s = r(n.a.orange[400], n.a.orange[700]),
                m = r(n.a.red[500], n.a.red[700]);
            a.a = { grey: i, blue: o, indigo: c, green: l, orange: s, red: m }
        },
        702: function(e, a) {},
        83: function(e, a, t) {
            "use strict";
            a.a = function() { var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : ""; return e.replace(/\s+/, " ").split(" ").slice(0, 2).map((function(e) { return e && e[0].toUpperCase() })).join("") }
        },
        924: function(e, a, t) {},
        960: function(e, a, t) {},
        961: function(e, a, t) {},
        962: function(e, a, t) {},
        963: function(e, a, t) {
            "use strict";
            t.r(a);
            var n = t(0),
                r = t.n(n),
                i = t(25),
                o = t.n(i),
                c = t(30),
                l = t(56),
                s = t(496),
                m = t(87),
                u = t(1056),
                d = t(48),
                p = t(104),
                g = t(548),
                h = t(4),
                v = "#FFFFFF",
                b = { black: "#000000", white: v, primary: { contrastText: v, dark: h.a.indigo[900], main: h.a.indigo[500], light: h.a.indigo[100] }, secondary: { contrastText: v, dark: h.a.blue[900], main: h.a.blue.A400, light: h.a.blue.A400 }, error: { contrastText: v, dark: h.a.red[900], main: h.a.red[600], light: h.a.red[400] }, text: { primary: h.a.blueGrey[900], secondary: h.a.blueGrey[600], link: h.a.blue[600] }, link: h.a.blue[800], icon: h.a.blueGrey[600], background: { default: "#F4F6F8", paper: v }, divider: h.a.grey[200] },
                f = { h1: { color: b.text.primary, fontWeight: 500, fontSize: "35px", letterSpacing: "-0.24px", lineHeight: "40px" }, h2: { color: b.text.primary, fontWeight: 500, fontSize: "29px", letterSpacing: "-0.24px", lineHeight: "32px" }, h3: { color: b.text.primary, fontWeight: 500, fontSize: "24px", letterSpacing: "-0.06px", lineHeight: "28px" }, h4: { color: b.text.primary, fontWeight: 500, fontSize: "20px", letterSpacing: "-0.06px", lineHeight: "24px" }, h5: { color: b.text.primary, fontWeight: 500, fontSize: "16px", letterSpacing: "-0.05px", lineHeight: "20px" }, h6: { color: b.text.primary, fontWeight: 500, fontSize: "14px", letterSpacing: "-0.05px", lineHeight: "20px" }, subtitle1: { color: b.text.primary, fontSize: "16px", letterSpacing: "-0.05px", lineHeight: "25px" }, subtitle2: { color: b.text.secondary, fontWeight: 400, fontSize: "14px", letterSpacing: "-0.05px", lineHeight: "21px" }, body1: { color: b.text.primary, fontSize: "14px", letterSpacing: "-0.05px", lineHeight: "21px" }, body2: { color: b.text.secondary, fontSize: "12px", letterSpacing: "-0.04px", lineHeight: "18px" }, button: { color: b.text.primary, fontSize: "14px" }, caption: { color: b.text.secondary, fontSize: "11px", letterSpacing: "0.33px", lineHeight: "13px" }, overline: { color: b.text.secondary, fontSize: "11px", fontWeight: 500, letterSpacing: "0.33px", lineHeight: "13px", textTransform: "uppercase" } },
                E = { root: { backgroundColor: h.a.blueGrey[50], color: h.a.blueGrey[900] }, deletable: { "&:focus": { backgroundColor: h.a.blueGrey[100] } } },
                y = { root: { color: b.icon, "&:hover": { backgroundColor: "rgba(0, 0, 0, 0.03)" } } },
                j = { root: {}, input: { "&::placeholder": { opacity: 1, color: b.text.secondary } } },
                O = { root: { borderRadius: 3, overflow: "hidden" }, colorPrimary: { backgroundColor: h.a.blueGrey[50] } },
                N = { root: { color: b.icon, minWidth: 32 } },
                x = { root: { backgroundColor: h.a.grey[50] } },
                k = t(13),
                w = { MuiButton: { contained: { boxShadow: "0 1px 1px 0 rgba(0,0,0,0.14), 0 2px 1px -1px rgba(0,0,0,0.12), 0 1px 3px 0 rgba(0,0,0,0.20)", backgroundColor: "#FFFFFF" } }, MuiCardActions: { root: { padding: "16px 24px" } }, MuiCardContent: { root: { padding: 24 } }, MuiCardHeader: { root: { padding: "16px 24px" } }, MuiChip: E, MuiIconButton: y, MuiInputBase: j, MuiLinearProgress: O, MuiListItemIcon: N, MuiOutlinedInput: { root: {}, notchedOutline: { borderColor: "rgba(0,0,0,0.15)" } }, MuiPaper: { root: {}, elevation1: { boxShadow: "0 0 0 1px rgba(63,63,68,0.05), 0 1px 3px 0 rgba(63,63,68,0.15)" } }, MuiTableHead: x, MuiTableCell: { root: Object(k.a)(Object(k.a)({}, f.body1), {}, { borderBottom: "1px solid ".concat(b.divider) }) }, MuiTableRow: { root: { "&$selected": { backgroundColor: b.background.default }, "&$hover": { "&:hover": { backgroundColor: b.background.default } } } }, MuiToggleButton: { root: { color: b.icon, "&:hover": { backgroundColor: h.a.grey[100] }, "&$selected": { backgroundColor: h.a.grey[50], color: b.primary.main, "&:hover": { backgroundColor: h.a.grey[100] } }, "&:first-child": { borderTopLeftRadius: 4, borderBottomLeftRadius: 4 }, "&:last-child": { borderTopRightRadius: 4, borderBottomRightRadius: 4 } } }, MuiTypography: { gutterBottom: { marginBottom: 8 } } },
                C = Object(g.a)({ palette: b, typography: f, overrides: w }),
                S = t(96),
                A = t(501),
                _ = t(502),
                I = t(176),
                T = { loggedIn: !0, user: { first_name: "Shen", last_name: "Zhi", email: "demo@devias.io", avatar: "/images/avatars/avatar_11.png", bio: "Brain Director", role: "ADMIN" } },
                B = function() {
                    var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : T,
                        a = arguments.length > 1 ? arguments[1] : void 0;
                    switch (a.type) {
                        case I.a:
                            return Object(k.a)({}, T);
                        case I.b:
                            return Object(k.a)(Object(k.a)({}, e), {}, { loggedIn: !1, user: { role: "GUEST" } });
                        default:
                            return e
                    }
                },
                P = Object(S.combineReducers)({ session: B });
            var D = t(24),
                F = t(554),
                R = t(1009),
                M = t(35),
                L = t(36),
                z = t(39),
                G = t(37),
                U = t(964),
                Y = t(1003),
                W = t(1004),
                H = t(1005),
                q = t(1006),
                J = t(1007),
                K = (t(565), t(999)),
                V = t(1e3),
                Z = t(1001),
                $ = t(1002),
                X = function(e) {
                    Object(z.a)(t, e);
                    var a = Object(G.a)(t);

                    function t() { return Object(M.a)(this, t), a.apply(this, arguments) }
                    return Object(L.a)(t, [{ key: "render", value: function() { return r.a.createElement(r.a.Fragment, null, r.a.createElement(K.a, { navbar: !0, className: "ml-auto navbar-center", id: "mySidenav" }, this.props.navItems.map((function(e, a) { return r.a.createElement(V.a, { key: a, className: "Home" === e.navheading ? "active" : "" }, r.a.createElement(Z.a, { href: "#" + e.idnm }, " ", e.navheading)) }))), r.a.createElement($.a, { color: "success", className: "btn-rounded navbar-btn", onClick: function(e) { e.preventDefault(), window.location.href = "/auth/login" } }, "Login"), r.a.createElement($.a, { color: "success", className: "btn-rounded navbar-btn", onClick: function(e) { e.preventDefault(), window.location.href = "/auth/register" } }, "Register")) } }]), t
                }(n.Component),
                Q = t(110),
                ee = t.n(Q),
                ae = function(e) {
                    Object(z.a)(t, e);
                    var a = Object(G.a)(t);

                    function t(e) { var n; return Object(M.a)(this, t), (n = a.call(this, e)).state = { navItems: [], pos: document.documentElement.scrollTop, imglight: !0, navClass: "navbar-light" }, n }
                    return Object(L.a)(t, [{ key: "render", value: function() { return r.a.createElement(r.a.Fragment, null, r.a.createElement("div", { className: "bg-primary-edited" }), r.a.createElement(Y.a, { expand: "lg", fixed: "top", className: "navbar-custom sticky sticky-dark " }, r.a.createElement(W.a, null, r.a.createElement(H.a, { className: "logo text-uppercase", href: "/" }, r.a.createElement(ee.a, { query: "(min-width: 990px)" }, !0 === this.props.imglight ? r.a.createElement("img", { style: { height: 70, width: 250 }, src: "/images/logos/LOGO_color.png", alt: "", className: "logo-dark" }) : r.a.createElement("div", null, r.a.createElement("img", { style: { height: 70, width: 250 }, src: "/images/logos/LOGO_white.png", alt: "", className: "logo-light" }))), r.a.createElement(ee.a, { query: "(max-width: 990px)" }, r.a.createElement("img", { src: "/images/50x50.png", alt: "", className: "logo-dark" }))), r.a.createElement(q.a, { onClick: this.toggle }, r.a.createElement("i", { className: "mdi mdi-menu" })), r.a.createElement(J.a, { id: "navbarCollapse", isOpen: this.state.isOpenMenu, navbar: !0 }, r.a.createElement(X, { navItems: this.state.navItems, navClass: this.state.navClass, imglight: this.state.imglight }))))) } }]), t
                }(n.Component),
                te = Object(U.a)((function(e) { return { root: { boxShadow: "none" } } }))(ae),
                ne = Object(F.a)((function(e) { return { content: Object(D.a)({ height: "100%", paddingTop: 56 }, e.breakpoints.up("sm"), { paddingTop: 64 }) } })),
                re = function(e) {
                    var a = e.route,
                        t = ne();
                    return Object(n.useEffect)((function() { localStorage.getItem("user") && e.history.push("/") })), r.a.createElement(n.Fragment, null, r.a.createElement(te, null), r.a.createElement("main", { className: t.content }, r.a.createElement(n.Suspense, { fallback: r.a.createElement(R.a, null) }, Object(p.a)(a.routes))))
                },
                ie = Object(F.a)((function() { return { root: { height: "100%" } } })),
                oe = function(e) {
                    var a = e.route,
                        t = ie();
                    return r.a.createElement("main", { className: t.root }, r.a.createElement(n.Suspense, { fallback: r.a.createElement(R.a, null) }, Object(p.a)(a.routes)))
                },
                ce = t(12),
                le = t(9),
                se = t(18),
                me = t(2),
                ue = t(1062),
                de = t(82),
                pe = t(1013),
                ge = t(1030),
                he = t(969),
                ve = t(143),
                be = t(1060),
                fe = t(42),
                Ee = t(17),
                ye = t(224),
                je = t.n(ye),
                Oe = t(533),
                Ne = t.n(Oe),
                xe = t(316),
                ke = t.n(xe),
                we = t(119),
                Ce = t.n(we),
                Se = t(73),
                Ae = t.n(Se),
                _e = t(534),
                Ie = t.n(_e),
                Te = t(531),
                Be = t.n(Te),
                Pe = t(530),
                De = t.n(Pe),
                Fe = t(532),
                Re = t.n(Fe),
                Me = t(470),
                Le = t.n(Me),
                ze = t(225),
                Ge = t.n(ze),
                Ue = t(535),
                Ye = t.n(Ue),
                We = t(219),
                He = t.n(We),
                qe = t(47),
                Je = t.n(qe),
                Ke = t(315),
                Ve = t.n(Ke),
                Ze = t(108),
                $e = t.n(Ze),
                Xe = t(301),
                Qe = t.n(Xe),
                ea = [{ title: "Pages", pages: [{ title: "Overview", href: "/overview", icon: De.a }, { title: "Dashboards", href: "/dashboards", icon: Ae.a, children: [{ title: "Default", href: "/dashboards/default" }, { title: "Analytics", href: "/dashboards/analytics" }] }, { title: "Management", href: "/management", icon: je.a, children: [{ title: "Customers", href: "/management/customers" }, { title: "Customer Details", href: "/management/customers/1/summary" }, { title: "Projects", href: "/management/projects" }, { title: "Orders", href: "/management/orders" }, { title: "Order Details", href: "/management/orders/1" }] }, { title: "Social Feed", href: "/social-feed", icon: He.a }, { title: "Profile", href: "/profile", icon: Je.a, children: [{ title: "Timeline", href: "/profile/1/timeline" }, { title: "Connections", href: "/profile/1/connections" }, { title: "Projects", href: "/profile/1/projects" }, { title: "Reviews", href: "/profile/1/reviews" }] }, { title: "Project", href: "/projects", icon: Be.a, children: [{ title: "Browse", href: "/projects" }, { title: "Create", href: "/projects/create" }, { title: "Overview", href: "/projects/1/overview" }, { title: "Files", href: "/projects/1/files" }, { title: "Activity", href: "/projects/1/activity" }, { title: "Subscribers", href: "/projects/1/subscribers" }] }, { title: "Invoice", href: "/invoices/1", icon: Ve.a }, { title: "Kanban Board", href: "/kanban-board", icon: Re.a }, { title: "Mail", href: "/mail", icon: Ge.a, label: function() { return r.a.createElement(Ee.f, { color: h.a.red[500], shape: "rounded" }, "2") } }, { title: "Chat", href: "/chat", icon: ke.a, label: function() { return r.a.createElement(Ee.f, { color: h.a.red[500], shape: "rounded" }, "4") } }, { title: "Calendar", href: "/calendar", icon: Ne.a, label: function() { return r.a.createElement(Ee.f, { color: h.a.green[500] }, "New") } }, { title: "Settings", href: "/settings", icon: $e.a, children: [{ title: "General", href: "/settings/general" }, { title: "Subscription", href: "/settings/subscription" }, { title: "Notifications", href: "/settings/notifications" }, { title: "Security", href: "/settings/security" }] }, { title: "Authentication", href: "/auth", icon: Le.a, children: [{ title: "Login", href: "/auth/login" }, { title: "Register", href: "/auth/register" }] }, { title: "Errors", href: "/errors", icon: Ie.a, children: [{ title: "Error 401", href: "/errors/error-401" }, { title: "Error 404", href: "/errors/error-404" }, { title: "Error 500", href: "/errors/error-500" }] }] }, { title: "Support", pages: [{ title: "Presentation", href: "/presentation", icon: Ye.a }, { title: "Getting started", href: "/getting-started", icon: Ce.a }, { title: "Changelog", href: "/changelog", icon: Qe.a, label: function() { return r.a.createElement(Ee.f, { color: h.a.blue[500] }, "v1.2.0") } }] }],
                aa = function(e) {
                    var a = "Deactivate",
                        t = "/consultant/settings/" + e.id + "/deactivate";
                    return e.deactivate && (a = "Activate", t = "/consultant/settings/" + e.id + "/activate"), [{ title: "Pages", pages: [{ title: "Profile", href: "/consultant/profile", icon: Je.a, children: [{ title: "Overview", href: "/consultant/profile/" + e.id + "/overview" }, { title: "Documents", href: "/consultant/profile/" + e.id + "/documents" }, { title: "Projects", href: "/consultant/profile/" + e.id + "/projects" }] }] }, { title: "Support", pages: [{ title: "Settings", href: "/consultant/settings", icon: $e.a, children: [{ title: "General", href: "/consultant/settings/" + e.id + "/general" }, { title: "Notifications", href: "/consultant/settings/" + e.id + "/notifications" }, { title: a, href: t }] }] }]
                },
                ta = function() { return [{ title: "Pages", pages: [{ title: "Analytics", href: "/admin/analytics", icon: Ae.a }, { title: "Consultant", href: "/admin/consultant", icon: Je.a, children: [{ title: "Create", href: "/admin/consultant/create" }, { title: "Dashboard", href: "/admin/consultant/dashboard" }] }, { title: "Client", href: "/admin/client", icon: Je.a, children: [{ title: "Create", href: "/admin/client/create" }, { title: "Dashboard", href: "/admin/client/dashboard" }] }] }] },
                na = function() { return [{ title: "Pages", pages: [{ title: "Analytics", href: "/admin/analytics", icon: Ae.a }, { title: "Consultant", href: "/admin/consultant", icon: Je.a, children: [{ title: "Dashboard", href: "/admin/consultant/dashboard" }] }, { title: "Client", href: "/admin/client", icon: Je.a, children: [{ title: "Dashboard", href: "/admin/client/dashboard" }] }] }] },
                ra = function() { return [{ title: "Pages", pages: [{ title: "Consultant Dashboard", href: "/client/dashboard", icon: Ae.a }, { title: "Saved Consultants", href: "/client/saved", icon: Je.a }, { title: "Contact Sales", href: "/client/message", icon: Ge.a }] }] },
                ia = t(165),
                oa = t.n(ia),
                ca = function(e) {
                    var a = "Deactivate",
                        t = "/consultant/settings/" + e.id + "/deactivate";
                    return e.deactivate && (a = "Activate", t = "/consultant/settings/" + e.id + "/activate"), [{ title: "Pages", pages: [{ title: "Home", href: "/", icon: Ae.a }, { title: "Profile", href: "/consultant/profile", icon: Je.a, children: [{ title: "Overview", href: "/consultant/profile/" + e.id + "/overview" }, { title: "Documents", href: "/consultant/profile/" + e.id + "/documents" }, { title: "Projects", href: "/consultant/profile/" + e.id + "/projects" }, { title: "Resume", href: "/consultant/profile/" + e.id + "/resume" }] }] }, { title: "Support", pages: [{ title: "Settings", href: "/consultant/settings", icon: $e.a, children: [{ title: "General", href: "/consultant/settings/" + e.id + "/general" }, { title: "Notifications", href: "/consultant/settings/" + e.id + "/notifications" }, { title: a, href: t }] }] }]
                },
                la = function(e) { return [{ title: "Pages", pages: [{ title: "Home", href: "/", icon: Ae.a }, { title: "Profile", href: "/consultant/profile", icon: Je.a, children: [{ title: "Overview", href: "/consultant/profile/" + e.id + "/overview" }, { title: "Documents", href: "/consultant/profile/" + e.id + "/documents" }, { title: "Projects", href: "/consultant/profile/" + e.id + "/projects" }, { title: "Resume", href: "/consultant/profile/" + e.id + "/resume" }] }] }, { title: "Support", pages: [{ title: "Settings", href: "/consultant/settings", icon: $e.a, children: [{ title: "General", href: "/consultant/settings/" + e.id + "/general" }, { title: "Notifications", href: "/consultant/settings/" + e.id + "/notifications" }] }] }] },
                sa = t(103),
                ma = t(44),
                ua = Object(F.a)((function(e) { return { root: { height: "100%", overflowY: "auto" }, content: { padding: e.spacing(2) }, profile: { display: "flex", flexDirection: "column", alignItems: "center", minHeight: "fit-content" }, avatar: { width: 60, height: 60 }, name: { marginTop: e.spacing(1) }, divider: { marginTop: e.spacing(2) }, navigation: { marginTop: e.spacing(2) }, logoutIcon: { marginLeft: e.spacing(2) } } })),
                da = function(e) {
                    var a = e.user,
                        t = e.consultant_profile,
                        i = e.openMobile,
                        o = e.onMobileClose,
                        c = e.className,
                        l = Object(le.a)(e, ["user", "consultant_profile", "openMobile", "onMobileClose", "className"]),
                        s = ua(),
                        m = Object(fe.a)(),
                        u = Object(n.useState)(ea),
                        d = Object(ce.a)(u, 2),
                        p = d[0],
                        g = d[1],
                        h = "consultant" === a.role,
                        v = "admin" === a.role,
                        b = "member" === a.role,
                        f = "client" === a.role;
                    if (Object(n.useEffect)((function() { g(h ? aa(t) : f ? ra() : v ? t ? ca(t) : ta() : b ? t ? la(t) : na() : ea), i && o && o() }), [m.location.pathname]), !t && h) return null;
                    var E = function() { return Object(ma.a)(m) },
                        y = null,
                        j = null,
                        O = null,
                        N = null;
                    h ? (y = t.name ? t.name.toUpperCase() : "Edit Name", j = Object(sa.a)(t, t.photo.url), O = "/consultant/profile/" + t.id + "/overview", N = (t.city ? t.city : "Edit City") + ", " + (t.country ? t.country : "Edit Country")) : v ? (y = "Admin", j = "/images/avatar.png", O = "#", N = "") : b ? (y = "Member", j = "/images/avatar.png", O = "#", N = "") : f && (y = JSON.parse(localStorage.getItem("user")).username.toUpperCase(), j = "/images/avatar.png", O = "#", N = "");
                    var x = r.a.createElement("div", { className: s.content }, r.a.createElement("div", { className: s.profile }, r.a.createElement(ue.a, { alt: "Author", className: s.avatar, component: se.b, src: j, to: O }), r.a.createElement(de.a, { className: s.name, variant: "h4" }, y), r.a.createElement(de.a, { variant: "body2" }, N)), r.a.createElement(pe.a, { className: s.divider }), r.a.createElement("nav", { className: s.navigation }, p.map((function(e) { return r.a.createElement(Ee.h, { component: "div", key: e.title, pages: e.pages, title: e.title }) }))));
                    return r.a.createElement(n.Fragment, null, r.a.createElement(be.a, { lgUp: !0 }, r.a.createElement(ge.a, { anchor: "left", onClose: o, open: i, variant: "temporary" }, r.a.createElement("div", Object.assign({}, l, { className: Object(me.a)(s.root, c) }), x, r.a.createElement(he.a, { className: s.logoutButton, color: "inherit", onClick: E }, r.a.createElement(oa.a, { className: s.logoutIcon }), "\xa0Sign out")))), r.a.createElement(be.a, { mdDown: !0 }, r.a.createElement(ve.a, Object.assign({}, l, { className: Object(me.a)(s.root, c), elevation: 1, square: !0 }), x, r.a.createElement(he.a, { className: s.logoutButton, color: "inherit", onClick: E }, r.a.createElement(oa.a, { className: s.logoutIcon }), "\xa0Sign out"))))
                },
                pa = t(1035),
                ga = t(1036),
                ha = t(968),
                va = t(536),
                ba = t.n(va),
                fa = t(32),
                Ea = Object(F.a)((function(e) { return { root: { boxShadow: "none" }, flexGrow: { flexGrow: 1 }, search: { backgroundColor: "rgba(255,255,255, 0.1)", borderRadius: 4, flexBasis: 300, height: 36, padding: e.spacing(0, 2), display: "flex", alignItems: "center" }, searchIcon: { marginRight: e.spacing(2), color: "inherit" }, searchInput: { flexGrow: 1, color: "inherit", "& input::placeholder": { opacity: 1, color: "inherit" } }, searchPopper: { zIndex: e.zIndex.appBar + 100 }, searchPopperContent: { marginTop: e.spacing(1) }, trialButton: { marginLeft: e.spacing(2), color: e.palette.white, backgroundColor: h.a.green[600], "&:hover": { backgroundColor: h.a.green[900] } }, trialIcon: { marginRight: e.spacing(1) }, notificationsButton: { marginLeft: e.spacing(1) }, notificationsBadge: { backgroundColor: h.a.orange[600] }, logoutButton: { marginLeft: e.spacing(1) }, logoutIcon: { marginRight: e.spacing(1) }, logo: { height: "70px", width: "200px" }, logotext: { height: "50px", width: "100px" } } })),
                ya = function(e) {
                    var a = e.onOpenNavBarMobile,
                        t = e.className,
                        i = Object(le.a)(e, ["onOpenNavBarMobile", "className"]),
                        o = Ea(),
                        c = Object(fe.a)().history,
                        l = (Object(n.useRef)(null), Object(m.c)(), Object(n.useRef)(null)),
                        s = Object(n.useState)(!1),
                        u = Object(ce.a)(s, 2),
                        d = u[0],
                        p = u[1],
                        g = Object(n.useState)(!1),
                        h = Object(ce.a)(g, 2),
                        v = (h[0], h[1], Object(n.useState)("")),
                        b = Object(ce.a)(v, 2),
                        f = (b[0], b[1], Object(n.useState)([])),
                        E = Object(ce.a)(f, 2),
                        y = E[0],
                        j = E[1],
                        O = Object(n.useState)(!1),
                        N = Object(ce.a)(O, 2),
                        x = N[0],
                        k = N[1];
                    Object(n.useEffect)((function() {
                        var e = !0;
                        return fa.a.get("/api/account/notifications").then((function(a) { e && j(a.data.notifications) })),
                            function() { e = !1 }
                    }), []);
                    return r.a.createElement(pa.a, Object.assign({}, i, { className: Object(me.a)(o.root, t), color: "primary" }), r.a.createElement(ga.a, null, r.a.createElement(se.b, { to: "/" }, r.a.createElement("img", { className: Object(me.a)(o.logo, t), alt: "Logo", src: "/images/250x100 white.png" })), r.a.createElement("div", { className: o.flexGrow }), r.a.createElement(be.a, { mdDown: !0 }, r.a.createElement(he.a, { className: o.logoutButton, color: "inherit", onClick: function() { localStorage.clear(), sessionStorage.clear(), c.push("/auth/login") } }, r.a.createElement(oa.a, { className: o.logoutIcon }), "Sign out")), r.a.createElement(be.a, { lgUp: !0 }, r.a.createElement(ha.a, { color: "inherit", onClick: a }, r.a.createElement(ba.a, null)))), r.a.createElement(Ee.m, { onClose: function() { p(!1) }, open: d }), r.a.createElement(Ee.i, { anchorEl: l.current, notifications: y, onClose: function() { k(!1) }, open: x }))
                },
                ja = t(7),
                Oa = t.n(ja),
                Na = t(970),
                xa = (t(1037), t(971)),
                ka = t(1021),
                wa = t(1017),
                Ca = (t(1038), t(1039), t(537), Object(F.a)((function(e) { return { drawer: { width: 280 }, root: { backgroundColor: e.palette.white }, list: { padding: e.spacing(1, 3) }, listItemText: { marginRight: e.spacing(1) }, lastActivity: { whiteSpace: "nowrap" }, fab: { position: "fixed", bottom: 32, right: 32, zIndex: e.zIndex.drawer - 100 } } })), t(31)),
                Sa = t.n(Ca),
                Aa = t(43),
                _a = function(e, a) {
                    var t = { headers: Object(Aa.a)() },
                        n = "https://aeroconsultant.fr".toString() + "/consultant/landing.json";
                    Sa.a.get(n, t).then((function(e) { localStorage.setItem("consultant_profile_data", JSON.stringify(e.data.data.consultant)), localStorage.setItem("consultant_project", JSON.stringify(e.data.data.last_five_project)), a(e.data.data.consultant) })).catch((function(a) { return 401 === a.response.status ? function(e) { return Object(ma.a)(e) }(e) : e.history.push("/errors/error-500") }))
                },
                Ia = function(e, a) {
                    var t = { headers: Object(Aa.a)() },
                        n = "https://aeroconsultant.fr".toString() + "/consultant/" + a + "/email_by_id.json";
                    Sa.a.get(n, t).then((function(e) { localStorage.setItem("consultant_email", e.data.data.user.email) })).catch((function(a) { return 401 === a.response.status ? function(e) { return Object(ma.a)(e) }(e) : e.history.push("/errors/error-500") }))
                },
                Ta = function(e, a, t) {
                    var n = { headers: Object(Aa.a)() },
                        r = "https://aeroconsultant.fr".toString() + "/consultant/" + a + "/landing.json";
                    Sa.a.get(r, n).then((function(e) { localStorage.setItem("consultant_profile_data", JSON.stringify(e.data.data.consultant)), localStorage.setItem("consultant_project", JSON.stringify(e.data.data.last_five_project)), t(e.data.data.consultant) })).catch((function(a) { return 401 === a.response.status ? function(e) { return Object(ma.a)(e) }(e) : e.history.push("/errors/error-500") }))
                },
                Ba = Object(F.a)((function() { return { root: { height: "100%", width: "100%", display: "flex", flexDirection: "column", overflow: "hidden" }, topBar: { zIndex: 2, position: "relative" }, container: { display: "flex", flex: "1 1 auto", overflow: "hidden" }, navBar: { zIndex: 3, width: 256, minWidth: 256, flex: "0 0 auto" }, content: { overflowY: "auto", flex: "1 1 auto" } } }));

            function Pa(e) { localStorage.getItem("user") || (window.location.href = "/auth/login") }
            var Da = function(e) {
                    var a = e.route,
                        t = Ba(),
                        i = Object(n.useState)(!1),
                        o = Object(ce.a)(i, 2),
                        c = o[0],
                        l = o[1],
                        s = Object(fe.a)(),
                        m = Object(n.useState)(null),
                        u = Object(ce.a)(m, 2),
                        d = u[0],
                        g = u[1],
                        h = JSON.parse(localStorage.getItem("user"));
                    Pa();
                    var v = "consultant" === h.role,
                        b = "admin" === h.role,
                        f = "member" === h.role,
                        E = function() { var e = window.location.href.match("(consultant)/.*/.*/"); if (e && 2 === e.length) { return window.location.href.match("consultant/.*/(.*)/")[1] } return null }();
                    return Object(n.useEffect)((function() { Pa(), v ? (_a(s, g), localStorage.setItem("consultant_email", JSON.parse(localStorage.getItem("user")).email), console.log("Consultant Fetched from Dashboard Layout")) : (b || f) && E && (Ia(s, E), Ta(s, E, g), console.log("Consultant Fetched from Dashboard Layout")) }), []), !d && v || !d && E ? null : r.a.createElement("div", { className: t.root }, r.a.createElement(ya, { className: t.topBar, onOpenNavBarMobile: function() { l(!0) } }), r.a.createElement("div", { className: t.container }, r.a.createElement(da, { className: t.navBar, onMobileClose: function() { l(!1) }, openMobile: c, consultant_profile: d, user: h }), r.a.createElement("main", { className: t.content }, r.a.createElement(n.Suspense, { fallback: r.a.createElement(R.a, null) }, Object(p.a)(a.routes)))))
                },
                Fa = t(1027),
                Ra = t(1010),
                Ma = t(1022),
                La = t(1011),
                za = t(317),
                Ga = t(80),
                Ua = t(166),
                Ya = Object(F.a)((function() { return { root: { position: "relative" } } })),
                Wa = function(e) {
                    var a, t = e.data,
                        n = e.className,
                        i = Object(le.a)(e, ["data", "className"]),
                        o = Ya(),
                        c = Object(Ua.a)(),
                        l = { datasets: [{ data: [], backgroundColor: [], borderWidth: 8, borderColor: c.palette.white, hoverBorderColor: c.palette.white }], labels: [] },
                        s = Object(za.a)(t);
                    try {
                        for (s.s(); !(a = s.n()).done;) {
                            var m = a.value;
                            l.datasets[0].data.push(m.value), l.datasets[0].backgroundColor.push(m.color), l.labels.push(m.label)
                        }
                    } catch (d) { s.e(d) } finally { s.f() }
                    var u = {
                        responsive: !0,
                        maintainAspectRatio: !1,
                        animation: !1,
                        cutoutPercentage: 80,
                        legend: { display: !1 },
                        layout: { padding: 0 },
                        tooltips: {
                            enabled: !0,
                            mode: "index",
                            intersect: !1,
                            caretSize: 10,
                            yPadding: 20,
                            xPadding: 20,
                            borderWidth: 1,
                            borderColor: c.palette.divider,
                            backgroundColor: c.palette.white,
                            titleFontColor: c.palette.text.primary,
                            bodyFontColor: c.palette.text.secondary,
                            footerFontColor: c.palette.text.secondary,
                            callbacks: {
                                label: function(e, a) {
                                    var t = a.labels[e.index],
                                        n = a.datasets[0].data[e.index];
                                    return "".concat(t, ": ").concat(n, "%")
                                }
                            }
                        }
                    };
                    return r.a.createElement("div", Object.assign({}, i, { className: Object(me.a)(o.root, n) }), r.a.createElement(Ga.Doughnut, { data: l, options: u }))
                },
                Ha = Object(F.a)((function(e) { return { root: {}, content: { padding: 0, "&:last-child": { paddingBottom: 0 } }, chartContainer: { padding: e.spacing(3) }, chart: { height: 281 }, statsContainer: { display: "flex" }, statsItem: { flexGrow: 1, display: "flex", flexDirection: "column", justifyContent: "center", padding: e.spacing(3, 2), "&:not(:last-of-type)": { borderRight: "1px solid ".concat(e.palette.divider) } } } })),
                qa = function(e) {
                    var a = e.className,
                        t = Object(le.a)(e, ["className"]),
                        i = Ha(),
                        o = Object(n.useState)([]),
                        c = Object(ce.a)(o, 2),
                        l = c[0],
                        s = c[1];
                    return Object(n.useEffect)((function() {
                        var e = !0;
                        return fa.a.get("/api/dashboard/earnings").then((function(a) { e && s(a.data.earnings) })),
                            function() { e = !1 }
                    }), []), r.a.createElement(Ra.a, Object.assign({}, t, { className: Object(me.a)(i.root, a) }), r.a.createElement(Ma.a, { action: r.a.createElement(Ee.d, null), title: "Earnings Segmentation" }), r.a.createElement(pe.a, null), r.a.createElement(La.a, { className: i.content }, r.a.createElement("div", { className: i.chartContainer }, r.a.createElement(Wa, { className: i.chart, data: l })), r.a.createElement(pe.a, null), r.a.createElement("div", { className: i.statsContainer }, l.map((function(e) { return r.a.createElement("div", { className: i.statsItem, key: e.id }, r.a.createElement(de.a, { align: "center", component: "h6", gutterBottom: !0, variant: "overline" }, e.label), r.a.createElement(de.a, { align: "center", variant: "h4" }, e.value, "%")) })))))
                },
                Ja = t(46),
                Ka = t.n(Ja),
                Va = Object(F.a)((function() { return { root: { position: "relative" } } })),
                Za = function(e) {
                    var a = e.data,
                        t = e.labels,
                        n = e.className,
                        i = Object(le.a)(e, ["data", "labels", "className"]),
                        o = Va(),
                        c = Object(Ua.a)(),
                        l = { datasets: [{ label: "This year", backgroundColor: c.palette.primary.main, data: a.thisYear }, { label: "Last year", backgroundColor: h.a.grey[200], data: a.lastYear }], labels: t },
                        s = { responsive: !0, maintainAspectRatio: !1, animation: !1, cornerRadius: 20, legend: { display: !1 }, layout: { padding: 0 }, scales: { xAxes: [{ barThickness: 12, maxBarThickness: 10, barPercentage: .5, categoryPercentage: .5, gridLines: { display: !1, drawBorder: !1 }, ticks: { padding: 20, fontColor: c.palette.text.secondary } }], yAxes: [{ gridLines: { borderDash: [2], borderDashOffset: [2], color: c.palette.divider, drawBorder: !1, zeroLineBorderDash: [2], zeroLineBorderDashOffset: [2], zeroLineColor: c.palette.divider }, ticks: { padding: 20, fontColor: c.palette.text.secondary, beginAtZero: !0, min: 0, maxTicksLimit: 5, callback: function(e) { return e > 0 ? e + "K" : e } } }] }, tooltips: { enabled: !0, mode: "index", intersect: !1, caretSize: 10, yPadding: 20, xPadding: 20, borderWidth: 1, borderColor: c.palette.divider, backgroundColor: c.palette.white, titleFontColor: c.palette.text.primary, bodyFontColor: c.palette.text.secondary, footerFontColor: c.palette.text.secondary, callbacks: { title: function() {}, label: function(e) { var a = "This year: ".concat(e.yLabel); return e.yLabel > 0 && (a += "K"), a } } } };
                    return r.a.createElement("div", Object.assign({}, i, { className: Object(me.a)(o.root, n) }), r.a.createElement(Ga.Bar, { data: l, options: s }))
                },
                $a = Object(F.a)((function(e) { return { root: { height: "100%" }, content: { padding: 0 }, inner: { minWidth: 700 }, chart: { padding: e.spacing(4, 2, 0, 2), height: 400 } } })),
                Xa = function(e) {
                    var a = e.className,
                        t = Object(le.a)(e, ["className"]),
                        n = $a();
                    return r.a.createElement(Ra.a, Object.assign({}, t, { className: Object(me.a)(n.root, a) }), r.a.createElement(Ma.a, { action: r.a.createElement(Ee.d, null), title: "Financial Stats" }), r.a.createElement(pe.a, null), r.a.createElement(La.a, { className: n.content }, r.a.createElement(Ka.a, null, r.a.createElement("div", { className: n.inner }, r.a.createElement(Za, { className: n.chart, data: { thisYear: [18, 16, 5, 8, 3, 14, 14, 16, 17, 19, 18, 20], lastYear: [12, 11, 4, 6, 2, 9, 9, 10, 11, 12, 13, 13] }, labels: ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"] })))))
                },
                Qa = t(1040),
                et = t(1057),
                at = t(291),
                tt = t.n(at),
                nt = Object(F.a)((function(e) { return { root: {}, dates: { display: "flex", alignItems: "center", justifyContent: "flex-end" }, calendarTodayIcon: { marginRight: e.spacing(1) } } })),
                rt = function(e) {
                    var a = e.className,
                        t = Object(le.a)(e, ["className"]),
                        i = nt(),
                        o = Object(n.useState)(Oa()().subtract(7, "days")),
                        c = Object(ce.a)(o, 2),
                        l = c[0],
                        s = c[1],
                        m = Object(n.useState)(Oa()()),
                        u = Object(ce.a)(m, 2),
                        d = u[0],
                        p = u[1],
                        g = Object(n.useState)(null),
                        h = Object(ce.a)(g, 2),
                        v = h[0],
                        b = h[1],
                        f = Object(n.useState)(Oa()()),
                        E = Object(ce.a)(f, 2),
                        y = E[0],
                        j = E[1],
                        O = function(e) { b(e) },
                        N = Boolean(v);
                    return r.a.createElement("div", Object.assign({}, t, { className: Object(me.a)(i.root, a) }), r.a.createElement(Fa.a, { container: !0, justify: "space-between", spacing: 3 }, r.a.createElement(Fa.a, { item: !0, lg: 6, xs: 12 }, r.a.createElement(de.a, { component: "h2", gutterBottom: !0, variant: "overline" }, "Analytics"), r.a.createElement(de.a, { component: "h1", gutterBottom: !0, variant: "h3" }, "Finance Overview")), r.a.createElement(Fa.a, { className: i.dates, item: !0, lg: 6, xs: 12 }, r.a.createElement(Qa.a, { variant: "contained" }, r.a.createElement(he.a, { onClick: function() { return O("start") } }, r.a.createElement(tt.a, { className: i.calendarTodayIcon }), l.format("DD MM YYYY")), r.a.createElement(he.a, { onClick: function() { return O("end") } }, r.a.createElement(tt.a, { className: i.calendarTodayIcon }), d.format("DD MM YYYY"))))), r.a.createElement(et.a, { maxDate: Oa()(), onAccept: function(e) { j(Oa()()), "start" === v ? (s(e), Oa()(e).isAfter(d) && p(e)) : (p(e), Oa()(e).isBefore(l) && s(e)), b(null) }, onChange: function(e) { j(e) }, onClose: function() { j(Oa()()), b(null) }, open: N, style: { display: "none" }, value: y, variant: "dialog" }))
                };
            rt.defaultProps = {};
            var it = rt,
                ot = t(1045),
                ct = t(1046),
                lt = t(1047),
                st = t(1048),
                mt = t(1023),
                ut = t(55),
                dt = t.n(ut),
                pt = Object(F.a)((function(e) { return { root: { width: 56, height: 56 }, circle1: { stroke: "rgba(0,0,0,0.05)", fill: "none", strokeWidth: 4 }, circle2: { stroke: e.palette.primary.main, fill: "none", strokeWidth: 4, animation: "$progress 1s ease-out forwards" }, "@keyframes progress": { "0%": { strokeDasharray: "0 100" } } } })),
                gt = function(e) {
                    var a = e.value,
                        t = e.className,
                        n = Object(le.a)(e, ["value", "className"]),
                        i = pt();
                    return r.a.createElement("div", Object.assign({}, n, { className: Object(me.a)(i.root, t) }), r.a.createElement("svg", { viewBox: "0 0 36 36" }, r.a.createElement("path", { className: i.circle1, d: "M18 2.0845 a 15.9155 15.9155 0 0 1 0 31.831 a 15.9155 15.9155 0 0 1 0 -31.831", strokeDasharray: "100, 100" }), r.a.createElement("path", { className: i.circle2, d: "M18 2.0845 a 15.9155 15.9155 0 0 1 0 31.831 a 15.9155 15.9155 0 0 1 0 -31.831", strokeDasharray: "".concat(a, ", 100") })))
                },
                ht = Object(F.a)((function(e) { return { root: {}, content: { padding: 0, "&:last-child": { paddingBottom: 0 } }, inner: { minWidth: 700 }, details: { display: "flex", alignItems: "center" }, image: { marginRight: e.spacing(2), flexShrink: 0, height: 56, width: 56 }, subscriptions: { fontWeight: e.typography.fontWeightMedium }, price: { whiteSpace: "nowrap" }, value: { color: h.a.green[600], fontWeight: e.typography.fontWeightMedium }, conversion: { display: "flex", alignItems: "center", justifyContent: "flex-end" }, conversionStats: { whiteSpace: "nowrap", marginRight: e.spacing(2) }, actions: { justifyContent: "flex-end" }, arrowForwardIcon: { marginLeft: e.spacing(1) } } })),
                vt = function(e) {
                    var a = e.className,
                        t = Object(le.a)(e, ["className"]),
                        i = ht(),
                        o = Object(n.useState)([]),
                        c = Object(ce.a)(o, 2),
                        l = c[0],
                        s = c[1];
                    return Object(n.useEffect)((function() {
                        var e = !0;
                        return fa.a.get("/api/dashboard/profitable-products").then((function(a) { e && s(a.data.products) })),
                            function() { e = !1 }
                    }), []), r.a.createElement(Ra.a, Object.assign({}, t, { className: Object(me.a)(i.root, a) }), r.a.createElement(Ma.a, { action: r.a.createElement(Ee.d, null), title: "Most Profitable Products" }), r.a.createElement(pe.a, null), r.a.createElement(La.a, { className: i.content }, r.a.createElement(Ka.a, null, r.a.createElement("div", { className: i.inner }, r.a.createElement(ot.a, null, r.a.createElement(ct.a, null, l.map((function(e) { return r.a.createElement(lt.a, { hover: !0, key: e.id }, r.a.createElement(st.a, null, r.a.createElement("div", { className: i.details }, r.a.createElement("img", { alt: "Product", className: i.image, src: e.image }), r.a.createElement("div", null, r.a.createElement(de.a, { variant: "h6" }, e.name), r.a.createElement(de.a, { variant: "subtitle2" }, r.a.createElement("span", { className: i.subscriptions }, e.subscriptions), " ", "Active")))), r.a.createElement(st.a, null, r.a.createElement(de.a, { variant: "h6" }, "Price"), r.a.createElement(de.a, { className: i.price, variant: "subtitle2" }, r.a.createElement("span", { className: i.value }, e.currency, e.price), " ", "monthly")), r.a.createElement(st.a, null, r.a.createElement("div", { className: i.conversion }, r.a.createElement("div", { className: i.conversionStats }, r.a.createElement(de.a, { align: "right", variant: "h6" }, e.progress, "%"), r.a.createElement(de.a, { variant: "subtitle2" }, "Conversion Rate")), r.a.createElement(gt, { value: e.progress })))) }))))))), r.a.createElement(pe.a, null), r.a.createElement(mt.a, { className: i.actions }, r.a.createElement(he.a, { color: "primary", component: se.b, size: "small", to: "#", variant: "text" }, "See all", r.a.createElement(dt.a, { className: i.arrowForwardIcon }))))
                },
                bt = Object(F.a)((function(e) { var a; return { root: {}, content: { padding: 0 }, item: (a = { padding: e.spacing(3), textAlign: "center" }, Object(D.a)(a, e.breakpoints.up("md"), { "&:not(:last-of-type)": { borderRight: "1px solid ".concat(e.palette.divider) } }), Object(D.a)(a, e.breakpoints.down("sm"), { "&:not(:last-of-type)": { borderBottom: "1px solid ".concat(e.palette.divider) } }), a), valueContainer: { display: "flex", alignItems: "center", justifyContent: "center" }, label: { marginLeft: e.spacing(1) } } })),
                ft = function(e) {
                    var a = e.className,
                        t = Object(le.a)(e, ["className"]),
                        n = bt(),
                        i = "854,355.00",
                        o = "373,250.50",
                        c = "123,532.00",
                        l = "26,000";
                    return r.a.createElement(Ra.a, Object.assign({}, t, { className: Object(me.a)(n.root, a) }), r.a.createElement(Fa.a, { alignItems: "center", container: !0, justify: "space-between" }, r.a.createElement(Fa.a, { className: n.item, item: !0, md: 3, sm: 6, xs: 12 }, r.a.createElement(de.a, { component: "h2", gutterBottom: !0, variant: "overline" }, "Total Income"), r.a.createElement("div", { className: n.valueContainer }, r.a.createElement(de.a, { variant: "h3" }, "$", i), r.a.createElement(Ee.f, { className: n.label, color: h.a.green[600], variant: "contained" }, "+25%"))), r.a.createElement(Fa.a, { className: n.item, item: !0, md: 3, sm: 6, xs: 12 }, r.a.createElement(de.a, { component: "h2", gutterBottom: !0, variant: "overline" }, "Total Expanses"), r.a.createElement("div", { className: n.valueContainer }, r.a.createElement(de.a, { variant: "h3" }, "$", o), r.a.createElement(Ee.f, { className: n.label, color: h.a.green[600], variant: "contained" }, "+12%"))), r.a.createElement(Fa.a, { className: n.item, item: !0, md: 3, sm: 6, xs: 12 }, r.a.createElement(de.a, { component: "h2", gutterBottom: !0, variant: "overline" }, "Net Profit"), r.a.createElement("div", { className: n.valueContainer }, r.a.createElement(de.a, { variant: "h3" }, c), r.a.createElement(Ee.f, { className: n.label, color: h.a.red[600], variant: "contained" }, "-20%"))), r.a.createElement(Fa.a, { className: n.item, item: !0, md: 3, sm: 6, xs: 12 }, r.a.createElement(de.a, { component: "h2", gutterBottom: !0, variant: "overline" }, "Active Subscriptions"), r.a.createElement("div", { className: n.valueContainer }, r.a.createElement(de.a, { variant: "h3" }, l)))))
                },
                Et = Object(F.a)((function(e) { return { root: { display: "flex", flexDirection: "column" }, content: { flexGrow: 1, padding: 0 }, avatar: { fontSize: 14, fontWeight: e.typography.fontWeightBold, color: e.palette.white }, actions: { justifyContent: "flex-end" }, arrowForwardIcon: { marginLeft: e.spacing(1) } } })),
                yt = function(e) {
                    var a = e.className,
                        t = Object(le.a)(e, ["className"]),
                        i = Et(),
                        o = Object(n.useState)([]),
                        c = Object(ce.a)(o, 2),
                        l = c[0],
                        s = c[1];
                    return Object(n.useEffect)((function() {
                        var e = !0;
                        return fa.a.get("/api/dashboard/top-referrals").then((function(a) { e && s(a.data.referrals) })),
                            function() { e = !1 }
                    }), []), r.a.createElement(Ra.a, Object.assign({}, t, { className: Object(me.a)(i.root, a) }), r.a.createElement(Ma.a, { action: r.a.createElement(Ee.d, null), title: "Top Referrals" }), r.a.createElement(pe.a, null), r.a.createElement(La.a, { className: i.content }, r.a.createElement(Na.a, { disablePadding: !0 }, l.map((function(e, a) { return r.a.createElement(xa.a, { divider: a < l.length - 1, key: e.id }, r.a.createElement(ka.a, null, r.a.createElement(ue.a, { className: i.avatar, size: "small", style: { backgroundColor: e.color } }, e.initials)), r.a.createElement(wa.a, { primary: e.name }), r.a.createElement(de.a, { variant: "subtitle2" }, e.value)) })))), r.a.createElement(pe.a, null), r.a.createElement(mt.a, { className: i.actions }, r.a.createElement(he.a, { color: "primary", component: se.b, size: "small", to: "#", variant: "text" }, "See all", r.a.createElement(dt.a, { className: i.arrowForwardIcon }))))
                },
                jt = t(1015),
                Ot = t(83),
                Nt = Object(F.a)((function(e) { return { root: {}, statsContainer: { display: "flex" }, statsItem: { padding: e.spacing(3), flexGrow: 1, "&:first-of-type": { borderRight: "1px solid ".concat(e.palette.divider) } }, content: { padding: 0 }, date: { whiteSpace: "nowrap" } } })),
                xt = function(e) {
                    var a = e.className,
                        t = Object(le.a)(e, ["className"]),
                        i = Nt(),
                        o = Object(n.useState)([]),
                        c = Object(ce.a)(o, 2),
                        l = c[0],
                        s = c[1];
                    return Object(n.useEffect)((function() {
                        var e = !0;
                        return fa.a.get("/api/dashboard/customer-activity").then((function(a) { e && s(a.data.customers) })),
                            function() { e = !1 }
                    }), []), r.a.createElement(Ra.a, Object.assign({}, t, { className: Object(me.a)(i.root, a) }), r.a.createElement(Ma.a, { title: "Customer Activity" }), r.a.createElement(pe.a, null), r.a.createElement("div", { className: i.statsContainer }, r.a.createElement("div", { className: i.statsItem }, r.a.createElement(de.a, { align: "center", component: "h4", gutterBottom: !0, variant: "overline" }, "Registered"), r.a.createElement(de.a, { align: "center", variant: "h3" }, "15,245")), r.a.createElement(pe.a, null), r.a.createElement("div", { className: i.statsItem }, r.a.createElement(de.a, { align: "center", component: "h4", gutterBottom: !0, variant: "overline" }, "Online"), r.a.createElement(de.a, { align: "center", variant: "h3" }, "357"))), r.a.createElement(pe.a, null), r.a.createElement(La.a, { className: i.content }, r.a.createElement(Na.a, { disablePadding: !0 }, l.map((function(e, a) { return r.a.createElement(xa.a, { divider: a < l.length - 1, key: e.id }, r.a.createElement(ka.a, null, r.a.createElement(ue.a, { alt: "Customer", component: se.b, src: e.author.avatar, to: "/management/customers/1" }, Object(Ot.a)(e.author.name))), r.a.createElement(wa.a, { disableTypography: !0, primary: r.a.createElement(de.a, { component: se.b, to: "/management/customers/1", variant: "h6" }, e.author.name), secondary: r.a.createElement(de.a, { variant: "body2" }, e.description, " |", " ", "payment" === e.type && r.a.createElement(jt.a, { color: "inherit", component: se.b, to: "#" }, "See invoice")) }), r.a.createElement(de.a, { className: i.date, variant: "body2" }, Oa()(e.created_at).fromNow())) })))))
                },
                kt = t(1049),
                wt = t(1012),
                Ct = t(1065),
                St = Object(F.a)((function(e) { return { root: {}, content: { padding: 0 }, inner: { minWidth: 700 }, progressContainer: { padding: e.spacing(3), display: "flex", justifyContent: "center" }, actions: { justifyContent: "flex-end" }, arrowForwardIcon: { marginLeft: e.spacing(1) } } })),
                At = { complete: h.a.green[600], pending: h.a.orange[600], rejected: h.a.red[600] },
                _t = function(e) {
                    var a = e.className,
                        t = Object(le.a)(e, ["className"]),
                        i = St(),
                        o = Object(n.useState)(null),
                        c = Object(ce.a)(o, 2),
                        l = c[0],
                        s = c[1];
                    return Object(n.useEffect)((function() {
                        var e = !0;
                        return fa.a.get("/api/dashboard/latest-orders").then((function(a) { e && s(a.data.orders) })),
                            function() { e = !1 }
                    }), []), r.a.createElement(Ra.a, Object.assign({}, t, { className: Object(me.a)(i.root, a) }), r.a.createElement(Ma.a, { action: r.a.createElement(Ee.d, null), title: "Latest Orders" }), r.a.createElement(pe.a, null), r.a.createElement(La.a, { className: i.content }, r.a.createElement(Ka.a, { options: { suppressScrollY: !0 } }, r.a.createElement("div", { className: i.inner }, l && r.a.createElement(ot.a, null, r.a.createElement(kt.a, null, r.a.createElement(lt.a, null, r.a.createElement(st.a, { sortDirection: "desc" }, r.a.createElement(wt.a, { enterDelay: 300, title: "Sort" }, r.a.createElement(Ct.a, { active: !0, direction: "desc" }, "Date"))), r.a.createElement(st.a, null, "Customer"), r.a.createElement(st.a, null, "Items"), r.a.createElement(st.a, null, "Total"), r.a.createElement(st.a, null, "Status"), r.a.createElement(st.a, { align: "right" }, "Actions"))), r.a.createElement(ct.a, null, l.map((function(e) { return r.a.createElement(lt.a, { hover: !0, key: e.id }, r.a.createElement(st.a, null, e.ref), r.a.createElement(st.a, null, e.customer.name), r.a.createElement(st.a, null, e.items), r.a.createElement(st.a, { className: i.totalCell }, e.currency, " ", e.value), r.a.createElement(st.a, null, r.a.createElement(Ee.f, { color: At[e.status], variant: "outlined" }, e.status)), r.a.createElement(st.a, { align: "right" }, r.a.createElement(he.a, { color: "primary", component: se.b, size: "small", to: "management/orders/1", variant: "outlined" }, "View"))) }))))))), r.a.createElement(mt.a, { className: i.actions }, r.a.createElement(he.a, { color: "primary", component: se.b, size: "small", to: "management/orders", variant: "text" }, "See all", r.a.createElement(dt.a, { className: i.arrowForwardIcon }))))
                },
                It = Object(F.a)((function(e) { return { root: { padding: e.spacing(3) }, container: { "& > *": { height: "100%" } } } })),
                Tt = function() { var e = It(); return r.a.createElement(Ee.j, { className: e.root, title: "Analytics Dashboard" }, r.a.createElement(it, null), r.a.createElement(Fa.a, { className: e.container, container: !0, spacing: 3 }, r.a.createElement(Fa.a, { item: !0, xs: 12 }, r.a.createElement(ft, null)), r.a.createElement(Fa.a, { item: !0, lg: 8, xl: 9, xs: 12 }, r.a.createElement(Xa, null)), r.a.createElement(Fa.a, { item: !0, lg: 4, xl: 3, xs: 12 }, r.a.createElement(qa, null)), r.a.createElement(Fa.a, { item: !0, lg: 8, xs: 12 }, r.a.createElement(_t, null)), r.a.createElement(Fa.a, { item: !0, lg: 4, xs: 12 }, r.a.createElement(xt, null)), r.a.createElement(Fa.a, { item: !0, lg: 8, xs: 12 }, r.a.createElement(vt, null)), r.a.createElement(Fa.a, { item: !0, lg: 4, xs: 12 }, r.a.createElement(yt, null)))) },
                Bt = Object(F.a)((function(e) { return { root: {}, dates: { display: "flex", alignItems: "center", justifyContent: "flex-end" }, startDateButton: { marginRight: e.spacing(1) }, endDateButton: { marginLeft: e.spacing(1) }, calendarTodayIcon: { marginRight: e.spacing(1) } } })),
                Pt = function(e) {
                    var a = e.className,
                        t = Object(le.a)(e, ["className"]),
                        n = Bt();
                    return r.a.createElement("div", Object.assign({}, t, { className: Object(me.a)(n.root, a) }), r.a.createElement(de.a, { component: "h2", gutterBottom: !0, variant: "overline" }, "Home"), r.a.createElement(de.a, { component: "h1", gutterBottom: !0, variant: "h3" }, "Good Morning, ", "Shen Zhi"), r.a.createElement(de.a, { variant: "subtitle1" }, "Here's what's happening"))
                };
            Pt.defaultProps = {};
            var Dt = Pt,
                Ft = Object(F.a)((function(e) { return { root: {}, content: { padding: 0 }, inner: { minWidth: 900 }, author: { display: "flex", alignItems: "center" }, avatar: { marginRight: e.spacing(1) }, tags: { "& > * + *": { marginLeft: e.spacing(1) } }, actions: { justifyContent: "flex-end" }, arrowForwardIcon: { marginLeft: e.spacing(1) } } })),
                Rt = function(e) {
                    var a = e.className,
                        t = Object(le.a)(e, ["className"]),
                        i = Ft(),
                        o = Object(n.useState)([]),
                        c = Object(ce.a)(o, 2),
                        l = c[0],
                        s = c[1];
                    return Object(n.useEffect)((function() {
                        var e = !0;
                        return fa.a.get("/api/dashboard/latest-projects").then((function(a) { e && s(a.data.projects) })),
                            function() { e = !1 }
                    }), []), r.a.createElement(Ra.a, Object.assign({}, t, { className: Object(me.a)(i.root, a) }), r.a.createElement(Ma.a, { action: r.a.createElement(Ee.d, null), title: "Latest projects" }), r.a.createElement(pe.a, null), r.a.createElement(La.a, { className: i.content }, r.a.createElement(Ka.a, { options: { suppressScrollY: !0 } }, r.a.createElement("div", { className: i.inner }, r.a.createElement(ot.a, null, r.a.createElement(kt.a, null, r.a.createElement(lt.a, null, r.a.createElement(st.a, { sortDirection: "desc" }, r.a.createElement(wt.a, { enterDelay: 300, title: "Sort" }, r.a.createElement(Ct.a, { active: !0, direction: "desc" }, "Name"))), r.a.createElement(st.a, null, "Owner"), r.a.createElement(st.a, null, "Amount"), r.a.createElement(st.a, null, "Tags"), r.a.createElement(st.a, { align: "right" }, "Actions"))), r.a.createElement(ct.a, null, l.map((function(e) { return r.a.createElement(lt.a, { hover: !0, key: e.id }, r.a.createElement(st.a, null, e.title), r.a.createElement(st.a, null, r.a.createElement("div", { className: i.author }, r.a.createElement(ue.a, { alt: "Author", className: i.avatar, src: e.author.avatar }, Object(Ot.a)(e.author.name)), e.author.name)), r.a.createElement(st.a, null, e.currency, e.price), r.a.createElement(st.a, null, r.a.createElement("div", { className: i.tags }, e.tags.map((function(e) { return r.a.createElement(Ee.f, { color: e.color, key: e.text }, e.text) })))), r.a.createElement(st.a, { align: "right" }, r.a.createElement(he.a, { color: "primary", component: se.b, size: "small", to: "/projects/1/overview", variant: "outlined" }, "View"))) }))))))), r.a.createElement(mt.a, { className: i.actions }, r.a.createElement(he.a, { color: "primary", component: se.b, size: "small", to: "/management/projects", variant: "text" }, "See all", r.a.createElement(dt.a, { className: i.arrowForwardIcon }))))
                },
                Mt = t(538),
                Lt = t.n(Mt),
                zt = t(62),
                Gt = Object(F.a)((function(e) { return { root: { padding: e.spacing(3), display: "flex", alignItems: "center", justifyContent: "space-between" }, details: { display: "flex", alignItems: "center", flexWrap: "wrap" }, label: { marginLeft: e.spacing(1) }, avatar: { backgroundImage: zt.a.blue, height: 48, width: 48 } } })),
                Ut = function(e) {
                    var a = e.className,
                        t = Object(le.a)(e, ["className"]),
                        n = Gt(),
                        i = "12",
                        o = "-10%";
                    return r.a.createElement(Ra.a, Object.assign({}, t, { className: Object(me.a)(n.root, a) }), r.a.createElement("div", null, r.a.createElement(de.a, { component: "h3", gutterBottom: !0, variant: "overline" }, "New projects"), r.a.createElement("div", { className: n.details }, r.a.createElement(de.a, { variant: "h3" }, i), r.a.createElement(Ee.f, { className: n.label, color: h.a.red[600], variant: "outlined" }, o))), r.a.createElement(ue.a, { className: n.avatar }, r.a.createElement(Lt.a, null)))
                },
                Yt = t(207),
                Wt = t.n(Yt),
                Ht = Object(F.a)((function(e) { return { root: { color: e.palette.white, backgroundColor: e.palette.primary.main, padding: e.spacing(3), display: "flex", alignItems: "center", justifyContent: "space-between" }, details: { display: "flex", alignItems: "center", flexWrap: "wrap" }, avatar: { backgroundColor: e.palette.white, color: e.palette.primary.main, height: 48, width: 48 } } })),
                qt = function(e) {
                    var a = e.className,
                        t = Object(le.a)(e, ["className"]),
                        n = Ht(),
                        i = "25.50",
                        o = "$";
                    return r.a.createElement(Ra.a, Object.assign({}, t, { className: Object(me.a)(n.root, a) }), r.a.createElement("div", null, r.a.createElement(de.a, { color: "inherit", component: "h3", gutterBottom: !0, variant: "overline" }, "Roi per customer"), r.a.createElement("div", { className: n.details }, r.a.createElement(de.a, { color: "inherit", variant: "h3" }, o, i))), r.a.createElement(ue.a, { className: n.avatar, color: "inherit" }, r.a.createElement(Wt.a, null)))
                },
                Jt = t(1016),
                Kt = t(539),
                Vt = t.n(Kt),
                Zt = Object(F.a)((function(e) { return { root: {}, critical: { "& $indicator": { borderColor: h.a.red[600] } }, indicator: { height: 12, width: 12, borderWidth: 4, borderStyle: "solid", borderColor: h.a.grey[100], borderRadius: "50%" }, viewButton: { marginLeft: e.spacing(2) } } })),
                $t = function(e) {
                    var a = e.task,
                        t = e.className,
                        n = Object(le.a)(e, ["task", "className"]),
                        i = Zt(),
                        o = "N/A",
                        c = !1;
                    if (a.deadline) {
                        var l = Oa()(),
                            s = Oa()(a.deadline);
                        s.isAfter(l) && s.diff(l, "day") < 3 && (o = s.diff(l, "day") + " days remaining", c = !0)
                    }
                    return r.a.createElement(xa.a, Object.assign({}, n, { className: Object(me.a)(i.root, Object(D.a)({}, i.critical, c), t) }), r.a.createElement(Jt.a, null, r.a.createElement("span", { className: i.indicator })), r.a.createElement(wa.a, { className: i.listItemText, primary: a.title, primaryTypographyProps: { variant: "h6", noWrap: !0 }, secondary: o }), r.a.createElement(Ee.u, { avatars: a.members, limit: 3 }), r.a.createElement(wt.a, { title: "View task" }, r.a.createElement(ha.a, { className: i.viewButton, edge: "end", size: "small" }, r.a.createElement(Vt.a, null))))
                },
                Xt = Object(F.a)((function(e) { return { root: {}, content: { padding: 0 }, inner: { minWidth: 400 }, actions: { justifyContent: "flex-end" }, arrowForwardIcon: { marginLeft: e.spacing(1) } } })),
                Qt = function(e) {
                    var a = e.className,
                        t = Object(le.a)(e, ["className"]),
                        i = Xt(),
                        o = Object(n.useState)([]),
                        c = Object(ce.a)(o, 2),
                        l = c[0],
                        s = c[1];
                    return Object(n.useEffect)((function() {
                        var e = !0;
                        return fa.a.get("/api/tasks").then((function(a) { e && s(a.data.tasks) })),
                            function() { e = !1 }
                    }), []), r.a.createElement(Ra.a, Object.assign({}, t, { className: Object(me.a)(i.root, a) }), r.a.createElement(Ma.a, { action: r.a.createElement(Ee.d, null), title: "Team Tasks" }), r.a.createElement(pe.a, null), r.a.createElement(La.a, { className: i.content }, r.a.createElement(Ka.a, null, r.a.createElement("div", { className: i.inner }, r.a.createElement(Na.a, null, l.map((function(e, a) { return r.a.createElement($t, { divider: a < l.length - 1, key: e.id, task: e }) })))))), r.a.createElement(pe.a, null), r.a.createElement(mt.a, { className: i.actions }, r.a.createElement(he.a, { color: "primary", component: se.b, size: "small", to: "/kanban-board", variant: "text" }, "See all", r.a.createElement(dt.a, { className: i.arrowForwardIcon }))))
                },
                en = Object(F.a)((function(e) { return { root: { padding: e.spacing(3), display: "flex", alignItems: "center", justifyContent: "space-between" }, details: { display: "flex", alignItems: "center", flexWrap: "wrap" }, label: { marginLeft: e.spacing(1) }, avatar: { backgroundImage: zt.a.green, height: 48, width: 48 } } })),
                an = function(e) {
                    var a = e.className,
                        t = Object(le.a)(e, ["className"]),
                        n = en(),
                        i = "24,000",
                        o = "$",
                        c = "+4.5%";
                    return r.a.createElement(Ra.a, Object.assign({}, t, { className: Object(me.a)(n.root, a) }), r.a.createElement("div", null, r.a.createElement(de.a, { component: "h3", gutterBottom: !0, variant: "overline" }, "Todays money"), r.a.createElement("div", { className: n.details }, r.a.createElement(de.a, { variant: "h3" }, o, i), r.a.createElement(Ee.f, { className: n.label, color: h.a.green[600], variant: "outlined" }, c))), r.a.createElement(ue.a, { className: n.avatar }, r.a.createElement(Wt.a, null)))
                },
                tn = t(540),
                nn = t.n(tn),
                rn = Object(F.a)((function(e) { return { root: { padding: e.spacing(3), display: "flex", alignItems: "center", justifyContent: "space-between" }, content: { flexGrow: 1 }, details: { display: "flex", alignItems: "center", flexWrap: "wrap" }, progress: { margin: e.spacing(0, 1), flexGrow: 1 }, avatar: { backgroundImage: zt.a.orange, height: 48, width: 48 } } })),
                on = function(e) {
                    var a = e.className,
                        t = Object(le.a)(e, ["className"]),
                        n = rn(),
                        i = 97;
                    return r.a.createElement(Ra.a, Object.assign({}, t, { className: Object(me.a)(n.root, a) }), r.a.createElement("div", { className: n.content }, r.a.createElement(de.a, { component: "h3", gutterBottom: !0, variant: "overline" }, "System Health"), r.a.createElement("div", { className: n.details }, r.a.createElement(de.a, { variant: "h3" }, i, "%"), r.a.createElement(R.a, { className: n.progress, value: i, variant: "determinate" }))), r.a.createElement(ue.a, { className: n.avatar }, r.a.createElement(nn.a, null)))
                },
                cn = t(111),
                ln = Object(F.a)((function() { return { root: { position: "relative" } } })),
                sn = function(e) {
                    var a = e.data,
                        t = e.labels,
                        n = e.className,
                        i = Object(le.a)(e, ["data", "labels", "className"]),
                        o = ln(),
                        c = Object(Ua.a)(),
                        l = { datasets: [{ label: "Views", backgroundColor: "rgba(255,255,255,0.4)", data: a }], labels: t },
                        s = { responsive: !0, maintainAspectRatio: !1, animation: !1, cornerRadius: 20, legend: { display: !1 }, layout: { padding: 0 }, scales: { xAxes: [{ stacked: !1, barThickness: 12, maxBarThickness: 10, barPercentage: .9, categoryPercentage: 1, gridLines: { display: !1, drawBorder: !1 }, ticks: { display: !1 } }], yAxes: [{ stacked: !0, gridLines: { display: !1, drawBorder: !1 }, ticks: { beginAtZero: !0, display: !1 } }] }, tooltips: { enabled: !0, mode: "index", intersect: !1, caretSize: 10, yPadding: 20, xPadding: 20, borderWidth: 1, borderColor: c.palette.divider, backgroundColor: c.palette.white, titleFontColor: c.palette.text.primary, bodyFontColor: c.palette.text.secondary, footerFontColor: c.palette.text.secondary, callbacks: { legend: function() {}, title: function() {}, label: function(e) { var a = "Views: ".concat(e.yLabel); return a } } } };
                    return r.a.createElement("div", Object.assign({}, i, { className: Object(me.a)(o.root, n) }), r.a.createElement(Ga.Bar, { data: l, options: s }))
                },
                mn = Object(F.a)((function(e) { return { root: { backgroundImage: zt.a.indigo, color: e.palette.primary.contrastText }, content: { paddingTop: 0 }, itemDivider: { borderBottomColor: "rgba(255,255,255,0.2)" }, actions: { paddingTop: 0, justifyContent: "flex-end" }, arrowForwardIcon: { marginLeft: e.spacing(1) } } }));
            var un = function(e) {
                    var a = e.className,
                        t = Object(le.a)(e, ["className"]),
                        i = mn(),
                        o = Object(n.useState)([163, 166, 161, 159, 99, 163, 173, 166, 167, 183, 176, 172]),
                        c = Object(ce.a)(o, 2),
                        l = c[0],
                        s = c[1];
                    Object(n.useEffect)((function() {
                        var e = !0;
                        return setInterval((function() {
                                e && s((function(e) { var a = Object(cn.a)(e); return a.shift(), a.push(0), a })), setTimeout((function() {
                                    e && s((function(e) {
                                        var a, t, n = Object(cn.a)(e),
                                            r = (a = 100, t = 200, a = Math.ceil(a), t = Math.floor(t), Math.floor(Math.random() * (t - a + 1)) + a);
                                        return n.pop(), n.push(r), n
                                    }))
                                }), 500)
                            }), 2e3),
                            function() { e = !1 }
                    }), []);
                    var m = l.map((function(e, a) { return a }));
                    return r.a.createElement(Ra.a, Object.assign({}, t, { className: Object(me.a)(i.root, a) }), r.a.createElement(Ma.a, { action: r.a.createElement(de.a, { color: "inherit", gutterBottom: !0, variant: "h3" }, 0 === l[l.length - 1] ? l[l.length - 2] : l[l.length - 1]), subheader: "Page views per second", subheaderTypographyProps: { color: "inherit" }, title: "Active users", titleTypographyProps: { color: "inherit" } }), r.a.createElement(La.a, { className: i.content }, r.a.createElement(sn, { data: l, labels: m }), r.a.createElement(Na.a, null, [{ pathname: "/projects", views: "24" }, { pathname: "/chat", views: "21" }, { pathname: "/cart", views: "15" }, { pathname: "/cart/checkout", views: "8" }].map((function(e) { return r.a.createElement(xa.a, { classes: { divider: i.itemDivider }, divider: !0, key: e.pathname }, r.a.createElement(wa.a, { primary: e.pathname, primaryTypographyProps: { color: "inherit", variant: "body1" } }), r.a.createElement(de.a, { color: "inherit" }, e.views)) })))), r.a.createElement(mt.a, { className: i.actions }, r.a.createElement(he.a, { color: "inherit", component: se.b, size: "small", to: "#", variant: "text" }, "See all", r.a.createElement(dt.a, { className: i.arrowForwardIcon }))))
                },
                dn = t(222),
                pn = Object(F.a)((function() { return { root: { position: "relative" } } })),
                gn = function(e) {
                    var a = e.className,
                        t = e.data,
                        n = e.labels,
                        i = Object(le.a)(e, ["className", "data", "labels"]),
                        o = pn(),
                        c = Object(Ua.a)(),
                        l = { responsive: !0, maintainAspectRatio: !1, animation: !1, legend: { display: !1 }, layout: { padding: 0 }, scales: { xAxes: [{ gridLines: { display: !1, drawBorder: !1 }, ticks: { padding: 20, fontColor: c.palette.text.secondary } }], yAxes: [{ gridLines: { borderDash: [2], borderDashOffset: [2], color: c.palette.divider, drawBorder: !1, zeroLineBorderDash: [2], zeroLineBorderDashOffset: [2], zeroLineColor: c.palette.divider }, ticks: { padding: 20, fontColor: c.palette.text.secondary, beginAtZero: !0, min: 0, maxTicksLimit: 7, callback: function(e) { return e > 0 ? e + "K" : e } } }] }, tooltips: { enabled: !0, mode: "index", intersect: !1, caretSize: 10, yPadding: 20, xPadding: 20, borderWidth: 1, borderColor: c.palette.divider, backgroundColor: c.palette.white, titleFontColor: c.palette.text.primary, bodyFontColor: c.palette.text.secondary, footerFontColor: c.palette.text.secondary, callbacks: { title: function() {}, label: function(e) { var a = "Income: ".concat(e.yLabel); return e.yLabel > 0 && (a += "K"), a } } } };
                    return r.a.createElement("div", Object.assign({}, i, { className: Object(me.a)(o.root, a) }), r.a.createElement(Ga.Line, { data: function(e) { var a = e.getContext("2d").createLinearGradient(0, 0, 0, 400); return a.addColorStop(0, Object(dn.fade)(c.palette.secondary.main, .2)), a.addColorStop(.9, "rgba(255,255,255,0)"), a.addColorStop(1, "rgba(255,255,255,0)"), { datasets: [{ data: t, backgroundColor: a, borderColor: c.palette.secondary.main, pointBorderColor: "#FFFFFF", pointBorderWidth: 3, pointRadius: 6, pointBackgroundColor: c.palette.secondary.main }], labels: n } }, options: l }))
                },
                hn = Object(F.a)((function(e) { return { root: {}, content: {}, buttons: { display: "flex", justifyContent: "center", "& > *": { marginLeft: e.spacing(1) } }, inner: { height: 375, minWidth: 500 }, chart: { height: "100%" } } })),
                vn = function(e) {
                    var a = e.className,
                        t = Object(le.a)(e, ["className"]),
                        n = hn(),
                        i = { thisWeek: { data: [], labels: [] }, thisMonth: { data: [], labels: [] }, thisYear: { data: [10, 5, 11, 20, 13, 28, 18, 4, 13, 12, 13, 5], labels: ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"] } };
                    return r.a.createElement(Ra.a, Object.assign({}, t, { className: Object(me.a)(n.root, a) }), r.a.createElement(Ma.a, { action: r.a.createElement(Ee.d, null), title: "Performance Over Time" }), r.a.createElement(pe.a, null), r.a.createElement(La.a, { className: n.content }, r.a.createElement(Ka.a, null, r.a.createElement("div", { className: n.inner }, r.a.createElement(gn, { className: n.chart, data: i.thisYear.data, labels: i.thisYear.labels })))))
                },
                bn = Object(F.a)((function(e) { return { root: { padding: e.spacing(3) }, container: { marginTop: e.spacing(3) } } })),
                fn = function() { var e = bn(); return r.a.createElement(Ee.j, { className: e.root, title: "Default Dashboard" }, r.a.createElement(Dt, null), r.a.createElement(Fa.a, { className: e.container, container: !0, spacing: 3 }, r.a.createElement(Fa.a, { item: !0, lg: 3, sm: 6, xs: 12 }, r.a.createElement(an, null)), r.a.createElement(Fa.a, { item: !0, lg: 3, sm: 6, xs: 12 }, r.a.createElement(Ut, null)), r.a.createElement(Fa.a, { item: !0, lg: 3, sm: 6, xs: 12 }, r.a.createElement(on, null)), r.a.createElement(Fa.a, { item: !0, lg: 3, sm: 6, xs: 12 }, r.a.createElement(qt, null)), r.a.createElement(Fa.a, { item: !0, lg: 3, xs: 12 }, r.a.createElement(un, null)), r.a.createElement(Fa.a, { item: !0, lg: 9, xs: 12 }, r.a.createElement(vn, null)), r.a.createElement(Fa.a, { item: !0, lg: 5, xl: 4, xs: 12 }, r.a.createElement(Qt, null)), r.a.createElement(Fa.a, { item: !0, lg: 7, xl: 8, xs: 12 }, r.a.createElement(Rt, null)))) },
                En = Object(F.a)((function(e) { return { root: {}, summaryButton: { backgroundColor: e.palette.white }, barChartIcon: { marginRight: e.spacing(1) }, image: { width: "100%", maxHeight: 400 } } })),
                yn = function(e) {
                    var a = e.className,
                        t = Object(le.a)(e, ["className"]),
                        n = En(),
                        i = Object(m.d)((function(e) { return e.session }));
                    return r.a.createElement("div", Object.assign({}, t, { className: Object(me.a)(n.root, a) }), r.a.createElement(Fa.a, { alignItems: "center", container: !0, justify: "space-between", spacing: 3 }, r.a.createElement(Fa.a, { item: !0, md: 6, xs: 12 }, r.a.createElement(de.a, { component: "h2", gutterBottom: !0, variant: "overline" }, "Home"), r.a.createElement(de.a, { component: "h1", gutterBottom: !0, variant: "h3" }, "Good Morning, ", i.user.first_name), r.a.createElement(de.a, { gutterBottom: !0, variant: "subtitle1" }, "Here\u2019s what\u2019s happening with your projects today"), r.a.createElement(he.a, { className: n.summaryButton, edge: "start", variant: "contained" }, r.a.createElement(je.a, { className: n.barChartIcon }), "View summary")), r.a.createElement(be.a, { smDown: !0 }, r.a.createElement(Fa.a, { item: !0, md: 6 }, r.a.createElement("img", { alt: "Cover", className: n.image, src: "/images/undraw_growth_analytics_8btt.svg" })))))
                },
                jn = Object(F.a)((function(e) { var a; return { root: {}, content: { padding: 0 }, item: (a = { padding: e.spacing(3), textAlign: "center" }, Object(D.a)(a, e.breakpoints.up("md"), { "&:not(:last-of-type)": { borderRight: "1px solid ".concat(e.palette.divider) } }), Object(D.a)(a, e.breakpoints.down("sm"), { "&:not(:last-of-type)": { borderBottom: "1px solid ".concat(e.palette.divider) } }), a), titleWrapper: { display: "flex", alignItems: "center", justifyContent: "center" }, label: { marginLeft: e.spacing(1) }, overline: { marginTop: e.spacing(1) } } })),
                On = function(e) {
                    var a = e.className,
                        t = Object(le.a)(e, ["className"]),
                        i = jn(),
                        o = Object(n.useState)(null),
                        c = Object(ce.a)(o, 2),
                        l = c[0],
                        s = c[1];
                    return Object(n.useEffect)((function() {
                        var e = !0;
                        return fa.a.get("/api/account/statistics").then((function(a) { e && s(a.data.statistics) })),
                            function() { e = !1 }
                    }), []), l ? r.a.createElement(Ra.a, Object.assign({}, t, { className: Object(me.a)(i.root, a) }), r.a.createElement(Fa.a, { alignItems: "center", container: !0, justify: "space-between" }, r.a.createElement(Fa.a, { className: i.item, item: !0, md: 3, sm: 6, xs: 12 }, r.a.createElement(de.a, { variant: "h2" }, "$", l.payout), r.a.createElement(de.a, { className: i.overline, variant: "overline" }, "Next payout")), r.a.createElement(Fa.a, { className: i.item, item: !0, md: 3, sm: 6, xs: 12 }, r.a.createElement(de.a, { variant: "h2" }, "$", l.projects), r.a.createElement(de.a, { className: i.overline, variant: "overline" }, "Total products")), r.a.createElement(Fa.a, { className: i.item, item: !0, md: 3, sm: 6, xs: 12 }, r.a.createElement(de.a, { variant: "h2" }, l.visitors), r.a.createElement(de.a, { className: i.overline, variant: "overline" }, "Today's Visitors")), r.a.createElement(Fa.a, { className: i.item, item: !0, md: 3, sm: 6, xs: 12 }, r.a.createElement("div", { className: i.titleWrapper }, r.a.createElement(de.a, { component: "span", variant: "h2" }, l.watching), r.a.createElement(Ee.f, { className: i.label, color: h.a.green[600] }, "Live")), r.a.createElement(de.a, { className: i.overline, variant: "overline" }, "Watching now")))) : null
                },
                Nn = t(5),
                xn = t.n(Nn),
                kn = t(1050),
                wn = t(128),
                Cn = t.n(wn),
                Sn = t(543),
                An = t.n(Sn),
                _n = t(542),
                In = t.n(_n),
                Tn = t(541),
                Bn = t.n(Tn),
                Pn = Object(F.a)((function(e) { return { root: {}, value: { fontWeight: e.typography.fontWeightMedium }, type: { fontWeight: e.typography.fontWeightMedium } } })),
                Dn = function(e) {
                    var a = e.className,
                        t = Object(le.a)(e, ["className"]),
                        n = Pn(),
                        i = [{ id: xn()(), value: 6, type: "invite", message: "to send service quotes" }, { id: xn()(), value: 2, type: "message", message: "from clients" }, { id: xn()(), value: 1, type: "payout", message: "that needs your confirmation" }],
                        o = { invite: r.a.createElement(Cn.a, null), message: r.a.createElement(Bn.a, null), payout: r.a.createElement(In.a, null) };
                    return r.a.createElement(Ra.a, Object.assign({}, t, { className: Object(me.a)(n.root, a) }), r.a.createElement(Na.a, null, i.map((function(e, a) { return r.a.createElement(xa.a, { divider: a < i.length - 1, key: e.id }, r.a.createElement(Jt.a, null, o[e.type]), r.a.createElement(wa.a, null, r.a.createElement(de.a, { variant: "body1" }, r.a.createElement("span", { className: n.value }, e.value), " ", r.a.createElement("span", { className: n.type }, e.type, "s"), " ", e.message)), r.a.createElement(kn.a, null, r.a.createElement(wt.a, { title: "View" }, r.a.createElement(ha.a, { edge: "end", size: "small" }, r.a.createElement(An.a, null))))) }))))
                },
                Fn = t(318),
                Rn = t.n(Fn),
                Mn = Object(F.a)((function(e) { return { root: {}, header: { display: "flex", alignItems: "center", justifyContent: "space-between", marginBottom: e.spacing(2) }, title: { position: "relative", "&:before": { position: "absolute", bottom: -8, left: 0, content: '" "', height: 3, width: 48, backgroundColor: e.palette.primary.main } }, arrowIcon: { marginLeft: e.spacing(1) } } })),
                Ln = function(e) {
                    var a = e.className,
                        t = Object(le.a)(e, ["className"]),
                        i = Mn(),
                        o = Object(n.useState)([]),
                        c = Object(ce.a)(o, 2),
                        l = c[0],
                        s = c[1];
                    return Object(n.useEffect)((function() {
                        var e = !0;
                        return fa.a.get("/api/account/projects").then((function(a) { e && s(a.data.projects) })),
                            function() { e = !1 }
                    }), []), r.a.createElement("div", Object.assign({}, t, { className: Object(me.a)(i.root, a) }), r.a.createElement("div", { className: i.header }, r.a.createElement(de.a, { className: i.title, variant: "h5" }, "Active Projects"), r.a.createElement(he.a, { component: se.b, to: "/profile/user/projects" }, "See all", r.a.createElement(Rn.a, { className: i.arrowIcon }))), l.map((function(e) { return r.a.createElement(Ee.p, { key: e.id, project: e }) })))
                },
                zn = t(1058),
                Gn = t(168),
                Un = t.n(Gn),
                Yn = t(187),
                Wn = t.n(Yn),
                Hn = Object(F.a)((function(e) { return { root: {}, content: { padding: 0 }, addIcon: { marginRight: e.spacing(1) }, done: { textDecoration: "line-through", color: e.palette.text.secondary } } })),
                qn = function(e) {
                    var a = e.className,
                        t = Object(le.a)(e, ["className"]),
                        i = Hn(),
                        o = Object(n.useState)([]),
                        c = Object(ce.a)(o, 2),
                        l = c[0],
                        s = c[1];
                    Object(n.useEffect)((function() {
                        var e = !0;
                        return fa.a.get("/api/account/todos").then((function(a) { e && s(a.data.todos) })),
                            function() { e = !1 }
                    }), []);
                    return r.a.createElement(Ra.a, Object.assign({}, t, { className: Object(me.a)(i.root, a) }), r.a.createElement(Ma.a, { action: r.a.createElement(he.a, { color: "primary", size: "small" }, r.a.createElement(Un.a, { className: i.addIcon }), "Add"), title: "My todos" }), r.a.createElement(pe.a, null), r.a.createElement(La.a, { className: i.content }, r.a.createElement(Na.a, null, l.map((function(e, a) { return r.a.createElement(xa.a, { divider: a < l.length - 1, key: e.id }, r.a.createElement(Jt.a, null, r.a.createElement(zn.a, { checked: e.done, onClick: function(a) { return function(e, a) { e.persist(), s((function(e) { return e.map((function(e) { return e.id === a.id ? Object(k.a)(Object(k.a)({}, a), {}, { done: !a.done }) : e })) })) }(a, e) } })), r.a.createElement(wa.a, null, r.a.createElement(de.a, { className: Object(me.a)(Object(D.a)({}, i.done, e.done)), variant: "body1" }, e.title)), function(e) { return e.done ? null : Oa()(e.deadline).isBefore(Oa()(), "day") ? r.a.createElement(Ee.f, { color: h.a.red[600] }, "Due ".concat(Oa()(e.deadline).fromNow())) : Oa()(e.deadline).isSame(Oa()(), "day") ? r.a.createElement(Ee.f, { color: h.a.orange[600] }, "Due today") : r.a.createElement(Ee.f, null, "Due ".concat(Oa()(e.deadline).fromNow())) }(e), r.a.createElement(wt.a, { title: "Archive" }, r.a.createElement(ha.a, null, r.a.createElement(Wn.a, null)))) })))))
                },
                Jn = Object(F.a)((function(e) { return { root: { width: e.breakpoints.values.lg, maxWidth: "100%", margin: "0 auto", padding: e.spacing(3) }, statistics: { marginTop: e.spacing(3) }, notifications: { marginTop: e.spacing(6) }, projects: { marginTop: e.spacing(6) }, todos: { marginTop: e.spacing(6) } } })),
                Kn = function() { var e = Jn(); return r.a.createElement(Ee.j, { className: e.root, title: "Overview" }, r.a.createElement(yn, null), r.a.createElement(On, { className: e.statistics }), r.a.createElement(Dn, { className: e.notifications }), r.a.createElement(Ln, { className: e.projects }), r.a.createElement(qn, { className: e.todos })) },
                Vn = t(544),
                Zn = t.n(Vn),
                $n = Object(F.a)((function(e) { return { root: { backgroundColor: e.palette.white }, inner: { padding: e.spacing(6, 3), width: e.breakpoints.values.lg, maxWidth: "100%", margin: "0 auto" }, content: { marginTop: e.spacing(6) } } })),
                Xn = function(e) {
                    var a = e.className,
                        t = Object(le.a)(e, ["className"]),
                        n = $n();
                    return r.a.createElement("div", Object.assign({}, t, { className: Object(me.a)(n.root, a) }), r.a.createElement("div", { className: n.inner }, r.a.createElement(de.a, { align: "center", variant: "h3" }, "FAQ"), r.a.createElement("div", { className: n.content }, r.a.createElement(Na.a, { disablePadding: !0 }, [{ title: "What do we use for styling our components?", description: "We use Material-ui's hooks api as we think it\u2019s the best way of avoiding clutter." }, { title: "Are the design files (sketch, figma) included in the Standard Package?", description: "No, we offer the design source file only to Standard Plus Sketch & Figma and Extended Package." }, { title: "Are you providing support for setting up my project?", description: "Yes, we offer email support for all our customers & even skype meetings for our extended license customers." }].map((function(e) { return r.a.createElement(xa.a, { key: xn()() }, r.a.createElement(Jt.a, null, r.a.createElement(Zn.a, null)), r.a.createElement(wa.a, { primary: e.title, primaryTypographyProps: { variant: "h5" }, secondary: e.description, secondaryTypographyProps: { variant: "body1" } })) }))))))
                },
                Qn = Object(F.a)((function(e) { return { root: { backgroundColor: e.palette.white }, header: Object(D.a)({ width: e.breakpoints.values.md, maxWidth: "100%", margin: "0 auto", padding: "80px 24px" }, e.breakpoints.up("md"), { padding: "160px 24px" }), buttons: { marginTop: e.spacing(3), display: "flex", justifyContent: "center" }, mediaContainer: { margin: "0 auto", maxWidth: 1600, padding: e.spacing(0, 2), overflow: "hidden" }, media: { width: "100%" }, stats: { backgroundColor: e.palette.primary.main, color: e.palette.primary.contrastText, padding: e.spacing(1) }, statsInner: { width: e.breakpoints.values.md, maxWidth: "100%", margin: "0 auto" } } })),
                er = function(e) {
                    var a = e.className,
                        t = Object(le.a)(e, ["className"]),
                        n = Qn();
                    return r.a.createElement("div", Object.assign({}, t, { className: Object(me.a)(n.root, a) }), r.a.createElement("div", { className: n.header }, r.a.createElement(de.a, { align: "center", gutterBottom: !0, variant: "h1" }, "Devias React Material Kit - PRO"), r.a.createElement(de.a, { align: "center", component: "h2", variant: "subtitle1" }, "A professional kit that comes with ready-to-use Material-UI\xa9 components developed with one common goal in mind, help you build faster & beautiful applications. Each component is fully customizable, responsive and easy to integrate."), r.a.createElement("div", { className: n.buttons }, r.a.createElement(he.a, { color: "primary", component: "a", href: "https://themes.material-ui.com/themes/devias-kit-pro", target: "_blank", variant: "contained" }, "Purchase Devias Kit"))), r.a.createElement("div", { className: n.mediaContainer }, r.a.createElement("img", { alt: "Demos", className: n.media, src: "/images/presentation/header.jpg" })), r.a.createElement("div", { className: n.stats }, r.a.createElement(Fa.a, { alignItems: "center", className: n.statsInner, container: !0, justify: "center", spacing: 3 }, r.a.createElement(Fa.a, { item: !0, lg: 3, md: 6, xs: 12 }, r.a.createElement(de.a, { color: "inherit", gutterBottom: !0, variant: "h3" }, "30+"), r.a.createElement(de.a, { color: "inherit", variant: "body2" }, "Demo Pages")), r.a.createElement(Fa.a, { item: !0, lg: 3, md: 6, xs: 12 }, r.a.createElement(de.a, { color: "inherit", gutterBottom: !0, variant: "h3" }, "UX"), r.a.createElement(de.a, { color: "inherit", variant: "body2" }, "Complete Flows")), r.a.createElement(Fa.a, { item: !0, lg: 3, md: 6, xs: 12 }, r.a.createElement(de.a, { color: "inherit", gutterBottom: !0, variant: "h3" }, "300+"), r.a.createElement(de.a, { color: "inherit", variant: "body2" }, "Components")), r.a.createElement(Fa.a, { item: !0, lg: 3, md: 6, xs: 12 }, r.a.createElement("div", null, r.a.createElement("img", { alt: "React", src: "/images/react.png" })), r.a.createElement(de.a, { color: "inherit", variant: "body2" }, "React Hooks API")))))
                },
                ar = Object(F.a)((function(e) { return { root: { backgroundColor: e.palette.white }, inner: { padding: e.spacing(6, 3), width: e.breakpoints.values.lg, maxWidth: "100%", margin: "0 auto" }, media: { "& img": { width: "100%", height: "auto" } } } })),
                tr = function(e) {
                    var a = e.className,
                        t = Object(le.a)(e, ["className"]),
                        n = ar();
                    return r.a.createElement("div", Object.assign({}, t, { className: Object(me.a)(n.root, a) }), r.a.createElement("div", { className: n.inner }, r.a.createElement(Fa.a, { alignItems: "center", container: !0, justify: "space-between" }, r.a.createElement(Fa.a, { item: !0, lg: 3, md: 6, xs: 12 }, r.a.createElement(de.a, { gutterBottom: !0, variant: "h3" }, "Support for Plugins"), r.a.createElement(de.a, { variant: "subtitle2" }, "The kit provides support for multiple third-party plugins right out of the box like Chart.js, Dropzone.js, Kanban Plugin and many more.")), r.a.createElement(Fa.a, { className: n.media, item: !0, lg: 4, md: 6, xs: 12 }, r.a.createElement("img", { alt: "User flows", src: "/images/presentation/plugins_support.png" })))))
                },
                nr = Object(F.a)((function(e) { return { root: { backgroundColor: e.palette.background.default }, inner: { padding: e.spacing(6, 3), width: e.breakpoints.values.lg, maxWidth: "100%", margin: "0 auto" }, media: { "& img": { width: "100%", height: "auto" } } } })),
                rr = function(e) {
                    var a = e.className,
                        t = Object(le.a)(e, ["className"]),
                        n = nr();
                    return r.a.createElement("div", Object.assign({}, t, { className: Object(me.a)(n.root, a) }), r.a.createElement("div", { className: n.inner }, r.a.createElement(Fa.a, { alignItems: "center", container: !0, justify: "space-between" }, r.a.createElement(Fa.a, { item: !0, lg: 3, md: 6, xs: 12 }, r.a.createElement(de.a, { gutterBottom: !0, variant: "h3" }, "Source Files"), r.a.createElement(de.a, { variant: "subtitle2" }, "We've included the source Sketch & Figma files so you can get creative! We designed all components with Symbols in Sketch which allows you to change the main colors as you like.")), r.a.createElement(Fa.a, { className: n.media, item: !0, lg: 4, md: 6, xs: 12 }, r.a.createElement("img", { alt: "User flows", src: "/images/presentation/source_files.png" })))))
                },
                ir = Object(F.a)((function(e) { return { root: { backgroundColor: e.palette.background.default }, inner: { padding: e.spacing(6, 3), width: e.breakpoints.values.lg, maxWidth: "100%", margin: "0 auto" }, media: { "& img": { width: "100%", height: "auto" } } } })),
                or = function(e) {
                    var a = e.className,
                        t = Object(le.a)(e, ["className"]),
                        n = ir();
                    return r.a.createElement("div", Object.assign({}, t, { className: Object(me.a)(n.root, a) }), r.a.createElement("div", { className: n.inner }, r.a.createElement(Fa.a, { alignItems: "center", container: !0, justify: "space-between" }, r.a.createElement(Fa.a, { item: !0, lg: 3, md: 6, xs: 12 }, r.a.createElement(de.a, { gutterBottom: !0, variant: "h3" }, "Complete User Flows"), r.a.createElement(de.a, { variant: "subtitle2" }, "Not just a set of tools, the package includes the most common use cases of user flows like User Management, Second Level Layout, and many more.")), r.a.createElement(Fa.a, { className: n.media, item: !0, lg: 4, md: 6, xs: 12 }, r.a.createElement("img", { alt: "User flows", src: "/images/presentation/user_flows.png" })))))
                },
                cr = Object(F.a)((function() { return { root: {} } })),
                lr = function() { var e = cr(); return r.a.createElement(Ee.j, { className: e.root, title: "Presentation" }, r.a.createElement(er, null), r.a.createElement(or, null), r.a.createElement(tr, null), r.a.createElement(rr, null), r.a.createElement(Xn, null)) },
                sr = (t(924), t(137)),
                mr = function(e) {
                    Object(z.a)(t, e);
                    var a = Object(G.a)(t);

                    function t(e) {
                        var n;
                        return Object(M.a)(this, t), (n = a.call(this, e)).scrollSection = function() {
                            var e;
                            n.scrollTargetIds.forEach((function(a, t) { e = document.getElementById(a).offsetTop - (n.headerBackground ? document.querySelector("div[data-nav='list']").scrollHeight : 0), window.pageYOffset >= e && window.pageYOffset < e + document.getElementById(a).scrollHeight ? (n.getNavLinkElement(a).classList.add(n.activeNavClass), n.getNavLinkElement(a).parentNode.classList.add(n.activeNavClass), n.clearOtherNavLinkActiveStyle(a)) : (n.getNavLinkElement(a).classList.remove(n.activeNavClass), n.getNavLinkElement(a).parentNode.classList.remove(n.activeNavClass)), window.innerHeight + window.pageYOffset >= document.body.scrollHeight && t === n.scrollTargetIds.length - 1 && (n.getNavLinkElement(a).classList.add(n.activeNavClass), n.getNavLinkElement(a).parentNode.classList.add(n.activeNavClass), n.clearOtherNavLinkActiveStyle(a)) }))
                        }, n.props = e, n.scrollTargetIds = n.props.scrollTargetIds, n.activeNavClass = n.props.activeNavClass, n.scrollDuration = Number(n.props.scrollDuration) || 1e3, n.headerBackground = "true" === n.props.headerBackground, n.props.router && "HashRouter" === n.props.router ? (n.homeDefaultLink = "#/", n.hashIdentifier = "#/#") : (n.homeDefaultLink = "/", n.hashIdentifier = "#"), n.scrollSection.bind(Object(sr.a)(n)), n
                    }
                    return Object(L.a)(t, [{ key: "easeInOutQuad", value: function(e, a, t, n) { return (e /= n / 2) < 1 ? t / 2 * e * e + a : -t / 2 * (--e * (e - 2) - 1) + a } }, {
                        key: "scrollTo",
                        value: function(e, a, t) {
                            var n = this,
                                r = a - e,
                                i = 0;
                            ! function a() {
                                i += 10;
                                var o = n.easeInOutQuad(i, e, r, t);
                                window.scrollTo(0, o), i < t && setTimeout(a, 10)
                            }()
                        }
                    }, { key: "getNavLinkElement", value: function(e) { return document.querySelector("a[href='".concat(this.hashIdentifier).concat(e, "']")) } }, { key: "getNavToSectionID", value: function(e) { return e.includes(this.hashIdentifier) ? e.replace(this.hashIdentifier, "") : "" } }, {
                        key: "componentDidMount",
                        value: function() {
                            var e = this;
                            document.querySelector("a[href='".concat(this.homeDefaultLink, "']")) && document.querySelector("a[href='".concat(this.homeDefaultLink, "']")).addEventListener("click", (function(a) { a.preventDefault(), e.scrollTo(window.pageYOffset, 0, e.scrollDuration), window.location.hash = "" })), document.querySelector("div[data-nav='list']").querySelectorAll("a").forEach((function(a) {
                                a.addEventListener("click", (function(t) {
                                    t.preventDefault();
                                    var n = e.getNavToSectionID(a.getAttribute("href"));
                                    if (n) {
                                        var r = document.getElementById(n).offsetTop - (e.headerBackground ? document.querySelector("div[data-nav='list']").scrollHeight : 0);
                                        e.scrollTo(window.pageYOffset, r, e.scrollDuration)
                                    } else e.scrollTo(window.pageYOffset, 0, e.scrollDuration)
                                }))
                            })), window.addEventListener("scroll", this.scrollSection, !0)
                        }
                    }, { key: "componentWillUnmount", value: function() { window.removeEventListener("scroll", this.scrollSection, !0) } }, {
                        key: "clearOtherNavLinkActiveStyle",
                        value: function(e) {
                            var a = this;
                            this.scrollTargetIds.forEach((function(t, n) { t !== e && (a.getNavLinkElement(t).classList.remove(a.activeNavClass), a.getNavLinkElement(t).parentNode.classList.remove(a.activeNavClass)) }))
                        }
                    }, { key: "render", value: function() { return r.a.createElement("div", { "data-nav": "list", className: this.props.className }, this.props.children) } }]), t
                }(n.Component),
                ur = function(e) {
                    Object(z.a)(t, e);
                    var a = Object(G.a)(t);

                    function t(e) { var n; return Object(M.a)(this, t), (n = a.call(this, e)).toggle = function() { n.setState({ isOpenMenu: !n.state.isOpenMenu }) }, n.state = { isOpenMenu: !1 }, n }
                    return Object(L.a)(t, [{ key: "render", value: function() { var e = this.props.navItems.map((function(e) { return e.idnm })); return r.a.createElement(r.a.Fragment, null, r.a.createElement(Y.a, { expand: "lg", fixed: "top", className: "navbar-custom sticky sticky-dark " + this.props.navClass }, r.a.createElement(W.a, null, r.a.createElement(H.a, { className: "logo text-uppercase", href: "/" }, r.a.createElement(ee.a, { query: "(min-width: 990px)" }, !0 === this.props.imglight ? r.a.createElement("div", null, r.a.createElement("img", { style: { height: 70, width: 250 }, src: "/images/logos/LOGO_white.png", alt: "", className: "logo-light" })) : r.a.createElement("img", { style: { height: 70, width: 250 }, src: "/images/logos/LOGO_color.png", alt: "", className: "logo-dark" })), r.a.createElement(ee.a, { query: "(max-width: 990px)" }, r.a.createElement("img", { src: "/images/50x50.png", alt: "", className: "logo-dark" }))), r.a.createElement(q.a, { onClick: this.toggle }, r.a.createElement("i", { className: "mdi mdi-menu" })), r.a.createElement(J.a, { id: "navbarCollapse", isOpen: this.state.isOpenMenu, navbar: !0 }, r.a.createElement(mr, { scrollTargetIds: e, scrollDuration: "200", headerBackground: "true", activeNavClass: "active", className: "navbar-collapse" }, r.a.createElement(X, { navItems: this.props.navItems, navClass: this.props.navClass, imglight: this.props.imglight })))))) } }]), t
                }(n.Component),
                dr = t(1051),
                pr = t(1052),
                gr = function(e) {
                    Object(z.a)(t, e);
                    var a = Object(G.a)(t);

                    function t() { var e; return Object(M.a)(this, t), (e = a.call(this)).callModal = function() { e.refs.child.openModal() }, e.state = { isOpen: !1 }, e.callModal.bind(Object(sr.a)(e)), e }
                    return Object(L.a)(t, [{ key: "render", value: function() { return r.a.createElement(r.a.Fragment, null, r.a.createElement("section", { className: "hero-section-2", id: "home" }, r.a.createElement("video", { id: "background-video", className: "hero-section-2", autoPlay: !0, muted: !0, loop: !0 }, r.a.createElement("source", { src: "/images/video3.mp4", type: "video/mp4" })), r.a.createElement(ee.a, { query: "(min-width: 400px)" }, r.a.createElement(dr.a, { className: "justify-content-center-overlay" }, r.a.createElement(pr.a, { lg: 12 }, r.a.createElement("div", { className: "hero-wrapper text-center mb-4" }, r.a.createElement("h1", { className: "hero-title text-white mb-4" }, "Pool of Consultants in 100+ countries"), r.a.createElement("div", null, r.a.createElement(se.b, { to: "/auth/register", className: "btn btn-primary-book-demo text-black" }, "Join Us")))))))) } }]), t
                }(n.Component),
                hr = function(e) {
                    Object(z.a)(t, e);
                    var a = Object(G.a)(t);

                    function t(e) { var n; return Object(M.a)(this, t), (n = a.call(this, e)).state = { services: [{ icon: "grid", title: "Offsite", desc: r.a.createElement(r.a.Fragment, null, r.a.createElement("li", null, "Records Review"), r.a.createElement("li", null, "Project Management")) }, { icon: "edit", title: "Onsite", desc: r.a.createElement(r.a.Fragment, null, r.a.createElement("li", null, "Physical Inspection"), r.a.createElement("li", null, "MRO Representation"), r.a.createElement("li", null, "Technical Records Review"), r.a.createElement("li", null, "Project Management"), r.a.createElement("li", null, "Records Scanning")) }, { icon: "headphones", title: "Engine", desc: r.a.createElement(r.a.Fragment, null, r.a.createElement("li", null, "Engine Data Analysis"), r.a.createElement("li", null, "Engine Storage Space"), r.a.createElement("li", null, "Engine Record Review")) }] }, n }
                    return Object(L.a)(t, [{ key: "render", value: function() { return r.a.createElement(r.a.Fragment, null, r.a.createElement("section", { className: "section-about-us", id: "aboutus" }, r.a.createElement("div", { className: "bg-primary-edited-about-us" }, r.a.createElement(W.a, null, r.a.createElement(dr.a, null, r.a.createElement(pr.a, { lg: 6 }), r.a.createElement(pr.a, { lg: 6 }, r.a.createElement("br", null), r.a.createElement("br", null), r.a.createElement("br", null), r.a.createElement("h4", { className: "text-black", style: { fontSize: "44px", fontFamily: "Arial,Helvetica,sans-serif" } }, "About Us"), r.a.createElement("p", { className: "mb-4 text-black" }, "We at Aero Consultant have a network of local consultant in more than 100 countries for aircraft transition and in more than 30 countries for helicopter transition. Our local consultant network will support you with physical inspection, records review & scanning, annual audit, prepurchase inspection as well as redelivery of aircraft & helicopter.", r.a.createElement("br", null), r.a.createElement("br", null), "Our business partnership with CAMOs, MROs and Ferry Companies enabled us to provide complete aircraft transition service under one umbrella.", r.a.createElement("br", null), r.a.createElement("br", null), "We are committed to digitalised the whole transition process, right from getting a consultant to delivering the project."))))))) } }]), t
                }(n.Component),
                vr = t(545),
                br = t.n(vr),
                fr = function(e) {
                    Object(z.a)(t, e);
                    var a = Object(G.a)(t);

                    function t(e) { var n; return Object(M.a)(this, t), (n = a.call(this, e)).state = { services: [{ icon: "grid", title: "Offsite", desc: r.a.createElement(r.a.Fragment, null, r.a.createElement("li", null, "Records Review"), r.a.createElement("li", null, "Project Management")) }, { icon: "edit", title: "Onsite", desc: r.a.createElement(r.a.Fragment, null, r.a.createElement("li", null, "Physical Inspection"), r.a.createElement("li", null, "MRO Representation"), r.a.createElement("li", null, "Technical Records Review"), r.a.createElement("li", null, "Project Management"), r.a.createElement("li", null, "Records Scanning")) }, { icon: "headphones", title: "Engine", desc: r.a.createElement(r.a.Fragment, null, r.a.createElement("li", null, "Engine Data Analysis"), r.a.createElement("li", null, "Engine Storage Space"), r.a.createElement("li", null, "Engine Record Review")) }] }, n }
                    return Object(L.a)(t, [{ key: "render", value: function() { return r.a.createElement(r.a.Fragment, null, r.a.createElement("section", { className: "section", id: "messagefromcto" }, r.a.createElement("div", { className: "bg-primary-cto" }), r.a.createElement(W.a, null, r.a.createElement(dr.a, { className: "justify-content-center mb-5" }, r.a.createElement(pr.a, { lg: 7 }, r.a.createElement("div", { className: "text-center text-white" }, r.a.createElement("h4", { className: "text-white", style: { fontSize: "44px", fontFamily: "Arial,Helvetica,sans-serif" } }, "Message from CTO")))), r.a.createElement(dr.a, { className: "justify-content-center mb-5" }, r.a.createElement(pr.a, { lg: 6 }, r.a.createElement(ue.a, { alt: "Neha Mishra", style: { margin: "auto", width: "200px", height: "200px" }, src: "/images/neha.webp" }), r.a.createElement("p", { className: "mb-4 text-white", style: { textAlign: "center", fontFamily: "Arial,Helvetica,sans-serif", fontSize: "30px" } }, "Neha Mishra", r.a.createElement("br", null), r.a.createElement("a", { href: "https://www.linkedin.com/in/nehamishratbs/" }, r.a.createElement("i", null, r.a.createElement(br.a, { icon: "linkedin", className: "icon-dual-white justify-content-center", style: { textAlign: "center" } })))), r.a.createElement("p", { className: "mb-4 text-white", style: { textAlign: "center", fontFamily: "Arial,Helvetica,sans-serif", fontSize: "20px" } }, "Chief Technical Officer")), r.a.createElement(pr.a, { lg: 6 }, r.a.createElement("br", null), r.a.createElement("br", null), r.a.createElement("br", null), r.a.createElement("br", null), r.a.createElement("p", { className: "mb-4 text-white", style: { textAlign: "justify", fontSize: "17px", fontFamily: "Arial,Helvetica,sans-serif" } }, "The best part of aircraft transition is every project is a new type of project, new experience, new learning, making new relationships, a new team so it's very dynamic nature of business. We deal with different people coming from different cultures on the same project and they work together as one team, there is no room for cultural difference only adaptation to one\u2019s work style rules the business.", r.a.createElement("br", null), "We are one family-Aeroconsultant family and I will be pleased to invite all my fellow colleagues to join our family.")))))) } }]), t
                }(n.Component),
                Er = t(1053),
                yr = function(e) {
                    Object(z.a)(t, e);
                    var a = Object(G.a)(t);

                    function t(e) { var n; return Object(M.a)(this, t), (n = a.call(this, e)).state = { services: [{ icon: "grid", title: "Offsite", desc: r.a.createElement(r.a.Fragment, null, r.a.createElement("li", null, "Records Review"), r.a.createElement("li", null, "Project Management")) }, { icon: "edit", title: "Onsite", desc: r.a.createElement(r.a.Fragment, null, r.a.createElement("li", null, "Physical Inspection"), r.a.createElement("li", null, "MRO Representation"), r.a.createElement("li", null, "Technical Records Review"), r.a.createElement("li", null, "Project Management"), r.a.createElement("li", null, "Records Scanning")) }, { icon: "headphones", title: "Engine", desc: r.a.createElement(r.a.Fragment, null, r.a.createElement("li", null, "Engine Data Analysis"), r.a.createElement("li", null, "Engine Storage Space"), r.a.createElement("li", null, "Engine Record Review")) }] }, n }
                    return Object(L.a)(t, [{ key: "render", value: function() { return r.a.createElement(r.a.Fragment, null, r.a.createElement("section", { className: "section", id: "services" }, r.a.createElement("div", { className: "bg-primary-services" }), r.a.createElement(W.a, null, r.a.createElement(dr.a, { className: "justify-content-center mb-5" }, r.a.createElement(pr.a, { lg: 7 }, r.a.createElement("div", { className: "text-center text-black" }, r.a.createElement("h4", { className: "text-white", style: { fontSize: "44px", fontFamily: "Arial,Helvetica,sans-serif" } }, "Services")))), r.a.createElement(dr.a, { className: "justify-content-center mb-5" }, r.a.createElement(pr.a, { lg: 4 }, r.a.createElement("div", { className: "pricing-plan card text-center" }, r.a.createElement(Er.a, { className: "p-4", style: { backgroundColor: "rgb(149, 203, 238)" } }, r.a.createElement("img", { alt: "Project Support", style: { margin: "auto" }, src: "/images/services/75x75_project support2.png" }), r.a.createElement("div", null, "\xa0"), r.a.createElement("h3", { className: "mb-5 text-white", style: { fontFamily: "Arial,Helvetica,sans-serif" } }, "Project Support"), r.a.createElement("div", { className: "plan-features mt-5" }, r.a.createElement("p", null, r.a.createElement("span", { className: "text-white" }, "Annual Audit")), r.a.createElement("p", null, r.a.createElement("span", { className: "text-white" }, "Pre-purchase")), r.a.createElement("p", null, r.a.createElement("span", { className: "text-white" }, "Redelivery")), r.a.createElement("p", null, r.a.createElement("span", { className: "text-white" }, "New Aircraft Delivery")), r.a.createElement("p", null, r.a.createElement("span", { className: "text-white" }, "Storage Monitoring")))))), r.a.createElement(pr.a, { lg: 4 }, r.a.createElement("div", { className: "pricing-plan card text-center" }, r.a.createElement(Er.a, { className: "p-4", style: { backgroundColor: "rgb(149, 203, 238)" } }, r.a.createElement("img", { alt: "Transition Support", style: { margin: "auto" }, src: "/images/services/75x75Transation Support Icon2.png" }), r.a.createElement("div", null, "\xa0"), r.a.createElement("h3", { className: "mb-5 text-white", style: { fontFamily: "Arial,Helvetica,sans-serif" } }, "Transition Support"), r.a.createElement("div", { className: "plan-features mt-5" }, r.a.createElement("p", null, r.a.createElement("span", { className: "text-white" }, "Asset Management")), r.a.createElement("p", null, r.a.createElement("span", { className: "text-white" }, "Physical Inspection")), r.a.createElement("p", null, r.a.createElement("span", { className: "text-white" }, "Record Review")), r.a.createElement("p", null, r.a.createElement("span", { className: "text-white" }, "Records Scanning")), r.a.createElement("p", null, r.a.createElement("span", { className: "text-white" }, "Record Recovery")))))), r.a.createElement(pr.a, { lg: 4 }, r.a.createElement("div", { className: "pricing-plan card text-center" }, r.a.createElement(Er.a, { className: "p-4", style: { backgroundColor: "rgb(149, 203, 238)" } }, r.a.createElement("img", { alt: "Third-Party Support", style: { margin: "auto" }, src: "/images/services/75x75third party icon2.png" }), r.a.createElement("div", null, "\xa0"), r.a.createElement("h3", { className: "mb-5 text-white", style: { fontFamily: "Arial,Helvetica,sans-serif" } }, "Third-Party Support"), r.a.createElement("div", { className: "plan-features text-white mt-5" }, r.a.createElement("p", null, r.a.createElement("span", { className: "text-white" }, "CAMO Services")), r.a.createElement("p", null, r.a.createElement("span", { className: "text-white" }, "MRO Services")), r.a.createElement("p", null, r.a.createElement("span", { className: "text-white" }, "Ferry Flight Services")), r.a.createElement("p", null, r.a.createElement("span", { className: "text-white" }, "\xa0")), r.a.createElement("p", null, r.a.createElement("span", { className: "text-white" }, "\xa0")))))))))) } }]), t
                }(n.Component),
                jr = (t(486), t(487), t(227)),
                Or = t.n(jr),
                Nr = t(228),
                xr = t.n(Nr),
                kr = t(229),
                wr = t.n(kr),
                Cr = t(230),
                Sr = t.n(Cr),
                Ar = function(e) {
                    Object(z.a)(t, e);
                    var a = Object(G.a)(t);

                    function t(e) { var n; return Object(M.a)(this, t), (n = a.call(this, e)).state = { clients: [{ name: "Director of Procurement and Aircraft Configuration", post: "Jackson Square Aviation", desc: "I found Aero Consultants cost-competitive, customer-focused and very responsive in supporting Jackson Square Aviation throughout most regions of the world." }, { name: "Senior Technical Asset Manager", post: "Elix Aviation", desc: "May I say a big thanks to you and Aero Consultant for supporting Elix in 2020" }, { name: "Head of Technical", post: "Bellinger Aviation", desc: "Very happy with the services and support received so far." }], clients2: [{ image: Or.a }, { image: xr.a }, { image: wr.a }, { image: Sr.a }], responsive: { 576: { items: 2 } } }, n }
                    return Object(L.a)(t, [{ key: "render", value: function() { return r.a.createElement(r.a.Fragment, null, r.a.createElement("section", { className: "section-client", id: "clients" }, r.a.createElement(W.a, null, r.a.createElement(dr.a, { className: "justify-content-center mb-5" }, r.a.createElement(pr.a, { lg: 7 }, r.a.createElement("div", { className: "text-center text-black" }, r.a.createElement("h4", { className: "text-black", style: { fontSize: "44px", fontFamily: "Arial,Helvetica,sans-serif" } }, "Our Clients")))), r.a.createElement("img", { alt: "Logo", src: "/client logo file.jpg", height: "100%", width: "100%" })))) } }]), t
                }(n.Component),
                _r = t(546),
                Ir = t.n(_r),
                Tr = t(1054),
                Br = t(1055),
                Pr = function(e) {
                    Object(z.a)(t, e);
                    var a = Object(G.a)(t);

                    function t() { return Object(M.a)(this, t), a.apply(this, arguments) }
                    return Object(L.a)(t, [{ key: "render", value: function() { return r.a.createElement(r.a.Fragment, null, this.props.clients.map((function(e, a) { return r.a.createElement("div", { key: a, className: "item" }, r.a.createElement(Tr.a, null, r.a.createElement(Er.a, { className: "p-4" }, r.a.createElement("p", { className: "mb-4" }, '" ', e.desc, ' "'), r.a.createElement(Br.a, { className: "pt-3" }, r.a.createElement("div", { className: "avatar-md mr-3" }, r.a.createElement("span", { className: "avatar-title rounded-circle bg-soft-primary text-primary font-16" }, e.name.charAt(0))), r.a.createElement(Br.a, { body: !0, className: "align-self-center" }, r.a.createElement("h5", { className: "font-16" }, e.name), r.a.createElement("span", null, "- ", e.post)), r.a.createElement("div", { className: "text-muted ml-2 align-self-end d-none d-lg-block" }, r.a.createElement("i", { className: "mdi mdi-star text-warning" }), r.a.createElement("i", { className: "mdi mdi-star text-warning ml-1" }), r.a.createElement("i", { className: "mdi mdi-star text-warning ml-1" }), r.a.createElement("i", { className: "mdi mdi-star text-warning ml-1" }), r.a.createElement("i", { className: "mdi mdi-star text-warning ml-1" })))))) }))) } }]), t
                }(n.Component),
                Dr = function(e) {
                    Object(z.a)(t, e);
                    var a = Object(G.a)(t);

                    function t(e) { var n; return Object(M.a)(this, t), (n = a.call(this, e)).state = { clients: [{ name: "Director of Procurement and Aircraft Configuration", post: "Jackson Square Aviation", desc: "I found Aero Consultants cost-competitive, customer-focused and very responsive in supporting Jackson Square Aviation throughout most regions of the world." }, { name: "Senior Technical Asset Manager", post: "Elix Aviation", desc: "May I say a big thanks to you and Aero Consultant for supporting Elix in 2020" }, { name: "Head of Technical", post: "Bellinger Aviation", desc: "Very happy with the services and support received so far." }], clients2: [{ image: Or.a }, { image: xr.a }, { image: wr.a }, { image: Sr.a }], responsive: { 576: { items: 2 } } }, n }
                    return Object(L.a)(t, [{ key: "render", value: function() { return r.a.createElement(r.a.Fragment, null, r.a.createElement("section", { className: "section-testimony", id: "testimony" }, r.a.createElement(W.a, null, r.a.createElement(dr.a, { className: "justify-content-center" }, r.a.createElement(pr.a, { lg: 7 }, r.a.createElement("div", { className: "text-center text-black" }, r.a.createElement("h4", { className: "text-black", style: { fontSize: "44px", fontFamily: "Arial,Helvetica,sans-serif" } }, "Testimony")))), r.a.createElement("br", null), r.a.createElement("br", null), r.a.createElement(dr.a, null, r.a.createElement(pr.a, { lg: 12 }, r.a.createElement(Ir.a, { className: "owl-theme testi-carousel", id: "testi-carousel", items: 1, loop: !0, margin: 10, nav: !0, responsive: this.state.responsive }, r.a.createElement(Pr, { clients: this.state.clients }))))))) } }]), t
                }(n.Component),
                Fr = function(e) {
                    Object(z.a)(t, e);
                    var a = Object(G.a)(t);

                    function t() { return Object(M.a)(this, t), a.apply(this, arguments) }
                    return Object(L.a)(t, [{ key: "render", value: function() { return r.a.createElement(r.a.Fragment, null, r.a.createElement("section", { className: "section", id: "subscribe" }, r.a.createElement(W.a, null, r.a.createElement(dr.a, { className: "justify-content-center mb-5" }, r.a.createElement(pr.a, { lg: 7 }, r.a.createElement("div", { className: "text-center text-black" }, r.a.createElement("h4", { className: "text-black", style: { fontSize: "44px", fontFamily: "Arial,Helvetica,sans-serif" } }, "Contact Us")))), r.a.createElement(dr.a, null, r.a.createElement(pr.a, { xl: 6, lg: 6, md: 6 }, r.a.createElement("div", { className: "text-center" }, r.a.createElement("div", { className: "subscribe" }, r.a.createElement(dr.a, null, r.a.createElement(pr.a, { md: 6 }, r.a.createElement("div", { className: "mt-3 mt-md-0" }, r.a.createElement($.a, { type: "submit", color: "primary", block: !0, onClick: function(e) { e.preventDefault(), window.open("https://forms.gle/qCcRLSn4TdM7GSJS9", "_blank") } }, "Ask Question"))))))), r.a.createElement(pr.a, { xl: 6, lg: 6, md: 6 }, r.a.createElement(pr.a, { md: 6 }, r.a.createElement("h4", { className: "text-black" }, "Aero Consultant")), r.a.createElement(pr.a, { md: 6 }, r.a.createElement("p", { className: "text-black" }, r.a.createElement("b", null, "Email :"), " sales@aeroconsultant.fr, consultant@aeroconsultant.fr")), r.a.createElement(pr.a, { md: 6 }, r.a.createElement("p", { className: "text-black" }, r.a.createElement("b", null, "Company Address :"), " Kemp House, 160 City Road, London- EC1V 2NX,UNITED KINGDOM")), r.a.createElement(pr.a, { md: 6 }, r.a.createElement("p", { className: "text-black" }, r.a.createElement("b", null, "Phone :"), " +33789985939"))))))) } }]), t
                }(n.Component),
                Rr = t(302),
                Mr = function(e) {
                    var a = { headers: Object(Aa.a)() },
                        t = "https://aeroconsultant.fr".toString() + "/consultant/landing.json";
                    Sa.a.get(t, a).then((function(e) { localStorage.setItem("consultant_profile_data", JSON.stringify(e.data.data.consultant)), localStorage.setItem("consultant_project", JSON.stringify(e.data.data.last_five_project)), window.location.href = "/consultant/settings/" + e.data.data.consultant.id + "/general" })).catch((function(a) { return 401 === a.response.status ? function(e) { return Object(ma.a)(e) }(e) : e.history.push("/errors/error-500") }))
                },
                Lr = [{
                    path: "/",
                    exact: !0,
                    component: function(e) {
                        Object(z.a)(t, e);
                        var a = Object(G.a)(t);

                        function t(e) { var n; return Object(M.a)(this, t), (n = a.call(this, e)).scrollNavigation = function() { document.documentElement.scrollTop > n.state.pos ? n.setState({ navClass: "navbar-light nav-sticky", imglight: !1 }) : n.setState({ navClass: "navbar-light", imglight: !0 }) }, n.state = { navItems: [{ id: 1, idnm: "home", navheading: "Home" }, { id: 2, idnm: "aboutus", navheading: "About Us" }, { id: 3, idnm: "services", navheading: "Services" }, { id: 4, idnm: "testimony", navheading: "Testimony" }, { id: 5, idnm: "clients", navheading: "Clients" }, { id: 6, idnm: "subscribe", navheading: "Contact Us" }], pos: document.documentElement.scrollTop, imglight: !0, navClass: "navbar-light" }, n }
                        return Object(L.a)(t, [{
                            key: "componentDidMount",
                            value: function() {
                                window.addEventListener("scroll", this.scrollNavigation, !0);
                                var e = JSON.parse(localStorage.getItem("user"));
                                if (e)
                                    if ("consultant" === e.role) {
                                        var a = JSON.parse(localStorage.getItem("consultant_profile_data"));
                                        a ? Object(Rr.a)(this.props, a) : Mr(this.props)
                                    } else "admin" === e.role || "member" === e.role ? this.props.history.push("/admin/analytics") : "client" === e.role && this.props.history.push("/client/dashboard");
                                else localStorage.removeItem("user"), localStorage.removeItem("consultant_email"), localStorage.removeItem("consultant_profile_data"), localStorage.removeItem("consultant_project"), localStorage.removeItem("consultant_duplicate_emails"), localStorage.removeItem("consultant_project"), localStorage.clear(), sessionStorage.clear()
                            }
                        }, { key: "componentWillUnmount", value: function() { window.removeEventListener("scroll", this.scrollNavigation, !0) } }, { key: "render", value: function() { return r.a.createElement(r.a.Fragment, null, r.a.createElement(ur, { navItems: this.state.navItems, navClass: this.state.navClass, imglight: this.state.imglight }), r.a.createElement(gr, null), r.a.createElement(hr, null), r.a.createElement(yr, null), r.a.createElement(Dr, null), r.a.createElement(Ar, null), r.a.createElement(fr, null), r.a.createElement(Fr, null)) } }]), t
                    }(n.Component)
                }, { path: "/users", component: re, routes: [{ path: "/users/confirm_url", exact: !0, component: Object(n.lazy)((function() { return Promise.all([t.e(1), t.e(13)]).then(t.bind(null, 1214)) })) }, { path: "/users/password/edit", exact: !0, component: Object(n.lazy)((function() { return Promise.all([t.e(1), t.e(14)]).then(t.bind(null, 1212)) })) }] }, { path: "/auth", component: re, routes: [{ path: "/auth/login", exact: !0, component: Object(n.lazy)((function() { return Promise.all([t.e(1), t.e(13)]).then(t.bind(null, 1214)) })) }, { path: "/auth/register", exact: !0, component: Object(n.lazy)((function() { return Promise.all([t.e(1), t.e(41)]).then(t.bind(null, 1226)) })) }, { path: "/auth/reset", exact: !0, component: Object(n.lazy)((function() { return Promise.all([t.e(1), t.e(14)]).then(t.bind(null, 1212)) })) }, { path: "/auth/confirm", exact: !0, component: Object(n.lazy)((function() { return Promise.all([t.e(1), t.e(42)]).then(t.bind(null, 1220)) })) }, { component: function() { return r.a.createElement(c.a, { to: "/errors/error-404" }) } }] }, { path: "/errors", component: oe, routes: [{ path: "/errors/error-401", exact: !0, component: Object(n.lazy)((function() { return t.e(34).then(t.bind(null, 1227)) })) }, { path: "/errors/error-404", exact: !0, component: Object(n.lazy)((function() { return t.e(35).then(t.bind(null, 1228)) })) }, { path: "/errors/error-500", exact: !0, component: Object(n.lazy)((function() { return t.e(36).then(t.bind(null, 1229)) })) }, { component: function() { return r.a.createElement(c.a, { to: "/errors/error-404" }) } }] }, { route: "*", component: Da, routes: [{ path: "/client/home", exact: !0, component: Object(n.lazy)((function() { return t.e(23).then(t.bind(null, 1230)) })) }, { path: "/client/dashboard", exact: !0, component: Object(n.lazy)((function() { return Promise.all([t.e(2), t.e(21)]).then(t.bind(null, 1206)) })) }, { path: "/client/saved", exact: !0, component: Object(n.lazy)((function() { return t.e(20).then(t.bind(null, 1207)) })) }, { path: "/client/message", exact: !0, component: Object(n.lazy)((function() { return t.e(33).then(t.bind(null, 1223)) })) }, { path: "/consultant/profile", exact: !0, component: Object(n.lazy)((function() { return Promise.all([t.e(0), t.e(3), t.e(4)]).then(t.bind(null, 1197)) })) }, { path: "/consultant/profile/:id/:tab", exact: !0, component: Object(n.lazy)((function() { return Promise.all([t.e(0), t.e(3), t.e(4)]).then(t.bind(null, 1197)) })) }, { path: "/consultant/settings", exact: !0, component: Object(n.lazy)((function() { return Promise.all([t.e(0), t.e(2), t.e(5), t.e(8)]).then(t.bind(null, 1200)) })) }, { path: "/consultant/settings/:id/:tab", exact: !0, component: Object(n.lazy)((function() { return Promise.all([t.e(0), t.e(2), t.e(5), t.e(8)]).then(t.bind(null, 1200)) })) }, { path: "/admin/analytics", exact: !0, component: Object(n.lazy)((function() { return t.e(28).then(t.bind(null, 1224)) })) }, { path: "/admin/consultant", exact: !0, component: Object(n.lazy)((function() { return Promise.all([t.e(0), t.e(2), t.e(6)]).then(t.bind(null, 1198)) })) }, { path: "/admin/consultant/:tab", exact: !0, component: Object(n.lazy)((function() { return Promise.all([t.e(0), t.e(2), t.e(6)]).then(t.bind(null, 1198)) })) }, { path: "/admin/client/:tab", exact: !0, component: Object(n.lazy)((function() { return Promise.all([t.e(0), t.e(24)]).then(t.bind(null, 1209)) })) }, { path: "/calendar", exact: !0, component: Object(n.lazy)((function() { return Promise.all([t.e(19), t.e(31)]).then(t.bind(null, 1215)) })) }, { path: "/changelog", exact: !0, component: Object(n.lazy)((function() { return t.e(32).then(t.bind(null, 1231)) })) }, { path: "/chat", exact: !0, component: Object(n.lazy)((function() { return t.e(9).then(t.bind(null, 1203)) })) }, { path: "/chat/:id", exact: !0, component: Object(n.lazy)((function() { return t.e(9).then(t.bind(null, 1203)) })) }, { path: "/dashboards/analytics", exact: !0, component: Tt }, { path: "/dashboards/default", exact: !0, component: fn }, { path: "/invoices/:id", exact: !0, component: Object(n.lazy)((function() { return t.e(38).then(t.bind(null, 1216)) })) }, { path: "/kanban-board", exact: !0, component: Object(n.lazy)((function() { return Promise.all([t.e(3), t.e(18), t.e(39)]).then(t.bind(null, 1211)) })) }, { path: "/mail", exact: !0, component: Object(n.lazy)((function() { return t.e(22).then(t.bind(null, 1205)) })) }, { path: "/management/customers", exact: !0, component: Object(n.lazy)((function() { return t.e(25).then(t.bind(null, 1217)) })) }, { path: "/management/customers/:id", exact: !0, component: Object(n.lazy)((function() { return Promise.all([t.e(0), t.e(7)]).then(t.bind(null, 1202)) })) }, { path: "/management/customers/:id/:tab", exact: !0, component: Object(n.lazy)((function() { return Promise.all([t.e(0), t.e(7)]).then(t.bind(null, 1202)) })) }, { path: "/management/projects", exact: !0, component: Object(n.lazy)((function() { return t.e(40).then(t.bind(null, 1218)) })) }, { path: "/management/orders", exact: !0, component: Object(n.lazy)((function() { return t.e(26).then(t.bind(null, 1219)) })) }, { path: "/management/orders/:id", exact: !0, component: Object(n.lazy)((function() { return t.e(29).then(t.bind(null, 1213)) })) }, { path: "/overview", exact: !0, component: Kn }, { path: "/presentation", exact: !0, component: lr }, { path: "/profile/:id", exact: !0, component: Object(n.lazy)((function() { return Promise.all([t.e(0), t.e(3), t.e(10)]).then(t.bind(null, 1201)) })) }, { path: "/profile/:id/:tab", exact: !0, component: Object(n.lazy)((function() { return Promise.all([t.e(0), t.e(3), t.e(10)]).then(t.bind(null, 1201)) })) }, { path: "/projects/create", exact: !0, component: Object(n.lazy)((function() { return t.e(30).then(t.bind(null, 1208)) })) }, { path: "/projects/:id", exact: !0, component: Object(n.lazy)((function() { return Promise.all([t.e(0), t.e(11)]).then(t.bind(null, 1199)) })) }, { path: "/projects/:id/:tab", exact: !0, component: Object(n.lazy)((function() { return Promise.all([t.e(0), t.e(11)]).then(t.bind(null, 1199)) })) }, { path: "/projects", exact: !0, component: Object(n.lazy)((function() { return t.e(27).then(t.bind(null, 1210)) })) }, { path: "/settings", exact: !0, component: Object(n.lazy)((function() { return Promise.all([t.e(0), t.e(12)]).then(t.bind(null, 1204)) })) }, { path: "/settings/:tab", exact: !0, component: Object(n.lazy)((function() { return Promise.all([t.e(0), t.e(12)]).then(t.bind(null, 1204)) })) }, { path: "/social-feed", exact: !0, component: Object(n.lazy)((function() { return t.e(43).then(t.bind(null, 1221)) })) }, { path: "/getting-started", exact: !0, component: Object(n.lazy)((function() { return t.e(37).then(t.bind(null, 1232)) })) }, { component: function() { return r.a.createElement(c.a, { to: "/errors/error-404" }) } }] }];
            Ga.Chart.helpers.extend(Ga.Chart.elements.Rectangle.prototype, {
                draw: function() {
                    var e, a, t, n, r, i, o, c, l = this._chart.ctx,
                        s = this._view,
                        m = s.borderWidth,
                        u = this._chart.config.options.cornerRadius;
                    if (u < 0 && (u = 0), "undefined" === typeof u && (u = 0), s.horizontal ? (e = s.base, a = s.x, t = s.y - s.height / 2, n = s.y + s.height / 2, r = a > e ? 1 : -1, i = 1, o = s.borderSkipped || "left") : (e = s.x - s.width / 2, a = s.x + s.width / 2, t = s.y, r = 1, i = (n = s.base) > t ? 1 : -1, o = s.borderSkipped || "bottom"), m) {
                        var d = Math.min(Math.abs(e - a), Math.abs(t - n)),
                            p = (m = m > d ? d : m) / 2,
                            g = e + ("left" !== o ? p * r : 0),
                            h = a + ("right" !== o ? -p * r : 0),
                            v = t + ("top" !== o ? p * i : 0),
                            b = n + ("bottom" !== o ? -p * i : 0);
                        g !== h && (t = v, n = b), v !== b && (e = g, a = h)
                    }
                    l.beginPath(), l.fillStyle = s.backgroundColor, l.strokeStyle = s.borderColor, l.lineWidth = m;
                    var f = [
                            [e, n],
                            [e, t],
                            [a, t],
                            [a, n]
                        ],
                        E = ["bottom", "left", "top", "right"].indexOf(o, 0);

                    function y(e) { return f[(E + e) % 4] } - 1 === E && (E = 0);
                    var j = y(0);
                    l.moveTo(j[0], j[1]);
                    for (var O = 1; O < 4; O += 1) {
                        j = y(O);
                        var N = O + 1;
                        4 === N && (N = 0);
                        var x = f[2][0] - f[1][0],
                            k = f[0][1] - f[1][1],
                            w = f[1][0],
                            C = f[1][1];
                        if ((c = u) > Math.abs(k) / 2 && (c = Math.floor(Math.abs(k) / 2)), c > Math.abs(x) / 2 && (c = Math.floor(Math.abs(x) / 2)), k < 0) {
                            var S = w,
                                A = w + x,
                                _ = C + k,
                                I = C + k,
                                T = w,
                                B = w + x,
                                P = C,
                                D = C;
                            l.moveTo(T + c, P), l.lineTo(B - c, D), l.quadraticCurveTo(B, D, B, D - c), l.lineTo(A, I + c), l.quadraticCurveTo(A, I, A - c, I), l.lineTo(S + c, _), l.quadraticCurveTo(S, _, S, _ + c), l.lineTo(T, P - c), l.quadraticCurveTo(T, P, T + c, P)
                        } else if (x < 0) {
                            var F = w + x,
                                R = w,
                                M = C,
                                L = C,
                                z = w + x,
                                G = w,
                                U = C + k,
                                Y = C + k;
                            l.moveTo(z + c, U), l.lineTo(G - c, Y), l.quadraticCurveTo(G, Y, G, Y - c), l.lineTo(R, L + c), l.quadraticCurveTo(R, L, R - c, L), l.lineTo(F + c, M), l.quadraticCurveTo(F, M, F, M + c), l.lineTo(z, U - c), l.quadraticCurveTo(z, U, z + c, U)
                        } else l.moveTo(w + c, C), l.lineTo(w + x - c, C), l.quadraticCurveTo(w + x, C, w + x, C + c), l.lineTo(w + x, C + k - c), l.quadraticCurveTo(w + x, C + k, w + x - c, C + k), l.lineTo(w + c, C + k), l.quadraticCurveTo(w, C + k, w, C + k - c), l.lineTo(w, C + c), l.quadraticCurveTo(w, C, w + c, C)
                    }
                    l.fill(), m && l.stroke()
                }
            }), Oa.a.updateLocale("en", { relativeTime: { future: "in %s", past: "%s ago", s: "seconds", ss: "%ss", m: "1m", mm: "%dm", h: "1h", hh: "%dh", d: "1d", dd: "%dd", M: "1M", MM: "%dM", y: "1Y", yy: "%dY" } });
            var zr = t(233),
                Gr = t.n(zr);
            Gr.a.validators = Object(k.a)(Object(k.a)({}, Gr.a.validators), {}, { regex: function(e, a) { if (!new RegExp(a.pattern).test(e)) return a.message }, checked: function(e, a) { if (!0 !== e) return a.message || "must be checked" } });
            t(159), t(947), t(948), t(949), t(950), t(951), t(952), t(953), t(954), t(955), t(956);
            var Ur = t(547),
                Yr = new(t.n(Ur).a)(fa.a, { delayResponse: 0 });
            Yr.onGet("/api/account/profile").reply(200, { profile: { avatar: "/images/avatars/avatar_11.png", canHire: !1, country: "USA", email: "shen.zhi@devias.io", firstName: "Shen", isPublic: !0, lastName: "Zhi", phone: "+40 777666555", state: "Alabama", timezone: "4:32PM (GMT-4)" } }), Yr.onGet("/api/account/statistics").reply(200, { statistics: { payout: "4,250", projects: "12,500", visitors: "230", watching: "5" } }), Yr.onGet("/api/account/projects").reply(200, { projects: [{ id: xn()(), title: "Mella Full Screen Slider", price: "3K - 6K", currency: "$", type: "Full-Time", location: "Europe", author: { name: "Anje Keizer", avatar: "/images/avatars/avatar_5.png" }, tags: [{ id: xn()(), text: "Vue JS", color: h.a.green[600] }], updated_at: Oa()().subtract(24, "minutes") }] }), Yr.onGet("/api/account/todos").reply(200, { todos: [{ id: xn()(), title: "Finish the proposal design and contract for the client ASAP", deadline: Oa()().subtract(2, "days"), done: !1 }, { id: xn()(), title: "Finish the proposal design and contract for the client ASAP", deadline: Oa()(), done: !1 }, { id: xn()(), title: "Upload the files for the client @Adrian Stefan with the fonts, assets exported and all the fancy svgs", deadline: Oa()().add(2, "days"), done: !1 }, { id: xn()(), title: "Re-write the card component with hooks and context", deadline: Oa()().add(5, "days"), done: !1 }, { id: xn()(), title: "Send proposal for the fintech project", deadline: Oa()().add(5, "days"), done: !1 }, { id: xn()(), title: "Create todo app with react hooks just to get a better understanding of the concept", deadline: Oa()().add(7, "days"), done: !0 }] }), Yr.onGet("/api/account/notifications").reply(200, { notifications: [{ id: xn()(), title: "New order has been received", type: "order", created_at: Oa()().subtract(2, "hours") }, { id: xn()(), title: "New customer is registered", type: "user", created_at: Oa()().subtract(1, "day") }, { id: xn()(), title: "Project has been approved", type: "project", created_at: Oa()().subtract(3, "days") }, { id: xn()(), title: "New feature has been added", type: "feature", created_at: Oa()().subtract(7, "days") }] }), Yr.onGet("/api/account/subscription").reply(200, { subscription: { name: "Freelancer", price: "5", currency: "$", proposalsLeft: 12, templatesLeft: 5, invitesLeft: 24, adsLeft: 10, hasAnalytics: !0, hasEmailAlerts: !0 } }), Yr.onGet("/api/account/settings").reply(200, { settings: {} }), Yr.onGet("/api/calendar").reply(200, { draft: [], events: [{ id: xn()(), title: "Call Samantha", desc: "Inform about new contract", color: h.a.green[700], start: Oa()("2019-07-01 16:55:00"), end: Oa()("2019-07-01 17:02:00") }, { id: xn()(), title: "Meet with IBM", desc: "Discuss about new partnership", start: Oa()("2019-07-03 08:55:00"), end: Oa()("2019-07-04 15:02:00") }, { id: xn()(), title: "SCRUM Planning", desc: "Prepare documentation", allDay: !0, start: Oa()("2019-07-14 16:55:00") }, { id: xn()(), title: "Beign SEM", desc: "Meet with team to discuss", allDay: !0, start: Oa()("2019-07-18 07:00:00") }, { id: xn()(), title: "Fire John", desc: "Sorry, John", color: h.a.green[700], start: Oa()("2019-07-20 08:55:00"), end: Oa()("2019-07-20 09:30:00") }, { id: xn()(), title: "Call Alex", desc: "Discuss about the new project", allDay: !0, start: Oa()("2019-07-30 08:00:00") }, { id: xn()(), title: "Visit Samantha", color: h.a.green[700], desc: "Get a new quote for the payment processor", start: Oa()("2019-07-30 08:00:00"), end: Oa()("2019-07-30 09:00:00") }] }), Yr.onGet("/api/chat/conversations").reply(200, { conversations: [{ id: xn()(), otherUser: { name: "Adam Denisov", avatar: "/images/avatars/avatar_7.png", active: !0, lastActivity: Oa()() }, messages: [{ id: xn()(), sender: { authUser: !1, name: "Adam Denisov", avatar: "/images/avatars/avatar_7.png", lastActivity: Oa()() }, content: "Hey, nice projects! I really liked the one in react. What's your quote on kinda similar project?", contentType: "text", created_at: Oa()().subtract(10, "hours") }, { id: xn()(), sender: { authUser: !0, name: "Shen Zhi", avatar: "/images/avatars/avatar_11.png" }, content: "I would need to know more details, but my hourly rate stats at $35/hour. Thanks!", contentType: "text", created_at: Oa()().subtract(2, "hours") }, { id: xn()(), sender: { authUser: !1, name: "Adam Denisov", avatar: "/images/avatars/avatar_7.png" }, content: "Well it's a really easy one, I'm sure we can make it half of the price.", contentType: "text", created_at: Oa()().subtract(5, "minutes") }, { id: xn()(), sender: { authUser: !0, name: "Shen Zhi", avatar: "/images/avatars/avatar_11.png" }, content: "Then why don't you make it if it's that easy? Sorry I'm not interetes, have fantastic day Adam!", contentType: "text", created_at: Oa()().subtract(3, "minutes") }, { id: xn()(), sender: { authUser: !1, name: "Adam Denisov", avatar: "/images/avatars/avatar_7.png" }, content: "Last offer, $25 per hour", contentType: "text", created_at: Oa()().subtract(1, "minute") }, { id: xn()(), sender: { authUser: !1, name: "Adam Denisov", avatar: "/images/avatars/avatar_7.png" }, content: "/images/projects/project_1.jpg", contentType: "image", created_at: Oa()().subtract(1, "minute") }], unread: 0, created_at: Oa()().subtract(1, "minute") }, { id: xn()(), otherUser: { name: "Ekaterina Tankova", avatar: "/images/avatars/avatar_2.png", active: !0, lastActivity: Oa()() }, messages: [{ id: xn()(), sender: { authUser: !0, name: "Shen Zhi", avatar: "/images/avatars/avatar_11.png" }, content: "Hey, would you like to collaborate?", contentType: "text", created_at: Oa()().subtract(6, "minutes") }, { id: xn()(), sender: { authUser: !1, name: "Ekaterina Tankova", avatar: "/images/avatars/avatar_2.png" }, content: "I don't think that's ideal", contentType: "text", created_at: Oa()().subtract(5, "minutes") }], unread: 3, created_at: Oa()().subtract(26, "minutes") }, { id: xn()(), otherUser: { name: "Emilee Simchenko", avatar: "/images/avatars/avatar_9.png", active: !1, lastActivity: Oa()().subtract(2, "minutes") }, messages: [{ id: xn()(), sender: { authUser: !1, name: "Emilee Simchenko", avatar: "/images/avatars/avatar_9.png" }, content: "Hi Shen, we should submit the product today", contentType: "text", created_at: Oa()().subtract(2, "hours") }, { id: xn()(), sender: { authUser: !0, name: "Shen Zhi", avatar: "/images/avatars/avatar_11.png" }, content: "Oh, totally forgot about it", contentType: "text", created_at: Oa()().subtract(1, "hour").subtract(2, "minutes") }, { id: xn()(), sender: { authUser: !0, name: "Shen Zhi", avatar: "/images/avatars/avatar_11.png" }, content: "Alright then", contentType: "text", created_at: Oa()().subtract(1, "hour") }], unread: 0, created_at: Oa()().subtract(3, "hours") }, { id: xn()(), otherUser: { name: "Kwak Seong-Min", avatar: "/images/avatars/avatar_10.png", active: !0, lastActivity: Oa()() }, messages: [{ id: xn()(), sender: { authUser: !0, name: "Shen Zhi", avatar: "/images/avatars/avatar_11.png" }, content: "Hi Kwak! I've seen your projects and we can work together on a project. Will send you the details later.", contentType: "text", created_at: Oa()().subtract(3, "days") }, { id: xn()(), sender: { authUser: !1, name: "Kwak Seong-Min", avatar: "/images/avatars/avatar_10.png" }, content: "Haha, right, we'll do it", contentType: "text", created_at: Oa()().subtract(2, "days") }], unread: 1, created_at: Oa()().subtract(2, "days") }, { id: xn()(), otherUser: { name: "Cao Yu", avatar: "/images/avatars/avatar_3.png", active: !1, lastActivity: Oa()().subtract(4, "hours") }, messages: [{ id: xn()(), sender: { authUser: !0, name: "Shen Zhi", avatar: "/images/avatars/avatar_11.png" }, content: "Did you receive my email about the brief?", contentType: "text", created_at: Oa()().subtract(3, "days") }, { id: xn()(), sender: { authUser: !1, name: "Cao Yu", avatar: "/images/avatars/avatar_3.png" }, content: "I'm not sure, but I will check it later", contentType: "text", created_at: Oa()().subtract(2, "days") }], unread: 0, created_at: Oa()().subtract(5, "days") }, { id: xn()(), otherUser: { name: "Clarke Gillebert", avatar: "/images/avatars/avatar_6.png", active: !0, lastActivity: Oa()() }, messages: [{ id: xn()(), sender: { authUser: !1, name: "Clarke Gillebert", avatar: "/images/avatars/avatar_6.png" }, content: "Hey Shen! I love your projects!!!", contentType: "text", created_at: Oa()().subtract(2, "days") }, { id: xn()(), sender: { authUser: !0, name: "Shen Zhi", avatar: "/images/avatars/avatar_11.png" }, content: "Haha thank you Clarke, I'm doing our best", contentType: "text", created_at: Oa()().subtract(3, "days") }], unread: 0, created_at: Oa()().subtract(5, "days") }] }), Yr.onGet("/api/chat/activity").reply(200, { groups: [{ id: "clients", name: "Clients" }, { id: "friends", name: "Friends" }], connections: [{ id: xn()(), name: "Ekaterina Tankova", avatar: "/images/avatars/avatar_2.png", active: !1, lastActivity: Oa()().subtract(24, "minutes"), group: "clients" }, { id: xn()(), name: "Cao Yu", avatar: "/images/avatars/avatar_3.png", active: !0, lastActivity: Oa()(), group: "clients" }, { id: xn()(), name: "Anje Keizer", avatar: "/images/avatars/avatar_5.png", active: !1, lastActivity: Oa()().subtract(1, "minutes"), group: "clients" }, { id: xn()(), name: "Ava Gregoraci", avatar: "/images/avatars/avatar_8.png", active: !0, lastActivity: Oa()(), group: "clients" }, { id: xn()(), name: "Clarke Gillebert", avatar: "/images/avatars/avatar_6.png", active: !0, lastActivity: Oa()(), group: "friends" }, { id: xn()(), name: "Adam Denisov", avatar: "/images/avatars/avatar_7.png", active: !1, lastActivity: Oa()().subtract(24, "minutes"), group: "friends" }, { id: xn()(), name: "Emilee Simchenko", avatar: "/images/avatars/avatar_9.png", active: !0, lastActivity: Oa()(), group: "friends" }, { id: xn()(), name: "Kwak Seong-Min", avatar: "/images/avatars/avatar_10.png", active: !0, lastActivity: Oa()(), group: "friends" }, { id: xn()(), name: "Shen Zhi", avatar: "/images/avatars/avatar_11.png", active: !0, lastActivity: Oa()(), group: "friends" }, { id: xn()(), name: "Merrile Burgett", avatar: "/images/avatars/avatar_12.png", active: !1, lastActivity: Oa()().subtract(2, "days") }] }), Yr.onGet("/api/management/customers").reply(200, { customers: [{ id: xn()(), name: "Ekaterina Tankova", email: "ekaterina.tankova@devias.io", avatar: "/images/avatars/avatar_2.png", spent: "500.00", currency: "$", type: "Agency", projects: "1", rating: 5, location: "West Virginia, USA" }, { id: xn()(), name: "Cao Yu", email: "cao.yu@devias.io", avatar: "/images/avatars/avatar_3.png", spent: "300.00", type: "Freelancer", currency: "$", projects: "3", rating: 4.3, location: "Bristow" }, { id: xn()(), name: "Alexa Richardson", email: "alexa.richardson@devias.io", avatar: "/images/avatars/avatar_4.png", spent: "2,600.00", type: "Enterprise", currency: "$", projects: "0", rating: 4.5, location: "Georgia, USA" }, { id: xn()(), name: "Anje Keizer", email: "anje.keizer@devias.io", avatar: "/images/avatars/avatar_5.png", spent: "5,600.00", type: "Enterprise", currency: "$", projects: "6", rating: 4, location: "Ohio, USA" }, { id: xn()(), name: "Clarke Gillebert", email: "clarke.gillebert@devias.io", avatar: "/images/avatars/avatar_6.png", spent: "500.00", type: "Agency", currency: "$", projects: "1", rating: 3.5, location: "Texas, USA" }, { id: xn()(), name: "Adam Denisov", email: "adam.denisov@devias.io", avatar: "/images/avatars/avatar_7.png", spent: "5,230.00", type: "Agency", currency: "$", projects: "0", rating: 3, location: "California, USA" }, { id: xn()(), name: "Ava Gregoraci", email: "ava.gregoraci@devias.io", avatar: "/images/avatars/avatar_8.png", spent: "300.00", type: "Freelancer", currency: "$", projects: "0", rating: 4, location: "California, USA" }, { id: xn()(), name: "Emilee Simchenko", email: "emilee.simchenko@devias.io", avatar: "/images/avatars/avatar_9.png", spent: "100.00", type: "Agency", currency: "$", projects: "4", rating: 4.5, location: "Nevada, USA" }, { id: xn()(), name: "Kwak Seong-Min", email: "kwak.seong.min@devias.io", avatar: "/images/avatars/avatar_10.png", spent: "1,000.00", type: "Freelancer", currency: "$", projects: "2", rating: 5, location: "Michigan, USA" }, { id: xn()(), name: "Shen Zhi", email: "shen.zhi@devias.io", avatar: "/images/avatars/avatar_11.png", spent: "2,300.00", type: "Agency", currency: "$", projects: "0", rating: 3.9, location: "Utah, USA" }, { id: xn()(), name: "Merrile Burgett", email: "merrile.burgett@devias.io", avatar: "/images/avatars/avatar_12.png", spent: "200.00", type: "Enterprise", currency: "$", projects: "7", rating: 4.2, location: "Utah, USA" }] }), Yr.onGet("/api/management/customers/1/summary").reply(200, { summary: { name: "Ekaterina Tankova", email: "ekaterina@devias.io", phone: "+55 748 327 439", state: "Alabama", country: "United States", zipCode: "240355", address1: "Street John Wick, no. 7", address2: "House #25", iban: "4142 **** **** **** ****", autoCC: !1, verified: !0, currency: "$", invoices: [{ id: xn()(), type: "paid", value: 10 }, { id: xn()(), type: "paid", value: 15 }, { id: xn()(), type: "due", value: 5 }, { id: xn()(), type: "income", value: 10 }], vat: 19, balance: 0, emails: [{ id: xn()(), description: "Order confirmation", created_at: Oa()().subtract(3, "days").subtract(5, "hours").subtract(34, "minutes") }, { id: xn()(), description: "Order confirmation", created_at: Oa()().subtract(4, "days").subtract(11, "hours").subtract(49, "minutes") }] } }), Yr.onGet("/api/management/customers/1/invoices").reply(200, { invoices: [{ id: xn()(), date: Oa()(), description: "Freelancer Subscription (12/05/2019 - 11/06/2019)", paymentMethod: "Credit Card", value: "5.25", currency: "$", status: "paid" }, { id: xn()(), date: Oa()(), description: "Freelancer Subscription (12/05/2019 - 11/06/2019)", paymentMethod: "Credit Card", value: "5.25", currency: "$", status: "paid" }] }), Yr.onGet("/api/management/customers/1/logs").reply(200, { logs: [{ id: xn()(), status: 200, method: "POST", route: "/api/purchase", desc: "Purchase", IP: "84.234.243.42", created_at: Oa()().subtract(2, "days").subtract(2, "minutes").subtract(56, "seconds") }, { id: xn()(), status: 522, error: "Invalid credit card", method: "POST", route: "/api/purchase", desc: "Purchase", IP: "84.234.243.42", created_at: Oa()().subtract(2, "days").subtract(2, "minutes").subtract(56, "seconds") }, { id: xn()(), status: 200, method: "DELETE", route: "/api/products/d65654e/remove", desc: "Cart remove", IP: "84.234.243.42", created_at: Oa()().subtract(2, "days").subtract(8, "minutes").subtract(23, "seconds") }, { id: xn()(), status: 200, method: "GET", route: "/api/products/d65654e/add", desc: "Cart add", IP: "84.234.243.42", created_at: Oa()().subtract(2, "days").subtract(20, "minutes").subtract(54, "seconds") }, { id: xn()(), status: 200, method: "GET", route: "/api/products/c85727f/add", desc: "Cart add", IP: "84.234.243.42", created_at: Oa()().subtract(2, "days").subtract(34, "minutes").subtract(16, "seconds") }, { id: xn()(), status: 200, method: "GET", route: "/api/products/c85727f", desc: "View product", IP: "84.234.243.42", created_at: Oa()().subtract(2, "days").subtract(54, "minutes").subtract(30, "seconds") }, { id: xn()(), status: 200, method: "GET", route: "/api/products", desc: "Get products", IP: "84.234.243.42", created_at: Oa()().subtract(2, "days").subtract(56, "minutes").subtract(40, "seconds") }, { id: xn()(), status: 200, method: "POST", route: "/api/login", desc: "Login", IP: "84.234.243.42", created_at: Oa()().subtract(2, "days").subtract(57, "minutes").subtract(5, "seconds") }] }), Yr.onGet("/api/mail").reply(200, { emails: [{ id: xn()(), seen: !0, favorited: !0, labels: [{ text: "Business", color: h.a.blue[600] }, { text: "Personal", color: h.a.orange[600] }], subject: "Website redesign. Interested in collaboration", message: "\nHi Matt, I saw your work on instagram and would be interested in getting a quote for Logo and slider\n\nInteger velit massa, pharetra sed lacus eu, pulvinar faucibus ex. Ut pretium ex id turpis elementum, aliquam accumsan enim sollicitudin. Sed nec consectetur lorem, ac ullamcorper augue. Suspendisse tempus ligula suscipit finibus vehicula. Morbi viverra finibus lectus, egestas dictum mi mollis nec. Proin eget vehicula eros, sit amet molestie ipsum. Morbi feugiat, elit non placerat fringilla, leo risus tristique felis, sollicitudin tristique nibh arcu nec arcu. Maecenas vel turpis nibh. Etiam in lectus quis felis facilisis dictum. Morbi id vehicula lectus, vel imperdiet dolor. Phasellus consequat tempor tellus, quis placerat quam posuere eget. Mauris blandit, nisl eu sollicitudin tincidunt, tellus diam accumsan arcu, vel pharetra lectus est nec nisi. In sem dolor, mollis sed risus eu, mattis dictum lectus. Suspendisse urna est, finibus et urna non, tincidunt placerat eros.\n\nDonec viverra ipsum id auctor rutrum. Morbi consequat a nunc non interdum. Nulla accumsan eget felis a dictum. Cras rhoncus tortor eget velit fringilla suscipit. Donec quis arcu eu nibh aliquet auctor eget fringilla felis. Sed commodo efficitur massa. Proin maximus elit in suscipit laoreet. Integer pretium arcu ac mauris ullamcorper auctor. Vivamus tincidunt lacus eget purus feugiat tincidunt. Etiam feugiat gravida ullamcorper. Pellentesque cursus vehicula lectus et consectetur. Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Nam ligula risus, congue eu pellentesque id, volutpat aliquam arcu. Donec efficitur ipsum id neque rhoncus viverra. Vestibulum hendrerit et eros eu bibendum.\n\n\nKind regards,\n\nEkaterina Tankova\n      ", receiver: { name: "Ekaterina Tankova", email: "ekaterina.tankova@devias.io", avatar: "/images/avatars/avatar_2.png" }, created_at: Oa()() }, { id: xn()(), seen: !1, favorited: !1, labels: [], subject: "Amazing work", message: "Hey, nice projects! I really liked the one in react. What's your quote on kinda similar project?", receiver: { name: "Adam Denisov", email: "adam.denisov@devias.io", avatar: "/images/avatars/avatar_7.png" }, created_at: Oa()() }, { id: xn()(), seen: !1, favorited: !1, subject: "Flight reminder", labels: [{ text: "Work", color: h.a.green[600] }], message: "Dear Shen, Your flight is coming up soon. Please don\u2019t forget to check in for your scheduled flight.", receiver: { name: "Clarke Gillebert", avatar: "/images/avatars/avatar_6.png" }, created_at: Oa()() }, { id: xn()(), seen: !0, favorited: !0, labels: [], subject: "Posible candidates for the position", message: "My market leading client has another fantastic opportunity for an experienced Software Developer to join them on a heavily remote basis", receiver: { name: "Cao Yu", avatar: "/images/avatars/avatar_3.png" }, created_at: Oa()() }] }), Yr.onGet("/api/projects").reply(200, { projects: [{ id: xn()(), title: "Mella Full Screen Slider", author: { name: "Anje Keizer", avatar: "/images/avatars/avatar_5.png" }, price: "12,500", currency: "$", type: "Full-Time", location: "Europe", status: "In progress", members: 5, tags: [{ text: "Angular JS", color: h.a.red[600] }], start_date: Oa()(), end_date: Oa()(), updated_at: Oa()().subtract(24, "minutes") }, { id: xn()(), title: "Dashboard Design", author: { name: "Emilee Simchenko", avatar: "/images/avatars/avatar_9.png" }, price: "15,750", currency: "$", type: "Full-Time", location: "Europe", status: "In progress", members: 3, tags: [{ text: "HTML & CSS", color: h.a.grey[600] }], start_date: Oa()(), end_date: Oa()(), updated_at: Oa()().subtract(1, "hour") }, { id: xn()(), title: "Ten80 Web Design", author: { name: "Kwak Seong-Min", avatar: "/images/avatars/avatar_10.png" }, price: "15,750", currency: "$", type: "Full-Time", location: "Europe", status: "Completed", members: 8, tags: [{ text: "React JS", color: h.a.indigo[600] }], start_date: Oa()(), end_date: Oa()(), updated_at: Oa()().subtract(16, "hour") }, { id: xn()(), title: "Neura e-commerce UI Kit", author: { name: "Shen Zhi", avatar: "/images/avatars/avatar_11.png" }, price: "12,500", currency: "$", type: "Full-Time", location: "Europe", status: "In progress", members: 10, tags: [{ text: "Vue JS", color: h.a.green[600] }], start_date: Oa()(), end_date: Oa()(), updated_at: Oa()().subtract(3, "days") }, { id: xn()(), title: "Administrator Dashboard", author: { name: "Cao Yu", avatar: "/images/avatars/avatar_3.png" }, price: "15,750", currency: "$", type: "Full-Time", location: "Europe", status: "Canceled", members: 2, tags: [{ text: "Angular JS", color: h.a.red[600] }, { text: "HTML & CSS", color: h.a.grey[600] }], start_date: Oa()(), end_date: Oa()(), updated_at: Oa()().subtract(7, "days") }, { id: xn()(), title: "Kalli UI Kit", author: { name: "Anje Keizer", avatar: "/images/avatars/avatar_5.png" }, price: "15,750", currency: "$", type: "Full-Time", location: "Europe", status: "Completed", members: 12, tags: [{ text: "Vue JS", color: h.a.green[600] }], start_date: Oa()(), end_date: Oa()(), updated_at: Oa()().subtract(8, "days") }] }), Yr.onGet("/api/projects/1").reply(200, { project: { title: "Develop a PDF Export App", author: { name: "Emilee Simchenko", avatar: "/images/avatars/avatar_9.png", bio: "We build beautiful functional themes for web professionals" }, brief: "\n#### TL;DR\n\nThe primary aim of the product is to convert survery responses into PDF reports, these reports are generated on to what we call templates. This product is designer to work with 3rd party survery providers. The first MVP will integrate with TypeForm, because the's no direct way to convert results to PDF from the form people create in TypeForm and then ask users to fill out.\n\n#### Background information\n\nDesign files are attachedin the files tab.\n\nDevelop the web app screens for our product called \"PDFace\". Please look at the wireframes, system activity workflow and read the section above to understand what we're trying to archive.\n\nThere's not many screens we need designed, but there will be modals and various other system triggered evenets that will need to be considered.\n\nThe project has benn created in Sketch so let me know if there are any problmes opening this project and I'll try to convert into a usable file.\n\nI have attached a chat with our users most used devices.\n\n#### Goals:\n  - Maintainable Code\n  - Easy UX\n  - Readable Code\n  - No Redux\n    ", price: "12,500", currency: "USD", tags: [{ text: "React JS", color: h.a.indigo[600] }], members: [{ id: xn()(), name: "Ekaterina Tankova", avatar: "/images/avatars/avatar_2.png", bio: "Front End Developer" }, { id: xn()(), name: "Cao Yu", avatar: "/images/avatars/avatar_3.png", bio: "UX Designer" }, { id: xn()(), name: "Anje Keizer", avatar: "/images/avatars/avatar_5.png", bio: "Copyright" }], files: [{ id: xn()(), name: "example-project1.jpg", url: "/images/projects/project_2.jpg", mimeType: "image/png", size: 3145728 }, { id: xn()(), name: "docs.zip", url: "#", mimeType: "application/zip", size: 26214400 }, { id: xn()(), name: "example-project2.jpg", url: "/images/projects/project_1.jpg", mimeType: "image/png", size: 2097152 }], activities: [{ id: xn()(), subject: "Project owner", subject_type: "user", action_type: "upload_file", action_desc: "has uploaded a new file", created_at: Oa()().subtract(23, "minutes") }, { id: xn()(), subject: "Adrian Stefan", subject_type: "user", action_type: "join_team", action_desc: "joined team as a Front-End Developer", created_at: Oa()().subtract(2, "hours") }, { id: xn()(), subject: "Alexandru Robert", action_type: "join_team", action_desc: "joined team as a Full Stack Developer", created_at: Oa()().subtract(9, "hours") }, { id: xn()(), subject: "Project owner", subject_type: "user", action_type: "price_change", action_desc: "raised the project budget", created_at: Oa()().subtract(2, "days") }, { id: xn()(), subject: "Contest", subject_type: "project", action_type: "contest_created", action_desc: "created", created_at: Oa()().subtract(4, "days") }], subscribers: [{ id: xn()(), name: "Ekaterina Tankova", avatar: "/images/avatars/avatar_2.png", cover: "/images/covers/cover_1.jpg", common_connections: 12, labels: ["User Experience", "FrontEnd development", "HTML5", "VueJS", "ReactJS"] }, { id: xn()(), name: "Cao Yu", avatar: "/images/avatars/avatar_3.png", cover: "/images/covers/cover_2.jpg", common_connections: 5, labels: ["User Interface", "FullStack development", "Angular", "ExpressJS"] }, { id: xn()(), name: "Clarke Gillebert", avatar: "/images/avatars/avatar_6.png", cover: "/images/covers/cover_2.jpg", common_connections: 17, labels: ["BackEnd development", "Firebase", "MongoDB", "ExpressJS"] }], deadline: Oa()().add(7, "days"), updated_at: Oa()().subtract(23, "minutes") } }), Yr.onGet("/api/social-feed").reply(200, { posts: [{ id: xn()(), author: { name: "Kwak Seong-Min", avatar: "/images/avatars/avatar_10.png" }, message: "Hey guys! What's your favorite framework?", liked: !0, likes: 1, comments: [{ id: xn()(), author: { name: "Merrile Burgett", avatar: "/images/avatars/avatar_12.png" }, message: "I've been using Angular for the past 3 years", created_at: Oa()().subtract(3, "hours") }], created_at: Oa()().subtract(16, "minutes") }, { id: xn()(), author: { name: "Shen Zhi", avatar: "/images/avatars/avatar_11.png" }, message: "Just made this home screen for a project, what-cha thinkin?", media: "/images/posts/post_1.jpg", liked: !0, likes: 24, comments: [{ id: xn()(), author: { name: "Anje Keizer", avatar: "/images/avatars/avatar_5.png" }, message: "Could use some more statistics, but that\u2019s me haha", created_at: Oa()().subtract(3, "hours") }, { id: xn()(), author: { name: "Ava Gregoraci", avatar: "/images/avatars/avatar_8.png" }, message: "Hmm, honestly this looks nice but I would change the shadow though", created_at: Oa()().subtract(2, "hours") }], created_at: Oa()().subtract(4, "hours") }, { id: xn()(), author: { name: "Shen Zhi", avatar: "/images/avatars/avatar_11.png" }, message: "As a human being, you are designed in a way that makes you incapable of experiencing any positive emotion unless you set an aim and progress towards it. What makes you happy is not, in fact, attaining it, but making progress towards it.", liked: !1, likes: 65, comments: [{ id: xn()(), author: { name: "Clarke Gillebert", avatar: "/images/avatars/avatar_6.png" }, message: "That\u2019s actually deep. Thanks for the design, would you consider making an interaction?", created_at: Oa()().subtract(3, "hours") }, { id: xn()(), author: { name: "Alexa Richardson", avatar: "/images/avatars/avatar_4.png" }, message: "Oh... so sentimental", created_at: Oa()().subtract(2, "hours") }], created_at: Oa()().subtract(7, "hours") }] }), Yr.onGet("/api/users").reply(200, { users: [] }), Yr.onGet("/api/users/1/posts").reply(200, { posts: [{ id: xn()(), author: { name: "Shen Zhi", avatar: "/images/avatars/avatar_11.png" }, message: "Just made this home screen for a project, what-cha thinkin?", media: "/images/posts/post_1.jpg", liked: !0, likes: 24, comments: [{ id: xn()(), author: { name: "Anje Keizer", avatar: "/images/avatars/avatar_5.png" }, message: "Could use some more statistics, but that\u2019s me haha", created_at: Oa()().subtract(3, "hours") }, { id: xn()(), author: { name: "Ava Gregoraci", avatar: "/images/avatars/avatar_8.png" }, message: "Hmm, honestly this looks nice but I would change the shadow though", created_at: Oa()().subtract(2, "hours") }], created_at: Oa()().subtract(4, "hours") }, { id: xn()(), author: { name: "Shen Zhi", avatar: "/images/avatars/avatar_11.png" }, message: "As a human being, you are designed in a way that makes you incapable of experiencing any positive emotion unless you set an aim and progress towards it. What makes you happy is not, in fact, attaining it, but making progress towards it.", liked: !1, likes: 65, comments: [{ id: xn()(), author: { name: "Clarke Gillebert", avatar: "/images/avatars/avatar_6.png" }, message: "That\u2019s actually deep. Thanks for the design, would you consider making an interaction?", created_at: Oa()().subtract(3, "hours") }, { id: xn()(), author: { name: "Alexa Richardson", avatar: "/images/avatars/avatar_4.png" }, message: "It looks nice", created_at: Oa()().subtract(2, "hours") }], created_at: Oa()().subtract(7, "hours") }] }), Yr.onGet("/api/users/1/projects").reply(200, { projects: [{ id: xn()(), title: "Mella Full Screen Slider", author: { name: "Anje Keizer", avatar: "/images/avatars/avatar_5.png" }, price: "12,500", currency: "$", type: "Full-Time", location: "Europe", tags: [{ text: "Angular JS", color: h.a.red[600] }], updated_at: Oa()().subtract(24, "minutes") }, { id: xn()(), title: "Dashboard Design", author: { name: "Devias IO", avatar: "" }, price: "15,750", currency: "$", type: "Full-Time", location: "Europe", tags: [{ text: "React JS", color: h.a.indigo[600] }], updated_at: Oa()().subtract(1, "hour") }, { id: xn()(), title: "Ten80 Web Design", author: { name: "Devias IO", avatar: "" }, price: "15,750", currency: "$", type: "Full-Time", location: "Europe", tags: [{ text: "Vue JS", color: h.a.green[600] }], updated_at: Oa()().subtract(16, "hour") }] }), Yr.onGet("/api/users/1/reviews").reply(200, { reviews: [{ id: xn()(), rating: 4, message: "Shen was really great during the all time session we created the project", reviewer: { name: "Ekaterina Tankova", avatar: "/images/avatars/avatar_2.png" }, project: { title: "Mella Full Screen Slider", price: "5,240.00" }, pricePerHour: "43.00", hours: 31, currency: "$", created_at: Oa()().subtract(4, "hours") }, { id: xn()(), rating: 5, reviewer: { name: "Cao Yu", avatar: "/images/avatars/avatar_3.png" }, project: { title: "Dashboard Design", price: "3,680.00" }, pricePerHour: "38.00", hours: 76, currency: "$", message: "Being the savage's bowsman, that is, the person who pulled the bow-oar in his boat (the second one from forward), it was my cheerful duty to attend upon him while taking that hard-scrabble scramble upon the dead whale's back. You have seen Italian organ-boys holding a dancing-ape by a long cord. Just so, from the ship's steep side, did I hold Queequeg down there in the sea, by what is technically called in the fishery a monkey-rope, attached to a strong strip of canvas belted round his waist.", created_at: Oa()().subtract(8, "days") }] }), Yr.onGet("/api/users/1/connections").reply(200, { connections: [{ id: xn()(), name: "Ekaterina Tankova", avatar: "/images/avatars/avatar_2.png", common: 12, status: "connected" }, { id: xn()(), name: "Cao Yu", avatar: "/images/avatars/avatar_3.png", common: 10, status: "rejected" }, { id: xn()(), name: "Alexa Richardson", avatar: "/images/avatars/avatar_4.png", common: 8, status: "pending" }, { id: xn()(), name: "Adam Denisov", avatar: "/images/avatars/avatar_7.png", common: 5, status: "not_connected" }, { id: xn()(), name: "Ava Gregoraci", avatar: "/images/avatars/avatar_8.png", common: 1, status: "connected" }] }), Yr.onGet("/api/invoices").reply(200, { invoices: [] }), Yr.onGet("/api/invoices/1").reply(200, { invoice: { id: xn()(), due_date: Oa()(), issue_date: Oa()().add(15, "days"), ref: "DEV-9483", customer: { name: "Tracey Herman", company: "Countdown Grey Lynn", nzbn: "6934656584231", address: "271 Richmond Rd, Grey Lynn, Auckland 1022, New Zealand" }, products: [{ id: xn()(), desc: "Freelancer Subscription (12/05/2019 - 11/06/2019)", value: "55.50" }], subtotal: "50.00", taxes: "5.50", total: "55.50", currency: "$", created_at: Oa()() } }), Yr.onGet("/api/kanban").reply(200, { lists: [{ id: "incoming", title: "Incoming" }, { id: "in_progress", title: "In progress" }, { id: "in_review", title: "In review" }, { id: "completed", title: "Completed" }], tasks: [{ id: xn()(), ref: "38", list: "incoming", title: "Call with sales of HubSpot", desc: "Duis condimentum lacus finibus felis pellentesque, ac auctor nibh fermentum. Duis sed dui ante. Phasellus id eros tincidunt, dictum lorem vitae, pellentesque sem. Aenean eu enim sit amet mauris rhoncus mollis. Sed enim turpis, porta a felis et, luctus faucibus nisi. Phasellus et metus fermentum, ultrices arcu aliquam, facilisis justo. Cras nunc nunc, elementum sed euismod ut, maximus eget nibh. Phasellus condimentum lorem neque. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Fusce sagittis pharetra eleifend. Suspendisse potenti.", members: ["/images/avatars/avatar_1.png", "/images/avatars/avatar_5.png", "/images/avatars/avatar_6.png"], files: 0, comments: 1, progress: 0, deadline: Oa()().add(7, "days") }, { id: xn()(), ref: "37", list: "incoming", title: "Interview for the Asis. Sales Manager", desc: "We are looking for vue experience and of course node js strong knowledge", members: ["/images/avatars/avatar_2.png", "/images/avatars/avatar_3.png"], files: 0, comments: 2, progress: 0, deadline: Oa()().add(6, "days") }, { id: xn()(), ref: "39", list: "incoming", title: "Change the height of the top bar because it looks too chunky", desc: "We nede to make it aggresive with pricing because it\u2019s in their interest to acquire us", members: ["/images/avatars/avatar_11.png"], files: 0, comments: 0, progress: 0, deadline: Oa()().add(5, "days") }, { id: xn()(), ref: "19", list: "incoming", title: "Integrate Stripe API", desc: "We nede to make it aggresive with pricing because it\u2019s in their interest to acquire us", members: ["/images/avatars/avatar_6.png", "/images/avatars/avatar_5.png", "/images/avatars/avatar_9.png"], files: 2, comments: 1, progress: 0, deadline: Oa()().add(4, "days") }, { id: xn()(), ref: "15", list: "in_progress", title: "Update the customer API for payments", desc: "We nede to make it aggresive with pricing because it\u2019s in their interest to acquire us", members: ["/images/avatars/avatar_10.png"], files: 2, comments: 0, progress: 60, deadline: Oa()().add(4, "hours") }, { id: xn()(), ref: "10", list: "in_progress", title: "Redesign the landing page", desc: "We nede to make it aggresive with pricing because it\u2019s in their interest to acquire us", members: ["/images/avatars/avatar_10.png", "/images/avatars/avatar_11.png"], files: 0, comments: 2, progress: 76, deadline: Oa()().add(4, "hours") }, { id: xn()(), ref: "24", list: "in_review", title: "Change the height of the top bar because it looks too chunky", desc: "We nede to make it aggresive with pricing because it\u2019s in their interest to acquire us", members: ["/images/avatars/avatar_6.png", "/images/avatars/avatar_4.png", "/images/avatars/avatar_2.png"], files: 0, comments: 7, progress: 90, deadline: Oa()().subtract(1, "days") }, { id: xn()(), ref: "21", list: "in_review", title: "Integrate Stripe API", desc: "We nede to make it aggresive with pricing because it\u2019s in their interest to acquire us", members: ["/images/avatars/avatar_6.png", "/images/avatars/avatar_4.png", "/images/avatars/avatar_8.png", "/images/avatars/avatar_2.png"], files: 0, comments: 7, progress: 90, deadline: Oa()().subtract(1, "days") }, { id: xn()(), ref: "17", list: "completed", title: "Design Customer Management Page", desc: "Change the height of the top bar because it looks too chunky", members: ["/images/avatars/avatar_6.png", "/images/avatars/avatar_2.png", "/images/avatars/avatar_9.png"], files: 3, comments: 3, progress: 100, deadline: Oa()().subtract(7, "days") }, { id: xn()(), ref: "23", list: "completed", title: "Integrate Messaging API", desc: "We nede to make it aggresive with pricing because it\u2019s in their interest to acquire us", members: ["/images/avatars/avatar_6.png", "/images/avatars/avatar_4.png", "/images/avatars/avatar_5.png", "/images/avatars/avatar_2.png", "/images/avatars/avatar_9.png"], files: 1, comments: 0, progress: 100, deadline: Oa()().subtract(7, "days") }] }), Yr.onGet("/api/tasks").reply(200, { tasks: [{ id: xn()(), title: "Update the API for the project", deadline: Oa()().add(1, "days").add(1, "hour"), members: ["/images/avatars/avatar_2.png", "/images/avatars/avatar_3.png", "/images/avatars/avatar_4.png", "/images/avatars/avatar_5.png", "/images/avatars/avatar_6.png", "/images/avatars/avatar_7.png"] }, { id: xn()(), title: "Redesign the landing page", deadline: Oa()().add(2, "day").add(1, "hour"), members: ["/images/avatars/avatar_8.png", "/images/avatars/avatar_10.png", "/images/avatars/avatar_12.png"] }, { id: xn()(), title: "Solve the bug for the showState", deadline: Oa()(), members: ["/images/avatars/avatar_7.png"] }, { id: xn()(), title: "Release v1.0 Beta", deadline: null, members: ["/images/avatars/avatar_2.png", "/images/avatars/avatar_10.png"] }, { id: xn()(), title: "GDPR Compliance", deadline: null, members: ["/images/avatars/avatar_5.png", "/images/avatars/avatar_2.png", "/images/avatars/avatar_6.png"] }, { id: xn()(), title: "Redesign Landing Page", deadline: null, members: ["/images/avatars/avatar_8.png"] }] }), Yr.onGet("/api/orders").reply(200, { orders: [{ id: xn()(), created_at: Oa()().subtract(10, "minutes"), customer: { name: "Ekaterina Tankova" }, payment: { ref: "FAD103", method: "CreditCard", total: "500.00", currency: "$", status: "pending" }, status: "inactive" }, { id: xn()(), created_at: Oa()().subtract(32, "minutes").subtract(23, "seconds"), customer: { name: "Cao Yu" }, payment: { ref: "FAD102", method: "CreditCard", total: "500.00", currency: "$", status: "pending" }, status: "inactive" }, { id: xn()(), created_at: Oa()().subtract(36, "minutes").subtract(51, "seconds"), customer: { name: "Alexa Richardson" }, payment: { ref: "FAD101", method: "PayPal", total: "500.00", currency: "$", status: "completed" }, status: "active" }, { id: xn()(), created_at: Oa()().subtract(38, "minutes").subtract(55, "seconds"), customer: { name: "Anje Keizer" }, payment: { ref: "FAD100", method: "CreditCard", total: "500.00", currency: "$", status: "pending" }, status: "inactive" }, { id: xn()(), created_at: Oa()().subtract(40, "minutes").subtract(3, "seconds"), customer: { name: "Clarke Gillebert" }, payment: { ref: "FAD99", method: "PayPal", total: "500.00", currency: "$", status: "completed" }, status: "active" }, { id: xn()(), created_at: Oa()().subtract(45, "minutes").subtract(32, "seconds"), customer: { name: "Adam Denisov" }, payment: { ref: "FAD98", method: "PayPal", total: "500.00", currency: "$", status: "completed" }, status: "active" }, { id: xn()(), created_at: Oa()().subtract(48, "minutes").subtract(57, "seconds"), customer: { name: "Ava Gregoraci", avatar: "/images/avatars/avatar_8.png" }, payment: { ref: "FAD97", method: "CreditCard", total: "500.00", currency: "$", status: "pending" }, status: "inactive" }, { id: xn()(), created_at: Oa()().subtract(49, "minutes").subtract(4, "seconds"), customer: { name: "Emilee Simchenko" }, payment: { ref: "FAD96", method: "CreditCard", total: "500.00", currency: "$", status: "completed" }, status: "active" }, { id: xn()(), created_at: Oa()().subtract(57, "minutes").subtract(43, "seconds"), customer: { name: "Kwak Seong-Min" }, payment: { ref: "FAD95", method: "PayPal", total: "500.00", currency: "$", status: "rejected" }, status: "inactive" }, { id: xn()(), created_at: Oa()().subtract(59, "minutes").subtract(6, "seconds"), customer: { name: "Shen Zhi" }, payment: { ref: "FAD94", method: "CreditCard", total: "500.00", currency: "$", status: "canceled" }, status: "inactive" }, { id: xn()(), created_at: Oa()().subtract(1, "hour").subtract(15, "minutes").subtract(43, "seconds"), customer: { name: "Merrile Burgett" }, payment: { ref: "FAD93", method: "PayPal", total: "500.00", currency: "$", status: "canceled" }, status: "inactive" }] }), Yr.onGet("/api/orders/1").reply(200, { order: { id: xn()(), ref: "FAD107", promoCode: null, value: "55.25", currency: "$", status: "canceled", customer: { name: "Ekaterina Tankova", address: "Street King William, 42456", city: "Montgomery", country: "United States" }, items: [{ id: xn()(), name: "Project Points", cuantity: 25, billing: "monthly", status: "completed", value: "50.25", currency: "$" }, { id: xn()(), name: "Freelancer Subscription", cuantity: 1, billing: "monthly", status: "completed", value: "5.00", currency: "$" }], created_at: Oa()() } }), Yr.onGet("/api/dashboard/top-referrals").reply(200, { referrals: [{ id: xn()(), color: h.a.blueGrey[700], name: "GitHub", initials: "GT", value: "53,032" }, { id: xn()(), color: h.a.cyan[500], name: "Twitter", initials: "TW", value: "39,551" }, { id: xn()(), color: h.a.indigo[600], name: "Hacker News", initials: "HN", value: "23,150" }, { id: xn()(), color: h.a.red[500], name: "Stack Overflow", initials: "SO", value: "14,093" }, { id: xn()(), color: h.a.orange[900], name: "Reddit.com", initials: "RD", value: "7,251" }, { id: xn()(), color: h.a.blueGrey[900], name: "Dev.to", initials: "DE", value: "5,694" }, { id: xn()(), color: h.a.blue[900], name: "Facebook", initials: "FB", value: "3,643" }, { id: xn()(), color: h.a.blueGrey[900], name: "Medium", initials: "MD", value: "1,654" }] }), Yr.onGet("/api/dashboard/profitable-products").reply(200, { products: [{ id: xn()(), type: "freelancer_basic", name: "Freelancer Basic Subscription", image: "/images/products/product_freelancer.svg", subscriptions: "13,153", currency: "$", price: "5.00", progress: 93 }, { id: xn()(), type: "freelancer_extra", name: "Freelancer Extra Subscription", image: "/images/products/product_freelancer.svg", subscriptions: "10,300", currency: "$", price: "15.00", progress: 76 }, { id: xn()(), type: "agency_basic", name: "Agency Basic Subscription", image: "/images/products/product_agency.svg", subscriptions: "5,300", currency: "$", price: "25.00", progress: 60 }, { id: xn()(), type: "enterprise_basic", name: "Enterprise Basic Subscription", image: "/images/products/product_enterprise.svg", subscriptions: "1,203", currency: "$", price: "205.00", progress: 46 }, { id: xn()(), type: "enterprise_extra", name: "Enterprise Extra Subscription", image: "/images/products/product_enterprise.svg", subscriptions: "254", currency: "$", price: "500.00", progress: 41 }] }), Yr.onGet("/api/dashboard/customer-activity").reply(200, { customers: [{ id: xn()(), type: "payment", description: "Subscription Purchase", author: { name: "Ekaterina Tankova", avatar: "/images/avatars/avatar_2.png" }, created_at: Oa()().subtract(23, "minutes") }, { id: xn()(), type: "payment", description: "Subscription Purchase", author: { name: "Cao Yu", avatar: "/images/avatars/avatar_3.png" }, created_at: Oa()().subtract(56, "minutes") }, { id: xn()(), type: "payment", description: "Subscription Purchase", author: { name: "Alexa Richardson", avatar: "/images/avatars/avatar_4.png" }, created_at: Oa()().subtract(2, "hours") }, { id: xn()(), type: "payment", description: "Subscription Purchase", author: { name: "Anje Keizer", avatar: "/images/avatars/avatar_5.png" }, created_at: Oa()().subtract(5, "minutes") }, { id: xn()(), type: "payment", description: "Subscription Purchase", author: { name: "Clarke Gillebert", avatar: "/images/avatars/avatar_6.png" }, created_at: Oa()().subtract(5, "minutes") }] }), Yr.onGet("/api/dashboard/earnings").reply(200, { earnings: [{ id: xn()(), label: "Subscriptions", value: 56, color: h.a.indigo[500] }, { id: xn()(), label: "Afiliate", value: 24, color: h.a.indigo[300] }, { id: xn()(), label: "Sales", value: 20, color: h.a.indigo[100] }] }), Yr.onGet("/api/dashboard/latest-orders").reply(200, { orders: [{ id: xn()(), ref: "DEV1042", items: 7, value: "25.00", currency: "$", customer: { name: "Ekaterina Tankova", email: "ekaterina@devias.io" }, status: "pending" }, { id: xn()(), ref: "DEV1041", items: 8, value: "25.00", currency: "$", customer: { name: "Cao Yu", email: "cao.yu@devias.io" }, status: "complete" }, { id: xn()(), ref: "DEV1040", items: 4, value: "25.00", currency: "$", customer: { name: "Alexa Richardson", email: "alexa.richardson@devias.io" }, status: "rejected" }, { id: xn()(), ref: "DEV1039", items: 1, value: "25.00", currency: "$", customer: { name: "Anje Keizer", email: "anje.keiser@devias.io" }, status: "pending" }, { id: xn()(), ref: "DEV1038", items: 5, value: "25.00", currency: "$", customer: { name: "Clarke Gillebert", email: "clarke.gillebert@devias.io" }, status: "complete" }, { id: xn()(), ref: "DEV1037", items: 2, value: "25.00", currency: "$", customer: { name: "Merrile Burgett", email: "merrile.burgett@devias.io" }, status: "complete" }] }), Yr.onGet("/api/dashboard/latest-projects").reply(200, { projects: [{ id: xn()(), title: "Mella Full Screen Slider", price: "12,500", currency: "$", author: { name: "Anje Keizer", avatar: "/images/avatars/avatar_5.png" }, tags: [{ text: "Angular JS", color: h.a.red[600] }] }, { id: xn()(), title: "Dashboard Design", price: "15,750", currency: "$", author: { name: "Emilee Simchenko", avatar: "/images/avatars/avatar_9.png" }, tags: [{ text: "HTML & CSS", color: h.a.grey[600] }] }, { id: xn()(), title: "Ten80 Web Design", price: "15,750", currency: "$", author: { name: "Kwak Seong-Min", avatar: "/images/avatars/avatar_10.png" }, tags: [{ text: "React JS", color: h.a.indigo[600] }] }, { id: xn()(), title: "Neura e-commerce UI Kit", price: "12,500", currency: "$", author: { name: "Shen Zhi", avatar: "/images/avatars/avatar_11.png" }, tags: [{ text: "Vue JS", color: h.a.green[600] }] }, { id: xn()(), title: "Administrator Dashboard", price: "15,750", currency: "$", author: { name: "Cao Yu", avatar: "/images/avatars/avatar_3.png" }, tags: [{ text: "Angular JS", color: h.a.red[600] }] }] });
            t(960), t(961), t(962);
            var Wr = Object(l.a)(),
                Hr = function() {
                    var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {},
                        a = [A.a],
                        t = Object(_.composeWithDevTools)(S.applyMiddleware.apply(void 0, a)),
                        n = [t],
                        r = S.compose.apply(void 0, n),
                        i = Object(S.createStore)(P, e, r);
                    return i
                }(),
                qr = function() { return r.a.createElement(m.a, { store: Hr }, r.a.createElement(u.a, { theme: C }, r.a.createElement(d.a, { utils: s.a }, r.a.createElement(c.c, { history: Wr }, r.a.createElement(Ee.s, null), r.a.createElement(Ee.e, null), Object(p.a)(Lr))))) };
            Boolean("localhost" === window.location.hostname || "[::1]" === window.location.hostname || window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));
            var Jr = r.a.createElement(se.a, null, r.a.createElement(qr, null));
            o.a.render(Jr, document.getElementById("root")), "serviceWorker" in navigator && navigator.serviceWorker.ready.then((function(e) { e.unregister() }))
        }
    },
    [
        [557, 16, 17]
    ]
]);
//# sourceMappingURL=main.1845c6f0.chunk.js.map