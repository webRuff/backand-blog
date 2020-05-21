import User from '../models/User';
import TryCatch from '../decorators/TryCatchMiddlewereDecorator';
import HttpError from '../exeptions/HttpError'

class UserController {

  static async getUserById(id) {
      const user = await User.findById(id);
    
      if (!user) {
          throw new HttpError ('User not found', 404);
        }
        return user;
      }

  @TryCatch 
    static async addSub (req, res) {
      const user = await UserController.getUserById(req.body.id);
      user.mySubs.push(req.body.newSub);

      await user.save();

      res.json({status: true, user})
    }

  @TryCatch 
    static async addLike (req, res) {
      const user = await UserController.getUserById(req.body.id);
      user.likedPosts.push(req.body.likedPosts);

      await user.save();

      res.json({status: true, user})
  }

  @TryCatch 
    static async addFollower (req, res) {
      const user = await UserController.getUserById(req.body.id);
      user.followers.push(req.body.newFollower);

      await user.save();

      res.json({status: true, user})
  }

  @TryCatch
    static async removeLike (req, res) {
      const user = await UserController.getUserById(req.body.id);
      const newLikedPosts = user.likedPosts.filter(postId => postId !== req.body.unLikePostId);

      user.likedPosts = newLikedPosts;

      await user.save();

  res.json({status: true, user})
  
  }

  @TryCatch
    static async removeFolover (req, res) {
      const user = await UserController.getUserById(req.body.id);
      const newfollowers = user.followers.filter(follover => follover !== req.body.follover);

      user.followers = newfollowers;

      await user.save();

  res.json({status: true, user})
  
  }

  @TryCatch
    static async removeSub (req, res) {
      const user = await UserController.getUserById(req.body.id);
      const newSubs = user.mySubs.filter(postId => postId !== req.body.sub);

      user.mySubs = newSubs;

      await user.save();

  res.json({status: true, user})
  
  }
   
};

export default UserController;