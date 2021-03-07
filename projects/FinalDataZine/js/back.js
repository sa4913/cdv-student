let w = 1200;
let h = 800;
let distance = 200;

let viz = d3.select("#container")
  .append("svg")
    .attr("width", w)
    .attr("height", h)
    .style("background-color", "lavender")
;

let spiral = viz.append("g").attr("class", "spiral");
spiral.attr("transform","translate("+(w-1000)+","+((h/2)+300)+")")

function starPlacement(){
  return "translate("+(2*w)/3+","+200+")"
}

function spiralPosition(d, i, secretThirdParameter){

  // let numTotalDatapoints = secretThirdParameter.length;
  //
  //
  // let numRotation = 4.2;
  // let totalDegreeSpace = numRotation * (Math.PI*2);
  // let snapOffPercetage = 0.6;
  // let snappedSpace = snapOffPercetage*totalDegreeSpace
  // let baseDegreeSpace = totalDegreeSpace-snappedSpace;
  // let baseCircleFraction = baseDegreeSpace/numTotalDatapoints;
  // let numChunksToAllocate = ((numTotalDatapoints/2)*(numTotalDatapoints+1)) -1;
  // let chunkLength = snappedSpace/numChunksToAllocate;
  //
  // let numOfChunksForThisIteration = (numTotalDatapoints-i)
  //
  // let baseLengthForThisIteration = baseCircleFraction * i;
  // let additionLength = numOfChunksForThisIteration * chunkLength;
  //
  // let radius = (h/2/numTotalDatapoints) * i;
  // let pointAngleInRadians = baseLengthForThisIteration + additionLength;
  // let x = Math.cos(pointAngleInRadians) * radius;
  // let y = Math.sin(pointAngleInRadians) * radius;

  // let x = 0;
  // let y = 0;

  console.log(secretThirdParameter)
  let numTotalDatapoints = secretThirdParameter.length;
  let numRotation = 3.7;
  let circleFraction = (numRotation * (Math.PI*2)) / (numTotalDatapoints);
  let radius = (h/2/numTotalDatapoints) * i;
  let pointAngleInRadians = circleFraction*i;
  let stretchFactor = 1;
  let x = Math.cos(pointAngleInRadians) * radius * stretchFactor;
  let y = Math.sin(pointAngleInRadians) * radius;
  console.log(x, y);

  // let x = 0;
  // let y = 0;


  return "translate("+x+","+y+")"
}

function gotData(incomingData){
  console.log(incomingData)

  let datagroups = spiral.selectAll(".datagroup").data(incomingData).enter()
    .append("g")
      .attr("class", "datagroup")
  ;

  datagroups.append("circle")
      .attr("cx", 0)
      .attr("cy", 0)
      .attr("r", 5)
  ;


  datagroups.attr("transform", spiralPosition)


}
viz.append("line") //sprial line
  .attr("x1",w-1000)
  .attr("y1",((h/2)+300))
  .attr("x2",600)
  .attr("y2",590)
  .style("stroke", "black")
  .style("stroke-width", 1)
;
viz.append("line") // y axis
  .attr("class", "star")
  .attr("x1", 0)
  .attr("y1", 0)
  .attr("x2", 0)
  .attr("y2", distance)
  .style("stroke", "black")
  .style("stroke-width", 2)
;
viz.append("line") // x axis
  .attr("class", "star")
  .attr("x1", -distance/2)
  .attr("y1", distance/2)
  .attr("x2", distance/2)
  .attr("y2", distance/2)
  .style("stroke", "black")
  .style("stroke-width", 2)
;
viz.append("line") // y = x
  .attr("class", "star")
  .attr("x1", -distance/2)
  .attr("y1", distance)
  .attr("x2", distance/2)
  .attr("y2", 0)
  .style("stroke", "black")
  .style("stroke-width", 2)
;
viz.append("line") // y = - x
  .attr("class", "star")
  .attr("x1", -distance/2)
  .attr("y1", 0)
  .attr("x2", distance/2)
  .attr("y2", distance)
  .style("stroke", "black")
  .style("stroke-width", 2)
;
let stars = viz.selectAll(".star");
stars.attr("transform", starPlacement)

viz.append("text")
  .text("Closer to the center = lower frequency of greeting")
  .attr("font-size", 25)
  .attr("fill", "black")
  .attr("x", 602)
  .attr("y", 600)
;




d3.json("data.json").then(gotData);
