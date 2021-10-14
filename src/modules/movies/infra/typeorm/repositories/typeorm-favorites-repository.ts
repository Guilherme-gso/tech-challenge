import { AddFavoriteDto } from '@/modules/movies/dtos/add-favorite.dto'
import { RemoveFavoriteDto } from '@/modules/movies/dtos/remove-favorite.dto'
import { FavoritesRepository } from '@/modules/movies/repositories/favorites-repository'
import { AppError } from '@/shared/errors/app-error'
import { getRepository } from 'typeorm'
import { v4 } from 'uuid'
import { Favorite } from '../entities/favorite'

export class TypeormFavoritesRepository implements FavoritesRepository {
  constructor (
    private readonly repository = getRepository(Favorite)
  ) {}

  public async save (favorite: Favorite): Promise<Favorite> {
    await this.repository.save(favorite)
    return favorite
  }

  public async add (data: AddFavoriteDto): Promise<Favorite> {
    const favorite = this.repository.create({
      id: v4(),
      ...data
    })
    await this.save(favorite)
    return favorite
  }

  public async remove (data: RemoveFavoriteDto): Promise<void> {
    const { favoriteId } = data
    const favorite = await this.repository.findOne({
      where: { id: favoriteId }
    })

    if (!favorite) throw new AppError('not-found', 'movie not found', 404)

    const queryBuilder = this.repository.createQueryBuilder('favorites')

    await queryBuilder
      .delete()
      .where('id = :id', { id: favoriteId })
      .execute()
  }

  public async findById (id: string): Promise<Favorite | undefined> {
    const favorite = await this.repository.findOne({
      where: { id }
    })

    return favorite
  }

  public async findByUserId (userId: string): Promise<Favorite[]> {
    const favorites = await this.repository.find({
      where: { userId },
      relations: ['movie']
    })

    return favorites
  }

  public async favoriteExists (data: AddFavoriteDto): Promise<Favorite | undefined> {
    const favorite = await this.repository.findOne({
      where: [{ movieId: data.movieId }, { userId: data.userId }]
    })

    return favorite
  }
}
