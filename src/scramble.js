

import shuffle from './shuffle'; 

export default function scramble(e) {
    var piecesLeft = document.querySelector('.left-drop__zone-pieces').children,  
        piecesRight = document.querySelector('.right-drop__zone-pieces').children,
        leftArray = [],
        rightArray = []; 


    
     [].forEach.call(piecesLeft,function(piece) {
     	 leftArray.push(piece);  
     });

     [].forEach.call(piecesRight, function(piece) {
     	rightArray.push(piece); 
     }); 

     var shuffleLeft =  shuffle(leftArray),
         shuffleRight = shuffle(rightArray); 

    
    var leftS = document.querySelector('.left-drop__zone-pieces'),
        rightS = document.querySelector('.right-drop__zone-pieces');

         while(leftS.firstChild) {
         	leftS.removeChild(leftS.firstChild); 
         };

          while(rightS.firstChild) {
         	rightS.removeChild(rightS.firstChild); 
         }

 

        

         shuffleLeft.forEach(function(piece) {
              leftS.appendChild(piece);
         });


         shuffleRight.forEach(function(piece) {
              rightS.appendChild(piece);
         }); 
           








}; 