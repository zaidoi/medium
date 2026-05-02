import dotenv from "dotenv";
dotenv.config();
import express from "express";
import { connectDB } from "./Db/db.js";
import {routes as userRouter} from "./routes/userRoutes.js";
import {routes as blogRouter} from "./routes/blogRoutes.js"
import { blogMiddleware } from "./middlewares/middleware.js";
const app = express();

connectDB();
app.use(express.json());

app.use("/api/v1/user", userRouter);
app.use("/api/v1/",blogMiddleware,blogRouter)

app.listen(3000, () => {
  console.log(process.env.MONGOURI);
  console.log(process.env.JWT_SECRET);
  console.log("App is running at 3000 PORT.");
});

export default app;
