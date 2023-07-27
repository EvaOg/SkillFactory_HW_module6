// Задание №1
// Дан массив. Нужно вывести в консоль количество чётных и нечётных элементов в массиве. 
// Если в массиве есть нулевой элемент, то он учитывается и выводится отдельно. 
// При выполнении задания необходимо учесть, что массив может содержать не только числа, но и, например, знаки, null и так далее.

let arr = [1, 3, 4, 2, 7, 9, 0, 0]
let oddArr = [] 
let evenArr = []
let zerroArr = []
for (let i = 0; i < arr.length; i++) {
    if (typeof arr[i] == 'number' && arr[i] > 0) {
        if (arr[i] % 2 == 0) {
            evenArr.push(arr[i])
        } 
        if (arr[i] % 2 != 0) {
            oddArr.push(arr[i])
        }
    }
        if (arr[i] == 0) {
            zerroArr.push(arr[i])
    }
}

console.log(evenArr.length)
console.log(oddArr.length)
console.log(zerroArr.length)