


export default function highlightEdges() {
   var edges = document.querySelectorAll('.edge');
   var puzzleSvgs = document.querySelectorAll('.edge-svg'); 

    
    [].forEach.call(puzzleSvgs, function(svg) { 
		svg.classList.toggle('svg-highlight');
	}); 

	[].forEach.call(edges, function(edge) { 
		edge.classList.toggle('highlight');
	});  
   
}