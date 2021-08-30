const input = document.getElementById('text-input');
const memeText = document.getElementById('meme-text');
const uploadImg = document.getElementById('meme-insert');
const img = document.getElementById('meme-image');
const imgContainer = document.getElementById('meme-image-container');
const fire = document.getElementById('fire');
const water = document.getElementById('water');
const earth = document.getElementById('earth');

input.addEventListener('keyup', () => {
  memeText.innerText = input.value;
});

// Referencia para 'URL.createObjectURL' https://stackoverflow.com/questions/11708797/inserting-a-file-input-as-an-img-in-the-dom
uploadImg.addEventListener('change', () => {
  img.src = URL.createObjectURL(uploadImg.files[0]);
});

fire.addEventListener('click', () => {
  imgContainer.style.border = '3px dashed red';
});

water.addEventListener('click', () => {
  imgContainer.style.border = '5px double blue';
});

earth.addEventListener('click', () => {
  imgContainer.style.border = '6px groove green';
});
