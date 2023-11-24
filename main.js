function tocasom(idElementoAudio){
    document.querySelector(idElementoAudio).play()
}
const listaDeTeclas = document.querySelectorAll(".tecla");

for(let contador = 0; contador < listaDeTeclas.length; contador++){
    const tecla = listaDeTeclas[contador];
    const efeito = tecla.classList[1]
    const idAudio = `#som_${efeito}`;

    tecla.onclick = function(){
        tocasom(idAudio);
    
    }
    tecla.onkeydown = function(evento){
        if(evento.code != 'Tab'){
            tecla.classList.add('ativa')
        }
    }

while(contador < listaDeTeclas.length){
const efeito = listaDeTeclas[contador].classList[1]
const idAudio = "#som_"+efeito;
listaDeTeclas[contador].onclick = function(){
    tocasom(idAudio)

}
    contador = contador +1;
    console.log(contador);
}
