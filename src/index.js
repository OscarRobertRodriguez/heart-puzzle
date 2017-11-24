
require('stylesheets/appStyles.scss'); 


//assets
import blankCanvas from 'images/unsolved.png'; 
import solvedCanvas from 'images/solved.png';
import wood from 'images/woodTexture.jpg';
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




// init images to page
//blank puzzle canvas
document.body.style.backgroundImage = wood;

document.querySelector('.puzzle-blank').src = blankCanvas;

// disable puzzle canvas drag
document.getElementById('puzzle-unsolved').ondragstart = function() { return false; };


