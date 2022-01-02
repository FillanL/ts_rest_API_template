import express from 'express';
import Healthcheck from './healthcheck.route';
import Session from './session.route';

const router = express.Router();

router.use('/healthcheck', Healthcheck); // healthcheck route;
router.use('/session', Session); // session route;

export default router;
