


export default function displayTimeLeft(seconds) {
	 var timerDisplay = document.getElementById('clock');
   var minutes = Math.floor(seconds / 60); 
   var remainderSeconds = seconds % 60; 
   var display = `${minutes}:${remainderSeconds < 10 ? '0' : ''}${remainderSeconds}`;
   document.title = display; 
   timerDisplay.textContent = display;

   // console.log({minutes}); 
}; 