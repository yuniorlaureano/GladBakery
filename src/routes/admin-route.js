const express = require('express');

const adminRoute = express.Router();

var clientes = [{
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

var insumos = [{
        id: 1,
        nombre: "Ajo",
        descripcion: "Ajo Garly"
    },
    {
        id: 2,
        nombre: "Cebolla",
        descripcion: "Cebolla Roja"
    }
];

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
        var cliente = clientes.filter(function (item) {
            return item.id == req.params.id;
        });

        if (cliente.length > 0)
            res.json(cliente[0]);
        else
            res.sendStatus(404);
    });

    adminRoute.route('/api/cliente').post((req, res) => {
        clientes.push({
            ...req.body,
            id: clientes.length + 1
        });
        res.end();
    });

    adminRoute.route('/api/cliente/:id').put((req, res) => {
        clientes = clientes.filter(function (item) {
            if (item.id == req.params.id) {
                var keys = Object.keys(req.body);
                for (var i = 0; i < keys.length; i++) {
                    if (item[keys[i]] && item[keys[i]] != req.body[keys[i]])
                        item[keys[i]] = req.body[keys[i]];
                }
            }
            return true;
        });

        res.sendStatus(204);
    });

    adminRoute.route('/api/cliente/:id').delete((req, res) => {
        clientes = clientes.filter(function (item) {
            return item.id != req.params.id;
        });

        res.sendStatus(204);
    });

    adminRoute.route('/pedido').get((req, res) => {
        res.render('pedido');
    });

    adminRoute.route('/pastel').get((req, res) => {
        res.render('pastel');
    });

    adminRoute.route('/api/pastel/insumo').get((req, res) => {
        res.json({
            "draw": req.query.draw + 1,
            "recordsTotal": insumos.length,
            "recordsFiltered": insumos.length,
            "data": insumos
        });
    });

    adminRoute.route('/api/pastel/insumo/:id').get((req, res) => {
        var insumos = insumos.filter(function (item) {
            return item.id == req.params.id;
        });

        if (insumos.length > 0)
            res.json(insumos[0]);
        else
            res.sendStatus(404);
    });

    adminRoute.route('/api/pastel/insumo').post((req, res) => {
        insumos.push({
            ...req.body,
            id: insumos.length + 1
        });
        res.end();
    });

    adminRoute.route('/api/pastel/insumo/:id').put((req, res) => {
        insumos = insumos.filter(function (item) {
            if (item.id == req.params.id) {
                var keys = Object.keys(req.body);
                for (var i = 0; i < keys.length; i++) {
                    if (item[keys[i]] && item[keys[i]] != req.body[keys[i]])
                        item[keys[i]] = req.body[keys[i]];
                }
            }
            return true;
        });

        res.sendStatus(204);
    });

    adminRoute.route('/api/pastel/insumo/:id').delete((req, res) => {
        insumos = insumos.filter(function (item) {
            return item.id != req.params.id;
        });

        res.sendStatus(204);
    });

    return adminRoute;
}

module.exports = route;