import * as KelasSaya from '../models/kelasSayaModel.js'

export const getKelasSayas = async (req, res, next) => {
    try {
        const [rows] = await KelasSaya.getAll()
        res.json(rows)
    } catch (err) {
        next(err)
    }
}

export const getKelasSaya = async (req, res, next) => {
    try {
        const [rows] = await KelasSaya.getById(req.params.id)
        res.json(rows[0] || {})
    } catch (err) {
        next(err)
    }
}

export const createKelasSaya = async (req, res, next) => {
    try {
        const { progres, user_id, kelas_id } = req.body
        if (!progres || !user_id || !kelas_id) return res.status(400).json({ error: 'Missing required fields'})
        await KelasSaya.create({ progres, user_id, kelas_id })
        res.status(201).json({ message: 'Kelas Saya created' })
    } catch (err) {
        next(err)
    }
}

export const updateKelasSaya = async (req, res, next) => {
    try {
        const { progres, user_id, kelas_id } = req.body
        if (!progres || !user_id || !kelas_id) return res.status(400).json({ error: 'Missing required fields'})
        await KelasSaya.update(req.params.id, { progres, user_id, kelas_id })
        res.json({ message: 'Kelas Saya updated' })
    } catch (err) {
        next(err)
    }
}

export const deleteKelasSaya = async (req, res, next) => {
  try {
    await KelasSaya.remove(req.params.id);
    res.json({ message: 'Kelas Saya deleted' });
  } catch (err) {
    next(err);
  }
};