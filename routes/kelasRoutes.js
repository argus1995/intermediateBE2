import express from 'express'
import { getKelass, getKelas, createKelas, updateKelas, deleteKelas } from '../controllers/kelasController.js'

const router = express.Router()

router.get('/', getKelass);
router.get('/:id', getKelas);
router.post('/', createKelas);
router.put('/:id', updateKelas);
router.delete('/:id', deleteKelas);

export default router;