import { UsersRepository } from '@/modules/users/repositories/users-repository'
import { AppError } from '@/shared/errors/app-error'
import { UseCase } from '@/shared/usecase/use-case'
import { Movie } from '../../infra/typeorm/entities/movie'
import { FavoritesRepository } from '../../repositories/favorites-repository'

export class ListUserFavorites implements UseCase {
  constructor (
    private readonly usersRepository: UsersRepository,
    private readonly favoritesRepository: FavoritesRepository
  ) {}

  public async handle (userId: string): Promise<Movie[]> {
    const user = await this.usersRepository.findById(userId)

    if (!user) {
      throw new AppError('not-found', 'user-not-found', 404)
    }

    const userFavorites = await this.favoritesRepository.findByUserId(userId)

    return userFavorites.map(userFavorite => userFavorite.movie)
  }
}
