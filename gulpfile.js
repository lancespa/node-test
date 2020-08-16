const gulp = require('gulp');
const htmltidy = require('gulp-htmltidy');
const autoprefixer = require('gulp-autoprefixer');
const csslint = require('gulp-csslint');
const babel = require('gulp-babel');
const jshint = require('gulp-jshint');

function defaultTask(cb) {

	cb();
}

exports.default = defaultTask

function html(cb) {
  return gulp.src('src/index.html')
        .pipe(htmltidy())
        .pipe(gulp.dest('build'));
	cb()
}

exports.html = html

function css(cb) {
    return gulp.src('src/style.css')
        .pipe(csslint())
        .pipe(csslint.formatter('compact'))
        .pipe(autoprefixer({
            browsers: ['last 5 versions'],
            cascade: false
        }))
        .pipe(gulp.dest('build'));
	callback()
}

exports.css = css

function js(cb) {
    return gulp.src('src/main.js')
        .pipe(jshint())
        .pipe(jshint.reporter('default'))
        .pipe(babel({
            presets: ['@babel/env']
        }))
        .pipe(gulp.dest('build'));
        cb()
}

exports.js = js
