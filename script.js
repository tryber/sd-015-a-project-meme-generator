function showText() {
  const input = document.getElementById('text-input');
  const textContainer = document.getElementById('meme-text');
  const paragraph = document.createElement('p');
  input.addEventListener('keyup', (event) => {
    paragraph.innerText = event.target.value;
    textContainer.appendChild(paragraph);
  });
}

showText();

function showImage() {
  const upload = document.getElementById('meme-insert');
  const imageDiv = document.getElementById('meme-image');
  const image = document.getElementById('meme');
  upload.addEventListener('change', () => {
    image.src = URL.createObjectURL(upload.files[0]);
    image.id = 'meme';
    imageDiv.appendChild(image);
  });
}

showImage();

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
