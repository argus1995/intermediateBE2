import db from '../config/db.js'

export const getAll = () => db.query('SELECT * FROM user')
export const getById = (id) => db.query('SELECT * FROM user WHERE user_id = ?', [id])
export const create = (data) => db.query('INSERT INTO user (nama, email, password) VALUES (?, ?, ?)', [data.nama, data.email, data.password])
export const update = (id, data) => db.query('UPDATE user SET nama = ?, email = ?, password = ? WHERE user_id = ?', [data.nama, data.email, data.password, id])
export const remove = (id) => db.query('DELETE FROM user WHERE user_id = ?', [id])

export const getByEmail = (email) => db.query('SELECT * FROM user WHERE email = ?', [email])
