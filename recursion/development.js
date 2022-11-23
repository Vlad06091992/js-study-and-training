/* объект, в который вложен массив(1) + объект(2) 
в массиве(1) - 2 ключевых объекта
в объекте(2) - 2 массива с ключевыми объектами*/

let company = {
    sales: [{
        name: 'John',
        salary: 1000
    }, {
        name: 'Alice',
        salary: 600
    }],
    development: {
        sites: [{
            name: 'Peter',
            salary: 2000
        }, {
            name: 'Alex',
            salary: 1800
        }],
        internals: [{
            name: 'Jack',
            salary: 1300
        }]
    }
}





function developmentSum(company) {
    if (Array.isArray(company)) {
        return company.reduce((current, item) => current + item.salary, 0)

    }
    else {
        let sum = 0
        for (let subDev of Object.values(company)) {
            console.log(subDev[0])
            console.log('-----------')
            console.log(subDev[1])
            console.log('-----------')

            sum += developmentSum(subDev)
        }
        return sum

    }

}


    console.log(developmentSum(company))

// console.log(Object.keys(company))

// console.log(Object.values(obj))