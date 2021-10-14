import { RedisCacheProvider } from '@/shared/providers/cache-provider/implementations/redis-cache-provider'
import { AxiosHttpProvider } from '@/shared/providers/http-provider/implementations/axios-http-provider'
import { OmdbMovieProvider } from '@/shared/providers/movie-db-provider/implementations/omdb-movie-provider'
import { TypeOrmMoviesRepository } from '../../infra/typeorm/repositories/typeorm-movies-repository'
import { SearchMoviesUseCase } from './search-movies'

export const makeSearchMovieUseCase = (): SearchMoviesUseCase => {
  const moviesRepository = new TypeOrmMoviesRepository()
  const cacheProvider = new RedisCacheProvider()
  const httpProvider = new AxiosHttpProvider()
  const movieDbProvider = new OmdbMovieProvider(httpProvider)

  const searchMovieUseCase = new SearchMoviesUseCase(
    moviesRepository,
    cacheProvider,
    movieDbProvider
  )

  return searchMovieUseCase
}
