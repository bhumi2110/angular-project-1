//function processStock(s:Stock){//we can pass class name as parameter
function processStock(st) {
    console.log(st.currentRate + '' + st.qty);
}
processStock({ qty: 33, currentRate: 44 });
function displayStock(st) {
}
displayStock({ name: 'DFA', address: 'DFDF' });
