const inputText = document.getElementById('text-input');
const memeText = document.getElementById('meme-text');
const inputImage = document.getElementById('meme-insert');
const memeImage = document.getElementById('meme-image');
const container = document.getElementById('meme-image-container')

function escreveMeme() {
  memeText.innerText = inputText.value;
}

function desenhaImagem() {
  memeImage.src = URL.createObjectURL(inputImage.files[0]);
  container.style.height = memeImage.style.height;
  container.width = memeImage.width;
}

inputText.addEventListener('keyup', escreveMeme);
inputImage.addEventListener('input', desenhaImagem);
