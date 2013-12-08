module.exports = function(grunt) {
  'use strict';

  require('time-grunt')(grunt);

  grunt.initConfig({
    pkg: grunt.file.readJSON('package.json'),

    // define variables for Gruntfile
    config: {
      src:              'src',
      dist:             'dist',
      appFolder:        'app',
      componentsFolder: 'app/components',
      jsFolder:         'app/js',
      cssFolder:        'app/css',
      imgFolder:        'app/img',
      dataFolder:       'app/data',
      cssMainFile:      'styles',
      jsMainFile:       'scripts'
    },

    // concat all javascripts into a single file
    concat: {
      options: {
        separator: ';'
      },
      dist: {
        src: ['<%= config.src %>/<%= config.jsFolder %>/**/*.js'],
        dest: '<%= config.dist %>/<%= config.jsFolder %>/<%= config.jsMainFile %>.js'
      }
    },

    // compress concatenated javascripts
    uglify: {
      options: {
        banner: '/*! <%= config.jsMainFile %>.js (generated <%= grunt.template.today("dd-mm-yyyy") %>) */\n'
      },
      dist: {
        files: {
          '<%= config.dist %>/<%= config.jsFolder %>/<%= config.jsMainFile %>.min.js': ['<%= concat.dist.dest %>']
        }
      }
    },

    // run jshint against all javascripts, including Gruntfile
    jshint: {
      files: ['Gruntfile.js', '<%= config.src %>/<%= config.jsFolder %>/*.js']
    },

    // copy assets into root of destination
    copy: {
      data: {
        files: [
          {
            expand: true,
            cwd: '<%= config.src %>/<%= config.dataFolder %>',
            src: '**',
            dest: '<%= config.dist %>/<%= config.dataFolder %>',
          }
        ]
      },

      img: {
        files: [
          {
            expand: true,
            cwd: '<%= config.src %>/<%= config.imgFolder %>',
            src: '**',
            dest: '<%= config.dist %>/<%= config.imgFolder %>',
          }
        ]
      },

      js: {
        files: [
          {
            expand: true,
            cwd: '<%= config.src %>/<%= config.jsFolder %>',
            src: '**/*.js',
            dest: '<%= config.dist %>/<%= config.jsFolder %>',
          }
        ]
      },

      src: {
        files: [
          {
            expand: true,
            cwd: '<%= config.src %>/',
            src: ['*', '!assemble'],
            dest: '<%= config.dist %>/',
            dot: true
          }
        ]
      },

      // copy bower components as well
      components: {
        files: [
          {
            expand: true,
            cwd: '<%= config.src %>/<%= config.componentsFolder %>',
            src: '**',
            dest: '<%= config.dist %>/<%= config.componentsFolder %>',
            dot: true
          }
        ]
      }
    },

    // clean out destination folder by brute force
    clean: {
      main: ['<%= config.dist %>/**/*', '<%= config.dist %>/.htaccess', '<%= config.src %>/assemble/<%= config.dataFolder %>/*.json'],
    },

    // compile LESS manifest file into CSS
    less: {
      development: {
        options: {
          compress: false
        },
        files: {
          "<%= config.dist %>/<%= config.cssFolder %>/<%= config.cssMainFile %>.css": "<%= config.src %>/<%= config.cssFolder %>/<%= config.cssMainFile %>.less"
        }
      },
      production: {
        options: {
          compress: true
        },
        files: {
          "<%= config.dist %>/<%= config.cssFolder %>/<%= config.cssMainFile %>.min.css": "<%= config.src %>/<%= config.cssFolder %>/<%= config.cssMainFile %>.less"
        }
      }
    },

    // Use Assemble to generate all HTML pages
    assemble: {
      options: {
        plugins: ['assemble-contrib-permalinks']
      },
      pages: {
        options: {
          flatten: true,
          layout: '<%= config.src %>/assemble/layouts/default.hbs',
          data: '<%= config.src %>/assemble/data/*.{json,yml}',
          partials: '<%= config.src %>/assemble/partials/*.hbs'
        },
        files: {
          '<%= config.dist %>/': ['<%= config.src %>/assemble/pages/**/*.hbs']
        }
      }
    },

    // create connect server
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
            '<%= config.dist %>'
          ]
        }
      }
    },

    // watch for file changes and run tasks in response
    watch: {
      js: {
        files: ['<%= jshint.files %>'],
        tasks: ['jshint', 'copy:js']
      },
      assemble: {
        files: ['<%= config.src %>/assemble/**/*.{hbs,yml,json}'],
        tasks: ['assemble']
      },
      less: {
        files: ['<%= config.src %>/<%= config.cssFolder %>/*.{css,less}'],
        tasks: ['less']
      },
      data: {
        files: ['<%= config.src %>/<%= config.dataFolder %>/*.csv'],
        tasks: ['convert']
      },
      livereload: {
        options: {
          livereload: '<%= connect.options.livereload %>'
        },
        files: [
          '<%= config.dist %>/**/*.html',
          '<%= config.dist %>/<%= config.cssFolder %>/*.css',
          '<%= config.dist %>/<%= config.jsFolder %>/*.js'
        ]
      }
    },

    // convert all CSV files into JSON files
    convert: {
      csvs: {
        files: [
          {
            expand: true,
            cwd: '<%= config.src %>/<%= config.dataFolder %>/',
            src: ['*.csv'],
            dest: '<%= config.src %>/assemble/data/',
            ext: '.json'
          }
        ]
      }
    }
  });

  // automatically load all grunt-* tasks in --save-dev
  require('load-grunt-tasks')(grunt);

  // load assemble manually because it doesn't match the grunt-* pattern
  grunt.loadNpmTasks('assemble');

  // create build task
  grunt.registerTask('build', [
    'clean',
    'convert',
    'less', 
    'jshint', 
    'copy',
    'assemble'
  ]);

  // create server task
  grunt.registerTask('server', [
    'connect',
    'watch'
  ]);

  // set default grunt task
  grunt.registerTask('default', [
    'server'
  ]);
};
