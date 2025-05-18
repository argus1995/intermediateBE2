import express from 'express'
import { getPretests, getPretest, createPretest, updatePretest, deletePretest } from '../controllers/pretestController.js'

const router = express.Router()

router.get('/', getPretests);
router.get('/:id', getPretest);
router.post('/', createPretest);
router.put('/:id', updatePretest);
router.delete('/:id', deletePretest);

export default router;