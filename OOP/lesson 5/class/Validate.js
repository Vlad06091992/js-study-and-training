class Validate {
    constructor(a) {
        this.a = a;
    }

    static isNumber(num) {
        if (typeof num == 'number') {
            return true
        }

        return false
    }

    static isInt(num) {
        return Number.isInteger(num)
    }

    static isFloat(num) {
        return (!(this.isInt(num)))
    }

    static isChar(str) {
        if (typeof str == 'string') return str.length === 1

    }

    static isBoolean(str) {
        return typeof str == 'boolean'

    }

    static isArray(x) {
        return Array.isArray(x)

    }

    static toMoney(num) {

        let str = num.toString()

        let arr = str.split('')
        // let arr = Array.from(str)


        for (let i = 1; i < arr.length; i = i + 4) {
            arr.splice(i, 0, ' ')
        }

        return (arr.join(''))

    }
}