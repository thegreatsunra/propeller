// load requirejs config file
require(['./require.config'], function (common) {

  // test jquery by appending HTML content
  require([
    'jquery', 
    ], function($){
      'use strict';
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
      'use strict';
      // this is where the code goes
      ko.applyBindings(new HelloViewModel("Planet", "Earth")); // This makes Knockout get to work
  });

  // add bootstrap javascript
  require([
    'jquery',
    'bootstrap'
    ], function($, bootstrap){
      'use strict';
      // any JavaScript that requires bootstrap should go here
      //
      //
      //
  });

  // test jquery by appending HTML content
  require([
    'd3', 
    ], function(){
      'use strict';
      // this is where the code goes

      // D3 code sample from
      // Interactive Data Visualization for the Web
      // by Scott Murray (O’Reilly).
      // http://chimera.labs.oreilly.com/books/1230000000345/ch06.html#interactive_6-4

      //Width and height
      var w = 500;
      var h = 100;
      var barPadding = 1;
      
      var dataset = [ 5, 10, 13, 19, 21, 25, 22, 18, 15, 13,
              11, 12, 15, 20, 18, 17, 16, 18, 23, 25 ];
      
      //Create SVG element
      var svg = d3.select("#d3-target")
        .append("svg")
        .attr("width", w)
        .attr("height", h);

      svg.selectAll("rect")
        .data(dataset)
        .enter()
        .append("rect")
        .attr("x", function(d, i) {
          return i * (w / dataset.length);
       })
       .attr("y", function(d) {
          return h - (d * 4);
       })
       .attr("width", w / dataset.length - barPadding)
       .attr("height", function(d) {
          return d * 4;
    });
  });

  // Test MomentJS
  require([
    'jquery',
    'moment'
    ], function($, moment){
      'use strict';
      function updateTime(){
        $('#moment-target').text(moment().format('MMMM Do YYYY, h:mm:ss a'));
      }
      $(function(){
          updateTime();
          setInterval(updateTime, 1000);
      })
  });
});


