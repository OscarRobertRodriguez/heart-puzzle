export default function placePieces(array) {
    var newArray = array.slice(),
        holder = [],
        leftSide = document.querySelector('.left-drop__zone-pieces'),
        last = newArray.splice(20), 
        rightSide = document.querySelector('.right-drop__zone-pieces');



    

for (var i = 0; i <= newArray.length - 1; i++) {
            holder.push(newArray[i]);
        }; 
        
        holder.forEach(function(piece) {
            leftSide.appendChild(piece);
        });

        last.forEach(function(piece) {
            rightSide.appendChild(piece);
        });
   




};