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