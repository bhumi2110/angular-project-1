import React, { useState } from 'react';
import AddDish from '../AddDish/AddDish';
 
export const ShowDish = (props) => {
 
    const [dish,setDishes] = useState([]);
 
    const showDishes = (e)=>{
        setDishes([...dish,e])
    }

  return (
<div>
<AddDish showDishes = {showDishes}/>
<table>
<thead>
<tr>
<th>Id</th>
<th>Name</th>
<th>Price</th>
</tr>
</thead>
<tbody>
          {dish.map((dish) => (
<tr key={dish.id}>
<td>{dish.id}</td>
<td>{dish.name}</td>
<td>{dish.price}</td>
</tr>
          ))}
</tbody>
</table>

 
    </div>
  );
};
 
export default ShowDish;