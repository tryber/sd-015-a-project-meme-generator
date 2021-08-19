const inputText = document.getElementById('text-input');
const choseFile = document.getElementById('meme-insert');
const fire = document.getElementById('fire');
const water = document.getElementById('water');
const earth = document.getElementById('earth');
const imgContainer = document.getElementById('meme-image-container');
const imgPlace = document.getElementById('meme-image');
const memeText = document.getElementById('meme-text');
const memesProntos = document.getElementById('memes-prontos');

function subirFoto(event) {
  imgPlace.src = URL.createObjectURL(event.target.files[0]);
}
choseFile.addEventListener('change', subirFoto);

function mudaTexto() {
  memeText.innerHTML = inputText.value;
}

inputText.addEventListener('keyup', mudaTexto);

function tacaFogo() {
  imgContainer.style.border = '3px dashed red';
  console.log('ta pegando fogo bixo!');
}

function tacaAgua() {
  imgContainer.style.border = '5px double blue';
  console.log('Taca Agua nele ali fera!');
}

function tacaTerra() {
  imgContainer.style.border = '6px groove green';
  console.log('essa fera ai meu!');
}
function addMeme(event) {
  imgPlace.src = event.target.src;
}
earth.addEventListener('click', tacaTerra);
water.addEventListener('click', tacaAgua);
fire.addEventListener('click', tacaFogo);
memesProntos.addEventListener('click', addMeme);
