import db from '../config/db.js'

export const getAll = () => db.query('SELECT * FROM pretest')
export const getById = (id) => db.query('SELECT * FROM pretest WHERE pretest_id = ?', [id])
export const create = (data) => db.query('INSERT INTO pretest (kelas_id, soal, jawaban) VALUES (?, ?, ?)', [data.kelas_id, data.soal, data.jawaban])
export const update = (id, data) => db.query('UPDATE pretest SET kelas_id = ?, soal = ?, jawaban = ? WHERE pretest_id = ?', [data.kelas_id, data.soal, data.jawaban, id])
export const remove = (id) => db.query('DELETE FROM pretest WHERE pretest_id = ?', [id])


