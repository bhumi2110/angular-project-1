
//function processStock(s:Stock){//we can pass class name as parameter

//}
//import{ETF,MutualFund}from './StockManagement'
type stockType={
    qty:number,currentRate:number
}
function processStock(st:stockType){
    console.log(st.currentRate+''+st.qty);
}
processStock({qty:33,currentRate:44});
function displayStock(st:{name:String,address:String})
{

}
displayStock({name:'DFA',address:'DFDF'})

class sample{
    name?:string | null;// variable is optional
    constructor();//overloading is happening only when implementation is not written
    constructor(){
this.name=null;
    }
}
