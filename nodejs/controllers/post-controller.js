module.exports=async(req,res)=>{
    if(req.url==="/api/products")
    {
        let body=''
        res.statusCode = 201;
        res.setHeader('Content-Type','application/json')
    await req.on('data', chunk=>{
            body+=chunk.toString();//incoming data is object
        })
       await req.on('end',()=>{
console.log(body);
        })
    res.write(body);
        // res.write(JSON.stringify({'title':'success','message':'post request received'}))
    }
}