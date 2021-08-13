const input = document.getElementById('text-input');
const pMemeText = document.getElementById('meme-text');
const imgInsert = document.getElementById('meme-insert');
const imgTag = document.getElementById('meme-image');
const imgContainer = document.getElementById('meme-image-container');
const fireButton = document.getElementById('fire');
const waterButton = document.getElementById('water');
const earthButton = document.getElementById('earth');
const memeImg1 = document.getElementById('meme-1');
const memeImg2 = document.getElementById('meme-2');
const memeImg3 = document.getElementById('meme-3');
const memeImg4 = document.getElementById('meme-4');

function addTextMeme() {
  pMemeText.innerText = input.value;
}

function memeImg(ev) {
  if (ev === memeImg1) {
    imgTag.src = 'imgs/meme1.png';
  } else if (ev === memeImg2) {
    imgTag.src = 'imgs/meme2.png';
  } else if (ev === memeImg3) {
    imgTag.src = 'imgs/meme3.png';
  } else {
    imgTag.src = 'imgs/meme4.png';
  }
}

function addImg(evn) {
  const ev = evn;
  if (ev.target === imgInsert) {
    const files = ev.target.files[0];
    imgTag.src = URL.createObjectURL(files);
  } else {
    memeImg(ev.target);
  }
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
memeImg1.addEventListener('click', addImg);
memeImg2.addEventListener('click', addImg);
memeImg3.addEventListener('click', addImg);
memeImg4.addEventListener('click', addImg);
