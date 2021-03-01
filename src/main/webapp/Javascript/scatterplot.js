//$("#scatter_chart").html("gogogogogo");

var margin = {top: 50, right: 50, bottom: 60, left: 70},
    width = 1050 - margin.left - margin.right,
    height = 700 - margin.top - margin.bottom;

var chart_title="Title of Scatterplot Chart";
var x_axis_title="Number of Students";
var y_axis_title="Number of Facutly Members";

var jsonList={
  "chart_title":chart_title,
  "x_axis_title":x_axis_title,
  "y_axis_title":y_axis_title,
  "array":[1,2,3,4,5,6,7,8,9,10]
}

var svg=d3.select("#scatter_chart")
    .append("svg")
    .attr("width",1050)
    .attr("height",700)

var g_body = svg.append("g").attr("transform","translate("+ margin.left+","+margin.top+")");

//title of chart
var g_title= svg.append("g")
    .attr("transform","translate("+ 400+","+25+")")
    .append("text")
    .attr("font-size", 30)
    .attr("fill","#1f375a")
    .text(chart_title);

//title of x_axis
var g_x_axis_title = svg.append("g")
    .attr("transform","translate("+480+","+680+")")
    .append("text")
    .attr("font-size", 18)
    .attr("fill","#1f375a")
    .text(x_axis_title)

//title of y_axis
var g_y_axis_title = svg.append("g")
    .attr("transform","translate("+30+","+400+")")
    .append("text")
    .attr("font-size", 18)
    .attr("transform", "rotate(-90)")
    .attr("fill","#1f375a")
    .text(y_axis_title)

// add the tooltip area to the webpage
var tooltip = d3.select("body").append("div")
    .attr("class", "tooltip")
    .style("opacity", 0);

// load data
d3.csv("https://gist.githubusercontent.com/chuikokching/5d7ca6f15ae22fc95db6b7ffcdc0efa9/raw/1a8c6edc91c28e9351dfe13eb3ad2303866b64a9/ScatterPlot1.csv").then(function(data) {
    console.log(data[0]);
    // setup x - use +d to change string (from CSV) into number format
    var xValue = function(d) { return +d["numStudents"];}, // data -> value
        x=d3.scaleLinear().range([0,width]),     // value -> display, length of x-axis
        xMap = function(d) { return x(xValue(d));}; // data -> display

    // setup y - use +d to change string into number format
    var yValue = function(d) { return +d["Faculty"];}, // data -> value
        y = d3.scaleLinear().range([height, 0]),    // value -> display, length of y-axis
        yMap = function(d) { return y(yValue(d));}; // data -> display

    // don't want dots overlapping axis, so add in buffer to data domain
    x.domain([d3.min(data, xValue)-1, d3.max(data, xValue)+1]);
    y.domain([0, d3.max(data, yValue)+1]);

    // Add the x-axis.
    g_body.append("g")
        .attr("class", "axis x-axis")
        .attr("transform", "translate(0," + height + ")") // move axis to bottom of chart
        .call(d3.axisBottom(x));
    // Add the y-axis.
    g_body.append("g")
        .attr("class", "axis y-axis")
        .call(d3.axisLeft(y));

    //create color scale
    var cValue = function(d) { return d['country'];},
        colors = d3.scaleOrdinal(d3.schemePaired);

    // draw dots
    g_body.selectAll(".dot")
        .data(data)
        .enter().append("circle")
        .attr("class", "dot")
        .attr("r", 3)
        .attr("cx", xMap)
        .attr("cy", yMap)
        .style("fill", function(d) { return colors(cValue(d)); })


        // tooltip
        .on("mouseover", function(d) {
            tooltip.transition()
                .duration(200)         // ms delay before appearing
                .style("opacity", .8); // tooltip appears on mouseover
            tooltip.html(d["Number of Students"] + "<br/> " + d.numStudents + "<br/>(" + xValue(d)
                + ", " + yValue(d) + ")")
                .style("left", (d3.event.pageX + 10) + "px")  // specify x location
                .style("top", (d3.event.pageY - 28) + "px");  // specify y location
        })
        .on("mouseout", function(d) {
            tooltip.transition()
                .duration(500)
                .style("opacity", 0); // disappear on mouseout
        });
});

$("#infos").on("click",function(){

});

//Submit function
$("#submit").on("click",function(){
  $.ajax({
    type :"POST",
    url  :"/ACG/Demo",
    contentType : "application/json",
    dataType :"json",    //response data type of server
    data :JSON.stringify(jsonList), //parameters to send
    success :function (data) {

      console.log(data);
      $(".result").html("Chart_title: "+data.chart_title+"<br/>"+"X_axis: "+data.x_axis_title+"<br/>"+data.y_axis_title+"<br/>"+data.array);
         Swal.fire({
            icon: 'success',
            title: 'Submit',
            text: 'successfully!',
            })
    },
    error :function(xmlhttp,errorText)
    {
      console.log(xmlhttp);   //xmlhttp.status
      console.log(errorText);
    }
  })

});

