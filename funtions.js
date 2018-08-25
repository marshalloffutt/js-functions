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

const bearSticks = nuggetizer('bear');

const nomnom = (person, food) => {
    return `${person} devroured ${food}`;
};

console.log(nomnom('marshall', bearSticks));
console.log(nomnom('Rigby', 'Wally'));


