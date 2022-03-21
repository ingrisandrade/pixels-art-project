const pixelBoard = document.querySelector('#pixel-board');

function addFrame() {
  for (let index = 0; index < 25; index += 1) {
    const newFrame = document.createElement('div');
    newFrame.className = 'pixel';
    pixelBoard.appendChild(newFrame);
  }
}
addFrame();
