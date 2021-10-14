import { TypeOrmUsersRepository } from '@/modules/users/infra/typeorm/repositories/typeorm-users-repository'
import { TypeormFavoritesRepository } from '../../infra/typeorm/repositories/typeorm-favorites-repository'
import { ListUserFavorites } from './list-user-favorites'

export const makeListUserFavoritesUseCase = (): ListUserFavorites => {
  const usersRepository = new TypeOrmUsersRepository()
  const favoritesRepository = new TypeormFavoritesRepository()
  const usecase = new ListUserFavorites(usersRepository, favoritesRepository)
  return usecase
}
