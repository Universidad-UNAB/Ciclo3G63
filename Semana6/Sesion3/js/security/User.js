//Listar personas
function loadPerson() {
    $.ajax({
        url: 'http://localhost:9000/api/security/person',
        method: "GET",
        headers: {
            "Content-Type": "application/json"
        }
    }).done(function (items) {
        var registros = "<option value=''>--Seleccionar--</option>";        
        items.forEach(function (item, index, array) {               
            registros+=`<option value='`+item.id+`'>`+item.primerNombre+` `+item.segundoNombre+` `+item.primerApellido+` `+item.segundoApellido+`</option>`;
        })
        $("#personaId").html(registros);            
    })
}

//Listar personas
function loadRole() {
    $.ajax({
        url: 'http://localhost:9000/api/security/rol',
        method: "GET",
        headers: {
            "Content-Type": "application/json"
        }
    }).done(function (items) {
        var registros = "<option value=''>--Seleccionar--</option>";        
        items.forEach(function (item, index, array) {               
            registros+=`<option value='`+item.id+`'>`+item.codigo+` `+item.nombre+`</option>`;
        })
        $("#rolId").html(registros);            
    })
}