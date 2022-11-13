"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;
var _mongoose = _interopRequireDefault(require("mongoose"));
var _bcryptjs = _interopRequireDefault(require("bcryptjs"));
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }
var subscriberSchema = new _mongoose["default"].Schema({
  user: [{
    type: _mongoose["default"].Schema.Types.ObjectId,
    ref: 'User'
  }]
}, {
  timestamps: true,
  versionKey: false
});

// subscriberSchema.statics.countSubs = async () => {
//     mongoose.Schema.c
// }
var _default = _mongoose["default"].model('Subscriber', subscriberSchema);
exports["default"] = _default;