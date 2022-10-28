// "use strict";
//Operadores lógicos, relacionales y ariméticos en javascript

function Calcular(valor){ 
    //     var a = "Hola, buenas noches";
    //     alert(a);

    //     a = 2+4
    //     alert(a);

    //     a = [2,4,1,3];
    //     alert(a);

    //     a = [2,5,"hola",2,"buenas noches"];
    //     alert(a);

    //     a = [[2,3,4],[2,3,5,6],"dhsfd",["Hola","Jesus"]];
    //     alert(a);
        
    // var suma = 0;
    // n1 = 5;
    // n2 = 10;
    
    // suma=n1+n2;

    // alert("La suma es: "+suma)

    if(valor==1){
        alert("Ejemplo 1. ");
        
        var cantidad=0; 
        var valorUnitario=0; 
        var totalPagar=0;
        
        cantidad = parseInt(prompt("Digite la cantidad de llantas que desea llevar: "));

        if(cantidad>0){
            if(cantidad<5){
                valorUnitario=800;
            }else{
                valorUnitario=700;
            }
            totalPagar = cantidad*valorUnitario;

            alert("Por la compra de "+cantidad+" llantas, usted debe pagar "+totalPagar);
        }else{
            alert("Dato no valido para la venta.");
        }
    }

    if(valor==2){
        alert("Ejemplo 2. ");

        var compra = 0, descuento=0, compraNeta=0, balota=0;

        compra = parseFloat(prompt('Digite el valor de la compra: '));
        
        if(compra>0  && !isNaN(compra)){
            balota = parseInt(prompt('Digite un número al azar: '));
            if(!isNaN(balota)){
                if(balota<74){
                    descuento=compra*0.15;
                }else{
                    descuento=compra*0.20;
                }
                compraNeta = compra-descuento;
                alert("Compra: "+compra+" | Balota: "+balota+" | Descuento: "+descuento+" | Compra Neta: "+compraNeta);
                
            }else{
                alert("Ha ingresado un dato no valido para el programa. Solo datos númericos.")
            }
        }else{
            alert("Valor de la compra no es valida.")
        }

    }

    if(valor==3){
        alert("Ejemplo 3. ");
        var sexo, numPul, edad;

        sexo = prompt("Digite F/M");
        if(sexo=='M' || sexo=='F'){
            edad = parseInt(prompt('Digite su edad 0-130 años.'));
            if(edad>0 && edad<=130 && !isNaN(edad)){
                if(sexo=='F'){
                    numPul = (220-edad)/10;
                }else{
                    numPul = (210-edad)/10;
                }
                alert("La persona de genero "+(sexo=='F'?'femenino':'masculino')+" y con edad "+edad+" años debe tener "+numPul+" pulsaciones.");
            }else{
                alert("Ha ingresado una edad no valida para el sistema.")
            }
        }else{
            alert('Ha ingresado un genero no valido para el sistema.');
        }
    }
}
