const elemInput = document.querySelector(`#name-input`);
const elemOutput = document.querySelector(`#name-output`);

elemInput.addEventListener(`input`, function input() {
    if (elemInput.value === ``) {
        elemOutput.innerHTML = `незнакомец`
    } else {
        elemOutput.innerHTML = elemInput.value;
    }
});