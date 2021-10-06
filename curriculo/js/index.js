var nome = "Vinicius Birreik"
var cargo = "Estagiário"

var nomehtml = document.getElementById("nome-no-html");
var cargohtml = document.getElementById("cargo-html");
var texto1 = document.getElementById("texto1");
var texto2 = document.getElementById("texto2");

function colocarnomenohtml(nome){
    nomehtml.innerHTML = nome;
}
function colocarcargo(cargo){
    cargohtml.innerHTML = cargo;
}
function logarnome(){
    console.log(nome);
}
function clicknoprojetos(){
    console.log("clicou no botão projetos")
    texto2.style.display = "block";
    texto1.style.display = "none";
}
function clicknosobre(){
    console.log("clicou no botão sobre")
    texto1.style.display = "block";
    texto2.style.display = "none";

}

colocarnomenohtml(nome)
colocarcargo(cargo)
