const sendText = () => {
  const textInput = document.getElementById('text-input').value;
  const textMeme = document.getElementById('meme-text');
  textMeme.innerText = textInput;
};

const typeText = document.getElementById('text-input');
typeText.addEventListener('keyup', sendText);

const sendImage = () => {
  const imageInput = document.getElementById('meme-insert');
  const placeImg = document.getElementById('meme-image-container');

  const image = document.createElement('img');
  image.src = URL.createObjectURL(imageInput.files[0]);
  image.id = 'meme-image';
  placeImg.appendChild(image);
};

const chosenImg = document.getElementById('meme-insert');
chosenImg.addEventListener('change', sendImage);
