import * as Tutor from '../models/tutorModel.js'

export const getTutors = async (req, res, next) => {
    try {
        const [rows] = await Tutor.getAll()
        res.json(rows)
    } catch (err) {
        next(err)
    }
}

export const getTutor = async (req, res, next) => {
    try {
        const [rows] = await Tutor.getById(req.params.id)
        res.json(rows[0] || {})
    } catch (err) {
        next(err)
    }
}

export const createTutor = async (req, res, next) => {
    try {
        const { nama_tutor } = req.body
        if (!nama_tutor) return res.status(400).json({ error: 'Missing required fields'})
        await Tutor.create({ nama_tutor })
        res.status(201).json({ message: 'Tutor created' })
    } catch (err) {
        next(err)
    }
}

export const updateTutor = async (req, res, next) => {
    try {
        const { nama_tutor } = req.body
        if (!nama_tutor) return res.status(400).json({ error: 'Missing required fields'})
        await Tutor.update(req.params.id, { nama_tutor })
        res.json({ message: 'Tutor upadated' })
    } catch (err) {
        next(err)
    }
}

export const deleteTutor = async (req, res, next) => {
  try {
    await Tutor.remove(req.params.id);
    res.json({ message: 'Tutor deleted' });
  } catch (err) {
    next(err);
  }
};