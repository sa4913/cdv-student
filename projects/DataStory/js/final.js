let w = 1280;
let h = 720;
let jblue = "#060CE9"

// let buttonL = ;
// let buttonR = ;
// let buttonUp = ;
// let buttonDown = ;

let viz = d3.select("#container").append("svg")
	.attr("width", w)
	.attr("height", h)
	//.attr("class", "viz")
	.attr("background-color", jblue)
;

  viz.append("image")
    .attr("href", "images/final.png")
    .attr("x", w/2)
    .attr("y", h/2)
    .attr("width", 600)
    .attr("height", 400)
  ;
