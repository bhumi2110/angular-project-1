import React, { useState } from 'react';
import { addStock } from '../../repository/StockRepo';
 
const AddStock = () => {
    const [id, setId] = useState('');
    const [name, setName] = useState('');
    const [price, setPrice] = useState('');
 
    const handleAddStock = async () => {
        const stock = { id:id, name:name, price:price };
         addStock(stock);
        setId('');
        setName('');
        setPrice('');
    };
 
    return (
<div>
<h2>Add Stock</h2>
<div>
<label>Id:</label>
<input type="text" value={id} onChange={(e) => setId(e.target.value)} />
</div>
<div>
<label>Name:</label>
<input type="text" value={name} onChange={(e) => setName(e.target.value)} />
</div>
<div>
<label>Price:</label>
<input type="text" value={price} onChange={(e) => setPrice(e.target.value)} />
</div>
<button onClick={handleAddStock}>Add Stock</button>
</div>
    );
};
 
export default AddStock;