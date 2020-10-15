function verificar(n1,n2,n3){
    document.getElementById('resultado').style.display = "block";  
    document.getElementById("result1").innerHTML = '';
    document.getElementById("result2").innerHTML = '';
    var maior;  
    if(n1==n2 && n2==n3){
        document.getElementById("result1").innerHTML = "Os três valores são iguais"
    }
    else if(n1==n2){
        document.getElementById("result1").innerHTML = "A e B são iguais"
    }
    else if(n1==n3){
        document.getElementById("result1").innerHTML = "A e C são iguais"
    }
    else if(n2==n3){
        document.getElementById("result1").innerHTML = "B e C são iguais"
    }
    maior=n1;
    if(n2>maior){
        maior=n2;
    }
    if(n3>maior){
        maior=n3;
    }
    document.getElementById("result2").innerHTML = `Maior valor é ${maior}`;


}