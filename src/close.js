
var list = document.querySelector('.options-list'); 


list.addEventListener('click', function (e) {
	var target = e.target; 
	var width = window.innerWidth;
	var list = document.querySelector('.options-list'); 

	if( target.textContent === 'close' && width < 1600 ) {
		list.style.transform = 'translateX(150px)';
	}

	if(target.textContent === 'close' && width >= 1600) {
	   list.style.transform = 'translateX(200px)';
	}
}); 