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

});





