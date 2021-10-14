import { AppError } from '@/shared/errors/app-error'
import { UseCase } from '@/shared/usecase/use-case'
import { RemoveFavoriteDto } from '../../dtos/remove-favorite.dto'
import { FavoritesRepository } from '../../repositories/favorites-repository'

export class RemoveMovieFromUserFavorites implements UseCase {
  constructor (
    private readonly favoritesRepository: FavoritesRepository
  ) {}

  public async handle (removeFavorite: RemoveFavoriteDto): Promise<void> {
    const favorite = await this.favoritesRepository.findById(removeFavorite.favoriteId)

    if (!favorite) {
      throw new AppError('not-found', 'favorite-not-found', 404)
    }

    await this.favoritesRepository.remove(removeFavorite)
  }
}
