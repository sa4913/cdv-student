// import {MDCTooltip} from '@material/tooltip';
// const tooltip = new MDCTooltip(document.querySelector('.mdc-tooltip'));

var matrix = [
     {instructions: 200, hosts: 200, famousGuests: 200, history: 200, filler1: 200, filler2: 200},
     {instructions: 400, hosts: 400, famousGuests: 400, history: 400, filler1: 400, filler2: 400},
     {instructions: 600, hosts: 600, famousGuests: 600, history: 600, filler1: 600, filler2: 600},
     {instructions: 800, hosts: 800, famousGuests: 800, history: 800, filler1: 800, filler2: 800},
     {instructions: 1000, hosts: 1000, famousGuests: 1000, history: 1000, filler1: 1000, filler2: 1000}
    ];
var tools = [
  "test0", "test1", "test2", "test3", "test4", "test5",
  "test10", "test11", "test12", "test13", "test14", "test15",
  "test20", "test21", "test22", "test23", "test24", "test25",
  "test30", "test31", "test32", "test33", "test34", "test35",
  "test40", "test41", "test42", "test43", "test44", "test45"
  // {instructions:"test", hosts:"test", famousGuests:"test", history:"test", filler1:"test", filler2:"test"},
  // {instructions:"test", hosts:"test", famousGuests:"test", history:"test", filler1:"test", filler2:"test"},
  // {instructions:"test", hosts:"test", famousGuests:"test", history:"test", filler1:"test", filler2:"test"},
  // {instructions:"test", hosts:"test", famousGuests:"test", history:"test", filler1:"test", filler2:"test"},
  // {instructions: "test", hosts: "test", famousGuests: "test", history: "test", filler1: "test", filler2: "test"}
]

    var tr = d3.select(".objecttable tbody")
     .selectAll("tr")
     .data(matrix)
     .enter().append("tr");

    var td = tr.selectAll("td")
     .data(function(d, i) { return Object.values(d); })
     .enter().append("td")
       .attr("title", function(i)
       {
         // .data(tools)
         return tools[i]; })
       .text(function(d) { return d; });
