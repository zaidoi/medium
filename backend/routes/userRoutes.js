import express from "express";
import { User } from "../Db/model.js";
import jwt from "jsonwebtoken";

const routes = express.Router();

routes.post("/signup", async (req, res) => {
  try {
    const { name, email, password } = req.body;

    const userAlreadythere = await User.findOne({ email });
    if (userAlreadythere) {
      return res.status(400).json({
        msg: "User already exist with this email",
      });
    }

    const user = await User.create({
      name,
      email,
      password,
    });
    const token = jwt.sign({id:user._id}, process.env.JWT_SECRET);
    return res.status(200).json({
      msg: "User is Created",
      user,
      token: token,
    });
  } catch (error) {
    return res.status(500).json({
      message: "Server Error",
      error: error.message,
    });
  }
});
routes.post("/signin", async(req, res) => {
  try {
    const {email,password} = req.body;
    const checkUser = await User.findOne({email})
    if(!checkUser){
        return res.status(400).json({
            msg:"User not there"})
    }

    const token = jwt.sign({id:checkUser._id},process.env.JWT_SECRET);

    res.status(200).json({
        token:token
    })

  } catch (error) {
    res.status(500).json({
        msg:"Server error",
        error:error.message
    })
  }
});

export  {routes};