angular.module('starter.controllers', [])
.directive("chart1", function($window) {
  return{
    restrict: "EA",
    template: "<svg width='850' height='200'></svg>",
    link: function(scope){
    }
  };
})
.directive("chart2", function($window) {
  return{
    restrict: "EA",
    template: "<svg width='850' height='200'></svg>",
    link: function(scope, elem, attrs){
    }
  };
})
.directive("chart", function($window) {
  return{
    restrict: "EA",
    template: "<svg width='850' height='200'></svg>",
    link: function(scope, elem, attrs){
    }
  };
})

.controller('DashCtrl', function($scope) {

	function topleft() {
var margin = {top: 20, right: 60, bottom: 70, left: 200},
    width = 1000 - margin.left - margin.right,
    height = 400 - margin.top - margin.bottom;

var svg = d3.select("chart1").append("svg")
    .attr("width", width + margin.left + margin.right)
    .attr("height", height + margin.top + margin.bottom)
  .append("g")
    .attr("transform", 
          "translate(" + margin.left + "," + margin.top + ")");

d3.json("movies1.json", function(error,songs) {
var xScale = d3.scale.ordinal()
	.rangeRoundBands([0, width], .05);

var yScale = d3.scale.linear().range([height, 0]);

var xAxis = d3.svg.axis()
    .scale(xScale)
    .orient("bottom");

var yAxis = d3.svg.axis()
    .scale(yScale)
    .orient("left")
    .ticks(10);
	var dict=[];
	var names=[];
	var prices=[];
	var count=0;

var counter=0;

songs.forEach(function(d) {
         var name = "Title";
         var attr = "Open";
	var dict_elt={};

         if(d[attr] != 'NA' && counter < 10)
         {
		
	dict_elt["key"]=   d[name];
	dict_elt["value"]=  d[attr];   
	dict[counter]=dict_elt;
          counter++;
         }
         });
xScale.domain(dict.map(function(d) {return d["key"].slice(0,13);}));
yScale.domain([0,d3.max(dict.map(function(d) {return +d["value"];}))]);

  svg.append("g")
      .attr("class", "y axis")
      .call(yAxis)
    .append("text")
      .text("Opening revenue in USD")
      .attr("y", 1)
      .attr("dy","-10px" )
	.attr("dx","12px")
      .style("text-anchor", "end")
	.style("font-weight","bold")
	.style("font-size","14px");

svg.append("g")
      .attr("class", "x axis")
      .attr("transform", "translate(0," + height + ")")
 	.call(xAxis)
	.append("text")
	.text("Movie")
	.attr("x",width)
	.attr("dx","20px")
	.attr("dy","0px")
.style("font-weight","bold")
	.style("font-size","14px")
	.style("text-anchor","start");

  svg.selectAll("bar")
	.data(dict)
	.enter().append("rect")
	.attr("class", function(d) { return d.value < 0 ? "barnegative" : "barpositive"; })
      .attr("x", function(d,i) {return xScale(d["key"].slice(0,13))+5; })
      .attr("width", xScale.rangeBand())
      .attr("y", function(d) { return yScale(+d["value"]); })
      .attr("height",function(d) { return height - yScale(+d["value"]); });

});

}
function bottom() {
var margin = {top: 20, right: 60, bottom: 70, left: 200},
    width = 1000 - margin.left - margin.right,
    height = 400 - margin.top - margin.bottom;

var svg = d3.select("chart2").append("svg")
    .attr("width", width + margin.left + margin.right)
    .attr("height", height + margin.top + margin.bottom)
  .append("g")
    .attr("transform", 
          "translate(" + margin.left + "," + margin.top + ")");

d3.json("movies1.json", function(error,songs) {
var xScale = d3.scale.ordinal()
  .rangeRoundBands([0, width], .05);

var yScale = d3.scale.linear().range([height, 0]);

var xAxis = d3.svg.axis()
    .scale(xScale)
    .orient("bottom");

var yAxis = d3.svg.axis()
    .scale(yScale)
    .orient("left")
    .ticks(10);
  var dict=[];
  var names=[];
  var prices=[];
  var count=0;

var counter=0;

songs.forEach(function(d) {
         var name = "Title";
         var attr = "Sentiment";
  var dict_elt={};

         if(d[attr] != 'NA' && counter < 10)
         {
    
  dict_elt["key"]=   d[name];
  dict_elt["value"]=  d[attr];   
  dict[counter]=dict_elt;
          counter++;
         }
         });
xScale.domain(dict.map(function(d) {return d["key"].slice(0,13);}));
yScale.domain([0,d3.max(dict.map(function(d) {return +d["value"];}))]);
  svg.append("g")
      .attr("class", "y axis")
      .call(yAxis)
    .append("text")
      .text("Twitter Sentiment")
      .attr("y", 1)
      .attr("dy","-10px" )
  .attr("dx","12px")
      .style("text-anchor", "end")
  .style("font-weight","bold")
  .style("font-size","14px");

svg.append("g")
      .attr("class", "xaxis")
      .attr("transform", "translate(0," + height + ")")
  .call(xAxis)
  .append("text")
  .text("Movie")
  .attr("x",width)
  .attr("dx","20px")
  .attr("dy","0px")
.style("font-weight","bold")
  .style("font-size","14px")
  .style("text-anchor","start");

  svg.selectAll("bar")
  .data(dict)
  .enter().append("rect")
  .style("fill", "brown")
      .attr("x", function(d,i) {return xScale(d["key"].slice(0,13))+5; })
      .attr("width", xScale.rangeBand())
      .attr("y", function(d) {if(+d["value"]>0) return yScale(+d["value"]); else return height; })
      .attr("height",function(d) { if(+d["value"]>0) return height - yScale(+d["value"]);else return yScale(+d["value"])-height; });

});

}
 topleft();
bottom();
})

