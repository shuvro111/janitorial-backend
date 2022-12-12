"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.requireAuth = exports.isAuthenticated = void 0;
var _passport = _interopRequireDefault(require("passport"));
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }
var isAuthenticated = function isAuthenticated(req, res, next) {
  _passport["default"].authenticate('jwt', {}, function (err, user) {
    if (err) {
      return next(err);
    }
    if (!user) {
      res.json({
        status: 401,
        success: false,
        message: 'Unauthorized user',
        data: req.logIn
      });
    }
    return res.json({
      status: 200,
      success: true,
      data: {
        name: user.name,
        email: user.email,
        role: user.role || 'client'
      }
    });
  })(req, res, next);
};
exports.isAuthenticated = isAuthenticated;
var requireAuth = function requireAuth(roles) {
  return function (req, res, next) {
    _passport["default"].authenticate('jwt', {}, function (err, user) {
      if (err) {
        return next(err);
      }
      if (!user || !roles.includes(user.role)) {
        return res.redirect('https://google.com');
      }
      next();
    })(req, res, next);
  };
};
exports.requireAuth = requireAuth;