import * as Pembayaran from '../models/pembayaranModel.js'

export const getPembayarans = async (req, res, next) => {
    try {
        const [rows] = await Pembayaran.getAll()
        res.json(rows)
    } catch (err) {
        next(err)
    }
}

export const getPembayaran = async (req, res, next) => {
    try {
        const [rows] = await Pembayaran.getById(req.params.id)
        res.json(rows[0] || {})
    } catch (err) {
        next(err)
    }
}

export const createPembayaran = async (req, res, next) => {
    try {
        const { order_id, metode, status, tgl_bayar } = req.body
        if (!order_id || !metode || !status || !tgl_bayar) return res.status(400).json({ error: 'Missing required fields'})
        await Pembayaran.create({ order_id, metode, status, tgl_bayar })
        res.status(201).json({ message: 'Pembayaran created' })
    } catch (err) {
        next(err)
    }
}

export const updatePembayaran = async (req, res, next) => {
    try {
        const { order_id, metode, status, tgl_bayar } = req.body
        if (!order_id || !metode || !status || !tgl_bayar) return res.status(400).json({ error: 'Missing required fields'})
        await Pembayaran.update(req.params.id, { order_id, metode, status, tgl_bayar })
        res.json({ message: 'Pembayaran updated' })
    } catch (err) {
        next(err)
    }
}

export const deletePembayaran = async (req, res, next) => {
  try {
    await Pembayaran.remove(req.params.id);
    res.json({ message: 'Pembayaran deleted' });
  } catch (err) {
    next(err);
  }
};