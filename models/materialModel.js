import db from '../config/db.js'

export const getAll = () => db.query('SELECT * FROM material')
export const getById = (id) => db.query('SELECT * FROM material WHERE material_id = ?', [id])
export const create = (data) => db.query('INSERT INTO material (modul_id, tipe, konten) VALUES (?, ?, ?)', [data.modul_id, data.tipe, data.konten])
export const update = (id, data) => db.query('UPDATE material SET modul_id = ?, tipe = ?, konten = ? WHERE material_id = ?', [data.modul_id, data.tipe, data.konten, id])
export const remove = (id) => db.query('DELETE FROM material WHERE material_id = ?', [id])


