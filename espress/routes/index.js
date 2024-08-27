const express=require("express");
const router=express.Router();
const { GetProducts,GetProduct,AddProducts,DeleteProduct}=require('../controllers');
router.get("/products",GetProducts);
router.get("/products/:id",GetProduct);
router.post("/products",AddProducts);
router.delete("/products/:id",DeleteProduct);
module.exports={router};


