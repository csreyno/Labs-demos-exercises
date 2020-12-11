const breakfastOptions = [
    'banana',
    'cereal',
    'croissant',
    'coffee',
    'granola + yogurt',
    'smoothie',
    'menthols and diet coke'
];

// for (let i=0; i<breakfastOptions.length; i++) {
//     console.log(`I would like ${breakfastOptions[i]} to go.`);
// }

const breakfast = breakfastOptions.forEach(option=> 
console.log(`I would like ${option} to go.`))