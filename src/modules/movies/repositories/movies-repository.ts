import { Movie } from '../infra/typeorm/entities/movie'

export interface MoviesRepository {
  findMoviesByTitle(title: string): Promise<Movie[]>
  findByMovieId(id: string): Promise<Movie | undefined>
  create(movieData: Movie): Promise<Movie>
}
