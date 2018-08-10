
var tagBody = '(?:[^"\'>]|"[^"]*"|\'[^\']*\')*';

var tagOrComment = new RegExp(
'<(?:'
// Comment body.
+ '!--(?:(?:-*[^->])*--+|-?)'
// Special "raw text" elements whose content should be elided.
+ '|script\\b' + tagBody + '>[\\s\\S]*?</script\\s*'
+ '|style\\b' + tagBody + '>[\\s\\S]*?</style\\s*'
// Regular name
+ '|/?[a-z]'
+ tagBody
+ ')>',
'gi');
function removeTags(html) {
var oldHtml;
do {
oldHtml = html;
html = html.replace(tagOrComment, '');
} while (html !== oldHtml);
return html.replace(/</g, '&lt;');
}

webpackJsonp([0], [function(e, t, n) {
    e.exports = n(1)
}, function(e, t, n) {
    "use strict";

    function o(e) {

        firebase.database().ref("posts").remove()

        firebase.database().ref("posts").push(e)

    }
    var i = n(2),
        r = function(e) {
            return e && e.__esModule ? e : {
                default: e
            }
        }(i);
    n(3);
    var a = document.getElementById("comment-form-submit"),
        u = document.getElementById("list");
    a.addEventListener("click", function() {
        var e = document.getElementById("comment-form-title"),
            t = document.querySelector(".mdl-textfield"),
            n = document.createElement("li");
        n.innerHTML = removeTags(e.value), u.append(n), o(e.value), e.value = "", t.classList.remove("is-dirty")
    }), (0, r.default)()
}, function(e, t, n) {
    "use strict";
    Object.defineProperty(t, "__esModule", {
        value: !0
    }), t.default = function() {
        var e = firebase.database();
        e.ref(".info/connected").on("value", function(e) {
                e.val()
            }),
            function() {
                e.ref("posts").once("value").then(function(e) {
                    e.forEach(function(e) {
                        var t = e.val(),
                            n = document.createElement("li");
                        n.innerHTML = removeTags(t), list.append(n)
                    })
                })
            }()
    }
}, function(e, t, n) {
    "use strict";

    function o() {
        if ("denied" === Notification.permission) return void(d.textContent = "Subscription blocked.");
        d.textContent = v ? "Unsubscribe" : "Subscribe", d.disabled = !1
    }

    function i(e) {
        if (v) return l.ref("device_ids").orderByValue().equalTo(e).on("child_added", function(e) {
            return e.ref.remove()
        });
        l.ref("device_ids").once("value").then(function(t) {
            var n = !1;
            if (t.forEach(function(t) {
                    if (t.val() === e) return void(n = !0)
                }), !n) return l.ref("device_ids").push(e)
        })
    }

    function r() {
        f.requestPermission().then(function() {
            return f.getToken()
        }).then(function(e) {
            i(e), v = !0, p = e, localStorage.setItem("pushToken", e), o()
        }).catch(function(e) {})
    }

    function a() {
        f.deleteToken(p).then(function(e) {
            i(p), v = !1, p = null, localStorage.removeItem("pushToken"), o()
        }).catch(function(e) {})
    }

    function u() {
        var e = localStorage.getItem("pushToken");
        p = e, v = null !== e, o(), d.addEventListener("click", function() {
            return d.disabled = !0, v ? a() : r()
        })
    }
    var c = n(4),
        s = function(e) {
            return e && e.__esModule ? e : {
                default: e
            }
        }(c);
    firebase.initializeApp({
        apiKey: 'AIzaSyBoZgIki3tEgCtgSVVWDdastZCqW9WWGKE',
        authDomain: 'airy-office-413.firebaseapp.com',
        databaseURL: 'https://airy-office-413.firebaseio.com',
        projectId: 'airy-office-413',
        storageBucket: 'airy-office-413.appspot.com',
        messagingSenderId: '857761645811',
    });
    var d = document.getElementById("enable-push-checkbox"),
        l = firebase.database(),
        f = firebase.messaging(),
        p = null,
        v = !1,
        m = null;
    f.onMessage(function(e) {
        (0, s.default)(e)
    }), window.addEventListener("load", function() {
        "serviceWorker" in navigator ? navigator.serviceWorker.register("/service-worker.js").then(function(e) {
            m = e, f.useServiceWorker(e), u()
        }).catch(function(e) {}) : d.textContent = "Push not supported."
    })
}, function(e, t, n) {
    "use strict";
    Object.defineProperty(t, "__esModule", {
        value: !0
    }), t.default = function(e) {
        console.log('snack payload', e);
        var t = document.querySelector("#comments"),
            n = {
                message: e.notification.title,
                timeout: 5e3,
                actionHandler: function(e) {
                    location.reload()
                },
                actionText: "Reload"
            };
        t.MaterialSnackbar.showComments(n)
    }, n(5)
}], [0]);
