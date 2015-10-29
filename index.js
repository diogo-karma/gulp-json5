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
        // Find the line causing error
        var pos, line, lines = err.text.split(/\n/);
        for (pos = 0, line = 0; pos < err.at && line < lines.length; line++) {
          pos += lines[line].length;
        }
        // Report the error using a gcc message format like
        // When the file content is a single line, displays the position instead of the line.
        throw new PluginError(PLUGIN_NAME, file.relative  + ':' + (line || err.at) + ': ' + err.message);
      }
    }
    file.contents = new Buffer(JSON5.stringify(obj, null, options['beautify'] ? 4 : null));
    file.path = path.join(path.dirname(file.path), path.basename(file.path, path.extname(file.path)) + '.json');    
    callback(null, file);
  }

  return map(parseJSON5);

}
