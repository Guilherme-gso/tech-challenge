import { makeAddMovieToUserFavoritesUseCase } from '@/modules/movies/usecases/add-movie-to-user-favorites-use-case/make-add-movie-to-user-favorites-use-case'
import { Request, Response } from 'express'

export class AddMovieToUserFavoritesController {
  public async handle (request: Request, response: Response): Promise<Response> {
    const { movieId, userId } = request.body

    const addMovieToUserFavorites = makeAddMovieToUserFavoritesUseCase()

    const favorite = await addMovieToUserFavorites.handle({ movieId, userId })

    return response.json(favorite)
  }
}
