import { Router } from 'express';
import {
  changePassword,
  createClient,
  deleteClient,
  getAllClients,
  getClientByEmail,
  getClientById,
  updateClient,
} from '../client/client.controller';
import { requireAuth } from '../middlewares/middleware';

const router = Router();

router.post('/create', requireAuth(['admin', 'manager', 'qc']), createClient); // create client
router.get('/all', getAllClients); // get all client
router.get('/get-by-id', getClientById); // get client by id
router.get('/get-by-email', getClientByEmail); // get client by email
router.put('/update', updateClient); // update client
router.put('/change-password', changePassword); // update client
router.delete('/delete', deleteClient); // delete client

export default router;