.controller('ChatsCtrl', function($scope) {
  var margin = {top: 50, right: 50, bottom: 50, left: 50},
    width = 1200;//- margin.left - margin.right;
    height =1200; //- margin.top - margin.bottom;

var padding=90;

d3.select("chart").append("div")
  .attr("class","imdbRotten")
  .attr("id","iR")
  .style("position","relative")
  .style("float","left")
  //.style("left","10")
  //.style("top","10")
  .style("width",width/2)
  .style("height",height/2);

d3.select("chart").append("div")
  .attr("class","userCritic")
  .attr("id","uC")
  .style("position","relative")
  //.style("left",10+width/2)
  //.style("top","10")
  .style("float","right")
  .style("width",width/2)
  .style("height",height/2);

d3.select("chart").append("div")
  .attr("class","bar_acoustics")
  .attr("id","acoustics")
  .style("position","relative")
  .style("float","bottom")
  .style("width",width)
  .style("height",height/2);


var svg_l = d3.select("#iR").append("svg")
    .attr("width", width/2)
    .attr("height", height/2);
  

var svg_r = d3.select("#uC").append("svg")
    .attr("width", width/2)
    .attr("height", height/2);

var svg_a = d3.select("#acoustics").append("svg")
    .attr("width", width)
    .attr("height", height/2)


d3.csv("features_final.csv", function(error, data) {

  var xScale=d3.scale.linear()
    .domain([0,10])
    .range([padding,width/2-padding])

  var yScale=d3.scale.linear()
    .domain([0,10])
    .range([height/2-padding,padding])

  var xAxis = d3.svg.axis()
    .scale(xScale)
    .orient("bottom")
    .ticks(10);

  var yAxis = d3.svg.axis()
    .scale(yScale)
    .orient("left")
    .ticks(10);

svg_l.selectAll(".circle1")
  .data(data.filter(function(d){return d.imdbrating!='' && d.tomatorating!='' && d.sentiment!=''}))
  .enter()
  .append("circle")
  .attr("class", "circle1")
  .attr("cx",function(d){ /*console.log(xScale(parseFloat(d.tomatorating)));*/ return xScale(parseFloat(d.tomatorating));})
  .attr("cy",function(d){ /*console.log(xScale(parseFloat(d.imdbrating)));*/ return yScale(parseFloat(d.imdbrating));})
  .attr("r",5)
  .style("fill",function(d){/*console.log((parseFloat(d.sentiment)+1)*4);*/ return colorbrewer.RdYlGn[8][parseInt((parseFloat(d.sentiment)+1)*4)];});

var legend=svg_l.selectAll(".legend")
    .data([0,1,2,3,4,5,6,7])
    .enter().append("g")
    .attr("class","legend");

var size=10;
var gap=5;

legend.append("rect")
    .attr("x",width/2-0.5*padding+5)
    .attr("y",function(d,i){  return 2.3*padding+i*(2*size);})
    .attr("width",size)
    .attr("height",2*size)
    .style("fill",function(d,i){ return colorbrewer.RdYlGn[8][7-i];});


svg_l.selectAll(".text")
    .data(["+1.0","-1.0"])
    .enter().append("text")
    .attr("x",width/2-0.5*padding)
    .attr("y",function(d,i){return 2.3*padding+size*8*2*i+i%2*20-5;})
    .text(function(d,i){ return d;})
    .style("font-size",13)
    .style("font-family","sans-serif");
    //.style("font-weight","bold");

svg_l.append("text")
  .attr("x",width/2-0.5*padding-20)
    .attr("y",2.3*padding-20)
    .text("Sentiment")
    .style("font-size",13)
    .style("font-family","sans-serif")
    .style("font-weight","bold");

svg_l.append("g")
      .attr("class", "axis")
      .attr("transform", "translate(0," + (height/2 - padding) + ")")
      .call(xAxis)
      .append("text")
        .attr("dx",width/2-2.5*padding+15)
        .attr("dy",-10)
        .text("Rotten Tomatoes Rating")
        .style("font-weight","bold");
        


  svg_l.append("g")
      .attr("class", "axis")
      .attr("transform", "translate("+ padding + ",0)")
      .call(yAxis)
    .append("text")
      //.attr("transform", "rotate(-90)")
      .attr("dx",-"IMDB rating".length*5)
      .attr("dy",padding-13)
      .text("IMDB Rating")
      .style("font-weight","bold");




//______________Second graph________________

xScale
    .domain([0,100])
    .range([padding,width/2-padding])

yScale
    .domain([0,100])
    .range([height/2-padding,padding])

  /*var xAxis = d3.svg.axis()
    .scale(xScale)
    .orient("bottom")
    .ticks(10);

  var yAxis = d3.svg.axis()
    .scale(yScale)
    .orient("left")
    .ticks(10);*/

svg_r.selectAll(".circle2")
  .data(data.filter(function(d){return d.criticscore!='' && d.criticscore>0 && d.audiencescore>0 && d.criticscore<100 && d.audiencescore<100 && d.audiencescore!='' && d.sentiment!=''}))
  .enter()
  .append("circle")
  .attr("class", "circle2")
  .attr("cx",function(d){ console.log(xScale(parseFloat(d.tomatorating))); return xScale(parseFloat(d.audiencescore));})
  .attr("cy",function(d){ /*console.log(xScale(parseFloat(d.imdbrating)));*/ return yScale(parseFloat(d.criticscore));})
  .attr("r",5)
  .style("fill",function(d){/*console.log((parseFloat(d.sentiment)+1)*4);*/ return colorbrewer.RdYlGn[8][parseInt((parseFloat(d.sentiment)+1)*4)];});

legend=svg_r.selectAll(".legend2")
    .data([0,1,2,3,4,5,6,7])
    .enter().append("g")
    .attr("class","legend2");

var size=10;
var gap=5;

legend.append("rect")
    .attr("x",width/2-0.5*padding+15)
    .attr("y",function(d,i){  return 2.3*padding+i*(2*size);})
    .attr("width",size)
    .attr("height",2*size)
    .style("fill",function(d,i){ return colorbrewer.RdYlGn[8][7-i];});


svg_r.selectAll(".text2")
    .data(["+1.0","-1.0"])
    .enter().append("text")
    .attr("class","text2")
    .attr("x",width/2-0.5*padding)
    .attr("y",function(d,i){return 2.3*padding+size*8*2*i+i%2*20-5;})
    .text(function(d,i){ return d;})
    .style("font-size",13)
    .style("font-family","sans-serif");
    //.style("font-weight","bold");

svg_r.append("text")
  .attr("x",width/2-0.5*padding-20)
    .attr("y",2.3*padding-20)
    .text("Sentiment")
    .style("font-size",13)
    .style("font-family","sans-serif")
    .style("font-weight","bold");

svg_r.append("g")
      .attr("class", "axis")
      .attr("transform", "translate(0," + (height/2 - padding) + ")")
      .call(xAxis)
      .append("text")
        .attr("dx",width/2-2.5*padding+60)
        .attr("dy",-10)
        .text("Critic Score")
        .style("font-weight","bold");
        


  svg_r.append("g")
      .attr("class", "axis")
      .attr("transform", "translate("+ padding + ",0)")
      .call(yAxis)
    .append("text")
      //.attr("transform", "rotate(-90)")
      .attr("dx",-"Audience Score".length*5)
      .attr("dy",padding-13)
      .text("Audience Score")
      .style("font-weight","bold");

});
//padding=50
var cor_og=[0.4739,0.601,0.4607]
var cor_tg=[0.4486,0.8184,0.7789]
var r_og=[17.9,15.6,17.4]
var r_tg=[50.1,31.7,34.6]
var rl_og=[1.9594,2.503,1.6993]
var rl_tg=[2.7934,2.802,1.2836]

var x_l=["opening revenue","gross revenue"]

var xScale1=d3.scale.ordinal()
    .domain(x_l)
    .rangeRoundBands([padding, width/3-padding],0.4);

  var yScale1=d3.scale.linear()
    .domain([0.2,1.0])
    .range([height/2-padding,padding])

var xScale2=d3.scale.ordinal()
  .domain(x_l)
  .rangeRoundBands([padding, width/3-padding+50],0.4)

  var xAxis = d3.svg.axis()
    .scale(xScale2)
    .orient("bottom")
    .ticks(2);

  var yAxis = d3.svg.axis()
    .scale(yScale1)
    .orient("left")
    .ticks(8);

  var bar_width=xScale1.rangeBand()/2.0;

svg_a.selectAll(".bar1")
    .data(cor_og)
    .enter().append("rect")
    .attr("class", "bar1")
    .attr("x", function(d,i) { return xScale1(x_l[0])+i*bar_width; })
    .attr("y", function(d) { return yScale1(d); })
    .attr("width", bar_width)
    .attr("height", function(d) { return height/2-yScale1(d)-padding; })
    .style("fill",function(d,i){ return colorbrewer.YlGnBu[4][i+1];});


svg_a.selectAll(".bar2")
    .data(cor_tg)
    .enter().append("rect")
    .attr("class", "bar2")
    .attr("x", function(d,i) { return xScale1(x_l[1])+i*bar_width+25; })
    .attr("y", function(d) { return yScale1(d); })
    .attr("width", bar_width)
    .attr("height", function(d) { return height/2-yScale1(d)-padding; })
    .style("fill",function(d,i){ return colorbrewer.YlGnBu[4][i+1];});

svg_a.append("g")
      .attr("class", "axis")
      .attr("transform", "translate(0," + (height/2 - padding) + ")")
      .call(xAxis)
      


  svg_a.append("g")
      .attr("class", "axis")
      .attr("transform", "translate("+ padding + ",0)")
      .call(yAxis)
    .append("text")
      //.attr("transform", "rotate(-90)")
      .attr("dx",-"Correlation".length*5)
      .attr("dy",padding-8)
      .text("Correlation")
      .style("font-weight","bold");
xScale1.rangeRoundBands([width/3+padding,2*width/3-padding],0.4);
xScale2.rangeRoundBands([width/3+padding,2*width/3-padding+50],0.4);
yScale1.domain([5.0,55.0])
svg_a.selectAll(".bar3")
    .data(r_og)
    .enter().append("rect")
    .attr("class", "bar3")
    .attr("x", function(d,i) { return xScale1(x_l[0])+i*bar_width; })
    .attr("y", function(d) { return yScale1(d); })
    .attr("width", bar_width)
    .attr("height", function(d) { return height/2-yScale1(d)-padding; })
    .style("fill",function(d,i){ return colorbrewer.YlGnBu[4][i+1];});


svg_a.selectAll(".bar4")
    .data(r_tg)
    .enter().append("rect")
    .attr("class", "bar4")
    .attr("x", function(d,i) { return xScale1(x_l[1])+i*bar_width+25; })
    .attr("y", function(d) { return yScale1(d); })
    .attr("width", bar_width)
    .attr("height", function(d) { return height/2-yScale1(d)-padding; })
    .style("fill",function(d,i){ return colorbrewer.YlGnBu[4][i+1];});


svg_a.append("g")
      .attr("class", "axis")
      .attr("transform", "translate(0," + (height/2 - padding) + ")")
      .call(xAxis)
      

  svg_a.append("g")
      .attr("class", "axis")
      .attr("transform", "translate("+ (width/3+padding) + ",0)")
      .call(yAxis)
    .append("text")
      //.attr("transform", "rotate(-90)")
      .attr("dx",-"RMSE in Million".length*5)
      .attr("dy",padding-8)
      .text("RMSE in 10^6")
      .style("font-weight","bold");

xScale1.rangeRoundBands([2*width/3+padding,3*width/3-padding],0.4);
xScale2.rangeRoundBands([2*width/3+padding,3*width/3-padding+50],0.4);
yScale1.domain([0.75,3.25])
svg_a.selectAll(".bar5")
    .data(rl_og)
    .enter().append("rect")
    .attr("class", "bar5")
    .attr("x", function(d,i) { return xScale1(x_l[0])+i*bar_width; })
    .attr("y", function(d) { return yScale1(d); })
    .attr("width", bar_width)
    .attr("height", function(d) { return height/2-yScale1(d)-padding; })
    .style("fill",function(d,i){ return colorbrewer.YlGnBu[4][i+1];});


svg_a.selectAll(".bar6")
    .data(rl_tg)
    .enter().append("rect")
    .attr("class", "bar6")
    .attr("x", function(d,i) { return xScale1(x_l[1])+i*bar_width+30; })
    .attr("y", function(d) { return yScale1(d); })
    .attr("width", bar_width)
    .attr("height", function(d) { return height/2-yScale1(d)-padding; })
    .style("fill",function(d,i){ return colorbrewer.YlGnBu[4][i+1];});


svg_a.append("g")
      .attr("class", "axis")
      .attr("transform", "translate(0," + (height/2 - padding) + ")")
      .call(xAxis)
      

  svg_a.append("g")
      .attr("class", "axis")
      .attr("transform", "translate("+ (2*width/3+padding) + ",0)")
      .call(yAxis)
    .append("text")
      //.attr("transform", "rotate(-90)")
      .attr("dx",-"RMSLE".length*5)
      .attr("dy",padding-8)
      .text("RMSLE")
      .style("font-weight","bold");

var legend=svg_a.selectAll(".legend")
    .data(["Linear Regression","SVM Regression","Decision Stump"])
    .enter().append("g")
    .attr("class","legend");

var size=30;
var gap=5;

legend.append("rect")
    .attr("x",function(d,i){return 3*padding+i*(7*size+gap);})
    .attr("y",height/2-0.5*padding)
    .attr("width",size)
    .attr("height",size)
    .style("fill",function(d,i){ return colorbrewer.YlGnBu[4][i+1];});

legend.append("text")
    .attr("x",function(d,i){return 3*padding+i*(7*size+gap)+35;})
    .attr("y",height/2-0.5*padding+20)
    .text(function(d){ return d;})
    .style("font-size","13")
    .style("font-family","sans-serif");


})

.controller('ChatDetailCtrl', function($scope, $stateParams, Chats) {
  $scope.chat = Chats.get($stateParams.chatId);
})

.controller('AccountCtrl', function($scope) {
  $scope.settings = {
    enableFriends: true
  };
});
