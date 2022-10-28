function Login() {
    var user = document.getElementById('userName').value;
    var password = document.getElementById('userPassword').value;


    if (user == 'admin' && password == "pwd") {
        alert('¡Bienvenido!');
        window.location.assign("view/dashboard.html");
    }else{
        alert('¡Error, revisar credenciales!');
        document.getElementById('userName').value="";
        document.getElementById('userPassword').value="";
    }
}

function SignOut() {
    alert('Gracias por su visita. Felíz día');
    window.location.assign("../index.html");

}