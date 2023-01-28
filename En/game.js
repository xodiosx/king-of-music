
var _STRINGS = {
	Ad: {
		Mobile: {
			Preroll: {
				ReadyIn: "يرجى الانتظار،، ",
				Loading: "جاري تحميل اللعبة...",
				Close: "تمام"
			},
			Header: {
				ReadyIn: "يرجى الانتظار،،، ",
				Loading: "جاري تحميل اللعبة...",
				Close: "تمام"
			},
			End: {
				ReadyIn: "Advertisement ends in ",
				Loading: "يرجى الانتظار ...",
				Close: "درينا"
			}
		}
	},
	Splash: {
		Loading: "جاري التحميل ...",
		LogoLine1: "by learning u can do it ",
		LogoLine2: "Aleiwi",
		LogoLine3: "just play",
		TapToStart: "TAP اضغط للعب"
	},
	Game: {
		SelectPlayer: "Select Player",
		Win: "لقد فزت!",
		Lose: "لقد خسرت!",
		Score: "النقاط",
		Time: "الوقت",
		Settings: "الضبط",
		Paused: "متوقف",
		Score: "النقاط",
		High: "أعلى",
		Win1: "ممتاز",
		Win2: "روعة",
		Win3: "قوووة",
		Gameover: "انتهت اللعبة"
	},
	Songs: "حسن شاكوش بنت الجيران;بالتي ياليلي ياليلاه; أبو حنضلة كفو كفو;حسن شاكوش عود البنات; أبو حنضلة هدي هدي;شاما هيا هيا;سرهات دورموس دوهان;جابيد السلام لألله يابطة;اوكا أورتيجا ألعب يلا;سعد لمجرد غزالي;رامي صبري أنا بعترفلك;سعد لمجرد مآل حبيبي".split(";"),
	Results: {
		Title: "High score"
	}
};

var x1 = 0;
var x2 = 0;
var x3 = 0;
var x4 = 0;
var x5 = 0;
var x6 = 0;
var x7 = 0;
var x8 = 0;
var x9 = 0;
var x10 = 0;
var x11 = 0;
var x12 = 0;
var x13 = 0;
var _SETTINGS = {
	API: {
		Enabled: !0,
		Log: {
			Events: {
				InitializeGame: !1,
				EndGame: !0,
				Level: {
					Begin: !0,
					End: !0,
					Win: !0,
					Lose: !0,
					Draw: !0
				}
			}
		}
	},
	Ad: {
		Mobile: {
			Preroll: {
				Enabled: !0,
				Duration: 5,
				Width: 300,
				Height: 250,
				Rotation: {
					Enabled: !0,
					Weight: {
						MobileAdInGamePreroll: 40,
						MobileAdInGamePreroll2: 40,
						MobileAdInGamePreroll3: 20
					}
				}
			},
			Header: {
				Enabled: !1,
				Duration: 5,
				Width: 320,
				Height: 50,
				Rotation: {
					Enabled: !1,
					Weight: {
						MobileAdInGameHeader: 40,
						MobileAdInGameHeader2: 40,
						MobileAdInGameHeader3: 20
					}
				}
			},
			Footer: {
				Enabled: !1,
				Duration: 5,
				Width: 320,
				Height: 50,
				Rotation: {
					Enabled: !1,
					Weight: {
						MobileAdInGameFooter: 40,
						MobileAdInGameFooter2: 40,
						MobileAdInGameFooter3: 20
					}
				}
			},
			End: {
				Enabled: !1,
				Duration: 1,
				Width: 300,
				Height: 250,
				Rotation: {
					Enabled: !1,
					Weight: {
						MobileAdInGameEnd: 40,
						MobileAdInGameEnd2: 40,
						MobileAdInGameEnd3: 20
					}
				}
			}
		}
	},
	Language: {
		Default: "en"
	},
	DeveloperBranding: {
		Splash: {
			Enabled: !1
		},
		Logo: {
			Enabled: !1,
			Link: "../index.html",
			LinkEnabled: !1,
			NewWindow: !0,
			Width: 166,
			Height: 61
		}
	},
	Branding: {
		Splash: {
			Enabled: !0
		},
		Logo: {
			Enabled: !0,
			Link: "../index.html",
			LinkEnabled: !0,
			NewWindow: !0,
			Width: 280,
			Height: 34
		}
	},
	MoreGames: {
		Enabled: !0,
		Link: "../index.html",
		NewWindow: !0
	},
	Gamecenter: {
		Enabled: !1
	},
	TapToStartAudioUnlock: {
		Enabled: !0
	}
};
var MobileAdInGamePreroll = {
	ad_duration: _SETTINGS.Ad.Mobile.Preroll.Duration,
	ad_width: _SETTINGS.Ad.Mobile.Preroll.Width,
	ad_height: _SETTINGS.Ad.Mobile.Preroll.Height,
	ready_in: _STRINGS.Ad.Mobile.Preroll.ReadyIn,
	loading: _STRINGS.Ad.Mobile.Preroll.Loading,
	close: _STRINGS.Ad.Mobile.Preroll.Close + "&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;",
	Initialize: function() {
		if (_SETTINGS.Ad.Mobile.Preroll.Rotation.Enabled) {
			var b = _SETTINGS.Ad.Mobile.Preroll.Rotation.Weight,
				c = b.MobileAdInGamePreroll,
				d =
				c + b.MobileAdInGamePreroll2,
				b = d + b.MobileAdInGamePreroll3,
				e = Math.floor(100 * Math.random());
			console.log("seed: ", e);
			e <= c ? this.selectedOverlayName = "MobileAdInGamePreroll" : e <= d ? this.selectedOverlayName = "MobileAdInGamePreroll2" : e <= b && (this.selectedOverlayName = "MobileAdInGamePreroll3");
			console.log("Ad rotating preroll enabled")
		} else this.selectedOverlayName = "MobileAdInGamePreroll", console.log("Ad rotating preroll disabled");
		console.log("selected:", this.selectedOverlayName);
		this.overlay = $("#" + this.selectedOverlayName);
		this.box = $("#" + this.selectedOverlayName + "-Box");
		this.game = $("#game");
		this.boxContents = {
			footer: $("#" + this.selectedOverlayName + "-Box-Footer"),
			header: $("#" + this.selectedOverlayName + "-Box-Header"),
			close: $("#" + this.selectedOverlayName + "-Box-Close"),
			body: $("#" + this.selectedOverlayName + "-Box-Body")
		};
		this.box.width(this.ad_width);
		this.box.height(this.ad_height);
		this.box.css("left", (this.overlay.width() - this.box.width()) / 2);
		this.box.css("top", (this.overlay.height() - this.box.height() - this.boxContents.header.height() -
			this.boxContents.footer.height()) / 2);
		this.overlay.show(this.Timer(this.ad_duration))
	},
	Timer: function(b) {
		var c = b,
			d = setInterval(function() {
				MobileAdInGamePreroll.boxContents.header.text(MobileAdInGamePreroll.ready_in + c + "...");
				MobileAdInGamePreroll.boxContents.footer.text(MobileAdInGamePreroll.loading);
				c--;
				0 > c && (clearInterval(d), MobileAdInGamePreroll.boxContents.close.css("left", MobileAdInGamePreroll.boxContents.body.width() - 23), MobileAdInGamePreroll.boxContents.close.show(), MobileAdInGamePreroll.boxContents.header.html(MobileAdInGamePreroll.close),
					MobileAdInGamePreroll.boxContents.footer.text(""))
			}, 1E3)
	},
	Close: function() {
		this.boxContents.close.hide();
		this.overlay.hide()
	}
};
var MobileAdInGameHeader = {
	ad_duration: _SETTINGS.Ad.Mobile.Header.Duration,
	ad_width: _SETTINGS.Ad.Mobile.Header.Width,
	ad_height: _SETTINGS.Ad.Mobile.Header.Height,
	Initialize: function() {
		if (_SETTINGS.Ad.Mobile.Header.Rotation.Enabled) {
			var b = _SETTINGS.Ad.Mobile.Header.Rotation.Weight,
				c = b.MobileAdInGameHeader,
				d = c + b.MobileAdInGameHeader2,
				b = d + b.MobileAdInGameHeader3,
				e = Math.floor(100 * Math.random());
			console.log("seed: ", e);
			e <= c ? this.selectedOverlayName = "MobileAdInGameHeader" : e <= d ? this.selectedOverlayName = "MobileAdInGameHeader2" :
				e <= b && (this.selectedOverlayName = "MobileAdInGameHeader3");
			console.log("Ad rotating header enabled")
		} else this.selectedOverlayName = "MobileAdInGameHeader", console.log("Ad rotating header disabled");
		this.div = $("#" + this.selectedOverlayName);
		this.game = $("#game");
		this.div.width(this.ad_width);
		this.div.height(this.ad_height);
		this.div.css("left", this.game.position().left + (this.game.width() - this.div.width()) / 2);
		this.div.css("top", 0);
		this.div.show(this.Timer(this.ad_duration))
	},
	Timer: function(b) {
		var c = setInterval(function() {
			b--;
			0 > b && (MobileAdInGameHeader.div.hide(), clearInterval(c))
		}, 1E3)
	}
};
var MobileAdInGameFooter = {
	ad_duration: _SETTINGS.Ad.Mobile.Footer.Duration,
	ad_width: _SETTINGS.Ad.Mobile.Footer.Width,
	ad_height: _SETTINGS.Ad.Mobile.Footer.Height,
	Initialize: function() {
		if (_SETTINGS.Ad.Mobile.Footer.Rotation.Enabled) {
			var b = _SETTINGS.Ad.Mobile.Footer.Rotation.Weight,
				c = b.MobileAdInGameFooter,
				d = c + b.MobileAdInGameFooter2,
				b = d + b.MobileAdInGameFooter3,
				e = Math.floor(100 * Math.random());
			console.log("seed: ", e);
			e <= c ? this.selectedOverlayName = "MobileAdInGameFooter" : e <= d ? this.selectedOverlayName = "MobileAdInGameFooter2" :
				e <= b && (this.selectedOverlayName = "MobileAdInGameFooter3");
			console.log("Ad rotating footer enabled")
		} else this.selectedOverlayName = "MobileAdInGameFooter", console.log("Ad rotating footer disabled");
		this.div = $("#" + this.selectedOverlayName);
		this.game = $("#game");
		this.div.width(this.ad_width);
		this.div.height(this.ad_height);
		this.div.css("left", this.game.position().left + (this.game.width() - this.div.width()) / 2);
		this.div.css("top", this.game.height() - this.div.height() - 5);
		this.div.show(this.Timer(this.ad_duration))
	},
	Timer: function(b) {
		var c = setInterval(function() {
			b--;
			0 > b && (MobileAdInGameFooter.div.hide(), clearInterval(c))
		}, 1E3)
	}
};
var MobileAdInGameEnd = {
	ad_duration: _SETTINGS.Ad.Mobile.End.Duration,
	ad_width: _SETTINGS.Ad.Mobile.End.Width,
	ad_height: _SETTINGS.Ad.Mobile.End.Height,
	ready_in: _STRINGS.Ad.Mobile.End.ReadyIn,
	loading: _STRINGS.Ad.Mobile.End.Loading,
	close: _STRINGS.Ad.Mobile.End.Close + "&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;",
	Initialize: function() {
		if (_SETTINGS.Ad.Mobile.End.Rotation.Enabled) {
			var b = _SETTINGS.Ad.Mobile.End.Rotation.Weight,
				c = b.MobileAdInGameEnd,
				d = c + b.MobileAdInGameEnd2,
				b = d + b.MobileAdInGameEnd3,
				e = Math.floor(100 * Math.random());
			console.log("seed: ", e);
			e <= c ? this.selectedOverlayName = "MobileAdInGameEnd" : e <= d ? this.selectedOverlayName = "MobileAdInGameEnd2" : e <= b && (this.selectedOverlayName = "MobileAdInGameEnd3");
			console.log("Ad rotating end enabled")
		} else this.selectedOverlayName = "MobileAdInGameEnd", console.log("Ad rotating end disabled");
		console.log("selected:", this.selectedOverlayName);
		this.overlay = $("#" + this.selectedOverlayName);
		this.box = $("#" + this.selectedOverlayName + "-Box");
		this.game = $("#game");
		this.boxContents = {
			footer: $("#" + this.selectedOverlayName + "-Box-Footer"),
			header: $("#" + this.selectedOverlayName + "-Box-Header"),
			close: $("#" + this.selectedOverlayName + "-Box-Close"),
			body: $("#" + this.selectedOverlayName + "-Box-Body")
		};
		this.box.width(this.ad_width);
		this.box.height(this.ad_height);
		this.box.css("left", (this.overlay.width() - this.box.width()) / 2);
		this.box.css("top", (this.overlay.height() - this.box.height() - this.boxContents.header.height() - this.boxContents.footer.height()) / 2);
		this.overlay.show(this.Timer(this.ad_duration))
	},
	Timer: function(b) {
		var c = b,
			d = setInterval(function() {
				MobileAdInGameEnd.boxContents.header.text(MobileAdInGameEnd.ready_in + c + "...");
				MobileAdInGameEnd.boxContents.footer.text(MobileAdInGameEnd.loading);
				c--;
				0 > c && (clearInterval(d), MobileAdInGameEnd.boxContents.close.css("left", MobileAdInGameEnd.boxContents.body.width() - 23), MobileAdInGameEnd.boxContents.close.show(), MobileAdInGameEnd.boxContents.header.html(MobileAdInGameEnd.close), MobileAdInGameEnd.boxContents.footer.text(""))
			}, 1E3)
	},
	Close: function() {
		this.boxContents.close.hide();
		this.overlay.hide()
	}
};
! function(b, c) {
	"object" == typeof module && "object" == typeof module.exports ? module.exports = b.document ? c(b, !0) : function(b) {
		if (!b.document) throw Error("jQuery requires a window with a document");
		return c(b)
	} : c(b)
}("undefined" != typeof window ? window : this, function(b, c) {
	function d(b, c) {
		c = c || F;
		var d = c.createElement("script");
		d.text = b;
		c.head.appendChild(d).parentNode.removeChild(d)
	}

	function e(b) {
		var c = !!b && "length" in b && b.length,
			d = j.type(b);
		return "function" !== d && !j.isWindow(b) && ("array" === d || 0 === c || "number" ==
			typeof c && 0 < c && c - 1 in b)
	}

	function f(b, c) {
		return b.nodeName && b.nodeName.toLowerCase() === c.toLowerCase()
	}

	function l(b, c, d) {
		return j.isFunction(c) ? j.grep(b, function(b, x) {
			return !!c.call(b, x, b) !== d
		}) : c.nodeType ? j.grep(b, function(b) {
			return b === c !== d
		}) : "string" != typeof c ? j.grep(b, function(b) {
			return -1 < Ia.call(c, b) !== d
		}) : Ec.test(c) ? j.filter(c, b, d) : (c = j.filter(c, b), j.grep(b, function(b) {
			return -1 < Ia.call(c, b) !== d && 1 === b.nodeType
		}))
	}

	function p(b, c) {
		for (;
			(b = b[c]) && 1 !== b.nodeType;);
		return b
	}

	function q(b) {
		return b
	}

	function g(b) {
		throw b;
	}

	function m(b, c, d, g) {
		var e;
		try {
			b && j.isFunction(e = b.promise) ? e.call(b).done(c).fail(d) : b && j.isFunction(e = b.then) ? e.call(b, c, d) : c.apply(void 0, [b].slice(g))
		} catch (f) {
			d.apply(void 0, [f])
		}
	}

	function n() {
		F.removeEventListener("DOMContentLoaded", n);
		b.removeEventListener("load", n);
		j.ready()
	}

	function r() {
		this.expando = j.expando + r.uid++
	}

	function s(b, c, d) {
		var g;
		if (void 0 === d && 1 === b.nodeType)
			if (g = "data-" + c.replace(Fc, "-$&").toLowerCase(), d = b.getAttribute(g), "string" == typeof d) {
				try {
					d = "true" ===
						d || "false" !== d && ("null" === d ? null : d === +d + "" ? +d : Gc.test(d) ? JSON.parse(d) : d)
				} catch (j) {}
				Q.set(b, c, d)
			} else d = void 0;
		return d
	}

	function u(b, c, d, g) {
		var e, f = 1,
			m = 20,
			n = g ? function() {
				return g.cur()
			} : function() {
				return j.css(b, c, "")
			},
			l = n(),
			r = d && d[3] || (j.cssNumber[c] ? "" : "px"),
			q = (j.cssNumber[c] || "px" !== r && +l) && Ka.exec(j.css(b, c));
		if (q && q[3] !== r) {
			r = r || q[3];
			d = d || [];
			q = +l || 1;
			do f = f || ".5", q /= f, j.style(b, c, q + r); while (f !== (f = n() / l) && 1 !== f && --m)
		}
		return d && (q = +q || +l || 0, e = d[1] ? q + (d[1] + 1) * d[2] : +d[2], g && (g.unit = r, g.start = q, g.end =
			e)), e
	}

	function t(b, c) {
		for (var d, g, e = [], f = 0, m = b.length; f < m; f++)
			if (g = b[f], g.style)
				if (d = g.style.display, c) {
					if ("none" === d && (e[f] = E.get(g, "display") || null, e[f] || (g.style.display = "")), "" === g.style.display && Ta(g)) {
						d = e;
						var n = f,
							l, r = void 0;
						l = g.ownerDocument;
						var q = g.nodeName;
						l = (g = Ib[q]) ? g : (r = l.body.appendChild(l.createElement(q)), g = j.css(r, "display"), r.parentNode.removeChild(r), "none" === g && (g = "block"), Ib[q] = g, g);
						d[n] = l
					}
				} else "none" !== d && (e[f] = "none", E.set(g, "display", d));
		for (f = 0; f < m; f++) null != e[f] && (b[f].style.display =
			e[f]);
		return b
	}

	function y(b, c) {
		var d;
		return d = "undefined" != typeof b.getElementsByTagName ? b.getElementsByTagName(c || "*") : "undefined" != typeof b.querySelectorAll ? b.querySelectorAll(c || "*") : [], void 0 === c || c && f(b, c) ? j.merge([b], d) : d
	}

	function B(b, c) {
		for (var d = 0, g = b.length; d < g; d++) E.set(b[d], "globalEval", !c || E.get(c[d], "globalEval"))
	}

	function G(b, c, d, g, e) {
		for (var f, m, n, l, r = c.createDocumentFragment(), q = [], s = 0, p = b.length; s < p; s++)
			if (f = b[s], f || 0 === f)
				if ("object" === j.type(f)) j.merge(q, f.nodeType ? [f] : f);
				else if (Hc.test(f)) {
			m =
				m || r.appendChild(c.createElement("div"));
			n = (Jb.exec(f) || ["", ""])[1].toLowerCase();
			n = T[n] || T._default;
			m.innerHTML = n[1] + j.htmlPrefilter(f) + n[2];
			for (n = n[0]; n--;) m = m.lastChild;
			j.merge(q, m.childNodes);
			m = r.firstChild;
			m.textContent = ""
		} else q.push(c.createTextNode(f));
		r.textContent = "";
		for (s = 0; f = q[s++];)
			if (g && -1 < j.inArray(f, g)) e && e.push(f);
			else if (l = j.contains(f.ownerDocument, f), m = y(r.appendChild(f), "script"), l && B(m), d)
			for (n = 0; f = m[n++];) Kb.test(f.type || "") && d.push(f);
		return r
	}

	function N() {
		return !0
	}

	function ba() {
		return !1
	}

	function La() {
		try {
			return F.activeElement
		} catch (b) {}
	}

	function sa(b, c, d, g, e, f) {
		var m, n;
		if ("object" == typeof c) {
			"string" != typeof d && (g = g || d, d = void 0);
			for (n in c) sa(b, n, d, g, c[n], f);
			return b
		}
		if (null == g && null == e ? (e = d, g = d = void 0) : null == e && ("string" == typeof d ? (e = g, g = void 0) : (e = g, g = d, d = void 0)), !1 === e) e = ba;
		else if (!e) return b;
		return 1 === f && (m = e, e = function(b) {
			return j().off(b), m.apply(this, arguments)
		}, e.guid = m.guid || (m.guid = j.guid++)), b.each(function() {
			j.event.add(this, c, e, g, d)
		})
	}

	function H(b, c) {
		return f(b,
			"table") && f(11 !== c.nodeType ? c : c.firstChild, "tr") ? j(">tbody", b)[0] || b : b
	}

	function Ua(b) {
		return b.type = (null !== b.getAttribute("type")) + "/" + b.type, b
	}

	function S(b) {
		var c = Ic.exec(b.type);
		return c ? b.type = c[1] : b.removeAttribute("type"), b
	}

	function Lb(b, c) {
		var d, g, e, f, m, n;
		if (1 === c.nodeType) {
			if (E.hasData(b) && (d = E.access(b), g = E.set(c, d), n = d.events))
				for (e in delete g.handle, g.events = {}, n) {
					d = 0;
					for (g = n[e].length; d < g; d++) j.event.add(c, e, n[e][d])
				}
			Q.hasData(b) && (f = Q.access(b), m = j.extend({}, f), Q.set(c, m))
		}
	}

	function ma(b,
		c, g, ob) {
		c = Mb.apply([], c);
		var e, f, m, n, l = 0,
			r = b.length,
			q = r - 1,
			s = c[0],
			p = j.isFunction(s);
		if (p || 1 < r && "string" == typeof s && !I.checkClone && Jc.test(s)) return b.each(function(d) {
			var e = b.eq(d);
			p && (c[0] = s.call(this, d, e.html()));
			ma(e, c, g, ob)
		});
		if (r && (e = G(c, b[0].ownerDocument, !1, b, ob), f = e.firstChild, 1 === e.childNodes.length && (e = f), f || ob)) {
			f = j.map(y(e, "script"), Ua);
			for (m = f.length; l < r; l++) n = e, l !== q && (n = j.clone(n, !0, !0), m && j.merge(f, y(n, "script"))), g.call(b[l], n, l);
			if (m) {
				e = f[f.length - 1].ownerDocument;
				j.map(f, S);
				for (l =
					0; l < m; l++) n = f[l], Kb.test(n.type || "") && !E.access(n, "globalEval") && j.contains(e, n) && (n.src ? j._evalUrl && j._evalUrl(n.src) : d(n.textContent.replace(Lc, ""), e))
			}
		}
		return b
	}

	function Va(b, c, d) {
		for (var g = c ? j.filter(c, b) : b, e = 0; null != (c = g[e]); e++) d || 1 !== c.nodeType || j.cleanData(y(c)), c.parentNode && (d && j.contains(c.ownerDocument, c) && B(y(c, "script")), c.parentNode.removeChild(c));
		return b
	}

	function Ma(b, c, d) {
		var g, e, f, m, n = b.style;
		return d = d || Wa(b), d && (m = d.getPropertyValue(c) || d[c], "" !== m || j.contains(b.ownerDocument,
			b) || (m = j.style(b, c)), !I.pixelMarginRight() && pb.test(m) && Nb.test(c) && (g = n.width, e = n.minWidth, f = n.maxWidth, n.minWidth = n.maxWidth = n.width = m, m = d.width, n.width = g, n.minWidth = e, n.maxWidth = f)), void 0 !== m ? m + "" : m
	}

	function Ob(b, c) {
		return {
			get: function() {
				return b() ? void delete this.get : (this.get = c).apply(this, arguments)
			}
		}
	}

	function U(b) {
		var c = j.cssProps[b];
		if (!c) {
			var c = j.cssProps,
				d;
			a: if (d = b, !(d in Pb)) {
				for (var g = d[0].toUpperCase() + d.slice(1), e = Qb.length; e--;)
					if (d = Qb[e] + g, d in Pb) break a;
				d = void 0
			} c = c[b] = d || b
		}
		return c
	}

	function V(b, c, d) {
		return (b = Ka.exec(c)) ? Math.max(0, b[2] - (d || 0)) + (b[3] || "px") : c
	}

	function W(b, c, d, g, e) {
		var f = 0;
		for (c = d === (g ? "border" : "content") ? 4 : "width" === c ? 1 : 0; 4 > c; c += 2) "margin" === d && (f += j.css(b, d + ta[c], !0, e)), g ? ("content" === d && (f -= j.css(b, "padding" + ta[c], !0, e)), "margin" !== d && (f -= j.css(b, "border" + ta[c] + "Width", !0, e))) : (f += j.css(b, "padding" + ta[c], !0, e), "padding" !== d && (f += j.css(b, "border" + ta[c] + "Width", !0, e)));
		return f
	}

	function Rb(b, c, d) {
		var g, e = Wa(b),
			f = Ma(b, c, e),
			m = "border-box" === j.css(b, "boxSizing",
				!1, e);
		return pb.test(f) ? f : (g = m && (I.boxSizingReliable() || f === b.style[c]), "auto" === f && (f = b["offset" + c[0].toUpperCase() + c.slice(1)]), f = parseFloat(f) || 0, f + W(b, c, d || (m ? "border" : "content"), g, e) + "px")
	}

	function O(b, c, d, g, e) {
		return new O.prototype.init(b, c, d, g, e)
	}

	function na() {
		Xa && (!1 === F.hidden && b.requestAnimationFrame ? b.requestAnimationFrame(na) : b.setTimeout(na, j.fx.interval), j.fx.tick())
	}

	function R() {
		return b.setTimeout(function() {
			Da = void 0
		}), Da = j.now()
	}

	function ca(b, c) {
		var d, g = 0,
			e = {
				height: b
			};
		for (c = c ? 1 :
			0; 4 > g; g += 2 - c) d = ta[g], e["margin" + d] = e["padding" + d] = b;
		return c && (e.opacity = e.width = b), e
	}

	function Sb(b, c, d) {
		for (var g, e = (da.tweeners[c] || []).concat(da.tweeners["*"]), f = 0, j = e.length; f < j; f++)
			if (g = e[f].call(d, c, b)) return g
	}

	function da(b, c, d) {
		var g, e, f = 0,
			m = da.prefilters.length,
			n = j.Deferred().always(function() {
				delete l.elem
			}),
			l = function() {
				if (e) return !1;
				for (var c = Da || R(), c = Math.max(0, r.startTime + r.duration - c), d = 1 - (c / r.duration || 0), z = 0, g = r.tweens.length; z < g; z++) r.tweens[z].run(d);
				return n.notifyWith(b, [r, d,
					c
				]), 1 > d && g ? c : (g || n.notifyWith(b, [r, 1, 0]), n.resolveWith(b, [r]), !1)
			},
			r = n.promise({
				elem: b,
				props: j.extend({}, c),
				opts: j.extend(!0, {
					specialEasing: {},
					easing: j.easing._default
				}, d),
				originalProperties: c,
				originalOptions: d,
				startTime: Da || R(),
				duration: d.duration,
				tweens: [],
				createTween: function(c, d) {
					var z = j.Tween(b, r.opts, c, d, r.opts.specialEasing[c] || r.opts.easing);
					return r.tweens.push(z), z
				},
				stop: function(c) {
					var d = 0,
						z = c ? r.tweens.length : 0;
					if (e) return this;
					for (e = !0; d < z; d++) r.tweens[d].run(1);
					return c ? (n.notifyWith(b,
						[r, 1, 0]), n.resolveWith(b, [r, c])) : n.rejectWith(b, [r, c]), this
				}
			});
		c = r.props;
		d = r.opts.specialEasing;
		var q, s, p, u;
		for (g in c)
			if (q = j.camelCase(g), s = d[q], p = c[g], Array.isArray(p) && (s = p[1], p = c[g] = p[0]), g !== q && (c[q] = p, delete c[g]), u = j.cssHooks[q], u && "expand" in u)
				for (g in p = u.expand(p), delete c[q], p) g in c || (c[g] = p[g], d[g] = s);
			else d[q] = s;
		for (; f < m; f++)
			if (g = da.prefilters[f].call(r, b, c, r.opts)) return j.isFunction(g.stop) && (j._queueHooks(r.elem, r.opts.queue).stop = j.proxy(g.stop, g)), g;
		return j.map(c, Sb, r), j.isFunction(r.opts.start) &&
			r.opts.start.call(b, r), r.progress(r.opts.progress).done(r.opts.done, r.opts.complete).fail(r.opts.fail).always(r.opts.always), j.fx.timer(j.extend(l, {
				elem: b,
				anim: r,
				queue: r.opts.queue
			})), r
	}

	function ua(b) {
		return (b.match(X) || []).join(" ")
	}

	function va(b) {
		return b.getAttribute && b.getAttribute("class") || ""
	}

	function qb(b, c, d, g) {
		var e;
		if (Array.isArray(c)) j.each(c, function(c, z) {
			d || Mc.test(b) ? g(b, z) : qb(b + "[" + ("object" == typeof z && null != z ? c : "") + "]", z, d, g)
		});
		else if (d || "object" !== j.type(c)) g(b, c);
		else
			for (e in c) qb(b +
				"[" + e + "]", c[e], d, g)
	}

	function Tb(b) {
		return function(c, d) {
			"string" != typeof c && (d = c, c = "*");
			var g, e = 0,
				f = c.toLowerCase().match(X) || [];
			if (j.isFunction(d))
				for (; g = f[e++];) "+" === g[0] ? (g = g.slice(1) || "*", (b[g] = b[g] || []).unshift(d)) : (b[g] = b[g] || []).push(d)
		}
	}

	function Ub(b, c, d, g) {
		function e(n) {
			var l;
			return f[n] = !0, j.each(b[n] || [], function(b, x) {
				var j = x(c, d, g);
				return "string" != typeof j || m || f[j] ? m ? !(l = j) : void 0 : (c.dataTypes.unshift(j), e(j), !1)
			}), l
		}
		var f = {},
			m = b === rb;
		return e(c.dataTypes[0]) || !f["*"] && e("*")
	}

	function sb(b,
		c) {
		var d, g, e = j.ajaxSettings.flatOptions || {};
		for (d in c) void 0 !== c[d] && ((e[d] ? b : g || (g = {}))[d] = c[d]);
		return g && j.extend(!0, b, g), b
	}
	var wa = [],
		F = b.document,
		Nc = Object.getPrototypeOf,
		xa = wa.slice,
		Mb = wa.concat,
		tb = wa.push,
		Ia = wa.indexOf,
		Ya = {},
		Vb = Ya.toString,
		Za = Ya.hasOwnProperty,
		Wb = Za.toString,
		Oc = Wb.call(Object),
		I = {},
		j = function(b, c) {
			return new j.fn.init(b, c)
		},
		Pc = /^[\s\uFEFF\xA0]+|[\s\uFEFF\xA0]+$/g,
		Qc = /^-ms-/,
		Rc = /-([a-z])/g,
		Sc = function(b, c) {
			return c.toUpperCase()
		};
	j.fn = j.prototype = {
		jquery: "3.2.1",
		constructor: j,
		length: 0,
		toArray: function() {
			return xa.call(this)
		},
		get: function(b) {
			return null == b ? xa.call(this) : 0 > b ? this[b + this.length] : this[b]
		},
		pushStack: function(b) {
			b = j.merge(this.constructor(), b);
			return b.prevObject = this, b
		},
		each: function(b) {
			return j.each(this, b)
		},
		map: function(b) {
			return this.pushStack(j.map(this, function(c, d) {
				return b.call(c, d, c)
			}))
		},
		slice: function() {
			return this.pushStack(xa.apply(this, arguments))
		},
		first: function() {
			return this.eq(0)
		},
		last: function() {
			return this.eq(-1)
		},
		eq: function(b) {
			var c = this.length;
			b = +b + (0 > b ? c : 0);
			return this.pushStack(0 <= b && b < c ? [this[b]] : [])
		},
		end: function() {
			return this.prevObject || this.constructor()
		},
		push: tb,
		sort: wa.sort,
		splice: wa.splice
	};
	j.extend = j.fn.extend = function() {
		var b, c, d, g, e, f, m = arguments[0] || {},
			n = 1,
			l = arguments.length,
			r = !1;
		"boolean" == typeof m && (r = m, m = arguments[n] || {}, n++);
		"object" == typeof m || j.isFunction(m) || (m = {});
		for (n === l && (m = this, n--); n < l; n++)
			if (null != (b = arguments[n]))
				for (c in b) d = m[c], g = b[c], m !== g && (r && g && (j.isPlainObject(g) || (e = Array.isArray(g))) ? (e ? (e = !1, f = d &&
					Array.isArray(d) ? d : []) : f = d && j.isPlainObject(d) ? d : {}, m[c] = j.extend(r, f, g)) : void 0 !== g && (m[c] = g));
		return m
	};
	j.extend({
		expando: "jQuery" + ("3.2.1" + Math.random()).replace(/\D/g, ""),
		isReady: !0,
		error: function(b) {
			throw Error(b);
		},
		noop: function() {},
		isFunction: function(b) {
			return "function" === j.type(b)
		},
		isWindow: function(b) {
			return null != b && b === b.window
		},
		isNumeric: function(b) {
			var c = j.type(b);
			return ("number" === c || "string" === c) && !isNaN(b - parseFloat(b))
		},
		isPlainObject: function(b) {
			var c, d;
			return !(!b || "[object Object]" !==
				Vb.call(b)) && (!(c = Nc(b)) || (d = Za.call(c, "constructor") && c.constructor, "function" == typeof d && Wb.call(d) === Oc))
		},
		isEmptyObject: function(b) {
			for (var c in b) return !1;
			return !0
		},
		type: function(b) {
			return null == b ? b + "" : "object" == typeof b || "function" == typeof b ? Ya[Vb.call(b)] || "object" : typeof b
		},
		globalEval: function(b) {
			d(b)
		},
		camelCase: function(b) {
			return b.replace(Qc, "ms-").replace(Rc, Sc)
		},
		each: function(b, c) {
			var d, g = 0;
			if (e(b))
				for (d = b.length; g < d && !1 !== c.call(b[g], g, b[g]); g++);
			else
				for (g in b)
					if (!1 === c.call(b[g], g,
							b[g])) break;
			return b
		},
		trim: function(b) {
			return null == b ? "" : (b + "").replace(Pc, "")
		},
		makeArray: function(b, c) {
			var d = c || [];
			return null != b && (e(Object(b)) ? j.merge(d, "string" == typeof b ? [b] : b) : tb.call(d, b)), d
		},
		inArray: function(b, c, d) {
			return null == c ? -1 : Ia.call(c, b, d)
		},
		merge: function(b, c) {
			for (var d = +c.length, g = 0, e = b.length; g < d; g++) b[e++] = c[g];
			return b.length = e, b
		},
		grep: function(b, c, d) {
			for (var g = [], e = 0, f = b.length, j = !d; e < f; e++) d = !c(b[e], e), d !== j && g.push(b[e]);
			return g
		},
		map: function(b, c, d) {
			var g, f, j = 0,
				m = [];
			if (e(b))
				for (g =
					b.length; j < g; j++) f = c(b[j], j, d), null != f && m.push(f);
			else
				for (j in b) f = c(b[j], j, d), null != f && m.push(f);
			return Mb.apply([], m)
		},
		guid: 1,
		proxy: function(b, c) {
			var d, g, e;
			if ("string" == typeof c && (d = b[c], c = b, b = d), j.isFunction(b)) return g = xa.call(arguments, 2), e = function() {
				return b.apply(c || this, g.concat(xa.call(arguments)))
			}, e.guid = b.guid = b.guid || j.guid++, e
		},
		now: Date.now,
		support: I
	});
	"function" == typeof Symbol && (j.fn[Symbol.iterator] = wa[Symbol.iterator]);
	j.each("Boolean Number String Function Array Date RegExp Object Error Symbol".split(" "),
		function(b, c) {
			Ya["[object " + c + "]"] = c.toLowerCase()
		});
	var oa, ub = b,
		C = function(b, c, d, g) {
			var e, f, j, m, n, l = c && c.ownerDocument,
				r = c ? c.nodeType : 9;
			if (d = d || [], "string" != typeof b || !b || 1 !== r && 9 !== r && 11 !== r) return d;
			if (!g && ((c ? c.ownerDocument || c : Y) !== D && pa(c), c = c || D, Z)) {
				if (11 !== r && (m = Tc.exec(b)))
					if (e = m[1])
						if (9 === r) {
							if (!(f = c.getElementById(e))) return d;
							if (f.id === e) return d.push(f), d
						} else {
							if (l && (f = l.getElementById(e)) && Na(c, f) && f.id === e) return d.push(f), d
						}
				else {
					if (m[2]) return qa.apply(d, c.getElementsByTagName(b)),
						d;
					if ((e = m[3]) && L.getElementsByClassName && c.getElementsByClassName) return qa.apply(d, c.getElementsByClassName(e)), d
				}
				if (L.qsa && !$a[b + " "] && (!P || !P.test(b))) {
					if (1 !== r) l = c, n = b;
					else if ("object" !== c.nodeName.toLowerCase()) {
						(j = c.getAttribute("id")) ? j = j.replace(Xb, Yb): c.setAttribute("id", j = J);
						f = Oa(b);
						for (e = f.length; e--;) f[e] = "#" + j + " " + ab(f[e]);
						n = f.join(",");
						l = vb.test(b) && wb(c.parentNode) || c
					}
					if (n) try {
						return qa.apply(d, l.querySelectorAll(n)), d
					} catch (q) {} finally {
						j === J && c.removeAttribute("id")
					}
				}
			}
			return Zb(b.replace(bb,
				"$1"), c, d, g)
		},
		xb = function() {
			function b(d, g) {
				return c.push(d + " ") > A.cacheLength && delete b[c.shift()], b[d + " "] = g
			}
			var c = [];
			return b
		},
		ea = function(b) {
			return b[J] = !0, b
		},
		ga = function(b) {
			var c = D.createElement("fieldset");
			try {
				return !!b(c)
			} catch (d) {
				return !1
			} finally {
				c.parentNode && c.parentNode.removeChild(c)
			}
		},
		yb = function(b, c) {
			for (var d = b.split("|"), g = d.length; g--;) A.attrHandle[d[g]] = c
		},
		$b = function(b, c) {
			var d = c && b,
				g = d && 1 === b.nodeType && 1 === c.nodeType && b.sourceIndex - c.sourceIndex;
			if (g) return g;
			if (d)
				for (; d = d.nextSibling;)
					if (d ===
						c) return -1;
			return b ? 1 : -1
		},
		Uc = function(b) {
			return function(c) {
				return "input" === c.nodeName.toLowerCase() && c.type === b
			}
		},
		Vc = function(b) {
			return function(c) {
				var d = c.nodeName.toLowerCase();
				return ("input" === d || "button" === d) && c.type === b
			}
		},
		ac = function(b) {
			return function(c) {
				return "form" in c ? c.parentNode && !1 === c.disabled ? "label" in c ? "label" in c.parentNode ? c.parentNode.disabled === b : c.disabled === b : c.isDisabled === b || c.isDisabled !== !b && Wc(c) === b : c.disabled === b : "label" in c && c.disabled === b
			}
		},
		ya = function(b) {
			return ea(function(c) {
				return c = +c, ea(function(d, g) {
					for (var e, f = b([], d.length, c), j = f.length; j--;) d[e = f[j]] && (d[e] = !(g[e] = d[e]))
				})
			})
		},
		wb = function(b) {
			return b && "undefined" != typeof b.getElementsByTagName && b
		},
		bc = function() {},
		ab = function(b) {
			for (var c = 0, d = b.length, g = ""; c < d; c++) g += b[c].value;
			return g
		},
		cb = function(b, c, d) {
			var g = c.dir,
				e = c.next,
				f = e || g,
				j = d && "parentNode" === f,
				m = Xc++;
			return c.first ? function(c, d, z) {
				for (; c = c[g];)
					if (1 === c.nodeType || j) return b(c, d, z);
				return !1
			} : function(c, d, z) {
				var M, n, l, r = [ha, m];
				if (z)
					for (; c = c[g];) {
						if ((1 === c.nodeType ||
								j) && b(c, d, z)) return !0
					} else
						for (; c = c[g];)
							if (1 === c.nodeType || j)
								if (l = c[J] || (c[J] = {}), n = l[c.uniqueID] || (l[c.uniqueID] = {}), e && e === c.nodeName.toLowerCase()) c = c[g] || c;
								else {
									if ((M = n[f]) && M[0] === ha && M[1] === m) return r[2] = M[2];
									if (n[f] = r, r[2] = b(c, d, z)) return !0
								} return !1
			}
		},
		zb = function(b) {
			return 1 < b.length ? function(c, d, g) {
				for (var e = b.length; e--;)
					if (!b[e](c, d, g)) return !1;
				return !0
			} : b[0]
		},
		db = function(b, c, d, g, e) {
			for (var f, j = [], m = 0, n = b.length, l = null != c; m < n; m++)(f = b[m]) && (d && !d(f, g, e) || (j.push(f), l && c.push(m)));
			return j
		},
		Ab = function(b, c, d, g, e, f) {
			return g && !g[J] && (g = Ab(g)), e && !e[J] && (e = Ab(e, f)), ea(function(f, j, m, n) {
				var l, r, Ja = [],
					q = [],
					s = j.length,
					p;
				if (!(p = f)) {
					p = c || "*";
					for (var u = m.nodeType ? [m] : m, t = [], y = 0, B = u.length; y < B; y++) C(p, u[y], t);
					p = t
				}
				p = !b || !f && c ? p : db(p, Ja, b, m, n);
				u = d ? e || (f ? b : s || g) ? [] : j : p;
				if (d && d(p, u, m, n), g) {
					l = db(u, q);
					g(l, [], m, n);
					for (m = l.length; m--;)(r = l[m]) && (u[q[m]] = !(p[q[m]] = r))
				}
				if (f) {
					if (e || b) {
						if (e) {
							l = [];
							for (m = u.length; m--;)(r = u[m]) && l.push(p[m] = r);
							e(null, u = [], l, n)
						}
						for (m = u.length; m--;)(r = u[m]) && -1 < (l = e ? za(f, r) :
							Ja[m]) && (f[l] = !(j[l] = r))
					}
				} else u = db(u === j ? u.splice(s, u.length) : u), e ? e(null, j, u, n) : qa.apply(j, u)
			})
		},
		Bb = function(b) {
			var c, d, g, e = b.length,
				f = A.relative[b[0].type];
			d = f || A.relative[" "];
			for (var j = f ? 1 : 0, m = cb(function(b) {
					return b === c
				}, d, !0), n = cb(function(b) {
					return -1 < za(c, b)
				}, d, !0), l = [function(b, d, x) {
					b = !f && (x || d !== eb) || ((c = d).nodeType ? m(b, d, x) : n(b, d, x));
					return c = null, b
				}]; j < e; j++)
				if (d = A.relative[b[j].type]) l = [cb(zb(l), d)];
				else {
					if (d = A.filter[b[j].type].apply(null, b[j].matches), d[J]) {
						for (g = ++j; g < e && !A.relative[b[g].type]; g++);
						return Ab(1 < j && zb(l), 1 < j && ab(b.slice(0, j - 1).concat({
							value: " " === b[j - 2].type ? "*" : ""
						})).replace(bb, "$1"), d, j < g && Bb(b.slice(j, g)), g < e && Bb(b = b.slice(g)), g < e && ab(b))
					}
					l.push(d)
				} return zb(l)
		},
		Ea, L, A, fb, cc, Oa, Cb, Zb, eb, ra, Fa, pa, D, aa, Z, P, Aa, gb, Na, J = "sizzle" + 1 * new Date,
		Y = ub.document,
		ha = 0,
		Xc = 0,
		dc = xb(),
		ec = xb(),
		$a = xb(),
		Db = function(b, c) {
			return b === c && (Fa = !0), 0
		},
		Yc = {}.hasOwnProperty,
		Ba = [],
		Zc = Ba.pop,
		$c = Ba.push,
		qa = Ba.push,
		fc = Ba.slice,
		za = function(b, c) {
			for (var d = 0, g = b.length; d < g; d++)
				if (b[d] === c) return d;
			return -1
		},
		ad =
		/[\x20\t\r\n\f]+/g,
		bb = /^[\x20\t\r\n\f]+|((?:^|[^\\])(?:\\.)*)[\x20\t\r\n\f]+$/g,
		bd = /^[\x20\t\r\n\f]*,[\x20\t\r\n\f]*/,
		cd = /^[\x20\t\r\n\f]*([>+~]|[\x20\t\r\n\f])[\x20\t\r\n\f]*/,
		dd = /=[\x20\t\r\n\f]*([^\]'"]*?)[\x20\t\r\n\f]*\]/g,
		ed = RegExp(":((?:\\\\.|[\\w-]|[^\x00-\\xa0])+)(?:\\((('((?:\\\\.|[^\\\\'])*)'|\"((?:\\\\.|[^\\\\\"])*)\")|((?:\\\\.|[^\\\\()[\\]]|\\[[\\x20\\t\\r\\n\\f]*((?:\\\\.|[\\w-]|[^\x00-\\xa0])+)(?:[\\x20\\t\\r\\n\\f]*([*^$|!~]?=)[\\x20\\t\\r\\n\\f]*(?:'((?:\\\\.|[^\\\\'])*)'|\"((?:\\\\.|[^\\\\\"])*)\"|((?:\\\\.|[\\w-]|[^\x00-\\xa0])+))|)[\\x20\\t\\r\\n\\f]*\\])*)|.*)\\)|)"),
		fd = /^(?:\\.|[\w-]|[^\x00-\xa0])+$/,
		hb = {
			ID: /^#((?:\\.|[\w-]|[^\x00-\xa0])+)/,
			CLASS: /^\.((?:\\.|[\w-]|[^\x00-\xa0])+)/,
			TAG: /^((?:\\.|[\w-]|[^\x00-\xa0])+|[*])/,
			ATTR: RegExp("^\\[[\\x20\\t\\r\\n\\f]*((?:\\\\.|[\\w-]|[^\x00-\\xa0])+)(?:[\\x20\\t\\r\\n\\f]*([*^$|!~]?=)[\\x20\\t\\r\\n\\f]*(?:'((?:\\\\.|[^\\\\'])*)'|\"((?:\\\\.|[^\\\\\"])*)\"|((?:\\\\.|[\\w-]|[^\x00-\\xa0])+))|)[\\x20\\t\\r\\n\\f]*\\]"),
			PSEUDO: RegExp("^:((?:\\\\.|[\\w-]|[^\x00-\\xa0])+)(?:\\((('((?:\\\\.|[^\\\\'])*)'|\"((?:\\\\.|[^\\\\\"])*)\")|((?:\\\\.|[^\\\\()[\\]]|\\[[\\x20\\t\\r\\n\\f]*((?:\\\\.|[\\w-]|[^\x00-\\xa0])+)(?:[\\x20\\t\\r\\n\\f]*([*^$|!~]?=)[\\x20\\t\\r\\n\\f]*(?:'((?:\\\\.|[^\\\\'])*)'|\"((?:\\\\.|[^\\\\\"])*)\"|((?:\\\\.|[\\w-]|[^\x00-\\xa0])+))|)[\\x20\\t\\r\\n\\f]*\\])*)|.*)\\)|)"),
			CHILD: RegExp("^:(only|first|last|nth|nth-last)-(child|of-type)(?:\\([\\x20\\t\\r\\n\\f]*(even|odd|(([+-]|)(\\d*)n|)[\\x20\\t\\r\\n\\f]*(?:([+-]|)[\\x20\\t\\r\\n\\f]*(\\d+)|))[\\x20\\t\\r\\n\\f]*\\)|)", "i"),
			bool: RegExp("^(?:checked|selected|async|autofocus|autoplay|controls|defer|disabled|hidden|ismap|loop|multiple|open|readonly|required|scoped)$", "i"),
			needsContext: RegExp("^[\\x20\\t\\r\\n\\f]*[>+~]|:(even|odd|eq|gt|lt|nth|first|last)(?:\\([\\x20\\t\\r\\n\\f]*((?:-\\d)?\\d*)[\\x20\\t\\r\\n\\f]*\\)|)(?=[^-]|$)",
				"i")
		},
		gd = /^(?:input|select|textarea|button)$/i,
		hd = /^h\d$/i,
		Pa = /^[^{]+\{\s*\[native \w/,
		Tc = /^(?:#([\w-]+)|(\w+)|\.([\w-]+))$/,
		vb = /[+~]/,
		ia = /\\([\da-f]{1,6}[\x20\t\r\n\f]?|([\x20\t\r\n\f])|.)/ig,
		ja = function(b, c, d) {
			b = "0x" + c - 65536;
			return b !== b || d ? c : 0 > b ? String.fromCharCode(b + 65536) : String.fromCharCode(b >> 10 | 55296, 1023 & b | 56320)
		},
		Xb = /([\0-\x1f\x7f]|^-?\d)|^-$|[^\0-\x1f\x7f-\uFFFF\w-]/g,
		Yb = function(b, c) {
			return c ? "\x00" === b ? "\ufffd" : b.slice(0, -1) + "\\" + b.charCodeAt(b.length - 1).toString(16) + " " : "\\" + b
		},
		gc = function() {
			pa()
		},
		Wc = cb(function(b) {
			return !0 === b.disabled && ("form" in b || "label" in b)
		}, {
			dir: "parentNode",
			next: "legend"
		});
	try {
		qa.apply(Ba = fc.call(Y.childNodes), Y.childNodes), Ba[Y.childNodes.length].nodeType
	} catch (Kd) {
		qa = {
			apply: Ba.length ? function(b, c) {
				$c.apply(b, fc.call(c))
			} : function(b, c) {
				for (var d = b.length, g = 0; b[d++] = c[g++];);
				b.length = d - 1
			}
		}
	}
	L = C.support = {};
	cc = C.isXML = function(b) {
		b = b && (b.ownerDocument || b).documentElement;
		return !!b && "HTML" !== b.nodeName
	};
	pa = C.setDocument = function(b) {
		var c, d;
		b = b ? b.ownerDocument || b : Y;
		return b !==
			D && 9 === b.nodeType && b.documentElement ? (D = b, aa = D.documentElement, Z = !cc(D), Y !== D && (d = D.defaultView) && d.top !== d && (d.addEventListener ? d.addEventListener("unload", gc, !1) : d.attachEvent && d.attachEvent("onunload", gc)), L.attributes = ga(function(b) {
					return b.className = "i", !b.getAttribute("className")
				}), L.getElementsByTagName = ga(function(b) {
					return b.appendChild(D.createComment("")), !b.getElementsByTagName("*").length
				}), L.getElementsByClassName = Pa.test(D.getElementsByClassName), L.getById = ga(function(b) {
					return aa.appendChild(b).id =
						J, !D.getElementsByName || !D.getElementsByName(J).length
				}), L.getById ? (A.filter.ID = function(b) {
					var c = b.replace(ia, ja);
					return function(b) {
						return b.getAttribute("id") === c
					}
				}, A.find.ID = function(b, c) {
					if ("undefined" != typeof c.getElementById && Z) {
						var d = c.getElementById(b);
						return d ? [d] : []
					}
				}) : (A.filter.ID = function(b) {
					var c = b.replace(ia, ja);
					return function(b) {
						return (b = "undefined" != typeof b.getAttributeNode && b.getAttributeNode("id")) && b.value === c
					}
				}, A.find.ID = function(b, c) {
					if ("undefined" != typeof c.getElementById &&
						Z) {
						var d, x, g, z = c.getElementById(b);
						if (z) {
							if (d = z.getAttributeNode("id"), d && d.value === b) return [z];
							g = c.getElementsByName(b);
							for (x = 0; z = g[x++];)
								if (d = z.getAttributeNode("id"), d && d.value === b) return [z]
						}
						return []
					}
				}), A.find.TAG = L.getElementsByTagName ? function(b, c) {
					return "undefined" != typeof c.getElementsByTagName ? c.getElementsByTagName(b) : L.qsa ? c.querySelectorAll(b) : void 0
				} : function(b, c) {
					var d, x = [],
						g = 0,
						z = c.getElementsByTagName(b);
					if ("*" === b) {
						for (; d = z[g++];) 1 === d.nodeType && x.push(d);
						return x
					}
					return z
				}, A.find.CLASS =
				L.getElementsByClassName && function(b, c) {
					if ("undefined" != typeof c.getElementsByClassName && Z) return c.getElementsByClassName(b)
				}, Aa = [], P = [], (L.qsa = Pa.test(D.querySelectorAll)) && (ga(function(b) {
					aa.appendChild(b).innerHTML = "<a id='" + J + "'></a><select id='" + J + "-\r\\' msallowcapture=''><option selected=''></option></select>";
					b.querySelectorAll("[msallowcapture^='']").length && P.push("[*^$]=[\\x20\\t\\r\\n\\f]*(?:''|\"\")");
					b.querySelectorAll("[selected]").length || P.push("\\[[\\x20\\t\\r\\n\\f]*(?:value|checked|selected|async|autofocus|autoplay|controls|defer|disabled|hidden|ismap|loop|multiple|open|readonly|required|scoped)");
					b.querySelectorAll("[id~=" + J + "-]").length || P.push("~=");
					b.querySelectorAll(":checked").length || P.push(":checked");
					b.querySelectorAll("a#" + J + "+*").length || P.push(".#.+[+~]")
				}), ga(function(b) {
					b.innerHTML = "<a href='' disabled='disabled'></a><select disabled='disabled'><option/></select>";
					var c = D.createElement("input");
					c.setAttribute("type", "hidden");
					b.appendChild(c).setAttribute("name", "D");
					b.querySelectorAll("[name=d]").length && P.push("name[\\x20\\t\\r\\n\\f]*[*^$|!~]?=");
					2 !== b.querySelectorAll(":enabled").length &&
						P.push(":enabled", ":disabled");
					aa.appendChild(b).disabled = !0;
					2 !== b.querySelectorAll(":disabled").length && P.push(":enabled", ":disabled");
					b.querySelectorAll("*,:x");
					P.push(",.*:")
				})), (L.matchesSelector = Pa.test(gb = aa.matches || aa.webkitMatchesSelector || aa.mozMatchesSelector || aa.oMatchesSelector || aa.msMatchesSelector)) && ga(function(b) {
					L.disconnectedMatch = gb.call(b, "*");
					gb.call(b, "[s!='']:x");
					Aa.push("!=", ":((?:\\\\.|[\\w-]|[^\x00-\\xa0])+)(?:\\((('((?:\\\\.|[^\\\\'])*)'|\"((?:\\\\.|[^\\\\\"])*)\")|((?:\\\\.|[^\\\\()[\\]]|\\[[\\x20\\t\\r\\n\\f]*((?:\\\\.|[\\w-]|[^\x00-\\xa0])+)(?:[\\x20\\t\\r\\n\\f]*([*^$|!~]?=)[\\x20\\t\\r\\n\\f]*(?:'((?:\\\\.|[^\\\\'])*)'|\"((?:\\\\.|[^\\\\\"])*)\"|((?:\\\\.|[\\w-]|[^\x00-\\xa0])+))|)[\\x20\\t\\r\\n\\f]*\\])*)|.*)\\)|)")
				}),
				P = P.length && RegExp(P.join("|")), Aa = Aa.length && RegExp(Aa.join("|")), c = Pa.test(aa.compareDocumentPosition), Na = c || Pa.test(aa.contains) ? function(b, c) {
					var d = 9 === b.nodeType ? b.documentElement : b,
						x = c && c.parentNode;
					return b === x || !(!x || 1 !== x.nodeType || !(d.contains ? d.contains(x) : b.compareDocumentPosition && 16 & b.compareDocumentPosition(x)))
				} : function(b, c) {
					if (c)
						for (; c = c.parentNode;)
							if (c === b) return !0;
					return !1
				}, Db = c ? function(b, c) {
					if (b === c) return Fa = !0, 0;
					var d = !b.compareDocumentPosition - !c.compareDocumentPosition;
					return d ? d : (d = (b.ownerDocument || b) === (c.ownerDocument || c) ? b.compareDocumentPosition(c) : 1, 1 & d || !L.sortDetached && c.compareDocumentPosition(b) === d ? b === D || b.ownerDocument === Y && Na(Y, b) ? -1 : c === D || c.ownerDocument === Y && Na(Y, c) ? 1 : ra ? za(ra, b) - za(ra, c) : 0 : 4 & d ? -1 : 1)
				} : function(b, c) {
					if (b === c) return Fa = !0, 0;
					var d, x = 0;
					d = b.parentNode;
					var g = c.parentNode,
						z = [b],
						e = [c];
					if (!d || !g) return b === D ? -1 : c === D ? 1 : d ? -1 : g ? 1 : ra ? za(ra, b) - za(ra, c) : 0;
					if (d === g) return $b(b, c);
					for (d = b; d = d.parentNode;) z.unshift(d);
					for (d = c; d = d.parentNode;) e.unshift(d);
					for (; z[x] === e[x];) x++;
					return x ? $b(z[x], e[x]) : z[x] === Y ? -1 : e[x] === Y ? 1 : 0
				}, D) : D
	};
	C.matches = function(b, c) {
		return C(b, null, null, c)
	};
	C.matchesSelector = function(b, c) {
		if ((b.ownerDocument || b) !== D && pa(b), c = c.replace(dd, "='$1']"), L.matchesSelector && Z && !$a[c + " "] && (!Aa || !Aa.test(c)) && (!P || !P.test(c))) try {
			var d = gb.call(b, c);
			if (d || L.disconnectedMatch || b.document && 11 !== b.document.nodeType) return d
		} catch (g) {}
		return 0 < C(c, D, null, [b]).length
	};
	C.contains = function(b, c) {
		return (b.ownerDocument || b) !== D && pa(b), Na(b, c)
	};
	C.attr =
		function(b, c) {
			(b.ownerDocument || b) !== D && pa(b);
			var d = A.attrHandle[c.toLowerCase()],
				d = d && Yc.call(A.attrHandle, c.toLowerCase()) ? d(b, c, !Z) : void 0;
			return void 0 !== d ? d : L.attributes || !Z ? b.getAttribute(c) : (d = b.getAttributeNode(c)) && d.specified ? d.value : null
		};
	C.escape = function(b) {
		return (b + "").replace(Xb, Yb)
	};
	C.error = function(b) {
		throw Error("Syntax error, unrecognized expression: " + b);
	};
	C.uniqueSort = function(b) {
		var c, d = [],
			g = 0,
			e = 0;
		if (Fa = !L.detectDuplicates, ra = !L.sortStable && b.slice(0), b.sort(Db), Fa) {
			for (; c = b[e++];) c ===
				b[e] && (g = d.push(e));
			for (; g--;) b.splice(d[g], 1)
		}
		return ra = null, b
	};
	fb = C.getText = function(b) {
		var c, d = "",
			g = 0;
		if (c = b.nodeType)
			if (1 === c || 9 === c || 11 === c) {
				if ("string" == typeof b.textContent) return b.textContent;
				for (b = b.firstChild; b; b = b.nextSibling) d += fb(b)
			} else {
				if (3 === c || 4 === c) return b.nodeValue
			}
		else
			for (; c = b[g++];) d += fb(c);
		return d
	};
	A = C.selectors = {
		cacheLength: 50,
		createPseudo: ea,
		match: hb,
		attrHandle: {},
		find: {},
		relative: {
			">": {
				dir: "parentNode",
				first: !0
			},
			" ": {
				dir: "parentNode"
			},
			"+": {
				dir: "previousSibling",
				first: !0
			},
			"~": {
				dir: "previousSibling"
			}
		},
		preFilter: {
			ATTR: function(b) {
				return b[1] = b[1].replace(ia, ja), b[3] = (b[3] || b[4] || b[5] || "").replace(ia, ja), "~=" === b[2] && (b[3] = " " + b[3] + " "), b.slice(0, 4)
			},
			CHILD: function(b) {
				return b[1] = b[1].toLowerCase(), "nth" === b[1].slice(0, 3) ? (b[3] || C.error(b[0]), b[4] = +(b[4] ? b[5] + (b[6] || 1) : 2 * ("even" === b[3] || "odd" === b[3])), b[5] = +(b[7] + b[8] || "odd" === b[3])) : b[3] && C.error(b[0]), b
			},
			PSEUDO: function(b) {
				var c, d = !b[6] && b[2];
				return hb.CHILD.test(b[0]) ? null : (b[3] ? b[2] = b[4] || b[5] || "" : d && ed.test(d) &&
					(c = Oa(d, !0)) && (c = d.indexOf(")", d.length - c) - d.length) && (b[0] = b[0].slice(0, c), b[2] = d.slice(0, c)), b.slice(0, 3))
			}
		},
		filter: {
			TAG: function(b) {
				var c = b.replace(ia, ja).toLowerCase();
				return "*" === b ? function() {
					return !0
				} : function(b) {
					return b.nodeName && b.nodeName.toLowerCase() === c
				}
			},
			CLASS: function(b) {
				var c = dc[b + " "];
				return c || (c = RegExp("(^|[\\x20\\t\\r\\n\\f])" + b + "([\\x20\\t\\r\\n\\f]|$)")) && dc(b, function(b) {
					return c.test("string" == typeof b.className && b.className || "undefined" != typeof b.getAttribute && b.getAttribute("class") ||
						"")
				})
			},
			ATTR: function(b, c, d) {
				return function(g) {
					g = C.attr(g, b);
					return null == g ? "!=" === c : !c || (g += "", "=" === c ? g === d : "!=" === c ? g !== d : "^=" === c ? d && 0 === g.indexOf(d) : "*=" === c ? d && -1 < g.indexOf(d) : "$=" === c ? d && g.slice(-d.length) === d : "~=" === c ? -1 < (" " + g.replace(ad, " ") + " ").indexOf(d) : "|=" === c && (g === d || g.slice(0, d.length + 1) === d + "-"))
				}
			},
			CHILD: function(b, c, d, g, e) {
				var f = "nth" !== b.slice(0, 3),
					j = "last" !== b.slice(-4),
					m = "of-type" === c;
				return 1 === g && 0 === e ? function(b) {
					return !!b.parentNode
				} : function(c, d, z) {
					var n, M, l, r, q, s;
					d = f !==
						j ? "nextSibling" : "previousSibling";
					var p = c.parentNode,
						u = m && c.nodeName.toLowerCase();
					z = !z && !m;
					var t = !1;
					if (p) {
						if (f) {
							for (; d;) {
								for (r = c; r = r[d];)
									if (m ? r.nodeName.toLowerCase() === u : 1 === r.nodeType) return !1;
								s = d = "only" === b && !s && "nextSibling"
							}
							return !0
						}
						if (s = [j ? p.firstChild : p.lastChild], j && z) {
							r = p;
							l = r[J] || (r[J] = {});
							M = l[r.uniqueID] || (l[r.uniqueID] = {});
							n = M[b] || [];
							t = (q = n[0] === ha && n[1]) && n[2];
							for (r = q && p.childNodes[q]; r = ++q && r && r[d] || (t = q = 0) || s.pop();)
								if (1 === r.nodeType && ++t && r === c) {
									M[b] = [ha, q, t];
									break
								}
						} else if (z && (r =
								c, l = r[J] || (r[J] = {}), M = l[r.uniqueID] || (l[r.uniqueID] = {}), n = M[b] || [], q = n[0] === ha && n[1], t = q), !1 === t)
							for (;
								(r = ++q && r && r[d] || (t = q = 0) || s.pop()) && (!(m ? r.nodeName.toLowerCase() === u : 1 === r.nodeType) || !++t || !(z && (l = r[J] || (r[J] = {}), M = l[r.uniqueID] || (l[r.uniqueID] = {}), M[b] = [ha, t]), r === c)););
						return t -= e, t === g || 0 === t % g && 0 <= t / g
					}
				}
			},
			PSEUDO: function(b, c) {
				var d, g = A.pseudos[b] || A.setFilters[b.toLowerCase()] || C.error("unsupported pseudo: " + b);
				return g[J] ? g(c) : 1 < g.length ? (d = [b, b, "", c], A.setFilters.hasOwnProperty(b.toLowerCase()) ?
					ea(function(b, d) {
						for (var x, e = g(b, c), f = e.length; f--;) x = za(b, e[f]), b[x] = !(d[x] = e[f])
					}) : function(b) {
						return g(b, 0, d)
					}) : g
			}
		},
		pseudos: {
			not: ea(function(b) {
				var c = [],
					d = [],
					g = Cb(b.replace(bb, "$1"));
				return g[J] ? ea(function(b, c, d, x) {
					var e;
					d = g(b, null, x, []);
					for (x = b.length; x--;)(e = d[x]) && (b[x] = !(c[x] = e))
				}) : function(b, x, e) {
					return c[0] = b, g(c, null, e, d), c[0] = null, !d.pop()
				}
			}),
			has: ea(function(b) {
				return function(c) {
					return 0 < C(b, c).length
				}
			}),
			contains: ea(function(b) {
				return b = b.replace(ia, ja),
					function(c) {
						return -1 < (c.textContent ||
							c.innerText || fb(c)).indexOf(b)
					}
			}),
			lang: ea(function(b) {
				return fd.test(b || "") || C.error("unsupported lang: " + b), b = b.replace(ia, ja).toLowerCase(),
					function(c) {
						var d;
						do
							if (d = Z ? c.lang : c.getAttribute("xml:lang") || c.getAttribute("lang")) return d = d.toLowerCase(), d === b || 0 === d.indexOf(b + "-"); while ((c = c.parentNode) && 1 === c.nodeType);
						return !1
					}
			}),
			target: function(b) {
				var c = ub.location && ub.location.hash;
				return c && c.slice(1) === b.id
			},
			root: function(b) {
				return b === aa
			},
			focus: function(b) {
				return b === D.activeElement && (!D.hasFocus ||
					D.hasFocus()) && !(!b.type && !b.href && !~b.tabIndex)
			},
			enabled: ac(!1),
			disabled: ac(!0),
			checked: function(b) {
				var c = b.nodeName.toLowerCase();
				return "input" === c && !!b.checked || "option" === c && !!b.selected
			},
			selected: function(b) {
				return b.parentNode && b.parentNode.selectedIndex, !0 === b.selected
			},
			empty: function(b) {
				for (b = b.firstChild; b; b = b.nextSibling)
					if (6 > b.nodeType) return !1;
				return !0
			},
			parent: function(b) {
				return !A.pseudos.empty(b)
			},
			header: function(b) {
				return hd.test(b.nodeName)
			},
			input: function(b) {
				return gd.test(b.nodeName)
			},
			button: function(b) {
				var c = b.nodeName.toLowerCase();
				return "input" === c && "button" === b.type || "button" === c
			},
			text: function(b) {
				var c;
				return "input" === b.nodeName.toLowerCase() && "text" === b.type && (null == (c = b.getAttribute("type")) || "text" === c.toLowerCase())
			},
			first: ya(function() {
				return [0]
			}),
			last: ya(function(b, c) {
				return [c - 1]
			}),
			eq: ya(function(b, c, d) {
				return [0 > d ? d + c : d]
			}),
			even: ya(function(b, c) {
				for (var d = 0; d < c; d += 2) b.push(d);
				return b
			}),
			odd: ya(function(b, c) {
				for (var d = 1; d < c; d += 2) b.push(d);
				return b
			}),
			lt: ya(function(b, c,
				d) {
				for (c = 0 > d ? d + c : d; 0 <= --c;) b.push(c);
				return b
			}),
			gt: ya(function(b, c, d) {
				for (d = 0 > d ? d + c : d; ++d < c;) b.push(d);
				return b
			})
		}
	};
	A.pseudos.nth = A.pseudos.eq;
	for (Ea in {
			radio: !0,
			checkbox: !0,
			file: !0,
			password: !0,
			image: !0
		}) A.pseudos[Ea] = Uc(Ea);
	for (Ea in {
			submit: !0,
			reset: !0
		}) A.pseudos[Ea] = Vc(Ea);
	bc.prototype = A.filters = A.pseudos;
	A.setFilters = new bc;
	Oa = C.tokenize = function(b, c) {
		var d, g, e, f, j, m, n;
		if (j = ec[b + " "]) return c ? 0 : j.slice(0);
		j = b;
		m = [];
		for (n = A.preFilter; j;) {
			d && !(g = bd.exec(j)) || (g && (j = j.slice(g[0].length) || j), m.push(e = []));
			d = !1;
			(g = cd.exec(j)) && (d = g.shift(), e.push({
				value: d,
				type: g[0].replace(bb, " ")
			}), j = j.slice(d.length));
			for (f in A.filter) !(g = hb[f].exec(j)) || n[f] && !(g = n[f](g)) || (d = g.shift(), e.push({
				value: d,
				type: f,
				matches: g
			}), j = j.slice(d.length));
			if (!d) break
		}
		return c ? j.length : j ? C.error(b) : ec(b, m).slice(0)
	};
	oa = (Cb = C.compile = function(b, c) {
		var d, g = [],
			e = [],
			f = $a[b + " "];
		if (!f) {
			c || (c = Oa(b));
			for (d = c.length; d--;) f = Bb(c[d]), f[J] ? g.push(f) : e.push(f);
			d = $a;
			var j = 0 < g.length,
				m = 0 < e.length,
				f = function(b, c, d, x, f) {
					var z, n, M, r = 0,
						l = "0",
						q = b && [],
						s = [],
						p = eb,
						Ja = b || m && A.find.TAG("*", f),
						u = ha += null == p ? 1 : Math.random() || 0.1,
						t = Ja.length;
					for (f && (eb = c === D || c || f); l !== t && null != (z = Ja[l]); l++) {
						if (m && z) {
							n = 0;
							for (c || z.ownerDocument === D || (pa(z), d = !Z); M = e[n++];)
								if (M(z, c || D, d)) {
									x.push(z);
									break
								} f && (ha = u)
						}
						j && ((z = !M && z) && r--, b && q.push(z))
					}
					if (r += l, j && l !== r) {
						for (n = 0; M = g[n++];) M(q, s, c, d);
						if (b) {
							if (0 < r)
								for (; l--;) q[l] || s[l] || (s[l] = Zc.call(x));
							s = db(s)
						}
						qa.apply(x, s);
						f && !b && 0 < s.length && 1 < r + g.length && C.uniqueSort(x)
					}
					return f && (ha = u, eb = p), q
				},
				f = j ? ea(f) : f,
				f = d(b, f);
			f.selector =
				b
		}
		return f
	}, Zb = C.select = function(b, c, d, g) {
		var e, f, j, m, n, r = "function" == typeof b && b,
			l = !g && Oa(b = r.selector || b);
		if (d = d || [], 1 === l.length) {
			if (f = l[0] = l[0].slice(0), 2 < f.length && "ID" === (j = f[0]).type && 9 === c.nodeType && Z && A.relative[f[1].type]) {
				if (c = (A.find.ID(j.matches[0].replace(ia, ja), c) || [])[0], !c) return d;
				r && (c = c.parentNode);
				b = b.slice(f.shift().value.length)
			}
			for (e = hb.needsContext.test(b) ? 0 : f.length; e-- && !(j = f[e], A.relative[m = j.type]);)
				if ((n = A.find[m]) && (g = n(j.matches[0].replace(ia, ja), vb.test(f[0].type) &&
						wb(c.parentNode) || c))) {
					if (f.splice(e, 1), b = g.length && ab(f), !b) return qa.apply(d, g), d;
					break
				}
		}
		return (r || Cb(b, l))(g, c, !Z, d, !c || vb.test(b) && wb(c.parentNode) || c), d
	}, L.sortStable = J.split("").sort(Db).join("") === J, L.detectDuplicates = !!Fa, pa(), L.sortDetached = ga(function(b) {
		return 1 & b.compareDocumentPosition(D.createElement("fieldset"))
	}), ga(function(b) {
		return b.innerHTML = "<a href='#'></a>", "#" === b.firstChild.getAttribute("href")
	}) || yb("type|href|height|width", function(b, c, d) {
		if (!d) return b.getAttribute(c,
			"type" === c.toLowerCase() ? 1 : 2)
	}), L.attributes && ga(function(b) {
		return b.innerHTML = "<input/>", b.firstChild.setAttribute("value", ""), "" === b.firstChild.getAttribute("value")
	}) || yb("value", function(b, c, d) {
		if (!d && "input" === b.nodeName.toLowerCase()) return b.defaultValue
	}), ga(function(b) {
		return null == b.getAttribute("disabled")
	}) || yb("checked|selected|async|autofocus|autoplay|controls|defer|disabled|hidden|ismap|loop|multiple|open|readonly|required|scoped", function(b, c, d) {
		var g;
		if (!d) return !0 === b[c] ? c.toLowerCase() :
			(g = b.getAttributeNode(c)) && g.specified ? g.value : null
	}), C);
	j.find = oa;
	j.expr = oa.selectors;
	j.expr[":"] = j.expr.pseudos;
	j.uniqueSort = j.unique = oa.uniqueSort;
	j.text = oa.getText;
	j.isXMLDoc = oa.isXML;
	j.contains = oa.contains;
	j.escapeSelector = oa.escape;
	var Ga = function(b, c, d) {
			for (var g = [], e = void 0 !== d;
				(b = b[c]) && 9 !== b.nodeType;)
				if (1 === b.nodeType) {
					if (e && j(b).is(d)) break;
					g.push(b)
				} return g
		},
		hc = function(b, c) {
			for (var d = []; b; b = b.nextSibling) 1 === b.nodeType && b !== c && d.push(b);
			return d
		},
		ic = j.expr.match.needsContext,
		jc = /^<([a-z][^\/\0>:\x20\t\r\n\f]*)[\x20\t\r\n\f]*\/?>(?:<\/\1>|)$/i,
		Ec = /^.[^:#\[\.,]*$/;
	j.filter = function(b, c, d) {
		var g = c[0];
		return d && (b = ":not(" + b + ")"), 1 === c.length && 1 === g.nodeType ? j.find.matchesSelector(g, b) ? [g] : [] : j.find.matches(b, j.grep(c, function(b) {
			return 1 === b.nodeType
		}))
	};
	j.fn.extend({
		find: function(b) {
			var c, d, g = this.length,
				e = this;
			if ("string" != typeof b) return this.pushStack(j(b).filter(function() {
				for (c = 0; c < g; c++)
					if (j.contains(e[c], this)) return !0
			}));
			d = this.pushStack([]);
			for (c = 0; c < g; c++) j.find(b, e[c], d);
			return 1 < g ? j.uniqueSort(d) : d
		},
		filter: function(b) {
			return this.pushStack(l(this,
				b || [], !1))
		},
		not: function(b) {
			return this.pushStack(l(this, b || [], !0))
		},
		is: function(b) {
			return !!l(this, "string" == typeof b && ic.test(b) ? j(b) : b || [], !1).length
		}
	});
	var kc, id = /^(?:\s*(<[\w\W]+>)[^>]*|#([\w-]+))$/;
	(j.fn.init = function(b, c, d) {
		var g, e;
		if (!b) return this;
		if (d = d || kc, "string" == typeof b) {
			if (g = "<" === b[0] && ">" === b[b.length - 1] && 3 <= b.length ? [null, b, null] : id.exec(b), !g || !g[1] && c) return !c || c.jquery ? (c || d).find(b) : this.constructor(c).find(b);
			if (g[1]) {
				if (c = c instanceof j ? c[0] : c, j.merge(this, j.parseHTML(g[1],
						c && c.nodeType ? c.ownerDocument || c : F, !0)), jc.test(g[1]) && j.isPlainObject(c))
					for (g in c) j.isFunction(this[g]) ? this[g](c[g]) : this.attr(g, c[g]);
				return this
			}
			return e = F.getElementById(g[2]), e && (this[0] = e, this.length = 1), this
		}
		return b.nodeType ? (this[0] = b, this.length = 1, this) : j.isFunction(b) ? void 0 !== d.ready ? d.ready(b) : b(j) : j.makeArray(b, this)
	}).prototype = j.fn;
	kc = j(F);
	var jd = /^(?:parents|prev(?:Until|All))/,
		kd = {
			children: !0,
			contents: !0,
			next: !0,
			prev: !0
		};
	j.fn.extend({
		has: function(b) {
			var c = j(b, this),
				d = c.length;
			return this.filter(function() {
				for (var b = 0; b < d; b++)
					if (j.contains(this, c[b])) return !0
			})
		},
		closest: function(b, c) {
			var d, g = 0,
				e = this.length,
				f = [],
				m = "string" != typeof b && j(b);
			if (!ic.test(b))
				for (; g < e; g++)
					for (d = this[g]; d && d !== c; d = d.parentNode)
						if (11 > d.nodeType && (m ? -1 < m.index(d) : 1 === d.nodeType && j.find.matchesSelector(d, b))) {
							f.push(d);
							break
						} return this.pushStack(1 < f.length ? j.uniqueSort(f) : f)
		},
		index: function(b) {
			return b ? "string" == typeof b ? Ia.call(j(b), this[0]) : Ia.call(this, b.jquery ? b[0] : b) : this[0] && this[0].parentNode ?
				this.first().prevAll().length : -1
		},
		add: function(b, c) {
			return this.pushStack(j.uniqueSort(j.merge(this.get(), j(b, c))))
		},
		addBack: function(b) {
			return this.add(null == b ? this.prevObject : this.prevObject.filter(b))
		}
	});
	j.each({
		parent: function(b) {
			return (b = b.parentNode) && 11 !== b.nodeType ? b : null
		},
		parents: function(b) {
			return Ga(b, "parentNode")
		},
		parentsUntil: function(b, c, d) {
			return Ga(b, "parentNode", d)
		},
		next: function(b) {
			return p(b, "nextSibling")
		},
		prev: function(b) {
			return p(b, "previousSibling")
		},
		nextAll: function(b) {
			return Ga(b,
				"nextSibling")
		},
		prevAll: function(b) {
			return Ga(b, "previousSibling")
		},
		nextUntil: function(b, c, d) {
			return Ga(b, "nextSibling", d)
		},
		prevUntil: function(b, c, d) {
			return Ga(b, "previousSibling", d)
		},
		siblings: function(b) {
			return hc((b.parentNode || {}).firstChild, b)
		},
		children: function(b) {
			return hc(b.firstChild)
		},
		contents: function(b) {
			return f(b, "iframe") ? b.contentDocument : (f(b, "template") && (b = b.content || b), j.merge([], b.childNodes))
		}
	}, function(b, c) {
		j.fn[b] = function(d, g) {
			var e = j.map(this, c, d);
			return "Until" !== b.slice(-5) &&
				(g = d), g && "string" == typeof g && (e = j.filter(g, e)), 1 < this.length && (kd[b] || j.uniqueSort(e), jd.test(b) && e.reverse()), this.pushStack(e)
		}
	});
	var X = /[^\x20\t\r\n\f]+/g;
	j.Callbacks = function(b) {
		var c;
		if ("string" == typeof b) {
			var d = {};
			c = (j.each(b.match(X) || [], function(b, c) {
				d[c] = !0
			}), d)
		} else c = j.extend({}, b);
		b = c;
		var g, e, f, m, n = [],
			r = [],
			l = -1,
			q = function() {
				m = m || b.once;
				for (f = g = !0; r.length; l = -1)
					for (e = r.shift(); ++l < n.length;) !1 === n[l].apply(e[0], e[1]) && b.stopOnFalse && (l = n.length, e = !1);
				b.memory || (e = !1);
				g = !1;
				m && (n = e ? [] : "")
			},
			s = {
				add: function() {
					return n && (e && !g && (l = n.length - 1, r.push(e)), function Kc(c) {
						j.each(c, function(c, d) {
							j.isFunction(d) ? b.unique && s.has(d) || n.push(d) : d && d.length && "string" !== j.type(d) && Kc(d)
						})
					}(arguments), e && !g && q()), this
				},
				remove: function() {
					return j.each(arguments, function(b, c) {
						for (var d; - 1 < (d = j.inArray(c, n, d));) n.splice(d, 1), d <= l && l--
					}), this
				},
				has: function(b) {
					return b ? -1 < j.inArray(b, n) : 0 < n.length
				},
				empty: function() {
					return n && (n = []), this
				},
				disable: function() {
					return m = r = [], n = e = "", this
				},
				disabled: function() {
					return !n
				},
				lock: function() {
					return m = r = [], e || g || (n = e = ""), this
				},
				locked: function() {
					return !!m
				},
				fireWith: function(b, c) {
					return m || (c = c || [], c = [b, c.slice ? c.slice() : c], r.push(c), g || q()), this
				},
				fire: function() {
					return s.fireWith(this, arguments), this
				},
				fired: function() {
					return !!f
				}
			};
		return s
	};
	j.extend({
		Deferred: function(c) {
			var d = [
					["notify", "progress", j.Callbacks("memory"), j.Callbacks("memory"), 2],
					["resolve", "done", j.Callbacks("once memory"), j.Callbacks("once memory"), 0, "resolved"],
					["reject", "fail", j.Callbacks("once memory"),
						j.Callbacks("once memory"), 1, "rejected"
					]
				],
				e = "pending",
				f = {
					state: function() {
						return e
					},
					always: function() {
						return m.done(arguments).fail(arguments), this
					},
					"catch": function(b) {
						return f.then(null, b)
					},
					pipe: function() {
						var b = arguments;
						return j.Deferred(function(c) {
							j.each(d, function(d, g) {
								var x = j.isFunction(b[g[4]]) && b[g[4]];
								m[g[1]](function() {
									var b = x && x.apply(this, arguments);
									b && j.isFunction(b.promise) ? b.promise().progress(c.notify).done(c.resolve).fail(c.reject) : c[g[0] + "With"](this, x ? [b] : arguments)
								})
							});
							b = null
						}).promise()
					},
					then: function(c, x, e) {
						function f(c, d, x, e) {
							return function() {
								var z = this,
									n = arguments,
									l = function() {
										var b, r;
										if (!(c < m)) {
											if (b = x.apply(z, n), b === d.promise()) throw new TypeError("Thenable self-resolution");
											r = b && ("object" == typeof b || "function" == typeof b) && b.then;
											j.isFunction(r) ? e ? r.call(b, f(m, d, q, e), f(m, d, g, e)) : (m++, r.call(b, f(m, d, q, e), f(m, d, g, e), f(m, d, q, d.notifyWith))) : (x !== q && (z = void 0, n = [b]), (e || d.resolveWith)(z, n))
										}
									},
									r = e ? l : function() {
										try {
											l()
										} catch (b) {
											j.Deferred.exceptionHook && j.Deferred.exceptionHook(b,
												r.stackTrace), c + 1 >= m && (x !== g && (z = void 0, n = [b]), d.rejectWith(z, n))
										}
									};
								c ? r() : (j.Deferred.getStackHook && (r.stackTrace = j.Deferred.getStackHook()), b.setTimeout(r))
							}
						}
						var m = 0;
						return j.Deferred(function(b) {
							d[0][3].add(f(0, b, j.isFunction(e) ? e : q, b.notifyWith));
							d[1][3].add(f(0, b, j.isFunction(c) ? c : q));
							d[2][3].add(f(0, b, j.isFunction(x) ? x : g))
						}).promise()
					},
					promise: function(b) {
						return null != b ? j.extend(b, f) : f
					}
				},
				m = {};
			return j.each(d, function(b, c) {
				var g = c[2],
					x = c[5];
				f[c[1]] = g.add;
				x && g.add(function() {
						e = x
					}, d[3 - b][2].disable,
					d[0][2].lock);
				g.add(c[3].fire);
				m[c[0]] = function() {
					return m[c[0] + "With"](this === m ? void 0 : this, arguments), this
				};
				m[c[0] + "With"] = g.fireWith
			}), f.promise(m), c && c.call(m, m), m
		},
		when: function(b) {
			var c = arguments.length,
				d = c,
				g = Array(d),
				e = xa.call(arguments),
				f = j.Deferred(),
				n = function(b) {
					return function(d) {
						g[b] = this;
						e[b] = 1 < arguments.length ? xa.call(arguments) : d;
						--c || f.resolveWith(g, e)
					}
				};
			if (1 >= c && (m(b, f.done(n(d)).resolve, f.reject, !c), "pending" === f.state() || j.isFunction(e[d] && e[d].then))) return f.then();
			for (; d--;) m(e[d],
				n(d), f.reject);
			return f.promise()
		}
	});
	var ld = /^(Eval|Internal|Range|Reference|Syntax|Type|URI)Error$/;
	j.Deferred.exceptionHook = function(c, d) {
		b.console && b.console.warn && c && ld.test(c.name) && b.console.warn("jQuery.Deferred exception: " + c.message, c.stack, d)
	};
	j.readyException = function(c) {
		b.setTimeout(function() {
			throw c;
		})
	};
	var Eb = j.Deferred();
	j.fn.ready = function(b) {
		return Eb.then(b)["catch"](function(b) {
			j.readyException(b)
		}), this
	};
	j.extend({
		isReady: !1,
		readyWait: 1,
		ready: function(b) {
			(!0 === b ? --j.readyWait :
				j.isReady) || (j.isReady = !0, !0 !== b && 0 < --j.readyWait || Eb.resolveWith(F, [j]))
		}
	});
	j.ready.then = Eb.then;
	"complete" === F.readyState || "loading" !== F.readyState && !F.documentElement.doScroll ? b.setTimeout(j.ready) : (F.addEventListener("DOMContentLoaded", n), b.addEventListener("load", n));
	var ka = function(b, c, d, g, e, f, m) {
			var n = 0,
				r = b.length,
				l = null == d;
			if ("object" === j.type(d))
				for (n in e = !0, d) ka(b, c, n, d[n], !0, f, m);
			else if (void 0 !== g && (e = !0, j.isFunction(g) || (m = !0), l && (m ? (c.call(b, g), c = null) : (l = c, c = function(b, c, d) {
					return l.call(j(b),
						d)
				})), c))
				for (; n < r; n++) c(b[n], d, m ? g : g.call(b[n], n, c(b[n], d)));
			return e ? b : l ? c.call(b) : r ? c(b[0], d) : f
		},
		ib = function(b) {
			return 1 === b.nodeType || 9 === b.nodeType || !+b.nodeType
		};
	r.uid = 1;
	r.prototype = {
		cache: function(b) {
			var c = b[this.expando];
			return c || (c = {}, ib(b) && (b.nodeType ? b[this.expando] = c : Object.defineProperty(b, this.expando, {
				value: c,
				configurable: !0
			}))), c
		},
		set: function(b, c, d) {
			var g;
			b = this.cache(b);
			if ("string" == typeof c) b[j.camelCase(c)] = d;
			else
				for (g in c) b[j.camelCase(g)] = c[g];
			return b
		},
		get: function(b, c) {
			return void 0 ===
				c ? this.cache(b) : b[this.expando] && b[this.expando][j.camelCase(c)]
		},
		access: function(b, c, d) {
			return void 0 === c || c && "string" == typeof c && void 0 === d ? this.get(b, c) : (this.set(b, c, d), void 0 !== d ? d : c)
		},
		remove: function(b, c) {
			var d, g = b[this.expando];
			if (void 0 !== g) {
				if (void 0 !== c) {
					Array.isArray(c) ? c = c.map(j.camelCase) : (c = j.camelCase(c), c = c in g ? [c] : c.match(X) || []);
					for (d = c.length; d--;) delete g[c[d]]
				}(void 0 === c || j.isEmptyObject(g)) && (b.nodeType ? b[this.expando] = void 0 : delete b[this.expando])
			}
		},
		hasData: function(b) {
			b =
				b[this.expando];
			return void 0 !== b && !j.isEmptyObject(b)
		}
	};
	var E = new r,
		Q = new r,
		Gc = /^(?:\{[\w\W]*\}|\[[\w\W]*\])$/,
		Fc = /[A-Z]/g;
	j.extend({
		hasData: function(b) {
			return Q.hasData(b) || E.hasData(b)
		},
		data: function(b, c, d) {
			return Q.access(b, c, d)
		},
		removeData: function(b, c) {
			Q.remove(b, c)
		},
		_data: function(b, c, d) {
			return E.access(b, c, d)
		},
		_removeData: function(b, c) {
			E.remove(b, c)
		}
	});
	j.fn.extend({
		data: function(b, c) {
			var d, g, e, f = this[0],
				m = f && f.attributes;
			if (void 0 === b) {
				if (this.length && (e = Q.get(f), 1 === f.nodeType && !E.get(f,
						"hasDataAttrs"))) {
					for (d = m.length; d--;) m[d] && (g = m[d].name, 0 === g.indexOf("data-") && (g = j.camelCase(g.slice(5)), s(f, g, e[g])));
					E.set(f, "hasDataAttrs", !0)
				}
				return e
			}
			return "object" == typeof b ? this.each(function() {
				Q.set(this, b)
			}) : ka(this, function(c) {
				var d;
				if (f && void 0 === c) {
					if ((d = Q.get(f, b), void 0 !== d) || (d = s(f, b), void 0 !== d)) return d
				} else this.each(function() {
					Q.set(this, b, c)
				})
			}, null, c, 1 < arguments.length, null, !0)
		},
		removeData: function(b) {
			return this.each(function() {
				Q.remove(this, b)
			})
		}
	});
	j.extend({
		queue: function(b,
			c, d) {
			var g;
			if (b) return c = (c || "fx") + "queue", g = E.get(b, c), d && (!g || Array.isArray(d) ? g = E.access(b, c, j.makeArray(d)) : g.push(d)), g || []
		},
		dequeue: function(b, c) {
			c = c || "fx";
			var d = j.queue(b, c),
				g = d.length,
				e = d.shift(),
				f = j._queueHooks(b, c),
				m = function() {
					j.dequeue(b, c)
				};
			"inprogress" === e && (e = d.shift(), g--);
			e && ("fx" === c && d.unshift("inprogress"), delete f.stop, e.call(b, m, f));
			!g && f && f.empty.fire()
		},
		_queueHooks: function(b, c) {
			var d = c + "queueHooks";
			return E.get(b, d) || E.access(b, d, {
				empty: j.Callbacks("once memory").add(function() {
					E.remove(b,
						[c + "queue", d])
				})
			})
		}
	});
	j.fn.extend({
		queue: function(b, c) {
			var d = 2;
			return "string" != typeof b && (c = b, b = "fx", d--), arguments.length < d ? j.queue(this[0], b) : void 0 === c ? this : this.each(function() {
				var d = j.queue(this, b, c);
				j._queueHooks(this, b);
				"fx" === b && "inprogress" !== d[0] && j.dequeue(this, b)
			})
		},
		dequeue: function(b) {
			return this.each(function() {
				j.dequeue(this, b)
			})
		},
		clearQueue: function(b) {
			return this.queue(b || "fx", [])
		},
		promise: function(b, c) {
			var d, g = 1,
				e = j.Deferred(),
				f = this,
				m = this.length,
				n = function() {
					--g || e.resolveWith(f,
						[f])
				};
			"string" != typeof b && (c = b, b = void 0);
			for (b = b || "fx"; m--;)(d = E.get(f[m], b + "queueHooks")) && d.empty && (g++, d.empty.add(n));
			return n(), e.promise(c)
		}
	});
	var lc = /[+-]?(?:\d*\.|)\d+(?:[eE][+-]?\d+|)/.source,
		Ka = RegExp("^(?:([+-])=|)(" + lc + ")([a-z%]*)$", "i"),
		ta = ["Top", "Right", "Bottom", "Left"],
		Ta = function(b, c) {
			return b = c || b, "none" === b.style.display || "" === b.style.display && j.contains(b.ownerDocument, b) && "none" === j.css(b, "display")
		},
		mc = function(b, c, d, g) {
			var e, f = {};
			for (e in c) f[e] = b.style[e], b.style[e] = c[e];
			d =
				d.apply(b, g || []);
			for (e in c) b.style[e] = f[e];
			return d
		},
		Ib = {};
	j.fn.extend({
		show: function() {
			return t(this, !0)
		},
		hide: function() {
			return t(this)
		},
		toggle: function(b) {
			return "boolean" == typeof b ? b ? this.show() : this.hide() : this.each(function() {
				Ta(this) ? j(this).show() : j(this).hide()
			})
		}
	});
	var nc = /^(?:checkbox|radio)$/i,
		Jb = /<([a-z][^\/\0>\x20\t\r\n\f]+)/i,
		Kb = /^$|\/(?:java|ecma)script/i,
		T = {
			option: [1, "<select multiple='multiple'>", "</select>"],
			thead: [1, "<table>", "</table>"],
			col: [2, "<table><colgroup>", "</colgroup></table>"],
			tr: [2, "<table><tbody>", "</tbody></table>"],
			td: [3, "<table><tbody><tr>", "</tr></tbody></table>"],
			_default: [0, "", ""]
		};
	T.optgroup = T.option;
	T.tbody = T.tfoot = T.colgroup = T.caption = T.thead;
	T.th = T.td;
	var Hc = /<|&#?\w+;/,
		jb = F.createDocumentFragment().appendChild(F.createElement("div")),
		kb = F.createElement("input");
	kb.setAttribute("type", "radio");
	kb.setAttribute("checked", "checked");
	kb.setAttribute("name", "t");
	jb.appendChild(kb);
	I.checkClone = jb.cloneNode(!0).cloneNode(!0).lastChild.checked;
	jb.innerHTML = "<textarea>x</textarea>";
	I.noCloneChecked = !!jb.cloneNode(!0).lastChild.defaultValue;
	!0;
	var lb = F.documentElement,
		md = /^key/,
		nd = /^(?:mouse|pointer|contextmenu|drag|drop)|click/,
		oc = /^([^.]*)(?:\.(.+)|)/;
	j.event = {
		global: {},
		add: function(b, c, d, g, e) {
			var f, m, n, r, l, q, s, p, u, t;
			if (l = E.get(b)) {
				d.handler && (f = d, d = f.handler, e = f.selector);
				e && j.find.matchesSelector(lb, e);
				d.guid || (d.guid = j.guid++);
				(r = l.events) || (r = l.events = {});
				(m = l.handle) || (m = l.handle = function(c) {
					return "undefined" != typeof j && j.event.triggered !== c.type ? j.event.dispatch.apply(b,
						arguments) : void 0
				});
				c = (c || "").match(X) || [""];
				for (l = c.length; l--;) n = oc.exec(c[l]) || [], u = t = n[1], n = (n[2] || "").split(".").sort(), u && (s = j.event.special[u] || {}, u = (e ? s.delegateType : s.bindType) || u, s = j.event.special[u] || {}, q = j.extend({
					type: u,
					origType: t,
					data: g,
					handler: d,
					guid: d.guid,
					selector: e,
					needsContext: e && j.expr.match.needsContext.test(e),
					namespace: n.join(".")
				}, f), (p = r[u]) || (p = r[u] = [], p.delegateCount = 0, s.setup && !1 !== s.setup.call(b, g, n, m) || b.addEventListener && b.addEventListener(u, m)), s.add && (s.add.call(b,
					q), q.handler.guid || (q.handler.guid = d.guid)), e ? p.splice(p.delegateCount++, 0, q) : p.push(q), j.event.global[u] = !0)
			}
		},
		remove: function(b, c, d, g, e) {
			var f, m, n, r, l, q, s, p, u, t, y, B = E.hasData(b) && E.get(b);
			if (B && (r = B.events)) {
				c = (c || "").match(X) || [""];
				for (l = c.length; l--;)
					if (n = oc.exec(c[l]) || [], u = y = n[1], t = (n[2] || "").split(".").sort(), u) {
						s = j.event.special[u] || {};
						u = (g ? s.delegateType : s.bindType) || u;
						p = r[u] || [];
						n = n[2] && RegExp("(^|\\.)" + t.join("\\.(?:.*\\.|)") + "(\\.|$)");
						for (m = f = p.length; f--;) q = p[f], !e && y !== q.origType ||
							d && d.guid !== q.guid || n && !n.test(q.namespace) || g && g !== q.selector && ("**" !== g || !q.selector) || (p.splice(f, 1), q.selector && p.delegateCount--, s.remove && s.remove.call(b, q));
						m && !p.length && (s.teardown && !1 !== s.teardown.call(b, t, B.handle) || j.removeEvent(b, u, B.handle), delete r[u])
					} else
						for (u in r) j.event.remove(b, u + c[l], d, g, !0);
				j.isEmptyObject(r) && E.remove(b, "handle events")
			}
		},
		dispatch: function(b) {
			var c = j.event.fix(b),
				d, g, e, f, m, n, r = Array(arguments.length);
			g = (E.get(this, "events") || {})[c.type] || [];
			var l = j.event.special[c.type] || {};
			r[0] = c;
			for (d = 1; d < arguments.length; d++) r[d] = arguments[d];
			if (c.delegateTarget = this, !l.preDispatch || !1 !== l.preDispatch.call(this, c)) {
				n = j.event.handlers.call(this, c, g);
				for (d = 0;
					(f = n[d++]) && !c.isPropagationStopped();) {
					c.currentTarget = f.elem;
					for (g = 0;
						(m = f.handlers[g++]) && !c.isImmediatePropagationStopped();) c.rnamespace && !c.rnamespace.test(m.namespace) || (c.handleObj = m, c.data = m.data, e = ((j.event.special[m.origType] || {}).handle || m.handler).apply(f.elem, r), void 0 !== e && !1 === (c.result = e) && (c.preventDefault(),
						c.stopPropagation()))
				}
				return l.postDispatch && l.postDispatch.call(this, c), c.result
			}
		},
		handlers: function(b, c) {
			var d, g, e, f, m, n = [],
				r = c.delegateCount,
				l = b.target;
			if (r && l.nodeType && !("click" === b.type && 1 <= b.button))
				for (; l !== this; l = l.parentNode || this)
					if (1 === l.nodeType && ("click" !== b.type || !0 !== l.disabled)) {
						f = [];
						m = {};
						for (d = 0; d < r; d++) g = c[d], e = g.selector + " ", void 0 === m[e] && (m[e] = g.needsContext ? -1 < j(e, this).index(l) : j.find(e, this, null, [l]).length), m[e] && f.push(g);
						f.length && n.push({
							elem: l,
							handlers: f
						})
					} return l = this,
				r < c.length && n.push({
					elem: l,
					handlers: c.slice(r)
				}), n
		},
		addProp: function(b, c) {
			Object.defineProperty(j.Event.prototype, b, {
				enumerable: !0,
				configurable: !0,
				get: j.isFunction(c) ? function() {
					if (this.originalEvent) return c(this.originalEvent)
				} : function() {
					if (this.originalEvent) return this.originalEvent[b]
				},
				set: function(c) {
					Object.defineProperty(this, b, {
						enumerable: !0,
						configurable: !0,
						writable: !0,
						value: c
					})
				}
			})
		},
		fix: function(b) {
			return b[j.expando] ? b : new j.Event(b)
		},
		special: {
			load: {
				noBubble: !0
			},
			focus: {
				trigger: function() {
					if (this !==
						La() && this.focus) return this.focus(), !1
				},
				delegateType: "focusin"
			},
			blur: {
				trigger: function() {
					if (this === La() && this.blur) return this.blur(), !1
				},
				delegateType: "focusout"
			},
			click: {
				trigger: function() {
					if ("checkbox" === this.type && this.click && f(this, "input")) return this.click(), !1
				},
				_default: function(b) {
					return f(b.target, "a")
				}
			},
			beforeunload: {
				postDispatch: function(b) {
					void 0 !== b.result && b.originalEvent && (b.originalEvent.returnValue = b.result)
				}
			}
		}
	};
	j.removeEvent = function(b, c, d) {
		b.removeEventListener && b.removeEventListener(c,
			d)
	};
	j.Event = function(b, c) {
		return this instanceof j.Event ? (b && b.type ? (this.originalEvent = b, this.type = b.type, this.isDefaultPrevented = b.defaultPrevented || void 0 === b.defaultPrevented && !1 === b.returnValue ? N : ba, this.target = b.target && 3 === b.target.nodeType ? b.target.parentNode : b.target, this.currentTarget = b.currentTarget, this.relatedTarget = b.relatedTarget) : this.type = b, c && j.extend(this, c), this.timeStamp = b && b.timeStamp || j.now(), void(this[j.expando] = !0)) : new j.Event(b, c)
	};
	j.Event.prototype = {
		constructor: j.Event,
		isDefaultPrevented: ba,
		isPropagationStopped: ba,
		isImmediatePropagationStopped: ba,
		isSimulated: !1,
		preventDefault: function() {
			var b = this.originalEvent;
			this.isDefaultPrevented = N;
			b && !this.isSimulated && b.preventDefault()
		},
		stopPropagation: function() {
			var b = this.originalEvent;
			this.isPropagationStopped = N;
			b && !this.isSimulated && b.stopPropagation()
		},
		stopImmediatePropagation: function() {
			var b = this.originalEvent;
			this.isImmediatePropagationStopped = N;
			b && !this.isSimulated && b.stopImmediatePropagation();
			this.stopPropagation()
		}
	};
	j.each({
		altKey: !0,
		bubbles: !0,
		cancelable: !0,
		changedTouches: !0,
		ctrlKey: !0,
		detail: !0,
		eventPhase: !0,
		metaKey: !0,
		pageX: !0,
		pageY: !0,
		shiftKey: !0,
		view: !0,
		"char": !0,
		charCode: !0,
		key: !0,
		keyCode: !0,
		button: !0,
		buttons: !0,
		clientX: !0,
		clientY: !0,
		offsetX: !0,
		offsetY: !0,
		pointerId: !0,
		pointerType: !0,
		screenX: !0,
		screenY: !0,
		targetTouches: !0,
		toElement: !0,
		touches: !0,
		which: function(b) {
			var c = b.button;
			return null == b.which && md.test(b.type) ? null != b.charCode ? b.charCode : b.keyCode : !b.which && void 0 !== c && nd.test(b.type) ? 1 & c ? 1 : 2 & c ? 3 : 4 &
				c ? 2 : 0 : b.which
		}
	}, j.event.addProp);
	j.each({
		mouseenter: "mouseover",
		mouseleave: "mouseout",
		pointerenter: "pointerover",
		pointerleave: "pointerout"
	}, function(b, c) {
		j.event.special[b] = {
			delegateType: c,
			bindType: c,
			handle: function(b) {
				var d, g = b.relatedTarget,
					e = b.handleObj;
				return g && (g === this || j.contains(this, g)) || (b.type = e.origType, d = e.handler.apply(this, arguments), b.type = c), d
			}
		}
	});
	j.fn.extend({
		on: function(b, c, d, g) {
			return sa(this, b, c, d, g)
		},
		one: function(b, c, d, g) {
			return sa(this, b, c, d, g, 1)
		},
		off: function(b, c, d) {
			var g,
				e;
			if (b && b.preventDefault && b.handleObj) return g = b.handleObj, j(b.delegateTarget).off(g.namespace ? g.origType + "." + g.namespace : g.origType, g.selector, g.handler), this;
			if ("object" == typeof b) {
				for (e in b) this.off(e, c, b[e]);
				return this
			}
			return !1 !== c && "function" != typeof c || (d = c, c = void 0), !1 === d && (d = ba), this.each(function() {
				j.event.remove(this, b, d, c)
			})
		}
	});
	var od = /<(?!area|br|col|embed|hr|img|input|link|meta|param)(([a-z][^\/\0>\x20\t\r\n\f]*)[^>]*)\/>/gi,
		pd = /<script|<style|<link/i,
		Jc = /checked\s*(?:[^=]|=\s*.checked.)/i,
		Ic = /^true\/(.*)/,
		Lc = /^\s*<!(?:\[CDATA\[|--)|(?:\]\]|--)>\s*$/g;
	j.extend({
		htmlPrefilter: function(b) {
			return b.replace(od, "<$1></$2>")
		},
		clone: function(b, c, d) {
			var g, e, f, m, n = b.cloneNode(!0),
				l = j.contains(b.ownerDocument, b);
			if (!I.noCloneChecked && !(1 !== b.nodeType && 11 !== b.nodeType || j.isXMLDoc(b))) {
				m = y(n);
				f = y(b);
				g = 0;
				for (e = f.length; g < e; g++) {
					var r = f[g],
						q = m[g],
						s = q.nodeName.toLowerCase();
					"input" === s && nc.test(r.type) ? q.checked = r.checked : "input" !== s && "textarea" !== s || (q.defaultValue = r.defaultValue)
				}
			}
			if (c)
				if (d) {
					f =
						f || y(b);
					m = m || y(n);
					g = 0;
					for (e = f.length; g < e; g++) Lb(f[g], m[g])
				} else Lb(b, n);
			return m = y(n, "script"), 0 < m.length && B(m, !l && y(b, "script")), n
		},
		cleanData: function(b) {
			for (var c, d, g, e = j.event.special, f = 0; void 0 !== (d = b[f]); f++)
				if (ib(d)) {
					if (c = d[E.expando]) {
						if (c.events)
							for (g in c.events) e[g] ? j.event.remove(d, g) : j.removeEvent(d, g, c.handle);
						d[E.expando] = void 0
					}
					d[Q.expando] && (d[Q.expando] = void 0)
				}
		}
	});
	j.fn.extend({
		detach: function(b) {
			return Va(this, b, !0)
		},
		remove: function(b) {
			return Va(this, b)
		},
		text: function(b) {
			return ka(this,
				function(b) {
					return void 0 === b ? j.text(this) : this.empty().each(function() {
						1 !== this.nodeType && 11 !== this.nodeType && 9 !== this.nodeType || (this.textContent = b)
					})
				}, null, b, arguments.length)
		},
		append: function() {
			return ma(this, arguments, function(b) {
				(1 === this.nodeType || 11 === this.nodeType || 9 === this.nodeType) && H(this, b).appendChild(b)
			})
		},
		prepend: function() {
			return ma(this, arguments, function(b) {
				if (1 === this.nodeType || 11 === this.nodeType || 9 === this.nodeType) {
					var c = H(this, b);
					c.insertBefore(b, c.firstChild)
				}
			})
		},
		before: function() {
			return ma(this,
				arguments,
				function(b) {
					this.parentNode && this.parentNode.insertBefore(b, this)
				})
		},
		after: function() {
			return ma(this, arguments, function(b) {
				this.parentNode && this.parentNode.insertBefore(b, this.nextSibling)
			})
		},
		empty: function() {
			for (var b, c = 0; null != (b = this[c]); c++) 1 === b.nodeType && (j.cleanData(y(b, !1)), b.textContent = "");
			return this
		},
		clone: function(b, c) {
			return b = null != b && b, c = null == c ? b : c, this.map(function() {
				return j.clone(this, b, c)
			})
		},
		html: function(b) {
			return ka(this, function(b) {
				var c = this[0] || {},
					d = 0,
					g = this.length;
				if (void 0 === b && 1 === c.nodeType) return c.innerHTML;
				if ("string" == typeof b && !pd.test(b) && !T[(Jb.exec(b) || ["", ""])[1].toLowerCase()]) {
					b = j.htmlPrefilter(b);
					try {
						for (; d < g; d++) c = this[d] || {}, 1 === c.nodeType && (j.cleanData(y(c, !1)), c.innerHTML = b);
						c = 0
					} catch (e) {}
				}
				c && this.empty().append(b)
			}, null, b, arguments.length)
		},
		replaceWith: function() {
			var b = [];
			return ma(this, arguments, function(c) {
				var d = this.parentNode;
				0 > j.inArray(this, b) && (j.cleanData(y(this)), d && d.replaceChild(c, this))
			}, b)
		}
	});
	j.each({
		appendTo: "append",
		prependTo: "prepend",
		insertBefore: "before",
		insertAfter: "after",
		replaceAll: "replaceWith"
	}, function(b, c) {
		j.fn[b] = function(b) {
			for (var d = [], g = j(b), e = g.length - 1, f = 0; f <= e; f++) b = f === e ? this : this.clone(!0), j(g[f])[c](b), tb.apply(d, b.get());
			return this.pushStack(d)
		}
	});
	var Nb = /^margin/,
		pb = RegExp("^(" + lc + ")(?!px)[a-z%]+$", "i"),
		Wa = function(c) {
			var d = c.ownerDocument.defaultView;
			return d && d.opener || (d = b), d.getComputedStyle(c)
		},
		nb = function() {
			if (fa) {
				fa.style.cssText = "box-sizing:border-box;position:relative;display:block;margin:auto;border:1px;padding:1px;top:1%;width:50%";
				fa.innerHTML = "";
				lb.appendChild(mb);
				var c = b.getComputedStyle(fa);
				pc = "1%" !== c.top;
				qc = "2px" === c.marginLeft;
				rc = "4px" === c.width;
				fa.style.marginRight = "50%";
				sc = "4px" === c.marginRight;
				lb.removeChild(mb);
				fa = null
			}
		},
		pc, rc, sc, qc, mb = F.createElement("div"),
		fa = F.createElement("div");
	fa.style && (fa.style.backgroundClip = "content-box", fa.cloneNode(!0).style.backgroundClip = "", I.clearCloneStyle = "content-box" === fa.style.backgroundClip, mb.style.cssText = "border:0;width:8px;height:0;top:0;left:-9999px;padding:0;margin-top:1px;position:absolute",
		mb.appendChild(fa), j.extend(I, {
			pixelPosition: function() {
				return nb(), pc
			},
			boxSizingReliable: function() {
				return nb(), rc
			},
			pixelMarginRight: function() {
				return nb(), sc
			},
			reliableMarginLeft: function() {
				return nb(), qc
			}
		}));
	!0;
	var qd = /^(none|table(?!-c[ea]).+)/,
		tc = /^--/,
		rd = {
			position: "absolute",
			visibility: "hidden",
			display: "block"
		},
		uc = {
			letterSpacing: "0",
			fontWeight: "400"
		},
		Qb = ["Webkit", "Moz", "ms"],
		Pb = F.createElement("div").style;
	j.extend({
		cssHooks: {
			opacity: {
				get: function(b, c) {
					if (c) {
						var d = Ma(b, "opacity");
						return "" ===
							d ? "1" : d
					}
				}
			}
		},
		cssNumber: {
			animationIterationCount: !0,
			columnCount: !0,
			fillOpacity: !0,
			flexGrow: !0,
			flexShrink: !0,
			fontWeight: !0,
			lineHeight: !0,
			opacity: !0,
			order: !0,
			orphans: !0,
			widows: !0,
			zIndex: !0,
			zoom: !0
		},
		cssProps: {
			"float": "cssFloat"
		},
		style: function(b, c, d, g) {
			if (b && 3 !== b.nodeType && 8 !== b.nodeType && b.style) {
				var e, f, m, n = j.camelCase(c),
					l = tc.test(c),
					r = b.style;
				return l || (c = U(n)), m = j.cssHooks[c] || j.cssHooks[n], void 0 === d ? m && "get" in m && void 0 !== (e = m.get(b, !1, g)) ? e : r[c] : (f = typeof d, "string" === f && (e = Ka.exec(d)) && e[1] &&
					(d = u(b, c, e), f = "number"), null != d && d === d && ("number" === f && (d += e && e[3] || (j.cssNumber[n] ? "" : "px")), I.clearCloneStyle || "" !== d || 0 !== c.indexOf("background") || (r[c] = "inherit"), m && "set" in m && void 0 === (d = m.set(b, d, g)) || (l ? r.setProperty(c, d) : r[c] = d)), void 0)
			}
		},
		css: function(b, c, d, g) {
			var e, f, m, n = j.camelCase(c);
			return tc.test(c) || (c = U(n)), m = j.cssHooks[c] || j.cssHooks[n], m && "get" in m && (e = m.get(b, !0, d)), void 0 === e && (e = Ma(b, c, g)), "normal" === e && c in uc && (e = uc[c]), "" === d || d ? (f = parseFloat(e), !0 === d || isFinite(f) ? f || 0 : e) :
				e
		}
	});
	j.each(["height", "width"], function(b, c) {
		j.cssHooks[c] = {
			get: function(b, d, g) {
				if (d) return !qd.test(j.css(b, "display")) || b.getClientRects().length && b.getBoundingClientRect().width ? Rb(b, c, g) : mc(b, rd, function() {
					return Rb(b, c, g)
				})
			},
			set: function(b, d, g) {
				var e, f = g && Wa(b);
				g = g && W(b, c, g, "border-box" === j.css(b, "boxSizing", !1, f), f);
				return g && (e = Ka.exec(d)) && "px" !== (e[3] || "px") && (b.style[c] = d, d = j.css(b, c)), V(b, d, g)
			}
		}
	});
	j.cssHooks.marginLeft = Ob(I.reliableMarginLeft, function(b, c) {
		if (c) return (parseFloat(Ma(b, "marginLeft")) ||
			b.getBoundingClientRect().left - mc(b, {
				marginLeft: 0
			}, function() {
				return b.getBoundingClientRect().left
			})) + "px"
	});
	j.each({
		margin: "",
		padding: "",
		border: "Width"
	}, function(b, c) {
		j.cssHooks[b + c] = {
			expand: function(d) {
				var g = 0,
					e = {};
				for (d = "string" == typeof d ? d.split(" ") : [d]; 4 > g; g++) e[b + ta[g] + c] = d[g] || d[g - 2] || d[0];
				return e
			}
		};
		Nb.test(b) || (j.cssHooks[b + c].set = V)
	});
	j.fn.extend({
		css: function(b, c) {
			return ka(this, function(b, c, d) {
				var g, e = {},
					f = 0;
				if (Array.isArray(c)) {
					d = Wa(b);
					for (g = c.length; f < g; f++) e[c[f]] = j.css(b, c[f], !1,
						d);
					return e
				}
				return void 0 !== d ? j.style(b, c, d) : j.css(b, c)
			}, b, c, 1 < arguments.length)
		}
	});
	j.Tween = O;
	O.prototype = {
		constructor: O,
		init: function(b, c, d, g, e, f) {
			this.elem = b;
			this.prop = d;
			this.easing = e || j.easing._default;
			this.options = c;
			this.start = this.now = this.cur();
			this.end = g;
			this.unit = f || (j.cssNumber[d] ? "" : "px")
		},
		cur: function() {
			var b = O.propHooks[this.prop];
			return b && b.get ? b.get(this) : O.propHooks._default.get(this)
		},
		run: function(b) {
			var c, d = O.propHooks[this.prop];
			return this.options.duration ? this.pos = c = j.easing[this.easing](b,
				this.options.duration * b, 0, 1, this.options.duration) : this.pos = c = b, this.now = (this.end - this.start) * c + this.start, this.options.step && this.options.step.call(this.elem, this.now, this), d && d.set ? d.set(this) : O.propHooks._default.set(this), this
		}
	};
	O.prototype.init.prototype = O.prototype;
	O.propHooks = {
		_default: {
			get: function(b) {
				var c;
				return 1 !== b.elem.nodeType || null != b.elem[b.prop] && null == b.elem.style[b.prop] ? b.elem[b.prop] : (c = j.css(b.elem, b.prop, ""), c && "auto" !== c ? c : 0)
			},
			set: function(b) {
				j.fx.step[b.prop] ? j.fx.step[b.prop](b) :
					1 !== b.elem.nodeType || null == b.elem.style[j.cssProps[b.prop]] && !j.cssHooks[b.prop] ? b.elem[b.prop] = b.now : j.style(b.elem, b.prop, b.now + b.unit)
			}
		}
	};
	O.propHooks.scrollTop = O.propHooks.scrollLeft = {
		set: function(b) {
			b.elem.nodeType && b.elem.parentNode && (b.elem[b.prop] = b.now)
		}
	};
	j.easing = {
		linear: function(b) {
			return b
		},
		swing: function(b) {
			return 0.5 - Math.cos(b * Math.PI) / 2
		},
		_default: "swing"
	};
	j.fx = O.prototype.init;
	j.fx.step = {};
	var Da, Xa, sd = /^(?:toggle|show|hide)$/,
		td = /queueHooks$/;
	j.Animation = j.extend(da, {
		tweeners: {
			"*": [function(b,
				c) {
				var d = this.createTween(b, c);
				return u(d.elem, b, Ka.exec(c), d), d
			}]
		},
		tweener: function(b, c) {
			j.isFunction(b) ? (c = b, b = ["*"]) : b = b.match(X);
			for (var d, g = 0, e = b.length; g < e; g++) d = b[g], da.tweeners[d] = da.tweeners[d] || [], da.tweeners[d].unshift(c)
		},
		prefilters: [function(b, c, d) {
			var g, e, f, m, n, l, r, q, s = "width" in c || "height" in c,
				p = this,
				u = {},
				y = b.style,
				B = b.nodeType && Ta(b),
				G = E.get(b, "fxshow");
			d.queue || (m = j._queueHooks(b, "fx"), null == m.unqueued && (m.unqueued = 0, n = m.empty.fire, m.empty.fire = function() {
					m.unqueued || n()
				}), m.unqueued++,
				p.always(function() {
					p.always(function() {
						m.unqueued--;
						j.queue(b, "fx").length || m.empty.fire()
					})
				}));
			for (g in c)
				if (e = c[g], sd.test(e)) {
					if (delete c[g], f = f || "toggle" === e, e === (B ? "hide" : "show")) {
						if ("show" !== e || !G || void 0 === G[g]) continue;
						B = !0
					}
					u[g] = G && G[g] || j.style(b, g)
				} if (l = !j.isEmptyObject(c), l || !j.isEmptyObject(u))
				for (g in s && 1 === b.nodeType && (d.overflow = [y.overflow, y.overflowX, y.overflowY], r = G && G.display, null == r && (r = E.get(b, "display")), q = j.css(b, "display"), "none" === q && (r ? q = r : (t([b], !0), r = b.style.display ||
						r, q = j.css(b, "display"), t([b]))), ("inline" === q || "inline-block" === q && null != r) && "none" === j.css(b, "float") && (l || (p.done(function() {
						y.display = r
					}), null == r && (q = y.display, r = "none" === q ? "" : q)), y.display = "inline-block")), d.overflow && (y.overflow = "hidden", p.always(function() {
						y.overflow = d.overflow[0];
						y.overflowX = d.overflow[1];
						y.overflowY = d.overflow[2]
					})), l = !1, u) l || (G ? "hidden" in G && (B = G.hidden) : G = E.access(b, "fxshow", {
					display: r
				}), f && (G.hidden = !B), B && t([b], !0), p.done(function() {
					B || t([b]);
					E.remove(b, "fxshow");
					for (g in u) j.style(b,
						g, u[g])
				})), l = Sb(B ? G[g] : 0, g, p), g in G || (G[g] = l.start, B && (l.end = l.start, l.start = 0))
		}],
		prefilter: function(b, c) {
			c ? da.prefilters.unshift(b) : da.prefilters.push(b)
		}
	});
	j.speed = function(b, c, d) {
		var g = b && "object" == typeof b ? j.extend({}, b) : {
			complete: d || !d && c || j.isFunction(b) && b,
			duration: b,
			easing: d && c || c && !j.isFunction(c) && c
		};
		return j.fx.off ? g.duration = 0 : "number" != typeof g.duration && (g.duration in j.fx.speeds ? g.duration = j.fx.speeds[g.duration] : g.duration = j.fx.speeds._default), null != g.queue && !0 !== g.queue || (g.queue =
			"fx"), g.old = g.complete, g.complete = function() {
			j.isFunction(g.old) && g.old.call(this);
			g.queue && j.dequeue(this, g.queue)
		}, g
	};
	j.fn.extend({
		fadeTo: function(b, c, d, g) {
			return this.filter(Ta).css("opacity", 0).show().end().animate({
				opacity: c
			}, b, d, g)
		},
		animate: function(b, c, d, g) {
			var e = j.isEmptyObject(b),
				f = j.speed(c, d, g);
			c = function() {
				var c = da(this, j.extend({}, b), f);
				(e || E.get(this, "finish")) && c.stop(!0)
			};
			return c.finish = c, e || !1 === f.queue ? this.each(c) : this.queue(f.queue, c)
		},
		stop: function(b, c, d) {
			var g = function(b) {
				var c =
					b.stop;
				delete b.stop;
				c(d)
			};
			return "string" != typeof b && (d = c, c = b, b = void 0), c && !1 !== b && this.queue(b || "fx", []), this.each(function() {
				var c = !0,
					e = null != b && b + "queueHooks",
					f = j.timers,
					m = E.get(this);
				if (e) m[e] && m[e].stop && g(m[e]);
				else
					for (e in m) m[e] && m[e].stop && td.test(e) && g(m[e]);
				for (e = f.length; e--;) f[e].elem !== this || null != b && f[e].queue !== b || (f[e].anim.stop(d), c = !1, f.splice(e, 1));
				!c && d || j.dequeue(this, b)
			})
		},
		finish: function(b) {
			return !1 !== b && (b = b || "fx"), this.each(function() {
				var c, d = E.get(this),
					g = d[b + "queue"];
				c = d[b + "queueHooks"];
				var e = j.timers,
					f = g ? g.length : 0;
				d.finish = !0;
				j.queue(this, b, []);
				c && c.stop && c.stop.call(this, !0);
				for (c = e.length; c--;) e[c].elem === this && e[c].queue === b && (e[c].anim.stop(!0), e.splice(c, 1));
				for (c = 0; c < f; c++) g[c] && g[c].finish && g[c].finish.call(this);
				delete d.finish
			})
		}
	});
	j.each(["toggle", "show", "hide"], function(b, c) {
		var d = j.fn[c];
		j.fn[c] = function(b, g, e) {
			return null == b || "boolean" == typeof b ? d.apply(this, arguments) : this.animate(ca(c, !0), b, g, e)
		}
	});
	j.each({
		slideDown: ca("show"),
		slideUp: ca("hide"),
		slideToggle: ca("toggle"),
		fadeIn: {
			opacity: "show"
		},
		fadeOut: {
			opacity: "hide"
		},
		fadeToggle: {
			opacity: "toggle"
		}
	}, function(b, c) {
		j.fn[b] = function(b, d, g) {
			return this.animate(c, b, d, g)
		}
	});
	j.timers = [];
	j.fx.tick = function() {
		var b, c = 0,
			d = j.timers;
		for (Da = j.now(); c < d.length; c++) b = d[c], b() || d[c] !== b || d.splice(c--, 1);
		d.length || j.fx.stop();
		Da = void 0
	};
	j.fx.timer = function(b) {
		j.timers.push(b);
		j.fx.start()
	};
	j.fx.interval = 13;
	j.fx.start = function() {
		Xa || (Xa = !0, na())
	};
	j.fx.stop = function() {
		Xa = null
	};
	j.fx.speeds = {
		slow: 600,
		fast: 200,
		_default: 400
	};
	j.fn.delay = function(c, d) {
		return c = j.fx ? j.fx.speeds[c] || c : c, d = d || "fx", this.queue(d, function(d, g) {
			var e = b.setTimeout(d, c);
			g.stop = function() {
				b.clearTimeout(e)
			}
		})
	};
	var Ha = F.createElement("input"),
		ud = F.createElement("select").appendChild(F.createElement("option"));
	Ha.type = "checkbox";
	I.checkOn = "" !== Ha.value;
	I.optSelected = ud.selected;
	Ha = F.createElement("input");
	Ha.value = "t";
	Ha.type = "radio";
	I.radioValue = "t" === Ha.value;
	var vc, Qa = j.expr.attrHandle;
	j.fn.extend({
		attr: function(b, c) {
			return ka(this,
				j.attr, b, c, 1 < arguments.length)
		},
		removeAttr: function(b) {
			return this.each(function() {
				j.removeAttr(this, b)
			})
		}
	});
	j.extend({
		attr: function(b, c, d) {
			var g, e, f = b.nodeType;
			if (3 !== f && 8 !== f && 2 !== f) return "undefined" == typeof b.getAttribute ? j.prop(b, c, d) : (1 === f && j.isXMLDoc(b) || (e = j.attrHooks[c.toLowerCase()] || (j.expr.match.bool.test(c) ? vc : void 0)), void 0 !== d ? null === d ? void j.removeAttr(b, c) : e && "set" in e && void 0 !== (g = e.set(b, d, c)) ? g : (b.setAttribute(c, d + ""), d) : e && "get" in e && null !== (g = e.get(b, c)) ? g : (g = j.find.attr(b,
				c), null == g ? void 0 : g))
		},
		attrHooks: {
			type: {
				set: function(b, c) {
					if (!I.radioValue && "radio" === c && f(b, "input")) {
						var d = b.value;
						return b.setAttribute("type", c), d && (b.value = d), c
					}
				}
			}
		},
		removeAttr: function(b, c) {
			var d, g = 0,
				e = c && c.match(X);
			if (e && 1 === b.nodeType)
				for (; d = e[g++];) b.removeAttribute(d)
		}
	});
	vc = {
		set: function(b, c, d) {
			return !1 === c ? j.removeAttr(b, d) : b.setAttribute(d, d), d
		}
	};
	j.each(j.expr.match.bool.source.match(/\w+/g), function(b, c) {
		var d = Qa[c] || j.find.attr;
		Qa[c] = function(b, c, g) {
			var e, f, m = c.toLowerCase();
			return g ||
				(f = Qa[m], Qa[m] = e, e = null != d(b, c, g) ? m : null, Qa[m] = f), e
		}
	});
	var vd = /^(?:input|select|textarea|button)$/i,
		wd = /^(?:a|area)$/i;
	j.fn.extend({
		prop: function(b, c) {
			return ka(this, j.prop, b, c, 1 < arguments.length)
		},
		removeProp: function(b) {
			return this.each(function() {
				delete this[j.propFix[b] || b]
			})
		}
	});
	j.extend({
		prop: function(b, c, d) {
			var g, e, f = b.nodeType;
			if (3 !== f && 8 !== f && 2 !== f) return 1 === f && j.isXMLDoc(b) || (c = j.propFix[c] || c, e = j.propHooks[c]), void 0 !== d ? e && "set" in e && void 0 !== (g = e.set(b, d, c)) ? g : b[c] = d : e && "get" in e && null !==
				(g = e.get(b, c)) ? g : b[c]
		},
		propHooks: {
			tabIndex: {
				get: function(b) {
					var c = j.find.attr(b, "tabindex");
					return c ? parseInt(c, 10) : vd.test(b.nodeName) || wd.test(b.nodeName) && b.href ? 0 : -1
				}
			}
		},
		propFix: {
			"for": "htmlFor",
			"class": "className"
		}
	});
	I.optSelected || (j.propHooks.selected = {
		get: function(b) {
			b = b.parentNode;
			return b && b.parentNode && b.parentNode.selectedIndex, null
		},
		set: function(b) {
			b = b.parentNode;
			b && (b.selectedIndex, b.parentNode && b.parentNode.selectedIndex)
		}
	});
	j.each("tabIndex readOnly maxLength cellSpacing cellPadding rowSpan colSpan useMap frameBorder contentEditable".split(" "),
		function() {
			j.propFix[this.toLowerCase()] = this
		});
	j.fn.extend({
		addClass: function(b) {
			var c, d, g, e, f, m, n = 0;
			if (j.isFunction(b)) return this.each(function(c) {
				j(this).addClass(b.call(this, c, va(this)))
			});
			if ("string" == typeof b && b)
				for (c = b.match(X) || []; d = this[n++];)
					if (e = va(d), g = 1 === d.nodeType && " " + ua(e) + " ") {
						for (m = 0; f = c[m++];) 0 > g.indexOf(" " + f + " ") && (g += f + " ");
						g = ua(g);
						e !== g && d.setAttribute("class", g)
					} return this
		},
		removeClass: function(b) {
			var c, d, g, e, f, m, n = 0;
			if (j.isFunction(b)) return this.each(function(c) {
				j(this).removeClass(b.call(this,
					c, va(this)))
			});
			if (!arguments.length) return this.attr("class", "");
			if ("string" == typeof b && b)
				for (c = b.match(X) || []; d = this[n++];)
					if (e = va(d), g = 1 === d.nodeType && " " + ua(e) + " ") {
						for (m = 0; f = c[m++];)
							for (; - 1 < g.indexOf(" " + f + " ");) g = g.replace(" " + f + " ", " ");
						g = ua(g);
						e !== g && d.setAttribute("class", g)
					} return this
		},
		toggleClass: function(b, c) {
			var d = typeof b;
			return "boolean" == typeof c && "string" === d ? c ? this.addClass(b) : this.removeClass(b) : j.isFunction(b) ? this.each(function(d) {
				j(this).toggleClass(b.call(this, d, va(this), c),
					c)
			}) : this.each(function() {
				var c, g, e, f;
				if ("string" === d) {
					g = 0;
					e = j(this);
					for (f = b.match(X) || []; c = f[g++];) e.hasClass(c) ? e.removeClass(c) : e.addClass(c)
				} else void 0 !== b && "boolean" !== d || (c = va(this), c && E.set(this, "__className__", c), this.setAttribute && this.setAttribute("class", c || !1 === b ? "" : E.get(this, "__className__") || ""))
			})
		},
		hasClass: function(b) {
			var c, d = 0;
			for (b = " " + b + " "; c = this[d++];)
				if (1 === c.nodeType && -1 < (" " + ua(va(c)) + " ").indexOf(b)) return !0;
			return !1
		}
	});
	var xd = /\r/g;
	j.fn.extend({
		val: function(b) {
			var c, d,
				g, e = this[0];
			if (arguments.length) return g = j.isFunction(b), this.each(function(d) {
				var e;
				1 === this.nodeType && (e = g ? b.call(this, d, j(this).val()) : b, null == e ? e = "" : "number" == typeof e ? e += "" : Array.isArray(e) && (e = j.map(e, function(b) {
					return null == b ? "" : b + ""
				})), c = j.valHooks[this.type] || j.valHooks[this.nodeName.toLowerCase()], c && "set" in c && void 0 !== c.set(this, e, "value") || (this.value = e))
			});
			if (e) return c = j.valHooks[e.type] || j.valHooks[e.nodeName.toLowerCase()], c && "get" in c && void 0 !== (d = c.get(e, "value")) ? d : (d = e.value,
				"string" == typeof d ? d.replace(xd, "") : null == d ? "" : d)
		}
	});
	j.extend({
		valHooks: {
			option: {
				get: function(b) {
					var c = j.find.attr(b, "value");
					return null != c ? c : ua(j.text(b))
				}
			},
			select: {
				get: function(b) {
					var c, d, g = b.options,
						e = b.selectedIndex,
						m = "select-one" === b.type,
						n = m ? null : [],
						l = m ? e + 1 : g.length;
					for (d = 0 > e ? l : m ? e : 0; d < l; d++)
						if (c = g[d], (c.selected || d === e) && !c.disabled && (!c.parentNode.disabled || !f(c.parentNode, "optgroup"))) {
							if (b = j(c).val(), m) return b;
							n.push(b)
						} return n
				},
				set: function(b, c) {
					for (var d, g, e = b.options, f = j.makeArray(c),
							m = e.length; m--;) g = e[m], (g.selected = -1 < j.inArray(j.valHooks.option.get(g), f)) && (d = !0);
					return d || (b.selectedIndex = -1), f
				}
			}
		}
	});
	j.each(["radio", "checkbox"], function() {
		j.valHooks[this] = {
			set: function(b, c) {
				if (Array.isArray(c)) return b.checked = -1 < j.inArray(j(b).val(), c)
			}
		};
		I.checkOn || (j.valHooks[this].get = function(b) {
			return null === b.getAttribute("value") ? "on" : b.value
		})
	});
	var wc = /^(?:focusinfocus|focusoutblur)$/;
	j.extend(j.event, {
		trigger: function(c, d, g, e) {
			var f, m, n, l, r, q, s, p = [g || F],
				u = Za.call(c, "type") ? c.type :
				c;
			f = Za.call(c, "namespace") ? c.namespace.split(".") : [];
			if (m = n = g = g || F, 3 !== g.nodeType && 8 !== g.nodeType && !wc.test(u + j.event.triggered) && (-1 < u.indexOf(".") && (f = u.split("."), u = f.shift(), f.sort()), r = 0 > u.indexOf(":") && "on" + u, c = c[j.expando] ? c : new j.Event(u, "object" == typeof c && c), c.isTrigger = e ? 2 : 3, c.namespace = f.join("."), c.rnamespace = c.namespace ? RegExp("(^|\\.)" + f.join("\\.(?:.*\\.|)") + "(\\.|$)") : null, c.result = void 0, c.target || (c.target = g), d = null == d ? [c] : j.makeArray(d, [c]), s = j.event.special[u] || {}, e || !s.trigger ||
					!1 !== s.trigger.apply(g, d))) {
				if (!e && !s.noBubble && !j.isWindow(g)) {
					l = s.delegateType || u;
					for (wc.test(l + u) || (m = m.parentNode); m; m = m.parentNode) p.push(m), n = m;
					n === (g.ownerDocument || F) && p.push(n.defaultView || n.parentWindow || b)
				}
				for (f = 0;
					(m = p[f++]) && !c.isPropagationStopped();) c.type = 1 < f ? l : s.bindType || u, (q = (E.get(m, "events") || {})[c.type] && E.get(m, "handle")) && q.apply(m, d), (q = r && m[r]) && q.apply && ib(m) && (c.result = q.apply(m, d), !1 === c.result && c.preventDefault());
				return c.type = u, e || c.isDefaultPrevented() || s._default &&
					!1 !== s._default.apply(p.pop(), d) || !ib(g) || r && j.isFunction(g[u]) && !j.isWindow(g) && (n = g[r], n && (g[r] = null), j.event.triggered = u, g[u](), j.event.triggered = void 0, n && (g[r] = n)), c.result
			}
		},
		simulate: function(b, c, d) {
			b = j.extend(new j.Event, d, {
				type: b,
				isSimulated: !0
			});
			j.event.trigger(b, null, c)
		}
	});
	j.fn.extend({
		trigger: function(b, c) {
			return this.each(function() {
				j.event.trigger(b, c, this)
			})
		},
		triggerHandler: function(b, c) {
			var d = this[0];
			if (d) return j.event.trigger(b, c, d, !0)
		}
	});
	j.each("blur focus focusin focusout resize scroll click dblclick mousedown mouseup mousemove mouseover mouseout mouseenter mouseleave change select submit keydown keypress keyup contextmenu".split(" "),
		function(b, c) {
			j.fn[c] = function(b, d) {
				return 0 < arguments.length ? this.on(c, null, b, d) : this.trigger(c)
			}
		});
	j.fn.extend({
		hover: function(b, c) {
			return this.mouseenter(b).mouseleave(c || b)
		}
	});
	I.focusin = "onfocusin" in b;
	I.focusin || j.each({
		focus: "focusin",
		blur: "focusout"
	}, function(b, c) {
		var d = function(b) {
			j.event.simulate(c, b.target, j.event.fix(b))
		};
		j.event.special[c] = {
			setup: function() {
				var g = this.ownerDocument || this,
					e = E.access(g, c);
				e || g.addEventListener(b, d, !0);
				E.access(g, c, (e || 0) + 1)
			},
			teardown: function() {
				var g = this.ownerDocument ||
					this,
					e = E.access(g, c) - 1;
				e ? E.access(g, c, e) : (g.removeEventListener(b, d, !0), E.remove(g, c))
			}
		}
	});
	var Ra = b.location,
		xc = j.now(),
		Fb = /\?/;
	j.parseXML = function(c) {
		var d;
		if (!c || "string" != typeof c) return null;
		try {
			d = (new b.DOMParser).parseFromString(c, "text/xml")
		} catch (g) {
			d = void 0
		}
		return d && !d.getElementsByTagName("parsererror").length || j.error("Invalid XML: " + c), d
	};
	var Mc = /\[\]$/,
		yc = /\r?\n/g,
		yd = /^(?:submit|button|image|reset|file)$/i,
		zd = /^(?:input|select|textarea|keygen)/i;
	j.param = function(b, c) {
		var d, g = [],
			e = function(b,
				c) {
				var d = j.isFunction(c) ? c() : c;
				g[g.length] = encodeURIComponent(b) + "=" + encodeURIComponent(null == d ? "" : d)
			};
		if (Array.isArray(b) || b.jquery && !j.isPlainObject(b)) j.each(b, function() {
			e(this.name, this.value)
		});
		else
			for (d in b) qb(d, b[d], c, e);
		return g.join("&")
	};
	j.fn.extend({
		serialize: function() {
			return j.param(this.serializeArray())
		},
		serializeArray: function() {
			return this.map(function() {
				var b = j.prop(this, "elements");
				return b ? j.makeArray(b) : this
			}).filter(function() {
				var b = this.type;
				return this.name && !j(this).is(":disabled") &&
					zd.test(this.nodeName) && !yd.test(b) && (this.checked || !nc.test(b))
			}).map(function(b, c) {
				var d = j(this).val();
				return null == d ? null : Array.isArray(d) ? j.map(d, function(b) {
					return {
						name: c.name,
						value: b.replace(yc, "\r\n")
					}
				}) : {
					name: c.name,
					value: d.replace(yc, "\r\n")
				}
			}).get()
		}
	});
	var Ad = /%20/g,
		Bd = /#.*$/,
		Cd = /([?&])_=[^&]*/,
		Dd = /^(.*?):[ \t]*([^\r\n]*)$/gm,
		Ed = /^(?:GET|HEAD)$/,
		Fd = /^\/\//,
		zc = {},
		rb = {},
		Ac = "*/".concat("*"),
		Gb = F.createElement("a");
	Gb.href = Ra.href;
	j.extend({
		active: 0,
		lastModified: {},
		etag: {},
		ajaxSettings: {
			url: Ra.href,
			type: "GET",
			isLocal: /^(?:about|app|app-storage|.+-extension|file|res|widget):$/.test(Ra.protocol),
			global: !0,
			processData: !0,
			async: !0,
			contentType: "application/x-www-form-urlencoded; charset=UTF-8",
			accepts: {
				"*": Ac,
				text: "text/plain",
				html: "text/html",
				xml: "application/xml, text/xml",
				json: "application/json, text/javascript"
			},
			contents: {
				xml: /\bxml\b/,
				html: /\bhtml/,
				json: /\bjson\b/
			},
			responseFields: {
				xml: "responseXML",
				text: "responseText",
				json: "responseJSON"
			},
			converters: {
				"* text": String,
				"text html": !0,
				"text json": JSON.parse,
				"text xml": j.parseXML
			},
			flatOptions: {
				url: !0,
				context: !0
			}
		},
		ajaxSetup: function(b, c) {
			return c ? sb(sb(b, j.ajaxSettings), c) : sb(j.ajaxSettings, b)
		},
		ajaxPrefilter: Tb(zc),
		ajaxTransport: Tb(rb),
		ajax: function(c, d) {
			function g(c, d, n, l) {
				var p, u, x, z, M = d;
				if (!q) {
					q = !0;
					r && b.clearTimeout(r);
					e = void 0;
					m = l || "";
					K.readyState = 0 < c ? 4 : 0;
					l = 200 <= c && 300 > c || 304 === c;
					if (n) {
						x = t;
						for (var Ca = K, A, D, F, C, ca = x.contents, I = x.dataTypes;
							"*" === I[0];) I.shift(), void 0 === A && (A = x.mimeType || Ca.getResponseHeader("Content-Type"));
						if (A)
							for (D in ca)
								if (ca[D] &&
									ca[D].test(A)) {
									I.unshift(D);
									break
								} if (I[0] in n) F = I[0];
						else {
							for (D in n) {
								if (!I[0] || x.converters[D + " " + I[0]]) {
									F = D;
									break
								}
								C || (C = D)
							}
							F = F || C
						}
						x = n = F ? (F !== I[0] && I.unshift(F), n[F]) : void 0
					}
					var J;
					a: {
						n = t;A = x;D = K;F = l;
						var N, L, la;x = {};Ca = n.dataTypes.slice();
						if (Ca[1])
							for (N in n.converters) x[N.toLowerCase()] = n.converters[N];
						for (C = Ca.shift(); C;)
							if (n.responseFields[C] && (D[n.responseFields[C]] = A), !la && F && n.dataFilter && (A = n.dataFilter(A, n.dataType)), la = C, C = Ca.shift())
								if ("*" === C) C = la;
								else if ("*" !== la && la !== C) {
							if (N = x[la + " " +
									C] || x["* " + C], !N)
								for (J in x)
									if (L = J.split(" "), L[1] === C && (N = x[la + " " + L[0]] || x["* " + L[0]])) {
										!0 === N ? N = x[J] : !0 !== x[J] && (C = L[0], Ca.unshift(L[1]));
										break
									} if (!0 !== N)
								if (N && n["throws"]) A = N(A);
								else try {
									A = N(A)
								} catch (O) {
									J = {
										state: "parsererror",
										error: N ? O : "No conversion from " + la + " to " + C
									};
									break a
								}
						}
						J = {
							state: "success",
							data: A
						}
					}
					x = J;
					l ? (t.ifModified && (z = K.getResponseHeader("Last-Modified"), z && (j.lastModified[f] = z), z = K.getResponseHeader("etag"), z && (j.etag[f] = z)), 204 === c || "HEAD" === t.type ? M = "nocontent" : 304 === c ? M = "notmodified" :
						(M = x.state, p = x.data, u = x.error, l = !u)) : (u = M, !c && M || (M = "error", 0 > c && (c = 0)));
					K.status = c;
					K.statusText = (d || M) + "";
					l ? G.resolveWith(y, [p, M, K]) : G.rejectWith(y, [K, M, u]);
					K.statusCode(H);
					H = void 0;
					s && B.trigger(l ? "ajaxSuccess" : "ajaxError", [K, t, l ? p : u]);
					E.fireWith(y, [K, M]);
					s && (B.trigger("ajaxComplete", [K, t]), --j.active || j.event.trigger("ajaxStop"))
				}
			}
			"object" == typeof c && (d = c, c = void 0);
			d = d || {};
			var e, f, m, n, r, l, q, s, p, u, t = j.ajaxSetup({}, d),
				y = t.context || t,
				B = t.context && (y.nodeType || y.jquery) ? j(y) : j.event,
				G = j.Deferred(),
				E = j.Callbacks("once memory"),
				H = t.statusCode || {},
				A = {},
				D = {},
				C = "canceled",
				K = {
					readyState: 0,
					getResponseHeader: function(b) {
						var c;
						if (q) {
							if (!n)
								for (n = {}; c = Dd.exec(m);) n[c[1].toLowerCase()] = c[2];
							c = n[b.toLowerCase()]
						}
						return null == c ? null : c
					},
					getAllResponseHeaders: function() {
						return q ? m : null
					},
					setRequestHeader: function(b, c) {
						return null == q && (b = D[b.toLowerCase()] = D[b.toLowerCase()] || b, A[b] = c), this
					},
					overrideMimeType: function(b) {
						return null == q && (t.mimeType = b), this
					},
					statusCode: function(b) {
						var c;
						if (b)
							if (q) K.always(b[K.status]);
							else
								for (c in b) H[c] = [H[c], b[c]];
						return this
					},
					abort: function(b) {
						b = b || C;
						return e && e.abort(b), g(0, b), this
					}
				};
			if (G.promise(K), t.url = ((c || t.url || Ra.href) + "").replace(Fd, Ra.protocol + "//"), t.type = d.method || d.type || t.method || t.type, t.dataTypes = (t.dataType || "*").toLowerCase().match(X) || [""], null == t.crossDomain) {
				l = F.createElement("a");
				try {
					l.href = t.url, l.href = l.href, t.crossDomain = Gb.protocol + "//" + Gb.host != l.protocol + "//" + l.host
				} catch (I) {
					t.crossDomain = !0
				}
			}
			if (t.data && t.processData && "string" != typeof t.data && (t.data =
					j.param(t.data, t.traditional)), Ub(zc, t, d, K), q) return K;
			(s = j.event && t.global) && 0 === j.active++ && j.event.trigger("ajaxStart");
			t.type = t.type.toUpperCase();
			t.hasContent = !Ed.test(t.type);
			f = t.url.replace(Bd, "");
			t.hasContent ? t.data && t.processData && 0 === (t.contentType || "").indexOf("application/x-www-form-urlencoded") && (t.data = t.data.replace(Ad, "+")) : (u = t.url.slice(f.length), t.data && (f += (Fb.test(f) ? "&" : "?") + t.data, delete t.data), !1 === t.cache && (f = f.replace(Cd, "$1"), u = (Fb.test(f) ? "&" : "?") + "_=" + xc++ + u), t.url =
				f + u);
			t.ifModified && (j.lastModified[f] && K.setRequestHeader("If-Modified-Since", j.lastModified[f]), j.etag[f] && K.setRequestHeader("If-None-Match", j.etag[f]));
			(t.data && t.hasContent && !1 !== t.contentType || d.contentType) && K.setRequestHeader("Content-Type", t.contentType);
			K.setRequestHeader("Accept", t.dataTypes[0] && t.accepts[t.dataTypes[0]] ? t.accepts[t.dataTypes[0]] + ("*" !== t.dataTypes[0] ? ", " + Ac + "; q=0.01" : "") : t.accepts["*"]);
			for (p in t.headers) K.setRequestHeader(p, t.headers[p]);
			if (t.beforeSend && (!1 === t.beforeSend.call(y,
					K, t) || q)) return K.abort();
			if (C = "abort", E.add(t.complete), K.done(t.success), K.fail(t.error), e = Ub(rb, t, d, K)) {
				if (K.readyState = 1, s && B.trigger("ajaxSend", [K, t]), q) return K;
				t.async && 0 < t.timeout && (r = b.setTimeout(function() {
					K.abort("timeout")
				}, t.timeout));
				try {
					q = !1, e.send(A, g)
				} catch (ca) {
					if (q) throw ca;
					g(-1, ca)
				}
			} else g(-1, "No Transport");
			return K
		},
		getJSON: function(b, c, d) {
			return j.get(b, c, d, "json")
		},
		getScript: function(b, c) {
			return j.get(b, void 0, c, "script")
		}
	});
	j.each(["get", "post"], function(b, c) {
		j[c] = function(b,
			d, g, e) {
			return j.isFunction(d) && (e = e || g, g = d, d = void 0), j.ajax(j.extend({
				url: b,
				type: c,
				dataType: e,
				data: d,
				success: g
			}, j.isPlainObject(b) && b))
		}
	});
	j._evalUrl = function(b) {
		return j.ajax({
			url: b,
			type: "GET",
			dataType: "script",
			cache: !0,
			async: !1,
			global: !1,
			"throws": !0
		})
	};
	j.fn.extend({
		wrapAll: function(b) {
			var c;
			return this[0] && (j.isFunction(b) && (b = b.call(this[0])), c = j(b, this[0].ownerDocument).eq(0).clone(!0), this[0].parentNode && c.insertBefore(this[0]), c.map(function() {
				for (var b = this; b.firstElementChild;) b = b.firstElementChild;
				return b
			}).append(this)), this
		},
		wrapInner: function(b) {
			return j.isFunction(b) ? this.each(function(c) {
				j(this).wrapInner(b.call(this, c))
			}) : this.each(function() {
				var c = j(this),
					d = c.contents();
				d.length ? d.wrapAll(b) : c.append(b)
			})
		},
		wrap: function(b) {
			var c = j.isFunction(b);
			return this.each(function(d) {
				j(this).wrapAll(c ? b.call(this, d) : b)
			})
		},
		unwrap: function(b) {
			return this.parent(b).not("body").each(function() {
				j(this).replaceWith(this.childNodes)
			}), this
		}
	});
	j.expr.pseudos.hidden = function(b) {
		return !j.expr.pseudos.visible(b)
	};
	j.expr.pseudos.visible = function(b) {
		return !(!b.offsetWidth && !b.offsetHeight && !b.getClientRects().length)
	};
	j.ajaxSettings.xhr = function() {
		try {
			return new b.XMLHttpRequest
		} catch (c) {}
	};
	var Gd = {
			"0": 200,
			1223: 204
		},
		Sa = j.ajaxSettings.xhr();
	I.cors = !!Sa && "withCredentials" in Sa;
	I.ajax = Sa = !!Sa;
	j.ajaxTransport(function(c) {
		var d, g;
		if (I.cors || Sa && !c.crossDomain) return {
			send: function(e, f) {
				var m, n = c.xhr();
				if (n.open(c.type, c.url, c.async, c.username, c.password), c.xhrFields)
					for (m in c.xhrFields) n[m] = c.xhrFields[m];
				c.mimeType &&
					n.overrideMimeType && n.overrideMimeType(c.mimeType);
				c.crossDomain || e["X-Requested-With"] || (e["X-Requested-With"] = "XMLHttpRequest");
				for (m in e) n.setRequestHeader(m, e[m]);
				d = function(b) {
					return function() {
						d && (d = g = n.onload = n.onerror = n.onabort = n.onreadystatechange = null, "abort" === b ? n.abort() : "error" === b ? "number" != typeof n.status ? f(0, "error") : f(n.status, n.statusText) : f(Gd[n.status] || n.status, n.statusText, "text" !== (n.responseType || "text") || "string" != typeof n.responseText ? {
								binary: n.response
							} : {
								text: n.responseText
							},
							n.getAllResponseHeaders()))
					}
				};
				n.onload = d();
				g = n.onerror = d("error");
				void 0 !== n.onabort ? n.onabort = g : n.onreadystatechange = function() {
					4 === n.readyState && b.setTimeout(function() {
						d && g()
					})
				};
				d = d("abort");
				try {
					n.send(c.hasContent && c.data || null)
				} catch (j) {
					if (d) throw j;
				}
			},
			abort: function() {
				d && d()
			}
		}
	});
	j.ajaxPrefilter(function(b) {
		b.crossDomain && (b.contents.script = !1)
	});
	j.ajaxSetup({
		accepts: {
			script: "text/javascript, application/javascript, application/ecmascript, application/x-ecmascript"
		},
		contents: {
			script: /\b(?:java|ecma)script\b/
		},
		converters: {
			"text script": function(b) {
				return j.globalEval(b), b
			}
		}
	});
	j.ajaxPrefilter("script", function(b) {
		void 0 === b.cache && (b.cache = !1);
		b.crossDomain && (b.type = "GET")
	});
	j.ajaxTransport("script", function(b) {
		if (b.crossDomain) {
			var c, d;
			return {
				send: function(g, e) {
					c = j("<script>").prop({
						charset: b.scriptCharset,
						src: b.url
					}).on("load error", d = function(b) {
						c.remove();
						d = null;
						b && e("error" === b.type ? 404 : 200, b.type)
					});
					F.head.appendChild(c[0])
				},
				abort: function() {
					d && d()
				}
			}
		}
	});
	var Bc = [],
		Hb = /(=)\?(?=&|$)|\?\?/;
	j.ajaxSetup({
		jsonp: "callback",
		jsonpCallback: function() {
			var b = Bc.pop() || j.expando + "_" + xc++;
			return this[b] = !0, b
		}
	});
	j.ajaxPrefilter("json jsonp", function(c, d, g) {
		var e, f, m, n = !1 !== c.jsonp && (Hb.test(c.url) ? "url" : "string" == typeof c.data && 0 === (c.contentType || "").indexOf("application/x-www-form-urlencoded") && Hb.test(c.data) && "data");
		if (n || "jsonp" === c.dataTypes[0]) return e = c.jsonpCallback = j.isFunction(c.jsonpCallback) ? c.jsonpCallback() : c.jsonpCallback, n ? c[n] = c[n].replace(Hb, "$1" + e) : !1 !== c.jsonp && (c.url += (Fb.test(c.url) ? "&" : "?") + c.jsonp +
			"=" + e), c.converters["script json"] = function() {
			return m || j.error(e + " was not called"), m[0]
		}, c.dataTypes[0] = "json", f = b[e], b[e] = function() {
			m = arguments
		}, g.always(function() {
			void 0 === f ? j(b).removeProp(e) : b[e] = f;
			c[e] && (c.jsonpCallback = d.jsonpCallback, Bc.push(e));
			m && j.isFunction(f) && f(m[0]);
			m = f = void 0
		}), "script"
	});
	var Hd = I,
		Cc, Dc = F.implementation.createHTMLDocument("").body;
	Cc = (Dc.innerHTML = "<form></form><form></form>", 2 === Dc.childNodes.length);
	Hd.createHTMLDocument = Cc;
	j.parseHTML = function(b, c, d) {
		if ("string" !=
			typeof b) return [];
		"boolean" == typeof c && (d = c, c = !1);
		var g, e, f;
		return c || (I.createHTMLDocument ? (c = F.implementation.createHTMLDocument(""), g = c.createElement("base"), g.href = F.location.href, c.head.appendChild(g)) : c = F), e = jc.exec(b), f = !d && [], e ? [c.createElement(e[1])] : (e = G([b], c, f), f && f.length && j(f).remove(), j.merge([], e.childNodes))
	};
	j.fn.load = function(b, c, d) {
		var g, e, f, m = this,
			n = b.indexOf(" ");
		return -1 < n && (g = ua(b.slice(n)), b = b.slice(0, n)), j.isFunction(c) ? (d = c, c = void 0) : c && "object" == typeof c && (e = "POST"), 0 <
			m.length && j.ajax({
				url: b,
				type: e || "GET",
				dataType: "html",
				data: c
			}).done(function(b) {
				f = arguments;
				m.html(g ? j("<div>").append(j.parseHTML(b)).find(g) : b)
			}).always(d && function(b, c) {
				m.each(function() {
					d.apply(this, f || [b.responseText, c, b])
				})
			}), this
	};
	j.each("ajaxStart ajaxStop ajaxComplete ajaxError ajaxSuccess ajaxSend".split(" "), function(b, c) {
		j.fn[c] = function(b) {
			return this.on(c, b)
		}
	});
	j.expr.pseudos.animated = function(b) {
		return j.grep(j.timers, function(c) {
			return b === c.elem
		}).length
	};
	j.offset = {
		setOffset: function(b,
			c, d) {
			var g, e, f, m, n, l, r = j.css(b, "position"),
				q = j(b),
				s = {};
			"static" === r && (b.style.position = "relative");
			n = q.offset();
			f = j.css(b, "top");
			l = j.css(b, "left");
			("absolute" === r || "fixed" === r) && -1 < (f + l).indexOf("auto") ? (g = q.position(), m = g.top, e = g.left) : (m = parseFloat(f) || 0, e = parseFloat(l) || 0);
			j.isFunction(c) && (c = c.call(b, d, j.extend({}, n)));
			null != c.top && (s.top = c.top - n.top + m);
			null != c.left && (s.left = c.left - n.left + e);
			"using" in c ? c.using.call(b, s) : q.css(s)
		}
	};
	j.fn.extend({
		offset: function(b) {
			if (arguments.length) return void 0 ===
				b ? this : this.each(function(c) {
					j.offset.setOffset(this, b, c)
				});
			var c, d, g, e, f = this[0];
			if (f) return f.getClientRects().length ? (g = f.getBoundingClientRect(), c = f.ownerDocument, d = c.documentElement, e = c.defaultView, {
				top: g.top + e.pageYOffset - d.clientTop,
				left: g.left + e.pageXOffset - d.clientLeft
			}) : {
				top: 0,
				left: 0
			}
		},
		position: function() {
			if (this[0]) {
				var b, c, d = this[0],
					g = {
						top: 0,
						left: 0
					};
				return "fixed" === j.css(d, "position") ? c = d.getBoundingClientRect() : (b = this.offsetParent(), c = this.offset(), f(b[0], "html") || (g = b.offset()), g = {
					top: g.top +
						j.css(b[0], "borderTopWidth", !0),
					left: g.left + j.css(b[0], "borderLeftWidth", !0)
				}), {
					top: c.top - g.top - j.css(d, "marginTop", !0),
					left: c.left - g.left - j.css(d, "marginLeft", !0)
				}
			}
		},
		offsetParent: function() {
			return this.map(function() {
				for (var b = this.offsetParent; b && "static" === j.css(b, "position");) b = b.offsetParent;
				return b || lb
			})
		}
	});
	j.each({
		scrollLeft: "pageXOffset",
		scrollTop: "pageYOffset"
	}, function(b, c) {
		var d = "pageYOffset" === c;
		j.fn[b] = function(g) {
			return ka(this, function(b, g, e) {
				var f;
				return j.isWindow(b) ? f = b : 9 === b.nodeType &&
					(f = b.defaultView), void 0 === e ? f ? f[c] : b[g] : void(f ? f.scrollTo(d ? f.pageXOffset : e, d ? e : f.pageYOffset) : b[g] = e)
			}, b, g, arguments.length)
		}
	});
	j.each(["top", "left"], function(b, c) {
		j.cssHooks[c] = Ob(I.pixelPosition, function(b, d) {
			if (d) return d = Ma(b, c), pb.test(d) ? j(b).position()[c] + "px" : d
		})
	});
	j.each({
		Height: "height",
		Width: "width"
	}, function(b, c) {
		j.each({
			padding: "inner" + b,
			content: c,
			"": "outer" + b
		}, function(d, g) {
			j.fn[g] = function(e, f) {
				var m = arguments.length && (d || "boolean" != typeof e),
					n = d || (!0 === e || !0 === f ? "margin" : "border");
				return ka(this, function(c, d, e) {
					var f;
					return j.isWindow(c) ? 0 === g.indexOf("outer") ? c["inner" + b] : c.document.documentElement["client" + b] : 9 === c.nodeType ? (f = c.documentElement, Math.max(c.body["scroll" + b], f["scroll" + b], c.body["offset" + b], f["offset" + b], f["client" + b])) : void 0 === e ? j.css(c, d, n) : j.style(c, d, e, n)
				}, c, m ? e : void 0, m)
			}
		})
	});
	j.fn.extend({
		bind: function(b, c, d) {
			return this.on(b, null, c, d)
		},
		unbind: function(b, c) {
			return this.off(b, null, c)
		},
		delegate: function(b, c, d, g) {
			return this.on(c, b, d, g)
		},
		undelegate: function(b,
			c, d) {
			return 1 === arguments.length ? this.off(b, "**") : this.off(c, b || "**", d)
		}
	});
	j.holdReady = function(b) {
		b ? j.readyWait++ : j.ready(!0)
	};
	j.isArray = Array.isArray;
	j.parseJSON = JSON.parse;
	j.nodeName = f;
	"function" == typeof define && define.amd && define("jquery", [], function() {
		return j
	});
	var Id = b.jQuery,
		Jd = b.$;
	return j.noConflict = function(c) {
		return b.$ === j && (b.$ = Jd), c && b.jQuery === j && (b.jQuery = Id), j
	}, c || (b.jQuery = b.$ = j), j
});

function getInternetExplorerVersion() {
	var b = -1;
	"Microsoft Internet Explorer" == navigator.appName && null != /MSIE ([0-9]{1,}[.0-9]{0,})/.exec(navigator.userAgent) && (b = parseFloat(RegExp.$1));
	return b
}
var ie = getInternetExplorerVersion();

function getQueryVariable(b) {
	for (var c = window.location.search.substring(1).split("&"), d = 0; d < c.length; d++) {
		var e = c[d].split("=");
		if (decodeURIComponent(e[0]) == b) return decodeURIComponent(e[1])
	}
}
this.jukebox = {};
jukebox.Player = function(b, c) {
	this.id = ++jukebox.__jukeboxId;
	this.origin = c || null;
	this.settings = {};
	for (var d in this.defaults) this.settings[d] = this.defaults[d];
	if ("[object Object]" === Object.prototype.toString.call(b))
		for (var e in b) this.settings[e] = b[e];
	"[object Function]" === Object.prototype.toString.call(jukebox.Manager) && (jukebox.Manager = new jukebox.Manager);
	this.resource = this.isPlaying = null;
	this.resource = "[object Object]" === Object.prototype.toString.call(jukebox.Manager) ? jukebox.Manager.getPlayableResource(this.settings.resources) :
		this.settings.resources[0] || null;
	if (null === this.resource) throw "Your browser can't playback the given resources - or you have missed to include jukebox.Manager";
	this.__init();
	return this
};
jukebox.__jukeboxId = 0;
jukebox.Player.prototype = {
	defaults: {
		resources: [],
		autoplay: !1,
		spritemap: {},
		flashMediaElement: "./swf/FlashMediaElement.swf",
		timeout: 1E3
	},
	__addToManager: function() {
		!0 !== this.__wasAddedToManager && (jukebox.Manager.add(this), this.__wasAddedToManager = !0)
	},
	__init: function() {
		var b = this,
			c = this.settings,
			d = {},
			e;
		jukebox.Manager && void 0 !== jukebox.Manager.features && (d = jukebox.Manager.features);
		if (!0 === d.html5audio) {
			this.context = new Audio;
			this.context.src = this.resource;
			if (null === this.origin) {
				var f = function(c) {
					b.__addToManager(c)
				};
				this.context.addEventListener("canplaythrough", f, !0);
				window.setTimeout(function() {
					b.context.removeEventListener("canplaythrough", f, !0);
					f("timeout")
				}, c.timeout)
			}
			this.context.autobuffer = !0;
			this.context.preload = !0;
			for (e in this.HTML5API) this[e] = this.HTML5API[e];
			1 < d.channels ? !0 === c.autoplay ? this.context.autoplay = !0 : void 0 !== c.spritemap[c.autoplay] && this.play(c.autoplay) : 1 === d.channels && void 0 !== c.spritemap[c.autoplay] && (this.backgroundMusic = c.spritemap[c.autoplay], this.backgroundMusic.started = Date.now ?
				Date.now() : +new Date, this.play(c.autoplay));
			1 == d.channels && !0 !== c.canPlayBackground && (window.addEventListener("pagehide", function() {
				null !== b.isPlaying && (b.pause(), b.__wasAutoPaused = !0)
			}), window.addEventListener("pageshow", function() {
				b.__wasAutoPaused && (b.resume(), delete b._wasAutoPaused)
			}))
		} else if (!0 === d.flashaudio) {
			for (e in this.FLASHAPI) this[e] = this.FLASHAPI[e];
			d = ["id=jukebox-flashstream-" + this.id, "autoplay=" + c.autoplay, "file=" + window.encodeURIComponent(this.resource)];
			this.__initFlashContext(d);
			!0 === c.autoplay ? this.play(0) : c.spritemap[c.autoplay] && this.play(c.autoplay)
		} else throw "Your Browser does not support Flash Audio or HTML5 Audio.";
	},
	__initFlashContext: function(b) {
		var c, d = this.settings.flashMediaElement,
			e, f = {
				flashvars: b.join("&"),
				quality: "high",
				bgcolor: "#000000",
				wmode: "transparent",
				allowscriptaccess: "always",
				allowfullscreen: "true"
			};
		if (navigator.userAgent.match(/MSIE/)) {
			c = document.createElement("div");
			document.getElementsByTagName("body")[0].appendChild(c);
			var l = document.createElement("object");
			l.id = "jukebox-flashstream-" + this.id;
			l.setAttribute("type", "application/x-shockwave-flash");
			l.setAttribute("classid", "clsid:d27cdb6e-ae6d-11cf-96b8-444553540000");
			l.setAttribute("width", "0");
			l.setAttribute("height", "0");
			f.movie = d + "?x=" + (Date.now ? Date.now() : +new Date);
			f.flashvars = b.join("&amp;");
			for (e in f) b = document.createElement("param"), b.setAttribute("name", e), b.setAttribute("value", f[e]), l.appendChild(b);
			c.outerHTML = l.outerHTML;
			this.context = document.getElementById("jukebox-flashstream-" + this.id)
		} else {
			c =
				document.createElement("embed");
			c.id = "jukebox-flashstream-" + this.id;
			c.setAttribute("type", "application/x-shockwave-flash");
			c.setAttribute("width", "100");
			c.setAttribute("height", "100");
			f.play = !1;
			f.loop = !1;
			f.src = d + "?x=" + (Date.now ? Date.now() : +new Date);
			for (e in f) c.setAttribute(e, f[e]);
			document.getElementsByTagName("body")[0].appendChild(c);
			this.context = c
		}
	},
	backgroundHackForiOS: function() {
		if (void 0 !== this.backgroundMusic) {
			var b = Date.now ? Date.now() : +new Date;
			void 0 === this.backgroundMusic.started ? (this.backgroundMusic.started =
				b, this.setCurrentTime(this.backgroundMusic.start)) : (this.backgroundMusic.lastPointer = (b - this.backgroundMusic.started) / 1E3 % (this.backgroundMusic.end - this.backgroundMusic.start) + this.backgroundMusic.start, this.play(this.backgroundMusic.lastPointer))
		}
	},
	play: function(b, c) {
		if (null !== this.isPlaying && !0 !== c) void 0 !== jukebox.Manager && jukebox.Manager.addToQueue(b, this.id);
		else {
			var d = this.settings.spritemap,
				e;
			if (void 0 !== d[b]) e = d[b].start;
			else if ("number" === typeof b) {
				e = b;
				for (var f in d)
					if (e >= d[f].start && e <=
						d[f].end) {
						b = f;
						break
					}
			}
			void 0 !== e && "[object Object]" === Object.prototype.toString.call(d[b]) && (this.isPlaying = this.settings.spritemap[b], this.context.play && this.context.play(), this.wasReady = this.setCurrentTime(e))
		}
	},
	stop: function() {
		this.__lastPosition = 0;
		this.isPlaying = null;
		this.backgroundMusic ? this.backgroundHackForiOS() : this.context.pause();
		return !0
	},
	pause: function() {
		this.isPlaying = null;
		this.__lastPosition = this.getCurrentTime();
		this.context.pause();
		return this.__lastPosition
	},
	resume: function(b) {
		b = "number" ===
			typeof b ? b : this.__lastPosition;
		if (null !== b) return this.play(b), this.__lastPosition = null, !0;
		this.context.play();
		return !1
	},
	HTML5API: {
		getVolume: function() {
			return this.context.volume || 1
		},
		setVolume: function(b) {
			this.context.volume = b;
			return 1E-4 > Math.abs(this.context.volume - b) ? !0 : !1
		},
		getCurrentTime: function() {
			return this.context.currentTime || 0
		},
		setCurrentTime: function(b) {
			try {
				return this.context.currentTime = b, !0
			} catch (c) {
				return !1
			}
		}
	},
	FLASHAPI: {
		getVolume: function() {
			return this.context && "function" === typeof this.context.getVolume ?
				this.context.getVolume() : 1
		},
		setVolume: function(b) {
			return this.context && "function" === typeof this.context.setVolume ? (this.context.setVolume(b), !0) : !1
		},
		getCurrentTime: function() {
			return this.context && "function" === typeof this.context.getCurrentTime ? this.context.getCurrentTime() : 0
		},
		setCurrentTime: function(b) {
			return this.context && "function" === typeof this.context.setCurrentTime ? this.context.setCurrentTime(b) : !1
		}
	}
};
if (void 0 === this.jukebox) throw "jukebox.Manager requires jukebox.Player (Player.js) to run properly.";
jukebox.Manager = function(b) {
	this.features = {};
	this.codecs = {};
	this.__players = {};
	this.__playersLength = 0;
	this.__clones = {};
	this.__queue = [];
	this.settings = {};
	for (var c in this.defaults) this.settings[c] = this.defaults[c];
	if ("[object Object]" === Object.prototype.toString.call(b))
		for (var d in b) this.settings[d] = b[d];
	this.__detectFeatures();
	jukebox.Manager.__initialized = !1 === this.settings.useGameLoop ? window.setInterval(function() {
		jukebox.Manager.loop()
	}, 20) : !0
};
jukebox.Manager.prototype = {
	defaults: {
		useFlash: !1,
		useGameLoop: !1
	},
	__detectFeatures: function() {
		var b = window.Audio && new Audio;
		if (b && b.canPlayType && !1 === this.settings.useFlash) {
			for (var c = [{
							e: "3gp",
							m: ["audio/3gpp", "audio/amr"]
						}, {
							e: "aac",
							m: ["audio/aac", "audio/aacp"]
						}, {
							e: "amr",
							m: ["audio/amr", "audio/3gpp"]
						}, {
							e: "caf",
							m: ["audio/IMA-ADPCM", "audio/x-adpcm", 'audio/x-aiff; codecs="IMA-ADPCM, ADPCM"']
						}, {
							e: "m4a",
							m: 'audio/mp4{audio/mp4; codecs="mp4a.40.2,avc1.42E01E"{audio/mpeg4{audio/mpeg4-generic{audio/mp4a-latm{audio/MP4A-LATM{audio/x-m4a'.split("{")
						},
						{
							e: "mp3",
							m: ["audio/mp3", "audio/mpeg", 'audio/mpeg; codecs="mp3"', "audio/MPA", "audio/mpa-robust"]
						}, {
							e: "mpga",
							m: ["audio/MPA", "audio/mpa-robust", "audio/mpeg", "video/mpeg"]
						}, {
							e: "mp4",
							m: ["audio/mp4", "video/mp4"]
						}, {
							e: "ogg",
							m: ["application/ogg", "audio/ogg", 'audio/ogg; codecs="theora, vorbis"', "video/ogg", 'video/ogg; codecs="theora, vorbis"']
						}, {
							e: "wav",
							m: ["audio/wave", "audio/wav", 'audio/wav; codecs="1"', "audio/x-wav", "audio/x-pn-wav"]
						}, {
							e: "webm",
							m: ["audio/webm", 'audio/webm; codecs="vorbis"', "video/webm"]
						}
					],
					d, e, f = 0, l = c.length; f < l; f++)
				if (e = c[f].e, c[f].m.length && "object" === typeof c[f].m)
					for (var p = 0, q = c[f].m.length; p < q; p++)
						if (d = c[f].m[p], "" !== b.canPlayType(d)) {
							this.codecs[e] = d;
							break
						} else this.codecs[e] || (this.codecs[e] = !1);
			this.features.html5audio = !(!this.codecs.mp3 && !this.codecs.ogg && !this.codecs.webm && !this.codecs.wav);
			this.features.channels = 8;
			b.volume = 0.1337;
			this.features.volume = !!(1E-4 > Math.abs(b.volume - 0.1337));
			navigator.userAgent.match(/iPhone|iPod|iPad/i) && (this.features.channels = 1)
		}
		this.features.flashaudio = !!navigator.mimeTypes["application/x-shockwave-flash"] || !!navigator.plugins["Shockwave Flash"] || !1;
		if (window.ActiveXObject) try {
			new ActiveXObject("ShockwaveFlash.ShockwaveFlash.10"), this.features.flashaudio = !0
		} catch (g) {}!0 === this.settings.useFlash && (this.features.flashaudio = !0);
		!0 === this.features.flashaudio && !this.features.html5audio && (this.codecs.mp3 = "audio/mp3", this.codecs.mpga = "audio/mpeg", this.codecs.mp4 = "audio/mp4", this.codecs.m4a = "audio/mp4", this.codecs["3gp"] = "audio/3gpp", this.codecs.amr = "audio/amr",
			this.features.volume = !0, this.features.channels = 1)
	},
	__getPlayerById: function(b) {
		return this.__players && void 0 !== this.__players[b] ? this.__players[b] : null
	},
	__getClone: function(b, c) {
		for (var d in this.__clones) {
			var e = this.__clones[d];
			if (null === e.isPlaying && e.origin === b) return e
		}
		if ("[object Object]" === Object.prototype.toString.call(c)) {
			d = {};
			for (var f in c) d[f] = c[f];
			d.autoplay = !1;
			f = new jukebox.Player(d, b);
			f.isClone = !0;
			f.wasReady = !1;
			return this.__clones[f.id] = f
		}
		return null
	},
	loop: function() {
		if (0 !== this.__playersLength)
			if (this.__queue.length &&
				this.__playersLength < this.features.channels) {
				var b = this.__queue[0],
					c = this.__getPlayerById(b.origin);
				if (null !== c) {
					var d = this.__getClone(b.origin, c.settings);
					null !== d && (!0 === this.features.volume && (c = this.__players[b.origin]) && d.setVolume(c.getVolume()), this.add(d), d.play(b.pointer, !0))
				}
				this.__queue.splice(0, 1)
			} else
				for (d in this.__queue.length && 1 === this.features.channels && (b = this.__queue[0], c = this.__getPlayerById(b.origin), null !== c && c.play(b.pointer, !0), this.__queue.splice(0, 1)), this.__players) b = this.__players[d],
					c = b.getCurrentTime() || 0, b.isPlaying && !1 === b.wasReady ? b.wasReady = b.setCurrentTime(b.isPlaying.start) : b.isPlaying && !0 === b.wasReady ? c > b.isPlaying.end && (!0 === b.isPlaying.loop ? b.play(b.isPlaying.start, !0) : b.stop()) : b.isClone && null === b.isPlaying ? this.remove(b) : void 0 !== b.backgroundMusic && null === b.isPlaying && c > b.backgroundMusic.end && b.backgroundHackForiOS()
	},
	getPlayableResource: function(b) {
		"[object Array]" !== Object.prototype.toString.call(b) && (b = [b]);
		for (var c = 0, d = b.length; c < d; c++) {
			var e = b[c],
				f = e.match(/\.([^\.]*)$/)[1];
			if (f && this.codecs[f]) return e
		}
		return null
	},
	add: function(b) {
		return b instanceof jukebox.Player && void 0 === this.__players[b.id] ? (this.__playersLength++, this.__players[b.id] = b, !0) : !1
	},
	remove: function(b) {
		return b instanceof jukebox.Player && void 0 !== this.__players[b.id] ? (this.__playersLength--, delete this.__players[b.id], !0) : !1
	},
	addToQueue: function(b, c) {
		return ("string" === typeof b || "number" === typeof b) && void 0 !== this.__players[c] ? (this.__queue.push({
			pointer: b,
			origin: c
		}), !0) : !1
	}
};
(function() {
	var b = function() {
		this.init()
	};
	b.prototype = {
		init: function() {
			var b = this || c;
			b._counter = 1E3;
			b._html5AudioPool = [];
			b.html5PoolSize = 10;
			b._codecs = {};
			b._howls = [];
			b._muted = !1;
			b._volume = 1;
			b._canPlayEvent = "canplaythrough";
			b._navigator = "undefined" !== typeof window && window.navigator ? window.navigator : null;
			b.masterGain = null;
			b.noAudio = !1;
			b.usingWebAudio = !0;
			b.autoSuspend = !1;
			b.ctx = null;
			b.autoUnlock = !0;
			b._setup();
			return b
		},
		volume: function(b) {
			var d = this || c;
			b = parseFloat(b);
			d.ctx || q();
			if ("undefined" !== typeof b &&
				0 <= b && 1 >= b) {
				d._volume = b;
				if (d._muted) return d;
				d.usingWebAudio && d.masterGain.gain.setValueAtTime(b, c.ctx.currentTime);
				for (var e = 0; e < d._howls.length; e++)
					if (!d._howls[e]._webAudio)
						for (var f = d._howls[e]._getSoundIds(), l = 0; l < f.length; l++) {
							var p = d._howls[e]._soundById(f[l]);
							p && p._node && (p._node.volume = p._volume * b)
						}
				return d
			}
			return d._volume
		},
		mute: function(b) {
			var d = this || c;
			d.ctx || q();
			d._muted = b;
			d.usingWebAudio && d.masterGain.gain.setValueAtTime(b ? 0 : d._volume, c.ctx.currentTime);
			for (var e = 0; e < d._howls.length; e++)
				if (!d._howls[e]._webAudio)
					for (var f =
							d._howls[e]._getSoundIds(), l = 0; l < f.length; l++) {
						var p = d._howls[e]._soundById(f[l]);
						p && p._node && (p._node.muted = b ? !0 : p._muted)
					}
			return d
		},
		stop: function() {
			for (var b = this || c, d = 0; d < b._howls.length; d++) b._howls[d].stop();
			return b
		},
		unload: function() {
			for (var b = this || c, d = b._howls.length - 1; 0 <= d; d--) b._howls[d].unload();
			b.usingWebAudio && b.ctx && "undefined" !== typeof b.ctx.close && (b.ctx.close(), b.ctx = null, q());
			return b
		},
		codecs: function(b) {
			return (this || c)._codecs[b.replace(/^x-/, "")]
		},
		_setup: function() {
			var b = this ||
				c;
			b.state = b.ctx ? b.ctx.state || "suspended" : "suspended";
			b._autoSuspend();
			if (!b.usingWebAudio)
				if ("undefined" !== typeof Audio) try {
					var d = new Audio;
					"undefined" === typeof d.oncanplaythrough && (b._canPlayEvent = "canplay")
				} catch (e) {
					b.noAudio = !0
				} else b.noAudio = !0;
			try {
				d = new Audio, d.muted && (b.noAudio = !0)
			} catch (f) {}
			b.noAudio || b._setupCodecs();
			return b
		},
		_setupCodecs: function() {
			var b = this || c,
				d = null;
			try {
				d = "undefined" !== typeof Audio ? new Audio : null
			} catch (e) {
				return b
			}
			if (!d || "function" !== typeof d.canPlayType) return b;
			var f =
				d.canPlayType("audio/mpeg;").replace(/^no$/, ""),
				l = b._navigator && b._navigator.userAgent.match(/OPR\/([0-6].)/g),
				l = l && 33 > parseInt(l[0].split("/")[1], 10);
			b._codecs = {
				mp3: !(l || !f && !d.canPlayType("audio/mp3;").replace(/^no$/, "")),
				mpeg: !!f,
				opus: !!d.canPlayType('audio/ogg; codecs="opus"').replace(/^no$/, ""),
				ogg: !!d.canPlayType('audio/ogg; codecs="vorbis"').replace(/^no$/, ""),
				oga: !!d.canPlayType('audio/ogg; codecs="vorbis"').replace(/^no$/, ""),
				wav: !!d.canPlayType('audio/wav; codecs="1"').replace(/^no$/, ""),
				aac: !!d.canPlayType("audio/aac;").replace(/^no$/, ""),
				caf: !!d.canPlayType("audio/x-caf;").replace(/^no$/, ""),
				m4a: !!(d.canPlayType("audio/x-m4a;") || d.canPlayType("audio/m4a;") || d.canPlayType("audio/aac;")).replace(/^no$/, ""),
				m4b: !!(d.canPlayType("audio/x-m4b;") || d.canPlayType("audio/m4b;") || d.canPlayType("audio/aac;")).replace(/^no$/, ""),
				mp4: !!(d.canPlayType("audio/x-mp4;") || d.canPlayType("audio/mp4;") || d.canPlayType("audio/aac;")).replace(/^no$/, ""),
				weba: !!d.canPlayType('audio/webm; codecs="vorbis"').replace(/^no$/,
					""),
				webm: !!d.canPlayType('audio/webm; codecs="vorbis"').replace(/^no$/, ""),
				dolby: !!d.canPlayType('audio/mp4; codecs="ec-3"').replace(/^no$/, ""),
				flac: !!(d.canPlayType("audio/x-flac;") || d.canPlayType("audio/flac;")).replace(/^no$/, "")
			};
			return b
		},
		_unlockAudio: function() {
			var b = this || c;
			if (!b._audioUnlocked && b.ctx) {
				b._audioUnlocked = !1;
				b.autoUnlock = !1;
				!b._mobileUnloaded && 44100 !== b.ctx.sampleRate && (b._mobileUnloaded = !0, b.unload());
				b._scratchBuffer = b.ctx.createBuffer(1, 1, 22050);
				var d = function() {
					for (; b._html5AudioPool.length <
						b.html5PoolSize;) try {
						var c = new Audio;
						c._unlocked = !0;
						b._releaseHtml5Audio(c)
					} catch (e) {
						b.noAudio = !0;
						break
					}
					for (c = 0; c < b._howls.length; c++)
						if (!b._howls[c]._webAudio)
							for (var f = b._howls[c]._getSoundIds(), l = 0; l < f.length; l++) {
								var q = b._howls[c]._soundById(f[l]);
								q && q._node && !q._node._unlocked && (q._node._unlocked = !0, q._node.load())
							}
					b._autoResume();
					var p = b.ctx.createBufferSource();
					p.buffer = b._scratchBuffer;
					p.connect(b.ctx.destination);
					"undefined" === typeof p.start ? p.noteOn(0) : p.start(0);
					"function" === typeof b.ctx.resume &&
						b.ctx.resume();
					p.onended = function() {
						p.disconnect(0);
						b._audioUnlocked = !0;
						document.removeEventListener("touchstart", d, !0);
						document.removeEventListener("touchend", d, !0);
						document.removeEventListener("click", d, !0);
						for (var c = 0; c < b._howls.length; c++) b._howls[c]._emit("unlock")
					}
				};
				document.addEventListener("touchstart", d, !0);
				document.addEventListener("touchend", d, !0);
				document.addEventListener("click", d, !0);
				return b
			}
		},
		_obtainHtml5Audio: function() {
			var b = this || c;
			if (b._html5AudioPool.length) return b._html5AudioPool.pop();
			(b = (new Audio).play()) && "undefined" !== typeof Promise && (b instanceof Promise || "function" === typeof b.then) && b.catch(function() {
				console.warn("HTML5 Audio pool exhausted, returning potentially locked audio object.")
			});
			return new Audio
		},
		_releaseHtml5Audio: function(b) {
			var d = this || c;
			b._unlocked && d._html5AudioPool.push(b);
			return d
		},
		_autoSuspend: function() {
			var b = this;
			if (b.autoSuspend && b.ctx && "undefined" !== typeof b.ctx.suspend && c.usingWebAudio) {
				for (var d = 0; d < b._howls.length; d++)
					if (b._howls[d]._webAudio)
						for (var e =
								0; e < b._howls[d]._sounds.length; e++)
							if (!b._howls[d]._sounds[e]._paused) return b;
				b._suspendTimer && clearTimeout(b._suspendTimer);
				b._suspendTimer = setTimeout(function() {
					if (b.autoSuspend) {
						b._suspendTimer = null;
						b.state = "suspending";
						var c = function() {
							b.state = "suspended";
							b._resumeAfterSuspend && (delete b._resumeAfterSuspend, b._autoResume())
						};
						b.ctx.suspend().then(c, c)
					}
				}, 3E4);
				return b
			}
		},
		_autoResume: function() {
			var b = this;
			if (b.ctx && "undefined" !== typeof b.ctx.resume && c.usingWebAudio) return "running" === b.state && "interrupted" !==
				b.ctx.state && b._suspendTimer ? (clearTimeout(b._suspendTimer), b._suspendTimer = null) : "suspended" === b.state || "running" === b.state && "interrupted" === b.ctx.state ? (b.ctx.resume().then(function() {
					b.state = "running";
					for (var c = 0; c < b._howls.length; c++) b._howls[c]._emit("resume")
				}), b._suspendTimer && (clearTimeout(b._suspendTimer), b._suspendTimer = null)) : "suspending" === b.state && (b._resumeAfterSuspend = !0), b
		}
	};
	var c = new b,
		d = function(b) {
			!b.src || 0 === b.src.length ? console.error("An array of source files must be passed with any new Howl.") :
				this.init(b)
		};
	d.prototype = {
		init: function(b) {
			var d = this;
			c.ctx || q();
			d._autoplay = b.autoplay || !1;
			d._format = "string" !== typeof b.format ? b.format : [b.format];
			d._html5 = b.html5 || !1;
			d._muted = b.mute || !1;
			d._loop = b.loop || !1;
			d._pool = b.pool || 5;
			d._preload = "boolean" === typeof b.preload || "metadata" === b.preload ? b.preload : !0;
			d._rate = b.rate || 1;
			d._sprite = b.sprite || {};
			d._src = "string" !== typeof b.src ? b.src : [b.src];
			d._volume = void 0 !== b.volume ? b.volume : 1;
			d._xhr = {
				method: b.xhr && b.xhr.method ? b.xhr.method : "GET",
				headers: b.xhr && b.xhr.headers ?
					b.xhr.headers : null,
				withCredentials: b.xhr && b.xhr.withCredentials ? b.xhr.withCredentials : !1
			};
			d._duration = 0;
			d._state = "unloaded";
			d._sounds = [];
			d._endTimers = {};
			d._queue = [];
			d._playLock = !1;
			d._onend = b.onend ? [{
				fn: b.onend
			}] : [];
			d._onfade = b.onfade ? [{
				fn: b.onfade
			}] : [];
			d._onload = b.onload ? [{
				fn: b.onload
			}] : [];
			d._onloaderror = b.onloaderror ? [{
				fn: b.onloaderror
			}] : [];
			d._onplayerror = b.onplayerror ? [{
				fn: b.onplayerror
			}] : [];
			d._onpause = b.onpause ? [{
				fn: b.onpause
			}] : [];
			d._onplay = b.onplay ? [{
				fn: b.onplay
			}] : [];
			d._onstop = b.onstop ? [{
				fn: b.onstop
			}] : [];
			d._onmute = b.onmute ? [{
				fn: b.onmute
			}] : [];
			d._onvolume = b.onvolume ? [{
				fn: b.onvolume
			}] : [];
			d._onrate = b.onrate ? [{
				fn: b.onrate
			}] : [];
			d._onseek = b.onseek ? [{
				fn: b.onseek
			}] : [];
			d._onunlock = b.onunlock ? [{
				fn: b.onunlock
			}] : [];
			d._onresume = [];
			d._webAudio = c.usingWebAudio && !d._html5;
			"undefined" !== typeof c.ctx && c.ctx && c.autoUnlock && c._unlockAudio();
			c._howls.push(d);
			d._autoplay && d._queue.push({
				event: "play",
				action: function() {
					d.play()
				}
			});
			d._preload && "none" !== d._preload && d.load();
			return d
		},
		load: function() {
			var b = null;
			if (c.noAudio) this._emit("loaderror",
				null, "No audio support.");
			else {
				"string" === typeof this._src && (this._src = [this._src]);
				for (var d = 0; d < this._src.length; d++) {
					var n, r;
					if (this._format && this._format[d]) n = this._format[d];
					else {
						r = this._src[d];
						if ("string" !== typeof r) {
							this._emit("loaderror", null, "Non-string found in selected audio sources - ignoring.");
							continue
						}(n = /^data:audio\/([^;,]+);/i.exec(r)) || (n = /\.([^.]+)$/.exec(r.split("?", 1)[0]));
						n && (n = n[1].toLowerCase())
					}
					n || console.warn('No file extension was found. Consider using the "format" property or specify an extension.');
					if (n && c.codecs(n)) {
						b = this._src[d];
						break
					}
				}
				if (b) {
					this._src = b;
					this._state = "loading";
					"https:" === window.location.protocol && "http:" === b.slice(0, 5) && (this._html5 = !0, this._webAudio = !1);
					new e(this);
					if (this._webAudio) {
						var q = this,
							u = q._src;
						if (f[u]) q._duration = f[u].duration, p(q);
						else if (/^data:[^;]+;base64,/.test(u)) {
							b = atob(u.split(",")[1]);
							d = new Uint8Array(b.length);
							for (n = 0; n < b.length; ++n) d[n] = b.charCodeAt(n);
							l(d.buffer, q)
						} else {
							var t = new XMLHttpRequest;
							t.open(q._xhr.method, u, !0);
							t.withCredentials = q._xhr.withCredentials;
							t.responseType = "arraybuffer";
							q._xhr.headers && Object.keys(q._xhr.headers).forEach(function(b) {
								t.setRequestHeader(b, q._xhr.headers[b])
							});
							t.onload = function() {
								var b = (t.status + "")[0];
								"0" !== b && "2" !== b && "3" !== b ? q._emit("loaderror", null, "Failed loading audio file with status: " + t.status + ".") : l(t.response, q)
							};
							t.onerror = function() {
								q._webAudio && (q._html5 = !0, q._webAudio = !1, q._sounds = [], delete f[u], q.load())
							};
							try {
								t.send()
							} catch (y) {
								t.onerror()
							}
						}
					}
					return this
				}
				this._emit("loaderror", null, "No codec support for selected audio sources.")
			}
		},
		play: function(b, d) {
			var e = this,
				f = null;
			if ("number" === typeof b) f = b, b = null;
			else {
				if ("string" === typeof b && "loaded" === e._state && !e._sprite[b]) return null;
				if ("undefined" === typeof b && (b = "__default", !e._playLock)) {
					for (var l = 0, q = 0; q < e._sounds.length; q++) e._sounds[q]._paused && !e._sounds[q]._ended && (l++, f = e._sounds[q]._id);
					1 === l ? b = null : f = null
				}
			}
			var p = f ? e._soundById(f) : e._inactiveSound();
			if (!p) return null;
			f && !b && (b = p._sprite || "__default");
			if ("loaded" !== e._state) {
				p._sprite = b;
				p._ended = !1;
				var y = p._id;
				e._queue.push({
					event: "play",
					action: function() {
						e.play(y)
					}
				});
				return y
			}
			if (f && !p._paused) return d || e._loadQueue("play"), p._id;
			e._webAudio && c._autoResume();
			var B = Math.max(0, 0 < p._seek ? p._seek : e._sprite[b][0] / 1E3),
				G = Math.max(0, (e._sprite[b][0] + e._sprite[b][1]) / 1E3 - B),
				N = 1E3 * G / Math.abs(p._rate),
				ba = e._sprite[b][0] / 1E3,
				La = (e._sprite[b][0] + e._sprite[b][1]) / 1E3;
			p._sprite = b;
			p._ended = !1;
			var sa = function() {
				p._paused = !1;
				p._seek = B;
				p._start = ba;
				p._stop = La;
				p._loop = !(!p._loop && !e._sprite[b][2])
			};
			if (B >= La) e._ended(p);
			else {
				var H = p._node;
				if (e._webAudio) f =
					function() {
						e._playLock = !1;
						sa();
						e._refreshBuffer(p);
						H.gain.setValueAtTime(p._muted || e._muted ? 0 : p._volume, c.ctx.currentTime);
						p._playStart = c.ctx.currentTime;
						"undefined" === typeof H.bufferSource.start ? p._loop ? H.bufferSource.noteGrainOn(0, B, 86400) : H.bufferSource.noteGrainOn(0, B, G) : p._loop ? H.bufferSource.start(0, B, 86400) : H.bufferSource.start(0, B, G);
						Infinity !== N && (e._endTimers[p._id] = setTimeout(e._ended.bind(e, p), N));
						d || setTimeout(function() {
							e._emit("play", p._id);
							e._loadQueue()
						}, 0)
					}, "running" === c.state &&
					"interrupted" !== c.ctx.state ? f() : (e._playLock = !0, e.once("resume", f), e._clearTimer(p._id));
				else {
					var Ua = function() {
						H.currentTime = B;
						H.muted = p._muted || e._muted || c._muted || H.muted;
						H.volume = p._volume * c.volume();
						H.playbackRate = p._rate;
						try {
							var f = H.play();
							f && "undefined" !== typeof Promise && (f instanceof Promise || "function" === typeof f.then) ? (e._playLock = !0, sa(), f.then(function() {
								e._playLock = !1;
								H._unlocked = !0;
								d || (e._emit("play", p._id), e._loadQueue())
							}).catch(function() {
								e._playLock = !1;
								e._emit("playerror", p._id,
									"Playback was unable to start. This is most commonly an issue on mobile devices and Chrome where playback was not within a user interaction.");
								p._ended = !0;
								p._paused = !0
							})) : d || (e._playLock = !1, sa(), e._emit("play", p._id), e._loadQueue());
							H.playbackRate = p._rate;
							H.paused ? e._emit("playerror", p._id, "Playback was unable to start. This is most commonly an issue on mobile devices and Chrome where playback was not within a user interaction.") : "__default" !== b || p._loop ? e._endTimers[p._id] = setTimeout(e._ended.bind(e,
								p), N) : (e._endTimers[p._id] = function() {
								e._ended(p);
								H.removeEventListener("ended", e._endTimers[p._id], !1)
							}, H.addEventListener("ended", e._endTimers[p._id], !1))
						} catch (l) {
							e._emit("playerror", p._id, l)
						}
					};
					"data:audio/wav;base64,UklGRigAAABXQVZFZm10IBIAAAABAAEARKwAAIhYAQACABAAAABkYXRhAgAAAAEA" === H.src && (H.src = e._src, H.load());
					f = window && window.ejecta || !H.readyState && c._navigator.isCocoonJS;
					if (3 <= H.readyState || f) Ua();
					else {
						e._playLock = !0;
						var S = function() {
							Ua();
							H.removeEventListener(c._canPlayEvent, S, !1)
						};
						H.addEventListener(c._canPlayEvent,
							S, !1);
						e._clearTimer(p._id)
					}
				}
				return p._id
			}
		},
		pause: function(b, c) {
			var d = this;
			if ("loaded" !== d._state || d._playLock) return d._queue.push({
				event: "pause",
				action: function() {
					d.pause(b)
				}
			}), d;
			for (var e = d._getSoundIds(b), f = 0; f < e.length; f++) {
				d._clearTimer(e[f]);
				var l = d._soundById(e[f]);
				if (l && !l._paused && (l._seek = d.seek(e[f]), l._rateSeek = 0, l._paused = !0, d._stopFade(e[f]), l._node))
					if (d._webAudio) {
						if (!l._node.bufferSource) continue;
						"undefined" === typeof l._node.bufferSource.stop ? l._node.bufferSource.noteOff(0) : l._node.bufferSource.stop(0);
						d._cleanBuffer(l._node)
					} else(!isNaN(l._node.duration) || Infinity === l._node.duration) && l._node.pause();
				c || d._emit("pause", l ? l._id : null)
			}
			return d
		},
		stop: function(b, c) {
			var d = this;
			if ("loaded" !== d._state || d._playLock) return d._queue.push({
				event: "stop",
				action: function() {
					d.stop(b)
				}
			}), d;
			for (var e = d._getSoundIds(b), f = 0; f < e.length; f++) {
				d._clearTimer(e[f]);
				var l = d._soundById(e[f]);
				if (l) {
					l._seek = l._start || 0;
					l._rateSeek = 0;
					l._paused = !0;
					l._ended = !0;
					d._stopFade(e[f]);
					if (l._node)
						if (d._webAudio) l._node.bufferSource &&
							("undefined" === typeof l._node.bufferSource.stop ? l._node.bufferSource.noteOff(0) : l._node.bufferSource.stop(0), d._cleanBuffer(l._node));
						else if (!isNaN(l._node.duration) || Infinity === l._node.duration) l._node.currentTime = l._start || 0, l._node.pause(), Infinity === l._node.duration && d._clearSound(l._node);
					c || d._emit("stop", l._id)
				}
			}
			return d
		},
		mute: function(b, d) {
			var e = this;
			if ("loaded" !== e._state || e._playLock) return e._queue.push({
				event: "mute",
				action: function() {
					e.mute(b, d)
				}
			}), e;
			if ("undefined" === typeof d)
				if ("boolean" ===
					typeof b) e._muted = b;
				else return e._muted;
			for (var f = e._getSoundIds(d), l = 0; l < f.length; l++) {
				var q = e._soundById(f[l]);
				q && (q._muted = b, q._interval && e._stopFade(q._id), e._webAudio && q._node ? q._node.gain.setValueAtTime(b ? 0 : q._volume, c.ctx.currentTime) : q._node && (q._node.muted = c._muted ? !0 : b), e._emit("mute", q._id))
			}
			return e
		},
		volume: function() {
			var b = this,
				d = arguments,
				e, f;
			if (0 === d.length) return b._volume;
			1 === d.length || 2 === d.length && "undefined" === typeof d[1] ? 0 <= b._getSoundIds().indexOf(d[0]) ? f = parseInt(d[0], 10) :
				e = parseFloat(d[0]) : 2 <= d.length && (e = parseFloat(d[0]), f = parseInt(d[1], 10));
			var l;
			if ("undefined" !== typeof e && 0 <= e && 1 >= e) {
				if ("loaded" !== b._state || b._playLock) return b._queue.push({
					event: "volume",
					action: function() {
						b.volume.apply(b, d)
					}
				}), b;
				"undefined" === typeof f && (b._volume = e);
				f = b._getSoundIds(f);
				for (var q = 0; q < f.length; q++)
					if (l = b._soundById(f[q])) l._volume = e, d[2] || b._stopFade(f[q]), b._webAudio && l._node && !l._muted ? l._node.gain.setValueAtTime(e, c.ctx.currentTime) : l._node && !l._muted && (l._node.volume = e * c.volume()),
						b._emit("volume", l._id)
			} else return (l = f ? b._soundById(f) : b._sounds[0]) ? l._volume : 0;
			return b
		},
		fade: function(b, d, e, f) {
			var l = this;
			if ("loaded" !== l._state || l._playLock) return l._queue.push({
				event: "fade",
				action: function() {
					l.fade(b, d, e, f)
				}
			}), l;
			b = Math.min(Math.max(0, parseFloat(b)), 1);
			d = Math.min(Math.max(0, parseFloat(d)), 1);
			e = parseFloat(e);
			l.volume(b, f);
			for (var q = l._getSoundIds(f), p = 0; p < q.length; p++) {
				var y = l._soundById(q[p]);
				if (y) {
					f || l._stopFade(q[p]);
					if (l._webAudio && !y._muted) {
						var B = c.ctx.currentTime,
							G = B +
							e / 1E3;
						y._volume = b;
						y._node.gain.setValueAtTime(b, B);
						y._node.gain.linearRampToValueAtTime(d, G)
					}
					l._startFadeInterval(y, b, d, e, q[p], "undefined" === typeof f)
				}
			}
			return l
		},
		_startFadeInterval: function(b, c, d, e, f, l) {
			var q = this,
				p = c,
				B = d - c;
			f = Math.abs(B / 0.01);
			f = Math.max(4, 0 < f ? e / f : e);
			var G = Date.now();
			b._fadeTo = d;
			b._interval = setInterval(function() {
				var f = (Date.now() - G) / e;
				G = Date.now();
				p += B * f;
				p = 0 > B ? Math.max(d, p) : Math.min(d, p);
				p = Math.round(100 * p) / 100;
				q._webAudio ? b._volume = p : q.volume(p, b._id, !0);
				l && (q._volume = p);
				if (d < c &&
					p <= d || d > c && p >= d) clearInterval(b._interval), b._interval = null, b._fadeTo = null, q.volume(d, b._id), q._emit("fade", b._id)
			}, f)
		},
		_stopFade: function(b) {
			var d = this._soundById(b);
			d && d._interval && (this._webAudio && d._node.gain.cancelScheduledValues(c.ctx.currentTime), clearInterval(d._interval), d._interval = null, this.volume(d._fadeTo, b), d._fadeTo = null, this._emit("fade", b));
			return this
		},
		loop: function() {
			var b = arguments,
				c, d;
			if (0 === b.length) return this._loop;
			if (1 === b.length)
				if ("boolean" === typeof b[0]) this._loop = c = b[0];
				else return (b = this._soundById(parseInt(b[0], 10))) ? b._loop : !1;
			else 2 === b.length && (c = b[0], d = parseInt(b[1], 10));
			d = this._getSoundIds(d);
			for (var e = 0; e < d.length; e++)
				if (b = this._soundById(d[e]))
					if (b._loop = c, this._webAudio && b._node && b._node.bufferSource && (b._node.bufferSource.loop = c)) b._node.bufferSource.loopStart = b._start || 0, b._node.bufferSource.loopEnd = b._stop;
			return this
		},
		rate: function() {
			var b = this,
				d = arguments,
				e, f;
			0 === d.length ? f = b._sounds[0]._id : 1 === d.length ? 0 <= b._getSoundIds().indexOf(d[0]) ? f = parseInt(d[0],
				10) : e = parseFloat(d[0]) : 2 === d.length && (e = parseFloat(d[0]), f = parseInt(d[1], 10));
			var l;
			if ("number" === typeof e) {
				if ("loaded" !== b._state || b._playLock) return b._queue.push({
					event: "rate",
					action: function() {
						b.rate.apply(b, d)
					}
				}), b;
				"undefined" === typeof f && (b._rate = e);
				f = b._getSoundIds(f);
				for (var q = 0; q < f.length; q++)
					if (l = b._soundById(f[q])) {
						b.playing(f[q]) && (l._rateSeek = b.seek(f[q]), l._playStart = b._webAudio ? c.ctx.currentTime : l._playStart);
						l._rate = e;
						b._webAudio && l._node && l._node.bufferSource ? l._node.bufferSource.playbackRate.setValueAtTime(e,
							c.ctx.currentTime) : l._node && (l._node.playbackRate = e);
						var p = b.seek(f[q]),
							p = 1E3 * ((b._sprite[l._sprite][0] + b._sprite[l._sprite][1]) / 1E3 - p) / Math.abs(l._rate);
						if (b._endTimers[f[q]] || !l._paused) b._clearTimer(f[q]), b._endTimers[f[q]] = setTimeout(b._ended.bind(b, l), p);
						b._emit("rate", l._id)
					}
			} else return (l = b._soundById(f)) ? l._rate : b._rate;
			return b
		},
		seek: function() {
			var b = this,
				d = arguments,
				e, f;
			0 === d.length ? f = b._sounds[0]._id : 1 === d.length ? 0 <= b._getSoundIds().indexOf(d[0]) ? f = parseInt(d[0], 10) : b._sounds.length && (f =
				b._sounds[0]._id, e = parseFloat(d[0])) : 2 === d.length && (e = parseFloat(d[0]), f = parseInt(d[1], 10));
			if ("undefined" === typeof f) return b;
			if ("loaded" !== b._state || b._playLock) return b._queue.push({
				event: "seek",
				action: function() {
					b.seek.apply(b, d)
				}
			}), b;
			var l = b._soundById(f);
			if (l)
				if ("number" === typeof e && 0 <= e) {
					var q = b.playing(f);
					q && b.pause(f, !0);
					l._seek = e;
					l._ended = !1;
					b._clearTimer(f);
					!b._webAudio && l._node && !isNaN(l._node.duration) && (l._node.currentTime = e);
					var p = function() {
						b._emit("seek", f);
						q && b.play(f, !0)
					};
					if (q &&
						!b._webAudio) {
						var y = function() {
							b._playLock ? setTimeout(y, 0) : p()
						};
						setTimeout(y, 0)
					} else p()
				} else return b._webAudio ? (e = b.playing(f) ? c.ctx.currentTime - l._playStart : 0, l._seek + ((l._rateSeek ? l._rateSeek - l._seek : 0) + e * Math.abs(l._rate))) : l._node.currentTime;
			return b
		},
		playing: function(b) {
			if ("number" === typeof b) return (b = this._soundById(b)) ? !b._paused : !1;
			for (b = 0; b < this._sounds.length; b++)
				if (!this._sounds[b]._paused) return !0;
			return !1
		},
		duration: function(b) {
			var c = this._duration;
			(b = this._soundById(b)) && (c = this._sprite[b._sprite][1] /
				1E3);
			return c
		},
		state: function() {
			return this._state
		},
		unload: function() {
			for (var b = this._sounds, d = 0; d < b.length; d++) b[d]._paused || this.stop(b[d]._id), this._webAudio || (this._clearSound(b[d]._node), b[d]._node.removeEventListener("error", b[d]._errorFn, !1), b[d]._node.removeEventListener(c._canPlayEvent, b[d]._loadFn, !1), c._releaseHtml5Audio(b[d]._node)), delete b[d]._node, this._clearTimer(b[d]._id);
			d = c._howls.indexOf(this);
			0 <= d && c._howls.splice(d, 1);
			b = !0;
			for (d = 0; d < c._howls.length; d++)
				if (c._howls[d]._src ===
					this._src || 0 <= this._src.indexOf(c._howls[d]._src)) {
					b = !1;
					break
				} f && b && delete f[this._src];
			c.noAudio = !1;
			this._state = "unloaded";
			this._sounds = [];
			return null
		},
		on: function(b, c, d, e) {
			b = this["_on" + b];
			"function" === typeof c && b.push(e ? {
				id: d,
				fn: c,
				once: e
			} : {
				id: d,
				fn: c
			});
			return this
		},
		off: function(b, c, d) {
			var e = this["_on" + b],
				f = 0;
			"number" === typeof c && (d = c, c = null);
			if (c || d)
				for (f = 0; f < e.length; f++) {
					if (b = d === e[f].id, c === e[f].fn && b || !c && b) {
						e.splice(f, 1);
						break
					}
				} else if (b) this["_on" + b] = [];
				else {
					c = Object.keys(this);
					for (f = 0; f < c.length; f++) 0 ===
						c[f].indexOf("_on") && Array.isArray(this[c[f]]) && (this[c[f]] = [])
				} return this
		},
		once: function(b, c, d) {
			this.on(b, c, d, 1);
			return this
		},
		_emit: function(b, c, d) {
			for (var e = this["_on" + b], f = e.length - 1; 0 <= f; f--)
				if (!e[f].id || e[f].id === c || "load" === b) setTimeout(function(b) {
					b.call(this, c, d)
				}.bind(this, e[f].fn), 0), e[f].once && this.off(b, e[f].fn, e[f].id);
			this._loadQueue(b);
			return this
		},
		_loadQueue: function(b) {
			if (0 < this._queue.length) {
				var c = this._queue[0];
				c.event === b && (this._queue.shift(), this._loadQueue());
				b || c.action()
			}
			return this
		},
		_ended: function(b) {
			var d = b._sprite;
			if (!this._webAudio && b._node && !b._node.paused && !b._node.ended && b._node.currentTime < b._stop) return setTimeout(this._ended.bind(this, b), 100), this;
			d = !(!b._loop && !this._sprite[d][2]);
			this._emit("end", b._id);
			!this._webAudio && d && this.stop(b._id, !0).play(b._id);
			if (this._webAudio && d) {
				this._emit("play", b._id);
				b._seek = b._start || 0;
				b._rateSeek = 0;
				b._playStart = c.ctx.currentTime;
				var e = 1E3 * (b._stop - b._start) / Math.abs(b._rate);
				this._endTimers[b._id] = setTimeout(this._ended.bind(this,
					b), e)
			}
			this._webAudio && !d && (b._paused = !0, b._ended = !0, b._seek = b._start || 0, b._rateSeek = 0, this._clearTimer(b._id), this._cleanBuffer(b._node), c._autoSuspend());
			!this._webAudio && !d && this.stop(b._id, !0);
			return this
		},
		_clearTimer: function(b) {
			if (this._endTimers[b]) {
				if ("function" !== typeof this._endTimers[b]) clearTimeout(this._endTimers[b]);
				else {
					var c = this._soundById(b);
					c && c._node && c._node.removeEventListener("ended", this._endTimers[b], !1)
				}
				delete this._endTimers[b]
			}
			return this
		},
		_soundById: function(b) {
			for (var c =
					0; c < this._sounds.length; c++)
				if (b === this._sounds[c]._id) return this._sounds[c];
			return null
		},
		_inactiveSound: function() {
			this._drain();
			for (var b = 0; b < this._sounds.length; b++)
				if (this._sounds[b]._ended) return this._sounds[b].reset();
			return new e(this)
		},
		_drain: function() {
			var b = this._pool,
				c = 0,
				d = 0;
			if (!(this._sounds.length < b)) {
				for (d = 0; d < this._sounds.length; d++) this._sounds[d]._ended && c++;
				for (d = this._sounds.length - 1; 0 <= d && !(c <= b); d--) this._sounds[d]._ended && (this._webAudio && this._sounds[d]._node && this._sounds[d]._node.disconnect(0),
					this._sounds.splice(d, 1), c--)
			}
		},
		_getSoundIds: function(b) {
			if ("undefined" === typeof b) {
				b = [];
				for (var c = 0; c < this._sounds.length; c++) b.push(this._sounds[c]._id);
				return b
			}
			return [b]
		},
		_refreshBuffer: function(b) {
			b._node.bufferSource = c.ctx.createBufferSource();
			b._node.bufferSource.buffer = f[this._src];
			b._panner ? b._node.bufferSource.connect(b._panner) : b._node.bufferSource.connect(b._node);
			if (b._node.bufferSource.loop = b._loop) b._node.bufferSource.loopStart = b._start || 0, b._node.bufferSource.loopEnd = b._stop || 0;
			b._node.bufferSource.playbackRate.setValueAtTime(b._rate,
				c.ctx.currentTime);
			return this
		},
		_cleanBuffer: function(b) {
			var d = c._navigator && 0 <= c._navigator.vendor.indexOf("Apple");
			if (c._scratchBuffer && b.bufferSource && (b.bufferSource.onended = null, b.bufferSource.disconnect(0), d)) try {
				b.bufferSource.buffer = c._scratchBuffer
			} catch (e) {}
			b.bufferSource = null;
			return this
		},
		_clearSound: function(b) {
			/MSIE |Trident\//.test(c._navigator && c._navigator.userAgent) || (b.src = "data:audio/wav;base64,UklGRigAAABXQVZFZm10IBIAAAABAAEARKwAAIhYAQACABAAAABkYXRhAgAAAAEA")
		}
	};
	var e = function(b) {
		this._parent =
			b;
		this.init()
	};
	e.prototype = {
		init: function() {
			var b = this._parent;
			this._muted = b._muted;
			this._loop = b._loop;
			this._volume = b._volume;
			this._rate = b._rate;
			this._seek = 0;
			this._ended = this._paused = !0;
			this._sprite = "__default";
			this._id = ++c._counter;
			b._sounds.push(this);
			this.create();
			return this
		},
		create: function() {
			var b = this._parent,
				d = c._muted || this._muted || this._parent._muted ? 0 : this._volume;
			b._webAudio ? (this._node = "undefined" === typeof c.ctx.createGain ? c.ctx.createGainNode() : c.ctx.createGain(), this._node.gain.setValueAtTime(d,
				c.ctx.currentTime), this._node.paused = !0, this._node.connect(c.masterGain)) : c.noAudio || (this._node = c._obtainHtml5Audio(), this._errorFn = this._errorListener.bind(this), this._node.addEventListener("error", this._errorFn, !1), this._loadFn = this._loadListener.bind(this), this._node.addEventListener(c._canPlayEvent, this._loadFn, !1), this._node.src = b._src, this._node.preload = !0 === b._preload ? "auto" : b._preload, this._node.volume = d * c.volume(), this._node.load());
			return this
		},
		reset: function() {
			var b = this._parent;
			this._muted =
				b._muted;
			this._loop = b._loop;
			this._volume = b._volume;
			this._rate = b._rate;
			this._rateSeek = this._seek = 0;
			this._ended = this._paused = !0;
			this._sprite = "__default";
			this._id = ++c._counter;
			return this
		},
		_errorListener: function() {
			this._parent._emit("loaderror", this._id, this._node.error ? this._node.error.code : 0);
			this._node.removeEventListener("error", this._errorFn, !1)
		},
		_loadListener: function() {
			var b = this._parent;
			b._duration = Math.ceil(10 * this._node.duration) / 10;
			0 === Object.keys(b._sprite).length && (b._sprite = {
				__default: [0,
					1E3 * b._duration
				]
			});
			"loaded" !== b._state && (b._state = "loaded", b._emit("load"), b._loadQueue());
			this._node.removeEventListener(c._canPlayEvent, this._loadFn, !1)
		}
	};
	var f = {},
		l = function(b, d) {
			var e = function() {
					d._emit("loaderror", null, "Decoding audio data failed.")
				},
				l = function(b) {
					b && 0 < d._sounds.length ? (f[d._src] = b, p(d, b)) : e()
				};
			"undefined" !== typeof Promise && 1 === c.ctx.decodeAudioData.length ? c.ctx.decodeAudioData(b).then(l).catch(e) : c.ctx.decodeAudioData(b, l, e)
		},
		p = function(b, c) {
			c && !b._duration && (b._duration = c.duration);
			0 === Object.keys(b._sprite).length && (b._sprite = {
				__default: [0, 1E3 * b._duration]
			});
			"loaded" !== b._state && (b._state = "loaded", b._emit("load"), b._loadQueue())
		},
		q = function() {
			if (c.usingWebAudio) {
				try {
					"undefined" !== typeof AudioContext ? c.ctx = new AudioContext : "undefined" !== typeof webkitAudioContext ? c.ctx = new webkitAudioContext : c.usingWebAudio = !1
				} catch (b) {
					c.usingWebAudio = !1
				}
				c.ctx || (c.usingWebAudio = !1);
				var d = /iP(hone|od|ad)/.test(c._navigator && c._navigator.platform),
					e = c._navigator && c._navigator.appVersion.match(/OS (\d+)_(\d+)_?(\d+)?/),
					e = e ? parseInt(e[1], 10) : null;
				d && e && 9 > e && (d = /safari/.test(c._navigator && c._navigator.userAgent.toLowerCase()), c._navigator && !d && (c.usingWebAudio = !1));
				c.usingWebAudio && (c.masterGain = "undefined" === typeof c.ctx.createGain ? c.ctx.createGainNode() : c.ctx.createGain(), c.masterGain.gain.setValueAtTime(c._muted ? 0 : c._volume, c.ctx.currentTime), c.masterGain.connect(c.ctx.destination));
				c._setup()
			}
		};
	"function" === typeof define && define.amd && define([], function() {
		return {
			Howler: c,
			Howl: d
		}
	});
	"undefined" !== typeof exports &&
		(exports.Howler = c, exports.Howl = d);
	"undefined" !== typeof global ? (global.HowlerGlobal = b, global.Howler = c, global.Howl = d, global.Sound = e) : "undefined" !== typeof window && (window.HowlerGlobal = b, window.Howler = c, window.Howl = d, window.Sound = e)
})();
(function() {
	HowlerGlobal.prototype._pos = [0, 0, 0];
	HowlerGlobal.prototype._orientation = [0, 0, -1, 0, 1, 0];
	HowlerGlobal.prototype.stereo = function(b) {
		if (!this.ctx || !this.ctx.listener) return this;
		for (var c = this._howls.length - 1; 0 <= c; c--) this._howls[c].stereo(b);
		return this
	};
	HowlerGlobal.prototype.pos = function(b, c, d) {
		if (!this.ctx || !this.ctx.listener) return this;
		c = "number" !== typeof c ? this._pos[1] : c;
		d = "number" !== typeof d ? this._pos[2] : d;
		if ("number" === typeof b) this._pos = [b, c, d], "undefined" !== typeof this.ctx.listener.positionX ?
			(this.ctx.listener.positionX.setTargetAtTime(this._pos[0], Howler.ctx.currentTime, 0.1), this.ctx.listener.positionY.setTargetAtTime(this._pos[1], Howler.ctx.currentTime, 0.1), this.ctx.listener.positionZ.setTargetAtTime(this._pos[2], Howler.ctx.currentTime, 0.1)) : this.ctx.listener.setPosition(this._pos[0], this._pos[1], this._pos[2]);
		else return this._pos;
		return this
	};
	HowlerGlobal.prototype.orientation = function(b, c, d, e, g, m) {
		if (!this.ctx || !this.ctx.listener) return this;
		var n = this._orientation;
		c = "number" !==
			typeof c ? n[1] : c;
		d = "number" !== typeof d ? n[2] : d;
		e = "number" !== typeof e ? n[3] : e;
		g = "number" !== typeof g ? n[4] : g;
		m = "number" !== typeof m ? n[5] : m;
		if ("number" === typeof b) this._orientation = [b, c, d, e, g, m], "undefined" !== typeof this.ctx.listener.forwardX ? (this.ctx.listener.forwardX.setTargetAtTime(b, Howler.ctx.currentTime, 0.1), this.ctx.listener.forwardY.setTargetAtTime(c, Howler.ctx.currentTime, 0.1), this.ctx.listener.forwardZ.setTargetAtTime(d, Howler.ctx.currentTime, 0.1), this.ctx.listener.upX.setTargetAtTime(e, Howler.ctx.currentTime,
			0.1), this.ctx.listener.upY.setTargetAtTime(g, Howler.ctx.currentTime, 0.1), this.ctx.listener.upZ.setTargetAtTime(m, Howler.ctx.currentTime, 0.1)) : this.ctx.listener.setOrientation(b, c, d, e, g, m);
		else return n;
		return this
	};
	var b = Howl.prototype.init;
	Howl.prototype.init = function(c) {
		this._orientation = c.orientation || [1, 0, 0];
		this._stereo = c.stereo || null;
		this._pos = c.pos || null;
		this._pannerAttr = {
			coneInnerAngle: "undefined" !== typeof c.coneInnerAngle ? c.coneInnerAngle : 360,
			coneOuterAngle: "undefined" !== typeof c.coneOuterAngle ?
				c.coneOuterAngle : 360,
			coneOuterGain: "undefined" !== typeof c.coneOuterGain ? c.coneOuterGain : 0,
			distanceModel: "undefined" !== typeof c.distanceModel ? c.distanceModel : "inverse",
			maxDistance: "undefined" !== typeof c.maxDistance ? c.maxDistance : 1E4,
			panningModel: "undefined" !== typeof c.panningModel ? c.panningModel : "HRTF",
			refDistance: "undefined" !== typeof c.refDistance ? c.refDistance : 1,
			rolloffFactor: "undefined" !== typeof c.rolloffFactor ? c.rolloffFactor : 1
		};
		this._onstereo = c.onstereo ? [{
			fn: c.onstereo
		}] : [];
		this._onpos = c.onpos ? [{
			fn: c.onpos
		}] : [];
		this._onorientation = c.onorientation ? [{
			fn: c.onorientation
		}] : [];
		return b.call(this, c)
	};
	Howl.prototype.stereo = function(b, c) {
		var d = this;
		if (!d._webAudio) return d;
		if ("loaded" !== d._state) return d._queue.push({
			event: "stereo",
			action: function() {
				d.stereo(b, c)
			}
		}), d;
		var q = "undefined" === typeof Howler.ctx.createStereoPanner ? "spatial" : "stereo";
		if ("undefined" === typeof c)
			if ("number" === typeof b) d._stereo = b, d._pos = [b, 0, 0];
			else return d._stereo;
		for (var g = d._getSoundIds(c), m = 0; m < g.length; m++) {
			var n = d._soundById(g[m]);
			if (n)
				if ("number" === typeof b) n._stereo = b, n._pos = [b, 0, 0], n._node && (n._pannerAttr.panningModel = "equalpower", (!n._panner || !n._panner.pan) && e(n, q), "spatial" === q ? "undefined" !== typeof n._panner.positionX ? (n._panner.positionX.setValueAtTime(b, Howler.ctx.currentTime), n._panner.positionY.setValueAtTime(0, Howler.ctx.currentTime), n._panner.positionZ.setValueAtTime(0, Howler.ctx.currentTime)) : n._panner.setPosition(b, 0, 0) : n._panner.pan.setValueAtTime(b, Howler.ctx.currentTime)), d._emit("stereo", n._id);
				else return n._stereo
		}
		return d
	};
	Howl.prototype.pos = function(b, c, d, q) {
		var g = this;
		if (!g._webAudio) return g;
		if ("loaded" !== g._state) return g._queue.push({
			event: "pos",
			action: function() {
				g.pos(b, c, d, q)
			}
		}), g;
		c = "number" !== typeof c ? 0 : c;
		d = "number" !== typeof d ? -0.5 : d;
		if ("undefined" === typeof q)
			if ("number" === typeof b) g._pos = [b, c, d];
			else return g._pos;
		for (var m = g._getSoundIds(q), n = 0; n < m.length; n++) {
			var r = g._soundById(m[n]);
			if (r)
				if ("number" === typeof b) r._pos = [b, c, d], r._node && ((!r._panner || r._panner.pan) && e(r, "spatial"), "undefined" !== typeof r._panner.positionX ?
					(r._panner.positionX.setValueAtTime(b, Howler.ctx.currentTime), r._panner.positionY.setValueAtTime(c, Howler.ctx.currentTime), r._panner.positionZ.setValueAtTime(d, Howler.ctx.currentTime)) : r._panner.setPosition(b, c, d)), g._emit("pos", r._id);
				else return r._pos
		}
		return g
	};
	Howl.prototype.orientation = function(b, c, d, q) {
		var g = this;
		if (!g._webAudio) return g;
		if ("loaded" !== g._state) return g._queue.push({
			event: "orientation",
			action: function() {
				g.orientation(b, c, d, q)
			}
		}), g;
		c = "number" !== typeof c ? g._orientation[1] : c;
		d =
			"number" !== typeof d ? g._orientation[2] : d;
		if ("undefined" === typeof q)
			if ("number" === typeof b) g._orientation = [b, c, d];
			else return g._orientation;
		for (var m = g._getSoundIds(q), n = 0; n < m.length; n++) {
			var r = g._soundById(m[n]);
			if (r)
				if ("number" === typeof b) r._orientation = [b, c, d], r._node && (r._panner || (r._pos || (r._pos = g._pos || [0, 0, -0.5]), e(r, "spatial")), "undefined" !== typeof r._panner.orientationX ? (r._panner.orientationX.setValueAtTime(b, Howler.ctx.currentTime), r._panner.orientationY.setValueAtTime(c, Howler.ctx.currentTime),
					r._panner.orientationZ.setValueAtTime(d, Howler.ctx.currentTime)) : r._panner.setOrientation(b, c, d)), g._emit("orientation", r._id);
				else return r._orientation
		}
		return g
	};
	Howl.prototype.pannerAttr = function() {
		var b = arguments,
			c, d;
		if (!this._webAudio) return this;
		if (0 === b.length) return this._pannerAttr;
		if (1 === b.length)
			if ("object" === typeof b[0]) c = b[0], "undefined" === typeof d && (c.pannerAttr || (c.pannerAttr = {
				coneInnerAngle: c.coneInnerAngle,
				coneOuterAngle: c.coneOuterAngle,
				coneOuterGain: c.coneOuterGain,
				distanceModel: c.distanceModel,
				maxDistance: c.maxDistance,
				refDistance: c.refDistance,
				rolloffFactor: c.rolloffFactor,
				panningModel: c.panningModel
			}), this._pannerAttr = {
				coneInnerAngle: "undefined" !== typeof c.pannerAttr.coneInnerAngle ? c.pannerAttr.coneInnerAngle : this._coneInnerAngle,
				coneOuterAngle: "undefined" !== typeof c.pannerAttr.coneOuterAngle ? c.pannerAttr.coneOuterAngle : this._coneOuterAngle,
				coneOuterGain: "undefined" !== typeof c.pannerAttr.coneOuterGain ? c.pannerAttr.coneOuterGain : this._coneOuterGain,
				distanceModel: "undefined" !== typeof c.pannerAttr.distanceModel ?
					c.pannerAttr.distanceModel : this._distanceModel,
				maxDistance: "undefined" !== typeof c.pannerAttr.maxDistance ? c.pannerAttr.maxDistance : this._maxDistance,
				refDistance: "undefined" !== typeof c.pannerAttr.refDistance ? c.pannerAttr.refDistance : this._refDistance,
				rolloffFactor: "undefined" !== typeof c.pannerAttr.rolloffFactor ? c.pannerAttr.rolloffFactor : this._rolloffFactor,
				panningModel: "undefined" !== typeof c.pannerAttr.panningModel ? c.pannerAttr.panningModel : this._panningModel
			});
			else return (b = this._soundById(parseInt(b[0],
				10))) ? b._pannerAttr : this._pannerAttr;
		else 2 === b.length && (c = b[0], d = parseInt(b[1], 10));
		d = this._getSoundIds(d);
		for (var q = 0; q < d.length; q++)
			if (b = this._soundById(d[q])) {
				var g = b._pannerAttr,
					g = {
						coneInnerAngle: "undefined" !== typeof c.coneInnerAngle ? c.coneInnerAngle : g.coneInnerAngle,
						coneOuterAngle: "undefined" !== typeof c.coneOuterAngle ? c.coneOuterAngle : g.coneOuterAngle,
						coneOuterGain: "undefined" !== typeof c.coneOuterGain ? c.coneOuterGain : g.coneOuterGain,
						distanceModel: "undefined" !== typeof c.distanceModel ? c.distanceModel : g.distanceModel,
						maxDistance: "undefined" !== typeof c.maxDistance ? c.maxDistance : g.maxDistance,
						refDistance: "undefined" !== typeof c.refDistance ? c.refDistance : g.refDistance,
						rolloffFactor: "undefined" !== typeof c.rolloffFactor ? c.rolloffFactor : g.rolloffFactor,
						panningModel: "undefined" !== typeof c.panningModel ? c.panningModel : g.panningModel
					},
					m = b._panner;
				m ? (m.coneInnerAngle = g.coneInnerAngle, m.coneOuterAngle = g.coneOuterAngle, m.coneOuterGain = g.coneOuterGain, m.distanceModel = g.distanceModel, m.maxDistance = g.maxDistance,
					m.refDistance = g.refDistance, m.rolloffFactor = g.rolloffFactor, m.panningModel = g.panningModel) : (b._pos || (b._pos = this._pos || [0, 0, -0.5]), e(b, "spatial"))
			} return this
	};
	var c = Sound.prototype.init;
	Sound.prototype.init = function() {
		var b = this._parent;
		this._orientation = b._orientation;
		this._stereo = b._stereo;
		this._pos = b._pos;
		this._pannerAttr = b._pannerAttr;
		c.call(this);
		this._stereo ? b.stereo(this._stereo) : this._pos && b.pos(this._pos[0], this._pos[1], this._pos[2], this._id)
	};
	var d = Sound.prototype.reset;
	Sound.prototype.reset =
		function() {
			var b = this._parent;
			this._orientation = b._orientation;
			this._stereo = b._stereo;
			this._pos = b._pos;
			this._pannerAttr = b._pannerAttr;
			this._stereo ? b.stereo(this._stereo) : this._pos ? b.pos(this._pos[0], this._pos[1], this._pos[2], this._id) : this._panner && (this._panner.disconnect(0), this._panner = void 0, b._refreshBuffer(this));
			return d.call(this)
		};
	var e = function(b, c) {
		"spatial" === (c || "spatial") ? (b._panner = Howler.ctx.createPanner(), b._panner.coneInnerAngle = b._pannerAttr.coneInnerAngle, b._panner.coneOuterAngle =
			b._pannerAttr.coneOuterAngle, b._panner.coneOuterGain = b._pannerAttr.coneOuterGain, b._panner.distanceModel = b._pannerAttr.distanceModel, b._panner.maxDistance = b._pannerAttr.maxDistance, b._panner.refDistance = b._pannerAttr.refDistance, b._panner.rolloffFactor = b._pannerAttr.rolloffFactor, b._panner.panningModel = b._pannerAttr.panningModel, "undefined" !== typeof b._panner.positionX ? (b._panner.positionX.setValueAtTime(b._pos[0], Howler.ctx.currentTime), b._panner.positionY.setValueAtTime(b._pos[1], Howler.ctx.currentTime),
				b._panner.positionZ.setValueAtTime(b._pos[2], Howler.ctx.currentTime)) : b._panner.setPosition(b._pos[0], b._pos[1], b._pos[2]), "undefined" !== typeof b._panner.orientationX ? (b._panner.orientationX.setValueAtTime(b._orientation[0], Howler.ctx.currentTime), b._panner.orientationY.setValueAtTime(b._orientation[1], Howler.ctx.currentTime), b._panner.orientationZ.setValueAtTime(b._orientation[2], Howler.ctx.currentTime)) : b._panner.setOrientation(b._orientation[0], b._orientation[1], b._orientation[2])) : (b._panner =
			Howler.ctx.createStereoPanner(), b._panner.pan.setValueAtTime(b._stereo, Howler.ctx.currentTime));
		b._panner.connect(b._node);
		b._paused || b._parent.pause(b._id, !0).play(b._id, !0)
	}
})();
! function(b, c) {
	"object" == typeof exports && "undefined" != typeof module ? c() : "function" == typeof define && define.amd ? define(c) : c()
}(0, function() {
	function b(b) {
		var c = this.constructor;
		return this.then(function(d) {
			return c.resolve(b()).then(function() {
				return d
			})
		}, function(d) {
			return c.resolve(b()).then(function() {
				return c.reject(d)
			})
		})
	}

	function c() {}

	function d(b) {
		if (!(this instanceof d)) throw new TypeError("Promises must be constructed via new");
		if ("function" != typeof b) throw new TypeError("not a function");
		this._state = 0;
		this._handled = !1;
		this._value = void 0;
		this._deferreds = [];
		q(b, this)
	}

	function e(b, c) {
		for (; 3 === b._state;) b = b._value;
		0 !== b._state ? (b._handled = !0, d._immediateFn(function() {
			var d = 1 === b._state ? c.onFulfilled : c.onRejected;
			if (null !== d) {
				var e;
				try {
					e = d(b._value)
				} catch (g) {
					return void l(c.promise, g)
				}
				f(c.promise, e)
			} else(1 === b._state ? f : l)(c.promise, b._value)
		})) : b._deferreds.push(c)
	}

	function f(b, c) {
		try {
			if (c === b) throw new TypeError("A promise cannot be resolved with itself.");
			if (c && ("object" == typeof c ||
					"function" == typeof c)) {
				var e = c.then;
				if (c instanceof d) return b._state = 3, b._value = c, void p(b);
				if ("function" == typeof e) return void q(function() {
					e.apply(c, arguments)
				}, b)
			}
			b._state = 1;
			b._value = c;
			p(b)
		} catch (f) {
			l(b, f)
		}
	}

	function l(b, c) {
		b._state = 2;
		b._value = c;
		p(b)
	}

	function p(b) {
		2 === b._state && 0 === b._deferreds.length && d._immediateFn(function() {
			b._handled || d._unhandledRejectionFn(b._value)
		});
		for (var c = 0, f = b._deferreds.length; f > c; c++) e(b, b._deferreds[c]);
		b._deferreds = null
	}

	function q(b, c) {
		var d = !1;
		try {
			b(function(b) {
				d ||
					(d = !0, f(c, b))
			}, function(b) {
				d || (d = !0, l(c, b))
			})
		} catch (e) {
			d || (d = !0, l(c, e))
		}
	}
	var g = setTimeout;
	d.prototype["catch"] = function(b) {
		return this.then(null, b)
	};
	d.prototype.then = function(b, d) {
		var f = new this.constructor(c);
		return e(this, new function(b, c, d) {
			this.onFulfilled = "function" == typeof b ? b : null;
			this.onRejected = "function" == typeof c ? c : null;
			this.promise = d
		}(b, d, f)), f
	};
	d.prototype["finally"] = b;
	d.all = function(b) {
		return new d(function(c, d) {
			function e(b, l) {
				try {
					if (l && ("object" == typeof l || "function" == typeof l)) {
						var n =
							l.then;
						if ("function" == typeof n) return void n.call(l, function(c) {
							e(b, c)
						}, d)
					}
					f[b] = l;
					0 == --g && c(f)
				} catch (m) {
					d(m)
				}
			}
			if (!b || "undefined" == typeof b.length) throw new TypeError("Promise.all accepts an array");
			var f = Array.prototype.slice.call(b);
			if (0 === f.length) return c([]);
			for (var g = f.length, l = 0; f.length > l; l++) e(l, f[l])
		})
	};
	d.resolve = function(b) {
		return b && "object" == typeof b && b.constructor === d ? b : new d(function(c) {
			c(b)
		})
	};
	d.reject = function(b) {
		return new d(function(c, d) {
			d(b)
		})
	};
	d.race = function(b) {
		return new d(function(c,
			d) {
			for (var e = 0, f = b.length; f > e; e++) b[e].then(c, d)
		})
	};
	d._immediateFn = "function" == typeof setImmediate && function(b) {
		setImmediate(b)
	} || function(b) {
		g(b, 0)
	};
	d._unhandledRejectionFn = function(b) {
		void 0 !== console && console && console.warn("Possible Unhandled Promise Rejection:", b)
	};
	var m = function() {
		if ("undefined" != typeof self) return self;
		if ("undefined" != typeof window) return window;
		if ("undefined" != typeof global) return global;
		throw Error("unable to locate global object");
	}();
	"Promise" in m ? m.Promise.prototype["finally"] ||
		(m.Promise.prototype["finally"] = b) : m.Promise = d
});
(function() {
	function b(b, c) {
		document.addEventListener ? b.addEventListener("scroll", c, !1) : b.attachEvent("scroll", c)
	}

	function c(b) {
		this.a = document.createElement("div");
		this.a.setAttribute("aria-hidden", "true");
		this.a.appendChild(document.createTextNode(b));
		this.b = document.createElement("span");
		this.c = document.createElement("span");
		this.h = document.createElement("span");
		this.f = document.createElement("span");
		this.g = -1;
		this.b.style.cssText = "max-width:none;display:inline-block;position:absolute;height:100%;width:100%;overflow:scroll;font-size:16px;";
		this.c.style.cssText =
			"max-width:none;display:inline-block;position:absolute;height:100%;width:100%;overflow:scroll;font-size:16px;";
		this.f.style.cssText = "max-width:none;display:inline-block;position:absolute;height:100%;width:100%;overflow:scroll;font-size:16px;";
		this.h.style.cssText = "display:inline-block;width:200%;height:200%;font-size:16px;max-width:none;";
		this.b.appendChild(this.h);
		this.c.appendChild(this.f);
		this.a.appendChild(this.b);
		this.a.appendChild(this.c)
	}

	function d(b, c) {
		b.a.style.cssText = "max-width:none;min-width:20px;min-height:20px;display:inline-block;overflow:hidden;position:absolute;width:auto;margin:0;padding:0;top:-999px;white-space:nowrap;font-synthesis:none;font:" +
			c + ";"
	}

	function e(b) {
		var c = b.a.offsetWidth,
			d = c + 100;
		b.f.style.width = d + "px";
		b.c.scrollLeft = d;
		b.b.scrollLeft = b.b.scrollWidth + 100;
		return b.g !== c ? (b.g = c, !0) : !1
	}

	function f(c, d) {
		function f() {
			var b = g;
			e(b) && b.a.parentNode && d(b.g)
		}
		var g = c;
		b(c.b, f);
		b(c.c, f);
		e(c)
	}

	function l(b, c) {
		var d = c || {};
		this.family = b;
		this.style = d.style || "normal";
		this.weight = d.weight || "normal";
		this.stretch = d.stretch || "normal"
	}

	function p() {
		null === s && (s = !!document.fonts);
		return s
	}

	function q() {
		if (null === r) {
			var b = document.createElement("div");
			try {
				b.style.font = "condensed 100px sans-serif"
			} catch (c) {}
			r = "" !== b.style.font
		}
		return r
	}

	function g(b, c) {
		return [b.style, b.weight, q() ? b.stretch : "", "100px", c].join(" ")
	}
	var m = null,
		n = null,
		r = null,
		s = null;
	l.prototype.load = function(b, e) {
		var l = this,
			q = b || "BESbswy",
			r = 0,
			s = e || 3E3,
			ba = (new Date).getTime();
		return new Promise(function(b, e) {
			var u;
			if (u = p()) null === n && (p() && /Apple/.test(window.navigator.vendor) ? (u = /AppleWebKit\/([0-9]+)(?:\.([0-9]+))(?:\.([0-9]+))/.exec(window.navigator.userAgent), n = !!u && 603 > parseInt(u[1],
				10)) : n = !1), u = !n;
			if (u) {
				u = new Promise(function(b, c) {
					function d() {
						(new Date).getTime() - ba >= s ? c(Error("" + s + "ms timeout exceeded")) : document.fonts.load(g(l, '"' + l.family + '"'), q).then(function(c) {
							1 <= c.length ? b() : setTimeout(d, 25)
						}, c)
					}
					d()
				});
				var t = new Promise(function(b, c) {
					r = setTimeout(function() {
						c(Error("" + s + "ms timeout exceeded"))
					}, s)
				});
				Promise.race([t, u]).then(function() {
					clearTimeout(r);
					b(l)
				}, e)
			} else {
				var S = function() {
					function n() {
						var c;
						if (c = -1 != U && -1 != V || -1 != U && -1 != W || -1 != V && -1 != W)(c = U != V && U != W && V != W) ||
							(null === m && (c = /AppleWebKit\/([0-9]+)(?:\.([0-9]+))/.exec(window.navigator.userAgent), m = !!c && (536 > parseInt(c[1], 10) || 536 === parseInt(c[1], 10) && 11 >= parseInt(c[2], 10))), c = m && (U == S && V == S && W == S || U == O && V == O && W == O || U == na && V == na && W == na)), c = !c;
						c && (R.parentNode && R.parentNode.removeChild(R), clearTimeout(r), b(l))
					}

					function p() {
						if ((new Date).getTime() - ba >= s) R.parentNode && R.parentNode.removeChild(R), e(Error("" + s + "ms timeout exceeded"));
						else {
							var b = document.hidden;
							if (!0 === b || void 0 === b) U = u.a.offsetWidth, V = t.a.offsetWidth,
								W = H.a.offsetWidth, n();
							r = setTimeout(p, 50)
						}
					}
					var u = new c(q),
						t = new c(q),
						H = new c(q),
						U = -1,
						V = -1,
						W = -1,
						S = -1,
						O = -1,
						na = -1,
						R = document.createElement("div");
					R.dir = "ltr";
					d(u, g(l, "sans-serif"));
					d(t, g(l, "serif"));
					d(H, g(l, "monospace"));
					R.appendChild(u.a);
					R.appendChild(t.a);
					R.appendChild(H.a);
					document.body.appendChild(R);
					S = u.a.offsetWidth;
					O = t.a.offsetWidth;
					na = H.a.offsetWidth;
					p();
					f(u, function(b) {
						U = b;
						n()
					});
					d(u, g(l, '"' + l.family + '",sans-serif'));
					f(t, function(b) {
						V = b;
						n()
					});
					d(t, g(l, '"' + l.family + '",serif'));
					f(H, function(b) {
						W =
							b;
						n()
					});
					d(H, g(l, '"' + l.family + '",monospace'))
				};
				document.body ? S() : document.addEventListener ? document.addEventListener("DOMContentLoaded", function ma() {
					document.removeEventListener("DOMContentLoaded", ma);
					S()
				}) : document.attachEvent("onreadystatechange", function Va() {
					if ("interactive" == document.readyState || "complete" == document.readyState) document.detachEvent("onreadystatechange", Va), S()
				})
			}
		})
	};
	"object" === typeof module ? module.exports = l : (window.FontFaceObserver = l, window.FontFaceObserver.prototype.load = l.prototype.load)
})();
(function(b) {
	Number.prototype.map = function(b, c, d, e) {
		return d + (e - d) * ((this - b) / (c - b))
	};
	Number.prototype.limit = function(b, c) {
		return Math.min(c, Math.max(b, this))
	};
	Number.prototype.round = function(b) {
		b = Math.pow(10, b || 0);
		return Math.round(this * b) / b
	};
	Number.prototype.floor = function() {
		return Math.floor(this)
	};
	Number.prototype.ceil = function() {
		return Math.ceil(this)
	};
	Number.prototype.toInt = function() {
		return this | 0
	};
	Number.prototype.toRad = function() {
		return this / 180 * Math.PI
	};
	Number.prototype.toDeg = function() {
		return 180 *
			this / Math.PI
	};
	Array.prototype.erase = function(b) {
		for (var c = this.length; c--;) this[c] === b && this.splice(c, 1);
		return this
	};
	Array.prototype.random = function() {
		return this[Math.floor(Math.random() * this.length)]
	};
	Function.prototype.bind = Function.prototype.bind || function(b) {
		if ("function" !== typeof this) throw new TypeError("Function.prototype.bind - what is trying to be bound is not callable");
		var c = Array.prototype.slice.call(arguments, 1),
			d = this,
			e = function() {},
			f = function() {
				return d.apply(this instanceof e && b ?
					this : b, c.concat(Array.prototype.slice.call(arguments)))
			};
		e.prototype = this.prototype;
		f.prototype = new e;
		return f
	};
	b.ig = {
		game: null,
		debug: null,
		version: "1.23",
		global: b,
		modules: {},
		resources: [],
		ready: !1,
		baked: !1,
		nocache: "",
		ua: {},
		prefix: b.ImpactPrefix || "",
		lib: "lib/",
		_current: null,
		_loadQueue: [],
		_waitForOnload: 0,
		$: function(b) {
			return "#" == b.charAt(0) ? document.getElementById(b.substr(1)) : document.getElementsByTagName(b)
		},
		$new: function(b) {
			return document.createElement(b)
		},
		copy: function(b) {
			if (!b || "object" != typeof b ||
				b instanceof HTMLElement || b instanceof ig.Class) return b;
			if (b instanceof Array)
				for (var c = [], d = 0, e = b.length; d < e; d++) c[d] = ig.copy(b[d]);
			else
				for (d in c = {}, b) c[d] = ig.copy(b[d]);
			return c
		},
		merge: function(b, c) {
			for (var d in c) {
				var e = c[d];
				if ("object" != typeof e || e instanceof HTMLElement || e instanceof ig.Class || null === e) b[d] = e;
				else {
					if (!b[d] || "object" != typeof b[d]) b[d] = e instanceof Array ? [] : {};
					ig.merge(b[d], e)
				}
			}
			return b
		},
		ksort: function(b) {
			if (!b || "object" != typeof b) return [];
			var c = [],
				d = [],
				e;
			for (e in b) c.push(e);
			c.sort();
			for (e = 0; e < c.length; e++) d.push(b[c[e]]);
			return d
		},
		setVendorAttribute: function(b, c, d) {
			var e = c.charAt(0).toUpperCase() + c.substr(1);
			b[c] = "undefined" !== typeof b.imageSmoothingEnabled ? b["ms" + e] = b["moz" + e] = b["o" + e] = d : b["ms" + e] = b["moz" + e] = b["webkit" + e] = b["o" + e] = d
		},
		getVendorAttribute: function(b, c) {
			var d = c.charAt(0).toUpperCase() + c.substr(1);
			return "undefined" !== typeof b.imageSmoothingEnabled ? b[c] || b["ms" + d] || b["moz" + d] || b["o" + d] : b[c] || b["ms" + d] || b["moz" + d] || b["webkit" + d] || b["o" + d]
		},
		normalizeVendorAttribute: function(b,
			c) {
			var d = ig.getVendorAttribute(b, c);
			!b[c] && d && (b[c] = d)
		},
		getImagePixels: function(b, c, d, e, f) {
			var l = ig.$new("canvas");
			l.width = b.width;
			l.height = b.height;
			var p = l.getContext("2d");
			ig.System.SCALE.CRISP(l, p);
			var t = ig.getVendorAttribute(p, "backingStorePixelRatio") || 1;
			ig.normalizeVendorAttribute(p, "getImageDataHD");
			var y = b.width / t,
				B = b.height / t;
			l.width = Math.ceil(y);
			l.height = Math.ceil(B);
			p.drawImage(b, 0, 0, y, B);
			return 1 === t ? p.getImageData(c, d, e, f) : p.getImageDataHD(c, d, e, f)
		},
		module: function(b) {
			if (ig._current) throw "Module '" +
				ig._current.name + "' defines nothing";
			if (ig.modules[b] && ig.modules[b].body) throw "Module '" + b + "' is already defined";
			ig._current = {
				name: b,
				requires: [],
				loaded: !1,
				body: null
			};
			ig.modules[b] = ig._current;
			ig._loadQueue.push(ig._current);
			return ig
		},
		requires: function() {
			ig._current.requires = Array.prototype.slice.call(arguments);
			return ig
		},
		defines: function(b) {
			ig._current.body = b;
			ig._current = null;
			ig._initDOMReady()
		},
		addResource: function(b) {
			ig.resources.push(b)
		},
		setNocache: function(b) {
			ig.nocache = b ? "?" + Date.now() : ""
		},
		log: function() {},
		assert: function() {},
		show: function() {},
		mark: function() {},
		_loadScript: function(b, c) {
			ig.modules[b] = {
				name: b,
				requires: [],
				loaded: !1,
				body: null
			};
			ig._waitForOnload++;
			var d = ig.prefix + ig.lib + b.replace(/\./g, "/") + ".js" + ig.nocache,
				e = ig.$new("script");
			e.type = "text/javascript";
			e.src = d;
			e.onload = function() {
				ig._waitForOnload--;
				ig._execModules()
			};
			e.onerror = function() {
				throw "Failed to load module " + b + " at " + d + " required from " + c;
			};
			ig.$("head")[0].appendChild(e)
		},
		_execModules: function() {
			for (var b = !1, c =
					0; c < ig._loadQueue.length; c++) {
				for (var d = ig._loadQueue[c], e = !0, f = 0; f < d.requires.length; f++) {
					var l = d.requires[f];
					ig.modules[l] ? ig.modules[l].loaded || (e = !1) : (e = !1, ig._loadScript(l, d.name))
				}
				e && d.body && (ig._loadQueue.splice(c, 1), d.loaded = !0, d.body(), b = !0, c--)
			}
			if (b) ig._execModules();
			else if (!ig.baked && 0 == ig._waitForOnload && 0 != ig._loadQueue.length) {
				b = [];
				for (c = 0; c < ig._loadQueue.length; c++) {
					e = [];
					l = ig._loadQueue[c].requires;
					for (f = 0; f < l.length; f++) d = ig.modules[l[f]], (!d || !d.loaded) && e.push(l[f]);
					b.push(ig._loadQueue[c].name +
						" (requires: " + e.join(", ") + ")")
				}
				throw "Unresolved (or circular?) dependencies. Most likely there's a name/path mismatch for one of the listed modules or a previous syntax error prevents a module from loading:\n" + b.join("\n");
			}
		},
		_DOMReady: function() {
			if (!ig.modules["dom.ready"].loaded) {
				if (!document.body) return setTimeout(ig._DOMReady, 13);
				ig.modules["dom.ready"].loaded = !0;
				ig._waitForOnload--;
				ig._execModules()
			}
			return 0
		},
		_boot: function() {
			document.location.href.match(/\?nocache/) && ig.setNocache(!0);
			ig.ua.pixelRatio =
				b.devicePixelRatio || 1;
			ig.ua.viewport = {
				width: b.innerWidth,
				height: b.innerHeight
			};
			ig.ua.screen = {
				width: b.screen.availWidth * ig.ua.pixelRatio,
				height: b.screen.availHeight * ig.ua.pixelRatio
			};
			ig.ua.iPhone = /iPhone/i.test(navigator.userAgent);
			ig.ua.iPhone4 = ig.ua.iPhone && 2 == ig.ua.pixelRatio;
			ig.ua.iPad = /iPad/i.test(navigator.userAgent);
			ig.ua.android = /android/i.test(navigator.userAgent);
			ig.ua.winPhone = /Windows Phone/i.test(navigator.userAgent);
			ig.ua.is_uiwebview = /(iPhone|iPod|iPad).*AppleWebKit(?!.*Safari)/i.test(navigator.userAgent);
			ig.ua.is_safari_or_uiwebview = /(iPhone|iPod|iPad).*AppleWebKit/i.test(navigator.userAgent);
			ig.ua.iOS = ig.ua.iPhone || ig.ua.iPad;
			ig.ua.iOS6_tag = /OS 6_/i.test(navigator.userAgent);
			ig.ua.iOS6 = (ig.ua.iPhone || ig.ua.iPad) && ig.ua.iOS6_tag;
			ig.ua.iOSgt5 = ig.ua.iOS && 5 < parseInt(navigator.appVersion.match(/OS (\d+)_(\d+)_?(\d+)?/)[1]);
			ig.ua.HTCONE = /HTC_One/i.test(navigator.userAgent);
			ig.ua.winPhone = /Windows Phone/i.test(navigator.userAgent);
			ig.ua.Kindle = /Silk/i.test(navigator.userAgent);
			ig.ua.touchDevice = "ontouchstart" in
				b || b.navigator.msMaxTouchPoints;
			ig.ua.mobile = ig.ua.iOS || ig.ua.android || ig.ua.iOS6 || ig.ua.winPhone || ig.ua.Kindle || /mobile/i.test(navigator.userAgent)
		},
		_initDOMReady: function() {
			ig.modules["dom.ready"] ? ig._execModules() : (ig._boot(), ig.modules["dom.ready"] = {
				requires: [],
				loaded: !1,
				body: null
			}, ig._waitForOnload++, "complete" === document.readyState ? ig._DOMReady() : (document.addEventListener("DOMContentLoaded", ig._DOMReady, !1), b.addEventListener("load", ig._DOMReady, !1)))
		}
	};
	ig.normalizeVendorAttribute(b, "requestAnimationFrame");
	if (b.requestAnimationFrame) {
		var c = 1,
			d = {};
		b.ig.setAnimation = function(e, f) {
			var l = c++;
			d[l] = !0;
			var n = function() {
				d[l] && (b.requestAnimationFrame(n, f), e())
			};
			b.requestAnimationFrame(n, f);
			return l
		};
		b.ig.clearAnimation = function(b) {
			delete d[b]
		}
	} else b.ig.setAnimation = function(c) {
		return b.setInterval(c, 1E3 / 60)
	}, b.ig.clearAnimation = function(c) {
		b.clearInterval(c)
	};
	var e = !1,
		f = /xyz/.test(function() {
			xyz
		}) ? /\bparent\b/ : /.*/,
		l = 0;
	b.ig.Class = function() {};
	var p = function(b) {
		var c = this.prototype,
			d = {},
			e;
		for (e in b) "function" ==
			typeof b[e] && "function" == typeof c[e] && f.test(b[e]) ? (d[e] = c[e], c[e] = function(b, c) {
				return function() {
					var e = this.parent;
					this.parent = d[b];
					var f = c.apply(this, arguments);
					this.parent = e;
					return f
				}
			}(e, b[e])) : c[e] = b[e]
	};
	b.ig.Class.extend = function(c) {
		function d() {
			if (!e) {
				if (this.staticInstantiate) {
					var b = this.staticInstantiate.apply(this, arguments);
					if (b) return b
				}
				for (var c in this) "object" == typeof this[c] && (this[c] = ig.copy(this[c]));
				this.init && this.init.apply(this, arguments)
			}
			return this
		}
		var m = this.prototype;
		e = !0;
		var n = new this;
		e = !1;
		for (var r in c) n[r] = "function" == typeof c[r] && "function" == typeof m[r] && f.test(c[r]) ? function(b, c) {
			return function() {
				var d = this.parent;
				this.parent = m[b];
				var e = c.apply(this, arguments);
				this.parent = d;
				return e
			}
		}(r, c[r]) : c[r];
		d.prototype = n;
		d.prototype.constructor = d;
		d.extend = b.ig.Class.extend;
		d.inject = p;
		d.classId = n.classId = ++l;
		return d
	};
	b.ImpactMixin && ig.merge(ig, b.ImpactMixin)
})(window);
ig.baked = !0;
ig.module("impact.image").defines(function() {
	ig.Image = ig.Class.extend({
		data: null,
		width: 0,
		height: 0,
		loaded: !1,
		failed: !1,
		loadCallback: null,
		path: "",
		staticInstantiate: function(b) {
			return ig.Image.cache[b] || null
		},
		init: function(b) {
			this.path = b;
			this.load()
		},
		load: function(b) {
			this.loaded ? b && b(this.path, !0) : (!this.loaded && ig.ready ? (this.loadCallback = b || null, this.data = new Image, this.data.onload = this.onload.bind(this), this.data.onerror = this.onerror.bind(this), this.data.src = ig.prefix + this.path + ig.nocache) : ig.addResource(this),
				ig.Image.cache[this.path] = this)
		},
		reload: function() {
			this.loaded = !1;
			this.data = new Image;
			this.data.onload = this.onload.bind(this);
			this.data.src = this.path + "?" + Date.now()
		},
		onload: function() {
			this.width = this.data.width;
			this.height = this.data.height;
			this.loaded = !0;
			1 != ig.system.scale && this.resize(ig.system.scale);
			this.loadCallback && this.loadCallback(this.path, !0)
		},
		onerror: function() {
			this.failed = !0;
			this.loadCallback && this.loadCallback(this.path, !1)
		},
		resize: function(b) {
			var c = ig.getImagePixels(this.data, 0, 0, this.width,
					this.height),
				d = this.width * b,
				e = this.height * b,
				f = ig.$new("canvas");
			f.width = d;
			f.height = e;
			for (var l = f.getContext("2d"), p = l.getImageData(0, 0, d, e), q = 0; q < e; q++)
				for (var g = 0; g < d; g++) {
					var m = 4 * (Math.floor(q / b) * this.width + Math.floor(g / b)),
						n = 4 * (q * d + g);
					p.data[n] = c.data[m];
					p.data[n + 1] = c.data[m + 1];
					p.data[n + 2] = c.data[m + 2];
					p.data[n + 3] = c.data[m + 3]
				}
			l.putImageData(p, 0, 0);
			this.data = f
		},
		draw: function(b, c, d, e, f, l) {
			if (this.loaded) {
				var p = ig.system.scale;
				f = (f ? f : this.width) * p;
				l = (l ? l : this.height) * p;
				ig.system.context.drawImage(this.data,
					d ? d * p : 0, e ? e * p : 0, f, l, ig.system.getDrawPos(b), ig.system.getDrawPos(c), f, l);
				ig.Image.drawCount++
			}
		},
		drawTile: function(b, c, d, e, f, l, p) {
			f = f ? f : e;
			if (this.loaded && !(e > this.width || f > this.height)) {
				var q = ig.system.scale,
					g = Math.floor(e * q),
					m = Math.floor(f * q),
					n = l ? -1 : 1,
					r = p ? -1 : 1;
				if (l || p) ig.system.context.save(), ig.system.context.scale(n, r);
				ig.system.context.drawImage(this.data, Math.floor(d * e) % this.width * q, Math.floor(d * e / this.width) * f * q, g, m, ig.system.getDrawPos(b) * n - (l ? g : 0), ig.system.getDrawPos(c) * r - (p ? m : 0), g, m);
				(l ||
					p) && ig.system.context.restore();
				ig.Image.drawCount++
			}
		}
	});
	ig.Image.drawCount = 0;
	ig.Image.cache = {};
	ig.Image.reloadCache = function() {
		for (var b in ig.Image.cache) ig.Image.cache[b].reload()
	}
});
ig.baked = !0;
ig.module("impact.font").requires("impact.image").defines(function() {
	ig.Font = ig.Image.extend({
		widthMap: [],
		indices: [],
		firstChar: 32,
		alpha: 1,
		letterSpacing: 1,
		lineSpacing: 0,
		onload: function(b) {
			this._loadMetrics(this.data);
			this.parent(b)
		},
		widthForString: function(b) {
			if (-1 !== b.indexOf("\n")) {
				b = b.split("\n");
				for (var c = 0, d = 0; d < b.length; d++) c = Math.max(c, this._widthForLine(b[d]));
				return c
			}
			return this._widthForLine(b)
		},
		_widthForLine: function(b) {
			for (var c = 0, d = 0; d < b.length; d++) c += this.widthMap[b.charCodeAt(d) - this.firstChar] +
				this.letterSpacing;
			return c
		},
		heightForString: function(b) {
			return b.split("\n").length * (this.height + this.lineSpacing)
		},
		draw: function(b, c, d, e) {
			"string" != typeof b && (b = b.toString());
			if (-1 !== b.indexOf("\n")) {
				b = b.split("\n");
				for (var f = this.height + this.lineSpacing, l = 0; l < b.length; l++) this.draw(b[l], c, d + l * f, e)
			} else {
				if (e == ig.Font.ALIGN.RIGHT || e == ig.Font.ALIGN.CENTER) l = this._widthForLine(b), c -= e == ig.Font.ALIGN.CENTER ? l / 2 : l;
				1 !== this.alpha && (ig.system.context.globalAlpha = this.alpha);
				for (l = 0; l < b.length; l++) e = b.charCodeAt(l),
					c += this._drawChar(e - this.firstChar, c, d);
				1 !== this.alpha && (ig.system.context.globalAlpha = 1);
				ig.Image.drawCount += b.length
			}
		},
		_drawChar: function(b, c, d) {
			if (!this.loaded || 0 > b || b >= this.indices.length) return 0;
			var e = ig.system.scale,
				f = this.widthMap[b] * e,
				l = (this.height - 2) * e;
			ig.system.context.drawImage(this.data, this.indices[b] * e, 0, f, l, ig.system.getDrawPos(c), ig.system.getDrawPos(d), f, l);
			return this.widthMap[b] + this.letterSpacing
		},
		_loadMetrics: function(b) {
			this.height = b.height - 1;
			this.widthMap = [];
			this.indices = [];
			for (var c = ig.getImagePixels(b, 0, b.height - 1, b.width, 1), d = 0, e = 0, f = 0; f < b.width; f++) {
				var l = 4 * f + 3;
				127 < c.data[l] ? e++ : 128 > c.data[l] && e && (this.widthMap.push(e), this.indices.push(f - e), d++, e = 0)
			}
			this.widthMap.push(e);
			this.indices.push(f - e)
		}
	});
	ig.Font.ALIGN = {
		LEFT: 0,
		RIGHT: 1,
		CENTER: 2
	}
});
ig.baked = !0;
ig.module("impact.sound").defines(function() {
	ig.SoundManager = ig.Class.extend({
		clips: {},
		volume: 1,
		format: null,
		init: function() {
			if (!ig.Sound.enabled || !window.Audio) ig.Sound.enabled = !1;
			else {
				for (var b = new Audio, c = 0; c < ig.Sound.use.length; c++) {
					var d = ig.Sound.use[c];
					if (b.canPlayType(d.mime)) {
						this.format = d;
						break
					}
				}
				this.format || (ig.Sound.enabled = !1)
			}
		},
		load: function(b, c, d) {
			var e = ig.prefix + b.replace(/[^\.]+$/, this.format.ext) + ig.nocache;
			if (this.clips[b]) {
				if (c && this.clips[b].length < ig.Sound.channels)
					for (c = this.clips[b].length; c <
						ig.Sound.channels; c++) {
						var f = new Audio(e);
						f.load();
						this.clips[b].push(f)
					}
				return this.clips[b][0]
			}
			var l = new Audio(e);
			d && (l.addEventListener("canplaythrough", function q(c) {
				l.removeEventListener("canplaythrough", q, !1);
				d(b, !0, c)
			}, !1), l.addEventListener("error", function(c) {
				d(b, !1, c)
			}, !1));
			l.preload = "auto";
			l.load();
			this.clips[b] = [l];
			if (c)
				for (c = 1; c < ig.Sound.channels; c++) f = new Audio(e), f.load(), this.clips[b].push(f);
			return l
		},
		get: function(b) {
			b = this.clips[b];
			for (var c = 0, d; d = b[c++];)
				if (d.paused || d.ended) return d.ended &&
					(d.currentTime = 0), d;
			b[0].pause();
			b[0].currentTime = 0;
			return b[0]
		}
	});
	ig.Music = ig.Class.extend({
		tracks: [],
		namedTracks: {},
		currentTrack: null,
		currentIndex: 0,
		random: !1,
		_volume: 1,
		_loop: !1,
		_fadeInterval: 0,
		_fadeTimer: null,
		_endedCallbackBound: null,
		init: function() {
			this._endedCallbackBound = this._endedCallback.bind(this);
			Object.defineProperty ? (Object.defineProperty(this, "volume", {
					get: this.getVolume.bind(this),
					set: this.setVolume.bind(this)
				}), Object.defineProperty(this, "loop", {
					get: this.getLooping.bind(this),
					set: this.setLooping.bind(this)
				})) :
				this.__defineGetter__ && (this.__defineGetter__("volume", this.getVolume.bind(this)), this.__defineSetter__("volume", this.setVolume.bind(this)), this.__defineGetter__("loop", this.getLooping.bind(this)), this.__defineSetter__("loop", this.setLooping.bind(this)))
		},
		add: function(b, c) {
			if (ig.Sound.enabled) {
				var d = ig.soundManager.load(b instanceof ig.Sound ? b.path : b, !1);
				d.loop = this._loop;
				d.volume = this._volume;
				d.addEventListener("ended", this._endedCallbackBound, !1);
				this.tracks.push(d);
				c && (this.namedTracks[c] = d);
				this.currentTrack ||
					(this.currentTrack = d)
			}
		},
		next: function() {
			this.tracks.length && (this.stop(), this.currentIndex = this.random ? Math.floor(Math.random() * this.tracks.length) : (this.currentIndex + 1) % this.tracks.length, this.currentTrack = this.tracks[this.currentIndex], this.play())
		},
		pause: function() {
			this.currentTrack && this.currentTrack.pause()
		},
		stop: function() {
			this.currentTrack && (this.currentTrack.pause(), this.currentTrack.currentTime = 0)
		},
		play: function(b) {
			if (b && this.namedTracks[b]) b = this.namedTracks[b], b != this.currentTrack && (this.stop(),
				this.currentTrack = b);
			else if (!this.currentTrack) return;
			this.currentTrack.play()
		},
		getLooping: function() {
			return this._loop
		},
		setLooping: function(b) {
			this._loop = b;
			for (var c in this.tracks) this.tracks[c].loop = b
		},
		getVolume: function() {
			return this._volume
		},
		setVolume: function(b) {
			this._volume = b.limit(0, 1);
			for (var c in this.tracks) this.tracks[c].volume = this._volume
		},
		fadeOut: function(b) {
			this.currentTrack && (clearInterval(this._fadeInterval), this.fadeTimer = new ig.Timer(b), this._fadeInterval = setInterval(this._fadeStep.bind(this),
				50))
		},
		_fadeStep: function() {
			var b = this.fadeTimer.delta().map(-this.fadeTimer.target, 0, 1, 0).limit(0, 1) * this._volume;
			0.01 >= b ? (this.stop(), this.currentTrack.volume = this._volume, clearInterval(this._fadeInterval)) : this.currentTrack.volume = b
		},
		_endedCallback: function() {
			this._loop ? this.play() : this.next()
		}
	});
	ig.Sound = ig.Class.extend({
		path: "",
		volume: 1,
		currentClip: null,
		multiChannel: !0,
		init: function(b, c) {
			this.path = b;
			this.multiChannel = !1 !== c;
			this.load()
		},
		load: function(b) {
			ig.Sound.enabled ? ig.ready ? ig.soundManager.load(this.path,
				this.multiChannel, b) : ig.addResource(this) : b && b(this.path, !0)
		},
		play: function() {
			ig.Sound.enabled && (this.currentClip = ig.soundManager.get(this.path), this.currentClip.volume = ig.soundManager.volume * this.volume, this.currentClip.play())
		},
		stop: function() {
			this.currentClip && (this.currentClip.pause(), this.currentClip.currentTime = 0)
		}
	});
	ig.Sound.FORMAT = {
		MP3: {
			ext: "mp3",
			mime: "audio/mpeg"
		},
		M4A: {
			ext: "m4a",
			mime: "audio/mp4; codecs=mp4a"
		},
		OGG: {
			ext: "ogg",
			mime: "audio/ogg; codecs=vorbis"
		},
		WEBM: {
			ext: "webm",
			mime: "audio/webm; codecs=vorbis"
		},
		CAF: {
			ext: "caf",
			mime: "audio/x-caf"
		}
	};
	ig.Sound.use = [ig.Sound.FORMAT.OGG, ig.Sound.FORMAT.MP3];
	ig.Sound.channels = 4;
	ig.Sound.enabled = !0
});
ig.baked = !0;
ig.module("impact.loader").requires("impact.image", "impact.font", "impact.sound").defines(function() {
	ig.Loader = ig.Class.extend({
		resources: [],
		gameClass: null,
		status: 0,
		done: !1,
		_unloaded: [],
		_drawStatus: 0,
		_intervalId: 0,
		_loadCallbackBound: null,
		init: function(b, c) {
			this.gameClass = b;
			this.resources = c;
			this._loadCallbackBound = this._loadCallback.bind(this);
			for (var d = 0; d < this.resources.length; d++) this._unloaded.push(this.resources[d].path)
		},
		load: function() {
			ig.system.clear("#000");
			if (this.resources.length) {
				for (var b =
						0; b < this.resources.length; b++) this.loadResource(this.resources[b]);
				this._intervalId = setInterval(this.draw.bind(this), 16)
			} else this.end()
		},
		loadResource: function(b) {
			b.load(this._loadCallbackBound)
		},
		end: function() {
			this.done || (this.done = !0, clearInterval(this._intervalId))
		},
		draw: function() {},
		_loadCallback: function(b, c) {
			if (c) this._unloaded.erase(b);
			else throw "Failed to load resource: " + b;
			this.status = 1 - this._unloaded.length / this.resources.length;
			0 == this._unloaded.length && setTimeout(this.end.bind(this), 250)
		}
	})
});
ig.baked = !0;
ig.module("impact.timer").defines(function() {
	ig.Timer = ig.Class.extend({
		target: 0,
		base: 0,
		last: 0,
		pausedAt: 0,
		init: function(b) {
			this.last = this.base = ig.Timer.time;
			this.target = b || 0
		},
		set: function(b) {
			this.target = b || 0;
			this.base = ig.Timer.time;
			this.pausedAt = 0
		},
		reset: function() {
			this.base = ig.Timer.time;
			this.pausedAt = 0
		},
		tick: function() {
			var b = ig.Timer.time - this.last;
			this.last = ig.Timer.time;
			return this.pausedAt ? 0 : b
		},
		delta: function() {
			return (this.pausedAt || ig.Timer.time) - this.base - this.target
		},
		pause: function() {
			this.pausedAt || (this.pausedAt =
				ig.Timer.time)
		},
		unpause: function() {
			this.pausedAt && (this.base += ig.Timer.time - this.pausedAt, this.pausedAt = 0)
		}
	});
	ig.Timer._last = 0;
	ig.Timer.time = Number.MIN_VALUE;
	ig.Timer.timeScale = 1;
	ig.Timer.maxStep = 0.05;
	ig.Timer.step = function() {
		var b = Date.now();
		ig.Timer.time += Math.min((b - ig.Timer._last) / 1E3, ig.Timer.maxStep) * ig.Timer.timeScale;
		ig.Timer._last = b
	}
});
ig.baked = !0;
ig.module("impact.system").requires("impact.timer", "impact.image").defines(function() {
	ig.System = ig.Class.extend({
		fps: 30,
		width: 320,
		height: 240,
		realWidth: 320,
		realHeight: 240,
		scale: 1,
		tick: 0,
		animationId: 0,
		newGameClass: null,
		running: !1,
		delegate: null,
		clock: null,
		canvas: null,
		context: null,
		init: function(b, c, d, e, f) {
			this.fps = c;
			this.clock = new ig.Timer;
			this.canvas = ig.$(b);
			this.resize(d, e, f);
			this.context = this.canvas.getContext("2d");
			this.getDrawPos = ig.System.drawMode;
			1 != this.scale && (ig.System.scaleMode = ig.System.SCALE.CRISP);
			ig.System.scaleMode(this.canvas, this.context)
		},
		resize: function(b, c, d) {
			this.width = b;
			this.height = c;
			this.scale = d || this.scale;
			this.realWidth = this.width * this.scale;
			this.realHeight = this.height * this.scale;
			this.canvas.width = this.realWidth;
			this.canvas.height = this.realHeight
		},
		setGame: function(b) {
			this.running ? this.newGameClass = b : this.setGameNow(b)
		},
		setGameNow: function(b) {
			ig.game = new b;
			ig.system.setDelegate(ig.game)
		},
		setDelegate: function(b) {
			if ("function" == typeof b.run) this.delegate = b, this.startRunLoop();
			else throw "System.setDelegate: No run() function in object";
		},
		stopRunLoop: function() {
			ig.clearAnimation(this.animationId);
			this.running = !1
		},
		startRunLoop: function() {
			this.stopRunLoop();
			this.animationId = ig.setAnimation(this.run.bind(this), this.canvas);
			this.running = !0
		},
		clear: function(b) {
			this.context.fillStyle = b;
			this.context.fillRect(0, 0, this.realWidth, this.realHeight)
		},
		run: function() {
			ig.Timer.step();
			this.tick = this.clock.tick();
			this.delegate.run();
			ig.input.clearPressed();
			this.newGameClass && (this.setGameNow(this.newGameClass), this.newGameClass = null)
		},
		getDrawPos: null
	});
	ig.System.DRAW = {
		AUTHENTIC: function(b) {
			return Math.round(b) * this.scale
		},
		SMOOTH: function(b) {
			return Math.round(b * this.scale)
		},
		SUBPIXEL: function(b) {
			return b * this.scale
		}
	};
	ig.System.drawMode = ig.System.DRAW.SMOOTH;
	ig.System.SCALE = {
		CRISP: function(b, c) {
			ig.setVendorAttribute(c, "imageSmoothingEnabled", !1);
			b.style.imageRendering = "-moz-crisp-edges";
			b.style.imageRendering = "-o-crisp-edges";
			b.style.imageRendering = "-webkit-optimize-contrast";
			b.style.imageRendering = "crisp-edges";
			b.style.msInterpolationMode = "nearest-neighbor"
		},
		SMOOTH: function(b, c) {
			ig.setVendorAttribute(c, "imageSmoothingEnabled", !0);
			b.style.imageRendering = "";
			b.style.msInterpolationMode = ""
		}
	};
	ig.System.scaleMode = ig.System.SCALE.SMOOTH
});
ig.baked = !0;
ig.module("impact.input").defines(function() {
	ig.KEY = {
		MOUSE1: -1,
		MOUSE2: -3,
		MWHEEL_UP: -4,
		MWHEEL_DOWN: -5,
		BACKSPACE: 8,
		TAB: 9,
		ENTER: 13,
		PAUSE: 19,
		CAPS: 20,
		ESC: 27,
		SPACE: 32,
		PAGE_UP: 33,
		PAGE_DOWN: 34,
		END: 35,
		HOME: 36,
		LEFT_ARROW: 37,
		UP_ARROW: 38,
		RIGHT_ARROW: 39,
		DOWN_ARROW: 40,
		INSERT: 45,
		DELETE: 46,
		_0: 48,
		_1: 49,
		_2: 50,
		_3: 51,
		_4: 52,
		_5: 53,
		_6: 54,
		_7: 55,
		_8: 56,
		_9: 57,
		A: 65,
		B: 66,
		C: 67,
		D: 68,
		E: 69,
		F: 70,
		G: 71,
		H: 72,
		I: 73,
		J: 74,
		K: 75,
		L: 76,
		M: 77,
		N: 78,
		O: 79,
		P: 80,
		Q: 81,
		R: 82,
		S: 83,
		T: 84,
		U: 85,
		V: 86,
		W: 87,
		X: 88,
		Y: 89,
		Z: 90,
		NUMPAD_0: 96,
		NUMPAD_1: 97,
		NUMPAD_2: 98,
		NUMPAD_3: 99,
		NUMPAD_4: 100,
		NUMPAD_5: 101,
		NUMPAD_6: 102,
		NUMPAD_7: 103,
		NUMPAD_8: 104,
		NUMPAD_9: 105,
		MULTIPLY: 106,
		ADD: 107,
		SUBSTRACT: 109,
		DECIMAL: 110,
		DIVIDE: 111,
		F1: 112,
		F2: 113,
		F3: 114,
		F4: 115,
		F5: 116,
		F6: 117,
		F7: 118,
		F8: 119,
		F9: 120,
		F10: 121,
		F11: 122,
		F12: 123,
		SHIFT: 16,
		CTRL: 17,
		ALT: 18,
		PLUS: 187,
		COMMA: 188,
		MINUS: 189,
		PERIOD: 190
	};
	ig.Input = ig.Class.extend({
		bindings: {},
		actions: {},
		presses: {},
		locks: {},
		delayedKeyup: {},
		isUsingMouse: !1,
		isUsingKeyboard: !1,
		isUsingAccelerometer: !1,
		mouse: {
			x: 0,
			y: 0
		},
		accel: {
			x: 0,
			y: 0,
			z: 0
		},
		initMouse: function() {
			if (!this.isUsingMouse) {
				this.isUsingMouse = !0;
				var b = this.mousewheel.bind(this);
				ig.system.canvas.addEventListener("mousewheel", b, !1);
				ig.system.canvas.addEventListener("DOMMouseScroll", b, !1);
				ig.system.canvas.addEventListener("contextmenu", this.contextmenu.bind(this), !1);
				ig.system.canvas.addEventListener("mousedown", this.keydown.bind(this), !1);
				ig.system.canvas.addEventListener("mouseup", this.keyup.bind(this), !1);
				ig.system.canvas.addEventListener("mousemove", this.mousemove.bind(this), !1);
				ig.ua.touchDevice && (ig.system.canvas.addEventListener("touchstart",
					this.keydown.bind(this), !1), ig.system.canvas.addEventListener("touchend", this.keyup.bind(this), !1), ig.system.canvas.addEventListener("touchmove", this.mousemove.bind(this), !1), ig.system.canvas.addEventListener("MSPointerDown", this.keydown.bind(this), !1), ig.system.canvas.addEventListener("MSPointerUp", this.keyup.bind(this), !1), ig.system.canvas.addEventListener("MSPointerMove", this.mousemove.bind(this), !1), ig.system.canvas.style.msTouchAction = "none")
			}
		},
		initKeyboard: function() {
			this.isUsingKeyboard || (this.isUsingKeyboard = !0, window.addEventListener("keydown", this.keydown.bind(this), !1), window.addEventListener("keyup", this.keyup.bind(this), !1))
		},
		initAccelerometer: function() {
			this.isUsingAccelerometer || window.addEventListener("devicemotion", this.devicemotion.bind(this), !1)
		},
		mousewheel: function(b) {
			var c = this.bindings[0 < (b.wheelDelta ? b.wheelDelta : -1 * b.detail) ? ig.KEY.MWHEEL_UP : ig.KEY.MWHEEL_DOWN];
			c && (this.actions[c] = !0, this.presses[c] = !0, this.delayedKeyup[c] = !0, b.stopPropagation(), b.preventDefault())
		},
		mousemove: function(b) {
			var c =
				parseInt(ig.system.canvas.offsetWidth) || ig.system.realWidth,
				c = ig.system.scale * (c / ig.system.realWidth),
				d = {
					left: 0,
					top: 0
				};
			ig.system.canvas.getBoundingClientRect && (d = ig.system.canvas.getBoundingClientRect());
			b = b.touches ? b.touches[0] : b;
			this.mouse.x = (b.clientX - d.left) / c;
			this.mouse.y = (b.clientY - d.top) / c
		},
		contextmenu: function(b) {
			this.bindings[ig.KEY.MOUSE2] && (b.stopPropagation(), b.preventDefault())
		},
		keydown: function(b) {
			var c = b.target.tagName;
			if (!("INPUT" == c || "TEXTAREA" == c))
				if (c = "keydown" == b.type ? b.keyCode :
					2 == b.button ? ig.KEY.MOUSE2 : ig.KEY.MOUSE1, ("touchstart" == b.type || "mousedown" == b.type) && this.mousemove(b), c = this.bindings[c]) this.actions[c] = !0, this.locks[c] || (this.presses[c] = !0, this.locks[c] = !0), b.stopPropagation(), b.preventDefault()
		},
		keyup: function(b) {
			var c = b.target.tagName;
			if (!("INPUT" == c || "TEXTAREA" == c))
				if (c = this.bindings["keyup" == b.type ? b.keyCode : 2 == b.button ? ig.KEY.MOUSE2 : ig.KEY.MOUSE1]) this.delayedKeyup[c] = !0, b.stopPropagation(), b.preventDefault()
		},
		devicemotion: function(b) {
			this.accel = b.accelerationIncludingGravity
		},
		bind: function(b, c) {
			0 > b ? this.initMouse() : 0 < b && this.initKeyboard();
			this.bindings[b] = c
		},
		bindTouch: function(b, c) {
			var d = ig.$(b),
				e = this;
			d.addEventListener("touchstart", function(b) {
				e.touchStart(b, c)
			}, !1);
			d.addEventListener("touchend", function(b) {
				e.touchEnd(b, c)
			}, !1);
			d.addEventListener("MSPointerDown", function(b) {
				e.touchStart(b, c)
			}, !1);
			d.addEventListener("MSPointerUp", function(b) {
				e.touchEnd(b, c)
			}, !1)
		},
		unbind: function(b) {
			this.delayedKeyup[this.bindings[b]] = !0;
			this.bindings[b] = null
		},
		unbindAll: function() {
			this.bindings = {};
			this.actions = {};
			this.presses = {};
			this.locks = {};
			this.delayedKeyup = {}
		},
		state: function(b) {
			return this.actions[b]
		},
		pressed: function(b) {
			return this.presses[b]
		},
		released: function(b) {
			return !!this.delayedKeyup[b]
		},
		clearPressed: function() {
			for (var b in this.delayedKeyup) this.actions[b] = !1, this.locks[b] = !1;
			this.delayedKeyup = {};
			this.presses = {}
		},
		touchStart: function(b, c) {
			this.actions[c] = !0;
			this.presses[c] = !0;
			b.stopPropagation();
			b.preventDefault();
			return !1
		},
		touchEnd: function(b, c) {
			this.delayedKeyup[c] = !0;
			b.stopPropagation();
			b.preventDefault();
			return !1
		}
	})
});
ig.baked = !0;
ig.module("impact.impact").requires("dom.ready", "impact.loader", "impact.system", "impact.input", "impact.sound").defines(function() {
	ig.main = function(b, c, d, e, f, l, p) {
		ig.system = new ig.System(b, d, e, f, l || 1);
		ig.input = new ig.Input;
		ig.soundManager = new ig.SoundManager;
		ig.music = new ig.Music;
		ig.ready = !0;
		(new(p || ig.Loader)(c, ig.resources)).load()
	}
});
ig.baked = !0;
ig.module("impact.animation").requires("impact.timer", "impact.image").defines(function() {
	ig.AnimationSheet = ig.Class.extend({
		width: 8,
		height: 8,
		image: null,
		init: function(b, c, d) {
			this.width = c;
			this.height = d;
			this.image = new ig.Image(b)
		}
	});
	ig.Animation = ig.Class.extend({
		sheet: null,
		timer: null,
		sequence: [],
		flip: {
			x: !1,
			y: !1
		},
		pivot: {
			x: 0,
			y: 0
		},
		frame: 0,
		tile: 0,
		loopCount: 0,
		alpha: 1,
		angle: 0,
		init: function(b, c, d, e) {
			this.sheet = b;
			this.pivot = {
				x: b.width / 2,
				y: b.height / 2
			};
			this.timer = new ig.Timer;
			this.frameTime = c;
			this.sequence = d;
			this.stop = !!e;
			this.tile = this.sequence[0]
		},
		rewind: function() {
			this.timer.set();
			this.frame = this.loopCount = 0;
			this.tile = this.sequence[0];
			return this
		},
		gotoFrame: function(b) {
			this.timer.set(this.frameTime * -b - 1E-4);
			this.update()
		},
		gotoRandomFrame: function() {
			this.gotoFrame(Math.floor(Math.random() * this.sequence.length))
		},
		update: function() {
			var b = Math.floor(this.timer.delta() / this.frameTime);
			this.loopCount = Math.floor(b / this.sequence.length);
			this.frame = this.stop && 0 < this.loopCount ? this.sequence.length - 1 : b % this.sequence.length;
			this.tile = this.sequence[this.frame]
		},
		draw: function(b, c) {
			var d = Math.max(this.sheet.width, this.sheet.height);
			b > ig.system.width || c > ig.system.height || (0 > b + d || 0 > c + d) || (1 != this.alpha && (ig.system.context.globalAlpha = this.alpha), 0 == this.angle ? this.sheet.image.drawTile(b, c, this.tile, this.sheet.width, this.sheet.height, this.flip.x, this.flip.y) : (ig.system.context.save(), ig.system.context.translate(ig.system.getDrawPos(b + this.pivot.x), ig.system.getDrawPos(c + this.pivot.y)), ig.system.context.rotate(this.angle),
				this.sheet.image.drawTile(-this.pivot.x, -this.pivot.y, this.tile, this.sheet.width, this.sheet.height, this.flip.x, this.flip.y), ig.system.context.restore()), 1 != this.alpha && (ig.system.context.globalAlpha = 1))
		}
	})
});
ig.baked = !0;
ig.module("impact.entity").requires("impact.animation", "impact.impact").defines(function() {
	ig.Entity = ig.Class.extend({
		id: 0,
		settings: {},
		size: {
			x: 16,
			y: 16
		},
		offset: {
			x: 0,
			y: 0
		},
		pos: {
			x: 0,
			y: 0
		},
		last: {
			x: 0,
			y: 0
		},
		vel: {
			x: 0,
			y: 0
		},
		accel: {
			x: 0,
			y: 0
		},
		friction: {
			x: 0,
			y: 0
		},
		maxVel: {
			x: 100,
			y: 100
		},
		zIndex: 0,
		gravityFactor: 1,
		standing: !1,
		bounciness: 0,
		minBounceVelocity: 40,
		anims: {},
		animSheet: null,
		currentAnim: null,
		health: 10,
		type: 0,
		checkAgainst: 0,
		collides: 0,
		_killed: !1,
		slopeStanding: {
			min: (44).toRad(),
			max: (136).toRad()
		},
		init: function(b,
			c, d) {
			this.id = ++ig.Entity._lastId;
			this.pos.x = this.last.x = b;
			this.pos.y = this.last.y = c;
			ig.merge(this, d)
		},
		reset: function(b, c, d) {
			var e = this.constructor.prototype;
			this.pos.x = b;
			this.pos.y = c;
			this.last.x = b;
			this.last.y = c;
			this.vel.x = e.vel.x;
			this.vel.y = e.vel.y;
			this.accel.x = e.accel.x;
			this.accel.y = e.accel.y;
			this.health = e.health;
			this._killed = e._killed;
			this.standing = e.standing;
			this.type = e.type;
			this.checkAgainst = e.checkAgainst;
			this.collides = e.collides;
			ig.merge(this, d)
		},
		addAnim: function(b, c, d, e) {
			if (!this.animSheet) throw "No animSheet to add the animation " +
				b + " to.";
			c = new ig.Animation(this.animSheet, c, d, e);
			this.anims[b] = c;
			this.currentAnim || (this.currentAnim = c);
			return c
		},
		update: function() {
			this.last.x = this.pos.x;
			this.last.y = this.pos.y;
			this.vel.y += ig.game.gravity * ig.system.tick * this.gravityFactor;
			this.vel.x = this.getNewVelocity(this.vel.x, this.accel.x, this.friction.x, this.maxVel.x);
			this.vel.y = this.getNewVelocity(this.vel.y, this.accel.y, this.friction.y, this.maxVel.y);
			var b = ig.game.collisionMap.trace(this.pos.x, this.pos.y, this.vel.x * ig.system.tick, this.vel.y *
				ig.system.tick, this.size.x, this.size.y);
			this.handleMovementTrace(b);
			this.currentAnim && this.currentAnim.update()
		},
		getNewVelocity: function(b, c, d, e) {
			return c ? (b + c * ig.system.tick).limit(-e, e) : d ? (c = d * ig.system.tick, 0 < b - c ? b - c : 0 > b + c ? b + c : 0) : b.limit(-e, e)
		},
		handleMovementTrace: function(b) {
			this.standing = !1;
			b.collision.y && (0 < this.bounciness && Math.abs(this.vel.y) > this.minBounceVelocity ? this.vel.y *= -this.bounciness : (0 < this.vel.y && (this.standing = !0), this.vel.y = 0));
			b.collision.x && (this.vel.x = 0 < this.bounciness && Math.abs(this.vel.x) >
				this.minBounceVelocity ? this.vel.x * -this.bounciness : 0);
			if (b.collision.slope) {
				var c = b.collision.slope;
				if (0 < this.bounciness) {
					var d = this.vel.x * c.nx + this.vel.y * c.ny;
					this.vel.x = (this.vel.x - 2 * c.nx * d) * this.bounciness;
					this.vel.y = (this.vel.y - 2 * c.ny * d) * this.bounciness
				} else d = (this.vel.x * c.x + this.vel.y * c.y) / (c.x * c.x + c.y * c.y), this.vel.x = c.x * d, this.vel.y = c.y * d, c = Math.atan2(c.x, c.y), c > this.slopeStanding.min && c < this.slopeStanding.max && (this.standing = !0)
			}
			this.pos = b.pos
		},
		draw: function() {
			this.currentAnim && this.currentAnim.draw(this.pos.x -
				this.offset.x - ig.game._rscreen.x, this.pos.y - this.offset.y - ig.game._rscreen.y)
		},
		kill: function() {
			ig.game.removeEntity(this)
		},
		receiveDamage: function(b) {
			this.health -= b;
			0 >= this.health && this.kill()
		},
		touches: function(b) {
			return !(this.pos.x >= b.pos.x + b.size.x || this.pos.x + this.size.x <= b.pos.x || this.pos.y >= b.pos.y + b.size.y || this.pos.y + this.size.y <= b.pos.y)
		},
		distanceTo: function(b) {
			var c = this.pos.x + this.size.x / 2 - (b.pos.x + b.size.x / 2);
			b = this.pos.y + this.size.y / 2 - (b.pos.y + b.size.y / 2);
			return Math.sqrt(c * c + b * b)
		},
		angleTo: function(b) {
			return Math.atan2(b.pos.y +
				b.size.y / 2 - (this.pos.y + this.size.y / 2), b.pos.x + b.size.x / 2 - (this.pos.x + this.size.x / 2))
		},
		check: function() {},
		collideWith: function() {},
		ready: function() {},
		erase: function() {}
	});
	ig.Entity._lastId = 0;
	ig.Entity.COLLIDES = {
		NEVER: 0,
		LITE: 1,
		PASSIVE: 2,
		ACTIVE: 4,
		FIXED: 8
	};
	ig.Entity.TYPE = {
		NONE: 0,
		A: 1,
		B: 2,
		BOTH: 3
	};
	ig.Entity.checkPair = function(b, c) {
		b.checkAgainst & c.type && b.check(c);
		c.checkAgainst & b.type && c.check(b);
		b.collides && c.collides && b.collides + c.collides > ig.Entity.COLLIDES.ACTIVE && ig.Entity.solveCollision(b, c)
	};
	ig.Entity.solveCollision =
		function(b, c) {
			var d = null;
			if (b.collides == ig.Entity.COLLIDES.LITE || c.collides == ig.Entity.COLLIDES.FIXED) d = b;
			else if (c.collides == ig.Entity.COLLIDES.LITE || b.collides == ig.Entity.COLLIDES.FIXED) d = c;
			b.last.x + b.size.x > c.last.x && b.last.x < c.last.x + c.size.x ? (b.last.y < c.last.y ? ig.Entity.seperateOnYAxis(b, c, d) : ig.Entity.seperateOnYAxis(c, b, d), b.collideWith(c, "y"), c.collideWith(b, "y")) : b.last.y + b.size.y > c.last.y && b.last.y < c.last.y + c.size.y && (b.last.x < c.last.x ? ig.Entity.seperateOnXAxis(b, c, d) : ig.Entity.seperateOnXAxis(c,
				b, d), b.collideWith(c, "x"), c.collideWith(b, "x"))
		};
	ig.Entity.seperateOnXAxis = function(b, c, d) {
		var e = b.pos.x + b.size.x - c.pos.x;
		d ? (d.vel.x = -d.vel.x * d.bounciness + (b === d ? c : b).vel.x, c = ig.game.collisionMap.trace(d.pos.x, d.pos.y, d == b ? -e : e, 0, d.size.x, d.size.y), d.pos.x = c.pos.x) : (d = (b.vel.x - c.vel.x) / 2, b.vel.x = -d, c.vel.x = d, d = ig.game.collisionMap.trace(b.pos.x, b.pos.y, -e / 2, 0, b.size.x, b.size.y), b.pos.x = Math.floor(d.pos.x), b = ig.game.collisionMap.trace(c.pos.x, c.pos.y, e / 2, 0, c.size.x, c.size.y), c.pos.x = Math.ceil(b.pos.x))
	};
	ig.Entity.seperateOnYAxis = function(b, c, d) {
		var e = b.pos.y + b.size.y - c.pos.y;
		if (d) {
			c = b === d ? c : b;
			d.vel.y = -d.vel.y * d.bounciness + c.vel.y;
			var f = 0;
			d == b && Math.abs(d.vel.y - c.vel.y) < d.minBounceVelocity && (d.standing = !0, f = c.vel.x * ig.system.tick);
			b = ig.game.collisionMap.trace(d.pos.x, d.pos.y, f, d == b ? -e : e, d.size.x, d.size.y);
			d.pos.y = b.pos.y;
			d.pos.x = b.pos.x
		} else ig.game.gravity && (c.standing || 0 < b.vel.y) ? (d = ig.game.collisionMap.trace(b.pos.x, b.pos.y, 0, -(b.pos.y + b.size.y - c.pos.y), b.size.x, b.size.y), b.pos.y = d.pos.y, 0 < b.bounciness &&
			b.vel.y > b.minBounceVelocity ? b.vel.y *= -b.bounciness : (b.standing = !0, b.vel.y = 0)) : (d = (b.vel.y - c.vel.y) / 2, b.vel.y = -d, c.vel.y = d, f = c.vel.x * ig.system.tick, d = ig.game.collisionMap.trace(b.pos.x, b.pos.y, f, -e / 2, b.size.x, b.size.y), b.pos.y = d.pos.y, b = ig.game.collisionMap.trace(c.pos.x, c.pos.y, 0, e / 2, c.size.x, c.size.y), c.pos.y = b.pos.y)
	}
});
ig.baked = !0;
ig.module("impact.map").defines(function() {
	ig.Map = ig.Class.extend({
		tilesize: 8,
		width: 1,
		height: 1,
		data: [
			[]
		],
		name: null,
		init: function(b, c) {
			this.tilesize = b;
			this.data = c;
			this.height = c.length;
			this.width = c[0].length;
			this.pxWidth = this.width * this.tilesize;
			this.pxHeight = this.height * this.tilesize
		},
		getTile: function(b, c) {
			var d = Math.floor(b / this.tilesize),
				e = Math.floor(c / this.tilesize);
			return 0 <= d && d < this.width && 0 <= e && e < this.height ? this.data[e][d] : 0
		},
		setTile: function(b, c, d) {
			b = Math.floor(b / this.tilesize);
			c = Math.floor(c /
				this.tilesize);
			0 <= b && b < this.width && 0 <= c && c < this.height && (this.data[c][b] = d)
		}
	})
});
ig.baked = !0;
ig.module("impact.collision-map").requires("impact.map").defines(function() {
	ig.CollisionMap = ig.Map.extend({
		lastSlope: 1,
		tiledef: null,
		init: function(b, c, f) {
			this.parent(b, c);
			this.tiledef = f || ig.CollisionMap.defaultTileDef;
			for (var l in this.tiledef) l | 0 > this.lastSlope && (this.lastSlope = l | 0)
		},
		trace: function(b, c, f, l, p, q) {
			var g = {
					collision: {
						x: !1,
						y: !1,
						slope: !1
					},
					pos: {
						x: b,
						y: c
					},
					tile: {
						x: 0,
						y: 0
					}
				},
				m = Math.ceil(Math.max(Math.abs(f), Math.abs(l)) / this.tilesize);
			if (1 < m)
				for (var n = f / m, r = l / m, s = 0; s < m && (n || r) && !(this._traceStep(g,
						b, c, n, r, p, q, f, l, s), b = g.pos.x, c = g.pos.y, g.collision.x && (f = n = 0), g.collision.y && (l = r = 0), g.collision.slope); s++);
			else this._traceStep(g, b, c, f, l, p, q, f, l, 0);
			return g
		},
		_traceStep: function(b, c, f, l, p, q, g, m, n, r) {
			b.pos.x += l;
			b.pos.y += p;
			var s = 0;
			if (l) {
				var u = 0 < l ? q : 0,
					t = 0 > l ? this.tilesize : 0,
					s = Math.max(Math.floor(f / this.tilesize), 0),
					y = Math.min(Math.ceil((f + g) / this.tilesize), this.height);
				l = Math.floor((b.pos.x + u) / this.tilesize);
				var B = Math.floor((c + u) / this.tilesize);
				if (0 < r || l == B || 0 > B || B >= this.width) B = -1;
				if (0 <= l && l < this.width)
					for (var G =
							s; G < y && !(-1 != B && (s = this.data[G][B], 1 < s && s <= this.lastSlope && this._checkTileDef(b, s, c, f, m, n, q, g, B, G))); G++)
						if (s = this.data[G][l], 1 == s || s > this.lastSlope || 1 < s && this._checkTileDef(b, s, c, f, m, n, q, g, l, G)) {
							if (1 < s && s <= this.lastSlope && b.collision.slope) break;
							b.collision.x = !0;
							b.tile.x = s;
							c = b.pos.x = l * this.tilesize - u + t;
							m = 0;
							break
						}
			}
			if (p) {
				u = 0 < p ? g : 0;
				p = 0 > p ? this.tilesize : 0;
				s = Math.max(Math.floor(b.pos.x / this.tilesize), 0);
				t = Math.min(Math.ceil((b.pos.x + q) / this.tilesize), this.width);
				G = Math.floor((b.pos.y + u) / this.tilesize);
				y = Math.floor((f + u) / this.tilesize);
				if (0 < r || G == y || 0 > y || y >= this.height) y = -1;
				if (0 <= G && G < this.height)
					for (l = s; l < t && !(-1 != y && (s = this.data[y][l], 1 < s && s <= this.lastSlope && this._checkTileDef(b, s, c, f, m, n, q, g, l, y))); l++)
						if (s = this.data[G][l], 1 == s || s > this.lastSlope || 1 < s && this._checkTileDef(b, s, c, f, m, n, q, g, l, G)) {
							if (1 < s && s <= this.lastSlope && b.collision.slope) break;
							b.collision.y = !0;
							b.tile.y = s;
							b.pos.y = G * this.tilesize - u + p;
							break
						}
			}
		},
		_checkTileDef: function(b, c, f, l, p, q, g, m, n, r) {
			var s = this.tiledef[c];
			if (!s) return !1;
			c = (s[2] -
				s[0]) * this.tilesize;
			var u = (s[3] - s[1]) * this.tilesize,
				t = s[4];
			g = f + p + (0 > u ? g : 0) - (n + s[0]) * this.tilesize;
			m = l + q + (0 < c ? m : 0) - (r + s[1]) * this.tilesize;
			if (0 < c * m - u * g) {
				if (0 > p * -u + q * c) return t;
				n = Math.sqrt(c * c + u * u);
				r = u / n;
				n = -c / n;
				var y = g * r + m * n,
					s = r * y,
					y = n * y;
				if (s * s + y * y >= p * p + q * q) return t || 0.5 > c * (m - q) - u * (g - p);
				b.pos.x = f + p - s;
				b.pos.y = l + q - y;
				b.collision.slope = {
					x: c,
					y: u,
					nx: r,
					ny: n
				};
				return !0
			}
			return !1
		}
	});
	var b = 1 / 3,
		c = 2 / 3;
	ig.CollisionMap.defaultTileDef = {
		5: [0, 1, 1, c, !0],
		6: [0, c, 1, b, !0],
		7: [0, b, 1, 0, !0],
		3: [0, 1, 1, 0.5, !0],
		4: [0, 0.5, 1, 0, !0],
		2: [0,
			1, 1, 0, !0
		],
		10: [0.5, 1, 1, 0, !0],
		21: [0, 1, 0.5, 0, !0],
		32: [c, 1, 1, 0, !0],
		43: [b, 1, c, 0, !0],
		54: [0, 1, b, 0, !0],
		27: [0, 0, 1, b, !0],
		28: [0, b, 1, c, !0],
		29: [0, c, 1, 1, !0],
		25: [0, 0, 1, 0.5, !0],
		26: [0, 0.5, 1, 1, !0],
		24: [0, 0, 1, 1, !0],
		11: [0, 0, 0.5, 1, !0],
		22: [0.5, 0, 1, 1, !0],
		33: [0, 0, b, 1, !0],
		44: [b, 0, c, 1, !0],
		55: [c, 0, 1, 1, !0],
		16: [1, b, 0, 0, !0],
		17: [1, c, 0, b, !0],
		18: [1, 1, 0, c, !0],
		14: [1, 0.5, 0, 0, !0],
		15: [1, 1, 0, 0.5, !0],
		13: [1, 1, 0, 0, !0],
		8: [0.5, 1, 0, 0, !0],
		19: [1, 1, 0.5, 0, !0],
		30: [b, 1, 0, 0, !0],
		41: [c, 1, b, 0, !0],
		52: [1, 1, c, 0, !0],
		38: [1, c, 0, 1, !0],
		39: [1, b, 0, c, !0],
		40: [1, 0,
			0, b, !0
		],
		36: [1, 0.5, 0, 1, !0],
		37: [1, 0, 0, 0.5, !0],
		35: [1, 0, 0, 1, !0],
		9: [1, 0, 0.5, 1, !0],
		20: [0.5, 0, 0, 1, !0],
		31: [1, 0, c, 1, !0],
		42: [c, 0, b, 1, !0],
		53: [b, 0, 0, 1, !0],
		12: [0, 0, 1, 0, !1],
		23: [1, 1, 0, 1, !1],
		34: [1, 0, 1, 1, !1],
		45: [0, 1, 0, 0, !1]
	};
	ig.CollisionMap.staticNoCollision = {
		trace: function(b, c, f, l) {
			return {
				collision: {
					x: !1,
					y: !1,
					slope: !1
				},
				pos: {
					x: b + f,
					y: c + l
				},
				tile: {
					x: 0,
					y: 0
				}
			}
		}
	}
});
ig.baked = !0;
ig.module("impact.background-map").requires("impact.map", "impact.image").defines(function() {
	ig.BackgroundMap = ig.Map.extend({
		tiles: null,
		scroll: {
			x: 0,
			y: 0
		},
		distance: 1,
		repeat: !1,
		tilesetName: "",
		foreground: !1,
		enabled: !0,
		preRender: !1,
		preRenderedChunks: null,
		chunkSize: 512,
		debugChunks: !1,
		anims: {},
		init: function(b, c, d) {
			this.parent(b, c);
			this.setTileset(d)
		},
		setTileset: function(b) {
			this.tilesetName = b instanceof ig.Image ? b.path : b;
			this.tiles = new ig.Image(this.tilesetName);
			this.preRenderedChunks = null
		},
		setScreenPos: function(b,
			c) {
			this.scroll.x = b / this.distance;
			this.scroll.y = c / this.distance
		},
		preRenderMapToChunks: function() {
			var b = this.width * this.tilesize * ig.system.scale,
				c = this.height * this.tilesize * ig.system.scale;
			this.chunkSize = Math.min(Math.max(b, c), this.chunkSize);
			var d = Math.ceil(b / this.chunkSize),
				e = Math.ceil(c / this.chunkSize);
			this.preRenderedChunks = [];
			for (var f = 0; f < e; f++) {
				this.preRenderedChunks[f] = [];
				for (var l = 0; l < d; l++) this.preRenderedChunks[f][l] = this.preRenderChunk(l, f, l == d - 1 ? b - l * this.chunkSize : this.chunkSize, f == e - 1 ?
					c - f * this.chunkSize : this.chunkSize)
			}
		},
		preRenderChunk: function(b, c, d, e) {
			var f = d / this.tilesize / ig.system.scale + 1,
				l = e / this.tilesize / ig.system.scale + 1,
				p = b * this.chunkSize / ig.system.scale % this.tilesize,
				q = c * this.chunkSize / ig.system.scale % this.tilesize;
			b = Math.floor(b * this.chunkSize / this.tilesize / ig.system.scale);
			c = Math.floor(c * this.chunkSize / this.tilesize / ig.system.scale);
			var g = ig.$new("canvas");
			g.width = d;
			g.height = e;
			g.retinaResolutionEnabled = !1;
			e = g.getContext("2d");
			ig.System.scaleMode(g, e);
			d = ig.system.context;
			ig.system.context = e;
			for (e = 0; e < f; e++)
				for (var m = 0; m < l; m++)
					if (e + b < this.width && m + c < this.height) {
						var n = this.data[m + c][e + b];
						n && this.tiles.drawTile(e * this.tilesize - p, m * this.tilesize - q, n - 1, this.tilesize)
					} ig.system.context = d;
			return g
		},
		draw: function() {
			this.tiles.loaded && this.enabled && (this.preRender ? this.drawPreRendered() : this.drawTiled())
		},
		drawPreRendered: function() {
			this.preRenderedChunks || this.preRenderMapToChunks();
			var b = ig.system.getDrawPos(this.scroll.x),
				c = ig.system.getDrawPos(this.scroll.y);
			if (this.repeat) var d =
				this.width * this.tilesize * ig.system.scale,
				b = (b % d + d) % d,
				d = this.height * this.tilesize * ig.system.scale,
				c = (c % d + d) % d;
			var d = Math.max(Math.floor(b / this.chunkSize), 0),
				e = Math.max(Math.floor(c / this.chunkSize), 0),
				f = Math.ceil((b + ig.system.realWidth) / this.chunkSize),
				l = Math.ceil((c + ig.system.realHeight) / this.chunkSize),
				p = this.preRenderedChunks[0].length,
				q = this.preRenderedChunks.length;
			this.repeat || (f = Math.min(f, p), l = Math.min(l, q));
			for (var g = 0; e < l; e++) {
				for (var m = 0, n = d; n < f; n++) {
					var r = this.preRenderedChunks[e % q][n % p],
						s = -b + n * this.chunkSize - m,
						u = -c + e * this.chunkSize - g;
					ig.system.context.drawImage(r, s, u);
					ig.Image.drawCount++;
					this.debugChunks && (ig.system.context.strokeStyle = "#f0f", ig.system.context.strokeRect(s, u, this.chunkSize, this.chunkSize));
					this.repeat && r.width < this.chunkSize && s + r.width < ig.system.realWidth && (m += this.chunkSize - r.width, f++)
				}
				this.repeat && r.height < this.chunkSize && u + r.height < ig.system.realHeight && (g += this.chunkSize - r.height, l++)
			}
		},
		drawTiled: function() {
			for (var b = 0, c = null, d = (this.scroll.x / this.tilesize).toInt(),
					e = (this.scroll.y / this.tilesize).toInt(), f = this.scroll.x % this.tilesize, l = this.scroll.y % this.tilesize, p = -f - this.tilesize, f = ig.system.width + this.tilesize - f, q = ig.system.height + this.tilesize - l, g = -1, l = -l - this.tilesize; l < q; g++, l += this.tilesize) {
				var m = g + e;
				if (m >= this.height || 0 > m) {
					if (!this.repeat) continue;
					m = (m % this.height + this.height) % this.height
				}
				for (var n = -1, r = p; r < f; n++, r += this.tilesize) {
					b = n + d;
					if (b >= this.width || 0 > b) {
						if (!this.repeat) continue;
						b = (b % this.width + this.width) % this.width
					}
					if (b = this.data[m][b])(c = this.anims[b -
						1]) ? c.draw(r, l) : this.tiles.drawTile(r, l, b - 1, this.tilesize)
				}
			}
		}
	})
});
ig.baked = !0;
ig.module("impact.game").requires("impact.impact", "impact.entity", "impact.collision-map", "impact.background-map").defines(function() {
	ig.Game = ig.Class.extend({
		clearColor: "#000000",
		gravity: 0,
		screen: {
			x: 0,
			y: 0
		},
		_rscreen: {
			x: 0,
			y: 0
		},
		entities: [],
		namedEntities: {},
		collisionMap: ig.CollisionMap.staticNoCollision,
		backgroundMaps: [],
		backgroundAnims: {},
		autoSort: !1,
		sortBy: null,
		cellSize: 64,
		_deferredKill: [],
		_levelToLoad: null,
		_doSortEntities: !1,
		staticInstantiate: function() {
			this.sortBy = this.sortBy || ig.Game.SORT.Z_INDEX;
			ig.game = this;
			return null
		},
		loadLevel: function(b) {
			this.screen = {
				x: 0,
				y: 0
			};
			this.entities = [];
			this.namedEntities = {};
			for (var c = 0; c < b.entities.length; c++) {
				var d = b.entities[c];
				this.spawnEntity(d.type, d.x, d.y, d.settings)
			}
			this.sortEntities();
			this.collisionMap = ig.CollisionMap.staticNoCollision;
			this.backgroundMaps = [];
			for (c = 0; c < b.layer.length; c++)
				if (d = b.layer[c], "collision" == d.name) this.collisionMap = new ig.CollisionMap(d.tilesize, d.data);
				else {
					var e = new ig.BackgroundMap(d.tilesize, d.data, d.tilesetName);
					e.anims = this.backgroundAnims[d.tilesetName] || {};
					e.repeat = d.repeat;
					e.distance = d.distance;
					e.foreground = !!d.foreground;
					e.preRender = !!d.preRender;
					e.name = d.name;
					this.backgroundMaps.push(e)
				} for (c = 0; c < this.entities.length; c++) this.entities[c].ready()
		},
		loadLevelDeferred: function(b) {
			this._levelToLoad = b
		},
		getMapByName: function(b) {
			if ("collision" == b) return this.collisionMap;
			for (var c = 0; c < this.backgroundMaps.length; c++)
				if (this.backgroundMaps[c].name == b) return this.backgroundMaps[c];
			return null
		},
		getEntityByName: function(b) {
			return this.namedEntities[b]
		},
		getEntitiesByType: function(b) {
			b =
				"string" === typeof b ? ig.global[b] : b;
			for (var c = [], d = 0; d < this.entities.length; d++) {
				var e = this.entities[d];
				e instanceof b && !e._killed && c.push(e)
			}
			return c
		},
		spawnEntity: function(b, c, d, e) {
			var f = "string" === typeof b ? ig.global[b] : b;
			if (!f) throw "Can't spawn entity of type " + b;
			b = new f(c, d, e || {});
			this.entities.push(b);
			b.name && (this.namedEntities[b.name] = b);
			return b
		},
		sortEntities: function() {
			this.entities.sort(this.sortBy)
		},
		sortEntitiesDeferred: function() {
			this._doSortEntities = !0
		},
		removeEntity: function(b) {
			b.name &&
				delete this.namedEntities[b.name];
			b._killed = !0;
			b.type = ig.Entity.TYPE.NONE;
			b.checkAgainst = ig.Entity.TYPE.NONE;
			b.collides = ig.Entity.COLLIDES.NEVER;
			this._deferredKill.push(b)
		},
		run: function() {
			this.update();
			this.draw()
		},
		update: function() {
			this._levelToLoad && (this.loadLevel(this._levelToLoad), this._levelToLoad = null);
			this.updateEntities();
			this.checkEntities();
			for (var b = 0; b < this._deferredKill.length; b++) this._deferredKill[b].erase(), this.entities.erase(this._deferredKill[b]);
			this._deferredKill = [];
			if (this._doSortEntities ||
				this.autoSort) this.sortEntities(), this._doSortEntities = !1;
			for (var c in this.backgroundAnims) {
				var b = this.backgroundAnims[c],
					d;
				for (d in b) b[d].update()
			}
		},
		updateEntities: function() {
			for (var b = 0; b < this.entities.length; b++) {
				var c = this.entities[b];
				c._killed || c.update()
			}
		},
		draw: function() {
			this.clearColor && ig.system.clear(this.clearColor);
			this._rscreen.x = ig.system.getDrawPos(this.screen.x) / ig.system.scale;
			this._rscreen.y = ig.system.getDrawPos(this.screen.y) / ig.system.scale;
			var b;
			for (b = 0; b < this.backgroundMaps.length; b++) {
				var c =
					this.backgroundMaps[b];
				if (c.foreground) break;
				c.setScreenPos(this.screen.x, this.screen.y);
				c.draw()
			}
			this.drawEntities();
			for (b; b < this.backgroundMaps.length; b++) c = this.backgroundMaps[b], c.setScreenPos(this.screen.x, this.screen.y), c.draw()
		},
		drawEntities: function() {
			for (var b = 0; b < this.entities.length; b++) this.entities[b].draw()
		},
		checkEntities: function() {
			for (var b = {}, c = 0; c < this.entities.length; c++) {
				var d = this.entities[c];
				if (!(d.type == ig.Entity.TYPE.NONE && d.checkAgainst == ig.Entity.TYPE.NONE && d.collides == ig.Entity.COLLIDES.NEVER))
					for (var e = {}, f = Math.floor(d.pos.y / this.cellSize), l = Math.floor((d.pos.x + d.size.x) / this.cellSize) + 1, p = Math.floor((d.pos.y + d.size.y) / this.cellSize) + 1, q = Math.floor(d.pos.x / this.cellSize); q < l; q++)
						for (var g = f; g < p; g++)
							if (b[q])
								if (b[q][g]) {
									for (var m = b[q][g], n = 0; n < m.length; n++) d.touches(m[n]) && !e[m[n].id] && (e[m[n].id] = !0, ig.Entity.checkPair(d, m[n]));
									m.push(d)
								} else b[q][g] = [d];
				else b[q] = {}, b[q][g] = [d]
			}
		}
	});
	ig.Game.SORT = {
		Z_INDEX: function(b, c) {
			return b.zIndex - c.zIndex
		},
		POS_X: function(b, c) {
			return b.pos.x + b.size.x - (c.pos.x +
				c.size.x)
		},
		POS_Y: function(b, c) {
			return b.pos.y + b.size.y - (c.pos.y + c.size.y)
		}
	}
});
ig.baked = !0;
ig.module("plugins.patches.user-agent-patch").defines(function() {
	ig.ua.touchDevice = "ontouchstart" in window || window.navigator.msMaxTouchPoints || window.navigator.maxTouchPoints;
	ig.ua.is_mac = "MacIntel" === navigator.platform;
	ig.ua.iOS = ig.ua.touchDevice && ig.ua.is_mac || ig.ua.iOS;
	ig.ua.mobile = ig.ua.iOS || ig.ua.mobile
});
ig.baked = !0;
ig.module("plugins.patches.webkit-image-smoothing-patch").defines(function() {
	ig.System && (ig.System.SCALE = {
		CRISP: function(b, c) {
			c.imageSmoothingEnabled = c.msImageSmoothingEnabled = c.mozImageSmoothingEnabled = c.oImageSmoothingEnabled = !1;
			b.style.imageRendering = "-moz-crisp-edges";
			b.style.imageRendering = "-o-crisp-edges";
			b.style.imageRendering = "-webkit-optimize-contrast";
			b.style.imageRendering = "crisp-edges";
			b.style.msInterpolationMode = "nearest-neighbor"
		},
		SMOOTH: function(b, c) {
			c.imageSmoothingEnabled = c.msImageSmoothingEnabled =
				c.mozImageSmoothingEnabled = c.oImageSmoothingEnabled = !0;
			b.style.imageRendering = "";
			b.style.msInterpolationMode = ""
		}
	}, ig.System.scaleMode = ig.System.SCALE.SMOOTH)
});
ig.baked = !0;
ig.module("plugins.patches.windowfocus-onMouseDown-patch").requires("impact.input").defines(function() {
	var b = !1;
	try {
		b = window.self !== window.top, !1 === b && (b = 0 < window.frames.length)
	} catch (c) {
		b = !0
	}
	ig.Input.inject({
		keydown: function(c) {
			var e = c.target.tagName;
			if (!("INPUT" == e || "TEXTAREA" == e))
				if (e = "keydown" == c.type ? c.keyCode : 2 == c.button ? ig.KEY.MOUSE2 : ig.KEY.MOUSE1, b && 0 > e && window.focus(), ("touchstart" == c.type || "mousedown" == c.type) && this.mousemove(c), e = this.bindings[e]) this.actions[e] = !0, this.locks[e] || (this.presses[e] = !0, this.locks[e] = !0), c.stopPropagation(), c.preventDefault()
		}
	})
});
ig.baked = !0;
ig.module("plugins.patches.input-patch").requires("impact.input").defines(function() {
	ig.Input.inject({
		mousemove: function(b) {
			var c = ig.system.scale * (ig.system.realWidth / ig.system.realWidth),
				d = {
					left: 0,
					top: 0
				};
			ig.system.canvas.getBoundingClientRect && (d = ig.system.canvas.getBoundingClientRect());
			b = b.touches ? b.touches[0] : b;
			this.mouse.x = (b.clientX - d.left) / c;
			this.mouse.y = (b.clientY - d.top) / c;
			try {
				ig.soundHandler.unlockWebAudio()
			} catch (e) {}
		},
		keyup: function(b) {
			var c = b.target.tagName;
			if (!("INPUT" == c || "TEXTAREA" ==
					c))
				if (c = this.bindings["keyup" == b.type ? b.keyCode : 2 == b.button ? ig.KEY.MOUSE2 : ig.KEY.MOUSE1]) {
					this.delayedKeyup[c] = !0;
					b.stopPropagation();
					b.preventDefault();
					if (ig.visibilityHandler) ig.visibilityHandler.onChange("focus");
					try {
						ig.soundHandler.unlockWebAudio()
					} catch (d) {}
				}
		}
	})
});
ig.baked = !0;
ig.module("plugins.font.font-info").requires("impact.impact").defines(function() {
	ig.FontInfo = ig.Class.extend({
		fonts: [{
			name: "montserrat",
			source: "media/fonts/montserrat"
		}],
		init: function() {
			this.registerCssFont()
		},
		registerCssFont: function() {
			if (0 < this.fonts.length) {
				var b = document.createElement("style");
				b.type = "text/css";
				for (var c = "", d = 0; d < this.fonts.length; d++) var e = this.fonts[d],
					c = c + ("@font-face {font-family: '" + e.name + "';src: url('" + e.source + ".eot');src: url('" + e.source + ".eot?#iefix') format('embedded-opentype'),url('" +
						e.source + ".woff2') format('woff2'),url('" + e.source + ".woff') format('woff'),url('" + e.source + ".ttf') format('truetype'),url('" + e.source + ".svg#svgFontName') format('svg')}");
				b.appendChild(document.createTextNode(c));
				document.head.appendChild(b)
			}
		},
		isValid: function() {
			for (var b = 0; b < this.fonts.length; b++)
				if (!this._isValidName(this.fonts[b].source)) return !1;
			return !0
		},
		_isValidName: function(b) {
			return -1 == b.search(/^[a-z0-9-\/]+$/) ? !1 : !0
		}
	})
});
ig.baked = !0;
ig.module("plugins.font.font-loader").requires("impact.impact", "plugins.font.font-info", "impact.loader").defines(function() {
	ig.FontLoader = ig.Class.extend({
		fontInfo: new ig.FontInfo,
		onload: !1,
		onerror: !1,
		init: function(b, c) {
			this.onload = b;
			this.onerror = c
		},
		load: function() {
			this.fontInfo.isValid() ? this._loadByLib() : console.error("Only lowercased alphanumeric and dash are allowed for font file name!. Please check the font path")
		},
		_loadByLib: function() {
			for (var b = [], c = 0; c < this.fontInfo.fonts.length; c++) {
				var d =
					new FontFaceObserver(this.fontInfo.fonts[c].name);
				b.push(d.load())
			}
			Promise.all(b).then(this.onload).catch(this.onerror)
		}
	});
	ig.Loader.inject({
		parentLoad: !1,
		load: function() {
			this.parentLoad = this.parent;
			(new ig.FontLoader(this.onFontLoad.bind(this), this.onFontError.bind(this))).load()
		},
		onFontLoad: function() {
			this.parentLoad()
		},
		onFontError: function() {
			console.error("Font is not loaded");
			this.parentLoad()
		}
	})
});
ig.baked = !0;
ig.module("plugins.handlers.dom-handler").defines(function() {
	ig.DomHandler = ig.Class.extend({
		JQUERYAVAILABLE: !1,
		init: function() {
			this.JQUERYAVAILABLE = this._jqueryAvailable()
		},
		_jqueryAvailable: function() {
			return "undefined" !== typeof jQuery
		},
		addEvent: function(b, c, d, e) {
			if (this.JQUERYAVAILABLE) b.on(c, d);
			else b.addEventListener(c, d, e)
		},
		create: function(b) {
			return this.JQUERYAVAILABLE ? $("<" + b + ">") : ig.$new(b)
		},
		getElementByClass: function(b) {
			return this.JQUERYAVAILABLE ? $("." + b) : document.getElementsByClassName(b)
		},
		getElementById: function(b) {
			return this.JQUERYAVAILABLE ? 0 < $(b).length ? $(b) : null : ig.$(b)
		},
		appendChild: function(b, c) {
			this.JQUERYAVAILABLE ? b.append(c) : b.appendChild(c)
		},
		appendToBody: function(b) {
			this.JQUERYAVAILABLE ? $("body").append(b) : document.body.appendChild(b)
		},
		resize: function(b, c, d) {
			if (this.JQUERYAVAILABLE) b.width(c.toFixed(2)), b.height(d.toFixed(2));
			else {
				var e = b.style.visibility;
				c = "width:" + c.toFixed(2) + "px; height:" + d.toFixed(2) + "px;";
				this.attr(b, "style", c);
				b.style.visibility = e
			}
		},
		resizeOffsetLeft: function(b,
			c, d, e) {
			if (this.JQUERYAVAILABLE) b.width(c.toFixed(2)), b.height(d.toFixed(2)), b.css("left", e);
			else {
				var f = b.style.visibility;
				c = "width:" + c.toFixed(2) + "px; height:" + d.toFixed(2) + "px; left: " + e.toFixed(2) + "px;";
				this.attr(b, "style", c);
				b.style.visibility = f
			}
		},
		resizeOffset: function(b, c, d, e, f) {
			if (this.JQUERYAVAILABLE) b.width(c.toFixed(2)), b.height(d.toFixed(2)), b.css("left", e), b.css("top", f);
			else {
				var l = b.style.visibility;
				c = "width:" + c.toFixed(2) + "px; height:" + d.toFixed(2) + "px; left: " + e.toFixed(2) + "px; top: " +
					f.toFixed(2) + "px;";
				this.attr(b, "style", c);
				b.style.visibility = l
			}
		},
		css: function(b, c) {
			if (this.JQUERYAVAILABLE) b.css(c);
			else {
				var d = "",
					e;
				for (e in c) d += e + ":" + c[e] + ";";
				this.attr(b, "style", d)
			}
		},
		getOffsets: function(b) {
			return this.JQUERYAVAILABLE ? (b = b.offset(), {
				left: b.left,
				top: b.top
			}) : {
				left: b.offsetLeft,
				top: b.offsetTop
			}
		},
		attr: function(b, c, d) {
			if ("undefined" === typeof d) return this.JQUERYAVAILABLE ? b.attr(c) : b.getAttribute(c);
			this.JQUERYAVAILABLE ? b.attr(c, d) : b.setAttribute(c, d)
		},
		show: function(b) {
			b && "undefined" !==
				typeof b && (this.JQUERYAVAILABLE ? (b.show(), b.css("visibility", "visible")) : b && (b.style ? b.style.visibility = "visible" : b[0] && (b[0].style.visibility = "visible")))
		},
		hide: function(b) {
			b && "undefined" !== typeof b && (this.JQUERYAVAILABLE ? (b.hide(), b.css("visibility", "hidden")) : b && (b.style ? b.style.visibility = "hidden" : b[0] && (b[0].style.visibility = "hidden")))
		},
		getQueryVariable: function(b) {
			for (var c = window.location.search.substring(1).split("&"), d = 0; d < c.length; d++) {
				var e = c[d].split("=");
				if (decodeURIComponent(e[0]) ==
					b) return decodeURIComponent(e[1])
			}
		},
		forcedDeviceDetection: function() {
			var b = this.getQueryVariable("device");
			if (b) switch (b) {
				case "mobile":
					console.log("serving mobile version ...");
					ig.ua.mobile = !0;
					break;
				case "desktop":
					console.log("serving desktop version ...");
					ig.ua.mobile = !1;
					break;
				default:
					console.log("serving universal version ...")
			} else console.log("serving universal version ...")
		},
		forcedDeviceRotation: function() {
			var b = this.getQueryVariable("force-rotate");
			if (b) switch (b) {
				case "portrait":
					console.log("force rotate to portrait");
					window.orientation = 0;
					break;
				case "landscape":
					console.log("force rotate to horizontal");
					window.orientation = 90;
					break;
				default:
					alert("wrong command/type in param force-rotate. Defaulting value to portrait"), window.orientation = 0
			}
		}
	})
});
ig.baked = !0;
ig.module("plugins.data.vector").defines(function() {
	Vector2 = function(b, c) {
		this.x = b || 0;
		this.y = c || 0
	};
	Vector2.prototype = {
		valType: "number",
		neg: function() {
			this.x = -this.x;
			this.y = -this.y;
			return this
		},
		row: function(b) {
			typeof b === this.valType && (this.y = b);
			return this.y
		},
		col: function(b) {
			typeof b === this.valType && (this.x = b);
			return this.x
		},
		add: function(b) {
			b instanceof Vector2 ? (this.x += b.x, this.y += b.y) : (this.x += b, this.y += b);
			return this
		},
		sub: function(b) {
			b instanceof Vector2 ? (this.x -= b.x, this.y -= b.y) : (this.x -= b, this.y -=
				b);
			return this
		},
		mul: function(b) {
			b instanceof Vector2 ? (this.x *= b.x, this.y *= b.y) : (this.x *= b, this.y *= b);
			return this
		},
		div: function(b) {
			b instanceof Vector2 ? (0 != b.x && (this.x /= b.x), 0 != b.y && (this.y /= b.y)) : 0 != b && (this.x /= b, this.y /= b);
			return this
		},
		equals: function(b) {
			return this.x == b.x && this.y == b.y
		},
		dot: function(b) {
			return this.x * b.x + this.y * b.y
		},
		cross: function(b) {
			return this.x * b.y - this.y * b.x
		},
		length: function() {
			return Math.sqrt(this.dot(this))
		},
		norm: function() {
			return this.divide(this.length())
		},
		min: function() {
			return Math.min(this.x,
				this.y)
		},
		max: function() {
			return Math.max(this.x, this.y)
		},
		toAngles: function() {
			return -Math.atan2(-this.y, this.x)
		},
		angleTo: function(b) {
			return Math.acos(this.dot(b) / (this.length() * b.length()))
		},
		toArray: function(b) {
			return [this.x, this.y].slice(0, b || 2)
		},
		clone: function() {
			return new Vector2(this.x, this.y)
		},
		set: function(b, c) {
			this.x = b;
			this.y = c;
			return this
		},
		unit: function() {
			var b = this.length();
			if (0 < b) return new Vector2(this.x / b, this.y / b);
			throw "Divide by 0 error in unitVector function of vector:" + this;
		},
		turnRight: function() {
			var b =
				this.x;
			this.x = -this.y;
			this.y = b;
			return this
		},
		turnLeft: function() {
			var b = this.x;
			this.x = this.y;
			this.y = -b;
			return this
		},
		rotate: function(b) {
			var c = this.clone();
			this.x = c.x * Math.cos(b) - c.y * Math.sin(b);
			this.y = c.x * Math.sin(b) + c.y * Math.cos(b);
			return this
		}
	};
	Vector2.negative = function(b) {
		return new Vector2(-b.x, -b.y)
	};
	Vector2.add = function(b, c) {
		return c instanceof Vector2 ? new Vector2(b.x + c.x, b.y + c.y) : new Vector2(b.x + v, b.y + v)
	};
	Vector2.subtract = function(b, c) {
		return c instanceof Vector2 ? new Vector2(b.x - c.x, b.y - c.y) :
			new Vector2(b.x - v, b.y - v)
	};
	Vector2.multiply = function(b, c) {
		return c instanceof Vector2 ? new Vector2(b.x * c.x, b.y * c.y) : new Vector2(b.x * v, b.y * v)
	};
	Vector2.divide = function(b, c) {
		return c instanceof Vector2 ? new Vector2(b.x / c.x, b.y / c.y) : new Vector2(b.x / v, b.y / v)
	};
	Vector2.equals = function(b, c) {
		return b.x == c.x && b.y == c.y
	};
	Vector2.dot = function(b, c) {
		return b.x * c.x + b.y * c.y
	};
	Vector2.cross = function(b, c) {
		return b.x * c.y - b.y * c.x
	}
});
ig.baked = !0;
ig.module("plugins.handlers.size-handler").requires("plugins.data.vector").defines(function() {
	ig.SizeHandler = ig.Class.extend({
		portraitMode: !0,
		disableStretchToFitOnMobileFlag: !1,
		enableStretchToFitOnAntiPortraitModeFlag: !0,
		enableScalingLimitsOnMobileFlag: !1,
		minScalingOnMobile: 0,
		maxScalingOnMobile: 1,
		enableStretchToFitOnDesktopFlag: !1,
		enableScalingLimitsOnDesktopFlag: !1,
		minScalingOnDesktop: 0,
		maxScalingOnDesktop: 1,
		desktop: {
			actualSize: new Vector2(window.innerWidth, window.innerHeight),
			actualResolution: new Vector2(540,
				960)
		},
		mobile: {
			actualSize: new Vector2(window.innerWidth, window.innerHeight),
			actualResolution: new Vector2(540, 960)
		},
		windowSize: new Vector2(window.innerWidth, window.innerHeight),
		scaleRatioMultiplier: new Vector2(1, 1),
		sizeRatio: new Vector2(1, 1),
		scale: 1,
		domHandler: null,
		dynamicClickableEntityDivs: {},
		coreDivsToResize: ["#canvas", "#play", "#orientate"],
		adsToResize: {
			MobileAdInGamePreroll: {
				"box-width": _SETTINGS.Ad.Mobile.Preroll.Width + 2,
				"box-height": _SETTINGS.Ad.Mobile.Preroll.Height + 20
			},
			MobileAdInGameEnd: {
				"box-width": _SETTINGS.Ad.Mobile.End.Width +
					2,
				"box-height": _SETTINGS.Ad.Mobile.End.Height + 20
			},
			MobileAdInGamePreroll2: {
				"box-width": _SETTINGS.Ad.Mobile.Preroll.Width + 2,
				"box-height": _SETTINGS.Ad.Mobile.Preroll.Height + 20
			},
			MobileAdInGameEnd2: {
				"box-width": _SETTINGS.Ad.Mobile.End.Width + 2,
				"box-height": _SETTINGS.Ad.Mobile.End.Height + 20
			},
			MobileAdInGamePreroll3: {
				"box-width": _SETTINGS.Ad.Mobile.Preroll.Width + 2,
				"box-height": _SETTINGS.Ad.Mobile.Preroll.Height + 20
			},
			MobileAdInGameEnd3: {
				"box-width": _SETTINGS.Ad.Mobile.End.Width + 2,
				"box-height": _SETTINGS.Ad.Mobile.End.Height +
					20
			}
		},
		init: function(b) {
			this.domHandler = b;
			if ("undefined" === typeof b) throw "undefined Dom Handler for Size Handler";
			this.sizeCalcs();
			this.eventListenerSetup();
			this.samsungFix()
		},
		sizeCalcs: function() {
			this.windowSize = new Vector2(window.innerWidth, window.innerHeight);
			if (ig.ua.mobile) {
				this.mobile.actualSize = new Vector2(window.innerWidth, window.innerHeight);
				var b = new Vector2(this.mobile.actualResolution.x, this.mobile.actualResolution.y);
				this.scaleRatioMultiplier = new Vector2(this.mobile.actualSize.x / b.x, this.mobile.actualSize.y /
					b.y);
				if (this.disableStretchToFitOnMobileFlag) {
					var c = Math.min(this.scaleRatioMultiplier.x, this.scaleRatioMultiplier.y);
					this.enableScalingLimitsOnMobileFlag && (c = c.limit(this.minScalingOnMobile, this.maxScalingOnMobile));
					this.mobile.actualSize.x = b.x * c;
					this.mobile.actualSize.y = b.y * c;
					this.scaleRatioMultiplier.x = c;
					this.scaleRatioMultiplier.y = c
				} else this.sizeRatio.x = this.scaleRatioMultiplier.x, this.sizeRatio.y = this.scaleRatioMultiplier.y, this.scaleRatioMultiplier.x = 1, this.scaleRatioMultiplier.y = 1
			} else this.desktop.actualSize =
				new Vector2(window.innerWidth, window.innerHeight), b = new Vector2(this.desktop.actualResolution.x, this.desktop.actualResolution.y), this.scaleRatioMultiplier = new Vector2(this.desktop.actualSize.x / b.x, this.desktop.actualSize.y / b.y), this.enableStretchToFitOnDesktopFlag ? (this.sizeRatio.x = this.scaleRatioMultiplier.x, this.sizeRatio.y = this.scaleRatioMultiplier.y, this.scaleRatioMultiplier.x = 1, this.scaleRatioMultiplier.y = 1) : (c = Math.min(this.scaleRatioMultiplier.x, this.scaleRatioMultiplier.y), this.enableScalingLimitsOnDesktopFlag &&
					(c = c.limit(this.minScalingOnDesktop, this.maxScalingOnDesktop)), this.desktop.actualSize.x = b.x * c, this.desktop.actualSize.y = b.y * c, this.scaleRatioMultiplier.x = c, this.scaleRatioMultiplier.y = c)
		},
		resizeLayers: function() {
			for (var b = 0; b < this.coreDivsToResize.length; b++) {
				var c = ig.domHandler.getElementById(this.coreDivsToResize[b]);
				if (ig.ua.mobile)
					if (this.disableStretchToFitOnMobileFlag) {
						var d = Math.floor(ig.sizeHandler.windowSize.x / 2 - ig.sizeHandler.mobile.actualSize.x / 2),
							e = Math.floor(ig.sizeHandler.windowSize.y /
								2 - ig.sizeHandler.mobile.actualSize.y / 2);
						0 > d && (d = 0);
						0 > e && (e = 0);
						ig.domHandler.resizeOffset(c, Math.floor(ig.sizeHandler.mobile.actualSize.x), Math.floor(ig.sizeHandler.mobile.actualSize.y), d, e);
						var f = !1;
						if (this.portraitMode ? window.innerHeight < window.innerWidth : window.innerHeight > window.innerWidth)
							if (this.enableStretchToFitOnAntiPortraitModeFlag) ig.domHandler.resizeOffset(c, Math.floor(window.innerWidth), Math.floor(window.innerHeight), 0, 0);
							else {
								var f = new Vector2(window.innerWidth / this.mobile.actualResolution.y,
										window.innerHeight / this.mobile.actualResolution.x),
									d = Math.min(f.x, f.y),
									f = this.mobile.actualResolution.y * d,
									l = this.mobile.actualResolution.x * d,
									d = Math.floor(ig.sizeHandler.windowSize.x / 2 - f / 2),
									e = Math.floor(ig.sizeHandler.windowSize.y / 2 - l / 2);
								0 > d && (d = 0);
								0 > e && (e = 0);
								ig.domHandler.resizeOffset(c, Math.floor(f), Math.floor(l), d, e)
							}
					} else ig.domHandler.resize(c, Math.floor(ig.sizeHandler.mobile.actualSize.x), Math.floor(ig.sizeHandler.mobile.actualSize.y));
				else this.enableStretchToFitOnDesktopFlag ? ig.domHandler.resize(c,
					Math.floor(ig.sizeHandler.desktop.actualSize.x), Math.floor(ig.sizeHandler.desktop.actualSize.y)) : (d = Math.floor(ig.sizeHandler.windowSize.x / 2 - ig.sizeHandler.desktop.actualSize.x / 2), e = Math.floor(ig.sizeHandler.windowSize.y / 2 - ig.sizeHandler.desktop.actualSize.y / 2), 0 > d && (d = 0), 0 > e && (e = 0), ig.domHandler.resizeOffset(c, Math.floor(ig.sizeHandler.desktop.actualSize.x), Math.floor(ig.sizeHandler.desktop.actualSize.y), d, e))
			}
			for (var p in this.adsToResize) b = ig.domHandler.getElementById("#" + p), c = ig.domHandler.getElementById("#" +
				p + "-Box"), f = (window.innerWidth - this.adsToResize[p]["box-width"]) / 2 + "px", d = (window.innerHeight - this.adsToResize[p]["box-height"]) / 2 + "px", b && ig.domHandler.css(b, {
				width: window.innerWidth,
				height: window.innerHeight
			}), c && ig.domHandler.css(c, {
				left: f,
				top: d
			});
			b = ig.domHandler.getElementById("#canvas");
			c = ig.domHandler.getOffsets(b);
			b = c.left;
			c = c.top;
			f = Math.min(ig.sizeHandler.scaleRatioMultiplier.x, ig.sizeHandler.scaleRatioMultiplier.y);
			for (p in this.dynamicClickableEntityDivs) {
				d = ig.domHandler.getElementById("#" +
					p);
				if (ig.ua.mobile) {
					var l = this.dynamicClickableEntityDivs[p].entity_pos_x,
						q = this.dynamicClickableEntityDivs[p].entity_pos_y,
						g = this.dynamicClickableEntityDivs[p].width,
						e = this.dynamicClickableEntityDivs[p].height;
					this.disableStretchToFitOnMobileFlag ? (l = Math.floor(b + l * this.scaleRatioMultiplier.x) + "px", q = Math.floor(c + q * this.scaleRatioMultiplier.y) + "px", g = Math.floor(g * this.scaleRatioMultiplier.x) + "px", e = Math.floor(e * this.scaleRatioMultiplier.y) + "px") : (l = Math.floor(l * this.sizeRatio.x) + "px", q = Math.floor(q *
						this.sizeRatio.y) + "px", g = Math.floor(g * this.sizeRatio.x) + "px", e = Math.floor(e * this.sizeRatio.y) + "px")
				} else l = this.dynamicClickableEntityDivs[p].entity_pos_x, q = this.dynamicClickableEntityDivs[p].entity_pos_y, g = this.dynamicClickableEntityDivs[p].width, e = this.dynamicClickableEntityDivs[p].height, this.enableStretchToFitOnDesktopFlag ? (l = Math.floor(l * this.sizeRatio.x) + "px", q = Math.floor(q * this.sizeRatio.y) + "px", g = Math.floor(g * this.sizeRatio.x) + "px", e = Math.floor(e * this.sizeRatio.y) + "px") : (l = Math.floor(b + l *
					this.scaleRatioMultiplier.x) + "px", q = Math.floor(c + q * this.scaleRatioMultiplier.y) + "px", g = Math.floor(g * this.scaleRatioMultiplier.x) + "px", e = Math.floor(e * this.scaleRatioMultiplier.y) + "px");
				ig.domHandler.css(d, {
					"float": "left",
					position: "absolute",
					left: l,
					top: q,
					width: g,
					height: e,
					"z-index": 3
				});
				this.dynamicClickableEntityDivs[p]["font-size"] && ig.domHandler.css(d, {
					"font-size": this.dynamicClickableEntityDivs[p]["font-size"] * f + "px"
				})
			}
			$("#ajaxbar").width(this.windowSize.x);
			$("#ajaxbar").height(this.windowSize.y)
		},
		resize: function() {
			this.sizeCalcs();
			this.resizeLayers()
		},
		reorient: function() {
			console.log("changing orientation ...");
			if (ig.ua.mobile) {
				var b = !1,
					b = this.portraitMode ? window.innerHeight < window.innerWidth : window.innerHeight > window.innerWidth,
					c = this.domHandler.getElementById("#orientate"),
					d = this.domHandler.getElementById("#game");
				b ? (this.domHandler.show(c), this.domHandler.hide(d), console.log("portrait" + window.innerWidth + "," + window.innerHeight)) : (this.domHandler.show(d), this.domHandler.hide(c), console.log("landscape" +
					window.innerWidth + "," + window.innerHeight))
			}
			ig.ua.mobile ? (this.resize(), this.resizeAds()) : this.resize()
		},
		resizeAds: function() {
			for (var b in this.adsToResize) {
				var c = ig.domHandler.getElementById("#" + b),
					d = ig.domHandler.getElementById("#" + b + "-Box"),
					e = (window.innerWidth - this.adsToResize[b]["box-width"]) / 2 + "px",
					f = (window.innerHeight - this.adsToResize[b]["box-height"]) / 2 + "px";
				c && ig.domHandler.css(c, {
					width: window.innerWidth,
					height: window.innerHeight
				});
				d && ig.domHandler.css(d, {
					left: e,
					top: f
				})
			}
		},
		samsungFix: function() {
			ig.ua.android &&
				!(4.2 > parseFloat(navigator.userAgent.slice(navigator.userAgent.indexOf("Android") + 8, navigator.userAgent.indexOf("Android") + 11))) && (!(0 > navigator.userAgent.indexOf("GT")) && !(0 < navigator.userAgent.indexOf("Chrome")) && !(0 < navigator.userAgent.indexOf("Firefox"))) && (document.addEventListener("touchstart", function(b) {
					b.preventDefault();
					return !1
				}, !1), document.addEventListener("touchmove", function(b) {
					b.preventDefault();
					return !1
				}, !1), document.addEventListener("touchend", function(b) {
						b.preventDefault();
						return !1
					},
					!1))
		},
		orientationInterval: null,
		orientationTimeout: null,
		orientationHandler: function() {
			this.reorient();
			window.scrollTo(0, 1)
		},
		orientationDelayHandler: function() {
			null == this.orientationInterval && (this.orientationInterval = window.setInterval(this.orientationHandler.bind(this), 100));
			null == this.orientationTimeout && (this.orientationTimeout = window.setTimeout(function() {
				this.clearAllIntervals()
			}.bind(this), 2E3))
		},
		clearAllIntervals: function() {
			window.clearInterval(this.orientationInterval);
			this.orientationInterval =
				null;
			window.clearTimeout(this.orientationTimeout);
			this.orientationTimeout = null
		},
		eventListenerSetup: function() {
			ig.ua.iOS ? (window.addEventListener("orientationchange", this.orientationDelayHandler.bind(this)), window.addEventListener("resize", this.orientationDelayHandler.bind(this))) : (window.addEventListener("orientationchange", this.orientationHandler.bind(this)), window.addEventListener("resize", this.orientationHandler.bind(this)));
			document.ontouchmove = function(b) {
				window.scrollTo(0, 1);
				b.preventDefault()
			};
			this.chromePullDownRefreshFix()
		},
		chromePullDownRefreshFix: function() {
			var b = window.chrome || navigator.userAgent.match("CriOS"),
				c = "ontouchstart" in document.documentElement;
			if (b && c) {
				var d = b = !1,
					e = 0,
					f = !1;
				try {
					CSS.supports("overscroll-behavior-y", "contain") && (b = !0)
				} catch (l) {}
				try {
					if (b) return document.body.style.overscrollBehaviorY = "contain"
				} catch (p) {}
				b = document.head || document.body;
				c = document.createElement("style");
				c.type = "text/css";
				c.styleSheet ? c.styleSheet.cssText = "\n      ::-webkit-scrollbar {\n        width: 500x;\n      }\n      ::-webkit-scrollbar-thumb {\n        border-radius: 500px;\n        background-color: rgba(0, 0, 0, 0.2);\n      }\n      body {\n        -webkit-overflow-scrolling: auto!important;\n      }\n    " :
					c.appendChild(document.createTextNode("\n      ::-webkit-scrollbar {\n        width: 500px;\n      }\n      ::-webkit-scrollbar-thumb {\n        border-radius: 500px;\n        background-color: rgba(0, 0, 0, 0.2);\n      }\n      body {\n        -webkit-overflow-scrolling: auto!important;\n      }\n    "));
				b.appendChild(c);
				try {
					addEventListener("test", null, {
						get passive() {
							d = !0
						}
					})
				} catch (q) {}
				document.addEventListener("touchstart", function(b) {
						1 === b.touches.length && (e = b.touches[0].clientY, f = 0 === window.pageYOffset)
					},
					!!d && {
						passive: !0
					});
				document.addEventListener("touchmove", function(b) {
					var c;
					if (c = f) {
						f = !1;
						c = b.touches[0].clientY;
						var d = c - e;
						c = (e = c, 0 < d)
					}
					if (c) return b.preventDefault()
				}, !!d && {
					passive: !1
				})
			}
		}
	})
});
ig.baked = !0;
ig.module("plugins.handlers.api-handler").defines(function() {
	ig.ApiHandler = ig.Class.extend({
		apiAvailable: {
			MJSPreroll: function() {
				ig.ua.mobile && ig.domHandler.JQUERYAVAILABLE && _SETTINGS && _SETTINGS.Ad.Mobile.Preroll.Enabled && MobileAdInGamePreroll.Initialize()
			},
			MJSHeader: function() {
				ig.ua.mobile && ig.domHandler.JQUERYAVAILABLE && _SETTINGS.Ad.Mobile.Header.Enabled && MobileAdInGameHeader.Initialize()
			},
			MJSFooter: function() {
				ig.ua.mobile && ig.domHandler.JQUERYAVAILABLE && _SETTINGS.Ad.Mobile.Footer.Enabled && MobileAdInGameFooter.Initialize()
			},
			MJSEnd: function() {
				ig.ua.mobile && ig.domHandler.JQUERYAVAILABLE && _SETTINGS.Ad.Mobile.End.Enabled && MobileAdInGameEnd.Initialize()
			}
		},
		run: function(b, c) {
			if (this.apiAvailable[b]) this.apiAvailable[b](c)
		}
	})
});
ig.baked = !0;
ig.module("plugins.audio.sound-player").defines(function() {
	SoundPlayer = ig.Class.extend({
		tagName: "SoundPlayer",
		stayMuteFlag: !1,
		debug: !1,
		init: function() {
			this.debug && console.log(this.tagName)
		},
		play: function(b) {
			this.debug && console.log("play sound ", b)
		},
		stop: function() {
			this.debug && console.log("stop sound ")
		},
		volume: function() {
			this.debug && console.log("set volume")
		},
		mute: function(b) {
			this.debug && console.log("mute");
			"undefined" === typeof b ? this.stayMuteFlag = !0 : b && (this.stayMuteFlag = !0)
		},
		unmute: function(b) {
			this.debug &&
				console.log("unmute");
			"undefined" === typeof b ? this.stayMuteFlag = !1 : b && (this.stayMuteFlag = !1)
		}
	})
});
ig.baked = !0;
ig.module("plugins.audio.impact-music-player").requires("plugins.audio.sound-player").defines(function() {
	ImpactMusicPlayer = SoundPlayer.extend({
		tagName: "ImpactMusicPlayer",
		bgmPlaying: !1,
		soundList: {},
		init: function(b, c) {
			this.parent(b, c);
			for (var d in b) this.soundList[d] = d, ig.music.add(b[d].path + ".*", d);
			c && c.loop && (ig.music.loop = c.loop)
		},
		play: function(b) {
			this.stayMuteFlag || (this.bgmPlaying = !0, "undefined" === typeof b ? ig.music.play(b) : ig.music.play())
		},
		stop: function() {
			this.bgmPlaying = !1;
			ig.music.pause()
		},
		volume: function(b) {
			console.log("impactmusic:", b);
			ig.music.volume = 0 > b ? 0 : isNaN(b) ? 1 : 1 < b ? 1 : b
		},
		getVolume: function() {
			return ig.music.volume
		},
		mute: function(b) {
			this.parent(b);
			this.bgmPlaying && this.stop()
		},
		unmute: function(b) {
			this.parent(b);
			this.play()
		}
	})
});
ig.baked = !0;
ig.module("plugins.audio.impact-sound-player").requires("plugins.audio.sound-player").defines(function() {
	ImpactSoundPlayer = SoundPlayer.extend({
		tagName: "ImpactSoundPlayer",
		soundList: {},
		init: function(b, c) {
			this.parent(b, c);
			for (var d in b) {
				var e = new ig.Sound(b[d].path + ".*");
				this.soundList[d] = e
			}
		},
		play: function(b) {
			this.stayMuteFlag || ("object" === typeof b ? (console.log(b + " exists"), b.play()) : "string" === typeof b && this.soundList[b].play())
		},
		stop: function(b) {
			this.parent(b);
			b.stop()
		},
		volume: function(b) {
			ig.soundManager.volume =
				0 > b ? 0 : isNaN(b) ? 1 : 1 < b ? 1 : b
		},
		getVolume: function() {
			return ig.soundManager.volume
		},
		mute: function(b) {
			this.parent(b);
			ig.Sound.enabled = !1
		},
		unmute: function(b) {
			this.parent(b);
			ig.Sound.enabled = !0
		}
	})
});
ig.baked = !0;
ig.module("plugins.audio.howler-player").requires("plugins.audio.sound-player").defines(function() {
	HowlerPlayer = SoundPlayer.extend({
		tagName: "HowlerPlayer",
		soundList: {},
		init: function(b, c) {
			this.parent(b, c);
			for (var d in b) {
				var e = b[d].path,
					e = new Howl({
						src: [e + "." + ig.Sound.FORMAT.OGG.ext, e + "." + ig.Sound.FORMAT.MP3.ext]
					});
				this.soundList[d] = e
			}
		},
		play: function(b) {
			if (Howler.ctx && "running" !== Howler.ctx.state) return Howler.ctx.resume();
			this.stayMuteFlag || ("object" === typeof b ? b.play() : "string" === typeof b && this.soundList[b].play())
		},
		stop: function(b) {
			this.parent(b);
			"object" === typeof b ? b.stop() : "string" === typeof b && this.soundList[b].stop()
		},
		volume: function(b) {
			for (var c in this.soundList) {
				if (0 > b) {
					this.soundList[c].volume(0);
					break
				}
				isNaN(b) ? this.soundList[c].volume(1) : 1 < b ? this.soundList[c].volume(1) : this.soundList[c].volume(b)
			}
		},
		getVolume: function() {
			for (var b in this.soundList) return this.soundList[b].volume()
		},
		mute: function(b) {
			this.parent(b);
			Howler.mute(!0)
		},
		unmute: function(b) {
			this.parent(b);
			Howler.mute(!1)
		}
	})
});
ig.baked = !0;
ig.module("plugins.audio.howler-music-player").requires("plugins.audio.sound-player").defines(function() {
	HowlerMusicPlayer = SoundPlayer.extend({
		tagName: "HowlerMusicPlayer",
		bgmPlaying: !1,
		soundList: {},
		init: function(b, c) {
			this.parent(b, c);
			for (var d in b) {
				var e = b[d].path,
					e = new Howl({
						src: [e + "." + ig.Sound.FORMAT.OGG.ext, e + "." + ig.Sound.FORMAT.MP3.ext],
						loop: !0,
						autoplay: !1,
						onend: function() {}.bind(this)
					});
				this.soundList[d] = e
			}
		},
		play: function(b) {
			if (!this.stayMuteFlag && !this.bgmPlaying)
				if ("object" === typeof b) this.bgmPlaying = !0, b.play();
				else if ("string" === typeof b) this.bgmPlaying = !0, this.soundList[b].play();
			else
				for (var c in this.soundList) {
					this.soundList[c].play();
					this.bgmPlaying = !0;
					break
				}
		},
		stop: function(b) {
			this.parent(b);
			if (this.bgmPlaying) {
				for (var c in this.soundList) this.soundList[c].stop();
				this.bgmPlaying = !1
			}
		},
		volume: function(b) {
			console.log("howler", b);
			for (var c in this.soundList) {
				if (0 > b) {
					this.soundList[c].volume(0);
					break
				}
				isNaN(b) ? this.soundList[c].volume(1) : 1 < b ? this.soundList[c].volume(1) : this.soundList[c].volume(b)
			}
		},
		getVolume: function() {
			for (var b in this.soundList) return this.soundList[b].volume()
		},
		mute: function(b) {
			this.parent(b);
			Howler.mute(!0)
		},
		unmute: function(b) {
			this.parent(b);
			Howler.mute(!1)
		}
	})
});
ig.baked = !0;
ig.module("plugins.audio.jukebox-player").requires("plugins.audio.sound-player").defines(function() {
	JukeboxPlayer = SoundPlayer.extend({
		tagName: "JukeboxPlayer",
		bgmPlaying: !1,
		soundList: {},
		jukeboxPlayer: null,
		pausePosition: 0,
		premuteVolume: 0,
		minVolume: 0.001,
		init: function(b, c) {
			this.parent(b, c);
			for (var d in b) {
				this.soundList[d] = d;
				var e = b[d].path;
				this.jukeboxPlayer = new jukebox.Player({
					resources: [e + "." + ig.Sound.FORMAT.OGG.ext, e + "." + ig.Sound.FORMAT.MP3.ext],
					autoplay: !1,
					spritemap: {
						music: {
							start: b[d].startMp3,
							end: b[d].endMp3,
							loop: !0
						}
					}
				})
			}
		},
		play: function() {
			this.stayMuteFlag || (this.bgmPlaying = !0, this.pausePosition ? (console.log("resume"), this.jukeboxPlayer.resume(this.pausePosition)) : (console.log("play"), this.jukeboxPlayer.play(this.jukeboxPlayer.settings.spritemap.music.start, !0)), this.premuteVolume = this.getVolume())
		},
		stop: function() {
			this.bgmPlaying = !1;
			this.pausePosition = this.jukeboxPlayer.pause()
		},
		volume: function(b) {
			console.log("jukebox:", b);
			0 >= b ? this.jukeboxPlayer.setVolume(this.minVolume) : isNaN(b) ? this.jukeboxPlayer.setVolume(1) :
				1 < b ? this.jukeboxPlayer.setVolume(1) : this.jukeboxPlayer.setVolume(b)
		},
		getVolume: function() {
			return this.jukeboxPlayer.getVolume()
		},
		mute: function(b) {
			this.parent(b);
			this.bgmPlaying && (console.log("jukebox", this.premuteVolume), this.stayMuteFlag || (this.premuteVolume = this.getVolume()), this.jukeboxPlayer.pause(), this.jukeboxPlayer.setVolume(this.minVolume))
		},
		unmute: function(b) {
			this.parent(b);
			this.stayMuteFlag || (console.log("jukebox", this.premuteVolume), this.jukeboxPlayer.setVolume(this.premuteVolume), this.jukeboxPlayer.resume())
		}
	})
});
ig.baked = !0;
ig.module("plugins.audio.webaudio-music-player").requires("plugins.audio.sound-player").defines(function() {
	WebaudioMusicPlayer = SoundPlayer.extend({
		tagName: "WebaudioMusicPlayer",
		bgmPlaying: !1,
		isSupported: !1,
		muteFlag: !1,
		pausedTime: 0,
		webaudio: null,
		useHTML5Audio: !1,
		audio: null,
		inactiveAudio: null,
		codecs: null,
		reinitOnPlay: !1,
		inputList: null,
		_volume: 1,
		soundList: {},
		init: function(b) {
			this.webaudio = {
				compatibility: {},
				gainNode: null,
				buffer: null,
				source_loop: {},
				source_once: {}
			};
			try {
				Howler && Howler.ctx ? this.webaudio.context = Howler.ctx :
					ig && ig.webaudio_ctx ? this.webaudio.context = ig.webaudio_ctx : (this.AudioContext = window.AudioContext || window.webkitAudioContext, this.webaudio.context = new this.AudioContext, ig.webaudio_ctx = this.webaudio.context), this.isSupported = !0
			} catch (c) {
				console.log("Web Audio API not supported in this browser."), this.webaudio = null, this.useHTML5Audio = !0
			}
			if (this.useHTML5Audio)
				if ("undefined" !== typeof Audio) try {
					new Audio
				} catch (d) {
					this.useHTML5Audio = !1
				} else this.useHTML5Audio = !1;
			this.useHTML5Audio && (this.audio = new Audio,
				this.isSupported = !0, this.initHTML5Audio(b));
			if (!this.isSupported) return null;
			this.webaudio && (this.inputList = b, this.initWebAudio(b))
		},
		initWebAudio: function(b) {
			ig.ua.iOS && this.initIOSWebAudioUnlock();
			this.webaudio.gainNode = "undefined" === typeof this.webaudio.context.createGain ? this.webaudio.context.createGainNode() : this.webaudio.context.createGain();
			this.webaudio.gainNode.connect(this.webaudio.context.destination);
			this.webaudio.gainNode.gain.value = this._volume;
			this.webaudio.buffer = null;
			var c = "start",
				d = "stop",
				e = this.webaudio.context.createBufferSource();
			"function" !== typeof e.start && (c = "noteOn");
			this.webaudio.compatibility.start = c;
			"function" !== typeof e.stop && (d = "noteOff");
			this.webaudio.compatibility.stop = d;
			for (var f in b) {
				this.soundList[f] = f;
				var d = b[f].path,
					c = d + "." + ig.Sound.FORMAT.MP3.ext,
					l = d + "." + ig.Sound.FORMAT.OGG.ext;
				ig.ua.mobile ? ig.ua.iOS && (l = c) : (d = navigator.userAgent.toLowerCase(), -1 != d.indexOf("safari") && -1 >= d.indexOf("chrome") && (l = c), d.indexOf("win64") && (l = c));
				var p = new XMLHttpRequest;
				p.open("GET",
					l, !0);
				p.responseType = "arraybuffer";
				p.onload = function() {
					this.webaudio.context.decodeAudioData(p.response, function(b) {
						this.webaudio.buffer = b;
						this.webaudio.source_loop = {};
						this.bgmPlaying ? this.play(null, !0) : this.stop()
					}.bind(this), function() {
						console.log('Error decoding audio "' + l + '".')
					})
				}.bind(this);
				p.send();
				if (4 == p.readyState && "undefined" !== typeof Audio) {
					this.useHTML5Audio = !0;
					try {
						new Audio
					} catch (q) {
						this.useHTML5Audio = !1
					}
					this.useHTML5Audio && (console.log("Using HTML5 Audio"), this.webaudio = null, this.audio =
						new Audio, this.isSupported = !0, this.initHTML5Audio(b))
				}
				break
			}
		},
		initIOSWebAudioUnlock: function() {
			if (this.webaudio) {
				webaudio = this.webaudio;
				var b = function() {
					var c = webaudio.context,
						d = c.createBuffer(1, 1, 22050),
						e = c.createBufferSource();
					e.buffer = d;
					e.connect(c.destination);
					"undefined" === typeof e.start ? e.noteOn(0) : e.start(0);
					setTimeout(function() {
						(e.playbackState === e.PLAYING_STATE || e.playbackState === e.FINISHED_STATE) && window.removeEventListener("touchend", b, !1)
					}.bind(this), 0)
				};
				window.addEventListener("touchend",
					b, !1)
			}
		},
		initHTML5Audio: function(b) {
			if (this.useHTML5Audio && this.audio) {
				var c = this.audio;
				this.codecs = {};
				this.codecs = {
					mp3: !!c.canPlayType("audio/mpeg;").replace(/^no$/, ""),
					opus: !!c.canPlayType('audio/ogg; codecs="opus"').replace(/^no$/, ""),
					ogg: !!c.canPlayType('audio/ogg; codecs="vorbis"').replace(/^no$/, ""),
					wav: !!c.canPlayType('audio/wav; codecs="1"').replace(/^no$/, ""),
					aac: !!c.canPlayType("audio/aac;").replace(/^no$/, ""),
					m4a: !!(c.canPlayType("audio/x-m4a;") || c.canPlayType("audio/m4a;") || c.canPlayType("audio/aac;")).replace(/^no$/,
						""),
					mp4: !!(c.canPlayType("audio/x-mp4;") || c.canPlayType("audio/mp4;") || c.canPlayType("audio/aac;")).replace(/^no$/, ""),
					weba: !!c.canPlayType('audio/webm; codecs="vorbis"').replace(/^no$/, "")
				};
				this.is = {
					ff: Boolean(null != window.mozInnerScreenX && /firefox/.test(navigator.userAgent.toLowerCase())),
					ie: Boolean(document.all && !window.opera),
					opera: Boolean(window.opera),
					chrome: Boolean(window.chrome),
					safari: Boolean(!window.chrome && /safari/.test(navigator.userAgent.toLowerCase()) && window.getComputedStyle && !window.globalStorage &&
						!window.opera)
				};
				this.playDelay = -60;
				this.stopDelay = 30;
				this.is.chrome && (this.playDelay = -25);
				this.is.chrome && (this.stopDelay = 25);
				this.is.ff && (this.playDelay = -25);
				this.is.ff && (this.stopDelay = 85);
				this.is.opera && (this.playDelay = 5);
				this.is.opera && (this.stopDelay = 0);
				for (var d in b) {
					this.soundList[d] = d;
					var e = b[d].path,
						c = e + "." + ig.Sound.FORMAT.OGG.ext,
						e = e + "." + ig.Sound.FORMAT.MP3.ext,
						f = null;
					this.codecs[ig.Sound.FORMAT.OGG.ext.toLowerCase()] ? f = c : this.codecs[ig.Sound.FORMAT.MP3.ext.toLowerCase()] && (f = e);
					if (f) {
						ig.ua.mobile ?
							ig.ua.iOS && (f = e) : (b = navigator.userAgent.toLowerCase(), -1 != b.indexOf("safari") && -1 >= b.indexOf("chrome") && (f = e));
						this.audio.addEventListener("error", function() {
							this.audio.error && 4 === this.audio.error.code && (this.isSupported = !1)
						}, !1);
						this.audio.src = f;
						this.audio._pos = 0;
						this.audio.preload = "auto";
						this.audio.volume = this._volume;
						this.inactiveAudio = new Audio;
						this.inactiveAudio.src = f;
						this.inactiveAudio._pos = 0;
						this.inactiveAudio.preload = "auto";
						this.inactiveAudio.volume = this._volume;
						this.inactiveAudio.load();
						var l = function() {
							this._duration = this.audio.duration;
							this._loaded || (this._loaded = !0);
							this.bgmPlaying ? this.play(null, !0) : this.stop();
							this.audio.removeEventListener("canplaythrough", l, !1)
						}.bind(this);
						this.audio.addEventListener("canplaythrough", l, !1);
						this.audio.load();
						break
					}
				}
			}
		},
		play: function(b, c) {
			if (this.isSupported)
				if (this.bgmPlaying = !0, this.webaudio) {
					if (!c && this.reinitOnPlay && this.webaudio.source_loop.buffer == this.webaudio.buffer) {
						if (this.webaudio.source_loop._playing && (this.webaudio.source_loop[this.webaudio.compatibility.stop](0),
								this.webaudio.source_loop._playing = !1, this.pausedTime += this.webaudio.context.currentTime - this.webaudio.source_loop._startTime, this.pausedTime %= this.webaudio.source_loop.buffer.duration, this.webaudio.source_loop._startTime = 0, "noteOn" === this.webaudio.compatibility.start)) this.webaudio.source_once[this.webaudio.compatibility.stop](0);
						try {
							this.webaudio.context.close();
							this.webaudio.context = new this.AudioContext;
							this.webaudio.gainNode = this.webaudio.context.createGain();
							this.webaudio.gainNode.connect(this.webaudio.context.destination);
							this.webaudio.gainNode.gain.value = this._volume;
							var d = "start",
								e = "stop",
								f = this.webaudio.context.createBufferSource();
							"function" !== typeof f.start && (d = "noteOn");
							this.webaudio.compatibility.start = d;
							"function" !== typeof f.stop && (e = "noteOff");
							this.webaudio.compatibility.stop = e;
							this.webaudio.source_loop = {};
							this.play(null, !0)
						} catch (l) {}
					}
					if (this.webaudio.buffer) {
						if (!this.muteFlag && (this.bgmPlaying = !0, !this.webaudio.source_loop._playing)) {
							this.webaudio.source_loop = this.webaudio.context.createBufferSource();
							this.webaudio.source_loop.buffer =
								this.webaudio.buffer;
							this.webaudio.source_loop.loop = !0;
							this.webaudio.source_loop.connect(this.webaudio.gainNode);
							if (null == b || isNaN(b)) b = 0, this.pausedTime && (b = this.pausedTime);
							this.webaudio.source_loop._startTime = this.webaudio.context.currentTime;
							if ("noteOn" === this.webaudio.compatibility.start) this.webaudio.source_once = this.webaudio.context.createBufferSource(), this.webaudio.source_once.buffer = this.webaudio.buffer, this.webaudio.source_once.connect(this.webaudio.gainNode), this.webaudio.source_once.noteGrainOn(0,
								b, this.webaudio.buffer.duration - b), this.webaudio.source_loop[this.webaudio.compatibility.start](this.webaudio.context.currentTime + (this.webaudio.buffer.duration - b));
							else this.webaudio.source_loop[this.webaudio.compatibility.start](0, b);
							this.webaudio.source_loop._playing = !0
						}
					} else this.bgmPlaying = !0
				} else if (this.audio) {
				var p = this.audio;
				if (!this.muteFlag)
					if (this.bgmPlaying = !0, isNaN(b) && (b = 0, this.pausedTime && (b = this.pausedTime)), d = this._duration - b, this._onEndTimer && (clearTimeout(this._onEndTimer), this._onEndTimer =
							null), this._onEndTimer = setTimeout(function() {
							this.audio.currentTime = 0;
							this.audio.pause();
							this.pausedTime = 0;
							if (this.inactiveAudio) {
								var b = this.audio;
								this.audio = this.inactiveAudio;
								this.inactiveAudio = b
							}
							this.play()
						}.bind(this), 1E3 * d + this.playDelay), 4 === p.readyState || !p.readyState && navigator.isCocoonJS) p.readyState = 4, p.currentTime = b, p.muted = this.muteFlag || p.muted, p.volume = this._volume, setTimeout(function() {
						p.play()
					}, 0);
					else {
						clearTimeout(this._onEndTimer);
						this._onEndTimer = null;
						var q = function() {
							typeof("function" ==
								this.play) && (this.play(), p.removeEventListener("canplaythrough", q, !1))
						}.bind(this);
						p.addEventListener("canplaythrough", q, !1)
					}
			}
		},
		restart: function() {
			this.bgmPlaying = !1;
			if (this.isSupported)
				if (this.webaudio) {
					if (this.webaudio.source_loop._playing && (this.webaudio.source_loop[this.webaudio.compatibility.stop](0), this.webaudio.source_loop._playing = !1, this.pausedTime += 0, this.pausedTime = 0, this.webaudio.source_loop._startTime = 0, "noteOn" === this.webaudio.compatibility.start)) this.webaudio.source_once[this.webaudio.compatibility.stop](0)
				} else if (this.audio) {
				var b =
					this.audio;
				4 == b.readyState && (this.pausedTime = b.currentTime, b.currentTime = 0, b.pause(), clearTimeout(this._onEndTimer), this._onEndTimer = null)
			}
		},
		stop: function() {
			this.bgmPlaying = !1;
			if (this.isSupported)
				if (this.webaudio) {
					if (this.webaudio.source_loop._playing && (this.webaudio.source_loop[this.webaudio.compatibility.stop](0), this.webaudio.source_loop._playing = !1, this.pausedTime += this.webaudio.context.currentTime - this.webaudio.source_loop._startTime, this.pausedTime %= this.webaudio.source_loop.buffer.duration,
							this.webaudio.source_loop._startTime = 0, "noteOn" === this.webaudio.compatibility.start)) this.webaudio.source_once[this.webaudio.compatibility.stop](0)
				} else if (this.audio) {
				var b = this.audio;
				4 == b.readyState && (this.pausedTime = b.currentTime, b.currentTime = 0, b.pause(), clearTimeout(this._onEndTimer), this._onEndTimer = null)
			}
		},
		volume: function(b) {
			if (isNaN(b) || null == b) return this.getVolume();
			this.isSupported && (this._volume = b, 0 > this._volume ? this._volume = 0 : 1 < this._volume && (this._volume = 1), this.webaudio ? this.webaudio.gainNode &&
				(this.webaudio.gainNode.gain.value = this._volume) : this.audio && (this.audio.volume = this._volume, this.inactiveAudio && (this.inactiveAudio.volume = this._volume)))
		},
		getVolume: function() {
			return !this.isSupported ? 0 : this._volume
		},
		mute: function(b) {
			this.parent(b);
			!1 == this.muteFlag && (this.muteFlag = !0, this.bgmPlaying && (this.stop(), this.bgmPlaying = !0))
		},
		unmute: function(b) {
			this.parent(b);
			!this.stayMuteFlag && !0 == this.muteFlag && (this.muteFlag = !1, this.bgmPlaying && this.play())
		}
	})
});
ig.baked = !0;
ig.module("plugins.audio.sound-info").defines(function() {
	SoundInfo = ig.Class.extend({
		FORMATS: {
			OGG: ".ogg",
			MP3: ".mp3"
		},
		sfx: {
			kittyopeningSound: {
				path: "media/audio/opening/kittyopening"
			},
			staticSound: {
				path: "media/audio/play/static"
			},
			openingSound: {
				path: "media/audio/opening/opening"
			},
			click: {
				path: "media/audio/sound/click"
			},
			clap: {
				path: "media/audio/sound/clap"
			},
			boo: {
				path: "media/audio/sound/boo"
			},
			buzz1: {
				path: "media/audio/sound/buzz1"
			},
			buzz2: {
				path: "media/audio/sound/buzz2"
			},
			buzz3: {
				path: "media/audio/sound/buzz3"
			},
			result: {
				path: "media/audio/sound/result"
			},
			selected: {
				path: "media/audio/sound/selected"
			}
		},
		bgm: {
			background: {
				path: "media/audio/bgm",
				startOgg: 0,
				endOgg: 5.683125,
				startMp3: 0,
				endMp3: 5.683125
			},
			song1: {
				path: "media/audio/song/song-1",
				startOgg: 0,
				endOgg: 5.683125,
				startMp3: 0,
				endMp3: 5.683125
			}
		}
	})
});
ig.baked = !0;
ig.module("plugins.audio.sound-handler").requires("plugins.audio.impact-music-player", "plugins.audio.impact-sound-player", "plugins.audio.howler-player", "plugins.audio.howler-music-player", "plugins.audio.jukebox-player", "plugins.audio.webaudio-music-player", "plugins.audio.sound-info").defines(function() {
	ig.SoundHandler = ig.Class.extend({
		bgmPlayer: null,
		sfxPlayer: null,
		focusBlurMute: !1,
		soundInfo: new SoundInfo,
		init: function() {
			console.log("Initiating sound handler");
			ig.ua.mobile ? (this.sfxPlayer = new HowlerPlayer(this.soundInfo.sfx),
				this.bgmPlayer = new WebaudioMusicPlayer(this.soundInfo.bgm, {
					loop: !0
				}), this.bgmPlayer.isSupported || (this.bgmPlayer = new JukeboxPlayer(this.soundInfo.bgm, {
					loop: !0
				}))) : (this.sfxPlayer = new HowlerPlayer(this.soundInfo.sfx), this.bgmPlayer = new WebaudioMusicPlayer(this.soundInfo.bgm, {
				loop: !0
			}), this.bgmPlayer.isSupported || (this.bgmPlayer = new ImpactMusicPlayer(this.soundInfo.bgm, {
				loop: !0
			})))
		},
		unlockWebAudio: function() {
			Howler && (Howler.ctx && "running" !== Howler.ctx.state && Howler.ctx.resume(), Howler._audioUnlocked ||
				"function" === typeof Howler._unlockAudio && Howler._unlockAudio());
			ig && ig.webaudio_ctx && ig.webaudio_ctx.state && "running" !== ig.webaudio_ctx.state && ig.webaudio_ctx.resume();
			this.bgmPlayer.webaudio && this.bgmPlayer.webaudio.context && this.bgmPlayer.webaudio.context.state && "running" !== this.bgmPlayer.webaudio.context.state && this.bgmPlayer.webaudio.context.resume()
		},
		checkBGM: function() {
			return this.bgmPlayer.stayMuteFlag
		},
		checkSFX: function() {
			return this.sfxPlayer.stayMuteFlag
		},
		muteSFX: function(b) {
			this.sfxPlayer &&
				this.sfxPlayer.mute(b)
		},
		muteBGM: function(b) {
			this.bgmPlayer && this.bgmPlayer.mute(b)
		},
		unmuteSFX: function(b) {
			this.sfxPlayer && this.sfxPlayer.unmute(b)
		},
		unmuteBGM: function(b) {
			this.bgmPlayer && this.bgmPlayer.unmute(b)
		},
		muteAll: function(b) {
			this.muteSFX(b);
			this.muteBGM(b)
		},
		unmuteAll: function(b) {
			this.unlockWebAudio();
			this.unmuteSFX(b);
			this.unmuteBGM(b)
		},
		forceMuteAll: function() {
			this.focusBlurMute || this.muteAll(!1);
			this.focusBlurMute = !0
		},
		forceUnMuteAll: function() {
			this.focusBlurMute && (this.unmuteAll(!1), this.focusBlurMute = !1)
		},
		saveVolume: function() {
			this.sfxPlayer && ig.game.io.storageSet("soundVolume", this.sfxPlayer.getVolume());
			this.bgmPlayer && ig.game.io.storageSet("musicVolume", this.bgmPlayer.getVolume())
		},
		forceLoopBGM: function() {
			var b;
			if (!this.focusBlurMute && this.bgmPlayer.bgmPlaying && this.bgmPlayer) {
				var c = this.bgmPlayer.jukeboxPlayer;
				if (c) {
					null != window.mozInnerScreenX && /firefox/.test(navigator.userAgent.toLowerCase());
					b = Boolean(window.chrome);
					!window.chrome && /safari/.test(navigator.userAgent.toLowerCase());
					var d =
						0.1;
					ig.ua.mobile && (d = 0.115, ig.ua.android && (d = 0.45, b && (d = 0.3)));
					c.settings.spritemap.music && (b = c.settings.spritemap.music.end - d, c.getCurrentTime() >= b && (b = c.settings.spritemap.music.start, ig.ua.android ? this.forcelooped || (c.play(b, !0), this.forcelooped = !0, setTimeout(function() {
						ig.soundHandler.forcelooped = !1
					}, d)) : c.setCurrentTime(b)))
				} else "ImpactMusicPlayer" == this.bgmPlayer.tagName && (null != window.mozInnerScreenX && /firefox/.test(navigator.userAgent.toLowerCase()), b = Boolean(window.chrome), !window.chrome &&
					/safari/.test(navigator.userAgent.toLowerCase()), d = 0.1, ig.ua.mobile && (d = 0.115, ig.ua.android && (d = 0.45, b && (d = 0.3))), c = 0, "mp3" == ig.soundManager.format.ext && (c = 0.05), ig.music.currentTrack && (b = ig.music.currentTrack.duration - d, ig.music.currentTrack.currentTime >= b && (ig.ua.android ? this.forcelooped || (ig.music.currentTrack.pause(), ig.music.currentTrack.currentTime = c, ig.music.currentTrack.play(), this.forcelooped = !0, setTimeout(function() {
						ig.soundHandler.forcelooped = !1
					}, d)) : ig.music.currentTrack.currentTime = c)))
			}
		}
	})
});
ig.baked = !0;
ig.module("plugins.handlers.visibility-handler").requires("plugins.audio.sound-handler").defines(function() {
	ig.VisibilityHandler = ig.Class.extend({
		version: "1.0.2",
		config: {
			allowResumeWithoutFocus: {
				desktop: !0,
				mobile: {
					kaios: !1,
					"default": !0
				}
			},
			handlerDelay: {
				desktop: 0,
				mobile: {
					kaios: 0,
					"default": 0
				}
			},
			autoFocusOnResume: {
				desktop: !0,
				mobile: {
					kaios: !1,
					"default": !0
				}
			},
			autoFocusAfterResume: {
				desktop: !0,
				mobile: {
					kaios: !1,
					"default": !0
				}
			}
		},
		browserPrefixes: ["o", "ms", "moz", "webkit"],
		browserPrefix: null,
		hiddenPropertyName: null,
		visibilityEventName: null,
		visibilityStateName: null,
		isShowingOverlay: !1,
		isFocused: !1,
		isPaused: !1,
		init: function() {
			this.initVisibilityHandler();
			this.initFocusHandler();
			this.initPageTransitionHandler();
			ig.visibilityHandler = this
		},
		pauseHandler: function() {
			ig.game && ig.game.pauseGame();
			ig.soundHandler && ig.soundHandler.forceMuteAll()
		},
		resumeHandler: function() {
			ig.game && ig.game.resumeGame();
			ig.soundHandler && ig.soundHandler.forceUnMuteAll()
		},
		initVisibilityHandler: function() {
			this.browserPrefix = this.getBrowserPrefix();
			this.hiddenPropertyName =
				this.getHiddenPropertyName(this.browserPrefix);
			this.visibilityEventName = this.getVisibilityEventName(this.browserPrefix);
			this.visibilityStateName = this.getVisibilityStateName(this.browserPrefix);
			this.visibilityEventName && document.addEventListener(this.visibilityEventName, this.onChange.bind(this), !0)
		},
		initFocusHandler: function() {
			window.addEventListener("blur", this.onChange.bind(this), !0);
			document.addEventListener("blur", this.onChange.bind(this), !0);
			document.addEventListener("focusout", this.onChange.bind(this),
				!0);
			window.addEventListener("focus", this.onChange.bind(this), !0);
			document.addEventListener("focus", this.onChange.bind(this), !0);
			document.addEventListener("focusin", this.onChange.bind(this), !0)
		},
		initPageTransitionHandler: function() {
			window.addEventListener("pagehide", this.onChange.bind(this), !0);
			window.addEventListener("pageshow", this.onChange.bind(this), !0)
		},
		getBrowserPrefix: function() {
			var b = null;
			this.browserPrefixes.forEach(function(c) {
				if (this.getHiddenPropertyName(c) in document) return b = c
			}.bind(this));
			return b
		},
		getHiddenPropertyName: function(b) {
			return b ? b + "Hidden" : "hidden"
		},
		getVisibilityEventName: function(b) {
			return (b ? b : "") + "visibilitychange"
		},
		getVisibilityStateName: function(b) {
			return b ? b + "VisibilityState" : "visibilityState"
		},
		hasView: function() {
			return !(document[this.hiddenPropertyName] || "visible" !== document[this.visibilityStateName])
		},
		hasFocus: function() {
			return document.hasFocus() || this.isFocused
		},
		onOverlayShow: function() {
			this.systemPaused();
			this.isShowingOverlay = !0
		},
		onOverlayHide: function() {
			this.isShowingOverlay = !1;
			this.systemResumed()
		},
		systemPaused: function() {
			if (this.isPaused) return !1;
			this.pauseHandler();
			return this.isPaused = !0
		},
		systemResumed: function() {
			if (!this.isPaused || !this.hasView() || this.isShowingOverlay) return !1;
			if (!this.hasFocus())
				if (ig.ua.mobile)
					if (this.isKaiOS()) {
						if (!this.config.allowResumeWithoutFocus.mobile.kaios) return !1
					} else {
						if (!this.config.allowResumeWithoutFocus.mobile.default) return !1
					}
			else if (!this.config.allowResumeWithoutFocus.desktop) return !1;
			this.focusOnResume();
			this.resumeHandler();
			this.focusAfterResume();
			this.isPaused = !1;
			return !0
		},
		isKaiOS: function() {
			return /KAIOS/.test(navigator.userAgent) || !1
		},
		focusOnResume: function() {
			return ig.ua.mobile ? this.isKaiOS() ? this.config.autoFocusOnResume.mobile.kaios : this.config.autoFocusOnResume.mobile.default : this.config.autoFocusOnResume.desktop
		},
		focusAfterResume: function() {
			return ig.ua.mobile ? this.isKaiOS() ? this.config.autoFocusAfterResume.mobile.kaios : this.config.autoFocusAfterResume.mobile.default : this.config.autoFocusAfterResume.desktop
		},
		focus: function(b) {
			window.focus && b && window.focus()
		},
		handleDelayedEvent: function(b) {
			if (!this.hasView() || "pause" === b.type || "pageHide" === b.type || "blur" === b.type || "focusout" === b.type) {
				if ("blur" === b.type || "focusout" === b.type) this.isFocused = !1;
				return this.systemPaused(b)
			}
			if ("focus" === b.type || "focusin" === b.type) this.isFocused = !0;
			return this.systemResumed(b)
		},
		startDelayedEventHandler: function(b) {
			ig.ua.mobile ? this.isKaiOS() ? 0 < this.config.handlerDelay.mobile.kaios ? window.setTimeout(function(b) {
				this.handleDelayedEvent(b)
			}.bind(this,
				b), this.config.handlerDelay.mobile) : this.handleDelayedEvent(b) : 0 < this.config.handlerDelay.mobile.default ? window.setTimeout(function(b) {
				this.handleDelayedEvent(b)
			}.bind(this, b), this.config.handlerDelay.mobile) : this.handleDelayedEvent(b) : 0 < this.config.handlerDelay.desktop ? window.setTimeout(function(b) {
				this.handleDelayedEvent(b)
			}.bind(this, b), this.config.handlerDelay.desktop) : this.handleDelayedEvent(b)
		},
		onChange: function(b) {
			this.startDelayedEventHandler(b)
		}
	})
});
ig.baked = !0;
ig.module("plugins.audio.song-handler").requires("plugins.audio.sound-handler").defines(function() {
	ig.SongHandler = ig.SoundHandler.extend({
		bgmPlayer: null,
		sfxPlayer: null,
		songPlayer: null,
		focusBlurMute: !1,
		soundInfo: new SoundInfo,
		selectedSong: null,
		init: function() {
			console.log("Initiating song handler")
		},
		initSong: function() {
			this.songPlayer = new WebaudioMusicPlayer(this.selectedSong, "noteOn");
			this.songPlayer.isSupported || (this.songPlayer = new JukeboxPlayer(this.selectedSong, {
				loop: !1
			}))
		},
		checkBGM: function() {
			return this.bgmPlayer.stayMuteFlag
		},
		checkSong: function() {
			return this.songPlayer.stayMuteFlag
		},
		checkSFX: function() {
			return this.sfxPlayer.stayMuteFlag
		},
		muteSFX: function(b) {
			this.sfxPlayer && this.sfxPlayer.mute(b)
		},
		muteSong: function(b) {
			this.songPlayer && this.songPlayer.mute(b)
		},
		muteBGM: function(b) {
			this.bgmPlayer && this.bgmPlayer.mute(b)
		},
		unmuteSFX: function(b) {
			this.sfxPlayer && this.sfxPlayer.unmute(b)
		},
		unmuteSong: function(b) {
			this.songPlayer && this.songPlayer.unmute(b)
		},
		unmuteBGM: function(b) {
			this.bgmPlayer && this.bgmPlayer.unmute(b)
		},
		muteAll: function(b) {
			this.muteSFX(b);
			this.muteBGM(b);
			this.muteSong(b)
		},
		unmuteAll: function(b) {
			this.unmuteSFX(b);
			this.unmuteBGM(b);
			this.unmuteSong(b)
		},
		forceMuteAll: function() {
			this.focusBlurMute || this.muteAll(!1);
			this.focusBlurMute = !0
		},
		forceUnMuteAll: function() {
			this.focusBlurMute && (this.unmuteAll(!1), this.focusBlurMute = !1)
		}
	})
});
ig.baked = !0;
ig.module("plugins.io.storage").defines(function() {
	ig.Storage = ig.Class.extend({
		staticInstantiate: function() {
			return !ig.Storage.instance ? null : ig.Storage.instance
		},
		init: function() {
			ig.Storage.instance = this
		},
		isCapable: function() {
			return "undefined" !== typeof window.localStorage
		},
		isSet: function(b) {
			return null !== this.get(b)
		},
		initUnset: function(b, c) {
			null === this.get(b) && this.set(b, c)
		},
		get: function(b) {
			if (!this.isCapable()) return null;
			try {
				return JSON.parse(localStorage.getItem(b))
			} catch (c) {
				return window.localStorage.getItem(b)
			}
		},
		getInt: function(b) {
			return ~~this.get(b)
		},
		getFloat: function(b) {
			return parseFloat(this.get(b))
		},
		getBool: function(b) {
			return !!this.get(b)
		},
		key: function(b) {
			return this.isCapable() ? window.localStorage.key(b) : null
		},
		set: function(b, c) {
			if (!this.isCapable()) return null;
			try {
				window.localStorage.setItem(b, JSON.stringify(c))
			} catch (d) {
				console.log(d)
			}
		},
		setHighest: function(b, c) {
			c > this.getFloat(b) && this.set(b, c)
		},
		remove: function(b) {
			if (!this.isCapable()) return null;
			window.localStorage.removeItem(b)
		},
		clear: function() {
			if (!this.isCapable()) return null;
			window.localStorage.clear()
		}
	})
});
ig.baked = !0;
ig.module("plugins.io.mouse").defines(function() {
	Mouse = ig.Class.extend({
		pos: new Vector2(0, 0),
		bindings: {
			click: [ig.KEY.MOUSE1]
		},
		init: function() {
			ig.input.initMouse();
			for (var b in this.bindings) {
				this[b] = b;
				for (var c = 0; c < this.bindings[b].length; c++) ig.input.bind(this.bindings[b][c], b)
			}
		},
		getPos: function() {
			this.pos.set(ig.input.mouse.x / ig.sizeHandler.sizeRatio.x / ig.sizeHandler.scaleRatioMultiplier.x, ig.input.mouse.y / ig.sizeHandler.sizeRatio.y / ig.sizeHandler.scaleRatioMultiplier.y);
			return this.pos
		}
	})
});
ig.baked = !0;
ig.module("plugins.io.keyboard").defines(function() {
	Keyboard = ig.Class.extend({
		bindings: {
			jump: [ig.KEY.W, ig.KEY.UP_ARROW],
			moveright: [ig.KEY.D, ig.KEY.RIGHT_ARROW],
			moveleft: [ig.KEY.A, ig.KEY.LEFT_ARROW],
			shoot: [ig.KEY.S, ig.KEY.DOWN_ARROW, ig.KEY.SPACE]
		},
		init: function() {
			for (var b in this.bindings) {
				this[b] = b;
				for (var c = 0; c < this.bindings[b].length; c++) ig.input.bind(this.bindings[b][c], b)
			}
		}
	})
});
ig.baked = !0;
ig.module("plugins.io.gamepad-input").defines(function() {
	ig.PADKEY = {
		BUTTON_0: 0,
		PADBUTTON_1: 1,
		BUTTON_2: 2,
		BUTTON_3: 3,
		BUTTON_LEFT_BUMPER: 4,
		BUTTON_RIGHT_BUMPER: 5,
		BUTTON_LEFT_TRIGGER: 6,
		BUTTON_RIGHT_TRIGGER: 7,
		BUTTON_LEFT_JOYSTICK: 10,
		BUTTON_RIGHT_JOYSTICK: 11,
		BUTTON_DPAD_UP: 12,
		BUTTON_DPAD_DOWN: 13,
		BUTTON_DPAD_LEFT: 14,
		BUTTON_DPAD_RIGHT: 15,
		BUTTON_MENU: 16,
		AXIS_LEFT_JOYSTICK_X: 0,
		AXIS_LEFT_JOYSTICK_Y: 1,
		AXIS_RIGHT_JOYSTICK_X: 2,
		AXIS_RIGHT_JOYSTICK_Y: 3
	};
	ig.GamepadInput = ig.Class.extend({
		isInit: !1,
		isSupported: !1,
		list: [],
		bindings: {},
		states: {},
		presses: {},
		releases: {},
		downLocks: {},
		upLocks: {},
		leftStick: {
			x: 0,
			y: 0
		},
		rightStick: {
			x: 0,
			y: 0
		},
		start: function() {
			if (!this.isInit) {
				this.isInit = !0;
				var b = navigator.getGamepads || navigator.webkitGetGamepads;
				b && (!navigator.getGamepads && navigator.webkitGetGamepads && (navigator.getGamepads = navigator.webkitGetGamepads), this.list = navigator.getGamepads());
				this.isSupported = b
			}
		},
		isAvailable: function() {
			return this.isInit && this.isSupported
		},
		buttonPressed: function(b) {
			return "object" == typeof b ? b.pressed :
				1 == b
		},
		buttonDown: function(b) {
			if (b = this.bindings[b]) this.states[b] = !0, this.downLocks[b] || (this.presses[b] = !0, this.downLocks[b] = !0)
		},
		buttonUp: function(b) {
			if ((b = this.bindings[b]) && this.downLocks[b] && !this.upLocks[b]) this.states[b] = !1, this.releases[b] = !0, this.upLocks[b] = !0
		},
		clearPressed: function() {
			for (var b in this.releases) this.states[b] = !1, this.downLocks[b] = !1;
			this.releases = {};
			this.presses = {};
			this.upLocks = {}
		},
		bind: function(b, c) {
			this.bindings[b] = c
		},
		unbind: function(b) {
			this.releases[this.bindings[b]] = !0;
			this.bindings[b] = null
		},
		unbindAll: function() {
			this.bindings = {};
			this.states = {};
			this.presses = {};
			this.releases = {};
			this.downLocks = {};
			this.upLocks = {}
		},
		state: function(b) {
			return this.states[b]
		},
		pressed: function(b) {
			return this.presses[b]
		},
		released: function(b) {
			return this.releases[b]
		},
		clamp: function(b, c, d) {
			return b < c ? c : b > d ? d : b
		},
		pollGamepads: function() {
			if (this.isSupported) {
				this.leftStick.x = 0;
				this.leftStick.y = 0;
				this.rightStick.x = 0;
				this.rightStick.y = 0;
				this.list = navigator.getGamepads();
				for (var b in this.bindings) {
					for (var c = !1, d = 0; d < this.list.length; d++) {
						var e = this.list[d];
						if (e && e.buttons && this.buttonPressed(e.buttons[b])) {
							c = !0;
							break
						}
					}
					c ? this.buttonDown(b) : this.buttonUp(b)
				}
				for (d = 0; d < this.list.length; d++)
					if ((e = this.list[d]) && e.axes) {
						b = e.axes[ig.GAMEPADINPUT.AXIS_LEFT_JOYSTICK_X];
						var c = e.axes[ig.GAMEPADINPUT.AXIS_LEFT_JOYSTICK_Y],
							f = e.axes[ig.GAMEPADINPUT.AXIS_RIGHT_JOYSTICK_X],
							e = e.axes[ig.GAMEPADINPUT.AXIS_RIGHT_JOYSTICK_Y];
						this.leftStick.x += isNaN(b) ? 0 : b;
						this.leftStick.y += isNaN(c) ? 0 : c;
						this.rightStick.x += isNaN(f) ? 0 : f;
						this.rightStick.y +=
							isNaN(e) ? 0 : e
					} 0 < this.list.length && (this.leftStick.x = this.clamp(this.leftStick.x, -1, 1), this.leftStick.y = this.clamp(this.leftStick.y, -1, 1), this.rightStick.x = this.clamp(this.rightStick.x, -1, 1), this.rightStick.y = this.clamp(this.rightStick.y, -1, 1))
			}
		}
	})
});
ig.baked = !0;
ig.module("plugins.io.gamepad").requires("plugins.io.gamepad-input").defines(function() {
	Gamepad = ig.Class.extend({
		bindings: {
			padJump: [ig.PADKEY.BUTTON_0]
		},
		init: function() {
			ig.gamepadInput.start();
			for (var b in this.bindings)
				for (var c = 0; c < this.bindings[b].length; c++) ig.gamepadInput.bind(this.bindings[b][c], b)
		},
		press: function() {},
		held: function() {},
		release: function() {}
	})
});
ig.baked = !0;
ig.module("plugins.io.multitouch").defines(function() {
	Multitouch = ig.Class.extend({
		init: function() {
			ig.multitouchInput.start()
		},
		getTouchesPos: function() {
			if (ig.ua.mobile) {
				if (0 < ig.multitouchInput.touches.length) {
					for (var b = [], c = 0; c < ig.multitouchInput.touches.length; c++) {
						var d = ig.multitouchInput.touches[c];
						b.push({
							x: d.x,
							y: d.y
						})
					}
					return b
				}
				return null
			}
		}
	})
});
ig.baked = !0;
ig.module("plugins.io.multitouch-input").defines(function() {
	ig.MultitouchInput = ig.Class.extend({
		isStart: !1,
		touches: [],
		multitouchCapable: !1,
		lastEventUp: null,
		start: function() {
			this.isStart || (this.isStart = !0, navigator.maxTouchPoints && 1 < navigator.maxTouchPoints && (this.multitouchCapable = !0), ig.ua.touchDevice && (window.navigator.msPointerEnabled && (ig.system.canvas.addEventListener("MSPointerDown", this.touchdown.bind(this), !1), ig.system.canvas.addEventListener("MSPointerUp", this.touchup.bind(this), !1), ig.system.canvas.addEventListener("MSPointerMove",
				this.touchmove.bind(this), !1), ig.system.canvas.style.msContentZooming = "none", ig.system.canvas.style.msTouchAction = "none"), ig.system.canvas.addEventListener("touchstart", this.touchdown.bind(this), !1), ig.system.canvas.addEventListener("touchend", this.touchup.bind(this), !1), ig.system.canvas.addEventListener("touchmove", this.touchmove.bind(this), !1)))
		},
		touchmove: function(b) {
			if (ig.ua.touchDevice) {
				var c = parseInt(ig.system.canvas.offsetWidth) || ig.system.realWidth,
					d = parseInt(ig.system.canvas.offsetHeight) ||
					ig.system.realHeight,
					c = ig.system.scale * (c / ig.system.realWidth),
					d = ig.system.scale * (d / ig.system.realHeight);
				if (b.touches) {
					for (; 0 < this.touches.length;) this.touches.pop();
					!this.multitouchCapable && 1 < b.touches.length && (this.multitouchCapable = !0);
					var e = {
						left: 0,
						top: 0
					};
					ig.system.canvas.getBoundingClientRect && (e = ig.system.canvas.getBoundingClientRect());
					for (var f = 0; f < b.touches.length; f++) {
						var l = b.touches[f];
						l && this.touches.push({
							x: (l.clientX - e.left) / c,
							y: (l.clientY - e.top) / d
						})
					}
				} else this.windowMove(b)
			}
			try {
				ig.soundHandler.unlockWebAudio()
			} catch (p) {}
		},
		touchdown: function(b) {
			var c = parseInt(ig.system.canvas.offsetWidth) || ig.system.realWidth,
				d = parseInt(ig.system.canvas.offsetHeight) || ig.system.realHeight,
				c = ig.system.scale * (c / ig.system.realWidth),
				d = ig.system.scale * (d / ig.system.realHeight);
			if (window.navigator.msPointerEnabled) this.windowKeyDown(b);
			else if (ig.ua.touchDevice && b.touches) {
				for (; 0 < this.touches.length;) this.touches.pop();
				!this.multitouchCapable && 1 < b.touches.length && (this.multitouchCapable = !0);
				var e = {
					left: 0,
					top: 0
				};
				ig.system.canvas.getBoundingClientRect &&
					(e = ig.system.canvas.getBoundingClientRect());
				for (var f = 0; f < b.touches.length; f++) {
					var l = b.touches[f];
					l && this.touches.push({
						x: (l.clientX - e.left) / c,
						y: (l.clientY - e.top) / d
					})
				}
			}
		},
		touchup: function(b) {
			var c = parseInt(ig.system.canvas.offsetWidth) || ig.system.realWidth;
			parseInt(ig.system.canvas.offsetHeight);
			c = ig.system.scale * (c / ig.system.realWidth);
			if (window.navigator.msPointerEnabled) this.windowKeyUp(b);
			else {
				this.lastEventUp = b;
				var d = {
					left: 0,
					top: 0
				};
				ig.system.canvas.getBoundingClientRect && (d = ig.system.canvas.getBoundingClientRect());
				if (ig.ua.touchDevice) {
					b = (b.changedTouches[0].clientX - d.left) / c;
					for (c = 0; c < this.touches.length; c++) this.touches[c].x >= b - 40 && this.touches[c].x <= b + 40 && this.touches.splice(c, 1)
				}
			}
			if (ig.visibilityHandler) ig.visibilityHandler.onChange("focus");
			try {
				ig.soundHandler.unlockWebAudio()
			} catch (e) {}
		},
		windowKeyDown: function(b) {
			var c = parseInt(ig.system.canvas.offsetWidth) || ig.system.realWidth,
				d = parseInt(ig.system.canvas.offsetHeight) || ig.system.realHeight,
				c = ig.system.scale * (c / ig.system.realWidth),
				d = ig.system.scale *
				(d / ig.system.realHeight);
			if (window.navigator.msPointerEnabled) {
				var e = {
					left: 0,
					top: 0
				};
				ig.system.canvas.getBoundingClientRect && (e = ig.system.canvas.getBoundingClientRect());
				b = b.changedTouches ? b.changedTouches : [b];
				for (var f = 0; f < b.length; ++f) {
					for (var l = b[f], p = "undefined" != typeof l.identifier ? l.identifier : "undefined" != typeof l.pointerId ? l.pointerId : 1, q = (l.clientX - e.left) / c, l = (l.clientY - e.top) / d, g = 0; g < this.touches.length; ++g) this.touches[g].identifier == p && this.touches.splice(g, 1);
					this.touches.push({
						x: q,
						y: l,
						identifier: p
					})
				}
				for (c = 0; c < this.touches.length; c++);
			}
		},
		windowKeyUp: function(b) {
			b = "undefined" != typeof b.identifier ? b.identifier : "undefined" != typeof b.pointerId ? b.pointerId : 1;
			for (var c = 0; c < this.touches.length; ++c) this.touches[c].identifier == b && this.touches.splice(c, 1);
			for (; 0 < this.touches.length;) this.touches.pop();
			if (ig.visibilityHandler) ig.visibilityHandler.onChange("focus");
			try {
				ig.soundHandler.unlockWebAudio()
			} catch (d) {}
		},
		windowMove: function(b) {
			var c = parseInt(ig.system.canvas.offsetWidth) || ig.system.realWidth,
				d = parseInt(ig.system.canvas.offsetHeight) || ig.system.realHeight,
				c = ig.system.scale * (c / ig.system.realWidth),
				d = ig.system.scale * (d / ig.system.realHeight),
				e = {
					left: 0,
					top: 0
				};
			ig.system.canvas.getBoundingClientRect && (e = ig.system.canvas.getBoundingClientRect());
			if (window.navigator.msPointerEnabled)
				for (var f = "undefined" != typeof b.identifier ? b.identifier : "undefined" != typeof b.pointerId ? b.pointerId : 1, l = 0; l < this.touches.length; ++l)
					if (this.touches[l].identifier == f) {
						var p = (b.clientY - e.top) / d;
						this.touches[l].x = (b.clientX -
							e.left) / c;
						this.touches[l].y = p
					} try {
				ig.soundHandler.unlockWebAudio()
			} catch (q) {}
		}
	})
});
ig.baked = !0;
ig.module("plugins.io.fake-storage").requires("impact.game").defines(function() {
	ig.FakeStorage = ig.Class.extend({
		tempData: {},
		init: function() {
			ig.FakeStorage.instance = this
		},
		initUnset: function(b, c) {
			null === this.get(b) && this.set(b, c)
		},
		set: function(b, c) {
			this.tempData[b] = JSON.stringify(c)
		},
		setHighest: function(b, c) {
			c > this.getFloat(b) && this.set(b, c)
		},
		get: function(b) {
			return "undefined" == typeof this.tempData[b] ? null : JSON.parse(this.tempData[b])
		},
		getInt: function(b) {
			return ~~this.get(b)
		},
		getFloat: function(b) {
			return parseFloat(this.get(b))
		},
		getBool: function(b) {
			return !!this.get(b)
		},
		isSet: function(b) {
			return null !== this.get(b)
		},
		remove: function(b) {
			delete this.tempData[b]
		},
		clear: function() {
			this.tempData = {}
		}
	})
});
ig.baked = !0;
ig.module("plugins.io.io-manager").requires("plugins.io.storage", "plugins.io.mouse", "plugins.io.keyboard", "plugins.io.gamepad", "plugins.io.multitouch", "plugins.io.multitouch-input", "plugins.io.gamepad-input", "plugins.io.fake-storage").defines(function() {
	IoManager = ig.Class.extend({
		storage: null,
		localStorageSupport: !1,
		mouse: null,
		keyboard: null,
		multitouch: null,
		gamepad: null,
		init: function() {
			ig.multitouchInput = new ig.MultitouchInput;
			ig.gamepadInput = new ig.GamepadInput;
			this.unbindAll();
			this.initStorage();
			this.initMouse();
			this.initKeyboard();
			this.initMultitouch();
			this.initGamepad()
		},
		unbindAll: function() {
			ig.input.unbindAll();
			ig.gamepadInput.unbindAll()
		},
		initStorage: function() {
			try {
				window.localStorage.setItem("test", "test"), this.storage = new ig.Storage
			} catch (b) {
				console.log("using fake storage"), this.storage = new ig.FakeStorage
			} finally {
				window.localStorage.removeItem("test")
			}
		},
		initMouse: function() {
			this.mouse = new Mouse
		},
		initKeyboard: function() {
			this.keyboard = new Keyboard
		},
		initMultitouch: function() {
			this.multitouch =
				new Multitouch
		},
		initGamepad: function() {
			this.gamepad = new Gamepad
		},
		press: function(b) {
			return ig.input.pressed(b) || this.gamepad && this.gamepad.press(b) ? !0 : !1
		},
		held: function(b) {
			return ig.input.state(b) || this.gamepad && this.gamepad.state(b) ? !0 : !1
		},
		release: function(b) {
			return ig.input.released(b) || this.gamepad && this.gamepad.released(b) ? !0 : !1
		},
		getClickPos: function() {
			return this.mouse.getPos()
		},
		getTouchesPos: function() {
			return this.multitouch.getTouchesPos()
		},
		checkOverlap: function(b, c, d, e, f) {
			return b.x > c + e || b.x <
				c || b.y > d + f || b.y < d ? !1 : !0
		},
		_supportsLocalStorage: function() {
			try {
				return localStorage.setItem("test", "test"), localStorage.removeItem("test"), this.localStorageSupport = "localStorage" in window && null !== window.localStorage
			} catch (b) {
				return this.localStorageSupport
			}
		},
		storageIsSet: function(b) {
			return !this.localStorageSupport ? null : this.storage.isSet(b)
		},
		storageGet: function(b) {
			return !this.localStorageSupport ? null : this.storage.get(b)
		},
		storageSet: function(b, c) {
			if (!this.localStorageSupport) return null;
			this.storage.set(b,
				c)
		},
		assert: function(b, c, d) {
			if (c !== d) throw "actualValue:" + c + " not equal to testValue:" + d + " at " + b;
		}
	})
});
ig.baked = !0;
ig.module("plugins.io.storage-manager").requires("impact.game", "plugins.io.io-manager").defines(function() {
	ig.Game.prototype.name = "MJS-Game";
	ig.Game.prototype.version = "1.0.0";
	ig.Game.prototype.sessionData = {};
	ig.Game.prototype.initData = function() {
		return this.sessionData = {
			sound: 0.5,
			music: 0.5,
			level: 1,
			score: 0
		}
	};
	ig.Game.prototype.setupStorageManager = function() {
		"undefined" === typeof this.name ? console.error("Cannot found Game Name, Storage Manager Cancelled.") : "undefined" === typeof this.version ? console.error("Cannot found Game Version, Storage Manager Cancelled.") :
			(this.io || (this.io = new IoManager, console.log("IO Manager doesn't existed. Initialize...")), console.log("Plug in Storage Manager"), this.storage = this.io.storage, this.storageName = this.name + "-v" + this.version, this.loadAll())
	};
	ig.Game.prototype.loadAll = function() {
		var b = this.storage.get(this.storageName);
		if (null === b || "undefined" === typeof b) b = this.initData();
		for (var c in b) this.sessionData[c] = b[c];
		this.storage.set(this.storageName, b)
	};
	ig.Game.prototype.saveAll = function() {
		var b = this.storage.get(this.storageName),
			c;
		for (c in b) b[c] = this.sessionData[c];
		this.storage.set(this.storageName, b)
	};
	ig.Game.prototype.load = function(b) {
		return this.storage.get(this.storageName)[b]
	};
	ig.Game.prototype.save = function(b, c) {
		var d = this.storage.get(this.storageName);
		d[b] = c;
		this.storage.set(this.storageName, d)
	}
});
ig.baked = !0;
ig.module("plugins.splash-loader").requires("impact.loader", "impact.animation").defines(function() {
	ig.SplashLoader = ig.Loader.extend({
		desktopCoverDIVID: "play-desktop",
		splashDesktop: new ig.Image("en/king-of-strings/media/graphics/splash/desktop/cover.jpg"),
		splashMobile: new ig.Image("en/king-of-strings/media/graphics/splash/mobile/cover.jpg"),
		loadingBar: new ig.Image("en/king-of-strings/media/graphics/splash/loading/loading-bar.png"),
		loadingFill: new ig.Image("en/king-of-strings/media/graphics/splash/loading/loading-fill.png"),
		customAnim: new ig.AnimationSheet("en/king-of-strings/media/graphics/splash/loading/anim.png",
			256, 160),
		resources: [new ig.Image("en/king-of-strings/media/graphics/splash/desktop/cover.jpg"), new ig.Image("en/king-of-strings/media/graphics/splash/mobile/cover.jpg"), new ig.Image("en/king-of-strings/media/graphics/splash/loading/loading-bar.png"), new ig.Image("en/king-of-strings/media/graphics/splash/loading/loading-fill.png")],
		init: function(b, c) {
			this.parent(b, c);
			ig.apiHandler.run("MJSPreroll")
		},
		end: function() {
			this.parent();
			this._drawStatus = 1;
			this.draw();
			if (_SETTINGS.TapToStartAudioUnlock.Enabled)
				if (ig.ua.mobile) {
					var b = ig.domHandler.getElementById("#play");
					ig.domHandler.show(b);
					ig.system.setGame(MyGame)
				} else this.tapToStartDiv(function() {
					ig.system.setGame(MyGame)
				});
			else ig.system.setGame(MyGame)
		},
		tapToStartDiv: function(b) {
			this.desktopCoverDIV = document.getElementById(this.tapToStartDivId);
			if (!this.desktopCoverDIV) {
				this.desktopCoverDIV = document.createElement("div");
				this.desktopCoverDIV.id = this.tapToStartDivId;
				this.desktopCoverDIV.setAttribute("class", "play");
				this.desktopCoverDIV.setAttribute("style", "position: absolute; display: block; z-index: 999999; background-color: rgba(23, 32, 53, 0.7); visibility: visible; font-size: 10vmin; text-align: center; vertical-align: middle; -webkit-touch-callout: none; -webkit-user-select: none; -khtml-user-select: none; -moz-user-select: none; -ms-user-select: none; user-select: none;");
				this.desktopCoverDIV.innerHTML = "<div style='color:white;background-color: rgba(255, 255, 255, 0.3); border: 2px solid #fff; font-size:20px; border-radius: 5px; position: relative; float: left; top: 50%; left: 50%; transform: translate(-50%, -50%);'><div style='padding:20px 50px; font-family: montserrat;'>" + _STRINGS.Splash.TapToStart + "</div></div>";
				(document.getElementById("play").parentNode || document.getElementById("ajaxbar")).appendChild(this.desktopCoverDIV);
				try {
					"undefined" !== typeof ig.sizeHandler ?
						"undefined" !== typeof ig.sizeHandler.coreDivsToResize && (ig.sizeHandler.coreDivsToResize.push("#" + this.tapToStartDivId), "function" === typeof ig.sizeHandler.reorient && ig.sizeHandler.reorient()) : "undefined" !== typeof coreDivsToResize && (coreDivsToResize.push(this.tapToStartDivId), "function" === typeof sizeHandler && sizeHandler())
				} catch (c) {
					console.log(c)
				}
				this.desktopCoverDIV.addEventListener("click", function() {
					ig.soundHandler.unlockWebAudio();
					this.setAttribute("style", "visibility: hidden;");
					"function" === typeof b &&
						b()
				})
			}
		},
		setupCustomAnimation: function() {},
		animate: function() {
			ig.Timer.step()
		},
		draw: function() {
			this._drawStatus += (this.status - this._drawStatus) / 5;
			ig.system.context.save();
			ig.system.context.fillStyle = "#000";
			ig.system.context.fillRect(0, 0, ig.system.width, ig.system.height);
			var b = ig.system.scale,
				c, d, e, f;
			ig.ua.mobile ? (c = this.loadingBar.width, d = this.loadingBar.height, e = 0.5 * ig.system.width - c / 2, f = 7 * ig.system.height / 8 - d / 2 - 30, this.splashMobile.draw(0, 0)) : (c = this.loadingBar.width, d = this.loadingBar.height, e = 0.5 *
				ig.system.width - c / 2, f = 7 * ig.system.height / 8 - d / 2 + 20, this.splashDesktop.draw(0, 0));
			this.loadingBar.draw(e, f);
			1 < c * this._drawStatus && this.loadingFill.draw(e, f, 5, 0, c * this._drawStatus, d);
			ig.system.context.fillStyle = "#ffffff";
			ig.system.context.font = "40px montserrat";
			c = _STRINGS.Splash.Loading;
			d = ig.system.width / 2 - ig.system.context.measureText(c).width / 2;
			ig.system.context.fillText(c, d, f * b - 20);
			ig.system.context.restore()
		}
	})
});
ig.baked = !0;
ig.module("plugins.tween").requires("impact.entity").defines(function() {
	Array.prototype.indexOf || (Array.prototype.indexOf = function(b) {
		for (var c = 0; c < this.length; ++c)
			if (this[c] === b) return c;
		return -1
	});
	ig.Entity.prototype.tweens = [];
	ig.Entity.prototype._preTweenUpdate = ig.Entity.prototype.update;
	ig.Entity.prototype.update = function() {
		this._preTweenUpdate();
		if (0 < this.tweens.length) {
			for (var b = [], c = 0; c < this.tweens.length; c++) this.tweens[c].update(), this.tweens[c].complete || b.push(this.tweens[c]);
			this.tweens =
				b
		}
	};
	ig.Entity.prototype.tween = function(b, c, d) {
		b = new ig.Tween(this, b, c, d);
		this.tweens.push(b);
		return b
	};
	ig.Entity.prototype.pauseTweens = function() {
		for (var b = 0; b < this.tweens.length; b++) this.tweens[b].pause()
	};
	ig.Entity.prototype.resumeTweens = function() {
		for (var b = 0; b < this.tweens.length; b++) this.tweens[b].resume()
	};
	ig.Entity.prototype.stopTweens = function(b) {
		for (var c = 0; c < this.tweens.length; c++) this.tweens[c].stop(b)
	};
	ig.Tween = function(b, c, d, e) {
		var f = {},
			l = {},
			p = {},
			q = 0,
			g = !1,
			m = !1,
			n = !1;
		this.duration = d;
		this.paused =
			this.complete = !1;
		this.easing = ig.Tween.Easing.Linear.EaseNone;
		this.onComplete = !1;
		this.loop = this.delay = 0;
		this.loopCount = -1;
		ig.merge(this, e);
		this.loopNum = this.loopCount;
		this.chain = function(b) {
			n = b
		};
		this.initEnd = function(b, c, d) {
			if ("object" !== typeof c[b]) d[b] = c[b];
			else
				for (subprop in c[b]) d[b] || (d[b] = {}), this.initEnd(subprop, c[b], d[b])
		};
		this.initStart = function(b, c, d, e) {
			if ("object" !== typeof d[b]) "undefined" !== typeof c[b] && (e[b] = d[b]);
			else
				for (subprop in d[b]) e[b] || (e[b] = {}), "undefined" !== typeof c[b] && this.initStart(subprop,
					c[b], d[b], e[b])
		};
		this.start = function() {
			this.paused = this.complete = !1;
			this.loopNum = this.loopCount;
			q = 0; - 1 == b.tweens.indexOf(this) && b.tweens.push(this);
			m = !0;
			g = new ig.Timer;
			for (var d in c) this.initEnd(d, c, l);
			for (d in l) this.initStart(d, l, b, f), this.initDelta(d, p, b, l)
		};
		this.initDelta = function(b, c, d, e) {
			if ("object" !== typeof e[b]) c[b] = e[b] - d[b];
			else
				for (subprop in e[b]) c[b] || (c[b] = {}), this.initDelta(subprop, c[b], d[b], e[b])
		};
		this.propUpdate = function(b, c, d, e, f) {
			if ("object" !== typeof d[b]) c[b] = "undefined" != typeof d[b] ?
				d[b] + e[b] * f : c[b];
			else
				for (subprop in d[b]) this.propUpdate(subprop, c[b], d[b], e[b], f)
		};
		this.propSet = function(b, c, d) {
			if ("object" !== typeof c[b]) d[b] = c[b];
			else
				for (subprop in c[b]) d[b] || (d[b] = {}), this.propSet(subprop, c[b], d[b])
		};
		this.update = function() {
			if (!m) return !1;
			if (this.delay) {
				if (g.delta() < this.delay) return;
				this.delay = 0;
				g.reset()
			}
			if (this.paused || this.complete) return !1;
			var c = (g.delta() + q) / this.duration,
				c = 1 < c ? 1 : c,
				d = this.easing(c);
			for (property in p) this.propUpdate(property, b, f, p, d);
			if (1 <= c) {
				if (0 == this.loopNum ||
					!this.loop) {
					this.complete = !0;
					if (this.onComplete) this.onComplete();
					n && n.start();
					return !1
				}
				if (this.loop == ig.Tween.Loop.Revert) {
					for (property in f) this.propSet(property, f, b);
					q = 0;
					g.reset(); - 1 != this.loopNum && this.loopNum--
				} else if (this.loop == ig.Tween.Loop.Reverse) {
					c = {};
					d = {};
					ig.merge(c, l);
					ig.merge(d, f);
					ig.merge(f, c);
					ig.merge(l, d);
					for (property in l) this.initDelta(property, p, b, l);
					q = 0;
					g.reset(); - 1 != this.loopNum && this.loopNum--
				}
			}
		};
		this.pause = function() {
			this.paused = !0;
			g && g.delta && (q += g.delta())
		};
		this.resume = function() {
			this.paused = !1;
			g && g.reset && g.reset()
		};
		this.stop = function(b) {
			b && (this.loop = this.complete = this.paused = !1, q += d, this.update());
			this.complete = !0
		}
	};
	ig.Tween.Loop = {
		Revert: 1,
		Reverse: 2
	};
	ig.Tween.Easing = {
		Linear: {},
		Quadratic: {},
		Cubic: {},
		Quartic: {},
		Quintic: {},
		Sinusoidal: {},
		Exponential: {},
		Circular: {},
		Elastic: {},
		Back: {},
		Bounce: {}
	};
	ig.Tween.Easing.Linear.EaseNone = function(b) {
		return b
	};
	ig.Tween.Easing.Quadratic.EaseIn = function(b) {
		return b * b
	};
	ig.Tween.Easing.Quadratic.EaseOut = function(b) {
		return -b * (b - 2)
	};
	ig.Tween.Easing.Quadratic.EaseInOut =
		function(b) {
			return 1 > (b *= 2) ? 0.5 * b * b : -0.5 * (--b * (b - 2) - 1)
		};
	ig.Tween.Easing.Cubic.EaseIn = function(b) {
		return b * b * b
	};
	ig.Tween.Easing.Cubic.EaseOut = function(b) {
		return --b * b * b + 1
	};
	ig.Tween.Easing.Cubic.EaseInOut = function(b) {
		return 1 > (b *= 2) ? 0.5 * b * b * b : 0.5 * ((b -= 2) * b * b + 2)
	};
	ig.Tween.Easing.Quartic.EaseIn = function(b) {
		return b * b * b * b
	};
	ig.Tween.Easing.Quartic.EaseOut = function(b) {
		return -(--b * b * b * b - 1)
	};
	ig.Tween.Easing.Quartic.EaseInOut = function(b) {
		return 1 > (b *= 2) ? 0.5 * b * b * b * b : -0.5 * ((b -= 2) * b * b * b - 2)
	};
	ig.Tween.Easing.Quintic.EaseIn =
		function(b) {
			return b * b * b * b * b
		};
	ig.Tween.Easing.Quintic.EaseOut = function(b) {
		return (b -= 1) * b * b * b * b + 1
	};
	ig.Tween.Easing.Quintic.EaseInOut = function(b) {
		return 1 > (b *= 2) ? 0.5 * b * b * b * b * b : 0.5 * ((b -= 2) * b * b * b * b + 2)
	};
	ig.Tween.Easing.Sinusoidal.EaseIn = function(b) {
		return -Math.cos(b * Math.PI / 2) + 1
	};
	ig.Tween.Easing.Sinusoidal.EaseOut = function(b) {
		return Math.sin(b * Math.PI / 2)
	};
	ig.Tween.Easing.Sinusoidal.EaseInOut = function(b) {
		return -0.5 * (Math.cos(Math.PI * b) - 1)
	};
	ig.Tween.Easing.Exponential.EaseIn = function(b) {
		return 0 == b ? 0 : Math.pow(2,
			10 * (b - 1))
	};
	ig.Tween.Easing.Exponential.EaseOut = function(b) {
		return 1 == b ? 1 : -Math.pow(2, -10 * b) + 1
	};
	ig.Tween.Easing.Exponential.EaseInOut = function(b) {
		return 0 == b ? 0 : 1 == b ? 1 : 1 > (b *= 2) ? 0.5 * Math.pow(2, 10 * (b - 1)) : 0.5 * (-Math.pow(2, -10 * (b - 1)) + 2)
	};
	ig.Tween.Easing.Circular.EaseIn = function(b) {
		return -(Math.sqrt(1 - b * b) - 1)
	};
	ig.Tween.Easing.Circular.EaseOut = function(b) {
		return Math.sqrt(1 - --b * b)
	};
	ig.Tween.Easing.Circular.EaseInOut = function(b) {
		return 1 > (b /= 0.5) ? -0.5 * (Math.sqrt(1 - b * b) - 1) : 0.5 * (Math.sqrt(1 - (b -= 2) * b) + 1)
	};
	ig.Tween.Easing.Elastic.EaseIn =
		function(b) {
			var c, d = 0.1,
				e = 0.4;
			if (0 == b) return 0;
			if (1 == b) return 1;
			e || (e = 0.3);
			!d || 1 > d ? (d = 1, c = e / 4) : c = e / (2 * Math.PI) * Math.asin(1 / d);
			return -(d * Math.pow(2, 10 * (b -= 1)) * Math.sin(2 * (b - c) * Math.PI / e))
		};
	ig.Tween.Easing.Elastic.EaseOut = function(b) {
		var c, d = 0.1,
			e = 0.4;
		if (0 == b) return 0;
		if (1 == b) return 1;
		e || (e = 0.3);
		!d || 1 > d ? (d = 1, c = e / 4) : c = e / (2 * Math.PI) * Math.asin(1 / d);
		return d * Math.pow(2, -10 * b) * Math.sin(2 * (b - c) * Math.PI / e) + 1
	};
	ig.Tween.Easing.Elastic.EaseInOut = function(b) {
		var c, d = 0.1,
			e = 0.4;
		if (0 == b) return 0;
		if (1 == b) return 1;
		e || (e = 0.3);
		!d || 1 > d ? (d = 1, c = e / 4) : c = e / (2 * Math.PI) * Math.asin(1 / d);
		return 1 > (b *= 2) ? -0.5 * d * Math.pow(2, 10 * (b -= 1)) * Math.sin(2 * (b - c) * Math.PI / e) : 0.5 * d * Math.pow(2, -10 * (b -= 1)) * Math.sin(2 * (b - c) * Math.PI / e) + 1
	};
	ig.Tween.Easing.Back.EaseIn = function(b) {
		return b * b * (2.70158 * b - 1.70158)
	};
	ig.Tween.Easing.Back.EaseOut = function(b) {
		return (b -= 1) * b * (2.70158 * b + 1.70158) + 1
	};
	ig.Tween.Easing.Back.EaseInOut = function(b) {
		return 1 > (b *= 2) ? 0.5 * b * b * (3.5949095 * b - 2.5949095) : 0.5 * ((b -= 2) * b * (3.5949095 * b + 2.5949095) + 2)
	};
	ig.Tween.Easing.Bounce.EaseIn =
		function(b) {
			return 1 - ig.Tween.Easing.Bounce.EaseOut(1 - b)
		};
	ig.Tween.Easing.Bounce.EaseOut = function(b) {
		return (b /= 1) < 1 / 2.75 ? 7.5625 * b * b : b < 2 / 2.75 ? 7.5625 * (b -= 1.5 / 2.75) * b + 0.75 : b < 2.5 / 2.75 ? 7.5625 * (b -= 2.25 / 2.75) * b + 0.9375 : 7.5625 * (b -= 2.625 / 2.75) * b + 0.984375
	};
	ig.Tween.Easing.Bounce.EaseInOut = function(b) {
		return 0.5 > b ? 0.5 * ig.Tween.Easing.Bounce.EaseIn(2 * b) : 0.5 * ig.Tween.Easing.Bounce.EaseOut(2 * b - 1) + 0.5
	};
	ig.Tween.Interpolation = {
		Linear: function(b, c) {
			var d = b.length - 1,
				e = d * c,
				f = Math.floor(e),
				l = TWEEN.Interpolation.Utils.Linear;
			return 0 > c ? l(b[0], b[1], e) : 1 < c ? l(b[d], b[d - 1], d - e) : l(b[f], b[f + 1 > d ? d : f + 1], e - f)
		}
	}
});
ig.baked = !0;
ig.module("plugins.patches.entity-patch").requires("impact.entity").defines(function() {
	ig.Entity.inject({
		handleMovementTrace: function(b) {
			this.standing = !1;
			b.collision.y && (0 < this.bounciness && Math.abs(this.vel.y) > this.minBounceVelocity ? this.vel.y *= -this.bounciness : (0 < this.vel.y && (this.standing = !0), this.vel.y = 0));
			b.collision.x && (this.vel.x = 0 < this.bounciness && Math.abs(this.vel.x) > this.minBounceVelocity ? this.vel.x * -this.bounciness : 0);
			if (b.collision.slope) {
				var c = b.collision.slope;
				if (0 < this.bounciness) {
					var d =
						this.vel.x * c.nx + this.vel.y * c.ny;
					this.vel.x = (this.vel.x - 2 * c.nx * d) * this.bounciness;
					this.vel.y = (this.vel.y - 2 * c.ny * d) * this.bounciness
				} else d = (this.vel.x * c.x + this.vel.y * c.y) / (c.x * c.x + c.y * c.y), this.vel.x = c.x * d, this.vel.y = c.y * d, c = Math.atan2(c.x, c.y), c > this.slopeStanding.min && c < this.slopeStanding.max && (this.standing = !0)
			}
			this.pos.x = b.pos.x;
			this.pos.y = b.pos.y
		}
	})
});
ig.baked = !0;
ig.module("plugins.tweens-handler").requires("impact.entity", "plugins.tween", "plugins.patches.entity-patch").defines(function() {
	Array.prototype.indexOf || (Array.prototype.indexOf = function(b) {
		for (var d = 0; d < this.length; ++d)
			if (this[d] === b) return d;
		return -1
	});
	ig.TweensHandler = ig.Class.extend({
		_tweens: [],
		_systemPausedTweens: [],
		init: function() {},
		getAll: function() {
			return this._tweens
		},
		removeAll: function() {
			this._tweens = []
		},
		add: function(b) {
			this._tweens.push(b)
		},
		remove: function(b) {
			b = this._tweens.indexOf(b); -
			1 !== b && this._tweens.splice(b, 1)
		},
		onSystemPause: function() {
			if (0 === this._tweens.length) return !1;
			for (var b = 0, d = null; b < this._tweens.length;) d = this._tweens[b], d._isPlaying && (this._systemPausedTweens.push(d), d.pause()), b++;
			return !0
		},
		onSystemResume: function() {
			if (0 === this._systemPausedTweens.length) return !1;
			for (var b = 0; b < this._systemPausedTweens.length;) this._systemPausedTweens[b].resume(), b++;
			this._systemPausedTweens = [];
			return !0
		},
		update: function(b, d) {
			if (0 === this._tweens.length) return !1;
			var e = 0;
			for (b = void 0 !==
				b ? b : ig.game.tweens.now(); e < this._tweens.length;) this._tweens[e].update(b) || d ? e++ : this._tweens.splice(e, 1);
			return !0
		},
		now: function() {
			return Date.now()
		}
	});
	ig.TweenDef = ig.Class.extend({
		_ent: null,
		_valuesStart: {},
		_valuesEnd: {},
		_valuesStartRepeat: {},
		_duration: 1E3,
		_repeat: 0,
		_yoyo: !1,
		_isPlaying: !1,
		_reversed: !1,
		_delayTime: 0,
		_startTime: null,
		_pauseTime: null,
		_easingFunction: ig.Tween.Easing.Linear.EaseNone,
		_interpolationFunction: ig.Tween.Interpolation.Linear,
		_chainedTweens: [],
		_onStartCallback: null,
		_onStartCallbackFired: !1,
		_onUpdateCallback: null,
		_onCompleteCallback: null,
		_onStopCallback: null,
		_onPauseCallback: null,
		_onResumeCallback: null,
		_currentElapsed: 0,
		init: function(b) {
			this._object = b
		},
		to: function(b, d) {
			this._valuesEnd = b;
			void 0 !== d && (this._duration = d);
			return this
		},
		start: function(b) {
			if (this._isPlaying) return this;
			ig.game.tweens.add(this);
			this._isPlaying = !0;
			this._onStartCallbackFired = !1;
			this._startTime = void 0 !== b ? b : ig.game.tweens.now();
			this._startTime += this._delayTime;
			for (var d in this._valuesEnd) {
				if (this._valuesEnd[d] instanceof Array) {
					if (0 === this._valuesEnd[d].length) continue;
					this._valuesEnd[d] = [this._object[d]].concat(this._valuesEnd[d])
				}
				void 0 !== this._object[d] && (this._valuesStart[d] = this._object[d], !1 === this._valuesStart[d] instanceof Array && (this._valuesStart[d] *= 1), this._valuesStartRepeat[d] = this._valuesStart[d] || 0)
			}
			return this
		},
		stop: function() {
			if (!this._isPlaying) return this;
			ig.game.tweens.remove(this);
			this._isPlaying = !1;
			null !== this._onStopCallback && this._onStopCallback.call(this._object, this._object);
			this.stopChainedTweens();
			return this
		},
		pause: function() {
			if (!this._isPlaying) return this;
			ig.game.tweens.remove(this);
			this._isPlaying = !1;
			this._pauseTime = ig.game.tweens.now();
			null !== this._onPauseCallback && this._onPauseCallback.call(this._object, this._object);
			return this
		},
		resume: function() {
			if (this._isPlaying || !this._pauseTime) return this;
			var b = ig.game.tweens.now() - this._pauseTime;
			this._startTime += b;
			ig.game.tweens.add(this);
			this._isPlaying = !0;
			null !== this._onResumeCallback && this._onResumeCallback.call(this._object, this._object);
			this._pauseTime = null;
			return this
		},
		end: function() {
			this.update(this._startTime + this._duration);
			return this
		},
		stopChainedTweens: function() {
			for (var b = 0, d = this._chainedTweens.length; b < d; b++) this._chainedTweens[b].stop()
		},
		delay: function(b) {
			this._delayTime = b;
			return this
		},
		repeat: function(b) {
			this._repeat = b;
			return this
		},
		repeatDelay: function(b) {
			this._repeatDelayTime = b;
			return this
		},
		yoyo: function(b) {
			this._yoyo = b;
			return this
		},
		easing: function(b) {
			this._easingFunction = b;
			return this
		},
		interpolation: function(b) {
			this._interpolationFunction =
				b;
			return this
		},
		chain: function() {
			this._chainedTweens = arguments;
			return this
		},
		onStart: function(b) {
			this._onStartCallback = b;
			return this
		},
		onUpdate: function(b) {
			this._onUpdateCallback = b;
			return this
		},
		onComplete: function(b) {
			this._onCompleteCallback = b;
			return this
		},
		onStop: function(b) {
			this._onStopCallback = b;
			return this
		},
		onPause: function(b) {
			this._onPauseCallback = b;
			return this
		},
		onResume: function(b) {
			this._onResumeCallback = b;
			return this
		},
		update: function(b) {
			var d, e, f;
			if (b < this._startTime) return !0;
			!1 === this._onStartCallbackFired &&
				(null !== this._onStartCallback && this._onStartCallback.call(this._object, this._object), this._onStartCallbackFired = !0);
			e = (b - this._startTime) / this._duration;
			this._currentElapsed = e = 1 < e ? 1 : e;
			f = this._easingFunction(e);
			for (d in this._valuesEnd)
				if (void 0 !== this._valuesStart[d]) {
					var l = this._valuesStart[d] || 0,
						p = this._valuesEnd[d];
					p instanceof Array ? this._object[d] = this._interpolationFunction(p, f) : ("string" === typeof p && (p = "+" === p.charAt(0) || "-" === p.charAt(0) ? l + parseFloat(p) : parseFloat(p)), "number" === typeof p &&
						(this._object[d] = l + (p - l) * f))
				} null !== this._onUpdateCallback && this._onUpdateCallback.call(this._object, this._object, f);
			if (1 === e)
				if (0 < this._repeat) {
					isFinite(this._repeat) && this._repeat--;
					for (d in this._valuesStartRepeat) "string" === typeof this._valuesEnd[d] && (this._valuesStartRepeat[d] = _valuesStartRepeat[d] + parseFloat(_valuesEnd[d])), this._yoyo && (e = this._valuesStartRepeat[d], this._valuesStartRepeat[d] = this._valuesEnd[d], this._valuesEnd[d] = e), this._valuesStart[d] = this._valuesStartRepeat[d];
					this._yoyo &&
						(this._reversed = !this._reversed);
					this._startTime = void 0 !== this._repeatDelayTime ? b + this._repeatDelayTime : b + this._delayTime
				} else {
					null !== this._onCompleteCallback && this._onCompleteCallback.call(this._object, this._object);
					b = 0;
					for (d = this._chainedTweens.length; b < d; b++) this._chainedTweens[b].start(this._startTime + this._duration);
					return !1
				} return !0
		}
	});
	var b = [1];
	ig.Tween.Interpolation = {
		Linear: function(b, d) {
			var e = b.length - 1,
				f = e * d,
				l = Math.floor(f),
				p = ig.Tween.Interpolation.Utils.Linear;
			return 0 > d ? p(b[0], b[1], f) :
				1 < d ? p(b[e], b[e - 1], e - f) : p(b[l], b[l + 1 > e ? e : l + 1], f - l)
		},
		Bezier: function(b, d) {
			for (var e = 0, f = b.length - 1, l = Math.pow, p = ig.Tween.Interpolation.Utils.Bernstein, q = 0; q <= f; q++) e += l(1 - d, f - q) * l(d, q) * b[q] * p(f, q);
			return e
		},
		CatmullRom: function(b, d) {
			var e = b.length - 1,
				f = e * d,
				l = Math.floor(f),
				p = ig.Tween.Interpolation.Utils.CatmullRom;
			return b[0] === b[e] ? (0 > d && (l = Math.floor(f = e * (1 + d))), p(b[(l - 1 + e) % e], b[l], b[(l + 1) % e], b[(l + 2) % e], f - l)) : 0 > d ? b[0] - (p(b[0], b[0], b[1], b[1], -f) - b[0]) : 1 < d ? b[e] - (p(b[e], b[e], b[e - 1], b[e - 1], f - e) - b[e]) : p(b[l ?
				l - 1 : 0], b[l], b[e < l + 1 ? e : l + 1], b[e < l + 2 ? e : l + 2], f - l)
		},
		Utils: {
			Linear: function(b, d, e) {
				return (d - b) * e + b
			},
			Bernstein: function(b, d) {
				var e = ig.Tween.Interpolation.Utils.Factorial;
				return e(b) / e(d) / e(b - d)
			},
			Factorial: function(c) {
				var d = 1;
				if (b[c]) return b[c];
				for (var e = c; 1 < e; e--) d *= e;
				return b[c] = d
			},
			CatmullRom: function(b, d, e, f, l) {
				b = 0.5 * (e - b);
				f = 0.5 * (f - d);
				var p = l * l;
				return (2 * d - 2 * e + b + f) * l * p + (-3 * d + 3 * e - 2 * b - f) * p + b * l + d
			}
		}
	}
});
ig.baked = !0;
ig.module("plugins.url-parameters").defines(function() {
	ig.UrlParameters = ig.Class.extend({
		init: function() {
			switch (getQueryVariable("iphone")) {
				case "true":
					ig.ua.iPhone = !0, console.log("iPhone mode")
			}
			var b = getQueryVariable("webview");
			if (b) switch (b) {
				case "true":
					ig.ua.is_uiwebview = !0, console.log("webview mode")
			}
			if (b = getQueryVariable("debug")) switch (b) {
				case "true":
					ig.game.showDebugMenu(), console.log("debug mode")
			}
			switch (getQueryVariable("view")) {
				case "stats":
					ig.game.resetPlayerStats(), ig.game.endGame()
			}
			getQueryVariable("ad")
		}
	})
});
ig.baked = !0;
ig.module("plugins.director").requires("impact.impact").defines(function() {
	ig.Director = ig.Class.extend({
		init: function(b, c) {
			this.game = b;
			this.levels = [];
			this.currentLevel = 0;
			this.append(c)
		},
		loadLevel: function(b) {
			for (var c in ig.sizeHandler.dynamicClickableEntityDivs) {
				var d = ig.domHandler.getElementById("#" + c);
				ig.domHandler.hide(d)
			}
			this.currentLevel = b;
			this.game.loadLevel(this.levels[b]);
			return !0
		},
		loadLevelWithoutEntities: function(b) {
			this.currentLevel = b;
			this.game.loadLevelWithoutEntities(this.levels[b]);
			return !0
		},
		append: function(b) {
			newLevels = [];
			return "object" === typeof b ? (b.constructor === [].constructor ? newLevels = b : newLevels[0] = b, this.levels = this.levels.concat(newLevels), !0) : !1
		},
		nextLevel: function() {
			return this.currentLevel + 1 < this.levels.length ? this.loadLevel(this.currentLevel + 1) : !1
		},
		previousLevel: function() {
			return 0 <= this.currentLevel - 1 ? this.loadLevel(this.currentLevel - 1) : !1
		},
		jumpTo: function(b) {
			var c = null;
			for (i = 0; i < this.levels.length; i++) this.levels[i] == b && (c = i);
			return 0 <= c ? this.loadLevel(c) : !1
		},
		firstLevel: function() {
			return this.loadLevel(0)
		},
		lastLevel: function() {
			return this.loadLevel(this.levels.length - 1)
		},
		reloadLevel: function() {
			return this.loadLevel(this.currentLevel)
		}
	})
});
ig.baked = !0;
ig.module("plugins.impact-storage").requires("impact.game").defines(function() {
	ig.Storage = ig.Class.extend({
		staticInstantiate: function() {
			return !ig.Storage.instance ? null : ig.Storage.instance
		},
		init: function() {
			ig.Storage.instance = this
		},
		isCapable: function() {
			return "undefined" !== typeof window.localStorage
		},
		isSet: function(b) {
			return null !== this.get(b)
		},
		initUnset: function(b, c) {
			null === this.get(b) && this.set(b, c)
		},
		get: function(b) {
			if (!this.isCapable()) return null;
			try {
				return JSON.parse(localStorage.getItem(b))
			} catch (c) {
				return window.localStorage.getItem(b)
			}
		},
		getInt: function(b) {
			return ~~this.get(b)
		},
		getFloat: function(b) {
			return parseFloat(this.get(b))
		},
		getBool: function(b) {
			return !!this.get(b)
		},
		key: function(b) {
			return this.isCapable() ? window.localStorage.key(b) : null
		},
		set: function(b, c) {
			if (!this.isCapable()) return null;
			try {
				window.localStorage.setItem(b, JSON.stringify(c))
			} catch (d) {
				console.log(d)
			}
		},
		setHighest: function(b, c) {
			c > this.getFloat(b) && this.set(b, c)
		},
		remove: function(b) {
			if (!this.isCapable()) return null;
			window.localStorage.removeItem(b)
		},
		clear: function() {
			if (!this.isCapable()) return null;
			window.localStorage.clear()
		}
	})
});
ig.baked = !0;
ig.module("plugins.fullscreen").requires("impact.entity", "plugins.handlers.size-handler", "plugins.director").defines(function() {
	ig.Fullscreen = {
		enableFullscreenButton: !0,
		_isEnabled: "notChecked",
		isEnabled: function() {
			"notChecked" == this._isEnabled && (this._isEnabled = document.fullscreenEnabled || document.mozFullScreenEnabled || document.webkitFullscreenEnabled || document.msFullscreenEnabled ? !0 : !1);
			return this._isEnabled
		},
		isFullscreen: function() {
			return ig.Fullscreen.isEnabled() && (document.fullscreenElement ||
				document.mozFullScreenElement || document.webkitFullscreenElement || document.msFullscreenElement) ? !0 : !1
		},
		toggleFullscreen: function() {
			ig.Fullscreen.isFullscreen() ? ig.Fullscreen.exitFullscreen() : ig.Fullscreen.requestFullscreen();
			ig.sizeHandler.orientationDelayHandler();
			if (ig && ig.visibilityHandler) ig.visibilityHandler.onChange("focus");
			try {
				ig.soundHandler.unlockWebAudio()
			} catch (b) {}
		},
		requestFullscreen: function() {
			var b = document.documentElement;
			b.requestFullscreen ? b.requestFullscreen() : b.webkitRequestFullscreen ?
				b.webkitRequestFullscreen() : b.mozRequestFullScreen ? b.mozRequestFullScreen() : b.msRequestFullscreen ? b.msRequestFullscreen() : console.log("no request fullscreen method available")
		},
		exitFullscreen: function() {
			document.exitFullscreen ? document.exitFullscreen() : document.webkitExitFullscreen ? document.webkitExitFullscreen() : document.mozCancelFullScreen ? document.mozCancelFullScreen() : document.msExitFullscreen ? document.msExitFullscreen() : console.log("no exit fullscreen method available")
		},
		divs: {}
	};
	ig.Director.inject({
		loadLevel: function(b) {
			var c =
				ig.Fullscreen.divs,
				d;
			for (d in c) c = ig.domHandler.getElementById("#" + d), ig.domHandler.hide(c);
			return this.parent(b)
		}
	});
	ig.SizeHandler.inject({
		resize: function() {
			this.parent();
			var b = ig.Fullscreen.divs,
				c;
			for (c in b) {
				var d = Math.min(ig.sizeHandler.scaleRatioMultiplier.x, ig.sizeHandler.scaleRatioMultiplier.y),
					e = ig.domHandler.getElementById("#" + c),
					f = b[c].entity_pos_x,
					l = b[c].entity_pos_y,
					p = b[c].width,
					q = b[c].height,
					g = ig.domHandler.getElementById("#canvas"),
					m = ig.domHandler.getOffsets(g);
				ig.ua.mobile ? (g = m.left,
					m = m.top, ig.sizeHandler.disableStretchToFitOnMobileFlag ? (f = Math.floor(g + f * ig.sizeHandler.scaleRatioMultiplier.x) + "px", l = Math.floor(m + l * ig.sizeHandler.scaleRatioMultiplier.y) + "px", p = Math.floor(p * ig.sizeHandler.scaleRatioMultiplier.x) + "px", q = Math.floor(q * ig.sizeHandler.scaleRatioMultiplier.y) + "px") : (f = Math.floor(f * ig.sizeHandler.sizeRatio.x) + "px", l = Math.floor(l * ig.sizeHandler.sizeRatio.y) + "px", p = Math.floor(p * ig.sizeHandler.sizeRatio.x) + "px", q = Math.floor(q * ig.sizeHandler.sizeRatio.y) + "px")) : (g = m.left,
					m = m.top, f = Math.floor(g + f * d) + "px", l = Math.floor(m + l * d) + "px", p = Math.floor(p * d) + "px", q = Math.floor(q * d) + "px");
				ig.domHandler.css(e, {
					"float": "left",
					position: "absolute",
					left: f,
					top: l,
					width: p,
					height: q,
					"z-index": 3
				});
				b[c]["font-size"] && ig.domHandler.css(e, {
					"font-size": b[c]["font-size"] * d + "px"
				})
			}
		}
	});
	ig.FullscreenButton = ig.Entity.extend({
		enterImage: null,
		exitImage: null,
		isReady: !1,
		zIndex: 999999,
		identifier: null,
		prevPos: {
			x: 0,
			y: 0
		},
		invisImagePath: "en/king-of-strings/media/graphics/misc/invisible.png",
		init: function(b, c, d) {
			this.parent(b,
				c, d);
			ig.Fullscreen.isEnabled() && ig.Fullscreen.enableFullscreenButton ? this.enterImage.loaded ? this.initSize() : this.enterImage.loadCallback = function() {
				this.initSize()
			}.bind(this) : this.kill()
		},
		kill: function() {
			this.parent()
		},
		destroy: function() {
			this.parent();
			console.log("destroy")
		},
		initSize: function() {
			this.size.x = this.enterImage.width;
			this.size.y = this.enterImage.height;
			this.createClickableLayer();
			this.isReady = !0
		},
		createClickableLayer: function() {
			this.identifier = "fullscreen-button-layer";
			var b = ig.domHandler.getElementById("#" +
				this.identifier);
			b ? (ig.domHandler.show(b), ig.domHandler.attr(b, "onclick", "ig.Fullscreen.toggleFullscreen()")) : this.createClickableOutboundLayer()
		},
		update: function(b, c) {
			b = this.pos.x;
			c = this.pos.y;
			this.isReady && !(this.prevPos.x === b && this.prevPos.y === c) && (ig.Fullscreen.divs[this.identifier] = {}, ig.Fullscreen.divs[this.identifier].width = this.size.x, ig.Fullscreen.divs[this.identifier].height = this.size.y, ig.Fullscreen.divs[this.identifier].entity_pos_x = this.pos.x, ig.Fullscreen.divs[this.identifier].entity_pos_y =
				this.pos.y, this.prevPos.x = b, this.prevPos.y = c)
		},
		draw: function() {
			this.isReady && (ig.Fullscreen.isFullscreen() ? this.exitImage.draw(this.pos.x, this.pos.y) : this.enterImage.draw(this.pos.x, this.pos.y))
		},
		createClickableOutboundLayer: function() {
			var b = this.identifier,
				c = this.invisImagePath,
				d = ig.domHandler.create("div");
			ig.domHandler.attr(d, "id", b);
			ig.domHandler.attr(d, "onclick", "ig.Fullscreen.toggleFullscreen()");
			var e = ig.domHandler.create("a"),
				f = ig.domHandler.create("img");
			ig.domHandler.css(f, {
				width: "100%",
				height: "100%"
			});
			ig.domHandler.attr(f, "src", c);
			c = Math.min(ig.sizeHandler.scaleRatioMultiplier.x, ig.sizeHandler.scaleRatioMultiplier.y);
			if (ig.ua.mobile) {
				var l = ig.domHandler.getElementById("#canvas"),
					l = ig.domHandler.getOffsets(l),
					p = l.left,
					q = l.top;
				console.log(l.left);
				ig.sizeHandler.disableStretchToFitOnMobileFlag ? (l = Math.floor(p + this.pos.x * ig.sizeHandler.scaleRatioMultiplier.x) + "px", q = Math.floor(q + this.pos.y * ig.sizeHandler.scaleRatioMultiplier.y) + "px", p = Math.floor(this.size.x * ig.sizeHandler.scaleRatioMultiplier.x) +
					"px", c = Math.floor(this.size.y * ig.sizeHandler.scaleRatioMultiplier.y) + "px") : (l = Math.floor(this.pos.x * ig.sizeHandler.sizeRatio.x) + "px", q = Math.floor(this.pos.y * ig.sizeHandler.sizeRatio.y) + "px", p = Math.floor(this.size.x * ig.sizeHandler.sizeRatio.x) + "px", c = Math.floor(this.size.y * ig.sizeHandler.sizeRatio.y) + "px")
			} else l = ig.domHandler.getElementById("#canvas"), l = ig.domHandler.getOffsets(l), p = l.left, q = l.top, ig.sizeHandler.enableStretchToFitOnDesktopFlag ? (l = Math.floor(p + this.pos.x * ig.sizeHandler.sizeRatio.x) +
				"px", q = Math.floor(q + this.pos.y * ig.sizeHandler.sizeRatio.y) + "px", p = Math.floor(this.size.x * ig.sizeHandler.sizeRatio.x) + "px", c = Math.floor(this.size.y * ig.sizeHandler.sizeRatio.y) + "px") : (l = Math.floor(p + this.pos.x * c) + "px", q = Math.floor(q + this.pos.y * c) + "px", p = Math.floor(this.size.x * c) + "px", c = Math.floor(this.size.y * c) + "px");
			ig.domHandler.css(d, {
				"float": "left",
				position: "absolute",
				left: l,
				top: q,
				width: p,
				height: c,
				"z-index": 3
			});
			ig.domHandler.addEvent(d, "mousemove", ig.input.mousemove.bind(ig.input), !1);
			ig.domHandler.appendChild(e,
				f);
			ig.domHandler.appendChild(d, e);
			ig.domHandler.appendToBody(d);
			ig.Fullscreen.divs[b] = {};
			ig.Fullscreen.divs[b].width = this.size.x;
			ig.Fullscreen.divs[b].height = this.size.y;
			ig.Fullscreen.divs[b].entity_pos_x = this.pos.x;
			ig.Fullscreen.divs[b].entity_pos_y = this.pos.y
		}
	})
});
ig.baked = !0;
ig.module("plugins.scale").requires("impact.entity").defines(function() {
	ig.Entity.inject({
		scale: {
			x: 1,
			y: 1
		},
		_offset: {
			x: 0,
			y: 0
		},
		_scale: {
			x: 1,
			y: 1
		},
		_size: {
			x: 0,
			y: 0
		},
		init: function(b, c, d) {
			this.parent(b, c, d);
			this._offset.x = this.offset.x;
			this._offset.y = this.offset.y;
			this._size.x = this.size.x;
			this._size.y = this.size.y;
			this.setScale(this.scale.x, this.scale.y)
		},
		draw: function() {
			var b = ig.system.context;
			b.save();
			b.translate(ig.system.getDrawPos(this.pos.x.round() - this.offset.x - ig.game.screen.x), ig.system.getDrawPos(this.pos.y.round() -
				this.offset.y - ig.game.screen.y));
			b.scale(this._scale.x, this._scale.y);
			null != this.currentAnim && this.currentAnim.draw(0, 0);
			b.restore()
		},
		setScale: function(b, c) {
			var d = this.size.x,
				e = this.size.y;
			this.scale.x = b || this.scale.x;
			this.scale.y = c || this.scale.y;
			this._scale.x = this.scale.x / ig.system.scale;
			this._scale.y = this.scale.y / ig.system.scale;
			this.offset.x = this._offset.x * this._scale.x;
			this.offset.y = this._offset.y * this._scale.y;
			this.size.x = this._size.x * this._scale.x;
			this.size.y = this._size.y * this._scale.y;
			this.pos.x +=
				(d - this.size.x) / 2;
			this.pos.y += (e - this.size.y) / 2
		}
	})
});
ig.baked = !0;
ig.module("plugins.textwrapper").defines(function() {
	ig.Textwrapper = ig.Class.extend({
		textFontSize: 12,
		textFont: "walibi-holland, Charcoal, big-bottom",
		textLineHeight: 12,
		init: function(b, c) {
			b && (this.textLineHeight = this.textFontSize = b);
			c && (this.textFont = c)
		},
		wrapText: function(b, c) {
			if (!b || "" == b || 0 >= c) return [];
			var d = ig.system.context;
			d.save();
			d.font = this.textFontSize + "px " + this.textFont;
			var e = b.split(" "),
				f = "",
				l = [];
			if (1 == e.length)
				for (var p = 0; p < b.length; p++) {
					var q = f + b[p],
						g = d.measureText(q),
						g = g.width;
					g > c && 0 <
						p ? (l.push(f), f = b[p]) : f = q
				} else
					for (p = 0; p < e.length; p++) q = f + e[p] + " ", g = d.measureText(q), g = g.width, g > c && 0 < p ? (l.push(f), f = e[p] + " ") : f = q;
			l.push(f);
			d.restore();
			return l
		},
		drawTextList: function(b, c, d) {
			if (b && b.length && !(0 >= b.length)) {
				var e = ig.system.context;
				e.save();
				e.font = this.textFontSize + "px " + this.textFont;
				for (var f = 0, l = 0; l < b.length; l++) e.fillText(b[l], c, d + f), f += this.textLineHeight + 12;
				e.restore()
			}
		}
	})
});
ig.baked = !0;
ig.module("plugins.data.color-rgb").defines(function() {
	ColorRGB = function(b, c, d, e) {
		this.r = b || 0;
		this.g = c || 0;
		this.b = d || 0;
		this.a = e || 0
	};
	ColorRGB.prototype = {
		setRandomColor: function() {
			this.r = Math.round(255 * Math.random());
			this.g = Math.round(255 * Math.random());
			this.b = Math.round(255 * Math.random())
		},
		getStyle: function() {
			return "rgba(" + this.r + "," + this.g + "," + this.b + "," + this.a + ")"
		},
		getHex: function() {
			for (var b = this.r.toString(16), c = this.g.toString(16), d = this.b.toString(16); 2 > b.length;) b = "0" + b;
			for (; 2 > c.length;) c = "0" +
				c;
			for (; 2 > d.length;) d = "0" + d;
			return "#" + b + c + d
		},
		getInvertedColor: function() {
			return new ColorRGB(255 - this.r, 255 - this.g, 255 - this.b, 255 - this.a)
		},
		clone: function() {
			return new ColorRGB(this.r, this.g, this.b, this.a)
		}
	}
});
this.START_BRANDING_SPLASH;
ig.baked = !0;
ig.module("plugins.branding.splash").requires("impact.impact", "impact.entity").defines(function() {
	ig.BrandingSplash = ig.Class.extend({
		init: function() {
			ig.game.spawnEntity(EntityBranding, 0, 0);
			console.log("spawn branding")
		}
	});
	EntityBranding = ig.Entity.extend({
		gravityFactor: 0,
		size: {
			x: 32,
			y: 32
		},
		splash: new ig.Image("en/king-of-strings/branding/splash1.png"),
		init: function(b, c, d) {
			this.parent(b, c, d);
			320 >= ig.system.width ? (this.size.x = 460, this.size.y = 700) : (this.size.x = 600, this.size.y = 1000);
			this.pos.x = (ig.system.width - this.size.x) /
				2;
			this.pos.y = -this.size.y - 200;
			this.endPosY = (ig.system.height - this.size.y) / 2;
			b = this.tween({
				pos: {
					y: this.endPosY
				}
			}, 0.5, {
				easing: ig.Tween.Easing.Bounce.EaseIn
			});
			c = this.tween({}, 2.5, {
				onComplete: function() {
					ig.game.director.loadLevel(ig.game.director.currentLevel)
				}
			});
			b.chain(c);
			b.start();
			this.currentAnim = this.anims.idle
		},
		createClickableLayer: function() {
			console.log("Build clickable layer");
			this.checkClickableLayer("branding-splash", _SETTINGS.Branding.Logo.Link, _SETTINGS.Branding.Logo.NewWindow)
		},
		doesClickableLayerExist: function(b) {
			for (k in dynamicClickableEntityDivs)
				if (k ==
					b) return !0;
			return !1
		},
		checkClickableLayer: function(b, c, d) {
			"undefined" == typeof wm && (this.doesClickableLayerExist(b) ? (ig.game.showOverlay([b]), $("#" + b).find("[href]").attr("href", c)) : this.createClickableOutboundLayer(b, c, "en/king-of-strings/media/graphics/misc/invisible.png", d))
		},
		createClickableOutboundLayer: function(b, c, d, e) {
			var f = ig.$new("div");
			f.id = b;
			document.body.appendChild(f);
			f = $("#" + f.id);
			f.css("float", "left");
			f.css("position", "absolute");
			if (ig.ua.mobile) {
				var l = window.innerHeight / mobileHeight,
					p = window.innerWidth /
					mobileWidth;
				f.css("left", this.pos.x * p);
				f.css("top", this.pos.y * l);
				f.css("width", this.size.x * p);
				f.css("height", this.size.y * l)
			} else l = w / 2 - destW / 2, p = h / 2 - destH / 2, console.log(l, p), f.css("left", l + this.pos.x * multiplier), f.css("top", p + this.pos.y * multiplier), f.css("width", this.size.x * multiplier), f.css("height", this.size.y * multiplier);
			e ? f.html("<a target='_blank' href='" + c + "'><img style='width:100%;height:100%' src='" + d + "'></a>") : f.html("<a href='" + c + "'><img style='width:100%;height:100%' src='" + d + "'></a>");
			dynamicClickableEntityDivs[b] = {};
			dynamicClickableEntityDivs[b].width = this.size.x * multiplier;
			dynamicClickableEntityDivs[b].height = this.size.y * multiplier;
			dynamicClickableEntityDivs[b].entity_pos_x = this.pos.x;
			dynamicClickableEntityDivs[b].entity_pos_y = this.pos.y
		},
		draw: function() {
			ig.system.context.fillStyle = "#ffffff";
			ig.system.context.fillRect(0, 0, ig.system.width, ig.system.height);
			ig.system.context.fillStyle = "#000";
			ig.system.context.font = "12px Arial";
			ig.system.context.textAlign = "left";
			320 >= ig.system.width ?
				ig.system.context.fillText("powered by aleiwi.com", ig.system.width - 150, ig.system.height - 15) : ig.system.context.fillText("powered by aleiwi.com", ig.system.width - 160, ig.system.height - 15);
			this.parent();
			this.splash && ig.system.context.drawImage(this.splash.data, 0, 0, this.splash.data.width, this.splash.data.height, this.pos.x, this.pos.y, this.size.x, this.size.y)
		}
	})
});
this.END_BRANDING_SPLASH;
ig.baked = !0;
ig.module("game.entities.global.marketjs-entity").requires("impact.entity").defines(function() {
	EntityMarketjsEntity = ig.Entity.extend({
		gravityFactor: 0,
		collides: ig.Entity.COLLIDES.NEVER,
		type: ig.Entity.TYPE.NONE,
		oriPos: {
			x: null,
			y: null
		},
		allowToBounce: !0,
		scaleValue: 1,
		init: function(b, c, d) {
			this.name = d.name;
			this.disableCollider = d.disableCollider;
			null != d.img && (this.img = d.img);
			this.parent(b, c, d);
			null != this.img && (this.idleSheetInfo = {
					sheetImage: this.img,
					sheetX: 1,
					sheetY: 1
				}, this.setSpriteSheet("idle"), this.disableCollider ?
				this.setSize(null) : this.setSize("idle"), this.currentAnim = this.idle = new ig.Animation(this.idleSheet, 0.1, [0]));
			this.oriPos.x = this.pos.x;
			this.oriPos.y = this.pos.y;
			this.setPosition()
		},
		setExactSize: function(b, c) {
			this.size.x = b;
			this.size.y = c
		},
		update: function() {
			this.parent()
		},
		click: function() {
			console.log("CLICKED")
		},
		killOutOfLayer: function() {
			!1 != this.killOutLayer && (this.pos.x < ig.game.screen.x - this.size.x || this.pos.x > ig.game.screen.x + ig.system.width || this.pos.y < ig.game.screen.y - this.size.y || this.pos.y > ig.game.screen.y +
				ig.system.height) && this.kill()
		},
		setSpriteSheet: function(b) {
			this[b + "Sheet"] = new ig.AnimationSheet(this[b + "SheetInfo"].sheetImage.path, this[b + "SheetInfo"].sheetImage.width / this[b + "SheetInfo"].sheetX, this[b + "SheetInfo"].sheetImage.height / this[b + "SheetInfo"].sheetY)
		},
		setSize: function(b) {
			null == b ? (this.size.x = 0, this.size.y = 0) : (this.size.x = this[b + "SheetInfo"].sheetImage.width / this[b + "SheetInfo"].sheetX, this.size.y = this[b + "SheetInfo"].sheetImage.height / this[b + "SheetInfo"].sheetY)
		},
		setPosition: function() {
			"center" ==
			this.horizontal ? this.pos.x -= this.size.x / 2 : "left" == this.horizontal ? this.pos.x = this.pos.x : "right" == this.horizontal && (this.pos.x -= this.size.x);
			"center" == this.vertical ? this.pos.y -= this.size.y / 2 : "top" == this.vertical ? this.pos.y = this.pos.y : "bottom" == this.vertical && (this.pos.y -= this.size.y)
		},
		setFlip: function() {
			!0 == this.flip.x && (this.curentAnimation.flip.x = !0);
			!0 == this.flip.y && (this.curentAnimation.flip.y = !0)
		},
		shake: function() {
			this.tween({
				scaleValue: 1.1
			}, 0.01, {
				loop: ig.Tween.Loop.Reverse,
				loopCount: 3,
				onComplete: function() {
					this.tween({
							scaleValue: 1.1
						},
						0.01, {
							delay: 0.2,
							loop: ig.Tween.Loop.Reverse,
							loopCount: 3
						}).start()
				}.bind(this)
			}).start()
		},
		bounce: function() {
			if (this.allowToBounce) {
				this.allowToBounce = !1;
				var b = this.tween({
						scaleValue: 0.9
					}, 0.05, {
						easing: ig.Tween.Easing.Linear.EaseNone,
						loop: ig.Tween.Loop.Reverse,
						loopCount: 1
					}),
					c = this.tween({
						scaleValue: 1.1
					}, 0.1, {
						easing: ig.Tween.Easing.Linear.EaseNone,
						loop: ig.Tween.Loop.Reverse,
						loopCount: 1,
						onComplete: function() {
							this.allowToBounce = !0;
							this.doAfterBounce()
						}.bind(this)
					});
				b.chain(c);
				b.start()
			}
		},
		doAfterBounce: function() {}
	})
});
ig.baked = !0;
ig.module("game.entities.buttons.button").requires("impact.entity", "plugins.data.vector", "game.entities.global.marketjs-entity").defines(function() {
	EntityButton = EntityMarketjsEntity.extend({
		gravityFactor: 0,
		collides: ig.Entity.COLLIDES.NEVER,
		type: ig.Entity.TYPE.A,
		fillColor: null,
		isEnabled: !0,
		zIndex: 95E3,
		init: function(b, c, d) {
			this.parent(b, c, d);
			!ig.global.wm && !isNaN(d.zIndex) && (this.zIndex = d.zIndex);
			b = Math.floor(256 * Math.random());
			c = Math.floor(256 * Math.random());
			d = Math.floor(256 * Math.random());
			this.fillColor =
				"rgba(" + b + "," + d + "," + c + ",1)"
		},
		update: function() {
			this.parent()
		},
		clicked: function() {},
		clicking: function() {},
		over: function() {},
		leave: function() {},
		released: function() {},
		setEnabled: function(b) {
			!0 == b ? (this.type = ig.Entity.TYPE.A, this.isEnabled = !0) : (this.type = ig.Entity.TYPE.NONE, this.isEnabled = !1)
		}
	})
});
ig.baked = !0;
ig.module("plugins.clickable-div-layer").requires("plugins.data.vector").defines(function() {
	ClickableDivLayer = ig.Class.extend({
		pos: new Vector2(0, 0),
		size: new Vector2(0, 0),
		identifier: null,
		invisImagePath: "en/king-of-strings/media/graphics/misc/invisible.png",
		init: function(b) {
			this.pos = new Vector2(b.pos.x, b.pos.y);
			this.size = new Vector2(b.size.x, b.size.y);
			var c = "more-games",
				d = "www.google.com",
				e = !1;
			b.div_layer_name && (c = b.div_layer_name);
			b.link && (d = b.link);
			b.newWindow && (e = b.newWindow);
			this.createClickableLayer(c, d, e)
		},
		createClickableLayer: function(b,
			c, d) {
			this.identifier = b;
			var e = ig.domHandler.getElementById("#" + b);
			e ? (ig.domHandler.show(e), ig.domHandler.attr(e, "href", c)) : this.createClickableOutboundLayer(b, c, this.invisImagePath, d)
		},
		update: function(b, c) {
			this.pos.x === b && this.pos.y === c || (ig.sizeHandler.dynamicClickableEntityDivs[this.identifier] = {}, ig.sizeHandler.dynamicClickableEntityDivs[this.identifier].width = this.size.x, ig.sizeHandler.dynamicClickableEntityDivs[this.identifier].height = this.size.y, ig.sizeHandler.dynamicClickableEntityDivs[this.identifier].entity_pos_x =
				this.pos.x, ig.sizeHandler.dynamicClickableEntityDivs[this.identifier].entity_pos_y = this.pos.y)
		},
		createClickableOutboundLayer: function(b, c, d, e) {
			var f = ig.domHandler.create("div");
			ig.domHandler.attr(f, "id", b);
			var l = ig.domHandler.create("a");
			ig.domHandler.addEvent(f, "mousedown", function(b) {
				b.preventDefault()
			});
			e ? (ig.domHandler.attr(l, "href", c), ig.domHandler.attr(l, "target", "_blank")) : ig.domHandler.attr(l, "href", c);
			c = ig.domHandler.create("img");
			ig.domHandler.css(c, {
				width: "100%",
				height: "100%"
			});
			ig.domHandler.attr(c,
				"src", d);
			d = Math.min(ig.sizeHandler.scaleRatioMultiplier.x, ig.sizeHandler.scaleRatioMultiplier.y);
			if (ig.ua.mobile) {
				e = ig.domHandler.getElementById("#canvas");
				e = ig.domHandler.getOffsets(e);
				var p = e.left,
					q = e.top;
				console.log(e.left);
				ig.sizeHandler.disableStretchToFitOnMobileFlag ? (e = Math.floor(p + this.pos.x * ig.sizeHandler.scaleRatioMultiplier.x) + "px", q = Math.floor(q + this.pos.y * ig.sizeHandler.scaleRatioMultiplier.y) + "px", p = Math.floor(this.size.x * ig.sizeHandler.scaleRatioMultiplier.x) + "px", d = Math.floor(this.size.y *
					ig.sizeHandler.scaleRatioMultiplier.y) + "px") : (e = Math.floor(this.pos.x * ig.sizeHandler.sizeRatio.x) + "px", q = Math.floor(this.pos.y * ig.sizeHandler.sizeRatio.y) + "px", p = Math.floor(this.size.x * ig.sizeHandler.sizeRatio.x) + "px", d = Math.floor(this.size.y * ig.sizeHandler.sizeRatio.y) + "px")
			} else e = ig.domHandler.getElementById("#canvas"), e = ig.domHandler.getOffsets(e), p = e.left, q = e.top, ig.sizeHandler.enableStretchToFitOnDesktopFlag ? (e = Math.floor(p + this.pos.x * ig.sizeHandler.sizeRatio.x) + "px", q = Math.floor(q + this.pos.y *
				ig.sizeHandler.sizeRatio.y) + "px", p = Math.floor(this.size.x * ig.sizeHandler.sizeRatio.x) + "px", d = Math.floor(this.size.y * ig.sizeHandler.sizeRatio.y) + "px") : (e = Math.floor(p + this.pos.x * d) + "px", q = Math.floor(q + this.pos.y * d) + "px", p = Math.floor(this.size.x * d) + "px", d = Math.floor(this.size.y * d) + "px");
			ig.domHandler.css(f, {
				"float": "left",
				position: "absolute",
				left: e,
				top: q,
				width: p,
				height: d,
				"z-index": 3
			});
			ig.domHandler.addEvent(f, "mousemove", ig.input.mousemove.bind(ig.input), !1);
			ig.domHandler.appendChild(l, c);
			ig.domHandler.appendChild(f,
				l);
			ig.domHandler.appendToBody(f);
			ig.sizeHandler.dynamicClickableEntityDivs[b] = {};
			ig.sizeHandler.dynamicClickableEntityDivs[b].width = this.size.x;
			ig.sizeHandler.dynamicClickableEntityDivs[b].height = this.size.y;
			ig.sizeHandler.dynamicClickableEntityDivs[b].entity_pos_x = this.pos.x;
			ig.sizeHandler.dynamicClickableEntityDivs[b].entity_pos_y = this.pos.y
		}
	})
});
ig.baked = !0;
ig.module("game.entities.buttons.button-branding-logo").requires("game.entities.buttons.button", "plugins.clickable-div-layer").defines(function() {
	EntityButtonBrandingLogo = EntityButton.extend({
		type: ig.Entity.TYPE.A,
		gravityFactor: 0,
		logo: new ig.AnimationSheet("en/king-of-strings/branding/logo.png", _SETTINGS.Branding.Logo.Width, _SETTINGS.Branding.Logo.Height),
		zIndex: 10001,
		size: {
			x: 64,
			y: 66
		},
		clickableLayer: null,
		link: null,
		newWindow: !1,
		div_layer_name: "branding-logo",
		name: "brandinglogo",
		init: function(b, c, d) {
			this.parent(b, c, d);
			if (!ig.global.wm) {
				if ("undefined" == typeof wm)
					if (_SETTINGS.Branding.Logo.Enabled) this.size.x = _SETTINGS.Branding.Logo.Width, this.size.y = _SETTINGS.Branding.Logo.Height, this.anims.idle = new ig.Animation(this.logo, 0, [0], !0), this.currentAnim = this.anims.idle, d && d.centralize && (this.pos.x = ig.system.width / 2 - this.size.x / 2, console.log("centralize true ... centering branded logo ...")), _SETTINGS.Branding.Logo.LinkEnabled && (this.link = _SETTINGS.Branding.Logo.Link, this.newWindow = _SETTINGS.Branding.Logo.NewWindow, this.clickableLayer =
						new ClickableDivLayer(this));
					else {
						this.kill();
						return
					} this.div_layer_name = d.div_layer_name ? d.div_layer_name : "branding-logo"
			}
		},
		show: function() {
			var b = ig.domHandler.getElementById("#" + this.div_layer_name);
			ig.domHandler.show(b)
		},
		hide: function() {
			var b = ig.domHandler.getElementById("#" + this.div_layer_name);
			ig.domHandler.hide(b)
		},
		clicked: function() {},
		clicking: function() {},
		released: function() {}
	})
});
ig.baked = !0;
ig.module("game.entities.branding-logo-placeholder").requires("impact.entity", "game.entities.buttons.button-branding-logo").defines(function() {
	EntityBrandingLogoPlaceholder = ig.Entity.extend({
		gravityFactor: 0,
		size: {
			x: 32,
			y: 32
		},
		_wmDrawBox: !0,
		_wmBoxColor: "rgba(0, 0, 255, 0.7)",
		init: function(b, c, d) {
			this.parent(b, c, d);
			if (d) switch (console.log("settings found ... using that div layer name"), b = d.div_layer_name, console.log("settings.centralize:", d.centralize), d.centralize) {
				case "true":
					console.log("centralize true");
					centralize = !0;
					break;
				case "false":
					console.log("centralize false");
					centralize = !1;
					break;
				default:
					console.log("default ... centralize false"), centralize = !1
			} else b = "branding-logo", centralize = !1;
			if ("undefined" == typeof wm) {
				if (_SETTINGS.Branding.Logo.Enabled) try {
					ig.game.spawnEntity(EntityButtonBrandingLogo, this.pos.x, this.pos.y, {
						div_layer_name: b,
						centralize: centralize
					})
				} catch (e) {
					console.log(e)
				}
				this.kill()
			}
		}
	})
});
ig.baked = !0;
ig.module("game.entities.buttons.button-text").requires("game.entities.buttons.button", "plugins.data.vector").defines(function() {
	EntityButtonText = EntityButton.extend({
		textColor: "#FF0FFF",
		scaleValue: 1,
		init: function(b, c, d) {
			this.setSpriteSheet("idle");
			this.setSize("idle");
			this.currentAnim = this.idle = new ig.Animation(this.idleSheet, 0.1, [0]);
			this.parent(b, c, d);
			this.context = ig.system.context
		},
		update: function() {
			this.parent();
			this.setScale(this.scaleValue, this.scaleValue)
		},
		draw: function() {
			this.parent();
			null !=
				this.text && (this.context.font = this.textSize + "px janda-manatee", this.context.textAlign = "center", this.context.textBaseline = "middle", this.context.fillStyle = this.textColor, this.context.fillText(this.text, this.pos.x + this.size.x / 2, this.pos.y + this.size.y / 2))
		},
		show: function() {
			var b = ig.domHandler.getElementById("#" + this.div_layer_name);
			ig.domHandler.show(b)
		},
		hide: function() {
			var b = ig.domHandler.getElementById("#" + this.div_layer_name);
			ig.domHandler.hide(b)
		},
		clicked: function() {
			ig.game.allowToClick && (ig.soundHandler.sfxPlayer.play("click"),
				ig.game.allowToClick = !1, this.tween({
					scaleValue: 1.2
				}, 0.02, {
					loop: ig.Tween.Loop.Reverse,
					loopCount: 3,
					onComplete: function() {
						ig.game.allowToClick = !0;
						this.doClick()
					}.bind(this)
				}).start())
		},
		doClick: function() {},
		released: function() {}
	})
});
ig.baked = !0;
ig.module("game.entities.buttons.button-more-games").requires("game.entities.buttons.button-text", "plugins.clickable-div-layer").defines(function() {
	EntityButtonMoreGames = EntityButtonText.extend({
		idleSheetInfo: {
			sheetImage: new ig.Image("en/king-of-strings/media/graphics/game/mainmenu/btn-more-games.png"),
			sheetX: 1,
			sheetY: 1
		},
		killOutLayer: !1,
		zIndex: 2,
		isCLickable: !1,
		clickableLayer: null,
		link: null,
		newWindow: !1,
		div_layer_name: "more-games",
		name: "moregames",
		allowChange: !1,
		init: function(b, c, d) {
			this.setSpriteSheet("idle");
			this.setSize("idle");
			this.currentAnim = this.idle = new ig.Animation(this.idleSheet, 0.1, [0]);
			this.parent(b, c, d);
			ig.global.wm || (this.div_layer_name = d.div_layer_name ? d.div_layer_name : "more-games", _SETTINGS.MoreGames.Enabled ? (_SETTINGS.MoreGames.Link && (this.link = _SETTINGS.MoreGames.Link), _SETTINGS.MoreGames.NewWindow && (this.newWindow = _SETTINGS.MoreGames.NewWindow), this.clickableLayer = new ClickableDivLayer(this)) : this.kill())
		},
		update: function() {
			this.parent();
			ig.game.disableButtonMoreGames ? this.hide() : this.show()
		},
		show: function() {
			var b =
				ig.domHandler.getElementById("#" + this.div_layer_name);
			ig.domHandler.show(b)
		},
		hide: function() {
			var b = ig.domHandler.getElementById("#" + this.div_layer_name);
			ig.domHandler.hide(b)
		},
		easeIn: function(b) {
			ig.game.allowToClick = !1;
			this.tween({
				pos: {
					x: this.pos.x,
					y: this.oriPos.y - this.size.y / 2
				}
			}, b, {
				easing: ig.Tween.Easing.Back.EaseOut,
				onComplete: function() {
					ig.game.easallowToClickeButton = !0;
					var b = ig.domHandler.getElementById("#" + this.div_layer_name);
					ig.domHandler.show(b)
				}.bind(this)
			}).start()
		},
		easeOut: function(b) {
			ig.game.allowToClick = !1;
			this.tween({
				pos: {
					x: this.pos.x,
					y: this.oriPos.y + ig.system.height - this.size.y / 2
				}
			}, b, {
				easing: ig.Tween.Easing.Linear.EaseNone,
				onComplete: function() {
					ig.game.allowToClick = !0;
					var b = ig.domHandler.getElementById("#" + this.div_layer_name);
					ig.domHandler.hide(b)
				}.bind(this)
			}).start()
		}
	})
});
ig.baked = !0;
ig.module("game.entities.opening-shield").requires("impact.entity").defines(function() {
	EntityOpeningShield = ig.Entity.extend({
		size: {
			x: 48,
			y: 48
		},
		move: 0,
		mIconAnim: 0,
		shieldAnim: 0,
		titleAnim: 0,
		shieldImage: new ig.Image("en/king-of-strings/media/graphics/opening/shield.png"),
		mIconImage: new ig.Image("en/king-of-strings/media/graphics/opening/m_icon.png"),
		titleImage: new ig.Image("en/king-of-strings/media/graphics/opening/title.png"),
		init: function(b, c, d) {
			this.parent(b, c, d)
		},
		ready: function() {
			if (!ig.wm)
				if (_SETTINGS.DeveloperBranding.Splash.Enabled) {
					this.initTimer = new ig.Timer(0.1);
					try {
						ig.soundHandler.playSound(ig.soundHandler.SOUNDID.openingSound)
					} catch (b) {
						console.log(b)
					}
				} else ig.game.director.nextLevel(), ig.system.context.globalAlpha = 1, this.kill()
		},
		update: function() {
			this.parent();
			this.updateOriginalShieldOpening()
		},
		draw: function() {
			this.parent();
			ig.global.wm || (this.nextLevelTimer && 0 > this.nextLevelTimer.delta() && (ig.system.context.globalAlpha = -this.nextLevelTimer.delta()), this.drawOriginalShieldOpening())
		},
		updateOriginalShieldOpening: function() {
			this.initTimer && 0 < this.initTimer.delta() &&
				(this.initTimer = null, this.sheildTimer = new ig.Timer(0.05));
			this.sheildTimer && 0 < this.sheildTimer.delta() && (3 > this.shieldAnim ? (this.shieldAnim++, this.sheildTimer.reset()) : (this.sheildTimer = null, this.moveTimer = new ig.Timer(0.001), this.mIconTimer = new ig.Timer(0.05), this.titleTimer = new ig.Timer(0.15)));
			this.moveTimer && 0 < this.moveTimer.delta() && (this.move += 0.3, this.moveTimer.reset());
			this.mIconTimer && 0 < this.mIconTimer.delta() && (12 > this.mIconAnim ? (this.mIconAnim++, this.moveTimer.reset()) : this.mIconTimer =
				null);
			this.titleTimer && 0 < this.titleTimer.delta() && (11 > this.titleAnim ? (this.titleAnim++, this.titleTimer.reset()) : (this.titleTimer = null, this.nextLevelTimer = new ig.Timer(1)));
			this.nextLevelTimer && 0 < this.nextLevelTimer.delta() && (this.nextLevelTimer = null, ig.game.director.nextLevel(), ig.system.context.globalAlpha = 1)
		},
		drawOriginalShieldOpening: function() {
			if (this.moveTimer) {
				var b = ig.system.context;
				b.save();
				var c = ig.system.width / 2,
					d = ig.system.height / 2;
				b.translate(c, d);
				b.rotate(this.move * Math.PI / 180);
				b.beginPath();
				b.moveTo(0, 0);
				for (var e = 0, f = 1; 48 >= f; f += 1) b.lineTo(0 + 800 * Math.cos(2 * f * Math.PI / 48), 0 + 800 * Math.sin(2 * f * Math.PI / 48)), e++, 2 == e && (e = 0, b.lineTo(0, 0));
				b.translate(-c, -d);
				c = b.createRadialGradient(c, d, 100, c, d, 250);
				c.addColorStop(0, "rgba(255,255,255,0.1)");
				c.addColorStop(1, "rgba(0,0,0,0)");
				b.fillStyle = c;
				b.fill();
				b.restore()
			}
			this.shieldImage.drawTile(ig.system.width / 2 - 91, 0 - (768 - ig.system.height) / 2, this.shieldAnim, 182, 768);
			this.moveTimer && (this.mIconImage.drawTile(ig.system.width / 2 - 96, ig.system.height / 2 - 70, this.mIconAnim,
				166, 160), this.titleImage.drawTile(ig.system.width / 2 - 204, ig.system.height / 2 + 100, this.titleAnim, 409, 76));
			ig.system.context.globalAlpha = 1
		}
	})
});
ig.baked = !0;
ig.module("game.entities.opening-kitty").requires("impact.entity").defines(function() {
	EntityOpeningKitty = ig.Entity.extend({
		size: {
			x: 48,
			y: 48
		},
		kittyAnim: -1,
		kittyImage: new ig.Image("en/king-of-strings/media/graphics/opening/kitty.png"),
		kittyTitleImage: new ig.Image("en/king-of-strings/media/graphics/opening/kittytitle.png"),
		soundKey: "kittyopeningSound",
		init: function(b, c, d) {
			this.parent(b, c, d)
		},
		ready: function() {
			if (!ig.wm)
				if (_SETTINGS.DeveloperBranding.Splash.Enabled) {
					this.initTimer = new ig.Timer(0.1);
					try {
						ig.soundHandler.sfxPlayer.play(this.soundKey)
					} catch (b) {
						console.log(b)
					}
				} else ig.game.director.nextLevel(),
					ig.system.context.globalAlpha = 1, this.kill()
		},
		update: function() {
			this.parent();
			this.updateKittyOpening()
		},
		draw: function() {
			this.parent();
			ig.global.wm || (this.nextLevelTimer && 0 > this.nextLevelTimer.delta() && (ig.system.context.globalAlpha = -this.nextLevelTimer.delta()), this.drawKittyOpening())
		},
		updateKittyOpening: function() {
			if (this.initTimer && 0 < this.initTimer.delta()) {
				this.initTimer = null;
				try {
					ig.soundHandler.sfxPlayer.play(this.soundKey)
				} catch (b) {
					console.log(b)
				}
				this.kittyTimer = new ig.Timer(0.15)
			}
			this.kittyTimer &&
				0 < this.kittyTimer.delta() && (7 > this.kittyAnim ? (this.kittyAnim++, this.kittyTimer.reset()) : (this.kittyTimer = null, this.nextLevelTimer = new ig.Timer(2)));
			this.nextLevelTimer && 0 < this.nextLevelTimer.delta() && (this.nextLevelTimer = null, ig.game.director.nextLevel(), ig.system.context.globalAlpha = 1)
		},
		drawKittyOpening: function() {
			var b = ig.system.context.createLinearGradient(0, 0, 0, ig.system.height);
			b.addColorStop(0, "#ffed94");
			b.addColorStop(1, "#ffcd85");
			ig.system.context.fillStyle = b;
			ig.system.context.fillRect(0,
				0, ig.system.width, ig.system.height);
			0 <= this.kittyAnim && (this.kittyImage.drawTile(ig.system.width / 2 - this.kittyImage.width / 8, ig.system.height / 2 - this.kittyImage.height / 4, this.kittyAnim, 218, 325), this.kittyTitleImage.drawTile(ig.system.width / 2 - this.kittyTitleImage.width / 2, ig.system.height / 2 + this.kittyImage.height / 4 + 10, this.kittyAnim, 380, 37));
			ig.system.context.globalAlpha = 1
		}
	})
});
ig.baked = !0;
ig.module("game.entities.pointer").requires("impact.entity").defines(function() {
	EntityPointer = ig.Entity.extend({
		checkAgainst: ig.Entity.TYPE.BOTH,
		size: new Vector2(10, 10),
		isFirstPressed: !1,
		isPressed: !1,
		isReleased: !1,
		isHovering: !1,
		hoveringItem: null,
		objectArray: [],
		clickedObjectList: [],
		ignorePause: !0,
		zIndex: 5500,
		check: function(b) {
			this.objectArray.push(b)
		},
		clickObject: function(b) {
			this.isFirstPressed && "function" == typeof b.clicked && (b.clicked(), this.addToClickedObjectList(b));
			this.isPressed && !this.isReleased &&
				"function" == typeof b.clicking && b.clicking();
			this.isReleased && "function" == typeof b.released && (b.released(), this.removeFromClickedObjectList(b))
		},
		refreshPos: function() {
			this.pos = ig.game.io.getClickPos()
		},
		update: function() {
			this.parent();
			this.refreshPos();
			var b = null,
				c = -1;
			for (a = this.objectArray.length - 1; - 1 < a; a--) this.objectArray[a].zIndex > c && (c = this.objectArray[a].zIndex, b = this.objectArray[a]);
			if (null != b) null != this.hoveringItem ? this.hoveringItem != b && ("function" == typeof this.hoveringItem.leave && this.hoveringItem.leave(),
				"function" == typeof b.over && b.over()) : "function" == typeof b.over && b.over(), this.hoveringItem = b, this.clickObject(b), this.objectArray = [];
			else if (null != this.hoveringItem && "function" == typeof this.hoveringItem.leave && (this.hoveringItem.leave(), this.hoveringItem = null), this.isReleased) {
				for (b = 0; b < this.clickedObjectList.length; b++) c = this.clickedObjectList[b], "function" == typeof c.releasedOutside && c.releasedOutside();
				this.clickedObjectList = []
			}
			this.isFirstPressed = ig.input.pressed("click");
			this.isReleased = ig.input.released("click");
			this.isPressed = ig.input.state("click")
		},
		addToClickedObjectList: function(b) {
			this.clickedObjectList.push(b)
		},
		removeFromClickedObjectList: function(b) {
			for (var c = [], d = 0; d < this.clickedObjectList.length; d++) {
				var e = this.clickedObjectList[d];
				e != b && c.push(e)
			}
			this.clickedObjectList = c
		}
	})
});
ig.baked = !0;
ig.module("game.entities.pointer-selector").requires("game.entities.pointer").defines(function() {
	EntityPointerSelector = EntityPointer.extend({
		zIndex: 1E3,
		_wmDrawBox: !0,
		_wmBoxColor: "rgba(0, 0, 255, 0.7)",
		size: {
			x: 20,
			y: 20
		},
		init: function(b, c, d) {
			this.parent(b, c, d)
		}
	})
});
ig.baked = !0;
ig.module("game.entities.select").requires("impact.entity").defines(function() {
	EntitySelect = ig.Entity.extend({
		type: ig.Entity.TYPE.B,
		checkAgainst: ig.Entity.TYPE.A,
		collides: ig.Entity.COLLIDES.NEVER,
		canSelect: !1,
		canSelectTimerDuration: 0.35,
		zIndex: 99999,
		isHovering: !1,
		isSelected: !1,
		init: function(b, c, d) {
			this.parent(b, c, d);
			this.canSelectTimer = new ig.Timer(this.canSelectTimerDuration)
		},
		doesClickableLayerExist: function(b) {
			for (k in dynamicClickableEntityDivs)
				if (k == b) return !0;
			return !1
		},
		checkClickableLayer: function(b,
			c, d) {
			"undefined" == typeof wm && (this.doesClickableLayerExist(b) ? (ig.game.showOverlay([b]), $("#" + b).find("[href]").attr("href", c)) : this.createClickableOutboundLayer(b, c, "en/king-of-strings/media/graphics/misc/invisible.png", d))
		},
		createClickableOutboundLayer: function(b, c, d, e) {
			var f = ig.$new("div");
			f.id = b;
			document.body.appendChild(f);
			$("#" + f.id).css("float", "left");
			$("#" + f.id).css("width", this.size.x * multiplier);
			$("#" + f.id).css("height", this.size.y * multiplier);
			$("#" + f.id).css("position", "absolute");
			var l = w / 2 - destW / 2,
				p = h /
				2 - destH / 2;
			w == mobileWidth ? ($("#" + f.id).css("left", this.pos.x), $("#" + f.id).css("top", this.pos.y)) : ($("#" + f.id).css("left", l + this.pos.x * multiplier), $("#" + f.id).css("top", p + this.pos.y * multiplier));
			e ? $("#" + f.id).html("<a target='_blank' href='" + c + "'><img style='width:100%;height:100%' src='" + d + "'></a>") : $("#" + f.id).html("<a href='" + c + "'><img style='width:100%;height:100%' src='" + d + "'></a>");
			dynamicClickableEntityDivs[b] = {};
			dynamicClickableEntityDivs[b].width = $("#" + f.id).width();
			dynamicClickableEntityDivs[b].height =
				$("#" + f.id).height();
			dynamicClickableEntityDivs[b].entity_pos_x = this.pos.x;
			dynamicClickableEntityDivs[b].entity_pos_y = this.pos.y
		},
		hovered: function() {
			this.isHovering = !0;
			this.dehoverOthers()
		},
		dehoverOthers: function() {
			var b = ig.game.getEntitiesByType(EntitySelect);
			for (i = 0; i < b.length; i++) b[i] != this && (b[i].isHovering = !1)
		},
		deselectOthers: function() {
			var b = ig.game.getEntitiesByType(EntitySelect);
			for (i = 0; i < b.length; i++) b[i] != this && (b[i].isSelected = !1)
		},
		update: function() {
			this.parent();
			this.canSelectTimer && 0 <
				this.canSelectTimer.delta() && (this.canSelect = !0, this.canSelectTimer = null)
		}
	})
});
ig.baked = !0;
ig.module("game.entities.songs-data").requires("impact.entity").defines(function() {
	EntitySongsData = ig.Entity.extend({
		gravityFactor: 0,
		data: [{
			title: _STRINGS.Songs[1],
			difficulty: 1,
			musicPath: "media/audio/song/song-2",
			chordData: [{
				time: 1536,
				type: 3
			}, {
				time: 1872,
				type: 1
			}, {
				time: 1872,
				type: 3
			}, {
				time: 2220,
				type: 2
			}, {
				time: 2448,
				type: 3
			}, {
				time: 2916,
				type: 1
			}, {
				time: 3372,
				type: 1
			}, {
				time: 3372,
				type: 3
			}, {
				time: 3720,
				type: 2
			}, {
				time: 4068,
				type: 1
			}, {
				time: 4068,
				type: 3
			}, {
				time: 4296,
				type: 2
			}, {
				time: 4752,
				type: 1
			}, {
				time: 4752,
				type: 3
			}, {
				time: 4860,
				type: 2
			}, {
				time: 5004,
				type: 1
			}, {
				time: 5004,
				type: 3
			}, {
				time: 5220,
				type: 1
			}, {
				time: 5340,
				type: 3
			}, {
				time: 5460,
				type: 2
			}, {
				time: 5568,
				type: 2
			}, {
				time: 5916,
				type: 1
			}, {
				time: 5916,
				type: 3
			}, {
				time: 6132,
				type: 2
			}, {
				time: 6600,
				type: 1
			}, {
				time: 7068,
				type: 3
			}, {
				time: 7404,
				type: 1
			}, {
				time: 7404,
				type: 3
			}, {
				time: 7752,
				type: 2
			}, {
				time: 7980,
				type: 3
			}, {
				time: 8448,
				type: 1
			}, {
				time: 8904,
				type: 1
			}, {
				time: 8904,
				type: 3
			}, {
				time: 9252,
				type: 2
			}, {
				time: 9600,
				type: 1
			}, {
				time: 9600,
				type: 3
			}, {
				time: 9828,
				type: 2
			}, {
				time: 10284,
				type: 1
			}, {
				time: 10284,
				type: 3
			}, {
				time: 10392,
				type: 2
			}, {
				time: 10536,
				type: 1
			}, {
				time: 10536,
				type: 3
			}, {
				time: 10752,
				type: 1
			}, {
				time: 10872,
				type: 3
			}, {
				time: 10992,
				type: 2
			}, {
				time: 11100,
				type: 2
			}, {
				time: 11448,
				type: 1
			}, {
				time: 11448,
				type: 3
			}, {
				time: 11664,
				type: 2
			}, {
				time: 11904,
				type: 1
			}, {
				time: 11904,
				type: 3
			}, {
				time: 12024,
				type: 1
			}, {
				time: 12024,
				type: 3
			}, {
				time: 12144,
				type: 1
			}, {
				time: 12144,
				type: 3
			}, {
				time: 12492,
				type: 2
			}, {
				time: 12600,
				type: 2
			}, {
				time: 12816,
				type: 2
			}, {
				time: 13068,
				type: 2
			}, {
				time: 13176,
				type: 1
			}, {
				time: 13176,
				type: 3
			}, {
				time: 13416,
				type: 2
			}, {
				time: 13536,
				type: 1
			}, {
				time: 13536,
				type: 3
			}, {
				time: 13752,
				type: 1
			}, {
				time: 13752,
				type: 3
			}, {
				time: 13872,
				type: 1
			}, {
				time: 13872,
				type: 3
			}, {
				time: 13992,
				type: 1
			}, {
				time: 13992,
				type: 3
			}, {
				time: 14340,
				type: 2
			}, {
				time: 14448,
				type: 2
			}, {
				time: 14664,
				type: 2
			}, {
				time: 14916,
				type: 2
			}, {
				time: 15024,
				type: 1
			}, {
				time: 15024,
				type: 3
			}, {
				time: 15264,
				type: 2
			}, {
				time: 15384,
				type: 1
			}, {
				time: 15384,
				type: 3
			}, {
				time: 15600,
				type: 1
			}, {
				time: 15600,
				type: 3
			}, {
				time: 15720,
				type: 1
			}, {
				time: 15720,
				type: 3
			}, {
				time: 15840,
				type: 1
			}, {
				time: 15840,
				type: 3
			}, {
				time: 16188,
				type: 2
			}, {
				time: 16296,
				type: 2
			}, {
				time: 16512,
				type: 2
			}, {
				time: 16764,
				type: 2
			}, {
				time: 16872,
				type: 1
			}, {
				time: 16872,
				type: 3
			}, {
				time: 17112,
				type: 2
			}, {
				time: 17232,
				type: 1
			}, {
				time: 17232,
				type: 3
			}, {
				time: 17376,
				type: 1
			}, {
				time: 17376,
				type: 3
			}, {
				time: 17496,
				type: 1
			}, {
				time: 17496,
				type: 3
			}, {
				time: 17616,
				type: 1
			}, {
				time: 17616,
				type: 3
			}, {
				time: 17964,
				type: 2
			}, {
				time: 18072,
				type: 2
			}, {
				time: 18288,
				type: 2
			}, {
				time: 18540,
				type: 2
			}, {
				time: 18648,
				type: 1
			}, {
				time: 18648,
				type: 3
			}]
		}, {
			title: _STRINGS.Songs[5],
			difficulty: 1,
			musicPath: "media/audio/song/song-6",
			chordData: [{
				time: 1632,
				type: 3
			}, {
				time: 1840,
				type: 2
			}, {
				time: 1968,
				type: 2
			}, {
				time: 2176,
				type: 1
			}, {
				time: 2176,
				type: 3
			}, {
				time: 2416,
				type: 1
			}, {
				time: 2624,
				type: 1
			}, {
				time: 2944,
				type: 3
			}, {
				time: 3168,
				type: 2
			}, {
				time: 3392,
				type: 1
			}, {
				time: 3600,
				type: 2
			}, {
				time: 3728,
				type: 2
			}, {
				time: 3936,
				type: 1
			}, {
				time: 3936,
				type: 3
			}, {
				time: 4144,
				type: 3
			}, {
				time: 4368,
				type: 3
			}, {
				time: 4688,
				type: 1
			}, {
				time: 4912,
				type: 2
			}, {
				time: 5136,
				type: 3
			}, {
				time: 5344,
				type: 2
			}, {
				time: 5472,
				type: 2
			}, {
				time: 5680,
				type: 1
			}, {
				time: 5680,
				type: 3
			}, {
				time: 5920,
				type: 1
			}, {
				time: 6128,
				type: 1
			}, {
				time: 6448,
				type: 3
			}, {
				time: 6672,
				type: 2
			}, {
				time: 6896,
				type: 1
			}, {
				time: 7104,
				type: 2
			}, {
				time: 7232,
				type: 2
			}, {
				time: 7440,
				type: 1
			}, {
				time: 7440,
				type: 3
			}, {
				time: 7664,
				type: 3
			}, {
				time: 7888,
				type: 3
			}, {
				time: 8208,
				type: 1
			}, {
				time: 8432,
				type: 2
			}, {
				time: 8656,
				type: 3
			}, {
				time: 8864,
				type: 2
			}, {
				time: 8992,
				type: 2
			}, {
				time: 9200,
				type: 1
			}, {
				time: 9200,
				type: 3
			}, {
				time: 9440,
				type: 1
			}, {
				time: 9648,
				type: 1
			}, {
				time: 9968,
				type: 3
			}, {
				time: 10192,
				type: 2
			}, {
				time: 10416,
				type: 1
			}, {
				time: 10624,
				type: 2
			}, {
				time: 10752,
				type: 2
			}, {
				time: 10960,
				type: 1
			}, {
				time: 10960,
				type: 3
			}, {
				time: 11184,
				type: 3
			}, {
				time: 11408,
				type: 3
			}, {
				time: 11728,
				type: 1
			}, {
				time: 11952,
				type: 2
			}, {
				time: 12176,
				type: 3
			}, {
				time: 12384,
				type: 2
			}, {
				time: 12512,
				type: 2
			}, {
				time: 12720,
				type: 1
			}, {
				time: 12720,
				type: 3
			}, {
				time: 12960,
				type: 1
			}, {
				time: 13168,
				type: 1
			}, {
				time: 13488,
				type: 3
			}, {
				time: 13712,
				type: 2
			}, {
				time: 13936,
				type: 1
			}, {
				time: 14144,
				type: 2
			}, {
				time: 14272,
				type: 2
			}, {
				time: 14480,
				type: 1
			}, {
				time: 14480,
				type: 3
			}, {
				time: 14480,
				type: 1
			}, {
				time: 14672,
				type: 2
			}, {
				time: 14672,
				type: 3
			}]
		}, {
			title: _STRINGS.Songs[2],
			difficulty: 2,
			musicPath: "media/audio/song/song-3",
			chordData: [{
				time: 1504,
				type: 2
			}, {
				time: 1728,
				type: 1
			}, {
				time: 1968,
				type: 2
			}, {
				time: 2192,
				type: 3
			}, {
				time: 2416,
				type: 2
			}, {
				time: 2656,
				type: 1
			}, {
				time: 2880,
				type: 2
			}, {
				time: 3120,
				type: 3
			}, {
				time: 3344,
				type: 2
			}, {
				time: 3584,
				type: 1
			}, {
				time: 3584,
				type: 3
			}, {
				time: 3824,
				type: 2
			}, {
				time: 4048,
				type: 1
			}, {
				time: 4048,
				type: 2
			}, {
				time: 4048,
				type: 3
			}, {
				time: 4288,
				type: 1
			}, {
				time: 4288,
				type: 2
			}, {
				time: 4512,
				type: 2
			}, {
				time: 4512,
				type: 3
			}, {
				time: 4848,
				type: 2
			}, {
				time: 4976,
				type: 1
			}, {
				time: 4976,
				type: 3
			}, {
				time: 5216,
				type: 2
			}, {
				time: 5440,
				type: 1
			}, {
				time: 5440,
				type: 3
			}, {
				time: 5776,
				type: 3
			}, {
				time: 5920,
				type: 2
			}, {
				time: 6128,
				type: 1
			}, {
				time: 6128,
				type: 2
			}, {
				time: 6352,
				type: 2
			}, {
				time: 6352,
				type: 3
			}, {
				time: 6688,
				type: 2
			}, {
				time: 6816,
				type: 1
			}, {
				time: 6816,
				type: 3
			}, {
				time: 7056,
				type: 2
			}, {
				time: 7280,
				type: 1
			}, {
				time: 7280,
				type: 3
			}, {
				time: 7632,
				type: 2
			}, {
				time: 7744,
				type: 1
			}, {
				time: 7744,
				type: 3
			}, {
				time: 7968,
				type: 1
			}, {
				time: 7968,
				type: 2
			}, {
				time: 8192,
				type: 2
			}, {
				time: 8192,
				type: 3
			}, {
				time: 8528,
				type: 2
			}, {
				time: 8656,
				type: 1
			}, {
				time: 8656,
				type: 3
			}, {
				time: 8896,
				type: 2
			}, {
				time: 9120,
				type: 1
			}, {
				time: 9120,
				type: 3
			}, {
				time: 9456,
				type: 3
			}, {
				time: 9600,
				type: 2
			}, {
				time: 9808,
				type: 1
			}, {
				time: 9808,
				type: 2
			}, {
				time: 10032,
				type: 2
			}, {
				time: 10032,
				type: 3
			}, {
				time: 10368,
				type: 2
			}, {
				time: 10496,
				type: 1
			}, {
				time: 10496,
				type: 3
			}, {
				time: 10736,
				type: 2
			}, {
				time: 10960,
				type: 1
			}, {
				time: 10960,
				type: 3
			}, {
				time: 11312,
				type: 2
			}, {
				time: 11440,
				type: 1
			}, {
				time: 11440,
				type: 2
			}, {
				time: 11440,
				type: 3
			}, {
				time: 11664,
				type: 1
			}, {
				time: 11664,
				type: 2
			}, {
				time: 11888,
				type: 2
			}, {
				time: 11888,
				type: 3
			}, {
				time: 12224,
				type: 2
			}, {
				time: 12352,
				type: 1
			}, {
				time: 12352,
				type: 3
			}, {
				time: 12592,
				type: 2
			}, {
				time: 12816,
				type: 1
			}, {
				time: 12816,
				type: 3
			}, {
				time: 13152,
				type: 3
			}, {
				time: 13296,
				type: 2
			}, {
				time: 13504,
				type: 1
			}, {
				time: 13504,
				type: 2
			}, {
				time: 13728,
				type: 2
			}, {
				time: 13728,
				type: 3
			}, {
				time: 14064,
				type: 2
			}, {
				time: 14192,
				type: 1
			}, {
				time: 14192,
				type: 3
			}, {
				time: 14432,
				type: 2
			}, {
				time: 14656,
				type: 1
			}, {
				time: 14656,
				type: 3
			}, {
				time: 14992,
				type: 2
			}, {
				time: 14992,
				type: 1
			}, {
				time: 15120,
				type: 2
			}, {
				time: 15120,
				type: 3
			}, {
				time: 15344,
				type: 1
			}, {
				time: 15344,
				type: 2
			}, {
				time: 15568,
				type: 2
			}, {
				time: 15568,
				type: 3
			}, {
				time: 15904,
				type: 2
			}, {
				time: 16032,
				type: 1
			}, {
				time: 16032,
				type: 3
			}, {
				time: 16272,
				type: 2
			}, {
				time: 16496,
				type: 1
			}, {
				time: 16496,
				type: 3
			}, {
				time: 16832,
				type: 3
			}, {
				time: 16976,
				type: 2
			}, {
				time: 17184,
				type: 1
			}, {
				time: 17184,
				type: 2
			}, {
				time: 17408,
				type: 2
			}, {
				time: 17408,
				type: 3
			}, {
				time: 17744,
				type: 2
			}, {
				time: 17872,
				type: 1
			}, {
				time: 17872,
				type: 3
			}, {
				time: 18112,
				type: 2
			}, {
				time: 18336,
				type: 1
			}, {
				time: 18336,
				type: 3
			}, {
				time: 18688,
				type: 2
			}, {
				time: 18688,
				type: 1
			}, {
				time: 18816,
				type: 2
			}, {
				time: 18816,
				type: 3
			}]
		}, {
			title: _STRINGS.Songs[8],
			difficulty: 2,
			musicPath: "media/audio/song/song-9",
			chordData: [{
				time: 1664,
				type: 1
			}, {
				time: 1664,
				type: 2
			}, {
				time: 2128,
				type: 2
			}, {
				time: 2128,
				type: 3
			}, {
				time: 2416,
				type: 1
			}, {
				time: 2416,
				type: 2
			}, {
				time: 2880,
				type: 2
			}, {
				time: 2880,
				type: 3
			}, {
				time: 3168,
				type: 1
			}, {
				time: 3168,
				type: 2
			}, {
				time: 3648,
				type: 2
			}, {
				time: 3648,
				type: 3
			}, {
				time: 3936,
				type: 1
			}, {
				time: 3936,
				type: 2
			}, {
				time: 4400,
				type: 2
			}, {
				time: 4400,
				type: 3
			}, {
				time: 4688,
				type: 1
			}, {
				time: 4688,
				type: 2
			}, {
				time: 5152,
				type: 2
			}, {
				time: 5152,
				type: 3
			}, {
				time: 5440,
				type: 1
			}, {
				time: 5440,
				type: 2
			}, {
				time: 5904,
				type: 2
			}, {
				time: 5904,
				type: 3
			}, {
				time: 6192,
				type: 1
			}, {
				time: 6192,
				type: 2
			}, {
				time: 7408,
				type: 1
			}, {
				time: 7600,
				type: 3
			}, {
				time: 7792,
				type: 2
			}, {
				time: 7936,
				type: 1
			}, {
				time: 8064,
				type: 1
			}, {
				time: 8256,
				type: 3
			}, {
				time: 8400,
				type: 3
			}, {
				time: 8544,
				type: 2
			}, {
				time: 8688,
				type: 2
			}, {
				time: 8832,
				type: 2
			}, {
				time: 8928,
				type: 3
			}, {
				time: 9120,
				type: 1
			}, {
				time: 9312,
				type: 2
			}, {
				time: 9472,
				type: 3
			}, {
				time: 9600,
				type: 3
			}, {
				time: 9792,
				type: 1
			}, {
				time: 9936,
				type: 1
			}, {
				time: 10064,
				type: 2
			}, {
				time: 10208,
				type: 2
			}, {
				time: 10352,
				type: 2
			}, {
				time: 10448,
				type: 1
			}, {
				time: 10640,
				type: 3
			}, {
				time: 10832,
				type: 2
			}, {
				time: 10976,
				type: 1
			}, {
				time: 11104,
				type: 1
			}, {
				time: 11296,
				type: 3
			}, {
				time: 11440,
				type: 3
			}, {
				time: 11584,
				type: 2
			}, {
				time: 11728,
				type: 2
			}, {
				time: 11872,
				type: 2
			}, {
				time: 11952,
				type: 1
			}, {
				time: 12144,
				type: 3
			}, {
				time: 12336,
				type: 2
			}, {
				time: 12480,
				type: 1
			}, {
				time: 12608,
				type: 1
			}, {
				time: 12800,
				type: 3
			}, {
				time: 12944,
				type: 3
			}, {
				time: 13088,
				type: 2
			}, {
				time: 13232,
				type: 2
			}, {
				time: 13376,
				type: 2
			}, {
				time: 13472,
				type: 1
			}, {
				time: 13664,
				type: 3
			}, {
				time: 13856,
				type: 2
			}, {
				time: 14000,
				type: 1
			}, {
				time: 14128,
				type: 1
			}, {
				time: 14320,
				type: 3
			}, {
				time: 14464,
				type: 3
			}, {
				time: 14608,
				type: 2
			}, {
				time: 14752,
				type: 2
			}, {
				time: 14896,
				type: 2
			}, {
				time: 14976,
				type: 1
			}, {
				time: 15168,
				type: 3
			}, {
				time: 15360,
				type: 2
			}, {
				time: 15504,
				type: 1
			}, {
				time: 15632,
				type: 1
			}, {
				time: 15824,
				type: 3
			}, {
				time: 15968,
				type: 3
			}, {
				time: 16112,
				type: 2
			}, {
				time: 16256,
				type: 2
			
			}]
		}, {
			title: _STRINGS.Songs[7],
			difficulty: 1,
			musicPath: "media/audio/song/song-8",
			chordData: [{
				time: 1584,
				type: 1
			}, {
				time: 1888,
				type: 2
			}, {
				time: 2192,
				type: 3
			}, {
				time: 2496,
				type: 1
			}, {
				time: 2800,
				type: 2
			}, {
				time: 2912,
				type: 2
			}, {
				time: 3088,
				type: 1
			}, {
				time: 3088,
				type: 2
			}, {
				time: 3360,
				type: 3
			}, {
				time: 3360,
				type: 2
			}, {
				time: 3664,
				type: 3
			}, {
				time: 3968,
				type: 1
			}, {
				time: 4048,
				type: 2
			}, {
				time: 4128,
				type: 1
			}, {
				time: 4272,
				type: 2
			}, {
				time: 4576,
				type: 3
			}, {
				time: 4880,
				type: 1
			}, {
				time: 5248,
				type: 1
			}, {
				time: 5248,
				type: 2
			}, {
				time: 5552,
				type: 3
			}, {
				time: 5552,
				type: 2
			}, {
				time: 5856,
				type: 3
			}, {
				time: 6160,
				type: 1
			}, {
				time: 6464,
				type: 3
			}, {
				time: 6544,
				type: 2
			}, {
				time: 6624,
				type: 3
			}, {
				time: 6768,
				type: 2
			}, {
				time: 7072,
				type: 1
			}, {
				time: 7968,
				type: 1
			}, {
				time: 8272,
				type: 2
			}, {
				time: 8576,
				type: 3
			}, {
				time: 8880,
				type: 1
			}, {
				time: 9184,
				type: 2
			}, {
				time: 9488,
				type: 3
			}, {
				time: 9824,
				type: 1
			}, {
				time: 10128,
				type: 2
			}, {
				time: 10432,
				type: 3
			}, {
				time: 10736,
				type: 1
			}, {
				time: 11040,
				type: 2
			}, {
				time: 11344,
				type: 3
			}, {
				time: 11680,
				type: 1
			}, {
				time: 11984,
				type: 2
			}, {
				time: 12288,
				type: 3
			}, {
				time: 12592,
				type: 1
			}, {
				time: 12896,
				type: 2
			}, {
				time: 13200,
				type: 3
			}, {
				time: 13520,
				type: 1
			}, {
				time: 13824,
				type: 2
			}, {
				time: 14128,
				type: 3
			}, {
				time: 14432,
				type: 1
			}, {
				time: 14736,
				type: 2
			}, {
				time: 15040,
				type: 3
			}, {
				time: 15376,
				type: 1
			}, {
				time: 15680,
				type: 2
			}, {
				time: 15984,
				type: 3
			}, {
				time: 16288,
				type: 1
			}, {
				time: 16592,
				type: 2
			}, {
				time: 16896,
				type: 3
			}, {
				time: 16896,
				type: 1
			}, {
				time: 17872,
				type: 2
			}, {
				time: 17872,
				type: 3
			}]
		}, {
			title: _STRINGS.Songs[3],
			difficulty: 2,
			musicPath: "media/audio/song/song-4",
			chordData: [{
				time: 1568,
				type: 2
			}, {
				time: 1568,
				type: 3
			}, {
				time: 1856,
				type: 1
			}, {
				time: 1856,
				type: 2
			}, {
				time: 2128,
				type: 2
			}, {
				time: 2128,
				type: 3
			}, {
				time: 2400,
				type: 1
			}, {
				time: 2400,
				type: 2
			}, {
				time: 2400,
				type: 1
			}, {
				time: 2688,
				type: 2
			}, {
				time: 2688,
				type: 3
			}, {
				time: 2832,
				type: 1
			}, {
				time: 2832,
				type: 3
			}, {
				time: 2960,
				type: 2
			}, {
				time: 3072,
				type: 2
			}, {
				time: 3520,
				type: 2
			}, {
				time: 3792,
				type: 2
			}, {
				time: 4080,
				type: 3
			}, {
				time: 4080,
				type: 1
			}, {
				time: 4080,
				type: 2
			}, {
				time: 4352,
				type: 2
			}, {
				time: 4352,
				type: 3
			}, {
				time: 4624,
				type: 1
			}, {
				time: 4624,
				type: 2
			}, {
				time: 5040,
				type: 1
			}, {
				time: 5040,
				type: 2
			}, {
				time: 5184,
				type: 2
			}, {
				time: 5184,
				type: 3
			}, {
				time: 5600,
				type: 2
			}, {
				time: 5736,
				type: 1
			}, {
				time: 5880,
				type: 3
			}, {
				time: 6144,
				type: 2
			}, {
				time: 6144,
				type: 3
			}, {
				time: 6288,
				type: 1
			}, {
				time: 6288,
				type: 2
			}, {
				time: 6708,
				type: 2
			}, {
				time: 6844,
				type: 1
			}, {
				time: 6988,
				type: 3
			}, {
				time: 7272,
				type: 2
			}, {
				time: 7560,
				type: 2
			}, {
				time: 7836,
				type: 2
			}, {
				time: 8112,
				type: 2
			}, {
				time: 8368,
				type: 1
			}, {
				time: 8368,
				type: 3
			}, {
				time: 8592,
				type: 2
			}, {
				time: 8928,
				type: 2
			}, {
				time: 9152,
				type: 1
			}, {
				time: 9152,
				type: 3
			}, {
				time: 9488,
				type: 2
			}, {
				time: 9488,
				type: 3
			}, {
				time: 9616,
				type: 1
			}, {
				time: 9616,
				type: 2
			}, {
				time: 9900,
				type: 1
			}, {
				time: 10188,
				type: 1
			}, {
				time: 10452,
				type: 1
			}, {
				time: 10596,
				type: 1
			}, {
				time: 10596,
				type: 2
			}, {
				time: 10728,
				type: 2
			}, {
				time: 10728,
				type: 3
			}, {
				time: 11004,
				type: 3
			}, {
				time: 11292,
				type: 3
			}, {
				time: 11508,
				type: 3
			}, {
				time: 11700,
				type: 2
			}, {
				time: 11700,
				type: 3
			}, {
				time: 11828,
				type: 1
			}, {
				time: 11828,
				type: 2
			}, {
				time: 12120,
				type: 2
			}, {
				time: 12256,
				type: 1
			}, {
				time: 12256,
				type: 3
			}, {
				time: 12480,
				type: 2
			}, {
				time: 12816,
				type: 2
			}, {
				time: 13040,
				type: 1
			}, {
				time: 13040,
				type: 3
			}, {
				time: 13932,
				type: 1
			}, {
				time: 14208,
				type: 2
			}, {
				time: 14496,
				type: 3
			}, {
				time: 14772,
				type: 1
			}, {
				time: 14772,
				type: 3
			}, {
				time: 15048,
				type: 3
			}, {
				time: 15324,
				type: 2
			}, {
				time: 15600,
				type: 1
			}, {
				time: 15864,
				type: 2
			}, {
				time: 16008,
				type: 1
			}, {
				time: 16008,
				type: 3
			}, {
				time: 16152,
				type: 1
			}, {
				time: 16428,
				type: 2
			}, {
				time: 16716,
				type: 3
			}, {
				time: 16992,
				type: 1
			}, {
				time: 16992,
				type: 3
			}, {
				time: 17268,
				type: 3
			}, {
				time: 17544,
				type: 2
			}, {
				time: 17820,
				type: 1
			}]
		}, {
			title: _STRINGS.Songs[6],
			difficulty: 2,
			musicPath: "media/audio/song/song-7",
			chordData: [{
				time: 1504,
				type: 1
			}, {
				time: 1648,
				type: 1
			}, {
				time: 1776,
				type: 1
			}, {
				time: 1968,
				type: 3
			}, {
				time: 2096,
				type: 3
			}, {
				time: 2240,
				type: 3
			}, {
				time: 2384,
				type: 3
			}, {
				time: 2512,
				type: 3
			}, {
				time: 2704,
				type: 2
			}, {
				time: 2832,
				type: 2
			}, {
				time: 2976,
				type: 2
			}, {
				time: 3120,
				type: 2
			}, {
				time: 3248,
				type: 2
			}, {
				time: 3440,
				type: 1
			}, {
				time: 3568,
				type: 1
			}, {
				time: 3712,
				type: 1
			}, {
				time: 3856,
				type: 1
			}, {
				time: 3984,
				type: 1
			}, {
				time: 4176,
				type: 3
			}, {
				time: 4304,
				type: 3
			}, {
				time: 4448,
				type: 3
			}, {
				time: 4592,
				type: 3
			}, {
				time: 4720,
				type: 3
			}, {
				time: 4928,
				type: 2
			}, {
				time: 5056,
				type: 1
			}, {
				time: 5200,
				type: 2
			}, {
				time: 5360,
				type: 1
			}, {
				time: 5472,
				type: 2
			}, {
				time: 5648,
				type: 2
			}, {
				time: 5776,
				type: 3
			}, {
				time: 5920,
				type: 2
			}, {
				time: 6080,
				type: 3
			}, {
				time: 6192,
				type: 2
			}, {
				time: 6384,
				type: 3
			}, {
				time: 6512,
				type: 1
			}, {
				time: 6656,
				type: 3
			}, {
				time: 6816,
				type: 1
			}, {
				time: 6928,
				type: 3
			}, {
				time: 7136,
				type: 1
			}, {
				time: 7264,
				type: 3
			}, {
				time: 7408,
				type: 1
			}, {
				time: 7568,
				type: 3
			}, {
				time: 7680,
				type: 1
			}, {
				time: 7872,
				type: 2
			}, {
				time: 7872,
				type: 3
			}, {
				time: 8000,
				type: 2
			}, {
				time: 8000,
				type: 3
			}, {
				time: 8144,
				type: 2
			}, {
				time: 8144,
				type: 3
			}, {
				time: 8288,
				type: 2
			}, {
				time: 8288,
				type: 3
			}, {
				time: 8416,
				type: 2
			}, {
				time: 8416,
				type: 3
			}, {
				time: 8608,
				type: 1
			}, {
				time: 8608,
				type: 2
			}, {
				time: 8736,
				type: 1
			}, {
				time: 8736,
				type: 2
			}, {
				time: 8880,
				type: 1
			}, {
				time: 8880,
				type: 2
			}, {
				time: 9024,
				type: 1
			}, {
				time: 9024,
				type: 2
			}, {
				time: 9152,
				type: 1
			}, {
				time: 9152,
				type: 2
			}, {
				time: 9328,
				type: 2
			}, {
				time: 9456,
				type: 2
			}, {
				time: 9600,
				type: 2
			}, {
				time: 9744,
				type: 2
			}, {
				time: 9872,
				type: 2
			}, {
				time: 10064,
				type: 1
			}, {
				time: 10192,
				type: 1
			}, {
				time: 10336,
				type: 1
			}, {
				time: 10480,
				type: 1
			}, {
				time: 10608,
				type: 1
			}, {
				time: 10800,
				type: 3
			}, {
				time: 10928,
				type: 3
			}, {
				time: 11072,
				type: 3
			}, {
				time: 11216,
				type: 3
			}, {
				time: 11344,
				type: 3
			}, {
				time: 11536,
				type: 2
			}, {
				time: 11664,
				type: 2
			}, {
				time: 11808,
				type: 2
			}, {
				time: 11952,
				type: 2
			}, {
				time: 12080,
				type: 2
			}, {
				time: 12304,
				type: 1
			}, {
				time: 12656,
				type: 3
			}, {
				time: 13072,
				type: 2
			}, {
				time: 13360,
				type: 1
			}, {
				time: 13712,
				type: 3
			}, {
				time: 14128,
				type: 2
			}, {
				time: 14480,
				type: 1
			}, {
				time: 14832,
				type: 3
			}, {
				time: 15248,
				type: 2
			}, {
				time: 15616,
				type: 1
			}, {
				time: 15968,
				type: 3
			}, {
				time: 16384,
				type: 2
			}, {
				time: 16704,
				type: 1
			}, {
				time: 17056,
				type: 3
			}, {
				time: 17472,
				type: 2
			}]
		}, {
			title: _STRINGS.Songs[9],
			difficulty: 3,
			musicPath: "media/audio/song/song-10",
			chordData: [{
				time: 1620,
				type: 2
			}, {
				time: 1776,
				type: 3
			}, {
				time: 1884,
				type: 3
			}, {
				time: 2052,
				type: 3
			}, {
				time: 2328,
				type: 2
			}, {
				time: 2496,
				type: 2
			}, {
				time: 2664,
				type: 1
			}, {
				time: 2772,
				type: 1
			}, {
				time: 2940,
				type: 1
			}, {
				time: 3264,
				type: 3
			}, {
				time: 3416,
				type: 1
			}, {
				time: 3528,
				type: 3
			}, {
				time: 3640,
				type: 1
			}, {
				time: 3808,
				type: 3
			}, {
				time: 3976,
				type: 1
			}, {
				time: 4080,
				type: 2
			}, {
				time: 4248,
				type: 2
			}, {
				time: 4416,
				type: 1
			}, {
				time: 4524,
				type: 1
			}, {
				time: 4692,
				type: 1
			}, {
				time: 4956,
				type: 2
			}, {
				time: 5124,
				type: 2
			}, {
				time: 5288,
				type: 3
			}, {
				time: 5396,
				type: 3
			}, {
				time: 5564,
				type: 3
			}, {
				time: 5832,
				type: 2
			}, {
				time: 6000,
				type: 2
			}, {
				time: 6168,
				type: 1
			}, {
				time: 6276,
				type: 1
			}, {
				time: 6444,
				type: 1
			}, {
				time: 6708,
				type: 2
			}, {
				time: 6876,
				type: 2
			}, {
				time: 7044,
				type: 2
			}, {
				time: 7164,
				type: 2
			}, {
				time: 7356,
				type: 2
			}, {
				time: 7584,
				type: 2
			}, {
				time: 7752,
				type: 2
			}, {
				time: 7920,
				type: 1
			}, {
				time: 8028,
				type: 1
			}, {
				time: 8196,
				type: 1
			}, {
				time: 8472,
				type: 2
			}, {
				time: 8640,
				type: 2
			}, {
				time: 8800,
				type: 3
			}, {
				time: 8908,
				type: 3
			}, {
				time: 9076,
				type: 3
			}, {
				time: 9348,
				type: 2
			}, {
				time: 9516,
				type: 2
			}, {
				time: 9684,
				type: 1
			}, {
				time: 9792,
				type: 1
			}, {
				time: 9960,
				type: 1
			}, {
				time: 10288,
				type: 3
			}, {
				time: 10448,
				type: 1
			}, {
				time: 10552,
				type: 3
			}, {
				time: 10664,
				type: 1
			}, {
				time: 10832,
				type: 3
			}, {
				time: 10992,
				type: 1
			}, {
				time: 11112,
				type: 2
			}, {
				time: 11280,
				type: 2
			}, {
				time: 11448,
				type: 1
			}, {
				time: 11556,
				type: 1
			}, {
				time: 11724,
				type: 1
			}, {
				time: 12000,
				type: 2
			}, {
				time: 12168,
				type: 2
			}, {
				time: 12312,
				type: 3
			}, {
				time: 12420,
				type: 3
			}, {
				time: 12588,
				type: 3
			}, {
				time: 12876,
				type: 2
			}, {
				time: 13044,
				type: 2
			}, {
				time: 13212,
				type: 1
			}, {
				time: 13320,
				type: 1
			}, {
				time: 13488,
				type: 1
			}, {
				time: 13816,
				type: 3
			}, {
				time: 13968,
				type: 1
			}, {
				time: 14064,
				type: 3
			}, {
				time: 14192,
				type: 1
			}, {
				time: 14352,
				type: 3
			}, {
				time: 14512,
				type: 1
			}, {
				time: 14616,
				type: 2
			}, {
				time: 14784,
				type: 2
			}, {
				time: 14952,
				type: 1
			}, {
				time: 15060,
				type: 1
			}, {
				time: 15228,
				type: 1
			}, {
				time: 15504,
				type: 2
			}, {
				time: 15672,
				type: 2
			}, {
				time: 15832,
				type: 3
			}, {
				time: 15940,
				type: 3
			}, {
				time: 16108,
				type: 3
			}, {
				time: 16380,
				type: 2
			}, {
				time: 16548,
				type: 2
			}, {
				time: 16716,
				type: 1
			}, {
				time: 16824,
				type: 1
			}, {
				time: 16992,
				type: 1
			}, {
				time: 17312,
				type: 1
			}, {
				time: 17472,
				type: 3
			}, {
				time: 17584,
				type: 1
			}, {
				time: 17688,
				type: 3
			}, {
				time: 17840,
				type: 1
			}]
		}, {
			title: _STRINGS.Songs[10],
			difficulty: 3,
			musicPath: "media/audio/song/song-11",
			chordData: [{
				time: 1616,
				type: 2
			}, {
				time: 1792,
				type: 1
			}, {
				time: 2344,
				type: 1
			}, {
				time: 2528,
				type: 3
			}, {
				time: 3072,
				type: 3
			}, {
				time: 3256,
				type: 2
			}, {
				time: 3832,
				type: 2
			}, {
				time: 4008,
				type: 1
			}, {
				time: 4560,
				type: 1
			}, {
				time: 4744,
				type: 3
			}, {
				time: 5288,
				type: 3
			}, {
				time: 5440,
				type: 2
			}, {
				time: 6016,
				type: 2
			}, {
				time: 6176,
				type: 1
			}, {
				time: 6176,
				type: 3
			}, {
				time: 6176,
				type: 1
			}, {
				time: 6912,
				type: 2
			}, {
				time: 6912,
				type: 3
			}, {
				time: 7072,
				type: 1
			}, {
				time: 7264,
				type: 1
			}, {
				time: 7456,
				type: 1
			}, {
				time: 7632,
				type: 2
			}, {
				time: 7792,
				type: 2
			}, {
				time: 7984,
				type: 2
			}, {
				time: 8176,
				type: 2
			}, {
				time: 8368,
				type: 3
			}, {
				time: 8528,
				type: 3
			}, {
				time: 8720,
				type: 3
			}, {
				time: 8912,
				type: 3
			}, {
				time: 9104,
				type: 2
			}, {
				time: 9264,
				type: 2
			}, {
				time: 9456,
				type: 2
			}, {
				time: 9648,
				type: 2
			}, {
				time: 9824,
				type: 1
			}, {
				time: 9824,
				type: 2
			}, {
				time: 9984,
				type: 1
			}, {
				time: 9984,
				type: 2
			}, {
				time: 10176,
				type: 1
			}, {
				time: 10176,
				type: 2
			}, {
				time: 10368,
				type: 1
			}, {
				time: 10368,
				type: 2
			}, {
				time: 10560,
				type: 2
			}, {
				time: 10560,
				type: 3
			}, {
				time: 10720,
				type: 2
			}, {
				time: 10720,
				type: 3
			}, {
				time: 10912,
				type: 2
			}, {
				time: 10912,
				type: 3
			}, {
				time: 11104,
				type: 2
			}, {
				time: 11104,
				type: 3
			}, {
				time: 11296,
				type: 1
			}, {
				time: 11296,
				type: 2
			}, {
				time: 11456,
				type: 1
			}, {
				time: 11456,
				type: 2
			}, {
				time: 11648,
				type: 1
			}, {
				time: 11648,
				type: 2
			}, {
				time: 11840,
				type: 1
			}, {
				time: 11840,
				type: 2
			}, {
				time: 12032,
				type: 2
			}, {
				time: 12032,
				type: 3
			}, {
				time: 12192,
				type: 2
			}, {
				time: 12192,
				type: 3
			}, {
				time: 12384,
				type: 2
			}, {
				time: 12384,
				type: 3
			}, {
				time: 12576,
				type: 2
			}, {
				time: 12576,
				type: 3
			}, {
				time: 12768,
				type: 1
			}, {
				time: 12768,
				type: 2
			}, {
				time: 12928,
				type: 3
			}, {
				time: 12928,
				type: 1
			}, {
				time: 13120,
				type: 1
			}, {
				time: 13312,
				type: 1
			}, {
				time: 13488,
				type: 2
			}, {
				time: 13648,
				type: 2
			}, {
				time: 13840,
				type: 2
			}, {
				time: 14032,
				type: 2
			}, {
				time: 14224,
				type: 3
			}, {
				time: 14384,
				type: 3
			}, {
				time: 14576,
				type: 3
			}, {
				time: 14768,
				type: 3
			}, {
				time: 14944,
				type: 1
			}, {
				time: 15104,
				type: 1
			}, {
				time: 15296,
				type: 1
			}, {
				time: 15488,
				type: 1
			}, {
				time: 15664,
				type: 2
			}, {
				time: 15824,
				type: 2
			}, {
				time: 16016,
				type: 2
			}, {
				time: 16208,
				type: 2
			}, {
				time: 16400,
				type: 3
			}, {
				time: 16560,
				type: 3
			}, {
				time: 16752,
				type: 3
			}, {
				time: 16944,
				type: 3
			}, {
				time: 17136,
				type: 1
			}, {
				time: 17296,
				type: 1
			}, {
				time: 17488,
				type: 1
			}, {
				time: 17680,
				type: 1
			}, {
				time: 17856,
				type: 2
			}, {
				time: 18016,
				type: 2
			}, {
				time: 18208,
				type: 2
			}, {
				time: 18400,
				type: 2
			}, {
				time: 18592,
				type: 3
			}, {
				time: 18752,
				type: 3
			}, {
				time: 18944,
				type: 3
			}, {
				time: 19136,
				type: 3
			}]
		}, {

			title: _STRINGS.Songs[11],
			difficulty: 3,
			musicPath: "media/audio/song/song-12",
			chordData: [{
				time: 1584,
				type: 2
			}, {
				time: 1728,
				type: 2
			}, {
				time: 1944,
				type: 3
			}, {
				time: 2160,
				type: 3
			}, {
				time: 2304,
				type: 2
			}, {
				time: 2448,
				type: 2
			}, {
				time: 2592,
				type: 2
			}, {
				time: 2736,
				type: 2
			}, {
				time: 2880,
				type: 2
			}, {
				time: 3096,
				type: 1
			}, {
				time: 3096,
				type: 3
			}, {
				time: 3312,
				type: 1
			}, {
				time: 3312,
				type: 3
			}, {
				time: 3456,
				type: 2
			}, {
				time: 3600,
				type: 2
			}, {
				time: 3744,
				type: 2
			}, {
				time: 3888,
				type: 2
			}, {
				time: 4032,
				type: 2
			}, {
				time: 4248,
				type: 1
			}, {
				time: 4392,
				type: 3
			}, {
				time: 4536,
				type: 1
			}, {
				time: 4680,
				type: 3
			}, {
				time: 5184,
				type: 1
			}, {
				time: 5400,
				type: 1
			}, {
				time: 5616,
				type: 1
			}, {
				time: 5760,
				type: 2
			}, {
				time: 5904,
				type: 2
			}, {
				time: 6048,
				type: 2
			}, {
				time: 6192,
				type: 2
			}, {
				time: 6336,
				type: 2
			}, {
				time: 6552,
				type: 3
			}, {
				time: 6768,
				type: 3
			}, {
				time: 6912,
				type: 2
			}, {
				time: 7056,
				type: 2
			}, {
				time: 7200,
				type: 2
			}, {
				time: 7344,
				type: 2
			}, {
				time: 7488,
				type: 2
			}, {
				time: 7704,
				type: 1
			}, {
				time: 7704,
				type: 3
			}, {
				time: 7920,
				type: 1
			}, {
				time: 7920,
				type: 3
			}, {
				time: 8064,
				type: 2
			}, {
				time: 8208,
				type: 2
			}, {
				time: 8352,
				type: 2
			}, {
				time: 8496,
				type: 2
			}, {
				time: 8640,
				type: 2
			}, {
				time: 8856,
				type: 1
			}, {
				time: 9000,
				type: 3
			}, {
				time: 9144,
				type: 1
			}, {
				time: 9288,
				type: 3
			}, {
				time: 9792,
				type: 1
			}, {
				time: 10008,
				type: 1
			}, {
				time: 10224,
				type: 1
			}, {
				time: 10368,
				type: 2
			}, {
				time: 10512,
				type: 2
			}, {
				time: 10656,
				type: 2
			}, {
				time: 10800,
				type: 2
			}, {
				time: 10944,
				type: 2
			}, {
				time: 11160,
				type: 3
			}, {
				time: 11376,
				type: 3
			}, {
				time: 11520,
				type: 2
			}, {
				time: 11664,
				type: 2
			}, {
				time: 11808,
				type: 2
			}, {
				time: 11952,
				type: 2
			}, {
				time: 12096,
				type: 2
			}, {
				time: 12312,
				type: 1
			}, {
				time: 12312,
				type: 3
			}, {
				time: 12528,
				type: 1
			}, {
				time: 12528,
				type: 3
			}, {
				time: 12672,
				type: 2
			}, {
				time: 12816,
				type: 2
			}, {
				time: 12960,
				type: 2
			}, {
				time: 13104,
				type: 2
			}, {
				time: 13248,
				type: 2
			}, {
				time: 13464,
				type: 1
			}, {
				time: 13608,
				type: 3
			}, {
				time: 13752,
				type: 1
			}, {
				time: 13896,
				type: 3
			}, {
				time: 14376,
				type: 1
			}, {
				time: 14592,
				type: 1
			}, {
				time: 14808,
				type: 1
			}, {
				time: 14952,
				type: 2
			}, {
				time: 15096,
				type: 2
			}, {
				time: 15240,
				type: 2
			}, {
				time: 15384,
				type: 2
			}, {
				time: 15528,
				type: 2
			}, {
				time: 15744,
				type: 3
			}, {
				time: 15960,
				type: 3
			}, {
				time: 16104,
				type: 2
			}, {
				time: 16248,
				type: 2
			}, {
				time: 16392,
				type: 2
			}, {
				time: 16536,
				type: 2
			}, {
				time: 16680,
				type: 2
			}, {
				time: 16896,
				type: 1
			}, {
				time: 16896,
				type: 3
			}, {
				time: 17112,
				type: 1
			}, {
				time: 17112,
				type: 3
			}, {
				time: 17256,
				type: 2
			}, {
				time: 17400,
				type: 2
			}, {
				time: 17544,
				type: 2
			}, {
				time: 17688,
				type: 2
			}, {
				time: 17832,
				type: 2
			}, {
				time: 18048,
				type: 1
			}, {
				time: 18192,
				type: 3
			}, {
				time: 18336,
				type: 1
			}, {
				time: 18480,
				type: 3
			}]
		}, {
			title: _STRINGS.Songs[1],
			difficulty: 3,
			musicPath: "media/audio/song/song-2",
			chordData: [{
				time: 1576,
				type: 1
			}, {
				time: 1576,
				type: 3
			}, {
				time: 1664,
				type: 2
			}, {
				time: 1856,
				type: 3
			}, {
				time: 2040,
				type: 2
			}, {
				time: 2184,
				type: 1
			}, {
				time: 2328,
				type: 1
			}, {
				time: 2328,
				type: 3
			}, {
				time: 2416,
				type: 2
			}, {
				time: 2600,
				type: 1
			}, {
				time: 2784,
				type: 2
			}, {
				time: 2928,
				type: 3
			}, {
				time: 3072,
				type: 1
			}, {
				time: 3072,
				type: 3
			}, {
				time: 3160,
				type: 2
			}, {
				time: 3352,
				type: 2
			}, {
				time: 3448,
				type: 2
			}, {
				time: 3536,
				type: 3
			}, {
				time: 3680,
				type: 1
			}, {
				time: 3824,
				type: 2
			}, {
				time: 3824,
				type: 1
			}, {
				time: 3912,
				type: 2
			}, {
				time: 3912,
				type: 3
			}, {
				time: 4104,
				type: 1
			}, {
				time: 4288,
				type: 2
			}, {
				time: 4432,
				type: 3
			}, {
				time: 4576,
				type: 1
			}, {
				time: 4576,
				type: 3
			}, {
				time: 4664,
				type: 2
			}, {
				time: 4848,
				type: 1
			}, {
				time: 5032,
				type: 2
			}, {
				time: 5176,
				type: 3
			}, {
				time: 5320,
				type: 1
			}, {
				time: 5320,
				type: 3
			}, {
				time: 5408,
				type: 2
			}, {
				time: 5600,
				type: 1
			}, {
				time: 5784,
				type: 2
			}, {
				time: 5928,
				type: 3
			}, {
				time: 6072,
				type: 1
			}, {
				time: 6072,
				type: 3
			}, {
				time: 6160,
				type: 2
			}, {
				time: 6344,
				type: 2
			}, {
				time: 6440,
				type: 2
			}, {
				time: 6528,
				type: 3
			}, {
				time: 6672,
				type: 1
			}, {
				time: 6816,
				type: 2
			}, {
				time: 6904,
				type: 1
			}, {
				time: 6904,
				type: 2
			}, {
				time: 6904,
				type: 3
			}, {
				time: 7104,
				type: 3
			}, {
				time: 7288,
				type: 3
			}, {
				time: 7480,
				type: 1
			}, {
				time: 7664,
				type: 1
			}, {
				time: 7848,
				type: 2
			}, {
				time: 8032,
				type: 2
			}, {
				time: 8232,
				type: 1
			}, {
				time: 8232,
				type: 3
			}, {
				time: 8424,
				type: 1
			}, {
				time: 8424,
				type: 3
			}, {
				time: 8600,
				type: 2
			}, {
				time: 8792,
				type: 2
			}, {
				time: 8976,
				type: 3
			}, {
				time: 9160,
				type: 3
			}, {
				time: 9352,
				type: 1
			}, {
				time: 9536,
				type: 1
			}, {
				time: 9720,
				type: 2
			}, {
				time: 9904,
				type: 2
			}, {
				time: 10104,
				type: 1
			}, {
				time: 10104,
				type: 3
			}, {
				time: 10296,
				type: 1
			}, {
				time: 10296,
				type: 3
			}, {
				time: 10664,
				type: 2
			}, {
				time: 10664,
				type: 2
			}, {
				time: 10848,
				type: 3
			}, {
				time: 11032,
				type: 3
			}, {
				time: 11224,
				type: 1
			}, {
				time: 11408,
				type: 1
			}, {
				time: 11592,
				type: 2
			}, {
				time: 11776,
				type: 2
			}, {
				time: 11976,
				type: 1
			}, {
				time: 11976,
				type: 3
			}, {
				time: 12168,
				type: 1
			}, {
				time: 12168,
				type: 3
			}, {
				time: 12344,
				type: 2
			}, {
				time: 12536,
				type: 2
			}, {
				time: 12720,
				type: 1
			}, {
				time: 12720,
				type: 3
			}, {
				time: 12816,
				type: 1
			}, {
				time: 12816,
				type: 3
			}, {
				time: 12912,
				type: 1
			}, {
				time: 12912,
				type: 2
			}, {
				time: 13088,
				type: 3
			}, {
				time: 13088,
				type: 1
			}, {
				time: 13272,
				type: 2
			}, {
				time: 13416,
				type: 3
			}, {
				time: 13560,
				type: 1
			}, {
				time: 13560,
				type: 3
			}, {
				time: 13648,
				type: 2
			}, {
				time: 13840,
				type: 3
			}, {
				time: 14024,
				type: 2
			}, {
				time: 14176,
				type: 1
			}, {
				time: 14312,
				type: 1
			}, {
				time: 14312,
				type: 3
			}, {
				time: 14400,
				type: 2
			}, {
				time: 14584,
				type: 1
			}, {
				time: 14768,
				type: 2
			}, {
				time: 14912,
				type: 3
			}, {
				time: 15056,
				type: 1
			}, {
				time: 15056,
				type: 3
			}, {
				time: 15144,
				type: 2
			}, {
				time: 15336,
				type: 2
			}, {
				time: 15432,
				type: 2
			}, {
				time: 15520,
				type: 3
			}, {
				time: 15664,
				type: 1
			}, {
				time: 15808,
				type: 2
			}, {
				time: 15896,
				type: 1
			}, {
				time: 15896,
				type: 2
			}, {
				time: 15896,
				type: 3
			}]
		}, {
			title: _STRINGS.Songs[4],
			difficulty: 3,
			musicPath: "media/audio/song/song-5",
			chordData: [{
				time: 1380,
				type: 2
			}, {
				time: 1716,
				type: 1
			}, {
				time: 2004,
				type: 2
			}, {
				time: 2136,
				type: 1
			}, {
				time: 2280,
				type: 3
			}, {
				time: 2376,
				type: 2
			}, {
				time: 2520,
				type: 2
			}, {
				time: 2880,
				type: 3
			}, {
				time: 3132,
				type: 2
			}, {
				time: 3288,
				type: 1
			}, {
				time: 3432,
				type: 3
			}, {
				time: 3540,
				type: 2
			}, {
				time: 3684,
				type: 2
			}, {
				time: 4032,
				type: 3
			}, {
				time: 4308,
				type: 2
			}, {
				time: 4440,
				type: 1
			}, {
				time: 4584,
				type: 3
			}, {
				time: 4704,
				type: 2
			}, {
				time: 4836,
				type: 2
			}, {
				time: 5184,
				type: 1
			}, {
				time: 5424,
				type: 2
			}, {
				time: 5592,
				type: 1
			}, {
				time: 5736,
				type: 3
			}, {
				time: 5844,
				type: 2
			}, {
				time: 5988,
				type: 2
			}, {
				time: 6336,
				type: 2
			}, {
				time: 6612,
				type: 2
			}, {
				time: 6744,
				type: 1
			}, {
				time: 6900,
				type: 3
			}, {
				time: 6996,
				type: 2
			}, {
				time: 7140,
				type: 2
			}, {
				time: 7488,
				type: 3
			}, {
				time: 7740,
				type: 2
			}, {
				time: 7908,
				type: 1
			}, {
				time: 8040,
				type: 3
			}, {
				time: 8148,
				type: 2
			}, {
				time: 8292,
				type: 2
			}, {
				time: 8652,
				type: 1
			}, {
				time: 8904,
				type: 2
			}, {
				time: 9048,
				type: 1
			}, {
				time: 9192,
				type: 3
			}, {
				time: 9312,
				type: 2
			}, {
				time: 9456,
				type: 2
			}, {
				time: 9924,
				type: 1
			}, {
				time: 9924,
				type: 3
			}, {
				time: 10056,
				type: 2
			}, {
				time: 10200,
				type: 2
			}, {
				time: 10308,
				type: 1
			}, {
				time: 10380,
				type: 3
			}, {
				time: 10464,
				type: 2
			}, {
				time: 10608,
				type: 1
			}, {
				time: 10608,
				type: 2
			}, {
				time: 11076,
				type: 3
			}, {
				time: 11076,
				type: 1
			}, {
				time: 11208,
				type: 3
			}, {
				time: 11208,
				type: 2
			}, {
				time: 11340,
				type: 2
			}, {
				time: 11460,
				type: 1
			}, {
				time: 11532,
				type: 3
			}, {
				time: 11616,
				type: 2
			}, {
				time: 11616,
				type: 1
			}, {
				time: 11760,
				type: 2
			}, {
				time: 11760,
				type: 3
			}, {
				time: 12240,
				type: 1
			}, {
				time: 12240,
				type: 3
			}, {
				time: 12372,
				type: 2
			}, {
				time: 12504,
				type: 2
			}, {
				time: 12624,
				type: 1
			}, {
				time: 12696,
				type: 3
			}, {
				time: 12780,
				type: 2
			}, {
				time: 12780,
				type: 1
			}, {
				time: 12924,
				type: 2
			}, {
				time: 12924,
				type: 3
			}, {
				time: 13380,
				type: 1
			}, {
				time: 13380,
				type: 3
			}, {
				time: 13524,
				type: 3
			}, {
				time: 13608,
				type: 1
			}, {
				time: 13680,
				type: 3
			}, {
				time: 13764,
				type: 1
			}, {
				time: 13836,
				type: 3
			}, {
				time: 13920,
				type: 2
			}, {
				time: 14064,
				type: 1
			}, {
				time: 14064,
				type: 2
			}, {
				time: 14532,
				type: 3
			}, {
				time: 14532,
				type: 2
			}, {
				time: 14640,
				type: 2
			}, {
				time: 14736,
				type: 2
			}, {
				time: 14964,
				type: 2
			}, {
				time: 15108,
				type: 2
			}, {
				time: 15204,
				type: 2
			}, {
				time: 15408,
				type: 1
			}, {
				time: 15408,
				type: 3
			}, {
				time: 15696,
				type: 3
			}, {
				time: 15804,
				type: 3
			}, {
				time: 15900,
				type: 3
			}, {
				time: 16128,
				type: 3
			}, {
				time: 16272,
				type: 3
			}, {
				time: 16368,
				type: 3
			}, {
				time: 16560,
				type: 1
			}, {
				time: 16560,
				type: 3
			}, {
				time: 16836,
				type: 1
			}, {
				time: 16944,
				type: 1
			}, {
				time: 17040,
				type: 1
			}, {
				time: 17268,
				type: 1
			}, {
				time: 17412,
				type: 1
			}, {
				time: 17508,
				type: 1
			}, {
				time: 17712,
				type: 1
			}, {
				time: 17712,
				type: 3
			}, {
				time: 17988,
				type: 2
			}, {
				time: 18096,
				type: 2
			}, {
				time: 18192,
				type: 2
			}, {
				time: 18420,
				type: 2
			}, {
				time: 18564,
				type: 2
			}, {
				time: 18660,
				type: 2
			}, {
				time: 18864,
				type: 1
			}, {
				time: 18864,
				type: 3
			}, {
				time: 19140,
				type: 1
			}, {
				time: 19140,
				type: 2
			}, {
				time: 19248,
				type: 3
			}, {
				time: 19248,
				type: 2
			}, {
				time: 19344,
				type: 2
			}, {
				time: 19416,
				type: 1
			}, {
				time: 19488,
				type: 3
			}, {
				time: 19572,
				type: 2
			}, {
				time: 19644,
				type: 1
			}, {
				time: 19716,
				type: 3
			}, {
				time: 19812,
				type: 2
			}, {
				time: 20016,
				type: 1
			}, {
				time: 20016,
				type: 3
			}, {
				time: 20016,
				type: 1
			}, {
				time: 20292,
				type: 2
			}, {
				time: 20292,
				type: 3
			}, {
				time: 20400,
				type: 2
			}, {
				time: 20496,
				type: 2
			}, {
				time: 20568,
				type: 1
			}, {
				time: 20640,
				type: 3
			}, {
				time: 20724,
				type: 2
			}, {
				time: 20796,
				type: 1
			}, {
				time: 20868,
				type: 3
			}, {
				time: 20964,
				type: 2
			}, {
				time: 21168,
				type: 1
			}, {
				time: 21168,
				type: 3
			}, {
				time: 21444,
				type: 1
			}, {
				time: 21444,
				type: 2
			}, {
				time: 21552,
				type: 3
			}, {
				time: 21552,
				type: 2
			}, {
				time: 21648,
				type: 2
			}, {
				time: 21720,
				type: 1
			}, {
				time: 21792,
				type: 3
			}, {
				time: 21876,
				type: 2
			}, {
				time: 21948,
				type: 1
			}, {
				time: 22020,
				type: 3
			}, {
				time: 22116,
				type: 2
			}, {
				time: 22320,
				type: 1
			}, {
				time: 22320,
				type: 3
			}, {
				time: 22320,
				type: 1
			}, {
				time: 22596,
				type: 2
			}, {
				time: 22596,
				type: 3
			}]
		}]
	})
});
ig.baked = !0;
ig.module("game.levels.opening").requires("impact.image", "game.entities.opening-kitty").defines(function() {
	LevelOpening = {
		entities: [{
			type: "EntityOpeningKitty",
			x: 520,
			y: 212
		}],
		layer: []
	}
});
ig.baked = !0;
ig.module("game.entities.buttons.button-sound").requires("game.entities.buttons.button").defines(function() {
	EntityButtonSound = EntityButton.extend({
		type: ig.Entity.TYPE.A,
		gravityFactor: 0,
		logo: new ig.AnimationSheet("en/king-of-strings/branding/logo.png", _SETTINGS.Branding.Logo.Width, _SETTINGS.Branding.Logo.Height),
		zIndex: 10001,
		size: {
			x: 50,
			y: 50
		},
		mutetest: !1,
		name: "soundtest",
		init: function(b, c, d) {
			this.parent(b, c, d)
		},
		draw: function() {
			this.parent();
			ig.system.context.fillRect(this.pos.x, this.pos.y, 50, 50)
		},
		clicked: function() {
			console.log("pressed");
			this.mutetest ? (console.log("unmute"), ig.soundHandler.unmuteAll(!0), this.mutetest = !1) : (console.log("mute"), ig.soundHandler.muteAll(!0), this.mutetest = !0)
		},
		clicking: function() {},
		released: function() {}
	})
});
ig.baked = !0;
ig.module("game.entities.test").requires("impact.entity").defines(function() {
	EntityTest = ig.Entity.extend({
		zIndex: 99999,
		pos: new Vector2(0, 0),
		size: new Vector2(20, 20),
		color: new ColorRGB(125, 255, 125, 1),
		init: function(b, c, d) {
			this.parent(b, c, d)
		},
		update: function() {
			this.parent()
		},
		draw: function() {
			this.parent();
			var b = ig.system.context;
			b.fillStyle = this.color.getHex();
			b.fillRect(this.pos.x, this.pos.y, this.size.x, this.size.y)
		}
	})
});
ig.baked = !0;
ig.module("game.entities.test-control").requires("impact.entity", "game.entities.test").defines(function() {
	EntityTestControl = ig.Entity.extend({
		zIndex: 99999,
		size: new Vector2(20, 20),
		testEnt: null,
		tween: null,
		init: function(b, c, d) {
			this.parent(b, c, d);
			ig.global.wm || (ig.game.testControl = this, this.initTestCase3(), ig.game.spawnEntity(ig.FullscreenButton, 5, 5, {
				enterImage: new ig.Image("en/king-of-strings/media/graphics/misc/enter-fullscreen-transparent.png"),
				exitImage: new ig.Image("en/king-of-strings/media/graphics/misc/exit-fullscreen-transparent.png")
			}))
		},
		initTestCase1: function() {
			this.initTestCase1Initialized = !0;
			this.testEnt = ig.game.spawnEntity(EntityTest, 200, 200);
			this.tweenSlow = (new ig.TweenDef(this.testEnt.pos)).to({
				x: 100,
				y: 100
			}, 2E3).easing(ig.Tween.Easing.Bounce.EaseOut).interpolation(ig.Tween.Interpolation.Bezier).repeat(2).yoyo(!0);
			this.tweenFast = (new ig.TweenDef(this.testEnt.pos)).to({
				x: 300,
				y: 300
			}, 500).repeat(4).yoyo(!0);
			this.tweenSlow.chain(this.tweenFast);
			this.tweenFast.chain(this.tweenSlow);
			this.tweenFast.start()
		},
		initTestCase2: function() {
			this.initTestCase2Initialized = !0;
			this.coordsTween = (new ig.TweenDef({
				x: 0,
				y: 0
			})).to({
				x: 100,
				y: 100
			}, 1E3).easing(ig.Tween.Easing.Bounce.EaseInOut).onStart(function(b) {
				console.log("Start", b);
				this.coordsTween.pause()
			}.bind(this)).onUpdate(function() {
				0.5 <= this.coordsTween._currentElapsed && this.coordsTween.stop()
			}.bind(this)).onStop(function(b) {
				console.log("Stop", b)
			}.bind(this)).onComplete(function(b) {
				console.log("Complete", b)
			}.bind(this)).onPause(function(b) {
				console.log("Pause", b);
				this.coordsTween.resume()
			}.bind(this)).onResume(function(b) {
				console.log("Resume",
					b)
			}.bind(this)).start()
		},
		initTestCase3: function() {
			this.initTestCase3Initialized = !0;
			this.spawnTweenEntity();
			this.spawnTweenControlButtons()
		},
		initTestCase4: function() {
			this.initTestCase4Initialized = !0;
			this.testEntityA = ig.game.spawnEntity(EntityTest, 450, 200, {
				control: this,
				size: new Vector2(20, 40)
			});
			this.testEntityB = ig.game.spawnEntity(EntityTest, 475, 200, {
				control: this,
				size: new Vector2(40, 20)
			});
			this.testEntityB.color.r = 255;
			this.testEntityB.color.g = 0;
			this.testEntityB.color.b = 0
		},
		spawnTweenEntity: function() {
			this.tweenEntity =
				ig.game.spawnEntity(EntityTest, 895, 49, {
					control: this,
					color: new ColorRGB(255, 125, 125, 1)
				});
			this.tweenControl = (new ig.TweenDef(this.tweenEntity.pos)).to({
				y: 330
			}, 5E3)
		},
		spawnTweenControlButtons: function() {
			this.tweenControlButtons = {
				start: ig.game.spawnEntity(EntityButton, 800, 50, {
					control: this,
					size: new Vector2(68, 48),
					color: new ColorRGB(255, 125, 125, 1)
				}),
				stop: ig.game.spawnEntity(EntityButton, 800, 100, {
					control: this,
					size: new Vector2(68, 48),
					color: new ColorRGB(255, 125, 125, 1)
				}),
				pause: ig.game.spawnEntity(EntityButton,
					800, 150, {
						control: this,
						size: new Vector2(68, 48),
						color: new ColorRGB(255, 125, 125, 1)
					}),
				resume: ig.game.spawnEntity(EntityButton, 800, 200, {
					control: this,
					size: new Vector2(68, 48),
					color: new ColorRGB(255, 125, 125, 1)
				}),
				end: ig.game.spawnEntity(EntityButton, 800, 250, {
					control: this,
					size: new Vector2(68, 48),
					color: new ColorRGB(255, 125, 125, 1)
				}),
				pGame: ig.game.spawnEntity(EntityButton, 800, 300, {
					control: this,
					size: new Vector2(68, 48),
					color: new ColorRGB(255, 125, 125, 1)
				})
			};
			this.setupTweenControlButtons()
		},
		setupTweenControlButtons: function() {
			var b =
				null;
			for (buttonKey in this.tweenControlButtons) b = this.tweenControlButtons[buttonKey], b.name = buttonKey, b.backgroundColor = b.color.getStyle(), b.foregroundColor = b.color.getInvertedColor().getStyle(), b.draw = function() {
				ig.system.context.fillStyle = this.backgroundColor;
				ig.system.context.fillRect(this.pos.x, this.pos.y, this.size.x, this.size.y);
				ig.system.context.fillStyle = this.foregroundColor;
				ig.system.context.font = "18px Arial";
				ig.system.context.textBaseline = "middle";
				ig.system.context.textAlign = "center";
				ig.system.context.fillText(this.name,
					this.pos.x + 0.5 * this.size.x, this.pos.y + 0.5 * this.size.y)
			};
			this.tweenControlButtons.start.clicked = function() {
				console.log("start");
				this.control.tweenControl.start()
			};
			this.tweenControlButtons.start.clicking = function() {};
			this.tweenControlButtons.start.released = function() {};
			this.tweenControlButtons.stop.clicked = function() {
				console.log("stop");
				this.control.tweenControl.stop()
			};
			this.tweenControlButtons.stop.clicking = function() {};
			this.tweenControlButtons.stop.released = function() {};
			this.tweenControlButtons.pause.clicked =
				function() {
					console.log("pause");
					this.control.tweenControl.pause()
				};
			this.tweenControlButtons.pause.clicking = function() {};
			this.tweenControlButtons.pause.released = function() {};
			this.tweenControlButtons.resume.clicked = function() {
				console.log("resume");
				this.control.tweenControl.resume()
			};
			this.tweenControlButtons.resume.clicking = function() {};
			this.tweenControlButtons.resume.released = function() {};
			this.tweenControlButtons.end.clicked = function() {
				console.log("end");
				this.control.tweenControl.end()
			};
			this.tweenControlButtons.end.clicking =
				function() {};
			this.tweenControlButtons.end.released = function() {};
			this.tweenControlButtons.pGame.clicked = function() {
				ig.game.pauseGame()
			};
			this.tweenControlButtons.pGame.clicking = function() {};
			this.tweenControlButtons.pGame.released = function() {}
		},
		update: function() {
			this.parent()
		},
		draw: function() {
			this.parent();
			!0 === this.testCase3Initialized && this.drawTestCase3Info()
		},
		drawTestCase3Info: function() {}
	})
});
ig.baked = !0;
ig.module("game.levels.test-desktop").requires("impact.image", "game.entities.branding-logo-placeholder", "game.entities.buttons.button-more-games", "game.entities.pointer", "game.entities.buttons.button-sound", "game.entities.test-control").defines(function() {
	LevelTestDesktop = {
		entities: [{
			type: "EntityBrandingLogoPlaceholder",
			x: 296,
			y: 396,
			settings: {
				div_layer_name: "layer_mainmenu",
				centralize: "true"
			}
		}, {
			type: "EntityButtonMoreGames",
			x: 580,
			y: 284,
			settings: {
				div_layer_name: "layer_moregames_mainmenu"
			}
		}, {
			type: "EntityPointer",
			x: 608,
			y: 120
		}, {
			type: "EntityButtonSound",
			x: 332,
			y: 284
		}, {
			type: "EntityTestControl",
			x: 0,
			y: 0
		}],
		layer: [{
			name: "background",
			width: 16,
			height: 9,
			linkWithCollision: !1,
			visible: 1,
			tilesetName: "en/king-of-strings/media/graphics/backgrounds/desktop/background.jpg",
			repeat: !1,
			preRender: !0,
			distance: "1",
			tilesize: 60,
			foreground: !1,
			data: [
				[1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16],
				[17, 18, 19, 20, 21, 22, 23, 24, 25, 26, 27, 28, 29, 30, 31, 32],
				[33, 34, 35, 36, 37, 38, 39, 40, 41, 42, 43, 44, 45, 46, 47, 48],
				[49, 50, 51, 52, 53, 54, 55, 56, 57, 58, 59, 60, 61, 62, 63, 64],
				[65, 66, 67, 68, 69,
					70, 71, 72, 73, 74, 75, 76, 77, 78, 79, 80
				],
				[81, 82, 83, 84, 85, 86, 87, 88, 89, 90, 91, 92, 93, 94, 95, 96],
				[97, 98, 99, 100, 101, 102, 103, 104, 105, 106, 107, 108, 109, 110, 111, 112],
				[113, 114, 115, 116, 117, 118, 119, 120, 121, 122, 123, 124, 125, 126, 127, 128],
				[129, 130, 131, 132, 133, 134, 135, 136, 137, 138, 139, 140, 141, 142, 143, 144]
			]
		}]
	};
	LevelTestDesktopResources = [new ig.Image("en/king-of-strings/media/graphics/backgrounds/desktop/background.jpg")]
});
ig.baked = !0;
ig.module("game.levels.test-mobile").requires("impact.image", "game.entities.branding-logo-placeholder", "game.entities.buttons.button-more-games", "game.entities.pointer", "game.entities.buttons.button-sound", "game.entities.test-control").defines(function() {
	LevelTestMobile = {
		entities: [{
			type: "EntityBrandingLogoPlaceholder",
			x: 216,
			y: 548,
			settings: {
				div_layer_name: "layer_mainmenu",
				centralize: "true"
			}
		}, {
			type: "EntityButtonMoreGames",
			x: 238,
			y: 625,
			settings: {
				div_layer_name: "layer_moregames_mainmenu"
			}
		}, {
			type: "EntityPointer",
			x: 444,
			y: 192
		}, {
			type: "EntityButtonSound",
			x: 245,
			y: 490
		}, {
			type: "EntityTestControl",
			x: 0,
			y: 0
		}],
		layer: [{
			name: "background",
			width: 9,
			height: 16,
			linkWithCollision: !1,
			visible: 1,
			tilesetName: "en/king-of-strings/media/graphics/backgrounds/mobile/background.jpg",
			repeat: !1,
			preRender: !0,
			distance: "1",
			tilesize: 60,
			foreground: !1,
			data: [
				[1, 2, 3, 4, 5, 6, 7, 8, 9],
				[10, 11, 12, 13, 14, 15, 16, 17, 18],
				[19, 20, 21, 22, 23, 24, 25, 26, 27],
				[28, 29, 30, 31, 32, 33, 34, 35, 36],
				[37, 38, 39, 40, 41, 42, 43, 44, 45],
				[46, 47, 48, 49, 50, 51, 52, 53, 54],
				[55, 56, 57, 58, 59, 60, 61, 62, 63],
				[64, 65, 66, 67,
					68, 69, 70, 71, 72
				],
				[73, 74, 75, 76, 77, 78, 79, 80, 81],
				[82, 83, 84, 85, 86, 87, 88, 89, 90],
				[91, 92, 93, 94, 95, 96, 97, 98, 99],
				[100, 101, 102, 103, 104, 105, 106, 107, 108],
				[109, 110, 111, 112, 113, 114, 115, 116, 117],
				[118, 119, 120, 121, 122, 123, 124, 125, 126],
				[127, 128, 129, 130, 131, 132, 133, 134, 135],
				[136, 137, 138, 139, 140, 141, 142, 143, 144]
			]
		}]
	};
	LevelTestMobileResources = [new ig.Image("en/king-of-strings/media/graphics/backgrounds/mobile/background.jpg")]
});
ig.baked = !0;
ig.module("game.entities.buttons.btn-next-page").requires("game.entities.global.marketjs-entity", "game.entities.buttons.button-text").defines(function() {
	EntityBtnNextPage = EntityButtonText.extend({
		idleSheetInfo: {
			sheetImage: new ig.Image("en/king-of-strings/media/graphics/game/select-song/btn-next.png"),
			sheetX: 1,
			sheetY: 1
		},
		killOutLayer: !1,
		zIndex: 100,
		type: ig.Entity.TYPE.BOTH,
		allowToClick: !1,
		containers: [],
		init: function(b, c, d) {
			this.setSpriteSheet("idle");
			this.setSize("idle");
			this.currentAnim = this.idle = new ig.Animation(this.idleSheet,
				0.1, [0]);
			this.parent(b, c, d);
			this.storyId = d.storyId;
			this.currentAnim = this.idle
		},
		doClick: function() {
			if (!0 == ig.game.allowToClick) {
				ig.game.allowToClick = !1;
				ig.game.currentPageId += 1;
				for (var b = 0; b < this.containers.length; b++) this.containers[b].nextPage()
			}
		}
	})
});
ig.baked = !0;
ig.module("game.entities.buttons.btn-prev-page").requires("game.entities.global.marketjs-entity", "game.entities.buttons.button-text").defines(function() {
	EntityBtnPrevPage = EntityButtonText.extend({
		idleSheetInfo: {
			sheetImage: new ig.Image("en/king-of-strings/media/graphics/game/select-song/btn-prev.png"),
			sheetX: 1,
			sheetY: 1
		},
		killOutLayer: !1,
		zIndex: 100,
		type: ig.Entity.TYPE.BOTH,
		allowToClick: !1,
		containers: [],
		init: function(b, c, d) {
			this.setSpriteSheet("idle");
			this.setSize("idle");
			this.currentAnim = this.idle = new ig.Animation(this.idleSheet,
				0.1, [0]);
			this.parent(b, c, d);
			this.storyId = d.storyId;
			this.currentAnim = this.idle
		},
		doClick: function() {
			if (!0 == ig.game.allowToClick) {
				ig.game.allowToClick = !1;
				ig.game.currentPageId -= 1;
				for (var b = 0; b < this.containers.length; b++) this.containers[b].prevPage()
			}
		}
	})
});
ig.baked = !0;
ig.module("game.entities.buttons.button-mainmenu").requires("game.entities.global.marketjs-entity", "game.entities.buttons.button-text").defines(function() {
	EntityButtonMainmenu = EntityButtonText.extend({
		idleSheetInfo: {
			sheetImage: new ig.Image("en/king-of-strings/media/graphics/game/select-song/btn-mainmenu.png"),
			sheetX: 1,
			sheetY: 1
		},
		killOutLayer: !1,
		zIndex: 500,
		type: ig.Entity.TYPE.BOTH,
		allowToClick: !1,
		containers: [],
		init: function(b, c, d) {
			this.setSpriteSheet("idle");
			this.setSize("idle");
			this.currentAnim = this.idle = new ig.Animation(this.idleSheet,
				0.1, [0]);
			this.parent(b, c, d);
			this.storyId = d.storyId;
			this.currentAnim = this.idle
		},
		doClick: function() {
			!0 == ig.game.allowToClick && ig.game.director.previousLevel()
		}
	})
});
ig.baked = !0;
ig.module("game.entities.gameobject.fade-transition").requires("impact.entity", "game.entities.global.marketjs-entity").defines(function() {
	EntityFadeTransition = ig.Entity.extend({
		killOutLayer: !1,
		gravityFactor: 0,
		zIndex: 1E4,
		type: ig.Entity.TYPE.A,
		alphaValue: 0.5,
		ignorePause: !0,
		showCircle: !1,
		circleRad: 0,
		circlePosX: 0,
		circlePosY: 0,
		songTitle: "",
		init: function(b, c, d) {
			this.parent(b, c, d);
			this.size.x = ig.system.width;
			this.size.y = ig.system.height
		},
		draw: function() {
			this.parent();
			var b = ig.system.context;
			b.save();
			b.beginPath();
			b.fillStyle = "rgba(0,0,0," + this.alphaValue + ")";
			b.moveTo(0, 0);
			b.lineTo(0, 960);
			b.lineTo(540, 960);
			b.lineTo(540, 0);
			b.closePath();
			b.fill();
			b.restore();
			b.save();
			b.font = "55px montserrat";
			b.fillStyle = "rgba(255,255,255," + this.alphaValue + ")";
			b.textAlign = "center";
			b.fillText(this.songTitle, ig.system.width / 2, ig.system.height / 2);
			b.restore()
		},
		show: function() {
			this.songTitle = "";
			this.alphaValue = 0;
			this.type = ig.Entity.TYPE.A;
			this.tween({
				alphaValue: 1
			}, 0.3, {
				onComplete: function() {
					this.type = ig.Entity.TYPE.NONE
				}.bind(this)
			}).start()
		},
		showWithSongTitle: function(b) {
			this.songTitle = b;
			this.alphaValue = 0;
			this.type = ig.Entity.TYPE.A;
			this.tween({
				alphaValue: 1
			}, 0.3, {
				onComplete: function() {
					this.type = ig.Entity.TYPE.NONE
				}.bind(this)
			}).start()
		},
		hide: function() {
			this.songTitle = "";
			this.alphaValue = 1;
			this.type = ig.Entity.TYPE.A;
			this.tween({
				alphaValue: 0
			}, 0.3, {
				onComplete: function() {
					this.type = ig.Entity.TYPE.NONE
				}.bind(this)
			}).start()
		},
		hideWithSongTitle: function(b) {
			this.songTitle = b;
			this.alphaValue = 1;
			this.type = ig.Entity.TYPE.A;
			this.tween({
					alphaValue: 0
				},
				0.3, {
					onComplete: function() {
						this.type = ig.Entity.TYPE.NONE
					}.bind(this)
				}).start()
		}
	})
});
ig.baked = !0;
ig.module("game.entities.controllers.select-song-controller").requires("impact.entity", "game.entities.global.marketjs-entity", "game.entities.buttons.btn-next-page", "game.entities.buttons.btn-prev-page", "game.entities.buttons.button-mainmenu", "game.entities.songs-data", "game.entities.gameobject.fade-transition", "game.entities.buttons.button-text").defines(function() {
	EntitySelectSongController = ig.Entity.extend({
		gravityFactor: 0,
		zIndex: 1,
		bgSelectSong: new ig.Image("en/king-of-strings/media/graphics/game/select-song/bg-select-song.png"),
		songs: [],
		currentPageId: 1,
		songContainers: [],
		init: function(b, c, d) {
			this.parent(b, c, d);
			this.pointer = ig.game.getEntitiesByType(EntityPointer)[0];
			null == this.pointer && (this.pointer = ig.game.spawnEntity(EntityPointer, 0, 0));
			this.fadeTransition = ig.game.spawnEntity(EntityFadeTransition, 0, 0);
			this.fadeTransition.hide();
			this.songsData = ig.game.spawnEntity(EntitySongsData, 0, 0);
			for (b = 0; b < Object.keys(this.songsData.data).length; b++) this.songs.push(this.songsData.data[b]);
			c = this.songsData.data.length;
			this.btnMainmenu =
				ig.game.spawnEntity(EntityButtonMainmenu, 10, 10);
			this.btnNextPage = ig.game.spawnEntity(EntityBtnNextPage, 9 * ig.system.width / 10, 9 * ig.system.height / 10 + 25, {
				horizontal: "center",
				vertical: "center"
			});
			this.btnPrevPage = ig.game.spawnEntity(EntityBtnPrevPage, 1 * ig.system.width / 10, 9 * ig.system.height / 10 + 25, {
				horizontal: "center",
				vertical: "center"
			});
			for (b = 0; b < Math.ceil(c / 4); b++) d = ig.game.spawnEntity(EntitySongContainer, (b - (ig.game.currentPageId - 1)) * ig.system.width, 90, {
					containerId: b,
					songs: this.songs,
					totalSong: c
				}), this.btnPrevPage.containers.push(d),
				this.btnNextPage.containers.push(d), this.songContainers.push(d);
			this.btnNextPage.pos.y = 9 * ig.system.height / 10 + 25;
			this.btnPrevPage.pos.y = 2 * ig.system.height
		},
		update: function() {
			this.parent();
			1 < this.songContainers.length ? this.currentPageId != ig.game.currentPageId && (this.currentPageId = ig.game.currentPageId, 1 == this.currentPageId ? (this.btnNextPage.pos.y = 9 * ig.system.height / 10 + 25, this.btnPrevPage.pos.y = 2 * ig.system.height) : 1 < this.currentPageId && this.currentPageId < this.songContainers.length ? (this.btnNextPage.pos.y =
				9 * ig.system.height / 10 + 25, this.btnPrevPage.pos.y = 9 * ig.system.height / 10 + 25) : this.currentPageId == this.songContainers.length && (this.btnNextPage.pos.y = 2 * ig.system.height, this.btnPrevPage.pos.y = 9 * ig.system.height / 10 + 25)) : (this.btnNextPage.pos.y = 2 * ig.system.height, this.btnPrevPage.pos.y = 2 * ig.system.height)
		},
		draw: function() {
			this.parent();
			var b = ig.system.context;
			this.bgSelectSong.draw(0, 0);
			b.save();
			b.font = "40px montserrat";
			b.fillStyle = "white";
			b.textAlign = "center";
			b.fillText("قائمة الأغاني", ig.system.width /
				2, 50);
			b.restore()
		}
	});
	EntitySongContainer = EntityMarketjsEntity.extend({
		idleSheetInfo: {
			sheetImage: new ig.Image("en/king-of-strings/media/graphics/game/select-song/container-song.png"),
			sheetX: 1,
			sheetY: 1
		},
		killOutLayer: !1,
		zIndex: 50,
		btnSongs: [],
		init: function(b, c, d) {
			this.setSpriteSheet("idle");
			this.setSize("idle");
			this.currentAnim = this.idle = new ig.Animation(this.idleSheet, 0.1, [0]);
			this.parent(b, c, d);
			this.containerId = d.containerId;
			this.songs = d.songs;
			this.totalSong = d.totalSong;
			this.currentAnim = this.idle;
			this.songPosX = this.pos.x;
			b = 4 <= this.totalSong - 4 * this.containerId ? 4 : this.totalSong - 4 * this.containerId;
			for (c = 0; c < b; c++) d = ig.game.spawnEntity(EntityButtonSong, this.songPosX + 28, 195 * c + this.pos.y, {
				songTitle: this.songs[c + 4 * this.containerId].title,
				songDifficulty: this.songs[c + 4 * this.containerId].difficulty,
				songHighscore: ig.game.highscores[c + 4 * this.containerId],
				buttonId: c + 4 * this.containerId
			}), this.btnSongs.push(d)
		},
		update: function() {
			this.parent();
			if (this.songPosX != this.pos.x) {
				this.songPosX = this.pos.x;
				for (var b = 0; b < this.btnSongs.length; b++) this.btnSongs[b].pos.x =
					this.songPosX + 28
			}
		},
		nextPage: function() {
			this.tween({
				pos: {
					x: this.pos.x - ig.system.width
				}
			}, 0.3, {
				easing: ig.Tween.Easing.Linear.EaseNone,
				onComplete: function() {
					ig.game.allowToClick = !0
				}.bind(this)
			}).start()
		},
		nextPageForce: function() {
			this.tween({
				pos: {
					x: this.pos.x - ig.system.width
				}
			}, 0, {
				easing: ig.Tween.Easing.Linear.EaseNone
			}).start()
		},
		prevPage: function() {
			this.tween({
				pos: {
					x: this.pos.x + ig.system.width
				}
			}, 0.3, {
				easing: ig.Tween.Easing.Linear.EaseNone,
				onComplete: function() {
					ig.game.allowToClick = !0
				}.bind(this)
			}).start()
		}
	});
	EntityButtonSong = EntityMarketjsEntity.extend({
		imgStarFill: new ig.Image("en/king-of-strings/media/graphics/game/select-song/star-fill.png"),
		imgStarEmpty: new ig.Image("en/king-of-strings/media/graphics/game/select-song/star-empty.png"),
		idleSheetInfo: {
			sheetImage: new ig.Image("en/king-of-strings/media/graphics/game/select-song/panel-song.png"),
			sheetX: 1,
			sheetY: 1
		},
		killOutLayer: !1,
		zIndex: 100,
		type: ig.Entity.TYPE.BOTH,
		allowToClick: !1,
		buttonId: 0,
		scaleValue: 1,
		init: function(b, c, d) {
			this.buttonId = d.buttonId;
			this.setSpriteSheet("idle");
			this.setSize("idle");
			this.currentAnim =
				this.idle = new ig.Animation(this.idleSheet, 0.1, [0]);
			this.parent(b, c, d);
			this.songTitle = d.songTitle;
			this.songDifficulty = d.songDifficulty;
			this.songHighscore = d.songHighscore;
			this.songsData = ig.game.getEntitiesByType(EntitySongsData)[0]
		},
		clicked: function() {
			this.scaleValue = 1;
			this.tween({
				scaleValue: 1.05
			}, 0.02, {
				loop: ig.Tween.Loop.Reverse,
				loopCount: 5,
				onComplete: function() {
					this.doClick()
				}.bind(this)
			}).start()
		},
		doClick: function() {
			!0 == ig.game.allowToClick && (ig.soundHandler.bgmPlayer.stop(), ig.game.allowToClick = !1, ig.game.selectedSongId = this.buttonId, ig.game.selectedDifficulty = this.songDifficulty, this.ssc.fadeTransition.showWithSongTitle(this.ssc.songsData.data[ig.game.selectedSongId].title), ig.soundHandler.sfxPlayer.play("click"), ig.soundHandler.sfxPlayer.play("selected"), this.tween(null, 1, {
				onComplete: function() {
					ig.game.director.nextLevel()
				}.bind(this)
			}).start())
		},
		update: function() {
			this.parent();
			null == this.ssc && (this.ssc = ig.game.getEntitiesByType(EntitySelectSongController)[0]);
			this.setScale(this.scaleValue,
				this.scaleValue)
		},
		draw: function() {
			this.parent();
			var b = ig.system.context,
				c = new ig.Textwrapper(40, "montserrat"),
				d = null,
				d = c.wrapText(this.songTitle, 450),
				e = this.pos.x + 30,
				f = this.pos.y + 60 - 25 * (d.length - 1);
			ig.system.context.fillStyle = "white";
			ig.system.context.textAlign = "left";
			c.drawTextList(d, e, f);
			b.save();
			b.font = "23px montserrat";
			b.fillStyle = "white";
			b.textAlign = "left";
			e = this.pos.x + 25;
			f = this.pos.y + 70 + 85;
			b.fillText("الصعوبة ", e, f);
			b.restore();
			e = this.pos.x + 30 + 100;
			f = this.pos.y + 70 + 58;
			for (c = 0; 3 > c; c++) c < this.songDifficulty ?
				this.imgStarFill.draw(e + 38 * c, f) : this.imgStarEmpty.draw(e + 38 * c, f);
			b.save();
			b.font = "23px montserrat";
			b.fillStyle = "white";
			b.textAlign = "left";
			e = this.pos.x + 30 + 250;
			f = this.pos.y + 70 + 85;
			b.fillText("الرقم القياسي : ", e, f);
			b.restore();
			b.save();
			b.font = "23px montserrat";
			b.fillStyle = "white";
			b.textAlign = "left";
			e = this.pos.x + 30 + 250 + 110;
			f = this.pos.y + 70 + 85;
			b.fillText(this.songHighscore, e, f);
			b.restore()
		}
	})
});
ig.baked = !0;
ig.module("game.levels.select-song").requires("impact.image", "game.entities.controllers.select-song-controller").defines(function() {
	LevelSelectSong = {
		entities: [{
			type: "EntitySelectSongController",
			x: 0,
			y: 0
		}],
		layer: []
	}
});
ig.baked = !0;
ig.module("game.entities.buttons.button-play").requires("game.entities.buttons.button-text", "game.entities.buttons.button-text").defines(function() {
	EntityButtonPlay = EntityButtonText.extend({
		idleSheetInfo: {
			sheetImage: new ig.Image("en/king-of-strings/media/graphics/game/mainmenu/button-play.png"),
			sheetX: 1,
			sheetY: 1
		},
		checkAgainst: ig.Entity.TYPE.BOTH,
		zIndex: 2,
		killOutLayer: !1,
		scaleValue: 1,
		init: function(b, c, d) {
			this.setSpriteSheet("idle");
			this.setSize("idle");
			this.currentAnim = this.idle = new ig.Animation(this.idleSheet, 0.1, [0]);
			this.parent(b, c, d)
		},
		animateButton: function() {
			this.tween({
				scaleValue: 1.1
			}, 0.01, {
				loop: ig.Tween.Loop.Reverse,
				loopCount: 3,
				onComplete: function() {
					this.tween({
						scaleValue: 1.1
					}, 0.01, {
						delay: 0.2,
						loop: ig.Tween.Loop.Reverse,
						loopCount: 3
					}).start()
				}.bind(this)
			}).start()
		},
		update: function() {
			this.parent();
			null == this.mmc && (this.mmc = ig.game.getEntitiesByType(EntityMainmenuController)[0]);
			this.setScale(this.scaleValue, this.scaleValue)
		},
		doClick: function() {
			ig.game.director.nextLevel()
		},
		show: function(b) {
			ig.game.allowToClick = !1;
			this.tween({
				pos: {
					x: this.pos.x,
					y: this.oriPos.y - this.size.y / 2
				}
			}, b, {
				easing: ig.Tween.Easing.Back.EaseOut,
				onComplete: function() {
					ig.game.allowToClick = !0
				}.bind(this)
			}).start()
		},
		hide: function(b) {
			ig.game.allowToClick = !1;
			this.tween({
				pos: {
					x: this.pos.x,
					y: this.oriPos.y + ig.system.height - this.size.y / 2
				}
			}, b, {
				easing: ig.Tween.Easing.Linear.EaseNone,
				onComplete: function() {
					ig.game.allowToClick = !0;
					ig.game.director.nextLevel()
				}.bind(this)
			}).start()
		}
	})
});
ig.baked = !0;
ig.module("game.entities.controllers.settings-controller").requires("game.entities.global.marketjs-entity", "game.entities.buttons.button-text").defines(function() {
	EntitySettingsController = EntityMarketjsEntity.extend({
		imageBg: new ig.Image("en/king-of-strings/media/graphics/game/settings/window-settings.png"),
		imageBg1: new ig.Image("en/king-of-strings/media/graphics/game/settings/window-settings.png"),
		idleSheetInfo: {
			sheetImage: new ig.Image("en/king-of-strings/media/graphics/game/settings/window-settings.png"),
			sheetX: 1,
			sheetY: 1
		},
		zIndex: 400,
		killOutLayer: !1,
		isSettingsMenu: !0,
		ignorePause: !0,
		init: function(b, c, d) {
			this.isSettingsMenu = d.isSettingsMenu;
			this.idleSheetInfo = {
				sheetImage: this.imageBg,
				sheetX: 1,
				sheetY: 1
			};
			this.setSpriteSheet("idle");
			this.setSize("idle");
			this.currentAnim = this.idle = new ig.Animation(this.idleSheet, 1, [0]);
			this.parent(b, c, d);
			this.clickBlocker = ig.game.spawnEntity(EntityClickBlockerSettings, 0, 0);
			this.barSfx = ig.game.spawnEntity(EntityBar, ig.system.width, ig.system.height, {
				zIndex: this.zIndex + 1
			});
			this.btnSfx = ig.game.spawnEntity(EntityButtonSfx,
				ig.system.width, ig.system.height, {
					bar: this.barSfx,
					zIndex: this.zIndex + 2
				});
			this.barBgm = ig.game.spawnEntity(EntityBar, ig.system.width, ig.system.height, {
				zIndex: this.zIndex + 1
			});
			this.btnBgm = ig.game.spawnEntity(EntityButtonBgm, ig.system.width, ig.system.height, {
				bar: this.barBgm,
				zIndex: this.zIndex + 2
			});
			this.btnResume = ig.game.spawnEntity(EntityBtnPauseResume, 0, ig.system.height + 200);
			this.btnRestart = ig.game.spawnEntity(EntityBtnPauseRestart, 0, ig.system.height + 200);
			this.btnMenu = ig.game.spawnEntity(EntityBtnPauseMenu,
				0, ig.system.height + 200);
			this.btnSettingsMenu = ig.game.spawnEntity(EntityBtnSettingsMenu, 0, ig.system.height + 200);
			this.pos.y += ig.system.height;
			ig.game.sortEntitiesDeferred()
		},
		ready: function() {
			this.parent();
			ig.game.sortEntitiesDeferred();
			this.ready = !0;
			null != ig.game.getEntitiesByType(EntityGameplayController)[0] && (this.gc = ig.game.getEntitiesByType(EntityGameplayController)[0])
		},
		update: function() {
			this.parent();
			this.barSfx.pos.x = this.pos.x + this.size.x / 1.65 - this.barSfx.size.x / 2 - 10;
			this.barSfx.pos.y = this.pos.y +
				9.5 * this.size.y / 24 + 20 - this.barSfx.size.y / 2 - 60 + 50;
			this.barBgm.pos.x = this.pos.x + this.size.x / 1.65 - this.barSfx.size.x / 2 - 10;
			this.barBgm.pos.y = this.pos.y + 14 * this.size.y / 24 + 20 - this.barSfx.size.y / 2 - 60 + 50;
			!1 == this.isSettingsMenu ? (this.barSfx.pos.x = this.pos.x + this.size.x / 1.65 - this.barSfx.size.x / 2 - 10, this.barSfx.pos.y = this.pos.y + 9.5 * this.size.y / 24 + 20 - this.barSfx.size.y / 2 - 60 + 15, this.barBgm.pos.x = this.pos.x + this.size.x / 1.65 - this.barSfx.size.x / 2 - 10, this.barBgm.pos.y = this.pos.y + 14 * this.size.y / 24 + 20 - this.barSfx.size.y /
				2 - 60 + 15, this.btnResume.pos.x = this.pos.x + this.size.x / 2 - this.btnResume.size.x / 2, this.btnResume.pos.y = this.pos.y + 8 * this.size.y / 10 - this.btnResume.size.y / 2 - 40 + 35, this.btnMenu.pos.x = this.pos.x + this.size.x / 2 - this.btnMenu.size.x / 2 - 60 - 40, this.btnMenu.pos.y = this.pos.y + 8 * this.size.y / 10 - this.btnMenu.size.y / 2 - 40 + 35, this.btnRestart.pos.x = this.pos.x + this.size.x / 2 - this.btnRestart.size.x / 2 + 100, this.btnRestart.pos.y = this.pos.y + 8 * this.size.y / 10 - this.btnRestart.size.y / 2 - 40 + 35) : (this.barSfx.pos.x = this.pos.x + this.size.x /
				1.65 - this.barSfx.size.x / 2 - 10, this.barSfx.pos.y = this.pos.y + 9.5 * this.size.y / 24 + 20 - this.barSfx.size.y / 2 - 35, this.barBgm.pos.x = this.pos.x + this.size.x / 1.65 - this.barSfx.size.x / 2 - 10, this.barBgm.pos.y = this.pos.y + 14 * this.size.y / 24 + 20 - this.barSfx.size.y / 2 - 35, this.btnSettingsMenu.pos.x = this.pos.x + this.size.x / 2 - this.btnResume.size.x / 2, this.btnSettingsMenu.pos.y = this.pos.y + 8 * this.size.y / 10 - this.btnResume.size.y / 2 + 10);
			if (!0 == this.btnResume.click || !0 == this.btnSettingsMenu.click) this.btnResume.click = !1, this.btnSettingsMenu.click = !1, this.easeOut(0.4), setTimeout(function() {
				this.clickBlocker.hide()
			}.bind(this), 400)
		},
		draw: function() {
			this.parent();
			var b = ig.system.context;
			b.save();
			b.font = "45px montserrat";
			b.fillStyle = "#ffffff";
			b.textAlign = "center";
			!0 == this.isSettingsMenu ? b.fillText(_STRINGS.Game.Settings, ig.system.width / 2, this.pos.y + 80) : b.fillText(_STRINGS.Game.Paused, ig.system.width / 2, this.pos.y + 80);
			b.restore()
		},
		easeIn: function(b) {
			!1 == this.isSettingsMenu && (ig.game.gameIsPaused = !0, ig.game.pause(), ig.game.timeBeforePause = ig.soundHandler.bgmPlayer.webaudio.context.currentTime,
				null != ig.songHandler.songPlayer && ig.songHandler.songPlayer.mute());
			ig.game.allowToClick = !1;
			this.clickBlocker.show();
			this.tween({
				pos: {
					x: this.pos.x,
					y: this.oriPos.y - this.size.y / 2
				}
			}, b, {
				easing: ig.Tween.Easing.Back.EaseOut,
				onComplete: function() {
					ig.game.allowToClick = !0
				}.bind(this)
			}).start()
		},
		easeOut: function(b) {
			ig.game.allowToClick = !1;
			this.tween({
				pos: {
					x: this.pos.x,
					y: this.oriPos.y - this.size.y / 2 + ig.system.height + 100
				}
			}, b, {
				easing: ig.Tween.Easing.Back.EaseIn,
				onComplete: function() {
					ig.game.allowToClick = !0;
					!1 ==
						this.isSettingsMenu && (ig.game.gameIsPaused = !1, ig.game.unpause(), ig.game.timeDifference += ig.soundHandler.bgmPlayer.webaudio.context.currentTime - ig.game.timeBeforePause, ig.songHandler.songPlayer.unmute())
				}.bind(this)
			}).start()
		}
	});
	EntityClickBlockerSettings = EntityMarketjsEntity.extend({
		killOutLayer: !1,
		zIndex: 300,
		type: ig.Entity.TYPE.A,
		alphaValue: 0.5,
		ignorePause: !0,
		init: function(b, c, d) {
			this.parent(b, c, d);
			this.size.x = ig.system.width;
			this.size.y = ig.system.height
		},
		draw: function() {
			ig.system.context.fillStyle =
				"rgba(0,0,0," + this.alphaValue + ")";
			ig.system.context.fillRect(0, 0, ig.system.width, ig.system.height);
			this.parent()
		},
		show: function() {
			this.type = ig.Entity.TYPE.A;
			this.alphaValue = 0.5;
			ig.game.disableButtonMoreGames = !0
		},
		hide: function() {
			this.alphaValue = 0;
			this.type = ig.Entity.TYPE.NONE;
			ig.game.disableButtonMoreGames = !1
		},
		clicked: function() {
			console.log("CLIKE")
		}
	});
	EntityBtnPause = EntityButtonText.extend({
		idleSheetInfo: null,
		checkAgainst: ig.Entity.TYPE.BOTH,
		killOutLayer: !1,
		textColor: "#FFFFFF",
		zIndex: 1234,
		ignorePause: !0,
		init: function(b, c, d) {
			this.parent(b, c, d)
		},
		update: function() {
			this.parent()
		}
	});
	EntityBtnPauseResume = EntityBtnPause.extend({
		idleSheetInfo: {
			sheetImage: new ig.Image("en/king-of-strings/media/graphics/game/settings/btn-resume.png"),
			sheetX: 1,
			sheetY: 1
		},
		doClick: function() {
			ig.game.unpause();
			this.click = !0;
			!1 == this.isSettingsMenu && (ig.Timer.timeScale = 1, ig.songHandler.songPlayer.play());
			ig.game.settingIsShowed = !1
		}
	});
	EntityBtnPauseRestart = EntityBtnPause.extend({
		idleSheetInfo: {
			sheetImage: new ig.Image("en/king-of-strings/media/graphics/game/settings/btn-restart.png"),
			sheetX: 1,
			sheetY: 1
		},
		doClick: function() {
			this.gc.fadeTransition.show();
			this.tween(null, 0.4, {
				onComplete: function() {
					ig.game.unpause();
					ig.game.gameIsPaused = !1;
					ig.game.levelIsClear = !1;
					ig.game.director.reloadLevel()
				}.bind(this)
			}).start()
		},
		update: function() {
			this.parent();
			null == this.gc && (this.gc = ig.game.getEntitiesByType(EntityGameplayController)[0])
		}
	});
	EntityBtnPauseMenu = EntityBtnPause.extend({
		idleSheetInfo: {
			sheetImage: new ig.Image("en/king-of-strings/media/graphics/game/settings/btn-menu.png"),
			sheetX: 1,
			sheetY: 1
		},
		doClick: function() {
			this.gc.fadeTransition.show();
			this.tween(null, 0.4, {
				onComplete: function() {
					ig.game.unpause();
					ig.game.gameIsPaused = !1;
					ig.songHandler.songPlayer.stop();
					!0 == ig.game.allowToClick && ig.game.director.loadLevel(1)
				}.bind(this)
			}).start()
		},
		update: function() {
			this.parent();
			null == this.gc && (this.gc = ig.game.getEntitiesByType(EntityGameplayController)[0])
		}
	});
	EntityBtnSettingsMenu = EntityBtnPause.extend({
		idleSheetInfo: {
			sheetImage: new ig.Image("en/king-of-strings/media/graphics/game/settings/btn-resume.png"),
			sheetX: 1,
			sheetY: 1
		},
		doClick: function() {
			this.click = !0
		}
	});
	EntityBar =
		EntityButton.extend({
			idleSheetInfo: {
				sheetImage: new ig.Image("en/king-of-strings/media/graphics/game/settings/slider-frame.png"),
				sheetX: 1,
				sheetY: 1
			},
			bar: new ig.Image("en/king-of-strings/media/graphics/game/settings/slider-bar.png"),
			zIndex: 3,
			killOutLayer: !1,
			scaleX: 0,
			ignorePause: !0,
			init: function(b, c, d) {
				this.setSpriteSheet("idle");
				this.setSize("idle");
				this.currentAnim = this.idle = new ig.Animation(this.idleSheet, 0.1, [0]);
				this.parent(b, c, d)
			},
			draw: function() {
				this.parent();
				0 < this.scaleX && this.bar.draw(this.pos.x - ig.game.screen.x, this.pos.y, 0, 0,
					this.size.x * this.scaleX, this.bar.height)
			}
		});
	EntityButtonSfx = EntityButton.extend({
		idleSheetInfo: {
			sheetImage: new ig.Image("en/king-of-strings/media/graphics/game/settings/btn-circle.png"),
			sheetX: 1,
			sheetY: 1
		},
		iconSfx: new ig.Image("en/king-of-strings/media/graphics/game/settings/icon-sound.png"),
		checkAgainst: ig.Entity.TYPE.BOTH,
		zIndex: 4,
		killOutLayer: !1,
		ignorePause: !0,
		init: function(b, c, d) {
			this.bar = d.bar;
			this.setSpriteSheet("idle");
			this.setSize("idle");
			this.currentAnim = this.idle = new ig.Animation(this.idleSheet, 0.1, [0]);
			this.parent(b, c, d);
			this.scale =
				ig.game.volume.sfx;
			this.bar.scaleX = ig.game.volume.sfx
		},
		update: function() {
			this.pos.x = this.bar.pos.x + (this.bar.size.x - this.size.x) * ig.game.volSfx;
			this.pos.y = this.bar.pos.y + this.bar.size.y / 2 - this.size.y / 2;
			this.move ? (cursorX = ig.game.io.getClickPos().x, cursorX >= this.min && cursorX <= this.max ? this.pos.x = cursorX - this.size.x / 2 + ig.game.screen.x : cursorX < this.min ? this.pos.x = this.min - this.size.x / 2 + ig.game.screen.x : cursorX > this.max && (this.pos.x = this.max - this.size.x / 2 + ig.game.screen.x), distance = this.pos.x + this.size.x /
				2 - this.min - ig.game.screen.x, maxDistance = this.max - this.min, this.scale = distance / maxDistance, this.updateTarget(), ig.input.released("click") && (console.log(ig.game.volume.sfx), ig.game.handlerSfx.volume(ig.game.volume.sfx), ig.soundHandler.sfxPlayer.play("click"), this.move = !1, ig.game.saveVolume())) : (this.pos.x = this.bar.pos.x + this.scale * this.bar.size.x - this.size.x / 2, this.pos.y = this.bar.pos.y + this.bar.size.y / 2 - this.size.y / 2);
			!0 == ig.game.gameIsPaused && ig.input.pressed("click") && (ig.input.mouse.x > this.pos.x &&
				ig.input.mouse.x < this.pos.x + this.size.x && ig.input.mouse.y > this.pos.y && ig.input.mouse.y < this.pos.y + this.size.y) && this.clicked()
		},
		draw: function() {
			this.iconSfx.draw(this.bar.pos.x - this.iconSfx.width / 2 - 60 - ig.game.screen.x, this.bar.pos.y - this.iconSfx.height / 3 + 10, 0, 0, this.iconSfx.width, this.iconSfx.height);
			this.parent()
		},
		clicked: function() {
			ig.game.allowToClick && (ig.soundHandler.sfxPlayer.play("click"), this.min = this.bar.pos.x - ig.game.screen.x, this.max = this.bar.pos.x + this.bar.size.x - ig.game.screen.x, this.move = !0)
		},
		updateTarget: function() {
			ig.game.volume.sfx = Math.round(10 * this.scale) / 10;
			this.bar.scaleX = Math.round(10 * this.scale) / 10
		}
	});
	EntityButtonBgm = EntityButton.extend({
		idleSheetInfo: {
			sheetImage: new ig.Image("en/king-of-strings/media/graphics/game/settings/btn-circle.png"),
			sheetX: 1,
			sheetY: 1
		},
		iconMusic: new ig.Image("en/king-of-strings/media/graphics/game/settings/icon-music.png"),
		checkAgainst: ig.Entity.TYPE.BOTH,
		zIndex: 4,
		killOutLayer: !1,
		ignorePause: !0,
		init: function(b, c, d) {
			this.setSpriteSheet("idle");
			this.setSize("idle");
			this.currentAnim = this.idle =
				new ig.Animation(this.idleSheet, 0.1, [0]);
			this.parent(b, c, d);
			this.scale = ig.game.volume.bgm;
			this.bar.scaleX = ig.game.volume.bgm
		},
		update: function() {
			this.pos.x = this.bar.pos.x + (this.bar.size.x - this.size.x) * ig.game.volSfx;
			this.pos.y = this.bar.pos.y + this.bar.size.y / 2 - this.size.y / 2;
			this.move ? (cursorX = ig.game.io.getClickPos().x, cursorX >= this.min && cursorX <= this.max ? this.pos.x = cursorX - this.size.x / 2 + ig.game.screen.x : cursorX < this.min ? this.pos.x = this.min - this.size.x / 2 + ig.game.screen.x : cursorX > this.max && (this.pos.x =
				this.max - this.size.x / 2 + ig.game.screen.x), distance = this.pos.x + this.size.x / 2 - this.min - ig.game.screen.x, maxDistance = this.max - this.min, this.scale = distance / maxDistance, this.updateTarget(), ig.input.released("click") && (this.move = !1, ig.game.saveVolume())) : (this.pos.x = this.bar.pos.x + this.scale * this.bar.size.x - this.size.x / 2, this.pos.y = this.bar.pos.y + this.bar.size.y / 2 - this.size.y / 2);
			!0 == ig.game.gameIsPaused && ig.input.pressed("click") && (ig.input.mouse.x > this.pos.x && ig.input.mouse.x < this.pos.x + this.size.x && ig.input.mouse.y >
				this.pos.y && ig.input.mouse.y < this.pos.y + this.size.y) && this.clicked()
		},
		draw: function() {
			this.iconMusic.draw(this.bar.pos.x - this.iconMusic.width / 2 - 70 - ig.game.screen.x, this.bar.pos.y - this.iconMusic.height / 3 + 10, 0, 0, this.iconMusic.width, this.iconMusic.height);
			this.parent()
		},
		clicked: function() {
			ig.game.allowToClick && (ig.soundHandler.sfxPlayer.play("click"), this.min = this.bar.pos.x - ig.game.screen.x, this.max = this.bar.pos.x + this.bar.size.x - ig.game.screen.x, this.move = !0)
		},
		updateTarget: function() {
			ig.game.volume.bgm =
				Math.round(10 * this.scale) / 10;
			this.bar.scaleX = Math.round(10 * this.scale) / 10;
			ig.game.handlerBgm.volume(ig.game.volume.bgm)
		}
	})
});
ig.baked = !0;
ig.module("game.entities.buttons.button-settings").requires("game.entities.buttons.button-text", "game.entities.controllers.settings-controller").defines(function() {
	EntityButtonSettings = EntityButtonText.extend({
		imgSettings: new ig.Image("en/king-of-strings/media/graphics/game/mainmenu/button-settings.png"),
		imgPause: new ig.Image("en/king-of-strings/media/graphics/game/gameplay/button-pause.png"),
		checkAgainst: ig.Entity.TYPE.BOTH,
		zIndex: 2,
		killOutLayer: !1,
		isSettingsMenu: null,
		settings: null,
		init: function(b, c, d) {
			this.idleSheetInfo = (this.isSettingsMenu =
				d.isSettingsMenu) ? {
				sheetImage: this.imgSettings,
				sheetX: 1,
				sheetY: 1
			} : {
				sheetImage: this.imgPause,
				sheetX: 1,
				sheetY: 1
			};
			this.setSpriteSheet("idle");
			this.setSize("idle");
			this.currentAnim = this.idle = new ig.Animation(this.idleSheet, 0.1, [0]);
			this.parent(b, c, d)
		},
		doClick: function() {
			console.log(ig.game.allowToClick);
			null == this.settings && (this.settings = ig.game.spawnEntity(EntitySettingsController, ig.system.width / 2, ig.system.height / 2, {
				horizontal: "center",
				vertical: "center",
				isSettingsMenu: this.isSettingsMenu
			}));
			this.settings.easeIn(0.4)
		},
		show: function(b) {
			ig.game.allowToClick = !1;
			this.tween({
				pos: {
					x: this.pos.x,
					y: this.oriPos.y - this.size.y / 2
				}
			}, b, {
				easing: ig.Tween.Easing.Back.EaseOut,
				onComplete: function() {
					ig.game.allowToClick = !0
				}.bind(this)
			}).start()
		},
		hide: function(b) {
			ig.game.allowToClick = !1;
			this.tween({
				pos: {
					x: this.pos.x,
					y: this.oriPos.y + ig.system.height - this.size.y / 2
				}
			}, b, {
				easing: ig.Tween.Easing.Linear.EaseNone,
				onComplete: function() {
					ig.game.allowToClick = !0;
					ig.game.director.nextLevel()
				}.bind(this)
			}).start()
		}
	})
});
ig.baked = !0;
ig.module("game.entities.controllers.mainmenu-controller").requires("impact.entity", "game.entities.global.marketjs-entity", "game.entities.buttons.button-play", "game.entities.buttons.button-settings", "game.entities.gameobject.fade-transition").defines(function() {
	EntityMainmenuController = ig.Entity.extend({
		gravityFactor: 0,
		zIndex: 1,
		bgMainmenu: new ig.Image("en/king-of-strings/media/graphics/game/mainmenu/bg-mainmenu.png"),
		imgLogo: new ig.Image("en/king-of-strings/media/graphics/game/mainmenu/logo.png"),
		loopIncrement: 0,
		currentBgmTime: 0,
		currentState: "A",
		init: function(b, c, d) {
			this.parent(b, c, d);
			this.pointer = ig.game.getEntitiesByType(EntityPointer)[0];
			null == this.pointer && (this.pointer = ig.game.spawnEntity(EntityPointer, 0, 0));
			this.title = ig.game.spawnEntity(EntityMarketjsEntity, 0, 0, {
				img: this.imgLogo,
				type: ig.Entity.TYPE.B,
				name: "TITLE",
				zIndex: 5
			});
			this.fadeTransition = ig.game.spawnEntity(EntityFadeTransition, 0, 0);
			this.fadeTransition.hide();
			this.btnPlay = ig.game.spawnEntity(EntityButtonPlay, ig.system.width / 2, 7 * ig.system.height / 10, {
				horizontal: "center",
				vertical: "center",
				text: "",
				textSize: 34
			});
			this.btnSettings = ig.game.spawnEntity(EntityButtonSettings, 7 * ig.system.width / 20, 9 * ig.system.height / 10, {
				horizontal: "center",
				vertical: "center",
				text: "",
				textSize: 34,
				isSettingsMenu: !0
			});
			_SETTINGS.MoreGames.Enabled && (this.btnMoreGames = ig.game.spawnEntity(EntityButtonMoreGames, 13 * ig.system.width / 20, 9 * ig.system.height / 10, {
				horizontal: "center",
				vertical: "center",
				text: ""
			}));
			ig.game.spawnEntity(ig.FullscreenButton, 5, 5, {
				enterImage: new ig.Image("en/king-of-strings/media/graphics/game/mainmenu/button-fullscreen-enter.png"),
				exitImage: new ig.Image("en/king-of-strings/media/graphics/game/mainmenu/button-fullscreen-exit.png")
			});
			ig.soundHandler.bgmPlayer.play();
			ig.soundHandler.bgmPlayer.restart();
			ig.soundHandler.bgmPlayer.stop();
			ig.soundHandler.bgmPlayer.play();
			this.startBgmTimer()
		},
		startBgmTimer: function() {
			this.currentBgmTime = 0;
			var b = ig.soundHandler.bgmPlayer.webaudio.source_loop.buffer.duration;
			this.tween({
				currentBgmTime: b
			}, b, {
				onComplete: function() {
					this.startBgmTimer()
				}.bind(this)
			}).start()
		},
		update: function() {
			this.parent();
			1.122 < this.currentBgmTime &&
				2.122 > this.currentBgmTime && "A" == this.currentState && (this.currentState = "B", this.title.shake());
			1.95 < this.currentBgmTime && "B" == this.currentState && (this.currentState = "A", this.title.shake());
			this.title.setScale(this.title.scaleValue, this.title.scaleValue);
			this.title.pos = {
				x: ig.system.width / 2 - this.imgLogo.width * this.title.scaleValue / 2,
				y: 35 - (this.imgLogo.height * this.title.scaleValue - this.imgLogo.height) / 2
			}
		},
		draw: function() {
			this.parent();
			this.bgMainmenu.draw(0, 0)
		}
	})
});
ig.baked = !0;
ig.module("game.levels.mainmenu").requires("impact.image", "game.entities.controllers.mainmenu-controller").defines(function() {
	LevelMainmenu = {
		entities: [{
			type: "EntityMainmenuController",
			x: 0,
			y: 0
		}],
		layer: []
	}
});
ig.baked = !0;
ig.module("game.entities.buttons.button-chord").requires("game.entities.buttons.button-text").defines(function() {
	EntityButtonChord = EntityButtonText.extend({
		killOutLayer: !1,
		imgButtonYellow: new ig.Image("en/king-of-strings/media/graphics/game/btn-yellow.png"),
		imgButtonBlue: new ig.Image("en/king-of-strings/media/graphics/game/btn-blue.png"),
		imgButtonRed: new ig.Image("en/king-of-strings/media/graphics/game/btn-red.png"),
		checkAgainst: ig.Entity.TYPE.NONE,
		type: ig.Entity.TYPE.NONE,
		zIndex: 300,
		killOutLayer: !1,
		init: function(b, c, d) {
			this.color = d.color;
			var e = null;
			switch (this.color) {
				case "YELLOW":
					e =
						this.imgButtonYellow;
					break;
				case "BLUE":
					e = this.imgButtonBlue;
					break;
				case "RED":
					e = this.imgButtonRed
			}
			this.idleSheetInfo = {
				sheetImage: e,
				sheetX: 1,
				sheetY: 2
			};
			this.setSpriteSheet("idle");
			this.setExactSize(50, 50);
			this.idle = new ig.Animation(this.idleSheet, 0.1, [0]);
			this.pressed = new ig.Animation(this.idleSheet, 0.1, [1]);
			this.currentAnim = this.idle;
			this.parent(b, c, d);
			null == this.gc && (this.gc = ig.game.getEntitiesByType(EntityGameplayController)[0])
		},
		ready: function() {
			this.buttonChordShine = ig.game.spawnEntity(EntityButtonChordShine,
				this.pos.x + 3, this.pos.y - 220, {
					color: this.color
				})
		},
		update: function() {
			this.parent();
			null == this.gc && (this.gc = ig.game.getEntitiesByType(EntityGameplayController)[0]);
			this.gc.gameIsOver && (this.currentAnim = this.idle);
			if (!this.gc.gameIsOver && !ig.ua.mobile) switch (this.color) {
				case "BLUE":
					ig.input.pressed("left") && this.buttonPressedEvent("BLUE");
					ig.input.released("left") && this.buttonReleasedEvent("BLUE");
					break;
				case "YELLOW":
					ig.input.pressed("down") && this.buttonPressedEvent("YELLOW");
					ig.input.released("down") &&
						this.buttonReleasedEvent("YELLOW");
					break;
				case "RED":
					ig.input.pressed("right") && this.buttonPressedEvent("RED"), ig.input.released("right") && this.buttonReleasedEvent("RED")
			}
		},
		buttonPressedEvent: function(b) {
			if (!this.gc.gameIsOver)
				if (ig.game.allowToClickButtonChord) switch (b) {
					case "BLUE":
						this.currentAnim = this.pressed;
						this.gc.buttonBlueState = !0;
						this.gc.idxChordContainer < this.gc.chordContainerArr.length && this.gc.chordContainerArr[this.gc.idxChordContainer].validateYPos();
						break;
					case "YELLOW":
						this.currentAnim =
							this.pressed;
						this.gc.buttonYellowState = !0;
						this.gc.idxChordContainer < this.gc.chordContainerArr.length && this.gc.chordContainerArr[this.gc.idxChordContainer].validateYPos();
						break;
					case "RED":
						this.currentAnim = this.pressed, this.gc.buttonRedState = !0, this.gc.idxChordContainer < this.gc.chordContainerArr.length && this.gc.chordContainerArr[this.gc.idxChordContainer].validateYPos()
				} else {
					switch (b) {
						case "BLUE":
							ig.soundHandler.sfxPlayer.play("buzz1");
							break;
						case "YELLOW":
							ig.soundHandler.sfxPlayer.play("buzz2");
							break;
						case "RED":
							ig.soundHandler.sfxPlayer.play("buzz3")
					}
					this.gc.warning.warningBanner.startTween()
				}
		},
		buttonReleasedEvent: function(b) {
			if (!this.gc.gameIsOver && ig.game.allowToClickButtonChord) switch (b) {
				case "BLUE":
					!0 == this.gc.buttonBlueState && !0 == this.gc.allowWrongProccess && this.gc.checkWrongClick();
					this.currentAnim = this.idle;
					this.buttonChordShine.releasing();
					"BLUE" == this.gc.buttonChordIsPressedBy && (this.gc.buttonChordIsPressedBy = "NONE");
					break;
				case "YELLOW":
					!0 == this.gc.buttonYellowState && !0 == this.gc.allowWrongProccess &&
						this.gc.checkWrongClick();
					this.currentAnim = this.idle;
					this.buttonChordShine.releasing();
					"YELLOW" == this.gc.buttonChordIsPressedBy && (this.gc.buttonChordIsPressedBy = "NONE");
					break;
				case "RED":
					!0 == this.gc.buttonRedState && !0 == this.gc.allowWrongProccess && this.gc.checkWrongClick(), this.currentAnim = this.idle, this.buttonChordShine.releasing(), "RED" == this.gc.buttonChordIsPressedBy && (this.gc.buttonChordIsPressedBy = "NONE")
			}
		},
		show: function(b) {
			ig.game.allowToClick = !1;
			this.tween({
				pos: {
					x: this.pos.x,
					y: this.oriPos.y -
						this.size.y / 2
				}
			}, b, {
				easing: ig.Tween.Easing.Back.EaseOut,
				onComplete: function() {
					ig.game.allowToClick = !0
				}.bind(this)
			}).start()
		},
		hide: function(b) {
			ig.game.allowToClick = !1;
			this.tween({
				pos: {
					x: this.pos.x,
					y: this.oriPos.y + ig.system.height - this.size.y / 2
				}
			}, b, {
				easing: ig.Tween.Easing.Linear.EaseNone,
				onComplete: function() {
					ig.game.allowToClick = !0;
					ig.game.director.nextLevel()
				}.bind(this)
			}).start()
		}
	});
	EntityButtonChordShine = EntityMarketjsEntity.extend({
		killOutLayer: !1,
		imgButtonBlueShine: new ig.Image("en/king-of-strings/media/graphics/game/btn-blue-shine.png"),
		imgButtonYellowShine: new ig.Image("en/king-of-strings/media/graphics/game/btn-yellow-shine.png"),
		imgButtonRedShine: new ig.Image("en/king-of-strings/media/graphics/game/btn-red-shine.png"),
		killOutLayer: !1,
		zIndex: 500,
		isPressed: !1,
		alphaValue: 0,
		ignorePause: !0,
		init: function(b, c, d) {
			this.color = d.color;
			var e = null;
			switch (this.color) {
				case "BLUE":
					e = this.imgButtonBlueShine;
					break;
				case "YELLOW":
					e = this.imgButtonYellowShine;
					break;
				case "RED":
					e = this.imgButtonRedShine
			}
			this.idleSheetInfo = {
				sheetImage: e,
				sheetX: 1,
				sheetY: 1
			};
			this.setSpriteSheet("idle");
			this.setSize("idle");
			this.idle = new ig.Animation(this.idleSheet, 0.1, [0]);
			this.pressed = new ig.Animation(this.idleSheet, 0.1, [0]);
			this.currentAnim = this.idle;
			this.currentAnim.alpha = 0;
			this.parent(b, c, d);
			null == this.gc && (this.gc = ig.game.getEntitiesByType(EntityGameplayController)[0])
		},
		update: function() {
			this.parent();
			this.currentAnim.alpha = this.alphaValue;
			!1 == this.isPressed && (this.alphaValue = 0)
		},
		pressing: function() {
			!1 == this.isPressed && (this.tween({
					alphaValue: 1
				}, 0.1, {
					loop: ig.Tween.Loop.Reverse,
					loopCount: 1,
					easing: ig.Tween.Easing.Linear.EaseNone
				}).start(),
				this.isPressed = !0)
		},
		releasing: function() {
			this.isPressed = !1
		}
	})
});
ig.baked = !0;
ig.module("game.entities.chord").requires("game.entities.global.marketjs-entity").defines(function() {
	EntityChord = EntityMarketjsEntity.extend({
		imgChordYellow: new ig.Image("en/king-of-strings/media/graphics/game/chord-yellow.png"),
		imgChordBlue: new ig.Image("en/king-of-strings/media/graphics/game/chord-blue.png"),
		imgChordRed: new ig.Image("en/king-of-strings/media/graphics/game/chord-red.png"),
		gravityFactor: 0,
		zIndex: 10,
		scaleValue: 1,
		isEnable: !1,
		posXAddition: 0,
		init: function(b, c, d) {
			this.isEnable = d.isEnable;
			this.color = d.color;
			this.idleSheetInfo = {
				sheetImage: this.imgChordYellow,
				sheetX: 1,
				sheetY: 1
			};
			this.setSpriteSheet("idle");
			this.setSize("idle");
			this.currentAnim = this.idle = new ig.Animation(this.idleSheet, 0.1, [0]);
			this.currentAnim.alpha = 0;
			this.parent(b, c, d);
			switch (this.color) {
				case "YELLOW":
					this.pos = {
						x: ig.system.width / 2 - this.size.x / 2,
						y: 0
					};
					break;
				case "BLUE":
					this.pos = {
						x: ig.system.width / 2 - this.size.x / 2 - 30,
						y: 0
					};
					break;
				case "RED":
					this.pos = {
						x: ig.system.width / 2 - this.size.x / 2 + 30,
						y: 0
					}
			}
			this.chordChild = ig.game.spawnEntity(EntityChordScaleHandler, 0, 0, {
				color: this.color
			});
			this.chordChild.pos = {
				x: this.pos.x,
				y: this.pos.y
			};
			ig.game.sortEntitiesDeferred();
			!1 == this.isEnable && (this.chordChild.currentAnim.alpha = 0);
			this.posXAddition = this.pos.x
		},
		update: function() {
			ig.game.gameIsPaused || (this.parent(), this.pos.x = this.posXAddition, this.chordChild.pos.x = this.pos.x + this.size.x / 2 - this.chordChild.size.x / 2, this.chordChild.pos.y = this.pos.y)
		},
		startTween: function() {
			var b = this.pos.x;
			switch (this.color) {
				case "YELLOW":
					b = this.pos.x;
					break;
				case "BLUE":
					b = this.pos.x - 165;
					break;
				case "RED":
					b = this.pos.x + 165
			}
			this.moveTween =
				this.tween({
					posXAddition: b
				}, ig.game.tweenTime, {
					easing: ig.Tween.Easing.Quadratic.EaseIn,
					onComplete: function() {}.bind(this)
				});
			this.moveTween.start()
		}
	});
	EntityChordScaleHandler = EntityMarketjsEntity.extend({
		imgChordYellow: new ig.Image("en/king-of-strings/media/graphics/game/chord-yellow.png"),
		imgChordBlue: new ig.Image("en/king-of-strings/media/graphics/game/chord-blue.png"),
		imgChordRed: new ig.Image("en/king-of-strings/media/graphics/game/chord-red.png"),
		gravityFactor: 0,
		zIndex: 10,
		scaleValue: 1,
		isClicked: !1,
		init: function(b, c, d) {
			this.color = d.color;
			var e = null;
			switch (this.color) {
				case "YELLOW":
					e =
						this.imgChordYellow;
					break;
				case "BLUE":
					e = this.imgChordBlue;
					break;
				case "RED":
					e = this.imgChordRed
			}
			this.idleSheetInfo = {
				sheetImage: e,
				sheetX: 1,
				sheetY: 1
			};
			this.setSpriteSheet("idle");
			this.setSize("idle");
			this.currentAnim = this.idle = new ig.Animation(this.idleSheet, 0.1, [0]);
			this.parent(b, c, d);
			this.startTween()
		},
		ready: function() {},
		update: function() {
			ig.game.gameIsPaused || (this.parent(), this.setScale(this.scaleValue, this.scaleValue))
		},
		startTween: function() {
			this.scaleValue = 0.2;
			this.scaleTween = this.tween({
					scaleValue: 1.2
				},
				ig.game.tweenTime, {
					easing: ig.Tween.Easing.Quadratic.EaseIn,
					onComplete: function() {
						this.kill()
					}.bind(this)
				});
			this.scaleTween.start()
		}
	})
});
ig.baked = !0;
ig.module("game.entities.chord-spawn-timer").requires("game.entities.global.marketjs-entity").defines(function() {
	EntityChordSpawnTimer = EntityMarketjsEntity.extend({
		gravityFactor: 0,
		timeNow: 0,
		init: function(b, c, d) {
			this.parent(b, c, d)
		},
		startTimer: function() {
			this.tween({
				timeNow: 384 * ig.game.songDuration
			}, ig.game.songDuration, {}).start()
		},
		update: function() {
			this.parent()
		}
	})
});
ig.baked = !0;
ig.module("game.entities.chord-container").requires("game.entities.global.marketjs-entity", "game.entities.chord").defines(function() {
	EntityChordContainer = EntityMarketjsEntity.extend({
		imgChordYellow: new ig.Image("en/king-of-strings/media/graphics/game/chord-yellow.png"),
		imgChordBlue: new ig.Image("en/king-of-strings/media/graphics/game/chord-blue.png"),
		imgChordRed: new ig.Image("en/king-of-strings/media/graphics/game/chord-red.png"),
		gravityFactor: 0,
		zIndex: 10,
		yPosForValidation: 0,
		moveTween: null,
		posY: 0,
		init: function(b, c, d) {
			this.chordData = d.chordData;
			this.idleSheetInfo = {
				sheetImage: this.imgChordYellow,
				sheetX: 1,
				sheetY: 1
			};
			this.setSpriteSheet("idle");
			this.setSize("idle");
			this.currentAnim = this.idle = new ig.Animation(this.idleSheet, 0.1, [0]);
			this.currentAnim.alpha = 0;
			this.parent(b, c, d);
			this.pos = {
				x: ig.system.width / 2 - this.size.x / 2,
				y: 0
			};
			this.chordBlue = ig.game.spawnEntity(EntityChord, 0, 0, {
				color: "BLUE",
				isEnable: this.chordData.blue
			});
			this.chordBlue.pos = {
				x: this.pos.x - 30,
				y: this.pos.y
			};
			this.chordYellow = ig.game.spawnEntity(EntityChord, 0, 0, {
				color: "YELLOW",
				isEnable: this.chordData.yellow
			});
			this.chordYellow.pos = {
				x: this.pos.x,
				y: this.pos.y
			};
			this.chordRed = ig.game.spawnEntity(EntityChord, 0, 0, {
				color: "RED",
				isEnable: this.chordData.red
			});
			this.chordRed.pos = {
				x: this.pos.x + 30,
				y: this.pos.y
			};
			this.startTween();
			ig.game.sortEntitiesDeferred();
			null == this.gc && (this.gc = ig.game.getEntitiesByType(EntityGameplayController)[0])
		},
		update: function() {
			if (!ig.game.gameIsPaused && (this.parent(), null == this.gc && (this.gc = ig.game.getEntitiesByType(EntityGameplayController)[0]), this.pos.y = this.posY, this.chordBlue.pos.y =
					this.pos.y, this.chordYellow.pos.y = this.pos.y, this.chordRed.pos.y = this.pos.y, this.pos.y > ig.system.height - 650 && (ig.game.allowToShowWarning = !1), this.pos.y > ig.system.height - 300 && (ig.game.allowToClickButtonChord = !0), this.pos.y > ig.system.height - 75)) {
				this.gc.idxChordContainer++;
				if (0 < ig.game.currentPlayerLife) {
					this.gc.allowWrongProccess;
					ig.game.currentPlayerLife--;
					switch (Math.floor(3 * Math.random()) + 1) {
						case 1:
							ig.soundHandler.sfxPlayer.play("buzz1");
							break;
						case 2:
							ig.soundHandler.sfxPlayer.play("buzz2");
							break;
						case 3:
							ig.soundHandler.sfxPlayer.play("buzz3")
					}
					this.gc.clickBanner.textBanner.startTween("MISS");
					this.gc.redBlink.show()
				}
				this.destroy()
			}
		},
		validateYPos: function() {
			0 == this.yPosForValidation && (this.yPosForValidation = this.pos.y + this.size.y / 2)
		},
		startTween: function() {
			this.posY = 0;
			this.moveTween = this.tween({
				posY: this.pos.y + this.size.y / 2 + 900
			}, ig.game.tweenTime, {
				easing: ig.Tween.Easing.Quadratic.EaseIn,
				allowToPause: !0,
				onComplete: function() {}.bind(this)
			});
			this.moveTween.start();
			this.chordBlue.startTween();
			this.chordYellow.startTween();
			this.chordRed.startTween()
		},
		destroy: function() {
			this.kill();
			this.chordBlue.kill();
			this.chordYellow.kill();
			this.chordRed.kill();
			this.chordBlue.chordChild.kill();
			this.chordYellow.chordChild.kill();
			this.chordRed.chordChild.kill()
		}
	})
});
ig.baked = !0;
ig.module("game.entities.controllers.result-controller").requires("game.entities.global.marketjs-entity", "game.entities.buttons.button-text").defines(function() {
	EntityResultController = EntityMarketjsEntity.extend({
		imageBg: new ig.Image("en/king-of-strings/media/graphics/game/result/window-result.png"),
		imageBg1: new ig.Image("en/king-of-strings/media/graphics/game/result/window-result.png"),
		imgStarFill: new ig.Image("en/king-of-strings/media/graphics/game/result/star-fill.png"),
		imgStarEmpty: new ig.Image("en/king-of-strings/media/graphics/game/result/star-empty.png"),
		idleSheetInfo: {
			sheetImage: new ig.Image("en/king-of-strings/media/graphics/game/settings/window-settings.png"),
			sheetX: 1,
			sheetY: 1
		},
		zIndex: 400,
		killOutLayer: !1,
		isSettingsMenu: !0,
		ignorePause: !0,
		songVolume: 1,
		init: function(b, c, d) {
			this.isSettingsMenu = d.isSettingsMenu;
			this.idleSheetInfo = {
				sheetImage: this.imageBg,
				sheetX: 1,
				sheetY: 1
			};
			this.setSpriteSheet("idle");
			this.setSize("idle");
			this.currentAnim = this.idle = new ig.Animation(this.idleSheet, 1, [0]);
			this.parent(b, c, d);
			this.clickBlocker = ig.game.spawnEntity(EntityClickBlockerResult, 0, 0);
			this.btnRestart = ig.game.spawnEntity(EntityButtonResultRestart, 0, ig.system.height + 200);
			this.btnMenu = ig.game.spawnEntity(EntityButtonResultMenu, 0, ig.system.height + 200);
			this.pos.y += ig.system.height;
			ig.game.sortEntitiesDeferred();
			ig.game.totalScore > ig.game.highscores[ig.game.selectedSongId] && (ig.game.highscores[ig.game.selectedSongId] = ig.game.totalScore, ig.game.saveHighscores())

if([ig.game.selectedSongId] == 0 && ig.game.totalScore > 590) {
 x1 = 1;
alert("1نجحت انتقل الى الأغنية التالية")}

if([ig.game.selectedSongId] == 1 && ig.game.totalScore > 600) {
 x2 = 1;
alert("2نجحت انتقل الى الأغنية التالية")}


if([ig.game.selectedSongId] == 2 && ig.game.totalScore > 1000) {
 x3 = 1;
alert("3نجحت انتقل الى الأغنية التالية")}

		
if([ig.game.selectedSongId] == 3 && ig.game.totalScore > 1000) {
 x4 = 1;
alert("4نجحت انتقل الى الأغنية التالية")}

if([ig.game.selectedSongId] == 4 && ig.game.totalScore > 900) {
x5 = 1;
alert("5نجحت انتقل الى الأغنية التالية")}

if([ig.game.selectedSongId] == 5 && ig.game.totalScore > 1200) {
 x6 = 1;
alert("6نجحت انتقل الى الأغنية التالية")}

if([ig.game.selectedSongId] == 6 && ig.game.totalScore > 1100) {
 x7 = 1;
alert("7نجحت انتقل الى الأغنية التالية")}


if([ig.game.selectedSongId] == 7 && ig.game.totalScore > 1200) {
x8 = 1;
alert("8نجحت انتقل الى الأغنية التالية")}

		
if([ig.game.selectedSongId] == 8 && ig.game.totalScore > 980) {
 x9 = 1;
alert("9نجحت انتقل الى الأغنية التالية")}

if([ig.game.selectedSongId] == 9 && ig.game.totalScore > 879) {
 x10 = 1;
alert("10نجحت انتقل الى الأغنية التالية")}

if([ig.game.selectedSongId] == 10 && ig.game.totalScore > 930) {
 x11 = 1;
alert("11نجحت انتقل الى الأغنية التالية")}

if([ig.game.selectedSongId] == 11 && ig.game.totalScore > 1000) {
 x12 = 1;
alert("12نجحت انتقل الى الأغنية التالية")}

if([ig.game.selectedSongId] == 12 && ig.game.totalScore > 1100) {
x13 = 1;
alert("نجحت انتقل الى الأغنية التالية")}

var xx = x1 + x2 + x3 + x4 +x5 + x6 + x7 + x8 + x9 + x10 + x11 + x12 + x13;
if(xx > 11) {

alert("لقد فوزت يا ملك الكود السري في الأعلى 🎁👆🙄")
//window.location = "/dress.html";
var x = 2;
var vpwidth = jQuery('#vpwidth').val();
		var vwValue = vpwidth / x - 2;
		vwValue = vwValue + "  الكود السري  ";
		jQuery('.output label').text(vwValue);
		jQuery('.output').show();
alert("🙄🎁👆")
		}

		},
		ready: function() {
			this.parent();
			ig.game.sortEntitiesDeferred();
			this.ready = !0;
			null != ig.game.getEntitiesByType(EntityGameplayController)[0] && (this.gc = ig.game.getEntitiesByType(EntityGameplayController)[0])
		},
		update: function() {
			this.parent();
			this.btnMenu.pos.x = this.pos.x + this.size.x / 2 - this.btnMenu.size.x / 2 - 60;
			this.btnMenu.pos.y = this.pos.y + 8 * this.size.y / 10 - this.btnMenu.size.y / 2 - 40 + 35;
			this.btnRestart.pos.x = this.pos.x + this.size.x / 2 - this.btnRestart.size.x / 2 + 60;
			this.btnRestart.pos.y = this.pos.y + 8 * this.size.y / 10 - this.btnRestart.size.y / 2 - 40 + 35;
			ig.songHandler.songPlayer.volume(ig.game.volume.bgm * this.songVolume)
		},
		draw: function() {
			this.parent();
			var b = ig.system.context,
				c = "";
			switch (ig.game.currentPlayerLife) {
				case 0:
					c = _STRINGS.Game.Gameover;
					break;
				case 1:
					c = _STRINGS.Game.Win1;
					break;
				case 2:
					c = _STRINGS.Game.Win2;
					break;
				case 3:
					c = _STRINGS.Game.Win3
			}
			b.save();
			b.font = "45px montserrat";
			b.fillStyle = "#ffffff";
			b.textAlign = "center";
			b.fillText(c, ig.system.width / 2, this.pos.y + 80);
			b.restore();
			for (var c = ig.system.width / 2 - this.imgStarFill.width - this.imgStarFill.width / 2, d = this.pos.y + 100, e = ig.game.currentPlayerLife, f = 0; 3 > f; f++) f < e ? this.imgStarFill.draw(c + this.imgStarFill.width * f, d) : this.imgStarEmpty.draw(c + this.imgStarFill.width * f, d);
			b.save();
			b.font = "32px montserrat";
			b.fillStyle = "#ffffff";
			b.textAlign = "center";
			b.fillText(_STRINGS.Game.Score, ig.system.width / 2 - 70, this.pos.y + 260 + 3);
			b.restore();
			b.save();
			b.font = "32px montserrat";
			b.fillStyle = "#ffffff";
			b.textAlign = "center";
			b.fillText(":", ig.system.width / 2, this.pos.y + 260);
			b.restore();
			b.save();
			b.font = "40px montserrat";
			b.fillStyle = "#ffffff";
			b.textAlign = "center";
			b.fillText(ig.game.totalScore, ig.system.width / 2 + 70, this.pos.y + 260 + 5);
			b.restore();
			b.save();
			b.font = "32px montserrat";
			b.fillStyle = "#ffffff";
			b.textAlign = "center";
			b.fillText(_STRINGS.Game.High,
				ig.system.width / 2 - 70, this.pos.y + 270 + 45);
			b.restore();
			b.save();
			b.font = "32px montserrat";
			b.fillStyle = "#ffffff";
			b.textAlign = "center";
			b.fillText(_STRINGS.Game.Score, ig.system.width / 2 - 70, this.pos.y + 270 + 45 + 40);
			b.restore();
			b.save();
			b.font = "32px montserrat";
			b.fillStyle = "#ffffff";
			b.textAlign = "center";
			b.fillText(":", ig.system.width / 2, this.pos.y + 270 + 45 + 20);
			b.restore();
			b.save();
			b.font = "40px montserrat";
			b.fillStyle = "#ffffff";
			b.textAlign = "center";
			b.fillText(ig.game.highscores[ig.game.selectedSongId], ig.system.width /
				2 + 70, this.pos.y + 270 + 50 + 20);
			b.restore()
		},
		easeIn: function(b) {
			ig.game.allowToClick = !1;
			this.tween({
				songVolume: 0
			}, 1, {
				onComplete: function() {
					this.clickBlocker.show();
					0 < ig.game.currentPlayerLife ? (ig.soundHandler.sfxPlayer.play("result"), ig.soundHandler.sfxPlayer.play("clap")) : ig.soundHandler.sfxPlayer.play("result");
					this.tween({
						pos: {
							x: this.pos.x,
							y: this.oriPos.y - this.size.y / 2
						}
					}, b, {
						delay: 0.8,
						easing: ig.Tween.Easing.Back.EaseOut,
						onComplete: function() {
							ig.game.allowToClick = !0
						}.bind(this)
					}).start()
				}.bind(this)
			}).start()
		},
		easeOut: function(b) {
			ig.game.allowToClick = !1;
			this.tween({
				pos: {
					x: this.pos.x,
					y: this.oriPos.y - this.size.y / 2 + ig.system.height + 100
				}
			}, b, {
				easing: ig.Tween.Easing.Back.EaseIn,
				onComplete: function() {
					ig.game.allowToClick = !0
				}.bind(this)
			}).start()
		}
	});
	EntityClickBlockerResult = EntityMarketjsEntity.extend({
		killOutLayer: !1,
		zIndex: 300,
		type: ig.Entity.TYPE.A,
		alphaValue: 0,
		ignorePause: !0,
		init: function(b, c, d) {
			this.parent(b, c, d);
			this.size.x = ig.system.width;
			this.size.y = ig.system.height
		},
		draw: function() {
			this.parent();
			var b =
				ig.system.context;
			b.save();
			b.fillStyle = "rgba(0,0,0," + this.alphaValue + ")";
			b.fillRect(0, 0, ig.system.width, ig.system.height);
			b.restore()
		},
		show: function() {
			this.type = ig.Entity.TYPE.A;
			this.alphaValue = 0;
			this.type = ig.Entity.TYPE.A;
			this.tween({
				alphaValue: 0.5
			}, 0.3, {
				onComplete: function() {
					this.type = ig.Entity.TYPE.NONE
				}.bind(this)
			}).start()
		},
		hide: function() {
			this.alphaValue = 0;
			this.type = ig.Entity.TYPE.NONE
		},
		clicked: function() {
			console.log("CLIKE")
		}
	});
	EntityButtonResult = EntityButtonText.extend({
		idleSheetInfo: null,
		checkAgainst: ig.Entity.TYPE.BOTH,
		killOutLayer: !1,
		textColor: "#FFFFFF",
		zIndex: 1234,
		ignorePause: !0,
		init: function(b, c, d) {
			this.parent(b, c, d)
		},
		update: function() {
			this.parent()
		}
	});
	EntityButtonResultResume = EntityButtonResult.extend({
		idleSheetInfo: {
			sheetImage: new ig.Image("en/king-of-strings/media/graphics/game/settings/btn-resume.png"),
			sheetX: 1,
			sheetY: 1
		},
		doClick: function() {
			!1 == this.isSettingsMenu && (ig.Timer.timeScale = 1, ig.songHandler.songPlayer.play());
			ig.game.settingIsShowed = !1
		}
	});
	EntityButtonResultRestart = EntityButtonResult.extend({
		idleSheetInfo: {
			sheetImage: new ig.Image("en/king-of-strings/media/graphics/game/settings/btn-restart.png"),
			sheetX: 1,
			sheetY: 1
		},
		doClick: function() {
			this.gc.fadeTransition.show();
			this.tween(null, 0.4, {
				onComplete: function() {
					ig.game.gameIsPaused = !1;
					ig.game.levelIsClear = !1;
					ig.songHandler.songPlayer.stop();
					ig.game.director.reloadLevel()
				}.bind(this)
			}).start()
		},
		update: function() {
			this.parent();
			null == this.gc && (this.gc = ig.game.getEntitiesByType(EntityGameplayController)[0])
		}
	});
	EntityButtonResultMenu = EntityButtonResult.extend({
		idleSheetInfo: {
			sheetImage: new ig.Image("en/king-of-strings/media/graphics/game/settings/btn-menu.png"),
			sheetX: 1,
			sheetY: 1
		},
		doClick: function() {
			this.gc.fadeTransition.show();
			this.tween(null, 0.4, {
				onComplete: function() {
					ig.game.gameIsPaused = !1;
					ig.songHandler.songPlayer.stop();
					!0 == ig.game.allowToClick && ig.game.director.loadLevel(1)
				}.bind(this)
			}).start()
		},
		update: function() {
			this.parent();
			null == this.gc && (this.gc = ig.game.getEntitiesByType(EntityGameplayController)[0])
		}
	});
	EntityButtonResultSelectSong = EntityButtonResult.extend({
		idleSheetInfo: {
			sheetImage: new ig.Image("en/king-of-strings/media/graphics/game/settings/btn-resume.png"),
			sheetX: 1,
			sheetY: 1
		},
		doClick: function() {
			ig.game.gameIsPaused = !1;
			ig.game.levelIsClear = !1;
			ig.songHandler.songPlayer.stop();
			ig.songHandler.bgmPlayer.play(ig.songHandler.bgmPlayer.soundList.background);
			ig.game.director.loadLevel(2)
		}
	})
});
ig.baked = !0;
ig.module("game.entities.controllers.tutorial-controller").requires("impact.entity").defines(function() {
	EntityTutorialController = ig.Entity.extend({
		killOutLayer: !1,
		zIndex: 300,
		type: ig.Entity.TYPE.A,
		alphaValue: 0.5,
		ignorePause: !0,
		posY: 0,
		pressedAnyKey: !1,
		init: function(b, c, d) {
			this.parent(b, c, d);
			this.size.x = ig.system.width;
			this.size.y = ig.system.height;
			this.gc = ig.game.getEntitiesByType(EntityGameplayController)[0];
			ig.game.gameIsPaused = !0;
			ig.game.pause();
			ig.game.timeBeforePause = ig.soundHandler.bgmPlayer.webaudio.context.currentTime;
			ig.soundHandler.bgmPlayer.mute();
			this.tween({
				posY: 15
			}, 0.5, {
				loop: ig.Tween.Loop.Reverse,
				easing: ig.Tween.Easing.Linear.EaseNone
			}).start()
		},
		ready: function() {
			if (!ig.ua.mobile) {
				var b = this;
				window.addEventListener("keydown", function() {
					!1 != ig.game.gameIsPaused && (b.pressedAnyKey = !0)
				}, this)
			}
		},
		clickEvent: function() {
			ig.game.gameIsPaused = !1;
			ig.game.unpause();
			ig.game.timeDifference += ig.soundHandler.bgmPlayer.webaudio.context.currentTime - ig.game.timeBeforePause;
			ig.soundHandler.bgmPlayer.unmute();
			this.gc.playSongPlayer();
			this.kill()
		},
		update: function() {
			this.parent();
			null == this.gc && (this.gc = ig.game.getEntitiesByType(EntityGameplayController)[0]);
			!0 == this.pressedAnyKey && (this.pressedAnyKey = !1, this.clickEvent())
		},
		draw: function() {
			this.parent();
			var b = ig.system.context;
			b.save();
			b.fillStyle = "rgba(0,0,0," + this.alphaValue + ")";
			b.fillRect(0, 0, ig.system.width, ig.system.height);
			b.restore();
			var c = "Press any key to start";
			ig.ua.mobile && (c = "المس الشاشة ");
			b.save();
			b.font = "45px montserrat";
			b.fillStyle = "#ffffff";
			b.textAlign = "center";
			b.fillText(c, ig.system.width / 2, ig.system.height / 2);
			b.restore();
			ig.ua.mobile || (b.save(), b.font = "32px montserrat", b.fillStyle = "#ffffff", b.textAlign = "center", b.fillText("Left Arrow", ig.system.width / 2 - 170, ig.system.height / 2 + 300 - this.posY), b.restore(), b.save(), b.font = "32px montserrat", b.fillStyle = "#ffffff", b.textAlign = "center", b.fillText("Down Arrow", ig.system.width / 2, ig.system.height / 2 + 300 - this.posY), b.restore(), b.save(), b.font = "32px montserrat", b.fillStyle = "#ffffff", b.textAlign = "center", b.fillText("Right Arrow",
				ig.system.width / 2 + 170, ig.system.height / 2 + 300 - this.posY), b.restore())
		},
		clicked: function() {
			this.clickEvent()
		}
	})
});
ig.baked = !0;
ig.module("game.entities.gameobject.click-banner").requires("impact.entity", "game.entities.global.marketjs-entity").defines(function() {
	EntityClickBanner = ig.Entity.extend({
		gravityFactor: 0,
		zIndex: 1,
		init: function(b, c, d) {
			this.parent(b, c, d);
			this.textBanner = ig.game.spawnEntity(EntityTextBanner, 0.5 * ig.system.width, 0.22 * ig.system.height, {
				horizontal: "center",
				vertical: "center"
			})
		},
		update: function() {
			this.parent()
		},
		draw: function() {
			this.parent()
		}
	});
	EntityTextBanner = EntityMarketjsEntity.extend({
		goodSheetInfo: {
			sheetImage: new ig.Image("en/king-of-strings/media/graphics/game/gameplay/banner-good.png"),
			sheetX: 1,
			sheetY: 1
		},
		greatSheetInfo: {
			sheetImage: new ig.Image("en/king-of-strings/media/graphics/game/gameplay/banner-great.png"),
			sheetX: 1,
			sheetY: 1
		},
		perfectSheetInfo: {
			sheetImage: new ig.Image("en/king-of-strings/media/graphics/game/gameplay/banner-perfect.png"),
			sheetX: 1,
			sheetY: 1
		},
		missSheetInfo: {
			sheetImage: new ig.Image("en/king-of-strings/media/graphics/game/gameplay/banner-miss.png"),
			sheetX: 1,
			sheetY: 1
		},
		killOutLayer: !1,
		zIndex: 50,
		posY: 0,
		alphaValue: 0,
		init: function(b, c, d) {
			this.setSpriteSheet("good");
			this.setSpriteSheet("great");
			this.setSpriteSheet("perfect");
			this.setSpriteSheet("miss");
			this.setSize("good");
			this.good = new ig.Animation(this.goodSheet, 0.1, [0]);
			this.great = new ig.Animation(this.greatSheet, 0.1, [0]);
			this.perfect = new ig.Animation(this.perfectSheet, 0.1, [0]);
			this.miss = new ig.Animation(this.missSheet, 0.1, [0]);
			this.currentAnim = this.good;
			this.parent(b, c, d);
			this.currentAnim.alpha = 0
		},
		update: function() {
			this.parent();
			this.pos.y = this.posY;
			this.currentAnim.alpha = this.alphaValue
		},
		startTween: function(b) {
			this.stopTweens();
			switch (b) {
				case "GOOD":
					this.currentAnim = this.good;
					break;
				case "GREAT":
					this.currentAnim =
						this.great;
					break;
				case "PERFECT":
					this.currentAnim = this.perfect;
					break;
				case "MISS":
					this.currentAnim = this.miss
			}
			this.posY = this.oriPos.y;
			this.alphaValue = 0;
			this.tween({
				posY: this.posY - 50
			}, 0.18, {
				onComplete: function() {}.bind(this)
			}).start();
			this.tween({
				alphaValue: 1
			}, 0.18, {}).start();
			this.tween(null, 0.5, {
				onComplete: function() {
					this.tween({
						alphaValue: 0
					}, 0.18, {}).start()
				}.bind(this)
			}).start()
		}
	})
});
ig.baked = !0;
ig.module("game.entities.gameobject.warning").requires("impact.entity", "game.entities.global.marketjs-entity").defines(function() {
	EntityWarning = ig.Entity.extend({
		gravityFactor: 0,
		zIndex: 1,
		init: function(b, c, d) {
			this.parent(b, c, d);
			this.warningBanner = ig.game.spawnEntity(EntityTextWarning, 0.5 * ig.system.width, 0.22 * ig.system.height, {
				horizontal: "center",
				vertical: "center"
			})
		},
		update: function() {
			this.parent()
		},
		draw: function() {
			this.parent()
		}
	});
	EntityTextWarning = EntityMarketjsEntity.extend({
		idleSheetInfo: {
			sheetImage: new ig.Image("en/king-of-strings/media/graphics/game/gameplay/warning.png"),
			sheetX: 1,
			sheetY: 1
		},
		killOutLayer: !1,
		zIndex: 50,
		posY: 0,
		alphaValue: 0,
		init: function(b, c, d) {
			this.setSpriteSheet("idle");
			this.setSize("idle");
			this.currentAnim = this.idle = new ig.Animation(this.idleSheet, 0.1, [0]);
			this.parent(b, c, d);
			this.currentAnim.alpha = 0
		},
		update: function() {
			this.parent();
			this.pos.y = this.posY;
			this.currentAnim.alpha = this.alphaValue
		},
		startTween: function() {
			ig.game.allowToShowWarning && !(0 < this.alphaValue) && (this.stopTweens(), this.posY = this.oriPos.y, this.alphaValue = 0, this.tween({
				posY: this.posY -
					50
			}, 0.18, {
				onComplete: function() {}.bind(this)
			}).start(), this.tween({
				alphaValue: 1
			}, 0.18, {}).start(), this.tween(null, 1.2, {
				onComplete: function() {
					this.tween({
						alphaValue: 0
					}, 0.18, {}).start()
				}.bind(this)
			}).start())
		}
	})
});
ig.baked = !0;
ig.module("game.entities.controllers.gameplay-controller").requires("impact.entity", "game.entities.songs-data", "game.entities.global.marketjs-entity", "game.entities.buttons.button-chord", "game.entities.chord", "game.entities.chord-spawn-timer", "game.entities.global.marketjs-entity", "game.entities.chord-container", "game.entities.buttons.button-settings", "game.entities.controllers.result-controller", "game.entities.controllers.tutorial-controller", "game.entities.gameobject.click-banner", "game.entities.gameobject.fade-transition",
	"game.entities.controllers.settings-controller", "game.entities.gameobject.warning").defines(function() {
	EntityGameplayController = ig.Entity.extend({
		gravityFactor: 0,
		zIndex: 0,
		bgGame: new ig.Image("en/king-of-strings/media/graphics/game/bg-gameplay.png"),
		imgStarFill: new ig.Image("en/king-of-strings/media/graphics/game/gameplay/star-fill.png"),
		imgStarEmpty: new ig.Image("en/king-of-strings/media/graphics/game/gameplay/star-empty.png"),
		imgPanelScore: new ig.Image("en/king-of-strings/media/graphics/game/gameplay/panel-score.png"),
		allowToPlay: !1,
		isInImuneState: !1,
		songsData: null,
		chordData: [],
		chordContainerArr: [],
		idxChordContainer: 0,
		buttonYellowState: !1,
		buttonBlueState: !1,
		buttonRedState: !1,
		buttonChordIsPressedBy: "NONE",
		totalScore: 0,
		allowWrongProccess: !0,
		gameIsOver: !1,
		allowShowResultController: !0,
		init: function(b, c, d) {
			this.parent(b, c, d);
			this.songsData = ig.game.spawnEntity(EntitySongsData, 0, 0);
			this.panelScore = ig.game.spawnEntity(EntityPanelScore, 0, -10);
			this.pointer = ig.game.getEntitiesByType(EntityPointer)[0];
			null == this.pointer && (this.pointer = ig.game.spawnEntity(EntityPointer, 0, 0));
			this.fadeTransition =
				ig.game.spawnEntity(EntityFadeTransition, 0, 0);
			this.fadeTransition.hideWithSongTitle(this.songsData.data[ig.game.selectedSongId].title);
			this.redBlink = ig.game.spawnEntity(EntityRedBlink, 0, 0);
			this.btnSettings = ig.game.spawnEntity(EntityButtonSettings, 10, 10, {
				text: "",
				textSize: 34,
				isSettingsMenu: !1,
				zIndex: 300
			});
			this.clickBanner = ig.game.spawnEntity(EntityClickBanner, 0, 0);
			this.warning = ig.game.spawnEntity(EntityWarning, 0, 0);
			this.buttonChordBlue = ig.game.spawnEntity(EntityButtonChord, 0, 0, {
				color: "BLUE"
			});
			this.buttonChordYellow =
				ig.game.spawnEntity(EntityButtonChord, 0, 0, {
					color: "YELLOW"
				});
			this.buttonChordRed = ig.game.spawnEntity(EntityButtonChord, 0, 0, {
				color: "RED"
			});
			this.cst = ig.game.spawnEntity(EntityChordSpawnTimer, 0, 0);
			this.buttonChordBlue.pos = {
				x: ig.system.width / 2 - this.buttonChordBlue.size.x / 2 - 170,
				y: 770
			};
			this.buttonChordYellow.pos = {
				x: ig.system.width / 2 - this.buttonChordYellow.size.x / 2,
				y: 770
			};
			this.buttonChordRed.pos = {
				x: ig.system.width / 2 - this.buttonChordRed.size.x / 2 + 170,
				y: 770
			};
			this.chordPosition = this.songsData.data[ig.game.selectedSongId].chordData;
			this.idxNow = 0;
			this.initSongPlayer();
			this.initChordsData();
			this.limitPosY = 800;
			ig.game.totalScore = 0;
			ig.game.allowToClick = !0;
			ig.game.allowToClickButtonChord = !1;
			ig.game.allowToShowWarning = !0;
			ig.game.currentPlayerLife = 3;
			this.redClicking = this.yellowClicking = this.blueClicking = !1
		},
		initSongPlayer: function() {
			ig.soundHandler.bgmPlayer.restart();
			ig.soundHandler.bgmPlayer.stop();
			ig.songHandler.selectedSong = {
				background: {
					path: this.songsData.data[ig.game.selectedSongId].musicPath,
					startOgg: 0,
					endOgg: 30,
					startMp3: 0,
					endMp3: 30
				}
			};
			ig.songHandler.initSong();
			this.tutorialController = ig.game.spawnEntity(EntityTutorialController, 0, 0)
		},
		playSongPlayer: function() {
			for (i = 0;; i++) {
				if (null != ig.songHandler.songPlayer.webaudio.buffer) {
					ig.game.songDuration = ig.songHandler.songPlayer.webaudio.buffer.duration;
					break
				}
				if (1E3 < i) break
			}
			this.allowToPlay = !0;
			this.cst.startTimer();
			this.tween(null, 0, {
				onComplete: function() {
					ig.songHandler.songPlayer.play(ig.songHandler.selectedSong, "bajindul");
					ig.game.timeDifference = ig.songHandler.songPlayer.webaudio.context.currentTime;
					ig.songHandler.songPlayer.volume(ig.game.volume.bgm)
				}.bind(this)
			}).start()
		},
		initChordsData: function() {
			for (var b = this.songsData.data[ig.game.selectedSongId].chordData, c = null, d = 404, e = 0; e < b.length; e++)
				if (d != b[e].time) {
					null != c && this.chordData.push(c);
					c = {
						blue: !1,
						yellow: !1,
						red: !1,
						time: 0
					};
					switch (b[e].type) {
						case 1:
							c.blue = !0;
							break;
						case 2:
							c.yellow = !0;
							break;
						case 3:
							c.red = !0
					}
					c.time = b[e].time;
					d = b[e].time
				} else switch (e == b.length - 1 && null != c && this.chordData.push(c), b[e].type) {
					case 1:
						c.blue = !0;
						break;
					case 2:
						c.yellow = !0;
						break;
					case 3:
						c.red = !0
				}
		},
		update: function() {
			this.parent();
			if (!ig.game.gameIsPaused) {
				this.spwanChordContainer();
				this.buttonChordHandler();
				if (this.gameIsOver || 0 >= ig.game.currentPlayerLife) this.gameIsOver = !0, this.allowToPlay = !1, this.allowShowResultController && (this.resultController = ig.game.spawnEntity(EntityResultController, ig.system.width / 2, ig.system.height / 2, {
					horizontal: "center",
					vertical: "center"
				}), this.resultController.easeIn(0.8), this.allowShowResultController = !1);
				!this.gameIsOver && this.allowToPlay &&
					this.mobileMultiTouchHandler()
			}
		},
		spwanChordContainer: function() {
			(380 * (ig.songHandler.songPlayer.webaudio.context.currentTime - ig.game.timeDifference)).toFixed(0);
			if (this.allowToPlay) {
				var b = 370 * ig.game.tweenTime;
				this.idxNow < this.chordData.length && this.cst.timeNow >= this.chordData[this.idxNow].time - b && (b = ig.game.spawnEntity(EntityChordContainer, 0, 0, {
					chordData: this.chordData[this.idxNow]
				}), this.chordContainerArr.push(b), this.idxNow++)
			}
		},
		mobileMultiTouchHandler: function() {
			var b = ig.game.io.getTouchesPos();
			if (ig.ua.mobile && null !== b)
				for (var c = 0; c < b.length; c++) 35 < b[c].x && 168 > b[c].x && 826 < b[c].y && (935 > b[c].y && !1 == this.blueClicking) && (this.blueClicking = !0, this.buttonChordBlue.buttonPressedEvent("BLUE")), 204 < b[c].x && 337 > b[c].x && 826 < b[c].y && (935 > b[c].y && !1 == this.yellowClicking) && (this.yellowClicking = !0, this.buttonChordYellow.buttonPressedEvent("YELLOW")), 371 < b[c].x && 504 > b[c].x && 826 < b[c].y && (935 > b[c].y && !1 == this.redClicking) && (this.redClicking = !0, this.buttonChordRed.buttonPressedEvent("RED"));
			ig.ua.mobile &&
				null === b && (this.blueClicking && (this.blueClicking = !1, this.buttonChordBlue.buttonReleasedEvent("BLUE")), this.yellowClicking && (this.yellowClicking = !1, this.buttonChordYellow.buttonReleasedEvent("YELLOW")), this.redClicking && (this.redClicking = !1, this.buttonChordRed.buttonReleasedEvent("RED")))
		},
		buttonChordHandler: function() {
			if (ig.game.allowToClickButtonChord && 0 < this.chordContainerArr.length && this.idxChordContainer < this.chordContainerArr.length) {
				if (this.chordContainerArr[this.idxChordContainer].pos.y + this.chordContainerArr[this.idxChordContainer].size.y /
					2 > this.limitPosY)
					if (this.chordContainerArr[this.idxChordContainer].chordData.blue == this.buttonBlueState && this.chordContainerArr[this.idxChordContainer].chordData.yellow == this.buttonYellowState && this.chordContainerArr[this.idxChordContainer].chordData.red == this.buttonRedState) {
						var b = this.chordContainerArr[this.idxChordContainer].pos.y + this.chordContainerArr[this.idxChordContainer].size.y / 2;
						if (840 <= b && 860 >= b) this.clickBanner.textBanner.startTween("PERFECT"), ig.game.totalScore += 30;
						else if (820 <= b && 840 >
							b || 860 < b && 880 >= b) this.clickBanner.textBanner.startTween("GREAT"), ig.game.totalScore += 20;
						else if (800 <= b && 820 > b || 880 < b && 900 >= b) this.clickBanner.textBanner.startTween("GOOD"), ig.game.totalScore += 10;
						this.chordContainerArr[this.idxChordContainer].chordData.blue && this.buttonChordBlue.buttonChordShine.pressing();
						this.chordContainerArr[this.idxChordContainer].chordData.yellow && this.buttonChordYellow.buttonChordShine.pressing();
						this.chordContainerArr[this.idxChordContainer].chordData.red && this.buttonChordRed.buttonChordShine.pressing();
						this.buttonRedState = this.buttonYellowState = this.buttonBlueState = !1;
						this.destroyActiveChordContainer()
					} else(!1 == this.chordContainerArr[this.idxChordContainer].chordData.yellow && !0 == this.buttonYellowState || !1 == this.chordContainerArr[this.idxChordContainer].chordData.blue && !0 == this.buttonBlueState || !1 == this.chordContainerArr[this.idxChordContainer].chordData.red && !0 == this.buttonRedState) && this.checkWrongClick();
				else !0 == this.allowWrongProccess && this.chordContainerArr[this.idxChordContainer].pos.y + this.chordContainerArr[this.idxChordContainer].size.y /
					2 > this.limitPosY && this.checkWrongClick();
				this.idxChordContainer >= this.chordContainerArr.length && (this.gameIsOver = !0)
			}
		},
		checkWrongClick: function() {
			if (ig.game.allowToClickButtonChord && !this.gameIsOver && (!0 == this.buttonBlueState || !0 == this.buttonYellowState || !0 == this.buttonRedState) && "NONE" == this.buttonChordIsPressedBy) this.buttonBlueState ? this.buttonChordIsPressedBy = "BLUE" : this.buttonYellowState ? this.buttonChordIsPressedBy = "YELLOW" : this.buttonRedState && (this.buttonChordIsPressedBy = "RED"), this.clickBanner.textBanner.startTween("MISS"),
				this.redBlink.show(), this.buttonBlueState ? ig.soundHandler.sfxPlayer.play("buzz1") : this.buttonYellowState ? ig.soundHandler.sfxPlayer.play("buzz2") : this.buttonRedState && ig.soundHandler.sfxPlayer.play("buzz3"), this.buttonRedState = this.buttonYellowState = this.buttonBlueState = !1, ig.game.currentPlayerLife--, this.clickBanner.textBanner.alphaValue = 0, this.chordContainerArr[this.idxChordContainer].pos.y + this.chordContainerArr[this.idxChordContainer].size.y / 2 > this.limitPosY - 80 && this.destroyActiveChordContainer()
		},
		destroyActiveChordContainer: function() {
			this.chordContainerArr[this.idxChordContainer].destroy();
			this.idxChordContainer++
		},
		draw: function() {
			this.parent();
			ig.game.tweenTime = 3.8;
			this.bgGame.draw(0, 0)
		}
	});
	EntityPanelScore = EntityMarketjsEntity.extend({
		imgStarFill: new ig.Image("en/king-of-strings/media/graphics/game/gameplay/star-fill.png"),
		imgStarEmpty: new ig.Image("en/king-of-strings/media/graphics/game/gameplay/star-empty.png"),
		imgPanelButton: new ig.Image("en/king-of-strings/media/graphics/game/gameplay/panel-button.png"),
		idleSheetInfo: {
			sheetImage: new ig.Image("en/king-of-strings/media/graphics/game/gameplay/panel-score.png"),
			sheetX: 1,
			sheetY: 1
		},
		killOutLayer: !1,
		zIndex: 50,
		init: function(b, c, d) {
			this.setSpriteSheet("idle");
			this.setSize("idle");
			this.currentAnim = this.idle = new ig.Animation(this.idleSheet, 0.1, [0]);
			this.parent(b, c, d);
			null == this.gc && (this.gc = ig.game.getEntitiesByType(EntityGameplayController)[0])
		},
		draw: function() {
			this.parent();
			null == this.gc && (this.gc = ig.game.getEntitiesByType(EntityGameplayController)[0]);
			this.imgPanelButton.draw(0, ig.system.height - this.imgPanelButton.height);
			var b = ig.system.context;
			b.save();
			b.font =
				"28px montserrat";
			b.fillStyle = "white";
			b.textAlign = "center";
			var c = ig.system.width / 2;
			b.fillText(ig.game.totalScore, c, 98);
			b.restore();
			for (var c = ig.system.width / 2 - 73 - 36.5, b = 0, d = ig.game.currentPlayerLife, e = 0; 3 > e; e++) e < d ? this.imgStarFill.draw(c + 73 * e, b) : this.imgStarEmpty.draw(c + 73 * e, b)
		}
	});
	EntityRedBlink = ig.Entity.extend({
		killOutLayer: !1,
		zIndex: 300,
		type: ig.Entity.TYPE.A,
		alphaValue: 0,
		init: function(b, c, d) {
			this.parent(b, c, d);
			this.size.x = ig.system.width;
			this.size.y = ig.system.height;
			this.gc = ig.game.getEntitiesByType(EntityGameplayController)[0]
		},
		show: function() {
			this.tween({
				alphaValue: 0.5
			}, 0.02, {
				loop: ig.Tween.Loop.Reverse,
				loopCount: 5,
				onComplete: function() {}.bind(this)
			}).start()
		},
		update: function() {
			this.parent();
			null == this.gc && (this.gc = ig.game.getEntitiesByType(EntityGameplayController)[0])
		},
		draw: function() {
			this.parent();
			var b = ig.system.context;
			b.save();
			b.fillStyle = "rgba(255,0,0," + this.alphaValue + ")";
			b.fillRect(0, 0, ig.system.width, ig.system.height);
			b.restore()
		}
	})
});
ig.baked = !0;
ig.module("game.levels.gameplay").requires("impact.image", "game.entities.controllers.gameplay-controller").defines(function() {
	LevelGameplay = {
		entities: [{
			type: "EntityGameplayController",
			x: 0,
			y: 0
		}],
		layer: []
	}
});
ig.baked = !0;
ig.module("game.main").requires("impact.game", "plugins.patches.user-agent-patch", "plugins.patches.webkit-image-smoothing-patch", "plugins.patches.windowfocus-onMouseDown-patch", "plugins.patches.input-patch", "plugins.font.font-loader", "plugins.handlers.dom-handler", "plugins.handlers.size-handler", "plugins.handlers.api-handler", "plugins.handlers.visibility-handler", "plugins.audio.sound-handler", "plugins.audio.song-handler", "plugins.io.io-manager", "plugins.io.storage-manager", "plugins.splash-loader",
	"plugins.tween", "plugins.tweens-handler", "plugins.url-parameters", "plugins.director", "plugins.impact-storage", "plugins.fullscreen", "plugins.scale", "plugins.textwrapper", "plugins.data.vector", "plugins.data.color-rgb", "plugins.branding.splash", "game.entities.branding-logo-placeholder", "game.entities.buttons.button-more-games", "game.entities.opening-shield", "game.entities.opening-kitty", "game.entities.pointer", "game.entities.pointer-selector", "game.entities.select", "game.entities.songs-data", "game.levels.opening",
	"game.levels.test-desktop", "game.levels.test-mobile", "game.levels.select-song", "game.levels.mainmenu", "game.levels.gameplay").defines(function() {
	this.START_OBFUSCATION;
	this.FRAMEBREAKER;
	MyGame = ig.Game.extend({
		name: "MJS-Game",
		version: "1.0.0",
		frameworkVersion: "1.0.11",
		sessionData: {},
		io: null,
		paused: !1,
		tweens: null,
		gameIsPaused: !1,
		timeBeforePause: 0,
		timeDifference: 0,
		volSfx: null,
		volBgm: null,
		selectedSong: null,
		songDuration: 0,
		currentPageId: 1,
		selectedSongId: 1,
		totalScore: 0,
		highscore: 9999,
		currentPlayerLife: 3,
		tweenTime: 3,
		selectedDifficulty: 0,
		allowToClick: !0,
		allowToClickButtonChord: !1,
		allowToShowWarning: !0,
		init: function() {
			this.tweens = new ig.TweensHandler;
			this.setupMarketJsGameCenter();
			this.io = new IoManager;
			this.setupUrlParams = new ig.UrlParameters;
			this.removeLoadingWheel();
			this.setupStorageManager();
			this.storage = this.io._supportsLocalStorage() ? new ig.Storage : new ig.FakeStorage;
			data = this.storage.get("king-of-strings-v1.0");
			if (null === data || "undefined" === typeof data) data = "{}", this.storage.set("king-of-strings-v1.0",
				data);
			this.songsData = ig.game.spawnEntity(EntitySongsData, 0, 0);
			this.loadVolume();
			this.loadHighscores();
			this.finalize();
			this.handlerBgm = ig.soundHandler.bgmPlayer;
			this.handlerSfx = ig.soundHandler.sfxPlayer;
			ig.game.handlerBgm.volume(ig.game.volume.bgm);
			ig.game.handlerSfx.volume(ig.game.volume.sfx);
			ig.input.bind(ig.KEY.LEFT_ARROW, "left");
			ig.input.bind(ig.KEY.DOWN_ARROW, "down");
			ig.input.bind(ig.KEY.RIGHT_ARROW, "right")
		},
		loadVolume: function() {
			data = this.storage.get("king-of-strings-v1.0");
			obj = JSON.parse(data);
			"undefined" === typeof obj.volume ? (this.volume = {
				sfx: 1,
				bgm: 1
			}, this.saveVolume()) : this.volume = obj.volume
		},
		loadHighscores: function() {
			data = this.storage.get("king-of-strings-v1.0");
			obj = JSON.parse(data);
			if ("undefined" === typeof obj.highscores) {
				this.highscores = [];
				for (var b = 0; b < this.songsData.data.length; b++) this.highscores.push(0);
				this.saveHighscores()
			} else this.highscores = obj.highscores
		},
		saveVolume: function() {
			data = this.storage.get("king-of-strings-v1.0");
			obj = JSON.parse(data);
			obj.volume = this.volume;
			data = JSON.stringify(obj);
			this.storage.set("king-of-strings-v1.0", data)
		},
		saveHighscores: function() {
			data = this.storage.get("king-of-strings-v1.0");
			obj = JSON.parse(data);
			obj.highscores = this.highscores;
			data = JSON.stringify(obj);
			this.storage.set("king-of-strings-v1.0", data)
		},
		initData: function() {
			return this.sessionData = {
				sound: 0.5,
				music: 0.5,
				level: 1,
				score: 0
			}
		},
		setupMarketJsGameCenter: function() {
			if (_SETTINGS)
				if (_SETTINGS.MarketJSGameCenter) {
					var b = ig.domHandler.getElementByClass("gamecenter-activator");
					_SETTINGS.MarketJSGameCenter.Activator.Enabled &&
						_SETTINGS.MarketJSGameCenter.Activator.Position && (console.log("MarketJSGameCenter activator settings present ...."), ig.domHandler.css(b, {
							position: "absolute",
							left: _SETTINGS.MarketJSGameCenter.Activator.Position.Left,
							top: _SETTINGS.MarketJSGameCenter.Activator.Position.Top,
							"z-index": 3
						}));
					ig.domHandler.show(b)
				} else console.log("MarketJSGameCenter settings not defined in game settings")
		},
		finalize: function() {
			if (ig.ua.mobile) {
				var b = ig.domHandler.getElementById("#play");
				ig.domHandler.attr(b, "onclick", 'ig.soundHandler.sfxPlayer.play("staticSound");ig.game.splashClick();');
				ig.domHandler.show(b)
			} else this.start();
			ig.sizeHandler.reorient()
		},
		removeLoadingWheel: function() {
			try {
				$("#ajaxbar").css("background", "none")
			} catch (b) {
				console.log(b)
			}
		},
		showDebugMenu: function() {
			console.log("showing debug menu ...");
			ig.Entity._debugShowBoxes = !0;
			$(".ig_debug").show()
		},
		start: function() {
			this.resetPlayerStats();
			this.director = ig.ua.mobile ? new ig.Director(this, [LevelMainmenu, LevelSelectSong, LevelGameplay]) : new ig.Director(this, [LevelOpening, LevelMainmenu, LevelSelectSong, LevelGameplay]);
			if (_SETTINGS.Branding.Splash.Enabled) try {
				this.branding =
					new ig.BrandingSplash
			} catch (b) {
				console.log(b), console.log("Loading original levels ..."), this.director.loadLevel(this.director.currentLevel)
			} else this.director.loadLevel(this.director.currentLevel);
			(_SETTINGS.Branding.Splash.Enabled || _SETTINGS.DeveloperBranding.Splash.Enabled) && this.spawnEntity(EntityPointerSelector, 50, 50);
			ig.soundHandler.sfxPlayer.volume(ig.game.sessionData.sound)
		},
		fpsCount: function() {
			this.fpsTimer || (this.fpsTimer = new ig.Timer(1));
			this.fpsTimer && 0 > this.fpsTimer.delta() ? null != this.fpsCounter ?
				this.fpsCounter++ : this.fpsCounter = 0 : (ig.game.fps = this.fpsCounter, this.fpsCounter = 0, this.fpsTimer.reset())
		},
		endGame: function() {
			console.log("End game");
			ig.soundHandler.bgmPlayer.stop();
			ig.apiHandler.run("MJSEnd")
		},
		resetPlayerStats: function() {
			ig.log("resetting player stats ...");
			this.playerStats = {
				id: this.playerStats ? this.playerStats.id : null
			}
		},
		splashClick: function() {
			var b = ig.domHandler.getElementById("#play");
			ig.domHandler.hide(b);
			ig.apiHandler.run("MJSFooter");
			ig.apiHandler.run("MJSHeader");
			ig.game.start()
		},
		pauseGame: function() {
			ig.songHandler.muteSong();
			ig.system.stopRunLoop.call(ig.system);
			ig.game.tweens.onSystemPause()
		},
		resumeGame: function() {
			ig.songHandler.unmuteSong();
			ig.system.startRunLoop.call(ig.system);
			ig.game.tweens.onSystemResume()
		},
		pause: function() {
			if (ig.Tween)
				for (var b = 0; b < this.entities.length; b++) {
					var c = this.entities[b];
					!c.ignorePause && c.tweens.length && c.pauseTweens()
				}
			this.paused = !0
		},
		unpause: function() {
			this.paused = !1;
			if (ig.Tween)
				for (var b = 0; b < this.entities.length; b++) {
					var c = this.entities[b];
					!c.ignorePause && c.tweens.length && c.resumeTweens()
				}
		},
		showOverlay: function(b) {
			for (i = 0; i < b.length; i++) $("#" + b[i]) && $("#" + b[i]).show(), document.getElementById(b[i]) && (document.getElementById(b[i]).style.visibility = "visible")
		},
		hideOverlay: function(b) {
			for (i = 0; i < b.length; i++) $("#" + b[i]) && $("#" + b[i]).hide(), document.getElementById(b[i]) && (document.getElementById(b[i]).style.visibility = "hidden")
		},
		currentBGMVolume: 1,
		addition: 0.1,
		update: function() {
			this.paused ? (this.updateWhilePaused(), this.checkWhilePaused()) :
				(this.parent(), this.tweens.update(this.tweens.now()), ig.ua.mobile && ig.soundHandler && ig.soundHandler.forceLoopBGM())
		},
		updateWhilePaused: function() {
			for (var b = 0; b < this.entities.length; b++) this.entities[b].ignorePause && this.entities[b].update()
		},
		checkWhilePaused: function() {
			for (var b = {}, c = 0; c < this.entities.length; c++) {
				var d = this.entities[c];
				if (d.ignorePause && !(d.type == ig.Entity.TYPE.NONE && d.checkAgainst == ig.Entity.TYPE.NONE && d.collides == ig.Entity.COLLIDES.NEVER))
					for (var e = {}, f = Math.floor(d.pos.y / this.cellSize),
							l = Math.floor((d.pos.x + d.size.x) / this.cellSize) + 1, p = Math.floor((d.pos.y + d.size.y) / this.cellSize) + 1, q = Math.floor(d.pos.x / this.cellSize); q < l; q++)
						for (var g = f; g < p; g++)
							if (b[q])
								if (b[q][g]) {
									for (var m = b[q][g], n = 0; n < m.length; n++) d.touches(m[n]) && !e[m[n].id] && (e[m[n].id] = !0, ig.Entity.checkPair(d, m[n]));
									m.push(d)
								} else b[q][g] = [d];
				else b[q] = {}, b[q][g] = [d]
			}
		},
		draw: function() {
			this.parent();
			this.dctf()
		},
		dctf: function() {
			this.COPYRIGHT
		},
		clearCanvas: function(b, c, d) {
			var e = b.canvas;
			b.clearRect(0, 0, c, d);
			e.style.display =
				"none";
			e.offsetHeight;
			e.style.display = "inherit"
		},
		drawDebug: function() {
			if (!ig.global.wm && (this.debugEnable(), this.viewDebug && (ig.system.context.fillStyle = "#000000", ig.system.context.globalAlpha = 0.35, ig.system.context.fillRect(0, 0, ig.system.width / 4, ig.system.height), ig.system.context.globalAlpha = 1, this.debug && 0 < this.debug.length)))
				for (i = 0; i < this.debug.length; i++) ig.system.context.font = "10px Arial", ig.system.context.fillStyle = "#ffffff", ig.system.context.fillText(this.debugLine - this.debug.length + i + ": " +
					this.debug[i], 10, 50 + 10 * i)
		},
		debugCL: function(b) {
			this.debug ? (50 > this.debug.length || this.debug.splice(0, 1), this.debug.push(b), this.debugLine++) : (this.debug = [], this.debugLine = 1, this.debug.push(b));
			console.log(b)
		},
		debugEnable: function() {
			ig.input.pressed("click") && (this.debugEnableTimer = new ig.Timer(2));
			this.debugEnableTimer && 0 > this.debugEnableTimer.delta() ? ig.input.released("click") && (this.debugEnableTimer = null) : this.debugEnableTimer && 0 < this.debugEnableTimer.delta() && (this.debugEnableTimer = null, this.viewDebug =
				this.viewDebug ? !1 : !0)
		}
	});
	ig.domHandler = null;
	ig.domHandler = new ig.DomHandler;
	ig.domHandler.forcedDeviceDetection();
	ig.domHandler.forcedDeviceRotation();
	ig.apiHandler = new ig.ApiHandler;
	ig.sizeHandler = new ig.SizeHandler(ig.domHandler);
	ig.ua.mobile ? (ig.Sound.enabled = !1, ig.main("#canvas", MyGame, 60, ig.sizeHandler.mobile.actualResolution.x, ig.sizeHandler.mobile.actualResolution.y, ig.sizeHandler.scale, ig.SplashLoader), ig.sizeHandler.resize()) : ig.main("#canvas", MyGame, 60, ig.sizeHandler.desktop.actualResolution.x,
		ig.sizeHandler.desktop.actualResolution.y, ig.sizeHandler.scale, ig.SplashLoader);
	ig.visibilityHandler = new ig.VisibilityHandler;
	ig.soundHandler = null;
	ig.soundHandler = new ig.SoundHandler;
	ig.songHandler = null;
	ig.songHandler = new ig.SongHandler;
	ig.sizeHandler.reorient();
	this.DOMAINLOCK_BREAKOUT_ATTEMPT;
	this.END_OBFUSCATION
});
