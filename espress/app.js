const express=require("express");
const cors=require("cors");
const {router}=require('./routes');
const app=express();
app.use(cors());
app.use(express.json());
app.use('/api/v1',router);


app.listen(3003,()=>{
    console.log("server is running at 3003");
});