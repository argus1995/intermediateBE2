import express from 'express'
import { getKelass, getKelas, createKelas, updateKelas, deleteKelas } from '../controllers/kelasController.js'
import verifyToken from '../middleware/authMiddleware.js';

const router = express.Router()

router.get('/', verifyToken, getKelass);
router.get('/:id', verifyToken, getKelas);
router.post('/', verifyToken, createKelas);
router.put('/:id', verifyToken, updateKelas);
router.delete('/:id', verifyToken, deleteKelas);

export default router;