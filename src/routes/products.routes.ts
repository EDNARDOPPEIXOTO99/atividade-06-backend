import { Router, Request, Response } from 'express'

const productsRouter = Router()

type Product = {
  id: number
  name: string
  category: string
  price: number
}

const products: Product[] = [
  { id: 1, name: 'Notebook Dell', category: 'eletronicos', price: 3500 },
  { id: 2, name: 'Mouse Gamer', category: 'eletronicos', price: 150 },
  { id: 3, name: 'Cadeira Escritório', category: 'moveis', price: 700 },
  { id: 4, name: 'Mesa Gamer', category: 'moveis', price: 1200 },
]

productsRouter.get('/', (req: Request, res: Response) => {
  const { category } = req.query

  if (category) {
    const filteredProducts = products.filter(
      product => product.category === String(category)
    )

    return res.status(200).json(filteredProducts)
  }

  return res.status(200).json(products)
})

productsRouter.get('/:id', (req: Request, res: Response) => {
  const { id } = req.params
  const productId = Number(id)

  if (productId < 0) {
    return res.status(400).json({
      error: 'O ID do produto não pode ser negativo.',
    })
  }

  const product = products.find(product => product.id === productId)

  if (!product) {
    return res.status(404).json({
      error: 'Produto não encontrado.',
    })
  }

  return res.status(200).json(product)
})

export default productsRouter