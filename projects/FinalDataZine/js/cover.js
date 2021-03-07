let worldSVG = '<circle cx="257" cy="257" r="256.5" style="fill: #27aae1;stroke: #27aae1;stroke-miterlimit: 10"/> <path d="M109.78,299.42c47.47-41.8,132.28-34.18,152,0,13.94,24.17-10.19,52,4,66,22.39,22.08,93.4-36.58,116-16,16.26,14.81.83,64.66-26,96-37.34,43.61-107.52,64-142,39-24.9-18-11.11-45.15-39-69-35.71-30.54-81.22-5.68-97-30C64,364.13,84,322.16,109.78,299.42Z" transform="translate(-7 -8)" style="fill: #39b54a;stroke: #39b54a;stroke-miterlimit: 10"/> <path d="M123.74,65.32c42.84-22.88,110,37.36,126,19,9.81-11.29-14.18-35.72-4-51,14.94-22.45,99.75-19.48,120,30,11,27,1.84,65.39-22,80-40.5,24.8-107.64-28.5-120-12-9.63,12.84,32.2,43.58,23,73-9.65,30.83-73.34,53.79-115,29-31.53-18.76-37.1-56.93-39-70C88.24,132.54,93.37,81.53,123.74,65.32Z" transform="translate(-7 -8)" style="fill: #39b54a;stroke: #39b54a;stroke-miterlimit: 10"/> <path d="M322.24,246.08c.13-25.85,17-54.53,34-55,16.24-.44,17.55,25.24,47,40,26.36,13.21,47.71,3.86,51,13,3.79,10.53-21.67,30.86-45,41-14.18,6.17-47.58,20.69-70,3C322.1,274.55,322.22,250.75,322.24,246.08Z" transform="translate(-7 -8)" style="fill: #39b54a;stroke: #39b54a;stroke-miterlimit: 10"/>';
let bySarahSVG = '<text transform="translate(144.12)" style="writing-mode: tb;text-orientation: upright;glyph-orientation-vertical: 0deg;font-size: 24px;fill: #00aeef;font-family: Chewy-Regular, Chewy">By<tspan x="0" y="48" xml:space="preserve">    </tspan><tspan x="0" y="70.59">Sarah</tspan><tspan x="0" y="190.59" xml:space="preserve">  </tspan><tspan x="0" y="201.89">Armstrong</tspan></text>';
let final3SVG = '<text transform="translate(144.12)" style="writing-mode: tb;text-orientation: upright;glyph-orientation-vertical: 0deg;font-size: 24px;fill: #00aeef;font-family: Chewy-Regular, Chewy">3<tspan x="0" y="24" xml:space="preserve">  </tspan><tspan x="0" y="35.3">Weeks</tspan><tspan x="0" y="155.3" xml:space="preserve">  </tspan><tspan x="0" y="166.59">of</tspan><tspan x="0" y="214.59" xml:space="preserve">   </tspan><tspan x="0" y="231.54">Greetings</tspan></text>';
let viz = d3.select("#container")
  .append("svg")
    .attr("width", 1200)
    .attr("height", 800)
    .style("background-color", "black")

;

let worldImage = viz.append("g").attr("class", "worldShape").html(worldSVG);
worldImage.attr("transform", "scale(1.5) translate(130, 12)");
let bySarah = viz.append("g").attr("class", "byMe").html(bySarahSVG);
bySarah.attr("transform", "scale(1.5) translate(600,50)");
let weeks3 = viz.append("g").attr("class", "dailyWeek").html(final3SVG);
weeks3.attr("transform", "scale(1.5) translate(-100,0)");
// worldImage.attr("transform", );

// viz.append("circle") //Earth base
//   .attr("cx", 600)
//   .attr("cy", 400)
//   .attr("r", 400)
//   .attr("fill", "lightblue")
// ;
viz.append("path") //attempt an arc for Hello
//M 0,300 A 200,200 0 0,1 400,300
  .attr("id", "helloPath")
  .attr("d", "M 350,350 A 300,300, 0, 0,1 750,125")
  .style("fill", "none")
  .style("stroke", "none")
;
viz.append("path") //attempt an arc for World
//M 0,300 A 200,200 0 0,1 400,300
  .attr("id", "worldPath")
  .attr("d", "M 500,700 A 300,300, 0, 0,0 900,475")
  .style("fill", "none")
  .style("stroke", "none")
;
viz.append("text") //Hello
  .append("textPath")
    .attr("xlink:href", "#helloPath")
    .style("text-anchor", "beginning")
    .attr("startOffset", "25%")
    .text("Hello")
    .attr("font-size", 100)
    .attr("fill", "blue")
;
viz.append("text") //World
  .append("textPath")
    .attr("xlink:href", "#worldPath")
    .style("text-anchor", "beginning")
    .attr("startOffset", "25%")
    .text("World")
    .attr("font-size", 100)
    .attr("fill", "blue")

;
// viz.append("text") //Hello
//   .text("Hello")
//   .attr("font-size", 150)
//   .attr("fill", "blue")
//   .attr("x", 300)
//   .attr("y", 300)
// ;
// viz.append("text") // World
//   .text("World")
//   .attr("font-size", 150)
//   .attr("fill", "blue")
//   .attr("x", 500)
//   .attr("y", 600)
// ;
// viz.append("text") //Greetings
//   .text("3 Weeks of Greetings")
//   .attr("font-size", 50)
//   .attr("fill", "blue")
//   .attr("x", 10)
//   .attr("y", 50)
// ;
// viz.append("text") //Name
//   .text("By Sarah Armstrong")
//   .attr("font-size", 50)
//   .attr("fill", "blue")
//   .attr("x", 775)
//   .attr("y", 775)
// ;
