const inputText = document.getElementById('text-input');
const  memeText = document.getElementById('meme-text');

inputText.addEventListener('keyup', escreveMeme);

function escreveMeme() {
  console.log('e ai??')
  memeText.innerText = inputText.value;
}