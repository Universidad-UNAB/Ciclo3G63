//Cargar de manera automatica los datos registrados
function loadTable() {
    $.ajax({
        url: 'http://localhost:9000/api/security/viewRole',
        method: "GET",
        headers: {
            "Content-Type": "application/json"
        }
    }).done(function (items) {
        var registros = "";
        items.forEach(function (item, index, array) {                
                       
            registros +=`<tr>
                            <td>`+item.rolId.nombre+`</td>
                            <td>`+item.vistaId.nombre+`</td>                            
                            <td><img width="16" height="16" src="../../assets/icon/edit-svgrepo-com.svg" onclick='findById(`+item.id+`)'></td>
                            <td><img width="16" height="16" src="../../assets/icon/delete-bin-svgrepo-com.svg" onclick='deleteById(`+item.id+`)'></td>
                        </tr>`;
        })
        $("#resultData").html(registros);
        Limpiar();        
    })
}

//Consultar registro por id
function findById(id) {
    $.ajax({
        url: 'http://localhost:9000/api/security/viewRole/'+id,
        method: "GET",
        headers: {
            "Content-Type": "application/json"
        }
    }).done(function (item) {       
        $("#id").val(item.id);
        $("#rolId").val(item.rolId.id);
        $("#vistaId").val(item.vistaId.id);                
    })
}
//Agregar registros
function addRow() {
    $.ajax({
        url: 'http://localhost:9000/api/security/viewRole',
        data: JSON.stringify({
            rolId: {
                id:$("#rolId").val()
            },
            vistaId: {
                id:$("#vistaId").val()
            }            
        }),
        method: "POST",
        headers: {
            "Content-Type": "application/json"
        }
    }).done(function (result) {       
        loadTable();
        Limpiar();
    })
}

//Agregar registros
function updateRow() {
    $.ajax({
        url: 'http://localhost:9000/api/security/viewRole/'+ parseInt($("#id").val()),
        data: JSON.stringify({            
            rolId: {
                id:$("#rolId").val()
            },
            vistaId: {
                id:$("#vistaId").val()
            }
        }),
        method: "PUT",
        headers: {
            "Content-Type": "application/json"
        }
    }).done(function (result) {       
        loadTable();
        Limpiar();
    })
}



//Eliminar registro por id
function deleteById(id) {
    $.ajax({
        url: 'http://localhost:9000/api/security/viewRole/'+id,
        method: "DELETE",
        headers: {
            "Content-Type": "application/json"
        }
    }).done(function (result) {       
        loadTable();
    })
}

function Limpiar(){
    $("#id").val("");
    $("#id").val("");
    $("#rolId").val("");
    $("#vistaId").val("");        
}


//Cargar de manera automatica los datos registrados de roles
function loadTableRole() {
    $.ajax({
        url: 'http://localhost:9000/api/security/role',
        method: "GET",
        headers: {
            "Content-Type": "application/json"
        }
    }).done(function (items) {
        var registros = '<option value="">--Seleccionar--</option>';
        items.forEach(function (item, index, array) {                
                       
            registros +=`<option value="`+item.id+`">`+item.nombre+`</option>`;
        })
        $("#rolId").html(registros);
        Limpiar();        
    })
}


//Cargar de manera automatica los datos registrados de roles
function loadTableView() {
    $.ajax({
        url: 'http://localhost:9000/api/security/view',
        method: "GET",
        headers: {
            "Content-Type": "application/json"
        }
    }).done(function (items) {
        var registros = '<option value="">--Seleccionar--</option>';
        items.forEach(function (item, index, array) {                
                       
            registros +=`<option value="`+item.id+`">`+item.nombre+`</option>`;
        })
        $("#vistaId").html(registros);
        Limpiar();        
    })
}