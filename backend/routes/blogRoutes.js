import express from "express";
import { Post } from "../Db/model.js";

const routes = express.Router();

routes.post("/blog", async (req, res) => {
  try {
    const { title, content } = req.body;
    const userId = req.userId.id;

    const post = await Post.create({
      title,
      content,
      user: userId,
    });
    res.status(200).json({
      msg: "Post Created Successfully",
      post,
    });
  } catch (error) {
    res.status(500).json({
      msg: "Error creating post",
      error: error.message,
    });
  }
});
routes.put("/blog/:id", async (req, res) => {
  try {
    const { title, content } = req.body;
    const userId = req.userId.id;
    const postId = req.params.id;

    const post = await Post.findById(postId);

    if (!post) {
      return res.status(400).json({
        msg: "Post not found",
      });
    }

    if (post.user !== userId) {
      return res.status(400).json({
        msg: "Not owner of the post",
      });
    }

    post.title = title || post.title;
    post.content = content || post.content;

    await post.save();

    res.status(200).json({
      msg: "Post updated Successfully",
    });

    //     const updatedPost = await Post.findOneAndUpdate(
    //   { _id: postId, user: userId },
    //   { title, content },
    //   { new: true }
    // );

    // if (!updatedPost) {
    //   return res.status(404).json({ msg: "Post not found or unauthorized" });
    // }
  } catch (error) {
    res.status(500).json({
      msg: "Error creating post",
      error: error.message,
    });
  }
});
routes.get("/blog/bulk", async (req, res) => {
  try {
    const allPost = await Post.find({});

    if (allPost.length === 0 ) {
      return res.status(404).json({
        msg: "No Post founded",
      });
    }
    res.status(200).json({
      Posts: allPost,
    });
  } catch (error) {
    return res.status(500).json({
      msg: "Server error",
      error: error.message,
    });
  }
});
routes.get("/blog/:id", async (req, res) => {
  try {
    const id = req.params.id;
    const post = await Post.findById(id);
    if (!post) {
      return res.status(404).json({
        msg: "Post cannnot be found",
      });
    }
    return res.status(200).json({
      post,
    });
  } catch (error) {
    return res.status(500).json({
      msg: "Server error",
      error: error.message,
    });
  }
  
});

export  {routes};
