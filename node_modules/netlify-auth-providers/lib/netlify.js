(function (global, factory) {
  if (typeof define === "function" && define.amd) {
    define(["exports"], factory);
  } else if (typeof exports !== "undefined") {
    factory(exports);
  } else {
    var mod = {
      exports: {}
    };
    factory(mod.exports);
    global.netlify = mod.exports;
  }
})(this, function (exports) {
  "use strict";

  Object.defineProperty(exports, "__esModule", {
    value: true
  });

  function _classCallCheck(instance, Constructor) {
    if (!(instance instanceof Constructor)) {
      throw new TypeError("Cannot call a class as a function");
    }
  }

  var _createClass = function () {
    function defineProperties(target, props) {
      for (var i = 0; i < props.length; i++) {
        var descriptor = props[i];
        descriptor.enumerable = descriptor.enumerable || false;
        descriptor.configurable = true;
        if ("value" in descriptor) descriptor.writable = true;
        Object.defineProperty(target, descriptor.key, descriptor);
      }
    }

    return function (Constructor, protoProps, staticProps) {
      if (protoProps) defineProperties(Constructor.prototype, protoProps);
      if (staticProps) defineProperties(Constructor, staticProps);
      return Constructor;
    };
  }();

  var NETLIFY_API = "https://api.netlify.com";

  var NetlifyError = function () {
    function NetlifyError(err) {
      _classCallCheck(this, NetlifyError);

      this.err = err;
    }

    _createClass(NetlifyError, [{
      key: "toString",
      value: function toString() {
        return this.err && this.err.message;
      }
    }]);

    return NetlifyError;
  }();

  var PROVIDERS = {
    github: {
      width: 960,
      height: 600
    },
    gitlab: {
      width: 960,
      height: 600
    },
    bitbucket: {
      width: 960,
      height: 500
    },
    email: {
      width: 500,
      height: 400
    }
  };

  var Authenticator = function () {
    function Authenticator(config) {
      _classCallCheck(this, Authenticator);

      this.site_id = config.site_id;
      this.base_url = config.base_url || NETLIFY_API;
    }

    _createClass(Authenticator, [{
      key: "handshakeCallback",
      value: function handshakeCallback(options, cb) {
        var _this = this;

        var fn = function fn(e) {
          if (e.data === "authorizing:" + options.provider && e.origin === _this.base_url) {
            window.removeEventListener("message", fn, false);
            window.addEventListener("message", _this.authorizeCallback(options, cb), false);
            return _this.authWindow.postMessage(e.data, e.origin);
          }
        };
        return fn;
      }
    }, {
      key: "authorizeCallback",
      value: function authorizeCallback(options, cb) {
        var _this2 = this;

        var fn = function fn(e) {
          var data, err;
          if (e.origin !== _this2.base_url) {
            return;
          }
          if (e.data.indexOf("authorization:" + options.provider + ":success:") === 0) {
            data = JSON.parse(e.data.match(new RegExp("^authorization:" + options.provider + ":success:(.+)$"))[1]);
            window.removeEventListener("message", fn, false);
            _this2.authWindow.close();
            cb(null, data);
          }
          if (e.data.indexOf("authorization:" + options.provider + ":error:") === 0) {
            err = JSON.parse(e.data.match(new RegExp("^authorization:" + options.provider + ":error:(.+)$"))[1]);
            window.removeEventListener("message", fn, false);
            _this2.authWindow.close();
            cb(new NetlifyError(err));
          }
        };
        return fn;
      }
    }, {
      key: "getSiteID",
      value: function getSiteID() {
        if (this.site_id) {
          return this.site_id;
        }
        var host = document.location.host.split(":")[0];
        return host === "localhost" ? null : host;
      }
    }, {
      key: "authenticate",
      value: function authenticate(options, cb) {
        var left,
            top,
            url,
            siteID = this.getSiteID(),
            provider = options.provider;
        if (!provider) {
          return cb(new NetlifyError({
            message: "You must specify a provider when calling netlify.authenticate"
          }));
        }
        if (!siteID) {
          return cb(new NetlifyError({
            message: "You must set a site_id with netlify.configure({site_id: \"your-site-id\"}) to make authentication work from localhost"
          }));
        }

        var conf = PROVIDERS[provider] || PROVIDERS.github;
        left = screen.width / 2 - conf.width / 2;
        top = screen.height / 2 - conf.height / 2;
        window.addEventListener("message", this.handshakeCallback(options, cb), false);
        url = this.base_url + "/auth?provider=" + options.provider + "&site_id=" + siteID;
        if (options.scope) {
          url += "&scope=" + options.scope;
        }
        if (options.login === true) {
          url += "&login=true";
        }
        if (options.beta_invite) {
          url += "&beta_invite=" + options.beta_invite;
        }
        if (options.invite_code) {
          url += "&invite_code=" + options.invite_code;
        }
        this.authWindow = window.open(url, "Netlify Authorization", "toolbar=no, location=no, directories=no, status=no, menubar=no, scrollbars=no, resizable=no, copyhistory=no, " + ("width=" + conf.width + ", height=" + conf.height + ", top=" + top + ", left=" + left + ");"));
        this.authWindow.focus();
      }
    }]);

    return Authenticator;
  }();

  exports.default = Authenticator;
});