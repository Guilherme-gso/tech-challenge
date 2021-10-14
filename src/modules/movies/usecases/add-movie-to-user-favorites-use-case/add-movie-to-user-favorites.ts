import { UsersRepository } from '@/modules/users/repositories/users-repository'
import { AppError } from '@/shared/errors/app-error'
import { UseCase } from '@/shared/usecase/use-case'
import { AddFavoriteDto } from '../../dtos/add-favorite.dto'
import { Favorite } from '../../infra/typeorm/entities/favorite'
import { FavoritesRepository } from '../../repositories/favorites-repository'
import { MoviesRepository } from '../../repositories/movies-repository'

export class AddMovieToUserFavorites implements UseCase {
  constructor (
    private readonly favoritesRepository: FavoritesRepository,
    private readonly moviesRepository: MoviesRepository,
    private readonly usersRepository: UsersRepository
  ) {}

  public async handle (addFavorite: AddFavoriteDto): Promise<Favorite> {
    const movie = await this.moviesRepository.findByMovieId(addFavorite.movieId)
    if (!movie) throw new AppError('not-found', 'movie-not-found', 404)
    const user = await this.usersRepository.findById(addFavorite.userId)
    if (!user) throw new AppError('not-found', 'not-found-user', 404)
    const favorite = await this.favoritesRepository.favoriteExists({
      movieId: movie.id,
      userId: movie.id
    })
    if (favorite) {
      throw new AppError('already-exists', 'this movie is already in your list')
    }

    const createdFavorite = await this.favoritesRepository.add(addFavorite)
    return createdFavorite
  }
}
