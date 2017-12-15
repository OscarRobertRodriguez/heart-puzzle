

export default function resizePlacePieces() {
   var hexagons = document.querySelectorAll('.hexagon'),
       windowWidth = window.innerWidth; 

   [].forEach.call(hexagons, (hex) => { 
        
     if (windowWidth >= 2190 && hex.dataset.resize === 'true' ) {
         hex.style.width = '183px';
         hex.style.height = '144px';
     }

     if(windowWidth < 2190  && hex.dataset.resize === 'true') {
         hex.style.width = '127px';
         hex.style.height = '104px';
     }

   } ); 

}