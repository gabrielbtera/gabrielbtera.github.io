const cores = {
    avancado : "#F1F1EE",
    intermediario : "#CBCBB7",
    aprendendo : "#AA928B",
    

}

const habilidadesDoc = document.getElementsByClassName('stacks')
var [html, css, javaScript, react, angular, python] = Object.values(habilidadesDoc)

html.style.backgroundColor = cores.avancado
css.style.backgroundColor = cores.avancado
javaScript.style.backgroundColor = cores.avancado
react.style.backgroundColor = cores.intermediario
angular.style.backgroundColor = cores.aprendendo
python.style.backgroundColor = cores.avancado


var lis = document.getElementsByTagName('li')
lis[0].style.color = cores.avancado
lis[1].style.color = cores.intermediario
lis[2].style.color = cores.aprendendo


var element = document.getElementsByClassName('stacks');


for(let i = 0; i < element.length; i ++){
    element[i].addEventListener('mouseover', function() {
      
            if( window.innerWidth > 535){
                const tamanho = "20px"
            
                if(window.getComputedStyle(element[i]).backgroundColor === "rgb(170, 146, 139)"){
                    lis[2].style.fontSize = "24px";
                    lis[1].style.fontSize = tamanho
                    lis[0].style.fontSize = tamanho
        
                }else{
                    lis[2].style.fontSize = tamanho;
                }
                if(window.getComputedStyle(element[i]).backgroundColor === "rgb(203, 203, 183)"){
                    lis[1].style.fontSize = "24px";
                    lis[0].style.fontSize = tamanho
                    lis[2].style.fontSize = tamanho
                }else {
                    lis[1].style.fontSize = tamanho;
                }
                if(window.getComputedStyle(element[i]).backgroundColor === "rgb(241, 241, 238)"){
                    lis[0].style.fontSize = "24px";
                    lis[1].style.fontSize = tamanho
                    lis[2].style.fontSize = tamanho
                }else {
                    lis[0].style.fontSize = tamanho;
                }

                
                    
                        
                    
            }else{
                for(let i = 0; i < lis.length;i++){
                    lis[i].style.fontSize = "12px"
                }
            }
            
        
        
        
       
      }, false);
      

   
}


