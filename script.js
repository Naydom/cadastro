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


    if (cpf.value=="" || !validacpf(cpf.value)) {
        window.alert ("CPF inválido");
        return false;
    }

    if (rg.value=="") {
        window.alert ("RG inválido");
        return false;
    }
    if (sexo.value==""){
        window.alert ("sexo inválido");
        return false;
    }
    if (endereco.value==""){
        window.alert ("Endereço inválido");
        return false;
    }
    if (numero.value==""){
        window.alert ("Número do endereço inválido");
        return false;
    }

    return true;
}

function validacpf(cpf) {
    if (cpf.length =!11){
        return false;
    }else{
        var numeros = cpf.substring(0, 9);
        var digitos = cpf.substring(9);

        var soma = 0;
        for (var i = 10; i > 1; i--) {
            soma += numeros.charAt(10 - i) * i;
        }
    
        var resultado = soma % 11 < 2 ? 0 : 11 - (soma % 11);

        // Validação do primeiro digito
        if(resultado != digitos.charAt(0)) {
            return false;
        }

        soma = 0;
        numeros = cpf.substring(0,10);

        for ( var k = 11; k > 1; k--) {
            soma += numeros.charAt(11 - k) * k;
        }

        resultado = soma % 11  < 2 ? 0 : 11 - (soma % 11);
        
        //Validação do segundo digito
        if (resultado != digitos.charAt(1)) {
            return false;
        }

        

        return true;
    }
}