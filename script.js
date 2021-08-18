// requisito 01

const setTextInput = document.getElementById('text-input');
setTextInput.addEventListener('keyup', function() {
  const printTextContainer = document.getElementById('meme-text');
  printTextContainer.innerText = setTextInput.value;
})