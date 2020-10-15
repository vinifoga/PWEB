function criarAluno(){
    document.getElementById('aluno1').style.display = "block";  
    document.getElementById('aluno2').style.display = "block";  
    document.getElementById('aluno3').style.display = "block";  
    document.getElementById('aluno4').style.display = "block";  

    var Aluno1 = {};
    var RA1 = 'RA1';
    var Nome1 = 'Nome1'
    Aluno1[RA1]='0030481823014';
    Aluno1[Nome1]='Vinicius';
    document.getElementById('ra1').innerHTML = Aluno1.RA1;
    document.getElementById('nome1').innerHTML = Aluno1.Nome1;

    var Aluno2 = new Object();
    Aluno2.RA2 = "0030481823015";
    Aluno2.Nome2 = "João";
    document.getElementById('ra2').innerHTML = Aluno2.RA2;
    document.getElementById('nome2').innerHTML = Aluno2.Nome2;

    var Aluno3 = {
        RA3 : "0030481823016",
        Nome3 : "José"
    }
    document.getElementById('ra3').innerHTML = Aluno3.RA3;
    document.getElementById('nome3').innerHTML = Aluno3.Nome3;

    
    var Aluno4 = {};
    Aluno4.RA4 = "0030481823017";
    Aluno4.Nome4 = "Marcos";
    document.getElementById('ra4').innerHTML = Aluno4.RA4;
    document.getElementById('nome4').innerHTML = Aluno4.Nome4;

}