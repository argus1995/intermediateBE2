import express from 'express'
import dotenv from 'dotenv'
import userRoutes from './routes/userRoutes.js'
import errorHandler from './middleware/errorHandler.js'

dotenv.config()

const app = express()
app.use(express.json())

app.use('/api/users', userRoutes)

app.use(errorHandler)

const PORT = process.env.PORT || 3000
app.listen(PORT, () => console.log(`Server running at http://localhost:${PORT}`))