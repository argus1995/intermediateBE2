import db from '../config/db.js'

export const getAll = () => db.query('SELECT * FROM kategori_kelas')
export const getById = (id) => db.query('SELECT * FROM kategori_kelas WHERE kategori_id = ?', [id])
export const create = (data) => db.query('INSERT INTO kategori_kelas (nama_kategori) VALUES (?)', [data.nama_kategori])
export const update = (id, data) => db.query('UPDATE kategori_kelas SET nama_kategori = ? WHERE kategori_id = ?', [data.nama_kategori, id])
export const remove = (id) => db.query('DELETE FROM kategori_kelas WHERE kategori_id = ?', [id])


