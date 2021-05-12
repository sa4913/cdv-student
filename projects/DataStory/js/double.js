let w = 1280;
let h = 720;
let jblue = "#060CE9";

let sheet = "DoubleData/Season1.csv";

// set the dimensions and margins of the graph
var margin = {top: 30, right: 30, bottom: 30, left: 30},
  width = 450 - margin.left - margin.right,
  height = 450 - margin.top - margin.bottom;

// append the svg object to the body of the page
var svg = d3.select("#container")
.append("svg")
  .attr("width", width + margin.left + margin.right)
  .attr("height", height + margin.top + margin.bottom)
.append("g")
  .attr("transform",
        "translate(" + margin.left + "," + margin.top + ")");

// Labels of row and columns
var myGroups = [1, 2, 3, 4, 5, 6]
var myVars = [1, 2, 3, 4, 5]

// Build X scales and axis:
var x = d3.scaleBand()
  .range([ 0, width ])
  .domain(myGroups)
  .padding(0.01);
svg.append("g")
  .attr("transform", "translate(0," + height + ")")
  .call(d3.axisBottom(x))
	.attr("fill", "white")

// Build Y scales and axis:
var y = d3.scaleBand()
  .range([ 0, height ])
  .domain(myVars)
  .padding(0.01);
svg.append("g")
  .call(d3.axisLeft(y))
	.attr("fill", "white");

// Build color scale
var myColor = d3.scaleLinear()
  .range(["white", jblue])
  .domain([1,10])

var changeSheet = function(newOne){
  sheet = newOne;
}

//Read the data
d3.csv(sheet, function(data) {


  // create a tooltip
  var tooltip = d3.select("#container")
    .append("div")
    .style("opacity", 0)
    .attr("class", "tooltip")
    .style("background-color", "white")
    .style("border", "solid")
    .style("border-width", "2px")
    .style("border-radius", "5px")
    .style("padding", "5px")

  // Three function that change the tooltip when user hover / move / leave a cell
  var mouseover = function(d) {
    tooltip.style("opacity", 1)
  }
  var mousemove = function(d) {

    tooltip
      .html("The exact number of times this cell was chosen for a Daily Double is: " + d.NumberOfTimes +
			"<br>The percentage of finding a Daily Double here is: " + (d.NumberOfTimes/30)*100 + "%")

      .style("left", (d3.mouse(this)[0]+70) + "px")
      .style("top", (d3.mouse(this)[1]) + "px")
  }
  var mouseleave = function(d) {
    tooltip.style("opacity", 0)
  }

  // add the squares
  svg.selectAll()
    .data(data, function(d) {return d.Row+':'+d.Column;})
    .enter()
    .append("rect")
      .attr("x", function(d) { return x(d.Column) })
      .attr("y", function(d) { return y(d.Row) })
      .attr("width", 75)
      .attr("height", 50)
      .style("fill", function(d) { return myColor(d.NumberOfTimes)} )
			.style("stroke", "gray")

    .on("mouseover", mouseover)
    .on("mousemove", mousemove)
    .on("mouseleave", mouseleave)
})

var dataSlider = [];

for (var i =1; i<35; i++){
	dataSlider[i] = i;
}

// Step Slider
  var sliderStep = d3
    .sliderBottom()
    .min(d3.min(dataSlider))
    .max(d3.max(dataSlider))
    .width(800)
    .ticks(34)
    .step(1)
    .default(0.015)
    .on('onchange', val => {
      d3.select('p#value-step').text((val));
    });

  var gStep = d3
    .select('div#slider-step')
    .append('svg')
    .attr('width', 1000)
    .attr('height', 100)
    .append('g')
    .attr('transform', 'translate(30,30)');

  gStep.call(sliderStep);

  d3.select('p#value-step').text("Season "+(sliderStep.value()));
