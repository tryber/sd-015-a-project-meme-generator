const text = document.querySelector('#text-input');
function inputText() {
  const inMemeText = document.querySelector('.textH1');
  inMemeText.innerHTML = text.value;
}
text.addEventListener('keyup', inputText);

function setImage() {
  const leitorDeArquivos = new FileReader();
  const placeHolder = document.querySelector('#meme-image');
  const imagemEnviada = document.querySelector('#meme-insert').files[0];
  leitorDeArquivos.readAsDataURL(imagemEnviada);

  placeHolder.src = leitorDeArquivos.result;
}
const btn = document.querySelector('#sendImage');

btn.addEventListener('click', setImage);
