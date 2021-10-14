import { BcryptHashProvider } from '@/shared/providers/hash-provider/implementations/bcrypt-hash-provider'
import { JsonWebTokenProvider } from '@/shared/providers/token-provider/implementations/json-web-token-provider'
import { TypeOrmUsersRepository } from '../../infra/typeorm/repositories/typeorm-users-repository'
import { AuthUserUseCase } from './auth-user'

export const makeAuthUserUseCase = (): AuthUserUseCase => {
  const usersRepository = new TypeOrmUsersRepository()
  const hashProvider = new BcryptHashProvider()
  const tokenProvider = new JsonWebTokenProvider()

  const authUserUseCase = new AuthUserUseCase(
    usersRepository,
    hashProvider,
    tokenProvider
  )

  return authUserUseCase
}
