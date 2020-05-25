import { Router } from 'express';
import PostsController from '../controllers/PostsController';

const router = Router();

router.get('/post/:id', PostsController.read);
router.get('/posts', PostsController.list);
router.post('/posts', PostsController.create);
router.put('/posts/:id', PostsController.update);
router.delete('/posts/:id', PostsController.delete);
router.put('/posts/addLike/:id', PostsController.addLike);
router.put('/posts/removeLike/:id', PostsController.removeLike);

export default router;
