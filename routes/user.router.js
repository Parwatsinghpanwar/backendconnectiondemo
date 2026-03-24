import express from "express";
import * as userController from "../Controller/user.controller.js";

const router=express.Router();

router.post("/save",userController.save);
router.get("/fetch",userController.fetch);
router.get("/fetchuser",userController.fetchuser);
router.delete("/deleteuser",userController.deleteuser);
router.patch("/updateuser",userController.updateuser)
export default router;