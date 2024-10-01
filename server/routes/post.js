import express from "express";
import { PostController } from "../controller/post.js";

const router = express.Router();

router.get("/", PostController);

export default router;
