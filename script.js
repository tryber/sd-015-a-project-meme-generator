// const memeImageContainer = document.getElementById('meme-image-container');
const memeText = document.getElementById('meme-text');
const textInput = document.getElementById('text-input');

textInput.addEventListener('input', () => {
  memeText.innerText = textInput.value;
});
