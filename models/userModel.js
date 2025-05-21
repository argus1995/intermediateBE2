import db from '../config/db.js'

export const getAll = () => db.query('SELECT * FROM user')
export const getById = (id) => db.query('SELECT * FROM user WHERE user_id = ?', [id])
export const create = (data) => db.query('INSERT INTO user (nama, email, password, verification_token, is_verified) VALUES (?, ?, ?, ?, ?)', [data.nama, data.email, data.password, data.verificationToken, false])
export const update = (id, data) => db.query('UPDATE user SET nama = ?, email = ?, password = ? WHERE user_id = ?', [data.nama, data.email, data.password, id])
export const remove = (id) => db.query('DELETE FROM user WHERE user_id = ?', [id])

export const getByEmail = (email) => db.query('SELECT * FROM user WHERE email = ?', [email])
export const findUserByToken = (token) => db.query('SELECT * FROM user WHERE verification_token = ?', [token])
export const verifyUser = (id) => db.query('UPDATE user SET verification_token = NULL, is_verified = true WHERE user_id = ?' , [id])
