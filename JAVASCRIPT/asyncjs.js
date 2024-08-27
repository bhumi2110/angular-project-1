var dishes=['idle','sambar','chutney']
function addDish()
{
   return new  Promise((done,notdone)=>{
    isDone=false;
    setTimeout(()=>{
    dishes.push('puliseruy')
    isDone=true
    if(isDone)
    notdone('error in entered data');
    else 
    done('data added succesfullly to array');
    },2000);
});
}
    
function callmethod(){
let p=addDish();
p.then((result)=>{
    console.log('completed successfully')
}).catch((error)=>{
    console.log('some problem')
});
console.log(dishes)
}
callmethod();
let p=fetch('https://fakestoreapi.com/products');
p.then((res)=>res.json())
.then((data)=>{
    console.log('fetch'+JSON.stringify(data))
})
