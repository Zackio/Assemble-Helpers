/*

Future help:

https://github.com/shannonmoeller/handlebars-layouts/issues/15
https://github.com/jonschlinkert/template/issues/25

 */

// If Handlebar functions are required
var Handlebars = require('handlebars');

module.exports = function choosemenu(att1, options) {

	var html = "Some HTML data to pass back";

	// Get options
	var options = options || att1;
	
	// Get data
	var globalData = this.context;

	var dataValue = globalData.usedemomenu;

	// Get a value
	console.log( globalData.usedemomenu );

	// Compile handlebars code
	template = Handlebars.compile('{{#each onepagemenu}}{{>menu}}{{/each}}')
	html = template(this.context);

	// Return HTML
	return new Handlebars.SafeString(html);
};