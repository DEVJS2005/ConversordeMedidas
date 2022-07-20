var header = document.getElementById("cabecalho")
var buttons = document.getElementById("containerbuttons")
var content = document.getElementById("conteudo")
var showSideBar = false

function abrirSideBar(){
    showSideBar = !showSideBar
    if(showSideBar){
        buttons.style.marginLeft = '0vw'
        buttons.style.animationName = 'showSideBar'
        content.style.filter = 'blur(1px)'
    }else{
        buttons.style.marginLeft = '-100vw'
        buttons.style.animationName = ''
        content.style.filter = ''
    }
}