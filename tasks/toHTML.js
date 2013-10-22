// Thank you Rob Dodson

'use strict';

var path = require('path')
  , request = require('request')
  , fs = require('fs')
  , _ = require('lodash');

module.exports = function(grunt) {
  grunt.registerMultiTask('toHTML', 'Render Express routes to flat HTML files', function() {
    var done = this.async()
      , routes = _.keys(this.data)
      , taskData = this.data
      , total = routes.length
      , counter = 0;

    routes.forEach(function(route) {
      var dest = taskData[route];
      request('http://localhost:3000' + route, function(err, res, body) {
        if (!err && res.statusCode == 200) {
          grunt.file.mkdir(path.dirname(dest));
          fs.writeFileSync(dest, body);
          counter += 1; // hack, replace with promises
          if (counter === total) {
            done(true);
          }
        } else {
          done(false);
        }
      });
    });
  });
};
