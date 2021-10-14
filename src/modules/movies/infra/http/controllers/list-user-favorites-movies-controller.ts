import { makeListUserFavoritesUseCase } from '@/modules/movies/usecases/list-user-favorites-movies/make-list-user-favorites-use-case'
import { Request, Response } from 'express'

export class ListUserFavoritesMoviesController {
  public async handle (request: Request, response: Response): Promise<Response> {
    const { userId } = request.params
    const listUserFavoritesMovies = makeListUserFavoritesUseCase()
    const userFavorites = await listUserFavoritesMovies.handle(userId)
    return response.json(userFavorites)
  }
}
