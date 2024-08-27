let product=[

        {"id":"20","name":"bhumika","location":"actalent"},
        {"id":"28","name":"sarun","location":"cognizant"},
        {"id":"29","name":"arun","location":"delhi"}
    ]
const GetProducts=(req,res)=>{
    res.status(200);
    res.send(JSON.stringify(product));
}
const GetProduct=(req,res)=>{
    let pro=product.find((p)=>{
        return p.id===req.params.id;
    })
    res.send(pro);
}
const AddProducts=(req,res)=>{
    console.log(req.body);
    res.send("data received");
}
const DeleteProduct=(req,res)=>{
    let index=product.findIndex(d=>d.id==req.params.id);
    products.splice(index);
     res.send(JSON.stringify(product));

}

module.exports={ GetProducts,GetProduct,AddProducts,DeleteProduct};


