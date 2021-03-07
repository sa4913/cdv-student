let w = 2400;
let h = 800;
let distance = 50;
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
spiral.attr("transform","translate("+w/2+","+h/2+")")

// function differentFrequency(d, i){
//   let size = d.frequency;
//   if (size == 1){
//     return "scale(distance/10 distance/10)";
//   }
//   else if (size == 2){
//     return "scale(distance/8)";
//   }
//   else if (size == 3){
//     return distance/6;
//   }
//   else if (size == 4){
//     return distance/4;
//   }
//   else if (size == 5){
//     return distance/2;
//   }
//   else if (size == 9){
//     return distance;
//   }
//   else if (size == 10){
//     return distance*1.2;
//   }
//   else if (size == 25){
//     return distance*1.4;
//   }
// }

function outcomeColor(d, i){
  let outcome = d.differentOutcomes;
  if (outcome == 1){
    return starRed;
  }
  else if (outcome == 2){
    return starOrange;
  }
  else if (outcome == 3){
    return starYellow;
  }
  else if (outcome == 4){
    return starTan;
  }
  else if (outcome == 5){
    return starPale;
  }
  else if (outcome == 6){
    return starNavy;
  }
  else if (outcome > 6){
    return starBlue;
  }
}
function responseColor(d, i){
  let response = d.differentResponse;
  if (response == 1){
    return starRed;
  }
  else if (response == 2){
    return starOrange;
  }
  else if (response == 3){
    return starYellow;
  }
  else if (response == 4){
    return starTan;
  }
  else if (response == 5){
    return starPale;
  }
  else if (response == 6){
    return starNavy;
  }
  else if (response > 6){
    return starBlue;
  }
}
function verbalColor(d, i){
  let verbal = d.differentVerbal;
  if (verbal == 1){
    return starRed;
  }
  else if (verbal == 2){
    return starOrange;
  }
  else if (verbal == 3){
    return starYellow;
  }
  else if (verbal == 4){
    return starTan;
  }
  else if (verbal == 5){
    return starPale;
  }
  else if (verbal == 6){
    return starNavy;
  }
  else if (verbal > 6){
    return starBlue;
  }
}
function gestureColor(d, i){
  let gesture = d.differentGesture;
  if (gesture == 1){
    return starRed;
  }
  else if (gesture == 2){
    return starOrange;
  }
  else if (gesture == 3){
    return starYellow;
  }
  else if (gesture == 4){
    return starTan;
  }
  else if (gesture == 5){
    return starPale;
  }
  else if (gesture == 6){
    return starNavy;
  }
  else if (gesture > 6){
    return starBlue;
  }
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
  let stretchFactor = 3;
  let x = Math.cos(pointAngleInRadians) * radius * stretchFactor;
  let y = Math.sin(pointAngleInRadians) * radius -15;
  console.log(x, y);

  // let x = 0;
  // let y = 0;


  return "translate("+x+","+y+")"
}

// function


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
  datagroups.append("line") // y axis
    .attr("class", "star")
    .attr("x1", 0)
    .attr("y1", -distance/2)
    .attr("x2", 0)
    .attr("y2", distance/2)
    .style("stroke", outcomeColor)
    .style("stroke-width", 4)
  ;
  datagroups.append("line") // x axis
    .attr("class", "star")
    .attr("x1", -distance/2)
    .attr("y1", 0)
    .attr("x2", distance/2)
    .attr("y2", 0)
    .style("stroke", responseColor)
    .style("stroke-width", 4)
  ;
  datagroups.append("line") // y = x
    .attr("class", "star")
    .attr("x1", -distance/2)
    .attr("y1", distance/2)
    .attr("x2", distance/2)
    .attr("y2", -distance/2)
    .style("stroke", verbalColor)
    .style("stroke-width", 4)
  ;
  datagroups.append("line") // y = - x
    .attr("class", "star")
    .attr("x1", -distance/2)
    .attr("y1", -distance/2)
    .attr("x2", distance/2)
    .attr("y2", distance/2)
    .style("stroke", gestureColor)
    .style("stroke-width", 4)
  ;
  // datagroups.append("line")
  //   .attr("x1", 0)
  //   .attr("y1", 0)
  //   .attr("x2", 30)
  //   .attr("y2", 30)
  // ;
  datagroups.append("text")
    .attr("x", -25)
    .attr("y", 50)
    .text(getName)
    .style("fill", "white")
  ;
  //position datagroups
  datagroups.attr("transform", spiralPosition);
  let stars = viz.selectAll(".star");


  function getName(incomingData){
    return ""+incomingData.name;
  }

}




d3.json("data.json").then(gotData);
