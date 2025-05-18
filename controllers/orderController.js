import * as Order from '../models/orderModel.js'

export const getOrders = async (req, res, next) => {
    try {
        const [rows] = await Order.getAll()
        res.json(rows)
    } catch (err) {
        next(err)
    }
}

export const getOrder = async (req, res, next) => {
    try {
        const [rows] = await Order.getById(req.params.id)
        res.json(rows[0] || {})
    } catch (err) {
        next(err)
    }
}

export const createOrder = async (req, res, next) => {
    try {
        const { user_id, tgl, total_harga, status } = req.body
        if (!user_id || !tgl || !total_harga || !status) return res.status(400).json({ error: 'Missing required fields'})
        await Order.create({ user_id, tgl, total_harga, status })
        res.status(201).json({ message: 'Order created' })
    } catch (err) {
        next(err)
    }
}

export const updateOrder = async (req, res, next) => {
    try {
        const { user_id, tgl, total_harga, status } = req.body
        if (!user_id || !tgl || !total_harga || !status) return res.status(400).json({ error: 'Missing required fields'})
        await Order.update(req.params.id, { user_id, tgl, total_harga, status })
        res.json({ message: 'Order upadated' })
    } catch (err) {
        next(err)
    }
}

export const deleteOrder = async (req, res, next) => {
  try {
    await Order.remove(req.params.id);
    res.json({ message: 'Order deleted' });
  } catch (err) {
    next(err);
  }
};