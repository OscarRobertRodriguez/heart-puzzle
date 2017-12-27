

export default function handleDragEnter(e) {
	var dropzone = e.target;
    e.stopPropagation();
	e.preventDefault(); 
	
	var path = dropzone.childNodes[3];


   if (path.style.fill !== 'none' && path.classList.contains('svg-highlight') === false) {
   path.style.stroke = 'hotpink';
   path.style.fill = '#5F5E5F';
   path.style.strokeWidth = '4';
   }      
 
    if (path.style.fill !== 'none' && path.classList.contains('svg-highlight') === true) {
      path.style.fill = '#5F5E5F';
    }
   
	return false; 
}