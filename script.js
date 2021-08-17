const inputedText = document.getElementById('text-input');
const displayedText = document.getElementById('meme-text');

function displayMemeText() {
    displayedText.innerHTML = inputedText.value;
}

inputedText.addEventListener('keyup', displayMemeText);