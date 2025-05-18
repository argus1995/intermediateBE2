import db from '../config/db.js'

export const getAll = () => db.query('SELECT * FROM pembayaran')
export const getById = (id) => db.query('SELECT * FROM pembayaran WHERE pembayaran_id = ?', [id])
export const create = (data) => db.query('INSERT INTO pembayaran (order_id, metode, status, tgl_bayar) VALUES (?, ?, ?, ?)', [data.order_id, data.metode, data.status, data.tgl_bayar])
export const update = (id, data) => db.query('UPDATE pembayaran SET order_id = ?, metode = ?, status = ?, tgl_bayar = ? WHERE pembayaran_id = ?', [data.order_id, data.metode, data.status, data.tgl_bayar, id])
export const remove = (id) => db.query('DELETE FROM pembayaran WHERE pembayaran_id = ?', [id])


