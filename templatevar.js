/**
 * Load template from variable
 * 
 * @param  {variable} Handlebars A variable containing a template name
 * @return {template html}
 */

var Handlebars = require('handlebars');

module.exports = function templatevar(content, options) {
    template = this.app.getPartial(content);
    return new Handlebars.SafeString(template.render(this.context));
};
