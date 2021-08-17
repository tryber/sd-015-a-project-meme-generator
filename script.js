// Requisito 1 - Crie uma caixa de texto com a qual quem usa pode interagir para inserir texto em cima da imagem escolhi.
function printText() {
  const getText = document.getElementById('meme-text');
  getText.innerHTML = '';
  getText.innerHTML = getInput.value;
}

const getInput = document.getElementById('text-input');
getInput.addEventListener('keyup', printText);

// Requisito 2 - O site deve permitir que quem usa faça upload de uma imagem de seu computador.
function loadFile(event) {
  imgOutput = document.getElementById('meme-image');
  imgOutput.src = URL.createObjectURL(event.target.files[0])
  // window.URL.revokeObjectURL(imgOutput);
}


const getMemeInsert = document.getElementById('meme-insert');
getMemeInsert.addEventListener('change', loadFile);
