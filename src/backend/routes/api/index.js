import express from 'express';
import {
    course,
    courses,
    posting,
    postings
} from '../../controllers/api.controller';

const router = express.Router();
router.get('/course', course);
router.get('/courses', courses);
router.post('/posting', posting);
router.get('/postings', postings);

export default router;
