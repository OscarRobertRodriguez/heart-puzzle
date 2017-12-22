



export default function handleDragStart (e) {
	e.stopPropagation();
  var dragItem = e.target; 
  var dt = e.dataTransfer; 
  var imageurl = e.target.src; 
 console.log(imageurl);
  e.effectAllowed = 'move'; 
  

dt.setData("text/plain", dragItem.id);

  

 
  console.log('starting drag event');
 return true; 
}