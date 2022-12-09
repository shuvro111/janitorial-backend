import { Router } from 'express';
import {
  createLead,
  deleteLead,
  deleteMultipleLeads,
  getAllLeads,
  getLeadById,
  getLeadsByAgent,
  getLeadsByCampaign,
  getLeadsByDaterange,
  getLeadsByEmail,
  getVerifiedLeads,
  importLead,
  starLead,
  updateLead,
  verifyLead,
  verifyMultipleLeads,
} from '../lead/lead.controller';

const router = Router();

router.post('/create', createLead); // create lead
router.post('/import', importLead); // create lead
router.get('/all', getAllLeads); // get all lead
router.get('/verified', getVerifiedLeads); // get all lead
router.get('/get-by-id', getLeadById); // get lead by id
router.get('/get-by-email', getLeadsByEmail); // get lead by id
router.get('/get-by-campaign', getLeadsByCampaign); // get lead by campaign
router.get('/get-by-agent', getLeadsByAgent); // get lead by agent
router.get('/get-by-daterange', getLeadsByDaterange); // get lead by agent
router.put('/update', updateLead); // update lead
router.put('/verify', verifyLead); // verify a specific lead
router.put('/star', starLead); // star/unstar a specific lead
router.put('/verify-many', verifyMultipleLeads); // verify multiple leads
router.delete('/delete', deleteLead); // delete lead
router.delete('/deletemany', deleteMultipleLeads); // delete lead

export default router;
