import express from 'express'
import { routes } from './routes/index.js'

export const app = express() 
const port = 3333

app.use(express.json())
app.use(routes)

app.listen(() => console.log(`Listening on port.`))