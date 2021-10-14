import { Router } from 'express'
import { AddMovieToUserFavoritesController } from '../controllers/add-movie-to-user-favorites-controller'
import { ListUserFavoritesMoviesController } from '../controllers/list-user-favorites-movies-controller'
import { RemoveMovieFromUserFavoritesController } from '../controllers/remove-movie-from-user-favorites-controller'
import { SearchMovieController } from '../controllers/search-movie-controller'

const moviesRouter = Router()

const searchMovieController = new SearchMovieController()
const addMovieToUserFavoritesController = new AddMovieToUserFavoritesController()
const removeMovieFromUserFavoritesController = new RemoveMovieFromUserFavoritesController()
const listUserFavoritesMoviesController = new ListUserFavoritesMoviesController()

moviesRouter.get('/search', searchMovieController.handle)
moviesRouter.post('/add-favorite', addMovieToUserFavoritesController.handle)
moviesRouter.post('/remove-favorite', removeMovieFromUserFavoritesController.handle)
moviesRouter.get('/favorites/:userId/list', listUserFavoritesMoviesController.handle)

export { moviesRouter }
