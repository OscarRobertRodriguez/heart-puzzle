
import startTimer from './startTimer'; 
import hideModal from './hideModal'; 
import initAudio from './initAudio';
import sound from 'sounds/Ether.mp3';

export default function startMode(e) {
    var text = e.target.textContent; 
    hideModal();
    initAudio(text); 
    // startTimer(330);  
}; 