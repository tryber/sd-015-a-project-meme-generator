const firstInput = document.getElementById('text-input');
const paragraphOutput = document.getElementById('meme-text');
const memeImageContainer = document.getElementById('meme-image-container');
const memeImage = document.getElementById('meme-image');
const memeInsert = document.getElementById('meme-insert');
let styleOfContainer = window.getComputedStyle(memeImageContainer);
let divImage = document.getElementById('meme-image');
divImage.style.width = styleOfContainer;
divImage.style.height = styleOfContainer;

function addToImageMeme() {
  paragraphOutput.innerText = firstInput.value;
}
firstInput.addEventListener('input', addToImageMeme);

function addImageOnContainer(e) {
  const event = e;
  memeImage.src = URL.createObjectURL(event.target.files[0]);
  memeImageContainer.style.backgroundImage = memeImage;
}
memeInsert.addEventListener('change', addImageOnContainer);
