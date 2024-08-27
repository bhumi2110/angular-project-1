module.exports=async(req,res)=>{
    if(req.body==="/api/products")
    {
    res.statusCode = 200;
    let details=require('./data.json')
 res.setHeader('Content-Type','application/json')
 res.write(JSON.stringify(details))
 res.end();
    }
}