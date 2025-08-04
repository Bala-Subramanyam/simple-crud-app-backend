const express=require('express');
const Product=require('./models/product.model.js');
const app=express();
const mongoose=require('mongoose');
const productRoute=require('./routes/product.route.js');

//middleware
app.use(express.json());
app.use(express.urlencoded({extended:false}));

//routes
app.use("/api/products",productRoute);

//mongoose connection
require('dotenv').config();
mongoose.connect(process.env.MONGODB_URI).then(()=>{
    console.log("connected to database");
    app.listen(3000,()=>console.log("listening to the port 3000"));
}).catch((err)=>{if(err) throw err;});





