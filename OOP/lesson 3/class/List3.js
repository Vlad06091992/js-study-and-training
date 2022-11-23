class List3 extends List {
    constructor(item, cssClass) {
        super(item)
        this.cssClass = cssClass
    }
    render() {
        let ul = super.render()
        console.log(ul)
        this.cssClass.forEach(el => {

            // ul.classList.add(`${el}`)
            ul.classList.add(el)

        });
        return ul
    }
}