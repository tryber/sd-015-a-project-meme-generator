const textInput = document.getElementById('text-input');
const memeText = document.getElementById('meme-text');
const upload = document.getElementById('meme-insert');
const image = document.getElementById('meme-image');
const container = document.getElementById('meme-image-container');
const fire = document.getElementById('fire');
const water = document.getElementById('water');
const earth = document.getElementById('earth');
const meme1 = document.getElementById('meme-1');
const meme2 = document.getElementById('meme-2');
const meme3 = document.getElementById('meme-3');
const meme4 = document.getElementById('meme-4');

textInput.addEventListener('keyup', () => {
  memeText.innerText = textInput.value;
});

upload.addEventListener('change', () => {
  image.src = URL.createObjectURL(upload.files[0]);
});

fire.addEventListener('click', () => {
  container.classList.add('fire');
  container.classList.remove('water', 'earth');
});

water.addEventListener('click', () => {
  container.classList.add('water');
  container.classList.remove('fire', 'earth');
});

earth.addEventListener('click', () => {
  container.classList.add('earth');
  container.classList.remove('water', 'fire');
});

meme1.addEventListener('click', () => {
  image.src = './imgs/meme1.png';
});

meme2.addEventListener('click', () => {
  image.src = './imgs/meme2.png';
});

meme3.addEventListener('click', () => {
  image.src = './imgs/meme3.png';
});

meme4.addEventListener('click', () => {
  image.src = './imgs/meme4.png';
});
