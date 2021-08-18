function displayText() {
  const input = document.getElementById('text-input');
  const textContainer = document.getElementById('meme-text');
  const paragraph = document.createElement('p');
  input.addEventListener('keyup', (event) => {
    paragraph.innerText = event.target.value;
    textContainer.appendChild(paragraph);
  });
}

displayText();

function displayImage(imgUrl) {
  const image = document.getElementById('meme-image');
  image.src = imgUrl;
}

function uploadImage() {
  const upload = document.getElementById('meme-insert');
  upload.addEventListener('change', () => {
    const imgUrl = URL.createObjectURL(upload.files[0]);
    displayImage(imgUrl);
  });
}

uploadImage();

function changeBorder() {
  const imageContainer = document.getElementById('meme-image-container');
  const borderInfo = {
    fire: '3px dashed red',
    water: '5px double blue',
    earth: '6px groove green',
  };
  const buttons = document.querySelectorAll('.border-button');

  buttons.forEach((button) => {
    button.addEventListener('click', (event) => {
      imageContainer.style.border = borderInfo[event.target.id];
    });
  });
}

changeBorder();

function displayDefaultImage() {
  const defaultMemes = document.querySelectorAll('.default-meme');
  defaultMemes.forEach((meme) => {
    meme.addEventListener('click', (event) => {
      displayImage(event.target.src);
    });
  });
}

displayDefaultImage();
