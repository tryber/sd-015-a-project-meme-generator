const memeImageContainer = document.getElementById('meme-image-container');
const textInput = document.getElementById('text-input');
const imageInput = document.getElementById('meme-insert');

function insertText() {
  const memeText = document.getElementById('meme-text');

  memeText.innerText = textInput.value;
}

function insertImage() {
  const memeImage = document.createElement('img');
  memeImage.id = 'meme-image';

  // https://developer.mozilla.org/en-US/docs/Web/API/Node/insertBefore
  memeImageContainer.insertBefore(memeImage, memeImageContainer.firstChild);

  // https://developer.mozilla.org/en-US/docs/Web/API/File/Using_files_from_web_applications
  const fileList = this.files;
  console.log(fileList);
  memeImage.src = URL.createObjectURL(fileList[0]);
}

textInput.addEventListener('keyup', insertText);
imageInput.addEventListener('change', insertImage);
