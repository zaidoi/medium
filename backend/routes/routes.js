import express from "express";
import { User, Post } from "../Db/model.js";
import { blogMiddleware } from "../middlewares/middleware.js";
import jwt from "jsonwebtoken";
import { signupInput,signinInput } from "../../common/zod/zod.js";
import { sign } from "crypto";

const routes = express.Router();

routes.post("/user/signup", async (req, res) => {
  try {
    const { name, email, password } = req.body;

    const result = signupInput.safeParse(req.body);

    if(!result.success){
      return res.status(400).json({
        msg:"Enter valid Input"
      })
    }

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
routes.post("/user/signin", async(req, res) => {
  try {
    const {email,password} = req.body;
    const result = signinInput.safeParse(req.body);

    if(!result.success){
      return res.status(400).json({
        msg:"Enter valid Input"
      })
    }
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
routes.post("/blog", blogMiddleware,(req, res) => {
  return res.status(200);
});
routes.put("/blog", (req, res) => {
  return res.status(200);
});
routes.get("/blog/:id", (req, res) => {
  return res.status(200);
});
routes.get("/blog/bulk", (req, res) => {
  return res.status(200);
});

export default  routes ;
