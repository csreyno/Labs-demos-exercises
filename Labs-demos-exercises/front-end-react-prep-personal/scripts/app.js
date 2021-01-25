console.log('hello world!')

//show the joke on the page
//1 make the Request using fetch()
fetch('https://icanhazdadjoke.com', {
    headers: {
        Accept: 'application/json'
    }
})
.then(response => {
    const theData = response.json();
    return theData;
})
.then(data => {
    console.log(data);
    return data.joke;
})
.then(theJoke => {
    console.log(theJoke);
})
.catch(err => console.log(err))
//2 grab the .joke
//3 render it to the page