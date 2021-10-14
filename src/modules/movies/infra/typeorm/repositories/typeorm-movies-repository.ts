import { MoviesRepository } from '@/modules/movies/repositories/movies-repository'
import { getRepository, Like } from 'typeorm'
import { v4 } from 'uuid'
import { Movie } from '../entities/movie'

export class TypeOrmMoviesRepository implements MoviesRepository {
  constructor (
    private readonly repository = getRepository(Movie)
  ) {}

  public async save (movie: Movie): Promise<Movie> {
    await this.repository.save(movie)
    return movie
  }

  public async create (movieData: Movie): Promise<Movie> {
    const movie = this.repository.create({ id: v4(), ...movieData })
    await this.save(movie)
    return movie
  }

  public async findMoviesByTitle (title: string): Promise<Movie[]> {
    const movies = await this.repository.find({
      where: { title: Like(title) }
    })

    return movies
  }

  public async findByMovieId (id: string): Promise<Movie | undefined> {
    const movies = await this.repository.findOne({
      where: { id }
    })

    return movies
  }
}
