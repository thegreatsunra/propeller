// Scripts go here

  $(function() {
    $('.lead').html('Use this document as a way to quickly start any new project.<br> All you get is this text and a mostly barebones HTML document.');
  });

  // Here's my data model
  var ViewModel = function(first, last) {
      this.firstName = ko.observable(first);
      this.lastName = ko.observable(last);
   
      this.fullName = ko.computed(function() {
          // Knockout tracks dependencies automatically. It knows that fullName depends on firstName and lastName, because these get called when evaluating fullName.
          return this.firstName() + " " + this.lastName();
      }, this);
  };
   
  ko.applyBindings(new ViewModel("Planet", "Earth")); // This makes Knockout get to work