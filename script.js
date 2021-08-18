// Requisito 1 - Crie uma caixa de texto com a qual quem usa pode interagir para inserir texto em cima da imagem escolhi.
const getInput = document.getElementById('text-input');

function printText() {
  const getText = document.getElementById('meme-text');
  getText.innerHTML = '';
  getText.innerHTML = getInput.value;
}

getInput.addEventListener('keyup', printText);

// Requisito 2 - O site deve permitir que quem usa faça upload de uma imagem de seu computador.
function loadFile(event) {
  imgOutput = document.getElementById('meme-image');
  imgOutput.src = URL.createObjectURL(event.target.files[0]);
  // window.URL.revokeObjectURL(imgOutput);
}

const getMemeInsert = document.getElementById('meme-insert');
getMemeInsert.addEventListener('change', loadFile);

// Requisito 3 --> RESOLVIDO PELO CSS <-- Adicione uma moldura no container. A moldura deve ter 1 pixel de largura, deve ser preta e do tipo 'solid'. A área onde a imagem aparecerá deve ter fundo branco. --> RESOLVIDO PELO CSS <--

// Requisito 4 - Adicione o texto que será inserido sobre a imagem deve ter uma cor, sombra e tamanho específicos.

