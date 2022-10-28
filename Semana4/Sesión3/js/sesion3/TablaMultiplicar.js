function CrearTabla(x){
    var i= 0;
    var htmlHead, htmlBody;
    htmlBody="";
    htmlHead="<tr><td>Tabla de multiplicar "+x+"</td></tr>";

    for(i=1;i<=10;i++){
        htmlBody+="<tr><td>"+x+" * "+i+" = "+(i*x)+"</td></tr>";
    }

    document.getElementById('tituloTabla').innerHTML = htmlHead;
    document.getElementById('cuerpoTabla').innerHTML = htmlBody;

}