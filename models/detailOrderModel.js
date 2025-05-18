import db from '../config/db.js'

export const getAll = () => db.query('SELECT * FROM detail_order')
export const getById = (id) => db.query('SELECT * FROM detail_order WHERE detail_order_id = ?', [id])
export const create = (data) => db.query('INSERT INTO detail_order (order_id, kelas_id) VALUES (?, ?)', [data.order_id, data.kelas_id])
export const update = (id, data) => db.query('UPDATE detail_order SET order_id = ?, kelas_id = ? WHERE detail_order_id = ?', [data.order_id, data.kelas_id, id])
export const remove = (id) => db.query('DELETE FROM detail_order WHERE detail_order_id = ?', [id])


