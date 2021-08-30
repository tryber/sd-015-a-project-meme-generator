const input = document.getElementById('text-input');
const memeText = document.getElementById('meme-text');

input.addEventListener('keyup', () => {
  memeText.innerText = input.value;
});
