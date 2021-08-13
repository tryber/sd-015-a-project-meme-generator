const input = document.getElementById('text-input');
const pMemeText = document.getElementById('meme-text');

function addTextMeme() {
  pMemeText.innerText = input.value;
}

input.addEventListener('keyup', addTextMeme);
