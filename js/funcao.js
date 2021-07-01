function soma (n1, n2){
    return n1 + n2;
};

function setReplace(frase, nome, novo_nome){
    return frase.replace(nome, novo_nome)
}

var validar = 0; //variavel global 
function validade(idade){
    //var validar = true; variavel local
    if (idade >=18){
        validar = true
    }else{
        validar = false;
    }
    return validar;
}

var idade = prompt("Qual é a sua Idade?")
console.log(validade(idade));


//alert(soma(5, 10));