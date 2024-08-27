//two ways of declaring functions
let f=(a,b)=>
{
    console.log(a+b)
    console.log("it is arrow function")
}
f();
f(1)
f(3,4)
f(4,5,6,"dffjdsbf")
//f(cal(x,y),v(a,b))
//all functions will be executed without errors ,we ca pass anu number of parameters because no strong type checking 
function cal()
{
    console.log("it is normal function")
}
let v=()=>{
console.log("arrrow function")
}

function* sequence(p)
{
    let i=p;
    while(true)
    {
        yield i++;
    }
}
let seq=sequence(100);
console.log(seq.next().value)
console.log(seq.next().value)
console.log(seq.next())
console.log(seq.next())


const mul = Function* 




function* mult(p)
{
    for(let v=1;v<=10;v++)
    {
        yield p*v;
    }
}
let seqq=mult(5);
console.log(seqq.next().value());