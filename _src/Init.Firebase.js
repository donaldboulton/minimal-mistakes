"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.initializePush = initializePush;

var _firebaseConfig = require("./firebaseConfig");

var _app = require("firebase/app");

var _app2 = _interopRequireDefault(_app);

require("firebase/database");

require("firebase/storage");

require("firebase/messaging");

function _interopRequireDefault(obj) {
  return obj && obj.__esModule ? obj : { default: obj };
}

_app2.default.initializeApp(_firebaseConfig.config);

function initializePush() {
  var messaging = _app2.default.messaging();
  messaging
    .requestPermission()
    .then(function() {
      console.log("Have Permission");
      return messaging.getToken();
    })
    .then(function(token) {
      console.log("FCM Token:", token);
    })
    .catch(function(error) {
      if (error.code === "messaging/permission-blocked") {
        console.log("Please Unblock Notification Request Manually");
      } else {
        console.log("Error Occurred", error);
      }
    });
  messaging.onMessage(function(payload) {
    console.log("Notification Received", payload);
  });
}
