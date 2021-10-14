import { Movie } from '@/modules/movies/infra/typeorm/entities/movie'
import { AppError } from '@/shared/errors/app-error'
import { MovieDbProvider } from '..'
import { HttpProvider } from '../../http-provider'
import { GetMovie } from '../interfaces/get-movie'

export class OmdbMovieProvider implements MovieDbProvider {
  constructor (
    private readonly httpProvider: HttpProvider
  ) {}

  public async getMovies (movieTitle: string): Promise<Movie[]> {
    const data = await this.httpProvider.request<GetMovie>({
      params: { s: movieTitle },
      url: '',
      method: 'GET'
    })

    if (data?.Error) {
      throw new AppError(
        'movie-not-found',
        'this movie does not exists in our database'
      )
    }

    const movies: Movie[] = data.Search.map(movie => {
      return {
        imdbId: movie.imdbID,
        poster: movie.Poster,
        title: movie.Title,
        year: movie.Year
      }
    })

    return movies
  }
}
