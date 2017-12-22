export default function handleDragEnd(e) {

   e.preventDefault();
   e.stopPropagation();


  var dropzones = document.getElementsByClassName('hex-fill'); 
  var data = e.dataTransfer.getData('text'); 
  

   

    var image = document.getElementById(data);



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