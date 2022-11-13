"use strict";

var _app = _interopRequireDefault(require("./app"));
require("./db");
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }
_app["default"].listen('4000', function () {
  console.log('WayApp Connected Port:4000');
});