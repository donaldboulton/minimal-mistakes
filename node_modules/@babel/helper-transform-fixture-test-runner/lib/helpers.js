"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.assertNoOwnProperties = assertNoOwnProperties;
exports.multiline = multiline;

function assertNoOwnProperties(obj) {
  expect(Object.getOwnPropertyNames(obj)).toHaveLength(0);
}

function multiline(arr) {
  return arr.join("\n");
}