//funcion que usa find() para encontrar el primer numero mayor a 50 en un array
const array = [100, 50, 51, 60, 70];
const found = array.find((x) => x > 50);
//x es el valor actual
console.log(found);