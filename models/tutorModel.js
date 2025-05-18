import db from '../config/db.js'

export const getAll = () => db.query('SELECT * FROM tutor')
export const getById = (id) => db.query('SELECT * FROM tutor WHERE tutor_id = ?', [id])
export const create = (data) => db.query('INSERT INTO tutor (nama_tutor) VALUES (?)', [data.nama_tutor])
export const update = (id, data) => db.query('UPDATE tutor SET nama_tutor = ? WHERE tutor_id = ?', [data.nama_tutor, id])
export const remove = (id) => db.query('DELETE FROM tutor WHERE tutor_id = ?', [id])


