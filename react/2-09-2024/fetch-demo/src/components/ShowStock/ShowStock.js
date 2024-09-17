// src/components/ShowStock/ShowStock.js
import React, { useEffect, useState } from 'react';
import { getStock } from '../../repository/StockRepo';

const ShowStock = () => {
    const [stocks, setStocks] = useState([]);

    useEffect(() => {
        const fetchStocks = async () => {
            const data = await getStock();
            setStocks(data.Stocks);
        };
        fetchStocks();
    }, []);

    return (
        <div>
            <h2>Show Stock</h2>
            <table>
                <thead>
                    <tr>
                        <th>Id</th>
                        <th>Name</th>
                        <th>Price</th>
                    </tr>
                </thead>
                <tbody>
                    {stocks.map((stock) => (
                        <tr key={stock.id}>
                            <td>{stock.id}</td>
                            <td>{stock.name}</td>
                            <td>{stock.price}</td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    );
};

export default ShowStock;
