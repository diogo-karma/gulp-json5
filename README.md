
## Information

<table>
<tr>
<td>Package</td><td>gulp-json5</td>
</tr>
<tr>
<td>Description</td>
<td>Convert <a href="http://json5.org/">JSON5</a> to JSON with gulp.</td>
</tr>
<tr>
<td>Node Version</td>
<td>>= 0.10</td>
</tr>
</table>

## Installion

```
npm install --save-dev gulp-json5
```

## Usage

```js
var gulp = require('gulp');
var json5 = require('gulp-json5');

gulp.task('default', function() {
  return gulp.src('src/**/*.json5')
    .pipe(json5({
      beautify: true // default
    }))
    .pipe(gulp.dest("./build"));
});

```

#### You can view more examples in the [example folder](https://github.com/nechtan/gulp-json5/tree/master/examples).

### Options
* `beautify` - Causes the resulting file to be pretty-printed.

## LICENSE

(MIT License)

▲ 2014 Diogo Karma <dnechtan@gmail.com> ▲ https://karmas.digital

Permission is hereby granted, free of charge, to any person obtaining
a copy of this software and associated documentation files (the
"Software"), to deal in the Software without restriction, including
without limitation the rights to use, copy, modify, merge, publish,
distribute, sublicense, and/or sell copies of the Software, and to
permit persons to whom the Software is furnished to do so, subject to
the following conditions:

The above copyright notice and this permission notice shall be
included in all copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND,
EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF
MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND
NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE
LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION
OF CONTRACT, TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION
WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.
