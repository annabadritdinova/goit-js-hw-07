const content = document.getElementById('boxes');
const renderButton = document.querySelector('button[data-action="render"]');
const destroyButton = document.querySelector('button[data-action="destroy"]');

renderButton.addEventListener('click', createBoxes);
destroyButton.addEventListener('click', destroyBoxes);

const box = {
  width: 30,
  height: 30,
  randomRgbBackgroundColor() {
    let o = Math.round,
      r = Math.random,
      s = 255;
    return 'rgb(' + o(r() * s) + ',' + o(r() * s) + ',' + o(r() * s) + ',' + r().toFixed(1) + ')';
  },
};

function createBoxes(amount) {
  amount = Number(document.querySelector('div#controls').firstElementChild.value);
  let {width, height, randomRgbBackgroundColor} = box;
  const elements = [];

  for (let i = 1; i <= amount; i += 1) {
    const dimension = `<div style = 'width : ${width}px; height : ${height}px; background-color: ${randomRgbBackgroundColor()}'></div>`;
    elements.push(dimension);
    width += 10;
    height += 10;
  }
  content.insertAdjacentHTML('afterbegin', elements.join(''));
  console.log(`${amount} elements created`);
}

function destroyBoxes() {
  const clearContent = '<div id="boxes"></div>';
  content.innerHTML = clearContent;
  console.log('The area is destroyed');
}