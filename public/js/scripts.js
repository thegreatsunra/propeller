//Load common code that includes config
require(['./require.config'], function (common) {
  require([
    'jquery', 
    'bootstrap',
    'knockout',
    'viewmodel'
    ], function($, _bootstrap, ko, HelloViewModel){
      'use strict';
      // this is where all the site code should begin


      $(function() {
        $('.lead').html('Use this document as a way to quickly start any new project.<br> All you get is this text and a mostly barebones HTML document.');
      });

      ko.applyBindings(new HelloViewModel("Planet", "Earth")); // This makes Knockout get to work

  });
});





