const textInput = document.getElementById('text-input');
const memeText = document.getElementById('meme-text');

textInput.addEventListener('keyup', generateText);

function generateText() {
  memeText.innerHTML = textInput.value;
}