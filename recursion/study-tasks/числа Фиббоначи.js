/*Числа Фибоначчи
важность: 5
Последовательность чисел Фибоначчи  определяется формулой Fn = Fn-1 + Fn-2 . То
есть, следующее число получается как сумма двух предыдущих.
Первые два числа равны 1 , затем 2(1+1) , затем 3(1+2) , 5(2+3) и так далее: 1, 1,
2, 3, 5, 8, 13, 21... .
Числа Фибоначчи тесно связаны с золотым сечением  и множеством природных явлений
вокруг нас.
Напишите функцию fib(n) которая возвращает n-е число Фибоначчи.

function fib(n) {  ваш код  }
alert(fib(3)); // 2
alert(fib(7)); // 13
alert(fib(77)); // 5527939700884757

fib(1) == (1-1) + (1-2) == -1
            1       0
fib(2) == (2-1) + (2-2) == 1
            2       1
fib(3) == (3-1) + (3-2) == 3
            3       2  
fib(4) == (4-1) + (4-2) == 5
            4       3
fib(5) == (5-1) + (5-2) == 7
            6       5
fib(7) == (7-1) + (7-2) == 11

*/

function fib(n) {
    return n <= 1 ? n : (fib(n-1)) + (fib(n -2)) 
}

console.log(fib(44))
