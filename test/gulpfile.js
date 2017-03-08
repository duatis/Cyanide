const gulp = require('gulp');
const mocha = require('gulp-mocha');

function handleError(err) {
    console.log(err.toString());
    this.emit('end');
}

gulp.task('default', () => {

    gulp.src('./**/*.test.js').
    pipe(mocha()).
    on("error", handleError);

    gulp.watch('./**/*.test.js', (event)  =>
    {
        console.log("path:" + event.path);
        gulp.src(event.path, {read:false, ingoreInitial: false}).
        pipe(mocha()).
        on("error", handleError);
    }
    );
});