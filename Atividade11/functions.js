function transformar(){
    if( (document.getElementById("maiusculas").checked) && (document.getElementById("minusculas").checked) ){
        alert("Selecione apenas um CheckBox");
    }
    else if(document.getElementById("maiusculas").checked){
        var text = document.getElementById("texto").value;
        document.getElementById("texto").value = text.toUpperCase();
    }
    else if(document.getElementById("minusculas").checked){
        var text = document.getElementById("texto").value;
        document.getElementById("texto").value = text.toLowerCase();
    }
}