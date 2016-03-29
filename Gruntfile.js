// Generated using generator-propeller 0.5.8
'use strict';

// # Globbing
// for performance reasons we're only matching one level down:
// 'test/spec/{,*/}*.js'
// use this if you want to recursively match all subfolders:
// 'test/spec/**/*.js'

module.exports = function (grunt) {

  // Load grunt tasks automatically
  require('load-grunt-tasks')(grunt);

  // Time how long tasks take. Can help when optimizing build times
  require('time-grunt')(grunt);

  grunt.initConfig({

    // Project settings
    yeoman: {
      // configurable paths
      app: require('./bower.json').appPath || 'app',
      dist: 'dist'
    },

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
      fontsFolder:      'app/fonts',
      cssMainFile:      'styles',
      jsMainFile:       'scripts'
    },

    // watch for file changes and run tasks in response
    watch: {
      js: {
        files: ['<%= config.src %>/<%= config.jsFolder %>/**/*.js'],
        tasks: ['jshint', 'copy:dist'],
        options: {
          livereload: true
        }
      },
      gruntfile: {
        files: ['Gruntfile.js']
      },
      pages: {
        files: ['<%= config.src %>/assemble/pages/**/*.hbs'],
        tasks: ['assemble']
      },
      assemble: {
        files: ['<%= config.src %>/assemble/{helpers,layouts,partials}/**/*.{hbs,yml,json,js}'],
        tasks: ['assemble']
      },
      yml: {
        files: ['<%= config.src %>/assemble/*.yml'],
        tasks: ['assemble']
      },
      css: {
        files: ['<%= config.src %>/<%= config.cssFolder %>/**/*'],
        tasks: ['copy:dist']
      },
      img: {
        files: ['<%= config.src %>/<%= config.imgFolder %>/**/*'],
        tasks: ['copy:dist']
      },
      livereload: {
        options: {
          livereload: '<%= connect.options.livereload %>'
        },
        files: [
          '<%= config.dist %>/**/*.html',
          '<%= config.dist %>/<%= config.cssFolder %>/**/*.css',
          '<%= config.dist %>/<%= config.jsFolder %>/**/*.js',
          '<%= config.dist %>/<%= config.fontsFolder %>/**/*',
          '<%= config.dist %>/<%= config.imgFolder %>/**/*'
        ]
      }
    },

    // The actual grunt server settings
    connect: {
      options: {
        port: 9000,
        // Change this to '0.0.0.0' to access the server from outside.
        hostname: 'localhost',
        livereload: 35729
      },
      livereload: {
        options: {
          open: true,
          base: [
            '<%= config.dist %>'
          ]
        }
      },
      dist: {
        options: {
          base: '<%= config.dist %>'
        }
      }
    },

    // Make sure code styles are up to par and there are no obvious mistakes
    jshint: {
      options: {
        jshintrc: '.jshintrc',
        reporter: require('jshint-stylish'),
        force: true
      },
      all: [
        'Gruntfile.js',
        '<%= config.src %>/<%= config.jsFolder %>/**/*.js'
      ],
    },

    // Empties folders to start fresh
    clean: {
      dist: {
        files: [{
          dot: true,
          src: [
            '.tmp',
            '<%= config.dist %>/*',
            '!<%= yeoman.dist %>/.git*'
          ]
        }]
      },
      server: '.tmp'
    },

    // Copies remaining files to places other tasks can use
    copy: {
      dist: {
        files: [{
          expand: true,
          dot: true,
          cwd: '<%= config.src %>',
          dest: '<%= config.dist %>',
          src: [
            '*.{ico,png,txt,xml}',
            '.htaccess',
            '*.html',
            'views/**/*.html',
            '<%= config.componentsFolder %>/**/*',
            '<%= config.cssFolder %>/**/*',
            '<%= config.imgFolder %>/**/*',
            '<%= config.fontsFolder %>/**/*',
            '<%= config.imgFolder %>/**/*',
            '<%= config.jsFolder %>/**/*.js'
          ]
        }]
      }
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

    // Use Assemble to generate all HTML pages
    assemble: {
      pages: {
        options: {
          flatten: true,
          layout: '<%= config.src %>/assemble/layouts/default.hbs',
          data: '<%= config.src %>/assemble/*.yml',
          partials: '<%= config.src %>/assemble/partials/**/*.hbs'
        },
        files: {
          '<%= config.dist %>/': ['<%= config.src %>/assemble/pages/**/*.hbs']
        }
      }
    }
  });

  // create server task
  grunt.registerTask('serve', [
    'connect:livereload',
    'watch'
  ]);

  grunt.registerTask('server', function () {
    grunt.log.warn('The `server` task has been deprecated. Use `grunt serve` to start a server.');
    grunt.task.run(['serve']);
  });

  grunt.registerTask('build', [
    'clean',
    'jshint',
    'copy',
    'assemble'
  ]);

  // set default grunt task
  grunt.registerTask('default', [
    'build'
  ]);
};
