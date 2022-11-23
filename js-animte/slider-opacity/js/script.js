window.addEventListener('load', function(){

	
class Slider{


constructor(gallery){
	this.gallery = document.querySelector(gallery);
	this.btnPrev = this.gallery.querySelector(`.buttons .prev`)
	this.btnNext = this.gallery.querySelector(`.buttons .next`)
	this.images = this.gallery.querySelectorAll(`.photos img`);
	this.i = 0;
	let context = this
	this.btnNext.addEventListener('click', function(){
		context.next()
		
	})
	this.btnPrev.addEventListener('click', () => {
		this.prev()
});

}
    

	next(){
		this.images[this.i].classList.remove('showed');
		this.i++;

		if(this.i >= this.images.length -1){
			this.i = 0;
		}

		this.images[this.i].classList.add('showed');
	}

	prev(){
		this.images[this.i].classList.remove('showed');
		this.i--;

		if(this.i < 0){
			this.i = this.images.length - 1;
		}

		this.images[this.i].classList.add('showed');
	}


}

	new Slider('.gallery-1');
	new Slider('.gallery-2');


});

