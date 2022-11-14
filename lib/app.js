"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;
var _auth = _interopRequireDefault(require("./routes/auth.routes"));
var _subs = _interopRequireDefault(require("./routes/subs.routes"));
var _cors = _interopRequireDefault(require("cors"));
var _initialSetup = require("./libs/initialSetup");
var _login = _interopRequireDefault(require("./routes/login.routes"));
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }
if (process.env.NODE_ENV !== 'production') {
  require('dotenv').config();
}
var express = require('express');
var app = express();
var path = require('path');
(0, _initialSetup.createRoles)();
app.use(express.json());
app.use(express["static"]('./dist'));
app.use(express["static"]('./src/public'));
app.use(express["static"](path.join(__dirname, 'public')));
app.use((0, _cors["default"])());
app.get('/', function (req, res) {
  res.sendFile(path.resolve(__dirname, '../dist/index.html'));
});
app.get('/login', function (req, res) {
  res.sendFile(path.resolve(__dirname, '../dist/login.html'));
});
app.use('/api/auth', _auth["default"]);
app.use('/api/subs', _subs["default"]);
var _default = app;
exports["default"] = _default;