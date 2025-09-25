//usa reduce para sumar todos los numeros en un array
const array = [40, 50, 30, 40, 50];
const sum = array.reduce((acc, curr) => acc + curr, 0);
//acc es el acumulador, curr es el valor actual
console.log(sum);