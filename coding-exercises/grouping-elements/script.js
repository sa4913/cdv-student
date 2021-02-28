// let viz = d3.select("#viz-container")
//   .append("svg")
//     .attr("id", "viz")
//     .attr("width", 600)
//     .attr("height", 400)
//     .style("background-color", "lavender")
// ;
//
// function randomX(){
//   return Math.random() = 600;
// }
//
// function randomY(){
//   return Math.random() = 400;
// }
//
// function randomeGroupPosition(){
//   let x = Math.random() = 240;
//   let y = Math.random() = 200;
//   return "translate(" + x+", "+y+")";
// }
//
// function gotData(incomingData){
//   console.log("Incoming Data is", incomingData);
//   // viz.select(".greg").data(incomingData).enter()
//   //   .append("rect")
//   //     .attr("x", randomX)
//   //     .attr("y", randomY)
//   //     .attr("width", 20)
//   //     .attr("height", 20)
//   //   //.attr("fill", "white")
//   //     .attr("class", "greg")
//   //
//   // ;
//   // viz.selectAll(".gregText").data(incomingData).enter()
//   //   .append("text")
//   //     .attr("x", randomX)
//   //     .attr("y", randomY)
//   //     .text("Greg")
//   //     .attr("fill", "red")
//   //     .attr("class", "gregText")
//   // ;
//   let datagroups = viz.selectAll(".datagroup").data(incomingData).enter()
//     .append("g")
//       .attr("class", "datagroup")
//   ;
//   datagroups.append("circle")
//     .attr("cx", 0)
//     .attr("cy", 0)
//     .attr("r", 25)
//   ;
//   datagroups.append("text")
//     .attr("x", 100)
//     .attr("y", 40)
//     .text("Greg")
//   ;
//
//   datagroups.attr("transform", randomeGroupPosition);
// }
//
//
// d3.json("data.json").then(gotData);

let viz = d3.select("#viz-container")
  .append("svg")
    .attr("id", "viz")
;
viz.append("text")
  .text("People I'm Greeting")
    .attr("x", 500)
    .attr("y", 100)
    .attr("font-size", 50)

d3.json("data.json").then(gotData);



function gotData(incomingData){
    console.log(incomingData);

//start to build groups
let datagroups = viz.selectAll(".datagroup").data(incomingData).enter()
  .append("g")
    .attr("class", "datagroup")
;
datagroups.append("rect")
  .attr("x", 0)
  .attr("y", 0)
  .attr("width", frequency)
  .attr("height", frequency)
  .attr("fill", differentGesture)
  .attr("stroke-width", differentVerbal)
  .attr("stroke", differentResponse)

;
datagroups.append("rect")
  .attr("x", 0)
  .attr("y", 0)
  .attr("width", differentVerbal)
  .attr("height", 20)
  .attr("fill", differentResponse)
;
datagroups.append("text")
  .attr("x", -50)
  .attr("y", 100)
  .text(text)
;
datagroups.attr("transform", rectLocation);

function rectLocation(incomingData, i){
  let x = (i+1)*200;
  let y = 250;
  if (i > 5 && i < 10){
    x = (i-5)*200;
    y = 500;
  }
  return "translate(" + x + "," + y + ")";
}
//data collection--transforming json data to functions to process data
function text(incomingData){
  return ""+incomingData.name;
}
function textXLocation(incomingData){
  return incomingData.frequency /20
}
function textYLocation(incomingData){
  return incomingData.frequency * 20
}
// a--fill color of circle
// differentGesture
// range (1-7)
function differentGesture(datapoint){
  let a = datapoint.differentGesture;
  if (a == 1){
    return "red";
  }else if (a == 2){
    return "orange";
  }else if (a == 3){
    return "yellow";
  }else if (a == 4){
    return "green";
  }else if (a == 5){
    return "blue";
  }else if (a == 6){
    return "purple";
  }else if (a == 7){
    return "pink";
  }
}

// g -- size of rect
// frequency
// 1, 2, 3, 4, 5, 6, 7, 8, 9, 10 (integer)
function frequency(datapoint){
  let g = datapoint.frequency;
  return g*15;
}

// h--stoke-width of circle
// differentVerbal

function differentVerbal(datapoint){
  let h = datapoint.differentVerbal;
  return h;
}

// l (L)--color of stroke
// differentResponse
//1-7
function differentResponse(datapoint){
  let l = datapoint.differentResponse;
  if (l == 1){
    return "red";
  }else if (l == 2){
    return "orange";
  }else if (l == 3){
    return "yellow";
  }else if (l == 4){
    return "green";
  }else if (l == 5){
    return "blue";
  }else if (l == 6){
    return "purple";
  }else if (l == 7){
    return "pink";
  }
}
}
