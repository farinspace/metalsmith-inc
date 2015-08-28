var _ = require('lodash');
var readFileSync = require('fs').readFileSync;
module.exports = function(config) {
    config = _.assign({
        'directory': '.',
        'pattern': '^include (.*)'
    }, config || {});
    config.directory = config.directory.replace(/\/+$/g, '') + '/';
    var exp = new RegExp(config.pattern, 'gmi');
    return function(files, metalsmith, done) {
        _.forEach(files, function (fileMeta, fileName) {
            files[fileName].contents = fileMeta.contents.toString().replace(exp, function(match, file){
                return readFileSync(config.directory + file,'utf8');
            });
        });
        done();
    };
}
