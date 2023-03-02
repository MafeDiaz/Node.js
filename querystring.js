const http = require('http');
const url = require('url');
const fecha = new Date();

http.createServer(function(req, res) {
            
    res.writeHead(200, {'Content-Type': 'text/html; charset=utf-8'});

    const q = url.parse(req.url, true).query;
    const txt =q.year + " "+q.month;


    res.end(txt);
    }).listen(8080);

    console.log('El servidor esta funcionando en el puerto 8080',fecha);

    //http://localhost:8080/?year=2023&month=march