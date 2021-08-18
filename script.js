const firstInput = document.getElementById('text-input');
const paragraphOutput = document.getElementById('meme-text');
const memeImageContainer = document.getElementById('meme-image-container');
const memeImage = document.getElementById('meme-image');
const memeInsert = document.getElementById('meme-insert');
let styleOfContainer = window.getComputedStyle(memeImageContainer);
const divImage = document.getElementById('meme-image');
divImage.style.width = styleOfContainer;
divImage.style.height = styleOfContainer;
const fireButton = document.getElementById('fire');
const waterButton = document.getElementById('water');
const earthButton = document.getElementById('earth');

function addToImageMeme() {
  paragraphOutput.innerText = firstInput.value;
}
firstInput.addEventListener('input', addToImageMeme);

function addImageOnContainer(e) {
  const event = e;
  memeImage.src = URL.createObjectURL(event.target.files[0]);
  memeImageContainer.style.backgroundImage = memeImage;
}
memeInsert.addEventListener('change', addImageOnContainer);

let colored = false;
function changeToFire() {
  if(colored === false) {
    memeImageContainer.style.border = '3px dashed rgb(255, 0, 0)';
    colored = true;
  } else {
    memeImageContainer.style.border = '1px solid black';
    colored = false;
  }
}
fireButton.addEventListener('click', changeToFire);

function changeToWater() {
  if(colored === false) {
    memeImageContainer.style.border = '5px double rgb(0, 0, 255)';
    colored = true;
  } else {
    memeImageContainer.style.border = '1px solid black';
    colored = false;
  }
}
waterButton.addEventListener('click', changeToWater);

function changeToEarth() {
  if(colored === false) {
    memeImageContainer.style.border = '6px groove rgb(0, 128, 0)';
    colored = true;
  } else {
    memeImageContainer.style.border = '1px solid black';
    colored = false;
  }
}
earthButton.addEventListener('click', changeToEarth);