import express from 'express'
import dotenv from 'dotenv'
import errorHandler from './middleware/errorHandler.js'

import userRoutes from './routes/userRoutes.js'
import orderRoutes from './routes/orderRoutes.js'
import pembayaranRoutes from './routes/pembayaranRoutes.js'
import kategoriKelasRoutes from './routes/kategoriKelasRoutes.js'

dotenv.config()

const app = express()
app.use(express.json())

app.use('/api/users', userRoutes)
app.use('/api/orders', orderRoutes)
app.use('/api/pembayarans', pembayaranRoutes)
app.use('/api/kategori_kelas', kategoriKelasRoutes)

app.use(errorHandler)

const DB_PORT = process.env.DB_PORT || 3000
app.listen(DB_PORT, () => console.log(`Server running at http://localhost:${DB_PORT}`))