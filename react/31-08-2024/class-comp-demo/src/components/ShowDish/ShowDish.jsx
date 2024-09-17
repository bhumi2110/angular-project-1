import { Component } from "react";

export default class ShowDish extends Component{
    constructor(props){
        super(props)
    }
    render(){
        return(
        <table className="dish-table">
            <thead>
                <th>id</th>
                <th>name</th>
                <th>price</th>
            </thead>
            <tbody>
                    {this.props.dishes.map(d => 
                        <tr>
                            <td>{d.id}</td>
                            <td>{d.name}</td>
                            <td>{d.price}</td>
                        </tr>
                    
                    )}
                </tbody>
        </table>
        );
    }
}