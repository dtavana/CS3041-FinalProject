import express from 'express';
import {
    home,
    date,
    time,
    course,
    filter,
    posting
} from '../controllers/view.controller';
import api from './api';

const router = express.Router();
router.use('/api', api);
router.use('/home', home);
router.use('/date', date);
router.use('/time', time);
router.use('/course', course);
router.use('/filter', filter);
router.use('/posting', posting);

export default router;
