let w = 1280;
let h = 720;
let jblue = "#060CE9";

// let buttonL = ;
// let buttonR = ;
// let buttonUp = ;
// let buttonDown = ;

let viz = d3.select("#container").append("svg")
	.attr("width", w)
	.attr("height", h)
	//.attr("class", "viz")
	.attr("background-color", jblue)
;

  // viz.append("image")
  //   .attr("href", "images/double.png")
  //   .attr("x", w/2)
  //   .attr("y", h/2)
  //   .attr("width", 600)
  //   .attr("height", 400)
  // ;
	let w = 1280;
	let h = 720;
	let jblue = "#060CE9"

	// let buttonL = ;
	// let buttonR = ;
	// let buttonUp = ;
	// let buttonDown = ;

	let viz = d3.select("#container").append("svg")
		.attr("width", w)
		.attr("height", h)
		//.attr("class", "viz")
		.attr("background-color", jblue)
	;

	  // viz.append("image")
	  //   .attr("href", "images/jeopardy.png")
	  //   .attr("x", w/2)
	  //   .attr("y", h/2)
	  //   .attr("width", 600)
	  //   .attr("height", 400)
	  // ;
		var width = 960,
		    height = 605,
		    boardHeight = 545;

		var cellPadding = 10,
		    numRows = 5,
		    numCols = 6,
		    cellWidth = width / numCols - cellPadding - 2,
		    cellHeight = boardHeight / numRows - cellPadding - 2;


		var baseBlue = "#0c1567";
		var color = d3.scaleLinear().domain([0,967]).range(["#eceefd", baseBlue]).interpolate(d3.interpolateLab),
		    textColor = d3.scaleLinear().domain([0,1000]).range(["#999", "#ffffff"]).interpolate(d3.interpolateLab);

		var progressScale = d3.scaleLinear().domain([0,1]).range([0,2*cellWidth-2]);
		var formatTotal = d3.format(",");

		var clues,
		    interval,
		    clueSoFar = 0,
		    cluesPerUpdate = 10;

		// Board
		var svg = d3.select("body #main-wrapper").append("svg")
		    .attr("width", width)
		    .attr("height", height)
		  .append("g");

		svg.append("rect")
		    .attr("width", width)
		    .attr("height", boardHeight)
		    .attr("fill", "#000");

		var board = svg.append("g");
		var counts = {};

		var boardEnter = board.append("g")
		    .attr("class", "clues")
		    .selectAll(".cluecell")
		        .data([1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23,24,25,26,27,28,29,30])
		    .enter();

		var cells = boardEnter.append("g")
		    .attr("id", function(d, i) {
		        var x = Math.floor(i / numRows) + 1;

		        var colsSoFar = Math.floor((i) / numRows);
		        var y = i - colsSoFar*numRows + 1;

		        var cell_id = 'cell_' + x + '_' + y;
		        counts[cell_id] = 0;

		        return cell_id;
		    })
		    .attr("class", "cluecell");

		cells.append("rect")
		    .attr("x", function(d, i) {
		        return Math.floor(i / numRows) * (cellWidth + cellPadding) + cellPadding / 2 + 7;
		    })
		    .attr("y", function(d, i) {
		        var colsBefore = Math.floor(i / numRows);
		        return i*(cellHeight + cellPadding) - colsBefore*(cellHeight+cellPadding)*numRows + 9;
		    })
		    .attr("width", cellWidth)
		    .attr("height", cellHeight)
		    .attr("fill", "#ffffff")
		    .attr("rx", 6)
		    .attr("ry", 6);

		cells.append("text")
		    .attr("x", function(d, i) {
		        return Math.floor(i / numRows) * (cellWidth + cellPadding) + cellPadding / 2 + 7 + cellWidth / 2;
		    })
		    .attr("y", function(d, i) {
		        var colsBefore = Math.floor(i / numRows);
		        return i*(cellHeight + cellPadding) - colsBefore*(cellHeight+cellPadding)*numRows + 9 + cellHeight/2 + 12;
		    })
		    .text(0)
		    .attr("fill", "#fff");
		    // .attr("display", "none");


		// Progress bar
		var progressBar = svg.append("g")
		    .attr("id", "#progress-bar");

		progressBar.append("rect")
		    .attr("x", 2*(cellWidth+2*cellPadding)-2)
		    .attr("y", boardHeight+20)
		    .attr("width", 2*cellWidth)
		    .attr("height", 12)
		    .attr("stroke", "#000")
		    .attr("stroke-width", ".2px")
		    .attr("fill", "#fff");
		progressBar.append("rect")
		    .attr("id", "indicator")
		    .attr("x", 2*(cellWidth+2*cellPadding)-1)
		    .attr("y", boardHeight+21)
		    .attr("width", 0)
		    .attr("height", 10)
		    .attr("fill", "#000");
		progressBar.append("text")
		    .attr('id', 'clue-counter')
		    .attr('x', width / 2)
		    .attr('y', boardHeight + 50)
		    .attr('text-anchor', 'middle')
		    .text("Daily Doubles, Season 1 to 31");


		// Replay button
		var replayButton = svg.append("g")
		    .attr("id", "replay-button")
		    .attr("display", "none");
		replayButton.append("rect")
		    .attr("fill", "#000000")
		    .attr("x", 650)
		    .attr("y", boardHeight+20)
		    .attr("width", 135)
		    .attr("height", 32)
		    .attr("rx", 6)
		    .attr("ry", 6);
		replayButton.append("text")
		    .attr("fill", "#fff")
		    .attr("x", 718)
		    .attr("y", boardHeight+42)
		    .attr("text-anchor", "middle")
		    .text("Replay");
		replayButton.on("click", function() {
		    index_next = 0;
		    done = false;
		    board.selectAll(".cluecell rect")
		        .attr("fill", "#ffffff");
		    for (var cell_id in counts) {
		        counts[cell_id] = 0;
		    }
		    setTimeout(loop, 500);
		    d3.select(this).attr("display", "none");
		});


		// Load data
		queue()
		    .defer(d3.csv, "data/jeopardyMinAll.csv", type)
		    .await(ready);


		var index_next = 0,
		    done = false;
		function ready(error, dds) {

		    clues = dds;

		    // Play button
		    var playButton = svg.append("g").attr("id", "play-button");
		    playButton.append("rect")
		        .attr("fill", "#000000")
		        .attr("width", width)
		        .attr("height", height)
		        .attr("fill-opacity", 0.8);
		    playButton.append("rect")
		        .attr("fill", "#ffffff")
		        .attr("x", width/2-100)
		        .attr("y", height/2-60)
		        .attr("height", 50)
		        .attr("width", 200)
		        .attr("rx", 6)
		        .attr("ry", 6);
		    playButton.append("text")
		        .attr("fill", "#000000")
		        .attr("x", width/2)
		        .attr("y", height/2-30)
		        .attr("text-anchor", "middle")
		        .text("Click to Play");
		    playButton.on("click", function() {
		        setTimeout(loop, 500);
		        d3.select(this).remove();
		    });

		    // setTimeout(loop, 1500);

		}


		function loop() {
		    interval = setInterval(update, 0);
		}


		// Update the color of the next clue
		function update() {

		    for (var i=0; i < cluesPerUpdate; i++) {

		        var cell_id = 'cell_' + clues[index_next].x + '_' + clues[index_next].y;
		        counts[cell_id] += 1;

		        if (counts[cell_id] == 1) {
		            d3.select("#" + cell_id + " rect")
		                .attr("fill", baseBlue)
		              .transition()
		                .duration(400)
		                .attr("fill", function() {
		                    return color(counts[cell_id]);
		                });
		        } else {
		            d3.select("#" + cell_id + " rect")
		                .attr("fill", function() {
		                    return color(counts[cell_id]);
		                });
		        }


		        d3.select("#" + cell_id + " text")
		            .text(counts[cell_id])
		            .attr("fill", "#fff");
		            // .attr("fill", textColor(counts[cell_id]));

		        // progress
		        progressBar.select("#indicator")
		            .attr("width", function() { return progressScale(index_next / clues.length); });
		        progressBar.select("#clue-counter")
		            .text(formatTotal(index_next) + " Daily Doubles, Season 1 to 31");


		        // Update index
		        index_next += 1;
		        if (index_next == clues.length) {
		            clearInterval(interval);
		            done = true;
		            break;
		        }
		    }


		    if (done) {
		        d3.keys(counts).forEach(function(cell_id) {
		            board.select("#"+cell_id + " rect")
		              .transition()
		                .duration(500)
		                .attr("fill", "#ffffff")
		              .transition()
		                .duration(1500)
		                .attr("fill", function() {
		                    if (counts[cell_id] == 0) return "#ffffff";
		                    else return color(counts[cell_id]);
		                });
		        });
		        changeToPercentage();
		        replayButton.attr("display", "block");
		    }

		}

		// Update counts to percentages
		function changeToPercentage() {

		    d3.keys(counts).forEach(function(cell_id) {
		        board.select("#"+cell_id + " text")
		            .text(Math.round(100 * counts[cell_id] / clues.length) + "%");
		    });
		}

		// Updates all at once. Probably won't use
		function updateColors() {

		    board.selectAll(".cluecell rect")
		        .attr("fill", function(d) {
		            var cell_id = d3.select(this.parentNode).attr('id');
		            return color(counts[cell_id]);
		        });
		}


		function type(d) {
		    // d.x = +d.x;
		    // d.y = +d.y;
		    // d.episode = +d.episode;

		    return d;
		}
