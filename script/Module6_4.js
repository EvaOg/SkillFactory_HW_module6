// Задание №4
// Напишите функцию, которая принимает два числа. 
// Каждую секунду необходимо выводить в консоль, начиная от первого и заканчивая вторым. Используйте setInterval.
// Например, пользователь ввёл числа 5 и 15. Каждую секунду в консоль должно печататься число, 
// начиная с 5 и заканчивая 15 (всего 11 чисел: 5 6 7 8 9 10 11 12 13 14 15).

let firstNumber = +prompt ("enter the first that is more then 0 number")
let secondNumber = +prompt ("enter the second number that is more then the first one")
const getNumber = () => {
    let c = []
    for (let i = firstNumber; i <= secondNumber; i++) {
        c.push(i)
    }
    return c
}
 console.log(getNumber())
setInterval(() => alert(getNumber()), 1000)