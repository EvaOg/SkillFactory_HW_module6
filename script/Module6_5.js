// Задание №5
// Напишите функцию, которая принимает два натуральных числа x и n и возвращает x в степени n. Иначе говоря, умножает x на себя n раз и возвращает результат.

let x = 7;
let n = 2;
let getResult = (x, n) => Math.pow(x, n)
console.log(getResult(x, n))