// Função TocaSom com o parâmetro idElementoAudio
function tocaSom(seletorAudio) {
  const elemento = document.querySelector(seletorAudio);

  // Comparação de elemento com o operador AND para dar play
  if (elemento && elemento.localName === "audio") {
    elemento.play();
  }
  else {
    console.log("Elemento não encontrado ou seletor inválido");
  }
}

// Criação de uma array apartir de uma querySelectorALL
const listaDeTeclas = document.querySelectorAll(".tecla");

// Criação da estrutura de repetição para percorrer todas as teclas

for (let i = 0; i < listaDeTeclas.length; i++) {
  const tecla = listaDeTeclas[i];
  const instrumento = tecla.classList[1];
  const idAudio = `#som_${instrumento}`; //Template string

  // Com o evento onclick será criado uma arrow function para chamar o TocaSom que irá receber o idAudio
  tecla.onclick = () => {
    tocaSom(idAudio);
  };

  // Comparação de evento com o operador OR para evitar repetição de código
  tecla.onkeydown = (e) => {
    if (e.code === "Space" || e.code === "Enter") {
      tecla.classList.add("ativa");
    }
  };

  tecla.onkeyup = () => {
    tecla.classList.remove("ativa");
  };
}
