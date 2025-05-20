import express from 'express'
import { getPretests, getPretest, createPretest, updatePretest, deletePretest } from '../controllers/pretestController.js'
import verifyToken from '../middleware/authMiddleware.js'

const router = express.Router()

router.get('/', verifyToken, getPretests);
router.get('/:id', verifyToken, getPretest);
router.post('/', verifyToken, createPretest);
router.put('/:id', verifyToken, updatePretest);
router.delete('/:id', verifyToken, deletePretest);

export default router;