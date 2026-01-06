//create server
const express=require ('express');
const app=express();
const authRoutes=require('./routes/auth.routes');
const foodRoutes=require('./routes/food.routes');
const cookieParser=require('cookie-parser')
const cors=require('cors');
app.use(cors({
    origin:"http://localhost:5173",
    credentials:true
}));
app.use(cookieParser());
app.use(express.json());

app.get("/",(req,res)=>{
    res.send("hello world");
})
app.use('/api/auth',authRoutes);
app.use('/api/food',foodRoutes);
module.exports=app;