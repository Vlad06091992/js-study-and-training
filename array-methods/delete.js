let arr = [1, 2, 3, 4, 5]

// удалить 4

function delNun(array, num) {
    let ind = arr.indexOf(num)
    if (ind == -1) return array
    array.splice(ind, 1)
    return array
}

console.log(delNun(arr))