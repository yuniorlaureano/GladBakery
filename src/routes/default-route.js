const express = require('express');

const defaultRoute = express.Router();

function route() {
    defaultRoute.route('/').get((req, res) => {
        res.render('default');
    });

    defaultRoute.route('/registro').get((req, res) => {
        res.render('registro');
    });

    

    return defaultRoute;
}

module.exports = route;