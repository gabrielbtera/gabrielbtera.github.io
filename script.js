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



