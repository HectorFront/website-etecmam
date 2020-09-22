const gulp = require('gulp');
const babel = require('gulp-babel');
const plumber = require('gulp-plumber');
const uglify = require('gulp-uglify');

gulp.task('default', function () {
  console.log({ gulp_status: 'OK' })
});

gulp.task("babel", function () {
  return gulp.src("frontend/js_dev/**/*.js")
    .pipe(plumber())
    .pipe(babel({ presets: ['es2015'] }))
    .pipe(gulp.dest("frontend/public/js_transpiled"));
});

gulp.task('minify-js-controller', function () {
  return gulp.src('frontend/public/js_transpiled/controller/**/*.js')
    .pipe(uglify())
    .pipe(gulp.dest('frontend/public/js/controller'));
});

gulp.task('minify-js-query', function () {
  return gulp.src('frontend/public/js_transpiled/query/**/*.js')
    .pipe(uglify())
    .pipe(gulp.dest('frontend/public/js/query'));
});

gulp.task('minify-js-tools', function () {
  return gulp.src('frontend/public/js_transpiled/tools/*.js')
    .pipe(uglify())
    .pipe(gulp.dest('frontend/public/js/tools'));
});