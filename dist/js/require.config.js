require.config({
  baseUrl: '',
  paths: {
    jquery: 'bower_components/bootstrap/assets/js/jquery',
    bootstrap: 'bower_components/bootstrap/dist/js/bootstrap',
    knockout: 'bower_components/knockout.js/knockout-2.3.0.debug',
    'csv-js': 'bower_components/csv-js/src/csv',
    moment: 'bower_components/moment/moment',
    d3: 'bower_components/d3/d3',
    underscore: 'bower_components/underscore/underscore',
    scripts: 'js/scripts',
    viewmodel: 'js/viewmodel'
  },
  shim: {
  bootstrap: {deps: ['jquery']},
  underscore: {exports: '_'}
  }
});
