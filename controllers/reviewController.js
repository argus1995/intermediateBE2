import * as Review from '../models/reviewModel.js'

export const getReviews = async (req, res, next) => {
    try {
        const [rows] = await Review.getAll()
        res.json(rows)
    } catch (err) {
        next(err)
    }
}

export const getReview = async (req, res, next) => {
    try {
        const [rows] = await Review.getById(req.params.id)
        res.json(rows[0] || {})
    } catch (err) {
        next(err)
    }
}

export const createReview = async (req, res, next) => {
    try {
        const { rating, komentar, user_id, kelas_id } = req.body
        if (!rating || !komentar || !user_id || !kelas_id) return res.status(400).json({ error: 'Missing required fields'})
        await Review.create({ rating, komentar, user_id, kelas_id })
        res.status(201).json({ message: 'Review created' })
    } catch (err) {
        next(err)
    }
}

export const updateReview = async (req, res, next) => {
    try {
        const { rating, komentar, user_id, kelas_id } = req.body
        if (!rating || !komentar || !user_id || !kelas_id) return res.status(400).json({ error: 'Missing required fields'})
        await Review.update(req.params.id, { rating, komentar, user_id, kelas_id })
        res.json({ message: 'Review updated' })
    } catch (err) {
        next(err)
    }
}

export const deleteReview = async (req, res, next) => {
  try {
    await Review.remove(req.params.id);
    res.json({ message: 'Review deleted' });
  } catch (err) {
    next(err);
  }
};