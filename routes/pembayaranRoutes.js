import express from 'express'
import { getPembayarans, getPembayaran, createPembayaran, updatePembayaran, deletePembayaran } from '../controllers/pembayaranController.js'
import verifyToken from '../middleware/authMiddleware.js';

const router = express.Router()

router.get('/', verifyToken, getPembayarans);
router.get('/:id', verifyToken, getPembayaran);
router.post('/', verifyToken, createPembayaran);
router.put('/:id', verifyToken, updatePembayaran);
router.delete('/:id', verifyToken, deletePembayaran);

export default router;