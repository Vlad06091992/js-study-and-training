let obj = {
    showThis:()=>{
        console.log(this)
    }
}

class Test {
    static b = "ItGid.info";

    constructor(a) {
        this.a = a;
    }

    someMethod() {
        console.log('classic function');
        return this.a;
    }

    someMethod2 = () => {
        console.log('arrow function');
        console.log(this)
        return this.a;
    }

    static staticMethod() {
        return this.b;
    }
}

let obj2 = new Test('aaa')

// console.log(obj)
// console.log(obj.showThis())
obj2.someMethod2()

