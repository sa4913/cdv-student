let viz = d3.select("#container")
  .append("svg")
    .attr("width", 1200)
    .attr("height", 800)
    .style("background-color", "lavender")
;
viz.append("circle") //Earth base
  .attr("cx", 600)
  .attr("cy", 400)
  .attr("r", 400)
  .attr("fill", "lightblue")
;
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
viz.append("text") //Hello
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
viz.append("text") //Greetings
  .text("3 Weeks of Greetings")
  .attr("font-size", 50)
  .attr("fill", "blue")
  .attr("x", 10)
  .attr("y", 50)
;
viz.append("text") //Name
  .text("By Sarah Armstrong")
  .attr("font-size", 50)
  .attr("fill", "blue")
  .attr("x", 775)
  .attr("y", 775)
;
