const input = document.getElementById('text-input');
const memeText = document.getElementById('meme-text');
const uploadImg = document.getElementById('meme-insert');
const img = document.getElementById('meme-image');

input.addEventListener('keyup', () => {
  memeText.innerText = input.value;
});

// Referencia para 'URL.createObjectURL' https://stackoverflow.com/questions/11708797/inserting-a-file-input-as-an-img-in-the-dom
uploadImg.addEventListener('change', () => {
  img.src = URL.createObjectURL(uploadImg.files[0]);
});
