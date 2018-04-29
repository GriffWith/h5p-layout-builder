var gulp = require("gulp");
var ts = require("gulp-typescript");
var watch = require("gulp-watch");
var browserSync = require('browser-sync').create();
var sass = require('gulp-sass');
var tsProject = ts.createProject("tsconfig.json");

gulp.task("build", function () {
    gulp.src("src/ts/*.ts")
        .pipe(tsProject())
        .js.pipe(gulp.dest("dist"));
});

gulp.task('html', function() {
    gulp.src("src/**.html")
        .pipe(gulp.dest('dist'))
        .pipe(browserSync.stream());
  });

gulp.task('sass', function() {
    return gulp.src("src/scss/*.scss")
        .pipe(sass())
        .pipe(gulp.dest("dist/css"))
        .pipe(browserSync.stream());
});

// Static Server + watching scss/html/ts files
gulp.task('serve', ['sass', "build", "html"], function() {

    browserSync.init({
        server: "./dist"
    });

    gulp.watch("src/scss/*.scss", ['sass']);
    gulp.watch("src/ts/*.ts", ['build']);
    gulp.watch("src/*.html", ['html']);
    // gulp.watch("src/*.html").on('change', browserSync.reload);
    // gulp.watch("src/*.ts").on('change', browserSync.reload);
});


gulp.task('default', ['serve']);