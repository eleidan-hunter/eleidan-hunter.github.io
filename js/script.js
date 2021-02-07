window.addEventListener('load', function(){

	let slider = document.querySelector('.gallery');
	let img = slider.querySelectorAll('.photos img');
	let i = 0;
	
	slider.addEventListener('click', function(e){
		
		if(e.target.classList.contains('prev')){
			let animHide = img[i].animate(
				[
					{ opacity:1, transform: 'translateX(0) scale(1)'},
					{ opacity:0, transform: 'translateX(100%) scale(.5)'}],
				{duration: 1000}
			);
			
				img[i].classList.remove('showed');
			
			i--;
			if(i < 0){
				i = img.length - 1;
			}
			let animShow = img[i].animate(
				[
					{ opacity:0, transform: 'translateX(-100%) scale(.5)'},
					{ opacity:1, transform: 'translateX(0) scale(1)'}],
				{duration: 1000}
			);
			animHide.addEventListener('finish', function(){
				img[i].classList.add('showed');
			});
			//
		}

		//клик по "next"
		if(e.target.classList.contains('next')){
			let animHide = img[i].animate(
				[
					{ opacity:1, transform: 'translateX(0) scale(1)'},
					{ opacity:0, transform: 'translateX(-100%) scale(.5)'}],
				{duration: 1000}
			);
			// переключения слайдов назад
			img[i].classList.remove('showed');
			i++;
			if(i >= img.length){
				i = 0;
			}
			let animShow = img[i].animate(
				[
					{ opacity:0, transform: 'translateX(100%) scale(.5)'},
					{ opacity:1, transform: 'translateX(0) scale(1)'}],
				{duration: 1000}
			);
			animHide.addEventListener('finish', function(){
				img[i].classList.add('showed');
			});
			// 
		}

		// анимация с прозрачностью
		// if(img[i].classList.contains('showed')){
		// 	console.log(img[i]);
		// 	img[i + 1].animate(
		// 		[
		// 			{opacity:1, transform: 'translateX(0%) scale(1)'},
		// 			{opacity:0, transform: 'translateX(-100%) scale(.8)'}],
		// 		{duration: 1000}
		// 	);
		// 	img[i].animate(
		// 		[
		// 			{opacity:0, transform: 'translateX(100%) scale(0.8)'},
		// 			{opacity:1, transform: 'translateX(0%) scale(1)'}],
		// 		{duration: 1000}
		// 	);
		// 	img[i - 1].classList.remove('showed');
		// }
	});

});

// window.addEventListener('load', function(){

// 	let btnPrev = document.querySelector('.gallery .buttons .prev');
// 	let btnNext = document.querySelector('.gallery .buttons .next');

// 	let images = document.querySelectorAll('.gallery .photos img');
// 	let i = 0;

// 	btnPrev.addEventListener('click', function(){
		
		
// 		images[i].classList.remove('showed');
		
// 		i--;

// 		if(i < 0){
// 			i = images.length - 1;
// 		}

// 		images[i].classList.add('showed');
// 	});

// 	btnNext.addEventListener('click', function(){
// 		images[i].classList.remove('showed');
// 		i++;

// 		if(i >= images.length){
// 			i = 0;
// 		}

// 		images[i].classList.add('showed');
// 	});

// });