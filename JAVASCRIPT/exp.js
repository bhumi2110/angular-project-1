function* mult(p)
{
    for(let v=1;v<=10;v++)
    {
        yield p+'*'+v+'='+ p*v;
        //yield'${p}*${v}=${v*p};
    }
}
let seqq=mult(5);
let i=1
while( i<=10)
{
console.log(seqq.next().value);
i++
}

for(const a of mult(5)){
    console.log(a)
}