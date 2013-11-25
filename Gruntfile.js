module.exports = function(grunt) {

  'use strict';
  require('time-grunt')(grunt);

  grunt.initConfig({
    pkg: grunt.file.readJSON('package.json'),

    /* define variables for Gruntfile */
    config: {
      src: 'src',
      dest: 'dist',
      assetsFolder: 'public',
      componentsFolder: 'components',
      jsFolder: 'js',
      jsMainFile: 'scripts',
      cssFolder: 'css',
      cssMainFile: 'styles',
      imgFolder: 'images',
      appFolder: 'app'
    },

    /* run jshint against all javascripts, including Gruntfile */
    jshint: {
      files: ['Gruntfile.js', '<%= config.src %>/<%= config.jsFolder %>/**/*.js']
    },

    /* copy static assets into root of destination */
    copy: {
      assets: {
        files: [
          {
            expand: true,
            cwd: '<%= config.src %>/<%= config.assetsFolder %>',
            src: '**',
            dest: '<%= config.dest %>/',
            dot: true
          }
        ]
      },
      data: {
        files: [
          {
            expand: true,
            cwd: '<%= config.src %>/data',
            src: '**',
            dest: '<%= config.dest %>/<%= config.appFolder %>/data',
            dot: true
          }
        ]
      },

      js: {
        files: [
          {
            expand: true,
            cwd: '<%= config.src %>/<%= config.jsFolder %>',
            src: '**/*.js',
            dest: '<%= config.dest %>/<%= config.appFolder %>/js',
            dot: true
          }
        ]
      },

      /* copy bower components as well */
      components: {
        files: [
          {
            expand: true,
            cwd: '<%= config.src %>/<%= config.componentsFolder %>',
            src: '**',
            dest: '<%= config.dest %>/<%= config.appFolder %>/<%= config.componentsFolder %>',
            dot: true
          }
        ]
      }
    },

    /* clean out destination folder by brute force */
    clean: {
      main: ['<%= config.dest %>/**/*', '<%= config.dest %>/.htaccess'],
    },

    /* compile LESS manifest file into CSS */
    less: {
      development: {
        options: {
          compress: false
        },
        files: {
          "<%= config.dest %>/<%= config.appFolder %>/<%= config.cssFolder %>/<%= config.cssMainFile %>.css": "<%= config.src %>/<%= config.cssFolder %>/<%= config.cssMainFile %>.less"
        }
      },
      production: {
        options: {
          compress: true
        },
        files: {
          "<%= config.dest %>/<%= config.appFolder %>/<%= config.cssFolder %>/<%= config.cssMainFile %>.min.css": "<%= config.src %>/<%= config.cssFolder %>/<%= config.cssMainFile %>.less"
        }
      }
    },

    /* Use Assemble to generate all HTML pages */
    assemble: {
      pages: {
        options: {
          flatten: true,
          layout: '<%= config.src %>/assemble/layouts/default.hbs',
          data: '<%= config.src %>/assemble/data/*.{json,yml}',
          partials: '<%= config.src %>/assemble/partials/*.hbs'
        },
        files: {
          '<%= config.dest %>/': ['<%= config.src %>/assemble/pages/*.hbs']
        }
      }
    },

    /* connect server */
    connect: {
      options: {
        port: 9000,
        livereload: 35729,
        // change this to '0.0.0.0' to access the server from outside
        hostname: 'localhost'
      },
      livereload: {
        options: {
          open: true,
          base: [
            '<%= config.dest %>'
          ]
        }
      }
    },

    /* watch for file changes and run tasks in response */
    watch: {
      js: {
        files: ['<%= jshint.files %>'],
        tasks: ['jshint', 'copy:js']
      },
      assemble: {
        files: ['<%= config.src %>/assemble/**/*.{hbs,yml}'],
        tasks: ['assemble']
      },
      less: {
        files: ['<%= config.src %>/<%= cssFolder %>/**/*.{css,less}'],
        tasks: ['less']
      },
      livereload: {
        options: {
          livereload: '<%= connect.options.livereload %>'
        },
        files: [
          '<%= config.dest %>/**/*.html',
          '<%= config.dest %>/<%= config.cssFolder %>/**/*.css',
          '<%= config.dest %>/<%= config.jsFolder %>/**/*.js'
        ]
      }
    },

  });

  grunt.loadNpmTasks('assemble');
  grunt.loadNpmTasks('grunt-contrib-copy');
  grunt.loadNpmTasks('grunt-contrib-clean');
  grunt.loadNpmTasks('grunt-contrib-connect');
  grunt.loadNpmTasks('grunt-contrib-watch');
  grunt.loadNpmTasks('grunt-contrib-less');
  grunt.loadNpmTasks('grunt-contrib-uglify');
  grunt.loadNpmTasks('grunt-contrib-jshint');
  grunt.loadNpmTasks('grunt-contrib-concat');

  grunt.registerTask('build', [
    'clean', 
    'less', 
    'assemble',
    'jshint', 
    'copy',
  ]);

  grunt.registerTask('server', [
    'build',
    'connect',
    'watch'
  ]);

  grunt.registerTask('default', [
    'build'
  ]);
};
