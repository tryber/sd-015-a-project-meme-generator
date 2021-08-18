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

// Requisito 4 --> RESOLVIDO PELO CSS <-- Adicione o texto que será inserido sobre a imagem deve ter uma cor, sombra e tamanho específicos. --> RESOLVIDO PELO CSS <--

// Requisito 5 --> RESOLVIDO PELO HTML <-- Limite o tamanho do texto que o usuário pode inserir. --> RESOLVIDO PELO HTML <--

// Requisito 6 - Permita a quem usa customizar o meme escolhido acrescentando a ele uma de três bordas. A página deve ter três botões, que ao serem clicados devem cada um trocar a própria borda ao redor do container.
const getFireButton = document.getElementById('fire');
const getWaterButton = document.getElementById('water');
const getEarthButton = document.getElementById('earth');
const getMemeImageContainer = document.getElementById('meme-image-container');

function styleFire() {
  getMemeImageContainer.className = 'fire';
}

function styleWater() {
  getMemeImageContainer.className = 'water';
}

function styleEarth() {
  getMemeImageContainer.className = 'earth'; 
}

getFireButton.addEventListener('click', styleFire);
getWaterButton.addEventListener('click', styleWater);
getEarthButton.addEventListener('click', styleEarth);
