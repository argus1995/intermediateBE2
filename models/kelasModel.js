import db from '../config/db.js'

export const getAll = () => db.query('SELECT * FROM kelas')
export const getById = (id) => db.query('SELECT * FROM kelas WHERE kelas_id = ?', [id])
export const create = (data) => db.query('INSERT INTO kelas (nama_kelas, kategori_id, tutor_id, harga) VALUES (?, ?, ?, ?)', [data.nama_kelas, data.kategori_id, data.tutor_id, data.harga])
export const update = (id, data) => db.query('UPDATE kelas SET nama_kelas = ?, kategori_id = ?, tutor_id = ?, harga = ? WHERE kelas_id = ?', [data.nama_kelas, data.kategori_id, data.tutor_id, data.harga, id])
export const remove = (id) => db.query('DELETE FROM kelas WHERE kelas_id = ?', [id])

export const getFilteredKelas = async ({ tutor, sortBy, order, search }) => {
    let sql = `
        SELECT kelas.*, tutor.nama_tutor AS nama_tutor
        FROM kelas
        JOIN tutor ON kelas.tutor_id = tutor.tutor_id
        WHERE 1=1
    `
    const values = []

    // filter by tutor
    if (tutor) {
        sql += ' AND tutor.nama_tutor = ?'
        values.push(tutor)
    }

    // search
    if (search) {
        sql += ' AND kelas.nama_kelas LIKE ?'
        values.push(`%${search}%`)
    }

    // sort by
    const sortFields = ['kelas.nama_kelas', 'kelas.harga', 'tutor.nama_tutor']
    const safeSortBy = sortFields.includes(sortBy) ? sortBy : 'kelas.nama_kelas'

    sql += ` ORDER BY ${safeSortBy} ${order.toUpperCase() === 'ASC' ? 'ASC' : 'DESC'}`

    const [rows] = await db.query(sql, values)
    return rows
}


