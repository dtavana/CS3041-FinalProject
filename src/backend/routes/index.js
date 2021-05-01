import express from 'express';
import { home, date, time } from '../controllers/view.controller';
import api from './api';

const router = express.Router();
router.use('/api', api);
router.use('/home', home);
router.use('/date', date);
router.use('/time', time);

export default router;
