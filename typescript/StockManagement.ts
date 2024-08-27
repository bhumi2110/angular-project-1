import Stock from './Stock.js'
const s=new Stock(1,'itc',45);
s.display();
export class ETF extends Stock{
    show(){
        console.log(this.company);
    }
}
export class MutualFund{
    constructor(public fundcode:string,public fundName:string,public broker:string){

}
showData(){
    console.log(`code:${this.fundcode} name:${this.fundName} broker:${this.broker}`)
}

}
let m=new MutualFund('bluchip','icici','broker');
m.showData();
type Building={
    area:number;
    location:string;
}
type Flat=Building &{
    Salerate:number;
}
function show(b:Building){
function testFlat(f:Flat){
}

}
let b={area:20,location:'hyd'};
show(b);

/**class Flat implements Building{
    area:number;
    location:string;
    show(){
        throw new Error("method not implemented");
    }

}*/
class a{
    readonly ab;
 names:String;
 location:String;
 constructor(name:String,location:String){
    this.names=name;
    this.location=location;
 }
get names:String(){
    return this.names
}
}