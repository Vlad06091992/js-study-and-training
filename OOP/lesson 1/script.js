let a = {
    'name':'test',
    
    color:"green",


}

let b = {
   
    __proto__:a,
    color: 'red',
}



let c = {
    font:"verdana",
    __proto__:b
}

// console.log(a)

console.log(b.name)
console.log(c.hasOwnProperty("color"))
console.log(c.__proto__)

