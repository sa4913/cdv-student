let viz = d3.select("#container")
  .append("svg")
    .attr("width", 1200)
    .attr("height", 800)
;
viz.append("circle") //Earth base
  .attr("cx", 500)
  .attr("cy", 400)
  .attr("r", 400)
  .attr("fill", "lightblue")
;
viz.append("text") //Hello
  .text("Hello")
  .attr("font-size", 150)
  .attr("fill", "blue")
  .attr("x", 500)
  .attr("y", 200)
;
viz.append("text") // World
  .text("World")
  .attr("font-size", 150)
  .attr("fill", "blue")
  .attr("x", 500)
  .attr("y", 700)
;
viz.append("text") //Greetings
  .text("3 Weeks of Greetings")
  .attr("font-size", 150)
  .attr("fill", "blue")
  .attr("x", 500)
  .attr("y", 700)
;
viz.append("text") //Name
  .text("By Sarah Armstrong")
  .attr("font-size", 150)
  .attr("fill", "blue")
  .attr("x", 500)
  .attr("y", 700)
;
