import {Component} from 'react'
//import Dishes from "../../Services/DishService";
import ShowDish from '../ShowDish/ShowDish';
import './AddDish.css'
export default class AddDish extends Component{
    constructor(props){
super(props)
this.state={
    id:0,
    name:'',
    price:0,
    dishes:[{id:1,name:'Biryani',price:125}]
};
    }
    addHandler=()=>{
        this.setState({dishes:[...this.state.dishes,{id:this.state.id,name:this.state.name,price:this.state.price}]})
    }
    nameChange=(e)=>{
        this.setState({name:e.target.value})
    }
    priceChange=(e)=>{
        this.setState({price:e.target.value})
    }

render(){
    return(
<div class="form-container">
    id<input type="text" value={this.state.id} onChange={(e)=>{this.setState({id:e.target.value})}}/>
    <br/>
    name<input type="text" value={this.state.name} onChange={this.nameChange}/><br/>
price<input type="text" value={this.state.price}onChange={this.priceChange}/><br/>
<button onClick={this.addHandler}>add</button>
<ShowDish dishes={this.state.dishes} />
</div>
    )
}
}