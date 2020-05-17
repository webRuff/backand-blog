import Post from '../models/Post';
import TryCatch from '../decorators/TryCatchMiddlewereDecorator';
import { modelNames } from 'mongoose';




class PostsController {
//get
  static async getPostById(id) {
    const post = await Post.findById(id);

    if (!post) {
      throw new HttpError ('Post not found', 404);
    }
    return post;
  }

  @TryCatch
  static async read(req, res) {
    const post = await this.getPostById
    res.json(post); //возвращаемое значение
  }
//get
  @TryCatch
  static async list(req, res) {
    const posts = await Post.find();
    res.json(posts);
  }
//post
  @TryCatch
  static async create(req, res) {
    const model = new Post(req.body);
    const post = await model.save();

    res.json({ status: true, post});
  }
//put
  @TryCatch
  static async update(req, res) {
  const post = await PostsController.getPostById(req.params.id);
  
   post.header = req.body.header;
   post.content = req.body.content;
   await post.save(); //сохраняет данные в mongoose 

    res.json({ status: true, post });
  }
//delete
  @TryCatch
  static async delete(req, res) {
    const post = await PostsController.getPostById(req.params.id);

    await post.delete();

    res.json({ status: true});
    res.status(204).end();
  }
}

export default PostsController;
