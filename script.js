const memeContainer = document.getElementById('meme-image-container');
const textInput = document.getElementById('text-input');
const memeTxt = document.getElementById('meme-text');
const uploadInput = document.getElementById('meme-insert');
const memeImg = document.getElementById('meme-image');
const fireBttn = document.getElementById('fire');
const waterBttn = document.getElementById('water');
const earthBttn = document.getElementById('earth');
const memeBttn = document.getElementById('example-memes');
const containerStyle = getComputedStyle(memeContainer);

function addText() {
  textInput.addEventListener('keyup', (event) => {
    memeTxt.innerHTML = event.target.value;
  });
}

function uploadImage() {
  uploadInput.addEventListener('change', (event) => {
    const fileURL = window.URL.createObjectURL(event.target.files[0]);
    memeImg.src = fileURL;
    memeImg.style.height = containerStyle.height;
    memeImg.style.width = containerStyle.width;
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

function changeMeme(event) {
  memeImg.src = event.target.src;
  memeImg.style.height = containerStyle.height;
  memeImg.style.width = containerStyle.width;
}

function applyExample() {
  memeBttn.addEventListener('click', changeMeme);
}

addText();
uploadImage();
applyBorder();
applyExample();
