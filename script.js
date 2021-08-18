const inputText = document.querySelector('#text-input');
const inputImage = document.querySelector('#meme-insert');
const imageContainer = document.querySelector('#meme-image');
const memeText = document.querySelector('#meme-text');
const memeImageContainer = document.querySelector('#meme-image-container');
const buttonFire = document.querySelector('#fire');
const buttonWater = document.querySelector('#water');
const buttonEarth = document.querySelector('#earth');
const imageTumbnail = document.querySelector('#image-tubmnail');

function addTextToMeme() {
  console.log('oi');
  memeText.textContent = inputText.value;
}

function addImageToMeMe() {
  imageContainer.src = URL.createObjectURL(inputImage.files[0]);
}

inputText.addEventListener('keyup', addTextToMeme)
inputImage.addEventListener('change', addImageToMeMe);

function changeBorder(event) {
  switch (event.target.id) {
  case 'fire':
  default:
    memeImageContainer.style.border = '3px dashed red';
    break;
  case 'water':
    memeImageContainer.style.border = '5px double blue';
    break;
  case 'earth':
    memeImageContainer.style.border = '6px groove green';
    break;
  }
}

buttonFire.addEventListener('click', changeBorder);
buttonWater.addEventListener('click', changeBorder);
buttonEarth.addEventListener('click', changeBorder);

function addImageToMeMe(event) {
  if(event.target.classList.contains('meme-image-tumbnail')){
    imageContainer.src = event.target.src;
  }
}

imageTumbnail.addEventListener('click', addImageToMeMe);
