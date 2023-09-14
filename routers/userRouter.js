const { Router } = require('express')
const userController = require('../controllers/userController');
const userRouter = Router();
/*
router.route('/')
    .get(verifyRoles(ROLES_LIST.Admin), userController.getAllUsers)
    .delete(verifyRoles(ROLES_LIST.Admin), userController.deleteUser);

router.route('/:id')
    .get(verifyRoles(ROLES_LIST.Admin), userController.getUser);
*/

userRouter.get('/:id', userController.getUser)
userRouter.get('/', userController.getAllUsers)
userRouter.delete('/', userController.deleteUser)

module.exports = userRouter;