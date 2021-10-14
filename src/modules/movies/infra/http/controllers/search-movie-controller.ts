import { makeSearchMovieUseCase } from '@/modules/movies/usecases/search-movies-use-case/make-search-movie-use-case'
import { Request, Response } from 'express'

export class SearchMovieController {
  public async handle (request: Request, response: Response): Promise<Response> {
    const { movieTitle } = request.query

    const searchMovie = makeSearchMovieUseCase()

    const movie = await searchMovie.handle(String(movieTitle))

    return response.json(movie)
  }
}
