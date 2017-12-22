
import startTimer from './startTimer.js';
import sound from 'sounds/Ether.mp3';
import bearRun from 'sounds/bearChase.wav'; 

export default function initAudio(mode) {	
   var text = mode,
       music = new Audio(sound),
       bearChase = new Audio(bearRun), 
       bearInterval = setInterval(() => { bearChase.play()} , 45000); 

	music.loop = true;
	music.play();
   console.log(text + ' this is mode');
  if(text === 'easy') {
	startTimer(930, music, bearInterval);
   }

  if(text === 'hard') {
  	startTimer(190, music, bearInterval, text);
  }

    var muteBtn = document.getElementById('muteBtn'); 

    muteBtn.addEventListener('click', pauseMusic);

    function pauseMusic(e) {
    	var text = e.target.textContent; 
    	if(text === 'mute') {
    	music.pause();
    	clearInterval(bearInterval);   
    	e.target.textContent = 'unmute';
      }else if (text === 'unmute') {
      	music.loop = true;
      	music.play();
      	bearInterval = setInterval(() => { bearChase.play()} , 45000); 
      	e.target.textContent = 'mute';
      }


    } 


}; 	