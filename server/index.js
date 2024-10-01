import express from "express";
import cors from "cors";

const app = express();

app.use(express.json());
app.use(cors());

app.listen("8000", () => {
  console.log("Server running on port : 8000");
});

import UserRouter from "./routes/user.js";
import AuthRouter from "./routes/auth.js";
import PostRouter from "./routes/post.js";
import LikeRouter from "./routes/like.js";

app.use("/api/user", UserRouter);
app.use("/api/auth", AuthRouter);
app.use("/api/post", PostRouter);
app.use("/api/like", LikeRouter);
