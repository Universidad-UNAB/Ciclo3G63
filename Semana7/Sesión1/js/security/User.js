//Cargar de manera automatica los datos registrados
function loadTable() {
    $.ajax({
        url: 'http://localhost:9000/api/security/user',
        method: "GET",
        headers: {
            "Content-Type": "application/json"
        }
    }).done(function (items) {
        var registros = "";
        items.forEach(function (item, index, array) {                
                       
            registros +=`<tr>
                            <td>`+item.userName+`</td>
                            <td>***</td>  
                            <td>`+(item.personaId.primerNombre+` `+item.personaId.segundoNombre+` `+item.personaId.primerApellido+` `+item.personaId.segundoApellido).toUpperCase()+`</td>
                            <td>C-`+(item.rolId.codigo,' ',item.rolId.nombre).toUpperCase()+`</td>
                            <td>`+(item.estado == 1? 'Activo':'Inactivo').toUpperCase()+`</td>
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
        url: 'http://localhost:9000/api/security/user/'+id,
        method: "GET",
        headers: {
            "Content-Type": "application/json"
        }
    }).done(function (item) {       
        $("#id").val(item.id);
        $("#userName").val(item.userName);
        $("#userPassword").val(item.userPassword);  
        $("#personaId").val(item.personaId.id);  
        $("#rolId").val(item.rolId.id);        
        $("#estado").val(item.estado==true?1:0);
    })
}
//Agregar registros
function addRow() {
    $.ajax({
        url: 'http://localhost:9000/api/security/user',
        data: JSON.stringify({
            userName: $("#userName").val(),
            userPassword: $("#userPassword").val(),   
            personaId: {
                id:$("#personaId").val()
            }, 
            rolId: {
                id:$("#rolId").val()
            },       
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
        url: 'http://localhost:9000/api/security/user/'+ parseInt($("#id").val()),
        data: JSON.stringify({            
            userName: $("#userName").val(),
            userPassword: $("#userPassword").val(),   
            personaId: {
                id:$("#personaId").val()
            }, 
            rolId: {
                id:$("#rolId").val()
            },           
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
        url: 'http://localhost:9000/api/security/user/'+id,
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
        $("#userName").val("");
        $("#userPassword").val(""); 
        $("#personaId").val(""); 
        $("#rolId").val("");        
        $("#estado").val("");
}

//Cargar de manera automatica los datos registrados de personas
function loadTablePerson() {
    $.ajax({
        url: 'http://localhost:9000/api/security/person',
        method: "GET",
        headers: {
            "Content-Type": "application/json"
        }
    }).done(function (items) {
        var registros = '<option value="">--Seleccionar--</option>';
        items.forEach(function (item, index, array) {                
                       
            registros +=`<option value="`+item.id+`">`+item.primerNombre+` `+item.segundoNombre+` `+item.primerApellido+` `+item.segundoApellido+`</option>`;
        })
        $("#personaId").html(registros);
        Limpiar();        
    })
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
