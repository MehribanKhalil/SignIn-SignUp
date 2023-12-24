import express from "express"
import mongoose from "mongoose"
import dotenv from 'dotenv'
import userRouter from './src/router/auth.js'
import session from "express-session"


dotenv.config()

const app=express()
app.use(express.json())
app.use(session({
    secret:'jsf4h71lsnh',
    resave: false,
    saveUninitialized: true
}))

app.use('/users',userRouter)

app.get('/',(req,res)=>{
    res.send("hello")
})



const PORT=process.env.PORT
const url=process.env.CONNECTION_URL.replace('<password>',process.env.PASSWORD)

mongoose.connect(url).then(()=>console.log('connected')).catch(()=>console.log('not connected'))

app.listen(PORT,()=>{
    console.log('Server is running');
})