import { Router } from 'express';
import authRouter from './auth/auth.routes';
import clientRouter from './client/client.routes';
import leadRouter from './lead/lead.routes';
import statsRouter from './stats/stats.routes';
import stuffRouter from './stuff/stuff.routes';

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
