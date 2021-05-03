import express from 'express';
import { courses } from '../../controllers/api.controller';

const router = express.Router();
router.get('/courses', courses);

export default router;
