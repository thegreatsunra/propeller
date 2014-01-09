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
});
