import { AppError } from '@/shared/errors/app-error'
import { NextFunction, Request, Response } from 'express'

export function errorMiddleware (error: Error, request: Request, response: Response, _: NextFunction): Response {
  if (error instanceof AppError) {
    return response.status(error?.statusCode).json({ error: { name: error.name, message: error.message, status: error.statusCode } })
  }

  return response.status(500).json({ error: { name: 'unexpected-error', message: error.message, status: 500 } })
}
