// Adiciona um qudrado de pixels, com 25 pixels.
const pixelBoard = document.querySelector('#pixel-board');

function addFrame() {
  for (let index = 0; index < 25; index += 1) {
    const newFrame = document.createElement('div');
    newFrame.className = 'pixel';
    pixelBoard.appendChild(newFrame);
  }
}
addFrame();

// Adiciona a classe selected na cor selecionada ao mesmo tempo que é removido da cor anteriormente selecionada.
const colorPalette = document.querySelector('#color-palette');

function changeSelected(event) {
  const changeElement = document.querySelector('.selected');
  changeElement.classList.remove('selected');
  event.target.classList.add('selected');
}
colorPalette.addEventListener('click', changeSelected);

// Seleciona a cor para pintar o quadro de pixels.
function selectColor(event) {
  const selected = document.querySelector('.selected');
  const evento = event.target;
  evento.style.backgroundColor = getComputedStyle(selected).getPropertyValue('background-color');
}
pixelBoard.addEventListener('click', selectColor);

// Limpa o quadro de pixels
const selecionaBtnClear = document.querySelector('#clear-board');

function buttonClear() {
  const pixel = document.querySelectorAll('.pixel');
  for (let i = 0; i < pixel.length; i += 1) {
    pixel[i].style.backgroundColor = 'white';
  }
}
selecionaBtnClear.addEventListener('click', buttonClear);
