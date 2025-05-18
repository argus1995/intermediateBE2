import * as Pretest from '../models/pretestModel.js'

export const getPretests = async (req, res, next) => {
    try {
        const [rows] = await Pretest.getAll()
        res.json(rows)
    } catch (err) {
        next(err)
    }
}

export const getPretest = async (req, res, next) => {
    try {
        const [rows] = await Pretest.getById(req.params.id)
        res.json(rows[0] || {})
    } catch (err) {
        next(err)
    }
}

export const createPretest = async (req, res, next) => {
    try {
        const { kelas_id, soal, jawaban } = req.body
        if (!kelas_id || !soal || !jawaban) return res.status(400).json({ error: 'Missing required fields'})
        await Pretest.create({ kelas_id, soal, jawaban })
        res.status(201).json({ message: 'Pretest created' })
    } catch (err) {
        next(err)
    }
}

export const updatePretest = async (req, res, next) => {
    try {
        const { kelas_id, soal, jawaban } = req.body
        if (!kelas_id || !soal || !jawaban) return res.status(400).json({ error: 'Missing required fields'})
        await Pretest.update(req.params.id, { kelas_id, soal, jawaban })
        res.json({ message: 'Pretest updated' })
    } catch (err) {
        next(err)
    }
}

export const deletePretest = async (req, res, next) => {
  try {
    await Pretest.remove(req.params.id);
    res.json({ message: 'Pretest deleted' });
  } catch (err) {
    next(err);
  }
};