https://learn.digitalcrafts.com/immersive/lessons/back-end-foundations/express-middleware/#serving-static-files

# Create an express app with the following middleware:
- `npm init -y`
- `npm install express`
- `npm install --save-dev nodemon`
- `npm install morgan`  - installs a common logging middleware that provide more detailed info in the terminal
- `npm install helmet`  - installs a common security middleware, good first step to securing your Express apps. sets your HTTP Response headers appropriately, protecting your app from well-known vulnerabilities.
- `npm install express-es6-template-engine` - 

- create an index.js, .gitignore, templates directory, public direct
- add a nodemon script to your `package.json`

- logging
- helmet

Create a single route: `/`

In the browser, open the network panel and view the request/response headers.

What is different when you have helmet uncommented?
 - you can no longer see that 'express' is being used

# Create an express app with the following middleware installed:

- morgan
- express-es6-template-engine
- static - comes natively installed with express, no need to `npm install` separately

Create an array of 3-5 pet names

Create routes that `res.render()` templates for the following:

- `/`: welcome the user
- `/pets`: list all the pets
- `/pets/:name`: show the pet

Add a stylesheet and create a `<link>` to the stylesheet.

In your stylesheet, style the following elements:

- `h1`
- `li`
- `p`