import express from 'express'
import cors from 'cors'
import { logger } from './middlewares/logger'
import productsRouter from './routes/products.routes'
import ordersRouter from './routes/orders.routes'

const app = express()

app.use(cors())
app.use(express.json())
app.use(logger)

app.get('/', (req, res) => {
  return res.status(200).json({
    message: 'API da Atividade 06 rodando com sucesso!',
  })
})

app.use('/products', productsRouter)
app.use('/orders', ordersRouter)

export default app