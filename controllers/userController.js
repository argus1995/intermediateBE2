import * as User from '../models/userModel.js'

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
        await User.create({ nama, email, password })
        res.status(201).json({ message: 'User created' })
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