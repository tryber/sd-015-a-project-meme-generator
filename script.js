const placeImg = document.getElementById('meme-image-container');
const image = document.getElementById('meme-image');

const sendText = () => {
  const textInput = document.getElementById('text-input').value;
  const textMeme = document.getElementById('meme-text');
  textMeme.innerText = textInput;
};

const typeText = document.getElementById('text-input');
typeText.addEventListener('keyup', sendText);

const sendImage = () => {
  const imageInput = document.getElementById('meme-insert');
  image.src = '';
  image.src = URL.createObjectURL(imageInput.files[0]);
};

const chosenImg = document.getElementById('meme-insert');
chosenImg.addEventListener('change', sendImage);

const fireBorder = () => {
  placeImg.style.border = 'red dashed 3px';
};

const fire = document.getElementById('fire');
fire.addEventListener('click', fireBorder);

const waterBorder = () => {
  placeImg.style.border = 'blue double 5px';
};

const water = document.getElementById('water');
water.addEventListener('click', waterBorder);

const earthBorder = () => {
  placeImg.style.border = 'green groove 6px';
};

const earth = document.getElementById('earth');
earth.addEventListener('click', earthBorder);

const simpleBorder = () => {
  placeImg.style.border = 'black solid 1px';
};

const simple = document.getElementById('simple');
simple.addEventListener('click', simpleBorder);

const patternMeme = (event) => {
  image.src = '';

  switch (event.target.id) {
  case 'meme-1':
    image.src = 'imgs/meme1.png';
    break;
  case 'meme-2':
    image.src = 'imgs/meme2.png';
    break;
  case 'meme-3':
    image.src = 'imgs/meme3.png';
    break;
  case 'meme-4':
    image.src = 'imgs/meme4.png';
    break;
  default:
    image.src = '';
  }
};

const meme1 = document.getElementById('meme-1');
meme1.addEventListener('click', patternMeme);

const meme2 = document.getElementById('meme-2');
meme2.addEventListener('click', patternMeme);

const meme3 = document.getElementById('meme-3');
meme3.addEventListener('click', patternMeme);

const meme4 = document.getElementById('meme-4');
meme4.addEventListener('click', patternMeme);
