const express = require('express');

const adminRoute = express.Router();

const clientes = [{
    id: 1,
    nombre: 'Yunior',
    apellido: 'Laureano',
    edad: '26',
    email: 'yuniorlaureano@gmail.com',
    clave: '1234',
    retry: '1234',
    telefono: '80955546211',
    sector: 'El Encantador',
    calle: 'Gregorio Luperon',
    numero: '45',
    referencia: 'Al lado del cumbre'
}];

function route() {
    adminRoute.route('/').get((req, res) => {
        res.render('admin');
    });

    adminRoute.route('/cliente').get((req, res) => {
        res.render('cliente');
    });

    adminRoute.route('/api/cliente').get((req, res) => {

        res.json({
            "draw": req.query.draw + 1,
            "recordsTotal": clientes.length,
            "recordsFiltered": clientes.length,
            "data": clientes
        });
    });

    adminRoute.route('/api/cliente/:id').get((req, res) => {
        var cliente = clientes.filter(function(item) {
            return item.id == req.params.id;
        });

        if (cliente.length > 0)
            res.json(cliente[0]);
        else
            res.sendStatus(404);
    });

    adminRoute.route('/api/cliente').post((req, res) => {
        clientes.push(req.body);
        res.end();
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