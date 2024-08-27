const obj={
    mesg:'welcome to actalent',
    show:function(){
        console.log(this.mesg)
    }
}
obj.show();
obj.mesg="defg";
const obj2=class{
    show()
    {
        console.log('object with class')
    }

}
new obj2().show();

class stock{
    id;
    name;
    price;
    constructor(id,name,price)
    {
        this.id=id;
        this.name=name;
        this.price=price;
    }
    display()
    {
console.log(${this.id} ${this.name} ${this.price})
    }
}
let instance1=new stock(1,"abc",444);
instance1.display();