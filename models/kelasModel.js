import db from '../config/db.js'

export const getAll = () => db.query('SELECT * FROM kelas')
export const getById = (id) => db.query('SELECT * FROM kelas WHERE kelas_id = ?', [id])
export const create = (data) => db.query('INSERT INTO kelas (nama_kelas, kategori_id, tutor_id, harga) VALUES (?, ?, ?, ?)', [data.nama_kelas, data.kategori_id, data.tutor_id, data.harga])
export const update = (id, data) => db.query('UPDATE kelas SET nama_kelas = ?, kategori_id = ?, tutor_id = ?, harga = ? WHERE kelas_id = ?', [data.nama_kelas, data.kategori_id, data.tutor_id, data.harga, id])
export const remove = (id) => db.query('DELETE FROM kelas WHERE kelas_id = ?', [id])


