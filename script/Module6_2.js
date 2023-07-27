
// Задание №2
// Написать функцию, которая принимает на входе любое число (но не больше 1 000), определяет, является ли оно простым, 
// и выводит простое число или нет. Если введено больше 1 000, то выводится сообщение, что данные неверны. Обратите внимание на числа 0 и 1.


let func = (a) => {
    if (typeof a == 'number' && a > 1 && a < 1000) {
        if (a % 2 === 0) {
            return console.log(`${a} is not prime`)
        } else {
            return console.log(`${a} is prime`)
        }
    } else {
      return console.log(`Enter a number! that is more then 0 & less then 1000`)
    }
  }
  console.log(func(2))