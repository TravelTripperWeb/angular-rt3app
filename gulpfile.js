var gulp = require('gulp');
var concat = require('gulp-concat');

gulp.task('concat', function() {
  return gulp
    .src([
      './src/start.js',
      './src/angular-rt3app.js',
      './src/rt3-filters.js',
      './src/rt3-services.js',
      './src/rt3-directives.js',
      './src/end.js'
    ])
    .pipe(concat('angular-rt3app.js'))
    .pipe(gulp.dest('./dist/'));
});

gulp.task('default', ['concat']);
