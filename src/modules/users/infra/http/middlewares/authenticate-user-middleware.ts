import { AppError } from '@/shared/errors/app-error'
import { NextFunction, Request, Response } from 'express'

import jwt from 'jsonwebtoken'

export function authenticateMiddleware (
  request: Request,
  _: Response,
  next: NextFunction
): void {
  const authHeader = request.headers.authorization

  if (!authHeader) {
    throw new AppError('token-error', 'token not provided', 401)
  }

  const [, token] = authHeader.split(' ')

  try {
    jwt.verify(token, String(process.env.APP_KEY))

    return next()
  } catch {
    throw new AppError('token-error', 'invalid token')
  }
}
