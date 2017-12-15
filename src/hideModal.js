
export default function hideModal () {
  var modal = document.getElementById('mpopupBox'); 
  modal.style.opacity = 0;

  setInterval(function () { modal.style.display = 'none'}, 1000);
}; 