//возведение в степень

// function multMult(num, stepen){
//         if(stepen == 1){
//                 return num
//         } else {

//                 return(num * multMult(num, stepen -1))
//         }
// }

// console.log(multMult(3,5))

function t1(n) {
        let out = '';
        function r1(z) {
                while (z > 0) {
                        out += ` ${z}`
                        z--
                        if (z == 0) {
                                r1(z)
                        }
                }
        }
        r1(n)
        return out.trim()
}

console.log(t1(5))

function t2(n) {                           //n основная переменная
        let out = '';
        function r1(z) {                   //z вспомогатаельная переменная
                let n = 0
                while (z >= n) { 
                        out += ` ${ n}`           
                        n = n +2 
                        
                       
                }
        }
        r1(n)
        return out.trim()
}

console.log(t2(8))


// function t1(n) {
//         let out = '';
//         function r1(z) {
//                 while (z > 0) {
//                         if (z == 0) {
//                                 r1(z)
//                         } else {
//                                 out += ` ${z}`
//                                 z--
//                         }
//                 }
//         }
//         r1(n)
//         return out
// }



