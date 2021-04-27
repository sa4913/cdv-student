// in the javascript
// the only ingirdient we need
// is a way to determine when exactly
// an element passes a certain point
// e.g. when a scrolling text reaches the middle
// of the page you might want to trigger
// a transition in your vvisualization

// we could code such a mechanism outselves, but
// on https://pudding.cool/process/scrollytelling-sticky/
// i found various light-weight libraries that do just that.
// one I tested is this: https://github.com/russellgoldenberg/enter-view
// you need to include it in the html:
//
//
// and after that you can use it just like this:
let w = 600;
let h = 400;

// let buttonL = ;
// let buttonR = ;
// let buttonUp = ;
// let buttonDown = ;

let viz = d3.select("#vizContainer").append("svg")
	.attr("width", w)
	.attr("height", h)
	.attr("class", "viz")
	.attr("background-color", "black")
	;

let data = [
	[50, 50, 50]
];

let xScale = d3.scaleLinear().domain([0,100]).range([0,w]);
let yScale = d3.scaleLinear().domain([0,100]).range([0,h]);
let rScale = d3.scaleLinear().domain([0,100]).range([10,h/2]);

let graphGroup = viz.append("g").attr("class", "graphGroup");

graphGroup.selectAll(".datapoint").data(myData).enter()
	.append("circle")
	.attr("class", ".datapoint")
	.attr("cx", functin(d,i){
		let x = d[0]
		return xScale(x)
	})
	.attr("cy", functin(d,i){
		let y = d[1]
		return yScale(y)
	})
	.attr("r", functin(d,i){
		let r = d[2]
		return rScale(r)
	})
	.attr("fill", "lightblue")
	;

	function updateGraph(){
		let elements = graphGroup.selectAll(".datapoint")
	}

d3.select("#buttonL").on("click", function(){

});
d3.select("#buttonR").on("click", function(){

});
d3.select("#buttonUp").on("click", function(){

});
d3.select("#buttonDown").on("click", function(){

});
// enterView({
// 	selector: '.special',
// 	enter: function(el) {
// 		console.log('a special element entered');
// 	},
// 	exit: function(el) {
//     console.log('a special element exited');
// 	},
// 	progress: function(el, progress) {
//     console.log("the special element's progress is:", progress);
// 	},
// 	// offset: 0.5, // enter at middle of viewport
// 	// once: true, // trigger just once
// });
