import { AddFavoriteDto } from '../dtos/add-favorite.dto'
import { RemoveFavoriteDto } from '../dtos/remove-favorite.dto'
import { Favorite } from '../infra/typeorm/entities/favorite'

export interface FavoritesRepository {
  add(data: AddFavoriteDto): Promise<Favorite>
  remove(data: RemoveFavoriteDto): Promise<void>
  findById(id: string): Promise<Favorite | undefined>
  findByUserId(userId: string): Promise<Favorite[]>
  favoriteExists(data: AddFavoriteDto): Promise<Favorite | undefined>;
}
