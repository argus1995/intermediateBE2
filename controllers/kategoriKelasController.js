import * as KategoriKelas from '../models/kategoriKelasModel.js'

export const getKategoriKelass = async (req, res, next) => {
    try {
        const [rows] = await KategoriKelas.getAll()
        res.json(rows)
    } catch (err) {
        next(err)
    }
}

export const getKategoriKelas = async (req, res, next) => {
    try {
        const [rows] = await KategoriKelas.getById(req.params.id)
        res.json(rows[0] || {})
    } catch (err) {
        next(err)
    }
}

export const createKategoriKelas = async (req, res, next) => {
    try {
        const { nama_kategori } = req.body
        if (!nama_kategori) return res.status(400).json({ error: 'Missing required fields'})
        await KategoriKelas.create({ nama_kategori })
        res.status(201).json({ message: 'Kategori Kelas created' })
    } catch (err) {
        next(err)
    }
}

export const updateKategoriKelas = async (req, res, next) => {
    try {
        const { nama_kategori } = req.body
        if (!nama_kategori) return res.status(400).json({ error: 'Missing required fields'})
        await KategoriKelas.update(req.params.id, { nama_kategori })
        res.json({ message: 'Kategori Kelas upadated' })
    } catch (err) {
        next(err)
    }
}

export const deleteKategoriKelas = async (req, res, next) => {
  try {
    await KategoriKelas.remove(req.params.id);
    res.json({ message: 'Kategori Kelas deleted' });
  } catch (err) {
    next(err);
  }
};