import db from '../config/db.js'

export const getAll = () => db.query('SELECT * FROM kelas_saya')
export const getById = (id) => db.query('SELECT * FROM kelas_saya WHERE kelas_saya_id = ?', [id])
export const create = (data) => db.query('INSERT INTO kelas_saya (progres, user_id, kelas_id) VALUES (?, ?, ?)', [data.progres, data.user_id, data.kelas_id])
export const update = (id, data) => db.query('UPDATE kelas_saya SET progres = ?, user_id = ?, kelas_id = ? WHERE kelas_saya_id = ?', [data.progres, data.user_id, data.kelas_id, id])
export const remove = (id) => db.query('DELETE FROM kelas_saya WHERE kelas_saya_id = ?', [id])


