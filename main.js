const addButton = document.getElementById('addButton');
const inputIngredient = document.getElementById('ingredientInput');

const ingredients = [];

const printToDom = (divId, textToPrint) => {
    const selectedDiv = document.getElementById(divId);
    selectedDiv.innerHTML = textToPrint;
};

const domStringBuilder = (arrayToPrint) => {
    console.log(arrayToPrint);
    let domString = '';
    arrayToPrint.forEach((ingredient) => {
        domString += `<div class="card col-3">`;
        domString += `  <div class="card-body">`;
        domString += `      <h5 class="card-title">${ingredient.item}</h5>`;
        // domString += `      <a href="#" class="btn btn-primary">Go somewhere</a>`;
        domString += `  </div>`;
        domString += `</div>`;
    });
    
    printToDom('ingredient-container', domString);

};

const addIngredient = (e) => {
    // e.preventDefault();
    let inputText = inputIngredient.value;
    console.log(inputText);
    let newArray = {
        item: inputText,
    }
    ingredients.push(newArray);
    domStringBuilder(ingredients);
    inputIngredient.value = '';
};

const buttonEvents = () => {
    addButton.addEventListener('click', addIngredient);
};

const init = () => {
    buttonEvents();
};
init();
