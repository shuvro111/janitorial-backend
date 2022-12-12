"use strict";

var _bodyParser = _interopRequireDefault(require("body-parser"));
var _cors = _interopRequireDefault(require("cors"));
var _dotenv = _interopRequireDefault(require("dotenv"));
var _express = _interopRequireDefault(require("express"));
var _mongoose = _interopRequireDefault(require("mongoose"));
var _config = require("./config/config");
var _routes = _interopRequireDefault(require("./routes"));
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }
_dotenv["default"].config();
var app = (0, _express["default"])();
app.use((0, _cors["default"])());
app.enable('trust proxy');
app.use(_bodyParser["default"].json({
  type: '*/*'
}));
app.use('/api', _routes["default"]);
app.all('/', function (req, res) {
  console.log('Just got a request!');
  res.send('Yo!');
});
_mongoose["default"].set('strictQuery', false);
_mongoose["default"].connect(_config.db, {
  useNewUrlParser: true,
  useUnifiedTopology: true
}, function () {
  app.listen(_config.port, function () {
    console.log("Server started on   + ".concat(_config.port));
  });
});