import db from '../config/db.js'

export const getAll = () => db.query('SELECT * FROM review')
export const getById = (id) => db.query('SELECT * FROM review WHERE review_id = ?', [id])
export const create = (data) => db.query('INSERT INTO review (rating, komentar, user_id, kelas_id) VALUES (?, ?, ?, ?)', [data.rating, data.komentar, data.user_id, data.kelas_id])
export const update = (id, data) => db.query('UPDATE review SET rating = ?, komentar = ?, user_id = ?, kelas_id = ? WHERE review_id = ?', [data.rating, data.komentar, data.user_id, data.kelas_id, id])
export const remove = (id) => db.query('DELETE FROM review WHERE review_id = ?', [id])


