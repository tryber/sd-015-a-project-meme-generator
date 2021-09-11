const input = document.getElementById('text-input');

function insertText() {
  const memeText = document.getElementById('meme-text');
  memeText.innerHTML = input.value;
}

input.addEventListener('input', insertText);
