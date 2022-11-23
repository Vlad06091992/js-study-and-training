/*Напишите функцию printList(list) , которая выводит элементы списка по одному*/

let list = {
    value: 1,
    next: {
        value: 2,
        next: {
            value: 3,
            next: {
                value: 4,
                next: null
            }
        }
    }
};

// function printList(list) {
//     for (let some of Object.values(list)) {
//         if (typeof some !== "object") {
//             console.log(some)

//         } else {
//             console.log(printList(some))
//         }
//     }
// }

function printList(list) {
   console.log(list.value)
   if((list.next !== null)){
    printList(list.next)
}
}

printList(list)

// console.log(null == true)1

