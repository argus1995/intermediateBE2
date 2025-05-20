import express from 'express'
import { getReviews, getReview, createReview, updateReview, deleteReview } from '../controllers/reviewController.js'
import verifyToken from '../middleware/authMiddleware.js'

const router = express.Router()

router.get('/', verifyToken, getReviews);
router.get('/:id', verifyToken, getReview);
router.post('/', verifyToken, createReview);
router.put('/:id', verifyToken, updateReview);
router.delete('/:id', verifyToken, deleteReview);

export default router;