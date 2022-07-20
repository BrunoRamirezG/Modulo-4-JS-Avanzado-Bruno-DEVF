const fs = require("fs");

// const patito = require('fs');
// patito.writeFile('my-file.txt', 'Este texto lo escribi desde node');
                 
const fileName = "./my-file.txt";
const textContent = "Este texto lo escribi desde node";

/** Aqui le agregamos el metodo .writeFile a fs con uso del "."
Despues le agregamos lo parametros que necesitemos, en este caso usamos la direccion de nuestro archivo y el contenido
Despues agregamos el parametro de callback
*/
fs.writeFile(fileName, textContent, (err) => {
    if(err){
        throw err;
    } else{
        console.log("¡archivo creado con exito!");
    }
});
