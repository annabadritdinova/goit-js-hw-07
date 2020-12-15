const area = document.getElementById('font-size-control');
const text = document.getElementById('text');

area.addEventListener('input', modifyFontSize);

function modifyFontSize(event) {
  let areaValue = event.currentTarget.value;
  text.setAttribute('style', `font-size: ${areaValue}px`);
}