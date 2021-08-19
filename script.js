const inputText = document.getElementById('text-input');
const choseFile = document.getElementById('meme-insert');
const fire = document.getElementById('fire');
const water = document.getElementById('water');
const earth = document.getElementById('earth');
const imgContainer = document.getElementById('meme-image-container');
const imgPlace = document.getElementById('meme-image');
const memeText = document.getElementById('meme-text');
const memesProntos = document.getElementsByClassName('meme-pronto');

function subirFoto(event) {
  imgPlace.src = URL.createObjectURL(event.target.files[0]);
}
choseFile.addEventListener('change', subirFoto);

function mudaTexto() {
  memeText.innerHTML = inputText.value;
}

inputText.addEventListener('keyup', mudaTexto);
