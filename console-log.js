var Handlebars = require('handlebars');

module.exports = function cl( options ) {

	var innerHelperContent = options.fn(this.context);

	var html = '<script>console.log(\'' + innerHelperContent + '\')</script>';
	return new Handlebars.SafeString(html);
};