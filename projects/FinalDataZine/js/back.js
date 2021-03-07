let w = 1200;
let h = 800;
let distance = 200;
let starRed = "#FE0000";
let starOrange = "#FE9900";
let starYellow = "#FFFF01";
let starTan = "#FFE59A";
let starPale = "#6FA8DD";
let starNavy = "#0D5295";
let starBlue = "#0000FE";

let viz = d3.select("#container")
  .append("svg")
    .attr("width", w)
    .attr("height", h)
    .style("background-color", "black")
;

let spiral = viz.append("g").attr("class", "spiral");
spiral.attr("transform","translate("+(w-1000)+","+((h/2)+300)+")")

function starPlacement(){
  return "translate("+750+","+150+")"
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
      .style("fill", "white")
  ;

  datagroups.attr("transform", spiralPosition)


}

viz.append("line") // y axis line
  .attr("class", "star")
  .attr("x1",0)
  .attr("y1",175)
  .attr("x2",300)
  .attr("y2",300)
  .style("stroke", "white")
  .style("stroke-width", 1)
;
viz.append("text") //y axis label
  .attr("class", "star")
  .text("Unique Outcomes")
  .attr("font-size", 25)
  .attr("fill", "white")
  .attr("x", 250)
  .attr("y", 325)
;
viz.append("line") // x axis line
  .attr("class", "star")
  .attr("x1",-200)
  .attr("y1",200)
  .attr("x2",-50)
  .attr("y2",100)
  .style("stroke", "white")
  .style("stroke-width", 1)
;
viz.append("text") //x axis label
  .attr("class", "star")
  .text("Unique Responses")
  .attr("font-size", 25)
  .attr("fill", "white")
  .attr("x", -300)
  .attr("y", 225)
;
viz.append("line") // y = x line
  .attr("class", "star")
  .attr("x1",distance/2-10)
  .attr("y1",10)
  .attr("x2",200)
  .attr("y2",50)
  .style("stroke", "white")
  .style("stroke-width", 1)
;
viz.append("text") //y=x label
  .attr("class", "star")
  .text("Unique Verbal From Me")
  .attr("font-size", 25)
  .attr("fill", "white")
  .attr("x", 100)
  .attr("y", 75)
;
viz.append("line") // y = -x line
  .attr("class", "star")
  .attr("x1",-distance/2+20)
  .attr("y1",20)
  .attr("x2",100)
  .attr("y2",-100)
  .style("stroke", "white")
  .style("stroke-width", 1)
;
viz.append("text") //y=-x label
  .attr("class", "star")
  .text("Unique Gestures From Me")
  .attr("font-size", 25)
  .attr("fill", "white")
  .attr("x", 0)
  .attr("y", -110)
;
viz.append("line") // y axis
  .attr("class", "star")
  .attr("x1", 0)
  .attr("y1", 0)
  .attr("x2", 0)
  .attr("y2", distance)
  .style("stroke", starRed)
  .style("stroke-width", 2)
;

viz.append("line") // x axis
  .attr("class", "star")
  .attr("x1", -distance/2)
  .attr("y1", distance/2)
  .attr("x2", distance/2)
  .attr("y2", distance/2)
  .style("stroke", starYellow)
  .style("stroke-width", 2)
;
viz.append("line") // y = x
  .attr("class", "star")
  .attr("x1", -distance/2)
  .attr("y1", distance)
  .attr("x2", distance/2)
  .attr("y2", 0)
  .style("stroke", starTan)
  .style("stroke-width", 2)
;
viz.append("line") // y = - x
  .attr("class", "star")
  .attr("x1", -distance/2)
  .attr("y1", 0)
  .attr("x2", distance/2)
  .attr("y2", distance)
  .style("stroke", starBlue)
  .style("stroke-width", 2)
;
viz.append("circle")
  .attr("class", "star")
  .attr("cx", -130)
  .attr("cy", 2*distance+20)
  .attr("r", 20)
  .attr("fill", starRed)
;
viz.append("text") //circle label
  .attr("class", "star")
  .text("1 time")
  .attr("font-size", 30)
  .attr("fill", starRed)
  .attr("x", -95)
  .attr("y", 2*distance+30)
;
viz.append("circle")
  .attr("class", "star")
  .attr("cx", -130)
  .attr("cy", 2*distance+100)
  .attr("r", 20)
  .attr("fill", starOrange)
;
viz.append("text") //circle label
  .attr("class", "star")
  .text("2 times")
  .attr("font-size", 30)
  .attr("fill", starOrange)
  .attr("x", -100)
  .attr("y", 2*distance+110)
