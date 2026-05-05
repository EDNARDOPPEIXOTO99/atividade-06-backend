import { Router, Request, Response } from 'express'
import { validateBody } from '../middlewares/validateBody'

const ordersRouter = Router()

type Order = {
  customerName: string
  productIds: number[]
}

ordersRouter.post('/', validateBody, (req: Request, res: Response) => {
  const order = req.body as Order

  return res.status(201).json({
    message: 'Pedido criado com sucesso.',
    order,
  })
})

ordersRouter.patch('/:id', (req: Request, res: Response) => {
  const { id } = req.params
  const { status } = req.body

  return res.status(200).json({
    message: 'Status do pedido atualizado com sucesso.',
    orderId: Number(id),
    status,
  })
})

ordersRouter.delete('/:id', (req: Request, res: Response) => {
  return res.status(204).send()
})

export default ordersRouter