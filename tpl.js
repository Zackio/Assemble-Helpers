/*
* Load a template and pass a variable
*
* When passing a booleon, dont use quotes.
*
* {{tpl 'template-to-load' '{"id": "firstname", "label": "First name"}'}}
* {{tpl 'features' '{"features-hex-white": false, "label": "First name"}'}}
* {{tpl 'features' '{"features-hex-white": false}'}}
*/

var Handlebars = require('handlebars');

// Get my functions module
var fnc = require('./fnc');

module.exports = function tpl(layout, data, sectClass) {

       // Load template
      var template = this.app.getPartial(layout);

      // Get context
      var context = this.context;

      // Check template exists
      fnc.checkTemplate(template);

      // Merge base context and new data
      context = fnc.merge(context, JSON.parse(data));

      // Load the template with the context
      var result = template.render(context);

      // Return the template as HTML
      return new Handlebars.SafeString(result);

  };
