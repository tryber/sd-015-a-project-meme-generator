const text = document.querySelector('#text-input');
function inputText() {
  const inMemeText = document.querySelector('.textH1');
  inMemeText.innerHTML = text.value;
}
text.addEventListener('keyup', inputText);

function setImage() {
  const leitorDeArquivos = new FileReader();
  const placeHolder = document.querySelector('#meme-image');
  const imagemEnviada = document.querySelector('#meme-insert').files[0];
  leitorDeArquivos.readAsDataURL(imagemEnviada);

  placeHolder.src = leitorDeArquivos.result;
}
const btn = document.querySelector('#sendImage');

btn.addEventListener('click', setImage);

const container = document.querySelector('#meme-image-container');
const containerBorder = container.style;
const blackBorder = 'solid black 1px';
function redButton() {
  if (containerBorder.border === '3px dashed red') {
    containerBorder.border = blackBorder;
  } else {
    containerBorder.border = 'dashed red 3px';
  }
}
function blueButton() {
  if (containerBorder.border === '5px double blue') {
    containerBorder.border = blackBorder;
  } else {
    containerBorder.border = 'double blue 5px';
  }
}
function greenButton() {
  if (containerBorder.border === '6px groove green') {
    containerBorder.border = blackBorder;
  } else {
    containerBorder.border = 'groove green 6px';
  }
}
const btnRed = document.querySelector('#fire');
const btnBlue = document.querySelector('#water');
const btnGreen = document.querySelector('#earth');
btnRed.addEventListener('click', redButton);
btnBlue.addEventListener('click', blueButton);
btnGreen.addEventListener('click', greenButton);

const meme1 = document.querySelector('#meme-1 img');
const meme2 = document.querySelector('#meme-2 img');
const meme3 = document.querySelector('#meme-3 img');
const meme4 = document.querySelector('#meme-4 img');

function changeImage(event) {
  container.firstElementChild.src = event.target.src;
}
meme1.addEventListener('click', changeImage);
meme2.addEventListener('click', changeImage);
meme3.addEventListener('click', changeImage);
meme4.addEventListener('click', changeImage);
