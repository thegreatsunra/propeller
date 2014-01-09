// load requirejs config file
require([
  './require.config'
], function (common) {
  'use strict';

  // test knockout by binding hello world view model
  require([
    'knockout',
    'viewmodel'
  ], function(ko, HelloViewModel){
    // this is where the code goes
    ko.applyBindings(new HelloViewModel('Planet', 'Earth')); // This makes Knockout get to work
  });
});
