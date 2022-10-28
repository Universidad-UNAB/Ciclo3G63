//Cargar de manera automatica los datos registrados
function loadTable() {
    $.ajax({
        url: 'http://localhost:9000/api/security/person',
        method: "GET",
        headers: {
            "Content-Type": "application/json"
        }
    }).done(function (items) {
        var registros = "";
        items.forEach(function (item, index, array) {                
                       
            registros +=`<tr>
                            <td>`+item.tipoDocumento+`-`+item.documento+`</td>
                            <td>`+item.primerNombre+` `+item.segundoNombre+` `+item.primerApellido+` `+item.segundoApellido+`</td>
                            <td>`+item.correo+`</td>
                            <td>`+item.telefono+`</td>                            
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
        url: 'http://localhost:9000/api/security/person/'+id,
        method: "GET",
        headers: {
            "Content-Type": "application/json"
        }
    }).done(function (item) {       
        $("#id").val(item.id);
        $("#tipoDocumento").val(item.tipoDocumento);
        $("#documento").val(item.documento);
        $("#primerNombre").val(item.primerNombre);
        $("#segundoNombre").val(item.segundoNombre);
        $("#primerApellido").val(item.primerApellido);
        $("#segundoApellido").val(item.segundoApellido);
        $("#correo").val(item.correo);
        $("#telefono").val(item.telefono);
        $("#estado").val(item.estado==true?1:0);
    })
}
//Agregar registros
function addRow() {
    $.ajax({
        url: 'http://localhost:9000/api/security/person',
        data: JSON.stringify({
            tipoDocumento: $("#tipoDocumento").val(),
            documento: $("#documento").val(),
            primerNombre: $("#primerNombre").val(),
            segundoNombre: $("#segundoNombre").val(),
            primerApellido: $("#primerApellido").val(),
            segundoApellido: $("#segundoApellido").val(),
            correo: $("#correo").val(),
            telefono: $("#telefono").val(),
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
        url: 'http://localhost:9000/api/security/person/'+ parseInt($("#id").val()),
        data: JSON.stringify({
            tipoDocumento: $("#tipoDocumento").val(),
            documento: $("#documento").val(),
            primerNombre: $("#primerNombre").val(),
            segundoNombre: $("#segundoNombre").val(),
            primerApellido: $("#primerApellido").val(),
            segundoApellido: $("#segundoApellido").val(),
            correo: $("#correo").val(),
            telefono: $("#telefono").val(),
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
        url: 'http://localhost:9000/api/security/person/'+id,
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
        $("#tipoDocumento").val("");
        $("#documento").val("");
        $("#primerNombre").val("");
        $("#segundoNombre").val("");
        $("#primerApellido").val("");
        $("#segundoApellido").val("");
        $("#correo").val("");
        $("#telefono").val("");
        $("#estado").val("");
}
