const gulp = require('gulp');
const htmltidy = require('gulp-htmltidy');
const autoprefixer = require('gulp-autoprefixer');
const csslint = require('gulp-csslint');
const babel = require('gulp-babel');
const jshint = require('gulp-jshint');

/*function build(cb) {
*	var build = gulp.series(gulp.parallel(html,css,js));
*	cb();
*}
*/

/*
* var build = gulp.series(gulp.parallel(html,css,js));
*/

var build = gulp.parallel(html,css,js);

function html(cb) {
  return gulp.src('src/index.html')
        .pipe(htmltidy())
        .pipe(gulp.dest('build'));
	cb();
}


function css(cb) {
    return gulp.src('src/style.css')
        .pipe(csslint())
        .pipe(csslint.formatter('compact'))
        .pipe(autoprefixer({
            browserlist: ['last 5 versions'],
            cascade: false
        }))
        .pipe(gulp.dest('build'));
	cb();
}

function js(cb) {
    return gulp.src('src/main.js')
        .pipe(jshint())
        .pipe(jshint.reporter('default'))
        .pipe(babel({
            presets: ['@babel/env']
        }))
        .pipe(gulp.dest('build'));
        cb();
}


exports.html = html;
exports.css = css;
exports.js = js;
exports.build = build;

/*
 * Define default task that can be called by just running `gulp` from cli
 */
exports.default = build;
