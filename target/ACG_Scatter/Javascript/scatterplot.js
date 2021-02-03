//$("#scatter_chart").html("gogogogogo");

var margin = {top: 50, right: 50, bottom: 60, left: 70},
    width = 1050 - margin.left - margin.right,
    height = 600 - margin.top - margin.bottom;


var svg=d3.select("#scatter_chart")
.append("svg")
.attr("width",1050)
.attr("height",600)

var g_body = svg.append("g").attr("transform","translate("+ margin.left+","+margin.top+")");

//title of chart
var g_title= svg.append("g")
.attr("transform","translate("+ 400+","+25+")")
.append("text")
.attr("font-size", 30)
.attr("fill","#1f375a")
.text("Title of Scatterplot chart");


//length of x-axis
var x=d3.scaleLinear().range([0,width]);
//length of y-axis
var y=d3.scaleLinear().range([height, 0]);

 // Add the x-axis.
  g_body.append("g")
    .attr("class", "axis x-axis")
    .attr("transform", "translate(0," + height + ")") // move axis to bottom of chart
    .call(d3.axisBottom(x));
// Add the y-axis.
  g_body.append("g")
    .attr("class", "axis y-axis")
    .call(d3.axisLeft(y));
