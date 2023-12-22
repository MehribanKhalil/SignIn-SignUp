import express from "express"
import mongoose from "mongoose"
import dotenv from 'dotenv'

const app=express()
app.use(express.json())
dotenv.config()



const PORT=process.env.PORT
const url=process.env.CONNECTION_URL.replace('<password>',process.env.PASSWORD)

mongoose.connect(url).then(()=>console.log('connected')).catch(()=>console.log('not connected'))

app.listen(PORT,()=>{
    console.log('Server is running');
})