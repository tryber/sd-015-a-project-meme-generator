const text = document.querySelector('#text-input');
function inputText() {
  const inMemeText = document.querySelector('.textH1');
  inMemeText.innerHTML = text.value;
}
inputText();

text.addEventListener('change', inputText);
