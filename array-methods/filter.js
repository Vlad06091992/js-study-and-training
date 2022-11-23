let arr = [1, 2, 2, 3, 3, 4, 5]
let map = {}
let res = arr.filter((item, index, array) => {
    for (let i = 0; i < arr.length; i++){
        if (item === arr[i]) {
            map[item] = item
    console.log(map)

        }
        // item === 2 ? console.log(item,index) : console.log(1)
    }

})
