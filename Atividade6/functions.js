var mode = true;
function changeMode() {    
    if(mode == false){
        document.body.style.backgroundColor = "#FFF";
        document.getElementById("changeMode").src='_images/lightMode.png'
        var divs = document.getElementsByTagName("h1");             
        for(var i = 0; i < divs.length; i++) {   
            var div = divs[i];                     
            div.style.color = '#000'; 
        }  
        var divs2 = document.getElementsByTagName("h2");             
        for(var i = 0; i < divs2.length; i++) {   
            var div = divs2[i];                     
            div.style.color = '#000';                 
        }
        var ps = document.getElementsByTagName("p");
        for(var i = 0; i < ps.length; i++){
            var p = ps[i];
            p.style.color = '#000';
        }                
        document.getElementById('resultado').style.backgroundColor = '#FFF';
        mode = true;
    }
    else{
        document.body.style.backgroundColor = "#000";
        document.getElementById("changeMode").src='_images/darkMode.png'
        var divs = document.getElementsByTagName("h1");             
        for(var i = 0; i < divs.length; i++) {   
            var div = divs[i];                     
            div.style.color = '#FFF'; 
        }  
        var divs2 = document.getElementsByTagName("h2");             
        for(var i = 0; i < divs2.length; i++) {   
            var div = divs2[i];                     
            div.style.color = '#FFF';                 
        }
        var ps = document.getElementsByTagName("p");
        for(var i = 0; i < ps.length; i++){
            var p = ps[i];
            p.style.color = '#FFF';
        }                
        document.getElementById('resultado').style.backgroundColor = '#000';
        mode = false;
    }   
}
function joga(opcao){
    document.getElementById('resultado').style.display = "block";
    // 1Pedra 2Papel 3Tesoura
    var choose = Math.random();
    var human = parseInt(opcao);
    if(choose>=0 && choose<=0.33){
        machine = 1;
    }
    if(choose>=0.34 && choose<=0.66){
        machine = 2;
    }
    if(choose>=0.67 && choose<=0.99){
        machine = 3;    }

    if(human === machine){
        if(machine===1){
            document.getElementById('result').innerHTML = `Máquina escolheu PEDRA e Humano escolheu PEDRA, JOGO EMPATADO`;
        }
        else if(machine===2){
            document.getElementById('result').innerHTML = `Máquina escolheu PAPEL e Humano escolheu PAPEL, JOGO EMPATADO`;
        }
        else if(machine===3){
            document.getElementById('result').innerHTML = `Máquina escolheu TESOURA e Humano escolheu TESOURA, JOGO EMPATADO`;
        }

    }
    else if(human===1 && machine===2){
        document.getElementById('result').innerHTML = `Máquina escolheu PAPEL e Humano escolheu PEDRA, Máquina GANHOU`;
    }
    else if(human===2 && machine===3){
        document.getElementById('result').innerHTML = `Máquina escolheu TESOURA e Humano escolheu PAPEL, Máquina GANHOU`;
    }
    else if(human===3 && machine===1){
        document.getElementById('result').innerHTML = `Máquina escolheu PEDRA e Humano escolheu TESOURA, Máquina GANHOU`;
    }
    else if(human===2 && machine===1){
        document.getElementById('result').innerHTML = `Máquina escolheu PEDRA e Humano escolheu PAPEL, HUMANO GANHOU`;
    }
    else if(human===3 && machine===2){
        document.getElementById('result').innerHTML = `Máquina escolheu PAPEL e Humano escolheu TESOURA, HUMANO GANHOU`;
    }
    else if(human===1 && machine===3){
        document.getElementById('result').innerHTML = `Máquina escolheu TESOURA e Humano escolheu PEDRA, HUMANO GANHOU`;
    }    
}