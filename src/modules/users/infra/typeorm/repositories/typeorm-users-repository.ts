import { CreateUserDto } from '@/modules/users/dtos/create-user.dto'
import { UsersRepository } from '@/modules/users/repositories/users-repository'
import { getRepository } from 'typeorm'
import { v4 } from 'uuid'
import { User } from '../entities/user'

export class TypeOrmUsersRepository implements UsersRepository {
  constructor (
    private readonly repository = getRepository(User)
  ) {}

  public async save (user: User): Promise<User> {
    await this.repository.save(user)
    return user
  }

  public async create (userData: CreateUserDto): Promise<User> {
    const user = this.repository.create({
      ...userData,
      id: v4()
    })
    await this.save(user)
    return user
  }

  public async findById (id: string): Promise<User | undefined> {
    const user = await this.repository.findOne({ where: { id } })
    return user
  }

  public async findByEmail (email: string): Promise<User | undefined> {
    const user = await this.repository.findOne({ where: { email } })
    return user
  }

  public async findUserFavorites (id: string): Promise<User | undefined> {
    const user = await this.repository.findOne({ where: { id }, relations: ['favorites'] })
    return user
  }
}
