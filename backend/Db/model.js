import mongoose from "mongoose";
import { randomUUID } from "crypto";

const userSchema = new mongoose.Schema({
  _id: {
    type: String,
    default: () => randomUUID(),
  },
  name: String,
  email: {
    type: String,
    unique: true,
  },
  password: String,
  posts: [{ type: String, ref: "Post" }],
});

const postSchema = new mongoose.Schema({
  _id: {
    type: String,
    default: () => randomUUID(),
  },
  title: String,
  content: String,
  published: {
    type: Boolean,
    default: false,
  },
  username:String,
  user: { type: String, ref: "User" },
});

const User = mongoose.model("User", userSchema);
const Post = mongoose.model("Post", postSchema);

export { User, Post };
