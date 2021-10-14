import { makeRemoveMovieFromUserFavoritesUseCase } from '@/modules/movies/usecases/remove-movie-from-user-favorites-use-case/make-remove-movie-from-user-favorites-use-case'
import { Request, Response } from 'express'

export class RemoveMovieFromUserFavoritesController {
  public async handle (request: Request, response: Response): Promise<Response> {
    const { favoriteId } = request.body

    const removeMovieFromUserFavorites = makeRemoveMovieFromUserFavoritesUseCase()

    await removeMovieFromUserFavorites.handle({ favoriteId })

    return response.send()
  }
}
