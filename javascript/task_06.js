const input = document.querySelector("#validation-input");
input.addEventListener(`blur`, typeGoodAmountOfCaracters);

function typeGoodAmountOfCaracters(six) {
  if (input.value.length === Number(input.getAttribute(`data-length`))) {
    input.classList.remove("invalid");
    input.classList.add("valid");
  } else {
    input.classList.add("invalid");
    input.classList.remove("valid");
  }
}



