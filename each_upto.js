/**
 * For each with a limit
 *
 *  {{#each_upto features-data 3}}
 *    // Stuff
 *  {{/each_upto}}
 *
 **/

module.exports = function each_upto(ary, max, options) {
    var result = [ ];
    for(var i = 0; i < max && i < ary.length; ++i)
        result.push(options.fn(ary[i]));
    return result.join('');
};
