import LikePostsHistory from '../models/LikedPosts';
import TryCatch from '../decorators/TryCatchMiddlewereDecorator';
import HttpError from '../exeptions/HttpError'

class LikedPostController {

  static async getlikedPostsById(userId) {
      const likedPost = await LikePostsHistory.findOne({userId});
    
      if (!likedPost) {
          throw new HttpError ('likedPost not found', 404);
        }
        return likedPost;
      }

  @TryCatch 
    static async addLike (req, res) {
      const likedPost = await LikedPostController.getlikedPostsById(req.body.userId);
      likedPost.likedPosts.push(req.body.likedPostsId);

      await likedPost.save();

      res.json({status: true, likedPost})
  }

  @TryCatch
    static async removeLike (req, res) {
      const userLikedPost = await LikedPostController.getlikedPostsById(req.body.userId);
      const newLikedPosts = userLikedPost.likedPosts.filter(postId => postId !== req.body.unLikePostId);

      userLikedPost.likedPosts = newLikedPosts;

      await userLikedPost.save();

  res.json({status: true, userLikedPost})
  
  }

  @TryCatch
  static async createLikePostsHistory(req, res) {
    const model = new LikePostsHistory({
      userId: req.body.userId,
    });

    const likePostsHistory = await model.save();

    res.json({ status: true, likePostsHistory });
  }

  @TryCatch
  static async read(req, res) {
    const likePostsHistory = await LikedPostController.getlikedPostsById(req.params.id)
    res.json(likePostsHistory); 
  }

  @TryCatch
  static async list(req, res) {
    const likePostsHistory = await LikePostsHistory.find();
    res.json(likePostsHistory);
  }
};



export default LikedPostController;