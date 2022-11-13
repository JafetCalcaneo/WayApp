"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.sayHello = void 0;
var _Traveler = _interopRequireDefault(require("../models/Traveler"));
var _Role = _interopRequireDefault(require("../models/Role"));
var _jsonwebtoken = _interopRequireDefault(require("jsonwebtoken"));
var _config = _interopRequireDefault(require("../config"));
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }
var sayHello = function sayHello(req, res) {
  res.json({
    message: 'Felipe se la come :D'
  });
};
exports.sayHello = sayHello;