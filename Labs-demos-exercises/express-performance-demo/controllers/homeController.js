const homeHandler = (req, res) => {
    // res.send(`hello world from Controller!</h1>`);
    res.render('homepage') //from homepage.html in templates directory
};

module.exports = {
    homeHandler
};