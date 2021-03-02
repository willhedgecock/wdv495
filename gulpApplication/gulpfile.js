const gulp = require('gulp');
const uglify = require('gulp-uglify');
const sass = require('gulp-sass');
const concat = require('gulp-concat');

//SASS COMPILER
gulp.task('sass', function(done) {
    gulp.src('src/sass/*.scss')
    .pipe(sass().on('error', sass.logError))
    .pipe(gulp.dest('public/css'));
    done();
})

//MINIFY & CONCATENATE SCRIPTS
gulp.task('scriptsMin', function(done) {
    gulp.src('src/js/*.js')
    .pipe(concat('minifiedScripts.js'))
    .pipe(uglify())
    .pipe(gulp.dest('public/js'));
    done();
})

//THIS TASK WATCHES FOR CHANGES AND EXECUTES THE TASK ACCORDINGLY
gulp.task('watch', function() {
    gulp.watch('src/js/*.js', gulp.parallel(['scriptsMin']));
    gulp.watch('src/sass/*.scss', gulp.parallel(['sass']));
})

gulp.task('default', gulp.parallel(['sass', 'scriptsMin']));