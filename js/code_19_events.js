function displayText() {
    console.log("Tlačítko bylo stisknuto.")
    document.getElementById('id-button').removeEventListener('click', displayText);
}

// EventListener - přidání naslouchání událostí
document.getElementById('id-button').addEventListener('click', displayText);


