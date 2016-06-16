
var p = 2,
    
    reservoirs = true;


var width = 1290,//Math.max(960, window.innerWidth),
    height = 800,//Math.max(500, window.innerHeight),
    prefix = prefixMatch(["webkit", "ms", "Moz", "O"]);

var tile = d3.geo.tile()
    .size([width, height]);p
var projection = d3.geo.mercator()
    .scale((1 << 21) / 6 / Math.PI)
    .translate([-width / 2, -height / 2]); // just temporary

var tileProjection = d3.geo.mercator();

var tilePath = d3.geo.path()
    .projection(tileProjection);

var zoom = d3.behavior.zoom()
    .scale(projection.scale() * 2 * Math.PI)
    //.scaleExtent([1 << 20, 1 << 23])
    .translate(projection([103.8099, 1.3502]).map(function(x) { return -x; }))
    .on("zoom", zoomed);

var map = d3.select("body").append("div")
    .attr("class", "map")
    .style("width", width + "px")
    .style("height", height + "px")
    .style("top", "450px")
    .style("left", "400px")
    .style("background-color","white")
    .call(zoom)
    .on("mousemove", mousemoved);



var layerWater = map.append("div")
    .attr("class", "layerWater")
    .style("opacity", 0.7);

var layerRoads = map.append("div")
    .attr("class", "layerRoads")
    .style("opacity", 0.5);

var layerReservoirs = map.append("div")
    .attr("class", "layerReservoirs")
    .append("svg")
    .style("width", width + "px")
    .style("height", height + "px")
    .style("top", "200px")
    .style("left", "200px")
    .call(d3.behavior.zoom()
      .on("zoom", function () {
                    layerReservoirs.attr("transform", "translate(" + d3.event.translate + ")" + " scale(" + d3.event.scale + ")")
                    }))
    .append("g")



var info = map.append("div")
    .attr("class", "info");




zoomed();  //fonction principale