;
viz.append("circle")
  .attr("class", "star")
  .attr("cx", 20)
  .attr("cy", 2*distance+20)
  .attr("r", 20)
  .attr("fill", starYellow)
;
viz.append("text") //circle label
  .attr("class", "star")
  .text("3 times")
  .attr("font-size", 30)
  .attr("fill", starYellow)
  .attr("x", 50)
  .attr("y", 2*distance+30)
;
viz.append("circle")
  .attr("class", "star")
  .attr("cx", 20)
  .attr("cy", 2*distance+100)
  .attr("r", 20)
  .attr("fill", starTan)
;
viz.append("text") //circle label
  .attr("class", "star")
  .text("4 times")
  .attr("font-size", 30)
  .attr("fill", starTan)
  .attr("x", 50)
  .attr("y", 2*distance+110)
;
viz.append("circle")
  .attr("class", "star")
  .attr("cx", 170)
  .attr("cy", 2*distance+20)
  .attr("r", 20)
  .attr("fill", starPale)
;
viz.append("text") //circle label
  .attr("class", "star")
  .text("5 times")
  .attr("font-size", 30)
  .attr("fill", starPale)
  .attr("x", 200)
  .attr("y", 2*distance+30)
;
viz.append("circle")
  .attr("class", "star")
  .attr("cx", 170)
  .attr("cy", 2*distance+100)
  .attr("r", 20)
  .attr("fill", starNavy)
;
viz.append("text") //circle label
  .attr("class", "star")
  .text("6 times")
  .attr("font-size", 30)
  .attr("fill", starNavy)
  .attr("x", 200)
  .attr("y", 2*distance+110)
;
viz.append("circle")
  .attr("class", "star")
  .attr("cx", 320)
  .attr("cy", 2*distance+60)
  .attr("r", 20)
  .attr("fill", starBlue)
;
viz.append("text") //circle label
  .attr("class", "star")
  .text("> 6")
  .attr("font-size", 30)
  .attr("fill", starBlue)
  .attr("x", 360)
  .attr("y", 2*distance+50)
;
viz.append("text") //circle label
  .attr("class", "star")
  .text("times")
  .attr("font-size", 30)
  .attr("fill", starBlue)
  .attr("x", 350)
  .attr("y", 2*distance+90)
;
viz.append("text")
  .attr("class", "star")
  .text("Sarah")
  .attr("font-size", 75)
  .attr("fill", "white")
  .attr("x", -75)
  .attr("y", distance+75)
;
viz.append("text")
  .attr("class", "star")
  .text("Name of person greeted")
  .attr("font-size", 25)
  .attr("fill", "white")
  .attr("x", -200)
  .attr("y", distance+150)
;

viz.append("line") // name label
  .attr("class", "star")
  .attr("x1",-60)
  .attr("y1", distance+90)
  .attr("x2",-100)
  .attr("y2",distance+120)
  .style("stroke", "white")
  .style("stroke-width", 1)
;

let stars = viz.selectAll(".star");
stars.attr("transform", starPlacement)

viz.append("line") //spiral line
  .attr("x1",w-1000)
  .attr("y1",((h/2)+300))
  .attr("x2",600)
  .attr("y2",740)
  .style("stroke", "white")
  .style("stroke-width", 1)
;
viz.append("text")
  .text("Closer to the center = lower frequency of greeting")
  .attr("font-size", 25)
  .attr("fill", "white")
  .attr("x", 602)
  .attr("y", 750)
;


viz.append("path") //attempt an arc for Hello
//M 0,300 A 200,200 0 0,1 400,300
  .attr("id", "readingPath")
  .attr("d", "M -220 350 L 900 50")
  .style("fill", "none")
  .style("stroke", "none")
;
// d="M 10 10 H 90 V 90 H 10 L 10 10"

// viz.append("text") //World
//   .append("textPath")
//     .attr("xlink:href", "#worldPath")
//     .style("text-anchor", "beginning")
//     .attr("startOffset", "25%")
//     .text("World")
//     .attr("font-size", 100)
//     .attr("fill", "blue")
//
// ;

viz.append("text")
  .append("textPath")
    .attr("xlink:href", "#readingPath")
    .style("text-anchor", "beginning")
    .attr("startOffset", "25%")
    .text("Reading Guide")
    .attr("font-size", 100)
    .attr("fill", "white")

;



d3.json("data.json").then(gotData);
