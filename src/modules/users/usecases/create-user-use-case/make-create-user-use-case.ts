import { BcryptHashProvider } from '@/shared/providers/hash-provider/implementations/bcrypt-hash-provider'
import { JsonWebTokenProvider } from '@/shared/providers/token-provider/implementations/json-web-token-provider'
import { TypeOrmUsersRepository } from '../../infra/typeorm/repositories/typeorm-users-repository'
import { CreateUserUseCase } from './create-user'

export const makeCreateUserUseCase = (): CreateUserUseCase => {
  const usersRepository = new TypeOrmUsersRepository()
  const hashProvider = new BcryptHashProvider()
  const tokenProvider = new JsonWebTokenProvider()

  const createUserUseCase = new CreateUserUseCase(
    usersRepository,
    hashProvider,
    tokenProvider
  )

  return createUserUseCase
}