function zoomed() {
  var tiles = tile
      .scale(zoom.scale())
      .translate(zoom.translate())
      ();

  projection
      .scale(zoom.scale() / 2 / Math.PI)
      .translate(zoom.translate());



  var imageWater = layerWater
      .style(prefix + "transform", matrix3d(tiles.scale, tiles.translate))
      .selectAll(".tileWater")
      .data(tiles, function (d) {
          return d; });

  imageWater.exit()
    .each(function (d) {
        this._xhr.abort();
    })
    .remove();

  imageWater.enter().append("svg")
      .attr("class", "tileWater")
      .style("left", function (d) {
          return d[0] * 256 + "px";
      })
      .style("top", function (d) {
          return d[1] * 256 + "px";
      })
      .each(function (d) {
          var svg = d3.select(this),
              openStreetMapType = 'vectiles-water-areas', //'vectiles-land-usages', //'vectiles-buildings', //'vectiles-highroad'
              //                        url = "http://" + ["a", "b", "c"][(d[0] * 31 + d[1]) % 3] + ".tile.openstreetmap.us/vectiles-highroad/" + d[2] + "/" + d[0] + "/" + d[1] + ".json";
              url = "http://" + ["a", "b", "c"][(d[0] * 31 + d[1]) % 3] + ".tile.openstreetmap.us/" + openStreetMapType + "/" + d[2] + "/" + d[0] + "/" + d[1] + ".json";
          this._xhr = d3.json(url, function (error, json) {
              var k = Math.pow(2, d[2]) * 256; // size of the world in pixels

              tilePath.projection()
                  .translate([k / 2 - d[0] * 256, k / 2 - d[1] * 256]) // [0°,0°] in pixels
              .scale(k / 2 / Math.PI);

              svg.selectAll("path")
                  .data(json.features.sort(function (a, b) {
                      return a.properties.sort_key - b.properties.sort_key;
                  }))
                  .enter().append("path")
                  .attr("class", function (d) {
                      return d.properties.kind;
                  })
                  .attr("d", tilePath);
          });
      });

  var imageRoads = layerRoads
      .style(prefix + "transform", matrix3d(tiles.scale, tiles.translate))
      .selectAll(".tileRoad")
      .data(tiles, function (d) {
          return d;
      });

  imageRoads.exit()
      .each(function (d) {
          this._xhr.abort();
      })
      .remove();

  imageRoads.enter().append("svg")
      .attr("class", "tileRoad")
      .style("left", function (d) {
          return d[0] * 256 + "px";
      })
      .style("top", function (d) {
          return d[1] * 256 + "px";
      })
      .each(function (d) {
          var svg = d3.select(this),
              openStreetMapType = 'vectiles-highroad',
              //                        url = "http://" + ["a", "b", "c"][(d[0] * 31 + d[1]) % 3] + ".tile.openstreetmap.us/vectiles-highroad/" + d[2] + "/" + d[0] + "/" + d[1] + ".json";
              url = "http://" + ["a", "b", "c"][(d[0] * 31 + d[1]) % 3] + ".tile.openstreetmap.us/" + openStreetMapType + "/" + d[2] + "/" + d[0] + "/" + d[1] + ".json";


          this._xhr = d3.json(url, function (error, json) {
              var k = Math.pow(2, d[2]) * 256; // size of the world in pixels

              tilePath.projection()
                  .translate([k / 2 - d[0] * 256, k / 2 - d[1] * 256]) // [0°,0°] in pixels
              .scale(k / 2 / Math.PI);

              svg.selectAll("path")
                  .data(json.features.sort(function (a, b) {
                      return a.properties.sort_key - b.properties.sort_key;
                  }))
                  .enter().append("path")
                  .attr("class", function (d) {
                      return d.properties.kind;
                  })
                  .attr("d", tilePath);


          });
      });

  if (reservoirs) {
 
    var myData = null;
    d3.tsv("../static/data/Singapore_water_treatment_infrastructures_final.txt")
      .row(function (d,i) {
        return {
          ReservoirName: d.Name,
          longitude: +d.Longitude,
          latitude: +d.Latitude,
          type: d.type
                
        };
      })
      .get(function(error, rows) {
        console.log(rows);
        if (rows.length >0){
          console.log("First row: ", rows[0])
          console.log("Last row: ", rows[rows.length-1])      
        }
        myData = rows;// Now you can assign it
        x = d3.scale.linear()
          .domain(d3.extent(rows, function(row) {return row.longitude; }))
          .range([0, 830]);
          
        y = d3.scale.linear()
          .domain(d3.extent(rows, function(row) {return row.latitude; }))
          .range([250, 0]);

        draw();// Now you can draw it




        function draw() {
          //console.log(myData);// will trace the data that was loaded
          console.log("Loaded" + rows.length + " rows");
          // Here you can draw your visualization

          var color = d3.scale.category10();

              layerReservoirs.selectAll("circle")  
                  .data(myData)
                  .enter()      
                  .append("text")
                  .style("opacity", 0)
                  .attr("class", "dot")
                  .style("fill", function(d) { return color(d.type)})
                  .style("background-color","white")
                  .attr("x", function(d){return x(d.longitude)+285 + 5+ (x(d.longitude) / 40)})
                  .attr("y", function(d){return y(d.latitude)+256 + 8+ (y(d.latitude) / 20)})
                  .text(function(d){return d.ReservoirName})
                  .on("mouseover", function(d) {
                    var nodeSelection = d3.select(this).style({opacity:'1.0'});
                    nodeSelection.select("text").style({opacity:'2.0'});
                  })
                  .attr('display', "none");  

              layerReservoirs.selectAll("circle")  
              .data(myData)
              .enter()      
              .append("circle") 
              .style("opacity", 0)
              .attr("class", "dot")
              //.style("fill", "#1074f4")
              .style("fill", function(d) { return color(d.type)})
              .attr("r", 5)
              .attr("cx", function(d) { return x(d.longitude) +285})
              .attr("cy", function(d) { return y(d.latitude) +256})
              .attr('display', "none");  
                


            d3.selectAll(".filter_options input").on("change", function() {
            var type = this.id, 
            display = this.checked ? "inline" : "none";
            console.log(type);
            console.log(display);

            layerReservoirs.selectAll(".dot")
              .filter(function(d) { 

                console.log(d.type)
                return d.type == type; 

              })
              .style("opacity", 15)
              .attr('display', display);

            });

  
        }        

      });

  } //fin du if resevoirs
}

function mousemoved() {
  info.text(formatLocation(projection.invert(d3.mouse(this)), zoom.scale()));
}

function matrix3d(scale, translate) {
  var k = scale / 256, r = scale % 1 ? Number : Math.round;
  return "matrix3d(" + [k, 0, 0, 0, 0, k, 0, 0, 0, 0, k, 0, r(translate[0] * scale), r(translate[1] * scale), 0, 1 ] + ")";
}

function prefixMatch(p) {
  var i = -1, n = p.length, s = document.body.style;
  while (++i < n) if (p[i] + "Transform" in s) return "-" + p[i].toLowerCase() + "-";
  return "";
}

function formatLocation(p, k) {
  var format = d3.format("." + Math.floor(Math.log(k) / 2 - 2) + "f");
  return (p[1] < 0 ? format(-p[1]) + "°S" : format(p[1]) + "°N") + " "
       + (p[0] < 0 ? format(-p[0]) + "°W" : format(p[0]) + "°E");
}








