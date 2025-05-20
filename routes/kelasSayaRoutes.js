import express from 'express'
import { getKelasSayas, getKelasSaya, createKelasSaya, updateKelasSaya, deleteKelasSaya } from '../controllers/kelasSayaController.js'
import verifyToken from '../middleware/authMiddleware.js';

const router = express.Router()

router.get('/', verifyToken, getKelasSayas);
router.get('/:id', verifyToken, getKelasSaya);
router.post('/', verifyToken, createKelasSaya);
router.put('/:id', verifyToken, updateKelasSaya);
router.delete('/:id', verifyToken, deleteKelasSaya);

export default router;