import express from "express";
import { LikeController } from "../controller/like.js";

const router = express.Router();

router.get("/", LikeController);

export default router;
