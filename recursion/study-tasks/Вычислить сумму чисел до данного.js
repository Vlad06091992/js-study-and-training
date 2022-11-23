//Напишите функцию sumTo(n) , которая вычисляет сумму чисел 1 + 2 + ... + n .

// Например

// sumTo(1) = 1
// sumTo(2) = 2 + 1 = 3
// sumTo(3) = 3 + 2 + 1 = 6
// sumTo(4) = 4 + 3 + 2 + 1 = 10

function sumTo(n){
    return n === 1 ? n : n + sumTo(n - 1) 
}

console.log(sumTo(4))