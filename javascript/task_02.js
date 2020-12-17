
const ingredients = [
    'Картошка',
    'Грибы',
    'Чеснок',
    'Помидоры',
    'Зелень',
    'Приправы',
  ];



const ingredientsList = document.querySelector('#ingredients')

function insertItem(array, ingredients) {
  const createElements = array.map(element => {
  const newIngredient = document.createElement("li");
  newIngredient.textContent = element
  return newIngredient
})
  ingredients.append(...createElements)
}

insertItem(ingredients, ingredientsList)