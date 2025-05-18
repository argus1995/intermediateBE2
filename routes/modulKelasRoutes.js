import express from 'express'
import { getModulKelass, getModulKelas, createModulKelas, updateModulKelas, deleteModulKelas } from '../controllers/modulKelasController.js'

const router = express.Router()

router.get('/', getModulKelass);
router.get('/:id', getModulKelas);
router.post('/', createModulKelas);
router.put('/:id', updateModulKelas);
router.delete('/:id', deleteModulKelas);

export default router;