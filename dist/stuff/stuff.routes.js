"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;
var _express = require("express");
var _stuff = require("../stuff/stuff.controller");
var router = (0, _express.Router)();
router.post('/create', _stuff.createStuff); // create stuff
router.get('/all', _stuff.getAllStuffs); // get all stuff
router.get('/get-by-id', _stuff.getStuffById); // get stuff by id
router.get('/get-by-email', _stuff.getStuffByEmail); // get stuff by email
router.put('/update', _stuff.updateStuff); // update stuff
router["delete"]('/delete', _stuff.deleteStuff); // delete stuff
var _default = router;
exports["default"] = _default;