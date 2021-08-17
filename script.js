const inputText = document.getElementById('text-input');
const memeText = document.getElementById('meme-text');
const inputImage = document.getElementById('meme-insert')
const memeImage = document.getElementById('meme-image')

function escreveMeme() {
  memeText.innerText = inputText.value;
}

function desenhaImagem() {
  memeImage.src = URL.createObjectURL(inputImage.files[0]);
}

inputText.addEventListener('keyup', escreveMeme);
inputImage.addEventListener('input', desenhaImagem)