import { Movie } from '@/modules/movies/infra/typeorm/entities/movie'

export interface MovieDbProvider {
  getMovies(movieTitle: string): Promise<Movie[]>
}
