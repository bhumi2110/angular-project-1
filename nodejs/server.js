const http = require('http')
const products = require('./controllers/data.json')
const gcontrol=require('./controllers/get-controller')
const pcontrol=require('./controllers/post-controller')
const server = http.createServer(async(req,res)=>{
    req.products = products;
 switch(req.method)
 {
 case 'GET':
gcontrol(req,res)
// res.write(JSON.stringify([{'id':1,'name':'bingo'},{'id':2,'name':'sunfest'}]))
 break;
case 'POST':
await pcontrol(req,res)
break;
default: 
res.statusCode = 400;
 res.setHeader('Content-Type','application/json')
 res.write(JSON.stringify({'title':'not found','message':'method not supported'}))
 }
 res.end(); 
})
server.listen(3001,()=>{
 console.log('server started at 3001')
})

