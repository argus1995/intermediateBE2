import express from 'express'
import { getMaterials, getMaterial, createMaterial, updateMaterial, deleteMaterial } from '../controllers/materialController.js'
import verifyToken from '../middleware/authMiddleware.js';

const router = express.Router()

router.get('/', verifyToken, getMaterials);
router.get('/:id', verifyToken, getMaterial);
router.post('/', verifyToken, createMaterial);
router.put('/:id', verifyToken, updateMaterial);
router.delete('/:id', verifyToken, deleteMaterial);

export default router;