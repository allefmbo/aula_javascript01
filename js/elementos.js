function clicou(){
    document.getElementById("agradecimento").innerHTML = "<b>Obrigado por Clicar</b>";
    //console.log(document.getElementById("agradecimento"));
    //alert("Obrigado por clicar");
}

function redirecionar(){
    window.open("https://github.com/allefmbo");
    //window.location.href = "https://github.com/allefmbo";
}

function trocar(elemento){
    //document.getElementById("mousemove").innerHTML = "Obrigado por passar o mouse";
    elemento.innerHTML = "Obrigado por passar o mouse";
    //alert("trocar texto");
}

function voltar(elemento){
    //document.getElementById("mousemove").innerHTML = "Passe o mouse aqui";
    elemento.innerHTML = "Passe o mouse aqui.";
}

function load(){
    alert("Pagina carregada");

}

function funcaoChange(elemento){
    console.log(elemento.value)
}