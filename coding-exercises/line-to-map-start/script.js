let w = 1200;
let h = 800;
let padding = 90

// SVG
let viz = d3.select("#container").append("svg")
    .style("width", w)
    .style("height", h)
    .style("background-color", "lavender")
;


// IMPORT DATA
d3.json("ctcounties.geojson").then(function(geoData){
  d3.csv("populationprojectionsbycounty2017.csv").then(function(incomingData){

    //turn population string into numbers
    //so we can compare the min value
    incomingData = incomingData.map(function(d, i){
      d.population = Number(d.population);
      return d
    });

    console.log(incomingData);

    let minPop = d3.min(incomingData, function(d, i){
      return d.population
    });
    console.log("minPop", minPop);
    let maxPop = d3.max(incomingData, function(d, i){
      return d.population
    });
    console.log("maxPop", maxPop);
    let colorScale = d3.scaleLinear().domain([minPop, maxPop]).range(["white", "blue"]);
    console.log(colorScale(20));

    // PRINT DATA
    console.log(geoData);

    // SCALES (to translate data values to pixel values)
    // let xDomain = d3.extent(incomingData, function(d){ return Number(d.year); })
    // let xScale = d3.scaleLinear().domain(xDomain).range([padding,w-padding]);
    // let yDomain = d3.extent(incomingData, function(d){ return Number(d.birthsPerThousand); })
    // let yScale = d3.scaleLinear().domain(yDomain).range([h-padding,padding]);

    let projection = d3.geoEqualEarth()
      .translate([w/2, h/2])
      //.center([103.8, 34.1])
      .fitExtent([[padding, padding], [w-padding, h-padding]], geoData)
    ;
    // PATH (line) MAKER - gets points, returns one of those complicated looking path strings
    // let lineMaker = d3.line()
    //     .x(function(d){
    //       return xScale(Number(d.year));
    //     })
    //     .y(function(d){
    //       return yScale(Number(d.birthsPerThousand));
    //     })
    // ;

    let pathMaker = d3.geoPath(projection);

    // CREATE SHAPES ON THE PAGE!
    viz.selectAll(".county").data(geoData.features).enter()
      .append("path")
        .attr("class", "county")
        .attr("d", pathMaker)
        .attr("fill", function(d, i){
          console.log(d.properties.NAME);

          //see if d.properties.name is in incomingData
          //filter() will always return an array
          //find() will return the first result of the filtering
          let correspondingDatapoint = incomingData.find(function(datapoint){
            //console.log(datapoint);
            if (datapoint.county === d.properties.NAME) {
              return true
            } else {
              return false
            }
          });
          if (correspondingDatapoint != undefined) {
            console.log(correspondingDatapoint.value);
            return colorScale(correspondingDatapoint.value)
          } else {
            return "black"
          }
        })
        .attr("stroke", "red")
    ;

    let lat = 31.22773;
    let lon = 121.53016;
    // let pixelValue = projection([lon, lat]);
    // console.log(pixelValue);

    viz.append("circle")
      .attr("cx", function(){
        return projection([lon, lat])[0];
      })
      .attr("cy", function(){
        return projection([lon, lat])[1];
      })
      .attr("r", 20)
      .attr("fill", "red")
    ;

  })

})
