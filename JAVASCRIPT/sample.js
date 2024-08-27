function add {
    let code=document.getElementById("cod").value;
    let name=document.getElementById("nam").value;
    let price=document.getElementById("pric").value;
if(code&name&price)
{
    table.insert.row()
    newRow.insertCell(0).innerText = code;
    newRow.insertCell(1).innerText = name;
    newRow.insertCell(2).innerText = price;
    document.getElementById("cod").value='';
    document.getElementById("nam").value='';
    document.getElementById("pric").value='';
}
   
}
function cancel{
    document.getElementById("cod").value='';
    document.getElementById("nam").value='';
    document.getElementById("pric").value='';
}
