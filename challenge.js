//function that prints to the DOM

const printToDom = (stringToPrint, divId) => {
    const selectedDiv = document.getElementById(divId);
    selectedDiv.innerHTML += stringToPrint;
};

let bandNumber = 1;

const takeNumber = (bandName) => {
    const bandString = `<h3>${bandNumber}. ${bandName}</h3`;
    bandNumber++;
    printToDom(bandString, 'band1');
};


takeNumber("Galactic Scum");
takeNumber("Underdogs");

