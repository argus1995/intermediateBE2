import * as Kelas from '../models/kelasModel.js'

export const getKelass = async (req, res, next) => {
    try {
        const [rows] = await Kelas.getAll()
        res.json(rows)
    } catch (err) {
        next(err)
    }
}

export const getKelas = async (req, res, next) => {
    try {
        const [rows] = await Kelas.getById(req.params.id)
        res.json(rows[0] || {})
    } catch (err) {
        next(err)
    }
}

export const createKelas = async (req, res, next) => {
    try {
        const { nama_kelas, kategori_id, tutor_id, harga } = req.body
        if (!nama_kelas || !kategori_id || !tutor_id || !harga) return res.status(400).json({ error: 'Missing required fields'})
        await Kelas.create({ nama_kelas, kategori_id, tutor_id, harga })
        res.status(201).json({ message: 'Kelas created' })
    } catch (err) {
        next(err)
    }
}

export const updateKelas = async (req, res, next) => {
    try {
        const { nama_kelas, kategori_id, tutor_id, harga } = req.body
        if (!nama_kelas || !kategori_id || !tutor_id || !harga) return res.status(400).json({ error: 'Missing required fields'})
        await Kelas.update(req.params.id, { nama_kelas, kategori_id, tutor_id, harga })
        res.json({ message: 'Kelas upadated' })
    } catch (err) {
        next(err)
    }
}

export const deleteKelas = async (req, res, next) => {
  try {
    await Kelas.remove(req.params.id);
    res.json({ message: 'Kelas deleted' });
  } catch (err) {
    next(err);
  }
};