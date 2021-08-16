//  Escreve o texto na imagem
function write() {
  const input = document.getElementById('text-input')
  const h1 = document.getElementById('meme-text')
  input.addEventListener('keyup', (e) => {
    let valor = e.target.value
    h1.innerHTML = valor
  })
}
write()

//  Escolhendo imagem do meme
function getImage() {
  const file = document.getElementById('meme-insert')
  const image = document.getElementById('meme-image')
  file.addEventListener('change', (_) => {
    for(let index of file.files) {
      const valor = URL.createObjectURL(index)
      image.src = valor
    }
  })
}
getImage()

//  Escolhendo a borda
function getBorder() {
  const botContainer = document.getElementById('bot-container')
  const image = document.getElementById('meme-image-container')
  botContainer.addEventListener('click', e => {
    let classe = e.target.className.split(' ')[1]
    image.className = classe
  })
}
getBorder()

//  Escolhendo templates
function getTemplates() {
  const imgContainer = document.getElementById("imagens-container")
  const image = document.getElementById('meme-image')
  imgContainer.addEventListener('click', e => {
    let value = e.target.src
    value !== '' ? image.src = value : ''

  })
}
getTemplates()