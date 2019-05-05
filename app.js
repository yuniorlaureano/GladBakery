const express = require('express');
const path = require('path');
var cookieParser = require('cookie-parser');
var session = require('express-session');
var bodyParser = require('body-parser');

const app = express();
const port = process.env.PORT || 3000;

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(session({ secret: 'library' }));

app.use(express.static(path.join(__dirname, '/public/')));
app.use('/css', express.static(path.join(__dirname, 'node_modules/bootstrap/dist/css')));
app.use('/css', express.static(path.join(__dirname, 'node_modules/datatables/media/css')));
app.use('/js', express.static(path.join(__dirname, 'node_modules/bootstrap/dist/js')));
app.use('/js', express.static(path.join(__dirname, 'node_modules/jquery/dist')));
app.use('/js', express.static(path.join(__dirname, 'node_modules/datatables/media/js')));
app.use('/js', express.static(path.join(__dirname, 'node_modules/axios/dist')));
app.set('views', './src/views');
app.set('view engine', 'ejs');

const adminRoute = require('./src/routes/admin-route')();
const defaultRoute = require('./src/routes/default-route')();
const loginRoute = require('./src/routes/login-route')();

app.get('/', function(req, res){
    res.redirect('/default');
});
app.use('/admin', adminRoute);
app.use('/default', defaultRoute);
app.use('/login', loginRoute);

app.listen(port, function() {
    console.log('listeing on port ' + port);
});