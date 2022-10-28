//Cargar de manera automatica los datos registrados
function loadTable() {
    $.ajax({
        url: 'http://localhost:9000/api/security/role',
        method: "GET",
        headers: {
            "Content-Type": "application/json"
        }
    }).done(function (items) {
        var registros = "";
        items.forEach(function (item, index, array) {                
                       
            registros +=`<tr>
                            <td>`+item.codigo+`</td>
                            <td>`+item.nombre+`</td>                             
                            <td>`+(item.estado == 1? 'Activo':'Inactivo')+`</td>
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
        url: 'http://localhost:9000/api/security/role/'+id,
        method: "GET",
        headers: {
            "Content-Type": "application/json"
        }
    }).done(function (item) {       
        $("#id").val(item.id);
        $("#codigo").val(item.codigo);
        $("#nombre").val(item.nombre);        
        $("#estado").val(item.estado==true?1:0);
    })
}
//Agregar registros
function addRow() {
    $.ajax({
        url: 'http://localhost:9000/api/security/role',
        data: JSON.stringify({
            codigo: $("#codigo").val(),
            nombre: $("#nombre").val(),           
            estado: parseInt($("#estado").val())
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
        url: 'http://localhost:9000/api/security/role/'+ parseInt($("#id").val()),
        data: JSON.stringify({            
            codigo: $("#codigo").val(),
            nombre: $("#nombre").val(),            
            estado: parseInt($("#estado").val())
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
        url: 'http://localhost:9000/api/security/role/'+id,
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
        $("#codigo").val("");
        $("#nombre").val("");        
        $("#estado").val("");
}
