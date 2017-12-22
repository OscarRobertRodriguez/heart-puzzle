import sound from 'sounds/setPiece.mp3';

export default function handleDrop(e) {

var windowWidth = window.innerWidth;
var data = e.dataTransfer.getData('text');


 console.log( 'this is the data ' + data);
    e.preventDefault();
    e.stopPropagation();

    var dropzones = document.querySelectorAll('.hexagon');
    

    console.log(e.target + ' this is target for drop');

    [].forEach.call(dropzones, dropzone => {
      if (e.target.id === dropzone.id) {

             var svg = e.target,
                svgPath = svg.children[1], 
                dragImgData = document.getElementById(data).dataset.num,
                svgImg = e.target.children[0].children[2],
                svgImgId = svgImg.id,
     
                bleep = new Audio();
           
             

            bleep.src = sound;



            if (dragImgData === svgImgId && windowWidth < 2190) {
                svgPath.style.fill = 'none';
                svgPath.style.stroke = 'none';
                svgPath.style.strokeWidth = '';
                svg.classList.add('animated', 'pulse');
                setInterval( () => svg.classList.remove('animated', 'pulse'), 1000);
                svg.style.width = '127px';
                svg.style.height = '104px';
                svg.dataset.resize = 'true'; 
                bleep.play();
                document.getElementById(data).outerHTML = '';
            }

            if (dragImgData === svgImgId && windowWidth >= 2190) {
                svgPath.style.fill = 'none';
                svgPath.style.stroke = 'none';
                svgPath.style.strokeWidth = '';
                svg.style.width = '183px';
                svg.style.height = '144px';
                svg.dataset.resize = 'true'; 
                bleep.play();
                document.getElementById(data).outerHTML = '';
            }
          }

    })








    return false;
};