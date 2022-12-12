"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.qcPermissions = exports.managerPermissions = exports.clientPermissions = exports.adminPermissions = void 0;
var menu = {
  dashboard: 'dashboard',
  createLead: 'add-lead',
  importLead: 'import-leads',
  viewLeads: 'view-leads',
  viewVerifiedLeads: 'view-verified-leads',
  createStuff: 'create-stuff',
  viewStuffs: 'view-stuff',
  createClient: 'create-client',
  viewClients: 'view-clients'
};
var dashboard = menu.dashboard,
  createLead = menu.createLead,
  importLead = menu.importLead,
  viewLeads = menu.viewLeads,
  viewVerifiedLeads = menu.viewVerifiedLeads,
  createStuff = menu.createStuff,
  viewStuffs = menu.viewStuffs,
  createClient = menu.createClient,
  viewClients = menu.viewClients;
var adminPermissions = [dashboard, createLead, importLead, viewLeads, viewVerifiedLeads, createStuff, viewStuffs, createClient, viewClients];
exports.adminPermissions = adminPermissions;
var qcPermissions = [dashboard, viewLeads, viewVerifiedLeads];
exports.qcPermissions = qcPermissions;
var managerPermissions = [dashboard, createLead, importLead, viewLeads, viewVerifiedLeads, createStuff, viewStuffs, createClient, viewClients];
exports.managerPermissions = managerPermissions;
var clientPermissions = [dashboard, viewLeads];
exports.clientPermissions = clientPermissions;