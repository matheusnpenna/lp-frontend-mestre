const { src, dest, watch } = require('gulp');
const sass = require('gulp-sass');
const minifyCSS = require('gulp-css');
const concat = require('gulp-concat');
const minify = require('gulp-minify');
const purgecss = require('gulp-purgecss')

function scss() {
  return src('frontend/scss/app.scss')
    .pipe(sass())
    .pipe(purgecss({
      content: ['dist/**.html']
    }))
    .pipe(minifyCSS())
    .pipe(dest('dist/assets/css'))
}

function js() {
  return src('frontend/js/*.js')
    .pipe(concat('app.js'))
    .pipe(minify())
    .pipe(dest('dist/assets/js'))
}

exports.default = function() {
  watch('frontend/scss/*', scss);
  watch('dist/**/*.html', scss);
  watch('frontend/js/*', js);
};

scss();
js();