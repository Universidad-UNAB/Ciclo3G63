var n1,n2;
function CapturarDatos() {
    n1 = parseFloat(prompt("Digite número 1: "));
    n2 = parseFloat(prompt("Digite número 1: "));
}

function Sumar() {
    CapturarDatos();
    alert("Realizaré una suma");
    var Suma = n1 + n2;
    alert("La suma es: " + Suma);
}

function Restar() {
    CapturarDatos();
    alert("Realizaré una resta");
    var Resta = n1 - n2;
    alert("La resta es: " + Resta);
}

function Multiplicar() {
    CapturarDatos();
    alert("Realizaré una multiplicación");
    var multiplicacion = n1 * n2;
    alert("La multiplicación es: " + multiplicacion);
}

function Dividir() {
    CapturarDatos();
    alert("Realizaré una división");
    var Division = n1 / n2;
    alert("La división es: " + Division);
}

function Descuento(){
    alert("Estoy llegando a la función");
    var compra = 0;
    var nuevoValor=0;   
    var descuento = 0;

    compra =  parseFloat(prompt("Digite el valor de la compra: "));
    descuento=compra*0.1;
    nuevoValor = compra-descuento;

    var datosSalida = "Compra: "+compra+", Descuento: "+descuento+", Valor Neto: "+nuevoValor;
    document.getElementById('resultado').innerHTML = datosSalida;
}