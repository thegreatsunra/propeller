require.config({
  baseUrl: '',
  paths: {
    jquery: 'bower_components/bootstrap/assets/js/jquery',
    bootstrap: 'bower_components/bootstrap/dist/js/bootstrap.min',
    knockout: 'bower_components/knockout.js/knockout-2.3.0.debug',
    csvtojson: 'bower_components/csv-to-json/src/js/csv-to-json',
    scripts: 'js/scripts',
    viewmodel: 'js/viewmodel'
  },
  shim: {
  'bootstrap':{deps: ['jquery']}
  }
});
