var gulp = require('gulp');
var json5 = require('../');

gulp.task('default', function() {
  return gulp.src('json5-src/**/*.json5')
    .pipe(json5({
      beautify: false
    }))
    .pipe(gulp.dest("./build"));
});
