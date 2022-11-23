function one(a){
    return function mult(b){
       return b*a
    }
}

let step = one(3)

let nextStep = step(4)
console.log(nextStep)