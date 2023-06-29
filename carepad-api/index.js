const express =require("express")
const { default: mongoose } = require("mongoose")
const app =express()
const dotenv=require("dotenv")
const userRoute=require("./routes/user.js")
const authRoute=require("./routes/auth.js")
const productRoute=require("./routes/product.js")
const cartRoute=require("./routes/cart.js")
const orderRoute=require("./routes/order.js")
const cors=require("cors")

dotenv.config()


mongoose
.connect(process.env.MONGO_URL)
.then(()=>console.log("DB connection is successful"))
.catch((err)=>{
    console.log(err)
})
app.use((req,res)=>
{
res.setHeader("cors","*")
})
app.use(express.json())
app.use("/api/auth",authRoute);
app.use("/api/users",userRoute);
app.use("/api/products",productRoute);
app.use("/api/carts",cartRoute);
app.use("/api/orders",orderRoute);



app.listen(process.env.PORT || 5000,()=>{
    console.log("backend server is running")
})