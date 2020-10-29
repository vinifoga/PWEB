function retangulo(base,altura){
    this.base = parseFloat(base);
    this.altura = parseFloat(altura);
    area = base*altura;
    alert(area);
    criarRetanguloVisual(base,altura);
}
function criarRetanguloVisual(base,altura){
    document.getElementById("retangulo").style.display="block";
    document.getElementById("retangulo").style.background = "#76D6DF";
    document.getElementById("retangulo").style.height = `${altura*50}px`;
    document.getElementById("retangulo").style.width = `${base*50}px`;
    document.getElementById("area").innerHTML = `${base*altura} cm²`;
}
function criarContas(){
    function Conta(){
        var nome;
        this.getNome = function(){
            return nome;
        };
        this.setNome = function(value){
            nome = value;
        };
    
        var banco;
        this.getBanco = function(){
            return banco;
        };
        this.setBanco = function(value){
            banco = value;
        };
    
        var numConta;
        this.getNumConta = function(){
            return numConta;
        };
        this.setNumConta = function(value){
            numConta = value;
        };
    
        var saldo;
        this.getSaldo = function(){
            return saldo;
        };
        this.setSaldo = function(value){
            saldo = value;
        };
    }
    
    function ContaCorrente(){
        var saldoEspecial;
        this.getSaldoEspecial = function (){
            return saldoEspecial;
        };
        this.setSaldoEspecial = function(value){
            saldoEspecial = value;
        };
    }
    
    function ContaPoupanca(){
        var juros;
        this.getJuros = function(){
            return juros;
        };
        this.setJuros = function(value){
            juros = value;
        };
    }
    
    ContaCorrente.prototype = new Conta();
    ContaPoupanca.prototype = new Conta();
    
    nContaCorrente = new ContaCorrente();
    nContaPoupanca = new ContaPoupanca();
    
    nContaCorrente.setNome(document.getElementById('nomeCC').value);
    nContaCorrente.setBanco(document.getElementById('bancoCC').value);
    nContaCorrente.setNumConta(document.getElementById('numCC').value);
    nContaCorrente.setSaldo(document.getElementById('saldoCC').value);
    nContaCorrente.setSaldoEspecial(document.getElementById('saldoECC').value);

    document.getElementById("resultCC").innerHTML = `<b>Conta Corrente<b> <br><br>${nContaCorrente.getNome()} <br><br> ${nContaCorrente.getBanco()}  <br><br> ${nContaCorrente.getNumConta()} <br><br> ${nContaCorrente.getSaldo()}  <br><br> ${nContaCorrente.getSaldoEspecial()}`;

    nContaPoupanca.setNome(document.getElementById('nomeCP').value);
    nContaPoupanca.setBanco(document.getElementById('bancoCP').value);
    nContaPoupanca.setNumConta(document.getElementById('numCP').value);
    nContaPoupanca.setSaldo(document.getElementById('saldoCP').value);
    nContaPoupanca.setJuros(document.getElementById('jurosCP').value);

    document.getElementById("resultCP").innerHTML = `<b>Conta Poupança<b> <br><br>${nContaPoupanca.getNome()} <br><br> ${nContaPoupanca.getBanco()}  <br><br> ${nContaPoupanca.getNumConta()} <br><br> ${nContaPoupanca.getSaldo()}  <br><br> ${nContaPoupanca.getJuros()}`;


}
