


var menuBtn = document.getElementById('open-menu'); 



menuBtn.addEventListener('click', function(e) {
	var target = e.target; 
	var menu = document.body.querySelector('.options-list');
    menu.style.transform = 'translateX(0px)';
} ); 



