(function(e, a) { for(var i in a) e[i] = a[i]; }(exports, /******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, {
/******/ 				configurable: false,
/******/ 				enumerable: true,
/******/ 				get: getter
/******/ 			});
/******/ 		}
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 252);
/******/ })
/************************************************************************/
/******/ ({

/***/ 252:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

const https = __webpack_require__(9);

exports.handler = function (event, context, callback) {
    var id = event.queryStringParameters.id;
    var token = process.env.netlify_access_token;

    if (id == undefined) {
        callback('A product id must be specified.', {
            statusCode: 500
        });
    }

    var options = {
        hostname: 'api.netlify.com',
        port: 443,
        method: 'GET',
        headers: {
            'Content-Type': 'application/json'
        }
    };

    var queryToken = `access_token=${token}`;
    var opts1 = _extends({}, options, { path: `/api/v1/sites/${process.env.site_id}/forms?${queryToken}` });

    var req = https.request(opts1, function (res) {

        res.setEncoding('utf8');
        var body = "";

        res.on('data', data => {
            body += data;
        });

        res.on('end', function () {
            body = JSON.parse(body);

            var form = body.filter(x => x.name == `product-${id}`)[0];
            var opts2 = _extends({}, options, { path: `/api/v1/forms/${form.id}/submissions?${queryToken}` });

            var req2 = https.request(opts2, function (res2) {
                res2.setEncoding('utf8');
                var body2 = "";

                res2.on("data", data => {
                    body2 += data;
                });

                res2.on('end', function () {
                    callback(null, {
                        statusCode: 200,
                        headers: {
                            "Access-Control-Allow-Origin": "*",
                            'Content-Type': 'application/json'
                        },
                        body: body2
                    });
                });
            });

            req2.end();
        });
    });

    req.end();
};

/***/ }),

/***/ 9:
/***/ (function(module, exports) {

module.exports = require("https");

/***/ })

/******/ })));