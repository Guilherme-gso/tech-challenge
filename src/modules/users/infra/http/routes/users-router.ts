import { Router } from 'express'
import { AuthUserController } from '../controllers/auth-user-controller'
import { CreateUserController } from '../controllers/create-user-controller'

const usersRouter = Router()

const createUserController = new CreateUserController()
const authUserController = new AuthUserController()

usersRouter.post('/create', createUserController.handle)
usersRouter.post('/auth', authUserController.handle)

export { usersRouter }
