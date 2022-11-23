let body = document.querySelector('body')
let test = new List(['one', 'two', 'three', 'four'])
let res = test.render()
body.appendChild(res)

let test2 = new List2 (['one', 'two', 'three', 'four'],'red')
let res2 = test2.render()
body.appendChild(res2)

let test3 = new List2 (['one', 'two', 'three', 'four'],'green')
let res3 = test3.render()
body.appendChild(res3)

let test4 = new List3(['one', 'two', 'three', 'four'],['text-center', 'bold', 'text-red'])
let res4 = test4.render()
body.appendChild(res4)