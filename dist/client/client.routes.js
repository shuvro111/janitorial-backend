"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;
var _express = require("express");
var _client = require("../client/client.controller");
var _middleware = require("../middlewares/middleware");
var router = (0, _express.Router)();
router.post('/create', (0, _middleware.requireAuth)(['admin', 'manager', 'qc']), _client.createClient); // create client
router.get('/all', _client.getAllClients); // get all client
router.get('/get-by-id', _client.getClientById); // get client by id
router.get('/get-by-email', _client.getClientByEmail); // get client by email
router.put('/update', _client.updateClient); // update client
router.put('/change-password', _client.changePassword); // update client
router["delete"]('/delete', _client.deleteClient); // delete client
var _default = router;
exports["default"] = _default;