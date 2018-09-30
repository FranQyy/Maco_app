var gulp = require("gulp");
var pug = require("gulp-pug");
var less = require("gulp-less");
var minifyCSS = require("gulp-csso");
var concat = require("gulp-concat");
var sourcemaps = require("gulp-sourcemaps");

var SCSS_SRC = "./src/Assets/scss/**/*.scss";
var SCSS_DEST = "./src/Assets/css";

gulp.task("html", function() {
  return gulp
    .src(SCSS_SRC)
    .pipe(pug())
    .pipe(gulp.dest(SCSS_DEST));
});

gulp.task("css", function() {
  return gulp
    .src(SCSS_SRC)
    .pipe(less())
    .pipe(minifyCSS())
    .pipe(gulp.dest(SCSS_DEST));
});

gulp.task("js", function() {
  return gulp
    .src(SCSS_SRC)
    .pipe(sourcemaps.init())
    .pipe(concat("app.min.js"))
    .pipe(sourcemaps.write())
    .pipe(gulp.dest(SCSS_DEST));
});

gulp.task("default", ["html", "css", "js"]);
