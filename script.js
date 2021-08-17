// requisito 1
const textInput = document.getElementById('text-input');
const memeText = document.getElementById('meme-text');

function insertText() {
  memeText.innerText = textInput.value;
}
textInput.addEventListener('keyup', insertText);
