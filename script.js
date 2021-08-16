/* Insert Meme Section */

const textInput = document.getElementById('text-input');
const imageInput = document.getElementById('meme-insert');

function insertText() {
  const memeText = document.getElementById('meme-text');

  memeText.innerText = textInput.value;
}

function insertImage() {
  const memeImage = document.getElementById('meme-image');
  // https://developer.mozilla.org/en-US/docs/Web/API/File/Using_files_from_web_applications
  const fileList = this.files;

  memeImage.src = URL.createObjectURL(fileList[0]);
}

textInput.addEventListener('keyup', insertText);
imageInput.addEventListener('change', insertImage);

/* Change Border Color Section */

const memeImageContainer = document.getElementById('meme-image-container');

const fireButton = document.getElementById('fire');
const earthButton = document.getElementById('earth');
const waterButton = document.getElementById('water');

function changeBorderFire() {
  memeImageContainer.style.border = '3px dashed red';
}

function changeBorderWater() {
  memeImageContainer.style.border = '5px double blue';
}

function changeBorderEarth() {
  memeImageContainer.style.border = '6px groove green';
}

fireButton.addEventListener('click', changeBorderFire);
earthButton.addEventListener('click', changeBorderEarth);
waterButton.addEventListener('click', changeBorderWater);

/* Change Source Image Section */

const memes = document.querySelectorAll('#image-selector-container img');

function changeSource(event) {
  const memeImage = document.getElementById('meme-image');
  console.log(event.target);
  memeImage.src = event.target.src;
}

memes.forEach((meme) => {
  meme.addEventListener('click', changeSource);
});
