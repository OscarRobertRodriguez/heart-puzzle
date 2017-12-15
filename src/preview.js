


export default function preview() {
	var hexagons = document.querySelectorAll('.hexagon'); 

	[].forEach.call(hexagons, function(hexagon) {
		hexagon.classList.toggle('showSolved');
	});
     
}