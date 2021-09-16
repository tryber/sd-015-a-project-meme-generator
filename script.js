const inputText = document.getElementById('text-input');

function insertText() {
  const memeText = document.getElementById('meme-text');
  memeText.innerHTML = inputText.value;
}

inputText.addEventListener('input', insertText);

const inputImage = document.getElementById('meme-insert');

// Para resetar o arquivo selecionado ao carregar a página, utilizei a solução mostrada em 'https://stackoverflow.com/questions/20549241/how-to-reset-input-type-file'
window.onload = () => {
  inputImage.type = '';
  inputImage.type = 'file';
  inputText.value = '';
};

// Para definir a imagem enviada como background da div, utilizei a solução encontrada em https://stackoverflow.com/questions/53110995/how-to-set-background-image-of-element-to-user-uploaded-image
function insertImage(event) {
  const img = event.target.files[0];
  const bgURL = URL.createObjectURL(img);
  const memeImage = document.getElementById('meme-image');
  memeImage.src = bgURL;
}

inputImage.addEventListener('change', insertImage);
