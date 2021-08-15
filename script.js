
function inputToP() {
  p.innerText = input.value;
}

let input = document.getElementById('text-input');
input.addEventListener('input', inputToP);
let p = document.querySelector('#meme-text');


function loadFile(event) {
  let output = document.getElementById('meme-image');
  output.src = URL.createObjectURL(event.target.files[0]);
}

function changeColor(event) {
  let borda = document.querySelector('#meme-image-container')

  if (event.target.id === 'fire') {
    borda.style.border = '3px dashed red';
  } else if (event.target.id === 'water') {
    borda.style.border = '5px double blue';
  } else {
    borda.style.border = '6px groove green';
  }
}

let botaoFire = document.getElementById("fire");
botaoFire.addEventListener("click", changeColor);
let botaoWater = document.getElementById("water");
botaoWater.addEventListener("click", changeColor);
let botaoEarth = document.getElementById("earth");
botaoEarth.addEventListener("click", changeColor);

function imgPronta(event) {
  let output = document.getElementById('meme-image');
  if (event.target.id === 'meme-1') {
    output.src = '/imgs/meme1.png'
  } else if (event.target.id === 'meme-2') {
    output.src = '/imgs/meme2.png'
  } else if (event.target.id === 'meme-3') {
    output.src = '/imgs/meme1.png'
  } else if (event.target.id === 'meme-4') {
    output.src = '/imgs/meme1.png'
  }
  
}

let meme1 = getElementById('meme-1');
meme1.addEventListener('click', imgPronta);
let meme2 = getElementById('meme-2');
meme2.addEventListener('click', imgPronta);
let meme3 = getElementById('meme-3');
meme3.addEventListener('click', imgPronta);
let meme4 = getElementById('meme-4');
meme4.addEventListener('click', imgPronta);


