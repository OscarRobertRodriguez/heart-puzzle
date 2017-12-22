
require('stylesheets/main.scss'); 


//assets

import solvedCanvas from 'images/solved.jpg';





//Add image to canvas
document.querySelector('.puzzle-blank').src = solvedCanvas;

// disable puzzle canvas drag
document.getElementById('puzzle-unsolved').ondragstart = function() { return false; };


// import javascript modules 


import './open.js';
import './close.js';
import handleDragStart from './dragStart';
import handleDragEnter from './dragEnter';
import handleDragOver from './dragOver';
import handleDragLeave from './dragLeave';
import handleDragEnd from './dragEnd';
import handleDrop from './drop';  
import createPuzzlePieces from './createPuzzlePieces'; 
import shuffle from './shuffle'; 
import placePieces from './placePieces'; 
import highlightEdges from './edges';
import preview from './preview'; 
import scramble from './scramble';
import startMode from './startMode'; 
import sound from 'sounds/Ether.mp3';
import resizePlacePieces from './resizePlacePieces';


var edgeBtn = document.getElementById('edge-btn'),
    pieces = document.getElementsByClassName('piece'), 
    dropzones = document.getElementsByClassName('dropzone'),
    previewBtn = document.getElementById('preview'),
    scrambleBtn = document.getElementById('scramble'),
    easyBtn = document.getElementById('easyBtn'),
    restartBtns = document.querySelectorAll('.restart'),
    muteBtn = document.getElementById('muteBtn'), 
    hardBtn = document.getElementById('hardBtn'); 




window.addEventListener('DOMContentLoaded', placePieces(shuffle(createPuzzlePieces())));
window.addEventListener('resize', resizePlacePieces); 


// easyBtn to start puzzle with easy difficulty
easyBtn.addEventListener('click', startMode); 

hardBtn.addEventListener('click', startMode); 

[].forEach.call(restartBtns, (restartBtn) => {restartBtn.addEventListener('click', () => location.reload());} );



// edge button to enable edges highlight
edgeBtn.addEventListener('click', highlightEdges);
// preview button to enable preview
previewBtn.addEventListener('click', preview, false);
// scramble to enable scrable of puzzle pieces
scrambleBtn.addEventListener('click', scramble); 


[].forEach.call(dropzones, function(dropzone) {
	dropzone.addEventListener('dragenter', handleDragEnter);
});


//
[].forEach.call(dropzones,function (dropzone) {
	dropzone.addEventListener('dragleave', handleDragLeave);
});

[].forEach.call(dropzones,function(dropzone) {
	dropzone.addEventListener('dragover', handleDragOver);
});


[].forEach.call(dropzones,function (dropzone) {
     dropzone.addEventListener('drop', handleDrop); 
});




// setup dragstart functionality 
[].forEach.call(pieces , function (piece) {
	piece.addEventListener('dragstart', handleDragStart)});


 window.addEventListener('dragend', handleDragEnd);













