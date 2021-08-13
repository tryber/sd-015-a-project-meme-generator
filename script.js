const input = document.getElementById('text-input');
const pMemeText = document.getElementById('meme-text');
const imgInsert = document.getElementById('meme-insert');
const imgTag = document.getElementById('meme-image');

function addTextMeme() {
  pMemeText.innerText = input.value;
}

function addImg(evn) {
  const ev = evn;
  const files = ev.target.files[0];
  imgTag.src = URL.createObjectURL(files);
}

input.addEventListener('keyup', addTextMeme);
imgInsert.addEventListener('change', addImg);
