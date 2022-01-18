const textInput = document.getElementById('text-input');
const memeText = document.getElementById('meme-text');
const upload = document.getElementById('meme-insert');
const image = document.getElementById('meme-image');
const container = document.getElementById('meme-image-container');
const 

textInput.addEventListener('keyup', () => {
  memeText.innerText = textInput.value;
});

upload.addEventListener('change', () => {
  image.src = URL.createObjectURL(upload.files[0]);
});

 container.classList.add('fire');
 container.classList.remove('water', 'earth');
 container.classList.add('water');
 container.classList.remove('fire', 'earth');
 container.classList.add('earth');
 container.classList.remove('water', 'fire');
