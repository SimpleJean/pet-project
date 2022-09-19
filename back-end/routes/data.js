import express from 'express';
import { getDashboardData, staticDashboardData } from '../controllers/data.js';

const router = express.Router();

router.route('/').get(getDashboardData);
router.route('/static').get(staticDashboardData);

export default router;
