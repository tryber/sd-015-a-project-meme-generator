const inputText = document.getElementById('text-input');
const memeText = document.getElementById('meme-text');

function transferText() {
  memeText.innerText = inputText.value;
}

inputText.addEventListener('input', transferText);
