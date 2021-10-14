import { makeAuthUserUseCase } from '@/modules/users/usecases/auth-user-use-case/make-auth-user-use-case'
import { Request, Response } from 'express'

export class AuthUserController {
  public async handle (request: Request, response: Response): Promise<Response> {
    const { email, password } = request.body
    const authUserUseCase = makeAuthUserUseCase()
    const user = await authUserUseCase.handle({ email, password })
    return response.json(user)
  }
}
