import express from "express";
import { login, register } from "../controllers/auth.js";

const router = express.Router();

router.get("/", function(req, res, next) {
    res.send("API is working properly");
});

router.post("/register", register)
router.post("/login", login)

export default router