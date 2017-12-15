


import p5 from 'images/G5'; 
import p6 from  'images/G6';  
import p7 from  'images/G7';
import p8 from  'images/G8';
import p9 from  'images/G9';
import p10 from  'images/G10';
import p11 from  'images/G11';
import p12 from  'images/G12';
import p13  from 'images/G13';
import p14 from 'images/G14';
import p15 from 'images/G15';
import p16 from 'images/G16';
import p17 from 'images/G17';
import p18 from 'images/G18';
import p19 from 'images/G19';
import p20 from 'images/G20';
import p21 from 'images/G21';
import p22 from 'images/G22';
import p23 from 'images/G23';
import p24 from 'images/G24';
import p25 from 'images/G25';
import p26 from 'images/G26';
import p27 from 'images/G27';
import p28 from 'images/G28';
import p29 from 'images/G29';
import p30 from 'images/G30';
import p31 from 'images/G31';
import p32 from 'images/G32';
import p33 from 'images/G33';
import p34 from 'images/G34';
import p35 from 'images/G35';
import p36 from 'images/G36';
import p37 from 'images/G37';
import p38 from 'images/G38';
import p39 from 'images/G39';
import p40 from 'images/G40';
import p41 from 'images/G41';
import p42 from 'images/G42';
import p43 from 'images/G43';
import p44 from 'images/G44';
import p45 from 'images/G45';





export default function createPuzzlePieces() {
var pieces = [],
    ids = [41,39,37, 35, 33, 31, 29, 27, 25, 24, 2, 1 ,15, 3, 16, 7, 17, 11, 18, 19, 22, 23, 40, 20],
    images = [p5, p6, p7, p8 , p9, p10, p11, p12, p13, p14, p15, p16 , p17, p18, p19, p20, p21, p22, p23, p24, p25, p26, p27,
    p28, p29, p30, p31, p32, p33, p34, p35, p36, p37, p38, p39, p40, p41, p42, p43, p44, p45];  

  for(var i = 1; i <= 41; i++) {
    var piece = document.createElement('img'); 
       piece.id = `${i}`;
       piece.className = 'piece';
       ids.sort(function(a,b){ return a - b}).forEach(function(id){
       			if(id === i) {
       				piece.className += ' edge'; 
       			}
       });
       piece.src = images[i - 1];
       piece.setAttribute('data-num', 'G' + `${4 + i}`) ; 
      pieces.push(piece); 
  }
   
// piece.src = '../images/G' + `${4 + i}` + '.png' ;

  return pieces; 

}; 