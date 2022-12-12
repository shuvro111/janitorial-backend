"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;
var _bcryptNodejs = _interopRequireDefault(require("bcrypt-nodejs"));
var _mongoose = _interopRequireDefault(require("mongoose"));
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }
var Schema = _mongoose["default"].Schema;

// creating stuff schema
var stuffSchema = new Schema({
  name: {
    type: String
  },
  email: {
    type: String,
    unique: true,
    lowercase: true
  },
  password: String,
  role: {
    type: String
  }
}, {
  timestamps: true
});

// encrypt password before saving a model
stuffSchema.pre('save', function (next) {
  var stuff = this;
  // generating hashed password
  _bcryptNodejs["default"].genSalt(10, function (err, salt) {
    if (err) {
      return next(err);
    }
    _bcryptNodejs["default"].hash(stuff.password, salt, null, function (err, hash) {
      if (err) {
        return next(err);
      }
      stuff.password = hash;

      // proceed to saving the model
      next();
    });
  });
});
var _default = _mongoose["default"].models.Stuff || _mongoose["default"].model('Stuff', stuffSchema);
exports["default"] = _default;