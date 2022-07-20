function sum(a, b) {
    return a + b;
}
function substract(a, b) {
    return a - b;
}
function multiply(a, b) {
    return a * b;
}
function divide(a, b) {
    return a / b;
}

//el nombre de lado izquierdo es el nombre que va a tener dentro del objeto global de node 
//el nombre de lado derecho es el nombre de lo que le vamos a pasar

exports.sum = sum;
exports.substract = substract;
exports.multiply = multiply;
exports.divide = divide;


