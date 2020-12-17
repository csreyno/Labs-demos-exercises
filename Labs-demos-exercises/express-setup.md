- `npm init -y`
- `npm install express`
- `npm install --save-dev nodemon`
- `npm install morgan`  - installs a common logging middleware that provide more detailed info in the terminal
- `npm install helmet`  - installs a common security middleware, good first step to securing your Express apps. sets your HTTP Response headers appropriately, protecting your app from well-known vulnerabilities.
- `npm install express-es6-template-engine` - 

- create an index.js, .gitignore, templates directory, public directory
- add a nodemon script to your `package.json` under `scripts`
   - "dev": "nodemon index.js"

- logging
- helmet