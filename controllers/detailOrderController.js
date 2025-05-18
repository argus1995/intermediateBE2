import * as DetailOrder from '../models/detailOrderModel.js'

export const getDetailOrders = async (req, res, next) => {
    try {
        const [rows] = await DetailOrder.getAll()
        res.json(rows)
    } catch (err) {
        next(err)
    }
}

export const getDetailOrder = async (req, res, next) => {
    try {
        const [rows] = await DetailOrder.getById(req.params.id)
        res.json(rows[0] || {})
    } catch (err) {
        next(err)
    }
}

export const createDetailOrder = async (req, res, next) => {
    try {
        const { order_id, kelas_id } = req.body
        if (!order_id || !kelas_id ) return res.status(400).json({ error: 'Missing required fields'})
        await DetailOrder.create({ order_id, kelas_id })
        res.status(201).json({ message: 'Detail Order created' })
    } catch (err) {
        next(err)
    }
}

export const updateDetailOrder = async (req, res, next) => {
    try {
        const { order_id, kelas_id } = req.body
        if (!order_id || !kelas_id ) return res.status(400).json({ error: 'Missing required fields'})
        await DetailOrder.update(req.params.id, { order_id, kelas_id })
        res.json({ message: 'Detail Order updated' })
    } catch (err) {
        next(err)
    }
}

export const deleteDetailOrder = async (req, res, next) => {
  try {
    await DetailOrder.remove(req.params.id);
    res.json({ message: 'Detail Order deleted' });
  } catch (err) {
    next(err);
  }
};