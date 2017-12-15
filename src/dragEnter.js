

export default function handleDragEnter(e) {
    e.stopPropagation();
	e.preventDefault(); 
	var dropzone = e.target;
	var hexbackground = e.target.childNodes[3];

    console.log('drag Enter' + e);
// if (hexbackground !== undefined && hexbackground.style.fill !== 'none') {
//    hexbackground.style.stroke = 'hotpink';
//    hexbackground.style.strokeWidth = '2';      
//     }
 
	return false; 
}