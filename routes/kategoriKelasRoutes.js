import express from 'express'
import { getKategoriKelass, getKategoriKelas, createKategoriKelas, updateKategoriKelas, deleteKategoriKelas } from '../controllers/kategoriKelasController.js'
import verifyToken from '../middleware/authMiddleware.js';

const router = express.Router()

router.get('/', verifyToken, getKategoriKelass);
router.get('/:id', verifyToken, getKategoriKelas);
router.post('/', verifyToken, createKategoriKelas);
router.put('/:id', verifyToken, updateKategoriKelas);
router.delete('/:id', verifyToken, deleteKategoriKelas);

export default router;