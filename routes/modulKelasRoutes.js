import express from 'express'
import { getModulKelass, getModulKelas, createModulKelas, updateModulKelas, deleteModulKelas } from '../controllers/modulKelasController.js'
import verifyToken from '../middleware/authMiddleware.js';

const router = express.Router()

router.get('/', verifyToken, getModulKelass);
router.get('/:id', verifyToken, getModulKelas);
router.post('/', verifyToken, createModulKelas);
router.put('/:id', verifyToken, updateModulKelas);
router.delete('/:id', verifyToken, deleteModulKelas);

export default router;