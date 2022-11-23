window.addEventListener('load', function () {


	let status = true

	let faq = document.querySelector('.faq'); // фак (весь элемент)

	faq.addEventListener('click', function (e) { //кликаем по нему
		if (e.target.classList.contains('ask')) { //фильтруем нужное(аск)
			toogleItem(e.target);               //запускаем функцию и передаем аргумент в виде того на что был клик(аск)
		}
	});

	function toogleItem(ask) {                  //ну и функция которая получает аск
		let answer = ask.nextElementSibling;    //переводит нас к следующему узлу DOM, который является тегом (answer)
		console.log(answer.style.height)
		console.log(answer.clientHeight)
		// let answer = ask.parentNode.querySelector(".answer") отправимся к родителю,и потом с помощью квериселектор найдем
		// элемент с классом answer
		if (status) {
			if (answer.classList.contains("open")) { //проверка на наличие отображения подсказки (.answer.open)

				status = false
				answer.style.height = answer.clientHeight + "px";
				// console.log(answer.style.height)
				let animate = answer.animate([  //создаем переменную анимэйт и метод анимейт для того что хотим анимировать

					// keyframes                /*!!!код для удаления подсказки!!! */  
					{ height: 0 }],   //пишем кеймфреймы

					//timing options            //пишем опцию для времени
					{ duration: 1000 }
				)
				animate.addEventListener("finish", function () {   //подписываемся на завершение анимации
					answer.classList.remove("open")     //при завершении анимации удаляем класс опен(убираем подсказку)
					status = true
				})



			} else {
				status = false
				answer.classList.add("open")
		
				let animate = answer.animate([  //создаем переменную анимэйт и метод анимейт для того что хотим анимировать

					// keyframes                /*!!!код для удаления подсказки!!! */  
					{ height: 0 },
					{ height: answer.clientHeight + "px" }],   //пишем кеймфреймы

					//timing options            //пишем опцию для времени
					{ duration: 1000 }
				)

				animate.addEventListener("finish", function () {   //подписываемся на завершение анимации
					   status = true
				})

				
			}
		}
	}




});


/*
	open: addClass, d: block, anim
	close: addClass, anim
			anim.onend = d: none
*/