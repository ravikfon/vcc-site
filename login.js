function entrar(){

let usuario = document.getElementById("usuario").value;
let senha = document.getElementById("senha").value;

if(usuario === "admin" && senha === "geko10"){

    localStorage.setItem("adminLogado","true");

    window.location="painel.html";

}else{

    document.getElementById("msg").innerHTML="Login incorreto";

}

}