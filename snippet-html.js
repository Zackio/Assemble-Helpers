var Handlebars = require('handlebars');
var Markdown = require('helper-markdown');

module.exports = function snippet(content, options) {
  	// Content is passed in variables but content becomes options
  	// if none has bene paseed content becomes options
  	if( options ) {
  		sectClass = ' ' + content;
  	} else {
  		options = content;
  		sectClass = '';
  	}
    var html = '<div class="code-example' + sectClass +'">' + options.fn(this) + '</div><!-- End .code-example -->';
        html += '\n\n```html\n' + options.fn(this) + '\n```\n';
        html = Markdown(html);
        // console.log('first', html);
        // html = template.render(html);
        console.log('2nd', html);
    return new Handlebars.SafeString(html);
    // return html;
};