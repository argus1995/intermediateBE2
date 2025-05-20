import express from 'express'
import { getTutors, getTutor, createTutor, updateTutor, deleteTutor } from '../controllers/tutorController.js'
import verifyToken from '../middleware/authMiddleware.js'

const router = express.Router()

router.get('/', verifyToken, getTutors);
router.get('/:id', verifyToken, getTutor);
router.post('/', verifyToken, createTutor);
router.put('/:id', verifyToken, updateTutor);
router.delete('/:id', verifyToken, deleteTutor);

export default router;