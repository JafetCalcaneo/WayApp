"use strict";

var _mongoose = _interopRequireDefault(require("mongoose"));
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }
_mongoose["default"].connect('mongodb://localhost/wayappdb', {
  useNewUrlParser: true,
  useUnifiedTopology: true
}).then(function (db) {
  return console.log('WayApp DB Connected');
})["catch"](function (error) {
  return console.log(error);
});