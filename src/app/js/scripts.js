// load requirejs config file
require([
  './require.config'
  ], function (common) {
  'use strict';

  // test jquery by appending HTML content
  require([
    'jquery', 
    ], function($){
      // this is where the code goes
      $(function() {
        $('.lead').html('Use this document as a way to quickly start any new project.<br> All you get is this text and a mostly barebones HTML document.');
      });
  });

  // test knockout by binding hello world view model
  require([
    'knockout',
    'viewmodel'
    ], function(ko, HelloViewModel){
      // this is where the code goes
      ko.applyBindings(new HelloViewModel("Planet", "Earth")); // This makes Knockout get to work
  });

  // add bootstrap javascript
  require([
    'jquery',
    'bootstrap'
    ], function($, bootstrap){
      // any JavaScript that requires bootstrap should go here
      //
      //
      //
  });

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
      var w = 500;
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
            return h - (d.value * 4);
          })
          .attr("width", w / data.length - barPadding)
          .attr("height", function(d) {
            return d.value * 4;
          });
      }
  });

  // Test MomentJS
  require([
    'jquery',
    'moment'
    ], function($, moment){
      function updateTime(){
        $('#moment-target').text(moment().format('MMMM Do YYYY, h:mm:ss a'));
      }
      $(function(){
          updateTime();
          setInterval(updateTime, 1000);
      });
  });
});
