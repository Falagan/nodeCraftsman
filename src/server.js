let http = require('http');

http.createServer(function(request, response) {
    console.log('Manejando Http request: Demostracion de accion bloqueante.');
    response.writeHead(200, {'Content-Type': 'text/html'});
    response.write('<p>Hello</p>');
    response.end();
}).listen(5000);

let a;

for (let i =0; i < 10000000000; i++){
    a=i;
}

console.log('For loop has finished');
console.log('Mientras se ejecuta el loop for el servidor no resuelve las peticiones recibidas.');