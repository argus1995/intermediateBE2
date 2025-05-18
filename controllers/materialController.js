import * as Material from '../models/materialModel.js'

export const getMaterials = async (req, res, next) => {
    try {
        const [rows] = await Material.getAll()
        res.json(rows)
    } catch (err) {
        next(err)
    }
}

export const getMaterial = async (req, res, next) => {
    try {
        const [rows] = await Material.getById(req.params.id)
        res.json(rows[0] || {})
    } catch (err) {
        next(err)
    }
}

export const createMaterial = async (req, res, next) => {
    try {
        const { modul_id, tipe, konten } = req.body
        if (!modul_id || !tipe || !konten) return res.status(400).json({ error: 'Missing required fields'})
        await Material.create({ modul_id, tipe, konten })
        res.status(201).json({ message: 'Material created' })
    } catch (err) {
        next(err)
    }
}

export const updateMaterial = async (req, res, next) => {
    try {
        const { modul_id, tipe, konten } = req.body
        if (!modul_id || !tipe || !konten) return res.status(400).json({ error: 'Missing required fields'})
        await Material.update(req.params.id, { modul_id, tipe, konten })
        res.json({ message: 'Material updated' })
    } catch (err) {
        next(err)
    }
}

export const deleteMaterial = async (req, res, next) => {
  try {
    await Material.remove(req.params.id);
    res.json({ message: 'Material deleted' });
  } catch (err) {
    next(err);
  }
};