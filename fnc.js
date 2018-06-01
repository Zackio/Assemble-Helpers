/*
var fnc = require('./fnc');
fnc.log('Hello!')
*/
module.exports = {
	log: function ( msg ) {
		var errorMsg = "\n---\n";
		errorMsg += msg + "\n";
		errorMsg += "\n---\n";
		console.log( msg );
	},
	checkTemplate: function(template) {
  	    // Check template exists
  	    if (typeof template === 'undefined') {
  	    	var errorMsg = "\n---\n";
  	    	errorMsg += "Missing layout: '" + layout + "'\n";
  	    	if ( typeof layout === 'object' ) {
  	    		errorMsg = errorMsg + "Did you miss the quote marks?";
  	    	}
  	    	errorMsg += "\n---\n";
  	    	throw new Error(errorMsg);
  	    }
  	},
  	merge: function(target, source) {

    /* Merges two (or more) objects,
    giving the last one precedence */

    if ( typeof target !== 'object' ) {
    	target = {};
    }

    for (var property in source) {

    	if ( source.hasOwnProperty(property) ) {

    		var sourceProperty = source[ property ];

    		if ( typeof sourceProperty === 'object' ) {
    			target[ property ] = util.merge( target[ property ], sourceProperty );
    			continue;
    		}

    		target[ property ] = sourceProperty;

    	}

    }

    for (var a = 2, l = arguments.length; a < l; a++) {
    	merge(target, arguments[a]);
    }

    return target;

},

};
