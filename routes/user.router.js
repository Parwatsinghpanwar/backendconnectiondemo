import express from "express";
import * as userController from "../Controller/user.controller.js";

const router=express.Router();

router.post("/save",userController.save);

export default router;