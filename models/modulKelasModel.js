import db from '../config/db.js'

export const getAll = () => db.query('SELECT * FROM modul_kelas')
export const getById = (id) => db.query('SELECT * FROM modul_kelas WHERE modul_id = ?', [id])
export const create = (data) => db.query('INSERT INTO modul_kelas (judul_modul, urutan, kelas_id) VALUES (?, ?, ?)', [data.judul_modul, data.urutan, data.kelas_id])
export const update = (id, data) => db.query('UPDATE modul_kelas SET judul_modul = ?, urutan = ?, kelas_id = ? WHERE modul_id = ?', [data.judul_modul, data.urutan, data.kelas_id, id])
export const remove = (id) => db.query('DELETE FROM modul_kelas WHERE modul_id = ?', [id])


