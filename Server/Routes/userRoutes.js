import {registerUser,loginUser, userCredits} from '../Controllers/userController.js'
import express from 'express'
import {userAuth} from '../middlewares/auth.js'

const userRouter = express.Router();

userRouter.post('/register',registerUser)
userRouter.post('/login',loginUser)
userRouter.post('/credits',userAuth,userCredits)


export default userRouter;