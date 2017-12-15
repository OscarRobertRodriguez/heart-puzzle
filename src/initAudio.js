
import startTimer from './startTimer.js';
import sound from 'sounds/Ether.mp3';

export default function initAudio(mode) {	
   var text = mode ;
   var music = new Audio(sound); 
	music.loop = true;
	music.play();
   console.log(text + ' this is mode');
  if(text === 'easy') {
	startTimer(730, music);
   }

  if(text === 'hard') {
  	startTimer(180, music, text);
  }

    var muteBtn = document.getElementById('muteBtn'); 

    muteBtn.addEventListener('click', pauseMusic);

    function pauseMusic(e) {
    	var text = e.target.textContent; 
    	if(text === 'mute') {
    	music.pause(); 
    	e.target.textContent = 'unmute';
      }else if (text === 'unmute') {
      	music.loop = true;
      	music.play();
      	e.target.textContent = 'mute';
      }


    } 


}; 	