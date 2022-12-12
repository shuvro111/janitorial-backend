"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.secret = exports.port = exports.db = exports.client = void 0;
var _dotenv = _interopRequireDefault(require("dotenv"));
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }
_dotenv["default"].config();
var port = process.env.PORT;
exports.port = port;
var db = process.env.DB;
exports.db = db;
var secret = process.env.JWT_SECRET;
exports.secret = secret;
var client = process.env.CLIENT_BASE_URL;
exports.client = client;