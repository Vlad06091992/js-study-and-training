class List {
    constructor(item) {
        this.item = item
    }

    render() {
        let ul = document.createElement('ul')

        this.item.forEach((el) => {
            let li = document.createElement('li')
            li.innerHTML = el
            // console.log(li)

            ul.appendChild(li)

        })

        return ul
    }
}