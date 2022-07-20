const operations = require("./functions");

function main  (){
    let number1 = 10;
    let number2 = 40;
    console.log("suma", operations.sum(number1, number2));
    console.log("resta", operations.substract(number1, number2));
    console.log("division", operations.divide(number1, number2));
    console.log("multiplicacion", operations.multiply(number1, number2));
}

main();