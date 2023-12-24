import express from "express";
import { userLogIn, userRegister } from "../controllers/auth.js";

const router=express.Router()

//REGISTER
router.post('/register',userRegister)
router.post('/login',userLogIn)

export default router