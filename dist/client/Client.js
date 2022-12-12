"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;
var _bcryptNodejs = _interopRequireDefault(require("bcrypt-nodejs"));
var _mongoose = _interopRequireDefault(require("mongoose"));
var _validator = _interopRequireDefault(require("validator"));
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }
var clientSchema = _mongoose["default"].Schema({
  name: {
    type: String
  },
  email: {
    type: String,
    required: true,
    unique: true,
    validate: [_validator["default"].isEmail, 'Please enter valid email address']
  },
  password: {
    type: String
  },
  campaignName: {
    type: String
  },
  companyName: {
    type: String
  },
  companyAddress: {
    type: String
  }
}, {
  timestamps: true
});

// encrypt password before saving a model
clientSchema.pre('save', function (next) {
  var client = this;
  // generating hashed password
  _bcryptNodejs["default"].genSalt(10, function (err, salt) {
    if (err) {
      return next(err);
    }
    _bcryptNodejs["default"].hash(client.password, salt, null, function (err, hash) {
      if (err) {
        return next(err);
      }
      client.password = hash;

      // proceed to saving the model
      next();
    });
  });
});
var _default = _mongoose["default"].models.Client || _mongoose["default"].model('Client', clientSchema);
exports["default"] = _default;