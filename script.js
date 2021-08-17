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
  upload.addEventListener('change', () => {
    const image = document.createElement('img');
    image.src = URL.createObjectURL(upload.files[0]);
    image.id = 'meme';
    imageDiv.appendChild(image);
  });
}

showImage();
