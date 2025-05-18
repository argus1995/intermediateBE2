import express from 'express'
import { getTutors, getTutor, createTutor, updateTutor, deleteTutor } from '../controllers/tutorController.js'

const router = express.Router()

router.get('/', getTutors);
router.get('/:id', getTutor);
router.post('/', createTutor);
router.put('/:id', updateTutor);
router.delete('/:id', deleteTutor);

export default router;