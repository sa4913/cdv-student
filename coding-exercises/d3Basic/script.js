
//document.getElementById("viz-container");
let viz = d3.select("#viz-container")
  .append("svg")
    .attr("id","viz")
    .attr("width", 600)
    .attr("height", 600)
    .attr("fill", "white")
;
//the div viz-container
viz.attr("height", 400);

// let myCircle = viz.append("circle")
//     .attr("cx", 250)
//     .attr("cy", 200)
//     .attr("r", 20)
// ;
//
// myCircle.attr("fill", "white");

//load data

// let greetingData = d3.json("data.json").then(gotData); //in "" is the name of the file
//
// function gotData(incomingData){
//   d3.select("body")
//     .selectAll("p")
//     .data(data)
//     .enter()
//     .append("p")
//     .text(function(d) {
//       return d.person + ", " + d.frequency;
//     });
// }
//console.log(greetingData);

let greetingData = [
  {
    "person": "Yihan",
    "frequency": 7,
    "differentVerbalGreetings": 4,
    "differentGesturesUsed": 4,
  },
  {
    "person": "Addison",
    "frequency": 3,
    "differentVerbalGreetings": 2,
    "differentGesturesUsed": 1,
  },
  {
    "person": "Dacey",
    "frequency": 2,
    "differentVerbalGreetings": 2,
    "differentGesturesUsed": 1,
  },
  {
    "person": "Daniel",
    "frequency": 2,
    "differentVerbalGreetings": 2,
    "differentGesturesUsed": 1,
  },
  {
    "person": "Isabella",
    "frequency": 2,
    "differentVerbalGreetings": 1,
    "differentGesturesUsed": 1,
  },
  {
    "person": "Shengli",
    "frequency": 2,
    "differentVerbalGreetings": 1,
    "differentGesturesUsed": 1,
  },
  {
    "person": "Yifan",
    "frequency": 2,
    "differentVerbalGreetings": 1,
    "differentGesturesUsed": 1,
  }
]


viz.selectAll("circle").data(greetingData).enter()
  .append("circle")
    .attr("cx",xLocation)
    .attr("cy", 200)
    .attr("r", changeSize)

    .attr("fill", changeColor)
;

function changeSize(datapoint){
  console.log(datapoint.frequency);
  return datapoint.frequency*10;
}

function xLocation(datapoint){
  return datapoint.differentVerbalGreetings*40;
}

function changeColor(datapoint){
  if (datapoint.person == "Yihan"){
    return "red";
  }
  if (datapoint.person == "Addison"){
    return "orange";
  }
  if (datapoint.person = "Dacey"){
    return "yellow";
  }
  if (datapoint.person = "Daniel"){
    return "green";
  }
  if (datapoint.person = "Isabella"){
    return "blue";
  }
  if (datapoint.person = "Shengli"){
    return "purple";
  }
  if (datapoint.person == "Yifan"){
    return "brown"
  }
  else{
    return "white";
  }
}
// let myData = [4, 6, 8, 2, 10];
//
// function xLocation(datapoint){
//   console.log(datapoint);
//   return datapoint *40;
// }
//
// function chooseColor(datapoint){
//   if (datapoint = ???){
//
//   }
//   return "green";
// }
//
// viz.selectAll("circle").data(myData).enter()
//   .append("circle")
//     .attr("cx", xLocation)
//     .attr("cy", 180)
//     .attr("r", 20)
// ;
