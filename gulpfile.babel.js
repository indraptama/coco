import gulp from 'gulp';
import jade from 'gulp-jade';
import Webpack from 'webpack-stream';
import runSequence from 'run-sequence';
import browserSync, { reload } from 'browser-sync';
import rimraf from 'rimraf';
import jsonConcat from 'gulp-json-concat';


gulp.task('webpack', () => {
  gulp.src('src/index.js')
    .pipe(Webpack(require('./webpack.config.js')))
    .pipe(gulp.dest('dist/'))
    .pipe(reload({ stream: true }));
});

gulp.task('html', () => {
  gulp.src('src/page/*.jade')
  .pipe(jade({ pretty: true }))
  .pipe(gulp.dest('dist/'))
  .pipe(reload({ stream: true }));
});

gulp.task('browserSync', () => {
  browserSync({
    server: {
      baseDir: './dist',
    },
  });
});

gulp.task('jsonM', () => {
  gulp.src('./src/data/*.json')
  .pipe(jsonConcat('db.json', function(data) {
    return new Buffer(JSON.stringify(data));
  }))
    .pipe(gulp.dest('dist/json'));
});

gulp.task('clean', cb => {
  rimraf('dist', cb);
});

gulp.task('watchTask', () => {
  gulp.watch('./src/**/*.*', ['webpack']);
  gulp.watch('./src/page/**/*.jade', ['html']);
});

gulp.task('dev', cb => {
  runSequence('clean', ['browserSync', 'watchTask', 'jsonM', 'html', 'webpack'], cb);
});
