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
    mySubs: {
      type: Array,
      default: null,
    },
    followers: {
      type: Array,
      default: null,
    },
    likedPosts: {
      type: Array,
      default: null
    }
  },
  {
    timestamps: true,
  },
);

export default mongoose.model('User', UserSchema);