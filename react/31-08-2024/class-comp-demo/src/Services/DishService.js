
export default class Dishes{
    static Dishes={data:[{id:1,name:'Biryani',price:125}]}
    static getDishes(){
        return this.Dishes;
    }
    static AddDish(id,name,price){
        //this.setState(current=>[...current,{id:id,name:name,price:price}])
        this.Dishes.push({id,name,price})
    }
}