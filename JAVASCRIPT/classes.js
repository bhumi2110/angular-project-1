/*
function visitor(name,purpose){
    this.name=name;
  this.show=function()
    {

        console.log(name,purpose);
    }
    console.log("the values are ");
}
let v= new visitor('abc','def');
v.show();
console.log(v['name']);
*/

class visitor{

    #name="anku";
    purpose="mcdsknc"
   process(){
      console.log("the values are ");
      
   }
   static c=0;
   get name(){return this.#name;}
   set name(d){this.#name = d;}
}
let v1= new visitor('abc','def');
v1.process();
console.log(v1['name']);
v1.name="bhumikareddy"
console.log(v1.name)

