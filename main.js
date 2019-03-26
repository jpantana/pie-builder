const addButton = document.getElementById('addButton');
const inputIngredient = document.getElementById('ingredientInput');


const printToDom = (divId, textToPrint) => {
    const selectedDiv = document.getElementById(divId);
    selectedDiv.innerHTML += textToPrint;
};

const addIngredient = (e) => {
    // e.preventDefault();
    let inputText = inputIngredient.value;
    console.log(inputText);
    printToDom('ingredient-container', inputText);
    inputIngredient.value = '';
};

const buttonEvents = () => {
    addButton.addEventListener('click', addIngredient);
};

const init = () => {
    buttonEvents();
};
init();
