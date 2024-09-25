function tocaSom(seletorAudio) {
    const elemento = document.querySelector(seletorAudio);

    if (elemento != null && elemento.localName === 'audio') {

        elemento.play();

    } else {
        //alert('Elemento não encontrado'); // não é uma boa prática, mas é um exemplo de mostrar mensagem para o usuário.
        console.log('Elemento encontrado não é um audio');
    }

}
// quando a pessoa clicar na tecla, vai marcar a tecla como ativa e fica vermelho sem som.
/**document.querySelectorAll('.tecla').forEach(function (tecla) {
    tecla.addEventListener('click', function (evento){
        const elementoClicado = evento.target;

        if (elementoClicado.classList.contains('ativa')) {
            elementoClicado.classList.remove('ativa');
        } else {
            elementoClicado.classList.add('ativa');
        }
    })
})*/

const listaDeTeclas = document.querySelectorAll('.tecla');

//para
for (let contador = 0; contador < listaDeTeclas.length; contador++) {

    const tecla = listaDeTeclas[contador];
    const instrumento = tecla.classList[1];
    const idAudio = `#som_${instrumento}`; //template string

    tecla.onclick = function () {
        tocaSom(idAudio);
    }

    tecla.onkeydown = function (evento) {
        if (evento.code === 'Space' || evento.code === 'Enter') {
            tecla.classList.add('ativa');
        }
    }

    tecla.onkeyup = function () {
        tecla.classList.remove('ativa');
    }

}
