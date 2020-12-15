
const ingredients = [
    'Картошка',
    'Грибы',
    'Чеснок',
    'Помидоры',
    'Зелень',
    'Приправы',
  ];


const ingredientListItem = () => ingredients.forEach(item => {
const eachProduct = document.createElement("li");
eachProduct.innerHTML = item;
return document.getElementById('ingredients').appendChild(eachProduct);
});

ingredientListItem(ingredients);