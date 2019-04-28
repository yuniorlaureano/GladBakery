const express = require('express');

const adminRoute = express.Router();

function route() {
    adminRoute.route('/').get((req, res) => {
        res.render('admin');
    });

    adminRoute.route('/cliente').get((req, res) => {
        res.render('cliente');
    });

    adminRoute.route('/pedido').get((req, res) => {
        res.render('pedido');
    });

    adminRoute.route('/pastel').get((req, res) => {
        res.render('pastel');
    });

    return adminRoute;
}

module.exports = route;