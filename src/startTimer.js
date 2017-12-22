
import displayTimeLeft from './displayTimeLeft';
import bearSound from 'sounds/bear2.wav';
import success from 'sounds/success.wav';
import panting from 'sounds/scared-breathing.wav';
import snow from 'sounds/walking-snow.wav';
import scramble from './scramble'; 

export default function startTimer(seconds, audio1, audio2, difficulty) {
    var mode = difficulty,  
        defeatSound = new Audio(bearSound),
        successSound = new Audio(success),
        scaredSound = new Audio(panting),
        walkingSound = new Audio(snow), 
        defeatModal = document.getElementById('defeatBox'),
        successModal = document.getElementById('successBox'),
        hexagons = document.querySelectorAll('.hexagon'),
        scrambleMode; 
        


    const now = Date.now(); 
    const then = now + seconds * 1000; 
    displayTimeLeft(seconds); 


   if (mode === 'hard') {
    scrambleMode = setInterval(() => {scramble() }, 15000 );
   }


   var countdown = setInterval(() => {
   	const secondsLeft = Math.round((then - Date.now()) / 1000); 
    
   var pieces = document.querySelectorAll('.piece');

    if(pieces.length === 0 ) {
    	clearInterval(countdown); 
    	clearInterval(scrambleMode);
    	audio1.pause();
    	scaredSound.pause();
    	clearInterval(audio2); 
    	successSound.play();
    	setInterval(() => {
    	[].forEach.call(hexagons, (hexagon) => {
        hexagon.classList.add('filter-animation');

      
      }); }, 1000); 
        setInterval(() => {
    	successModal.style.display = 'block'; 
      successModal.classList.add('animated', 'zoomInDown');
        }, 10000); 
   
    	return ;
    }
    

    if(pieces.length < 8) {	
       scaredSound.play(); 
       scaredSound.loop = true; 
    }

    
    if(pieces.length === 10 || pieces.length === 25 || pieces.length === 39) {
        walkingSound.play(); 
    }

   	if(secondsLeft < 0 && pieces.length > 0) {
   		clearInterval(countdown);
   		clearInterval(scrambleMode);
   		audio1.pause();
   		scaredSound.pause(); 
   		clearInterval(audio2);
    	defeatSound.play();
   	    setInterval(() => {
    	defeatModal.style.display = 'block';
      successModal.classList.add('animated', 'zoomInDown'); 
        }, 2000); 
   		return; 
   	}; 
   
   displayTimeLeft(secondsLeft); 

   } , 1000); 
}; 