var matrix = [
     {instructions: 200, hosts: 200, famousGuests: 200, history: 200, filler1: 200, filler2: 200},
     {instructions: 400, hosts: 400, famousGuests: 400, history: 400, filler1: 400, filler2: 400},
     {instructions: 600, hosts: 600, famousGuests: 600, history: 600, filler1: 600, filler2: 600},
     {instructions: 800, hosts: 800, famousGuests: 800, history: 800, filler1: 800, filler2: 800},
     {instructions: 1000, hosts: 1000, famousGuests: 1000, history: 1000, filler1: 1000, filler2: 1000}
    ];

    var tr = d3.select(".objecttable tbody")
     .selectAll("tr")
     .data(matrix)
     .enter().append("tr");

    var td = tr.selectAll("td")
     .data(function(d, i) { return Object.values(d); })
     .enter().append("td")
       .text(function(d) { return d; });
