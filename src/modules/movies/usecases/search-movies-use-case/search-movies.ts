import { parseString } from '@/shared/helpers/parse-string'
import { CacheProvider } from '@/shared/providers/cache-provider'
import { MovieDbProvider } from '@/shared/providers/movie-db-provider'
import { UseCase } from '@/shared/usecase/use-case'
import { Movie } from '../../infra/typeorm/entities/movie'
import { MoviesRepository } from '../../repositories/movies-repository'

export class SearchMoviesUseCase implements UseCase {
  constructor (
    private readonly moviesRepository: MoviesRepository,
    private readonly cacheProvider: CacheProvider,
    private readonly movieDbProvider: MovieDbProvider
  ) {}

  public async handle (movieTitle: string): Promise<Movie[]> {
    const parsedMovieTitle = parseString(movieTitle)

    const moviesInCache = await this.cacheProvider.recover<Movie[]>(
      parsedMovieTitle
    )

    if (moviesInCache) return moviesInCache

    const movieInDatabase = await this.moviesRepository.findMoviesByTitle(
      parsedMovieTitle
    )

    if (movieInDatabase.length) return movieInDatabase

    const movies = await this.movieDbProvider.getMovies(movieTitle)

    for await (const movie of movies) {
      await this.moviesRepository.create(movie)
    }

    await this.cacheProvider.save(parsedMovieTitle, movies)
    return movies
  }
}
