const express = require('express');

const defaultRoute = express.Router();

function route() {
    defaultRoute.route('/').get((req, res) => {
        res.render('default');
    });

    return defaultRoute;
}

module.exports = route;