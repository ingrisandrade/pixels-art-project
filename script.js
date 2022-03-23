const pixelBoard = document.querySelector('#pixel-board');

function addFrame() {
  for (let index = 0; index < 25; index += 1) {
    const newFrame = document.createElement('div');
    newFrame.className = 'pixel';
    pixelBoard.appendChild(newFrame);
  }
}
addFrame();

const colorPalette = document.querySelector('#color-palette');

function changeSelected(event) {
  const changeElement = document.querySelector('.selected');
  changeElement.classList.remove('selected');
  event.target.classList.add('selected');
}
colorPalette.addEventListener('click', changeSelected);
