// Função TocaSom com o parâmetro idElementoAudio
function tocaSom (idElementoAudio) {
    document.querySelector(idElementoAudio).play();
    }

// Criação de uma array apartir de uma querySelectorALL
const listaDeTeclas = document.querySelectorAll('.tecla');

// Criação da estrutura de repetição para percorrer todas as teclas

for (let i = 0; i < listaDeTeclas.length; i++) {

    const tecla =  listaDeTeclas[i];
    const instrumento = tecla.classList[1];
    const idAudio = `#som_${instrumento}`;

// Com o evento onclick será criado uma arrow function para chamar o TocaSom que irá receber o idAudio
    tecla.onclick = () =>{
        tocaSom(idAudio);
    }

    tecla.onkeydown = (e) => {

        if (e.code === 'Space') {
            tecla.classList.add('ativa');
        }
    }

    tecla.onkeyup = () => {
        tecla.classList.remove('ativa');
    }

}