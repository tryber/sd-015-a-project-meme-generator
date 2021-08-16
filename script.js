// const memeImageContainer = document.getElementById('meme-image-container');
const memeText = document.getElementById('meme-text');
const textInput = document.getElementById('text-input');
const imgFileInput = document.getElementById('meme-insert');
const memeImage = document.getElementById('meme-image');

// Type text
textInput.addEventListener('input', () => {
  memeText.innerText = textInput.value;
});

// Add image file
imgFileInput.addEventListener('change', (image) => {
  const imageURL = URL.createObjectURL(image.target.files[0]);
  memeImage.src = imageURL;
});
