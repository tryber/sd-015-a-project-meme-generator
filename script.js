const input = document.getElementById('text-input');
const p = document.querySelector('#meme-text');
const botaoFire = document.getElementById('fire');
const botaoWater = document.getElementById('water');
const botaoEarth = document.getElementById('earth');
const meme1 = document.getElementById('meme-1');
const meme2 = document.getElementById('meme-2');
const meme3 = document.getElementById('meme-3');
const meme4 = document.getElementById('meme-4');
const memeInsert = document.getElementById('meme-insert');

function inputToP() {
  p.innerText = input.value;
}

input.addEventListener('input', inputToP);

function loadFile(event) {
  const output = document.getElementById('meme-image');
  output.src = URL.createObjectURL(event.target.files[0]);
}

memeInsert.addEventListener('click', loadFile);

function changeColor(event) {
  const borda = document.querySelector('#meme-image-container');

  if (event.target.id === 'fire') {
    borda.style.border = '3px dashed red';
  } else if (event.target.id === 'water') {
    borda.style.border = '5px double blue';
  } else {
    borda.style.border = '6px groove green';
  }
}

botaoFire.addEventListener('click', changeColor);
botaoWater.addEventListener('click', changeColor);
botaoEarth.addEventListener('click', changeColor);

function imgPronta(event) {
  const output = document.getElementById('meme-image');
  if (event.target.id === 'meme-1') {
    output.src = '/imgs/meme1.png';
  } else if (event.target.id === 'meme-2') {
    output.src = '/imgs/meme2.png';
  } else if (event.target.id === 'meme-3') {
    output.src = '/imgs/meme3.png';
  } else if (event.target.id === 'meme-4') {
    output.src = '/imgs/meme4.png';
  }
}

meme1.addEventListener('click', imgPronta);
meme2.addEventListener('click', imgPronta);
meme3.addEventListener('click', imgPronta);
meme4.addEventListener('click', imgPronta);
