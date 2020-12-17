const counterValue = document.querySelector(`#value`);
const buttonIncrement = document.querySelector(`button[data-action="increment"]`);
const buttonDecrement = document.querySelector(`button[data-action="decrement"]`);

function Increment() {
    counterValue.textContent++
}

function Decrement() {
    counterValue.textContent--
}

buttonIncrement.addEventListener(`click`, Increment);
buttonDecrement.addEventListener(`click`, Decrement);





