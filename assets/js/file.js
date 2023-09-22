// Riferimenti agli elementi HTML
const counterElement = document.getElementById("counter");
const incrementButton = document.getElementById("increment");
const decrementButton = document.getElementById("decrement");
const resetButton = document.getElementById("resetButton");
const changeColorButton = document.getElementById("changeColorButton");
const colorPicker = document.getElementById("colorPicker");

let counterValue = 0;
counterElement.textContent = counterValue;

// Funzione per aggiornare il colore dei pulsanti e del div
function updateButtonAndDivColor(color) {
    incrementButton.style.backgroundColor = color;
    decrementButton.style.backgroundColor = color;
    resetButton.style.backgroundColor = color;
    counterElement.style.color = color;
    changeColorButton.style.backgroundColor = color;
    updateContainerBorder(color);
}

// Funzione che permette di cambiare anche il bordo del div genitore (container in html/css)
function updateContainerBorder(color) {
    const container = document.querySelector(".container");
    container.style.borderColor = color;
}

// Imposta il colore predefinito all'avvio
updateButtonAndDivColor(colorPicker.value);
const defaultColor = colorPicker.value;
updateButtonAndDivColor(defaultColor);

// Evento che fa cambiare colore quando il pulsante "Change Color" viene premuto
changeColorButton.addEventListener("click", () => {
    const selectedColor = colorPicker.value;
    updateButtonAndDivColor(selectedColor);
});

// Eventi di incremento e decremento
incrementButton.addEventListener("click", () => {
    counterValue++;
    updateCounter();
});

decrementButton.addEventListener("click", () => {
    counterValue--;
    updateCounter();
});

// Evento di reset
resetButton.addEventListener("click", function() {
    counterValue = 0;
    updateCounter();
});

function updateCounter() {
    counterElement.textContent = counterValue;
}





