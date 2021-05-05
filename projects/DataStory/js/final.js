let w = 1280;
let h = 720;
let jblue = "#060CE9";
let demoSelection = 5;


// let buttonL = ;
// let buttonR = ;
// let buttonUp = ;
// let buttonDown = ;

let viz = d3.select("#container").append("svg")
	.attr("width", 2*w)
	.attr("height", h)
	//.attr("class", "viz")
	.attr("background-color", jblue)
;

viz.append("text")
	.text("How likely are you to be on Jeopardy?")
	.attr("x", 100)
	.attr("y", 200)
	.attr("font-size", 150)
	.attr("fill", "white")
	;

  // viz.append("image")
  //   .attr("href", "images/final.png")
  //   .attr("x", w/2)
  //   .attr("y", h/2)
  //   .attr("width", 600)
  //   .attr("height", 400)
  // ;
function demographicFunction() {
  var demoSelection = document.getElementById("demographic").selectedIndex;

	// return demoSelection;
	console.log(demoSelection);
	if (demoSelection == 1){
		// document.getElementById("selection").innerHTML = "<label for="demographic">Choose your age range:</label>
  	//   <select name="demographic" id="demographic">
  	//     <option value="child">Under 13</option>
  	//     <option value="teen">13-17</option>
  	//     <option value="college">18-22</option>
		// 		<option value="adult"> Over 22</option>
		//
  	//   </select>";
	}
}
