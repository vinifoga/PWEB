var total=0, maisVelha=0, maisNova=0, qtdPessimo=0, porcentOtimoBom=0, qtdH=0, qtdM=0, otimoBom=0, media=0, somaidade=0;

function salvar(){
    total++;
    document.getElementById('resultados').style.display = "block";
    var idade = parseInt(document.getElementById('idade').value);
    var radioSexo = document.getElementsByName('sexo');
    var radioNotas = document.getElementsByName('nota');    

    for (var i=0; i < radioSexo.length; i++){
        if(radioSexo[i].checked){
            var sexo = radioSexo[i].value;
        }
    }
    for (var i=0; i < radioNotas.length; i++){
        if(radioNotas[i].checked){
            var nota = radioNotas[i].value;
        }
    }
    if (sexo == 'fem'){
        qtdM++;
    }
    if (sexo == 'masc'){
        qtdH++;
    }
    if (nota == 1){
        qtdPessimo++;
    }
    if(nota == 4 || nota == 3){
        otimoBom++;
        
    }    
    if(total == 1){
        maisVelha=idade;
        maisNova=idade;        
    }
    if(idade <= maisNova){
        maisNova = idade;
    }
    if(idade > maisVelha){
        maisVelha = idade;
    }
    porcentOtimoBom=((otimoBom/total)*100).toFixed(2);
    somaidade=somaidade+idade;
    media=(somaidade/total).toFixed(2);

    document.getElementById('total').innerHTML = `Total de Respostas = ${total}`;
    document.getElementById('medIdade').innerHTML = `Média da Idade dos Entrevistados = ${media}`;
    document.getElementById('maisVelha').innerHTML = `Idade da mais pessoa Velha = ${maisVelha}`;
    document.getElementById('maisNova').innerHTML = `Idade da pessoa mais Nova = ${maisNova}`;
    document.getElementById('qtdPessimo').innerHTML = `Quantidade que respondeu Péssimo = ${qtdPessimo}`;
    document.getElementById('porcentOtimoBom').innerHTML = `Porcentagem que respondeu Bom ou Ótimo = ${porcentOtimoBom} %`;
    document.getElementById('numMulheres').innerHTML = `Quantidade de Mulheres = ${qtdM}`;
    document.getElementById('numHomens').innerHTML = `Quantidade de Homens = ${qtdH}`;


}