function showText() {
  const input = document.getElementById('text-input');
  const textContainer = document.getElementById('meme-text');

  input.addEventListener('keyup', (event) => {
    textContainer.innerText = event.target.value;
  });
}

showText();
