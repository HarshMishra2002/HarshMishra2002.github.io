

function alerted(){
    
    swal("Good job!", "You clicked the button!", "success");
    
}
function addRow() {
          
    var myName = document.getElementById("inputfname");
    var mobile = document.getElementById("inputphone");
    var state = document.getElementById("inputState");
    var city = document.getElementById("inputCity");
    var req = document.getElementById("requirements");
    var table = document.getElementById("myTableData");
 
    var rowCount = table.rows.length;
    var row = table.insertRow(rowCount);
 
    row.insertCell(0).innerHTML= myName.value;
    row.insertCell(1).innerHTML= mobile.value;
    row.insertCell(2).innerHTML= state.value;
    row.insertCell(3).innerHTML= city.value;
    row.insertCell(4).innerHTML= req.value;
 
}

