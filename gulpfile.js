var gulp = require("gulp");
var ts = require("gulp-typescript");
var watch = require("gulp-watch");
var tsProject = ts.createProject("tsconfig.json");

gulp.task("default", function () {
    return tsProject.src()
        .pipe(tsProject())
        .js.pipe(gulp.dest("dist"));
});

gulp.task('start', function(){
    gulp.watch('src/**/*.ts', ['default']); 
    // Other watchers
  })