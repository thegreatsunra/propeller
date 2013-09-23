require.config({
  baseUrl: '',
  paths: {
    jquery: 'bower_components/bootstrap/assets/js/jquery',
    bootstrap: 'bower_components/bootstrap/dist/js/bootstrap.min',
    knockout: 'bower_components/knockoutjs/build/output/knockout-latest.debug',
    scripts: 'js/scripts',
    viewmodel: 'js/viewmodel'
  },
  shim: {
  'bootstrap':{deps: ['jquery']}
  }
});
