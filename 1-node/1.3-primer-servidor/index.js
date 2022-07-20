const http = require("http");

//el objeto que importamos nos deja agregarle un metodo (.createServer)
//el parametro de .createServer pueden ser : un callback, funciones, funcion anonima, funcion flecha.

const server = http.createServer((request, response) => {
    //Usamos .writeHead el primer parametro es un status y el segundo es un mimeType.
    const status = 200;
    const mimeType = { "Content-Type" : "text/html" };

    
    response.writeHead(status, mimeType);
    //aqui abajo agregamos el archivo html que estaos pidienod en el mimetype.
    response.write("<html> <body> Hola </body> </html>");
});
//el metodo listen es el que levanta el servidor
//pero cuando yo levanto un servidor lo tengo que dar de alta en un puerto.
server.listen(8080);
console.log("inicie el servidor... ");