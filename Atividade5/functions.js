function media(){
    nome = prompt("Qual o nome?");
    nota1 = prompt("Qual a nota 1?");
    nota2 = prompt("Qual a nota 2?");
    nota3 = prompt("Qual a nota 3?"); 
    
    n1=parseFloat(nota1);
    n2=parseFloat(nota2);
    n3=parseFloat(nota3);
    let media = (n1+n2+n3)/3;
    alert("Média do " + nome + " é " + media);
}
function operacoes(){
    num1 = prompt("Insira um número");
    num2 = prompt("Insira outro número");

    n1=parseFloat(num1);
    n2=parseFloat(num2);
    let soma = n1+n2;
    let sub = n1-n2;
    let prod = n1*n2;
    let div = n1/n2;
    let rest = n1%n2;

    alert("Soma=" + soma + '\n'
          +"Subtração=" + sub + '\n'
          +"Produto=" + prod + '\n'
          +"Divisão=" + div + '\n'
          +"Resto da Divisão=" + rest + '\n')
}