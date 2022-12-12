"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;
var _mongoose = _interopRequireDefault(require("mongoose"));
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }
var LeadSchema = _mongoose["default"].Schema({
  centerName: {
    type: String
  },
  campaignName: {
    type: String,
    unique: true,
    required: true
  },
  agentName: {
    type: String
  },
  companyName: {
    type: String
  },
  contactPerson: {
    type: String
  },
  companyAddress: {
    type: String
  },
  zipCode: {
    type: Number
  },
  phone: {
    type: Number
  },
  altPhone: {
    type: Number
  },
  email: {
    type: String
  },
  appointmentDate: {
    type: String
  },
  appointmentTime: {
    type: String
  },
  activelySeeking: {
    type: String
  },
  currentFrequency: {
    type: String
  },
  comments: {
    type: String
  },
  isStarred: {
    type: String
  },
  isVerified: {
    type: String
  }
}, {
  timestamps: true
});
var _default = _mongoose["default"].models.Lead || _mongoose["default"].model('Lead', LeadSchema);
exports["default"] = _default;