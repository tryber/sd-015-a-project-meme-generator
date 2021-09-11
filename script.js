const placeImg = document.getElementById('meme-image-container');

const sendText = () => {
  const textInput = document.getElementById('text-input').value;
  const textMeme = document.getElementById('meme-text');
  textMeme.innerText = textInput;
};

const typeText = document.getElementById('text-input');
typeText.addEventListener('keyup', sendText);

const sendImage = () => {
  const imageInput = document.getElementById('meme-insert');

  const image = document.createElement('img');
  image.src = URL.createObjectURL(imageInput.files[0]);
  image.id = 'meme-image';
  placeImg.appendChild(image);
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
