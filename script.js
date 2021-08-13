const input = document.getElementById('text-input');
const pMemeText = document.getElementById('meme-text');
const imgInsert = document.getElementById('meme-insert');
const imgTag = document.getElementById('meme-image');
const imgContainer = document.getElementById('meme-image-container');
const fireButton = document.getElementById('fire');
const waterButton = document.getElementById('water');
const earthButton = document.getElementById('earth');

function addTextMeme() {
  pMemeText.innerText = input.value;
}

function addImg(evn) {
  const ev = evn;
  const files = ev.target.files[0];
  imgTag.src = URL.createObjectURL(files);
}

input.addEventListener('keyup', addTextMeme);
imgInsert.addEventListener('change', addImg);

function addBorder(e) {
  const event = e;
  if (event.target === fireButton) {
    imgContainer.style.border = '3px red dashed';
  }
  if (event.target === waterButton) {
    imgContainer.style.border = '5px blue double';
  }
  if (event.target === earthButton) {
    imgContainer.style.border = '6px green groove';
  }
}

fireButton.addEventListener('click', addBorder);
waterButton.addEventListener('click', addBorder);
earthButton.addEventListener('click', addBorder);
