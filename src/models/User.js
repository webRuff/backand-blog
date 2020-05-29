import mongoose, { Schema } from 'mongoose';

const UserSchema = new Schema(
  {
    name: {
      type: String,
      required: true,
      minlength: 2,
      maxlength: 40,
      unique: true,
      trim: true,
    },
    password: {
      type: String,
      required: true,
      minlength: 3,
      maxlength: 60,
    },
    email: {
      type: String,
      required: true,
      unique: true,
      trim: true,
    },
    likedPosts: {
      type: Array,
      default: [],
    },
    mySubs: {
      type: Array,
      default: [],
    },
    followers: {
      type: Array,
      default: [],
    }, 
    userImg: {
      type: String,
    },  
  },
  {
    timestamps: true,
  },
);

export default mongoose.model('User', UserSchema);