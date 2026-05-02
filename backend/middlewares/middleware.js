import jwt from "jsonwebtoken";


const blogMiddleware = async (req, res, next) => {
  try {
    const authHeader = req.headers.authorization;
    if (!authHeader) {
      return res.status(400).json({
        msg: "Token is missing",
      });
    }

    const token = authHeader.split(" ")[1];
    const decoded = jwt.verify(token, process.env.JWT_SECRET);
    req.userId = { id: decoded.id };
    next();
  } catch (error) {
    res.status(400).json({
      msg: "Token is invalid",
      error: error.message,
    });
  }
};

export { blogMiddleware };
