//start server, ZOKBR3OrawZ4Cy5r ,mongodb://localhost:27017/food-view
require('dotenv').config();
const app=require('./src/app');
const connectDB=require('./src/db/db');
connectDB();
app.listen(3000,()=>{
    console.log("server is running on port 3000"); 
})