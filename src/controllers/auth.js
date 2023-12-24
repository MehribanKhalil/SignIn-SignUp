import { User } from "../models/user.js"
import bcrypt from 'bcrypt'
import mongoose from "mongoose"
import session from "express-session"

//REGISTER
export const userRegister= async(req,res)=>{
    try {
        const hashedPassword= await bcrypt.hash(req.body.password,10)
        const user = new User({
            username:req.body.username,
            password:hashedPassword
        })
        await user.save()
        res.status(201).json({message:'user created'})
    } catch (error) {
        res.status(500).json({message:error})
    }
}

//LOG IN
export const userLogIn= async(req,res)=>{
    try {
       const user= await User.findOne({username:req.body.username})
        if (user && await bcrypt.compare(req.body.password,user.password) ) {
            req.session.useId=user._id
            res.status(200).json({message:'user sign in'})
        }
    } catch (error) {
        res.status(500).json({message:error})
    }
}