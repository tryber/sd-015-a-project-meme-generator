const container = document.getElementById('meme-image-container');
const input = document.getElementById('text-input');
const text = document.getElementById('meme-text');
const btnFileImg = document.getElementById('meme-insert');
const img = document.querySelector('img');
const meme1 = document.getElementById('meme-1');
const meme2 = document.getElementById('meme-2');
const meme3 = document.getElementById('meme-3');
const meme4 = document.getElementById('meme-4');
const fire = document.getElementById('fire');
const water = document.getElementById('water');
const earth = document.getElementById('earth');

input.addEventListener('input', () => {
  text.innerHTML = input.value;
});

function imgCaptura() {
  img.src = this.src;
}

//  Solução realizada através da fonte:
//  https://stackoverflow.com/questions/4459379/preview-an-image-before-it-is-uploaded/27165977#27165977
function imgCapturaFile() {
  img.src = URL.createObjectURL(this.files[0]);
}

btnFileImg.addEventListener('input', imgCapturaFile);

meme1.addEventListener('click', imgCaptura);
meme2.addEventListener('click', imgCaptura);
meme3.addEventListener('click', imgCaptura);
meme4.addEventListener('click', imgCaptura);

fire.addEventListener('click', () => {
  container.style.border = '3px dashed rgb(255, 0, 0)';
});

water.addEventListener('click', () => {
  container.style.border = '5px double rgb(0, 0, 255)';
});

earth.addEventListener('click', () => {
  container.style.border = '6px groove rgb(0, 128, 0)';
});
