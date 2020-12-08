# 0. In your own words, write an answer to the following questions:

- What is the difference between git and GitHub?
    - git is a set of protocols for collaboration on coding projects that can be used to add, backup, and track changes to code base for a group or just an individual
    - gitHub is the name of a repository where git is used to upload and view project changes at. can also dowload others code/projects. there are other sites that can use git in similar manner, though github is prob most popular
- What is the difference between front-end and backend development?

# 1. Create two "Hello World" express apps

Each should have one route (the home page) and render a template (which can be a simple `<h1>Hello World</h1>`)

# 2. Link from app 1 to app 2

Add another route to the first app at the path `/lift-off`.

This route should render a template with an `<a>` tag that links to the home page of the second app.

# 3. Link from app 2 to dynamic route on app 1

Update the anchor tag on the first app.
It should go to a new route on the second app that shows a "Hello <name>" page.
(Hint: you'll need a route param.)

