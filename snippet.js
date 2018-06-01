/**
 * Helper for adding code snippets
 *
 * className is wrapping divs class
 *
 * Example:
 * {{#snippet className}}
 *	<div class="code-example"></div>
 * {{/snippet}}
 **/


var Handlebars = require('handlebars');

module.exports = function snippet(content, options) {
  	// Content is passed in variables but content becomes options
  	// if none has been paseed content becomes options
  	if( options ) {
  		sectClass = ' ' + content;
  	} else {
  		options = content;
  		sectClass = '';
  	}
    var html = '<div class="code-example' + sectClass +'">' + options.fn(this) + '</div><!-- End .code-example -->';
        html += '\n\n```html\n' + options.fn(this) + '\n```\n';
    return new Handlebars.SafeString(html);
};
