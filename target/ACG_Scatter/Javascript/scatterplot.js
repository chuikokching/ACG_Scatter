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

// load data
d3.csv("scatterplot.csv").then(function(data) {
    console.log(data);
    console.log("test for csv");
});

console.log("test for csv!!!!!!!!")

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

