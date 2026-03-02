import express from 'express'
import cors from 'cors'
import connectDB from './config/db.js'
import foodRouter from './routes/foodRoute.js'
import userRouter from './routes/UserRoute.js'
import 'dotenv/config'
import cartRouter from './routes/CartRoute.js'
import orderRouter from './routes/orderRoute.js'
//  app config
const app=express()
const port=process.env.PORT||4000



//middlewares
app.use(express.json())
// app.use(cors())
app.use(cors({
  origin: [
    "https://food-del-frontend-mlhd.onrender.com",
    "https://food-del-admin-lvzd.onrender.com"
  ],
  credentials: true
}))

//db connection
connectDB();


//API endPoints 
app.use("/api/food",foodRouter)
app.use('/images',express.static('uploads'))

app.use("/api/user/",userRouter)
app.use("/api/cart",cartRouter)
app.use("/api/order",orderRouter)
app.get('/',(req,res)=>{
    res.send("API Working")
})


//mongodb+srv://hemagottapu:<db_password>@cluster0.k5jqn0b.mongodb.net/?


app.listen(port,()=>{
    console.log(`server runnig on the http://localhost:${port}`)
})

