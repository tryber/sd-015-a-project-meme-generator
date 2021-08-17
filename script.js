const getInput = document.getElementById('text-input');
getInput.addEventListener('keyup', printText);

function printText() {
  const getText = document.getElementById('text');
  getText.innerHTML = '';
  getText.innerHTML = getInput.value;
}