import * as ModulKelas from '../models/modulKelasModel.js'

export const getModulKelass = async (req, res, next) => {
    try {
        const [rows] = await ModulKelas.getAll()
        res.json(rows)
    } catch (err) {
        next(err)
    }
}

export const getModulKelas = async (req, res, next) => {
    try {
        const [rows] = await ModulKelas.getById(req.params.id)
        res.json(rows[0] || {})
    } catch (err) {
        next(err)
    }
}

export const createModulKelas = async (req, res, next) => {
    try {
        const { judul_modul, urutan, kelas_id } = req.body
        if (!judul_modul || !urutan || !kelas_id) return res.status(400).json({ error: 'Missing required fields'})
        await ModulKelas.create({ judul_modul, urutan, kelas_id })
        res.status(201).json({ message: 'Modul Kelas created' })
    } catch (err) {
        next(err)
    }
}

export const updateModulKelas = async (req, res, next) => {
    try {
        const { judul_modul, urutan, kelas_id } = req.body
        if (!judul_modul || !urutan || !kelas_id) return res.status(400).json({ error: 'Missing required fields'})
        await ModulKelas.update(req.params.id, { judul_modul, urutan, kelas_id })
        res.json({ message: 'Modul Kelas upadated' })
    } catch (err) {
        next(err)
    }
}

export const deleteModulKelas = async (req, res, next) => {
  try {
    await ModulKelas.remove(req.params.id);
    res.json({ message: 'Modul Kelas deleted' });
  } catch (err) {
    next(err);
  }
};