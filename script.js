const memeContainer = document.getElementById('meme-image-container');
const textInput = document.getElementById('text-input');
const memeTxt = document.getElementById('meme-text');
const uploadInput = document.getElementById('meme-insert');
const memeImg = document.getElementById('meme-image');

function addText() {
  textInput.addEventListener('keyup', (event) => {
    memeTxt.innerHTML = event.target.value;
  });
}
function uploadImage() {
  uploadInput.addEventListener('change', (event) => {
    const fileURL = window.URL.createObjectURL(event.target.files[0]);
    memeImg.src = fileURL;
    const style = getComputedStyle(memeContainer);
    memeImg.style.height = style.height;
    memeImg.style.width = style.width;
  });
}


addText();
uploadImage();
