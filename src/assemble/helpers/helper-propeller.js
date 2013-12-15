(function() {
  module.exports.register = function(Handlebars, options, params) {

    /**
     * Helper name
     * @param  {[type]} str [description]
     * @return {[type]}     [description]
     */
    Handlebars.registerHelper('propeller', function(str) {
      var content = '<strong>' + str + '</strong>';
      return new Handlebars.SafeString(content);
    });

  };
}).call(this);
