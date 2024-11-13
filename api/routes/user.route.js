import express from "express";
import { test } from "../controllers/user.controller";
const router = express.Router();

router.get("/text", test);

export default router;
