
export default function handleDrop(e) {
	  var data = e.dataTransfer.getData('text'); 
	  console.log(data + ' this is data');
	  var hex = e.target.parentNode.parentNode;
	  var dragImgData = document.getElementById(data).dataset.num; 
      var svgImgId = hex.previousSibling.previousSibling.childNodes[5].id; 
	  e.preventDefault();

     console.log(hex.previousSibling.previousSibling.childNodes[5].id + ' this is the hex');
  
  if (dragImgData === svgImgId) {
     	hex.style.fill = 'none';
     	hex.style.stroke = 'none'; 
     	hex.style.strokeWidth = '';
     
      document.getElementById(data).outerHTML = '';
    }else {
    	return false;
    }
  

};