// there will be li.item for every ul#categories. So the console log will take every caterory name and display the amount of elements it contains.




const allCategories = document.querySelectorAll('ul#categories > li.item');

console.log(`В списке ${allCategories.length} категории.`);

function getCategoryName(array) {
    array.forEach((element) =>
        console.log(`categorie: ${element.firstElementChild.textContent}, Amount of elements: ${element.lastElementChild.children.length}`));
        }
getCategoryName(allCategories);
   







