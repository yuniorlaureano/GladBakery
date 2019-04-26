const express = require('express');

const loginRoute = express.Router();

function route() {
    loginRoute.route('/').get((req, res) => {
        res.render('login');
    });

    return loginRoute;
}

module.exports = route;