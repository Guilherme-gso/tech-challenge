import 'dotenv/config'
import 'express-async-errors'

import express from 'express'
import http from 'http'
import swaggerUi from 'swagger-ui-express'

import { errorMiddleware } from './middlewares/error-middleware'
import { appRouter } from './routes/app.routes'

import swaggerDocumment from '../../../swagger.json'

import '../typeorm'

const app = express()
const server = http.createServer(app)

const _PORT = process.env.PORT

app.use(express.json())
app.use('/api', appRouter)
app.use('/docs', swaggerUi.serve)
app.get('/docs', swaggerUi.setup(swaggerDocumment))
app.use(errorMiddleware)

server.listen(_PORT, () => console.log(`Server running on PORT: ${_PORT}`))
