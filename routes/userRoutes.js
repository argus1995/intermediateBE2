import express from 'express'
import { getUsers, getUser, createUser, updateUser, deleteUser, loginUser, verifyEmail } from '../controllers/userController.js'
import verifyToken from '../middleware/authMiddleware.js'

const router = express.Router()

router.post('/', createUser)
router.post('/login', loginUser)
router.get('/verify', verifyEmail)

router.get('/', verifyToken, getUsers)
router.get('/:id', verifyToken, getUser)
router.put('/:id', verifyToken, updateUser)
router.delete('/:id', verifyToken, deleteUser)


export default router