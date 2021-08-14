const memeImageContainer = document.getElementById('meme-image-container')
const textInput = document.getElementById('text-input')

function insertText() {
   const memeText = document.getElementById('meme-text')
   
   memeText.innerText = textInput.value
}

textInput.addEventListener('keyup', insertText)