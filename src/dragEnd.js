export default function handleDragEnd(e) {

   e.preventDefault();
   e.stopPropagation();
   
  console.log(e.target + 'drag end end');
  var dropzones = document.getElementsByClassName('hex-fill'); 
  var data = e.dataTransfer.getData('text'); 
  console.log('drag end' + dropzones);
  

   
    console.log(data + ' this is new data');
    var image = document.getElementById(data);
    // console.log(image + 'dataset');
   // e.target.parentNode.appendChild(document.getElementById(data)); 


     [].forEach.call(dropzones, dropzone => {
     	if (dropzone.style.fill === 'none') {
     		return false; 
     	}
     	else {
     	dropzone.style.fill = ''; 
     	dropzone.style.stroke = '';
     	dropzone.style.strokeWidth = '';
     }
     });


  return false; 
}