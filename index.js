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
mongoose.connect("mongodb+srv://dbUser33:dbUser33Password@nodeapicluster.prf8ipp.mongodb.net/node-api?retryWrites=true&w=majority&appName=nodeApiCluster").then(()=>{
    console.log("connected to database");
    app.listen(3000,()=>console.log("listening to the port 3000"));
}).catch((err)=>{if(err) throw err;});





