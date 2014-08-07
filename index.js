var path = require('path');
var gutil = require('gulp-util');
var map = require('map-stream');
var JSON5 = require('JSON5');

var PluginError = gutil.PluginError;

const PLUGIN_NAME = 'gulp-json5';

module.exports = function(options) {

  options = typeof options !== 'object' ? {} : options;
  options.beautify = options.hasOwnProperty('beautify') ? !!options.beautify : true;

  function parseJSON5(file, callback) {
    var obj = {};
    if (!file.isNull()) {
      try {
        obj = JSON5.parse(file.contents + '');
      } catch (err) {
        throw new PluginError(PLUGIN_NAME, "JSON5 parser error", err);
      }
    }
    file.contents = new Buffer(JSON5.stringify(obj, null, options['beautify'] ? 4 : null));
    file.path = path.join(file.base, path.basename(file.path, path.extname(file.path)) + '.json');
    callback(null, file);
  }

  return map(parseJSON5);

}
