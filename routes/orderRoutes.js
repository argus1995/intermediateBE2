import express from 'express'
import { getOrders, getOrder, createOrder, updateOrder, deleteOrder } from '../controllers/orderController.js'
import verifyToken from '../middleware/authMiddleware.js';

const router = express.Router()

router.get('/', verifyToken, getOrders);
router.get('/:id', verifyToken, getOrder);
router.post('/', verifyToken, createOrder);
router.put('/:id', verifyToken, updateOrder);
router.delete('/:id', verifyToken, deleteOrder);

export default router;