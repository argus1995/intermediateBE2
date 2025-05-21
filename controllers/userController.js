import * as User from '../models/userModel.js'
import bcrypt from 'bcrypt'
import jwt from 'jsonwebtoken'
import dotenv from 'dotenv'
import { sendWelcomeEmail } from '../utils/mailer.js'
import { v4 as uuidv4 } from 'uuid'

dotenv.config()

export const getUsers = async (req, res, next) => {
    try {
        const [rows] = await User.getAll()
        res.json(rows)
    } catch (err) {
        next(err)
    }
}

export const getUser = async (req, res, next) => {
    try {
        const [rows] = await User.getById(req.params.id)
        res.json(rows[0] || {})
    } catch (err) {
        next(err)
    }
}

export const createUser = async (req, res, next) => {
    try {
        const { nama, email, password } = req.body
        if (!nama || !email || !password) return res.status(400).json({ error: 'Missing required fields'})
        
        const hashedPassword = await bcrypt.hash(password, 10)
        const verificationToken = uuidv4()

        await User.create({ nama, email, password: hashedPassword, verificationToken })

        await sendWelcomeEmail(email, nama, verificationToken)

        res.status(201).json({ message: 'User created and welcome email sent' })
    } catch (err) {
        next(err)
    }
}

export const verifyEmail = async (req, res, next) => {
    try {
        const { token } = req.query
        if (!token) {
            return res.status(400).json({ message: 'Verification token missing' })
        }

        const [rows] = await User.findUserByToken(token)
        const user = rows[0]
        if (!user) {
            return res.status(400).json({ message: 'Invalid token' })
        }

        await User.verifyUser(user.user_id)
        res.json({ message: 'Email verified successfully' })
    } catch (err) {
        next(err)
    }
}

export const updateUser = async (req, res, next) => {
    try {
        const { nama, email, password } = req.body
        if (!nama || !email || !password) return res.status(400).json({ error: 'Missing required fields'})
        await User.update(req.params.id, { nama, email, password })
        res.json({ message: 'User upadated' })
    } catch (err) {
        next(err)
    }
}

export const deleteUser = async (req, res, next) => {
  try {
    await User.remove(req.params.id);
    res.json({ message: 'User deleted' });
  } catch (err) {
    next(err);
  }
};

export const loginUser = async (req, res, next) => {
    try {
        const { email, password } = req.body
        if (!email || !password) return res.status(400).json({ error: 'Email and password are required'})

        const [users] = await User.getByEmail(email)
        const user = users[0]
        if (!user) return res.status(401).json({ error: 'Invalid credentials'})

        const passwordMatch = await bcrypt.compare(password, user.password)
        if (!passwordMatch) return res.status(401).json({ error: 'Invalid credentials' })

        const token = jwt.sign(
            { id: user.user_id, email: user.email },
            process.env.JWT_SECRET,
            { expiresIn: process.env.JWT_EXPIRES_IN || '1d' }
        )

        res.json({ message: 'Login successful', token})
    } catch (err) {
        next(err)
    }
}