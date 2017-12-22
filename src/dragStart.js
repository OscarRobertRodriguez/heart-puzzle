



export default function handleDragStart (e) {
	e.stopPropagation();
  var dragItem = e.target; 
  var dt = e.dataTransfer; 
  var imageurl = e.target.src; 
  e.effectAllowed = 'move'; 
  

dt.setData("text/plain", dragItem.id);

  

 
 return true; 
}