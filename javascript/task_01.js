// there will be li.item for every ul#categories. So the console log will take every caterory name and display the amount of elements it contains.




const allCategories = document.getElementsByClassName(`item`).length;

console.log(`В списке ${allCategories} категории.`);

    let nameCategories = document.querySelectorAll('li.item > h2');

for (let nameCategory of nameCategories) {

    console.log(`categorie: ${nameCategory.innerHTML} => Amount of elements: ${nameCategory.nextElementSibling.children.length}`)

}