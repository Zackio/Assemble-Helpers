/**
 * Provide a fallback for when a variable is not section
 *
 * Example: {{v variable 'fallback'}}
 *
 * @param  {variable} variable A variable
 * @param  {string} fallback Fallback option
 * @return {template html} Rendered HTML
 */

var Handlebars = require('handlebars');

module.exports = function v(variable, fallback, options) {

	var thing = variable || fallback;

	return new Handlebars.SafeString(thing);

};
