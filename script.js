/* eslint-disable sonarjs/no-duplicate-string */
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

function redButton() {
  if (container.style.border === '3px dashed red') {
    container.style.border = 'solid black 1px';
  } else {
    container.style.border = 'dashed red 3px';
  }
}
function blueButton() {
  if (container.style.border === '5px double blue') {
    container.style.border = 'solid black 1px';
  } else {
    container.style.border = 'double blue 5px';
  }
}
function greenButton() {
  if (container.style.border === '6px groove green') {
    container.style.border = 'solid black 1px';
  } else {
    container.style.border = 'groove green 6px';
  }
}
const btnRed = document.querySelector('#fire');
const btnBlue = document.querySelector('#water');
const btnGreen = document.querySelector('#earth');
btnRed.addEventListener('click', redButton);
btnBlue.addEventListener('click', blueButton);
btnGreen.addEventListener('click', greenButton);
