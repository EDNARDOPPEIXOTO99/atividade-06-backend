import { Request, Response, NextFunction } from 'express'

export function validateBody(req: Request, res: Response, next: NextFunction) {
  if (!req.body || Object.keys(req.body).length === 0) {
    return res.status(400).json({
      error: 'O corpo da requisição não pode estar vazio.',
    })
  }

  next()
}