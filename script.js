const inputText = document.getElementById('text-input');
const displayText = document.getElementById('meme-text');
const uploadImg = document.getElementById('meme-insert');
const displayImg = document.getElementById('meme-image');
const fireButton = document.getElementById('fire');
const waterButton = document.getElementById('water');
const earthButton = document.getElementById('earth');
const memeContainer = document.getElementById('meme-image-container')

inputText.addEventListener('keyup', displayMemeText);
fireButton.addEventListener('click', borderStyle);
waterButton.addEventListener('click', borderStyle);
earthButton.addEventListener('click', borderStyle);
uploadImg.addEventListener('change', displayImage);

function displayMemeText() {
    displayText.innerHTML = inputText.value;
}

function displayImage() {
    displayImg.innerText = uploadImg.value;
}

function borderStyle(event) {
    if(event.target === fireButton) {
       memeContainer.style.borderStyle = 'dashed';
       memeContainer.style.borderWidth = '3px';
       memeContainer.style.borderColor = 'red';
    }
    if(event.target === waterButton) {
       memeContainer.style.borderStyle = 'double';
       memeContainer.style.borderWidth = '5px';
       memeContainer.style.borderColor = 'blue';
    }
    if(event.target === earthButton) {
       memeContainer.style.borderStyle = 'groove';
       memeContainer.style.borderWidth = '6px';
       memeContainer.style.borderColor = 'green';
    }
}
