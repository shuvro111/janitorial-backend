"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;
var _express = require("express");
var _stats = require("./stats.controller");
var router = (0, _express.Router)();
router.get('/get-entity-counts', _stats.getEntityCounts); // get entity counts
router.get('/get-client-entity-counts', _stats.getClientEntityCounts); // get client entity counts
var _default = router;
exports["default"] = _default;