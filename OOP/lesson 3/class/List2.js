/*Поскольку у нас уже есть метод render то мы можем его использовать и в List2. 
Создайте метод render в List2 и внутри него в переменную ul получите результат работы метода render класса List. 
Теперь добавьте ul через classListAdd класс оформления из this.cssClass. Возвратите результат работы функции.*/

class List2 extends List {
    constructor(item, cssClass) {
        super(item)
        this.cssClass = cssClass
    }


    render() {
        let ul = super.render()
        // console.log(ul)
        ul.classList.add(`${this.cssClass}`)
        return ul
    }
}