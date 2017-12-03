



export default function handleDragStart (e) {
  var dragItem = e.target; 
  var dt = e.dataTransfer; 
  var imageurl = e.target.src; 

  dragItem.effectAllowed = 'move'; 
  
dt.setData("text/plain", dragItem.id);
  

 
 return true; 
}