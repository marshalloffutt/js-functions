// input = animal ex. fish
// output = animal product ex. fish stix

function nuggetizer(animal){
    return `${animal} stix`;
};


console.log('fish:', nuggetizer('fish'));
console.log('cat:', nuggetizer('cat'));
console.log('bear:', nuggetizer('bear'));


const nuggetizer2 = (animal) => {
    return `${animal} jerky`;
};

console.log('deer:', nuggetizer2('deer'));

//function that does bearsticks and a person eating it. Kinda weird.
const bearSticks = nuggetizer('bear');

const nomnom = (person, food) => {
    return `${person} devroured ${food}`;
};

console.log(nomnom('marshall', bearSticks));

//function numberAdder that takes in a number and returns the number plus 3. So if input = 22, output = 25.

const numberAdder = (num) => {
    const finalNumber = num + 3;
    printToDom(`<h2>${finalNumber}</h2>`, 'allTheNumbers');
}

//function that prints to the DOM

const printToDom = (stringToPrint, divId) => {
    const selectedDiv = document.getElementById(divId);
    selectedDiv.innerHTML += stringToPrint;
};

numberAdder(22);
numberAdder (2);




printToDom('I am ready for lunch', 'feelings');