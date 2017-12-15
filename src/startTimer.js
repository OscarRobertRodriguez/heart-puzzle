
import displayTimeLeft from './displayTimeLeft';
import bearSound from 'sounds/bear2.wav';
import birdSound from 'sounds/bird.wav';
import bearRun from 'sounds/bearChase.wav'; 
import scramble from './scramble'; 

export default function startTimer(seconds, audio, difficulty) {
    var mode = difficulty,  
        defeatSound = new Audio(bearSound),
        successSound = new Audio(birdSound),
        bearChase = new Audio(bearRun), 
        defeatModal = document.getElementById('defeatBox'),
        successModal = document.getElementById('successBox'),
        hexagons = document.querySelectorAll('.hexagon'),
        scrambleMode, 
        bearInterval = setInterval(() => { bearChase.play()} , 45000); 


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
    	clearInterval(bearInterval);
    	clearInterval(scrambleMode);
    	audio.pause();
    	successSound.play();
    	setInterval(() => {
    	[].forEach.call(hexagons, (hexagon) =>  hexagon.style.display = 'none'); 
        }, 1000); 
        setInterval(() => {
    	successModal.style.display = 'block'; 
        }, 4000); 
    	// audio.pause();
    	// defeatSound.play();   
    	console.log('you finished the puzzle'); 
    	return ;
    }




   	if(secondsLeft < 0 && pieces.length > 0) {
   		clearInterval(countdown);
   		clearInterval(bearInterval);
   		clearInterval(scrambleMode);
   		audio.pause();
    	defeatSound.play();
   	    setInterval(() => {
    	defeatModal.style.display = 'block'; 
        }, 2000); 
   		return; 
   	}; 
   
   displayTimeLeft(secondsLeft); 

   } , 1000); 
}; 