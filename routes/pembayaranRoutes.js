import express from 'express'
import { getPembayarans, getPembayaran, createPembayaran, updatePembayaran, deletePembayaran } from '../controllers/pembayaranController.js'

const router = express.Router()

router.get('/', getPembayarans);
router.get('/:id', getPembayaran);
router.post('/', createPembayaran);
router.put('/:id', updatePembayaran);
router.delete('/:id', deletePembayaran);

export default router;