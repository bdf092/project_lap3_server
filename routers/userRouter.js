const { Router } = require('express')
const userController = require('../controllers/userController');
const userRouter = Router();

userRouter.get('/:id', userController.getUser)
userRouter.get('/', userController.getAllUsers)
userRouter.delete('/', userController.deleteUser)

module.exports = userRouter;