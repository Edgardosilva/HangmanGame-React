import express from 'express'
import puntajeRoute from './routes/puntajes.routes.js'
import cors from 'cors'

const app = express()

app.use(cors())

app.use(express.json())

app.use('/api', puntajeRoute)

app.listen(3000)
console.log('Server running on port 3000')