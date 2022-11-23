function irlGenerator(domain){
    return function(url){
        return(`https://${url}.${domain}`)
    }
}

let ruUrl = irlGenerator("ru")
let comUlr = irlGenerator("com")

console.log(ruUrl("vsalde"))
console.log(comUlr("nettflix"))





