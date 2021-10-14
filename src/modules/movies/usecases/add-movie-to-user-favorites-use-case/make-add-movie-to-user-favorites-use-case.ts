import { TypeOrmUsersRepository } from '@/modules/users/infra/typeorm/repositories/typeorm-users-repository'
import { TypeormFavoritesRepository } from '../../infra/typeorm/repositories/typeorm-favorites-repository'
import { TypeOrmMoviesRepository } from '../../infra/typeorm/repositories/typeorm-movies-repository'
import { AddMovieToUserFavorites } from './add-movie-to-user-favorites'

export const makeAddMovieToUserFavoritesUseCase = (): AddMovieToUserFavorites => {
  const favoritesRepository = new TypeormFavoritesRepository()
  const moviesRepository = new TypeOrmMoviesRepository()
  const usersRepository = new TypeOrmUsersRepository()

  const usecase = new AddMovieToUserFavorites(
    favoritesRepository,
    moviesRepository,
    usersRepository
  )

  return usecase
}
