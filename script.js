console.log ("JavaScript Carregada");

function validacao() {
    var nome = document.getElementById("nome");
    var cpf = document.getElementById("cpf")
    var rg = document.getElementById("rg")
    var sexo = document.getElementById("sexo")
    var endereco = document.getElementById("endereco")
    var numero = document.getElementById("numero")
    if (nome.value =="") {
        window.alert ("Digite um nome");
        return false;
    }
    if (cpf.value=="") {
        window.alert ("CPF inválido");
        return false;
    }
    if (rg.value=="") {
        window.alert ("RG inválido");
    }
    if (sexo.value==""){
        window.alert ("sexo inválido");
    }
    if (endereco.value==""){
        window.alert ("Endereço inválido");
    }
    if (numero.value==""){
        window.alert ("Número do endereço inválido");
    }
}