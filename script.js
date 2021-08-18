const inputText = document.getElementById('text-input');
const memeText = document.getElementById('meme-text');
const memeImage = document.getElementById('meme-image');
const memeInsert = document.getElementById('meme-insert');
const fireButton = document.getElementById('fire');
const waterButton = document.getElementById('water');
const earthButton = document.getElementById('earth');
const caixaGrande = document.getElementById('meme-image-container');
const memeUm = document.getElementById('meme-1');
const memeDois = document.getElementById('meme-2');
const memeTres = document.getElementById('meme-3');
const memeQuatro = document.getElementById('meme-4');

function transferText() {
  memeText.innerText = inputText.value;
}

/*
Função abaixo usa conhecimento dos sites:
https://developer.mozilla.org/pt-BR/docs/Web/API/FileReader;
https://developer.mozilla.org/en-US/docs/Web/API/FileReader/result
https://developer.mozilla.org/pt-BR/docs/Web/API/FileReader/onload
*/
function uploadImage() {
  const reader = new FileReader();
  const file = memeInsert.files;
  reader.onload = function nomeQualQuer() {
    memeImage.src = reader.result;
  };
  reader.readAsDataURL(file[0]);
}

function changeClass(evento) {
  const checkID = evento.target;
  if (!caixaGrande.className.includes(checkID.id)) {
    caixaGrande.className = checkID.id;
    caixaGrande.style.border = window.getComputedStyle(checkID).border;
  }
}

function changeImage(evento) {
  const alvo = evento.target;
  memeImage.src = alvo.src;
}

inputText.addEventListener('input', transferText);
memeInsert.addEventListener('change', uploadImage);
fireButton.addEventListener('click', changeClass);
waterButton.addEventListener('click', changeClass);
earthButton.addEventListener('click', changeClass);
memeUm.addEventListener('click', changeImage);
memeDois.addEventListener('click', changeImage);
memeTres.addEventListener('click', changeImage);
memeQuatro.addEventListener('click', changeImage);
