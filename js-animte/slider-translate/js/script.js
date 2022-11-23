window.addEventListener('load', function () {

	new Slider('.gallery-1');
	let slider2 = new Slider('.gallery-2');

	setInterval(function () {
		slider2.next();
	}, 3000);
});

class Slider {
	constructor(selector) {
		this.root = document.querySelector(selector);
		this.btnPrev = this.root.querySelector('.buttons .prev');
		this.btnNext = this.root.querySelector('.buttons .next');

		this.images = this.root.querySelectorAll('.photos img');
		this.i = 0;
		this.animated = false;

		this.btnPrev.addEventListener('click', () => { this.prev() });
		this.btnNext.addEventListener('click', () => { this.next() });
	}

	prev() {
		if (!this.animated) {
			let right = "translateX(100%)"
			let rigthAnim = [{ transform: 'translateX(-100%)' }, { transform: 'translateX(0)' }]
			let imgHide = this.images[this.i];
			this.i = this.i > 0 ? this.i - 1 : this.images.length - 1;
			this.toogleSlides(imgHide, this.images[this.i],right,rigthAnim)
			
		}
	}

	next() {
		if (!this.animated) {
			let left = 'translateX(-100%)'
			let leftAnim = [{ transform: 'translateX(0)' }]
			let imgHide = this.images[this.i];
			this.i = this.i < this.images.length - 1 ? this.i + 1 : 0;
			
			this.toogleSlides(imgHide, this.images[this.i],left,leftAnim)
			
			}

		}
	


toogleSlides(imgHide, showImg,x,xAnim) {
		this.animated = true;
		let animate = imgHide.animate([{ transform:x, opacity: 0 }], { duration: 500 });

		animate.addEventListener('finish', () => {
			imgHide.classList.remove('showed');
			this.animated = false;
		});

		let newAnimate = this.images[this.i].animate(xAnim, { duration: 500 })
		newAnimate.addEventListener("finish", () => {
			this.images[this.i].classList.add('showed');
		})
}

}
