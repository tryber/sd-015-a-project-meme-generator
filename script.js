const memeImageContainer = document.getElementById('meme-image-container');
const memeText = document.getElementById('meme-text');
const textInput = document.getElementById('text-input');
const imgFileInput = document.getElementById('meme-insert');
const memeImage = document.getElementById('meme-image');
const fireButton = document.getElementById('fire');
const waterButton = document.getElementById('water');
const earthButton = document.getElementById('earth');
const memeMiniList = document.getElementById('meme-miniatures').children;

// Type text
textInput.addEventListener('input', () => {
  memeText.innerText = textInput.value;
});

// Add image file
imgFileInput.addEventListener('change', (image) => {
  const imageURL = URL.createObjectURL(image.target.files[0]);
  memeImage.src = imageURL;
});

// Add three elemental buttons
fireButton.addEventListener('click', () => {
  memeImageContainer.style.border = '3px dashed red';
});

waterButton.addEventListener('click', () => {
  memeImageContainer.style.border = '5px double blue';
});

earthButton.addEventListener('click', () => {
  memeImageContainer.style.border = '6px groove green';
});

// Add meme images
for (let i = 0; i < memeMiniList.length; i += 1) {
  memeMiniList[i].addEventListener('click', (miniImg) => {
    memeImage.src = miniImg.target.src;
  });
}
