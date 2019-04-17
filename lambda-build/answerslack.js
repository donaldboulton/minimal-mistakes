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
/******/ 	return __webpack_require__(__webpack_require__.s = 220);
/******/ })
/************************************************************************/
/******/ ({

/***/ 10:
/***/ (function(module, exports) {

module.exports = require("https");

/***/ }),

/***/ 18:
/***/ (function(module, exports) {

module.exports = require("querystring");

/***/ }),

/***/ 220:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var https = __webpack_require__(10);
var qs = __webpack_require__(18);

function getURL(href) {
    var match = href.match(/^(https?\:)\/\/(([^:\/?#]*)(?:\:([0-9]+))?)([\/]{0,1}[^?#]*)(\?[^#]*|)(#.*|)$/);
    return match && {
        href: href,
        protocol: match[1],
        host: match[2],
        hostname: match[3],
        port: match[4],
        pathname: match[5],
        search: match[6],
        hash: match[7]
    };
}

exports.handler = function (event, context, callback) {
    var json = JSON.parse(qs.parse(event.body).payload);

    var answer = json.actions[0].value;
    var access_token = process.env.netlify_access_token;
    var id = json.original_message.attachments[0].text;

    if (answer == 'reject') {
        var options = {
            hostname: 'api.netlify.com',
            port: 443,
            path: `/api/v1/submissions/${id}?access_token=${access_token}`,
            method: 'DELETE',
            headers: {
                'Content-Type': 'application/json'
            }
        };

        var req1 = https.request(options, function (res) {

            res.setEncoding('utf8');

            res.on('end', function () {
                console.log(`Comment with id: ${id} was deleted successfully.`);
            });
        });

        req1.on('error', function (e) {
            console.log('Problem with request:', e.message);
        });

        req1.end();
    }

    var postData = JSON.stringify({
        replace_original: true,
        attachments: [{
            text: answer == 'keep' ? `The comment (${id}) was approved!` : `The comment (${id}) was rejected.`
        }]
    });

    var url = getURL(json.response_url);

    var options = {
        hostname: url.hostname,
        path: url.pathname,
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
};

/***/ })

/******/ })));