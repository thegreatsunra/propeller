// load requirejs config file
require([
  './require.config'
  ], function (common) {
  'use strict';

  // test d3 by adding example visualization with csv data
  require([
    'd3',
    'lodash' 
    ], function(){
      // this is where the code goes

      // D3 code sample from
      // Interactive Data Visualization for the Web
      // by Scott Murray (O’Reilly).
      // http://chimera.labs.oreilly.com/books/1230000000345/ch06.html#interactive_6-4

      //Width and height
      var w = 800;
      var h = 100;
      var barPadding = 1;
      var dataset = [];

      d3.csv("app/data/numbers.csv", function(d) {
        return {
          id: +d.id,
          value: +d.value
        };
      }, function(error, rows) {
        dataset = rows;
        createD3Viz(dataset);
      });

      function createD3Viz(data) {
        data = _.sortBy(data, 'value');
        
        //Create SVG element
        var svg = d3.select("#d3-target")
          .append("svg")
          .attr("width", w)
          .attr("height", h);

        svg.selectAll("rect")
          .data(data)
          .enter()
          .append("rect")
          .attr("x", function(d, i) {
            return i * (w / data.length);
          })
          .attr("y", function(d) {
            return h - (d.value / 10);
          })
          .attr("width", w / data.length - barPadding)
          .attr("height", function(d) {
            return d.value / 10;
          });
      }
  });
});



