const colors = require('./colors.json');


const onlyOneColor = (arr, string) => {
	const newArr = arr.filter((c) => c === string);
    return newArr;
}

console.log(onlyOneColor(colors, 'blue'))