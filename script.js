const textInput = document.getElementById('text-input');
const memeText = document.getElementById('meme-text');
const upload = document.getElementById('meme-insert');
const image = document.getElementById('meme-image');

textInput.addEventListener('keyup', () => {
  memeText.innerText = textInput.value;
});

upload.addEventListener('change', () => {
  image.src = URL.createObjectURL(upload.files[0]);
});
