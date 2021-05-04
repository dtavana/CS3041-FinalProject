import express from 'express';
import { course, courses } from '../../controllers/api.controller';

const router = express.Router();
router.get('/course', course);
router.get('/courses', courses);

export default router;
