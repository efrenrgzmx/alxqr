/**
 * Inclusiones
 * **/

//COMUNICACION WEBSOCKET
var express = require('express');
var app = express();
const http = require('http').Server(app);

app.use(express.static('public'));
var port_number = http.listen(process.env.PORT || 3000);
app.listen(port_number);



