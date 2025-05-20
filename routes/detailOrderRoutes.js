import express from 'express'
import { getDetailOrders, getDetailOrder, createDetailOrder, updateDetailOrder, deleteDetailOrder } from '../controllers/detailOrderController.js'
import verifyToken from '../middleware/authMiddleware.js';

const router = express.Router()

router.get('/', verifyToken, getDetailOrders);
router.get('/:id', verifyToken, getDetailOrder);
router.post('/', verifyToken, createDetailOrder);
router.put('/:id', verifyToken, updateDetailOrder);
router.delete('/:id', verifyToken, deleteDetailOrder);

export default router;