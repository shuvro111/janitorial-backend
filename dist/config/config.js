"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;
var _dotenv = _interopRequireDefault(require("dotenv"));
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }
_dotenv["default"].config();
var port = process.env.PORT;
var db = process.env.db;
var secret = process.env.JWT_SECRET;
var client = process.env.CLIENT_BASE_URL;
var _default = {
  port: port,
  db: db,
  secret: secret,
  client: client
};
exports["default"] = _default;