"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;
var _express = require("express");
var _lead = require("../lead/lead.controller");
var router = (0, _express.Router)();
router.post('/create', _lead.createLead); // create lead
router.post('/import', _lead.importLead); // create lead
router.get('/all', _lead.getAllLeads); // get all lead
router.get('/verified', _lead.getVerifiedLeads); // get all lead
router.get('/get-by-id', _lead.getLeadById); // get lead by id
router.get('/get-by-email', _lead.getLeadsByEmail); // get lead by id
router.get('/get-by-campaign', _lead.getLeadsByCampaign); // get lead by campaign
router.get('/get-by-agent', _lead.getLeadsByAgent); // get lead by agent
router.get('/get-by-daterange', _lead.getLeadsByDaterange); // get lead by agent
router.put('/update', _lead.updateLead); // update lead
router.put('/verify', _lead.verifyLead); // verify a specific lead
router.put('/star', _lead.starLead); // star/unstar a specific lead
router.put('/verify-many', _lead.verifyMultipleLeads); // verify multiple leads
router["delete"]('/delete', _lead.deleteLead); // delete lead
router["delete"]('/deletemany', _lead.deleteMultipleLeads); // delete lead
var _default = router;
exports["default"] = _default;