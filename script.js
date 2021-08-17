const inputText = document.getElementById('text-input');
const displayText = document.getElementById('meme-text');
const uploadImg = document.getElementById('meme-insert');
const displayImg = document.getElementById('meme-image');

function displayMemeText() {
    displayText.innerHTML = inputText.value;
}

inputText.addEventListener('keyup', displayMemeText);

function displayImage() {
    displayImg.innerText = uploadImg.value;
}

uploadImg.addEventListener('change', displayImage);