function validar(){
    var nome = document.formPrincipal.elements[0].value;
    var email = document.formPrincipal.elements[1].value;
    var comentario = document.formPrincipal.elements[2].value;
    var opcao = '';
    var radios = document.getElementsByName("pergunta");
    for (var i = 0; i < radios.length; i++) {
        if (radios[i].checked) {
            opcao = radios[i].value;
        }
    }
    if (nome.length < 10){
        alert("Nome precisa ter mais que 10 caracteres");
        document.formPrincipal.elements[0].focus();
    }
    if (email.indexOf("@")==-1){
        alert("Email inválido, falta '@'")
    }
    if (email.indexOf(".")==-1){
        alert("Email inválido, falta '.'")
    }
    if(comentario.length < 20){
        alert("Comentário precisa ter mais de 20 caracteres")
    }
    if(opcao == ''){
        alert("Preenchimento da pegunta é obrigatório")
    }
    else if (opcao == 'sim'){
        alert("Volte sempre à esta página!")
    }
    else if(opcao == 'nao'){
        alert("Que bom que você voltou a visitar esta página!")
    }

}