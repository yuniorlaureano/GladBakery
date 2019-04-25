const express = require('express');

const adminRoute = express.Router();

function route() {
    adminRoute.route('/').get((req, res) => {
        res.render('admin');
    });

    return adminRoute;
}

module.exports = route;