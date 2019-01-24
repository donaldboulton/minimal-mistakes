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
/******/ 	return __webpack_require__(__webpack_require__.s = 683);
/******/ })
/************************************************************************/
/******/ ({

/***/ 15:
/***/ (function(module, exports) {

module.exports = require("https");

/***/ }),

/***/ 683:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var https = __webpack_require__(15);

exports.handler = function (event, context, callback) {
    var body = JSON.parse(event.body);

    if (body != null && body.data != null) {
        var data = body.data;

        var message = `New review from ${data.email} \n ${data.name}: ${data.message}`;
        var attach = [{
            "title": "Review ID",
            "text": body.id
        }, {
            "title": "Do you want to keep the review?",
            "text": message,
            "fallback": "You can't take actions for this review.",
            "callback_id": "answer_netlify",
            "color": "#3AA3E3",
            "attachment_type": "default",
            "actions": [{
                "name": "response",
                "text": "Keep",
                "type": "button",
                "value": "keep"
            }, {
                "name": "response",
                "text": "Reject",
                "type": "button",
                "style": "danger",
                "value": "reject",
                "confirm": {
                    "title": "Are you sure?",
                    "text": "Once it's done the review will be deleted",
                    "ok_text": "Yes",
                    "dismiss_text": "No"
                }
            }]
        }];

        var postData = JSON.stringify({
            attachments: attach
        });

        var options = {
            hostname: 'hooks.slack.com',
            port: 443,
            path: process.env.slack_webhook_url,
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            }
        };

        var req = https.request(options, function (res) {

            res.setEncoding('utf8');

            res.on('end', function () {
                callback(null, {
                    statusCode: 200
                });
            });
        });

        req.on('error', function (e) {
            console.log('Problem with request:', e.message);
        });

        req.write(postData);
        req.end();

        callback(null, {
            statusCode: 200
        });
    }
};

/***/ })

/******/ })));