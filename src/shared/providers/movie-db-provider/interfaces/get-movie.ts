import { OmdbMovie } from './omdb-movie'

export interface GetMovie {
  Response?: boolean;
  Error?: boolean;
  Search: OmdbMovie[]
}
