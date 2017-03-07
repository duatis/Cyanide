const gulp = require('gulp');
const mocha = require('gulp-mocha');

function handleError(err) {
    console.log(err.toString());
    this.emit('end');
}

gulp.task('default', () => {
    gulp.watch('./**/*.test.js', (event)  =>
    {
        gulp.src(event.path, {read:false}).
        pipe(mocha({reporter: 'nyan'})).
        on("error", handleError);
    }
    );
});