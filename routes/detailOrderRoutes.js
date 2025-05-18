import express from 'express'
import { getDetailOrders, getDetailOrder, createDetailOrder, updateDetailOrder, deleteDetailOrder } from '../controllers/detailOrderController.js'

const router = express.Router()

router.get('/', getDetailOrders);
router.get('/:id', getDetailOrder);
router.post('/', createDetailOrder);
router.put('/:id', updateDetailOrder);
router.delete('/:id', deleteDetailOrder);

export default router;