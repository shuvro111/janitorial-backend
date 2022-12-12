"use strict";

var _express = _interopRequireDefault(require("express"));
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }
var app = (0, _express["default"])();
app.all("/", function (req, res) {
  console.log("Just got a request!");
  res.send("Yo!");
});
app.listen(process.env.PORT || 3000);