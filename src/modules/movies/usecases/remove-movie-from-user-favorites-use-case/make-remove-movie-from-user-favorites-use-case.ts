import { TypeormFavoritesRepository } from '../../infra/typeorm/repositories/typeorm-favorites-repository'
import { RemoveMovieFromUserFavorites } from './remove-movie-from-user-favorites'

export const makeRemoveMovieFromUserFavoritesUseCase = (): RemoveMovieFromUserFavorites => {
  const favoritesRepository = new TypeormFavoritesRepository()
  const removeMovieFromUserFavorites = new RemoveMovieFromUserFavorites(favoritesRepository)
  return removeMovieFromUserFavorites
}
