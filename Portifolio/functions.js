function mostrarFormacao(teste){
    if (teste == true){
        document.getElementById("pFormacao").style.display = 'block';
        document.getElementById("perfil").style.display = 'none';
    }
    else{
        document.getElementById("pFormacao").style.display = 'none';
        document.getElementById("perfil").style.display = 'block';
    }    
}
function mostrarInfoText(teste){
    if (teste == true){
        document.getElementById("pSobre").style.display = 'block';
        document.getElementById("perfil").style.display = 'none';
    }
    else{
        document.getElementById("pSobre").style.display = 'none';
        document.getElementById("perfil").style.display = 'block';
    }    
}
const sleep = time => new Promise(resolve => {
    setTimeout(resolve, time)
  })
const animateBar = async(b1,b2,b3,b4,b5,b6,b7,b8) =>{
    var porcentagens = [b1,b2,b3,b4,b5,b6,b7,b8];
    document.getElementById("colunasHabilidades").style.display = 'block'
    document.getElementById("idiomas").style.display = '2vw'
    document.getElementById("habilidades").style.width = '100%'
    for (var j=0; j<=porcentagens.length; j++){
        for( var i=0; i<=porcentagens[j]; i++ ){
            document.getElementById(`barrinha${j+1}`).style.background = `linear-gradient(to right, #4F6070 ${i}%, #4F6070 ${i}%, #FFF 0%)`;
            await sleep(10);
        }
    }  
}
const animateBarIdiomas = async(b1,b2,b3) =>{
    var porcentagens = [b1,b2,b3];
    document.getElementById("colunasIdiomas").style.display = 'block'
    document.getElementById("habilidades").style.display = '2vw'
    document.getElementById("idiomas").style.width = '100%'
    for (var j=0; j<=porcentagens.length; j++){
        for( var i=0; i<=porcentagens[j]; i++ ){
            document.getElementById(`barrinhaIdiomas${j+1}`).style.background = `linear-gradient(to right, #4F6070 ${i}%, #4F6070 ${i}%, #FFF 0%)`;
            await sleep(10);
        }
    }
}
var mode = true;
function changeMode() {    
    if(mode == false){
        document.body.style.backgroundColor = "#FFF";
        document.getElementById("darkLightModeButton").src='_icons/LightMode.png';
        document.getElementById("header").style.backgroundColor = "#AAD0F2";
        var divs = document.getElementsByTagName("h1");;             
        for(var i = 0; i < divs.length; i++) {   
            var div = divs[i];                     
            div.style.color = '#000'; 
        }  
        var divs3 = document.getElementsByClassName("changeModeLighthColor");
        for(var i = 0; i < divs3.length; i++){
            var div = divs3[i];
            div.style.background = "#AAD0F2";
        }
        var divs4 = document.getElementsByClassName("changeModeDarkColor");
        for(var i = 0; i < divs4.length; i++){
            var div = divs4[i];
            div.style.background = "#60ACF0";
        }
        var divs5 = document.getElementsByClassName("flip");
        for(var i = 0; i < divs5.length; i++){
            var div = divs5[i];
            div.style.background = "#AAD0F2";
        } 
        var divs6 = document.getElementsByClassName("frente");
        for(var i = 0; i < divs6.length; i++){
            var div = divs6[i];
            div.style.background = "#AAD0F2";
        } 
        var divs7 = document.getElementsByClassName("fundo");
        for(var i = 0; i < divs7.length; i++){
            var div = divs7[i];
            div.style.background = "#AAD0F2";
        } 
        var ps = document.getElementsByTagName("p");
        for(var i = 0; i < ps.length; i++){
            var p = ps[i];
            p.style.color = '#000';
        } 
        mode = true;
    }
    else{
        document.body.style.backgroundColor = "#000";
        document.getElementById("darkLightModeButton").src='_icons/DarkMode.png';
        document.getElementById("header").style.background = "#4F6070";
        var divs = document.getElementsByTagName("h1");             
        for(var i = 0; i < divs.length; i++) {   
            var div = divs[i];                     
            div.style.color = '#FFF'; 
        }  
        var divs3 = document.getElementsByClassName("changeModeLighthColor");
        for(var i = 0; i < divs3.length; i++){
            var div = divs3[i];
            div.style.background = "#969696";
        }
        var divs4 = document.getElementsByClassName("changeModeDarkColor");
        for(var i = 0; i < divs4.length; i++){
            var div = divs4[i];
            div.style.background = "#4F6070";
        }
        var divs5 = document.getElementsByClassName("flip");
        for(var i = 0; i < divs5.length; i++){
            var div = divs5[i];
            div.style.background = "#969696";
        }
        var divs6 = document.getElementsByClassName("frente");
        for(var i = 0; i < divs6.length; i++){
            var div = divs6[i];
            div.style.background = "#969696";
        }
        var divs7 = document.getElementsByClassName("fundo");
        for(var i = 0; i < divs7.length; i++){
            var div = divs7[i];
            div.style.background = "#969696";
        }
        var ps = document.getElementsByTagName("p");
        for(var i = 0; i < ps.length; i++){
            var p = ps[i];
            p.style.color = '#FFF';
        }                
        mode = false;
    }   
}