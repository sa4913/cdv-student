let w = 900;
let h = 500;

let viz = d3.select("#container")
  .append("svg")
    .style("width", w)
    .style("height", h)
    .style("outline", "solid black")
;

let data = [
  [
    [0,   100],
    [300, 400],
    [600, 300],
    [900, 350]
  ],
  [
    [0,   300],
    [230, 350],
    [900, 90 ]
  ]
]


let graphGroup = viz.append("g").attr("class", "graphGroup");
