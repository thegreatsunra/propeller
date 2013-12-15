// load requirejs config file
require([
  './require.config'
  ], function (common) {
  'use strict';

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
