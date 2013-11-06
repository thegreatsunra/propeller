require.config({
  baseUrl: '',
  paths: {
    jquery: 'app/components/jquery/jquery',
    bootstrap: 'app/components/bootstrap/dist/js/bootstrap',
    knockout: 'app/components/knockout.js/knockout-2.3.0.debug',
    'csv-js': 'app/components/csv-js/src/csv',
    moment: 'app/components/moment/moment',
    d3: 'app/components/d3/d3',
    lodash: 'app/components/lodash/dist/lodash',
    scripts: 'app/js/scripts',
    viewmodel: 'app/js/viewmodel'
  },
  shim: {
  bootstrap: {deps: ['jquery']}
  }
});
