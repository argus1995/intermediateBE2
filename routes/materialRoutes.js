import express from 'express'
import { getMaterials, getMaterial, createMaterial, updateMaterial, deleteMaterial } from '../controllers/materialController.js'

const router = express.Router()

router.get('/', getMaterials);
router.get('/:id', getMaterial);
router.post('/', createMaterial);
router.put('/:id', updateMaterial);
router.delete('/:id', deleteMaterial);

export default router;