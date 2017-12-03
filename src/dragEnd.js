export default function handleDragEnd(e) {
  console.log(e.target + 'drag end end');
  var dropzones = document.getElementsByClassName('hex-fill'); 
  console.log('drag end ' + dropzones);
   e.preventDefault();
   e.stopPropagation();

   var data = e.dataTransfer.getData('text'); 
    console.log(data);
    var image = document.getElementById(data).dataset.url; 
    console.log(image + 'dataset');
   // e.target.parentNode.appendChild(document.getElementById(data)); 


     [].forEach.call(dropzones, function (dropzone) {
     	dropzone.style.fill = ''; 
     	dropzone.style.stroke = '';
     	dropzone.style.strokeWidth = '';
     });


  return false; 
}