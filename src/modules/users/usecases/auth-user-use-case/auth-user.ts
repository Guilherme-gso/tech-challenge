import { AppError } from '@/shared/errors/app-error'
import { HashProvider } from '@/shared/providers/hash-provider'
import { TokenProvider } from '@/shared/providers/token-provider'
import { UseCase } from '@/shared/usecase/use-case'
import { AuthUserDto } from '../../dtos/auth-user.dto'
import { UsersRepository } from '../../repositories/users-repository'
import { AuthUserResponse } from './response'

export class AuthUserUseCase implements UseCase {
  constructor (
    private readonly usersRepository: UsersRepository,
    private readonly hashProvider: HashProvider,
    private readonly tokenProvider: TokenProvider
  ) {}

  public async handle (authUser: AuthUserDto): Promise<AuthUserResponse> {
    const user = await this.usersRepository.findByEmail(authUser.email)

    if (!user) {
      throw new AppError(
        'auth-user-error',
        'incorrect email or password'
      )
    }

    const passwordIsValid = await this.hashProvider.compare({
      payload: authUser.password,
      hashedString: user.password
    })

    if (!passwordIsValid) {
      throw new AppError(
        'auth-user-error',
        'incorrect email or password'
      )
    }

    const token = this.tokenProvider.sign(user.id)

    const response = {
      token,
      userId: user.id
    }

    return response
  }
}
