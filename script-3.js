// Задача 3 - результат - 1 2 3 4 5 6 7

const a = [1, 2, 3]
const b = [5, [6, 7]]
const c = 4

const b1 = b[0];
const b2 = b[1];

const result = a.concat(c, b1, b2);

console.log(result)