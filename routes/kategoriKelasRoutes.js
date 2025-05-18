import express from 'express'
import { getKategoriKelass, getKategoriKelas, createKategoriKelas, updateKategoriKelas, deleteKategoriKelas } from '../controllers/kategoriKelasController.js'

const router = express.Router()

router.get('/', getKategoriKelass);
router.get('/:id', getKategoriKelas);
router.post('/', createKategoriKelas);
router.put('/:id', updateKategoriKelas);
router.delete('/:id', deleteKategoriKelas);

export default router;