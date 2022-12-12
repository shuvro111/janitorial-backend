"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;
var _express = require("express");
var _auth = _interopRequireDefault(require("./auth/auth.routes"));
var _client = _interopRequireDefault(require("./client/client.routes"));
var _lead = _interopRequireDefault(require("./lead/lead.routes"));
var _stats = _interopRequireDefault(require("./stats/stats.routes"));
var _stuff = _interopRequireDefault(require("./stuff/stuff.routes"));
require("./services/passport");
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }
var router = (0, _express.Router)();

// const requireAuth = passport.authenticate('jwt', {
//   session: false,
// });

router.use('/auth', _auth["default"]);
router.use('/stuff', _stuff["default"]);
router.use('/client', _client["default"]);
router.use('/lead', _lead["default"]);
router.use('/stats', _stats["default"]);
var _default = router;
exports["default"] = _default;