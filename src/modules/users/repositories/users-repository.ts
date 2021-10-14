import { CreateUserDto } from '../dtos/create-user.dto'
import { User } from '../infra/typeorm/entities/user'

export interface UsersRepository {
  create(user: CreateUserDto): Promise<User>
  findById(id: string): Promise<User | undefined>
  findByEmail(email: string): Promise<User | undefined>
  findUserFavorites(id: string): Promise<User | undefined>
}
