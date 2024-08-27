
function cancel(){
    document.getElementById('code').value='';
    document.getElementById('name').value='';
    document.getElementById('price').value='';
}
function add() {
    let code = document.getElementById('code').value;
    let name = document.getElementById('name').value;
    let price = document.getElementById('price').value;

    if (code && name && price) {
        const table = document.querySelector('table tbody');
        const newRow = table.insertRow();
        const codeCell = newRow.insertCell(0);
        const nameCell = newRow.insertCell(1);
        const priceCell = newRow.insertCell(2);
        codeCell.textContent = code;
        nameCell.textContent = name;
        priceCell.textContent = price;

        // Clear the input fields
        document.getElementById('code').value = '';
        document.getElementById('name').value = '';
        document.getElementById('price').value = '';
    } else {
        alert('Please fill in all fields');
    }
}