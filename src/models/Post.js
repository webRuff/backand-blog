  import mongoose, {Schema} from 'mongoose';

  const PostSchema = new Schema (
    {
      header: {
        type: String,
        required: true, //обязательное заполнение
        minlength: 4, //не меньше 4х символов
        trim: true,//обрезать пробелы
      },
        content: {
          type: String,
          required: true,
          minlength: 4,
      },
        likesCount: {
          type: Number,
          default: 0,
      },
        postAuthor: {
          type: String,
          required: true,
        },
    },
    {
      timestamps: true, //добавляет поля дат создания и обновления записи
    },
  );


export default mongoose.model('Post', PostSchema);