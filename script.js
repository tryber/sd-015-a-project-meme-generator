const sendText = () => {
  const textInput = document.getElementById('text-input').value;
  const textMeme = document.getElementById('meme-text');
  textMeme.innerText = textInput;
};

const typeText = document.getElementById('text-input');
typeText.addEventListener('keyup', sendText);
