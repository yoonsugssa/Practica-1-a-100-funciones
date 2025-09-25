//funcion que usa every() para verificar si todos los numeros en un array son mayores a 10
const array = [100, 200, 400, 500, 600];
const allAboveTen = array.every((x) => x > 10);
console.log(allAboveTen);
//allAboveTen es true si todos los numeros son mayores a 10, false si al menos uno no lo es