import { Router } from 'express';
import LikedPostsController from '../controllers/LikedPostsController';

const router = Router();

router.get('/likedPosts/:id', LikedPostsController.read);
router.get('/likedPosts', LikedPostsController.list);
router.put('/likedPosts/addLike', LikedPostsController.addLike);
router.put('/likedPosts/removeLike', LikedPostsController.removeLike);
router.post('/likedPosts', LikedPostsController.createLikePostsHistory);

export default router;