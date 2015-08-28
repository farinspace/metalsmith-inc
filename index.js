var _ = require('lodash');
var readFileSync = require('fs').readFileSync;
module.exports = function(config) {
    config = _.assign({
        'directory': '.',
        'pattern': /^include (.*)/gmi
    }, config || {});
    config.directory = config.directory.replace(/\/+$/g, '') + '/';
    return function(files, metalsmith, done) {
        _.forEach(files, function (fileMeta, fileName) {
            files[fileName].contents = fileMeta.contents.toString().replace(config.pattern, function(match, file){
                return readFileSync(config.directory + file,'utf8');
            });
        });
        done();
    };
}
