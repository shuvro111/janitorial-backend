"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;
var _express = require("express");
var _middleware = require("../middlewares/middleware");
var _auth = require("./auth.controllers");
var router = (0, _express.Router)();
router.post('/login', _auth.signin); // Register user
router.post('/logout', _auth.logout); // Register user
router.get('/get-user-by-id', _auth.getUserById); // Get user by id
router.get('/validate', _middleware.isAuthenticated); // Validate user
router.post('/request-password-reset', _auth.requestPasswordReset); // Send password reset mail to user if user found
router.post('/reset-password', _auth.resetPassword); // Send password reset mail to user if user found
router.get('/secret', (0, _middleware.requireAuth)(['admin', 'manager', 'client']), _auth.getSecret); // Authorize user with middlewares before any requests
var _default = router;
exports["default"] = _default;