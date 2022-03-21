const pixelBoard = document.querySelector('#pixel-board');

function addFrame() {
  for (let index = 0; index < 25; index += 1) {
    const newFrame = document.createElement('div');
    newFrame.className = 'pixel';
    pixelBoard.appendChild(newFrame);
  }
}
addFrame();

const cor1 = document.querySelector('#cor1');
const cor2 = document.querySelector('#cor2');
const cor3 = document.querySelector('#cor3');
const cor4 = document.querySelector('#cor4');
const input = document.querySelector('#input');

function changeSelected(event) {
  const changeElement = document.querySelector('.selected');
  changeElement.classList.remove('selected');
  event.target.classList.add('selected');
  input.value = '';
}

cor1.addEventListener('click', changeSelected);
cor2.addEventListener('click', changeSelected);
cor3.addEventListener('click', changeSelected);
cor4.addEventListener('click', changeSelected);
