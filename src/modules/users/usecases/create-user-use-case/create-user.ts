import { AppError } from '@/shared/errors/app-error'
import { HashProvider } from '@/shared/providers/hash-provider'
import { TokenProvider } from '@/shared/providers/token-provider'
import { UseCase } from '@/shared/usecase/use-case'
import { CreateUserDto } from '../../dtos/create-user.dto'
import { UsersRepository } from '../../repositories/users-repository'
import { CreateUserResponse } from './response'

export class CreateUserUseCase implements UseCase {
  constructor (
    private readonly usersRepository: UsersRepository,
    private readonly hashProvider: HashProvider,
    private readonly tokenProvider: TokenProvider
  ) {}

  public async handle (userData: CreateUserDto): Promise<CreateUserResponse> {
    const userAlreadyExists = await this.usersRepository.findByEmail(userData.email)

    if (userAlreadyExists) {
      throw new AppError(
        'user-already-created',
        'there is already a user with this email'
      )
    }

    const hashedPassword = await this.hashProvider.hash(
      userData.password
    )

    const user = await this.usersRepository.create({
      ...userData,
      password: hashedPassword
    })

    const token = this.tokenProvider.sign(user.id)

    const response = {
      userId: user.id,
      token
    }

    return response
  }
}
