const addButton = document.getElementById('addButton');
const inputIngredient = document.getElementById('ingredientInput');
const oldIngredients = [];

const ingredients = [];
let ingredientCounter = 1;


const printToDom = (divId, textToPrint) => {
    const selectedDiv = document.getElementById(divId);
    selectedDiv.innerHTML = textToPrint;
};

const deleteFunction = (e) => {
    const buttonId = e.target.id
    ingredients.forEach((ingredient, i) => {
        if (ingredient.id === buttonId) {
            oldIngredients.push(i);
            ingredients.splice(i, 1);
        }
    });
    domStringBuilder(ingredients);
    addDeleteEvents();
};

const addDeleteEvents = () => {
    const deleteButtons = document.getElementsByClassName('deleteButton');
    for (let i = 0; i < deleteButtons.length; i++) {
        deleteButtons[i].addEventListener('click', deleteFunction);
    }
    // console.log(deleteButtons);
    // deleteButtons.addDeleteEvents('click', )
};

const domStringBuilder = (arrayToPrint) => {
    // console.log(arrayToPrint);
    let domString = '';
    arrayToPrint.forEach((ingredient) => {
        domString += `<div class="card col-3">`;
        domString += `  <div class="card-body">`;
        domString += `      <h5 class="card-title">${ingredient.item}</h5>`;
        domString += `      <a class="btn btn-danger deleteButton" id=${ingredient.id}>Delete</a>`;
        domString += `  </div>`;
        domString += `</div>`;
    });
    
    printToDom('ingredient-container', domString);
};



const addIngredient = (e) => {
    // e.preventDefault();
    let inputText = inputIngredient.value;
    // console.log(inputText);
    let newArray = {
        item: inputText,
        id: `ingredient${ingredientCounter}`,
    }
    ingredients.push(newArray);
    ingredientCounter++;
    domStringBuilder(ingredients);
    addDeleteEvents();
    inputIngredient.value = '';
};

const buttonEvents = () => {
    addButton.addEventListener('click', addIngredient);
};

const init = () => {
    buttonEvents();
};
init();
