import mongoose from 'mongoose'

const userSchema=mongoose.Schema({
    username:{type:String, unique:true,require:true},
    role:{type:String ,require:true },
    password:{type:String,require:true}
})

export const Users=mongoose.model("Users",userSchema)
