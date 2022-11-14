"use strict";

var _app = _interopRequireDefault(require("./app"));
require("./db");
var _config = _interopRequireDefault(require("./config"));
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }
console.log(_config["default"]);
_app["default"].listen(_config["default"].PORT, function () {
  console.log("WayApp Connected Port: ".concat(_config["default"].PORT));
});