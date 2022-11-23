
let a = {
    name: "it-kamasutra",
    isNull:null,
    protocol: "https",
    maxSstudentsCount: 10,
    isOnline: true,
    students: ['ivan', 'ilya', 'andrey'],
    classrom: {
        teacher: {
            name: "Ivan",
            age: 18,
           

        }
    }
   
}


function deepCopyHelper(value) {
    switch (value) {
        case (typeof value == "string" || typeof value == "boolean" || typeof value == "number"):
            return value
        case (Array.isArray(value)):
            let res = []
            for (let i = 0; i < value.length; i++) {
                res.push(deepCopyObject(value[i]))
            }
            return res
        case (typeof value == "object"):
            let copy = {}
            for (let key in value) {
                copy[key] = deepCopyObject(value[key])
            }
            return copy
        case (typeof value == "function"):
            return value.bind()
    }
    return value
}


let b = {...a, students:[...a.students], classrom:{...a.classrom, teacher:{...a.classrom.teacher}}}

console.log(b)
console.log(deepCopyHelper(a))




//=====================================================

// function deepCopyObject(value) {
//     if (typeof value == "string" || typeof value == "boolean" || typeof value == "number") {
//         return value
//     }

//     if (Array.isArray(value)) {
//         let res = []
//         for (let i = 0; i < value.length; i++) {

//             res.push(deepCopyObject(value[i]))
//         }
//         return res
//     }

//     if (typeof value == "object") {
//         let copy = {}
//         for (let key in value) {
//             copy[key] = deepCopyObject(value[key])
//        }
//         return copy
//     }

//     if(typeof value == "function"){
//         return value.bind()
//     }
// }