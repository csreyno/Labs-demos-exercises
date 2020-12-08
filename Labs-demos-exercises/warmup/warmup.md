# 1. Write a "Hello World" program using Express

Create a new project directory for your code.

# 2. What does this code do?

```js
const breakfastOptions = [
    'banana',
    'cereal',
    'croissant',
    'coffee',
    'granola + yogurt',
    'smoothie',
    'menthols and diet coke'
];

for (let i=0; i<breakfastOptions.length; i++) {
    console.log(`I would like ${breakfastOptions[i]} to go.`);
}
```

Write a brief description (2-3 sentences).

-  Iterates through the breakfastOptions array and prints the console.log statement for each breakfast option individually
-uses .length to determine the toatl length of the array and uses that to determine each item location in array

# 3. Rewrite the code from #2

Do you know of other ways to accomplish the same result?

```js
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
```