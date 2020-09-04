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
        var blockquotes = document.getElementsByTagName("blockquote");
        for(var i = 0; i < blockquotes.length; i++){
            var blockquote = blockquotes[i];
            blockquote.style.color = '#000';
        }
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
        var blockquotes = document.getElementsByTagName("blockquote");
        for(var i = 0; i < blockquotes.length; i++){
            var blockquote = blockquotes[i];
            blockquote.style.color = '#FFF';       
        }
        mode = false;
    }
   
}