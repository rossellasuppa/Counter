// Riferimenti agli elementi HTML
const counterElement = document.getElementById("counter");


// Creazione bottoni e Eventi di incremento e decremento
const decrementButton = document.createElement("button");
counterElement.appendChild (decrementButton);
decrementButton.textContent = "-";
decrementButton.id = "counterButton";
decrementButton.addEventListener("click", () => {
    counterValue--;
    updateCounter();
});

const counterValueBox = document.createElement("div");
let counterValue = 0;
counterValueBox.textContent = counterValue;
counterValueBox.id = "value";
counterElement.appendChild(counterValueBox);

const incrementButton = document.createElement ("button")
incrementButton.textContent = "+";
incrementButton.id = "counterButton";
counterElement.appendChild (incrementButton);

incrementButton.addEventListener("click", () => {
    counterValue++;
    updateCounter();
});

//Evento di aggiornamento del counter
function updateCounter() {
    counterValueBox.textContent = counterValue;
}

//creazione di un div per i bottoni aggiuntivi
const functionsBox = document.createElement("div");
document.body.appendChild(functionsBox);
functionsBox.id = "buttonContainer";

//creazione di input, bottone Cambio colore e reset
const colorPicker = document.createElement("input");
colorPicker.id = "colorPicker";
colorPicker.setAttribute ("type" , "color");
colorPicker.setAttribute ("value" , "#007BFF");
functionsBox.appendChild (colorPicker)

const changeColorButton = document.createElement("button");
functionsBox.appendChild(changeColorButton);
changeColorButton.textContent = "Change color";
changeColorButton.id = "functionsButton";
changeColorButton.addEventListener("click", () => {
    const selectedColor = colorPicker.value;
    updateButtonAndDivColor(selectedColor);
});

const resetButton = document.createElement("button");
functionsBox.appendChild(resetButton);
resetButton.id = "functionsButton";
resetButton.textContent = "Reset Value";

// Evento che fa cambiare colore quando il pulsante "Change Color" viene premuto
changeColorButton.addEventListener("click", () => {
    const selectedColor = colorPicker.value;
    updateButtonAndDivColor(selectedColor);
});

function updateButtonAndDivColor(color) {
    incrementButton.style.backgroundColor = color;
    decrementButton.style.backgroundColor = color;
    resetButton.style.backgroundColor = color;
    counterValueBox.style.color = color;
    changeColorButton.style.backgroundColor = color;
    updateContainerBorder(color);
}

// Funzione che permette di cambiare anche il bordo del div genitore (container in html/css)
function updateContainerBorder(color) {
    const container = document.getElementById("counter");
    container.style.borderColor = color;
}

// Evento di reset
resetButton.addEventListener("click", function() {
    counterValue = 0;
    updateCounter();
});






