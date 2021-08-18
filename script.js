const inputText = document.querySelector('#text-input');
const inputImage = document.querySelector('#meme-insert');
const imageContainer = document.querySelector('#meme-image');
const memeText = document.querySelector('#meme-text');
const memeImageContainer = document.querySelector('#meme-image-container');

function addTextToMeme() {
  console.log('oi');
  memeText.textContent = inputText.value;
 
}

function addImageToMeMe() {
  imageContainer.src = URL.createObjectURL(inputImage.files[0]);
}

inputText.addEventListener('keyup', addTextToMeme)
inputImage.addEventListener('change', addImageToMeMe);
