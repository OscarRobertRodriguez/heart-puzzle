import sound from 'sounds/setPiece.mp3';

export default function handleDrop(e) {

var windowWidth = window.innerWidth;

    e.preventDefault();
    e.stopPropagation();

    var paths = document.querySelectorAll('path');

    console.log(paths);

    paths.forEach(function(path) {
        if (e.target === path) {
            var data = e.dataTransfer.getData('text'),
                svg = e.target.parentNode.parentNode.parentNode,
                hex = e.target.parentNode.parentNode,
                dragImgData = document.getElementById(data).dataset.num,
                svgImg = hex.previousSibling.previousSibling.childNodes[5],
                svgImgId = svgImg.id,
                bleep = new Audio();
            console.log(svgImg),
                console.log(svgImgId);
            console.log(data + ' this is data');

            console.log("This si hex" + hex.className);

            bleep.src = sound;



            if (dragImgData === svgImgId && windowWidth < 2190) {
                hex.style.fill = 'none';
                hex.style.stroke = 'none';
                hex.style.strokeWidth = '';
                svg.style.width = '127px';
                svg.style.height = '104px';
                svg.dataset.resize = 'true'; 
                bleep.play();
                document.getElementById(data).outerHTML = '';
            }

            if (dragImgData === svgImgId && windowWidth >= 2190) {
                hex.style.fill = 'none';
                hex.style.stroke = 'none';
                hex.style.strokeWidth = '';
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