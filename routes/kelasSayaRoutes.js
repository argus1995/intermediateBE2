import express from 'express'
import { getKelasSayas, getKelasSaya, createKelasSaya, updateKelasSaya, deleteKelasSaya } from '../controllers/kelasSayaController.js'

const router = express.Router()

router.get('/', getKelasSayas);
router.get('/:id', getKelasSaya);
router.post('/', createKelasSaya);
router.put('/:id', updateKelasSaya);
router.delete('/:id', deleteKelasSaya);

export default router;