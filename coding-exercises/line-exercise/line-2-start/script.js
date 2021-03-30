d3.json("births.json").then(gotData);


let w = 900;
let h = 500;
let xpadding = 100;
let ypadding = 50;
let viz = d3.select("#container")
  .append("svg")
    .style("width", w)
    .style("height", h)
    .style("outline", "solid black")
;


function gotData(incomingData){
  // the following function is defined below
  // it allows for us to NOT WORRY about parsing
  // time strings and creating JS date objects
  // in the following script
  incomingData = fixJSDateObjects(incomingData);
  console.log(incomingData);

  // temporarily flatten data to get the minima/maxima:
  let flatData = d3.merge(incomingData)
  console.log(flatData);
  // we can use a  time scale because our data expresses
  // years in the form of JS date objects
  let xDomain = d3.extent(flatData, function(d){ return d.year });
  let xScale = d3.scaleTime().domain(xDomain).range([xpadding, w-xpadding]);
  let xAxis = d3.axisBottom(xScale);
  let xAxisGroup = viz.append("g")
      .attr("class", "xaxisgroup")
      .attr("transform", "translate(0,"+(h-ypadding)+")")
  ;
  xAxisGroup.call(xAxis);

  let yMax = d3.max(flatData, function(d){
    return d.birthsPerThousand;
  })
  let yDomain = [0, yMax];
  let yScale = d3.scaleLinear().domain(yDomain).range([h-ypadding, ypadding]);
  let yAxis = d3.axisLeft(yScale);
  let yAxisGroup = viz.append("g")
      .attr("class", "yaxisgroup")
      .attr("transform", "translate("+(xpadding/2)+",0)")
  ;
  yAxisGroup.call(yAxis);

  let graphGroup = viz.append("g").attr("class", "graphGroup");

  let dataIndex = 0;

  //we have to tell the line function what data to look at
  let lineMaker = d3.line()
    .x(function(d, i){
      return xScale(d.year);
    })
    .y(function(d, i){
      return yScale(d.birthsPerThousand);
    })
  ;

  // graphGroup.selectAll(".line").data(incomingData).enter()
  //   .append("path")
  //     .attr("d", lineMaker)
  //     .attr("fill", "none")
  //     .attr("stroke", "black")
  //     .attr("stroke-width", 5)
  //     .attr("class", "line")
  //     .attr("stroke", function(d, i){
  //       if (d[0].country == "United States") {
  //         return "blue"
  //       } else {
  //         return "red"
  //       }
  //     })
  // ;

  function showByCountry(){

    let dataToShow = [incomingData[dataIndex]];
    console.log("dataToShow", dataToShow);

    function assignKeys(d, i){
      return d.year
    }

    let dataLine = graphGroup.selectAll(".line").data(dataToShow, assignKeys);

    //ENTER
    dataLine.enter()
      .append("path")
        .attr("class", "line")
        .attr("d", lineMaker)
        .attr("fill", "none")
        .attr("stroke-width", 5)
        .attr("class", "line")
        .attr("stroke", function(d, i){
          if (d[0].country == "United States") {

            return "blue"
          } else {
            return "red"
          }
        })
    ;

    //We don't need to exit the line
    //because both usa and china have data for the same years
    //we are just updating the data from one to the other

    //UPDATE
    //update the path and color
    dataLine.transition()
      .attr("d", lineMaker)
      .attr("stroke", function(d, i){
        if (d[0].country == "United States") {
          return "blue"
        } else {
          return "red"
        }
      })
      .duration(500)
    ;

  }

  document.getElementById("usa").addEventListener("click", function(){
    dataIndex = 0;
    document.getElementById("favicon").href = "https://upload.wikimedia.org/wikipedia/commons/thumb/7/7b/Seal_of_the_United_States_Department_of_State.svg/1024px-Seal_of_the_United_States_Department_of_State.svg.png";
    showByCountry();
  });
  document.getElementById("china").addEventListener("click", function(){
    dataIndex = 1;
    document.getElementById("favicon").href = "https://www.kindpng.com/picc/m/106-1065813_china-flag-round-png-transparent-png.png";
    showByCountry();
  });

}

// function that turns all datapoints year values
// into JS date objects in the very beginning
// so that WE DON'T HAVE TO DEAL WITH IT LATER
function fixJSDateObjects(dataToFix){
  // timeParser
  let timeParse = d3.timeParse("%Y");
  return dataToFix.map(function(data){
    return data.map(function(d){
      return {
        "country": d.country,
        "year": timeParse(d.year),
        "birthsPerThousand": d.birthsPerThousand
      }
    })
  });
}
