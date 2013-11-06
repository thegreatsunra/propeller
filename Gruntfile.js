module.exports = function(grunt) {

  // Project configuration.
  grunt.initConfig({
    pkg: grunt.file.readJSON('package.json'),
    nodemon: {
      prod: {
        options: {
          file: 'app.js',
          ignoredFiles: ['dist'],
          watchedExtensions: ['js', 'hbs', 'csv']
        }
      }
    },
    less: {
      development: {
        files: {
          'public/app/css/styles.css': 'public/app/less/styles.less'
        }
      },
      production: {
        files: {
          'public/app/css/styles.css': 'public/app/less/styles.less'
        }
      }
    },
    watch: {
      css: {
        files: 'public/app/less/*.less',
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
    clean: ['dist'],
    toHTML: {
      default: {
        '/index.html' : 'dist/index.html',
        '/about.html' : 'dist/about.html',
        '/contact.html' : 'dist/contact.html'
      }
    },
    copy: {
      main: {
        files: [
          {expand: true, cwd: 'public/', src: '**', dest: 'dist/'}
        ]
      }
    }
  });

  // Load plugins that provide NPM tasks
  grunt.loadNpmTasks('grunt-contrib-less');
  grunt.loadNpmTasks('grunt-contrib-watch');
  grunt.loadNpmTasks('grunt-contrib-clean');
  grunt.loadNpmTasks('grunt-contrib-copy');
  grunt.loadNpmTasks('grunt-nodemon');
  grunt.loadNpmTasks('grunt-concurrent');

  // load custom tasks
  grunt.loadTasks('tasks');

  // Default task(s).
  grunt.registerTask('default', ['concurrent:server']);
  grunt.registerTask('dist', ['clean', 'toHTML', 'copy']);
};
