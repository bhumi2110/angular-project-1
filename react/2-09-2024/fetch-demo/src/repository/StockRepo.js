export const addStock = async (stock) => {
    console.log(JSON.stringify(stock))
    const response =fetch('http://localhost:3000/Stocks', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({
                id:stock.id,
                 name:stock.name,
                price:stock.price
})
    });
    return response.json();
};
 
export const getStock = async () => {
    const response = await fetch('http://localhost:3000/Stocks');
    return response.json();
};