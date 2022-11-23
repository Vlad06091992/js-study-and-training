window.addEventListener('load', function () {
	let menu = document.querySelector(".menu")
	let links = menu.querySelectorAll('a')
	let btnUp = document.querySelector(".btnUp")
	let scrollTimeout;                             //переменная для запуска onscroll изначально не активна

	window.addEventListener("scroll", function(){
		clearTimeout(scrollTimeout)                //при скролле таймаут очищается и будет очищаться все время скролла
		scrollTimeout = setTimeout(onScroll, 100) // после скролла запускается функция onscroll через 200мс
	})                                                  //

	
	btnUp.addEventListener("click", (e)=> {
		window.scrollTo({                               
			top:0,
			behavior:"smooth"
		})
	})

	

	menu.addEventListener("click", function(e){	
		let link = e.target                         //создаем переменную для целевого элемента
		if(e.target.classList.contains("menu__link")) { //если кликом попали на целевой элемент
			e.preventDefault()                         //отменяем стандратное событие
		
		menu.querySelector(".menu__link-active").classList.remove("menu__link-active") // внутри меню получаем элемент с классом active и удаляем его
		link.classList.add("menu__link-active") //кликнутому элементу даем нужный класслист
		scrollToTarget(link.hash)               //функция скролла              
		
		}
	})
		
		if(location.hash !== "") {          //скролл по локэйшен
			scrollToTarget(location.hash)
		}
		

		
		function scrollToTarget (id) {                   //функция скролла
			let target = document.querySelector(id)      //получаем айдишник куда хотим скроллить
			if(target !== null){
		let pos = target.offsetTop -70                   //получаем координаты скролла           
		
                                                       
		window.scrollTo({                               
			top:pos,
			behavior:"smooth"
		})
			}
		}

          function onScroll(){
			console.log(1)
			let pos = window.pageYOffset;
			if(pos > this.window.innerHeight) {               //если пролистали ровно один экран
				btnUp.classList.add("btnUp-visible")
			} else {
				btnUp.classList.remove("btnUp-visible")
			}
	
	
			for(i = links.length - 1; i >= 0 ;i--) {            // обратный цикл от последнего для получения ссылок
			 let link = links[i];                               //создадим массив для ссылок
			
			  let target = document.querySelector(link.hash);   //получим хэштеги
			  
			 
			  if(pos + window.innerHeight/2 > target.offsetTop) {                      // если позиция экрана Pos больше координаты y заголовка
				menu.querySelector(".menu__link-active").classList.remove("menu__link-active") // внутри меню получаем элемент с классом active и удаляем его
				link.classList.add("menu__link-active")
				break;                                            //с помощью break останавливаем цикл и будет выведен
			}                                                   //лишь один заголовок
			}
		}
		  
		
		
		
		
		
		
		
	
	})
 /* событие скролл для дз со звездочкой */
		


	





     
		

		


