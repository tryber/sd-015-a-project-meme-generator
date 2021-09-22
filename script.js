const inputText = document.getElementById('text-input');
const memeText = document.getElementById('meme-text');
const inputImage = document.getElementById('meme-insert');
const memeImage = document.getElementById('meme-image');
const container = document.getElementById('meme-image-container');

function escreveMeme() {
  memeText.innerText = inputText.value;
}

function desenhaImagem() {
  memeImage.src = URL.createObjectURL(inputImage.files[0]);
  container.style.height = memeImage.style.height;
  container.width = memeImage.width;
}
window.onload = () => {
  document.getElementById('fire').addEventListener('click', () => {
    container.className = 'fire';
  });
  document.getElementById('water').addEventListener('click', () => {
    container.className = 'water';
  });
  document.getElementById('earth').addEventListener('click', () => {
    container.className = 'earth';
  });
  document.querySelectorAll('.template').forEach((temp) => temp.addEventListener('click', () => {
    memeImage.src = temp.src;
  }));
  inputText.addEventListener('keyup', escreveMeme);
  inputImage.addEventListener('input', desenhaImagem);
};
