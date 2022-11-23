class User {
constructor(name,age){
    this.name = name;
    this.age = age
}

#test = "isPrivate"

get test(){
    return this.#test
}

set test(str){
    this.#test = str
}

getPrivte(){
    return this.#test
}

}

class User2 extends User{}

let admin = new User2('Igor', 50)

console.log(admin)

admin.test = 'bla bla'

console.log(admin.test)

// let student = new User('Vlad',29)

// console.log(student)

// student.test = "isPrivate :DDDD"
// // console.log(student.test)
// // console.log(student)
// console.log(student.getPrivte())




