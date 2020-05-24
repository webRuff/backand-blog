import mongoose, {Schema} from 'mongoose';

const LikedPostSchema = new Schema (
  {
    userId: {
      type: String,
      required: true, //обязательное заполнение
    },
    likedPosts: {
        type: Array,
        default: [],
      },
  },
  {
    timestamps: true, //добавляет поля дат создания и обновления записи
  },
);


export default mongoose.model('LikedPost', LikedPostSchema);