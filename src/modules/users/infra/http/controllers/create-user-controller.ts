import { makeCreateUserUseCase } from '@/modules/users/usecases/create-user-use-case/make-create-user-use-case'
import { Request, Response } from 'express'

export class CreateUserController {
  public async handle (request: Request, response: Response): Promise<Response> {
    const { fullName, email, password } = request.body
    const createUserUseCase = makeCreateUserUseCase()
    const user = await createUserUseCase.handle({ fullName, email, password })
    return response.json(user)
  }
}
