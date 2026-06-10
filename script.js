function saudarEstudante(){
    var nome = document.getElementById("campoNome").value;
    if(nome == ""){
        alert("Por favor, digite o seu nome");
    }else{
        document.getElementById("mensagemSaida").innerHTML = "Bem-vindo ao ambiente de DEV," + nome;
    }
}