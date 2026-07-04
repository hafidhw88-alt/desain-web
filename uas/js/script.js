function login(){

let email=document.querySelector("input[type=email]").value;

let password=document.querySelector("input[type=password]").value;

if(email=="admin@gmail.com" && password=="12345"){

alert("Login Berhasil");

window.location="dashboard.html";

}else{

alert("Email atau Password Salah");

}

}