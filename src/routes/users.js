import { Router } from 'express';
import UsersController from '../controllers/UsersController';

const router = Router();

router.put('/users/addSub', UsersController.addSub);
router.put('/users/addFollower', UsersController.addFollower);
router.put('/users/addLike', UsersController.addLike);
router.put('/users/removeFolover', UsersController.removeFolover);
router.put('/users/removeLike', UsersController.removeLike);
router.put('/users/removeSub', UsersController.removeSub);

export default router;
