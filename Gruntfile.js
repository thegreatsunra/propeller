module.exports = function(grunt) {

  // Project configuration.
  grunt.initConfig({
    pkg: grunt.file.readJSON('package.json'),
    nodemon: {
      prod: {
        options: {
          file: 'app.js',
          ignoredFiles: ['dist'],
          watchedExtensions: ['js', 'hbs']
        }
      }
    },
    less: {
      development: {
        files: {
          'public/css/styles.css': 'public/less/styles.less'
        }
      },
      production: {
        files: {
          'public/css/styles.css': 'public/less/styles.less'
        }
      }
    },
    watch: {
      css: {
        files: 'public/less/*.less',
        tasks: ['less'],
        options: {
          livereload: true,
        }
      }
    },
    concurrent: {
      server: ['nodemon', 'watch'],
      options: {
        logConcurrentOutput: true
      }
    },    
  });

  // Load plugins that provide NPM tasks
  grunt.loadNpmTasks('grunt-contrib-less');
  grunt.loadNpmTasks('grunt-contrib-watch');
  grunt.loadNpmTasks('grunt-nodemon');
  grunt.loadNpmTasks('grunt-concurrent');

  // Default task(s).
  grunt.registerTask('default', ['concurrent:server']);
};
