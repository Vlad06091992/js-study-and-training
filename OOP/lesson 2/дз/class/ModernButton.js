class ModernButton extends Button {
    constructor(width, height, background, value, border) {
        super(width, height, background, value);
        this.border = border
        // this.render()
    }

    render() {
        // super.render()
        let but = document.createElement('button')
        but.style.borderRadius = this.border + 'px'
        console.log(but.style.borderRadius)
        but.style.width = this.width + "px"
        but.style.height = this.height + "px"
        but.style.background = this.background
        but.innerHTML = this.value
        body.appendChild(but)
    }
}