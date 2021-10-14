import { moviesRouter } from '@/modules/movies/infra/http/routes/movies-router'
import { authenticateMiddleware } from '@/modules/users/infra/http/middlewares/authenticate-user-middleware'
import { usersRouter } from '@/modules/users/infra/http/routes/users-router'
import { Router } from 'express'

const appRouter = Router()

appRouter.use('/users', usersRouter)
appRouter.use('/movies', authenticateMiddleware, moviesRouter)

export { appRouter }
