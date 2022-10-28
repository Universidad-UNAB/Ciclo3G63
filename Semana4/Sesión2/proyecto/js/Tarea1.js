function Calcular(x){
    switch(x){
        case 1:
            var Monto, Cuota, Porcentaje;

            Monto = parseFloat(document.getElementById('monto').value);

            if(Monto>0 && !isNaN(Monto)){
                if(Monto<=50000){
                    Porcentaje=2;
                }else{
                    Porcentaje=3;
                }
                Cuota = (Monto*Porcentaje)/100

                //Salida de la infomracion 
                document.getElementById('porcentaje').value = Porcentaje+' %.';
                document.getElementById('valorCuota').value = '$ '+Cuota;
            }else{
                alert("Ha ingresado un dato no valido.");
                document.getElementById('monto').value = "";  
            }
            break;
        case 2:
            var CantidadEstudiante, Promedio, CantidadMateria, Descuento, Iva, ValorBruto, ValorNeto, i, ValorUnitario, Nombre, html, ColorNovedad;

            CantidadEstudiante= parseInt(document.getElementById('cantidadEstudiante').value); 
            ValorUnitario=8000;
            html="";
            for(i=1;i<=CantidadEstudiante;i++){
                Nombre = prompt("Digite el nombre del estudiante "+i+": ");
                CantidadMateria = parseInt(prompt("Digite la cantidad de materias del estudiante "+Nombre+": "));
                Promedio = parseInt(prompt("Digite el promedio de "+Nombre+": "));
                
                if(Promedio>0 && Promedio<=10){
                    ValorBruto=CantidadMateria*ValorUnitario;
                    if(Promedio<9){
                        Descuento=0;
                        Iva= ValorBruto*0.1;
                        colorNovedad="table-danger";
                    }else{
                        Descuento=ValorBruto*0.3;
                        Iva= 0;
                        colorNovedad="table-info";
                    }
                    ValorNeto= ValorBruto+Iva-Descuento;

                    //Aqui es la salida
                    html+=`<tr>
                            <td>`+Nombre+`</td>
                            <td>`+CantidadMateria+`</td>
                            <td class="`+colorNovedad+`">`+Promedio+`</td>
                            <td>`+ValorBruto+`</td>
                            <td>`+Descuento+`</td>
                            <td>`+Iva+`</td>
                            <td>`+ValorNeto+`</td>
                        </tr>`;
                }else{
                    alert("Ha ingresado un promedio no valido, vuelva a ingresar datos del estudiante.");
                    i--;
                }
            }
            document.getElementById('dataResult').innerHTML = html;
            print();
            break;
        case 3: 
            break;
    }

}

function Limpiar(x){
    switch(x){
        case 1:
            document.getElementById('monto').value="";
            document.getElementById('porcentaje').value="0";
            document.getElementById('valorCuota').value="0";
            break;
        case 2:
           
            break;
        case 3: 
            break;
    }

}
