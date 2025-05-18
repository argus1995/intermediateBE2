import db from '../config/db.js'

export const getAll = () => db.query('SELECT * FROM tb_order')
export const getById = (id) => db.query('SELECT * FROM tb_order WHERE order_id = ?', [id])
export const create = (data) => db.query('INSERT INTO tb_order (user_id, tgl, total_harga, status) VALUES (?, ?, ?, ?)', [data.user_id, data.tgl, data.total_harga, data.status])
export const update = (id, data) => db.query('UPDATE tb_order SET user_id = ?, tgl = ?, total_harga = ?, status = ? WHERE order_id = ?', [data.user_id, data.tgl, data.total_harga, data.status, id])
export const remove = (id) => db.query('DELETE FROM tb_order WHERE order_id = ?', [id])


