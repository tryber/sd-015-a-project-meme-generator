const memeContainer = document.getElementById('meme-image-container');
const textInput = document.getElementById('text-input');
const memeTxt = document.getElementById('meme-text');
const uploadInput = document.getElementById('meme-insert');
const memeImg = document.getElementById('meme-image');
const fireBttn = document.getElementById('fire');
const waterBttn = document.getElementById('water');
const earthBttn = document.getElementById('earth');

function addText() {
  textInput.addEventListener('keyup', (event) => {
    memeTxt.innerHTML = event.target.value;
  });
}

function uploadImage() {
  uploadInput.addEventListener('change', (event) => {
    const fileURL = window.URL.createObjectURL(event.target.files[0]);
    memeImg.src = fileURL;
    const style = getComputedStyle(memeContainer);
    memeImg.style.height = style.height;
    memeImg.style.width = style.width;
  });
}

function changeBorder(event) {
  memeContainer.style.border = getComputedStyle(event.target).border;
}

function applyBorder() {
  fireBttn.addEventListener('click', changeBorder);
  waterBttn.addEventListener('click', changeBorder);
  earthBttn.addEventListener('click', changeBorder);
}

addText();
uploadImage();
applyBorder();
