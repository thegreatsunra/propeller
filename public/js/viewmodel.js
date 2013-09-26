define(['jquery', 'knockout', 'csv-js'], function ($, ko, CSV) {
  'use strict';

  // Here's my data model
  var ViewModel = function(first, last) {
    var self = this;
    self.places = ko.observable(CSVtoJSON('places'));
    self.firstName = ko.observable(first);
    self.lastName = ko.observable(last);
  
    self.fullName = ko.computed(function() {
      // Knockout tracks dependencies automatically. It knows that fullName depends on firstName and lastName, because these get called when evaluating fullName.
      return self.firstName() + " " + self.lastName();
    }, self);
  };
  return ViewModel;

  function CSVtoJSON(data) {
    var dataPath = 'data/'
      , extension = '.csv'
      , dataURL = dataPath + data + extension
      , output = null;
    $.ajax({
      url: dataURL,
      type: 'get',
      datatype: 'text',
      async: false,
      success: function(data) {
        output = CSV.parse(data)
      }
    });
    return output;
  };

});
