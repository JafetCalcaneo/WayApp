"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;
var _authRoutes = _interopRequireDefault(require("./routes/auth.routes.js"));
var _subsRoutes = _interopRequireDefault(require("./routes/subs.routes.js"));
var _cors = _interopRequireDefault(require("cors"));
var _initialSetUp = require("./libs/initialSetUp.js");
var _login = _interopRequireDefault(require("./routes/login.routes"));
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }
if (process.env.NODE_ENV !== 'production') {
  require('dotenv').config();
}
var express = require('express');
var app = express();
var path = require('path');
(0, _initialSetUp.createRoles)();
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
app.use('/api/auth', _authRoutes["default"]);
app.use('/api/subs', _subsRoutes["default"]);
var _default = app;
exports["default"] = _default;