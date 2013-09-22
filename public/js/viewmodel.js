define(['knockout'], function (ko) {
  'use strict';

  // Here's my data model
  var ViewModel = function(first, last) {
    var self = this;
    self.firstName = ko.observable(first);
    self.lastName = ko.observable(last);
  
    self.fullName = ko.computed(function() {
      // Knockout tracks dependencies automatically. It knows that fullName depends on firstName and lastName, because these get called when evaluating fullName.
      return self.firstName() + " " + self.lastName();
    }, self);
  };

  return ViewModel;
});
