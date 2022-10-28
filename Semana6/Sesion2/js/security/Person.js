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
            //registros += "<tr class='table-success'><td><a href='#' onclick='findById(" + item.id + ")'>" + item.id + "</a></td><td>" + item.codigo + "</td></td><td>" + item.descripcion + "</td></tr>";

            registros +=`<tr>
                            <td>`+item.tipoDocumento+`-`+item.documento+`</td>
                            <td>`+item.primerNombre+` `+item.segundoNombre+` `+item.primerApellido+`-`+item.segundoApellido+`</td>
                            <td>`+item.correo+`</td>
                            <td>`+item.telefono+`</td>
                            <td>`+(item.estado==1?'Activo':'Inactivo')+`</td>
                            <td><img class="iconData" src="../../assets/icon/edit-svgrepo-com.svg"></td>
                            <td><img class="iconData" src="../../assets/icon/delete-bin-svgrepo-com.svg"></td>
                        </tr>`;                     
        })
        $("#resultData").html(registros);
        Limpiar();        
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
    $("#celular").val("");
    $("#estado").val("");
}
