export default function handleDragEnd(e) {
  console.log(e.target + 'drag end end');
  var dropzones = document.getElementsByClassName('hex-fill'); 
  var data = e.dataTransfer.getData('text'); 
  console.log('drag end' + dropzones);
   e.preventDefault();
   e.stopPropagation();

   
    console.log(data + ' this is new data');
    var image = document.getElementById(data);
    // console.log(image + 'dataset');
   // e.target.parentNode.appendChild(document.getElementById(data)); 

// if (image === undefined) {
// 	return false;
// } else {

//      [].forEach.call(dropzones, function (dropzone) {
//      	if (dropzone.style.fill === 'none') {
//      		return false; 
//      	}
//      	else {
//      	dropzone.style.fill = ''; 
//      	dropzone.style.stroke = '';
//      	dropzone.style.strokeWidth = '';
//      }
//      });

// }
  return false; 
}