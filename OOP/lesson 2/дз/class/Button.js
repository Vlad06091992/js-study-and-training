class Button {
    constructor(width, height, background, value) {
        this.width = width;
        this.height = height;
        this.background = background;
        this.value = value
        
    }

    

    render() {
        let but = document.createElement('button')
        
        but.style.width = this.width + "px"
        but.style.height = this.height + "px"
        but.style.background = this.background
        but.innerHTML = this.value
        body.appendChild(but)
    }
}



// let div = document.createElement('div')
// div.innerHTML = 'privet'
// div.appendChild(body)