import { Router } from 'express';
import authRouter from './auth/auth.routes.js';
import clientRouter from './client/client.routes.js';
import leadRouter from './lead/lead.routes.js';
import statsRouter from './stats/stats.routes.js';
import stuffRouter from './stuff/stuff.routes.js';

import './services/passport';
const router = Router();

// const requireAuth = passport.authenticate('jwt', {
//   session: false,
// });

router.use('/auth', authRouter);
router.use('/stuff', stuffRouter);
router.use('/client', clientRouter);
router.use('/lead', leadRouter);
router.use('/stats', statsRouter);

export default router;
