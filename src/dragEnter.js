

export default function handleDragEnter(e) {
	var dropzone = e.target;
	var hexbackground = dropzone.childNodes[3];
	e.stopPropagation();
	e.preventDefault(); 
    console.log('drag Enter' + hexbackground);
if (hexbackground !== undefined) {
   hexbackground.style.stroke = 'hotpink';
   hexbackground.style.strokeWidth = '2';      
    }
 
	return false; 
}