


export default function preview(e) {
	e.preventDefault();
	e.stopPropagation();
	var hexagons = document.querySelectorAll('.hexagon'); 

	[].forEach.call(hexagons, function(hexagon) {
		hexagon.classList.toggle('showSolved');
	});
     
}